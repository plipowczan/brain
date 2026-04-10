---
title: "Cursor"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "ai", "ide", "coding-agents"]
type: tool
agent-reviewed: 2026-04-10
agent-created: true
summary: "AI-powered IDE based on VS Code with built-in coding agents"
---
# Cursor

AI-powered IDE built on VS Code with integrated coding agents.

## Links
### Description
Fork of Visual Studio Code with native AI capabilities — inline completions, chat, and autonomous agent mode.
### Download or use
[cursor.com](https://cursor.com)

## Reasoning for
Good for visual development work and when I need IDE features alongside AI assistance. Used heavily in [[Qamera AI]] development.

Key features:
- Agent mode — autonomous file editing across the project
- Composer — multi-file editing with context
- Built-in model selection (Claude, GPT-4o, etc.)

## How I use it
Complementary to [[Claude Code]] — Cursor for visual/frontend work, Claude Code for backend/architecture/batch operations.

## Alternatives considered
- [[Visual Studio Code]] + Copilot — more stable but less AI-native
- Windsurf — similar concept, less mature

## 🚀 Key insights — ukryte 80% możliwości

Większość użytkowników wykorzystuje zaledwie **20% możliwości** Cursor. Kluczowe obszary:

### Context management — najcenniejszy zasób
- **Context window to najcenniejsza nieruchomość** — każde aktywne MCP zjada ogromny kawałek, nawet gdy go nie używasz
- `.cursorrules` dla project conventions — agent zna konwencje projektu bez powtarzania w każdym prompcie
- **Reguła 60%**: powyżej 60% zapełnienia context window agent zaczyna "zapominać" wcześniejsze instrukcje. >80% = definitywny restart
- Disable all MCP na starcie, włączaj on-demand — zwiększa długość konwersacji 2-3x
- `@` commands (Files, Docs, Branch, Browser) — precyzyjne dodawanie kontekstu zamiast opisywania słowami

### Worktrees — feature isolation
Git worktrees w Cursor = izolowane kopie projektu na osobnych branchach. Pozwalają testować **3 różne podejścia jednocześnie** (różne modele lub 3x ten sam model). Każda wersja na osobnym porcie. Po porównaniu — Apply najlepszego do głównego brancha. Setup: `.cursor/worktrees.json` z auto-install + auto-dev-server.

### Agent mode workflows
- **Dwu-modelowy workflow**: GPT-5 planuje (szczegółowy plan z edge cases), przełącz na Claude Sonnet do implementacji (szybkość). Oszczędność ~70% czasu vs. jeden model do obu
- **Agent steering**: queue messages ("Send after current message") do kolejkowania zadań bez mikro-managementu
- **Structured prompts**: User stories + design patterns = 80% kodu z pierwszej iteracji do produkcji

### Keyboard shortcuts — fundament flow
- `Cmd+E` (Ctrl+E) — przełącz edytor/agent natychmiast
- `Shift+Tab` — cyklicznie Ask/Agent/Plan/Debug
- `Cmd+J` (Ctrl+J) — terminal on/off
- `Cmd+B` (Ctrl+B) — sidebar on/off
- Usage summary: Settings → Agents → Always (monitoruj zużycie kredytów)

### Pro tips:
- Zaindeksuj dokumentację bibliotek (Settings → Indexing and Docs) — eliminuje halucynacje i "cutoff date" problem
- Early Access (Settings → Beta) — nowe features miesiące wcześniej
- Completion sounds — przestań bezczynnie czekać
- Custom commands (`.cursor/commands/`) — importuj z [[Claude Code]], reusable prompt templates
- Duplicate chat — klonuj dobrze przygotowany kontekst zamiast re-primingu

## Resources
[Cursor Documentation](https://docs.cursor.com)

---
Template: [[templates/tool]]
