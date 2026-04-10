---
title: "Claude Code"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "claude", "coding-agents"]
type: tool
agent-reviewed: 2026-04-10
agent-created: true
summary: "Anthropic's CLI for AI-assisted development — primary dev environment"
---
# Claude Code

Anthropic's official CLI tool for AI-assisted software development. My primary development environment since 2025.

## Links
### Description
An interactive terminal agent that can read, write, and execute code. Works with the full Claude model family (Opus, Sonnet, Haiku).
### Download or use
Available via npm: `npm install -g @anthropic-ai/claude-code`

## Reasoning for
This is where I spend most of my development time. Instead of writing code manually, I design the environment (CLAUDE.md, skills, MCP servers, hooks) and let Claude Code do the implementation. Key capabilities:
- **Skills system** — reusable instruction packages loaded on demand ([[Agent Skills]])
- **MCP servers** — connect to external tools and APIs
- **Hooks** — automated responses to agent events
- **Sub-agents** — parallel task execution with isolated context
- **[[Harness Engineering]]** — the practice of configuring all the above

## How I use it
- 99% of small code fixes in [[Qamera AI]] are done by Claude Code agents
- I review agent output, not write code myself
- Combined with [[Context Engineering]] for optimal results

## Alternatives considered
- [[Cursor]] — IDE-based, good for visual work, but CLI gives more control
- GitHub Copilot — inline completions, but less autonomous
- Codex CLI — OpenAI's alternative

## 🚀 5 technik efektywnej pracy

### 1. PRD-first development
Zacznij od Product Requirement Document (markdown z pełnym zakresem projektu). PRD to "gwiazda polarna" — single source of truth dla agenta. Każda sesja zaczyna się od: "Based on PRD, what should we build next?" Agent czyta PRD, rozumie kontekst, sugeruje kolejny logiczny krok.

### 2. Systematic prompting (Context → Spec → Implement → Review)
- **Prime** — załaduj kontekst codebase na starcie sesji (`/prime` command)
- **Plan** — stwórz structured plan jako self-contained markdown document
- **Execute** — implementuj z planem jako jedynym kontekstem (po context reset!)
- **Validate** — automatyczne testy i weryfikacja

### 3. Context window management — less is better
- Modularyzacja reguł: CLAUDE.md max ~200 linijek (global), reszta w `reference/` folder ładowany on-demand
- **Progressive disclosure** — nie ładuj wszystkiego na raz. Agent sam sięga po reference docs gdy potrzebuje
- Context reset między planowaniem a wykonaniem — counterintuitive, ale daje agentowi max przestrzeń do reasoning
- Przytłoczenie LLM nieistotnym kontekstem = gorsza jakość outputu

### 4. Skill composition — łączenie wielu skills
Komendy jako reusable markdown workflows (`/prime`, `/plan-feature`, `/execute`, `/validate`, `/commit`). Composable — łącz je w sekwencje. Każda komenda pamięta za Ciebie kolejne kroki procesu. Jeśli robisz coś >2 razy — zamień w komendę.

### 5. Review loops before commits
Ewolucja systemu: każdy bug to lekcja. Nie naprawiaj buga — napraw system, który na niego pozwolił. Po każdej feature: refleksja → aktualizacja rules/commands → ta klasa bugów wyeliminowana na zawsze. Compound effect: po 3 miesiącach agent robi mniej błędów niż junior developer.

### PIV Methodology (Prime-Implement-Validate)
Framework [claude-piv-skeleton](https://github.com/plipowczan/claude-piv-skeleton) implementuje wszystkie techniki w gotowym do użycia repo — pre-built commands, modular rules, technology templates.

## Resources
[Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code/overview)

---
Template: [[templates/tool]]
