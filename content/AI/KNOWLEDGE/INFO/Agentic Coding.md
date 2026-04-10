---
title: "Agentic Coding"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "coding-agents", "paradigm"]
type: knowledge-note
agent-created: true
summary: "Paradigm shift: designing agent environments instead of writing code manually"
---

# Agentic Coding

## 🗒️ Description
A development paradigm where the developer's primary role shifts from writing code to designing environments in which AI coding agents operate effectively. Instead of typing code, you create specifications, context files, review loops, and guardrails — then agents do the implementation.

This is not "AI-assisted coding" (Copilot-style completions). It's a fundamentally different workflow where agents are first-class team members that handle the majority of code changes.

## 🧩 Key principles:
- **CTO as architect of agent work** — you design the environment (specs, context, guardrails, review loops), agents write the code
- **Specifications over instructions** — detailed specs produce better agent output than vague requests
- **[[Context Engineering]]** — the quality of what you feed the agent determines the quality of output
- **Review loops** — every agent output gets human review. Trust but verify.
- **Git as source of truth** — all agent work goes through Git. Full transparency and auditability.
- **Skill modularity** — reusable instruction packages ([[Agent Skills]]) that can be shared across projects

## 🔗 How I practice it
- 99% of small code fixes in [[Qamera AI]] are done by agents
- I use [[Claude Code]] as primary environment
- I built a multi-agent architecture for two companies ([[Agentic Systems]])
- The shift: from "developer who writes code" to "architect who designs systems for agents to write code"

## 📖 Further reading
[[Harness Engineering]]
[[Context Engineering]]
[[Claude Code]]

---
Template: [[templates/knowledge_note_info]]
