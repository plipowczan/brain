---
title: "Agentic Skills Submodules"
date: 2026-05-10
enableToc: true
openToc: true
tags: ["project", "ai", "skills", "claude-code", "open-source", "200iq-labs"]
type: basic-note
source: "_raw/inbox/2026-05-10-seed-second-brain-skills-submodules.md"
agent-created: true
summary: "shared-skills (Apache 2.0) + private-skills (proprietary) — git submodules feeding both agentic-ai repos"
---
# Agentic Skills Submodules

## 🗒️ Description
Two git submodules feeding the agent system in [[agentic-ai-system]] and [[agentic-ai-private]]. One of three repos in the [[Agentic AI Repos]] cluster.

| Repo | Visibility | License | URL | Plugin name |
|------|-----------|---------|-----|-------------|
| **shared-skills** | Public | Apache 2.0 | `github.com/200iqlabs/shared-skills` | `200iqlabs-agent-skills` |
| **private-skills** | Private | UNLICENSED (proprietary) | `github.com/200iqlabs/private-skills` | `200iqlabs-private-skills` |

Both built on the [[Agent Skills]] standard (agentskills.io). Each skill = `skills/<name>/` with `SKILL.md` (YAML frontmatter + body). Auto-discovery via plugin manifest. Distribution: plugin marketplace (`/plugin marketplace add 200iqlabs/shared-skills`) or git submodule.

## 🧩 shared-skills (public, Apache 2.0)

Modular library of business advisory agents for founders and small teams. Forkable, installable as plugin or submodule.

### 13 skills
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

### Tools (CLI integrations)
- **`tools/clickup/`** — taski, daily, projekty
- **`tools/revolut/`** — transactions for CFO close (OAuth + private cert)
- **`tools/common/helpers.sh`** — shared bash utilities

> In `agentic-ai-system` we use repo-level `tools/` (Airtable, Stripe, finances, tech-stack, scheduler, qamera-mcp). The submodule `tools/` are used by skills directly. inFakt was refactored from CLI → MCP.

### Philosophy
- **Progressive disclosure** — metadata → body → references on-demand.
- **Pushy descriptions** — undertriggering > overtriggering. Better one trigger too many.
- **Phase 0 placeholders** — marketing + product-manager flagged "PLACEHOLDER".
- **Polish-first** — most agents (tax, legal, business consulting) target PL users.
- **CLI > MCP** — saves context window.

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

### MANDATORY skill-creation workflow
For new skills or significant edits: use `/skill-creator`. Do NOT hand-write `SKILL.md`.
1. `/skill-creator` — capture intent, interview, draft.
2. Generate min. 5 test prompts per agent.
3. Run evals + review.
4. Iterate on feedback + benchmarks.
5. Optimize description (target ≥ 80% triggering accuracy).

Can skip for typo fixes, reference file additions, date updates, reference-only changes.

### Recent commits (2026-05-10)
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

### Lifecycle
1. **Read** — IDE scans its own skill dir, loads `SKILL.md`, uses frontmatter `description` for auto-routing.
2. **Update** — `git submodule update --remote` → `./tools/sync-skills.sh` → commit new submodule SHAs.
3. **New skill** — create in submodule via `/skill-creator` → `git submodule update --remote` → add name to `.gitignore` (Synced agent skills section) → `./tools/sync-skills.sh`.

### Generic skills, local data
Skills NEVER hardcode paths to `context/operations/tech-stack/...`. They get data via canonical files (`finances.md`, `company.md`) declared in `## Context Dependencies`. This makes the skills cleanly forkable for users outside 200IQ LABS.

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
