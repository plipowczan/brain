---
title: "Context Engineering"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "context-engineering", "llm"]
type: knowledge-note
agent-created: true
summary: "Designing optimal context for LLM agents — CLAUDE.md, MCP, skills, sub-agents"
---

# Context Engineering

## 🗒️ Description
The practice of designing and optimizing the context that gets fed to LLM agents. The quality of agent output is directly proportional to the quality of context you provide. This includes project instructions (CLAUDE.md), tool configurations (MCP servers), reusable skills, and architectural decisions about what information goes where.

## 🧩 Key components:
- **CLAUDE.md / project instructions** — persistent context about the project: conventions, architecture, workflows, safety rules
- **MCP servers** — tools that give agents access to external systems (databases, APIs, documentation)
- **Skills** — dynamically loaded instruction packages ([[Agent Skills]]) for specific tasks
- **Sub-agents** — delegating tasks to focused agents with isolated context windows
- **Hooks** — automated responses to agent events (pre-commit checks, post-edit validation)

## 🔗 Related concepts
- **Context window management** — knowing what fits and what to prioritize
- **Context rot** — the phenomenon where agent performance degrades as conversation context grows. Solution: fresh sub-agents for complex tasks.
- **[[Harness Engineering]]** — the practical implementation of context engineering

## 📖 Further reading
[[Agentic Coding]]
[[LLM Knowledge Bases]]
[[Claude Code]]

---
Template: [[templates/knowledge_note_info]]
