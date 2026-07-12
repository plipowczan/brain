# note-bundle-export (delta: export-privacy-levels)

## MODIFIED Requirements

### Requirement: Export is read-only for the vault
The export operation SHALL NOT create, modify, or delete any note and SHALL NOT modify any of the three index files. At the `me` level (default) the export SHALL write no vault file at all. At the `--public` level the export SHALL write exactly one local redaction report to `content/_outputs/reports/` and nothing else.

#### Scenario: Post-export vault state
- **WHEN** an export finishes
- **THEN** `git status` shows no changes under `content/` (the bundle file itself excepted if written inside the repo)

#### Scenario: Public export writes only the report
- **WHEN** a `--public` export finishes
- **THEN** the only new vault file is `content/_outputs/reports/export-<date>-<slug>.md`; no note and no index changed

### Requirement: Excluded content never enters a bundle
The skill SHALL refuse to package files from `_indexes/`, `_outputs/`, `_raw/`, `templates/`, `_graveyard/`, any file or folder whose name starts with `_` (including `content/_privacy.md`), and any non-markdown file.

#### Scenario: Selector touches excluded folder
- **WHEN** a selector would match a note under `content/_graveyard/`
- **THEN** the note is omitted and the omission is stated in the confirmation list

#### Scenario: Privacy policy file never ships
- **WHEN** a selector or closure step would match `content/_privacy.md` or any underscore-prefixed file
- **THEN** the file is omitted from the bundle regardless of privacy level

## ADDED Requirements

### Requirement: Privacy level parameter
The `/export` skill SHALL accept a privacy level: `me` (default, no flag) and `--public`. The `me` path SHALL behave exactly as before this change — same steps, same 2 interaction points, no report file. An unrecognized level SHALL abort the export before any work.

#### Scenario: Default level unchanged
- **WHEN** user runs `/export AI/TOOLS` with no level flag
- **THEN** the export runs the verbatim pipeline with 2 interaction points and produces byte-identical copies of the selected notes

#### Scenario: Public level engages redaction
- **WHEN** user runs `/export --public AI/TOOLS`
- **THEN** the redaction pipeline (policy load, per-note verdicts, verification sweeps, report) runs between link closure and packaging

### Requirement: Redaction policy from defaults plus vault overrides
At `--public`, the skill SHALL apply the default category policy — always cut: secrets/credentials, third-party PII (person names, client companies), health data, finance specifics (amounts, wallets, strategies), rates and contract terms; genericize: personal and commercial context; keep: tools used, howtos, technical opinions, the fact of using something. When `content/_privacy.md` exists, its rules SHALL extend or override the defaults; its absence SHALL NOT block the export.

#### Scenario: Vault override applied
- **WHEN** `content/_privacy.md` declares "the vault owner's name is public"
- **THEN** the owner's name survives redaction while default categories still apply

#### Scenario: No override file
- **WHEN** `content/_privacy.md` does not exist
- **THEN** the default policy alone governs redaction and no warning interrupts the flow

#### Scenario: Neutral tool knowledge kept
- **WHEN** a note states that a given tool is installed and how it is configured, with no client or personal identifiers
- **THEN** that content ships unredacted

### Requirement: Redaction verdict table
At `--public`, after link closure, the skill SHALL redact working copies of all selected notes and present one approvable table with a verdict per note — `include` (unchanged), `redact` (with a "what was cut" summary), or `exclude` (unsalvageable: the note's substance is itself private) — which the user approves or edits as a whole. A full before/after diff of any note SHALL be available on demand within this prompt. Interaction budget: 2 prompts at `me`, 3 at `--public`.

#### Scenario: Mixed verdicts approved once
- **WHEN** 5 notes yield 2 redact, 2 include, 1 exclude
- **THEN** the user sees exactly one verdict table covering all 5 and approves or edits it as a whole

#### Scenario: Diff on demand
- **WHEN** the user asks "show diff [[Serena]]" at the verdict table
- **THEN** the full before/after diff of that note's redaction renders before approval, without consuming an extra interaction point

### Requirement: Post-redaction verification before packaging
After verdict approval and before zipping, the skill SHALL run two nets over the redacted copies: (1) a deterministic pattern sweep (`privacy_sweep.py`) for emails, phone numbers, IBAN/card numbers, API-key shapes, and crypto wallet addresses; (2) a fresh-context adversarial LLM audit against the policy and `content/_privacy.md`. Hits SHALL be fixed and logged to the local report; a hit that flips a note's verdict SHALL re-present only the affected rows for approval. The sweep SHALL only report — never auto-edit.

#### Scenario: Sweep catches a leftover email
- **WHEN** a redacted copy still contains an email address
- **THEN** the sweep reports it, the redaction is corrected, and the fix appears in the local report

#### Scenario: Audit flips a verdict
- **WHEN** the adversarial audit finds that a note marked `redact` is unsalvageable
- **THEN** only that note's row is re-presented for approval as `exclude`; already-approved rows are not re-asked

### Requirement: Wikilink de-personalization at public level
At `--public`, wikilinks targeting excluded notes or notes matching the privacy policy SHALL have their titles de-personalized while remaining wikilinks (`[[My Crypto Strategy]]` → `[[Crypto Strategy]]`). When the title itself is the private datum (a person or client name), the skill SHALL genericize the surrounding text or cut the sentence. Aliased links SHALL keep their alias text and de-personalize only the target. Every link transformation SHALL count in the note's "what was cut" summary.

#### Scenario: Personal marker stripped from link
- **WHEN** an included note links to `[[My Investment Strategy]]` and that note is excluded
- **THEN** the shipped copy reads `[[Investment Strategy]]` and the transformation is logged

#### Scenario: Person-name link genericized
- **WHEN** an included note links to a note titled with a client's personal name
- **THEN** the shipped copy carries no name — the text is genericized or the sentence removed — and the change is logged

### Requirement: Shipped artifact carries no redaction trace
A `--public` bundle SHALL be structurally indistinguishable from a `me` bundle: manifest format 1 with unchanged fields (no privacy key, no per-note redaction flags) and shipped note files without any redaction frontmatter. Manifest `sha256` values SHALL hash the shipped (redacted) bytes.

#### Scenario: Manifest identical in shape
- **WHEN** the same selection is exported at `me` and at `--public`
- **THEN** both manifests contain exactly the same keys, differing only in note hashes (and content of shipped files)

### Requirement: Local redaction report
A `--public` export SHALL write `content/_outputs/reports/export-<date>-<slug>.md` recording: the selection, per-note verdicts, the full cut log (including link transformations), sweep/audit hits and resolutions, and the bundle path. A `me` export SHALL write no report.

#### Scenario: Report content
- **WHEN** a `--public` export redacts 3 notes and excludes 1
- **THEN** the report enumerates all 4 with their verdicts and every individual cut

#### Scenario: Redaction happens on copies only
- **WHEN** a `--public` export completes
- **THEN** every source note in `content/` is byte-identical to its pre-export state; redacted content exists only inside the bundle
