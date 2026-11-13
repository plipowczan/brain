---
title: "Lovable"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "ai", "app-builder", "no-code", "vibe-coding", "fullstack"]
type: tool
agent-created: true
summary: "AI full-stack app builder — describe an app in chat, get a deployed React+Supabase MVP; the Builder-track tool taught in Value Builders"
status-checked: 2026-11-13
project-status: active
---

# Lovable

> [!success] Status check 2026-11-13 — active
> **Verdict:** The changelog has entries almost every day: eight between 2026-11-10 and 2026-11-12 (Automations, personal skills and memory, credit renewal dates, new connectors).
> **Latest release:** Continuous delivery with no version numbers. · **last dated update:** 2026-11-12 · **licence:** Proprietary SaaS with credit-based freemium pricing.
> **Source:** https://docs.lovable.dev/changelog
> **Changed since this note:** Since 2026-06-13: a Windows desktop app (Jul 6) alongside macOS, and mobile apps. Agent runs can now work on one message for up to 10 hours, with a /goal command (Aug 26 and Aug 30).

An AI app builder: you describe what you want in natural language and it generates a working full-stack web app — [[React]] + [[Tailwind CSS]] + [[shadcn-ui|shadcn/ui]] frontend, [[Supabase]] backend, deployable in-platform, with the option to sync to GitHub. It targets non-engineers and fast prototyping: the "vibe" of building software by conversation rather than code, getting to a visible, functional MVP in minutes.

## Links

### Description

- **Chat-to-app** — describe features; Lovable scaffolds and edits the codebase.
- **Full-stack output** — React/Tailwind/shadcn UI + Supabase (DB/auth) backend.
- **Live preview & deploy** — see and ship the app without local setup.
- **GitHub sync** — export the code to a repo for handoff to a dev workflow.
- **Supabase-native** — first-class database/auth integration.

### Download or use

- Platform: [lovable.dev](https://lovable.dev/)

## Reasoning for

Lovable is the **Builder-track** tool in [[Value Builders]]. My Week 3 module runs two MVP tracks: a Tech track ([[Claude Code]] + [[Next.js]] + [[Supabase]] + [[Vercel]]) for those who want full control, and a Builder track (Lovable / [[v0]]) for non-technical founders who need a visible product fast — ~90% quicker to first visual, at the cost of fine-grained control. Lovable matters strategically because its output is [[shadcn-ui|shadcn/ui]] + [[Supabase]] — the *same* stack the Tech track uses — so a founder can start in Lovable and a developer can later pick up the exported code without a rewrite. That shared substrate is what makes the two-track teaching model work.

## Alternatives considered

- **[[v0]]** — Vercel's builder, also taught in the Builder track; v0 leans UI-component-first, Lovable leans full-app + Supabase backend.
- **Bolt.new** — similar in-browser full-stack AI builder; comparable, different runtime/deploy story.
- **[[Cursor]] / [[Claude Code]]** — the Tech-track tools: full control, professional workflow, steeper for non-coders.
- **Replit Agent** — full-stack AI building in a cloud IDE; more dev-oriented environment.

## Resources

- 📘 [Lovable](https://lovable.dev/)
- 🔗 [[v0]] · [[Value Builders]] · [[Vibe Coding]] — Builder-track context

---
Template: [[templates/tool]]
