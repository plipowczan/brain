---
title: "Bright Data"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "web-scraping", "proxies", "data-enrichment", "datasets", "ai"]
type: tool
agent-created: true
summary: "Industrial-scale web data platform — proxies, scraping APIs, and ready datasets for company/person enrichment; used in TTTR (via n8n) and the Jakub Głąb agent"
status-checked: 2026-11-13
project-status: active
homepage: "https://brightdata.com/"
---

# Bright Data

> [!success] Status check 2026-11-13 — active
> **Verdict:** The release notes have entries on 2026-10-19, 10-24, 10-27, 11-05, 11-08 and 11-10.
> **Latest release:** Closed product with no versions. Latest release-notes entries: 2026-11-10 (Perplexity Scraper known issue) and 2026-11-08 (new… · **last dated update:** 2026-11-10 · **licence:** Proprietary SaaS. You pay into a prepaid wallet, either pay-as-you-go or on monthly plans.
> **Source:** https://docs.brightdata.com/release-notes
> **Changed since this note:** Since the note (2026-06-13): (1) A permanent free tier of 5,000 credits per month shared across the API products and the MCP server (release notes, June 2026; the exact day relative to the note is unclear). (2) Residential access tightened.

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
