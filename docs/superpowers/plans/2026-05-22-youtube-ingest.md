# YouTube Ingest Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extend `/ingest` so YouTube URLs passed as arguments are fetched, transcribed, and processed into wiki notes through the existing Phase 1-3 pipeline.

**Architecture:** A new helper script `yt_fetch.py` performs all YouTube I/O (yt-dlp metadata + captions, with whisper.cpp audio-transcription fallback) and writes a fully-formed source markdown file to `content/_raw/processed/`. The `ingest` skill gains a Phase 0 that invokes this script per URL before the existing pre-scan/execute/report phases run unchanged. The helper has unit-tested pure functions (URL normalization, VTT parsing, slug, frontmatter assembly) and thin subprocess wrappers for yt-dlp / whisper.

**Tech Stack:** Python 3.11+ (stdlib only — no new dependencies), `yt-dlp` CLI, `ffmpeg`, `whisper.cpp` binary + `ggml-large-v3.bin` model. Tests use `pytest` (already in dev environment) or `python -m unittest` as fallback.

---

## Spec

`docs/superpowers/specs/2026-05-22-youtube-ingest-design.md`

## File Structure

| Path | Action | Responsibility |
|---|---|---|
| `.claude/skills/ingest/scripts/yt_fetch.py` | create | CLI: `python yt_fetch.py <url> --out-dir _raw/processed/`. Orchestrates fetch + archive. Contains pure helpers + subprocess shims. |
| `.claude/skills/ingest/scripts/test_yt_fetch.py` | create | Unit tests for pure functions. Integration tests gated on tool availability via `unittest.skipUnless`. |
| `.claude/skills/ingest/SKILL.md` | modify | Add Phase 0 section; adjust Phase 1/2/3 wording; add failure-handling table; add prerequisites. |

The helper script is small and self-contained — single Python file is appropriate here. Splitting into modules would over-engineer a ~250-line utility.

---

## Task 1: Set up helper script skeleton + URL normalization

**Files:**
- Create: `.claude/skills/ingest/scripts/yt_fetch.py`
- Create: `.claude/skills/ingest/scripts/test_yt_fetch.py`

- [ ] **Step 1: Write failing test**

`.claude/skills/ingest/scripts/test_yt_fetch.py`:
```python
import unittest
from yt_fetch import normalize_url, YTUrlError


class TestNormalizeUrl(unittest.TestCase):
    def test_watch_url(self):
        self.assertEqual(normalize_url("https://www.youtube.com/watch?v=dQw4w9WgXcQ"), "dQw4w9WgXcQ")

    def test_short_url(self):
        self.assertEqual(normalize_url("https://youtu.be/dQw4w9WgXcQ"), "dQw4w9WgXcQ")

    def test_short_url_with_timestamp(self):
        self.assertEqual(normalize_url("https://youtu.be/dQw4w9WgXcQ?t=42"), "dQw4w9WgXcQ")

    def test_mobile_url(self):
        self.assertEqual(normalize_url("https://m.youtube.com/watch?v=dQw4w9WgXcQ"), "dQw4w9WgXcQ")

    def test_watch_url_with_extra_params(self):
        self.assertEqual(
            normalize_url("https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=ABC&t=5s"),
            "dQw4w9WgXcQ",
        )

    def test_non_youtube_raises(self):
        with self.assertRaises(YTUrlError):
            normalize_url("https://vimeo.com/12345")

    def test_garbage_raises(self):
        with self.assertRaises(YTUrlError):
            normalize_url("not a url")


if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run test, verify failure**

Run: `python -m unittest .claude/skills/ingest/scripts/test_yt_fetch.py -v`
Expected: FAIL with `ModuleNotFoundError: No module named 'yt_fetch'`

- [ ] **Step 3: Implement skeleton + normalize_url**

`.claude/skills/ingest/scripts/yt_fetch.py`:
```python
"""YouTube source fetcher for /ingest skill.

Fetches metadata + transcript for a YouTube URL and writes a synthesized
source markdown file under content/_raw/processed/ for downstream ingest.
"""
from __future__ import annotations

import re
from urllib.parse import urlparse, parse_qs


class YTUrlError(ValueError):
    """Raised when input does not look like a recognized YouTube URL."""


_HOSTS = {"youtube.com", "www.youtube.com", "m.youtube.com", "youtu.be"}
_VIDEO_ID_RE = re.compile(r"^[A-Za-z0-9_-]{11}$")


def normalize_url(url: str) -> str:
    """Return canonical 11-char video_id for a YouTube URL.

    Raises YTUrlError on anything that doesn't parse to a valid YT video id.
    """
    try:
        parsed = urlparse(url)
    except ValueError as e:
        raise YTUrlError(str(e)) from e

    if parsed.scheme not in {"http", "https"} or parsed.netloc not in _HOSTS:
        raise YTUrlError(f"Not a YouTube URL: {url!r}")

    if parsed.netloc == "youtu.be":
        candidate = parsed.path.lstrip("/")
    else:
        candidate = parse_qs(parsed.query).get("v", [""])[0]

    if not _VIDEO_ID_RE.match(candidate):
        raise YTUrlError(f"Could not extract video_id from {url!r}")
    return candidate
```

- [ ] **Step 4: Run tests, verify pass**

Run: `cd .claude/skills/ingest/scripts && python -m unittest test_yt_fetch.py -v`
Expected: 7 tests, all PASS.

- [ ] **Step 5: Commit**

```bash
git add .claude/skills/ingest/scripts/yt_fetch.py .claude/skills/ingest/scripts/test_yt_fetch.py
git commit -m "ingest: add yt_fetch skeleton with URL normalization"
```

---

## Task 2: VTT parsing

**Files:**
- Modify: `.claude/skills/ingest/scripts/yt_fetch.py`
- Modify: `.claude/skills/ingest/scripts/test_yt_fetch.py`

- [ ] **Step 1: Write failing test**

Append to `test_yt_fetch.py`:
```python
from yt_fetch import parse_vtt, VttCue


class TestParseVtt(unittest.TestCase):
    SAMPLE = """WEBVTT
Kind: captions
Language: en

00:00:00.000 --> 00:00:03.500
Hello and welcome to the show.

00:00:03.500 --> 00:00:07.000
Today we're talking about Python.

00:00:07.000 --> 00:00:10.000
<c.colorE5E5E5>Let's dive in.</c>
"""

    def test_returns_cues_with_seconds(self):
        cues = parse_vtt(self.SAMPLE)
        self.assertEqual(len(cues), 3)
        self.assertEqual(cues[0], VttCue(start=0.0, text="Hello and welcome to the show."))
        self.assertEqual(cues[1].start, 3.5)
        self.assertEqual(cues[2].text, "Let's dive in.")  # tags stripped

    def test_empty_vtt_returns_empty(self):
        self.assertEqual(parse_vtt("WEBVTT\n\n"), [])

    def test_format_seconds_to_mmss(self):
        from yt_fetch import format_timestamp
        self.assertEqual(format_timestamp(0), "0:00")
        self.assertEqual(format_timestamp(65), "1:05")
        self.assertEqual(format_timestamp(3725), "1:02:05")
```

- [ ] **Step 2: Run, verify fail**

Run: `python -m unittest test_yt_fetch.py -v`
Expected: FAIL with `ImportError: cannot import name 'parse_vtt'`

- [ ] **Step 3: Implement**

Append to `yt_fetch.py`:
```python
from dataclasses import dataclass


@dataclass(frozen=True)
class VttCue:
    start: float  # seconds
    text: str


_VTT_TIME_RE = re.compile(r"^(\d{2}):(\d{2}):(\d{2})\.(\d{3})\s*-->")
_VTT_TAG_RE = re.compile(r"<[^>]+>")


def _vtt_time_to_seconds(h: str, m: str, s: str, ms: str) -> float:
    return int(h) * 3600 + int(m) * 60 + int(s) + int(ms) / 1000.0


def parse_vtt(vtt_text: str) -> list[VttCue]:
    """Parse WebVTT into a list of cues. Strips styling tags and timing tags.

    Coalesces consecutive identical-text cues (YouTube auto-captions emit many).
    """
    cues: list[VttCue] = []
    lines = vtt_text.splitlines()
    i = 0
    while i < len(lines):
        m = _VTT_TIME_RE.match(lines[i])
        if not m:
            i += 1
            continue
        start = _vtt_time_to_seconds(*m.groups())
        i += 1
        text_parts: list[str] = []
        while i < len(lines) and lines[i].strip():
            text_parts.append(_VTT_TAG_RE.sub("", lines[i]).strip())
            i += 1
        text = " ".join(p for p in text_parts if p)
        if text and (not cues or cues[-1].text != text):
            cues.append(VttCue(start=start, text=text))
    return cues


def format_timestamp(seconds: float) -> str:
    """Format seconds as M:SS or H:MM:SS."""
    s = int(seconds)
    h, rem = divmod(s, 3600)
    m, s = divmod(rem, 60)
    if h:
        return f"{h}:{m:02d}:{s:02d}"
    return f"{m}:{s:02d}"
```

- [ ] **Step 4: Run, verify pass**

Run: `python -m unittest test_yt_fetch.py -v`
Expected: 10 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add .claude/skills/ingest/scripts/
git commit -m "ingest: add VTT parser to yt_fetch"
```

---

## Task 3: Slugify + archive path

**Files:**
- Modify: `.claude/skills/ingest/scripts/yt_fetch.py`
- Modify: `.claude/skills/ingest/scripts/test_yt_fetch.py`

- [ ] **Step 1: Write failing test**

Append to `test_yt_fetch.py`:
```python
from yt_fetch import slugify, archive_filename


class TestSlugAndPath(unittest.TestCase):
    def test_slugify_basic(self):
        self.assertEqual(slugify("Hello, World!"), "hello-world")

    def test_slugify_unicode(self):
        self.assertEqual(slugify("Café Łódź"), "cafe-lodz")

    def test_slugify_truncates_at_60(self):
        long = "word " * 30
        self.assertLessEqual(len(slugify(long)), 60)

    def test_slugify_strips_edge_dashes(self):
        self.assertEqual(slugify("--- weird ---"), "weird")

    def test_archive_filename(self):
        self.assertEqual(
            archive_filename("2026-05-22", "dQw4w9WgXcQ", "Some Title!"),
            "2026-05-22_yt-dQw4w9WgXcQ_some-title.md",
        )
```

- [ ] **Step 2: Run, verify fail**

Run: `python -m unittest test_yt_fetch.py -v`
Expected: FAIL.

- [ ] **Step 3: Implement**

Append to `yt_fetch.py`:
```python
import unicodedata


def slugify(text: str, max_len: int = 60) -> str:
    """ASCII slug: lowercase, hyphenated, max_len chars."""
    normalized = unicodedata.normalize("NFKD", text)
    ascii_text = normalized.encode("ascii", "ignore").decode("ascii")
    slug = re.sub(r"[^a-zA-Z0-9]+", "-", ascii_text).strip("-").lower()
    if len(slug) > max_len:
        slug = slug[:max_len].rstrip("-")
    return slug


def archive_filename(date_str: str, video_id: str, title: str) -> str:
    """Return the canonical archive filename for a YT source."""
    return f"{date_str}_yt-{video_id}_{slugify(title)}.md"
```

- [ ] **Step 4: Run, verify pass**

Run: `python -m unittest test_yt_fetch.py -v`
Expected: 15 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add .claude/skills/ingest/scripts/
git commit -m "ingest: add slugify and archive_filename helpers"
```

---

## Task 4: Frontmatter + source-file assembly (pure)

**Files:**
- Modify: `.claude/skills/ingest/scripts/yt_fetch.py`
- Modify: `.claude/skills/ingest/scripts/test_yt_fetch.py`

- [ ] **Step 1: Write failing test**

Append to `test_yt_fetch.py`:
```python
from yt_fetch import assemble_source_markdown


class TestAssembleSource(unittest.TestCase):
    def test_minimal(self):
        meta = {
            "video_id": "abc12345678",
            "title": "Test",
            "channel": "Chan",
            "uploader_id": "@chan",
            "duration": 65,
            "upload_date": "20260415",
            "language": "en",
            "tags": ["t1", "t2"],
            "categories": ["Education"],
            "chapters": [],
            "webpage_url": "https://www.youtube.com/watch?v=abc12345678",
        }
        cues = [VttCue(0.0, "Line one."), VttCue(3.5, "Line two.")]
        out = assemble_source_markdown(
            meta=meta,
            cues=cues,
            transcription="captions",
            fetched_iso="2026-05-22T14:30:00Z",
        )
        self.assertIn("video_id: abc12345678", out)
        self.assertIn('source_url: https://www.youtube.com/watch?v=abc12345678', out)
        self.assertIn("duration: 65", out)
        self.assertIn('duration_human: "1:05"', out)
        self.assertIn("published: 2026-04-15", out)
        self.assertIn("transcription: captions", out)
        self.assertIn("# Test", out)
        self.assertIn("[0:00] Line one.", out)
        self.assertIn("[0:03] Line two.", out)

    def test_with_chapters(self):
        meta = {
            "video_id": "abc12345678", "title": "T", "channel": "C", "uploader_id": "@c",
            "duration": 200, "upload_date": "20260101", "language": "en",
            "tags": [], "categories": [], "webpage_url": "https://youtu.be/abc12345678",
            "chapters": [
                {"start_time": 0, "title": "Intro"},
                {"start_time": 120, "title": "Main"},
            ],
        }
        out = assemble_source_markdown(meta=meta, cues=[], transcription="captions", fetched_iso="2026-05-22T00:00:00Z")
        self.assertIn("- { start: 0, title: \"Intro\" }", out)
        self.assertIn("- { start: 120, title: \"Main\" }", out)
```

- [ ] **Step 2: Run, verify fail**

Expected: FAIL.

- [ ] **Step 3: Implement**

Append to `yt_fetch.py`:
```python
import json


def _yaml_str(s: str) -> str:
    """Quote string for safe YAML inclusion."""
    return json.dumps(s, ensure_ascii=False)


def _yaml_list(items: list) -> str:
    return "[" + ", ".join(_yaml_str(str(x)) for x in items) + "]"


def assemble_source_markdown(
    *,
    meta: dict,
    cues: list[VttCue],
    transcription: str,
    fetched_iso: str,
) -> str:
    """Build the full archived-source markdown (frontmatter + body)."""
    upload = meta["upload_date"]  # YYYYMMDD
    published = f"{upload[0:4]}-{upload[4:6]}-{upload[6:8]}"
    duration = int(meta["duration"])
    duration_human = format_timestamp(duration)

    chapter_lines = []
    for ch in meta.get("chapters") or []:
        title = ch.get("title", "")
        start = int(ch.get("start_time", 0))
        chapter_lines.append(f'  - {{ start: {start}, title: {_yaml_str(title)} }}')
    chapters_block = "chapters:\n" + ("\n".join(chapter_lines) if chapter_lines else "  []")

    fm = [
        "---",
        f"video_id: {meta['video_id']}",
        f"source_url: {meta['webpage_url']}",
        f"title: {_yaml_str(meta['title'])}",
        f"channel: {_yaml_str(meta['channel'])}",
        f"uploader_id: {_yaml_str(meta.get('uploader_id', ''))}",
        f"duration: {duration}",
        f"duration_human: {_yaml_str(duration_human)}",
        f"published: {published}",
        f"language: {meta.get('language') or 'unknown'}",
        f"transcription: {transcription}",
        chapters_block,
        f"tags: {_yaml_list(meta.get('tags') or [])}",
        f"categories: {_yaml_list(meta.get('categories') or [])}",
        f"fetched: {fetched_iso}",
        "---",
        "",
        f"# {meta['title']}",
        "",
    ]
    body_lines = [f"[{format_timestamp(c.start)}] {c.text}" for c in cues]
    return "\n".join(fm + body_lines) + ("\n" if body_lines else "")
```

- [ ] **Step 4: Run, verify pass**

Expected: 17 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add .claude/skills/ingest/scripts/
git commit -m "ingest: assemble archived source markdown"
```

---

## Task 5: yt-dlp subprocess wrappers

**Files:**
- Modify: `.claude/skills/ingest/scripts/yt_fetch.py`
- Modify: `.claude/skills/ingest/scripts/test_yt_fetch.py`

- [ ] **Step 1: Write tests (gated on yt-dlp availability)**

Append to `test_yt_fetch.py`:
```python
import shutil
from yt_fetch import yt_dlp_available, fetch_metadata, fetch_captions_vtt, YTFetchError


YT_DLP = shutil.which("yt-dlp")


class TestYtDlpProbes(unittest.TestCase):
    def test_availability_helper(self):
        self.assertEqual(yt_dlp_available(), YT_DLP is not None)


@unittest.skipUnless(YT_DLP, "yt-dlp not on PATH")
class TestYtDlpIntegration(unittest.TestCase):
    URL = "https://www.youtube.com/watch?v=jNQXAC9IVRw"  # "Me at the zoo" — has en captions

    def test_fetch_metadata_smoke(self):
        meta = fetch_metadata(self.URL)
        self.assertEqual(meta["video_id"] if "video_id" in meta else meta["id"], "jNQXAC9IVRw")
        self.assertTrue(meta["title"])
        self.assertGreater(meta["duration"], 0)

    def test_fetch_captions_returns_vtt_or_none(self):
        result = fetch_captions_vtt(self.URL)
        # Either we got VTT text or None — but for this video we expect captions.
        self.assertIsNotNone(result, "expected captions for the canonical test video")
        self.assertTrue(result.startswith("WEBVTT"))
```

- [ ] **Step 2: Run, verify fail**

Expected: FAIL with import errors.

- [ ] **Step 3: Implement**

Append to `yt_fetch.py`:
```python
import shutil
import subprocess
import tempfile
import os
from pathlib import Path


class YTFetchError(RuntimeError):
    """Raised when yt-dlp or whisper fails in a way we should report."""


def yt_dlp_available() -> bool:
    return shutil.which("yt-dlp") is not None


def fetch_metadata(url: str, timeout: int = 60) -> dict:
    """Run yt-dlp to get full video metadata as a dict."""
    if not yt_dlp_available():
        raise YTFetchError("yt-dlp not on PATH")
    try:
        proc = subprocess.run(
            ["yt-dlp", "--dump-single-json", "--skip-download", "--no-warnings", url],
            capture_output=True, text=True, timeout=timeout, check=True,
        )
    except subprocess.CalledProcessError as e:
        raise YTFetchError(f"yt-dlp metadata failed: {e.stderr.strip()[:500]}") from e
    except subprocess.TimeoutExpired as e:
        raise YTFetchError(f"yt-dlp metadata timed out after {timeout}s") from e
    data = json.loads(proc.stdout)
    # Normalize: ensure `video_id` key exists
    data["video_id"] = data.get("id", "")
    return data


def fetch_captions_vtt(url: str, langs: str = "en,en-US,en-GB,pl", timeout: int = 120) -> str | None:
    """Download caption VTT for the URL. Returns VTT text or None if no captions available."""
    if not yt_dlp_available():
        raise YTFetchError("yt-dlp not on PATH")
    with tempfile.TemporaryDirectory() as tmp:
        out_template = os.path.join(tmp, "sub")
        try:
            subprocess.run(
                [
                    "yt-dlp", "--write-subs", "--write-auto-subs",
                    "--sub-langs", langs, "--sub-format", "vtt",
                    "--skip-download", "--no-warnings",
                    "-o", out_template, url,
                ],
                capture_output=True, text=True, timeout=timeout, check=True,
            )
        except subprocess.CalledProcessError as e:
            raise YTFetchError(f"yt-dlp captions failed: {e.stderr.strip()[:500]}") from e
        except subprocess.TimeoutExpired as e:
            raise YTFetchError(f"yt-dlp captions timed out after {timeout}s") from e

        vtt_files = sorted(Path(tmp).glob("*.vtt"))
        if not vtt_files:
            return None
        # Prefer non-auto captions if both exist (no "auto" tag in filename).
        manual = [p for p in vtt_files if ".auto." not in p.name]
        chosen = manual[0] if manual else vtt_files[0]
        return chosen.read_text(encoding="utf-8")
```

- [ ] **Step 4: Run, verify pass**

Run: `python -m unittest test_yt_fetch.py -v`
Expected: All PASS. Integration tests run if yt-dlp installed, skip otherwise.

- [ ] **Step 5: Commit**

```bash
git add .claude/skills/ingest/scripts/
git commit -m "ingest: yt-dlp metadata + captions fetchers"
```

---

## Task 6: Whisper fallback

**Files:**
- Modify: `.claude/skills/ingest/scripts/yt_fetch.py`
- Modify: `.claude/skills/ingest/scripts/test_yt_fetch.py`

- [ ] **Step 1: Write tests (gated)**

Append to `test_yt_fetch.py`:
```python
from yt_fetch import whisper_available, transcribe_with_whisper, parse_whisper_output


class TestWhisperPure(unittest.TestCase):
    SAMPLE_WHISPER = """[00:00:00.000 --> 00:00:03.500]  Hello and welcome.
[00:00:03.500 --> 00:00:07.000]  Today's topic is testing.
"""

    def test_parse_whisper_output(self):
        cues = parse_whisper_output(self.SAMPLE_WHISPER)
        self.assertEqual(len(cues), 2)
        self.assertEqual(cues[0], VttCue(start=0.0, text="Hello and welcome."))
        self.assertEqual(cues[1].start, 3.5)
```

- [ ] **Step 2: Run, verify fail**

Expected: ImportError.

- [ ] **Step 3: Implement**

Append to `yt_fetch.py`:
```python
_WHISPER_LINE_RE = re.compile(
    r"^\[(\d{2}):(\d{2}):(\d{2})\.(\d{3})\s*-->\s*\d{2}:\d{2}:\d{2}\.\d{3}\]\s*(.*)$"
)


def whisper_available() -> bool:
    bin_path = os.environ.get("WHISPER_CPP_BIN")
    model_path = os.environ.get("WHISPER_MODEL")
    return bool(bin_path and model_path and Path(bin_path).exists() and Path(model_path).exists())


def parse_whisper_output(text: str) -> list[VttCue]:
    """Parse whisper.cpp default stdout format into cues."""
    cues: list[VttCue] = []
    for line in text.splitlines():
        m = _WHISPER_LINE_RE.match(line)
        if not m:
            continue
        h, mm, s, ms, body = m.groups()
        start = _vtt_time_to_seconds(h, mm, s, ms)
        body = body.strip()
        if body:
            cues.append(VttCue(start=start, text=body))
    return cues


def transcribe_with_whisper(url: str, timeout: int = 1800) -> list[VttCue]:
    """Download audio with yt-dlp and transcribe with whisper.cpp. Returns cues.

    Requires WHISPER_CPP_BIN and WHISPER_MODEL env vars and ffmpeg on PATH.
    """
    if not yt_dlp_available():
        raise YTFetchError("yt-dlp not on PATH")
    if not shutil.which("ffmpeg"):
        raise YTFetchError("ffmpeg not on PATH (required for audio extraction)")
    bin_path = os.environ.get("WHISPER_CPP_BIN")
    model_path = os.environ.get("WHISPER_MODEL")
    if not (bin_path and model_path):
        raise YTFetchError("WHISPER_CPP_BIN and WHISPER_MODEL env vars not set")
    if not Path(bin_path).exists():
        raise YTFetchError(f"WHISPER_CPP_BIN not found: {bin_path}")
    if not Path(model_path).exists():
        raise YTFetchError(f"WHISPER_MODEL not found: {model_path}")

    with tempfile.TemporaryDirectory() as tmp:
        audio = os.path.join(tmp, "audio.wav")
        try:
            subprocess.run(
                [
                    "yt-dlp", "-x", "--audio-format", "wav",
                    "--no-warnings",
                    "-o", os.path.join(tmp, "audio.%(ext)s"),
                    url,
                ],
                capture_output=True, text=True, timeout=timeout, check=True,
            )
        except subprocess.CalledProcessError as e:
            raise YTFetchError(f"yt-dlp audio failed: {e.stderr.strip()[:500]}") from e

        if not Path(audio).exists():
            raise YTFetchError("yt-dlp produced no audio.wav")

        try:
            proc = subprocess.run(
                [bin_path, "-m", model_path, "-f", audio, "-otxt", "-of", os.path.join(tmp, "out")],
                capture_output=True, text=True, timeout=timeout, check=True,
            )
        except subprocess.CalledProcessError as e:
            raise YTFetchError(f"whisper.cpp failed: {e.stderr.strip()[:500]}") from e

        # whisper.cpp -otxt writes <of>.txt with [HH:MM:SS.mmm --> HH:MM:SS.mmm]  text
        txt = Path(os.path.join(tmp, "out.txt"))
        if not txt.exists():
            # some whisper.cpp versions print to stdout
            return parse_whisper_output(proc.stdout)
        return parse_whisper_output(txt.read_text(encoding="utf-8"))
```

- [ ] **Step 4: Run, verify pass**

Expected: All PASS (whisper integration not auto-tested — covered by manual smoke test in Task 11).

- [ ] **Step 5: Commit**

```bash
git add .claude/skills/ingest/scripts/
git commit -m "ingest: whisper.cpp fallback transcriber"
```

---

## Task 7: Orchestrator + CLI

**Files:**
- Modify: `.claude/skills/ingest/scripts/yt_fetch.py`
- Modify: `.claude/skills/ingest/scripts/test_yt_fetch.py`

- [ ] **Step 1: Write test**

Append to `test_yt_fetch.py`:
```python
from yt_fetch import fetch_to_archive, FetchResult


class TestFetchToArchive(unittest.TestCase):
    def test_writes_file_and_returns_result(self):
        import datetime
        meta = {
            "id": "abc12345678", "video_id": "abc12345678",
            "title": "Demo", "channel": "Chan", "uploader_id": "@c",
            "duration": 30, "upload_date": "20260101", "language": "en",
            "tags": [], "categories": [], "chapters": [],
            "webpage_url": "https://youtu.be/abc12345678",
        }
        cues = [VttCue(0.0, "hi")]
        with tempfile.TemporaryDirectory() as tmp:
            out_dir = Path(tmp)
            result = fetch_to_archive(
                meta=meta, cues=cues, transcription="captions",
                out_dir=out_dir, today=datetime.date(2026, 5, 22),
                fetched_iso="2026-05-22T00:00:00Z",
            )
            self.assertIsInstance(result, FetchResult)
            self.assertEqual(result.video_id, "abc12345678")
            self.assertTrue(result.archive_path.exists())
            self.assertEqual(result.archive_path.name, "2026-05-22_yt-abc12345678_demo.md")
            content = result.archive_path.read_text(encoding="utf-8")
            self.assertIn("video_id: abc12345678", content)
            self.assertIn("[0:00] hi", content)
```

- [ ] **Step 2: Run, verify fail**

Expected: ImportError.

- [ ] **Step 3: Implement orchestrator + CLI**

Append to `yt_fetch.py`:
```python
import datetime
import sys
import argparse


@dataclass(frozen=True)
class FetchResult:
    video_id: str
    title: str
    archive_path: Path
    transcription: str  # "captions" | "whisper-large-v3"
    duration: int


def fetch_to_archive(
    *,
    meta: dict,
    cues: list[VttCue],
    transcription: str,
    out_dir: Path,
    today: datetime.date,
    fetched_iso: str,
) -> FetchResult:
    """Write the archived source file. Pure I/O — no network."""
    out_dir.mkdir(parents=True, exist_ok=True)
    fname = archive_filename(today.isoformat(), meta["video_id"], meta["title"])
    target = out_dir / fname
    content = assemble_source_markdown(
        meta=meta, cues=cues, transcription=transcription, fetched_iso=fetched_iso,
    )
    target.write_text(content, encoding="utf-8")
    return FetchResult(
        video_id=meta["video_id"],
        title=meta["title"],
        archive_path=target,
        transcription=transcription,
        duration=int(meta["duration"]),
    )


def process_url(url: str, out_dir: Path) -> FetchResult:
    """End-to-end: URL → archived source file. Raises YTFetchError on failure."""
    video_id = normalize_url(url)
    meta = fetch_metadata(url)
    meta["video_id"] = video_id

    vtt = fetch_captions_vtt(url)
    if vtt:
        cues = parse_vtt(vtt)
        transcription = "captions"
    else:
        if not whisper_available():
            raise YTFetchError(
                "No captions and whisper.cpp not configured "
                "(set WHISPER_CPP_BIN and WHISPER_MODEL, install ffmpeg)"
            )
        cues = transcribe_with_whisper(url)
        transcription = "whisper-large-v3"

    if not cues:
        raise YTFetchError("Transcript fetch returned no content")

    return fetch_to_archive(
        meta=meta, cues=cues, transcription=transcription,
        out_dir=out_dir,
        today=datetime.date.today(),
        fetched_iso=datetime.datetime.utcnow().isoformat(timespec="seconds") + "Z",
    )


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Fetch a YouTube video as a wiki source.")
    parser.add_argument("url", help="YouTube URL")
    parser.add_argument(
        "--out-dir", required=True, type=Path,
        help="Directory to write the archived source (e.g. content/_raw/processed/)",
    )
    args = parser.parse_args(argv)

    try:
        result = process_url(args.url, args.out_dir)
    except YTUrlError as e:
        print(f"ERROR url: {e}", file=sys.stderr)
        return 2
    except YTFetchError as e:
        print(f"ERROR fetch: {e}", file=sys.stderr)
        return 3

    print(json.dumps({
        "video_id": result.video_id,
        "title": result.title,
        "archive_path": str(result.archive_path),
        "transcription": result.transcription,
        "duration": result.duration,
    }))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
```

- [ ] **Step 4: Run, verify pass**

Run: `python -m unittest test_yt_fetch.py -v`
Expected: All PASS.

- [ ] **Step 5: Commit**

```bash
git add .claude/skills/ingest/scripts/
git commit -m "ingest: yt_fetch orchestrator + CLI"
```

---

## Task 8: Update SKILL.md — add Phase 0

**Files:**
- Modify: `.claude/skills/ingest/SKILL.md`

- [ ] **Step 1: Read current SKILL.md**

Read `.claude/skills/ingest/SKILL.md` to confirm structure.

- [ ] **Step 2: Modify the "When to use" section to mention URL args**

Replace the "When to use" body:

```
Trigger phrases: "ingest", "process inbox", "przetworz nowe pliki". Files have appeared in `content/_raw/inbox/` and need to be turned into wiki notes.

**Also accepts YouTube URLs as arguments:** `/ingest https://youtu.be/X https://www.youtube.com/watch?v=Y`. URLs and files can be mixed in one batch — they cluster together under the same logic.
```

- [ ] **Step 3: Replace the "Workflow" header block**

Update intro to four phases instead of three:

```
## Workflow

Four phases. Phase 0 runs only when YouTube URLs are present as arguments. Phase 1 ends with a single user prompt (cluster confirmation) if any clusters are detected; Phase 2 runs autonomously; Phase 3 verifies index integrity.
```

- [ ] **Step 4: Insert Phase 0 section between "## Workflow" and "### Phase 1 — Pre-scan"**

Insert this new section:

````
### Phase 0 — YouTube fetch (only if URL args)

Skipped entirely for files-only invocations.

1. Validate args. Any token matching `^https?://(www\.|m\.)?(youtube\.com|youtu\.be)/` is a YT URL. Any non-empty argument that doesn't match aborts the whole call with a clear error before any work begins.
2. Verify prerequisites:
   - `yt-dlp` on PATH (required) — if missing, abort the whole call with install hint.
   - `ffmpeg` on PATH (needed only for Whisper fallback).
   - `$WHISPER_CPP_BIN` + `$WHISPER_MODEL` env vars (needed only for Whisper fallback).
3. For each URL, run:

   ```bash
   python .claude/skills/ingest/scripts/yt_fetch.py <url> --out-dir content/_raw/processed/
   ```

   On success, stdout is one-line JSON: `{video_id, title, archive_path, transcription, duration}`.
   On failure, exit code is 2 (bad URL) or 3 (fetch failure), with the reason on stderr. **Skip that URL and continue with the rest.** Collect failures for the final report.

4. Build a `Source` object per URL (in-memory, for Phase 1/2):

   ```
   Source { origin: "youtube", title, body=<archive file contents>, tokens (from title + chapters + first 2000 chars), meta (from frontmatter), raw_path=archive_path }
   ```

5. Inbox files (if any) also yield `Source` objects with `origin: "file"`. Phase 1 operates on the union.

**Idempotency check.** Before fetching, scan `content/_indexes/catalog.md` and the topic-folder notes for any frontmatter with the same `video_id`. If a match exists, skip Phase 0 fetch for that URL and feed the existing source path into Phase 2 as an overlap-merge candidate.

````

- [ ] **Step 5: Verify the rest of SKILL.md still flows**

Read SKILL.md end-to-end. No edits needed yet to Phase 1-3 wording — that's Tasks 9-11.

- [ ] **Step 6: Commit**

```bash
git add .claude/skills/ingest/SKILL.md
git commit -m "ingest: document Phase 0 (YouTube fetch) in SKILL.md"
```

---

## Task 9: Update SKILL.md — Phase 1 wording

**Files:**
- Modify: `.claude/skills/ingest/SKILL.md`

- [ ] **Step 1: Update Phase 1 step 2**

Find:
```
2. List `content/_raw/inbox/`. Collect filenames and file count. If empty, report "Inbox empty, nothing to process" and exit.
```

Replace with:
```
2. List `content/_raw/inbox/` AND merge in any `Source` objects built by Phase 0. If both are empty, report "Inbox empty and no URLs provided, nothing to process" and exit.
```

- [ ] **Step 2: Update Phase 1 step 3 (cluster detection)**

Find:
```
3. **Cluster detection.** For each pair of inbox files:
   - Tokenize titles: split on spaces, hyphens, underscores; lowercase; drop English/Polish stop-words.
   - Read the first ~200 characters of each file body for additional tokens.
```

Replace with:
```
3. **Cluster detection.** For each pair of sources (file or YT):
   - Tokenize titles (or YT video titles): split on spaces, hyphens, underscores; lowercase; drop English/Polish stop-words.
   - Read the first ~200 characters of each source body (file content or transcript) for additional tokens. YT sources also contribute their channel name and chapter titles as tokens.
```

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/ingest/SKILL.md
git commit -m "ingest: Phase 1 operates on unified Source model"
```

---

## Task 10: Update SKILL.md — Phase 2 adjustments

**Files:**
- Modify: `.claude/skills/ingest/SKILL.md`

- [ ] **Step 1: Update step 6 (classification input for YT)**

Find:
```
6. Determine topic folder and note type per CLAUDE.md rules (sub-patterns: `BOOKS/`, `TOOLS/`, `KNOWLEDGE/INFO/`, `KNOWLEDGE/HOWTO/`, `NOTES/`, `HABITS/`).
```

Replace with:
```
6. Determine topic folder and note type per CLAUDE.md rules (sub-patterns: `BOOKS/`, `TOOLS/`, `KNOWLEDGE/INFO/`, `KNOWLEDGE/HOWTO/`, `NOTES/`, `HABITS/`). For YT-origin sources, classification input is `title + description + channel + chapter titles + first ~2000 chars of transcript`. YT-origin sources always use `type: knowledge-note` with template `templates/knowledge_note_info.md`.
```

- [ ] **Step 2: Update step 8 (frontmatter for YT)**

Find:
```
8. Fill frontmatter: `title`, `date` (today), `tags`, `type`, `source: "_raw/inbox/<file>"`, `agent-created: true`, `summary:` (one line).
```

Replace with:
````
8. Fill frontmatter: `title`, `date` (today), `tags`, `type`, `source`, `agent-created: true`, `summary:` (one line).

   For YT-origin notes, `source` points at the archived transcript (e.g. `_raw/processed/2026-05-22_yt-<id>_<slug>.md`) and the following YT-specific fields are appended:

   ```yaml
   source_url: "https://www.youtube.com/watch?v=<video_id>"
   video_id: "<id>"
   channel: "<channel name>"
   duration: "1h23m"
   published: 2026-04-15
   transcription: captions   # or "whisper-large-v3"
   ```

   Note body uses adaptive depth based on transcript duration:
   - `< 15 min` → summary: TL;DR, 5-10 key points, takeaways, Resources.
   - `15-45 min` → standard knowledge-note structure with sections, quotes, takeaways.
   - `> 45 min` → deep note: chapter-by-chapter breakdown with `[mm:ss]` timestamps linking to `https://youtube.com/watch?v=<id>&t=<seconds>s`.
````

- [ ] **Step 3: Update step 11 (archive is no-op for YT)**

Find:
```
11. Move source: `content/_raw/inbox/<file>` → `content/_raw/processed/YYYY-MM-DD_<originalname>.<ext>`.
```

Replace with:
```
11. Move source:
    - File sources: `content/_raw/inbox/<file>` → `content/_raw/processed/YYYY-MM-DD_<originalname>.<ext>`.
    - YT sources: archive file already lives in `content/_raw/processed/` from Phase 0 — verify the note's `source:` frontmatter matches the archive path; no move needed.
```

- [ ] **Step 4: Commit**

```bash
git add .claude/skills/ingest/SKILL.md
git commit -m "ingest: Phase 2 adjustments for YT-origin sources"
```

---

## Task 11: Update SKILL.md — Phase 3 report + failure table + prerequisites

**Files:**
- Modify: `.claude/skills/ingest/SKILL.md`

- [ ] **Step 1: Update the final report format in Phase 3 step 15**

Find:
```
    Ingest complete.
    - Processed: X files
    - Created:   Y new notes
    - Merged:    Z into existing notes
    - Attachments moved: W
    - Indexes:   ✅ vault-map / catalog / graph
    Inbox now empty.
```

Replace with:
```
    Ingest complete.
    - Processed: X sources (F files, Y YouTube URLs)
    - Created:   N new notes
    - Merged:    M into existing notes
    - Attachments moved: W
    - YouTube:   captions=A, whisper=B, failed=C
    - Indexes:   ✅ vault-map / catalog / graph
    Failures (if any):
      - <url> — <reason>
    Inbox now empty.
```

- [ ] **Step 2: Append a "Failure Handling" subsection at the end of the file, before "## See also"**

Insert before `## See also`:

```
## Failure Handling

| Failure | Behavior |
|---|---|
| Argument is non-empty but not a YT URL | Abort whole `/ingest` call before Phase 0; report bad arg. |
| `yt-dlp` not on PATH | Abort whole call with install hint. |
| Video unavailable / private / removed | Skip that URL, continue rest. Final report flags it. |
| No captions AND Whisper fallback fails | Skip that URL. Final report names which step failed. |
| Classification ambiguous | Best-guess folder + `#todo/classification` tag (existing fallback). |
| Network/timeout during fetch | `yt_fetch.py` returns non-zero; skill skips that URL. |
| Phase 0 succeeds, Phase 2 fails mid-note | Transcript archive already in `_raw/processed/`; rerun targets it for completion. |

## Prerequisites

- `yt-dlp` on PATH — required for any YT URL.
- `ffmpeg` on PATH — required only when captions are unavailable (Whisper fallback).
- `$WHISPER_CPP_BIN` + `$WHISPER_MODEL` env vars — required only for Whisper fallback. Default model: `ggml-large-v3.bin`.
```

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/ingest/SKILL.md
git commit -m "ingest: Phase 3 report + failure handling + prerequisites"
```

---

## Task 12: End-to-end smoke test — captions path

**Files:**
- No code changes. Manual verification.

- [ ] **Step 1: Verify `yt-dlp` and Python are available**

Run:
```powershell
yt-dlp --version
python --version
```
Both should return version strings. If `yt-dlp` is missing, install via `pip install yt-dlp` or `winget install yt-dlp`.

- [ ] **Step 2: Run `yt_fetch.py` directly against the canonical test video**

Run:
```powershell
python .claude/skills/ingest/scripts/yt_fetch.py "https://www.youtube.com/watch?v=jNQXAC9IVRw" --out-dir content/_raw/processed/
```

Expected:
- Exit code 0
- Stdout: one-line JSON with `video_id: jNQXAC9IVRw`, `transcription: captions`, `archive_path: content\_raw\processed\<DATE>_yt-jNQXAC9IVRw_me-at-the-zoo.md`

- [ ] **Step 3: Inspect the archived file**

Read the produced archive file. Verify:
- Frontmatter contains `video_id`, `source_url`, `title: "Me at the zoo"`, `duration`, `published`, `transcription: captions`.
- Body starts with `# Me at the zoo` and contains `[0:00]`-prefixed transcript lines.

- [ ] **Step 4: Run `/ingest` end-to-end**

Open Claude Code and run:
```
/ingest https://www.youtube.com/watch?v=jNQXAC9IVRw
```

Expected:
- Phase 0 produces the archive file (or reuses if already present via idempotency).
- Phase 1 runs, no clusters (single source).
- Phase 2 creates a knowledge-note under an appropriate topic folder (likely `LIFE/KNOWLEDGE/INFO/` or similar) with YT frontmatter fields populated.
- Phase 3 final report includes `YouTube: captions=1, whisper=0, failed=0`.
- All three indexes updated.

- [ ] **Step 5: Inspect the created note**

Verify:
- Frontmatter: `type: knowledge-note`, `source_url`, `video_id`, `channel`, `duration`, `transcription: captions`.
- Body: summary-style (short video), with at least one `[mm:ss]` timestamped quote linking back to YouTube.
- Wikilinks present where related notes exist.

- [ ] **Step 6: Idempotency check — rerun**

Run `/ingest https://www.youtube.com/watch?v=jNQXAC9IVRw` again.

Expected: Phase 0 detects existing `video_id` in catalog, skips fetch, Phase 2 treats it as overlap and either merges or reports "no changes". No duplicate note created.

- [ ] **Step 7: Commit the test artifacts (if any)**

```bash
git add content/_raw/processed/ content/ content/_indexes/
git commit -m "test: ingest YouTube smoke test — Me at the zoo"
```

If the smoke test surfaced bugs, fix them and rerun before committing.

---

## Task 13: Smoke test — mixed batch with clustering

**Files:**
- No code changes. Manual verification.

- [ ] **Step 1: Stage an inbox file that shares tokens with a YT video**

Create `content/_raw/inbox/test-zoo-notes.md`:
```markdown
# Notes on the Zoo

Some content about zoos and elephants.
```

- [ ] **Step 2: Run `/ingest` with mixed args**

```
/ingest https://www.youtube.com/watch?v=jNQXAC9IVRw
```

Then also drop the inbox file in (or run together if invocation supports it — current skill picks up inbox automatically alongside URL args per Phase 1 step 2).

- [ ] **Step 3: Verify cluster prompt**

Phase 1 should detect the shared "zoo" token and prompt with A/B/C options. Choose option A (separate notes).

- [ ] **Step 4: Verify result**

- Two notes created: one knowledge-note from the inbox file, one knowledge-note from the YT video.
- Final report: `Processed: 2 sources (1 files, 1 YouTube URLs)`.
- No errors.

- [ ] **Step 5: Clean up test artifacts**

Remove the test note and test archive if undesired, then commit.

```bash
git add -u
git commit -m "test: mixed inbox+URL batch with clustering"
```

---

## Task 14: Final spec coverage check

**Files:**
- Read-only verification.

- [ ] **Step 1: Read the spec**

Open `docs/superpowers/specs/2026-05-22-youtube-ingest-design.md`.

- [ ] **Step 2: Walk through each spec section and confirm coverage**

For each of: Goal, Non-Goals, Invocation forms, Note depth, Timestamps, Source model, Phase flow, Phase 0 (1-6), Archived format, Phase 1, Phase 2 (a/b/c), Idempotency, Phase 3, Failure handling, Prerequisites, Testing strategy — confirm a task implements it. Note any gaps.

- [ ] **Step 3: If gaps exist, add a follow-up task**

Otherwise close out.

---

## Self-Review Notes

**Spec coverage:** Tasks 1-7 cover Phase 0 mechanics (URL normalization, VTT, slug, frontmatter, yt-dlp wrappers, whisper, orchestrator). Tasks 8-11 cover SKILL.md updates (Phase 0 docs, Phase 1/2/3 adjustments, failure table, prerequisites). Tasks 12-13 cover testing strategy items 1-4 from the spec; long-form and Polish-language tests are deferred to ad-hoc verification since they require finding suitable test videos. Task 14 is the final coverage sweep.

**Type consistency:** `VttCue`, `FetchResult`, `YTFetchError`, `YTUrlError`, `format_timestamp`, `slugify`, `archive_filename`, `assemble_source_markdown`, `fetch_metadata`, `fetch_captions_vtt`, `parse_vtt`, `parse_whisper_output`, `transcribe_with_whisper`, `whisper_available`, `yt_dlp_available`, `fetch_to_archive`, `process_url` — all referenced consistently across tasks.

**Placeholder check:** No TBDs. Every code step is fully specified.
