---
title: "Process Mapping"
date: 2025-12-01
enableToc: true
openToc: true
tags: ["knowledge", "info", "business", "processes", "optimization"]
type: knowledge-note
agent-created: true
summary: "Process mapping methodology — 4 elements (Action, Actor, Tool, Mode), optimization via delete → simplify → automate"
---

# Process Mapping

## 🗒️ Description

At Automation House we have mapped over **400 processes**, and the conclusion is the same every time: **every company runs sub-optimally**. The only question is how quickly you can find those spots and fix them.

A process map is not just documentation — it is a navigation tool for three groups:

1. **Business** — understanding how the company *really* operates (management's mental model often diverges from reality)
2. **Users** — a clear operating manual, faster onboarding
3. **IT / Implementation teams** — precise architecture design, knowledge transfer, finding bottlenecks

Presentation from Infoshare Katowice 2025.

## 🧩 Process Mapping Elements

### Why most maps are useless

| Method | Problem |
|--------|---------|
| **SIPOC** (tables) | Great for analysts, unreadable for the business |
| **BPMN** (Business Process Model and Notation) | Corporate standard, but too complex — too many gateways and symbols |
| **Plain Flowchart** | Too simple — shows "what" without "who" and "with what" |

### Golden middle: Extended Flowchart

The method developed at Automation House — a process map must contain **4 key elements** for every step:

1. **Action** — what happens?
2. **Actor** — who does it?
3. **Tool** — what is it done with? (Excel, CRM, Slack, [[Make]], [[n8n]])
4. **Mode** — manual or automatic?

This immediately shows:
- Where a human is doing a robot's work (copy-paste)
- Where integration between systems is missing

## 🔍 Finding Optimization Points

Once you have the AS-IS map, look for places where:

- **The most errors happen**
- **The process takes the longest**
- **Data is rewritten by hand** — risk of error, waste of time
- **A change will have the biggest impact** on the team

## 📐 Methodology

### Comparison of methods

| Method | Pros | Cons | When to use |
|--------|--------|------|---------------|
| Flowchart (simple) | Easy to grasp | Lacks context (who/with what) | Simple linear processes |
| SIPOC | Systematic, analytical | Unreadable for the business | Analysis for process owners |
| BPMN | Corporate standard, precise | Too complex for non-technical | Enterprise, ISO, compliance |
| **Extended Flowchart** | **Readable + context (4 elements)** | **Requires mapping discipline** | **Most cases** |

### Good practices

- Always map the AS-IS state (how it really is), not TO-BE (how you wish it were)
- Map with the people who do the work, not with managers
- Every step must have all 4 elements
- Mark manual vs. automatic — that's the fastest way to spot quick wins

## ⚡ Elon's Principle: delete → simplify → automate

> *"Probably the worst thing is to optimize something that should not be in the process at all."*

The right order when optimizing:

1. **Delete** — is this step needed at all? Worst thing = automating something that should not exist
2. **Simplify** — can it be shortened, merged with another step?
3. **Automate** — only at the end, when the step is necessary and simplified

This rule should be the golden one before any optimization project.

## 📊 Evidence

### Healthcare research

Process mapping in healthcare was able to cut **patient waiting time by 20-45%**. If it works in an environment as complex as a hospital — it will work in any company.

### Case Study: [[El Padre Case Study]]

Event agency El Padre — offer creation was too time-consuming and not profitable. Knowledge scattered in employees' heads.

**Steps implemented:**
1. **"Ear" of the process** (Fireflies.ai) — AI records meetings and produces transcriptions
2. **Central Brain** ([[Airtable]]) — knowledge base with transcriptions, budgets, project data
3. **Automation** ([[Make]] + AION) — AI assistants: Briefing, Event Ideas, Financial Planner, Offer Generator

**Results:**
- 10-50% faster offer preparation
- 10-15% productivity increase in the production department
- 30 people supported by AI in daily work

Related: [[Agentic Systems]]

## 📒 Summary

- **No map, no navigation** — you can't optimize what you haven't measured
- **4 elements per step**: Action, Actor, Tool, Mode
- **Extended Flowchart** = the golden middle between simplicity and precision
- **Elon's Principle**: delete → simplify → automate (never in reverse)
- Technology is not for adding complexity — it's for building **Operational Excellence**
- Start by mapping one process — don't wait for a big transformation project

## 🧭 Process map as input to PRD

The AS-IS map with 4 elements (Action/Actor/Tool/Mode) is **the best possible input to a PRD** for a client. Every manual step + every spot without integration = a candidate feature for the spec. Pipeline:

1. AS-IS map (this document) → identify pain points
2. **Elon's principle** (delete → simplify → automate) → filter features that should make it into the PRD at all
3. [[UX RULER]] → discovery (Mission/Audience/User/Need/Infrastructure/Product/Value)
4. [[OpenSpec]] / [[OPSX Workflow]] → formalize as proposal + specs + design + tasks (DAG, versioned in the repo)

Full synthesis: [[2026-05-16_PRD-z-analizy-i-oferty]].

## 🔗 Resources

- [BPMN Specification](https://www.bpmn.org/) — business process modeling standard
- [Fireflies.ai](https://fireflies.ai/) — AI meeting transcription
- Presentation from Infoshare Katowice 2025
- [[OPSX Workflow]] — formalizing a process map as a PRD in the repo
- [[UX RULER]] — discovery layer between map and spec
- [[Specification-Driven Development]] — spec-first methodology
