---
title: "agentic-ai-private"
date: 2026-05-10
enableToc: true
openToc: true
tags: ["project", "ai", "agents", "plsoft", "personal", "claude-code"]
type: basic-note
source: "_raw/inbox/second-brain-export.md"
agent-created: true
summary: "PLSoft (JDG) + personal multi-agent advisory repo — separate from 200IQ LABS"
---
# agentic-ai-private

## 🗒️ Description
Private multi-agent advisory system for **PLSoft (JDG)** + **personal** scope. One of three repos in the [[Agentic AI Repos]] cluster.

Strict scope:
- **PLSoft** — independent IT consulting, automation, AI integration.
- **Personal** — goals, learning, career, personal brand.

Out of scope: 200IQ LABS PSA + Qamera AI (handled in [[agentic-ai-system]]).

Repo path: `C:\PROJEKTY\agentic-ai-private`. Default branch `master`. Owner: Paweł Lipowczan.

## 🧩 Repository structure
```
agentic-ai-private/
├── CLAUDE.md
├── shared-skills/             # submodule
├── private-skills/            # submodule
├── openspec/                  # SDD workspace
├── slides/                    # Marp decks (PDF/HTML)
│   ├── workspace/<slug>/  output/<slug>.pdf  archive/<slug>/  _explore/<slug>-ideas.md
└── context/                   # all PLSoft + personal knowledge
    ├── author-profile.md      # LinkedIn voice
    ├── consultant-profile.md  # professional profile
    ├── company.md             # PLSoft basics
    ├── finances.md
    ├── legal-entities.md      # PLSoft, 200IQ LABS PSA, EnterPrize Sp. z o.o.
    ├── projects-portfolio.md  # delivered case studies
    ├── brand/                 # tone-of-voice, design, LinkedIn analytics + posts/drafts
    ├── personal/{goals,learning,projects/}
    └── plsoft/{clients/,projects/}    # one folder per entity + _index.md
```

## 📒 PLSoft (JDG) facts
| Parameter | Value |
|-----------|-------|
| NIP | 5482378017 |
| REGON | 240836787 |
| PKD | 62.01.Z |
| Active since | 2008 |
| Location | Ustroń, Śląskie (remote) |
| VAT | Czynny (PL + EU) |
| Tax | Ryczałt (12% IT, 8.5% szkolenia) |
| ZUS | Pełny |

Pricing: 300 PLN/h netto, 1 500 PLN/dzień, ~4 500 PLN warsztat (~20h). Fix-price implementation: hourly × hours + 30%.

Team: Paweł + Adam Kawecki (intern, primarily 200IQ Labs work). Accountant: **Joanna**.

Stack: Make / n8n / Python automation, AI integrations (OpenAI, Claude, Qdrant), chatbots/voicebots (VAPI, RAG), system integrations (SQL Server, BigQuery, Airtable), backend (Python, .NET, Node.js). Code-first; no-code only when client must self-maintain.

## 📒 Legal entities tracked
1. **PLSoft (JDG)** — Paweł, full personal liability. Assets: EV leasing (operational, ~3000 PLN brutto/mo, ~20 instalments left, VAT 100% deducted), ICE car (środek trwały, leasing 06/2021–06/2024 then bought out). Office: owned privately.
2. **200IQ LABS PSA** — registered 2026-02-16. Cap table: Przemek 60% / Paweł 30% / Adam 10%. Profile: AI SaaS Qamera AI (qamera.ai).
3. **EnterPrize Sp. z o.o.** (historical) — KRS 0000615907, founded 2016-04-26, 5000 PLN capital. Wspólnicy: Dawid Policha 50% / Przemek Trybała 50%. Plan: IP transfer to PSA → liquidation.

## 📒 Planned legal/finance changes (as of 2026-03-30)
1. Suspend PLSoft JDG; invoice clients from PSA.
2. Cede EV leasing JDG → PSA.
3. Move utility/security/internet costs to PSA.
4. Office lease: JDG → private person (Paweł).

## 📒 PLSoft finances 2026
- Q2 goal: **20 000 PLN netto**. Year-end goal: **100 000 PLN netto** (focus is on PSA).
- Revenue mix: ~70% projects (declining), ~20% workshops (growing), ~10% retainer/MRR (to grow).
- Jan: 28k (Automation House — last large project). Feb: —. Mar: 1k. Apr: ~4.5k+.
- Fixed monthly costs ~3 664 PLN (EV leasing 2500, accounting 319, fuel 200, internet 99, security 80, Claude Code ~370, Copilot ~41, TextExpander ~13, MS Family 365 ~42, hosting 0).
- Banks: mBank firmowe + private (PLN), Revolut multi, Zen multi, Crypto.com, Nexo.

## 📒 Active PLSoft clients (snapshot 2026-05-04)
| Client | Project | Status |
|--------|---------|--------|
| TECH TO THE RESCUE (TTTR) | diagnoza-strategiczna-IT | All sessions DONE; presentation 2026-05-12 16:00 |
| JAREK_KALASZ (Aireveo) | architektura-agentowa | Discovery — warm lead, meeting end of May |
| ANNA_JEGLINSKA | warsztat-analityczno-projektowy | On Hold — DIY mode |
| JAKUB_GLAB | warsztat-ai-optymalizacja | Active — 20k PLN paid for 66.67h. Vault: `C:\PROJEKTY\vsoft-vault` (git, migrated 2026-04-17 from Google Drive). Jakub has collaborator access. |

Naming: TTTR not TTR. Sessions are conversation-style (TO-BE > AS-IS); diagrams produced ex-post from transcripts.

## 📒 Active own projects (snapshot 2026-05-05)
| Project | Status |
|---------|--------|
| JDG_PSA_PRZEJSCIE | Discovery — waiting for tax-advisor |
| VALUE_BUILDERS | Active — edition #2 framework refined |
| TECH_NEWS_WEEKLY | Active |
| NOCODE_POLAND_4 | Active — talk 7.05; slides deadline 5.05 15:00 |

Completed: **PIT_38** (2026-04-28) filed and accepted by MF (UPO d5979f6b…). Tax 172 PLN. Crypto cost buffer to 2026: 162 948,08 PLN. Section C net loss: 966,92 PLN.

Naming: **"Value Builders"** (not "Startup Builders") in external comms.

Personal: **KANALIZACJA** (Active) — new sewer connection in Ustroń. Active lead: Rurtom (Tomasz Trembla), project sent 2026-04-21.

## 🧩 Workflow conventions
- **Index protocol** — read `_index.md` → `catalog.md` → file. Never scan folders directly. Update both after edits.
- **/ingest** — inbox → data + catalog/index update + raw → archive with date prefix.
- **Slides workflow** — `/slides:init` → `:explore` → `:new` → `:draft` → `:build [--html]` → `:tweak` → `:archive`. Decks live in `slides/`, not in client folders. Linkage via `context: clients/tttr` field in `brief.md` frontmatter.
- **Communication** — Polish (technical PL/EN), direct/concrete/professional, code in English, short by default.
- **Data freshness** — every context file has "Last updated"; older than 30 days → flag staleness.

## 🔗 Links
- [[Agentic AI Repos]] — hub
- [[agentic-ai-system]] — sibling repo for 200IQ LABS / Qamera AI
- [[Agentic Skills Submodules]] — shared-skills + private-skills
- [[PLSoft]] — JDG profile
- [[About]] — owner profile
- [[Tech News Weekly]] · [[Value Builders]]
