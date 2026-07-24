---
title: "Marker"
date: 2026-07-24
enableToc: true
openToc: true
tags: ["tool", "ai", "document-parsing", "pdf", "ocr", "markdown", "python", "open-source", "apache-2.0"]
type: tool
source: "https://github.com/datalab-to/marker"
agent-created: true
summary: "Datalab's document-intelligence converter — PDF/image/PPTX/DOCX/XLSX/HTML/EPUB → markdown, JSON, chunks or HTML with high accuracy, via a single Surya VLM; Apache-2.0 code"
---
# Marker

`datalab-to/marker` — a **document-intelligence converter** from Datalab that turns PDF, image, PPTX, DOCX, XLSX, HTML, and EPUB files into clean **markdown, JSON, chunks, or HTML**, in all languages. It formats tables, forms, equations (inline + block math), links, references, and code blocks, and extracts/saves embedded images. Layout, OCR, and table recognition run through a single **Surya VLM** served by a local inference server (vLLM on NVIDIA GPUs, llama.cpp elsewhere).

In the [[LLM App Engineering Stack]] this is the **ingestion / parsing lane**: the front door that converts messy source documents into LLM-ready markdown before chunking ([[Chonkie]]) and indexing ([[Qdrant]]). Complements [[Crawl4AI]] (web → markdown) on the file side, and sits alongside [[PageIndex]] / [[MinerU]] / [[Unlimited-OCR]] in the document-to-text tooling I track.

## 🔗 Links

### Description
- Repo: https://github.com/datalab-to/marker
- Managed platform: https://www.datalab.to
- License: **code Apache-2.0** (free incl. commercial); **model weights** under a modified AI Pubs Open Rail-M — free for research, personal use, and startups under $5M funding/revenue; commercial beyond that needs a Datalab license.

### Download or use
```bash
pip install marker-pdf          # core
pip install marker-pdf[full]    # + all converters/deps
```
```bash
# convert a single file
marker_single /path/to/file.pdf --output_format markdown
# point at an already-running inference server instead of spawning one
export SURYA_INFERENCE_URL=http://host:port/v1
```
```python
from marker.converters.pdf import PdfConverter
# output_format: markdown | json | html | chunks
```

## 🗒️ Description

### 🧩 Modes & formats
- **Inputs**: PDF, image, PPTX, DOCX, XLSX, HTML, EPUB.
- **Outputs**: markdown, JSON (with page bounding boxes), HTML, or pre-chunked segments.
- **Hybrid mode** — mixes fast heuristics with the VLM for a speed/accuracy trade-off; **balanced** and full-VLM paths available.
- Tables emitted as HTML `<table>` blocks; `force_layout_block=Table` skips layout detection when every page is a table.

### 🧩 Backend
The Surya VLM inference server is spawned automatically on first use (Docker + NVIDIA Container Toolkit for GPU), or you point Marker at an existing server via `SURYA_INFERENCE_URL`.

## ✍️ Reasoning for
- **RAG ingestion quality** — retrieval is only as good as the parse; Marker's equation/table/reference fidelity beats naive `pdf2text` for technical PDFs, which is exactly the failure mode in document-heavy RAG.
- **Local + private** — runs on-prem (no uploading client PDFs to a third party), important for [[Tech To The Rescue]]-style engagements.
- **Structured output** — JSON with bounding boxes enables layout-aware chunking rather than blind splitting.

Weak points: GPU strongly recommended for throughput; the model-weight license restricts larger commercial use (code is fine); VLM parsing is heavier than regex extraction when documents are simple.

## Alternatives considered
- **[[MinerU]]** — similar PDF→markdown VLM pipeline; benchmark both on your document mix.
- **[[PageIndex]]** — solves *retrieval over* long docs (vectorless tree index), not the raw parse; downstream of Marker.
- **Docling (IBM)** — strong structured-document extraction, Apache-2.0.
- **Unstructured.io** — broad format coverage, more of an ETL framework.
- **Naive `pdfplumber`/`pymupdf`** — fine for clean text PDFs, poor on tables/math/scans.

## 🔗 Resources
- README: https://github.com/datalab-to/marker
- Surya (underlying OCR/layout models): https://github.com/datalab-to/surya
- Pricing / commercial weights: https://www.datalab.to/pricing

---
Template: [[templates/tool]]
