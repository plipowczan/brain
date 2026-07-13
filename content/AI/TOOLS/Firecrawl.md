---
title: "Firecrawl"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "ai", "web-scraping", "crawler", "research", "llm", "markdown"]
type: tool
agent-created: true
summary: "API that turns websites into clean LLM-ready Markdown — scrape, crawl, search, extract; the research-scraping layer for the Jakub Głąb agent and shared-skills"
---

# Firecrawl

An API that turns any website into clean, **LLM-ready Markdown** (or structured JSON). It handles the messy parts of web data — JavaScript rendering, pagination, anti-bot friction, boilerplate stripping — and gives back content an agent can actually use. Modes cover single-page `scrape`, whole-site `crawl`, `map` (discover URLs), `search`, and schema-driven `extract`.

## Links

### Description

- **Scrape** — one URL → clean Markdown/HTML/JSON, JS rendered.
- **Crawl** — follow links across a whole site, returning every page as Markdown.
- **Map** — quickly enumerate a site's URLs.
- **Search** — web search with content fetched and returned.
- **Extract** — pull structured data against a schema (LLM-assisted).
- **SDKs & integrations** — Python/Node SDKs; works as an agent tool / MCP server.

### Download or use

```bash
pip install firecrawl-py        # or: npm i @mendable/firecrawl-js
# app.scrape_url("https://example.com", params={"formats":["markdown"]})
```

- Site: [firecrawl.dev](https://www.firecrawl.dev/)
- Repo: [github.com/mendableai/firecrawl](https://github.com/mendableai/firecrawl)

## Reasoning for

Firecrawl is the research-scraping layer where an agent needs *clean* content, not raw HTML. In the [[Jakub Głąb Agent System]] it feeds the research/ingest skills — pulling articles and pages into the Markdown entity-wiki the agent reasons over — and it's part of the 200IQ Labs [[Agentic Skills Submodules|shared-skills]] toolkit. The reason it earns a slot alongside [[Perplexity]]: Perplexity answers *questions* with citations, while Firecrawl gives you the *full source content* in a form an LLM can chew on — complementary halves of a research pipeline. This repo already ships a Firecrawl *skill*; this note is the corresponding tool reference.

## Alternatives considered

- **[[Scrapling]]** — adaptive Python scraping framework already in the vault; more control/self-hosted, Firecrawl is the managed "just give me Markdown" option.
- **[[Browser Use]]** — agentic browser automation for interactive sites; heavier than Firecrawl for plain content extraction.
- **[[Bright Data]]** — industrial-scale scraping + proxies + datasets; Firecrawl is lighter and LLM-output-shaped.
- **Jina Reader** — similar URL→Markdown service; Firecrawl adds crawl/extract/search modes.

## Resources

- 📘 [Firecrawl docs](https://docs.firecrawl.dev/)
- 🧩 [Extract (structured)](https://docs.firecrawl.dev/features/extract)
- 🔗 [[Perplexity]] · [[Scrapling]] · [[Bright Data]] — related research tooling
- [[Extending Claude Code — Tools for Its Blind Spots]] — compiled article featuring this tool

---
Template: [[templates/tool]]
