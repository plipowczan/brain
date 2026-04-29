---
title: "LightRAG"
date: 2026-04-29
enableToc: true
openToc: true
tags: ["tool", "ai", "rag", "knowledge-graph", "llm", "open-source"]
type: tool
source: "_raw/inbox/HKUDSLightRAG EMNLP2025 LightRAG Simple and Fast Retrieval-Augmented Generation.md"
agent-created: true
summary: "EMNLP2025 RAG framework — łączy KG entity extraction z dual-level retrieval, bije NaiveRAG/HyDE/GraphRAG na 4 domenach"
---
# LightRAG

`HKUDS/LightRAG` — open-source RAG framework opublikowany na EMNLP2025 ([arXiv:2410.05779](https://arxiv.org/abs/2410.05779)). Zamiast naive vector search, LightRAG ekstrahuje encje i relacje do knowledge graphu, a potem łączy dual-level retrieval (low-level → konkretne encje, high-level → szerokie tematy/grupy encji). W ewaluacjach pisanych przez autorów bije NaiveRAG, RQ-RAG, HyDE i GraphRAG na agriculture, CS, legal i mixed domains.

Dla mojego kontekstu — to jest narzędzie referencyjne dla [[AI Chatbots Architecture]] i potencjalnie warstwa retrieval pod [[LLM Knowledge Bases]] / [[Brain]] gdy outgrow indeksy markdown.

## 🔗 Links

### Description
- Repo: https://github.com/HKUDS/LightRAG
- Paper: https://arxiv.org/abs/2410.05779 (EMNLP2025)
- LearnOpenCV guide: https://learnopencv.com/lightrag
- Discord: https://discord.gg/yF2MmDJyGJ
- License: MIT (z poprawkami niemodyfikowalnymi)

### Download or use

```bash
# LightRAG Server (Web UI + REST API + Ollama-compatible interface)
uv tool install "lightrag-hku[api]"
cp env.example .env       # wpisz LLM + embedding config
lightrag-server

# LightRAG Core (do embedded use lub research)
uv pip install lightrag-hku

# Docker Compose
git clone https://github.com/HKUDS/LightRAG && cd LightRAG
cp env.example .env && docker compose up
```

Setup wizard (`make env-base`, `make env-storage`, `make env-server`) generuje `.env` interaktywnie zamiast ręcznej edycji.

## 🗒️ Description

### 🧩 Czym LightRAG różni się od naive RAG

Naive RAG: chunk → embed → top-k cosine similarity → LLM. Słabość: chunki są atomiczne, nie ma związków między nimi, modele cierpią w pytaniach wymagających rozumienia całego dokumentu (cross-chunk reasoning).

LightRAG dodaje fazę **entity-relationship extraction** podczas indeksowania — LLM wyciąga z dokumentu encje (osoby, organizacje, koncepty) i relacje, które trafiają do knowledge graphu. Query przechodzi w dwóch trybach:
- **Low-level** — szuka konkretnych encji
- **High-level** — szuka szerokich tematów/grup encji
- **Mix mode** (rekomendowany od 2025.08 z reranker default) — łączy oba

### 🧩 Wymagania modelowe

Dużo wyższe niż naive RAG, bo LLM musi extractować entity-relationship z dokumentów:

- **LLM**: ≥32B parametrów, kontekst ≥32KB (rekomendowane 64KB), nie używać reasoning models do indeksowania, ale używać silniejszych do query
- **Embedding**: must-have multilingual, np. `BAAI/bge-m3` lub `text-embedding-3-large`. **Krytyczne**: ten sam model dla index i query — przy zmianie trzeba wyczyścić vector tables
- **Reranker**: `BAAI/bge-reranker-v2-m3` albo Jina; włączenie istotnie poprawia retrieval

### 🧩 Storage backends

Wspiera unified storage dla wszystkich czterech komponentów (KV, vector, graph, doc-status):
- **MongoDB** (od 2025.02)
- **PostgreSQL** (od 2025.01)
- **OpenSearch** (od 2026.03)
- **Neo4j** (graph storage od 2024.11)

### 🧩 Ekosystem rodziny HKUDS

| Projekt | Co dodaje |
|---------|-----------|
| **LightRAG** | Bazowy text RAG z KG |
| [RAG-Anything](https://github.com/HKUDS/RAG-Anything) | Multimodal — PDF, Office docs, obrazki, tabele, wzory |
| [VideoRAG](https://github.com/HKUDS/VideoRAG) | Extreme long-context video RAG |
| [MiniRAG](https://github.com/HKUDS/MiniRAG) | Uproszczone RAG dla małych modeli |

Od 2025.06 LightRAG integruje RAG-Anything dla multimodal pipeline'ów.

### 🧩 Observability i ewaluacja

Od 2025.11:
- **Langfuse** integration — tracing
- **RAGAS** — evaluation z context precision metrics
- API zwraca retrieved contexts obok query results
- Token usage tracking, KG export, LLM cache management

### 🧩 Wyniki paper'a (LightRAG vs baseline na 4 domenach)

| Baseline | Agriculture | CS | Legal | Mix |
|----------|------------:|---:|------:|----:|
| vs NaiveRAG | **67.6%** | 61.6% | **83.6%** | 61.2% |
| vs RQ-RAG | **68.4%** | 61.2% | **84.8%** | 60.8% |
| vs HyDE | **74.0%** | 58.4% | 73.2% | 59.6% |
| vs GraphRAG | 54.4% | 51.6% | 51.6% | 49.6% |

(Comprehensiveness — % win rate LightRAG nad baseline'em.) Vs GraphRAG marginalna przewaga, vs reszta solidna.

## ✍️ Reasoning for

Mój use case nr 1 to potencjalna warstwa retrieval pod [[Brain]] gdy folder content/ przekroczy poziom gdzie grep + indexy markdown wystarczają. Dziś agent (czyli ja) używa progresywnego ujawniania przez `_indexes/vault-map.md` → `catalog.md` → `graph.md` — to działa do ~500 notatek. Powyżej będę chciał semantic search z KG awareness, i LightRAG wygląda na rozsądne fundamenty.

Use case nr 2: [[Qamera AI]] / [[AI Chatbots Architecture]] — chatboty, gdzie context spans across many docs i naive vector search miss'uje relationships. Tu mix mode + reranker default to powinno wyraźnie poprawić jakość.

Słabe punkty:
- Wymagania modelowe (≥32B, 32KB context) wykluczają tani embedding na małych OSS LLM-ach
- Embedding model lock-in (zmiana = reindex całości) — drogi mistake
- Indexing time rośnie liniowo z size (LLM extracts encje per dokument)

## Alternatives considered

- **GraphRAG (Microsoft)** — podobny pomysł z KG, wg paper'a LightRAG marginalnie lepszy i lżejszy
- **HyDE** — generuj hipotetyczny answer, embed to, retrieve. Działa, ale w paperze leci na agriculture/legal
- **Naive RAG (BAAI/bge-m3 + simple top-k)** — wystarczy dla 80% use case'ów, prostsze, taniej
- **MiniRAG** — z tej samej rodziny, dla małych modeli
- **[[Graphify]]** — code/docs → queryable KG, ale to skill, nie pełny RAG framework

## 🔗 Resources

- Citation: `@article{guo2024lightrag, eprint={2410.05779}, primaryClass={cs.IR}, year={2024}}`
- Setup wizard docs: `docs/InteractiveSetup.md` (w repo)
- Programming guide: `docs/ProgramingWithCore.md`
- Offline deployment guide: `docs/OfflineDeployment.md`
- Reproduce findings: `docs/Reproduce.md`

---
Template: [[templates/tool]]
