---
title: "Agent Zero"
date: 2026-05-03
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "framework", "open-source", "linux"]
type: tool
source: "_raw/inbox/agent0aiagent-zero Agent Zero AI framework.md"
agent-created: true
summary: "Open agentic framework — Linux-native AI agent z terminalem, browserem, Office canvas i multi-agent cooperation; baza pod Space Agent"
---

# Agent Zero

`agent0ai/agent-zero` — dynamiczny, organiczny framework dla autonomicznych agentów AI. Daje agentowi **cały system Linux jako narzędzie**: terminal, code execution, files, memory, Playwright browser, plugins i tools które uczy się tworzyć w trakcie pracy. Nie jest predefiniowanym agentem do jednego zadania — jest transparentnym, rozszerzalnym środowiskiem.

## 🔗 Links

### Description
- Repo: https://github.com/agent0ai/agent-zero
- Web: https://agent-zero.ai/
- License: open source

### Download or use

```bash
# macOS / Linux
curl -fsSL https://bash.agent-zero.ai | bash

# Windows PowerShell
irm https://ps.agent-zero.ai | iex

# Docker
docker run -p 80:80 -v a0_usr:/a0/usr agent0ai/agent-zero
```

A0 CLI Connector (`a0`) pozwala uruchomić agenta na hoście poza kontenerem — Read+Write + RCE Tool dają mu dostęp do realnych plików projektu, nie tylko sandboxa.

## 🗒️ Description

### 🧩 Co Agent Zero naprawdę robi

- **Computer as a Tool** — Kali Linux jako workspace. Agent inspectuje pliki, pisze kod, instaluje narzędzia, scriptuje, browsuje i adaptuje workflow w trakcie zadania.
- **Universal Canvas** — prawy panel z shared working surfaces: browser sessions, Office files, plugin panels. Praca agenta jest *visible* — możesz interweniować zanim mała pomyłka stanie się dużą.
- **Cowork on Office Documents** — Collabora Online + WOPI dla DOCX/XLSX/PPTX, native XLSX charts, version history.
- **Native Browser** — Playwright z visible WebUI viewer; agent działa przez typed page references (`[link 3]`, `[button 6]`). Annotate mode pozwala kliknąć element i zostawić actionable comment dla agenta. Wspiera Chrome extensions.
- **OAuth z Codex/OpenAI plan** — używaj swojego planu zamiast osobnego API key; Gemini CLI i Claude Code w drodze.
- **Skills via SKILL.md standard** — portable, kompatybilne z [[Vercel Skills]] / [[Agent Skills]] ecosystem, aktywowane globalnie/per-project/per-chat.
- **Agent Profiles** — przełącz behavior, prompt overrides, tools, model bez przepisywania całego systemu.
- **Multi-Agent Cooperation** — każdy agent może spawnować subordinate agentów ze swoim kontekstem; superior dostaje raporty.

### 🧩 Pozycja w ekosystemie

Agent Zero jest **frameworkiem agentów**, nie harness'em do codingu jak [[Claude Code]]. Najbliżsi konkurenci to [[Hermes Agent]] (Nous Research) i [[Superpowers]] — ale Agent Zero stawia mocniej na **GUI + Linux sandbox + Office canvas**, zamiast TUI/messaging gateway.

[[Space Agent]] (`agent0ai/space-agent`) jest stworzony **przez** Agent Zero — frontend-runtime ekspansja tego samego DNA, gdzie agent przebudowuje workspace zamiast tylko go używać.

## ✍️ Reasoning for

Dla mnie ciekawa alternatywa dla setup'u Claude Code + custom MCP servery, kiedy chcę żeby agent miał pełny system operacyjny do dyspozycji (np. analiza danych, eksperymenty z toolingiem, browser automation z annotate mode dla [[Qamera AI]]). Docker isolation + opcjonalny CLI connector daje mi kontrolę nad tym, kiedy puszczam agenta na "real" filesystem.

Słaby punkt: większy overhead niż lekkie harness'y typu [[Karpathy Skills]] czy [[Archon]] — payoff dopiero przy zadaniach wymagających długiego, wielonarzędziowego workflow z GUI.

## Alternatives considered

- **[[Claude Code]] + MCP** — lżejszy, ale brak natywnego Linux sandboxa i Office canvas
- **[[Hermes Agent]]** — podobna filozofia (multi-platform, skills, learning loop), ale TUI/messaging-first zamiast GUI/canvas
- **[[Superpowers]]** — methodology-first, nie środowisko z OS-em
- **OpenClaw** — porównywalny scope, ale Agent Zero ma bardziej dopracowany browser + Office workflow

## 🔗 Resources

- [[Space Agent]] — siostrzany projekt zbudowany na Agent Zero, frontend runtime
- [[Agent Skills]] — open SKILL.md standard kompatybilny z Agent Zero
- [[Agentic Systems]] — multi-agent architectures
- [[Harness Engineering]] — alternatywne podejście do strukturyzacji pracy AI
- A0 CLI Connector docs: https://github.com/agent0ai/agent-zero/blob/main/docs/guides/a0-cli-connector.md

---
Template: [[templates/tool]]
