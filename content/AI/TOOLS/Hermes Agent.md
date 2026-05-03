---
title: "Hermes Agent"
date: 2026-05-03
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "open-source", "self-improving", "messaging", "memory"]
type: tool
source: "_raw/inbox/NousResearchhermes-agent The agent that grows with you.md"
agent-created: true
summary: "Nous Research self-improving agent — TUI + Telegram/Discord/Slack/WhatsApp/Signal gateway, autonomous skill creation, FTS5 cross-session search, Honcho user modeling, runtime na $5 VPS"
---

# Hermes Agent

`NousResearch/hermes-agent` — **self-improving AI agent** od [Nous Research](https://nousresearch.com/). Jedyny agent z built-in learning loop: tworzy skille z doświadczenia, ulepsza je w trakcie użycia, sam siebie nudge'uje do persistowania wiedzy, przeszukuje własne past conversations i buduje pogłębiony model usera między sesjami. Hostuje się na $5 VPS, GPU clusterze albo serverless infrastrukturze (idle = grosze).

## 🔗 Links

### Description
- Repo: https://github.com/NousResearch/hermes-agent
- Docs: https://hermes-agent.nousresearch.com/docs/
- License: open source

### Download or use

```bash
# Linux / macOS / WSL2 / Termux
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
source ~/.bashrc
hermes              # interactive CLI
hermes setup        # full wizard
hermes gateway      # messaging gateway
```

Native Windows = no; trzeba WSL2.

## 🗒️ Description

### 🧩 Co Hermes naprawdę robi

- **Real terminal interface** — pełny TUI: multiline edit, slash autocomplete, history, interrupt-and-redirect, streaming tool output.
- **Lives where you do** — Telegram, Discord, Slack, WhatsApp, Signal, Email, CLI — z jednego gateway process. Voice memo transcription, cross-platform conversation continuity.
- **Closed learning loop** — agent-curated memory + periodic nudges; **autonomous skill creation** po complex task; skille self-improve podczas użycia; FTS5 session search z LLM summarization dla cross-session recall; [Honcho](https://github.com/plastic-labs/honcho) dialectic user modeling. **Compatible z `agentskills.io` open standard** (czyli rodzina [[Agent Skills]] / [[Vercel Skills]]).
- **Scheduled automations** — built-in cron z delivery na dowolną platformę. Daily reports, nightly backups, weekly audits — naturalny język, unattended.
- **Delegates and parallelizes** — spawn isolated subagentów dla parallel workstreamów; Python scripty wołają tools przez RPC, kolapsując multi-step pipeline'y do zero-context-cost turns.
- **Runs anywhere** — 6 terminal backends: local, Docker, SSH, Daytona, Singularity, Modal. **Daytona / Modal = serverless persistence** — env hibernuje w idle, wstaje on-demand, ~zero koszt między sesjami.
- **Research-ready** — batch trajectory generation, Atropos RL environments, trajectory compression dla treningu next-gen tool-calling models.

### 🧩 Model providery (bring your own)

Nous Portal, OpenRouter (200+ modeli), NVIDIA NIM (Nemotron), Xiaomi MiMo, z.ai/GLM, Kimi/Moonshot, MiniMax, Hugging Face, OpenAI, własny endpoint. Switch przez `hermes model` — bez zmian w kodzie.

### 🧩 Migracja z OpenClaw

`hermes claw migrate` (interactive lub `--dry-run`/`--preset user-data`/`--overwrite`) importuje SOUL.md, MEMORY/USER, user-skille, command allowlist, messaging configs, API keys (Telegram/OpenRouter/OpenAI/Anthropic/ElevenLabs), TTS assets, AGENTS.md.

## ✍️ Reasoning for

Najciekawsze dla mnie:
1. **Messaging-first workflow** — agent na Telegramie, który ma kontekst moich repo i odpowiada w trakcie spaceru. Tego nie daje [[Claude Code]] out-of-the-box.
2. **Closed learning loop + Honcho user modeling** — to jest dokładnie to, czego brakuje w "stateless" agentach typu plain Claude Code. Każda sesja zaczyna od zera; tutaj agent się dopasowuje.
3. **Modal/Daytona serverless persistence** — koszt idle ≈ 0. Idealne pod fire-and-forget cron jobs typu daily LinkedIn brief dla [[LinkedIn Strategy]] albo nightly digest z [[Brain]].

Ryzyka:
- Brak natywnego Windows — uruchomię w WSL2 albo VPS.
- Self-improving skille brzmią cool, ale [[DELEGATE-52]] przypomina: po ~20 delegowanych edit'ach LLM-y psują 25% dokumentu. Trzeba mieć checkpointy i `--dry-run` jako default.

## Alternatives considered

- **[[Claude Code]]** — silniejszy w native coding, słabszy w cross-platform messaging i memory loop
- **[[Agent Zero]]** — Linux/GUI sandbox vs Hermes TUI/messaging; inna filozofia interakcji
- **[[Paperclip]]** — orkiestrator company-of-agents, Hermes to single self-improving agent
- **OpenClaw** — direct precursor; Hermes ma wbudowaną migrację (`hermes claw migrate`)

## 🔗 Resources

- Nous Research: https://nousresearch.com/
- Honcho (dialectic user modeling): https://github.com/plastic-labs/honcho
- agentskills.io — open SKILL.md standard
- [[Agent Skills]] / [[Vercel Skills]] — kompatybilny ecosystem skilli
- [[NemoClaw]] — moja inferencja self-hosted, kompatybilna z Hermes przez NVIDIA NIM
- [[DELEGATE-52]] — dlaczego self-improving skills wymagają eval pipeline'u

---
Template: [[templates/tool]]
