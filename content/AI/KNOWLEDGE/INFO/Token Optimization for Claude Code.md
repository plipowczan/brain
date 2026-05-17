---
title: "Token Optimization for Claude Code"
date: 2026-04-20
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "claude-code", "token-optimization", "cost-optimization", "context-engineering"]
type: knowledge-note
source: "_raw/inbox/🚨 STOP BURNING YOUR TOKENS!.md"
agent-created: true
summary: "Curated list of 10 open-source tools that reduce Claude Code token usage by 40–98% — proxies, context sandboxes, CLAUDE.md templates, code graphs"
---

# Token Optimization for Claude Code

## 🗒️ Description
A short catalog of tools that cut token usage in [[Claude Code]] and LLM work in general. Source: a LinkedIn post aggregating 10 repos. Treat as a starting point — most are unproven, more community experiments than vetted tools. Shared logic: **less context, more output** — via filtering, sandboxing, compression, or structural indexes. Overlaps directly with [[Context Engineering]] and [[Harness Engineering]].

## 🔗 Links
- Source: LinkedIn post (Mohammed Aboelez, 2026-04)

## 🧩 Tools (10)
- **Caveman Claude** — forces Claude to reply in a "caveman" style, cuts ~75% output tokens with no accuracy loss.
- **RTK (Rust Token Killer)** — Rust proxy that filters terminal output, 60–90% reduction, no dependencies.
- **Code Review Graph** — Tree-sitter graph, Claude reads only relevant nodes — claimed 49× reduction on large monorepos.
- **Context Mode** — sandboxes raw output (logs, GitHub) into SQLite instead of dumping into context; claimed 98% reduction.
- **Claude Token Optimizer** — a bundle of setup prompts; 90% savings on documentation (11K → 1.3K tokens).
- **Token Optimizer** — detects "ghost tokens" (invisible characters/duplications) eating the context.
- **Token Optimizer MCP** — aggressive caching and compression for MCP tools; 95%+ reduction.
- **Claude Context (Zilliz)** — hybrid vector search MCP, the entire codebase as context at 40% lower cost.
- **Claude Token Efficient** — a `CLAUDE.md` template that enforces terseness, zero code changes.
- **Token Savior** — symbol-based (AST) navigation, not file-based; 97% reduction + persistent memory.

## 🧩 Taxonomy (mine, organized)
- **Output compression** — Caveman Claude, RTK
- **Context sandboxing** — Context Mode, Token Optimizer MCP
- **Code graph / symbol index** — Code Review Graph, Token Savior, Claude Context
- **Prompt / CLAUDE.md templates** — Claude Token Optimizer, Claude Token Efficient
- **Hygiene** — Token Optimizer (ghost tokens)

## ☘️ Reasoning for me
- My [[Agentic Systems]] and [[Qamera AI]] Claude Code sessions regularly exceed 200k context — the most sensible bets are **code graph** (Token Savior, Claude Context) + **CLAUDE.md hygiene** (Claude Token Efficient).
- Context Mode (SQLite sandbox) fits log and GitHub API ingest scenarios perfectly — slots into [[Context Engineering]] as another layer.
- Worth verifying repos before installing — this is a LinkedIn list, not peer-reviewed.

## 📖 Further reading
- [[Context Engineering]] — the framework these tools plug into
- [[Harness Engineering]] — harness configuration, including hooks and MCP for cost control
- [[Claude Code]] — host platform
- [[Claude Code Best Practice]] — 69 tips
- [[Agent Skills]] — complementary context-reduction mechanism (lazy loading of skills)
- [[Graphify]] — its own code-graph approach, 71× token reduction

---
Template: [[templates/knowledge_note_info]]
