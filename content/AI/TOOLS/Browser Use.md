---
title: "Browser Use"
date: 2026-05-19
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "browser", "automation", "open-source", "python"]
type: tool
source: "_raw/inbox/browser-usebrowser-use 🌐 Make websites accessible for AI agents. Automate tasks online with ease.md"
agent-created: true
agent-reviewed: 2026-07-16
summary: "Open-source Python framework that makes websites accessible to AI agents — CLI 3.0 (2026-07) now runs on Browser Harness: agents execute Python in the browser, not a fixed action menu"
---

# Browser Use

## 🚀 Description

[browser-use/browser-use](https://github.com/browser-use/browser-use) — open-source Python framework that lets an LLM drive a real browser. Instead of feeding screenshots, it surfaces a structured DOM the agent can read and act on. Pair with any LLM (Browser Use Cloud, Anthropic, Google) and either run open source locally or use the fully-hosted cloud agent for stealth, proxy rotation, and 1000+ integrations.

The umbrella project for the [[Browser Harness]] (thin CDP harness, self-healing) and [[Video Use]] (same "give the LLM a structured surface, not raw frames" pattern, applied to video).

> [!info] Version status (checked 2026-08-06)
> Latest pip package: **0.13.7**. Core deps now pin `browser-harness==0.1.8` and `browser-use-sdk==3.4.2`. The headline release is still **Browser Use CLI 3.0** (2026-07-01), powered by [[Browser Harness]]: the agent executes arbitrary **Python** in the browser instead of a fixed action menu (`click`/`type`), so it can inspect, adapt, and recover in the same coding loop it was trained on. Install is `uv tool install browser-use`. This is the note's original "[[Browser Harness]] is the engine" thesis landing in the product.

> [!warning] "Browser Use v4" is the cloud agent, not the package
> PyPI `browser-use` has published **136 releases, every one under major version `0`** — there has never been a 1.x, let alone a 4.x (verified against the PyPI JSON API, 2026-08-06). When you see "v4" it means the **hosted Browser Use Cloud agent**, a separate product at [cloud.browser-use.com](https://cloud.browser-use.com/). Three version numbers coexist and none of them match: pip package `0.13.7`, CLI product name `3.0`, cloud agent `v4` — plus `browser-use --version` reports the *internal harness* version (`0.1.8`), not the pip version. Don't "upgrade to v4"; `uv tool upgrade browser-use` is the whole story.

## 🧩 Features

- Python ≥3.11 (CLI 3.0 wants 3.12); `uv add browser-use` for the SDK, `uv tool install browser-use` for the CLI; one-call `Agent(task=..., llm=..., browser=...).run()`
- Multi-LLM: `ChatBrowserUse`, `ChatGoogle('gemini-3-flash-preview')`, `ChatAnthropic('claude-sonnet-4-6')`
- **CLI 3.0** (2026-07-01): agent writes and runs **Python** in the browser via [[Browser Harness]] — no fixed action list; inspect / adapt / recover in one coding loop. Drop it into Claude Code, Codex, or any coding agent. (Legacy fixed-action commands `open`/`state`/`click <idx>` predate 3.0.)
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

## 🔐 Security note

`litellm` was **dropped from core dependencies** after the 2026-03-24 supply-chain attack (backdoored `litellm` 1.82.7 & 1.82.8 published to PyPI). Provider SDKs (`anthropic`, `openai`, `google-genai`, `groq`) are now pinned directly instead of routed through litellm. Pin your `browser-use` version and audit transitive deps before running any agent that touches credentials or a logged-in session (as in [[Running Browser Use on Windows via Edge CDP]]).

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
