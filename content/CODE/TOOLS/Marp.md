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

**Marp** (Markdown Presentation Ecosystem) — pisanie slide decków w czystym Markdownie, eksport do HTML/PDF/PPTX/PNG. Open source, MIT, oparte na CommonMark + ekstensje. Cały ecosystem jest pluggable.

## 🔗 Links

### Description
- https://marp.app/ — strona projektu
- https://github.com/marp-team/marp — entrance repo z przeglądem rodziny

### Download or use
- VS Code extension: [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode)
- CLI: `npx @marp-team/marp-cli@latest slide-deck.md` → patrz [[Marp CLI]]
- Awesome list: https://github.com/marp-team/awesome-marp

## 🗒️ Description

Cały ekosystem zbudowany jest wokół jednej idei: **slide deck = Markdown + CSS theme**. Strona `---` rozdziela slajdy. Reszta to `markdown-it` + dyrektywy + theming.

### 🧩 Marp family

| Komponent | Rola |
|-----------|------|
| [[Marpit]] | Skinny framework: Markdown + CSS → HTML/CSS slides. Zero opinii o themach. |
| [[Marp Core]] | Marpit + oficjalne themy (default/gaia/uncover) + math + emoji + auto-scaling |
| [[Marp CLI]] | CLI: konwersja do HTML/PDF/PPTX/PNG, watch mode, server mode |
| Marp for VS Code | Live preview + custom theming w edytorze |

Wcześniejsze, nieaktywne integracje (Marp Web, Marp React, Marp Vue) — nadal w repo, ale bez supportu.

### 🧩 Kluczowe feature'y

- **CommonMark base** — jeśli umiesz pisać Markdown, umiesz pisać slajdy
- **Dyrektywy** — globalne (`theme:`, `size:`, `paginate:`) i lokalne (`<!-- _backgroundColor: aqua -->`)
- **Image syntax** — slide backgrounds, advanced backgrounds przez `<foreignObject>`
- **Theming** — czysty CSS, brak predefiniowanych klas/mixins; customowe themy przez `@theme` metadata
- **Eksport** — HTML, PDF, PPTX (w tym editable), PNG/JPEG, presenter notes jako TXT
- **Math** — MathJax (default) lub KaTeX przez `math:` directive
- **Auto-scaling** — fitting headers (`# <!-- fit -->`), shrink dla code/math blocks

## ✍️ Reasoning for

Markdown-first workflow do prezentacji idealnie pasuje do mojego stacku — Obsidian, Hugo, Quartz, wszystko już bazuje na MD. Zamiast walczyć z PowerPointem albo Keynote'em, piszę treść jak normalną notatkę i wrzucam do CLI. Eksport do PPTX zostawia drogę odwrotu, gdy klient żąda edytowalnego pliku.

Powiązane: w moim setupie istnieje skill **`create-marp-deck`** — interview-driven workflow do generowania decków, z gradient section dividers i automatic HTML/PPTX export. To jest dokładnie ten use case.

## Alternatives considered

- **reveal.js** — JS-first, więcej JS niż Markdown
- **Slidev** — Vue-based, dla devów; piękny ale specyficzny stack
- **Google Slides / PowerPoint / Keynote** — WYSIWYG, brak wersjonowania, brak diffu

Marp wygrywa na: wersjonowanie git, brak lock-inu, eksport w 4 formatach, działanie w VS Code.

## 🔗 Resources

- Dokumentacja: https://marpit.marp.app/
- Awesome Marp: https://github.com/marp-team/awesome-marp
- Built-in themes (default/gaia/uncover): https://github.com/marp-team/marp-core/tree/main/themes

![[ATTACHMENTS/64bb5310e7d9e3b96dd4414854654c83_MD5.svg]]

---
Template: [[templates/tool]]
