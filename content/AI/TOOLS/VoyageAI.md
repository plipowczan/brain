---
title: "VoyageAI"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "ai", "embeddings", "rag", "retrieval", "rerank", "api"]
type: tool
agent-created: true
summary: "Specialist embedding and reranking models for retrieval — higher-quality vectors than general-purpose; evaluated for the Tech To The Rescue RAG layer"
---

# VoyageAI

A provider of specialist **embedding** and **reranking** models, focused purely on retrieval quality (now part of MongoDB). Where general-purpose model vendors offer embeddings as a side feature, Voyage optimizes specifically for semantic search — including domain-tuned models (code, finance, law) and rerankers that reorder candidates for precision. For RAG, better embeddings mean better recall before the LLM ever sees the context.

## Links

### Description

- **Embedding models** — high-quality general and domain-specific text embeddings (`voyage-3` family).
- **Rerankers** — cross-encoder models that reorder retrieved candidates by true relevance.
- **Domain models** — tuned variants (code, finance, law) for specialized corpora.
- **Long context** — handles long input documents for chunk-light retrieval.
- **API** — simple embed/rerank endpoints.

### Download or use

```bash
pip install voyageai
# vo.embed(texts, model="voyage-3")  /  vo.rerank(query, docs, model="rerank-2")
```

- Site: [voyageai.com](https://www.voyageai.com/)
- Docs: [docs.voyageai.com](https://docs.voyageai.com/)

## Reasoning for

VoyageAI was **evaluated for the retrieval layer** in the [[Tech To The Rescue]] platform — the Postgres + pgvector stack that powers semantic search over the organization's documents. It's relevant precisely because one of the diagnosis findings was that *embedding quality depends on chunking and model choice*, not just on having vectors: poor embeddings spread similarity scores unpredictably and dilute keyword matches. A specialist embedder (plus a reranker pass) is one of the levers to fix that, sitting alongside [[OpenAI]] embeddings as the candidate to beat. It connects to the broader retrieval thinking in [[LightRAG]] and [[AI Chatbots Architecture]].

## Alternatives considered

- **[[OpenAI]] embeddings** (`text-embedding-3-*`) — the convenient default already in the stack; Voyage is the specialist challenger on retrieval quality.
- **Cohere Embed + Rerank** — strong comparable offering, especially reranking; similar role.
- **Open-source (BGE, E5, Nomic)** — self-hostable, no API cost; more ops, often below Voyage on quality.

## Resources

- 📘 [VoyageAI docs](https://docs.voyageai.com/)
- 🧩 [Rerankers](https://docs.voyageai.com/docs/reranker)
- 🔗 [[LightRAG]] · [[AI Chatbots Architecture]] — RAG context

---
Template: [[templates/tool]]
