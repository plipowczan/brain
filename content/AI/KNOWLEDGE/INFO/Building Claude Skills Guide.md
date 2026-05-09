---
title: "Building Claude Skills Guide"
date: 2026-05-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "claude", "skills", "claude-code", "guide"]
type: knowledge-note
source: "_raw/inbox/The-Complete-Guide-to-Building-Skill-for-Claude.pdf"
agent-created: true
summary: "Pointer do Complete Guide to Building Skill for Claude (PDF) — kompendium tworzenia własnych skilli dla Claude Code"
---

# Building Claude Skills Guide

## 🗒️ Description

Pointer do **The Complete Guide to Building Skill for Claude** (PDF, archived w `_raw/processed/`). Kompletny przewodnik po tworzeniu własnych skilli dla Claude Code — od struktury folderu (`.claude/skills/<name>/SKILL.md`), przez progressive disclosure pattern, frontmatter, cluster detection, aż po best practices dystrybucji (personal vs repo-local vs marketplace).

Klastruje z resztą notatek o **Agent Skills** w wiki — używaj jako referencyjny dokument gdy projektujesz nowy skill albo refaktorujesz istniejący.

## 🔗 Links

- Archived PDF: `content/_raw/processed/2026-05-09_The-Complete-Guide-to-Building-Skill-for-Claude.pdf`
- Anthropic official: [docs.anthropic.com — Agent Skills](https://docs.anthropic.com/en/docs/agents/skills) (sprawdź aktualną ścieżkę)
- Powiązany skill creator: skills `plugin-dev:skill-development` i `document-skills:skill-creator` w lokalnej instalacji Claude Code

## 🧩 Co zawiera (typowy zakres)

- **Anatomy of a skill** — `SKILL.md`, frontmatter (`name`, `description`, triggers), nested directories, plain-text resources
- **Triggering** — kiedy Claude wywołuje skill, jak pisać description żeby triggerowanie było reliable, kiedy skill ma być invoked proactively
- **Progressive disclosure** — dlaczego nie ładować wszystkiego na start; struktura "main → references → resources"
- **Distribution** — personal (`~/.claude/skills/`), repo-local (`.claude/skills/`), plugin marketplace
- **Anti-patterns** — opisy zbyt generyczne (overlap z innymi skillami), monolityczne SKILL.md, brak wersjonowania resources

## 📖 Further reading

- [[Agent Skills]] — koncept, klasa, ekosystem
- [[Awesome Agent Skills]] — VoltAgent curated 1000+ skili (gdzie szukać przykładów)
- [[Awesome Claude Code]] — szerszy kontekst Claude Code resources
- [[Karpathy Skills]] / [[Vercel Skills]] — przykłady kompletnych skill collections
- [[Superpowers]] — agentic skills framework + SDLC methodology
- [[gstack]] — virtual team z 23+ skili
- [[UX RULER]] — przykład pojedynczego skill'a z silną domain methodology
- [[Progressive Disclosure]] — koncept leżący u podstaw architektury skili
- [[Token Optimization for Claude Code]] — dlaczego skill loading on-demand się opłaca

---
Template: [[templates/knowledge_note_info]]
