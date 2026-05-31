---
title: "Nowoczesne firmy AI-first"
date: 2026-05-30
enableToc: true
openToc: true
tags: ["answer", "ai", "agents", "company-of-agents", "self-improving", "business", "ai-first"]
type: answer-note
agent-created: true
summary: "Q&A — co vault mówi o nowoczesnych firmach AI-first: rekurencyjne pętle (Self-Improving Company), model outcome-first (Software 3.0), dyscyplina agentic engineering, implementacja company-of-agents (Paperclip), reality-check 70-20-10"
---

# Nowoczesne firmy AI-first

> Q: *nowoczesne firmy AI first* — synteza z notatek vault (2026-05-30).

Cztery filary układają się w spójny obraz. Wspólny mianownik: **context jako trwały aktyw, software jako odnawialny**.

## 🚀 Rdzeń: firma = rekurencyjna pętla, nie co-pilot

[[Self-Improving Company]] (Jared Friedman, YC). Stara firma = legion rzymski: hierarchia, ludzie jako szyna danych. AI-first ≠ co-pilot dający +20-30% produktywności. To firma przebudowana jako **rekurencyjne samodoskonalące pętle**, poprawiające się przez noc.

Pętla, 5 warstw: **sensor → polityka/decyzja → narzędzia → bramka jakości → uczenie** → z powrotem. "Holy-shit moment" YC: agent monitorujący zapytania w nocy wykrył błędy, napisał kod, otworzył PR, recenzja, merge — rano problem zniknął, bez człowieka.

Zasady operacyjne:
- **Burn tokens, not headcount.** Firmy YC: ~5× przychód/pracownika vs 18 mies. temu. Wąskie gardło przesuwa się z etatów na zużycie tokenów.
- **Dwie role tylko:** IC/builder + jeden DRI. Średni management znika.
- **Record everything.** "If it wasn't recorded, it didn't happen to your intelligence." Maile, Slack, DM-y, office hours → mózg firmy.
- **Software ephemeral, context valuable.** Dashboardy = one-shot. Przechowuj dane + instrukcje, regeneruj software gdy przyjdzie lepszy model.

## ☘️ Model biznesowy: sprzedawaj outcome, nie narzędzie

[[Software 3.0]] (Karpathy via Dream Labs). Wszystkie biznesy cyfrowe przebudowywane na AI-first. Trzy paradygmaty: 1.0 kod → 2.0 dane/wagi → 3.0 **prompting** (context window = dźwignia).

Co umiera: statyczne kursy, single-purpose appki (MenuGen "shouldn't exist"), manualne usługi. Co budować: **agenty dostarczające wynik** owinięte w 4 fosy:
1. **Własne dane** (model na twojej wiedzy/stylu)
2. **Prompt/context engineering**
3. **System design** wokół silnika LLM ("dostajesz silnik, projektujesz samochód")
4. **Zaufanie** audytorium

## 🧩 Dyscyplina wykonawcza: agentic engineering

[[Agentic Engineering]] (Karpathy @ Sequoia, źródło Software 3.0). Rozróżnienie:
- **Vibe coding** podnosi podłogę (każdy buduje).
- **Agentic engineering** trzyma sufit — utrzymanie poprzeczki jakości (brak nowych podatności, wciąż odpowiadasz za soft) PRZY większej prędkości.

Ograniczenie krytyczne: **verifiability**. LLM automatyzuje to, co potrafisz zweryfikować (nie tylko zakodować). Inteligencja "jagged" — szczyty tam gdzie weryfikowalne (kod, matma). Rada dla foundera: bierz problemy **weryfikowalne** — wykonalne teraz, można dorzucić własny RL/fine-tune jako fosę. Człowiek wciąż ma: smak, osąd, **rozumienie** ("można outsource'ować myślenie, nie rozumienie").

Infra agent-native: dokumentuj **dla agentów first**, rozkładaj na sensory/aktuatory, struktury danych czytelne dla LLM.

## 🛠️ Implementacja: company-of-agents

[[Paperclip]] — gotowy control plane "zero-human company". OpenClaw = pracownik, Paperclip = firma. Definiujesz cel → zatrudniasz agentów (dowolny model/runtime) → budżety/governance → dashboard. "Manage business goals, not pull requests." Org chart, heartbeaty, hard-stop budżetów, audit log, multi-company isolation. Sens dopiero >5 agentów.

Pokrewne: [[Hermes Agent]] (pojedynczy samodoskonalący agent), [[Agentic Systems]] (szkic architektury), [[Agentic Coding]] (paradygmat pod spodem).

## 📒 Reality-check wdrożenia: 70-20-10

[[AI 70-20-10 Rule]] (BCG). Wartość AI: **10%** algorytm, **20%** tech, **70%** przeprojektowanie ludzi i procesów. "AI strategy is a people strategy." Tylko 21% kadry zalicza 4+ z 10 testów strategii McKinsey. **Strategy without execution = hallucination.** AI-first to nie projekt IT — to zarządzanie kapitałem ludzkim.

## 🔗 Jak to się spina

```
Software 3.0 (model: sprzedaj outcome)
   ↓ źródło
Agentic Engineering (dyscyplina: prędkość + jakość, verifiability)
   ↓ na poziomie firmy
Self-Improving Company (org jako pętle, context = aktyw)
   ↓ implementacja
Paperclip (company-of-agents) + 70-20-10 (70% to ludzie/proces)
```

Ten sam pryncypał co [[Brain]] (ten vault) i [[Personal AI Infrastructure]] — context jako aktyw, agenty/skille jako warstwa odnawialna.

## ⚠️ Luki w vault

- Brak notatki o **ekonomii/metrykach** AI-first firm (rev/employee, unit economics) poza wzmianką w [[Self-Improving Company]].
- Brak case study realnej AI-first firmy end-to-end (najbliżej: [[El Padre Case Study]] — automatyzacja, nie pełna firma).
- Brak o **strukturze prawnej/HR** firmy z 2 rolami (IC+DRI) — tylko teza, zero how-to.

## 📖 Źródła

[[Self-Improving Company]] · [[Software 3.0]] · [[Agentic Engineering]] · [[Paperclip]] · [[AI 70-20-10 Rule]] · [[Agentic Coding]] · [[Hermes Agent]] · [[Agentic Systems]]

---
Template: [[templates/basic_notes]]
