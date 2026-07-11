---
name: export
description: Use when user says "export [[Note]] ...", "export #tag", "export FOLDER", "wyeksportuj notatki", "create a bundle/pack of notes". Packs selected wiki notes into a portable zip bundle (manifest + verbatim notes) importable into any other brain via /import. Read-only for the vault.
---

# EXPORT

## When to use

Trigger phrases: "export [[A]] [[B]]", "export #crypto", "export AI/TOOLS", "wyeksportuj",
"make a bundle of X". Produces a `brain-pack-*.zip` that another kb-template brain imports
with `/import`.

**Read-only guarantee:** export never creates, edits, or deletes notes and never touches
the 3 indexes. The only file written is the bundle zip itself.

## Bundle format (v1)

```
brain-pack-<slug>-<YYYY-MM-DD>.zip
├─ manifest.json
└─ notes/
   └─ AI/TOOLS/Serena.md          # verbatim copy, source folder path preserved
```

```json
{
  "format": 1,
  "source": "brain",
  "exported": "2026-07-11",
  "notes": [
    { "path": "AI/TOOLS/Serena.md", "title": "Serena", "sha256": "<hex of file bytes>" }
  ]
}
```

- `source` — this brain's name. Heuristic: `title:` frontmatter of `content/ABOUT/About.md`
  if it names the vault, else the repo folder name.
- `sha256` — hash of the exact shipped bytes; gives `/import` free integrity checks and
  idempotent re-import.

## Workflow

### 1. Resolve the selector (catalog.md only — never grep content/)

Read `content/_indexes/vault-map.md`, then `content/_indexes/catalog.md`. Accepted selectors,
mixable in one call:

| Selector | Resolution |
|----------|------------|
| `[[Note]] [[Other]]` | look up each title's folder section in catalog.md → path |
| `#tag` | every catalog entry whose `[tags]` contain the tag, across all folders |
| `TOPIC/SUB` | all entries of that catalog folder section |

- **Ambiguous title** (same title in two folders): list all matching paths; the user picks
  during the confirmation step (step 2) — no extra prompt round.
- **Exclusions:** notes under `_indexes/`, `_outputs/`, `_raw/`, `_graveyard/`, `templates/`
  and non-`.md` files are silently dropped from resolution but named in the confirmation list
  as "omitted (excluded folder)".
- **Empty selection:** report "selector resolved to 0 notes" and stop. No file is created.

### 2. Confirm the selection

Show the resolved list (full paths + count) and ask once: "Pack these N notes?".
Include any ambiguity picks and exclusion notices in this same prompt. Do not proceed
without approval.

### 3. Offer depth-1 link closure (never automatic)

From `content/_indexes/graph.md` **Outgoing** lines of the selected notes, collect link
targets **outside** the selection. If any exist, show them with per-target link counts:

```
Selection links to 3 notes outside the pack:
- [[Claude Code]] (4 links)
- [[MCP]] (2)
- [[Obsidian]] (1)
Add? [all / pick / none]
```

Add approved neighbors to the selection. If no outside neighbors — skip this step silently.
(These become the second and final prompt; steps 4–5 run unattended.)

### 4. Pack

```bash
python .claude/skills/export/scripts/bundle.py pack \
  --source "<brain name>" \
  --out "brain-pack-<slug>-<YYYY-MM-DD>.zip" \
  "AI/TOOLS/Serena.md" "CODE/TOOLS/Git.md" ...
```

- Paths are relative to `content/`. The script re-checks exclusions, computes hashes,
  writes `manifest.json` and verbatim copies, and prints a JSON receipt.
- `<slug>` — short kebab description of the selection (e.g. `crypto`, `ai-tools`, `serena-plus-2`).
- Default output location: repo root. The user may give any other path.

### 5. Report

State: bundle path, note count, total size, and (if any) which requested notes were
omitted as excluded. Confirm the vault is untouched (`git status` shows only the zip,
if written inside the repo).

## Scripts

| Script | Purpose |
|--------|---------|
| `scripts/bundle.py` | `pack` / `unpack` / `same` — deterministic bundle format tool (shared with `/import`) |
| `scripts/test_bundle.py` | unit tests; run `python .claude/skills/export/scripts/test_bundle.py` |
