---
title: "UI UX Pro Max"
date: 2026-03-31
enableToc: true
openToc: true
tags: ["tool", "ai", "design", "claude-code", "skills"]
type: tool
agent-created: true
agent-reviewed: 2026-05-03
source: "_raw/inbox/nextlevelbuilderui-ux-pro-max-skill An AI SKILL that provide design intelligence for building professional UIUX multiple platforms.md"
summary: "Claude Code design system skill — adapts UI/UX guidance per project type; v2.0 dodaje Design System Generator (161 reasoning rules, 67 styles, 161 palet, 57 font pairings)"
---

# UI UX Pro Max

Skill dla [[Claude Code]], który rozwiązuje problem **generic AI slop** — generycznego wyglądu frontendów, który natychmiast zdradza, że stronę wygenerował AI. Zamiast jednego uniwersalnego podejścia do designu, oferuje inteligentną generację design systemów dopasowanych do typu projektu.

## Links
### Description
Analizuje typ projektu — portfolio, SaaS, e-commerce, landing page — i dobiera odpowiedni design system. Inne kolory, inne proporcje, inne komponenty. Każdy system ma swoją logikę: portfolio podkreśla personal brand, SaaS kładzie nacisk na konwersję, e-commerce na prezentację produktów.

### Download or use
[GitHub: nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) · [uupm.cc](https://uupm.cc/)

Powiązane projekty autora: [NextLevelBuilder.io](https://nextlevelbuilder.io/) · [GoClaw.sh](https://goclaw.sh/) · [ClaudeKit.cc](https://claudekit.cc/) · [TOSE.sh](https://tose.sh/)

## 🚀 What's New in v2.0 — Design System Generator

Flagship feature: **Intelligent Design System Generation**. Reasoning engine analizuje projekt i generuje kompletny, dopasowany design system w sekundach.

Pipeline (5 kroków):
1. **User request** — np. *"Build a landing page for my beauty spa"*.
2. **Multi-domain search** (5 równoległych): product type matching (161 kategorii) · style recommendations (67) · color palette (161 palet) · landing page patterns (24) · typography pairing (57 kombinacji).
3. **Reasoning engine** — match product → UI category, BM25 ranking style priorities, filter anti-patterns per industry, JSON decision rules.
4. **Output** — Pattern + Style + Colors + Typography + Effects + anti-patterns + pre-delivery checklist.
5. **Sample output** — concrete spec: pattern (np. *Hero-Centric + Social Proof*), style (*Soft UI Evolution*), pełna paleta z hexami, typografia (Cormorant Garamond + Montserrat), key effects, AVOID list i checklist a11y/responsywność.

### 161 Industry-Specific Reasoning Rules

Specjalizowane reguły per branża:

| Kategoria | Przykłady |
|-----------|-----------|
| **Tech & SaaS** | SaaS, Micro SaaS, B2B Service, Developer Tool / IDE, AI/Chatbot Platform, Cybersecurity |
| **Finance** | Fintech/Crypto, Banking, Insurance, Personal Finance Tracker, Invoice & Billing |
| **Healthcare** | Medical Clinic, Pharmacy, Dental, Veterinary, Mental Health, Medication Reminder |
| **E-commerce** | General, Luxury, Marketplace (P2P), Subscription Box, Food Delivery |
| **Services** | Beauty/Spa, Restaurant, Hotel, Legal, Home Services, Booking |
| **Creative** | Portfolio, Agency, Photography, Gaming, Music Streaming, Photo/Video Editor |
| **Lifestyle** | Habit Tracker, Recipe & Cooking, Meditation, Weather, Diary, Mood Tracker |
| **Emerging Tech** | Web3/NFT, Spatial Computing, Quantum Computing, Autonomous Drone Fleet |

Każda reguła zawiera: Recommended Pattern · Style Priority · Color Mood · Typography Mood · Key Effects · **Anti-Patterns** (np. *"AI purple/pink gradients"* dla bankingu).

## 🧩 Features (v2.0)

- **67 UI Styles** — Glassmorphism, Claymorphism, Minimalism, Brutalism, Neumorphism, Bento Grid, Dark Mode, AI-Native UI, …
- **161 Color Palettes** — industry-specific, 1:1 z 161 product types
- **57 Font Pairings** — curated typography z Google Fonts importami
- **25 Chart Types** — rekomendacje pod dashboardy/analytics
- **15 Tech Stacks** — React, Next.js, Astro, Vue, Nuxt + Nuxt UI, Svelte, SwiftUI, React Native, Flutter, HTML+Tailwind, shadcn/ui, Jetpack Compose, Angular, Laravel
- **99 UX Guidelines** — best practices, anti-patterns, a11y rules
- **161 Reasoning Rules** *(NEW v2.0)* — industry-specific design system generation

## 🗒️ Reasoning for

Dwa projekty wygenerowane z tym samym skillem wyglądają **zupełnie inaczej** — to dokładnie o to chodzi. Indywidualność zamiast szablonu.

Dlaczego to ważne:
- Prosisz Claude Code o stronę i dostajesz ten sam layout co wszyscy — hero section, zaokrąglone karty, te same gradienty
- UI/UX Pro Max daje agentowi wiedzę o designie, którą normalnie musiałby mieć designer
- Adaptuje się per projekt — nie jest random, każdy system ma swoją logikę
- v2.0 pre-delivery checklist (kontrast 4.5:1, focus states, prefers-reduced-motion, responsive breakpoints) działa jak wbudowane code review designu

Używam go w połączeniu z **Tailwind CSS** i **React**. Przy budowie komponentów skill generuje spójny design system, który potem dostosowuję. Oszczędza czas na etapie prototypowania — solidna baza dopasowana do kontekstu zamiast walki z generycznym outputem.

## Alternatives considered
- Ręczne prototypowanie — działa, ale wolne
- [[Cursor]] z design promptami — brak systematycznego podejścia do design systems
- [[Vibe Coding]] bez design skill — prowadzi do generic AI slop
- Gotowe component libraries (shadcn/ui, Material) — dobre, ale nie adaptują się do typu projektu
- [[gstack]] `/design-consultation` + `/design-shotgun` — bardziej interaktywne, mniej deklaratywne; UI UX Pro Max daje gotowy spec, gstack prowadzi przez wybory

## 📖 Resources
- [GitHub: nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
- [uupm.cc](https://uupm.cc/) — landing
- [[Claude Code]] — primary AI coding assistant
- [[Vibe Coding]] — kontekst: problem generic AI slop
- [[Cursor]] — alternatywne IDE z AI
- [[gstack]] — alternative design skill stack
- [[Awesome Claude Code]] — kuratorska lista, gdzie skill też się pojawia

---
Template: [[templates/tool]]
