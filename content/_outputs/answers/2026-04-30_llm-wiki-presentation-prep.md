---
title: "LLM Wiki — Value Builders Tribe deck prep (30.04.2026)"
date: 2026-04-30
enableToc: true
openToc: true
tags: ["answer-note", "llm-wiki", "presentation", "value-builders-tribe", "progressive-disclosure"]
type: answer-note
agent-created: true
summary: "Wsad do prezentacji #2 dla VBT: Karpathy LLM Wiki + progressive disclosure + moja implementacja brain.lipowczan.pl, z liczbami i metaforami"
---

# LLM Wiki — wsad do prezentacji
**Event:** Value Builders Tribe, 30.04.2026, 60 min
**Sources w vault:** [[Progressive Disclosure]], [[LLM Knowledge Bases]], [[Context Engineering]], [[Harness Engineering]], [[Token Optimization for Claude Code]], [[DELEGATE-52]], [[Second Brain Design]], [[Graphify]], [[Brain]], [[Hackathon Hacknation]], [[Value Builders Tribe]]

---

## 1. Progressive Disclosure — koncept

### 1.1 Karpathy — oryginalna teza (LLM Wiki)
Z [[LLM Knowledge Bases]] (notatka oparta na wątku @karpathy z X i jego gist „LLM Wiki", kwiecień 2026):

> „Większość doświadczeń z LLM i dokumentami to RAG: upload plików, retrieval chunków, generowanie odpowiedzi. **LLM odkrywa wiedzę od zera przy każdym pytaniu — nic się nie kumuluje.**"

> „LLM Wiki to inne podejście: zamiast retrievować surowe dokumenty, **LLM inkrementalnie buduje i utrzymuje persistent wiki** — structured, interlinked collection of markdown files. Nowy source → LLM czyta, wyciąga kluczowe info, integruje z istniejącą wiki — aktualizuje entity pages, rewizuje summaries, flaguje sprzeczności. **Wiki to persistent, compounding artifact** — cross-references są gotowe, contradictions already flagged, synteza odzwierciedla wszystko."

> „User nigdy (lub rzadko) pisze wiki sam. **LLM pisze i utrzymuje wszystko. User odpowiada za sourcing, eksplorację i zadawanie dobrych pytań.**"

Karpathy o tym, dlaczego to działa (cytat z [[LLM Knowledge Bases]]):
> „Nudna część utrzymania knowledge base to nie czytanie ani myślenie — to bookkeeping: aktualizacja cross-references, utrzymywanie summaries current, notowanie sprzeczności. Ludzie porzucają wiki bo maintenance burden rośnie szybciej niż value. **LLM się nie nudzą, nie zapominają o cross-reference i mogą dotknąć 15 plików w jednym passie. Maintenance cost → ~0.**"

Karpathy o Memex (1945) jako protoplaście:
> „Idea pokrewna Vannevar Bush's Memex (1945) — personal, curated knowledge store z associative trails. **Bush nie mógł rozwiązać kto robi maintenance. LLM to rozwiązuje.**"

Architektura wg Karpathy'ego (3 warstwy z [[LLM Knowledge Bases]]):
- **Raw sources** — immutable curated collection (artykuły, papery, obrazy). LLM czyta, nie modyfikuje.
- **Wiki** — LLM-owned markdown files (summaries, entity pages, concept pages).
- **Schema** — config (CLAUDE.md). „User i LLM **co-evolve** ten plik w miarę jak discovery co działa najlepiej."

### 1.2 Mój zapis — Progressive Disclosure jako wzorzec
Najnowsza notatka [[Progressive Disclosure]] (2026-04-30, ingest w dniu prezentacji):

> **Core principle: Show what exists and its retrieval cost first. Let the agent decide what to fetch based on relevance and need.**

> „Information architecture pattern that reveals complexity gradually instead of all at once. The default approach for Context Engineering in agent systems."

Trzy warstwy (slajd-friendly):
1. **Layer 1 — Index** — lightweight metadata: titles, dates, types, token counts
2. **Layer 2 — Details** — fetch full content only when relevant
3. **Layer 3 — Deep dive** — read original source files if required

> „Mirrors human cognition: scan headlines before articles, TOC before chapters, filenames before opening files."

### 1.3 Liczby — vault dziś (2026-04-30)
Pomiary z dzisiaj — gotowe na slajd „skala vaulta":

| Element | Rozmiar | Linie |
|---|---:|---:|
| **Wiki notatki** (`content/**/*.md`) | 205 plików, **682 KB** (~170k tokenów) | — |
| **CLAUDE.md** (schema/config) | **8 KB** (~2k tokenów) | 216 |
| **vault-map.md** (Layer 0) | **6.9 KB** (~1.7k tokenów) | 67 |
| **catalog.md** (Layer 1) | **46 KB** (~11.5k tokenów) | 282 |
| **graph.md** (Layer 2) | **29 KB** (~7.3k tokenów) | 304 |
| **Inbox** (`_raw/inbox/`) | **0 plików** (clean) | — |
| **Processed** (`_raw/processed/`) | **36 plików** (zarchiwizowane źródła) | — |
| **Commitów typu `ingest:` w 2026** | **14** | — |

### 1.4 „Co by się stało gdyby agent ładował wszystko"
Z [[Progressive Disclosure]] — sekcja **The problem: context pollution**:

> „Traditional RAG dumps everything upfront:
> - 35k tokens of past sessions, observations, summaries
> - **Maybe 2k actually relevant — 6% efficiency**
> - Wastes attention budget; user prompt buried under history"
>
> „Progressive disclosure inverts it:
> - **~800 tokens of index → agent scans → fetches ~200 tokens on demand**
> - **100% relevance, 99k tokens free for the actual task**"

Konkretnie u mnie:
- **Naive load** = wszystkie 205 notatek = ~170k tokenów. Zostawia ~30k na faktyczną pracę w 200k oknie. Plus „context rot" (patrz niżej).
- **Progressive** = vault-map (1.7k) → catalog section (~1k) → 2-3 notatki (~3k) = **~6k tokenów na typowe zapytanie**. **28× mniej.**

Z [[Context Engineering]] — dlaczego więcej kontekstu boli (cytat z dokumentu Anthropic, wrzesień 2025):

> „LLMs have an 'attention budget' depleted as context grows:
> - Every token attends to every other token (n² relationships)
> - **As context length increases, model accuracy decreases**
> - Models have less training experience with longer sequences
> - Context must be treated as finite resource with diminishing marginal returns"

Wzmocnienie z [[Harness Engineering]] (Chroma research):
> „Modele perform worse at longer context lengths. Low semantic similarity między pytaniem a relevant info → **steeper degradation**. Każdy intermediate tool call to potential distractor, a distractor effects **compound**."

Kontrintuicyjny pozdrowienie do **dłuższych context windows ≠ rozwiązanie**:
> „Bigger context window to bigger haystack — nie lepsza needle-finding. Extended-context to ten sam model z clever math (np. YaRN), nie bigger instruction budget." ([[Harness Engineering]])

### 1.5 Mental model — „context as currency"
Z [[Progressive Disclosure]]:

| Approach | Metaphor | Outcome |
|---|---|---|
| **Dump everything** | Wydanie całej wypłaty na spekulacyjne zakupy | Waste, can't afford what's needed |
| **Fetch nothing** | Odmawianie wydawania pieniędzy | Starvation, can't accomplish tasks |
| **Progressive disclosure** | Sprawdź spiżarnię, zrób listę, kup to | Efficiency, room for surprises |

Closing punchline z notatki:
> „**The best interface is one that disappears when not needed, and appears exactly when it is.**"

---

## 2. LLM Wiki — moja implementacja

### 2.1 Historia ewolucji (z `git log` + notatek)

| Data | Commit / Note | Co się zmieniło | Co mnie pchnęło |
|---|---|---|---|
| **2022-08-11** | `e4fa03e7 Initial commit` | Pierwszy push — Hugo + ręczne notatki na GitHub Pages | Decyzja o digital garden po [[Building a Second Brain]] i [[How to take smart notes]] |
| **2022-08-22** | [[Brain]], [[Digital Garden]], [[Obsidian]] | Pierwszy „chunk" — kilkanaście podstawowych notatek o sobie i metodologii | „[Brain] — my public digital garden... published at brain.lipowczan.pl" |
| **2026-01-26** | `a62da179 initialized claude code and added template claude code skills` | Pierwszy CLAUDE.md (74 linie) — agent zaczyna mieć harness | Skille wyszły, chcę przetestować na własnym vault'cie |
| **2026-01-26** | [[Second Brain Design]] | Pierwsza spisana wizja: „Obsidian + Claude Code + Skills = PKM system" | „Tradycyjny second brain wymaga dużo manualnej pracy. AI zmienia zasady gry — zamiast ręcznie organizować, AI przetwarza notatki, znajduje powiązania i generuje dokumenty z istniejącej bazy." |
| **2026-02-23** | `b076fb79 Migrate from Quartz 3.3 (Hugo) to Quartz 4 (Node.js)` | SSG migration. CLAUDE.md −27/+18 linii (Hugo → Node.js) | Quartz 4 lepiej obsługuje Obsidian wikilinki, embeds, callouts |
| **2026-04-05** | [[LLM Knowledge Bases]] (ingest wątku Karpathy'ego) | Czytam Karpathy'ego. „Co ciekawe — ten vault działa dokładnie na tej zasadzie." | Karpathy wątek na X. **Moment „aha" #1** — dostaję nazwę dla tego, co już robię |
| **2026-04-05** | `60535f49 Add LLM Knowledge Base Agent system with progressive disclosure indexes` | **Big bang**: CLAUDE.md +248/−50 linii. Trzywarstwowe indeksy: vault-map, catalog, graph | Karpathy wprost mówi „index → drills into relevant pages... działa zaskakująco dobrze do ~hundreds of pages bez embeddings/RAG infra" ([[LLM Knowledge Bases]]) |
| **2026-04-09** | [[Context Engineering]], [[Harness Engineering]], [[Agentic Coding]] | Ingest 6 sources. Pojawia się słownictwo: attention budget, context rot, just-in-time | **Aha #2** — widzę, że to nie tylko PKM, to ogólny pattern projektowania agentów |
| **2026-04-10** | `220ea564 chore: add AI directory and repos-as-tools pattern to CLAUDE.md` | **+3 linie do CLAUDE.md**: każdy repo z GitHub = osobna notatka tool, nie mergowana w parent | Zauważyłem, że agent przy ingestcie 4 repo wpychał wszystko do jednej notatki „AI Tools" — straciłem granularność. Poprawiłem CLAUDE.md, problem zniknął |
| **2026-04-26** | `f6dff383 refactor(claude-md): collapse Workflows section into 7 skill pointers` | **−59 linii w CLAUDE.md**, workflows wyniesione do skills (`.claude/skills/ingest/`, `compile/`, `qa/`...) | **Aha #3** z [[Harness Engineering]]: „**Less is more** — concise, universally applicable instructions. HumanLayer trzyma < 60 linii." Zrozumiałem, że tłusty CLAUDE.md = context bloat |
| **2026-04-29** | [[DELEGATE-52]] | Microsoft Research benchmark: frontier modele korumpują **25% dokumentu po 20 delegowanych edytach** | **Aha #4** — moja praca na markdownie to dokładnie ten typ pracy. Argument za częstszymi commitami i diff review |
| **2026-04-30** | [[Progressive Disclosure]] (dziś) | Spinam całość w jeden „pattern note" | Prezentacja jutro — chcę mieć jedno źródło prawdy do pokazania |

### 2.2 Dlaczego CLAUDE.md piszę ręcznie
Z [[Harness Engineering]] (cytat z badania ETH Zurich na 138 agentfiles):

> „Kluczowe zasady (potwierdzone badaniem ETH Zurich):
> - **Nie generuj automatycznie** — LLM-generated agentfiles *pogorszyły* performance przy 20%+ wyższym koszcie
> - **Less is more** — concise, universally applicable instructions. HumanLayer trzyma < 60 linii
> - **Progressive disclosure** — nie upychaj wszystkiego w jednym pliku
> - **Unikaj codebase overviews** — agenty same odkrywają strukturę repo"

Z Karpathy'ego ([[LLM Knowledge Bases]]):
> „Schema — dokument konfiguracyjny (np. CLAUDE.md) który mówi LLM jak wiki jest zorganizowana, jakie konwencje obowiązują, jakie workflows stosować. **User i LLM co-evolve ten plik w miarę jak discovery co działa najlepiej.**"

**Moja zasada:** CLAUDE.md ewoluuje z błędów agenta. Każda iteracja to skutek jednego konkretnego nieporozumienia.

### 2.3 Konkretne anegdoty „agent się pomylił → poprawiłem CLAUDE.md → przestał"

**Anegdota A — repos-as-tools (2026-04-10):**
- **Co się stało:** Wrzuciłem 4 GitHub repo (Graphify, CC Best Practice, Awesome Design MD, Awesome Claude Code) do `_raw/inbox/`. Agent zmergował 3 z nich w jedną notatkę „AI Tools".
- **Fix:** dodałem 1 zdanie do CLAUDE.md: „GitHub/open-source repositories → individual `tool` notes in the topic folder matching their domain (e.g., `AI/TOOLS/`, `CODE/TOOLS/`). Each repo gets its own note, not merged into a parent tool note."
- **Efekt:** kolejne ingesty (commit `a39e5318` — 6 sources, w tym 4 repos) — każdy repo dostał osobną notatkę.

**Anegdota B — collapse workflows do skills (2026-04-26):**
- **Co się stało:** CLAUDE.md urósł do ~280 linii z opisami wszystkich 7 workflowów (INGEST, COMPILE, INDEX, Q&A, LINT, OUTPUT, ENHANCE). Agent przy każdym zapytaniu przepalał ~5k tokenów na czytanie reguł, których nie używał w danym momencie.
- **Fix:** wyniosłem każdy workflow do osobnego skilla w `.claude/skills/<workflow>/SKILL.md`. CLAUDE.md skurczył się o 59 linii — został tylko **pointer** do skilla.
- **Efekt:** dziś CLAUDE.md ma 216 linii (~2k tokenów), skille ładują się **on-demand** (progressive disclosure w praktyce).

**Anegdota C — auto-update indexes (data nieznana, ale w CLAUDE.md):**
- **Co się stało:** Agent po ingestcie zostawiał stare indexy. Po tygodniu vault-map nie zgadzał się z rzeczywistością.
- **Fix:** sekcja „Auto-Update Rules (after EVERY write)" w CLAUDE.md: „After creating or editing ANY note, update indexes IMMEDIATELY — don't defer to a separate reindex."
- **Efekt:** indexy są zawsze świeże; nie potrzebuję uruchamiać `/reindex` ręcznie.

### 2.4 Statystyki vaulta
- **205 wiki notes** (typ: basic-note, knowledge-note, book-note, tool, compiled-note, answer-note)
- **272 edges** w `graph.md` (linki między notatkami) — średnio **~1.3 linka wychodzącego na notatkę**
- **3 indeksy** (vault-map / catalog / graph) auto-aktualizowane po każdym zapisie
- **14 commitów `ingest:`** w 2026 (do dziś, 4 miesiące) → **~3.5 ingestu/miesiąc**
- **36 plików** w `_raw/processed/` (archiwum źródeł — od 2026-04-05 kiedy ruszyła pipeline)
- **0 plików w inbox** (clean state w dniu prezentacji — można pokazać)

### 2.5 Flow ingestu — krok po kroku, na przykładzie
Przykład: `_raw/inbox/Thread by @karpathy.md` (2026-04-05, wątek o LLM Wiki).

1. **Drop** — surowy plik trafia do `content/_raw/inbox/`
2. **`/ingest`** triggeruje skill `ingest`
3. **Czytanie indeksów** — agent czyta `vault-map.md` (1.7k tokenów) → identyfikuje folder docelowy `AI/KNOWLEDGE/INFO`
4. **Czytanie catalogu** — sekcja `## AI/KNOWLEDGE/INFO` (~30 linii) → sprawdza, czy nie ma duplikatu
5. **Klasyfikacja** — typ `knowledge-note`, template `templates/knowledge_note_info.md`
6. **Detekcja klastra** — czy jest 2+ notatek o pokrewnym temacie? Jeśli tak → confirm z userem
7. **Pisanie notatki** → `content/AI/KNOWLEDGE/INFO/LLM Knowledge Bases.md` z frontmatter (tytuł, data, tagi, summary, `agent-created: true`, `source: _raw/inbox/...`)
8. **Update indeksów** (3 pliki):
   - `vault-map.md`: increment count w folderze AI/KNOWLEDGE/INFO, dodanie `llm`/`knowledge-base` do top-tags, wpis w Recent Changes
   - `catalog.md`: nowa linijka `- **LLM Knowledge Bases** | knowledge-note | 2026-04-05 | [...] | summary | → links`
   - `graph.md`: outgoing `LLM Knowledge Bases -> Obsidian, Building a Second Brain, ...` + incoming na targetach
9. **Backlink update** — agent edytuje notatki, do których nowa notatka linkuje (np. dodaje `LLM Knowledge Bases` do Resources w `Obsidian.md`)
10. **Archive** — `inbox/Thread by @karpathy.md` → `_raw/processed/2026-04-05_Thread by @karpathy.md`
11. **Git commit** — `ingest: 1 new note (LLM Knowledge Bases)`

**Real artefakt:** `git show d25db615` (najnowszy ingest, dziś rano) — 1 nowa notatka [[Progressive Disclosure]] + 1 enhanced [[Context Engineering]] + 3 zaktualizowane indeksy + 1 backlink update w [[Harness Engineering]] = **5 plików dotkniętych jednym promptem**, ~2 minuty pracy agenta. Ja-2024 pisałbym to 30 minut.

---

## 3. Metafory i jednolinijkowce

### 3.1 Z notatek (cytaty wprost)

**„Context as currency"** ([[Progressive Disclosure]]):
> „Spend wisely on high-value information." Tabela porównawcza: dump everything = wydaj wypłatę na spekulacyjne zakupy; fetch nothing = nie wydawaj wcale; progressive = sprawdź spiżarnię, zrób listę, kup to.

**„Index reveals what exists without forcing consumption"** ([[Progressive Disclosure]]):
> „Show, don't tell."

**„Best interface disappears"** ([[Progressive Disclosure]]):
> „The best interface is one that disappears when not needed, and appears exactly when it is."

**„Bookkeeper / curator"** (Karpathy via [[LLM Knowledge Bases]] — moja parafraza):
> „Nudna część utrzymania knowledge base to nie czytanie ani myślenie — to **bookkeeping**."
> „User odpowiada za sourcing, eksplorację i zadawanie dobrych pytań." ← **curator**
> Jednolinijka: **„LLM = bookkeeper. Ja = curator."**

**„Wiki = git repo"** (Karpathy via [[LLM Knowledge Bases]]):
> „Wiki = git repo z .md files → version history, branching i collaboration **za darmo**."
> Mój wariant: **„Git = safety net. Każdy ingest to commit. DELEGATE-52 mówi że frontier modele korumpują 25% po 20 edytach — git mi pozwala cofać korupcję, której nie zauważyłem."**

**„Memex finally works"** (Karpathy via [[LLM Knowledge Bases]]):
> „Bush nie mógł rozwiązać kto robi maintenance. **LLM to rozwiązuje.**"

**„AI to equalizer"** ([[Hackathon Hacknation]]):
> „AI to equalizer — narzędzie pozwalające zespołowi z mniejszym doświadczeniem koderskim konkurować z profesjonalnymi dev teamami."
> Wariant dla wiki: **„LLM Wiki to equalizer dla osób, które kochają wiedzę, ale nienawidzą bookkeepingu."**

**„Less is more"** ([[Harness Engineering]] — ETH Zurich):
> „LLM-generated agentfiles *pogorszyły* performance przy 20%+ wyższym koszcie. **Less is more** — HumanLayer trzyma < 60 linii."

**„Bigger context = bigger haystack"** ([[Harness Engineering]] — Chroma):
> „Bigger context window to bigger haystack — nie lepsza needle-finding."

**„Context rot"** ([[Context Engineering]]):
> „Models perform worse at longer context lengths. Distractor effects **compound**."

**„Maintenance cost → ~0"** (Karpathy):
> „LLM się nie nudzą, nie zapominają o cross-reference i mogą dotknąć 15 plików w jednym passie. Maintenance cost → ~0."

### 3.2 Mojeparafrazowane (do otwarcia/zamknięcia slajdów)
- **„Schema, nie content."** — to, co piszę ręcznie (CLAUDE.md, vault-map convention) to schema. Content pisze agent.
- **„Pamięć agenta to 3 pliki .md."** — vault-map, catalog, graph. Bez vector DB, bez embeddings, bez RAG infra. Działa do ~setek notatek (Karpathy).
- **„Każdy błąd agenta to nowa linijka w CLAUDE.md."** — 6 commitów do CLAUDE.md w 4 miesiące, każdy +1 zasada wynikająca z konkretnej pomyłki.
- **„205 notatek, 0 napisanych przeze mnie w 2026."** — sprawdzić w git blame, ale to mocna teza demo'owa. (Verify przed slajdem.)

---

## 4. Pytania audytorium z #1 (9.04)
**Status:** w vault'cie nie ma notatki z meeting #1 (9.04.2026) z konkretnymi pytaniami audytorium o LLM Wiki.

**Co znalazłem zamiast:**
- [[Value Builders Tribe]] (2026-04-09) — opis projektu jako „tech community where I'm Tech Lead/Mentor — organizing regular meetups", bez notatek z konkretnych spotkań
- 7 notatek datowanych **2026-04-09** ([[Agentic Coding]], [[Context Engineering]], [[Harness Engineering]], [[Build in Public]], [[LinkedIn Strategy]], [[Specification-Driven Development]], [[Brain]]) — wygląda na batch ingest pod meeting #1, ale **nie zawierają Q&A**

**Rekomendacja na otwarcie #2:** zamiast cytować pytania z #1, użyj **prowokacyjnych tez z DELEGATE-52** jako otwarcia („frontier modele korumpują 25% dokumentu po 20 edytach — czy ufam mojej własnej wiki?") albo zapytaj wprost: **„Kto z was próbował pisać wiki ręcznie i porzucił?"** (Karpathy: „maintenance burden rośnie szybciej niż value").

**Action item po prezentacji:** włóż notatkę z #2 (`AI/NOTES/VBT-2-2026-04-30.md`) z Q&A — żeby na #3 mieć materiał.

---

## 🔗 Resources / sources

**Główne (cytuj na slajdach):**
- [[Progressive Disclosure]] — pattern note, 2026-04-30
- [[LLM Knowledge Bases]] — Karpathy thread, 2026-04-05
- [[Context Engineering]] — Anthropic Sept 2025 framework
- [[Harness Engineering]] — HumanLayer + ETH Zurich + Chroma research
- [[DELEGATE-52]] — Microsoft Research, 25% corruption stat
- [[Brain]] — meta-note o tym vault'cie

**Wspierające:**
- [[Token Optimization for Claude Code]] — 10 narzędzi, 40-98% redukcja tokenów
- [[Second Brain Design]] — moja styczniowa wizja PKM
- [[Graphify]] — knowledge graph approach (71× redukcja)
- [[Hackathon Hacknation]] — „AI to equalizer" cytat
- [[Value Builders Tribe]] — kontekst eventu

**External (linkuj w deck'u):**
- Karpathy thread: `x.com/karpathy/status/2039805659525644595`
- LLM Wiki gist: `gist.github.com/karpathy/442a6bf555914893e9891c11519de94f`
- Anthropic, *Effective context engineering for AI agents* (Sept 2025)
- ETH Zurich agentfiles study: `arxiv.org/abs/2602.11988`
- DELEGATE-52: `arxiv.org/abs/2604.15597`
- Chroma context rot: `research.trychroma.com/context-rot`

**Live demo'owe artefakty:**
- `https://brain.lipowczan.pl/` — vault online
- `git log --oneline -- CLAUDE.md` — 6 commitów = 6 lekcji
- `content/_raw/processed/` — 36 plików-archiwum (pokaż foldery)
- `content/_indexes/vault-map.md` — pokaż na żywo, 67 linii, 1.7k tokenów

---
Template: [[templates/basic_notes]]
