---
title: "Browser Use"
date: 2026-05-19
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "browser", "automation", "open-source", "python"]
type: tool
source: "_raw/inbox/browser-usebrowser-use 🌐 Make websites accessible for AI agents. Automate tasks online with ease.md"
agent-created: true
summary: "Open-source Python framework that makes websites accessible to AI agents — DOM-aware browser automation with multi-LLM support and a hosted cloud tier"
---

# Browser Use

## 🚀 Description

[browser-use/browser-use](https://github.com/browser-use/browser-use) — open-source Python framework that lets an LLM drive a real browser. Instead of feeding screenshots, it surfaces a structured DOM the agent can read and act on. Pair with any LLM (Browser Use Cloud, Anthropic, Google) and either run open source locally or use the fully-hosted cloud agent for stealth, proxy rotation, and 1000+ integrations.

The umbrella project for the [[Browser Harness]] (thin CDP harness, self-healing) and [[Video Use]] (same "give the LLM a structured surface, not raw frames" pattern, applied to video).

## 🧩 Features

- Python>=3.11, `uv add browser-use`, one-call `Agent(task=..., llm=..., browser=...).run()`
- Multi-LLM: `ChatBrowserUse`, `ChatGoogle('gemini-3-flash-preview')`, `ChatAnthropic('claude-sonnet-4-6')`
- CLI: `browser-use open <url>`, `state`, `click <idx>`
- Templates: `uvx browser-use init --template default|advanced|tools`
- Cloud free tier: 3 concurrent browsers, captcha solving, proxies, no card
- LLM Quickstart: point any coding agent (Cursor, Claude Code) at [Agents.md](https://docs.browser-use.com/llms-full.txt) — no manual onboarding
- Benchmark suite open at [browser-use/benchmark](https://github.com/browser-use/benchmark) — 100 real-world tasks

## 🎨 Why it matters

The "DOM as context" insight maps directly to how [[Video Use]] reads transcripts instead of frames. Same author, same philosophy: structured surface > pixel dump. Aligns with [[Spec-driven SEO and GEO]] thinking — give the model the schema, not the rendered noise.

## Reasoning for

For tasks where a coding agent needs to actually click around: form filling, scraping with login, account onboarding flows, e-commerce purchases. The hosted Cloud Agent is the easy path for production; OSS for custom-tool integration. See related [[Hermes Agent]] and [[Paperclip]] for orchestration around such agents.

## Alternatives considered

- Playwright/Puppeteer directly — lower-level, no agent reasoning layer
- [[Browser Harness]] — same org, but a thinner CDP layer where the agent writes its own helpers
- Hosted Cloud Agent — strongest stealth + scale, paid

## 🔗 Links

- Repo: https://github.com/browser-use/browser-use
- Docs: https://docs.browser-use.com/
- Cloud: https://cloud.browser-use.com/

## 📖 Further reading

- [The Bitter Lesson of Agent Harnesses](https://browser-use.com/posts/bitter-lesson-agent-harnesses)
- [Web Agents That Actually Learn](https://browser-use.com/posts/web-agents-that-actually-learn)
- [[Running Browser Use on Windows via Edge CDP]] — verified local bring-up (the pip package ships the [[Browser Harness]] CDP CLI)

---
Template: [[templates/tool]]
