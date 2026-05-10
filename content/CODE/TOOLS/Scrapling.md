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

Adaptive Python web scraping framework by Karim Shoair (D4Vinci). Skaluje się od pojedynczego requestu do pełnego concurrent crawla. Parser uczy się zmian w strukturze stron i automatycznie relokuje elementy, fetchery obchodzą Cloudflare Turnstile/DataDome out-of-the-box, a spider framework daje multi-session crawls z pause/resume i proxy rotation.

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

Trzy poziomy abstrakcji w jednej bibliotece:

- **Fetchers** — `Fetcher` (HTTP z TLS impersonation), `StealthyFetcher` (Cloudflare Turnstile bypass), `DynamicFetcher` (Playwright Chromium). Sesje persistent z `FetcherSession`/`StealthySession`/`DynamicSession`.
- **Spiders** — Scrapy-like API z `start_urls` + async `parse()`, concurrent_requests, per-domain throttling, **pause/resume z checkpointami** (Ctrl+C → wznowienie z `crawldir`), streaming mode (`async for item in spider.stream()`), dev-mode cache (replay bez ponownego trafienia w serwer).
- **Adaptive parser** — `auto_save=True` zapisuje selektor; `adaptive=True` przy zmianie struktury strony znajduje element po podobieństwie. Plus CSS, XPath, BS-style `find_all`, text/regex search, `find_similar()`, `next_sibling`, `parent`.

Why użyć zamiast Scrapy/Playwright bezpośrednio:
- Anti-bot bypass z pudełka (Turnstile, fingerprint spoofing, DoH przeciw DNS leak, ad/tracker blocking ~3500 domen).
- Multi-session w jednym spiderze — routing requestów po `sid` (np. szybki HTTP dla list, stealth browser dla protected).
- 10x szybsza JSON serializacja, 92% test coverage, full type hints (PyRight + MyPy).
- Benchmark: parser ~równo z Parsel/Scrapy (2.02 ms vs 2.04 ms na 5000 nested elementów), znacznie szybciej niż BS4 (~784x).

## 🤖 MCP Server

Wbudowany MCP server (`pip install "scrapling[ai]"`) — pozwala Claude/Cursorowi scrapować z agresywnym filtrowaniem przed zwróceniem do LLM, czyli mniej tokenów, szybciej. Konkurent dla [[Firecrawl]]-owego MCP, ale self-hosted i z anti-bot.

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

## CLI bez kodu

```bash
scrapling shell                                          # IPython z kontekstem
scrapling extract get 'https://example.com' content.md   # do markdown
scrapling extract stealthy-fetch '...' out.html --solve-cloudflare
```

## Alternatives considered
- **Scrapy/Parsel** — dojrzałe, ale brak built-in stealth i adaptive selectors.
- **Playwright bezpośrednio** — pełna kontrola, ale piszesz całą orchestrację sam.
- **BeautifulSoup + requests** — dla prostych przypadków; ~784x wolniejsze przy parsowaniu.
- **AutoScraper** — adaptive matching, ale ~5x wolniejszy i brak crawler frameworka.
- **[[Firecrawl]] / Firecrawl MCP** — managed SaaS + LLM-friendly markdown; Scrapling jest self-hosted alternatywą z szerszym zakresem (spiders, sessions, proxy rotation).

## 🔗 Related
- [[Firecrawl]] — managed scraping/crawling (jeśli istnieje w wiki, inaczej skill `firecrawl`)
- [[Agent Zero]], [[Hermes Agent]] — agentic frameworks które mogą używać Scraplinga jako narzędzia
- [[LightRAG]] — pipeline do indeksowania scrape'owanych danych

## Resources
- Hands-on guide: https://substack.thewebscraping.club/p/scrapling-hands-on-guide
- MCP demo video: https://www.youtube.com/watch?v=qyFk3ZNwOxE
- Benchmarks: https://github.com/D4Vinci/Scrapling/blob/main/benchmarks.py

---
Template: [[templates/tool]]
