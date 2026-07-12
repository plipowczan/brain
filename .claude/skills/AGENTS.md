# AGENTS.md — .claude/skills/

## Purpose

The workflow **skills** that drive this vault. Each skill has a matching slash command
(`.claude/commands/`) and is described in root `AGENTS.md` → "Workflows".

## Structure

One folder per skill, each with a `SKILL.md` (YAML frontmatter: `name`, `description` +
body: "When to use" trigger phrases + "Workflow" steps). Some skills carry a `scripts/`
subfolder (`curate`, `export`, `gaps`, `ingest`, `lint`, `refactor`, `reindex`). Workflows
are listed in root `AGENTS.md` → "Workflows".

Core KB skills: `ingest`, `compile`, `qa`, `lint`, `enhance`, `curate`, `gaps`, `refactor`,
`reindex`, `output`, `export`, `import`. Plus `openspec-*` (OPSX workflow) and general utilities.

Bundle transfer pair: `export` packs notes into a `brain-pack-*.zip` (read-only for the
vault — no note writes, no index updates); `import` brings a bundle into this vault
(writes notes + all 3 indexes + a report, hard budget of ≤2 user prompts per run).
Both use `export/scripts/bundle.py` (`pack`/`unpack`/`same`) — the deterministic bundle
format v1 tool; tests in `export/scripts/test_bundle.py`.

Export privacy levels: default `me` = verbatim, 2 prompts, writes nothing but the zip;
`--public` = redaction pipeline (default policy + optional `content/_privacy.md`
overrides → verdict table include/redact/exclude as the 3rd prompt → verification nets:
`export/scripts/privacy_sweep.py` pattern scan + fresh-context adversarial audit) and
writes one local report to `content/_outputs/reports/` — the sole exception to export's
read-only rule. The shipped bundle carries no redaction trace. Redaction works on
scratchpad copies; source notes stay byte-identical.

## Rules

- **Editing a skill = editing behavior.** Keep `SKILL.md` frontmatter `description` trigger-rich (it is how the skill is matched) and the Workflow steps executable.
- Skills MUST respect the vault contracts in root `AGENTS.md`: read `vault-map.md` first, cite wikilinks, update all 3 indexes after every write, add `agent-created: true` to new notes, work on `v4`.
- Many skills here are mirrored into `kb-template/.claude/skills/`. After changing a shared skill, run `scripts/check-kb-template-drift.sh` and port intentional changes.
- `ingest/scripts/yt_fetch.py` needs `yt-dlp.exe` on PATH (see the `yt-dlp-needs-exe-on-path` memory).

## Verify

Dry-run the skill's trigger on a sample input; for index-touching skills, confirm `vault-map.md` / `catalog.md` / `graph.md` stay consistent (or run `/reindex`).
