---
title: "Google Gemini"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "multimodal", "image-understanding", "google", "api"]
type: tool
agent-created: true
agent-reviewed: 2026-11-13
summary: "Google's multimodal LLM family — strong image understanding, large context, and image generation (Nano Banana); used for vision/analysis and idea generation across my AI pipelines"
status-checked: 2026-11-13
project-status: active
homepage: "https://ai.google.dev/"
---

# Google Gemini

> [!success] Status check 2026-11-13 — active
> **Verdict:** Three GA launches in the past four days: Gemini 4 Carbon (2026-11-10), the Decisions API (11-11) and Gemini 4 Hydrogen (11-12).
> **Latest release:** Gemini 4 Hydrogen (`gemini-4-hydrogen`) GA, 2026-11-12. · **last dated update:** 2026-11-12 · **licence:** Proprietary API with a free tier, where content is used to improve Google products, and a paid tier, where it is not.
> **Source:** https://aistudio.google.com/docs/changelog — **moved/renamed:** The model brand is unchanged, but the surrounding names and URLs moved. Vertex AI was renamed Gemini Enterprise Agent Platform at Google Cloud Next 2026 (announced 2026-04-22).
> **Changed since this note:** (1) A new generation: Gemini 4 Argon (GA 2026-10-13, 'most capable' for coding, agentic, math and science work), Gemini 4 Carbon (GA 11-10, reasoning model for sustained agentic coding) and Gemini 4 Hydrogen (GA 11-12, fast, on the free tier, default model for the Antigravity managed agent). All have 1M-token context.

Google's multimodal large-language-model family, accessed via the Gemini API (and Google AI Studio / Gemini Enterprise Agent Platform on Google Cloud, formerly Vertex AI). Its strengths in my stack are **image understanding** (analyzing and describing visual input), **large context windows**, and **image generation** through the Gemini image models (the "Nano Banana" line). It's another provider I keep in a multi-vendor setup rather than committing to exclusively.

## Links

### Description

- **Models (as of 2026-11-13)** — the Gemini 4 generation went GA in October–November 2026: Gemini 4 Carbon (`gemini-4-carbon`, strongest reasoning), Gemini 4 Argon (`gemini-4-argon`, efficient frontier reasoning, faster than Carbon) and Gemini 4 Hydrogen (`gemini-4-hydrogen`, fast everyday coding/agentic work, on the free tier). Gemini 3.8 Flash is the current Flash model.
- **Multimodal input** — reason over text + images (and more) in a single call; strong at vision/analysis tasks.
- **Large context window** — 1M tokens on the Gemini 4 models; long documents and many-image prompts in one request.
- **Image generation** — Nano Banana 2.1 (`gemini-nano-banana-2.1`, GA 2026-10-06) is the newest; Nano Banana Pro (`gemini-3-pro-image`) is still listed as stable; Nano Banana 2 (`gemini-3.1-flash-image`) is deprecated in favour of 2.1, with no shutdown date yet. Imagen 4 shut down on 2026-08-17; video now comes from Gemini Omni Flash.
- **Speech** — Gemini 3.8 Flash TTS and Flash-Lite TTS (GA 2026-09-22), Gemini 3.8 Live for low-latency voice, Gemini 3.5 Transcribe.
- **Tool/function calling & structured output** — for pipeline integration. Computer Use went GA on 2026-10-30.
- **Access paths** — Gemini API + Google AI Studio for prototyping; Gemini Enterprise Agent Platform (formerly Vertex AI) for production Google Cloud integration.

### Things that changed in 2026 and bite pipelines

- **Auto-routing of retired IDs** — deprecated model IDs keep answering, but with a newer model: from 2026-12-01 `gemini-2.5-pro` routes to `gemini-3.8-flash` and `gemini-2.5-flash` to `gemini-3.5-flash-lite` (billed at the new model's rates). Behaviour changes without a code change, so pin and re-test.
- **Sampling parameters** — `temperature`, `top_p` and `top_k` are deprecated (2026-07-21).
- **Request storage** — since 2026-10-26 new paid-tier projects store Generate Content requests by default (`store=true`); existing projects keep their setting. Free-tier content is used to improve Google's products.
- **Pricing (per 1M tokens, input/output)** — Gemini 4 Carbon and Argon \$2/\$10 introductory through 2026-11-30, then \$4/\$20, no free tier; Gemini 4 Hydrogen \$1.50/\$7.50 plus a free tier; Gemini 3.8 Flash \$0.75/\$3.75 through 2026-12-31, then \$1.50/\$7.50; Nano Banana 2.1 image output about \$0.034 per 1K image.

### Download or use

```bash
npm i @google/genai      # or: pip install google-genai
```

- Google AI Studio: [aistudio.google.com](https://aistudio.google.com/)
- Docs: [aistudio.google.com/docs](https://aistudio.google.com/docs) (the old ai.google.dev/gemini-api/docs URLs redirect here)
- See also: [[Awesome Nano Banana Pro Prompts]] for image-gen prompting.

## Reasoning for

Gemini covers the vision-heavy and ideation parts of my pipelines. In [[Qamera AI]] — an AI photo product — Gemini's image-understanding handles analysis and idea-generation steps, and its image models are part of the generation toolkit alongside Replicate and BytePlus Seedream. In the [[Nonprofit AI-Native Platform|nonprofit-platform]] diagnosis it appeared as a general-purpose LLM option. Keeping it next to [[OpenAI]] and [[Claude Code|Claude]] is intentional: different models win at different tasks (Gemini for multimodal/long-context, Claude for agentic/coding, OpenAI for TTS), and a multi-provider design lets each pipeline step pick the best fit. It connects to the broader Nano Banana image-prompting material already in the vault ([[Awesome Nano Banana Pro Prompts]]).

## Alternatives considered

- **[[OpenAI]]** — comparable general LLM + TTS; Gemini edges it on some multimodal/long-context tasks, used side-by-side.
- **[[Claude Code|Anthropic Claude]]** — my default for agentic/coding reasoning; Gemini chosen specifically for vision/image work.
- **Replicate** — hosts many image models behind one API; complementary, used for models Gemini doesn't cover.
- **BytePlus Seedream 4.0** — primary high-res image generation for [[Qamera AI]]; Gemini handles understanding + ideation rather than the final 4K render.

## Resources

- 📘 [Gemini API docs](https://aistudio.google.com/docs) · [Models](https://aistudio.google.com/docs/models) · [Changelog](https://aistudio.google.com/docs/changelog) · [Pricing](https://aistudio.google.com/docs/pricing)
- 🧪 [Google AI Studio](https://aistudio.google.com/)
- 🍌 [[Awesome Nano Banana Pro Prompts]] — image-gen prompting
- ☁️ [Gemini Enterprise Agent Platform (formerly Vertex AI)](https://cloud.google.com/products/gemini-enterprise-agent-platform)

---
Template: [[templates/tool]]
