---
title: "OpenWiki"
date: 2026-07-05
enableToc: true
openToc: true
tags: ["tool", "ai", "documentation", "coding-agents", "agents", "cli", "knowledge-base", "open-source"]
type: tool
source: "_raw/processed/2026-07-05_langchain-aiopenwiki OpenWiki is a CLI that writes and maintains agent documentation for your codebase.md"
agent-created: true
summary: "langchain-ai/openwiki — a CLI that writes and maintains agent documentation for your codebase; appends a reference block to AGENTS.md/CLAUDE.md and ships a GitHub Action that opens a daily doc-update PR"
---
# OpenWiki
**langchain-ai/openwiki** — an open-source CLI that writes and maintains documentation for your codebase, **built specifically for agents**. It generates a wiki under `openwiki/`, keeps it current as the repo changes, and wires your coding agent to consult it. Where [[OpenKB]] compiles *arbitrary documents* into a personal wiki, OpenWiki is narrowed to one job: keep an always-current **agent-facing map of the code**. That makes it the packaged, LLM-driven counterpart of the hand-written [[DOX — Self-Documenting AGENTS.md|DOX]] doc tree.

## Links
### Description
- **Generate.** `openwiki` creates initial documentation in `openwiki/` when no wiki exists. If `openwiki/` already exists, it refreshes that documentation from repository changes (`openwiki --update`).
- **Agent wiring.** OpenWiki automatically appends prompting to your `AGENTS.md` and/or `CLAUDE.md`, instructing your coding agent to reference the wiki when searching for context. If neither file exists, it creates one. This is the same mechanism the [[DOX — Self-Documenting AGENTS.md|DOX]] tree relies on — the agent's always-in-context entry file points it at the doc layer.
- **Stay fresh via CI.** A shipped GitHub Action ([`openwiki-update.yml`](https://github.com/langchain-ai/openwiki/blob/main/examples/openwiki-update.yml)) opens a PR **once a day** with documentation updates. Drop it into `.github/workflows/` to keep docs from rotting — the perennial reason agent docs are worthless.
- **Interactive by default.** The CLI stays open after each run for follow-up messages; `-p` / `--print` does a one-shot non-interactive run that prints the final assistant output.

### Download or use
- `npm install -g openwiki`
- GitHub: https://github.com/langchain-ai/openwiki
- Commands:
  - `openwiki --init` — configure inference provider, API key, model
  - `openwiki` — interactive CLI (stays open)
  - `openwiki "Please generate documentation for this repository"` — start with an initial request
  - `openwiki -p "Summarize what you can do"` — single command, non-interactive, exits
  - `openwiki --update` — refresh existing docs
  - `openwiki --help`
- Config & secrets saved to `~/.openwiki/.env`. Optional **LangSmith** API key traces runs to a project named `openwiki`.

## Reasoning for
This vault runs the [[LLM Knowledge Bases|Karpathy LLM-wiki pattern]] by hand for *knowledge*; OpenWiki applies the same compile-once-keep-current idea to *code*, aimed at agents rather than humans. Worth tracking as the LangChain-backed entry in the crowded "keep the agent's context map current" space — the automated cousin of [[DOX — Self-Documenting AGENTS.md|DOX]] and a complement to [[OpenSpec]] (see the two-axes framing below). The daily-PR GitHub Action is the notable design choice: it treats doc drift as a CI problem, not a discipline problem — relevant to [[Brain]]'s own index-maintenance protocol and to [[Harness Engineering]].

## 🔀 Where it sits — DOX vs OpenSpec vs OpenWiki
Three tools attack the same enemy (poor agent **context awareness**) from different angles:
- **[[DOX — Self-Documenting AGENTS.md|DOX]] = space, by hand.** A tree of `AGENTS.md` files the agent writes and updates inline as it edits — tightly coupled to the code, one doc per folder.
- **[[OpenSpec]] = time.** Versioned change contracts describing *what to build and why* before writing code; deliberately no backfill.
- **OpenWiki = space, automated.** A separate `openwiki/` wiki an LLM regenerates from repo diffs on a schedule, then points the agent at via `AGENTS.md`/`CLAUDE.md`. Less tightly coupled than DOX (a generated wiki, not per-folder inline docs), but self-maintaining without developer discipline. See [[Spec-Driven + Self-Documenting]] for the space/time synthesis.

## Customizing
Supports **OpenRouter, Fireworks, Baseten, OpenAI and Anthropic** out of the box. A few models are pre-defined (**GLM 5.2, Kimi K2.6, Sonnet 5**, etc.), and each provider accepts a custom model ID. PRs welcome for new providers/models.

## Alternatives considered
- [[OpenKB]] (VectifyAI) — compiles *any* documents into a persistent, [[Open Knowledge Format (OKF)|OKF]]-compliant Obsidian wiki with vectorless [[PageIndex]] retrieval; broader input, not code-specific.
- [[DOX — Self-Documenting AGENTS.md|DOX]] — zero-dependency per-folder `AGENTS.md` tree, maintained inline by the agent; no separate wiki, no CI, no LLM pipeline of its own.
- [[LLM Knowledge Bases|Karpathy's manual workflow]] — the hand-driven origin of the compile-to-wiki idea.

## Resources
- Repo: [langchain-ai/openwiki](https://github.com/langchain-ai/openwiki)
- GitHub Action example: [openwiki-update.yml](https://github.com/langchain-ai/openwiki/blob/main/examples/openwiki-update.yml)
- [[LLM Knowledge Bases]] — the compile-once-keep-current pattern this generalizes
- [[DOX — Self-Documenting AGENTS.md]] — the hand-written per-folder counterpart
- [[Spec-Driven + Self-Documenting]] — the two-axes (space/time) context-engineering synthesis
- [[Context Engineering]] · [[Progressive Disclosure]] · [[Harness Engineering]]

---
Template: [[templates/tool]]
