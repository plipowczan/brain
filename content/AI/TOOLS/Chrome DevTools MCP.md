---
title: "Chrome DevTools MCP"
date: 2026-06-25
enableToc: true
openToc: true
tags: ["tool", "ai", "mcp", "browser", "debugging", "performance", "coding-agents", "open-source"]
type: tool
source: "_raw/processed/2026-06-25_ChromeDevToolschrome-devtools-mcp Chrome DevTools for coding agents.md"
agent-created: true
summary: "Google's MCP server giving coding agents a live Chrome — DevTools automation, debugging, performance traces via Puppeteer"
---
# Chrome DevTools MCP

`chrome-devtools-mcp` is Google / Chrome DevTools' [Model Context Protocol](https://modelcontextprotocol.io) server that lets a coding agent (Claude Code, Cursor, Copilot, Antigravity, Gemini CLI, Codex…) control and inspect a **live Chrome browser**. It exposes the full power of Chrome DevTools — reliable automation, deep debugging, and performance analysis — to the agent. A CLI is also provided for use without MCP.

## Links
### Description
Browser-control MCP server. Drives Chrome through [Puppeteer](https://github.com/puppeteer/puppeteer) and automatically waits for action results, so the agent gets deterministic automation instead of brittle scripted clicks. Supports Google Chrome and Chrome for Testing only.

### Download or use
- Repo: https://github.com/ChromeDevTools/chrome-devtools-mcp
- npm: `chrome-devtools-mcp@latest`
- Standard MCP config:
  ```json
  {
    "mcpServers": {
      "chrome-devtools": {
        "command": "npx",
        "args": ["-y", "chrome-devtools-mcp@latest"]
      }
    }
  }
  ```
- Claude Code (MCP only): `claude mcp add chrome-devtools --scope user npx chrome-devtools-mcp@latest`
- Claude Code (MCP + Skills plugin):
  ```
  /plugin marketplace add ChromeDevTools/chrome-devtools-mcp
  /plugin install chrome-devtools-mcp@chrome-devtools-plugins
  ```
- Requirements: Node.js LTS, current-stable Chrome, npm.

## Reasoning for
The missing browser hand for an agent. Where [[Scrapling]] scrapes and [[Storybook]] isolates components, this lets the agent **see and act on a real running app**: navigate, fill forms, click, take screenshots/snapshots, read console messages with source-mapped stack traces, inspect network requests, and record performance traces with actionable insights. Directly useful for [[Qamera AI]]-style QA and for verifying frontend changes during agentic coding ([[Agentic Coding]], [[Harness Engineering]]).

Tool surface (~49 tools across categories): input automation (`click`, `fill`, `fill_form`, `hover`, `type_text`, `upload_file`…), navigation (`navigate_page`, `new_page`, `wait_for`…), emulation, performance (`performance_start_trace`, `performance_analyze_insight`), network, debugging (`evaluate_script`, `take_screenshot`, `take_snapshot`, `lighthouse_audit`, console), memory/heap-snapshot debugging, extensions, and experimental WebMCP / third-party tools.

Key flags worth knowing:
- `--slim` — 3-tool minimal set (navigate, script, screenshot) for basic tasks, smaller context.
- `--headless`, `--isolated` (temp profile, auto-cleaned), `--channel canary|dev|beta|stable`.
- `--browser-url` / `--autoConnect` (Chrome 144+) — connect to an already-running Chrome instead of launching one; needed for sandboxed envs or to keep logged-in state.
- `--experimentalPageIdRouting` — route page-scoped calls by `pageId` when subagents share one server.
- `--screenshot-format jpeg|webp` + `--screenshot-max-width/height` — shrink screenshots to save context tokens in AI conversations.

Privacy/security notes: exposes full browser content to the MCP client — don't feed it sensitive sessions. Usage statistics + CrUX trace URLs are sent to Google **by default**; opt out with `--no-usage-statistics` / `--no-performance-crux` (or `CI` / `CHROME_DEVTOOLS_MCP_NO_USAGE_STATISTICS` env). Remote-debugging port is open to any local process — don't browse sensitive sites while it's enabled.

## Alternatives considered
- **Playwright MCP** (Microsoft) — similar browser automation, multi-browser; Chrome DevTools MCP is Chrome-only but exposes deeper DevTools/perf/heap tooling.
- **Puppeteer** raw — what this wraps; no MCP/agent layer.
- **WebMCP / Antigravity built-in browser** — overlapping agent-browser approaches.
- For scraping rather than live debugging: [[Scrapling]], [[Firecrawl]].

## Resources
- 🔗 Repo & docs: https://github.com/ChromeDevTools/chrome-devtools-mcp
- 🔗 Tool reference: https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/tool-reference.md
- 🔗 CLI docs: https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/cli.md
- 🔗 Connecting to a running Chrome instance: https://github.com/ChromeDevTools/chrome-devtools-mcp#connecting-to-a-running-chrome-instance
- See also: [[Claude Code]], [[Awesome Claude Code]], [[Qamera AI]], [[Storybook]]

---
Template: [[templates/tool]]
