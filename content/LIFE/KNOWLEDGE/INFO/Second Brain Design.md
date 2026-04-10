---
title: "Second Brain Design"
date: 2026-01-26
enableToc: true
openToc: true
tags: ["knowledge", "info", "pkm", "obsidian", "ai"]
type: knowledge-note
agent-created: true
summary: "PKM system design: Obsidian vault + Claude Code + Skills — Capture, Organize, Retrieve with AI automation"
---

# Second Brain Design

## 🗒️ Description

**Second Brain** to zewnętrzny system do przechowywania i organizacji wiedzy. Koncepcja wywodzi się z **PKM (Personal Knowledge Management)** — świadomego zbierania, organizowania i wykorzystywania informacji.

Tradycyjny second brain opiera się na trzech funkcjach:
- **Capture** — szybkie przechwytywanie myśli, notatek, pomysłów
- **Organize** — kategoryzacja i łączenie informacji
- **Retrieve** — odnajdywanie wiedzy gdy jej potrzebujesz

Problem? Te trzy funkcje wymagają dużo manualnej pracy. AI zmienia zasady gry — zamiast ręcznie organizować, AI przetwarza notatki, znajduje powiązania i generuje dokumenty z istniejącej bazy.

Second brain z AI to nie tylko storage — to **system, który aktywnie pomaga korzystać z wiedzy**.

## 🧩 Architecture

### Obsidian jako fundament
- **Pliki lokalne** — notatki to zwykłe pliki `.md` na dysku
- **Offline-capable** — nie wymaga internetu
- **Markdown** — format najlepiej rozumiany przez LLM-y
- **Graph view** — wizualizacja połączeń między notatkami
- **Brak vendor lock-in** — pliki otworzysz w dowolnym edytorze

W przeciwieństwie do Notion czy Evernote — notatki w [[Obsidian]] to zwykłe pliki tekstowe. [[Claude Code]] może je bezpośrednio czytać, edytować i tworzyć nowe, bez dodatkowej konfiguracji.

### Claude Code jako mózg
Możliwości CC wykraczające poza kodowanie:
- **File operations** — czytanie, edycja, tworzenie plików
- **Search** — przeszukiwanie zawartości i struktury projektu
- **Terminal commands** — uruchamianie skryptów, narzędzi
- **Web search** — research bezpośrednio z terminala

Tylko code intelligence (rozumienie składni, refactoring) jest specyficzne dla kodowania. Reszta to uniwersalne możliwości asystenta AI z dostępem do systemu plików.

### Skills jako trzeci filar
[[Agent Skills]] łączą wszystko w system — dają Claude Code wiedzę, procesy i wytyczne specyficzne dla workflow. Pliki markdown z instrukcjami, ładowane dynamicznie gdy potrzebne.

## 📐 PARA Method

Struktura folderów oparta na PARA (Projects, Areas, Resources, Archive):

```text
obsidian-vault/
├── 00-inbox/           # Quick captures
├── 01-projects/        # Active projects
├── 02-areas/           # Ongoing responsibilities
├── 03-resources/       # Reference material
├── 04-archive/         # Completed items
├── templates/          # Document templates
└── .claude/
    └── skills/         # Claude Code skills
```

- **Projects** — aktywne projekty z konkretnym deadlinem
- **Areas** — stałe obszary odpowiedzialności (zdrowie, finanse, kariera)
- **Resources** — materiały referencyjne na przyszłość
- **Archive** — zakończone projekty, nieaktywne tematy

## 🤖 Skills for PKM

### Research Engine
- Przeszukuje web na zadany temat
- Zbiera kluczowe informacje i źródła
- Tworzy notatkę w formacie markdown
- Zapisuje do odpowiedniego folderu w vault

### Document Generator
- Czyta wskazane notatki źródłowe
- Analizuje strukturę i kluczowe koncepty
- Aplikuje template i style guide
- Generuje gotowy dokument (np. notatki ze spotkania → dokument z action items)

### Daily Review
- Skanuje notatki z dzisiaj
- Tworzy podsumowanie dnia
- Identyfikuje połączenia z istniejącą wiedzą
- Sugeruje next actions

### Content Creator
- Analizuje notatki na dany temat
- Generuje pomysły na content
- Tworzy drafty (artykuły, posty, scripts)
- Utrzymuje spójny głos i styl

## 🔧 Integrations

Dwa podejścia do łączenia z zewnętrznymi narzędziami:

**1. MCP servers** — bezpośrednie połączenie z usługami:
- Gmail/Outlook — przez biblioteki lub serwery MCP
- Google Calendar — MCP server
- ClickUp — MCP server lub API

**2. Skills ze skryptami** (preferowane podejście):
- Własne skrypty Python/Node.js w folderze skills
- Pełna kontrola nad logiką
- Łatwe debugowanie
- Wszystko w jednym miejscu (w vault)

## 📊 Why Scripts over MCP

MCP servers ładują **wszystkie narzędzia z góry** — to context bloat. Skills ze skryptami rozwiązują ten problem:
- **Szybkość** — brak dodatkowej warstwy komunikacji
- **Kontrola** — pełna kontrola nad logiką
- **Reduced context overhead** — skrypt ładowany tylko gdy potrzebny
- **Debugowanie** — wszystko w jednym miejscu, łatwiej znaleźć problem

Make.com pozwala wystawić scenariusze jako narzędzia MCP — ciekawa opcja, ale dodatkowa warstwa. Skrypty w skills są prostsze.

## 📝 Progressive Disclosure

Koncepcja odróżniająca skills od innych podejść do rozszerzania AI. Trzy poziomy ładowania:

1. **Description** — krótki opis zawsze widoczny (jedna linijka)
2. **SKILL.md** — pełne instrukcje ładowane tylko gdy potrzebne
3. **Reference files** — dodatkowe zasoby ładowane dla konkretnych operacji

Efekt: setki skills bez przytłaczania context window. Agent specjalizuje się per sesja — ładuje tylko to co potrzebuje.

Porównanie z MCP servers: MCP ładuje **wszystkie narzędzia z góry**. Jeśli masz 50 narzędzi, wszystkie opisy zajmują miejsce w context window. To **context bloat** — marnujesz cenne miejsce na rzeczy których nie używasz. Więcej: [[Context Engineering]].

## 📒 Podsumowanie

1. **Claude Code to nie tylko kodowanie** — file operations, search, web search czynią go asystentem ogólnego przeznaczenia
2. **Obsidian + Claude Code = perfect match** — markdown + lokalne pliki + AI processing
3. **Skills dają context-efficient extensibility** — progressive disclosure zapobiega context bloat
4. **Start simple, grow gradually** — jeden skill na raz, iteruj bazując na realnych potrzebach
5. **Human touch remains essential** — AI augmentuje, nie zastępuje myślenia
6. **File-based workflow is powerful** — version control, przenośność, prywatność

## 🔗 Zasoby

- [Obsidian](https://obsidian.md) — oficjalna strona
- [Claude Code Documentation](https://docs.anthropic.com/claude-code) — dokumentacja
- [PARA Method](https://fortelabs.com/blog/para/) — system organizacji wiedzy
- [[Obsidian]] — narzędzie jako fundament
- [[Claude Code]] — primary AI assistant
- [[Agent Skills]] — system rozszerzania agenta
- [[Context Engineering]] — zarządzanie kontekstem w pracy z LLM
- [[Digital Garden]] — publikowanie bazy wiedzy

---
Template: [[templates/knowledge_note_info]]
