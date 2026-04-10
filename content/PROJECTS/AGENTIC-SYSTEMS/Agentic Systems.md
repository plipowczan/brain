---
title: "Agentic Systems"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["project", "ai", "agents", "architecture"]
type: basic-note
agent-created: true
summary: "Multi-agent architecture for two companies — shared skills, separate contexts"
---
# Agentic Systems

## 🗒️ Description
A project to build and maintain replicable AI agent environments across two companies (200IQ Labs and PLSoft). The architecture separates what's shared (skills, tools) from what's private (context per company).

## 🧩 Architecture:
Three layers:
1. **Skills** — reusable instruction packages shared across companies (CFO, Legal, Tax Advisor, Marketing, Product Manager, Business Consultant, LinkedIn Coach)
2. **Context** — company-specific data and instructions (separate per entity)
3. **Tools** — shared execution layer ([[Claude Code]], [[NemoClaw]])

## Design principles:
- **Git as source of truth** — all configurations versioned
- **Skill modularity** — skills are independent, composable packages ([[Agent Skills]])
- **Local execution** — agents run on own infrastructure
- **Transparency** — full audit trail through Git history
- **Zero vendor lock-in** — skills are plain markdown, tools are swappable

## 🔗 Links
- [[Agentic Coding]]
- [[Context Engineering]]
- [[Qamera AI]] — primary product using this architecture
