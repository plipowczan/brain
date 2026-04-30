---
title: "Vercel Skills"
date: 2026-04-29
enableToc: true
openToc: true
tags: ["tool", "ai", "claude-code", "skills", "cli", "open-source"]
type: tool
source: "_raw/inbox/vercel-labsskills The open agent skills tool.md"
agent-created: true
summary: "npx skills — CLI dla open agent skills ecosystemu, instaluje SKILL.md z dowolnego repo do 50+ agentów (Claude Code, Codex, Cursor, OpenCode...)"
---
# Vercel Skills

`vercel-labs/skills` — CLI dla otwartego ekosystemu [[Agent Skills]]. Komenda `npx skills add <repo>` instaluje skille z dowolnego repo (GitHub, GitLab, lokalna ścieżka) do dowolnego z 50+ wspieranych coding agentów. To Vercelowy odpowiednik na fragmentację — każdy agent ma inną ścieżkę do skilli (`~/.claude/skills/`, `~/.cursor/skills/`, `~/.config/opencode/skills/`...), Skills CLI to abstrahuje przez symlinki albo copies.

Implementacja standardu opisanego na [agentskills.io](https://agentskills.io/). Discovery skili przez [skills.sh](https://skills.sh/).

## 🔗 Links

### Description
- Repo: https://github.com/vercel-labs/skills
- Spec: https://agentskills.io/
- Directory: https://skills.sh/
- Vercel Agent Skills repo: https://github.com/vercel-labs/agent-skills
- License: open source (Vercel Labs)

### Download or use

```bash
# Zero install — npx
npx skills add vercel-labs/agent-skills

# Pełny GitHub URL
npx skills add https://github.com/vercel-labs/agent-skills

# Konkretny skill z repo
npx skills add https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines

# Lokalna ścieżka
npx skills add ./my-local-skills

# Inne komendy
npx skills list                  # lista zainstalowanych
npx skills find typescript       # search interaktywny lub po keyword
npx skills update                # update do latest
npx skills remove <skill>        # usuń
npx skills init my-skill         # generuj SKILL.md template
```

## 🗒️ Description

### 🧩 Co rozwiązuje

Każdy coding agent ma własną konwencję na skille:

| Agent | Project path | Global path |
|-------|-------------|-------------|
| Claude Code | `.claude/skills/` | `~/.claude/skills/` |
| Cursor | `.agents/skills/` | `~/.cursor/skills/` |
| OpenCode | `.agents/skills/` | `~/.config/opencode/skills/` |
| Codex | `.agents/skills/` | `~/.codex/skills/` |
| GitHub Copilot | `.agents/skills/` | `~/.copilot/skills/` |
| Gemini CLI | `.agents/skills/` | `~/.gemini/skills/` |
| ... | (50+ agentów) | ... |

CLI auto-detectuje zainstalowanych agentów na maszynie i instaluje do wszystkich naraz. Symlink mode trzyma jeden canonical kopiec, agent points do niego — update jednego skill'a propaguje wszędzie.

### 🧩 Scope projektu vs globalny

| Scope | Flag | Lokacja | Use case |
|-------|------|---------|----------|
| **Project** | (default) | `./<agent>/skills/` | Commitowane z projektem, dzielone z teamem |
| **Global** | `-g` | `~/<agent>/skills/` | Dostępne wszędzie |

### 🧩 Format SKILL.md

```yaml
---
name: my-skill
description: What this skill does and when to use it
metadata:
  internal: true   # opcjonalnie, ukryte chyba że INSTALL_INTERNAL_SKILLS=1
---

# My Skill

Instructions for the agent...
```

Required: `name` (lowercase, hyphens), `description`. Skille są generally compatible między agentami, ale niektóre features są agent-specific (`allowed-tools`, `context: fork`, hooks — pełna macierz w README).

### 🧩 Discovery i plugin marketplace compat

CLI szuka skilli w 50+ standardowych lokacjach (`skills/`, `.claude/skills/`, `.cursor/skills/`, etc.) plus parsuje Claude Code plugin manifesty (`.claude-plugin/marketplace.json`, `.claude-plugin/plugin.json`). To czyni Vercel Skills kompatybilnym z [Claude Code plugin marketplace](https://code.claude.com/docs/en/plugin-marketplaces) — można konsumować skille z pluginów innych ludzi przez `npx skills`.

### 🧩 Bulk i CI/CD

```bash
# Wszystko ze wszystkim, bez promptów
npx skills add vercel-labs/agent-skills --all

# Konkretne skille do konkretnych agentów
npx skills add vercel-labs/agent-skills --skill frontend-design --skill skill-creator -a claude-code -a opencode

# CI-friendly (nie pyta)
npx skills add vercel-labs/agent-skills --skill frontend-design -g -a claude-code -y
```

Telemetry off w CI automatycznie. `DO_NOT_TRACK=1` opcjonalnie.

## ✍️ Reasoning for

To dla mnie complement do tego, co już mam w [[Brain]] — moje workflow skille (ingest, compile, reindex...) leżą w `.claude/skills/` i są zspecjalizowane pod ten vault. Vercel Skills nie zastąpi tego, ale daje mi tani sposób na **konsumpcję** community skili (frontend-design, skill-creator, web-design-guidelines z `vercel-labs/agent-skills`) bez kopiowania-pastowania.

Przede wszystkim wartość w trzech rzeczach:
1. **Multi-agent install** — gdy testuję ten sam skill na Claude Code i Cursor (mam oba) jednym `npx skills add`, nie kopiuję ręcznie
2. **Plugin marketplace compat** — kompatybilność z pluginami Anthropica bez vendor lock-in
3. **`npx skills init`** — generuje template SKILL.md, oszczędza boilerplate

Słaby punkt: `npx` overhead na każdy install (downloads CLI). Dla Mass installa lepiej globalnie — `npm i -g skills` pewnie też działa, choć README zaleca `npx`.

## Alternatives considered

- **[[Agent Skills]] (Anthropic native)** — działa tylko dla Claude Code, brak multi-agent
- **[[Karpathy Skills]] / single CLAUDE.md** — always-on instrukcje, nie load-on-demand
- **[[Awesome Claude Code]]** — kuratela bez instalera, manual copy-paste
- **Manualne git submodules** — działa, ale brak multi-agent path translation
- **Claude Code plugin marketplace** — Anthropic-only ekosystem, vendor lock-in

## 🔗 Resources

- Agent Skills spec: https://agentskills.io/
- Skills directory: https://skills.sh/
- Agent docs links (per agent): w README sekcja "Related Links" — 30+ pozycji
- Env vars: `INSTALL_INTERNAL_SKILLS`, `DISABLE_TELEMETRY`, `DO_NOT_TRACK`

---
Template: [[templates/tool]]
