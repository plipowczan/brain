---
title: "Outlines"
date: 2026-07-24
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "structured-outputs", "python", "open-source"]
type: tool
source: "https://github.com/dottxt-ai/outlines"
agent-created: true
summary: "dottxt's structured-generation library — constrains LLM decoding to a schema/regex/grammar so outputs are valid by construction (JSON, types, FSM), not fixed up after the fact"
status-checked: 2026-11-13
project-status: maintained
repo: "https://github.com/dottxt-ai/outlines"
---
# Outlines

> [!success] Status check 2026-11-13 — maintained
> **Verdict:** The last release was 1.3.3 on 2026-08-06 and the last merge to main was on 2026-08-24, 81 days ago.
> **Last release:** 1.3.3, 2026-08-06 (GitHub release 'Outlines v1.3.3' and PyPI outlines 1.3.3) · **last commit:** 2026-08-24 · **licence:** Apache-2.0. dottxt sells separate proprietary products: .lambda (constrained decoding running inside vLLM…
> **Repo:** https://github.com/dottxt-ai/outlines — **moved/renamed:** The repo has not moved. The company's domains moved from dottxt.co to dottxt.ai: dottxt.co, docs.dottxt.co and blog.dottxt.co now 301-redirect to the .ai equivalents, so the note's company links still resolve.
> **Changed since this note:** Small in the code, larger in the project's trajectory. 1.3.3 (2026-08-06) added PEP 604 union output types (int | str), new custom types (hex_color, slug, plus iban, bic, e164 and latitude/longitude merged around the same time) and many type, regex…

`dottxt-ai/outlines` — a Python library for **structured generation**: instead of parsing and repairing an LLM's free-text output after the fact, Outlines **constrains the decoding process itself** so the model can only emit tokens valid under your schema, regex, type, or grammar. The output is correct *by construction* — guaranteed-valid JSON, enums, or arbitrary context-free grammars.

This is the **structured-outputs lane** of the [[LLM App Engineering Stack]], and the more low-level cousin of [[Instructor]]: Outlines works at the constrained-decoding / logit level (great for open models you host yourself via [[Ollama]]/vLLM), while Instructor wraps hosted provider APIs with Pydantic validation + retries. [[DSPy]] sits above both, optimising the prompts that feed them.

## 🔗 Links

### Description
- Repo: https://github.com/dottxt-ai/outlines
- Company (dottxt / .txt): https://dottxt.co · enterprise libs: https://docs.dottxt.co
- License: **Apache-2.0**

### Download or use
```bash
pip install outlines
```
```python
import outlines
from pydantic import BaseModel

class Character(BaseModel):
    name: str
    age: int

model = outlines.models.transformers("microsoft/Phi-3-mini-4k-instruct")
generator = outlines.generate.json(model, Character)
result = generator("Invent an RPG character.")   # always valid Character
```

## 🗒️ Description

### 🧩 What it constrains
- **JSON schema / Pydantic models** — structured objects that always parse.
- **Regex** — force outputs to match a pattern (dates, IDs, phone numbers).
- **Types** — `int`, `bool`, enums, multiple-choice.
- **Context-free grammars (CFG)** — arbitrary formats (SQL, custom DSLs, XML/FHIR via the enterprise path).

### 🧩 How it differs from "JSON mode"
Provider "JSON mode" *asks* the model to return JSON and hopes; Outlines rewrites the sampling step so invalid tokens are impossible. That means it needs **logit access** — ideal for local/open models (transformers, vLLM, llama.cpp, MLX), and integrated where providers expose the hooks.

## ✍️ Reasoning for
- **Reliability for open models** — when self-hosting via [[Ollama]]/vLLM, Outlines is the cleanest way to get schema-valid output without a validate-and-retry loop.
- **Grammars for weird formats** — anything beyond JSON (custom DSL, structured SQL) where regex/CFG constraints are the right tool.
- **Zero post-processing** — no parse-repair-retry code path to maintain.

Weak points: needs decode-level access, so it shines on models you control, less so behind opaque hosted APIs (where [[Instructor]] fits better); grammar authoring has a learning curve; constrained decoding can add latency.

## Alternatives considered
- **[[Instructor]]** — provider-API-side structured extraction with Pydantic + retries; easier for hosted models, less control over decoding.
- **Provider native structured outputs** — OpenAI/Anthropic JSON-schema modes; convenient but vendor-locked and less expressive than CFGs.
- **Guidance / LMQL / jsonformer** — other constrained-generation libraries; Outlines has the broadest grammar support and backing (dottxt).
- **Parse-and-retry by hand** — works until schemas get nested; then you're reinventing Outlines.

## 🔗 Resources
- README: https://github.com/dottxt-ai/outlines
- Docs: https://dottxt-ai.github.io/outlines/
- dottxt blog (structured generation research): https://blog.dottxt.co
- 📖 [[Drex]] · [[Laya]] — the other route to "valid by construction" for closed questions: no decoding at all, just a probability per option from one forward pass

---
Template: [[templates/tool]]
