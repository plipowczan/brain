---
title: "Marp CLI"
date: 2026-04-26
enableToc: true
openToc: true
tags: ["tool", "presentation", "markdown", "cli", "slides"]
type: tool
source: "_raw/inbox/marp-teammarp-cli A CLI interface for Marp and Marpit based converters.md"
agent-created: true
summary: "CLI dla Marp/Marpit — konwersja Markdown → HTML/PDF/PPTX/PNG, watch & server mode"
---
# Marp CLI

`@marp-team/marp-cli` — CLI dla [[Marp]] / [[Marpit]]. Konwertuje Markdown na HTML / PDF / PPTX / PNG / JPEG, ma watch mode, server mode i preview window. Standalone, Docker albo npm.

## 🔗 Links

### Description
- Repo: https://github.com/marp-team/marp-cli
- npm: https://www.npmjs.com/package/@marp-team/marp-cli

### Download or use

```bash
# One-shot bez instalacji (wymaga Node 18+)
npx @marp-team/marp-cli@latest slide-deck.md --pdf

# Lokalnie do projektu
npm install --save-dev @marp-team/marp-cli

# Globalnie
npm install -g @marp-team/marp-cli

# macOS / Linux
brew install marp-cli

# Windows
scoop install marp

# Docker
docker pull marpteam/marp-cli
```

> Konwersja do PDF/PPTX/PNG wymaga zainstalowanego Chrome, Edge lub Firefox.

## 🗒️ Description

### 🧩 Conversion modes

```bash
marp slide-deck.md                     # → HTML
marp slide-deck.md --pdf               # → PDF (browser-driven)
marp slide-deck.md --pptx              # → PPTX (rendered backgrounds)
marp slide-deck.md --pptx --pptx-editable  # → editable PPTX (experimental)
marp slide-deck.md --images png        # → wiele PNG (jeden per slajd)
marp slide-deck.md --image png         # → tylko slajd tytułowy (do OG image)
marp slide-deck.md --notes             # → presenter notes jako TXT
```

### 🧩 Watch & server mode

```bash
marp -w slide-deck.md       # watch + auto-reload w przeglądarce
marp -s ./slides            # serwer HTTP, on-demand conversion
marp -p slide-deck.md       # preview window (auto-watch)
```

W server mode dostajesz konwersję per query string: `http://localhost:8080/deck.md?pdf` zwraca PDF. `index.md` lub `PITCHME.md` jest landing pagem.

### 🧩 Templates

- **bespoke** (default) — Bespoke.js based: nawigacja, fullscreen, OSC, presenter view, overview, progress bar, [slide transitions](https://github.com/marp-team/marp-cli/blob/main/docs/bespoke-transitions/README.md) (View Transition API)
- **bare** — minimalny, no-JS gdy `--engine @marp-team/marpit`

### 🧩 Konfiguracja

`marp.config.{js,mjs,cjs,ts}`, `.marprc.{json,yml}`, albo `marp` w `package.json`:

```js
// marp.config.mjs
import markdownItContainer from 'markdown-it-container'

export default {
  inputDir: './slides',
  output: './public',
  themeSet: './themes',
  pdf: true,
  engine: ({ marp }) => marp.use(markdownItContainer, 'custom'),
}
```

Dla TypeScripta jest `defineConfig` helper z generikami pod custom engine.

### 🧩 Engine swap

Można podmienić silnik konwersji na czysty Marpit lub własny przez `--engine`:

```bash
marp --engine @marp-team/marpit deck.md
marp --engine ./engine.mjs deck.md
```

Functional engine to plik exportujący default function `({ marp }) => marp.use(plugin)` — pozwala dorzucać markdown-it pluginy bez forka.

### 🧩 Metadata (HTML/PDF/PPTX)

Przez global directives w front-matter albo CLI flags:

```yaml
---
title: Marp slide deck
description: Example
keywords: marp,slides
url: https://marp.app/
image: https://marp.app/og-image.jpg
---
```

CLI flagi (`--title`, `--og-image`, ...) mają priorytet nad directives.

### 🧩 Node API

```js
import { marpCli, waitForObservation, CLIError } from '@marp-team/marp-cli'

const exitStatus = await marpCli(['deck.md', '--pdf'])
```

`waitForObservation()` daje hook na server/watch/preview ready, ze `.stop()` do zamknięcia.

## ✍️ Reasoning for

To jest właściwy entry point do całego ekosystemu. Skill `create-marp-deck` pod spodem woła Marp CLI, więc znajomość flag i config file pozwala mi tunować output bez modyfikacji skilla. `--pdf-outlines` + `--pdf-notes` są kluczowe gdy oddaję deck klientowi w PDF.

## 🔗 Resources

- Bespoke transitions: https://github.com/marp-team/marp-cli/blob/main/docs/bespoke-transitions/README.md
- Releases: https://github.com/marp-team/marp-cli/releases

![[ATTACHMENTS/ffe32b4fd0847974c2dc1fd02de3ab3b_MD5.gif]]

---
Template: [[templates/tool]]
