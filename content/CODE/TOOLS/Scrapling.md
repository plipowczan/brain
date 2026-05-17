---
title: "Scrapling"
date: 2026-05-10
enableToc: true
openToc: true
tags: ["tool", "python", "web-scraping", "crawler", "automation", "mcp", "open-source"]
type: tool
source: "_raw/inbox/D4VinciScrapling 🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl!.md"
agent-created: true
summary: "Adaptive Python web scraping framework — fetchers, spiders, anti-bot bypass, MCP server"
---

# Scrapling

Adaptive Python web scraping framework by Karim Shoair (D4Vinci). Scales from a single request to a full concurrent crawl. The parser learns changes in page structure and automatically relocates elements, fetchers bypass Cloudflare Turnstile/DataDome out-of-the-box, and the spider framework provides multi-session crawls with pause/resume and proxy rotation.

## Links
### Description
- GitHub: https://github.com/D4Vinci/Scrapling
- Docs: https://scrapling.readthedocs.io/
- License: BSD-3-Clause
- Python: 3.10+

### Download or use
```bash
pip install scrapling                  # parser only
pip install "scrapling[fetchers]"      # + Playwright/Chromium fetchers
pip install "scrapling[ai]"            # + MCP server
pip install "scrapling[all]"           # everything
scrapling install                      # download browsers
docker pull pyd4vinci/scrapling        # ready image
```

## 🚀 Reasoning for

Three levels of abstraction in one library:

- **Fetchers** — `Fetcher` (HTTP with TLS impersonation), `StealthyFetcher` (Cloudflare Turnstile bypass), `DynamicFetcher` (Playwright Chromium). Persistent sessions via `FetcherSession`/`StealthySession`/`DynamicSession`.
- **Spiders** — Scrapy-like API with `start_urls` + async `parse()`, concurrent_requests, per-domain throttling, **pause/resume with checkpoints** (Ctrl+C → resume from `crawldir`), streaming mode (`async for item in spider.stream()`), dev-mode cache (replay without hitting the server again).
- **Adaptive parser** — `auto_save=True` stores the selector; `adaptive=True` finds the element by similarity when the page structure changes. Plus CSS, XPath, BS-style `find_all`, text/regex search, `find_similar()`, `next_sibling`, `parent`.

Why use it instead of Scrapy/Playwright directly:
- Anti-bot bypass out of the box (Turnstile, fingerprint spoofing, DoH against DNS leak, ad/tracker blocking of ~3500 domains).
- Multi-session inside a single spider — request routing by `sid` (e.g., fast HTTP for lists, stealth browser for protected pages).
- 10x faster JSON serialization, 92% test coverage, full type hints (PyRight + MyPy).
- Benchmark: parser roughly equal to Parsel/Scrapy (2.02 ms vs 2.04 ms on 5000 nested elements), much faster than BS4 (~784x).

## 🤖 MCP Server

Built-in MCP server (`pip install "scrapling[ai]"`) — lets Claude/Cursor scrape with aggressive filtering before returning to the LLM, meaning fewer tokens, faster. A competitor to [[Firecrawl]]'s MCP, but self-hosted and with anti-bot.

## 🧩 Spider quick example

```python
from scrapling.spiders import Spider, Response

class QuotesSpider(Spider):
    name = "quotes"
    start_urls = ["https://quotes.toscrape.com/"]
    concurrent_requests = 10

    async def parse(self, response: Response):
        for q in response.css('.quote'):
            yield {"text": q.css('.text::text').get(),
                   "author": q.css('.author::text').get()}
        nxt = response.css('.next a')
        if nxt:
            yield response.follow(nxt[0].attrib['href'])

QuotesSpider(crawldir="./crawl_data").start()  # pause/resume capable
```

## CLI without code

```bash
scrapling shell                                          # IPython with context
scrapling extract get 'https://example.com' content.md   # to markdown
scrapling extract stealthy-fetch '...' out.html --solve-cloudflare
```

## Alternatives considered
- **Scrapy/Parsel** — mature, but no built-in stealth and no adaptive selectors.
- **Playwright directly** — full control, but you write all the orchestration yourself.
- **BeautifulSoup + requests** — fine for simple cases; ~784x slower at parsing.
- **AutoScraper** — adaptive matching, but ~5x slower and no crawler framework.
- **[[Firecrawl]] / Firecrawl MCP** — managed SaaS + LLM-friendly markdown; Scrapling is a self-hosted alternative with broader scope (spiders, sessions, proxy rotation).

## 🔗 Related
- [[Firecrawl]] — managed scraping/crawling (if present in the wiki, otherwise the `firecrawl` skill)
- [[Agent Zero]], [[Hermes Agent]] — agentic frameworks that can use Scrapling as a tool
- [[LightRAG]] — pipeline for indexing scraped data

## Resources
- Hands-on guide: https://substack.thewebscraping.club/p/scrapling-hands-on-guide
- MCP demo video: https://www.youtube.com/watch?v=qyFk3ZNwOxE
- Benchmarks: https://github.com/D4Vinci/Scrapling/blob/main/benchmarks.py

---
Template: [[templates/tool]]
