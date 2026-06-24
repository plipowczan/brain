---
title: "Harness Engineering"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "coding-agents", "context-engineering", "claude"]
type: knowledge-note
source: "_raw/inbox/Skill Issue Harness Engineering for Coding Agents.md"
agent-created: true
summary: "Configuring coding agent harness (CLAUDE.md, MCP, skills, sub-agents, hooks) to maximize output quality"
---

# Harness Engineering

## 🗒️ Description
Harness engineering to praktyka konfigurowania coding agenta — jego CLAUDE.md/AGENTS.md, MCP servers, skills, sub-agents i hooks — żeby maksymalizować jakość output i success rate. Termin ukuty przez [Viv Trivedy](https://www.vtrivedy.com/posts/claude-code-sdk-haas-harness-as-a-service). Jest to podzbiór [context engineering](https://github.com/humanlayer/12-factor-agents) (termin Dexa z HumanLayer / 12-factor agents).

> [!note] Konflikt atrybucji
> [[Harness Engineering (Ryan Lopopolo)]] — Ryan Lopopolo (OpenAI, Codex) twierdzi w swoim talku na AI Native DevCon, że to **on** ukuł termin "harness engineering". Dwie równoległe historie pochodzenia tej samej idei.

```
coding agent = AI model(s) + harness
```

Kluczowy insight: większość failures agentów to **nie problem modelu, lecz konfiguracji**. Modele będą lepsze, ale wtedy damy im harder problems i będą failować w nowy sposób. Zamiast czekać na GPT-6 — wyciśnij max z dzisiejszych modeli.

## 🔗 Links
- [[Agent Skills]] — progressive disclosure wiedzy i narzędzi
- [[Progressive Disclosure]] — pattern leżący u podstaw skills, sub-agents i context retrieval
- [[Context Engineering]] — szersza dyscyplina; harness to praktyczna implementacja
- [[LLM Knowledge Bases]] — LLM-maintained wiki pattern, pokrewna filozofia
- [[Loop Engineering]] — self-prompting loops folded into harness engineering
- [[Harness Engineering in Practice]] — HOWTO: stosowanie tych zasad w moich projektach (Brain, Qamera, Jakub Głąb, TTTR)

## 🧩 Features:

### CLAUDE.md & AGENTS.md
Pierwszy punkt konfiguracji. Markdown files injected do system prompt. Kluczowe zasady (potwierdzone [badaniem ETH Zurich](https://arxiv.org/abs/2602.11988) na 138 agentfiles):
- **Nie generuj automatycznie** — LLM-generated agentfiles *pogorszyły* performance przy 20%+ wyższym koszcie
- **Less is more** — concise, universally applicable instructions. HumanLayer trzyma < 60 linii
- **Progressive disclosure** — nie upychaj wszystkiego w jednym pliku
- **Unikaj codebase overviews** — agenty same odkrywają strukturę repo

### MCP Servers — dla tools
Rozszerzają capabilities agenta poza file I/O i bash. Tool descriptions trafiają do system prompt — **nigdy nie podłączaj untrusted MCP servers** (prompt injection vector!).

**Zbyt wiele tools = źle.** Context window wypełnia się tool descriptions, agent wpada w "dumb zone". Anthropic wypuścił [experimental MCP tool search](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool) żeby progressive disclosure tools.

Jeśli MCP server duplikuje funkcjonalność CLI well-represented in training data (GitHub, Docker, databases) — lepiej promptnąć agenta do używania CLI. Composability z `grep`/`jq` daje dodatkową context-efficiency.

Przykład HumanLayer: zamienili Linear MCP server na custom CLI wrapper + 6 example usages w CLAUDE.md — oszczędność tysięcy tokenów.

### Skills — reusable knowledge
Progressive disclosure instrukcji. Agent dostaje specificzne knowledge dopiero gdy go potrzebuje. Skill = folder z `SKILL.md` + opcjonalne dodatkowe pliki.

Można bundlować executables, CLIs, npm packages z skillem (nie MCP servers bezpośrednio).

### Sub-agents — context control
**Nie** "frontend engineer" vs "backend engineer" — to nie działa. Sub-agents to **context firewall**: encapsulate cały session's worth of work tak, że parent agent widzi tylko prompt + final result. None of intermediate tool calls/results trafia do parent context.

#### Context rot
[Chroma research](https://research.trychroma.com/context-rot) potwierdza: modele perform worse at longer context lengths. Low semantic similarity między pytaniem a relevant info → steeper degradation. Każdy intermediate tool call to potential distractor, a distractor effects **compound**.

#### Long-context models ≠ rozwiązanie
Bigger context window to bigger haystack — nie lepsza needle-finding. Extended-context to ten sam model z clever math (np. YaRN), nie bigger instruction budget.

#### Kiedy sub-agents
- Locating specific definitions/implementations
- Analyzing codebase patterns
- Tracing information flow across service boundaries
- General research tasks (code, docs, web)

Sub-agents zwracają condensed responses z `filepath:line` citations — parent agent nie widzi sources, ale ma info żeby drill down.

#### Cost control
Parent session (Opus) — thinking-heavy orchestration. Sub-agents (Sonnet/Haiku) — discrete tasks z mniejszym instruction budget.

### Hooks — control flow
User-defined commands/scripts triggered by events w lifecycle agenta. Conceptually similar do git hooks.

Mogą:
- Automatycznie i cicho reagować na events
- Dodawać context do tool results
- Surfacować build/type errors zanim agent skończy

Use cases:
- **Notifications** — sounds when agent finishes or needs attention
- **Approvals** — auto-approve/deny based on rules (np. deny `Bash()` with migrations)
- **Integrations** — Slack message, GitHub PR, preview environment
- **Verification** — typecheck/build po każdym stopie agenta, silent on success, errors surfaced

### Back-pressure
Likelihood sukcesu silnie koreluje z agent's ability to verify own work:
- Typechecks i build steps (najlepiej w strongly-typed language)
- Unit/integration tests
- Code coverage reporting
- UI testing (Playwright, agent-browser)

**Context-efficient**: swallow output, only surface errors. Success is silent.

## 📖 Further reading
- [Skill Issue: Harness Engineering](https://www.humanlayer.dev/blog/skill-issue-harness-engineering-for-coding-agents) — główne źródło
- [Viv's harness posts](https://www.vtrivedy.com/posts/claude-code-sdk-haas-harness-as-a-service) — 4 customization levers
- [Anatomy of an Agent Harness](https://blog.langchain.com/the-anatomy-of-an-agent-harness/) — Viv @ LangChain
- [Writing a good CLAUDE.md](https://www.humanlayer.dev/blog/writing-a-good-claude-md)
- [A complete guide to AGENTS.md](https://www.aihero.dev/a-complete-guide-to-agents-md) — Matt Pocock
- [Advanced Context Engineering](https://www.humanlayer.dev/blog/advanced-context-engineering)
- [12-factor agents](https://github.com/humanlayer/12-factor-agents) — context engineering origins
- [Context Rot research](https://research.trychroma.com/context-rot) — Chroma
- [Context-Efficient Backpressure](https://www.humanlayer.dev/blog/context-efficient-backpressure)
- [Mitchell Hashimoto on harness engineering](https://mitchellh.com/writing/my-ai-adoption-journey#step-5-engineer-the-harness)
- [ETH Zurich agentfiles study](https://arxiv.org/abs/2602.11988)

---
Template: [[templates/knowledge_note_info]]
