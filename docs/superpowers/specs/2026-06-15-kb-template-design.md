# Knowledge-Base Template Repository — Design

- **Date:** 2026-06-15
- **Owner:** Pawel
- **Status:** Approved (brainstorming) → ready for implementation plan
- **Source repo:** `C:\Projects\brain` (the live "second brain")

## 1. Goal

Produce a **reusable template repository** for managing a personal knowledge base
(Obsidian-style markdown vault driven by Claude Code skills), derived from the current
`brain` repo but stripped of personal content and of the Quartz publishing pipeline.

The template must ship **all skills needed to manage** a KB plus a guided **onboarding**
flow that lets a user go from clone → working, personalized KB in one session.

### Build workflow

1. Build the template **inside this repo first**, as a self-contained `kb-template/`
   directory, so it can be dogfooded/validated live.
2. Later (out of scope for this spec) extract `kb-template/` as a standalone repo and
   mark it a GitHub *Template repository*. No push is performed by this work.

## 2. Scope

### In scope
- A new `kb-template/` directory in this repo containing a complete, generic KB system.
- Core management skills, selected extras, four new enrichment skills/contracts, and a
  new `onboard` skill.
- Parameterized brain (`CLAUDE.template.md`) + generic writing style.
- A worked example note + pre-built indexes so skills work immediately.
- Validation of the scaffold (reindex + lint clean baseline; render dry-run; self-tests).

### Out of scope
- Quartz / GitHub Pages publishing (`quartz/`, `quartz.*.ts`, `public/`, deploy workflow).
- `brain-mcp` server (mentioned in README as an optional add-on only).
- Pushing to GitHub / creating the standalone template repo.
- Any change to the live vault content under `content/` (except reading for reference).

## 3. Repository layout

```
kb-template/
├─ CLAUDE.template.md          # parameterized brain → onboarding renders CLAUDE.md
├─ README.md                   # quickstart: open in Claude Code, run /onboard
├─ AGENTS.md                   # cross-tool mirror of the brain (Codex/Gemini)
├─ .gitignore .prettierrc .npmrc .editorconfig
├─ requirements.txt            # python deps for scripts (yt-dlp, etc.)
├─ schema.yml                  # frontmatter contract per note type
├─ .claude/
│  ├─ skills/
│  │   ingest compile enhance lint output qa reindex          # core 7
│  │   excalidraw-diagram                                      # extra
│  │   research research-deep research-report
│  │   research-add-fields research-add-items                  # research suite
│  │   refactor gaps                                           # NEW enrichment skills
│  │   onboard                                                 # NEW onboarding
│  └─ commands/               # one thin .md per skill (incl. onboard, refactor, gaps)
├─ tests/                      # skill self-tests: fixture vault + assertions
│  ├─ fixture-vault/
│  └─ run_tests.py
└─ content/
   ├─ _raw/
   │   ├─ inbox/            sample-source.md   # real doc so first /ingest has input
   │   └─ processed/        .gitkeep
   ├─ _indexes/            vault-map.md catalog.md graph.md   # pre-built vs example
   ├─ _outputs/{answers,reports}/  .gitkeep
   ├─ templates/           # generic note templates (subset; pruned by onboarding)
   ├─ WRITING_STYLE.template.md     # generic; onboarding personalizes → WRITING_STYLE.md
   └─ REFERENCE/           Example Note.md     # one worked example topic
```

### Excluded from the template
`quartz/`, `quartz.config.ts`, `quartz.layout.ts`, `public/`, `graphify-out/`,
`screenshot.png`, the publishing parts of `package.json`, the `.github/` deploy workflow,
all personal `content/` topics, `brain-mcp/`.

## 4. Skills

### 4.1 Ported as-is (already generic)
`compile, enhance, lint, output, qa, reindex`, `excalidraw-diagram`, and the research
suite (`research, research-deep, research-report, research-add-fields, research-add-items`).
Their Python scripts (`build_indexes.py`, `lint_scan.py`, `lint_links.py`) move unchanged —
they operate on folder structure, not topic names.

Research suite is **best-effort**: it depends on whatever web tools the user's Claude Code
has available; the README states this. No guarantee baked into the template.

### 4.2 Ported with one edit
`ingest` — `yt_fetch.py` carries an author string (the only personal reference found in
skills). Strip it. YouTube fetch stays as an optional, already-gated path documented as
needing `yt-dlp` (+ `ffmpeg` for the Whisper fallback) on PATH.

### 4.3 New enrichment skills/contracts
- **`refactor`** — note surgery with link integrity. Move / rename / merge / split a note
  and automatically repair **every** wikilink that targets it plus all three indexes.
  A primitive nothing else provides; renaming today breaks backlinks silently.
- **`gaps`** — coverage analysis. Reasons over `catalog.md` + `graph.md` to surface
  weakly-connected notes, topics implied but never defined, and stale clusters; outputs an
  actionable "to-build" map. Distinct axis from `lint` (mechanics) — `gaps` checks
  knowledge completeness.
- **Schema contract** (`schema.yml`) — defines required fields/tags per note type.
  `lint` enforces it; an **optional** git pre-commit hook blocks malformed notes. Backbone
  that makes `lint` far stronger than its current ad-hoc checks. Not a skill itself.
- **Skill self-tests** (`tests/`) — a fixture vault + assertions proving `ingest`,
  `reindex`, and `lint` behave. Lets the template evolve safely.

### 4.4 Prereq handling
"Keep Python, document prereqs." Onboarding probes `python3` (+ optional `yt-dlp`,
`ffmpeg`), prints a ✅/⚠️ table, and warns on missing — **non-blocking**. `requirements.txt`
lets a user `pip install -r requirements.txt`.

### Explicitly rejected (low value / thin wrappers)
`/capture` (just edit a file in inbox), `/review` (a thin lint+reindex combo — run both),
`/link` (single-note linking already covered by `enhance`), `/new-note` (filler),
standalone CI-lint Action and devcontainer (optional, low signal — left out of v1).

## 5. Templatizing the brain

### 5.1 `CLAUDE.template.md`
Same structure as the current `CLAUDE.md` (Role, Navigation Protocol / Progressive
Disclosure, Auto-Update Rules, Workflows, Frontmatter, Safety) but parameterized and with
the Publish/Quartz section removed:

- `{{KB_NAME}}`, `{{KB_OWNER}}`, `{{PRIMARY_LANGUAGE}}`
- `{{TOPIC_TABLE}}` — generated from interview topics
- `{{NOTE_TYPES}}` — chosen note types
- `{{MAIN_BRANCH}}` — default `main` (replaces the hardcoded `v4`)
- Publish/deploy/Quartz content — deleted
- Workflows section lists the final skill set incl. `refactor`, `gaps`, `onboard`

### 5.2 Personalization mechanism — **A: placeholder replacement**
`/onboard` produces the final files by deterministic `{{VAR}}` → value substitution plus
include/exclude of marked blocks. Predictable, trustworthy, re-runnable. (Rejected B:
free-form agent regeneration — non-deterministic, harder to trust.)

A small `onboard/scripts/render.py` performs substitution + block include/exclude,
consistent with the "keep Python" decision.

### 5.3 `WRITING_STYLE.template.md`
The current `WRITING_STYLE_ANALYSIS.md` is personal (specific voice, Polish→English
history, a specific emoji map). The template ships a **generic** version keeping the
*structure* (tone guidance, emoji-in-headings convention, wikilink rules, Resources-section
pattern) with neutral defaults. The personal emoji map becomes a *suggested default*, not a
mandate. Onboarding fills voice answers (person, formality, language).

## 6. The `onboard` skill (centerpiece)

Trigger: `/onboard`, "onboard", "set up my KB", "rozpocznij". Detects a fresh template via
presence of `CLAUDE.template.md` + the example topic. Runs once; offers re-run to
reconfigure.

### Phase 1 — Interview (one question at a time, AskUserQuestion)
1. KB name + owner
2. Primary language (English / Polish / other) — drives writing style + skill trigger phrasing
3. Domains/topics → topic folder set + `{{TOPIC_TABLE}}`
4. Note types in play (defaults: basic, knowledge, tool, book, answer; add/remove)
5. Voice: person (1st / neutral), formality, keep-or-drop emoji-heading convention
6. Main branch name (default `main`)

Answers persisted to `.kb-onboard.json` for later reconfigure.

### Phase 2 — Prereq check
Probe `python3` (+ optional `yt-dlp`, `ffmpeg`); print a ✅/⚠️ table. Non-blocking.

### Phase 3 — Scaffold (deterministic, mechanism A)
- Render `CLAUDE.template.md` → `CLAUDE.md`; delete the template.
- Render `WRITING_STYLE.template.md` → `WRITING_STYLE.md`.
- Create topic folders from the interview.
- Ask whether to **delete the `REFERENCE/` example** (keep as tutorial vs remove); same for
  the sample inbox doc.
- Seed `_indexes/` by running `reindex` so all three indexes match the new structure.
- Prune note templates to the chosen types.

### Phase 4 — Handoff
Print "what now": drop a file in `_raw/inbox/` then `/ingest`, or `/qa`, etc. Summarize the
created structure.

### Idempotence
If `CLAUDE.template.md` is already gone, `/onboard` reports "already initialized" and offers
reconfigure (re-render from `.kb-onboard.json`) rather than clobbering existing files.

## 7. Infra & DX extras (selected)
- **SessionStart hook** — auto-loads `vault-map.md` into context each session, enforcing the
  Progressive-Disclosure protocol automatically. Cheap, on-theme.
- **`AGENTS.md`** — cross-tool mirror of the brain so Codex/Gemini agents follow the same
  rules. Generated/personalized alongside `CLAUDE.md`.
- **Sample inbox doc** (`content/_raw/inbox/sample-source.md`) — a real document so the first
  `/ingest` has something to chew, as a tutorial.

## 8. README

- One-paragraph "what this is".
- **Start here:** open the folder in Claude Code → run `/onboard`.
- Prereqs: Node optional; Python 3 for scripts; optional `yt-dlp` + `ffmpeg` for YouTube
  ingest.
- Skill cheat-sheet table (command → what it does), including `refactor`, `gaps`, `onboard`.
- "Add publishing later" note pointing at Quartz / `brain-mcp` as optional add-ons.

## 9. Worked example
`content/REFERENCE/Example Note.md` — a real `knowledge-note` with correct frontmatter,
wikilinks, and a Resources section, demonstrating the conventions. The shipped `_indexes/`
reference it so `/qa`, `/lint`, `/enhance`, `/refactor`, `/gaps` work on minute one.
Onboarding offers to delete it.

## 10. Build & verification plan
1. Copy generic skills/scripts/templates from this repo into `kb-template/`.
2. Author new artifacts: `onboard` skill (+ `render.py`), `refactor` skill, `gaps` skill,
   `CLAUDE.template.md`, `WRITING_STYLE.template.md`, `AGENTS.md`, `schema.yml`, README,
   `tests/`, sample inbox doc, example note, SessionStart hook.
3. Strip the author string from `yt_fetch.py`.
4. Seed the example note + pre-build the three indexes.
5. **Verify:**
   - Run `reindex` script against the scaffold → indexes match (clean baseline).
   - Run `lint` scripts → clean (schema-valid example, no broken links/orphans beyond
     expected).
   - Dry-run `render.py` substitution with sample answers → valid `CLAUDE.md` / writing
     style output.
   - Run `tests/run_tests.py` → ingest/reindex/lint assertions pass.

## 11. Open questions
None outstanding. All design forks resolved during brainstorming:
delivery = standalone dir built in-repo first; skills = core 7 + excalidraw + research suite
+ refactor + gaps + onboard; onboarding = interactive interview; starter content = scaffold +
one worked example; runtime = keep Python + document prereqs; personalization = mechanism A;
enrichments = all four (refactor, gaps, schema contract, self-tests).
