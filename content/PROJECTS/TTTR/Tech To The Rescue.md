---
title: "Tech To The Rescue"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["project", "plsoft", "client", "ai", "platform", "nonprofit"]
type: basic-note
agent-created: true
summary: "PLSoft client engagement — IT diagnosis + AI-native transition for a tech-for-good nonprofit: consolidate a fragmented no-code stack into a unified Next.js + Postgres/pgvector platform with governed agentic skills"
---
# Tech To The Rescue

## 🗒️ Description
A [[PLSoft]] advisory engagement with a tech-for-good nonprofit that connects tech companies and volunteers with NGOs. The work is a strategic IT diagnosis and enablement: move the organization from a fragmented no-code/SaaS stack toward an AI-native, unified platform — consolidating data sources, embedding AI into operations, and turning ad-hoc automation into governed, auditable skills.

## 🧩 Scope
- Audit the existing data architecture and integration patterns
- Define the operating model (who owns which layer of the stack)
- Design an adoption path for AI (skills framework, not just more tools)
- Identify quick wins vs. structural changes

## Technology (platform under review)

### Stack
- **App**: [[Next.js]] 15 (App Router) + React 19, [[Tailwind CSS]], served on [[DigitalOcean]] (App Platform + Spaces), [[Cloudflare]] DNS.
- **Data**: PostgreSQL 17 with **pgvector** (1536-dim embeddings), [[Prisma]] ORM, [[Docker]] Compose for local/prod parity.
- **Jobs**: [[BullMQ]] on [[Redis]] for background work; [[n8n]] (self-hosted) as the integration/automation backbone.
- **Auth**: [[NextAuth]] v5 (magic link).
- **AI**: [[OpenAI]] embeddings (`text-embedding-3-small`), Claude (Haiku/Sonnet), [[Google Gemini|Gemini]]; [[LangGraph]] + MCP for agent orchestration; [[VoyageAI]] evaluated for retrieval.
- **Ops layer (business)**: Monday.com (operations/CRM), HubSpot (fundraising), Mailchimp + Mailgun (email), Webflow (marketing site), Metabase (BI), [[Bright Data]] (enrichment via n8n), [[Tactiq]] (meeting transcription).
- **Legacy being retired**: Bubble (auth), [[Airtable]] (data), [[Zapier]] (automations).
- **Dev/AI tooling**: [[Claude Code]], [[Cursor]], [[GitHub Copilot]], [[Git]], [[Sentry]], [[Notion]].

## ⚙️ Diagnosis know-how (reusable)
- **The source-of-truth conflict is organizational, not technical.** A well-designed Postgres schema can still be bypassed if the *operational* source of truth lives in an ops tool (Monday) where records are created in conversations and never reach the database. Map where data is actually *born* before designing sync.
- **Asymmetric bidirectional sync is fragile.** DB↔ops-tool sync via queue → webhook → automation tool tends to grow infinite-loop workarounds, miss certain field-change events, and lack a staging environment. Daily failure alerts get ignored once they're routine — treat alert fatigue as a design smell.
- **Schema debt from no-code migrations.** Zero-copy migrations off Airtable carry 150–200 legacy columns and duplicate status fields. New, fast-changing forms are better stored as a single JSON metadata blob to avoid weekly migrations.
- **Embedding quality depends on chunking, not just the model.** One embedding per entity over full body text dilutes keyword matches and spreads similarity scores unpredictably — scope and chunk before indexing.
- **Shadow IT is an asset to formalize, not forbid.** Effective ad-hoc AI tools built by non-engineers should be promoted into governed, owned, audited skills (Slack/MCP-fronted agents reading the database + docs) rather than banned.
- **70-20-10**: ~70% of AI value is people + process, not technology. Adoption routines beat tool count; training that doesn't form habits doesn't stick.

## 🔗 Links
- [[PLSoft]] — the consulting practice running this engagement
- [[Agentic Systems]] — the skills + context architecture proposed as the target model
- [[AI 70-20-10 Rule]] · [[Self-Improving Company]] · [[Context Engineering]]
- [[n8n]] · [[Next.js]] · [[Supabase]] · [[OpenAI]] · [[Google Gemini]] · [[Cloudflare]] · [[Tailwind CSS]] · [[Prisma]] · [[BullMQ]] · [[Redis]] · [[NextAuth]] · [[DigitalOcean]] · [[LangGraph]] · [[VoyageAI]] · [[Bright Data]] · [[GitHub Copilot]] · [[Tactiq]]
- [[Marketing, Sales & Publishing SaaS]] (HubSpot, Monday.com, Mailchimp, Mailgun, Webflow) · [[Ops, Collaboration, Analytics & Community SaaS]] (Slack, Metabase, Figma) · [[Dev Libraries & Build Tools]]
