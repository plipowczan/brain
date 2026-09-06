---
title: "Claudex Loop"
date: 2026-09-06
enableToc: true
openToc: true
tags: ["tool", "ai", "claude-code", "codex", "agent-skills", "coding-agents", "plan", "red-teaming", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-09-06_chaseai-ytclaudex-loop Claude Code skill four-phase plan hardening.md"
agent-created: true
agent-reviewed: 2026-09-06
summary: "chaseai-yt/claudex-loop — Claude Code plugin where Claude locks the plan with you and OpenAI Codex attacks it round after round in a read-only sandbox; whoever built a thing never grades it. MIT."
---
# Claudex Loop

🗒️ **[chaseai-yt/claudex-loop](https://github.com/chaseai-yt/claudex-loop)** — a [[Claude Code]] plugin that makes **two rival models harden a plan before a line of code exists**, then swap jobs to build it. Claude locks intent *with you*; **OpenAI Codex** — a different provider's model — attacks the locked plan round after round until it can't find anything else wrong. MIT.

🚀 The invariant that makes it work: **whoever made the thing never checks the thing.** Plan by Claude → attacked by Codex. Code by Codex → reviewed by Claude. Code by Claude → inspected by Codex. No model grades its own work, on any path.

## Links
### Description
🧩 The four phases:

| Phase | What happens | What makes it different |
| --- | --- | --- |
| **🔍 0 — RECON** | Claude scouts *before* asking anything — explores the codebase and living docs, or on greenfield researches prior art, stacks and known pitfalls (research depth is a gate you control, up to multi-agent deep research) | Opens with an **Assumptions Ledger** you batch-confirm in one reply, so the interview never wastes questions the code already answered |
| **🎯 1 — INTERROGATE** | A visible **decision map** splits open decisions into load-bearing (asked one at a time) and cosmetic (batched, veto-by-exception) | Every question must justify itself: *why it matters*, a committed *recommendation*, and *what breaks if we guess wrong*. Escape hatch: "accept all remaining recommendations" |
| **⚔️ 2 — REVIEW** | Codex reviews `PLAN.md` in a read-only sandbox → `VERDICT: APPROVED` or `REVISE` with concrete flaws. Claude arbitrates (rejecting bad critiques *with logged reasons*), revises, and resumes the **same Codex session** | The reviewer remembers its prior findings and attacks its own accepted fixes. Bounded by `MAX_ROUNDS` — a flagged deadlock beats a fake "approved" |
| **🔨 3 — BUILD** *(optional)* | You pick the builder. Codex builds (full write access) → Claude reads the whole diff like a contributor PR and runs the proof test itself. Or Claude builds → a *fresh* read-only Codex session cross-inspects the diff against the plan | Skipping the inspection requires an explicit, logged opt-out |

You enter at four points only: confirming the ledger, answering the interview, signing off the converged plan, and approving the final diff.

Two artifacts every run: `PLAN.md` (the *what*) and `PLAN-REVIEW-LOG.md` (the round-by-round argument — the *why*).

### Download or use
```
/plugin marketplace add chaseai-yt/claudex-loop
/plugin install claudex-loop@claudex-loop
```
Skills arrive namespaced: `/claudex-loop:claudex-loop`, `/claudex-loop:codex-review`, `/claudex-loop:codex-build`. Intent triggering works regardless — "claudex this plan" fires the right skill. Manual copy into `~/.claude/skills/` gives you bare skill names instead.

Prerequisites:
- **Codex CLI ≥ 0.130** — `npm install -g @openai/codex@latest`
- **Authenticated** — `codex login` once (any ChatGPT account, Free through Max)
- **Don't pin a model** — ChatGPT-account auth rejects `gpt-5.x-codex` variants; the skills use your config default and echo the active model at kickoff so you can veto before a round burns

## Reasoning for
This is the cleanest packaging I've seen of the idea that a model can't grade its own plan — it turns "get a second opinion" into an enforced protocol with a written argument transcript. It slots directly into the planning gap in [[Agentic Coding]] and is a concrete instance of the cross-model patterns in [[Swarm Research — Orchestrating Coding Agents]].

The receipts are what sell it. From the first end-to-end greenfield run (a solo-creator CRM):
- **55 findings across 5 rounds** — converging 26 → 15 → 12 → 2 → 0
- **1 fatal** — an access-path architecture that could not be built as written, and read as completely plausible
- **~6 wrong models** that would have shipped and corrupted data weeks later
- **~7 missing subsystems**, including a homepage feature with no backing data source
- **What survived untouched:** every product decision from the interview — the review only ever attacked *how it would break*

Worth pairing with [[Ponytail]] (YAGNI-first code) so the hardened plan doesn't get built bigger than it needs to be.

## Tunables
| Skill | Var | Default | Meaning |
| --- | --- | --- | --- |
| `claudex-loop` | `research` | ask | `none` / `web` / `deep` — pre-answers the Phase 0 research gate |
| review skills | `MAX_ROUNDS` | `5` | Hard cap on review rounds |
| review skills | `PLAN_FILE` | `PLAN.md` | Where the plan lives |
| all | `LOG_FILE` | `PLAN-REVIEW-LOG.md` | The argument transcript |
| `codex-build` | `SPEC_FILE` | `PLAN.md` | The frozen spec Codex implements |
| `codex-build` | `MAX_FIX_ROUNDS` | `2` | Fix rounds before Claude takes over |
| `codex-build` | `PROOF_CMD` | from spec | The exact test command that counts as proof |

Pass e.g. `rounds=3` when invoking to override.

## ⚠️ Safety
**Review (phases 0–2)** — Codex runs **read-only every round**: `-s read-only` on the first call, `-c sandbox_mode="read-only"` on every resume. This matters: the `resume` subcommand doesn't accept `-s`, so without forcing read-only it inherits your `config.toml` sandbox default, which may be `danger-full-access`. The skills handle it for you.

**`codex-build` (phase 3)** deliberately inverts this — Codex gets full write access, which is why the skill gates it hard: clean git tree before launch, Claude reads every line of the diff and runs the proof itself, bounded fix rounds, human-gated commits. Resume calls need the long `--dangerously-bypass-approvals-and-sandbox` flag, and always resume by explicit `thread_id`, never `--last`.

## Alternatives considered
- **Plan mode alone** — same model writes and grades; that's the echo chamber this exists to break.
- **[[Superpowers]] brainstorming / spec-first skills** — great at *reaching* a plan, but the plan is still single-model. Claudex Loop is the adversarial layer you bolt on after.
- **Manual "ask another model"** — works, but nothing accumulates: no session memory of prior findings, no arbitration log, no bounded convergence.

Predecessors: this repo *was* `grill-me-codex`, then `crucible`; GitHub redirects the old URLs and the old skills live in [`legacy/`](https://github.com/chaseai-yt/claudex-loop/blob/main/legacy). Act 1 of the legacy skills is © [Matt Pocock](https://github.com/mattpocock/skills) (MIT); phase 3's Codex-as-builder pattern is adapted from Peter Steinberger's [`codex-first`](https://github.com/steipete/agent-scripts).

## Resources
- 🔗 Repo: [github.com/chaseai-yt/claudex-loop](https://github.com/chaseai-yt/claudex-loop)
- 🔗 Author: [Chase AI](https://youtube.com/@chaseai)
- 📖 Related: [[Claude Code]] · [[Agent Skills]] · [[Agentic Coding]] · [[Harness Engineering]] · [[Swarm Research — Orchestrating Coding Agents]] · [[Ponytail]]

---
Template: [[templates/tool]]
