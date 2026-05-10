---
title: "Scrapling Install Plan — Agentic AI Repos"
date: 2026-05-10
tags: ["plan", "scrapling", "agentic-systems", "mcp", "installation"]
type: basic-note
agent-created: true
summary: "Install plan for Scrapling across agentic-ai-system + agentic-ai-private + shared-skills (MCP + skill + tools)"
---

# Scrapling Install Plan — Agentic AI Repos

Plan instalacji [[Scrapling]] w architekturze [[Agentic AI Repos]]. Trzy warstwy, każda w innym miejscu — MCP w consumer repos, generic skill w shared-skills, site-specific spidery wedle wrażliwości danych.

## Decyzje architektoniczne

| Warstwa | Lokalizacja | Powód |
|---------|-------------|-------|
| MCP server (`scrapling[ai]`) | `agentic-ai-system/.mcp.json` + `agentic-ai-private/.mcp.json` | MCP redukuje tokeny (filtruje DOM przed LLM) — wyjątek od reguły CLI > MCP z [[Agentic Systems]] |
| `web-scrape` skill | `shared-skills/skills/web-scrape/` | Generic, przenośny, Apache 2.0 — uzupełnia `find-skills`/`ingest` |
| Site-specific spidery | `private-skills/skills/<name>/scripts/` lub `agentic-ai-*/tools/scrapling/` | Know-how + dane firmowe |
| Python venv | `agentic-ai-system/.venv` + `agentic-ai-private/.venv` | Izolacja deps; Playwright/Chromium ważą ~500MB |

## Faza 1 — Setup per-repo (oba consumer repos)

### 1.1 Python venv + Scrapling install

```bash
cd ~/PROJEKTY/agentic-ai-system   # i powtórz dla agentic-ai-private
python -m venv .venv
.venv\Scripts\activate            # Windows; Linux: source .venv/bin/activate
pip install "scrapling[all]"      # parser + fetchers + ai (MCP) + shell
scrapling install                 # ściąga Chromium + fingerprint deps
```

`.venv/` musi być w `.gitignore` obu repo (sprawdź czy już jest).

### 1.2 MCP server config

Dodaj do `.mcp.json` w obu consumer repos:

```json
{
  "mcpServers": {
    "scrapling": {
      "command": ".venv/Scripts/python.exe",
      "args": ["-m", "scrapling.ai.mcp"],
      "env": {}
    }
  }
}
```

> Linux/Mac: `command: ".venv/bin/python"`. Sprawdź dokładny moduł entry-point w https://scrapling.readthedocs.io/en/latest/ai/mcp-server.html — może być `scrapling-mcp` zamiast `python -m`.

### 1.3 Smoke test

```bash
scrapling extract get 'https://example.com' /tmp/test.md
scrapling extract stealthy-fetch 'https://nopecha.com/demo/cloudflare' /tmp/cf.html --solve-cloudflare
```

W Claude Code: zrestartuj sesję → MCP `scrapling` powinien być widoczny w `/mcp`.

## Faza 2 — `web-scrape` skill w shared-skills

### 2.1 Workflow

Zgodnie z MANDATORY workflow z [[Agentic Skills Submodules]]:

```bash
cd ~/PROJEKTY/shared-skills
# w Claude Code:
/skill-creator
# capture intent: "Generic web scraping skill — kiedy użyć scrapling extract vs StealthyFetcher vs spider"
# generate 5+ test prompts
# eval + iterate aż triggering accuracy ≥ 80%
```

### 2.2 Szkic SKILL.md (jako input dla `/skill-creator`)

```yaml
---
name: web-scrape
description: |
  Pobierz zawartość stron www do markdown/text/JSON.
  Wybierz właściwy tryb: prosty HTTP (Fetcher), anti-bot/Cloudflare (StealthyFetcher),
  full browser (DynamicFetcher), multi-page crawl (Spider).
  Triggers: "scrape", "pobierz stronę", "crawl docs", "ściągnij artykuł",
  "obejdź cloudflare", "zescrapuj listę", "monitoruj stronę".
  NIE używaj jeśli URL prowadzi do PDF (użyj `pdf` skilla) lub do GitHub repo
  (użyj `gh` CLI / `find-skills`).
---
```

Body skilla: decision tree (HTTP → Stealthy → Dynamic → Spider) + 4 ready-to-copy snippety + sekcja "kiedy MCP server zamiast tych snippetów" + lista referencyjna do `references/scrapling-quickref.md`.

### 2.3 Decision tree (do skilla)

```
URL znany, statyczny HTML?           → scrapling extract get URL out.md
Cloudflare/anti-bot?                 → scrapling extract stealthy-fetch ... --solve-cloudflare
SPA / dynamic JS / wymaga klikania?  → DynamicFetcher w Pythonie (script)
Wiele stron, paginacja, checkpointy? → Spider w tools/scrapling/<name>.py
Agent ma sam decydować kiedy/co?     → MCP server (już dostępny w .mcp.json)
```

### 2.4 Co NIE wchodzi do shared-skills
- Konkretne URLe / domeny klientów
- Selektory CSS specyficzne dla jednego site'u
- API keys do proxy (ColdProxy, Evomi itd.)

To wszystko → `private-skills` lub repo-level `tools/`.

## Faza 3 — Site-specific spidery (gdy będą potrzebne)

### 3.1 Decyzja: gdzie?

| Use case | Lokalizacja |
|----------|-------------|
| Lead gen scraping (B2B, LinkedIn-adjacent) | `private-skills/skills/lead-generation/scripts/` |
| Monitoring konkurencji [[Qamera AI]] (cenniki, feature pages) | `agentic-ai-system/tools/scrapling/competitors.py` |
| Tech News Weekly (PLSoft newsletter sources) | `agentic-ai-private/tools/scrapling/news-sources.py` |
| Klient X — research przed spotkaniem | `private-skills/skills/research/scripts/` (generyczny entry, parametryzowany URLem) |

### 3.2 Pattern: spider z pause/resume + dev-mode cache

```python
# tools/scrapling/<name>.py
from scrapling.spiders import Spider, Response

class XSpider(Spider):
    name = "x"
    start_urls = [...]
    concurrent_requests = 5

    async def parse(self, response: Response):
        ...

if __name__ == "__main__":
    XSpider(crawldir="./crawl_data/x", dev_mode=True).start()
```

`dev_mode=True` cache'uje pierwsze odpowiedzi → iteracja na `parse()` bez ponownego trafiania w serwer. Wyłącz w produkcji.

## Faza 4 — Integracja z istniejącym ekosystemem

### 4.1 Łączenia z innymi skills

- **`ingest`** ([[Agentic Skills Submodules]]) — gdy user wkleja URL do `01-Inbox/`, `ingest` może wywołać `web-scrape` żeby pobrać markdown przed klasyfikacją. Update SKILL.md `ingest` o opcjonalną gałąź "URL detected → web-scrape first".
- **`research`** (PLSoft skill z plsoft-vsoft-agent) — provider chain dziś: Firecrawl + WebSearch. Dodaj Scrapling jako tańszą self-hosted alternatywę dla cases gdzie Firecrawl quota się skończyła lub strona ma anti-bot.
- **[[LightRAG]]** — output spiderów (JSONL z `result.items.to_jsonl()`) → bezpośredni input do LightRAG indexing pipeline.

### 4.2 Konflikt z `firecrawl` skillami

Masz już bogaty stack `firecrawl-*` (scrape, search, crawl, agent, browser, map, download). **Nie usuwaj.** Decision rule do dopisania w `web-scrape` SKILL.md:

| Sytuacja | Wybierz |
|----------|---------|
| Quick one-off URL → markdown | Firecrawl (managed, zero setup) |
| AI-driven structured extraction (JSON schema) | `firecrawl-agent` |
| Anti-bot heavy (Cloudflare Turnstile, DataDome) | **Scrapling StealthyFetcher** |
| Self-hosted, cost-sensitive, recurring crawl | **Scrapling Spider** |
| Crawl całego docs site | Firecrawl crawl ALBO Scrapling spider — ten kto ma quota/proxy |
| Multi-session w jednym crawlu (fast HTTP + stealth dla protected) | **Scrapling** (unique feature) |

## Faza 5 — Sync skills (po dodaniu `web-scrape`)

```bash
# w shared-skills repo
git add skills/web-scrape && git commit -m "feat(web-scrape): add scrapling-backed scraping skill"
git push

# w agentic-ai-system / agentic-ai-private
git submodule update --remote shared-skills
./tools/sync-skills.sh           # symlinki do .claude/skills/, .cursor/skills/, etc.
git add shared-skills && git commit -m "chore: bump shared-skills (web-scrape)"
```

Hooki `post-checkout` / `post-merge` z [[Agentic Systems]] zrobią sync automatycznie po `git pull`.

## Checklist wdrożenia

- [ ] Faza 1.1 — venv + `scrapling[all]` w `agentic-ai-system`
- [ ] Faza 1.1 — venv + `scrapling[all]` w `agentic-ai-private`
- [ ] Faza 1.2 — `.mcp.json` w obu repo, sprawdzony entry-point MCP
- [ ] Faza 1.3 — smoke test CLI + MCP visible w `/mcp`
- [ ] Faza 2.1 — `/skill-creator` w shared-skills, draft `web-scrape`
- [ ] Faza 2 — eval (5+ prompts), triggering accuracy ≥ 80%
- [ ] Faza 2 — `references/scrapling-quickref.md` (decision tree + snippety)
- [ ] Faza 4.1 — update `ingest` SKILL.md o URL branch (opcjonalne, na koniec)
- [ ] Faza 4.2 — sekcja "Scrapling vs Firecrawl" w `web-scrape` SKILL.md
- [ ] Faza 5 — sync + commit submodule SHA w obu consumer repos

## Otwarte pytania

1. **MCP entry-point** — dokładna komenda do `.mcp.json` (`scrapling-mcp` vs `python -m scrapling.ai.mcp`). Sprawdź w docs lub `pip show scrapling` po instalacji.
2. **Proxy** — czy planujesz płatny provider (ColdProxy/Evomi) czy starczą darmowe + StealthyFetcher? Decyzja wpływa na to czy potrzebujesz `tools/scrapling/proxy-rotator.py`.
3. **`firecrawl` skille** — zostawiamy wszystkie 7 czy przy okazji konsolidujesz? Mój vote: zostaw, role nakładają się tylko częściowo (Firecrawl = managed convenience, Scrapling = self-hosted control + anti-bot).
4. **Docker** — czy Scrapling w kontenerze (`pyd4vinci/scrapling`) ma sens dla long-running spiderów? Dla ad-hoc scraping z poziomu agent session — nie. Dla nightly research jobs — tak.

## 🔗 Linki

- [[Scrapling]] — tool note (źródło)
- [[Agentic AI Repos]] · [[Agentic Skills Submodules]] · [[Agentic Systems]]
- [[agentic-ai-system]] · [[agentic-ai-private]]
- [[Firecrawl]] (jeśli istnieje, inaczej skill `firecrawl`)
- [[Progressive Disclosure]] · [[Token Optimization for Claude Code]]
