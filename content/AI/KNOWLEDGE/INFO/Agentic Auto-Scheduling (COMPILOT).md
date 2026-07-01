---
title: "Agentic Auto-Scheduling: LLM-Guided Loop Optimization"
date: 2026-06-30
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "agents", "compilers", "loop-optimization", "llm", "feedback-loop", "polyhedral"]
type: knowledge-note
source: "_raw/inbox/2511.00592v2.pdf"
agent-created: true
agent-reviewed: 2026-06-30
summary: "COMPILOT: LLMs guide compiler loop optimization via closed-loop interaction; 3.54× speedup (best-of-5) vs original, 2.94× vs Pluto optimizer."
---

🚀 **Agentic Auto-Scheduling: COMPILOT Framework**

*Massinissa Merouani, Islem Kara Bernou, Riyadh Baghdadi (NYU Abu Dhabi)*  
*2025 PACT Conference*  
**Paper**: https://arxiv.org/abs/2511.00592

## Core Insight

Traditional compilers optimize via static heuristics or cost models. COMPILOT inverts this: **the LLM acts as an agent inside the compiler**, iteratively proposing loop transformations and receiving empirical feedback (speedup or failure reason) from the actual execution environment.

Result: **off-the-shelf LLMs discover high-performance schedules without fine-tuning**, outperforming the Pluto polyhedral optimizer on many benchmarks by leveraging measured performance rather than analytical proxies.

## Architecture

### Two-Phase Dialogue

**Phase 1: Context Initialization**
- Context prompt: task definition, I/O formats, transformation primitives, hardware specs
- Target loop nest: anonymized C/C++ code with comp_IDs for each computation block
- Program analysis: LLM deconstructs structure, infers optimizations, explains strategy (chain-of-thought)

**Phase 2: Iterative Optimization**
- Loop: LLM → proposes schedule | Compiler → tests legality & measures speedup | LLM → refines
- Stops when LLM declares `no_further_transformations` OR iteration limit reached
- Multi-run (best-of-K) strategy mitigates LLM stochasticity & local optima

### Transformation Primitives

Nine loop transformations (via Tiramisu compiler API):

| Transformation | Syntax Example | Use Case |
|---|---|---|
| Fusion | `comp01.Fuse(comp02, L2)` | Reduce memory traffic |
| Interchange | `comp00.Interchange(L0, L1)` | Enable parallelism or improve cache |
| Parallelization | `comp00.Parallelize(L0)` | Thread-level parallelism |
| 2D Tiling | `comp01.Tile2D(L1, L2, 32, 32)` | Cache blocking |
| 3D Tiling | `comp01.Tile3D(L0, L1, L2, 16, 16, 8)` | Multi-level blocking |
| Unrolling | `comp00.Unroll(L3, 4)` | Reduce loop overhead |
| Skewing | `comp00.Skew(L1, L2)` | Enable parallelism via dependency reordering |
| Reversal | `comp00.Reverse(L1)` | Dependency direction flip |
| Shifting | (handled automatically in Tiramisu) | Dependency-preserving loop shifts |

## Feedback Loop

When LLM proposes a schedule:

1. **Validity check** (lightweight, compiler-independent): syntax, identifiers, preconditions (e.g., perfect nesting for interchange)
2. **Legality check** (formal polyhedral dependence analysis): does the schedule preserve semantics?
3. **Execution** (if legal): compile, run, measure speedup
4. **Feedback types**:
   - Invalid: specific syntax error
   - Illegal: data-dependency violation
   - Solver failure: skewing/shifting factors can't be computed
   - Compiler crash: transformation combination failed
   - Successful: speedup ratio (or slowdown if negative)

LLM **in-context learns** from this feedback to refine strategy across iterations.

## Evaluation: PolyBench Suite (150 instances, 30 benchmarks × 5 sizes)

### Main Results (40 runs per instance, T=30 iterations)

**Single-Run (COMPILOT@30)**
- Geometric mean: **2.66×** speedup vs original
- 95% CI: [2.60, 2.77]
- 50th percentile: ≥1.24×
- 25th percentile: ≥3.6×
- 10th percentile: ≥23.65×
- **Examples**: correlation_XLARGE: 339×; trmm_XLARGE: 183×; seidel2d_SMALL: 2.41×

**Multi-Run (COMPILOT₅@30, best-of-5)**
- Geometric mean: **3.54×** speedup vs original
- 95% CI: [3.45, 3.58]
- 50th percentile: ≥1.59×
- 10th percentile: ≥53.65×

### vs State-of-the-Art Competitors

| Baseline | Speedup (COMPILOT₅@30) | Notes |
|----------|---|---|
| Original unoptimized code | 3.54× | Geometric mean across 150 instances |
| **Pluto polyhedral optimizer** | **2.94×** | Outperforms on 119/150 instances; Pluto wins on 22 (cholesky, ludcmp, lu, nussinov) |
| Tiramisu autoscheduler | 3.23× | (8 supported benchmarks only) |

**COMPILOT's advantage over Pluto**:
- Avoids performance regressions (COMPILOT ≈ always safeguards, Pluto sometimes applies detrimental heuristics)
- Adapts to input size (aggressive parallelization for large; tiling for small)
- Uses empirical feedback vs proxy cost model

### Exploration Efficiency

Token usage grows non-linearly (context inflation). Wall-clock time ≈ 8.9 min/benchmark (30 iter), 78.5% spent in compiler infrastructure, only 1–3 min in LLM communication.

### Schedule Validity

At T=30, across all runs and benchmarks:
- **36.1% runnable** (valid, legal, executes successfully)
- **31.4% invalid** (syntactically/semantically flawed)
- **32.5% illegal** (violates data dependencies)

→ ~2/3 of LLM proposals are unproductive attempts; legality decreases early (60% at T=1) but improves over dialogue as LLM learns.

## Ablation Studies

| Question | Finding | Impact |
|----------|---------|--------|
| **RQ6: Is feedback important?** | With feedback: 2.66×; without: 2.01× | −23% speedup without feedback; LLM can't learn from environment |
| **RQ7: Direct code generation vs API?** | Code generation: −14–16% speedup; 17.9% legal failures on re-run | Delegation to compiler + formal verification is critical |
| **RQ8: Hardware context in prompt?** | No statistically significant difference | LLM may rely more on empirical feedback loop than explicit specs |
| **RQ10: Chain-of-thought?** | Initial program analysis: +8%; explicit reasoning: +4–14% | Both beneficial, especially for multi-run scenarios |
| **RQ11: Pushing LLM past early quits** | Comparable to @30 only after 5+ quit attempts | Essential to override conservatism, but diminishing returns after N=5 |

## Key Design Decisions

✅ **Strengths**
- **LLM as agent, not code generator** — offloads complexity/correctness to compiler; avoids output-comparison brittleness
- **Empirical feedback** — speedup measured on target hardware beats analytical cost models
- **Multi-run diversity** — stochastic LLM exploration + best-of-K strategy escapes local optima
- **Chain-of-thought** — initial analysis + per-iteration reasoning improves strategy coherence

❌ **Challenges**
- High invalid/illegal rate (~64% of proposals fail) → inefficient exploration
- Premature stopping: LLM conservatism or local optima pessimism
- Hardware context insufficient: LLMs don't translate cache/core info into tile-size decisions
- Context bloat: non-linear token growth; ~100–200k tokens for 30 iterations

## Related Work

Compares to:
- **Domain-specialized LLMs** (Meta LLM Compiler, etc.) — require fine-tuning; slower throughput
- **Direct code generation** (LLM-Vectorizer, CompilerGPT) — correctness relies on unit tests or formal verification; both imperfect
- **Classical polyhedral optimizers** (Pluto, Halide, TVM) — rigid heuristics; no adaptation to hardware or input scale

**COMPILOT's novelty**: off-the-shelf + feedback-driven + source-level transformations (not IR passes or direct codegen).

## Takeaways

🔑 **Off-the-shelf LLMs can effectively optimize complex code** when embedded in an interactive compiler environment with empirical feedback.

🔑 **Feedback loop > reasoning capabilities** — even without explicit reasoning models, the iterative loop + in-context learning provides sufficient guidance.

🔑 **Formal verification beats output comparison** — delegating legality checks to polyhedral analysis ensures code correctness without expensive re-execution tricks.

🔑 **Stochasticity is a feature** — multiple runs exploit the LLM's exploration diversity to escape local optima.

## Future Directions

- Richer feedback (cache misses, vector lane utilization via performance counters, not just wall-clock)
- Hybrid search (LLM + systematic algorithms) to escape local optima faster
- Dialogue summarization (context compression) to reduce token blowup
- Extend transformation primitives (loop distribution, computation reordering)

---

## Links

- **arXiv**: https://arxiv.org/abs/2511.00592
- **Tiramisu Compiler**: https://tiramisu.csail.mit.edu/
- **PolyBench Suite**: http://www.cse.ohio-state.edu/~pouchet/software/polybench/
- **PACT 2025**: 34th International Conference on Parallel Architectures and Compilation Techniques

---

## Related Notes

- [[Harness Engineering]] — agent environment design
- [[Context Engineering]] — LLM interaction design patterns
- [[Loop Engineering]] — cost/reliability tradeoffs in iterative workflows
- [[Token Optimization for Claude Code]] — managing LLM interaction costs
- [[Self-Improving Company]] — using AI to optimize business processes
- [[Agentic Engineering]] — paradigm shift from manual to agent-driven systems
