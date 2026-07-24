---
title: "Ollama"
date: 2026-07-24
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "local", "inference", "models", "self-hosted", "open-source"]
type: tool
source: "https://github.com/ollama/ollama"
agent-created: true
summary: "Run open LLMs locally with one command — pulls and serves Kimi-K2.6, GLM-5.2, DeepSeek, gpt-oss, Qwen, Gemma etc. behind a REST API; macOS/Linux/Windows/Docker"
---
# Ollama

`ollama/ollama` — the simplest way to **run open LLMs on your own machine**. One command pulls a quantized model and serves it behind a local **REST API** (OpenAI-compatible endpoints included), so local inference feels like calling a hosted provider. Ships current open models out of the box — Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma — across macOS, Linux, Windows, and Docker.

In the [[LLM App Engineering Stack]] this is the **local model-serving lane**: the private, offline, zero-marginal-cost backend that everything else can point at. [[LiteLLM]] routes to it under the unified schema; [[Instructor]] and [[Outlines]] both list it as a provider; [[Open Notebook]] runs fully local on it. The reason to reach for Ollama is data staying on-device and no per-token bill.

## 🔗 Links

### Description
- Repo: https://github.com/ollama/ollama
- Site / model library: https://ollama.com
- License: **MIT**

### Download or use
```bash
# macOS / Linux
curl -fsSL https://ollama.com/install.sh | sh
# then
ollama run qwen3
```
```bash
# REST API (also OpenAI-compatible at /v1)
curl http://localhost:11434/api/generate -d '{"model":"qwen3","prompt":"hi"}'
```
```bash
# Docker
docker run -d -v ollama:/root/.ollama -p 11434:11434 ollama/ollama
```
```bash
pip install ollama    # Python client
```

## 🗒️ Description

### 🧩 What it gives you
- **One-command model management** — `pull`, `run`, `list`, `rm`; a curated model library with quantized variants sized for consumer hardware.
- **REST API + OpenAI compatibility** — drop-in for code already written against the OpenAI schema.
- **Modelfiles** — declaratively customise a base model (system prompt, params, adapters) into a named local model.
- **Multiple backends** — GPU (CUDA/Metal/ROCm) and CPU; picks what's available.
- **Broad integrations** — LangChain, LlamaIndex, [[LiteLLM]], Open WebUI, and dozens more community front-ends.

## ✍️ Reasoning for
- **Privacy / offline** — runs client or sensitive data locally, no third-party API. Matters for [[Tech To The Rescue]]-style engagements and personal-data work.
- **Cost** — after the hardware, inference is free; good for high-volume batch jobs and dev loops.
- **Uniform interface** — the OpenAI-compatible endpoint means I can develop against local models and switch to hosted ones (via [[LiteLLM]]) without rewriting call sites.

Weak points: local models still trail frontier hosted models on hard reasoning; large models need serious VRAM; you own the ops (updates, serving, scaling) that a hosted API hides.

## Alternatives considered
- **LM Studio** — GUI-first local runner; friendlier UI, less scriptable/serverless.
- **llama.cpp** — the lower-level engine Ollama builds on; more control, more setup.
- **vLLM** — production-grade high-throughput serving; heavier, GPU-centric, not a desktop tool.
- **Hosted APIs (OpenAI/Anthropic)** — best quality, but paid and off-device; opposite trade-off.

## 🔗 Resources
- README: https://github.com/ollama/ollama
- Model library: https://ollama.com/library
- API docs: https://github.com/ollama/ollama/blob/main/docs/api.md

---
Template: [[templates/tool]]
