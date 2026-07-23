# command-namespace

## ADDED Requirements

### Requirement: Workflow commands live under the `b:` namespace
All vault workflow command wrappers SHALL reside in `.claude/commands/b/` so each is invocable as `/b:<name>` (ingest, compile, reindex, qa, lint, output, enhance, refactor, gaps, curate, export, import — brain repo; plus onboard in kb-template). No workflow command file SHALL remain at the top level of `.claude/commands/`.

#### Scenario: Namespaced invocation
- **WHEN** the user types `/b:ingest`
- **THEN** the wrapper at `.claude/commands/b/ingest.md` runs and dispatches the `brain-ingest` skill

#### Scenario: Bare command retired
- **WHEN** the slash menu is inspected after the change
- **THEN** no bare `/ingest`-style workflow command from this repo appears (only `/b:*` entries and skill names `brain-*`)

### Requirement: Vault-specific skills carry the `brain-` prefix
The 18 vault-specific skill directories (13 workflow + 5 research suite) SHALL be named `brain-<name>` and each SKILL.md frontmatter `name:` field SHALL equal its directory name. Generic utility skills (`excalidraw-diagram`, `sop-creator`, `brand-voice-generator`) and vendored `openspec-*` skills SHALL keep their existing names.

#### Scenario: Skill rename with matching frontmatter
- **WHEN** `.claude/skills/brain-ingest/SKILL.md` is read
- **THEN** its frontmatter contains `name: brain-ingest` and its description (trigger phrases) is unchanged from the pre-rename version

#### Scenario: Auto-trigger unaffected
- **WHEN** the user says "process inbox" without naming any skill
- **THEN** the `brain-ingest` skill is auto-selected via its unchanged description

### Requirement: Research suite gains command wrappers
Five new wrappers SHALL exist at `.claude/commands/b/research.md`, `research-deep.md`, `research-report.md`, `research-add-items.md`, `research-add-fields.md`, each dispatching its `brain-research*` skill, in both brain repo and kb-template.

#### Scenario: Research via short command
- **WHEN** the user types `/b:research <topic>`
- **THEN** the `brain-research` skill runs with `<topic>` as its input

### Requirement: Cross-references stay consistent after rename
All references to renamed skills SHALL be updated: command wrapper texts, skill→skill mentions in SKILL.md files, embedded script paths (`.claude/skills/brain-reindex/scripts/build_indexes.py`, `.claude/skills/brain-lint/scripts/*.py`, `.claude/skills/brain-research/validate_json.py`), the `gaps.py` stderr hint, `scripts/extract-kb-template.sh`, `scripts/check-kb-template-drift.sh` SHARED list, root `AGENTS.md` workflow table, `.claude/skills/AGENTS.md`, and living kb-template docs (README, ENVIRONMENTS, AGENTS.template, agents/AGENTS.md, content REFERENCE notes, sample inbox source). Historical docs under `docs/superpowers/` SHALL NOT be modified.

#### Scenario: No stale paths
- **WHEN** the repo is grepped for `.claude/skills/(ingest|compile|reindex|qa|lint|output|enhance|refactor|gaps|curate|export|import|research)` outside `docs/superpowers/` and `openspec/changes/`
- **THEN** zero matches are found

#### Scenario: Reindex hint points at new command
- **WHEN** `gaps.py` aborts because the graph index is missing
- **THEN** its stderr message says `run /b:reindex first`

### Requirement: kb-template mirrors the namespace and documents the break
`kb-template/.claude/` SHALL apply the identical command move and skill renames (paths 1:1 with the brain repo), and `kb-template/CHANGELOG.md` SHALL gain an entry under `## [Unreleased]` with an old→new name table marking the change as breaking.

#### Scenario: Drift check clean post-rename
- **WHEN** `scripts/check-kb-template-drift.sh` runs after both sides are renamed
- **THEN** it reports `no drift in shared skills` (with its SHARED list updated to the `brain-*` names plus `excalidraw-diagram`)

#### Scenario: Subscriber upgrade path documented
- **WHEN** a template subscriber reads `kb-template/CHANGELOG.md`
- **THEN** the Unreleased entry lists every renamed command/skill pair (e.g. `/ingest` → `/b:ingest`, `ingest` → `brain-ingest`) and flags it as BREAKING
