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

AI coding assistant skill — wpisujesz `/graphify` w Claude Code (lub Codex, Cursor, Gemini CLI, OpenCode, OpenClaw, Aider, Trae) i dostajesz interactive knowledge graph z dowolnego folderu. Kod, docs, papers, screenshoty, diagramy — wszystko ląduje w jednym grafie.

## Links
### 🗒️ Description
Graphify działa w dwóch przebiegach:
1. **AST pass** (deterministic) — tree-sitter extractuje strukturę z kodu (classes, functions, imports, call graphs) bez LLM
2. **Semantic pass** — Claude subagents przetwarzają docs, papers, images w parallel, wyciągając concepts + relationships

Wynik: NetworkX graph → Leiden community detection → interactive HTML + queryable JSON + audit report.

**Key features:**
- **71.5x token reduction** vs reading raw files (na corpus 52 files: code + papers + images)
- **Confidence scoring** — każdy edge tagowany EXTRACTED (1.0), INFERRED (0.0-1.0), lub AMBIGUOUS
- **Multimodal** — Claude vision na screenshots, diagrams, whiteboard photos, images in 20 languages
- **20 languages** via tree-sitter AST (Python, JS, TS, Go, Rust, Java, C, C++, Ruby, C#, Kotlin, Scala, PHP, Swift, Lua, Zig, PowerShell, Elixir, Objective-C, Julia)
- **SHA256 cache** — re-runs przetwarzają tylko zmienione pliki
- **Auto-sync** (`--watch`) — graph updates się automatycznie przy zmianach kodu
- **Git hooks** — rebuild po commit i branch switch
- **Wiki export** (`--wiki`) — Wikipedia-style markdown articles per community
- **Always-on hook** — surfaces GRAPH_REPORT.md przed każdym Glob/Grep call, agent nawiguje grafem zamiast grepować raw files

### Download or use
```bash
pip install graphifyy && graphify install
```
[GitHub: safishamsi/graphify](https://github.com/safishamsi/graphify)

Komendy:
```
/graphify .                        # current directory
/graphify ./raw --mode deep        # aggressive INFERRED edges
/graphify ./raw --update           # only changed files
/graphify query "what connects X to Y?"
/graphify path "NodeA" "NodeB"
/graphify explain "SwinTransformer"
```

## 🗒️ Reasoning for

Mam ten skill zainstalowany w [[Claude Code]] — `~/.claude/skills/graphify/SKILL.md`. Używam go do understanding dużych codebase'ów i powiązań między plikami. Szczególnie przydatny gdy:
- Wchodzę w nowy projekt i potrzebuję mapy architektury
- Chcę znaleźć "why" za design decisions (rationale extraction z komentarzy i docs)
- Potrzebuję context compression — graph.json zamiast raw files w prompt

Graphify to odpowiedź na problem Karpathy'ego z `/raw` folder — zamiast czytać wszystko, odpytujesz compact graph.

## 🧩 Output Structure

```
graphify-out/
├── graph.html       # interactive visualization — click nodes, search, filter
├── GRAPH_REPORT.md  # god nodes, surprising connections, suggested questions
├── graph.json       # persistent graph — query weeks later
└── cache/           # SHA256 cache — incremental processing
```

## Alternatives considered
- **RAG z vector DB** — Claude Code team testował i porzucił: code drifts out of sync, permissions complex. Agentic search (glob + grep) beats RAG
- **Manual codebase reading** — nie skaluje się, 71x więcej tokenów
- **GitHub Copilot @workspace** — nie buduje persistent graph, nie robi cross-file semantic analysis
- **Neo4j manual setup** — Graphify exportuje do Neo4j (`--neo4j-push`) ale nie wymaga go do działania

## 📖 Resources
- [GitHub: safishamsi/graphify](https://github.com/safishamsi/graphify)
- [ARCHITECTURE.md](https://github.com/safishamsi/graphify/blob/v3/ARCHITECTURE.md)
- [[Claude Code]] — primary platform
- [[Awesome Claude Code]] — listed there
- [[LLM Knowledge Bases]] — related concept: knowledge graph approach to PKM
- [[Context Engineering]] — graphify as context compression tool

---
Template: [[templates/tool]]
