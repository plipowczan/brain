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

> Multi-agent orchestration platform dla Claude Code i innych harnesses. **Claude Flow przebrandowane na Ruflo** przez [rUv](https://ruv.io/) — Rust engine, embeddings, memory, plugin system od [Cognitum.One](https://cognitum.one/?RuFlo). 100+ wyspecjalizowanych agentów koordynuje się w swarmach, uczy się z każdego taska, pamięta między sesjami, federuje przez trust boundaries.

## 🚀 Co to jest

- Repo: https://github.com/ruvnet/ruflo
- CLI: `npx ruflo@latest init wizard` (cross-platform) lub `npm install -g ruflo@latest`
- MCP server: `claude mcp add ruflo -- npx ruflo@latest mcp start`
- Pełna instalacja: **98 agentów, 60+ commands, 30 skills, MCP server, hooks, daemon**

## 🧩 Dwie ścieżki instalacji (#1744)

| | **Claude Code Plugin** | **CLI install (`npx ruflo init`)** |
|---|---|---|
| Co dostajesz | Slash commands + kilka skills + agent definitions | Pełna pętla — 98 agentów, 60+ commands, 30 skills, MCP, hooks, daemon |
| Pliki w workspace | **Zero** | `.claude/`, `.claude-flow/`, `CLAUDE.md`, helpers |
| MCP server | **Nie** (`memory_store`, `swarm_init` niedostępne) | Tak |
| Hooks | Nie | Tak |
| Najlepsze do | Próby pojedynczego plugina | Production — wszystko działa jak w docs |

## 🐝 Co dostajesz

| Capability | Opis |
|---|---|
| **100+ agentów** | Coding, testing, security, docs, architecture |
| **Comms Layer** | Zero-trust federation — mTLS + ed25519, PII-gated, behavioral trust scoring |
| **Swarm Coordination** | Hierarchical, mesh, adaptive topologies — Raft, Byzantine, Gossip consensus |
| **Self-Learning** | SONA neural patterns, ReasoningBank, trajectory learning |
| **Vector Memory** | HNSW-indexed AgentDB — 150x–12,500x szybsze niż brute force, sub-ms retrieval |
| **Background Workers** | 12 auto-triggered (audit, optimize, testgaps, …) |
| **Plugins** | 32 native Claude Code plugins + 21 npm |
| **Multi-Provider LLM** | Claude, GPT, Gemini, Cohere, Ollama — smart routing z failoverem |
| **Security** | AIDefence (prompt injection, PII detection), CVE remediation, path traversal prevention |
| **Task Routing** | Intelligent (89% accuracy) |

## 🔌 32 plugins (selekcja)

**Core/Orchestration:** `ruflo-core` · `ruflo-swarm` · `ruflo-autopilot` · `ruflo-loop-workers` · `ruflo-workflows` · `ruflo-federation`

**Memory/Knowledge:** `ruflo-agentdb` · `ruflo-rag-memory` · `ruflo-rvf` · `ruflo-ruvector` (GPU + Graph RAG, 103 tools) · `ruflo-knowledge-graph`

**Intelligence/Learning:** `ruflo-intelligence` · `ruflo-daa` · `ruflo-ruvllm` (lokalne LLM-y z routingiem) · `ruflo-goals`

**Code Quality/Testing:** `ruflo-testgen` · `ruflo-browser` (Playwright) · `ruflo-jujutsu` (git diff risk scoring) · `ruflo-docs`

**Security:** `ruflo-security-audit` · `ruflo-aidefence`

**Methodology:** `ruflo-adr` · `ruflo-ddd` · `ruflo-sparc` (5-phase methodology z quality gates)

**DevOps:** `ruflo-migrations` · `ruflo-observability` · `ruflo-cost-tracker`

**Extensibility:** `ruflo-agent` (WASM sandbox + Anthropic Managed Agents) · `ruflo-plugin-creator`

**Domain-specific:** `ruflo-iot-cognitum` · `ruflo-neural-trader` (112+ tools) · `ruflo-market-data`

## ☘️ Co to zmienia vs gołe Claude Code

| Capability | Claude Code alone | + Ruflo |
|---|---|---|
| Agent collab | Isolated, brak shared context | Swarms z shared memory + consensus |
| Coordination | Manual orchestration | Queen-led hierarchy (Raft/Byzantine/Gossip) |
| Memory | Session-only | HNSW vector, sub-ms retrieval |
| Learning | Static | SONA self-learning, pattern matching |
| Task routing | Sam decydujesz | Intelligent (89% accuracy) |
| Background workers | Brak | 12 auto-triggered |
| LLM providers | Tylko Anthropic | 5 providers z failoverem |
| Security | Standard | CVE-hardened + AIDefence |

## 💬 Web UI — flo.ruv.io

Multi-model AI chat z natywnym MCP tool calling:
- 6 frontier models out-of-the-box (Qwen 3.6 Max default, Sonnet 4.6, Haiku 4.5, Gemini 2.5 Pro/Flash, OpenAI) via OpenRouter
- ruvLLM self-improving local model layer (MicroLoRA adapters + SONA)
- ~210 tools (5 grup MCP) + 18-tool in-browser WASM gallery
- Parallel tool execution (4–6+ na response)
- Memory ("remember my favorite color is indigo" → recall za tygodnie)
- Self-hostable (Docker, `ruflo/src/ruvocal/Dockerfile`, embedded Mongo, Cloud Run/Fly/K8s)
- Zero install — `https://flo.ruv.io/`

## 🎯 Goal Planner — goal.ruv.io

GOAP (Goal-Oriented Action Planning) z A* search:
- Plain-English goals → action tree z preconditions/effects/replanning
- Live agent dashboard `goal.ruv.io/agents` (role, current step, memory namespace, token budget)
- Każdy action node mapuje na MCP tool call (~210 narzędzi + custom)
- Adaptive replanning gdy akcja fails (failures = learning, nie loop)
- Self-hostable: `v3/goal_ui/` (Vite + Supabase)

## 🤝 Federation — "Slack for agents"

Cross-installation collaboration z zero-trust security:
- Identity: **mTLS + ed25519** challenge-response (bez API keys i shared secrets)
- **PII-gated data flow** — 14-type detection, per-trust-level: BLOCK/REDACT/HASH/PASS
- **Behavioral trust scoring**: `0.4×success + 0.2×uptime + 0.2×threat + 0.2×integrity` — upgrades wymagają historii, downgrades natychmiastowe
- Compliance built-in: HIPAA/SOC2/GDPR audit trails
- 9 MCP tools + 10 CLI commands (`federation_init`, `federation_send`, `federation_trust`, `federation_audit`)
- Opt-in WireGuard mesh (ADR-111) — packet-layer reachability związany z federation trust

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

# Wszystkie platformy (PowerShell, cmd, …)
npx ruflo@latest init wizard
# lub: npx ruflo@latest init (non-interactive)
# lub: npm install -g ruflo@latest

# MCP w Claude Code
claude mcp add ruflo -- npx ruflo@latest mcp start
```

> Po `init` używasz Claude Code normalnie — hooks system automatycznie routuje taski, uczy się z udanych wzorców, koordynuje agentów w tle. Nie musisz uczyć się 314 MCP tools ani 26 CLI commands.

## 🧩 Powiązane

- [[Agentic Systems]] — hub multi-agent
- [[Paperclip]] — peer "company of agents" platform
- [[Agent Zero]], [[Space Agent]] — agentic frameworks
- [[Hermes Agent]] — self-improving agent z federacją messaging
- [[Superpowers]], [[gstack]] — methodology stacks
- [[Archon]] — harness builder
- [[Claude Peers MCP]] — multi-session communication
- [[LightRAG]] — RAG framework z KG (peer dla ruflo-knowledge-graph)
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
