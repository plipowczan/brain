---
title: agentic-ai-private — Repository Snapshot for Second Brain
source_repo: C:\PROJEKTY\agentic-ai-private
exported_at: 2026-05-10
owner: Paweł Lipowczan
purpose: Single-file dump describing the private AI advisory repo (PLSoft + Personal). Designed to be ingested into a second-brain system (Obsidian / Notion / Logseq / vector store) as one document or split by H2 headings.
tags: [second-brain, plsoft, personal, ai-advisory, claude-code, knowledge-base]
redacted: "2026-11-27: contact details, tax IDs, pricing, legal entities, finances, clients, personal projects and tax filings removed; the private repo keeps the original"
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
- Contact details: [redacted 2026-11-27]
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
├── legal-entities.md          # PLSoft, 200IQ LABS PSA, one historical company
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
│   └── projects/              # personal projects
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
| PKD | 62.01.Z |
| Industry | IT — consulting, automation, AI |
| Active since | 2008 |
| Location | Poland (remote) |

> [redacted 2026-11-27: tax IDs, VAT/tax/ZUS status, pricing and team — kept in the private repo]

Specializations: Make / n8n / Python automation, AI integrations (OpenAI, Claude, Qdrant), chatbots/voicebots (VAPI, RAG), system integrations (SQL Server, BigQuery, Airtable), no-code/low-code, backend (Python, .NET, Node.js). Approach: code-first; no-code only when client must self-maintain.

Services: process audit, solution design, implementation, technical support (MRR), project management, workshops/training.

> [redacted 2026-11-27: current phase and plans — kept in the private repo]

# 5. Legal entities

> [redacted 2026-11-27: entity assets, cap table, people's names and planned changes — kept in the private repo]

# 6. Finances (PLSoft)

> [redacted 2026-11-27: goals, revenue, costs, bank accounts and accountant — kept in the private repo]

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
- Engagement model: value-based pricing. One-off projects (Quick Wins / medium / large), workshops (~20h), retainer/MRR. Two paths: Standard (clear scope → quick offer) and Discovery (paid workshop → analysis → offer).

# 9. Project portfolio (delivered)

Curated wzorce (full details in `context/projects-portfolio.md`):

- **Note Taker + Add-ons** — Make + Airtable + Fireflies + Claude 3.5 Sonnet. Meeting notes pipeline.
- **Lead Generator** — n8n + Snov.io + Apollo + The Company API.
- **Context-based Chatbot** — VAPI + n8n + OpenAI + Qdrant; 24/7, 70%+ automation.
- **PHU Impex integration** — Make Agent + Python + SQL Server + Airtable + BigQuery; real-time, 1 UI for 3, BI-ready.
- **Frontdesk AI** — Make + OpenAI + Gmail/Outlook; mail triage and routing.
- **Document automations** — a PV installer, a tourism company. Make + n8n + Airtable + Google Docs + Autenti.
- **HRM** — Airtable + Make + Slack + Email; leaves, sick days, availability.
- **Lead Enrichment** — n8n + Perplexity + CRM connectors.
- **Surveys & satisfaction** — Tally + Airtable + Make + OpenAI.

Case studies highlights:
- Production company invoice automation: −95% errors, −90% time, 100% automation.
- Event agency offer automation: +50% speed, scaled 3 → 25–30 people.
- Trading firm integration: real-time data, 1 UI for 3, BI-ready.

# 10. Active clients (snapshot 2026-05-04)

> [redacted 2026-11-27: client list, project status and client notes — kept in the private repo]

# 11. Active own projects (snapshot 2026-05-05)

From `context/plsoft/projects/_index.md`:

| Project | Status | Last activity |
|---|---|---|
| VALUE_BUILDERS | Active — edition #2 framework refined | 2026-04-16 |
| TECH_NEWS_WEEKLY | Active | 2026-04-15 |
| NOCODE_POLAND_4 | Active — conference talk | 2026-05-05 |

> [redacted 2026-11-27: one entity-transition project, completed tax filings and personal projects — kept in the private repo]

Naming: use **"Value Builders"** (not "Startup Builders") in external comms.

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

Decks live in `slides/`, not in client/project folders. Linkage is via the `context` field in `brief.md` frontmatter (e.g. `context: clients/<client>`).

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
- Companion product/company repo `agentic-ai-system` (200IQ LABS / Qamera AI) is separate.
- Today's working date for this snapshot: **2026-05-10**.
- Naming rules: Value Builders (not Startup Builders), Qamera AI (the product), 200IQ LABS (the company).
