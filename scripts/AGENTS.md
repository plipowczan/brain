# AGENTS.md — scripts/

## Purpose

Shell scripts around the **second-brain-template** repo. Since 2026-10-13 that repo
(`../second-brain-template`, github.com/plipowczan/second-brain-template) is the template's
source of truth and brain is one of its instances. Only the drift check is still in use; the
two publishing scripts are disabled and kept as history. See `kb-template/FROZEN.md` and
`docs/kb-template-maintenance.md`.

## Contents

| Script | Status | What it does |
|--------|--------|--------------|
| `check-kb-template-drift.sh` | **in use** | Report diffs between this repo's LIVE `.claude/skills/` and the template's `.claude/skills/` for the shared skills. Template dir is the first argument, default `../second-brain-template`. |
| `sync-kb-template.sh` | **disabled** | Used to mirror `kb-template/` over the template repo. Now prints why and exits 1 before touching anything. |
| `extract-kb-template.sh` | **disabled** | Used to cut a fresh standalone template repo from `kb-template/`. Now prints why and exits 1 before touching anything. |

## Rules

- POSIX `bash` (`#!/usr/bin/env bash`); this repo's shell is Git Bash on Windows — keep scripts portable.
- **Direction is template → brain.** A change to a shared skill lands in the template first (a
  session whose working directory is `../second-brain-template`), then is ported by hand into
  brain's `.claude/skills/`. Never the other way.
- **`sync-kb-template.sh` and `extract-kb-template.sh` stay disabled.** Do not re-enable them and do
  not add an override flag: there is no case left where publishing `kb-template/` is correct —
  one run would overwrite the template with the frozen, stale copy. They are removed with
  `kb-template/` in phase 5, when brain adopts the template (`brain-upgrade --adopt`). The code
  below each `exit 1` is unreachable history.
- `kb-template/` is frozen — no edits, no `CHANGELOG.md` entries (it is no longer published).
- After porting a shared skill, run `check-kb-template-drift.sh`. It should print `no drift in shared skills` — **keep it that way**. If the template dir is missing it exits 1 with a clone hint. Locally-generated build artifacts are filtered via the `EXCLUDES` array at the top of the script (currently `__pycache__`, `*.pyc`, `.venv`, `uv.lock`); add to that array rather than tolerating recurring noise, because a check that always complains stops being read. Note it compares the filesystem with `diff -rq`, so `.gitignore` has no effect on what it sees — new artifact types need entries in **both** places.
- `SHARED` is a hand-kept list and does **not** cover every skill both sides carry: `brain-curate`, `brain-export`, `brain-gaps`, `brain-import` and `brain-refactor` exist on both sides but are not checked. Template-only skills (`brain-onboard`) and brain-only ones (`openspec-*`, `sop-creator`, `brand-voice-generator`) stay out.

## Verify

```bash
bash scripts/check-kb-template-drift.sh        # -> no drift in shared skills
bash scripts/sync-kb-template.sh; echo $?      # -> refusal message, 1
git -C ../second-brain-template status --short # unchanged by the attempt
```
