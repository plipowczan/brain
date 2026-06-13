---
title: "Karpathy Method"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "claude-code", "context-engineering", "agentic-engineering", "verifiability", "spec"]
type: knowledge-note
source: "_raw/processed/2026-06-13_yt-7zZy1QTvokM_stop-prompting-claude-use-karpathy-s-method-instead.md"
source_url: "https://www.youtube.com/watch?v=7zZy1QTvokM"
video_id: "7zZy1QTvokM"
channel: "Austin Marchese"
duration: "13m18s"
published: 2026-06-09
transcription: captions
agent-created: true
summary: "Austin Marchese distills Karpathy's method of using Claude into three stacked layers — spec, verifier, environment — plus the one durable human edge: understanding"
---

# Karpathy Method

## 🗒️ Description

[Austin Marchese](https://www.youtube.com/@austin.marchese) distills how [[Agentic Engineering|Andrej Karpathy]] actually uses AI in 2026 into a stacked, repeatable framework: most people are "prompting Claude wrong," and the fix is **three layers** — the **spec**, the **verifier**, and the **environment** — topped by one thing worth focusing on: *understanding*. It's a practical, tactical companion to the [[Agentic Engineering]] interview and the [[Software 3.0]] thesis, aimed squarely at [[Claude Code]] users.

The opening hook is the same car-wash example from the Karpathy interview: ask any frontier model whether to drive or walk to a car wash 50 m away and they all say *walk* — because AI is "brilliant at what can be measured" but has no signal for context. The three layers exist to feed AI the context and verification it can't generate itself.

## 🧩 The three layers

### Layer 1 — The Spec

The spec is how you deliver your understanding to Claude in a format it can use. Karpathy finds plan mode "too high-level" — the real move is working *with* the agent to design a very detailed spec. Three rules:

- **Uncover the goal, not the task.** "Create an end-of-month report" is a task; the *goal* is the decision the report drives — something AI can never decide for you. Tactic: tell Claude to **interview you** to extract the goal.
- **Be agile, not waterfall.** People dump everything on the agent at once (waterfall). Instead, work in tight scopes with clear checkpoints — review, adjust, repeat. Tactic: tell Claude to *"bias towards smaller and more compartmentalized specs."*
- **Be precise and use your brain.** Every assumption AI makes is a chance to drift. When Claude drafts a spec, think critically about it. Tactic: *"Make me verify key decisions explicitly to ensure nothing is missed."*

This connects directly to [[Specification-Driven Development]] and [[Karpathy Skills]] (which targets the same four pitfalls: assumptions, overengineering, scope creep, weak goals).

### Layer 2 — The Verifier

Sits on top of the spec. Built on Karpathy's *animals vs. ghosts* mental model: humans are **animals** (driven by intrinsic motivation — "learn this or you're fired" works), but AI is a **ghost** — Marchese reframes it as a **robot librarian** that can only answer from the books in its library and *doesn't know when a book is missing*, so it confidently makes things up. Yelling, pleading, or "make it better" doesn't work. The only real lever is **verification**. Three places to apply it:

- **Set evaluation criteria up front.** Before Claude touches anything, define what "good" looks like precisely. Not "make this report look good" but "three sections, each ending with a recommendation." (Same precision principle as Layer 1.)
- **Use a second model as critic.** A second "robot librarian" from a different library can catch what the first got wrong. Tactic: install the [[Claude Code]] **Codex plugin** and route final output through Codex so both systems must agree.
- **Pull external signal.** Bring in ground truth: connect Claude to the deployment system to confirm a deploy actually succeeded; feed historical reports as a format reference.

> Boris Cherny (creator of Claude Code): if Claude has a feedback loop, it will 2–3× the quality of the final result.

This is the practical core of [[Agentic Engineering]]'s "verifiability is the constraint" thesis.

### Layer 3 — The Environment

The spec and verifier need somewhere to live — the workshop. Most people rebuild the workshop from scratch every session. Build one that compounds:

- **A proper `CLAUDE.md`.** Auto-injected on every prompt — the first thing Claude reads. Cover how the repo works, custom skills and routing, knowledge architecture, and key working rules. *"Make this your environment. It's your world, and AI is living in it."* See [[Harness Engineering]] and [[Context Engineering]].
- **An LLM knowledge base.** A folder system you ingest your own training data into, structured so Claude knows where information lives. *"Your data is your moat."* This is exactly Karpathy's viral [[LLM Knowledge Bases]] concept — and exactly what this vault ([[Brain]]) is.
- **Skills.** Anything you do repeatedly → a [[Agent Skills|custom skill]]. *"The best way to find a leak in a hose is to run water through it"* — the more you use skills, the faster they improve and compound.
- **Rules and guardrails.** A `CLAUDE.md` line ("don't edit this folder") is a *request* — Claude can still ignore it. For critical constraints, enforce at the tool level with a **PreToolUse hook** that blocks write/edit on protected files. Bucket actions into **always do / ask first / never do**.

## 📖 Takeaways

- The framework stacks: **spec** (deliver your understanding) → **verifier** (the only lever that actually moves quality) → **environment** (where it compounds over time).
- Precision recurs at every layer — every assumption you remove is drift you prevent.
- Prompt-level guidance is a request; **hooks** are a rule. Enforce the things that can't be wrong at the tool level.
- The one thing to focus on in the age of AI: *"You can outsource your thinking, but you can't outsource your understanding."* All three layers are downstream of *your* understanding of the goal and the bigger picture.

## ✍️ Quotes

> "AI is brilliant at what can be measured, but for context-driven things… it has no signal to act on."

> "We're not building animals, we are summoning ghosts." — Andrej Karpathy

> "Your data is your moat."

> "You can outsource your thinking, but you can't outsource your understanding." — Andrej Karpathy

## 🔗 Related

- [[Agentic Engineering]] — the source Karpathy interview this video distills (verifiability, animals vs. ghosts, "can't outsource understanding")
- [[Software 3.0]] — Karpathy's broader paradigm thesis as a business playbook
- [[Karpathy Skills]] — a `CLAUDE.md` targeting the four LLM-coder pitfalls; Layer 1 in practice
- [[Specification-Driven Development]] — the spec-first discipline behind Layer 1
- [[LLM Knowledge Bases]] — the "build your own knowledge base" core of Layer 3
- [[Context Engineering]] / [[Harness Engineering]] — designing `CLAUDE.md`, skills, and hooks (Layer 3)
- [[Progressive Disclosure]] — index-first knowledge architecture, how this vault's environment is built
- [[Brain]] — this vault, a working instance of the Layer 3 LLM knowledge base

## 📖 Further reading/watching

- 📺 Source: [Stop Prompting Claude. Use Karpathy's Method Instead.](https://www.youtube.com/watch?v=7zZy1QTvokM) — Austin Marchese, 13:18
- The [[Agentic Engineering|original Karpathy @ Sequoia interview]] the three layers are drawn from

---
Template: [[templates/knowledge_note_info]]
