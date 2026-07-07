---
title: "OpenMed"
date: 2026-07-07
enableToc: true
openToc: true
tags: ["tool", "ai", "healthcare", "ner", "pii", "privacy", "local-first", "on-device", "mlx", "apache-2.0", "open-source"]
type: tool
source: "_raw/processed/2026-07-07_maziyarpanahi-openmed.md"
agent-created: true
summary: "maziyarpanahi/openmed — local-first healthcare AI: clinical NER + HIPAA PII de-identification, 100% on-device; 1,000+ medical models, 247 PII checkpoints in 15 languages, Python/MLX/Swift/REST/WebGPU, Apache-2.0."
---

# OpenMed

## 🚀 Description

[maziyarpanahi/openmed](https://github.com/maziyarpanahi/openmed) — **local-first healthcare AI that never leaves the device**. Clinical NER (diseases, drugs, anatomy, genes) and **HIPAA PII de-identification** running 100% on your own hardware: `pip install "openmed[hf]"`, one function call, no API key, no network call, no patient data leaving the network. **1,000+ curated medical models · 247 PII checkpoints · 15 languages · Apache-2.0.**

![[6bde58f1688aef00dc5737e3797d0d29_MD5.gif]]

Runs everywhere the data lives: CPU/CUDA PyTorch, **Apple Silicon via MLX** (24–33× faster than CPU PyTorch for the Privacy Filter), native iOS/macOS apps through **OpenMedKit** (Swift), a Dockerized FastAPI REST service, and in-browser WebGPU token classification via Transformers.js ONNX export.

## 🧩 Features

- **One-liner NER** — `analyze_text(text, model_name="disease_detection_superclinical")` → typed entities with confidence; registry of specialist models (disease, pharma, anatomy, gene, PII) 109M–434M params.
- **HIPAA-aware de-identification** — all 18 Safe Harbor identifiers; `deidentify()` methods: `mask`, `replace` (Faker-backed, locale-aware, format-preserving fakes incl. CPF/BSN/Aadhaar/PESEL-style national IDs), `hash`, `shift_dates`. Policy profiles for HIPAA/GDPR/research with signed audit reports.
- **Smart entity merging** — keeps `01/15/1970` one DATE instead of tokenizer fragments.
- **Privacy Filter family** — three weight sets on the OpenAI Privacy Filter architecture (gpt-oss-style sparse-MoE): OpenAI baseline, NVIDIA Nemotron-PII fine-tune, OpenMed multilingual; same `extract_pii()` API, MLX + 8-bit variants; MLX names auto-fall-back to PyTorch checkpoints on non-Apple hosts.
- **Multilingual PII** — 15 language codes (ar, de, en, es, fr, he, hi, id, it, ja, nl, pt, te, th, tr). **No Polish.**
- **Production REST service** — warm pools, dynamic batching, request coalescing, rate limits, `/livez` `/readyz`, model unload/keep-alive; batch mode up to 3.3× CPU throughput.
- **Air-gapped mode** — point `model_id` at a local directory; never contacts Hugging Face Hub.
- **FHIR + HL7 v2 interop docs** — de-identification wired into healthcare data formats.

## Reasoning for

The strongest example yet in this vault of the **local-first, data-never-leaves** pattern applied to a regulated domain — the same argument [[Voicebox]] makes for voice and [[LibreChat]] for chat, but with real compliance stakes (its security policy treats a redaction bypass as a vulnerability). Two practical angles for me: (1) the **PII de-identification pipeline is domain-generic** — 247 checkpoints, Faker-backed format-preserving replacement, and policy profiles are directly relevant to any client project that must scrub personal data before sending text to a cloud LLM; (2) as a document pipeline it composes with [[MinerU]] / [[Unlimited-OCR]] — scan/parse first, then extract entities and redact on-device. Polish absence limits direct PLSoft use for now.

## Alternatives considered

- Cloud medical APIs (AWS Comprehend Medical, Google Healthcare NLP) — per-call pricing, PHI sent to the vendor; OpenMed's entire pitch is the inverse.
- Microsoft Presidio — general-purpose open-source PII de-identification, regex+NER hybrid; OpenMed is transformer-based, medical-specialized, with far more checkpoints.
- spaCy/scispaCy — lighter biomedical NER, weaker on de-identification tooling and deployment story.

## 🔗 Links

- Repo: https://github.com/maziyarpanahi/openmed
- Docs: https://openmed.life/docs/
- Model registry: https://openmed.life/docs/model-registry
- Paper (OpenMed NER): https://arxiv.org/abs/2508.01630

## 🔗 Related notes

- [[MinerU]] · [[Unlimited-OCR]] — upstream document parsing; combined = scan → structure → de-identify, all local
- [[Voicebox]] · [[LibreChat]] — the local-first pattern in other modalities
- [[AI Agent Security]] — the data-leaves-the-network risk class this eliminates

---
Template: [[templates/tool]]
