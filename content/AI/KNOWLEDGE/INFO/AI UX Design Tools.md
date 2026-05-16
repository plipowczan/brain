---
title: "AI UX Design Tools"
date: 2026-05-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "ux", "design", "product"]
type: knowledge-note
agent-created: true
summary: "Hub for AI-driven UX/product design tools — methodology skills (UX RULER) and generative design platforms (UX Pilot)"
---

# AI UX Design Tools

## 🗒️ Description

Landscape AI tools wspierających design produktu — od **methodology** (skille uczące agenta jak prowadzić proces produktowy od misji do mierzalnej wartości) po **generative platforms** (które generują wireframe'y i hi-fi UI w sekundach).

Dwa różne paradygmaty, komplementarne:
- **Process-first**: agent prowadzi Cię przez decyzje (audience → need → metric → validation) zanim dotkniesz Figmy. Przykład: [[UX RULER]].
- **Output-first**: agent generuje gotowe ekrany z promptu / PRD / sketcha. Przykład: [[UX Pilot]].

W praktyce sensowny stack to: **UX RULER** dla decyzji i pamięci produktowej (`PRODUCT.md`, `ROADMAP.md`) + **UX Pilot** dla szybkiej wizualizacji wybranych hipotez.

## 🔗 Links

- [[UX RULER]] — open-source UX skill dla agentów (Claude Code, Codex), proces od misji do metryki, zapis decyzji w repo
- [[UX Pilot]] — generator wireframe'ów i hi-fi UI z AI, eksport do Figmy i kodu
- [[Open Design]] — local-first OSS alternatywa do Claude Design: 31 design skills, 72+ design systems, 16 CLI agents, HTML/PDF/PPTX/MP4 export, BYOK
- [[UI UX Pro Max]] — Claude Code design system skill (v2.0 Design System Generator)

## 🧩 Features porównanie

| | UX RULER | UX Pilot |
|---|---|---|
| Typ | Skill / methodology | SaaS platform |
| Input | Brief / repo / pomysł | Sketch / PRD / prompt |
| Output | Decyzje + pliki w repo (`PRODUCT.md`, `ROADMAP.md`, ADR-y) | Wireframe / hi-fi screen / kod |
| Faza | Strategy → Need → Plan | Wireframe → Hi-fi → Hand-off |
| Open source | Tak (GitHub) | Nie (freemium) |
| Integracja | Claude Code / Codex / repo | Figma / GitHub sync |

## 📖 Further reading

- [[Agent Skills]] — szerszy kontekst skilli dla agentów, w którym żyje UX RULER
- [[UI UX Pro Max]] — pokrewne narzędzie generujące design system + reasoning rules
- [[Awesome Agent Skills]] — curated list, gdzie skille typu UX RULER są indeksowane
- [[Spec-driven SEO and GEO]] — pokrewny pattern: methodology zapisywana jako pliki w repo

---
Template: [[templates/knowledge_note_info]]
