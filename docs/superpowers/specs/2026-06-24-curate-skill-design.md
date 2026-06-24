# Design: `/curate` — KB Hygiene & Retirement Skill

**Date:** 2026-06-24
**Status:** Approved design, pending implementation plan
**Author:** LLM Knowledge Base Agent (brainstormed with user)

## Problem

The vault grows monotonically. Every existing skill adds or enriches content
(`/ingest`, `/compile`, `/enhance`, `/gaps`); none retires it. The user's stated
fears were capacity, quality degradation, and answer latency.

**Reframing (agreed during brainstorming):**

- **Latency is not the real risk.** Navigation is tiered (`vault-map.md` →
  `catalog.md` → `graph.md`); the agent never greps full `content/`. Retrieval
  cost tracks *index* size, not raw note count. CLAUDE.md already defines scale
  breakpoints (split catalog at 300 notes, graph at 800). Adding notes does not
  meaningfully slow answers.
- **Capacity is not the real risk.** Git + disk handle thousands of notes.
- **Quality / signal IS the risk.** Stale notes present old info as current;
  duplicates and orphans dilute search; tool notes rot fastest (the vault has
  ~104 `tool` notes across AI/TOOLS + CODE/TOOLS — repos die, get renamed,
  change scope, silently).

So the skill is framed as **staleness / relevance hygiene with reversible
retirement**, not "free up space."

## Goals

- Periodically surface stale, unused, dead-linked, and duplicate notes.
- Propose concrete actions (archive / merge / refresh / keep) with reasons.
- Execute only on explicit user confirmation; keep everything reversible.
- Keep `/lint` as a passive diagnostic; `/curate` is the action-oriented treater.

## Non-Goals (YAGNI)

- No auto-delete. Nothing is `git rm`'d by the skill.
- No telemetry / view-count / query-log tracking (none exists in this vault).
- No scheduling daemon. Skill is on-demand; cadence is a recommendation.
- No rewrite of `/lint`. No duplicated detection logic beyond what's needed.

## Decisions (from brainstorming)

| # | Decision | Choice |
|---|----------|--------|
| Q1 | Action model | Report + propose; user confirms before any mutation |
| Q2 | Staleness signals | All four: age+no-edits, graph isolation, dead tool/source, duplication/superseded |
| Q3 | Relation to `/lint` | Separate skill (`/curate`); lint = diagnose, curate = treat |
| Q4 | Disposition of retired notes | Move to `_graveyard/` (out of build), fully reversible |

## Architecture — Four Phases

### Phase 1 — Gather (read-only)

- Read the three indexes (`vault-map.md`, `catalog.md`, `graph.md`). No full
  `content/` grep — follow the Navigation Protocol.
- For each note, collect frontmatter `date` / `agent-reviewed` and the
  git last-touched date (`git log -1 --format=%cs -- <path>`).

### Phase 2 — Score

Compute a staleness score per note from four signals:

| Signal | Source | Contribution |
|--------|--------|--------------|
| Age + no edits | frontmatter dates + git log | Base time-decay; older + untouched = higher |
| Graph isolation | `graph.md` (0–1 in/out edges) | Low-link penalty; orphans score higher |
| Dead tool / source | Live HTTP check of repo/URL in `tool` notes and `source:` fields | Strongest signal; 404 or archived repo = high. **Verified live, not from memory.** |
| Duplication / superseded | `catalog.md` summaries + detection of a newer `compiled-note` covering the same topic | Marks older note as merge candidate |

**Performance guard:** live HTTP checks run **only** on notes already flagged by
age or isolation — not on all 322 notes. Tool notes are the priority target set.

### Phase 3 — Triage Report

Write `_outputs/reports/YYYY-MM-DD-curate.md`. For each candidate:

- note path, staleness score, which signals fired,
- **recommended action**: `archive` / `merge-into-[[X]]` / `refresh` / `keep`,
- one-line reason.

Group candidates by recommended action so the user can approve in batches.
This report is the dry-run output and is always produced before any mutation.

### Phase 4 — Execute (gated on user confirmation, batched)

- **Archive** → move file to `_graveyard/`, preserve all existing frontmatter,
  stamp `archived: YYYY-MM-DD` and `archived-reason: "<reason>"`.
- **Merge** → delegate to existing `/refactor` skill (already does wikilink repair).
- **Refresh** → delegate to existing `/enhance` skill.
- **Wikilink repair:** inbound links to an archived note are repaired or stubbed
  (reuse `/refactor` link-repair logic).
- **Index update:** remove archived notes from `vault-map.md` counts, `catalog.md`
  entries, and `graph.md` nodes/edges, per CLAUDE.md auto-update rules.

## Data Flow

```
indexes + git log
      │
      ▼
  score table  ──►  triage report (_outputs/reports/)
                          │
                    user confirms
                          │
                          ▼
        file moves (→ _graveyard/) + wikilink repair + index update
```

## New Infrastructure

- **`_graveyard/`** — new top-level folder, sibling to `_raw/`, `_outputs/`.
  Holds archived notes; out of the published site and out of the indexes.
- **`quartz.config.ts`** — add `_graveyard` to `ignorePatterns`
  (currently line 16: `["private", "templates", ".obsidian", "_raw", "_indexes", "_outputs"]`).
  This is the single config edit required. It is the root config file, not the
  `quartz/` engine directory, so it is within the Safety Rules.
- **`.claude/skills/curate/`** — the skill definition, plus a `/curate` command,
  registered in CLAUDE.md's Workflows section.

## Reversibility

Everything the skill does is recoverable. Archived files sit in `_graveyard/`
and can be moved back at any time. Nothing is `git rm`'d. The default mode is a
dry-run report; mutation only happens after explicit confirmation.

## Error Handling

- Live link check that times out or errors at the network layer is **not** the
  same as a dead link. Such notes are marked `unverified` and never auto-flagged
  on a network error alone.
- If an index is missing or stale, run `/reindex` before proceeding (per
  Navigation Rule 6).

## Cadence

On-demand via `/curate`. Recommended quarterly run. Can later be wrapped in
`/loop` or a scheduled agent — not hardcoded now (YAGNI).

## Open Questions

None. Design approved 2026-06-24.
