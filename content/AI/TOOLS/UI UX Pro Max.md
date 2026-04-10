---
title: "UI UX Pro Max"
date: 2026-03-31
enableToc: true
openToc: true
tags: ["tool", "ai", "design", "claude-code", "skills"]
type: tool
agent-created: true
summary: "Claude Code design system skill — adapts UI/UX guidance per project type (portfolio, SaaS, e-commerce)"
---

# UI UX Pro Max

Skill dla [[Claude Code]], który rozwiązuje problem **generic AI slop** — generycznego wyglądu frontendów, który natychmiast zdradza, że stronę wygenerował AI. Zamiast jednego uniwersalnego podejścia do designu, oferuje inteligentną generację design systemów dopasowanych do typu projektu.

## Links
### Description
Analizuje typ projektu — portfolio, SaaS, e-commerce, landing page — i dobiera odpowiedni design system. Inne kolory, inne proporcje, inne komponenty. Każdy system ma swoją logikę: portfolio podkreśla personal brand, SaaS kładzie nacisk na konwersję, e-commerce na prezentację produktów.

### Download or use
[GitHub: nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)

## 🗒️ Reasoning for

Dwa projekty wygenerowane z tym samym skillem wyglądają **zupełnie inaczej** — to dokładnie o to chodzi. Indywidualność zamiast szablonu.

Dlaczego to ważne:
- Prosisz Claude Code o stronę i dostajesz ten sam layout co wszyscy — hero section, zaokrąglone karty, te same gradienty
- UI/UX Pro Max daje agentowi wiedzę o designie, którą normalnie musiałby mieć designer
- Adaptuje się per projekt — nie jest random, każdy system ma swoją logikę

Używam go w połączeniu z **Tailwind CSS** i **React**. Przy budowie komponentów skill generuje spójny design system, który potem dostosowuję. Oszczędza czas na etapie prototypowania — solidna baza dopasowana do kontekstu zamiast walki z generycznym outputem.

## 🧩 Features

#todo/complete — poniższe na podstawie blog overview, wymaga pełnego ingestion z repo

- **Design system selection** — automatyczny dobór systemu na podstawie typu projektu
- **Typography** — dopasowanie fontów do charakteru projektu
- **Color palettes** — kolory spójne z brandem i typem aplikacji
- **Responsive patterns** — komponenty dopasowane do kontekstu (mobile-first)
- **Component library** — gotowe wzorce dla typowych elementów UI

## Alternatives considered
- Ręczne prototypowanie — działa, ale wolne
- [[Cursor]] z design promptami — brak systematycznego podejścia do design systems
- [[Vibe Coding]] bez design skill — prowadzi do generic AI slop
- Gotowe component libraries (shadcn/ui, Material) — dobre, ale nie adaptują się do typu projektu

## 📖 Resources
- [GitHub: nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
- [[Claude Code]] — primary AI coding assistant
- [[Vibe Coding]] — kontekst: problem generic AI slop
- [[Cursor]] — alternatywne IDE z AI

---
Template: [[templates/tool]]
