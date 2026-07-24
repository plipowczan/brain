---
title: "Crawl4AI"
date: 2026-07-24
enableToc: true
openToc: true
tags: ["tool", "ai", "web-scraping", "crawler", "markdown", "rag", "python", "self-hosted", "open-source", "apache-2.0"]
type: tool
source: "https://github.com/unclecode/crawl4ai"
agent-created: true
summary: "Open-source LLM-friendly web crawler & scraper — turns the web into clean, LLM-ready markdown for RAG, agents and data pipelines; async, controllable, Docker/FastAPI, 50k+ stars"
---
# Crawl4AI

`unclecode/crawl4ai` — an open-source **LLM-friendly web crawler and scraper** that turns web pages into **clean, LLM-ready markdown** for RAG, agents, and data pipelines. Fast, controllable, and self-hostable, with no rate-limited API and no lock-in: you own the pipeline. Runs as a Python package or a Dockerized **FastAPI** server; ~50k+ stars. Recent releases (v0.8.x–v0.9.x) hardened the Docker API to **secure-by-default** (auth on, loopback binding, request body treated as an untrusted boundary).

In the [[LLM App Engineering Stack]] this is the **web-ingestion lane** — the web-side counterpart to [[Marker]] (files → markdown), feeding chunkers ([[Chonkie]]) and vector stores ([[Qdrant]]). Where a build needs to *acquire* content from the open web before indexing it, this is the tool.

## 🔗 Links

### Description
- Repo: https://github.com/unclecode/crawl4ai
- Docs: https://docs.crawl4ai.com
- License: **Apache-2.0** · latest at ingest: **v0.9.2**

### Download or use
```bash
pip install -U crawl4ai
crawl4ai-setup            # install Playwright browsers
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
# Dockerized FastAPI server (auth on by default; supply a token)
docker run -p 11235:11235 unclecode/crawl4ai
```

## 🗒️ Description

### 🧩 Core features
- **Clean markdown output** — strips boilerplate to LLM-ready text; content filters for "fit markdown".
- **Async & fast** — `AsyncWebCrawler`, `MemoryAdaptiveDispatcher`, and a `prefetch=True` mode for 5–10× faster URL discovery.
- **Deep crawl** — multi-page crawling with crash recovery (`resume_state`, `on_state_change`) for long runs.
- **Structured extraction** — CSS/XPath and **LLM-based** extraction strategies into JSON schemas.
- **Controllable browser** — Playwright under the hood: sessions, hooks, JS execution, proxies, anti-bot handling.
- **Deploy anywhere** — CLI, Python, or Docker/FastAPI; zero keys required.

### 🧩 Security posture
v0.9.0 made the Docker API server secure-by-default; v0.8.7 fixed critical RCE/SSRF/auth-bypass issues. Treat the request body as untrusted and run behind a token — relevant if exposing the server.

## ✍️ Reasoning for
- **RAG data acquisition** — the cleanest OSS path from "a list of URLs" to "markdown corpus" before chunking + embedding.
- **Own the pipeline** — no per-request API bill or vendor rate limits; runs on my own infra (matters for [[Tech To The Rescue]]-style data work, alongside [[Bright Data]] for the harder anti-bot cases).
- **Agent tooling** — a controllable crawler is a natural tool to hand an agent that needs live web content.

Weak points: Playwright means a real browser dependency (heavier than plain HTTP fetch); JS-heavy/anti-bot sites still fight back; if exposing the server, security config is on you.

## Alternatives considered
- **Firecrawl** — hosted (and OSS) web→markdown; managed convenience vs Crawl4AI's self-host/no-lock-in.
- **[[Bright Data]]** — proxy/anti-bot infrastructure for the hardest targets; complementary, not markdown-focused.
- **ScrapeGraphAI** — LLM-driven scraping graphs; different abstraction.
- **Playwright / BeautifulSoup by hand** — full control, but you rebuild the markdown cleaning + dispatch + deep-crawl that Crawl4AI ships.

## 🔗 Resources
- Docs: https://docs.crawl4ai.com
- README: https://github.com/unclecode/crawl4ai
- v0.9.0 secure-by-default notes: https://github.com/unclecode/crawl4ai/blob/main/docs/blog/release-v0.9.0.md

---
Template: [[templates/tool]]
