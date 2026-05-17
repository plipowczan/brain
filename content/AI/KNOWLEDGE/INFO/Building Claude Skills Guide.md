---
title: "Building Claude Skills Guide"
date: 2026-05-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "claude", "skills", "claude-code", "guide"]
type: knowledge-note
source: "_raw/inbox/The-Complete-Guide-to-Building-Skill-for-Claude.pdf"
agent-created: true
summary: "Pointer to The Complete Guide to Building Skill for Claude (PDF) — a compendium for creating your own skills for Claude Code"
---

# Building Claude Skills Guide

## 🗒️ Description

A pointer to **The Complete Guide to Building Skill for Claude** (PDF, archived in `_raw/processed/`). A complete guide to creating your own skills for Claude Code — from folder structure (`.claude/skills/<name>/SKILL.md`), through progressive disclosure pattern, frontmatter, cluster detection, to distribution best practices (personal vs repo-local vs marketplace).

Clusters with the rest of the **Agent Skills** notes in the wiki — use as a reference document when designing a new skill or refactoring an existing one.

## 🔗 Links

- Archived PDF: `content/_raw/processed/2026-05-09_The-Complete-Guide-to-Building-Skill-for-Claude.pdf`
- Anthropic official: [docs.anthropic.com — Agent Skills](https://docs.anthropic.com/en/docs/agents/skills) (verify current path)
- Related skill creator: skills `plugin-dev:skill-development` and `document-skills:skill-creator` in the local Claude Code install

## 🧩 What it covers (typical scope)

- **Anatomy of a skill** — `SKILL.md`, frontmatter (`name`, `description`, triggers), nested directories, plain-text resources
- **Triggering** — when Claude invokes a skill, how to write the description so triggering is reliable, when a skill should be invoked proactively
- **Progressive disclosure** — why not to load everything upfront; the "main → references → resources" structure
- **Distribution** — personal (`~/.claude/skills/`), repo-local (`.claude/skills/`), plugin marketplace
- **Anti-patterns** — descriptions too generic (overlap with other skills), monolithic SKILL.md, no resource versioning

## 📖 Further reading

- [[Agent Skills]] — concept, class, ecosystem
- [[Awesome Agent Skills]] — VoltAgent's curated 1000+ skills (where to look for examples)
- [[Awesome Claude Code]] — broader Claude Code resources context
- [[Karpathy Skills]] / [[Vercel Skills]] — examples of complete skill collections
- [[Superpowers]] — agentic skills framework + SDLC methodology
- [[gstack]] — virtual team of 23+ skills
- [[UX RULER]] — example of a single skill with strong domain methodology
- [[Progressive Disclosure]] — the concept underlying skill architecture
- [[Token Optimization for Claude Code]] — why on-demand skill loading pays off

---
Template: [[templates/knowledge_note_info]]
