---
title: "ruvnet/ruflo: 🌊 The leading agent orchestration platform for Claude. Deploy intelligent multi-agent swarms, coordinate autonomous workflows, and build conversational AI systems. Features    enterprise-grade architecture, self-learning swarm intelligence, RAG integration, and native Claude Code"
source: "https://github.com/ruvnet/ruflo"
author:
published:
created: 2026-05-16
description: "🌊 The leading agent orchestration platform for Claude. Deploy intelligent multi-agent swarms, coordinate autonomous workflows, and build conversational AI systems. Features    enterprise-grade architecture, self-learning swarm intelligence, RAG integration, and native Claude Code / Codex Integration - ruvnet/ruflo"
tags:
  - "clippings"
---
Orchestrate 100+ specialized AI agents across machines, teams, and trust boundaries. Ruflo adds coordinated swarms, self-learning memory, federated comms, and enterprise security to Claude Code — so agents don't just run, they collaborate.

### Why Ruflo?

> Claude Flow is now Ruflo — named by [`rUv`](https://ruv.io/), who loves Rust, flow states, and building things that feel inevitable. The "Ru" is the rUv. The "flo" is working until 3am. Underneath, powered by [`Cognitum.One`](https://cognitum.one/?RuFlo) agentic architecture, running a supercharged Rust based AI engine, embeddings, memory, and plugin system.

### What Ruflo Does

One `npx ruvflo init` gives Claude Code a nervous system: agents self-organize into swarms, learn from every task, remember across sessions, and — with federation — securely talk to agents on other machines without leaking data. You keep writing code. Ruflo handles the coordination.

```
Self-Learning / Self-Optimizing Agent Architecture

User --> Ruflo (CLI/MCP) --> Router --> Swarm --> Agents --> Memory --> LLM Providers
                          ^                           |
                          +---- Learning Loop <-------+
```

> **New to Ruflo?** You don't need to learn 314 MCP tools or 26 CLI commands. After `init`, just use Claude Code normally -- the hooks system automatically routes tasks, learns from successful patterns, and coordinates agents in the background.

---

[![[9f8b1bb7987a4ed894bc213b2b198038_MD5.gif]]](https://github.com/ruvnet/ruflo/blob/main/ruflo-plugins.gif)

## Quick Start

There are **two different install paths** with very different surface areas. Pick based on what you need (#1744):

|  | **Claude Code Plugin** | **CLI install (`npx ruflo init`)** |
| --- | --- | --- |
| What it gives you | Slash commands + a few skills + agent definitions per-plugin | Full Ruflo loop — 98 agents, 60+ commands, 30 skills, MCP server, hooks, daemon |
| Files in your workspace | **Zero** | `.claude/`, `.claude-flow/`, `CLAUDE.md`, helpers, settings |
| MCP server registered | **No** (`memory_store`, `swarm_init`, etc. unavailable to Claude) | Yes |
| Hooks installed | No | Yes |
| Best for | Try a single plugin's commands without committing to the full install | Production use — everything works as documented |

### Path A — Claude Code Plugins (lite, slash commands only)

```
# Add the marketplace
/plugin marketplace add ruvnet/ruflo

# Install core + any plugins you need
/plugin install ruflo-core@ruflo
/plugin install ruflo-swarm@ruflo
/plugin install ruflo-autopilot@ruflo
/plugin install ruflo-federation@ruflo
```

This adds slash commands and agent definitions only. The Ruflo MCP server is NOT registered, so `memory_store`, `swarm_init`, `agent_spawn`, etc. won't be callable from Claude. For the full loop, use Path B below.

**🔌 All 32 plugins**

#### Core & Orchestration

| Plugin | What it does |
| --- | --- |
| [**ruflo-core**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-core/README.md) | Foundation — server, health checks, plugin discovery |
| [**ruflo-swarm**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-swarm/README.md) | Coordinate multiple agents as a team |
| [**ruflo-autopilot**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-autopilot/README.md) | Let agents run autonomously in a loop |
| [**ruflo-loop-workers**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-loop-workers/README.md) | Schedule background tasks on a timer |
| [**ruflo-workflows**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-workflows/README.md) | Reusable multi-step task templates |
| [**ruflo-federation**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-federation/README.md) | Agents on different machines collaborate securely |

#### Memory & Knowledge

| Plugin | What it does |
| --- | --- |
| [**ruflo-agentdb**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-agentdb/README.md) | Fast vector database for agent memory |
| [**ruflo-rag-memory**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-rag-memory/README.md) | Smart retrieval — hybrid search, graph hops, diversity ranking |
| [**ruflo-rvf**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-rvf/README.md) | Save and restore agent memory across sessions |
| [**ruflo-ruvector**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-ruvector/README.md) | [`ruvector`](https://npmjs.com/package/ruvector) — GPU-accelerated search, Graph RAG, 103 tools |
| [**ruflo-knowledge-graph**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-knowledge-graph/README.md) | Build and traverse entity relationship maps |

#### Intelligence & Learning

| Plugin | What it does |
| --- | --- |
| [**ruflo-intelligence**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-intelligence/README.md) | Agents learn from past successes and get smarter |
| [**ruflo-daa**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-daa/README.md) | Dynamic agent behavior and cognitive patterns |
| [**ruflo-ruvllm**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-ruvllm/README.md) | Run local LLMs (Ollama, etc.) with smart routing |
| [**ruflo-goals**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-goals/README.md) | Break big goals into plans and track progress |

#### Code Quality & Testing

| Plugin | What it does |
| --- | --- |
| [**ruflo-testgen**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-testgen/README.md) | Find missing tests and generate them automatically |
| [**ruflo-browser**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-browser/README.md) | Automate browser testing with Playwright |
| [**ruflo-jujutsu**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-jujutsu/README.md) | Analyze git diffs, score risk, suggest reviewers |
| [**ruflo-docs**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-docs/README.md) | Generate and maintain documentation automatically |

#### Security & Compliance

| Plugin | What it does |
| --- | --- |
| [**ruflo-security-audit**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-security-audit/README.md) | Scan for vulnerabilities and CVEs |
| [**ruflo-aidefence**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-aidefence/README.md) | Block prompt injection, detect PII, safety scanning |

#### Architecture & Methodology

| Plugin | What it does |
| --- | --- |
| [**ruflo-adr**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-adr/README.md) | Track architecture decisions with a living record |
| [**ruflo-ddd**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-ddd/README.md) | Scaffold domain-driven design — contexts, aggregates, events |
| [**ruflo-sparc**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-sparc/README.md) | Guided 5-phase development methodology with quality gates |

#### DevOps & Observability

| Plugin | What it does |
| --- | --- |
| [**ruflo-migrations**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-migrations/README.md) | Manage database schema changes safely |
| [**ruflo-observability**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-observability/README.md) | Structured logs, traces, and metrics in one place |
| [**ruflo-cost-tracker**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-cost-tracker/README.md) | Track token usage, set budgets, get cost alerts |

#### Extensibility

| Plugin | What it does |
| --- | --- |
| [**ruflo-agent**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-agent/README.md) | Run agents — local WASM sandbox (rvagent) + Anthropic Claude Managed Agents (cloud) |
| [**ruflo-plugin-creator**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-plugin-creator/README.md) | Scaffold, validate, and publish your own plugins |

#### Domain-Specific

| Plugin | What it does |
| --- | --- |
| [**ruflo-iot-cognitum**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-iot-cognitum/README.md) | IoT device management — trust scoring, anomaly detection, fleets |
| [**ruflo-neural-trader**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-neural-trader/README.md) | [`neural-trader`](https://npmjs.com/package/neural-trader) — AI trading with 4 agents, backtesting, 112+ tools |
| [**ruflo-market-data**](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-market-data/README.md) | Ingest market data, vectorize OHLCV, detect patterns |

### CLI Install

**macOS / Linux / WSL / Git-Bash:**

```
# One-line install (POSIX shells only — see Windows note below)
curl -fsSL https://cdn.jsdelivr.net/gh/ruvnet/ruflo@main/scripts/install.sh | bash
```

**All platforms (including native Windows PowerShell / cmd):**

```
# Interactive setup wizard — runs identically on every platform
npx ruflo@latest init wizard

# Quick non-interactive init
# npx ruflo@latest init

# Or install globally
npm install -g ruflo@latest
```

> 💡 **Windows users:** the `curl ... | bash` form needs a POSIX shell (Git-Bash, WSL, MSYS). The `npx ruflo@latest init wizard` line works natively in PowerShell and cmd. If you hit an `'bash' is not recognized` error, use the `npx` line instead — both end up running the same init flow.

### MCP Server

```
# Add Ruflo as an MCP server in Claude Code (canonical form, matches USERGUIDE.md)
claude mcp add ruflo -- npx ruflo@latest mcp start
```

---

## What You Get

| Capability | Description |
| --- | --- |
| 🤖 **100+ Agents** | Specialized agents for coding, testing, security, docs, architecture |
| 📡 **Comms Layer** | Zero-trust federation — agents across machines/orgs discover, authenticate, and exchange work securely |
| 🐝 **Swarm Coordination** | Hierarchical, mesh, and adaptive topologies with consensus |
| 🧠 **Self-Learning** | SONA neural patterns, ReasoningBank, trajectory learning |
| 💾 **Vector Memory** | HNSW-indexed AgentDB with 150x-12,500x faster search |
| ⚡ **Background Workers** | 12 auto-triggered workers (audit, optimize, testgaps, etc.) |
| 🧩 **Plugin Marketplace** | 32 native Claude Code plugins + 21 npm plugins |
| 🔌 **Multi-Provider** | Claude, GPT, Gemini, Cohere, Ollama with smart routing |
| 🛡️ **Security** | AIDefence, input validation, CVE remediation, path traversal prevention |
| 🌐 **Agent Federation** | Cross-installation agent collaboration with zero-trust security |
| 💬 **[Web UI Beta](https://flo.ruv.io/)** | Multi-model chat at flo.ruv.io with parallel MCP tool calling and an in-browser WASM tool gallery |
| 🎯 **[RuFlo Research](https://goal.ruv.io/)** | GOAP A\* planner at goal.ruv.io — plain-English goals → executable agent plans, with a live agent dashboard at [/agents](https://goal.ruv.io/agents) |

[![[b5f695bb00372a517bd2c87d1f0ae9c7_MD5.png]]](https://flo.ruv.io/)

### Web UI (Beta) — self-hostable, hosted demo at flo.ruv.io

**RuFlo's web UI is a multi-model AI chat with built-in Model Context Protocol (MCP) tool calling.** Talk to Qwen, Claude, Gemini, or OpenAI while RuFlo invokes the same MCP tools the CLI uses — agent orchestration, persistent memory, swarm coordination, code review, GitHub ops — directly from chat. No install, no API key needed to try it.

|  | What it is | Why it matters |
| --- | --- | --- |
| 🧠 | **Any model, local or remote** | 6 curated frontier models out-of-the-box — Qwen 3.6 Max (default), Claude Sonnet 4.6, Claude Haiku 4.5, Gemini 2.5 Pro, Gemini 2.5 Flash, OpenAI — via OpenRouter. Add your own: any OpenAI-compatible endpoint (vLLM, Ollama, LM Studio, Together, Groq, self-hosted). |
| 🦾 | **ruvLLM self-learning AI** | Native support for [ruvLLM](https://github.com/ruvnet/RuVector/tree/main/examples/ruvLLM) (lives in `ruvnet/RuVector/examples/ruvLLM`) — RuFlo's self-improving local model layer. Routes to MicroLoRA adapters, learns from your trajectories via SONA, and stays on your machine. Pair with the cloud models or run fully offline. |
| 🛠️ | **~210 tools, ready to call** | 5 server groups (Core, Intelligence, Agents, Memory, DevTools) plus an 18-tool gallery that runs entirely in your browser — works offline. |
| 🔌 | **Bring your own MCP servers** | Click the **MCP (n)** pill in the chat input → *Add Server* and paste any MCP endpoint (HTTP, SSE, or stdio). Your tools join RuFlo's native ones in the same parallel-execution flow. Run a local MCP server on `localhost:3000` and it just works. |
| ⚡ | **Tools run in parallel** | One model response can fire 4–6+ tools at the same time. The UI shows them as cards with a *Step 1 — 2 tools completed* badge so you can see exactly what ran. |
| 💾 | **Memory that sticks** | Say *"remember my favorite color is indigo"* and ask weeks later — RuFlo recalls it. Backed by AgentDB + HNSW vector search (≥150× faster than brute force). |
| 📘 | **Built-in capabilities tour** | Click the question-mark icon in the sidebar — a "RuFlo Capabilities" modal opens with the full tool list, model strengths, architecture, and keyboard shortcuts. |
| 🏠 | **Self-hostable** | Web UI is shipped as Docker (`ruflo/src/ruvocal/Dockerfile`) with embedded Mongo. Deploy to your own Cloud Run / Fly / Kubernetes / docker-compose. The hosted [flo.ruv.io](https://flo.ruv.io/) demo is one option; running your own is fully supported. |
| 🚀 | **Zero install to try** | Open the hosted URL, pick a model, type a question. That's the whole onboarding. |

**Try the hosted demo:** [https://flo.ruv.io/](https://flo.ruv.io/) — no account, no API key. **Run your own:** the source lives in [`ruflo/src/ruvocal/`](https://github.com/ruvnet/ruflo/blob/main/ruflo/src/ruvocal) with a multi-stage Dockerfile (`INCLUDE_DB=true` builds in MongoDB) and a `cloudbuild.yaml` for Google Cloud Run. See [ADR-033](https://github.com/ruvnet/ruflo/blob/main/ruflo/docs/adr/ADR-033-RUVOCAL-WASM-MCP-INTEGRATION.md) for the architecture and [issue #1689](https://github.com/ruvnet/ruflo/issues/1689) for the roadmap.

[![[e9d38789f2230a1bb182d229805f151a_MD5.png]]](https://goal.ruv.io/agents)

### Goal Planner UI — autonomous agents at goal.ruv.io

**Turn high-level goals into executable agent plans.** `goal.ruv.io` is RuFlo's hosted Goal-Oriented Action Planning (GOAP) front-end — describe an outcome in plain English and watch RuFlo decompose it into preconditions, actions, and an A\* path through state space, then dispatch the work to live agents at [`/agents`](https://goal.ruv.io/agents).

|  | What it is | Why it matters |
| --- | --- | --- |
| 🎯 | **Plain-English goals** | Type *"ship the auth refactor with tests and a PR"* — RuFlo extracts the success criteria, the constraints, and the implicit preconditions. No JSON, no DSL. |
| 🧭 | **GOAP A\* planner** | Classic gaming-AI planning ported to software work: state-space search through actions with preconditions/effects to find the shortest viable path. Replans on the fly when state changes. |
| 🤖 | **Live agent dashboard** | [goal.ruv.io/agents](https://goal.ruv.io/agents) shows every spawned agent — role, current step, memory namespace, token budget, status. Click in to inspect trajectories, kill runaway workers, or reassign. |
| 🌳 | **Visual plan tree** | Goals render as collapsible action trees with progress, blocked branches, and rollbacks highlighted. See *exactly* why an agent picked a path — no opaque chain-of-thought. |
| ♻️ | **Adaptive replanning** | When an action fails or new info arrives, the planner re-runs A\* from the current state instead of restarting. Failures become learning, not loops. |
| 🧠 | **Shared memory + SONA** | Plans, trajectories, and outcomes flow into AgentDB. Future plans retrieve past solutions via HNSW — the planner gets smarter with every run. |
| 🔗 | **Wired to MCP tools** | Every action node maps to a tool call (RuFlo's ~210 MCP tools, your custom servers, or shell). The planner schedules them in parallel where the dependency graph allows. |
| 🚀 | **Zero install to try** | Open [goal.ruv.io](https://goal.ruv.io/), describe a goal, watch it run. Source lives in [`v3/goal_ui/`](https://github.com/ruvnet/ruflo/blob/main/v3/goal_ui) — Vite + Supabase, self-hostable. |

**Try it:** [https://goal.ruv.io/](https://goal.ruv.io/) for goals · [https://goal.ruv.io/agents](https://goal.ruv.io/agents) for live agents. **Run your own:** clone the `goal` branch and `cd v3/goal_ui && npm install && npm run dev`.

### Agent Federation — Slack for Agents

```
Your Agent --> [ Remove secrets ] --> [ Sign message ] --> [ Encrypted channel ]
                 Emails, SSNs,        Proves it came       No one reads it
                 keys stripped         from you              in transit
                                                                |
                                                                v
Their Agent <-- [ Block attacks ] <-- [ Check identity ] <------+
                 Stops prompt          Rejects forgeries
                 injection

                          Audit trail on both sides.
                  Trust builds over time. Bad behavior = instant downgrade.
```

Slack gave teams channels. Federation gives agents the same thing — **shared workspaces across trust boundaries**, where agents on different machines, orgs, or cloud regions can discover each other, prove who they are, and collaborate on tasks.

The difference: some channels are trusted, some aren't. [`@claude-flow/plugin-agent-federation`](https://github.com/ruvnet/ruflo/issues/1669) handles that automatically. Your agents join a federation, get verified via mTLS + ed25519, and start exchanging work — with PII stripped before anything leaves your node and every message auditable. Untrusted agents can still participate at lower privilege: they see discovery info, not your memory. As they prove reliable, trust upgrades. If they misbehave, they get downgraded instantly — no human in the loop required.

You don't configure handshakes or manage certificates. You `federation init`, `federation join`, and your agents start talking. The protocol handles identity, the PII pipeline handles data safety, and the audit trail handles compliance.

> **📘 Full user guide:** [`docs/federation/`](https://github.com/ruvnet/ruflo/blob/main/docs/federation) — setup, MCP tools, trust levels, circuit breaker, and the (opt-in) WireGuard mesh layer that ties packet-layer reachability to federation trust. ADR-111 deep-dive at [`docs/federation/phase7-mesh-bringup.md`](https://github.com/ruvnet/ruflo/blob/main/docs/federation/phase7-mesh-bringup.md).

**Federation capabilities**

|  | Capability | How it works |
| --- | --- | --- |
| 🔒 | **Zero-trust federation** | Remote agents start untrusted. Identity proven via mTLS + ed25519 challenge-response. No API keys, no shared secrets. |
| 🛡️ | **PII-gated data flow** | 14-type detection pipeline scans every outbound message. Per-trust-level policies: BLOCK, REDACT, HASH, or PASS. Adaptive calibration reduces false positives. |
| 📊 | **Behavioral trust scoring** | Formula (`0.4×success + 0.2×uptime + 0.2×threat + 0.2×integrity`) continuously evaluates peers. Upgrades require history; downgrades are instant. |
| 📋 | **Compliance built-in** | HIPAA, SOC2, GDPR audit trails as compliance modes. Every federation event produces a structured record searchable via HNSW. |
| 🤝 | **9 MCP tools + 10 CLI commands** | Full lifecycle: `federation_init`, `federation_send`, `federation_trust`, `federation_audit`, and more. |

**Example: two teams sharing fraud signals without sharing customer data**
```
# Team A: initialize federation and generate keypair
npx claude-flow@latest federation init

# Team A: join Team B's federation endpoint
npx claude-flow@latest federation join wss://team-b.example.com:8443

# Team A: send a task — PII is stripped automatically before it leaves
npx claude-flow@latest federation send --to team-b --type task-request \
  --message "Analyze transaction patterns for account anomalies"

# Team A: check peer trust levels and session health
npx claude-flow@latest federation status
```

See [issue #1669](https://github.com/ruvnet/ruflo/issues/1669) for the complete architecture, trust model, and implementation roadmap.

```
# Claude Code plugin
/plugin install ruflo-federation@ruflo

# Or via CLI
npx claude-flow@latest plugins install @claude-flow/plugin-agent-federation
```
**Claude Code: With vs Without Ruflo**

| Capability | Claude Code Alone | \+ Ruflo |
| --- | --- | --- |
| Agent Collaboration | Isolated, no shared context | Swarms with shared memory and consensus |
| Coordination | Manual orchestration | Queen-led hierarchy (Raft, Byzantine, Gossip) |
| Memory | Session-only | HNSW vector memory with sub-ms retrieval |
| Learning | Static behavior | SONA self-learning with pattern matching |
| Task Routing | You decide | Intelligent routing (89% accuracy) |
| Background Workers | None | 12 auto-triggered workers |
| LLM Providers | Anthropic only | 5 providers with failover |
| Security | Standard | CVE-hardened with AIDefence |

**Architecture overview**

```
User --> Claude Code / CLI
          |
          v
    Orchestration Layer
    (MCP Server, Router, 27 Hooks)
          |
          v
    Swarm Coordination
    (Queen, Topology, Consensus)
          |
          v
    100+ Specialized Agents
    (coder, tester, reviewer, architect, security...)
          |
          v
    Memory & Learning
    (AgentDB, HNSW, SONA, ReasoningBank)
          |
          v
    LLM Providers
    (Claude, GPT, Gemini, Cohere, Ollama)
```

---

## Documentation

Three docs for three audiences:

| Doc | When to read it |
| --- | --- |
| **[Status](https://github.com/ruvnet/ruflo/blob/main/docs/STATUS.md)** | See what currently works — capability counts, test baselines, recent fixes, what's next. The *is-it-ready* doc. |
| **[User Guide](https://github.com/ruvnet/ruflo/blob/main/docs/USERGUIDE.md)** | Daily reference — every command, every config flag, every plugin. The *how-do-I* doc. |
| **[Verification](https://github.com/ruvnet/ruflo/blob/main/verification.md)** | Cryptographically prove your installed bytes match the signed witness — `ruflo verify`. The *trust-but-verify* doc. |

User Guide section index:

| Section | Topics |
| --- | --- |
| [Quick Start](https://github.com/ruvnet/ruflo/blob/main/docs/USERGUIDE.md#quick-start) | Installation, prerequisites, install profiles |
| [Core Features](https://github.com/ruvnet/ruflo/blob/main/docs/USERGUIDE.md#-core-features) | MCP tools, agents, memory, neural learning |
| [Intelligence & Learning](https://github.com/ruvnet/ruflo/blob/main/docs/USERGUIDE.md#-intelligence--learning) | Hooks, workers, SONA, model routing |
| [Swarm & Coordination](https://github.com/ruvnet/ruflo/blob/main/docs/USERGUIDE.md#-swarm--coordination) | Topologies, consensus, hive mind |
| [Security](https://github.com/ruvnet/ruflo/blob/main/docs/USERGUIDE.md#%EF%B8%8F-security) | AIDefence, CVE remediation, validation |
| [Ecosystem](https://github.com/ruvnet/ruflo/blob/main/docs/USERGUIDE.md#-ecosystem--integrations) | RuVector, agentic-flow, Flow Nexus |
| [Configuration](https://github.com/ruvnet/ruflo/blob/main/docs/USERGUIDE.md#%EF%B8%8F-configuration--reference) | Environment variables, config schema |
| [Plugin Marketplace](https://ruvnet.github.io/ruflo) | Browse and install plugins |

---

## Support

| Resource | Link |
| --- | --- |
| Documentation | [User Guide](https://github.com/ruvnet/ruflo/blob/main/docs/USERGUIDE.md) |
| Issues & Bugs | [GitHub Issues](https://github.com/ruvnet/claude-flow/issues) |
| Enterprise | [ruv.io](https://ruv.io/) |
| Community | [Agentics Foundation Discord](https://discord.com/invite/dfxmpwkG2D) |
| Powered by | [Cognitum.one](https://cognitum.one/) |