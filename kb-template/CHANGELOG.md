# Changelog

All notable changes to the **Knowledge Base Template** are documented here, for people
who have cloned the template and want to pull improvements into their own base.

The format follows [Keep a Changelog](https://keepachangelog.com/). Dates are ISO (UTC).

## [Unreleased]

### Added
- **Research skill suite now ships its `web-search-agent` dependency** — the `/research`
  → `/research-deep` → `/research-report` pipeline dispatches a `web-search-agent`
  sub-agent that was never bundled, so the deep phase silently fell back to generic web
  search. Added `.claude/agents/web-search-agent.md` + `.claude/agents/web-search-modules/`
  (5 routing modules: general-web, github-debug, stackoverflow, academic-papers,
  chinese-tech), vendored from the upstream **Weizhena/Deep-Research-skills** (MIT) this
  suite was adapted from. Also fixed two hardcoded home-dir paths that assumed a global
  `~/.claude` install: `research-deep` now runs
  `python .claude/skills/research/validate_json.py` (was `~/.claude/skills/…`) and the
  agent loads modules from `.claude/agents/web-search-modules/` (was `~/.claude/agents/…`)
  — both project-relative so a cloned template works without a global install. Removed a
  machine-specific project-root path from `research/SKILL.md` (now "the vault/project
  root"). Existing bases: pull `.claude/agents/` and re-pull `.claude/skills/research-deep/`
  + `.claude/skills/research/`.
- **Export privacy levels: `/export --public` redaction pipeline** — bundles that leave
  your trust boundary (shared with strangers, published openly) can now be scrubbed of
  private data. Default level stays exactly as before (verbatim, 2 prompts, read-only).
  `--public` adds: a category redaction policy (always cut secrets, third-party PII,
  health, finance, rates; genericize personal/commercial context; keep tools/howtos/
  technical opinions) tunable per vault via a new optional `content/_privacy.md`
  (commented example ships with the template); one approvable verdict table
  (include/redact/exclude per note, full diff on demand — 3rd and normally last prompt);
  two post-redaction safety nets (`privacy_sweep.py` deterministic pattern scan for
  emails/phones/IBAN/cards/API-keys/JWT/wallets + a fresh-context adversarial LLM audit);
  wikilink de-personalization (`[[My Crypto Strategy]]` → `[[Crypto Strategy]]`, person-name
  titles genericized) — and writes a local redaction report to `_outputs/reports/`.
  The shipped bundle deliberately carries **no redaction trace** (manifest unchanged,
  format still 1) — the local report is the only record. Also fixes `bundle.py` exclusion:
  underscore-prefixed **files** (e.g. `_privacy.md`) can no longer be packed at any level.
  Existing bases: pull `.claude/skills/export/` (SKILL.md + `bundle.py` +
  `privacy_sweep.py` + tests) and optionally `content/_privacy.md`.
- **Note-bundle transfer: `/export` + `/import` skills** — move sets of notes between
  any two template-based knowledge bases. `/export` (new skill + command) resolves a
  selection (wikilink list, `#tag`, or folder), confirms it, offers depth-1 linked
  neighbors, and packs verbatim note copies into a `brain-pack-*.zip` with a
  `manifest.json` (format `1`, source base name, export date, per-note sha256) — fully
  read-only for the vault. `/import` (new skill + command) validates the bundle before
  any write (format/hash checks), auto-skips byte-identical notes (idempotent re-import),
  triages collisions in a single approve-or-edit table (skip/merge/keep-target/rename),
  maps notes from missing source folders onto the target vault's own taxonomy in a second
  single table (never seeds foreign folder structures unasked), stamps
  `imported-from`/`imported` provenance frontmatter, leaves broken wikilinks intact for
  later re-stitching, batch-updates all 3 indexes, and writes a report to
  `_outputs/reports/` — hard budget of at most 2 user prompts per run, regardless of
  bundle size. Deterministic mechanics live in `export/scripts/bundle.py`
  (`pack`/`unpack`/`same`, stdlib-only Python, tests included). Existing bases: pull
  `.claude/skills/export/`, `.claude/skills/import/`, `.claude/commands/export.md`,
  `.claude/commands/import.md`, and add the two Workflows rows to your `AGENTS.md`.
- **"Works beyond Claude Code" docs** — the template now documents that it runs *outside*
  Claude Code, with **no terminal and no git commands**. Three doc-only additions: a new
  README section listing the supported tools (Claude Desktop Code tab, GitHub Copilot,
  Codex, Cursor, Antigravity) and how to run commands / save changes in each; a note in
  `AGENTS.template.md` explaining which tool reads `AGENTS.md` vs `CLAUDE.md` and why the
  `@AGENTS.md` import keeps one source of truth; and a new **`ENVIRONMENTS.md`** carrying
  the full verified tool-by-tool matrix (file access, native vs conversational commands,
  git-without-commands, which instruction file each tool reads). No skill or
  generation-logic changes. Existing bases: pull `ENVIRONMENTS.md` and add the
  README / `AGENTS.md` paragraphs if you want the same guidance (your rendered `AGENTS.md`
  predates the note — paste it in by hand).
- **`LICENSE` (MIT)** — the template now ships an explicit MIT license, so forks have
  real permission to use, modify, and redistribute it. Without a license file a public
  repo defaults to "all rights reserved," which silently contradicted the "git clone and
  it's yours" invitation. Also adds a **License** section to the README. Existing bases:
  pull `LICENSE` if you intend to republish or share your clone.
- **Scheduled maintenance workflow** (`.github/workflows/kb-maintain.yml`) — an optional
  GitHub Action that keeps navigation fresh without anyone remembering to run `/reindex`.
  Weekly (and on-demand via the Actions tab) it rebuilds `content/_indexes/` and runs the
  lint scanner, then opens **one** pull request only if the rebuild changed the indexes in
  substance — a restamped `updated:` timestamp alone never triggers a PR. It never edits
  your notes; the only writes are to `_indexes/`, via a PR you review. Encodes OpenWiki's
  "doc drift is a CI problem, not a discipline problem" idea. Delete the file to opt out.
  - **Enable it:** it runs automatically once the file is on your default branch. Under
    **Settings → Actions → General**, allow workflows to *"Read and write"* and to
    *"create and approve pull requests"* so the bot can open the maintenance PR.
- **`/curate` skill** — vault hygiene: scores notes for staleness, isolation, dead links,
  and duplication; proposes archive/merge/refresh; retires confirmed notes to
  `content/_graveyard/` (reversible — never `git rm`, gated on your confirmation).
- **`content/_graveyard/`** — holding folder for retired notes, excluded from the indexes.
- **This `CHANGELOG.md`** — from now on every template change is recorded here.

### Changed
- **Single source of truth for agent instructions.** `AGENTS.md` is now the canonical
  file that holds all project instructions (role, navigation protocol, writing style,
  frontmatter, workflows, safety). `CLAUDE.md` is reduced to a thin pointer that imports
  `AGENTS.md` via the `@AGENTS.md` line, so Claude Code and any `AGENTS.md`-reading agent
  (Codex, Gemini CLI, OpenCode) all follow **one** file. Previously the content lived in
  `CLAUDE.md` and `AGENTS.md` was a short mirror — the two could drift.
  - **Migration (existing bases):** move your instruction body from `CLAUDE.md` into
    `AGENTS.md`, then replace `CLAUDE.md` with a pointer whose last line is `@AGENTS.md`.
    Fresh clones get this automatically from the updated templates via `/onboard`.
  - `onboard` still renders and personalizes both files; no action needed for new setups.
- **README** — clearer positioning: the base as an LLM Wiki (Karpathy) that is portable
  via the OKF standard, with the index-first "why it scales without embeddings" explainer.

### Fixed
- **Non-Latin vaults** — forced UTF-8 stdout so `/lint`, `/gaps`, and `/refactor` no longer
  crash on non-ASCII content (e.g. Polish); `build_indexes.py` writes UTF-8 too.
- **`/lint` false positives** — `lint_scan` now parses block-style YAML tag lists, so notes
  using multi-line `tags:` no longer report a spurious `missing_tags`.

---

_Older history predates this changelog. From here on, every change to the template is
recorded above._
