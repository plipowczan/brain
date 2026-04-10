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

Kolekcja gotowych DESIGN.md files wyciągniętych z prawdziwych stron (Claude, Vercel, Stripe, Nike, Apple, Spotify, Linear...). Wrzucasz plik do roota projektu, mówisz AI agentowi "build me a page that looks like this" — dostajesz pixel-perfect UI matching wybrany brand.

## Links
### 🗒️ Description
[DESIGN.md](https://stitch.withgoogle.com/docs/design-md/overview/) to koncept Google Stitch — plain-text design system document czytelny dla LLM. Markdown, zero Figma exports, zero JSON schemas. Analogia:

| File | Who reads it | What it defines |
| --- | --- | --- |
| `AGENTS.md` | Coding agents | How to build the project |
| `DESIGN.md` | Design agents | How the project should look and feel |

Każdy DESIGN.md zawiera 9 sekcji:
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

Kiedy [[Claude Code]] lub [[Cursor]] generuje UI, wynik wygląda generycznie. DESIGN.md rozwiązuje ten problem — agent ma pełny design system w kontekście. Workflow:
1. Wybierz brand matching Twój styl (np. Linear dla minimalizmu, Stripe dla elegancji)
2. Skopiuj `DESIGN.md` do roota projektu
3. Agent automatycznie czyta plik i generuje UI zgodne z design system

Szczególnie przydatne dla [[Qamera AI]] i projektów [[PLSoft]] gdzie chcę distinctive UI bez zatrudniania designera.

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
- **Figma exports** — require Figma, nie są czytelne dla LLM bezpośrednio
- **Tailwind presets** — tylko kolory i spacing, nie capture design philosophy
- **Manual CSS theming** — czasochłonne, nie skaluje się z AI workflow
- **Screenshot-based prompting** — mniej precyzyjne niż structured DESIGN.md

## 📖 Resources
- [GitHub: VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
- [Google Stitch DESIGN.md format](https://stitch.withgoogle.com/docs/design-md/format/)
- [getdesign.md](https://getdesign.md/) — browse & request
- [[Claude Code]] — primary AI coding assistant
- [[Cursor]] — AI code editor

---
Template: [[templates/tool]]
