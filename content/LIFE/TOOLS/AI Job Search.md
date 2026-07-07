---
title: "AI Job Search"
date: 2026-07-07
enableToc: true
openToc: true
tags: ["tool", "ai", "claude-code", "job-search", "career", "cv", "latex", "open-source"]
type: tool
source: "_raw/processed/2026-07-07_MadsLorentzen-ai-job-search.md"
agent-created: true
summary: "MadsLorentzen/ai-job-search — fork-and-fill job application framework on Claude Code: /setup profile, /scrape portals, /apply runs a drafter-reviewer pipeline producing compiled, ATS-checked LaTeX CV + cover letter PDFs."
---

# AI Job Search

## 🚀 Description

[MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) — a **fork-and-fill job application framework built on [[Claude Code]]**. Fork the repo, run `/setup` to build your profile (from a `documents/` folder, a pasted CV, or an interview), then `/scrape` searches job portals and `/apply <url>` runs the full pipeline: evaluate fit → draft LaTeX CV + cover letter → reviewer agent critiques → revise → compile and verify PDFs.

![[42f7bff679162416a568d63a24e03496_MD5.gif]]

The core workflow is **language- and country-agnostic**; the shipped portal skills target the Danish market (Jobindex, Jobnet, Akademikernes Jobbank), plus a **country-agnostic `linkedin-search`** skill on LinkedIn's public endpoints. `/add-portal` generates a search skill for any local job board.

## 🧩 Features

- **Drafter-reviewer separation** — a second Claude agent with fresh context researches the company and critiques the drafts; the drafter revises. Catches generic language a single pass leaves in.
- **PDF verification loop** — compiles with lualatex/xelatex, *visually inspects* the rendered pages, iterates until the CV is exactly 2 pages with no orphaned titles and the letter exactly 1 page (`\needspace`, `\enlargethispage`, font-matching fixes).
- **ATS check on the PDF text layer** — extracts the compiled CV via `pdftotext` and verifies what a parser actually sees: literal contact details, sane reading order, keyword coverage. **Honesty rule: gaps stay visible, never keyword-stuffed.**
- **Relevance-weighted CV cutting** — overflow lines scored by posting relevance + uniqueness + cover-letter dependency; lowest score cut first, not "oldest section first".
- **7 commands** — `/setup`, `/scrape`, `/apply`, plus `/expand` (mine GitHub/portfolio/Scholar for competencies), `/upskill` (skill-gap heatmap + learning plan), `/add-template` (register your own LaTeX templates), `/add-portal`.
- **Skill-per-portal architecture** — each job board is a Bun CLI skill under `.agents/skills/` with a shared output contract; profile knowledge lives in numbered skill files (candidate profile, behavioral profile, writing style, evaluation framework, STAR examples).
- **Anti-fabrication rule** — every CV/letter claim verified against the profile; the system never invents skills or experience.

## Reasoning for

Second entry in the AI-job-search pattern next to [[Career-Ops]] — same thesis (job hunting as a Claude Code harness), different center of gravity. [[Career-Ops]] leads with offer scoring and a Go TUI command center; ai-job-search leads with **output quality mechanics**: the drafter-reviewer loop, compile-and-inspect PDF verification, and the ATS text-layer check are directly reusable [[Harness Engineering]] patterns (verify the artifact the consumer sees, not the source you wrote). The `/add-portal` skill-generator is a nice example of agents scaffolding their own [[Agent Skills]].

## Alternatives considered

- [[Career-Ops]] — the sibling framework: A–F offer scoring, portal scanner, batch sub-agents, human-in-the-loop; less emphasis on PDF/ATS verification.
- Manual CV tailoring — what both replace: hours per application, no systematic keyword coverage.
- CV-builder SaaS (Teal, Rezi, etc.) — hosted, subscription, opaque; here you own the pipeline and the LaTeX.

## 🔗 Links

- Repo: https://github.com/MadsLorentzen/ai-job-search
- Requires: Claude Code, Python 3.10+, Bun, TeX Live/MiKTeX (lualatex + xelatex), optional poppler `pdftotext`

## 🔗 Related notes

- [[Career-Ops]] — sibling AI job-search command center on Claude Code
- [[Claude Code]] — the harness it runs on
- [[Agent Skills]] — the packaging mechanism for its portal tools
- [[Harness Engineering]] — the verification-loop patterns it demonstrates

---
Template: [[templates/tool]]
