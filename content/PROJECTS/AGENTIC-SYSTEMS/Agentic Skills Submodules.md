---
title: "Agentic Skills Submodules"
date: 2026-05-10
enableToc: true
openToc: true
tags: ["project", "ai", "skills", "claude-code", "open-source", "200iq-labs"]
type: basic-note
source: "_raw/processed/2026-05-10_seed-second-brain-skills-submodules.md"
agent-created: true
agent-reviewed: 2026-11-27
summary: "shared-skills (Apache 2.0, the Claude Code plugin ss@shared-skills since 2026-08) + private-skills (proprietary, the only submodule left) — the skill layers of both agentic-ai repos"
---
# Agentic Skills Submodules

## 🗒️ Description
Two git submodules feeding the agent system in [[agentic-ai-system]] and [[agentic-ai-private]]. One of three repos in the [[Agentic AI Repos]] cluster.

| Repo | Visibility | License | URL | Plugin name |
|------|-----------|---------|-----|-------------|
| **shared-skills** | Public | Apache 2.0 | `github.com/200iqlabs/shared-skills` | `200iqlabs-agent-skills` |
| **private-skills** | Private | UNLICENSED (proprietary) | `github.com/200iqlabs/private-skills` | `200iqlabs-private-skills` |

Both built on the [[Agent Skills]] standard (agentskills.io). Each skill = `skills/<name>/` with `SKILL.md` (YAML frontmatter + body). Auto-discovery via plugin manifest. Distribution: plugin marketplace (`/plugin marketplace add 200iqlabs/shared-skills`) or git submodule.

The sections below describe the layout from May to July 2026. For what I read on 2026-11-27, see **Snapshot 2026-11-27** below. Where the old text no longer holds, a contradiction callout says so.

> [!contradiction] Two submodules, and the plugin's name
> Earlier: both repos are git submodules of the agent repos, and the shared plugin is called `200iqlabs-agent-skills` (source: _raw/processed/2026-05-10_seed-second-brain-skills-submodules.md)
> New: only `private-skills` is still a submodule. agentic-ai-system dropped the `shared-skills` submodule on 2026-08-04, and agentic-ai-private on 2026-08-09. Both get the shared skills only as the Claude Code plugin `ss@shared-skills`, the same way outside users do, and its source is the sibling repo `../shared-skills`. The plugin was renamed `200iqlabs-agent-skills` → `ss` on 2026-08-04, so every skill and command carries the `ss:` prefix, and a `renames` map in `marketplace.json` moves old installs to the new name. The shared-skills README still offers a submodule install to outside users; my two repos don't use it. `private-skills` keeps its manifest name `200iqlabs-private-skills` (source: both repos' `.gitmodules` and git log, `../shared-skills/.claude-plugin/` and `CHANGELOG.md`, read 2026-11-27)

## 🧩 shared-skills (public, Apache 2.0)

Modular library of business advisory agents for founders and small teams. Forkable, installable as plugin or submodule.

### Business advisory skills (13)
| Skill | What it does | Trigger |
|-------|--------------|---------|
| **cfo** | Cash flow, runway, P&L, budget, unit economics | "ile kasy", "runway", "ile zarabiamy" |
| **tax-advisor** | Polish tax (JDG/PSA): CIT, VAT, ZUS, IP Box, B+R, estoński CIT, ryczałt | "ile netto z faktury", JPK, /analiza /optymalizacja |
| **legal** | PL legal: NDA, B2B, RODO, IP, KSH, AI Act, OWU, founders agreement | /analiza /draft /brief /owu /checklist |
| **business-consultant** | Meeting notes, solution design, estimation, offers, SWOT, process mapping, Make vs n8n vs Zapier vs custom | "notatki", "oferta", "wycena", "discovery" |
| **linkedin-content** | LinkedIn posts, hooks, content calendar, personal brand | "post na LinkedIn", "ghostwriter" |
| **process-mapping** | Excalidraw / Mermaid diagrams (sequential business processes only) | "zmapuj proces", "AS-IS TO-BE" |
| **slides** | Markdown → Marp PDF (LinkedIn carousels, talk slides) | /slides:init :explore :new :draft :build :tweak :archive |
| **vibe-coding** | Modern UI without UX/UI knowledge (React + Vite + Tailwind 4 + shadcn/ui) | "vibe", design briefs |
| **ingest** | Inbox processing → `data/` + archive + catalog/index | /ingest, /ingest NAME, /ingest NAME `<text>` |
| **environment-setup** | Wizard: configure shared-skills + create context files | "set up environment" |
| **find-skills** | Discovery + install + security audit from open ecosystem | "find skill", "is there a skill that..." |
| **marketing** | TODO Phase 2 (placeholder) | — |
| **product-manager** | TODO Phase 2 (placeholder) | — |

> [!contradiction] Business advisory skills
> Earlier: 13 skills, including `ingest` and the `marketing` and `product-manager` placeholders, called without a prefix (source: _raw/processed/2026-05-10_seed-second-brain-skills-submodules.md)
> New: `ingest` left the plugin on 2026-09-29 and became the foundation skill `sa-ingest` in [[agentic-ai-system]], so a repo never sees the same skill twice. The two placeholders were removed on 2026-10-15, and what they were meant to do stays in the plugin's `docs/PRD.md`. The other ten are still there as `ss:cfo`, `ss:tax-advisor`, `ss:legal`, `ss:business-consultant`, `ss:linkedin-content`, `ss:process-mapping`, `ss:slides` (commands `/ss:slides:*`), `ss:vibe-coding`, `ss:environment-setup` and `ss:find-skills`. `linkedin-content` is now the engine of a publication loop: it turns a brief (channel, thesis with grounds, constraints) into post text (source: `../shared-skills/skills/` and `CHANGELOG.md`, read 2026-11-27)

### Developer-workflow skills (added 2026-07, commit `6f12340`)
Migrated from loose global `~/.claude/skills/` + `~/.claude/commands/` into the plugin so the same personal coding-agent tools install + update across machines via `/plugin update`. Placed verbatim (battle-tested, not re-authored via skill-creator).

| Skill | What it does | Trigger |
|-------|--------------|---------|
| **review-fix** | Fetch PR review comments → fix valid issues → commit → push → reply on GitHub | `/review-fix [PR]` |
| **review-loop** | Automated Claude↔Copilot review cycle on a PR until stable | `/review-loop <PR> <change>` |
| **prepare-openspec-goal** | Transcript-checkable completion condition for `/goal` implementing an OpenSpec change — OpenSpec-specialized sibling of the generic `prepare-goal` | `/prepare-openspec-goal <change>` |

> [!contradiction] The review skills use Codex, not Copilot
> Earlier: `review-fix` fetches PR review comments, fixes them, pushes and replies on GitHub, and `review-loop` runs a Claude↔Copilot cycle (source: this note's 2026-07-13 update, shared-skills commit `6f12340`)
> New: both review through the Codex plugin for Claude Code (`codex@openai-codex`), run locally against the PR's base, and stop with a pointer to `/codex:setup` when it is missing. `review-fix` is one Codex review: it fixes what holds up, rejects the rest with a one-sentence reason, verifies, commits, and pushes when there is a PR. It no longer reads or answers PR comments. Without an OpenSpec change, it judges findings against the PR description. `review-loop` repeats review-fix rounds until no important finding is left, then opens a sign-off issue for a person. Every finding and its outcome go into `openspec/changes/<change>/review.md`, so a rejected finding isn't judged again. The repo ships templates for a `REVIEW.md` policy and for the `AGENTS.md` pointer Codex reads (source: `../shared-skills/README.md` and `CHANGELOG.md`, read 2026-11-27)

**Slash commands** (`commands/*.md`, flat files → **plugin-global only**; `sync-skills.sh` symlinks command *directories*, not flat files, so these are NOT mirrored into consumer repos):
- `/decisions` — surface open decisions one at a time, each with a recommendation (PL)
- `/explain-diff` — walk a diff (PR / branch vs main) file-by-file (PL)
- `/explain-design` — walk an OpenSpec `design.md` heading-by-heading (PL)

> [!contradiction] Slash commands
> Earlier: the commands are `/decisions`, `/explain-diff` and `/explain-design`, plugin-global only, and `sync-skills.sh` doesn't mirror them (source: this note's 2026-07-13 update)
> New: they carry the plugin prefix, `/ss:decisions`, `/ss:explain-diff` and `/ss:explain-design`, and since 2026-10-01 they are typed only (`disable-model-invocation: true`), so the model never picks them itself. `/ss:working-mode` joined them: a session switch, off by default, that puts replies into Polish with a fixed `KONTEKST` / `WYNIK` / `CO DALEJ` skeleton. It is backed by the plugin's first hooks. No consumer repo links anything from shared-skills, so `sync-skills` plays no part in any of this (source: `../shared-skills/commands/`, `hooks/` and `CHANGELOG.md`, read 2026-11-27)

### Other skills added since seed
- **prd** — agent-ready PRD skill for a 7-day MVP (Startup Builders W3).
- **prepare-goal** — generic `/goal` completion-condition formulator (parent of `prepare-openspec-goal`).
- **research-en** — research outline → deep-research fan-out → report pipeline.

> [!contradiction] `research-en`
> Earlier: `research-en` is one research pipeline skill (source: this note's 2026-07-13 update)
> New: on 2026-08-09 it was flattened into five skills, `research`, `research-add-fields`, `research-add-items`, `research-deep` and `research-report`, because plugin discovery finds only `skills/<name>/SKILL.md` and never looks a level deeper. `prd` and `prepare-goal` are unchanged (source: `../shared-skills/skills/` and git log, read 2026-11-27)

### Tools (CLI integrations)
- **`tools/clickup/`** — taski, daily, projekty
- **`tools/revolut/`** — transactions for CFO close (OAuth + private cert)
- **`tools/common/helpers.sh`** — shared bash utilities

> In `agentic-ai-system` we use repo-level `tools/` (Airtable, Stripe, finances, tech-stack, scheduler, qamera-mcp). The submodule `tools/` are used by skills directly. inFakt was refactored from CLI → MCP.

> [!contradiction] "The submodule `tools/`"
> Earlier: agentic-ai-system uses its repo-level `tools/`, and skills use the submodule's `tools/` directly (source: _raw/processed/2026-05-10_seed-second-brain-skills-submodules.md)
> New: there is no shared-skills submodule, so there is no submodule `tools/` either. `../shared-skills/tools/` still holds `clickup/`, `revolut/` and `common/`, plus `skill-trigger-eval.py`. In agentic-ai-system, Airtable, Stripe, the scheduler and qamera-mcp are still reached at `tools/` (Airtable and Stripe as links to department tools), while finances and the tech stack moved to `company/tools/` (source: both repos, read 2026-11-27)

### Philosophy
- **Progressive disclosure** — metadata → body → references on-demand.
- **Pushy descriptions** — undertriggering > overtriggering. Better one trigger too many.
- **Phase 0 placeholders** — marketing + product-manager flagged "PLACEHOLDER".
- **Polish-first** — most agents (tax, legal, business consulting) target PL users.
- **CLI > MCP** — saves context window.

> [!contradiction] Phase 0 placeholders
> Earlier: marketing and product-manager ship as skills flagged "PLACEHOLDER" (source: _raw/processed/2026-05-10_seed-second-brain-skills-submodules.md)
> New: both were removed on 2026-10-15. They were eight-line stubs that showed up in the skill list with no description. They come back only when they are built with `skill-creator` (source: `../shared-skills/CHANGELOG.md`, read 2026-11-27)

### Context layer (2 layers)
1. **`references/`** in skill — domain knowledge, distributed.
2. **`context/`** in user repo — user-specific data, gitignored, created manually or via `environment-setup`.

Each skill using context files MUST have `## Context Dependencies` section with required/recommended files + missing-file message.

| Context file | Skills that consume it |
|--------------|------------------------|
| `company.md` | legal, tax-advisor, cfo |
| `consultant-profile.md` | business-consultant |
| `projects-portfolio.md` | business-consultant |
| `author-profile.md` | linkedin-content |
| `finances.md` | cfo |
| `legal-entities.md` | legal, tax-advisor |

> [!contradiction] Where the context files live
> Earlier: every context file sits in the user repo's `context/` (source: _raw/processed/2026-05-10_seed-second-brain-skills-submodules.md)
> New: company data moved to `company/`. `legal`, `tax-advisor`, `cfo` and `environment-setup` read `company/data/company.md` and `company/data/legal-entities.md`, with no fallback to `context/`. Optional brand files sit in `company/brand/`: `writing-style.md` for `linkedin-content`, `brand-design.md` and `tone-of-voice.md` for `/ss:slides:init`. `consultant-profile.md`, `projects-portfolio.md`, `author-profile.md` and `finances.md` are read from wherever the repo's rules point, with `context/` as the default, and `context/process-mapping.md` joined the list. The templates for all of them stay in `context/templates/`. The principle in "Generic skills, local data" below still holds (source: `../shared-skills/CLAUDE.md`, `CHANGELOG.md` and git log, read 2026-11-27)

### MANDATORY skill-creation workflow
For new skills or significant edits: use `/skill-creator`. Do NOT hand-write `SKILL.md`.
1. `/skill-creator` — capture intent, interview, draft.
2. Generate min. 5 test prompts per agent.
3. Run evals + review.
4. Iterate on feedback + benchmarks.
5. Optimize description (target ≥ 80% triggering accuracy).

Can skip for typo fixes, reference file additions, date updates, reference-only changes.

### Recent commits
- `6f12340` (2026-07-13) feat(skills): add developer-workflow skills + slash commands (review-fix, review-loop, prepare-openspec-goal + /decisions, /explain-diff, /explain-design)
- `06e784b`→`ef30e79` feat(prd): agent-ready PRD skill; refactor(linkedin-content): plain-Polish, context-first
- `f6fff6f` feat(prepare-goal): formulate /goal completion conditions
- `3a06818` refactor(cfo): route inFakt through MCP, drop CLI scripts
- `405ce5d` fix(cfo): use OAuth-refreshed Revolut tokens
- `61ae0fb` feat(find-skills): add skill discovery with security audit
- `9c04da1` feat(ingest): drop on-disk summary file — chat report + git są audit trail

## 🧩 private-skills (proprietary, UNLICENSED)

Skills not suitable for open-source distribution (confidential know-how, internal platform integrations).

### Skills

#### 1. `coach-the-five`
Personal business coach based on **Tomasz Karwatka's** methodology from *"The Five: Pierwsze pięć lat prowadzenia firmy"*.
- Author: Paweł Lipowczan. Source: "The Five" — Tomasz Karwatka.
- Role: mentor (40%) + consultant + coach.
- Triggers: startup strategy, PMF, scaling readiness, founder burnout, co-founder agreements/conflicts, equity splits, fundraising, IP+services model, exit strategy, EBITDA. PL: wypalenie, wspólnik, udziały, sprzedaż firmy, kryzys.
- Frameworks: tornado framework, "PE yourself", founders agreement.
- References: 7 modules + checklists per phase of first 5 years.

#### 2. `platforma-tworzenie-sesji-zdjeciowych`
Operator skill for **Qamera AI** platform via MCP server `qamera-ai-hetzner`.
- Goal: agent (not human) registers + monitors photo sessions in Qamera AI SaaS.
- MCP transport: Streamable HTTP (fix `dbf9a55` in main repo).
- Tools: `get_products`, `get_models`, `get_sceneries`, `get_presets`, `register_photo_shoot`, `get_images`.
- Use cases: create session from existing records, validate IDs, run generation, check image status.

### Recent commits (2026-05-10)
- `6f59ac9` feat: add platforma-tworzenie-sesji-zdjeciowych skill (Qamera MCP)
- `f5a6c7f` chore: remove skill workspaces from repo to avoid submodule pollution
- `8ca6169` feat: initial private-skills repo with coach-the-five skill

> [!contradiction] Two private skills
> Earlier: private-skills holds `coach-the-five` and `platforma-tworzenie-sesji-zdjeciowych` (source: _raw/processed/2026-05-10_seed-second-brain-skills-submodules.md)
> New: the Qamera operator skill was removed on 2026-06-05 (`c298b1e`), so `coach-the-five` is the only skill left. Both repos point at that commit. The repo has no `commands/` folder, so the command half of `sync-skills` links nothing from it today (source: `private-skills/` in both repos, read 2026-11-27)

## 🧩 How they compose
```
agentic-ai-system  /  agentic-ai-private          ← consumer repos
├── shared-skills/    (submodule)
├── private-skills/   (submodule)
└── tools/sync-skills.sh                          ← creates symlinks:
                                                    skills/<name>/ → .claude/skills/<name>/
                                                                     .github/skills/<name>/
                                                                     .cursor/skills/<name>/
                                                                     .agent/skills/<name>/
```

> [!contradiction] How they compose
> Earlier: both repos carry `shared-skills/` and `private-skills/` as submodules, and `tools/sync-skills.sh` links every skill into `.claude/`, `.github/`, `.cursor/` and `.agent/` (source: _raw/processed/2026-05-10_seed-second-brain-skills-submodules.md)
> New: the plugin reaches Claude Code only, and nothing links it. In agentic-ai-private, `tools/sync-skills` (a `.sh` that hands over to its `.ps1` twin on Windows) links only `private-skills/`, into `.claude/`, `.github/` and `.cursor/`, and removes links whose target is gone. Antigravity's `.agent/` target was dropped on 2026-11-09. In agentic-ai-system, `tools/sync-skills.sh` is now a thin entry point to `tools/skill-links/`, which links `private-skills/` together with the repo's own skill layers (foundation `skills/`, `company/skills/`, department `skills/`) and roles into `.claude/`, `.github/`, `.cursor/` and `.agents/` (source: both repos' sync scripts and `tools/skill-links/README.md`, read 2026-11-27)

### Lifecycle
1. **Read** — IDE scans its own skill dir, loads `SKILL.md`, uses frontmatter `description` for auto-routing.
2. **Update** — `git submodule update --remote` → `./tools/sync-skills.sh` → commit new submodule SHAs.
3. **New skill** — create in submodule via `/skill-creator` → `git submodule update --remote` → add name to `.gitignore` (Synced agent skills section) → `./tools/sync-skills.sh`.

> [!contradiction] Lifecycle
> Earlier: an update runs `git submodule update --remote` → `./tools/sync-skills.sh` → commit the new SHAs, and a new skill is created in the submodule with its name added to `.gitignore` by hand (source: _raw/processed/2026-05-10_seed-second-brain-skills-submodules.md)
> New: a shared skill is edited in `../shared-skills`, committed and pushed to `master`, then `claude plugin update ss@shared-skills` runs and a new session starts, because skills load at session start. The name must be full: `ss` alone is not found. A skill must sit at `skills/<name>/SKILL.md`. The submodule cycle is left for `private-skills` only, and the sync scripts now write the ignore entries themselves (source: agentic-ai-private `CLAUDE.md` and `tools/sync-skills.sh`, agentic-ai-system `company/RULES.md` and `tools/skill-links/`, read 2026-11-27)

> **Global plugin vs submodule coexistence.** The dev-workflow skills also install globally via the `200iqlabs-agent-skills` plugin, so in a consumer repo (e.g. `agentic-ai-private`) a skill can exist at **both scopes** — project symlink (submodule) AND global plugin. Claude Code dedupes by `name` — no merge, no corruption — and both point at the same repo. The one real hazard is **version skew**: the plugin (refreshed via `/plugin update`) vs the submodule (pinned SHA, `git submodule update --remote`) can drift. Gotcha: `/plugin update` reinstalls from the *local* marketplace clone — run `/plugin marketplace update shared-skills` **first** or it silently keeps stale content.

> [!contradiction] Plugin and submodule side by side
> Earlier: a dev-workflow skill can exist at both scopes, as a project symlink and through the global plugin; Claude Code dedupes by `name`, and the only hazard is version skew (source: this note's 2026-07-13 update)
> New: both repos rule this out. Their rules say each skill source reaches the agent through exactly one channel, and a second channel is a configuration error: it shows two entries with the same description and no way to tell which one ran. The private repo's sync script says the same about shared-skills: linking it as well would load every one of its skills twice. That is why the shared-skills submodule went. The update loop the repos document is `claude plugin update ss@shared-skills` from a terminal, since `/plugin install` doesn't work in the desktop app (source: agentic-ai-private `CLAUDE.md` and `tools/sync-skills.sh`, agentic-ai-system `company/RULES.md`, read 2026-11-27)

### Generic skills, local data
Skills NEVER hardcode paths to `context/operations/tech-stack/...`. They get data via canonical files (`finances.md`, `company.md`) declared in `## Context Dependencies`. This makes the skills cleanly forkable for users outside 200IQ LABS.

## 📒 Snapshot 2026-11-27
This is from my read-only read of `../shared-skills`, [[agentic-ai-system]] and [[agentic-ai-private]] on 2026-11-27. It covers structure only: each repo's state and data stay there.

```
../shared-skills   (public, Apache 2.0, branch master)
├── .claude-plugin/       plugin.json (name "ss") + marketplace.json (with a renames map)
├── skills/               20 skills → ss:<name>
├── commands/             decisions · explain-diff · explain-design · working-mode · slides/
├── hooks/                working-mode hooks (SessionStart, UserPromptSubmit, SessionEnd)
├── tools/                clickup/ · revolut/ · common/ · skill-trigger-eval.py
├── templates/            SKILL, CONTEXT, CLAUDE.md, REVIEW and AGENTS-pointer templates
├── context/templates/    templates for the context files
├── evals/cases/          behavioural eval cases for the review skills
├── openspec/             specs + changes; review findings go to a change's review.md
└── AGENTS.md → REVIEW.md the review policy Codex follows in this repo

private-skills     (proprietary, UNLICENSED)
└── skills/coach-the-five/

ss@shared-skills ── Claude Code plugin ──────────────→ both repos (Claude Code only)
private-skills   ── git submodule → sync-skills links → both repos (.claude/ .github/ .cursor/ …)
```

- **The shared layer is a plugin now.** I write shared skills in the sibling checkout `../shared-skills`, and they reach my agents only after commit, push and `claude plugin update ss@shared-skills`. That is the same road outside users take, so what I run is what I publish. `private-skills` is the only submodule left, and its one skill is Coach The Five.
- **One channel per skill source.** Both agent repos treat a second channel for the same source as a configuration error, because it shows two skills with the same description. The plugin's `ss:` prefix tells a shared skill apart from a repo's own at a glance.
- **20 shared skills.** Ten business ones (`cfo`, `tax-advisor`, `legal`, `business-consultant`, `linkedin-content`, `process-mapping`, `slides`, `vibe-coding`, `environment-setup`, `find-skills`), four developer-workflow ones (`review-fix`, `review-loop`, `prepare-goal`, `prepare-openspec-goal`), the five-skill research suite and `prd`.
- **Some work moved out to the foundation.** `ingest` became `sa-ingest` in [[agentic-ai-system]] on 2026-09-29. The orientation command and the task-delegation skill went to the foundation's `sa-orientation` and `sa-task-help` on 2026-10-01. When a session has `sa-task-help`, the working mode routes decisions and hand-overs to it.
- **Codex reviews code.** The review skills run the Codex plugin, and shared-skills follows its own advice: it carries a `REVIEW.md` and an `AGENTS.md` pointer to it, plus templates so a consumer repo can do the same.
- **Hooks stay inside the plugin.** The working-mode hooks write nothing into `~/.claude/settings.json` or `~/.claude/hooks/`, so disabling the plugin really stops them, and they emit nothing while the mode is off.
- **Descriptions are capped at 250 characters.** The skill list a model sees has a character budget, and long descriptions fell out of it. Fifteen skills were cut down, and each keeps its full former routing text at the end of its `SKILL.md`.
- **Company data moved to `company/`.** The context layer now matches the layout of [[agentic-ai-system]]: `company/data/` for company facts, `company/brand/` for brand files, `context/` for the rest (see the callout under "Context layer").
- **Skill tooling.** New skills still go through `/skill-creator` with evals, the plugin has behavioural eval cases for its review skills (`claude plugin eval`), and [[OpenSpec]] changes record their review findings next to the spec. Decks still go through [[Marp]] (`/ss:slides:*`).

## 🧩 Glossary
- **Agent Skill** — agentskills.io standard: dir with `SKILL.md` (frontmatter + body), optional `references/` and `scripts/`.
- **Plugin manifest** — `.claude-plugin/plugin.json`.
- **Progressive disclosure** — metadata → body on activation → references on-demand.
- **Triggering accuracy** — % cases skill activates correctly. Target ≥ 80%.
- **MCP server** — Model Context Protocol; alternative to CLI tools.
- **Skill workspace** — local skill instance with runtime state; removed from private-skills (commit `f5a6c7f`).

## 🔗 Links
- [[Agentic AI Repos]] — hub
- [[agentic-ai-system]] · [[agentic-ai-private]]
- [[Agent Skills]] — agentskills.io standard
- [[Awesome Claude Code]], [[Awesome Agent Skills]]
- [[Karpathy Skills]], [[Vercel Skills]], [[Superpowers]], [[gstack]]
- [[Progressive Disclosure]] · [[Token Optimization for Claude Code]]
- [[Building Claude Skills Guide]]
- [[Machine Setup Manifest]] — plugin install/update mechanism across machines
