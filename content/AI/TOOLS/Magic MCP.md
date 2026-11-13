---
title: "Magic MCP"
date: 2026-07-23
enableToc: true
openToc: true
tags: ["tool", "ai", "mcp", "ui-generation", "frontend", "components", "coding-agents", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-07-23_21st-devmagic-mcp It's like v0 but in your CursorWindSurfCline. 21st dev Magic MCP server for working with your frontend like Magic.md"
agent-created: true
summary: "21st-dev/magic-mcp — MCP server that generates polished UI components from natural language inside Cursor/Windsurf/Cline/Claude ('v0 in your IDE'), backed by the 21st.dev component library and SVGL brand assets. MIT."
status-checked: 2026-11-13
project-status: dead
---
# Magic MCP

> [!danger] Status check 2026-11-13 — dead
> **Verdict:** As a product, Magic MCP is deprecated: since v0.2.0 (2026-07-24) the README tells users to install the 21st MCP instead, and the code here only forwards MCP messages to the hosted server.
> **Last release:** v0.2.3 '21st MCP compatibility proxy 0.2.3', 2026-09-09 (npm @21st-dev/magic 0.2.3… · **last commit:** 2026-09-09 · **licence:** ISC for the proxy code. package.json has always said ISC, but the old README claimed 'MIT License' (as the note does).
> **Repo:** https://github.com/21st-dev/magic-mcp — **moved/renamed:** Yes, rebranded and re-architected: 'Magic MCP is now the 21st MCP' (v0.2.0, 2026-07-24, the day after the note). The old local stdio server and the magic.21st.dev backend were replaced by a hosted HTTP MCP server at https://21st.dev/api/mcp.
> **Retired:** Deprecated by README notice, not archived on GitHub.
> **Use instead:** Official successor: the 21st MCP from the same vendor. Install it with 'npx @21st-dev/cli@latest init --client claude', or add the HTTP server https://21st.dev/api/mcp with an x-api-key header.
> **Changed since this note:** Everything changed one day after the note. v0.2.0 (2026-07-24) turned Magic MCP into a thin proxy to the unified 21st MCP. The '/ui' trigger convention and the four Magic tools (21st_magic_component_builder, _inspiration, _refiner, logo_search) gave way to a larger toolset: catalog search across components…

🗒️ **[21st-dev/magic-mcp](https://github.com/21st-dev/magic-mcp)** — an MCP server that brings [[v0]]-style AI UI generation directly into the coding agent: type `/ui` plus a natural-language description in [[Cursor]], Windsurf, Cline, or [[Claude Code]], and Magic drops a polished, fully editable React component into your project. Components are inspired by the community library at [21st.dev](https://21st.dev/). MIT-licensed, beta (free during beta, monthly generation limits on paid plans).

![[df28c716bd2f363103feae0682aa675b_MD5.png]]

## Links
### Description
🧩 What it does:

- **AI-powered UI generation** — describe a component in natural language (`/ui create a modern navigation bar with responsive design`), get working code in your project.
- **Multi-IDE support** — Cursor, Windsurf, VSCode + Cline, Claude; one MCP server config per client.
- **21st.dev component library** — generations draw on a community library of pre-built, customizable components; authors publish, Magic gets immediate access.
- **Real-time preview** — see the component as it's created.
- **TypeScript-first** — full type-safe output.
- **SVGL integration** — professional brand assets/logos from [svgl.app](https://svgl.app/).
- **Scoped writes** — only touches files related to the generated component, follows existing project code style.

### Download or use
API key from [21st.dev Magic Console](https://21st.dev/magic/console), then one-command install:

```
npx @21st-dev/cli@latest install <client> --api-key <key>
```

Clients: `cursor`, `windsurf`, `cline`, `claude`. Manual alternative — add to the client's MCP config (`~/.cursor/mcp.json`, `~/.codeium/windsurf/mcp_config.json`, `~/.cline/mcp_config.json`, `~/.claude/mcp_config.json`):

```json
{
  "mcpServers": {
    "@21st-dev/magic": {
      "command": "npx",
      "args": ["-y", "@21st-dev/magic@latest", "API_KEY=\"your-api-key\""]
    }
  }
}
```

VS Code also supports workspace-level `.vscode/mcp.json` with a prompted API key input.

## Reasoning for
The "v0 inside your IDE" pitch: instead of context-switching to a hosted builder like [[v0]] or [[Lovable]] and pasting code back, the component generator lives in the agent chat where the codebase context already is. Candidate for [[shadcn-ui]]-style component scaffolding in Next.js/[[React]] projects — worth testing against plain Claude Code + [[UI UX Pro Max]] prompting, which needs no API key or per-generation quota.

## Alternatives considered
- **[[v0]]** — hosted, broader scope (whole apps), tied to Vercel/Next.js output; Magic is IDE-embedded and component-scoped.
- **[[Lovable]]** — full-stack app builder, not a per-component tool.
- **Plain agent + [[shadcn-ui]]** — Claude Code already writes shadcn/Tailwind components well; Magic's edge is the curated 21st.dev library and instant preview, its cost is an API key + generation limits.

## Resources
- 🔗 Repo: [github.com/21st-dev/magic-mcp](https://github.com/21st-dev/magic-mcp)
- 🔗 Platform source: [github.com/serafimcloud/21st](https://github.com/serafimcloud/21st)
- 🔗 Console: [21st.dev/magic/console](https://21st.dev/magic/console) · Site: [21st.dev/magic](https://21st.dev/magic)
- 🔗 SVGL: [svgl.app](https://svgl.app/)
- 📖 Related: [[v0]] · [[shadcn-ui]] · [[Cursor]] · [[Claude Code]] · [[Lovable]] · [[UI UX Pro Max]]

---
Template: [[templates/tool]]
