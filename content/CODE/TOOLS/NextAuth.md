---
title: "NextAuth"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "auth", "authentication", "nextjs", "magic-link", "oauth"]
type: tool
agent-created: true
summary: "Open-source authentication for Next.js (now Auth.js) — OAuth, passwordless magic-link, sessions; the auth layer in AGRE and the TTTR platform"
---

# NextAuth / Auth.js

The standard open-source authentication library for [[Next.js]] (now generalized and rebranded as **Auth.js**, with adapters for other frameworks). It handles the hard, security-sensitive parts of auth — OAuth provider flows, passwordless **magic-link** email sign-in, sessions (JWT or database), and CSRF protection — behind a small configuration surface, so you don't hand-roll login.

## Links

### Description

- **Providers** — dozens of OAuth providers (Google, GitHub, …) plus credentials and email.
- **Passwordless magic-link** — email a one-time sign-in link; no passwords to store or leak.
- **Sessions** — stateless JWT or database-backed sessions.
- **Database adapters** — Prisma, Drizzle, Supabase, and more for persisting users/sessions.
- **Callbacks** — hooks to control sign-in, JWT/session shaping, and authorization.
- **v5** — simplified App-Router-first API (`auth()` helper), the version used in current builds.

### Download or use

```bash
npm i next-auth@beta        # Auth.js v5 for Next.js
```

- Site: [authjs.dev](https://authjs.dev/)
- Repo: [github.com/nextauthjs/next-auth](https://github.com/nextauthjs/next-auth)

## Reasoning for

NextAuth/Auth.js v5 is the authentication layer in two projects. On [[AGRE]] it provides **passwordless magic-link** admin sign-in restricted to an allowlist — paired with [[Resend]] for the actual emails — and it's hardened to silently drop non-allowlisted addresses (no account enumeration). On the [[Tech To The Rescue]] platform it again handles magic-link auth over the [[Next.js]] + [[Prisma]]/Postgres stack. The appeal is simple: auth is exactly the kind of code you should *not* write yourself, and Auth.js gives a vetted, adapter-friendly implementation that drops into the App Router and persists through whichever ORM the project already uses.

## Alternatives considered

- **[[Supabase]] Auth** — built-in when you're already on Supabase (used by [[Qamera AI]]); Auth.js is chosen when auth should live in the app layer / not be tied to Supabase.
- **Clerk** — polished managed auth with prebuilt UI; faster to start but a paid external dependency.
- **Lucia** — lightweight, library-not-framework auth; more manual wiring.
- **Roll-your-own** — deliberately avoided; auth is too easy to get subtly wrong.

## Resources

- 📘 [Auth.js docs](https://authjs.dev/)
- 🔑 [Email/magic-link provider](https://authjs.dev/getting-started/authentication/email)
- 🧩 [Adapters (Prisma, Drizzle, Supabase)](https://authjs.dev/getting-started/adapters)

---
Template: [[templates/tool]]
