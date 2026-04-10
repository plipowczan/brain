---
title: "Excalidraw"
date: 2026-03-31
enableToc: true
openToc: true
tags: ["tool", "ai", "diagrams", "claude-code"]
type: tool
agent-created: true
summary: "Diagram generation skill for Claude Code — integrates with Obsidian and VS Code for process mapping"
---

# Excalidraw

Narzędzie do tworzenia diagramów w stylu hand-drawn: procesów, architektur, flowchartów. Dzięki integracjom z [[Claude Code]] możesz generować je bezpośrednio z terminala.

## Links
### Description
Open source'owe narzędzie do diagramów. Kluczowa wartość w kontekście AI: Claude Code generuje pliki `.excalidraw`, a pluginy do [[Obsidian]] i VS Code pozwalają je przeglądać, edytować i osadzać w kontekście projektu.

### Download or use
- [excalidraw.com](https://plus.excalidraw.com/) — web app (darmowy)
- [Excalidraw Diagram Skill](https://github.com/coleam00/excalidraw-diagram-skill) — skill od Cole'a Medina
- [Shared Skills (200iqlabs)](https://github.com/200iqlabs/shared-skills) — skills do mapowania procesów

## 🗒️ Reasoning for

Komunikacja wizualna to jeden z najbardziej niedocenianych aspektów pracy z AI. Diagram wart jest tysiąca słów — dosłownie. Kiedy tłumaczysz klientowi architekturę systemu lub omawiasz flow feature'a — jeden diagram zastępuje godzinę wyjaśnień.

Sam Claude Code generuje diagramy, ale ich nie wyświetla. Potrzebujesz narzędzia, które pozwoli nie tylko wygenerować plik, ale też go obejrzeć, zmodyfikować i osadzić w kontekście.

### Dlaczego Excalidraw a nie inne
- **Mermaid** — tekstowa składnia nie pozwala oddać złożoności procesu, wygląda średnio
- **Miro** — nie daje się nadać outputowi zdefiniowanych styli, wyniki generyczne, dużo ręcznej pracy
- **draw.io** — brak natywnej integracji z Claude Code skills

## 🧩 Features

#todo/complete — poniższe na podstawie blog overview, wymaga pełnego ingestion z repo

### Dwa zastosowania, dwa skills

**1. Tłumaczenie koncepcji technicznych** (excalidraw-diagram-skill)
- "Narysuj architekturę tego systemu"
- "Pokaż flow danych w tym pipeline"
- Czytelny diagram zamiast ściany tekstu

**2. Mapowanie procesów dla klientów** (shared-skills)
- Automatyczne generowanie mapy procesu z opisu
- Klient dostaje wizualną dokumentację, nie listę kroków w markdown
- Wymaga czasem korekty, ale odchodzi ogrom manualnej roboty

### Integracje
- **Obsidian plugin** — przeglądanie i edycja diagramów w vault
- **VS Code extension** — diagramy bezpośrednio w IDE
- **Claude Code** — generowanie z terminala bez opuszczania workflow

## Alternatives considered
- **Mermaid** — prostsza składnia, ale ograniczone możliwości wizualne
- **draw.io** — potężne, ale brak integracji z agent workflow
- **Miro** — brak kontroli nad stylami w AI generation
- **Whimsical** — ładne diagramy, ale nie open source

## 📖 Resources
- [Excalidraw](https://plus.excalidraw.com/) — main app
- [Excalidraw Diagram Skill](https://github.com/coleam00/excalidraw-diagram-skill) — skill od Cole'a Medina
- [Shared Skills (200iqlabs)](https://github.com/200iqlabs/shared-skills) — process mapping skills
- [[Claude Code]] — primary AI coding assistant
- [[Obsidian]] — vault z plugin support

---
Template: [[templates/tool]]
