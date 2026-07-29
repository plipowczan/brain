---
title: "Chrome DevTools MCP vs Claude in Chrome vs Playwright MCP"
date: 2026-07-29
enableToc: true
openToc: true
tags: ["knowledge", "howto", "ai", "mcp", "browser", "testing", "coding-agents"]
type: knowledge-note
agent-created: true
summary: "Which browser-automation tool to reach for — Chrome DevTools MCP, Claude in Chrome, or Playwright MCP — by use case, with install commands"
---

# Chrome DevTools MCP vs Claude in Chrome vs Playwright MCP

## 🗒️ Task
Pick the right browser-automation tool for a given job — debugging, E2E testing, or quick manual verification — instead of reaching for whichever one is already installed.

## 🧩 The three contenders

| | [[Chrome DevTools MCP]] | [[Claude in Chrome]] | [[Playwright MCP]] |
|---|---|---|---|
| Source | Google Chrome team | Anthropic | Microsoft |
| Architecture | CDP + Puppeteer | Browser extension, computer-use | Accessibility tree |
| Browser support | Chrome only | Chrome only | Chromium, Firefox, WebKit |
| Token usage | ~19.0k (9.5%) | ~15.4k (7.7%) | ~13.7k (6.8%) |
| Tools | 26 | 16 | 21 |
| Performance traces | ✅ Excellent | ❌ No | ⚠️ Limited |
| Network inspection | ✅ Deep | ⚠️ Basic | ⚠️ Basic |
| Cross-browser | ❌ | ❌ | ✅ |
| CI/CD | ✅ Excellent | ❌ Poor (needs login) | ✅ Excellent |
| Headless | ✅ | ❌ | ✅ |
| Auth | Requires setup | Uses your session | Requires setup |
| Cost | Free | Requires paid Claude plan | Free |

## 📝 Instructions — pick by use case

- **Cross-browser E2E tests, test-script generation, CI/CD** → **Playwright MCP**. Lowest token cost, accessibility-tree selectors (fewer flaky tests), generates reusable Playwright test files.
- **Performance analysis, Core Web Vitals, network/console debugging ("why is this slow?")** → **Chrome DevTools MCP**. Unmatched for traces, memory/CPU profiling, deep network inspection; official Google tooling.
- **Quick manual/exploratory verification while logged in ("does this look right?"), design checks against Figma** → **Claude in Chrome**. Drives your real browser session; skip it for CI or serious test automation — no headless mode, and it carries a real (if mitigated) prompt-injection attack surface since it reads live page content.

Install all three side by side — they don't conflict:
```bash
npx playwright install
claude mcp add playwright -s user -- npx @playwright/mcp@latest
claude mcp add chrome-devtools -s user -- npx chrome-devtools-mcp@latest
# Claude in Chrome: install from the Chrome Web Store (Pro/Max/Team/Enterprise)
```

Suggested workflow:
```
1. DEVELOP  → Claude Code (terminal)
2. TEST     → Playwright MCP (E2E, cross-browser)
3. DEBUG    → Chrome DevTools MCP (performance, network)
4. VERIFY   → Claude in Chrome (quick visual checks, logged-in state)
5. CI/CD    → Playwright MCP (headless, automated)
```

## Outcome
A default (Playwright MCP for day-to-day E2E) plus two specialists (Chrome DevTools MCP for performance/network, Claude in Chrome for logged-in manual checks) instead of one tool stretched across jobs it's weak at.

## 📖 Further reading
- [[Chrome DevTools MCP]] · [[Claude in Chrome]] · [[Playwright MCP]] — individual tool notes with full tool lists and setup
- Security note: Claude in Chrome's own security work reports a 23.6% attack-success rate without mitigations (11.2% with defenses) for prompt-injection-style attacks via page content — factor that in before pointing it at sensitive sessions.
- Sources: [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) · [Anthropic — Piloting Claude in Chrome](https://claude.com/blog/claude-for-chrome) · [Claude in Chrome Help Center](https://support.claude.com/en/articles/12012173-getting-started-with-claude-in-chrome) · [Playwright MCP](https://github.com/microsoft/playwright-mcp) · [Simon Willison](https://til.simonwillison.net/claude-code/playwright-mcp-claude-code) · [Testomat.io](https://testomat.io/blog/playwright-mcp-claude-code/)

---
Template: [[templates/knowledge_note_how_to]]
