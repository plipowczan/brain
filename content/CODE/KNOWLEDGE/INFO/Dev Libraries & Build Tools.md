---
title: "Dev Libraries & Build Tools"
date: 2026-06-14
enableToc: true
openToc: true
tags: ["knowledge", "info", "tools", "javascript", "typescript", "libraries", "testing"]
type: knowledge-note
agent-created: true
summary: "Reference roundup of the supporting JS/TS libraries used across my projects — validation, testing, logging, image/media rendering, CLI, i18n — with what each is for and which project uses it"
---
# Dev Libraries & Build Tools

A collective reference for the smaller JavaScript/TypeScript libraries that show up across my projects. These don't warrant individual [[templates/tool|tool]] notes — they're focused, well-known dependencies — but they're worth recording in one place so the stack is searchable and linkable.

**Project key:** Q = [[Qamera AI]] · AGRE = [[AGRE]] · TTTR = [[Tech To The Rescue]] · TNW = [[Tech News Weekly]] · TC = [[Travelcast AI]] · VB = [[Value Builders]]

## 🧩 Validation
- **Zod** — TypeScript-first schema declaration + validation. Used to validate YAML/JSON config, API payloads, and — importantly for AI pipelines — to parse and guarantee the shape of LLM `tool_use`/structured output before it's trusted. *Used by: Q, AGRE, TNW, TC.* — [zod.dev](https://zod.dev/)

## 🧪 Testing
- **Vitest** — Vite-native unit test runner; fast, ESM-first, Jest-compatible API. The default unit-test layer across the TypeScript projects. *Used by: Q, AGRE, TNW, TC.* — [vitest.dev](https://vitest.dev/)
- **Playwright** — end-to-end browser testing across Chromium/Firefox/WebKit; also taught as the verification step in "vibe engineering." *Used by: Q, AGRE, VB.* — [playwright.dev](https://playwright.dev/)

## 🗒️ Logging
- **Pino** — very fast, low-overhead structured JSON logging for Node; logs become queryable rather than free-text. *Used by: Q, TNW.* — [getpino.io](https://getpino.io/)

## 🎨 Image & media rendering
- **Satori** — converts HTML/JSX + CSS into SVG; the engine behind generated cover/OG images from a template. *Used by: TNW.* — [github.com/vercel/satori](https://github.com/vercel/satori)
- **Sharp** — high-performance Node image processing (resize, format conversion, SVG→PNG); the rasterization step after Satori, and general image transforms. *Used by: TNW.* — [sharp.pixelplumbing.com](https://sharp.pixelplumbing.com/)
- **FFmpeg** — the universal audio/video toolkit; used for audio normalization and assembly (stereo, 44.1 kHz, 192 kbps) in podcast generation. *Used by: TC.* — [ffmpeg.org](https://ffmpeg.org/)

## ⌨️ CLI framework
- **Commander.js** — the standard Node framework for building command-line interfaces (commands, options, help); structures the `fetch → select → generate → …` pipeline CLI. *Used by: TNW.* — [github.com/tj/commander.js](https://github.com/tj/commander.js)

## 🌍 Internationalization
- **next-intl** — internationalization for [[Next.js]] App Router; messages-as-source-of-truth, locale routing. The i18n backbone for a four-language property site. *Used by: AGRE.* — [next-intl.dev](https://next-intl.dev/)

## 🔗 Links
- [[Next.js]] · [[React]] · [[Tailwind CSS]] · [[pnpm]] · [[Turborepo]] — the frameworks/build tooling these sit alongside
- [[Marketing, Sales & Publishing SaaS]] · [[Ops, Collaboration, Analytics & Community SaaS]] — sibling collective tool notes
- [[Missing Tools — Active Projects Audit]] — the source audit (Tier 4)
