---
title: "agentic-ai-system"
date: 2026-05-10
enableToc: true
openToc: true
tags: ["project", "ai", "agents", "200iq-labs", "qamera", "claude-code"]
type: basic-note
source: "_raw/processed/2026-05-10_seed-second-brain-agentic-ai-system.md"
agent-created: true
agent-reviewed: 2026-11-27
summary: "200IQ LABS PSA multi-agent repo for Qamera AI — rules core, company and department entities, task registry; context/ retired in 2026-10"
---
# agentic-ai-system

## 🗒️ Description
Multi-agent advisory system for **200IQ LABS PSA** (PSA developing **Qamera AI** — AI photo studio SaaS). One of three repos in the [[Agentic AI Repos]] cluster.

Founders: Paweł Lipowczan (CTO) + Przemek Trybała (CEO). PSA founded 2026-02-16.

Repo: `github.com/200iqlabs/agentic-ai-system` (private). Works with: Claude Code, GitHub Copilot, Cursor, Antigravity (skills symlinked via `tools/sync-skills.sh`).

The sections from Architecture down to the 2026-05-10 snapshot describe the repo as it was in May 2026. The repo has been rebuilt since. For the layout I read on 2026-11-27, see **Snapshot 2026-11-27** below. Where the May text no longer holds, a contradiction callout says so.

## 🧩 Architecture
```
agentic-ai-system/
├── CLAUDE.md                  # Orchestrator + routing (single source of truth)
├── shared-skills/             # submodule (Apache 2.0)
├── private-skills/            # submodule (proprietary)
├── context/                   # 200IQ-only company data (markdown)
│   ├── company.md / finances.md / legal-entities.md
│   ├── consultant-profile.md / projects-portfolio.md / author-profile.md
│   ├── company/   product/   operations/   brand/   meetings/
│   ├── 200iq-labs/{clients,prospects}/    # B2B consulting
│   ├── qamera/{customers,prospects}/      # SaaS users (Stripe + Airtable synced)
│   └── projects/<NAME>/                   # cross-company initiatives
├── tools/                     # Airtable, Stripe, Revolut, finances, tech-stack, scheduler, qamera-mcp
├── outputs/                   # agent-generated artifacts (NOT context)
├── openspec/                  # specifications (SDD)
└── .githooks/                 # post-checkout, post-merge → sync-skills
```

> [!contradiction] Repository layout
> Earlier: `CLAUDE.md` is the orchestrator and single source of truth, `shared-skills/` is a submodule, and company data lives in `context/` (source: _raw/processed/2026-05-10_seed-second-brain-agentic-ai-system.md)
> New: `CLAUDE.md` is one line, `@AGENTS.md`. The rules live in `AGENTS.md`, which imports `FOUNDATION.md` (and through it `IDENTITY.md`) and `company/RULES.md`, plus the `rules.yaml` stores. The `shared-skills` submodule was dropped on 2026-08-04. It is now a sibling repo, `../shared-skills`, installed as the Claude Code plugin `ss@shared-skills`. `context/` was removed on 2026-10-16, and its files moved into `company/`, `departments/` and `registry/` (source: my read-only read of the repo, 2026-11-27)

## 🧩 Single source of truth (per data type)
| Type | Location |
|------|----------|
| KRS, NIP, board | `context/company.md` |
| Snapshot finansowy | `context/finances.md` |
| Pełny budżet + actuals + runway | `context/finances/` |
| GDPR, umowy | `context/legal-entities.md` |
| Klienci konsultingu B2B | `context/200iq-labs/clients/<NAME>/` |
| Customers Qamera (SaaS) | `context/qamera/customers/<NAME>/` |
| Prospects Qamera | `context/qamera/prospects/<name>.md` |
| Tech stack / SaaS / koszty | `context/operations/tech-stack/` |

> [!contradiction] Where each data type lives
> Earlier: every data type has its home under `context/` (source: _raw/processed/2026-05-10_seed-second-brain-agentic-ai-system.md)
> New: there is no `context/`. Company profile, legal entities and finances sit in `company/data/` (`company.md`, `legal-entities.md`, `finanse/`) and the tech stack in `company/tech-stack/`. Qamera customers, prospects and partners are collections of the sales department (`departments/SPRZEDAZ/customers/`, `prospects/`, `partners/`). Each home is declared in a `placement.yaml` (at the root, in `company/` and in each department), and lint checks it. `placement_where` answers "where does this go" (source: my read-only read of the repo, 2026-11-27)

## 🧩 Iron rules
1. **No duplicates** — one fact, one file. Cross-reference with `see [file](path)`.
2. **Last updated header + Review cycle** in every context file. Older than 30 days → warning.
3. **Subdirs gdy plik puchnie** — extract sections to `context/<domain>/`.
4. **Outputs ≠ context** — generated analyses go to `outputs/`, never to `context/`.
5. **External refs** — for data in Google Drive / ClickUp: link + short description, no copies.
6. **Naming** — outputs: `YYYY-MM-DD-slug.md`.

> [!contradiction] Rules 3 and 4 point at `context/`
> Earlier: a growing file splits into `context/<domain>/`, and generated analyses go to `outputs/`, never to `context/` (source: _raw/processed/2026-05-10_seed-second-brain-agentic-ai-system.md)
> New: "one fact, one home" still opens the rules core, but `context/` is gone. Knowledge with no state of its own goes to `data/<topic>/` of the entity it concerns. `outputs/<domain>/` keeps only analyses that cut across entities. An agent's material about one client or project lives in that entity's folder (source: `FOUNDATION.md` and `company/RULES.md`, read 2026-11-27)

## 🧩 Folder per entity (client / customer / project)
```
<ENTITY>/
├── client.md / customer.md / project.md   # status + meta
├── catalog.md                              # local index
├── inbox/                                  # drop zone — process via /ingest
├── PROJECT/data/                           # processed knowledge
├── PROJECT/deliverables/                   # MD deliverables
├── output/                                 # generated artifacts — DO NOT read
├── archive/                                # processed raw — DO NOT read unless asked
└── offers/                                 # proposals, contracts
```
Prospect = single MD file (NOT folder).

> [!contradiction] Inside an entity
> Earlier: `client.md` / `customer.md` / `project.md` holds the status, and each entity has its own `inbox/` (source: _raw/processed/2026-05-10_seed-second-brain-agentic-ai-system.md)
> New: every entity has the same inside. `status.md` is the only source of truth about the state of work, `tasks/` holds one file per task, `decisions/` holds one file per decision, `data/` and `deliverables/` hold knowledge, and `catalog.md` is a file map with no state. `status_archive.md`, `output/`, `archive/` and `communication/` are not read by default. There is one `inbox/` at the repo root, outside git, taken in by the `sa-ingest` skill. Entities are departments (folders with `box.yaml`), their projects and collections, and the company itself, and nesting stops at department → project (source: `FOUNDATION.md`, read 2026-11-27)

## 🧩 Tech stack management
Per-tool YAML frontmatter required: `name`, `category`, `billing_type`, `cost_org`, `currency` (PLN/USD/EUR/GBP/CZK), `status`, `business_unit` (200iq-labs / qamera / shared), `owner` (pawel / przemek).

Generators:
- `_index.md` ← `tools/tech-stack/regen_index.py` (pre-commit hook, auto)
- `_dashboard.md` + `_costs.csv` + `exchange_rates.yaml` ← `tools/tech-stack/regen_dashboard.py` (manual, needs internet)

> [!contradiction] Tech-stack paths
> Earlier: the generators live in `tools/tech-stack/` (source: _raw/processed/2026-05-10_seed-second-brain-agentic-ai-system.md)
> New: the tech stack lives in `company/tech-stack/` and its generators in `company/tools/tech-stack/` (`regen_index.py`, `regen_dashboard.py`). The frontmatter fields above are unchanged (source: my read-only read of the repo, 2026-11-27)

## 🧩 Finances system
- **P&L on accrual basis** (cost = month of obligation). Cash flow separate.
- **Hybrid classification**: rules-first deterministic, LLM-fallback with learning loop (`examples.yaml`).
- **/finances close YYYY-MM** — 6-phase idempotent: PULL → CLASSIFY → REVIEW → ACCRUALS → COMMIT → REGENERATE.

> [!contradiction] Month-close command
> Earlier: the close runs as `/finances close YYYY-MM` (source: _raw/processed/2026-05-10_seed-second-brain-agentic-ai-system.md)
> New: it is the company skill `org-finances` (`company/skills/`), run as `/org-finances close YYYY-MM`, with the same six phases. The finance data sits in `company/data/finanse/` (source: `company/skills/org-finances/SKILL.md`, read 2026-11-27)

## 📒 Snapshot 2026-11-27
This is from my read-only read of the repo on 2026-11-27. It covers structure only: the repo's state and business data stay there.

### 🧩 Layout today
The default branch is now `main` (it was `master` in May).

```
agentic-ai-system/
├── AGENTS.md              # main rules file, read by every agent tool; imports the two below
├── CLAUDE.md              # one line: @AGENTS.md
├── FOUNDATION.md          # rules core (versioned); imports IDENTITY.md
├── IDENTITY.md            # who the agent is, which goal wins, mental models
├── rules.yaml             # foundation rule store (rules recorded from decisions and corrections)
├── placement.yaml         # where each kind of file lives; lint checks it
├── company/               # the company as one entity: RULES.md, rules.yaml, data/, tech-stack/,
│                          #   skills/ (org-*), extensions/, status.md, tasks/, decisions/
├── departments/           # one folder per department: box.yaml, department.md, status.md,
│   └── <DEPARTMENT>/      #   projects/, collections, skills/ with the department's prefix
├── skills/                # foundation skills (sa-*)
├── lessons/               # one lesson bank per foundation skill
├── agents/                # foundation roles (sa-*)
├── registry/              # decisions with no entity, generated task index, measures, processes
├── os-tasks/              # tasks the system keeps for itself
├── events/  sessions/  messages/   # event ledger, per-session records, messages
├── tools/                 # scripts, run as tools/py …; several link to department tools
├── private-skills/        # submodule (proprietary)
├── openspec/              # specifications (SDD)
├── outputs/<domain>/      # analyses that cut across entities
├── inbox/                 # drop zone at the root, outside git
└── .githooks/             # post-checkout and post-merge still run sync-skills
```

### 🧩 What changed since May
- **Three layers of rules, all read at once.** The rules core (`FOUNDATION.md`) says how to work with this knowledge base: boards, tasks, indexes, commits, session hygiene. The company part (`company/RULES.md`) carries everything that belongs to 200IQ LABS and Qamera AI. The rule stores (`rules.yaml` at the root, in `company/` and in entities) hold rules written down one record at a time from decisions and corrections. A change to `IDENTITY.md` counts as a change of doctrine and raises its version.
- **Foundation vs company.** The generic half is the foundation: the rules core, `tools/`, the `sa-*` skills with their lesson banks, and the roles. Since 2026-10-15 it has been developed live at the root instead of in a `template/` folder. The template the foundation is built from now sits as a hidden folder inside the agent-systems department. Company-specific additions to a foundation skill go into extension files (`company/extensions/<skill>.md`), never into the skill itself.
- **Entities replace `context/`.** A matter becomes an entity the first time it has a state of its own. Every entity has the same inside (see the callout under "Folder per entity"). Departments sit under `departments/`, and the company is one more entity in `company/`.
- **Skills come from six sources, each through one channel.** The `ss` plugin (prefix `ss:`), the `private-skills/` submodule, foundation `skills/` (`sa-`), `company/skills/` (`org-`), department `skills/` (department prefix), and the OpenSpec skills. `tools/sync-skills.sh` now wraps `tools/skill-links/` and links the symlinked sources into `.claude/`, `.github/`, `.cursor/` and `.agents/`. Feeding one source through two channels is a configuration error: it shows two skills with the same description.
- **Tasks and decisions are files.** A task is `tasks/<slug>.md` in its entity, its ID is reserved by a script, and the board shows it only through a generated section. A decision is one file in `decisions/`, and it changes only by a new decision that supersedes it. `/today` gives the daily report.
- **The system learns from corrections.** Every skill has a lesson bank. A lesson is an agent's conclusion that a person accepted, and accepted lessons bind every later run of the skill.
- **An audit trail beside git.** `events/` is an append-only ledger of typed events. `sessions/` holds one record per Claude Code session, which a script builds from the transcript and git, with no conversation content.
- **Several people and sessions work at once.** The rules assume that the people here need not know git. The agent tells them where their work is ("still only on your computer", "with the team"), not what git did with it.
- **A factory department** takes a task handed to it through spec, build and review stages to a pull request in the target repo.
- **May commands, today.** `/finances close` became `/org-finances close`. `/sync-prospects` and `/sync-customers` became the sales skills `sprzedaz-sync-prospects` and `sprzedaz-sync-customers`. `/ingest` became the foundation skill `sa-ingest`. `/daily-analyze`, `/meeting-analyze` and `/weekly-update` remain, joined by `/today` and `/lint`.
- **The README is behind.** `README.md` still draws the old `context/` tree. `AGENTS.md`, `FOUNDATION.md` and `company/RULES.md` are current.

## 📒 Snapshot 2026-05-10
- Branch `master` clean.
- Qamera AI's code lives in a separate product repo, not in this one.
- On 2026-11-27 I cut this snapshot's business lines (customers, projects, finances, legal and marketing decisions). They stay in the private repo.

## 🧩 Glossary
- **PSA** — Prosta Spółka Akcyjna.
- **Qamera AI** — flagship SaaS (formerly Shorts Lab) — virtual photo studio.
- **200IQ LABS** — parent PSA.
- **Region (sync)** — block between `<!-- AIRTABLE:START/END -->` or `<!-- STRIPE:START/END -->` markers; ONLY this region syncs.
- **Accrual basis** — cost in month of obligation, not payment.

## 🔗 Links
- [[Agentic AI Repos]] — hub
- [[agentic-ai-private]] — sibling repo for PLSoft
- [[Agentic Skills Submodules]] — shared-skills + private-skills
- [[Qamera AI]] — product
- [[Agentic Systems]] — architecture principles
- [[OpenSpec]] · [[Claude Code]]
- [[Open Hive Playbooks — Fit for My Agent Systems]] — which Open Hive sales playbooks this repo already covers and what to build next (2026-11-27)
