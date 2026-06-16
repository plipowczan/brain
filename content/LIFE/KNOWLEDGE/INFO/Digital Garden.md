---
title: "Digital Garden"
date:  2022-08-22
enableToc: true
openToc: true
tags: ["digital-garden", "notes", "knowledge-management"]
type: basic-note
agent-reviewed: 2026-04-09
summary: "Personal digital garden at brain.lipowczan.pl built with Obsidian and Quartz, managed by AI agents"
---
# Digital Garden

A digital garden is a collection of ideas, thoughts, and musings that are available online for others to read and enjoy. This type of garden can be created by anyone with an internet connection and a desire to share their thoughts with the world.

## 🗒️ Mój Digital Garden
Mój digital garden to [brain.lipowczan.pl](https://brain.lipowczan.pl/) — osobista baza wiedzy zbudowana w [[Obsidian]] i publikowana jako statyczna strona.

**Tech stack:**
- **[[Obsidian]]** — edytor i vault management
- **Quartz 4** — static site generator (fork Hugo-based)
- **GitHub Actions** — auto-deploy na push do brancha `v4`
- **GitHub Pages** — hosting

**Utrzymanie przez AI agentów:**
Garden jest w dużej mierze zarządzany przez LLM agentów via Claude Code. Agenci odpowiadają za:
- Ingest nowych źródeł z inbox
- Kompilację artykułów z wielu notatek
- Utrzymanie indeksów nawigacyjnych (vault-map, catalog, graph)
- Lint i quality checks
- Wzbogacanie istniejących notatek o linki i kontekst

Więcej o podejściu: [[LLM Knowledge Bases]], [[Brain]].

## 📖 Ref
[🌱 My blog is a digital garden, not a blog (joelhooks.com)](https://joelhooks.com/digital-garden)#reading-list/social-sciences