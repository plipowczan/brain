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
status-checked: 2026-11-13
project-status: active
---
# Cursor

> [!success] Status check 2026-11-13 — active
> **Verdict:** Changelog entries on 2026-10-06, 10-13, 10-16, 10-20, 11-05 and 11-06, and the desktop app is at 3.30.
> **Latest release:** Desktop app 3.30, marked 'Latest' on cursor.com/download (the page shows no release date). · **last dated update:** 2026-11-06 · **licence:** Proprietary SaaS plus a closed-source desktop app (VS Code fork).
> **Source:** https://cursor.com/changelog
> **Changed since this note:** Material: (1) ownership: SpaceX acquired Anysphere, deal closed 2026-08-14, with Grok models trained jointly (Grok 4.6, then Grok 4.7 announced 2026-09-21); (2) pricing: since 2026-10-12 new customers get X Subscription tiers (Plus \$8, Premium \$30, Super \$100, Ultra \$200), where Claude…

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

- [[Cursor Plugins]] — the official plugin marketplace and manifest spec (skills, rules, MCP in one package)
---
Template: [[templates/tool]]
