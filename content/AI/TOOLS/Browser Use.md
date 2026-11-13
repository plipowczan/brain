---
title: "Browser Use"
date: 2026-05-19
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "browser", "automation", "open-source", "python"]
type: tool
source: "_raw/processed/2026-05-19_browser-usebrowser-use 🌐 Make websites accessible for AI agents. Automate tasks online with ease.md"
agent-created: true
agent-reviewed: 2026-11-13
summary: "Open-source Python library, CLI and MCP server where an LLM drives a real browser by writing Python on raw CDP (via Browser Harness). 1.0 (2026-11-10) rewrote it and made cloud browser + bu-fast model the defaults; 'V4' is the hosted cloud agent"
status-checked: 2026-11-13
project-status: active
repo: "https://github.com/browser-use/browser-use"
---

# Browser Use

> [!success] Status check 2026-11-13 — active
> **Verdict:** Four stable releases in three days (1.0.0 to 1.0.3, 2026-11-10 to 2026-11-12) and commits on main on 2026-11-12 and 2026-11-13.
> **Last release:** 1.0.3, 2026-11-12 (GitHub release and PyPI browser-use 1.0.3). 1.0.0 'CDP is all you need' shipped… · **last commit:** 2026-11-13 · **licence:** MIT for the open-source library. Browser Use Cloud (hosted browsers, the bu-fast/bu-smart gateway models, web search…
> **Repo:** https://github.com/browser-use/browser-use
> **Changed since this note:** The note's version callout is obsolete: browser-use 1.0.0 shipped on 2026-11-10 after 0.13.7 to 0.13.14. 1.0 is a rewrite that deleted about 80% of the library (-136,866 lines): the agent now writes Python in one persistent REPL directly on Chrome DevTools Protocol through browser-harness (pinned 0.1.13)…

## 🚀 Description

[browser-use/browser-use](https://github.com/browser-use/browser-use) — open-source (MIT) Python library, CLI and MCP server that lets an LLM drive a real browser. Since 1.0 the model doesn't pick from an action menu or read a serialized DOM: it **writes Python in one persistent REPL, straight on the Chrome DevTools Protocol**, using the [[Browser Harness]] helpers. Pair it with any LLM (the Browser Use gateway models, OpenAI, Anthropic, Google, or any Pydantic AI model string) and run it locally, or use Browser Use Cloud for hosted browsers with stealth, CAPTCHA solving and residential proxies (\$0.06 per browser-hour per the README, 2026-11-13) and a fully hosted agent API.

The umbrella project for the [[Browser Harness]] (thin CDP harness, self-healing) and [[Video Use]] (same "give the LLM a structured surface, not raw frames" pattern, applied to video).

> [!info] Version status (checked 2026-11-13)
> **browser-use 1.0.0** shipped on 2026-11-10 ("CDP is all you need"); **1.0.3** (2026-11-12) is current on GitHub and PyPI. 1.0 is a rewrite: it deleted 136,866 lines, about 80% of the library. There is no DOM serializer or action schema any more; the agent writes code cells that run on Chrome over CDP, built on [Pydantic AI](https://ai.pydantic.dev). It pins `browser-harness==0.1.13` and no longer depends on `browser-use-sdk`. The last 0.x release was 0.13.14 (2026-10-26); `pip install "browser-use<1"` still gets it. The CLI 3.0 era (2026-07-01, when the CLI first ran on [[Browser Harness]]) led straight into this: the "[[Browser Harness]] is the engine" thesis is now the whole library, not just the CLI.

> [!warning] 1.0 defaults are cloud-first and billed
> In 0.x you passed your own model and got a local Chromium. In 1.0 `Agent(task)` with no `llm` uses **`bu-fast` on the Browser Use gateway**, and `Browser()` is a **Browser Use Cloud browser**. Both need one `BROWSER_USE_API_KEY` (or `browser-use login`). For a local browser say so explicitly: `Browser('chromium')` (fresh local Chrome/Chromium/Edge on a temp profile) or `Browser('chrome')` (the Chrome you have open, with your logins). Tasks on localhost or private IPs need a local browser. `run()` now stops at `max_steps=100` (was 500) and `timeout=1700` s.

> [!note] Versions: "V4" is still the cloud agent
> Until 2026-11 PyPI had only 0.x releases, so this note used to say "there has never been a 1.x". That changed on 2026-11-10. What still holds: **"V4"** in the README means the **hosted Browser Use Cloud agent** API at [cloud.browser-use.com](https://cloud.browser-use.com/), a separate product, not the pip package. In 1.0, `browser-use --version` prints both numbers (`browser-use 1.0.3 (browser-harness 0.1.13)`), so the old "it shows the harness version" confusion is gone. Upgrade on purpose: the project says to pin `==` (`browser-use==1.0.3`) and read the release notes first.

## 🧩 Features

- Python ≥3.11. Library: `uv add 'browser-use==1.0.3'`. CLI: `uv tool install browser-use==1.0.3`, then `browser-use skill install` registers the agent skill (in `~/.agents/skills/`, plus `~/.claude/skills/`, `~/.codex/skills/` and so on for agents it finds). Library call: `Agent(task, llm=..., browser=...).run_sync()`, or `await agent.run()`
- Models: `ChatBrowserUse` (gateway models `bu-fast`, the default, and `bu-smart`), `ChatOpenAI` (any OpenAI-compatible `base_url`, so Ollama too), `ChatAnthropic`, `ChatGoogle`, or a Pydantic AI model string such as `'groq:llama-3.3-70b-versatile'`. LangChain chat models and `ChatLiteLLM` are gone (they raise `TypeError`)
- **CLI** (`browser-use`, alias `browseruse`): pipe Python to the [[Browser Harness]] daemon, helpers pre-imported; no fixed action list, the agent inspects, adapts and recovers in one coding loop. The `bu` and `browser` command aliases and the `browser-use init` templates were removed in 1.0
- **MCP:** `browser-use --cli-mcp` serves `browser_exec`, `browser_screenshot` and `browser_login`. The old `--mcp` server with fixed tools (`browser_click`, `browser_navigate`…) is deprecated and now serves the same new tools
- New in 1.0: typed results (`output_model_schema=` → `result.structured_output`), uploads and downloads through a `workspace=` folder, `sensitive_data=` typed with `type_secret()` and redacted from output, domain rules (`allowed_domains`, `prohibited_domains`, `block_ip_addresses`) in every browser mode, billed web search (`web_search=True`), Docker images, and `browser-use feedback '…'` to report problems
- Cloud: \$1 credit for new Google/GitHub/Microsoft sign-ups (README, 2026-11-13). I could not confirm whether the old "3 concurrent browsers, no card" free tier still exists
- LLM quickstart: point any coding agent at [docs.browser-use.com/llms.txt](https://docs.browser-use.com/llms.txt)
- Benchmark suite open at [browser-use/benchmark](https://github.com/browser-use/benchmark) (BU Bench V2). The 1.0 release notes report 62.5 for 1.0 vs 56.3 for the previous "Pi" agent on 60 tasks, but the vendor's own paired analysis (provider errors excluded) finds **no significant quality difference**: 1.0 is cheaper and faster, not smarter

## 🎨 Why it matters

The "DOM as context" insight maps directly to how [[Video Use]] reads transcripts instead of frames. Same author, same philosophy: structured surface > pixel dump. Aligns with [[Spec-driven SEO and GEO]] thinking — give the model the schema, not the rendered noise. 1.0 pushes it one step further: no curated DOM view at all, the model gets raw CDP plus a few helpers and writes the code it needs (the `ultrafast` mode on `bu-fast` acts on accessibility-tree ids).

## Reasoning for

For tasks where a coding agent needs to actually click around: form filling, scraping with login, account onboarding flows, e-commerce purchases. The hosted Cloud Agent is the easy path for production; OSS for custom-tool integration. See related [[Hermes Agent]] and [[Paperclip]] for orchestration around such agents. With 1.0, code written for 0.x needs migrating: removed imports raise `ImportError` and unknown options raise `TypeError`, each naming the replacement, and [MIGRATING.md](https://github.com/browser-use/browser-use/blob/main/MIGRATING.md) maps every 0.x option.

## Alternatives considered

- Playwright/Puppeteer directly — lower-level, no agent reasoning layer
- [[Playwright MCP]] — accessibility-tree action set for any MCP client
- [[Browser Harness]] — same org, but a thinner CDP layer where the agent writes its own helpers
- Hosted Cloud Agent — strongest stealth + scale, paid

## 🔐 Security note

`litellm` was **dropped from core dependencies** after the 2026-03-24 supply-chain attack (backdoored `litellm` 1.82.7 & 1.82.8 published to PyPI) and is still absent in 1.0.3; providers now come through `pydantic-ai-slim[anthropic,google,openai]`. Since 1.0 **every dependency is pinned with `==`** and the lockfile is committed. It's a supply-chain policy, but it also means 1.0 can't share a venv with packages that need other `pydantic`, `mcp`, `google-genai` or `pillow` versions; installing the CLI with `uv tool install` avoids that. Further points from the 1.0 README and MIGRATING.md:

- **Telemetry is on by default.** It sends model, steps, cost and the URLs the agent's tabs visited (without query strings). Turn it off with `ANONYMIZED_TELEMETRY=false`.
- **`sensitive_data` is redacted, not sandboxed.** Model-written Python can read the secret and any file your user can read.
- **`Browser('chromium')` opens an unauthenticated debugging port on 127.0.0.1.** On a shared machine, other local users can attach to it.

Pin your `browser-use` version and audit transitive deps before running any agent that touches credentials or a logged-in session (as in [[Running Browser Use on Windows via Edge CDP]]).

## 🔗 Links

- Repo: https://github.com/browser-use/browser-use
- Docs: https://docs.browser-use.com/
- Cloud: https://cloud.browser-use.com/

## 📖 Further reading

- [The Bitter Lesson of Agent Harnesses](https://browser-use.com/posts/bitter-lesson-agent-harnesses)
- [Web Agents That Actually Learn](https://browser-use.com/posts/web-agents-that-actually-learn)
- [[Running Browser Use on Windows via Edge CDP]] — verified local bring-up (the pip package ships the [[Browser Harness]] CDP CLI), with what changes on 1.0
- [browser-use 1.0 release notes](https://github.com/browser-use/browser-use/releases/tag/1.0.0) and [MIGRATING.md](https://github.com/browser-use/browser-use/blob/main/MIGRATING.md)
- [[Browser Tools for AI Agents Compared]] — where Browser Use sits next to Playwright MCP, Chrome DevTools MCP and Claude in Chrome

---
Template: [[templates/tool]]
