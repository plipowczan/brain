---
title: "LifeOS"
date: 2026-05-19
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "life-os", "personal", "claude-code", "skills", "memory", "open-source"]
type: tool
source: "_raw/inbox/danielmiesslerPersonal_AI_Infrastructure Agentic AI Infrastructure for magnifying HUMAN capabilities.md"
agent-created: true
aliases: ["Personal AI Infrastructure", "PAI", "AI/TOOLS/Personal AI Infrastructure"]
summary: "Daniel Miessler's LifeOS (renamed from PAI in v6.0.0, 2026-07) — MIT Life Operating System on Claude Code: TELOS goals, the Algorithm (current→ideal state) with ISA + Assay evals, Pulse dashboard, DA assistant, 97 skills, plain-text memory; v8.761.0"
status-checked: 2026-11-13
project-status: active
agent-reviewed: 2026-11-13
---

# LifeOS

> [!success] Status check 2026-11-13 — active
> **Verdict:** The latest commit on main is f6ab5e02, dated 2026-11-05 (README: 'your security is your responsibility').
> **Last release:** v8.761.0 'The One Loop', 2026-10-27 · **last commit:** 2026-11-05 · **licence:** MIT (Copyright 2025-2026 Daniel Miessler).
> **Repo:** https://github.com/danielmiessler/LifeOS — **moved/renamed:** Yes, it was rebranded. Personal AI Infrastructure (PAI) became LifeOS with v6.0.0 on 2026-07-02, which the notes describe as the 'first release under the LifeOS name … same system, renamed'.
> **Changed since this note:** Rebrand PAI -> LifeOS (repo, site, installer, code), and three major versions after the v5.0.0 described in the note. v6.0.0 (2026-07-02) ships the whole system as one self-contained 'LifeOS' skill installed by prompt ('Read https://ourlifeos.ai/install and install LifeOS for me'). v7.0.0 'Bitter Pill' (2026-07-12)…

## 🚀 Description

**Now called LifeOS.** With v6.0.0 (2026-07-02) Personal AI Infrastructure (PAI) was renamed **LifeOS**: "same system, renamed", same owner, not a fork. The repo is now [danielmiessler/LifeOS](https://github.com/danielmiessler/LifeOS) (the old `Personal_AI_Infrastructure` URL redirects), the site moved from ourpai.ai to [ourlifeos.ai](https://ourlifeos.ai), and v6.0.5 carried the rename into the code (the `pai` launch alias became `lifeos`). This note was titled Personal AI Infrastructure until 2026-11-13. Latest release as of 2026-11-13: **v8.761.0 "The One Loop"** (2026-10-27). Licence: MIT.

LifeOS (ex-PAI) — agentic AI infrastructure for magnifying human capabilities. As of v5.0.0 it called itself a **Life Operating System**, not "AI scaffolding". The README now pitches it as a *general-purpose AI harness for life and work* built on one idea: moving from your Current State to your Ideal State.

Three layers:

- **LifeOS** (was "PAI") — the OS itself: skills, memory, the Algorithm, your TELOS, identity files
- **Pulse** — the Life Dashboard at `localhost:31337`, redesigned in v8 (opens on a "Today" view), plus a Pulse Desktop Mac app
- **The DA** — your Digital Assistant (voice + personality); since v8 you can also text it over iMessage

The premise comes from Miessler's 2016 [The Real Internet of Things](https://danielmiessler.com/blog/the-real-internet-of-things) — endpoint is one DA per person, your single interface to all AI.

## 🎨 Principles

- **Humans first, tech second** — tech serves the human, not the other way around
- **A Life OS, not an agent harness** — captures goals, work, relationships, health, finances. That was the v5 wording. The README now calls LifeOS "a General Purpose AI Harness", meaning the layer on top of your coding harness ("Your harness is the engine."), but the scope is the same.
- **Ideal State drives everything** — ISA (Ideal State Artifact) decomposes "done" into verifiable ISCs (criteria) for any creative task
- **One DA per person** — single interface to AI
- **Text over opaque storage** — Markdown everywhere; if `cat` can't read it, LifeOS doesn't want it
- **Filesystem as context, no RAG** — ripgrep + rich cross-references replaced RAG since June 2025
- **Context scaffolding > model** — feed the smartest model the right context, not more instructions
- **Bitter-pilled engineering** — as models get stronger, the system gets smaller (v7.0.0 was literally the "Bitter Pill" release)
- **Memory that compounds** — in v5, three tiers (WORK, KNOWLEDGE, LEARNING) + typed graph; since v7.28.3 it's named **Cortex**: hot-layer memory, a typed Knowledge Archive (People, Companies, Ideas, Research), learnings and work history
- **Self-improvement loop** — explicit ratings, sentiment, verification outcomes feed back; since v8 that's formalised as Errata (complaint ledger) → HillClimb (experiments kept only if they beat the noise floor)

## 🧩 v5.0.0 highlights (what I first wrote about, May 2026)

- Unified **Pulse** daemon (Life Dashboard `localhost:31337`)
- **DA** identity layer (voice + persona)
- **Algorithm v6.3.0** — Current State → Ideal State, seven phases, classifier-driven mode + tier, modeled on the scientific method (Deutsch's hard-to-vary explanations standard)
- **ISA** primitive — universal "ideal state" articulation
- **45 skills, 171 workflows, 37 hooks**
- **Thinking skills library** — first principles, council debates, red team, root cause, systems thinking, iterative depth, aperture oscillation
- Structural privacy via containment zones

## 🧩 Since then: v6 → v8.761.0

- **v6.0.0 (2026-07-02), "One Skill, One Install"** — the rename to LifeOS; the whole system ships as one self-contained `LifeOS` skill, installed by handing a prompt to your AI.
- **v7.0.0 (2026-07-12), "Bitter Pill"** — modes and tiers removed (one adaptive loop that scales effort to the work), always-on context cut from ~88 KB to ~28 KB, Algorithm v8.3.0, ~16 hooks folded into per-event dispatchers.
- **v7.1.1** — a Doctor tool that reports the real state of every optional capability, and a capability-aware installer (now/later/never per component).
- **v7.28.3** — named subsystems (Cortex memory and others) and an optional **Hermes sidecar**, a second front door to the same identity and skills from a terminal agent.
- **v8.761.0 (2026-10-27), "The One Loop"** — one loop at every level (output → task ISA → project → TELOS goal), and every ISA criterion carries a check that **Assay** compiles into an eval. Errata and HillClimb drive self-improvement. Workflows (YAML step graphs) handle scheduled work, with time triggers fired from a small **Cloudflare Worker** so jobs run while the laptop is closed. Vigil handles alerts, STATVS is the permanent record, and Pulse plus the statusline were rebuilt. Eighteen per-call guard hooks were replaced by Claude Code permission rules, git hooks and a macOS Seatbelt sandbox, and `.env` is now age-encrypted in git. **97 public skills** (up from 45), with 51 Fabric patterns rewritten as tested intents. The Algorithm is now at 8.45.

## Reasoning for

If you want a serious framework for organizing your own Telos around AI — not just "ask Claude to help me journal". The Algorithm's current→ideal state loop is interesting independently of the rest. Heavy bias toward [[Claude Code]] as the host: the README now calls LifeOS harness-agnostic (Cursor, Codex and Hermes are named as install targets), but Claude Code is the platform it's built and tested on. Worth studying for personal-OS design even if you don't run it.

Aligns with the [[Brain]] vault thesis — text-first, filesystem as context, no RAG. Same instinct.

Caveats that matter more now than in May:
- **macOS-centric.** launchd dispatcher, Pulse Desktop Mac app, iMessage DA line, Seatbelt sandbox. The terminal one-liner targets macOS/Linux, and I found no documented native Windows path as of 2026-11-13.
- **Fast churn.** Three major versions in four months, with hooks reworked repeatedly. Expect upgrades to change behaviour.
- **Security is explicitly on you.** The README opens with "Your Security Is Your Responsibility": it's one person's harness published as-is, and the installer won't proceed until you accept that.
- **Big footprint.** 97 skills, background jobs and cloud scheduling, and background model calls run on your Claude/Codex subscription.

## Install

The install is now a prompt you hand to your AI coding harness:

```text
Read https://ourlifeos.ai/install and install LifeOS for me.
```

Terminal shortcut (Claude Code on macOS/Linux):

```bash
curl -fsSL https://ourlifeos.ai/install.sh | bash
```

The old `ourpai.ai/install.sh` 301-redirects here. Needs a capable harness (Claude Code is the tested path) and `bun`. The installer asks you to accept security responsibility first, then drops the LifeOS skill into your existing harness without clobbering it. It hands off to `/LifeOS setup` (a fresh install) or `/LifeOS update` (an upgrade), which does conflict detection, the TELOS interview and hook wiring with your permission. 7.x installs upgrade in place with a backup, and `lifeos doctor` checks the result.

## Alternatives considered

- [[Paperclip]] — "company of agents" with goals, budgets, governance; LifeOS is single-human focused
- [[Hermes Agent]] — execution agent; LifeOS is the layer above. Since v7.28.3 it's also an optional integration: the Hermes sidecar talks to the same LifeOS identity and skills.
- Roll-your-own Obsidian + Claude Code — exactly what this vault is doing, less opinionated than LifeOS

## 🔗 Links

- Repo: https://github.com/danielmiessler/LifeOS (formerly danielmiessler/Personal_AI_Infrastructure, which redirects)
- Site and docs: https://ourlifeos.ai · https://docs.ourlifeos.ai
- Walkthrough: https://youtu.be/Le0DLrn7ta0
- Install page: https://ourlifeos.ai/install · script: https://ourlifeos.ai/install.sh
- v8.761.0 release notes: https://github.com/danielmiessler/LifeOS/blob/main/Releases/v8.761.0/README.md
- v5.0.0 release notes (the version this note started from): https://github.com/danielmiessler/LifeOS/blob/v5.0.0/Releases/v5.0.0/README.md

## 🔗 Related notes

- [[Claude Code]] — primary host
- [[Paperclip]] — multi-agent governance contrast
- [[Hermes Agent]] — execution layer
- [[Agentic Systems]] — broader pattern
- [[Brain]] — the local vault, similar text-first thesis
- [[Second Brain Design]] — knowledge management parallel
- [[Awesome Claude Code]] — broader ecosystem

---
Template: [[templates/tool]]
