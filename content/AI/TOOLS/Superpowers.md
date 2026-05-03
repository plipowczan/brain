---
title: "Superpowers"
date: 2026-05-03
enableToc: true
openToc: true
tags: ["tool", "ai", "claude-code", "skills", "methodology", "tdd", "open-source"]
type: tool
source: "_raw/inbox/obrasuperpowers An agentic skills framework & software development methodology that works.md"
agent-created: true
summary: "Jesse Vincent (obra) opinionated software development methodology dla coding agentów — composable skille (brainstorm→worktree→plan→subagent-driven→TDD→review→finish), auto-trigger, multi-host (CC/Cursor/Codex/OpenCode/Copilot/Gemini)"
---

# Superpowers

`obra/superpowers` — **kompletny software development workflow dla coding agentów**, zbudowany na zestawie composable "skilli" + initial instructions, które wymuszają, żeby agent ich używał. Autor: Jesse Vincent (`obra`). Filozofia: agent **nie** rzuca się od razu na kod — najpierw teases out spec z konwersacji, pokazuje go w small chunks, dopiero po sign-off pisze plan dla "enthusiastic junior with poor taste, no judgement, no project context, and aversion to testing", potem subagent-driven-development z true red/green TDD, YAGNI i DRY.

## 🔗 Links

### Description
- Repo: https://github.com/obra/superpowers
- Marketplace: https://claude.com/plugins/superpowers
- Sponsor: https://github.com/sponsors/obra
- License: open source

### Download or use

```bash
# Claude Code (official marketplace)
/plugin install superpowers@claude-plugins-official

# Cursor
/add-plugin superpowers

# Codex / OpenCode — fetch instructions
# z raw.githubusercontent.com/obra/superpowers/.../INSTALL.md

# GitHub Copilot CLI
copilot plugin marketplace add obra/superpowers-marketplace
copilot plugin install superpowers@superpowers-marketplace

# Gemini CLI
gemini extensions install https://github.com/obra/superpowers
```

## 🗒️ Description

### 🧩 The Basic Workflow (7 mandatory skilli)

1. **brainstorming** — odpala się przed pisaniem kodu; refines rough ideas through questions, alternatywy, design w sekcjach do walidacji, zapis design doc.
2. **using-git-worktrees** — po approve design; izolowany workspace na nowym branchu, project setup, clean test baseline.
3. **writing-plans** — bite-sized taski (2-5 min każdy), exact paths, complete code, verification steps.
4. **subagent-driven-development** lub **executing-plans** — fresh subagent per task; two-stage review (spec compliance, potem code quality), albo batch z human checkpoints.
5. **test-driven-development** — RED-GREEN-REFACTOR; failing test → watch fail → minimal code → watch pass → commit. **Kasuje kod napisany przed testami.**
6. **requesting-code-review** — między taskami, review przeciw planowi, severity-graded, critical = block.
7. **finishing-a-development-branch** — verify tests, opcje (merge/PR/keep/discard), cleanup worktree.

> **Mandatory workflows, not suggestions** — agent automatycznie checkuje skille przed każdym taskiem.

### 🧩 Skills Library (poza Basic Workflow)

- **Testing**: testing anti-patterns reference (w TDD).
- **Debugging**: `systematic-debugging` (4-phase root cause: root-cause-tracing, defense-in-depth, condition-based-waiting), `verification-before-completion`.
- **Collaboration**: `dispatching-parallel-agents`, `receiving-code-review`.

### 🧩 Pozycja w ekosystemie

To jest framework metodologiczny — nie zestaw role'i jak [[gstack]], nie YAML engine jak [[Archon]], nie minimalna 1-page CLAUDE.md jak [[Karpathy Skills]]. Filozofia: **rygor procesu > liczba skilli**. Najsilniejsza w połączeniu z TDD i worktree isolation.

## ✍️ Reasoning for

Dla mnie wartość koncentruje się w trzech rzeczach:
1. **Wymuszone TDD** — w setupach Claude Code w [[Qamera AI]] często odpuszczam testy "na później" i potem boli; Superpowers nie pozwala.
2. **Subagent-driven-development z fresh context** — eliminuje "context rot" po 30+ tool callach (ten sam pattern co loop nodes w [[Archon]]).
3. **Multi-host portability** — CC + Cursor + Codex + OpenCode + Copilot + Gemini z jednego źródła; spina się z moim workflowem przeskakiwania między [[Claude Code]] a [[Cursor]].

Konflikt z [[gstack]]: oba próbują strukturyzować to samo (think→plan→build→review→test→ship). Pewnie wybiorę jedno per repo, zamiast je nakładać.

Ostrzeżenie: rygor jest dosłowny — "kasuje kod napisany przed testami". Trzeba to akceptować z góry, inaczej irytacja gwarantowana.

## Alternatives considered

- **[[gstack]]** — role-based virtual team (CEO/Designer/QA), bardziej startup-shaped; Superpowers jest engineering-rigor-shaped
- **[[Karpathy Skills]]** — minimalna metodologia w 1 CLAUDE.md; Superpowers to kompletny stack
- **[[Archon]]** — YAML workflow engine + worktrees; Superpowers zostaje w native skills + standardowym git
- **[[Agent Skills]]** stand-alone — same skille, brak wymuszonej methodology

## 🔗 Resources

- Author: Jesse Vincent (obra) — https://github.com/obra
- [[Claude Code]] — primary host
- [[Cursor]] — drugi host
- [[Agent Skills]] — SKILL.md standard
- [[Karpathy Skills]] / [[gstack]] / [[Archon]] — sąsiednie podejścia

---
Template: [[templates/tool]]
