---
title: "Hermes Agent"
date: 2026-05-03
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "open-source", "self-improving", "messaging", "memory"]
type: tool
source: "_raw/inbox/NousResearchhermes-agent The agent that grows with you.md"
agent-created: true
agent-reviewed: 2026-05-16
summary: "Nous Research self-improving agent — TUI + Telegram/Discord/Slack/WhatsApp/Signal gateway, autonomous skill creation, FTS5 cross-session search, Honcho user modeling, runtime on a $5 VPS"
---

# Hermes Agent

`NousResearch/hermes-agent` — a **self-improving AI agent** from [Nous Research](https://nousresearch.com/). The only agent with a built-in learning loop: it creates skills from experience, improves them during use, nudges itself to persist knowledge, searches its own past conversations, and builds a deepening model of the user across sessions. Hosts on a $5 VPS, a GPU cluster, or serverless infrastructure (idle = pennies).

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

Native Windows = no; WSL2 required.

## 🗒️ Description

### 🧩 What Hermes actually does

- **Real terminal interface** — full TUI: multiline edit, slash autocomplete, history, interrupt-and-redirect, streaming tool output.
- **Lives where you do** — Telegram, Discord, Slack, WhatsApp, Signal, Email, CLI — from a single gateway process. Voice memo transcription, cross-platform conversation continuity.
- **Closed learning loop** — agent-curated memory + periodic nudges; **autonomous skill creation** after a complex task; skills self-improve during use; FTS5 session search with LLM summarization for cross-session recall; [Honcho](https://github.com/plastic-labs/honcho) dialectic user modeling. **Compatible with the `agentskills.io` open standard** (i.e. the [[Agent Skills]] / [[Vercel Skills]] family).
- **Scheduled automations** — built-in cron with delivery to any platform. Daily reports, nightly backups, weekly audits — in natural language, unattended.
- **Delegates and parallelizes** — spawns isolated subagents for parallel workstreams; Python scripts call tools via RPC, collapsing multi-step pipelines into zero-context-cost turns.
- **Runs anywhere** — 6 terminal backends: local, Docker, SSH, Daytona, Singularity, Modal. **Daytona / Modal = serverless persistence** — env hibernates when idle, wakes on demand, ~zero cost between sessions.
- **Research-ready** — batch trajectory generation, Atropos RL environments, trajectory compression for training next-gen tool-calling models.

### 🧩 Model providers (bring your own)

Nous Portal, OpenRouter (200+ models), NVIDIA NIM (Nemotron), Xiaomi MiMo, z.ai/GLM, Kimi/Moonshot, MiniMax, Hugging Face, OpenAI, your own endpoint. Switch via `hermes model` — no code changes.

### 🧩 Migration from OpenClaw

`hermes claw migrate` (interactive or `--dry-run`/`--preset user-data`/`--overwrite`) imports SOUL.md, MEMORY/USER, user skills, command allowlist, messaging configs, API keys (Telegram/OpenRouter/OpenAI/Anthropic/ElevenLabs), TTS assets, AGENTS.md.

## ✍️ Reasoning for

The most interesting bits for me:
1. **Messaging-first workflow** — an agent on Telegram that has context on my repos and answers while I'm walking. [[Claude Code]] doesn't give you that out of the box.
2. **Closed learning loop + Honcho user modeling** — this is exactly what's missing from "stateless" agents like plain Claude Code. Every session starts from zero there; here the agent adapts.
3. **Modal/Daytona serverless persistence** — idle cost ≈ 0. Perfect for fire-and-forget cron jobs like a daily LinkedIn brief for [[LinkedIn Strategy]] or a nightly digest from [[Brain]].

Risks:
- No native Windows — I'll run it on WSL2 or a VPS.
- Self-improving skills sound cool, but [[DELEGATE-52]] is a reminder: after ~20 delegated edits LLMs corrupt 25% of a document. You need checkpoints and `--dry-run` as default.

## Alternatives considered

- **[[Claude Code]]** — stronger at native coding, weaker at cross-platform messaging and memory loop
- **[[Agent Zero]]** — Linux/GUI sandbox vs Hermes TUI/messaging; a different interaction philosophy
- **[[Paperclip]]** — orchestrator for a company-of-agents, Hermes is a single self-improving agent
- **[[Ruflo]]** — agent orchestration platform (98 agents, swarm + federation), Hermes is single-agent (Ruflo is a multi-agent platform with MCP)
- **[[Everything Claude Code]]** — cross-harness perf system; in rc.1 it directly integrates Hermes as the operator workflow layer
- **OpenClaw** — direct precursor; Hermes has built-in migration (`hermes claw migrate`)

## 🔗 Resources

- Nous Research: https://nousresearch.com/
- Honcho (dialectic user modeling): https://github.com/plastic-labs/honcho
- agentskills.io — open SKILL.md standard
- [[Agent Skills]] / [[Vercel Skills]] — compatible skills ecosystem
- [[NemoClaw]] — my self-hosted inference, compatible with Hermes via NVIDIA NIM
- [[DELEGATE-52]] — why self-improving skills require an eval pipeline

---
Template: [[templates/tool]]
