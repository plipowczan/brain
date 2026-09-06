---
title: "tt-a1i/archify: Agent skill for beautiful, verifiable architecture, workflow, sequence, data-flow, and lifecycle diagrams—self-contained HTML with motion and crisp export."
source: "https://github.com/tt-a1i/archify"
author:
published:
created: 2026-09-06
description: "Agent skill for beautiful, verifiable architecture, workflow, sequence, data-flow, and lifecycle diagrams—self-contained HTML with motion and crisp export. - tt-a1i/archify"
tags:
  - "clippings"
---
**English** · [简体中文](https://github.com/tt-a1i/archify/blob/main/README_ZH.md)

[![[0338afb7c2ac910d795d767faff93020_MD5.svg]]](https://trendshift.io/repositories/31352?utm_source=repository-badge&utm_medium=badge&utm_campaign=badge-repository-31352)

[![[63109cd4d26c861cba88d5f7338024ec_MD5.png]]](https://github.com/tt-a1i/archify/blob/main/docs/assets/archify-readme-hero.png)

## Archify

**Turn a codebase or system description into a polished, interactive system map — directly in chat.**

Archify is a Node.js rendering and validation system for Cursor, Claude Code, Codex CLI, and OpenCode. Agents produce typed JSON IR; Archify deterministically compiles it into HTML/SVG.

- **Open it and present** — five diagram types, four presets, dark/light themes, built-in brand marks, and finite motion
- **Review architecture changes before merge** — compare two validated snapshots as Before / Delta / After, with exact added, removed, changed, moved, and rerouted facts
- **Every interaction stays grounded** — search nodes, optionally open revision-verified source, trace upstream/downstream authored reach and exact routes, compare roles, and play guided stories without inventing topology
- **One file, ready to trust and share** — typed JSON IR and deterministic checks produce self-contained HTML plus PNG, SVG, WebM, and 1200×630 share cards

**Current development version:** `v2.17.0-dev.1`. See [Changelog](https://github.com/tt-a1i/archify/blob/main/CHANGELOG.md#unreleased).

**[Project page](https://tt-a1i.github.io/archify/)** · **[Scenario guide](https://tt-a1i.github.io/archify/guide.html)** · **[Proof Lab](https://tt-a1i.github.io/archify/gallery.html)**

```
npx skills add tt-a1i/archify -g
```

Using Cursor? Open the [agent-aware quick start](https://tt-a1i.github.io/archify/start.html?agent=cursor&type=architecture) for exact global and project commands.

**No repository is required:** describe the system in any agent chat.

## ❤️ Sponsors

| [![[7270c243df227cd84bc39145bf414cd0_MD5.jpg]]](https://apinebula.ai/ref/wywnaATT)   **[APINEBULA](https://apinebula.ai/ref/wywnaATT)** | APINEBULA sponsors Archify with one API for Claude, GPT, Gemini, and more. [Register through Archify](https://apinebula.ai/ref/wywnaATT) and use **`Archify`** for **10% off**. |
| --- | --- |
| [![[36878e97be577f57d62f87d54bdbd677_MD5.png]]](https://github.com/EverMind-AI/Raven)   **[EverMind](https://github.com/EverMind-AI) · [Raven](https://github.com/EverMind-AI/Raven)** | EverMind sponsors Archify and builds memory infrastructure for agents. Its [**Raven**](https://github.com/EverMind-AI/Raven) harness supports Archify as a Skill for verified, interactive system maps. |

> Want to sponsor Archify? [Contact us by email.](mailto:2801884530@qq.com)

## See Archify in action

These are generated Archify artifacts, not product mockups. Click a frame to open its live, shareable state.

[![[749be728674502d412149a6198a722e3_MD5.gif]]](https://tt-a1i.github.io/archify/gallery.html)

  
<sub><strong>Three real generated artifacts.</strong> Signal Flow · Blueprint · Classic · <a href="https://tt-a1i.github.io/archify/gallery.html">open the interactive Proof Lab ↗</a></sub>

| Guided story | Route probe | Semantic lens |
| --- | --- | --- |
| [![[e8287781ad97301a5a8f9e77f19313b3_MD5.png]]](https://tt-a1i.github.io/archify/gallery/artifacts/agent-tool-call.workflow.html?theme=dark&present=1&play=1#view=happy-path) | [![[91e6fbf77c1691a74db4f298a957f432_MD5.png]]](https://tt-a1i.github.io/archify/gallery/artifacts/cache-miss.sequence.html?theme=dark&present=1#route=web~db) | [![[927455de6d297fa658bfb7fb5dacfbee_MD5.png]]](https://tt-a1i.github.io/archify/gallery/artifacts/production-deployment.architecture.html?theme=dark&present=1#lens=backend~database) |
| Play one finite named chapter. | Inspect the shortest authored directed path. | Compare real traffic between semantic roles. |

The [Proof Lab](https://tt-a1i.github.io/archify/gallery.html) contains all 11 checked-in scenarios, their JSON sources, named views, and validation receipts.

### A real repository, mapped from source

[![[f1e3a64f05da61ec459df24d02fa7425_MD5.png]]](https://tt-a1i.github.io/archify/cases/mco-runtime.architecture.html?theme=dark&present=1#view=dispatch-path)

Archify traced [`mco-org/mco`](https://github.com/mco-org/mco) at `9f1a1cf` and produced this checked map. **[Open it ↗](https://tt-a1i.github.io/archify/cases/mco-runtime.architecture.html?theme=dark&present=1#view=dispatch-path)** · [trace reach ↗](https://tt-a1i.github.io/archify/cases/mco-runtime.architecture.html?theme=dark#focus=router&reach=downstream) · [typed source](https://github.com/tt-a1i/archify/blob/main/docs/cases/mco-runtime.architecture.json)

## Preview

Same diagram, two themes, one click to switch:

| Dark | Light |
| --- | --- |
| [![[f4d30862a1f4d75e9760244c618f3ea9_MD5.png]]](https://github.com/tt-a1i/archify/blob/main/docs/assets/archify-dark.png) | [![[27a2abe52c1a63ca7142e9e2b7a6091b_MD5.png]]](https://github.com/tt-a1i/archify/blob/main/docs/assets/archify-light.png) |

The Export menu copies PNG to the clipboard and downloads static or motion formats:

[![[dc40f7c1cc85d33d0346906681e87fdb_MD5.png]]](https://github.com/tt-a1i/archify/blob/main/docs/assets/archify-menu.png)

Use **Copy Share Card** when you want a canonical 1200×630 image for a README, release, or social post.

After tracing a route, **Export → Route Share Card** downloads that authored path as a 1200×630 PNG with the full diagram retained for context.

[![[94e9c8ee7e6c3c2594349564a456d5d9_MD5.png]]](https://github.com/tt-a1i/archify/blob/main/docs/assets/archify-route-share-card.png)

After tracing authored `Upstream` or `Downstream` reach, **Export → Reach Share Card** captures that exact reading without claiming runtime impact.

[![[d12c61d01cbae466db5b7b10559724c0_MD5.png]]](https://github.com/tt-a1i/archify/blob/main/docs/assets/mco-runtime-reach-share-card.png)

Open [`examples/web-app.html`](https://github.com/tt-a1i/archify/blob/main/examples/web-app.html) locally to try the complete viewer.

## Quick start

### 1\. Install

```
npx skills add tt-a1i/archify -g
```

For an explicit, non-interactive Cursor install:

```
npx -y skills add tt-a1i/archify --skill archify --agent cursor --global --copy --yes
```

To try without installing:

```
npx skills use tt-a1i/archify@archify --agent codex
```

[DSH community opt-in](https://github.com/tt-a1i/archify/blob/main/integrations/deepseek-harness/README.md): `dsh plugin --profile web add @tt-a1i/archify-dsh@0.1.0`

The [agent switcher](https://tt-a1i.github.io/archify/start.html?agent=cursor&type=architecture) covers `cursor`, `codex`, `claude-code`, and `opencode`. For Raven's manual ZIP install, extract [`archify.zip`](https://github.com/tt-a1i/archify/blob/main/archify.zip) into `~/.raven/workspace/skills`; it yields `~/.raven/workspace/skills/archify`. Raven is not a switcher target.

Archify may GET the fixed stable manifest solely to show an optional reminder; it never downloads or installs updates. Successful checks wait about 72 hours (±20%); active use retries failures after 6, then 24 hours. The server sees normal HTTP metadata (IP and time), but receives no version, Agent, project data, prompts, account/device ID, or ETag. You decide whether and when to update. Set `ARCHIFY_UPDATE_CHECK_DISABLED=1` to disable networking and reminder-state writes.

### 2\. Start from a description — no repository required

```
Use Archify to draw: Browser -> API -> Redis cache -> PostgreSQL fallback.
```

For source evidence, open a repository and ask:

```
Analyze this repository, then use archify to create a high-level runtime architecture diagram.
Show 8–12 core components, one primary path, external dependencies, and trust boundaries.
Put supporting detail in cards instead of adding more edges.
```

### 3\. Refine in chat

Continue with focused requests such as `add Redis`, `move auth to the left`, or `highlight the rollback path`. Archify keeps the typed source available for targeted iteration.

## Choose the right diagram

| Type | Best for | Include in your prompt |
| --- | --- | --- |
| **Architecture** | Components, services, storage, boundaries | Scope, core components, primary path |
| **Workflow** | CI/CD, approvals, tool calls, runbooks | Participants, order, branches, exceptions |
| **Sequence** | API calls, cache fallback, auth, async traces | Callers, callees, returns, timing |
| **Data Flow** | Pipelines, lineage, PII, consumers | Sources, transforms, stores, boundaries |
| **Lifecycle** | States, retries, waits, terminal outcomes | States, events, retry and cancellation paths |

Architecture's optional `deployment-ownership` profile fails closed when authored owners, region placement, private database scope, or named crossings are missing; it is never implicit and does not inspect live infrastructure. See the [checked deployment proof](https://tt-a1i.github.io/archify/gallery.html#proof-deployment-ownership).

For design or PR review, Architecture Delta compares validated Before / Delta / After snapshots with a machine receipt. Select an authored change or play one finite, viewer-only Review; it infers no impact, risk, or merge safety.

`node archify/bin/archify.mjs compare architecture base.json head.json architecture-delta.html --json`

[![[ef3e025fa6c996320f0b8def61363769_MD5.jpg]]](https://github.com/tt-a1i/archify/blob/main/examples/checkout-platform-delta.html)

Not sure which one fits? Use the [interactive scenario guide](https://tt-a1i.github.io/archify/guide.html), or ask the zero-dependency CLI:

```
node archify/bin/archify.mjs guide "Show an API request with Redis cache miss"
node archify/bin/archify.mjs guide "Map Kafka topics, consumer groups, replay, and DLQ" --json
```

Workflow keeps the happy path clear across lanes:

[![[5646b48abcc73142b3556e75d60f8ec7_MD5.png]]](https://github.com/tt-a1i/archify/blob/main/docs/assets/archify-workflow.png)

Sequence explains one interaction over time:

[![[f2d846b9a1c498ace4d617346f6baa30_MD5.png]]](https://github.com/tt-a1i/archify/blob/main/docs/assets/archify-sequence.png)

Data Flow makes movement and sensitivity boundaries explicit:

[![[82fc1ad10a1b7fb5e9274aa4dacfbd77_MD5.png]]](https://github.com/tt-a1i/archify/blob/main/docs/assets/archify-dataflow.png)

Lifecycle separates progress, waits, retries, and terminal outcomes:

[![[ff6015e25013146800c7c9f05b7a9f3d_MD5.png]]](https://github.com/tt-a1i/archify/blob/main/docs/assets/archify-lifecycle.png)

Architecture examples: [`web-app`](https://github.com/tt-a1i/archify/blob/main/examples/web-app.html) · [`Archify pipeline`](https://github.com/tt-a1i/archify/blob/main/examples/archify-repo.html) · [`grid placement`](https://github.com/tt-a1i/archify/blob/main/examples/archify-repo-grid.html) · [`desktop agent`](https://github.com/tt-a1i/archify/blob/main/examples/maka-architecture.html)

## Why Archify

- **Layout judgment over generic auto-layout** — the agent chooses hierarchy, spacing, routes, and emphasis; shared automatic endpoints spread deterministically instead of piling arrows on one midpoint.
- **Typed JSON IR** — every renderer-backed mode has a schema and reproducible source.
- **Atomic validation before delivery** — schema, layout, HTML/SVG, route, and label-to-route clearance checks must all pass before a showcase artifact replaces the last known good output.
- **Failures come with a repair receipt** — `validate --json` and `deliver --json` return stable rule codes, the exact subject, measured evidence, and only supported repair controls instead of a Node stack or an unstructured retry guess.
- **Last-good live preview** — an optional desktop loop watches one JSON file, refreshes only after the latest candidate passes every gate, and keeps the previous verified diagram visible when a save is incomplete or invalid.
- **Truthful interaction** — focus, upstream/downstream reach, exact routes, role comparison, and stories reuse authored nodes and relationships instead of inventing topology or claiming runtime impact.
- **Source evidence, only when requested** — Evidence-backed Architecture nodes mark themselves `SRC n` and open Git-verified files and line ranges pinned to one public commit; ordinary artifacts stay source-free.
- **Portable by default** — the result is one HTML file; exports remain full-diagram and free of temporary viewer state.

Archify is not a general-purpose drawing editor or a Mermaid theme. It turns technical intent into a communication artifact.

## How it works

| Step | What happens |
| --- | --- |
| **Generate** | The agent creates typed JSON IR from your description. |
| **Validate** | Bundled validators and layout rules check the source; failures identify the exact local repair in machine-readable JSON. |
| **Preview (optional)** | A loopback-only desktop session watches one source and reloads only verified revisions; failures keep the last-good artifact. |
| **Deliver** | A same-directory candidate is rendered and checked; only a passing artifact atomically replaces the target, then optional `--open` launches that exact file. |
| **Iterate** | The agent updates the source while unrelated structure stays stable. |

Useful repository commands:

```
cd archify
node bin/archify.mjs doctor
node bin/archify.mjs demo /tmp/archify-demo
node bin/archify.mjs guide "Show CI/CD checks, approval, deploy, and rollback"
node bin/archify.mjs validate workflow examples/agent-tool-call.workflow.json --quality showcase --json
node bin/archify.mjs preview workflow examples/agent-tool-call.workflow.json /tmp/workflow.html --quality showcase
node bin/archify.mjs deliver workflow examples/agent-tool-call.workflow.json /tmp/workflow.html --quality showcase --open --json
```

`preview` is an explicit loopback-only desktop mode: it watches one JSON file on a random `127.0.0.1` port, keeps the last verified output through failures, stops with Ctrl-C, and adds no generated-HTML runtime. Use `--no-open` for tests or manual URL opening.

`deliver --open` is an opt-in one-shot handoff after commit. Opener failure preserves success; JSON remains on stdout and the absolute fallback path goes to stderr.

On failure, `validate --json` and `deliver --json` emit one JSON object. Apply only each `diagnostics[]` subject's `supportedFixes`, within the Skill's two correction rounds; visual review remains separate.

Settings:

```
{
  "meta": {
    "locale": "en",
    "animation": "trace",
    "visual_preset": "signal-flow"
  }
}
```

`meta.locale=en|zh-CN` localizes page title, Legend, states/errors, a11y, HTML/SVG `lang` —never authored content. Otherwise omit; preserve requested-language copy; disclose English fallback. Static omits `animation`; `classic` defaults.

| Action | Control |
| --- | --- |
| Open the factual Diagram Guide | ? |
| Find and focus a semantic node | / |
| Trace upstream/downstream authored reach | Focus a node → `Upstream` / `Downstream` |
| Probe a directed route and inspect its journey | R or `PATH` |
| Compare one or two semantic roles | L or `LENS` |
| Open the live overview radar | M or `MAP` |
| Play a guided story / change chapter | P / \[ \] |
| Enter Presentation Stage | F |
| Choose visual style (`S` cycles) / toggle theme / open Export | S / T / E |
| Zoom or reset | + / \- / 0 |

Stable links can restore `#focus=<id>`, `#focus=<id>&reach=upstream|downstream`, `#relation=<id>`, `#route=<source>~<target>`, `#lens=<kind>~<kind>`, and `#view=<view-id>`. Reader-driven motion is finite, respects `prefers-reduced-motion`, and never enters canonical exports.

The complete generation and viewer contract lives in [`archify/SKILL.md`](https://github.com/tt-a1i/archify/blob/main/archify/SKILL.md).

## Installation options

| Surface | Install location or method | Capability |
| --- | --- | --- |
| **Raven** | Manual ZIP into `~/.raven/workspace/skills` → `~/.raven/workspace/skills/archify` | Full renderer + validation workflow |
| **Claude Code** | `~/.claude/skills/` or `.claude/skills/` | Full renderer + validation workflow |
| **Codex CLI** | `~/.agents/skills/` or `.agents/skills/` | Full renderer + validation workflow |
| **opencode** | `~/.config/opencode/skills/`, `.opencode/skills/`, or `.agents/skills/` | Full renderer + validation workflow |
| **Claude.ai** | Upload `archify.zip` under Settings → Capabilities → Skills | Depends on Node.js access in the sandbox |
| **Project Knowledge** | Upload `archify.zip` to the project | Prompt-driven architecture fallback |
| **DeepSeek Harness** | Opt-in: `dsh plugin --profile web add @tt-a1i/archify-dsh@0.1.0`. Invoke: `Use the archify skill to map this repository's runtime architecture.` Remove: `dsh plugin --profile web remove @tt-a1i/archify-dsh`. | Community integration for developer-preview `@deepseek-ai/dsh@0.1.0-rc.6`; Node `^22.19.0 \|\| >=24.0.0`; not an official DeepSeek product. No telemetry. Shell files need exact workspace paths, not Web Produced Files. [Details](https://github.com/tt-a1i/archify/blob/main/integrations/deepseek-harness/README.md). |

## Reference and scope

- [Schema reference](https://github.com/tt-a1i/archify/blob/main/archify/schemas/README.md) · [Skill](https://github.com/tt-a1i/archify/blob/main/archify/SKILL.md) · [Examples](https://github.com/tt-a1i/archify/blob/main/archify/examples) · [Agent cookbook](https://github.com/tt-a1i/archify/blob/main/docs/authoring-cookbook.md)
- [Changelog](https://github.com/tt-a1i/archify/blob/main/CHANGELOG.md)
- [Roadmap](https://github.com/tt-a1i/archify/blob/main/ROADMAP.md)
- [Generated Proof Lab](https://tt-a1i.github.io/archify/gallery.html)

Automatic Mermaid parsing, general-purpose auto-layout, hosted sharing, and WYSIWYG editing are intentionally outside the current scope.

## License

[MIT](https://github.com/tt-a1i/archify/blob/main/LICENSE) — free to use, modify, and distribute.

## Contributing

Issues, pull requests, and real-world diagrams are welcome. Start with the [contribution guide](https://github.com/tt-a1i/archify/blob/main/CONTRIBUTING.md), use the reproducible bug form for failures, or submit a validated diagram through the [community showcase form](https://github.com/tt-a1i/archify/issues/new?template=showcase.yml). · [LINUX DO](https://linux.do/)

![[8b434eade120c83d46f29063365bb7d8_MD5.svg]]