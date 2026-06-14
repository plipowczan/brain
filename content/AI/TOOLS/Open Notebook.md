---
title: "Open Notebook"
date: 2026-06-14
enableToc: true
openToc: true
tags: ["tool", "ai", "knowledge-management", "rag", "podcast", "self-hosted", "local", "open-source"]
type: tool
source: "_raw/processed/2026-06-14_yt-zjFE-dBzP_E_you-need-to-try-these-open-source-ai-projects-right-now.md"
agent-created: true
summary: "lfnovo/open-notebook — open-source, self-hostable NotebookLM clone. Upload PDFs/URLs/audio/video, chat with sources, generate multi-speaker podcasts. Runs hosted or fully local (Ollama/LM Studio). ~28k stars."
---

# Open Notebook

## 🚀 Description

[lfnovo/open-notebook](https://github.com/lfnovo/open-notebook) by Luis Novo — the open-source, self-hostable answer to Google's NotebookLM. Drop in PDFs, web pages, YouTube videos, audio, or office docs; chat with them, ask grounded questions with citations, and generate a synthesized multi-host **podcast** from the material. ~28k stars in June 2026.

Unlike Google's hosted product, you own the data and pick the models — run it on hosted APIs ([[OpenAI]], Anthropic) **or completely local** via Ollama / LM Studio. 16+ providers supported.

## 🧩 Features

- **Source ingestion** — PDFs, URLs, YouTube, audio, office docs; even thousand-page PDFs.
- **Grounded Q&A** — answers cite the specific source passage.
- **Podcast generation** — multi-host, configurable tones, editable script; "hyper-customizable because it's all local and open source."
- **Transformations** — extract key insights, dense summary, analyze-a-paper, reflection questions, simple summary + table of contents.
- **Per-process model selection** — separate models for chat, embeddings, TTS, STT, tools, and transformations; mix providers freely.
- **Local-capable** — power voice + LLM entirely on-device.

## Reasoning for

A self-hosted research companion that doubles as a podcast generator — directly relevant to [[Travelcast AI]] (audio/podcast pipeline) and to my own [[Building a Second Brain]] / [[Second Brain Design]] workflow for interrogating long sources. The local option keeps private documents off third-party servers. Pair the podcast voices with [[ElevenLabs]] for more natural output (as the source video does).

## 🔗 Links

- Repo: https://github.com/lfnovo/open-notebook
- Docs: https://github.com/lfnovo/open-notebook/tree/main/docs
- Quick start: clone + `make start-all`, or Docker (`lfnovo/open_notebook`)

## 🔗 Related notes

- [[Travelcast AI]] — my multi-agent podcast generator; overlapping problem space
- [[ElevenLabs]] — natural TTS to drive the podcast voices
- [[Second Brain Design]] · [[Building a Second Brain]] — PKM context
- Surfaced in [[Open-Source AI Projects Roundup (Matthew Berman)]]

---
Template: [[templates/tool]]
