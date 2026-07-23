---
title: "Archify"
date: 2026-07-16
enableToc: true
openToc: true
tags: ["tool", "ai", "agent-skills", "diagrams", "claude-code", "codex", "opencode", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-07-23_tt-a1iarchify Agent skill for beautiful, verifiable architecture, workflow, sequence, data-flow, and lifecycle diagrams—self-contained HTML with motion and crisp export.md"
agent-created: true
agent-reviewed: 2026-07-23
summary: "tt-a1i/archify — cross-agent skill (Claude Code / Cursor / Codex / opencode) that turns plain-English descriptions into verifiable, interactive self-contained HTML architecture, workflow, sequence, data-flow & lifecycle diagrams; 2.12 adds Architecture Delta review, validation receipts, share cards, and grounded interaction (reach/route/lens/stories)."
---
# Archify

🗒️ **[tt-a1i/archify](https://github.com/tt-a1i/archify)** — an [[Agent Skills|agent skill]] that turns a plain-English description of a system or process (or a whole repository) into a polished, **interactive, verifiable** self-contained HTML system map you can open, present, theme-toggle, copy, and export at up to 4× resolution. Works in [[Claude Code]], [[Cursor]], Codex CLI, and opencode. MIT-licensed. Not a drawing editor and not a Mermaid theme — its job is turning technical intent into a communication artifact you can trust: every interaction (search, reach tracing, route probing, guided stories) reuses authored topology instead of inventing it.

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
- **Grounded interaction (2.12)** — semantic search (`/`), upstream/downstream reach tracing, directed route probe (`R`), role comparison lens (`L`), overview radar (`M`), guided stories (`P`), Presentation Stage (`F`); deep links restore exact state (`#focus=`, `#route=a~b`, `#lens=`, `#view=`).
- **Architecture Delta review** — compare two validated snapshots as Before / Delta / After with exact added/removed/changed/moved/rerouted facts and a machine receipt: `node archify/bin/archify.mjs compare architecture base.json head.json delta.html --json`. Viewer-only — no impact/risk/merge-safety inference.
- **Share cards & WebM** — canonical 1200×630 diagram, route, and reach share cards for READMEs/socials; browser-native WebM recording.
- **Evidence-backed nodes (opt-in)** — Architecture nodes marked `SRC n` open Git-verified files and line ranges pinned to one public commit; ordinary artifacts stay source-free.
- **Three visual presets** — `classic` (default), `signal-flow`, `blueprint`; motion is explicit (`"animation": "trace"`), finite, respects `prefers-reduced-motion`, never enters canonical exports.
- **deployment-ownership profile (opt-in)** — for production deployment reviews, fails closed when owners, single-region placement, private DB scope, or named boundary crossings are missing; validates authored facts, not live infra.

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
Renderer-backed diagrams run a small, inspectable loop — the same one the packaged zero-dependency CLI exposes (`node bin/archify.mjs guide|validate|preview|deliver|compare|doctor|demo`):

| Step | What happens |
| --- | --- |
| **Generate JSON IR** | Agent writes a typed description instead of hand-editing final SVG. |
| **Validate** | Schema, layout, HTML/SVG, route, and label-clearance checks must all pass; failures come as machine-readable JSON with stable rule codes, the exact subject, measured evidence, and only supported repair controls — a repair receipt, not a stack trace. |
| **Preview (optional)** | Loopback-only (`127.0.0.1`) desktop loop watches one JSON file, reloads only verified revisions, keeps the last-good diagram visible through failed saves. |
| **Deliver** | A same-directory candidate is rendered and checked; only a passing artifact atomically replaces the target (`deliver --open` for one-shot local handoff). |
| **Iterate** | Targeted JSON edits applied while unrelated structure stays stable; the Skill caps repair at two focused correction rounds. |

Not sure which diagram type fits? `node bin/archify.mjs guide "Show an API request with Redis cache miss"` recommends one. As of writing, Archify **2.12** ships typed JSON IR across all five modes, a real-repository proof case ([mco-org/mco](https://github.com/mco-org/mco) traced at a pinned commit), an 11-scenario [Proof Lab](https://tt-a1i.github.io/archify/gallery.html) with validation receipts, and explicit `standard` / `showcase` quality profiles.

## Preview
Three visual presets (Signal Flow · Blueprint · Classic) — real generated artifacts, not mockups:

![[c856d36189cbcac4c6e3d86867597671_MD5.gif]]

Same diagram, two themes, one click to switch:

| Dark | Light |
| --- | --- |
| ![[f4d30862a1f4d75e9760244c618f3ea9_MD5.png]] | ![[27a2abe52c1a63ca7142e9e2b7a6091b_MD5.png]] |

Architecture Delta compares two validated snapshots for design/PR review:

![[ef3e025fa6c996320f0b8def61363769_MD5.jpg]]

## Alternatives considered
- **Mermaid** — text-to-diagram, but generic auto-layout and limited emphasis control; Archify explicitly is *not* a Mermaid theme and chooses hierarchy/spacing/routes for the story.
- **[[CODE/TOOLS/Excalidraw|Excalidraw]]** — great for hand-drawn manual diagramming, but you draw it yourself; Archify generates from a description.
- **Generic auto-layout / WYSIWYG editors** — Archify's roadmap deliberately excludes Mermaid parsing, generic auto-layout, hosted sharing, and a WYSIWYG editor.

Archify is a fork/rewrite of [Cocoon-AI/architecture-diagram-generator](https://github.com/Cocoon-AI/architecture-diagram-generator) v1.0; the original visual language is credited there. Both MIT.

## Resources
- 🔗 Repo: [github.com/tt-a1i/archify](https://github.com/tt-a1i/archify)
- 🔗 Project page: [tt-a1i.github.io/archify](https://tt-a1i.github.io/archify/) · [Scenario guide](https://tt-a1i.github.io/archify/guide.html) · [Proof Lab](https://tt-a1i.github.io/archify/gallery.html)
- 🔗 [Schema reference](https://github.com/tt-a1i/archify/blob/main/archify/schemas/README.md) · [SKILL.md contract](https://github.com/tt-a1i/archify/blob/main/archify/SKILL.md) · [CHANGELOG](https://github.com/tt-a1i/archify/blob/main/CHANGELOG.md) · [ROADMAP](https://github.com/tt-a1i/archify/blob/main/ROADMAP.md)
- 🔗 Skills CLI: [github.com/vercel-labs/skills](https://github.com/vercel-labs/skills)
- 📖 Related: [[Agent Skills]] · [[Awesome Agent Skills]] · [[Vercel Skills]] · [[Extending Claude Code — Tools for Its Blind Spots]]

---
Template: [[templates/tool]]
