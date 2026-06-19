---
title: "Graphify"
date: 2026-04-10
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "knowledge-base", "knowledge-management", "coding-agents"]
type: tool
source: "_raw/inbox/safishamsigraphify AI coding assistant skill (Claude Code, Codex, OpenCode, Cursor, Gemini CLI, OpenClaw, Factory Droid, Trae). Turn any folder of code, docs, papers, or images into a queryable knowledge graph.md"
agent-created: true
summary: "AI skill — code/docs/images → queryable knowledge graph with clustering, 71x token reduction"
---

# Graphify

AI coding assistant skill — type `/graphify` in Claude Code (or Codex, Cursor, Gemini CLI, OpenCode, OpenClaw, Aider, Trae) and you get an interactive knowledge graph from any folder. Code, docs, papers, screenshots, diagrams — everything lands in a single graph.

## Links
### 🗒️ Description
Graphify runs in two passes:
1. **AST pass** (deterministic) — tree-sitter extracts structure from code (classes, functions, imports, call graphs) without an LLM
2. **Semantic pass** — Claude subagents process docs, papers, images in parallel, pulling out concepts + relationships

Result: NetworkX graph → Leiden community detection → interactive HTML + queryable JSON + audit report.

**Key features:**
- **71.5x token reduction** vs reading raw files (on a 52-file corpus: code + papers + images)
- **Confidence scoring** — every edge tagged EXTRACTED (1.0), INFERRED (0.0-1.0), or AMBIGUOUS
- **Multimodal** — Claude vision on screenshots, diagrams, whiteboard photos, images in 20 languages
- **20 languages** via tree-sitter AST (Python, JS, TS, Go, Rust, Java, C, C++, Ruby, C#, Kotlin, Scala, PHP, Swift, Lua, Zig, PowerShell, Elixir, Objective-C, Julia)
- **SHA256 cache** — re-runs only process changed files
- **Auto-sync** (`--watch`) — the graph updates automatically as code changes
- **Git hooks** — rebuild after commit and branch switch
- **Wiki export** (`--wiki`) — Wikipedia-style markdown articles per community
- **Always-on hook** — surfaces GRAPH_REPORT.md before every Glob/Grep call, the agent navigates the graph instead of grepping raw files

### Download or use
```bash
pip install graphifyy && graphify install
```
[GitHub: safishamsi/graphify](https://github.com/safishamsi/graphify)

Commands:
```
/graphify .                        # current directory
/graphify ./raw --mode deep        # aggressive INFERRED edges
/graphify ./raw --update           # only changed files
/graphify query "what connects X to Y?"
/graphify path "NodeA" "NodeB"
/graphify explain "SwinTransformer"
```

## 🗒️ Reasoning for

I have this skill installed in [[Claude Code]] — `~/.claude/skills/graphify/SKILL.md`. I use it to understand large codebases and the relationships between files. Especially handy when:
- I enter a new project and need an architecture map
- I want to find the "why" behind design decisions (rationale extraction from comments and docs)
- I need context compression — graph.json instead of raw files in the prompt

Graphify is a response to Karpathy's `/raw` folder problem — instead of reading everything, you query a compact graph.

## 🧩 Output Structure

```
graphify-out/
├── graph.html       # interactive visualization — click nodes, search, filter
├── GRAPH_REPORT.md  # god nodes, surprising connections, suggested questions
├── graph.json       # persistent graph — query weeks later
└── cache/           # SHA256 cache — incremental processing
```

## Alternatives considered
- **RAG with a vector DB** — the Claude Code team tested it and dropped it: code drifts out of sync, permissions are complex. Agentic search (glob + grep) beats RAG
- **Manual codebase reading** — doesn't scale, 71x more tokens
- **GitHub Copilot @workspace** — doesn't build a persistent graph, doesn't do cross-file semantic analysis
- **Manual Neo4j setup** — Graphify exports to Neo4j (`--neo4j-push`) but doesn't require it to operate
- [[Understand Anything]] — same Tree-sitter+LLM idea, but leans on a committed-to-repo JSON graph + interactive dashboard for team onboarding/diff-impact rather than token-reduction context

## 📖 Resources
- [GitHub: safishamsi/graphify](https://github.com/safishamsi/graphify)
- [ARCHITECTURE.md](https://github.com/safishamsi/graphify/blob/v3/ARCHITECTURE.md)
- [[Claude Code]] — primary platform
- [[Awesome Claude Code]] — listed there
- [[LLM Knowledge Bases]] — related concept: knowledge graph approach to PKM
- [[Context Engineering]] — graphify as a context compression tool

---
Template: [[templates/tool]]
