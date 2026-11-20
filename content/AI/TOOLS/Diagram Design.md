---
title: "Diagram Design"
date: 2026-11-20
enableToc: true
openToc: true
tags: ["tool", "ai", "agent-skills", "diagrams", "design", "claude-code", "codex", "coding-agents", "open-source", "mit"]
type: tool
sources: ["_raw/processed/2026-11-20_cathrynlaverydiagram-design Editorial diagram design for Claude Code, Codex, GitHub Copilot, Cursor, Factory Droid, Qoder, and Pi. 45 diagram types. Self-contained HTML + SVG. No shadows. No Mermaid slop.md"]
agent-created: true
summary: "cathrynlavery/diagram-design — agent skill that draws 45 diagram types as one self-contained HTML + SVG file in a strict editorial style (one accent, 4px grid, no shadows) matched to your site's brand; redraws draw.io, Mermaid and Excalidraw files; MIT"
repo: "https://github.com/cathrynlavery/diagram-design"
---

# Diagram Design

🗒️ [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) is an [[Agent Skills|agent skill]] that draws diagrams as one self-contained HTML file with inline SVG, in your brand. You ask in plain words ("an architecture diagram of my app: frontend, backend, database, Redis cache"); the agent picks the diagram type, states its plan (type, pattern, size, what it will cut) and writes an `.html` file you open by double-clicking. Made by Cathryn Lavery (LittleMight), because Claude kept giving her generic rounded boxes for her blog posts.

## Links

### Description

🧩 **What it makes:**

- **45 diagram types**, each in three static variants (minimal light, minimal dark, full editorial): architecture, flowchart, sequence, state machine, ER, timeline, swimlane, quadrant, radar, Gantt, Sankey, fishbone, Wardley map, kanban, user journey, deployment, dependency graph, UML class, database schema, waterfall, architecture delta (before · changes · after), exploded axonometric, axonometric floor plan, heatmap, service blueprint and more. Some share a reference: Line covers slopegraph and bump charts, Scatter covers bubble and beeswarm.
- **No build step, no JavaScript, no external images.** The only network request is Google Fonts (Instrument Serif, Geist, Geist Mono); ask for system fonts and there is none.
- **Accessible by default:** `role="img"`, title and description slots, IDs prefixed per diagram so several SVGs can sit on one page.
- **Optional motion** (`reveal`, `step`, `loop`) with a complete static first frame and `prefers-reduced-motion` respected; the default is a static, script-free file.
- **Primitives:** 87 monochrome IT and cloud icons (Tabler, MIT; Simple Icons, CC0), an editorial annotation callout, a hand-drawn "sketchy" filter, a terminal-window frame.
- **Semantic patterns first:** when behaviour matters (queues and bottlenecks, policy traces, lifecycle phases…) the skill picks one of nine patterns before the visual type.

🎨 **The design system in one paragraph:** one accent colour for the one or two things the reader should see first, three font families, 1px hairlines, no shadows, corner radius at most 10px, and every coordinate, width and gap divisible by 4. The author calls the 4px rule non-negotiable, because it is what keeps the diagrams from looking AI-generated. Target density is 4/10, and her rule of thumb: "The highest-quality move is usually deletion."

**Brand onboarding.** Say "onboard diagram-design to https://yoursite.com" and the skill fetches the homepage, maps its background, text, card and CTA colours and its heading, body and code fonts to semantic tokens (`paper`, `ink`, `muted`, `accent`…), shows the diff and writes them to `references/style-guide.md`. It checks WCAG AA contrast and proposes fixes, and it reports exactly what it sampled. On the first diagram in a new project it stops and asks whether to onboard, because it won't ship the default skin into a branded project silently. For several clients, save each brand as a named profile in `~/.diagram-design/profiles/` and put a `.diagram-design` marker in each project.

**Import (redraw).** It redraws existing draw.io files (including compressed and embedded-in-PNG ones), Mermaid (`.mmd` or fenced blocks in Markdown) and Excalidraw scenes. Four dials fit the result to where it goes: **format** (HTML, SVG, PNG), **size** (doc-inline, slide 16×9, social card, print A3…; the type ramp scales too), **detail** (faithful ≤ 24 nodes, balanced ≤ 12, simplified ≤ 7) and **audience** (engineer, mixed, executive — it changes the wording, not the node count). Every import ends with a ledger of what was merged, collapsed or dropped. It only parses text: no rendering, browser or network.

**Export.** `/diagram-design:export-diagram file.html` gives a standalone SVG (fonts injected) or a PNG rendered with Playwright at 2×.

**Progressive disclosure.** At startup the agent sees only the skill's name; a routine request loads `SKILL.md` and one type reference, nothing else. Adding a 46th type changes nothing for the others.

### Download or use

Any Agent Skills host, through the [[Vercel Skills|skills CLI]]:

```
npx skills add cathrynlavery/diagram-design
```

In [[Claude Code]], the plugin marketplace adds updates and the slash commands (`/diagram-design:export-diagram`, `import-drawio`, `import-mermaid`, `import-excalidraw`, `profile`, `doctor`):

```
/plugin marketplace add cathrynlavery/diagram-design
/plugin install diagram-design@diagram-design
```

Claude Code leaves auto-update off for third-party marketplaces; turn it on in `/plugin` → Marketplaces. Codex, GitHub Copilot, Factory Droid, Qoder, Pi, Kiro and OpenCode have their own install paths in the README. Official builds come only from the author's repository; a listing under another name is an unofficial copy.

Gallery of all types: https://cathrynlavery.github.io/diagram-design/

## Reasoning for

For the diagram I am going to publish: a figure in a blog post, a client deck or a slide in a talk (see [[Slides for Technical Talks]]), where it should look like my brand and not like generic boxes. The README is honest about the downsides, and I take them as the rules for when to use it:

- Output quality depends on the model, and the same prompt can lay out differently twice.
- The result is not an editable source: no text to diff in a pull request, no canvas to drag a box on. For docs that live in Git and change every sprint, Mermaid is still the better fit.
- Its "when not to draw" list is a good filter anyway: a list belongs in a table or bullets, a before/after in a table, a one-box "diagram" in a sentence. Ask first whether a reader would learn more from the diagram than from a well-written paragraph.

Next to [[Archify]]: Archify turns a typed JSON description into a verifiable, interactive system map; Diagram Design produces a static editorial figure in 45 shapes, matched to a brand. Both write one self-contained HTML file. Client process maps come out of the Excalidraw skills ([[CODE/TOOLS/Excalidraw|Excalidraw]]); Diagram Design can redraw such a file for a deck.

Checked 2026-11-20: MIT, about 69k stars, last push 2026-11-19; releases are tracked in `CHANGELOG.md`, not as GitHub releases.

## Alternatives considered

- [[Archify]] — interactive, validated system maps from a JSON description
- [[CODE/TOOLS/Excalidraw|Excalidraw]] — hand-drawn style, an editable canvas you draw yourself
- Mermaid / PlantUML — text in Git that diffs and renders on GitHub; automatic layout, renderer theme
- draw.io — manual, editable `.drawio` files
- [[Impeccable]] and [[UI UX Pro Max]] — design skills for interfaces, not diagrams

## Resources

- 🔗 Repo: https://github.com/cathrynlavery/diagram-design
- 🔗 Website: https://diagramdesign.dev/
- 🔗 Gallery: https://cathrynlavery.github.io/diagram-design/
- 🔗 Changelog: https://github.com/cathrynlavery/diagram-design/blob/main/CHANGELOG.md
- 🔗 Author's blog: https://littlemight.com/
- 📖 Related: [[Agent Skills]], [[Vercel Skills]], [[AI Tools Map]]

---
Template: [[templates/tool]]
