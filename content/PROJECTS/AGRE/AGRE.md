---
title: "AGRE"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["project", "plsoft", "client", "real-estate", "nextjs", "i18n"]
type: basic-note
agent-created: true
summary: "PLSoft client engagement — multilingual Costa Blanca real-estate platform: Next.js + Drizzle + Supabase, Kyero XML feed imports, manual admin curation"
---
# AGRE — Anna Gawłowska Real Estate

## 🗒️ Description
A [[PLSoft]] client engagement: a multilingual (PL/EN/ES/NL) property platform for a boutique Costa Blanca real-estate agency. The site imports listings from third-party XML feeds, lets an admin curate and translate them, and publishes a fast public catalogue. Live since 2026-05; core catalogue + admin panel shipped to production, with advanced filters, a buyer CRM and listing forms in the next phase.

## 🧩 Key features
- Property catalogue with feed-driven imports + manual curation
- Per-property publish gate (independent of lifecycle: active / reserved / sold / withdrawn)
- Four-language descriptions with i18n as the single source of truth
- Drag-and-drop image gallery with hero/floorplan badges
- Inquiry form with IP rate-limiting; magic-link admin auth
- Multi-tenant foundation (`tenantId` baked in) ready for white-label resale

## Technology

### Stack
- **Framework**: [[Next.js]] 16 (App Router) + React 19, TypeScript, [[Tailwind CSS]] 4.
- **Data**: PostgreSQL via [[Supabase]] (provisioned through Vercel Marketplace), [[Drizzle ORM]].
- **Auth**: [[NextAuth|NextAuth/Auth.js]] v5 — passwordless magic-link, restricted to an admin allowlist.
- **i18n**: next-intl (PL authoring locale; ES targets formal *usted*).
- **Email**: [[Resend]] (magic-link + inquiry notifications).
- **Storage/CDN**: [[Cloudflare]] R2 (S3-compatible) mirrors feed images for stability.
- **Scheduling**: [[Vercel]] Cron — four staggered feed imports nightly.
- **Hosting**: Vercel (deploy-on-push); [[Git]] with OpenSpec-style change tracking.
- **Secrets**: shared via [[1Password]]. Quality gate: Lighthouse ≥95 across locales.
- *Planned*: Sentry, Plausible/Make automation, WhatsApp Business chatbot, e-signature, AI multimedia via [[Replicate]] (later phases).

## ⚙️ Architecture know-how
- **Feed import is idempotent.** A composite `feed_source` + `feed_external_id` key drives upsert-on-sync; admin edits are preserved unless explicitly reset to feed. Imports default to *hidden* — no auto-publish. Four Kyero-schema feeds run on a staggered nightly cron.
- **Kyero is the lingua franca.** ~22 source property-type variants normalize to 6 enums. A "fake-Polish" detector flags machine-translated descriptions for human review. Images are dual-stored (external feed URLs + ETag-aware R2 mirror that skips re-downloads).
- **i18n as source of truth.** No hardcoded strings in components — everything in `messages/{pl,en,es,nl}.json`. Distance-to-beach is a lat/long geofence heuristic (~1 km accuracy for the coast).
- **GDPR-aware curation.** Owner contact fields are admin-only, never rendered publicly; cron protected by a bearer secret; auth silently drops non-allowlisted emails (no account enumeration).
- **Multi-tenant by design.** Every table carries a tenant id so the same codebase can be resold to other Iberian agents without a rewrite. A heavier CMS (Payload) was evaluated and deferred in favour of a lighter custom Drizzle admin.

## 🔗 Links
- [[PLSoft]] — the consulting practice running this engagement
- [[Next.js]] · [[Supabase]] · [[Vercel]] · [[Resend]] · [[Cloudflare]] · [[Tailwind CSS]] · [[Drizzle ORM]] · [[NextAuth|NextAuth/Auth.js]] · [[pnpm]] · [[Git]] · [[1Password]]
- [[Spec-driven SEO and GEO]] — SEO methodology reused on content-heavy sites
- [[Dev Libraries & Build Tools]] (Zod, Playwright, Vitest, next-intl) · [[Ops, Collaboration, Analytics & Community SaaS]] (Signaturit, WhatsApp Business — planned)
