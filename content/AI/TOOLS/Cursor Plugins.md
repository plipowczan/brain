---
title: "Cursor Plugins"
date: 2026-11-01
enableToc: true
openToc: true
tags: ["tool", "ai", "cursor", "plugins", "agent-skills", "mcp", "marketplace", "coding-agents"]
type: tool
source: "_raw/processed/2026-11-01_cursorplugins Cursor plugin specification and official plugins.md"
agent-created: true
summary: "cursor/plugins — the official Cursor plugin marketplace repo and spec: per-plugin manifest bundling skills, rules and MCP; ~100 plugins from agent workflows to SaaS and finance integrations"
---

# Cursor Plugins

## 🚀 Description

[cursor/plugins](https://github.com/cursor/plugins) is the specification and official catalogue for [[Cursor]] plugins. It is a multi-plugin marketplace: a root `.cursor-plugin/marketplace.json` lists everything, and each plugin is a standalone directory with its own `.cursor-plugin/plugin.json`.

A plugin can bundle any mix of:

- `skills/` — agent skills (`SKILL.md` with frontmatter, the same format as [[Agent Skills]])
- `rules/` — Cursor rules (`.mdc`)
- `mcp.json` — MCP server definitions
- README, CHANGELOG, LICENSE

So the plugin is the *packaging layer* that ties skills, rules and MCP servers into one installable unit — the same idea as Claude Code plugins.

## 🧩 What is in the catalogue

Three groups, by folder:

- **Developer workflows** (repo root): `teaching`, `continual-learning` (transcript-driven AGENTS.md memory updates), `cursor-team-kit` (CI, review, shipping), `thermos` (deep branch review with parallel subagents), `create-plugin`, `ralph-loop` (iterative self-referential loops), `agent-compatibility` (audit a repo against what an agent needs), `cli-for-agent` (designing CLIs agents can run reliably), `pr-review-canvas`, `docs-canvas`, `cursor-sdk`, `orchestrate` (fan large tasks to parallel cloud agents with planners, workers, verifiers), `advisor` (consult a stronger model before big decisions), `pstack` and `dyl-stack` (community agent-workflow styles), `grok-voice`
- **Productivity** (`third_party/`): Gmail, Google Drive/Docs/Sheets/Slides/Calendar, Teams, SharePoint
- **Integrations** (`third_party/`, ~70): CRM and sales (Salesforce, HubSpot, Attio, Clay), meetings (Gong, Zoom, Fireflies, Otter, Fathom), SEO (Semrush, Ahrefs), marketing email (Klaviyo, Brevo, MailerLite), notes (Craft, Mem, Readwise, Coda), dev (GitHub, Playwright, Excalidraw, BigQuery, Statsig), finance and trading (Xero, QuickBooks, Brex, Interactive Brokers, Robinhood, Coinbase, eToro, Webull)

Several finance plugins can *place trades* — I would never enable those on an agent without a hard confirmation step.

## Reasoning for

Useful as a reference for what a plugin manifest looks like and as a map of which SaaS vendors now ship agent-ready connectors. The developer-workflow plugins (`advisor`, `orchestrate`, `continual-learning`, `ralph-loop`) are good idea sources for my own skills: see [[Loop Engineering]] and [[Harness Engineering]].

## Alternatives considered

- Claude Code plugin marketplaces — same shape, different host; see [[Claude Code]] and [[Awesome Claude Code]]
- [[Vercel Skills]] (`npx skills`) — cross-agent installer for bare skills, no manifest/rules/MCP bundling

## 🔗 Links

- Repo: https://github.com/cursor/plugins

---
Template: [[templates/tool]]
