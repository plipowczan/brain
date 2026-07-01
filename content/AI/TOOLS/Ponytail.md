---
title: "Ponytail"
date: 2026-06-30
enableToc: true
openToc: true
tags: ["tool", "ai", "coding-agents", "minimalism", "vibe-coding", "open-source", "mit"]
type: tool
source: "_raw/inbox/DietrichGebertponytail Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.md"
agent-created: true
agent-reviewed: 2026-06-30
summary: "Plugin: teach AI agents to write minimal code by reasoning YAGNI-first before generating anything."
---

🚀 **Ponytail** — makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote.

📒 **The Principle**

Before writing any code, the agent stops at the first rung that holds:

1. Does this need to exist? → no: skip it (YAGNI)
2. Already in this codebase? → reuse it, don't rewrite
3. Stdlib does it? → use it
4. Native platform feature? → use it
5. Installed dependency? → use it
6. One line? → one line
7. Only then: the minimum that works

Lazy about the solution, never about reading.

📊 **Measured Impact** (on real Claude Code sessions, n=12 on FastAPI + React)

- **−54% LOC** (mean; up to −94% where overbuild trap exists like date picker)
- **−22% tokens**
- **−20% cost**
- **−27% wall-clock time**
- **100% safety** — validation, error-handling, security, accessibility never cut

Compare: caveman (terse prose) does −20% LOC but +7% tokens. YAGNI-alone prompt does −33% LOC but drops to 95% safety.

🔗 **Installation**

Cross-harness support:

| Host | Command |
|------|---------|
| Claude Code | `/plugin marketplace add DietrichGebert/ponytail`<br/>`/plugin install ponytail@ponytail` |
| Codex | `codex plugin marketplace add DietrichGebert/ponytail`<br/>Then `/plugins` → install Ponytail + trust hooks |
| Copilot CLI | `copilot plugin marketplace add DietrichGebert/ponytail`<br/>`copilot plugin install ponytail@ponytail` |
| Gemini CLI | `gemini extensions install https://github.com/DietrichGebert/ponytail` |
| Cursor / Windsurf / Cline | Copy `.cursor/rules/ponytail.md` to your project's `.cursor/rules/` |
| VS Code (Codex) | `~/.codex/AGENTS.md` (loaded auto) |
| GitHub Copilot (fallback) | Copy rules to `~/.copilot/copilot-instructions.md` |

🎚️ **Modes** (per-session, via `/ponytail [lite|full|ultra|off]`)

Default: `full`. Set globally via `PONYTAIL_DEFAULT_MODE` env var or `~/.config/ponytail/config.json`.

✍️ **Commands**

| Command | Purpose |
|---------|---------|
| `/ponytail [lite\|full\|ultra\|off]` | Set intensity or toggle. No arg = report current. |
| `/ponytail-review` | Review the diff for over-engineering; hands back a delete-list. |
| `/ponytail-audit` | Audit the whole repo for over-engineering, not just diff. |
| `/ponytail-debt` | Harvest deferred `ponytail:` shortcuts into a ledger ('later' → 'never'). |
| `/ponytail-gain` | Show the measured impact scoreboard (less code, less cost, more speed). |
| `/ponytail-help` | Quick reference. |

🧩 **Features**

- **Structured output** — reasoning before suggestion, chain-of-thought validation
- **Syntax coverage** — 9 loop transformations (Fusion, Interchange, Parallelization, Tiling, Unrolling, Skewing, Reversal), source-level & IR-level
- **Safety-first** — trust boundary validation, data-loss handling, security, accessibility stay
- **Zero config** — optional `~/.config/ponytail/config.json` for defaults

🔍 **When It Shines**

- Date pickers: 404 LOC → 23 LOC (uses native `<input type="date">` instead of npm bloat)
- Color pickers: 287 LOC → 23 LOC
- Reuse patterns: agent re-reads code, avoids 3x rewrites
- Code-completion bloat: stops the "just add another utility" impulse

🔗 **Links**

- **Repo**: https://github.com/DietrichGebert/ponytail
- **Benchmarks**: https://github.com/DietrichGebert/ponytail/blob/main/benchmarks/results/2026-06-18-agentic.md
- **Reproducible**: https://github.com/DietrichGebert/ponytail/blob/main/benchmarks
- **Full Writeup**: https://github.com/DietrichGebert/ponytail/blob/main/README.md

---

## Further Reading

- [[Caveman]] — similar vibe-coding approach (terse prose)
- [[Token Optimization for Claude Code]] — related cost-cutting tools
- [[Agentic Coding]] — agent-first paradigm
- [[Claude Code Best Practice]] — broader dev workflows
- [[Agent Skills]] — skill composability & sequencing
