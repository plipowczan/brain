---
title: "OPSX Workflow"
date: 2026-02-05
enableToc: true
openToc: true
tags: ["tool", "ai", "workflow", "development"]
type: tool
agent-created: true
summary: "Structured spec-driven AI development workflow — replaces reactive prompting with persistent artifacts and DAG-based state"
---

# OPSX Workflow

Standardowy workflow dla OpenSpec — strukturyzowane podejście do pracy z AI coding assistants. Zamienia reaktywne promptowanie w powtarzalny proces z artefaktami, zależnościami i iteracją.

## 🔗 Links

### Description
- [OpenSpec GitHub](https://github.com/Fission-AI/openspec) — oficjalne repo
- [OpenSpec Discord](https://discord.gg/YctCnvvshC) — community i feedback

### Download or use
```bash
npm install -g openspec
openspec init  # tworzy skills w .claude/skills/
```

## 🗒️ Reasoning for

### Problem

- **Context rot** — AI traci kontekst między sesjami, za każdym razem startuje od zera
- **Chaotyczne sesje** — przy większych zmianach (multi-file feature, refactoring) chaos narasta
- **Liniowe fazy nie działają** — prawdziwa praca nie jest sekwencyjna (plan→implement→done), bo w trakcie implementacji design się zmienia

### Legacy workflow OpenSpec — ograniczenia

- Instrukcje hardcoded w TypeScript — nie można zmienić
- All-or-nothing approach — jedna komenda tworzy wszystko
- Brak customizacji — ten sam workflow dla wszystkich
- Black box przy złych outputach — nie można poprawić promptów

### Rozwiązanie: OPSX

- **Actions, nie phases** — rób co potrzebujesz, kiedy potrzebujesz
- **Artefakty z zależnościami** — DAG (Directed Acyclic Graph) zamiast liniowych faz
- **Filesystem jako state** — istnienie pliku = artefakt DONE
- **Otwarte instrukcje** — YAML schemata + markdown templates, edytowalne

## 🧩 Commands

| Komenda | Co robi |
|---------|---------|
| `/opsx:explore` | Myślenie, badanie problemu, porównywanie opcji |
| `/opsx:new` | Start nowej zmiany |
| `/opsx:continue` | Tworzenie kolejnego artefaktu (na podstawie zależności DAG) |
| `/opsx:ff` | Fast-forward — wszystkie planning artifacts naraz |
| `/opsx:apply` | Implementacja tasks |
| `/opsx:sync` | Synchronizacja delta specs do main |
| `/opsx:archive` | Archiwizacja po zakończeniu |

### Typowy flow

```text
/opsx:explore     → przemyśl pomysł
/opsx:new         → zacznij zmianę
/opsx:continue    → stwórz proposal → specs → design → tasks (iteracyjnie)
/opsx:apply       → implementuj
/opsx:archive     → zakończ
```

**Pro tip:** `/opsx:ff` gdy masz jasny obraz. `/opsx:continue` przy eksploracji — iteracja po jednym artefakcie.

## 📐 Architecture

### DAG artefaktów

```text
              proposal
             (root node)
                  │
    ┌─────────────┴─────────────┐
    │                           │
    ▼                           ▼
 specs                       design
(requires:                  (requires:
 proposal)                   proposal)
    │                           │
    └─────────────┬─────────────┘
                  │
                  ▼
               tasks
           (requires:
           specs, design)
```

### State machine

```text
BLOCKED ──► READY ──► DONE
  │           │         │
Missing    All deps   File exists
deps       are DONE   on filesystem
```

Kluczowe koncepty:
- **Dependencies są enablers, nie gates** — pokazują co jest możliwe, nie co wymagane
- **Filesystem jako state** — nie potrzeba bazy danych, plik istnieje = DONE
- **Topological ordering** — system wie co tworzyć dalej

### Kiedy update vs nowa zmiana

| Test | Update | Nowa zmiana |
|------|--------|-------------|
| Tożsamość | "To samo, dopracowane" | "Inna praca" |
| Overlap scope | >50% pokrycia | <50% pokrycia |
| Zamknięcie | Nie można bez zmian | Można zamknąć, nowa stoi samodzielnie |

## ⚙️ Customization

### YAML Schemata

Definiowanie własnych workflows:

```yaml
name: research-first
artifacts:
  - id: research
    generates: research.md
    requires: []
  - id: proposal
    generates: proposal.md
    requires: [research]
  - id: tasks
    generates: tasks.md
    requires: [proposal]
```

### Context Injection

```yaml
# openspec/config.yaml
schema: spec-driven
context: |
  Tech stack: TypeScript, React, Node.js
  API conventions: RESTful, JSON responses
  Testing: Vitest for unit tests, Playwright for e2e
rules:
  proposal:
    - Include rollback plan
    - Identify affected teams
  specs:
    - Use Given/When/Then format
```

AI zna konwencje projektu bez powtarzania w każdym promcie.

## Alternatives considered

- **Reaktywne promptowanie** — działa przy małych zmianach, nie skaluje się
- **Liniowe phase-gate workflows** — walczą z rzeczywistością iteracyjnej pracy
- **Cursor/Windsurf bez struktury** — brak persistent artifacts, context loss

## 🧭 Use case: PRD z analizy + oferty klienckiej

OPSX świetnie sprawdza się jako **silnik generowania PRD** z dwóch wejść: analizy biznesowej (np. mapa procesu AS-IS) i oferty (zakres + stack + harmonogram). Pipeline:

- Analiza ([[Process Mapping]] — 4 elementy: Akcja/Aktor/Narzędzie/Tryb) → `proposal.md` (problem statement)
- Discovery ([[UX RULER]] 7 etapów) → `PRODUCT.md`, decision-log, north-star-metric
- Oferta → `openspec/config.yaml` context (stack, konwencje, harmonogram)
- `/opsx:ff` lub `/opsx:continue` → `specs/*.md` (Given/When/Then per feature) + `design.md` + `tasks.md` w DAG

Pełna synteza: [[2026-05-16_PRD-z-analizy-i-oferty]]. Wzorzec end-to-end: [[El Padre Case Study]].

## 📖 Resources

- [OpenSpec GitHub](https://github.com/Fission-AI/openspec) — repo z kodem i dokumentacją
- [OpenSpec Discord](https://discord.gg/YctCnvvshC) — community
- [[Claude Code]] — primary AI coding assistant
- [[Agentic Coding]] — podejście do kodowania z AI agentami
- [[Context Engineering]] — zarządzanie kontekstem w pracy z LLM
- [[Process Mapping]] — analiza AS-IS jako wejście do proposal
- [[UX RULER]] — discovery produktowy generujący artefakty do repo
- [[El Padre Case Study]] — case oferty 6-tygodniowej rozpisanej jako spec + tasks

---
Template: [[templates/tool]]
