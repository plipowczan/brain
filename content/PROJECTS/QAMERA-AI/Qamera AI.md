---
title: "Qamera AI"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["project", "ai", "saas", "product", "qamera"]
type: basic-note
agent-created: true
summary: "AI-powered virtual photo studio for e-commerce — B2B SaaS by 200IQ Labs"
---
# Qamera AI

## 🗒️ Description
AI-powered virtual photo studio for e-commerce. Users select, compare, and approve AI-generated product photography and video — zero prompting required.

Built by **200IQ Labs PSA** where I'm CTO & Co-Founder (30% equity).

## 🧩 Key features:
- Packshot creation with automatic background removal
- AI custom models (virtual mannequins)
- AI scenery and backgrounds
- Photo sessions (batches of 10 per config)
- Video generation (HD, 5s clips)
- Reel editing (auto-montages)
- Style library (11+ pre-built visual styles)
- Teams with role-based access and credits system

## Target market
Primary niche: swimwear & lingerie brands (high sizing complexity, ad censorship requiring constant fresh variants). Secondary: broader fashion e-commerce.

## Technology

### Stack
- **Frontend/app**: [[Next.js]] 16 (App Router) + React 19, [[Tailwind CSS]] 4, [[shadcn-ui|shadcn/ui]], scaffolded on [[MakerKit]]. Monorepo via [[Turborepo]], [[pnpm]].
- **Backend/data**: [[Supabase]] (Postgres + Auth + Storage) with row-level security as the multi-tenant boundary. Airtable survives as a legacy bridge being migrated into Postgres.
- **Hosting**: [[Vercel]] for the app; a self-hosted Docker stack on [[Hetzner]] runs the worker + queue. [[Docker]] for containers, [[Git]] (OpenSpec-style change proposals) for version control.
- **AI generation**: multiple providers — [[BytePlus Seedream|BytePlus Seedream 4.0]] (primary text/image-to-image, up to 4K), [[Google Gemini]] (image analysis + idea generation), [[Replicate]] (legacy fallback), [[Topaz Labs]] (upscaling).
- **Supporting services**: [[Stripe]] (subscriptions + credit top-ups), [[Cloudflare]] Turnstile (CAPTCHA), Keystatic (blog/changelog CMS), Meta Ads Pixel + CAPI (conversion tracking), [[Sentry]] (errors), Vercel Analytics, [[ClickUp]] + email (dead-letter-queue alerts).

99% of code changes are made by AI coding agents ([[Agentic Coding]]). I design the environment, agents implement.

## ⚙️ Architecture know-how
- **Async job pipeline (HTTP variant of [[RabbitMQ]]).** The web app publishes a `run_due` request to RabbitMQ; a thin Node worker on Hetzner consumes it, enforces platform + per-account provider limits, then calls back into the web app over authenticated HTTP (`/api/internal/cg/process-one`) to do the actual generation. Keeping the heavy logic in the web app avoids Vercel's infinite-loop / timeout traps while the worker stays a stateless orchestrator.
- **Coalescing + watchdog.** A 5-second bucket dedup (unique constraint on `account_id, provider, bucket_ts`) collapses bursts; a watchdog resets `dispatched_at` rows older than ~10 min to recover stuck jobs. State transitions use compare-and-swap for idempotent retries.
- **Credit system is application-first, ledger-based.** Logic lives in a TypeScript service layer, not SQL functions: a `credit_transactions` history plus `credit_reservations` holds, guarded by advisory locks. Reservations are released on failure, confirmed on success — per-job pricing tiers (3–12 credits).
- **Repository + Service pattern**, event-driven (in-memory now, designed to move onto the queue). RLS does authorization so loaders avoid manual auth checks; the admin client bypasses RLS only in rare, audited paths.

## 🎯 Go-to-market know-how
- **Platform-first pivot (2026-04)**: ~70% effort on e-commerce platform integrations (Saleor, Shoper, PrestaShop, then Shopify), ~30% founder-led direct sales in the swimwear/lingerie niche.
- **"Language of money" value selling**: every artifact anchored to a concrete profit number + proof + before/after visual. A pre-discovery sales pipeline (account scoring → contact selection → opportunity FSM → opener → drafts → response monitoring → next-step) is itself implemented as a chain of agent skills over an Airtable CRM.

## 🔗 Links
- [[About]] — my role
- [[PLSoft]] — my consulting practice (separate entity)
- [[Agentic Systems]] — agent architecture used in development
- [[agentic-ai-system]] — 200IQ LABS multi-agent advisory repo (orchestrator + context)
- [[Agentic AI Repos]] — full 3-repo architecture
- [[Spec-driven SEO and GEO]] — SEO foundation case study (2026-04, 9 spec-driven changes in 5 days)
- [[Dev Libraries & Build Tools]] (Zod, Playwright, Vitest, Pino) · [[Marketing, Sales & Publishing SaaS]] (Keystatic, Meta Ads)
