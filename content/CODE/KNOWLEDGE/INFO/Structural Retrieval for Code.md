---
title: "Structural Retrieval for Code (RAG ≠ RAG)"
date: 2026-07-08
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "rag", "coding-agents", "code-intelligence", "retrieval", "context-engineering"]
type: compiled-note
agent-created: true
summary: "RAG is not one thing — for code, structural retrieval (LSP symbols, def/ref graphs, call graphs, repo maps) beats naive vector search. A taxonomy of the lanes, the tools in each, and the grep-vs-graph tension."
---

# Structural Retrieval for Code (RAG ≠ RAG)

## 🚀 The main message

"Use RAG for the codebase" hides a decision that actually matters. **RAG is not one technique — it is a family, and the members are not equal.** For prose, naive vector RAG (chunk → embed → top-k cosine) is fine. For *code*, it is usually the weakest option, because it throws away the one thing code has that prose doesn't: **exact, verifiable structure** — definitions, references, call edges, types, imports, inheritance.

The sharp version of the claim, from [[HOMER — Structured Agent Memory]]: **similarity ≠ causality.** Cosine nearness in embedding space is not a call graph. When the question is *"who calls this function"*, *"what breaks if I change this signature"*, or *"trace the path from route to database"*, a vector index answers with vibes and a structural index answers with facts.

This note is the map I wished existed when the tools started piling up: the **lanes** of structural code retrieval, what lives in each, and where the honest counter-arguments are.

## 🧭 One clean frame: graph vs non-graph

The Oct 2025 survey *[Retrieval-Augmented Code Generation: repository-level approaches](https://arxiv.org/abs/2510.04905)* gives the cleanest split. A retrieval method is:

- **graph-based** if its core retrieval mechanism depends on an *explicitly constructed* graph of code structure (syntactic/semantic relationships);
- **non-graph** if it treats the repo as a flat bag of text and retrieves by **lexical** (BM25/grep) or **semantic** (dense/vector) similarity.

Everything below is a point on that axis. The vault already leans heavily into the graph lane — but only through **one substrate (tree-sitter AST)**. The research below surfaced four *other* substrates I was missing, plus the non-graph counter-thesis.

## 🧩 The lanes (and what's in each)

### Lane 1 — Tree-sitter AST graphs *(what I already had)*

Parse source into an AST, extract defs/refs/calls, build a graph, query it instead of grepping raw files. My existing notes:

- [[Codebase Memory MCP]] — single C binary; tree-sitter **+ Hybrid LSP** type resolution → persistent graph over MCP, Cypher + `trace_path` + git-diff blast radius.
- [[Graphify]] — Claude Code skill; tree-sitter AST + LLM semantic pass → clustered graph, ~71× token reduction.
- [[Understand Anything]] — tree-sitter + LLM; committed JSON graph + onboarding dashboard + diff-impact.
- [[CocoIndex]] — AST-aware **incremental** index (CocoIndex-code MCP); recomputes only the delta.

Strong lane. But tree-sitter is *syntactic* — it sees shapes, not resolved types. That gap is Lane 2.

### Lane 2 — LSP-as-context (MCP servers over language servers) ← biggest gap

Skip the AST reimplementation; retrieve straight from a **language server's native symbol/type tables** — the same engine your IDE uses for go-to-definition and find-references. Zero embeddings, type-accurate. Genuinely absent from the vault before this research.

- [[Serena]] — `oraios/serena`, MIT. "The IDE for your agent": symbol-level retrieval **and** refactoring (`find_symbol`, `find_referencing_symbols`, `replace_symbol_body`, `insert_after_symbol`, rename) over LSP for 40+ languages. No vector index.
- [[MCP Language Server]] — `isaacphi/mcp-language-server`. A generic **LSP→MCP bridge**: run any stdio language server (gopls, rust-analyzer, pyright, clangd, ts-language-server) and expose definition / references / diagnostics / hover / rename / edit to the agent.

The distinguishing property (corroborated across sources): LSP retrieval returns the **exhaustive, precise** caller set and blast radius — every reference, not a ranked candidate list — which embeddings structurally cannot do.

### Lane 3 — Persisted fact-graphs (SCIP / LSIF)

Instead of recomputing structure per session, **persist typed facts** about the code and query them like a database.

- **Meta's [Glean](https://engineering.fb.com/2024/12/19/developer-tools/glean-open-source-code-indexing/)** (OSS) — models code as facts where *predicates ≈ SQL tables*, queried in the **Angle** Datalog language over RocksDB. Meta's own blog lists *"RAG in AI coding assistants"* as a production use — proof that a structural fact-graph is a real context source, not a toy. *(That specific bullet is a single undetailed line — treat as indicative, not benchmarked.)*
- **[srctx](https://github.com/williamfzc/srctx)** (Go) — builds function-level def/ref + call graphs by consuming **LSIF/SCIP** indexes. Sits in [Sourcegraph's SCIP lineage](https://sourcegraph.com/blog/announcing-scip) (SCIP = LSIF successor, human-readable symbol IDs, exhaustive def/ref). Its real day-job is change-impact analysis — same graph, reframed as retrieval.

Why this lane matters for me: SCIP/LSIF indexers exist per-language and the artifact is portable and commit-able — the "team-shared graph" idea [[Codebase Memory MCP]] ships is this lane's native format.

### Lane 4 — Repo maps (the founding concept)

Older and simpler than any graph-query engine, and the direct ancestor of the token-reduction pitch:

- **[Aider's repo map](https://aider.chat/docs/repomap.html)** (Apache-2.0) — tree-sitter extracts def/ref, then a **PageRank-style ranking** over a dependency graph (files = nodes) selects the most important symbols that fit a **token budget** (`--map-tokens`, ~1k default). Documented evolution from an earlier **ctags** map to the current tree-sitter one. This is [[Progressive Disclosure]] for source code, shipped in 2023 — before most of the tools above existed.

### Lane 5 — Call-graph-as-context

Narrower than def/ref: capture *execution paths* — what actually calls what.

- **[Nuanced](https://github.com/nuanced-dev/nuanced-py)** — static analysis → enriched call graph → machine-readable JSON subgraph fed to the agent (`nuanced enrich file.py func`). Explicitly positioned *against* LSPs: *"LSPs index symbols statically; Nuanced captures execution paths."* ⚠️ **The OSS repo `nuanced-py` was archived 2026-03-05** (read-only); the concept survives commercially. Worth knowing as a *concept*, not adopting the dead OSS.

### Lane 6 — Living / hybrid context graphs

- **[Potpie](https://github.com/potpie-ai/potpie)** — indexes code **plus decisions, source history, team knowledge** into a persistent "living context graph" with a `potpie ui` explorer. ⚠️ It's a **graph + vector hybrid** (Neo4j + vector similarity for fuzzy lookup), not purely structural — a useful example of the dependency/knowledge-graph pattern, not a pure-structural exemplar.

### Lane 7 — Structural search tools (no graph, but not vector either)

- **[ast-grep](https://ast-grep.github.io/)** — Rust/tree-sitter structural search-lint-rewrite across 20+ languages **including C#**. Find code by *syntax pattern*, not string match or embedding. A precise agent tool for "find every call shaped like X".
- **[codesearch](https://github.com/flupkede/codesearch)** — an MCP server that fuses **BM25 + vector + tree-sitter AST chunking** via Reciprocal Rank Fusion — a concrete instance of the stacked-hybrid pattern.

### Lane 8 — Academic anchors

- [[RepoGraph]] — ICLR 2025, peer-reviewed. Repo-level code graph (nodes = def/ref lines, edges = invoke/contain), retrieval by **k-hop ego-graphs** (not vectors). Plug-and-play; reported +32.8% avg across four SWE agents on SWE-bench-Lite. The citable foundation this whole thesis was missing.

## ⚔️ The honest counter-thesis: grep beats graph (sometimes)

Structural-purism is wrong, and the research made me sharpen the claim. The non-graph lane has real wins:

- [[GrepRAG]] — the LLM generates ~10 `ripgrep` commands itself, executes them, re-ranks by Jaccard/BM25. **Index-free**, ~1/35th the retrieval latency of graph/vector RAG, and it *matched or beat* both on repo-level completion (self-reported preprint — see the note for the caveats).
- **The [Cline manifesto](https://cline.bot/blog/why-cline-doesnt-index-your-codebase-and-why-thats-a-good-thing)** and the confirmed fact that **Claude Code dropped its early RAG + local vector DB** because agentic search (grep + file navigation) worked better and dodged staleness/security/privacy — the exact *"code drifts out of sync"* argument I'd only had second-hand via [[Graphify]].

This directly conflicts with [[RepoGraph]]'s "graph gives +32.8%". The reconciliation is **task-dependent**, and it's the real lesson:

| Task | Winner | Why |
|------|--------|-----|
| Local line/chunk completion | **Agentic grep** (GrepRAG, Cline) | cheap, index-free, no staleness; the answer is nearby |
| Cross-subsystem edit, multi-file bug repair | **Structural graph** (RepoGraph, LSP) | needs the call/type graph the local window can't show |
| "Who calls X / blast radius of this change" | **LSP / def-ref graph** (Serena, SCIP) | exhaustive + type-accurate; grep gives false positives, vectors give guesses |
| Fuzzy "where is the auth logic" | **Vector / semantic** | intent match beats exact structure |

So the harness answer isn't "graph vs grep" — it's **grep for local completions, structural graph for changes that cross module boundaries, vectors only for fuzzy intent recall.** [[Codebase Memory MCP]] quietly agrees: it ships structural-first *and* bundled embeddings *and* graph-augmented grep.

## ✅ Language coverage — TS/JS is the sweet spot

Every tool above was verified on **TS/JS, Go, Python, Rust, C++** — exactly the languages with mature language servers. For my current work (JS/TS agents) this is the best-supported lane: `typescript-language-server` is solid, so [[Serena]] / [[MCP Language Server]] hand an agent real, type-resolved TS structure — the layer where vector RAG fails hardest. The tree-sitter tools ([[Codebase Memory MCP]], [[Graphify]], [[Understand Anything]]) cover JS/TS out of the box too (20–158 languages).

.NET/C# is the weak spot — no tool here was evidenced on Roslyn. The LSP bridges *should* wrap an OmniSharp/Roslyn server in principle (and `scip-dotnet` exists), but that's untested. Not the focus.

## 🛠️ Does wiring LSP-as-context into a harness actually help?

Mechanically yes, in specific shapes — concrete for a [[Claude Code]] agent on TS/JS:

- **Blast radius before an edit** — `find_referencing_symbols` gives the exact, type-resolved caller set, so a signature change lands on every real call site (not grep's false positives). Fewer broken multi-file changes.
- **No hallucinated APIs** — the agent reads a symbol's real definition/signature instead of inventing methods that don't compile.
- **Symbol-level edits + diagnostics loop** — [[Serena]]'s `replace_symbol_body` / `rename` beat line-range diffs; `diagnostics` closes an edit→error→fix loop without a full build.
- **Less context burned** — one symbol query vs reading whole files; the same ~99%-token logic as [[Codebase Memory MCP]] / [[Progressive Disclosure]].

**Worth wiring in when:** a medium+ typed codebase and the agent makes changes that cross files (refactors, signature edits, "who calls this"). **Skip when:** small repo, mostly greenfield, local edits — bare agentic grep is enough (the [[GrepRAG]] result). Caveat: no independent benchmark compares an LSP-MCP harness against plain Claude Code on the same tasks — the precision gain is mechanical, its magnitude unmeasured.

## ✍️ Takeaways

- **RAG ≠ RAG.** Pick the substrate: lexical (grep/BM25), semantic (vector), or structural (AST / LSP / SCIP / call-graph). For code, default to structural for anything cross-file.
- **LSP-as-context is the lane I was missing** — type-accurate, exhaustive, embedding-free, and it *edits* too ([[Serena]]).
- **Structure ≠ one thing.** Tree-sitter (syntactic), LSP (typed), SCIP/LSIF (persisted facts), call graphs (execution), repo maps (ranked+budgeted) are five different substrates with different accuracy/cost.
- **Grep is a serious competitor**, not a fallback — index-free beats stale-index for local work. See [[GrepRAG]].
- **Match retrieval to task**, and prefer verified mechanisms over vendor benchmark numbers (most performance figures here are self-reported).

## 📖 Further reading

- Existing lane-1 tools: [[Codebase Memory MCP]] · [[Graphify]] · [[Understand Anything]] · [[CocoIndex]]
- New: [[Serena]] · [[MCP Language Server]] · [[RepoGraph]] · [[GrepRAG]]
- Practical: [[Wiring Serena into a Codebase]] — bring-up HOWTO (install, Windows SAC DLL fix, monorepo timeout, pre-index)
- Doc-RAG contrast: [[LightRAG]] — KG-RAG for prose/docs, not code-structure tracing
- Memory analogue: [[HOMER — Structured Agent Memory]] — organize-then-navigate, "similarity ≠ causality"
- The shared principle: [[Progressive Disclosure]] · [[Context Engineering]] · [[Token Optimization for Claude Code]]
- Also on RAG architecture: [[AI Chatbots Architecture]]

## 🔗 Resources

- Survey (taxonomy): [Retrieval-Augmented Code Generation, arXiv:2510.04905](https://arxiv.org/abs/2510.04905)
- [Serena](https://github.com/oraios/serena) · [mcp-language-server](https://github.com/isaacphi/mcp-language-server)
- [Glean](https://engineering.fb.com/2024/12/19/developer-tools/glean-open-source-code-indexing/) · [SCIP](https://sourcegraph.com/blog/announcing-scip) · [srctx](https://github.com/williamfzc/srctx)
- [Aider repo map](https://aider.chat/docs/repomap.html) · [Nuanced](https://github.com/nuanced-dev/nuanced-py) · [Potpie](https://github.com/potpie-ai/potpie) · [ast-grep](https://ast-grep.github.io/)
- [RepoGraph, arXiv:2410.14684](https://arxiv.org/abs/2410.14684) · [GrepRAG, arXiv:2601.23254](https://arxiv.org/html/2601.23254v2)
- Grep-vs-RAG: [Cline: why we don't index your codebase](https://cline.bot/blog/why-cline-doesnt-index-your-codebase-and-why-thats-a-good-thing)

---
Template: [[templates/knowledge_note_info]]
