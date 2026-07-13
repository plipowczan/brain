---
title: "Tailwind CSS"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "css", "styling", "frontend", "design-system", "utility-first"]
type: tool
agent-created: true
summary: "Utility-first CSS framework — style in markup with composable classes; the styling layer under every Next.js app I build, and the foundation shadcn/ui sits on"
---

# Tailwind CSS

A utility-first CSS framework: instead of writing custom stylesheets, you compose designs directly in markup from small single-purpose classes (`flex`, `pt-4`, `text-lg`, `bg-slate-900`). The build step scans your files and emits only the classes you actually used, so production CSS stays tiny. **Tailwind v4** moved to a Rust-based engine and CSS-first configuration (`@theme` in CSS rather than a JS config), making it faster and simpler to set up.

## Links

### Description

- **Utility classes** — spacing, color, typography, fl/grid layout, etc., as composable atoms.
- **Responsive & state variants** — `md:`, `hover:`, `dark:`, `focus-visible:` prefixes apply utilities conditionally.
- **Design tokens** — colors, spacing, fonts defined once (v4: in CSS via `@theme`) and referenced everywhere for consistency.
- **JIT engine** — generates styles on demand; in v4 a rewritten engine makes builds near-instant.
- **Tree-shaking by default** — unused utilities never reach the bundle.
- **Plugin ecosystem** — typography, forms, container queries, animations.

### Download or use

```bash
# Tailwind v4 with Vite/Next.js
npm i tailwindcss @tailwindcss/postcss
# then in your CSS:  @import "tailwindcss";
```

- Site/docs: [tailwindcss.com](https://tailwindcss.com/)
- Repo: [github.com/tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss)

## Reasoning for

Tailwind is the styling layer under essentially every app I ship: [[Qamera AI]], [[AGRE]], [[Travelcast AI]]'s website, and the [[Value Builders]] MVP track all use Tailwind v4. Two reasons it sticks. First, it kills the context-switch between markup and a separate stylesheet — you read a component and see exactly how it looks. Second, it's the substrate [[shadcn-ui|shadcn/ui]] is built on: shadcn components are just [[React]] + Tailwind classes you own, so Tailwind fluency is what makes that workflow productive. For client work and teaching, utility classes also lower the barrier — there's no bespoke CSS architecture to learn before someone can contribute.

## Alternatives considered

- **[[shadcn-ui|shadcn/ui]]** — not an alternative but the layer above: it ships accessible component recipes written *in* Tailwind.
- **CSS Modules / vanilla CSS** — full control and no class-soup, but you rebuild spacing/color consistency by hand every project.
- **styled-components / Emotion (CSS-in-JS)** — co-locates styles in JS; runtime cost and worse RSC/[[Next.js]] App Router fit pushed me toward Tailwind.
- **Bootstrap / MUI** — opinionated component look that's hard to escape; Tailwind keeps design ownership with me.

## Resources

- 📘 [Tailwind docs](https://tailwindcss.com/docs)
- 🆕 [Tailwind v4 announcement](https://tailwindcss.com/blog/tailwindcss-v4)
- 🎨 [Play (online playground)](https://play.tailwindcss.com/)

---
Template: [[templates/tool]]
