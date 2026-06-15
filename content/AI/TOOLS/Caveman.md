---
title: "Caveman"
date: 2026-05-31
enableToc: true
openToc: true
tags: ["tool", "ai", "claude-code", "skills", "token-optimization", "cost-optimization", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-05-31_JuliusBrussee-caveman.md"
agent-created: true
agent-reviewed: 2026-06-15
summary: "JuliusBrussee/caveman — Claude Code skill that makes the agent talk like a caveman, cutting ~65% of output tokens while keeping full technical accuracy; MIT, 30+ agent hosts."
---
# Caveman
🪨 *why use many token when few do trick* — a [[Claude Code]] skill/plugin (also Codex, Gemini, Cursor, Windsurf, Cline, Copilot, 30+ more) that makes the agent **talk like a caveman**: drop articles, filler, and pleasantries, keep substance, use fragments. Cuts **~65% of output tokens** on average (range 22–87%) with **100% technical accuracy** preserved. Brain still big. Mouth small.

## 🛠️ How to use
Quick-start, start to finish:

1. **Install (one-time).** Needs **Node ≥18**, takes ~30s, idempotent (safe to re-run), skips agents you don't have.
   ```powershell
   # Windows (PowerShell 5.1+) — my setup
   irm https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.ps1 | iex
   ```
   ```bash
   # macOS / Linux / WSL / Git Bash
   curl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.sh | bash
   ```
2. **Turn it on.** Type `/caveman` or say *"talk like caveman"*. On [[Claude Code]] a session hook writes a flag file so the agent talks caveman from message one — no command needed (also auto-activates each session on Codex and Gemini).
3. **Pick a level** (sticks until session end): `/caveman lite` (drops filler) → `/caveman full` (default caveman) → `/caveman ultra` (telegraphic) → `/caveman wenyan` (classical Chinese, shortest).
4. **Use the sub-commands** as needed — `/caveman-commit`, `/caveman-review`, `/caveman-stats`, `/caveman-compress <file>` (see [[#🧩 What you get]] below for the full list).
5. **Turn it off.** Say *"normal mode"* — do this for code, commits, and security writing where terseness hurts clarity.

**Pair it with [[Headroom]]** to also compress *input/context* tokens: caveman shrinks the mouth, Headroom shrinks what the brain reads. See [[Token Optimization for Claude Code]] for the broader toolkit.

## Links
### Description
- Repo: https://github.com/JuliusBrussee/caveman (MIT)
- Author: [Julius Brussee](https://github.com/JuliusBrussee)
### Download or use
```bash
# macOS / Linux / WSL / Git Bash
curl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.sh | bash

# Windows (PowerShell 5.1+)
irm https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.ps1 | iex
```
Needs Node ≥18. ~30s, idempotent (safe to re-run), skips agents you don't have. **Trigger:** type `/caveman` or say "talk like caveman". Stop with "normal mode".

## 🧩 What you get
- `/caveman [lite|full|ultra|wenyan]` — compress every reply; levels stick until session end. `lite` drops filler, `full` is default caveman, `ultra` is telegraphic, `wenyan` uses classical Chinese (shortest).
- `/caveman-commit` — Conventional Commit messages, ≤50 char subject, why over what.
- `/caveman-review` — one-line PR comments (`L42: 🔴 bug: user null. Add guard.`).
- `/caveman-stats` — real session token usage + lifetime savings + USD; tweetable line via `--share`.
- `/caveman-compress <file>` — rewrites a memory file (e.g. `CLAUDE.md`) into caveman-speak, cutting ~46% **input** tokens every session; code/URLs/paths byte-preserved.
- `caveman-shrink` — MCP middleware that wraps any MCP server and compresses tool descriptions.
- `cavecrew-*` — caveman subagents (investigator/builder/reviewer), ~60% fewer tokens than vanilla so the main context lasts longer.
- **Statusline badge** — `[CAVEMAN] ⛏ 12.4k` (lifetime tokens saved); silence with `CAVEMAN_STATUSLINE_SAVINGS=0`.

For Claude Code, a session hook writes a flag file so the agent talks caveman from message one — no `/caveman` needed. Auto-activates each session on Claude Code, Codex, Gemini.

## Reasoning for
Direct, repo-level lever for the same goal as [[Token Optimization for Claude Code]], but attacking **output** tokens (and, via `caveman-compress`, input tokens) instead of context-window plumbing. Complements progressive-disclosure context design. Key caveat (from the README): caveman only affects output/visible tokens — **thinking/reasoning tokens are untouched**, so it makes the *mouth* smaller, not the brain. Biggest win is readability and speed; cost savings a bonus.

Useful here as an always-on mode for routine agent chatter in this vault and in [[Qamera AI]] / [[PLSoft]] work, while keeping `normal mode` for code, commits, and security writing.

## 🧪 Benchmarks
Real Claude API token counts, averaged over 10 prompts:

| | Normal | Caveman | Saved |
|---|---:|---:|---:|
| Average output | 1214 | 294 | **65%** |
| `caveman-compress` memory files | 898 | 481 | **46%** |

Three-arm eval harness (baseline / `Answer concisely.` / skill) lives in `evals/`, so the delta is measured against an explicit terse baseline, not the verbose default. The README also cites a March 2026 paper, ["Brevity Constraints Reverse Performance Hierarchies in Language Models"](https://arxiv.org/abs/2604.00025), reporting brevity constraints improved accuracy by 26 points on some benchmarks.

## Caveman ecosystem
Five composable tools, one philosophy (*agent do more with less*):
- **caveman** — output compression (this note).
- **caveman-code** — whole terminal coding agent, caveman top to bottom; ~2× fewer tokens than Codex; MIT.
- **cavemem** — cross-agent memory compression.
- **cavekit** — spec-driven build loop.
- **cavegemma** — Gemma 4 31B fine-tuned on caveman pairs.

## Alternatives considered
- [[Token Optimization for Claude Code]] — broader catalog of token-reduction tools (proxies, context sandboxes, code graphs); caveman fits its "output/memory compression" slot.
- [[Graphify]] — token reduction via knowledge-graph retrieval rather than terse phrasing.
- [[Agent Skills]] / [[Vercel Skills]] — the skill-packaging ecosystem caveman ships through.

## Resources
- [INSTALL.md](https://github.com/JuliusBrussee/caveman/blob/main/INSTALL.md) — full install matrix, all flags, per-agent detail
- [benchmarks/](https://github.com/JuliusBrussee/caveman/blob/main/benchmarks) + [evals/](https://github.com/JuliusBrussee/caveman/blob/main/evals) — raw data + reproduction harness
- Related: [[Awesome Claude Code]], [[Building Claude Skills Guide]], [[Karpathy Skills]], [[Superpowers]], [[gstack]]

---
Template: [[templates/tool]]
