---
title: "agentic-ai-private"
date: 2026-05-10
enableToc: true
openToc: true
tags: ["project", "ai", "agents", "plsoft", "personal", "claude-code"]
type: basic-note
source: "_raw/processed/2026-05-10_second-brain-export.md"
agent-created: true
summary: "PLSoft (JDG) + personal multi-agent advisory repo — separate from 200IQ LABS"
---
# agentic-ai-private

## 🗒️ Description
Private multi-agent advisory system for **PLSoft (JDG)** + **personal** scope. One of three repos in the [[Agentic AI Repos]] cluster.

Strict scope:
- **PLSoft** — independent IT consulting, automation, AI integration.
- **Personal** — goals, learning, career, personal brand.

Out of scope: 200IQ LABS PSA + Qamera AI (handled in [[agentic-ai-system]]).

Repo path: `C:\PROJEKTY\agentic-ai-private`. Default branch `master`. Owner: Paweł Lipowczan.

## 🧩 Repository structure
```
agentic-ai-private/
├── CLAUDE.md
├── shared-skills/             # submodule
├── private-skills/            # submodule
├── openspec/                  # SDD workspace
├── slides/                    # Marp decks (PDF/HTML)
│   ├── workspace/<slug>/  output/<slug>.pdf  archive/<slug>/  _explore/<slug>-ideas.md
└── context/                   # all PLSoft + personal knowledge
    ├── author-profile.md      # LinkedIn voice
    ├── consultant-profile.md  # professional profile
    ├── company.md             # PLSoft basics
    ├── finances.md
    ├── legal-entities.md      # PLSoft, 200IQ LABS PSA
    ├── projects-portfolio.md  # delivered case studies
    ├── brand/                 # tone-of-voice, design, LinkedIn analytics + posts/drafts
    ├── personal/{goals,learning,projects/}
    └── plsoft/{clients/,projects/}    # one folder per entity + _index.md
```

## 📒 PLSoft (JDG) in brief
- Independent IT consulting since 2008, fully remote.
- Stack: Make / n8n / Python automation, AI integrations (OpenAI, Claude, Qdrant), chatbots/voicebots (VAPI, RAG), system integrations (SQL Server, BigQuery, Airtable), backend (Python, .NET, Node.js). Code-first; no-code only when client must self-maintain.

## 📒 What the repo tracks
- **Legal entities** — PLSoft (JDG), 200IQ LABS PSA, and one historical company.
- **Finances, clients and own projects** — dated snapshots in `context/`. They stay in the private repo and are not mirrored in this vault.
- Own projects tracked there include [[Value Builders]] and [[Tech News Weekly]].

## 🧩 Workflow conventions
- **Index protocol** — read `_index.md` → `catalog.md` → file. Never scan folders directly. Update both after edits.
- **/ingest** — inbox → data + catalog/index update + raw → archive with date prefix.
- **Slides workflow** — `/slides:init` → `:explore` → `:new` → `:draft` → `:build [--html]` → `:tweak` → `:archive`. Decks live in `slides/`, not in client folders. Linkage via `context: clients/<client>` field in `brief.md` frontmatter.
- **Communication** — Polish (technical PL/EN), direct/concrete/professional, code in English, short by default.
- **Data freshness** — every context file has "Last updated"; older than 30 days → flag staleness.
- **Client sessions** — conversation-style (TO-BE > AS-IS); diagrams produced ex-post from transcripts.
- **Naming** — "Value Builders" (not "Startup Builders") in external comms.

## 🔗 Links
- [[Agentic AI Repos]] — hub
- [[agentic-ai-system]] — sibling repo for 200IQ LABS / Qamera AI
- [[Agentic Skills Submodules]] — shared-skills + private-skills
- [[PLSoft]] — JDG profile
- [[About]] — owner profile
- [[Tech News Weekly]] · [[Value Builders]]
