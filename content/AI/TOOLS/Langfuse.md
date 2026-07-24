---
title: "Langfuse"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "observability", "evaluation", "prompts", "open-source"]
type: tool
source: "https://github.com/langfuse/langfuse"
agent-created: true
agent-reviewed: 2026-07-24
summary: "Open-source LLM engineering platform — tracing/observability, prompt management, evals, datasets, playground; self-hostable, YC W23 (part of ClickHouse since Jan 2026), MIT (ee folders excepted)"
---
# Langfuse

`langfuse/langfuse` — open-source **LLM engineering platform** (YC W23) that helps teams develop, monitor, evaluate, and debug AI applications. It is the layer you bolt onto an LLM app to see what actually happened inside each call: traces, costs, latency, prompt versions, and quality scores. Self-hostable in ~5 minutes via Docker Compose, or run as managed Langfuse Cloud. Built in TypeScript on top of the [ClickHouse](https://github.com/ClickHouse/ClickHouse) open-source database; ~29k GitHub stars.

For my context — this is the **observability / eval backbone** for any serious chatbot or agent I build ([[Qamera AI]], [[AI Chatbots Architecture]]), and the runtime-monitoring lane of the [[LLM App Engineering Stack]]. It also closes the loop already implied by [[LightRAG]], which ships a built-in Langfuse tracing integration for its RAG pipeline.

> 🆕 Update (ingest 2026-07-24): Langfuse has been **part of [ClickHouse](https://github.com/ClickHouse/ClickHouse) since January 2026** — the same ClickHouse OSS database it was already built on. The project remains open source (MIT core, `ee/` carved out) and is hiring/expanding across the EU.

## 🔗 Links

### Description
- Repo: https://github.com/langfuse/langfuse
- Site: https://langfuse.com
- Docs: https://langfuse.com/docs
- Self-hosting guide: https://langfuse.com/self-hosting
- License: **MIT** — except the `ee/` folders (enterprise edition). See https://langfuse.com/docs/open-source
- Latest release at ingest: `v3.185.0` (2026-06-12)

### Download or use

```bash
# Self-host locally (Docker Compose) — running in ~5 minutes
git clone --depth=1 https://github.com/langfuse/langfuse.git
cd langfuse
docker compose up

# Instrument a Python app
pip install langfuse openai
```

```python
from langfuse import observe
from langfuse.openai import openai  # drop-in OpenAI integration, auto-captures params

@observe()
def story():
    return openai.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": "What is Langfuse?"}],
    ).choices[0].message.content

@observe()
def main():
    return story()

main()
```

Set `LANGFUSE_SECRET_KEY` / `LANGFUSE_PUBLIC_KEY` / `LANGFUSE_BASE_URL` (EU `https://cloud.langfuse.com`, US `https://us.cloud.langfuse.com`, or your self-hosted URL).

For production self-hosting the preferred path is **Kubernetes (Helm)**; single-VM Docker Compose and Terraform templates for AWS / Azure / GCP are also provided.

## 🗒️ Description

### 🧩 Core features

| Feature | What it gives you |
|---------|-------------------|
| **LLM Observability / Tracing** | Instrument the app, ingest traces of LLM calls + surrounding logic (retrieval, embedding, agent actions); inspect and debug complex logs and user sessions |
| **Prompt Management** | Centrally version, manage, and collaboratively iterate on prompts; strong server- and client-side caching means no added latency |
| **Evaluations** | LLM-as-a-judge, code evaluators, user-feedback collection, manual labeling, and custom eval pipelines via API/SDK |
| **Datasets** | Test sets / benchmarks for pre-deployment testing, structured experiments, continuous improvement |
| **LLM Playground** | Test and iterate on prompts + model configs; jump straight from a bad trace into the playground |
| **Comprehensive API** | OpenAPI spec, Postman collection, typed SDKs (Python, JS/TS) to power bespoke LLMOps workflows |

### 🧩 Architecture and licensing

- **Stack**: TypeScript (98%+), ClickHouse for analytics storage, Postgres, Redis (BullMQ queues), Docker. Split into `web` + `worker` services.
- **License**: MIT for the repo, with the `ee/` (enterprise) folders carved out under a separate license. The OSS core is genuinely self-hostable and feature-complete for observability + evals.
- **Telemetry**: self-hosted instances report basic usage stats to PostHog by default — no raw traces/prompts/scores — opt out with `TELEMETRY_ENABLED=false`.

### 🧩 Integrations (the real moat)

Langfuse is integration-rich, which is why it shows up as a dependency across the OSS LLM ecosystem (Langflow, Open WebUI, RAGFlow, LiteLLM, Flowise, Dify, Mastra…). Main first-party integrations:

- **SDKs**: Python, JS/TS (manual instrumentation)
- **OpenTelemetry**-native ingestion
- **OpenAI SDK** — drop-in replacement, auto-instrumented
- **LangChain**, **LlamaIndex**, **Haystack** — callback/tracing hooks
- **[[LiteLLM]]** — trace any of 100+ models (Azure, Anthropic, Cohere, [[Ollama]], Bedrock, HF…)
- **Vercel AI SDK**, **Mastra** — TS agent frameworks
- Agent frameworks: **[[CrewAI]]**, **AutoGen**, **smolagents**, **Goose**
- Libraries: **[[Instructor]]**, **[[DSPy]]**, **Mirascope**

## ✍️ Reasoning for

Use case #1 — **[[Qamera AI]] / [[AI Chatbots Architecture]]**: once a chatbot is live, "it feels worse today" is not a debuggable statement. Langfuse turns it into traces, token costs, latency percentiles, and eval scores per prompt version. The LLM-as-a-judge + datasets combo lets me regression-test prompts before shipping.

Use case #2 — **RAG observability**: [[LightRAG]] already integrates Langfuse for tracing (plus RAGAS for eval), so if I stand up LightRAG over [[Brain]] I get retrieval-level traces for free instead of guessing why a retrieval missed.

Use case #3 — **prompt version control**: pulling prompts from Langfuse (cached) instead of hardcoding them means I can iterate prompts without redeploying the app — useful for any of my agentic systems.

Weak points:
- **Heavy infra for self-hosting** — ClickHouse + Postgres + Redis + 2 services. Fine on K8s, overkill for a weekend project; Cloud free tier sidesteps this.
- `ee/` features (some enterprise SSO/RBAC) are not MIT — read the license before assuming "open source = everything".
- Another moving piece in the stack with its own upgrade cadence (576 releases).

## Alternatives considered

- **LangSmith (LangChain)** — polished, but closed-source and LangChain-centric; Langfuse is OSS and framework-agnostic.
- **Phoenix / Arize** — strong on eval + OTel; Langfuse leans further into prompt management + playground.
- **Helicone** — proxy-based observability, lighter to adopt but less eval/dataset depth.
- **[[LightRAG]] built-in tracing + RAGAS** — only covers the RAG pipeline; Langfuse is the app-wide layer above it.
- **Roll-your-own logging** — fine until you need eval pipelines, prompt versioning, and a UI; then you're rebuilding Langfuse.

## 🔗 Resources

- README (EN / 中文 / 日本語 / 한국어): https://github.com/langfuse/langfuse
- Interactive demo: https://langfuse.com/docs/demo
- Self-hosting (architecture + config): https://langfuse.com/self-hosting
- Integrations index: https://langfuse.com/docs/integrations
- Docker images: `langfuse/langfuse`, `langfuse/langfuse-worker` on Docker Hub

---
Template: [[templates/tool]]
