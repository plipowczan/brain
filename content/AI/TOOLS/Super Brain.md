---
title: "Super Brain"
date: 2026-11-01
enableToc: true
openToc: true
tags: ["tool", "ai", "second-brain", "knowledge-base", "obsidian", "agent-skills", "claude-code", "karpathy"]
type: tool
source: "_raw/processed/2026-11-01_superhero-techsuper-brain Product Builder Second Brain - AI Product Heroes Edition 3.md"
agent-created: true
summary: "superhero-tech/super-brain — AI Product Heroes' Karpathy-style second brain for product builders: ingest/query/lint skills plus project and profile layers; index-only, ceiling about 100 pages"
status-checked: 2026-11-13
project-status: active
---

# Super Brain

> [!success] Status check 2026-11-13 — active
> **Verdict:** The last commit is 2026-10-26 (18 days ago), PR #7 "Remove vault limits and allow material across topics".
> **Last release:** no releases (commits only) · **last commit:** 2026-10-26 · **licence:** MIT (LICENSE file added 2026-08-25)
> **Repo:** https://github.com/superhero-tech/super-brain
> **Changed since this note:** The note (2026-11-01) describes a state the repo had already left on 2026-10-26. Commit 47d73a2 deleted `8-System/limits.md`, the five failure modes the note cites as "honest limits".

## 🚀 Description

[superhero-tech/super-brain](https://github.com/superhero-tech/super-brain) — "Product Builder Second Brain, AI Product Heroes Edition 3", from the Polish team behind Superhero.tech and the AI Product Heroes course. A vault the AI reads, writes and maintains: sources compile into a linked wiki, answers get saved, projects carry enough context that an agent can join cold, and your profile lives in a file instead of a system prompt.

It is an adaptation of [[Karpathy Method]] ([[LLM Knowledge Bases]]) with the decisions already made. It is the same pattern as this vault — which makes it a handy comparison point.

Setup: `git clone`, `cd super-brain`, `claude`, run `/second-brain-setup`. Obsidian recommended but not required; also covers Claude Cowork, OpenCode and any AI IDE. Claude reads skills from `.claude/skills/`, Codex and ChatGPT from `.agents/skills/`.

## 🧩 Skills

| Skill | Job |
| --- | --- |
| `ingest` | Lists everything a source touches, **checks that reading with you before writing**, then updates every touched page with two-way links ("five pages moved, or it says why not") |
| `query` | Answers with `[source: …]` citations, saves to `9-Outputs/` with a **"what the wiki could not answer"** section |
| `lint` | Monthly, ten checks sorted into errors/warnings/notes, ranked report, reports only |
| `project-start` | Interview that pushes back once per section |
| `project-update` | Turns work into an artefact, a log entry and a fresh index row |
| `second-brain-setup` | Profile into `8-System/about.md` from an assessment (Gallup, DISC, MBTI) or interview |
| `youtube` | Video to source note via `yt-dlp`, then hands to `ingest` |
| `feynman` | Explains a page in plain words, sorts the thin spots into wiki's / sources' / own fault |

Folder numbering: `2-Inbox`, `3-Projects`, `7-Skills`, `8-System` (`about.md`, `brain.md`, `limits.md`), `9-Outputs`.

## 🎨 What it adds to Karpathy's method

Operations as skills with self-checks; a **project layer** (brief + rules + append-only log); a profile file; a **check-in before anything is written** (a wrong page today is a wrong answer for a month); frontmatter `lint` can sort on (`status`, `source_count`, `last_updated`); gaps as a required section of every saved answer; `feynman`; and a `limits.md` the agent must read.

Honest limits: error compounding is real, an authoritative-looking wiki gets checked less, and index-only navigation tops out around **a hundred pages, one vault per domain**. They deliberately skipped a search tool like qmd.

## Reasoning for

Compared to my own setup ([[Brain]], 400+ notes), the ideas worth borrowing: the **ingest check-in** (my `/b:ingest` only asks for cluster confirmation), the **required "gaps" section** in saved answers (see `/b:qa`), the ranked lint report, and a `limits.md`. My three-level index (vault-map → catalog → graph) is how I get past their 100-page ceiling. See also [[Second Brain Design]] and [[Progressive Disclosure]].

## Alternatives considered

- My own vault protocol in [[Brain]]
- [[Obsidian Skills]] — generic Obsidian skills without the project/profile layers
- [[Karpathy Skills]] — behavioural guidelines, not a vault system

## 🔗 Links

- Repo: https://github.com/superhero-tech/super-brain
- Companion skills: https://github.com/superhero-tech/superhero-skills
- AI Product Heroes: https://aiproductheroes.pl/

---
Template: [[templates/tool]]
