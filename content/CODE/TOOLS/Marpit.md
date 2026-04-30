---
title: "Marpit"
date: 2026-04-26
enableToc: true
openToc: true
tags: ["tool", "presentation", "framework", "markdown", "slides"]
type: tool
source: "_raw/inbox/marp-teammarpit The skinny framework for creating slide deck from Markdown.md"
agent-created: true
summary: "Skinny framework: Markdown + CSS theme → static HTML/CSS slide deck — fundament całego Marp"
---
# Marpit

**Marpit** /mɑːrpɪt/ — szczupły framework do generowania slide decków z Markdownu. Zwraca minimalny HTML/CSS gotowy do druku jako PDF. Niezależny od [[Marp]], ale jest jego fundamentem.

## 🔗 Links

### Description
- Repo: https://github.com/marp-team/marpit
- Dokumentacja: https://marpit.marp.app/
- npm: https://www.npmjs.com/package/@marp-team/marpit

### Download or use

```bash
npm install @marp-team/marpit
```

## 🗒️ Description

### 🧩 Trzy filary

- **Marpit Markdown** — rozszerzenia `markdown-it`: directives, slide backgrounds, image syntax. Kompatybilność z normalnym Markdownem zachowana.
- **Theme CSS** — czyste CSS, bez predefiniowanych klas i mixinów. Stylujesz HTML elementy, framework zajmuje się resztą.
- **Inline SVG slide** (experimental) — każdy slajd w `<svg>`, pixel-perfect skalowanie samym CSS, `<foreignObject>` do advanced backgrounds.

### 🧩 Pluggability

Marpit ma pluggable architecture — można rozszerzać przez plugins markdown-it. To dlatego [[Marp Core]] jest tylko nakładką: dodaje themy, math, emoji, auto-scaling, ale silnik konwersji jest Marpit.

> Marpit nie dostarcza żadnych themów. Jeśli potrzebujesz oficjalnych themów + ficzerów, użyj [[Marp Core]].

### 🧩 Sub-projekt

- **[marpit-svg-polyfill](https://github.com/marp-team/marpit-svg-polyfill)** — polyfill inline SVG dla Safari

## ✍️ Reasoning for

Bezpośrednio Marpita raczej nie używam — w 99% przypadków [[Marp Core]] przez [[Marp CLI]] wystarcza. Marpit pojawia się, jeśli chciałbym mieć totalnie custom themy bez bagażu Marp Core (`marp --engine @marp-team/marpit`) albo budować własny silnik konwersji slajdów.

## 🔗 Resources

- Getting started: https://marpit.marp.app/?id=getting-started
- Directives: https://marpit.marp.app/directives
- Image syntax / slide backgrounds: https://marpit.marp.app/image-syntax
- Theme CSS: https://marpit.marp.app/theme-css

![[ATTACHMENTS/8a3b00665a054c4a232d61d3a06e30d7_MD5.png]]

---
Template: [[templates/tool]]
