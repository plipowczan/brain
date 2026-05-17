---
title: "Claude Peers MCP"
date: 2026-04-20
enableToc: true
openToc: true
tags: ["tool", "ai", "mcp", "claude-code", "multi-agent", "coordination"]
type: tool
source: "_raw/inbox/louislvaclaude-peers-mcp Allow all your Claude Codes to message each other ad-hoc!.md"
agent-created: true
summary: "MCP that lets multiple Claude Code instances on the same machine discover each other and exchange messages in real time"
---

# Claude Peers MCP

🚀 Ad-hoc inter-agent communication for [[Claude Code]] — lets every Claude Code session on the same machine discover each other and send messages instantly. Practical when you're running 3–5 sessions across different projects and you want one Claude to ask another "what are you editing?" before doing something conflicting.

## 🗒️ Description
- Broker daemon on `localhost:7899` + SQLite DB.
- Each Claude Code session starts an MCP server that registers with the broker and polls every second.
- Incoming messages enter the session directly through the `claude/channel` protocol — Claude sees them immediately, no manual `check_messages`.
- The broker auto-starts on the first session, cleans up dead peers, and runs only locally.

## Links
### Description
- Repo: https://github.com/louislva/claude-peers-mcp

### Download or use
```bash
git clone https://github.com/louislva/claude-peers-mcp.git ~/claude-peers-mcp
cd ~/claude-peers-mcp && bun install
claude mcp add --scope user --transport stdio claude-peers -- bun ~/claude-peers-mcp/server.ts
claude --dangerously-skip-permissions --dangerously-load-development-channels server:claude-peers
```

## 🧩 Tools exposed to Claude
- `list_peers` — find other sessions (scope: `machine` / `directory` / `repo`)
- `send_message` — send a message to a peer by ID (instant via channel push)
- `set_summary` — describe what you're working on (visible to others)
- `check_messages` — manual fallback when you're not using channel mode

## 🧩 Auto-summary
With `OPENAI_API_KEY` set, each instance generates a short startup summary via `gpt-5.4-nano` (pennies). The summary is based on the directory, branch, and recent files. Without an API key, Claude sets the summary itself via `set_summary`.

## 🧩 CLI
```bash
bun cli.ts status            # broker + peers
bun cli.ts peers
bun cli.ts send <id> <msg>
bun cli.ts kill-broker
```

## Reasoning for
Handy in [[Agentic Systems]] workflows — parallel sessions in [[Qamera AI]] / [[PLSoft]]. Instead of a "main orchestrator" you can do peer-to-peer coordination between sessions. Requires Claude Code v2.1.80+ and login via claude.ai (channels don't work with API key auth).

## Alternatives considered
- Tmux-based pair session sharing (manual).
- Subagents inside a single Claude Code (locked into one process, no cross-project).
- Louis Vain's `cc-tmux` and other experimental approaches.

## 📖 Further reading
- [[Claude Code]] — host platform
- [[Agent Skills]] — complementary mechanism for extending Claude Code
- [[Agentic Systems]] — multi-agent architecture project
- [[Harness Engineering]] — MCP/skills/hooks configuration
- [[Context Engineering]] — cross-session context sharing

---
Template: [[templates/tool]]
