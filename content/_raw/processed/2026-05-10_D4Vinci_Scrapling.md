---
title: "D4Vinci/Scrapling: 🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl!"
source: "https://github.com/D4Vinci/Scrapling"
author:
published:
created: 2026-05-10
description: "🕷️ An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl! - D4Vinci/Scrapling"
tags:
  - "clippings"
---
## Effortless Web Scraping for the Modern Web

[![[0338afb7c2ac910d795d767faff93020_MD5.svg]]](https://trendshift.io/repositories/14244)  
[العربيه](https://github.com/D4Vinci/Scrapling/blob/main/docs/README_AR.md) | [Español](https://github.com/D4Vinci/Scrapling/blob/main/docs/README_ES.md) | [Português (Brasil)](https://github.com/D4Vinci/Scrapling/blob/main/docs/README_PT_BR.md) | [Français](https://github.com/D4Vinci/Scrapling/blob/main/docs/README_FR.md) | [Deutsch](https://github.com/D4Vinci/Scrapling/blob/main/docs/README_DE.md) | [简体中文](https://github.com/D4Vinci/Scrapling/blob/main/docs/README_CN.md) | [日本語](https://github.com/D4Vinci/Scrapling/blob/main/docs/README_JP.md) | [Русский](https://github.com/D4Vinci/Scrapling/blob/main/docs/README_RU.md) | [한국어](https://github.com/D4Vinci/Scrapling/blob/main/docs/README_KR.md)  

[**Selection methods**](https://scrapling.readthedocs.io/en/latest/parsing/selection.html) · [**Fetchers**](https://scrapling.readthedocs.io/en/latest/fetching/choosing.html) · [**Spiders**](https://scrapling.readthedocs.io/en/latest/spiders/architecture.html) · [**Proxy Rotation**](https://scrapling.readthedocs.io/en/latest/spiders/proxy-blocking.html) · [**CLI**](https://scrapling.readthedocs.io/en/latest/cli/overview.html) · [**MCP**](https://scrapling.readthedocs.io/en/latest/ai/mcp-server.html)

Scrapling is an adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl.

Its parser learns from website changes and automatically relocates your elements when pages update. Its fetchers bypass anti-bot systems like Cloudflare Turnstile out of the box. And its spider framework lets you scale up to concurrent, multi-session crawls with pause/resume and automatic proxy rotation - all in a few lines of Python. One library, zero compromises.

Blazing fast crawls with real-time stats and streaming. Built by Web Scrapers for Web Scrapers and regular users, there's something for everyone.

```
from scrapling.fetchers import Fetcher, AsyncFetcher, StealthyFetcher, DynamicFetcher
StealthyFetcher.adaptive = True
p = StealthyFetcher.fetch('https://example.com', headless=True, network_idle=True)  # Fetch website under the radar!
products = p.css('.product', auto_save=True)                                        # Scrape data that survives website design changes!
products = p.css('.product', adaptive=True)                                         # Later, if the website structure changes, pass \`adaptive=True\` to find them!
```

Or scale up to full crawls

```
from scrapling.spiders import Spider, Response

class MySpider(Spider):
  name = "demo"
  start_urls = ["https://example.com/"]

  async def parse(self, response: Response):
      for item in response.css('.product'):
          yield {"title": item.css('h2::text').get()}

MySpider().start()
```

[![[606d10361b5b14b1bd57e50e569b0380_MD5.png]]](https://dataimpulse.com/?utm_source=scrapling&utm_medium=banner&utm_campaign=scrapling)

## Platinum Sponsors

| [![[9f3de52ac54db1ee9191f4c400874e3a_MD5.png]]](https://coldproxy.com/ "Residential, IPv6 & Datacenter Proxies for Web Scraping") | [**ColdProxy**](https://coldproxy.com/) provides residential and datacenter proxies for stable web scraping, public data collection, and geo-targeted testing across 195+ countries. |
| --- | --- |
| [![[c0f6f15ed6facf4298ab7ce17902bf88_MD5.png]]](https://hypersolutions.co/?utm_source=github&utm_medium=readme&utm_campaign=scrapling "Bot Protection Bypass API for Akamai, DataDome, Incapsula & Kasada") | Scrapling handles Cloudflare Turnstile. For enterprise-grade protection, [**Hyper Solutions**](https://hypersolutions.co/?utm_source=github&utm_medium=readme&utm_campaign=scrapling) provides API endpoints that generate valid antibot tokens for **Akamai**, **DataDome**, **Kasada**, and **Incapsula**. Simple API calls, no browser automation required. |
| [![[6aa2bd5696d6cc7b1aed23cc98284292_MD5.jpg]]](https://birdproxies.com/t/scrapling "At Bird Proxies, we eliminate your pains such as banned IPs, geo restriction, and high costs so you can focus on your work.") | Hey, we built [**BirdProxies**](https://birdproxies.com/t/scrapling) because proxies shouldn't be complicated or overpriced. Fast residential and ISP proxies in 195+ locations, fair pricing, and real support.   **Try our FlappyBird game on the landing page for free data!** |
| [![[3e5e6110b7c0ba2f1c724a7bc541208a_MD5.png]]](https://evomi.com/?utm_source=github&utm_medium=banner&utm_campaign=d4vinci-scrapling "Evomi is your Swiss Quality Proxy Provider, starting at $0.49/GB") | [**Evomi**](https://evomi.com/?utm_source=github&utm_medium=banner&utm_campaign=d4vinci-scrapling) : residential proxies from $0.49/GB. Scraping browser with fully spoofed Chromium, residential IPs, auto CAPTCHA solving, and anti-bot bypass.   **Scraper API for hassle-free results. MCP and N8N integrations are available.** |
| [![[b11afb2ca775c10c7b49760b2be95cb4_MD5.jpg]]](https://tikhub.io/?utm_source=github.com/D4Vinci/Scrapling&utm_medium=marketing_social&utm_campaign=retargeting&utm_content=carousel_ad "Unlock the Power of Social Media Data & AI") | [TikHub.io](https://tikhub.io/?utm_source=github.com/D4Vinci/Scrapling&utm_medium=marketing_social&utm_campaign=retargeting&utm_content=carousel_ad) provides 900+ stable APIs across 16+ platforms including TikTok, X, YouTube & Instagram, with 40M+ datasets.   Also offers [DISCOUNTED AI models](https://ai.tikhub.io/?ref=KarimShoair) - Claude, GPT, GEMINI & more up to 71% off. |
| [![[3dd1d5e74cec61d1532f0517e6c5e38f_MD5.png]]](https://www.nsocks.com/?keyword=2p67aivg "Scalable Web Data Access for AI Applications") | [Nsocks](https://www.nsocks.com/?keyword=2p67aivg) provides fast Residential and ISP proxies for developers and scrapers. Global IP coverage, high anonymity, smart rotation, and reliable performance for automation and data extraction. Use [Xcrawl](https://www.xcrawl.com/?keyword=2p67aivg) to simplify large-scale web crawling. |
| [![[845e4c19be8a55ae5319e2f87f659eba_MD5.png]]](https://petrosky.io/d4vinci "PetroSky delivers cutting-edge VPS hosting.") | Close your laptop. Your scrapers keep running.   [PetroSky VPS](https://petrosky.io/d4vinci) - cloud servers built for nonstop automation. Windows and Linux machines with full control. From €6.99/mo. |
| [![[8b35820d0d0fbf0f27d6c5ae8dc3e8e6_MD5.png]]](https://substack.thewebscraping.club/p/scrapling-hands-on-guide?utm_source=github&utm_medium=repo&utm_campaign=scrapling "The #1 newsletter dedicated to Web Scraping") | Read a full review of [Scrapling on The Web Scraping Club](https://substack.thewebscraping.club/p/scrapling-hands-on-guide?utm_source=github&utm_medium=repo&utm_campaign=scrapling) (Nov 2025), the #1 newsletter dedicated to Web Scraping. |
| [![[6e69d8863c2886603857004050c24fab_MD5.png]]](http://mangoproxy.com/?utm_source=D4Vinci&utm_medium=GitHub&utm_campaign=D4Vinci "Proxies You Can Rely On: Residential, Server, and Mobile") | [Stable proxies](http://mangoproxy.com/?utm_source=D4Vinci&utm_medium=GitHub&utm_campaign=D4Vinci) for scraping, automation, and multi-accounting. Clean IPs, fast response, and reliable performance under load. Built for scalable workflows. |
| [![[6b5be0dde9b3737246f4bc4764d53b9d_MD5.png]]](https://www.swiftproxy.net/?ref=D4Vinci "Scalable Solutions for Web Data Access") | [Swiftproxy](https://www.swiftproxy.net/?ref=D4Vinci) provides scalable residential proxies with 80M+ IPs across 195+ countries, delivering fast, reliable connections, automatic rotation, and strong anti-block performance. Free trial available. |

*<sub>Do you want to show your ad here? Click <a href="https://github.com/sponsors/D4Vinci/sponsorships?tier_id=586646">here</a></sub>*

## Sponsors

[![[0ff7adaefaff8c94390a4990496a7e85_MD5.png]]](https://www.crawleo.dev/?utm_source=github&utm_medium=sponsor&utm_campaign=scrapling "Supercharge your AI with Real-Time Web Intelligence")

[![[2e7e9fbd57f74d774698b18137abd366_MD5.png]]](https://serpapi.com/?utm_source=scrapling "Scrape Google and other search engines with SerpApi") [![[49de833b34aef3fec10a1a9999584c6b_MD5.png]]](https://visit.decodo.com/Dy6W0b "Try the Most Efficient Residential Proxies for Free") [![[0a10e2f7d16a799b940fecf3d038f0cd_MD5.png]]](https://hasdata.com/?utm_source=github&utm_medium=banner&utm_campaign=D4Vinci "The web scraping service that actually beats anti-bot systems!") [![[f5a24338240e2e79d9de27fe0c85823b_MD5.png]]](https://proxyempire.io/?ref=scrapling&utm_source=scrapling "Collect The Data Your Project Needs with the Best Residential Proxies") [![[df8ce09f0c2d7d8d78f814c042eaffc7_MD5.png]]](https://www.webshare.io/?referral_code=48r2m2cd5uz1 "The Most Reliable Proxy with Unparalleled Performance") [![[a4ef827699afdc02cbc6b60f45a36695_MD5.jpg]]](https://www.ipfoxy.com/?r=scrapling "Unlock the Full Potential of Global Business with IPFoxy's High-Quality Rotating and Dedicated Proxy Services.") [![[e922e1cdcf28aab6edac9503e1c8708c_MD5.png]]](https://www.ipcook.com/?ref=EAENO9&utm_source=github&utm_medium=referral&utm_campaign=d4vinci_scrapling "Fast Proxies. Smart Pricing. Premium Performance.") [![[7614e76e6bb4d946a0e5184d64d49c8f_MD5.png]]](https://proxiware.com/?ref=scrapling "Collect Any Data. At Any Scale.")

*<sub>Do you want to show your ad here? Click <a href="https://github.com/sponsors/D4Vinci">here</a> and choose the tier that suites you!</sub>*

---

## Key Features

### Spiders - A Full Crawling Framework

- 🕷️ **Scrapy-like Spider API**: Define spiders with `start_urls`, async `parse` callbacks, and `Request` / `Response` objects.
- ⚡ **Concurrent Crawling**: Configurable concurrency limits, per-domain throttling, and download delays.
- 🔄 **Multi-Session Support**: Unified interface for HTTP requests, and stealthy headless browsers in a single spider - route requests to different sessions by ID.
- 💾 **Pause & Resume**: Checkpoint-based crawl persistence. Press Ctrl+C for a graceful shutdown; restart to resume from where you left off.
- 📡 **Streaming Mode**: Stream scraped items as they arrive via `async for item in spider.stream()` with real-time stats - ideal for UI, pipelines, and long-running crawls.
- 🛡️ **Blocked Request Detection**: Automatic detection and retry of blocked requests with customizable logic.
- 🤖 **Robots.txt Compliance**: Optional `robots_txt_obey` flag that respects `Disallow`, `Crawl-delay`, and `Request-rate` directives with per-domain caching.
- 🧪 **Development Mode**: Cache responses to disk on the first run and replay them on subsequent runs - iterate on your `parse()` logic without re-hitting the target servers.
- 📦 **Built-in Export**: Export results through hooks and your own pipeline or the built-in JSON/JSONL with `result.items.to_json()` / `result.items.to_jsonl()` respectively.

### Advanced Websites Fetching with Session Support

- **HTTP Requests**: Fast and stealthy HTTP requests with the `Fetcher` class. Can impersonate browsers' TLS fingerprint, headers, and use HTTP/3.
- **Dynamic Loading**: Fetch dynamic websites with full browser automation through the `DynamicFetcher` class supporting Playwright's Chromium and Google's Chrome.
- **Anti-bot Bypass**: Advanced stealth capabilities with `StealthyFetcher` and fingerprint spoofing. Can easily bypass all types of Cloudflare's Turnstile/Interstitial with automation.
- **Session Management**: Persistent session support with `FetcherSession`, `StealthySession`, and `DynamicSession` classes for cookie and state management across requests.
- **Proxy Rotation**: Built-in `ProxyRotator` with cyclic or custom rotation strategies across all session types, plus per-request proxy overrides.
- **Domain & Ad Blocking**: Block requests to specific domains (and their subdomains) or enable built-in ad blocking (~3,500 known ad/tracker domains) in browser-based fetchers.
- **DNS Leak Prevention**: Optional DNS-over-HTTPS support to route DNS queries through Cloudflare's DoH, preventing DNS leaks when using proxies.
- **Async Support**: Complete async support across all fetchers and dedicated async session classes.

### Adaptive Scraping & AI Integration

- 🔄 **Smart Element Tracking**: Relocate elements after website changes using intelligent similarity algorithms.
- 🎯 **Smart Flexible Selection**: CSS selectors, XPath selectors, filter-based search, text search, regex search, and more.
- 🔍 **Find Similar Elements**: Automatically locate elements similar to found elements.
- 🤖 **MCP Server to be used with AI**: Built-in MCP server for AI-assisted Web Scraping and data extraction. The MCP server features powerful, custom capabilities that leverage Scrapling to extract targeted content before passing it to the AI (Claude/Cursor/etc), thereby speeding up operations and reducing costs by minimizing token usage. ([demo video](https://www.youtube.com/watch?v=qyFk3ZNwOxE))

### High-Performance & battle-tested Architecture

- 🚀 **Lightning Fast**: Optimized performance outperforming most Python scraping libraries.
- 🔋 **Memory Efficient**: Optimized data structures and lazy loading for a minimal memory footprint.
- ⚡ **Fast JSON Serialization**: 10x faster than the standard library.
- 🏗️ **Battle tested**: Not only does Scrapling have 92% test coverage and full type hints coverage, but it has been used daily by hundreds of Web Scrapers over the past year.

### Developer/Web Scraper Friendly Experience

- 🎯 **Interactive Web Scraping Shell**: Optional built-in IPython shell with Scrapling integration, shortcuts, and new tools to speed up Web Scraping scripts development, like converting curl requests to Scrapling requests and viewing requests results in your browser.
- 🚀 **Use it directly from the Terminal**: Optionally, you can use Scrapling to scrape a URL without writing a single line of code!
- 🛠️ **Rich Navigation API**: Advanced DOM traversal with parent, sibling, and child navigation methods.
- 🧬 **Enhanced Text Processing**: Built-in regex, cleaning methods, and optimized string operations.
- 📝 **Auto Selector Generation**: Generate robust CSS/XPath selectors for any element.
- 🔌 **Familiar API**: Similar to Scrapy/BeautifulSoup with the same pseudo-elements used in Scrapy/Parsel.
- 📘 **Complete Type Coverage**: Full type hints for excellent IDE support and code completion. The entire codebase is automatically scanned with **PyRight** and **MyPy** with each change.
- 🔋 **Ready Docker image**: With each release, a Docker image containing all browsers is automatically built and pushed.

## Getting Started

Let's give you a quick glimpse of what Scrapling can do without deep diving.

### Basic Usage

HTTP requests with session support

```
from scrapling.fetchers import Fetcher, FetcherSession

with FetcherSession(impersonate='chrome') as session:  # Use latest version of Chrome's TLS fingerprint
    page = session.get('https://quotes.toscrape.com/', stealthy_headers=True)
    quotes = page.css('.quote .text::text').getall()

# Or use one-off requests
page = Fetcher.get('https://quotes.toscrape.com/')
quotes = page.css('.quote .text::text').getall()
```

Advanced stealth mode

```
from scrapling.fetchers import StealthyFetcher, StealthySession

with StealthySession(headless=True, solve_cloudflare=True) as session:  # Keep the browser open until you finish
    page = session.fetch('https://nopecha.com/demo/cloudflare', google_search=False)
    data = page.css('#padded_content a').getall()

# Or use one-off request style, it opens the browser for this request, then closes it after finishing
page = StealthyFetcher.fetch('https://nopecha.com/demo/cloudflare')
data = page.css('#padded_content a').getall()
```

Full browser automation

```
from scrapling.fetchers import DynamicFetcher, DynamicSession

with DynamicSession(headless=True, disable_resources=False, network_idle=True) as session:  # Keep the browser open until you finish
    page = session.fetch('https://quotes.toscrape.com/', load_dom=False)
    data = page.xpath('//span[@class="text"]/text()').getall()  # XPath selector if you prefer it

# Or use one-off request style, it opens the browser for this request, then closes it after finishing
page = DynamicFetcher.fetch('https://quotes.toscrape.com/')
data = page.css('.quote .text::text').getall()
```

### Spiders

Build full crawlers with concurrent requests, multiple session types, and pause/resume:

```
from scrapling.spiders import Spider, Request, Response

class QuotesSpider(Spider):
    name = "quotes"
    start_urls = ["https://quotes.toscrape.com/"]
    concurrent_requests = 10
    
    async def parse(self, response: Response):
        for quote in response.css('.quote'):
            yield {
                "text": quote.css('.text::text').get(),
                "author": quote.css('.author::text').get(),
            }
            
        next_page = response.css('.next a')
        if next_page:
            yield response.(next_page[0].attrib['href'])

result = QuotesSpider().start()
print(f"Scraped {len(result.items)} quotes")
result.items.to_json("quotes.json")
```

Use multiple session types in a single spider:

```
from scrapling.spiders import Spider, Request, Response
from scrapling.fetchers import FetcherSession, AsyncStealthySession

class MultiSessionSpider(Spider):
    name = "multi"
    start_urls = ["https://example.com/"]
    
    def configure_sessions(self, manager):
        manager.add("fast", FetcherSession(impersonate="chrome"))
        manager.add("stealth", AsyncStealthySession(headless=True), lazy=True)
    
    async def parse(self, response: Response):
        for link in response.css('a::attr(href)').getall():
            # Route protected pages through the stealth session
            if "protected" in link:
                yield Request(link, sid="stealth")
            else:
                yield Request(link, sid="fast", callback=self.parse)  # explicit callback
```

Pause and resume long crawls with checkpoints by running the spider like this:

```
QuotesSpider(crawldir="./crawl_data").start()
```

Press Ctrl+C to pause gracefully - progress is saved automatically. Later, when you start the spider again, pass the same `crawldir`, and it will resume from where it stopped.

```
from scrapling.fetchers import Fetcher

# Rich element selection and navigation
page = Fetcher.get('https://quotes.toscrape.com/')

# Get quotes with multiple selection methods
quotes = page.css('.quote')  # CSS selector
quotes = page.xpath('//div[@class="quote"]')  # XPath
quotes = page.find_all('div', {'class': 'quote'})  # BeautifulSoup-style
# Same as
quotes = page.find_all('div', class_='quote')
quotes = page.find_all(['div'], class_='quote')
quotes = page.find_all(class_='quote')  # and so on...
# Find element by text content
quotes = page.find_by_text('quote', tag='div')

# Advanced navigation
quote_text = page.css('.quote')[0].css('.text::text').get()
quote_text = page.css('.quote').css('.text::text').getall()  # Chained selectors
first_quote = page.css('.quote')[0]
 = first_quote.next_sibling.css('.author::text')
parent_container = first_quote.parent

# Element relationships and similarity
similar_elements = first_quote.find_similar()
below_elements = first_quote.below_elements()
```

You can use the parser right away if you don't want to fetch websites like below:

```
from scrapling.parser import Selector

page = Selector("<html>...</html>")
```

And it works precisely the same way!

### Async Session Management Examples

```
import asyncio
from scrapling.fetchers import FetcherSession, AsyncStealthySession, AsyncDynamicSession

async with FetcherSession(http3=True) as session:  # \`FetcherSession\` is context-aware and can work in both sync/async patterns
    page1 = session.get('https://quotes.toscrape.com/')
    page2 = session.get('https://quotes.toscrape.com/', impersonate='firefox135')

# Async session usage
async with AsyncStealthySession(max_pages=2) as session:
    tasks = []
    urls = ['https://example.com/page1', 'https://example.com/page2']
    
    for url in urls:
        task = session.fetch(url)
        tasks.append(task)
    
    print(session.get_pool_stats())  # Optional - The status of the browser tabs pool (busy/free/error)
    results = await asyncio.gather(*tasks)
    print(session.get_pool_stats())
```

## CLI & Interactive Shell

Scrapling includes a powerful command-line interface:

[![[c5842995a00ff200ba948f128e4d4ac7_MD5.svg]]](https://asciinema.org/a/736339)

Launch the interactive Web Scraping shell

```
scrapling shell
```

Extract pages to a file directly without programming (Extracts the content inside the `body` tag by default). If the output file ends with `.txt`, then the text content of the target will be extracted. If it ends in `.md`, it will be a Markdown representation of the HTML content; if it ends in `.html`, it will be the HTML content itself.

```
scrapling extract get 'https://example.com' content.md
scrapling extract get 'https://example.com' content.txt --css-selector '#fromSkipToProducts' --impersonate 'chrome'  # All elements matching the CSS selector '#fromSkipToProducts'
scrapling extract fetch 'https://example.com' content.md --css-selector '#fromSkipToProducts' --no-headless
scrapling extract stealthy-fetch 'https://nopecha.com/demo/cloudflare' captchas.html --css-selector '#padded_content a' --solve-cloudflare
```

> [!note] Note
> There are many additional features, but we want to keep this page concise, including the MCP server and the interactive Web Scraping Shell. Check out the full documentation [here](https://scrapling.readthedocs.io/en/latest/)

## Performance Benchmarks

Scrapling isn't just powerful-it's also blazing fast. The following benchmarks compare Scrapling's parser with the latest versions of other popular libraries.

### Text Extraction Speed Test (5000 nested elements)

| # | Library | Time (ms) | vs Scrapling |
| --- | --- | --- | --- |
| 1 | Scrapling | 2.02 | 1.0x |
| 2 | Parsel/Scrapy | 2.04 | 1.01 |
| 3 | Raw Lxml | 2.54 | 1.257 |
| 4 | PyQuery | 24.17 | ~12x |
| 5 | Selectolax | 82.63 | ~41x |
| 6 | MechanicalSoup | 1549.71 | ~767.1x |
| 7 | BS4 with Lxml | 1584.31 | ~784.3x |
| 8 | BS4 with html5lib | 3391.91 | ~1679.1x |

### Element Similarity & Text Search Performance

Scrapling's adaptive element finding capabilities significantly outperform alternatives:

| Library | Time (ms) | vs Scrapling |
| --- | --- | --- |
| Scrapling | 2.39 | 1.0x |
| AutoScraper | 12.45 | 5.209x |

> All benchmarks represent averages of 100+ runs. See [benchmarks.py](https://github.com/D4Vinci/Scrapling/blob/main/benchmarks.py) for methodology.

## Installation

Scrapling requires Python 3.10 or higher:

```
pip install scrapling
```

This installation only includes the parser engine and its dependencies, without any fetchers or commandline dependencies.

### Optional Dependencies

1. If you are going to use any of the extra features below, the fetchers, or their classes, you will need to install fetchers' dependencies and their browser dependencies as follows:
	```
	pip install "scrapling[fetchers]"
	scrapling install           # normal install
	scrapling install  --force  # force reinstall
	```
	This downloads all browsers, along with their system dependencies and fingerprint manipulation dependencies.
	Or you can install them from the code instead of running a command like this:
	```
	from scrapling.cli import install
	install([], standalone_mode=False)          # normal install
	install(["--force"], standalone_mode=False) # force reinstall
	```
2. Extra features:
	- Install the MCP server feature:
		```
		pip install "scrapling[ai]"
		```
		- Install shell features (Web Scraping shell and the `extract` command):
		```
		pip install "scrapling[shell]"
		```
		- Install everything:
		```
		pip install "scrapling[all]"
		```
	Remember that you need to install the browser dependencies with `scrapling install` after any of these extras (if you didn't already)

### Docker

You can also install a Docker image with all extras and browsers with the following command from DockerHub:

```
docker pull pyd4vinci/scrapling
```

Or download it from the GitHub registry:

```
docker pull ghcr.io/d4vinci/scrapling:latest
```

This image is automatically built and pushed using GitHub Actions and the repository's main branch.

## Contributing

We welcome contributions! Please read our [contributing guidelines](https://github.com/D4Vinci/Scrapling/blob/main/CONTRIBUTING.md) before getting started.

## Disclaimer

> [!caution] Caution
> This library is provided for educational and research purposes only. By using this library, you agree to comply with local and international data scraping and privacy laws. The authors and contributors are not responsible for any misuse of this software. Always respect the terms of service of websites and robots.txt files.

## 🎓 Citations

If you have used our library for research purposes please quote us with the following reference:

```
@misc{scrapling,
  author = {Karim Shoair},
  title = {Scrapling},
  year = {2024},
  url = {https://github.com/D4Vinci/Scrapling},
  note = {An adaptive Web Scraping framework that handles everything from a single request to a full-scale crawl!}
}
```

## License

This work is licensed under the BSD-3-Clause License.

## Acknowledgments

This project includes code adapted from:

- Parsel (BSD License)-Used for [translator](https://github.com/D4Vinci/Scrapling/blob/main/scrapling/core/translator.py) submodule

---

Designed & crafted with ❤️ by Karim Shoair.