---
title: "PageIndex"
date: 2026-07-13
enableToc: true
openToc: true
tags: ["tool", "ai", "rag", "retrieval", "knowledge-base", "pdf", "vectorless", "open-source", "mcp"]
type: tool
agent-created: true
summary: "VectifyAI's vectorless, reasoning-based retrieval engine for long documents — builds a hierarchical tree index the LLM reasons over instead of chunk-and-embed; the retrieval layer under OpenKB."
---

# PageIndex

## 🚀 Description

[VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) — a **vectorless, reasoning-based** retrieval framework for long documents. Instead of chunking a PDF and embedding the pieces into a vector DB, PageIndex builds a **hierarchical tree index** (table-of-contents-like) over the document and lets the LLM **reason over the tree** to navigate to the right section — retrieval by structure, not by cosine similarity.

It targets the [known challenge](https://x.com/karpathy/status/2039823314982744522) of long-document retrieval for LLMs: context limits and context rot on long PDFs. Short docs are read in full; long PDFs (≥20 pages by default) go through PageIndex tree indexing.

## 🧩 Features

- **Vectorless** — no embeddings, no vector database, no chunk-and-embed pipeline.
- **Tree index** — a hierarchical summary/section tree the LLM walks to find relevant context.
- **Reasoning-based retrieval** — the model reasons over the index rather than matching vectors, giving context-aware, explainable navigation.
- **Local-first** — runs locally via the open-source version with no external dependencies; **PageIndex Cloud** ([docs.pageindex.ai](https://docs.pageindex.ai/)) adds capabilities for large/complex PDFs.
- **Ecosystem** — [PageIndex MCP](https://github.com/VectifyAI/pageindex-mcp) (MCP server), ChatIndex, ConDB.

## 🗒️ Reasoning for

PageIndex is the retrieval engine under [[OpenKB]] — the "vectorless PageIndex" that lets OpenKB compile and query long documents without standing up a vector store. It fits the same structural-retrieval thesis as [[Structural Retrieval for Code]]: for structured content, navigating an explicit index beats blind vector search. Complements [[Progressive Disclosure]] (index-first priming) and document parsers like [[MinerU]] / [[Unlimited-OCR]] that produce the text PageIndex then organizes. Directly relevant to the [[LLM Knowledge Bases|LLM Wiki]] pattern this vault runs on.

## 🔗 Links

- Repo: https://github.com/VectifyAI/PageIndex
- Docs / Cloud: https://docs.pageindex.ai/
- MCP: https://github.com/VectifyAI/pageindex-mcp

## 🔗 Related notes

- [[OpenKB]] — compile-to-wiki CLI that uses PageIndex as its retrieval layer
- [[OpenWiki]] — sibling docs-wiki tool referencing vectorless PageIndex retrieval
- [[LLM Knowledge Bases]] — the LLM-Wiki pattern PageIndex serves
- [[Structural Retrieval for Code]] — the "structure beats vectors" thesis, for code
- [[Progressive Disclosure]] · [[MinerU]] · [[Unlimited-OCR]] — index-first retrieval and doc-parsing neighbors

---
Template: [[templates/tool]]
