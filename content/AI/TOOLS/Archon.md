---
title: "Archon"
date: 2026-04-29
enableToc: true
openToc: true
tags: ["tool", "ai", "coding-agents", "harness", "workflow", "open-source"]
type: tool
source: "_raw/inbox/coleam00Archon The first open-source harness builder for AI coding. Make AI coding deterministic and repeatable.md"
agent-created: true
summary: "Open-source harness builder — YAML workflows for AI coding agents (plan/implement/validate/review/PR), deterministic + parallel via worktrees"
---
# Archon

`coleam00/Archon` — workflow engine for AI coding agents. You define the development process as a YAML workflow (plan → implement → validate → review → PR) and run it deterministically via CLI, Web UI, Slack, Telegram or GitHub. README analogy: *Dockerfile did this for infrastructure, GitHub Actions for CI/CD — Archon does this for AI coding*.

It's a direct response to the problem described in [[Karpathy Skills]] and [[Harness Engineering]]: without a structural frame, every LLM run produces a different result. Archon freezes the structure (deterministic nodes) and leaves intelligence at the points where it actually adds value (AI nodes).

## 🔗 Links

### Description
- Repo: https://github.com/coleam00/Archon
- Docs: https://archon.diy/
- Book of Archon (10-chapter tutorial): https://archon.diy/book/
- License: MIT

### Download or use

```bash
# Full setup (5 min) — wizard, web UI, skill copy
git clone https://github.com/coleam00/Archon
cd Archon && bun install && claude
# Then say: "Set up Archon"

# Quick install — CLI binary only (requires a separate Claude Code)
curl -fsSL https://archon.diy/install | bash       # macOS/Linux
irm https://archon.diy/install.ps1 | iex           # Windows PS
brew install coleam00/archon/archon                # Homebrew
```

Workflows live in `.archon/workflows/*.yaml`, commands in `.archon/commands/*.md` — committed to the repo so the whole team uses the same process.

## 🗒️ Description

### 🧩 What Archon actually does

A workflow is a DAG of nodes, where each node is either:
- **Deterministic** — `bash:` (tests, git ops, custom scripts), never fires AI
- **AI** — `prompt:` with optional `loop: until: ...` and `fresh_context: true` (fresh session per iteration)
- **Interactive** — `loop: until: APPROVED` with `interactive: true` (pauses for human review)

Each run gets **its own git worktree** — you can run 5 fixes in parallel without conflicts. Fire and forget — come back to a finished PR.

### 🧩 Example workflow

```yaml
# .archon/workflows/build-feature.yaml
nodes:
  - id: plan
    prompt: "Explore the codebase and create an implementation plan"

  - id: implement
    depends_on: [plan]
    loop:
      prompt: "Read the plan. Implement the next task. Run validation."
      until: ALL_TASKS_COMPLETE
      fresh_context: true

  - id: run-tests
    depends_on: [implement]
    bash: "bun run validate"

  - id: review
    depends_on: [run-tests]
    prompt: "Review all changes against the plan. Fix any issues."

  - id: approve
    depends_on: [review]
    loop:
      prompt: "Present the changes for review. Address any feedback."
      until: APPROVED
      interactive: true

  - id: create-pr
    depends_on: [approve]
    prompt: "Push changes and create a pull request"
```

### 🧩 Bundled workflows (17 total)

| Workflow | Use case |
|----------|----------|
| `archon-assist` | General Q&A, debugging — full Claude Code with tools |
| `archon-fix-github-issue` | Issue → classify → plan → implement → PR → self-fix |
| `archon-idea-to-pr` | Idea → plan → implement → 5 parallel reviews → self-fix |
| `archon-plan-to-pr` | Execute an existing plan → implement → PR → review |
| `archon-comprehensive-pr-review` | 5 parallel reviewers + auto-fix |
| `archon-resolve-conflicts` | Detect → analyze both sides → resolve → validate → commit |
| `archon-architect` | Architectural sweep, complexity reduction |
| `archon-refactor-safely` | Refactor with type-check hooks and behavior verification |
| `archon-ralph-dag` | PRD implementation loop — walk through stories to completion |

`archon workflow list` shows them all. Same-named files in your repo override bundled defaults.

### 🧩 Architecture

```
Platform Adapters (Web UI, CLI, Telegram, Slack, Discord, GitHub)
                          ↓
                    Orchestrator
                  (routing + context)
            ↙           ↓            ↘
   Command Handler  Workflow Executor  AI Assistant Clients
      (slash)        (YAML DAG)       (Claude / Codex / Pi)
                          ↓
              SQLite / PostgreSQL (7 tables:
              codebases, conversations, sessions,
              workflow runs, isolation envs, messages, events)
```

The Web UI has a separate mission-control dashboard, drag-and-drop workflow builder, step-by-step execution view and aggregates conversations from **all platforms** in one place.

## ✍️ Reasoning for

From my perspective this is exactly the layer that's missing between [[Claude Code]] and a repeatable dev workflow in [[Qamera AI]] and [[PLSoft]]. Today I treat every issue as if it were the first — with Archon I can define once "this is how I fix issues in this repo" and then `Use archon to fix issue #42` gives me a predictable PR.

Three things especially worth considering:
1. **Worktree isolation** — eliminates the "AI agent broke my branch" problem (I hit this almost weekly)
2. **Fire-and-forget via Telegram/Slack** — fire a workflow from my phone, come back to a finished PR
3. **Fresh context per iteration in loop nodes** — the opposite of long Claude Code sessions where context gets poisoned after 30+ tool calls

Weak spot: 17 bundled workflows is a lot of abstraction to learn. I'll probably start with `archon-fix-github-issue` and `archon-idea-to-pr`, and pick up the rest as I need them.

## Alternatives considered

- **[[Claude Code]] on its own** — no structural gates, no deterministic nodes, every run is different
- **[[Awesome Claude Code]]** — curation of skills/prompts, not a workflow engine
- **GitHub Actions + Claude Code** — works, but no worktree isolation and no AI loop nodes with fresh context
- **n8n / Zapier** — workflow engines, but not designed for git/coding context

See [[Loop Engineering]] for how Archon extracts the good parts of self-prompting loops into deterministic, cost-controlled workflows, and [[Loop Engineering (cobusgreyling)]] for the lighter patterns + readiness-audit CLIs.

## 🔗 Resources

- Author X: https://x.com/coleam00
- Telemetry opt-out: `ARCHON_TELEMETRY_DISABLED=1` or `DO_NOT_TRACK=1`
- Previous v1 (Python, task management + RAG): branch `archive/v1-task-management-rag`

---
Template: [[templates/tool]]
