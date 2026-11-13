---
title: "Firecrawl"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "ai", "web-scraping", "crawler", "research", "llm", "markdown"]
type: tool
agent-created: true
agent-reviewed: 2026-11-13
summary: "Web data API (AGPL-3.0 server, MIT SDKs, credit-based cloud) that turns websites into clean LLM-ready Markdown/JSON — scrape, crawl, map, search, agent; the research-scraping layer for the Jakub Głąb agent and shared-skills"
status-checked: 2026-11-13
project-status: active
---

# Firecrawl

> [!success] Status check 2026-11-13 — active
> **Verdict:** Commits land daily (latest 2026-11-13). SDK and MCP releases came on 2026-11-12, and the firecrawl.dev changelog has entries nearly every weekday through 2026-11-12 (MCP v3).
> **Last release:** The last GitHub release is v2.11.0 (2026-06-19; the changelog post 'v2.11.0 is live' is dated 2026-06-24)… · **last commit:** 2026-11-13 · **licence:** AGPL-3.0 for the server monorepo. The SDKs (apps/js-sdk, apps/python-sdk and others) are MIT. The cloud is a…
> **Repo:** https://github.com/firecrawl/firecrawl — **moved/renamed:** The GitHub org changed from mendableai to firecrawl; the GitHub API redirects the old URL to firecrawl/firecrawl. The date of the org rename could not be confirmed.
> **Changed since this note:** Since 2026-06-13: v2.11.0 brought the Research Index (arXiv papers and linked GitHub code), keyless use of /scrape, /search, /interact and /parse from official clients, redactPII, a deterministicJson format, and cdpUrl for driving Firecrawl browser sessions with Playwright or Puppeteer…

An API that turns any website into clean, **LLM-ready Markdown** (or structured JSON). It handles the messy parts of web data — JavaScript rendering, pagination, anti-bot friction, boilerplate stripping — and gives back content an agent can actually use. Modes cover single-page `scrape`, whole-site `crawl`, `map` (discover URLs), `search`, and `agent` for multi-page structured gathering (the older schema-driven `extract` is deprecated).

Since I wrote this note the scope has grown well past "website to Markdown": the repo now pitches itself as data "from the web and beyond" for AI agents, and on 2026-09-22 Firecrawl launched **Alexandria** (cloud-only paid data providers and specialised indexes), announced with a \$75M Series B.

## Links

### Description

- **Scrape** — one URL → clean Markdown/HTML/JSON, JS rendered. Since 2026-10-08 "Universal Scrape" also takes files and Alexandria providers through the same call.
- **Crawl** — follow links across a whole site, returning every page as Markdown.
- **Map** — quickly enumerate a site's URLs.
- **Search** — web search with content fetched and returned (new relevance model since 2026-07-22).
- **Agent** — autonomous multi-page data gathering; the successor to `/extract`.
- **Extract** — *deprecated*: the docs say `/extract` will be removed on 2026-12-10. Single-page extraction moves to `/v2/scrape` with a JSON format, multi-page or search-driven extraction to `/v2/agent`.
- **Interact / Parse / Monitor** — click and fill forms on a scraped page; convert local PDF, DOCX and XLSX files (Parse runs on [[anydoc]]); always-on `/monitor` with webhook alerts (since 2026-07-01).
- **Indexes & Alexandria** — Research Index (arXiv papers and their code), Developer Index (GitHub, docs, issues, PRs), Government & Legal Index, people/company enrichment, SEC filings and other paid providers. Cloud only.
- **SDKs & integrations** — Python/Node SDKs, a CLI, and an MCP server (`firecrawl-mcp`; MCP v3 with 3,000+ tools shipped 2026-11-12, plus a hosted keyless endpoint at `https://mcp.firecrawl.dev/v2/mcp` for Search, Scrape and Parse). Plugins exist for Claude, Claude Code, ChatGPT and Codex.
- **Keyless use** — since v2.11.0 the official clients can call `/scrape`, `/search`, `/interact` and `/parse` without an API key, at lower rate limits.

### Download or use

```bash
pip install firecrawl           # or: npm install firecrawl
# from firecrawl import Firecrawl
# Firecrawl(api_key="fc-...").scrape("https://example.com", formats=["markdown"])
```

Until the v4 SDKs the packages were `firecrawl-py` and `@mendable/firecrawl-js` with `app.scrape_url(url, params={...})`. Both old package names are still published at the same versions (PyPI 4.57.0, npm 4.54.0 on 2026-11-12), but the docs now use `firecrawl` and `scrape(url, formats=[...])`.

**Firecrawl Local** (added 2026-11-11) is a single Rust binary for scrape, crawl and map on your own machine, with no database, queue or container; it uses a locally installed Chrome for JS pages. `cargo install firecrawl-local` (0.1.0 on crates.io, AGPL-3.0).

**Licence & pricing:** the server monorepo is AGPL-3.0 and the SDKs are MIT. The self-hosted server lacks cloud-only features such as Alexandria. The cloud is credit-based: Free 1,000 credits/month, Hobby \$19, Standard \$99, Growth \$399, Scale \$749, Enterprise custom; a scraped or crawled page costs 1 credit and JSON format adds 4. GitHub Releases stopped at v2.11.0 (2026-06-19) while the service ships continuously, so I'd pin SDK versions rather than watch Releases.

- Site: [firecrawl.dev](https://www.firecrawl.dev/) · [changelog](https://www.firecrawl.dev/changelog) · [pricing](https://www.firecrawl.dev/pricing)
- Repo: [github.com/firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) (formerly `mendableai/firecrawl`, which redirects; I could not confirm when the org was renamed) · MCP server: [github.com/firecrawl/firecrawl-mcp-server](https://github.com/firecrawl/firecrawl-mcp-server)

## Reasoning for

Firecrawl is the research-scraping layer where an agent needs *clean* content, not raw HTML. In the [[Jakub Głąb Agent System]] it feeds the research/ingest skills — pulling articles and pages into the Markdown entity-wiki the agent reasons over — and it's part of the 200IQ Labs [[Agentic Skills Submodules|shared-skills]] toolkit. The reason it earns a slot alongside [[Perplexity]]: Perplexity answers *questions* with citations, while Firecrawl gives you the *full source content* in a form an LLM can chew on — complementary halves of a research pipeline. This repo already ships a Firecrawl *skill*; this note is the corresponding tool reference.

## Alternatives considered

- **[[Scrapling]]** — adaptive Python scraping framework already in the vault; more control/self-hosted, Firecrawl is the managed "just give me Markdown" option (with Firecrawl Local and the AGPL server as self-hosted fallbacks).
- **[[Crawl4AI]]** — Apache-2.0, self-host-first LLM-friendly crawler; the closest open-source counterpart.
- **[[Browser Use]]** — agentic browser automation for interactive sites; heavier than Firecrawl for plain content extraction.
- **[[Bright Data]]** — industrial-scale scraping + proxies + datasets; Firecrawl is lighter and LLM-output-shaped.
- **Jina Reader** — similar URL→Markdown service; Firecrawl adds crawl/map/search/agent modes and the Alexandria data catalog.

## Resources

- 📘 [Firecrawl docs](https://docs.firecrawl.dev/)
- 🧩 [Extract (structured)](https://docs.firecrawl.dev/features/extract) — deprecated, removal scheduled for 2026-12-10; use Scrape with JSON format or Agent
- 📘 [Firecrawl Local](https://github.com/firecrawl/firecrawl/tree/main/apps/local) · [v2.11.0 release](https://github.com/firecrawl/firecrawl/releases/tag/v2.11.0)
- 🔗 [[Perplexity]] · [[Scrapling]] · [[Bright Data]] — related research tooling
- [[Extending Claude Code — Tools for Its Blind Spots]] — compiled article featuring this tool
- [[anydoc]] — Firecrawl's Rust office-document → Markdown converter; powers Firecrawl Parse

---
Template: [[templates/tool]]
