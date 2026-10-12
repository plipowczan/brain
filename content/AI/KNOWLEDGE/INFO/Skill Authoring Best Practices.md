---
title: "Skill Authoring Best Practices"
date: 2026-10-12
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "claude", "skills", "agent-skills", "claude-code", "guide", "progressive-disclosure", "evaluation"]
type: knowledge-note
source: "_raw/processed/2026-10-12_Skill authoring best practices.md"
agent-created: true
summary: "Anthropic's official guide to writing Skills Claude can actually discover and use: be concise, match freedom to fragility, one-level-deep references, eval-first iteration with a Claude A / Claude B loop, and a pre-share checklist."
---

# Skill Authoring Best Practices

## 🗒️ Description

The official Anthropic guide to **writing Skills that Claude can discover and use successfully**, from the platform docs ([Skill authoring best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)). It is the practical companion to the concept pages: [[Agent Skills]] says what a skill is, [[Building Claude Skills Guide]] points at the long PDF, and this is the short list of authoring decisions.

🚀 **The one-line version:** a skill is context the model shares with everything else, so write the least that closes a real gap, test it on every model you will run it with, and let Claude help you tune it.

## 🔗 Links

- [Core principles](#-core-principles)
- [Structure](#-structure)
- [Workflows and feedback loops](#-workflows-and-feedback-loops)
- [Content and common patterns](#-content-and-common-patterns)
- [Evaluate and iterate](#-evaluate-and-iterate)
- [Skills with executable code](#-skills-with-executable-code)
- [Checklist](#-checklist)
- [How it lines up with my brain skills](#-how-it-lines-up-with-my-brain-skills)

## 🧩 Core principles

- **Concise is key.** The context window is shared with the system prompt, history, other skills' metadata and the request. Only name and description are pre-loaded; the body loads when the skill triggers, and from then on every token competes with the conversation. Test each line: *does Claude really need this? does it justify its token cost?* Assume Claude is already smart. The guide's example: a 50-token "use pdfplumber" snippet beats a 150-token explanation of what a PDF is.
- **Match freedom to fragility.** Picture a robot on a path. A narrow bridge with cliffs (a database migration) gets exact scripts with few or no parameters (**low freedom**). An open field (a code review) gets general direction (**high freedom**). In between sits pseudocode or a parameterised script (**medium**).
- **Test with every model you plan to use.** A skill adds to a model, so it behaves differently per model: does it give **Haiku** enough guidance, is it clear for **Sonnet**, does it avoid over-explaining for **Opus**?

## 🧩 Structure

- **Naming:** lowercase letters, numbers and hyphens only (max 64 characters, no reserved words). Prefer the **gerund form** (`processing-pdfs`, `testing-code`); noun phrases and action verbs are acceptable. Avoid vague names (`helper`, `utils`, `tools`) and inconsistent patterns within one collection.
- **Description:** the field Claude uses to pick the skill out of potentially 100+. It must say **what it does and when to use it**, with key terms. Max 1,024 characters. "Helps with documents" fails; "Extract text and tables from PDF files, fill forms, merge documents. Use when working with PDF files…" works.
- **Progressive disclosure:** `SKILL.md` is the table of contents. Keep the body **under 500 lines** and split into bundled files that are read only when needed. Three patterns:
  1. **High-level guide with references:** quick start inline, `FORMS.md` / `REFERENCE.md` / `EXAMPLES.md` loaded on demand.
  2. **Domain-specific organisation:** `reference/finance.md`, `sales.md`, `product.md`, so a sales question never loads finance schemas.
  3. **Conditional details:** basics inline, a link for the advanced case (tracked changes, OOXML).
- **Keep references one level deep from `SKILL.md`.** When file A links to B which links to C, Claude may preview with `head -100` and miss content. Give reference files over 100 lines a **table of contents** at the top so a partial read still shows the full scope.

## 🧩 Workflows and feedback loops

- **Break complex tasks into steps**, and for long ones give a **copyable checklist** Claude ticks off as it goes. It works with or without code.
- **Feedback loop = validator → fix → repeat.** The validator can be a script (`validate.py`) or a reference document (a style guide Claude checks its draft against). Don't continue until validation passes.
- **Plan-validate-execute** for batch or destructive work: have Claude write a structured plan file (`changes.json`), validate it with a script, then apply it. Make validators verbose ("Field 'signature_date' not found. Available fields: …") so Claude can self-correct.

## 🧩 Content and common patterns

- **No time-sensitive information.** Instead of "before August 2025 use the old API", keep a *current method* section and fold legacy behaviour into a collapsed "old patterns" block.
- **One term per concept** (always "API endpoint", always "field", always "extract").
- **Template pattern:** strict ("ALWAYS use this exact structure") for API-style output, a sensible default with "adapt as needed" for flexible output.
- **Examples pattern:** input/output pairs convey style and level of detail better than description. The guide's commit-message skill shows three.
- **Conditional workflow pattern:** route at decision points ("creating new → … / editing existing → …").
- **Anti-patterns:** Windows-style backslash paths (use forward slashes everywhere), and offering too many options ("use pypdf, or pdfplumber, or PyMuPDF…"). Give a **default with one escape hatch**.

## 🧩 Evaluate and iterate

- **Build evaluations first**, before extensive documentation: run Claude on representative tasks *without* the skill and note where it fails, write three scenarios that test those gaps, record the baseline, write the minimum instructions that pass, then iterate. An eval is a query, the files, and a list of expected behaviours.
- **Develop with two Claudes.** *Claude A* is the expert that helps design and refine the skill; *Claude B* is a fresh instance that uses it on real tasks. Do a task with A using normal prompting, ask A to capture the reusable pattern as a skill, trim it for conciseness, test it with B, then bring B's observed failures back to A ("it forgot to filter test accounts, maybe the rule isn't prominent enough?"). Repeat.
- **Watch how Claude navigates the skill:** unexpected read order means the structure isn't intuitive; skipped links mean the references aren't explicit enough; a file it re-reads constantly belongs in `SKILL.md`; a file it never opens is unnecessary or poorly signalled.
- Share with teammates and ask: does it trigger when expected, are the instructions clear, what's missing?

## 🧩 Skills with executable code

- **Solve, don't defer:** handle errors in the script instead of letting Claude figure it out. No **"voodoo constants"** (Ousterhout's law): document why a timeout is 30 and retries are 3.
- **Ship utility scripts** rather than having Claude generate code each time: more reliable, saves tokens, consistent. Say clearly whether Claude should *execute* the script (usual) or *read it as reference*. Only the script's output consumes context.
- **Use visual analysis** when the input can be rendered as an image (convert PDF pages to images and let Claude look).
- **Dependencies:** claude.ai can install npm / PyPI packages and pull from GitHub; the Claude API has no network access and no runtime installs. List the packages in `SKILL.md` and never assume they exist.
- **Runtime model:** name and description are pre-loaded; files are read on demand through bash; large reference files cost nothing until read. So name files descriptively (`form_validation_rules.md`, not `doc2.md`) and organise by domain.
- **MCP tools:** use fully qualified names, `ServerName:tool_name` (`BigQuery:bigquery_schema`), or Claude may fail to find the tool when several servers are connected.

## 📒 Checklist

Before sharing a skill:

- **Core:** specific description with key terms and a "when to use"; body under 500 lines; details in separate files; no time-sensitive text; consistent terminology; concrete examples; references one level deep; clear workflow steps.
- **Code:** scripts solve rather than defer; explicit error handling; no unexplained constants; packages listed; forward slashes only; validation for critical operations; feedback loops for quality-critical work.
- **Testing:** at least three evaluations; tried on Haiku, Sonnet and Opus; real usage scenarios; team feedback.

## 🎨 How it lines up with my brain skills

Checked against `.claude/skills/` on 2026-10-12:

- **Size:** all 17 `brain-*` skills are well under the 500-line ceiling; the longest, `brain-export`, is 204 lines. Seven of them (`curate`, `export`, `gaps`, `ingest`, `lint`, `refactor`, `reindex`) keep deterministic work in a `scripts/` folder, for example `brain-ingest/scripts/yt_fetch.py`, which is the "execute, don't load" pattern.
- **Descriptions:** every skill has one, but the `brain-research-*` helpers have very short ones (roughly 60 to 120 characters). Those are the first candidates to extend with a "when to use" clause, since the description is the only thing pre-loaded.
- **Structure:** each skill is a flat `SKILL.md` plus an optional `scripts/` folder (`brain-research` has a single `validate_json.py` beside it), so the one-level-deep rule holds by construction.
- **Gap:** I found no eval files for any of them (only a unit test for `yt_fetch.py`). The guide's "three scenarios plus a baseline" is the missing piece, and [[Skills 2.0 Testing]] already sketches the 4-agent pipeline for it. [[Autoharness]] is the opposite bet, validating by adherence instead of by benchmark.

## 📖 Further reading/watching

- Source: [Skill authoring best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices) · [Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
- [[Agent Skills]] · [[Agent Skills (Addy Osmani)]] · [[Awesome Agent Skills]] · [[Building Claude Skills Guide]] · [[Skills 2.0 Testing]]
- [[Progressive Disclosure]] — the same index-first principle at vault level
- [[Context Engineering]] · [[Harness Engineering]] · [[Autoharness]] · [[Claude Code Mods (RoboNuggets)]]

---
Template: [[templates/knowledge_note_info]]
