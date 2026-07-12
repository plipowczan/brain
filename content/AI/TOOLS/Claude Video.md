---
title: "Claude Video"
date: 2026-07-11
enableToc: true
openToc: true
tags: ["tool", "ai", "video", "claude-code", "agent-skills", "transcription", "ffmpeg", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-07-11_bradautomatesclaude-video.md"
agent-created: true
summary: "bradautomates/claude-video — the /watch agent skill that lets Claude see any video: yt-dlp download, ffmpeg frame extraction, captions/Whisper transcript, handed back as images"
---

# Claude Video

## 🚀 Description

[bradautomates/claude-video](https://github.com/bradautomates/claude-video) — the **`/watch`** [[Agent Skills|agent skill]]. Paste a URL or local path plus a question; Claude fetches captions, downloads only what it needs, extracts frames, pulls a timestamped transcript, and `Read`s every frame as an image. By the time it answers it has **seen** the video and **heard** the audio — not guessed from the title.

```
/watch https://youtu.be/dQw4w9WgXcQ what happens at the 30 second mark?
```

Installs as a self-contained skill across Claude Code (plugin marketplace), Codex / Cursor / Copilot / Gemini CLI (`npx skills add`), and claude.ai web (`watch.skill` bundle). MIT.

## 🧩 How it works

1. **You paste a video + a question.** URL (anything [yt-dlp](https://github.com/yt-dlp/yt-dlp) supports — YouTube, Loom, TikTok, X, Instagram, +hundreds) or local `.mp4/.mov/.mkv/.webm`.
2. **yt-dlp checks captions first.** At `transcript` detail, captioned URLs return without downloading video.
3. **ffmpeg extracts frames** at the chosen detail; JPEGs 512px wide by default, clamped 1998px tall for Claude `Read` compatibility.
4. **Transcript** from native captions (free, instant) or Whisper fallback — Groq `whisper-large-v3` (preferred) or OpenAI `whisper-1` — only when a video has no caption track.
5. **Frames + transcript handed to Claude**; it reads each frame in parallel and answers grounded in what's on screen and in the audio.
6. **Cleanup** — script prints a working dir; Claude removes it if no follow-ups.

## 🧩 Detail dial (`--detail`)

Token cost is dominated by frames (each is an image). The auto-fps logic exists so a sparse scan of a 30-min video doesn't blow the context budget.

| Mode | Engine | Cap | Use |
| --- | --- | --- | --- |
| `transcript` | captions only, no frames | — | cheapest; text-only |
| `efficient` | keyframes (`-skip_frame nokey`) | 50 | ~0.5s extraction, fast scan |
| `balanced` (default) | scene-change | 100 | 2 fps max, general use |
| `token-burner` | scene-change, uncapped | — | full coverage on long clips |

Focus a section with `--start` / `--end` for a denser per-second budget (capped 2 fps) — far more useful than a sparse pass over the whole thing. A **dedup pass** (mean-absolute-difference vs last kept frame, threshold 2.0) drops near-identical held-slide frames before they reach Claude, so the budget is spent on distinct content (`--no-dedup` to disable).

## Reasoning for

Fills a real gap: Claude can read a page or a repo but can't *watch a video* out of the box. Uses in the wild: analyze someone else's content (hooks, ad creative, competitor launches), diagnose a bug from a screen recording, summarize a long video faster than 2× playback, cut the hype out of a launch video, or turn a playlist into per-video notes. Zero config — `yt-dlp`/`ffmpeg` install on first run; Whisper key only needed for caption-less videos.

## Alternatives considered

- [[Video Use]] — sibling in the video-for-agents space, but the **opposite job**: Video Use *edits* video and deliberately reads the transcript **not** frames (word-level cuts); Claude Video *watches/understands* and reads frames **and** transcript. Complementary, not competing.
- [[HyperFrames]] — generates video (HTML→MP4); Claude Video consumes it.
- Manual scrubbing in a player — what `/watch` replaces.

## 🔗 Links

- Repo: https://github.com/bradautomates/claude-video
- Author: Brad Bonanno — [YouTube @bradbonanno](https://www.youtube.com/@bradbonanno), [Solaris Automation](https://www.solarisautomation.io/)
- Built on `yt-dlp`, `ffmpeg`, [Groq](https://groq.com/) / OpenAI Whisper, Claude's multimodal `Read`

## 🔗 Related notes

- [[Video Use]] — sibling video tool, inverse design (edits, reads transcript-not-frames)
- [[HyperFrames]] — HTML→MP4 video generation
- [[Agent Skills]] — the skill packaging system `/watch` ships as
- [[Awesome Agent Skills]] — curated skill directory
- [[Claude Code]] — primary host agent

---
Template: [[templates/tool]]
