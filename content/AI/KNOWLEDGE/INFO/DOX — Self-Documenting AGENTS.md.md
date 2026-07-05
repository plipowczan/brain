---
title: "DOX — Self-Documenting AGENTS.md"
date: 2026-07-05
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "agents", "context-engineering", "progressive-disclosure", "coding-agents", "documentation", "codex"]
type: knowledge-note
source: "_raw/processed/2026-07-05_yt-NVkRkioBXQc_one-markdown-file-just-fixed-ai-coding-forever.md"
source_clipping: "_raw/processed/2026-07-05_agent0ai-dox_README.md"
source_repo: "https://github.com/agent0ai/dox"
source_url: "https://www.youtube.com/watch?v=NVkRkioBXQc"
video_id: "NVkRkioBXQc"
channel: "Agent Zero"
duration: "19m08s"
published: 2026-06-08
transcription: captions
agent-created: true
summary: "DOX (agent0ai/dox) — a self-documenting AGENTS.md framework: one AGENTS.md per folder, hierarchical child-doc indexes, read-before-edit / update-after-edit. Give the agent the minimum context for a minimal edit."
---

# DOX — Self-Documenting AGENTS.md

## 🗒️ Description

**DOX** (the [`agent0ai/dox`](https://github.com/agent0ai/dox) repo) — a **self-documenting `AGENTS.md` framework** by **Yan**, developer of [[Agent Zero]] and [[Space Agent]]. It is a single markdown instruction you paste into your existing `AGENTS.md`: no installation, no dependencies, no package, no runtime — just Markdown. Compatible with any agent that reads `AGENTS.md` (Codex, [[Claude Code]], OpenCode, and similar; demoed here with **Codex**).

> Traverse the docs, understand the local rules, make precise edits, keep the docs current. Less guessing. Less drift. Less "why did it touch that file?"

The claim behind the clickbait title ("one markdown file fixed AI coding forever"): the framework turns your repo into a tree of `AGENTS.md` files that mirror the folder structure, so the agent always walks the shortest documented path to the code it must change — and updates that documentation as it goes.

This is the same principle this vault runs on — [[Progressive Disclosure]] index-first navigation — applied to a **codebase** instead of a knowledge base. Structurally identical to the vault-map → catalog → note protocol in [[Brain]].

## 🚀 The main message

> The problem is not intelligence, it's **context awareness**. The LLM is already smart enough. It fails on large codebases because it can't see behind the corner — it doesn't know the full context.

And the fix is not more tokens:

> The question is not *how do we give it more context* — it's *how do we give it exactly the right amount*. Minimum context required to make the minimal edit. Not more, not less.

The failure mode this targets: the agent does the task but in the wrong place, breaks conventions, duplicates functionality, spawns a new helper module instead of a one-line addition to an existing function — the codebase bloats, and every fix breaks something else.

## 🧩 How it works

- **One `AGENTS.md` per folder.** Every subfolder in the repo (except temp/garbage) gets its own `AGENTS.md`, responsible for a single domain. Each documents: purpose, ownership, local contracts/rules, work guidance, how to test & verify.
- **Child docs index.** Each `AGENTS.md` ends with an index linking to the `AGENTS.md` files of its child folders → a navigable tree, root to leaf.
- **The top-level `AGENTS.md` is always in context** (system prompt), so the agent always has an entry point into the tree.
- **Read before edit, update after edit.** The pasted block adds this responsibility: crawl the doc hierarchy down to the target *before* editing, then update the relevant docs *after* editing — keeping documentation in sync with the actual code.
- **Changes propagate up.** Concept-level changes (coding practices, styling, conventions) get written into *parent* `AGENTS.md` files, so they apply to everything below them in the tree.
- **Cross-branch links.** Shared functionality (e.g. `helpers`) living in a different branch can still be manually linked in a docs index, so the agent finds it without scanning siblings.

## ☘️ Why the tree works

The markdown files are a **map / preview of the whole codebase**. The agent navigates the map and only touches actual code at the leaf where the edit lands. On the way down it sees **only the docs on the path to the target** — parent instructions compound top-to-bottom (high-level "where to put things / how to organize" near the root, specific function names near the leaves), and it never loads sibling folders unless they're explicitly linked as relevant.

Result: the context window fills with exactly the relevant chain and nothing else. Same math as [[HOMER — Structured Agent Memory]] — logarithmic navigation over a hierarchy instead of linear scan / retrieval over a flat pile.

## 🛠️ How to adopt it

1. Copy the contents of [`AGENTS.md`](https://github.com/agent0ai/dox/blob/main/AGENTS.md?plain=1) from the `agent0ai/dox` repo into your project's `AGENTS.md` (or create one in the repo root). Non-destructive — it only adds the documentation responsibility, leaving existing instructions intact. No `AGENTS.md` yet? The agent sees the instructions and starts building the DOX tree itself.
2. For an existing project, tell the agent: **`Initialize DOX tree for this project now.`** It reads through the codebase (~5 min on a small repo) and creates all the child `AGENTS.md` files and indexes, linking them into the tree.
3. **Customize per folder.** Tell the agent, e.g., "document every Python file in `screens/` individually" — it writes that rule into *that folder's* `AGENTS.md`, so it applies only there. Good for flat folders like a 100-script `helpers/` that isn't split into subfolders.
4. In [[Agent Zero]] / [[Space Agent]] you can drop it into project instructions, add it as an `AGENTS.md` in the project, or just tell the agent to clone `agent0ai/dox` into the workspace.

**Demo:** told Codex to change the plugins screen background to red — the agent re-read the doc chain top-down (important: it re-reads because docs may have changed), found the right screen-scoped style file, made the edit, updated the markdown docs, and verified syntax. Note: only ~41 GitHub stars at recording — very fresh, unproven at scale.

## ✍️ Takeaways

- **Minimum context, minimal edit** — the whole design goal. Right-size context, don't maximize it. ([[Context Engineering]], [[Token Optimization for Claude Code]])
- **Tightly couple docs to code** — not a detached wiki; one doc per folder, versioned with the code it describes.
- **The doc tree is a self-maintaining map** — read-before / update-after keeps it from rotting, which is the usual reason docs are worthless to agents.
- **This is progressive disclosure for codebases** — the exact pattern behind this vault's own navigation protocol and behind [[HOMER — Structured Agent Memory]] / [[Open Knowledge Format (OKF)]].
- **Cross-harness** — plain `AGENTS.md`, so it works in Codex, Claude Code, Cursor, etc., not tied to Agent Zero.

## 📖 Further reading / watching

- Source video: [One markdown file just fixed AI coding forever.](https://www.youtube.com/watch?v=NVkRkioBXQc) — Agent Zero, 19:08
- Repo: [`agent0ai/dox`](https://github.com/agent0ai/dox) — the DOX framework (README ingested alongside the video)
- [[Agent Zero]] — the framework whose developer built this
- [[Space Agent]] — the fully AI-coded project where the pattern originated
- [[Progressive Disclosure]] — index-first context priming, the core principle here
- [[HOMER — Structured Agent Memory]] — same organize-then-navigate hierarchy, for agent memory
- [[Context Engineering]] — right-sizing the attention budget
- [[Harness Engineering]] — where an `AGENTS.md` doc layer lives in the agent runtime
- [[Open Knowledge Format (OKF)]] — markdown-per-node knowledge representation for agents
- [[LLM Knowledge Bases]] — the same tightly-coupled-markdown idea for personal knowledge
- [[Agentic Coding]] — designing the agent's environment instead of writing code

---
Template: [[templates/knowledge_note_info]]
