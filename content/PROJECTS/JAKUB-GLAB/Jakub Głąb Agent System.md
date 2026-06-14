---
title: "Jakub Głąb Agent System"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["project", "plsoft", "client", "ai", "agents", "knowledge-base", "claude-code"]
type: basic-note
agent-created: true
summary: "PLSoft client engagement — a personal agent system for a fintech executive: Claude Code plugin (skills) + a Markdown entity-wiki knowledge base for document Q&A, LinkedIn ghostwriting, and web research"
---
# Jakub Głąb Agent System

## 🗒️ Description
A [[PLSoft]] engagement: a personal AI agent system built for an executive at a fintech software company. It lets him self-serve over a private knowledge base of company documents, generate LinkedIn posts in his own voice, and run business research — without integrating into the corporate M365 estate. A clean, forkable template for "an agent for one knowledge worker."

## 🧩 Capabilities (4 core skills)
- **`/ingest`** — classifies dropped documents (offer / case / deck / contract / notes), proposes new entity types (max one per run), writes `.meta.md` sidecars and updates the entity wiki + catalog.
- **`/document-qa`** — answers questions over the base from the catalog first, lazily ingesting uncatalogued folders, citing source files.
- **`/linkedin-post`** — drafts posts from a tone-of-voice guide, company profile, named entities, and the last 10 published posts.
- **`/research`** — web research via a provider chain ([[Firecrawl]] → WebSearch → future enrichment APIs), updating entity pages with findings.

## Technology

### Stack
- **Agent runtime**: [[Claude Code]] (plugin = Markdown skills + `plugin.json`), run in VS Code; client prefers Claude Desktop simplicity.
- **Knowledge base**: a shared cloud-drive folder (Google Drive in phase 1, OneDrive planned) — all Markdown + native Office files, no database.
- **Versioning**: [[Git]] + GitHub (private plugin repo + vault repo).
- **Models**: started on Opus, moved primary work to Sonnet for cost; Opus kept for heavy reasoning. The provider chain lets you swap models per-skill without refactoring.
- **Research providers**: [[Firecrawl]] (with WebSearch fallback) + [[Perplexity]] for cited answers; LinkedIn deliberately blocked in phase 1 for compliance. [[Bright Data]] / [[Clay]] / [[People Data Labs]] scoped for later.
- **Doc generation**: Node `docx`. One whitelisted MCP server (Asana) for tasks.

## ⚙️ Architecture know-how (reusable)
- **Two clean layers**: a *plugin layer* (portable skills, auto-updating) and a *knowledge-base layer* (entity wiki + metadata sidecars + context files). The same skills work over any client's vault.
- **Entity wiki over folder-scanning.** Agents read indexes only — `_index.md`, `_entities/_index.md`, a company profile, and `_catalog.md` — never the raw folder tree. Three file types: `*.meta.md` (one-line summary sidecar per Office doc), `_entities/**/*.md` (aggregated knowledge per concept), and the catalogs (navigation entry points). This is the same progressive-disclosure pattern this very vault uses.
- **Token-efficient by construction.** Sidecars + entity pages answer ~95% of queries without opening native Office files; per-skill context loading means LinkedIn work loads the tone guide, research loads the watchlist, and nothing loads everything.
- **Dynamic, guard-railed taxonomy.** `/ingest` proposes at most one new entity type per session (user-confirmed) and uses fuzzy matching to prevent duplicate entities.
- **Compliance-first scoping.** LinkedIn scraping and Outlook/Teams automation were deliberately left out of phase 1; cloud-only storage avoids entangling the client's regulated infrastructure.
- **The hard part is UX, not the agent.** A CLI/IDE-first design collided with an executive's expectation of "click and chat" — the lesson is to match the delivery surface to the user, not just the capability.

## 🔗 Links
- [[PLSoft]] — the consulting practice running this engagement
- [[Agentic Systems]] — shared skills + context architecture
- [[Agent Skills]] · [[Claude Code]] · [[Progressive Disclosure]]
- [[Token Optimization for Claude Code]] · [[Building Claude Skills Guide]]
- [[Firecrawl]] · [[Perplexity]] · [[Bright Data]] · [[Clay]] · [[People Data Labs]] — research/enrichment tooling
- [[Ops, Collaboration, Analytics & Community SaaS]] (Google Workspace, Asana)
