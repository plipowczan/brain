---
title: "Loop Engineering"
date: 2026-06-18
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "coding-agents", "agentic-engineering", "orchestration", "cost-optimization", "claude-code"]
type: knowledge-note
source: "_raw/processed/2026-06-18_yt-UztrFXaSWv0_the-creators-of-claude-code-and-openclaw-don-t-prompt-their.md"
source_url: "https://www.youtube.com/watch?v=UztrFXaSWv0"
video_id: "UztrFXaSWv0"
channel: "Cole Medin"
duration: "24m39s"
published: 2026-06-18
transcription: captions
agent-created: true
summary: "Cole Medin's honest take on loop engineering (Boris Cherny / Peter Steinberger's 'I don't prompt, I write loops') — the /loop, /goal, /routines primitives, the cost/reliability/context downsides, and folding it into deterministic harness engineering with Archon."
---

# Loop Engineering

## 🗒️ Description

**Loop engineering** is the emerging buzzword for designing self-prompting loops that drive AI coding agents 24/7 instead of hand-prompting them each step. The pitch comes from the big players: **Boris Cherny** (lead on [[Claude Code]]) — *"I don't prompt Claude anymore. I write loops and the loops do the work. My job is to write loops"* — and **Peter Steinberger** (creator of OpenClaw / NemoClaw), who claims his AI "Daisy" manages tens of thousands of agents at once.

Cole Medin's framing (this note's source) is deliberately skeptical: the core idea is sound and worth stealing, but pure loops are **token-hungry, unreliable, and context-bloating**. The honest conclusion — *fold loop engineering into [[Harness Engineering]]; it doesn't quite deserve its own buzzword.*

## 🧩 The core concept — loops are not complicated

Loop engineering = building a system around three Claude Code primitives so you give a high-level scope of work and the agent works through it incrementally:

| Primitive | What it does |
|-----------|--------------|
| `/loop` | Run a prompt on an interval. *"Every 5 min, check for new GitHub issues and handle them."* Claude wakes itself, polls an external system (e.g. GitHub), acts autonomously while the terminal stays up. |
| `/goal` | Set done-criteria, force the agent to work until met. Like the viral **Ralph loops**. (Also in Codex.) |
| `/routines` | Scheduled jobs. *"Every hour, read the spec doc and handle the next task."* |

The pattern: one **orchestrator** agent you talk to with minimal prompting → it figures out how to set up the loop and the **workers**. In Claude Code you just say *"use the loop skill"* — it loads, writes its own `/loop work through plan.md one task at a time` prompt, and knocks tasks out one per cycle (do first unchecked task → validate → schedule wake-up → repeat). You never write the loop prompt yourself.

## 🧩 The three downsides

1. **Not the best results.** Loops are great for proof-of-concepts and exploration inside a *tight, controlled* system — not for driving all your serious AI coding. The "tens of thousands of agents" claim is hyperbole.
2. **Cost.** The orchestrator must reason about the spec, decide how many workers to spin off, prompt them all, then re-reason about returned results before the next wave. Endless context-passing. A single run building a *relatively simple* app cost **over a million tokens**. Root cause: one model (usually the expensive one) doing everything.
3. **Context bloat.** Plain `/loop` in Claude Code continues in the **same session** — loop long enough and you poison/overwhelm the context window. You need work distributed across *separate* agent sessions that can communicate and know where they fit in the larger goal.

## 🧩 The fix — deterministic harness engineering (Archon)

[[Archon]] (Cole's open-source harness builder) extracts the good parts of loops into deterministic workflows that solve all three problems:

- **Take decisions away from the agent.** The process lives in a workflow file with deterministic steps (e.g. tests guaranteed to run); LLM reasoning is applied *only* where needed — write the code, but don't let it decide which tests pass. *"Let me be in the loop; let me determine how the workflow progresses."*
- **Per-node model selection / mixed providers.** Classify step (the cheap "orchestrator decision") → small model (Haiku, MiniMax M3, Kimi K2.7). Implementation → Claude Code. Review → Codex. Context-loading/exploration → smaller model. You don't pay top-per-token for every step.
- **Separate session per step.** Steps hand off via markdown docs but each runs in its own agent session — no single bloated `/loop` getting overwhelmed across plan → implement → validate.
- **Durability.** All logs/runs stored in Postgres (Neon) → resume any workflow on the exact step even if the machine dies.
- **Parallel + isolation.** Orchestrator (primary Claude Code) dispatches N workflows in parallel — e.g. 4 GitHub-issue fixes + 4 code reviews + 1 orchestrator = 9+ sessions. Worktrees (and Neon DB branches) keep them from stepping on each other (code *and* DB changes, port conflicts).
- **Human-in-the-loop nodes.** Any node can pause for you to validate before continuing — the antidote to "let it run all day and come back to crap."

## 🧩 Pure loops done right — the open-source dashboard

Cole's experimental [[Second Brain Design|second-brain]]-oriented loop dashboard (open-sourced on GitHub) pushes pure loop engineering while fixing its flaws:

- **External state in Postgres**, not in any agent session — orchestrator reads state → calls workers → workers update state → next orchestrator cycle reads updated state. *That* is the loop.
- Driven entirely by **Pi** running **Kimi K2.7** (not Opus for everything) — lots of tokens, but the harness elevates a cheaper model to good results.
- Heavy **observability** — see every decision, even let a coding agent analyze the runs in the DB and self-improve the harness/loop.
- Human-in-the-loop between rounds (e.g. inspect round 1 before the orchestrator dispatches round 2).
- Deployable to the cloud via **Retool** (import the React front end as a zip, wire it to the Pi backend + Neon, get a shared URL with permission groups / approval gates / audit trails).

## 📒 Takeaways

- **Loop engineering ≈ harness engineering.** The durable skill is designing the harness, not writing magic loop prompts. Don't let the buzzword fool you into thinking it's a new discipline.
- **Determinism beats autonomy** for anything past a demo — take decisions away from the agent except where intelligence genuinely adds value.
- **Mix models per step** to kill the cost problem; one expensive model for everything is why loops bleed tokens.
- **Distribute across sessions + isolate** (worktrees, DB branches) — never loop forever in one context window.
- **Keep a human in the loop** at chosen checkpoints; "go-go-go all day" loops return garbage.

## 📖 Further reading/watching

- Source video: [The Creators of Claude Code and OpenClaw don't Prompt Their Agents Anymore?!](https://www.youtube.com/watch?v=UztrFXaSWv0) — Cole Medin, 2026-06-18 (24:39)
- [[Archon]] — the harness builder used throughout
- [[Harness Engineering]] — the broader discipline loop engineering folds into
- [[Agentic Engineering]] · [[Agentic Coding]] — the paradigm
- [[Karpathy Method]] — spec / verifier / environment layers
- [[Token Optimization for Claude Code]] — related cost-control tooling
- [[Context Engineering]] — why single-session loops poison context

---
Template: [[templates/knowledge_note_info]]
