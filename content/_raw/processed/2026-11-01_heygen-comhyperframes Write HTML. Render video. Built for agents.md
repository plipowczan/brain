---
title: "heygen-com/hyperframes: Write HTML. Render video. Built for agents."
source: "https://github.com/heygen-com/hyperframes"
author:
published:
created: 2026-10-14
description:
tags:
  - "clippings"
---
![[c7440662a45a2e622ba6c51804b4c12d_MD5.svg]]

**Write HTML. Render video. Built for agents.**

[Studio](https://www.hyperframes.dev/studio) | [Quickstart](https://hyperframes.heygen.com/quickstart) | [Showcase](https://hyperframes.heygen.com/showcase) | [Playground](https://www.hyperframes.dev/) | [Catalog](https://hyperframes.heygen.com/catalog/blocks/data-chart) | [Docs](https://hyperframes.heygen.com/introduction) | [Discord](https://discord.gg/EbK98HBPdk)

[![HyperFrames app opening from the Dock: native Mac and Linux app now available](https://private-user-images.githubusercontent.com/229591595/664901488-f6ff9fae-f33d-4f68-bd54-f3ed4ba6473b.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTE5NTg1NjIsIm5iZiI6MTc5MTk1ODI2MiwicGF0aCI6Ii8yMjk1OTE1OTUvNjY0OTAxNDg4LWY2ZmY5ZmFlLWYzM2QtNGY2OC1iZDU0LWYzZWQ0YmE2NDczYi5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYxMDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MTAxNFQwNjExMDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jMjQ5YjE0MzliYTlkMWM4YTc0NWFkMTFkZTY3MjkyNjNiYTQ5MTJiZDhmY2VkMzhhOTA1ZTAzZjE1YWI0MzJlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZnaWYifQ.RU2ISjsaiei2R9T0qtH15bj828EUD5MI7n8-FKnMGi4)](https://private-user-images.githubusercontent.com/229591595/664901488-f6ff9fae-f33d-4f68-bd54-f3ed4ba6473b.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTE5NTg1NjIsIm5iZiI6MTc5MTk1ODI2MiwicGF0aCI6Ii8yMjk1OTE1OTUvNjY0OTAxNDg4LWY2ZmY5ZmFlLWYzM2QtNGY2OC1iZDU0LWYzZWQ0YmE2NDczYi5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYxMDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MTAxNFQwNjExMDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jMjQ5YjE0MzliYTlkMWM4YTc0NWFkMTFkZTY3MjkyNjNiYTQ5MTJiZDhmY2VkMzhhOTA1ZTAzZjE1YWI0MzJlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZnaWYifQ.RU2ISjsaiei2R9T0qtH15bj828EUD5MI7n8-FKnMGi4)

HyperFrames is an open-source framework for turning HTML, CSS, media, and seekable animations into deterministic MP4 videos. Use it locally with the CLI, from AI coding agents with skills, or as the rendering core behind hosted authoring workflows.

## Quick Start

### With an AI coding agent

For Claude Code, install the versioned plugin:

```
claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes
```

Enable auto-update for the **hyperframes** marketplace in `/plugin` → **Marketplaces**, then use `/hyperframes:hyperframes`. See the [plugin guide](https://github.com/heygen-com/hyperframes/blob/main/docs/guides/plugins.mdx) for Copilot, VS Code, Cursor, Gemini CLI, updates, and migration.

For standalone skills (including OpenCode), use:

```
npx skills add heygen-com/hyperframes
```

> The picker opens with nothing pre-selected — the **Core Skills** group is all you need: the `/hyperframes` router installs each creation workflow on demand. Agents and non-interactive runs should use `npx hyperframes skills update` instead — it installs exactly the core set, whereas `skills add --all` installs all 21 published skills. The six repo-internal skills under `.claude/skills` / `.agents/skills` are excluded by default. For the full published set use `npx hyperframes skills`.
> 
> `skills add` resolves the skills.sh registry blob, which can lag `main` by hours. `npx hyperframes skills update` installs from the current `main`, so reach for it when you need the newest copy of a skill.

Try a prompt like:

> Using `/hyperframes`, create a 10-second product intro with a fade-in title, a background video, and subtle background music.

The skills teach agents the HyperFrames production loop: plan the video, write valid HTML, wire seekable animations, add media, lint, preview, and render. They work with Claude Code, Codex, Cursor, Gemini CLI, IBM Bob, and other coding agents that support skills.

## Skills

HyperFrames ships 21 skills agents load on demand. Read `/hyperframes` first — it's the router and capability map; it picks a workflow for any "make me a…" request — video, deck, or composition port — and points to the domain skills below.

For standalone installation, default to the **core set** — the router installs each creation workflow on demand. `npx hyperframes skills update` installs exactly that from anywhere; the interactive picker (`npx skills add heygen-com/hyperframes`) lists it as the "Core Skills" group, nothing pre-selected. The picker is interactive-only — a non-interactive or agent run without `--skill` installs all 21. Use `npx skills add heygen-com/hyperframes --all` to install the complete published set deliberately (skips the picker), or `npx skills add heygen-com/hyperframes --skill <name>` for just one (bare name, no leading `/`).

Standalone installs stay lean after that: `npx hyperframes init` keeps the **core set** fresh (the router, the `hyperframes-*` domain skills, and `media-use` — plus whatever is already installed; `/figma` stays on demand) and never expands a partial install; the creation workflows install **on demand** — the router runs `npx hyperframes skills update <workflow>` before entering one. Nothing re-pulls the full set behind your back.

### Plugin packages

Plugins bundle the full skill catalog and use their agent's update manager. `bun run package:agent-plugin` builds the committed portable ZIP, source metadata, and SHA-256 checksum. See the [maintainer checklist](https://github.com/heygen-com/hyperframes/blob/main/docs/contributing/agent-plugins.mdx).

### Upload to Codex

Build the upload-ready Codex plugin archive from the committed `HEAD` version of the manifest, brand assets, and skills:

```
bun run package:codex-plugin
```

This writes `dist/hyperframes-plugin.zip` with a `hyperframes/` root folder and fails if the archive exceeds Codex's 100 MB upload limit.

### Router

| Skill | Use when |
| --- | --- |
| `/hyperframes` | **Read first** for any request to make / create / edit / animate / render a video, animation, or motion graphic. Capability map for the domain skills, the intent layer that confirms every creation brief up front, and intent router for the creation workflows below. |

### Creation workflows

| Skill | Use when |
| --- | --- |
| `/product-launch-video` | Any **website** — marketing / launching / promoting a product (from its URL, a brief, or a script), or a site tour / showcase / social clip featuring the site's own visuals. Up to ~3 min (sweet spot 30-90s). |
| `/faceless-explainer` | **Explaining a topic / concept** from arbitrary text — no product, no URL, no website capture; every visual is LLM-invented (typography / abstract / diagram / data-viz). |
| `/pr-to-video` | A **GitHub pull request** (PR URL, `owner/repo#N` ref, or "this PR") → changelog / feature-reveal / fix / refactor explainer, read via the `gh` CLI. |
| `/embedded-captions` | Adding **captions / subtitles** to an existing talking-head video (footage untouched) — verbatim rail, embedded climax behind the subject, or pure-cinematic embed. |
| `/talking-head-recut` | Packaging an existing talking-head / interview / podcast video with **designed graphic overlays** — lower-thirds, data callouts, kinetic titles, pull-quotes, side panels, PiP. |
| `/motion-graphics` | A short, **unnarrated, design-led motion graphic** (~under 10s) — kinetic type, stat / chart hit, logo sting, lower-third, animated tweet / headline. MP4 or transparent overlay. |
| `/music-to-video` | A **music track** (audio file, video to pull audio from, or one generated from a mood brief) → a **beat-synced** video — lyric, slideshow, or kinetic promo; music drives pacing. |
| `/slideshow` | A **presentation / pitch deck / interactive deck** — discrete slides, fragment reveals, branching, hotspot navigation, presenter mode. Output is a navigable deck, not a rendered video. |
| `/general-video` | **Anything else** — longer or multi-scene pieces, brand / sizzle reel, title card, static loop, freeform composition. Input- and length-agnostic fallback, and the home of companion mode (co-create with the full toolbox). |
| `/remotion-to-hyperframes` | **Porting an existing Remotion** (React) composition's source to HyperFrames HTML. One-way migration, not creation. |

### Domain skills (loaded on demand)

Atomic capabilities the creation workflows compose against — pull one when you need that specific layer.

| Skill | Covers |
| --- | --- |
| `/hyperframes-core` | The composition contract — `data-*` timing attributes, `class="clip"`, tracks, sub-compositions, variables, framework-owned media playback, determinism rules. |
| `/hyperframes-animation` | All animation knowledge — atomic motion rules, scene blueprints, transitions, runtime adapters (GSAP / Lottie / Three.js / Anime.js / CSS / WAAPI / TypeGPU). |
| `/hyperframes-keyframes` | Seek-safe keyframe authoring across runtimes — GSAP timelines, CSS keyframes, Anime.js, WAAPI, FLIP, paths, masks, SVG morph/draw, 3D depth — plus `hyperframes keyframes` diagnostics for rendered motion. |
| `/hyperframes-creative` | Non-animation creative direction — `frame.md` / `design.md`, palettes, typography, narration, beat planning, audio-reactive visuals, composition patterns. |
| `/media-use` | The media OS (a host app's own music and sound-effect tools come first for those) — resolve any media need (BGM, SFX, image, icon, logo, voice, color grade, LUT) into a frozen local file or paste-ready block + ledger record, generate via TTS/music/image models when the catalog misses, transcribe, caption, remove backgrounds, and reuse assets across projects. One shared audio engine + manifest tracking. |
| `/hyperframes-cli` | CLI dev loop — `init`, `lint`, `check`, `snapshot`, `preview`, `render`, `publish`, `doctor`, plus HeyGen-hosted cloud rendering (`cloud render`) and AWS Lambda rendering (`lambda deploy / render / progress`). |
| `/hyperframes-audio` | Mix the audio already placed in a composition — voiceover carve (dip a music bed only in the bands the voice occupies, static or dynamic, level match included), the effect chain (EQ, compressor, limiter, gate, saturation, delay, reverb, chorus, phaser, bitcrush), automation envelopes on volume or any effect parameter, and submix buses (`<hf-audio-group>`) carrying one chain, fader and automation clock for several tracks at once. Sourcing the audio is `/media-use`. |
| `/hyperframes-registry` | Search, install and wire registry blocks and components into compositions via `hyperframes catalog` / `hyperframes add`. Load before hand-building any named look, effect, treatment or transition. Authoring a new block or component to contribute upstream. |
| `/figma` | Import Figma assets, tokens, components, and storyboard sections → reconstructed motion (frames read as states, not slides) (REST/CLI) plus Motion animations (MCP) and shaders (MCP source / native export) into a composition. |

For visual design handoff workflows, see the [Claude Design guide](https://hyperframes.heygen.com/guides/claude-design) and [Open Design guide](https://hyperframes.heygen.com/guides/open-design).

### Manually with the CLI

```
npx hyperframes init my-video
cd my-video
npx hyperframes preview      # preview in browser with live reload
npx hyperframes render       # render to MP4
```

**Requirements:** Node.js 22+, FFmpeg

## What You Can Build

Need ideas? Browse the [Showcase](https://hyperframes.heygen.com/showcase) for finished videos you can watch, read, run, and remix.

- Product launch videos and feature announcements
- PR walkthroughs with animated code diffs, narration, and captions
- Data visualizations, chart races, and map animations
- Social videos with kinetic captions, overlays, and music
- Docs-to-video, PDF-to-video, and site-tour explainers
- Reusable motion graphics for automated content pipelines

## Frame.md

**frame.md — your design system, ready for video.**

Every brand has a `design.md`. None of them were written for a camera. `frame.md` is the missing translation layer: it takes your web-context design spec and inverts it for the frame — the same tokens, the same rules, but rewritten so an AI agent can compose a promo video without guessing at scale or reaching for web chrome.

The output is a `DESIGN.md` superset your whole toolchain can read. Atoms stay sacred. Composition stays free. Numbers come from the script.

| [![[89c302916cd3d9b5863d28bf52dd93f7_MD5.png]]](https://www.hyperframes.dev/design/biennale-yellow)   **[Biennale Yellow](https://www.hyperframes.dev/design/biennale-yellow)** | [![[e6dfbf7f622171fb01ed3aa769065258_MD5.png]]](https://www.hyperframes.dev/design/blockframe)   **[BlockFrame](https://www.hyperframes.dev/design/blockframe)** |
| --- | --- |
| [![[3916cb049ec2185ee36fbbc9eaab6f69_MD5.png]]](https://www.hyperframes.dev/design/blue-professional)   **[Blue Professional](https://www.hyperframes.dev/design/blue-professional)** | [![[03d175d56727106e9fcdc39061705f6c_MD5.png]]](https://www.hyperframes.dev/design/bold-poster)   **[Bold Poster](https://www.hyperframes.dev/design/bold-poster)** |
| [![[099c1788c26c4ddfa004e4cedd6edede_MD5.png]]](https://www.hyperframes.dev/design/broadside)   **[Broadside](https://www.hyperframes.dev/design/broadside)** | [![[7792829a4ca2845f2d9e8e8798a07de6_MD5.png]]](https://www.hyperframes.dev/design/capsule)   **[Capsule](https://www.hyperframes.dev/design/capsule)** |
| [![[27274acb91d514c6104f98d188b4ba7b_MD5.png]]](https://www.hyperframes.dev/design/cartesian)   **[Cartesian](https://www.hyperframes.dev/design/cartesian)** | [![[812c426e4826ece65626583a5082c2e3_MD5.png]]](https://www.hyperframes.dev/design/cobalt-grid)   **[Cobalt Grid](https://www.hyperframes.dev/design/cobalt-grid)** |
| [![[fafbe2334edcfbb5b1b66a964591b1cb_MD5.png]]](https://www.hyperframes.dev/design/coral)   **[Coral](https://www.hyperframes.dev/design/coral)** | [![[caa703d7980e7b486a6324769bb5f27e_MD5.png]]](https://www.hyperframes.dev/design/creative-mode)   **[Creative Mode](https://www.hyperframes.dev/design/creative-mode)** |

Browse and remix them all at [hyperframes.dev/design](https://www.hyperframes.dev/design).

## How It Works

Define a video as HTML. Add data attributes for timing and tracks. Use GSAP, CSS, Lottie, Three.js, Anime.js, WAAPI, or your own frame adapter for seekable animation.

```
<div id="stage" data-composition-id="launch" data-start="0" data-width="1920" data-height="1080">
  <video
    class="clip"
    data-start="0"
    data-duration="6"
    data-track-index="0"
    src="intro.mp4"
    muted
    playsinline
  ></video>

  <h1 id="title" class="clip" data-start="1" data-duration="4" data-track-index="1">Launch day</h1>

  <audio
    data-start="0"
    data-duration="6"
    data-track-index="2"
    data-volume="0.5"
    src="music.wav"
  ></audio>

  <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
  <script>
    const tl = gsap.timeline({ paused: true });
    tl.from("#title", { opacity: 0, y: 40, duration: 0.8 }, 1);
    window.__timelines = window.__timelines || {};
    window.__timelines.launch = tl;
  </script>
</div>
```

Preview instantly in the browser. Render locally or in Docker. The renderer seeks each frame in headless Chrome and encodes the result with FFmpeg, so the same input produces the same video.

## HyperFrames Stack

HyperFrames is the open-source rendering engine, plus a growing set of tools around HTML-native video creation.

| Piece | Status | What it does |
| --- | --- | --- |
| CLI | Available | Scaffold, preview, lint, inspect, and render local video projects |
| Core / Engine / Producer | Available | Parse compositions, drive headless Chrome, encode video, and mix audio |
| Catalog | Available | Reusable blocks and components for transitions, overlays, captions, charts, maps, and effects |
| Agent skills | Available | Teach coding agents the video-production patterns that generic web docs miss |
| Studio | Available, evolving | Browser surface for previewing and editing compositions |
| AWS Lambda rendering | Available | Deploy a distributed render stack and drive renders from your laptop or CI |
| [hyperframes.dev](https://www.hyperframes.dev/) | Available | Community playground for previewing, iterating, sharing, and rendering HTML-native video projects |
| [frame.md](https://www.hyperframes.dev/design) | Available | Invert your design system for the camera — a DESIGN.md superset an agent can compose video from |

## Catalog

Install ready-to-use blocks and components:

```
npx hyperframes add flash-through-white   # shader transition
npx hyperframes add instagram-follow      # social overlay
npx hyperframes add data-chart            # animated chart
```

Browse the catalog at [hyperframes.heygen.com/catalog](https://hyperframes.heygen.com/catalog/blocks/data-chart).

## Why HyperFrames?

- **HTML-native:** compositions are HTML files with data attributes. No React requirement, no proprietary timeline format.
- **Agent-friendly:** agents already write HTML, and the CLI is non-interactive by default.
- **Deterministic:** same input, same frames, same output. Built for CI, regression tests, and automated rendering.
- **No build step:** an `index.html` composition plays as-is and can be previewed directly in the browser.
- **Adapter-based animation:** bring GSAP, CSS animations, Lottie, Three.js, Anime.js, WAAPI, or a custom runtime.
- **Open source:** Apache 2.0 license, with no per-render fees or commercial-use thresholds.

## HyperFrames vs Remotion

HyperFrames is inspired by [Remotion](https://www.remotion.dev/). Both tools render video with headless Chrome and FFmpeg. The main difference is the authoring model: Remotion's bet is React components; HyperFrames' bet is plain HTML that humans and agents can both write easily.

|  | **HyperFrames** | **Remotion** |
| --- | --- | --- |
| Authoring | HTML + CSS + seekable animation | React components |
| Build step | None; `index.html` plays as-is | Bundler required |
| Agent handoff | Plain HTML files | JSX / React project |
| Library-clock animations | Seekable, frame-accurate via adapters | Wall-clock animation patterns need care |
| Distributed rendering | Local and AWS Lambda render paths | Remotion Lambda, mature cloud renderer |
| License | Apache 2.0 | Source-available Remotion License |

Read the full comparison in the [HyperFrames vs Remotion guide](https://hyperframes.heygen.com/guides/hyperframes-vs-remotion).

## Documentation

Full documentation: [hyperframes.heygen.com/introduction](https://hyperframes.heygen.com/introduction)

- [Quickstart](https://hyperframes.heygen.com/quickstart)
- [Showcase](https://hyperframes.heygen.com/showcase)
- [Guides](https://hyperframes.heygen.com/guides/gsap-animation)
- [API Reference](https://hyperframes.heygen.com/packages/core)
- [Catalog](https://hyperframes.heygen.com/catalog/blocks/data-chart)
- [Examples](https://hyperframes.heygen.com/examples)
- [AWS Lambda rendering](https://hyperframes.heygen.com/deploy/aws-lambda)

## Packages

| Package | Description |
| --- | --- |
| [`hyperframes`](https://github.com/heygen-com/hyperframes/blob/main/packages/cli) | CLI for creating, previewing, linting, and rendering compositions |
| [`@hyperframes/core`](https://github.com/heygen-com/hyperframes/blob/main/packages/core) | Types, parsers, generators, linter, runtime, and frame adapters |
| [`@hyperframes/engine`](https://github.com/heygen-com/hyperframes/blob/main/packages/engine) | Seekable page-to-video capture engine using Puppeteer and FFmpeg |
| [`@hyperframes/producer`](https://github.com/heygen-com/hyperframes/blob/main/packages/producer) | Full rendering pipeline for capture, encode, and audio mix |
| [`@hyperframes/studio`](https://github.com/heygen-com/hyperframes/blob/main/packages/studio) | Browser-based composition editor UI |
| [`@hyperframes/player`](https://github.com/heygen-com/hyperframes/blob/main/packages/player) | Embeddable `<hyperframes-player>` web component |
| [`@hyperframes/shader-transitions`](https://github.com/heygen-com/hyperframes/blob/main/packages/shader-transitions) | WebGL shader transitions for compositions |
| [`@hyperframes/aws-lambda`](https://github.com/heygen-com/hyperframes/blob/main/packages/aws-lambda) | AWS Lambda SDK and deployment surface for distributed renders |

## Community

HyperFrames is used in production at [HeyGen](https://www.heygen.com/), with community examples from teams like [tldraw](https://tldraw.com/), [TanStack](https://tanstack.com/), and others in [ADOPTERS.md](https://github.com/heygen-com/hyperframes/blob/main/ADOPTERS.md). Open a PR if your team is using HyperFrames.

- Questions and ideas: [Discord](https://discord.gg/EbK98HBPdk)
- Bugs and feature requests: [GitHub Issues](https://github.com/heygen-com/hyperframes/issues)
- User research: [Book a casual 30-minute conversation with the HyperFrames team](https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2cSpKoDgmcmRrgekrnrgqmvPT8W6F2Zg6e7MY7IJqaZKwpn_I0NdTHkN390iguMepE_NVg8ezb?gv=true) — no preparation or sales pitch
- Security reports: [SECURITY.md](https://github.com/heygen-com/hyperframes/blob/main/SECURITY.md)
- Contributions: [CONTRIBUTING.md](https://github.com/heygen-com/hyperframes/blob/main/CONTRIBUTING.md)

## Development Note

The repo uses [Git LFS](https://git-lfs.com/) for golden regression-test baselines under `packages/producer/tests/**/output.mp4` (about 240 MB of `.mp4` files). If you're cloning the full repo for development, install Git LFS first:

```
# macOS
brew install git-lfs

# Ubuntu / Debian
sudo apt install git-lfs

# Windows
winget install GitHub.GitLFS

# Then, once per machine
git lfs install
```

If you only need source files, you can skip LFS content:

```
GIT_LFS_SKIP_SMUDGE=1 git clone https://github.com/heygen-com/hyperframes.git
```

## License

[Apache 2.0](https://github.com/heygen-com/hyperframes/blob/main/LICENSE)