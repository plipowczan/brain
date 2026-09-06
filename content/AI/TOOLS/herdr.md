---
title: "herdr"
date: 2026-09-06
enableToc: true
openToc: true
tags: ["tool", "ai", "coding-agents", "harness", "terminal", "orchestration", "rust", "open-source", "apache-2.0"]
type: tool
source: "_raw/processed/2026-09-06_herdrdevherdr the runtime your coding agents live on.md"
agent-created: true
agent-reviewed: 2026-09-06
summary: "herdrdev/herdr — a background terminal runtime that owns your coding agents' sessions: agents survive lid-close, network drops and reboots, every pane is marked working/blocked/idle, and agents drive it themselves via CLI and socket API. One Rust binary, Apache 2.0."
---
# herdr

🗒️ **[herdrdev/herdr](https://github.com/herdrdev/herdr)** — *"the runtime your coding agents live on."* A background server that **owns the terminals your agents run in**, rather than wrapping or replacing the agents themselves. One Rust binary, no Electron. Apache 2.0.

🚀 The problem it fixes: long-running agents die with your terminal, and when you run several you spend your time hunting for the one that stopped and is waiting on an answer.

## Links
### Description
🧩 What it does:

- **Always running** — herdr is a background server and the terminals live inside it. Close the lid, drop the network, restart the machine: agents keep working and sessions come back. Reattach from any terminal, or over SSH.
- **Never hunt for the stuck one** — every pane is marked **working**, **blocked** or **idle**. When an agent stops and needs an answer, herdr says so.
- **Agent-native** — agents drive herdr through the CLI and socket API: they can spawn panes, prompt each other, and *wait until another agent is genuinely blocked*. There's a dedicated [agent skill](https://herdr.dev/docs/agent-skill/).
- **Runs what you already run** — [[Claude Code]], Codex, [[Cursor]], OpenCode, Grok and the rest. It doesn't wrap them; it owns their terminals.
- **Keyboard and mouse both first-class** — tmux-style prefix keys *and* click, drag, split. Pick per moment, not per tool.
- **Plugins** — extend panes and workflows via a [marketplace](https://herdr.dev/plugins/).

### Download or use
```bash
curl -fsSL https://herdr.dev/install.sh | sh
# or: brew install herdr · mise use -g herdr
```
Windows:
```powershell
powershell -ExecutionPolicy Bypass -c "irm https://herdr.dev/install.ps1 | iex"
```
There's a separate path for [endpoint-protected Windows](https://herdr.dev/docs/windows-beta/) — relevant on this machine, where Smart App Control has blocked shims before (see [[Machine Setup Manifest]]).

Then start it where the work lives:
```bash
herdr          # run agents, split panes, walk away
# ctrl+b q detaches; `herdr` reattaches
```

## Reasoning for
This is the **session-persistence layer** for multi-agent work, and it's the piece I keep improvising with terminal tabs. Two properties earn it a note:

1. **Survives the machine.** A long compile-review-fix loop doesn't die because I closed the laptop or the VPN dropped. That's the difference between "agents running overnight" being a real workflow and a fantasy.
2. **`blocked` is a first-class state.** The expensive failure in parallel agent work isn't a crash — it's an agent that quietly finished 40 minutes ago and has been waiting for a yes/no. Surfacing that per pane is the actual product.

The agent-native angle matters too: agents can spawn their own panes and *wait until another agent is genuinely blocked*, which is a primitive the orchestration patterns in [[Swarm Research — Orchestrating Coding Agents]] currently have to fake.

Sits at the same layer as the harness questions in [[Harness Engineering]] — but below the harness: herdr doesn't care which agent you run, only that its terminal outlives your session.

## Alternatives considered
- **tmux / screen** — the honest baseline, and herdr borrows the prefix-key muscle memory. What tmux doesn't do is know whether the thing inside a pane is working, blocked or idle, or let an agent drive it as a first-class API.
- **[[Orca]]** — solves an overlapping problem from the GUI end: a desktop/mobile ADE with per-agent git worktrees, diffs and mobile steering. herdr is the terminal-native, headless-friendly, single-binary answer; Orca is the IDE-shaped one.
- **Running agents in IDE terminals** — zero setup, but nothing survives a restart and nothing tells you which one is waiting.

## Resources
- 🔗 Repo: [github.com/herdrdev/herdr](https://github.com/herdrdev/herdr) · [herdr.dev](https://herdr.dev/)
- 🔗 [Quick start](https://herdr.dev/docs/quick-start/) · [Concepts](https://herdr.dev/docs/concepts/) · [Supported agents](https://herdr.dev/docs/agents/) · [Session state](https://herdr.dev/docs/session-state/) · [Remote](https://herdr.dev/docs/persistence-remote/)
- 🔗 [Socket API](https://herdr.dev/docs/socket-api/) · [Agent skill](https://herdr.dev/docs/agent-skill/) · [Plugins](https://herdr.dev/plugins/)
- 📖 Related: [[Orca]] · [[Harness Engineering]] · [[Claude Code]] · [[Swarm Research — Orchestrating Coding Agents]] · [[Agentic Coding]]

---
Template: [[templates/tool]]
