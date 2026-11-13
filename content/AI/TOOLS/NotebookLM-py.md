---
title: "NotebookLM-py"
date: 2026-07-11
enableToc: true
openToc: true
tags: ["tool", "ai", "notebooklm", "agent-skills", "mcp", "python", "cli", "research", "rag", "knowledge-management", "open-source"]
type: tool
source: "_raw/processed/2026-07-11_teng-linnotebooklm-py.md"
agent-created: true
summary: "teng-lin/notebooklm-py — unofficial Python API, CLI, MCP server and agent skill for Google NotebookLM; drives it as a zero-token synthesis + memory layer, exports artifacts the web UI can't"
status-checked: 2026-11-13
project-status: active
---

# NotebookLM-py

> [!success] Status check 2026-11-13 — active
> **Verdict:** Seven stable releases since 2026-08-03 (v0.8.0 through v0.8.6, about every 2 to 4 weeks), the latest on 2026-10-29.
> **Last release:** v0.8.6, 2026-10-29 (GitHub release and PyPI upload) · **last commit:** 2026-11-07 · **licence:** MIT
> **Repo:** https://github.com/teng-lin/notebooklm-py — **moved/renamed:** The repo and the PyPI package (notebooklm-py) are unchanged. The product it drives was renamed: Google rebranded NotebookLM to Gemini Notebook on 2026-07-16, five days after the note.
> **Changed since this note:** When the note was written, v0.7.3 (2026-06-30) was the latest stable release and 0.8.0 was in beta. v0.8.0 (2026-08-03) made the MCP server, the experimental single-tenant REST server and the self-hostable remote MCP connector for claude.ai (behind a Cloudflare Tunnel or Tailscale Funnel with a password) official. The…

## 🚀 Description

[teng-lin/notebooklm-py](https://github.com/teng-lin/notebooklm-py) — an **unofficial** Python API + CLI + MCP server + [[Agent Skills|agent skill]] for Google **NotebookLM**, giving programmatic access to features the web UI doesn't expose. Uses undocumented Google endpoints — **use at your own risk**: not affiliated with Google, APIs can break without notice, rate limits apply. Best for prototypes, research, personal projects.

The core idea: NotebookLM is a **grounded** engine — Gemini reads *your* sources and answers with citations. Let it do the expensive server-side reasoning while your agent (Claude Code, Codex, …) orchestrates and handles the final mile. A **zero-token synthesis + memory layer an agent drives in a loop**, plus bulk structured export *out*.

## 🧩 Ways to use

| Method | Best for |
| --- | --- |
| **CLI** | shell scripts, quick tasks, CI/CD |
| **Python API** | app integration, async pipelines |
| **MCP server** | Claude Desktop/Code, Codex — local stdio or self-hosted remote connector (Cloudflare/Tailscale tunnel → claude.ai + ChatGPT, mobile included) |
| **REST server** | local automation over guarded HTTP routes |
| **Agent skill** | `notebooklm skill install` → `~/.claude/skills`, `~/.agents/skills`; or `npx skills add teng-lin/notebooklm-py` |

## 🧩 What it covers

- **Sources** — bulk import URLs, YouTube, PDFs/Word/EPUB/audio/video/images, Google Drive, pasted text; web/Drive **research agents** (fast/deep) with auto-import
- **Chat** — cited Q&A (`ask --json`), personas, save answers/history as notes
- **Generation** — Audio Overview (podcast), video, slide deck, infographic, quiz, flashcards, report, data table, mind map
- **Beyond the web UI** — batch downloads, quiz/flashcard export (JSON/MD/HTML), mind-map JSON extraction, data-table CSV, slide deck PPTX/PDF + per-slide revision, programmatic sharing
- **Auth** — interactive Playwright login, import cookies from a signed-in browser, or a durable **master token** that self-heals expired sessions unattended (servers, CI, remote MCP)

## Reasoning for

The recipe worth stealing: **knowledge distillation → permanent skill** — run Deep Research or load a doc corpus, let Gemini condense it, bake the result into a `SKILL.md` the agent loads at startup (build once, reuse with zero runtime tokens). Related patterns: a "Master Brain" notebook as persistent cross-session memory queried from `CLAUDE.md`; a source-grounded troubleshooting oracle over a fast-moving tool's docs; and Obsidian sync — run the CLI from the vault root so reports/mind-map JSON/transcripts land as files, with community skills resolving NotebookLM citations into `[[wikilinks]]`.

Install: `uv tool install "notebooklm-py[browser]"` then `notebooklm login` (auto-downloads Chromium). On Windows plain `pip install` also works (not externally-managed).

## Alternatives considered

- [[Open Notebook]] — self-hostable open-source NotebookLM *clone* (own inference, runs local via Ollama). NotebookLM-py is the **opposite tack**: drive the *real hosted* NotebookLM via undocumented APIs. Clone = own your stack; py = Gemini's quality + features, at API-break risk.
- Standing up your own vector DB + embedding pipeline — the zero-infra alternative NotebookLM-py's grounded-memory recipe replaces
- Manual clicking in the NotebookLM web app — no batch, no scriptable export, no mind-map JSON

## 🔗 Links

- Repo: https://github.com/teng-lin/notebooklm-py
- Docs: [CLI Reference](https://github.com/teng-lin/notebooklm-py/blob/main/docs/cli-reference.md) · [Python API](https://github.com/teng-lin/notebooklm-py/blob/main/docs/python-api.md) · [MCP Guide](https://github.com/teng-lin/notebooklm-py/blob/main/docs/mcp-guide.md)
- Walkthroughs: [Claude Code + NotebookLM (video)](https://www.youtube.com/watch?v=usTeU4Uh0iM)

## 🔗 Related notes

- [[Open Notebook]] — self-hosted NotebookLM clone (the inverse approach)
- [[Agent Skills]] — the skill packaging it ships as
- [[LLM Knowledge Bases]] — the distill-to-skill / grounded-memory pattern
- [[Obsidian]] — the knowledge-graph-sync recipe target
- [[Second Brain Design]] — PKM system this can feed
- [[Extending Claude Code — Tools for Its Blind Spots]] — compiled article featuring this tool

---
Template: [[templates/tool]]
