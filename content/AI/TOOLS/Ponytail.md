---
title: "Ponytail"
date: 2026-06-30
enableToc: true
openToc: true
tags: ["tool", "ai", "coding-agents", "minimalism", "vibe-coding", "open-source", "mit"]
type: tool
source: "_raw/inbox/DietrichGebertponytail Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.md"
agent-created: true
agent-reviewed: 2026-11-13
summary: "Plugin: teach AI agents to write minimal code by reasoning YAGNI-first before generating anything."
status-checked: 2026-11-13
project-status: active
repo: "https://github.com/DietrichGebert/ponytail"
---

> [!success] Status check 2026-11-13 — active
> **Verdict:** The last release (v5.3.3) and the last commit are both dated 2026-10-29, 15 days ago; October alone had 14 releases (v4.10.1 to v5.3.3).
> **Last release:** v5.3.3, 2026-10-29 (GitHub release; npm @dietrichgebert/ponytail 5.3.3 published the same day). · **last commit:** 2026-10-29 · **licence:** MIT
> **Repo:** https://github.com/DietrichGebert/ponytail
> **Changed since this note:** Major version change: the note describes v4.8.x; the current line is Ponytail 5 (v5.0.0, 2026-10-08), 'rebuilt from the ground up'. The rules were rewritten and halved: before writing, the agent maps callers, tests and config the change must reach, and every reply ends with what it skipped and any risk…

🚀 **Ponytail** — makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.

I first wrote this note against v4.8.x. The current line is **Ponytail 5** (v5.0.0, 2026-10-08, "rebuilt from the ground up": new rules, new review, new audit). Latest release as of 2026-11-13: **v5.3.3** (2026-10-29), on GitHub and on npm as `@dietrichgebert/ponytail`. The project now has a site, ponytail.dev. Still MIT.

📒 **The Principle**

Before writing any code, the agent stops at the first rung that holds:

1. Does this need to exist? → no: skip it (YAGNI)
2. Already in this codebase? → reuse it, don't rewrite
3. Stdlib does it? → use it
4. Native platform feature? → use it
5. Installed dependency? → use it
6. One line? → one line
7. Only then: the minimum that works, plus one small test if it has logic

Lazy about the solution, never about reading. Since v5 that reading is explicit: the ladder runs only after the agent has mapped what the change must reach (callers, tests, config) and what it could break, and at session start it gets a short map of what already exists in the repo. Logic with a branch, a loop, a parser, money or security leaves one small test behind, and every reply ends with what was skipped or not checked and any risk. The v5 rules are about half as long as v4's.

📊 **Measured Impact**

Ponytail 5 (author's benchmark of 2026-10-07: headless Claude Code, Opus 5.5, 39 tasks including a real FastAPI + React repo, 5 runs each, against the same agent with no skill):

- **−53% code**
- **−45% output tokens**
- **−26% cost**
- **−41% time**
- **98% of risky logic ships with a test** (68% without Ponytail)
- Validation, error handling, security and accessibility are still never cut; the six security tasks passed all 30 runs

The numbers I originally recorded came from the v4 benchmark (2026-06-18: 12 feature tasks, Haiku 4.5, 4 runs each): −54% LOC (mean; up to −94% where there is an over-build trap like a date picker), −22% tokens, −20% cost, −27% wall-clock time. In that run caveman (terse prose) did −20% LOC but +7% tokens, and a bare YAGNI one-liner prompt did −33% LOC but went unsafe once in 20 runs (95%). All of these are the author's own runs, not independent benchmarks.

🔗 **Installation**

Cross-harness support (the README now counts 20 agents; step-by-step for the rest is in `INSTALL.md`):

| Host | Command |
|------|---------|
| Claude Code | `/plugin marketplace add DietrichGebert/ponytail`<br/>`/plugin install ponytail@ponytail` (send as two separate prompts) |
| Codex | `codex plugin marketplace add DietrichGebert/ponytail`<br/>`codex plugin add ponytail@ponytail`<br/>Then open `/hooks`, trust its two lifecycle hooks, start a new thread |
| Copilot CLI | `copilot plugin marketplace add DietrichGebert/ponytail`<br/>`copilot plugin install ponytail@ponytail` |
| Gemini CLI | `gemini extensions install https://github.com/DietrichGebert/ponytail` |
| OpenCode | `opencode plugin add @dietrichgebert/ponytail` |
| Cursor | Hooks: clone the repo, then `node ponytail/scripts/cursor-hooks.js install`; or rule-only: copy `.cursor/rules/ponytail.mdc` (not both) |
| Windsurf / Cline / Kiro | Copy the matching rules file from the repo (`.windsurf/rules/`, `.clinerules/`, `.kiro/steering/`) |
| VS Code (Codex) | `~/.codex/AGENTS.md` (loaded auto) |
| GitHub Copilot (fallback) | Copy rules to `~/.copilot/copilot-instructions.md` |
| Anything else | Copy `AGENTS.md` into the project, or install `skills/ponytail/SKILL.md` as a skill |

The Claude Code and Codex plugins (and the Cursor hooks) run two small Node.js lifecycle hooks, so `node` must be on PATH. The author warns that only GitHub `DietrichGebert/ponytail` and npm `@dietrichgebert/ponytail` are genuine, and that Ponytail never ships `.exe` or `.dll` files, so impostor copies exist.

🎚️ **Modes** (per-session, via `/ponytail [lite|full|ultra|off]`)

Default: `full`. Set globally via `PONYTAIL_DEFAULT_MODE` env var or `~/.config/ponytail/config.json` (`%APPDATA%\ponytail\config.json` on Windows).

✍️ **Commands**

| Command | Purpose |
|---------|---------|
| `/ponytail [lite\|full\|ultra\|off]` | Set intensity or toggle. No arg switches it on at the default level if off, otherwise reports the current level. |
| `/ponytail band [on\|off]` | Claude Code only: show or hide the band above the prompt (v5.3+). |
| `/ponytail band import` | Claude Code only: add past Claude Code sessions to the board. |
| `/ponytail-review` | Since v5 a full review, not just a delete-list: bugs, security, real load, risky code without a test, slow paths, and what to cut. It reads the code the change touches, not only the diff. Target can be `uncommitted`, `staged`, `branch` or a PR link. |
| `/ponytail-audit` | The same checks for the whole repo, ranked, with what to fix first (the v4 audit only listed what to delete). |
| `/ponytail-debt` | Harvest deferred `shortcut:` comments (they were `ponytail:` in v4) into a ledger ('later' → 'never'). |
| `/ponytail-gain` | Show the measured impact scoreboard (less code, less cost, more speed). |
| `/ponytail-help` | Quick reference. |

Full commands need a skill-capable host (Claude Code, Codex, Devin CLI, OpenCode, Gemini, Antigravity CLI, pi, Hermes Agent, Qoder, Grok Build). The rule-file adapters (Cursor rule, Windsurf, Cline, Copilot, Kiro) get only the always-on rules.

🧩 **Features**

- **Safety-first** — trust boundary validation, data-loss handling, security, accessibility stay
- **Small tests for risky logic** — branches, loops, parsers, money and security code leave one test behind (v5)
- **Codebase map at session start** — so the agent reuses before it writes (v5)
- **The band and the board** (v5.3, Claude Code 2.1.290+ in the terminal or desktop app; not the VS Code panel, cloud sessions or `claude -p`) — a band above the prompt with the current task's cost, tokens, agent time, code reuse and whether tests passed after the last change; the board is a local page across all projects. Data stays in `~/.config/ponytail/band/` by default
- **Subagent injection** — the ruleset is injected into subagents too; `PONYTAIL_SUBAGENT_MATCHER` (regex on agent type) scopes it
- **Zero config** — optional `~/.config/ponytail/config.json` for defaults

An earlier version of this note listed "structured output / chain-of-thought validation" and "9 loop transformations (Fusion, Interchange, …)" here. Neither appears in the v4.8.4 README (current when I wrote the note) or the current one, so I removed them as an error.

🔍 **When It Shines**

- Date pickers: in the v5 benchmark 335 lines → 10 lines (reuses the repo's `Input` with `type="date"`, so the browser brings the calendar); in the v4 benchmark it was 404 LOC → 23 LOC
- Color pickers: 287 LOC → 23 LOC (v4 benchmark)
- Reuse patterns: agent re-reads code, avoids 3x rewrites
- Code-completion bloat: stops the "just add another utility" impulse

🔗 **Links**

- **Repo**: https://github.com/DietrichGebert/ponytail
- **Site**: https://ponytail.dev
- **npm**: https://www.npmjs.com/package/@dietrichgebert/ponytail
- **Benchmarks (v5)**: https://github.com/DietrichGebert/ponytail/blob/main/benchmarks/results/2026-10-07-agentic.md
- **Benchmarks (v4)**: https://github.com/DietrichGebert/ponytail/blob/main/benchmarks/results/2026-06-18-agentic.md
- **Reproducible**: https://github.com/DietrichGebert/ponytail/blob/main/benchmarks
- **Full Writeup**: https://github.com/DietrichGebert/ponytail/blob/main/README.md
- **Install guide**: https://github.com/DietrichGebert/ponytail/blob/main/INSTALL.md
- **Ponytail 5 release notes**: https://github.com/DietrichGebert/ponytail/releases/tag/v5.0.0

---

## Further Reading

- [[Caveman]] — similar vibe-coding approach (terse prose)
- [[Headroom]] — input-side compression; its README recommends Ponytail as the companion for leaner model output
- [[Token Optimization for Claude Code]] — related cost-cutting tools
- [[Agentic Coding]] — agent-first paradigm
- [[Claude Code Best Practice]] — broader dev workflows
- [[Agent Skills]] — skill composability & sequencing
