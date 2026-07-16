---
title: "tt-a1i/archify: Any agent Skill: generate beautiful architecture diagrams with dark/light theme toggle and PNG/JPEG/WebP/SVG export"
source: "https://github.com/tt-a1i/archify"
author:
published:
created: 2026-07-16
description: "Any agent Skill: generate beautiful architecture diagrams with dark/light theme toggle and PNG/JPEG/WebP/SVG export - tt-a1i/archify"
tags:
  - "clippings"
---
**English** · [简体中文](https://github.com/tt-a1i/archify/blob/main/README_ZH.md)

[![[0fef5e5290c1ee23a47eb21f67ca4f3d_MD5.svg]]](https://trendshift.io/repositories/31352?utm_source=repository-badge&utm_medium=badge&utm_campaign=badge-repository-31352)

[![[63109cd4d26c861cba88d5f7338024ec_MD5.png]]](https://github.com/tt-a1i/archify/blob/main/docs/assets/archify-readme-hero.png)

## Archify

**Generate beautiful architecture, technical workflow, sequence, data-flow, and lifecycle diagrams in chat. Switch dark / light. Copy to clipboard or export crisp up-to-4× PNG / JPEG / WebP / SVG.**

Archify is an agent skill for Claude, Codex CLI, and opencode. It turns a plain-English description of your system or process into a polished, self-contained technical diagram — a single HTML file you can open, toggle themes on, copy to the clipboard, and export at maximum resolution.

- **No design skills needed** — describe your architecture in English, get a diagram
- **Workflow, sequence, data-flow, and lifecycle diagrams too** — technical flows, approvals, tool calls, CI/CD, runbooks, request call chains, data pipelines, PII boundaries, and state machines can be drawn
- **Built-in theme toggle** — one click between dark and light, persists across sessions
- **Copy PNG to clipboard** — one click, paste straight into Slack / Notion / GitHub
- **Ultra-crisp image export** — PNG / JPEG / WebP rendered natively at up to 4× source resolution (no upsampling blur), or SVG for true vector
- **SVG follows system dark/light** — exported SVGs ship with both variable sets + `@media (prefers-color-scheme)`, so dropping one into a GitHub README makes it follow the reader's color preference (no more two PNGs wrapped in `<picture>`)
- **Validation loop built in** — renderer-backed diagrams go through JSON schema validation, layout checks, HTML/SVG artifact checks, and targeted iteration
- **Semantic tech labels** — describe components as `aws.lambda`, `postgres`, `redis`, `github-actions`, `openai`, etc.; Archify maps them to the right visual category without needing a full icon library
- **Self-contained HTML** — the generated file has zero dependencies, share by sending it
- **Iterate by chat** — "add Redis", "move auth to the left", "use emerald for the API"

**Project page:** [tt-a1i.github.io/archify](https://tt-a1i.github.io/archify/)

**Start in 60 seconds:**

```
npx skills add tt-a1i/archify -g
```

Then ask your agent: `Use archify to map this repository's runtime architecture.`

## Preview

Same diagram, two themes, one click to switch:

| Dark | Light |
| --- | --- |
| [![[f4d30862a1f4d75e9760244c618f3ea9_MD5.png]]](https://github.com/tt-a1i/archify/blob/main/docs/assets/archify-dark.png) | [![[27a2abe52c1a63ca7142e9e2b7a6091b_MD5.png]]](https://github.com/tt-a1i/archify/blob/main/docs/assets/archify-light.png) |

The Export menu — Copy PNG to clipboard plus 4 download formats (all raster exports at up to 4× source resolution):

[![[bb99cbd9dc5443955ab5f8dadadcf504_MD5.png]]](https://github.com/tt-a1i/archify/blob/main/docs/assets/archify-menu.png)

Example file: [`examples/web-app.html`](https://github.com/tt-a1i/archify/blob/main/examples/web-app.html). Download or clone the repository, open the file locally, then press T to toggle themes or E to open Export.

## Quick start

### 1\. Install

```
npx skills add tt-a1i/archify -g
```

This installs Archify for supported agents through the open-source [`skills` CLI](https://github.com/vercel-labs/skills).

To try it without a permanent install:

```
npx skills use tt-a1i/archify@archify --agent codex
```

Replace `codex` with `claude-code` or `opencode` when needed.

### 2\. Ask for one clear view

Start with an overview instead of asking one diagram to explain the entire repository:

```
Analyze this repository, then use archify to create a high-level runtime architecture diagram.
Show 8–12 core components, one primary request or data path, external dependencies, and trust boundaries.
Put supporting detail in cards instead of adding more edges.
```

For a focused flow:

```
Use archify to draw this login flow: Browser -> Web App -> API -> JWT validation ->
Redis session lookup -> PostgreSQL fallback. Make the cache-miss path secondary.
```

### 3\. Refine in chat

Ask for focused changes such as `add Redis`, `move auth to the left`, or `highlight the rollback path` while the source JSON remains available in the session.

Archify returns a self-contained HTML file that opens in any modern browser and exports to PNG, JPEG, WebP, or SVG.

## Diagram types

Choose the view that matches the question you need to answer:

| Type | Best for | Include in your prompt |
| --- | --- | --- |
| **Architecture** | Components, services, storage, boundaries | Scope, core components, primary path |
| **Workflow** | CI/CD, approvals, tool calls, runbooks | Participants, order, branches, exceptions |
| **Sequence** | API calls, cache fallback, auth, async traces | Callers, callees, returns, timing |
| **Data Flow** | Pipelines, lineage, PII, downstream consumers | Sources, transforms, stores, boundaries |
| **Lifecycle** | State machines, retries, waits, terminal states | States, events, retry and cancellation paths |

Architecture examples:

- [`examples/web-app.html`](https://github.com/tt-a1i/archify/blob/main/examples/web-app.html) — compact SaaS architecture
- [`examples/archify-repo.html`](https://github.com/tt-a1i/archify/blob/main/examples/archify-repo.html) — Archify's skill → JSON IR → renderer pipeline
- [`examples/archify-repo-grid.html`](https://github.com/tt-a1i/archify/blob/main/examples/archify-repo-grid.html) — explicit `row` / `col` grid placement
- [`examples/maka-architecture.html`](https://github.com/tt-a1i/archify/blob/main/examples/maka-architecture.html) — a third-party desktop agent workbench

Workflow uses swimlanes, a clear happy path, and restrained secondary branches.

[![[9edb3b36e2ec0930da5aea75ba57a0e0_MD5.png]]](https://github.com/tt-a1i/archify/blob/main/docs/assets/archify-workflow.png)

Sequence focuses on one interaction over time.

[![[c8c1416d55ebd4f2db3a428bb81cd110_MD5.png]]](https://github.com/tt-a1i/archify/blob/main/docs/assets/archify-sequence.png)

Data Flow makes movement, transformation, and sensitivity boundaries explicit.

[![[51c4ced14028d382b9bc0ec5df365975_MD5.png]]](https://github.com/tt-a1i/archify/blob/main/docs/assets/archify-dataflow.png)

Lifecycle separates normal progress, wait states, retries, and terminal outcomes.

[![[7f1663f997ca513dd7ee140688914e5a_MD5.png]]](https://github.com/tt-a1i/archify/blob/main/docs/assets/archify-lifecycle.png)

## Why Archify

- **Layout judgment over generic auto-layout** — the agent chooses hierarchy, spacing, routes, and emphasis for the story being told.
- **Typed JSON IR** — architecture, workflow, sequence, data-flow, and lifecycle diagrams use renderer-backed schemas.
- **Validation before delivery** — schema, layout, HTML, and SVG checks catch malformed or unreadable output early.
- **Portable output** — one HTML file, no server or framework required, with local font fallbacks when external fonts are unavailable.
- **Semantic technology labels** — names such as `postgres`, `redis`, `aws.lambda`, and `github-actions` guide visual categorization without a heavyweight icon runtime.

Archify is not a general-purpose drawing editor or a Mermaid theme. Its job is to turn technical intent into a polished communication artifact.

## Installation options

The primary installation command is:

```
npx skills add tt-a1i/archify -g
```

The same [`archify.zip`](https://github.com/tt-a1i/archify/blob/main/archify.zip) can also be installed manually:

| Surface | Install location or method | Capability |
| --- | --- | --- |
| **Claude Code** | `~/.claude/skills/` or `.claude/skills/` | Full renderer + validation workflow |
| **Codex CLI** | `~/.agents/skills/` or `.agents/skills/` | Full renderer + validation workflow |
| **opencode** | `~/.config/opencode/skills/`, `.opencode/skills/`, or `.agents/skills/` | Full renderer + validation workflow |
| **Claude.ai** | Upload `archify.zip` under Settings → Capabilities → Skills | Depends on Node.js access in the sandbox |
| **Project Knowledge** | Upload `archify.zip` to the project | Prompt-driven architecture mode only |

Manual installation means unzipping the archive into the matching directory. No `npm install` is required for the packaged skill.

## How it works

Renderer-backed diagrams follow a small, inspectable loop:

| Step | What happens |
| --- | --- |
| **Generate JSON IR** | The agent creates a typed description instead of hand-editing final SVG markup. |
| **Validate** | Bundled standalone validators check the schema without installing runtime dependencies. |
| **Render** | The selected renderer produces the HTML/SVG artifact. |
| **Check** | Layout and artifact checks catch invalid coordinates, malformed SVG, and unsafe routes. |
| **Iterate** | Targeted changes are applied to the JSON IR while unrelated structure stays stable. |

The packaged CLI exposes the same workflow. From a repository checkout:

```
cd archify
node bin/archify.mjs doctor
node bin/archify.mjs demo /tmp/archify-demo
node bin/archify.mjs render workflow examples/agent-tool-call.workflow.json /tmp/workflow.html
node bin/archify.mjs validate workflow examples/agent-tool-call.workflow.json --json
node bin/archify.mjs check /tmp/workflow.html
node bin/archify.mjs examples
```

Optional trace animation can be enabled for demos:

```
{ "meta": { "title": "Release Flow", "animation": "trace" } }
```

The animation respects `prefers-reduced-motion`. Omit `animation` for a static diagram.

## Using the output

Open the generated HTML in a modern browser. The controls in the top-right provide:

- **Theme** — switch between dark and light. Shortcut: T.
- **Export** — copy PNG or download PNG, JPEG, WebP, or SVG. Shortcut: E.

| Format | Use it for |
| --- | --- |
| **Copy PNG** | Slack, Notion, GitHub comments, and quick reviews |
| **PNG / JPEG / WebP** | Slides, documents, websites, and print |
| **SVG** | READMEs, blogs, Figma, Illustrator, and lossless scaling |

Raster exports are rendered natively at the highest safe resolution, up to 4×. Oversized diagrams step down automatically to stay within browser canvas limits.

Exported SVGs include dark and light variables plus `prefers-color-scheme`, so one SVG can follow the reader's system theme.

Useful URL parameters:

- `?theme=light` or `?theme=dark` — force the starting theme.
- `?openExport=1` — open the Export menu on load.

WebP and clipboard support depend on browser capabilities. The HTML uses local font fallbacks when an external font cannot be loaded.

## Prompt patterns

**Repository overview**

```
Map this repository's runtime architecture with no more than 12 core components.
Show the main request path, external systems, and trust boundaries. Move implementation detail into cards.
```

**CI/CD workflow**

```
Draw a CI/CD workflow: pull request -> tests -> approval -> build image -> staging ->
smoke test -> production. Show rollback as a secondary failure path.
```

**Data lineage**

```
Draw a data-flow diagram from Web and Mobile events through Consent Gate, Kafka,
Warehouse, and Feature Store to Dashboards and ML consumers. Mark the PII boundary.
```

## Reference

Semantic labels guide color and grouping:

| Examples | Category |
| --- | --- |
| `react`, `nextjs`, `ios`, `browser` | Frontend |
| `node`, `go-service`, `python-worker`, `api-gateway` | Backend |
| `postgres`, `redis`, `s3`, `bigquery`, `snowflake` | Data and storage |
| `aws.lambda`, `gcp.pubsub`, `azure.functions`, `kubernetes` | Cloud and infrastructure |
| `auth0`, `oauth`, `vault`, `security-group` | Security |
| `kafka`, `rabbitmq`, `sqs`, `nats` | Messaging |
| `stripe`, `github-actions`, `openai`, `slack` | External systems |

See the [schema reference](https://github.com/tt-a1i/archify/blob/main/archify/schemas/README.md) for renderer inputs and [CHANGELOG.md](https://github.com/tt-a1i/archify/blob/main/CHANGELOG.md) for release history.

## Current status and roadmap

Archify 2.10 already uses typed JSON IR across all five renderer-backed modes. Current work focuses on stabilizing local edits, improving layout diagnostics, and keeping generated artifacts easy to inspect and share.

See [ROADMAP.md](https://github.com/tt-a1i/archify/blob/main/ROADMAP.md) for planned work and design boundaries. Automatic Mermaid parsing, generic auto-layout, a hosted sharing service, and a WYSIWYG editor are not current goals.

## Attribution

Archify is a fork and rewrite of [Cocoon-AI/architecture-diagram-generator](https://github.com/Cocoon-AI/architecture-diagram-generator) v1.0 by Cocoon AI.

The original visual language remains credited to that project. Archify 2.x adds themes, export tooling, typed renderers, validation, accessibility, and the unified CLI. Both projects use the MIT license.

## License

[MIT](https://github.com/tt-a1i/archify/blob/main/LICENSE) — free to use, modify, and distribute.

## Contributing

Issues, pull requests, and shared diagrams are welcome. When reporting generated-output problems, include the prompt, diagram type, and Archify version when possible.