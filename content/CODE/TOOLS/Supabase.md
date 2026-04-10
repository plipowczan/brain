---
title: "Supabase"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "database", "backend", "baas"]
type: tool
agent-created: true
summary: "Open-source Firebase alternative — Postgres database, auth, storage, realtime"
---
# Supabase

Open-source Backend-as-a-Service built on PostgreSQL.

## Links
### Description
Supabase provides a Postgres database, authentication, file storage, edge functions, and realtime subscriptions out of the box.
### Download or use
[supabase.com](https://supabase.com)

## Reasoning for
Database and backend for [[Qamera AI]]. Key advantages:
- PostgreSQL underneath — real database, not a proprietary format
- Row-level security — fine-grained access control
- Auth built-in — social logins, magic links, JWT
- Realtime subscriptions — live data updates
- Works well with [[Next.js]] via Makerkit

## Alternatives considered
- Firebase — proprietary, vendor lock-in
- [[Airtable]] — good for prototyping but not for production SaaS
- PlanetScale — MySQL-based, less Postgres ecosystem

## Resources
[Supabase Documentation](https://supabase.com/docs)

---
Template: [[templates/tool]]
