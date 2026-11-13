---
title: "Video Use"
date: 2026-05-19
enableToc: true
openToc: true
tags: ["tool", "ai", "video", "claude-code", "coding-agents", "open-source", "ffmpeg"]
type: tool
source: "_raw/inbox/browser-usevideo-use Edit videos with coding agents.md"
agent-created: true
summary: "Open-source video editor for coding agents — drop raw footage in a folder, chat with Claude Code, get final.mp4. Reads transcripts (not frames) for word-level cuts"
status-checked: 2026-11-13
project-status: maintained
repo: "https://github.com/browser-use/video-use"
---

# Video Use

> [!success] Status check 2026-11-13 — maintained
> **Verdict:** The last commit on main was on 2026-10-08, 36 days ago, and it was a README change; the last code change landed on 2026-09-24.
> **Last release:** no releases (commits only); pyproject version 0.1.0 · **last commit:** 2026-10-08 · **licence:** MIT. Transcription needs a paid ElevenLabs API key (Scribe).
> **Repo:** https://github.com/browser-use/video-use
> **Changed since this note:** Rendering keeps the source frame rate by default (with an --fps override) and reads rotation metadata to detect portrait video (2026-08-30). Transcription now picks the audio track and refuses to upload a silent one (2026-08-30).

## 🚀 Description

[browser-use/video-use](https://github.com/browser-use/video-use) — edit videos with Claude Code (or Codex, Hermes, Openclaw). Drop raw takes in a folder, describe the edit in chat, get `final.mp4` next door. 100% open source. Works for any content — talking heads, montages, tutorials, travel.

Same "structured surface, not pixel dump" philosophy as [[Browser Use]]. The LLM never watches the video — it **reads** it through a packed transcript + on-demand visual filmstrips.

## 🧩 Features

- **Cuts fillers** — `umm`, `uh`, false starts, dead space between takes
- **Auto color grades** — warm cinematic, neutral punch, or custom ffmpeg chain
- **30 ms audio fades** at every cut
- **Burns subtitles** — 2-word UPPERCASE chunks by default, fully customizable
- **Generates overlays** via [[HyperFrames]], Remotion, Manim, or PIL — parallel sub-agents
- **Self-evaluates** the rendered output at every cut boundary before showing you
- **Persists session memory** in `project.md` so next week's session resumes

## 🎨 How it works (the key insight)

> Naive: 30,000 frames × 1,500 tokens = **45M tokens of noise**. Video Use: **12KB text + a handful of PNGs**.

- **Layer 1 — audio transcript (always loaded).** ElevenLabs Scribe gives word-level timestamps, speaker diarization, audio events. All takes pack into `takes_packed.md` (~12KB).
- **Layer 2 — visual composite (on demand).** `timeline_view` renders a filmstrip + waveform + word-label PNG only at decision points.
- **Pipeline:** Transcribe → Pack → LLM reasons → EDL → Render → Self-eval (max 3 retries).
- **12 hard rules** for production correctness, artistic freedom elsewhere.

## Reasoning for

Talking-head edits, montages, travel cuts. Anything where speech boundaries drive cuts. Beats hand-editing in DaVinci/Premiere when the cuts are dictated by speech rather than visuals. Needs ffmpeg + ElevenLabs API key.

## Alternatives considered

- [[HyperFrames]] — for synthesized video from HTML; video-use composes them in
- Remotion — React-based, source-available license; HyperFrames offers Apache 2.0
- Manual NLE — better taste control, no automation

## 🔗 Links

- Repo: https://github.com/browser-use/video-use
- Setup prompt: paste install instructions into Claude Code or Codex
- Always-on editing: run agent on [Browser Use Box](https://browser-use.com/bux) for Telegram/VPS

## 🔗 Related notes

- [[Browser Use]] — sibling project, same "structured surface" philosophy
- [[Browser Harness]] — sibling CDP harness, self-healing pattern
- [[HyperFrames]] — overlay/animation engine integrated via parallel sub-agents
- [[Claude Video]] — inverse tool: *watches* video (reads frames + transcript) vs this one's *editing* (transcript-only)
- [[Claude Code]] — the primary host agent
- [[OpenMontage]] — the other end of the pipeline: produces a video from a topic rather than editing footage you already have

---
Template: [[templates/tool]]
