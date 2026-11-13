---
title: "Second Brain Design"
date: 2026-01-26
enableToc: true
openToc: true
tags: ["knowledge", "info", "pkm", "obsidian", "ai"]
type: knowledge-note
agent-created: true
summary: "PKM system design: Obsidian vault + Claude Code + Skills — Capture, Organize, Retrieve with AI automation"
agent-reviewed: 2026-11-13
---

# Second Brain Design

## 🗒️ Description

A **second brain** is an external system for storing and organising knowledge. The idea comes from **PKM (Personal Knowledge Management)**: deliberately collecting, organising and using information.

A traditional second brain rests on three functions:
- **Capture** — quickly capturing thoughts, notes and ideas
- **Organize** — categorising and connecting information
- **Retrieve** — finding knowledge when you need it

The problem? All three take a lot of manual work. AI changes the rules. Instead of you organising by hand, AI processes the notes, finds connections and generates documents from the existing base.

A second brain with AI is more than storage. It's **a system that actively helps you use your knowledge**.

## 🧩 Architecture

### Obsidian as the foundation
- **Local files** — notes are plain `.md` files on disk
- **Offline-capable** — no internet needed
- **Markdown** — the format LLMs understand best
- **Graph view** — shows the connections between notes
- **No vendor lock-in** — the files open in any editor

Unlike Notion or Evernote, notes in [[LIFE/TOOLS/Obsidian|Obsidian]] are plain text files. [[Claude Code]] can read, edit and create them directly, with no extra setup.

### Claude Code as the brain
What Claude Code can do beyond coding:
- **File operations** — reading, editing and creating files
- **Search** — searching the content and structure of a project
- **Terminal commands** — running scripts and tools
- **Web search** — research straight from the terminal

Only code intelligence (understanding syntax, refactoring) is specific to coding. The rest are general abilities of an AI assistant with access to the file system.

### Skills as the third pillar
[[Agent Skills]] tie it all into a system. They give Claude Code the knowledge, processes and guidelines for a specific workflow: Markdown files with instructions, loaded on demand.

## 📐 PARA Method

A folder structure based on PARA (Projects, Areas, Resources, Archive), Tiago Forte's method from [[LIFE/BOOKS/Building a Second Brain]]:

```text
obsidian-vault/
├── 00-inbox/           # Quick captures
├── 01-projects/        # Active projects
├── 02-areas/           # Ongoing responsibilities
├── 03-resources/       # Reference material
├── 04-archive/         # Completed items
├── templates/          # Document templates
└── .claude/
    └── skills/         # Claude Code skills
```

- **Projects** — active projects with a concrete deadline
- **Areas** — ongoing areas of responsibility (health, finances, career)
- **Resources** — reference material for later
- **Archive** — finished projects and inactive topics

## 🤖 Skills for PKM

### Research Engine
- Searches the web on a given topic
- Collects the key information and sources
- Creates a Markdown note
- Saves it to the right folder in the vault

### Document Generator
- Reads the chosen source notes
- Analyses their structure and key concepts
- Applies a template and style guide
- Generates a finished document (e.g. meeting notes → a document with action items)

### Daily Review
- Scans today's notes
- Writes a summary of the day
- Finds connections with existing knowledge
- Suggests next actions

### Content Creator
- Analyses the notes on a topic
- Generates content ideas
- Writes drafts (articles, posts, scripts)
- Keeps a consistent voice and style

## 🔧 Integrations

Two ways to connect external tools:

**1. MCP servers** — a direct connection to services:
- Gmail/Outlook — through libraries or MCP servers
- Google Calendar — MCP server
- ClickUp — MCP server or API

**2. Skills with scripts** (the preferred approach):
- Your own Python/Node.js scripts in the skills folder
- Full control over the logic
- Easy debugging
- Everything in one place (in the vault)

## 📊 Why Scripts over MCP

MCP servers load **all their tools up front**, which is context bloat. Skills with scripts solve that:
- **Speed** — no extra communication layer
- **Control** — full control over the logic
- **Reduced context overhead** — a script is loaded only when it's needed
- **Debugging** — everything is in one place, so problems are easier to find

Make.com can expose scenarios as MCP tools. It's an interesting option, but it adds another layer. Scripts in skills are simpler.

> [!note] Update, November 2026
> Newer Claude Code versions can defer MCP tool definitions and load each one only when it's needed (tool search), so the up-front cost is much smaller than when this note was written in January 2026. The argument still holds for clients that load every tool at the start, and scripts in skills keep the other advantages above.

## 📝 Progressive Disclosure

The idea that sets skills apart from other ways of extending AI. There are three levels of loading:

1. **Description** — a short description that is always visible (one line)
2. **SKILL.md** — the full instructions, loaded only when needed
3. **Reference files** — extra resources loaded for specific operations

The effect: hundreds of skills without overwhelming the context window. The agent specialises per session and loads only what it needs.

Compared with MCP servers: MCP loads **all tools up front**. With 50 tools, all their descriptions take up space in the context window. That's **context bloat**: valuable space spent on things you don't use. More in [[Context Engineering]].

## 📒 Summary

1. **Claude Code isn't only for coding** — file operations, search and web search make it a general-purpose assistant
2. **Obsidian + Claude Code = a perfect match** — Markdown + local files + AI processing
3. **Skills give context-efficient extensibility** — progressive disclosure prevents context bloat
4. **Start simple, grow gradually** — one skill at a time, iterating on real needs
5. **The human touch remains essential** — AI augments thinking, it doesn't replace it
6. **A file-based workflow is powerful** — version control, portability, privacy

## 🔗 Resources

- [Obsidian](https://obsidian.md) — official site
- [Claude Code Documentation](https://docs.anthropic.com/claude-code) — documentation
- [PARA Method](https://fortelabs.com/blog/para/) — a system for organising knowledge
- [[LIFE/TOOLS/Obsidian|Obsidian]] — the tool as the foundation
- [[Claude Code]] — primary AI assistant
- [[Agent Skills]] — the system for extending the agent
- [[Context Engineering]] — managing context when working with LLMs
- [[Digital Garden]] — publishing a knowledge base
- [[LIFE/BOOKS/Building a Second Brain]] — Tiago Forte's book behind PARA and the capture–organise–distil–express loop
- [[Zettelkasten]] — the slip-box method: one idea per note, linked; how an agent-maintained vault keeps it
- [[LLM Knowledge Bases]] — Andrej Karpathy's method: an LLM builds and maintains the knowledge base from raw sources
- [[Building an AI Second Brain]] — step-by-step build of a Claude + Obsidian second brain on that pattern
- [[Spaced Repetition and Flashcards from Your Own Notes]] — the retrieve step for what you need in your head, not only in the vault

---
Template: [[templates/knowledge_note_info]]
