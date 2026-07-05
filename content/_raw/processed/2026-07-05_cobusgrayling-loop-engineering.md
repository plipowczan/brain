---
title: "cobusgreyling/loop-engineering: Practical patterns, starters & CLI tools for loop engineering with AI coding agents. Design systems that prompt and orchestrate agents (inspired by Addy Osmani and Boris Cherny). Includes loop-audit, loop-init, loop-cost."
source: "https://github.com/cobusgreyling/loop-engineering"
author:
published:
created: 2026-06-30
description: "Practical patterns, starters & CLI tools for loop engineering with AI coding agents. Design systems that prompt and orchestrate agents (inspired by Addy Osmani and Boris Cherny). Includes loop-audit, loop-init, loop-cost. - cobusgreyling/loop-engineering"
tags:
  - "clippings"
---
## Loop Engineering

[![[4f70d207c0b79fba77828b41ee27d6d2_MD5.svg]]](https://cobusgreyling.github.io/loop-engineering/)

[![[575ae9fdac0810ebfae91caea366f9a2_MD5.jpg]]](https://github.com/cobusgreyling/loop-engineering/blob/main/assets/visuals/LE5.jpeg)

**Loop engineering is replacing yourself as the person who prompts the agent. You design the system that does it instead.**

**New here?** [Quickstart (5 min)](https://github.com/cobusgreyling/loop-engineering/blob/main/docs/QUICKSTART.md) · [Interactive picker](https://cobusgreyling.github.io/loop-engineering/#interactive)

For developers using Grok, Claude Code, Codex, Cursor, and other AI coding agents.

A loop is a recursive goal: you define a purpose and the AI iterates (often with sub-agents, verification, and external state) until the goal is complete or the loop decides to hand off to you.

**[→ Interactive showcase + pattern picker](https://cobusgreyling.github.io/loop-engineering/)**  
**[→ Loop Engineering essay (Substack)](https://cobusgreyling.substack.com/p/loop-engineering)**  
[Canonical essay by Addy Osmani](https://addyosmani.com/blog/loop-engineering/)

## Contents

## Quick Links

| Start here | Description |
| --- | --- |
| [Quickstart (5 min)](https://github.com/cobusgreyling/loop-engineering/blob/main/docs/QUICKSTART.md) | Scaffold → cost check → audit → first loop — **start here if you just landed** |
| [Loop Engineering essay](https://cobusgreyling.substack.com/p/loop-engineering) | The concept, primitives, and Grok mapping — read for the why |
| [Pattern Picker](https://github.com/cobusgreyling/loop-engineering/blob/main/docs/pattern-picker.md) | Which loop to run first — **start here if unsure** |
| [Primitives Matrix](https://github.com/cobusgreyling/loop-engineering/blob/main/docs/primitives-matrix.md) | Grok vs Claude Code vs Codex — bookmark this |
| [Loop Design Checklist](https://github.com/cobusgreyling/loop-engineering/blob/main/docs/loop-design-checklist.md) | Ship readiness rubric |
| [Patterns](https://github.com/cobusgreyling/loop-engineering/blob/main/patterns/README.md) | 7 production patterns + [interactive picker](https://cobusgreyling.github.io/loop-engineering/#interactive) |
| [Starters](https://github.com/cobusgreyling/loop-engineering/blob/main/starters) | Clone-and-run kits (Grok, Claude Code, Codex) |
| [loop-audit](https://github.com/cobusgreyling/loop-engineering/blob/main/tools/loop-audit) | Loop Readiness Score CLI (v1.4 + activity detection) — `npx @cobusgreyling/loop-audit . --suggest` · `--badge` for README |
| [loop-init](https://github.com/cobusgreyling/loop-engineering/blob/main/tools/loop-init) | Scaffold starters + budget/run-log (v1.2) — `npx @cobusgreyling/loop-init . --pattern daily-triage --tool grok` |
| [loop-cost](https://github.com/cobusgreyling/loop-engineering/blob/main/tools/loop-cost) | Token spend estimator — `npx @cobusgreyling/loop-cost` |
| [loop-sync](https://github.com/cobusgreyling/loop-engineering/blob/main/tools/loop-sync) | Drift detection between `STATE.md` and `LOOP.md` — `node tools/loop-sync/dist/cli.js .` |
| [loop-mcp-server](https://github.com/cobusgreyling/loop-engineering/blob/main/tools/mcp-server) | MCP runtime lookup for patterns, skills, state — `node tools/mcp-server/dist/index.js` (repo v1; npm pending) |
| [Goal Engineering](https://github.com/cobusgreyling/goal-engineering) | Companion: Grok Build `/goal` — run-until-done objectives (`npx @cobusgreyling/goal-audit`) |
| [Stories](https://github.com/cobusgreyling/loop-engineering/blob/main/stories) | Real wins and honest failures |
| [Community update](https://github.com/cobusgreyling/loop-engineering/discussions/89) | **New:** 7 community PRs merged — loop-sync, constraints, MCP server |

[![[5142e50669651770558245f4e36c3bca_MD5.svg]]](https://github.com/cobusgreyling/loop-engineering/blob/main/assets/visuals/section-divider.svg)

## Why This Matters

Peter Steinberger:

> “You shouldn’t be prompting coding agents anymore. You should be designing loops that prompt your agents.”

Boris Cherny (Head of Claude Code at Anthropic):

> “I don’t prompt Claude anymore. I have loops running that prompt Claude and figuring out what to do. My job is to write loops.”

The leverage point has moved from crafting individual prompts to designing the control systems that orchestrate agents over time.

## The Five Building Blocks + Memory

| Primitive | Job in the Loop |
| --- | --- |
| **Automations / Scheduling** | Discovery + triage on a cadence |
| **Worktrees** | Safe parallel execution |
| **Skills** | Persistent project knowledge |
| **Plugins & Connectors** | Reach into your real tools (MCP) |
| **Sub-agents** | Maker / checker split |
| **\+ Memory / State** | Durable spine outside any conversation |

Full detail: [docs/primitives.md](https://github.com/cobusgreyling/loop-engineering/blob/main/docs/primitives.md) · Cross-tool matrix: [docs/primitives-matrix.md](https://github.com/cobusgreyling/loop-engineering/blob/main/docs/primitives-matrix.md)

### Visual Overview

[![[67851269b15c2eb26ba100aa54b54168_MD5.jpg]]](https://github.com/cobusgreyling/loop-engineering/blob/main/assets/visuals/primitives-infographic.jpg)

### Anatomy of a Loop

[![[e7169e245884159cea8c2e48d69bc78c_MD5.svg]]](https://github.com/cobusgreyling/loop-engineering/blob/main/assets/visuals/loop-cycle-animated.svg)

Mermaid diagram (copy-friendly)

```
flowchart LR
    A[Schedule / Automation] --> B[Triage Skill]
    B --> C[Read + Write STATE / Memory]
    C --> D[Isolated Worktree]
    D --> E[Implementer Sub-agent]
    E --> F[Verifier Sub-agent<br/>tests + gates]
    F --> G[MCP / Git / Tickets]
    G --> H{Human Gate?}
    H -->|safe / allowlisted| I[Commit / PR / Action]
    H -->|risky / ambiguous| J[Escalate to human<br/>with full context]
    I --> A
    J --> A
```

**This reference repo now runs its own `validate-patterns` + `audit` workflows on every push/PR** (see `.github/workflows/`). We also added `LOOP.md` describing the loops that will maintain it.

## Patterns

[![[a813f816e2ee296ea269e10d840588f9_MD5.svg]]](https://github.com/cobusgreyling/loop-engineering/blob/main/assets/visuals/patterns-overview.svg)

| Pattern | Cadence | Starter | Week 1 | Token cost |
| --- | --- | --- | --- | --- |
| [Daily Triage](https://github.com/cobusgreyling/loop-engineering/blob/main/patterns/daily-triage.md) | 1d–2h | [minimal-loop](https://github.com/cobusgreyling/loop-engineering/blob/main/starters/minimal-loop) | **L1** report | Low |
| [PR Babysitter](https://github.com/cobusgreyling/loop-engineering/blob/main/patterns/pr-babysitter.md) | 5–15m | [pr-babysitter](https://github.com/cobusgreyling/loop-engineering/blob/main/starters/pr-babysitter) | L1 watch | High |
| [CI Sweeper](https://github.com/cobusgreyling/loop-engineering/blob/main/patterns/ci-sweeper.md) | 5–15m | [ci-sweeper](https://github.com/cobusgreyling/loop-engineering/blob/main/starters/ci-sweeper) | L2 cautious | Very high |
| [Dependency Sweeper](https://github.com/cobusgreyling/loop-engineering/blob/main/patterns/dependency-sweeper.md) | 6h–1d | [dependency-sweeper](https://github.com/cobusgreyling/loop-engineering/blob/main/starters/dependency-sweeper) | L2 patch-only | Medium |
| [Changelog Drafter](https://github.com/cobusgreyling/loop-engineering/blob/main/patterns/changelog-drafter.md) | 1d or tag | [changelog-drafter](https://github.com/cobusgreyling/loop-engineering/blob/main/starters/changelog-drafter) | **L1** draft | Low |
| [Post-Merge Cleanup](https://github.com/cobusgreyling/loop-engineering/blob/main/patterns/post-merge-cleanup.md) | 1d–6h | [post-merge-cleanup](https://github.com/cobusgreyling/loop-engineering/blob/main/starters/post-merge-cleanup) | **L1** off-peak | Low |
| [Issue Triage](https://github.com/cobusgreyling/loop-engineering/blob/main/patterns/issue-triage.md) | 2h–1d | [issue-triage](https://github.com/cobusgreyling/loop-engineering/blob/main/starters/issue-triage) | **L1** propose-only | Low |

Not sure which to pick? Try the [interactive picker](https://cobusgreyling.github.io/loop-engineering/#interactive) or [pattern-picker](https://github.com/cobusgreyling/loop-engineering/blob/main/docs/pattern-picker.md).

Machine-readable index: [patterns/registry.yaml](https://github.com/cobusgreyling/loop-engineering/blob/main/patterns/registry.yaml) (7 patterns)

## Getting Started (5 minutes)

```
# 1. Scaffold a starter (or copy manually — see starters/)
npx @cobusgreyling/loop-init . --pattern daily-triage --tool grok

# 2. Estimate token spend for your cadence
npx @cobusgreyling/loop-cost --pattern daily-triage --level L1

# 3. Audit readiness (budget + run-log now scored)
npx @cobusgreyling/loop-audit . --suggest

# Optional: paste Loop Ready badge into your README
npx @cobusgreyling/loop-audit . --badge

# 4. See scores climb: empty → L1 → L2
bash scripts/before-after-demo.sh

# 5. Start report-only (Grok example)
/loop 1d Run loop-triage. Update STATE.md. No auto-fix in week one.
```

All three CLIs publish to npm from tagged releases — see [docs/RELEASE.md](https://github.com/cobusgreyling/loop-engineering/blob/main/docs/RELEASE.md). No clone required.

**Develop from source** (monorepo contributors):

```
cd tools/loop-init && npm ci && npm test && node dist/cli.js /path/to/project --pattern daily-triage --tool grok
cd tools/loop-audit && npm ci && npm test && node dist/cli.js /path/to/project --suggest
cd tools/loop-cost && npm ci && npm test && node dist/cli.js --pattern ci-sweeper --cadence 15m
```

Phased rollout: **L1 report → L2 assisted fixes → L3 unattended** — see [loop-design-checklist](https://github.com/cobusgreyling/loop-engineering/blob/main/docs/loop-design-checklist.md).

## Examples by Tool

- [Grok](https://github.com/cobusgreyling/loop-engineering/blob/main/examples/grok/daily-triage.md)
- [Claude Code](https://github.com/cobusgreyling/loop-engineering/blob/main/examples/claude-code)
- [Codex](https://github.com/cobusgreyling/loop-engineering/blob/main/examples/codex)
- [OpenClaw](https://github.com/cobusgreyling/loop-engineering/blob/main/examples/openclaw/daily-triage.md)
- [GitHub Actions](https://github.com/cobusgreyling/loop-engineering/blob/main/examples/github-actions)

## Operating & Safety

- [Failure Modes](https://github.com/cobusgreyling/loop-engineering/blob/main/docs/failure-modes.md) — incident-style catalog
- [Anti-Patterns](https://github.com/cobusgreyling/loop-engineering/blob/main/docs/anti-patterns.md) — design mistakes before production
- [Multi-Loop Coordination](https://github.com/cobusgreyling/loop-engineering/blob/main/docs/multi-loop.md) — when loops collide
- [Operating Loops](https://github.com/cobusgreyling/loop-engineering/blob/main/docs/operating-loops.md) — cost, logging, when to kill
- [Safety](https://github.com/cobusgreyling/loop-engineering/blob/main/docs/safety.md) — denylist, auto-merge, MCP scopes
- [Security](https://github.com/cobusgreyling/loop-engineering/blob/main/SECURITY.md) — reporting and unattended automation risks
- [Concepts](https://github.com/cobusgreyling/loop-engineering/blob/main/docs/concepts.md) — intent debt, comprehension debt, harness vs loop
- [MCP Cookbook](https://github.com/cobusgreyling/loop-engineering/blob/main/examples/mcp) — connector examples by pattern

## Caveats

Loop engineering amplifies judgment — both good and bad.

- **Token costs** can explode with sub-agents and long-running loops.
- **Verification is still on you.** Unattended loops make unattended mistakes.
- **Comprehension debt** grows faster unless you read what the loop ships.
- Two people can run the same loop and get opposite results. The loop doesn't know. You do.

Addy Osmani:

> “Build the loop. But build it like someone who intends to stay the engineer, not just the person who presses go.”

## Contributing

Share production patterns, tool mappings, and failure stories. See [CONTRIBUTING.md](https://github.com/cobusgreyling/loop-engineering/blob/main/CONTRIBUTING.md), [adopters](https://github.com/cobusgreyling/loop-engineering/blob/main/docs/adopters.md), and [GitHub Discussions](https://github.com/cobusgreyling/loop-engineering/discussions).

## Sources

- [Cobus Greyling – Loop Engineering (Substack)](https://cobusgreyling.substack.com/p/loop-engineering)
- [Addy Osmani – Loop Engineering](https://addyosmani.com/blog/loop-engineering/)
- [Attribution & further reading](https://github.com/cobusgreyling/loop-engineering/blob/main/resources/sources.md)

## License

MIT

---

*Practical, tool-aware reference for loop engineering, patterns you can clone, checklists you can ship against, and stories that include what broke.*

[Essay](https://cobusgreyling.substack.com/p/loop-engineering) · [Showcase](https://cobusgreyling.github.io/loop-engineering/) · [Cobus Greyling](https://github.com/cobusgreyling)[![[9a63550f88d5a3575ab8660e11507a21_MD5.svg]]](https://www.star-history.com/?repos=cobusgreyling%2Floop-engineering&type=timeline&legend=top-left)