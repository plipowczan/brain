---
title: "Skills 2.0 Testing"
date: 2026-03-08
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "skills", "testing", "agents"]
type: knowledge-note
agent-created: true
summary: "Evolution from manual skills to tested, benchmarked, auto-triggered skill system with 4-agent eval pipeline"
---

# 🗒️ Description

Problem: rozproszone Claude Projects, Obsidian notatki, ad-hoc czaty — zero orkiestracji, brak wersjonowania, brak testów, brak separacji kontekstów. To nie jest problem narzędzia, to problem **architektury**.

Skills 2.0 + [[Agent Skills]] standard + Git = system wieloagentowy, w którym każdy agent zna swoją rolę, ma swoje narzędzia i nie wchodzi drugiemu w paradę.

# 📈 Skills 1.0 → 2.0 Evolution

Ewolucja od promptów do modularnych, testowalnych agentów w 4 krokach:
1. **Prompt** — tekst ad-hoc w czat. Zero trwałości, zero struktury
2. **CLAUDE.md rules** — instrukcje w repo. Trwałe, ale monolityczne
3. **Skills 1.0** — modularność, on-demand loading. Nieudokumentowane, "magic bootstrappy parts"
4. **Skills 2.0** (marzec 2026) — pełna standaryzacja z evals, benchmarks, trigger tuning, dystrybucja

### 4 wymiary zmiany

| Wymiar | Skills 1.0 | Skills 2.0 |
|---|---|---|
| **Testing** | Ręczne próby, zgadywanie | Automatyczne evals, benchmarks, blind A/B |
| **Validation** | Brak — kontekst niezweryfikowany | Deterministyczny, testowany kontekst |
| **Triggering** | Ręczna modyfikacja opisów | Zautomatyzowany trigger tuning |
| **Taxonomy** | Płaska, bez podziału | Capability uplift vs encoded preference |

Problemy 1.0:
- Zero testów — zgadywanie czy skill działa
- Niezwalidowany kontekst + halucynacje = błędy systemowe
- Context bleed — wyciek kontekstu między zadaniami

# 🤖 4-Agent Eval Pipeline

Skills 2.0 testuje skille za pomocą 4 izolowanych sub-agentów:

1. **Executor** — uruchamia skill w sterylnym środowisku, bez historii poprzednich rozmów
2. **Grader** — ocenia output na podstawie zdefiniowanych asercji, zwraca pass rate
3. **Comparator** — ślepe testy A/B między wersjami (nie wie, który wynik jest nowy, a który stary)
4. **Analyzer** — analizuje setki wyników, szuka ukrytych wzorców i anomalii w zużyciu tokenów

To inżynieria jakości na poziomie produkcyjnego oprogramowania, nie "sprawdź czy działa".

# 📊 Skill Types

Formalna **taksonomia** z radykalnie różnym cyklem życia:

### Capability Uplift
- Uczy AI nowej umiejętności (frontend design, code review, analiza danych)
- **Podlega planowanej deprecjacji** — gdy bazowy model staje się lepszy, skill traci rację bytu
- Evals automatycznie to wykrywają: agent bez skilla osiąga te same wyniki → sygnał do deprecjacji
- Przykład: skok z Sonnet 4.5 na Opus 4.6 = 190 punktów Elo różnicy (GDPval-AA)

### Encoded Preference
- Koduje Twój specyficzny workflow — format raportów, proces analizy, styl contentu
- **Trwałe, bo specyficzne dla Ciebie** — nowy model nie zmieni tego, że chcesz raporty w konkretnym formacie
- Deprecjacja tylko gdy Ty zmienisz swój proces

**Pro tip:** Zacznij od encoded preference. Twój workflow, Twoje formaty, Twoje procesy — to się nie zdezaktualizuje.

# 🛠️ Skill-Creator Plugin

Oficjalny plugin Anthropic — od luźnego opisu intencji do przetestowanego, zoptymalizowanego agenta:

1. **Intent** — opis co agent ma robić
2. **Interview** — skill-creator zadaje pytania o specyfikę workflow
3. **Draft** — generuje pierwszą wersję SKILL.md
4. **Test** — uruchomienie z realnymi danymi
5. **Evaluate** — evals mierzą jakość outputu
6. **Iterate** — poprawki na podstawie wyników
7. **Package** — gotowy skill do dystrybucji

Trzy wyróżniki:
- **Evals** — automatyczna ocena jakości. Nie zgadujesz — wiesz
- **Benchmarks** — pass rate, czas wykonania, zużycie tokenów. Porównywanie wersji
- **Trigger tuning** — optymalizacja description (za szerokie = false positives, za wąskie = brak aktywacji)

Od opisu intencji do działającego agenta — **20 minut**.

[[Agent Skills]] standard (agentskills.io) zapewnia przenośność i brak vendor lock-in. **Progressive disclosure**: description (1 linia, zawsze widoczna) → SKILL.md (pełne instrukcje, on-demand) → reference files (zasoby, per-operacja).

# 📊 Deployment — 8 agentów, 2 firmy, 3 repozytoria

Architektura dla dwóch firm (200IQ Labs / Qamera AI + PLSoft / JDG):

| Repo | Zakres | Dostęp |
|---|---|---|
| `shared-skills` | Wspólne templates, utilities, standardy | Public (Apache 2.0) |
| `agentic-ai-system` | Skills 200IQ Labs — dane spółki, procesy, strategie | Private |
| `agentic-ai-private` | Skills PLSoft — coaching, LinkedIn, consulting | Private |

`shared-skills` podpięte jako **Git submodule** w obu prywatnych repozytoriach.

8 agentów (4 aktywne):
1. ✅ **CFO** — raporty finansowe, cash flow, budżetowanie
2. 🔲 Tax Advisor — optymalizacja podatkowa
3. 🔲 Legal — analiza umów, compliance
4. 🔲 Marketing — strategie contentowe, kampanie
5. ✅ Business Consultant — doradztwo strategiczne
6. 🔲 Product Manager — roadmap qamera.ai
7. ✅ Coach The Five — coaching metodologia The Five
8. ✅ LinkedIn Content — generowanie postów

Separacja kontekstów przez fizyczną izolację w Git — agent CFO dla 200IQ Labs nie widzi treści PLSoft. Git daje wersjonowanie, code review, historię zmian — czego żaden Claude Project nie da.

# 📒 Podsumowanie

- Skills 2.0 to przeskok od promptów do modularnych, testowalnych agentów — zmiana paradygmatu
- 4-agent eval pipeline zapewnia jakość na poziomie produkcyjnego software
- Encoded preference > capability uplift dla specyficznych workflow
- Git + skills = wersjonowanie i code review dla AI
- Zacznij od jednego agenta, nie od pełnego systemu
- Powiązane: [[Agentic Systems]], [[Claude Code]], [[Context Engineering]]

# 🔗 Zasoby

- [Agent Skills Standard](https://agentskills.io) — otwarty standard dla AI agentów
- [Skill Creator Plugin](https://github.com/anthropics/skill-creator) — oficjalne narzędzie Anthropic
- [shared-skills repo](https://github.com/200iqlabs/shared-skills) — open source multi-agent starter kit
- [Claude Code Skills docs](https://docs.anthropic.com/en/docs/claude-code/skills) — dokumentacja Skills 2.0
