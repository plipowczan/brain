---
title: "MinerU"
date: 2026-06-25
enableToc: true
openToc: true
tags: ["tool", "ai", "document-parsing", "ocr", "rag", "pdf", "mcp", "open-source"]
type: tool
source: "_raw/processed/2026-06-25_MinerU.md"
agent-created: true
summary: "OpenDataLab's high-accuracy document parser — PDF/DOCX/PPTX/XLSX/images → LLM-ready Markdown/JSON; VLM+OCR dual engine, 109-language OCR, MCP server, runs CPU-only or GPU."
---
# MinerU

OpenDataLab's open-source document parsing engine that converts complex documents — `PDF`, `DOCX`, `PPTX`, `XLSX`, images, web pages — into LLM-ready Markdown / JSON. Built for **RAG · Agent · pre-training** pipelines. Born inside the [InternLM](https://github.com/InternLM/InternLM) pre-training effort to solve symbol conversion in scientific literature.

![[862fb8436446c4af24a02df6750ec0ac_MD5.png]]

## Links
### Description
High-accuracy parser with a **VLM + OCR dual engine** and 109-language OCR. Outputs human reading order, strips headers/footers/page numbers, reconstructs layout. Formulas → LaTeX, tables → HTML. Handles scanned docs, handwriting, multi-column layouts, and cross-page table merging.

### Download or use
- Repo: https://github.com/opendatalab/mineru
- Online / desktop / API: https://mineru.net/
- Install: `uv pip install -U "mineru[all]"` (Python 3.10–3.13)
- Run: `mineru -p <input> -o <output>` (add `-b pipeline` for pure-CPU)
- Docs: https://opendatalab.github.io/MinerU/

## Reasoning for
The **document ingestion front-end** for any knowledge-base or RAG workflow. Where [[Unlimited-OCR]] is a raw OCR model and [[CocoIndex]] / [[LightRAG]] handle indexing + retrieval, MinerU sits earlier in the chain: turning messy real-world documents into clean structured Markdown that downstream tools can index. Direct fit for feeding sources into [[LLM Knowledge Bases]], [[OpenKB]], or this vault's [[ingest]] pipeline.

Key reasons to reach for it:
- **MCP server** → wire it straight into [[Claude Code]], Cursor, Claude Desktop, Windsurf — agents can parse documents on demand.
- **Native RAG-framework integration** — LangChain, LlamaIndex, RAGFlow, RAG-Anything, Flowise, Dify, FastGPT.
- **Fully offline / private** — `pipeline` backend runs CPU-only (4GB VRAM or none), no hallucination. `vlm`/`hybrid` backends (vLLM/SGLang/LMDeploy/mlx) trade hardware for ~95 OmniDocBench accuracy.
- **Permissive license** — moved from AGPLv3 to the MinerU Open Source License (Apache-2.0 based) in v3.1, dropping commercial-adoption friction.

### 🧩 Backends
| Backend | Best for | CPU | Accuracy (OmniDocBench v1.6) |
|---|---|:-:|---|
| `pipeline` | Fast, stable, no hallucination | ✅ | 86.47 |
| `hybrid` | High accuracy + native text extraction | ❌ | 95.39 (high) / 95.26 (medium) |
| `vlm` | Max accuracy, vLLM/LMDeploy/mlx | ❌ | 95.30 |

`hybrid` defaults to `effort=medium` (35–220% faster than `high` for ~0.13-point accuracy loss; `high` adds image analysis). Latest VLM model: `MinerU2.5-Pro-2605-1.2B`.

## Alternatives considered
- [[Unlimited-OCR]] — Baidu 3B OCR model; lower-level, OCR-only vs MinerU's full layout/format pipeline.
- [[Open Notebook]] — NotebookLM clone; ingests PDFs but for chat/podcast, not structured extraction.
- Commercial doc-AI APIs — MinerU trades polish for open-source + offline control.
- Sibling OpenDataLab tools: PDF-Extract-Kit, Magic-Doc, OmniDocBench (the benchmark MinerU scores against).

## Resources
- Changelog: https://opendatalab.github.io/MinerU/reference/changelog/
- DeepWiki Q&A: https://deepwiki.com/opendatalab/MinerU
- Papers: MinerU2.5-Pro (arXiv 2604.04771), MinerU-Diffusion (2603.22458), MinerU 2.5 (2509.22186), original MinerU (2409.18839)
- Related vault notes: [[LLM Knowledge Bases]], [[OpenKB]], [[CocoIndex]], [[LightRAG]], [[AI Chatbots Architecture]]
- [[OpenMed]] — downstream complement: parse documents with MinerU, then extract clinical entities / de-identify PII on-device

---
Template: [[templates/tool]]
