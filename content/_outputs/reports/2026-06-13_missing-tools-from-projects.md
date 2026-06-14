---
title: "Missing Tools — Active Projects Audit"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["report", "tools", "audit", "projects"]
type: answer-note
agent-created: true
summary: "Tools used across the 8 active projects that have no note in the vault yet — prioritized, with what each is for and which projects use it"
---
# Missing Tools — Active Projects Audit

Audit of tools/services used across the 8 active projects ([[Qamera AI]], [[AGRE]], [[Tech To The Rescue]], [[Jakub Głąb Agent System]], [[Value Builders]], [[Tech News Weekly]], [[Travelcast AI]], [[Agentic Skills Submodules|shared-skills]]) that **do not yet have a note** in this vault. Already-documented tools (Next.js, React, Supabase, Docker, Git, Google Cloud, Sentry, PostHog, Make, n8n, Zapier, Notion, Airtable, Cursor, Claude Code, MakerKit, VAPI, Excalidraw, Marp, ClickUp, 1Password, OpenSpec, Scrapling, Remotion, Sendgrid, Revolut, Superpowers, Agent Skills, Voicebox, Langfuse, LightRAG, Impeccable) are excluded.

**Project key:** Q = Qamera AI · AGRE · TTTR = Tech To The Rescue · JG = Jakub Głąb · VB = Value Builders · TNW = Tech News Weekly · TC = Travelcast AI · SS = shared-skills

---

## 🥇 Tier 1 — Core infra, used across many projects ✅ CREATED 2026-06-13

> **All nine Tier-1 notes now exist** and are wikilinked from the relevant project notes (stack sections + Links). Tool→project links also added in each note's "Reasoning for" section.

| Tool | What it's for | Used by | Note |
|------|---------------|---------|------|
| **Vercel** | App hosting, serverless functions, cron, analytics, deploy-on-push | Q, AGRE, VB, TC | [[Vercel]] |
| **OpenAI** | GPT models (synthesis/translation), TTS, embeddings | TC, TTTR | [[OpenAI]] |
| **Google Gemini** | Image analysis, idea generation, general LLM | Q, TTTR | [[Google Gemini]] |
| **ElevenLabs** | Cloud multilingual text-to-speech | TC, VB | [[ElevenLabs]] |
| **Stripe** | Subscriptions, credit top-ups, MRR/revenue data | Q, VB, SS | [[Stripe]] |
| **Resend** | Transactional email (magic-link, notifications) | AGRE, TC | [[Resend]] |
| **Tailwind CSS** | Utility-first styling | Q, AGRE, TTTR, TC, VB | [[Tailwind CSS]] |
| **shadcn/ui** | React component library | Q, AGRE, TC, VB | [[shadcn-ui\|shadcn/ui]] |
| **Cloudflare** | R2 object storage, DNS, Insights, Turnstile CAPTCHA | AGRE, TC, Q | [[Cloudflare]] |

## 🥈 Tier 2 — Backend / data / infra ✅ CREATED 2026-06-13

> **All eleven Tier-2 notes now exist** and are wikilinked from the relevant project notes (stack sections + Links). All live in CODE/TOOLS.

| Tool | What it's for | Used by | Note |
|------|---------------|---------|------|
| **Redis** | Queue broker / cache | TC, TTTR | [[Redis]] |
| **RabbitMQ** | Message queue (HTTP-variant job pipeline) | Q | [[RabbitMQ]] |
| **Celery** | Python distributed task queue | TC | [[Celery]] |
| **BullMQ** | Node background-job queue | TTTR | [[BullMQ]] |
| **Prisma** | TypeScript ORM | TTTR | [[Prisma]] |
| **Drizzle ORM** | Lightweight TypeScript ORM | AGRE | [[Drizzle ORM]] |
| **NextAuth / Auth.js** | Passwordless / magic-link auth for Next.js | AGRE, TTTR | [[NextAuth]] |
| **DigitalOcean** | App Platform hosting + Spaces storage | TTTR | [[DigitalOcean]] |
| **Hetzner** | Self-hosted Docker stack (worker + queue) | Q | [[Hetzner]] |
| **Turborepo** | Monorepo build orchestration | Q | [[Turborepo]] |
| **pnpm** | Fast workspace package manager | Q, AGRE, TNW | [[pnpm]] |

## 🥉 Tier 3 — AI / ML providers, research & builders ✅ CREATED 2026-06-13

> **All fifteen Tier-3 notes now exist** and are wikilinked from the relevant project notes (stack/capability sections + Links). 13 in AI/TOOLS, 2 (Clay, People Data Labs) in BUSINESS/TOOLS.

| Tool | What it's for | Used by | Note |
|------|---------------|---------|------|
| **Perplexity API** | Factual/historical research queries | TC, JG | [[Perplexity]] |
| **BytePlus Seedream 4.0** | Primary AI image generation (to 4K) | Q | [[BytePlus Seedream]] |
| **Replicate** | Hosted model inference (image gen) | Q, AGRE | [[Replicate]] |
| **Topaz Labs** | AI image upscaling / enhancement | Q | [[Topaz Labs]] |
| **Chatterbox TTS** | Local, free, torch-based TTS fallback | TC | [[Chatterbox TTS]] |
| **VoyageAI** | Embeddings for semantic search | TTTR | [[VoyageAI]] |
| **LangGraph** | Graph-based agent orchestration | TTTR | [[LangGraph]] |
| **Firecrawl** | Web scraping/crawling for research | JG, SS | [[Firecrawl]] |
| **Bright Data** | Web scraping + company-data enrichment | TTTR, JG | [[Bright Data]] |
| **Clay** | LinkedIn / contact enrichment | JG (planned) | [[Clay]] |
| **People Data Labs** | Person/company enrichment API | JG (planned) | [[People Data Labs]] |
| **GitHub Copilot** | In-IDE AI code completion | TTTR | [[GitHub Copilot]] |
| **Lovable** | AI full-stack app builder (Builder track) | VB | [[Lovable]] |
| **v0** | AI UI/app builder by Vercel | VB | [[v0]] |
| **Tactiq** | AI meeting transcription | TTTR | [[Tactiq]] |

## 🛠️ Tier 4 — Dev libraries & build tools ✅ COVERED 2026-06-14 → [[Dev Libraries & Build Tools]]

> Captured as a single collective `knowledge-note` rather than 9 standalone notes (thin, well-known libraries). Wikilinked from the project notes that use them.


| Tool | What it's for | Used by | Suggested folder |
|------|---------------|---------|------------------|
| **Zod** | Schema validation | Q, AGRE, TNW, TC | CODE/TOOLS |
| **Playwright** | End-to-end testing | Q, AGRE, VB | CODE/TOOLS |
| **Vitest** | Unit testing | Q, AGRE, TNW, TC | CODE/TOOLS |
| **Pino** | Structured JSON logging | Q, TNW | CODE/TOOLS |
| **Satori** | JSX → SVG image rendering (covers) | TNW | CODE/TOOLS |
| **Sharp** | High-performance image processing | TNW | CODE/TOOLS |
| **Commander.js** | Node CLI framework | TNW | CODE/TOOLS |
| **FFmpeg** | Audio/video processing + normalization | TC | CODE/TOOLS |
| **next-intl** | Next.js internationalization | AGRE | CODE/TOOLS |

## 💼 Tier 5 — Business / ops / publishing SaaS ✅ COVERED 2026-06-14 → [[Marketing, Sales & Publishing SaaS]] · [[Ops, Collaboration, Analytics & Community SaaS]]

> Captured as two themed collective `knowledge-note`s rather than ~25 standalone notes. Wikilinked from the project notes that use them. (Google Maps/Places and Google Business Profile remain folded into [[Google Cloud]] per the note below.)


| Tool | What it's for | Used by | Suggested folder |
|------|---------------|---------|------------------|
| **Monday.com** | Operations + CRM boards | TTTR | BUSINESS/TOOLS |
| **HubSpot** | Sales/fundraising CRM + marketing | TTTR | BUSINESS/TOOLS |
| **Mailchimp** | Email marketing / newsletters | TTTR | BUSINESS/TOOLS |
| **Mailgun** | Transactional email | TTTR | BUSINESS/TOOLS |
| **Webflow** | Marketing website / CMS | TTTR | BUSINESS/TOOLS |
| **Metabase** | BI / analytics dashboards | TTTR | BUSINESS/TOOLS |
| **Publer** | Social-media scheduling/publishing | TNW | BUSINESS/TOOLS |
| **Event Registry** | News/article sourcing API | TNW | BUSINESS/TOOLS |
| **Meta Ads (Pixel + CAPI)** | Conversion tracking / ads | Q | BUSINESS/TOOLS |
| **Keystatic** | Git-based CMS (blog/changelog) | Q | CODE/TOOLS |
| **Figma** | UI/UX design | TTTR, VB | BUSINESS/TOOLS |
| **Hotjar** | Session replay + heatmaps | VB | BUSINESS/TOOLS |
| **Microsoft Clarity** | Free session analytics | VB | BUSINESS/TOOLS |
| **Skool** | Cohort/community platform | VB | BUSINESS/TOOLS |
| **Circle** | Community platform (alternative) | VB | BUSINESS/TOOLS |
| **Loom** | Async video briefings | VB | BUSINESS/TOOLS |
| **Reforge** | Product/growth education | VB | BUSINESS/TOOLS |
| **Slack** | Team comms + system notifications | TTTR | BUSINESS/TOOLS |
| **Google Workspace** | Docs/Drive/Forms collaboration | TTTR, JG, VB | BUSINESS/TOOLS |
| **Unsplash** | Stock cover imagery | TC | CODE/TOOLS |
| **inFakt** | Polish invoicing/accounting API | SS | BUSINESS/TOOLS |
| **Asana** | Task management (via MCP) | JG | BUSINESS/TOOLS |
| **Signaturit** | Spanish/EU e-signature (eIDAS) | AGRE (planned) | BUSINESS/TOOLS |
| **WhatsApp Business API** | Chatbot / customer messaging | AGRE (planned) | BUSINESS/TOOLS |
| **Warp** | AI terminal | VB (mentioned) | CODE/TOOLS |

---

## Notes
- **Revolut Business** is used by shared-skills' CFO tooling (banking API). The vault has [[Revolut]] / [[Revolut Junior]] (personal); a separate *Revolut Business* note may be warranted.
- **Google Maps / Places API** (TC) and **Google Business Profile** (AGRE) are arguably covered by the existing [[Google Cloud]] note — extend it rather than create new notes.
- **Firecrawl** already exists as an installed *skill* in this repo but has no `tool` reference note.
- Counts: **~55 missing tools**. ✅ **All tiers now addressed (2026-06-14):** Tiers 1–3 (35 tools) got individual `tool` notes; Tiers 4–5 (~20 tools) are captured in three collective `knowledge-note`s — [[Dev Libraries & Build Tools]], [[Marketing, Sales & Publishing SaaS]], [[Ops, Collaboration, Analytics & Community SaaS]].

## 🔗 Links
- [[Projects]] — project hub
- [[Qamera AI]] · [[AGRE]] · [[Tech To The Rescue]] · [[Jakub Głąb Agent System]] · [[Value Builders]] · [[Tech News Weekly]] · [[Travelcast AI]]
