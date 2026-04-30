---
title: "DELEGATE-52"
date: 2026-04-29
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "llm", "benchmark", "delegated-work", "vibe-coding", "reliability", "evaluation"]
type: knowledge-note
source: "_raw/inbox/2604.15597v1.pdf"
agent-created: true
summary: "Microsoft Research benchmark (arXiv 2604.15597) — frontier LLMs corrupt 25% dokumentu po 20 delegowanych edytach na 52 domenach; Python jedyna domena gdzie modele są ready"
---
# DELEGATE-52

Benchmark Microsoft Research opublikowany 17 kwietnia 2026 (Philippe Laban, Tobias Schnabel, Jennifer Neville). Mierzy gotowość LLM-ów do **delegated work** — paradygmatu, w którym użytkownik zleca model agentowi długie sekwencje edycji dokumentów bez review każdej zmiany (vibe coding tego rodzaju, ale dla 52 zawodów).

Główny wynik: nawet frontier modele (Gemini 3.1 Pro, Claude 4.6 Opus, GPT 5.4) korumpują średnio **25% treści** dokumentu po 20 interakcjach. Średnia degradacja wszystkich 19 modeli to ~50%. Najlepszy model jest "ready" (RS@20≥98%) tylko w **11 z 52 domen**.

## 🗒️ Description

### 🧩 Problem badawczy

Delegated work to interakcja, w której knowledge worker nadzoruje LLM-a wykonującego task, ale **nie ma czasu/eksperckości na review** każdej zmiany. To wymaga zaufania że model nie wprowadzi cichych błędów (deletions, hallucinations, side-effect edits — pokrywa się z [[Karpathy Skills]] pitfall #3).

DELEGATE-52 pyta wprost: dla jak wielu zawodów dzisiejsze LLM-y są naprawdę gotowe na delegację bez nadzoru?

### 🧩 Metodologia: round-trip relay

Innowacja badawcza pozwalająca na ewaluację bez reference solutions — każdy task jest **odwracalny**: forward instruction `σ(s)` i jej inverse `σ⁻¹`. Zastosowanie obu w kolejności powinno rekonstruować oryginalny dokument. Mierzysz `sim(s, σ⁻¹(σ(s)))` — perfect model = 1.0.

Round-trips composowane sekwencyjnie tworzą **relay**:

```
ŝ_k = (σ₁ ∘ σ₁⁻¹ ∘ ... ∘ σ_n ∘ σ_n⁻¹)(s)
RS@k(s) = sim(s, ŝ_{k/2})
```

20 interakcji = 10 round-trips. Każdy edit to niezależna single-turn sesja (brak conversation memory między krokami — model dostaje świeży kontekst za każdym razem).

Backtranslation pochodzi z machine translation evaluation (Sennrich 2015), tu repurposed dla long-horizon delegated interaction.

### 🧩 Konstrukcja benchmarku

- **52 profesjonalnych domen** w 5 kategoriach:
  - **Code & Configuration** (11): Python, Docker, Makefile, JSON, DBSchema, DNS, Graphviz, Filesystem, Infra, Malware, Translation
  - **Science & Engineering** (11): Aviation, Circuit, Crystal, MathLean, Molecule, Protein, Quantum, Robotics, Satellite, StarCatalog, Weather
  - **Creative & Media** (11): AudioSyn, Fiction, FontEng, LaTeX, MusicSheet, OBJ3D, Screenplay, Slides, SRT, Subtitles, Vector, Weaving
  - **Structured Records** (11): Accounting, Calendar, EDIFACT, EDI, Emails, Genealogy, Geodata, Geotrack, HamRadio, LibCatalog, Spreadsheet, Treebank
  - **Everyday** (8): Chess, EarnCall, FoodMenu, JobBoard, Landmarks, Playlist, Recipe, Transit
- **310 work environments** total — każde to seed document (~3-5k tokens) + **distractor documents** (~10k tokens) + 5-10 par invertible edit tasks
- Każda domena ma **domain-specific parser** (text → strukturalna reprezentacja) i weighted scoring function. Generic LLM-as-a-judge zawodzi — uchwytuje max 25% wariancji metryki strukturalnej

### 🧩 Główne wyniki (RS@20, % po 20 interakcjach)

| Model | RS@20 | Status |
|-------|------:|--------|
| Gemini 3.1 Pro | 80.9 | Top (ready w 11/52 domen) |
| Claude 4.6 Opus | 73.1 | Frontier (ready w 5/52) |
| GPT 5.4 | 71.5 | Frontier (ready w 4/52) |
| GPT 5.2 | 66.1 | |
| Claude 4.6 Sonnet | 66.0 | |
| Kimi K2.5 | 64.1 | |
| GPT 5.1 | 60.5 | |
| Grok 4 | 59.3 | |
| GPT 5 | 48.3 | |
| Gemini 3 Flash | 35.8 | |
| GPT 4o | 14.7 | Catastrophic |
| GPT 5 Nano | 10.0 | Catastrophic |

**Catastrophic corruption (RS≤80%) w 80%+ kombinacji model×domena.**

### 🧩 Python jako outlier

Python to **jedyna domena**, w której większość testowanych modeli (17/19) osiąga lossless manipulation. Wynik korespondujący z (Pimenova et al., 2025) o delegated coding workflows. To wyjaśnia, dlaczego vibe coding "działa" w praktyce — testujemy go głównie na Pythonie. Reszta zawodów leci na łeb.

Implikacja praktyczna: nie ekstrapoluj swojego pozytywnego doświadczenia z [[Vibe Coding]] / [[Claude Code]] / [[Cursor]] na inne domeny. Twój sukces w Python coding ≠ gotowość modelu do delegacji w accountingu, music notation, czy 3D objektach.

### 🧩 Kluczowe efekty (ablations)

#### Tool use NIE pomaga
| Model | Direct (no tools) RS@20 | Agentic (tools) RS@20 | Cost overhead |
|-------|------------------------:|----------------------:|--------------:|
| GPT 5.4 | 71.5 | **68.3** | 2.1× input, 1.0× $ |
| GPT 5.2 | 66.1 | **63.4** | 3.2× input, 1.4× $ |
| GPT 5.1 | 60.5 | **52.1** | 2.0× input, 1.1× $ |
| GPT 4.1 | 49.5 | **40.4** | 4.6× input, 2.2× $ |

Modele wolą `write_file` od `execute_code` (45% vs file write dla GPT 5.4, gorzej dla słabszych). Tool use dodaje koszt i pogarsza jakość — silnie kontrintuicyjne.

#### Document size effect (GPT 5.4)
| Size | RS@20 |
|-----:|------:|
| 1k tokens | 91.4 |
| 4k tokens | 79.0 |
| 10k tokens | 59.9 |

Większe dokumenty = większa degradacja, gap rośnie z liczbą interakcji.

#### Length of interaction — brak plateau
GPT 5.4 po 100 interakcjach: 58.7 (vs 71.5 po 20). **Monotoniczny spadek, bez plateauingu** — degradacja akumuluje się dalej.

#### Distractor files
Usunięcie distractorów konsystentnie poprawia scoring o 4-7 pp. Model rozprasza się przez nieistotne pliki w workspace.

#### Image editing — gorsze niż tekst
9 modeli image generation testowanych na 6 visual work environments. Best score: 28-30% (vs 70-80% dla tekstu). Po 2 interakcjach żaden model nie przekracza 65% — gorzej niż text models po 20.

### 🧩 Critical errors

Frontier modele wprowadzają sparse but severe errors — w 86% relayów Gemini 3.1 Pro / Claude 4.6 Opus występuje przynajmniej jeden critical error (deletion, replacement całych sekcji). Błędy są ciche, kompletują się w kolejnych iteracjach.

## ✍️ Implikacje dla mojej praktyki

To badanie zmienia mój risk model dla [[Vibe Coding]] i [[Claude Code]] poza Pythonem.

1. **[[Brain]] (digital garden)** — moja praca nad notatkami markdown to jest dokładnie ten typ delegated work. Każdy `/ingest`, `/enhance`, `/compile` to round-trip. Nie wiem o ile, ale prawdopodobnie cicho korumpuję content w długich sesjach. Argument za **częstszymi commitami** i **diff review** zamiast trust-by-default.
2. **Klienckie projekty w [[PLSoft]]** poza Pythonem — np. SQL migrations, DOCX generation, JSON configy — kandyduja do silent corruption. Dotąd traktowałem te jak Python-grade safe.
3. **[[Archon]] jako odpowiedź** — workflow gates z deterministic nodes (testy, type-check) między AI nodes ograniczają drift. `bash:` node po każdym `prompt:` node dodaje weryfikację, której paper sygnalizuje brak.
4. **Tool use overhead** — moja heurystyka "włącz wszystkie toole" jest błędna. Dla edycji dokumentów lepiej zostawić model w direct mode niż dawać mu agentic harness, jeśli nie używa code execution efektywnie.
5. **Distractor effect** — context window full of unrelated files (np. otwarty IDE z 30 zakładkami) realnie szkodzi. Argument za małymi izolowanymi worktrees ([[Archon]]) zamiast monorepo agent sessions.

## 🔗 Links

- arXiv: https://arxiv.org/abs/2604.15597
- Code: https://github.com/microsoft/DELEGATE52
- Dataset: https://huggingface.co/datasets/microsoft/DELEGATE52
- Microsoft Research authors: Philippe Laban, Tobias Schnabel, Jennifer Neville

## 🧩 Powiązane patterns w benchmarkingu

- **[[Skills 2.0 Testing]]** — eval-driven skill development, podobne podejście (4-agent pipeline, ale skupiony na Claude Skills)
- **HumanEval / SWE-Bench** — Python coding benchmarks; te dawały optymistyczny obraz, DELEGATE-52 pokazuje że Python był outlierem
- **MMLU / MT-Bench** — knowledge benchmarks, nie capturują degradacji w długich workflow

## 📖 Further reading

- Pimenova et al. (2025) — delegated coding workflows
- Hong et al. (2025), Allamanis et al. (2024) — backtranslation jako evaluation technique dla LLM consistency
- Sennrich et al. (2015) — backtranslation origin (machine translation)
- [[Karpathy Skills]] — 4 pitfalle LLM-coderów; pitfall #3 (side-effect edits) i #4 (weak success criteria) są dokładnie tym, co DELEGATE-52 mierzy ilościowo
- [[Vibe Coding]] — paradygmat oparty na delegated work, paper kwestionuje jego scope poza Pythonem
- [[Agentic Coding]] — szerszy kontekst dla agent-driven workflows
- [[Context Engineering]] — distractor effect pokazuje wartość czystego kontekstu
- [[Harness Engineering]] — tool use NIE pomaga w delegated edit; ważna informacja dla projektowania harnessów
- [[Archon]] — workflow engine z deterministic gates jako mitygacja silent corruption
- [[Claude Code]], [[Cursor]] — narzędzia gdzie ten problem występuje na codzień

---
Template: [[templates/knowledge_note_info]]
