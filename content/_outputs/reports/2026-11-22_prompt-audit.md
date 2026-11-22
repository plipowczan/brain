---
title: "Prompt Audit — Agent Instructions for Claude Fable 5.2 and Opus 5.5"
date: 2026-11-22
type: basic-note
tags: ["report", "prompt-audit", "agents"]
agent-created: true
summary: "Prompt audit of AGENTS.md, skills and agents for Fable 5.2 and Opus 5.5: 20 findings, template-owned and brain-only diffs."
---

# Prompt Audit — Agent Instructions for Claude Fable 5.2 and Opus 5.5

> **Status 2026-11-22:** every brain-only finding is applied (not committed): B1–B4 in
> `AGENTS.md`, O-B5 and O-B6 with the owner-decision text below, the `:242` indexes line
> rewritten as suggested, the `.claude/skills/AGENTS.md:41` clause reworded to match, B7
> (the `brand-voice-generator` skill removed and dropped from `scripts/AGENTS.md`) and B8.
> After those edits the Safety Rules cited below as `AGENTS.md:238`, `:242` and `:243`
> sit at `:241`, `:247` and `:248-250`, and `AGENTS.md:222` sits at `:225`. B7 correction:
> `openspec/specs/command-namespace/spec.md:21` is the current spec, not history, and still
> names the removed skill; it changes through an OpenSpec change, at the owner's call. The
> template-owned findings (T1–T12) are not applied. The indexes were then rebuilt with
> `build_indexes.py` under the new rules; it changed exactly what the B3 check found.
> B3 was checked on a scratch copy
> of the vault: a `build_indexes.py` rebuild matched the current indexes apart from link
> order (14 catalog lines, every differing graph line), one top-tag tie in `vault-map.md`,
> and 2 catalog summaries that had drifted from their notes' `summary:`. No link and no
> Recent Changes line was lost. On Windows the script writes CRLF line endings; git's
> `core.autocrlf` turns them back into LF on commit.

Method: `/claude-api prompt-audit`
(the dated-pattern checklist in the `claude-api` skill), with the Claude Fable 5.2 section of
its model-migration guide as the reference for how the target model reads instructions.

## 📒 Summary

The instruction set is in better shape than its age suggests. The workflow skills written
or rewritten since template 0.3.0 already state rules with their reasons and name the steps
that need no approval (for example `brain-watch` "Do not stop for approval between
batches: the budget was the approval"). That is the form Fable 5.2 handles best. The
problems sit mostly in the oldest text, the 2026-04-05 rules in root `AGENTS.md`, and in
the vendored research agent.

The three findings with the most effect:

1. **Absolute rules that the vault's own workflows already break.** Fable 5.2 follows a
   "never" or "always" rule as having no exceptions. In Anthropic's test, under a "never" rule
   it took an approved step about one try in ten, against nine in ten when the rule said to
   get a go-ahead first. Three root rules lack an exception the repository needs, and the
   vault's own workflows already break two of them:
   - `AGENTS.md:130` "NEVER grep the entire `content/`" (`brain-ingest` searches topic-folder
     notes for a `video_id`);
   - `AGENTS.md:243` "Always work on `v4` branch" (`AGENTS.md:222` runs `/b:watch` on its own
     `kb-watch/…` branch in a worktree);
   - `AGENTS.md:238` "Never modify `.obsidian/`, `quartz/`, `.github/`" (no route at all for
     a change the owner asks for).
2. **The index rules describe a vault and a toolchain that no longer exist.** The "Scale
   Breakpoints" table (`AGENTS.md:150-156`) says a vault of 300–800 notes splits
   `catalog.md` per folder. The vault has 471 notes and one catalog, and `build_indexes.py`
   writes one catalog and would overwrite a hand split. The "Auto-Update Rules"
   (`AGENTS.md:133-148`) ask for hand-counted edits to three files after every write. Since
   2026-06-14 a deterministic script rebuilds all three, and it overwrites hand edits to the
   catalog. `brain-refactor` and `brain-watch` already call it.
3. **Two stale facts in template-owned skills.** `brain-qa` and `brain-watch` read the vault
   language from `content/WRITING_STYLE.md`, which this vault does not have. `brain-reindex`
   describes a Recent Changes rebuild that the script stopped doing.

Counts by pattern group (20 findings: 8 brain-only, 12 template-owned):

| Group | Findings | Of which `flag` only |
|---|---:|---:|
| 1 — Dated prompt text (absolutes, emphasis, quotas, boosters) | 9 | 2 |
| 2 — Brittle configuration (stale facts, outgrown rules, conflicts) | 10 | 3 |
| 3 — Tool descriptions | 0 | — |
| 4 — Request config and architecture | 1 | 0 |

Not found, so no findings: lines telling the model to think less or to write out its
reasoning (0), update suppressors and word caps (0), delegation pushes (0; the dispatch
steps in `brain-watch` and `brain-research-deep` are bounded workflow mechanics, with a
batch size and an approval or budget), code-ownership conflicts (0).

## 🗒️ Assumptions

- **Scope (from the request):** `AGENTS.md`, `CLAUDE.md`, `.claude/skills/**` (every
  `SKILL.md`, its reference `.md` files, `brain-watch/fields.yaml`),
  `.claude/agents/**`, `scripts/AGENTS.md`, `brain-mcp/AGENTS.md`. `LIMITS.md` was read
  because `AGENTS.md` and two skills tell the agent to read it. Python scripts were read
  only where a finding depends on what they do.
- **Not audited:** `content/` (as asked); `kb-template/` (frozen); `.claude/commands/**`
  (not in the requested scope; thin `/b:` and `/opsx:` wrappers); `brain-mcp/src/` tool
  descriptions; `.claude/settings*.json` (may hold secrets; not read); user-level
  configuration and the Claude Code memory for this project. A few of these produced
  observations — see "Outside the requested scope".
- **Target model:** Claude Fable 5.2 (named in the request), with Claude Opus 5.5 as the
  second target. `.claude/agents/web-search-agent.md` pins `model: opus`. That alias is
  assumed to resolve to Claude Opus 5.5, so the agent is audited against Opus 5.5.
  `AGENTS.md:3` says Codex and OpenCode read these files too. The proposed text is
  plain-language and works for them, but it was judged against Claude models only.
- **Ownership:**
  - **Template-owned:** the 19 skills in `SHARED` (`scripts/check-kb-template-drift.sh`),
    `.claude/agents/web-search-agent.md` with `web-search-modules/`
    (`.claude/agents/AGENTS.md:28`), and `LIMITS.md` (`AGENTS.md:262`).
  - **Brain-only:** root `AGENTS.md`, `CLAUDE.md`, the four DOX `AGENTS.md` files,
    `brand-voice-generator`, `sop-creator`, and `openspec-*`. The `openspec-*` skills are
    generated by the OpenSpec CLI (`generatedBy: "1.16.0"`).
- **Template parity, checked read-only:**
  - The template's local working tree (`../second-brain-template`, branch `main`) is behind
    its `origin/main`. Against that tree the drift check reports all 19 shared skills as
    "only on one side". This is the failure `scripts/AGENTS.md:33` describes, not drift.
  - Against a `git archive v0.4.1` extract of the template, the drift check prints
    `no drift in shared skills`, and `LIMITS.md`, `web-search-agent.md` and the modules
    are identical.
  - So every template-owned hunk below applies to the template's v0.4.1 files at the same
    paths and line numbers.
  - The root rules have a twin in the template's `AGENTS.template.md` (v0.4.1). Each
    brain-only finding names the twin's line.
- **Provenance:** `git blame -C -C` dates the root Navigation and Safety rules to
  2026-04-05, when they were written in `CLAUDE.md`. They were moved into `AGENTS.md` on
  2026-07-05. `build_indexes.py` arrived on 2026-06-14. Lines added on or after 2026-11-13
  (the template 0.3.0 port) already follow the reasoned style.
- **Coverage:**
  - Every `brain-*` skill, the agent and its modules, `LIMITS.md` and all `AGENTS.md`
    files were read in full.
  - `excalidraw-diagram`, `openspec-*`, `sop-creator` and `brand-voice-generator` were
    signal-scanned (grep for absolutes, emphasis, ownership, narration, quota and
    thinking phrases). The lines this report cites were read in context.
- **Commands run:** read-only only. The drift check ran twice (it only reads and diffs).
  `git blame` and `git log` ran for provenance.

## 🚀 Fix first

1. **Owner decision, then two edits.** Give `AGENTS.md:238` (`.obsidian/`, `quartz/`,
   `.github/`) and `AGENTS.md:243` (`v4`) their exceptions and reasons (B5, B6). These are
   the two absolutes most likely to stop approved work on Fable 5.2. Suggested text is
   under "Owner-decision text".
2. **Trim the project memory.** The Claude Code memory index for this repo has two entries
   saying that `kb-template/` is the template's source and needs a CHANGELOG entry per
   change. Root `AGENTS.md:253-257` says it is frozen. Fable 5.2 follows carried-over notes
   closely; check both entries and delete or rewrite them (see "Outside the requested
   scope").
3. **B1:** rewrite the "never grep `content/`" rule with the exception the vault already
   uses.
4. **B2 + B3:** replace the Scale Breakpoints table and the hand-update rules with what
   `build_indexes.py` does. Check B3 on a scratch worktree first (see "How to check").
5. **T1 + T2:** fix the two stale facts in `brain-qa`, `brain-watch` and `brain-reindex`.
   Fix them in the template first (v0.4.1 has the same lines), then port them.

## 🧩 Findings — brain-only

Highest confidence first. Apply these hunks here, in brain.

### B1 — "NEVER grep the entire `content/`" has no exception, and ingest needs one

- **Location:** `AGENTS.md:130`. Restated, consistent with the rewrite, in
  `.claude/skills/brain-curate/SKILL.md:22` and `.claude/skills/brain-export/SKILL.md:61`.
  Template twin: `AGENTS.template.md:63`.
- **Evidence:**
  ~~~text
  5. **NEVER** grep the entire `content/` directory — use indexes first
  ~~~
- **Conflicting use:** `.claude/skills/brain-ingest/SKILL.md:49` tells ingest to "scan
  `content/_indexes/catalog.md` and the topic-folder notes for any frontmatter with the
  same `video_id`". The catalog does not carry `video_id`, so the check is a search of
  `content/`.
- **Pattern:** 1a pressure language and 1e unconditional prohibition. Also a Group 2
  conflict between two instruction files.
- **Why obsolete:** Fable 5.2 follows "never" rules with no exceptions. Anthropic's fix is to
  write the exception and the reason into the rule. The rule's own words ("use indexes
  *first*") imply a later search is allowed, but "NEVER" in capitals says the opposite.
  The idempotency check in ingest (2026-11-13) is newer than the rule (2026-04-05).
- **Confidence:** High.
- **Action:** rewrite (hunk B1). The reason comes from the file itself (`AGENTS.md:39`,
  `:44`). The only exception written in is the one a skill already uses.

### B2 — "Scale Breakpoints" asks for a catalog split that the script would undo

- **Location:** `AGENTS.md:150-156`. No template twin.
- **Evidence:**
  ~~~text
  | 300-800 | Split catalog into per-folder files: `catalog-LIFE.md`, `catalog-BUSINESS.md`, etc. |
  ~~~
- **Repository says:** `content/_indexes/vault-map.md` reports `total_notes: 471`.
  `content/_indexes/` holds one `catalog.md`. `build_indexes.py` writes only
  `catalog.md`, `graph.md` and `vault-map.md`, and `.claude/skills/AGENTS.md:53` says it
  is a full deterministic rebuild.
- **Pattern:** Group 2 volatile specifics (a rule the repository has outgrown) and 1d
  unenforced instruction.
- **Why obsolete:** a model that applies the table literally at 471 notes would split the
  catalog by hand, and the next `/b:reindex` would overwrite the split. The skills that read
  the catalog (`brain-qa`, `brain-export`, `brain-import`) only know `catalog.md`.
- **Confidence:** High.
- **Action:** rewrite (hunk B2).

### B5 — "Never modify `.obsidian/`, `quartz/`, `.github/`" blocks changes the owner asks for

- **Location:** `AGENTS.md:238`. Restated in `.claude/skills/brain-curate/SKILL.md:79` and
  `.claude/skills/brain-watch/SKILL.md:171` (template-owned; those skills never need the
  three folders, so they can keep the strict form). Template twin `AGENTS.template.md:134`
  already reads "Never modify `.obsidian/` or `.claude/` internals unless the task is about
  them."
- **Evidence:**
  ~~~text
  - Never modify `.obsidian/`, `quartz/`, `.github/`
  ~~~
- **Pattern:** 1e prohibition without stated reason or scope. On Fable 5.2 it is also a
  named re-test item: "absolute rules rewritten to carry their scope and reason".
- **Why obsolete:** under this rule, a session asked to "bump the Node version in the deploy
  workflow" or "fix the Quartz config" will most likely hold back or refuse. The documented
  behavior is about one approved step in ten under a "never" rule. The template already
  wrote the exception into its own version of the line.
- **Confidence:** High.
- **Action:** `flag`. The fix narrows a safety prohibition, so the owner decides. Suggested
  text is under "Owner-decision text" (O-B5).

### B6 — "Always work on `v4` branch" contradicts the scheduled watch run and worktree sessions

- **Location:** `AGENTS.md:243`. It contradicts `AGENTS.md:222`. Restated in
  `.claude/skills/AGENTS.md:41`. Template twins: `AGENTS.template.md:24` and `:139`.
- **Evidence:**
  ~~~text
  - Always work on `v4` branch
  ~~~
  ~~~text
  Runs monthly as the desktop scheduled task `brain-watch-monthly` (1st of the month, 09:00; own worktree, branch `kb-watch/YYYY-MM-DD`, never pushes)
  ~~~
- **Pattern:** Group 2, two rules on the same point that contradict each other; also 1e.
- **Why obsolete:** the line at `:222` (2026-11-13) is newer than the one at `:243`
  (2026-04-05). A literal reader on a `kb-watch/…` or `claude/…` worktree branch must
  either break the rule or switch branches in a shared checkout. Nothing says which to do.
- **Confidence:** High.
- **Action:** `flag`. It is a Safety Rule, so the owner decides. Suggested text is under
  "Owner-decision text" (O-B6).

### B7 — `brand-voice-generator` writes into a skill that is not in this repository

- **Location:** `.claude/skills/brand-voice-generator/SKILL.md:4`, `:18`, `:24-25`, `:33`,
  `:275`, `:279`.
- **Evidence:**
  ~~~text
  .claude/skills/pptx-generator/brands/{brand-name}/
  ~~~
- **Repository says:** `.claude/skills/pptx-generator/` does not exist. The skill came in
  with the 2026-01-26 bulk import of template skills and has not changed since.
- **Pattern:** Group 2 volatile specifics (named path that does not resolve).
- **Why obsolete:** its description is in the skill list of every session in this repo and
  promises output "for use with the PPTX Generator". A session that follows it creates
  brand files under a skill folder that nothing reads.
- **Confidence:** High.
- **Action:** remove the skill folder (hunk B7). If you still use it, repoint the output
  path instead. That needs a destination only you can name, so no text is proposed for it.
  This is a proposed edit only.

### B3 — The index update rules ask for hand-counted edits that the rebuild script overwrites

- **Location:** `AGENTS.md:133-148`. Restated in `AGENTS.md:242` (Safety Rules) and
  `.claude/skills/AGENTS.md:41`. `brain-compile:28`, `brain-enhance:31`, `brain-curate:69`
  and `brain-ingest:146` cite the rules by name ("CLAUDE.md auto-update rules"), so the
  hunk keeps the heading. Template twin `AGENTS.template.md:67`; the template-owned twin is
  T3 below. `brain-import` Phase 6 (`:113-119`) also lists hand steps. It would need the
  same change as T3 in a later template release.
- **Evidence:**
  ~~~text
  After creating or editing ANY note, update indexes IMMEDIATELY — don't defer to a separate reindex.
  ...
  - `vault-map.md`: increment folder count, update top-tags, add to Recent Changes
  ~~~
- **Repository says:**
  - `build_indexes.py` (since 2026-06-14) rebuilds all three files from the notes.
    `.claude/skills/AGENTS.md:53` says hand edits to `catalog.md` "are always overwritten".
  - `brain-reindex/SKILL.md:18` says "run it, don't hand-edit the indexes".
  - `brain-refactor/SKILL.md:13-14` and `brain-watch/SKILL.md:137-140` already run the
    script and then add one Recent Changes line.
  - `brain-import` Phase 6 and `brain-ingest` step 11 update once at the end of the run,
    not "immediately".
- **Pattern:** Group 2 (a rule the repository has outgrown, and skills that disagree with
  it) plus 1b (counts and tallies the model computes, where code does it).
- **Why obsolete:** taken literally, the rule costs three file edits per note. Their result
  is thrown away at the next rebuild, and the rule disagrees on timing with the skills
  that implement it.
- **Confidence:** Medium. The script's output should match careful hand edits, but check it
  on a scratch copy before relying on it (see "How to check").
- **Action:** rewrite (hunk B3). `AGENTS.md:242` still holds under the rewrite; change it
  only with the Safety Rules decision.

### B4 — "ALWAYS read `vault-map.md` first" in capitals, without a reason

- **Location:** `AGENTS.md:46` and `:126`. Template twin `AGENTS.template.md:59`.
- **Evidence:**
  ~~~text
  ### Level 0: `_indexes/vault-map.md` — read FIRST on every operation
  1. **ALWAYS** read `vault-map.md` first for any KB operation
  ~~~
- **Pattern:** 1a pressure language (capitals, no adjacent "because").
- **Why obsolete:** current models follow a stated order without emphasis; the capitals make
  the rule fire where it adds nothing. `brain-enhance` (step 1 starts from the note, then
  `catalog.md` / `graph.md`) and the script-only skills (`brain-refactor`, `brain-reindex`)
  already skip it.
- **Confidence:** Medium.
- **Action:** rewrite at normal volume, with the reason and the exceptions the skills
  already use (hunk B4, two parts).

### B8 — `.claude/agents/AGENTS.md` names the `Task` tool

- **Location:** `.claude/agents/AGENTS.md:5`.
- **Evidence:** "the workflow skills dispatch via the `Task` tool".
- **Pattern:** Group 2 volatile specifics (a tool name that belongs to the installed agent).
- **Why flagged:** Claude Code's sub-agent tool is now named `Agent` in the sessions that ran
  this audit. The repository can't confirm or refute that, and the line is documentation,
  not an instruction.
- **Confidence:** Low.
- **Action:** `flag`.

## 🧩 Findings — template-owned

Fix these in `../second-brain-template` first (a session in that repo, with its CHANGELOG
entry), then port them here by hand. Paths and line numbers are the same in brain and in
template v0.4.1.

### T1 — `brain-qa` and `brain-watch` read the vault language from a file this vault does not have

- **Location:** `.claude/skills/brain-qa/SKILL.md:63`, `.claude/skills/brain-watch/SKILL.md:130`.
- **Evidence:**
  ~~~text
  - The headings and labels are in the vault's primary language (from `content/WRITING_STYLE.md`); ...
  ~~~
- **Repository says:** brain has `content/WRITING_STYLE_ANALYSIS.md` and no
  `content/WRITING_STYLE.md`. `brain-ingest/SKILL.md:104` already handles both names
  ("`content/WRITING_STYLE.md`, or `content/WRITING_STYLE_ANALYSIS.md` in vaults that
  predate the onboarding template").
- **Pattern:** Group 2 volatile specifics (named path that does not resolve), and an
  inconsistency between skills.
- **Why obsolete:** the instruction cannot be followed as written in this vault, and on a
  pre-onboarding vault in another language it would give the wrong language. Brain happens
  to be English, so today it costs a failed lookup.
- **Confidence:** High.
- **Action:** rewrite both lines to the ingest wording (hunks T1a, T1b).

### T2 — `brain-reindex` describes a Recent Changes rebuild that the script stopped doing

- **Location:** `.claude/skills/brain-reindex/SKILL.md:36`.
- **Evidence:**
  ~~~text
  3. Builds `vault-map.md` — folder table (counts, type breakdown, top-5 tags), tag cloud, 15 most-recent dated notes.
  ~~~
- **Repository says:** `build_indexes.py:219-243` keeps an existing `## Recent Changes`
  section verbatim. It derives a list (10 newest dated notes) only when the section is
  missing. `.claude/skills/AGENTS.md:53` says not to restore the old behavior.
- **Pattern:** Group 2 volatile specifics (claim contradicted by the code).
- **Why obsolete:** the line sits under "for reference / manual fallback". A model that
  rebuilds by hand from it would overwrite the curated change log, which is the bug the
  script was fixed for.
- **Confidence:** High.
- **Action:** rewrite (hunk T2).

### T3 — `brain-ingest` step 11 repeats the hand-update rules

- **Location:** `.claude/skills/brain-ingest/SKILL.md:146-149`.
- **Evidence:**
  ~~~text
  11. Update all three indexes per CLAUDE.md auto-update rules, for **every** note this run created or changed:
  ~~~
- **Pattern:** same as B3 (Group 2 + 1b).
- **Why obsolete:** as B3. Ingest is the costliest place for the hand route: it touches the
  most notes per run.
- **Confidence:** Medium. Take it together with B3 and the template twin of B3.
- **Action:** rewrite (hunk T3). The Phase 3 checklist (`:155-158`) still works unchanged.

### T4 — `web-search-agent`: "MANDATORY / you MUST / DO NOT skip" around the module read

- **Location:** `.claude/agents/web-search-agent.md:28-29`, `:46`.
- **Evidence:**
  ~~~text
  **Scenario-Specific Query Strategies (MANDATORY Module Loading)**:
  Before executing any WebSearch or WebFetch, you MUST use the Read tool to load ...
  DO NOT skip this step. DO NOT call WebSearch or WebFetch before loading at least one module.
  ~~~
- **Pattern:** 1a pressure language (three emphatic markers for one step, and a
  restatement).
- **Why obsolete:** current models (Opus 5.5 for this agent) follow a plainly stated
  ordering. The behavior stays wanted, since `.claude/agents/AGENTS.md:35` verifies it, so
  the fix states it once with its reason.
- **Confidence:** Medium.
- **Action:** rewrite and remove the repeat (hunk T4).

### T5 — `web-search-agent`: a fixed quota of 5–10 query variations

- **Location:** `.claude/agents/web-search-agent.md:21`.
- **Evidence:**
  ~~~text
  - Generate 5-10 different search query variations to maximize coverage
  ~~~
- **Pattern:** 1c over-specification (a numeric method for a judgment call).
- **Why obsolete:** `/b:watch` sends this agent up to 8 status checks at a time
  (`brain-watch/SKILL.md:92`). A literal 5–10 queries per topic multiplies searches on
  questions like "is this repo archived" that need two. The model sizes the search to the
  question better than a fixed range does.
- **Confidence:** Medium.
- **Action:** rewrite (hunk T5).

### T6 — `web-search-agent`: thoroughness booster and a generic closing recap

- **Location:** `.claude/agents/web-search-agent.md:12`, `:127`.
- **Evidence:**
  ~~~text
  - You never settle for surface-level results - you dig deep to find the most relevant and helpful information
  Remember: You are not just a search engine - you are a research specialist who ...
  ~~~
- **Pattern:** 1a ("Be thorough. Do not be lazy." row) and 1c padding. The one-line role at
  `:7` stays (a role line is fine).
- **Why obsolete:** current models are thorough by default. The recap repeats virtues, not
  constraints, so it is not the deliberate recap the keep list protects. Both push toward
  longer research than the caller's question needs.
- **Confidence:** Medium.
- **Action:** remove both lines (hunk T6).

### T7 — `excalidraw-diagram` states a "~32,000 token output limit" as the reason for working in sections

- **Location:** `.claude/skills/excalidraw-diagram/SKILL.md:210`, `:248`.
- **Evidence:**
  ~~~text
  This is a hard constraint — Claude Code has a ~32,000 token output limit per response, ...
  ~~~
- **Pattern:** 1d model-version workaround and Group 2 volatile specifics (a pinned number
  with no date).
- **Why obsolete:** Opus 5.5 and Fable 5.2 allow up to 128K output tokens per request on
  the API, and the figure carries no date or model. Claude Code's own
  per-response cap is a harness setting that this audit could not check, so the hunk keeps
  the advice (work in sections) and drops the number. The second reason, rendering and
  checking each section, still holds.
- **Confidence:** Medium.
- **Action:** rewrite (hunk T7).

### T8 — `excalidraw-diagram`: "MANDATORY" render loop with no route when the renderer is missing

- **Location:** `.claude/skills/excalidraw-diagram/SKILL.md:203-204`, `:447-449`.
- **Evidence:**
  ~~~text
  ### Step 6: Render & Validate (MANDATORY)
  After generating the JSON, you MUST run the render-view-fix loop until the diagram looks right. This is not optional — ...
  ~~~
- **Pattern:** 1a pressure language and the Fable 5.2 advice to write the exception into
  the rule.
- **Why obsolete:** the reason is good ("You cannot judge a diagram from JSON alone"). But
  on a fresh clone the renderer (`uv` + Playwright, `README.md`) may not be set up. With
  "MUST … not optional" and no exception, Fable 5.2 has to stall or improvise an install.
  The fix keeps the loop and names the missing-renderer case.
- **Confidence:** Medium.
- **Action:** rewrite (hunk T8, two parts).

### T9 — `excalidraw-diagram`: "MUST" and "CRITICAL" on two format rules

- **Location:** `.claude/skills/excalidraw-diagram/SKILL.md:49`, `:411`.
- **Evidence:**
  ~~~text
  **For technical diagrams, you MUST include evidence artifacts** (see below).
  **CRITICAL**: The JSON `text` property contains ONLY readable words.
  ~~~
- **Pattern:** 1a pressure language (emphasis with no reason beside it).
- **Why obsolete:** the skill has eight emphatic markers (`MUST` ×4, `MANDATORY` ×2,
  `CRITICAL`, `Do NOT`), so they no longer tell the model which rule matters most. Both rules
  read the same at normal volume.
- **Confidence:** Medium.
- **Action:** rewrite (hunk T9, two parts).

### T10 — `brain-research-report` has the model write the same converter script on every run

- **Location:** `.claude/skills/brain-research-report/SKILL.md:31-86` (Step 3), used at
  `:88-89`.
- **Evidence:** a ~55-line spec ("Script Technical Requirements (Must Follow)": JSON shapes,
  a category mapping table, value formatting, skip rules) that the model turns into
  `generate_report.py` in each research workspace.
- **Pattern:** Group 4, an LLM executor for a deterministic step (the inputs fully determine
  the output), and 1b inline rules the model must compute.
- **Why obsolete:** every run spends output tokens on code that should be identical every
  time, and each copy can differ. The one judgment step, choosing the TOC summary fields,
  stays with the model (Step 2).
- **Confidence:** Medium.
- **Action:** move. Check the converter in as
  `.claude/skills/brain-research-report/scripts/generate_report.py`, with the current Step 3
  as its spec and tests, and replace Step 3 with a call to it (hunk T10). Apply the hunk
  only together with the new script.

### T11 — `web-search-agent` description invites broad delegation

- **Location:** `.claude/agents/web-search-agent.md:3`.
- **Evidence:** "Use this agent when you need to research information on the internet, …
  Use when you need creative search strategies, thorough investigation of a topic, or
  compilation of findings from diverse sources."
- **Pattern:** 1d, the delegation lines that Fable 5.2's guide says to review.
- **Why flagged:** the description is in the agent list of every session here. Fable 5.2
  delegates readily where invited, and each call runs on Opus with a multi-query search.
  The fix is only worth making if sessions start this agent for single lookups. Nothing in
  the repo shows that yet, and trigger text may carry calibrated urgency.
- **Confidence:** Low.
- **Action:** `flag`. Re-test after the switch. If it over-delegates, rewrite the
  description to say it is meant for the `research*` and `brain-watch` fan-outs, and that a
  single lookup is cheaper done directly.

### T12 — Research skills name harness features this audit cannot verify

- **Location:** `.claude/skills/brain-research-deep/SKILL.md:4`, `:25`, `:97-99` ("Disable
  task output", "Task Output: Disabled"); `allowed-tools: … Task …` in
  `brain-research/SKILL.md:4`, `brain-research-deep/SKILL.md:5`,
  `brain-research-add-fields/SKILL.md:5`, `brain-research-add-items/SKILL.md:5`.
- **Pattern:** Group 2 volatile specifics (installed-tool names).
- **Why flagged:** these name the sub-agent tool as `Task` and a "task output" switch, and
  carry over from the upstream suite. Whether `Task` still resolves in `allowed-tools`, and
  what "disable task output" now means, depends on the installed Claude Code. An unclear
  instruction is followed literally on Fable 5.2, so it is worth one check.
- **Confidence:** Low.
- **Action:** `flag`.

## Vendored — `openspec-*` (brain-only, generated)

No findings. The nine skills are generated by OpenSpec 1.16.0 and are rewritten by
`openspec update`, so local edits would not last. Their six `IMPORTANT` markers each carry
scope (for example `openspec-explore:15`: read and investigate freely, never implement),
and `CRITICAL` in `openspec-verify-change` is a severity label. `openspec-apply-change:110`
and `:188` ("Keep changes minimal") are scope rules with no ownership sentence beside them,
and nothing in the repo shows unwanted duplication. By the code-ownership check, that is
not a finding. If any of this matters, raise it upstream.

## ✍️ Reviewed and kept

These matched a signal but stay, because they already have the form Fable 5.2 handles
well: a reason, a scope, or a named approval.

- `AGENTS.md:4` — edit `AGENTS.md`, never `CLAUDE.md` (reason: `CLAUDE.md` is a pointer).
- `AGENTS.md:39` — no per-folder `AGENTS.md` under `content/` (reason: the indexes already
  do progressive disclosure).
- `AGENTS.md:239` — never delete user-authored content *without confirmation* (the
  ask-first form).
- `AGENTS.md:240` — preserve frontmatter. `brain-ingest:106-110` (turn `source:` into
  `sources:`) is a narrower rule explained by its task: an override, not a conflict.
- `scripts/AGENTS.md:25` — keep the publish scripts disabled (full reason given).
- `brain-mcp/AGENTS.md:23` — the server must not mutate notes (reason given).
- `brain-ingest:14`, `:105`, `:140`; `brain-enhance:21`, `:30`; `brain-compile:25` —
  "never" rules with their reasons in the same sentence.
- `brain-ingest:151`, `brain-watch:94`, `brain-import:19` — name the steps that need no
  approval ("the budget was the approval"). This is the form Anthropic recommends for Fable
  5.2.
- `brain-watch:147` — never use AskUserQuestion, scoped to unattended runs.
- `brain-import:13-14`, `brain-export:28-29` — interaction budgets: a deliberate design
  constraint with an explicit escape (`brain-export:203`).
- `brain-research:33`, `brain-research-deep:35` — "Hard Constraint: reproduce the prompt
  exactly". This is a narrow bridge into `validate_json.py`, where exact text is right.
- `excalidraw-diagram:249` — "Don't use a coding agent to generate the JSON". This limits
  delegation, which helps on Fable 5.2.
- `LIMITS.md` — no findings. Its agent rules name the action and the reason.
- `CLAUDE.md` — no findings.

## Outside the requested scope

No edits are proposed for these.

- **Claude Code project memory contradicts `AGENTS.md`.** Two lines of the memory index for
  this repo still say that `kb-template/` is the canonical source of the published template,
  synced via `scripts/`, and that every `kb-template/` change needs a
  `kb-template/CHANGELOG.md` entry. Only the index lines were seen, not the entry files
  behind them. `AGENTS.md:247-257` says the template moved to `../second-brain-template` on
  2026-10-13, `kb-template/` is frozen, and the sync scripts refuse to run. The memory index
  loads in every session here, and Fable 5.2 follows such notes closely. This is a user-level
  file, so only you can change it: delete or rewrite those two entries.
- **`content/WRITING_STYLE_ANALYSIS.md`** is an instruction file that every content-writing
  workflow reads (`AGENTS.md:160`). Fable 5.2 follows hard style rules closely enough to
  make prose choppy. It sits under `content/`, which this audit was asked to skip, so it is
  worth its own check.
- **`brain-mcp/src/` tool descriptions** are the one tool-description surface in the repo
  (pattern Group 3). They were not in scope.
- **The template's local working tree is behind its `origin/main`.** Before porting, update
  it or compare with `git archive v0.4.1` (see `scripts/AGENTS.md:33`).

## Proposed diff — brain-only

All of these, and the B5 and B6 text, are applied (see the status note at the top). One
finding per hunk. Line numbers refer to the files before B1–B4 were applied. The B5 and B6
text is in the next section, not here.

~~~diff
# B1 — AGENTS.md:130
-5. **NEVER** grep the entire `content/` directory — use indexes first
+5. Find notes through the indexes, not by searching all of `content/`: the indexes exist so
+   you open only the notes you need. Search `content/` directly only for a value the
+   indexes don't carry, such as the `video_id` that brain-ingest's idempotency check looks
+   for. The skills' own scanners (`lint_scan.py`, `lint_links.py`, `build_indexes.py`,
+   `refactor.py`) read `content/` by design.
~~~

~~~diff
# B2 — AGENTS.md:150-156
-### Scale Breakpoints
-
-| Notes | Action |
-|-------|--------|
-| 0-300 | Single file per index |
-| 300-800 | Split catalog into per-folder files: `catalog-LIFE.md`, `catalog-BUSINESS.md`, etc. |
-| 800+ | Split graph per-folder too |
+### Index size
+
+`build_indexes.py` writes one `catalog.md` and one `graph.md`, whatever the size of the
+vault. Read only the folder sections you need. Splitting an index into per-folder files
+is a change to the script, not a hand edit: the next rebuild would overwrite it.
~~~

~~~diff
# B3 — AGENTS.md:133-148
-### Auto-Update Rules (after EVERY write)
-
-After creating or editing ANY note, update indexes IMMEDIATELY — don't defer to a separate reindex.
-
-**On note create:**
-- `catalog.md`: add entry line in correct folder section
-- `vault-map.md`: increment folder count, update top-tags, add to Recent Changes
-- `graph.md`: add outgoing links, update incoming links for target notes
-
-**On note edit:**
-- `catalog.md`: update the entry line (summary, tags, links)
-- `vault-map.md`: update Recent Changes, update top-tags if changed
-- `graph.md`: recompute outgoing links, update incoming links for affected targets
-
-**On note delete:**
-- Remove from all three indexes, decrement counts, clean up incoming links
+### Auto-Update Rules
+
+An operation that created, edited, moved or deleted notes brings the indexes up to date
+before it ends, in the same run. Leaving it for a later `/b:reindex` is not the plan.
+
+1. Run `python .claude/skills/brain-reindex/scripts/build_indexes.py`. It rebuilds all
+   three indexes from the notes, and `catalog.md` takes each summary from the note's
+   `summary:`, so give every note you wrote a one-line `summary:` first. Hand edits to
+   `catalog.md` or `graph.md` are overwritten by the next rebuild.
+2. Add one line at the top of `## Recent Changes` in `vault-map.md` for the operation
+   (`- YYYY-MM-DD <what changed>`). The script keeps that section exactly as it finds it.
+
+Notes under `_outputs/`, `_raw/` and `templates/` are not indexed. If Python or PyYAML is
+not available, update the three files by hand: the entry line in `catalog.md`, folder
+counts and top tags in `vault-map.md`, outgoing and incoming links in `graph.md`.
~~~

~~~diff
# B4 (part 1) — AGENTS.md:46
-### Level 0: `_indexes/vault-map.md` — read FIRST on every operation
+### Level 0: `_indexes/vault-map.md` — read first
~~~

~~~diff
# B4 (part 2) — AGENTS.md:126
-1. **ALWAYS** read `vault-map.md` first for any KB operation
+1. Start a KB operation by reading `vault-map.md`: its folder table and tag cloud tell you
+   which `catalog.md` sections to open. A workflow that already names its note
+   (`/b:enhance [[Note]]`) or runs only a script (`/b:reindex`, `/b:refactor`) can skip it.
~~~

~~~diff
# B7 — remove .claude/skills/brand-voice-generator/ (SKILL.md and references/*.md, 5 files)
# and drop its name from the brain-only list in scripts/AGENTS.md:32
# ("brain-only ones (`openspec-*`, `sop-creator`, `brand-voice-generator`)").
# openspec/specs/command-namespace/ also names it among the unprefixed utility skills;
# that is spec history and can stay.
# Alternative if you still use it: repoint the 6 occurrences of
# `.claude/skills/pptx-generator/brands/{brand-name}/` to where brand files should live.
~~~

## Proposed diff — template-owned

Make these in `../second-brain-template` first (with a CHANGELOG entry), then port them here
by hand. The paths and line numbers are the same in both repos (template v0.4.1). B1, B3
and B4 also have twins in the template's `AGENTS.template.md` (lines 63, 67 and 59). Mirror
them there if new bases should get the same text.

~~~diff
# T1a — .claude/skills/brain-qa/SKILL.md:63
-   - The headings and labels are in the vault's primary language (from `content/WRITING_STYLE.md`); `gaps:` is a number, so scripts can count gaps whatever the language. When the vault answered everything, the gaps section says so in one line and `gaps: 0`.
+   - The headings and labels are in the vault's primary language, from the writing-style document that AGENTS.md "Writing Style" points at (`content/WRITING_STYLE.md`, or `content/WRITING_STYLE_ANALYSIS.md` in vaults that predate the onboarding template); `gaps:` is a number, so scripts can count gaps whatever the language. When the vault answered everything, the gaps section says so in one line and `gaps: 0`.
~~~

~~~diff
# T1b — .claude/skills/brain-watch/SKILL.md:130-131
-   results (see Safety), so link a note as a plain `[[Note]]`. If `content/WRITING_STYLE.md` names a
-   primary language other than English, translate the `lines` in `digest.json` into it
+   results (see Safety), so link a note as a plain `[[Note]]`. If the vault's writing-style
+   document (`content/WRITING_STYLE.md`, or `content/WRITING_STYLE_ANALYSIS.md` in older
+   vaults) names a primary language other than English, translate the `lines` in `digest.json` into it
~~~

~~~diff
# T2 — .claude/skills/brain-reindex/SKILL.md:36
-3. Builds `vault-map.md` — folder table (counts, type breakdown, top-5 tags), tag cloud, 15 most-recent dated notes.
+3. Builds `vault-map.md` — folder table (counts, type breakdown, top-5 tags), tag cloud, and `## Recent Changes` kept exactly as it was (a hand-written change log; only a `vault-map.md` without that section gets a derived list of the 10 newest dated notes).
~~~

~~~diff
# T3 — .claude/skills/brain-ingest/SKILL.md:146-149 (take with B3)
-11. Update all three indexes per CLAUDE.md auto-update rules, for **every** note this run created or changed:
-    - `catalog.md` — add or update the entry line in the correct folder section.
-    - `vault-map.md` — increment folder count, refresh top-tags, prepend to Recent Changes.
-    - `graph.md` — add outgoing links for each changed note; update incoming-link entries on every target note.
+11. Update the indexes once for the whole run: check that every note this run created or
+    changed has a one-line `summary:`, run
+    `python .claude/skills/brain-reindex/scripts/build_indexes.py`, then add one line per
+    source at the top of `## Recent Changes` in `vault-map.md` (the script keeps that
+    section as it is).
~~~

~~~diff
# T4 — .claude/agents/web-search-agent.md:28-29 and :46
-   **Scenario-Specific Query Strategies (MANDATORY Module Loading)**:
-   Before executing any WebSearch or WebFetch, you MUST use the Read tool to load the relevant strategy module(s) from `.claude/agents/web-search-modules/`. Based on the research type, read the corresponding file(s):
+   **Scenario-specific query strategies**:
+   Before your first WebSearch or WebFetch, Read the strategy module(s) for the research type from `.claude/agents/web-search-modules/`. Each module lists the sources and query tactics for its kind of search:
@@ :46
-   DO NOT skip this step. DO NOT call WebSearch or WebFetch before loading at least one module.
~~~

~~~diff
# T5 — .claude/agents/web-search-agent.md:21
-   - Generate 5-10 different search query variations to maximize coverage
+   - Vary the queries until the question is covered: a status check on a known project may need two, an open debugging problem ten
~~~

~~~diff
# T6 — .claude/agents/web-search-agent.md:12 and :127
-- You never settle for surface-level results - you dig deep to find the most relevant and helpful information
@@ :126-127 (the blank line and the closing paragraph)
-
-Remember: You are not just a search engine - you are a research specialist who understands context, can identify patterns, and knows how to find information that others might miss. Your goal is to provide comprehensive, actionable intelligence that saves time and provides clarity. Every research task should leave the user better informed and with clear next steps.
~~~

~~~diff
# T7 (part 1) — .claude/skills/excalidraw-diagram/SKILL.md:210
-**For comprehensive or technical diagrams, you MUST build the JSON one section at a time.** Do NOT attempt to generate the entire file in a single pass. This is a hard constraint — Claude Code has a ~32,000 token output limit per response, and a comprehensive diagram easily exceeds that in one shot. Even if it didn't, generating everything at once leads to worse quality. Section-by-section is better in every way.
+**Build comprehensive or technical diagrams one section at a time.** A comprehensive diagram can run past the per-response output limit, which leaves truncated JSON, and building section by section lets you render and check each part before you add the next.
~~~

~~~diff
# T7 (part 2) — .claude/skills/excalidraw-diagram/SKILL.md:248
-- **Don't generate the entire diagram in one response.** You will hit the output token limit and produce truncated, broken JSON. Even if the diagram is small enough to fit, splitting into sections produces better results.
+- **Don't generate a large diagram in one response.** A response that reaches the output limit leaves truncated, broken JSON.
~~~

~~~diff
# T8 (part 1) — .claude/skills/excalidraw-diagram/SKILL.md:203-204
-### Step 6: Render & Validate (MANDATORY)
-After generating the JSON, you MUST run the render-view-fix loop until the diagram looks right. This is not optional — see the **Render & Validate** section below for the full process.
+### Step 6: Render & Validate
+After generating the JSON, run the render-view-fix loop until the diagram looks right (see **Render & Validate** below). If the renderer is not set up (`README.md`), say so and offer the setup instead of handing over a diagram nobody has looked at.
~~~

~~~diff
# T8 (part 2) — .claude/skills/excalidraw-diagram/SKILL.md:447-449
-## Render & Validate (MANDATORY)
+## Render & Validate
 
-You cannot judge a diagram from JSON alone. After generating or editing the Excalidraw JSON, you MUST render it to PNG, view the image, and fix what you see — in a loop until it's right. This is a core part of the workflow, not a final check.
+You cannot judge a diagram from JSON alone. After generating or editing the Excalidraw JSON, render it to PNG, view the image, and fix what you see — in a loop until it's right. This is part of the workflow, not a final check.
~~~

~~~diff
# T9 (part 1) — .claude/skills/excalidraw-diagram/SKILL.md:49
-**For technical diagrams, you MUST include evidence artifacts** (see below).
+**Technical diagrams include evidence artifacts** (see below).
~~~

~~~diff
# T9 (part 2) — .claude/skills/excalidraw-diagram/SKILL.md:411
-**CRITICAL**: The JSON `text` property contains ONLY readable words.
+The JSON `text` property contains only the readable words shown on the canvas.
~~~

~~~diff
# T10 — .claude/skills/brain-research-report/SKILL.md:31-89 (apply only with the new script)
-### Step 3: Generate Python Conversion Script
-Generate `generate_report.py` in `{topic}/` directory, script requirements:
-... (lines 33-86: TOC format and "Script Technical Requirements (Must Follow)" 1-5)
-
-### Step 4: Execute Script
-Run `python content/_raw/research-workspaces/{topic_slug}/generate_report.py`
+### Step 3: Generate the report
+Run `python .claude/skills/brain-research-report/scripts/generate_report.py --workspace content/_raw/research-workspaces/{topic_slug} --toc-fields <fields chosen in Step 2>`.
+It reads every JSON in `output_dir` and `fields.yaml`, covers every field, skips
+`[uncertain]` values, the fields in each `uncertain` array, and empty values, and writes
+`report.md` with a table of contents (anchor links plus the chosen summary fields).
+# New file: .claude/skills/brain-research-report/scripts/generate_report.py — its spec is
+# the current Step 3 (JSON shapes, category mapping, value formatting, extra fields, skip
+# rules), with tests beside it like the other skills' scripts.
@@ :91 — renumber the next step
-### Step 5: Promote Report to Brain Inbox
+### Step 4: Promote Report to Brain Inbox
@@ :119 and :122 — the workspace no longer holds a generated script
# :119 drop `generate_report.py` from the list of workspace files;
# :122 delete the Output line "`content/_raw/research-workspaces/{topic_slug}/generate_report.py` — Conversion script".
~~~

## Owner-decision text (not in the diff)

These fix high-confidence findings, but each narrows a Safety Rule. Take them only if you
agree. The reasons in brackets are drafted from the repository; confirm them.

~~~diff
# O-B5 — AGENTS.md:238 (template v0.4.1 already uses "unless the task is about them")
-- Never modify `.obsidian/`, `quartz/`, `.github/`
+- Leave `.obsidian/` (the owner's Obsidian settings), `quartz/` (the vendored Quartz 4
+  engine) and `.github/` (the deploy workflow) alone unless the task is about them, that
+  is, the owner asked in this session for a change there.
~~~

~~~diff
# O-B6 — AGENTS.md:243 (and the "work on `v4`" clause in .claude/skills/AGENTS.md:41)
-- Always work on `v4` branch
+- Vault work lands on `v4`, the branch that deploys. A session that starts on another
+  branch (its own worktree, or the `brain-watch-monthly` task's `kb-watch/YYYY-MM-DD`
+  branch) keeps working there; don't switch branches to reach `v4`.
~~~

If you take B3, `AGENTS.md:242` ("Always update indexes after every write") can stay as it
is or become "Bring the indexes up to date before an operation ends".

## 📖 How to check the changes

A removal or rewrite is a hypothesis until a session shows the behavior. Run each in a
scratch worktree, on Fable 5.2, one change at a time:

- **B1:** run `/b:ingest` with a YouTube URL that is already in the vault. The idempotency
  check should still find the existing note, and no other vault-wide search should appear.
- **B2:** ask a `/b:qa` question in a large folder. The session should read catalog
  sections and make no attempt to split `catalog.md`.
- **B3 / T3:** ingest one small source with the old text and once with the new. Then diff
  the three indexes: they should match, apart from the `updated:` stamp and the one
  Recent Changes line.
- **O-B5:** ask for a one-line change in `.github/workflows/`. With the old rule the session
  should hold back; with the new one it should make the change.
- **O-B6:** start `/b:watch --dry` from a worktree on a non-`v4` branch. The session should
  not try to switch branches.
- **T4–T6:** run `/b:watch` with `--deep-budget 4` before and after. Compare searches per
  item and output tokens; the results JSON should still validate.
- **T1, T2, T7–T9, T10:** these are facts about the repository. Check them against the
  files (or, for T10, against the new script's tests), not with a model run.
