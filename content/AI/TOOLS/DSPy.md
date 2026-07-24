---
title: "DSPy"
date: 2026-07-24
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "framework", "prompts", "self-improving", "python", "open-source"]
type: tool
source: "https://github.com/stanfordnlp/dspy"
agent-created: true
summary: "Stanford NLP framework for programming — not prompting — language models: write modular Python, declare I/O signatures, and let optimizers tune the prompts (and weights)"
---
# DSPy

`stanfordnlp/dspy` — **DSPy = Declarative Self-improving Python**, a framework for **programming rather than prompting** language models. Instead of brittle hand-written prompt strings, you write **compositional Python** with declared input/output *signatures* and modules (Predict, ChainOfThought, ReAct…), then hand the program to **optimizers** that automatically tune the prompts — and, where applicable, the weights — against a metric. Works for simple classifiers, RAG pipelines, and agent loops. Out of Stanford NLP.

In the [[LLM App Engineering Stack]] DSPy sits **above** the structured-output libraries: [[Instructor]] and [[Outlines]] guarantee the *shape* of an output; DSPy optimises the *prompt program* that produces it. It's the "stop tweaking prompts by hand, compile them instead" layer, and a natural companion to [[Context Engineering]] thinking.

## 🔗 Links

### Description
- Repo: https://github.com/stanfordnlp/dspy
- Docs: https://dspy.ai
- License: **MIT**

### Download or use
```bash
pip install dspy
# or bleeding edge:
pip install git+https://github.com/stanfordnlp/dspy.git
```
```python
import dspy

dspy.configure(lm=dspy.LM("anthropic/claude-sonnet-5"))

class QA(dspy.Signature):
    """Answer questions concisely."""
    question: str = dspy.InputField()
    answer: str = dspy.OutputField()

qa = dspy.ChainOfThought(QA)
print(qa(question="What is DSPy?").answer)
# then optimize: dspy.MIPROv2(metric=...).compile(qa, trainset=...)
```

## 🗒️ Description

### 🧩 The paradigm
- **Signatures** — declare *what* a step does (`question -> answer`), not *how* to phrase it.
- **Modules** — composable reasoning strategies (Predict, ChainOfThought, ReAct, ProgramOfThought) you wire like layers.
- **Optimizers (teleprompters)** — MIPROv2, BootstrapFewShot, etc. search prompts / few-shot demos (and can fine-tune weights) to maximise a metric on a trainset.
- **Metrics + evaluation** — the optimization target is your own metric, so improvement is measurable, not vibes.

### 🧩 Why it matters
Prompts written by hand don't transfer across models or tasks. DSPy makes the prompt an **artifact you compile** from a program + data + metric — so swapping models means recompiling, not rewriting.

## ✍️ Reasoning for
- **Portability** — a DSPy program recompiles for a new model instead of a manual prompt-rewrite; frees the app from one vendor's prompt quirks.
- **Measurable quality** — optimizing against a metric beats eyeballing outputs, and dovetails with a [[Promptfoo]]/[[Langfuse]] eval loop.
- **Structured pipelines** — RAG and agent loops expressed as modules are more legible and tunable than a wall of f-strings.

Weak points: real conceptual overhead (signatures/optimizers/metrics) versus just writing a prompt; optimization needs a trainset + metric you actually have; overkill for one-off prompts; the abstraction can obscure what prompt is finally sent.

## Alternatives considered
- **[[Instructor]] / [[Outlines]]** — solve output *structure*, not prompt *optimization*; complementary, lower abstraction.
- **Manual prompt engineering + [[Promptfoo]]** — write prompts, measure them; simpler, but no automatic optimization.
- **TextGrad** — gradient-style optimization of text pipelines; research-adjacent alternative.
- **LangChain/LlamaIndex** — orchestration frameworks; they route calls, they don't compile prompts against a metric.

## 🔗 Resources
- Docs: https://dspy.ai
- Paper/reading: https://dspy.ai (see "Citation & Reading More")
- Discord: https://discord.gg/XCGy2WDCQB

---
Template: [[templates/tool]]
