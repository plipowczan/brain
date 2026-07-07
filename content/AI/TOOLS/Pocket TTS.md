---
title: "Pocket TTS"
date: 2026-07-07
enableToc: true
openToc: true
tags: ["tool", "ai", "tts", "text-to-speech", "cpu", "local", "voice-cloning", "python", "open-source"]
type: tool
source: "_raw/processed/2026-07-07_kyutai-labspocket-tts A TTS that fits in your CPU (and pocket).md"
agent-created: true
summary: "kyutai-labs/pocket-tts — 100M-param text-to-speech that runs on 2 CPU cores: ~200ms first-chunk latency, ~6x real-time on MacBook Air M4, voice cloning, streaming, 6 languages; pip install + one function call, no GPU, no API."
---

# Pocket TTS

## 🚀 Description

[kyutai-labs/pocket-tts](https://github.com/kyutai-labs/pocket-tts) — a **text-to-speech model that fits in your CPU (and pocket)**. Kyutai's answer to the "TTS needs a GPU or a paid API" assumption: a **100M-parameter** model that generates speech **~6× faster than real-time on a MacBook Air M4 using only 2 CPU cores**, with **~200ms latency** to the first audio chunk.

![[8430bba521aa3ed482f02173fc52b217_MD5.png]]

Generating audio is `pip install pocket-tts` (or `uvx pocket-tts generate`) and one function call. Kyutai explicitly tried GPU execution and found **no speedup** over CPU — at batch size 1 with a model this small, the GPU buys nothing.

## 🧩 Features

- **CPU-only by design** — 100M params, 2 cores, PyTorch 2.5+ (CPU build), Python 3.10–3.14.
- **Streaming + low latency** — ~200ms to first chunk; handles **infinitely long text inputs**.
- **Voice cloning** — pass any wav file as `--voice`; `export-voice` converts audio → fast-loading safetensors embedding (just a KV-cache read). Curated voice catalog on [kyutai/tts-voices](https://huggingface.co/kyutai/tts-voices).
- **6 languages** — English, French, German, Portuguese, Italian, Spanish; non-English also in higher-quality 24-layer variants (`--language italian_24l`). **No Polish.**
- **Three interfaces** — CLI (`generate` / `serve` / `export-voice`), local HTTP server with web UI, and a plain Python API (`TTSModel.load_model()` → `generate_audio()`).
- **Runs in the browser** — small enough for WASM; community ports: Rust/XN, ONNX Runtime Web, Candle, jax-js.
- **Big ecosystem** — MLX (Apple Silicon), C++ single-file runtime (PocketTTS.cpp), sherpa-onnx (12 language bindings, Raspberry Pi/Jetson), C#/.NET port, OpenAI-compatible streaming servers, Home Assistant (Wyoming), ComfyUI node, Discord bots, audiobook tools.

## Reasoning for

Fills the **free local tier** of my TTS stack thinking — the same slot [[Chatterbox TTS]] holds in [[Travelcast AI]]'s fallback chain, but radically cheaper to run: no GPU, no torch-CUDA install, ~instant startup via `uvx`. For agent voice output ([[Voicebox]] pattern) or any pipeline where [[ElevenLabs]]-quality is overkill, a 100M CPU model with streaming and cloning is the new floor. Main limitation for my use: **no Polish** — see [[TTS Engines Comparison (Polish)]], where Azure still wins Polish quality. The prohibited-use policy requires lawful consent for voice cloning.

## Alternatives considered

- [[Chatterbox TTS]] — open-source local TTS with cloning, but torch-heavy; Pocket TTS is far lighter.
- [[Voicebox]] — local-first voice *studio* (7 TTS engines, STT, MCP) — an app, not a library; could adopt Pocket TTS as an engine.
- [[ElevenLabs]] — best-in-class quality and languages (paid API); Pocket TTS is the zero-cost offline end of that spectrum.
- [[OpenAI]] TTS — cloud API voices; no offline story.

## 🔗 Links

- Repo: https://github.com/kyutai-labs/pocket-tts
- Demo (browser, no install): https://kyutai.org/pocket-tts
- Model card: https://huggingface.co/kyutai/pocket-tts
- Tech report: https://kyutai.org/blog/2026-01-13-pocket-tts
- Paper: https://arxiv.org/abs/2509.06926
- Docs: https://kyutai-labs.github.io/pocket-tts/

## 🔗 Related notes

- [[TTS Engines Comparison (Polish)]] — my Polish TTS quality/cost benchmark (Pocket TTS doesn't support Polish)
- [[Chatterbox TTS]] · [[Voicebox]] — local/open TTS siblings
- [[ElevenLabs]] · [[OpenAI]] — the cloud tiers above it
- [[Travelcast AI]] — project with a TTS fallback chain this could slot into

---
Template: [[templates/tool]]
