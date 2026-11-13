---
title: "AI Tools Map"
date: 2026-11-13
enableToc: true
openToc: true
tags: ["knowledge", "info", "compiled", "ai", "tools", "map", "agents", "coding-agents", "comparison", "index"]
type: compiled-note
source: "research deep research — content/_raw/research-workspaces/ai-tools-review-2026-11/"
agent-created: true
status-checked: 2026-11-13
summary: "All 124 AI tool notes in the vault sorted into 13 categories, one sentence each, with the status checked on 2026-11-13: what it is, whether it is still alive, what to use instead of the retired ones, and where the comparison notes go deeper."
---

# AI Tools Map

This is the front page of my AI tools notes: every tool I keep a note on, sorted by the job it does, with one sentence on what it is and whether it is still alive. Start here, find the job you have, then open the tool note or the comparison note for that category.

On **2026-11-13** I checked every tool against its repository, its releases page or its official site: the last release, the last commit, the licence, and whether it has been archived, renamed or replaced. Each tool note now carries a "Status check" box with the details and the sources behind it.

## 🚀 How to read the status column

| Status | Meaning |
|---|---|
| active | a release or commit in the last 30 days |
| maintained | activity in the last 90 days |
| **slowing** | 90–180 days without activity |
| **stale** | more than 180 days without activity, not formally retired |
| **dead** | archived, deprecated or abandoned by its authors |
| done | finished on purpose: a static file or a completed spec, nothing left to maintain |

For closed products and APIs "active" means the product is sold and documented today, and the status column shows the latest release or dated update I could confirm. Where something could not be confirmed, the tool note says so.

## 📒 The review in numbers

- **126 tools** in **13 categories**, each checked on 2026-11-13. Two of them were archived after the review, so the map below lists **124**.
- **107 active** and **8 maintained**: most of the field moves fast, many tools ship weekly or daily.
- **3 slowing**: [[Space Agent]], [[OpenKB]], [[Santander AI Open Source]].
- **5 stale**: [[MCP Language Server]], Claude Peers MCP (archived), [[Autoresearch]], [[Meme Factory]], [[Slack GIF Creator]].
- **2 dead**: Chatterbox TTS (retired by its authors in August 2026; archived) and Magic MCP (replaced by its vendor's [[21st MCP]]; the note was rewritten to cover the successor).
- **1 done**: [[Karpathy Skills]], a static rules file that needs no maintenance.
- Notable changes my notes did not cover yet: Cursor's maker was acquired by SpaceX, Topaz Labs by Adobe, Replicate became part of Cloudflare; Graft was renamed Trail-code, Personal AI Infrastructure became LifeOS, Browser Use 1.0 rewrote the library around Browser Harness; Serena moved to GPL-3.0 and Graphify to Apache-2.0.

## 🧭 Comparison notes

Four categories have a note that compares the tools side by side, says when to pick which, and lists what none of them can do:

- [[Agent Memory and Knowledge Base Tools Compared]]: LightRAG, Graphify, PageIndex, OpenKB, OpenWiki, Super Brain, Codebase Memory MCP, CocoIndex, HOMER
- [[Browser Tools for AI Agents Compared]]: Browser Use, Browser Harness, Playwright MCP, Chrome DevTools MCP, Claude in Chrome, Camofox, CloakBrowser
- [[Claude Code Skill Packs Compared]]: Superpowers, Matt Pocock Skills, Karpathy Skills, Everything Claude Code, gstack, Agent Skills, the awesome lists
- [[Document Parsing and OCR Tools Compared]]: Marker, MinerU, Unlimited-OCR, Chonkie, anydoc

## 🗺️ The map

### Coding agents & harnesses

The agent you talk to and the harness it runs in: terminal agents, IDEs, open harnesses and app builders.

| Tool | What it is | Status |
|---|---|---|
| [[Claude Code]] | Anthropic's agentic coding tool: it reads, edits and runs code in your repo from the terminal, IDE, desktop app or GitHub. | active, v2.1.323 (2026-11-12) |
| [[Cursor]] | A VS Code fork built around agents (Agents Window, cloud agents, CLI, SDK), now owned by SpaceX after the Anysphere acquisition. | active, 3.30 (changelog 2026-11-06) |
| [[GitHub Copilot]] | GitHub's assistant: completions, chat, cloud and local agents and code review, for teams whose work already lives on GitHub. | active, weekly releases (2026-11-06) |
| [[Hermes Agent]] | Nous Research's open, model-agnostic personal agent with one gateway for CLI, desktop, web and chat bots, which keeps memory and writes its own skills. | active, v0.23.1 (2026-11-10) |
| [[oh-my-pi]] | A terminal coding agent forked from Pi whose tools carry IDE-grade code intelligence: hash-anchored edits, LSP, a debugger and worktree subagents. | active, v18.20.0 (2026-11-12) |
| [[Agent Zero]] | An open agent framework that gives the model its own Linux container with terminal, browser and desktop apps, driven from a web UI. | active, v2.15 (2026-11-01) |
| [[Space Agent]] | A browser-runtime agent from the Agent Zero team that builds pages, widgets and workflows straight into its own running workspace. | **slowing**, v0.66 (2026-04-30) |
| [[DeepSeek Harness]] | DeepSeek's open agent harness where every capability is a plugin on the Cordis framework, run as web UI, desktop app, CLI or SDK. | active, v0.2.2-rc.3 (2026-11-13) |
| [[DSH Superagent]] | A proactive coding-agent bundle for DeepSeek Harness that watches a GitHub repo and turns requests into tracked work items. | active, no releases; last commit 2026-10-31 |
| [[NemoClaw]] | NVIDIA's reference stack for running agents such as OpenClaw or Hermes inside OpenShell sandboxes with managed inference. | active, v0.0.143 (2026-11-10) |
| [[Laya]] | A library, CLI and server that answers typed questions (choice, score, yes/no) about a text in one non-generative pass. | active, v0.4.31 (2026-11-10) |
| [[Lovable]] | An AI app builder: describe a web app in chat and it writes, hosts and deploys a React app with a built-in backend. | active, updated 2026-11-12 |
| [[v0]] | Vercel's AI builder that turns prompts, screenshots or a repo into React/Next.js apps with shadcn/ui and publishes them to Vercel. | active, updated 2026-11-10 |

### Orchestration, loops & multi-agent

Tools that run several agents, or one agent many times: workflow engines, control planes, scheduled loops and session managers.

| Tool | What it is | Status |
|---|---|---|
| [[Archon]] | A self-hosted engine for YAML workflows that mix agent steps, scripts and human approval gates, each run in its own git worktree. | active, v0.14.0 (2026-11-07) |
| [[AI Software Factory]] | A setup on Archon's SDLC pack where agents slice a PRD into issues, build, review and merge them, while you plan and test in staging. | active, no releases; last commit 2026-10-27 |
| [[Paperclip]] | A self-hosted control plane that runs a team of coding agents like a company: org chart, tickets, goals, budgets and approvals. | active, v2026.1106.0 (2026-11-06) |
| [[Ruflo]] | An npm harness that adds agent swarms, vector memory, learned task routing, hooks and an MCP server to Claude Code. | active, v3.77.0 (2026-11-12) |
| [[CrewAI]] | A Python framework for multi-agent work: role-based agent teams (Crews) and deterministic event-driven pipelines (Flows). | active, 1.15.41 (2026-11-12) |
| [[LangGraph]] | A low-level library for long-running, stateful agents as explicit graphs with checkpoints, human-approval interrupts and resumption. | active, 1.2.21 (2026-11-12) |
| [[Claudex Loop]] | Claude Code and Codex skills for a bounded plan, cross-review, build and inspect loop where each provider checks the other's work. | maintained, no releases; last commit 2026-10-14 |
| [[Autoharness]] | A Claude Code plugin that distils reusable skills from your real sessions, merges duplicates and retires the ones nobody loads. | active, v0.2.5 (2026-07-02) |
| [[Autoresearch]] | Karpathy's minimal setup that lets a coding agent run 5-minute GPU training experiments overnight and keep only the improvements. | **stale**, no releases; last commit 2026-03-26 |
| [[Loop Engineering (cobusgreyling)]] | A pattern library and CLIs for scheduled, state-file-driven loops that discover, hand off and verify agent work on a repo. | active, v1.6.0 (2026-07-20) |
| [[OpenRig]] | A local daemon, CLI and MCP server that runs Claude Code, Codex and Pi sessions on tmux as a named, persistent team defined in YAML. | active, v0.7.13 (2026-11-12) |
| [[herdr]] | A background terminal server with a tmux-style TUI that keeps agent terminals running and shows which are working, blocked or idle. | active, v0.9.5 (2026-10-14) |
| [[Orca]] | A desktop app (plus mobile companion) for running many CLI coding agents in parallel, each in its own worktree, with diff review. | active, v1.4.258 (2026-11-13) |
| [[Overmind]] | A platform that ingests an agent's OpenTelemetry traces, scores them per capability and turns them into evals, optimised prompts and fine-tunes. | active, v0.1.32 (2026-11-11) |

### Skill packs & curated lists

Skills, plugins and the lists that index them. Compared in [[Claude Code Skill Packs Compared]].

| Tool | What it is | Status |
|---|---|---|
| [[Agent Skills]] | The open SKILL.md format agents load on demand, now a Linux Foundation (AAIF) standard, plus Anthropic's example and Office skills. | active, no releases; last commit 2026-11-06 |
| [[Agent Skills (Addy Osmani)]] | 25 skills and 9 commands that walk a coding agent through Define, Plan, Build, Verify, Review and Ship with checklists and gates. | active, 0.6.15 (2026-10-31) |
| [[Superpowers]] | A development methodology as auto-triggered skills: brainstorm, plan, subagent-driven development with review, TDD and debugging. | active, v7.0.2 (2026-11-03) |
| [[Matt Pocock Skills]] | Small composable skills (grilling, TDD, bug diagnosis, architecture, PR writing) that sharpen your own process instead of owning it. | active, v1.3.2 (2026-10-29) |
| [[Karpathy Skills]] | One CLAUDE.md with four rules against typical LLM-coder mistakes: assumptions, overengineering, drive-by edits, weak success criteria. | done, no releases; last commit 2026-04-20 |
| [[Everything Claude Code]] | A whole harness distribution: hundreds of skills, agents, hooks, memory and the AgentShield config scanner for many agents. | active, v2.2.3 (2026-10-01) |
| [[gstack]] | Garry Tan's role skills that make Claude Code act as a product team, from CEO plan review to QA in a real browser and release. | active, v1.99.2.0 (2026-11-12) |
| [[Vercel Skills]] | The `npx skills` CLI that installs, updates and removes SKILL.md skills into the skill folders of dozens of coding agents at once. | active, v1.8.1 (2026-11-10) |
| [[Obsidian Skills]] | Official Obsidian skills that teach agents to write Obsidian Markdown, Bases and JSON Canvas and to use the Obsidian CLI. | active, 1.1.0 (2026-11-11) |
| [[Cursor Plugins]] | Cursor's official plugin spec and marketplace: bundles of skills, rules, agents, commands, hooks and MCP configs. | active, no releases; last commit 2026-11-13 |
| [[Awesome Agent Skills]] | A curated list of about 1,500 agent skills, mostly from vendors' official teams, with install paths for the major agents. | active, no releases; last commit 2026-11-05 |
| [[Awesome Claude Code]] | A hand-picked list of Claude Code resources: guides, skills, plugins, orchestrators, status lines and tooling (CC BY-NC-ND). | active, v3 relaunch 2026-07-03; commits weekly |
| [[Claude Code Best Practice]] | A reference repo that explains Claude Code primitives, collects sourced tips and compares popular agentic workflows. | active, no releases; last commit 2026-11-13 |
| [[Deep-Research-skills]] | Five skills that turn a research topic into an items-by-fields matrix filled by parallel web-search subagents, then a report. | maintained, no releases; last commit 2026-08-23 |
| [[Personal AI Infrastructure]] | Daniel Miessler's personal 'life operating system' for Claude Code (now LifeOS): goals, memory, preferences and verified workflows. | active, v8.761.0 (2026-10-27) |
| [[ASD-STE100 Skill]] | A skill with a Python linter that rewrites ambiguous English into ASD-STE100 Simplified Technical English for agents and docs. | active, no releases; last commit 2026-11-12 |
| [[Claude SEO]] | A free Claude Code plugin that runs multi-agent SEO audits (technical, content, schema, AI search) and writes the report locally. | active, v2.6.0 (2026-11-10) |
| [[UX RULER]] | An open UX and product-discovery skill that walks you or an agent from mission and audience to decisions and metrics. | active, no releases; last commit 2026-10-16 |

### Memory, knowledge bases & code intelligence

Long-term memory for agents: document RAG, compiled wikis, code graphs and vector stores. Compared in [[Agent Memory and Knowledge Base Tools Compared]].

| Tool | What it is | Status |
|---|---|---|
| [[LightRAG]] | A graph-based RAG framework and server: an LLM extracts an entity-relation graph from documents and answers over graph and vectors. | active, v1.5.7 (2026-09-02) |
| [[Graphify]] | A CLI and skill that turns a project folder (code, docs, PDFs, media) into a queryable knowledge graph with an HTML view and report. | active, v0.9.108 (2026-11-12) |
| [[PageIndex]] | Builds a table-of-contents tree over long PDFs and lets an LLM reason its way to the right pages instead of using vector search. | active, v0.5.3 (2026-11-05) |
| [[OpenKB]] | A CLI and local web UI where an LLM compiles your documents into an interlinked Markdown wiki you can query and chat with. | **slowing**, v0.4.5 (2026-07-20) |
| [[OpenWiki]] | LangChain's CLI that writes and maintains a linked Markdown wiki of a repo, or of your sources in personal mode, searchable over MCP. | active, v0.9.0 (2026-11-05) |
| [[Super Brain]] | An Obsidian-compatible vault template with Claude Code and Codex skills that runs Karpathy's LLM-wiki method. | active, no releases; last commit 2026-10-26 |
| [[Codebase Memory MCP]] | A single binary that indexes a repo into a local SQLite knowledge graph and answers structural code questions over MCP. | active, v0.12.1 (2026-10-16) |
| [[CocoIndex]] | A Python framework with a Rust core that keeps vector indexes, graphs and tables in sync with changing sources incrementally. | active, v1.2.0 (2026-11-09) |
| [[Graft]] | A CLI and MCP server (renamed Trail-code) that maps a repo with tree-sitter into markdown and keeps a shared store of team learnings. | active, 0.29.0 (2026-11-06) |
| [[Serena]] | An MCP server that gives coding agents symbol-level navigation and editing backed by real language servers or a JetBrains IDE. | active, v2.1.0 (2026-10-19) |
| [[MCP Language Server]] | A Go MCP server that wraps any stdio language server and exposes definition, references, diagnostics, hover and rename. | **stale**, v0.1.1 (2025-05-16) |
| [[Understand Anything]] | A Claude Code plugin that scans a codebase with tree-sitter and LLM agents into a JSON knowledge graph with an interactive dashboard. | active, v2.9.0 (2026-07-10) |
| [[Google Cloud Knowledge Catalog]] | Google Cloud's managed data catalog (formerly Dataplex) that builds a governed knowledge graph over an organisation's data. | active, 0.2.5 (2026-11-11) |
| [[Open Notebook]] | A self-hosted NotebookLM alternative: add PDFs, URLs, video and audio, chat with cited answers and generate podcasts. | active, v1.15.1 (2026-11-04) |
| [[NotebookLM-py]] | An unofficial library, CLI and MCP server that drives Google NotebookLM through undocumented endpoints, so agents can use it. | active, v0.8.6 (2026-10-29) |
| [[Qdrant]] | An open-source vector database in Rust with filtered, sparse and hybrid search over REST and gRPC, self-hosted or managed. | active, v1.20.0 (2026-10-22) |
| [[Archify]] | A cross-agent skill where the agent writes a typed JSON description and a renderer turns it into an interactive architecture diagram. | active, v3.2.0 (2026-10-19) |

### Token & cost optimisation, model routing

Fewer tokens per task and cheaper models per token: compression proxies, terse-output skills and LLM gateways.

| Tool | What it is | Status |
|---|---|---|
| [[Caveman]] | A token-cost toolkit for coding agents: terse replies, a local proxy that compresses what the agent reads, and cheaper-model routing. | active, 4.1.0 (2026-11-08) |
| [[Headroom]] | A library, proxy and MCP server that compresses tool outputs, logs and history before they reach the model and keeps the originals. | active, v0.44.0 (2026-11-10) |
| [[billion-context]] | A local proxy that gives the model tools to fold old conversation ranges into summaries and search them back when needed. | active, v0.1.213 (2026-11-07) |
| [[Ponytail]] | A skill that makes coding agents reuse existing code, the standard library or platform features before writing new code. | active, v5.3.3 (2026-10-29) |
| [[OmniRoute]] | A self-hosted AI gateway with one OpenAI-compatible endpoint over hundreds of providers and their free tiers, with failover. | active, v3.8.53 (2026-11-06) |
| [[LiteLLM]] | A Python SDK and self-hosted proxy that calls 100+ LLM providers in the OpenAI format, with virtual keys, budgets and fallbacks. | active, v1.109.1 (2026-11-12) |
| [[Peon Ping]] | Hooks that play a game-character voice line and show a notification when your agent finishes, fails or needs input. | active, v2.37.0 (2026-08-26) |
| [[CLI-Anything]] | A plugin that reads an application's source and generates an installable CLI with JSON output and a SKILL.md for agents. | maintained, v0.4.0 (2026-06-25) |

### Browser agents & web data

Agents that use a browser, and services that turn the web into data. Compared in [[Browser Tools for AI Agents Compared]].

| Tool | What it is | Status |
|---|---|---|
| [[Browser Use]] | A Python framework for browser agents, plus Browser Use Cloud with stealth browsers and a hosted agent API. | active, 1.0.3 (2026-11-12) |
| [[Browser Harness]] | A thin harness that lets a coding agent drive your own logged-in Chrome over CDP, writing missing helpers as it goes. | active, v0.1.13 (2026-09-04) |
| [[Playwright MCP]] | Microsoft's MCP server that drives Chromium, Firefox or WebKit through Playwright using accessibility-tree snapshots. | active, v0.0.85 (2026-11-09) |
| [[Chrome DevTools MCP]] | Google's MCP server that lets an agent control and inspect a live Chrome for automation, debugging and performance traces. | active, v1.13.0 (2026-11-11) |
| [[Claude in Chrome]] | Anthropic's extension that lets Claude read and act in your own logged-in Chrome tabs, from the side panel or Claude Code. | active, GA on all paid plans since 2026-08-26 |
| [[Camofox Browser]] | A REST and MCP browser server on the Camoufox anti-detect Firefox that returns accessibility snapshots instead of raw HTML. | active, v1.19.0 (2026-11-10) |
| [[CloakBrowser]] | A patched Chromium that hides automation fingerprints from anti-bot systems while keeping the Playwright and Puppeteer API. | active, v0.7.2 (2026-11-10) |
| [[Crawl4AI]] | An open-source crawler (library, CLI, Docker server, now also hosted) that renders pages and outputs clean Markdown or JSON. | active, v0.9.5 (2026-10-14) |
| [[Firecrawl]] | A web data API (hosted, AGPL self-host) that searches, scrapes, crawls and maps sites into Markdown or JSON for agents. | active, v2.11.0 (2026-06-19) |
| [[Bright Data]] | A commercial web-data platform: proxy networks, unblocking and SERP APIs, cloud browsers, scrapers, datasets and an MCP server. | active, updated 2026-11-10 |

### Documents & OCR

Turning files and scans into text an LLM can use, then into chunks. Compared in [[Document Parsing and OCR Tools Compared]].

| Tool | What it is | Status |
|---|---|---|
| [[Marker]] | Datalab's converter from PDF, images and office files to Markdown, JSON or chunks, on CPU or with a Surya vision model on GPU. | active, v2.2.0 (2026-11-12) |
| [[MinerU]] | OpenDataLab's document parser that turns PDFs, images and office files into Markdown and JSON, from a CPU pipeline to VLM backends. | active, 4.2.1 (2026-11-11) |
| [[Unlimited-OCR]] | Baidu's open OCR vision-language model that transcribes very long, multi-page documents in one request with near-constant memory. | active, Unlimited-OCR 2 (2026-10-27) |
| [[Chonkie]] | A small Python library that splits text and code into RAG chunks with several strategies and can embed and store them. | maintained, v1.7.0 (2026-07-07) |
| [[anydoc]] | Firecrawl's Rust converter from Word, PowerPoint, Excel, OpenDocument, EPUB and text PDFs to clean Markdown in milliseconds. | active, v0.2.4 (2026-08-27) |

### LLM app engineering

The parts of an LLM product around the model: structured output, prompt optimisation, evals, tracing, chat front ends and local runtimes. See also [[LLM App Engineering Stack]].

| Tool | What it is | Status |
|---|---|---|
| [[Instructor]] | A Python library that returns validated Pydantic objects from LLMs, with schema prompting, validation retries and streaming. | active, v1.17.0 (2026-09-09) |
| [[Outlines]] | A library that constrains a model's token sampling to a JSON schema, regex or grammar, so self-hosted models emit valid output. | maintained, 1.3.3 (2026-08-06) |
| [[DSPy]] | A framework for writing LLM pipelines as typed modules and tuning their prompts or weights automatically against your metric. | active, 3.5.0 (2026-11-10) |
| [[Promptfoo]] | A CLI that runs YAML eval suites over prompts, agents and RAG across providers and red-teams LLM apps, usually as a CI gate. | active, 0.125.1 (2026-10-25) |
| [[Langfuse]] | An open, self-hostable platform on OpenTelemetry for tracing, evaluating and monitoring LLM apps, with prompt versioning. | active, v4.79.0 (2026-11-12) |
| [[LibreChat]] | A self-hosted ChatGPT-style web app that puts many model providers behind one multi-user interface with agents and MCP tools. | active, v0.8.8 (2026-10-01) |
| [[Ollama]] | A local runtime that pulls quantised open-weight models and serves them on your machine through a CLI, app and REST API. | active, v0.40.16 (2026-11-09) |

### Model APIs & platforms

Hosted models I call directly: text, search, embeddings and images.

| Tool | What it is | Status |
|---|---|---|
| [[OpenAI]] | OpenAI's paid developer API for GPT text and reasoning models, images, speech and embeddings, with the Responses and Agents APIs. | active, updated 2026-11-05 |
| [[Google Gemini]] | Google's Gemini model API via AI Studio or Google Cloud: multimodal models with long context and a free tier. | active, updated 2026-11-12 |
| [[Perplexity]] | Perplexity's developer platform (Agent API, Search API, Embeddings) for web-grounded, cited answers and research agents. | active, updated 2026-11-11 |
| [[Replicate]] | A hosted inference platform (now part of Cloudflare) where you call thousands of open models through one API, pay per use. | active, v0.23.1 (2026-10-20) |
| [[VoyageAI]] | MongoDB's embedding and reranking API for better retrieval in RAG and semantic search, including code and multimodal models. | active, updated 2026-10-20 |
| [[BytePlus Seedream]] | ByteDance's text-to-image and image-editing models, sold through the BytePlus ModelArk API at a flat price per image. | active, updated 2026-11-09 |

### Voice & audio

Speech in and out: TTS models and platforms, voice agents and meeting transcription.

| Tool | What it is | Status |
|---|---|---|
| [[ElevenLabs]] | A cloud voice platform: expressive multilingual TTS, voice cloning, dubbing, speech to text, sound effects and voice agents. | active, updated 2026-11-09 |
| [[Pocket TTS]] | Kyutai's small open TTS model that streams speech with voice cloning on two CPU cores, no GPU needed. | active, v4.0.1 (2026-10-21) |
| [[Voicebox]] | A free local desktop voice studio that clones voices, generates speech with open engines, dictates, and speaks for agents over MCP. | maintained, v0.5.0 (2026-04-25) |
| [[VAPI]] | A developer platform for real-time phone and web voice agents that wires your choice of STT, LLM and TTS to telephony and tools. | active, updated 2026-11-09 |
| [[Tactiq]] | A browser extension and macOS app that transcribes Meet, Zoom and Teams calls without a bot and writes AI summaries. | active, extension build 3.1.7556 (2026-11-13) |

### Image, video & memes

Generating, editing and understanding images and video, plus the meme tooling for agents.

| Tool | What it is | Status |
|---|---|---|
| [[HyperFrames]] | HeyGen's open framework that renders HTML, CSS and JS animation into deterministic MP4, with skills for coding agents. | active, v0.9.41 (2026-11-13) |
| [[OpenMontage]] | YAML pipelines, tools and 'director skills' that turn a coding agent into a video production studio, from script to render. | active, no releases; last commit 2026-11-09 |
| [[Video Use]] | A skill that lets a coding agent edit a folder of raw footage into a final video by working from a word-level transcript. | maintained, no releases; last commit 2026-10-08 |
| [[Claude Video]] | The /watch skill: it downloads a video, extracts frames and a timestamped transcript, and lets the agent answer questions about it. | maintained, v0.3.2 (2026-09-25) |
| [[Topaz Labs]] | Desktop, web and API tools (now owned by Adobe) that upscale, sharpen, denoise and restore photos and video. | active, updated 2026-11-03 |
| [[Awesome Nano Banana Pro Prompts]] | A CC BY 4.0 library of 15,000+ community image prompts for Google's Nano Banana Pro, each with a preview image. | active, no releases; last commit 2026-11-13 |
| [[Memegen]] | An open-source service (memegen.link) that renders meme images from a URL with about 200 templates and no account. | active, no releases; last commit 2026-11-12 |
| [[Meme Factory]] | A skill that makes memes as memegen.link URLs and text formats; unchanged since January 2026 with known broken templates. | **stale**, no releases; last commit 2026-03-05 |
| [[OpenClaw Meme Maker]] | An OpenClaw skill, usable in Claude Code too, that picks a template and renders a captioned meme locally as SVG or PNG. | active, ships in OpenClaw v2026.11.3 (2026-11-10) |
| [[Slack GIF Creator]] | Anthropic's example skill that builds animated GIFs sized for Slack with Pillow and validators. | **stale**, no releases; last commit 2026-04-20 |

### Design & UI generation

Skills and tools that make agents better at interface design, and AI design generators.

| Tool | What it is | Status |
|---|---|---|
| [[Impeccable]] | A design skill and CLI for coding agents with design playbooks, commands like critique and polish, and an 'AI slop' detector. | active, 4.9.0 (2026-11-13) |
| [[UI UX Pro Max]] | A skill with a local database of UI styles, palettes, fonts and UX rules that produces a design-system spec before building UI. | active, v2.15.0 (2026-08-13) |
| [[Open Design]] | A desktop and web app that turns your coding-agent CLI or a hosted model into a design agent for prototypes, decks and video. | active, v0.27.1 (2026-11-10) |
| [[DESIGN MD Spec]] | Google Labs' DESIGN.md format: design tokens in YAML front matter, reasoning in prose, plus a CLI to lint and export. | active, 0.4.0 (2026-07-27) |
| [[21st MCP]] | 21st.dev's hosted MCP server: agents search 12,000+ React/Tailwind components, install their code and, on a paid AI plan, generate new ones. Replaced Magic MCP (dead) in July 2026. | active, CLI 1.18.0 (2026-10-06) |
| [[UX Pilot]] | An AI wireframe and high-fidelity UI generator that goes from sketch or PRD to screens and exports to Figma and code. | active, 2.0 (July 2026), updated 2026-10-22 |

### Domain tools

Specialised tools for finance, healthcare, decisions and model distribution.

| Tool | What it is | Status |
|---|---|---|
| [[Fincept Terminal]] | An open-source, local Bloomberg-style terminal with financial analytics, many data connectors and AI agents. | active, v4.5.2 (2026-11-09) |
| [[OpenMed]] | Local-first healthcare AI: clinical entity extraction and PII de-identification on-device with open medical models. | active, v3.2.0 (2026-11-03) |
| [[Drex]] | Nace.ai's small decision model: facts and options in, one probability per option out, in a single pass. | active, Drex Max v1.1 (November 2026) |
| [[Hugging Bay]] | A registry that distributes open model weights through torrents and hash-checked mirrors. | active, site release 2026-11-13 |
| [[Santander AI Open Source]] | Banco Santander AI Lab's open-source organisation: small models, harness engineering, agents and responsible AI for finance. | **slowing**, last commit 2026-07-23 |

## ⚠️ Retired and fading: what to use instead

| Tool | Status | What happened | Use instead |
|---|---|---|---|
| Chatterbox TTS (note archived) | dead | the authors declared it retired research in August 2026; the MIT weights still work, with no fixes | [[Pocket TTS]] for a free local tier |
| Magic MCP (note rewritten as 21st MCP) | dead | rebranded the day after my note: the local server became a proxy to the hosted 21st MCP | [[21st MCP]] from the same vendor |
| [[MCP Language Server]] | stale | no code change since mid-2025 | [[Serena]], or Claude Code's native LSP plugins |
| Claude Peers MCP (note archived) | stale | no commit since April 2026 | Claude Code's built-in cross-session messaging (since 2.1.224) |
| [[Meme Factory]] | stale | unchanged since January 2026, with templates that now return 404 | [[OpenClaw Meme Maker]] |
| [[Autoresearch]] | stale | Karpathy's experiment, untouched since March 2026; forks carry it on other hardware | still fine as a reference design |
| [[Slack GIF Creator]] | stale | Anthropic still ships it, but known bugs have open, unmerged fixes | apply the open fix PRs locally |
| [[Space Agent]] | slowing | last release April 2026; the team works on Agent Zero | [[Agent Zero]] for the team's active line |
| [[OpenKB]] | slowing | last commit July 2026 | [[OpenWiki]] in personal mode, or [[PageIndex]] directly |
| [[Santander AI Open Source]] | slowing | no new repos or commits since July 2026 | still usable as reference code |

## 📖 Further reading

- The four comparison notes above
- [[LLM App Engineering Stack]] · [[Harness Engineering]] · [[Context Engineering]] · [[Extending Claude Code — Tools for Its Blind Spots]]
- [[LLM Knowledge Bases]]: why this vault is a compiled wiki and not a vector store

## 🔗 Resources

- Method: one research item per tool, the same fields for each (repository, rename or move, last release, last commit, licence, archived or deprecated, liveness, successor, what changed since the note), filled from each project's repository, releases page, package registry and official docs on 2026-11-13. Where a value could not be confirmed, the tool note says so.
- The per-tool evidence is in each note's "Status check" box.
