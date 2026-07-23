# Design: add-brain-namespace-prefix

## Context

Vault workflow surface today: 13 thin command wrappers (`.claude/commands/*.md`, one line each: "Use the `X` skill …") + 18 vault-specific skills (`.claude/skills/`), mirrored in `kb-template/.claude/`. Bare names collide with plugin skills (`ingest` vs `200iqlabs-agent-skills:ingest`) and crowd the slash menu. In-repo precedent proves the target pattern: vendored OpenSpec ships skills named `openspec-*` and commands under `.claude/commands/opsx/` which surface natively as `/opsx:*` (colon namespace from subdirectory — verified live in this project).

Current cross-reference web (from exploration grep):

- Command wrappers name their skill: `"Use the `ingest` skill …"` ×13
- Skill→skill: `qa` → `compile`, `enhance`; `output` → `compile`; `curate`/`gaps` → `/reindex`; research suite chains `/research-*`
- Embedded script paths in SKILL.md + scripts: `.claude/skills/reindex/scripts/build_indexes.py` (also in `refactor` SKILL.md and `scripts/extract-kb-template.sh`), `.claude/skills/lint/scripts/lint_scan.py|lint_links.py` (extract script), `.claude/skills/research/validate_json.py` (research-deep SKILL.md ×2)
- `gaps.py` error string: `run /reindex first`
- `scripts/check-kb-template-drift.sh` `SHARED` list uses bare skill names
- Living docs referencing bare commands: root `AGENTS.md` (workflow table), `.claude/skills/AGENTS.md`, `kb-template/README.md`, `kb-template/ENVIRONMENTS.md`, `kb-template/AGENTS.template.md`, `kb-template/.claude/agents/AGENTS.md`, `kb-template/content/REFERENCE/*.md`, `kb-template/content/_raw/inbox/sample-source.md`

## Goals / Non-Goals

**Goals:**

- Every vault workflow command invocable as `/b:<name>`; every vault-specific skill named `brain-<name>`
- Identical layout in brain repo and kb-template (paths 1:1 → drift check stays a plain `diff -rq`)
- Auto-triggering (description-driven) unaffected
- All cross-references, script paths, and living docs consistent after rename

**Non-Goals:**

- Plugin packaging (rejected: heavier restructure; subdirectory namespacing proven sufficient)
- Renaming generic utility skills (`excalidraw-diagram`, `sop-creator`, `brand-voice-generator`) or vendored `openspec-*`/`opsx`
- Touching skill descriptions/trigger phrases, `content/` indexes, `brain-mcp/`, `quartz/`
- Updating historical docs (`docs/superpowers/plans/*`, `docs/superpowers/specs/*` — archived records, left as-is)

## Decisions

1. **Commands: subdirectory `b/`, not dir-name prefix.** `.claude/commands/b/ingest.md` → `/b:ingest`. Native colon separator, zero config, proven by `opsx/`. Alternative `b-ingest.md` flat files rejected: hyphen reads worse and doesn't group in menu.

2. **Skills: directory rename `brain-<name>`, full word.** Skills are read in listings, rarely typed (commands are the typing surface) → readability wins over brevity. Mirrors OpenSpec's long-skill/short-command split (`openspec-explore` / `/opsx:explore`). Frontmatter `name:` updated to match dir name — both must agree.

3. **Prefix pair `b` / `brain-` shared by both repos.** Same names in kb-template keep the drift check's `diff -rq` valid with only a `SHARED` list update. Per-repo prefixes rejected: forces path mapping in the drift script forever.

4. **Research suite gets command wrappers.** New `commands/b/research*.md` ×5 (brain repo) — today the suite is invoked by bare skill name; after rename `/brain-research` is long, `/b:research` restores ergonomics. kb-template gets the same 5.

5. **Wrapper text updated to new skill names** (`"Use the `brain-ingest` skill …"`) so command→skill dispatch is unambiguous post-rename.

6. **Script-path updates ride along with renames in one commit** — `extract-kb-template.sh` (3 paths), drift `SHARED` list, `refactor`/`research-deep` SKILL.md embedded paths, `gaps.py` message (`run /b:reindex first`). Split commits rejected: any intermediate state has broken paths.

7. **kb-template CHANGELOG entry under `## [Unreleased]`** — mandated by root AGENTS.md rule; documents the breaking rename for template subscribers with an upgrade note (old → new name table).

## Risks / Trade-offs

- [Bare `/onboard` exists only in kb-template] → included in its `b/` move; brain repo has no onboard wrapper — asymmetry already exists today, drift `SHARED` list doesn't cover commands, no action needed.
- [`validate_json.py` byte-identical requirement between repo and template] → rename both sides in the same commit; run drift check as verification gate.
- [Skill `name:` ↔ directory mismatch would silently break slash invocation] → task explicitly pairs each dir rename with its frontmatter edit; verify with a post-rename grep.
- [User muscle memory `/ingest` → `/b:ingest`] → breaking by design; CHANGELOG upgrade table is the migration doc. No aliases kept (aliases would resurrect the collision problem).
- [Historical docs keep bare names] → accepted; they describe past states, misleading only if read as current reference.
- [Other repos/tools may call `.claude/skills/<old>/scripts/*.py` directly] → repo-wide grep for old paths as final verification step.

## Migration Plan

Single atomic commit per repo layer (brain `.claude/` + docs, then `kb-template/`), same branch `v4`, ordinary push. Rollback = `git revert`. Verification gates: `scripts/check-kb-template-drift.sh` clean; repo-wide grep finds no bare old skill-path references outside `docs/superpowers/` and `openspec/changes/`.

## Open Questions

- None blocking. (Deferred nicety: whether `sop-creator`/`brand-voice-generator` should ever join the namespace — explicitly out of scope now.)
