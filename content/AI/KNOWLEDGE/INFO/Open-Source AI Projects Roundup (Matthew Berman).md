---
title: "Open-Source AI Projects Roundup (Matthew Berman)"
date: 2026-06-14
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "open-source", "claude-code", "agents", "token-optimization"]
type: knowledge-note
source: "_raw/processed/2026-06-14_yt-zjFE-dBzP_E_you-need-to-try-these-open-source-ai-projects-right-now.md"
source_url: "https://www.youtube.com/watch?v=zjFE-dBzP_E"
video_id: "zjFE-dBzP_E"
channel: "Matthew Berman"
duration: "15m53s"
published: 2026-06-12
transcription: captions
agent-created: true
summary: "Matthew Berman walks through 4 free GitHub projects: Last 30 Days (human-voted trending search skill), Open Notebook (local NotebookLM), an agent-skills engineering workflow, and Headroom (context compression that cuts the AI bill up to 90%)."
---

# Open-Source AI Projects Roundup (Matthew Berman)

## 🗒️ Description

[Matthew Berman](https://www.youtube.com/watch?v=zjFE-dBzP_E)'s tour of **four free GitHub projects** you probably haven't heard of — a trending-search skill, a local NotebookLM clone, an agentic-engineering skill, and a context-compression wrapper that can slash your AI bill. The recurring install pattern across all four: don't touch the command line — **paste the GitHub URL into your agent (Cursor / Codex / Claude Code) and say "install this."**

> "I've basically stopped installing things through the command line. I simply copy-paste the URL directly into Cursor or Codex… and I say 'install it.'"

## 🧩 The four projects

### 1. Last 30 Days — human-voted trending search

A [[Claude Code]]-style **skill** (install, then `/last30days <query>`) that works like an anti-Google. Instead of links + ads, it searches Reddit, Hacker News, Polymarket, GitHub, X, YouTube, and TikTok **in parallel**, scores results by what real people upvote/engage with, and an AI judge synthesizes one brief — "millions of people voting with their attention and their wallets."

- ~40k stars; by **Matt Van Horn** (co-founder of the company that became Lyft).
- V3 engine **resolves entities before searching** — type `openclaw` and it maps to the right X handle and subreddits.
- Can `--emit=html` a shareable brief. Good for *recent, trending* knowledge (e.g. researching a week-old term like "loop engineering").

### 2. Open Notebook — local NotebookLM clone

A free, open-source, optionally **fully local** clone of Google's NotebookLM: upload PDFs/links/docs, get grounded Q&A with citations, and generate a multi-host **podcast** from the content. Hosted (OpenAI) or local ([[OpenAI]]/Ollama/LM Studio); per-process model selection. → dedicated note: [[Open Notebook]].

### 3. Agent-skills engineering workflow

A ~56k-star skill that gives you **seven slash commands mapped to seven stages of engineering** — spec → plan → build → test → review → code/simplify → ship — structured as a guided flow. Berman compares it to [[gstack]] (Garry Tan's stack) but more narrowly focused on the *engineering workflow* rather than building a whole company. Starts with `/interview-me` to extract what you're building into a markdown spec, then drives spec-driven development. *(Distinct from this vault's [[Agent Skills]] note, which covers Anthropic's skill system.)*

### 4. Headroom — context compression, up to 90% savings

Compresses everything the agent reads (tool outputs, logs, RAG chunks, files, history) **before it reaches the LLM** — same answers, a fraction of the tokens (47–92% in the demos). Wraps any harness (`headroom wrap claude`), reports savings (`headroom perf`), and mines failed sessions into `CLAUDE.md`/`AGENTS.md` (`headroom learn`). → dedicated note: [[Headroom]]. Caveats: installs Serena by default (`--no-sa` to skip), telemetry on by default.

## ✍️ Notable quotes

> "You shouldn't be prompting coding agents anymore. You should be designing loops that prompt your agent." — Peter Steinberger (surfaced via Last 30 Days)

> "Same answers, fraction of the tokens." — on Headroom

## 📒 Takeaways

- **Install-by-URL is the new norm** — agents install their own tooling from a GitHub link; the CLI is optional.
- **Two of these target cost/quota directly** — Headroom (context compression) is the standout for anyone hitting [[Claude Code]] limits; pairs with [[Caveman]] (output) and [[Token Optimization for Claude Code]].
- **Recency is a gap LLMs have** — Last 30 Days fills it with human-vote signal rather than model knowledge.
- Sponsor: [[ElevenLabs]] (11 Labs) — for natural podcast voices in Open Notebook.

## 📖 Further reading/watching

- Source video: https://www.youtube.com/watch?v=zjFE-dBzP_E (Matthew Berman, 15:53)
- Dedicated tool notes: [[Headroom]], [[Open Notebook]]
- Related: [[gstack]], [[Agent Skills]], [[Caveman]], [[Token Optimization for Claude Code]], [[Context Engineering]]
- Companion roundup: [[10 Free GitHub Repos That Replace Paid Tools]]

---
Template: [[templates/knowledge_note_info]]
