---
title: "gstack"
date: 2026-05-03
enableToc: true
openToc: true
tags: ["tool", "ai", "claude-code", "coding-agents", "skills", "workflow", "open-source"]
type: tool
source: "_raw/inbox/garrytangstack Use Garry Tan's exact Claude Code setup 23 opinionated tools that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA.md"
agent-created: true
summary: "Garry Tan's (YC) opinionated Claude Code stack — 23+ skills as a virtual team (CEO/Designer/EngMgr/QA/SRE), MIT, sprint-driven (Think→Plan→Build→Review→Test→Ship→Reflect)"
---

# gstack

`garrytan/gstack` — **23+ opinionated skills for [[Claude Code]]** from Garry Tan (CEO of Y Combinator). Turns Claude Code into a virtual team: a CEO who thinks the problem through, an eng manager who freezes the architecture, a designer who catches AI slop, a reviewer hunting production bugs, a QA opening a real browser, a security officer (OWASP+STRIDE), a release engineer opening the PR. Everything as slash commands in Markdown, MIT licensed.

Author's reference point: in 60 days he shipped 600k+ lines of production code (35% tests), 10-20k lines per day part-time, while writing for YC full-time.

## 🔗 Links

### Description
- Repo: https://github.com/garrytan/gstack
- License: MIT
- Requirements: [[Claude Code]], Git, Bun ≥1.0, Node.js (Windows)

### Download or use

```bash
# Paste the prompt into Claude Code (installs globally + appends a section to CLAUDE.md):
# "Install gstack: run git clone --single-branch --depth 1
#  https://github.com/garrytan/gstack.git ~/.claude/skills/gstack
#  && cd ~/.claude/skills/gstack && ./setup ..."
```

Also works on Codex / Gemini CLI / Cursor / Factory Droid via `--host codex|auto|factory`.

## 🗒️ Description

### 🧩 7-step sprint (Think → Plan → Build → Review → Test → Ship → Reflect)

Key idea: **the skills feed each other**. `/office-hours` writes a design doc → `/plan-ceo-review` reads it → `/plan-eng-review` produces a test plan → `/qa` runs it → `/review` catches bugs → `/ship` verifies the fix.

| Skill | Role | What it does |
|-------|------|--------|
| `/office-hours` | YC Office Hours | 6 forcing questions before code; pushback on framing, alternatives, design doc for downstream |
| `/plan-ceo-review` | CEO/Founder | Find the 10-star product within the request; 4 modes (Expansion/Selective/Hold/Reduction) |
| `/plan-eng-review` | Eng Manager | Architecture, data flow, ASCII diagrams, edge cases, test matrix |
| `/plan-design-review` | Senior Designer | 0-10 score per design dimension; AI Slop detection; AskUserQuestion per choice |
| `/design-consultation` | Design Partner | Full design system from scratch (research + creative risks + mockups) |
| `/design-shotgun` | Design Explorer | Many variants, comparison board in the browser, taste memory |
| `/design-html` | Design Engineer | Production HTML with Pretext (text reflow, dynamic heights), framework detection |
| `/review` | Staff Engineer | Bugs that will pass CI and blow up in prod; auto-fix + completeness gaps |
| `/investigate` | Debugger | Iron Law: no fixes without investigation; 3-fail stop rule |
| `/cso` | Chief Security Officer | OWASP Top 10 + STRIDE; 17 false-positive exclusions, 8/10+ confidence gate |
| `/qa` | QA Lead | Real browser, clicks the flows, fixes them, regression test per fix |
| `/ship` | Release Engineer | Sync main + tests + coverage audit + push + PR; bootstraps a test framework if missing |
| `/land-and-deploy` | Release Engineer | Merge → wait for CI → deploy → verify production health |
| `/canary` | SRE | Post-deploy monitoring (console errors, perf, page failures) |
| `/codex` | Second Opinion | Independent review with OpenAI Codex CLI; 3 modes (review/adversarial/consultation) |
| `/retro` | Eng Manager | Weekly retro per-person; `/retro global` cross-projects + cross-AI (CC/Codex/Gemini) |
| `/learn` | Memory | Cross-session learnings: review/search/prune/export project patterns |

### 🧩 Power tools

`/careful` (warning before `rm -rf`/`DROP TABLE`/force-push), `/freeze` (lock edits to a single directory), `/guard` (= careful + freeze), `/connect-chrome` (Side Panel extension, watch live), `/setup-deploy`, `/gstack-upgrade`.

### 🧩 Real browser mode

`$B connect` launches your Chrome as a headed window controlled by Playwright — you see every click the agent makes live. The side panel = chat sidebar for directly steering Claude. `$B handoff` for CAPTCHA/MFA: open a visible Chrome with cookies, solve it, `$B resume`.

## ✍️ Reasoning for

The strongest pieces for me: **`/qa` with a real browser** + **`/codex` as a cross-model second opinion** + **`/retro global`**. These are exactly the spots in my workflow on [[Qamera AI]] / [[PLSoft]] where I lose the most time on manual checking. `/document-release` also sounds like something I need for [[Brain]] (auto-updating README/CLAUDE.md/CONTRIBUTING).

Risks and limitations:
- 23+ skills = a large surface to learn. Plan: start with `/office-hours` + `/review` + `/ship` + `/qa`, the rest as needed.
- Opinionated stack — some bits (Bun-only, Pretext) may clash with existing conventions in a repo.
- Lots of overlap with [[Superpowers]] (TDD/brainstorm/plan/review) — I will need to pick one methodology, not both.

## Alternatives considered

- **[[Superpowers]]** — more methodology-first (TDD, subagent-driven), gstack is more rolling-team
- **[[Karpathy Skills]]** — minimal 1-CLAUDE.md answer, gstack is maximalism in the other direction
- **[[Archon]]** — YAML workflow engine + worktree isolation; gstack stays in native Claude Code skills
- **[[Awesome Claude Code]]** — curated list, gstack is a ready-made stack

## 🔗 Resources

- Karpathy's note ("I haven't written a line of code since December") — No Priors podcast, March 2026
- Peter Steinberger / OpenClaw (247K stars, solo with agents) as inspiration
- Skills deep-dive: https://github.com/garrytan/gstack/blob/main/docs/skills.md
- [[Claude Code]] — primary host
- [[Agent Skills]] — SKILL.md standard
- [[Awesome Claude Code]] — curated list of resources
- [[Superpowers]] — alternative approach

---
Template: [[templates/tool]]
