---
title: "RepoGraph"
date: 2026-07-08
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "rag", "coding-agents", "code-intelligence", "knowledge-graph", "research"]
type: knowledge-note
source_url: "https://arxiv.org/abs/2410.14684"
agent-created: true
summary: "RepoGraph (ICLR 2025) — a plug-and-play repository-level code graph (tree-sitter def/ref nodes, invoke/contain edges) retrieved via k-hop ego-graphs, not vectors. Reported +32.8% avg across four SWE agents on SWE-bench-Lite."
---

# RepoGraph

## 🗒️ Description

*RepoGraph: Enhancing AI Software Engineering with Repository-level Code Graph* — a peer-reviewed paper ([ICLR 2025, arXiv:2410.14684](https://arxiv.org/abs/2410.14684)). It's the **citable academic anchor** for the thesis in [[Structural Retrieval for Code]]: that a structural graph beats flat retrieval for repository-level coding tasks.

RepoGraph is a **plug-and-play, framework-agnostic module** — you drop it into an existing SWE agent and it adds a code-graph retrieval step. That's what makes it interesting beyond a benchmark number: it's designed to bolt onto a harness, not replace it.

## 🧩 How it works

- **Graph construction** — uses **tree-sitter** to parse the repo into ASTs. Every **node is a line of code**, classified as a *definition* or a *reference*. Edges are relational: `E_invoke` connects a definition to where it's used, `E_contain` nests definitions (class → method).
- **Retrieval = k-hop ego-graphs** — given a search term, it returns the **k-hop neighbourhood** centred on that node. This is graph *traversal*, explicitly **not** embedding similarity. Defaults to 1-hop (avg ~11.6 nodes / 37.1 edges); 2-hop tested (~54.5 / 89.9).
- The retrieved subgraph becomes structured context for the downstream agent — so the model sees *what connects to what*, not a pile of similar-looking chunks.

## 📒 Results (self-reported — read the caveats)

Plugged into four systems spanning two paradigms — **RAG, Agentless, AutoCodeRover, SWE-agent** — on **SWE-bench-Lite**:

- **+32.8% average relative improvement**; Agentless + RepoGraph resolved **29.67%** of issues (SOTA among open-source *at the time*).

⚠️ Flags for honesty (from the verification pass):
- The **32.8% average is inflated by a weak RAG baseline** (one system showed ~99.6% relative gain off a tiny base). Read it as a *self-reported average relative improvement*, not a clean across-the-board win.
- **"SOTA among open-source" was true Oct 2024** and is now stale versus 2026 SWE-bench leaderboards.
- SWE-bench-Lite is bug-repair; results may not transfer to line completion (where [[GrepRAG]] argues the opposite — see below).

## ⚔️ Tension with the grep camp

RepoGraph says *"graph helps, +32.8%"*. [[GrepRAG]] says *"index-free grep matches or beats graph/vector RAG"* on repo-level **completion**. The likely reconciliation is **task type**: graphs pay off on **multi-file bug repair / cross-subsystem edits** (RepoGraph's benchmark), while agentic grep wins on **local completion**. This is the core "match retrieval to task" lesson in [[Structural Retrieval for Code]].

## 📖 Further reading / watching

- Paper: [RepoGraph, arXiv:2410.14684](https://arxiv.org/abs/2410.14684) (ICLR 2025)
- [[Structural Retrieval for Code]] — the lane taxonomy this anchors
- [[GrepRAG]] — the opposing "grep is enough" result
- [[Codebase Memory MCP]] · [[Graphify]] — production tree-sitter graph tools in the same lane
- [[Progressive Disclosure]] · [[Context Engineering]] — the underlying context-shaping principle

---
Template: [[templates/knowledge_note_info]]
