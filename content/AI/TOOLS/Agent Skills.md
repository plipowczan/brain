---
title: "Agent Skills"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "claude", "coding-agents", "agent-skills"]
type: tool
source: "_raw/inbox/anthropicsskills Public repository for Agent Skills.md"
agent-created: true
agent-reviewed: 2026-07-12
summary: "Anthropic's system for dynamically loading specialized instructions into Claude — reusable, cross-harness skill packages"
---

# Agent Skills

Skills are folders of instructions, scripts and resources that Claude loads **dynamically** to do specialized work better. Instead of stuffing everything into the system prompt — **progressive disclosure**: the agent gains access to specific instructions only when it (or the user) decides they are needed.

Originally introduced by Anthropic for Claude Code, now an **open standard** ([agentskills.io](https://agentskills.io/)) supported by Codex, OpenCode, Gemini CLI, Cursor, Copilot, Windsurf, Antigravity and more. The same `SKILL.md` runs on every harness — only the install path changes.

## Links
### Description
[GitHub: anthropics/skills](https://github.com/anthropics/skills) — the public repository of example skills. The repo now also ships the Agent Skills spec (`/spec`) and a starter `/template` alongside the `/skills` examples.
### Download or use
```bash
# In Claude Code — add the marketplace:
/plugin marketplace add anthropics/skills

# Direct install (marketplace: anthropic-agent-skills):
/plugin install document-skills@anthropic-agent-skills
/plugin install example-skills@anthropic-agent-skills
```

- **Claude.ai** — skills available on paid plans; upload custom skills via the web UI.
- **API** — pre-built or custom skills via the [Skills API](https://docs.claude.com/en/api/skills-guide) (`/spec`-compliant, portable across surfaces).

## Reasoning for
Skills solve the instruction-budget problem — every irrelevant instruction is a token the agent must process for nothing. Instead of loading everything upfront, skills enable progressive disclosure of knowledge and tools:

**description (1 line, always visible) → SKILL.md (full instructions, on-demand) → reference files (resources, per-operation).**

### Skill structure
```
my-skill/
├── SKILL.md              # Main instructions + YAML frontmatter
├── response_template.md  # Optional templates
└── CLIs/                 # Optional bundled tools
```

Minimal `SKILL.md`:
```yaml
---
name: my-skill-name
description: A clear description of what this skill does and when to use it
---
# My Skill Name
[Instructions here]
```

### Categories of available skills (anthropics/skills)
- **Creative & Design** — art, music, brand guidelines
- **Development & Technical** — testing, MCP server generation, TDD
- **Enterprise & Communication** — communications, branding
- **Document Skills** — DOCX, PDF, PPTX, XLSX (source-available; power Claude's document capabilities)

The core example skills are **Apache-2.0**; the four document skills (docx/pdf/pptx/xlsx) are **source-available** (not OSS). Anthropic frames the repo as demonstration/educational — test before relying on any skill for critical work.

### Quality bar (worth applying to your own skills)
- **Description** — third person, *what* + *when*, concrete keywords ("PostgreSQL migration", not "database stuff")
- **Progressive disclosure** — metadata <100 tokens, body <500 lines, big resources loaded on-demand
- **No absolute paths** — use `$HOME` / `$PROJECT_ROOT` or relative paths
- **Scoped tools** — only the tools the skill needs, never `tools: ["*"]`

Detailed in [[Awesome Agent Skills]] and [[Skills 2.0 Testing]].

### Security
Skill registries (ClawHub, skills.sh) can execute arbitrary code — treat installing a skill like `npm install random-package`. Skills are **curated, not audited**: prompt injection, tool poisoning and hidden payloads are real risks. Read what you install.

## Alternatives considered
- Everything in CLAUDE.md / AGENTS.md — doesn't scale, blows the instruction budget (see [[Karpathy Skills]] for the single-file counter-approach)
- MCP servers — better for tools, not for instructions
- Custom system prompts — no progressive disclosure

## The skills ecosystem
- [[Awesome Agent Skills]] — VoltAgent's curated 1000+ cross-platform skills from official vendor teams + community
- [[Building Claude Skills Guide]] — how to author your own skill (anatomy, triggering, distribution)
- [[Skills 2.0 Testing]] — evals, benchmarks, trigger tuning; capability-uplift vs encoded-preference taxonomy
- [[Vercel Skills]] — `npx skills` CLI installing SKILL.md from any repo into 50+ agents
- [[Karpathy Skills]] — single universal CLAUDE.md instead of load-on-demand skills
- [[Superpowers]] / [[gstack]] — opinionated multi-skill methodology stacks
- [[Agent Skills (Addy Osmani)]] — Addy Osmani's independent SDLC skills collection (24 skills across Define→Plan→Build→Verify→Review→Ship, 4 specialist personas, 8 slash commands, MIT). A sibling to [[Superpowers]]/[[gstack]], embedding Google engineering practices; not affiliated with Anthropic's repo.

## Resources
- [What are skills?](https://support.claude.com/en/articles/12512176-what-are-skills)
- [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude)
- [How to create custom skills](https://support.claude.com/en/articles/12512198-creating-custom-skills)
- [Equipping agents for the real world](https://anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)
- [Agent Skills spec](https://agentskills.io/)
- [[Harness Engineering]] — skills as one of the key levers of harness engineering
- [[LLM Knowledge Bases]] — LLM-driven knowledge management, a related pattern
- [[Hermes Agent]] — compatible with the `agentskills.io` standard, autonomous skill creation
- [[Agent Zero]] / [[Space Agent]] — agentic frameworks using SKILL.md as portable capabilities

---
Template: [[templates/tool]]
