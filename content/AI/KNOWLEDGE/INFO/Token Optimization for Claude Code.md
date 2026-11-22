---
title: "Token Optimization for Claude Code"
date: 2026-04-20
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "claude-code", "token-optimization", "cost-optimization", "context-engineering"]
type: knowledge-note
sources: ["_raw/processed/2026-04-20_stop-burning-tokens.md", "_raw/processed/2026-11-20_mksglucontext-mode Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and   enforces routing across 17 platforms via MCP + hooks.md", "_raw/processed/2026-11-22_yt-EFGvVCpW9zc_fable-5-2-is-insane-only-if-you-use-it-anthropic-s-way.md"]
agent-created: true
summary: "Curated list of 10 open-source tools that reduce Claude Code token usage by 40–98% — proxies, context sandboxes, CLAUDE.md templates, code graphs"
---

# Token Optimization for Claude Code

## 🗒️ Description
A short catalog of tools that cut token usage in [[Claude Code]] and LLM work in general. Source: a LinkedIn post aggregating 10 repos. Treat as a starting point — most are unproven, more community experiments than vetted tools. Shared logic: **less context, more output** — via filtering, sandboxing, compression, or structural indexes. Overlaps directly with [[Context Engineering]] and [[Harness Engineering]].

## 🔗 Links
- Source: LinkedIn post (Mohammed Aboelez, 2026-04)

## 🧩 Tools (10)
- **[[Caveman|Caveman Claude]]** — forces Claude to reply in a "caveman" style, cuts ~65% output tokens (README headline ~75%) with no accuracy loss.
- **RTK (Rust Token Killer)** — Rust proxy that filters terminal output, 60–90% reduction, no dependencies.
- **Code Review Graph** — Tree-sitter graph, Claude reads only relevant nodes — claimed 49× reduction on large monorepos.
- **[[Context Mode]]** — sandboxes raw output (logs, GitHub) into SQLite instead of dumping into context; claimed 98% reduction. Its own README (read 2026-11-20) adds two things the post left out: the 98% assumes hooks that route tool calls into the sandbox, while agents that only get a routing instruction file (Zed, Antigravity IDE) save ~60%; and the licence is Elastic License 2.0, source-available rather than open source. It also keeps a session event log that restores the working state after compaction.
- **Claude Token Optimizer** — a bundle of setup prompts; 90% savings on documentation (11K → 1.3K tokens).
- **Token Optimizer** — detects "ghost tokens" (invisible characters/duplications) eating the context.
- **Token Optimizer MCP** — aggressive caching and compression for MCP tools; 95%+ reduction.
- **Claude Context (Zilliz)** — hybrid vector search MCP, the entire codebase as context at 40% lower cost.
- **Claude Token Efficient** — a `CLAUDE.md` template that enforces terseness, zero code changes.
- **Token Savior** — symbol-based (AST) navigation, not file-based; 97% reduction + persistent memory.

## 🧩 Taxonomy (mine, organized)
- **Output compression** — [[Caveman]], RTK
- **Context sandboxing** — [[Context Mode]], Token Optimizer MCP
- **Code graph / symbol index** — Code Review Graph, Token Savior, Claude Context
- **Prompt / CLAUDE.md templates** — Claude Token Optimizer, Claude Token Efficient
- **Hygiene** — Token Optimizer (ghost tokens)

## 🧩 Model choice and effort *(added 2026-11-22)*
The tools above cut tokens per call. [[Fable 5.2 — Nine Rules for Using It (AI LABS)]], checked against Anthropic's Fable 5.2 guide, adds four levers that act before any tool does:
- **Model.** Fable 5.2 costs twice Opus 5.5 per token (\$8 / \$40 vs \$4 / \$20 per million) and drains plan limits faster. Start on Opus; move up only when Opus at a higher effort still falls short.
- **Effort.** Most of the gain arrives by `high`. `xhigh` adds a little for many more tokens, and `max` is for when tokens don't matter.
- **Sub-agents.** Fable starts them readily when instructions invite it, and they can become a large share of a session's cost. State what a sub-agent costs (Anthropic: in the sub-agent tool's description), and keep lead-and-workers for big parallel jobs: AI LABS measured about 1.7× Opus alone on a small feature.
- **Model switches.** The prompt cache belongs to one model, so the first message after a switch rereads the whole conversation at full price. Switch between tasks, after `/compact` or in a fresh session. This is the cache cost the Cache Tax mod in [[Claude Code Mods (RoboNuggets)]] warns about.

## ☘️ Reasoning for me
- My [[Agentic Systems]] and [[Qamera AI]] Claude Code sessions regularly exceed 200k context — the most sensible bets are **code graph** (Token Savior, Claude Context) + **CLAUDE.md hygiene** (Claude Token Efficient).
- [[Context Mode]] (SQLite sandbox) fits log and GitHub API ingest scenarios perfectly — slots into [[Context Engineering]] as another layer.
- Worth verifying repos before installing — this is a LinkedIn list, not peer-reviewed.

## 📖 Further reading
- [[Context Engineering]] — the framework these tools plug into
- [[Harness Engineering]] — harness configuration, including hooks and MCP for cost control
- [[Claude Code]] — host platform
- [[Claude Code Best Practice]] — 69 tips
- [[Agent Skills]] — complementary context-reduction mechanism (lazy loading of skills)
- [[Graphify]] — its own code-graph approach, 71× token reduction
- [[Trail-code]] — same roster: a repo-wide markdown node graph, vendor-reported −42% tokens / −60% latency vs cold Claude Code
- [[Jev Engineering for Coding Agents]] — why retrieval (reading + searching ≈ two-thirds of tokens) is the bucket to optimize, and why mid-session routing to a cheaper model usually costs more

- [[billion-context]] — model-driven reversible context compression via proxy
- [[Fable 5.2 — Nine Rules for Using It (AI LABS)]] — model, effort, sub-agents and model switches as cost levers
---
Template: [[templates/knowledge_note_info]]
