---
title: "Codebase Memory MCP"
date: 2026-07-07
enableToc: true
openToc: true
tags: ["tool", "ai", "mcp", "knowledge-graph", "code-intelligence", "coding-agents", "tree-sitter", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-07-07_DeusData-codebase-memory-mcp.md"
agent-created: true
summary: "DeusData's single-binary code-intelligence MCP server — tree-sitter + Hybrid LSP builds a persistent knowledge graph of your repo, answering structural queries in <1ms with ~99% fewer tokens; 158 languages, 14 tools, 11 agents, MIT."
---
# Codebase Memory MCP
A single static C binary that indexes a whole codebase into a persistent **knowledge graph** and serves it to any AI coding agent over MCP. Full-indexes an average repo in milliseconds, the Linux kernel (28M LOC, 75K files) in ~3 minutes, and answers structural queries in under 1 ms. The pitch: replace dozens of grep/read cycles with one graph query — ~120× fewer tokens.

Repo: [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · MIT · zero runtime dependencies.

> [!note] Benchmarks below are vendor-reported (project README + arXiv preprint). Treat the exact figures as marketing-grade until independently reproduced.

## Links
### Description
A **structural analysis backend** — it builds and queries the graph but ships **no LLM**. Your MCP client (Claude Code, Codex, …) is the intelligence layer that translates natural language → graph query and narrates the result. That is the whole design bet: the agent you already pay for is the query translator, so no extra API keys, no model to configure.

Two-layer indexing:
1. **Tree-sitter pass** — 158 vendored grammars compiled into the binary; fast, syntactic; extracts definitions, calls, imports for every language.
2. **Hybrid LSP pass** — a lightweight C reimplementation of language-server type-resolution algorithms (structurally compatible with tsserver/typescript-go, pyright, gopls, Roslyn, Eclipse JDT, rust-analyzer), embedded in the binary — no language-server process, no per-project setup. Refines `CALLS`/`USAGE`/`RESOLVED_CALLS` edges with real type info for **Python, TS/JS/JSX/TSX, PHP, C#, Go, C, C++, Java, Kotlin, Rust**. Languages without it fall back to textual resolution, so you always get *some* answer.

The result is a graph of `Function`/`Class`/`Method`/`Route`/`Resource` nodes wired by `CALLS`, `IMPORTS`, `IMPLEMENTS`, `HTTP_CALLS`, `DATA_FLOWS`, `SIMILAR_TO`, and cross-repo `CROSS_*` edges — accurate enough to drive `trace_path` across packages, inheritance, and stdlib calls.

### 🧩 Features
- **Extreme indexing speed** — RAM-first pipeline (LZ4 compression, in-memory SQLite, single dump at end, memory released after). Linux kernel full index ~3 min → 4.81M nodes / 7.72M edges; Django ~6 s.
- **99% fewer tokens** — 5 structural queries ≈ 3,400 tokens vs ~412,000 via file-by-file grep (a **99.2% reduction**). This is [[Progressive Disclosure]] applied to source code.
- **14 MCP tools** — `index_repository`, `search_graph`, `trace_path`, `detect_changes` (git-diff blast radius + risk), `query_graph` (Cypher), `get_architecture`, `get_code_snippet`, `search_code`, `manage_adr` (persisted Architecture Decision Records), `ingest_traces`, and more.
- **Search stack** — semantic search over bundled `nomic-embed-code` embeddings (768d int8, compiled in — no API key, no Ollama), BM25 full-text via SQLite FTS5 (camelCase/snake_case aware), structural regex search, graph-augmented grep.
- **Cypher-like queries** — read-only openCypher subset (`MATCH`/`WHERE`/`WITH`/`UNWIND`/`UNION`/aggregates/var-length paths); anything outside fails with a clear `unsupported …` error instead of silent-empty.
- **Analysis** — Louvain community detection (functional modules), dead-code detection (zero-caller functions), cross-service HTTP/gRPC/GraphQL/tRPC route↔call linking, channel detection (`EMITS`/`LISTENS_ON`), near-clone detection (MinHash + LSH).
- **Infrastructure-as-code indexing** — Dockerfiles, Kubernetes manifests, Kustomize overlays as first-class graph nodes.
- **Team-shared graph artifact** — commit `.codebase-memory/graph.db.zst` (zstd-compressed SQLite snapshot, two-tier export, `merge=ours` auto-set) so teammates skip the reindex on clone. The README notes this is "similar in spirit to [[Graphify]]'s `graphify-out/`" but as one compressed, integrity-checked file.
- **11 agents, one command** — `install` auto-detects and configures Claude Code, Codex CLI, Gemini CLI, Zed, OpenCode, Antigravity, Aider, KiloCode, VS Code, OpenClaw, Kiro (MCP entries, instruction files, non-blocking pre-tool hooks). The Claude `PreToolUse` hook augments Grep/Glob with graph context but never gates `Read` (preserves the read-before-edit invariant).
- **3D graph UI** at `localhost:9749` (optional `--ui` binary variant), incl. multi-galaxy cross-repo layout.
- **100% local, zero telemetry** — code, queries, and usage never leave the machine; persists to `~/.cache/codebase-memory-mcp/` (WAL, ACID).

### Download or use
Single static binary for macOS (arm64/amd64), Linux (arm64/amd64), Windows (amd64). One-line install (macOS/Linux):

```
curl -fsSL https://raw.githubusercontent.com/DeusData/codebase-memory-mcp/main/install.sh | bash
```

Windows (PowerShell) — download `install.ps1`, `Unblock-File` it, run it (`Set-ExecutionPolicy -Scope Process Bypass` if execution policy blocks). Then restart the agent and say **"Index this project"**.

Also on **npm, PyPI, Homebrew, Scoop, Winget, Chocolatey, AUR** (`yay -S codebase-memory-mcp-bin`), and `go install`. Manual MCP config: add a `codebase-memory-mcp` server block to `~/.claude/.mcp.json`; verify with `/mcp` (14 tools).

## Reasoning for
Where I keep hitting the file-by-file exploration tax — [[Qamera AI]]'s growing codebase, this [[Brain]] repo's scripts/skills, any [[Claude Code]] session that burns context re-grepping the same modules — a persistent code graph is the direct fix. It's the code-domain counterpart to what [[CocoIndex]] does for incremental agent context and what [[Graphify]] does for docs/code→graph, but purpose-built as an MCP server with `trace_path` and git-diff impact mapping. Belongs in the same mental bucket as the tools in [[Token Optimization for Claude Code]]: cut tokens by giving the agent structure instead of raw text. C-only, zero-dependency, local-only, MIT — low adoption cost and nothing to leak.

Caveats before I trust it in a real workflow: benchmarks are self-reported; the "Hybrid LSP" claims IDE-grade resolution without a language server (verify on my own TS/Python before relying on `trace_path` accuracy); and `install` writes to agent config files and hooks — worth an audit pass first (the repo signs every release: SLSA L3 provenance, Sigstore cosign, VirusTotal 70+ engines, SHA-256 checksums, CodeQL — a stronger supply-chain posture than most single-dev tools, cf. the trust questions around [[Hugging Bay]]).

## Alternatives considered
- [[Graphify]] — Claude Code skill; code/docs/images → clustered knowledge graph, ~71× token reduction. Closest sibling; graph-as-skill vs graph-as-MCP-server. README explicitly compares artifact formats.
- [[CocoIndex]] — incremental indexing engine (Python API, Rust core) turning codebases/notes/PDFs into always-fresh agent context; recomputes only the delta. Broader source types, no MCP graph query surface.
- [[Serena]] · [[MCP Language Server]] — the LSP-as-context lane: live language-server symbol/type resolution over MCP, no persisted graph.
- [[LightRAG]] — knowledge-graph RAG framework; entity/relation extraction for retrieval, not code-structure tracing.
- [[Chrome DevTools MCP]] — sibling MCP server for coding agents, but for live-browser automation rather than static code intelligence.
- Plain grep/read, LSP "Go to Definition", or embedded-LLM code-graph tools (extra API keys/cost) — the file-by-file baseline this replaces.

## 📖 Further reading
- Preprint: *Codebase-Memory: Tree-Sitter-Based Knowledge Graphs for LLM Code Exploration via MCP* — [arXiv:2603.27277](https://arxiv.org/abs/2603.27277). 31 repos: 83% answer quality, 10× fewer tokens, 2.1× fewer tool calls vs file-by-file exploration.
- Related concepts: [[Progressive Disclosure]] · [[LLM Knowledge Bases]] · [[Context Engineering]] · [[SkillWeaver — Compositional Skill Routing]] (same ~99% token cut, applied to MCP tool selection instead of code)
- [[Structural Retrieval for Code]] — where this tool sits among the LSP / SCIP / repo-map / grep lanes, and when each wins

## Resources
- Repo: https://github.com/DeusData/codebase-memory-mcp
- `.cbmignore` how-to, `docs/CONFIGURATION.md`, `SECURITY.md` — in the repo.

---
Template: [[templates/tool]]
