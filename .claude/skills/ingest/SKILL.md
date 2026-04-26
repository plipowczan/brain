---
name: ingest
description: Use when user says "ingest", "process inbox", "przetworz nowe pliki", or when files appear in `content/_raw/inbox/`. Processes raw sources into wiki notes, handles intra-batch clustering with confirmation, updates all 3 indexes.
---

# INGEST

## When to use

Trigger phrases: "ingest", "process inbox", "przetworz nowe pliki". Files have appeared in `content/_raw/inbox/` and need to be turned into wiki notes.

## Workflow

Three phases. Phase 1 ends with a single user prompt (cluster confirmation) if any clusters are detected; Phase 2 runs autonomously; Phase 3 verifies index integrity.

### Phase 1 — Pre-scan

1. Read `content/_indexes/vault-map.md` to understand current vault structure.
2. List `content/_raw/inbox/`. Collect filenames and file count. If empty, report "Inbox empty, nothing to process" and exit.
3. **Cluster detection.** For each pair of inbox files:
   - Tokenize titles: split on spaces, hyphens, underscores; lowercase; drop English/Polish stop-words.
   - Read the first ~200 characters of each file body for additional tokens.
   - Group files sharing **≥2 distinctive tokens** OR one strong product-name token appearing in multiple titles.
   - A cluster requires **≥2 files** to form.
4. **If any clusters exist, send the user one consolidated message** containing all clusters. Format:

   ```
   Cluster "<name>" (<N> files):
     - <filename>   [parent candidate]   ← only if title lacks team/repo slash pattern but shares cluster tokens
     - <filename>   [repo]
     ...
   Options:
     A) Separate tool notes (CLAUDE.md default — each repo gets own note)
     B) Parent hub note + children (knowledge-note + N tool notes, bidirectional links)
     C) Custom — describe
   ```

   Wait for the user's choice per cluster before proceeding to Phase 2.

5. Files outside any cluster process autonomously in Phase 2 — no per-file prompt.

### Phase 2 — Execute

For each file or cluster (cluster handling per the user's choice from Phase 1):

6. Determine topic folder and note type per CLAUDE.md rules (sub-patterns: `BOOKS/`, `TOOLS/`, `KNOWLEDGE/INFO/`, `KNOWLEDGE/HOWTO/`, `NOTES/`, `HABITS/`).
7. Check `content/_indexes/catalog.md` for overlap with existing notes:
   - Overlap → merge into existing note, preserving all user-authored content.
   - No overlap → create from the appropriate template under `content/templates/` (per CLAUDE.md "Templates" table).
8. Fill frontmatter: `title`, `date` (today), `tags`, `type`, `source: "_raw/inbox/<file>"`, `agent-created: true`, `summary:` (one line).
9. Add wikilinks to related notes; update those target notes to backlink.
10. **Move attachments.** Find image/media files referenced by the source (`.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`, `.webm`, `.pdf`, etc.) that landed in `content/` root or `content/_raw/inbox/`. Move them to `content/ATTACHMENTS/`. Update any `![[filename]]` references in the new note to point to the moved location.
11. Move source: `content/_raw/inbox/<file>` → `content/_raw/processed/YYYY-MM-DD_<originalname>.<ext>`.
12. Update all three indexes per CLAUDE.md auto-update rules:
    - `catalog.md` — add or update the entry line in the correct folder section.
    - `vault-map.md` — increment folder count, refresh top-tags, prepend to Recent Changes.
    - `graph.md` — add outgoing links for the new note; update incoming-link entries on every target note.

Phase 2 is autonomous. No per-file confirmation. Cluster decisions were already made in Phase 1.

### Phase 3 — Final Checklist

13. Re-read `vault-map.md`:
    - Does `total_notes` match the delta (old count + new notes − merges)?
    - Are all new notes present in `Recent Changes`?
14. Spot-check `catalog.md` — every new note has an entry line in its folder section.
15. Print final report:

    ```
    Ingest complete.
    - Processed: X files
    - Created:   Y new notes
    - Merged:    Z into existing notes
    - Attachments moved: W
    - Indexes:   ✅ vault-map / catalog / graph
    Inbox now empty.
    ```

If the checklist fails, surface the discrepancy and offer to fix before reporting completion.

## See also

CLAUDE.md "Navigation Protocol" — read on every operation before this workflow.
CLAUDE.md "Templates" table — for the type → template mapping used in step 7.
