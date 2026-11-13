---
title: "MinerU"
date: 2026-06-25
enableToc: true
openToc: true
tags: ["tool", "ai", "document-parsing", "ocr", "rag", "pdf", "agent-skills", "open-source"]
type: tool
source: "_raw/processed/2026-06-25_MinerU.md"
agent-created: true
summary: "OpenDataLab's document parser and local document library (4.x) — PDF, images, Office/OpenDocument/EPUB/HTML → Markdown/JSON and more at four quality tiers (flash/basic/standard/advanced); agent skill with citation locators; CPU or any GPU."
status-checked: 2026-11-13
project-status: active
agent-reviewed: 2026-11-13
repo: "https://github.com/opendatalab/MinerU"
---
# MinerU

> [!success] Status check 2026-11-13 — active
> **Verdict:** Releases are very frequent: 4.0.0 (2026-09-16) and 4.0.1 to 4.0.12, then 4.1.0 (2026-10-29) to 4.1.7 (2026-11-04), 4.2.0 (2026-11-10) and 4.2.1 (2026-11-11).
> **Last release:** MinerU 4.2.1 (tag mineru-4.2.1-released), 2026-11-11 (GitHub release and PyPI mineru 4.2.1) · **last commit:** 2026-11-11 · **licence:** MinerU Open Source License, PyPI LicenseRef-MinerU-Open-Source-License…
> **Repo:** https://github.com/opendatalab/MinerU
> **Changed since this note:** The note (2026-06-25) describes 3.x. 3.4.1 to 3.4.5 followed in July and August, 4.0 alphas from 2026-07-14, then 4.0.0 on 2026-09-16, a ground-up rebuild. (1) Four quality tiers, flash, basic, standard and advanced…

OpenDataLab's open-source document parsing engine that converts complex documents — `PDF`, images, `DOC`/`DOCX`, `PPT`/`PPTX`, `XLS`/`XLSX`, RTF, OpenDocument, EPUB, OFD, HTML/MHTML, CSV/TSV — into LLM-ready Markdown / JSON. Built for **RAG · Agent · pre-training** pipelines. Born inside the [InternLM](https://github.com/InternLM/InternLM) pre-training effort to solve symbol conversion in scientific literature.

Until 3.x it was a parser with `pipeline` / `vlm` / `hybrid` backends. **4.0 (2026-09-16) is a ground-up rebuild**: four quality tiers, native Office parsing, and a local document library that agents can search and read page by page. 4.1 (2026-10-29) and 4.2 (2026-11-10) followed within weeks; latest is 4.2.1 (2026-11-11).

![[862fb8436446c4af24a02df6750ec0ac_MD5.png]]

## Links
### Description
High-accuracy parser that combines small OCR/layout models with a **VLM** (MinerU2.5-Pro-2605-1.2B). Outputs human reading order, reconstructs layout, formulas → LaTeX, tables → HTML. Handles scanned docs, multi-column layouts, and cross-page table merging. Office, OpenDocument, EPUB, OFD, HTML and CSV are parsed natively (via DocVortex) without converting to PDF first. One document model renders to nine targets: Markdown, HTML, LaTeX, DOCX, EPUB, PDF, structured content, and content list V1/V2. The 3.x README advertised 109-language OCR; I could not find that figure in the 4.x README as of 2026-11-13.

### Download or use
- Repo: https://github.com/opendatalab/MinerU
- Online / desktop / API: https://mineru.net/
- Install (Python 3.11–3.14, 3.12 recommended): `uv pip install -U "mineru>=4.0,<5"` — the base package covers CPU and Intel/AMD/NVIDIA/Apple GPUs; `mineru[torch]` or `mineru[full]` (high-throughput NVIDIA) on top
- Run, one-off conversion: `mineru-kit parse document.pdf -o document.md --tier standard` (all pages by default)
- Run, document library: `mineru parse document.pdf` (first 10 pages by default, then follow the returned locators); `mineru-kit webui` for the Gradio UI
- Agent skill: `npx skills add opendatalab/MinerU --skill mineru`
- Docs: https://opendatalab.github.io/MinerU/ · 3.x → 4.0 migration: https://opendatalab.github.io/MinerU/reference/migration_4/

Until 3.x the commands were `uv pip install -U "mineru[all]"` and `mineru -p <input> -o <output>` (`-b pipeline` for pure CPU). 4.0 removed both, moved config to `$MINERU_HOME/config.yaml`, and 4.1 broke the HTTP API again (`/v1/tasks` replaces `/v1/uploads` and `/v1/parse/jobs`) — pin the version.

## Reasoning for
The **document ingestion front-end** for any knowledge-base or RAG workflow. Where [[Unlimited-OCR]] is a raw OCR model and [[CocoIndex]] / [[LightRAG]] handle indexing + retrieval, MinerU sits earlier in the chain: turning messy real-world documents into clean structured Markdown that downstream tools can index. Direct fit for feeding sources into [[LLM Knowledge Bases]], [[OpenKB]], or this vault's [[ingest]] pipeline.

Key reasons to reach for it:
- **Agent skill + document library** → `npx skills add opendatalab/MinerU --skill mineru` gives [[Claude Code]] and other agents `mineru parse / read / search / find / watch`, a cache of parsed results, progressive reads (10 pages at a time) and stable citation locators like `doc:{id}/tier:{tier}/page:{n}/block:{n}`. The official MCP server from 3.x is no longer in the README; its integration guides moved to `docs/archive`, and the design docs list MCP only as a planned client. For MCP today it's the CLI + skill or a community wrapper.
- **RAG-framework integrations** — the 3.x guides (RAGFlow, Dify, FastGPT, Cherry Studio and others) now sit under `docs/archive/integrations`. I have not checked which of them still work against the 4.x API.
- **Fully offline / private** — `flash` needs no models and `basic` runs small ONNX models on CPU (~0.8 GB download, 2 GB RAM). `standard` / `advanced` add the VLM via llama.cpp (CPU, Vulkan recommended) or vLLM / LMDeploy (NVIDIA, 8 GB+ VRAM). Since 4.1 it picks up Intel, AMD, NVIDIA and Apple GPUs automatically, integrated graphics included (~2–3× CPU speed). Documents never leave the machine unless you configure remote parsing. Note: the document library ships usage telemetry that is on by default (no document contents) — `mineru telemetry disable` or `MINERU_TELEMETRY_DISABLED=1`.
- **Permissive-ish license** — moved from AGPLv3 to the MinerU Open Source License in April 2026: Apache-2.0 plus extra terms. Commercial use is free unless you and your affiliates exceed 100M MAU or USD 20M monthly revenue; online services built on it must state prominently that they use MinerU; breaching either term ends the licence automatically. The VLM weights are Apache-2.0.

### 🧩 Quality tiers (4.x)
| Tier | What runs | Hardware | Use for |
|---|---|---|---|
| `flash` | Native parsing, no models; the only tier for Office / HTML / EPUB inputs | CPU | Preview, indexing, `watch` |
| `basic` | Small ONNX or Torch models (OCR, formulas, tables) | CPU works | Private local reading on modest hardware |
| `standard` | Small models + VLM | CPU + llama.cpp, or GPU | Default for normal reading and complex layouts |
| `advanced` | Same models as `standard`, more inference compute | Same as `standard` | Difficult documents, slowest |

PDF and images support all four tiers. Office-type inputs get `flash` only, so there's no OCR of embedded images there. The hosted Hugging Face demo offers only `flash` and `basic`; the ModelScope demo has all four. VLM model is still `MinerU2.5-Pro-2605-1.2B` (GGUF build for llama.cpp); `mineru-kit models download --tier <tier>` fetches the 4.0 bundles, and `mineru-kit hardware detect` recommends a tier.

Until 3.x the knobs were the `pipeline` / `vlm` / `hybrid` backends (OmniDocBench v1.6: 86.47 / 95.30 / 95.39) and `hybrid` `effort=medium|high`. 4.0 removed them, and the migration guide says not to map old backend names onto tiers.

## Alternatives considered
- [[Unlimited-OCR]] — Baidu ~3.3B OCR model (v2 since 2026-10-27); lower-level, OCR-only vs MinerU's full layout/format pipeline.
- [[Marker]] — Datalab's converter with similar per-page mode routing (`no_ocr` / `fast` / `balanced` / `vllm`); its own benchmark (OmniParseBench) claims it is faster and more accurate than MinerU 2.5-Pro, but its model weights are free for commercial use only under USD 5M funding/revenue.
- [[anydoc]] — model-free and far faster for born-digital Office files, but no OCR.
- [[Open Notebook]] — NotebookLM clone; ingests PDFs but for chat/podcast, not structured extraction.
- Commercial doc-AI APIs — MinerU trades polish for open-source + offline control.
- Sibling OpenDataLab tools: PDF-Extract-Kit, Magic-Doc, OmniDocBench (the benchmark MinerU scores against).

## Resources
- Changelog: https://opendatalab.github.io/MinerU/reference/changelog/
- Tiers guide: https://github.com/opendatalab/MinerU/discussions/5709 · 4.1 migration: https://opendatalab.github.io/MinerU/reference/migration_4_1/
- DeepWiki Q&A: https://deepwiki.com/opendatalab/MinerU
- Papers: MinerU2.5-Pro (arXiv 2604.04771), MinerU-Diffusion (2603.22458), MinerU 2.5 (2509.22186), original MinerU (2409.18839)
- Related vault notes: [[LLM Knowledge Bases]], [[OpenKB]], [[CocoIndex]], [[LightRAG]], [[AI Chatbots Architecture]]
- [[OpenMed]] — downstream complement: parse documents with MinerU, then extract clinical entities / de-identify PII on-device

---
Template: [[templates/tool]]
