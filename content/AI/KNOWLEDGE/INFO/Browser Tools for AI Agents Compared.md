---
title: "Browser Tools for AI Agents Compared"
date: 2026-11-13
enableToc: true
openToc: true
tags: ["knowledge", "info", "compiled", "ai", "browser", "agents", "mcp", "automation", "comparison", "coding-agents"]
type: compiled-note
source: "research deep research — content/_raw/research-workspaces/ai-tools-review-2026-11/"
agent-created: true
status-checked: 2026-11-13
summary: "Browser Use, Browser Harness, Playwright MCP, Chrome DevTools MCP, Claude in Chrome, Camofox and CloakBrowser sorted into four layers: what each one gives an agent, when to pick which, and what none of them solves."
---

# Browser Tools for AI Agents Compared

The seven tools in this note all "let an agent use a browser", but they sit at different layers. Two are **MCP servers** that hand a coding agent a fresh, scriptable browser. Two put the agent into **your own, logged-in browser**. One is an **agent framework** with a hosted cloud. Two are **stealth browser engines** with no agent in them at all, which the other tools can run on top of. Most confusion comes from comparing across those layers.

For the three MCP-style tools there is already a hands-on pick-by-use-case guide with install commands and a combined workflow: [[Chrome DevTools MCP vs Claude in Chrome vs Playwright MCP]]. This note does not repeat it. It adds the other four tools and the question that guide leaves open: which layer do you need in the first place?

All status lines were checked against each repository and its releases page on **2026-11-13**.

## 🚀 The short answer

- **Testing your own web app from a coding agent:** [[Playwright MCP]] for end-to-end flows and test generation, [[Chrome DevTools MCP]] when the question is "why is it slow / what is the network doing". Both run headless in CI.
- **A task that needs your logged-in session** (an admin panel, a SaaS without an API): [[Claude in Chrome]] if you are on a paid Claude plan and want it managed; [[Browser Harness]] (shipped as the `browser-use` CLI) if you want an open-source agent attached to your own Chrome or Edge over CDP.
- **Building a product that browses the web for users:** [[Browser Use]], the Python framework, locally or on its cloud with proxies and captcha handling.
- **The site blocks bots:** swap the browser underneath for [[CloakBrowser]] (Chromium, keeps the Playwright API) or [[Camofox Browser]] (Firefox-based, returns an accessibility tree that is cheap in tokens). Only on sites you are allowed to automate.
- **You only need the page content, not interaction:** you don't need a browser agent; see [[Crawl4AI]], [[Firecrawl]] or [[Scrapling]].

## 🧩 Four layers

| Layer | Tools | What you get | Typical user |
|---|---|---|---|
| MCP browser for coding agents | [[Playwright MCP]], [[Chrome DevTools MCP]] | a fresh, isolated, scriptable browser exposed as MCP tools; headless, deterministic | a developer testing their own app |
| Agent in your real browser | [[Claude in Chrome]], [[Browser Harness]] | the agent works in the browser you are already logged into | anyone automating a logged-in workflow |
| Agent framework + cloud | [[Browser Use]] | an `Agent(task=…)` loop you embed in your own code, plus hosted stealth browsers | a team building a browsing product |
| Stealth browser engine | [[CloakBrowser]], [[Camofox Browser]] | a patched browser binary that bot detection scores as human; no agent logic | whoever runs any of the above against bot-protected sites |

The layers stack. Browser Use and Browser Harness can drive a CloakBrowser binary; Playwright scripts run on CloakBrowser unchanged; Camofox is a drop-in for Playwright and Puppeteer.

## 📒 Side by side

| Tool | What the agent sees | Whose browser | Headless / CI | Stealth | Licence | Status 2026-11-13 |
|---|---|---|---|---|---|---|
| [[Playwright MCP]] | accessibility tree | fresh profile (Chromium, Firefox, WebKit) | yes | no | Apache-2.0 | active, v0.0.85 (2026-11-09) |
| [[Chrome DevTools MCP]] | DevTools: DOM snapshot, console, network, performance traces | fresh profile, or attach to a running Chrome | yes | no | Apache-2.0 | active, v1.13.0 (2026-11-11) |
| [[Claude in Chrome]] | page text, screenshots, clicks (computer-use style) | your real Chrome, logged in | no | no | proprietary, paid Claude plan | active (closed product) |
| [[Browser Harness]] | whatever Python it writes over CDP | your real Chrome or Edge | possible, not the point | no | MIT | active, v0.1.13 (2026-09-04), commits to 11-13 |
| [[Browser Use]] | Python it writes in one REPL over CDP (since the 1.0 rewrite) | local Chrome or Browser Use Cloud | yes | on the cloud tier | MIT (cloud is paid) | active, 1.0.3 (2026-11-12) |
| [[CloakBrowser]] | nothing by itself: it's the browser | its own patched Chromium | yes | source-level patches | MIT wrappers; newest binary is Pro | active, binary 156.0.8078.47.1-pro (2026-11-03) |
| [[Camofox Browser]] | accessibility tree with stable element refs | its own patched Firefox (Camoufox) | yes | source-level patches | MIT | active, v1.19.0 (2026-11-10) |

## ☘️ When to choose which

### [[Playwright MCP]]: the default for testing
- **Pick it when** you want the agent to click through your app, check it works and leave behind a reusable Playwright test. It drives the accessibility tree, so selectors survive UI changes better than CSS paths, and it is the cheapest of the three MCPs in context.
- **Skip it when** the page is behind your personal login or behind bot protection; it starts with an empty profile.

### [[Chrome DevTools MCP]]: when the question is "why"
- **Pick it when** you debug performance, Core Web Vitals, memory, console errors or network calls. It is Chrome's own DevTools, exposed as tools, and it can attach to a Chrome you already run (`--autoConnect`, Chrome 144+).
- **Watch out:** it sends usage statistics and CrUX lookups to Google unless you turn them off, and an open remote-debugging port is reachable by any local process.

### [[Claude in Chrome]]: your session, managed by Anthropic
- **Pick it when** the work only exists inside your logged-in browser and you want a supported extension rather than a CDP setup. Good for exploratory checks and repeatable chores.
- **Watch out:** it reads live page content with your cookies, so prompt injection from a page is a real risk (Anthropic's own numbers are in the HOWTO). No headless mode, so not for CI.

### [[Browser Harness]]: your session, open source, no fixed tools
- **Pick it when** you want Claude Code or Codex to drive your real Chrome or Edge with no action menu in between: the agent writes Python against CDP, adds the helpers it is missing, and saves per-site playbooks for next time. It is the engine of the `browser-use` CLI.
- **Watch out:** it is deliberately thin, so the quality depends on the agent. On Windows without Chrome, see [[Running Browser Use on Windows via Edge CDP]].

### [[Browser Use]]: when you build the browsing product
- **Pick it when** browsing is part of your own application: an `Agent(task=…, llm=…)` loop, any model, and a cloud with proxies, captcha handling and parallel browsers when local runs get blocked.
- **Watch out:** 1.0 (2026-11-10) is a rewrite that deleted about 80% of the library. The fixed action menu is gone, and the agent now writes Python in one persistent REPL on CDP through [[Browser Harness]], so code written against 0.x needs porting (`MIGRATING.md` maps the options). The defaults are now cloud-first and billed: without `Browser('chromium')` a task runs on a Browser Use Cloud browser with its own model, and anonymised telemetry (including visited URLs) is on until you set `ANONYMIZED_TELEMETRY=false`. Secrets passed to the agent are redacted from output but readable by the Python it writes.

### [[CloakBrowser]] and [[Camofox Browser]]: when bot detection is the blocker
- **CloakBrowser** is a Chromium with fingerprint patches compiled in, the Playwright and Puppeteer API unchanged, and optional human-like mouse and typing. The newest binary is paid (Pro); the free one lags a version behind.
- **Camofox** is built on the Camoufox Firefox fork and returns an accessibility tree instead of raw HTML, which cuts tokens for the agent reading it.
- **For both:** they prevent challenges rather than solve them, bring no proxies, and are dual-use. Use them only where you are allowed to automate.

## ⚠️ What none of them does

- **Logins with 2FA, CAPTCHAs you are actually shown, and payments.** These stay with a human. Stealth browsers make challenges rarer; none of the tools solves them on your behalf, and none should enter your passwords.
- **Safety from the page itself.** Every one of these tools feeds page content to a model. A page can carry instructions; none of the tools can tell content from commands reliably. Isolate profiles and keep sensitive sessions out of agent browsers.
- **Deterministic replay.** Except for Playwright tests that Playwright MCP can generate, an agent run is not a script: the same task can take a different path tomorrow. If a flow matters, turn it into a test or a script.
- **Cheap long sessions.** Screenshots, DOM snapshots and accessibility trees all consume context. Long multi-page tasks get slow and expensive; the token figures in the HOWTO are only the tool definitions.
- **Permission to scrape.** No tool settles a site's terms of service or rate limits for you.

## 🎨 How I use this

On my Windows machine I run the `browser-use` CLI (that is, [[Browser Harness]]) against an isolated Edge over CDP, set up as in [[Running Browser Use on Windows via Edge CDP]]. Since 1.0 it no longer attaches to whatever answers on port 9222, so a separately launched Edge has to be passed explicitly (`cdp_url`, or `BU_CDP_URL` for the CLI); that setup needs re-checking after an upgrade. In Claude Code I have the [[Chrome DevTools MCP]] plugin for checking pages I build, and the three-MCP split from the HOWTO still holds. The two stealth browsers I track but don't run.

## 📖 Further reading

- [[Chrome DevTools MCP vs Claude in Chrome vs Playwright MCP]]: the three MCP tools by use case, token cost per tool, install commands, combined workflow
- [[Running Browser Use on Windows via Edge CDP]]: verified local bring-up
- [[Crawl4AI]] · [[Firecrawl]] · [[Scrapling]] · [[Bright Data]]: the web-data layer, for when you need content rather than interaction
- [[TesterArmy e2e]]: records agent steps once, replays them without model calls
- [[Extending Claude Code — Tools for Its Blind Spots]] · [[Harness Engineering]]
- The whole category in context: [[AI Tools Map]]

## 🔗 Resources

- Status data: deep research of 2026-11-13 over each repository and releases page. The details are in each tool note's "Status check" box.
- [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) · [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) · [Claude in Chrome help](https://support.claude.com/en/articles/12012173-getting-started-with-claude-in-chrome) · [browser-use/browser-harness](https://github.com/browser-use/browser-harness) · [browser-use/browser-use](https://github.com/browser-use/browser-use) · [CloakHQ/CloakBrowser](https://github.com/CloakHQ/CloakBrowser) · [jo-inc/camofox-browser](https://github.com/jo-inc/camofox-browser)
