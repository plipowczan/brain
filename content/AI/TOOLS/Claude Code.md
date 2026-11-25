---
title: "Claude Code"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "claude", "coding-agents"]
type: tool
agent-reviewed: 2026-04-10
agent-created: true
summary: "Anthropic's CLI for AI-assisted development — primary dev environment"
sources: ["_raw/processed/2026-11-22_yt-OMfU5iq8Eik_anthropic-just-dropped-7-massive-claude-features-master-them.md", "_raw/processed/2026-11-22_Building always-on agents.md", "_raw/processed/2026-11-22_yt-EFGvVCpW9zc_fable-5-2-is-insane-only-if-you-use-it-anthropic-s-way.md", "_raw/processed/2026-11-25_2026-11-25-research-version-control-for-ai-agents.md"]
status-checked: 2026-11-13
project-status: active
repo: "https://github.com/anthropics/claude-code"
---
# Claude Code

> [!success] Status check 2026-11-13 — active
> **Verdict:** Releases ship several times a week: v2.1.318 (2026-11-04) through v2.1.323 (2026-11-12), with the latest commit on main on 2026-11-13.
> **Last release:** v2.1.323 (2026-11-12, GitHub release and npm 'latest'/'next' dist-tag)… · **last commit:** 2026-11-13 · **licence:** Proprietary. LICENSE.md: '(c) Anthropic PBC. All rights reserved.
> **Repo:** https://github.com/anthropics/claude-code
> **Changed since this note:** No major version bump (still 2.1.x, v2.1.98 -> v2.1.323), but the product grew a lot: (1) npm install deprecated in favour of the native installer (curl/irm), Homebrew cask and WinGet, so the note's 'npm install -g' line is stale; (2) docs moved to code.claude.com…

Anthropic's official CLI tool for AI-assisted software development. My primary development environment since 2025.

## Links
### Description
An interactive terminal agent that can read, write, and execute code. Works with the full Claude model family (Opus, Sonnet, Haiku).
### Download or use
Available via npm: `npm install -g @anthropic-ai/claude-code`

## Reasoning for
This is where I spend most of my development time. Instead of writing code manually, I design the environment (CLAUDE.md, skills, MCP servers, hooks) and let Claude Code do the implementation. Key capabilities:
- **Skills system** — reusable instruction packages loaded on demand ([[Agent Skills]])
- **MCP servers** — connect to external tools and APIs
- **Hooks** — automated responses to agent events
- **Sub-agents** — parallel task execution with isolated context
- **[[Harness Engineering]]** — the practice of configuring all the above
- **Advisor** (`/advisor`, per [[7 New Claude Features (RoboNuggets)]]) — the everyday model (Sonnet or Opus) calls in a stronger model only at big decisions, such as before committing to a plan or when stuck on the same error. `/advisor fable` makes Fable 5.2 the advisor for one chat; a settings change turns it on for every chat. Not yet tried by me
- **Custom themes** (desktop app, Code tab) — colours, light/dark mode and animated backgrounds, built on [[Claude Code Mods (RoboNuggets)|mods]]; Anthropic ships a theme examples plugin
- **Auto memory** — memory kept as a directory of files across sessions (on my machine: a `MEMORY.md` index plus one file per fact, opened when relevant). Anthropic names it as the model for an always-on agent's memory ([[Building Always-On Agents (Anthropic)]])
- **Auto mode** — classifiers review higher-risk actions and block the dangerous ones, so Claude can work without constant confirmation; the most important decisions still go to me
- **Deferred tool calls** — a hook can defer a tool call until the user answers; the article uses the same pattern to pause an unattended agent mid-call and resume it when the answer arrives
- **Effort levels** (`/effort`: `low`, `medium`, `high`, `xhigh`, `max`) — per [[Fable 5.2 — Nine Rules for Using It (AI LABS)]] and Anthropic's Fable 5.2 guide: `high` for long unattended runs, a small gain for many more tokens above it, `max` only when time and tokens don't matter. In the API, Opus 5.5 defaults to `medium` and Fable 5.2 to `high`
- **Prompt audit** (`/claude-api prompt-audit`) — scans `CLAUDE.md`, skills and agent files for instructions written for older models, such as "NEVER" / "IMPORTANT" lines that Fable reads as rules with no exceptions
- **Auto mode scope** — per Lydia Hallie (Claude Code team, retold by AI LABS), auto mode trusts only the working folder and repo by default, so a deploy to a staging site elsewhere gets blocked until the auto mode settings are changed. Not checked by me
- **Worktrees** — `claude --worktree`, or `isolation: worktree` for a sub-agent, gives each session its own checkout under `.claude/worktrees` on a `worktree-<name>` branch; `.worktreeinclude` copies chosen ignored files in, and `WorktreeCreate` / `WorktreeRemove` hooks can replace the Git logic. Neither Git nor Claude Code merges the results, and ports, databases and caches stay shared

## How I use it
- 99% of small code fixes in [[Qamera AI]] are done by Claude Code agents
- I review agent output, not write code myself
- Combined with [[Context Engineering]] for optimal results

### ⚠️ Worktree problems reported by users
From [[Version Control for Parallel AI Coding Agents]] (issues read 2026-11-24, not reproduced by me):
- **Parallel creation fails on `.git/config.lock`** (issues 34645 and 47266, both closed as not planned). Create worktrees one at a time, under a lock
- **Locks at commit:** with 13 sub-agents 8 failed to commit, and the cleanup then removed their uncommitted work (issue 55724). Commit and push before any cleanup
- **Cleanup that deletes too much:** Windows cleanup followed NTFS junctions and deleted about 800 GB (75275, fixed in 2.1.205); forced removal of an idle worktree deleted ignored files (98186, open); parallel cleanup destroyed a `.git` (48927, closed as not planned)
- **Directories left on disk** on Windows (104311, open)
- **Git LFS:** files stay as pointers in new worktrees since 2.1.247
- **Cost, own test on Windows 11** (10,000 small files, 2026-11-24): `git worktree add` took 8.8–10.5 s, and 2.4–2.6 s with `checkout.workers=8`

## Alternatives considered
- [[Cursor]] — IDE-based, good for visual work, but CLI gives more control
- GitHub Copilot — inline completions, but less autonomous
- Codex CLI — OpenAI's alternative

## 🚀 5 technik efektywnej pracy

### 1. PRD-first development
Zacznij od Product Requirement Document (markdown z pełnym zakresem projektu). PRD to "gwiazda polarna" — single source of truth dla agenta. Każda sesja zaczyna się od: "Based on PRD, what should we build next?" Agent czyta PRD, rozumie kontekst, sugeruje kolejny logiczny krok.

### 2. Systematic prompting (Context → Spec → Implement → Review)
- **Prime** — załaduj kontekst codebase na starcie sesji (`/prime` command)
- **Plan** — stwórz structured plan jako self-contained markdown document
- **Execute** — implementuj z planem jako jedynym kontekstem (po context reset!)
- **Validate** — automatyczne testy i weryfikacja

### 3. Context window management — less is better
- Modularyzacja reguł: CLAUDE.md max ~200 linijek (global), reszta w `reference/` folder ładowany on-demand
- **Progressive disclosure** — nie ładuj wszystkiego na raz. Agent sam sięga po reference docs gdy potrzebuje
- Context reset między planowaniem a wykonaniem — counterintuitive, ale daje agentowi max przestrzeń do reasoning
- Przytłoczenie LLM nieistotnym kontekstem = gorsza jakość outputu

### 4. Skill composition — łączenie wielu skills
Komendy jako reusable markdown workflows (`/prime`, `/plan-feature`, `/execute`, `/validate`, `/commit`). Composable — łącz je w sekwencje. Każda komenda pamięta za Ciebie kolejne kroki procesu. Jeśli robisz coś >2 razy — zamień w komendę.

### 5. Review loops before commits
Ewolucja systemu: każdy bug to lekcja. Nie naprawiaj buga — napraw system, który na niego pozwolił. Po każdej feature: refleksja → aktualizacja rules/commands → ta klasa bugów wyeliminowana na zawsze. Compound effect: po 3 miesiącach agent robi mniej błędów niż junior developer.

### PIV Methodology (Prime-Implement-Validate)
Framework [claude-piv-skeleton](https://github.com/plipowczan/claude-piv-skeleton) implementuje wszystkie techniki w gotowym do użycia repo — pre-built commands, modular rules, technology templates.

## Resources
[Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code/overview)

- [[Claude Code Mods (RoboNuggets)]] — mods: add-ons that run inside Claude Code and change its UI and behaviour
- [[7 New Claude Features (RoboNuggets)]] — November 2026 releases: `/advisor`, custom themes, and the new Claude apps (Meetings, Whiteboards, Sheets, Data)
- [[oh-my-pi]] — open-source terminal coding agent with a different tool surface (hashline edits, LSP and debugger wired in)
- [[Meme Generation for Coding Agents]] — research on a skill or MCP that lets Claude Code make memes: an own skill on Satori, Stop-hook reactions, mods as phase 2

- [[External Triggers for Claude Code]] — research on firing Claude Code from webhooks when the PC may be off
- [[Building Always-On Agents (Anthropic)]] — Anthropic's architecture for proactive agents built on auto memory, auto mode and deferred tool calls
- [[OpenRig]] — runs Claude Code and Codex as one persistent YAML-defined team
- [[billion-context]] — proxy that lets the model compress and restore its own context
- [[Version Control for Parallel AI Coding Agents]] — how to land the work of 5–30 (and hundreds of) parallel agents on one repository
- [[Fable 5.2 — Nine Rules for Using It (AI LABS)]] — when to use Fable over Opus, lead-and-workers and reviewer setups, effort, and preparing `CLAUDE.md` for unattended runs
---
Template: [[templates/tool]]
