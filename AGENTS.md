# AGENTS.md

**Single source of truth for every agent in this repo** (Claude Code, Codex, OpenCode, …).
`CLAUDE.md` is a thin pointer that imports this file — edit **AGENTS.md**, never `CLAUDE.md`.

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
| `/content/<TOPIC>/` | Wiki articles (ABOUT, AI, BUSINESS, CODE, GENERAL, HARDWARE, INVESTMENTS, KNOWLEDGES, LIFE, NOCODE, PROJECTS, TRAVELS, WEB3) | Yes |
| `/content/_raw/inbox/` | Drop zone for source documents | No |
| `/content/_raw/processed/` | Archive of ingested sources | No |
| `/content/_indexes/` | Auto-maintained navigation indexes | No |
| `/content/_outputs/answers/` | Saved Q&A results | No |
| `/content/_outputs/reports/` | Lint/health reports | No |
| `/content/templates/` | Obsidian note templates | No |

Sub-patterns within topics: `BOOKS/`, `TOOLS/`, `KNOWLEDGE/INFO/`, `KNOWLEDGE/HOWTO/`, `NOTES/`, `HABITS/`

GitHub/open-source repositories → individual `tool` notes in the topic folder matching their domain (e.g., `AI/TOOLS/`, `CODE/TOOLS/`). Each repo gets its own note, not merged into a parent tool note.

## Two documentation regimes — do not mix them

| Layer | Governed by | Rule |
|-------|-------------|------|
| `content/` | **Index protocol** (`_indexes/vault-map.md` → `catalog.md` → `graph.md`) + this file | **Do NOT create per-folder `AGENTS.md` under `content/`.** Progressive disclosure is already provided by the 3 indexes; update them after every note create/edit/delete. |
| code / harness (`scripts/`, `brain-mcp/`, `.claude/skills/`) | **DOX tree** (this file + per-code-folder `AGENTS.md`) | Read the folder's `AGENTS.md` before editing its code; update it after. See "DOX doc tree" below. |

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

**Read `content/WRITING_STYLE_ANALYSIS.md` before writing content.** Key rules:
- **English only** (canonical vault language as of 2026-05-17; technical terms in English)
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

Each workflow is a skill with a matching slash command:

- **INGEST** (`ingest`, `process inbox`) — `.claude/skills/ingest/`, command `/ingest`
- **COMPILE** (`compile X`, `write article about X`) — `.claude/skills/compile/`, command `/compile`
- **INDEX** (`reindex`, `update indexes`) — `.claude/skills/reindex/`, command `/reindex`
- **Q&A** (`research X`, `what do my notes say about X`) — `.claude/skills/qa/`, command `/qa`
- **LINT** (`lint`, `health check`, `audit`) — `.claude/skills/lint/`, command `/lint`
- **OUTPUT** (`generate report about X`) — `.claude/skills/output/`, command `/output`
- **ENHANCE** (`enhance [[Note]]`, `improve X`) — `.claude/skills/enhance/`, command `/enhance`
- **REFACTOR** (`rename note`, `merge notes`, `split note`) — `.claude/skills/refactor/`, command `/refactor` — note surgery (rename/move/merge/split) with automatic wikilink repair
- **GAPS** (`find gaps`, `coverage analysis`, `what's missing`) — `.claude/skills/gaps/`, command `/gaps` — surfaces weakly-connected notes, missing topics, thin areas
- **CURATE** (`curate`, `prune`, `cleanup`, `retire stale notes`) — `.claude/skills/curate/`, command `/curate` — staleness/relevance hygiene: scores notes, proposes archive/merge/refresh, retires confirmed notes to `_graveyard/` (reversible)
- **EXPORT** (`export [[A]] [[B]]`, `export #tag`, `export FOLDER`, `export --public …`) — `.claude/skills/export/`, command `/export` — packs selected notes into a portable `brain-pack-*.zip`; two privacy levels: `me` (default, verbatim, read-only) and `--public` (redaction pipeline: policy + `content/_privacy.md` overrides, verdict table, sweep + audit nets, local report)
- **IMPORT** (`import <pack.zip>`) — `.claude/skills/import/`, command `/import` — imports a brain-pack bundle from another brain: validates, triages collisions, adapts placement to this vault's taxonomy, stamps provenance, updates indexes, writes report; ≤2 prompts per run

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

## kb-template maintenance

`kb-template/` is the canonical source for the published **second-brain-template** repo
(synced via `scripts/`). **RULE: every change to anything under `kb-template/` MUST be
recorded in `kb-template/CHANGELOG.md`** (newest entry under `## [Unreleased]`, Keep-a-
Changelog format) so subscribers who cloned the template know what to pull. No silent
template edits. After changing a shared skill, also run `scripts/check-kb-template-drift.sh`.

## DOX doc tree (code / harness layer)

The code layer has no index, so it is documented as a DOX tree: one `AGENTS.md` per code
folder, mirroring the structure. Applies **only** to code — never to `content/` (see the
two-regime table above).

- **Read before edit.** Before changing code in a folder below, read that folder's `AGENTS.md`.
- **Update after edit.** After the change, update the same `AGENTS.md` so it stays true.
- **Propagate up.** Cross-cutting conventions go into this root file so they apply tree-wide.

### Child docs index

- [`scripts/AGENTS.md`](scripts/AGENTS.md) — kb-template extract/sync/drift shell scripts
- [`brain-mcp/AGENTS.md`](brain-mcp/AGENTS.md) — TypeScript MCP server exposing vault search
- [`.claude/skills/AGENTS.md`](.claude/skills/AGENTS.md) — the workflow skills (ingest, compile, qa, lint, …)
- `quartz/` — vendored Quartz 4; off-limits, no local doc
- `content/` — governed by the index protocol, NOT by AGENTS.md
