---
title: "Impeccable"
date: 2026-05-28
enableToc: true
openToc: true
tags: ["tool", "ai", "design", "skills", "frontend", "claude-code", "open-source", "apache-2.0"]
type: tool
source: "_raw/processed/2026-05-28_pbakaus-impeccable.md"
agent-created: true
summary: "pbakaus/impeccable — a design-language skill (1 skill, 23 commands, 27 anti-pattern rules) that makes any AI coding harness better at frontend design; builds on Anthropic's frontend-design skill, Apache 2.0"
---

# Impeccable

A design-language skill that makes your AI harness better at frontend design — *"the vocabulary you didn't know you needed."* Built by [Paul Bakaus](https://www.paulbakaus.com/) (@pbakaus), it extends [Anthropic's frontend-design skill](https://github.com/anthropics/skills/tree/main/skills/frontend-design) with deeper reference material, a shared command vocabulary, and a deterministic anti-slop linter.

## Links
### Description
- Repo: [github.com/pbakaus/impeccable](https://github.com/pbakaus/impeccable)
- Site / ready-to-use bundles: [impeccable.style](https://impeccable.style/)
- Package: [impeccable on npm](https://www.npmjs.com/package/impeccable)

### Download or use
Download the ZIP for your tool at [impeccable.style](https://impeccable.style/) and extract into your project, or copy from the repo's `dist/` per harness. Standalone CLI needs no install: `npx impeccable detect src/`.

## Reasoning for

The problem it solves: every model was trained on the same SaaS templates, so without guidance you get the same AI "tells" on every project — Inter for everything, purple-to-blue gradients, cards nested in cards, gray text on colored backgrounds, the rounded-square icon tile above every heading. Impeccable gives the agent a vocabulary and a set of guardrails to escape that generic aesthetic.

What it adds on top of a base design skill:

- **7 domain reference files**, loaded on every command alongside a brand-vs-product register that shifts the defaults:

  | Reference | Covers |
  |-----------|--------|
  | typography | Type systems, font pairing, modular scales, OpenType |
  | color-and-contrast | OKLCH, tinted neutrals, dark mode, accessibility |
  | spatial-design | Spacing systems, grids, visual hierarchy |
  | motion-design | Easing curves, staggering, reduced motion |
  | interaction-design | Forms, focus states, loading patterns |
  | responsive-design | Mobile-first, fluid design, container queries |
  | ux-writing | Button labels, error messages, empty states |

- **27 deterministic anti-pattern rules** + a 12-rule LLM critique pass. The deterministic rules run with no LLM and no API key (CLI or browser extension); each maps to specific guidance the skill teaches against.

## 🧩 Features

- **23 commands** under `/impeccable`, a shared design vocabulary with the agent. Workflow: `teach` / `document` / `extract` (set up the design system) → `shape` → `craft` → `critique` / `audit` → `polish`. Tone/adjustment verbs: `bolder`, `quieter`, `distill`, `animate`, `colorize`, `typeset`, `layout`, `delight`, `overdrive`, `harden`, `onboard`, `clarify`, `adapt`, `optimize`, `live`. `pin <command>` creates standalone shortcuts (e.g. `/audit`).
- **Standalone CLI** — `npx impeccable detect` scans a directory, HTML file, or URL (Puppeteer); `--fast --json` for regex-only output. Catches 24 issues across AI slop (side-tab borders, purple gradients, bounce easing, dark glows) and general quality (line length, cramped padding, small touch targets, skipped headings).
- **Explicit anti-patterns**: no overused fonts (Arial, Inter, system defaults); no gray text on colored backgrounds; no pure black/gray (always tint); no everything-in-cards or nested cards; no bounce/elastic easing.
- **Broad harness support**: Cursor, [[Claude Code]], OpenCode, Pi, Gemini CLI, Codex CLI, VS Code Copilot, Kiro, Trae, Rovo Dev, Qoder.

## Alternatives considered
- [[Open Design]], [[UX RULER]] — sibling open-source design/UX skills for agents
- [[DESIGN MD Spec]] / [[Awesome Design MD]] — the DESIGN.md persistent design-system approach
- [[UX Pilot]] — generative UI/wireframe platform (different layer: generation vs. design-language guardrails)
- Anthropic's original `frontend-design` skill — Impeccable's starting point

## Resources
- License: Apache 2.0 — builds on Anthropic's frontend-design skill (see NOTICE.md for attribution)
- Hub note: [[AI UX Design Tools]]
- Skill ecosystem: [[Agent Skills]]
- Follow @pbakaus on Twitter for release notes and lint-rule highlights

---
Template: [[templates/tool]]
