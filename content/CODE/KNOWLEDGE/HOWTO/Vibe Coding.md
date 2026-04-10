---
title: "Vibe Coding"
date: 2025-12-24
enableToc: true
openToc: true
tags: ["knowledge", "howto", "ai", "ui", "design", "vibe-coding"]
type: knowledge-note
agent-created: true
summary: "Creating UI with AI by describing vibe/impression — 3 pillars, design tokens, prompt templates"
---

# Vibe Coding

## 🗒️ Task

Tworzenie profesjonalnych interfejsów bez wykształcenia UX/UI — przez opisywanie wrażenia i vibe'u zamiast pixel-perfect mockupów. AI tłumaczy opisy na działający kod.

Demokratyzacja tworzenia UI: AI odwzorowuje szablony, design ze zdjęcia lub opisy tekstowe. Nawet bez umiejętności projektowych — profesjonalny efekt.

## 🛠️ Prerequisites

- **Vite + React** — baza projektu
- **Tailwind CSS** — utility-first styling
- **shadcn/ui** — komponenty kopiowane do projektu (świetnie znane przez AI)
- [Vibe Coding Starter Kit](https://github.com/PageAI-Pro/vibe-coding-starter) — gotowy boilerplate

## 📝 Three Pillars

### 1. Dobra baza (Starter Kit)

Nie zaczynaj od zera:
- Skonfigurowane narzędzia (Vite, React, Tailwind)
- Bazowy system designu (kolory, typografia, spacing)
- Podstawowe komponenty

### 2. Dobre i sprawdzone prompty

Sedno vibe codingu — umiejętność rozmowy z AI dla sensownych wyników. Konkretne instrukcje z kontekstem designu.

### 3. Dobry kontekst dla AI

AI musi rozumieć:
- Design system projektu (kolory, czcionki, spacing)
- Używane biblioteki (Tailwind, shadcn/ui)
- Styl wizualny (minimalistyczny, bold, glassmorphic)

**Bez kontekstu → generyczny "AI-owaty" design. Z kontekstem → coś unikalnego.**

## 🎨 Design Brief Process

Przed pisaniem kodu — zdefiniuj brief. Prompt do AI:

```text
I need help creating a design brief for [type of project].

Please help me define:
1. Design Style & Aesthetic — visual style, mood, references
2. Target Audience — who, preferences, devices
3. Key Features & Priorities — core features, primary action, focus

Based on my answers, create a comprehensive design brief.
```

Efekt: jasny brief do przekazania w kolejnych promptach.

## 📊 Style Reference Table

| Aspekt | Opcja | Uzasadnienie |
|--------|-------|--------------|
| **Overall Aesthetic** | Minimalist Brutalism | Podkreśla treść, nowoczesny vibe |
| **Color Palette** | Monochromatic + neon accent | Czytelny, wyrazisty, tech-forward |
| **Typography** | Inter (sans-serif) | Czytelny, profesjonalny |
| **Spacing** | Generous whitespace | Ułatwia fokus, premium feel |
| **Visual Weight** | Bold typography, subtle UI | Treść > dekoracje |

**Pro tip:** Zapisz jako `design-reference.md` i załączaj w kontekście AI.

## 📐 Layout Structures

| Typ | Kiedy używać | Charakterystyka |
|-----|-------------|-----------------|
| **Hero Full-Screen** | Landing pages | Maksymalny impact, CTA above the fold |
| **Sidebar Layout** | Dashboardy, aplikacje | Nawigacja zawsze widoczna |
| **Card Grid** | Portfolio, galerie | Skanowalne, responsywne |
| **Split Screen** | Porównania, dual content | 50/50 attention split |

## 🎨 Color Themes

| Theme | Primary | Background | Text | Accent |
|-------|---------|------------|------|--------|
| **Dark Mode** | `#0f172a` | `#020617` | `#f1f5f9` | `#22d3ee` |
| **Light Mode** | `#ffffff` | `#f8fafc` | `#0f172a` | `#0ea5e9` |
| **Neon Dark** | `#000000` | `#0a0a0a` | `#ffffff` | `#00ff9d` |

## 📝 Prompt Template

```text
I need you to build [component/page] using React and Tailwind CSS.

DESIGN CONTEXT:
[design brief + style reference]

TECHNICAL REQUIREMENTS:
- React functional components with hooks
- Tailwind CSS for all styling (no custom CSS)
- Fully responsive (mobile-first)
- Accessibility (WCAG 2.1 AA)
- Semantic HTML

SPECIFIC REQUIREMENTS:
- [co ma robić]
- [jakie sekcje/elementy]
- [specjalne interakcje]

VISUAL DETAILS:
- Follow [specific style] from design reference
- Use [specific color theme]
- Ensure [spacing/typography rules]
```

## ⚙️ Design Tokens

Pojedyncze źródło prawdy o designie w JSON:

```json
{
  "colors": {
    "primary": { "50": "#f0fdfa", "500": "#14b8a6", "900": "#134e4a" },
    "neutral": { "50": "#f8fafc", "900": "#0f172a" },
    "accent": { "cyan": "#22d3ee", "neon": "#00ff9d" }
  },
  "typography": {
    "fontFamily": {
      "sans": ["Inter", "system-ui", "sans-serif"],
      "mono": ["Fira Code", "monospace"]
    },
    "fontSize": {
      "xs": "0.75rem", "base": "1rem", "xl": "1.25rem",
      "3xl": "1.875rem", "5xl": "3rem"
    }
  },
  "spacing": {
    "xs": "0.5rem", "sm": "1rem", "md": "1.5rem",
    "lg": "2rem", "xl": "3rem", "2xl": "4rem"
  },
  "borderRadius": {
    "sm": "0.25rem", "md": "0.5rem", "lg": "1rem", "full": "9999px"
  }
}
```

Użycie:
1. Stwórz `design-tokens.json` w projekcie
2. Zaimportuj w `tailwind.config.js`
3. W promptach: "Use colors and spacing from design-tokens.json"

## 🛠️ Tools

- **[[Cursor]]** — IDE z wbudowanym AI, widzi cały projekt. Composer tworzy/modyfikuje wiele plików. Chat z kontekstem projektu. Cmd+K do inline edycji
- **shadcn/ui** — komponenty kopiowane do projektu, modyfikowalne. AI świetnie je zna
- **v0.dev** (opcjonalnie) — narzędzie Vercel do generowania UI z promptów. Dobre na szybkie prototypy
- **[[Claude Code]]** — AI coding assistant

## ⚠️ Pitfalls

### Generyczny "AI design"
Bez kontekstu AI daje nudny, generyczny UI. Zawsze podaj:
- Konkretny styl (minimalist, brutalist, glassmorphic)
- Inspiracje ("like Stripe's homepage")
- Kolory i typografia

### Za duże komponenty
Nie proś o "całą landing page". Podziel na: Hero → Features → Pricing → Footer. Mniejsze kawałki = lepsza kontrola.

### Brak design systemu
Każdy komponent z innymi odcieniami i zaokrągleniami = UI Frankenstein. Design tokens rozwiązują ten problem.

## Iteracyjny proces

1. Wygeneruj pierwszą wersję
2. Zobacz w przeglądarce
3. Popraw prompt ("Make the button larger, add hover effect")
4. Wygeneruj ponownie
5. Powtarzaj

**Screenshoty jako input:** AI (szczególnie Claude z vision) odwzorowuje design ze zdjęcia. Dribbble/Behance → screenshot → "Recreate this design using React and Tailwind CSS."

## 📒 Podsumowanie

- **Vibe coding działa** — profesjonalne UI bez umiejętności designu
- **3 filary** — dobra baza + dobre prompty + dobry kontekst
- **AI to narzędzie, nie magia** — potrzebujesz jasnego briefu i iteracji
- **Design system to fundament** — stwórz raz (design tokens), używaj wszędzie
- **Inspiruj się, nie kopiuj** — AI pomaga stworzyć coś unikalnego

## 🔗 Zasoby

- [Vibe Coding Starter Kit](https://github.com/PageAI-Pro/vibe-coding-starter) — boilerplate React + Tailwind + shadcn/ui
- [Tailwind CSS](https://tailwindcss.com) — oficjalna dokumentacja
- [shadcn/ui](https://ui.shadcn.com) — biblioteka komponentów
- [Realtime Colors](https://realtimecolors.com) — generator palet
- [Font Pair](https://fontpair.co) — inspiracje typografii
- [[Cursor]] — AI IDE
- [[Claude Code]] — AI coding assistant

---
Template: [[templates/knowledge_note_how_to]]
