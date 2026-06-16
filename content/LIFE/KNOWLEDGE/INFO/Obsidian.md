---
title: "Obsidian"
date:  2022-08-24
enableToc: true
openToc: true
tags: ["obsidian", "tool", "knowledge-management"]
type: basic-note
agent-reviewed: 2026-04-09
summary: "Obsidian vault setup: Quartz 4 SSG, agent-maintained wiki, wikilinks, git sync, and mobile access."
---
# Obsidian

## 🗒️ Current Setup
Obsidian is the foundation of my [[Digital Garden]] — a knowledge base published at [brain.lipowczan.pl](https://brain.lipowczan.pl/) through [[Brain|Quartz 4 SSG]]. The vault is managed by LLM agents (Claude Code) — they ingest sources, compile articles, maintain indexes, and watch over quality. More on the approach: [[LLM Knowledge Bases]].

Key elements of the current setup:
- **Quartz 4** as static site generator → deploy via GitHub Actions on push to `v4`
- **Agent-maintained** — most vault operations (ingest, compile, reindex, lint) are performed by AI agents
- **Wikilinks + graph** — navigation through links, agents maintain the link graph
- **Git-based sync** — vault = git repo, accessible on desktop and mobile

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