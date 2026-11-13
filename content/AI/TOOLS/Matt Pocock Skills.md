---
title: "Matt Pocock Skills"
date: 2026-11-01
enableToc: true
openToc: true
tags: ["tool", "ai", "agent-skills", "claude-code", "coding-agents", "methodology", "tdd", "open-source"]
type: tool
source: "_raw/processed/2026-11-01_mattpocockskills Skills for Real Engineers. Straight from my .agents directory.md"
agent-created: true
summary: "mattpocock/skills — small composable engineering skills (grill-me, tdd, diagnosing-bugs, to-spec, code-review…) built around four agent failure modes; installs as a plugin on Claude Code, Codex, Copilot"
status-checked: 2026-11-13
project-status: active
repo: "https://github.com/mattpocock/skills"
---

# Matt Pocock Skills

> [!success] Status check 2026-11-13 — active
> **Verdict:** The last commit was on 2026-11-12 (a merged PR on the software-factory skill), and releases v1.3.0 and v1.3.1 (2026-10-04) and v1.3.2 (2026-10-29) shipped within the last six weeks.
> **Last release:** v1.3.2 (2026-10-29). The CHANGELOG is managed with changesets, and the plugin auto-updates. · **last commit:** 2026-11-12 · **licence:** MIT
> **Repo:** https://github.com/mattpocock/skills
> **Changed since this note:** Since 2026-11-01 the only commits reword the beta `software-factory` skill in skills/in-progress (a glossary for designing a software factory, added 2026-10-31). The repo also has a skills/in-progress/ bucket the note doesn't mention: chief-of-staff, claude-handoff, loop-me, setup-ts-deep-modules…

## 🚀 Description

[mattpocock/skills](https://github.com/mattpocock/skills) — the agent skills Matt Pocock uses daily, framed as "real engineering, not vibe coding". Explicitly the opposite of process-owning frameworks (GSD, BMAD, Spec-Kit): skills are small, adaptable and composable, work with any model, and leave you in control. ~60k people on the newsletter.

Install: `claude plugin install mattpocock-skills@claude-plugins-official` (auto-updates), Codex and Copilot via plugin marketplaces, Gemini CLI manually, or `npx skills@latest add mattpocock/skills -a <agent>` for editable copies. Then run `/setup-matt-pocock-skills` once per repo (issue tracker, triage labels, docs location).

## 🎨 The four failure modes it targets

1. **The agent didn't do what I want** → a *grilling session* (`/grill-me`, `/grill-with-docs`): the agent interviews you until every branch of the design tree is resolved. Use it before every change.
2. **The agent is too verbose** → a shared language. `/grill-with-docs` builds a glossary (`GLOSSARY.md`) and ADRs inline. "The materialization cascade" replaces a sentence of jargon; naming gets consistent and thinking tokens drop.
3. **The code doesn't work** → feedback loops: types, browser access, tests. `/tdd` enforces red-green-refactor in vertical slices; `/diagnosing-bugs` is a gated loop (red-on-this-bug feedback loop → minimise → hypothesise → instrument → fix → regression test).
4. **We built a ball of mud** → design every day. `/to-spec` quizzes you about the modules you touch; `/improve-codebase-architecture` surveys for "deepening opportunities" (Ousterhout's deep modules) — run it every few days.

## 🧩 Skill catalogue

Split by who can invoke: *user-invoked* skills orchestrate and run only when you type them; *model-invoked* skills hold reusable discipline and the agent may reach for them.

- **Engineering, user-invoked:** `ask-matt` (router), `grill-with-docs`, `triage`, `improve-codebase-architecture`, `setup-matt-pocock-skills`, `to-spec`, `to-tickets` (tracer-bullet tickets with blocking edges), `implement`, `implement-spec` (task graph across subagents on one integration branch), `wayfinder` (huge plans as a map of decision tickets), `retro`
- **Engineering, model-invoked:** `prototype`, `diagnosing-bugs`, `research`, `tdd`, `domain-modeling`, `codebase-design`, `code-review` (two axes: Standards and Spec), `pr` (summary visual, before/after evidence, merge-danger call), `wizard` (interactive bash wizard for human-only steps)
- **Productivity:** `grill-me`, `handoff`, `teach`, `to-questionnaire`, `wait-what` (user-invoked); `grilling`, `writing-for-agents` (model-invoked)

## Reasoning for

I already run most of these through the plugin (the skill list in this session shows `mattpocock-skills:grilling`, `tdd`, `diagnosing-bugs`, `code-review`, `pr`, `wizard`…). The part worth stealing for my own skills is the **user-invoked vs model-invoked split** and the glossary habit — see [[Skill Authoring Best Practices]] and [[DOX — Self-Documenting AGENTS.md]].

## Alternatives considered

- [[Superpowers]] — heavier, more opinionated end-to-end methodology (brainstorm → worktree → plan → TDD → review)
- [[gstack]] and [[Karpathy Skills]] — other opinionated skill packs
- [[Agent Skills (Addy Osmani)]] — engineering-lifecycle skills from a different angle
- [[Vercel Skills]] — the `npx skills` installer used here

## 🔗 Links

- Repo: https://github.com/mattpocock/skills
- Newsletter: https://www.aihero.dev/s/skills-newsletter
- Related: [[Agent Skills]], [[Claude Code]]

---
Template: [[templates/tool]]
