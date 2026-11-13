---
title: "21st MCP"
aliases: ["Magic MCP", "AI/TOOLS/Magic MCP"]
date: 2026-07-23
enableToc: true
openToc: true
tags: ["tool", "ai", "mcp", "ui-generation", "frontend", "components", "coding-agents", "saas"]
type: tool
source: "_raw/processed/2026-07-23_21st-devmagic-mcp It's like v0 but in your CursorWindSurfCline. 21st dev Magic MCP server for working with your frontend like Magic.md"
agent-created: true
agent-reviewed: 2026-11-13
summary: "21st.dev's hosted MCP server, the successor of Magic MCP since 2026-07-24: coding agents search 12,000+ React/Tailwind components, install their code and, on a paid AI plan, generate new UI from Cursor, Claude Code, Codex and other MCP clients."
status-checked: 2026-11-13
project-status: active
---
# 21st MCP

> [!success] Status check 2026-11-13 — active
> **Verdict:** A hosted service that is sold and documented today. The setup page at 21st.dev/mcp lists 12,000+ components, and the 21st CLI shipped 1.18.0 on 2026-10-06 after five releases in August and September.
> **Last release:** `@21st-dev/cli` 1.18.0 (npm, 2026-10-06); compatibility proxy `@21st-dev/magic` 0.2.3 (2026-09-09) · **licence:** proprietary SaaS; the CLI is MIT, the proxy ISC
> **Endpoint:** https://21st.dev/api/mcp (streamable HTTP) — **setup:** https://21st.dev/mcp
> **Replaces:** Magic MCP from the same vendor. Since v0.2.0 (2026-07-24) the `@21st-dev/magic` package only forwards MCP messages to this server, and every old Magic API key was reset.

🗒️ **21st MCP** — [21st.dev](https://21st.dev/)'s hosted MCP server that plugs its community component library into a coding agent. The agent calls a remote server instead of a local generator: it searches 12,000+ React/Tailwind components, themes and templates, pulls a component's code into your project, finds brand logos ([SVGL](https://svgl.app/)), and, if your account has 21st AI, generates new components. It works in [[Cursor]], [[Claude Code]], Codex, Claude Desktop and [[Lovable]], and in any client that speaks streamable HTTP (VS Code, Windsurf, Cline…).

I first noted this tool as **Magic MCP** on 2026-07-23: "[[v0]] in your IDE". The next day (v0.2.0, 2026-07-24) the vendor replaced it with the unified 21st MCP, so this note now covers the successor. The Magic-era details are at the end.

## Links
### Description
🧩 What it does. Tools as listed in the [magic-mcp README](https://github.com/21st-dev/magic-mcp), checked 2026-11-13; call `tools/list` to see what your account gets.

- `search` — catalog search across components, themes and templates. Free on every plan.
- `get_component` — retrieves a component's code for the agent to write into your project. Free accounts get 2 retrievals a day across the web, MCP and the CLI; any paid plan removes the limit.
- `get_inspiration` — examples to steer a design.
- `search_logo` — brand logos from SVGL, one query per call. Free.
- `generate` / `iterate_generation` — hosted 21st AI generation with variants. The server lists them only when the account has AI access (Builder + AI); `get_usage.aiGenerationEnabled` tells you whether it's on. Builder alone does not include AI.
- Also bookmarks, team libraries, profile management and publishing your own components.
- **Old Magic tool names still work** and are translated: `21st_magic_component_builder` → `generate`, `21st_magic_component_inspiration` → `get_inspiration`, `21st_magic_component_refiner` → `generate`, `logo_search` → `search_logo`. The `/ui` trigger was only a convention of the old tool descriptions; now you just ask the agent in plain language.

### Download or use
Get an API key (or sign in) at [21st.dev/mcp](https://21st.dev/mcp). One command configures a client:

```bash
npx @21st-dev/cli@latest init --client claude   # or cursor | codex | vscode | windsurf | devin
```

The README and the setup page list slightly different client sets; both include claude, cursor, codex and vscode.

Manual config: a plain HTTP MCP server with the key in a header (`Authorization: Bearer` works too).

```json
{
  "mcpServers": {
    "21st": {
      "url": "https://21st.dev/api/mcp",
      "headers": { "x-api-key": "YOUR_21ST_API_KEY" }
    }
  }
}
```

In [[Claude Code]] the same thing is `claude mcp add --transport http 21st https://21st.dev/api/mcp --header "x-api-key: YOUR_21ST_API_KEY"`. Claude Desktop and Lovable sign in with OAuth instead of a key.

Without MCP, the CLI does the same from a terminal: `npm i -g @21st-dev/cli`, `21st login` (saves a token locally), `21st search "pricing table"`, `21st add efferd/pricing`. In CI, pass `--api-key $API_KEY_21ST` or set the variable.

The [magic-mcp](https://github.com/21st-dev/magic-mcp) repo is also a plugin marketplace (MCP server plus a UI skill): `claude plugin marketplace add 21st-dev/magic-mcp`, then `/plugin install 21st`, with the key in `API_KEY_21ST`. Same for Codex, Grok Build and the Cursor Marketplace.

> [!warning] Claude Code plugin bug (open on 2026-11-13)
> The plugin's `.mcp.json` has a `url` but no `type`, so Claude Code skips the server ([issue #82](https://github.com/21st-dev/magic-mcp/issues/82); fix [PR #83](https://github.com/21st-dev/magic-mcp/pull/83) open since 2026-09-18). Until it's merged, use `init` or the manual config above.

**Pricing** ([21st.dev/pricing](https://21st.dev/pricing), 2026-11-13, billed yearly):
- **Free** — search and logo search, 2 component copies a day, no 21st AI.
- **Builder** — \$6/month: unlimited copies and installs via MCP and CLI.
- **Builder + AI** — from \$15/month for 500 AI credits; top-ups \$5 per 100 credits, which roll over.
- **Team** — from \$7.50 per seat per month, 2 to 50 seats.

## Reasoning for
The "v0 inside your IDE" pitch: instead of context-switching to a hosted builder like [[v0]] or [[Lovable]] and pasting code back, the component library lives in the agent chat where the codebase context already is. Candidate for [[shadcn-ui]]-style component scaffolding in Next.js/[[React]] projects — worth testing against plain Claude Code + [[UI UX Pro Max]] prompting, which needs no account, API key or daily quota.

The value has shifted since Magic. It's less "generate a component from a prompt" and more "let the agent search and install real community components". Generation is now a paid add-on.

Where I'd be careful:
- **It's fully dependent on a proprietary hosted service.** Every call goes to 21st.dev with your key, and the code in the repo is only a proxy. The vendor has already broken every user once, with the July 2026 key reset.
- **`generate` sends your prompt and project context off your machine.**
- **Retrieved components still need work.** Review them and adapt them to your design system.

## Alternatives considered
- **[[v0]]** — hosted, broader scope (whole apps), tied to Vercel/Next.js output; 21st MCP is IDE-embedded and component-scoped.
- **[[Lovable]]** — full-stack app builder, not a per-component tool (and itself one of the 21st MCP's clients).
- **Plain agent + [[shadcn-ui]]** — Claude Code already writes shadcn/Tailwind components well; 21st MCP's edge is the curated 21st.dev library, its cost is an account, an API key and the free plan's daily limit.
- **[[UI UX Pro Max]] / [[Impeccable]]** — local design skills that steer the agent but ship no component code.

## 🕰️ From Magic MCP to 21st MCP

What I noted on 2026-07-23, when it was still [21st-dev/magic-mcp](https://github.com/21st-dev/magic-mcp) as a local server:

- A stdio MCP server (`@21st-dev/magic`): type `/ui` plus a natural-language description in Cursor, Windsurf, Cline or Claude Code, and Magic dropped a polished, editable React component into the project. Four tools: `21st_magic_component_builder`, `_inspiration`, `_refiner` and `logo_search`.
- Features I listed then: real-time preview, TypeScript-first output, SVGL brand assets, and writes scoped to the component's files in the project's existing code style.
- "MIT-licensed, beta, free during beta". Both were wrong or are gone. `package.json` always said ISC (the LICENSE file says ISC since 2026-08-31), and AI generation now needs a paid plan.
- Install was `npx @21st-dev/cli@latest install <client> --api-key <key>`, or a stdio entry running `npx -y @21st-dev/magic@latest API_KEY="..."`. That stdio entry still works since v0.2.0, now as a proxy to the 21st MCP, but only with a fresh key from 21st.dev/mcp.

![[df28c716bd2f363103feae0682aa675b_MD5.png]]

> [!danger]- Magic MCP status check 2026-11-13 — dead (kept for history)
> **Verdict:** As a product, Magic MCP is deprecated: since v0.2.0 (2026-07-24) the README tells users to install the 21st MCP instead, and the code here only forwards MCP messages to the hosted server.
> **Last release:** v0.2.3 '21st MCP compatibility proxy 0.2.3', 2026-09-09 (npm @21st-dev/magic 0.2.3… · **last commit:** 2026-09-09 · **licence:** ISC for the proxy code. package.json has always said ISC, but the old README claimed 'MIT License' (as the note does).
> **Repo:** https://github.com/21st-dev/magic-mcp — **moved/renamed:** Yes, rebranded and re-architected: 'Magic MCP is now the 21st MCP' (v0.2.0, 2026-07-24, the day after the note). The old local stdio server and the magic.21st.dev backend were replaced by a hosted HTTP MCP server at https://21st.dev/api/mcp.
> **Retired:** Deprecated by README notice, not archived on GitHub.
> **Use instead:** Official successor: the 21st MCP from the same vendor. Install it with 'npx @21st-dev/cli@latest init --client claude', or add the HTTP server https://21st.dev/api/mcp with an x-api-key header.
> **Changed since this note:** Everything changed one day after the note. v0.2.0 (2026-07-24) turned Magic MCP into a thin proxy to the unified 21st MCP. The '/ui' trigger convention and the four Magic tools (21st_magic_component_builder, _inspiration, _refiner, logo_search) gave way to a larger toolset: catalog search across components…

## Resources
- 🔗 Setup and API keys: [21st.dev/mcp](https://21st.dev/mcp) · Pricing: [21st.dev/pricing](https://21st.dev/pricing)
- 🔗 Repo (compatibility proxy + plugin marketplace): [github.com/21st-dev/magic-mcp](https://github.com/21st-dev/magic-mcp)
- 🔗 CLI: [@21st-dev/cli on npm](https://www.npmjs.com/package/@21st-dev/cli)
- 🔗 Platform source (older, last push 2025-05): [github.com/serafimcloud/21st](https://github.com/serafimcloud/21st)
- 🔗 SVGL: [svgl.app](https://svgl.app/)
- 📖 Related: [[v0]] · [[shadcn-ui]] · [[Cursor]] · [[Claude Code]] · [[Lovable]] · [[UI UX Pro Max]] · [[Impeccable]] · [[AI Tools Map]]

---
Template: [[templates/tool]]
