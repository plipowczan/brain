---
title: "Replicate"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "ai", "model-inference", "image-generation", "api", "ml-hosting"]
type: tool
agent-created: true
summary: "Run open and commercial ML models via one API — image gen, upscaling, audio, more; the hosted-inference fallback in Qamera AI and image generation in AGRE"
status-checked: 2026-11-13
project-status: active
---

# Replicate

> [!success] Status check 2026-11-13 — active
> **Verdict:** Cog shipped v0.23.0 on 2026-09-22 and v0.23.1 on 2026-10-20, with commits on main on 2026-10-27.
> **Last release:** Cog v0.23.1, 2026-10-20 (GitHub releases, marked Latest). · **last commit:** 2026-10-27 · **licence:** Cog: Apache-2.0. Replicate platform: proprietary SaaS, pay per use.
> **Source:** https://replicate.com/changelog
> **Changed since this note:** The note does not mention the Cloudflare ownership, which predates it (announced 2025-11-17, 'officially part of Cloudflare' 2025-12-01). On 2026-04-16 Cloudflare said the Replicate team had joined its AI Platform team and that work to replatform hosted models onto Cloudflare and expose them through AI Gateway was…

A platform for running machine-learning models in the cloud through **one consistent API**. Thousands of community and commercial models (image generation, upscaling, background removal, audio, video, LLMs) are packaged so you can call any of them with a simple HTTP request — no GPUs to provision, pay per run. You can also push your own models (packaged with Cog) and get an instant scalable endpoint.

## Links

### Description

- **Model hub** — run popular open/commercial models (Flux, SDXL, upscalers, etc.) via API.
- **Unified API** — same request shape across models; predictions are async with polling/webhooks.
- **Pay-per-use** — billed by compute-second, no idle GPU cost.
- **Cog** — open-source tool to containerize and deploy your own models.
- **Webhooks** — get notified when a long-running prediction completes.

### Download or use

```bash
pip install replicate        # or: npm i replicate
# replicate.run("owner/model:version", input={...})
```

- Site: [replicate.com](https://replicate.com/)
- Docs: [replicate.com/docs](https://replicate.com/docs)

## Reasoning for

Replicate is the "any model on tap" layer in my image pipelines. In [[Qamera AI]] it serves as a **fallback** generation provider behind the primary [[BytePlus Seedream|BytePlus Seedream 4.0]] — when a specific model or capability is needed that the primary doesn't cover, Replicate provides it without standing up GPU infra. In [[AGRE]] it's used for image generation/processing tasks. The strategic value is optionality: a single API in front of a constantly-changing model landscape means I can adopt a new state-of-the-art model the day it lands, behind the same provider abstraction, instead of integrating each vendor separately.

## Alternatives considered

- **[[BytePlus Seedream|BytePlus Seedream 4.0]]** — Qamera's primary generator; Replicate is the flexible fallback/extra-capability layer.
- **Fal.ai** — fast inference host focused on real-time image/video; strong competitor, similar role.
- **Hugging Face Inference** — vast model access; Replicate's packaged run-any-model API is simpler for production calls.
- **Self-hosting on [[Hetzner]] GPU** — cheapest at sustained volume, but you own ops/scaling; Replicate wins for spiky/varied workloads.

## Resources

- 📘 [Replicate docs](https://replicate.com/docs)
- 🧩 [Cog (package your own model)](https://github.com/replicate/cog)
- 🔗 [[BytePlus Seedream]] · [[Topaz Labs]] · [[Google Gemini]]

---
Template: [[templates/tool]]
