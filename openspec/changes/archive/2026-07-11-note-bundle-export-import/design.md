# Design: note-bundle-export-import

## Context

Both this brain and every kb-template-derived vault share the same architecture: markdown notes with frontmatter under `content/`, three navigation indexes (`vault-map.md`, `catalog.md`, `graph.md`), and LLM-driven workflow skills in `.claude/skills/`. A bundle exported from any such vault must be importable into any other, even when their folder taxonomies differ (each brain defines its own structure during onboarding).

All product decisions were made in the explore session (2026-07-11); this design records them and settles the implementation shape.

## Goals / Non-Goals

**Goals:**
- Portable, versioned, self-describing bundle format (v1).
- `/export`: cheap and near-deterministic; reads only indexes + selected notes.
- `/import`: all intelligence lives here; at most 2 user interaction points per run regardless of bundle size.
- Idempotent re-import (same bundle twice → no-op).
- Identical skill sources in this brain and `kb-template/` (drift-check clean).

**Non-Goals:**
- Sync/two-way merge, attachments, network transport, exporting non-wiki content (`_indexes/`, `_outputs/`, `_raw/`, `templates/`, `_graveyard/`).

## Decisions

### D1 — Two skills, not one
`/export` and `/import` are separate skills with separate SKILL.md files. Export runs in the source brain, import in the target; they never run together. Mirrors existing one-verb-per-skill convention (ingest, compile, lint…).

### D2 — Bundle format: zip + manifest.json (format: 1)
```
brain-pack-<slug>-<YYYY-MM-DD>.zip
├─ manifest.json
└─ notes/
   └─ <SOURCE/FOLDER/PATH>/<Note Title>.md   # verbatim copies, source tree preserved
```
```json
{
  "format": 1,
  "source": "<source brain name>",
  "exported": "YYYY-MM-DD",
  "notes": [
    { "path": "AI/TOOLS/Serena.md", "title": "Serena", "sha256": "<hex of file bytes>" }
  ]
}
```
- Plain zip: inspectable with any unzip tool, no custom container.
- `sha256` over the exact file bytes shipped in `notes/`. Import recomputes the hash of the *incoming* file and compares against the *existing target note* bytes to get the free "identical → skip" verdict; the manifest hash additionally validates bundle integrity.
- `format` gates future evolution; import hard-fails on unknown major format with a clear message.
- `source`: derived from the vault — precedence: `title`/`name` in the root `content/ABOUT/About.md` frontmatter if present, else the repo folder name. Cheap, no new config file. (Open question OQ1 tracks whether a dedicated field is wanted later.)
- Alternative considered: single concatenated `.md` bundle — rejected (fragile separators, no assets path, unreadable at 100 notes).

### D3 — Export flow (near-deterministic, read-only)
1. Resolve selector → note list:
   - `[[Note]] [[Other]]` → look up paths in `catalog.md`;
   - `#tag` → scan `catalog.md` entry lines for the tag;
   - `FOLDER/PATH` → take the catalog section for that folder.
2. Show resolved list → user confirms (interaction 1 of export).
3. Depth-1 closure: from `graph.md` Outgoing lines of selected notes, collect targets outside the selection; show with link counts → user picks all/some/none (interaction 2).
4. Write `manifest.json`, copy note files verbatim, zip to the path the user gave (default: repo root, `brain-pack-<slug>-<date>.zip`).
5. No vault writes, no index updates (read-only operation — Recent Changes untouched).

Zip mechanics: Python stdlib (`zipfile` + `hashlib`) in `export/scripts/bundle.py` (`pack` / `unpack` / `same` subcommands) — matching the existing Python-script convention of ingest/refactor/reindex skills and portable with zero external tools. (Supersedes the earlier bash/PowerShell-probing idea from tasks 1.1 — Python was already the repo's skill-script convention and needs no probing.) `/import` reuses the same script; unit tests in `export/scripts/test_bundle.py`.

### D4 — Import flow (LLM-driven, ≤2 interaction points)
1. Validate: unzip to a staging dir (scratchpad), check `format`, recompute hashes vs manifest → corrupt/unknown bundles abort before touching the vault.
2. Read target `vault-map.md` (protocol level 0) + `catalog.md` sections relevant to incoming paths.
3. Classify every note into one of:
   - **new + folder exists** → place at source path, no question;
   - **new + folder missing** → agent proposes target folder from vault-map taxonomy → batched into interaction B;
   - **collision** (same folder/title exists) → content-compare → verdict `skip` (byte-identical or target strictly richer) / `merge` (incoming adds material) / `keep-target` / `rename` (different entities sharing a name) → batched into interaction A.
4. **Interaction A**: one collision-triage table (note | verdict | one-line why) → user approves or edits verdicts. Skipped entirely when zero collisions.
5. **Interaction B**: one folder-mapping table for all missing-folder notes → approve/adjust. Skipped when no folder gaps.
6. Execute: write notes; on every written note add `imported-from: <manifest.source>` and `imported: <today>` to frontmatter (preserving all existing fields, per safety rules; `agent-created: true` if absent). Merges follow the `/refactor` merge discipline: never silently drop target-side user-authored content.
7. Update all 3 indexes per the standard auto-update rules (batch: one pass after all writes, same as `/ingest` does for a batch).
8. Mini-lint of the imported set only: broken wikilinks (left intact in the text — never rewritten or removed), missing frontmatter. Write report to `content/_outputs/reports/import-<date>-<source>.md`: notes written, triage verdicts as executed, broken links with counts, folder mappings applied.

### D5 — Broken links: leave intact
Wikilinks pointing at notes absent from the target stay verbatim. Rationale: non-destructive (a later bundle containing the missing note re-stitches the graph automatically), Obsidian renders them as red links, `/lint` already tracks them. Auto-stripping to plain text loses the relation permanently — rejected.

### D6 — Placement rule
Source path wins when the target folder already exists (both vaults usually share template taxonomy). Missing folder → adapt to target taxonomy via vault-map (interaction B), *not* mkdir-source-path: target brains own their structure (set at onboarding) and import must not seed foreign taxonomy branches.

### D7 — Idempotency
A note whose incoming hash equals the byte content of the existing target note is `skip` with no question and no index churn. Re-running the same bundle → all skips → report says "no-op". No import ledger/state file needed — content hashing is the state.

### D8 — Dual-home sources + template changelog
Author each skill once, copy to both homes (`.claude/skills/{export,import}/` and `kb-template/.claude/skills/{export,import}/`), keep byte-identical, verify with `scripts/check-kb-template-drift.sh`. Add `kb-template/CHANGELOG.md` entry under `## [Unreleased]`. Update `kb-template/AGENTS.template.md` workflow table alongside root `AGENTS.md` and `.claude/skills/AGENTS.md`.

## Risks / Trade-offs

- [LLM merge corrupts a hand-written target note] → merge verdicts always pass through interaction A; the safety rule "never delete user-authored content without confirmation" is restated in the import SKILL.md; report lists every merged note for post-hoc review.
- [Huge bundle blows context (100+ notes)] → import processes placement/triage from manifest + catalog lines (cheap) and only reads full note bodies for collision comparison and merge; new-note writes are file copies + frontmatter edit, not LLM rewrites.
- [Title lookup ambiguity on export (`[[Note]]` matches two paths)] → resolver lists both and asks within the existing confirmation step (no extra interaction).
- [Hash mismatch false-positives from line endings] → export hashes the exact bytes it ships; import compares those bytes against target file bytes with normalized `\n` before declaring "identical"; anything unequal after normalization simply falls back to LLM content-compare — worst case a needless triage row, never data loss.
- [Drift between the two skill homes] → drift-check is an explicit task + CHANGELOG rule already enforced by repo convention.
- [Subscriber environment lacks archive tooling] → `bundle.py` is stdlib-only Python (`zipfile`/`hashlib`), the same interpreter the template's other skill scripts already require — no zip/tar/PowerShell dependency at all.

## Migration Plan

Additive only — two new skills, no existing behavior changes. Rollback = delete the two skill folders (both homes) + revert doc/changelog edits. No data migration; bundles are user-created files.

## Open Questions

- OQ1: dedicated `brain-name` config field vs About.md/folder-name heuristic for `manifest.source` — heuristic ships in v1; revisit if subscribers ask.
- OQ2: assets/attachments in bundle format 2 — out of scope now, manifest `format` field reserves the path.
