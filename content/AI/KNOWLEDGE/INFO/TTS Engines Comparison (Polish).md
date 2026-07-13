---
title: "TTS Engines Comparison (Polish)"
date: 2026-06-04
enableToc: true
openToc: true
tags: ["research", "compiled", "ai", "tts", "voice", "polish"]
type: compiled-note
source: "research deep research — content/_raw/research-workspaces/tts-silniki-porownanie/"
agent-created: true
summary: "19 TTS engines compared for Polish quality and cost; Azure (MOS-backed) wins quality, Polly wins price."
---

# Text-to-Speech Engines — Quality & Cost Comparison (Polish focus)

> Research across 19 TTS engines, scored on the decisive axis: **native-sounding Polish**. Critical caveat carried throughout — every public leaderboard Elo (Artificial Analysis, TTS Arena) is **English-only** and does *not* measure Polish quality. Values marked uncertain in the source data are omitted below.

## Engines at a glance

1. [Amazon Polly](#amazon-polly) — **PL:** Yes — Polish (pl-PL) is expli… | **Type:** cloud-commercial | **Price:** By engine tier (US pricing, mid-2026):… | **PL evidence:** Language listed + vendor documentation + proven…
2. [AnySpeech (Polish specialist)](#anyspeech-polish-specialist) — **PL:** Yes — Polish is explicitly su… | **Type:** cloud-commercial | **Price:** No explicit $/1M-chars figure published | **PL evidence:** 'Language listed' + a marketing landing page on…
3. [Cartesia Sonic](#cartesia-sonic) — **PL:** Yes — Polish is explicitly li… | **Type:** cloud-commercial | **Price:** Effective rate roughly ~$30/1M characte… | **PL evidence:** Primarily 'language listed' + vendor marketing…
4. [ElevenLabs](#elevenlabs) — **PL:** Yes — Polish is explicitly su… | **Type:** cloud-commercial | **Price:** Effective list rate roughly $50-$100 pe… | **PL evidence:** Primarily 'language listed' + extensive voice c…
5. [Fish Audio OpenAudio S1 / S2-Pro (Fish Speech)](#fish-audio-openaudio-s1-s2-pro-fish-speech) — **PL:** Yes — Polish is explicitly li… | **Type:** open-source (open-weigh… | **Price:** Hosted API: $15 per 1M characters via t… | **PL evidence:** 'Language listed' only
6. [Google Cloud TTS (Chirp 3 HD / WaveNet)](#google-cloud-tts-chirp-3-hd-wavenet) — **PL:** Yes — Polish (pl-PL) is expli… | **Type:** cloud-commercial | **Price:** Standard ~$4/1M chars | **PL evidence:** Language listed / vendor documentation only
7. [Google Gemini 3.1 Flash TTS](#google-gemini-31-flash-tts) — **PL:** Yes — Polish (Polski / pl-PL)… | **Type:** cloud-commercial | **Price:** $1 | **PL evidence:** Language listed / vendor documentation only
8. [Hume AI Octave](#hume-ai-octave) — **PL:** No | **Type:** cloud-commercial | **Price:** Effective rate roughly $7 | **PL evidence:** Negative evidence: Polish is explicitly absent…
9. [Inworld TTS 1.5 Max / TTS-1](#inworld-tts-15-max-tts-1) — **PL:** Yes — Polish is one of the 15… | **Type:** cloud-commercial | **Price:** Inworld list pricing (2026): TTS-2 & TT… | **PL evidence:** Weak for Polish: 'language listed' (GA) plus a…
10. [Microsoft Azure AI Speech (Neural TTS, incl. IVONA-lineage Agnieszka/Marek)](#microsoft-azure-ai-speech-neural-tts-incl-ivona-lineage-agnieszkamarek) — **PL:** Yes — Polish (pl-PL) is expli… | **Type:** cloud-commercial | **Price:** Standard Neural (real-time & batch): ~$… | **PL evidence:** Strong: independent native-speaker MOS study
11. [MiniMax Speech 2.8 (HD / Turbo)](#minimax-speech-28-hd-turbo) — **PL:** Yes — Polish is explicitly su… | **Type:** cloud-commercial | **Price:** Speech 2 | **PL evidence:** 'Language listed' (Polish is an explicit langua…
12. [OpenAI TTS (gpt-4o-mini-tts / Realtime)](#openai-tts-gpt-4o-mini-tts-realtime) — **PL:** Yes — Polish is in the suppor… | **Type:** cloud-commercial | **Price:** gpt-4o-mini-tts: ~$0 | **PL evidence:** Weak — 'language listed/supported' only
13. [PlayHT](#playht) — **PL:** Yes — POLISH is explicitly li… | **Type:** cloud-commercial | **Price:** Free tier: 12,500 characters/month (sta… | **PL evidence:** Mostly 'language listed' — Polish (POLISH) appe…
14. [Speechify SIMBA 3.0](#speechify-simba-30) — **PL:** Partial / qualified YES | **Type:** cloud-commercial | **Price:** $10 per 1,000,000 characters (pay-as-yo… | **PL evidence:** Weakest tier: 'language listed' only — and list…
15. [Bielik + Whisper + system TTS (offline Polish voice stack)](#bielik-whisper-system-tts-offline-polish-voice-stack) — **PL:** Yes — this is the entire purp… | **Type:** open-source | **Price:** $0 in licensing/usage fees | **PL evidence:** Native-speaker review (informal) for the TTS la…
16. [F5-TTS](#f5-tts) — **PL:** Yes, but only via community f… | **Type:** open-source | **Price:** $0 in licensing/usage fees (subject to… | **PL evidence:** Native-speaker / community report (informal), n…
17. [Kokoro-82M](#kokoro-82m) — **PL:** No | **Type:** open-source | **Price:** Extremely cheap | **PL evidence:** Language NOT listed
18. [Piper (with Polish community voices)](#piper-with-polish-community-voices) — **PL:** Yes — Polish (pl_PL) is expli… | **Type:** open-source | **Price:** $0 in licensing/usage fees | **PL evidence:** Native-speaker review (informal)
19. [XTTS-v2 (Coqui)](#xtts-v2-coqui) — **PL:** Yes — Polish (pl) is one of t… | **Type:** open-source | **Price:** $0 in usage/licensing fees (self-hosted) | **PL evidence:** Mixed: objective metric (paper CER for Polish)…

## Amazon Polly

### Basic Info
- **Vendor:** Amazon (Amazon Web Services). The original Polly voice engine is built on technology from IVONA Software, a Polish-founded TTS company (spun out of Gdańsk University of Technology / Ivo Software) that Amazon acquired in 2013. Polly launched in 2016.
- **Type:** cloud-commercial
- **License:** Proprietary. Closed-source managed AWS API; usage governed by AWS service terms. No self-hosting, no downloadable weights.
- **Project status:** Actively maintained and part of the core AWS AI service portfolio. Evolved through successive voice generations: Standard (original IVONA-lineage), Neural/NTTS (2019), Long-Form (2024), and Generative voices (2024+). Continues to receive new voices and engine tiers.

### Polish Quality
- **IVONA lineage:** Yes — this is the textbook IVONA case. IVONA Software was a Polish company (Gdańsk) whose Polish TTS won EU/Blizzard TTS challenges; Amazon acquired it in 2013 and IVONA became the foundation of Amazon Polly and the Alexa voice. The classic Polish Standard voices Ewa, Maja, Jacek and Jan are the IVONA Polish voices. (Note: the separate Agnieszka/Marek IVONA voices ended up in Microsoft Azure AI Speech; the Ewa/Maja/Jacek/Jan set is the Polly/IVONA lineage.) Newer Neural/Generative Polish voices are AWS-engineered successors rather than the original concatenative IVONA models.
- **Polish evidence type:** Language listed + vendor documentation + provenance. Polish support, voice roster and engine tiers are confirmed by the official AWS available-voices documentation. IVONA lineage is well-documented historical fact (2013 acquisition). However, there is NO MOS, blind test, or published native-speaker review of Polish quality found — Polish naturalness claims are qualitative/inferred, not measured.

### Languages
- **Polish supported:** Yes — Polish (pl-PL) is explicitly supported, with Standard, Neural and Generative tier voices available.

### Cost
- **Pricing model:** pay-per-character (billed per character of input text synthesized; price varies by engine tier).

### Deployment
- **Access:** Cloud API only (AWS SDK / REST, AWS CLI, AWS Console). No local app or self-host option; requires an AWS account, IAM credentials and region selection.
- **Hardware requirements:** None on the client side — fully managed cloud inference. No GPU/CPU/VRAM requirements for the user; only network access and AWS credentials.


## AnySpeech (Polish specialist)

### Basic Info
- **Type:** cloud-commercial
- **License:** Proprietary (closed-source SaaS / web app). Generated audio carries commercial usage rights on paid plans.

### Languages
- **Polish supported:** Yes — Polish is explicitly supported, with a dedicated Polish landing page and 2 dedicated Polish voices (Anna, Jan) plus multilingual Polish-capable voices.

### Cost
- **Pricing model:** subscription-quota (monthly credit allotment). Free tier = 5,000 one-time credits. Credit multipliers by model: Standard/Flash/Advanced = 1x, Pro = 2x. No published per-character API rate.

### Performance
- **Streaming / real-time:** No documented streaming/real-time or WebSocket API; it is a generate-then-download (MP3) web app. Max input length 5,000 chars/request on Free, 50,000 chars/request on paid plans.

### Deployment
- **Hardware requirements:** None for the user — fully cloud-hosted SaaS. Only a browser/internet connection (and account for paid tiers) required.


## Cartesia Sonic

### Basic Info
- **Vendor:** Cartesia, Inc. (US AI startup founded 2023 by Stanford researchers Karan Goel and Albert Gu, co-inventors of the Mamba / state-space model architecture). Sonic is its flagship real-time TTS model family.
- **Type:** cloud-commercial
- **License:** Proprietary (closed-source SaaS / API). Free tier carries no commercial-use license; commercial use requires a paid plan (Pro and above).
- **Project status:** Actively maintained and well-funded. Rapid release cadence: Sonic, Sonic 2, Sonic 3, and Sonic 3.5 shipped through 2025-2026, with a low-latency 'Turbo' variant. Backed by significant VC funding; expanding into STT (Ink) and a voice-agent platform (Line).

### Polish Quality
- **IVONA lineage:** No. Cartesia's Polish voices are built on its own proprietary state-space (SSM/Mamba-based) neural TTS models and do NOT descend from IVONA. The IVONA lineage (Agnieszka/Marek) belongs to Amazon Polly and Microsoft Azure Neural, not Cartesia.

### Quality
- **Voice cloning:** Strong instant (zero/few-shot) voice cloning from a very short sample — Cartesia advertises high-quality instant clones from as little as ~3-10 seconds of audio (notably shorter than ElevenLabs' ~30s), plus Professional Voice Cloning from longer datasets (30+ min). Clones speak cross-lingually, including Polish. High speaker-similarity is a marketed strength.

### Languages
- **Language count:** 40+ languages (marketed as 'natively multilingual across 40+ languages'; voice cloning/localization cited as 42 languages).
- **Polish supported:** Yes — Polish is explicitly listed as a supported language with a dedicated Polish TTS page and named Polish voices.

### Cost
- **Pricing model:** subscription-quota with usage-based credits (pay-per-character). TTS is billed at 1 credit per input character on all plans (Pro Voice Cloning output ~1.5 credits/char plus a training fee). Voice-agent minutes billed separately. Unlimited workspace seats and voice slots on every plan.

### Deployment
- **Access:** Cloud API + web playground (play.cartesia.ai); REST + streaming WebSocket, official SDKs. No standard self-host/on-prem (enterprise arrangements may differ).
- **Hardware requirements:** None for the user — fully cloud-hosted SaaS. No local GPU/CPU/VRAM required; only an internet connection and an API key.


## ElevenLabs

### Basic Info
- **Vendor:** ElevenLabs Inc. (US-based AI audio company, founded 2022)
- **Type:** cloud-commercial
- **License:** Proprietary (closed-source SaaS / API)
- **Project status:** Actively maintained and well-funded market leader; rapid release cadence (Multilingual v2, Flash v2.5, Eleven v3 launched 2025-2026). Eleven v3 reached general availability in 2026.

### Polish Quality
- **IVONA lineage:** No. ElevenLabs' Polish voices are built on its own proprietary neural models and do NOT descend from IVONA. The IVONA lineage (Agnieszka/Marek) belongs to Amazon Polly and Microsoft Azure Neural, not ElevenLabs.

### Quality
- **Voice cloning:** Strong. Instant Voice Cloning (IVC, zero/few-shot from short samples) and Professional Voice Cloning (PVC, high-fidelity from longer datasets). Cloning quality is industry-leading and clones speak cross-lingually (incl. Polish). Note: PVCs are not yet fully optimized for Eleven v3 (research-preview), so IVC/designed voices are recommended for v3 features.
- **Paralinguistic control:** Eleven v3 introduces 'audio tags' / stage directions in square brackets: emotional states ([excited], [nervous], [sorrowful], [calm]), reactions ([laughs], [sighs], [whispers], [gasps], [clears throat]), and tone cues ([cheerfully], [deadpan], [playfully]). Context-aware emotional delivery and multi-speaker dialogue. Legacy SSML break tags are NOT supported in v3 (use prompting/punctuation); earlier models had limited SSML.

### Languages
- **Language count:** Eleven v3: 70+ languages; Flash v2.5: 32 languages; Multilingual v2: 29 languages.
- **Polish supported:** Yes — Polish is explicitly supported across Multilingual v2, Flash v2.5 and Eleven v3.

### Cost
- **Pricing model:** subscription-quota (monthly credit/character allotment) with metered overage; pay-per-character via API. 1 character = 1 credit for Multilingual v1/v2; Flash/Turbo and v2.5 multilingual cost ~0.5 credit/char (discounted).

### Performance
- **Streaming / real-time:** Yes — full streaming and real-time WebSocket API; Flash v2.5 targets conversational/agent use. Per-request character limits: Flash v2.5 up to 40,000 chars, Multilingual v2 10,000, Eleven v3 5,000.

### Deployment
- **Access:** Cloud API + web app/Studio; no self-host/on-prem for standard tiers (enterprise arrangements aside). REST + streaming WebSocket, official SDKs.
- **Hardware requirements:** None for the user — fully cloud-hosted SaaS. No local GPU/CPU/VRAM required; only an internet connection and API key.


## Fish Audio OpenAudio S1 / S2-Pro (Fish Speech)

### Basic Info
- **Vendor:** Fish Audio (the project formerly branded as 'Fish Speech', rebranded to the 'OpenAudio' model series). Open-source TTS lab; ships open model weights plus a hosted commercial platform (fish.audio) and API. GitHub repo fishaudio/fish-speech (~30.7k stars).
- **Type:** open-source (open-weights model + hosted commercial API). Source-available weights rather than fully permissive OSS — see license.
- **Project status:** Actively and rapidly maintained. Lineage: Fish Speech -> OpenAudio S1 (+ S1-mini, ~0.5B) in 2025 -> S2 / S2-Pro (4B params) in 2026. S2-Pro became the leading open-weights model on the Artificial Analysis Speech Arena (post dated Apr 2026). Frequent commits, multilingual docs, vLLM-Omni serving recipe, Docker images, HuggingFace releases. Well-supported, not abandoned.

### Polish Quality
- **IVONA lineage:** No. Fish Audio / OpenAudio is built on Fish Audio's own architecture (Dual-Autoregressive 'Dual-AR' + RL alignment for S2, trained on 10M+ hours / 80+ languages) and has no connection to IVONA. The IVONA lineage (Agnieszka/Marek) belongs to Amazon Polly and Microsoft Azure Neural voices, not to Fish Audio.

### Quality
- **Voice cloning:** Core strength. Zero-shot / few-shot instant voice cloning from a short reference sample — this is the primary usage mode (no large fixed voice catalog). S2-Pro reports best speaker-similarity (SIM) on 17 of 24 languages on the MiniMax multilingual testset, indicating strong cross-lingual timbre transfer. Clones speak across the 80+ supported languages including Polish.
- **Paralinguistic control:** Excellent / headline feature. Fine-grained inline control via natural-language tags embedded at any sub-word position: [whisper], [excited], [angry], [laughing], [inhale], [chuckle], [pause], [emphasis], [singing], [professional broadcast tone], [pitch up], etc. — 15,000+ unique tags supported (not a fixed preset list; accepts free-form descriptions like '[whisper in small voice]'). Native multi-speaker and multi-turn conversation generation. Control is tag-based rather than classic SSML.

### Languages
- **Language count:** 80+ languages (trained on 10M+ hours of audio across 80+ languages; HuggingFace tags the S2-Pro model as 83 languages).
- **Polish supported:** Yes — Polish is explicitly listed among S2-Pro's supported languages (confirmed in third-party coverage enumerating the language set including Polish, and in the 80+/83-language model tagging).

### Cost
- **Pricing model:** Dual: self-host-compute (run the open weights yourself — free for compute if you have a GPU, subject to the non-commercial weight license) AND a paid hosted offering on fish.audio (pay-per-character API plus subscription-quota plans).

### Deployment
- **Access:** Three ways: (1) hosted cloud API + web playground at fish.audio; (2) self-host the open weights locally (HuggingFace: fishaudio/s2-pro 4B, S1 / S1-mini); (3) Docker image (fishaudio/fish-speech) and vLLM-Omni serving recipe. Code via GitHub (Apache 2.0).
- **Hardware requirements:** GPU required for self-hosting (no practical CPU-only path). Minimum ~12 GB VRAM (RTX 3060, ~1:15 RTF, dev). Recommended production: RTX 4090 24 GB (~1:7 RTF). Enterprise: A100 / H200 40 GB+ (~1:5 RTF; H200 hits RTF 0.195). Weights ~9 GB on disk, ~17 GB VRAM during inference per community testing. None required if using the hosted API.


## Google Cloud TTS (Chirp 3 HD / WaveNet)

### Basic Info
- **Vendor:** Google (Google Cloud / DeepMind). Chirp 3 HD voices are built on DeepMind generative audio (AudioLM/AudioML lineage); WaveNet originated from DeepMind's 2016 WaveNet model.
- **Type:** cloud-commercial
- **License:** Proprietary. Closed-source managed API; usage governed by Google Cloud Platform terms of service. No self-hosting or weights.
- **Project status:** Actively maintained and heavily invested. Chirp 3 HD voices and 31 new locales (including pl-PL) were added in 2025; SSML support for Chirp 3 HD and Instant Custom Voice cloning are recent additions. WaveNet/Neural2 tiers remain supported alongside the newer Chirp 3 generation.

### Polish Quality
- **IVONA lineage:** No. Google's Polish voices do NOT descend from IVONA. IVONA (the Polish-founded TTS company, makers of Agnieszka/Marek) was acquired by Amazon in 2013 and became the basis of Amazon Polly and Alexa; the Agnieszka/Marek IVONA-lineage voices now appear in Microsoft Azure AI Speech, not Google. Google's pl-PL voices are independently built (WaveNet/Neural2/Chirp 3 generative models).
- **Polish evidence type:** Language listed / vendor documentation only. Polish support is confirmed by official Google Cloud voice-list and Chirp 3 HD release documentation, but there is no MOS, blind test, or published native-speaker review of Polish quality found. Evidence is 'language supported + qualitative general-quality claims', not Polish-specific measurement.

### Languages
- **Language count:** 75+ languages and variants (380+ voices total) per Google marketing; Chirp 3 HD spans 31+ locales.
- **Polish supported:** Yes — Polish (pl-PL) is explicitly supported across Standard, WaveNet, and Chirp 3 HD tiers.

### Cost
- **Pricing model:** pay-per-character (monthly, billed per character of input text; per voice tier).

### Deployment
- **Access:** Cloud API only (REST/gRPC, client libraries). No local app or self-host option; requires a Google Cloud project and authentication.
- **Hardware requirements:** None on the client side — fully managed cloud inference. No GPU/CPU/VRAM requirements for the user; only network access and GCP credentials.


## Google Gemini 3.1 Flash TTS

### Basic Info
- **Vendor:** Google (Google DeepMind / Google AI). An LLM-native TTS model built on the Gemini model family, distinct from the older Google Cloud TTS lineage (Chirp 3 HD generative voices and the 2016 DeepMind WaveNet). Released as part of the Gemini 3.x generation; the speech model is delivered via the Gemini API, Google AI Studio, Vertex AI and Google Vids.
- **Type:** cloud-commercial
- **License:** Proprietary. Closed-source managed API governed by Google's Gemini API / Google Cloud terms of service. No model weights, no self-hosting. All generated audio carries SynthID watermarking.
- **Project status:** Actively developed and newly launched. Released 2026-04-15, positioned as Google's most natural and expressive speech model to date and the successor/sibling to the earlier Gemini 2.5 Flash/Pro TTS preview models. In 'Preview' status as of mid-2026 but rolling out broadly across Gemini API, AI Studio, Vertex AI and Workspace (Google Vids).

### Polish Quality
- **IVONA lineage:** No. Gemini 3.1 Flash TTS voices do NOT descend from IVONA. IVONA (Polish-founded, makers of Agnieszka/Marek) was acquired by Amazon in 2013 and underpins Amazon Polly/Alexa; the Agnieszka/Marek IVONA-lineage voices now appear in Microsoft Azure AI Speech. Google's Gemini TTS voices are independently built on the Gemini/DeepMind generative stack.
- **Polish evidence type:** Language listed / vendor documentation only. Polish (Polski / pl-PL) appears in the official Gemini API documentation language list, confirming support, but there is NO MOS, blind test, or published native-speaker review of Polish quality. Evidence is 'language supported + strong English leaderboard results', not Polish-specific measurement.

### Quality
- **Leaderboard Elo (English-only):** Tops the Artificial Analysis Text-to-Speech (Speech Arena) leaderboard. Reported Elo ~1,211 (Artificial Analysis blind-preference benchmark at launch) to ~1,214 (later/peak figure), #1 as of April 2026, ahead of Realtime TTS-2 (~1,209), Cartesia Sonic 3.5 (~1,203) and xAI TTS (~1,194). Also placed in Artificial Analysis's 'most attractive quadrant' (high quality + low cost). CAVEAT: this Elo is English-only and does NOT measure Polish quality.
- **Paralinguistic control:** Very strong — this is the model's headline feature. 200+ granular inline audio tags control delivery style (e.g. [whispers], [excited], [calm], [enthusiasm], [curiosity], [determination]), pacing (fast/slow), tone, accent/dialect, and mid-sentence expression changes, plus scene direction. Natural-language prompt steering of voice/style. Native multi-speaker dialogue with speaker-level tags (a single prompt produces a dialogue with distinct voices). Control is via prompts + audio tags rather than classic SSML.

### Languages
- **Language count:** 70+ languages natively supported (some marketing/reviews cite 100+ language/accent combinations). Examples named: Japanese, Hindi, German, plus multiple English accents (Valley, Southern, Brixton, RP).
- **Polish supported:** Yes — Polish (Polski / pl-PL) is listed among the supported languages in the official Gemini API documentation.

### Cost
- **Pricing model:** pay-per-token (LLM-native token billing): separate input-text tokens and audio-output tokens, not per-character. Audio output is metered at ~25 tokens per second of generated audio (1M output tokens ~= 11.1 hours of audio).

### Deployment
- **Access:** Cloud API only. Available via the Gemini API, Google AI Studio, Vertex AI (enterprise), and Google Vids (Workspace). Also exposed through third-party gateways (OpenRouter, Replicate). No local app or self-host option; requires Google API credentials / a GCP or AI Studio project.
- **Hardware requirements:** None on the client side — fully managed cloud inference. No GPU/CPU/VRAM requirements for the user; only network access and Google API credentials.


## Hume AI Octave

### Basic Info
- **Vendor:** Hume AI (US-based AI lab focused on emotionally intelligent / empathic voice AI, founded 2021 by Alan Cowen). Products: Octave TTS, EVI speech-to-speech, Expression Measurement.
- **Type:** cloud-commercial
- **License:** Proprietary (closed-source SaaS / API) for the hosted Octave / Octave 2 models. NOTE: Hume separately released TADA (Text Audio Dual Alignment) as an OPEN-SOURCE model with open weights on Hugging Face (HumeAI/tada collection) — a low-latency, low-hallucination TTS that can run locally, including MLX inference on Apple Silicon.
- **Project status:** Actively maintained and well-funded. Octave 1 launched Feb 2025 (first 'LLM for TTS'). Octave 2 launched ~Sept/Oct 2025 (preview) with multilingual support, lower latency and voice conversion. TADA open-source model released alongside. Rapid release cadence; competes directly with ElevenLabs.

### Polish Quality
- **IVONA lineage:** No. Hume's voices are built on its own proprietary speech-language (LLM-based) models and on the open TADA architecture. They have no connection to IVONA. The IVONA lineage (Agnieszka/Marek) belongs to Amazon Polly and Microsoft Azure Neural.
- **Polish evidence type:** Negative evidence: Polish is explicitly absent from the official supported-language list in Hume's TTS API FAQ. There is therefore no Polish MOS, no blind test, no native-speaker evaluation and not even a 'language listed' claim. The evidence that Polish is unsupported is strong (official docs); any Polish output is unsupported/best-effort.

### Quality
- **Voice cloning:** Strong and a core feature. Zero/few-shot voice cloning from a short sample (Voice Cloning), plus prompt-based Voice Design (generate a brand-new voice from a text description, no reference audio). Unlimited custom voice creation even on free tier (commercial use gated to paid tiers). Note: cloning would only reproduce a voice speaking a SUPPORTED language — not Polish.
- **Paralinguistic control:** Best-in-class for emotion/style steering — this is Octave's headline differentiator. Because it is LLM-based, it infers emotion from the meaning of the script (sarcasm, fear, revulsion, etc.) and accepts 'Acting Instructions' — natural-language stage directions issued after voice creation (e.g. 'slow down', 'act angry', 'speak in an exaggerated prosodic tone', 'whisper'). Voice Design lets you prompt a full persona (accent, age, role, ASMR, etc.). No traditional SSML is needed; control is via prompt/instructions rather than markup.

### Languages
- **Language count:** Octave 2 (preview): 11 languages — English, Japanese, Korean, Spanish, French, Portuguese, Italian, German, Russian, Hindi, Arabic. Octave 1: 2 languages (English, Spanish only). Hume has stated it intends to support 'at least 20 languages in the coming months,' but those are not yet shipped.
- **Polish supported:** No. Polish is NOT in the supported-language set for either Octave 1 or Octave 2 (preview) as of mid-2026.

### Cost
- **Pricing model:** subscription-quota (monthly character allotment) plus usage-based overage at a fixed rate per 1,000 characters on higher tiers; effectively pay-per-character via API. Quotas are sometimes expressed in minutes of audio (~1,000 chars per minute).

### Performance
- **Streaming / real-time:** Yes — dedicated low-latency streaming JSON endpoint for real-time applications; integrations with LiveKit, Pipecat, Vapi, Twilio, Agora. Per-request limits: up to 5,000 characters of input text (voice/persona descriptions capped at ~1,000 chars), up to 5 outputs per request. TADA supports long-form (~700s within 2,048 tokens vs ~70s conventionally).

### Deployment
- **Access:** Cloud API + web Playground / Projects app; official SDKs and an MCP integration. The hosted Octave / Octave 2 models are cloud-only (no self-host). EXCEPTION: the open-source TADA model can be self-hosted/run locally (open weights on Hugging Face, MLX support for Apple Silicon).


## Inworld TTS 1.5 Max / TTS-1

### Basic Info
- **Vendor:** Inworld AI (US-based AI runtime company; originally known for AI NPCs/characters, now a broad voice + agent runtime platform). TTS-1 was Inworld's first speech model line; the current flagship is Realtime TTS 1.5 Max.
- **Type:** cloud-commercial
- **License:** Proprietary commercial API/SaaS for the hosted models (TTS-1, TTS 1.5 Max/Mini, Realtime TTS-2). However, Inworld open-sourced the TTS-1 training and modeling framework (codec, SpeechLM, SFT/RLHF) on GitHub (inworld-ai/tts) under an MIT license per the TTS-1 Technical Report (arXiv 2507.21138). So: hosted service = proprietary; reference training code = MIT open-source.
- **Project status:** Actively maintained and rapidly iterating. Timeline: TTS-1 / TTS-1-Max launched 2025 (Technical Report July 2025); Realtime TTS 1.5 (Max + Mini) released as the flagship GA family; Realtime TTS-2 launched as Research Preview in May 2026 and currently tops the Artificial Analysis Realtime TTS Arena. Well-funded, high release cadence.

### Polish Quality
- **IVONA lineage:** No. Inworld's Polish output comes from its own SpeechLM models (LLaMA-backbone, trained from scratch per the TTS-1 Technical Report) and does NOT descend from IVONA. The IVONA lineage (Agnieszka/Marek) belongs to Amazon Polly and Microsoft Azure Neural, not Inworld.

### Quality
- **Voice cloning:** Yes — strong. Instant/zero-shot voice cloning from ~5-15 seconds of audio (via API), plus Professional Voice Cloning for enterprise. Cross-lingual cloning: a cloned voice can speak across the supported languages (and 100+ for Realtime TTS-2) keeping the same identity without accent carryover. Cloned voices are reported to stay stable and realistic over long outputs. Also supports text-based voice design (create a voice from a description).
- **Paralinguistic control:** Yes. Fine-grained emotional control and non-verbal vocalizations via audio markup tags (per TTS-1 Technical Report), SSML-style markup controlling pronunciation, pitch, speed and emotion tags, and temperature/speed controls. Realtime TTS-2 adds natural-language steering (prompt-described style, e.g. 'speak conversationally'). Break tags (e.g. <break time="500ms"/>) are supported.

### Languages
- **Language count:** TTS 1.5 (Max and Mini): 15 GA languages. (Original TTS-1: 11 languages. Realtime TTS-2 Research Preview: 100+ languages, cross-lingual BCP-47.)
- **Polish supported:** Yes — Polish is one of the 15 GA languages in TTS 1.5 Max/Mini. The full set: English, Spanish, French, Korean, Dutch, Chinese, German, Italian, Japanese, Polish, Portuguese, Russian, Hindi, Arabic, Hebrew. (In the earlier TTS-1 release Polish was 'Experimental'.)

### Cost
- **Pricing model:** Hybrid: pay-per-character (per 1M chars) usage billing, offered both on-demand and via subscription tiers that grant monthly credits plus volume discounts. Commercial license included from the free/on-demand tier.

### Performance
- **Streaming / real-time:** Yes — built for realtime. REST, server-streaming, and bidirectional WebSocket endpoints; audio streams as generated (no buffering), suited to LLM-powered voice agents. TTS Playground supports up to 40K characters per request on paid tiers.

### Deployment
- **Access:** Cloud API (REST + streaming + WebSocket) and web TTS Playground; full Realtime API and Agent Runtime; official SDKs and GitHub API examples. Also available via third-party inference hosts (fal.ai, WaveSpeed, Voximplant). No standard self-host of the hosted weights, though the TTS-1 training/modeling code is open-sourced (MIT) for those wanting to train their own.
- **Hardware requirements:** None for the hosted API user — fully cloud-hosted; only an internet connection and API key. (Self-training via the open-sourced TTS-1 framework would require substantial GPU compute, but that is not the productized path.)


## Microsoft Azure AI Speech (Neural TTS, incl. IVONA-lineage Agnieszka/Marek)

### Basic Info
- **Vendor:** Microsoft (Azure AI Speech / Azure AI Foundry, formerly Azure Cognitive Services Speech). Neural TTS is built on Microsoft's own neural acoustic + vocoder stack; the newer HD/expressive and multilingual voices derive from Microsoft Research models.
- **Type:** cloud-commercial
- **License:** Proprietary. Closed-source managed cloud API governed by the Microsoft Azure / Foundry Tools terms of service. No model weights, no self-hosting (a separate gated 'Embedded/Container' offering exists for disconnected deployment but it is still a licensed Microsoft binary, not OSS).
- **Project status:** Actively maintained and heavily invested. Part of Azure AI Foundry; continuous additions of neural voices (announcements of batches of 51+ new voices), multilingual voices (e.g. JennyMultilingual/RyanMultilingual covering 41 languages), HD/expressive voices, and personal/custom neural voice. A flagship enterprise TTS product.

### Polish Quality
- **Polish naturalness:** Strong, and unusually well-evidenced for Polish. A Spyrosoft native-speaker MOS study (Polish banking sector, two native Polish evaluators, 1-5 scale on naturalness/accuracy/comprehensiveness) ranked pl-PL-AgnieszkaNeural at 4.04 (+/-0.45) — the single highest of all Azure and GCP Polish voices tested — and pl-PL-MarekNeural at 3.92 (+/-0.74), both at the top of the field (GCP pl-PL-Wavenet-B scored 4.00). The study's conclusion was that quality is voice-specific rather than provider-specific, with Azure's Agnieszka/Marek among the best Polish voices available. Real-world reputation in Poland is very high: Agnieszka/Marek (IVONA heritage) are among the most recognizable Polish synthetic voices.
- **Polish evidence type:** Strong: independent native-speaker MOS study. Unlike most competitors, Polish quality here is backed by a published blind-style evaluation with two native Polish speakers and numeric MOS (Agnieszka 4.04+/-0.45, Marek 3.92+/-0.74), not merely 'language listed.' Official Microsoft documentation also confirms pl-PL support. Combined evidence type: native-speaker MOS + vendor documentation.

### Languages
- **Language count:** 100+ languages and locales for standard neural TTS (500+ neural voices total across the portfolio); multilingual neural voices add cross-lingual coverage (e.g. 40+ languages from a single voice).
- **Polish supported:** Yes — Polish (pl-PL) is explicitly supported with dedicated standard neural voices (Agnieszka, Marek, Zofia) plus multilingual-voice coverage.

### Cost
- **Pricing model:** pay-per-character (billed per character of input text; tiered standard-neural vs HD vs custom). Also offered via Azure commitment tiers (monthly volume commitments at discounted effective rates).

### Deployment
- **Access:** Primarily cloud API (Speech SDK + REST, in many regions) via an Azure subscription / Foundry Tools resource. Also offers a gated Speech Containers / Embedded (disconnected) option for on-prem or edge deployment under a licensed Microsoft container — not open self-hosting. No public local app.


## MiniMax Speech 2.8 (HD / Turbo)

### Basic Info
- **Vendor:** MiniMax (MiniMax AI, Chinese AI company based in Shanghai; also behind the Hailuo video, MiniMax M-series LLMs, and Talkie products). Speech 2.8 announced 2026-01-23.
- **Type:** cloud-commercial
- **License:** Proprietary (closed-source SaaS / API). Not open-weight; available only via MiniMax Open Platform API and resellers (Replicate, Cloudflare Workers AI, AI/ML API, fal, etc.).
- **Project status:** Actively maintained and rapidly iterating. Speech 2.8 (Turbo + HD) launched 2026-01-23, superseding the Speech 2.6 / Speech-02 generations. Frequent release cadence across the Speech series; backed by a well-funded vendor with parallel LLM/video/music lines. Topped Artificial Analysis Speech Arena and Hugging Face TTS Arena at launch.

### Polish Quality
- **IVONA lineage:** No. MiniMax Speech 2.8 is built on MiniMax's own autoregressive Transformer + learnable speaker encoder + Flow-VAE architecture and has no connection to IVONA. The IVONA lineage (Agnieszka/Marek) belongs to Amazon Polly and Microsoft Azure Neural voices, not to MiniMax.

### Quality
- **Voice cloning:** Strong, a headline feature. Zero-shot / instant cloning from a short reference sample (5 seconds minimum, ~10 seconds recommended; longer improves accuracy). Speech 2.8 specifically improved timbre similarity, capturing breathiness, texture and speaking pace ('vocal fingerprint'). Clones inherit emotion control and speak cross-lingually, including Polish. Some resellers charge ~$3 per cloned voice.
- **Paralinguistic control:** Rich. 7 emotion modes: happy, calm, sad, angry, fearful, disgusted, surprised (prosody/pacing/emphasis adjusted). New in the 2.8 series: native interjection / sound tags inserted inline in text — (laughs), (sighs), (coughs), (gasps), (clears throat), (humming), (whistles), (sneezes), (applause), plus filler/breath modeling (um, uh, ah, breaths, pauses); 20+ interjections recognized. Granular audio parameter control (speed 0.5-2x, pitch, volume, bitrate up to 320kbps, sample rate up to 44.1kHz on HD), pronunciation dictionary with phoneme-level overrides, and explicit pause tags (<#x#>, 0.01-99.99s). No traditional SSML document, but equivalent prompt-level controls.

### Languages
- **Language count:** 40+ languages with dialect-level awareness on Speech 2.8 (Turbo and HD), up from 32 on Speech 2.6. (Some reseller pages still cite '32 languages' / '17+ languages' for older listings; the 2.8 family is 40+.)
- **Polish supported:** Yes — Polish is explicitly supported. It appears as a dedicated 'language_boost' / dialect-recognition option in the Speech 2.8 API (listed alongside English, Chinese, Spanish, French, German, Russian, etc.), and MiniMax markets dedicated Polish TTS access.

### Cost
- **Pricing model:** Dual model: pay-per-character (pay-as-you-go via Open Platform API keys, billed on actual usage) AND subscription-quota (Audio Subscription / Token-Plan credits). Resellers (Replicate, Cloudflare, AI/ML API, fal) bill per-character or per-token at their own markup.

### Performance
- **Streaming / real-time:** Yes — both Turbo and HD support real-time chunked streaming (WebSocket T2A API), with Turbo tuned for conversational/agent use. Max input up to ~50,000 characters per request (Turbo).

### Deployment
- **Access:** Cloud API only (MiniMax Open Platform: REST + WebSocket T2A v2 / T2A large v2) plus a hosted consumer web app (minimax.io/audio) and third-party hosts (Replicate, Cloudflare Workers AI, AI/ML API, fal, MuleRouter). No self-host / on-prem / open weights.
- **Hardware requirements:** None for the user — fully cloud-hosted SaaS. No local GPU/CPU/VRAM; only an internet connection and an API key.


## OpenAI TTS (gpt-4o-mini-tts / Realtime)

### Basic Info
- **Vendor:** OpenAI
- **Type:** cloud-commercial
- **License:** Proprietary (closed, API-only)
- **Project status:** Actively maintained. gpt-4o-mini-tts launched March 2025 as OpenAI's flagship steerable TTS; Realtime API (speech-to-speech) reached GA in 2025 and continues to receive new voices and updates (e.g. Marin, Cedar). Legacy tts-1 / tts-1-hd still available.

### Polish Quality
- **IVONA lineage:** No. OpenAI TTS has no connection to IVONA. Its voices are originally synthesized GPT-4o-based personas with no descent from the Polish-founded IVONA lineage (Agnieszka/Marek), which lives in Azure Neural / Amazon Polly.

### Quality
- **Voice cloning:** No. OpenAI TTS does not offer zero-shot or few-shot voice cloning. Only the fixed built-in voice set is available; custom/cloned voices are not supported.
- **Paralinguistic control:** Strong prompt-steered style control: the 'instructions' parameter on gpt-4o-mini-tts lets you steer tone, emotion, accent, pacing, and delivery in natural language (e.g. 'warm, reassuring, slow with pauses'). No SSML support and no explicit interjection/sound tags (e.g. [laugh], [sigh]); expressiveness is driven by the natural-language instruction prompt rather than markup.

### Languages
- **Polish supported:** Yes — Polish is in the supported language set.

### Cost
- **Pricing model:** pay-per-usage (token-based; billed on input text tokens + audio output tokens). No subscription quota required for API; usage-metered.

### Deployment
- **Access:** API only (cloud). Accessed via OpenAI Audio/Speech API (gpt-4o-mini-tts, tts-1, tts-1-hd) and the Realtime API. No local app or self-host option.
- **Hardware requirements:** None for the user — fully cloud-hosted, runs over HTTP/WebRTC; no local CPU/GPU/VRAM requirements. Self-hosting is not possible.


## PlayHT

### Basic Info
- **Type:** cloud-commercial

### Polish Quality
- **IVONA lineage:** No. PlayHT's Polish capability comes from its own proprietary multilingual neural models (Play 2.0 / Play 3.0 Mini / PlayDialog), not from IVONA. The IVONA lineage (Agnieszka/Marek) belongs to Amazon Polly and Microsoft Azure Neural voices, not PlayHT.

### Quality
- **Voice cloning:** Yes — a core feature. Offers Instant Voice Cloning (zero/few-shot from a short sample) and high-fidelity professional voice cloning from longer datasets. PlayDialog is highlighted for state-of-the-art voice cloning and expressive output. Cloned voices can speak cross-lingually (including Polish) on the multilingual engines. Generally regarded as good, though not consistently rated above ElevenLabs.

### Languages
- **Polish supported:** Yes — POLISH is explicitly listed in the language enum for the Play3.0 / PlayDialogMultilingual engines in the official API docs and pyht SDK. Note: the language parameter (and thus Polish) is only supported on the Play3.0/PlayDialogMultilingual engines, not on legacy Play 2.0.

### Cost
- **Pricing model:** subscription-quota (monthly character allotment across Creator/Unlimited tiers) plus pay-per-character/usage-based API pricing for higher volumes; free tier included.

### Performance
- **Streaming / real-time:** Yes — full HTTP streaming and WebSocket streaming for low-latency realtime/conversational use. Play 3.0 Mini increased the per-streaming-request character limit from 2k to 20k characters and uses native 48kHz output. Designed for realtime voice agents (Play.ai).

### Deployment
- **Access:** Cloud only — REST API + WebSocket streaming, plus a web app/studio. Official Python (pyht) and Node.js SDKs. No self-host/on-prem for standard tiers.
- **Hardware requirements:** None for the user — fully cloud-hosted SaaS. No local GPU/CPU/VRAM required; only an internet connection and API credentials (User ID + API key).


## Speechify SIMBA 3.0

### Basic Info
- **Vendor:** Speechify (Speechify Inc. / Speechify AI Research Lab, US-based AI voice & productivity company founded 2016, ~50M+ users; CEO Cliff Weitzman). SIMBA is its in-house TTS model family.
- **Type:** cloud-commercial
- **License:** Proprietary (closed-source SaaS / pay-as-you-go API). No open weights.
- **Project status:** Actively maintained and rapidly evolving. SIMBA 3.0 launched in early-2026 (early/select-developer rollout announced Feb 25, 2026 via PRWeb; `simba-3.0` streaming model added to the public API ~May 9, 2026). Speechify runs a dedicated AI Research Lab and serves the model on Baseten/vLLM infrastructure. Clear successor cadence (SIMBA 1.0 -> 3.0).

### Polish Quality
- **IVONA lineage:** No. Speechify's Polish (and all) voices are built on its own proprietary SIMBA neural models and do NOT descend from IVONA. The IVONA lineage (Agnieszka/Marek) belongs to Amazon Polly and Microsoft Azure Neural, not Speechify.

### Languages
- **Language count:** 50+ languages advertised overall (across the SIMBA family / `simba-multilingual`). API language tiers: 6 fully supported (English, French, German, Spanish, Portuguese-BR, Portuguese-PT), 17 in beta (incl. Polish), 26 coming soon. NOTE: SIMBA 3.0 specifically is currently English-only; the 50+ count belongs to `simba-multilingual`.
- **Polish supported:** Partial / qualified YES. Polish (pl-PL) IS in the supported set — but only as a BETA language on the `simba-multilingual` model. SIMBA 3.0 itself is ENGLISH-ONLY: non-English voices return HTTP 400 ('multilingual coming soon'). So Polish is NOT available on SIMBA 3.0 today; it works via simba-multilingual at beta quality.

### Cost
- **Pricing model:** pay-per-character (pay-as-you-go), $/1M characters; also a free Starter tier and paid plans. Self-serve API via console.speechify.ai plus enterprise/Contact Sales.

### Performance
- **Streaming / real-time:** Yes — SIMBA 3.0 is explicitly streaming-native (the `simba-3.0` model ID is the streaming model). Real-time streaming API. Per-request limits: streaming endpoint up to 20,000 characters per request. Output formats: MP3, OGG, AAC, WAV, raw PCM.

### Deployment
- **Access:** Cloud API only (REST/HTTP + streaming). Official Python (`speechify-api`) and TypeScript (`@speechify/api`) SDKs; docs MCP server for AI clients. Web/console at console.speechify.ai. No self-host / on-prem for standard tiers (enterprise arrangements aside).
- **Hardware requirements:** None for the user — fully cloud-hosted SaaS. No local GPU/CPU/VRAM; only an internet connection and API key. (Speechify itself serves the model on its own GPU fleet via Baseten/vLLM.)


## Bielik + Whisper + system TTS (offline Polish voice stack)

### Basic Info
- **Vendor:** A self-hosted pattern, not a single product. Components: SpeakLeash / Spichlerz (Polish open-science collective behind the Bielik family of Polish LLMs) for the LLM; OpenAI for Whisper (STT, openly released weights, widely run via whisper.cpp / faster-whisper); and a Polish TTS engine — most commonly Piper (Open Home Foundation / OHF-Voice, with WitoldG community Polish voices) or OS-level 'system' voices (e.g. RHVoice, espeak-ng, or on Windows the SAPI/Azure-derived 'Paulina' voice). No single vendor owns the stack.
- **Type:** open-source
- **Project status:** Actively maintained across all three layers. Bielik is under continuous development by SpeakLeash (11B v2.0-v2.6 through 2024-2025, v3.0 Instruct released, GGUF/Ollama distributions current). Whisper is widely maintained via the faster-whisper / whisper.cpp ecosystems even though OpenAI's own large-v3 is the latest base release. Piper moved to the Open Home Foundation (piper1-gpl) and is actively committed to in 2026. None of the components are abandoned (contrast Coqui XTTS, whose company shut down in 2024).

### Polish Quality
- **Polish evidence type:** Native-speaker review (informal) for the TTS layer, plus published benchmarks for the input layers. The Piper Polish quality claim rests on an informal Polish native-speaker evaluation (sherpa-onnx issue #2402) and public audio samples, not a formal MOS/blind test. Whisper Polish accuracy is backed by WER benchmarks (~5-8% WER on clean Polish speech, large-v3). Bielik Polish quality is backed by published Polish LLM evaluations (Open PL LLM Leaderboard, MT-Bench-PL). So evidence is stronger than 'language listed' but the decisive voice-naturalness axis has no formal Polish MOS.

### Languages
- **Language count:** Per component: Whisper large-v3 supports ~99 languages; Piper's official voice collection covers 35 languages; Bielik is Polish-focused (bilingual Polish/English in practice). The stack as deployed is intended as a Polish-first (effectively Polish/English) configuration.
- **Polish supported:** Yes — this is the entire purpose of the stack. Polish is explicitly and natively supported at every layer: Bielik (Polish LLM), Whisper (pl), and the Polish TTS voices (Piper pl_PL / system Polish voices).

### Cost
- **Pricing model:** self-host-compute. No API, no per-character or subscription billing for any component (Bielik Apache-2.0, Whisper MIT, Piper free). The only cost is local hardware and electricity to run inference.

### Deployment
- **Access:** Self-host / local only. Assembled from local components: Bielik via Ollama / llama.cpp / vLLM (GGUF or full weights), Whisper via whisper.cpp / faster-whisper, Piper via pip (piper-tts) and ONNX models or OS system-voice APIs. No hosted API; fully offline by design.


## F5-TTS

### Basic Info
- **Vendor:** Academic project led by Yushen Chen et al. (paper 'F5-TTS: A Fairytaler that Fakes Fluent and Faithful Speech with Flow Matching', arXiv:2410.06885, Oct 2024). Maintained on GitHub as SWivid/F5-TTS by the original authors. Polish capability is community-driven (e.g. Gregniuki's English/German/Polish finetune on Hugging Face, and independent Polish finetunes such as cyberbol's, discussed in repo discussion #1168).
- **Type:** open-source
- **License:** Split licensing. The code is MIT. The official pre-trained model weights are CC-BY-NC-4.0 (non-commercial) because they were trained on the Emilia in-the-wild dataset. The research brief's 'MIT/CC-BY' framing is therefore only half-right: usage is effectively MIT code + CC-BY-NC (non-commercial) weights, not a clean permissive CC-BY. Commercial use of the official checkpoints is not permitted; commercial deployment requires training/finetuning weights on properly licensed data. Community Polish finetunes inherit similar constraints depending on their training data.
- **Project status:** Actively maintained. The SWivid/F5-TTS repo is widely used (one of the most popular open-source zero-shot TTS projects of 2024-2025), with ongoing commits into 2025-2026 (e.g. PyTorch 2.8/CUDA 12.8 install updates, finetune Gradio security fixes, BigVGAN vocoder support). A v1 Base checkpoint (model_1250000) was released after the original v0. Healthy community: 130+ listed finetunes of the base model on Hugging Face. Not abandoned (contrast with Coqui XTTS shut down 2024).

### Polish Quality
- **IVONA lineage:** No. F5-TTS Polish capability has no connection to IVONA. Polish comes from open multilingual datasets (CML-TTS, Multilingual LibriSpeech, Emilia) and user-supplied reference clips, not from the IVONA/Polly/Azure (Agnieszka/Marek) lineage.
- **Polish evidence type:** Native-speaker / community report (informal), not formal MOS or controlled blind test. Backed by native Polish-speaker testing in GitHub discussion #1168, the existence of dedicated Polish finetunes and Hugging Face Spaces, and public audio samples — stronger than mere 'language listed', but weaker than a published MOS or blind test (none exists for Polish). Polish is not even listed in the official SHARED.md community-model language index; it is purely community/finetune-driven.

### Quality
- **Voice cloning:** Core strength. F5-TTS is fundamentally a zero-shot / few-shot voice-cloning model: given a short reference audio clip (a few seconds) plus its transcript, it clones timbre and speaking style and synthesizes new text in that voice. No per-speaker training needed at inference time. Cloning fidelity is high and is the model's headline feature; for Polish, cloning quality depends on using a Polish-capable checkpoint and a clean Polish reference clip.
- **Paralinguistic control:** Limited, reference-driven. No emotion-mode menu, no SSML, and no documented interjection/sound tags ([laugh]/[sigh]). Style, emotion and prosody are transferred implicitly from the reference audio clip (an expressive reference yields expressive output). Some control over speed and a 'sway sampling' / NFE-step quality-vs-speed tradeoff exists. Expressiveness is therefore steered by example rather than by explicit tags or prompts.

### Languages
- **Language count:** Officially 2 in the base model (Chinese and English, trained on Emilia zh&en). The broader community ecosystem adds many more via finetunes (German, French, Finnish, Russian, Italian, Hindi, Arabic, Spanish, Japanese, Multilingual EN/DE/PL, etc. — roughly a dozen-plus community-supported languages in SHARED.md plus others on Hugging Face).
- **Polish supported:** Yes, but only via community finetunes (e.g. Gregniuki/F5-tts_English_German_Polish and other Polish finetunes) — NOT in the official base model and NOT listed in the official SHARED.md language index. Out of the box (base zh&en checkpoint) Polish is effectively unsupported.

### Cost
- **Pricing model:** self-host-compute. F5-TTS is free and open source with no API, no per-character billing and no subscription. The only cost is the hardware/electricity to run inference (and GPU time if you train/finetune a Polish checkpoint).

### Deployment
- **Access:** Self-host / local. Distributed as a Python package and via Hugging Face checkpoints; runs as CLI, a Python API, and a Gradio web UI (including a finetuning UI). A hosted Hugging Face Space demo exists. No first-party commercial managed API — production use means self-hosting on your own/rented GPU.


## Kokoro-82M

### Basic Info
- **Vendor:** hexgrad (independent open-source developer/community on Hugging Face and GitHub). Released as hexgrad/Kokoro-82M. The architecture is based on StyleTTS 2 and ISTFTNet; phonemization uses the misaki G2P library (with espeak-ng fallback for some languages), also authored by hexgrad.
- **Type:** open-source
- **License:** Apache-2.0. Both the model weights and the kokoro inference package are Apache-2.0 licensed, which explicitly allows commercial deployment. (Note: the misaki G2P dependency and an espeak-ng fallback are used at the phonemization stage; espeak-ng is GPL, but the Kokoro weights themselves are Apache-2.0.) Training data is noted as permissive/public-domain or synthetic.

### Polish Quality
- **Polish voices:** None. Kokoro ships zero Polish voices. The v1.0 voice set (54 voices) covers only 8 languages: American English, British English, Spanish, French, Hindi, Italian, Japanese, Brazilian Portuguese, and Mandarin Chinese. There is no pl_PL voice prefix and no Polish lang_code. A user could in theory feed Polish text to an English voice, but there is no Polish phoneme support, so it would be heavily anglicized and incorrect.
- **Polish naturalness:** Not applicable / effectively unusable for native Polish. Because Kokoro has no Polish training data, no Polish voices, and no Polish G2P, it cannot produce native-sounding Polish. There is no MOS, blind test, or native-speaker review of Polish output because Polish is not a supported language. Community discussion (e.g. a 2026 Reddit thread on local TTS for Polish audiobooks) treats Kokoro as not a Polish option and points users to Polish-trained models (e.g. Piper community voices, XTTS forks) instead. For Polish specifically it ranks at the bottom of this comparison.
- **IVONA lineage:** No. Kokoro has no connection to IVONA. It is a StyleTTS 2 / ISTFTNet-based model trained from scratch on its own (largely English-centric, plus the other 7 languages) datasets. The IVONA lineage (Agnieszka/Marek) lives in Amazon Polly and Azure Neural, not in Kokoro — and Kokoro has no Polish voices at all.
- **Polish evidence type:** Language NOT listed. The Polish assessment is backed by the strongest possible negative evidence: Polish is explicitly absent from the model's documented language list (GitHub readme lang_codes a/b/e/f/h/i/j/p/z; Hugging Face card tagged English-only). So the conclusion 'no usable Polish' is high-confidence, based on official documentation rather than a quality test.

### Quality
- **Voice cloning:** No. Kokoro does not support zero-shot or few-shot voice cloning. It offers a fixed set of 54 pretrained voices and a 'voice blending' feature (averaging existing voice embeddings to make new timbres), but it cannot clone an arbitrary speaker from a reference sample. Adding a genuinely new voice requires training, not an in-context reference clip.

### Languages
- **Language count:** 8 languages in v1.0: American English, British English, Spanish (es), French (fr-fr), Hindi (hi), Italian (it), Japanese (ja), Brazilian Portuguese (pt-br), and Mandarin Chinese (zh). (Some counts say 9 if American and British English are counted separately.)
- **Polish supported:** No. Polish is not in the supported language set.

### Cost
- **Pricing model:** self-host-compute (Apache-2.0 weights, free to run) OR pay-per-character via third-party inference providers. There is no first-party paid API; cost depends on whether you self-host or use a host like Replicate/DeepInfra.
- **Price per 1M chars:** Extremely cheap. Per the model card (April 2025), the market rate served over API is under $1 per million input characters / under $0.06 per hour of audio. Concrete provider quotes: Artificial Analysis/Replicate ~$0.65 per 1M chars, DeepInfra ~$0.80 per 1M chars. Self-hosting is effectively free (only compute/electricity). It is among the cheapest options in this comparison — but the price buys English/7-other-language audio, not Polish.

### Deployment
- **Access:** Self-host / local (pip install kokoro, or kokoro-onnx for ONNX runtime; CLI tools; Hugging Face Space demo) and via third-party hosted APIs (Replicate, DeepInfra). No official first-party hosted API from hexgrad.


## Piper (with Polish community voices)

### Basic Info
- **Vendor:** Open Home Foundation (OHF-Voice) / Michael Hansen (originally the Rhasspy project; Piper was created under Rhasspy and is now maintained at OHF-Voice/piper1-gpl). Polish community voices contributed primarily by WitoldG.
- **Type:** open-source
- **License:** Dual situation. The Piper engine: the original rhasspy/piper repository was MIT-licensed; the current maintained rewrite OHF-Voice/piper1-gpl is GPL-3.0 because it embeds espeak-ng for phonemization. The voice models (both the official rhasspy/piper-voices set and the WitoldG/polish_piper_models set) are MIT-licensed. So weights are MIT, the new engine code is GPL-3.0.
- **Project status:** Actively maintained. Piper moved to the Open Home Foundation as 'piper1-gpl' and continues to receive commits in 2026 (e.g. espeak-ng bumps in April 2026, CPU torch install scripts Dec 2025). The voice ecosystem is alive: official rhasspy/piper-voices (35 languages) and active community contributions, including the WitoldG Polish voices added to sherpa-onnx in July 2025. Not abandoned (unlike Coqui XTTS).

### Polish Quality
- **IVONA lineage:** No. Piper's Polish voices have no connection to IVONA. They are VITS models trained from scratch on community/open Polish datasets (WitoldG fine-tuned from the en_US lessac medium checkpoint epoch=2164). The IVONA lineage (Agnieszka/Marek) lives in Amazon Polly and Azure Neural, not in Piper.
- **Polish evidence type:** Native-speaker review (informal). The Polish quality claim is backed by a real Polish native-speaker evaluation in sherpa-onnx issue #2402 plus public audio samples on rhasspy.github.io/piper-samples and in the WitoldG repo — stronger than mere 'language listed', but weaker than a formal MOS or controlled blind test (none published for Polish).

### Quality
- **Voice cloning:** No zero-shot or few-shot cloning. Piper has no inference-time voice cloning. New voices require full training/fine-tuning of a VITS model on a dataset of the target speaker (the route WitoldG used: ~1600-2000 samples, fine-tuned on an RTX 4090). Adding a custom Polish voice is possible but requires data collection and GPU training, not a few-second sample.
- **Paralinguistic control:** Minimal. No emotion modes, no interjection/sound tags ([laugh]/[sigh]), no prompt-steered style, and no SSML support. Control is limited to per-voice selection, speaker id (for multi-speaker checkpoints), length/noise scale parameters (overall speed and variability), and a sentence-silence parameter. Expressiveness is fixed by the trained voice.

### Languages
- **Language count:** 35 languages in the official rhasspy/piper-voices collection (as labeled on Hugging Face).
- **Polish supported:** Yes — Polish (pl_PL) is explicitly supported with multiple voice models.

### Cost
- **Pricing model:** self-host-compute. Fully free and open source: no API, no per-character or subscription billing. The only cost is the local hardware/electricity to run inference.
- **Price per 1M chars:** $0 in licensing/usage fees. Effective cost is just self-hosted compute, which is negligible because Piper runs in real time on a CPU (no GPU needed for inference). On commodity hardware the marginal cost per 1M characters is effectively near zero (cents of electricity). It is the cheapest option in the comparison by a wide margin.

### Deployment
- **Access:** Self-host / local only. Distributed as a Python package (pip install piper-tts) and as ONNX models; runs as a CLI, a library, or embedded in projects (Home Assistant, sherpa-onnx, mobile/Flutter apps). No hosted API offered by the project.
- **Hardware requirements:** CPU-only. No GPU or VRAM required for inference — explicitly optimized to run in real time on low-power devices like the Raspberry Pi 4 and 5. Voice models are small ONNX files (medium quality typically tens of MB). GPU is only needed to TRAIN a new voice (e.g. WitoldG used an RTX 4090), not to run one.


## XTTS-v2 (Coqui)

### Basic Info
- **Vendor:** Originally Coqui.ai (the company founded by ex-Mozilla TTS team members). Coqui shut down in January 2024. The model and codebase now live on through community forks: the most actively maintained is idiap/coqui-ai-TTS (published on PyPI as 'coqui-tts'), maintained by Idiap Research Institute and community contributors. Weights are distributed on Hugging Face under coqui/XTTS-v2.
- **Type:** open-source

### Polish Quality
- **IVONA lineage:** No. XTTS-v2's Polish has no IVONA lineage. It is a from-scratch GPT-style multilingual model trained on open/crawled multilingual speech data (the XTTS paper trained on 16 languages including Polish). The IVONA-descended Polish voices (Agnieszka/Marek) live in Amazon Polly and Azure Neural, not in XTTS.

### Quality
- **Voice cloning:** Core strength. Zero-shot / few-shot voice cloning from just a ~6-second reference clip (3-second minimum usable), no per-speaker training. Supports multiple reference clips and speaker interpolation, plus cross-language cloning (clone an English speaker, synthesize Polish in that voice). Cloning quality is good for an OSS model though speaker similarity and stability are below 2025+ frontier cloners; clean, noise-free reference audio is required (it cannot separate voice from background music/noise).
- **Paralinguistic control:** Limited. Emotion and style are transferred implicitly from the reference clip ('emotion and style transfer by cloning') rather than controlled by explicit parameters. There are NO interjection/sound tags ([laugh]/[sigh]), no prompt-steered emotion text, and no SSML support. Tunable knobs are limited to temperature, repetition penalty, length penalty, top-k/top-p and speed — affecting variability/pacing, not discrete emotions.

### Languages
- **Language count:** 17 languages (XTTS-v2). The original XTTS paper covered 16; the v2 model card lists 17 (adds Hindi).
- **Polish supported:** Yes — Polish (pl) is one of the 17 explicitly supported and trained languages.

### Deployment
- **Access:** Self-host only. No official hosted API (vendor defunct). Run via the Python package 'coqui-tts' (idiap fork) as a CLI or library, or self-deploy as an API (community guides on Lightning AI, Spheron, Replicate, Docker images, etc.). Weights pulled from Hugging Face (coqui/XTTS-v2).


## 🔗 Related notes

- [[Voicebox]] — local-first OSS voice studio (7 TTS engines, voice cloning, MCP)
- [[VAPI]] — voice-agent platform (conversational, distinct from text-to-audio narration)
- [[AI Chatbots Architecture]] — voicebot architecture context
- [[Deep-Research-skills]] — the `/research*` pipeline this comparison matrix was produced with
