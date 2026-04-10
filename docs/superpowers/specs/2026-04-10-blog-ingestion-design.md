# Blog Portfolio Ingestion — Design Spec

**Date:** 2026-04-10
**Source:** `C:\Users\pawel\source\repos\plipowczan\portfolio\src\content\blog\` (22 Polish blog posts)
**Target:** Obsidian KB at `content/`

## Decisions

- **Language:** Only Polish originals (skip `/en` translations)
- **Content style:** Full substance, zero filler — wiki-condensed. All facts, frameworks, data, quotes preserved. Narrative padding removed. Notes must be complete enough to reconstruct an article from them.
- **No blog links:** Notes stand alone, no reference back to published posts.
- **Conflict resolution:** Existing note has priority — only add new information from blog that isn't already present.
- **Repos as tools:** GitHub/open-source repositories get individual `tool` notes, not merged into parent tool notes.

## Classification: 18 New Notes + 6 Merge

### New Notes (19)

| # | Source Post | Target Path | Type | Title (working) |
|---|---|---|---|---|
| 1 | no-code-lead-generation | `NOCODE/KNOWLEDGE/HOWTO/` | knowledge-note | Lead Generation Pipeline |
| 2 | chatboty-ai-od-koncepcji-do-wdrozenia | `CODE/KNOWLEDGE/INFO/` | knowledge-note | AI Chatbots Architecture |
| 3 | el-padre-automatyzacja-ofert-ai | `BUSINESS/NOTES/` | basic-note | El Padre Case Study |
| 4 | zapier-vs-make-vs-n8n-wybor-narzedzia | `NOCODE/KNOWLEDGE/INFO/` | knowledge-note | Automation Tool Selection |
| 5 | hackathon-hacknation-analiza-doswiadczen | `AI/NOTES/` | basic-note | Hackathon Hacknation |
| 6 | dane-jako-paliwo-biznesu | `BUSINESS/KNOWLEDGE/INFO/` | knowledge-note | Data Maturity Model |
| 7 | kazda-firma-dziala-nieoptymalnie | `BUSINESS/KNOWLEDGE/INFO/` | knowledge-note | Process Mapping |
| 8 | animacje-apple-ai-cursor | `CODE/KNOWLEDGE/HOWTO/` | knowledge-note | Apple-style Animations with AI |
| 9 | openclaw-bezpieczenstwo-agentow-ai | `AI/KNOWLEDGE/INFO/` | knowledge-note | AI Agent Security |
| 10 | opsx-workflow-strukturyzowana-praca-z-ai | `CODE/TOOLS/` | tool | OPSX Workflow |
| 11 | remotion-explainer-videos-ai | `CODE/TOOLS/` | tool | Remotion |
| 12 | second-brain-obsidian-claude-code-skills | `LIFE/KNOWLEDGE/INFO/` | knowledge-note | Second Brain Design |
| 13 | vibe-coding-przewodnik | `CODE/KNOWLEDGE/HOWTO/` | knowledge-note | Vibe Coding |
| 14 | trendy-ai-2026-od-eksperymentow-do-operacjonalizacji | `AI/KNOWLEDGE/INFO/` | knowledge-note | AI Trends 2026 |
| 15 | skills-2-0-multi-agent-system | `AI/KNOWLEDGE/INFO/` | knowledge-note | Skills 2.0 Testing |
| 16 | 5-repozytoriow → UI/UX Pro Max | `AI/TOOLS/` | tool | UI UX Pro Max |
| 17 | 5-repozytoriow → OpenSpec | `CODE/TOOLS/` | tool | OpenSpec |
| 18 | 5-repozytoriow → Excalidraw Skill | `CODE/TOOLS/` | tool | Excalidraw |
| 19 | 5-repozytoriow → Awesome Claude Code | `AI/TOOLS/` | tool | Awesome Claude Code |

Note: Obsidian Skills repo (5th from the blog post) — skipped, already covered by existing Obsidian notes in LIFE/TOOLS/ and LIFE/KNOWLEDGE/INFO/. Final count: **18 new notes**.

### Merge into Existing Notes (6)

| # | Source Post | Target Note | What to Add |
|---|---|---|---|
| 1 | automatyzacja-email-frontdesk-ai | `Make` (BUSINESS/TOOLS) | Email automation pattern, ROI metrics (20-30h/mo saved, 90% response time reduction) |
| 2 | airtable-vs-excel-migracja | `Airtable` (BUSINESS/TOOLS) | Excel comparison, relational DB concepts, 5-step migration, use cases |
| 3 | kodowanie-w-2025-ai-portfolio | `Agentic Coding` (AI/KNOWLEDGE/INFO) | Cost analysis ($325 API / $60 PRO+), AI-as-junior-dev metaphor, code review automation |
| 4 | 5-technik-pracy-z-claude-code | `Claude Code` (AI/TOOLS) | Practical techniques (PRD-first, systematic prompting) |
| 5 | 15-cursor-hacks-produktywnosc-ai | `Cursor` (AI/TOOLS) | Productivity tips, worktrees, context window management, keyboard shortcuts |
| 6 | srodowisko-agentowe-ai-dwie-firmy | `Agentic Systems` (PROJECTS) | 3-layer architecture detail, 2-company deployment, Git as trust foundation, scripts-over-MCP rationale |

## Note Format

### New Notes — Template

```yaml
---
title: "Note Title"
date: YYYY-MM-DD          # original blog post date
enableToc: true
openToc: true
tags: ["tag1", "tag2"]
type: knowledge-note | tool | basic-note
agent-created: true
summary: "One-line description"
---
```

Content structure (adapted per template):
- `🚀` Main heading — 2-3 sentence essence
- `🗒️` Thematic sections — facts, frameworks, data as bullet points
- Wikilinks to related KB notes throughout
- `📒 Podsumowanie` — 3-5 key takeaways
- `🔗 Zasoby` — external links, tools, repos

Style: Mix of Polish and English (technical terms in English). Direct, practical, first person where appropriate. No narrative padding.

### Merge — Rules

1. Read existing note fully
2. Identify what from blog is NEW (not already present)
3. Append new sections/bullets at end of relevant existing sections
4. Never modify or remove existing content
5. Add `agent-reviewed: 2026-04-10` to frontmatter
6. Update wikilinks if new connections discovered

## Processing Workflow

### Faza 1: Pre-classification (complete)
Plan approved as above.

### Faza 2: Batch Processing

**Batch 1 — New notes (parallel):**
- 4-5 agents, each writing 3-5 notes
- Each agent reads source post → writes wiki note → no index updates yet
- Agent grouping by independence (no two agents writing notes that should link to each other heavily)

**Batch 2 — Merge (sequential):**
- Process 6 merge targets one by one
- Read existing note → read blog post → identify new info → append

**Batch 3 — Index rebuild:**
- Full reindex of vault-map.md, catalog.md, graph.md
- Single pass after all notes are written

### Faza 3: Verification
- `npx quartz build` to verify no broken links
- Spot-check 2-3 notes for style compliance

## CLAUDE.md Update

Add to Directory Structure or Sub-patterns section:

```
GitHub/open-source repositories → individual `tool` notes in the topic folder 
matching their domain (e.g., AI/TOOLS/, CODE/TOOLS/).
```

## Out of Scope

- English translations — not imported
- Blog images/media — not imported (notes are text-only wiki)
- Full repo ingestion for the 5 GitHub repos — only blog-level info now, full ingest via inbox later
- Modifications to portfolio project
