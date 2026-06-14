---
title: "Clay"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "sales", "data-enrichment", "crm", "outbound", "automation"]
type: tool
agent-created: true
summary: "Data-enrichment and outbound platform — spreadsheet UI over 100+ enrichment sources + AI for prospecting/personalization; planned for the Jakub Głąb agent's enrichment"
---

# Clay

A go-to-market data platform with a spreadsheet-like UI sitting on top of **100+ enrichment providers**. You drop in a list of people/companies and Clay waterfalls across data sources to fill in emails, firmographics, signals, and social profiles — then uses AI to research and personalize outreach. It's the modern "enrichment + prospecting" layer that replaces stitching together a dozen separate data APIs by hand.

## Links

### Description

- **Waterfall enrichment** — try multiple providers in sequence to maximize fill rate (email, phone, firmographics).
- **100+ integrations** — one interface over many data vendors and tools.
- **AI research/personalization** — Claygent agent researches accounts and writes tailored copy.
- **Signals** — job changes, funding, hiring, tech-stack triggers.
- **Spreadsheet UX + API** — tables and automations; usable as a data backend.

### Download or use

- Platform: [clay.com](https://www.clay.com/)

## Reasoning for

Clay is **planned** for the [[Jakub Głąb Agent System]] — the enrichment layer for building contact/company context behind the agent's research and outreach skills. It fits because the agent already operates over a structured entity-wiki; Clay's waterfall enrichment is a natural upstream source to populate and refresh those entities with verified contact and firmographic data. It sits alongside scraping-based approaches ([[Bright Data]], [[Firecrawl]]) and pure-API enrichment ([[People Data Labs]]): Clay is the orchestration layer that can *combine* many of those sources with AI on top, rather than a single data vendor.

## Alternatives considered

- **[[People Data Labs]]** — raw person/company enrichment API; Clay can sit *on top of* PDL and others rather than replace them.
- **[[Bright Data]]** — scraping/datasets at scale; Clay is enrichment-orchestration + outreach, not raw scraping infra.
- **Apollo.io / Instantly** — bundled B2B database + sequencing; Clay is more flexible/composable across sources.
- **Manual API stitching** — full control, far more maintenance; Clay's value is collapsing that into one interface.

## Resources

- 📘 [Clay](https://www.clay.com/)
- 🔗 [[People Data Labs]] · [[Bright Data]] · [[Firecrawl]] — related enrichment/research tooling
- 🔗 [[Autonomous Sales Agent Playbook]] — related agentic-sales pattern

---
Template: [[templates/tool]]
