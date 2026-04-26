# Wiki Workflow Skills + Commands — Design

**Date:** 2026-04-26
**Status:** Approved (brainstorming)
**Author:** Pawel + Claude

## Problem

The 7 wiki workflows live in `CLAUDE.md` under "Workflows": `INGEST`, `COMPILE`, `INDEX`, `Q&A`, `LINT`, `OUTPUT`, `ENHANCE`. Three issues:

1. **Non-deterministic invocation.** Each workflow runs only when Claude reads CLAUDE.md and decides to apply it. No explicit entry point.
2. **CLAUDE.md weight.** All 7 workflows take ~70 lines of the main prompt. Lifting them into focused units makes CLAUDE.md leaner without losing capability.
3. **INGEST-specific gap.** The current INGEST workflow handles overlap with **existing** notes (`catalog.md` check) but not **intra-batch clusters** — multiple inbox files about the same topic that should be processed jointly. The current inbox demonstrates this: 5 of 6 files concern the Marp ecosystem.

## Goals

- Extract each of the 7 workflows into its own skill, each with an ostry `description` so natural-language triggers (PL + EN) auto-fire reliably.
- Provide a matching slash command per workflow for fully deterministic invocation.
- For INGEST: add intra-batch cluster detection with user confirmation per cluster, plus a final index-verification checklist.
- For the other 6 workflows: 1:1 lift-and-shift from CLAUDE.md — same logic, just relocated.
- CLAUDE.md "Workflows" section collapses to 7 pointer lines (one per skill).

## Non-Goals

- No automated triggering on filesystem events (no hooks). Invocation stays explicit (typed slash command) or skill-auto-triggered (description match).
- No changes to templates, frontmatter schema, directory structure, or index formats.
- No redesign of COMPILE/INDEX/Q&A/LINT/OUTPUT/ENHANCE logic. They get the same scrutiny as INGEST only when concrete pain emerges; until then, lift-and-shift.
- No shared mega-skill. Each workflow is independent and gets its own skill — see "Why one skill per workflow" below.

## Why One Skill Per Workflow

Considered (and rejected) alternative: a single `wiki-workflows` skill with 7 sections + 7 commands.

The skill auto-trigger mechanism relies on a **single, specific `description`** in frontmatter. Merging 7 unrelated workflows into one skill forces a vague catch-all description ("processes Obsidian wiki workflows…") that loses selectivity. In practice, auto-trigger on natural language ("zrobisz lint?", "research X", "enhance [[Note]]") stops working — you'd be left with just the slash commands.

Workflows are independent by construction: different triggers, different inputs, different outputs, no shared state. They fit the "smaller, well-bounded units" principle. The cost ("more files") is cheap when each file is focused and has one responsibility.

## Design

### File Layout

```
.claude/
├── skills/
│   ├── ingest/SKILL.md
│   ├── compile/SKILL.md
│   ├── reindex/SKILL.md
│   ├── qa/SKILL.md
│   ├── lint/SKILL.md
│   ├── output/SKILL.md
│   └── enhance/SKILL.md
└── commands/
    ├── ingest.md
    ├── compile.md
    ├── reindex.md
    ├── qa.md
    ├── lint.md
    ├── output.md
    └── enhance.md
```

Skill named `reindex` (not `index`) because `index` is ambiguous in this codebase context (filesystem index, Quartz index page, etc.). Command is `/reindex`.

Skill named `qa` because `q&a` is not a valid identifier; command is `/qa`.

### CLAUDE.md Changes

The entire "Workflows" section in CLAUDE.md collapses to:

```markdown
## Workflows

Each workflow is a skill with a matching slash command:

- **INGEST** (`ingest`, `process inbox`) — `.claude/skills/ingest/`, command `/ingest`
- **COMPILE** (`compile X`, `write article about X`) — `.claude/skills/compile/`, command `/compile`
- **INDEX** (`reindex`, `update indexes`) — `.claude/skills/reindex/`, command `/reindex`
- **Q&A** (`research X`, `what do my notes say about X`) — `.claude/skills/qa/`, command `/qa`
- **LINT** (`lint`, `health check`, `audit`) — `.claude/skills/lint/`, command `/lint`
- **OUTPUT** (`generate report about X`) — `.claude/skills/output/`, command `/output`
- **ENHANCE** (`enhance [[Note]]`, `improve X`) — `.claude/skills/enhance/`, command `/enhance`
```

All other CLAUDE.md sections (Role, Project Overview, Directory Structure, Navigation Protocol, Writing Style, Frontmatter, Templates, Build & Deploy, Safety Rules) stay as-is. The Navigation Protocol stays in CLAUDE.md because it's read first by every skill — it's prerequisite knowledge, not a workflow.

### Skill Frontmatter — Per-Workflow Descriptions

Each skill description must be specific enough to auto-trigger reliably without overlapping its siblings. Bilingual triggers throughout.

| Skill | `description` (frontmatter) |
|-------|----------------------------|
| `ingest` | Use when user says "ingest", "process inbox", "przetworz nowe pliki", or when files appear in `content/_raw/inbox/`. Processes raw sources into wiki notes, handles intra-batch clustering with confirmation, updates all 3 indexes. |
| `compile` | Use when user says "compile X", "write article about X", "napisz artykuł o X". Synthesizes a new wiki article from existing notes on a topic, citing them as wikilinks, type `compiled-note`. |
| `reindex` | Use when user says "reindex", "update indexes", "rebuild indexes", "odśwież indeksy", or when an index file is missing/stale. Full rebuild of `_indexes/vault-map.md`, `catalog.md`, `graph.md` from all wiki notes. |
| `qa` | Use when user says "research X", "what do my notes say about X", "co mam w notatkach o X". Synthesizes an answer from the vault citing wikilinks; offers to save substantial answers to `_outputs/answers/`. |
| `lint` | Use when user says "lint", "health check", "audit". Checks vault for missing frontmatter, broken wikilinks, orphans, stub notes, inconsistent tags, TODO markers, stale content; saves report to `_outputs/reports/`. |
| `output` | Use when user says "generate report about X", "create summary of X", "stwórz podsumowanie X". Generates a requested format (summary, reading list, topic map, timeline) and saves to `_outputs/` or topic folder. |
| `enhance` | Use when user says "enhance [[Note]]", "improve X", "popraw notatkę X". Reads the note, fills gaps from related notes, adds bidirectional wikilinks, sets `agent-reviewed:` date, preserves all existing user-authored content. |

### Command Files

Each `commands/<name>.md` is a one-line shim:

```
Use the `<name>` skill.
```

Guarantees deterministic entry point. No additional logic in commands.

### INGEST — Detailed Workflow (the only one with new logic)

INGEST gets three improvements over the CLAUDE.md version: pre-scan with cluster detection, single mode (batch with single-file fast path), and a final checklist. All other steps are 1:1 with CLAUDE.md.

#### Phase 1 — Pre-scan

1. Read `content/_indexes/vault-map.md` to understand current vault structure.
2. List `content/_raw/inbox/` — collect filenames and file count. If empty: report and exit.
3. **Cluster detection.** Heuristic over inbox files:
   - Tokenize titles (split on spaces, hyphens, underscores; lowercase; drop stop-words).
   - Read the first ~200 characters of each file body for additional tokens.
   - Group files sharing ≥2 distinctive tokens (or one strong product-name token appearing in multiple titles).
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

   "Parent candidate" tag is applied when a file's title lacks repo-style markers (no `team/repo` slash pattern) but shares the cluster's tokens. Heuristic, not authoritative.

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

### Other 6 Skills — Lift-and-Shift Specification

Each of `compile`, `reindex`, `qa`, `lint`, `output`, `enhance` gets a `SKILL.md` whose body is the corresponding CLAUDE.md "Workflows" section copied verbatim, with two normalizations:

1. **Header**: drop the "### NAME — `triggers`" line (triggers move to the frontmatter `description`); replace with `# <Workflow Name>` and a one-paragraph "When to use" section.
2. **Trailing pointer**: add a final "See also" line pointing to CLAUDE.md "Navigation Protocol" so the skill stays compatible with the universal pre-read step.

No content changes to the workflow logic itself. Any refinements to those workflows are explicitly out of scope for this spec — they happen later in their own brainstorming cycles when concrete pain emerges.

The final-checklist pattern from INGEST is a candidate to retrofit into COMPILE and ENHANCE later (both produce/modify notes and update indexes), but that's a follow-up, not part of this spec.

## Behavior Decisions Recap

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Skill granularity | One skill per workflow | Sharp `description` enables natural-language auto-trigger; merging 7 workflows into one defeats the mechanism. |
| Invocation surface | Skill + thin command per workflow | Skill = NL triggers; command = deterministic entry. Same source of truth (the skill body). |
| INGEST scope | Lift + 3 targeted improvements | Cluster detection, single-message confirmation, final checklist — driven by real inbox pain. |
| Other 6 workflows | 1:1 lift-and-shift | No concrete pain → no design changes. Refine later when needed. |
| CLAUDE.md Workflows section | Replaced with 7 pointer lines | Achieves the "slim down" goal; no parallel content to drift. |
| Hooks / auto-execute | Out of scope | Invocation stays explicit. |

## Risks and Mitigations

- **Skill descriptions overlap and one fires when another should.** Mitigation: each description above uses workflow-specific verbs and noun phrases (PL+EN). If a real overlap surfaces during use, tighten the affected description.
- **Cluster heuristic over- or under-fires (INGEST).** Mitigation: option **C) Custom** in the cluster report lets the user override or add files. Threshold is tunable.
- **Auto-trigger doesn't fire when expected.** Mitigation: every workflow has a deterministic `/<name>` slash command as fallback.
- **CLAUDE.md and skills drift apart.** Mitigation: CLAUDE.md Workflows section is reduced to pointers, so there is no parallel content to drift.
- **Final checklist fires false positives during partial INGEST.** Mitigation: checklist runs only after Phase 2 completes successfully; on error the skill reports the failure point and stops.

## Testing

These are workflow skills, not code. "Testing" = dry-runs against real vault state.

**INGEST dry-runs:**
1. Current inbox (6 files, Marp 5-file cluster + 1 unrelated `forrestchang…` file): invoke `/ingest`. Expect cluster report for Marp, autonomous handling of the standalone file, passing checklist.
2. Empty inbox: invoke `/ingest`. Expect "Inbox empty" exit.
3. Single-file inbox: invoke `/ingest`. Expect no cluster report, autonomous processing, checklist.

**Other skills — smoke tests:**
- `/reindex` rebuilds the three indexes and they validate.
- `/lint` produces a report under `_outputs/reports/YYYY-MM-DD_health-report.md`.
- `/qa <topic>` produces an answer citing real wikilinks for a known-covered topic.
- `/compile <topic>`, `/output <format>`, `/enhance [[Note]]` each produce their expected artifact for a hand-picked topic.

**Auto-trigger sanity check:**
- Type "zrobisz lint?" in a fresh session — `lint` skill should activate.
- Type "research distractions" — `qa` should activate.
- Type "process inbox" — `ingest` should activate.

If any auto-trigger fails, tighten the corresponding skill description and retry.

## Out of Scope (explicit)

- Hook-based auto-trigger on filesystem events.
- Logic changes to COMPILE / INDEX / Q&A / LINT / OUTPUT / ENHANCE.
- Retrofitting the final-checklist pattern to other skills (follow-up).
- Any new skill not listed above.
- Changes to index file formats, templates, or directory layout.

## Implementation Plan

To be drafted next via the `writing-plans` skill. Suggested decomposition:

1. **Scaffolding pass** — create directory layout, all 7 commands, all 7 SKILL.md files with frontmatter only.
2. **Lift-and-shift pass** — copy 6 CLAUDE.md workflow sections into their SKILL.md bodies, normalize headers.
3. **INGEST detail pass** — write the new 3-phase INGEST workflow (cluster detection, execute, checklist).
4. **CLAUDE.md collapse pass** — replace the Workflows section with the 7-line pointer block.
5. **Verification pass** — run the dry-runs and auto-trigger sanity checks above.
