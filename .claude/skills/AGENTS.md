# AGENTS.md — .claude/skills/

## Purpose

The workflow **skills** that drive this vault. Each vault skill carries the `brain-` name
prefix and has a matching slash command under the `b:` namespace (`.claude/commands/b/`,
e.g. skill `brain-ingest` ↔ command `/b:ingest`); all are described in root `AGENTS.md`
→ "Workflows". Generic utilities and vendored `openspec-*` skills stay unprefixed.

## Structure

One folder per skill, each with a `SKILL.md` (YAML frontmatter: `name`, `description` +
body: "When to use" trigger phrases + "Workflow" steps). The frontmatter `name` MUST equal
the folder name. Some skills carry a `scripts/` subfolder (`brain-curate`, `brain-export`,
`brain-gaps`, `brain-ingest`, `brain-lint`, `brain-refactor`, `brain-reindex`). Workflows
are listed in root `AGENTS.md` → "Workflows".

Core KB skills: `brain-ingest`, `brain-compile`, `brain-qa`, `brain-lint`, `brain-enhance`,
`brain-curate`, `brain-gaps`, `brain-refactor`, `brain-reindex`, `brain-output`,
`brain-export`, `brain-import`. Plus `openspec-*` (OPSX workflow) and general utilities.

Bundle transfer pair: `brain-export` packs notes into a `brain-pack-*.zip` (read-only for
the vault — no note writes, no index updates); `brain-import` brings a bundle into this
vault (writes notes + all 3 indexes + a report, hard budget of ≤2 user prompts per run).
Both use `brain-export/scripts/bundle.py` (`pack`/`unpack`/`same`) — the deterministic
bundle format v1 tool; tests in `brain-export/scripts/test_bundle.py`.

Export privacy levels: default `me` = verbatim, 2 prompts, writes nothing but the zip;
`--public` = redaction pipeline (default policy + optional `content/_privacy.md`
overrides → verdict table include/redact/exclude as the 3rd prompt → verification nets:
`brain-export/scripts/privacy_sweep.py` pattern scan + fresh-context adversarial audit) and
writes one local report to `content/_outputs/reports/` — the sole exception to export's
read-only rule. The shipped bundle carries no redaction trace. Redaction works on
scratchpad copies; source notes stay byte-identical.

## Rules

- **Editing a skill = editing behavior.** Keep `SKILL.md` frontmatter `description` trigger-rich (it is how the skill is matched) and the Workflow steps executable.
- Skills MUST respect the vault contracts in root `AGENTS.md`: read `vault-map.md` first, cite wikilinks, update all 3 indexes after every write, add `agent-created: true` to new notes, work on `v4`.
- Many skills here are mirrored into `kb-template/.claude/skills/`. After changing a shared skill, run `scripts/check-kb-template-drift.sh` and port intentional changes.
- `brain-ingest/scripts/yt_fetch.py` needs `yt-dlp.exe` on PATH (see the `yt-dlp-needs-exe-on-path` memory).
- The `research*` suite dispatches the `web-search-agent` sub-agent in [`../agents/`](../agents/AGENTS.md); `research-deep` also shells out to `brain-research/validate_json.py`. Both use **project-relative** paths — keep them project-scoped, and mirror agent changes into `kb-template/.claude/agents/` (the drift script does not cover agents).
- `brain-reindex/scripts/build_indexes.py` is a **full deterministic rebuild** — running it twice on an unchanged vault must produce byte-identical indexes apart from the `updated:` stamp. Two consequences: (a) `catalog.md` summaries come from each note's frontmatter `summary:`, so hand-editing `catalog.md` is always overwritten — fix the note, not the index; (b) `## Recent Changes` in `vault-map.md` is a hand-maintained change log that **nothing in the frontmatter records**, so the script preserves an existing section verbatim and only derives one when it is absent. Do not "restore" the old regenerate-always behavior: it silently ate curated narrative and made every scheduled `kb-maintain` run open a no-op PR.
- `brain-research/validate_json.py` accepts **both** `fields.yaml` schema styles: the original `field_categories:`/`category:` and the `/b:research`-emitted `categories:`/`name:`. When no field is marked `required:`, it treats **all** defined fields as required and enforces full coverage (missing field → FAIL, exit 1). Keep this file byte-identical (LF endings) to the `kb-template/` copy or the drift check flags it.

## Verify

Dry-run the skill's trigger on a sample input; for index-touching skills, confirm `vault-map.md` / `catalog.md` / `graph.md` stay consistent (or run `/b:reindex`).
