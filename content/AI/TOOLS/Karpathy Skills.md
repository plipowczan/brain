---
title: "Karpathy Skills"
date: 2026-04-26
enableToc: true
openToc: true
tags: ["tool", "ai", "claude-code", "coding-agents", "context-engineering"]
type: tool
source: "_raw/inbox/forrestchangandrej-karpathy-skills A single CLAUDE.md file to improve Claude Code behavior, derived from Andrej Karpathy's observations on LLM coding pitfalls.md"
agent-created: true
summary: "A single CLAUDE.md addressing 4 typical LLM-coder pitfalls per Karpathy: assumptions, overengineering, scope creep, weak goals"
---
# Karpathy Skills

`forrestchang/andrej-karpathy-skills` — a single `CLAUDE.md` with 4 rules that directly address [Andrej Karpathy's](https://x.com/karpathy/status/2015883857489522876) observations on where LLM coders fall down. Distributed as a Claude Code plugin or for appending to an existing CLAUDE.md.

## 🔗 Links

### Description
- Repo: https://github.com/forrestchang/andrej-karpathy-skills
- Karpathy original tweet: https://x.com/karpathy/status/2015883857489522876
- Cursor variant: https://github.com/forrestchang/andrej-karpathy-skills/blob/main/CURSOR.md

### Download or use

```bash
# Claude Code plugin (recommended)
/plugin marketplace add forrestchang/andrej-karpathy-skills
/plugin install andrej-karpathy-skills@karpathy-skills

# Per-project (CLAUDE.md)
curl -o CLAUDE.md https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md

# Append to existing
echo "" >> CLAUDE.md
curl https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md >> CLAUDE.md
```

## 🗒️ Description

### 🧩 What LLMs get wrong (per Karpathy)

1. **Wrong assumptions, no clarification** — models silently pick an interpretation, don't ask, don't surface doubt
2. **Overengineering** — bloated abstractions, 1000 lines instead of 100, dead code stays
3. **Side-effect edits** — they change comments and code they don't understand, even when orthogonal to the task
4. **Weak success criteria** — without a "make it work" criterion, manual validation is required

### 🧩 The four rules

| Principle | Addresses |
|-----------|-----------|
| **Think Before Coding** | Wrong assumptions, hidden confusion, missing tradeoffs |
| **Simplicity First** | Overcomplication, bloated abstractions |
| **Surgical Changes** | Orthogonal edits, touching code you shouldn't |
| **Goal-Driven Execution** | Leverage przez tests-first i verifiable success criteria |

#### 1. Think Before Coding

Stop. State assumptions explicitly. Present multiple interpretations when there's ambiguity. Push back when a simpler solution exists. Stop & ask when confused.

#### 2. Simplicity First

- No features beyond what was asked
- No abstractions for single-use code
- No "flexibility" that wasn't requested
- No error handling for impossible scenarios
- 200 lines → 50? Rewrite.

> **Test:** Would a senior engineer say this is overcomplicated? If yes, simplify.

#### 3. Surgical Changes

- Don't "improve" adjacent code/comments/formatting
- Match existing style, even if you'd do it differently
- Notice unrelated dead code → mention, don't delete
- Remove imports/vars/funcs that **YOUR** changes orphaned; don't remove pre-existing dead code

> **Test:** Every changed line should trace directly to the user's request.

#### 4. Goal-Driven Execution

Transform imperative tasks into declarative goals with verification:

| Instead of... | Use... |
|------------|---------|
| "Add validation" | "Write tests for invalid inputs, then make them pass" |
| "Fix the bug" | "Write a test that reproduces it, then make it pass" |
| "Refactor X" | "Ensure tests pass before and after" |

Multi-step plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

> Karpathy: "LLMs are exceptionally good at looping until they meet specific goals... Don't tell it what to do, give it success criteria and watch it go."

### 🧩 Signs it's working

- Fewer unnecessary changes in diffs (only what was requested)
- Code is simple from the start, not after a refactor
- Clarifying questions **before** implementation, not after mistakes
- Clean, minimal PRs, no drive-by refactoring

### 🧩 Tradeoff

The guidelines bias toward **caution over speed**. For trivial tasks (typo fix, one-liner) — relax the full rigor. The goal is to limit costly mistakes on non-trivial work, not to slow everything down.

## ✍️ Reasoning for

From my perspective this is a good baseline CLAUDE.md to bolt on next to existing project-specific instructions. Three of the four rules overlap with what I already do manually ("don't add features beyond what's asked", "match existing style", "surgical changes"). The fourth — Goal-Driven — is exactly what's missing in most of my prompts: instead of "add X", I write "write a test that fails when X is missing, then make it pass". That turns the LLM from an executor into an autonomous worker.

For my setup it's worth cherry-picking rule #4 into my main `~/.claude/CLAUDE.md`, since rules #1–3 are already partially covered via [[Context Engineering]] and [[Claude Code Best Practice]]. A structural alternative that enforces these rules through workflow gates — see [[Archon]].

## Alternatives considered

- **CLAUDE.md from scratch** — more tailored, but more effort
- **[[Awesome Claude Code]]** — resource curation, but it's a catalog, not a ready-made file
- **[[Agent Skills]]** — skills are more granular (load on demand), CLAUDE.md is always-on

## 🔗 Resources

- Karpathy observations (X): https://x.com/karpathy/status/2015883857489522876
- Multica (related project by the author, Jiayuan): https://github.com/multica-ai/multica
- Multica-ai mirror of the skills repo: https://github.com/multica-ai/andrej-karpathy-skills
- Author X handle: https://x.com/jiayuan_jy
- License: MIT
- [[Superpowers]] — a methodology framework that enforces Karpathy-style discipline via 7 mandatory skills
- [[gstack]] — the opposite extreme (23+ opinionated role-skills instead of 1 CLAUDE.md)

---
Template: [[templates/tool]]
