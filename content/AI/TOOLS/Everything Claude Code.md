---
title: "Everything Claude Code"
date: 2026-05-16
enableToc: true
openToc: true
tags: ["tool", "ai", "claude-code", "codex", "cursor", "opencode", "harness", "skills", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-07-06_affaan-mECC The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.md"
agent-created: true
agent-reviewed: 2026-07-06
summary: "ECC (affaan-m) — cross-harness agent perf system (repo renamed everything-claude-code → ECC): ~67 agents, ~277 skills, hooks, instincts, AgentShield, orch-* orchestrators, ECC 2.0 Rust control-plane. 211K+ stars, MIT."
---

# Everything Claude Code

> **ECC** (formerly *Everything Claude Code*) is a performance optimization system for agent harnesses — not just Claude Code, but also **Codex**, **Cursor**, **OpenCode**, **Gemini**, **GitHub Copilot**, **Hermes**. Anthropic Hackathon winner, MIT, **211.9K+ stars**, 230+ contributors, single maintainer ([affaan-m](https://github.com/affaan-m)) ships weekly across 7 harnesses.

> [!note] Renamed
> Upstream renamed the repo **`everything-claude-code` → `affaan-m/ECC`**. This note keeps its old filename so existing backlinks stay intact; treat *ECC* as the canonical name. (A future [[refactor]] can rename the note if desired.)

## 🚀 What it is

- Repo: https://github.com/affaan-m/ECC  ·  npm: `ecc-universal`  ·  plugin id: `ecc@ecc`
- **v2.0.0 stable** (Jun 2026): install surface ≈ **67 agents, 277 skills, 93 legacy command shims** (release notes cite 261 skills; the public surface count keeps moving)
- License: **MIT** (forever); **ECC Pro** ($19/seat/mo) — private repos via GitHub App
- Requires **Claude Code CLI v2.1.0+** (plugin hook-loading changed at 2.1)
- ECC 2.0 — **Rust control-plane** (`ecc2/`) with `dashboard`, `start`, `sessions`, `status`, `stop`, `resume`, `daemon`

## 🧩 What you get

| Layer | Details |
|---|---|
| **Skills** | ≈277 — `frontend-slides`, `pytorch-patterns`, `mcp-server-patterns`, `search-first`, `cost-aware-llm-pipeline`, plus skill packs: **Itô prediction-market** (`ito-market-intelligence`, `ito-trade-planner`…), **optimization** (`parallel-execution-optimizer`, `benchmark-optimization-loop`, `latency-critical-systems`, `recursive-decision-ledger`), **MLE** (`mle-workflow`) |
| **Agents** | ≈67 — `typescript-reviewer`, `java-reviewer`, `kotlin-reviewer`, `mle-reviewer`, build resolvers per language, `harness-optimizer`, `loop-operator`, operator lane (`chief-of-staff`, `brand-voice`, `social-graph-ranker`, `customer-billing-ops`, `google-workspace-ops`) |
| **Control pane** | v2.0.0 substrate — session adapters + MCP inventory, the **worktree-lifecycle service**, and the **`orch-*` orchestrator family** |
| **Hooks** | profile gating via `ECC_HOOK_PROFILE=minimal\|standard\|strict` + `ECC_DISABLED_HOOKS=...` — no file edits. v2.1+ **auto-loads** `hooks/hooks.json`; never declare it in `plugin.json` (duplicate error) |
| **Memory** | session adapters, SQLite state store, skill evolution (self-improving skills); `ECC_AGENT_DATA_HOME` isolates data roots so Claude Code and Cursor don't overwrite each other's sessions |
| **Security** | **AgentShield** — 102 rules, `/security-scan` from Claude Code, 1282 tests; `--opus` runs a red-team/blue-team/auditor Opus pipeline |
| **MCP policy** | ships exactly **one** default connector (`chrome-devtools`); a June 2026 audit retired the previous six defaults — everything else is a skill wrapping a CLI/REST API |
| **Multi-language rules** | 12 ecosystems: TS, Python, Go, Java, PHP, Perl, Kotlin/Android/KMP, C++, Rust, Swift, ArkTS, common |
| **PM2 / multi-agent** | `/pm2`, `/multi-plan`, `/multi-execute`, `/multi-backend`, `/multi-frontend`, `/multi-workflow` (needs the `ccg-workflow` runtime: `npx ccg-workflow`) |
| **Operator status** | `ecc status --markdown --write status.md` → portable handoff (readiness, sessions, install health, governance, Linear/GitHub work items) |
| **Dashboard GUI** | Tkinter desktop app (`ecc_dashboard.py` or `npm run dashboard`), dark/light theme |

## ☘️ Why it matters

ECC is today the **most serious reference implementation** of the "harness as a product" approach:
- **Cross-harness parity** — the same stack is meant to run on Claude Code, Codex, Cursor, OpenCode — an answer to the fragmentation flagged in [[Awesome Agent Skills]]
- **Hermes operator story** in rc.1 — ECC directly integrates [[Hermes Agent]] as the operator workflow layer
- **Continuous learning v2** — instinct-based learning with confidence scoring and evolution — a practical answer to [[DELEGATE-52]] (LLMs corrupt 25% of docs after 20 delegated edits)
- **Token Optimization, Memory Persistence, Verification Loops, Parallelization (worktrees), Subagent Orchestration** — topics from [[Token Optimization for Claude Code]], [[Context Engineering]], [[Progressive Disclosure]] gathered into one working system

## 🧠 Philosophy (from the guides)

3 guides outside the repo (raw code only): **Shorthand Guide** (philosophy), **Longform Guide** (token optimization, memory persistence, evals, parallelization), **Security Guide** (attack vectors, sandboxing, CVEs, AgentShield). Six themes:

- Model selection + system prompt slimming + background processes
- Hooks save/load context across sessions automatically
- Auto-extract patterns from sessions → reusable skills
- Checkpoint vs continuous evals, grader types, pass@k
- Git worktrees, the cascade method, when to scale up instances
- Iterative retrieval pattern for subagent orchestration

## ✍️ Quick Start (pick ONE path)

> [!warning] Official sources only
> Install ECC only from verified channels: the repo [github.com/affaan-m/ECC](https://github.com/affaan-m/ECC), npm `ecc-universal` / `ecc-agentshield`, the GitHub App, plugin slug `ecc@ecc`, and [ecc.tools](https://ecc.tools/). Third-party mirrors are unreviewed and may contain malware.

```bash
# Plugin path (recommended for most)
/plugin marketplace add https://github.com/affaan-m/ECC
/plugin install ecc@ecc

# Manual installer (instead of the plugin, NOT together)
./install.sh --profile full
# .\install.ps1 --profile full
# npx ecc-install --profile full

# Low-context / no-hooks
./install.sh --profile minimal --target claude

# Consult — which profile/component
npx ecc consult "security reviews" --target claude
```

**Cardinal rule:** "Do not stack install methods. Most common broken setup: `/plugin install` first, then `install.sh --profile full`." Repair flow:

```bash
node scripts/ecc.js list-installed
node scripts/ecc.js doctor
node scripts/ecc.js repair
node scripts/uninstall.js --dry-run
```

The plugin does **not** distribute `rules/` — after `/plugin install` you manually copy just the `rules/common` you care about + one language:

```bash
mkdir -p ~/.claude/rules/ecc
cp -R rules/common ~/.claude/rules/ecc/
cp -R rules/typescript ~/.claude/rules/ecc/
```

## 🗒️ Naming triad

- GitHub repo: `affaan-m/ECC` (renamed from `everything-claude-code`)
- Marketplace/plugin id: `ecc@ecc` (short — strict Desktop/API validators)
- npm: `ecc-universal`

These are three different identifiers, **not aliases** — npm intentionally stayed `ecc-universal` while the marketplace uses `ecc@ecc`.

## 📒 Status (v2.0.0 stable, Jun 2026)

- Stable graduation of the 2.0 line: control-pane substrate, worktree-lifecycle service, `orch-*` orchestrator family, ECC Discord launched
- Install surface ≈ 67 agents / 277 skills / 93 legacy shims (release notes cite 261 skills — the public count keeps moving release to release)
- Operator lane + media tooling (`manim-video`, `remotion-video-creation`)
- ECC 2.0 Rust control-plane usable as alpha; 997+ internal tests passing

## 🧩 Related

- [[Awesome Claude Code]] — wider list of resources
- [[Awesome Agent Skills]] — VoltAgent multi-platform skills catalog
- [[Agent Skills]] — Anthropic skill protocol
- [[Karpathy Skills]] — single CLAUDE.md vs ECC's full stack
- [[Superpowers]] — methodology alternative from obra
- [[gstack]] — Garry Tan's opinionated stack
- [[Vercel Skills]] — `npx skills` cross-harness installer
- [[Hermes Agent]] — operator layer ECC rc.1 integrates
- [[Archon]] — harness builder (YAML workflows)
- [[Claude Code]], [[Cursor]]
- [[Harness Engineering]], [[Context Engineering]], [[Token Optimization for Claude Code]], [[Progressive Disclosure]]
- [[Skills 2.0 Testing]], [[DELEGATE-52]]
- [[Agentic Systems]]

## 🔗 Resources

- Repo: https://github.com/affaan-m/ECC
- Guides (outside the repo — raw code only): Shorthand Guide (philosophy), Longform Guide (token optimization, memory, evals, parallelization)
- AgentShield: https://github.com/affaan-m/agentshield · npm `ecc-agentshield`
- Marketplace: ECC Tools GitHub App — https://github.com/marketplace/ecc-tools
- Pro: https://ecc.tools/pricing · Sponsors: https://github.com/sponsors/affaan-m
- Hermes setup: docs/HERMES-SETUP.md, cross-harness arch: docs/architecture/cross-harness.md
