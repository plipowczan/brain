# KB Overhaul — Design Spec

**Date:** 2026-04-09
**Status:** Approved
**Scope:** Full restructure, cleanup, and expansion of Obsidian digital garden (brain.lipowczan.pl)

## Goals

1. Restructure folder taxonomy to reflect current professional focus (AI/agentic coding, SaaS, consulting)
2. Remove outdated/empty/placeholder notes that add no value
3. Update stale notes to reflect current state
4. Add missing tools and knowledge from current work context
5. Fix wikilinks and rebuild indexes

## Constraints

- Public digital garden — no confidential business data (financials, client details, contracts)
- Preserve all user-authored content — only delete confirmed items
- Maintain Obsidian + Quartz 4 compatibility
- Follow existing writing style (STYL_PISANIA_ANALIZA.md)
- All agent-created notes get `agent-created: true` frontmatter
- Work on `v4` branch

## New Folder Structure

```
content/
├── AI/                         # Main focus area
│   ├── KNOWLEDGE/HOWTO/
│   ├── KNOWLEDGE/INFO/
│   └── TOOLS/
├── CODE/                       # General development (non-AI)
│   ├── KNOWLEDGE/HOWTO/
│   ├── KNOWLEDGE/INFO/
│   └── TOOLS/
├── BUSINESS/                   # Consulting, strategy, branding, automation tools
│   ├── BOOKS/
│   ├── KNOWLEDGE/HOWTO/
│   ├── KNOWLEDGE/INFO/
│   └── TOOLS/
├── PROJECTS/
│   ├── QAMERA-AI/
│   ├── PLSOFT/
│   ├── BRAIN/
│   ├── AGENTIC-SYSTEMS/
│   ├── VALUE-BUILDERS/
│   ├── VALUE-BUILDERS-TRIBE/
│   └── ARCHIVE/               # ShareFund, old projects
├── LIFE/
│   ├── BOOKS/
│   ├── KNOWLEDGE/HOWTO/
│   ├── KNOWLEDGE/INFO/
│   ├── NOTES/
│   └── TOOLS/
├── ABOUT/
│   ├── HABITS/
│   └── Roles/
├── CRYPTO/                     # ex-WEB3, archive + refreshed concepts
│   ├── KNOWLEDGE/INFO/
│   └── NOTES/
├── TRAVELS/
│   ├── TOOLS/
│   └── TRIPS/
└── KNOWLEDGES/QUOTES/
```

**Removed folders:** GENERAL, HARDWARE, INVESTMENTS, NOCODE, WEB3 (renamed to CRYPTO)

## Migration Map

### File Moves

| Note | From | To |
|------|------|----|
| Harness Engineering | CODE/KNOWLEDGE/INFO | AI/KNOWLEDGE/INFO |
| LLM Knowledge Bases | CODE/KNOWLEDGE/INFO | AI/KNOWLEDGE/INFO |
| Agent Skills | CODE/TOOLS | AI/TOOLS |
| Autoresearch | CODE/TOOLS | AI/TOOLS |
| Kindle | HARDWARE | LIFE/TOOLS |
| Reading list | GENERAL | LIFE/NOTES |
| What tools I use | GENERAL | ABOUT |
| Airtable | NOCODE/TOOLS | BUSINESS/TOOLS |
| Make | NOCODE/TOOLS | BUSINESS/TOOLS |
| Zapier (tool) | NOCODE/TOOLS | BUSINESS/TOOLS |
| Excalidraw | NOCODE/TOOLS | BUSINESS/TOOLS |
| Notion | NOCODE/TOOLS | BUSINESS/TOOLS |
| Sendgrid | NOCODE/TOOLS | BUSINESS/TOOLS |
| ClickUp | BUSINESS/TOOLS | BUSINESS/TOOLS (no move, stays) |
| 6x NOCODE/KNOWLEDGE/HOWTO/* | NOCODE/KNOWLEDGE/HOWTO | BUSINESS/KNOWLEDGE/HOWTO |
| All WEB3/* notes | WEB3/ | CRYPTO/ (preserve sub-structure) |
| ShareFund | PROJECTS/SHAREFUND | PROJECTS/ARCHIVE/SHAREFUND |
| Drug Temperature Control System | PROJECTS | PROJECTS/ARCHIVE |
| Genti Retail | PROJECTS | PROJECTS/ARCHIVE |
| Work attendance management system | PROJECTS | PROJECTS/ARCHIVE |
| PULS | PROJECTS/AH | PROJECTS/ARCHIVE |
| Programmer and what's next | PROJECTS/SECONDBRAIN | LIFE/NOTES |

### Profile photo update

- Copy `C:\Users\pawel\OneDrive\Pictures\SESJA BIZNESOWA\2023\JPG\_DSC0755_square.jpg` to `content/ATTACHMENTS/pawel_lipowczan_2023.jpg`
- Update About.md to reference new photo

## Notes to Delete (25)

| # | Note | Location | Reason |
|---|------|----------|--------|
| 1 | Qualcomm | INVESTMENTS | Empty |
| 2 | Tools | GENERAL | Dataview query, replaced by indexes |
| 3 | Tools | NOCODE | Dataview query |
| 4 | Tools | TRAVELS | Dataview query |
| 5 | Altogic | NOCODE/TOOLS | Dead platform |
| 6 | Xata | NOCODE/TOOLS | No content |
| 7 | Marble | BUSINESS/TOOLS | No content |
| 8 | SendFox | BUSINESS/TOOLS | No content |
| 9 | Webflow | NOCODE/TOOLS | User confirmed removal |
| 10 | Blinkist | BUSINESS/TOOLS | Placeholder, unused |
| 11 | Descript | BUSINESS/TOOLS | Placeholder, unused |
| 12 | Happyscribe | BUSINESS/TOOLS | Placeholder, unused |
| 13 | Movavi | BUSINESS/TOOLS | Placeholder, unused |
| 14 | Audioteka | LIFE/TOOLS | Placeholder, unused |
| 15 | Brave | LIFE/TOOLS | Placeholder, unused |
| 16 | Feedly | LIFE/TOOLS | Placeholder, unused |
| 17 | Firefox | LIFE/TOOLS | Placeholder, unused |
| 18 | Goodreads | LIFE/TOOLS | Placeholder, unused |
| 19 | LubimyCzytac | LIFE/TOOLS | Placeholder, unused |
| 20 | Dashlane | LIFE/TOOLS | Replaced by 1Password |
| 21 | Twoje kompetentne dziecko | LIFE/BOOKS | Placeholder, unread (add to Reading list) |
| 22 | W sercu emocji dziecka | LIFE/BOOKS | Placeholder, unread (add to Reading list) |
| 23 | Untitled | BUSINESS/KNOWLEDGE/HOWTO | Empty |
| 24 | Untitled | PROJECTS | Just a YouTube link |
| 25 | Hospital Logistics | PROJECTS | Empty, nothing to archive |

## New Notes to Create (~22)

### AI/TOOLS/
- **Claude Code** — Primary dev environment: CLI, skills, hooks, MCP servers
- **Cursor** — AI-powered IDE with coding agents
- **VAPI** — Voice agents and voicebots platform
- **NemoClaw** — OpenClaw + NVIDIA Nemotron inference setup

### AI/KNOWLEDGE/INFO/
- **Agentic Coding** — Paradigm: CTO as architect of agent environments, not manual coder
- **Context Engineering** — Designing LLM context: CLAUDE.md, MCP, skills, sub-agents
- **Specification-Driven Development** — OpenSpec / SDD framework

### CODE/TOOLS/
- **Docker** — Containerization
- **Supabase** — Backend-as-a-service, database
- **React** — Frontend framework (learning)
- **Next.js** — React meta-framework
- **Google Cloud** — Qamera AI infrastructure

### BUSINESS/KNOWLEDGE/INFO/
- **Product-Market Fit** — Concept, Sean Ellis test, Qamera experiences
- **Build in Public** — Strategy: transparency, LinkedIn, showing real work
- **LinkedIn Strategy** — Data-driven approach: formats, timing, content pillars

### BUSINESS/TOOLS/
- **n8n** — Workflow automation engine
- **1Password** — Password manager (replaces Dashlane)

### LIFE/TOOLS/
- **Microsoft Edge** — Browser (replace placeholder)

### PROJECTS/ (one note per project folder)
- **QAMERA-AI/Qamera AI** — AI virtual photo studio, B2B SaaS
- **PLSOFT/PLSoft** — Consulting practice
- **BRAIN/Brain** — This digital garden: purpose, stack, workflow
- **AGENTIC-SYSTEMS/Agentic Systems** — Agent environments, shared-skills, 2-company architecture
- **VALUE-BUILDERS/Value Builders** — Course — trainer role
- **VALUE-BUILDERS-TRIBE/Value Builders Tribe** — Community — Tech Lead/Mentor role

### CRYPTO/KNOWLEDGE/INFO/
- **Bitcoin** — Refreshed BTC note: concept, current state
- **Stan rynku krypto 2026** — Overview: what changed since 2022

## Placeholders to Fill (8)

| Note | Type | Action |
|------|------|--------|
| Company of One | book-note | Fill with book notes |
| AutomationSpecialist | basic-note | Fill role description from context |
| Developer | basic-note | Fill role description |
| Founder | basic-note | Fill role description |
| Friend | basic-note | Fill role description |
| Son | basic-note | Fill role description |
| Authenticator | tool | Fill tool description |
| PowerToys | tool | Fill tool description |
| Blue light | knowledge-note | Fill knowledge content |
| 12 Rules for Life | book-note | Fill book notes |

## Existing Notes to Update (10)

| Note | What to update |
|------|---------------|
| About | New photo, updated bio (CTO 200IQ Labs, agentic coding focus) |
| What tools I use | Move to ABOUT, refresh tool list |
| My career path | Add current chapter: CTO 200IQ Labs, PLSoft consulting, agentic coding |
| Principles | Check currency, add new principles if applicable |
| Projects | Refresh project list (Qamera AI, PLSoft, VB, VBT, Agentic Systems) |
| Obsidian | Update: current usage with LLM agents, Quartz 4 |
| Make | Update: current role in toolbox (not primary tool anymore) |
| ClickUp | Update: current use case (daily/weekly execution, CRM) |
| Airtable | Update: research database, content inventory |
| Digital Garden | Update: current state of brain.lipowczan.pl |

## Execution Order

1. **Delete** 25 notes (move unread books to Reading list first)
2. **Create new folder structure** and **migrate** existing files
3. **Update** 10 existing notes
4. **Create** ~22 new notes
5. **Fill** ~10 placeholders
6. **Fix wikilinks** — broken links from moves/deletes, add bidirectional links for new notes
7. **Full reindex** — rebuild vault-map.md, catalog.md, graph.md
8. **Verify build** — `npx quartz build`

## Totals

- **Before:** 163 notes, 12 top-level folders
- **After:** ~160 notes, 9 top-level folders
- **Deleted:** 25
- **Moved:** ~22
- **Created:** ~22 new notes
- **Updated:** ~10 existing notes (content refresh)
- **Filled:** ~10 placeholders (existing files, new content)
