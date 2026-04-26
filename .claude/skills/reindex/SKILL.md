---
name: reindex
description: Use when user says "reindex", "update indexes", "rebuild indexes", "odśwież indeksy", or when an index file is missing/stale. Full rebuild of `_indexes/vault-map.md`, `catalog.md`, `graph.md` from all wiki notes.
---

# REINDEX

## When to use

Trigger phrases: "reindex", "update indexes", "rebuild indexes", "odśwież indeksy", or bootstrap. Use when:

- Indexes are missing or corrupted.
- An index `updated:` timestamp is stale relative to the newest note file.
- The user explicitly requests a reindex.

## Workflow

Full rebuild of all three index files from scratch.

1. Scan all `.md` files under `content/`, excluding `_raw/`, `_indexes/`, `_outputs/`, `templates/`, and `.obsidian/`.
2. For each note: extract frontmatter, extract wikilinks, generate a one-line summary (~15 words).
3. Build `content/_indexes/vault-map.md` (folder table, tag cloud, recent changes).
4. Build `content/_indexes/catalog.md` (one entry line per note in folder sections, format per CLAUDE.md).
5. Build `content/_indexes/graph.md` (outgoing and incoming wikilinks per note).
6. Set `updated:` timestamps on all three index files to current ISO timestamp.

## See also

CLAUDE.md "Navigation Protocol" — defines the exact format of each index file.
