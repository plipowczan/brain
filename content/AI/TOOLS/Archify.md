---
title: "Archify"
date: 2026-07-16
enableToc: true
openToc: true
tags: ["tool", "ai", "agent-skills", "diagrams", "claude-code", "codex", "opencode", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-07-16_tt-a1iarchify Any agent Skill generate beautiful architecture diagrams with darklight theme toggle and PNGJPEGWebPSVG export.md"
agent-created: true
summary: "tt-a1i/archify — cross-agent skill (Claude Code / Codex / opencode) that turns plain-English descriptions into self-contained HTML architecture, workflow, sequence, data-flow & lifecycle diagrams with dark/light toggle and up-to-4× PNG/JPEG/WebP/SVG export."
---
# Archify

🗒️ **[tt-a1i/archify](https://github.com/tt-a1i/archify)** — an [[Agent Skills|agent skill]] that turns a plain-English description of a system or process into a polished, self-contained HTML diagram you can open, theme-toggle, copy, and export at up to 4× resolution. Works in [[Claude Code]], Codex CLI, and opencode. MIT-licensed. Not a drawing editor and not a Mermaid theme — its job is turning technical intent into a communication artifact.

## Links
### Description
🧩 What it does:

- **Describe, don't draw** — English in, polished technical diagram out; no design skills needed.
- **Five diagram types** — architecture, workflow, sequence, data-flow, lifecycle (see table below).
- **Built-in dark/light toggle** — one click (shortcut `T`), persists across sessions.
- **Copy PNG to clipboard** — paste straight into Slack / Notion / GitHub (shortcut `E` for the export menu).
- **Ultra-crisp export** — PNG / JPEG / WebP rendered natively at up to 4× source resolution (no upsampling blur), or SVG for true vector.
- **Theme-following SVG** — exported SVGs ship both variable sets + `@media (prefers-color-scheme)`, so one SVG in a GitHub README follows the reader's system theme (no more two PNGs in a `<picture>`).
- **Semantic tech labels** — call a node `aws.lambda`, `postgres`, `redis`, `github-actions`, `openai`; Archify maps it to the right visual category without a full icon library.
- **Self-contained HTML** — zero dependencies; share by sending the file.
- **Iterate by chat** — "add Redis", "move auth to the left", "highlight the rollback path" while the source JSON stays in session.

### Download or use
```
npx skills add tt-a1i/archify -g
```
Installs across supported agents through the open-source [[Vercel Skills|skills CLI]] (`vercel-labs/skills`). Try without a permanent install:
```
npx skills use tt-a1i/archify@archify --agent codex   # or claude-code / opencode
```
Then: `Use archify to map this repository's runtime architecture.` Manual install = unzip `archify.zip` into the agent's skills dir (`~/.claude/skills/`, `~/.agents/skills/`, `~/.config/opencode/skills/`); no `npm install` needed.

## Reasoning for
Fills the **diagram / design blind spot** of a coding agent (cf. [[Extending Claude Code — Tools for Its Blind Spots]]): instead of hand-editing SVG or fighting generic auto-layout, the agent emits a typed JSON IR and a renderer produces a clean, portable artifact. Use it to:

- Turn a repo analysis into a **high-level runtime architecture** (8–12 core components, one primary path, external deps, trust boundaries — detail in cards, not more edges).
- Draw a **CI/CD workflow** with a clear happy path and restrained failure/rollback branches.
- Document a **data-flow / lineage** view with an explicit PII boundary.
- Ship a **theme-aware SVG** into a README so it follows the reader's light/dark preference.

## Diagram types
| Type | Best for | Prompt with |
| --- | --- | --- |
| **Architecture** | Components, services, storage, boundaries | Scope, core components, primary path |
| **Workflow** | CI/CD, approvals, tool calls, runbooks | Participants, order, branches, exceptions |
| **Sequence** | API calls, cache fallback, auth, async traces | Callers, callees, returns, timing |
| **Data Flow** | Pipelines, lineage, PII, downstream consumers | Sources, transforms, stores, boundaries |
| **Lifecycle** | State machines, retries, waits, terminal states | States, events, retry/cancel paths |

## How it works
Renderer-backed diagrams run a small, inspectable loop — the same one the packaged CLI exposes (`node bin/archify.mjs render|validate|check`):

| Step | What happens |
| --- | --- |
| **Generate JSON IR** | Agent writes a typed description instead of hand-editing final SVG. |
| **Validate** | Bundled standalone validators check the schema, no runtime deps. |
| **Render** | Selected renderer produces the HTML/SVG artifact. |
| **Check** | Layout + artifact checks catch bad coordinates, malformed SVG, unsafe routes. |
| **Iterate** | Targeted JSON edits applied while unrelated structure stays stable. |

Optional `"animation": "trace"` in `meta` adds a demo animation that respects `prefers-reduced-motion`. As of writing, Archify 2.10 uses typed JSON IR across all five modes.

## Preview
Same diagram, two themes, one click to switch:

| Dark | Light |
| --- | --- |
| ![[f4d30862a1f4d75e9760244c618f3ea9_MD5.png]] | ![[27a2abe52c1a63ca7142e9e2b7a6091b_MD5.png]] |

## Alternatives considered
- **Mermaid** — text-to-diagram, but generic auto-layout and limited emphasis control; Archify explicitly is *not* a Mermaid theme and chooses hierarchy/spacing/routes for the story.
- **[[CODE/TOOLS/Excalidraw|Excalidraw]]** — great for hand-drawn manual diagramming, but you draw it yourself; Archify generates from a description.
- **Generic auto-layout / WYSIWYG editors** — Archify's roadmap deliberately excludes Mermaid parsing, generic auto-layout, hosted sharing, and a WYSIWYG editor.

Archify is a fork/rewrite of [Cocoon-AI/architecture-diagram-generator](https://github.com/Cocoon-AI/architecture-diagram-generator) v1.0; the original visual language is credited there. Both MIT.

## Resources
- 🔗 Repo: [github.com/tt-a1i/archify](https://github.com/tt-a1i/archify)
- 🔗 Project page: [tt-a1i.github.io/archify](https://tt-a1i.github.io/archify/)
- 🔗 [Schema reference](https://github.com/tt-a1i/archify/blob/main/archify/schemas/README.md) · [CHANGELOG](https://github.com/tt-a1i/archify/blob/main/CHANGELOG.md) · [ROADMAP](https://github.com/tt-a1i/archify/blob/main/ROADMAP.md)
- 🔗 Skills CLI: [github.com/vercel-labs/skills](https://github.com/vercel-labs/skills)
- 📖 Related: [[Agent Skills]] · [[Awesome Agent Skills]] · [[Vercel Skills]] · [[Extending Claude Code — Tools for Its Blind Spots]]

---
Template: [[templates/tool]]
