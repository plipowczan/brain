# Tasks: add-brain-namespace-prefix

_No `content/` notes are created/edited/deleted → no vault-map/catalog/graph index update and no `npx quartz build` gate required (harness layer only)._

## 1. Brain repo — commands

- [x] 1.1 `git mv` the 13 wrappers `.claude/commands/*.md` → `.claude/commands/b/*.md` (leave `opsx/` untouched)
- [x] 1.2 Update each wrapper body to name the new skill (`"Use the `brain-ingest` skill …"` etc.)
- [x] 1.3 Add 5 new research wrappers `.claude/commands/b/research{,-deep,-report,-add-items,-add-fields}.md` dispatching `brain-research*` skills

## 2. Brain repo — skill renames

- [x] 2.1 `git mv` the 13 workflow skill dirs to `brain-*` (ingest, compile, reindex, qa, lint, output, enhance, refactor, gaps, curate, export, import) + update each SKILL.md frontmatter `name:` to match
- [x] 2.2 `git mv` the 5 research suite dirs to `brain-research*` + update frontmatter `name:` in each
- [x] 2.3 Repair skill→skill references: `brain-qa` (→ compile, enhance), `brain-output` (→ compile), `brain-curate`/`brain-gaps` (→ `/b:reindex`), research chain mentions (`/research-*` → `/b:research-*`)
- [x] 2.4 Update embedded script paths: `brain-refactor` SKILL.md (`build_indexes.py`), `brain-research-deep` SKILL.md (`validate_json.py` ×2), `brain-reindex` SKILL.md self-path
- [x] 2.5 Update `brain-gaps/scripts/gaps.py` stderr hint → `run /b:reindex first`

## 3. Brain repo — scripts & docs

- [x] 3.1 `scripts/check-kb-template-drift.sh`: SHARED list → `brain-*` names (keep `excalidraw-diagram` bare)
- [x] 3.2 `scripts/extract-kb-template.sh`: 3 script paths → `brain-reindex`/`brain-lint` dirs
- [x] 3.3 Root `AGENTS.md`: Workflows table → `/b:*` commands + `brain-*` skill dirs
- [x] 3.4 `.claude/skills/AGENTS.md`: update skill names/paths (incl. `validate_json.py` note)
- [x] 3.5 Check `.claude/agents/AGENTS.md` + `scripts/AGENTS.md` for bare references; update if present

## 4. kb-template mirror

- [x] 4.1 `git mv` 14 wrappers (incl. `onboard.md`) → `kb-template/.claude/commands/b/` + update wrapper bodies to `brain-*` skill names
- [x] 4.2 Add the same 5 research wrappers under `kb-template/.claude/commands/b/`
- [x] 4.3 `git mv` kb-template skill dirs to `brain-*` (13 workflow + onboard + 5 research) + frontmatter `name:` updates + same cross-ref/script-path/gaps.py repairs as §2
- [x] 4.4 Living docs: `kb-template/README.md`, `ENVIRONMENTS.md`, `AGENTS.template.md`, `.claude/agents/AGENTS.md`, `content/REFERENCE/*.md`, `content/_raw/inbox/sample-source.md` → `/b:*` names (do NOT touch `docs/superpowers/*`)
- [x] 4.5 `kb-template/CHANGELOG.md`: `## [Unreleased]` entry, BREAKING, old→new table for all commands+skills

## 5. Verification

- [x] 5.1 `scripts/check-kb-template-drift.sh` → `no drift in shared skills`
- [x] 5.2 Repo-wide grep: no `.claude/skills/<bare-old-name>` paths and no bare `/ingest`-style workflow command refs outside `docs/superpowers/` and `openspec/changes/`
- [x] 5.3 Frontmatter audit: every renamed SKILL.md has `name:` == dir name; descriptions byte-unchanged
- [x] 5.4 Smoke test: `/b:reindex` runs `python .claude/skills/brain-reindex/scripts/build_indexes.py` cleanly; `python .claude/skills/brain-gaps/scripts/gaps.py` hint prints new command
