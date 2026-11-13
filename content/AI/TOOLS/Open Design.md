---
title: "Open Design"
date: 2026-05-16
enableToc: true
openToc: true
tags: ["tool", "ai", "design", "ux", "open-source", "apache-2.0", "byok", "claude-code", "codex", "skills", "design-systems"]
type: tool
source: "_raw/inbox/nexu-ioopen-design 🎨 Local-first, open-source alternative to Anthropic's Claude Design.md"
agent-created: true
summary: "nexu-io/open-design — local-first OSS alternative to Claude Design: 16 CLI agents, 31 skills, 72+ design systems, HTML/PDF/PPTX/MP4 export, BYOK"
status-checked: 2026-11-13
project-status: active
---

# Open Design

> [!success] Status check 2026-11-13 — active
> **Verdict:** Stable releases ship every one to two weeks: 0.25.0 (2026-10-15), 0.26.0 (10-20), 0.26.1 (10-22), 0.27.0 (11-04) and 0.27.1 (11-10).
> **Last release:** open-design-v0.27.1, 2026-11-10 (stable). · **last commit:** 2026-11-13 · **licence:** Apache-2.0 for the repo. Bundled templates and skills keep their own licences (for example MIT for…
> **Repo:** https://github.com/nexu-io/open-design — **moved/renamed:** The repo is unchanged. The product was rebranded from 'Open Design: local-first, open-source alternative to Anthropic's Claude Design' to 'OpenDesign: The 1st Collaborative AI Design Agent Workspace'.
> **Changed since this note:** It moved from 0.8.0-preview to 0.27.1, and both scope and business model changed. 0.8.0 (2026-05-22) added plugin-marketplace infrastructure (261 official plugins). 0.9.0 (2026-06-02) added OpenDesign Cloud, a built-in hosted model service with one-click sign-in…

> Open-source, local-first alternative to **Claude Design** (Anthropic, Apr 2026, Opus 4.7). Apache-2.0, BYOK at every layer, **16 coding-agent CLIs** auto-detected from `PATH` become the design engine, driven by **31 composable Skills** + **72+ Design Systems**. 40k stars in 2 weeks. Repo: https://github.com/nexu-io/open-design

## 🚀 What it is

- Web (Next.js 16) + local daemon (Node 24, Express, SQLite) + optional Electron desktop (macOS Apple Silicon, Windows x64)
- Deploy: locally (`pnpm tools-dev`), Docker (`docker compose up -d` on `:7456`), Vercel (web layer), download from [open-design.ai](https://open-design.ai)
- Version: 0.8.0-preview (May 2026, "design's old world ends here")
- License: **Apache-2.0**

## 🧩 At a glance

| | What you get |
|---|---|
| **Coding-agent CLIs (16)** | Claude Code · Codex · Devin for Terminal · Cursor Agent · Gemini CLI · OpenCode · Qwen · Qoder · Copilot CLI · Hermes (ACP) · Kimi (ACP) · Pi (RPC) · Kiro · Kilo · Mistral Vibe · DeepSeek TUI |
| **BYOK proxy** | `/api/proxy/{anthropic,openai,azure,google}/stream` — paste baseUrl+key+model; SSRF blocked at daemon edge; loopback OK (Ollama, LM Studio) |
| **Skills (31)** | 27 `prototype` mode (web-prototype, saas-landing, dashboard, mobile-app, gamified-app, social-carousel, magazine-poster, dating-web, sprite-animation, motion-frames, critique, tweaks, pm-spec, eng-runbook, finance-report, hr-onboarding, invoice, kanban-board, team-okrs…) + 4 `deck` (guizang-ppt, simple-deck, replit-deck, weekly-update). Grouped by scenario: design/marketing/operation/engineering/product/finance/hr/sale/personal |
| **Design Systems (72+)** | Linear, Stripe, Vercel, Airbnb, Tesla, Notion, Anthropic, Apple, Cursor, Supabase, Figma, Resend, Raycast, Lovable, Cohere, Mistral, ElevenLabs, X.AI, Spotify, Webflow, Sanity, PostHog, Sentry, MongoDB, ClickHouse, Cal, Replicate, Clay, Composio, Xiaohongshu… + 57 design skills from `awesome-design-skills` |
| **Visual directions** | 5 curated schools (Editorial Monocle, Modern Minimal, Warm Soft, Tech Utility, Brutalist Experimental) — deterministic OKLch palettes + font stack |
| **Device frames** | iPhone 15 Pro, Pixel, iPad Pro, MacBook, Browser Chrome — pixel-accurate, shared assets |
| **Media generation** | gpt-image-2 (Azure/OpenAI) — posters/avatars/infographics · Seedance 2.0 (ByteDance) — 15s text-to-video, image-to-video · HyperFrames — HTML→MP4 motion graphics · 93 prompts gallery |
| **Imports** | Claude Design export ZIP → `POST /api/import/claude-design` (continue editing where Anthropic left off) |
| **Export** | HTML (inline assets), PDF (browser print, deck-aware), PPTX, ZIP, Markdown, MP4 |
| **Persistence** | SQLite `.od/app.sqlite` (projects, conversations, messages, tabs, templates), files in `.od/projects/<id>/` |
| **Lifecycle** | `pnpm tools-dev start\|stop\|run\|status\|logs\|inspect\|check` |

## ☘️ Six load-bearing ideas

1. **We don't ship the agent. Yours is enough.** The daemon scans `PATH`, finds CLIs, spawns them with `cwd` set to the project folder.
2. **Skills are files, not plugins.** Claude Code SKILL.md convention + extended `od:` frontmatter (`mode`, `platform`, `scenario`, `preview.type`, `design_system.requires`, `default_for`, `featured`, `fidelity`, `speaker_notes`, `animations`, `example_prompt`).
3. **Design Systems are portable Markdown, not theme JSON.** 9-section `DESIGN.md` (color, typography, spacing, layout, components, motion, voice, brand, anti-patterns).
4. **Interactive question form prevents 80% of redirects.** RULE 1: every brief starts with `<question-form id="discovery">` (Junior-Designer mode from [`huashu-design`](https://github.com/alchaincyf/huashu-design)).
5. **The daemon makes the agent feel local — because it is.** Real Read/Write/Bash/WebFetch, SQLite session state.
6. **The prompt stack is the product.** Composition: discovery → identity charter → active DESIGN.md → active SKILL.md → project metadata → skill side files → (optional) deck framework directive.

## 🎨 Flagship skills

- `dating-web` — consumer dating dashboard (ticker, KPIs, 30-day chart, editorial typography)
- `digital-eguide` — cover + lesson spread
- `email-marketing` — table-fallback safe HTML
- `gamified-app` — 3-frame mobile prototype with XP bars
- `mobile-onboarding` — splash + value-prop + sign-in
- `motion-frames` — looping CSS animations, HyperFrames-ready
- `social-carousel` — 3-card 1080×1080
- `sprite-animation` — pixel/8-bit explainer
- `magazine-poster`, `wireframe-sketch`, `critique` (5-dim scoresheet: Philosophy/Hierarchy/Detail/Function/Innovation)

## 🧠 OSS shoulders

- [`alchaincyf/huashu-design`](https://github.com/alchaincyf/huashu-design) — design philosophy compass, Junior-Designer workflow, 5-step brand-asset protocol, anti-AI-slop checklist
- [`op7418/guizang-ppt-skill`](https://github.com/op7418/guizang-ppt-skill) — deck mode, bundled verbatim with the original LICENSE
- [`OpenCoworkAI/open-codesign`](https://github.com/OpenCoworkAI/open-codesign) — first OSS Claude-Design alternative; OD borrows the streaming-artifact loop, sandboxed-iframe preview, agent panel
- [`multica-ai/multica`](https://github.com/multica-ai/multica) — daemon-and-runtime, PATH-scan agent detection
- [`VoltAgent/awesome-design-md`](https://github.com/VoltAgent/awesome-design-md) — 70 product systems
- [`bergside/awesome-design-skills`](https://github.com/bergside/awesome-design-skills) — 57 design skills

## ✍️ Quickstart

```bash
# Docker (fastest)
git clone https://github.com/nexu-io/open-design.git
cd open-design/deploy
docker compose up -d
# http://localhost:7456

# From source (Node 24, pnpm 10.33.x via corepack)
git clone https://github.com/nexu-io/open-design.git
cd open-design
corepack enable
pnpm install
pnpm tools-dev run web
```

First launch detects CLIs on `PATH` and picks one automatically.

## 📒 Architecture (1 minute)

```
browser (Next.js 16) → daemon (Express + SQLite) → spawn(cli, [...], cwd=.od/projects/<id>)
                                                  ↘ /api/proxy/{provider}/stream (BYOK, SSRF blocked)
```

Layers: Next.js 16 + React 18 + TS frontend · Node 24 + Express + `better-sqlite3` daemon · `child_process.spawn` with typed parsers (`claude-stream-json`, `acp-json-rpc`, `pi-rpc`, `plain`) · sandboxed iframe `srcdoc` preview · Electron desktop with sidecar IPC.

## 🧩 Related

- [[AI UX Design Tools]] — hub for UX/design AI tools
- [[UX Pilot]], [[UX RULER]], [[UI UX Pro Max]], [[Impeccable]] — peer design tools
- [[GPT Image 2 + Seedance Workflow]] — same image+video stack, OD bundles them
- [[Awesome Nano Banana Pro Prompts]] — prompt library for image gen
- [[Agent Skills]] — base SKILL.md convention
- [[Awesome Agent Skills]] — cross-platform skill ecosystem
- [[Awesome Claude Code]]
- [[Claude Code]], [[Cursor]]
- [[Everything Claude Code]] — peer cross-harness framework
- [[Hermes Agent]] — supported via ACP

## 🔗 Resources

- Repo: https://github.com/nexu-io/open-design
- Download: https://open-design.ai
- Releases: https://github.com/nexu-io/open-design/releases
- Skills protocol: docs/skills-protocol.md
- 0.8.0 announcement: https://github.com/nexu-io/open-design/discussions/1727
