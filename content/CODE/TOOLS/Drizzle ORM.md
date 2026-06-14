---
title: "Drizzle ORM"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "orm", "typescript", "database", "postgres", "sql"]
type: tool
agent-created: true
summary: "Lightweight, SQL-first TypeScript ORM — thin, type-safe, no codegen runtime; the data layer in AGRE (Postgres on Supabase)"
---

# Drizzle ORM

A lightweight, SQL-first ORM for TypeScript. Unlike heavier ORMs, Drizzle stays deliberately close to SQL: you define schemas in TypeScript, and its query builder mirrors SQL so what you write is what runs — no hidden query magic. It's tiny, has no runtime dependency on a generated client, and is built to be serverless/edge-friendly (fast cold starts, no heavy engine).

## Links

### Description

- **TypeScript schema** — tables/columns/relations defined in `.ts`, fully typed.
- **SQL-like query builder** — `select().from().where()` reads like SQL; predictable generated queries.
- **drizzle-kit** — schema migrations, `push` for rapid iteration, and Drizzle Studio.
- **Edge/serverless-friendly** — no codegen step, minimal bundle, fast cold starts.
- **Relational queries** — typed nested fetches when you want them.
- **Multi-DB** — PostgreSQL, MySQL, SQLite and their serverless drivers.

### Download or use

```bash
npm i drizzle-orm && npm i drizzle-kit -D
# npx drizzle-kit generate  /  npx drizzle-kit push
```

- Site: [orm.drizzle.team](https://orm.drizzle.team/)
- Repo: [github.com/drizzle-team/drizzle-orm](https://github.com/drizzle-team/drizzle-orm)

## Reasoning for

Drizzle is the ORM on [[AGRE]], over PostgreSQL via [[Supabase]]. It suited that project for two reasons. First, the data shape is feed-driven with idempotent upserts (composite `feed_source` + `feed_external_id` keys) — being SQL-first means the upsert-on-sync logic stays explicit and easy to reason about rather than buried under ORM abstraction. Second, AGRE deliberately chose a *light* custom admin over a heavier CMS (Payload was evaluated and deferred), and Drizzle matches that philosophy: minimal weight, fast on [[Vercel]]'s serverless runtime, and no generated-client step in the build. Where a project wants a richer migration/Studio experience and more batteries, [[Prisma]] is the heavier sibling I reach for instead.

## Alternatives considered

- **[[Prisma]]** — more batteries-included (Studio, richer migrations) but heavier; used on [[Tech To The Rescue]]. Drizzle wins on weight and SQL transparency.
- **[[Supabase]] client (PostgREST)** — fine for simple CRUD via the auto API; Drizzle gives typed, composable queries and migrations on top of the same Postgres.
- **Kysely** — similar SQL-first type-safe builder; Drizzle adds schema/migrations tooling.
- **Raw SQL** — ultimate control; loses type-safety and migration ergonomics.

## Resources

- 📘 [Drizzle docs](https://orm.drizzle.team/docs/overview)
- 🧩 [drizzle-kit migrations](https://orm.drizzle.team/docs/kit-overview)
- 🔧 [Drizzle with Supabase](https://orm.drizzle.team/docs/connect-supabase)

---
Template: [[templates/tool]]
