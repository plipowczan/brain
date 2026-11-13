---
title: "OpenRig"
date: 2026-11-01
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "multi-agent", "orchestration", "claude-code", "codex", "harness", "open-source"]
type: tool
source: "_raw/processed/2026-11-01_mvschwarzopenrig Build your own network of agents from Claude Code, Codex and Pi persistent teams with roles, shared context and owned work.md"
agent-created: true
summary: "mvschwarz/openrig — a harness for harnesses: define a persistent team of Claude Code, Codex and Pi agents in YAML, boot it with one command on tmux (macOS/Linux)"
status-checked: 2026-11-13
project-status: active
---

# OpenRig

> [!success] Status check 2026-11-13 — active
> **Verdict:** There were 14 releases between v0.7.0 (2026-10-23) and v0.7.13 (2026-11-12), and several commits landed on main on 2026-11-13.
> **Last release:** v0.7.13 (2026-11-12), also published on npm as @openrig/cli · **last commit:** 2026-11-13 · **licence:** Apache-2.0
> **Repo:** https://github.com/mvschwarz/openrig
> **Changed since this note:** The note says the current release at ingest was v0.6.8, but v0.6.8 is from 2026-10-09 and v0.7.6 was already out by the note date. Today's version is v0.7.13. v0.7.0 (2026-10-23) added a human gateway with quiet hours and modes (asleep, out of office), rig names usable in place of ids…

## 🚀 Description

[mvschwarz/openrig](https://github.com/mvschwarz/openrig) — "A harness wraps a model. A rig wraps your harnesses." You define an agent team as a **RigSpec** in YAML (pods, edges, continuity policies), boot it with `rig up`, and talk to a lead agent about the outcome while it coordinates specialists. Claude Code and Codex can sit in the same rig; Pi and Oh My Pi attach through RPC runners. Open source, local-only, built on tmux. Current release at ingest time: v0.6.8.

It tackles terminal sprawl: which sessions are running, how they relate, how to recover after a reboot.

## 🧩 Features

- **Define / boot / see:** RigSpec topologies, `rig up`, a TUI with topology table and graph, Specs, Projects, Terminals, Feed
- **Adopt** existing Claude Code and Codex sessions found in tmux
- **Snapshot and restore:** `rig down --snapshot`, then `rig up <name>`
- **Communicate:** `rig send`, `rig broadcast`, `rig chatroom`, plus an owned-work queue (`rig queue`)
- **Grow and shrink** a running topology (`rig grow`, `rig shrink`)
- **MCP server** so agents manage their own topology (`rig_up`, `rig_ps`, `rig_send`, …)
- **Built-in teams:** `starter` (Claude Code builder + Codex reviewer for one change), `workshop` (lead, builder, QA, reviewer for one repo), `factory` (seven agents: lead, advisor, build, QA, design, two independent reviewers); specialist teams for code review, research and PM
- Architecture: CLI / TUI / MCP → Hono HTTP daemon → domain services → SQLite + tmux + runtime adapters
- Install: Node.js 22 or 24 and tmux, **macOS or Linux** — no native Windows

## ⚠️ What it changes on your machine

Worth reading before installing — `rig setup` and the daemon write **trust settings and executable hooks**:

- edits `~/.tmux.conf`, `~/.claude.json` and `~/.codex/config.toml` (workspace trust, hooks, activity relays)
- seeds skills into `~/.claude/skills` and `~/.agents/skills`
- managed seats launch Claude with `--permission-mode acceptEdits` and Codex with `-s workspace-write`; the `workshop` bundle bypasses permission prompts entirely
- the documentation itself says to back up provider files first; hook and trust entries can be replaced

## Reasoning for

The most complete answer so far to "how do I run Claude Code and Codex as one persistent team instead of loose terminals". Relevant to [[Swarm Research — Orchestrating Coding Agents]] and [[Agentic Systems]]. Not usable on this Windows box without WSL, and the broad config rewriting makes me want a throwaway machine for any trial.

## Alternatives considered

- [[oh-my-pi]] — a single agent with LSP and a debugger, not a team layer (OpenRig can host it)
- Claude Peers MCP (retired) — lightweight Claude-to-Claude messaging without topology management; Claude Code now has this built in
- [[Hermes Agent]] — agent gateway rather than a multi-harness team manager
- [[Harness Engineering]] — the concept; OpenRig is one implementation of "harness of harnesses"

## 🔗 Links

- Repo: https://github.com/mvschwarz/openrig
- Getting started: https://github.com/mvschwarz/openrig/blob/main/docs/reference/getting-started.md
- Site: https://openrig.dev

---
Template: [[templates/tool]]
