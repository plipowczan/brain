# Tasks: note-bundle-export-import

## 1. Shared plumbing

- [x] 1.1 Write zip helper script (`scripts/` inside each skill): probe `zip` → `tar` → PowerShell `Compress-Archive`/`Expand-Archive`; pack + unpack + sha256 functions; POSIX bash, portable per scripts/AGENTS.md rules
- [x] 1.2 Define manifest.json v1 shape as a documented example inside both SKILL.md files (format/source/exported/notes[path,title,sha256]); source-name heuristic: About.md frontmatter title, else repo folder name

## 2. Export skill

- [x] 2.1 Author `.claude/skills/export/SKILL.md`: selector resolution (wikilink list / #tag / folder) from catalog.md only, ambiguity handling inside confirmation step, empty-selection exit
- [x] 2.2 Add confirmation step (resolved paths list) and depth-1 closure step (graph.md outgoing → outside-selection neighbors with link counts; all/some/none)
- [x] 2.3 Add packaging step: exclusion rules (`_indexes/`, `_outputs/`, `_raw/`, `templates/`, `_graveyard/`, non-md), verbatim copies under `notes/<source path>`, manifest write, default output name `brain-pack-<slug>-<date>.zip`, read-only guarantee (no vault writes, no index updates)

## 3. Import skill

- [x] 3.1 Author `.claude/skills/import/SKILL.md`: staging unpack to scratchpad, validation (format known, entries present, sha256 recompute) with abort-before-any-vault-write
- [x] 3.2 Classification pass: read target vault-map.md + relevant catalog.md sections; bucket each note into new+folder-exists / new+folder-missing / collision; byte-identical (`\n`-normalized) → auto-skip without LLM compare
- [x] 3.3 Interaction A — collision triage: one table (note | skip/merge/keep-target/rename | one-line reason), approve-or-edit as a whole, skipped when zero collisions
- [x] 3.4 Interaction B — folder mapping: one table proposing target folders from vault-map taxonomy for missing-folder notes, skipped when none; never mkdir source-path folders absent from target taxonomy
- [x] 3.5 Execution pass: write notes, merge per /refactor discipline (never drop target user-authored content, preserve all frontmatter), stamp `imported-from` + `imported` + `agent-created: true` on every written note; broken wikilinks left verbatim
- [x] 3.6 Batch index update: vault-map.md (counts, top-tags, Recent Changes) + catalog.md (add/update entries) + graph.md (outgoing + incoming edges) in one pass covering exactly executed changes; skips cause no index churn
- [x] 3.7 Mini-lint of imported set only + report to `content/_outputs/reports/import-<date>-<source>.md` (writes, verdicts executed, folder mappings, broken links with counts); no-op detection for fully re-imported bundles

## 4. Docs (DOX tree)

- [x] 4.1 Root `AGENTS.md`: add EXPORT and IMPORT rows to the Workflows list
- [x] 4.2 `.claude/skills/AGENTS.md`: document both new skills (purpose, interaction budget, read-only vs write behavior)

## 5. kb-template mirror

- [x] 5.1 Copy `export/` and `import/` skill folders byte-identical to `kb-template/.claude/skills/`
- [x] 5.2 Add EXPORT/IMPORT workflow rows to `kb-template/AGENTS.template.md`
- [x] 5.3 Add `kb-template/CHANGELOG.md` entry under `## [Unreleased]` describing both skills and bundle format v1
- [x] 5.4 Run `scripts/check-kb-template-drift.sh` — must report no drift for export/import

## 6. Verification (round-trip on this vault)

- [x] 6.1 Export a 3-note test bundle (list selector incl. one ambiguity if available; verify manifest hashes, zip structure, `git status` clean under `content/`)
- [x] 6.2 Import the same bundle back into this vault → expect full no-op (zero prompts, zero writes, no-op report)
- [x] 6.3 Simulate real import: temp-modify one exported note in the bundle staging copy → import → expect 1-row triage table, merge/skip verdict honored, provenance frontmatter, report written; then revert the vault note and remove the test report
- [x] 6.4 Update vault-map.md / catalog.md / graph.md indexes if any test note or report edits persist (or verify no index change needed after cleanup)
- [x] 6.5 `npx quartz build` passes after cleanup
