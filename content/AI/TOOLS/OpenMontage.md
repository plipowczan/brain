---
title: "OpenMontage"
date: 2026-09-06
enableToc: true
openToc: true
tags: ["tool", "ai", "video", "agents", "coding-agents", "agent-skills", "ffmpeg", "tts", "open-source", "agpl-3.0"]
type: tool
source: "_raw/processed/2026-09-06_calesthioOpenMontage World's first open-source, agentic video production system.md"
agent-created: true
agent-reviewed: 2026-09-06
summary: "calesthio/OpenMontage — agent-first video production system: 12 pipelines, 100+ tools, 700+ skill files that turn a coding agent into a full production studio; runs free with zero API keys via Piper, Remotion, HyperFrames and open archives. AGPLv3."
---
# OpenMontage

🗒️ **[calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)** — an open-source, **agentic video production system**. There is no code orchestrator: your AI coding assistant *is* the orchestrator. It reads YAML pipeline manifests and Markdown "director skills", calls Python tools, self-reviews its own output, and pauses for your approval at every creative gate. Works with [[Claude Code]], [[Cursor]], Copilot, Windsurf and Codex. AGPLv3.

The pitch that matters: most "free AI video" stacks quietly mean *animate still images*. OpenMontage does that too, but it can also cut a finished video from **real motion footage** pulled from Archive.org, NASA and Wikimedia Commons — semantically ranked and edited on a proper timeline.

## Links
### Description
🧩 What it does:

- **12 production pipelines** — animated explainer, animation, avatar spokesperson, cinematic, clip factory, documentary montage, hybrid, localization & dub, podcast repurpose, screen demo, talking head, character animation.
- **100+ registered tools / 60+ provider integrations** — video and image generation, TTS, music, mixing, subtitles, enhancement, analysis — all behind one scored selection layer.
- **700+ agent skill and production-knowledge files** — pipeline directors, creative techniques, quality checklists and per-technology knowledge packs.
- **Reference-driven creation** — paste a YouTube video, Short, Reel, TikTok or local clip; the agent analyses transcript, pacing, scenes, keyframes and style, then returns 2–3 differentiated concepts with an honest tool path and cost estimate *before* generating anything.
- **Live web research as a first-class stage** — 15–25+ searches across YouTube, Reddit, Hacker News, news and academic sources, cited in a structured research brief, before a word of script is written.
- **Backlot living storyboard** — a local board that fills itself in as the pipeline runs: stages light up, the script lands as a screenplay page, scene cards shimmer while assets generate, and every provider decision and dollar is on the wall. `▶ REPLAY RUN` scrubs a finished production end to end.
- **Storyboard as a real approval gate** — asset generation pauses on a scene-by-scene contact sheet (takes, prompts, per-asset cost, quality scores), so you approve visuals *before* the render.
- **No vendor lock-in** — every capability has a local/open alternative next to the premium API.

### Download or use
```bash
git clone https://github.com/calesthio/OpenMontage.git
cd OpenMontage
make setup
```
Then open the project in your coding agent and just ask:
```
"Make a 60-second animated explainer about how neural networks learn"
"Make a 75-second documentary montage about city life in the rain. Use real footage only, no narration, elegiac tone, with music."
```
Prerequisites: Python 3.10+, FFmpeg, Node.js 18+, and a coding agent. On Windows, if `npm install` fails with `ERR_INVALID_ARG_TYPE`, use `npx --yes npm install`.

Backlot:
```bash
python -m backlot open                  # the library — every project on disk
python -m backlot open <project-id>     # one production's live board
python scripts/backlot_simulate_run.py  # watch a simulated run
```

## Reasoning for
This is the first video stack I've seen that treats production like **engineering with gates**, not like prompt roulette — which is exactly the property that makes it usable inside an agent harness (cf. [[Harness Engineering]], [[Agentic Coding]]). It also fills the video blind spot from a different angle than the tools I already track (see [[Extending Claude Code — Tools for Its Blind Spots]]):

- [[Video Use]] edits **footage you already have**.
- [[Claude Video]] lets the agent **watch** a video.
- **OpenMontage produces a video from nothing but a topic** — research, script, assets, edit, render.

The zero-key path is the interesting one for experimentation: [[HyperFrames]] and [[Remotion]] both ship as composition engines, Piper TTS narrates offline, and Archive.org / NASA / Wikimedia supply real footage. That is a complete video without a single paid API call.

## What you get with zero API keys
| Capability | Free tool | What it does |
| --- | --- | --- |
| **Narration** | Piper TTS | Offline text-to-speech |
| **Open footage** | Archive.org · NASA · Wikimedia Commons | Archival and documentary texture |
| **Extra stock** | Pexels · Unsplash · Pixabay | Free stock (free developer keys) |
| **Composition (React)** | [[Remotion]] | Spring-animated scenes, stat cards, word-level captions, TalkingHead |
| **Composition (HTML/GSAP)** | [[HyperFrames]] | Kinetic typography, promos, SVG character rigs |
| **Post-production** | FFmpeg | Encoding, subtitle burn-in, mixing, grading |
| **Subtitles** | Built-in | Word-level timing |

OpenMontage picks between Remotion and HyperFrames at proposal time and locks it as `render_runtime` — Remotion for data-driven explainers, HyperFrames for motion-graphics-heavy briefs.

## How it works
Every pipeline follows the same flow:
```
research -> proposal -> script -> scene_plan -> assets -> edit -> compose
```
Each stage has a dedicated **director skill** — a Markdown instruction file teaching the agent how to execute that stage. Python provides only tools and persistence; all creative logic, review criteria and quality standards live in readable YAML + Markdown you can inspect and change.

### Three-layer knowledge architecture
```
Layer 1: tools/ + pipeline_defs/     "What exists" — executable capabilities + orchestration
Layer 2: skills/                     "How to use it" — OpenMontage conventions and quality bars
Layer 3: .agents/skills/             "How it works" — external technology knowledge packs
```
Each tool declares which Layer 3 skills it depends on — a clean example of [[Progressive Disclosure]] applied to a tool registry.

## Production governance
- **Human approval gates are enforced, not suggested** — proposal, script, scene plan, assets and publish all pause for sign-off; the checkpoint writer *rejects* a "completed" gated stage without recorded approval, and superseded checkpoints are archived so the audit trail survives revisions.
- **Pre-compose validation** — blocks the render when the delivery promise is violated (a "motion-led" video that is 80% stills), slideshow risk is critical, or the renderer family is missing.
- **Post-render self-review** — ffprobe validation, frames extracted at 4 positions to catch black frames and broken overlays, audio level analysis for silence/clipping, delivery-promise and subtitle checks. Fail the review and the video is never presented.
- **Slideshow risk scoring** — 6 dimensions (repetition, decorative visuals, weak motion, shot intent, typography overreliance, unsupported cinematic claims) to prevent "animated PowerPoint".
- **Scored provider selection** — 7 dimensions: task fit (30%), output quality (20%), control (15%), reliability (15%), cost efficiency (10%), latency (5%), continuity (5%). Winner and alternatives are logged.
- **Decision audit trail** — every provider, style, music, voice, renderer and fallback choice logged with alternatives, confidence and reasoning.
- **Budget controls** — estimate → reserve → reconcile, modes `observe` / `warn` / `cap`, per-action approval above a threshold (default $0.50), total cap default $10.

## Alternatives considered
- **[[Video Use]]** — agent-driven editor for footage you already shot; reads transcripts for word-level cuts. Complementary, not competing.
- **[[HyperFrames]] / [[Remotion]]** — composition engines only; OpenMontage uses both as its renderers rather than replacing them.
- **Single-clip prompt tools (Runway, Veo, Kling standalone)** — one clip from one prompt; OpenMontage orchestrates them as providers inside a full pipeline.

⚠️ **Licence check:** AGPLv3, not MIT — meaningful if you ever want to build a hosted service on top of it.

## Resources
- 🔗 Repo: [github.com/calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)
- 🔗 [Providers guide (pricing + free tiers)](https://github.com/calesthio/OpenMontage/blob/main/docs/PROVIDERS.md) · [Backlot README](https://github.com/calesthio/OpenMontage/blob/main/backlot/README.md)
- 🔗 [AGENT_GUIDE.md](https://github.com/calesthio/OpenMontage/blob/main/AGENT_GUIDE.md) — the agent contract · [PROJECT_CONTEXT.md](https://github.com/calesthio/OpenMontage/blob/main/PROJECT_CONTEXT.md)
- 📖 Related: [[Video Use]] · [[Claude Video]] · [[HyperFrames]] · [[Remotion]] · [[ElevenLabs]] · [[Extending Claude Code — Tools for Its Blind Spots]]

---
Template: [[templates/tool]]
