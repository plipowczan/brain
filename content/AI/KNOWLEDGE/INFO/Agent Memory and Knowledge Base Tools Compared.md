---
title: "Agent Memory and Knowledge Base Tools Compared"
date: 2026-11-13
enableToc: true
openToc: true
tags: ["knowledge", "info", "compiled", "ai", "memory", "knowledge-base", "rag", "code-intelligence", "comparison", "agents"]
type: compiled-note
source: "research deep research — content/_raw/research-workspaces/ai-tools-review-2026-11/"
agent-created: true
status-checked: 2026-11-13
summary: "LightRAG, PageIndex, CocoIndex, OpenKB, OpenWiki, Super Brain, Graphify, Codebase Memory MCP and HORMA: four different jobs, when to pick which, and what none of them solves."
---

# Agent Memory and Knowledge Base Tools Compared

"Memory for agents" covers four different jobs, and most bad picks come from mixing them up. Before you pick a tool, know which job you have: answering questions over a pile of documents, keeping a written wiki current, giving a coding agent a map of the repo, or letting an agent learn from its own past runs. The nine tools below each do one of those jobs well and the others badly or not at all.

Every status line was checked against the repository, releases page or docs on **2026-11-13**. Benchmarks quoted in the individual notes are vendor-reported unless the note says otherwise.

## 🚀 The short answer

| If you need… | Pick | Runner-up |
|---|---|---|
| Q&A over a large, mixed document corpus, with relations between entities | [[LightRAG]] | [[CocoIndex]] + your own vector store |
| Q&A over a few long, structured PDFs (filings, manuals, standards) with page citations | [[PageIndex]] | [[LightRAG]] |
| Indexes that stay fresh while sources change daily | [[CocoIndex]] | re-running any of the others on a schedule |
| A human-readable wiki compiled from your documents | [[OpenKB]] (works, but stalled) | [[OpenWiki]] personal mode |
| Up-to-date docs about a codebase, for agents and people | [[OpenWiki]] | [[DOX — Self-Documenting AGENTS.md\|DOX]] by hand |
| A hand-run second brain with the decisions already made | [[Super Brain]] | this vault's own protocol ([[Brain]]) |
| A coding agent that queries structure instead of grepping files | [[Codebase Memory MCP]] | [[Graphify]] |
| One graph over code **and** docs, screenshots, papers | [[Graphify]] | — |
| An agent that learns how to organise its own long-run memory | [[HORMA — Structured Agent Memory\|HORMA]] (paper only) | — |

## 🧩 Four jobs, four families

1. **Retrieval over documents (RAG).** You keep the sources; the tool builds an index and finds the right passages at question time.
   - [[LightRAG]]: an LLM extracts an entity-relation graph at index time; queries combine graph and vector search.
   - [[PageIndex]]: no embeddings at all. It builds a table-of-contents tree over a long PDF and the model reasons its way down the tree.
   - [[CocoIndex]]: not a retriever but the plumbing under one. It keeps vector stores, graphs and tables in sync with changing sources and recomputes only the delta.
2. **Compiled wiki (the [[LLM Knowledge Bases|Karpathy LLM-wiki pattern]]).** An LLM reads sources once and writes persistent Markdown pages that it keeps updating.
   - [[OpenKB]]: a Python CLI that compiles documents into summary, concept and entity pages, with PageIndex underneath for long PDFs.
   - [[OpenWiki]]: LangChain's Node CLI that writes a wiki of a repository, now also of your connected sources, with claims tied to the source version.
   - [[Super Brain]]: no pipeline at all. A vault template plus skills that make Claude Code or Codex run the pattern for you.
3. **Code graph for coding agents.** It parses the repo deterministically and serves structure (calls, imports, routes) so the agent stops reading file after file.
   - [[Codebase Memory MCP]]: a single binary MCP server with a SQLite graph, a Hybrid LSP pass and Cypher-like queries.
   - [[Graphify]]: a CLI and skill that builds a graph from code (tree-sitter) and adds docs, images and media through an optional LLM pass.
4. **Experience memory.** The agent's own trajectories, organised so it can find what worked last time.
   - [[HORMA — Structured Agent Memory|HORMA]] (Duke + Snowflake AI Research): build a hierarchical memory tree first, then navigate it with a small RL-trained policy instead of similarity search. It is a research method, not a product. HORMA stands for Hierarchical Organize-and-Retrieve Memory Agent; the video that introduced it called it "HORMA", the name my note used until 2026-11-13.

## 📒 Side by side

| Tool | Job | What it stores | How it finds things | LLM cost to build | LLM cost per query | Status 2026-11-13 | Licence |
|---|---|---|---|---|---|---|---|
| [[LightRAG]] | Document RAG | entity-relation graph + vectors | graph + vector, local/global/mix | high (every chunk) | medium | active, v1.5.7 (2026-09-02), commits to 11-12 | MIT |
| [[PageIndex]] | Document RAG | tree index per long PDF | LLM walks the tree | low–medium | high (reasoning tokens every query) | active, v0.5.3 (2026-11-05) | MIT SDK; paid cloud features |
| [[CocoIndex]] | Fresh-index pipeline | whatever target you declare | your own retriever | your embeddings, only on the delta | n/a | active, v1.2.0 (2026-11-09) | Apache-2.0; paid Plus tier |
| [[OpenKB]] | Compiled wiki (docs) | Markdown wiki, OKF pages | read the wiki, PageIndex for long PDFs | high (one source touches 10–15 pages) | low–medium | **slowing**: last commit 2026-07-22, v0.4.5 | Apache-2.0 |
| [[OpenWiki]] | Compiled wiki (code, personal) | Markdown wiki + grounded claims | MCP search over the wiki | medium–high | low | active, v0.9.0 (2026-11-05) | MIT |
| [[Super Brain]] | Compiled wiki (template) | folders + `index.md` | the agent reads the index | per ingest | per query | active, no releases (commits to 10-26) | MIT |
| [[Codebase Memory MCP]] | Code graph | SQLite graph + bundled code embeddings | 14 MCP tools, Cypher subset | none (no LLM) | none on the server side | active, v0.12.1 (2026-10-16), commits to 11-13 | MIT |
| [[Graphify]] | Code + multimodal graph | `graph.json`, HTML, report | `/graphify query`, MCP, hooks | none for code; tokens for docs and media | low | active, v0.9.108 (2026-11-12) | Apache-2.0 (was MIT until 2026-07-22); paid Graphify Cloud |
| [[HORMA — Structured Agent Memory\|HORMA]] | Experience memory | hierarchical tree with provenance pointers | RL-trained navigation policy | learned by a failure loop | 1–22% of baseline tokens, depending on benchmark (paper) | **done**: one arXiv preprint (v1, 2026-06-10), no code or weights released | arXiv licence (paper only) |

## ☘️ When to choose which

### [[LightRAG]]: the default for document RAG
- **Pick it when** questions need connections across documents ("which suppliers appear in both contracts?") and you can afford an LLM pass over every chunk. It ships as a complete server with a web UI and many storage backends, and since v1.5 it parses multimodal documents itself.
- **Skip it when** the corpus is code (structural tools win there) or the budget can't cover indexing; changing the embedding model means re-indexing everything.

### [[PageIndex]]: when every answer must point to a page
- **Pick it when** you have long, structured documents and need traceable answers: the tree gives section and page references by design.
- **Skip it when** you have thousands of short, mixed documents. You pay reasoning tokens on every query, accuracy depends on the chat model, and the API broke several times in the 0.4–0.5 releases.

### [[CocoIndex]]: when freshness is the problem
- **Pick it when** your RAG goes stale because batch re-indexing lags the sources (Drive, S3, Kafka, a growing repo). Its core idea is incremental, memoised recomputation with lineage.
- **Skip it when** you want a turnkey app. It is a Python framework: you write the flow and run the target store, and the code MCP server lives in a separate repo.

### [[OpenKB]]: the packaged LLM wiki, now on pause
- **Pick it when** you want the Karpathy wiki pattern as a CLI today: `openkb add` compiles a source into pages that open in Obsidian, and the Skill Factory turns a slice of the wiki into an installable skill.
- **Watch out:** no maintainer commit since 2026-07-22, a 0.5.0 release candidate that never shipped, and VectifyAI's effort has visibly moved to PageIndex. The web UI has no auth by default. I would not start a new long-lived wiki on it.

### [[OpenWiki]]: docs for a codebase, kept current
- **Pick it when** the problem is agents (and new people) not knowing how a repo hangs together. It writes the wiki, wires `AGENTS.md`/`CLAUDE.md` to point at it, and a GitHub Action opens a docs PR once a day. Claims tied to source versions mean an update rewrites only what drifted.
- **Skip it when** you need a structural graph (who calls what); OpenWiki writes prose. Telemetry is on by default.

### [[Super Brain]]: a vault template, not software
- **Pick it when** you want to run the pattern by hand with sensible defaults: a check-in before ingest writes anything, a required "what the wiki could not answer" section in answers, a ranked lint report, a project layer.
- **Skip it when** you need search at scale; there is no index beyond `index.md`, and in October 2026 the maintainers deleted the limits file that used to say so.

### [[Codebase Memory MCP]]: the fastest code map
- **Pick it when** a coding agent burns context re-grepping the same modules. It is one binary with no API key, indexes a repo in seconds, and its `detect_changes` tool gives a blast radius from a git diff.
- **Watch out:** the `install` command writes MCP config, skills and hooks into up to 11 agents, so read what it changes. Hybrid LSP covers about 11 languages; the rest fall back to text matching.

### [[Graphify]]: one graph for code and everything around it
- **Pick it when** a project is more than code: papers, screenshots, design docs, recordings. Code parsing stays local and deterministic, every edge is tagged EXTRACTED / INFERRED / AMBIGUOUS, and one installer wires it into 20+ assistants.
- **Watch out:** the docs and media pass sends that content to your model provider. The project became a YC-backed company in 2026, so the README now leads with Graphify Cloud, and near-daily releases mean frequent behaviour changes.

### [[HORMA — Structured Agent Memory|HORMA]]: the idea to borrow, not a tool to install
- **Use it as a design rule:** organise experience at write time, keep a provenance pointer from every summary to the raw trajectory, and navigate a hierarchy (logarithmic steps) instead of scoring the whole pool (linear).
- It is a research result with no code or weights, so you can't reproduce it. The strong numbers come with Claude Sonnet 4.5 doing the reasoning; the small open navigator (Qwen 3.5 4B, trained with GRPO) trails it on LoCoMo (42.2 vs 51.6), though it posts the paper's best LongMemEval score (58.0) with Sonnet still managing the memory; the evaluations are small.
- The other eight tools store documents or code; none of them stores what the agent itself learned in the way HORMA does.

## ⚠️ What none of them does

- **Decide what is true.** Compiled wikis compound errors, since a wrong page today is a wrong answer for months, and graph extraction only labels its confidence. Nothing here checks a claim against ground truth; OpenWiki's grounded claims and HORMA's provenance pointers only make checking possible.
- **Forget on purpose or resolve contradictions.** None has a policy for expiring facts or for two sources that disagree. Freshness comes from re-running (CocoIndex does it incrementally), not from judgement.
- **Cover all four jobs.** A real setup needs at least two: a code map for the coding agent plus a document index or a wiki for everything else. None of them shares one store across those jobs.
- **Prove the gains independently.** Every token-saving and accuracy number in these READMEs and preprints is measured by the authors. Plan a small test on your own repo or corpus before you rely on one.
- **Handle multi-user permissions.** None ships per-user access control over what an agent may read. OpenKB's web UI is open by default; the rest assume one person on one machine.
- **Learn its own structure.** Apart from HORMA, the structure is hand-designed or fixed by the tool's schema; it doesn't improve from failed lookups.

## 🎨 How I use this

My own vault ([[Brain]]) is the hand-run version of the compiled-wiki family: an agent ingests sources into notes and keeps three indexes (vault map → catalog → link graph) as [[Progressive Disclosure]]. That covers knowledge. For code I lean on structural tools; this repository itself is indexed by [[Trail-code]] (formerly Graft, renamed in October 2026), and I keep [[Graphify]] installed as a skill for unfamiliar codebases. The comparison above mostly told me where the gaps are: nothing in my setup does document RAG over large PDFs, and if that need appears, [[PageIndex]] and [[LightRAG]] are the two I would test first.

## 📖 Further reading

- [[Structural Retrieval for Code]]: the LSP / graph / repo-map / grep lanes for code, and when each wins
- [[LLM Knowledge Bases]] · [[Karpathy Method]] · [[Open Knowledge Format (OKF)]]: the compiled-wiki pattern and its file format
- [[Spec-Driven + Self-Documenting]] · [[DOX — Self-Documenting AGENTS.md]]: hand-written alternatives to generated code docs
- [[Serena]] · [[MCP Language Server]] · [[Understand Anything]] · [[Qdrant]]: neighbours in the same category, see [[AI Tools Map]]
- [[Context Engineering]] · [[Progressive Disclosure]]

## 🔗 Resources

- Status data: deep research of 2026-11-13 over each project's repository, releases page and docs. The per-tool details are in each tool note's "Status check" box.
- Repos: [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) · [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) · [cocoindex-io/cocoindex](https://github.com/cocoindex-io/cocoindex) · [VectifyAI/OpenKB](https://github.com/VectifyAI/OpenKB) · [langchain-ai/openwiki](https://github.com/langchain-ai/openwiki) · [superhero-tech/super-brain](https://github.com/superhero-tech/super-brain) · [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) · [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)
