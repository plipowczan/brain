---
title: "Paperclip"
date: 2026-05-03
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "orchestration", "company-of-agents", "open-source", "self-hosted"]
type: tool
source: "_raw/inbox/paperclipaipaperclip Open-source orchestration for zero-human companies.md"
agent-created: true
summary: "paperclipai/paperclip — Node.js + React control plane for running a 'company' of AI agents: org chart, goals, budgets, governance, heartbeats, audit log; bring-your-own-agent (Claude Code/Codex/Cursor/OpenClaw/HTTP)"
---

# Paperclip

`paperclipai/paperclip` — **open-source orchestration for zero-human companies**. If OpenClaw is an *employee*, Paperclip is the *company*. A Node.js server + React UI that orchestrates a team of AI agents: you define a goal, hire agents (any model, any runtime), approve the strategy, set budgets, and ship.

It looks like a task manager — under the hood it has org charts, budgets, governance, goal alignment, and agent coordination. **"Manage business goals, not pull requests."**

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

# Manually
git clone https://github.com/paperclipai/paperclip.git
cd paperclip && pnpm install && pnpm dev
# API server: http://localhost:3100
```

Requirements: Node 20+, pnpm 9.15+. Tailscale as the solo-deploy mobile path; then production with your own Postgres + Vercel.

## 🗒️ Description

### 🧩 Three steps of use

| # | Step | Example |
|---|------|---------|
| 01 | Define the goal | *"Build the #1 AI note-taking app to $1M MRR."* |
| 02 | Hire the team | CEO, CTO, engineers, designers, marketers — any bot, any provider |
| 03 | Approve and run | Review strategy, set budgets, hit go, monitor from dashboard |

Adapters (as of 2026-05): **OpenClaw, [[Claude Code]], Codex, [[Cursor]], Bash, HTTP**. *"If it can receive a heartbeat, it's hired."*

### 🧩 What Paperclip solves

- 20 open Claude Code tabs → ticket-based tasks, threaded conversations, persistence across reboots
- Manual context-gathering → context flows task → project → company goal automatically
- Folders of disorganized agent configs → org chart + ticketing + delegation + governance out of the box
- Runaway loops burning $$$ in tokens → cost tracking, throttling, budget hard-stops
- Recurring jobs you have to remember → heartbeats + cron + management supervision

### 🧩 Hard orchestration details (things you can't do well by hand)

- **Atomic execution** — task checkout + budget enforcement are atomic (no double-work, no runaway spend)
- **Persistent agent state** — agents resume task context between heartbeats, they don't restart from scratch
- **Runtime skill injection** — agents learn Paperclip workflows + project context at runtime
- **Governance with rollback** — approval gates, revisioned config changes, safe rollback
- **Goal-aware execution** — each task carries the full goal ancestry — the agent sees *why*, not just the title
- **Portable company templates** — export/import orgs (with secret scrubbing + collision handling)
- **True multi-company isolation** — one instance, many companies, separate data and audit trail

### 🧩 12 systems under the hood

Identity & Access · Org Chart & Agents · Work & Tasks · Heartbeat Execution · Workspaces & Runtime · Governance & Approvals · Budget & Cost Control · Routines & Schedules · Plugins · Secrets & Storage · Activity & Events · Company Portability.

### 🧩 What Paperclip is *not*

- Not a chatbot — agents have jobs, not chat windows.
- Not an agent framework — it doesn't tell you how to build an agent, it tells you how to run a company of them.
- Not a workflow builder — no drag-and-drop; it models companies (org charts, goals, budgets, governance).
- Not a prompt manager — agents bring their own prompts/models/runtimes.
- Not a single-agent tool — it's for teams. 1 agent → unnecessary. 20 agents → critical.
- Not code review — work orchestration, not PRs.

## ✍️ Reasoning for

The strongest things for me:
1. **Mobile-first management** — Tailscale + phone = realistically controllable autonomous businesses. Fits my [[Principles]] philosophy (work that brings income while you sleep).
2. **Budget hard-stops** — at [[PLSoft]] I've chased runaway loops a few times; here that wouldn't happen.
3. **Multi-company isolation with one deployment** — fits my portfolio: [[Qamera AI]] / [[PLSoft]] / [[Value Builders]] / [[Brain]] = 4 companies on one instance.
4. **Heartbeats vs continuous loop** — cheaper, auditable, easy to govern.

Risks:
- A fresh project with a small user base; production deploy = early-adopter pain.
- Only makes sense at >5 agents. For 1-2 agents it's overhead without benefit.
- Bring-your-own-ticket-system is on the roadmap — today you have to live in Paperclip's UI, not Linear/ClickUp.

## Alternatives considered

- **[[Claude Code]] on its own** — no governance, no budgets, context disappears on restart
- **n8n / Make / Zapier** — workflow engines, they don't model a company/goals/budgets
- **[[Archon]]** — YAML workflows per-repo, not a cross-company control plane
- **[[Hermes Agent]]** — single self-improving agent, Paperclip orchestrates many
- **[[Agentic Systems]]** (my own architecture sketch) — Paperclip is a ready-made implementation of a similar idea

## 🔗 Resources

- Roadmap: bring-your-own-ticket-system, Clipmart (one-click company templates)
- [[Claude Code]] / [[Cursor]] / OpenClaw — supported adapters
- [[Agentic Systems]] — my earlier thinking on multi-agent architectures
- [[Agentic Coding]] — the paradigm Paperclip layers a "company" on top of
- [[Autonomous Sales Agent Playbook]] — the economics Paperclip enables (governance + budgets instead of a SaaS stack)

---
Template: [[templates/tool]]
