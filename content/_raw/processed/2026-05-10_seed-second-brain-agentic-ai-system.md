# Seed: agentic-ai-system → Second Brain

> Plik wsadowy do zaimportowania w second brain. Zbiera wszystko, czego potrzeba, by zrozumieć repo `agentic-ai-system` bez wchodzenia do kodu. Wygenerowany 2026-05-10.

---

## 1. TL;DR — czym jest to repo

**`agentic-ai-system`** to multi-agentowy system doradczy dla **200IQ LABS PSA** (firma rozwijająca **Qamera AI** — SaaS do AI product photography). Repo łączy:

- **Skille agentów** (CFO, Tax Advisor, Legal, Marketing, Business Consultant, Product Manager, LinkedIn Content, Coach The Five, ~100 skilli pomocniczych) — sourcowane z 2 submodułów: `shared-skills` (open source) i `private-skills` (proprietary).
- **Kontekst firmowy** (`context/`) — markdownowe pliki z faktami: finanse, prawo, klienci, prospects, projekty, brand, tech stack.
- **Narzędzia integracyjne** (`tools/`) — Python skrypty do Airtable, Stripe, Revolut, generatory dashboardów, hooki gita.
- **Routing/orchestrator** (`CLAUDE.md`) — pełna logika: kiedy który agent się aktywuje, gdzie żyją dane, konwencje folderów.

**Działa z:** Claude Code, GitHub Copilot, Cursor, Antigravity. Skille są symlinkowane do `.claude/skills/`, `.github/skills/`, `.cursor/skills/`, `.agent/skills/` przez `tools/sync-skills.sh`.

**Założyciele:** Paweł Lipowczan (CTO) i Przemek Trybała (CEO). Forma prawna: Prosta Spółka Akcyjna. Spółka założona 2026-02-16.

---

## 2. Architektura katalogów

```
agentic-ai-system/
├── CLAUDE.md                    # Orchestrator + routing rules (single source of truth)
├── README.md                    # Setup + day-to-day operations
├── shared-skills/               # Submodule: 200iqlabs/shared-skills (Apache 2.0)
├── private-skills/              # Submodule: 200iqlabs/private-skills
├── context/                     # Dane firmowe (markdown)
│   ├── company.md               # KRS, NIP, board, shareholders
│   ├── finances.md              # Snapshot finansowy (linkuje do finances/)
│   ├── finances/                # Pełny budżet + actuals + runway
│   │   ├── _dashboard.md        # ENTRY POINT (auto-generated)
│   │   ├── budget-2026.yaml
│   │   ├── cash-flow-2026.yaml
│   │   ├── accrued-liabilities.yaml
│   │   ├── caps.yaml
│   │   ├── rules.yaml
│   │   ├── examples.yaml
│   │   ├── transactions/<YYYY-MM>.yaml
│   │   └── monthly/<YYYY-MM>.md
│   ├── legal-entities.md        # GDPR, agreements, document backlog
│   ├── consultant-profile.md    # Profil konsultancki Pawła
│   ├── projects-portfolio.md    # Case studies
│   ├── author-profile.md        # LinkedIn author profile
│   ├── company/
│   │   ├── strategy.md
│   │   └── team.md
│   ├── product/                 # Qamera AI: overview, roadmap, users, competitors
│   ├── operations/
│   │   ├── kpis.md
│   │   ├── tech-stack/          # SaaS subscriptions per tool (single source kosztów)
│   │   │   ├── _index.md        # AUTO (pre-commit hook)
│   │   │   ├── _dashboard.md    # AUTO (manual regen)
│   │   │   ├── exchange_rates.yaml
│   │   │   └── tools/<slug>.md
│   │   ├── meeting-analysis/
│   │   ├── liga-tworcow-easy/
│   │   ├── ssh-tunnel-setup-*.md
│   │   ├── cloudflare-tunnel-config.md
│   │   └── rdp-setup.md
│   ├── brand/                   # tone-of-voice, design-system, logo, templates HTML
│   ├── meetings/                # Transkrypty + analizy (ingest source)
│   ├── 200iq-labs/
│   │   ├── clients/<NAME>/      # Konsulting B2B (folder per klient)
│   │   └── prospects/<name>.md  # Leady konsultingowe (single MD per lead)
│   ├── qamera/
│   │   ├── customers/<NAME>/    # Płacący użytkownicy SaaS (Stripe-synced)
│   │   └── prospects/<name>.md  # Leady Qamera (Airtable bidir-synced)
│   └── projects/<NAME>/         # Inicjatywy cross-company
├── tools/
│   ├── sync-skills.sh / .ps1    # Symlinkuje skille do IDE
│   ├── hooks/pre-commit         # Regen tech-stack/_index.md, push do Airtable
│   ├── airtable/                # list/get/create/update + sync_pull/push (Qamera)
│   ├── stripe/                  # list_customers, get_customer (read-only mirror)
│   ├── revolut/                 # OAuth (authorize, refresh) + cert
│   ├── tech-stack/              # regen_index.py, regen_dashboard.py
│   ├── finances/                # Workflow close (CFO skill operuje plikami)
│   ├── scheduler/daily-sync.ps1 # Daily cron entrypoint
│   ├── qamera-mcp/              # MCP do platformy Qamera AI
│   └── common/                  # env.py, revolut.py (shared utils)
├── outputs/                     # Artefakty generowane przez agentów (NIE context!)
│   ├── legal/  tax/  finance/  business/  product/  marketing/  brand/
├── openspec/                    # Specyfikacje (OpenSpec/SDD)
├── docs/                        # PRD, context-gaps
├── .githooks/                   # post-checkout, post-merge → sync-skills
├── .claude/  .github/  .cursor/  .agent/   # IDE skill targets (symlinks)
└── .env.example                 # Airtable / Stripe / Revolut creds template
```

---

## 3. Lista agentów (skilli)

### Shared skills (open source, submodule `200iqlabs/shared-skills`)

| Skill | Domena | Trigger |
|-------|--------|---------|
| **CFO** | Cash flow, runway, P&L, burn, unit economics, MRR/ARR/CAC/LTV | "ile kasy", "runway", "rentowność", "ile zarabiamy" |
| **Tax Advisor** | CIT, VAT, ZUS, IP Box, ulga B+R, estoński CIT, JDG vs PSA | "ile netto z faktury", "JPK", "optymalizacja podatkowa" |
| **Legal** | NDA, B2B, RODO, IP, KSH, AI Act, founders agreement, OWU | /analiza, /draft, /brief, /owu, /checklist |
| **Marketing** | Content dla brandu Qamera AI (TODO — dopinane w Phase 2) | — |
| **Business Consultant** | Analiza spotkań, projektowanie rozwiązań, estymacja, oferty, SWOT, mapowanie procesów, Make vs n8n vs Zapier vs custom | "notatki ze spotkania", "oferta", "wycena", "wąskie gardła" |
| **Product Manager** | Roadmap Qamera, backlog (TODO Phase 2) | — |
| **LinkedIn Content** | Posty na LI, hooks, content calendar, personal brand | "post na LinkedIn", "ghostwriter", "zasięg" |
| **Coach The Five** *(private)* | Metodyka Karwatki — pierwsze 5 lat tech firmy, PMF, founders agreement, IP+services, exit | "wypalenie", "wspólnik", "udziały", "PMF" |

### Process / workflow skills (kluczowe)

- **`/ingest`** — przetwarzanie inboxów klientów / projektów / inline tekstu. Workflow: read entity context → route → archive raw → create `data/ingest-YYYY-MM-DD.md` → update catalog + index.
- **`/sync-prospects`** — Airtable ⇄ `qamera/prospects/`, bidir, additive-only. Region `<!-- AIRTABLE:START/END -->`. Pre-commit hook pushuje zmiany.
- **`/sync-customers`** — Stripe → `qamera/customers/`, read-only mirror. Region `<!-- STRIPE:START/END -->`. Daily cron + manual.
- **`/finances close YYYY-MM`** — 6-fazowy close: PULL → CLASSIFY → REVIEW → ACCRUALS CHECK → COMMIT → REGENERATE. Hybryda rules-first + LLM fallback z learning loop.
- **`/daily-analyze`** — analiza dailies założycieli (Przemek + Paweł), generuje taski do ClickUp.
- **`/meeting-analyze`** — szersza wersja `/daily-analyze` dla dowolnego spotkania.
- **`/weekly-update`** — tygodniowa aktualizacja do Ligi Twórców Easy z GitHub + ClickUp.

### Pomocnicze (selekcja)

OpenSpec (`opsx:*`, `openspec-*`), Firecrawl (web scraping/search), Vercel (deployments, AI SDK, Next.js), SEO (claude-seo:* — pełen audit, technical, content, schema, GEO), Codex (rescue, prompting), Obsidian (defuddle, canvas, bases, markdown, CLI), Document skills (docx, pdf, pptx, xlsx, claude-api, mcp-builder, frontend-design), Skill creator, Graphify, Slides (Marp), Vibe coding, UI/UX Pro Max, Process mapping (Excalidraw/Mermaid), Research (outline + deep + report), Find skills.

---

## 4. Konwencje danych (najważniejsze reguły)

### Single source of truth — gdzie co żyje

| Typ danych | Plik / folder | Czytany przez |
|-----------|---------------|---------------|
| KRS, NIP, board, shareholders | `context/company.md` | legal, tax-advisor, cfo |
| Snapshot finansowy | `context/finances.md` | cfo |
| Pełny budżet + actuals + runway | `context/finances/` | cfo (CFO skill) |
| GDPR, umowy, document backlog | `context/legal-entities.md` | legal, tax-advisor |
| Profil konsultancki | `context/consultant-profile.md` | business-consultant |
| Portfolio projektów / case studies | `context/projects-portfolio.md` | business-consultant |
| Profil autora LI | `context/author-profile.md` | linkedin-content |
| Strategia, wizja, cele | `context/company/strategy.md` | — |
| Zespół | `context/company/team.md` | — |
| Produkt Qamera AI | `context/product/` | — |
| Procesy, KPI, infra | `context/operations/` | — |
| Brand, design | `context/brand/` | — |
| Spotkania (transkrypty) | `context/meetings/` | — |
| **Klienci konsultingu (B2B)** | `context/200iq-labs/clients/<NAME>/` | /ingest, agenci on-demand |
| **Prospects konsultingu** | `context/200iq-labs/prospects/<name>.md` | agenci on-demand |
| **Customers Qamera (SaaS)** | `context/qamera/customers/<NAME>/` | /sync-customers, /ingest, CFO |
| **Prospects Qamera** | `context/qamera/prospects/<name>.md` | /sync-prospects, agenci |
| **Projekty cross-company** | `context/projects/<NAME>/` | /ingest, agenci |
| Tech stack / SaaS / koszty | `context/operations/tech-stack/` | (cross-ref z `finances.md`) |
| Wyniki analiz, dokumenty robocze | `outputs/<domain>/` | — (NIE context!) |

### Reguły żelazne

1. **No duplicates** — fakt żyje w jednym pliku. Reszta używa cross-reference (`see [file](path)`).
2. **Last updated header + Review cycle** w każdym pliku context. Stare niż 30 dni → ostrzeżenie.
3. **Subdirs gdy plik puchnie** — wyciągnij sekcje do `context/<domain>/`.
4. **Outputs ≠ context** — generowane analizy idą do `outputs/`, nie do `context/`. Promocja tylko gdy user potwierdzi że to trwały fakt.
5. **External refs** — dla danych w Google Drive / ClickUp: link + krótki opis, bez kopiowania treści.
6. **Naming** — subdir files: descriptive slugs. Outputs: `YYYY-MM-DD-slug.md`.

### Folder per entity (klient / customer / projekt)

```
<ENTITY>/
├── client.md / customer.md / project.md   # Status + meta
├── catalog.md                              # Index plików w entity
├── inbox/                                  # Drop zone — process via /ingest
├── PROJECT/data/                           # Processed knowledge — read freely
├── PROJECT/deliverables/                   # MD deliverables — read when needed
├── output/                                 # Generated PDFs/scripts/emails — DO NOT read
├── archive/                                # Processed raw + incoming msgs — DO NOT read unless asked
└── offers/                                 # Proposals, contracts
```

Prospect = pojedynczy plik MD, NIE folder.

### Index Protocol

1. Przed jakąkolwiek pracą z klientem/customer/prospect/project → **najpierw `_index.md` scope'u**.
2. Przed pracą z konkretną entity → **`catalog.md`** (lub plik prospekta).
3. **NIGDY nie skanuj scope folderów bezpośrednio** — używaj indeksów.
4. Po edycji → update `catalog.md` + `_index.md`.
5. Status entity (`Completed` / `On Hold` / `archived_in_source`) → skip chyba że query celuje w nieaktywne.
6. Wyjątek: `context/operations/tech-stack/_index.md` — auto między markerami `<!-- AUTO:START/END -->`, regenerowany pre-commit hookiem.

---

## 5. Tech stack management

### Konwencja per narzędzie (`tools/<slug>.md`)

YAML frontmatter wymagany: `name`, `category` (infrastructure | automation | ai | design | dev-tools | productivity | communication | security | media), `billing_type` (monthly | yearly | usage-based | free), `cost_org`, `currency` (PLN | USD | EUR | GBP | CZK), `status` (active | trial | paused | cancelled), `business_unit` (200iq-labs | qamera | shared), `owner` (pawel | przemek). Opcjonalne: `payment_method`, `renewal_date`, `used_by`, `tags`, `url`, `plan`. **Zabronione:** `cost_pln` jako manual override (auto-kalkulowany przez `regen_dashboard.py`).

### Generatory

| Plik | Generator | Trigger |
|------|-----------|---------|
| `_index.md` | `tools/tech-stack/regen_index.py` | Pre-commit hook (auto) |
| `_dashboard.md`, `_costs.csv`, `exchange_rates.yaml` | `tools/tech-stack/regen_dashboard.py` | Manual (wymaga internet dla kursów) |

Pre-commit hook failure mode: warning + exit 0 (commit przechodzi bez Pythona). Pliki w `tools/` edytuje **agent**, nie user — hook to safety net.

---

## 6. Finances system

### Filozofia

- **P&L na accrual basis** (koszt = miesiąc obowiązku). Cash flow oddzielnie.
- **Hybrydowa klasyfikacja**: rules-first deterministycznie, LLM-fallback z learning loop (`examples.yaml`).
- **Plan = żywy dokument**, korygowany po każdym close.
- **Manual first, automate after pain** — generatory po 2-3 manualnych close'ach.

### Workflow close

`/finances close YYYY-MM` — 6 faz idempotentnych:
1. **PULL** — Revolut / Stripe / Infakt
2. **CLASSIFY** — rules → LLM fallback
3. **REVIEW** — 2 checkpointy z userem
4. **ACCRUALS CHECK** — czy zaległe zobowiązania zostały zapłacone
5. **COMMIT** — zapisz transakcje + miesięczny komentarz
6. **REGENERATE** — `_dashboard.md`, `_alerts.md`, `_runway.md`

### Cross-references

- `context/finances.md` = overview/snapshot. Linkuje do `_dashboard.md`. **Nie duplikować liczb.**
- `context/operations/tech-stack/_dashboard.md` = source of truth dla linii `opex/saas`.
- CFO skill (shared) — generic, czyta pliki `context/finances/` na żądanie.
- Doc operacyjna (kto / kiedy / lessons): `context/operations/finances-budget-process.md`.
- Doc techniczna (schemas, philosophy): `context/finances/README.md`.
- Spec systemu: `openspec/specs/finances-*/spec.md`.

---

## 7. Routing & komunikacja

### Routing przy multi-domain queries

1. Załaduj wszystkie relevantne skille agentów.
2. Zsynsetyzuj perspektywy w jedną odpowiedź.
3. Konflikty → flag explicitly.
4. Wskaż który agent dał który insight.

### Boundary

System pokrywa **TYLKO 200IQ LABS**. Tematy PLSoft / personal → osobne repo `agentic-ai-private`.

### Data freshness

Każdy plik context ma `Last updated`. Starsze niż 30 dni → ostrzeżenie przed udzieleniem rady.

### Communication style

- Język: polski (techniczne terminy PL/EN).
- Ton: bezpośredni, konkretny, profesjonalny ale przyjacielski.
- Kod: zawsze angielski.
- Format: krótkie odpowiedzi domyślnie, expand on request.
- Diagramy: Mermaid (procesy, architektura) lub Excalidraw (`process-mapping` skill).
- Tabele do porównań.

---

## 8. Setup repo (operacyjnie)

```bash
git clone --recurse-submodules https://github.com/200iqlabs/agentic-ai-system.git
cd agentic-ai-system
git config core.hooksPath .githooks      # auto-sync skilli
./tools/sync-skills.sh                    # symlinki do .claude/.github/.cursor/.agent
cp .env.example .env                      # uzupełnij API keys
```

### Day-to-day

| Akcja | Komenda |
|-------|---------|
| Update skilli (submoduły) | `git submodule update --remote && ./tools/sync-skills.sh && git add shared-skills private-skills && git commit -m "chore: update skills"` |
| Po `git pull` (jeśli hooki off) | `git submodule update --init && ./tools/sync-skills.sh` |
| Nowy skill | dodaj w submodule → `git submodule update --remote` → dopisz do `.gitignore` (Synced agent skills) → `./tools/sync-skills.sh` |

---

## 9. Powiązane repozytoria

| Repo | Opis |
|------|------|
| [`200iqlabs/shared-skills`](https://github.com/200iqlabs/shared-skills) | Open-source skille (Apache 2.0) |
| [`200iqlabs/private-skills`](https://github.com/200iqlabs/private-skills) | Skille proprietary |
| [`plipowczan/agentic-ai-private`](https://github.com/plipowczan/agentic-ai-private) | PLSoft / personal context — osobny system |

---

## 10. Aktualne stany / kontekst (snapshot 2026-05-10)

- **Branch:** `master` (clean).
- **Ostatnie commity:** blog 200IQ finances, ingest discovery JustIdea (Marcin + Martyna), PrestaShop one-pager + IdoSell brief, fix MCP qamera-ai-hetzner (Streamable HTTP zamiast SSE), tech-stack & finances skill updates.
- **Aktywne projekty:** `ECOMMERCE_WARSAW_2026`, `QAMERA_AI` (folder strategiczny — kod żyje w `shorts-lab-ai/saas-platform`).
- **Aktywni customers Qamera:** LAVEL (zmigrowany z legacy 2026-04-22). Miss Lou + FEBA — ręczne dodanie do Airtable pending.
- **Konferencje maj 2026:** No-Code Poland (7-8.05), InfoShare.
- **Runway maj-czerwiec 2026:** zabezpieczony (UoD payout częściowy + emisja 100k bez opóźnień, potwierdzone 2026-05-04).
- **Rejestr Akcjonariuszy PSA:** Kancelaria Smolski, utworzony 2026-04-28. 7-dniowy obowiązek raportowania (Art. 300³³ KSH), 100 PLN/wpis.
- **Marketing:** Meta Ads off (decyzja close 2026-04). Migracja Cursor → Claude planowana (90 EUR cap). GCP plan 700 → 1500-1800 PLN.

---

## 11. Słownik szybki

- **PSA** — Prosta Spółka Akcyjna (forma prawna 200IQ LABS).
- **Qamera AI** — flagship SaaS (poprzednia nazwa: Shorts Lab) — virtual photo studio dla e-commerce.
- **200IQ LABS** — spółka-matka (PSA).
- **shared-skills** / **private-skills** — submoduły ze skillami.
- **/ingest, /sync-prospects, /sync-customers, /finances close** — kluczowe skille operacyjne.
- **Liga Twórców Easy** — community gdzie Paweł publikuje weekly updates.
- **OpenSpec / OPSX** — workflow specyfikacji (explore → new → continue → ff → apply → verify → archive).
- **Accrual basis** — koszt zalicza się do miesiąca obowiązku, nie zapłaty.
- **Region (sync)** — blok między markerami `<!-- AIRTABLE:START/END -->` lub `<!-- STRIPE:START/END -->` — TYLKO ten obszar jest synchronizowany.

---

*Plik wygenerowany 2026-05-10 przez Claude Code. Source of truth: `CLAUDE.md` + `README.md` + `openspec/project.md` + struktura repo.*
