---
title: "Process Mapping"
date: 2025-12-01
enableToc: true
openToc: true
tags: ["knowledge", "info", "business", "processes", "optimization"]
type: knowledge-note
agent-created: true
summary: "Process mapping methodology — 4 elements (Action, Actor, Tool, Mode), optimization via delete → simplify → automate"
---

# Process Mapping

## 🗒️ Description

W Automation House zmapowaliśmy ponad **400 procesów** i wniosek jest jeden: **każda firma działa nieoptymalnie**. Pytanie brzmi tylko — jak szybko znajdziesz te miejsca i je naprawisz.

Mapa procesu to nie tylko dokumentacja — to narzędzie nawigacyjne dla trzech grup:

1. **Biznes** — zrozumienie, jak *naprawdę* działa firma (wyobrażenia zarządu często mijają się z rzeczywistością)
2. **Użytkownicy** — jasna instrukcja działania, szybszy onboarding
3. **IT/Wdrożeniowcy** — precyzyjne projektowanie architektury, przekazywanie wiedzy, znajdowanie wąskich gardeł

Prezentacja z Infoshare Katowice 2025.

## 🧩 Process Mapping Elements

### Dlaczego większość map jest bezużyteczna

| Metoda | Problem |
|--------|---------|
| **SIPOC** (tabelki) | Świetne dla analityków, niezrozumiałe dla biznesu |
| **BPMN** (Business Process Model and Notation) | Standard korporacyjny, ale zbyt skomplikowany — nadmiar bramek i symboli |
| **Zwykły Flowchart** | Zbyt prosty — pokazuje "co" bez "kto" i "czym" |

### Złoty środek: Rozszerzony Flowchart

Wypracowana metoda w Automation House — mapa procesu musi zawierać **4 kluczowe elementy** dla każdego kroku:

1. **Akcja** — co się dzieje?
2. **Aktor** — kto to robi?
3. **Narzędzie** — czym to robi? (Excel, CRM, Slack, [[Make]], [[n8n]])
4. **Tryb** — manualny czy automatyczny?

Dzięki temu od razu widać:
- Gdzie człowiek wykonuje pracę robota (kopiuj-wklej)
- Gdzie brakuje integracji między systemami

## 🔍 Finding Optimization Points

Kiedy masz mapę stanu obecnego (AS-IS), szukaj miejsc gdzie:

- **Występuje najwięcej błędów**
- **Proces trwa najdłużej**
- **Dane są przepisywane ręcznie** — ryzyko błędu, strata czasu
- **Zmiana będzie miała największy wpływ** na zespół

## 📐 Methodology

### Porównanie metod

| Metoda | Zalety | Wady | Kiedy stosować |
|--------|--------|------|---------------|
| Flowchart (prosty) | Łatwy do zrozumienia | Brak kontekstu (kto/czym) | Proste procesy liniowe |
| SIPOC | Systematyczny, analityczny | Niezrozumiały dla biznesu | Analiza dla process owners |
| BPMN | Standard korporacyjny, precyzyjny | Zbyt skomplikowany dla non-technical | Enterprise, ISO, compliance |
| **Rozszerzony Flowchart** | **Czytelny + kontekst (4 elementy)** | **Wymaga dyscypliny mapowania** | **Większość przypadków** |

### Dobre praktyki

- Zawsze mapuj stan AS-IS (jak jest naprawdę), nie TO-BE (jak chcesz żeby było)
- Mapuj z ludźmi, którzy wykonują proces, nie z managerami
- Każdy krok musi mieć wszystkie 4 elementy
- Oznaczaj manualne vs automatyczne — to najszybszy sposób na znalezienie quick wins

## ⚡ Elon's Principle: delete → simplify → automate

> *"Prawdopodobnie najgorszą rzeczą jest optymalizacja czegoś, co w procesie w ogóle nie powinno się znaleźć."*

Kolejność działań przy optymalizacji:

1. **Usuń** — czy ten krok w ogóle jest potrzebny? Najgorsza rzecz = automatyzowanie czegoś, co nie powinno istnieć
2. **Uprość** — czy można skrócić, połączyć z innym krokiem?
3. **Automatyzuj** — dopiero na końcu, gdy krok jest niezbędny i uproszczony

Ta zasada powinna być złotą regułą przed każdym projektem optymalizacji.

## 📊 Evidence

### Badania w służbie zdrowia

Mapowanie procesów w służbie zdrowia potrafiło skrócić **czas oczekiwania pacjentów o 20-45%**. Skoro działa w tak skomplikowanym środowisku jak szpital — zadziała w każdej firmie.

### Case Study: [[El Padre Case Study]]

Agencja eventowa El Padre — tworzenie ofert zbyt czasochłonne i mało rentowne. Wiedza rozproszona w głowach pracowników.

**Wdrożone kroki:**
1. **"Ucho" procesu** (Fireflies.ai) — AI nagrywa spotkania i tworzy transkrypcje
2. **Centralny Mózg** ([[Airtable]]) — baza wiedzy z transkrypcjami, kosztorysami, danymi o projektach
3. **Automatyzacja** ([[Make]] + AION) — asystenci AI: Briefing, Event Ideas, Financial Planner, Offer Generator

**Wyniki:**
- 10-50% szybsze przygotowywanie ofert
- 10-15% wzrostu produktywności działu produkcji
- 30 osób wspieranych przez AI w codziennej pracy

Powiązane: [[Agentic Systems]]

## 📒 Podsumowanie

- **Bez mapy nie ma nawigacji** — nie da się optymalizować tego, czego się nie zmierzyło
- **4 elementy każdego kroku**: Akcja, Aktor, Narzędzie, Tryb
- **Rozszerzony Flowchart** = złoty środek między prostotą a precyzją
- **Elon's Principle**: usuń → uprość → automatyzuj (nigdy w odwrotnej kolejności)
- Technologia nie służy do komplikowania — służy do budowania **Operational Excellence**
- Zacznij od zmapowania jednego procesu — nie czekaj na wielki projekt transformacji

## 🧭 Mapa procesu jako wejście do PRD

Mapa AS-IS z 4 elementami (Akcja/Aktor/Narzędzie/Tryb) to **najlepsze możliwe wejście do PRD** dla klienta. Każdy krok manualny + każde miejsce bez integracji = kandydat na feature w spec. Pipeline:

1. AS-IS map (ten dokument) → identyfikacja pain points
2. **Elon's principle** (usuń → uprość → automatyzuj) → filtr features, które w ogóle powinny trafić do PRD
3. [[UX RULER]] → discovery (Mission/Audience/User/Need/Infrastructure/Product/Value)
4. [[OpenSpec]] / [[OPSX Workflow]] → formalizacja jako proposal + specs + design + tasks (DAG, wersjonowane w repo)

Pełna synteza: [[2026-05-16_PRD-z-analizy-i-oferty]].

## 🔗 Zasoby

- [BPMN Specification](https://www.bpmn.org/) — standard modelowania procesów biznesowych
- [Fireflies.ai](https://fireflies.ai/) — AI meeting transcription
- Prezentacja z Infoshare Katowice 2025
- [[OPSX Workflow]] — formalizacja mapy procesu jako PRD w repo
- [[UX RULER]] — discovery layer między mapą a spec
- [[Specification-Driven Development]] — metodyka spec-first
