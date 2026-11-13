---
title: "Claude Code Best Practice"
date: 2026-04-10
enableToc: true
openToc: true
tags: ["tool", "ai", "claude-code", "coding-agents", "resources"]
type: tool
source: "_raw/processed/2026-04-10_shanraisshan-claude-code-best-practice.md"
agent-created: true
summary: "69 tips, development workflows comparison, orchestration patterns — from vibe coding to agentic engineering"
status-checked: 2026-11-13
project-status: active
repo: "https://github.com/shanraisshan/claude-code-best-practice"
---

# Claude Code Best Practice

> [!success] Status check 2026-11-13 — active
> **Verdict:** Latest commit 5f0b1740 on main is dated 2026-11-13 (a badge bump for Claude Code v2.1.323). 100 commits landed between 2026-10-01 and 2026-11-13. 95 of them are authored by 'Claude' or 'Claude Routine' (automated drift tracking) and 5 by the maintainer Shayan…
> **Last release:** no releases (commits only); no tags either · **last commit:** 2026-11-13 · **licence:** MIT
> **Repo:** https://github.com/shanraisshan/claude-code-best-practice
> **Changed since this note:** No rename, licence change or release. The content has grown: the tips section is now 'Tips and Tricks (84)', up from the 69 tips in the note, with new groups for Context, Session Management and Usage/Limits, and many new tips from Boris Cherny and Thariq (Anthropic) dated Mar-Apr 2026.

"From vibe coding to agentic engineering — practice makes claude perfect." The shanraisshan repository is a structural overview of the [[Claude Code]] ecosystem — not another link list, but a workflow comparison, thematically grouped tips, and orchestration pattern demos.

## Links
### 🗒️ Description
The repo organizes Claude Code knowledge into sections:
- **Concepts** — table of all Claude Code primitives (subagents, commands, skills, hooks, MCP, plugins, settings, memory, checkpointing)
- **Hot features** — latest: Ultraplan, Agent SDK, Auto Mode, Channels, Slack, Chrome, Scheduled Tasks, Voice Dictation, Agent Teams, Remote Control, Git Worktrees
- **Development Workflows** — comparison of 10 top frameworks with stars and agents/commands/skills counts
- **69 Tips** — grouped: Prompting, Planning, CLAUDE.md, Agents, Commands, Skills, Hooks, Workflows, Git/PR, Debugging, Utilities, Daily
- **Videos/Podcasts** — Boris Cherny interviews (Y Combinator, Lenny's, Pragmatic Engineer)

### Download or use
[GitHub: shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice)

## 🗒️ Reasoning for

Two main use cases:
1. **Workflow comparison** — table comparing Everything Claude Code, [[Superpowers]], Spec Kit, gstack, Get Shit Done, BMAD-METHOD, [[OpenSpec]], oh-my-claudecode, Compound Engineering, HumanLayer. Each with agents/commands/skills counts. Lets you pick a framework matching the project.
2. **Tips reference** — 69 tips aren't random advice but grouped best practices with source links. Key ones:

### 🔑 Top Tips

**Planning:** always plan mode, minimal spec → AskUserQuestion interview → execute in new session

**CLAUDE.md:** <200 lines per file, `<important if="...">` tags so Claude doesn't ignore them, multiple CLAUDE.md for monorepos, settings.json for harness-enforced behavior (don't write "NEVER add Co-Authored-By" in CLAUDE.md when `attribution.commit: ""` is deterministic)

**Skills:** context: fork for isolation, skills are folders not files (references/, scripts/, examples/), description field is a trigger not a summary, embed `!command` for dynamic shell output

**Hooks:** on-demand hooks in skills (/careful blocks destructive, /freeze blocks edits), PostToolUse auto-format, Stop hook for verification

**Workflows:** manual /compact at max 50%, vanilla CC is better than workflows for smaller tasks, Opus for plan + Sonnet for code

**Git:** PRs p50 of 118 lines, always squash merge, commit at least once per hour

### Orchestration Pattern
**Command → Agent → Skill** — commands orchestrate, agents execute in isolated context, skills provide domain knowledge. Demonstrated with `/weather-orchestrator`.

## Alternatives considered
- [[Awesome Claude Code]] (hesreallyhim) — complementary: Awesome CC is tool/resource discovery, Best Practice is tips & workflow comparison
- Anthropic's official docs — Best Practice aggregates community wisdom beyond the official docs
- Boris Cherny's individual blog posts — Best Practice collects all the tips in one place with source links

## 📖 Resources
- [GitHub: shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice)
- [[Claude Code]] — primary tool
- [[Awesome Claude Code]] — complementary resource list
- [[Agentic Coding]] — paradigm context
- [[Context Engineering]] — CLAUDE.md & MCP best practices
- [[Harness Engineering]] — configuring coding agent harness
- [[Agent Skills]] — skill system reference

---
Template: [[templates/tool]]
