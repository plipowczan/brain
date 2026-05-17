---
title: "Awesome Design MD"
date: 2026-04-10
enableToc: true
openToc: true
tags: ["tool", "ai", "design", "coding-agents", "frontend", "ui"]
type: tool
source: "_raw/inbox/VoltAgentawesome-design-md A collection of DESIGN.md files inspired by popular brand design systems. Drop one into your project and let coding agents generate a matching UI.md"
agent-created: true
summary: "Collection of DESIGN.md files from real brands — drop into project, AI agent generates matching UI"
---

# Awesome Design MD

A collection of ready-made DESIGN.md files extracted from real sites (Claude, Vercel, Stripe, Nike, Apple, Spotify, Linear...). Drop the file into the project root, tell an AI agent "build me a page that looks like this" — get a pixel-perfect UI matching the chosen brand.

## Links
### 🗒️ Description
[DESIGN.md](https://stitch.withgoogle.com/docs/design-md/overview/) is a Google Stitch concept — a plain-text design system document readable by LLMs. Markdown, zero Figma exports, zero JSON schemas. Analogy:

| File | Who reads it | What it defines |
| --- | --- | --- |
| `AGENTS.md` | Coding agents | How to build the project |
| `DESIGN.md` | Design agents | How the project should look and feel |

Every DESIGN.md contains 9 sections:
1. Visual Theme & Atmosphere
2. Color Palette & Roles (hex + semantic role)
3. Typography Rules (full hierarchy table)
4. Component Stylings (buttons, cards, inputs + states)
5. Layout Principles (spacing scale, grid)
6. Depth & Elevation (shadow system)
7. Do's and Don'ts
8. Responsive Behavior (breakpoints, touch targets)
9. Agent Prompt Guide (quick reference + ready-to-use prompts)

### Download or use
[GitHub: VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
[Request custom DESIGN.md](https://getdesign.md/request)

## 🗒️ Reasoning for

When [[Claude Code]] or [[Cursor]] generates UI, the result tends to look generic. DESIGN.md solves that — the agent has the full design system in context. Workflow:
1. Pick a brand matching your style (e.g. Linear for minimalism, Stripe for elegance)
2. Copy `DESIGN.md` to the project root
3. The agent automatically reads the file and generates UI consistent with the design system

Especially useful for [[Qamera AI]] and [[PLSoft]] projects where I want a distinctive UI without hiring a designer.

## 🧩 Available Brands (60+)

**AI & LLM:** Claude, Mistral AI, ElevenLabs, Ollama, Replicate, RunwayML, Together AI, xAI
**Dev Tools:** Cursor, Vercel, Raycast, Warp, Expo, Lovable, Superhuman
**Backend/DevOps:** Supabase, MongoDB, PostHog, Sentry, ClickHouse, HashiCorp, Sanity
**SaaS:** Linear, Notion, Zapier, Cal.com, Resend, Mintlify, Intercom
**Design:** Figma, Framer, Airtable, Miro, Webflow
**Fintech:** Stripe, Revolut, Coinbase, Binance, Wise, Kraken
**Consumer:** Apple, Spotify, Nike, Airbnb, Uber, Pinterest, SpaceX
**Automotive:** Tesla, BMW, Ferrari, Lamborghini, Renault

## Alternatives considered
- **Figma exports** — require Figma, not directly readable by LLMs
- **Tailwind presets** — only colors and spacing, don't capture design philosophy
- **Manual CSS theming** — time-consuming, doesn't scale with an AI workflow
- **Screenshot-based prompting** — less precise than a structured DESIGN.md

## 📖 Resources
- [GitHub: VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
- [Google Stitch DESIGN.md format](https://stitch.withgoogle.com/docs/design-md/format/)
- [getdesign.md](https://getdesign.md/) — browse & request
- [[Claude Code]] — primary AI coding assistant
- [[Cursor]] — AI code editor

---
Template: [[templates/tool]]
