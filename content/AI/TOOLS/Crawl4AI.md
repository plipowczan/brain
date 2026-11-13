---
title: "Crawl4AI"
date: 2026-07-24
enableToc: true
openToc: true
tags: ["tool", "ai", "web-scraping", "crawler", "markdown", "rag", "python", "self-hosted", "open-source", "apache-2.0"]
type: tool
source: "https://github.com/unclecode/crawl4ai"
agent-created: true
agent-reviewed: 2026-11-13
summary: "Open-source LLM-friendly web crawler & scraper — turns the web into clean, LLM-ready markdown for RAG, agents and data pipelines; async, controllable, Docker/FastAPI, ~87k stars; Apache-2.0 plus a mandatory attribution clause; now also sold as hosted Crawl4AI Cloud"
status-checked: 2026-11-13
project-status: active
---
# Crawl4AI

> [!success] Status check 2026-11-13 — active
> **Verdict:** There were commits on develop on 2026-11-12 and on main on 2026-11-04.
> **Last release:** v0.9.5 (2026-10-14), on GitHub Releases, PyPI (crawl4ai 0.9.5… · **last commit:** 2026-11-04 · **licence:** Apache-2.0, plus an 'Attribution Requirement' section appended to LICENSE that requires crediting UncleCode/Crawl4AI in…
> **Repo:** https://github.com/unclecode/crawl4ai
> **Changed since this note:** At the note date the version was v0.9.2. Since then: v0.9.3, v0.9.4 and v0.9.5 were security releases closing 14 coordinated-disclosure advisories in the Docker server's handling of untrusted request bodies.

`unclecode/crawl4ai` — an open-source **LLM-friendly web crawler and scraper** that turns web pages into **clean, LLM-ready markdown** for RAG, agents, and data pipelines. Fast, controllable, and self-hostable, with no rate-limited API and no lock-in: you own the pipeline. Runs as a Python package or a Dockerized **FastAPI** server; ~50k+ stars when I wrote this, ~87k on 2026-11-13. Releases v0.8.x–v0.9.5 hardened the Docker API to **secure-by-default** (auth on, loopback binding, request body treated as an untrusted boundary).

Since autumn 2026 the repo is also the front door for **Crawl4AI Cloud**, the maintainers' paid hosted API (`/scrape`, `/extract`, `/search`, `/serp`, `/answer`, batch jobs, an MCP for agents; 1,000 free credits a month, plans from \$10). The GitHub description and README (since 2026-11-04) lead with the cloud and present the open-source crawler as the engine behind it, with self-hosting further down. The library and self-hosted server stay free.

In the [[LLM App Engineering Stack]] this is the **web-ingestion lane** — the web-side counterpart to [[Marker]] (files → markdown), feeding chunkers ([[Chonkie]]) and vector stores ([[Qdrant]]). Where a build needs to *acquire* content from the open web before indexing it, this is the tool.

## 🔗 Links

### Description
- Repo: https://github.com/unclecode/crawl4ai
- Docs: https://docs.crawl4ai.com
- License: **Apache-2.0 plus an attribution requirement** (see below) · latest at ingest: **v0.9.2** · latest on 2026-11-13: **v0.9.5** (2026-10-14; GitHub, PyPI and Docker `unclecode/crawl4ai:0.9.5`)
- Cloud: https://crawl4ai.com

### ⚖️ Licence — Apache-2.0 with an extra attribution clause
I recorded this as plain Apache-2.0, which was incomplete even at ingest: an "Attribution Requirement" section has been appended to the LICENSE since v0.5.0 (February 2025). GitHub and PyPI still show just Apache-2.0. What it asks:

- **Every distribution, publication or public use** of Crawl4AI, or of a derivative work, must carry the attribution line given in the LICENSE (that the product includes software developed by UncleCode as part of the Crawl4AI project, with links to x.com/unclecode and the repo).
- **Where to put it**: software distributions in a NOTICE file, README or equivalent docs; papers and articles in the acknowledgements or a footnote; websites and web apps in an About or Credits section; command-line tools in the help/usage output.
- The README is softer ("attribution is recommended") and offers a "Powered by Crawl4AI" badge or a one-line text credit instead; I treat the LICENSE wording as the binding one.

Internal use that is never distributed or shown publicly seems outside it. Anything I ship or publish that uses it needs the credit line.

### Download or use
```bash
pip install -U crawl4ai
crawl4ai-setup            # install Playwright browsers
crawl4ai-doctor           # check the installation
```
```python
import asyncio
from crawl4ai import AsyncWebCrawler

async def main():
    async with AsyncWebCrawler() as crawler:
        result = await crawler.arun(url="https://example.com")
        print(result.markdown)      # clean, LLM-ready

asyncio.run(main())
```
```bash
# Dockerized FastAPI server: needs a token; without one it answers only inside its container
export CRAWL4AI_API_TOKEN="$(openssl rand -hex 32)"
docker run -d -p 11235:11235 --name crawl4ai --shm-size=1g \
  -e CRAWL4AI_API_TOKEN="$CRAWL4AI_API_TOKEN" \
  unclecode/crawl4ai:latest
# then call it with: -H "Authorization: Bearer $CRAWL4AI_API_TOKEN"
```

`crawl4ai-setup` and first runs now print a short Crawl4AI Cloud notice; `CRAWL4AI_NO_CLOUD_NOTICE=1` turns it off.

## 🗒️ Description

### 🧩 Core features
- **Clean markdown output** — strips boilerplate to LLM-ready text; content filters for "fit markdown" (`PruningContentFilterLXML`, about 10× faster and the default since v0.9.4; the old `PruningContentFilter` is deprecated but still imports; also `BM25ContentFilter`, `LLMContentFilter`).
- **Async & fast** — `AsyncWebCrawler`, `MemoryAdaptiveDispatcher`, and a `prefetch=True` mode for 5–10× faster URL discovery.
- **Deep crawl** — multi-page crawling with crash recovery (`resume_state`, `on_state_change`) for long runs.
- **Structured extraction** — CSS/XPath and **LLM-based** extraction strategies into JSON schemas.
- **Controllable browser** — Playwright under the hood: sessions, hooks, JS execution, proxies, anti-bot handling.
- **Deploy anywhere** — CLI, Python, or Docker/FastAPI; no third-party API key required (the Docker server needs your own self-generated `CRAWL4AI_API_TOKEN`).

### 🧩 Security posture
v0.9.0 made the Docker API server secure-by-default; v0.8.7 fixed critical RCE/SSRF/auth-bypass issues. Since this note, v0.9.3 (2026-08-31), v0.9.4 (2026-09-23) and v0.9.5 (2026-10-14) were security releases closing **14 more coordinated-disclosure advisories** in how the Docker server handles untrusted request bodies: arbitrary file write, SSRF, size-based DoS and XSS in the PDF path; a Playground XSS that could steal the API token; SSRF through robots.txt, link preview and cache-freshness fetches; a gate bypass that let a non-admin client read server environment variables (LLM keys included); page JavaScript injection via `css_selector` / `wait_for`; a caller-chosen HuggingFace model in `CosineStrategy` (pickle RCE risk with old PyTorch); ReDoS through caller regexes; unbounded delay fields; and Chromium launched with `--ignore-certificate-errors`. They added a process-wide `egress_policy` that routes the library's own HTTP fetches through the server's pinning egress proxy, and v0.9.5 made deep crawling on the Docker server opt-in (`CRAWL4AI_ALLOW_DEEP_CRAWL=true`, with page/depth budgets). Treat the request body as untrusted, keep auth on, keep the server updated and off the public internet.

## ✍️ Reasoning for
- **RAG data acquisition** — the cleanest OSS path from "a list of URLs" to "markdown corpus" before chunking + embedding.
- **Own the pipeline** — no per-request API bill or vendor rate limits; runs on my own infra (matters for [[Tech To The Rescue]]-style data work, alongside [[Bright Data]] for the harder anti-bot cases).
- **Agent tooling** — a controllable crawler is a natural tool to hand an agent that needs live web content.

Weak points: Playwright means a real browser dependency (heavier than plain HTTP fetch); JS-heavy/anti-bot sites still fight back; if exposing the server, security config is on you. New since I wrote this: the attribution clause is an obligation beyond Apache-2.0, the README and CLI now push the paid cloud, and the 0.x API keeps churning (deprecations, new restrictions on Docker-server request fields).

## Alternatives considered
- **Firecrawl** — hosted (and OSS) web→markdown; managed convenience vs Crawl4AI's self-host/no-lock-in.
- **[[Bright Data]]** — proxy/anti-bot infrastructure for the hardest targets; complementary, not markdown-focused.
- **ScrapeGraphAI** — LLM-driven scraping graphs; different abstraction.
- **Playwright / BeautifulSoup by hand** — full control, but you rebuild the markdown cleaning + dispatch + deep-crawl that Crawl4AI ships.
- **Crawl4AI Cloud** — the maintainers' own hosted API: they run the browsers and handle bot walls, and add web search; the trade-off is the per-credit bill and lock-in this note's self-host argument avoids.

## 🔗 Resources
- Docs: https://docs.crawl4ai.com
- README: https://github.com/unclecode/crawl4ai
- LICENSE (Apache-2.0 + Attribution Requirement): https://github.com/unclecode/crawl4ai/blob/main/LICENSE
- CHANGELOG (0.9.3–0.9.5 security releases): https://github.com/unclecode/crawl4ai/blob/main/CHANGELOG.md
- Crawl4AI Cloud: https://crawl4ai.com
- v0.9.0 secure-by-default notes: https://github.com/unclecode/crawl4ai/blob/main/docs/blog/release-v0.9.0.md

---
Template: [[templates/tool]]
