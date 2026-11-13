---
title: "Topaz Labs"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "ai", "image-enhancement", "upscaling", "image-processing", "api"]
type: tool
agent-created: true
agent-reviewed: 2026-11-13
summary: "AI image/video upscaling and enhancement — sharpen, denoise, super-resolution; the final-quality upscaling step in Qamera AI's image pipeline"
status-checked: 2026-11-13
project-status: active
---

# Topaz Labs

> [!success] Status check 2026-11-13 — active
> **Verdict:** topazlabs.com/updates lists ten updates in 2026.
> **Latest release:** Wonder 4 Update, 2026-11-03: a new image-model architecture for one-click upscale, sharpen and denoise. · **last dated update:** 2026-11-03 · **licence:** Proprietary, subscription only since 2025-10-03, when perpetual licences ended.
> **Source:** https://www.topazlabs.com/updates — **moved/renamed:** New owner: Adobe announced the acquisition on 2026-06-25 and closed it on 2026-09-23. Topaz stays a standalone brand, its apps and models are still sold separately, and CEO Eric Yang joins Adobe's Digital Video and Audio team.
> **Changed since this note:** Adobe bought the company: the deal was announced on 2026-06-25 and closed on 2026-09-23, and Topaz technology is now available in Adobe Firefly and Photoshop. Releases since 2026-06-13 are three.

A maker of AI-powered image and video **enhancement** tools — upscaling (super-resolution), sharpening, denoising, and detail recovery. Best known for desktop apps (Topaz Gigapixel, Topaz Photo, Topaz Video — formerly Gigapixel AI, Photo AI and Video AI), it also sells browser and mobile apps (Topaz for Web, Topaz for Mobile) and offers Image and Video APIs for programmatic enhancement. In a generation pipeline it's the *post-processing* stage: take a generated image and push it to print/commercial quality.

**Ownership:** Topaz Labs is an Adobe company. Adobe announced the deal in June 2026 and completed it on 2026-09-23. Topaz stays a standalone brand and its apps and models are still sold on their own; Topaz technology also ships inside Adobe Firefly and Photoshop, and CEO Eric Yang joined Adobe's Digital Video and Audio team.

## Links

### Description

- **Super-resolution / upscaling** — enlarge images many× while reconstructing detail.
- **Sharpen & denoise** — recover crispness, remove noise/compression artifacts.
- **Topaz Photo** (formerly Photo AI) — combined enhancement pipeline (autopilot detail/face/upscale).
- **Topaz Video** (formerly Video AI) — frame-interpolation, upscaling, stabilization for video.
- **Image models** — Wonder 4 (2026-11-03, a new architecture for one-click upscale, sharpen and denoise), Bloom 2 and Wonder 3.5 upscalers (2026-08-04), Denoise Max, Standard 2.
- **Video models** — Starlight Precise 2.6, Starlight Fast 3, Hyperion 2.5 (SDR-to-HDR), Proteus.
- **API** — separate Image and Video APIs, credit-based, for automated pipelines.

### Download or use

- Site: [topazlabs.com](https://www.topazlabs.com/) · API docs: [developer.topazlabs.com](https://developer.topazlabs.com/)
- Desktop apps (single apps or the Topaz Studio bundle), Topaz for Web and Mobile (Android since 2026-09-28), plus the Image and Video APIs for automation.
- Subscription only: the pricing page lists no perpetual licence. The standard tiers allow commercial use only for organisations under \$1M annual revenue; above that you need a Pro licence.

## Reasoning for

Topaz is the **enhancement/upscaling** stage at the end of [[Qamera AI]]'s image pipeline. Generation ([[BytePlus Seedream|BytePlus Seedream 4.0]], [[Replicate]]) produces the image; Topaz pushes it to the resolution and crispness e-commerce/print demands. Separating *generation* from *enhancement* is deliberate: the generator optimizes for composition and fidelity, Topaz optimizes for pixel-level quality — chaining specialists beats expecting one model to do both. For a product where the output is commercial product photography, that final polish is part of the value, not an afterthought.

## Alternatives considered

- **Real-ESRGAN / GFPGAN on [[Replicate]]** — open-source upscalers via API; cheaper, generally below Topaz on output quality.
- **Magnific AI** — high-end generative upscaler with strong results; a credible alternative, different cost profile.
- **Built-in model upscaling** — some generators upscale natively; a dedicated enhancer still wins on final quality.
- **Adobe Firefly / Photoshop** — since the acquisition they include Topaz upscaling and enhancement, so inside an Adobe workflow the same technology is available without a separate Topaz app.

## Resources

- 📘 [Topaz Labs](https://www.topazlabs.com/) · [Release updates](https://www.topazlabs.com/updates) · [API docs](https://developer.topazlabs.com/)
- 📰 [Adobe completes acquisition of Topaz Labs](https://blog.adobe.com/en/publish/2026/09/23/adobe-completes-acquisition-of-topaz-labs) — 2026-09-23
- 🔗 [[BytePlus Seedream]] · [[Replicate]] — the generation stages Topaz polishes

---
Template: [[templates/tool]]
