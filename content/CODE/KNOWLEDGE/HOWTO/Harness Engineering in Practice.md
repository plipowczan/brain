---
title: "Harness Engineering in Practice"
date: 2026-06-24
enableToc: true
openToc: true
tags: ["knowledge", "howto", "ai", "coding-agents", "harness", "context-engineering", "claude-code"]
type: compiled-note
agent-created: true
summary: "Hands-on playbook for applying harness engineering to my agentic projects — the shift-right escalation ladder, three PR phases, review-personas, and a self-improvement loop, mapped onto Brain, Qamera AI, Jakub Głąb, and TTTR."
---

# Harness Engineering in Practice

> A practical, project-oriented synthesis. For the concept and its lineage see [[Harness Engineering]] and the talk note [[Harness Engineering (Ryan Lopopolo)]]; for the broader discipline see [[Context Engineering]].

## 🗒️ Task
Turn "harness engineering" from a concept into a concrete operating practice across my agentic projects ([[Brain]], [[Qamera AI]], [[Jakub Głąb Agent System]], [[Tech To The Rescue]]) — so agents produce aligned, high-quality output **without** me catching the same mistakes by hand every time.

The mental model: `coding agent = AI model + harness`. Most agent failures are **configuration problems, not model problems** ([[Harness Engineering]]). The job is to make "what a good job looks like" legible as text and surface it to the agent at the right moment ([[Harness Engineering (Ryan Lopopolo)]]).

## 🛠️ Prerequisites
- A repo with a coding agent in the loop (Claude Code / Codex).
- An `AGENTS.md` / `CLAUDE.md` you control.
- Ability to add lints, tests, and CI checks (the static guardrail layer).
- Optional but recommended: a workflow runner like [[Archon]] for deterministic plan→implement→validate→review→PR pipelines.

## 📝 Instructions

### 1. Write down "good" (the net-new function)
The agent has no standup and no durable memory, so every team norm must become **text**.
- Keep `CLAUDE.md` **concise** — less is more; rely on [[Progressive Disclosure]] instead of stuffing one file (confirmed by the ETH Zurich agentfiles study cited in [[Harness Engineering]]).
- Rule of thumb: *never give the same review feedback twice.* The second time you type a comment, it should become a written guardrail instead.

### 2. Apply the shift-RIGHT escalation ladder
Counter to classic "shift-left" DevOps — start cheap and to the right, move left only when something keeps recurring:

1. **Re-prompt** — bad result → trash, change prompt, re-roll. (Not durable, not shared.)
2. **Write a rule** — encode the fix in a guardrail file / review-persona.
3. **Review-agent judges every diff** — LLM-as-judge against the written rules.
4. **Static lint / test / guardrail** — the most durable, e.g. ban `any`/`unknown` in ESLint, assert retries+timeouts on network calls.

Promote a rule one rung left **only** when it keeps slipping through — e.g. when a guardrail spans 15 context windows and gets autocompacted away ([[Harness Engineering (Ryan Lopopolo)]]).

### 3. Structure context across the three PR phases
- **Before — grounding:** make the agent read docs, the ticket, ADRs, and critical user journeys first. Accept the slowness; you are paging in global context.
- **Middle — just-in-time steering:** write tests/lints whose **error messages are descriptive and point to runbooks**, so the agent self-heals. Coarse structural checks are fine (file line counts, "a snapshot test must exist" → forces component decomposition). Tool-call outputs get low weight in autocompaction, so just-in-time correction is cheap.
- **After — review & merge:** the diff is now a static artifact → point **many LLM-as-judge** reviewers at it. Treat the agent like a teammate: bias toward merge, but require evidence (staging logs, screenshot, repro video).

### 4. Curate review-personas, not a rule-dump
- In `AGENTS.md` keep a **numbered operating loop** (ground → spider history → check CUJs → execute).
- Point to a **curated set of review-persona files** = bulleted guardrail lists, paged in by change category (backend / design-system / data). Don't jam every rule into one file — it chops up latent space and kills the agent's room to reason ([[Progressive Disclosure]]).
- Evolve them cheaply: discuss a regression in Slack, then `@`-mention the agent → "put up a PR adding this to our static guardrails."

### 5. Close the loop toward headless
Every interrupt, failed build, review comment, and production exception is a **signal that context was missing**. Capture them and distil nightly with sub-agents into better prompting + new guardrails — the recursive self-improvement pattern from [[Self-Improving Company]]. Fold any self-prompting loops in deterministically rather than ad-hoc ([[Loop Engineering]]).

## ✅ Outcome / per-project rollout
- **[[Brain]] (this vault)** — already a harness: `CLAUDE.md` Navigation Protocol + `/ingest` `/qa` skills + 3-index progressive disclosure. **Next:** add review-persona files (guardrails per note type) and a numbered operating loop inside the skills.
- **[[Qamera AI]] / [[Jakub Głąb Agent System]] / [[Tech To The Rescue]]** — add a **review-agent on every PR** plus static guardrails (start with the network timeout+retry lint) so misalignment is caught before it reaches you.
- **All repos** — stand up the step-5 feedback loop; graduate guardrails left only on repeat offenders.
- **Tooling shortcut** — adopt [[Archon]] for the deterministic plan/implement/validate/review/PR workflow and parallel worktrees, instead of hand-rolling the pipeline.

You end up spending your scarce human attention on **invariants, interfaces, and "does it do what it says on the tin"** — operating like a group/org tech lead rather than shoulder-surfing every keystroke.

## 📖 Further reading
- [[Harness Engineering]] — concept + the CLAUDE.md / MCP / skills / sub-agents / hooks levers
- [[Harness Engineering (Ryan Lopopolo)]] — the originating talk (shift-right, 3 phases, review-personas)
- [[Context Engineering]] · [[Progressive Disclosure]] · [[Agent Skills]] · [[Karpathy Method]]
- [[Self-Improving Company]] · [[Loop Engineering]] · [[Archon]]

---
Template: [[templates/knowledge_note_how_to]]
