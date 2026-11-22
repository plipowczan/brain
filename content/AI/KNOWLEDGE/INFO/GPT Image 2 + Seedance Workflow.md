---
title: "GPT Image 2 + Seedance Workflow"
date: 2026-05-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "video", "image-generation", "workflow", "ads"]
type: knowledge-note
sources: ["_raw/processed/2026-05-09_Post LinkedIn GPT Image 2 Seedance.md", "_raw/processed/2026-11-22_How I prompt AI to build good looking demos.md"]
agent-created: true
summary: "Storyboard-driven AI video ad workflow: GPT Image 2 generates a frame-by-frame storyboard, Seedance 2 turns each frame into a clip"
---

# GPT Image 2 + Seedance 2 Workflow

## 🗒️ Description

A **video ad generation** workflow described by Raphael Guilhem on LinkedIn. It chains two models in a pipeline where the storyboard from the image model is **the prompt for the video model** — eliminates guessing and credit waste.

Key insight: it's not about "use AI" but about **sequencing models**. GPT Image 2 for visual intent (storyboard as a single grid image — like old nanobanana), Seedance 2 for motion with continuity preserved between frames.

## 🔗 Links

- [Original LinkedIn post — Raphael Guilhem](https://www.linkedin.com/feed/update/urn:li:activity:7458080362468958208/)
- [[Awesome Nano Banana Pro Prompts]] — related prompt library for Nano Banana Pro (Google); the YouMind collection also has a GPT Image 2 collection

## 🧩 Pipeline (3 steps)

1. **Brief + packshot** — feed the workflow a creative brief and a product image
2. **GPT Image 2 → storyboard** — generates frame-by-frame as a single image grid; review before spending credits on video
3. **Seedance 2 → video** — storyboard as prompt, each frame becomes a clip; the model knows exactly what you want because you designed it precisely

Output: a video ad where **every frame is intentional**. No guessing, no credit waste, no "let's try again".

## 🧩 Why it works

- **Temporal consistency** — Seedance 2 maintains product detail between cuts (previous tools lost jewelry facets between frames)
- **Spatial structure preservation** — the pipeline preserves the structure from the reference frame in a way earlier video tools couldn't
- **Camera control** — respects camera path intention (smooth dolly, consistent horizon), which was an AI video pain point
- **Economics of revision** — in a traditional shoot, revision = reshoot. Here, revision = updating the prompt

## 🧩 Use cases (from comments)

- **Luxury / jewelry commercials** — temporal consistency good enough for the brand
- **Architectural flythrough (AEC)** — Sketchup → stakeholder-ready video in half a day (instead of a week with a visualization specialist)
- **Product photography with animation** — instead of a static packshot

⚠️ Open question: interior vs exterior — indoor lighting control is still hard for AI video (most tools struggle with professional architectural).

## 🧩 The same order, with the scene built in code

Added 2026-11-22 from [[How I Prompt AI to Build Good-Looking Demos (Leon Lin)]]. Leon Lin uses the same sequencing for 3D demos, with a coding agent in place of the video model:

1. **GPT Image Gen makes the target:** 9–12 reference images of the scene.
2. **Opus 5.5 builds it in code:** a three.js world with no external assets, matched to the images ("aim for 99.9%").
3. **Stills before the video:** the agent renders the shots that match the references and shows them first. The final 4K video (about 13 h of GPU time for his Greek world) is rendered only after he approves them. It is the same checkpoint as reviewing the storyboard grid here before spending video credits.

His caveat: next to the references the code-built result still looks clearly weaker, so the reference images set a ceiling as well as a target. His [[Cook]] skill automates the loop.

## 📖 Further reading

- [[Awesome Nano Banana Pro Prompts]] — prompt library for Google Nano Banana Pro (alternative image model)
- [[Agentic Systems]] — broader context for multi-model pipelines
- [[How I Prompt AI to Build Good-Looking Demos (Leon Lin)]] — generated reference images as the target for a code-built 3D world, stills before the render
- [[Open Design]] — bundles the same stack: gpt-image-2 + Seedance 2.0 + HyperFrames as built-in media generation with a prompt gallery (93 prompts)

---
Template: [[templates/knowledge_note_info]]
