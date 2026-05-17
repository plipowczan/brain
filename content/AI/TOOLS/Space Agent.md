---
title: "Space Agent"
date: 2026-05-03
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "frontend-runtime", "skills", "open-source"]
type: tool
source: "_raw/inbox/agent0aispace-agent The agent that re-shapes the Space.md"
agent-created: true
summary: "Frontend-runtime agent from agent0ai — rebuilds its workspace on the fly (pages, widgets, workflows) via SKILL.md in plain text/JS"
---

# Space Agent

`agent0ai/space-agent` — an agent that **rebuilds the interface while it works**. Ask for a page, a tool, a widget, or a workflow, and the agent builds it straight into the running workspace. Created by [[Agent Zero]], it runs in the browser (tab or desktop app), directly in the frontend runtime layer.

## 🔗 Links

### Description
- Repo: https://github.com/agent0ai/space-agent
- Demo: https://space-agent.ai/ (with a guest account)
- License: open source

### Download or use

```bash
# Desktop app
# Download from github.com/agent0ai/space-agent/releases/latest

# Self-hosted server
git clone https://github.com/agent0ai/space-agent.git
cd space-agent && npm install
node space user create admin --password "change-me-now" --full-name "Admin" --groups _admin
node space serve

# Production with auto-update
node space supervise HOST=0.0.0.0 PORT=3000
```

## 🗒️ Description

### 🧩 What Space Agent actually does

- **Agent reshapes the interface** — it is not trapped in a predefined product surface; it grows new capabilities from inside the system itself and extends the Space toward whatever the user can imagine.
- **Lives in the frontend runtime** — the agent runs in the browser layer (tab/desktop app), working directly with the framework, modules, spaces, and UI it transforms.
- **Text-based agent** — new capabilities are plain `SKILL.md` files the agent can write and extend itself. Token-efficient: no bulky tool-call JSON, the agent stays in plain text + plain JavaScript within a single message.
- **Puzzle-piece modularity** — a small core, with most of Space Agent being modular pieces (add/remove/swap), not a monolith.
- **Personal → hierarchical** — from a personal assistant to a hierarchical system of users and groups; per-user work + group sharing when the team is ready.
- **Persistent admin + time travel** — admin mode as a stable control plane, Git-backed history lets you roll back changes from a user or group without killing everyone else.

### 🧩 AI-driven development

Space Agent is **developed by AI agents** — documentation included. A hierarchical `AGENTS.md` instruction system + skills + focused docs maintain ownership, architecture, workflows, and local rules so the agent understands the system well enough to maintain it autonomously. DeepWiki covers the human-readable layer.

### 🧩 Position in the ecosystem

Unlike [[Agent Zero]] (Linux sandbox + GUI canvas), Space Agent lives **inside the UI itself**. It is a different abstraction: here the user-side workspace **is** the agent's workspace. Closer to the "agent = environment" philosophy than to "agent = tool orchestrator" like [[Paperclip]].

## ✍️ Reasoning for

Value: for tasks where I need an ad-hoc tool/widget/dashboard tailored to a specific question ("show me a quick UI to browse this data") — instead of writing a React app, the agent grafts it onto my Space. The personal → hierarchical model is also interesting for [[Value Builders Tribe]] where different people need different workflows on top of one knowledge base.

Risk: a fresh project, the skills ecosystem is smaller than in the mainstream (Claude Code/Cursor). I will likely test the demo first before trusting it with anything production.

## Alternatives considered

- **[[Agent Zero]]** — sister project, full Linux sandbox instead of frontend runtime
- **[[Claude Code]] + custom React skills** — a longer road, but with the Anthropic ecosystem
- **[[Paperclip]]** — agent orchestration at the company level, not a single workspace
- **Custom dashboard apps** — full control, zero flexibility

## 🔗 Resources

- [[Agent Zero]] — creator of Space Agent, same team (`agent0ai`)
- [[Agent Skills]] — open SKILL.md standard
- [[Agentic Systems]] — multi-agent architectures in my projects
- [`commands/params.yaml`](https://github.com/agent0ai/space-agent/blob/main/commands/params.yaml) — full CLI surface

---
Template: [[templates/tool]]
