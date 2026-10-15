---
title: "Satori"
date: 2026-10-15
enableToc: true
openToc: true
tags: ["tool", "ai", "frontend", "javascript", "typescript", "wasm", "memes", "open-source"]
type: tool
source: "_raw/processed/2026-10-15_2026-10-15-research-meme-generation-for-coding-agents.md"
agent-created: true
summary: "vercel/satori + resvg-wasm — turns a JSX/CSS element tree into SVG and PNG in pure JS and WASM, no native modules; my primary meme renderer because it runs under Smart App Control and handles Polish glyphs"
---
# Satori

🗒️ **[vercel/satori](https://github.com/vercel/satori)** converts an element tree (JSX with a CSS subset) into SVG, and `@resvg/resvg-wasm` rasterises that SVG to PNG. The whole chain is pure JS plus WASM: **no native `.node` modules**, so it runs under Smart App Control with the signed `node.exe`. About 14k stars, 4.5M npm downloads a week, very active (three releases on 2026-10-15). In [[Meme Generation for Coding Agents]] it is the primary renderer for captions.

## Links
### Description
- **Why it fits.** Fonts are loaded as ArrayBuffers, so any TTF with Polish glyphs works (Anton, Impact, Noto Sans static). A tofu detector (`loadAdditionalAsset`) can flag exactly the missing glyphs and refuse to render. In the proof of concept: a render took 0.2-0.4 s (about 0.55-0.65 s per meme with Node start-up), a 12-frame 480x480 GIF was 175 KB with Polish intact, and auto-fit of long captions worked with about seven calls per caption box.
- **Pitfalls found by testing:**
  - `@fontsource` `latin` and `latin-ext` subsets registered under the **same family name fail silently**: Satori uses only the first file and Polish letters become empty boxes. Register them under distinct names, or use one full TTF.
  - **Variable fonts crash Satori** (the Noto variable TTF raised "reading 256"); use static files.
  - On Windows import packages with `pathToFileURL(...).href`; raw `C:\` paths fail with `ERR_UNSUPPORTED_ESM_URL_SCHEME`. Import Satori's ESM entry and resvg-wasm's `index.mjs`, then call `initWasm` with the `.wasm` bytes.
  - Line-height 1.12 made the ogoneks in "GĘŚLĄ" collide with accents on the next line; 1.32 fixes it.
  - There is no built-in auto-fit, and **resvg-wasm has had no release since 2024-03** (the slow step, about 0.2-0.3 s). Satori itself is pre-1.0 and ships fast, so pin the version.

### Download or use
In the skill folder: `npm init -y && npm install --ignore-scripts satori@0.57.2 @resvg/resvg-wasm@2.6.2` (Node 18 or newer, tested on 24). Add OFL fonts such as `Anton-Regular.ttf` from `github.com/google/fonts/ofl/anton`. A render script is about 60-80 lines: load fonts as Buffers, build the element tree per template, `satori()` → `Resvg` → PNG. Satori 0.58 and 0.59 came out hours after the test and were not tried.

## Reasoning for
I want a meme renderer that adds no native binary, does not need a browser and lets me prove Polish glyph coverage. The alternative that also works is Playwright with the signed Edge or Chrome (heavier, 7-14 s cold start; never run `playwright install`, its downloaded ffmpeg was blocked). I will pin Satori and re-run a Polish self-test (`Zażółć gęślą jaźń`) before every bump.

## Alternatives considered
- **Pillow script:** Polish-correct with a TTF, the simplest fallback, and its `.pyd` files load under Smart App Control.
- **Playwright / [[Playwright MCP]]:** full CSS and an installed browser, but slow and heavy.
- **`@vercel/og`:** built on Satori for OpenGraph images; same engine, fewer knobs.
- **ffmpeg `drawtext`:** no wrapping and `font=` fails on Windows; ASS subtitles are the better ffmpeg path.

## Resources
- 🔗 [github.com/vercel/satori](https://github.com/vercel/satori) · [resvg-js](https://github.com/thx/resvg-js) (the `@resvg/resvg-wasm` package)
- 📖 Related: [[Meme Generation for Coding Agents]] · [[OpenClaw Meme Maker]] · [[Slack GIF Creator]] · [[Memegen]] · [[Playwright MCP]] · [[Claude Code]]

---
Template: [[templates/tool]]
