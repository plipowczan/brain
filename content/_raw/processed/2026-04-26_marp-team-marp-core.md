---
title: "marp-team/marp-core: The core of Marp converter"
source: "https://github.com/marp-team/marp-core"
author:
published:
created: 2026-04-13
description: "The core of Marp converter. Contribute to marp-team/marp-core development by creating an account on GitHub."
tags:
  - "clippings"
---
## @marp-team/marp-core

In order to use on Marp tools, we have extended from the slide deck framework **[Marpit](https://github.com/marp-team/marpit)**. You can use the practical Markdown syntax, advanced features, and official themes.

## Install

```
npm install --save @marp-team/marp-core
```

## Usage

We provide `Marp` class, that is inherited from [Marpit](https://github.com/marp-team/marpit).

```
import { Marp } from '@marp-team/marp-core'

// Convert Markdown slide deck into HTML and CSS
const marp = new Marp()
const { html, css } = marp.render('# Hello, marp-core!')
```

## Features

*We will only explain features extended in marp-core.* Please refer to [Marpit framework](https://marpit.marp.app/) if you want to know the basic features.

---

### Marp Markdown

**Marp Markdown** is a custom Markdown flavor based on [Marpit](https://marpit.marp.app/) and [CommonMark](https://commonmark.org/). Following are principle differences from the original:

- **Marpit**
	- Enabled [inline SVG slide](https://marpit.marp.app/inline-svg), [CSS container query support and loose YAML parsing](https://marpit-api.marp.app/marpit#Marpit) by default.
- **CommonMark**
	- For making secure, using some insecure HTML elements and attributes are denied by default.
		- Support [table](https://github.github.com/gfm/#tables-extension-) and [strikethrough](https://github.github.com/gfm/#strikethrough-extension-) syntax, based on [GitHub Flavored Markdown](https://github.github.com/gfm/).
		- Line breaks in paragraph will convert to `<br>` tag.
		- Slugification for headings (assigning auto-generated `id` attribute for `<h1>` - `<h6>`) is enabled by default.

---

### Built-in official themes

We provide built-in official themes for Marp. See more details in [themes](https://github.com/marp-team/marp-core/blob/main/themes).

| Default | Gaia | Uncover |
| --- | --- | --- |
| [![[435bd0dfbb09ffe90e94ead46d4b4f91_MD5.png]]](https://github.com/marp-team/marp-core/blob/main/themes) | [![[61200d1f2acf6905da00daf43abe9758_MD5.png]]](https://github.com/marp-team/marp-core/blob/main/themes) | [![[322e53c68a367ef6dd9850d65dcb943d_MD5.png]]](https://github.com/marp-team/marp-core/blob/main/themes) |
| `<!-- theme: default -->` | `<!-- theme: gaia -->` | `<!-- theme: uncover -->` |

---

### size global directive

Do you want a traditional 4:3 slide size? Marp Core adds the support of `size` global directive. The extended theming system can switch the slide size easier.

```
---
theme: gaia
size: 4:3
---

# A traditional 4:3 slide
```

[Built-in themes for Marp](https://github.com/marp-team/marp-core/blob/main/themes) have provided `16:9` (1280x720) and `4:3` (960x720) preset sizes.

#### Define size presets in custom theme CSS

If you want to use more size presets in your own theme, you have to define `@size` metadata(s) in theme CSS. [Learn in the document of theme metadata for Marp Core](https://github.com/marp-team/marp-core/blob/main/themes#metadata-for-additional-features).

Theme author does not have to worry an unintended design being used with unexpected slide size because user only can use pre-defined presets by author.

---

### Emoji support

Emoji shortcode (like `:smile:`) and Unicode emoji 😄 will convert into the SVG vector image provided by [twemoji](https://github.com/jdecked/twemoji) . It could render emoji with high resolution.

---

### Math typesetting

We have [Pandoc's Markdown style](https://pandoc.org/MANUAL.html#math) math typesetting support. Surround your formula by `$...$` to render math as inline, and `$$...$$` to render as block.

| Markdown | Rendered slide |
| --- | --- |
| ``` Render inline math such as $ax^2+bc+c$.  $$ I_{xx}=\int\int_Ry^2f(x,y)\cdot{}dydx $$  $$ f(x) = \int_{-\infty}^\infty     \hat f(\xi)\,e^{2 \pi i \xi x}     \,d\xi $$ ``` | [![[57b14bed337ca4683d35245cb942a1a8_MD5.png]]](https://user-images.githubusercontent.com/3993388/142782335-15bce585-68f1-4c89-8747-8d11533f3ca6.png) |

You can choose using library for math from [MathJax](https://www.mathjax.org/) and [KaTeX](https://khan.github.io/KaTeX/) in [`math` global directive](#math-global-directive) (or [JS constructor option](#math-constructor-option)). By default, we prefer MathJax for better rendering and syntax support, but KaTeX is faster rendering if you had a lot of formulas.

#### math global directive

Through `math` global directive, Marp Core is supporting to declare math library that will be used within current Markdown.

Set **`mathjax`** or **`katex`** in the `math` global directive like this:

```
---
# Declare to use KaTeX in this Markdown
math: katex
---

$$
\begin{align}
x &= 1+1 \tag{1} \\
  &= 2
\end{align}
$$
```

If not declared, Marp Core will use MathJax to render math. But we recommend to declare the library whenever to use math typesetting.

> [!warning] Warning
> The declaration of math library is given priority over [`math` JS constructor option](#math-constructor-option), but you cannot turn on again via `math` global directive if disabled math typesetting by the constructor.

---

### Auto-scaling features

Marp Core has some auto-scaling features:

- [**Fitting header**](#fitting-header): Get bigger heading that fit onto the slide by `# <!--fit-->`.
- [**Auto-shrink the code block and KaTeX block**](#auto-shrink-block): Prevent sticking out the block from the right of the slide.

Auto-scaling is available if defined [`@auto-scaling` metadata](https://github.com/marp-team/marp-core/blob/main/themes#metadata-for-additional-features) in an using theme CSS.

```
/*
 * @theme foobar
 * @auto-scaling true
 */
```

All of [Marp Core's built-in themes](https://github.com/marp-team/marp-core/blob/main/themes) are ready to use full-featured auto scalings. If you're the theme author, you can control target elements which enable auto-scaling [by using metadata keyword(s).](https://github.com/marp-team/marp-core/blob/main/themes#metadata-for-additional-features)

This feature depends to inline SVG, so note that it will not working if disabled [Marpit's `inlineSVG` mode](https://github.com/marp-team/marpit#inline-svg-slide-experimental) by setting `inlineSVG: false` in constructor option.

> [!warning] Warning
> Auto-scaling is designed for horizontal scaling. In vertical, the scaled element still may stick out from bottom of slide if there are a lot of contents around it.

#### Fitting header

When the headings contains `<!-- fit -->` comment, the size of headings will resize to fit onto the slide size.

```
# <!-- fit --> Fitting header
```

This syntax is similar to [Deckset's `[fit]` keyword](https://docs.decksetapp.com/English.lproj/Formatting/01-headings.html), but we use HTML comment to hide a fit keyword on Markdown rendered as document.

#### Auto-shrink the block

Some of blocks will be shrunk to fit onto the slide. It is useful preventing stuck out the block from the right of the slide.

|  | Traditional rendering | Auto-scaling |
| --- | --- | --- |
| **Code block** | [![[a796529c14596db01be529a97b63c383_MD5.png]]](https://camo.githubusercontent.com/345014bb31e0ba16d5c55397d3a61b2ca493338acb854b5341c447b431fa83c6/68747470733a2f2f6269742e6c792f324c79456e6d69) | [![[d0598ee12178b7e11541277f91fa22fe_MD5.png]]](https://camo.githubusercontent.com/55a158f2c423be5f6504250b41b4a728f71106e9eb48880029b9c7080655a029/68747470733a2f2f6269742e6c792f324e347957515a) |
| **KaTeX math block** | [![[cc6655fc54659fe58a07f158a104e5ca_MD5.png]]](https://camo.githubusercontent.com/d5e91a5ca27fd8ee9f617c2640f4d55e0e49ce32a586ad88ab01a9e9040aec06/68747470733a2f2f6269742e6c792f324e586f487557) | [![[2a027e67858befd7821cf539011c5571_MD5.png]]](https://camo.githubusercontent.com/f16c9022c7bbefc2a1ec66e81b6018fef60d90010358869c323e46337f601a51/68747470733a2f2f6269742e6c792f324d364c79436b) |

> [!note] Note
> MathJax math block will always be scaled without even setting `@auto-scaling` metadata.

---

## Constructor options

You can customize a behavior of Marp parser by passing an options object to the constructor. You can also pass together with [Marpit constructor options](https://marpit-api.marp.app/marpit#Marpit).

> [!note] Note
> [Marpit's `markdown` option](https://marpit-api.marp.app/marpit#Marpit) is accepted only object options because of always using CommonMark.

```
const marp = new Marp({
  // marp-core constructor options
  html: true,
  emoji: {
    shortcode: true,
    unicode: false,
    twemoji: {
      base: '/resources/twemoji/',
    },
  },
  math: 'katex',
  minifyCSS: true,
  script: {
    source: 'cdn',
    nonce: 'xxxxxxxxxxxxxxx',
  },
  slug: false,

  // It can be included Marpit constructor options
  looseYAML: false,
  markdown: {
    breaks: false,
  },
})
```

### html: boolean | object

Setting whether to render raw HTML in Markdown. It's an alias to `markdown.html` ([markdown-it option](https://markdown-it.github.io/markdown-it/#MarkdownIt.new)) but has additional feature about HTML allowlist.

- (default): Use Marp's default allowlist.
- `true`: The all HTML will be allowed.
- `false`: All HTML except supported in Marpit Markdown will be disallowed.

By passing `object`, you can set the allowlist to specify allowed tags and attributes.

```
// Specify tag name as key, and attributes to allow as string array.
{
  a: ['href', 'target'],
  br: [],
}
```
```
// You may use custom attribute sanitizer by passing object.
{
  img: {
    src: (value) => (value.startsWith('https://') ? value : '')
  }
}
```

By default, Marp Core allows known HTML elements and attributes that are considered as safe. That is defined as a readonly `html` member in `Marp` class. [See the full default allowlist in the source code.](https://github.com/marp-team/marp-core/blob/main/src/html/allowlist.ts)

> [!note] Note
> Whatever any option is selected, `<!-- HTML comment -->` and `<style>` tags are always parsed by Marpit for directives / tweaking style.

### emoji: object

Setting about emoji conversions.

- **`shortcode`**: *`boolean` | `"twemoji"`*
	- By setting `false`, it does not convert any emoji shortcodes.
		- By setting `true`, it converts emoji shortcodes into Unicode emoji. `:dog:` → 🐶
		- By setting `"twemoji"` string, it converts into twemoji vector image. `:dog:` → *(default)*
- **`unicode`**: *`boolean` | `"twemoji"`*
	- It can convert Unicode emoji into twemoji when setting `"twemoji"`. 🐶 → *(default)*
		- If you not want this aggressive conversion, please set `false`.
- **`twemoji`**: *`object`*
	- **`base`**: *`string`* - Corresponds to [twemoji's `base` option](https://github.com/twitter/twemoji#object-as-parameter). If not specified, Marp Core will use [online emoji images through jsDelivr CDN](https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/).
		- **`ext`**: *`"svg"` | `"png"`* - Setting the file type of twemoji images. *(`svg` by default)*

> **For developers:** When you setting `unicode` option as `true`, Markdown parser will convert Unicode emoji into tokens internally. The rendering result is same as in `false`.

### math: boolean | "mathjax" | "katex" | object

Enable or disable [math typesetting](#math-typesetting) syntax and [`math` global directive](#math-global-directive).

You can choose the default library for math by passing **`"mathjax"`** (default) or **`"katex"`**, and modify more settings by passing an object of sub-options.

- **`lib`**: *`"mathjax"` | `"katex"`*
	- Choose the default library for math typesetting. *(`mathjax` by default)*
- **`katexOption`**: *`object`*
	- Options that will be passed to KaTeX. Please refer to [KaTeX document](https://khan.github.io/KaTeX/docs/options.html).
- **`katexFontPath`**: *`string` | `false`*
	- By default, Marp Core will use [online web-font resources through jsDelivr CDN](https://cdn.jsdelivr.net/npm/katex@latest/dist/fonts/). You have to set path to fonts directory if you want to use local resources. If you set `false`, we will not manipulate the path (Use KaTeX's original path: `fonts/KaTeX_***-***.woff2`).

### minifyCSS: boolean

Enable or disable minification for rendered CSS. `true` by default.

### script: boolean | object

Setting about an injected helper script for the browser context. This script is necessary for applying [WebKit polyfill](https://github.com/marp-team/marpit-svg-polyfill) and rendering [auto-scaled elements](#auto-scaling-features) correctly.

- **`true` (default)**: Inject the inline helper script into after the last of slides.
- **`false`**: Don't inject helper script. Developer must execute a helper script manually, exported in [`@marp-team/marp-core/browser`](https://github.com/marp-team/marp-core/blob/main/src/browser.ts). Requires bundler such as [webpack](https://webpack.js.org/). It's suitable to the fully-controlled tool such as [Marp Web](https://github.com/marp-team/marp-web).

You can control details of behavior by passing `object`.

- **`source`**: *`string`* - Choose the kind of script.
	- **`inline`**: Inject the inline script. It would work correctly also in the environment that there is not network. (default)
		- **`cdn`**: Inject script referred through [jsDelivr CDN](https://www.jsdelivr.com/). It's better choice on the restricted environment by [CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).
- **`nonce`**: *`string`* - Set [`nonce` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-nonce) of `<script>`.

### slug: boolean | function | object

Configure slugification for headings. By default, Marp Core tries to make the slug by the similar way to GitHub. It should be compatible with [Markdown Language Server](https://code.visualstudio.com/blogs/2022/08/16/markdown-language-server).

- **`true` (default)**: Assign auto-generated `id` attribute from the contents of `<h1>` - `<h6>` headings.
- **`false`**: Disable auto-assigning slug to headings.
- *`function`*: Set the custom slugifier function, that takes one argument: the content of the heading. It must return a generated slug string.

You can control details of behavior by passing `object`.

- **`slugifier`**: *`function`* - Set the custom slugifier function.
- **`postSlugify`**: *`function`* - Set the post-process function after generated a slug. The function takes 2 arguments, the string of generated slug and the index of the same slug, and must return a string for assigning to `id` attribute of the heading.
	By default, Marp Core applies the post-process to avoid assigning duplicated `id` s in the document: ``(slug, index) => (index > 0 ? `${slug}-${index}` : slug)``
	Assigning the custom post-process function is also helpful to append the custom prefix and suffix to the generated slug: `` (slug, i) => `prefix:${slug}:${i}` ``

> [!note] Note
> Take care not to confuse Marp Core's `slug` option and [Marpit's `anchor` option](https://marpit-api.marp.app/marpit#:~:text=Description-,anchor,-boolean%20%7C%20Marpit). `slug` is for the Markdown headings, and `anchor` is for the slide elements.
> 
> `Marp` class is extended from `Marpit` class so you can customize both options in the constructor. To fully disable auto-generated `id` attribute, set both options as `false`. (This is important to avoid breaking your Web application by user's Markdown contents)

## Contributing

Are you interested in contributing? Please see [CONTRIBUTING.md](https://github.com/marp-team/marp-core/blob/main/.github/CONTRIBUTING.md) and [the common contributing guideline for Marp team](https://github.com/marp-team/.github/blob/master/CONTRIBUTING.md).

- Yuki Hattori ([@yhatt](https://github.com/yhatt))

## License

This package releases under the [MIT License](https://github.com/marp-team/marp-core/blob/main/LICENSE).