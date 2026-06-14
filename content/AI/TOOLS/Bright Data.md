---
title: "Bright Data"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "web-scraping", "proxies", "data-enrichment", "datasets", "ai"]
type: tool
agent-created: true
summary: "Industrial-scale web data platform — proxies, scraping APIs, and ready datasets for company/person enrichment; used in TTTR (via n8n) and the Jakub Głąb agent"
---

# Bright Data

An industrial-grade web-data platform. Where lighter tools fetch a page, Bright Data operates at scale: a large proxy network (residential/datacenter/mobile), managed **Scraper APIs** for tough targets, a Web Unlocker that defeats anti-bot defenses, and pre-collected **datasets** (company, LinkedIn-style profiles, e-commerce). It's the heavy machinery you reach for when scraping has to be reliable, large-volume, and enrichment-grade.

## Links

### Description

- **Proxy network** — residential/datacenter/mobile IPs for geo-targeted, block-resistant requests.
- **Web Unlocker** — automatic CAPTCHA/anti-bot handling.
- **Scraper APIs** — managed scrapers for popular hard targets.
- **Datasets** — ready-made structured datasets (companies, profiles, products) for enrichment.
- **SERP API** — programmatic search-engine results.

### Download or use

- Platform: [brightdata.com](https://brightdata.com/)
- Proxy endpoints + REST APIs; often wired into [[n8n]] flows.
- Docs: [docs.brightdata.com](https://docs.brightdata.com/)

## Reasoning for

Bright Data is the enrichment/scraping muscle in two engagements. In the [[Tech To The Rescue]] platform it supplies company-data enrichment, invoked from [[n8n]] automation flows rather than ad-hoc scripts. In the [[Jakub Głąb Agent System]] it sits in the research/enrichment toolkit for building out contact and company context. It's deliberately distinct from [[Firecrawl]]/[[Perplexity]]: those are for clean-content and cited-answers, while Bright Data is for *volume and resistance* — getting structured records reliably from sources that actively fight scrapers, or buying the dataset outright instead of crawling it.

## Alternatives considered

- **[[Firecrawl]]** — clean LLM-ready content at small/medium scale; Bright Data wins on volume, proxies, and anti-bot.
- **Clay / People Data Labs** — enrichment via curated APIs rather than scraping; complementary, used for person/company records ([[Clay]], [[People Data Labs]]).
- **Apify** — scraping/automation marketplace; similar territory, Bright Data leads on proxy infrastructure and datasets.
- **[[Scrapling]]** — self-hosted DIY scraping; cheaper but you own the anti-bot arms race.

## Resources

- 📘 [Bright Data docs](https://docs.brightdata.com/)
- 🧩 [Datasets](https://brightdata.com/products/datasets)
- 🔗 [[Firecrawl]] · [[Perplexity]] · [[Clay]] · [[People Data Labs]]

---
Template: [[templates/tool]]
