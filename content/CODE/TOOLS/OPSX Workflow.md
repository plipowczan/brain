---
title: "OPSX Workflow"
date: 2026-02-05
enableToc: true
openToc: true
tags: ["tool", "ai", "workflow", "development"]
type: tool
agent-created: true
summary: "Structured spec-driven AI development workflow — replaces reactive prompting with persistent artifacts and DAG-based state"
---

# OPSX Workflow

The standard workflow for OpenSpec — a structured approach to working with AI coding assistants. Turns reactive prompting into a repeatable process with artifacts, dependencies, and iteration.

## 🔗 Links

### Description
- [OpenSpec GitHub](https://github.com/Fission-AI/openspec) — official repo
- [OpenSpec Discord](https://discord.gg/YctCnvvshC) — community and feedback

### Download or use
```bash
npm install -g openspec
openspec init  # creates skills in .claude/skills/
```

## 🗒️ Reasoning for

### Problem

- **Context rot** — the AI loses context between sessions and starts from scratch every time
- **Chaotic sessions** — with larger changes (multi-file feature, refactoring) chaos builds up
- **Linear phases don't work** — real work is not sequential (plan→implement→done), because design shifts during implementation

### Legacy OpenSpec workflow — limitations

- Instructions hardcoded in TypeScript — cannot be changed
- All-or-nothing approach — one command creates everything
- No customization — the same workflow for everyone
- Black box on bad outputs — you cannot fix the prompts

### Solution: OPSX

- **Actions, not phases** — do what you need, when you need it
- **Artifacts with dependencies** — a DAG (Directed Acyclic Graph) instead of linear phases
- **Filesystem as state** — a file existing = artifact DONE
- **Open instructions** — YAML schemata + markdown templates, editable

## 🧩 Commands

| Command | What it does |
|---------|---------|
| `/opsx:explore` | Thinking, investigating a problem, comparing options |
| `/opsx:new` | Start a new change |
| `/opsx:continue` | Create the next artifact (based on DAG dependencies) |
| `/opsx:ff` | Fast-forward — all planning artifacts at once |
| `/opsx:apply` | Implement tasks |
| `/opsx:sync` | Sync delta specs into main |
| `/opsx:archive` | Archive once finished |

### Typical flow

```text
/opsx:explore     → think the idea through
/opsx:new         → start the change
/opsx:continue    → create proposal → specs → design → tasks (iteratively)
/opsx:apply       → implement
/opsx:archive     → close out
```

**Pro tip:** use `/opsx:ff` when the picture is clear. Use `/opsx:continue` during exploration — iterating one artifact at a time.

## 📐 Architecture

### Artifact DAG

```text
              proposal
             (root node)
                  │
    ┌─────────────┴─────────────┐
    │                           │
    ▼                           ▼
 specs                       design
(requires:                  (requires:
 proposal)                   proposal)
    │                           │
    └─────────────┬─────────────┘
                  │
                  ▼
               tasks
           (requires:
           specs, design)
```

### State machine

```text
BLOCKED ──► READY ──► DONE
  │           │         │
Missing    All deps   File exists
deps       are DONE   on filesystem
```

Key concepts:
- **Dependencies are enablers, not gates** — they show what is possible, not what is required
- **Filesystem as state** — no need for a database, file exists = DONE
- **Topological ordering** — the system knows what to create next

### When to update vs. start a new change

| Test | Update | New change |
|------|--------|-------------|
| Identity | "Same thing, refined" | "Different work" |
| Scope overlap | >50% coverage | <50% coverage |
| Closure | Cannot be closed without changes | Can be closed; the new one stands on its own |

## ⚙️ Customization

### YAML Schemata

Define your own workflows:

```yaml
name: research-first
artifacts:
  - id: research
    generates: research.md
    requires: []
  - id: proposal
    generates: proposal.md
    requires: [research]
  - id: tasks
    generates: tasks.md
    requires: [proposal]
```

### Context Injection

```yaml
# openspec/config.yaml
schema: spec-driven
context: |
  Tech stack: TypeScript, React, Node.js
  API conventions: RESTful, JSON responses
  Testing: Vitest for unit tests, Playwright for e2e
rules:
  proposal:
    - Include rollback plan
    - Identify affected teams
  specs:
    - Use Given/When/Then format
```

The AI knows the project's conventions without you repeating them in every prompt.

## Alternatives considered

- **Reactive prompting** — works for small changes, doesn't scale
- **Linear phase-gate workflows** — fight the reality of iterative work
- **Cursor/Windsurf without structure** — no persistent artifacts, context loss

## 🧭 Use case: PRD from analysis + client offer

OPSX works well as a **PRD generation engine** from two inputs: business analysis (e.g., an AS-IS process map) and an offer (scope + stack + timeline). Pipeline:

- Analysis ([[Process Mapping]] — 4 elements: Action/Actor/Tool/Mode) → `proposal.md` (problem statement)
- Discovery ([[UX RULER]] 7 stages) → `PRODUCT.md`, decision-log, north-star-metric
- Offer → `openspec/config.yaml` context (stack, conventions, timeline)
- `/opsx:ff` or `/opsx:continue` → `specs/*.md` (Given/When/Then per feature) + `design.md` + `tasks.md` in the DAG

Full synthesis: [[2026-05-16_PRD-z-analizy-i-oferty]]. End-to-end pattern: [[El Padre Case Study]].

## 📖 Resources

- [OpenSpec GitHub](https://github.com/Fission-AI/openspec) — repo with code and docs
- [OpenSpec Discord](https://discord.gg/YctCnvvshC) — community
- [[Claude Code]] — primary AI coding assistant
- [[Agentic Coding]] — approach to coding with AI agents
- [[Context Engineering]] — managing context when working with LLMs
- [[Process Mapping]] — AS-IS analysis as input to a proposal
- [[UX RULER]] — product discovery generating artifacts for the repo
- [[El Padre Case Study]] — a 6-week offer case mapped to spec + tasks

---
Template: [[templates/tool]]
