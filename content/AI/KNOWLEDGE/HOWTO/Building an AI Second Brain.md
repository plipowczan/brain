---
title: "Building an AI Second Brain"
date: 2026-06-24
enableToc: true
openToc: true
tags: ["knowledge", "howto", "ai", "claude-code", "obsidian", "second-brain", "knowledge-base"]
type: knowledge-note
source: "_raw/processed/2026-06-24_How to Build an AI Second Brain With Claude and Obsidian That Gets Smarter Every Day (Full Guide).md"
agent-created: true
summary: "Step-by-step build of a Claude + Obsidian second brain on the Karpathy LLM Wiki pattern — vault, MCP wiring, CLAUDE.md profile, projects, skills, autopilot"
---

# Building an AI Second Brain

## 🗒️ Task
Build a personal "second brain" where **Obsidian is the storage** (plain-text notes that link into a graph, on your own machine) and **Claude is the brain on top** — reading the whole vault, filing new information, linking it, and answering across all of it. Because it is just text files, it is not locked to any one model: point a different LLM at it next year and it still works. This is the [[LLM Knowledge Bases|LLM Wiki pattern]] Andrej Karpathy popularized in April 2026 — unlike a chat history that rots, the vault gets sharper every day. This vault, [[Brain]], is a built-out version of exactly this.

## 🛠️ Prerequisites
- **Claude Desktop** with a **paid plan** (Pro $20/mo) — the free tier won't run Claude Code.
- **Obsidian** (free) with a vault created on your machine.
- The **Local REST API** community plugin in Obsidian (provides the API key Claude connects through). Obsidian must stay open while connected.

## 📝 Instructions
- **Install Claude Desktop**, sign in (paid plan), open the **Code** tab — that's Claude Code, the version that reads/writes local files.
- **Create the Obsidian vault** — *Create new vault* → name it (e.g. "brain") → pick a folder. That folder is your second brain. Learn the core mechanic: typing `[[goals]]` makes a link; notes pointing at notes form the graph.
- **Open the door** — Obsidian *Settings → Community plugins → Browse → Local REST API → Install → Enable*. Copy the API key from its settings (the long string only — **drop the leading `Bearer`**).
- **Wire Claude to the vault** via MCP. In Claude Code:
  ```bash
  claude mcp add-json obsidian-vault '{ "type": "stdio", "command": "uvx", "args": ["mcp-obsidian"], "env": { "OBSIDIAN_API_KEY": "PASTE-YOUR-KEY-HERE", "OBSIDIAN_HOST": "127.0.0.1", "OBSIDIAN_PORT": "27124" } }'
  ```
  Test with: *"list every file in my Obsidian vault."*
- **Load yourself into the brain** — don't type your profile by hand; make Claude interview you one question at a time (who you are, this year's goals, how to talk to you, strengths/weaknesses, current projects), then write it all to a **`CLAUDE.md`** at the vault root so it loads every session. (This vault's root CLAUDE.md plays the same role.)
- **Create a project with structure** — one folder per area, each with `Inputs / Process / Outputs / Feedback` subfolders **and its own project-level CLAUDE.md** (what the project is, its one goal, Claude's role). Ideas land in Inputs, Claude works in Process, finished work goes to Outputs, metrics to Feedback.
- **Open a single project as its own vault** (*Manage vaults → Open folder as a vault → Trust*) so Claude sees only that job's CLAUDE.md. **The big vault plans; a single project ships.**
- **Build skills** — anything done more than once becomes a saved markdown skill in the project's `skills/` folder, with a clear name + when-to-trigger description. Then "run the [name] skill" executes it your way. (Same idea as this repo's [[Agent Skills]] and `.claude/skills/`.)
- **Wire in live data** — connect read-only MCP servers, e.g. Google Calendar:
  ```bash
  claude mcp add google-workspace uvx workspace-mcp --tools calendar
  ```
  Add Gmail/Slack/Notion the same way; **grant read-only** wherever possible.
- **Put it on autopilot** — schedule a daily task (Claude Desktop *Schedule → New task*) that files new Inputs, links them, flags stale notes, and writes a 3-line "what changed overnight" summary.

## Outcome
Claude stops forgetting you at the end of each session. You get a vault holding everything, a model that resumes exactly where it left off, and a graph that grows itself — all plain text, all yours, portable across models. You stop re-explaining yourself and stop rebuilding context from memory every time.

> [!warning] One rule you never break: **keys, not prompts.** Telling an agent "don't delete this" is a suggestion, not a safety control. If it *can* delete a file or send an email, assume one day it will. Enforce access at the permission level — read-only, scoped keys — never with words in a prompt.

## 📖 Further reading
- [[LLM Knowledge Bases]] — the Karpathy LLM Wiki methodology this guide operationalizes.
- [[OpenKB]] — a CLI that automates this whole compile-to-wiki loop; [[Second Brain Design]] — the PKM design behind this vault; [[Brain]] — this digital garden.
- [[Building a Second Brain]] (Tiago Forte) · [[Zettelkasten]] · [[Digital Garden]] · [[Obsidian]]
- [[Harness Engineering]] · [[Context Engineering]] — making the agent-on-top half work well.
- Ready-made repos named in the guide: `claude-obsidian` (AgriciDaniel), `obsidian-second-brain` (eugeniughelbur, 43 commands, multi-agent), `second-brain-starter` (coleam00). Source: [@undefinedKi thread](https://x.com/undefinedKi/status/2068306794116501544), 2026-06-20.

---
Template: [[templates/knowledge_note_how_to]]
