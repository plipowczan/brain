# Seed: shared-skills + private-skills → Second Brain

> Plik wsadowy do second brain z informacjami o submodułach skilli używanych przez `agentic-ai-system`. Wygenerowany 2026-05-10.

---

## 1. TL;DR

Dwa repozytoria submoduły zasilają system agentowy 200IQ LABS:

| Repo | Widoczność | Licencja | URL | Plugin name |
|------|-----------|----------|-----|-------------|
| **shared-skills** | Public | Apache 2.0 | `github.com/200iqlabs/shared-skills` | `200iqlabs-agent-skills` |
| **private-skills** | Private | UNLICENSED (proprietary) | `github.com/200iqlabs/private-skills` | `200iqlabs-private-skills` |

Oba zbudowane na standardzie [Agent Skills](https://agentskills.io). Każdy skill = katalog `skills/<name>/` z plikiem `SKILL.md` (YAML frontmatter + markdown body). Auto-discovery przez plugin manifest. Dystrybucja: plugin marketplace (`/plugin marketplace add 200iqlabs/shared-skills`) lub git submodule.

---

## 2. shared-skills — public, Apache 2.0

### Cel

Modułowa biblioteka agentów AI do biznesowego doradztwa dla founderów i małych firm. Otwarta — można forkować, instalować jako plugin lub jako submodule.

### Struktura

```
shared-skills/
├── CLAUDE.md                    # Konwencje + workflow tworzenia skilli
├── LICENSE                      # Apache 2.0
├── .claude-plugin/
│   ├── plugin.json              # Manifest pluginu
│   └── marketplace.json         # Marketplace metadata
├── skills/                      # 13 skilli
│   ├── business-consultant/
│   ├── cfo/
│   ├── environment-setup/
│   ├── find-skills/
│   ├── ingest/
│   ├── legal/
│   ├── linkedin-content/
│   ├── marketing/               # PLACEHOLDER (Phase 2)
│   ├── process-mapping/
│   ├── product-manager/         # PLACEHOLDER (Phase 2)
│   ├── slides/
│   ├── tax-advisor/
│   └── vibe-coding/
├── tools/                       # CLI scripts (preferred over MCP — minimize context)
│   ├── clickup/
│   ├── revolut/
│   ├── common/                  # helpers.sh, .env.example
│   └── README.md
├── context/
│   ├── README.md
│   └── templates/               # company / consultant-profile / projects-portfolio / author-profile / finances / legal-entities .template.md
├── openspec/                    # Project specs + change history (archive)
├── .claude/  .cursor/  .github/  .agent/   # IDE adapters (commands + skills mirror)
└── README.md
```

### Skille (per agent)

| Skill | Co robi | Kiedy triggerować |
|-------|---------|-------------------|
| **cfo** | Cash flow, runway, P&L, budżet, rentowność, unit economics | "ile kasy", "runway", "ile zarabiamy", optymalizacja kosztów |
| **tax-advisor** | Polski podatkowiec dla IT (JDG/PSA): CIT, VAT, ZUS, IP Box, ulga B+R, estoński CIT, ryczałt | "ile netto z faktury", JPK, optymalizacja, /analiza /porównanie /optymalizacja /kalendarz /brief |
| **legal** | Asystent prawny PL: NDA, B2B, RODO, IP, KSH, AI Act, OWU, founders agreement | /analiza /draft /brief /owu /checklist /porównanie |
| **business-consultant** | Analiza notatek ze spotkań, projektowanie rozwiązań, estymacja, oferty, SWOT, mapowanie procesów, Make vs n8n vs Zapier vs custom | "notatki", "oferta", "wycena", "discovery", "wąskie gardła" |
| **linkedin-content** | Posty na LI, hooks, content calendar, personal brand. Standalone lub wywoływany przez marketing agent | "post na LinkedIn", "ghostwriter", "zasięg" |
| **process-mapping** | Diagramy procesów Excalidraw / Mermaid (TYLKO sekwencyjne business processes) | "zmapuj proces", "AS-IS TO-BE", "flowchart" |
| **slides** | Markdown → prezentacje przez Marp (PDF, LinkedIn carousels, talk slides) | /slides:* — init, explore, new, draft, build, tweak, archive |
| **vibe-coding** | Generowanie nowoczesnego UI bez UX/UI knowledge (React + Vite + Tailwind 4 + shadcn/ui) | "vibe", design briefs, style references |
| **ingest** | Przetwarzanie inboxów klientów/projektów/inline tekstu → `data/` + archive + catalog/index update | /ingest, /ingest NAME, /ingest NAME `<text>` |
| **environment-setup** | Wizard konfiguracji środowiska shared-skills + tworzenie context files | "set up environment", "missing context files" |
| **find-skills** | Discovery + install skilli z open ekosystem + audyt bezpieczeństwa | "find skill", "is there a skill that...", "jak zrobić X" |
| **marketing** | TODO Phase 2 (placeholder) | — |
| **product-manager** | TODO Phase 2 (placeholder) | — |

### Tools (CLI integrations)

- **`tools/clickup/`** — integracja z ClickUp (taski, daily, projekty)
- **`tools/revolut/`** — pobieranie transakcji (CFO close workflow); OAuth z private cert
- **`tools/common/helpers.sh`** — shared bash utilities; `.env.example` jako template

> **Uwaga**: w `agentic-ai-system` repo używamy własnego `tools/` (Airtable, Stripe, finances, tech-stack, scheduler, qamera-mcp). Te z `shared-skills/tools/` są wewnątrz submodule i wykorzystywane przez skille bezpośrednio. Niektóre integracje (np. inFakt) zostały zrefaktorowane na MCP zamiast CLI.

### Filozofia

- **Progressive disclosure**: metadata → body → references (load references only when needed).
- **Pushy descriptions**: undertriggering > overtriggering. Lepiej trigger raz za dużo.
- **Phase 0 placeholders**: część agentów (marketing, product-manager) to placeholdery — sprawdzaj marker "PLACEHOLDER".
- **Polish-first**: większość agentów (tax, legal, business consulting) targetuje polskich użytkowników.
- **CLI > MCP** dla integracji (oszczędność context window).

### Context layer

Skille działają w 2 warstwach danych:

1. **`references/`** w skillu — domain knowledge (metodologie, frameworks, checklists). Stays in skill, distributed.
2. **`context/`** w repo użytkownika — user-specific data (gitignored). Tworzone manualnie lub przez `environment-setup`.

Każdy skill używający context files MUSI mieć sekcję `## Context Dependencies` z listą required/recommended files i komunikatem o brakach.

| Context file | Skille konsumujące |
|--------------|---------------------|
| `company.md` | legal, tax-advisor, cfo |
| `consultant-profile.md` | business-consultant |
| `projects-portfolio.md` | business-consultant |
| `author-profile.md` | linkedin-content |
| `finances.md` | cfo |
| `legal-entities.md` | legal, tax-advisor |

### MANDATORY workflow tworzenia skilli

Przy nowym skillu lub znaczącej modyfikacji **OBOWIĄZKOWO** użyć `/skill-creator`. NIE pisać `SKILL.md` ręcznie.

Kroki:
1. `/skill-creator` — capture intent, interview, draft
2. Generate test prompts (min. 5 per agent)
3. Run evals + review
4. Iterate na feedback + benchmarks
5. Optimize description (target ≥ 80% triggering accuracy)

**Można pominąć przy**: typo fixes, dodanie reference file, update daty, zmiany tylko w referencjach (nie w SKILL.md).

### Setup (dla nowych userów)

```bash
# A: jako plugin
/plugin marketplace add 200iqlabs/shared-skills

# B: jako submodule
git submodule add https://github.com/200iqlabs/shared-skills.git
```

Potem: `/environment-setup` → tworzy context files krok po kroku.

### Ostatnie commity (2026-05-10)

- `3a06818` refactor(cfo): route inFakt through MCP, drop CLI scripts
- `405ce5d` fix(cfo): use OAuth-refreshed Revolut tokens, correct sys.path depth
- `ba69fd7` refactor: update import paths to use stripe tools and _common module
- `61ae0fb` feat(find-skills): add skill discovery with security audit
- `9c04da1` feat(ingest): drop on-disk summary file — chat report + git są audit trail

---

## 3. private-skills — proprietary, UNLICENSED

### Cel

Skille proprietary 200IQ LABS — nie nadające się do open-source dystrybucji (poufny know-how, integracje z wewnętrzną platformą).

### Struktura

```
private-skills/
├── CLAUDE.md
├── .gitignore
├── .claude-plugin/
│   ├── plugin.json              # name: 200iqlabs-private-skills, license: UNLICENSED
│   └── marketplace.json
└── skills/
    ├── coach-the-five/
    │   ├── SKILL.md
    │   └── references/
    │       ├── 01_Wstep.md
    │       ├── 02_Przedsiebiorczosc.md
    │       ├── 03_Zakladanie_firmy.md
    │       ├── 04_Rozwijanie_firmy.md
    │       ├── 05_Trudne_chwile.md
    │       ├── 06_Sukces_i_co_dalej.md
    │       ├── 07_Zakonczenie.md
    │       └── checklists.md
    └── platforma-tworzenie-sesji-zdjeciowych/
        └── SKILL.md
```

### Skille

#### 1. `coach-the-five`

Osobisty coach biznesowy oparty na metodologii **Tomasza Karwatki** z książki *"The Five: Pierwsze pięć lat prowadzenia firmy"*.

- **Autor skilla**: Paweł Lipowczan
- **Source**: "The Five" — Tomasz Karwatka
- **Wersja**: 1.0
- **Licencja w SKILL.md**: Apache-2.0 (treść metodologii to know-how Karwatki, skill jako wrapper)
- **Rola**: mix mentor (40%) + konsultant + coach
- **Triggery**: startup strategy, PMF, scaling readiness, founder burnout, co-founder agreements/conflicts, equity splits, fundraising decisions, IP+services model, exit strategy, EBITDA optimization. Polish: wypalenie, wspólnik, udziały, sprzedaż firmy, kryzys.
- **Frameworks**: tornado framework, "PE yourself", founders agreement.
- **References**: 7 modułów + checklists (każdy etap pierwszych 5 lat firmy).

#### 2. `platforma-tworzenie-sesji-zdjeciowych`

Operator platformy **Qamera AI** przez MCP server `qamera-ai-hetzner`.

- **Cel**: agent (nie człowiek) rejestruje i monitoruje sesje zdjęciowe w platformie SaaS Qamera AI.
- **MCP server**: `qamera-ai-hetzner` (Streamable HTTP transport — fix `dbf9a55` w głównym repo)
- **Tool set**:
  - `get_products`, `get_models`, `get_sceneries`, `get_presets` — discovery/walidacja ID
  - `register_photo_shoot` — utworzenie sesji
  - `get_images` — sprawdzenie statusu (NEW vs done)
- **Use cases**: stworzyć sesję z istniejących rekordów, zwalidować productId/modelId/sceneryId/presetId, uruchomić generowanie jednego/wielu ujęć, sprawdzić status obrazu.

### Filozofia

Te same konwencje co `shared-skills` (progressive disclosure, YAML frontmatter, auto-discovery), ale:

- Wszystko proprietary (UNLICENSED)
- Polish-first gdzie ma sens
- Brak `tools/` własnych — operuje na `qamera-mcp` z głównego repo

### Ostatnie commity (2026-05-10)

- `6f59ac9` feat: add platforma-tworzenie-sesji-zdjeciowych skill (Qamera MCP)
- `f5a6c7f` chore: remove skill workspaces from repo to avoid submodule pollution
- `8ca6169` feat: initial private-skills repo with coach-the-five skill

---

## 4. Jak to się składa razem

```
agentic-ai-system/                  ← repo główne (private)
├── shared-skills/    (submodule)   ← 13 skilli, public, Apache 2.0
├── private-skills/   (submodule)   ← 2 skille, proprietary
└── tools/sync-skills.sh            ← symlinki:
                                       skills/<name>/  →  .claude/skills/<name>/
                                                          .github/skills/<name>/
                                                          .cursor/skills/<name>/
                                                          .agent/skills/<name>/
```

### Lifecycle

1. **Czytanie** — IDE skanuje swój katalog skilli (`.claude/skills/...`), ładuje `SKILL.md`, używa frontmatter `description` do auto-routingu.
2. **Update** — `git submodule update --remote` (oba submoduły) → `./tools/sync-skills.sh` (refresh symlinki) → commit nowych submodule SHAs.
3. **Nowy skill** — utwórz w odpowiednim submodule (przez `/skill-creator`), `git submodule update --remote`, dopisz nazwę do `.gitignore` (sekcja "Synced agent skills"), `./tools/sync-skills.sh`.

### Boundary między repo a submodułami

| Co gdzie żyje |  |
|---------------|--|
| **Skille** (logika agenta, references, prompts) | shared-skills / private-skills |
| **Domain knowledge** (frameworks, methodologies, checklists) | `<skill>/references/` w submodule |
| **Context** (dane firmowe — finanse, klienci, projekty) | `agentic-ai-system/context/` (nigdy w submodule) |
| **Tools per skill** (ClickUp, Revolut) | shared-skills/tools/ |
| **Tools per repo** (Airtable, Stripe, finances close, tech-stack) | agentic-ai-system/tools/ |
| **Outputs** (artefakty agentów) | agentic-ai-system/outputs/ |

### Reguła: skille są generic, dane są lokalne

Skille NIE mają hardcoded ścieżek do `context/operations/tech-stack/...`. Dostają dane przez kanoniczne lokalizacje (`finances.md`, `company.md` itp.) zadeklarowane w `## Context Dependencies`. To pozwala na clean fork/install przez nowych userów (firmy/osoby spoza 200IQ LABS).

---

## 5. Słownik

- **Agent Skill** — standard z agentskills.io: katalog z `SKILL.md` (YAML frontmatter + body), opcjonalne `references/` i `scripts/`.
- **Plugin manifest** — `.claude-plugin/plugin.json` deklarujący repo jako plugin.
- **Progressive disclosure** — ładuj tylko to czego potrzebujesz: najpierw metadata (frontmatter), body przy aktywacji, references on-demand.
- **Triggering accuracy** — % przypadków gdy skill aktywuje się prawidłowo. Target ≥ 80%.
- **Phase 0 / Phase 2** — etapy rozwoju skilli; placeholdery (marketing, product-manager) → Phase 2.
- **MCP server** — Model Context Protocol, alternatywa dla CLI tools (qamera-ai-hetzner = MCP do platformy SaaS).
- **Skill workspace** — lokalna instancja skilla z runtime state; usunięte z private-skills żeby nie zaśmiecać submoduła (commit `f5a6c7f`).

---

*Plik wygenerowany 2026-05-10 przez Claude Code. Source of truth: shared-skills/CLAUDE.md, private-skills/CLAUDE.md, plugin manifests, git log obu submodułów.*
