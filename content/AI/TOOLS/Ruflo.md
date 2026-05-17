---
title: "Ruflo"
date: 2026-05-16
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "orchestration", "swarm", "claude-code", "mcp", "rag", "federation", "open-source", "rust"]
type: tool
source: "_raw/inbox/ruvnetruflo 🌊 The leading agent orchestration platform for Claude.md"
agent-created: true
summary: "ruvnet/ruflo (ex Claude-Flow) — agent orchestration: 98 agents, 32 plugins, swarms + federation + SONA self-learning, AgentDB HNSW, web UI flo.ruv.io, GOAP planner goal.ruv.io"
---

# Ruflo

> Multi-agent orchestration platform for Claude Code and other harnesses. **Claude Flow rebranded as Ruflo** by [rUv](https://ruv.io/) — Rust engine, embeddings, memory, plugin system from [Cognitum.One](https://cognitum.one/?RuFlo). 100+ specialized agents coordinate in swarms, learn from every task, remember across sessions, and federate across trust boundaries.

## 🚀 What it is

- Repo: https://github.com/ruvnet/ruflo
- CLI: `npx ruflo@latest init wizard` (cross-platform) or `npm install -g ruflo@latest`
- MCP server: `claude mcp add ruflo -- npx ruflo@latest mcp start`
- Full install: **98 agents, 60+ commands, 30 skills, MCP server, hooks, daemon**

## 🧩 Two installation paths (#1744)

| | **Claude Code Plugin** | **CLI install (`npx ruflo init`)** |
|---|---|---|
| What you get | Slash commands + a few skills + agent definitions | Full loop — 98 agents, 60+ commands, 30 skills, MCP, hooks, daemon |
| Files in workspace | **None** | `.claude/`, `.claude-flow/`, `CLAUDE.md`, helpers |
| MCP server | **No** (`memory_store`, `swarm_init` unavailable) | Yes |
| Hooks | No | Yes |
| Best for | Trying a single plugin | Production — everything works as in the docs |

## 🐝 What you get

| Capability | Description |
|---|---|
| **100+ agents** | Coding, testing, security, docs, architecture |
| **Comms Layer** | Zero-trust federation — mTLS + ed25519, PII-gated, behavioral trust scoring |
| **Swarm Coordination** | Hierarchical, mesh, adaptive topologies — Raft, Byzantine, Gossip consensus |
| **Self-Learning** | SONA neural patterns, ReasoningBank, trajectory learning |
| **Vector Memory** | HNSW-indexed AgentDB — 150x–12,500x faster than brute force, sub-ms retrieval |
| **Background Workers** | 12 auto-triggered (audit, optimize, testgaps, …) |
| **Plugins** | 32 native Claude Code plugins + 21 npm |
| **Multi-Provider LLM** | Claude, GPT, Gemini, Cohere, Ollama — smart routing with failover |
| **Security** | AIDefence (prompt injection, PII detection), CVE remediation, path traversal prevention |
| **Task Routing** | Intelligent (89% accuracy) |

## 🔌 32 plugins (selection)

**Core/Orchestration:** `ruflo-core` · `ruflo-swarm` · `ruflo-autopilot` · `ruflo-loop-workers` · `ruflo-workflows` · `ruflo-federation`

**Memory/Knowledge:** `ruflo-agentdb` · `ruflo-rag-memory` · `ruflo-rvf` · `ruflo-ruvector` (GPU + Graph RAG, 103 tools) · `ruflo-knowledge-graph`

**Intelligence/Learning:** `ruflo-intelligence` · `ruflo-daa` · `ruflo-ruvllm` (local LLMs with routing) · `ruflo-goals`

**Code Quality/Testing:** `ruflo-testgen` · `ruflo-browser` (Playwright) · `ruflo-jujutsu` (git diff risk scoring) · `ruflo-docs`

**Security:** `ruflo-security-audit` · `ruflo-aidefence`

**Methodology:** `ruflo-adr` · `ruflo-ddd` · `ruflo-sparc` (5-phase methodology with quality gates)

**DevOps:** `ruflo-migrations` · `ruflo-observability` · `ruflo-cost-tracker`

**Extensibility:** `ruflo-agent` (WASM sandbox + Anthropic Managed Agents) · `ruflo-plugin-creator`

**Domain-specific:** `ruflo-iot-cognitum` · `ruflo-neural-trader` (112+ tools) · `ruflo-market-data`

## ☘️ What changes vs plain Claude Code

| Capability | Claude Code alone | + Ruflo |
|---|---|---|
| Agent collab | Isolated, no shared context | Swarms with shared memory + consensus |
| Coordination | Manual orchestration | Queen-led hierarchy (Raft/Byzantine/Gossip) |
| Memory | Session-only | HNSW vector, sub-ms retrieval |
| Learning | Static | SONA self-learning, pattern matching |
| Task routing | You decide | Intelligent (89% accuracy) |
| Background workers | None | 12 auto-triggered |
| LLM providers | Anthropic only | 5 providers with failover |
| Security | Standard | CVE-hardened + AIDefence |

## 💬 Web UI — flo.ruv.io

Multi-model AI chat with native MCP tool calling:
- 6 frontier models out of the box (Qwen 3.6 Max default, Sonnet 4.6, Haiku 4.5, Gemini 2.5 Pro/Flash, OpenAI) via OpenRouter
- ruvLLM self-improving local model layer (MicroLoRA adapters + SONA)
- ~210 tools (5 MCP groups) + 18-tool in-browser WASM gallery
- Parallel tool execution (4–6+ per response)
- Memory ("remember my favorite color is indigo" → recall weeks later)
- Self-hostable (Docker, `ruflo/src/ruvocal/Dockerfile`, embedded Mongo, Cloud Run/Fly/K8s)
- Zero install — `https://flo.ruv.io/`

## 🎯 Goal Planner — goal.ruv.io

GOAP (Goal-Oriented Action Planning) with A* search:
- Plain-English goals → action tree with preconditions/effects/replanning
- Live agent dashboard `goal.ruv.io/agents` (role, current step, memory namespace, token budget)
- Each action node maps to an MCP tool call (~210 tools + custom)
- Adaptive replanning when an action fails (failures = learning, not a loop)
- Self-hostable: `v3/goal_ui/` (Vite + Supabase)

## 🤝 Federation — "Slack for agents"

Cross-installation collaboration with zero-trust security:
- Identity: **mTLS + ed25519** challenge-response (no API keys, no shared secrets)
- **PII-gated data flow** — 14-type detection, per-trust-level: BLOCK/REDACT/HASH/PASS
- **Behavioral trust scoring**: `0.4×success + 0.2×uptime + 0.2×threat + 0.2×integrity` — upgrades require history, downgrades are immediate
- Compliance built in: HIPAA/SOC2/GDPR audit trails
- 9 MCP tools + 10 CLI commands (`federation_init`, `federation_send`, `federation_trust`, `federation_audit`)
- Opt-in WireGuard mesh (ADR-111) — packet-layer reachability tied to federation trust

```bash
npx claude-flow@latest federation init
npx claude-flow@latest federation join wss://team-b.example.com:8443
npx claude-flow@latest federation send --to team-b --type task-request --message "..."
npx claude-flow@latest federation status
```

## ✍️ Quick Start

```bash
# POSIX (macOS/Linux/WSL/Git-Bash)
curl -fsSL https://cdn.jsdelivr.net/gh/ruvnet/ruflo@main/scripts/install.sh | bash

# All platforms (PowerShell, cmd, …)
npx ruflo@latest init wizard
# or: npx ruflo@latest init (non-interactive)
# or: npm install -g ruflo@latest

# MCP in Claude Code
claude mcp add ruflo -- npx ruflo@latest mcp start
```

> After `init` you use Claude Code normally — the hooks system automatically routes tasks, learns from successful patterns, and coordinates agents in the background. You don't have to learn 314 MCP tools or 26 CLI commands.

## 🧩 Related

- [[Agentic Systems]] — multi-agent hub
- [[Paperclip]] — peer "company of agents" platform
- [[Agent Zero]], [[Space Agent]] — agentic frameworks
- [[Hermes Agent]] — self-improving agent with messaging federation
- [[Superpowers]], [[gstack]] — methodology stacks
- [[Archon]] — harness builder
- [[Claude Peers MCP]] — multi-session communication
- [[LightRAG]] — RAG framework with KG (peer for ruflo-knowledge-graph)
- [[Agent Skills]], [[Awesome Agent Skills]], [[Awesome Claude Code]]
- [[Everything Claude Code]] — peer cross-harness perf system
- [[Claude Code]], [[Cursor]]
- [[Context Engineering]], [[Harness Engineering]]

## 🔗 Resources

- Repo: https://github.com/ruvnet/ruflo
- Web UI: https://flo.ruv.io/
- Goal Planner: https://goal.ruv.io/ · agents: https://goal.ruv.io/agents
- Cognitum: https://cognitum.one/?RuFlo
- Federation docs: `docs/federation/`, ADR-111 mesh: `docs/federation/phase7-mesh-bringup.md`
- Issue #1669 (federation architecture), #1689 (web UI roadmap), #1744 (install paths)
