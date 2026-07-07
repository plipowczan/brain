---
title: "Voicebox"
date: 2026-05-19
enableToc: true
openToc: true
tags: ["tool", "ai", "voice", "tts", "stt", "mcp", "local-first", "open-source", "rust", "tauri"]
type: tool
source: "_raw/inbox/jamiepinevoicebox The open-source AI voice studio. Clone, dictate, create.md"
agent-created: true
summary: "Local-first AI voice studio — free OSS alternative to ElevenLabs + WisprFlow in one app. 7 TTS engines, 23 languages, voice cloning, MCP-aware agent voice output"
---

# Voicebox

## 🚀 Description

[jamiepine/voicebox](https://github.com/jamiepine/voicebox) — local-first AI voice studio. Free and open-source alternative to **ElevenLabs** (TTS) and **WisprFlow** (STT) in one app. Clone any voice from a few seconds of audio, generate speech in 23 languages across 7 TTS engines, dictate into any text field with a global hotkey, give any MCP-aware agent a voice you've cloned.

Built with Tauri (Rust), not Electron. Privacy by default — models, voice data, and captures never leave the machine.

## 🧩 Features

- **Complete privacy** — runs entirely locally
- **7 TTS engines** — Qwen3-TTS, Qwen CustomVoice, LuxTTS, Chatterbox Multilingual, Chatterbox Turbo, HumeAI TADA, Kokoro
- **Voice cloning** — zero-shot from a reference sample, or 50+ preset voices
- **23 languages** — incl. Polish, Arabic, Japanese, Hindi, Swahili
- **Post-processing** — pitch shift, reverb, delay, chorus, compressor, filters (Spotify pedalboard)
- **Expressive speech** — paralinguistic tags `[laugh]` `[sigh]` `[gasp]` via Chatterbox Turbo
- **Unlimited length** — auto-chunking + crossfade up to 50,000 chars
- **Voice input** — global dictation hotkey, push-to-talk, auto-paste, in-app mic, Whisper STT
- **Agent voice output** — `voicebox.speak` MCP tool — Claude Code, Cursor, Cline speak in cloned voices
- **Voice personalities** — free-form personas + bundled local LLM for Compose/Rewrite/Respond (also MCP-exposed)
- **API-first** — REST API + built-in MCP server
- **Runs everywhere** — macOS MLX/Metal, Windows CUDA, Linux, AMD ROCm, Intel Arc, Docker

## 🎨 Why this matters for an agent workflow

Bridges the input and output halves of voice I/O. Existing cloud incumbents sit on opposite sides — Voicebox does both, glued by a local LLM. MCP integration means a [[Claude Code]] session can literally talk back to you in a voice you own — useful for [[Pulse]]-style background notifications or [[Personal AI Infrastructure]] DA personas.

## Reasoning for

Local voice cloning for personal projects, dictation across all apps, giving any MCP-aware agent a configurable voice. The privacy story is the killer feature — ElevenLabs has every word you've cloned; Voicebox keeps it on the box.

## Alternatives considered

- ElevenLabs — best quality, cloud-only, paid
- WisprFlow — STT-only, cloud
- Whisper.cpp + Piper — DIY local stack, no GUI, no MCP

## 🔗 Links

- Repo: https://github.com/jamiepine/voicebox
- Site: https://voicebox.sh/
- Docs: https://docs.voicebox.sh/

## 🔗 Related notes

- [[TTS Engines Comparison (Polish)]] — where Voicebox's TTS engines (Kokoro, Chatterbox, Qwen3-TTS) sit vs cloud rivals for Polish
- [[Pocket TTS]] — Kyutai's 100M CPU-only TTS engine; candidate 8th engine, same local-first philosophy
- [[Claude Code]] — primary MCP host
- [[Personal AI Infrastructure]] — DA voice personas
- [[Hermes Agent]] — agent that benefits from spoken output
- [[Paperclip]] — agent orchestration

---
Template: [[templates/tool]]
