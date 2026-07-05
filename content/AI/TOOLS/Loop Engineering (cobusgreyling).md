---
title: "Loop Engineering (cobusgreyling)"
date: 2026-07-05
enableToc: true
openToc: true
tags: ["tool", "ai", "coding-agents", "loop-engineering", "orchestration", "harness", "cli", "open-source"]
type: tool
source: "_raw/processed/2026-07-05_cobusgrayling-loop-engineering.md"
agent-created: true
summary: "cobusgreyling/loop-engineering — patterns, starters & CLI tools (loop-audit, loop-init, loop-cost) for building self-prompting loops around AI coding agents; the practical companion to the Loop Engineering concept."
---
# Loop Engineering (cobusgreyling)

`cobusgreyling/loop-engineering` — a practical, tool-aware reference repo for **[[Loop Engineering]]**: patterns you can clone, CLI tools that score readiness, and checklists to ship against. It operationalizes the Osmani/Cherny/Steinberger idea — *"stop prompting agents; design the loop that prompts them"* — for Grok, [[Claude Code]], Codex, Cursor and other coding agents.

Where [[Loop Engineering]] (the note) is the *why*, this is the *how*: `npx`-runnable CLIs, seven production patterns, and starter kits. MIT-licensed.

## 🔗 Links

### Description
- Repo: https://github.com/cobusgreyling/loop-engineering
- Showcase + interactive pattern picker: https://cobusgreyling.github.io/loop-engineering/
- Essay (Substack): https://cobusgreyling.substack.com/p/loop-engineering
- Canonical essay (Addy Osmani): https://addyosmani.com/blog/loop-engineering/
- Companion repo: [Goal Engineering](https://github.com/cobusgreyling/goal-engineering) — Grok Build `/goal` run-until-done objectives
- License: MIT

### Download or use

```bash
# 1. Scaffold a starter for a pattern + tool
npx @cobusgreyling/loop-init . --pattern daily-triage --tool grok

# 2. Estimate token spend for your cadence
npx @cobusgreyling/loop-cost --pattern daily-triage --level L1

# 3. Audit loop readiness (budget + run-log scored)
npx @cobusgreyling/loop-audit . --suggest
npx @cobusgreyling/loop-audit . --badge   # Loop Ready badge for README

# 4. First report-only loop (Grok example)
/loop 1d Run loop-triage. Update STATE.md. No auto-fix in week one.
```

No clone required — all three CLIs publish to npm from tagged releases. `loop-sync` (STATE.md ↔ LOOP.md drift) and an MCP runtime-lookup server ship in-repo.

## 🗒️ Description

### 🧩 The five building blocks + memory

The repo's core model — a loop is assembled from these primitives (mapped cross-tool in `primitives-matrix.md`):

| Primitive | Job in the loop |
|-----------|-----------------|
| Automations / Scheduling | Discovery + triage on a cadence |
| Worktrees | Safe parallel execution |
| Skills | Persistent project knowledge |
| Plugins & Connectors | Reach into real tools via MCP |
| Sub-agents | Maker / checker split |
| + Memory / State | Durable spine outside any conversation |

Anatomy: `Schedule → Triage skill → read/write STATE → isolated worktree → implementer sub-agent → verifier sub-agent (tests+gates) → MCP/Git/tickets → human gate → commit/PR or escalate → repeat`. This matches the external-state-in-a-DB fix argued in [[Loop Engineering]] — state lives outside any one agent session.

### 🧩 The seven patterns

Each ships with a starter kit, a suggested cadence, and a "week 1" maturity target:

| Pattern | Cadence | Token cost |
|---------|---------|------------|
| Daily Triage | 1d–2h | Low |
| PR Babysitter | 5–15m | High |
| CI Sweeper | 5–15m | Very high |
| Dependency Sweeper | 6h–1d | Medium |
| Changelog Drafter | 1d or tag | Low |
| Post-Merge Cleanup | 1d–6h | Low |
| Issue Triage | 2h–1d | Low |

Phased rollout is the discipline: **L1 report → L2 assisted fixes → L3 unattended**. Start report-only.

### 🧩 The three CLI tools

- **`loop-init`** — scaffolds a starter plus budget/run-log files for a chosen pattern + tool.
- **`loop-cost`** — token-spend estimator per cadence and maturity level; the antidote to the "one run cost a million tokens" problem.
- **`loop-audit`** — Loop Readiness Score (v1.4, with activity detection); `--suggest` recommends next steps, `--badge` emits a README badge.

## ✍️ Reasoning for

This is the missing checklist layer between the [[Loop Engineering]] concept and actually running loops on [[Qamera AI]] / [[PLSoft]] repos. The concept note's conclusion is "loop engineering ≈ [[Harness Engineering]], mind the cost/context downsides" — this repo turns those warnings into **scored gates**: `loop-cost` before you commit to a cadence, `loop-audit` to check you're not skipping verification, phased L1→L3 so nothing runs unattended before it's earned trust.

Most useful to me:
1. **`loop-cost` up front** — decide affordability before a loop bleeds tokens.
2. **The pattern catalog** — PR Babysitter / CI Sweeper / Issue Triage are exactly the recurring chores I'd hand a loop first.
3. **Report-only L1 default** — matches the human-in-the-loop caution I already trust from [[Archon]].

Caveat the repo states plainly: *loops amplify judgment — good and bad; verification is still on you; comprehension debt grows unless you read what the loop ships.*

## Alternatives considered

- **[[Archon]]** — a deterministic harness *engine* (YAML DAG + worktrees + Postgres durability). loop-engineering is patterns + audit CLIs, not a runtime; Archon is the heavier, deterministic answer to the same problem.
- **[[Loop Engineering]] via raw `/loop` `/goal` `/routines`** — the Claude Code primitives alone, no readiness scoring or cost estimation.
- **[[Karpathy Skills]] / [[Awesome Claude Code]]** — skill/prompt curation, not loop orchestration.

## 🔗 Resources

- Concepts doc (intent debt, comprehension debt, harness vs loop): https://github.com/cobusgreyling/loop-engineering/blob/main/docs/concepts.md
- Failure modes & anti-patterns catalogs: `docs/failure-modes.md`, `docs/anti-patterns.md`
- Multi-loop coordination (when loops collide): `docs/multi-loop.md`
- Author: [Cobus Greyling](https://github.com/cobusgreyling)

## 📖 Further reading

- [[Loop Engineering]] — the concept this repo implements (Cole Medin's skeptical take)
- [[Harness Engineering]] · [[Harness Engineering in Practice]] — the broader discipline loops fold into
- [[Context Engineering]] — why single-session loops poison context
- [[Token Optimization for Claude Code]] — related cost control
- [[Agentic Auto-Scheduling (COMPILOT)]] — a feedback loop inside a compiler
- [[4 Claude Code Upgrades for Making Money (Nate Herk)]] — `/goal` + subagents in practice

---
Template: [[templates/tool]]
