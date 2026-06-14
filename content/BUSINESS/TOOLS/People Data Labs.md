---
title: "People Data Labs"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "data-enrichment", "api", "b2b-data", "sales", "person-data"]
type: tool
agent-created: true
summary: "Person- and company-data enrichment API — developer-first access to large B2B datasets; planned enrichment source for the Jakub Głąb agent"
---

# People Data Labs

A developer-first **data-enrichment API** providing programmatic access to large person and company datasets (hundreds of millions of profiles). You query by an identifier (email, name+company, domain) and get back a structured record — title, employment history, company firmographics, location, social handles. It's raw enrichment infrastructure: the API you build on, rather than an app you click around in.

## Links

### Description

- **Person Enrichment** — resolve an email/identifier to a full professional profile.
- **Company Enrichment** — firmographics by domain (size, industry, location, etc.).
- **Search API** — query the dataset by criteria to build lists.
- **Bulk & datasets** — large-scale enrichment and licensed data.
- **Developer-first** — clean REST API, predictable schema, SDKs.

### Download or use

```bash
# REST API, e.g.:
# GET https://api.peopledatalabs.com/v5/person/enrich?email=...
```

- Site: [peopledatalabs.com](https://www.peopledatalabs.com/)
- Docs: [docs.peopledatalabs.com](https://docs.peopledatalabs.com/)

## Reasoning for

People Data Labs is a **planned** enrichment source for the [[Jakub Głąb Agent System]] — a clean API to resolve and enrich the people/companies the agent tracks in its entity-wiki. Being developer-first matters here: the agent system is code/skill-driven, so a predictable enrichment API drops straight into a skill, versus a GUI tool that needs a human. It's the lower-level counterpart to [[Clay]] (which can orchestrate PDL among many sources with AI on top) and complements scraping-based collection ([[Bright Data]], [[Firecrawl]]) — API enrichment for known entities vs scraping for open-ended discovery.

## Alternatives considered

- **[[Clay]]** — orchestrates many enrichment sources (incl. PDL) with AI; PDL is the raw API beneath such orchestration.
- **[[Bright Data]]** — scraping + datasets at scale; PDL is curated enrichment-by-identifier, not scraping.
- **Apollo / Clearbit / Hunter** — B2B contact databases; comparable data, PDL leans most developer/API-first.

## Resources

- 📘 [People Data Labs docs](https://docs.peopledatalabs.com/)
- 🔗 [[Clay]] · [[Bright Data]] · [[Firecrawl]] — related enrichment/research tooling

---
Template: [[templates/tool]]
