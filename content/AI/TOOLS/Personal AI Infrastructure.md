---
title: "Personal AI Infrastructure"
date: 2026-05-19
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "life-os", "personal", "claude-code", "skills", "memory", "open-source"]
type: tool
source: "_raw/inbox/danielmiesslerPersonal_AI_Infrastructure Agentic AI Infrastructure for magnifying HUMAN capabilities.md"
agent-created: true
summary: "Daniel Miessler's PAI v5 — Life Operating System: Pulse dashboard, DA digital assistant, Algorithm v6.3 (current→ideal state), 45 skills, 171 workflows, plain-text memory"
---

# Personal AI Infrastructure

## 🚀 Description

[danielmiessler/Personal_AI_Infrastructure](https://github.com/danielmiessler/Personal_AI_Infrastructure) (PAI) — agentic AI infrastructure for magnifying human capabilities. As of v5.0.0 it's a **Life Operating System**, not "AI scaffolding".

Three layers:

- **PAI** — the OS itself: skills, memory, the Algorithm, your Telos, identity files
- **Pulse** — the Life Dashboard at `localhost:31337`
- **The DA** — your Digital Assistant (voice + personality)

The premise comes from Miessler's 2016 [The Real Internet of Things](https://danielmiessler.com/blog/the-real-internet-of-things) — endpoint is one DA per person, your single interface to all AI.

## 🎨 Principles

- **Humans first, tech second** — tech serves the human, not the other way around
- **A Life OS, not an agent harness** — captures goals, work, relationships, health, finances
- **Ideal State drives everything** — ISA (Ideal State Artifact) decomposes "done" into verifiable ISCs (criteria) for any creative task
- **One DA per person** — single interface to AI
- **Text over opaque storage** — Markdown everywhere; if `cat` can't read it, PAI doesn't want it
- **Filesystem as context, no RAG** — ripgrep + rich cross-references replaced RAG since June 2025
- **Context scaffolding > model** — feed the smartest model the right context, not more instructions
- **Bitter-pilled engineering** — as models get stronger, the system gets smaller
- **Memory that compounds** — three tiers (WORK, KNOWLEDGE, LEARNING) + typed graph
- **Self-improvement loop** — explicit ratings, sentiment, verification outcomes feed back

## 🧩 v5.0.0 highlights

- Unified **Pulse** daemon (Life Dashboard `localhost:31337`)
- **DA** identity layer (voice + persona)
- **Algorithm v6.3.0** — Current State → Ideal State, seven phases, classifier-driven mode + tier, modeled on the scientific method (Deutsch's hard-to-vary explanations standard)
- **ISA** primitive — universal "ideal state" articulation
- **45 skills, 171 workflows, 37 hooks**
- **Thinking skills library** — first principles, council debates, red team, root cause, systems thinking, iterative depth, aperture oscillation
- Structural privacy via containment zones

## Reasoning for

If you want a serious framework for organizing your own Telos around AI — not just "ask Claude to help me journal". The Algorithm's current→ideal state loop is interesting independently of the rest. Heavy bias toward [[Claude Code]] as the host. Worth studying for personal-OS design even if you don't run it.

Aligns with the [[Brain]] vault thesis — text-first, filesystem as context, no RAG. Same instinct.

## Install

```bash
curl -sSL https://ourpai.ai/install.sh | bash
```

Verifies Bun, Git, Claude Code; runs DA identity wizard; registers Pulse as launchd service; runs `/interview` for Telos capture.

## Alternatives considered

- [[Paperclip]] — "company of agents" with goals, budgets, governance; PAI is single-human focused
- [[Hermes Agent]] — execution agent; PAI is the layer above
- Roll-your-own Obsidian + Claude Code — exactly what this vault is doing, less opinionated than PAI

## 🔗 Links

- Repo: https://github.com/danielmiessler/Personal_AI_Infrastructure
- Walkthrough: https://youtu.be/Le0DLrn7ta0
- Install script: https://ourpai.ai/install.sh
- v5.0.0 release notes: https://github.com/danielmiessler/Personal_AI_Infrastructure/blob/main/Releases/v5.0.0/README.md

## 🔗 Related notes

- [[Claude Code]] — primary host
- [[Paperclip]] — multi-agent governance contrast
- [[Hermes Agent]] — execution layer
- [[Agentic Systems]] — broader pattern
- [[Brain]] — the local vault, similar text-first thesis
- [[Second Brain]] — knowledge management parallel
- [[Awesome Claude Code]] — broader ecosystem

---
Template: [[templates/tool]]
