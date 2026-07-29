---
title: "Playwright MCP"
date: 2026-07-29
enableToc: true
openToc: true
tags: ["tool", "ai", "mcp", "browser", "testing", "playwright", "coding-agents"]
type: tool
source: "_raw/processed/2026-07-29_claude-in-chrome-v-chrome-devtools-mcp.md"
agent-created: true
summary: "Microsoft's accessibility-tree-based browser automation MCP — cross-browser E2E testing, most token-efficient of the three main browser MCPs"
---
# Playwright MCP

Microsoft's official (plus community) [Model Context Protocol](https://modelcontextprotocol.io) server wrapping [Playwright](https://playwright.dev) for coding agents. Drives automation off the **accessibility tree** rather than raw DOM/CSS selectors or screenshots, which makes interactions deterministic and far less prone to breaking when the UI changes.

## Links
### Description
21 tools across navigation (`navigate`, `goBack`, `goForward`, `reload`), interaction (`click`, `fill`, `select`, `hover`, `press`, `drag`, `uploadFile`), element queries (`getElement(s)`, `waitForSelector`), assertions (`assertVisible`, `assertText`, `assertTitle`), page state (`screenshot`, `getAccessibilityTree`, `evaluateScript`) and browser management (`newPage`, `closePage`). Cross-browser: Chromium, Firefox, WebKit. ~13.7k tokens (6.8% of a 200k context) — the lowest of the three main browser-automation MCPs.

### Download or use
```bash
npx playwright install
claude mcp add playwright -s user -- npx @playwright/mcp@latest
```
Free, no subscription; Node.js required locally.

## Reasoning for
The default choice for **day-to-day E2E testing and test-script generation**: cross-browser coverage, deterministic accessibility-tree selectors (fewer flaky tests than CSS/XPath), excellent CI/CD and headless support, and it can generate reusable Playwright test files from natural-language instructions rather than just performing one-off actions. Lowest token footprint of the three browser MCPs, leaving more context for actual code.

Weaker than [[Chrome DevTools MCP]] on performance tracing and deep network inspection, and weaker than [[Claude in Chrome]] when the task specifically needs your logged-in session rather than a fresh isolated context.

## Alternatives considered
- **[[Chrome DevTools MCP]]** (Google) — Chrome-only, but unmatched for performance traces, Core Web Vitals, memory/CPU profiling and deep network inspection.
- **[[Claude in Chrome]]** (Anthropic) — drives your real logged-in browser session via computer-use; best for manual/exploratory verification, not CI.
- See [[Chrome DevTools MCP vs Claude in Chrome vs Playwright MCP]] for the full side-by-side and a suggested combined workflow.

## Resources
- 🔗 Repo: https://github.com/microsoft/playwright-mcp
- 🔗 Simon Willison — Using Playwright MCP with Claude Code: https://til.simonwillison.net/claude-code/playwright-mcp-claude-code
- 🔗 Testomat.io — Playwright MCP + Claude Code: https://testomat.io/blog/playwright-mcp-claude-code/
- See also: [[Claude Code]], [[Chrome DevTools MCP]], [[Claude in Chrome]], [[CloakBrowser]] (stealth Playwright/Puppeteer drop-in replacement)

---
Template: [[templates/tool]]
