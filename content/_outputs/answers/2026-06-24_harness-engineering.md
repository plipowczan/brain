---
title: "Harness Engineering — explained simply + how to use it in my projects"
date: 2026-06-24
enableToc: true
openToc: true
tags: ["answer", "ai", "coding-agents", "harness", "context-engineering"]
type: answer-note
agent-created: true
summary: "Q&A: plain explanation of harness engineering and concrete ways to apply it across Paweł's agentic projects (Brain, Qamera AI, Jakub Głąb, TTTR)."
---

# Harness Engineering — explained simply + how to use it in my projects

> Q: *Explain harness engineering simply and short — how can I use it in my projects?*

## What it is
`coding agent = AI model + harness` (everything configured around it). **Harness engineering = configuring that environment instead of writing code by hand.** Core insight: most agent failures are **configuration problems, not model problems** ([[Harness Engineering]]).

Ryan Lopopolo's definition ([[Harness Engineering (Ryan Lopopolo)]]): *make the context of "what a good job is" legible (written as text) and just-in-time surface it to the agent to steer its output.*

## Three practical rules
1. **Write it down** — the agent has no standup, no memory. The same review comment given twice = a missing guardrail. *"Never give the same review feedback twice."*
2. **Shift RIGHT, then left** — escalation ladder, cheap → durable: `bad result → re-prompt` → `write a rule` → `review-agent judges every diff` → `static lint/test/guardrail`. Move left only when something keeps recurring.
3. **All code is a prompt** — unify patterns (one observability stack, one idiom) so the model wastes less attention deciding "which one here?".

## Three phases per PR
- **Before** — ground the agent: docs, ticket, ADRs, critical user journeys. Slow is fine.
- **Middle** — tests/lints with **descriptive errors pointing to runbooks** → agent self-heals (e.g. ban `any`/`unknown` in ESLint; require a snapshot test per component → forces decomposition).
- **After** — diff is a static artifact → many **LLM-as-judge**. Treat the agent like a teammate: it must convince you (logs, screenshot, repro).

## How to apply it across my projects
- **[[Brain]] (this vault)** — already harness engineering: `CLAUDE.md` Navigation Protocol, skills (`/ingest`, `/qa`), progressive disclosure via 3 indexes. Next step: **review-persona files** (bulleted guardrails per note type) + a numbered operating loop in the skills.
- **[[Qamera AI]] / [[Jakub Głąb Agent System]] / [[Tech To The Rescue]]** — add a **review-agent on every PR** + static guardrails instead of catching errors by hand (classic: lint for missing timeout+retry on network calls).
- **All repos** — self-improvement loop: collect every interrupt / failed build / prod exception as a **signal of missing context**, distil nightly with sub-agents into new guardrails ([[Self-Improving Company]], [[Loop Engineering]]).
- **Ready tool**: [[Archon]] — YAML workflow (plan/implement/validate/review/PR) = harness engineering out of the box, deterministic + parallel via worktrees.

## Related
[[Context Engineering]] (broader discipline) · [[Progressive Disclosure]] · [[Agent Skills]] · [[Karpathy Method]] (spec / verifier / environment).

## Gap flagged
No note yet on *how to concretely roll out review-personas / guardrails in my own repos* — candidate for a HOWTO compiled-note.

---
*Source: vault Q&A, 2026-06-24.*
