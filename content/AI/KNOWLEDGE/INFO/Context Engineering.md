---
title: "Context Engineering"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "context-engineering", "llm", "agents"]
type: knowledge-note
agent-created: true
agent-reviewed: 2026-04-30
summary: "Designing optimal context for LLM agents — CLAUDE.md, MCP, skills, sub-agents, attention budget"
---

# Context Engineering

## 🚀 Core Principle
**Find the smallest possible set of high-signal tokens that maximize the likelihood of your desired outcome.**

Quality of agent output is directly proportional to quality of context you provide.

## 🗒️ Description
The practice of designing and optimizing the context fed to LLM agents. Includes project instructions (CLAUDE.md), tool configurations (MCP servers), reusable skills, and architectural decisions about what information goes where.

**Context Engineering vs Prompt Engineering:**
- **Prompt Engineering** — writing/organizing LLM instructions for optimal outcomes (one-time task)
- **Context Engineering** — curating and maintaining the optimal set of tokens during inference across multiple turns (iterative process)

Context engineering manages: system instructions, tools, MCP, external data, message history, runtime data retrieval.

## 🧩 Key components
- **CLAUDE.md / project instructions** — persistent context about the project: conventions, architecture, workflows, safety rules
- **MCP servers** — tools that give agents access to external systems (databases, APIs, documentation)
- **Skills** — dynamically loaded instruction packages ([[Agent Skills]]) for specific tasks
- **Sub-agents** — delegating tasks to focused agents with isolated context windows
- **Hooks** — automated responses to agent events (pre-commit checks, post-edit validation)

## ☘️ The attention budget — context rot
LLMs have an "attention budget" depleted as context grows:
- Every token attends to every other token (n² relationships)
- As context length increases, model accuracy decreases
- Models have less training experience with longer sequences
- Context must be treated as finite resource with diminishing marginal returns

**Solution:** fresh sub-agents for complex tasks; treat context as currency.

## System prompts: the Goldilocks zone
- **Too prescriptive** ❌ — hardcoded if-else, brittle, high maintenance
- **Too vague** ❌ — falsely assumes shared context, lacks direction
- **Just right** ✅ — specific guidance + flexible heuristics, minimal but sufficient

Best practices: simple/direct language, distinct sections (`<background_information>`, `<instructions>`, `## Tool guidance`), XML or Markdown structure, start minimal then add based on failure modes. Minimal ≠ short.

## Tools: minimal and clear
- **Self-contained** — single, clear purpose
- **Robust to error** — handle edge cases gracefully
- **Extremely clear** — unambiguous intended use
- **Token-efficient** — relevant info without bloat
- **Descriptive parameters** — `user_id` not `user`

> If a human engineer can't definitively say which tool to use, an AI agent can't be expected to do better.

Avoid: bloated tool sets, overlapping purposes, ambiguous decision points.

## Examples: diverse, not exhaustive
✅ Curate diverse canonical examples — pictures worth a thousand words
❌ Stuff in laundry list of edge cases, articulate every rule

## Context retrieval strategies
- **Just-in-time context** (recommended for agents) — maintain lightweight identifiers (paths, queries, links), load data dynamically. Mirrors human cognition. See [[Progressive Disclosure]].
- **Pre-inference retrieval (RAG)** — embedding-based retrieval before inference. Use for static content.
- **Hybrid** — retrieve some upfront, enable autonomous exploration. Example: Claude Code loads CLAUDE.md upfront, uses glob/grep just-in-time.

**Rule of thumb:** "Do the simplest thing that works."

## Long-horizon tasks: three techniques
### 1. Compaction
Summarize conversation nearing context limit, reinitiate with summary. Preserve architectural decisions, bugs, implementation; discard redundant tool outputs. Tune by maximizing recall first, then improving precision.

### 2. Structured note-taking (agentic memory)
Agent writes notes persisted outside context (to-do lists, NOTES.md, project logs). Persistent memory with minimal overhead. Best for iterative development.

### 3. Sub-agent architectures
Specialized sub-agents with clean context windows. Main agent coordinates plan; sub-agents explore (tens of thousands of tokens) and return condensed summaries (1-2k tokens). See [[Harness Engineering]].

## Quick decision framework
| Scenario | Recommended approach |
|----------|---------------------|
| Static content | Pre-inference retrieval or hybrid |
| Dynamic exploration | Just-in-time context |
| Extended back-and-forth | Compaction |
| Iterative development | Structured note-taking |
| Complex research | Sub-agent architectures |

## ⚠️ Anti-patterns
- ❌ Cramming everything into prompts
- ❌ Brittle if-else logic
- ❌ Bloated tool sets
- ❌ Exhaustive edge cases as examples
- ❌ Assuming larger context windows solve everything
- ❌ Ignoring context pollution over long interactions

## 📒 Key takeaways
1. **Context is finite** — treat as precious resource with attention budget
2. **Think holistically** — consider entire state available to LLM
3. **Stay minimal** — more context isn't always better
4. **Be iterative** — context curation happens each turn
5. **Design for autonomy** — as models improve, let them act intelligently
6. **Start simple** — test minimal setup, add based on failure modes

> Even as models improve, the challenge of maintaining coherence across extended interactions will remain central to building more effective agents.

## 🔗 Related concepts
- [[Progressive Disclosure]] — the practical pattern for just-in-time context
- [[Harness Engineering]] — the practical implementation of context engineering
- [[Agent Skills]] — dynamically loaded instruction packages
- [[Token Optimization for Claude Code]] — tools that reduce context spend 40–98%
- **Context window management** — knowing what fits and what to prioritize

## 📖 Further reading
[[Agentic Coding]]
[[LLM Knowledge Bases]]
[[Claude Code]]
[[Claude Code Best Practice]]
[[Skills 2.0 Testing]]
[[Software 3.0]]
[[Agentic Engineering]]

Source: Anthropic, *Effective context engineering for AI agents* (September 2025).

---
Template: [[templates/knowledge_note_info]]
