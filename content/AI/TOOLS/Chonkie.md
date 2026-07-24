---
title: "Chonkie"
date: 2026-07-24
enableToc: true
openToc: true
tags: ["tool", "ai", "rag", "chunking", "embeddings", "ingestion", "python", "open-source"]
type: tool
source: "https://github.com/feyninc/chonkie"
agent-created: true
summary: "Lightweight, fast text-chunking library for RAG — fetch, chunk, refine, embed and ship to a vector DB; 32+ integrations, 56 languages, local or cloud; the pygmy-hippo chunker"
---
# Chonkie

`feyninc/chonkie` — a **lightweight, fast chunking library** for RAG pipelines (mascot: a pygmy hippo). It covers the "split source text into good retrieval units" step end-to-end: **fetch → CHONK → refine → embed → ship to your vector DB**. The pitch is no-bloat and "just works": small install, quick chunking, and 32+ integrations with embedders and vector stores out of the box, across 56 languages.

In the [[LLM App Engineering Stack]] this is the **chunking lane** — the piece between document parsing ([[Marker]] for files, [[Crawl4AI]] for web) and vector storage ([[Qdrant]]). Chunk quality is one of the biggest hidden levers on retrieval quality, which is why it gets its own tool rather than a hand-rolled `text.split()`.

## 🔗 Links

### Description
- Repo: https://github.com/feyninc/chonkie
- Cloud: https://labs.chonkie.ai
- License: **MIT**

### Download or use
```bash
pip install chonkie            # minimal
pip install "chonkie[all]"     # all chunkers + integrations
```
```python
from chonkie import SemanticChunker

chunker = SemanticChunker()          # groups by meaning, not fixed size
chunks = chunker.chunk(long_text)
```
```bash
# self-host the API server
pip install "chonkie[api,semantic,code,catsu]"
docker compose up
```

## 🗒️ Description

### 🧩 Chunkers
A family of strategies so you can match the chunker to the content:
- **Token / Sentence / Recursive** — classic size- and structure-based splitting.
- **Semantic** — groups by embedding similarity so chunks are meaning-coherent.
- **Code** — structure-aware splitting for source files.
- **Late / SDPM / Neural** — advanced strategies for higher retrieval fidelity.

### 🧩 Pipeline extras
- **Refinery** — post-chunk overlap/merge refinement.
- **Embeddings + porters** — embed and ship straight into vector DBs.
- **Cloud or local** — run in-process, as a self-hosted API server, or on Chonkie Cloud.
- **AI agent skills & plugins** + published **benchmarks** for chunker comparison.

## ✍️ Reasoning for
- **Retrieval quality lever** — bad chunk boundaries wreck recall; a semantic chunker often beats fixed-size for the same embedding model. Cheap upgrade to any RAG stack (e.g. over [[Brain]] via [[LightRAG]]).
- **Light footprint** — small dependency surface vs pulling a whole framework just to split text.
- **Vector-DB agnostic** — ships to [[Qdrant]] and 30+ others without custom glue.

Weak points: it's one link in the chain (still need parsing + a vector DB + a retriever); "best" chunker is workload-dependent, so expect to benchmark; semantic chunking costs extra embedding calls at ingest.

## Alternatives considered
- **LangChain / LlamaIndex text splitters** — bundled with the big frameworks; heavier, less specialised.
- **Unstructured.io chunking** — tied to its ETL pipeline.
- **[[PageIndex]]** — sidesteps chunking entirely with a vectorless hierarchical index; different philosophy for long docs.
- **`RecursiveCharacterTextSplitter` by hand** — fine baseline, but you leave semantic/structure-aware gains on the table.

## 🔗 Resources
- README: https://github.com/feyninc/chonkie
- Docs: https://docs.chonkie.ai
- Benchmarks: https://github.com/feyninc/chonkie#-benchmarks

---
Template: [[templates/tool]]
