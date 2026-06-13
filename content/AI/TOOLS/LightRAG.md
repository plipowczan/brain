---
title: "LightRAG"
date: 2026-04-29
enableToc: true
openToc: true
tags: ["tool", "ai", "rag", "knowledge-graph", "llm", "open-source"]
type: tool
source: "_raw/inbox/HKUDSLightRAG EMNLP2025 LightRAG Simple and Fast Retrieval-Augmented Generation.md"
agent-created: true
summary: "EMNLP2025 RAG framework — combines KG entity extraction with dual-level retrieval, beats NaiveRAG/HyDE/GraphRAG across 4 domains"
---
# LightRAG

`HKUDS/LightRAG` — open-source RAG framework published at EMNLP2025 ([arXiv:2410.05779](https://arxiv.org/abs/2410.05779)). Instead of naive vector search, LightRAG extracts entities and relations into a knowledge graph, then combines dual-level retrieval (low-level → specific entities, high-level → broad topics/entity groups). In the authors' evaluations it beats NaiveRAG, RQ-RAG, HyDE, and GraphRAG on agriculture, CS, legal, and mixed domains.

For my context — this is a reference tool for [[AI Chatbots Architecture]] and a potential retrieval layer for [[LLM Knowledge Bases]] / [[Brain]] once they outgrow markdown indexes.

## 🔗 Links

### Description
- Repo: https://github.com/HKUDS/LightRAG
- Paper: https://arxiv.org/abs/2410.05779 (EMNLP2025)
- LearnOpenCV guide: https://learnopencv.com/lightrag
- Discord: https://discord.gg/yF2MmDJyGJ
- License: MIT (with non-modifiable amendments)

### Download or use

```bash
# LightRAG Server (Web UI + REST API + Ollama-compatible interface)
uv tool install "lightrag-hku[api]"
cp env.example .env       # set your LLM + embedding config
lightrag-server

# LightRAG Core (for embedded use or research)
uv pip install lightrag-hku

# Docker Compose
git clone https://github.com/HKUDS/LightRAG && cd LightRAG
cp env.example .env && docker compose up
```

The setup wizard (`make env-base`, `make env-storage`, `make env-server`) generates `.env` interactively instead of hand-editing.

## 🗒️ Description

### 🧩 How LightRAG differs from naive RAG

Naive RAG: chunk → embed → top-k cosine similarity → LLM. Weakness: chunks are atomic, with no relations between them, and models struggle on questions that require understanding a whole document (cross-chunk reasoning).

LightRAG adds an **entity-relationship extraction** phase during indexing — the LLM pulls entities (people, organizations, concepts) and relations out of each document into a knowledge graph. Queries run in two modes:
- **Low-level** — searches for specific entities
- **High-level** — searches for broad topics / entity groups
- **Mix mode** (recommended since 2025.08 with reranker default) — combines both

### 🧩 Model requirements

Much higher than naive RAG, because the LLM has to extract entity-relationships from documents:

- **LLM**: ≥32B parameters, context ≥32KB (64KB recommended), don't use reasoning models for indexing, but do use stronger ones for query
- **Embedding**: must be multilingual, e.g. `BAAI/bge-m3` or `text-embedding-3-large`. **Critical**: the same model for index and query — switching means wiping vector tables
- **Reranker**: `BAAI/bge-reranker-v2-m3` or Jina; enabling it materially improves retrieval

### 🧩 Storage backends

Supports unified storage for all four components (KV, vector, graph, doc-status):
- **MongoDB** (since 2025.02)
- **PostgreSQL** (since 2025.01)
- **OpenSearch** (since 2026.03)
- **Neo4j** (graph storage since 2024.11)

### 🧩 HKUDS family ecosystem

| Project | What it adds |
|---------|-----------|
| **LightRAG** | Base text RAG with KG |
| [RAG-Anything](https://github.com/HKUDS/RAG-Anything) | Multimodal — PDF, Office docs, images, tables, formulas |
| [VideoRAG](https://github.com/HKUDS/VideoRAG) | Extreme long-context video RAG |
| [MiniRAG](https://github.com/HKUDS/MiniRAG) | Simplified RAG for small models |

Since 2025.06 LightRAG integrates RAG-Anything for multimodal pipelines.

### 🧩 Observability and evaluation

Since 2025.11:
- **[[Langfuse]]** integration — tracing
- **RAGAS** — evaluation with context precision metrics
- API returns retrieved contexts alongside query results
- Token usage tracking, KG export, LLM cache management

### 🧩 Paper results (LightRAG vs baseline across 4 domains)

| Baseline | Agriculture | CS | Legal | Mix |
|----------|------------:|---:|------:|----:|
| vs NaiveRAG | **67.6%** | 61.6% | **83.6%** | 61.2% |
| vs RQ-RAG | **68.4%** | 61.2% | **84.8%** | 60.8% |
| vs HyDE | **74.0%** | 58.4% | 73.2% | 59.6% |
| vs GraphRAG | 54.4% | 51.6% | 51.6% | 49.6% |

(Comprehensiveness — % LightRAG win rate over the baseline.) Vs GraphRAG the margin is slim, vs the rest solid.

## ✍️ Reasoning for

My use case #1 is a potential retrieval layer for [[Brain]] once the content/ folder grows past the level where grep + markdown indexes are enough. Today the agent (i.e. me) uses progressive disclosure via `_indexes/vault-map.md` → `catalog.md` → `graph.md` — that works up to ~500 notes. Beyond that I'll want semantic search with KG awareness, and LightRAG looks like a reasonable foundation.

Use case #2: [[Qamera AI]] / [[AI Chatbots Architecture]] — chatbots where context spans many docs and naive vector search misses relations. There mix mode + reranker default should noticeably improve quality.

Weak points:
- Model requirements (≥32B, 32KB context) rule out cheap embedding on small OSS LLMs
- Embedding model lock-in (changing it = full reindex) — an expensive mistake
- Indexing time grows linearly with size (LLM extracts entities per document)

## Alternatives considered

- **GraphRAG (Microsoft)** — similar idea with KG; per the paper LightRAG is marginally better and lighter
- **HyDE** — generate a hypothetical answer, embed it, retrieve. Works, but in the paper it tanks on agriculture/legal
- **Naive RAG (BAAI/bge-m3 + simple top-k)** — enough for 80% of use cases, simpler, cheaper
- **MiniRAG** — same family, for small models
- **[[Graphify]]** — code/docs → queryable KG, but that's a skill, not a full RAG framework

## 🔗 Resources

- Citation: `@article{guo2024lightrag, eprint={2410.05779}, primaryClass={cs.IR}, year={2024}}`
- Setup wizard docs: `docs/InteractiveSetup.md` (in repo)
- Programming guide: `docs/ProgramingWithCore.md`
- Offline deployment guide: `docs/OfflineDeployment.md`
- Reproduce findings: `docs/Reproduce.md`

---
Template: [[templates/tool]]
