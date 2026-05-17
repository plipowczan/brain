---
title: "AI UX Design Tools"
date: 2026-05-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "ux", "design", "product"]
type: knowledge-note
agent-created: true
summary: "Hub for AI-driven UX/product design tools — methodology skills (UX RULER) and generative design platforms (UX Pilot)"
---

# AI UX Design Tools

## 🗒️ Description

A landscape of AI tools that support product design — from **methodology** (skills that teach the agent how to drive the product process from mission to measurable value) to **generative platforms** (which generate wireframes and hi-fi UI in seconds).

Two different paradigms, complementary:
- **Process-first**: the agent walks you through decisions (audience → need → metric → validation) before you touch Figma. Example: [[UX RULER]].
- **Output-first**: the agent generates ready screens from a prompt / PRD / sketch. Example: [[UX Pilot]].

In practice the sensible stack is: **UX RULER** for decisions and product memory (`PRODUCT.md`, `ROADMAP.md`) + **UX Pilot** for quick visualization of selected hypotheses.

## 🔗 Links

- [[UX RULER]] — open-source UX skill for agents (Claude Code, Codex), process from mission to metric, decisions recorded in the repo
- [[UX Pilot]] — AI wireframe and hi-fi UI generator, Figma and code export
- [[Open Design]] — local-first OSS alternative to Claude Design: 31 design skills, 72+ design systems, 16 CLI agents, HTML/PDF/PPTX/MP4 export, BYOK
- [[UI UX Pro Max]] — Claude Code design system skill (v2.0 Design System Generator)

## 🧩 Feature comparison

| | UX RULER | UX Pilot |
|---|---|---|
| Type | Skill / methodology | SaaS platform |
| Input | Brief / repo / idea | Sketch / PRD / prompt |
| Output | Decisions + files in repo (`PRODUCT.md`, `ROADMAP.md`, ADRs) | Wireframe / hi-fi screen / code |
| Phase | Strategy → Need → Plan | Wireframe → Hi-fi → Hand-off |
| Open source | Yes (GitHub) | No (freemium) |
| Integration | Claude Code / Codex / repo | Figma / GitHub sync |

## 📖 Further reading

- [[Agent Skills]] — broader context of agent skills, where UX RULER lives
- [[UI UX Pro Max]] — related tool generating design system + reasoning rules
- [[Awesome Agent Skills]] — curated list where skills like UX RULER are indexed
- [[Spec-driven SEO and GEO]] — related pattern: methodology recorded as files in the repo

---
Template: [[templates/knowledge_note_info]]
