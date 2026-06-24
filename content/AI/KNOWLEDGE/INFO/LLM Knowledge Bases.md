---
title: "LLM Knowledge Bases"
date: 2026-04-05
enableToc: true
openToc: true
tags: ["knowledge", "info", "llm", "knowledge-base", "obsidian", "ai"]
type: knowledge-note
source: "_raw/inbox/Thread by @karpathy.md"
agent-created: true
agent-reviewed: 2026-04-09
summary: "Using LLMs to build and maintain personal knowledge bases — methodology described by Andrej Karpathy"
---

# LLM Knowledge Bases

## 🗒️ Description
Podejście do budowania personal knowledge base z wykorzystaniem LLM jako głównego "kompilatora" wiedzy. Zamiast ręcznie pisać i organizować notatki, LLM przetwarza surowe źródła (artykuły, papery, repozytoria) i kompiluje z nich wiki — kolekcję plików .md z podsumowaniami, backlinkami i artykułami tematycznymi.

Koncept opisał Andrej Karpathy w [wątku na X](https://x.com/karpathy/status/2039805659525644595?s=46) (kwiecień 2026), a potem rozwinął w [gist na GitHubie](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) — „LLM Wiki". Co ciekawe — ten vault działa dokładnie na tej zasadzie.

### Core idea — Wiki vs RAG
Większość doświadczeń z LLM i dokumentami to RAG: upload plików, retrieval chunków, generowanie odpowiedzi. LLM odkrywa wiedzę od zera przy każdym pytaniu — nic się nie kumuluje. NotebookLM, ChatGPT file uploads i większość RAG systemów tak działają.

LLM Wiki to inne podejście: zamiast retrievować surowe dokumenty, **LLM inkrementalnie buduje i utrzymuje persistent wiki** — structured, interlinked collection of markdown files. Nowy source → LLM czyta, wyciąga kluczowe info, integruje z istniejącą wiki — aktualizuje entity pages, rewizuje summaries, flaguje sprzeczności. **Wiki to persistent, compounding artifact** — cross-references są gotowe, contradictions already flagged, synteza odzwierciedla wszystko.

User nigdy (lub rzadko) pisze wiki sam. LLM pisze i utrzymuje wszystko. User odpowiada za sourcing, eksplorację i zadawanie dobrych pytań.

## 🔗 Links
- [[Obsidian]] — IDE/frontend do przeglądania wiki
- [[Building a Second Brain]] — pokrewna metodologia organizacji wiedzy
- [[Zettelkasten]] — klasyczne podejście do linked notes
- [[Digital Garden]] — publikowanie wiedzy online
- [[Harness Engineering]] — konfiguracja agentów AI do efektywnej pracy z codebase i wiki
- [[OpenKB]] — gotowe CLI implementujące ten wzorzec (vectorless PageIndex, Skill Factory)
- [[Building an AI Second Brain]] — krok-po-kroku build tego wzorca na Claude + Obsidian

## 🧩 Features:

### Architektura — trzy warstwy

**Raw sources** — curated collection of source documents. Artykuły, papery, obrazy, dane. Immutable — LLM czyta, ale nie modyfikuje. Source of truth.

**Wiki** — katalog LLM-generated markdown files. Summaries, entity pages, concept pages, comparisons, overview, synthesis. LLM owns this layer — tworzy strony, aktualizuje, utrzymuje cross-references, pilnuje spójności.

**Schema** — dokument konfiguracyjny (np. CLAUDE.md) który mówi LLM jak wiki jest zorganizowana, jakie konwencje obowiązują, jakie workflows stosować. User i LLM co-evolve ten plik w miarę jak discovery co działa najlepiej.

### Operations

#### Ingest
- Nowy source trafia do raw collection
- LLM czyta, dyskutuje key takeaways z userem, pisze summary page, aktualizuje index, aktualizuje relevant entity i concept pages
- Jeden source może dotknąć 10-15 wiki pages
- Można ingestować jeden po jednym (z pełnym involvement) lub batch z mniejszym supervision

#### Query
- Pytania wobec wiki — LLM szuka relevant pages, czyta, syntezuje odpowiedź z cytowaniami
- Odpowiedzi mogą mieć różne formy: markdown page, comparison table, slide deck (Marp), chart (matplotlib), canvas
- **Dobre odpowiedzi można filed back do wiki jako nowe strony** — eksploracje compound w bazie wiedzy

#### Lint
- Periodyczny health-check: contradictions, stale claims, orphan pages, brakujące own pages dla ważnych concepts, missing cross-references, data gaps
- LLM sugeruje kolejne pytania do zbadania i nowe sources do znalezienia

### Indexing & Logging

**index.md** — content-oriented catalog wiki. Każda strona z linkiem, one-line summary i metadata. Organizowany per category. LLM aktualizuje na każdy ingest. Przy query LLM czyta index → drills into relevant pages. Działa zaskakująco dobrze do ~100 sources, ~hundreds of pages — bez embeddings/RAG infra.

**log.md** — chronologiczny, append-only record (ingests, queries, lint passes). Z consistent prefix (np. `## [2026-04-02] ingest | Article Title`) staje się parseable z unix tools.

### CLI Tools
- Na większej skali warto zbudować search engine po wiki pages
- [qmd](https://github.com/tobi/qmd) — local search engine dla markdown z hybrid BM25/vector search i LLM re-ranking, on-device. CLI + MCP server.

### Tips & tricks
- **Obsidian Web Clipper** — browser extension, konwersja artykułów na .md
- **Download images locally** — Obsidian Settings → Attachment folder path → fixed directory, hotkey do download attachments
- **Obsidian graph view** — najlepszy sposób na wizualizację kształtu wiki
- **Marp** — markdown-based slide decks, Obsidian plugin
- **Dataview** — queries po YAML frontmatter, dynamiczne tables i lists
- Wiki = git repo z .md files → version history, branching i collaboration za darmo

### Dlaczego to działa
Nudna część utrzymania knowledge base to nie czytanie ani myślenie — to bookkeeping: aktualizacja cross-references, utrzymywanie summaries current, notowanie sprzeczności. Ludzie porzucają wiki bo maintenance burden rośnie szybciej niż value. LLM się nie nudzą, nie zapominają o cross-reference i mogą dotknąć 15 plików w jednym passie. Maintenance cost → ~0.

Idea pokrewna Vannevar Bush's Memex (1945) — personal, curated knowledge store z associative trails. Bush nie mógł rozwiązać kto robi maintenance. LLM to rozwiązuje.

### Use cases
- **Personal**: goals, health, self-improvement — journaling, articles, podcast notes
- **Research**: deep dive na temat, reading papers/reports, evolving thesis
- **Reading a book**: wiki per book z characters, themes, plot threads — companion wiki jak fan wikis
- **Business/team**: internal wiki maintained by LLMs, fed by Slack/meetings/docs
- **Competitive analysis, due diligence, trip planning, course notes, hobby deep-dives**

## 📖 Further reading
- [Oryginalny wątek @karpathy na X](https://x.com/karpathy/status/2039805659525644595?s=46)
- [LLM Wiki gist na GitHubie](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
- [[Autoresearch]] — powiązany projekt Karpathy'ego o autonomicznych agentach badawczych
- [[Agentic Engineering]] — Karpathy's Sequoia talk where he names this project directly ("you can't outsource understanding")
- [[Open Knowledge Format (OKF)]] — an open spec that formalises this markdown+frontmatter "LLM wiki" idea into interoperability rules

---
Template: [[templates/knowledge_note_info]]
