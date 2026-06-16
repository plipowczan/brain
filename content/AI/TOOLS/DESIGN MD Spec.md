---
title: "DESIGN MD Spec"
date: 2026-05-19
enableToc: true
openToc: true
tags: ["tool", "ai", "design", "coding-agents", "specs", "design-systems", "google", "open-source"]
type: tool
source: "_raw/inbox/google-labs-codedesign.md A format specification for describing a visual identity to coding agents. DESIGN.md gives agents a persistent, structured understanding of a design system.md"
agent-created: true
summary: "Google Labs format spec — DESIGN.md combines YAML design tokens with markdown rationale so coding agents have a persistent, structured grasp of a design system"
---

# DESIGN.md Spec (google-labs-code)

## 🚀 Description

[google-labs-code/design.md](https://github.com/google-labs-code/design.md) — a format specification for describing a visual identity to coding agents. Machine-readable design tokens (YAML front matter) + human-readable design rationale (markdown prose). Tokens give agents exact values; prose tells them *why* those values exist and how to apply them.

Where [[Awesome Design MD]] is a *collection* of real-brand DESIGN.md files, this is the *normative spec* + CLI that validates and diffs them.

## 🧩 The format

```yaml
---
name: Heritage
colors:
  primary: "#1A1C1E"
  secondary: "#6C7278"
  tertiary: "#B8422E"
  neutral: "#F7F5F2"
typography:
  h1: { fontFamily: Public Sans, fontSize: 3rem }
  body-md: { fontFamily: Public Sans, fontSize: 1rem }
rounded: { sm: 4px, md: 8px }
spacing: { sm: 8px, md: 16px }
---

## Overview
Architectural Minimalism meets Journalistic Gravitas...
```

Section order is normative (omit anything, but present sections appear in this order):

1. Overview (aka Brand & Style)
2. Colors
3. Typography
4. Layout (aka Layout & Spacing)
5. Elevation & Depth
6. Shapes
7. Components
8. Do's and Don'ts

Token references: `{colors.primary}` — resolved across the document.

## 🧩 CLI

```bash
npx @google/design.md lint DESIGN.md    # validate, contrast checks, structured findings JSON
npx @google/design.md diff DESIGN.md DESIGN-v2.md   # token-level + prose regression diff
```

Output is structured JSON — agents can act on it directly. WCAG contrast ratios are computed automatically.

## 🎨 Why it matters

Solves the "every agent reinvents your design system" problem. One file in the repo root, every agent (Claude Code, Cursor, Codex) gets the same persistent visual identity. Sits next to `AGENTS.md` / `CLAUDE.md` as another well-known agent-readable file.

Component tokens supported: `backgroundColor`, `textColor`, `typography`, `rounded`, `padding`, `size`, `height`, `width`. Variants (hover, active, pressed) are separate entries with related key names.

## Reasoning for

When you have an actual brand to enforce across agent-generated UIs. Pairs with [[Awesome Design MD]] (sample DESIGN.md files for major brands) for inspiration, and with [[UI UX Pro Max]] / [[UX Pilot]] / [[UX RULER]] for the generation side. For [[PLSoft]] and [[Qamera AI]] this is the natural place to lock the brand sheet.

## Alternatives considered

- [[Awesome Design MD]] — sample files only, no spec/validator
- Tokens Studio / Style Dictionary — robust but not agent-native, JSON-only
- Hand-maintained CLAUDE.md design section — less structured, no validator

## 🔗 Links

- Repo: https://github.com/google-labs-code/design.md
- Full spec: https://github.com/google-labs-code/design.md/blob/main/docs/spec.md

## 🔗 Related notes

- [[Awesome Design MD]] — collection of real-brand DESIGN.md files
- [[UI UX Pro Max]] — design system generator skill
- [[UX Pilot]], [[UX RULER]], [[Open Design]] — UX generation tools
- [[Claude Code]] — host agent
- [[Frontend Design]] — skill that consumes these tokens
- [[AI UX Design Tools]] — broader landscape

---
Template: [[templates/tool]]
