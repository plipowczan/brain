---
title: "Qdrant"
date: 2026-07-24
enableToc: true
openToc: true
tags: ["tool", "ai", "database", "vector-database", "retrieval", "embeddings", "rust", "self-hosted", "open-source", "apache-2.0"]
type: tool
source: "https://github.com/qdrant/qdrant"
agent-created: true
summary: "High-performance vector similarity search engine + database in Rust — stores vectors with payloads, strong filtering, production API; self-host via Docker or managed Qdrant Cloud"
---
# Qdrant

`qdrant/qdrant` (read *quadrant*) — a **vector similarity search engine and vector database** written in Rust. It stores **points** (a vector plus an arbitrary JSON payload) and serves fast nearest-neighbour search with **strong filtering** — combining semantic similarity with structured constraints on the payload (faceted search, metadata filters). Production-ready API, fast and reliable under load, self-hostable via a single Docker image, or run as managed **Qdrant Cloud** (with a free tier).

In the [[LLM App Engineering Stack]] this is the **vector-storage / retrieval lane** — where embeddings from an embedder ([[VoyageAI]]) over chunks ([[Chonkie]]) live and get searched at query time. It's the classic backbone of embedding-based RAG; worth pairing in the mind with the *vectorless* counter-approaches I track ([[PageIndex]], [[Structural Retrieval for Code]]) that argue "don't always reach for a vector DB."

## 🔗 Links

### Description
- Repo: https://github.com/qdrant/qdrant
- Site: https://qdrant.tech · Cloud: https://cloud.qdrant.io
- Docs / quickstart: https://qdrant.tech/documentation/quickstart/
- License: **Apache-2.0**

### Download or use
```bash
# self-host
docker run -p 6333:6333 qdrant/qdrant
```
```python
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams

client = QdrantClient("localhost", port=6333)
client.create_collection(
    "docs",
    vectors_config=VectorParams(size=1024, distance=Distance.COSINE),
)
# upsert points (vector + payload), then query with filters
```

## 🗒️ Description

### 🧩 Core capabilities
- **Filtered vector search** — the differentiator: rich payload filters applied *during* search, not as a slow post-filter — good for faceted/metadata-constrained retrieval.
- **Written in Rust** — fast and memory-safe under high load; published benchmarks.
- **Payloads** — attach JSON to each vector; return it with results (no second lookup).
- **Production API** — REST + gRPC, official clients (Python, JS/TS, Rust, Go…).
- **Deploy anywhere** — Docker/K8s self-host, or managed Cloud with a free tier; quantization + on-disk storage for scale.
- **Agent Skills** + integrations across the RAG ecosystem.

## ✍️ Reasoning for
- **Default vector store** — when a build genuinely needs embedding search, Qdrant's filtering + Rust performance make it a strong, self-hostable default (over pgvector when scale/filtering matter).
- **Metadata-aware retrieval** — "find similar chunks *from this document / after this date / of this type*" is a first-class query, not a hack.
- **No lock-in** — Apache-2.0 and self-hostable; Cloud is an option, not a requirement.

Weak points: it's infrastructure to run and keep healthy; for small corpora `pgvector` or even in-memory is simpler; and the whole vector-DB approach isn't always the right retrieval strategy — structural/vectorless retrieval ([[PageIndex]], [[GrepRAG]]) can beat it for code and long structured docs.

## Alternatives considered
- **pgvector (Postgres)** — reuse your existing DB; simplest for modest scale, weaker on large-scale ANN + filtering.
- **Weaviate / Milvus** — comparable open-source vector DBs; benchmark on your filter patterns + scale.
- **Pinecone** — fully managed, zero-ops, proprietary + paid.
- **[[PageIndex]] / vectorless retrieval** — skips embeddings entirely for long docs; different trade-off, sometimes better recall + explainability.

## 🔗 Resources
- Docs: https://qdrant.tech/documentation/
- Benchmarks: https://qdrant.tech/benchmarks/
- Cloud: https://cloud.qdrant.io

---
Template: [[templates/tool]]
