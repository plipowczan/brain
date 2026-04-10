---
title: "Obsidian"
date:  2022-08-24
enableToc: true
openToc: true
tags: ["obsidian", "tool", "knowledge-management"]
type: basic-note
agent-reviewed: 2026-04-09
---
# Obsidian

## 🗒️ Current Setup
Obsidian to fundament mojego [[Digital Garden]] — baza wiedzy publikowana na [brain.lipowczan.pl](https://brain.lipowczan.pl/) przez [[Brain|Quartz 4 SSG]]. Vault jest zarządzany przez LLM agentów (Claude Code) — agenci ingestują źródła, kompilują artykuły, utrzymują indeksy i dbają o jakość. Więcej o podejściu: [[LLM Knowledge Bases]].

Key elements obecnego setup:
- **Quartz 4** jako static site generator → deploy via GitHub Actions na push do `v4`
- **Agent-maintained** — większość operacji na vault (ingest, compile, reindex, lint) wykonują AI agenci
- **Wikilinks + graph** — nawigacja przez linki, agenci utrzymują graf powiązań
- **Git-based sync** — vault = git repo, dostępny na desktop i mobile

## Markdown
[Basic Syntax | Markdown Guide](https://www.markdownguide.org/basic-syntax/) #reading-list/programming
- Checkbox:
```markup
- []  
```

## Mine templates
Basic note: [[templates/basic_notes]]
Daily journal: [[templates/daily_journal]]
Book: [[templates/book]]
Knowledge: [[templates/knowledge_note_info]]
Learning notes: [[templates/learning_notes]]
Plane trip planning: [[templates/plane_trip_planning]]
## External Templates
[OB_Template/0A_3_1_Project.md at main · llZektorll/OB_Template (github.com)](https://github.com/llZektorll/OB_Template/blob/main/0A_Templates/0A_3_Project/0A_3_1_Project.md)
[obsidian-template/templates at master · tuan3w/obsidian-template (github.com)](https://github.com/tuan3w/obsidian-template/tree/master/templates)
[6 Useful Templates for Obsidian (filipedonadio.com)](https://filipedonadio.com/6-useful-templates-for-obsidian/)

# Setup on mobile
1. Downloaded MGit [maks/MGit: A Git client for Android. (github.com)](https://github.com/maks/MGit)
2. Cloned repository to local storage on android using MGit
	Entered my repository url: [plipowczan/brain (github.com)](https://github.com/plipowczan/brain)
3. Downloaded Obsidian mobile: [Mobile Apps - Obsidian](https://obsidian.md/mobile)
4. I set the Obsidian Vault based on the cloned in step 2 repo - pointed to the local _content_ folder where cloned files were downloaded