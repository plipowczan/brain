---
title: "marp-team/marpit: The skinny framework for creating slide deck from Markdown"
source: "https://github.com/marp-team/marpit"
author:
published:
created: 2026-04-13
description: "The skinny framework for creating slide deck from Markdown - marp-team/marpit"
tags:
  - "clippings"
---
[![[8a3b00665a054c4a232d61d3a06e30d7_MD5.png]]](https://github.com/marp-team/marpit/blob/main/docs/marpit.png#gh-light-mode-only)**Marpit**: Markdown slide deck framework

---

**Marpit** /mɑːrpɪt/ is the skinny framework for creating slide deck from Markdown. It can transform Markdown and CSS theme(s) to slide deck composed of static HTML and CSS and create a web page convertible into slide PDF by printing.

Marpit is designed to *output minimum assets for the slide deck*. You can use the bare assets as a logicless slide deck, but mainly we expect to integrate output with other tools and applications.

In fact, this framework is created for using as the base of [a core converter](https://github.com/marp-team/marp-core/) in [Marp ecosystem](https://github.com/marp-team/marp/).

## Features

### 📝 Marpit Markdown

We have extended several features into [markdown-it](https://github.com/markdown-it/markdown-it) parser to support writing awesome slides, such as [*Directives*](https://marpit.marp.app/directives) and [*Slide backgrounds*](https://marpit.marp.app/image-syntax?id=slide-backgrounds). Additional syntaxes place importance on a compatibility with general Markdown documents.

### 🎨 Theme CSS by clean markup

Marpit has the CSS theming system that can design slides everything. Unlike other slide frameworks, there are not any predefined classes and mixins. You have only to focus styling HTML elements by pure CSS. Marpit would take care of the selected theme's necessary conversion.

### 📐 Inline SVG slide (Experimental)

Optionally `<svg>` element can use as the container of each slide page. It can be realized the pixel-perfect scaling of the slide only by CSS, so handling slides in integrated apps become simplified. The isolated layer made by `<foreignObject>` can provide [*advanced backgrounds*](https://marpit.marp.app/image-syntax?id=advanced-backgrounds) for the slide with keeping the original Markdown DOM structure.

> We not provide any themes because Marpit is just a framework. You can use [@marp-team/marp-core](https://github.com/marp-team/marp-core/) if you want. It has the official themes, and practical features extended from Marpit.

## Getting started

See [the documentation of Marpit](https://marpit.marp.app/?id=getting-started) to get started.

## Contributing

Are you interested in contributing? See [CONTRIBUTING.md](https://github.com/marp-team/marpit/blob/main/.github/CONTRIBUTING.md) and [the common contributing guideline for Marp team](https://github.com/marp-team/.github/blob/master/CONTRIBUTING.md).

### Development

```
git clone https://github.com/marp-team/marpit
cd marpit

npm install
npm run build
```

## Sub-projects

- **[@marp-team/marpit-svg-polyfill](https://github.com/marp-team/marpit-svg-polyfill)** - A polyfill of the inline SVG slide in Safari based browsers.
- Yuki Hattori ([@yhatt](https://github.com/yhatt))

## License

This framework releases under the [MIT License](https://github.com/marp-team/marpit/blob/main/LICENSE).