---
title: "HOMER — Structured Agent Memory"
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
summary: "HOMER (Duke + Snowflake) — organize-then-retrieve agent memory: build a hierarchical memory tree first, navigate it instead of RAG. ~22% of baseline tokens."
---

# HOMER — Structured Agent Memory

## 🗒️ Description

Walkthrough (Discover AI / @code4AI) of the June 2026 preprint **"Organize then Retrieve: Hierarchical Memory Navigation for Efficient Agents"** by **Duke University + Snowflake AI Research**. The method is called **HOMER** — *Hierarchical Organize-then-retrieve Memory agent*.

The core argument: every agent memory system today is built backwards. The dogma is **"store everything, retrieve later"** — because you never know what a future task needs. HOMER says that is wrong. Instead of optimizing *retrieval* over an unorganized pile of experiences, optimize the **organization of memory before retrieval ever happens**.

This connects directly to my vault's own pattern — [[Progressive Disclosure]] (index-first, structure beats search) — applied to long-horizon agent memory rather than knowledge bases.

## 🚀 The main message

> Stop asking *how to retrieve* information. Start asking *how experiences should be organized* before any retrieval happens.

The two current solutions both lose:
- **Compaction / compression** → loses information; you don't know what the future needs, so it's a probability gamble.
- **Retrieval (RAG)** → relies on vector cosine similarity. But **similarity ≠ causality** — over a long reasoning chain, nearness in vector space is not a memory representation.

HOMER's alternative: **organize first, then navigate.**

## 🧩 How it works

Two decoupled stages (decoupling matters — it keeps the RL credit-assignment problem tractable).

### Stage 1 — Structured memory construction (the actual innovation)

- Experiences are organized into a **hierarchical tree** (root → project → deployment → logs → …).
- Summaries stay **linked to the raw trajectory** via a **provenance pointer** — compaction is *recoverable*, so no unverifiable hallucination and debugging stays possible. Always keep a verifiable link to the original ground-truth data.
- Memory becomes an **explicit state variable** (a "memory workspace" `F_t`) in a *memory-augmented MDP*, not something hidden inside the context window. Agent now runs **two coupled dynamical systems**: the environment, and an independently-evolving memory.
- Organization is **not hand-designed** — it's learned by a loop (see below).

### The contrastive failure loop (how the structure learns)

Compare raw history **H** against structured memory **H′** on each task:
- **Exogenous failure** — H succeeds, H′ fails → the construction *removed something important* (information loss).
- **Endogenous failure** — H fails, H′ succeeds → the organization *improved reasoning*; a useful abstraction was discovered (skill discovery).

An LLM then diagnoses the **delta** between H and H′ in natural language ("missing entity tracking", "too much log noise", "lost the causal chain", "poor temporal grouping"). This is a **textual gradient descent**: the verbal diagnosis becomes new **memory-construction rules** burned into a `memory.md` / `skill.md` file — a prompt update to the "memory architect" instruction `P_M`. Not numerical RL (credit assignment is too sparse), but the same self-improving shape.

Every loop optimizes both **memory content** and **memory structure** itself. The presenter frames this as **"loop engineering"** — think at the systemic/self-improving level, not the single-prompt level. See [[Loop Engineering]].

### Stage 2 — Navigation-based retrieval

- Retrieval is reframed as a **policy** over a memory hierarchy: from "which memory is closest?" to "**which path should I traverse next?**"
- A tiny **Qwen 4B** model is post-trained with **GRPO** (reinforcement learning) to emit a sequence of **bash tokens** — retrieval runs as grounded file-system operations on the execution path.

## ☘️ Why it's token-efficient

The whole point. Classic RAG evaluates relevance across the entire pool → **O(N)**.

With a hierarchy of branching factor **B** and depth **D**: `N ≈ B^D`, so `D ∝ log_B(N)`. The agent makes only a **small number of navigation decisions** (logarithmic, not linear). A 5-level hierarchy encodes 100,000 experiences cheaply.

## 📒 Results

Tested on three benchmarks: **ALFWorld, LoCoMo, and a long-memory evaluation**. HOMER is the last row, bold across most numbers.

- Outperforms baselines (mem0, embedding retrieval) on LoCoMo and long-memory eval.
- Improves performance under **constrained context budgets**.
- **Generalizes to unseen tasks** — because diagnosing *why* a delta exists is transferable knowledge.
- Headline: in long-conversation / multi-hour agent tasks, needs **at most ~22% of the baseline token usage** of other models → cheaper and faster.

Caveat from the presenter: raw numerical results are "not really that okay" on some splits — the win is token efficiency + generalization, not a clean sweep.

## ✍️ Takeaways

- **Organize before you retrieve.** Memory quality is set at write time, not read time.
- **Keep provenance pointers** — compress, but stay recoverable to ground truth.
- **Failures are training signal.** Contrastive H vs H′ analysis turns every failure into a natural-language rule.
- **Loop engineering > prompt engineering** — optimize the self-improving system, not the single prompt. ([[Loop Engineering]], [[Harness Engineering]])
- A 4B model + RL is enough for the retriever when the structure does the heavy lifting.

## 📖 Further reading / watching

- Source video: [Structured AI Memory (Faster, Less Token)](https://www.youtube.com/watch?v=sMX5bY3OvJM) — Discover AI, 29:42
- Paper: *Organize then Retrieve: Hierarchical Memory Navigation for Efficient Agents* (Duke + Snowflake AI Research, June 10 2026)
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
