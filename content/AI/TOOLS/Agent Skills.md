---
title: "Agent Skills"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "claude", "coding-agents"]
type: tool
source: "_raw/inbox/anthropicsskills Public repository for Agent Skills.md"
agent-created: true
summary: "Anthropic's system for dynamically loading specialized instructions into Claude — reusable skill packages"
---

# Agent Skills

Skills to foldery z instrukcjami, skryptami i zasobami, które Claude ładuje dynamicznie żeby lepiej wykonywać specjalistyczne zadania. Zamiast upychać wszystko w system prompt — progressive disclosure: agent dostaje dostęp do konkretnych instrukcji dopiero gdy zdecyduje (lub user zdecyduje), że ich potrzebuje.

Oryginalnie wprowadzone przez Anthropic dla Claude Code, teraz open standard wspierany przez Codex, OpenCode i inne harnessy.

## Links
### Description
[GitHub: anthropics/skills](https://github.com/anthropics/skills/tree/main) — publiczne repozytorium z example skills
### Download or use
```bash
# W Claude Code — dodaj marketplace:
/plugin marketplace add anthropics/skills

# Instalacja bezpośrednia:
/plugin install document-skills@anthropic-agent-skills
/plugin install example-skills@anthropic-agent-skills
```

W Claude.ai — skills dostępne na paid plans. Via API — [Skills API Quickstart](https://docs.claude.com/en/api/skills-guide#creating-a-skill).

## Reasoning for
Skills rozwiązują problem instruction budget — każde irrelevant instruction to token, który agent musi przetworzyć bez pożytku. Zamiast ładować wszystko upfront, skills umożliwiają progressive disclosure wiedzy i narzędzi.

### Struktura skilla
```
my-skill/
├── SKILL.md          # Główne instrukcje + YAML frontmatter
├── response_template.md  # Opcjonalne szablony
└── CLIs/             # Opcjonalne bundled tools
```

Minimalny `SKILL.md`:
```yaml
---
name: my-skill-name
description: A clear description of what this skill does and when to use it
---
# My Skill Name
[Instructions here]
```

### Kategorie dostępnych skills
- **Creative & Design** — art, music, brand guidelines
- **Development & Technical** — testing, MCP server generation, TDD
- **Enterprise & Communication** — communications, branding
- **Document Skills** — DOCX, PDF, PPTX, XLSX (source-available, power Claude's document capabilities)

### Bezpieczeństwo
Skill registries (ClawHub, skills.sh) mogą wykonywać arbitrary code — traktuj jak `npm install random-package`. Czytaj co instalujesz.

## Alternatives considered
- Wszystko w CLAUDE.md / AGENTS.md — nie skaluje się, blows instruction budget
- MCP servers — lepsze do tools, nie do instrukcji
- Custom system prompts — brak progressive disclosure

## Resources
- [What are skills?](https://support.claude.com/en/articles/12512176-what-are-skills)
- [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude)
- [How to create custom skills](https://support.claude.com/en/articles/12512198-creating-custom-skills)
- [Equipping agents for the real world](https://anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)
- [Agent Skills spec](https://agentskills.io/)
- [[Harness Engineering]] — skills jako jeden z key levers harness engineering
- [[LLM Knowledge Bases]] — LLM-driven knowledge management, pokrewny pattern
- [[Vercel Skills]] — `npx skills` CLI instalujący SKILL.md z dowolnego repo do 50+ agentów
- [[Karpathy Skills]] — single CLAUDE.md zamiast load-on-demand skili

---
Template: [[templates/tool]]
