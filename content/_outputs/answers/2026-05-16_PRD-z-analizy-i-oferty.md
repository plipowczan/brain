---
title: "PRD z analizy i oferty — pipeline z vault"
date: 2026-05-16
enableToc: true
openToc: true
tags: ["answer", "knowledge", "prd", "specs", "methodology", "business"]
type: answer-note
agent-created: true
summary: "Jak wygenerować PRD na podstawie analizy klienta + oferty — pipeline: Process Mapping → UX RULER → OpenSpec/OPSX, PRD jako wersjonowane artefakty w repo"
---

# PRD z analizy i oferty — pipeline z vault

**Pytanie:** Jak najlepiej wygenerować PRD na podstawie analizy i oferty dla klienta?

## 🧩 Rekomendowany pipeline

**Wejście:** analiza (process map AS-IS, transkrypcje spotkań, pain points) + oferta (zakres, stack, harmonogram, ROI).
**Wyjście:** PRD jako wersjonowany zestaw artefaktów w repo, nie jeden monolityczny Word/Notion.

### Krok 1 — Twarda fundacja z analizy: process map jako "ground truth"

Z [[Process Mapping]]: każdy krok procesu klienta musi mieć **4 elementy** — Akcja, Aktor, Narzędzie, Tryb (manual/auto). To wejście do PRD, bo identyfikuje:

- gdzie człowiek robi pracę robota (kandydaci do automatyzacji)
- gdzie brakuje integracji
- gdzie są błędy i wąskie gardła (priorytetyzacja features)
- **Elon's principle**: usuń → uprość → automatyzuj — zanim wpiszesz feature do PRD, sprawdź czy ten krok w ogóle ma istnieć.

### Krok 2 — Discovery produktowy: UX RULER jako szkielet

[[UX RULER]] to gotowy 7-etapowy proces (Mission → Audience → User → Need → Infrastructure → Product → Value) i generuje artefakty bezpośrednio do repo: `PRODUCT.md`, `ROADMAP.md`, decision-log, north-star-metric, tracking-plan. To w praktyce jest PRD rozbite na pliki — jawna alternatywa dla "tradycyjnych PRD templates (Notion, Confluence) — bez agenta, bez sprawdzania spójności".

### Krok 3 — Formalizacja jako spec: SDD + OpenSpec

[[Specification-Driven Development]] + [[OpenSpec]] + [[OPSX Workflow]]. PRD przechodzi przez:

1. `/opsx:explore` — odbicie pomysłu od agenta (analiza + oferta jako kontekst)
2. `/opsx:new` — start change z artefaktami
3. **proposal** (root) → **specs** + **design** (równolegle) → **tasks** (DAG, nie liniowo)
4. `/opsx:ff` jeśli obraz jasny po ofercie; `/opsx:continue` przy luźniejszej analizie

Z [[OpenSpec]]: *"Im więcej czasu spędzisz na etapie przygotowania dobrej specyfikacji, tym mniej iteracji przy implementacji."* — i Given/When/Then jako format kryteriów akceptacji (rules.specs w OPSX configu).

### Krok 4 — Context injection z oferty

W `openspec/config.yaml` (z [[OPSX Workflow]]) wrzucasz z oferty: stack technologiczny, konwencje API, narzędzia testowe, harmonogram. Wtedy każdy spec generowany przez agenta zna kontekst projektu bez powtarzania w promptach.

## 🎯 Praktyczny mapping — wejście → artefakt PRD

| Wejście (z analizy/oferty) | Artefakt PRD (w repo) | Skąd to bierzesz |
|---|---|---|
| Pain points + mapa AS-IS | `proposal.md` — problem statement, why now | [[Process Mapping]] + [[OpenSpec]] |
| Stakeholderzy z oferty | `PRODUCT.md` mission + audience | [[UX RULER]] etapy 1-3 |
| Zakres oferty | `specs/*.md` — capability per feature, Given/When/Then | [[OPSX Workflow]] rules.specs |
| Stack z oferty | `openspec/config.yaml` context | [[OPSX Workflow]] context injection |
| Harmonogram z oferty | `tasks.md` rozbity na DAG | OPSX `proposal → specs/design → tasks` |
| ROI / KPI z oferty | `north-star-metric.md` + tracking-plan | [[UX RULER]] maturity layer |
| Decyzje z analizy | `decision-log.md` (ADR) | [[UX RULER]] |

## ☘️ Wzorzec z realnego case'a

[[El Padre Case Study]] pokazuje, jak to wygląda w praktyce: analiza dała 16h/ofertę i rozproszoną wiedzę → oferta zaproponowała AION + 6-tygodniowy harmonogram → wdrożenie miało jasne fazy (Integracja → Narzędzia AI → Workflow).

Ten case w PRD-formie byłby:
- **proposal** — 16h/ofertę pain
- **specs** — Briefing / Event Ideas / Financial Planner / Offer Generator jako oddzielne capabilities, każdy z Given/When/Then
- **design** — OneDrive integration, AION jako platforma
- **tasks** — rozpisane per 6 tygodni (Integracja → Narzędzia → Workflow)

## ⚠️ Luki w vault

- Brak osobnej noty **"PRD template"** ani **"Brief → PRD pipeline"** — kandydat na compile.
- Brak metodyki **discovery interview → spec** (jak strukturyzować wywiady z klientem dla PRD).
- [[Autonomous Sales Agent Playbook]] może mieć patterns dla fazy oferta → delivery — warto zerknąć osobno.

## 📒 TL;DR

**Nie pisz PRD jako jednego dokumentu.** Użyj kombinacji:

1. [[Process Mapping]] → input z analizy (AS-IS, 4 elementy, Elon's principle)
2. [[UX RULER]] → discovery i struktura product memory (7 etapów, artefakty w repo)
3. [[OpenSpec]] / [[OPSX Workflow]] → formalizacja jako wersjonowane artefakty w DAG (proposal + specs + design + tasks)
4. Oferta → `openspec/config.yaml` jako context injection (stack, konwencje, harmonogram)

Wzorzec [[El Padre Case Study]] pokazuje to end-to-end.

## 🔗 Źródła z vault

- [[Process Mapping]]
- [[UX RULER]]
- [[Specification-Driven Development]]
- [[OpenSpec]]
- [[OPSX Workflow]]
- [[El Padre Case Study]]
- [[Spec-driven SEO and GEO]] — pokrewny pattern repo-as-memory
