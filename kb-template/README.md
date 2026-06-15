# Knowledge Base Template

A Claude Code–driven knowledge base: an Obsidian-style markdown vault plus a set
of skills that ingest sources, compile articles, answer questions, lint for
quality, and keep navigation indexes up to date. Publishing (Quartz/GitHub
Pages) is intentionally **not** included — this template is about *managing*
knowledge, not publishing it.

## What you get

- `content/` — your vault. Topic folders hold notes; `_raw/` is the ingest drop
  zone; `_indexes/` holds auto-maintained navigation files; `_outputs/` holds
  generated answers and reports; `templates/` holds note templates.
- `.claude/skills/` + `.claude/commands/` — the management skills below.

## Quickstart (manual)

1. Open this folder in Claude Code.
2. Install script prerequisites: `pip install -r requirements.txt`.
3. Try the skills against the shipped example:
   - `/qa what does this vault say about wikilinks` — answer from notes.
   - `/lint` — health check.
   - Drop a file in `content/_raw/inbox/` (a `sample-source.md` is provided) and
     run `/ingest` to turn it into a note.
   - `/reindex` — rebuild the three indexes.
4. Delete the `content/REFERENCE/` example notes when you no longer need them.

> A guided `/onboard` command that personalizes the vault to your name, topics,
> and writing voice is added in a later step of the template build.

## Skills

| Command | What it does |
|---------|--------------|
| `/ingest` | Turn raw sources (files in `_raw/inbox/`, or YouTube URLs) into wiki notes; updates indexes. |
| `/compile` | Synthesize a new article from existing notes on a topic. |
| `/enhance` | Improve a single note: fill gaps, add wikilinks, mark reviewed. |
| `/qa` | Answer a question from the vault, citing notes. |
| `/lint` | Audit vault health: frontmatter, broken links, orphans, stubs, stale notes. |
| `/output` | Generate a report/summary (reading list, topic map, timeline). |
| `/reindex` | Rebuild `vault-map.md`, `catalog.md`, `graph.md` from all notes. |
| (skill) `excalidraw-diagram` | Generate Excalidraw diagram JSON to embed in notes. |
| (skill) `research`, `research-deep`, … | Structured multi-item web research into the vault (best-effort; depends on your Claude Code web tools). |

## Prerequisites

- **Python 3** with **PyYAML** — required for the reindex and lint scripts
  (`pip install -r requirements.txt`).
- **Node** — optional, only for `npm run format` (Prettier).
- **yt-dlp** (+ **ffmpeg**) on PATH — optional, only for ingesting YouTube URLs.

## Adding publishing later

This template omits the Quartz static-site pipeline and the optional `brain-mcp`
server on purpose. Either can be layered on top of `content/` later without
changing how the skills work.
