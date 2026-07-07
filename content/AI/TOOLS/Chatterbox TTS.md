---
title: "Chatterbox TTS"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "ai", "tts", "text-to-speech", "open-source", "local", "voice"]
type: tool
agent-created: true
summary: "Open-source, local, torch-based text-to-speech with voice cloning — the free final-tier fallback in Travelcast AI's TTS chain"
---

# Chatterbox TTS

An open-source, locally-runnable text-to-speech model (from Resemble AI), built on PyTorch. It does zero-shot voice cloning and expressive speech, runs on your own GPU/CPU with no per-character API fee, and is permissively licensed. The trade-off versus cloud TTS is quality/latency for **cost and control** — which is exactly what makes it valuable as a safety-net tier.

## Links

### Description

- **Local inference** — runs on your own hardware; no API cost or data leaving the box.
- **Voice cloning** — zero-shot cloning from a short reference sample.
- **Expressive/emotion control** — exaggeration/intensity knobs.
- **PyTorch-based** — integrates into Python audio pipelines.
- **Open-source** — permissive license, self-hostable.

### Download or use

```bash
pip install chatterbox-tts
# model = ChatterboxTTS.from_pretrained(device="cuda")
```

- Repo: [github.com/resemble-ai/chatterbox](https://github.com/resemble-ai/chatterbox)

## Reasoning for

Chatterbox is the **final tier** in [[Travelcast AI]]'s multi-provider TTS fallback chain: [[ElevenLabs]] (primary, best quality) → [[OpenAI]] TTS (cheaper cloud) → **Chatterbox** (local, free). Its job is resilience and cost-floor — if both cloud providers are unavailable, rate-limited, or a run must avoid API spend, generation still completes locally rather than failing. This embodies a principle I reuse: every external generative dependency should degrade gracefully to a self-hosted option, so the pipeline is never fully hostage to a vendor. It's the open-source counterweight to [[ElevenLabs]] in the same way [[Voicebox]] is for local voice tooling generally.

## Alternatives considered

- **[[ElevenLabs]] / [[OpenAI]] TTS** — higher quality, but paid and network-dependent; Chatterbox is the local fallback beneath them.
- **Coqui XTTS / Piper** — other open-source local TTS; Chatterbox chosen for cloning quality + simple PyTorch integration.
- **[[Voicebox]]** — local-first voice studio in the vault; app-oriented, Chatterbox is the library inside a pipeline.

## Resources

- 📘 [Chatterbox repo](https://github.com/resemble-ai/chatterbox)
- 📊 [[TTS Engines Comparison (Polish)]] — broader TTS provider comparison
- 🔗 [[ElevenLabs]] · [[OpenAI]] — the cloud tiers above it
- 🔗 [[Pocket TTS]] — Kyutai's 100M CPU-only TTS; even lighter local tier (no GPU, no torch-CUDA)

---
Template: [[templates/tool]]
