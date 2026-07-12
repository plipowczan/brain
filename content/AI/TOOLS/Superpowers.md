---
title: "Superpowers"
date: 2026-05-03
enableToc: true
openToc: true
tags: ["tool", "ai", "claude-code", "skills", "methodology", "tdd", "open-source"]
type: tool
source: "_raw/inbox/obrasuperpowers An agentic skills framework & software development methodology that works.md"
agent-created: true
summary: "Jesse Vincent (obra) opinionated software development methodology for coding agents — composable skills (brainstorm→worktree→plan→subagent-driven→TDD→review→finish), auto-trigger, multi-host (CC/Cursor/Codex/OpenCode/Copilot/Gemini)"
---

# Superpowers

`obra/superpowers` — a **complete software development workflow for coding agents**, built on a set of composable "skills" + initial instructions that force the agent to use them. Author: Jesse Vincent (`obra`). Philosophy: the agent does **not** jump straight to code — first it teases out a spec from the conversation, shows it in small chunks, and only after sign-off writes a plan for an "enthusiastic junior with poor taste, no judgement, no project context, and aversion to testing", then subagent-driven-development with true red/green TDD, YAGNI, and DRY.

## 🔗 Links

### Description
- Repo: https://github.com/obra/superpowers
- Marketplace: https://claude.com/plugins/superpowers
- Sponsor: https://github.com/sponsors/obra
- License: open source

### Download or use

```bash
# Claude Code (official marketplace)
/plugin install superpowers@claude-plugins-official

# Cursor
/add-plugin superpowers

# Codex / OpenCode — fetch instructions
# from raw.githubusercontent.com/obra/superpowers/.../INSTALL.md

# GitHub Copilot CLI
copilot plugin marketplace add obra/superpowers-marketplace
copilot plugin install superpowers@superpowers-marketplace

# Gemini CLI
gemini extensions install https://github.com/obra/superpowers
```

## 🗒️ Description

### 🧩 The Basic Workflow (7 mandatory skills)

1. **brainstorming** — fires before code is written; refines rough ideas through questions, alternatives, design in sections to validate, saves a design doc.
2. **using-git-worktrees** — after the design is approved; isolated workspace on a new branch, project setup, clean test baseline.
3. **writing-plans** — bite-sized tasks (2-5 min each), exact paths, complete code, verification steps.
4. **subagent-driven-development** or **executing-plans** — fresh subagent per task; two-stage review (spec compliance, then code quality), or a batch with human checkpoints.
5. **test-driven-development** — RED-GREEN-REFACTOR; failing test → watch it fail → minimal code → watch it pass → commit. **Discards code written before the tests.**
6. **requesting-code-review** — between tasks, review against the plan, severity-graded, critical = block.
7. **finishing-a-development-branch** — verify tests, options (merge/PR/keep/discard), clean up the worktree.

> **Mandatory workflows, not suggestions** — the agent automatically checks the skills before every task.

### 🧩 Skills Library (beyond the Basic Workflow)

- **Testing**: testing anti-patterns reference (within TDD).
- **Debugging**: `systematic-debugging` (4-phase root cause: root-cause-tracing, defense-in-depth, condition-based-waiting), `verification-before-completion`.
- **Collaboration**: `dispatching-parallel-agents`, `receiving-code-review`.

### 🧩 Position in the ecosystem

This is a methodology framework — not a set of roles like [[gstack]], not a YAML engine like [[Archon]], not a minimal 1-page CLAUDE.md like [[Karpathy Skills]]. Philosophy: **process rigor > skill count**. Strongest combined with TDD and worktree isolation.

## ✍️ Reasoning for

For me the value clusters around three things:
1. **Forced TDD** — in my Claude Code setups on [[Qamera AI]] I often punt tests "for later" and pay for it; Superpowers does not let me.
2. **Subagent-driven-development with fresh context** — eliminates "context rot" after 30+ tool calls (same pattern as loop nodes in [[Archon]]).
3. **Multi-host portability** — CC + Cursor + Codex + OpenCode + Copilot + Gemini from a single source; fits my workflow of jumping between [[Claude Code]] and [[Cursor]].

Conflict with [[gstack]]: both try to structure the same thing (think→plan→build→review→test→ship). I'll probably pick one per repo rather than layering them.

Warning: the rigor is literal — "discards code written before the tests". You have to accept that up front, otherwise frustration is guaranteed.

## Alternatives considered

- **[[gstack]]** — role-based virtual team (CEO/Designer/QA), more startup-shaped; Superpowers is engineering-rigor-shaped
- **[[Karpathy Skills]]** — minimal methodology in 1 CLAUDE.md; Superpowers is a complete stack
- **[[Archon]]** — YAML workflow engine + worktrees; Superpowers stays in native skills + standard git
- **[[Agent Skills]]** standalone — just the skills, no enforced methodology

## 🔗 Resources

- Author: Jesse Vincent (obra) — https://github.com/obra
- [[Claude Code]] — primary host
- [[Cursor]] — second host
- [[Agent Skills]] — SKILL.md standard
- [[Karpathy Skills]] / [[gstack]] / [[Archon]] / [[Agent Skills (Addy Osmani)]] — neighboring approaches

---
Template: [[templates/tool]]
