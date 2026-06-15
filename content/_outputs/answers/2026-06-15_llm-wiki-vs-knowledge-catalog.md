---
title: "LLM Wiki vs Google Cloud Knowledge Catalog"
date: 2026-06-15
enableToc: true
openToc: true
tags: ["answer", "ai", "knowledge-base", "knowledge-graph", "llm", "rag", "comparison"]
type: answer-note
agent-created: true
summary: "Q&A — czym różni się LLM Wiki (metodologia Karpathy'ego / ten vault) od Google Cloud Knowledge Catalog (zarządzany produkt chmurowy z knowledge graph dla agentów AI): różne warstwy abstrakcji, forma wiedzy i filozofia retrievalu"
---

# LLM Wiki vs Google Cloud Knowledge Catalog

> Q: *czym różni się LLM Wiki od Google Cloud Knowledge Catalog?* — synteza z notatek vault (2026-06-15).

Pytanie zestawia dwa byty z różnych warstw: **LLM Wiki** to *metodologia/wzorzec pracy* ([[LLM Knowledge Bases]]), a **Google Cloud Knowledge Catalog** to *zarządzany produkt chmurowy* ([[Google Cloud Knowledge Catalog]]). Częściowo nakładają się celem (kontekst dla agentów AI), ale leżą na innych poziomach abstrakcji.

## Czym w ogóle jest każde z nich

**LLM Wiki** — koncept Andrieja Karpathy'ego ([[LLM Knowledge Bases]]): LLM jako „kompilator wiedzy", który inkrementalnie buduje i utrzymuje **persistent, interlinked kolekcję plików .md**. Nowy source → LLM czyta, wyciąga kluczowe info, integruje z istniejącą wiki, aktualizuje entity pages, flaguje sprzeczności. Co ważne — **ten vault ([[Brain]]) działa dokładnie na tej zasadzie**.

**Google Cloud Knowledge Catalog** — zarządzany produkt Google Cloud (dawniej **Dataplex**) ([[Google Cloud Knowledge Catalog]]): buduje **dynamiczny knowledge graph** nad danymi organizacji (strukturalnymi + niestrukturalnymi), żeby agenci AI dostawali semantykę i kontekst biznesowy zamiast surowych tabel.

## Kluczowe różnice

| Wymiar | LLM Wiki | Google Cloud Knowledge Catalog |
|--------|----------|-------------------------------|
| **Czym jest** | Metodologia / wzorzec (open recipe) | Zarządzany produkt SaaS w chmurze |
| **Artefakt** | Pliki Markdown z wikilinkami | Knowledge graph nad danymi |
| **Kto „pisze"** | LLM kompiluje prozę, summaries, syntezę | Platforma generuje metadane/semantykę nad istniejącymi danymi |
| **Źródło prawdy** | Curated *raw sources* (artykuły, papery) — immutable | Dane operacyjne organizacji (tabele, dokumenty) |
| **Skala / kontekst** | Personal/research/team, ~100 sources, *bez* embeddings/RAG infra | Enterprise, governance danych, skala organizacyjna |
| **Stack** | Git + Markdown + Obsidian + LLM ([[Brain]]) | Google Cloud / Dataplex (vendor-managed) |
| **Konsument** | Człowiek czyta wiki; LLM odpowiada na pytania | Agenci AI odpytujący dane firmowe |
| **Koszt utrzymania** | ~0 (LLM robi bookkeeping) | Płatny serwis chmurowy |

## Sedno różnicy

- **Warstwa abstrakcji**: LLM Wiki to *jak organizować pracę z wiedzą*; Knowledge Catalog to *gotowa infrastruktura* do kupienia.
- **Forma wiedzy**: LLM Wiki materializuje wiedzę jako **czytelną dla człowieka prozę z backlinkami**; Knowledge Catalog buduje **maszynowy knowledge graph** jako substrat retrievalu dla agentów.
- **Filozofia retrievalu**: LLM Wiki świadomie odchodzi od RAG (wiki jako *compounding artifact*, gdzie cross-references i sprzeczności są już rozwiązane — [[LLM Knowledge Bases]]); Knowledge Catalog to właśnie warstwa metadanych/grafu zasilająca RAG-owe i agentowe workflow.

Sama notatka [[Google Cloud Knowledge Catalog]] ujmuje to tak: to „co shippuje Google" w tej samej przestrzeni problemowej co OSS-owe [[CocoIndex]], [[LightRAG]] czy [[Graphify]] — ale **od strony managed-cloud / enterprise-governance**, a nie self-hosted recipe.

## Gdzie się spotykają

Oba rozwiązują ten sam meta-problem: **przekształcić chaotyczne źródła w kontekst użyteczny dla AI**. Knowledge Catalog jest wręcz wymieniony w vaultcie jako „worked example" warstwy metadanych jako retrieval substrate dla agentów — przydatny punkt odniesienia przy projektowaniu warstw wiedzy.

## Luka w vaultcie

Nie ma osobnej notatki bezpośrednio porównującej te dwa podejścia — „LLM Wiki" istnieje tylko jako sekcja w [[LLM Knowledge Bases]], nie jako własny byt.

## 🔗 Źródła
- [[LLM Knowledge Bases]] — metodologia Karpathy'ego, definicja LLM Wiki
- [[Google Cloud Knowledge Catalog]] — produkt Google (dawniej Dataplex)
- [[Brain]] — ten vault jako żywa implementacja LLM Wiki
- [[CocoIndex]], [[LightRAG]], [[Graphify]] — pokrewne OSS-owe warstwy kontekstu dla agentów
