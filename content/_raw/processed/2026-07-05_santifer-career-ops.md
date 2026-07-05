---
title: "santifer/career-ops: AI-powered job search system built on Claude Code. 14 skill modes, Go dashboard, PDF generation, batch processing."
source: "https://github.com/santifer/career-ops"
author:
published:
created: 2026-06-30
description: "AI-powered job search system built on Claude Code. 14 skill modes, Go dashboard, PDF generation, batch processing. - santifer/career-ops"
tags:
  - "clippings"
---
## Career-Ops

[English](https://github.com/santifer/career-ops/blob/main/README.md) | [Deutsch](https://github.com/santifer/career-ops/blob/main/README.de.md) | [Español](https://github.com/santifer/career-ops/blob/main/README.es.md) | [Français](https://github.com/santifer/career-ops/blob/main/README.fr.md) | [Português (Brasil)](https://github.com/santifer/career-ops/blob/main/README.pt-BR.md) | [한국어](https://github.com/santifer/career-ops/blob/main/README.ko-KR.md) | [日本語](https://github.com/santifer/career-ops/blob/main/README.ja.md) | [简体中文](https://github.com/santifer/career-ops/blob/main/README.cn.md) | [繁體中文](https://github.com/santifer/career-ops/blob/main/README.zh-TW.md) | [Українська](https://github.com/santifer/career-ops/blob/main/README.ua.md) | [Русский](https://github.com/santifer/career-ops/blob/main/README.ru.md) | [Polski](https://github.com/santifer/career-ops/blob/main/README.pl.md) | [Dansk](https://github.com/santifer/career-ops/blob/main/README.da.md) | [العربية](https://github.com/santifer/career-ops/blob/main/README.ar.md)

*I spent months applying to jobs the hard way. So I engineered the system I wish I had.*  
Companies use AI to filter candidates. **I just gave candidates AI to *choose* companies.**  
*Now it's open source.*

[![[0338afb7c2ac910d795d767faff93020_MD5.svg]]](https://trendshift.io/repositories/25195)

[![[bae58bb56811681b27b4d9fc9a2557f4_MD5.svg]]](https://www.producthunt.com/products/santifer-io?utm_source=badge-featured&utm_medium=badge)

<sub>FEATURED IN</sub>[

](https://www.businessinsider.com/how-i-built-tool-filter-job-listings-landed-head-ai-2026-4)

---

[![[8dba72327798d69b7d520388f6ef416e_MD5.gif]]](https://github.com/santifer/career-ops/blob/main/docs/demo.gif)

**740+ job listings evaluated · 100+ personalized CVs · 1 dream role landed**[![[3b2ca9d8ccbd0532dea3ef404e921aaf_MD5.svg]]](https://warpchart.dev/hq)<sub>Also runs on any agent-skill-standard CLI. See <a href="https://github.com/santifer/career-ops/blob/main/docs/SUPPORTED_CLIS.md">Supported CLIs</a>.</sub>  

## What Is This

Career-Ops ([career-ops.org](https://career-ops.org/), also known as **careerops**) turns any AI coding CLI into a full job search command center. Instead of manually tracking applications in a spreadsheet, you get an AI-powered pipeline that:

- **Evaluates offers** with a structured A-F scoring system (10 weighted dimensions)
- **Generates tailored PDFs** -- ATS-optimized CVs customized per job description
- **Scans portals** automatically (Greenhouse, Ashby, Lever, company pages)
- **Processes in batch** -- evaluate 10+ offers in parallel with sub-agents
- **Tracks everything** in a single source of truth with integrity checks

> **Important: This is NOT a spray-and-pray tool.** Career-ops is a filter -- it helps you find the few offers worth your time out of hundreds. The system strongly recommends against applying to anything scoring below 4.0/5. Your time is valuable, and so is the recruiter's. Always review before submitting.

Career-ops is agentic: whichever AI coding CLI you choose navigates career pages with Playwright, evaluates fit by reasoning about your CV vs the job description (not keyword matching), and adapts your resume per listing.

> **Heads up: the first evaluations won't be great.** The system doesn't know you yet. Feed it context -- your CV, your career story, your proof points, your preferences, what you're good at, what you want to avoid. The more you nurture it, the better it gets. Think of it as onboarding a new recruiter: the first week they need to learn about you, then they become invaluable.

Built by someone who used it to evaluate 740+ job offers, generate 100+ tailored CVs, and land a Head of Applied AI role. [Read the full case study](https://santifer.io/career-ops-system).

## Features

| Feature | Description |
| --- | --- |
| **Auto-Pipeline** | Paste a URL, get a full evaluation + PDF + tracker entry |
| **6-Block Evaluation** | Role summary, CV match, level strategy, comp research, personalization, interview prep (STAR+R) -- plus a Block G posting-legitimacy check that flags scams and ghost jobs |
| **Interview Story Bank** | Accumulates STAR+Reflection stories across evaluations -- 5-10 master stories that answer any behavioral question |
| **Negotiation Scripts** | Salary negotiation frameworks, geographic discount pushback, competing offer leverage |
| **ATS PDF Generation** | Keyword-injected CVs with Space Grotesk + DM Sans design |
| **Cover Letter Generator** | Research-backed cover letters with keyword mirroring, four interactive angle prompts (why/problems/approach/tone), draft-in-chat approval gate, and A4 PDF via the same HTML + Playwright pipeline as CVs. Auto-drafts on every evaluation; complete and generate on demand via `/career-ops cover` |
| **Portal Scanner** | 45+ companies pre-configured (Anthropic, OpenAI, ElevenLabs, Retool, n8n...) + custom queries across Ashby, Greenhouse, Lever, Wellfound |
| **Batch Processing** | Parallel evaluation with headless CLI workers (`claude -p` / `opencode run`) |
| **Dashboard TUI** | Terminal UI to browse, filter, and sort your pipeline |
| **Human-in-the-Loop** | AI evaluates and recommends, you decide and act. The system never submits an application -- you always have the final call |
| **Pipeline Integrity** | Automated merge, dedup, status normalization, health checks |

## Quick Start

**Fastest way — one command:**

```
npx @santifer/career-ops init
```

> 💡 `npx` ships with [Node.js](https://nodejs.org/) — it runs the installer once, without installing anything globally. No Node yet? Install it first. (Already using a Claude Code / Gemini / Codex CLI? Then you already have it.)

This clones the latest release into `./career-ops` and installs dependencies. Then:

```
cd career-ops
claude   # or gemini / codex / qwen / opencode / agy / grok — open your AI CLI here
```

**On first launch, career-ops walks you through setup — your CV, profile and target roles — just by chatting. Nothing to edit by hand.**

**Prefer to set it up manually? (git clone)**
```
git clone https://github.com/santifer/career-ops.git
cd career-ops && npm install
npx playwright install chromium   # only needed for PDF generation

# 2. Check setup
npm run doctor                     # Validates all prerequisites

# 3. Configure
cp config/profile.example.yml config/profile.yml  # Edit with your details
cp templates/portals.example.yml portals.yml       # Customize companies

# 4. Add your CV
# Create cv.md in the project root with your CV in markdown

# 5. Open your AI CLI in this directory
claude   # or codex / opencode / gemini / qwen / agy / grok

# Then ask your CLI to adapt the system to you:
# "Change the archetypes to backend engineering roles"
# "Translate the modes to English"
# "Add these 5 companies to portals.yml"
# "Update my profile with this CV I'm pasting"

# 6. Start using
# Paste a job URL or JD text to trigger auto-pipeline
# If your CLI supports slash commands, use /career-ops (or its CLI-specific alias)
# In Codex, ask for the same mode in plain language, e.g.:
# "Run the career-ops scan mode"
# "Run the career-ops pipeline mode for data/pipeline.md"
# "Run the career-ops pdf mode for the latest evaluated role"
# "Run the career-ops tracker mode and summarize the current statuses"
```

> **The system is designed to be customized by your AI coding CLI itself.** Modes, archetypes, scoring weights, negotiation scripts -- just ask it to change them. It reads the same files it uses, so it knows exactly what to edit.

See [docs/SETUP.md](https://github.com/santifer/career-ops/blob/main/docs/SETUP.md) for the full setup guide, [docs/RUNNING\_ON\_A\_BUDGET.md](https://github.com/santifer/career-ops/blob/main/docs/RUNNING_ON_A_BUDGET.md) for instructions on running career-ops cheaply using custom or local models, and [docs/FAQ.md](https://github.com/santifer/career-ops/blob/main/docs/FAQ.md) for answers to common setup questions.

## Antigravity CLI Integration

Career-ops supports Antigravity CLI natively, the same way it supports Claude Code and OpenCode. All slash commands are available through the shared skill entrypoint, using the same `modes/*.md` evaluation logic.

Google has transitioned consumer Gemini CLI access to Antigravity CLI. `GEMINI.md` is now a no-op compatibility guard so Antigravity does not duplicate the full project instructions when it reads both `AGENTS.md` and `GEMINI.md`.

### Native Antigravity CLI

```
# 1. Run in the career-ops directory
cd career-ops
agy

# 2. Use the unified /career-ops command with subcommands:
/career-ops "Senior AI Engineer at Anthropic..."
/career-ops pipeline
/career-ops scan
/career-ops pdf
/career-ops tracker
```

The skill is defined using the open standard in `.agents/skills/career-ops/SKILL.md` and symlinked/referenced for each supported CLI (e.g. `.claude/`, `.qwen/`, `.antigravitycli/`, `.grok/`).

## Codex Integration

Career-ops supports Codex through the same shared router, but the invocation model is different from CLIs that auto-register slash commands. For the full guide, see [docs/CODEX.md](https://github.com/santifer/career-ops/blob/main/docs/CODEX.md).

### Interactive Codex

```
cd career-ops
codex
```

Slash commands are not guaranteed in Codex. If `/career-ops` is unavailable, ask Codex to run the mode directly in plain language:

```
Evaluate this JD with career-ops auto-pipeline: https://company.com/jobs/123
Run the career-ops scan mode and summarize new matches.
Run the career-ops pipeline mode for data/pipeline.md.
Run the career-ops pdf mode for the latest evaluated role.
Run the career-ops tracker mode and summarize the current statuses.
```

### One-shot Codex (codex exec)

```
codex exec "Evaluate this JD with career-ops auto-pipeline: https://company.com/jobs/123"
codex exec "Run career-ops scan mode in this repo and summarize new matches."
codex exec "Run career-ops pipeline mode for data/pipeline.md."
codex exec "Run career-ops pdf mode for the latest evaluated role."
codex exec "Run career-ops tracker mode and summarize the current statuses."
```

## Grok Build CLI Integration

Career-ops supports Grok Build CLI natively, the same way it supports Claude Code and OpenCode. `AGENTS.md` is auto-loaded as project rules, and all slash commands are available through the shared skill entrypoint.

### Native Grok Build CLI

```
# 1. Run in the career-ops directory
cd career-ops
grok

# 2. Use the unified /career-ops command with subcommands:
/career-ops "Senior AI Engineer at Anthropic..."
/career-ops pipeline
/career-ops scan
/career-ops pdf
/career-ops tracker
```

For headless batch workers, use `grok -p "prompt"` (add `--yolo` to auto-approve tool executions).

### Standalone Gemini API Script (No CLI install needed)

```
# 1. Get a free API key at https://aistudio.google.com/apikey
cp .env.example .env
# Edit .env, set GEMINI_API_KEY=your_key_here

# 2. Install dependencies
npm install

# 3. Evaluate a job description
node gemini-eval.mjs "We are looking for a Senior AI Engineer..."
node gemini-eval.mjs --file ./jds/my-job.txt
npm run gemini:eval -- "JD text here"
```

> **Free tier:** Both options work without billing. Native CLI uses Google OAuth; the API script uses `gemini-2.5-flash` (15 RPM, 1M tokens/day free).

## Usage

Career-ops uses a shared command router. In CLIs that register slash commands, it looks like this:

```
/career-ops                → Show all available commands
/career-ops {paste a JD}   → Full auto-pipeline (evaluate + PDF + tracker)
/career-ops scan           → Scan portals for new offers
/career-ops pdf            → Generate ATS-optimized CV
/career-ops cover          → Cover letter generator (paste JD or /career-ops cover {slug})
/career-ops batch          → Batch evaluate multiple offers
/career-ops tracker        → View application status
/career-ops apply          → Fill application forms with AI
/career-ops pipeline       → Process pending URLs
/career-ops contacto       → LinkedIn outreach message
/career-ops deep           → Deep company research
/career-ops training       → Evaluate a course/cert
/career-ops project        → Evaluate a portfolio project
```

Or just paste a job URL or description directly -- career-ops auto-detects it and runs the full pipeline.

In Codex, slash commands are not guaranteed. Use the same mode names in a prompt instead, or call them from `codex exec`.

## How It Works

```
You paste a job URL or description
        │
        ▼
┌──────────────────┐
│  Archetype       │  Classifies: LLMOps / Agentic / PM / SA / FDE / Transformation
│  Detection       │
└────────┬─────────┘
         │
┌────────▼─────────┐
│  A-F Evaluation  │  Match, gaps, comp research, STAR stories
│  (reads cv.md)   │
└────────┬─────────┘
         │
    ┌────┼────┐
    ▼    ▼    ▼
 Report  PDF  Tracker
  .md   .pdf   .tsv
```

## Pre-configured Portals

The scanner comes with **45+ companies** ready to scan and **19 search queries** across major job boards. Copy `templates/portals.example.yml` to `portals.yml` and add your own:

**AI Labs:** Anthropic, OpenAI, Mistral, Cohere, LangChain, Pinecone **Voice AI:** ElevenLabs, PolyAI, Parloa, Hume AI, Deepgram, Vapi, Bland AI **AI Platforms:** Retool, Airtable, Vercel, Temporal, Glean, Arize AI **Contact Center:** Ada, LivePerson, Sierra, Decagon, Talkdesk, Genesys **Enterprise:** Salesforce, Twilio, Gong, Dialpad **LLMOps:** Langfuse, Weights & Biases, Lindy, Cognigy, Speechmatics **Automation:** n8n, Zapier, Make.com **European:** Factorial, Attio, Tinybird, Clarity AI, Travelperk

**Job boards searched:** 21 provider modules cover ATS APIs, board-wide feeds, XML/RSS feeds, markdown feeds, and local parsers. See [Supported job boards](https://github.com/santifer/career-ops/blob/main/docs/SUPPORTED_JOB_BOARDS.md) for the full table.

By default `node scan.mjs` (a.k.a. `npm run scan`) trusts what each ATS feed returns. Some companies leave stale postings in their public API even after the role is closed, so those expired entries can leak into `pipeline.md`. Pass `--verify` to launch Playwright after the API pass and drop expired postings before they hit the pipeline:

```
node scan.mjs --verify          # zero-token discovery + Playwright liveness check
```

The verification is sequential and only runs against new offers (after dedup), so the cost stays bounded.

## Dashboard TUI

The built-in terminal dashboard lets you browse your pipeline visually:

```
npm run serve:dashboard   # launch the TUI
npm run build:dashboard   # optional: build the standalone binary
```

Features: 6 filter tabs, 4 sort modes, grouped/flat view, lazy-loaded previews, inline status changes.

## Project Structure

```
career-ops/
├── AGENTS.md                    # Canonical agent instructions (all CLIs)
├── CLAUDE.md                    # Claude Code wrapper (imports AGENTS.md)
├── CODEX.md                     # Codex wrapper (imports AGENTS.md)
├── OPENCODE.md                  # OpenCode wrapper (imports AGENTS.md)
├── GEMINI.md                    # Legacy no-op guard to avoid Antigravity duplicate context
├── cv.md                        # Your CV (create this)
├── article-digest.md            # Your proof points (optional)
├── config/
│   └── profile.example.yml      # Template for your profile
├── modes/                       # 15 skill modes
│   ├── _shared.md               # Shared context (customize this)
│   ├── oferta.md                # Single evaluation
│   ├── pdf.md                   # PDF generation
│   ├── cover.md                 # Cover letter generation
│   ├── scan.md                  # Portal scanner
│   ├── batch.md                 # Batch processing
│   └── ...
├── templates/
│   ├── cv-template.html         # ATS-optimized CV template
│   ├── portals.example.yml      # Scanner config template
│   └── states.yml               # Canonical statuses
├── batch/
│   ├── batch-prompt.md          # Self-contained worker prompt
│   └── batch-runner.sh          # Orchestrator script
├── dashboard/                   # Go TUI pipeline viewer
├── data/                        # Your tracking data (gitignored)
├── reports/                     # Evaluation reports (gitignored)
├── output/                      # Generated PDFs (gitignored)
├── fonts/                       # Space Grotesk + DM Sans
├── docs/                        # Setup, customization, budget guide, architecture
└── examples/                    # Sample CV, report, proof points
```

## Tech Stack

- **Agent**: AI coding CLI with shared skills and modes (`AGENTS.md` + CLI wrapper)
- **PDF**: Playwright/Puppeteer + HTML template
- **Cover letters**: HTML template + Playwright (A4 PDF, same pipeline as CVs)
- **Scanner**: Playwright + Greenhouse API + WebSearch
- **Dashboard**: Go + Bubble Tea + Lipgloss (Catppuccin Mocha theme)
- **Data**: Markdown tables + YAML config + TSV batch files

## Also Open Source

- **[cv-santiago](https://github.com/santifer/cv-santiago)** -- The portfolio website (santifer.io) with AI chatbot, LLMOps dashboard, and case studies. If you need a portfolio to showcase alongside your job search, fork it and make it yours.