---
title: "Agentic AI Repos"
date: 2026-05-10
enableToc: true
openToc: true
tags: ["project", "ai", "agents", "architecture", "claude-code", "skills"]
type: knowledge-note
source: "_raw/processed/2026-05-10_seed-second-brain-skills-submodules.md"
agent-created: true
agent-reviewed: 2026-11-27
summary: "Hub: agentic-ai-system, agentic-ai-private and the shared-skills plugin + private-skills submodule — the 200IQ LABS + PLSoft agent infrastructure"
---
# Agentic AI Repos

## 🗒️ Description
Hub note describing the **three-repo agent infrastructure** Paweł operates as of 2026-05-10. Repos are linked by two git submodules (`shared-skills`, `private-skills`) symlinked into IDE skill directories (`.claude/`, `.github/`, `.cursor/`, `.agent/`).

This is the implementation layer of [[Agentic Systems]] — the architecture note describes principles; this note maps the actual repos.

> [!contradiction] Two submodules
> Earlier: the repos are linked by two git submodules, `shared-skills` and `private-skills`, symlinked into `.claude/`, `.github/`, `.cursor/` and `.agent/` (source: _raw/processed/2026-05-10_seed-second-brain-skills-submodules.md)
> New: only `private-skills` is still a submodule. `shared-skills` is a sibling repo, `../shared-skills`, published as the Claude Code plugin `ss@shared-skills`. agentic-ai-system dropped the submodule on 2026-08-04, and agentic-ai-private on 2026-08-09. Plugin skills are not symlinked, and the private repo no longer links into `.agent/`. The table and the diagram below show the May layout (source: both repos' `.gitmodules`, `README.md` and `CLAUDE.md`, read 2026-11-27)

## 🧩 The three repos

| Repo | Purpose | Visibility | Children |
|------|---------|-----------|----------|
| [[agentic-ai-system]] | 200IQ LABS PSA + Qamera AI multi-agent advisory | Private | uses both submodules |
| [[agentic-ai-private]] | PLSoft (JDG) + personal context | Private | uses both submodules |
| [[Agentic Skills Submodules]] | `shared-skills` (Apache 2.0) + `private-skills` (proprietary) | Mixed | shared by both repos |

## 🔄 How they compose

```
agentic-ai-system/                      agentic-ai-private/
├── shared-skills/   (submodule) ←──┬──→  shared-skills/   (submodule)
├── private-skills/  (submodule) ←──┘     private-skills/  (submodule)
├── context/         (200IQ-only)         context/         (PLSoft+personal)
├── tools/           (Airtable, Stripe,   slides/          (Marp decks)
│                     Revolut, Qamera-MCP) openspec/
└── outputs/                              tools/
```

`tools/sync-skills.sh` symlinks each `<submodule>/skills/<name>/` into all IDE skill targets in both repos.

> [!contradiction] `context/` and sync targets
> Earlier: each repo has a `context/` folder, and `sync-skills` links every submodule's skills into all IDE targets in both repos (source: _raw/processed/2026-05-10_seed-second-brain-skills-submodules.md)
> New: agentic-ai-system has had no `context/` since 2026-10-16, and its knowledge lives in `company/` and `departments/` entities. Its `sync-skills.sh` links `private-skills/` and its own skill layers (`skills/`, `company/skills/`, department `skills/`) into `.claude/`, `.github/`, `.cursor/` and `.agents/`. agentic-ai-private keeps `context/`, and its `sync-skills` links only `private-skills/`, into `.claude/`, `.github/` and `.cursor/` (source: both repos, read 2026-11-27)

## 🧩 Boundary rules
- **Skills are generic** — no hardcoded paths to repo-specific context. They consume canonical files (`finances.md`, `company.md`, etc.) via `## Context Dependencies`.
- **Context is local** — never lives in submodule. Each repo has its own `context/` (200IQ vs PLSoft).
- **Outputs ≠ context** — generated artifacts go to `outputs/`. Promotion to context only on user confirmation.
- **Single source of truth** — one fact, one file. Cross-reference with `see [file](path)`.
- **Routing boundary** — queries about Qamera AI / 200IQ LABS → `agentic-ai-system`. Queries about PLSoft / personal → `agentic-ai-private`.

> [!contradiction] "Each repo has its own `context/`"
> Earlier: context is local, and each repo has its own `context/` (200IQ vs PLSoft). Skills read canonical files such as `finances.md` and `company.md` (source: _raw/processed/2026-05-10_seed-second-brain-skills-submodules.md)
> New: only agentic-ai-private still has `context/`. In agentic-ai-system, company content sits in `company/` and `departments/`, and company-specific additions to a foundation skill go into extension files (`company/extensions/<skill>.md`). The routing boundary still holds in both repos (source: both repos' rules files, read 2026-11-27)

## 🧩 Key shared agents (across both repos)
CFO, Tax Advisor, Legal, Business Consultant, LinkedIn Content, Marketing (Phase 2), Product Manager (Phase 2), Coach The Five (private), Process Mapping, Slides, Vibe Coding, Ingest, Find Skills, Environment Setup.

> [!contradiction] What the shared plugin ships
> Earlier: the shared agents include Marketing, Product Manager and Ingest (source: _raw/processed/2026-05-10_seed-second-brain-skills-submodules.md)
> New: the `ss` plugin today ships 20 skills: business-consultant, cfo, environment-setup, find-skills, legal, linkedin-content, prd, prepare-goal, prepare-openspec-goal, process-mapping, research (with add-fields, add-items, deep and report), review-fix, review-loop, slides, tax-advisor and vibe-coding. The `task-delegation-workspace` folder beside them is a git-ignored eval workspace, not a skill. Marketing, Product Manager and Ingest are not in it, and ingest is the foundation skill `sa-ingest` in agentic-ai-system. Coach The Five is still the only skill in `private-skills` (source: `../shared-skills/skills/` and `private-skills/skills/`, read 2026-11-27)

## 🔧 Key process skills
- `/ingest` — inbox → data + archive + catalog/index update
- `/sync-prospects` — Airtable ⇄ `qamera/prospects/` (bidir, additive-only)
- `/sync-customers` — Stripe → `qamera/customers/` (read-only mirror)
- `/finances close YYYY-MM` — 6-phase close (PULL → CLASSIFY → REVIEW → ACCRUALS → COMMIT → REGENERATE)
- `/daily-analyze`, `/meeting-analyze`, `/weekly-update`

> [!contradiction] Process-skill names
> Earlier: `/ingest`, `/sync-prospects`, `/sync-customers` and `/finances close` (source: _raw/processed/2026-05-10_seed-second-brain-skills-submodules.md)
> New: in agentic-ai-system they are `sa-ingest` (one root `inbox/`), `sprzedaz-sync-prospects` and `sprzedaz-sync-customers` (which write to the sales department's `prospects/` and `customers/`), and `/org-finances close YYYY-MM`. `/daily-analyze`, `/meeting-analyze` and `/weekly-update` are still commands there. agentic-ai-private has no intake command today (source: both repos, read 2026-11-27)

## 📒 Snapshot 2026-11-27
This is from my read-only read of both repos on 2026-11-27. It covers structure only: each repo's state and data stay there.

```
../shared-skills  (Apache 2.0) ── plugin ss@shared-skills (prefix ss:) ──→ both repos
private-skills    (proprietary) ── git submodule ──────────────────────→ both repos

agentic-ai-system/   (branch main)       agentic-ai-private/   (branch master)
├── AGENTS.md → FOUNDATION.md            ├── CLAUDE.md            the rules
│             + company/RULES.md         ├── AGENTS.md → REVIEW.md (Codex reviews)
├── private-skills/   submodule          ├── private-skills/      submodule
├── skills/ (sa-*) · lessons/            ├── .claude/skills/      repo-local
├── company/ · departments/              ├── context/             PLSoft + personal
├── registry/ · events/ · sessions/      ├── context/tasks/ + <entity>/tasks/
├── tools/ · openspec/ · outputs/        └── tools/ · openspec/ · slides/
└── inbox/            root, outside git
```

- **The shared layer is a plugin now.** `shared-skills` is developed in its sibling repo and reaches both systems through `claude plugin update ss@shared-skills`, the same way outside users get it. `private-skills` is the only submodule left, and its one skill is Coach The Five.
- **The two repos have grown apart in shape.** agentic-ai-system moved to a rules core (`FOUNDATION.md` + `IDENTITY.md`) with company and department entities, rule stores, lesson banks, an event ledger and a session register. agentic-ai-private still keeps its knowledge in `context/`, but it shares the same file-based ideas: a task registry with a schema, `status.md` as the source of truth, and generated indexes. It is set to adopt the same foundation. Details are in [[agentic-ai-system]] and [[agentic-ai-private]].
- **Both repos give the same answer to "which skill ran".** Each skill source reaches the agent through exactly one channel, because two channels give two entries with the same description.
- **Codex has its own role.** agentic-ai-system loads its rules for Codex like any other tool through `AGENTS.md`. In agentic-ai-private, Codex is the code reviewer and gets no skills.
- **The routing boundary is unchanged:** 200IQ LABS and Qamera AI go to agentic-ai-system, PLSoft and personal go to agentic-ai-private.
- [[Agentic Skills Submodules]] has its own 2026-11-27 snapshot with the skill-by-skill changes: the plugin rename, what moved to the foundation, the review skills on Codex, and company data in `company/`.

## 📒 Snapshot 2026-05-10
- Branch: `master` (clean) on both repos.
- On 2026-11-27 I cut this snapshot's business lines (customers, finances, goals and plans). They stay in the private repos.

## 🔗 Links
- [[Agentic Systems]] — architecture / principles note
- [[agentic-ai-system]] — 200IQ LABS / Qamera AI
- [[agentic-ai-private]] — PLSoft / personal
- [[Agentic Skills Submodules]] — shared-skills + private-skills
- [[Qamera AI]] — flagship product
- [[PLSoft]] — JDG consulting practice
- [[Agent Skills]] — agentskills.io standard
- [[Awesome Claude Code]], [[Superpowers]], [[Karpathy Skills]]
- [[Open Hive Playbooks — Fit for My Agent Systems]] · [[Open Hive Sample Prompts — Shortlist]] — what from Open Hive's sales playbooks and prompts is worth adding to both repos (2026-11-27)
