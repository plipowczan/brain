---
title: "Claude SEO"
date: 2026-05-27
enableToc: true
openToc: true
tags: ["tool", "ai", "seo", "claude-code", "agent-skills", "open-source", "geo", "mit"]
type: tool
source: "_raw/processed/2026-05-27_AgriciDaniel-claude-seo.md"
agent-created: true
summary: "Open-source Claude Code plugin — 25 sub-skills + 18 agents for full SEO/GEO audits with parallel sub-agent dispatch and falsifiable recommendations."
status-checked: 2026-11-13
project-status: active
repo: "https://github.com/AgriciDaniel/claude-seo"
---
# Claude SEO

> [!success] Status check 2026-11-13 — active
> **Verdict:** The latest commit on main is cca7e4a2, dated 2026-11-11.
> **Last release:** v2.6.0, 2026-11-10 ('deterministic page, TLS, sitemap and JavaScript-gap checks')… · **last commit:** 2026-11-11 · **licence:** MIT. A separate private early-access build for paying AI Marketing Hub Pro (Skool) members lives at…
> **Repo:** https://github.com/AgriciDaniel/claude-seo
> **Changed since this note:** Thirteen releases from v2.2.0 (2026-06-12) to v2.6.0 since the note, all inside the 2.x line with no breaking change of scope. It now has 26 sub-skills, 19 agents (up to 17 in parallel), 30 commands and 63 scripts, up from the note's 25 sub-skills and 18 agents.

Open-source SEO analysis plugin for [[Claude Code]] by AgriciDaniel. Runs 25 sub-skills and up to 15 specialist agents in parallel across technical SEO, content quality (E-E-A-T), Schema.org markup, AI-search optimization (GEO/AEO), local SEO, e-commerce, and international SEO. Every audit produces a prioritized action plan where each recommendation carries a first-principle observation, dependency relationships, an explicit falsifiability check, and a leading indicator.

## 🧩 What it does

- **Full site audit** (`/seo audit <url>`) — parallel sub-agent fan-out, prioritized action plan in 10-15 minutes
- **27 commands** across orchestrator + sub-skills: `page`, `technical`, `content`, `schema`, `geo`, `sitemap`, `images`, `plan`, `programmatic`, `competitor-pages`, `local`, `maps`, `hreflang`, `google`, `backlinks`, `cluster`, `sxo`, `drift`, `ecommerce`, `flow`, plus optional `firecrawl`, `dataforseo`, `image-gen` extensions
- **AI-search first** — aligned with Google's AI Optimization Guide (May 2026); scores passage citability (134-167 word self-contained answer blocks), question-based heading hierarchy, attribution density, entity presence across Wikipedia/Reddit/YouTube/LinkedIn
- **Headless rendering everywhere** (v2 Phase A) — shared Playwright Chromium with trafilatura + htmldate; SPA-aware fetching auto-detected on Next.js/React/Vue/Nuxt/Astro
- **4-tier Google API integration** — PageSpeed/CrUX (key only) → GSC/Indexing (OAuth) → GA4 → Keyword Planner
- **SQLite drift monitoring** — baseline/compare/history per URL
- **PDF reports** via WeasyPrint + matplotlib (A4, ~32 pages)

## 🔗 Links

- Public OSS: https://github.com/AgriciDaniel/claude-seo (MIT)
- Community private mirror (early access): `AI-Marketing-Hub/claude-seo` — requires [AI Marketing Hub Pro](https://www.skool.com/ai-marketing-hub-pro) membership
- Codex port: https://github.com/AgriciDaniel/codex-seo
- Demo: https://www.youtube.com/watch?v=COMnNlUakQk

## 🚀 Install

Plugin install (Claude Code 1.0.33+):

```
/plugin marketplace add AgriciDaniel/claude-seo
/plugin install claude-seo@agricidaniel-claude-seo
```

Or manual clone + `install.sh` / `install.ps1`. Avoids `irm | iex` deliberately to keep the install script reviewable.

## 🎨 Why it matters for me

- Direct fit for [[Spec-driven SEO and GEO]] — the "code-stack only top 20% controls" thesis becomes concretely actionable when 18 agents enforce it
- E-commerce SEO module is relevant for [[Qamera AI]] product-page audits
- Local SEO + maps intelligence layer would slot into [[PLSoft]] client work
- Parallel sub-agent pattern is the same architecture used in [[Awesome Claude Code]] / [[Karpathy Skills]] — concrete reference implementation of the [[Agent Skills]] standard

## ☘️ Methodology

10 principles across PERCEIVE (observe internal/external + listen) → ANALYZE (think + connect lateral/system) → VALIDATE (feel + accept) → ACT (create + grow). Every recommendation carries four fields: first-principle observation, dependency, falsifiability check, leading indicator. Anti-pattern catalog: llms.txt is **not** a citation lever (primary-source evidence in repo), content chunking not required, AI-specific keyword rewriting unnecessary (synonym understanding is sufficient).

## 📒 Notable design choices

- **MIT, your files, no data leaves machine** — vs commercial SEO tools that upload to vendor
- **Falsifiability per finding** — Google's own QRG (Sept 2025) heuristics encoded as gates
- **Active schema coverage** — Organization, LocalBusiness, Article, Product, Review, BreadcrumbList, etc.; explicitly excludes deprecated types (HowTo retired Sept 2023, FAQ restricted to gov/health, SpecialAnnouncement retired July 2025)
- **INP-not-FID** — FID removed from Chrome tools Sept 2024; only LCP/INP/CLS measured

## 📖 Further reading

- [[Spec-driven SEO and GEO]]
- [[Agent Skills]]
- [[Awesome Claude Code]]
- [[Karpathy Skills]]
- [[Claude Code]]
- [[Claude Code Best Practice]]
