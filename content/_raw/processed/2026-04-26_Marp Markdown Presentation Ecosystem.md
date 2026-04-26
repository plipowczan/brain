---
title: "Marp: Markdown Presentation Ecosystem"
source: "https://marp.app/"
author:
published:
created: 2026-04-13
description: "Marp (also known as the Markdown Presentation Ecosystem) provides an intuitive experience for creating beautiful slide decks. You only have to focus on writing your story in a Markdown document."
tags:
  - "clippings"
---
## Markdown Presentation Ecosystem

[Find Marp tools on GitHub!](https://github.com/marp-team/marp)

## Create beautiful slide decks using an intuitive Markdown experience

Marp (also known as the Markdown Presentation Ecosystem) provides an intuitive experience for creating beautiful slide decks. You only have to focus on writing your story in a Markdown document.

![[64bb5310e7d9e3b96dd4414854654c83_MD5.svg]]

The slides above are from generated directly from Marp Core

## Based on CommonMark

If you know how to write a document with Markdown, you already know how to write a Marp slide deck. Marp's format is based on [CommonMark](https://commonmark.org/), a consistent Markdown specification. The only important difference is [a ruler `---` for splitting pages.](https://marpit.marp.app/markdown)

## Directives and extended syntax

Sometimes simple text content isn't enough to emphasize your voice, so Marp supports a variety of [directives](https://marpit.marp.app/directives) and extended syntax ([image syntax](https://marpit.marp.app/image-syntax), [math typesetting](https://github.com/marp-team/marp-core#math-typesetting), [auto-scaling](https://github.com/marp-team/marp-core#auto-scaling-features), etc...) to create beautiful slides.

## Built-in themes and CSS theming

[Our core engine](https://github.com/marp-team/marp-core/) has [3 built-in themes called `default`, `gaia`, and `uncover`](https://github.com/marp-team/marp-core/tree/main/themes), to tell your story beautifully. If you'd rather customize your design, you can use Marp to [tweak styles with Markdown](https://marpit.marp.app/theme-css?id=tweak-style-through-markdown), or [create your own Marp theme with plain CSS](https://marpit.marp.app/theme-css).

## Export to HTML, PDF, and PowerPoint

Have you finished writing? It's time to share your deck! Marp can convert Markdown into presentation-ready HTML, PDF and PowerPoint files directly! (Powered by [Google Chrome](https://www.google.com/chrome/) / [Chromium](https://www.chromium.org/Home))

## Marp family: The official toolset

The Marp ecosystem contains a rich toolset to assist your work. [**Marp for VS Code**](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) is an extension that allows you to edit and preview slide Markdown and custom theming within VS Code. [**Marp CLI**](https://github.com/marp-team/marp-cli/) is a command line tool allows you to convert Markdown with a simple CLI interface. [... and much more!](https://github.com/marp-team/marp/)

## Pluggable architecture

As a matter of fact, *Marp is essentially just a converter for Markdown.* The Marp ecosystem is built on [**the Marpit framework**](https://marpit.marp.app/), a skinny framework for creating HTML/CSS slide decks. It has a pluggable architecture and any developer can [extend features via plugins](https://marpit.marp.app/usage?id=extend-marpit-by-plugins).

## Fully open-source

The Marp team loves open source! All tools and related libraries are built by [the Marp team](https://github.com/marp-team) and are MIT-licensed.

### Tools and integrations

#### [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode)

Create slide decks written in Marp Markdown right in VS Code

![[35b55e3a328f1d531b6431bc6f8e9fef_MD5.png]]

Marp for VS Code

Enhance VS Code's Markdown preview pane to support writing your beautiful presentations. You can preview the slide deck output as soon as you edit its Markdown.

[VS Marketplace](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) [GitHub](https://github.com/marp-team/marp-vscode)

#### [Marp CLI](https://github.com/marp-team/marp-cli)

A CLI interface for Marp and Marpit based converters

![[b62d025c897eea4a91809a0124452577_MD5.png]]

The Marp CLI is the swiss army knife of the Marp ecosystem. Convert your Markdown into various formats, watch changes, launch server for on-demand conversion, and customize the core engine.

[Releases](https://github.com/marp-team/marp-cli/releases) [npm](https://www.npmjs.com/package/@marp-team/marp-cli) [GitHub](https://github.com/marp-team/marp-cli)

### For developers

#### [Marp Core](https://github.com/marp-team/marp-core)

The core of the Marp converter

All official Marp tooling uses this core as the engine. It is based on the Marpit framework and includes some extra features to help create beautiful slide decks.

[npm](https://www.npmjs.com/package/@marp-team/marp-core) [GitHub](https://github.com/marp-team/marp-core)

#### [Marpit framework](https://marpit.marp.app/)

The skinny framework for creating slide decks from Markdown

Marpit (independent from Marp) is the framework that transforms Markdown and CSS themes to slide decks composed of HTML/CSS. It is optimized to output only the minimum set of assets required.

[Documentation](https://marpit.marp.app/) [npm](https://www.npmjs.com/package/@marp-team/marpit) [GitHub](https://github.com/marp-team/marpit)

Find all of the Marp tools, integrations, and examples in the GitHub repository!

[Check out Marp GitHub repository...](https://github.com/marp-team/marp/)