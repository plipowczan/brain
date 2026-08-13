---
title: "Progressive Disclosure"
date: 2026-04-30
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "context-engineering", "progressive-disclosure", "agents", "memory"]
type: knowledge-note
source: "_raw/inbox/progressive-disclosure.md"
agent-created: true
agent-reviewed: 2026-08-12
summary: "Index-first context priming — show what exists and retrieval cost, let the agent decide what to fetch"
---

# Progressive Disclosure

## 🚀 Core principle
**Show what exists and its retrieval cost first. Let the agent decide what to fetch based on relevance and need.**

Information architecture pattern that reveals complexity gradually instead of all at once. The default approach for [[Context Engineering]] in agent systems.

## 🎨 The pattern at a glance

![[Progressive Disclosure.png]]

The same 100k context window drawn twice at the same scale — flooded on the left, a hairline on the right — with the three-layer funnel as the mechanism between them, a real Layer-1 index below, and the same shape applied across four domains at the bottom.

Editable source: `Progressive Disclosure.excalidraw` (sibling file), built with the `excalidraw-diagram` skill. Re-render after editing:

```bash
cd .claude/skills/excalidraw-diagram/references
uv run python render_excalidraw.py "content/AI/KNOWLEDGE/INFO/Progressive Disclosure.excalidraw"
```

On `PLSOFT-PCD1` that `uv run` fails with `An Application Control policy has blocked this file (os error 4551)` — Smart App Control blocks the uv-managed interpreter, the same class of gotcha as in [[Running Browser Use on Windows via Edge CDP]]. Workaround: build the venv from the signed python.org install (`%LOCALAPPDATA%\Programs\Python\Python313\python.exe -m venv …`), `pip install playwright`, `python -m playwright install chromium`, then call `render_excalidraw.py` with that interpreter.

## 🗒️ The three layers
1. **Layer 1 — Index** — lightweight metadata: titles, dates, types, token counts
2. **Layer 2 — Details** — fetch full content only when relevant
3. **Layer 3 — Deep dive** — read original source files if required

Mirrors human cognition: scan headlines before articles, TOC before chapters, filenames before opening files.

## ☘️ The problem: context pollution
Traditional RAG dumps everything upfront:
- 35k tokens of past sessions, observations, summaries
- Maybe 2k actually relevant — 6% efficiency
- Wastes attention budget; user prompt buried under history

Progressive disclosure inverts it:
- ~800 tokens of index → agent scans → fetches ~200 tokens on demand
- 100% relevance, 99k tokens free for the actual task

## 🧩 The index format
Compact tabular index showing **what exists, when, type, retrieval cost**:

```
| ID    | Time     | T  | Title                                    | Tokens |
|-------|----------|----|------------------------------------------|--------|
| #2543 | 2:14 PM  | 🔴 | Hook timeout: 60s too short for npm     | ~155   |
| #2587 | 12:58 AM | 🔵 | Context hook script file is empty       | ~46    |
| #2592 | 1:16 AM  | ⚖️ | Web UI strategy redesigned              | ~193   |
```

Grouped by **date** (temporal context), **file path** (spatial context), and **project** (logical context).

### Legend system
Emoji icons signal observation type — visual scanning, language-agnostic, token-efficient:
- 🎯 session-request — user's original goal
- 🔴 gotcha — critical edge case or pitfall
- 🟡 problem-solution — bug fix or workaround
- 🔵 how-it-works — technical explanation
- 🟢 what-changed — code/architecture change
- 🟣 discovery — learning or insight
- 🟠 why-it-exists — design rationale
- 🟤 decision — architecture decision
- ⚖️ trade-off — deliberate compromise

## 🎨 Mental model: context as currency
| Approach | Metaphor | Outcome |
|----------|----------|---------|
| **Dump everything** | Spending whole paycheck on speculative groceries | Waste, can't afford what's needed |
| **Fetch nothing** | Refusing to spend any money | Starvation, can't accomplish tasks |
| **Progressive disclosure** | Check pantry, list what's needed, buy that | Efficiency, room for surprises |

## Implementation principles
1. **Make costs visible** — every index row shows token count so the agent makes informed ROI decisions
2. **Use semantic compression** — good titles compress observations into ~10 actionable words. *"Hook timeout: 60s too short for npm install"* not *"Observation about a thing"*
3. **Group by context** — date / file path / project — spatial locality reduces scanning
4. **Provide retrieval tools** — index without `search` / `timeline` / `get_observations` is useless

## The 3-layer workflow (Claude-Mem)
- **Layer 1 — search** — `search({ query: "hook timeout", limit: 10 })` → returns IDs (~50–100 tokens each)
- **Layer 2 — timeline** — `timeline({ anchor: 2543, depth_before: 3, depth_after: 3 })` → narrative arc around an observation
- **Layer 3 — get_observations** — `get_observations({ ids: [2543, 2102] })` → full details for selected IDs

## Cognitive load theory
- **Intrinsic load** — inherent task difficulty (unavoidable)
- **Extraneous load** — burden of poorly-presented information. Traditional RAG adds this. Progressive disclosure minimizes it.
- **Germane load** — building mental models. Consistent structure (legend, grouping, semantic titles) supports it.

## ⚠️ Anti-patterns
- ❌ **Verbose titles** — *"Investigation into the issue where hooks time out"* vs *"Hook timeout: 60s too short for npm install"*
- ❌ **Hiding costs** — index without token counts forces the agent to guess
- ❌ **No retrieval path** — index with no MCP search tools is dead weight
- ❌ **Skipping the index layer** — fetching IDs `[1..10]` blind instead of searching first

## Measuring success
- ✅ **Low waste ratio** — relevant tokens / total context > 80%
- ✅ **Selective fetching** — index of 50, agent fetches 2–3
- ✅ **Fast time-to-relevant** — 30s with index vs 90s scanning everything
- ✅ **Appropriate depth** — depth scales with task complexity

## 📒 Key takeaways
1. **Show, don't tell** — index reveals what exists without forcing consumption
2. **Cost-conscious** — visible retrieval costs enable informed decisions
3. **Agent autonomy** — the agent knows current context better than you do
4. **Semantic compression** — good titles make or break the system
5. **Consistent structure** — patterns reduce cognitive load
6. **Two-tier everything** — index first, details on-demand
7. **Context as currency** — spend wisely on high-value information

> The best interface is one that disappears when not needed, and appears exactly when it is.

## 🔗 Related concepts
- [[Context Engineering]] — the broader discipline; progressive disclosure is its core retrieval pattern
- [[Harness Engineering]] — wiring up retrieval tools and indexes in practice
- [[Agent Skills]] — skills are themselves a progressive-disclosure mechanism (load on demand)
- [[LLM Knowledge Bases]] — Obsidian vault here uses index-first navigation (`vault-map.md` → `catalog.md` → notes)
- [[Token Optimization for Claude Code]] — tools that operationalize this pattern
- [[Graphify]] — knowledge-graph index over arbitrary content
- [[Codebase Memory MCP]] — the pattern applied to source code: one graph query (~3.4k tokens) replaces file-by-file grep (~412k tokens), a 99.2% cut
- [[Structural Retrieval for Code]] — the code-retrieval lanes (LSP / graph / grep) that operationalize index-first over source
- [[SkillWeaver — Compositional Skill Routing]] — the pattern applied to tool/skill selection: retrieve a shortlist per sub-task instead of loading the whole MCP library (~884k → ~1.2k tokens/query)
- [[Open Knowledge Format (OKF)]] — a knowledge-format spec whose `index.md` files implement this pattern
- [[HOMER — Structured Agent Memory]] — same organize-then-retrieve principle applied to long-horizon agent memory
- [[DOX — Self-Documenting AGENTS.md]] — this exact pattern applied to a codebase: hierarchical AGENTS.md tree the agent navigates to the minimal edit

## 📖 Further reading
[[Claude Code]]
[[Claude Code Best Practice]]
[[Brain]]
- Cognitive Load Theory (Sweller, 1988)
- Information Foraging Theory (Pirolli & Card, 1999)
- Progressive Disclosure (Nielsen Norman Group)

Source: Claude-Mem documentation, *Progressive Disclosure: Claude-Mem's Context Priming Philosophy*.

---
Template: [[templates/knowledge_note_info]]
