---
title: "Claude in Chrome"
date: 2026-07-29
enableToc: true
openToc: true
tags: ["tool", "ai", "browser", "claude", "computer-use", "automation"]
type: tool
source: "_raw/processed/2026-07-29_claude-in-chrome-v-chrome-devtools-mcp.md"
agent-created: true
summary: "Anthropic's official Chrome extension giving Claude computer-use control of your real, logged-in browser"
---
# Claude in Chrome

Anthropic's official Chrome extension that lets [[Claude Code]] (or claude.ai) drive your **actual browser session** — clicking, typing, scrolling, reading pages and console/network output — using computer-use-style control rather than a fixed automation API. Beta, rolling out to Pro/Max/Team/Enterprise plans.

## Links
### Description
Browser extension exposing ~16 tools: browser control (`navigate`, `read_page`, `find`, `computer` for click/type/scroll), form interaction (`form_input`, `javascript_tool`), media (`upload_image`, `get_page_text`, `gif_creator`), tab management (`tabs_context_mcp`, `tabs_create_mcp`), dev tools (`read_console_messages`, `read_network_requests`), and utilities (`shortcuts_list`/`shortcuts_execute`, `resize_window`, `update_plan`). ~15.4k tokens (7.7% of a 200k context) to load the tool surface.

### Download or use
- Install from the Chrome Web Store (requires a paid Claude plan).
- Inside Claude Code: tools are namespaced `mcp__claude-in-chrome__*`; call `tabs_context_mcp` first each session to see open tabs before creating new ones.

## Reasoning for
Fills a different niche than [[Chrome DevTools MCP]] and [[Playwright MCP]]: it drives **your real, already-logged-in session** rather than a fresh isolated browser profile. That makes it the right tool for "does this look right while I'm logged in", exploratory/manual-style testing, design verification (Figma vs. rendered output), and recurring/scheduled browser checks — not for CI/CD or deterministic E2E suites, since it has no headless mode and requires login.

Security posture worth knowing before pointing it at anything sensitive: reported **23.6% attack-success rate without mitigations, ~11.2% with Anthropic's defenses** (prompt-injection style attacks via page content), it uses your real cookies/session (exposure risk), and it's blocked from financial/adult/pirated sites by policy. Never trigger JS `alert`/`confirm`/`prompt` dialogs through it — they block the extension until manually dismissed.

## Alternatives considered
- **[[Chrome DevTools MCP]]** (Google) — CDP+Puppeteer, isolated profile, deep performance/network traces, headless — better for debugging and CI.
- **[[Playwright MCP]]** (Microsoft) — accessibility-tree based, cross-browser (Chromium/Firefox/WebKit), most token-efficient (~13.7k), best for deterministic E2E test generation.
- See [[Chrome DevTools MCP vs Claude in Chrome vs Playwright MCP]] for the full side-by-side and a suggested workflow combining all three.

## Resources
- 🔗 Anthropic announcement: https://claude.com/blog/claude-for-chrome
- 🔗 Help Center: https://support.claude.com/en/articles/12012173-getting-started-with-claude-in-chrome
- See also: [[Claude Code]], [[Chrome DevTools MCP]], [[Playwright MCP]]

---
Template: [[templates/tool]]
