---
title: "Paperclip"
date: 2026-05-03
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "orchestration", "company-of-agents", "open-source", "self-hosted"]
type: tool
source: "_raw/inbox/paperclipaipaperclip Open-source orchestration for zero-human companies.md"
agent-created: true
summary: "paperclipai/paperclip — Node.js + React control plane do prowadzenia 'firmy' z agentów AI: org chart, goals, budgety, governance, heartbeats, audit log; bring-your-own-agent (Claude Code/Codex/Cursor/OpenClaw/HTTP)"
---

# Paperclip

`paperclipai/paperclip` — **open-source orchestration dla zero-human companies**. Jeśli OpenClaw to *employee*, Paperclip to *firma*. Node.js server + React UI, który orkiestruje zespół agentów AI: definiujesz cel, zatrudniasz agentów (any model, any runtime), zatwierdzasz strategię, ustawiasz budżety i jedziesz.

Wygląda jak task manager — pod spodem ma org charty, budżety, governance, goal alignment i agent coordination. **"Manage business goals, not pull requests."**

## 🔗 Links

### Description
- Repo: https://github.com/paperclipai/paperclip
- Docs: https://paperclip.ing/docs
- Discord: https://discord.gg/m4HZY7xNG3
- License: open source, self-hosted, no account required

### Download or use

```bash
# Quickstart (trusted local loopback, embedded Postgres)
npx paperclipai onboard --yes

# Authenticated mode
npx paperclipai onboard --yes --bind lan
npx paperclipai onboard --yes --bind tailnet

# Manualnie
git clone https://github.com/paperclipai/paperclip.git
cd paperclip && pnpm install && pnpm dev
# API server: http://localhost:3100
```

Wymagania: Node 20+, pnpm 9.15+. Tailscale jako solo-deploy mobile path; potem produkcyjnie własne Postgres + Vercel.

## 🗒️ Description

### 🧩 Trzy kroki użycia

| # | Step | Example |
|---|------|---------|
| 01 | Define the goal | *"Build the #1 AI note-taking app to $1M MRR."* |
| 02 | Hire the team | CEO, CTO, engineers, designers, marketers — any bot, any provider |
| 03 | Approve and run | Review strategy, set budgets, hit go, monitor from dashboard |

Adaptery (na 2026-05): **OpenClaw, [[Claude Code]], Codex, [[Cursor]], Bash, HTTP**. *"If it can receive a heartbeat, it's hired."*

### 🧩 Co Paperclip rozwiązuje

- 20 otwartych Claude Code tabów → ticket-based tasks, threaded conversations, persistence przez reboot
- Manual context-gathering → context płynie task → project → company goal automatycznie
- Folders of disorganized agent configs → org chart + ticketing + delegation + governance out of the box
- Runaway loops palące $$$ tokenów → cost tracking, throttling, budget hard-stops
- Recurring jobs które trzeba pamiętać → heartbeats + cron + management supervision

### 🧩 Hard orchestration details (czego ręcznie nie zrobisz dobrze)

- **Atomic execution** — task checkout + budget enforcement są atomowe (no double-work, no runaway spend)
- **Persistent agent state** — agenci wznawiają task context między heartbeatami, nie restartują od zera
- **Runtime skill injection** — agenci uczą się Paperclip workflowów + project context w runtime
- **Governance with rollback** — approval gates, revisioned config changes, safe rollback
- **Goal-aware execution** — task niesie pełną ancestry celu — agent widzi *why*, nie tylko title
- **Portable company templates** — export/import orgów (z secret scrubbing + collision handling)
- **True multi-company isolation** — jedna instancja, wiele firm, oddzielne dane i audit trail

### 🧩 12 systemów pod maską

Identity & Access · Org Chart & Agents · Work & Tasks · Heartbeat Execution · Workspaces & Runtime · Governance & Approvals · Budget & Cost Control · Routines & Schedules · Plugins · Secrets & Storage · Activity & Events · Company Portability.

### 🧩 Czym Paperclip *nie* jest

- Nie chatbot — agenci mają jobs, nie chat windows.
- Nie agent framework — nie mówi jak budować agenta, mówi jak prowadzić firmę z nich.
- Nie workflow builder — żadnego drag-and-drop; modeluje firmy (org charty, goals, budgety, governance).
- Nie prompt manager — agenci przynoszą swoje prompty/modele/runtime'y.
- Nie single-agent tool — dla teamów. 1 agent → niepotrzebne. 20 agentów → kluczowe.
- Nie code review — orkiestracja pracy, nie PR-ów.

## ✍️ Reasoning for

Dla mnie najmocniejsze rzeczy:
1. **Mobile-first management** — Tailscale + telefon = realnie kontrolowalne autonomous biznesy. Pasuje do mojej filozofii [[Principles]] (work that brings income while you sleep).
2. **Budget hard-stops** — w [[PLSoft]] kilka razy goniłem runaway loop'y; tu by się to nie zdarzyło.
3. **Multi-company isolation z jednym deploymentem** — pasuje do mojego portfolio: [[Qamera AI]] / [[PLSoft]] / [[Value Builders]] / [[Brain]] = 4 firmy w jednej instancji.
4. **Heartbeats vs continuous loop** — tańsze, audytowalne, łatwe do governance'u.

Ryzyka:
- Świeży projekt, mała baza userów; production deploy = early adopter pain.
- Sensowne dopiero przy >5 agentach. Dla 1-2 agentów to overhead bez benefitu.
- Bring-your-own-ticket-system na roadmapie — dziś trzeba żyć w UI Paperclipa, nie w Linear/ClickUp.

## Alternatives considered

- **[[Claude Code]] sam** — żadnej governance, żadnych budgetów, kontekst znika z restart'em
- **n8n / Make / Zapier** — workflow engines, nie modelują firmy/celów/budżetów
- **[[Archon]]** — YAML workflows per-repo, nie cross-company control plane
- **[[Hermes Agent]]** — single self-improving agent, Paperclip orkiestruje wielu
- **[[Agentic Systems]]** (mój własny szkic architektury) — Paperclip to gotowa implementacja podobnego pomysłu

## 🔗 Resources

- Roadmapa: bring-your-own-ticket-system, Clipmart (one-click company templates)
- [[Claude Code]] / [[Cursor]] / OpenClaw — wspierane adaptery
- [[Agentic Systems]] — moje wcześniejsze przemyślenia o multi-agent architectures
- [[Agentic Coding]] — paradygmat, do którego Paperclip dokłada warstwę "company"
- [[Autonomous Sales Agent Playbook]] — ekonomia, którą Paperclip ułatwia (governance + budżety zamiast SaaS stack)

---
Template: [[templates/tool]]
