---
title: "Claude Code for Video Processing"
date: 2026-05-21
enableToc: true
openToc: true
tags: ["answer", "ai", "claude-code", "video", "workflow"]
type: answer-note
agent-created: true
summary: "Three vault-backed paths for using Claude Code in video work: editing existing footage (Video Use), code-driven generation (HyperFrames / Remotion), and AI-generated ads (GPT Image 2 + Seedance)"
---

# Claude Code for Video Processing

**Question:** Jak wykorzystać Claude Code do obróbki wideo?
**Asked:** 2026-05-21

The vault covers three distinct paths — from editing existing footage to generating video from scratch.

## 1. Editing existing footage — [[Video Use]]

The most "editing-like" option. `browser-use/video-use` is an OSS editor driven by Claude Code:

- Drop raw takes in a folder → describe the edit in chat → get `final.mp4`
- LLM **never watches frames** — it reads a packed transcript (~12KB from ElevenLabs Scribe, word-level timestamps + diarization); visual filmstrips rendered on-demand at decision points
- Pipeline: Transcribe → Pack → LLM reasons → EDL → Render → Self-eval (max 3 retries)
- Automatic: filler cuts (`umm`, `uh`), 30 ms audio fades on every cut, color grading, subtitle burning (2-word UPPERCASE chunks), overlays via parallel sub-agents
- Session memory persisted in `project.md`
- Requires: ffmpeg + ElevenLabs API key

Best for: talking heads, montages, vlogs, tutorials — anything where speech drives cuts, not visuals.

## 2. Code-driven video generation

### [[HyperFrames]] (Apache 2.0, agent-first)

- `heygen-com/hyperframes` — HTML + CSS + GSAP → MP4
- Ships as Claude Code skills: `/hyperframes`, `/hyperframes-media` (TTS, transcription, background removal), `/gsap`, `/lottie`, `/three`, `/waapi`
- No build step, deterministic render, Frame Adapter pattern (GSAP / Anime.js / Motion One / Lottie / Three.js)
- Install: `npx skills add heygen-com/hyperframes`
- Requires: Node ≥22 + FFmpeg

### [[Remotion]] (React, source-available)

- `npx create-video@latest` + `npx skills add remotion-dev/skills`
- Explicitly call `/remotion-best-practices` before first prompt — otherwise Claude scans the whole repo
- Good prompt structure: scenes with timing, visual style (hex), brand assets, format (16:9 / 9:16 / 1:1)
- Render: 2-5 min for a 45 s 1080p explainer
- Free for companies <$1M revenue

**HyperFrames vs Remotion** (from [[HyperFrames]]): HF wins on licensing (Apache 2.0 vs source-available) and no build step; Remotion wins on maturity and Lambda distribution.

## 3. AI-generated ad video — [[GPT Image 2 + Seedance 2 Workflow]]

Storyboard-driven: GPT Image 2 generates key frames → Seedance 2 turns each frame into a clip. Different use case (ads, no existing footage) than Video Use.

## Recommended stack

From [[Video Use]] a natural composition emerges: **Video Use as orchestrator** editing real footage, **HyperFrames** (or Remotion) as the overlay/animation layer injected via parallel sub-agents. Everything in one Claude Code session.

## Gaps in the vault

- No notes on ffmpeg as a standalone tool under Claude Code (only mentioned within Video Use)
- No workflow for live recording / OBS automation via CC
- No standalone note on Manim (referenced only as alternative in [[Video Use]])

## 🔗 Related notes

- [[Video Use]]
- [[HyperFrames]]
- [[Remotion]]
- [[GPT Image 2 + Seedance 2 Workflow]]
- [[Claude Code]]
