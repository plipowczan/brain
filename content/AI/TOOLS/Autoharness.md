---
title: "Autoharness"
date: 2026-10-01
enableToc: true
openToc: true
tags: ["tool", "ai", "claude-code", "agent-skills", "skills", "self-improving", "harness", "python", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-10-01_tigerless-labsautoharness Autoharness — a self-learning skill layer for Claude Code.md"
agent-created: true
summary: "tigerless-labs/autoharness — Claude Code plugin that distills skills from your real sessions, merges near-duplicates, and archives unused ones by adherence rate; never touches skills it didn't write"
---
# Autoharness

🗒️ **[tigerless-labs/autoharness](https://github.com/tigerless-labs/autoharness)** is a self-learning skill layer for [[Claude Code]]. It watches your real sessions, **distills** reusable lessons into native `SKILL.md` files, **merges** same-scenario skills instead of piling up near-duplicates, **patches** them as you correct them, and **archives** the ones that stop getting used. It only ever touches skills it wrote itself. There's no daemon and no benchmark. MIT, by Tigerless Labs.

🚀 The bet, as the README puts it: same model, different harness can move a score a lot (it cites 42% → 78% on CORE-Bench from the HAL paper), yet the harness is still rebuilt by hand every model generation. Autoharness argues that one slice of it, the skill layer, can maintain itself.

## Links
### Description
🧩 **The pipeline** runs beside the host. Skills stay plain native files, recalled by Claude Code's normal name-and-description mechanism:

| Component | Role |
|---|---|
| **CAP**, capture | Hook-driven "dumb pipe": grabs each turn, redacts at egress, and counts **tool calls**. The turn that crosses the threshold ends with a background reflection. |
| **REF**, reflect | Reads the episode, compares it to the existing index, and proposes add / merge / patch / attach a support file / delete. If a new lesson contradicts an old skill, it must rewrite the stale one in the same run. It has **no write tools**. |
| **promoter** | The only writer. Lints the intent (safety, structure, ledger, completeness, self-authored-only) and lands it with an atomic rename. It rejects a description whose trigger falls past the index's truncation point. |
| **IDX** | At session start, injects a grouped index of autoharness-written skills plus a one-line report of the last run, so rejected proposals are visible instead of silent. |
| **MNG**, lifecycle | Lazy, once per session. Ranks skills by **usage rate = loads ÷ requests since the skill was created**. That's relative to opportunity, so a closed laptop doesn't age anything out. |
| **curator** | A rarer whole-library pass that folds near-duplicates under umbrella skills; it snapshots the skill trees first. |
| **LED**, ledger | An append-only `.ledger.jsonl` per skill (action, reason, evidence), with a redacted transcript slice saved as `references/evidence-*.md`. |

🧩 **Lifecycle rules worth knowing:**

- **Three signals, kept apart.** A *load* (the model invoked the skill) is the only thing the rate counts. A *view* (a session read into the skill's folder) shows recall value but not adherence. A *patch* marks an improvement.
- **Probation:** a new skill can't be archived until its layer has seen 100 requests (project) or 300 (global).
- **Graduation review** archives a skill only if it was never loaded **and** never viewed during probation. In the README's words, "no evidence of use is not the same as evidence of no use."
- **Capacity is the only death after graduation:** at most 50 mature skills per project and 20 global, lowest usage rate goes first.
- **Archive, never delete:** skills move to `.claude/skills/.archive/<name>/` with their history. Move one back to revive it. A merged skill's ledger names the umbrella that absorbed it, so a merge and a prune are distinguishable.
- `SKILL.md` bodies over 25 non-blank lines are rejected "as a transcript rather than a rule"; detail goes into `references/`.

🧩 **Knobs** (all `AUTOHARNESS_*` environment variables): `REFLECT_EVERY_N` (50 tool calls), `CONSOLIDATE_EVERY_N` (250), `CARRIER` (`bundle` sends a redacted window to a fresh subagent; `fork` resumes the real session on a warm cache), `INDEX_SUSPENDED` (turn off the index to measure what it's worth), `GRADUATION_SUSPENDED`, plus maturity and capacity per layer. The README says the defaults are **"deliberate placeholders pending empirical calibration."**

### Download or use
```
/plugin marketplace add tigerless-labs/autoharness
/plugin install autoharness@autoharness
/reload-plugins
```

Zero config after that. `/learn` distills the current session on demand. To update, refresh the marketplace **first** (`claude plugin marketplace update autoharness`), then `claude plugin update autoharness@autoharness`, then restart. Uninstalling leaves its state (`~/.claude/autoharness/`, `<repo>/.claude/autoharness/`) and the skills it wrote on disk. Every self-authored skill carries a ledger marker, so they're easy to find.

⚠️ **Requires Python 3.11+ as `python3` on PATH.** It has zero third-party dependencies, but the hooks call bare `python3`, and an older interpreter earlier on PATH turns every hook off for the session. On my Windows box `python3` can resolve to the Microsoft Store alias, so check `python3 --version` before trusting that it's running.

## Reasoning for
The design choice I like most is **validation by adherence, not by benchmark.** A skill survives because later sessions actually load it, not because it scored well on a held-out set nobody maintains. That's the only validation signal that works on open-ended day-to-day work, and it's free: no eval tokens.

Three more things it gets right where self-improving agents usually don't:

- **It never touches my skills.** This vault has more than a dozen hand-written workflow skills (ingest, compile, lint…). A tool that "cleans up" skills it didn't author would be a non-starter, and here that's a hard rule enforced by the promoter.
- **The reflector proposes, the promoter writes.** Separating judgment from write access, with lint in between, is the same discipline as the agent that wrote the code not being allowed to approve it.
- **The paper trail.** Each skill's ledger plus evidence slice is the raw material for a real eval set later, which is the piece the [[AI-Native SDLC Playbook]] says to build ("regression-test your skills like code").

⚠️ What I'd watch:

- **Distilled lessons can encode mistakes.** A session that "worked something out" may have worked it out wrong, and a confident skill makes the mistake repeat. [[DELEGATE-52]] is the reminder that unattended edits compound. I'd review the ledger weekly at first.
- **Background reflections cost tokens.** Each one spawns a child session every 50 tool calls by default. The README explicitly hasn't measured the cache-hit benefit of `fork` yet.
- **Context tax:** the session-start index costs context on every session. `AUTOHARNESS_INDEX_SUSPENDED=1` exists precisely so you can measure whether it's worth it.

## Alternatives considered
The README's own comparison:

| | Grows without bound | Offline-gated self-edit (Self-Harness, arXiv 2606.09498) | Timer + daemon ([[Hermes Agent]]) | Autoharness |
|---|---|---|---|---|
| Keeps the skill layer bounded | No | Yes | Yes | Yes |
| Validation signal | None | Held-out benchmark score | Wall-clock inactivity | Adherence in use |
| What triggers learning | n/a | Offline batch | Idle time, elapsed days | Work done in the session |
| Needs a benchmark | No | Yes | No | No |
| Needs a resident daemon | No | No | Yes | No |

- **[[Hermes Agent]]**: autonomous skill creation and self-improving skills inside a whole agent with a messaging gateway. Autoharness credits it as inspiration but swaps wall-clock aging for opportunity-relative usage.
- **[[Skills 2.0 Testing]] / Anthropic's skill-creator**: benchmark-gated skill improvement. More rigorous per skill, but someone has to write and maintain the evals.
- **Hand-written skills ([[Agent Skills]])**: what I do now. Highest quality, but nothing prunes them and lessons only get captured when I remember to.

## Resources
- 🔗 Repo: [github.com/tigerless-labs/autoharness](https://github.com/tigerless-labs/autoharness) · pipeline diagram: [docs/assets/pipeline.svg](https://github.com/tigerless-labs/autoharness/blob/main/docs/assets/pipeline.svg)
- 📄 Cited: [HAL — Holistic Agent Leaderboard (arXiv 2510.11977)](https://arxiv.org/abs/2510.11977) · [Self-Harness (arXiv 2606.09498)](https://arxiv.org/abs/2606.09498)
- 🎥 Third-party walkthrough: [AI Coding Tools (Tigerless Labs Workflow 2026)](https://www.youtube.com/watch?v=TM6tGpug1Hc), AI Insider channel, not reviewed by the authors
- 📖 Related: [[Hermes Agent]] · [[Agent Skills]] · [[Skills 2.0 Testing]] · [[Harness Engineering]] · [[DELEGATE-52]] · [[Claude Code]]

---
Template: [[templates/tool]]
