# Proposal: note-bundle-export-import

## Why

Notes live in isolated brain vaults (this brain + other instances of kb-template). There is no way to move a selected set of notes between vaults — sharing knowledge today means manual copy-paste that loses wikilinks, frontmatter, and index consistency. A portable bundle format plus `/export` and `/import` skills makes note sets transferable between any two template-based brains.

## What Changes

- New `/export` skill: resolve a selection (note list / tag / folder) → confirm the resolved list → offer depth-1 linked neighbors → write a zip bundle (`manifest.json` + `notes/` tree with source folder structure).
- New `/import` skill: unpack a bundle → collision triage approved as one table → place notes (source path if the folder exists, else adapt to the target vault-map taxonomy) → stamp provenance frontmatter (`imported-from`, `imported`) → update all 3 indexes → mini-lint of imported notes → report to `content/_outputs/reports/`.
- Bundle format v1: plain zip with `manifest.json` (format version, source brain, export date, notes[] with path/title/sha256). Hashes give idempotent re-import (identical note → skip without asking).
- Both skills ship twice: `.claude/skills/{export,import}/` in this brain AND `kb-template/.claude/skills/{export,import}/`, plus a `kb-template/CHANGELOG.md` entry (template subscribers must learn of the new skills).
- Root `AGENTS.md` (+ `AGENTS.template.md`) workflow tables gain EXPORT and IMPORT rows; `.claude/skills/AGENTS.md` child-doc index updated.
- Interaction budget: `/import` asks the user at most twice (collision table + folder-placement fallback), regardless of bundle size. Broken wikilinks are left intact — never auto-removed — and surfaced in the post-import report.

## Capabilities

### New Capabilities
- `note-bundle-export`: selecting notes (list/tag/folder), depth-1 closure offer, manifest generation, zip packaging.
- `note-bundle-import`: bundle validation, collision triage, placement, provenance stamping, index updates, lint report, idempotency.

### Modified Capabilities
<!-- none — no existing specs in openspec/specs/ -->

## Non-goals

- No sync or two-way merge between brains (one-shot transfer only; re-import of the same bundle is a no-op via hashes).
- No attachments/assets in bundle v1 (markdown notes only).
- No export of `_indexes/`, `_outputs/`, `_raw/`, `templates/`, or `_graveyard/` content — wiki notes only.
- No automatic re-classification of notes when the source folder exists in the target (source path wins).
- No network transport — the bundle is a local file; moving it between machines is the user's business.
- No changes to `brain-mcp/`, `quartz/`, or the Quartz build.

## Impact

- **Code layer**: new `.claude/skills/export/` and `.claude/skills/import/` (SKILL.md + optional scripts), mirrored in `kb-template/.claude/skills/`; `kb-template/CHANGELOG.md` entry; root `AGENTS.md`/`CLAUDE`-imported workflow table; `.claude/skills/AGENTS.md` index; drift check via `scripts/check-kb-template-drift.sh`.
- **Content layer (import side)**: writes notes into `content/<TOPIC>/` folders, updates `content/_indexes/vault-map.md`, `catalog.md`, `graph.md` (all three, per auto-update rules), writes report to `content/_outputs/reports/`.
- **Content layer (export side)**: read-only — reads `catalog.md` (selection resolve) and `graph.md` (depth-1 neighbors); no writes to the vault.
- **Dependencies**: zip via PowerShell `Compress-Archive`/`Expand-Archive` or `tar`/`unzip` in Git Bash — no new npm/pip dependency.
