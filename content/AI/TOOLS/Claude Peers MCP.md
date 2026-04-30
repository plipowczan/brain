---
title: "Claude Peers MCP"
date: 2026-04-20
enableToc: true
openToc: true
tags: ["tool", "ai", "mcp", "claude-code", "multi-agent", "coordination"]
type: tool
source: "_raw/inbox/louislvaclaude-peers-mcp Allow all your Claude Codes to message each other ad-hoc!.md"
agent-created: true
summary: "MCP that lets multiple Claude Code instances on the same machine discover each other and exchange messages in real time"
---

# Claude Peers MCP

🚀 Ad-hoc inter-agent communication dla [[Claude Code]] — pozwala wszystkim sesjom Claude Code na jednej maszynie odnajdywać się i wysyłać sobie wiadomości natychmiast. Praktyczne, gdy prowadzisz 3–5 sesji w różnych projektach i chcesz, żeby jeden Claude zapytał drugiego "co edytujesz?", zanim zrobi coś kolidującego.

## 🗒️ Description
- Broker daemon on `localhost:7899` + SQLite DB.
- Każda sesja Claude Code startuje MCP server, który rejestruje się u brokera i poll'uje co sekundę.
- Przychodzące wiadomości wchodzą bezpośrednio w sesję przez `claude/channel` protocol — Claude widzi je od razu, bez ręcznego `check_messages`.
- Broker auto-startuje przy pierwszej sesji, czyści dead peers, działa tylko lokalnie.

## Links
### Description
- Repo: https://github.com/louislva/claude-peers-mcp

### Download or use
```bash
git clone https://github.com/louislva/claude-peers-mcp.git ~/claude-peers-mcp
cd ~/claude-peers-mcp && bun install
claude mcp add --scope user --transport stdio claude-peers -- bun ~/claude-peers-mcp/server.ts
claude --dangerously-skip-permissions --dangerously-load-development-channels server:claude-peers
```

## 🧩 Tools exposed to Claude
- `list_peers` — znajdź inne sesje (scope: `machine` / `directory` / `repo`)
- `send_message` — wyślij wiadomość do peera po ID (instant via channel push)
- `set_summary` — opisz nad czym pracujesz (widoczne innym)
- `check_messages` — manualny fallback, gdy nie używasz channel mode

## 🧩 Auto-summary
Z ustawionym `OPENAI_API_KEY` każda instancja generuje krótkie podsumowanie na starcie przez `gpt-5.4-nano` (grosze). Podsumowanie bazuje na katalogu, branch'u i ostatnich plikach. Bez API key — Claude sam ustawia summary przez `set_summary`.

## 🧩 CLI
```bash
bun cli.ts status            # broker + peers
bun cli.ts peers
bun cli.ts send <id> <msg>
bun cli.ts kill-broker
```

## Reasoning for
Przydatne w [[Agentic Systems]] workflow — parallel sessions w [[Qamera AI]] / [[PLSoft]]. Zamiast "głównego orchestratora" można zrobić peer-to-peer koordynację między sesjami. Wymaga Claude Code v2.1.80+ i logowania przez claude.ai (channels nie działają na API key auth).

## Alternatives considered
- Tmux-based pair session sharing (manualnie).
- Subagenty wewnątrz jednego Claude Code (zamknięte w jednym procesie, brak cross-project).
- Louis Vain's `cc-tmux` / inne eksperymentalne rozwiązania.

## 📖 Further reading
- [[Claude Code]] — host platform
- [[Agent Skills]] — komplementarny mechanizm rozszerzania Claude Code
- [[Agentic Systems]] — projekt multi-agent architecture
- [[Harness Engineering]] — konfiguracja MCP/skills/hooks
- [[Context Engineering]] — cross-session context sharing

---
Template: [[templates/tool]]
