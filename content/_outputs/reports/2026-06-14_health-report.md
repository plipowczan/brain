---
title: "Vault Health Report — 2026-06-14"
date: 2026-06-14
type: answer-note
tags: ["report", "lint", "health"]
agent-created: true
summary: "Vault lint audit: 303 notes scanned, 10 real broken links, 3 title=tool bugs, 5 tag dupes, 27 stubs, 32 TODOs"
---

# Vault Health Report — 2026-06-14

Scanned **303 notes** across all topic folders (excluded `_raw`, `_indexes`, `_outputs`, `templates`, `ATTACHMENTS`, `.obsidian`).

## Summary counts

| Class | Count | Severity |
|---|---:|---|
| Missing frontmatter | 2 | low (non-notes) |
| Missing `date` | 1 | low |
| Missing `type` | 1 | low |
| Missing `tags` | 11 | medium |
| `title: "tool"` (unfilled template) | 3 | **high** |
| Broken wikilinks (real, note→note) | 10 | **high** |
| Title ≠ filename | ~22 | low (mostly intentional) |
| Inconsistent tags (case dupes) | 5 | medium |
| Stub notes (<200 chars body) | 27 | medium |
| Outstanding TODO markers | 32 | medium |
| Orphan notes (no incoming links) | 73 | low/info |
| Missing `summary:` | 129 | low |
| Stale (>1yr, no recent review) | 100 | low/info |
| Bad `type:` value | 0 | — |

---

## 🔴 High priority

### `title: "tool"` — template placeholder never filled
Three tool notes still carry the literal frontmatter title `"tool"`:
- `BUSINESS/TOOLS/Zapier.md`
- `LIFE/TOOLS/Obsidian.md`
- `LIFE/TOOLS/Revolut Junior.md`

These propagate the wrong title into indexes and the published site. Fix: set `title` to the real tool name.

### Broken wikilinks (note → note)
Verified real (excludes attachment embeds, author-name mentions, template syntax, and table-escaped `\|` links which are valid):

| Source note | Broken target | Likely fix |
|---|---|---|
| `_index.md` | `ARTICLES/Articles` | Folder removed — drop link or repoint |
| `AI/TOOLS/Personal AI Infrastructure.md` | `Second Brain` | → `[[Second Brain Design]]` |
| `AI/TOOLS/Voicebox.md` | `Pulse` | Target note missing — create or remove |
| `AI/TOOLS/DESIGN MD Spec.md` | `Frontend Design` | Target missing — create or remove |
| `BUSINESS/KNOWLEDGE/INFO/Marketing, Sales & Publishing SaaS.md` | `Missing Tools — Active Projects Audit` | Target never created |
| `BUSINESS/KNOWLEDGE/INFO/Ops, Collaboration, Analytics & Community SaaS.md` | `Missing Tools — Active Projects Audit` | (same) |
| `CODE/KNOWLEDGE/INFO/Dev Libraries & Build Tools.md` | `Missing Tools — Active Projects Audit` | (same) |
| `BUSINESS/KNOWLEDGE/INFO/Process Mapping.md` | `2026-05-16_PRD-z-analizy-i-oferty` | Points into `_raw` — won't resolve |
| `CODE/TOOLS/OPSX Workflow.md` | `2026-05-16_PRD-z-analizy-i-oferty` | (same) |
| `CODE/KNOWLEDGE/HOWTO/Claude Code Marp Workflow.md` | `Goal-Driven Execution` | Target missing |
| `CODE/TOOLS/Tailwind CSS.md` | `shadcn/ui` (×2) | File is `shadcn-ui` → use `[[shadcn-ui\|shadcn/ui]]` |
| `PROJECTS/Projects.md` | `PROJECTS/ARCHIVE/AH/AutomationHouse` | Path/name mismatch |
| `PROJECTS/ARCHIVE/SHAREFUND/ShareFund.md` | `PROJECTS/Hospital Logistics` | Target missing |

---

## 🟡 Medium priority

### Inconsistent tags (case duplicates)
Merge to the lowercase canonical form:
- `book` (16) vs `books` (1)
- `airtable` (2) vs `Airtable` (1)
- `make` (2) vs `Make` (1)
- `Hugo` (1) — capitalized; lowercase elsewhere
- `RSS` (1) — acronym, acceptable

### Missing `tags` (11)
`_index.md`, `ABOUT/Roles/Roles.md`, `BUSINESS/BOOKS/Amp It Up.md`, `BUSINESS/KNOWLEDGE/HOWTO/How to convert pdf to Goodle Docs or Word.md`, `LIFE/BOOKS/Design Your Future.md`, `LIFE/BOOKS/Dopamine Detox.md`, `LIFE/BOOKS/Learn Like a Pro.md`, `LIFE/BOOKS/The Mental Toughness Handbook.md`, `LIFE/NOTES/Reading list.md`, `TRAVELS/TRIPS/2024 07 Bieszczady.md`, `TRAVELS/TRIPS/2025 07 Beskidy.md`

### Stub notes (<200 chars body) — 27
Notable near-empty (3 chars = template-only): `CODE/TOOLS/Git.md`, `CODE/TOOLS/RunJS.md`, `CODE/TOOLS/Visual Studio Code.md`, `LIFE/TOOLS/OneNote.md`, `LIFE/TOOLS/TextExpander.md`. Archive placeholders (22 chars): `PROJECTS/ARCHIVE/Drug Temperature Control System.md`, `Genti Retail.md`, `Work attendance management system.md`. Plus role/quote stubs (mostly acceptable by design).

### Outstanding TODO markers — 32 notes
Heaviest in `CODE/TOOLS/*` and `LIFE/TOOLS/*` (`#todo/complete`, `#todo/replace`) and `BUSINESS/KNOWLEDGE/HOWTO/*`. Full list in scan output. Many overlap with the 3-char stubs above.

---

## ⚪ Low priority / informational

### Title ≠ filename (~22)
Most are intentional (filename is a short slug, `title` the full form): e.g. `shadcn-ui` → "shadcn/ui", `12 Rules for Life` → full subtitle, quote slugs → full quote. The 3 `title: "tool"` cases are the only genuine bugs (listed above). **Fixed this session:** `When to exercise.md` (was `title: "Physical activity"`).

### Orphan notes (no incoming links) — 73
Expected for leaf content (trips, quotes, how-tos). Worth linking from their topic MOCs where natural. Note: the newly-corrected `When to exercise` is an orphan — a good link target for the upcoming mobility research.

### Missing `summary:` (129) & Stale (100)
Bulk legacy backlog from pre-agent notes (2022–2023). Not urgent; best addressed incrementally during `/enhance` passes rather than a mass edit.

---

## Recommended next actions
1. Fix the 3 `title: "tool"` notes (quick, high-impact).
2. Repair or remove the 10 broken note→note links (esp. the 3× `Missing Tools — Active Projects Audit` and the `shadcn/ui` slug).
3. Normalize the 5 case-duplicate tags.
4. Flesh out or merge the five 3-char tool stubs.

*Generated by `/lint`. Scan scripts: `.claude/skills/lint/scripts/lint_scan.py`, `lint_links.py`.*
