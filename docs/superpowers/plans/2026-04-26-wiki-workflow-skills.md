# Wiki Workflow Skills — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extract the 7 wiki workflows from `CLAUDE.md` into 7 focused skills with matching slash commands, adding cluster detection + final checklist to INGEST.

**Architecture:** One skill per workflow under `.claude/skills/<name>/SKILL.md` with a sharp `description` for natural-language auto-trigger; one thin shim per workflow under `.claude/commands/<name>.md` for deterministic invocation. CLAUDE.md "Workflows" section collapses to 7 pointer lines. INGEST gets a new 3-phase workflow (pre-scan + cluster detection, execute, final checklist); the other 6 are 1:1 lift-and-shift from CLAUDE.md.

**Tech Stack:** Markdown only. No code, no test framework. Verification = manual dry-runs against the real vault state.

**Spec:** `docs/superpowers/specs/2026-04-26-wiki-workflow-skills-design.md`

**Note on TDD:** This plan deliberately departs from the standard test-first pattern because the artifacts are markdown skill specifications, not executable code. There is no test framework in this Obsidian vault repo. "Verification" steps in each task = reading the produced file end-to-end and confirming structure (frontmatter present, sections in order, no placeholders). Functional verification happens in Task 10 via real workflow dry-runs.

**File Structure:**

```
.claude/
├── skills/
│   ├── ingest/SKILL.md          (new — Task 9)
│   ├── compile/SKILL.md         (new — Task 3)
│   ├── reindex/SKILL.md         (new — Task 4)
│   ├── qa/SKILL.md              (new — Task 5)
│   ├── lint/SKILL.md            (new — Task 6)
│   ├── output/SKILL.md          (new — Task 7)
│   └── enhance/SKILL.md         (new — Task 8)
└── commands/
    ├── ingest.md                (new — Task 2)
    ├── compile.md               (new — Task 2)
    ├── reindex.md               (new — Task 2)
    ├── qa.md                    (new — Task 2)
    ├── lint.md                  (new — Task 2)
    ├── output.md                (new — Task 2)
    └── enhance.md               (new — Task 2)
CLAUDE.md                        (modify — Task 10's predecessor; see Task 10)
```

Each `SKILL.md` is one focused unit (one workflow). Each `commands/<name>.md` is a one-line shim pointing at the same-named skill. CLAUDE.md keeps everything except the "Workflows" section, which becomes a pointer block.

---

## Task 1: Scaffold Directory Layout

**Files:**
- Create: `.claude/skills/` directory
- Create: `.claude/commands/` directory

- [ ] **Step 1: Verify current state**

Run from repo root:

```bash
ls -la .claude/
```

Expected: only `settings.local.json` and `skills/` exist (`skills/` may already exist as a sibling to `commands/`; if so, no action needed).

- [ ] **Step 2: Create `.claude/commands/` if missing**

```bash
mkdir -p .claude/commands
```

- [ ] **Step 3: Verify both target directories now exist**

```bash
ls -la .claude/
```

Expected: both `skills/` and `commands/` are present as directories.

- [ ] **Step 4: Commit**

Nothing to commit yet — empty directories aren't tracked by git. Skip commit; the next task creates files that will pull these directories into version control.

---

## Task 2: Create All 7 Slash Command Shims

**Files:**
- Create: `.claude/commands/ingest.md`
- Create: `.claude/commands/compile.md`
- Create: `.claude/commands/reindex.md`
- Create: `.claude/commands/qa.md`
- Create: `.claude/commands/lint.md`
- Create: `.claude/commands/output.md`
- Create: `.claude/commands/enhance.md`

Each command is a one-line shim that delegates to the same-named skill. The skill itself contains all logic; the command is purely a deterministic entry point.

- [ ] **Step 1: Create `commands/ingest.md`**

Content:

```markdown
Use the `ingest` skill to process files in `content/_raw/inbox/`.
```

- [ ] **Step 2: Create `commands/compile.md`**

Content:

```markdown
Use the `compile` skill to synthesize a wiki article on the topic provided.
```

- [ ] **Step 3: Create `commands/reindex.md`**

Content:

```markdown
Use the `reindex` skill to rebuild `content/_indexes/vault-map.md`, `catalog.md`, and `graph.md`.
```

- [ ] **Step 4: Create `commands/qa.md`**

Content:

```markdown
Use the `qa` skill to research the topic provided and synthesize an answer from the vault.
```

- [ ] **Step 5: Create `commands/lint.md`**

Content:

```markdown
Use the `lint` skill to audit vault health and save a report to `content/_outputs/reports/`.
```

- [ ] **Step 6: Create `commands/output.md`**

Content:

```markdown
Use the `output` skill to generate the requested report or summary about the topic provided.
```

- [ ] **Step 7: Create `commands/enhance.md`**

Content:

```markdown
Use the `enhance` skill to improve the note provided, filling gaps and adding wikilinks.
```

- [ ] **Step 8: Verify all 7 command files exist**

Run:

```bash
ls .claude/commands/
```

Expected: `compile.md  enhance.md  ingest.md  lint.md  output.md  qa.md  reindex.md` (7 files).

- [ ] **Step 9: Commit**

```bash
git add .claude/commands/
git commit -m "feat(skills): add 7 slash command shims for wiki workflows"
```

---

## Task 3: Lift-and-Shift `compile` Skill

**Files:**
- Create: `.claude/skills/compile/SKILL.md`

This is one of 6 lift-and-shift skills. Same structure for all 6: frontmatter with sharp `description`, `# <Name>` header, `## When to use` paragraph, `## Workflow` numbered steps copied from CLAUDE.md, `## See also` pointer.

- [ ] **Step 1: Write `SKILL.md`**

Full file content:

```markdown
---
name: compile
description: Use when user says "compile X", "write article about X", "napisz artykuł o X". Synthesizes a new wiki article from existing notes on a topic, citing them as wikilinks, type `compiled-note`.
---

# COMPILE

## When to use

Trigger phrases: "compile X", "write article about X", "napisz artykuł o X". The user wants a synthesized wiki article on topic X, drawing from notes already in the vault.

## Workflow

1. Read `content/_indexes/vault-map.md` → `catalog.md` → relevant notes for topic X.
2. Follow `graph.md` link chains for related content.
3. Write a synthesized article using the closest matching template, citing sources as `[[wikilinks]]`.
4. Set frontmatter: `type: compiled-note`, `agent-created: true`, and a one-line `summary:`.
5. Place the article in the appropriate topic folder under `content/`.
6. Update cited notes to link back to the new article. Update all three indexes (`vault-map.md`, `catalog.md`, `graph.md`) per the auto-update rules in CLAUDE.md.

## See also

CLAUDE.md "Navigation Protocol" — read on every operation before this workflow.
```

- [ ] **Step 2: Verify file end-to-end**

Open the file. Confirm: frontmatter has both `name` and `description`; description includes PL+EN triggers; numbered workflow steps match the spec table; no TODO/placeholder text.

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/compile/SKILL.md
git commit -m "feat(skills): add compile skill (lift from CLAUDE.md)"
```

---

## Task 4: Lift-and-Shift `reindex` Skill

**Files:**
- Create: `.claude/skills/reindex/SKILL.md`

Note the rename: CLAUDE.md calls this workflow "INDEX" but the skill/command are named `reindex` to disambiguate (per spec).

- [ ] **Step 1: Write `SKILL.md`**

Full file content:

```markdown
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
```

- [ ] **Step 2: Verify file end-to-end**

Open the file. Confirm: frontmatter complete, workflow steps match spec, numbered steps reference the correct excluded paths.

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/reindex/SKILL.md
git commit -m "feat(skills): add reindex skill (lift from CLAUDE.md INDEX workflow)"
```

---

## Task 5: Lift-and-Shift `qa` Skill

**Files:**
- Create: `.claude/skills/qa/SKILL.md`

- [ ] **Step 1: Write `SKILL.md`**

Full file content:

```markdown
---
name: qa
description: Use when user says "research X", "what do my notes say about X", "co mam w notatkach o X". Synthesizes an answer from the vault citing wikilinks; offers to save substantial answers to `_outputs/answers/`.
---

# Q&A

## When to use

Trigger phrases: "research X", "what do my notes say about X", "co mam w notatkach o X". The user wants an answer drawn from existing vault content.

## Workflow

1. Read `content/_indexes/vault-map.md` → identify relevant folders and tags for the question.
2. Read matching sections of `content/_indexes/catalog.md` → identify candidate notes.
3. Read `content/_indexes/graph.md` for link chains starting from candidates.
4. Read the actual note files — only the ones identified, not the whole vault.
5. Synthesize the answer, citing `[[sources]]` for every claim drawn from the vault. Clearly distinguish wiki content from inference. Flag gaps where the vault has no coverage.
6. If the answer is substantial, offer the user three follow-ups:
   - Save to `content/_outputs/answers/YYYY-MM-DD_<topic>.md` (type `answer-note`).
   - Promote to a full wiki article via the `compile` skill.
   - File the new content back into existing notes via the `enhance` skill.

## See also

CLAUDE.md "Navigation Protocol" — read on every operation before this workflow.
```

- [ ] **Step 2: Verify file end-to-end**

Confirm: frontmatter complete, workflow numbered 1-6, three follow-up options listed.

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/qa/SKILL.md
git commit -m "feat(skills): add qa skill (lift from CLAUDE.md Q&A workflow)"
```

---

## Task 6: Lift-and-Shift `lint` Skill

**Files:**
- Create: `.claude/skills/lint/SKILL.md`

- [ ] **Step 1: Write `SKILL.md`**

Full file content:

```markdown
---
name: lint
description: Use when user says "lint", "health check", "audit". Checks vault for missing frontmatter, broken wikilinks, orphans, stub notes, inconsistent tags, TODO markers, stale content; saves report to `_outputs/reports/`.
---

# LINT

## When to use

Trigger phrases: "lint", "health check", "audit". The user wants a health report for the vault.

## Workflow

Check the vault for the following classes of issues:

1. Missing or incomplete frontmatter (no `title`, `date`, `tags`, or `type`).
2. Broken wikilinks (cross-reference `content/_indexes/graph.md` against actual files).
3. Orphan notes (no incoming wikilinks).
4. Stub notes (very short body, mostly empty sections).
5. Inconsistent tags (typos, near-duplicates like `book` vs `books`).
6. Outstanding TODO markers (`#todo`, `#todo/replace`, `#todo/complete`).
7. Missing `summary:` field in frontmatter.
8. Notes that should logically link to one another but do not (semantic neighbors absent from `graph.md`).
9. Stale content (notes with `date:` older than 1 year and no `agent-reviewed:` within the last year).
10. Template compliance — every note's `type:` matches one of the allowed values from CLAUDE.md.

Save the report to `content/_outputs/reports/YYYY-MM-DD_health-report.md`. Print summary counts to the user (issues per class).

## See also

CLAUDE.md "Navigation Protocol" — read on every operation before this workflow.
```

- [ ] **Step 2: Verify file end-to-end**

Confirm: 10 numbered checks present, report path correct, summary printout mentioned.

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/lint/SKILL.md
git commit -m "feat(skills): add lint skill (lift from CLAUDE.md)"
```

---

## Task 7: Lift-and-Shift `output` Skill

**Files:**
- Create: `.claude/skills/output/SKILL.md`

- [ ] **Step 1: Write `SKILL.md`**

Full file content:

```markdown
---
name: output
description: Use when user says "generate report about X", "create summary of X", "stwórz podsumowanie X". Generates a requested format (summary, reading list, topic map, timeline) and saves to `_outputs/` or topic folder.
---

# OUTPUT

## When to use

Trigger phrases: "generate report about X", "create summary of X", "stwórz podsumowanie X". The user wants a derived artifact built from vault content — not a full new wiki article (that is COMPILE), but a focused report or summary.

## Workflow

1. Research the topic using the indexes: `vault-map.md` → `catalog.md` → `graph.md`.
2. Generate the requested format. Common formats include:
   - Summary (prose distillation).
   - Reading list (ordered list of notes with one-line annotations).
   - Topic map (hierarchical outline).
   - Timeline (chronological view).
3. Save the artifact:
   - Default: `content/_outputs/<format>/YYYY-MM-DD_<topic>.md`.
   - If the user wants it published as wiki content: appropriate topic folder, with proper frontmatter and `type:`.
4. Update all three indexes if the artifact was published to the wiki.

## See also

CLAUDE.md "Navigation Protocol" — read on every operation before this workflow.
- `compile` skill — for full wiki articles (different output type).
```

- [ ] **Step 2: Verify file end-to-end**

Confirm: format examples listed, save path branches both covered (private vs published).

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/output/SKILL.md
git commit -m "feat(skills): add output skill (lift from CLAUDE.md)"
```

---

## Task 8: Lift-and-Shift `enhance` Skill

**Files:**
- Create: `.claude/skills/enhance/SKILL.md`

- [ ] **Step 1: Write `SKILL.md`**

Full file content:

```markdown
---
name: enhance
description: Use when user says "enhance [[Note]]", "improve X", "popraw notatkę X". Reads the note, fills gaps from related notes, adds bidirectional wikilinks, sets `agent-reviewed:` date, preserves all existing user-authored content.
---

# ENHANCE

## When to use

Trigger phrases: "enhance [[Note]]", "improve X", "popraw notatkę X". The user wants an existing note expanded or polished — never replaced.

## Workflow

1. Read the target note. Check `content/_indexes/catalog.md` and `graph.md` for context (what other notes reference this one, what related notes exist).
2. Identify gaps:
   - Empty `#todo`, `#todo/replace`, or `#todo/complete` sections.
   - Missing or incomplete frontmatter fields.
   - Missing wikilinks to obviously-related notes.
3. Fill content from related notes already in the vault. Cite where the new content came from.
4. Add bidirectional wikilinks: outgoing from this note to its targets, and update target notes to link back. Set `agent-reviewed: YYYY-MM-DD` (today) in frontmatter.
5. **Preserve all existing user-authored content.** Only add, never remove. If something looks wrong, flag it instead of editing it out.
6. Update all three indexes per CLAUDE.md auto-update rules.

## See also

CLAUDE.md "Navigation Protocol" — read on every operation before this workflow.
```

- [ ] **Step 2: Verify file end-to-end**

Confirm: 6 numbered steps, "Preserve all existing user-authored content" rule prominent, `agent-reviewed:` field mentioned.

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/enhance/SKILL.md
git commit -m "feat(skills): add enhance skill (lift from CLAUDE.md)"
```

---

## Task 9: Write `ingest` Skill (3-Phase Workflow)

**Files:**
- Create: `.claude/skills/ingest/SKILL.md`

This is the only skill with new logic beyond what CLAUDE.md already had. Three phases: Pre-scan (with cluster detection), Execute, Final checklist.

- [ ] **Step 1: Write `SKILL.md`**

Full file content:

````markdown
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
````

- [ ] **Step 2: Verify file end-to-end**

Open the file. Confirm: three `### Phase` sections present, 15 numbered steps total, cluster report format includes options A/B/C, final report block includes all 5 stat lines, `[parent candidate]` rule explained, attachment-move list of extensions matches CLAUDE.md.

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/ingest/SKILL.md
git commit -m "feat(skills): add ingest skill with cluster detection and final checklist"
```

---

## Task 10: Collapse CLAUDE.md Workflows Section

**Files:**
- Modify: `CLAUDE.md` — replace the entire "Workflows" section (the 7 sub-sections under `## Workflows`) with a 7-line pointer block. All other CLAUDE.md sections stay as-is.

- [ ] **Step 1: Locate the Workflows section in CLAUDE.md**

Open `CLAUDE.md`. Locate the line `## Workflows`. Locate the line that ends the Workflows section — the next top-level section heading is `## Build & Deploy`. Everything between (exclusive of `## Build & Deploy`) is replaced.

- [ ] **Step 2: Replace the section**

Replace the entire Workflows section (from `## Workflows` through the line immediately before `## Build & Deploy`) with this exact block:

```markdown
## Workflows

Each workflow is a skill with a matching slash command:

- **INGEST** (`ingest`, `process inbox`) — `.claude/skills/ingest/`, command `/ingest`
- **COMPILE** (`compile X`, `write article about X`) — `.claude/skills/compile/`, command `/compile`
- **INDEX** (`reindex`, `update indexes`) — `.claude/skills/reindex/`, command `/reindex`
- **Q&A** (`research X`, `what do my notes say about X`) — `.claude/skills/qa/`, command `/qa`
- **LINT** (`lint`, `health check`, `audit`) — `.claude/skills/lint/`, command `/lint`
- **OUTPUT** (`generate report about X`) — `.claude/skills/output/`, command `/output`
- **ENHANCE** (`enhance [[Note]]`, `improve X`) — `.claude/skills/enhance/`, command `/enhance`

```

(Trailing blank line included so the next `## Build & Deploy` heading has a blank line above it.)

- [ ] **Step 3: Verify CLAUDE.md is intact**

Open CLAUDE.md and confirm the following sections are still present and unchanged in this order: `## Role`, `## Project Overview`, `## Directory Structure`, `## Navigation Protocol` (all four levels), `## Writing Style`, `## Frontmatter`, `## Templates`, `## Workflows` (the new collapsed block), `## Build & Deploy`, `## Safety Rules`. Nothing else changed.

- [ ] **Step 4: Commit**

```bash
git add CLAUDE.md
git commit -m "refactor(claude-md): collapse Workflows section into 7 skill pointers"
```

---

## Task 11: Verification Pass — Dry-Runs

No code, no test framework — verification is manual. Run each check and record the result. If any check fails, fix the affected skill or command file inline and re-run.

**Files:**
- Read: all 7 `SKILL.md` files
- Read: all 7 `commands/*.md` files
- Read: `CLAUDE.md`
- Real vault state: `content/_raw/inbox/` (currently 6 files)

- [ ] **Step 1: Structural sanity check**

Run:

```bash
ls .claude/skills/
ls .claude/commands/
```

Expected: 7 directories under `skills/` (`compile  enhance  ingest  lint  output  qa  reindex`); 7 files under `commands/` (same names with `.md`).

- [ ] **Step 2: Frontmatter sanity check**

For each skill, run:

```bash
head -4 .claude/skills/<name>/SKILL.md
```

Expected for each: opening `---`, `name: <name>`, `description: ...` (single line, includes trigger phrases in PL+EN where applicable), closing `---`.

- [ ] **Step 3: CLAUDE.md collapse sanity check**

Open `CLAUDE.md`. Count the lines in the `## Workflows` section. Expected: ~10 lines total (heading + intro line + 7 bullets + blank lines), down from ~70 lines previously.

- [ ] **Step 4: INGEST dry-run on real inbox (the main functional test)**

In a fresh Claude Code session in this repo, type: `/ingest`.

Expected behavior:

1. Skill reads `vault-map.md`.
2. Skill lists 6 files in `_raw/inbox/`.
3. Skill detects a cluster of 5 files around "Marp" (`Marp Markdown Presentation Ecosystem.md`, `marp-teammarp ...`, `marp-teammarp-cli ...`, `marp-teammarp-core ...`, `marp-teammarpit ...`).
4. Skill flags `Marp Markdown Presentation Ecosystem.md` as `[parent candidate]` and the 4 `marp-team*` files as `[repo]`.
5. Skill identifies the standalone `forrestchang...andrej-karpathy-skills...` file as outside any cluster.
6. Skill sends a single consolidated cluster report and waits for the user's choice (A/B/C).
7. After the choice, Phase 2 runs autonomously; Phase 3 prints the final checklist with non-zero counts.

If any of these steps deviates, identify the cause (skill description too vague? cluster heuristic threshold wrong? checklist format wrong?) and fix the affected file inline.

**Do not actually commit the ingest output as part of this verification step** — the goal is to validate the workflow shape. If the dry-run looks correct, proceed; the actual ingest is a separate user action after this plan is complete.

- [ ] **Step 5: Auto-trigger sanity checks**

In a fresh session each time (so prior context doesn't bias auto-trigger), type each of the following at a fresh prompt and confirm the matching skill activates without typing the slash command:

| Prompt | Expected skill |
|--------|----------------|
| `process inbox` | `ingest` |
| `przetworz nowe pliki` | `ingest` |
| `zrobisz lint?` | `lint` |
| `research distractions` | `qa` |
| `co mam w notatkach o ShareFund` | `qa` |
| `compile a note about Marp` | `compile` |
| `enhance [[About]]` | `enhance` |
| `update indexes` | `reindex` |
| `generate a reading list about Polish business books` | `output` |

If any of these fails to auto-trigger the expected skill, tighten that skill's `description` (add the missing phrase or sharpen wording) and re-run the failed checks. Iterate until all pass.

- [ ] **Step 6: Slash-command sanity check**

For each of `/ingest /compile /reindex /qa /lint /output /enhance`, type the bare slash command (no arguments) at a fresh prompt. Expected: the corresponding skill activates and either runs (if it needs no arguments — `/ingest`, `/reindex`, `/lint`) or asks the user for the missing argument (`/compile`, `/qa`, `/output`, `/enhance`).

- [ ] **Step 7: Commit verification notes (only if any fixes were made in Steps 4–6)**

If Steps 4, 5, or 6 surfaced issues that required edits to skill or command files, commit those fixes:

```bash
git add .claude/
git commit -m "fix(skills): tighten descriptions and workflow details from verification dry-run"
```

If no fixes were needed, no commit is required for this step.

- [ ] **Step 8: Final sanity — run Quartz build to confirm nothing in the content tree broke**

```bash
npx quartz build
```

Expected: build completes without errors. CLAUDE.md and `.claude/` are not part of the Quartz build, but this confirms no accidental damage to `content/` happened during the plan's edits.

---

## Plan Self-Review

**Spec coverage:**

- INGEST cluster detection + checklist → Task 9 ✅
- 6 lift-and-shift skills → Tasks 3-8 ✅
- 7 slash commands → Task 2 ✅
- CLAUDE.md collapse → Task 10 ✅
- Skill descriptions per spec table → Tasks 3-9, exact `description` strings copied verbatim from spec ✅
- File layout per spec → Task 1 (dirs) + per-task creates ✅
- Verification (3 INGEST dry-runs, smoke tests, auto-trigger sanity) → Task 11 ✅
- "Lift-and-shift normalizations" (drop "### NAME — `triggers`" line; replace with `# <Name>` + `## When to use` + `## See also`) → applied uniformly in Tasks 3-8 ✅

**Out-of-scope items from spec stay out:** no hooks, no logic changes to non-INGEST workflows, no template/index format changes, no retrofit of checklist to other skills. Confirmed.

**Placeholder scan:** no TBD/TODO/"add error handling"/"similar to Task N" — every code/markdown block is fully written out per task.

**Type / name consistency:**

- Skill names: `ingest`, `compile`, `reindex`, `qa`, `lint`, `output`, `enhance` — used consistently across file paths, frontmatter `name:`, command shims, CLAUDE.md collapsed block, and verification checks.
- Workflow display names in CLAUDE.md collapsed block keep original casing (`INGEST`, `COMPILE`, `INDEX`, `Q&A`, `LINT`, `OUTPUT`, `ENHANCE`) — matches spec verbatim.
- Trigger phrases match across spec table → frontmatter `description` → verification auto-trigger checks.
