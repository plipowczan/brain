---
title: "ElevenLabs"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "ai", "tts", "text-to-speech", "voice", "audio", "voice-cloning"]
type: tool
agent-created: true
summary: "Best-in-class AI text-to-speech and voice cloning — multilingual, expressive voices; the primary TTS provider in my audio pipelines with cloud/local fallbacks behind it"
status-checked: 2026-11-13
project-status: active
---

# ElevenLabs

> [!success] Status check 2026-11-13 — active
> **Verdict:** The changelog has weekly entries: 2026-10-19 (Eleven Realtime voice-agent models, Realtime Translation, Video to Music), 2026-10-26, 2026-11-02 (SFX v3, Eleven v4 PVC fine-tuning) and 2026-11-09 (Scribe v3).
> **Latest release:** Scribe v3 and Scribe v3 Live (speech to text), 2026-11-09, per the changelog. · **last dated update:** 2026-11-09 · **licence:** Proprietary SaaS with credit-based subscriptions.
> **Source:** https://elevenlabs.io/docs/changelog
> **Changed since this note:** Eleven v4 and Eleven v4 Turbo (2026-09-28) are a new architecture with 90+ languages, inline audio tags and sound effects. v4 Turbo has about 100 ms median inference latency for voice agents. Professional Voice Clone fine-tuning on v4 and a clone_strength parameter followed in October and November.

A cloud AI platform best known for state-of-the-art **text-to-speech** and **voice cloning**. Its voices are notably expressive and natural across many languages, which is why it's my primary TTS provider for anything user-facing in audio. Beyond raw TTS it offers voice design/cloning, a dubbing pipeline, and conversational/agent voice APIs.

## Links

### Description

- **Text-to-Speech** — highly natural, expressive multilingual voices; control over stability, similarity, style.
- **Voice cloning / Voice design** — create custom voices from samples or from a prompt.
- **Multilingual models** — one voice speaking many languages with good prosody.
- **Dubbing** — translate + revoice existing audio/video.
- **Conversational AI / Agents** — low-latency voice for interactive agents.
- **Streaming API** — chunked audio for real-time playback.

### Download or use

```bash
npm i @elevenlabs/elevenlabs-js   # or: pip install elevenlabs
```

- Platform: [elevenlabs.io](https://elevenlabs.io/)
- Docs: [elevenlabs.io/docs](https://elevenlabs.io/docs)

## Reasoning for

ElevenLabs is the **first tier** in [[Travelcast AI]]'s TTS fallback chain — it generates the podcast narration, with [[OpenAI]] TTS and the local Chatterbox model behind it so a render never fully fails. It's the primary because voice quality is the product in an AI-podcast: expressive, natural multilingual speech is what makes a generated episode listenable rather than robotic. It also features in [[Value Builders]] as the go-to voice tool when teaching AI audio/media workflows. The architectural lesson it embodies — and one I reused elsewhere — is **multi-provider fallback for any external generative dependency**: best-quality vendor first, cheaper/local options as safety nets (see the broader pattern in [[TTS Engines Comparison (Polish)]]).

## Alternatives considered

- **[[OpenAI]] TTS** — good quality and cheaper; used as the *second* tier fallback, not primary, because ElevenLabs is more expressive.
- **Chatterbox TTS** — local, free, torch-based; the *final* fallback when cloud providers are unavailable or cost-sensitive.
- **[[Voicebox]]** — voice tooling already in the vault; ElevenLabs chosen for production multilingual quality + cloning.
- **Play.ht / Azure / Google TTS** — solid alternatives; ElevenLabs led on voice naturalness and cloning at the time of building.

## Resources

- 📘 [ElevenLabs docs](https://elevenlabs.io/docs)
- 🗣️ [Voice cloning](https://elevenlabs.io/voice-cloning)
- 🔊 [TTS API](https://elevenlabs.io/docs/capabilities/text-to-speech)
- 📊 [[TTS Engines Comparison (Polish)]] — provider comparison
- [[Voice Studio — Free ElevenLabs Alternative (Maitis)]] — a YouTube demo of a free local alternative (cloning, voice design, dubbing); repo not yet identified
---
Template: [[templates/tool]]
