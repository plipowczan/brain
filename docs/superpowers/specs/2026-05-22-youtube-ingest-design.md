---
title: YouTube Ingest — Design Spec
date: 2026-05-22
status: draft
related-skill: ingest
---

# YouTube Ingest — Design Spec

## Goal

Extend the `/ingest` workflow so a YouTube URL passed as an argument is processed into a wiki note, using the same clustering, classification, archival, and indexing logic that already handles inbox files. The user should be able to mix files and URLs in one call.

## Non-Goals

- Playlists (only single-video URLs).
- Live streams.
- Visual extraction from frames (slides, charts, diagrams).
- A separate `/ingest-yt` skill — this is a single-workflow extension.
- Re-implementing classification or index-update logic; reuse Phase 2 as-is.

## User-Facing Behavior

### Invocation forms

```
/ingest                                  # files only (current behavior, unchanged)
/ingest <yt-url>                         # one URL
/ingest <yt-url1> <yt-url2> ...          # multiple URLs
/ingest <yt-url1> <yt-url2>              # files in inbox/ are ALSO processed in the same batch
```

Mixed batches (files + URLs) are allowed; sources cluster across origins.

### Argument detection

Any token matching `^https?://(www\.|m\.)?(youtube\.com|youtu\.be)/` is treated as a YouTube source. Any non-empty argument that doesn't match this regex aborts the call with a clear error before any work begins.

### Note depth (adaptive)

Determined by audio/transcript duration:

| Duration | Structure |
|---|---|
| < 15 min | Summary: TL;DR, 5-10 key points, takeaways, Resources. |
| 15-45 min | Standard knowledge-note: sections by chapter or inferred topics, key quotes with timestamps, takeaways, Resources. |
| > 45 min | Deep note: chapter-by-chapter breakdown with timestamps, key quotes, themes, takeaways, Resources. |

All depths use the existing writing style (English, emoji headings, wikilinks, first-person where relevant).

### Timestamps in body

Direct quotes and section headers that map to a chapter include `[mm:ss]` linking to `https://youtube.com/watch?v=<id>&t=<seconds>s`.

## Architecture

### Source model

After fetch, every source — file or YT — is a `Source` object processed identically by Phase 2:

```
Source {
  origin:   "file" | "youtube"
  title:    str
  body:     str          # transcript or file content
  tokens:   list[str]    # for clustering
  meta:     dict         # YT: {video_id, url, channel, duration, published, chapters, language, ...}
  raw_path: Path         # _raw/inbox/<file> OR _raw/processed/<archived-transcript>.md
}
```

### Phase flow

```
┌─────────────────────────────────────────────────────────┐
│ Phase 0 — YouTube fetch (NEW; runs only if URLs present)│
│  per URL: normalize → metadata → transcript → archive   │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│ Phase 1 — Pre-scan (existing)                            │
│  read vault-map → list sources (files + YT)             │
│  → cluster detection → optional user prompt             │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│ Phase 2 — Execute (existing, with 3 small adjustments)  │
│  classify → template → frontmatter → wikilinks →        │
│  attachments → archive → indexes                         │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│ Phase 3 — Final report (existing, extended)              │
└─────────────────────────────────────────────────────────┘
```

## Phase 0 — YouTube Fetch

Runs only when arguments contain YT URLs. Files-only invocations skip it entirely.

For each URL, in order:

1. **Normalize URL.** Extract canonical `video_id` (handles `youtu.be/X`, `youtube.com/watch?v=X`, `m.youtube.com`, `&t=...`). Playlists are ignored — only the linked video is processed.

2. **Fetch metadata.** Run `yt-dlp --dump-single-json --skip-download <url>`. Capture: `title`, `description`, `channel`, `uploader_id`, `duration`, `upload_date`, `chapters[]`, `tags[]`, `webpage_url`, `categories[]`, `language`.

3. **Fetch transcript** — try in order:
   - **a.** `yt-dlp --write-subs --write-auto-subs --sub-langs "en,en-US,en-GB,pl" --sub-format vtt --skip-download`. Parse VTT to plain text. Preserve timestamps at chapter boundaries.
   - **b.** If no subs available → Whisper fallback: `yt-dlp -x --audio-format mp3 -o <tmp>` to download audio, then run `whisper.cpp` (`$WHISPER_CPP_BIN`) with model `$WHISPER_MODEL` (default `ggml-large-v3.bin`) against the mp3. Output: timestamped segments.
   - **c.** If both fail (DRM, age-gate without cookies, region block, model missing) → abort that URL with a clear error; continue processing remaining URLs and files.

4. **Language detection.** Record detected transcript language in `meta.language`. Translation to English happens later in Phase 2 step 6 (existing language-enforcement rule).

5. **Archive immediately.** Write synthesized source file to `content/_raw/processed/YYYY-MM-DD_yt-<video_id>_<slug>.md` with frontmatter holding all metadata and the full transcript as body. This is the `Source.raw_path`.

6. **Build `Source` object.** Body used for clustering/classification = `title + description + first ~2000 chars of transcript + chapter titles`. Full transcript stays available for note-writing.

### Archived source file format

```markdown
---
video_id: dQw4w9WgXcQ
source_url: https://www.youtube.com/watch?v=dQw4w9WgXcQ
title: "Original Video Title"
channel: "Channel Name"
uploader_id: "@handle"
duration: 1234            # seconds
duration_human: "20m34s"
published: 2026-04-15
language: en
transcription: captions   # or "whisper-large-v3"
chapters:
  - { start: 0, title: "Intro" }
  - { start: 120, title: "Main topic" }
tags: [original, yt, tags]
categories: [Education]
fetched: 2026-05-22T14:30:00Z
---

# Original Video Title

[0:00] Transcript line one.
[0:05] Transcript line two.
...
```

## Phase 1 — Pre-scan (existing, unchanged inputs)

Phase 1 now operates over the union of inbox files and YT `Source` objects produced by Phase 0. Cluster detection uses the existing token rules. If a YT video and an inbox file share tokens (e.g., a tool's docs and its demo video), they can cluster together — the user gets the standard A/B/C prompt.

## Phase 2 — Execute (three small adjustments)

The existing flow (cluster → topic folder → template → frontmatter → wikilinks → attachments → archive → indexes) is reused as-is. Three adjustments for YT-origin sources:

**(a) Step 6 — classification input.** For YT sources, classifier reads `title + description + channel + chapter titles + first ~2000 chars of transcript`. Same auto-classify logic, richer input.

**(b) Step 8 — frontmatter additions for YT-origin notes:**

```yaml
source: "_raw/processed/2026-05-22_yt-<video_id>_<slug>.md"
source_url: "https://www.youtube.com/watch?v=<video_id>"
video_id: "<id>"
channel: "<channel name>"
duration: "1h23m"
published: 2026-04-15
transcription: captions   # or "whisper-large-v3"
```

These are appended to the standard frontmatter block. No new template — `knowledge_note_info.md` is used; `type: knowledge-note`.

**(c) Step 11 — archive is a no-op for YT.** The transcript already lives in `_raw/processed/` from Phase 0. Verify the path matches the `source:` field.

Steps 7 (overlap check), 9 (wikilinks), 10 (attachments — N/A for YT), 12 (index updates) are unchanged.

### Idempotency

Before creating a new note, check `catalog.md` for any existing entry whose note frontmatter has `video_id: <id>` matching this URL. If found, treat as "overlap" and merge per existing step 7 logic instead of creating a duplicate.

## Phase 3 — Final report (extended)

```
Ingest complete.
- Processed: X sources (F files, Y YouTube URLs)
- Created:   N new notes
- Merged:    M into existing notes
- Attachments moved: W
- YouTube:   captions=A, whisper=B, failed=C
- Indexes:   ✅ vault-map / catalog / graph
Failures:
  - https://youtu.be/abc — no captions, whisper model not found
  - https://youtu.be/xyz — video private
Inbox now empty.
```

## Failure Handling

| Failure | Behavior |
|---|---|
| URL doesn't match YT regex | Abort whole `/ingest` call before Phase 0; report bad arg. |
| `yt-dlp` not on PATH | Abort whole call with install hint. |
| Video unavailable / private / removed | Skip that URL, continue rest. Final report flags it. |
| No captions AND Whisper fallback fails (no audio, ffmpeg missing, model missing) | Skip that URL. Final report flags which step failed. |
| Transcript fetched but classification ambiguous | Existing fallback: best-guess folder, `#todo/classification` tag. |
| Network/timeout during fetch | Retry once with 5s backoff; if still failing, skip URL. |
| Phase 0 succeeds, Phase 2 fails mid-note | Transcript already in `_raw/processed/`; user can re-run `/ingest` pointing at that file. |

## Prerequisites

- `yt-dlp` on PATH.
- `ffmpeg` on PATH (for audio extraction in Whisper fallback).
- `whisper.cpp` binary path in `$WHISPER_CPP_BIN`; model file path in `$WHISPER_MODEL` (default `ggml-large-v3.bin`).

If `yt-dlp` is missing, the skill aborts with an install hint. If only `whisper.cpp` is missing, captions-path still works; Whisper fallback fails per the table above.

## Testing Strategy

Informal, given this is an agent workflow not a library:

1. **Captions path.** Known short video with English captions → note created, frontmatter correct, transcript archived, indexes updated.
2. **Whisper fallback path.** Short video with captions disabled → Whisper runs and produces a transcript.
3. **Mixed batch.** `/ingest some-file.md https://youtu.be/X` with file and URL sharing tokens → cluster prompt fires.
4. **Failure path.** Known-bad URL (private/removed) → graceful skip and accurate final report.
5. **Long-form.** 1h+ podcast → deep note structure with timestamped chapters.
6. **Polish-language video.** Transcript translated to English per existing language rule; proper nouns preserved.
7. **Idempotency.** Re-ingesting an already-processed URL triggers overlap/merge path, not duplicate note.

## File Changes

- `.claude/skills/ingest/SKILL.md` — add Phase 0 section, update Phase 1/2/3 to reference the unified `Source` model and YT-specific frontmatter fields. No new skill file.

## Open Questions

None at design time. Implementation plan should pick concrete VTT-parsing approach (regex vs. library) and concrete `yt-dlp` JSON field-extraction code.
