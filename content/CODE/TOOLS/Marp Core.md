---
title: "Marp Core"
date: 2026-04-26
enableToc: true
openToc: true
tags: ["tool", "presentation", "markdown", "framework", "slides"]
type: tool
source: "_raw/inbox/marp-teammarp-core The core of Marp converter.md"
agent-created: true
summary: "Marpit + oficjalne themy + math + emoji + auto-scaling — silnik domyślny dla Marp tooling"
---
# Marp Core

`@marp-team/marp-core` — rozszerzenie [[Marpit]] o praktyczne ficzery, oficjalne themy i kilka rozszerzeń składni. To silnik domyślny [[Marp CLI]] i Marp for VS Code.

## 🔗 Links

### Description
- Repo: https://github.com/marp-team/marp-core
- npm: https://www.npmjs.com/package/@marp-team/marp-core
- Themes: https://github.com/marp-team/marp-core/tree/main/themes

### Download or use

```bash
npm install --save @marp-team/marp-core
```

```js
import { Marp } from '@marp-team/marp-core'

const marp = new Marp()
const { html, css } = marp.render('# Hello, marp-core!')
```

## 🗒️ Description

### 🧩 Marp Markdown vs CommonMark

- Bazuje na CommonMark + GFM (tabele, strikethrough)
- Line breaks → `<br>` (jak w GFM)
- Heading slugs (`id` na `<h1>`–`<h6>`) włączone domyślnie
- Inline SVG slide, container queries, loose YAML — defaultowo on
- Niebezpieczne HTML elementy/atrybuty domyślnie blokowane (allowlist)

### 🧩 Built-in themes

| Theme | Style |
|-------|-------|
| `default` | Czysty, neutralny — fallback |
| `gaia` | Ciemny gradient, prezentacyjny |
| `uncover` | Minimal, typografia w centrum |

Wybór: `<!-- theme: gaia -->` w MD albo `--theme gaia` w CLI.

### 🧩 `size` global directive

```yaml
---
theme: gaia
size: 4:3
---
```

Built-in themy obsługują `16:9` (1280x720) i `4:3` (960x720). Custom themy definiują presety przez `@size` metadata w CSS — autor decyduje, jakich rozmiarów user może użyć.

### 🧩 Math typesetting

```markdown
Inline: $ax^2+bx+c$

$$
I_{xx}=\int\int_R y^2 f(x,y) \cdot dy\,dx
$$
```

Globalna dyrektywa `math: katex` (lub `mathjax`, default). MathJax → lepsze rendering, KaTeX → szybszy.

### 🧩 Auto-scaling

- **Fitting header** — `# <!-- fit -->` skaluje nagłówek do szerokości slajdu
- **Auto-shrink** — code block i KaTeX block kurczy się, żeby nie wyjść poza prawą krawędź

Wymaga `@auto-scaling` metadata w theme CSS i włączonego `inlineSVG`.

### 🧩 Emoji

`:smile:` lub Unicode 😄 → SVG przez [twemoji](https://github.com/jdecked/twemoji). Konfigurowalne (CDN/local, png/svg).

### 🧩 Constructor options

```js
const marp = new Marp({
  html: true,                    // albo allowlist object
  emoji: { shortcode: 'twemoji' },
  math: 'katex',
  minifyCSS: true,
  script: { source: 'cdn', nonce: '...' },
  slug: false,
  // + Marpit options
  looseYAML: false,
  markdown: { breaks: false },
})
```

Najistotniejsze:

- `html` — boolean lub allowlist (`{ a: ['href','target'], img: { src: sanitizer } }`)
- `script` — inline (default) vs CDN (lepsze pod CSP)
- `slug` — kontrola auto-`id` na nagłówkach (uważać na różnicę: `slug` = headingi, `anchor` = sekcje slajdów)

## ✍️ Reasoning for

Większość czasu używam Core przez [[Marp CLI]] albo VS Code, ale gdybym pisał własne narzędzie albo aplikację webową konsumującą decki, wołałbym `Marp` bezpośrednio. HTML allowlist + `script.source: 'cdn'` + nonce to musz przy embedowaniu cudzych decków na stronie z CSP.

## 🔗 Resources

- Marpit (parent framework): [[Marpit]]
- Built-in theme source: https://github.com/marp-team/marp-core/tree/main/themes
- HTML allowlist source: https://github.com/marp-team/marp-core/blob/main/src/html/allowlist.ts

![[ATTACHMENTS/435bd0dfbb09ffe90e94ead46d4b4f91_MD5.png]]

---
Template: [[templates/tool]]
