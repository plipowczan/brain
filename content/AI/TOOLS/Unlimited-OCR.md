---
title: "Unlimited-OCR"
date: 2026-06-24
enableToc: true
openToc: true
tags: ["tool", "ai", "ocr", "document-parsing", "open-source", "apache-2.0"]
type: tool
source: "_raw/processed/2026-06-24_baiduUnlimited-OCR Unlimited OCR Works Welcome the Era of One-shot Long-horizon Parsing.md"
agent-created: true
summary: "Baidu's 3B OCR model — constant KV cache via Reference Sliding Window Attention, transcribes dozens of pages in one forward pass under 32K"
---
# Unlimited-OCR
End-to-end OCR model from Baidu that parses **dozens of pages of documents in a single forward pass** under a standard 32K max length — "one-shot long-horizon parsing." Builds directly on [DeepSeek-OCR](https://github.com/deepseek-ai/DeepSeek-OCR), pushing it one step further. 3B params, BF16, Apache-2.0.

## Links
### Description
The key idea: end-to-end OCR with an LLM decoder benefits from the language prior, but as output lengthens the **accumulated KV cache balloons memory and slows generation** — unlike a human, who copies long documents without efficiency decline. Unlimited-OCR emulates human "parsing working memory" by replacing all decoder attention layers with **Reference Sliding Window Attention (R-SWA)**, which keeps a **constant KV cache** across the whole decode and cuts attention compute. Combined with DeepSeek-OCR's high-compression encoder, that constant cache is what enables single-pass multi-page transcription.

R-SWA is general-purpose parsing attention — beyond OCR it applies to ASR, translation, and similar long-horizon copy tasks.

### Download or use
- GitHub: https://github.com/baidu/Unlimited-OCR
- Model weights (Hugging Face): https://huggingface.co/baidu/Unlimited-OCR
- ModelScope: https://modelscope.cn/models/PaddlePaddle/Unlimited-OCR
- Live demo (HF Spaces): https://huggingface.co/spaces/baidu/Unlimited-OCR
- Paper (arXiv 2606.23050): https://arxiv.org/abs/2606.23050

## Reasoning for
Long-document OCR for the knowledge base. Where a chat-clipper or a generic OCR chokes on multi-page scans, a constant-KV-cache model parses an entire PDF in one shot — relevant to feeding scanned books/papers into the vault and to the long-document handling [[OpenKB]] / [[PageIndex]] solve from the retrieval side. Self-hostable (Transformers or SGLang), so document parsing stays local.

## 🧩 Inference
Two paths, both on NVIDIA GPUs (tested python 3.12 + CUDA 12.9):
- **Transformers** — `AutoModel.from_pretrained('baidu/Unlimited-OCR', trust_remote_code=True)`, then `model.infer(...)` for a single image (configs: `gundam` = base_size 1024 / image_size 640 / crop; `base` = 1024/1024/no-crop) or `model.infer_multi(...)` for multi-page / PDF (base only). PDFs are rasterized page-by-page with PyMuPDF first.
- **SGLang** — launch an OpenAI-compatible server (`sglang.launch_server --model baidu/Unlimited-OCR --enable-custom-logit-processor ...`), stream requests with a `DeepseekOCRNoRepeatNGramLogitProcessor`. `infer.py` auto-starts the server and fans out concurrent requests over an image dir or PDF (`--concurrency 8 --image_mode gundam`).

![[548091ce158a964c594ccfdde7f79e69_MD5.gif]]

## Alternatives considered
- [DeepSeek-OCR](https://github.com/deepseek-ai/DeepSeek-OCR) / DeepSeek-OCR-2 — the baseline Unlimited-OCR extends; growing KV cache on long output.
- [PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) — classic pipeline OCR.

## Resources
- Paper: [Unlimited OCR Works (arXiv 2606.23050)](https://arxiv.org/abs/2606.23050) — Youyang Yin et al., Baidu, cs.CV/cs.CL, v1 22 Jun 2026.
- Related vault notes: [[OpenKB]], [[LLM Knowledge Bases]], [[Graphify]]

---
Template: [[templates/tool]]
