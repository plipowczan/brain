---
title: "SkillWeaver — Compositional Skill Routing"
date: 2026-07-08
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "agents", "mcp", "token-optimization", "retrieval", "context-engineering", "orchestration"]
type: knowledge-note
source: "_raw/processed/2026-07-08_VentureBeat-skillweaver-tool-routing.md"
source_url: "https://venturebeat.com/orchestration/new-alibaba-ai-framework-skips-loading-every-tool-cutting-agent-token-use-99"
author: "Ben Dickson (VentureBeat)"
published: 2026-07-02
agent-created: true
summary: "SkillWeaver (Alibaba) — decompose→retrieve→compose tool routing over huge MCP libraries; Skill-Aware Decomposition feedback loop; ~1,160 vs 884,000 tokens/query (99.9% cut)."
---

# SkillWeaver — Compositional Skill Routing

## 🗒️ Description

VentureBeat report (Ben Dickson, July 2026) on **SkillWeaver**, a tool-routing framework from **Alibaba** researchers, plus its core innovation **Skill-Aware Decomposition (SAD)**.

The problem it attacks: an enterprise agent may sit on **hundreds to thousands of tools/skills** (e.g. a whole Model Context Protocol (MCP) server ecosystem). Stuffing that entire library into the prompt so the LLM can "pick the right tool" overwhelms the context window, burns hundreds of thousands of tokens, and — counter-intuitively — routes *worse*, not better. SkillWeaver replaces load-everything with **retrieve-and-route**: decompose the task, retrieve a shortlist of candidate tools per sub-task, then compose them into an execution graph.

Headline result: accuracy up **and** context consumption down from an estimated **884,000 tokens → ~1,160 tokens per query — a 99.9% reduction**. Same index-first / structure-beats-search principle as [[Progressive Disclosure]] and [[HOMER — Structured Agent Memory]], applied to *tool selection* rather than knowledge or memory.

## 🚀 The main message

> The granularity of **task decomposition** — not model size — is the biggest bottleneck to accurate tool retrieval. Don't show the agent every tool; teach the decomposition to speak the tools' vocabulary, then retrieve only the handful that fit.

A "skill" here = a **modular, reusable tool specification written as structured natural-language documentation** — the same shape as Anthropic's [[Agent Skills]]. Real-world queries are **compositional**: *"Download the dataset, transform it, and create visual reports"* needs an API client **+** a data processor **+** a visualizer sequenced together. Frameworks that treat routing as single-skill / one-shot selection can't serve this.

## 🧩 How it works — Decompose → Retrieve → Compose

1. **Decompose** — an LLM task-decomposer splits the complex query into a sequence of atomic sub-tasks, each needing exactly one skill.
2. **Retrieve** — an embedding model (`all-MiniLM-L6-v2`, FAISS index) compares each sub-task against the skill library and pulls a shortlist of top candidates per step (e.g. `api-client` / `http-fetch` for "download").
3. **Compose** — a planner checks **inter-skill compatibility** (does tool A's output feed tool B's input?) and wires the chosen skills into a **Directed Acyclic Graph (DAG)**. The DAG maps dependencies, so independent branches can run in parallel.

### The key trick — Skill-Aware Decomposition (SAD)

LLMs draft **generic** step descriptions that don't match the **specific technical vocabulary** of the real tools. SAD is a **feedback loop** that fixes the vocabulary mismatch:

- LLM drafts an initial plan.
- A **preliminary search** finds loosely matching skills.
- Those retrieved skills are fed **back into the LLM as hints**.
- The LLM **rewrites its decomposition** so granularity and wording align with tools that actually exist.

This iterative retrieve-then-rewrite shape is the same [[Loop Engineering]] pattern seen in [[HOMER — Structured Agent Memory]]'s contrastive loop — draft, probe reality, correct against what came back.

## 📒 Results (CompSkillBench)

Custom benchmark: **300 multi-step queries**, **2,209 real skills** scraped from the public MCP (Model Context Protocol) ecosystem across 24 categories (cloud, finance, databases…). Core engine: **Qwen2.5-7B-Instruct** decomposer + MiniLM/FAISS retriever.

| Setup | Decomposition accuracy |
|---|---|
| Vanilla decomposition, 7B, **no SAD** | 51.0% |
| **+ SAD**, 7B | 67.7% |
| **+ SAD**, Qwen-Max | 92% |
| ReAct-style agent loop | **0%** (collapses plans into isolated actions) |

- On **hard** tasks (4–5 distinct skills), SAD improved accuracy by **50%**.
- **Bigger ≠ better when unguided:** a 14B model *underperformed* the 7B in the vanilla setup — it over-decomposed into microscopic, useless steps. SAD's retrieved-tool hints anchored it back to reality. **Aligning to tool vocabulary beat paying for a larger model.**
- **LLM-Direct baseline** (all tools stuffed into a Qwen-Max prompt): near-perfect task breakdown, but only retrieved the right tool **category 21.1%** of the time when flooded with options → flooding the context fails.
- **Token savings:** ~884,000 → **~1,160 tokens/query (99.9% cut)** → lower API cost, faster responses.

## ☘️ Why it matters / how I'd apply it

- **Retrieve, don't load.** The same lesson my vault keeps hitting — [[Progressive Disclosure]] for KBs, [[HOMER — Structured Agent Memory]] for memory, [[Codebase Memory MCP]] for code (~99% fewer tokens each). SkillWeaver is the **tool-catalog** instance of the pattern: index the tools, fetch on demand, never dump the library. Directly relevant as MCP (Model Context Protocol) tool counts explode in [[Agentic Systems]].
- **Vocabulary alignment > model size.** Cheap decomposer + good retrieval hints beats an expensive model flying blind. A [[Token Optimization for Claude Code]] and cost lever, not just an accuracy one.
- **Reproducible today.** No source released, but built on off-the-shelf parts: MiniLM/BGE embeddings, FAISS, LangChain / LlamaIndex / raw Python. Indexing all 2,209 skills took **15 s**; per-query retrieval adds **<15 ms**.
- **Retrieval is good, not perfect.** A bi-encoder gets the right tool into the **top-10 ~70%** of the time but ranks it **#1 only ~37%** → add a **cross-encoder / LLM reranker** over the top-10.

## ⚠️ Limitations

- **No error recovery.** SkillWeaver only *plans* the DAG. If an API call fails at step 2, the whole chain breaks — you must bolt on your own retry / fallback / error-handling for production. (Contrast with self-healing [[Loop Engineering]] loops.)
- **Source code unreleased** — paper + prompt templates only.
- Single benchmark (CompSkillBench), authors' own; results await independent replication — treat as a single-source claim until reproduced.

## 📖 Further reading

- Source: [New Alibaba AI framework skips loading every tool, cutting agent token use 99%](https://venturebeat.com/orchestration/new-alibaba-ai-framework-skips-loading-every-tool-cutting-agent-token-use-99) — VentureBeat, Ben Dickson, 2026-07-02
- [[Progressive Disclosure]] — index-first context priming; the parent pattern
- [[HOMER — Structured Agent Memory]] — organize-then-retrieve, same loop shape for memory
- [[Codebase Memory MCP]] — ~99% token cut via a code knowledge graph instead of file dumps
- [[Context Engineering]] — managing the LLM attention budget
- [[Token Optimization for Claude Code]] — the cost lens
- [[Agent Skills]] — skills as reusable natural-language tool specs
- [[Loop Engineering]] — feedback loops as the design unit (SAD is one)

---
Template: [[templates/knowledge_note_info]]
