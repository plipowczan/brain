---
title: "Agent Skills (Addy Osmani)"
date: 2026-07-12
enableToc: true
openToc: true
tags: ["tool", "ai", "agent-skills", "coding-agents", "claude-code", "sdlc", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-07-12_addyosmaniagent-skills Production-grade engineering skills for AI coding agents.md"
agent-created: true
agent-reviewed: 2026-07-12
summary: "addyosmani/agent-skills — Addy Osmani's production-grade SDLC skill collection for AI coding agents: Define→Plan→Build→Verify→Review→Ship, 4 personas, 8 slash commands, MIT"
---

# Agent Skills (Addy Osmani)

An **independent** collection of production-grade engineering [[Agent Skills]] that walk AI coding agents through a structured software development lifecycle. Built by **Addy Osmani** (Google Chrome eng lead, author of *Learning JavaScript Design Patterns*) with **Federico Bartoli** and **Joan León**. Not affiliated with Anthropic's [[Agent Skills|anthropics/skills]] repo — it is a *methodology stack*, sibling to [[Superpowers]] and [[gstack]].

Encodes Google engineering culture into skills: Hyrum's Law, test pyramids, trunk-based development, anti-rationalization tables that tell the agent *when it's allowed to skip a step*.

## Links
### Description
[GitHub: addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — MIT, ~77k stars / ~8k forks. Cross-harness: same SKILL.md runs on 70+ agents ([[Claude Code]], Cursor, Codex, Gemini CLI, …).
### Download or use
Install like any skill collection — copy into the harness skills path (`.claude/skills/` for Claude Code; see [[Awesome Agent Skills]] cheat-sheet for other harnesses), or clone the repo. Skills auto-trigger by description; slash commands drive each phase explicitly.

## Reasoning for
Most skill collections are ad-hoc single-purpose helpers. This one is **opinionated end-to-end SDLC** — 24 skills mapped onto lifecycle phases so the agent follows real engineering process instead of vibe-coding to done.

### The 24 skills, by phase
| Phase | Skills | What it enforces |
|-------|-------:|------------------|
| **Define** | 3 | Spec/requirements before code |
| **Plan** | 1 | Explicit plan from the spec |
| **Build** | 7 | Implementation with guardrails |
| **Verify** | 2 | Tests, checks |
| **Review** | 4 | Code review, simplification |
| **Ship** | 7 | Release, observability, cleanup |

Plus **1 meta-skill** for navigation.

### Slash commands (phase entry points)
`/spec` → `/plan` → `/build` → `/test` → `/review` → `/webperf` → `/code-simplify` → `/ship`

`/build auto` = optional **autonomous mode** — end-to-end task execution with per-step verification.

### Specialist personas & checklists
- **4 agent personas** — code reviewer, test engineer, security auditor, web-performance auditor
- **7 reference checklists** — testing, security, performance, accessibility, observability (loaded on-demand = progressive disclosure)

## Alternatives considered
- [[Superpowers]] — Jesse Vincent's (obra) TDD-first methodology stack (brainstorm→worktree→plan→subagent→TDD→review→finish); more test-driven, multi-host
- [[gstack]] — Garry Tan's (YC) virtual-team stack (CEO/Designer/EngMgr/QA/SRE), sprint-driven
- [[Karpathy Skills]] — a single CLAUDE.md instead of a multi-skill lifecycle
- [[Awesome Agent Skills]] — the curated superset to discover these and more

## Resources
- [GitHub: addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)
- [[Agent Skills]] — the underlying mechanism and open standard
- [[Superpowers]] / [[gstack]] — peer SDLC/virtual-team skill stacks
- [[Karpathy Skills]] — single-file counter-approach
- [[Awesome Agent Skills]] — curated 1000+ skills list (includes this)
- [[Harness Engineering]] — configuring the harness these skills run in
- [[Claude Code]] — primary harness

---
Template: [[templates/tool]]
