---
title: "OpenSpec"
date: 2026-03-31
enableToc: true
openToc: true
tags: ["tool", "ai", "development", "specs", "claude-code"]
type: tool
agent-created: true
summary: "Spec-driven development framework — explore → specs → plan → implementation with version-controlled artifacts"
---

# OpenSpec

Framework do **spec-driven development**, który zamienia chaotyczne sesje z AI w strukturyzowany proces z persystentnymi artefaktami. Używam go codziennie — to fundament mojego workflow z [[Claude Code]].

## Links
### Description
OpenSpec (OPSX) tworzy strukturyzowane artefakty: specyfikację zmiany, plan implementacji, delta specs. Agent wie co buduje, dlaczego i jak — zanim napisze pierwszą linijkę kodu.

### Download or use
- [GitHub: Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec/)
- [openspec.dev](https://openspec.dev/)

## 🗒️ Reasoning for

### Problem: Context Window Rot
Każdy kto pracuje z Claude Code dłużej niż tydzień zna ten scenariusz — zaczynasz sesję, budujesz feature, kontekst rośnie, agent zaczyna "zapominać" wcześniejsze ustalenia. To **context window rot** — degradacja jakości odpowiedzi w miarę jak konwersacja się wydłuża.

### Rozwiązanie
Zamiast chaotycznych sesji krok po kroku — strukturyzowane artefakty:
- **Persistent artifacts** — specyfikacje żyją w repo pod version control
- **Nie tracisz kontekstu** między sesjami, bo specyfikacja jest w plikach, nie w historii czatu
- **Delta specs** — zmiany opisane inkrementalnie, łatwo śledzić co się zmieniło
- **Weryfikacja** — po implementacji sprawdzasz, czy kod zgadza się ze specyfikacją

**Im więcej czasu spędzisz na etapie przygotowania dobrej specyfikacji, tym mniej iteracji przy samej implementacji kodu.** To się zwraca wielokrotnie.

## 🧩 Workflow

#todo/complete — poniższe na podstawie blog overview, szczegółowy workflow w [[OPSX Workflow]]

```text
0. /opsx:explore     → brainstorming z agentem
1. /opsx:new         → tworzy change z artefaktami
2. /opsx:ff          → fast-forward przez wszystkie artefakty
3. /opsx:apply       → implementacja zadań z planu
4. /opsx:verify      → weryfikacja vs specyfikacja
5. /opsx:archive     → archiwizacja ukończonej zmiany
```

Faza **explore** to kluczowy krok, który większość osób pomija — agent odbija pomysły, dopytuje o szczegóły, proponuje podejścia. Tu zapada decyzja czy potrzebujesz pełnej specyfikacji, czy wystarczy proposal z listą zadań.

### Co wyróżnia OpenSpec
- **Artefakty w repo** — wszystko pod version control, wracasz do specyfikacji po tygodniu
- **Delta specs** — inkrementalne opisy zmian
- **Integracja z walidacją** — weryfikacja implementacji vs specyfikacja

## Alternatives considered
- **Reaktywne promptowanie** — działa przy małych zmianach, nie skaluje się
- Cursor/Windsurf bez struktury — brak persistent artifacts, context loss
- Liniowe phase-gate workflows — walczą z rzeczywistością iteracyjnej pracy

## 📖 Resources
- [GitHub: Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec/)
- [openspec.dev](https://openspec.dev/)
- [[OPSX Workflow]] — szczegółowy opis workflow, komend i architektury DAG
- [[Claude Code]] — primary AI coding assistant
- [[Agentic Coding]] — podejście do kodowania z AI agentami
- [[Context Engineering]] — zarządzanie kontekstem w pracy z LLM

---
Template: [[templates/tool]]
