---
title: "Marker"
date: 2026-07-24
enableToc: true
openToc: true
tags: ["tool", "ai", "document-parsing", "pdf", "ocr", "markdown", "python", "open-source", "apache-2.0"]
type: tool
source: "https://github.com/datalab-to/marker"
agent-created: true
summary: "Datalab's document-intelligence converter — PDF/image/PPTX/DOCX/XLSX/HTML/EPUB → markdown, JSON, chunks or HTML; four modes from CPU-only ONNX (no_ocr, fast) to the Surya 2.5 VLM on GPU (balanced, vllm); Apache-2.0 code, Rail-M weights"
status-checked: 2026-11-13
project-status: active
agent-reviewed: 2026-11-13
repo: "https://github.com/datalab-to/marker"
---
# Marker

> [!success] Status check 2026-11-13 — active
> **Verdict:** v2.1.0 shipped 2026-10-29 and v2.2.0 on 2026-11-12, both on GitHub and PyPI. A CLA sign-off and community bugfix merges also landed in November.
> **Last release:** v2.2.0, 2026-11-12 (GitHub release and PyPI marker-pdf 2.2.0) · **last commit:** 2026-11-12 · **licence:** Dual. The code is Apache-2.0 (changed from GPL on 2026-07-17, before the note).
> **Repo:** https://github.com/datalab-to/marker
> **Changed since this note:** The note (2026-07-24) was written just after v2.0.0 (2026-07-20). v2.0.0 was the rewrite: Python 3.10+, Poetry replaced by uv, the structured-extraction converter removed, and the default mode chosen by device. v2.1.0 (2026-10-29) made Surya 2.5 (datalab-to/surya-ocr-2.5, about 0.69B parameters) the default VLM…

`datalab-to/marker` — a **document-intelligence converter** from Datalab that turns PDF, image, PPTX, DOCX, XLSX, HTML, and EPUB files into clean **markdown, JSON, chunks, or HTML**, in all languages. It formats tables, forms, equations (inline + block math), links, references, and code blocks, and extracts/saves embedded images. Since **v2.2.0 (2026-11-12)** it runs in one of four modes: two CPU-only modes built on Datalab's small in-process **Indra ONNX** layout/OCR models, and two VLM modes, meant for a GPU, that send pages to the **Surya 2.5 VLM** (0.69B, default since v2.1.0 on 2026-10-29) via a local inference server (vLLM on NVIDIA GPUs, llama.cpp elsewhere). In v2.0–2.1 `fast` still made occasional VLM calls; since v2.2 it needs no inference server at all.

In the [[LLM App Engineering Stack]] this is the **ingestion / parsing lane**: the front door that converts messy source documents into LLM-ready markdown before chunking ([[Chonkie]]) and indexing ([[Qdrant]]). Complements [[Crawl4AI]] (web → markdown) on the file side, and sits alongside [[PageIndex]] / [[MinerU]] / [[Unlimited-OCR]] in the document-to-text tooling I track.

## 🔗 Links

### Description
- Repo: https://github.com/datalab-to/marker
- Managed platform: https://www.datalab.to — the hosted API runs Datalab's Chandra model and others (Datalab says more accurate than Marker); about 5,000 free convert pages a month with a work email
- License: **code Apache-2.0** (free incl. commercial); **model weights** under a modified AI Pubs Open Rail-M — free for research, personal use, and startups under \$5M funding/revenue; commercial beyond that needs a Datalab license.

### Download or use
Python 3.10+ and PyTorch.
```bash
pip install marker-pdf          # PDFs
pip install marker-pdf[full]    # + docx, pptx, xlsx, epub, html
```
```bash
# convert a single file (mode defaults by device: balanced on GPU, fast on CPU/MPS)
marker_single /path/to/file.pdf --output_format markdown --mode fast
# point at an already-running inference server instead of spawning one
export SURYA_INFERENCE_URL=http://host:port/v1
# interactive viewer: layout overlays, reading order, per-mode output
marker_gui --port 8000
# install Marker's agent skill (SKILL.md) into a skills directory
marker_single --install_skill .agents/skills
```
```python
from marker.converters.pdf import PdfConverter
# output_format: markdown | json | html | chunks
```

## 🗒️ Description

### 🧩 Modes & formats
- **Inputs**: PDF, image, PPTX, DOCX, XLSX, HTML, EPUB.
- **Outputs**: markdown, JSON (with page bounding boxes), HTML, or pre-chunked segments.
- **Modes** (`--mode`, v2.2):
  - `no_ocr` — PDF text layer (`pdftext`) + Indra ONNX layout on CPU, zero OCR calls. For bulk born-digital PDFs.
  - `fast` *(CPU/MPS default)* — in-process Indra ONNX layout and OCR (~18 MB weights), no GPU or server.
  - `balanced` *(GPU default)* — clean prose stays on CPU; equations, complex tables, CJK/non-Latin scripts and scans go to Surya 2.5.
  - `vllm` — full-page Surya 2.5 OCR on every page; most accurate, slowest.
- Datalab's own numbers on its new OmniParseBench (2,937 pages, 92 languages): `vllm` 85.9 at 4.5 pg/s, `balanced` 80.5 at 16.9 pg/s, `fast` 71.0 at 23.6 pg/s, `no_ocr` 40.8 overall (82.7 on digital docs) at 57 pg/s. It claims to beat docling, MinerU 2.5-Pro and PaddleOCR-VL — re-test on your own documents.
- **`--use_llm`** (the README calls this "Hybrid mode") adds an LLM pass on top: merges tables across pages, inline math, table formatting, form values. Defaults to `gemini-3.5-flash`; also Claude, OpenAI-compatible, Azure, Vertex, OpenRouter, Ollama. Content goes to that LLM provider unless you point it at Ollama.
- Tables emitted as HTML `<table>` blocks; `force_layout_block=Table` skips layout detection when every page is a table.
- Structured extraction (schema → JSON) was removed from the open-source package in v2.0; it lives in the paid Datalab API or a `--use_llm` workflow.

### 🧩 Backend
Only `balanced` and `vllm` need the Surya inference server. It is spawned automatically on first use — vLLM in Docker with the NVIDIA Container Toolkit on NVIDIA GPUs, llama.cpp's `llama-server` binary on CPU / Apple Silicon — or you point Marker at an existing server via `SURYA_INFERENCE_URL`. To stay on the older model: `SURYA_MODEL_CHECKPOINT=datalab-to/surya-ocr-2`.

## ✍️ Reasoning for
- **RAG ingestion quality** — retrieval is only as good as the parse; Marker's equation/table/reference fidelity beats naive `pdf2text` for technical PDFs, which is exactly the failure mode in document-heavy RAG.
- **Local + private** — runs on-prem (no uploading client PDFs to a third party), important for [[Tech To The Rescue]]-style engagements.
- **Structured output** — JSON with bounding boxes enables layout-aware chunking rather than blind splitting.

Weak points: the accurate modes (`balanced`, `vllm`) need a GPU and a Surya inference server, while the CPU modes trade accuracy for speed; the model-weight license restricts larger commercial use (code is fine); the headline benchmark is Datalab's own; modes, default model and defaults changed in both 2.1 and 2.2, so pin the version.

## Alternatives considered
- **[[MinerU]]** — 4.x has similar quality tiers (`flash` / `basic` / `standard` / `advanced`) plus a local document library for agents, and its weights are Apache-2.0; benchmark both on your document mix.
- **[[anydoc]]** — model-free and much faster for born-digital Office files, but no OCR.
- **[[PageIndex]]** — solves *retrieval over* long docs (vectorless tree index), not the raw parse; downstream of Marker.
- **Docling (IBM)** — strong structured-document extraction, Apache-2.0.
- **Unstructured.io** — broad format coverage, more of an ETL framework.
- **Naive `pdfplumber`/`pymupdf`** — fine for clean text PDFs, poor on tables/math/scans.

## 🔗 Resources
- README: https://github.com/datalab-to/marker
- Releases (v2.0 rewrite, v2.1 Surya 2.5, v2.2 four modes): https://github.com/datalab-to/marker/releases
- OmniParseBench: https://github.com/datalab-to/omni_parse_bench
- Surya (underlying OCR/layout models): https://github.com/datalab-to/surya
- Pricing / commercial weights: https://www.datalab.to/pricing

---
Template: [[templates/tool]]
