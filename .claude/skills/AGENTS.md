# AGENTS.md — .claude/skills/

## Purpose

The workflow **skills** that drive this vault. Each skill has a matching slash command
(`.claude/commands/`) and is described in root `AGENTS.md` → "Workflows".

## Structure

One folder per skill, each with a `SKILL.md` (YAML frontmatter: `name`, `description` +
body: "When to use" trigger phrases + "Workflow" steps). Some skills carry a `scripts/`
subfolder (`curate`, `gaps`, `ingest`, `lint`, `refactor`, `reindex`). Workflows are listed
in root `AGENTS.md` → "Workflows".

Core KB skills: `ingest`, `compile`, `qa`, `lint`, `enhance`, `curate`, `gaps`, `refactor`,
`reindex`, `output`. Plus `openspec-*` (OPSX workflow) and general utilities.

## Rules

- **Editing a skill = editing behavior.** Keep `SKILL.md` frontmatter `description` trigger-rich (it is how the skill is matched) and the Workflow steps executable.
- Skills MUST respect the vault contracts in root `AGENTS.md`: read `vault-map.md` first, cite wikilinks, update all 3 indexes after every write, add `agent-created: true` to new notes, work on `v4`.
- Many skills here are mirrored into `kb-template/.claude/skills/`. After changing a shared skill, run `scripts/check-kb-template-drift.sh` and port intentional changes.
- `ingest/scripts/yt_fetch.py` needs `yt-dlp.exe` on PATH (see the `yt-dlp-needs-exe-on-path` memory).

## Verify

Dry-run the skill's trigger on a sample input; for index-touching skills, confirm `vault-map.md` / `catalog.md` / `graph.md` stay consistent (or run `/reindex`).
