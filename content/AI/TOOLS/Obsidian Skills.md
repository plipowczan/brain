---
title: "Obsidian Skills"
date: 2026-07-11
enableToc: true
openToc: true
tags: ["tool", "ai", "obsidian", "agent-skills", "claude-code", "markdown", "knowledge-management", "open-source"]
type: tool
source: "_raw/processed/2026-07-11_kepanoobsidian-skills.md"
agent-created: true
summary: "kepano/obsidian-skills — official agent skills that teach any skills-compatible agent to use the Obsidian CLI and open formats (Markdown, Bases, JSON Canvas)"
---

# Obsidian Skills

## 🚀 Description

[kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) — a bundle of [[Agent Skills|agent skills]] from **kepano** (Steph Ango, Obsidian's CEO) that teach any skills-compatible agent — Claude Code, Codex, OpenCode — to work natively with Obsidian and its open formats. Follows the [Agent Skills specification](https://agentskills.io/specification).

Directly relevant to this vault: this [[Brain]] is an [[Obsidian]] vault driven by a coding agent, and these skills are exactly the primitives that agent uses.

## 🧩 The five skills

| Skill | What it does |
| --- | --- |
| `obsidian-markdown` | Create/edit Obsidian Flavored Markdown — wikilinks, embeds, callouts, properties |
| `obsidian-bases` | Create/edit Obsidian **Bases** (`.base`) — views, filters, formulas, summaries |
| `json-canvas` | Create/edit [JSON Canvas](https://jsoncanvas.org/) files (`.canvas`) — nodes, edges, groups |
| `obsidian-cli` | Drive vaults via the [Obsidian CLI](https://help.obsidian.md/cli), incl. plugin/theme dev |
| `defuddle` | Extract clean markdown from web pages via [Defuddle](https://github.com/kepano/defuddle), stripping clutter to save tokens |

## 🧩 Install

- **Marketplace** — `/plugin marketplace add kepano/obsidian-skills` then `/plugin install obsidian@obsidian-skills`
- **npx skills** — `npx skills add https://github.com/kepano/obsidian-skills`
- **Manual** — drop the repo into `.claude/` (Claude Code), copy `skills/` into `~/.codex/skills` (Codex), or clone the full repo into `~/.opencode/skills/` (OpenCode auto-discovers every `SKILL.md`)

## Reasoning for

Canonical, format-owner-authored skills for the exact stack this brain runs on. `obsidian-bases` and `json-canvas` are the notable ones — teaching an agent Bases (`.base`) and Canvas (`.canvas`) unlocks structured views and visual maps the agent otherwise can't touch. `defuddle` is a lightweight web-clip cleaner (a leaner cousin of [[Firecrawl]] for the ingest step). Worth wiring into the vault's own skill set.

## Alternatives considered

- [[Second Brain Design]] / [[Building an AI Second Brain]] — the *methodology*; obsidian-skills is the low-level *toolkit* those systems can build on
- Hand-written per-vault skills (like this repo's `.claude/skills`) — bespoke to one taxonomy; obsidian-skills covers format mechanics
- [[Firecrawl]] — heavier scraping API vs `defuddle`'s local single-page cleaner

## 🔗 Links

- Repo: https://github.com/kepano/obsidian-skills
- Author: kepano (Steph Ango) — Obsidian CEO
- Agent Skills spec: https://agentskills.io/specification

## 🔗 Related notes

- [[Obsidian]] — the app these skills target; this vault's foundation
- [[Agent Skills]] — the skill packaging standard
- [[Awesome Agent Skills]] — curated skill directory
- [[Karpathy Skills]] — another notable skill collection
- [[Second Brain Design]] — PKM system these primitives feed into
- [[Brain]] — this agent-run Obsidian vault

---
Template: [[templates/tool]]
