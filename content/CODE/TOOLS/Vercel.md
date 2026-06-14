---
title: "Vercel"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "hosting", "serverless", "deployment", "nextjs", "frontend-cloud"]
type: tool
agent-created: true
summary: "Frontend cloud from the makers of Next.js — Git-push deploys, serverless/edge functions, cron, preview URLs, and analytics; the default hosting target for my Next.js apps"
---

# Vercel

The frontend cloud built by the team behind [[Next.js]]. You connect a Git repo and every push becomes a deployment: production on the main branch, an isolated **preview URL** for every other branch and PR. The platform handles the build, the global CDN, serverless and edge function execution, TLS, and rollbacks — so a small team ships like a big one without touching infrastructure.

## Links

### Description

- **Git-push deploys** — push to deploy; immutable builds with instant rollback to any prior deployment.
- **Preview deployments** — a unique URL per branch/PR for review before merge.
- **Serverless & Edge Functions** — run [[Next.js]] route handlers / API routes globally without managing servers; edge runtime for low-latency middleware.
- **Cron Jobs** — scheduled invocations of API routes (used for feed imports, digests, cleanups).
- **Web Analytics & Speed Insights** — privacy-friendly traffic and Core-Web-Vitals data without a separate script.
- **Environment variables** — per-environment (production / preview / development) secrets injected at build and runtime.
- **Image Optimization** — automatic resizing/format negotiation for `next/image`.

### Download or use

- Platform: [vercel.com](https://vercel.com/)
- CLI: `npm i -g vercel` → `vercel` (link) → `vercel --prod` (deploy)
- Docs: [vercel.com/docs](https://vercel.com/docs)

## Reasoning for

Vercel is the default deploy target across my [[Next.js]] projects — the friction from `git push` to live URL is near zero, which matters most for fast-iterating products and client work. [[Qamera AI]] runs its web app and serverless API on Vercel (with the heavy AI-image worker offloaded to a self-hosted [[Docker]] stack), [[AGRE]] leans on **Vercel Cron** for idempotent Kyero feed imports, and both [[Travelcast AI]]'s website and the [[Value Builders]] MVP track use it as the "ship it today" host. Preview URLs are the unsung hero: every client PR gets a shareable link, which collapses the review loop. Built-in [[PostHog]]-adjacent analytics and Speed Insights cover the basics before reaching for heavier tooling.

The trade-off: serverless function timeouts and cold starts make Vercel a poor fit for long-running jobs (image generation, audio rendering, queue workers) — those belong on Hetzner/[[Docker]] or a Python worker, with Vercel handling only the web tier.

## Alternatives considered

- **[[Supabase]]** — complementary, not competing: Supabase is the Postgres/auth/storage backend behind these same apps; Vercel hosts the frontend that talks to it.
- **Netlify** — closest like-for-like (Git deploys, edge functions, previews); Vercel wins on first-class [[Next.js]] support since they author the framework.
- **Cloudflare Pages/Workers** — cheaper edge compute and bundled with [[Cloudflare]] R2/DNS; less seamless for full Next.js App Router features.
- **DigitalOcean / Hetzner + [[Docker]]** — chosen deliberately for the *worker* tiers where Vercel's execution limits don't fit; more ops overhead, full control.

## Resources

- 📘 [Vercel docs](https://vercel.com/docs)
- 🧩 [Cron Jobs](https://vercel.com/docs/cron-jobs)
- 📊 [Web Analytics](https://vercel.com/docs/analytics)
- 🚀 [Deploying Next.js](https://nextjs.org/docs/app/building-your-application/deploying)

---
Template: [[templates/tool]]
