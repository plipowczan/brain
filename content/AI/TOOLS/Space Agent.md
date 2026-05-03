---
title: "Space Agent"
date: 2026-05-03
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "frontend-runtime", "skills", "open-source"]
type: tool
source: "_raw/inbox/agent0aispace-agent The agent that re-shapes the Space.md"
agent-created: true
summary: "Frontend-runtime agent z agent0ai — przebudowuje swój workspace w locie (pages, widgets, workflows) przez SKILL.md w plain text/JS"
---

# Space Agent

`agent0ai/space-agent` — agent, który **przebudowuje interfejs w trakcie pracy**. Poproś o stronę, narzędzie, widget czy workflow, a agent buduje to wprost do działającego workspace. Stworzony przez [[Agent Zero]], uruchamiany w przeglądarce (tab albo desktop app), bezpośrednio w warstwie frontend runtime.

## 🔗 Links

### Description
- Repo: https://github.com/agent0ai/space-agent
- Demo: https://space-agent.ai/ (z guest account)
- License: open source

### Download or use

```bash
# Desktop app
# Pobierz z github.com/agent0ai/space-agent/releases/latest

# Self-hosted server
git clone https://github.com/agent0ai/space-agent.git
cd space-agent && npm install
node space user create admin --password "change-me-now" --full-name "Admin" --groups _admin
node space serve

# Production z auto-update
node space supervise HOST=0.0.0.0 PORT=3000
```

## 🗒️ Description

### 🧩 Co Space Agent naprawdę robi

- **Agent reshapes the interface** — nie jest uwięziony w predefiniowanym product surface; rozwija nowe capabilities z poziomu samego systemu i rozszerza Space w stronę whatever the user can imagine.
- **Lives in frontend runtime** — agent działa w warstwie browsera (tab/desktop app), pracuje bezpośrednio z framework, modules, spaces i UI, które przekształca.
- **Text-based agent** — nowe capabilities to plain `SKILL.md` files które agent może sam pisać i rozszerzać. Token-efficient: brak bulky tool-call JSON, agent zostaje w plain text + plain JavaScript w jednej wiadomości.
- **Puzzle-piece modularity** — core mały, większość Space Agent to modular pieces (add/remove/swap), nie monolit.
- **Personal → hierarchical** — od osobistego asystenta po hierarchiczny system użytkowników i grup; per-user work + group sharing kiedy zespół jest gotowy.
- **Persistent admin + time travel** — admin mode jako stable control plane, Git-backed history pozwala rollbackować zmiany usera lub grupy bez ubicia wszystkich.

### 🧩 AI-driven development

Space Agent jest **rozwijany przez agentów AI** — łącznie z dokumentacją. Hierarchiczny `AGENTS.md` instruction system + skills + focused docs trzymają ownership, architecture, workflows i local rules tak, żeby agent rozumiał system na tyle, żeby utrzymywać go autonomicznie. DeepWiki pokrywa human-readable warstwę.

### 🧩 Pozycja w ekosystemie

W przeciwieństwie do [[Agent Zero]] (Linux sandbox + GUI canvas) Space Agent żyje **w samej UI**. To inna abstrakcja: tutaj user-side workspace **jest** workspace agenta. Bliżej do filozofii "agent = środowisko" niż do "agent = orkiestrator narzędzi" jak [[Paperclip]].

## ✍️ Reasoning for

Wartość: dla zadań gdzie potrzebuję ad-hoc tool/widget/dashboard pod konkretne pytanie ("pokaż mi szybko UI do przeglądania tych danych") — zamiast pisać React app, agent dokleja go do mojego Space. Personal → hierarchical model jest też ciekawy dla [[Value Builders Tribe]] gdzie różne osoby potrzebują różnych workflow w jednej bazie.

Ryzyko: świeży projekt, ekosystem skilli mniejszy niż w mainstream'ie (Claude Code/Cursor). Pewnie najpierw przetestuję demo, zanim dam mu coś produkcyjnego.

## Alternatives considered

- **[[Agent Zero]]** — siostrzany projekt, full Linux sandbox zamiast frontend runtime
- **[[Claude Code]] + custom React skills** — dłuższa droga, ale z ekosystemem Anthropic
- **[[Paperclip]]** — orkiestracja agentów na poziomie firmy, nie pojedynczego workspace
- **Custom dashboard apps** — pełna kontrola, zerowa elastyczność

## 🔗 Resources

- [[Agent Zero]] — twórca Space Agent, ten sam zespół (`agent0ai`)
- [[Agent Skills]] — open SKILL.md standard
- [[Agentic Systems]] — multi-agent architectures w moich projektach
- [`commands/params.yaml`](https://github.com/agent0ai/space-agent/blob/main/commands/params.yaml) — pełen CLI surface

---
Template: [[templates/tool]]
