# note-bundle-import

## ADDED Requirements

### Requirement: Bundle is validated before any vault write
The `/import` skill SHALL take a bundle file path, unpack it to a staging directory outside `content/`, and validate it — `format` field known, every `notes[]` entry present, recomputed sha256 matching the manifest — before touching the vault. Validation failure SHALL abort the import with no vault changes.

#### Scenario: Unknown format version
- **WHEN** the manifest says `format: 2` and the skill only knows format 1
- **THEN** the import aborts with a message naming the unsupported version, and the vault is untouched

#### Scenario: Hash mismatch
- **WHEN** a note file's recomputed sha256 differs from its manifest entry
- **THEN** the import aborts reporting the corrupt entry, and the vault is untouched

#### Scenario: Path traversal rejected (zip slip)
- **WHEN** a manifest note path or zip member name is absolute, contains `..`, `.` or empty segments, backslashes, or a drive prefix (e.g. `C:`), or would resolve outside the staging directory
- **THEN** the import aborts naming the unsafe path, no file is written anywhere, and the vault is untouched

### Requirement: Interaction budget of at most two user prompts
A full import run SHALL ask the user at most twice, regardless of bundle size: once to approve the collision-triage table (skipped when there are no collisions) and once to approve the folder-mapping table (skipped when every incoming folder exists). No per-note questions are permitted.

#### Scenario: 100-note bundle, no collisions, all folders exist
- **WHEN** such a bundle is imported
- **THEN** the run completes with zero user prompts and a final report

#### Scenario: Collisions and folder gaps both present
- **WHEN** a bundle has 3 collisions and 2 notes whose folders are missing
- **THEN** the user sees exactly two prompts: one triage table (3 rows) and one mapping table (2 rows)

### Requirement: Collision triage as a single approvable table
For every incoming note whose target path already holds a note, the skill SHALL compare contents and propose one verdict — `skip` (identical or target strictly richer), `merge` (incoming adds material), `keep-target`, or `rename` (distinct entities sharing a title) — each with a one-line reason, presented as one table the user approves or edits as a whole.

#### Scenario: Identical note
- **WHEN** the incoming file bytes (after `\n` normalization) equal the existing note's bytes
- **THEN** the verdict is `skip` with reason "identical", proposed without LLM content comparison

#### Scenario: Incoming note richer
- **WHEN** the incoming note contains sections absent from the existing note
- **THEN** the proposed verdict is `merge` naming the added material

#### Scenario: Merge preserves target content
- **WHEN** a `merge` verdict is executed
- **THEN** no user-authored content of the target note is deleted; incoming material is woven in and all existing frontmatter fields are preserved

### Requirement: Placement follows source path, adapts only on missing folders
Each incoming note SHALL be written to its manifest path when that folder exists in the target vault. When the folder does not exist, the skill SHALL propose a target folder chosen from the target's `vault-map.md` taxonomy, batched into the single folder-mapping prompt. The skill SHALL NOT create source-path folders that are absent from the target taxonomy without user approval via that prompt.

#### Scenario: Folder exists
- **WHEN** the bundle carries `AI/TOOLS/Serena.md` and the target has `AI/TOOLS/`
- **THEN** the note is written to `content/AI/TOOLS/Serena.md` with no question

#### Scenario: Folder missing
- **WHEN** the bundle carries `CRYPTO/NOTES/X.md` and the target has no `CRYPTO/`
- **THEN** the mapping table proposes the closest target folder (e.g., `INVESTMENTS/NOTES`) for approval or adjustment

### Requirement: Provenance frontmatter on every written note
Every note the import writes (new or merged) SHALL receive `imported-from: <manifest.source>` and `imported: <import date>` in its frontmatter, preserving all pre-existing fields, and SHALL carry `agent-created: true` if not already present.

#### Scenario: New note stamped
- **WHEN** a new note is written from the bundle
- **THEN** its frontmatter contains `imported-from`, `imported`, and `agent-created: true` alongside the original fields from the source vault

### Requirement: Broken wikilinks are preserved verbatim
Wikilinks in imported notes that target notes absent from the target vault SHALL be left character-for-character intact — never removed, rewritten to plain text, or annotated inline. They SHALL instead be enumerated in the import report.

#### Scenario: Link into the void
- **WHEN** an imported note contains `[[Claude Code]]` and the target vault has no such note
- **THEN** the note text keeps `[[Claude Code]]` unchanged and the report lists it with its occurrence count

#### Scenario: Later bundle stitches the graph
- **WHEN** a subsequent import supplies the previously missing note
- **THEN** the earlier links resolve without any edit to the earlier-imported notes

### Requirement: Indexes updated in one batch pass
After all writes, the skill SHALL update `vault-map.md` (folder counts, top-tags, Recent Changes), `catalog.md` (one entry per written note), and `graph.md` (outgoing edges of written notes plus incoming edges of their targets) in a single batch pass covering exactly the executed changes.

#### Scenario: Mixed outcome batch
- **WHEN** an import writes 10 new notes, merges 2, and skips 3
- **THEN** catalog.md gains 10 entries and has 2 updated; skipped notes cause no index change; vault-map Recent Changes records the import

### Requirement: Import report saved to reports folder
The skill SHALL end by running a mini-lint over only the imported set (broken wikilinks, frontmatter completeness) and SHALL write a report to `content/_outputs/reports/import-<date>-<source>.md` covering: notes written with paths, triage verdicts as executed, folder mappings applied, and broken links with counts.

#### Scenario: Report contents
- **WHEN** an import finishes with 12 writes, 3 collisions, 4 broken link targets
- **THEN** the report file exists and enumerates all three groups with per-item detail

### Requirement: Re-importing the same bundle is a no-op
When every note in a bundle hashes identical to the corresponding existing target note, the import SHALL skip all of them without prompting, make no index changes, and report a no-op.

#### Scenario: Second run of the same bundle
- **WHEN** a bundle is imported twice in a row
- **THEN** the second run ends with zero prompts, zero vault writes, and a report stating the bundle was already fully imported
