---
title: "Graphify"
date: 2026-04-10
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "knowledge-base", "knowledge-management", "coding-agents", "apache-2.0"]
type: tool
source: "_raw/processed/2026-04-10_safishamsi-graphify.md"
agent-created: true
summary: "Graphify-Labs/graphify (Apache-2.0 since 2026-07, was MIT) — CLI + /graphify skill: code/docs/media → queryable knowledge graph, local tree-sitter for ~40 languages; the company behind it now sells a hosted Graphify Cloud"
status-checked: 2026-11-13
project-status: active
agent-reviewed: 2026-11-13
repo: "https://github.com/Graphify-Labs/graphify"
---

# Graphify

> [!success] Status check 2026-11-13 — active
> **Verdict:** The latest commit is 52cb2821, dated 2026-11-12 (version bump to 0.9.108).
> **Last release:** v0.9.108, 2026-11-12 (GitHub release, PyPI graphifyy 0.9.108, CHANGELOG). · **last commit:** 2026-11-12 · **licence:** Apache-2.0 for the open-source CLI and skill since 2026-07-22, relicensed from MIT…
> **Repo:** https://github.com/Graphify-Labs/graphify — **moved/renamed:** Yes. It moved from safishamsi/graphify to the Graphify-Labs organisation (github.com/safishamsi/graphify returns 301 to Graphify-Labs/graphify).
> **Changed since this note:** The project went from a solo repo at about v0.4 to a VC-backed company product at v0.9.108. Repo moved to Graphify-Labs (July 2026).

A CLI plus AI coding assistant skill: type `/graphify` in Claude Code (or Codex, where it's `$graphify`, Cursor, Gemini CLI, GitHub Copilot, OpenCode, OpenClaw, Aider, Trae, Kiro, Pi and 20+ others) and you get an interactive knowledge graph from any folder. Code, SQL schemas, configs, docs, papers, screenshots, diagrams and audio/video all land in a single graph.

**What changed since I wrote this (April 2026, ~v0.4):** it's no longer a solo side project. The repo moved from `safishamsi/graphify` to **`Graphify-Labs/graphify`** in July 2026 (the old URL redirects), and the default branch is now `v8`. The author, Safi Shamsi, founded Graphify Labs (Y Combinator S26). On 2026-07-22 the CLI and skill were **relicensed from MIT to Apache-2.0**. Apache adds an explicit patent grant. Commercial use is still fine, as long as you keep the licence and NOTICE files and mark files you change. Code contributed before the switch is still available under MIT (`LICENSE-MIT`). It's at v0.9.108 (2026-11-12) and ships releases almost daily. The PyPI package is still `graphifyy`.

**Graphify Cloud** is the company's proprietary hosted product, and the README now leads with it: an always-on graph with cross-repo and monorepo support, PR review, "formal verification" and Sentry/Jira connectors. Pricing on 2026-11-13: Free \$0 (3 repos), Pro \$10/month billed yearly, Teams \$20/seat/month billed yearly (the price for the first 100 teams), Enterprise custom with self-hosting. The free CLI covers everything in this note. The always-on graph, SDLC-wide code review, formal verification and the connectors are Cloud-only. Locally you get a PR dashboard (`graphify prs`) and can combine two graphs by hand (`graphify merge-graphs a.json b.json`).

## Links
### 🗒️ Description
Graphify runs in two passes:
1. **AST pass** (deterministic) — tree-sitter extracts structure from code (classes, functions, imports, call graphs) without an LLM. Nothing leaves the machine.
2. **Semantic pass** — your assistant's subagents process docs, papers, images in parallel, pulling out concepts + relationships. Headless `graphify extract` uses a configured backend instead (Gemini, Claude, OpenAI, DeepSeek, Kimi, Azure, Bedrock, or Ollama for fully local). That content goes to whichever provider you configure. `GRAPHIFY_BACKEND=none` keeps a code-only graph.

Result: NetworkX graph → Leiden community detection → interactive HTML + queryable JSON + audit report.

**Key features:**
- **71.5x token reduction** vs reading raw files (on a 52-file corpus: code + papers + images). That figure now lives in `docs/how-it-works.md`. The README headlines self-reported memory benchmarks instead (LOCOMO recall@10 0.497, LongMemEval-S 76% QA accuracy), and the Cloud pitch claims "80%" lower agent token spend.
- **Confidence scoring** — every edge tagged EXTRACTED (1.0), INFERRED (0.0-1.0), or AMBIGUOUS
- **Multimodal** — vision on screenshots, diagrams, whiteboard photos; video/audio transcription via faster-whisper + yt-dlp (`[video]` extra), `graphify add <url>` for papers and YouTube
- **~40 languages** via local parsing: 33 tree-sitter grammars plus 7 built-in parsers (Dart, Apex, COBOL, Razor, Blade, Pascal, Robot Framework). SQL gets tables, views, foreign keys and JOINs extracted deterministically.
- **SHA256 cache** — re-runs only process changed files
- **Auto-sync** (`--watch` / `graphify watch`, `[watch]` extra) — the graph updates automatically as code changes
- **Git hooks** (`graphify hook install`) — rebuild after commit and branch switch; after `git pull` you still run `graphify update .`
- **Wiki export** (`--wiki`) — Wikipedia-style markdown articles per community
- **Always-on hook** — on Claude Code and Gemini CLI a hook fires before search-style calls (on Claude Code also before Read/Glob and `cat`/`sed`-style Bash reads) and nudges the agent toward scoped `graphify query` calls instead of grepping raw files. Instruction-file platforms (Codex, Cursor, OpenCode…) get the same guidance via `AGENTS.md`/rules. An optional `--strict` install actually denies Read/Grep once per session until the graph has been queried.
- **New since the note:** MCP stdio server (`[mcp]` extra), Neo4j and FalkorDB push, `graphify export callflow-html` (Mermaid call-flow view), `graphify prs` PR dashboard, project-scoped installs (`graphify install --project`)

### Download or use
```bash
uv tool install graphifyy      # recommended (or: pipx install graphifyy; plain pip may need PATH fixes)
graphify install               # detects your assistant and registers the skill
```
[GitHub: Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)

Commands:
```
/graphify .                        # current directory
/graphify ./raw --mode deep        # aggressive INFERRED edges
/graphify ./raw --update           # only changed files
/graphify query "what connects X to Y?"
/graphify path "NodeA" "NodeB"
/graphify explain "SwinTransformer"
```

Privacy notes: every `query`/`path`/`explain` call is logged locally to `~/.cache/graphify-queries.log` by default (questions, not full subgraphs). Graphify Labs warns on its site that look-alike domains (graphify.net, graphiffy.com) aren't affiliated; the official site is graphify.com.

## 🗒️ Reasoning for

I have this skill installed in [[Claude Code]] — `~/.claude/skills/graphify/SKILL.md`. I use it to understand large codebases and the relationships between files. Especially handy when:
- I enter a new project and need an architecture map
- I want to find the "why" behind design decisions (rationale extraction from comments and docs)
- I need context compression — graph.json instead of raw files in the prompt

Graphify is a response to Karpathy's `/raw` folder problem — instead of reading everything, you query a compact graph.

Caveat as of 2026-11: the project's direction is now Cloud-first, and releases land almost daily, so expect behaviour and schema churn. `graph.json` now carries `graph.schema_version` so integrations can detect format changes.

## 🧩 Output Structure

```
graphify-out/
├── graph.html       # interactive visualization — click nodes, search, filter
├── GRAPH_REPORT.md  # god nodes, surprising connections, suggested questions
├── graph.json       # persistent graph — query weeks later
└── cache/           # SHA256 cache — incremental processing
```

## Alternatives considered
- **RAG with a vector DB** — the Claude Code team tested it and dropped it: code drifts out of sync, permissions are complex. Agentic search (glob + grep) beats RAG. The academic form of this argument is [[GrepRAG]]; the full lane comparison is in [[Structural Retrieval for Code]]
- **Manual codebase reading** — doesn't scale, 71x more tokens
- **GitHub Copilot @workspace** — doesn't build a persistent graph, doesn't do cross-file semantic analysis
- **Manual Neo4j setup** — Graphify exports to Neo4j (`--neo4j-push`) but doesn't require it to operate
- [[Understand Anything]] — same Tree-sitter+LLM idea, but leans on a committed-to-repo JSON graph + interactive dashboard for team onboarding/diff-impact rather than token-reduction context
- [[Codebase Memory MCP]] — same code→knowledge-graph idea delivered as a single-binary MCP server (tree-sitter + Hybrid LSP, Cypher queries, `trace_path`) rather than a skill; its team-shared `graph.db.zst` artifact is explicitly modeled on graphify's `graphify-out/`

## 📖 Resources
- [GitHub: Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) (formerly safishamsi/graphify, which redirects)
- [ARCHITECTURE.md](https://github.com/Graphify-Labs/graphify/blob/v8/ARCHITECTURE.md) · [How it works](https://github.com/Graphify-Labs/graphify/blob/v8/docs/how-it-works.md) · [NOTICE (MIT → Apache-2.0)](https://github.com/Graphify-Labs/graphify/blob/v8/NOTICE)
- [Graphify Cloud pricing](https://graphify.com/pricing)
- [[Claude Code]] — primary platform
- [[Awesome Claude Code]] — listed there
- [[LLM Knowledge Bases]] — related concept: knowledge graph approach to PKM
- [[Context Engineering]] — graphify as a context compression tool

---
Template: [[templates/tool]]
