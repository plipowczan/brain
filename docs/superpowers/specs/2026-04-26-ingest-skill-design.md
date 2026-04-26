# Ingest Skill + Command — Design

**Date:** 2026-04-26
**Status:** Approved (brainstorming)
**Author:** Pawel + Claude

## Problem

The `INGEST` workflow lives in `CLAUDE.md` (~25 lines under "Workflows → INGEST"). Two issues:

1. **Non-deterministic invocation.** Workflow only runs when Claude reads CLAUDE.md and decides to apply it. No explicit entry point.
2. **CLAUDE.md weight.** INGEST is one of 6 workflows; lifting it out makes the main prompt leaner without losing capability.

A third issue surfaced during brainstorming: the workflow handles overlap with **existing** notes (`catalog.md` check) but does not address **intra-batch clusters** — multiple inbox files about the same topic that should be processed jointly. Current inbox demonstrates this: 5 of 6 files concern the Marp ecosystem.

## Goals

- Extract INGEST workflow into a Claude Code skill.
- Provide a slash command `/ingest` for fully deterministic invocation.
- Keep both backed by a single source of truth (skill content).
- Add intra-batch cluster detection with user confirmation per cluster.
- Add a final checklist phase verifying indexes were actually updated.

## Non-Goals

- No changes to other workflows (COMPILE, INDEX, Q&A, LINT, OUTPUT, ENHANCE).
- No automated triggering on filesystem events (no hooks). Invocation stays explicit.
- No interactive confirmation for non-cluster files — autonomy preserved per CLAUDE.md ("user rarely edits the wiki directly").
- No changes to templates, frontmatter schema, directory structure, or index formats.

## Design

### File Layout

```
.claude/
├── skills/
│   └── ingest/
│       └── SKILL.md
└── commands/
    └── ingest.md
```

`CLAUDE.md` change: the INGEST section under "Workflows" shrinks to a 2-line pointer:

```markdown
### INGEST — `ingest`, `process inbox`

See skill `ingest` (`.claude/skills/ingest/SKILL.md`).
```

All other workflow sections in CLAUDE.md stay as-is. This is the only edit to CLAUDE.md.

### `SKILL.md` Frontmatter

```yaml
---
name: ingest
description: Use when user says "ingest", "process inbox", "przetworz nowe pliki",
  or when files appear in content/_raw/inbox/. Processes raw sources into wiki
  notes, handles intra-batch clustering with confirmation, updates all 3 indexes.
---
```

Bilingual triggers (PL + EN) match existing CLAUDE.md trigger phrases and account for the user's mixed-language workflow.

### `commands/ingest.md`

Thin shim — single sentence body:

```
Use the `ingest` skill to process files in `content/_raw/inbox/`.
```

This guarantees deterministic invocation: typing `/ingest` always loads the skill.

### Workflow — Three Phases

#### Phase 1 — Pre-scan

1. Read `content/_indexes/vault-map.md` to understand current vault structure.
2. List `content/_raw/inbox/` — collect filenames and file count.
3. **Cluster detection.** Heuristic over inbox files:
   - Tokenize titles (split on spaces, hyphens, underscores; lowercase; drop stop-words).
   - Read the first ~200 characters of each file body for additional tokens.
   - Group files sharing ≥2 distinctive tokens (or one strong token like a product name appearing in multiple titles).
   - Threshold for forming a cluster: **≥2 files**.
4. **Single consolidated cluster report to the user.** One message containing all detected clusters; user answers per cluster, not per file. Format:

   ```
   Cluster "Marp" (5 files):
     - Marp Markdown Presentation Ecosystem.md   [parent candidate]
     - marp-team/marp ...                        [repo]
     - marp-team/marp-cli ...                    [repo]
     - marp-team/marp-core ...                   [repo]
     - marp-team/marpit ...                      [repo]
   Options:
     A) Separate tool notes (CLAUDE.md default — each repo gets own note)
     B) Parent hub note + children (knowledge-note + N tool notes, bidirectional links)
     C) Custom — describe
   ```

   "Parent candidate" tag is applied when a file's title lacks repo-style markers (no slash, no `team/repo` pattern) but shares the cluster's tokens — heuristic, not authoritative.

5. Files outside any cluster — process autonomously in Phase 2 without prompting.

#### Phase 2 — Execute

For each file or cluster (cluster handling per user choice from Phase 1):

6. Determine topic folder and note type per CLAUDE.md rules.
7. Check `_indexes/catalog.md` for overlap with existing notes:
   - Overlap → merge into existing note (preserve user-authored content).
   - No overlap → create from appropriate template (`templates/` per CLAUDE.md type table).
8. Fill frontmatter: `title`, `date`, `tags`, `type`, `source: "_raw/inbox/<file>"`, `agent-created: true`, `summary:`.
9. Add wikilinks to related notes; update those notes to backlink.
10. **Move attachments** (lifted from CLAUDE.md step 7, unchanged): find image/media files referenced by source (`.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`, `.webm`, `.pdf`, etc.) that landed in `content/` root or `_raw/inbox/`. Move to `content/ATTACHMENTS/`. Update `![[filename]]` references in the new note.
11. Move source: `_raw/inbox/<file>` → `_raw/processed/YYYY-MM-DD_<originalname>.<ext>`.
12. Update all three indexes per CLAUDE.md auto-update rules:
    - `catalog.md` — add/update entry line in correct folder section.
    - `vault-map.md` — increment folder count, refresh top-tags, add to Recent Changes.
    - `graph.md` — add outgoing links, update incoming for targets.

Phase 2 runs autonomously. No per-file confirmation. Cluster decisions were already made in Phase 1.

#### Phase 3 — Final Checklist

13. Re-read `vault-map.md`:
    - Does `total_notes` match the delta (old count + new notes − merges)?
    - Are new notes present in `Recent Changes`?
14. Spot-check `catalog.md` — every new note has an entry line in its folder section.
15. Print final report:

    ```
    Ingest complete.
    - Processed: X files
    - Created:   Y new notes
    - Merged:    Z into existing notes
    - Attachments moved: W
    - Indexes:   ✅ vault-map / catalog / graph
    Inbox now empty.
    ```

If checklist fails, surface the discrepancy and offer to fix before reporting completion.

## Behavior Decisions Recap

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Invocation surface | Skill + thin command | Skill = natural language triggers (PL/EN); command = deterministic entry. Same source of truth. |
| Scope | Lift + 3 targeted improvements | Keeps existing logic; adds only what real inbox state proved necessary. |
| Cluster handling | User confirmation per cluster | Cluster choice is structurally irreversible; brief pause is cheap insurance. |
| Non-cluster files | Autonomous | Mechanical application of CLAUDE.md rules; matches existing autonomy posture. |
| CLAUDE.md INGEST section | Replaced with 2-line pointer | Achieves the "slim down" goal cleanly. |

## Risks and Mitigations

- **Cluster heuristic over- or under-fires.** Mitigation: option **C) Custom** in the cluster report lets the user override or add files. Threshold tunable later — start at "≥2 distinctive tokens shared."
- **Skill description doesn't auto-trigger.** Mitigation: `/ingest` command is the deterministic fallback; user can always type it.
- **CLAUDE.md and skill drift apart.** Mitigation: CLAUDE.md INGEST section is reduced to a pointer, so there is no parallel content to drift.
- **Final checklist fires false positives during partial ingest** (e.g., mid-error). Mitigation: checklist runs only after Phase 2 completes successfully; on error the skill reports the failure point and stops.

## Testing

This is a workflow skill, not code — "testing" is a dry-run on real inbox state:

1. With current inbox (6 files, Marp cluster + 1 unrelated `forrestchang...` file): invoke `/ingest`. Expect cluster report to surface Marp 5-file cluster, autonomous handling of the Karpathy/skills file. Verify final checklist passes.
2. With empty inbox: invoke `/ingest`. Expect immediate "Inbox empty, nothing to process" exit.
3. With single file inbox: invoke `/ingest`. Expect no cluster report, autonomous processing, checklist.

## Out of Scope (explicit)

- Hook-based auto-trigger on inbox filesystem events.
- Migrating other CLAUDE.md workflows (COMPILE, INDEX, Q&A, LINT, OUTPUT, ENHANCE) to skills. Can be done later following this pattern if desired.
- Changes to index file formats, templates, or directory layout.

## Implementation Plan

To be drafted next via the `writing-plans` skill.
