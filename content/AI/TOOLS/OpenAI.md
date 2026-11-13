---
title: "OpenAI"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "gpt", "tts", "embeddings", "api"]
type: tool
agent-created: true
agent-reviewed: 2026-11-13
summary: "OpenAI API — GPT models (now GPT-6/6.1) for synthesis/translation, speech (TTS models retiring 2027-01-06), and embeddings; one of the multi-provider LLM backbones in my AI pipelines, used as both primary and fallback"
status-checked: 2026-11-13
project-status: active
homepage: "https://platform.openai.com/"
---

# OpenAI

> [!success] Status check 2026-11-13 — active
> **Verdict:** The changelog has entries nearly every week.
> **Latest release:** Newest model: GPT-6 Cyber, 2026-11-05 (for authorized vulnerability work, trusted access). · **last dated update:** 2026-11-05 · **licence:** Proprietary API, pay per token (USD per 1M tokens, input/output, standard tier): GPT-6.1 Sol \$2/\$10…
> **Source:** https://developers.openai.com/api/docs/changelog
> **Changed since this note:** (1) Two model generations: GPT-5.6 Sol/Terra/Luna (2026-07-09, with price cuts on 07-30 and 08-21), then GPT-6 Astra (09-03), GPT-6 Sol and Luna (09-22), GPT-6.1 Sol (09-29) and GPT-6.1 Terra (10-26). Specialist models come through trusted access: Daybreak tiers and GPT-5.6/GPT-6 Cyber, and Rosalind for research.

The API behind the GPT family of models. In my stack it's a general-purpose AI backbone with three jobs: **text generation** (synthesis, translation, structured extraction via tool/function calling and JSON mode), **text-to-speech** (natural multilingual voices), and **embeddings** (vectors for semantic search). I treat it as one provider among several — strong default, but slotted into multi-provider designs so any single vendor can be swapped or used as a fallback.

## Links

### Description

- **GPT chat models** — reasoning, synthesis, translation, summarization; tool/function calling for structured outputs. Current line (as of 2026-11-13, standard tier, per 1M tokens input/output): GPT-6 Astra, the flagship for complex reasoning and coding (\$10/\$50); GPT-6.1 Sol, close to Astra at a lower price (\$2/\$10); GPT-6.1 Terra, fast and efficient (\$1/\$5); GPT-6 Luna, the cheapest for high-volume work (\$0.10/\$0.50).
- **Retirements to plan for** — the gpt-5 / o3 family shuts down on 2026-12-11 (gpt-5 and o3 → `gpt-6.1-sol`, gpt-5-mini → `gpt-6.1-terra`, gpt-5-nano → `gpt-6-luna`); dated gpt-4o / gpt-4.1 snapshots shut down on 2027-01-14 (→ `gpt-6-luna`). Evals (→ [[Promptfoo]]), Agent Builder and reusable prompts end on 2026-11-30; the Assistants API already shut down on 2026-08-26 (→ Responses + Conversations APIs).
- **Structured outputs / JSON mode** — schema-constrained responses for reliable parsing in pipelines.
- **Text-to-Speech (TTS)** — natural voices across many languages, used for audio generation. Deprecated: `tts-1`, `tts-1-hd` and `gpt-4o-mini-tts` got notice on 2026-10-01 and shut down on 2027-01-06. OpenAI's named replacement is the realtime model `gpt-realtime-2.1-mini`; prompt-to-voice custom voices arrived on 2026-10-16.
- **Embeddings** — dense vectors (e.g. `text-embedding-3-*`) for semantic search / RAG. Still on the pricing page (\$0.02 small, \$0.13 large per 1M tokens) with no deprecation notice.
- **Vision** — image understanding in multimodal models.
- **SDKs** — official Python and Node SDKs; OpenAI-compatible API shape adopted by many other providers.

### Download or use

```bash
npm i openai      # or: pip install openai
# client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])
```

- Platform: [platform.openai.com](https://platform.openai.com/)
- Docs: [developers.openai.com/api/docs](https://developers.openai.com/api/docs) (the old platform.openai.com/docs URLs redirect here)

## Reasoning for

OpenAI is one of the LLM backbones in my AI pipelines, deliberately wired into multi-provider designs. In [[Travelcast AI]] it serves two roles — script synthesis/consensus alongside other models, and as the **second tier in a TTS fallback chain** (ElevenLabs → OpenAI → Chatterbox), so a podcast still renders if the primary voice provider fails. That TTS tier needs migrating before 2027-01-06, when OpenAI shuts down `tts-1`, `tts-1-hd` and `gpt-4o-mini-tts`. In the [[Tech To The Rescue]] diagnosis its embeddings and chat models featured in the RAG/semantic-search layer. The reason it stays in the mix rather than being the sole provider: the OpenAI-compatible API shape has become a de-facto standard, so coding against it keeps the door open to [[Google Gemini]], local models, and others without rewrites.

## Alternatives considered

- **[[Claude Code|Anthropic Claude]]** — my primary model for agentic/coding work and long-context reasoning; OpenAI is used where its TTS or specific model strengths fit, or for provider diversity.
- **[[Google Gemini]]** — strong multimodal/image-understanding and generous context; used side-by-side, not instead.
- **[[ElevenLabs]]** — beats OpenAI TTS on voice quality/cloning, hence primary for TTS with OpenAI as fallback.
- **VoyageAI** — specialist embeddings (used in TTTR) that can outperform general-purpose ones for retrieval.

## Resources

- 📘 [OpenAI API docs](https://developers.openai.com/api/docs) · [Changelog](https://developers.openai.com/api/docs/changelog) · [Deprecations](https://developers.openai.com/api/docs/deprecations) · [Pricing](https://developers.openai.com/api/docs/pricing)
- 🔊 [Text-to-speech guide](https://developers.openai.com/api/docs/guides/text-to-speech)
- 🧮 [Embeddings guide](https://developers.openai.com/api/docs/guides/embeddings)
- 🧩 [Structured outputs](https://developers.openai.com/api/docs/guides/structured-outputs)

---
Template: [[templates/tool]]
