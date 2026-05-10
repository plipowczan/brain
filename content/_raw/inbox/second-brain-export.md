---
title: agentic-ai-private — Repository Snapshot for Second Brain
source_repo: C:\PROJEKTY\agentic-ai-private
exported_at: 2026-05-10
owner: Paweł Lipowczan
purpose: Single-file dump describing the private AI advisory repo (PLSoft + Personal). Designed to be ingested into a second-brain system (Obsidian / Notion / Logseq / vector store) as one document or split by H2 headings.
tags: [second-brain, plsoft, personal, ai-advisory, claude-code, knowledge-base]
---

# 1. What this repository is

`agentic-ai-private` is the **private multi-agent advisory system** for Paweł Lipowczan. It pairs:

- **Shared agent skills** (loaded as Claude Code skills) — domain experts (CFO, Tax Advisor, Legal, Marketing, Business Consultant, LinkedIn Content, Coach The Five, etc.)
- **Private context** (`context/`) — facts about the business, clients, projects, brand, personal goals.

Scope of this repo is strictly:
- **PLSoft** (JDG) — independent IT consulting, automation, AI integration.
- **Personal** — goals, learning, career, personal brand.

Out of scope (handled in a separate repo `agentic-ai-system`): **200IQ LABS PSA** and its product **Qamera AI** (formerly "Shorts Lab" → product renamed to Qamera AI; company renamed to 200IQ LABS).

Owner profile:
- Paweł Lipowczan, Software Architect & Technology Advisor (PLSoft JDG), CTO @ 200IQ Labs PSA.
- Email: pawel@lipowczan.pl, mobile: +48 501 039 643, LinkedIn: pawellipowczan.
- Portfolio: https://pawel.lipowczan.pl, consulting: https://konsultacje.lipowczan.pl, calendar: https://app.zencal.io/u/pl/konsultacja?lang=pl.

# 2. Repository structure (top-level)

```
agentic-ai-private/
├── CLAUDE.md                  # Project instructions for Claude Code
├── .env.example
├── .githooks/                 # post-checkout, post-merge
├── .gitmodules                # 2 submodules
├── shared-skills/             # submodule → github.com/200iqlabs/shared-skills
├── private-skills/            # submodule → github.com/200iqlabs/private-skills
├── openspec/                  # OpenSpec (SDD) workspace
├── slides/                    # Marp-based slide decks (PDF/HTML)
│   ├── config.yaml
│   ├── project.md
│   ├── themes/                # plsoft-dark.css generated from brand reference
│   ├── workspace/<slug>/
│   ├── output/<slug>.pdf
│   ├── archive/<slug>/
│   └── _explore/<slug>-ideas.md
└── context/                   # All personal/business knowledge (see §3)
```

Submodules:
- `shared-skills` → `https://github.com/200iqlabs/shared-skills.git`
- `private-skills` → `https://github.com/200iqlabs/private-skills.git`

# 3. Context layout (knowledge folders)

```
context/
├── author-profile.md          # LinkedIn voice & writing style
├── consultant-profile.md      # Who Paweł is professionally
├── company.md                 # PLSoft (JDG) basics
├── finances.md                # PLSoft money
├── legal-entities.md          # PLSoft, 200IQ LABS PSA, EnterPrize Sp. z o.o.
├── projects-portfolio.md      # Past delivered projects (case studies)
├── process-mapping.md
├── brand/
│   ├── brand-design.md
│   ├── tone-of-voice.md
│   ├── logo.svg
│   ├── linkedin-posting-strategy.md
│   ├── linkedin-analytics-2026-04-08.md
│   └── linkedin/              # published posts: YYYY-MM-DD-slug.md
│       └── drafts/            # unpublished drafts: slug.md (no date)
├── personal/
│   ├── goals.md
│   ├── learning.md
│   └── projects/              # personal projects (e.g. KANALIZACJA)
│       └── _index.md
└── plsoft/
    ├── clients/               # one folder per client + _index.md
    └── projects/              # one folder per own project + _index.md
```

Per-client / per-project folder template:
```
inbox/         # raw drop zone (process via /ingest)
data/          # processed knowledge (read freely)
deliverables/ # MD content for deliverables
output/        # generated artifacts (PDF, scripts) — DO NOT auto-read
archive/       # processed raw data — only on explicit request
project.md     # status / scope
catalog.md     # local index
client.md      # client-level facts (clients only)
```

# 4. PLSoft — Company (JDG)

| Parameter | Value |
|---|---|
| Name | PLSoft |
| Owner | Paweł Lipowczan |
| Form | Jednoosobowa Działalność Gospodarcza (JDG) |
| NIP | 5482378017 |
| REGON | 240836787 |
| PKD | 62.01.Z |
| Industry | IT — consulting, automation, AI |
| Active since | 2008 |
| Location | Ustroń, Śląskie, Polska (remote) |
| VAT | Czynny (PL + EU) |
| Tax | Ryczałt od przychodów ewidencjonowanych (12% IT, 8.5% szkolenia) |
| ZUS | Pełny |

Pricing:
- Hourly: 300 PLN/h netto
- Daily: 1 500 PLN/dzień
- Workshop (~20h): ~4 500 PLN
- Implementation (5–20h): hourly × hours
- Fix-price implementation: hourly × hours + 30%

Team: Paweł (owner) + Adam Kawecki (intern — primarily 200IQ Labs PSA work).

Specializations: Make / n8n / Python automation, AI integrations (OpenAI, Claude, Qdrant), chatbots/voicebots (VAPI, RAG), system integrations (SQL Server, BigQuery, Airtable), no-code/low-code, backend (Python, .NET, Node.js). Approach: code-first; no-code only when client must self-maintain.

Services: process audit, solution design, implementation, technical support (MRR), project management, workshops/training.

Current phase (Q1–Q2 2026): Paweł focused mostly on 200IQ Labs PSA (CTO, 30%). PLSoft runs on small consulting jobs. Plan: suspend JDG after invoicing migrates to PSA.

# 5. Legal entities

## 5.1 PLSoft (JDG) — Paweł Lipowczan
- See §4. Active since 2008. Personal full liability.
- Assets in JDG:
  - **EV car (leasing)** — operational, ~3 000 PLN brutto/mo, ~20 instalments left, VAT 100% deducted.
  - **ICE car (środek trwały)** — leasing 06/2021–06/2024, then bought out. Amortisation status to be confirmed with księgowa.
- Office: owned by Paweł (private). Currently leased PSA ↔ JDG; planned switch to private person ↔ PSA.
- Legal needs: cession of EV leasing JDG → PSA; preparing JDG suspension.

## 5.2 200IQ LABS PSA
- Form: Prosta Spółka Akcyjna. Registered 2026-02-16.
- Cap table: Przemek Trybała (CEO, 60%), Paweł Lipowczan (CTO, 30%), Adam (10%).
- Profile: AI SaaS — virtual photo studio (**Qamera AI**, qamera.ai). B2B SaaS (subscriptions + credit packs + managed service).
- NIP / KRS / tax form: TBD.
- Relationship to PLSoft: Paweł as CTO will provide services via planned **umowy o dzieło z przeniesieniem praw autorskich** (Paweł and Przemek both).

## 5.3 EnterPrize Sp. z o.o. (historical)
- KRS 0000615907, founded 2016-04-26. Capital 5 000 PLN.
- Wspólnicy: Dawid Roman Policha (50%), Przemysław Łukasz Trybała (50%).
- Status: plan — IP transfer to PSA → liquidation.

## 5.4 Planned changes (as of 2026-03-30)
1. Suspend PLSoft JDG; invoice clients from PSA.
2. Cede EV leasing JDG → PSA.
3. Move utility/security/internet costs to PSA.
4. Office lease: JDG → private person (Paweł).

# 6. Finances (PLSoft)

Goals:
- Short-term (Q2 2026): 20 000 PLN netto.
- Long-term (end 2026): 100 000 PLN netto. Context: focus is on 200IQ Labs PSA.

Revenue mix: ~70% projects/implementations (declining, transition phase), ~20% workshops/training (growing), ~10% retainer/MRR (to grow).

2026 revenue history:
| Month | Net (PLN) | Source |
|---|---|---|
| Jan | 28 000 | Automation House (last large project) |
| Feb | — | — |
| Mar | 1 000 | Drobne zlecenia |
| Apr | ~4 500+ | Workshop + small jobs |

Fixed monthly costs (~3 664 PLN):
- EV leasing 2 500 PLN, accounting 319 PLN, fuel 200 PLN, internet 99 PLN, property protection 80 PLN, Claude Code ~370 PLN, GitHub Copilot ~41 PLN, TextExpander ~13 PLN, MS Family 365 ~42 PLN, hosting 0 (Vercel free).

Bank accounts: mBank firmowe (PLN, main), mBank private (PLN), Revolut (multi), Zen (multi), Crypto.com, Nexo.

Accountant: **Joanna** (forma: "Ty").

# 7. Brand & content

Profile (see `context/author-profile.md`):
- Voice: practitioner, no fluff, concrete; PL/EN technical mix.
- Values: technological agnosticism, transparency, measurability, building client independence.
- Audience: business owners optimising processes, CTOs / IT managers, devs, AI enthusiasts.
- Hashtags: contextual, generated by `linkedin-content` skill. Common: `#ai #tech #dev #claudecode #automatyzacja #agenticcoding #buildInPublic`.

Writing style essentials:
- Plain language. Short, hard-hitting sentences. Active voice. Bullet lists.
- Data and examples instead of generalities. No em dash, no metaphors, no clichés, no rhetorical questions.

Brand resources in `context/brand/`: `brand-design.md` (colors, typography, visual guidelines), `tone-of-voice.md`, `logo.svg`, `linkedin-posting-strategy.md`, `linkedin-analytics-2026-04-08.md`. Published posts under `linkedin/YYYY-MM-DD-slug.md`; drafts under `linkedin/drafts/slug.md` (rename + move when published).

# 8. Consultant profile (Paweł)

- 17+ years in IT, 100+ projects, 50+ clients. Path: .NET/SQL Server → medical systems → CTO at ShareFund → Technical Lead at Tigers/Automation House → independent consultant.
- Stack: Make, n8n, Airtable, VAPI, AION; OpenAI (GPT-4o, o1), Claude (Sonnet, Opus), Perplexity, Qdrant; Python/FastAPI, .NET, Node.js, SQL Server, BigQuery; React/Next.js/Supabase (learning); REST/webhooks, Google Docs, Autenti, Slack, Gmail/Outlook; Git, Docker, Azure, Claude Code, GitHub Copilot; Claude Code skills/plugins, OpenSpec.
- Philosophy "Technologia jako Dźwignia": (1) Problem before Solution, (2) Measurability of the Intangible, (3) Technological Agnosticism, (4) Partnership through Transparency, (5) Evolution not Revolution.
- Engagement model: value-based pricing. One-off projects (Quick Wins / medium / large), workshops (~20h, ~4 500 PLN), retainer/MRR (500–6 000 PLN/mo). Two paths: Standard (clear scope → quick offer) and Discovery (paid workshop → analysis → offer).

# 9. Project portfolio (delivered)

Curated wzorce (full details in `context/projects-portfolio.md`):

- **Note Taker + Add-ons** — Make + Airtable + Fireflies + Claude 3.5 Sonnet. Meeting notes pipeline.
- **Lead Generator** — n8n + Snov.io + Apollo + The Company API.
- **Context-based Chatbot** — VAPI + n8n + OpenAI + Qdrant; 24/7, 70%+ automation.
- **PHU Impex integration** — Make Agent + Python + SQL Server + Airtable + BigQuery; real-time, 1 UI for 3, BI-ready.
- **Frontdesk AI** — Make + OpenAI + Gmail/Outlook; mail triage and routing.
- **Document automations** — Energocentrum (PV), Manufaktura Przygody (tourism). Make + n8n + Airtable + Google Docs + Autenti.
- **HRM** — Airtable + Make + Slack + Email; leaves, sick days, availability.
- **Lead Enrichment** — n8n + Perplexity + CRM connectors.
- **Surveys & satisfaction** — Tally + Airtable + Make + OpenAI.

Case studies highlights:
- Production company invoice automation: −95% errors, −90% time, 100% automation.
- Event agency offer automation: +50% speed, scaled 3 → 25–30 people.
- Trading firm integration: real-time data, 1 UI for 3, BI-ready.

# 10. Active clients (snapshot 2026-05-04)

From `context/plsoft/clients/_index.md` (4 clients, 5 projects):

| Client | Active project | Status | Last activity |
|---|---|---|---|
| TECH TO THE RESCUE (TTTR) | diagnoza-strategiczna-IT | All sessions DONE (S2 14.04, S3 15.04, IM 21.04, S4 Andrzej 29.04). Pre-read 30.04, presentation 2026-05-12 16:00 | 2026-04-29 |
| JAREK_KALASZ (Aireveo) | architektura-agentowa | Discovery — warm lead, awaiting meeting (end of May 2026) | 2026-04-16 |
| ANNA_JEGLINSKA | warsztat-analityczno-projektowy | On Hold — DIY mode, reminder ~every 2 months | 2026-04-16 |
| JAKUB_GLAB | warsztat-ai-optymalizacja | Active — feedback meeting 04.05; key decisions: Sonnet 4.6, buy Clay, more Teams licences. Paweł off until 12.05 | 2026-05-04 |

Notes carried in memory:
- Tech To The Rescue is abbreviated **TTTR** (not TTR). Sessions are conversation-style (TO-BE > AS-IS); diagrams produced ex-post from transcripts.
- Jakub Głąb: 20k PLN paid for 66.67h, scope > budget, 100% self-service. Vault is git repo `C:\PROJEKTY\vsoft-vault` (migrated 2026-04-17 from Google Drive due to Cowork + DriveFS incompatibility). Repo `plipowczan/vsoft-vault`: Jakub has permanent collaborator access.

# 11. Active own projects (snapshot 2026-05-05)

From `context/plsoft/projects/_index.md`:

| Project | Status | Last activity |
|---|---|---|
| JDG_PSA_PRZEJSCIE | Discovery — waiting for tax-advisor consultation | 2026-04-27 |
| VALUE_BUILDERS | Active — edition #2 framework refined | 2026-04-16 |
| TECH_NEWS_WEEKLY | Active | 2026-04-15 |
| NOCODE_POLAND_4 | Active — talk 7.05; slides deadline 5.05 15:00; VIP dinner RSVP 4.05 15:00 | 2026-05-05 |

Completed:
- **PIT_38** (2026-04-28) — PIT-38 for 2025 filed and accepted by MF (UPO d5979f6b…). Tax 172 PLN paid 28.04. Crypto cost buffer to 2026: 162 948,08 PLN. Section C net loss: 966,92 PLN.

Naming: use **"Value Builders"** (not "Startup Builders") in external comms. Full Startup Builders #2 program lives in a shared Google Doc (not an attachment, not in repo).

## Personal projects
- **KANALIZACJA** (Active) — new sewer connection in Ustroń (option B 6m/3m) or pipe replacement (option A/A+ ~22m). Bottleneck: finding contractor. Active lead: Rurtom (Tomasz Trembla) — project sent 2026-04-21.

# 12. Workflow conventions

## Index protocol (clients & projects)
1. Before any client work → read `clients/_index.md`.
2. Before working with a specific client → read their `catalog.md`.
3. Never scan client folders directly — use indexes.
4. After creating/editing files → update `catalog.md` and `_index.md`.
5. Respect project status in `project.md` — skip Completed / On Hold.

## `/ingest` workflow
Triggered by `/ingest`, `/ingest NAME`, or `/ingest NAME <text>`.
1. Scan `inbox/` (all clients/projects, or a specific one) — or process inline text.
2. Identify file type, read `client.md` for active projects.
3. Route to project (auto if 1 active, analyse content if 2+, ask if ambiguous).
4. Update/create knowledge files; produce ingest summary.
5. Move raw files to `archive/` with date prefix; inline text → `archive/YYYY-MM-DD_inline-<type>.md`.
6. Update `catalog.md` and `_index.md`.
7. Report what changed.

## Slides workflow (Marp)
- `/slides:init` — bootstrap, generate brand theme CSS.
- `/slides:explore <topic>` — brainstorm to `_explore/`.
- `/slides:new <slug> [--context <metadata>]` — create workspace; `<metadata>` is a free-form tag (e.g. `projects/nocode-poland-4`), not a folder path.
- `/slides:draft [instruction]` — generate/iterate plain markdown.
- `/slides:build [--html]` — transform to Marp `slides.md`, render PDF (and HTML).
- `/slides:tweak <instruction>` — layout-only edits.
- `/slides:archive [slug]` — move workspace; keep PDF in `output/`.

Decks live in `slides/`, not in client/project folders. Linkage is via the `context` field in `brief.md` frontmatter (e.g. `context: clients/tttr`).

## Communication style (operating defaults)
- Language: Polish (technical terms PL/EN).
- Tone: direct, concrete, professional yet friendly.
- Code: always English.
- Format: short by default, expand on request.
- Diagrams: Mermaid for processes/architecture; tables for comparisons.

## Data freshness rule
Every context file has a "Last updated" header. If older than 30 days, flag staleness before advising on it.

# 13. Available agent skills (mapped to private context)

Loaded from `shared-skills/skills/` (and `private-skills/skills/`):

- **CFO** — financial analysis for JDG (revenue, costs, taxes).
- **Tax Advisor** — PIT, VAT, ZUS, health insurance for JDG; supports `/analiza`, `/porównanie`, `/optymalizacja`, `/kalendarz`, `/brief`.
- **Legal** — client contracts, B2B agreements, IP, RODO; supports `/analiza`, `/draft`, `/brief`, `/owu`, `/checklist`, `/porównanie`.
- **Marketing** — PLSoft brand content, newsletter (Tech News Weekly).
- **Business Consultant** — strategy, client acquisition, solution architecture, estimation.
- **LinkedIn Content** — personal-brand posts (`linkedin-content` skill).
- **Coach The Five** — Tomasz Karwatka methodology for the first 5 years; also applicable to PLSoft growth.
- **Newsletter to LinkedIn** — `/newsletter-post` to promote latest Tech News Weekly issue.
- **Slides** — Marp PDF decks (see §12).
- **Process Mapping** — Excalidraw / Mermaid process flow diagrams.

Routing: when a query touches multiple domains, load all relevant skills, synthesise, flag conflicts. Queries about 200IQ LABS / Qamera AI → redirect to `agentic-ai-system` repo.

# 14. Quick facts to keep in second brain

- Repo path: `C:\PROJEKTY\agentic-ai-private` (Windows 11, PowerShell-first).
- Git default branch: `master`. User: `plipowczan`.
- Two submodules from `200iqlabs` org: `shared-skills`, `private-skills`.
- Companion repo `vsoft-vault` lives at `C:\PROJEKTY\vsoft-vault` (Jakub Głąb collaboration).
- Companion product/company repo `agentic-ai-system` (200IQ LABS / Qamera AI) is separate.
- Today's working date for this snapshot: **2026-05-10**.
- Naming rules: TTTR (not TTR), Value Builders (not Startup Builders), Qamera AI (the product), 200IQ LABS (the company).
