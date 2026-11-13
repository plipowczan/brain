---
title: "Unlimited-OCR"
date: 2026-06-24
enableToc: true
openToc: true
tags: ["tool", "ai", "ocr", "document-parsing", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-06-24_baiduUnlimited-OCR Unlimited OCR Works Welcome the Era of One-shot Long-horizon Parsing.md"
agent-created: true
summary: "Baidu's ~3.3B end-to-end OCR model (MIT) — v1's Reference Sliding Window Attention parses dozens of pages in one pass; Unlimited-OCR 2 (2026-10-27) adds Sparse R-SWA for hundred-page documents and whole books in one request"
status-checked: 2026-11-13
project-status: active
agent-reviewed: 2026-11-13
repo: "https://github.com/baidu/Unlimited-OCR"
---
# Unlimited-OCR

> [!success] Status check 2026-11-13 — active
> **Verdict:** Unlimited-OCR 2 shipped on 2026-10-27, along with the MarathonDocBench benchmark, ModelScope and Baidu Cloud availability and a HF Space.
> **Last release:** No GitHub releases. The only tag is UnlimitedOCR1.0, which points at a 2026-10-12 commit and marks the v1… · **last commit:** 2026-11-09 · **licence:** MIT, for both the code (LICENSE has been MIT since the initial commit on 2026-06-22) and the model weights (the Hugging…
> **Repo:** https://github.com/baidu/Unlimited-OCR
> **Changed since this note:** Since the note (2026-06-24): vLLM inference support (2026-06-28), Baidu Cloud availability (2026-07-03) and ms-swift fine-tuning support (2026-07-21). The main change is Unlimited-OCR 2 (2026-10-27, paper 'Unlimited OCR Works 2', arXiv 2610.39308, 2026-10-29).

End-to-end OCR model from Baidu; v1 parses **dozens of pages of documents in a single forward pass** under a standard 32K max length — "one-shot long-horizon parsing." Builds directly on [DeepSeek-OCR](https://github.com/deepseek-ai/DeepSeek-OCR), pushing it one step further. ~3.3B params, BF16, **MIT** for both code and weights (I had it as Apache-2.0 here; the LICENSE file has been MIT since the first commit).

**Unlimited-OCR 2 (2026-10-27)** replaced v1 on the repo's `main` branch (model `baidu/Unlimited-OCR-2`); the v1 code is kept at tag `UnlimitedOCR1.0` and its weights stay at `baidu/Unlimited-OCR`. v2 moves from "dozens of pages" to "unlimited-horizon" parsing: hundred-page documents and whole books in one request.

## Links
### Description
The key idea: end-to-end OCR with an LLM decoder benefits from the language prior, but as output lengthens the **accumulated KV cache balloons memory and slows generation** — unlike a human, who copies long documents without efficiency decline. Unlimited-OCR emulates human "parsing working memory" by replacing all decoder attention layers with **Reference Sliding Window Attention (R-SWA)**, which keeps a **constant KV cache** across the whole decode and cuts attention compute. Combined with DeepSeek-OCR's high-compression encoder, that constant cache is what enables single-pass multi-page transcription.

R-SWA is general-purpose parsing attention — beyond OCR it applies to ASR, translation, and similar long-horizon copy tasks.

v2 swaps R-SWA for **Sparse Reference Sliding Window Attention (SR-SWA)**: attention is capped at a fixed set of working reference tokens (e.g. 512), so per-step latency and memory stay nearly constant however long the document gets. The v2 paper reports 7.0× per-step speedup over full attention and 5.6× over R-SWA at hundred-page scale, plus state-of-the-art results on MPDocBench and Baidu's new MarathonDocBench (hundred-page documents) — Baidu's own benchmark, so worth re-testing.

### Download or use
- GitHub: https://github.com/baidu/Unlimited-OCR (`main` = v2; v1 code at tag `UnlimitedOCR1.0`)
- Model weights (Hugging Face): v2 https://huggingface.co/baidu/Unlimited-OCR-2 · v1 https://huggingface.co/baidu/Unlimited-OCR
- ModelScope: v2 https://modelscope.cn/models/PaddlePaddle/Unlimited-OCR-2 · v1 https://modelscope.cn/models/PaddlePaddle/Unlimited-OCR
- Live demo (HF Spaces): v2 https://huggingface.co/spaces/baidu/Unlimited-OCR-2 · v1 https://huggingface.co/spaces/baidu/Unlimited-OCR
- Hosted: Baidu Cloud OCR https://cloud.baidu.com/doc/OCR/s/fmr1p39gb (v1 since 2026-07-03; v2 since 2026-10-27)
- Papers: v1 (arXiv 2606.23050) https://arxiv.org/abs/2606.23050 · v2 (arXiv 2610.39308) https://arxiv.org/abs/2610.39308
- Benchmark: the README links MarathonDocBench at https://huggingface.co/datasets/baidu/MarathonDocBench, but that page returned HTTP 401 when I checked on 2026-11-13, so it may not be public yet.

## Reasoning for
Long-document OCR for the knowledge base. Where a chat-clipper or a generic OCR chokes on multi-page scans, a constant-KV-cache model parses an entire PDF in one shot — relevant to feeding scanned books/papers into the vault and to the long-document handling [[OpenKB]] / [[PageIndex]] solve from the retrieval side. Self-hostable (Transformers or SGLang; v1 also on vLLM since 2026-06-28, fine-tuning via ms-swift), so document parsing stays local — but only on a big NVIDIA GPU. For a full layout-aware document pipeline (tables → HTML, formulas → LaTeX, format conversion across PDF/DOCX/PPTX/XLSX) rather than a raw OCR model, see [[MinerU]].

## 🧩 Inference
Two paths for v2, both on NVIDIA GPUs (tested on an A800-80GB):
- **Transformers** (quick tests) — pinned to Python 3.10, `torch==2.13.0`, `transformers==4.52.1`. `AutoModel.from_pretrained('baidu/Unlimited-OCR-2', trust_remote_code=True, torch_dtype=torch.bfloat16)`, then `model.infer(...)` for a single page (dynamic tiling, `gundam` mode, by default) or `model.infer_multi(...)` for all pages of a document in one request (one global view per page, `base` mode). PDFs are rasterized page-by-page with PyMuPDF first.
- **SGLang** (recommended for serving) — needs the customised SGLang wheel shipped in the repo (`sglang-0.5.20.dev13`), Python 3.10, plus a set of `SGLANG_UOCR_*` env vars for page-window scheduling on very long documents. Launch an OpenAI-compatible server (`python -m sglang.launch_server --model-path baidu/Unlimited-OCR-2 --enable-custom-logit-processor ...`) and stream requests with a `DeepseekOCRNoRepeatNGramLogitProcessor` (required — the decoder can repeat itself on degraded scans). `infer.py` is now the batch client for MPDocBench / MarathonDocBench against that server.

v1 (tag `UnlimitedOCR1.0`, tested on Python 3.12 + CUDA 12.9) used the same two paths with `baidu/Unlimited-OCR`; its `infer.py` auto-started the SGLang server and fanned out requests over an image dir or PDF.

No GitHub releases — only the one tag — and `main` switched from v1 to v2 in place, so I'd pin a model revision.

> [!note] Long-horizon parsing demo (animated, v1): [long-horizon-ocr.gif](https://github.com/baidu/Unlimited-OCR/blob/UnlimitedOCR1.0/assets/long-horizon-ocr.gif) — not embedded (78 MB). The v2 README replays a full-length book parsed in one request instead.

## Alternatives considered
- [DeepSeek-OCR](https://github.com/deepseek-ai/DeepSeek-OCR) / DeepSeek-OCR-2 — the baseline Unlimited-OCR extends; growing KV cache on long output.
- [PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) — classic pipeline OCR.
- [[Marker]] / [[MinerU]] — full conversion pipelines (layout, tables → HTML, formulas → LaTeX, Office inputs) around smaller VLMs; Unlimited-OCR is a raw model with none of that post-processing or structured JSON.

## Resources
- Paper: [Unlimited OCR Works (arXiv 2606.23050)](https://arxiv.org/abs/2606.23050) — Youyang Yin et al., Baidu, cs.CV/cs.CL, v1 22 Jun 2026.
- Paper: [Unlimited OCR Works 2 (arXiv 2610.39308)](https://arxiv.org/abs/2610.39308) — Baidu ERNIE Team, 29 Oct 2026.
- Related vault notes: [[MinerU]], [[OpenKB]], [[LLM Knowledge Bases]], [[Graphify]]

---
Template: [[templates/tool]]
