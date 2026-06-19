---
title: "Understand Anything"
date: 2026-06-19
enableToc: true
openToc: true
tags: ["tool", "ai", "knowledge-graph", "claude-code", "coding-agents", "onboarding", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-06-19_egonex-understand-anything-readme.md"
agent-created: true
summary: "Egonex-AI/Understand-Anything — Claude Code plugin (and multi-platform skill) that turns any codebase, docs, or LLM wiki into an interactive knowledge graph via a multi-agent Tree-sitter+LLM pipeline. Explore, search, ask, diff-impact. MIT."
---

# Understand Anything

## 🚀 Description

[Egonex-AI/Understand-Anything](https://github.com/Egonex-AI/Understand-Anything) — a [[Claude Code]] plugin that analyzes a project with a multi-agent pipeline, builds a **knowledge graph** of every file, function, class, and dependency, then opens an interactive dashboard to explore it visually. MIT. Tagline: *"graphs that teach > graphs that impress"* — the point isn't to wow you with complexity, it's to quietly show how the pieces fit.

The framing problem it solves: you join a new team, the codebase is 200k lines, where do you even start? Instead of reading code blind, you get a navigable, searchable, color-coded map.

## 🧩 Features

- **Structural graph** — every file/function/class is a clickable node with plain-English summaries, relationships, and guided tours.
- **Domain view** — maps code to real business processes (domains → flows → steps) as a horizontal graph.
- **`/understand-knowledge`** — points at a **[[LLM Knowledge Bases|Karpathy-pattern LLM wiki]]** and builds a force-directed graph with community clustering: parses wikilinks/categories from `index.md` deterministically, then LLM agents discover implicit relationships and extract entities/claims. (Directly applicable to this vault → [[Brain]].)
- **Guided tours** — auto-generated walkthroughs ordered by dependency, so you learn in the right order.
- **Fuzzy + semantic search** — find by name or by meaning ("which parts handle auth?").
- **Diff impact analysis** (`/understand-diff`) — see which parts your changes touch before you commit.
- **Persona-adaptive UI** — detail level adjusts for junior dev / PM / power user.
- **Layer visualization** — auto-grouping by architectural layer (API/Service/Data/UI/Utility).
- **Incremental** — re-runs only re-analyze changed files; `--auto-update` patches the graph via a post-commit hook.
- **Localized output** — `--language` for en/zh/zh-TW/ja/ko/ru node summaries and dashboard.

## 🔧 Under the hood

**Tree-sitter + LLM hybrid** — Tree-sitter (deterministic) parses source into a syntax tree and extracts structural facts (imports, exports, defs, call sites, inheritance), pre-resolved into an `importMap` and used for fingerprint-based change detection. The LLM (semantic) reads that structure plus source to produce summaries, tags, layer assignments, domain mapping, and tours. So the structural side is reproducible while the semantic side captures intent.

**Multi-agent pipeline** — `/understand` orchestrates 5 agents (`project-scanner`, `file-analyzer`, `architecture-analyzer`, `tour-builder`, `graph-reviewer`); `/understand-domain` adds `domain-analyzer`; `/understand-knowledge` adds `article-analyzer`. File analyzers run up to 5 concurrent, 20–30 files per batch.

The graph is **just JSON** (`.understand-anything/knowledge-graph.json`) — commit it once and teammates skip the pipeline (track 10 MB+ graphs with git-lfs). Good for onboarding, PR reviews, docs-as-code.

## Reasoning for

The natural complement to [[Graphify]] — both turn code/docs into a queryable knowledge graph, but Understand-Anything leans on a committed-to-repo JSON graph + interactive dashboard for **team onboarding** rather than token-reduction context. The `/understand-knowledge` mode is the interesting hook for me: it can ingest a [[LLM Knowledge Bases|Karpathy-pattern wiki]] like this very vault ([[Brain]]) and surface implicit relationships my [[reindex|index files]] don't capture. Worth a pass on [[Qamera AI]] / [[PLSoft]] codebases for faster onboarding and diff-impact review.

## Alternatives considered

- [[Graphify]] — code/docs/images → queryable graph with clustering and 71× token reduction (more retrieval/context-engineering oriented).
- [[CocoIndex]] / [[LightRAG]] — incremental indexing / KG-RAG for agent context, not interactive onboarding dashboards.
- [[Google Cloud Knowledge Catalog]] — managed knowledge graph over data, agent-facing via MCP.

## 🔗 Links

- Repo: https://github.com/Egonex-AI/Understand-Anything (MIT, © Yuxiang Lin / Infinite Universe)
- Live demo: https://understand-anything.com/demo/
- Install (Claude Code): `/plugin marketplace add Egonex-AI/Understand-Anything` then `/plugin install understand-anything`
- One-line multi-platform install: `curl -fsSL https://raw.githubusercontent.com/Egonex-AI/Understand-Anything/main/install.sh | bash` (Codex/OpenCode/OpenClaw/Gemini CLI/Cursor/Copilot/Kiro/…)
- Walkthrough video (Better Stack): https://www.youtube.com/watch?v=VmIUXVlt7_I

## 🔗 Related notes

- [[Graphify]] — closest sibling: code/docs → knowledge graph
- [[LLM Knowledge Bases]] · [[Open Knowledge Format (OKF)]] — the Karpathy-wiki pattern `/understand-knowledge` consumes
- [[CocoIndex]] · [[LightRAG]] · [[Google Cloud Knowledge Catalog]] — adjacent knowledge-graph / indexing tools
- [[Brain]] — this vault is a candidate input for `/understand-knowledge`
- [[Claude Code]] · [[Awesome Claude Code]] — primary host and discovery surface
- [[Progressive Disclosure]] — index-first exploration, the same instinct as guided tours

---
Template: [[templates/tool]]
