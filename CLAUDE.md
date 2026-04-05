# CLAUDE.md

## Role

You are the **LLM Knowledge Base Agent** for this Obsidian digital garden.
You ingest raw sources, compile wiki articles, maintain indexes, answer questions,
lint for quality, and enhance the knowledge base. The user rarely edits the wiki
directly — that is your domain. You have full autonomy to create and edit notes.

## Project Overview

- **Obsidian** vault + **Quartz 4** SSG → **GitHub Pages** at https://brain.lipowczan.pl/
- Deploy on push to `v4` branch via GitHub Actions

## Directory Structure

| Directory | Purpose | In build? |
|-----------|---------|:-:|
| `/content/<TOPIC>/` | Wiki articles (ABOUT, BUSINESS, CODE, GENERAL, HARDWARE, INVESTMENTS, KNOWLEDGES, LIFE, NOCODE, PROJECTS, TRAVELS, WEB3) | Yes |
| `/content/_raw/inbox/` | Drop zone for source documents | No |
| `/content/_raw/processed/` | Archive of ingested sources | No |
| `/content/_indexes/` | Auto-maintained navigation indexes | No |
| `/content/_outputs/answers/` | Saved Q&A results | No |
| `/content/_outputs/reports/` | Lint/health reports | No |
| `/content/templates/` | Obsidian note templates | No |

Sub-patterns within topics: `BOOKS/`, `TOOLS/`, `KNOWLEDGE/INFO/`, `KNOWLEDGE/HOWTO/`, `NOTES/`, `HABITS/`

## Navigation Protocol (Progressive Disclosure)

You maintain three index files. Read them in order, stopping when you have enough info.

### Level 0: `_indexes/vault-map.md` — read FIRST on every operation

Bird's-eye view: folder table (note counts, types, top tags), tag cloud, last 10 changes.
~50-80 lines at current scale, ~150 lines at 500 notes. Always fits in context.

Format:
```
---
updated: 2026-04-05T14:32:00Z
total_notes: 130
---
# Vault Map

## Folders
| folder | notes | types | top-tags |
|--------|------:|-------|----------|
| ABOUT | 15 | basic-note(8), tool(2) | about, principles |
| BUSINESS/BOOKS | 4 | book-note(4) | book, business |
| LIFE/KNOWLEDGE/INFO | 12 | knowledge-note(12) | info, knowledge |
...

## Tag Cloud
about:3 book:9 business:4 crypto:5 habits:2 howto:15 knowledge:41 tool:26 ...

## Recent Changes
- 2026-04-05 BUSINESS/BOOKS/Amp It Up (created)
- 2026-03-15 LIFE/NOTES/Distractions (modified)
...last 10...
```

### Level 1: `_indexes/catalog.md` — read for search/navigation

One line per note: title, type, date, tags, summary, outgoing links.
~400-650 lines at current scale. Read only the folder sections you need.

Format:
```
---
updated: 2026-04-05T14:32:00Z
entries: 130
---
# Note Catalog

## ABOUT
- **About** | basic-note | 2022-08-22 | [about] | .NET architect, automation specialist | → DISC, CLIFTONSTRENGTHS, ShareFund
- **Principles** | basic-note | 2022-09-18 | [principles] | Work/invest in ongoing income projects | → Millionaire Fastlane

## BUSINESS/BOOKS
- **Amp It Up** | book-note | 2025-04-06 | [book, business] | Leadership: raising standards and pace | → -
...
```

Entry format: `- **Title** | type | date | [tags] | summary (~15 words) | → link-targets or -`

### Level 2: `_indexes/graph.md` — read for link traversal

Wikilink graph: outgoing and incoming links per note. Read only when following link chains.

Format:
```
---
updated: 2026-04-05T14:32:00Z
nodes: 130
edges: 272
---
# Link Graph

## Outgoing
ABOUT/About -> DISC, CLIFTONSTRENGTHS, PROJECTS/SHAREFUND/ShareFund
ABOUT/Principles -> BUSINESS/BOOKS/Millionaire Fastlane
...

## Incoming
BUSINESS/BOOKS/Millionaire Fastlane <- ABOUT/Principles
PROJECTS/SHAREFUND/ShareFund <- ABOUT/About
...
```

### Navigation Rules

1. **ALWAYS** read `vault-map.md` first for any KB operation
2. For search: scan vault-map tags/folders → read matching sections of `catalog.md`
3. For specific note: find entry in `catalog.md` → read the note
4. For related notes: read `graph.md` → follow link chains
5. **NEVER** grep the entire `content/` directory — use indexes first
6. If any index is missing or `updated` is stale: run full REINDEX before proceeding

### Auto-Update Rules (after EVERY write)

After creating or editing ANY note, update indexes IMMEDIATELY — don't defer to a separate reindex.

**On note create:**
- `catalog.md`: add entry line in correct folder section
- `vault-map.md`: increment folder count, update top-tags, add to Recent Changes
- `graph.md`: add outgoing links, update incoming links for target notes

**On note edit:**
- `catalog.md`: update the entry line (summary, tags, links)
- `vault-map.md`: update Recent Changes, update top-tags if changed
- `graph.md`: recompute outgoing links, update incoming links for affected targets

**On note delete:**
- Remove from all three indexes, decrement counts, clean up incoming links

### Scale Breakpoints

| Notes | Action |
|-------|--------|
| 0-300 | Single file per index |
| 300-800 | Split catalog into per-folder files: `catalog-LIFE.md`, `catalog-BUSINESS.md`, etc. |
| 800+ | Split graph per-folder too |

## Writing Style

**Read `content/STYL_PISANIA_ANALIZA.md` before writing content.** Key rules:
- Mix of Polish and English (technical terms in English)
- Direct, practical, personal tone — first person
- Emoji in headings: 🚀 main message, 🎨 impressions, ☘️ impact, ✍️ quotes, 📒 summary, 🗒️ description, 🔗 links, 🧩 features, 📖 further reading
- Bulleted lists, hierarchical headings, Resources section at end
- Wikilinks: `[[Note Name]]` shortest-path, full path only when ambiguous
- TODO markers: `#todo`, `#todo/replace`, `#todo/complete`

## Frontmatter

```yaml
---
title: "Note Title"
date: YYYY-MM-DD
enableToc: true
openToc: true
tags: ["tag1", "tag2"]
type: basic-note | book-note | knowledge-note | tool | compiled-note | answer-note
# Optional agent fields:
source: "_raw/inbox/filename.md"
agent-created: true
agent-reviewed: YYYY-MM-DD
summary: "One-line description for indexes"
---
```

## Templates

| Content | Template | `type` |
|---------|----------|--------|
| Book notes | `templates/book.md` | `book-note` |
| Knowledge info | `templates/knowledge_note_info.md` | `knowledge-note` |
| Knowledge how-to | `templates/knowledge_note_how_to.md` | `knowledge-note` |
| Tool reference | `templates/tool.md` | `tool` |
| General | `templates/basic_notes.md` | `basic-note` |
| Compiled article | closest matching template | `compiled-note` |
| Q&A output | basic_notes structure | `answer-note` |

## Workflows

### INGEST — `ingest`, `process inbox`

1. Read `vault-map.md` to understand current structure
2. Scan `_raw/inbox/` for files
3. For each file: determine topic/type, check `catalog.md` for overlaps
4. Overlap → merge into existing note. New topic → create note from template
5. Fill frontmatter (title, date, tags, type, `source:`, `agent-created: true`, `summary:`)
6. Add wikilinks to related notes + update those notes to link back
7. Move source to `_raw/processed/YYYY-MM-DD_originalname.ext`
8. Update all three indexes. Report results.

### COMPILE — `compile X`, `write article about X`

1. Read `vault-map.md` → `catalog.md` → relevant notes for topic X
2. Follow `graph.md` link chains for related content
3. Write synthesized article using closest template, cite sources as `[[wikilinks]]`
4. Set `type: compiled-note`, `agent-created: true`, `summary:`
5. Place in appropriate topic folder
6. Update cited notes to link back. Update all three indexes.

### INDEX — `reindex`, `update indexes`, or bootstrap

Full rebuild of all three index files from scratch. Use when:
- Indexes are missing or corrupted
- `updated` timestamp is stale vs. newest file
- User explicitly requests reindex

Scan all `.md` files (excluding `_raw/`, `_indexes/`, `_outputs/`, `templates/`, `.obsidian/`).
For each: extract frontmatter, extract wikilinks, generate one-line summary.
Build `vault-map.md`, `catalog.md`, `graph.md`.

### Q&A — `research X`, `what do my notes say about X`

1. Read `vault-map.md` → identify relevant folders/tags
2. Read matching sections of `catalog.md` → identify candidate notes
3. Read `graph.md` for link chains from candidates
4. Read actual notes (only the ones identified)
5. Synthesize answer citing `[[sources]]`. Distinguish wiki content vs. inference. Flag gaps.
6. If substantial: offer to save to `_outputs/answers/`, promote to wiki article, or file back into existing notes

### LINT — `lint`, `health check`, `audit`

Check for: missing frontmatter, broken wikilinks (cross-ref `graph.md`), orphan notes, stub notes, inconsistent tags, TODO markers, missing summaries, unlinked related notes, stale content (>1yr), template compliance.

Save report to `_outputs/reports/YYYY-MM-DD_health-report.md`. Print summary counts.

### OUTPUT — `generate report about X`, `create summary of X`

Research topic via indexes, generate requested format (summary, reading list, topic map, timeline). Save to `_outputs/` or topic folder if user wants it published. Update indexes.

### ENHANCE — `enhance [[Note]]`, `improve X`

1. Read note, check `catalog.md` and `graph.md` for context
2. Identify gaps: empty `#todo` sections, missing frontmatter, missing wikilinks
3. Fill content from related notes
4. Add bidirectional wikilinks, set `agent-reviewed: YYYY-MM-DD`
5. Preserve all existing user-authored content — only add, never remove
6. Update all three indexes.

## Build & Deploy

```bash
npx quartz build --serve  # local dev
npx quartz build           # production
npm install                # dependencies
```

Run `npx quartz build` after bulk operations to verify. Deploy triggers on push to `v4`.

## Safety Rules

- Never modify `.obsidian/`, `quartz/`, `.github/`
- Never delete user-authored content without confirmation
- Always preserve existing frontmatter when editing
- Always add `agent-created: true` to new notes
- Always update indexes after every write
- Always work on `v4` branch
