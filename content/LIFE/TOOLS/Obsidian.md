---
title: "Obsidian"
date:  2022-09-06
enableToc: true
openToc: true
tags: ["tool", "obsidian", "notes", "markdown", "local-first", "knowledge-management"]
type: tool
summary: "Local-first Markdown note app with links, backlinks, graph, Canvas and plugins — why I chose it, how to set it up for Zettelkasten, Cornell notes, mind maps and flashcards, and what it costs."
agent-reviewed: 2026-11-13

---
# Obsidian
Note taking and maintaining tool.

Obsidian is a note-taking app that works on a folder of plain Markdown files on your own disk. The folder is called a *vault*. The app adds links between notes, backlinks, a graph view, search and plugins on top of those files, but the files stay yours. You can open them in any text editor, put them in Git, or let an AI agent edit them. That last point is why it became the base of my whole knowledge system.

## Links
### Description
[Obsidian](https://obsidian.md/)
### Download
[Releases · obsidianmd/obsidian-releases (github.com)](https://github.com/obsidianmd/obsidian-releases/releases)
Desktop: Windows, macOS, Linux. Mobile: iOS and Android.
### Plugins:
1. [MarkMindCkm/obsidian-markmind: A mind map, outline and pdf annotate tool for obsidian,It support mobile and desktop (github.com)](https://github.com/MarkMindCkm/obsidian-markmind)
2. [liamcain/obsidian-calendar-plugin: Simple calendar widget for Obsidian. (github.com)](https://github.com/liamcain/obsidian-calendar-plugin)
3. [st3v3nmw/obsidian-spaced-repetition](https://github.com/st3v3nmw/obsidian-spaced-repetition) — flashcards written inside your notes, reviewed with spaced repetition
4. [zsviczian/obsidian-excalidraw-plugin](https://github.com/zsviczian/obsidian-excalidraw-plugin) — hand-drawn diagrams and sketchy mind maps stored in the vault

## 🧩 Key features
- **Plain Markdown files** — no proprietary database, no lock-in. If Obsidian disappeared tomorrow, the notes would still open.
- **Wikilinks and backlinks** — a note's name in double square brackets links it; every note shows what links *to* it.
- **Graph view** — the network of notes and links, useful for spotting clusters and orphans.
- **Properties** — YAML frontmatter (title, date, tags, type, summary) edited as fields.
- **Canvas** (core plugin, since v1.1 in December 2022) — an infinite board of cards, notes and links, saved in the open JSON Canvas format; good for mind maps and planning.
- **Bases** (core plugin, public since v1.9.10 in August 2025) — database views over your notes: table, list, cards and map layouts, filtered and calculated from their properties, saved as `.base` files.
- **Templates and daily notes** (core plugins) — a fixed structure for book notes, how-tos, journals.
- **Web Clipper** — the official, free and open-source browser extension that saves web pages as Markdown into the vault.
- **Obsidian CLI** (since v1.12, February 2026) — control the running app from the terminal, which is handy for scripts and AI agents.
- **Community plugins** — more than 10,000 of them (November 2026), for almost any workflow (see the setup below).
- **Works offline** — sync is optional and you choose how: paid Obsidian Sync, Git, or any folder-sync tool.

## 🛠️ Setup for the note-taking methods
| Method | How to do it in Obsidian |
|---|---|
| [[Zettelkasten]] | One note per idea, title = the claim, links in the body, a few hub notes as the index. Core features are enough. |
| [[Cornel Notes Taking System]] | A template with `## Notes`, `## Cues`, `## Summary` sections. |
| [[Mind map]] | Canvas for maps that point to real notes, or the Markmind plugin to turn an outline into a map. See [[How to create mind map]]. |
| [[Spaced Repetition and Flashcards from Your Own Notes]] | The Spaced Repetition plugin turns `question::answer` lines in your notes into a review deck. |
| Book notes ([[How to take smart notes]], [[LIFE/BOOKS/Building a Second Brain]]) | A book template: 3-sentence summary, impressions, how it changed me, notes, quotes. |

A sensible starting set: core plugins only for the first month, then add one community plugin at a time when you feel a real need.

## Reasoning for
It is great for note taking. It allows to create a view where you can see how your notes are connected to each other. 
1. It is online and offline - you can keep it 100% offline - no one can erase the notes
2. It is a great tool to maintain your [[LIFE/KNOWLEDGE/INFO/Digital Garden]]
3. It is very customizable
4. I can use it for mind mapping

And the reason that matters most since 2025: **AI agents can work on the vault directly.** Because notes are just Markdown files in a folder, a coding agent like Claude Code can read, write, link and reorganise them with no plugin or API in between. My vault is now mostly maintained by agents (ingesting sources, writing notes, keeping indexes up to date) while I decide what goes in. More in [[Second Brain Design]], [[Building an AI Second Brain]] and [[LLM Knowledge Bases]].

## 💰 Pricing
Prices as of November 2026:
- **The app is free**, including for work. Since February 2025 companies no longer need a paid licence; the \$50 per user per year commercial licence is now optional. Nothing in this note needs a paid tier.
- **Obsidian Sync** — end-to-end encrypted sync between devices, with version history. Standard: \$4 per user per month billed annually (\$5 monthly), 1 GB, 1 vault. Plus: \$8 (\$10 monthly), 10–100 GB, up to 10 vaults.
- **Obsidian Publish** — publishes selected notes as a website. \$8 per site per month billed annually (\$10 monthly).
- **Catalyst** — a \$25 one-time payment to support development, with early-access builds.
- Free alternatives: Git or any folder-sync tool for sync, and a static site generator such as Quartz for publishing (that's how my notes are published).

## Alternatives considered
Onenote
Evernote
Notion

A short take on each (2026):
- **[[OneNote]]** — great for free-form capture (handwriting, clips), but notes live in a proprietary store. I used it before Obsidian.
- **Evernote** — strong web clipper and search, but proprietary, cloud-first and paid for serious use.
- **Notion** — excellent for databases and team pages, but online-first and your notes live on Notion's servers. Exports work, but it's not plain text you own.
- **Logseq** — not on my original list, but today the closest open-source alternative: local Markdown, but organised as an outliner (bullets), with daily journals at the centre.

## Resources
[[LIFE/KNOWLEDGE/INFO/Obsidian]]
[[LIFE/KNOWLEDGE/HOWTO/How to create mind map]]
[[Obsidian Skills]] — official agent skills teaching a coding agent to drive Obsidian (Markdown, Bases, Canvas, CLI)
- [Obsidian Help — official documentation](https://help.obsidian.md/)
- [Obsidian pricing](https://obsidian.md/pricing)
- [Obsidian is now free for work (February 2025)](https://obsidian.md/blog/free-for-work/)
- [Bases — Obsidian Help](https://obsidian.md/help/bases)
- [Obsidian CLI — Obsidian Help](https://obsidian.md/help/cli)
- [Obsidian Web Clipper](https://obsidian.md/clipper)

---
Template: [[templates/tool]]
