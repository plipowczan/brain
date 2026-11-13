---
title: "Chonkie"
date: 2026-07-24
enableToc: true
openToc: true
tags: ["tool", "ai", "rag", "chunking", "embeddings", "ingestion", "python", "open-source"]
type: tool
source: "https://github.com/feyninc/chonkie"
agent-created: true
summary: "Lightweight MIT text-chunking library for RAG (the pygmy-hippo chunker) — v1.7.0 is the last 1.x and main is frozen; announced v2 is a small Rust core with only token, sentence, recursive and code chunkers; Chonkie Cloud is offline"
status-checked: 2026-11-13
project-status: maintained
agent-reviewed: 2026-11-13
repo: "https://github.com/feyninc/chonkie"
---
# Chonkie

> [!success] Status check 2026-11-13 — maintained
> **Verdict:** The last commit on main was 2026-08-26, 79 days ago, which is just inside the 90-day 'maintained' window and will cross into 'slowing' after 2026-11-24.
> **Last release:** v1.7.0, 2026-07-07 (GitHub release and PyPI chonkie 1.7.0). · **last commit:** 2026-08-26 · **licence:** MIT (LICENSE file and PyPI metadata). The sibling 'chunk' crate is Apache-2.0.
> **Repo:** https://github.com/feyninc/chonkie
> **Successor / fallback:** Not needed yet: v1 still works and is MIT. Chonkie v2 is announced but unreleased (a small Rust core with only token, sentence, recursive and code chunkers); until it ships, pin chonkie==1.7.0.
> **Changed since this note:** (1) The Chonkie v2 RFC (2026-08-21) is a 'course correction'. It drops the semantic, neural and slumber (agentic) chunkers, which on Chonkie's own MTCB benchmark were worse than or within 2-3% of the recursive chunker with modern embedders.

`feyninc/chonkie` — a **lightweight, fast chunking library** for RAG pipelines (mascot: a pygmy hippo). It covers the "split source text into good retrieval units" step end-to-end: **fetch → CHONK → refine → embed → ship to your vector DB**. The v1 pitch is no-bloat and "just works": small install, quick chunking, and 32+ integrations with embedders and vector stores out of the box, across 56 languages.

**State as of 2026-11-13: v1 is frozen, v2 is announced but unreleased.** The Chonkie v2 RFC (2026-08-21) calls itself a "course correction": v1.7.0 (2026-07-07) is the last 1.x release, and a workflow auto-closes every new PR on `main`. v2 is planned as a 1–2k-line Rust core with only the token, sentence, recursive and code chunkers, `tokie` as the default tokenizer, a binary under 1 MB, Python and JS/TS bindings, and a 1.x → 2.0 migration guide. It drops the semantic, neural and slumber chunkers and the integration plumbing. The `v2` branch has no public commits after 2026-08-22 and there is no release date. The JS port (`chonkiejs`) is frozen too. Until v2 ships I pin `chonkie==1.7.0`, which still works and stays MIT.

In the [[LLM App Engineering Stack]] this is the **chunking lane** — the piece between document parsing ([[Marker]] for files, [[Crawl4AI]] for web) and vector storage ([[Qdrant]]). Chunk quality is one of the biggest hidden levers on retrieval quality, which is why it gets its own tool rather than a hand-rolled `text.split()`.

## 🔗 Links

### Description
- Repo: https://github.com/feyninc/chonkie
- Cloud: the Chonkie Cloud app (labs.chonkie.ai) returns 404 as of 2026-11-13, and chonkie.ai now redirects to usefeyn.com (Feyn, a custom-model business whose footer reads "© 2026 Chonkie, Inc."). Docs stay at https://docs.chonkie.ai.
- License: **MIT**

### Download or use
```bash
pip install "chonkie==1.7.0"          # minimal; 1.7.0 is the final 1.x
pip install "chonkie[all]==1.7.0"     # all chunkers + integrations (heavy)
```
```python
from chonkie import RecursiveChunker

chunker = RecursiveChunker()          # hierarchical rules; survives into v2
chunks = chunker(long_text)
```
```bash
# self-host the API server
pip install "chonkie[api,semantic,code,catsu]"
docker compose up
```

## 🗒️ Description

### 🧩 Chunkers
v1.7 ships a family of strategies (the RFC counts 12) so you can match the chunker to the content:
- **Token / Sentence / Recursive** — classic size- and structure-based splitting. *Kept in v2.*
- **Fast** — SIMD byte-based chunking in the default install; its `chunk` crate becomes the foundation of the v2 Rust core.
- **Code** — structure-aware splitting for source files. *Kept in v2.*
- **Semantic** — groups by embedding similarity. *Dropped in v2.*
- **Neural / Slumber (agentic, LLM-driven)** — *dropped in v2.*
- **Late / Table / TeraflopAI** — late-chunking embeddings, markdown-table rows, and an external segmentation API; the RFC names only token, sentence, recursive and code as kept, so these may go too.

### 🧩 Pipeline extras (v1)
- **Refinery** — post-chunk overlap/merge refinement.
- **Embeddings + porters** — embed and ship straight into vector DBs. The RFC drops this integration layer ("handshakes", "chefs") from v2.
- **Local or self-hosted** — run in-process or as a self-hosted API server. The Chonkie Cloud option is gone.
- **AI agent skills & plugins** + Chonkie's own **MTCB benchmark** for chunker comparison.

## ✍️ Reasoning for
- **Retrieval quality lever** — bad chunk boundaries wreck recall, so a clean recursive/structure-aware chunker beats a naive `text.split()`. I used to assume a semantic chunker beats fixed-size for the same embedding model; Chonkie's own MTCB runs say otherwise: with modern embedders the semantic, neural and slumber chunkers were worse than, or within 2–3% of, the recursive chunker. Recursive is the sensible default for any RAG stack (e.g. over [[Brain]] via [[LightRAG]]).
- **Light footprint** — small dependency surface vs pulling a whole framework just to split text.
- **Vector-DB agnostic (v1)** — ships to [[Qdrant]] and 30+ others without custom glue; v2 drops these integrations.

Weak points: v1 is frozen (no fixes, PRs auto-closed) and v2 has no release date, so a migration is coming; the company has rebranded around a different business (Feyn) and the cloud product is offline, so long-term maintenance is uncertain; it's one link in the chain (still need parsing + a vector DB + a retriever); semantic/neural/slumber chunking costs extra embedding or LLM calls at ingest for little measured gain.

## Alternatives considered
- **LangChain / LlamaIndex text splitters** — bundled with the big frameworks; heavier, less specialised, but actively maintained.
- **semchunk** — small single-purpose semantic/recursive splitter.
- **Docling / Unstructured.io chunking** — tied to their parsing/ETL pipelines.
- **[[PageIndex]]** — sidesteps chunking entirely with a vectorless hierarchical index; different philosophy for long docs.
- **`RecursiveCharacterTextSplitter` by hand** — a fine baseline; by Chonkie's own benchmark, plain recursive splitting is close to the best option anyway.

## 🔗 Resources
- README: https://github.com/feyninc/chonkie
- Docs: https://docs.chonkie.ai
- Benchmarks: https://github.com/feyninc/chonkie#-benchmarks
- RFC Chonkie v2 (2026-08-21): https://github.com/feyninc/chonkie/blob/docs/rfc-chonkie-v2/docs/oss/rfc-chonkie-v2.mdx

---
Template: [[templates/tool]]
