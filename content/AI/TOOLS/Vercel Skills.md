---
title: "Vercel Skills"
date: 2026-04-29
enableToc: true
openToc: true
tags: ["tool", "ai", "claude-code", "skills", "cli", "open-source"]
type: tool
source: "_raw/inbox/vercel-labsskills The open agent skills tool.md"
agent-created: true
summary: "npx skills — CLI for the open agent skills ecosystem, installs SKILL.md from any repo into 50+ agents (Claude Code, Codex, Cursor, OpenCode...)"
---
# Vercel Skills

`vercel-labs/skills` — CLI for the open [[Agent Skills]] ecosystem. The command `npx skills add <repo>` installs skills from any repo (GitHub, GitLab, local path) into any of 50+ supported coding agents. It is Vercel's answer to fragmentation — every agent has a different path for skills (`~/.claude/skills/`, `~/.cursor/skills/`, `~/.config/opencode/skills/`...), and Skills CLI abstracts this through symlinks or copies.

An implementation of the standard described at [agentskills.io](https://agentskills.io/). Skills discovery via [skills.sh](https://skills.sh/).

## 🔗 Links

### Description
- Repo: https://github.com/vercel-labs/skills
- Spec: https://agentskills.io/
- Directory: https://skills.sh/
- Vercel Agent Skills repo: https://github.com/vercel-labs/agent-skills
- License: open source (Vercel Labs)

### Download or use

```bash
# Zero install — npx
npx skills add vercel-labs/agent-skills

# Full GitHub URL
npx skills add https://github.com/vercel-labs/agent-skills

# A specific skill from a repo
npx skills add https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines

# Local path
npx skills add ./my-local-skills

# Other commands
npx skills list                  # list installed
npx skills find typescript       # interactive or keyword search
npx skills update                # update to latest
npx skills remove <skill>        # remove
npx skills init my-skill         # generate a SKILL.md template
```

## 🗒️ Description

### 🧩 What it solves

Every coding agent has its own convention for skills:

| Agent | Project path | Global path |
|-------|-------------|-------------|
| Claude Code | `.claude/skills/` | `~/.claude/skills/` |
| Cursor | `.agents/skills/` | `~/.cursor/skills/` |
| OpenCode | `.agents/skills/` | `~/.config/opencode/skills/` |
| Codex | `.agents/skills/` | `~/.codex/skills/` |
| GitHub Copilot | `.agents/skills/` | `~/.copilot/skills/` |
| Gemini CLI | `.agents/skills/` | `~/.gemini/skills/` |
| ... | (50+ agents) | ... |

The CLI auto-detects installed agents on the machine and installs to all of them at once. Symlink mode keeps a single canonical copy, the agent points to it — updating one skill propagates everywhere.

### 🧩 Project scope vs global

| Scope | Flag | Location | Use case |
|-------|------|---------|----------|
| **Project** | (default) | `./<agent>/skills/` | Committed with the project, shared with the team |
| **Global** | `-g` | `~/<agent>/skills/` | Available everywhere |

### 🧩 SKILL.md format

```yaml
---
name: my-skill
description: What this skill does and when to use it
metadata:
  internal: true   # optional, hidden unless INSTALL_INTERNAL_SKILLS=1
---

# My Skill

Instructions for the agent...
```

Required: `name` (lowercase, hyphens), `description`. Skills are generally compatible across agents, but some features are agent-specific (`allowed-tools`, `context: fork`, hooks — full matrix in the README).

### 🧩 Discovery and plugin marketplace compat

The CLI searches for skills in 50+ standard locations (`skills/`, `.claude/skills/`, `.cursor/skills/`, etc.) and also parses Claude Code plugin manifests (`.claude-plugin/marketplace.json`, `.claude-plugin/plugin.json`). That makes Vercel Skills compatible with the [Claude Code plugin marketplace](https://code.claude.com/docs/en/plugin-marketplaces) — you can consume skills from other people's plugins through `npx skills`.

### 🧩 Bulk and CI/CD

```bash
# Everything to everything, no prompts
npx skills add vercel-labs/agent-skills --all

# Specific skills to specific agents
npx skills add vercel-labs/agent-skills --skill frontend-design --skill skill-creator -a claude-code -a opencode

# CI-friendly (no prompts)
npx skills add vercel-labs/agent-skills --skill frontend-design -g -a claude-code -y
```

Telemetry is off in CI automatically. `DO_NOT_TRACK=1` optional.

## ✍️ Reasoning for

For me this is a complement to what I already have in [[Brain]] — my workflow skills (ingest, compile, reindex...) live in `.claude/skills/` and are specialized for this vault. Vercel Skills won't replace that, but it gives me a cheap way to **consume** community skills (frontend-design, skill-creator, web-design-guidelines from `vercel-labs/agent-skills`) without copy-paste.

The value is mostly in three things:
1. **Multi-agent install** — when I test the same skill on Claude Code and Cursor (I have both) with a single `npx skills add`, I don't copy by hand
2. **Plugin marketplace compat** — compatibility with Anthropic plugins without vendor lock-in
3. **`npx skills init`** — generates a SKILL.md template, saves boilerplate

Weak point: `npx` overhead on every install (downloads the CLI). For mass installs, global is better — `npm i -g skills` probably also works, although the README recommends `npx`.

## Alternatives considered

- **[[Agent Skills]] (Anthropic native)** — works only for Claude Code, no multi-agent
- **[[Karpathy Skills]] / single CLAUDE.md** — always-on instructions, not load-on-demand
- **[[Awesome Claude Code]]** — curation without an installer, manual copy-paste
- **Manual git submodules** — works, but no multi-agent path translation
- **Claude Code plugin marketplace** — Anthropic-only ecosystem, vendor lock-in

## 🔗 Resources

- Agent Skills spec: https://agentskills.io/
- Skills directory: https://skills.sh/
- Agent docs links (per agent): in the README's "Related Links" section — 30+ entries
- Env vars: `INSTALL_INTERNAL_SKILLS`, `DISABLE_TELEMETRY`, `DO_NOT_TRACK`
- [[Hermes Agent]] — TUI/messaging agent compatible with the same `agentskills.io` standard
- [[Agent Zero]] / [[Space Agent]] — agentic frameworks using the open SKILL.md
- [[Superpowers]] — methodology stack distributed as a plugin marketplace

---
Template: [[templates/tool]]
