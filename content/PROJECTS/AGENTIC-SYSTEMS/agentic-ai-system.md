---
title: "agentic-ai-system"
date: 2026-05-10
enableToc: true
openToc: true
tags: ["project", "ai", "agents", "200iq-labs", "qamera", "claude-code"]
type: basic-note
source: "_raw/inbox/2026-05-10-seed-second-brain-agentic-ai-system.md"
agent-created: true
summary: "200IQ LABS PSA multi-agent advisory repo — context, tools, orchestration for Qamera AI"
---
# agentic-ai-system

## 🗒️ Description
Multi-agent advisory system for **200IQ LABS PSA** (PSA developing **Qamera AI** — AI photo studio SaaS). One of three repos in the [[Agentic AI Repos]] cluster.

Founders: Paweł Lipowczan (CTO) + Przemek Trybała (CEO). PSA founded 2026-02-16.

Repo: `github.com/200iqlabs/agentic-ai-system` (private). Works with: Claude Code, GitHub Copilot, Cursor, Antigravity (skills symlinked via `tools/sync-skills.sh`).

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

## 🧩 Iron rules
1. **No duplicates** — one fact, one file. Cross-reference with `see [file](path)`.
2. **Last updated header + Review cycle** in every context file. Older than 30 days → warning.
3. **Subdirs gdy plik puchnie** — extract sections to `context/<domain>/`.
4. **Outputs ≠ context** — generated analyses go to `outputs/`, never to `context/`.
5. **External refs** — for data in Google Drive / ClickUp: link + short description, no copies.
6. **Naming** — outputs: `YYYY-MM-DD-slug.md`.

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

## 🧩 Tech stack management
Per-tool YAML frontmatter required: `name`, `category`, `billing_type`, `cost_org`, `currency` (PLN/USD/EUR/GBP/CZK), `status`, `business_unit` (200iq-labs / qamera / shared), `owner` (pawel / przemek).

Generators:
- `_index.md` ← `tools/tech-stack/regen_index.py` (pre-commit hook, auto)
- `_dashboard.md` + `_costs.csv` + `exchange_rates.yaml` ← `tools/tech-stack/regen_dashboard.py` (manual, needs internet)

## 🧩 Finances system
- **P&L on accrual basis** (cost = month of obligation). Cash flow separate.
- **Hybrid classification**: rules-first deterministic, LLM-fallback with learning loop (`examples.yaml`).
- **/finances close YYYY-MM** — 6-phase idempotent: PULL → CLASSIFY → REVIEW → ACCRUALS → COMMIT → REGENERATE.

## 📒 Snapshot 2026-05-10
- Branch `master` clean. Recent commits: blog 200IQ finances, JustIdea ingest discovery, PrestaShop one-pager + IdoSell brief, MCP qamera-ai-hetzner Streamable HTTP fix.
- Active projects: `ECOMMERCE_WARSAW_2026`, `QAMERA_AI` (strategic; code lives in `shorts-lab-ai/saas-platform`).
- Active Qamera customers: LAVEL (migrated 2026-04-22). Miss Lou + FEBA pending Airtable add.
- Conferences May 2026: No-Code Poland (7-8.05), InfoShare.
- Runway May–June 2026: secured.
- Rejestr Akcjonariuszy PSA: Kancelaria Smolski, created 2026-04-28. 7-day reporting obligation (Art. 300³³ KSH), 100 PLN/entry.
- Marketing: Meta Ads off (decision close 2026-04). Cursor → Claude migration planned (90 EUR cap).

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
