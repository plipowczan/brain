---
title: "Claude Code Marp Workflow"
date: 2026-04-29
enableToc: true
openToc: true
tags: ["knowledge", "howto", "ai", "claude-code", "presentation", "markdown", "marp"]
type: knowledge-note
source: "_raw/inbox/Stop Staring at a Blank Deck How I Use Claude Code + Marp to Think Through Presentations.md"
agent-created: true
summary: "4-fazowy workflow tworzenia prezentacji w Markdown: Brainstorm (interview) → React (first draft) → Iterate (chat lub VS Code) → Export (HTML/PPTX)"
---
# Claude Code Marp Workflow

Workflow autorstwa Omera Rosenbauma (artykuł na freeCodeCamp, marzec 2026), opisujący jak tworzyć prezentacje przez Markdown przy pomocy [[Claude Code]] + [[Marp]]. Kluczowa myśl: trudna część to nie układ slajdów, tylko *story*. Łatwiej jest reagować na czyjś draft niż patrzeć w pustą stronę. Claude generuje pierwszy draft, ty go iterujesz przez konwersację albo bezpośrednią edycję pliku `.md`.

## 🗒️ Task

Stworzyć spójną prezentację (story → struktura → slajdy) w czasie liczonym w minutach, mając do dyspozycji [[Claude Code]] jako interviewera i first-draft generator, oraz [[Marp]] jako engine renderujący Markdown na HTML/PPTX.

## 🛠️ Prerequisites

- [[Marp CLI]] zainstalowane: `npm install -g @marp-team/marp-cli`
- [[Claude Code]] (lub [[Cursor]] / GitHub Copilot — skill jest agent-agnostic)
- (opcjonalnie) VS Code z Marp extension dla live preview
- Skill `Omerr/claude-skills` zainstalowany przez [[Vercel Skills]]: `npx skills add Omerr/claude-skills`

## 📝 Instructions

### 🧩 Faza 1 — Brainstorm (interview)

Odpalasz slash command, Claude przeprowadza ~5-pytaniowe interview:

```
> /create-marp-deck API rate limiting

Claude: What's this presentation about? What should the audience walk away knowing?
User:   How our rate limiting works, which algorithm we chose and why...
Claude: Who's the audience?
User:   Platform engineering team — they know our stack but haven't seen the rate limiting internals.
Claude: What are the key points or sections you want to cover?
User:   1. Why we need rate limiting (the incident last month)
        2. Token bucket vs sliding window — our decision
        3. How to configure it per-service
        4. Monitoring dashboard walkthrough
```

Cel: wymusić articulation story **zanim** powstanie pierwszy slajd. Interview phase to jedna z dwóch części skill file'a (~200 linii), dzięki czemu nie tłumaczysz Claude'owi tych samych konwencji za każdym razem.

### 🧩 Faza 2 — React (first draft)

Claude generuje cały plik Marp Markdown z:
- Title slide z `<!-- _class: lead title-slide -->`
- Section dividers z gradientowym tłem (`<!-- _class: lead part-problem -->`)
- Breadcrumb headers (`<!-- header: "The Problem > **Algorithms** > Implementation" -->`)
- Konsystentnym formatowaniem (CSS palette w skill file)

Title slide z surowego Marp Markdown:

```markdown
<!-- _class: lead title-slide -->

# API Rate Limiting
## A Technical Deep Dive

**Team**: Platform Engineering
**Date**: February 2026
```

Draft nie musi być idealny — ma być punktem startu, na który **reagujesz**. To dramatycznie szybsze niż blank canvas.

### 🧩 Faza 3 — Iterate (konwersacja albo VS Code)

Dwa równoległe sposoby edycji, można mieszać:

**(a) Przez Claude Code:**
```
> Slide 6 is too dense. Split the algorithm comparison into two slides,
  one for token bucket, one for sliding window.

Claude: I'll split slide 6 into two separate slides...
        - # Algorithm Comparison
        - | Feature | Token Bucket | Sliding Window |
        + # Token Bucket
        + Tokens refill at a steady rate...
        + ---
        + # Sliding Window
        + Track exact timestamp of every request...
```

**(b) Bezpośrednio w VS Code:** Otwórz `.md`, `Ctrl+Shift+V` — Marp extension daje split view (source ↔ rendered). Claude edytuje plik, VS Code wykrywa zmianę, preview odświeża się automatycznie. Side-by-side: Claude w jednym oknie, VS Code w drugim.

### 🧩 Faza 4 — Export

Skill odpala konwersję automatycznie po wygenerowaniu deck'a. ~2s na 15-slajdowy deck.

```bash
# Standard (każdy slide jako image — pixel-perfect, ale tekst nieedytowalny w PowerPoint)
marp --no-stdin deck.md -o deck.html
marp --no-stdin --pptx deck.md -o deck.pptx

# Editable (text boxes via LibreOffice — wymaga LibreOffice)
marp --no-stdin --pptx-editable deck.md -o deck.pptx
```

Trzy outputy:
- `.md` — source, version-controlled, diffowalne
- `.html` — open w browser, share na Slacku
- `.pptx` — open w PowerPoint / Google Slides

**Editable PPTX gotcha:** LibreOffice generuje text boxy zbyt wąskie, tekst zawija się i overlap'uje. Skill ma python-pptx post-processing skrypt który auto-widens. Wystarczy poprosić "editable PPTX" — skill robi resztę.

## 🧩 Conventions w skill file (Under the Hood)

Skill ma ~200 linii i koduje konkretne stylistic choices:
- **Section dividers** — gradientowe tło per sekcja, audience intuicyjnie wie kiedy zmieniasz topic (CSS `<!-- _class: lead part-problem -->`)
- **Breadcrumb navigation** — header pokazujący gdzie jesteś w decku, np. `The Problem > **Algorithms** > Implementation` z bold-em jako blue highlightem (`header strong { color: #2563eb; }`). Omer pisze że to jego ulubiona część — eliminuje "wait, where are we?" syndrome
- **Marp frontmatter baseline** — `marp: true`, `theme: default`, `paginate: true`, `size: 16:9`. Cztery linijki i masz widescreen + paginated

## 🧩 Use case: this very article

Omer napisał ten artykuł zaczynając od decka — odpalił `/create-marp-deck`, przeszedł interview, zrobił 15 slajdów, dopiero potem napisał artykuł. Argument: jeśli story nie flow'uje na 15 slajdach, nie flow'uje na 1500 słowach. Deck staje się outline'em.

To koresponduje z [[Goal-Driven Execution]] z [[Karpathy Skills]] — zamiast "napisz artykuł o X", definiujesz weryfikowalny goal "story flows across 15 slides", iterujesz aż flow'uje.

## ✅ Outcome

Po wykonaniu wszystkich 4 faz masz:
- Spójny deck w Markdown w czasie minut, nie godzin
- Trzy formaty outputu: `.md` / `.html` / `.pptx`
- Reusable workflow — następne decki idą jeszcze szybciej (skill już wie twoje konwencje)
- Source w gicie — diffowalny, mergowalny, AI-edytowalny

## 🔗 Further reading

- Original article: https://www.freecodecamp.org/news/how-to-use-claude-code-and-marp-to-think-through-presentations/
- Author's skill repo: https://github.com/Omerr/claude-skills
- Demo deck (this article jako slajdy): https://omerr.github.io/claude-skills/presentations/claude-code-marp/
- [[Marp]] — Markdown Presentation Ecosystem
- [[Marp CLI]] — `marp --no-stdin deck.md -o deck.html`
- [[Marpit]] — framework pod Marp
- [[Marp Core]] — engine z themes
- [[Vercel Skills]] — `npx skills add` jako installer
- [[Karpathy Skills]] — pokrewny pomysł na strukturyzowanie LLM workflow

---
Template: [[templates/knowledge_note_how_to]]
