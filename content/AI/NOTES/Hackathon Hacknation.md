---
title: "Hackathon Hacknation"
date: 2025-12-12
enableToc: true
openToc: true
tags: ["basic", "notes", "hackathon", "ai", "govtech"]
type: basic-note
agent-created: true
summary: "24h hackathon building budget system with AI — lessons on validation, AI limitations, team dynamics"
---

# 🚀 Context

**Hacknation** — a hackathon organized by GovTech Polska. 1500+ participants, 480k PLN prize pool, 24 hours for a working public-administration solution.

- Team: a "retired" developer (4 years away from coding) + non-developers using nocode and LLMs
- Core thesis: **AI is the equalizer** — a tool that lets a team with less coding experience compete with professional dev teams
- AI was used to pick the task — analyzing challenges against the team's competencies

# 🗒️ Problem — Mrs. Zosia and Thousands of Excels

The public-administration budgeting process is built on the manual exchange of hundreds of thousands of Excel files:

1. **Start (bottom):** a clerk manually types budget data into Excel
2. **Escalation (top):** the file travels: Municipality → City → Voivodeship → Ministry of Finance
3. **Consolidation:** a dedicated unit at the ministry merges the data (often by hand)
4. **Decision and return (bottom):** budget limits travel back the same path with arbitrary cuts — nobody can explain why

Solution: **Cyfrowy Budżet** — a centralized web app:
- One source of truth — all budget items in one system
- Transparency — comments and discussion on items inside the system instead of email
- Approval workflow — a simplified approval and consolidation process

# 🛠️ Stack

| Layer | Technology |
|---------|-------------|
| Frontend | React, TypeScript |
| Backend | Supabase |
| Presentation | Video generated in HiGen |

# 💰 Token Usage

- **Paweł and Kuba:** Antigravity (Gemini Pro / Claude 4.5) — burned the entire weekly token limit in ~15h
- **Justyna:** Bolt ([[Claude Code]]) — a record **18 million tokens**

Work ran non-stop for 24h, 2-3h of sleep. Initially everyone built separate pieces of code ad hoc. The turn came after consolidating around Justyna's most advanced prototype.

# ⚠️ What Went Wrong

Final score: **2.15 / 5 points** — didn't make the finals.

- The tech worked, the presentation was great
- We lacked **validation** — the team had no access to a practitioner (a clerk working with the budget daily)
- The mentor assigned to the task wasn't a domain expert
- The system might have been completely "off" — disconnected from the realities of public administration

# 🤖 AI Limitations

- **Code often didn't work** — solutions looked correct but fell apart at runtime
- **Hallucinations** — proposed libraries didn't exist, logic pulled out of thin air
- **Needs hand-holding** — precise prompting and continuous course correction
- **Blockers** — a bug in the _current user_ filters the model couldn't diagnose; we had to fall back to manual code reading and debugging

AI is a powerful force multiplier but not a magic wand. Without technical skills and critical thinking — you'll get stuck halfway.

# ☘️ Key Lesson — Validation > Technology

Even the best code won't save a solution that doesn't address a real user need.

Teams that came with ready components and better business analysis won. The "wing it" approach is romantic but loses against preparation.

**Plan for the next hackathon:**
1. **Task selection** — team roles, task scraping, AI analysis (this stage was OK)
2. **Business analysis** (this is where we failed) — AS-IS/TO-BE map, User Stories, PRD, SRS, skills for agents
3. **Development** — ready boilerplate, iterative development, automated tests, continuous Code Review
4. **Documentation and verification** — security review, performance review

# 📒 Summary

- AI lets you do things that were impossible a year ago — a small team built a working web app in 24h
- Technology is secondary to understanding the problem
- AI is the future of programming, but a human has to be the pilot who knows where they're flying
- [[Agentic Coding]] and tools like [[Claude Code]] dramatically lower the barrier to entry, but they don't eliminate the need for technical fundamentals and business analysis
