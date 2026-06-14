---
title: "Prisma"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "orm", "typescript", "database", "postgres", "schema"]
type: tool
agent-created: true
summary: "TypeScript ORM with a declarative schema, typed client, and migrations — the data layer in the Tech To The Rescue platform (Postgres + pgvector)"
---

# Prisma

A next-generation ORM for TypeScript/Node. You declare your data model in a single `schema.prisma` file; Prisma generates a fully type-safe client and manages migrations from it. The headline is developer experience: autocomplete on every query, compile-time errors when you reference a column that doesn't exist, and a readable schema that doubles as documentation.

## Links

### Description

- **Declarative schema** — models, relations, indexes, enums in `schema.prisma` as the single source of truth.
- **Type-safe client** — generated client gives end-to-end types from DB to application code.
- **Migrations** — `prisma migrate` diffs the schema and generates/apply versioned SQL migrations.
- **Prisma Studio** — a GUI to browse/edit data.
- **Relation queries** — ergonomic nested reads/writes without hand-written joins.
- **Multi-DB** — PostgreSQL, MySQL, SQLite, SQL Server, MongoDB.

### Download or use

```bash
npm i prisma -D && npm i @prisma/client
npx prisma init && npx prisma migrate dev
```

- Site: [prisma.io](https://www.prisma.io/)
- Docs: [prisma.io/docs](https://www.prisma.io/docs)

## Reasoning for

Prisma is the ORM in the [[Tech To The Rescue]] platform, over PostgreSQL 17 with pgvector. It fits a TypeScript-first [[Next.js]] codebase where a readable, version-controlled schema matters — especially given that one of the diagnosis findings was *schema debt* carried over from no-code migrations (150–200 legacy columns, duplicate status fields). A declarative `schema.prisma` plus migrations makes that debt visible and gives a disciplined path to pay it down, and the typed client removes a whole class of runtime query bugs. Where the schema is volatile (fast-changing forms), the team leans on JSON metadata columns — which Prisma models cleanly — rather than migrating weekly.

## Alternatives considered

- **[[Drizzle ORM]]** — the lighter, SQL-closer TypeScript ORM I used on [[AGRE]]; Drizzle is thinner and more SQL-explicit, Prisma is more batteries-included with a richer migration/Studio story.
- **TypeORM / Sequelize** — older Node ORMs; less type-safety and rougher DX than Prisma.
- **Kysely** — type-safe query builder (not a full ORM); more control, less abstraction.
- **Raw SQL** — maximum control; loses the generated types and migration ergonomics.

## Resources

- 📘 [Prisma docs](https://www.prisma.io/docs)
- 🧩 [Prisma schema reference](https://www.prisma.io/docs/orm/prisma-schema)
- 🔧 [Migrations](https://www.prisma.io/docs/orm/prisma-migrate)

---
Template: [[templates/tool]]
