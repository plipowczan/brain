---
title: "Marp"
date: 2026-04-26
enableToc: true
openToc: true
tags: ["tool", "presentation", "markdown", "slides", "open-source"]
type: tool
source: "_raw/inbox/Marp Markdown Presentation Ecosystem.md"
agent-created: true
summary: "Markdown Presentation Ecosystem — Markdown → HTML/PDF/PPTX slide decks via CLI, VS Code, or framework"
---
# Marp

**Marp** (Markdown Presentation Ecosystem) — writing slide decks in plain Markdown, exporting to HTML/PDF/PPTX/PNG. Open source, MIT, built on CommonMark + extensions. The whole ecosystem is pluggable.

## 🔗 Links

### Description
- https://marp.app/ — project site
- https://github.com/marp-team/marp — entrance repo with an overview of the family

### Download or use
- VS Code extension: [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode)
- CLI: `npx @marp-team/marp-cli@latest slide-deck.md` → see [[Marp CLI]]
- Awesome list: https://github.com/marp-team/awesome-marp

## 🗒️ Description

The whole ecosystem is built around a single idea: **slide deck = Markdown + CSS theme**. The `---` separator splits slides. The rest is `markdown-it` + directives + theming.

### 🧩 Marp family

| Component | Role |
|-----------|------|
| [[Marpit]] | Skinny framework: Markdown + CSS → HTML/CSS slides. Zero opinions about themes. |
| [[Marp Core]] | Marpit + official themes (default/gaia/uncover) + math + emoji + auto-scaling |
| [[Marp CLI]] | CLI: conversion to HTML/PDF/PPTX/PNG, watch mode, server mode |
| Marp for VS Code | Live preview + custom theming in the editor |

Earlier, inactive integrations (Marp Web, Marp React, Marp Vue) — still in the repo but unsupported.

### 🧩 Key features

- **CommonMark base** — if you can write Markdown, you can write slides
- **Directives** — global (`theme:`, `size:`, `paginate:`) and local (`<!-- _backgroundColor: aqua -->`)
- **Image syntax** — slide backgrounds, advanced backgrounds via `<foreignObject>`
- **Theming** — pure CSS, no predefined classes/mixins; custom themes via `@theme` metadata
- **Export** — HTML, PDF, PPTX (including editable), PNG/JPEG, presenter notes as TXT
- **Math** — MathJax (default) or KaTeX via `math:` directive
- **Auto-scaling** — fitting headers (`# <!-- fit -->`), shrink for code/math blocks

## ✍️ Reasoning for

A Markdown-first workflow for presentations fits my stack perfectly — Obsidian, Hugo, Quartz, everything is already MD-based. Instead of fighting with PowerPoint or Keynote, I write content like a regular note and pipe it through the CLI. PPTX export leaves an escape hatch when a client demands an editable file.

Related: in my setup there's a skill **`create-marp-deck`** — interview-driven workflow for generating decks with gradient section dividers and automatic HTML/PPTX export. That's exactly the use case. Full description of the 4-phase process (Brainstorm → React → Iterate → Export) in [[Claude Code Marp Workflow]].

## Alternatives considered

- **reveal.js** — JS-first, more JS than Markdown
- **Slidev** — Vue-based, for devs; beautiful but a specific stack
- **Google Slides / PowerPoint / Keynote** — WYSIWYG, no versioning, no diffs

Marp wins on: git versioning, no lock-in, export in 4 formats, working inside VS Code.

## 🔗 Resources

- Documentation: https://marpit.marp.app/
- Awesome Marp: https://github.com/marp-team/awesome-marp
- Built-in themes (default/gaia/uncover): https://github.com/marp-team/marp-core/tree/main/themes

![[ATTACHMENTS/64bb5310e7d9e3b96dd4414854654c83_MD5.svg]]

---
Template: [[templates/tool]]
