---
title: "Replicate"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "ai", "model-inference", "image-generation", "api", "ml-hosting"]
type: tool
agent-created: true
agent-reviewed: 2026-11-13
summary: "Run open and commercial ML models via one API — image gen, upscaling, audio, more; the hosted-inference fallback in Qamera AI and image generation in AGRE"
status-checked: 2026-11-13
project-status: active
repo: "https://github.com/replicate/cog"
---

# Replicate

> [!success] Status check 2026-11-13 — active
> **Verdict:** Cog shipped v0.23.0 on 2026-09-22 and v0.23.1 on 2026-10-20, with commits on main on 2026-10-27.
> **Last release:** Cog v0.23.1, 2026-10-20 (GitHub releases, marked Latest). · **last commit:** 2026-10-27 · **licence:** Cog: Apache-2.0. Replicate platform: proprietary SaaS, pay per use.
> **Source:** https://replicate.com/changelog
> **Changed since this note:** The note does not mention the Cloudflare ownership, which predates it (announced 2025-11-17, 'officially part of Cloudflare' 2025-12-01). On 2026-04-16 Cloudflare said the Replicate team had joined its AI Platform team and that work to replatform hosted models onto Cloudflare and expose them through AI Gateway was…

A platform for running machine-learning models in the cloud through **one consistent API**. Thousands of community and commercial models (image generation, upscaling, background removal, audio, video, LLMs) are packaged so you can call any of them with a simple HTTP request — no GPUs to provision, pay per run. You can also push your own models (packaged with Cog) and get an instant scalable endpoint.

**Ownership:** Replicate is part of [[Cloudflare]]. Cloudflare announced the acquisition on 2025-11-17 (promising that existing APIs and workflows keep working) and called Replicate "officially part of Cloudflare" on 2025-12-01. replicate.com and its API still run under the Replicate name. On 2026-04-16 Cloudflare said the Replicate team had joined its AI Platform team, that hosted models are being moved onto Cloudflare infrastructure, and that all Replicate models are coming to AI Gateway "soon". No timeline and no sunset of replicate.com had been announced as of 2026-11-13.

## Links

### Description

- **Model hub** — run popular open/commercial models (Flux, SDXL, upscalers, etc.) via API.
- **Unified API** — same request shape across models; predictions are async with polling/webhooks.
- **Pay-per-use** — most public models bill per second of hardware time (e.g. Nvidia T4 \$0.81/h, L40S \$3.51/h, H100 \$5.49/h); some official models bill per output (e.g. FLUX 1.1 Pro \$0.04 per image) or per token. No idle cost on public models, but private models bill for all the time their instances are online, setup and idle included.
- **Cog** — open-source (Apache-2.0) tool to containerize and deploy your own models; v0.23.1 (2026-10-20) is the latest release. Since v0.22.0 (2026-08-14) local `cog serve` / `cog predict` bind to `127.0.0.1` instead of `0.0.0.0` (use `--host 0.0.0.0` for the old behaviour). Cloudflare also uses Cog to containerize models for Workers AI.
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
- **[[Cloudflare]] Workers AI / AI Gateway** — same company now. Cloudflare plans to serve the whole Replicate catalogue through AI Gateway and let Replicate-deployed models run on Workers AI, so this may become the long-term home of the same models; expect migration work if endpoints or billing move.

## Resources

- 📘 [Replicate docs](https://replicate.com/docs) · [Pricing](https://replicate.com/pricing)
- 🧩 [Cog (package your own model)](https://github.com/replicate/cog) · [releases](https://github.com/replicate/cog/releases)
- 📰 [Replicate is joining Cloudflare](https://blog.cloudflare.com/replicate-joins-cloudflare/) (2025-11-17) · [Cloudflare AI Platform](https://blog.cloudflare.com/ai-platform/) (2026-04-16)
- 🔗 [[BytePlus Seedream]] · [[Topaz Labs]] · [[Google Gemini]]

---
Template: [[templates/tool]]
