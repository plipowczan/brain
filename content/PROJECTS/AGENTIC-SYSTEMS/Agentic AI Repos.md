---
title: "Agentic AI Repos"
date: 2026-05-10
enableToc: true
openToc: true
tags: ["project", "ai", "agents", "architecture", "claude-code", "skills"]
type: knowledge-note
source: "_raw/inbox/2026-05-10-seed-second-brain-skills-submodules.md"
agent-created: true
summary: "Hub: 3 repos (agentic-ai-system, agentic-ai-private, shared-skills+private-skills) forming 200IQ LABS + PLSoft agent infrastructure"
---
# Agentic AI Repos

## 🗒️ Description
Hub note describing the **three-repo agent infrastructure** Paweł operates as of 2026-05-10. Repos are linked by two git submodules (`shared-skills`, `private-skills`) symlinked into IDE skill directories (`.claude/`, `.github/`, `.cursor/`, `.agent/`).

This is the implementation layer of [[Agentic Systems]] — the architecture note describes principles; this note maps the actual repos.

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

## 🧩 Boundary rules
- **Skills are generic** — no hardcoded paths to repo-specific context. They consume canonical files (`finances.md`, `company.md`, etc.) via `## Context Dependencies`.
- **Context is local** — never lives in submodule. Each repo has its own `context/` (200IQ vs PLSoft).
- **Outputs ≠ context** — generated artifacts go to `outputs/`. Promotion to context only on user confirmation.
- **Single source of truth** — one fact, one file. Cross-reference with `see [file](path)`.
- **Routing boundary** — queries about Qamera AI / 200IQ LABS → `agentic-ai-system`. Queries about PLSoft / personal → `agentic-ai-private`.

## 🧩 Key shared agents (across both repos)
CFO, Tax Advisor, Legal, Business Consultant, LinkedIn Content, Marketing (Phase 2), Product Manager (Phase 2), Coach The Five (private), Process Mapping, Slides, Vibe Coding, Ingest, Find Skills, Environment Setup.

## 🔧 Key process skills
- `/ingest` — inbox → data + archive + catalog/index update
- `/sync-prospects` — Airtable ⇄ `qamera/prospects/` (bidir, additive-only)
- `/sync-customers` — Stripe → `qamera/customers/` (read-only mirror)
- `/finances close YYYY-MM` — 6-phase close (PULL → CLASSIFY → REVIEW → ACCRUALS → COMMIT → REGENERATE)
- `/daily-analyze`, `/meeting-analyze`, `/weekly-update`

## 📒 Snapshot 2026-05-10
- Branch: `master` (clean) on both repos.
- Active customers Qamera: LAVEL (migrated from legacy 2026-04-22).
- Runway May–June 2026 secured (UoD payout + 100k issuance confirmed 2026-05-04).
- PLSoft Q2 2026 goal: 20 000 PLN netto. Long-term 2026: 100 000 PLN netto.
- Plan: suspend PLSoft JDG, invoice clients from PSA, cede EV leasing JDG → PSA.

## 🔗 Links
- [[Agentic Systems]] — architecture / principles note
- [[agentic-ai-system]] — 200IQ LABS / Qamera AI
- [[agentic-ai-private]] — PLSoft / personal
- [[Agentic Skills Submodules]] — shared-skills + private-skills
- [[Qamera AI]] — flagship product
- [[PLSoft]] — JDG consulting practice
- [[Agent Skills]] — agentskills.io standard
- [[Awesome Claude Code]], [[Superpowers]], [[Karpathy Skills]]
