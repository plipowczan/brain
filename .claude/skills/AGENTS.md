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
- Many skills here are shared with the template, whose source is now `../second-brain-template` (`kb-template/` is frozen — see `kb-template/FROZEN.md`). **Change a shared skill in the template first** (a session with cwd there, with its `CHANGELOG.md` entry), then port it here; `scripts/check-kb-template-drift.sh` compares these live skills with the template and must print `no drift in shared skills`.
- `brain-ingest/scripts/yt_fetch.py` finds yt-dlp itself (`resolve_yt_dlp_cmd`): `$YT_DLP_CMD` as given, then a `yt-dlp` on PATH that passes a `--version` start-up check, then `python -m yt_dlp` under the running interpreter. The check exists because Windows Smart App Control blocks pip's unsigned `yt-dlp.exe` (`WinError 4551`) while the signed `python.exe` runs. Every yt-dlp call goes through `_yt_dlp()`, so a new call must not hardcode `"yt-dlp"`. Tests: `python -m unittest` in `brain-ingest/scripts/`; the two integration tests need the network and skip when no yt-dlp is found.
- The `research*` suite dispatches the `web-search-agent` sub-agent in [`../agents/`](../agents/AGENTS.md); `research-deep` also shells out to `brain-research/validate_json.py`. Both use **project-relative** paths — keep them project-scoped. Agent changes follow the same template-first rule — see [`../agents/AGENTS.md`](../agents/AGENTS.md) (the drift script does not cover agents).
- `brain-reindex/scripts/build_indexes.py` is a **full deterministic rebuild** — running it twice on an unchanged vault must produce byte-identical indexes apart from the `updated:` stamp. Two consequences: (a) `catalog.md` summaries come from each note's frontmatter `summary:`, so hand-editing `catalog.md` is always overwritten — fix the note, not the index; (b) `## Recent Changes` in `vault-map.md` is a hand-maintained change log that **nothing in the frontmatter records**, so the script preserves an existing section verbatim and only derives one when it is absent. Do not "restore" the old regenerate-always behavior: it silently ate curated narrative and made every scheduled `kb-maintain` run open a no-op PR.
- `brain-research/validate_json.py` accepts **both** `fields.yaml` schema styles: the original `field_categories:`/`category:` and the `/b:research`-emitted `categories:`/`name:`. When no field is marked `required:`, it treats **all** defined fields as required and enforces full coverage (missing field → FAIL, exit 1). Keep this file byte-identical (LF endings) to the template's copy in `../second-brain-template` or the drift check flags it.

## Verify

Dry-run the skill's trigger on a sample input; for index-touching skills, confirm `vault-map.md` / `catalog.md` / `graph.md` stay consistent (or run `/b:reindex`).
