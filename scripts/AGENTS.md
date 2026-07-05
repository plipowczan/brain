# AGENTS.md — scripts/

## Purpose

Shell scripts that keep the published **second-brain-template** repo in sync with this repo's
canonical `kb-template/` source. See the `kb-template project` memory and `kb-template/README.md`.

## Contents

| Script | What it does |
|--------|--------------|
| `extract-kb-template.sh` | Extract `kb-template/` into a standalone, clean-slate git repo ready to push as a GitHub Template. One-time bootstrap. |
| `sync-kb-template.sh` | Publish current `kb-template/` to the standalone repo, preserving that repo's history (one "sync" commit per run). Ongoing releases. |
| `check-kb-template-drift.sh` | Report diffs between this repo's LIVE `.claude/skills/` and the `kb-template/.claude/skills/` copies, so you know what to port after editing a skill on either side. |

## Rules

- POSIX `bash` (`#!/usr/bin/env bash`); this repo's shell is Git Bash on Windows — keep scripts portable.
- `kb-template/` is the **source**; the standalone repo is a **publish target**. Never edit the template by hand through these scripts — edit `kb-template/` directly, then sync.
- **Every change under `kb-template/` MUST be logged in `kb-template/CHANGELOG.md`** (`## [Unreleased]`, newest first) before syncing — subscribers read it to know what to pull.
- After changing a shared skill, run `check-kb-template-drift.sh` before syncing.
- **Before `sync-kb-template.sh`: `git -C ../second-brain-template pull` first**, and sync only from a clean brain HEAD (after pulling brain). Two checkouts syncing from different brain commits produce diverged `sync from brain@X` history and merge conflicts. The script now hard-refuses to sync onto a target that is behind its remote or mid-merge — heed it, don't force past it.

## Verify

Dry-run / inspect output before pushing anything to the remote template repo.
