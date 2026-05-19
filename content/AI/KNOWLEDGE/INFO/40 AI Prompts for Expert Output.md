---
title: "40 AI Prompts for Expert Output"
date: 2026-05-19
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "prompts", "claude", "chatgpt", "gemini", "workflow"]
type: knowledge-note
source: "_raw/inbox/40 Powerful AI Prompts for Claude That Produce Expert-Level Results.md"
agent-created: true
summary: "Curated 40-prompt library from @eng_khairallah1 — engineered, role+context+constraint prompts that work cross-model (Claude, ChatGPT, Gemini) across 6 use-case categories"
---

# 40 AI Prompts for Expert Output

## 🚀 The core idea

A real prompt is an engineered instruction, not a wish. It specifies **role, context, constraints, format, quality standard, and examples**. The author tested 500+ prompts and kept the 40 that produce expert-level output every run on Claude, ChatGPT, and Gemini. Originally a Twitter thread by [@eng_khairallah1](https://x.com/eng_khairallah1/status/2048334883198738761).

Closely aligned with the engineered-prompt philosophy in [[Context Engineering]] and [[Claude Code Best Practice]] — substance over wishes.

## 🗒️ Description

Six categories, 40 prompts. Each prompt is a parametrized template with rules, structure, and quality gates. Save the list, customize the variables, build a personal template library over time.

## 🧩 Categories

- **Writing and content (01–10)** — Expert Article Writer, Thread Architect, Email Drafter, Content Repurposer, Copywriting Converter, Blog Post Outliner, Storytelling Transformer, Headline Generator, Case Study Builder, Style Mimic
- **Analysis and strategy (11–20)** — SWOT, Decision Matrix, Root Cause (5 Whys), Market Opportunity Scanner, Meeting Strategist, Pricing Strategist, Competitive Teardown, OKR Builder, Risk Assessor, Retrospective Facilitator
- **Technical and development (21–28)** — Architecture Advisor, Code Reviewer, Debug Diagnostician, API Designer, Database Schema Designer, Test Case Generator, Documentation Writer, Refactoring Planner
- **Productivity and personal (29–32)** — Weekly Planner (with deliberately-skipping section), Learning Accelerator, Negotiation Prep, Habit Designer
- **Data and research (33–35)** — Data Interpreter, Survey Analyzer, Research Synthesizer
- **Communication (36–40)** — Difficult Conversation Prep, Feedback Giver, Presentation Outliner, Apology Crafter, Elevator Pitch Builder

## 📒 Patterns worth stealing

- **Role + constraint + format + quality bar** in every prompt — no vague asks.
- **Forced specificity** — explicit "no filler phrases", "no hedge words", "every claim must be specific".
- **Multi-version output** — generate Version A (direct) and Version B (warm) so you can pick.
- **Refusal to accept framing** — Root Cause prompt says "Do not accept my initial framing at face value".
- **Pessimism on demand** — Risk Assessor says "Be pessimistic. I want to hear about risks I have not considered."
- **Deliberately-skipping section** in the Weekly Planner — saying no is how priorities stay priorities.

## ✍️ One quoted prompt (#22 Code Reviewer)

> Review this code... Check for: SECURITY, LOGIC, PERFORMANCE, READABILITY, BEST PRACTICES. For each issue found: Severity (Critical/High/Medium/Low), Exact location, Why it is a problem (not just what is wrong, but what could happen), The fix. If the code is clean, say so. Do not invent issues to seem thorough.

## 🔗 Related notes

- [[Context Engineering]] — broader philosophy of feeding models the right context
- [[Claude Code Best Practice]] — operational prompts inside Claude Code
- [[Building Claude Skills Guide]] — packaging reusable prompts as skills
- [[Awesome Claude Code]] — curated CC resources

## 📖 Further reading

- Original thread: [@eng_khairallah1 on X](https://x.com/eng_khairallah1/status/2048334883198738761)

---
Template: [[templates/knowledge_note_info]]
