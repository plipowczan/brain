---
title: "Spec-Driven + Self-Documenting"
date: 2026-07-05
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "context-engineering", "coding-agents", "specs", "sdd", "documentation", "progressive-disclosure"]
type: compiled-note
agent-created: true
summary: "Two axes of agent context engineering: OpenSpec (spec-driven, time — versioned change contracts) and DOX (self-documenting, space — a map of existing code). Complementary, not divergent."
---

# Spec-Driven + Self-Documenting

## 🗒️ Description

Two frameworks keep coming up as if they compete: [[OpenSpec]] (spec-driven development) and [[DOX — Self-Documenting AGENTS.md]] (a self-documenting `AGENTS.md` tree). They don't compete. They attack the **same enemy on two different axes** and slot together cleanly.

The shared enemy: **poor agent context awareness**. As the DOX author puts it — *the problem is not intelligence, it's context awareness; the LLM is already smart enough, it fails on large codebases because it can't see behind the corner.* [[OpenSpec]] frames the same failure as **context rot** — the agent loses earlier decisions as the chat history grows.

Both answer with the same principle from [[Context Engineering]]: not *more* context — the *right* context. Where they differ is **which** context they persist.

## 🧭 The two axes

| | **OpenSpec** (spec-driven) | **DOX** (self-documenting) |
|--|--|--|
| Axis | **Time** — a change over the project's life | **Space** — the structure of the code right now |
| Question answered | *What* to build and *why* | *Where* to edit and by which conventions |
| Artifact | `openspec/specs/` + `changes/<id>/` deltas | one `AGENTS.md` per folder, in a tree |
| Coverage | only capabilities you've deliberately specified | the **whole** existing codebase |
| Brownfield bootstrap | deliberately **no** backfill (lazy) | deliberately **yes** (`Initialize DOX tree`) |
| Lifecycle | write delta → apply → archive merges into `specs/` | read-before-edit → update-after-edit per leaf |
| Coupling | artifacts version-controlled, separate from code | doc sits **in** each folder, next to the code |

- **OpenSpec = time.** Its unit is a *change*. Artifacts describe what should be true after the change, versioned so intent survives across sessions and doesn't rot in chat history.
- **DOX = space.** Its unit is a *folder*. The tree of `AGENTS.md` files mirrors the directory structure, so the agent walks the shortest documented path to the code it must touch.

## ☘️ Why they are complementary, not divergent

The split is exact — and it's exactly where each one's blind spot is covered by the other.

**OpenSpec's `specs/` does not map the whole codebase.** Verified from the repo's own brownfield guide:

> *"Your `openspec/specs/` directory doesn't start full and complete. It starts nearly empty and accumulates."*

> *"Resist the urge to back-fill everything. Writing specs for code you aren't changing feels productive and usually isn't."*

So for any capability you haven't put through an OpenSpec change, `specs/` is silent — the agent has to read the **raw code** (via `/opsx:explore`) to learn what exists. That untouched-code gap is **precisely what a DOX tree fills**: DOX's `Initialize DOX tree for this project now` documents everything up front, giving the agent an always-current map of *what exists and where*.

Read the other way: DOX tells the agent where a change lands and which local conventions hold, but it doesn't carry the *contract* of a specific change — the requirements, scenarios, and rationale that OpenSpec versions in `changes/<id>/`. Each supplies what the other omits.

```
DOX AGENTS.md tree     →  "what exists, where, under which rules"   (space, all code)
OpenSpec specs/+changes →  "what this change makes true, and why"    (time, touched capabilities)
```

## 🔗 How OpenSpec actually maintains its specs

Worth spelling out, because it's the part most people get wrong (verified against `Fission-AI/OpenSpec`):

- **Two folders, two roles.** `openspec/specs/` = *source of truth* (how the system currently behaves). `openspec/changes/` = *proposals* living separately until merged. Repo: *"Specs are the source of truth… Changes are proposed modifications — they live in separate folders until you're ready to merge them."*
- **Deltas, not full rewrites.** A change writes `changes/<id>/specs/` using `## ADDED Requirements` / `## MODIFIED Requirements` / `## REMOVED Requirements`, each with `### Requirement:` (RFC 2119 — SHALL/MUST) and `#### Scenario:` in GIVEN/WHEN/THEN. *"Delta specs describe what's changing rather than restating the entire spec."*
- **Archive merges.** `/opsx:archive` applies each delta section to the matching main spec, then moves the change to `changes/archive/YYYY-MM-DD-name/`. That merge is the only moment `specs/` changes — so a later change reads the truth already updated by earlier ones. This is the [[OPSX Workflow]] DAG (`proposal → specs/design → tasks`) with *filesystem as state*.

The key correction to the common mental model: **you do not initialize a baseline spec of the whole project.** `openspec init` scaffolds empty `specs/`/`changes/` plus commands, nothing more. Specs grow one change at a time. If you genuinely want a stable contract for a hot area, make *one* targeted "document current behavior" change (`## ADDED Requirements` describing today's behavior) and archive it — never the whole repo. For the whole-repo map, that's DOX's job, not OpenSpec's.

## 🧩 Using them together

A realistic loop on an existing project:

1. **DOX first** — `Initialize DOX tree`. Now the agent has a navigable map of all folders, purposes, and conventions. Solves the "empty `specs/` → agent doesn't know what's there" problem for untouched code.
2. **OpenSpec per change** — `/opsx:explore` (agent reads the relevant area, guided by the DOX docs) → `/opsx:new` writes the delta → `/opsx:apply` implements → `/opsx:archive` merges into `specs/`.
3. **DOX update-after-edit** — the same edit updates the leaf `AGENTS.md`, keeping the space-map current.

Net: the DOX tree keeps *where/what-exists* fresh; OpenSpec keeps *what-changed/why* versioned. Both are [[Progressive Disclosure]] — logarithmic navigation over a hierarchy instead of dumping everything into the window — applied to two different dimensions of the same problem. Same math as [[HOMER — Structured Agent Memory]] and the index-first protocol this vault ([[Brain]]) runs on.

## ✍️ Takeaways

- **Not either/or.** Spec-driven and self-documenting are orthogonal — time vs space — and strongest combined.
- **`specs/` is not a codebase map.** By design it only covers specified capabilities; don't backfill. Use DOX for the full-code map.
- **The agent reads code, not specs, for untouched areas.** `/opsx:explore` over raw code (or over the DOX tree) is where current-state awareness comes from — not an auto-generated spec dump.
- **Both are progressive disclosure.** Right-size context from opposite ends; see [[Context Engineering]] and [[Token Optimization for Claude Code]].

## 📖 Further reading

- [[OpenSpec]] — the spec-driven tool (time axis) and its brownfield/no-backfill rule
- [[OPSX Workflow]] — the artifact DAG, delta format, archive/merge mechanics
- [[Specification-Driven Development]] — the SDD methodology OpenSpec formalizes
- [[DOX — Self-Documenting AGENTS.md]] — the self-documenting `AGENTS.md` tree (space axis)
- [[Progressive Disclosure]] — the shared underlying principle
- [[Context Engineering]] — right-sizing the attention budget
- [[HOMER — Structured Agent Memory]] — organize-then-navigate hierarchy for agent memory
- [[Agentic Coding]] — designing the agent's environment instead of writing code

---
Template: [[templates/knowledge_note_info]]
