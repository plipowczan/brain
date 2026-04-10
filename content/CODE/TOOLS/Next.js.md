---
title: "Next.js"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "frontend", "fullstack", "framework"]
type: tool
agent-created: true
summary: "React meta-framework — SSR, routing, API routes. Used for Qamera AI frontend."
---
# Next.js

Full-stack React meta-framework by Vercel. Provides server-side rendering, file-based routing, and API routes.

## Links
### Description
The most popular React framework for production. App Router (v13+) introduces server components and streaming.
### Download or use
[nextjs.org](https://nextjs.org)

## Reasoning for
Frontend framework for [[Qamera AI]], used via Makerkit (SaaS boilerplate built on Next.js + [[Supabase]]).

Key features I use:
- App Router — server/client component split
- API routes — lightweight backend endpoints
- Middleware — auth, redirects
- Integration with [[Supabase]] for database and auth

## Alternatives considered
- Nuxt (Vue) — considered via [[Nucleify]], but switched to Next.js for ecosystem
- Remix — good DX but smaller community

## Resources
[Next.js Documentation](https://nextjs.org/docs)

---
Template: [[templates/tool]]
