---
title: "HyperFrames"
date: 2026-05-19
enableToc: true
openToc: true
tags: ["tool", "ai", "video", "html", "agents", "skills", "apache-2.0", "open-source", "claude-code"]
type: tool
source: "_raw/inbox/heygen-comhyperframes Write HTML. Render video. Built for agents.md"
agent-created: true
summary: "HeyGen's open-source video rendering framework — write HTML + CSS + GSAP, render to MP4. First-class Claude Code / Codex / Cursor skills. Apache 2.0"
---

# HyperFrames

## 🚀 Description

[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) — Write HTML. Render video. Built for agents. Compositions are HTML files with `data-*` attributes. No React, no proprietary DSL. Deterministic rendering for automated pipelines.

Designed agent-first: ships as Claude Code / Codex / Cursor skills exposed as slash commands. Used as the animation overlay engine by [[Video Use]].

## 🧩 Features

- **HTML-native** — compositions are HTML files with data attributes
- **AI-first** — non-interactive CLI by default, agent-driven workflows
- **Deterministic** — same input = identical output
- **Frame Adapter pattern** — bring your own runtime: GSAP, Anime.js, Motion One, Lottie, CSS, Three.js, WAAPI
- **Skills register as slash commands**: `/hyperframes`, `/hyperframes-cli`, `/hyperframes-media` (TTS, transcription, background removal), `/tailwind`, `/gsap`, `/animejs`, `/css-animations`, `/lottie`, `/three`, `/waapi`
- Requirements: Node.js >= 22, FFmpeg
- Install via `npx skills add heygen-com/hyperframes` or `npx hyperframes init`

## 🎨 HyperFrames vs Remotion

|  | **HyperFrames** | **Remotion** |
| --- | --- | --- |
| Authoring | HTML + CSS + GSAP | React (TSX) |
| Build step | None | Required (bundler) |
| Library-clock animations (GSAP/Anime.js) | Seekable, frame-accurate | Wall-clock at render |
| Arbitrary HTML/CSS passthrough | Paste and animate | Rewrite as JSX |
| Distributed rendering | Single-machine today | Lambda, production-ready |
| **License** | **Apache 2.0** (OSI) | Source-available, paid above thresholds |

Licensing is the decisive factor for many: commercial use at any scale with no per-render fees, no seat caps, no company-size thresholds.

## Example composition

```html
<div id="stage" data-composition-id="my-video" data-start="0" data-width="1920" data-height="1080">
  <video data-start="0" data-duration="5" data-track-index="0" src="intro.mp4" muted></video>
  <img data-start="2" data-duration="3" data-track-index="1" src="logo.png" />
  <audio data-start="0" data-duration="9" data-track-index="2" data-volume="0.5" src="music.wav"></audio>
</div>
```

## Reasoning for

For agent-generated video — product intros, vertical TikTok hooks, animated charts, CSV-to-bar-chart-race, PDF-to-pitch-video. Pairs naturally with [[Video Use]] for talking-head edits where overlays need to be authored by parallel sub-agents.

## Alternatives considered

- Remotion — more mature, Lambda distribution, but source-available license
- Manim — Python, math-heavy; HyperFrames is more general-purpose
- [[Video Use]] — different layer: edits existing footage rather than synthesizing from scratch

## 🔗 Links

- Repo: https://github.com/heygen-com/hyperframes
- Docs: https://hyperframes.heygen.com/
- Prompting guide: https://hyperframes.heygen.com/guides/prompting

## 🔗 Related notes

- [[Video Use]] — uses HyperFrames as an overlay engine
- [[Claude Code]] — host agent for the skill
- [[Awesome Claude Code]] — broader CC ecosystem
- [[Marp]] — different format, similar HTML-as-source philosophy
- [[10 Free GitHub Repos That Replace Paid Tools]] — listed as #10 (vs Remotion)

---
Template: [[templates/tool]]
