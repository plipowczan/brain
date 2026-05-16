---
title: "Open Design"
date: 2026-05-16
enableToc: true
openToc: true
tags: ["tool", "ai", "design", "ux", "open-source", "apache-2.0", "byok", "claude-code", "codex", "skills", "design-systems"]
type: tool
source: "_raw/inbox/nexu-ioopen-design 🎨 Local-first, open-source alternative to Anthropic's Claude Design.md"
agent-created: true
summary: "nexu-io/open-design — local-first OSS alternative do Claude Design: 16 CLI agents, 31 skills, 72+ design systems, HTML/PDF/PPTX/MP4 export, BYOK"
---

# Open Design

> Open-source, local-first alternatywa dla **Claude Design** (Anthropic, Apr 2026, Opus 4.7). Apache-2.0, BYOK na każdej warstwie, **16 coding-agent CLI** auto-wykrywanych z `PATH` staje się silnikiem designu, sterowanym przez **31 composable Skills** + **72+ Design Systems**. 40k stars w 2 tygodnie. Repo: https://github.com/nexu-io/open-design

## 🚀 Co to jest

- Web (Next.js 16) + lokalny daemon (Node 24, Express, SQLite) + opcjonalny Electron desktop (macOS Apple Silicon, Windows x64)
- Deploy: lokalnie (`pnpm tools-dev`), Docker (`docker compose up -d` na `:7456`), Vercel (warstwa web), download z [open-design.ai](https://open-design.ai)
- Wersja: 0.8.0-preview (maj 2026, "design's old world ends here")
- License: **Apache-2.0**

## 🧩 At a glance

| | What you get |
|---|---|
| **Coding-agent CLIs (16)** | Claude Code · Codex · Devin for Terminal · Cursor Agent · Gemini CLI · OpenCode · Qwen · Qoder · Copilot CLI · Hermes (ACP) · Kimi (ACP) · Pi (RPC) · Kiro · Kilo · Mistral Vibe · DeepSeek TUI |
| **BYOK proxy** | `/api/proxy/{anthropic,openai,azure,google}/stream` — paste baseUrl+key+model; SSRF blocked at daemon edge; loopback OK (Ollama, LM Studio) |
| **Skills (31)** | 27 `prototype` mode (web-prototype, saas-landing, dashboard, mobile-app, gamified-app, social-carousel, magazine-poster, dating-web, sprite-animation, motion-frames, critique, tweaks, pm-spec, eng-runbook, finance-report, hr-onboarding, invoice, kanban-board, team-okrs…) + 4 `deck` (guizang-ppt, simple-deck, replit-deck, weekly-update). Grupowane scenario: design/marketing/operation/engineering/product/finance/hr/sale/personal |
| **Design Systems (72+)** | Linear, Stripe, Vercel, Airbnb, Tesla, Notion, Anthropic, Apple, Cursor, Supabase, Figma, Resend, Raycast, Lovable, Cohere, Mistral, ElevenLabs, X.AI, Spotify, Webflow, Sanity, PostHog, Sentry, MongoDB, ClickHouse, Cal, Replicate, Clay, Composio, Xiaohongshu… + 57 design skills z `awesome-design-skills` |
| **Visual directions** | 5 curated schools (Editorial Monocle, Modern Minimal, Warm Soft, Tech Utility, Brutalist Experimental) — deterministyczne palety OKLch + font stack |
| **Device frames** | iPhone 15 Pro, Pixel, iPad Pro, MacBook, Browser Chrome — pixel-accurate, shared assets |
| **Media generation** | gpt-image-2 (Azure/OpenAI) — postery/avatary/infografiki · Seedance 2.0 (ByteDance) — 15s text-to-video, image-to-video · HyperFrames — HTML→MP4 motion graphics · 93 prompts gallery |
| **Imports** | Claude Design export ZIP → `POST /api/import/claude-design` (kontynuujesz edycję tam gdzie Anthropic skończył) |
| **Export** | HTML (inline assets), PDF (browser print, deck-aware), PPTX, ZIP, Markdown, MP4 |
| **Persistence** | SQLite `.od/app.sqlite` (projects, conversations, messages, tabs, templates), pliki w `.od/projects/<id>/` |
| **Lifecycle** | `pnpm tools-dev start\|stop\|run\|status\|logs\|inspect\|check` |

## ☘️ Sześć load-bearing idei

1. **Nie dostarczamy agenta. Twój wystarczy.** Daemon skanuje `PATH`, znajduje CLI, spawni je z `cwd` ustawionym na folder projektu.
2. **Skills to pliki, nie pluginy.** Konwencja Claude Code SKILL.md + extended `od:` frontmatter (`mode`, `platform`, `scenario`, `preview.type`, `design_system.requires`, `default_for`, `featured`, `fidelity`, `speaker_notes`, `animations`, `example_prompt`).
3. **Design Systems to portable Markdown, nie theme JSON.** 9-section `DESIGN.md` (color, typography, spacing, layout, components, motion, voice, brand, anti-patterns).
4. **Interactive question form prevents 80% of redirects.** RULE 1: każdy brief startuje od `<question-form id="discovery">` (Junior-Designer mode z [`huashu-design`](https://github.com/alchaincyf/huashu-design)).
5. **Daemon makes the agent feel local — because it is.** Real Read/Write/Bash/WebFetch, SQLite session state.
6. **Prompt stack to produkt.** Composition: discovery → identity charter → active DESIGN.md → active SKILL.md → project metadata → skill side files → (optional) deck framework directive.

## 🎨 Skille flagowe

- `dating-web` — consumer dating dashboard (ticker, KPIs, 30-day chart, editorial typography)
- `digital-eguide` — cover + lesson spread
- `email-marketing` — table-fallback safe HTML
- `gamified-app` — 3-frame mobile prototype z XP bars
- `mobile-onboarding` — splash + value-prop + sign-in
- `motion-frames` — looping CSS animations, HyperFrames-ready
- `social-carousel` — 3-card 1080×1080
- `sprite-animation` — pixel/8-bit explainer
- `magazine-poster`, `wireframe-sketch`, `critique` (5-dim scoresheet: Philosophy/Hierarchy/Detail/Function/Innovation)

## 🧠 OSS shoulders

- [`alchaincyf/huashu-design`](https://github.com/alchaincyf/huashu-design) — design philosophy compass, Junior-Designer workflow, 5-step brand-asset protocol, anti-AI-slop checklist
- [`op7418/guizang-ppt-skill`](https://github.com/op7418/guizang-ppt-skill) — deck mode, bundled verbatim z oryginalnym LICENSE
- [`OpenCoworkAI/open-codesign`](https://github.com/OpenCoworkAI/open-codesign) — pierwsza OSS Claude-Design alternatywa; OD pożycza streaming-artifact loop, sandboxed-iframe preview, agent panel
- [`multica-ai/multica`](https://github.com/multica-ai/multica) — daemon-and-runtime, PATH-scan agent detection
- [`VoltAgent/awesome-design-md`](https://github.com/VoltAgent/awesome-design-md) — 70 product systems
- [`bergside/awesome-design-skills`](https://github.com/bergside/awesome-design-skills) — 57 design skills

## ✍️ Quickstart

```bash
# Docker (najszybszy)
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

Pierwsze uruchomienie wykrywa CLI na `PATH` i wybiera automatycznie.

## 📒 Architektura (1 minuta)

```
browser (Next.js 16) → daemon (Express + SQLite) → spawn(cli, [...], cwd=.od/projects/<id>)
                                                  ↘ /api/proxy/{provider}/stream (BYOK, SSRF blocked)
```

Layers: Next.js 16 + React 18 + TS frontend · Node 24 + Express + `better-sqlite3` daemon · `child_process.spawn` z typed parserami (`claude-stream-json`, `acp-json-rpc`, `pi-rpc`, `plain`) · sandboxed iframe `srcdoc` preview · Electron desktop z sidecar IPC.

## 🧩 Powiązane

- [[AI UX Design Tools]] — hub UX/design AI tools
- [[UX Pilot]], [[UX RULER]], [[UI UX Pro Max]] — peer design tools
- [[GPT Image 2 + Seedance Workflow]] — ten sam stos image+video, OD bundle'uje je
- [[Awesome Nano Banana Pro Prompts]] — prompt library dla image gen
- [[Agent Skills]] — bazowa konwencja SKILL.md
- [[Awesome Agent Skills]] — cross-platform skill ecosystem
- [[Awesome Claude Code]]
- [[Claude Code]], [[Cursor]]
- [[Everything Claude Code]] — peer cross-harness framework
- [[Hermes Agent]] — wspierany via ACP

## 🔗 Resources

- Repo: https://github.com/nexu-io/open-design
- Download: https://open-design.ai
- Releases: https://github.com/nexu-io/open-design/releases
- Skills protocol: docs/skills-protocol.md
- 0.8.0 announcement: https://github.com/nexu-io/open-design/discussions/1727
