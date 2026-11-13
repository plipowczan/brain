---
title: "VoyageAI"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "ai", "embeddings", "rag", "retrieval", "rerank", "api"]
type: tool
agent-created: true
summary: "Specialist embedding and reranking models for retrieval (a MongoDB company) — Voyage 4 family in one shared embedding space, rerank-3, code/context/multimodal models; served via the Atlas API; evaluated for the Tech To The Rescue RAG layer"
status-checked: 2026-11-13
project-status: active
agent-reviewed: 2026-11-13
homepage: "https://www.voyageai.com/"
---

# VoyageAI

> [!success] Status check 2026-11-13 — active
> **Verdict:** The lifecycle changelog has dated entries on 2026-07-30, 2026-09-01, 2026-09-29 and 2026-10-20.
> **Latest release:** rerank-3 and rerank-3-lite: Preview on 2026-09-01, Active (GA) on 2026-09-29. · **last dated update:** 2026-10-20 · **licence:** Proprietary API, usage-based per million tokens, with 200M free tokens on each current model.
> **Source:** https://www.mongodb.com/docs/voyageai/models/lifecycle/ — **moved/renamed:** Partly. Voyage AI is a MongoDB company (acquired February 2025), and the models are now offered mainly as the MongoDB Atlas Embedding and Reranking API at ai.mongodb.com, with regional endpoints eu.ai.mongodb.com and us.ai.mongodb.com.
> **Changed since this note:** The model names in the note (voyage-3, rerank-2) were already superseded before it: the Voyage 4 family (voyage-4-large, voyage-4, voyage-4-lite, plus the open-weight voyage-4-nano) launched on 2026-01-15. These models share one embedding space…

A provider of specialist **embedding** and **reranking** models, focused purely on retrieval quality (a MongoDB company since the February 2025 acquisition). Where general-purpose model vendors offer embeddings as a side feature, Voyage optimizes specifically for semantic search — including a code model, contextualized chunk embeddings and rerankers that reorder candidates for precision. For RAG, better embeddings mean better recall before the LLM ever sees the context.

## Links

### Description

- **Embedding models** — the **Voyage 4** family (since 2026-01-15): `voyage-4-large`, `voyage-4`, `voyage-4-lite`, plus the open-weight `voyage-4-nano` (Apache-2.0, on Hugging Face as `MongoDB/voyage-4-nano`). All 4-series embeddings are compatible with each other, so I could index with `voyage-4-large` and query with `voyage-4-lite` or a local `nano` without re-embedding. 32K-token context; 256 / 512 / 1024 / 2048 dimensions (1024 default).
- **Rerankers** — `rerank-3` and `rerank-3-lite` (Active since 2026-09-29), which reorder retrieved candidates by true relevance. `rerank-2` / `rerank-2.5` are Legacy.
- **Specialised models** — `voyage-code-4` (code retrieval and coding agents, 2026-08-13), `voyage-context-4` (contextualized chunk embeddings, 2026-06-30), `voyage-multimodal-3.5` (text + images). The finance and law models (`voyage-finance-2`, `voyage-law-2`) are Legacy and point to `voyage-4`.
- **API** — simple embed/rerank endpoints. MongoDB now serves them mainly as the **Atlas Embedding and Reranking API** at `ai.mongodb.com` (regional `eu.ai.mongodb.com` / `us.ai.mongodb.com`), with keys created in an Atlas project. MongoDB calls `api.voyageai.com` the legacy Voyage AI platform: it still works and has no published shutdown date, but MongoDB's model lifecycle policy covers only the Atlas endpoint.
- **Pricing** — per million tokens: `voyage-4-large` \$0.12, `voyage-4` \$0.06, `voyage-4-lite` \$0.02, `voyage-code-4` / `voyage-context-4` \$0.12, `rerank-3` \$0.05, `rerank-3-lite` \$0.02; 200M free tokens on each current model, none on the older ones.
- **Lifecycle** — since 2026-09-01 models move Active → Legacy → Deprecated → Retired; for embeddings the notice windows are 12 months from Legacy to Deprecated and 6 more to Retired (rerankers: 6 + 3). The lifecycle page lists no model as Deprecated or Retired yet. Stored vectors need a re-embedding plan unless they stay inside the voyage-4 shared space.

### Download or use

```bash
pip install voyageai   # client ≥0.3.7 picks the legacy or Atlas endpoint from the key format
# vo = voyageai.Client()   # reads VOYAGE_API_KEY
# vo.embed(texts, model="voyage-4", input_type="document")  /  vo.rerank(query, docs, model="rerank-3")
```

- Site: [voyageai.com](https://www.voyageai.com/)
- Docs: [mongodb.com/docs/voyageai](https://www.mongodb.com/docs/voyageai/) · legacy [docs.voyageai.com](https://docs.voyageai.com/)

## Reasoning for

VoyageAI was **evaluated for the retrieval layer** in the [[Tech To The Rescue]] platform — the Postgres + pgvector stack that powers semantic search over the organization's documents. It's relevant precisely because one of the diagnosis findings was that *embedding quality depends on chunking and model choice*, not just on having vectors: poor embeddings spread similarity scores unpredictably and dilute keyword matches. A specialist embedder (plus a reranker pass) is one of the levers to fix that, sitting alongside [[OpenAI]] embeddings as the candidate to beat. It connects to the broader retrieval thinking in [[LightRAG]] and [[AI Chatbots Architecture]].

MongoDB's product direction ties Voyage to Atlas (database, vector search and models under one control plane and bill), which matters less on a Postgres + pgvector stack — MongoDB itself calls the API database-agnostic, so it works standalone. Two parallel platforms with different keys (legacy `api.voyageai.com` vs Atlas `ai.mongodb.com`) are the main source of confusion; for new work I'd start on Atlas keys, where the lifecycle guarantees apply. The Atlas API launched as a public preview (2026-01-15); I could not confirm on MongoDB's docs as of 2026-11-13 whether it has since gone GA.

## Alternatives considered

- **[[OpenAI]] embeddings** (`text-embedding-3-*`) — the convenient default already in the stack, but no reranker; Voyage is the specialist challenger on retrieval quality.
- **Cohere Embed + Rerank** — strong comparable offering, especially reranking; similar role.
- **Open-source (BGE, E5, Nomic, Qwen3-Embedding)** — self-hostable, no API cost; more ops. `voyage-4-nano` is now an open-weight option in the same embedding space as the paid Voyage 4 models.

## Resources

- 📘 [Voyage AI docs on MongoDB](https://www.mongodb.com/docs/voyageai/) · [legacy VoyageAI docs](https://docs.voyageai.com/)
- 🗓️ [Model lifecycle and changelog](https://www.mongodb.com/docs/voyageai/models/lifecycle/) · [Migrate to Atlas model API keys](https://www.mongodb.com/docs/voyageai/tutorials/migrate-to-atlas)
- 🧩 [Rerankers](https://docs.voyageai.com/docs/reranker)
- 🔗 [[LightRAG]] · [[AI Chatbots Architecture]] — RAG context

---
Template: [[templates/tool]]
