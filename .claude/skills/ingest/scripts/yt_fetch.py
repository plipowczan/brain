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
    parsed = urlparse(url)

    if parsed.scheme not in {"http", "https"} or parsed.netloc not in _HOSTS:
        raise YTUrlError(f"Not a YouTube URL: {url!r}")

    if parsed.netloc == "youtu.be":
        candidate = parsed.path.strip("/")
    else:
        candidate = parse_qs(parsed.query).get("v", [""])[0]

    if not _VIDEO_ID_RE.match(candidate):
        raise YTUrlError(f"Could not extract video_id from {url!r}")
    return candidate


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
