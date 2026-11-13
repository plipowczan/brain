---
title: "LibreChat"
date: 2026-06-14
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "chatbots", "self-hosted", "mcp", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-06-14_yt-RegzpFdW8pM_10-github-repos-so-good-they-shouldn-t-be-free-and-the-paid.md"
agent-created: true
agent-reviewed: 2026-11-13
summary: "LibreChat-AI/LibreChat (moved from danny-avila in 2026; owned by ClickHouse since Nov 2025) — self-hosted, open-source chat UI and agent platform that fronts every major model (ChatGPT, Claude, Gemini, DeepSeek + 20 more) with your own API keys. MCP, agents, skills; you own the data and history. MIT (bundled admin panel AGPL-3.0). v0.8.8."
status-checked: 2026-11-13
project-status: active
repo: "https://github.com/LibreChat-AI/LibreChat"
---

# LibreChat

> [!success] Status check 2026-11-13 — active
> **Verdict:** v0.8.8 shipped on 2026-10-01 after four RCs (2026-08-14 to 09-23), and v0.8.9-rc1 followed on 2026-10-26.
> **Last release:** v0.8.8, 2026-10-01 (latest final tag). The newest tag is v0.8.9-rc1, 2026-10-26. · **last commit:** 2026-11-12 · **licence:** MIT for the main repo (LICENSE: Copyright (c) 2026 LibreChat).
> **Repo:** https://github.com/LibreChat-AI/LibreChat — **moved/renamed:** Yes. danny-avila/LibreChat -> LibreChat-AI/LibreChat (GitHub 301 redirect). The 2026-09-29 'Meet Lia' blog post says all LibreChat repositories moved from Danny Avila's personal account to the LibreChat-AI org.
> **Changed since this note:** At the note date v0.8.6 (2026-06-01) was current. (1) Repo move to the LibreChat-AI org, and the ClickHouse ownership the note omits.

## 🚀 Description

[LibreChat-AI/LibreChat](https://github.com/LibreChat-AI/LibreChat) — a single self-hosted interface in front of **every model**: every model ChatGPT runs, plus Claude, Gemini, DeepSeek, and 20+ more. You point it at your **own API keys** and own the data, the history, the whole thing. MIT licensed (the main repo).

Ownership, which I missed at first: ClickHouse acquired LibreChat (announced 2025-11-04), and founder Danny Avila and his team joined ClickHouse, which pitches LibreChat as part of its open-source "Agentic Data Stack". The repos sat under Danny's personal account (`danny-avila/LibreChat`) until a move to the **LibreChat-AI** GitHub org, announced in the 2026-09-29 "Meet Lia" blog post; old URLs redirect. Current version as of 2026-11-13: **v0.8.8** (2026-10-01), with v0.8.9-rc1 (2026-10-26) out. GitHub flags every LibreChat release as a pre-release, so the changelog at librechat.ai is the better place to follow it.

The framing from the source video is sharp: "OpenAI charges you \$20/month to use *their* wrapper around the model. LibreChat *is* the wrapper, open source, pointed at your own keys." Same chat experience, no subscription, no lock-in.

## 🧩 Features

- **Multi-provider** — [[OpenAI]], Anthropic Claude, [[Google Gemini]], DeepSeek, and 20+ others behind one UI.
- **Native MCP support** — plugs into tools the same way [[Claude Code]] / Claude desktop does.
- **BYO keys** — usage billed at provider cost, no per-seat markup.
- **Self-hosted & data-owned** — conversations, history, and files stay on infrastructure you control.
- **Familiar UX** — ChatGPT-style interface, drop-in for a team.
- **Agent platform (since v0.8.7–v0.8.8)** — chat projects, a context-usage gauge with optional cost, skills that agents can author (plus GitHub sync for skills), a unified Agent Builder with programmatic tool calling, background tasks, and runs you can interrupt, steer and queue, with human approval of tool calls. A Langfuse trace viewer is built in.
- **Beta / experimental** — a beta Agents API (Chat Completions / Open Responses compatible), Scheduled Chats (beta, off by default), experimental Agent Plugins that bundle Skills and MCP servers, and highly experimental code workspaces with attached machines. v0.8.9-rc1 adds passkeys and MCP Apps.
- **Bundled services** — the default compose file now ships an Admin Panel (AGPL-3.0) next to the MIT app, plus MongoDB, Meilisearch, the RAG API and a pgvector database. A separate Code Interpreter service (Apache-2.0) for code execution and file generation was released with v0.8.7.

## Reasoning for

The obvious self-hosted hub when you're paying multiple consumer chat subscriptions (\$20/mo each) but already hold API keys. Useful as a shared team front-end for [[Qamera AI]] / [[PLSoft]] where data residency and cost control matter, and as a personal MCP-capable client that isn't tied to one vendor. Sits alongside [[LifeOS]] thinking — own the layer, rent the models.

Where I'd be careful now: the stack to run is no longer just a chat app (Node app, MongoDB, Meilisearch, RAG API, vector DB, optionally the Admin Panel and Code Interpreter); it is still 0.8.x with every release marked pre-release and a `librechat.yaml` schema that moves often; many of the new agent features are beta or experimental; the Admin Panel's AGPL matters if you modify and expose it; and roadmap priorities are now set inside ClickHouse.

## Alternatives considered

- Vendor apps (ChatGPT, Claude.ai) — better polish, but subscription + data on their servers + single-vendor.
- Open WebUI — similar self-hosted niche; LibreChat leads on multi-provider breadth and MCP.

## 🔗 Links

- Repo: https://github.com/LibreChat-AI/LibreChat (MIT; formerly `danny-avila/LibreChat`, which redirects)
- Docs: https://www.librechat.ai/
- Changelog: https://www.librechat.ai/changelog (v0.8.8: https://www.librechat.ai/changelog/v0.8.8)
- Repo move: https://www.librechat.ai/blog/2026-09-29_meet-lia-building-librechat-with-librechat
- Acquisition: https://clickhouse.com/blog/clickhouse-acquires-librechat

## 🔗 Related notes

- [[LifeOS]] — own-your-stack philosophy
- [[Claude Code]] — shares the MCP tool-integration model
- [[Google Gemini]] · [[OpenAI]] — providers you'd wire in
- [[Langfuse]] — also part of ClickHouse; LibreChat ships a Langfuse trace viewer
- Surfaced in [[10 Free GitHub Repos That Replace Paid Tools]]

---
Template: [[templates/tool]]
