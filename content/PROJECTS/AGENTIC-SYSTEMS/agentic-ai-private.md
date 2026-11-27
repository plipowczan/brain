---
title: "agentic-ai-private"
date: 2026-05-10
enableToc: true
openToc: true
tags: ["project", "ai", "agents", "plsoft", "personal", "claude-code"]
type: basic-note
source: "_raw/processed/2026-05-10_second-brain-export.md"
agent-created: true
agent-reviewed: 2026-11-27
summary: "PLSoft (JDG) + personal multi-agent advisory repo — separate from 200IQ LABS; shared skills via the ss plugin, task registry since 2026-08"
---
# agentic-ai-private

## 🗒️ Description
Private multi-agent advisory system for **PLSoft (JDG)** + **personal** scope. One of three repos in the [[Agentic AI Repos]] cluster.

Strict scope:
- **PLSoft** — independent IT consulting, automation, AI integration.
- **Personal** — goals, learning, career, personal brand.

Out of scope: 200IQ LABS PSA + Qamera AI (handled in [[agentic-ai-system]]).

Repo path: `C:\PROJEKTY\agentic-ai-private`. Default branch `master`. Owner: Paweł Lipowczan.

The sections below describe the repo as it was in May 2026. For what I read on 2026-11-27, see **Snapshot 2026-11-27** below. Where the May text no longer holds, a contradiction callout says so.

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

> [!contradiction] `shared-skills` is not a submodule
> Earlier: `shared-skills/` is a submodule of this repo (source: _raw/processed/2026-05-10_second-brain-export.md)
> New: since 2026-08-09 the shared skills come only as the Claude Code plugin `ss@shared-skills` (prefix `ss:`), the same way outside users get them. Their source is the sibling repo `../shared-skills`. `private-skills/` is still a submodule (source: `CLAUDE.md` and `.gitmodules`, read 2026-11-27)

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

> [!contradiction] Index protocol, `/ingest` and slide commands
> Earlier: read `_index.md` → `catalog.md` → file; `/ingest` turns the inbox into data; slides run as `/slides:init` … `/slides:archive` (source: _raw/processed/2026-05-10_second-brain-export.md)
> New: after `_index.md`, an entity's `status.md` is read in full first, as the only source of truth on its state. `catalog.md` is a file map, and status is never inferred from it. No command processes `inbox/` today. Intake will return as `/sa-ingest` when this repo takes on the foundation from [[agentic-ai-system]]. The slide commands come from the plugin as `/ss:slides:init` … `/ss:slides:archive` (source: `CLAUDE.md`, read 2026-11-27)

## 📒 Snapshot 2026-11-27
This is from my read-only read of the repo on 2026-11-27. It covers structure only: clients, finances and personal data stay in the repo.

On this workstation the repo sits at `C:\Projects\agentic-ai-private`, beside `agentic-ai-system` and `shared-skills`. The default branch is still `master`.

### 🧩 Layout today
```
agentic-ai-private/
├── CLAUDE.md              # the rules: one file, sections per area
├── AGENTS.md              # short pointer for other agents; sends them to CLAUDE.md sections
├── REVIEW.md              # review rules Codex follows
├── private-skills/        # submodule
├── .claude/skills/        # repo-local skills (Claude Code only)
├── context/               # still the knowledge home (unlike agentic-ai-system)
│   ├── author-profile.md · consultant-profile.md · company.md · finances.md
│   ├── legal-entities.md · projects-portfolio.md · process-mapping.md
│   ├── brand/             # voice, channels, LinkedIn, talks
│   ├── tasks/             # task-registry conventions + tasks with no entity
│   ├── personal/          # goals, learning, own projects, research
│   └── plsoft/            # clients/, projects/, data/, deliverables/, marketing/
├── tools/                 # Python + TypeScript: tasks, context-lint, social, dashboard,
│                          #   sync-skills, claude-mods, archify, stageshow, …
├── openspec/              # SDD: changes + specs
├── slides/                # Marp decks
├── output/                # sealed exports (not read by default)
└── docs/
```

### 🧩 What changed since May
- **Skills come from three sources, each through one channel.** The `ss@shared-skills` plugin (`ss:`), the `private-skills/` submodule, which `tools/sync-skills` links into `.claude/`, `.github/` and `.cursor/` (Antigravity's old `.agent/` target was dropped), and repo-local `.claude/skills/`. Plugin skills reach Claude Code only. `.agents/skills/` holds only what the `skills` CLI (`skills-lock.json`) and OpenSpec install.
- **Codex reviews, Claude Code works.** Since 2026-10-29 Codex gets no skills from this repo. It reads `AGENTS.md`, then `REVIEW.md`, and reviews finished code.
- **Plans are reviewed before code.** An OpenSpec change with a `design.md` goes through context-free reviewers (the EGM plugin, run by the `recenzja-planu` skill) before I accept it.
- **A task registry since 2026-08-09.** An open matter is a file, `<entity>/tasks/<slug>.md`, with a YAML header. `tools/tasks/schema.yaml` is the only source of field values, read by both the generator and lint. A Claude Code mod, `task-status` (marketplace `plsoft-mods` in `tools/claude-mods/`, installed project-scope), shows the registry's state in the status bar and through `/zadania`.
- **Three roles, never three copies of status.** For clients and projects, `status.md` holds the state, `catalog.md` the file list and `_index.md` one row.
- **A social-media loop since 2026-08-30.** Outgoing material lives in a `SOCIAL_MEDIA` project entity, with the machinery in `tools/social/` and a channel doctrine matrix in `tools/social/channels.yaml`. A topic (thesis, scope, release window) is kept apart from its materials, which are one output each.
- **A read-only project dashboard.** `tools/dashboard/` serves a local page with the state of every entity. It writes nothing.
- **New repo-local skills** include interactive HTML diagrams (`/archify`), short product-demo videos (`/stageshow`), task triage, night work ported from [[agentic-ai-system]], and the social-media production skills.

## 🔗 Links
- [[Agentic AI Repos]] — hub
- [[agentic-ai-system]] — sibling repo for 200IQ LABS / Qamera AI
- [[Agentic Skills Submodules]] — shared-skills + private-skills
- [[PLSoft]] — JDG profile
- [[About]] — owner profile
- [[Tech News Weekly]] · [[Value Builders]]
- [[Open Hive Playbooks — Fit for My Agent Systems]] — which Open Hive sales playbooks this repo already covers and what to build next (2026-11-27)
