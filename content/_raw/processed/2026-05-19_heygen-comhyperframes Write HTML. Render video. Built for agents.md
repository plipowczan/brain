---
title: "heygen-com/hyperframes: Write HTML. Render video. Built for agents."
source: "https://github.com/heygen-com/hyperframes"
author:
published:
created: 2026-05-19
description: "Write HTML. Render video. Built for agents. Contribute to heygen-com/hyperframes development by creating an account on GitHub."
tags:
  - "clippings"
---
![[c7440662a45a2e622ba6c51804b4c12d_MD5.svg]]

**Write HTML. Render video. Built for agents.**

[![[190f22f3fc46da9eb852596a78ea0b81_MD5.webp]]](https://camo.githubusercontent.com/58d14bd8fe5428a03b15429ad1bc46ab09b0183c50e99a10eadae502b3d57e90/68747470733a2f2f7374617469632e68657967656e2e61692f68797065726672616d65732d6f73732f646f63732f696d616765732f68666769662d313238302e77656270)

Hyperframes is an open-source video rendering framework that lets you create, preview, and render HTML-based video compositions — with first-class support for AI agents.

## Quick Start

Install the HyperFrames skills, then describe the video you want:

```
npx skills add heygen-com/hyperframes
```

This teaches your agent (Claude Code, Cursor, Gemini CLI, Codex) how to write correct compositions, GSAP timelines, Tailwind v4 browser-runtime styles, and first-party adapter animations. In Claude Code, the skills register as slash commands — invoke `/hyperframes` to author compositions, `/hyperframes-cli` for the dev-loop commands (init, lint, preview, render), `/hyperframes-media` for asset preprocessing (TTS, transcription, background removal), `/tailwind` for `init --tailwind` projects, `/gsap` for timeline animation help, or the adapter skills (`/animejs`, `/css-animations`, `/lottie`, `/three`, `/waapi`) when a composition uses those runtimes.

For Claude Design, open [`docs/guides/claude-design-hyperframes.md`](https://github.com/heygen-com/hyperframes/blob/main/docs/guides/claude-design-hyperframes.md) on GitHub and click the download button (↓) to save it, then attach the file to your Claude Design chat. It produces a valid first draft; refine in any AI coding agent. See the [Claude Design guide](https://hyperframes.heygen.com/guides/claude-design).

For Codex specifically, the same skills are also exposed as an [OpenAI Codex plugin](https://github.com/heygen-com/hyperframes/blob/main/.codex-plugin/plugin.json) — sparse-install just the plugin surface:

```
codex plugin marketplace add heygen-com/hyperframes --sparse .codex-plugin --sparse skills --sparse assets
```

For Claude Code, the repo also ships a [Claude Code plugin manifest](https://github.com/heygen-com/hyperframes/blob/main/.claude-plugin/plugin.json): test it locally with `claude --plugin-dir .`. The manifest intentionally omits `skills` because Claude Code auto-discovers the root `skills/` directory by convention, and for marketplace submission use the title `HyperFrames by HeyGen` plus the black/white icon assets at [`assets/claude-code-icon-dark.svg`](https://github.com/heygen-com/hyperframes/blob/main/assets/claude-code-icon-dark.svg) and [`assets/claude-code-icon-light.svg`](https://github.com/heygen-com/hyperframes/blob/main/assets/claude-code-icon-light.svg) for the two theme slots. For Cursor, the same skills are packaged as a [Cursor plugin](https://github.com/heygen-com/hyperframes/blob/main/.cursor-plugin/plugin.json) — install from the Cursor Marketplace, or sideload by cloning this repo and pointing **Settings → Plugins → Load unpacked** at the repo root.

#### Try it: example prompts

Copy any of these into your agent to get started. The `/hyperframes` prefix loads the skill context explicitly so you get correct output the first time.

**Cold start — describe what you want:**

> Using `/hyperframes`, create a 10-second product intro with a fade-in title, a background video, and background music.

**Warm start — turn existing context into a video:**

> Take a look at this GitHub repo [https://github.com/heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) and explain its uses and architecture to me using `/hyperframes`.

> Summarize the attached PDF into a 45-second pitch video using `/hyperframes`.

> Turn this CSV into an animated bar chart race using `/hyperframes`.

**Format-specific:**

> Make a 9:16 TikTok-style hook video about \[topic\] using `/hyperframes`, with bouncy captions synced to a TTS narration.

**Iterate — talk to the agent like a video editor:**

> Make the title 2x bigger, swap to dark mode, and add a fade-out at the end.

> Add a lower third at 0:03 with my name and title.

The agent handles scaffolding, animation, and rendering. See the [prompting guide](https://hyperframes.heygen.com/guides/prompting) for more patterns.

### Option 2: Start a project manually

```
npx hyperframes init my-video
cd my-video
npx hyperframes preview      # preview in browser (live reload)
npx hyperframes render       # render to MP4
```

`hyperframes init` installs skills automatically, so you can hand off to your AI agent at any point.

**Requirements:** Node.js >= 22, FFmpeg

## Why Hyperframes?

- **HTML-native** — compositions are HTML files with data attributes. No React, no proprietary DSL.
- **AI-first** — agents already speak HTML. The CLI is non-interactive by default, designed for agent-driven workflows.
- **Deterministic rendering** — same input = identical output. Built for automated pipelines.
- **Frame Adapter pattern** — bring your own animation runtime (GSAP, Lottie, CSS, Three.js).

## Hyperframes vs Remotion

Hyperframes is inspired by [Remotion](https://www.remotion.dev/) — we used Remotion at HeyGen in production, learned a ton from it, and kept attribution comments in the source for the patterns it pioneered (Chrome launch flags, image2pipe → FFmpeg streaming, frame buffering). Both tools drive headless Chrome and both are deterministic. They differ on one decision: **what the primary author writes.** Remotion's bet is React components; Hyperframes' bet is HTML.

|  | **Hyperframes** | **Remotion** |
| --- | --- | --- |
| Authoring | HTML + CSS + GSAP | React components (TSX) |
| Build step | None; `index.html` plays as-is | Required (bundler) |
| Library-clock animations (GSAP, Anime.js, Motion One) | Seekable, frame-accurate | Plays at wall-clock during render |
| Arbitrary HTML / CSS passthrough | Paste and animate | Rewrite as JSX |
| Distributed rendering | Single-machine today | Lambda, production-ready |

### Licensing: fully open source vs source-available

**Hyperframes is completely open source under [Apache 2.0](https://github.com/heygen-com/hyperframes/blob/main/LICENSE)** — an OSI-approved license. Use it commercially at any scale, with no per-render fees, no seat caps, no company-size thresholds.

**Remotion is [source-available, not open source](https://www.remotion.pro/license).** The code is on GitHub under a custom Remotion License that requires a paid company license above small-team thresholds. It's a great product with a real team behind it — but if open-source licensing matters to you (OSI compliance, redistribution rights, no per-use fees), that's a first-order decision point.

Full write-up with benchmarks, an honest list of where each tool wins, and a GSAP side-by-side: **[Hyperframes vs Remotion guide](https://hyperframes.heygen.com/guides/hyperframes-vs-remotion)**.

## How It Works

Define your video as HTML with data attributes:

```
<div id="stage" data-composition-id="my-video" data-start="0" data-width="1920" data-height="1080">
  <video
    id="clip-1"
    data-start="0"
    data-duration="5"
    data-track-index="0"
    src="intro.mp4"
    muted
    playsinline
  ></video>
  <img
    id="overlay"
    class="clip"
    data-start="2"
    data-duration="3"
    data-track-index="1"
    src="logo.png"
  />
  <audio
    id="bg-music"
    data-start="0"
    data-duration="9"
    data-track-index="2"
    data-volume="0.5"
    src="music.wav"
  ></audio>
</div>
```

Preview instantly in the browser. Render to MP4 locally or in Docker.

## Catalog

50+ ready-to-use blocks and components — social overlays, shader transitions, data visualizations, and cinematic effects:

```
npx hyperframes add flash-through-white   # shader transition
npx hyperframes add instagram-follow      # social overlay
npx hyperframes add data-chart            # animated chart
```

Browse the full catalog at **[hyperframes.heygen.com/catalog](https://hyperframes.heygen.com/catalog/blocks/data-chart)**.

## Documentation

Full documentation at **[hyperframes.heygen.com/introduction](https://hyperframes.heygen.com/introduction)** — [Quickstart](https://hyperframes.heygen.com/quickstart) | [Guides](https://hyperframes.heygen.com/guides/gsap-animation) | [API Reference](https://hyperframes.heygen.com/packages/core) | [Catalog](https://hyperframes.heygen.com/catalog/blocks/data-chart)

## Packages

| Package | Description |
| --- | --- |
| [`hyperframes`](https://github.com/heygen-com/hyperframes/blob/main/packages/cli) | CLI — create, preview, lint, and render compositions |
| [`@hyperframes/core`](https://github.com/heygen-com/hyperframes/blob/main/packages/core) | Types, parsers, generators, linter, runtime, frame adapters |
| [`@hyperframes/engine`](https://github.com/heygen-com/hyperframes/blob/main/packages/engine) | Seekable page-to-video capture engine (Puppeteer + FFmpeg) |
| [`@hyperframes/producer`](https://github.com/heygen-com/hyperframes/blob/main/packages/producer) | Full rendering pipeline (capture + encode + audio mix) |
| [`@hyperframes/studio`](https://github.com/heygen-com/hyperframes/blob/main/packages/studio) | Browser-based composition editor UI |
| [`@hyperframes/player`](https://github.com/heygen-com/hyperframes/blob/main/packages/player) | Embeddable `<hyperframes-player>` web component |
| [`@hyperframes/shader-transitions`](https://github.com/heygen-com/hyperframes/blob/main/packages/shader-transitions) | WebGL shader transitions for compositions |

## Skills

HyperFrames ships [skills](https://github.com/vercel-labs/skills) that teach AI agents framework-specific patterns that generic docs don't cover.

```
npx skills add heygen-com/hyperframes
```

| Skill | What it teaches |
| --- | --- |
| `hyperframes` | HTML composition authoring, captions, TTS, audio-reactive animation, transitions |
| `hyperframes-cli` | Dev-loop CLI: init, lint, inspect, preview, render, doctor |
| `hyperframes-media` | Asset preprocessing: tts (Kokoro), transcribe (Whisper), remove-background (u2net) — voice/model/codec selection |
| `hyperframes-registry` | Block and component installation via `hyperframes add` |
| `website-to-hyperframes` | Capture a URL and turn it into a video — full website-to-video pipeline |
| `remotion-to-hyperframes` | Translate a Remotion (React) composition into a HyperFrames HTML composition |
| `gsap` | GSAP timelines for HyperFrames: paused registration, deterministic seeking, easing, sequencing, performance |
| `animejs` | Anime.js animations and timelines registered on `window.__hfAnime` for deterministic HyperFrames seeking |
| `css-animations` | CSS keyframe animation patterns that HyperFrames can discover, pause, and seek |
| `lottie` | `lottie-web` and dotLottie players registered on `window.__hfLottie` with local assets and paused playback |
| `three` | Three.js scenes that render from HyperFrames `hf-seek` events and `window.__hfThreeTime` instead of wall-clock time |
| `waapi` | Web Animations API `element.animate()` patterns seeked through `document.getAnimations()` |

## Contributing

See [CONTRIBUTING.md](https://github.com/heygen-com/hyperframes/blob/main/CONTRIBUTING.md) for guidelines.

### Cloning the repo

The repo uses [Git LFS](https://git-lfs.com/) for golden regression-test baselines under `packages/producer/tests/**/output.mp4` (~240 MB of `.mp4` files). If you're cloning the full repo for development, install Git LFS first:

```
# macOS
brew install git-lfs

# Ubuntu/Debian
sudo apt install git-lfs

# Windows
winget install GitHub.GitLFS
# (or install Git for Windows, which bundles Git LFS as an optional component)

# Then (once, per machine)
git lfs install
```

If you hit `git-lfs filter-process: command not found` during `git clone` or `npx skills add heygen-com/hyperframes`, install Git LFS and retry. You can also skip LFS content if you only need the source files:

```
GIT_LFS_SKIP_SMUDGE=1 git clone https://github.com/heygen-com/hyperframes.git
```

## License

[Apache 2.0](https://github.com/heygen-com/hyperframes/blob/main/LICENSE)