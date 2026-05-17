---
title: "Marpit"
date: 2026-04-26
enableToc: true
openToc: true
tags: ["tool", "presentation", "framework", "markdown", "slides"]
type: tool
source: "_raw/inbox/marp-teammarpit The skinny framework for creating slide deck from Markdown.md"
agent-created: true
summary: "Skinny framework: Markdown + CSS theme → static HTML/CSS slide deck — the foundation of all of Marp"
---
# Marpit

**Marpit** /mɑːrpɪt/ — a skinny framework for generating slide decks from Markdown. Returns minimal HTML/CSS ready to be printed as PDF. Independent from [[Marp]], but it is Marp's foundation.

## 🔗 Links

### Description
- Repo: https://github.com/marp-team/marpit
- Documentation: https://marpit.marp.app/
- npm: https://www.npmjs.com/package/@marp-team/marpit

### Download or use

```bash
npm install @marp-team/marpit
```

## 🗒️ Description

### 🧩 Three pillars

- **Marpit Markdown** — `markdown-it` extensions: directives, slide backgrounds, image syntax. Compatibility with plain Markdown is preserved.
- **Theme CSS** — pure CSS, without predefined classes or mixins. You style HTML elements; the framework handles the rest.
- **Inline SVG slide** (experimental) — each slide inside `<svg>`, pixel-perfect scaling with CSS alone, `<foreignObject>` for advanced backgrounds.

### 🧩 Pluggability

Marpit has a pluggable architecture — you can extend it through markdown-it plugins. That's why [[Marp Core]] is just an overlay: it adds themes, math, emoji, auto-scaling, but the conversion engine is Marpit.

> Marpit does not ship any themes. If you need official themes + features, use [[Marp Core]].

### 🧩 Sub-project

- **[marpit-svg-polyfill](https://github.com/marp-team/marpit-svg-polyfill)** — inline SVG polyfill for Safari

## ✍️ Reasoning for

I don't use Marpit directly very often — in 99% of cases [[Marp Core]] via [[Marp CLI]] is enough. Marpit comes up if I want totally custom themes without the baggage of Marp Core (`marp --engine @marp-team/marpit`) or if I want to build my own slide conversion engine.

## 🔗 Resources

- Getting started: https://marpit.marp.app/?id=getting-started
- Directives: https://marpit.marp.app/directives
- Image syntax / slide backgrounds: https://marpit.marp.app/image-syntax
- Theme CSS: https://marpit.marp.app/theme-css

![[ATTACHMENTS/8a3b00665a054c4a232d61d3a06e30d7_MD5.png]]

---
Template: [[templates/tool]]
