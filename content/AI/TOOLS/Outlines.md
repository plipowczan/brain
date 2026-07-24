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
---
# Outlines

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

---
Template: [[templates/tool]]
