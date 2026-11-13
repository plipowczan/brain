---
title: "Open Design"
date: 2026-05-16
enableToc: true
openToc: true
tags: ["tool", "ai", "design", "ux", "open-source", "apache-2.0", "byok", "claude-code", "codex", "skills", "design-systems"]
type: tool
source: "_raw/inbox/nexu-ioopen-design 🎨 Local-first, open-source alternative to Anthropic's Claude Design.md"
agent-created: true
summary: "nexu-io/open-design — began as a local-first OSS Claude Design alternative, rebranded 'OpenDesign: the 1st collaborative AI design agent workspace'; Apache-2.0, 26 agent CLIs, 100+ skills, 151 design systems, team workspaces, HTML/PDF/PPTX/MP4 export, BYOK or paid OpenDesign Cloud"
status-checked: 2026-11-13
project-status: active
agent-reviewed: 2026-11-13
---

# Open Design

> [!success] Status check 2026-11-13 — active
> **Verdict:** Stable releases ship every one to two weeks: 0.25.0 (2026-10-15), 0.26.0 (10-20), 0.26.1 (10-22), 0.27.0 (11-04) and 0.27.1 (11-10).
> **Last release:** open-design-v0.27.1, 2026-11-10 (stable). · **last commit:** 2026-11-13 · **licence:** Apache-2.0 for the repo. Bundled templates and skills keep their own licences (for example MIT for…
> **Repo:** https://github.com/nexu-io/open-design — **moved/renamed:** The repo is unchanged. The product was rebranded from 'Open Design: local-first, open-source alternative to Anthropic's Claude Design' to 'OpenDesign: The 1st Collaborative AI Design Agent Workspace'.
> **Changed since this note:** It moved from 0.8.0-preview to 0.27.1, and both scope and business model changed. 0.8.0 (2026-05-22) added plugin-marketplace infrastructure (261 official plugins). 0.9.0 (2026-06-02) added OpenDesign Cloud, a built-in hosted model service with one-click sign-in…

> When I wrote this (May 2026, 0.8.0-preview) it was an open-source, local-first alternative to **Claude Design** (Anthropic, Apr 2026, Opus 4.7). Apache-2.0, BYOK at every layer, **16 coding-agent CLIs** auto-detected from `PATH` became the design engine, driven by **31 composable Skills** + **72+ Design Systems**. 40k stars in 2 weeks. Repo: https://github.com/nexu-io/open-design

**Rebrand and scope change (as of 2026-11-13, v0.27.1).** Same repo, but the product is now **OpenDesign: "The 1st Collaborative AI Design Agent Workspace"**. The Claude-Design-alternative framing is gone from the headline, and the README now leads with the workflow: brief → your coding agent *or OpenDesign Cloud* builds a prototype on your design system → share it with your team for feedback → the agent refines it in the same project. I keep the note's title and filename: "Open Design" and "OpenDesign" are the same project. What changed underneath:

- **Business model.** 0.9.0 (2026-06) added **OpenDesign Cloud**, a hosted model service built into the app with one-click sign-in, now sold as paid **Go plans**: Go \$10/mo, Go Plus \$20, Go Pro \$100, Go Max \$200 (20% off the first month, cheaper billed yearly), with included model credits. Enterprise (private deployment, SSO) is quote-only. BYOK works on every plan including Free and uses no OpenDesign credits. The repo stays Apache-2.0; the Cloud is a separate proprietary service.
- **Team collaboration.** 0.27.0 (2026-11-04) added team workspaces: email invitations, unlimited members with shared credits, and per-project visibility. Shared work collects comments and feedback in the same project.
- **Scope.** 0.8.0 plugin marketplace (261 official plugins), 0.10.0 "all-in-one design workspace", 0.11.0 community marketplace ("The Bazaar"), 0.12.0 brand-backed `DESIGN.md` systems, 0.13.0 session resume and screenshot-backed PPTX/PDF export, 0.27.0 reference-video-to-motion recreation and 13 more Motion templates.
- **Scale.** 27 runtime definitions across 26 agent CLIs, 100+ functional skills plus a separate design-template catalog, 151 design-system packages. ~107k stars.

## 🚀 What it is

- Web (Next.js 16) + local daemon (Node 24, Express, SQLite) + Electron desktop. Prebuilt apps for macOS (Apple Silicon **and Intel**) and Windows x64; still **no prebuilt Linux build**, so on Linux you run it from source
- Deploy: locally (`pnpm tools-dev run web`), Docker (`docker compose up -d` on `:7456`, now behind Basic Auth with an `OD_API_TOKEN`), one-click Sealos template, download from [open-design.ai](https://open-design.ai). The README no longer mentions a Vercel deploy for the web layer, and I couldn't confirm it's still supported as of 2026-11-13.
- Version: 0.27.1 (2026-11-10), with stable releases every one to two weeks. The note was first written at 0.8.0-preview (May 2026, "design's old world ends here").
- License: **Apache-2.0** for the repo. Bundled templates and skills keep their own licences (e.g. `guizang-ppt` and `html-ppt` are MIT), so check before reusing one.
- Telemetry: product analytics and session replay are consent-gated, but scrubbed "safety and reliability" telemetry is always on. Cloud-model and OpenDesign Cloud requests go to those services, not to your BYOK provider.

## 🧩 At a glance

| | What you get |
|---|---|
| **Coding-agent CLIs (16 → 26)** | 27 runtime definitions across 26 CLIs as of 0.27.1: [[DeepSeek Harness]] (now a first-class native runtime via `dsh`) · Claude Code · Codex · OpenCode · Hermes · Antigravity · Vela · Grok Build · Kimi · Cursor Agent · Qwen · Qoder · GitHub Copilot · Pi · Kiro · Kilo · Mistral Vibe · DeepSeek · Reasonix · Aider · Amp · CodeBuddy · Mimo · AtomCode · Devin · Trae |
| **MCP server (new)** | `od mcp install <agent>` exposes your OpenDesign projects (tokens CSS, JSX components, entry HTML) as a stdio MCP server to agents in other repos. The README lists 18 targets, incl. Claude Code, Claude Desktop, Codex, Cursor, Copilot, OpenCode, OpenClaw, Hermes. On macOS, `/usr/bin/od` (octal dump) can shadow the CLI. |
| **BYOK proxy** | `/api/proxy/{anthropic,openai,azure,google,ollama,senseaudio}/stream` — paste baseUrl+key+model; presets for OpenAI, Atlas Cloud, Anthropic, Azure, Gemini, Ollama, LM Studio, vLLM or any OpenAI-compatible endpoint. SSRF guard blocks internal/RFC1918/link-local/CGNAT addresses at the daemon edge by default; `OD_ALLOWED_INTERNAL_HOSTS` opts specific hosts back in (e.g. a VPN-only LiteLLM) |
| **Skills (31 → 100+)** | 100+ functional skills in `skills/`. The renderable starters I listed in May (web-prototype, saas-landing, dashboard, mobile-app, gamified-app, social-carousel, magazine-poster, dating-web, sprite-animation, motion-frames, critique, tweaks, pm-spec, eng-runbook, finance-report, hr-onboarding, invoice, kanban-board, team-okrs… and the decks guizang-ppt, simple-deck, replit-deck, weekly-update) now live in a separate **design-template** catalog (`design-templates/`, 100+ entries incl. dozens of `html-ppt-*` decks) |
| **Plugins (new)** | Since 0.8.0: runnable workflows with an `open-design.json` manifest (scenarios, atoms, image/video templates, design systems), installable from the in-app marketplace or the `od` CLI |
| **Design Systems (72+ → 151)** | 151 design-system packages: Linear, Stripe, Vercel, Airbnb, Tesla, Notion, Anthropic, Apple, Cursor, Supabase, Figma, Resend, Raycast, Lovable, Cohere, Mistral, ElevenLabs, X.AI, Spotify, Webflow, Sanity, PostHog, Sentry, MongoDB, ClickHouse, Cal, Replicate, Clay, Composio, Xiaohongshu… + 57 design skills from `awesome-design-skills`. Since 0.12.0 you can turn your own brand into a `DESIGN.md` system |
| **Visual directions** | 5 curated schools (Editorial Monocle, Modern Minimal, Warm Soft, Tech Utility, Brutalist Experimental) — deterministic OKLch palettes + font stack |
| **Device frames** | iPhone 15 Pro, Pixel, iPad Pro, MacBook, Browser Chrome — pixel-accurate, shared assets |
| **Media generation** | gpt-image-2, ImageRouter or a custom API — posters/avatars/infographics · Seedance 2.0 (ByteDance) — text-to-video, image-to-video · [[HyperFrames]] — HTML→MP4 motion graphics (11 templates + 39 Seedance prompts bundled) · reference-video → editable motion recreation (0.27.0) · 93 prompts gallery |
| **Imports** | Claude Design export ZIP → `POST /api/import/claude-design` (continue editing where Anthropic left off) |
| **Export** | HTML (inline assets), PDF (browser print, deck-aware), PPTX (screenshot-backed since 0.13.0), ZIP, Markdown, MP4 |
| **Persistence** | SQLite (projects, conversations, messages, tabs, templates). All daemon data (SQLite, projects, artifacts, MCP tokens, connector credentials) now sits under one data root resolved from `OD_DATA_DIR`. The repo deliberately doesn't document concrete paths any more, so I couldn't confirm the `.od/app.sqlite` / `.od/projects/<id>/` layout from May still holds |
| **Lifecycle** | `pnpm tools-dev start\|run\|restart\|status\|logs\|check\|stop` |

## ☘️ Six load-bearing ideas

These were the May 2026 ideas. They mostly still hold, with the changes noted:

1. **We don't ship the agent. Yours is enough.** The daemon scans `PATH`, finds CLIs, spawns them with `cwd` set to the managed project folder. Still true, but there's now a second path: if you don't have a CLI or key, OpenDesign Cloud supplies the model.
2. **Skills are files, not plugins.** Claude Code SKILL.md convention + extended `od:` frontmatter (`mode`, `platform`, `scenario`, `preview.type`, `design_system.requires`, `default_for`, `featured`, `fidelity`, `speaker_notes`, `animations`, `example_prompt`). Since 0.8.0 there *are* plugins too. The README now says it's "composable on four planes": plugins (runnable workflows), functional skills (agent behaviour), design templates (rendering blueprints) and design systems (brand), all portable directories.
3. **Design Systems are portable Markdown, not theme JSON.** 9-section `DESIGN.md` (color, typography, spacing, layout, components, motion, voice, brand, anti-patterns). That 9-section schema is now the historical baseline; the README says current packages may extend it.
4. **Interactive question form prevents 80% of redirects.** RULE 1: every brief starts with `<question-form id="discovery">` (Junior-Designer mode from [`huashu-design`](https://github.com/alchaincyf/huashu-design)).
5. **The daemon makes the agent feel local — because it is.** Real Read/Write/Bash/WebFetch, SQLite session state. That also means real file and shell access in project folders, so a Docker or public deployment needs the deploy guide (allowed origins, Basic Auth).
6. **The prompt stack is the product.** Composition: discovery → identity charter → active DESIGN.md → active SKILL.md → project metadata → skill side files → (optional) deck framework directive. The README now frames the whole run as `brief → plugin → direction → design system → artifact → handoff → memory`.

## 🎨 Flagship skills

These now ship as design templates under `design-templates/`; all of the ones below were still there on 2026-11-13.

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
- [`op7418/guizang-ppt-skill`](https://github.com/op7418/guizang-ppt-skill) — deck mode (still the default), bundled verbatim with the original LICENSE (MIT)
- [`lewislulu/html-ppt-skill`](https://github.com/lewislulu/html-ppt-skill) — the HTML PPT Studio deck family (MIT), added after May
- [`OpenCoworkAI/open-codesign`](https://github.com/OpenCoworkAI/open-codesign) — first OSS Claude-Design alternative; OD borrows the streaming-artifact loop, sandboxed-iframe preview, agent panel
- [`multica-ai/multica`](https://github.com/multica-ai/multica) — daemon-and-runtime, PATH-scan agent detection
- [`VoltAgent/awesome-design-md`](https://github.com/VoltAgent/awesome-design-md) — 70 product systems
- [`bergside/awesome-design-skills`](https://github.com/bergside/awesome-design-skills) — 57 design skills

## ✍️ Quickstart

```bash
# Fastest now: desktop app from open-design.ai (macOS, Windows), no Node/pnpm/clone

# Docker
git clone https://github.com/nexu-io/open-design.git
cd open-design/deploy
cp .env.example .env
echo "OD_API_TOKEN=$(openssl rand -hex 32)" >> .env
docker compose up -d
# http://127.0.0.1:7456 (user: open-design, password: the OD_API_TOKEN)

# From source (Node ~24, pnpm 10.33.x via corepack)
git clone https://github.com/nexu-io/open-design.git
cd open-design
corepack enable && pnpm install
pnpm tools-dev run web   # open the URL it prints; dev ports are dynamic

# Expose OpenDesign to a coding agent in another repo
od mcp install claude    # or codex, cursor, copilot, opencode, hermes…
```

First launch detects CLIs on `PATH` and picks one automatically.

## 📒 Architecture (1 minute)

```
browser (Next.js 16) / Electron → daemon (Express + SQLite) → spawn(cli, [...], cwd=<managed project dir>)
                                   ↘ /api/proxy/{provider}/stream (BYOK, SSRF blocked)
                                   ↘ OpenDesign Cloud (hosted models, optional)
                                   ↘ MCP stdio server (other agents read your projects)
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
- [[Hermes Agent]] — supported as a runtime (via ACP in May) and, since then, as an `od mcp install hermes` target
- [[DeepSeek Harness]] — now a first-class native runtime (via the `dsh` CLI)
- [[HyperFrames]] — the HTML→MP4 engine OD bundles

## 🔗 Resources

- Repo: https://github.com/nexu-io/open-design
- Download: https://open-design.ai
- Cloud and pricing: https://open-design.ai/cloud/ · https://open-design.ai/pricing/
- Releases: https://github.com/nexu-io/open-design/releases · 0.27.0 team workspaces: https://github.com/nexu-io/open-design/releases/tag/open-design-v0.27.0
- Skills protocol: docs/skills-protocol.md
- 0.8.0 announcement: https://github.com/nexu-io/open-design/discussions/1727
