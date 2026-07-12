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
---

# Video Use

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

---
Template: [[templates/tool]]
