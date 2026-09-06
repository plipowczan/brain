---
title: "Orca"
date: 2026-09-06
enableToc: true
openToc: true
tags: ["tool", "ai", "coding-agents", "orchestration", "ide", "workspaces", "mobile", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-09-06_stablyaiorca Orca is the ADE for working with a fleet of parallel agents.md"
agent-created: true
agent-reviewed: 2026-09-06
summary: "stablyai/orca — free MIT desktop ADE for running a fleet of coding agents in parallel, each in its own git worktree, with a mobile companion for steering them from your phone, click-to-prompt Design Mode, native GitHub/Linear and SSH worktrees."
---
# Orca

🗒️ **[stablyai/orca](https://github.com/stablyai/orca)** — *"the ADE for working with a fleet of parallel agents."* A free, open-source desktop app (macOS/Windows/Linux) that runs Codex, [[Claude Code]], OpenCode, Pi and **any CLI agent** side by side, each in its own git worktree, tracked in one place. Runs on your own subscriptions. MIT.

🚀 The core move: **fan one prompt across five agents**, each isolated in its own worktree, then compare the results and merge the winner.

## Links
### Description
🧩 What it does:

- **Parallel worktrees** — one prompt, N agents, N isolated git worktrees; compare and merge the winner.
- **Mobile companion** — monitor and steer agents from your phone, get notified when one finishes, send follow-ups from anywhere (iOS App Store, Android APK).
- **Terminal splits** — Ghostty-class terminals with WebGL rendering, infinite splits, scrollback that survives restarts.
- **Design Mode** — click any UI element in a real Chromium window to send its HTML, CSS and a cropped screenshot straight into the agent's prompt.
- **GitHub & Linear, native** — browse PRs, issues and project boards in-app; open a worktree from any task and review without a context switch.
- **SSH worktrees** — run agents on a beefy remote box with full file editing, git and terminals; auto-reconnect and port forwarding included.
- **Annotate AI diffs** — drop comments on any diff line and ship them back to the agent; review, edit and commit without leaving Orca.
- **Drag files to agents** — VS Code's editor with autosave everywhere; drag files or images into an agent prompt.
- **Orca CLI** — agents drive Orca too: `orca worktree create`, `snapshot`, `click`, `fill`.
- **Also in the box** — quick open across worktrees/files/agents, Claude & Codex usage and rate-limit tracking with account hot-swap, Computer Use, notifications and unread state.

Works with **any CLI agent** — if it runs in a terminal, it runs in Orca. Explicitly supported: Claude Code, Codex, Grok, Cursor, Copilot, OpenCode, Amp, Antigravity, Pi, [[Hermes Agent]], Devin, Goose, Cline, Continue, Droid, Kimi, Kiro, Qwen Code and ~15 more.

### Download or use
```bash
# macOS
brew install --cask stablyai/orca/orca

# Arch Linux (AUR)
yay -S stably-orca-bin
```
Or grab a build from [onOrca.dev/download](https://onorca.dev/download) — macOS (ARM/Intel) `.dmg`, Windows `.exe`, Linux AppImage. Headless Linux server? `orca serve` plus the [headless guide](https://github.com/stablyai/orca/blob/main/docs/reference/headless-linux-server.md).

Mobile pairs with the desktop app via a relay that lives in the same repo under `cloud/`.

## Reasoning for
The interesting bit is not "an IDE for agents" — it's that **worktree isolation is the default unit of work**. Running five agents on the same checkout is how you get corrupted state and unmergeable diffs; giving each its own worktree turns parallel agents from a stunt into a workflow, and makes "compare and merge the winner" an actual review step rather than a hope.

Two features I'd use immediately:
- **Design Mode** — click an element in a live browser and the agent receives its HTML, CSS and a cropped screenshot. That's the shortest path yet from "this looks wrong" to a prompt with real context, and it beats describing the problem in prose.
- **Usage tracking with account hot-swap** — seeing Claude and Codex rate-limit resets in one place, and switching accounts without re-logging in, addresses the same quota-juggling pain [[OmniRoute]] attacks from the gateway side.

⚠️ Caveats worth noting: it ships daily (the changelog is "the real feature list"), it's a desktop Electron-class app rather than something you can put on a server, and there's anonymous telemetry — [documented, opt-out available](https://www.onorca.dev/docs/telemetry).

## Alternatives considered
- **[[herdr]]** — the same fleet problem solved terminal-natively: one Rust binary, background server, panes marked working/blocked/idle, SSH reattach. Choose herdr for headless/remote and keyboard-first work, Orca for GUI review, diffs, Design Mode and phone steering.
- **[[Cursor]] / VS Code + terminals** — familiar, but no worktree isolation per agent and no cross-agent tracking.
- **Cloud agent platforms (Devin, Codex Cloud)** — run someone else's runtime on someone else's box; Orca runs *your* subscriptions on *your* machine.

## Resources
- 🔗 Repo: [github.com/stablyai/orca](https://github.com/stablyai/orca) · [onorca.dev](https://onorca.dev/) · [docs](https://www.onorca.dev/docs/mobile)
- 🔗 [Worktrees](https://www.onorca.dev/docs/model/worktrees) · [Design Mode](https://www.onorca.dev/docs/browser/design-mode) · [SSH](https://www.onorca.dev/docs/ssh) · [Orca CLI](https://www.onorca.dev/docs/cli/overview) · [Usage tracking](https://www.onorca.dev/docs/agents/usage-tracking)
- 🔗 [Releases / changelog](https://github.com/stablyai/orca/releases) · [Discord](https://discord.gg/fzjDKHxv8Q)
- 📖 Related: [[herdr]] · [[Claude Code]] · [[Cursor]] · [[Swarm Research — Orchestrating Coding Agents]] · [[Agentic Coding]] · [[OmniRoute]]

---
Template: [[templates/tool]]
