---
title: "LibreChat"
date: 2026-06-14
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "chatbots", "self-hosted", "mcp", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-06-14_yt-RegzpFdW8pM_10-github-repos-so-good-they-shouldn-t-be-free-and-the-paid.md"
agent-created: true
summary: "danny-avila/LibreChat — self-hosted, open-source chat UI that fronts every major model (ChatGPT, Claude, Gemini, DeepSeek + 20 more) with your own API keys. Native MCP support; you own the data and history. MIT."
---

# LibreChat

## 🚀 Description

[danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) — a single self-hosted interface in front of **every model**: every model ChatGPT runs, plus Claude, Gemini, DeepSeek, and 20+ more. You point it at your **own API keys** and own the data, the history, the whole thing. MIT licensed.

The framing from the source video is sharp: "OpenAI charges you $20/month to use *their* wrapper around the model. LibreChat *is* the wrapper, open source, pointed at your own keys." Same chat experience, no subscription, no lock-in.

## 🧩 Features

- **Multi-provider** — [[OpenAI]], Anthropic Claude, [[Google Gemini]], DeepSeek, and 20+ others behind one UI.
- **Native MCP support** — plugs into tools the same way [[Claude Code]] / Claude desktop does.
- **BYO keys** — usage billed at provider cost, no per-seat markup.
- **Self-hosted & data-owned** — conversations, history, and files stay on infrastructure you control.
- **Familiar UX** — ChatGPT-style interface, drop-in for a team.

## Reasoning for

The obvious self-hosted hub when you're paying multiple consumer chat subscriptions ($20/mo each) but already hold API keys. Useful as a shared team front-end for [[Qamera AI]] / [[PLSoft]] where data residency and cost control matter, and as a personal MCP-capable client that isn't tied to one vendor. Sits alongside [[Personal AI Infrastructure]] thinking — own the layer, rent the models.

## Alternatives considered

- Vendor apps (ChatGPT, Claude.ai) — better polish, but subscription + data on their servers + single-vendor.
- Open WebUI — similar self-hosted niche; LibreChat leads on multi-provider breadth and MCP.

## 🔗 Links

- Repo: https://github.com/danny-avila/LibreChat (MIT)
- Docs: https://www.librechat.ai/

## 🔗 Related notes

- [[Personal AI Infrastructure]] — own-your-stack philosophy
- [[Claude Code]] — shares the MCP tool-integration model
- [[Google Gemini]] · [[OpenAI]] — providers you'd wire in
- Surfaced in [[10 Free GitHub Repos That Replace Paid Tools]]

---
Template: [[templates/tool]]
