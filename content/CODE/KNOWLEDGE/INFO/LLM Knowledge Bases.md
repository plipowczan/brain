---
title: "LLM Knowledge Bases"
date: 2026-04-05
enableToc: true
openToc: true
tags: ["knowledge", "info", "llm", "knowledge-base", "obsidian", "ai"]
type: knowledge-note
source: "_raw/inbox/Thread by @karpathy.md"
agent-created: true
summary: "Using LLMs to build and maintain personal knowledge bases — methodology described by Andrej Karpathy"
---

# LLM Knowledge Bases

## 🗒️ Description
Podejście do budowania personal knowledge base z wykorzystaniem LLM jako głównego "kompilatora" wiedzy. Zamiast ręcznie pisać i organizować notatki, LLM przetwarza surowe źródła (artykuły, papery, repozytoria) i kompiluje z nich wiki — kolekcję plików .md z podsumowaniami, backlinkami i artykułami tematycznymi.

Koncept opisał Andrej Karpathy w [wątku na X](https://x.com/karpathy/status/2039805659525644595?s=46) (kwiecień 2026). Co ciekawe — ten vault działa dokładnie na tej zasadzie.

## 🔗 Links
- [[Obsidian]] — IDE/frontend do przeglądania wiki
- [[Building a Second Brain]] — pokrewna metodologia organizacji wiedzy
- [[Zettelkasten]] — klasyczne podejście do linked notes
- [[Digital Garden]] — publikowanie wiedzy online

## 🧩 Features:
Karpathy opisuje pipeline składający się z kilku warstw:

### Data Ingest
- Surowe źródła (artykuły, papery, repo, datasety, obrazy) trafiają do katalogu `raw/`
- LLM inkrementalnie "kompiluje" wiki z tych źródeł
- Obsidian Web Clipper do konwersji stron na .md

### IDE / Frontend
- [[Obsidian]] jako główny interfejs do przeglądania raw data, skompilowanej wiki i wizualizacji
- LLM pisze i utrzymuje całą zawartość wiki — user rzadko edytuje bezpośrednio
- Pluginy do renderowania danych (np. Marp do slajdów)

### Q&A
- Przy wystarczająco dużej wiki (~100 artykułów, ~400K słów) można zadawać złożone pytania
- LLM auto-utrzymuje pliki indeksowe i krótkie podsumowania dokumentów
- Nie wymaga fancy RAG na małej skali

### Output
- Markdown, slide shows (Marp), wykresy matplotlib — wszystko viewable w Obsidian
- Wyniki zapytań można "filed back" do wiki — eksploracje kumulują się w bazie wiedzy

### Linting
- LLM health checks: niespójne dane, brakujące dane, ciekawe połączenia
- Inkrementalne czyszczenie i wzbogacanie wiki
- LLM sugeruje kolejne pytania do zbadania

### Extra Tools
- Custom narzędzia do przetwarzania danych (np. search engine po wiki)
- CLI tools dla LLM do większych zapytań

### Dalsze kierunki
- Synthetic data generation + finetuning — żeby LLM "znał" dane w wagach, nie tylko w context window
- Karpathy widzi tu potencjał na nowy produkt

## 📖 Further reading
- [Oryginalny wątek @karpathy na X](https://x.com/karpathy/status/2039805659525644595?s=46)
- [[Autoresearch]] — powiązany projekt Karpathy'ego o autonomicznych agentach badawczych

---
Template: [[templates/knowledge_note_info]]
