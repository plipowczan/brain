---
title: "ASD-STE100 Skill"
date: 2026-11-01
enableToc: true
openToc: true
tags: ["tool", "ai", "agent-skills", "claude-code", "prompts", "writing", "open-source"]
type: tool
source: "_raw/processed/2026-11-01_danyuchnasd-ste100-skill ASD-STE100 Simplified Technical English rules, repurposed as a Claude Code skill for rewriting ambiguous agent-facing English.md"
agent-created: true
summary: "danyuchn/asd-ste100-skill — Claude Code skill that rewrites ambiguous English into Simplified Technical English so another agent cannot misread tool descriptions, errors or instructions"
status-checked: 2026-11-13
project-status: active
---

# ASD-STE100 Skill

> [!success] Status check 2026-11-13 — active
> **Verdict:** The latest commit on master is d5caf549, dated 2026-11-12 (PR #66, a linter fix for sentence ends at trailing emphasis markers).
> **Last release:** no releases (commits only); no tags · **last commit:** 2026-11-12 · **licence:** MIT. The official ASD-STE100 dictionary (about 900 words) is deliberately not included…
> **Repo:** https://github.com/danyuchn/asd-ste100-skill
> **Changed since this note:** The two weeks since the note brought a burst of fixes to the deterministic linter (scripts/ste-lint.py). It now lints the front-matter 'description' key (relevant for SKILL.md files) and supports MkDocs admonitions.

## 🚀 Description

[danyuchn/asd-ste100-skill](https://github.com/danyuchn/asd-ste100-skill) repurposes ASD-STE100 Simplified Technical English — the controlled language the aerospace industry built so maintenance instructions cannot be misread — for a new reader: **an AI agent** parsing another agent's output, a tool description, an error message or an inter-agent instruction, with no human to ask "did you mean X or Y?".

STE rules in short: one meaning per word, active voice, simple tenses, one instruction per sentence, short sentences, no dropped words.

## 🧩 How it works

1. Picks a mode — **Strict** (procedures, error messages, tool descriptions) or **STE-flavored** (READMEs, PR descriptions; sentence discipline without the fixed vocabulary)
2. Flags violations sentence by sentence: ambiguous words, present-perfect, unclear passive, multi-instruction sentences, noun clusters, dropped words, long sentences, phrasal verbs, nominalizations, semicolons, hedge stacks, marketing adjectives
3. Rewrites each flagged sentence **without dropping any fact, condition or scope qualifier**; if a shorter phrasing loses precision it keeps the longer one and says so
4. Outputs only the rewritten text (plus a `Kept as-is:` line); ask "show the diff" for a before/after table naming the rules

Includes a deterministic linter (`scripts/ste-lint.py`) for structural patterns: semicolons, a short list of phrasal verbs, nominalizations, marketing adjectives, passive voice, present-perfect, long sentences, synonym rotation. It does **not** check noun-cluster length, does not prove meaning was preserved, and never flags hedges. It also does not ship ASD's official ~900-word dictionary (redistribution needs ASD's written authority).

Limits worth remembering: it fixes the *form* of a text, not its substance; it is wrong for creative or marketing writing.

## Reasoning for

Directly applicable to the text my agents read: skill descriptions, `AGENTS.md`, tool descriptions in MCP servers, error messages from my scripts. See [[Skill Authoring Best Practices]] and [[Context Engineering]] — clear, literal instructions are part of the same discipline, and Matt Pocock's shared-glossary idea in [[Matt Pocock Skills]] attacks the same ambiguity from the vocabulary side.

## Alternatives considered

- Manual editing against a style guide such as [[Skill Authoring Best Practices]]
- Hebrew port: [g4lb/asd-ste100-hebrew-skill](https://github.com/g4lb/asd-ste100-hebrew-skill) (an adaptation, not an official standard)

## 🔗 Links

- Repo: https://github.com/danyuchn/asd-ste100-skill
- Install: `npx skills add danyuchn/asd-ste100-skill` (see [[Vercel Skills]])
- Standard: https://www.asd-ste100.org/

---
Template: [[templates/tool]]
