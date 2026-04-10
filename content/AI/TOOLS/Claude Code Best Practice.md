---
title: "Claude Code Best Practice"
date: 2026-04-10
enableToc: true
openToc: true
tags: ["tool", "ai", "claude-code", "coding-agents", "resources"]
type: tool
source: "_raw/inbox/shanraisshanclaude-code-best-practice practice made claude perfect.md"
agent-created: true
summary: "69 tips, development workflows comparison, orchestration patterns — from vibe coding to agentic engineering"
---

# Claude Code Best Practice

"From vibe coding to agentic engineering — practice makes claude perfect." Repozytorium shanraisshan to strukturalny przegląd ekosystemu [[Claude Code]] — nie kolejna lista linków, ale porównanie workflows, tips pogrupowane tematycznie i demonstracje orchestration patterns.

## Links
### 🗒️ Description
Repo organizuje wiedzę o Claude Code w sekcje:
- **Concepts** — tabela wszystkich Claude Code primitives (subagents, commands, skills, hooks, MCP, plugins, settings, memory, checkpointing)
- **Hot features** — najnowsze: Ultraplan, Agent SDK, Auto Mode, Channels, Slack, Chrome, Scheduled Tasks, Voice Dictation, Agent Teams, Remote Control, Git Worktrees
- **Development Workflows** — porównanie 10 top frameworks z gwiazdkami i liczbą agents/commands/skills
- **69 Tips** — pogrupowane: Prompting, Planning, CLAUDE.md, Agents, Commands, Skills, Hooks, Workflows, Git/PR, Debugging, Utilities, Daily
- **Videos/Podcasts** — Boris Cherny interviews (Y Combinator, Lenny's, Pragmatic Engineer)

### Download or use
[GitHub: shanraisshan/claude-code-best-practice](https://github.com/shanraisshan/claude-code-best-practice)

## 🗒️ Reasoning for

Dwa główne use cases:
1. **Workflow comparison** — tabela porównująca Everything Claude Code, [[Superpowers]], Spec Kit, gstack, Get Shit Done, BMAD-METHOD, [[OpenSpec]], oh-my-claudecode, Compound Engineering, HumanLayer. Każdy z liczbą agents, commands, skills. Pozwala wybrać framework pasujący do projektu.
2. **Tips reference** — 69 tips to nie random advice, ale pogrupowane best practices z linkami do źródeł. Kluczowe:

### 🔑 Top Tips

**Planning:** zawsze plan mode, minimal spec → AskUserQuestion interview → execute in new session

**CLAUDE.md:** <200 lines per file, `<important if="...">` tags żeby Claude nie ignorował, multiple CLAUDE.md dla monorepos, settings.json dla harness-enforced behavior (nie wpisuj "NEVER add Co-Authored-By" w CLAUDE.md gdy `attribution.commit: ""` jest deterministic)

**Skills:** context: fork dla isolation, skills are folders not files (references/, scripts/, examples/), description field is a trigger not a summary, embed `!command` for dynamic shell output

**Hooks:** on-demand hooks in skills (/careful blocks destructive, /freeze blocks edits), PostToolUse auto-format, Stop hook for verification

**Workflows:** manual /compact at max 50%, vanilla CC is better than workflows for smaller tasks, Opus for plan + Sonnet for code

**Git:** PRs p50 of 118 lines, always squash merge, commit at least once per hour

### Orchestration Pattern
**Command → Agent → Skill** — commands orchestrate, agents execute w isolated context, skills provide domain knowledge. Demonstracja z `/weather-orchestrator`.

## Alternatives considered
- [[Awesome Claude Code]] (hesreallyhim) — complementary: Awesome CC to tool/resource discovery, Best Practice to tips & workflow comparison
- Oficjalna dokumentacja Anthropic — Best Practice aggreguje community wisdom beyond official docs
- Indywidualne blog posts Borisa Cherny — Best Practice zbiera wszystkie tipy w jedno miejsce z linkami do źródeł

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
