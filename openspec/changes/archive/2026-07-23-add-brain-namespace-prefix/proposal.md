# Proposal: add-brain-namespace-prefix

## Why

Vault workflow commands and skills use bare names (`/ingest`, `/qa`, `ingest`, `compile`) that collide with skills from installed plugins (e.g. local `ingest` vs `200iqlabs-agent-skills:ingest`, `find-skills` ×2) and clutter the slash menu. A namespace prefix separates this repo's (and kb-template's) workflow surface from everything else, following the pattern already proven in-repo by OpenSpec (`openspec-explore` skill + `/opsx:explore` command).

## What Changes

- **Commands**: move all 13 thin command wrappers from `.claude/commands/*.md` to `.claude/commands/b/*.md` → invocable as `/b:ingest`, `/b:qa`, etc. (native colon namespacing via subdirectory, same as `opsx/`). **BREAKING**: bare `/ingest`-style command invocations stop working.
- **Skills**: rename 18 vault-specific skill directories with a `brain-` prefix (13 workflow skills + 5 research suite skills): `.claude/skills/ingest/` → `.claude/skills/brain-ingest/`, etc. Frontmatter `name:` updated to match. **BREAKING**: bare skill names change.
- **New command wrappers**: add `/b:research`, `/b:research-deep`, `/b:research-report`, `/b:research-add-items`, `/b:research-add-fields` (research suite currently has no command wrappers).
- **Cross-reference repair**: update all skill→skill references, script paths embedded in SKILL.md files (`.claude/skills/reindex/scripts/build_indexes.py`, `.claude/skills/research/validate_json.py`), the `gaps.py` error message, root `AGENTS.md` workflow table, and `.claude/skills/AGENTS.md`.
- **kb-template mirror**: apply the identical rename in `kb-template/.claude/` (14 command wrappers incl. `onboard.md`, same skill renames), record in `kb-template/CHANGELOG.md` under `## [Unreleased]`.
- **Out of scope skills stay put**: `excalidraw-diagram`, `sop-creator`, `brand-voice-generator` (generic utilities), `openspec-*` (already prefixed), `.claude/commands/opsx/` (already namespaced).

## Capabilities

### New Capabilities

- `command-namespace`: all vault workflow commands and skills carry a stable namespace prefix (`/b:` for commands, `brain-` for skills) in both the brain repo and kb-template, with cross-references and doc tables consistent.

### Modified Capabilities

_None — `note-bundle-export` / `note-bundle-import` requirements unchanged; only the invocation names of their entry commands move (`/export` → `/b:export`, `/import` → `/b:import`), which is covered by `command-namespace`._

## Impact

- **Code/harness layer only** — no `content/` folders touched, none of the 3 indexes (vault-map/catalog/graph) affected. No Quartz build impact.
- `.claude/commands/` (13 files moved + 5 new), `.claude/skills/` (18 dirs renamed, cross-refs edited), `AGENTS.md`, `.claude/skills/AGENTS.md`.
- `kb-template/.claude/` mirror (14 command files, skill dirs), `kb-template/CHANGELOG.md`.
- `scripts/check-kb-template-drift.sh` — verify path assumptions; `validate_json.py` must stay byte-identical between repo and template after the move.
- User muscle memory: `/ingest` → `/b:ingest` etc.

## Non-goals

- No plugin packaging (rejected during exploration — subdirectory + rename chosen instead).
- No changes to skill behavior, descriptions, or trigger phrases (auto-invocation must keep working unchanged).
- No prefixing of generic utility skills (`excalidraw-diagram`, `sop-creator`, `brand-voice-generator`) or vendored `openspec-*` skills / `opsx/` commands.
- No renaming inside `brain-mcp/` or `quartz/`.
