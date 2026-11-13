---
title: "Document Parsing and OCR Tools Compared"
date: 2026-11-13
enableToc: true
openToc: true
tags: ["knowledge", "info", "compiled", "ai", "document-parsing", "ocr", "rag", "chunking", "ingestion", "comparison"]
type: compiled-note
source: "research deep research — content/_raw/research-workspaces/ai-tools-review-2026-11/"
agent-created: true
status-checked: 2026-11-13
summary: "Marker, MinerU, Unlimited-OCR, anydoc and Chonkie placed on one ingestion pipeline: which converts what, when to pick which, and what none of them guarantees about the text you feed an LLM."
---

# Document Parsing and OCR Tools Compared

Before an agent or a RAG system can use a document, someone has to turn it into text that keeps its structure: headings, tables, formulas, reading order. The five tools here do different parts of that job, so they are not really rivals. [[anydoc]] converts office files deterministically, without a model. [[Marker]] and [[MinerU]] are layout-aware parsers that use vision models for PDFs and scans. [[Unlimited-OCR]] is a raw OCR model for long scanned documents. [[Chonkie]] comes after all of them: it cuts the resulting text into retrieval chunks.

All status lines were checked against each repository and its releases page on **2026-11-13**.

## 🚀 The short answer

- **Word, PowerPoint, Excel, OpenDocument, EPUB, text PDFs:** [[anydoc]]. Milliseconds per file, no model, nothing leaves the machine.
- **Complex or scanned PDFs (tables, formulas, columns), with a GPU:** [[Marker]] or [[MinerU]]. Benchmark both on a sample of your own documents; the winner depends on the mix.
- **Same, but CPU only or a stricter licence budget:** [[MinerU]] with its `pipeline` backend.
- **Long scanned documents where you only need the text, and you can run a 3B model:** [[Unlimited-OCR]]. It is a model and a paper, not a pipeline.
- **The text is ready and you need chunks for a vector store:** [[Chonkie]].
- **You want to skip chunking altogether** for long structured documents: look at [[PageIndex]] in [[Agent Memory and Knowledge Base Tools Compared]].

## 🧩 One pipeline, four steps

```
file ──► convert / parse ──► (OCR if scanned) ──► clean Markdown ──► chunk ──► embed / index
          anydoc               Unlimited-OCR                          Chonkie     Qdrant, LightRAG…
          Marker, MinerU (layout + OCR + tables + formulas in one)
```

| Step | Tools | Input | Output |
|---|---|---|---|
| Deterministic conversion | [[anydoc]] | office formats, text PDFs | GitHub-flavoured Markdown |
| Layout-aware parsing | [[Marker]], [[MinerU]] | PDFs, scans, images, office files | Markdown / JSON with layout, HTML tables, LaTeX formulas |
| Raw OCR | [[Unlimited-OCR]] | page images, rasterised PDFs | transcribed text, many pages per pass |
| Chunking | [[Chonkie]] | text | chunks, optionally embedded and sent to a vector DB |

## 📒 Side by side

| Tool | Approach | Needs a GPU | Runs fully local | Licence | Status 2026-11-13 |
|---|---|---|---|---|---|
| [[anydoc]] | Rust parsers, one Markdown serializer, no ML | no | yes (scans only via opt-in hosted OCR) | MIT | active, v0.2.4 (2026-08-27), commits to 10-23 |
| [[Marker]] | Surya vision model for layout, OCR and tables | strongly recommended | yes | code Apache-2.0; model weights restricted for larger commercial use | active, v2.2.0 (2026-11-12) |
| [[MinerU]] | `pipeline` (CPU) or VLM / hybrid backends | no for `pipeline`, yes for VLM | yes, plus MCP server and hosted API | MinerU Open Source License (Apache-2.0 based) | active, 4.2.1 (2026-11-11) |
| [[Unlimited-OCR]] | 3B OCR model with a constant KV cache (R-SWA) | yes | yes (Transformers, SGLang or vLLM) | MIT for code and weights | active: Unlimited-OCR 2 shipped 2026-10-27; no GitHub releases, last commit 2026-11-09 |
| [[Chonkie]] | chunking library: token, sentence, recursive, semantic, code, late | no (semantic chunking calls an embedder) | yes (Chonkie Cloud is offline since at least 2026-11-13) | MIT | maintained, v1.7.0 (2026-07-07), last commit 2026-08-26 |

## ☘️ When to choose which

### [[anydoc]]: office files, fast and offline
- **Pick it when** the input is a `.docx`, `.pptx`, `.xlsx`, `.odt`, `.rtf`, `.epub`, `.csv` or a text-based PDF. One document model behind every format means tables, footnotes, speaker notes and equations come out the same way regardless of source. It also ships as an agent skill, so an agent can read the files it meets.
- **Skip it when** the PDF is a scan: it refuses with `NeedsOcr`. The `--ocr hosted` flag sends the whole file to Firecrawl Parse, which is the privacy line to know about.

### [[Marker]]: high-fidelity PDFs with a GPU
- **Pick it when** technical PDFs with tables, formulas and references are the bulk of your input and you have an NVIDIA GPU. JSON output with bounding boxes allows layout-aware chunking.
- **Watch out:** the code is Apache-2.0, but the model weights are free only for research, personal use and companies under a revenue/funding threshold; above that you need a Datalab licence.

### [[MinerU]]: the most flexible open parser
- **Pick it when** you want one tool that runs CPU-only for privacy and GPU for accuracy, handles 109 OCR languages and merges tables across pages, and plugs into Claude Code over MCP or into LangChain, LlamaIndex and Dify.
- **Watch out:** its licence moved from AGPL to its own Apache-based licence; read it before commercial redistribution. VLM backends need serious hardware.

### [[Unlimited-OCR]]: long scans in one pass
- **Pick it when** you have dozens of scanned pages and want a single model pass instead of page-by-page OCR. Its attention change keeps memory flat as the output grows.
- **Watch out:** it gives you text, not a document pipeline: no table-to-HTML, no format conversion, no reading-order logic of its own. NVIDIA GPU only in the published setup.

### [[Chonkie]]: chunking without a framework
- **Pick it when** you have clean text and want sensible chunks without pulling in LangChain or LlamaIndex. Several strategies, refinement, and connectors to most vector stores.
- **Watch out:** the best chunker depends on your data, so measure retrieval on your own questions. Chonkie's own benchmark found the semantic, neural and agentic chunkers no better than plain recursive splitting with modern embedders (or within 2–3%), and the announced v2 drops them: a small Rust core with token, sentence, recursive and code chunkers only. Until v2 ships, pin 1.7.0.

## ⚠️ What none of them does

- **Guarantee the text is right.** A parser can misread a table cell or drop a footnote silently. None of them flags its own low-confidence regions in a way your pipeline can act on; spot-check the output, especially numbers.
- **Understand the document.** They recover structure, not meaning. Which section answers a question, what a table implies, or which version of a contract is current stays with your retrieval and your model.
- **Make handwriting and poor scans reliable.** MinerU and the OCR models cope better than classic OCR, but low-quality scans still produce errors you only find by reading.
- **Pick the chunk size for you.** Even Chonkie leaves the strategy and size to you; bad chunk boundaries hurt retrieval more than most model choices.
- **Keep you compliant on their own.** Hosted modes (anydoc's hosted OCR, MinerU's API, Datalab's platform, Chonkie Cloud) move documents off your machine. Local modes don't, but then GPUs and licences of model weights are your problem.

## 🎨 How I use this

For this vault, office files dropped into the inbox are the common case, so [[anydoc]] is the first thing to reach for: it is fast, offline and predictable. For scanned or layout-heavy PDFs I'd start with [[MinerU]] because its CPU backend works on a laptop, and compare it with [[Marker]] only when a GPU is at hand. I don't chunk the vault at all: the wiki is read through indexes (see [[LLM Knowledge Bases]]), so [[Chonkie]] matters only for projects that do use vector search.

## 📖 Further reading

- [[LLM App Engineering Stack]]: where parsing and chunking sit next to retrieval, evaluation and observability
- [[Agent Memory and Knowledge Base Tools Compared]]: what happens to the text after parsing
- [[Crawl4AI]] · [[Firecrawl]]: the same job for web pages
- [[OpenMed]]: clinical entity extraction downstream of a parser
- The whole category in context: [[AI Tools Map]]

## 🔗 Resources

- Status data: deep research of 2026-11-13 over each repository and releases page. The details are in each tool note's "Status check" box.
- [firecrawl/anydoc](https://github.com/firecrawl/anydoc) · [datalab-to/marker](https://github.com/datalab-to/marker) · [opendatalab/MinerU](https://github.com/opendatalab/MinerU) · [baidu/Unlimited-OCR](https://github.com/baidu/Unlimited-OCR) · [feyninc/chonkie](https://github.com/feyninc/chonkie)
