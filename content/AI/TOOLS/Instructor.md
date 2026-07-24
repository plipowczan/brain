---
title: "Instructor"
date: 2026-07-24
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "structured-outputs", "pydantic", "python", "typescript", "open-source"]
type: tool
source: "https://python.useinstructor.com/"
agent-created: true
summary: "Most-popular library for structured LLM outputs — Pydantic-schema extraction with type safety, validation, automatic retries and streaming; 15+ providers, 6 languages"
---
# Instructor

`Instructor` (by [[Jason Liu]]) — the most widely-used library for getting **structured, validated data out of any LLM**. Built on **Pydantic**: you define a schema as a typed model, and Instructor handles the prompt plumbing, parses the response into that model, **validates** it, and **automatically retries** on validation failure. Supports streaming and nested objects, 15+ providers (OpenAI, Anthropic, Google, [[Ollama]], DeepSeek…), and 6 languages (Python, TypeScript, Go, Ruby, Elixir, Rust). ~3M monthly downloads, 11k+ stars.

This is the **structured-outputs lane** of the [[LLM App Engineering Stack]] on the *provider-API* side — the pragmatic default when you're calling hosted models and want typed extraction without managing decoding. Its lower-level counterpart is [[Outlines]] (constrained decoding for models you host); [[DSPy]] optimises the prompts above both. The library's own docs position it as "Instructor for extraction, PydanticAI for agents."

## 🔗 Links

### Description
- Docs: https://python.useinstructor.com
- Repo: https://github.com/instructor-ai/instructor
- License: **MIT**

### Download or use
```bash
pip install instructor
```
```python
import instructor
from pydantic import BaseModel
from anthropic import Anthropic

class User(BaseModel):
    name: str
    age: int

client = instructor.from_anthropic(Anthropic())
user = client.messages.create(
    model="claude-sonnet-5",
    response_model=User,           # <- typed, validated, auto-retried
    messages=[{"role": "user", "content": "John is 25"}],
)
assert isinstance(user, User)
```

## 🗒️ Description

### 🧩 Key features
- **Pydantic-native** — schemas are just typed models; you get IDE autocomplete + static types on LLM output.
- **Automatic validation + retries** — a `ValidationError` re-prompts the model with the error until it conforms (bounded).
- **Streaming** — partial objects as they generate; **nested/complex schemas** supported.
- **Provider-agnostic** — one `response_model` pattern across 15+ providers via thin `from_*` adapters.
- **Multi-language** — same idea in TS/Go/Ruby/Elixir/Rust, not just Python.

## ✍️ Reasoning for
- **Fastest path to typed extraction** — for classification, entity extraction, and "fill this schema from text", Instructor is less ceremony than agents or hand-rolled parsing.
- **Works with hosted models** — unlike [[Outlines]], it doesn't need logit access, so it drops onto Claude/GPT/Gemini APIs directly.
- **Validation as a contract** — Pydantic validators encode business rules; the retry loop turns "the model returned garbage" into a self-healing call.

Weak points: retries cost extra tokens/latency; it *coerces* rather than *guarantees* validity (no decode-level constraint like Outlines), so pathological cases can still exhaust retries; for agentic workflows the docs themselves point you to PydanticAI instead.

## Alternatives considered
- **[[Outlines]]** — constrained decoding, guaranteed-valid output for self-hosted models; more control, needs logit access.
- **PydanticAI** — same Pydantic lineage but a full agent runtime (typed tools, dataset replays, dashboards).
- **[[DSPy]]** — declares I/O signatures and optimises the prompt; higher abstraction than schema-fill.
- **Provider native structured outputs** — convenient, vendor-locked, less portable across models.

## 🔗 Resources
- Docs: https://python.useinstructor.com
- Concepts (validation, retries, streaming): https://python.useinstructor.com/concepts/
- Blog (Jason Liu): https://jxnl.co

---
Template: [[templates/tool]]
