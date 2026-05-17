---
title: "DELEGATE-52"
date: 2026-04-29
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "llm", "benchmark", "delegated-work", "vibe-coding", "reliability", "evaluation"]
type: knowledge-note
source: "_raw/inbox/2604.15597v1.pdf"
agent-created: true
summary: "Microsoft Research benchmark (arXiv 2604.15597) — frontier LLMs corrupt 25% of a document after 20 delegated edits across 52 domains; Python is the only domain where models are ready"
---
# DELEGATE-52

A Microsoft Research benchmark published April 17, 2026 (Philippe Laban, Tobias Schnabel, Jennifer Neville). Measures LLM readiness for **delegated work** — a paradigm where a user hands an agent long sequences of document edits without reviewing each change (vibe coding of this kind, but for 52 professions).

Headline result: even frontier models (Gemini 3.1 Pro, Claude 4.6 Opus, GPT 5.4) corrupt on average **25% of document content** after 20 interactions. Average degradation across all 19 models is ~50%. The best model is "ready" (RS@20≥98%) in only **11 of 52 domains**.

## 🗒️ Description

### 🧩 Research problem

Delegated work is an interaction where a knowledge worker oversees an LLM doing a task, but **lacks the time/expertise to review** every change. That requires trust that the model won't introduce silent errors (deletions, hallucinations, side-effect edits — overlaps with [[Karpathy Skills]] pitfall #3).

DELEGATE-52 asks directly: for how many professions are today's LLMs really ready for unsupervised delegation?

### 🧩 Methodology: round-trip relay

A research innovation that allows evaluation without reference solutions — every task is **invertible**: a forward instruction `σ(s)` and its inverse `σ⁻¹`. Applying both in order should reconstruct the original document. You measure `sim(s, σ⁻¹(σ(s)))` — perfect model = 1.0.

Round-trips composed sequentially form a **relay**:

```
ŝ_k = (σ₁ ∘ σ₁⁻¹ ∘ ... ∘ σ_n ∘ σ_n⁻¹)(s)
RS@k(s) = sim(s, ŝ_{k/2})
```

20 interactions = 10 round-trips. Each edit is an independent single-turn session (no conversation memory between steps — the model gets fresh context every time).

Backtranslation comes from machine translation evaluation (Sennrich 2015), here repurposed for long-horizon delegated interaction.

### 🧩 Benchmark construction

- **52 professional domains** across 5 categories:
  - **Code & Configuration** (11): Python, Docker, Makefile, JSON, DBSchema, DNS, Graphviz, Filesystem, Infra, Malware, Translation
  - **Science & Engineering** (11): Aviation, Circuit, Crystal, MathLean, Molecule, Protein, Quantum, Robotics, Satellite, StarCatalog, Weather
  - **Creative & Media** (11): AudioSyn, Fiction, FontEng, LaTeX, MusicSheet, OBJ3D, Screenplay, Slides, SRT, Subtitles, Vector, Weaving
  - **Structured Records** (11): Accounting, Calendar, EDIFACT, EDI, Emails, Genealogy, Geodata, Geotrack, HamRadio, LibCatalog, Spreadsheet, Treebank
  - **Everyday** (8): Chess, EarnCall, FoodMenu, JobBoard, Landmarks, Playlist, Recipe, Transit
- **310 work environments** total — each is a seed document (~3-5k tokens) + **distractor documents** (~10k tokens) + 5-10 pairs of invertible edit tasks
- Each domain has a **domain-specific parser** (text → structural representation) and a weighted scoring function. Generic LLM-as-a-judge fails — captures at most 25% of the structural metric's variance

### 🧩 Main results (RS@20, % after 20 interactions)

| Model | RS@20 | Status |
|-------|------:|--------|
| Gemini 3.1 Pro | 80.9 | Top (ready in 11/52 domains) |
| Claude 4.6 Opus | 73.1 | Frontier (ready in 5/52) |
| GPT 5.4 | 71.5 | Frontier (ready in 4/52) |
| GPT 5.2 | 66.1 | |
| Claude 4.6 Sonnet | 66.0 | |
| Kimi K2.5 | 64.1 | |
| GPT 5.1 | 60.5 | |
| Grok 4 | 59.3 | |
| GPT 5 | 48.3 | |
| Gemini 3 Flash | 35.8 | |
| GPT 4o | 14.7 | Catastrophic |
| GPT 5 Nano | 10.0 | Catastrophic |

**Catastrophic corruption (RS≤80%) in 80%+ of model×domain combinations.**

### 🧩 Python as outlier

Python is **the only domain** where most tested models (17/19) achieve lossless manipulation. A result that lines up with (Pimenova et al., 2025) on delegated coding workflows. That explains why vibe coding "works" in practice — we mostly test it on Python. The rest of the professions tank.

Practical implication: don't extrapolate your positive experience with [[Vibe Coding]] / [[Claude Code]] / [[Cursor]] to other domains. Your success in Python coding ≠ model readiness for delegation in accounting, music notation, or 3D objects.

### 🧩 Key effects (ablations)

#### Tool use does NOT help
| Model | Direct (no tools) RS@20 | Agentic (tools) RS@20 | Cost overhead |
|-------|------------------------:|----------------------:|--------------:|
| GPT 5.4 | 71.5 | **68.3** | 2.1× input, 1.0× $ |
| GPT 5.2 | 66.1 | **63.4** | 3.2× input, 1.4× $ |
| GPT 5.1 | 60.5 | **52.1** | 2.0× input, 1.1× $ |
| GPT 4.1 | 49.5 | **40.4** | 4.6× input, 2.2× $ |

Models prefer `write_file` over `execute_code` (45% vs file write for GPT 5.4, worse for weaker models). Tool use adds cost and hurts quality — strongly counterintuitive.

#### Document size effect (GPT 5.4)
| Size | RS@20 |
|-----:|------:|
| 1k tokens | 91.4 |
| 4k tokens | 79.0 |
| 10k tokens | 59.9 |

Bigger documents = more degradation, gap widens with more interactions.

#### Length of interaction — no plateau
GPT 5.4 after 100 interactions: 58.7 (vs 71.5 after 20). **Monotonic decline, no plateau** — degradation keeps accumulating.

#### Distractor files
Removing distractors consistently improves scoring by 4-7 pp. The model gets distracted by irrelevant files in the workspace.

#### Image editing — worse than text
9 image generation models tested across 6 visual work environments. Best score: 28-30% (vs 70-80% for text). After 2 interactions no model exceeds 65% — worse than text models after 20.

### 🧩 Critical errors

Frontier models introduce sparse but severe errors — in 86% of relays for Gemini 3.1 Pro / Claude 4.6 Opus, at least one critical error appears (deletion, replacement of entire sections). The errors are silent and compound across iterations.

## ✍️ Implications for my practice

This study changes my risk model for [[Vibe Coding]] and [[Claude Code]] outside Python.

1. **[[Brain]] (digital garden)** — my work on markdown notes is exactly this type of delegated work. Every `/ingest`, `/enhance`, `/compile` is a round-trip. I don't know by how much, but I'm probably silently corrupting content in long sessions. An argument for **more frequent commits** and **diff review** instead of trust-by-default.
2. **Client projects in [[PLSoft]]** outside Python — e.g., SQL migrations, DOCX generation, JSON configs — candidates for silent corruption. Until now I treated these as Python-grade safe.
3. **[[Archon]] as response** — workflow gates with deterministic nodes (tests, type-check) between AI nodes limit drift. A `bash:` node after each `prompt:` node adds the verification the paper flags as missing.
4. **Tool use overhead** — my "turn on every tool" heuristic is wrong. For document edits it's better to leave the model in direct mode than to give it an agentic harness if it doesn't use code execution effectively.
5. **Distractor effect** — a context window full of unrelated files (e.g., an open IDE with 30 tabs) really does hurt. Argues for small isolated worktrees ([[Archon]]) instead of monorepo agent sessions.

## 🔗 Links

- arXiv: https://arxiv.org/abs/2604.15597
- Code: https://github.com/microsoft/DELEGATE52
- Dataset: https://huggingface.co/datasets/microsoft/DELEGATE52
- Microsoft Research authors: Philippe Laban, Tobias Schnabel, Jennifer Neville

## 🧩 Related patterns in benchmarking

- **[[Skills 2.0 Testing]]** — eval-driven skill development, similar approach (4-agent pipeline, but focused on Claude Skills)
- **HumanEval / SWE-Bench** — Python coding benchmarks; these gave an optimistic picture, DELEGATE-52 shows that Python was the outlier
- **MMLU / MT-Bench** — knowledge benchmarks, don't capture degradation across long workflows

## 📖 Further reading

- Pimenova et al. (2025) — delegated coding workflows
- Hong et al. (2025), Allamanis et al. (2024) — backtranslation as an evaluation technique for LLM consistency
- Sennrich et al. (2015) — backtranslation origin (machine translation)
- [[Karpathy Skills]] — 4 LLM-coder pitfalls; pitfall #3 (side-effect edits) and #4 (weak success criteria) are exactly what DELEGATE-52 quantifies
- [[Vibe Coding]] — paradigm built on delegated work; the paper questions its scope outside Python
- [[Agentic Coding]] — broader context for agent-driven workflows
- [[Context Engineering]] — the distractor effect shows the value of a clean context
- [[Harness Engineering]] — tool use does NOT help in delegated editing; important info for harness design
- [[Archon]] — workflow engine with deterministic gates as mitigation for silent corruption
- [[Claude Code]], [[Cursor]] — tools where this problem shows up daily

---
Template: [[templates/knowledge_note_info]]
