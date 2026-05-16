---
title: "Everything Claude Code"
date: 2026-05-16
enableToc: true
openToc: true
tags: ["tool", "ai", "claude-code", "codex", "cursor", "opencode", "harness", "skills", "open-source", "mit"]
type: tool
source: "_raw/inbox/affaan-meverything-claude-code The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond.md"
agent-created: true
summary: "ECC (affaan-m) — cross-harness agent perf system: 60 agents, 230 skills, hooks, instincts, AgentShield, ECC 2.0 Rust control-plane alpha"
---

# Everything Claude Code

> **Everything Claude Code (ECC)** to system optymalizacji performance dla agent harnesses — nie tylko Claude Code, ale też **Codex**, **Cursor**, **OpenCode**, **Gemini**, **GitHub Copilot**, **Hermes**. Anthropic Hackathon winner, MIT, 182K+ stars, single maintainer ([affaan-m](https://github.com/affaan-m)) ships weekly across 7 harnesses.

## 🚀 Co to jest

- Repo: https://github.com/affaan-m/everything-claude-code
- npm: `ecc-universal`, plugin id: `ecc@ecc`
- v2.0.0-rc.1 (Apr 2026): **60 agents, 230 skills, 75 legacy command shims**
- License: **MIT** (forever); **ECC Pro** ($19/seat/mo) — private repos via GitHub App
- ECC 2.0 — **Rust control-plane** prototype (`ecc2/`) z `dashboard`, `start`, `sessions`, `status`, `daemon`

## 🧩 Co dostajesz

| Warstwa | Szczegóły |
|---|---|
| **Skills** | 230, w tym `frontend-slides`, `pytorch-patterns`, `mcp-server-patterns`, `bun-runtime`, `nextjs-turbopack`, `search-first`, `content-hash-cache-pattern`, `cost-aware-llm-pipeline` |
| **Agents** | 60 — `typescript-reviewer`, `java-reviewer`, `kotlin-reviewer`, build-resolvery per język, operator lane (`brand-voice`, `social-graph-ranker`, `customer-billing-ops`, `google-workspace-ops`) |
| **Hooks** | profile gating via `ECC_HOOK_PROFILE=minimal\|standard\|strict` + `ECC_DISABLED_HOOKS=...` — bez edycji plików |
| **Memory** | session adapters, SQLite state store, skill evolution (self-improving skills) |
| **Security** | **AgentShield** — 102 rules, `/security-scan` z Claude Code, 1282 testów |
| **Multi-language rules** | 12 ekosystemów: TS, Python, Go, Java, PHP, Perl, Kotlin/Android/KMP, C++, Rust, common |
| **PM2 / multi-agent** | `/pm2`, `/multi-plan`, `/multi-execute`, `/multi-backend`, `/multi-frontend`, `/multi-workflow` |
| **Operator status** | `ecc status --markdown --write status.md` → portable handoff (readiness, sessions, install health, governance, Linear/GitHub work items) |
| **Dashboard GUI** | Tkinter desktop app (`ecc_dashboard.py` lub `npm run dashboard`), dark/light theme |

## ☘️ Dlaczego to ważne

ECC jest dziś **najpoważniejszą referencyjną implementacją** podejścia "harness as a product":
- **Cross-harness parity** — ten sam stack ma działać na Claude Code, Codex, Cursor, OpenCode — odpowiada na fragmentację z [[Awesome Agent Skills]]
- **Hermes operator story** w rc.1 — ECC wprost integruje [[Hermes Agent]] jako warstwę operator workflow
- **Continuous learning v2** — instinct-based learning z confidence scoring i ewolucją — praktyczna odpowiedź na [[DELEGATE-52]] (LLMs corrupt 25% docs after 20 delegated edits)
- **Token Optimization, Memory Persistence, Verification Loops, Parallelization (worktrees), Subagent Orchestration** — tematy z [[Token Optimization for Claude Code]], [[Context Engineering]], [[Progressive Disclosure]] zebrane w jeden działający system

## 🧠 Filozofia (z guides)

3 guides poza repo (raw code only): **Shorthand Guide** (philosophy), **Longform Guide** (token optimization, memory persistence, evals, parallelization), **Security Guide** (attack vectors, sandboxing, CVEs, AgentShield). Sześć tematów:

- Model selection + system prompt slimming + background processes
- Hooks save/load context across sessions automatically
- Auto-extract patterns from sessions → reusable skills
- Checkpoint vs continuous evals, grader types, pass@k
- Git worktrees, cascade method, kiedy skalować instancje
- Iterative retrieval pattern dla subagent orchestration

## ✍️ Quick Start (pick ONE path)

```bash
# Plugin path (zalecane dla większości)
/plugin marketplace add https://github.com/affaan-m/everything-claude-code
/plugin install ecc@ecc

# Manual installer (zamiast plugina, NIE razem)
./install.sh --profile full
# .\install.ps1 --profile full
# npx ecc-install --profile full

# Low-context / no-hooks
./install.sh --profile minimal --target claude

# Consult — który profil/komponent
npx ecc consult "security reviews" --target claude
```

**Cardinal rule:** "Do not stack install methods. Most common broken setup: `/plugin install` first, then `install.sh --profile full`." Repair flow:

```bash
node scripts/ecc.js list-installed
node scripts/ecc.js doctor
node scripts/ecc.js repair
node scripts/uninstall.js --dry-run
```

Plugin **nie** dystrybuuje `rules/` — po `/plugin install` ręcznie kopiujesz tylko interesujące Cię `rules/common` + jeden język:

```bash
mkdir -p ~/.claude/rules/ecc
cp -R rules/common ~/.claude/rules/ecc/
cp -R rules/typescript ~/.claude/rules/ecc/
```

## 🗒️ Naming triada

- GitHub repo: `affaan-m/everything-claude-code`
- Marketplace/plugin id: `ecc@ecc` (krótki — strict Desktop/API validators)
- npm: `ecc-universal`

To trzy różne identyfikatory, **nie aliasy**.

## 📒 Status (v2.0.0-rc.1, Apr 2026)

- Public surface synced — 60 agents, 230 skills, 75 legacy shims = realne liczby OSS
- Operator lane + media tooling (`manim-video`, `remotion-video-creation`)
- ECC 2.0 Rust control-plane usable as alpha
- 997+ internal tests passing

## 🧩 Powiązane

- [[Awesome Claude Code]] — szersza lista zasobów
- [[Awesome Agent Skills]] — VoltAgent multi-platform skills catalog
- [[Agent Skills]] — Anthropic skill protocol
- [[Karpathy Skills]] — single CLAUDE.md vs ECC's full stack
- [[Superpowers]] — alternatywa-metodologia od obra
- [[gstack]] — Garry Tan's opinionated stack
- [[Vercel Skills]] — `npx skills` cross-harness installer
- [[Hermes Agent]] — operator layer ECC rc.1 integruje
- [[Archon]] — harness builder (YAML workflows)
- [[Claude Code]], [[Cursor]]
- [[Harness Engineering]], [[Context Engineering]], [[Token Optimization for Claude Code]], [[Progressive Disclosure]]
- [[Skills 2.0 Testing]], [[DELEGATE-52]]
- [[Agentic Systems]]

## 🔗 Resources

- Repo: https://github.com/affaan-m/everything-claude-code
- Marketplace: ECC Tools GitHub App — https://github.com/marketplace/ecc-tools
- Pro: https://ecc.tools/pricing
- Sponsors: https://github.com/sponsors/affaan-m
- Hermes setup: docs/HERMES-SETUP.md, cross-harness arch: docs/architecture/cross-harness.md
