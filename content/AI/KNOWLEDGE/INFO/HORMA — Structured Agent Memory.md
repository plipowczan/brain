---
title: "HORMA — Structured Agent Memory"
date: 2026-06-25
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "agents", "memory", "context-engineering", "rag", "token-optimization"]
type: knowledge-note
source: "_raw/processed/2026-06-25_yt-sMX5bY3OvJM_structured-ai-memory-faster-less-token.md"
source_url: "https://www.youtube.com/watch?v=sMX5bY3OvJM"
video_id: "sMX5bY3OvJM"
channel: "Discover AI"
duration: "29m42s"
published: 2026-06-12
transcription: captions
agent-created: true
agent-reviewed: 2026-11-13
aliases: ["HOMER", "AI/KNOWLEDGE/INFO/HOMER — Structured Agent Memory"]
summary: "HORMA (Duke + Snowflake, arXiv 2606.11680; the video called it HOMER) is organize-then-retrieve agent memory: build a hierarchical memory tree first, then navigate it instead of using RAG. 3–22% of baseline tokens on LoCoMo; no code released."
status-checked: 2026-11-13
project-status: done
---

# HORMA — Structured Agent Memory

> [!info] Status check 2026-11-13 — done
> **Verdict:** A single static preprint (arXiv v1, 2026-06-10) with no revision, code or follow-up release in five months.
> **Published:** arXiv v1, 2026-06-10 (the only version) · **code / weights:** none released · **licence:** arXiv non-exclusive distribution licence 1.0
> **Source:** https://arxiv.org/abs/2606.11680 — **name:** the paper calls the method **HORMA** (Hierarchical Organize-and-Retrieve Memory Agent); "HOMER" and the expansion above came from the video transcript. The paper title is 'Organize then Retrieve: Hierarchical Memory Navigation for Efficient Agents'.
> **Changed since this note:** Nothing new was published: no v2, no code, no weights. Corrections to this note: the method is HORMA, not HOMER; the authors are Hao-Lun Hsu (Duke) and Nikki Lijing Kuang, Boyi Liu, Zhewei Yao and Yuxiong He (Snowflake AI Research); the navigator is Qwen 3.5 4B trained with GRPO, while the headline results use Claude Sonnet 4.5; the long-memory benchmark is LongMemEval; token use is 3–22% of baseline on LoCoMo and 1–16% on LongMemEval.

## 🗒️ Description

Walkthrough (Discover AI / @code4AI) of the June 2026 preprint **"Organize then Retrieve: Hierarchical Memory Navigation for Efficient Agents"** ([arXiv 2606.11680](https://arxiv.org/abs/2606.11680), v1 of 2026-06-10) by **Hao-Lun Hsu (Duke University) and Nikki Lijing Kuang, Boyi Liu, Zhewei Yao and Yuxiong He (Snowflake AI Research)**.

> [!note] HORMA, not HOMER (checked against the paper, 2026-11-13)
> The video calls it **HOMER**, "Hierarchical Organize-then-retrieve Memory agent", and this note carried that name until 2026-11-13. The paper's own name is **HORMA**, "Hierarchical Organize-and-Retrieve Memory Agent"; "HOMER" stays as an alias. As of 2026-11-13 the paper is still a single v1 preprint, not peer-reviewed, with **no code, weights or data released**.

The core argument: every agent memory system today is built backwards. The dogma is **"store everything, retrieve later"** — because you never know what a future task needs. HORMA says that is wrong. Instead of optimizing *retrieval* over an unorganized pile of experiences, optimize the **organization of memory before retrieval ever happens**.

This connects directly to my vault's own pattern — [[Progressive Disclosure]] (index-first, structure beats search) — applied to long-horizon agent memory rather than knowledge bases.

## 🚀 The main message

> Stop asking *how to retrieve* information. Start asking *how experiences should be organized* before any retrieval happens.

The two current solutions both lose:
- **Compaction / compression** → loses information; you don't know what the future needs, so it's a probability gamble.
- **Retrieval (RAG)** → relies on vector cosine similarity. But **similarity ≠ causality** — over a long reasoning chain, nearness in vector space is not a memory representation.

HORMA's alternative: **organize first, then navigate.**

## 🧩 How it works

Two decoupled stages (decoupling matters — it keeps the RL credit-assignment problem tractable).

### Stage 1 — Structured memory construction (the actual innovation)

- Experiences are organized into a **file-system-like hierarchy** (the video's example: root → project → deployment → logs → …). Both modules are tool-using agents that work on this workspace through file-system operations and Bash tools.
- Summaries stay **linked to the raw trajectory** via a **provenance pointer** — compaction is *recoverable*, so no unverifiable hallucination and debugging stays possible. Always keep a verifiable link to the original ground-truth data.
- Memory becomes an **explicit state variable** (a "memory workspace" `F_t`) in a *memory-augmented MDP*, not something hidden inside the context window. Agent now runs **two coupled dynamical systems**: the environment, and an independently-evolving memory.
- Organization is **not hand-designed** — it's learned by a loop (see below).

### The contrastive failure loop (how the structure learns)

Compare raw history **H** against structured memory **H′** on each task:
- **Exogenous failure** — H succeeds, H′ fails → the construction *removed something important* (information loss).
- **Endogenous failure** — H fails, H′ succeeds → the organization *improved reasoning*; a useful abstraction was discovered (skill discovery).

An LLM then diagnoses the **delta** between H and H′ in natural language ("missing entity tracking", "too much log noise", "lost the causal chain", "poor temporal grouping"). This is a **textual gradient descent** (the paper's own term): the verbal diagnosis becomes new **memory-construction rules**, a growing library of memory-management skills ("recursive skill refinement"), which the presenter pictures as a `memory.md` / `skill.md` file — a prompt update to the "memory architect" instruction `P_M`. Not numerical RL (credit assignment is too sparse), but the same self-improving shape.

Every loop optimizes both **memory content** and **memory structure** itself. The presenter frames this as **"loop engineering"** — think at the systemic/self-improving level, not the single-prompt level. See [[Loop Engineering]].

### Stage 2 — Navigation-based retrieval

- Retrieval is reframed as a **policy** over a memory hierarchy: from "which memory is closest?" to "**which path should I traverse next?**"
- A lightweight retriever, **Qwen 3.5 4B**, is post-trained with **GRPO** (reinforcement learning; 4 NVIDIA H200 GPUs) to navigate with **Bash tools and terminal actions**: retrieval runs as grounded file-system operations on the execution path. The reward is evidence-grounded, so training needs ground-truth evidence labels; the retriever was trained only on the LoCoMo training split.
- Important for reading the results: the **main results use Claude Sonnet 4.5** as the backbone for reasoning, memory management *and* retrieval in every compared method. The Qwen retriever is a separate variant (see below).

## ☘️ Why it's token-efficient

The whole point. Classic RAG evaluates relevance across the entire pool → **O(N)**.

With a hierarchy of branching factor **B** and depth **D**: `N ≈ B^D`, so `D ∝ log_B(N)`. The agent makes only a **small number of navigation decisions** (logarithmic, not linear). A 5-level hierarchy encodes 100,000 experiences cheaply.

## 📒 Results

Tested on three benchmarks: **ALFWorld** (134 tasks, embodied/household), **LoCoMo** and **LongMemEval** (long conversations), all under context budgets the authors set. HORMA is the last row, bold across most numbers. Numbers below are from the paper (Claude Sonnet 4.5 backbone unless noted):

- **ALFWorld success:** 56.7% / 73.9% at the small / large context limit, vs 17.9% / 34.3% for plain truncation. Baselines there: truncation, sliding window, embedding similarity, ReSum, ACON, Fold, HiAgent.
- **LoCoMo** (LLM-as-judge): 51.6 vs 32.2 for truncation; **LongMemEval**: 55.9 vs 34.1. On these it also beats the external-memory systems **A-MEM** and **Mem0** (LoCoMo 30.4 / 43.4) and embedding retrieval (37.8).
- **Token use:** 3.07–22.17% of the baselines' tokens on LoCoMo and 1.24–16.19% on LongMemEval. That is where the headline "**at most 22.17% of baseline token usage**" comes from → cheaper and faster.
- **The small retriever:** the RL-trained Qwen 3.5 4B lifts LoCoMo from 32.6 to 42.2 (still below Sonnet's 51.6) and transfers zero-shot to ALFWorld (64.9) and LongMemEval (58.0, the best LongMemEval score in the paper), with fewer retrieval calls. The memory manager in those runs is still Sonnet 4.5.
- **Generalizes to unseen tasks** — because diagnosing *why* a delta exists is transferable knowledge.

Caveats: the presenter said raw numbers are "not really that okay" on some splits, and the paper agrees in places. On LoCoMo, giving the model the **whole history with no context limit scores 55.9, above HORMA's 51.6**; the win is under constrained budgets, at a fraction of the tokens. The evaluations are small (ALFWorld 134 tasks; LoCoMo has 10 conversations, 7 for training and 3 for test), the strong results lean on a closed model, and with nothing released you can't reproduce it.

## ✍️ Takeaways

- **Organize before you retrieve.** Memory quality is set at write time, not read time.
- **Keep provenance pointers** — compress, but stay recoverable to ground truth.
- **Failures are training signal.** Contrastive H vs H′ analysis turns every failure into a natural-language rule.
- **Loop engineering > prompt engineering** — optimize the self-improving system, not the single prompt. ([[Loop Engineering]], [[Harness Engineering]])
- A 4B model + RL gets surprisingly close as the *retriever* when the structure does the heavy lifting (best on LongMemEval, behind Sonnet 4.5 on LoCoMo and ALFWorld). The memory *manager* in the paper is still a frontier model.
- Nothing to install: to use the idea today, build the file-system memory tree yourself and let an agent walk it with shell commands, or use maintained memory systems such as Mem0 or A-MEM (the paper's own baselines).

## 📖 Further reading / watching

- Source video: [Structured AI Memory (Faster, Less Token)](https://www.youtube.com/watch?v=sMX5bY3OvJM) — Discover AI, 29:42
- Paper: [*Organize then Retrieve: Hierarchical Memory Navigation for Efficient Agents*](https://arxiv.org/abs/2606.11680) (Hsu, Kuang, Liu, Yao, He; Duke + Snowflake AI Research, arXiv v1 2026-06-10) · [HTML version](https://arxiv.org/html/2606.11680v1)
- [[Agent Memory and Knowledge Base Tools Compared]] — where this method sits next to the installable memory and KB tools
- [[Progressive Disclosure]] — same index-first / structure-beats-search principle, applied to KBs
- [[Structural Retrieval for Code]] — the "similarity ≠ causality" argument applied to code retrieval (structural beats vector)
- [[Context Engineering]] — managing the attention budget of LLM agents
- [[Loop Engineering]] — self-improving loops over single prompts
- [[Harness Engineering]] — optimizing the agent runtime, where this memory layer lives
- [[Agent Skills]] — the skill-evolution side of the loop
- [[Token Optimization for Claude Code]] — the token-cost lens
- [[SkillWeaver — Compositional Skill Routing]] — same draft→probe→rewrite loop, applied to tool retrieval over huge MCP libraries
- [[Swarm Research — Orchestrating Coding Agents]] — same channel; on-disk (Git work-tree) memory for an agent *swarm* rather than a single agent's memory tree

---
Template: [[templates/knowledge_note_info]]
