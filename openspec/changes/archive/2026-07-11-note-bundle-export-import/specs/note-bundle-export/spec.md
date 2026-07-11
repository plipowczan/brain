# note-bundle-export

## ADDED Requirements

### Requirement: Selection resolves note list from indexes
The `/export` skill SHALL accept three selector forms — a list of wikilinks (`[[Note]] …`), a tag (`#tag`), or a folder path (`TOPIC/SUB`) — and SHALL resolve each to a concrete note list using `_indexes/catalog.md`, never by scanning `content/` directly.

#### Scenario: Wikilink list selector
- **WHEN** user runs `/export [[Serena]] [[GrepRAG]]`
- **THEN** the skill resolves each title to its vault path via catalog.md and produces a 2-note selection

#### Scenario: Tag selector
- **WHEN** user runs `/export #crypto`
- **THEN** the selection contains exactly the notes whose catalog entries carry tag `crypto`, across all folders

#### Scenario: Folder selector
- **WHEN** user runs `/export AI/TOOLS`
- **THEN** the selection contains all notes in the catalog section for `AI/TOOLS`

#### Scenario: Ambiguous title
- **WHEN** a `[[Note]]` selector matches more than one path in catalog.md
- **THEN** the skill lists all matches and asks the user to pick within the confirmation step, without adding an extra interaction round

### Requirement: Resolved selection is confirmed before packaging
The skill SHALL display the resolved note list (paths) and SHALL NOT write a bundle before the user confirms it.

#### Scenario: User confirms
- **WHEN** the resolved list is shown and the user approves
- **THEN** packaging proceeds with exactly the confirmed notes

#### Scenario: Empty selection
- **WHEN** a selector resolves to zero notes
- **THEN** the skill reports this and exits without creating any file

### Requirement: Depth-1 link closure is offered, never automatic
After confirmation, the skill SHALL compute, from `_indexes/graph.md`, the set of notes linked from the selection but not in it, SHALL display them with per-note inbound link counts, and SHALL let the user add all, some, or none. The skill SHALL NOT include unselected neighbors without user approval.

#### Scenario: Neighbors exist
- **WHEN** selected notes link to 3 notes outside the selection
- **THEN** the skill lists the 3 with link counts and asks: all / chosen subset / none

#### Scenario: No outside neighbors
- **WHEN** every outgoing link of the selection targets a note inside the selection
- **THEN** the closure step is skipped silently

### Requirement: Bundle is a zip with manifest and verbatim notes
The skill SHALL produce a zip file containing `manifest.json` and a `notes/` tree that preserves each note's source folder path with byte-identical file copies. The manifest SHALL contain `format` (integer, `1`), `source` (source brain name), `exported` (ISO date), and `notes[]` with `path`, `title`, and `sha256` of the shipped file bytes.

#### Scenario: Bundle structure
- **WHEN** export completes for `AI/TOOLS/Serena.md`
- **THEN** the zip contains `manifest.json` and `notes/AI/TOOLS/Serena.md` identical to the vault file, and the manifest entry's `sha256` matches the shipped bytes

#### Scenario: Default output name
- **WHEN** user gives no output path
- **THEN** the bundle is written to the repo root as `brain-pack-<slug>-<YYYY-MM-DD>.zip`

### Requirement: Export is read-only for the vault
The export operation SHALL NOT create, modify, or delete any note and SHALL NOT modify any of the three index files.

#### Scenario: Post-export vault state
- **WHEN** an export finishes
- **THEN** `git status` shows no changes under `content/` (the bundle file itself excepted if written inside the repo)

### Requirement: Excluded content never enters a bundle
The skill SHALL refuse to package files from `_indexes/`, `_outputs/`, `_raw/`, `templates/`, `_graveyard/`, and any non-markdown file.

#### Scenario: Selector touches excluded folder
- **WHEN** a selector would match a note under `content/_graveyard/`
- **THEN** the note is omitted and the omission is stated in the confirmation list
