---
title: "Claude in Chrome"
date: 2026-07-29
enableToc: true
openToc: true
tags: ["tool", "ai", "browser", "claude", "computer-use", "automation"]
type: tool
source: "_raw/processed/2026-07-29_claude-in-chrome-v-chrome-devtools-mcp.md"
agent-created: true
agent-reviewed: 2026-11-13
summary: "Anthropic's official Chrome extension giving Claude computer-use control of your real, logged-in browser — GA on all paid plans since 2026-08-26; auto-approves actions by default behind a safety classifier and prompt-injection probes; usable from Claude Code via --chrome"
status-checked: 2026-11-13
project-status: active
---
# Claude in Chrome

> [!success] Status check 2026-11-13 — active
> **Verdict:** It went GA on every paid plan on 2026-08-26.
> **Latest release:** Anthropic publishes no public version number for the extension. · **last dated update:** 2026-11-12 · **licence:** Proprietary. It is included in paid Claude plans (Pro, Max, Ultra, Team, Enterprise)…
> **Source:** https://code.claude.com/docs/en/changelog
> **Changed since this note:** At the note date it was in beta; it went GA on all paid plans on 2026-08-26. Claude can now act without approving each step. 'Automatically approve' is the side panel's default, a safety classifier checks each action against the original request, and probes flag likely prompt injections in tool results.

Anthropic's official Chrome extension that lets [[Claude Code]] (or claude.ai) drive your **actual browser session** — clicking, typing, scrolling, reading pages and console/network output — using computer-use-style control rather than a fixed automation API. It was in beta when I wrote this; since 2026-08-26 it is **generally available on every paid plan** (Pro, Max, Ultra, Team, Enterprise), with no separate price; browser tasks draw on the same plan limits and use them faster than chat. On Enterprise, admins manage it in Organization Settings and can limit it to approved domains; HIPAA-enabled Enterprise orgs have it off by default.

The extension's side panel now runs as a Claude Cowork session (Max, Ultra and Team first, rolling out to Pro; Enterprise admins must enable it). You can switch back to the "classic" panel, which is the only one with workflow recording.

## Links
### Description
Browser extension exposing a browser tool set: browser control (`navigate`, `read_page`, `find`, `computer` for click/type/scroll), form interaction (`form_input`, `javascript_tool`), media (`upload_image`, `get_page_text`, `gif_creator`), tab management (`tabs_context_mcp`, `tabs_create_mcp`), dev tools (`read_console_messages`, `read_network_requests`), and utilities (`resize_window`, `update_plan`). When I wrote this there were ~16 tools; Claude Code 2.1.319 (2026-11-06) removed `shortcuts_list`/`shortcuts_execute` from its built-in Claude in Chrome tools, and `javascript_tool` results up to 60,000 characters now stay inline. Run `/mcp` → `claude-in-chrome` → **View tools** for the current list. The ~15.4k tokens (7.7% of a 200k context) to load the tool surface is the July 2026 figure; I haven't re-measured it.

### Download or use
- Install from the Chrome Web Store (the listing is titled "Claude"; requires a paid Claude plan). The consumer extension supports only Google Chrome, not other Chromium browsers or mobile.
- Inside Claude Code: start with `claude --chrome`, or run `/chrome` and pick **Enabled by default** (that loads the browser tools into every session, so it costs context). `/chrome` also shows connection status, reconnects the extension and chooses which connected browser to use. Needs extension 1.0.36+ and a `/login` sign-in on a direct Anthropic plan: it stays off with an API key or a `claude setup-token` token, and isn't available through Bedrock, Google Cloud's Agent Platform or Microsoft Foundry.
- Claude Code's integration works with Chrome and Edge and also sets up Brave, Arc, Vivaldi and Opera; it isn't supported in WSL. A project's `.claude/settings.json` can no longer turn it on (`CLAUDE_CODE_ENABLE_CFC` there is ignored), so a cloned repo can't connect Claude to your browser.
- Tools are namespaced `mcp__claude-in-chrome__*`; call `tabs_context_mcp` first each session to see open tabs before creating new ones. Claude's tabs are collected in a tab group tied to the session.

## Reasoning for
Fills a different niche than [[Chrome DevTools MCP]] and [[Playwright MCP]]: it drives **your real, already-logged-in session** rather than a fresh isolated browser profile. That makes it the right tool for "does this look right while I'm logged in", exploratory/manual-style testing, design verification (Figma vs. rendered output), and recurring/scheduled browser checks — not for CI/CD or deterministic E2E suites, since it has no headless mode and requires login.

Permission model, which changed at GA: Claude no longer asks before every step. In the side panel **"Automatically approve" is the default**: Claude approves actions it judges safe, a safety classifier checks each action (navigating, typing) against your original request and blocks mismatches, and probes scan tool results for likely prompt injections, warning Claude and making it check with you. You can switch to approving actions manually; the side panel remembers your choice. Site-level permissions still live in the extension. In Claude Code's auto mode, when the auto-mode classifier approves a browser call to a site, the extension skips its own per-site check for that call unless your permission rules deny the site.

Security posture worth knowing before pointing it at anything sensitive: the **23.6% attack-success rate without mitigations, ~11.2% with Anthropic's defenses** I quoted are from the August 2025 research-preview pilot. The GA article (2026-08-26) reports a newer, stronger red-team evaluation: 17.6% against Opus 4.5 and 3.8% against Opus 5 before added safeguards, and with probes plus the classifier 0% for Sonnet 5, Opus 5 and Mythos 5 and 0.3% for Fable 5. Anthropic still says its protections "aren't foolproof". It uses your real cookies/session (exposure risk), and by default it's blocked from financial services, banking, investment, crypto-exchange, adult and pirated-content sites. File uploads from Claude Code are capped at 10 MB per upload, and files named like credentials (`.env`, `.pem`, `.key`, anything under `.ssh`) are refused. Never trigger JS `alert`/`confirm`/`prompt` dialogs through it — they block the extension until manually dismissed. The extension's service worker can also go idle in long sessions; `/chrome` → "Reconnect extension" fixes it.

## Alternatives considered
- **[[Chrome DevTools MCP]]** (Google) — CDP+Puppeteer, isolated profile, deep performance/network traces, headless — better for debugging and CI.
- **[[Playwright MCP]]** (Microsoft) — accessibility-tree based, cross-browser (Chromium/Firefox/WebKit), most token-efficient (~13.7k), best for deterministic E2E test generation.
- See [[Chrome DevTools MCP vs Claude in Chrome vs Playwright MCP]] for the full side-by-side and a suggested workflow combining all three.

## Resources
- 🔗 Anthropic announcement: https://claude.com/blog/claude-for-chrome
- 🔗 GA announcement (2026-08-26): https://claude.com/resources/articles/claude-in-chrome-generally-available
- 🔗 Help Center: https://support.claude.com/en/articles/12012173-getting-started-with-claude-in-chrome · [troubleshooting](https://support.claude.com/en/articles/12902405-claude-in-chrome-troubleshooting)
- 🔗 Claude Code integration: https://code.claude.com/docs/en/chrome · [changelog](https://code.claude.com/docs/en/changelog)
- See also: [[Claude Code]], [[Chrome DevTools MCP]], [[Playwright MCP]]

---
Template: [[templates/tool]]
