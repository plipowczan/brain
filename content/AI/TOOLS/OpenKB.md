---
title: "OpenKB"
date: 2026-06-24
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "knowledge-base", "rag", "obsidian", "open-source", "apache-2.0"]
type: tool
source: "_raw/processed/2026-06-24_VectifyAIOpenKB OpenKB Open LLM Knowledge Base.md"
agent-created: true
summary: "VectifyAI's CLI that compiles raw docs into an interlinked Obsidian-compatible wiki via LLMs — vectorless PageIndex retrieval, no vector DB, Skill Factory"
status-checked: 2026-11-13
project-status: slowing
---
# OpenKB

> [!warning] Status check 2026-11-13 — slowing
> **Verdict:** The last commit on main is 2026-07-22 (114 days ago) and the last stable release, 0.4.5, is from 2026-07-20 (a hotfix pinning openai==2.44.0).
> **Last release:** v0.4.5 (2026-07-20), GitHub release and PyPI openkb 0.4.5… · **last commit:** 2026-07-22 · **licence:** Apache-2.0
> **Repo:** https://github.com/VectifyAI/OpenKB
> **Use instead:** No official successor. The closest alive alternative for a compiled personal wiki is langchain-ai [[OpenWiki]] in `personal` mode: Deep Agents, nine connectors, OKF v0.2 output, weekly releases.
> **Changed since this note:** Releases v0.4.2-v0.4.5 (2026-06-27 to 2026-07-20) added: the Knowledge Workbench web UI matured (`pip install "openkb[web]"`, `openkb-web`, default port 7566, delete KB/edit wiki pages, a source-text reader, configurable entity types); an `openkb deck new` single-file HTML slide generator…

**Open LLM Knowledge Base** — an open-source CLI (VectifyAI) that compiles raw documents into a structured, interlinked **wiki-style knowledge base** using LLMs. It is a direct, packaged implementation of the [[LLM Knowledge Bases|Karpathy LLM Wiki pattern]]: instead of re-deriving knowledge on every query (traditional RAG), it compiles knowledge *once* into a persistent wiki and keeps it current. Apache-2.0.

This is the same architecture this vault runs by hand — a relevant reference for [[Brain]] and [[Building an AI Second Brain]].

## Links
### Description
Two layers:
- **Wiki foundation** — compiles and maintains the knowledge. On `add`, the LLM generates a summary page, reads existing concept/entity pages, synthesizes cross-document concepts, creates/updates **entity pages** (people, orgs, places, products — auto-extracted, kept in sync), and updates the index + log. One source can touch 10–15 wiki pages; knowledge accumulates rather than sitting isolated.
- **Generators** — turn the wiki into output: `query`/`chat` (grounded, cited answers), `visualize` (self-contained 3D/mind-map/radial knowledge graph HTML), and the **Skill Factory**.

Retrieval is **vectorless** — powered by [[PageIndex]], which builds a hierarchical tree index over long PDFs (≥20 pages) and lets the LLM *reason* over the tree instead of chunk-and-embed. No vector DB. Short docs are read in full via markitdown.

Wiki pages follow Google's **[[Open Knowledge Format (OKF)|Open Knowledge Format]]** spec and are plain `.md` with `[[wikilinks]]` — **opens directly in Obsidian** for graph view.

### Download or use
- `pip install openkb`
- GitHub: https://github.com/VectifyAI/OpenKB
- Site: https://openkb.ai/
- Multi-provider via [LiteLLM](https://github.com/BerriAI/litellm) — set `provider/model` (e.g. `anthropic/claude-sonnet-4-6`, `gpt-5.4`, `gemini/gemini-3.1-pro-preview`) in `.openkb/config.yaml`.

## Reasoning for
This vault is a hand-built version of exactly what OpenKB automates: a compiled, cross-linked wiki maintained by an LLM agent (CLAUDE.md schema, progressive-disclosure indexes, entity-style notes). OpenKB is the closest packaged tool — worth tracking for (a) its **vectorless PageIndex** retrieval as an alternative to embedding-based [[Graphify]]/[[LightRAG]]/[[CocoIndex]], (b) the **Skill Factory** (`openkb skill new`) which distills redistributable [[Agent Skills]] from the wiki, mirroring the skills this repo ships, and (c) its OKF compliance.

## 🧩 Skill Factory
`openkb skill new <name> "<intent>"` distills an installable [agent skill](https://docs.claude.com/en/docs/build-with-claude/skills) from any subset of the wiki — a SKILL.md + `references/` + optional `scripts/`, plus an auto-updated `marketplace.json` for one-line install. Quality gates: structural `validate`, trigger-accuracy `eval` (does the `description:` actually fire?), and `history`/`rollback` versioning. Iterate inside `openkb chat` without re-running the pipeline.

## Alternatives considered
- **Karpathy's manual workflow** — web clipper → `.md`, LLM compiles; OpenKB adds long-doc PageIndex, automatic entity extraction, broad format support, and CLI agent integration.
- [[Graphify]] / [[LightRAG]] / [[CocoIndex]] — embedding- or graph-based RAG/indexing; OpenKB is the vectorless, persistent-wiki approach.
- [[Open Notebook]] — NotebookLM-style chat-with-sources, not a compiled wiki.
- [[OpenWiki]] — langchain-ai's code-specific counterpart: compiles a wiki of your *codebase* for agents, kept fresh by a daily-PR GitHub Action.

## Resources
- The Stack: [[PageIndex]], markitdown, OpenAI Agents SDK, LiteLLM, Click, watchdog.
- Ecosystem: [PageIndex](https://github.com/VectifyAI/PageIndex), ChatIndex, ConDB, [PageIndex MCP](https://github.com/VectifyAI/pageindex-mcp).
- Concept origin: [Karpathy on the LLM wiki pattern](https://x.com/karpathy/status/2039805659525644595) — see [[LLM Knowledge Bases]].

---
Template: [[templates/tool]]
