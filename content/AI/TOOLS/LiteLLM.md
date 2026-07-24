---
title: "LiteLLM"
date: 2026-07-24
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "gateway", "proxy", "cost-optimization", "python", "rust", "open-source"]
type: tool
source: "https://github.com/BerriAI/litellm"
agent-created: true
summary: "Open-source AI Gateway — call 100+ LLM APIs in unified OpenAI format, with cost tracking, load balancing, guardrails and logging; Rust core + Python SDK, self-hostable proxy"
---
# LiteLLM

`BerriAI/litellm` — an open-source **AI Gateway** that lets you call 100+ LLM APIs (OpenAI, Anthropic, Azure, Bedrock, VertexAI, vLLM, Nvidia NIM, Ollama, HuggingFace…) through **one unified OpenAI-format interface**. Ships in two shapes: a **Python SDK** (import it in code) and a **Proxy Server / Gateway** (a self-hosted service that sits in front of every provider and adds cost tracking, virtual keys, load balancing, rate limits, guardrails, and logging). A Rust core drives the hot path for speed.

For my context this is the **provider-abstraction layer** of the [[LLM App Engineering Stack]] — write once against the OpenAI schema, swap models without touching app code, and get per-key cost accounting for free. It's also the fan-out target of observability tools: [[Langfuse]] traces "any of 100+ models" specifically *through* LiteLLM.

> ⚠️ Supply-chain note: a malicious release hit the LiteLLM ecosystem on 2026-03-24 — which is why [[Browser Use]] dropped it from its core. Pin versions, use the `-stable` Docker tags, and verify cosign signatures (below) before deploying.

## 🔗 Links

### Description
- Repo: https://github.com/BerriAI/litellm
- Docs: https://docs.litellm.ai
- Proxy quick-start (E2E): https://docs.litellm.ai/docs/proxy/docker_quick_start
- License: **MIT** core; some Proxy/Gateway features are under the separate [LiteLLM Commercial License](https://docs.litellm.ai/docs/proxy/enterprise)
- Release cycle: use the `-stable` Docker tags (12-hour load-tested before publish)

### Download or use
```bash
# SDK
pip install litellm
```
```python
from litellm import completion
# same call shape regardless of provider
resp = completion(model="anthropic/claude-sonnet-5",
                  messages=[{"role": "user", "content": "hello"}])
```
```bash
# Proxy / Gateway (self-hosted)
docker pull ghcr.io/berriai/litellm:main-stable
# verify image signature (cosign) — strongest supply-chain check
cosign verify ghcr.io/berriai/litellm:main-stable
```

## 🗒️ Description

### 🧩 Core features
- **Unified interface** — every provider mapped to the OpenAI chat/embeddings/completions schema; switch `model="…"` to change vendor.
- **Proxy Server (AI Gateway)** — virtual API keys per team/user, budgets & spend limits, cost tracking, load balancing / fallbacks across deployments, rate limiting.
- **Guardrails & logging** — pre/post-call hooks, PII masking, and log forwarding to Langfuse, Prometheus, S3, etc.
- **Reliability** — automatic retries and cross-provider fallback routing (e.g. Azure → OpenAI on failure).

### 🧩 Deployment
Self-host the proxy via Docker/Helm; images are **cosign-signed** to GHCR. Stable tags recommended for production; an Enterprise tier adds SSO/RBAC and support.

## ✍️ Reasoning for
- **Vendor independence** — I don't want app code coupled to one provider's SDK. LiteLLM makes the model a config value.
- **Cost governance** — the proxy's virtual keys + budgets are the cleanest way to cap spend per project or client (relevant to any [[Tech To The Rescue]]-style multi-tenant build).
- **Local + cloud mix** — routes to [[Ollama]] for local models under the same schema as hosted APIs.

Weak points: the 2026-03-24 supply-chain incident means version hygiene is non-negotiable; the proxy is another stateful service to operate; some gateway features are commercial-licensed, not MIT.

## Alternatives considered
- **OpenRouter** — hosted gateway, zero-ops but a third-party dependency and markup; LiteLLM is self-hostable.
- **Portkey** — similar gateway feature set, more managed/commercial.
- **Native provider SDKs** — no abstraction tax, but you re-implement fallback, cost tracking, and key management yourself.
- **[[Ollama]]** — solves *local* serving, not multi-provider routing; complementary, not a replacement.

## 🔗 Resources
- README: https://github.com/BerriAI/litellm
- Proxy docs: https://docs.litellm.ai/docs/proxy/quick_start
- Supported providers: https://docs.litellm.ai/docs/providers

---
Template: [[templates/tool]]
