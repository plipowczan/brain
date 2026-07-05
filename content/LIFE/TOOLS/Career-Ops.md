---
title: "Career-Ops"
date: 2026-07-05
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "claude-code", "job-search", "career", "cv", "open-source"]
type: tool
source: "_raw/processed/2026-07-05_santifer-career-ops.md"
agent-created: true
summary: "santifer/career-ops — an AI job-search command center built on Claude Code skills: A-F offer scoring, ATS-optimized CV/cover-letter PDFs, portal scanning, and batch sub-agent evaluation. Human-in-the-loop; never auto-submits."
---
# Career-Ops

`santifer/career-ops` ([career-ops.org](https://career-ops.org/)) — turns any AI coding CLI ([[Claude Code]], Codex, Gemini/Antigravity, opencode, Grok, Qwen) into a **job-search command center**. Instead of tracking applications in a spreadsheet, you get an agentic pipeline that evaluates offers, tailors CVs, scans portals, and keeps one source of truth. Built by someone who used it to evaluate 740+ offers, generate 100+ tailored CVs, and land a Head of Applied AI role.

Framing worth stealing: *companies use AI to filter candidates; this gives the candidate AI to filter companies.* Explicitly **not** spray-and-pray — it's a filter that recommends against applying to anything scoring below 4.0/5.

## 🔗 Links

### Description
- Repo: https://github.com/santifer/career-ops
- Site: https://career-ops.org/
- Case study: https://santifer.io/career-ops-system
- Companion: [cv-santiago](https://github.com/santifer/cv-santiago) — the portfolio site (santifer.io) with AI chatbot + LLMOps dashboard

### Download or use

```bash
# Fastest — one command (clones latest release into ./career-ops + installs)
npx @santifer/career-ops init
cd career-ops
claude   # or codex / gemini / agy / grok / qwen / opencode

# First launch walks you through setup (CV, profile, target roles) by chatting.
```

Usage is a shared command router — `/career-ops` in CLIs that register slash commands, or plain-language mode names in Codex:

```
/career-ops {paste a JD}   → full auto-pipeline (evaluate + PDF + tracker)
/career-ops scan           → scan portals for new offers
/career-ops pdf            → generate ATS-optimized CV
/career-ops cover          → cover-letter generator
/career-ops batch          → batch evaluate multiple offers
/career-ops tracker        → view application status
```

## 🗒️ Description

### 🧩 What it does

| Capability | Detail |
|-----------|--------|
| A–F evaluation | 6-block report: role summary, CV match, level strategy, comp research, personalization, interview prep (STAR+R), plus Block G posting-legitimacy check (flags scams / ghost jobs) |
| ATS PDF generation | Keyword-injected CVs, Space Grotesk + DM Sans design, HTML template → Playwright A4 |
| Cover letters | Same HTML+Playwright pipeline; interactive angle prompts, draft-in-chat approval gate |
| Portal scanner | 45+ companies pre-configured (Anthropic, OpenAI, ElevenLabs, Retool, n8n…) across Ashby, Greenhouse, Lever, Wellfound; `--verify` runs Playwright to drop expired postings |
| Batch processing | Parallel evaluation via headless CLI workers (`claude -p` / `opencode run`) |
| Interview story bank | Accumulates 5–10 master STAR+Reflection stories across evaluations |
| Dashboard TUI | Go + Bubble Tea + Lipgloss (Catppuccin Mocha) — browse/filter/sort the pipeline |
| Human-in-the-loop | AI evaluates and recommends; **it never submits** — you always decide |

Flow: paste a URL/JD → archetype detection (LLMOps / Agentic / PM / SA / FDE / Transformation) → A–F evaluation reading `cv.md` → Report `.md` + `.pdf` + Tracker `.tsv`.

### 🧩 Architecture worth noting

The interesting part for me isn't the job search — it's the **agent-skill design**. One canonical `AGENTS.md` + per-CLI wrapper files (`CLAUDE.md`, `CODEX.md`, `OPENCODE.md`) that just import it; the skill defined once in `.agents/skills/career-ops/SKILL.md` (open agent-skill standard) and symlinked per CLI. Tech stack: markdown tables + YAML config + TSV as the data layer, Playwright for PDFs and portal liveness, Go for the TUI. This is a clean multi-CLI, single-source-of-instructions pattern — the same self-documenting-AGENTS.md idea as [[DOX — Self-Documenting AGENTS.md]].

> *"The first evaluations won't be great — the system doesn't know you yet."* Feed it your CV, career story, proof points, preferences; it improves like onboarding a new recruiter.

## ✍️ Reasoning for

Two angles for me. First, directly useful as a **job/opportunity filter** — the A–F scoring + Block G legitimacy check is a reusable pattern even outside job hunting (evaluate any inbound offer against a rubric before spending time). Second, and more relevant to my work: it's a **reference implementation of a multi-CLI agent skill** — single `AGENTS.md`, batch sub-agent workers via `claude -p`, markdown/YAML/TSV as durable state, Playwright for deterministic output. That maps straight onto how I'd structure agentic products like [[Qamera AI]] and the [[Agentic Systems]] work.

The human-in-the-loop line — *the system never submits an application* — is the right default and matches the checkpoint discipline in [[Loop Engineering]] and [[Archon]].

## Alternatives considered

- **Spreadsheet + manual tailoring** — the status quo it replaces; no scoring, no ATS optimization, no scam detection.
- **LinkedIn Easy Apply / spray-and-pray tools** — opposite philosophy; career-ops deliberately filters *down*.
- **Generic [[Claude Code]] session** — you could ad-hoc prompt CV tailoring, but you lose the tracker, scoring rubric, portal scanner, and batch workers.

## 🔗 Resources

- Setup guide: `docs/SETUP.md` · running cheaply on local/custom models: `docs/RUNNING_ON_A_BUDGET.md`
- Supported CLIs / job boards: `docs/SUPPORTED_CLIS.md`, `docs/SUPPORTED_JOB_BOARDS.md`
- Author: [santifer](https://github.com/santifer) · featured in Business Insider, Product Hunt, Trendshift

## 📖 Further reading

- [[DOX — Self-Documenting AGENTS.md]] — the single-AGENTS.md, per-CLI-wrapper pattern career-ops uses
- [[Claude Code]] — the primary host CLI
- [[Agentic Systems]] — my notes on building this class of system
- [[Loop Engineering]] · [[Archon]] — human-in-the-loop and batch-worker patterns

---
Template: [[templates/tool]]
