---
title: "Browser Harness"
date: 2026-05-19
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "browser", "harness", "cdp", "self-improving", "open-source"]
type: tool
source: "_raw/inbox/Self-healing harness that enables LLMs to complete any task.md"
agent-created: true
agent-reviewed: 2026-11-13
summary: "Self-healing CDP harness connecting an LLM directly to your real browser — agent writes the missing helpers itself; the engine inside browser-use 1.0 (pins 0.1.13), also an MCP server; MIT"
status-checked: 2026-11-13
project-status: active
---

# Browser Harness

> [!success] Status check 2026-11-13 — active
> **Verdict:** The default branch had commits on 2026-11-13, and domain-skill PRs merge daily.
> **Last release:** v0.1.13 (2026-09-04), on GitHub Releases and PyPI (browser-harness 0.1.13, same day). · **last commit:** 2026-11-13 · **licence:** MIT (LICENSE file; pyproject declares license = 'MIT').
> **Repo:** https://github.com/browser-use/browser-harness
> **Changed since this note:** The note was written 2026-05-19 and last reviewed 2026-08-06, when it recorded that browser-use 0.13.7 pinned harness 0.1.8. Since then: (1) Harness releases v0.1.9 to v0.1.13 (2026-08-16 to 2026-09-04) added reusable background tabs in the daemon, a macOS remote-debugging approval helper…

## 🚀 Description

[browser-use/browser-harness](https://github.com/browser-use/browser-harness) — minimal editable CDP harness. One websocket to Chrome, nothing between. The agent writes what's missing during execution and the harness improves itself every run.

Same org as [[Browser Use]] and [[Video Use]]. Where Browser Use is a full framework, Browser Harness goes the opposite direction: a thin shell where the agent writes its own helpers. Embodies the "bitter lesson of agent harnesses" — stop over-engineering, let the agent fill in gaps as it works.

> [!success] The thesis won (2026-07-01, then fully on 2026-11-10)
> **Browser Use CLI 3.0** (2026-07-01) was the first product powered by Browser Harness. With **browser-use 1.0** (2026-11-10) the whole parent library followed: the fixed action menu and the DOM serializer are gone, and the agent writes **Python** in one persistent REPL on raw CDP with this harness's helpers. The README now opens with "Browser Harness is now the engine inside Browser Use". As of browser-use 1.0.3 (2026-11-12) the package pins `browser-harness==0.1.13` and no longer depends on `browser-use-sdk`.

> [!info] Version status (checked 2026-11-13)
> Latest harness release **v0.1.13** (2026-09-04, GitHub and PyPI). v0.1.9 to v0.1.13 added reusable background tabs in the daemon, a macOS remote-debugging approval helper (`mac-approve`), permission and accessibility fixes, and an MCP server (`browser-harness-mcp`, extra `mcp`). Commits still land daily on `main`, but since 2026-09-07 almost all of them are agent-written domain skills; core `src/` has been quiet.

## 🧩 Features

- Started as ~1k lines across 4 core files; by v0.1.13 `src/browser_harness/` has grown to about a dozen modules (daemon, admin, helpers, auth, recorder, video, MCP CLI), so "thin" now describes the agent-facing surface more than the code size
- `install.md` — first-time install and browser bootstrap
- `SKILL.md` — day-to-day usage
- `src/browser_harness/` — protected core
- `agent-workspace/agent_helpers.py` — helper code the agent edits
- `agent-workspace/domain-skills/` — reusable per-site playbooks the agent builds (LinkedIn, Amazon, GitHub…)
- Set `BH_DOMAIN_SKILLS=1` to enable surfacing of community-contributed per-domain skills
- Works with Claude Code, Codex, any agent with shell access; Cursor and other MCP clients via `browser-harness-mcp`
- Connects via `chrome://inspect/#remote-debugging` (Chrome 144+ allow popup), or to a browser you name: `BU_CDP_WS` (WebSocket URL, wins) or `BU_CDP_URL` (HTTP endpoint such as `http://127.0.0.1:9222`, resolved via `/json/version`); `BU_NAME` picks a named daemon
- `start_remote_daemon(name)` drives a paid Browser Use Cloud browser instead of a local one

## 🎨 Self-healing pattern

```
agent: wants to upload a file
agent-workspace/agent_helpers.py → helper missing
agent writes it → + custom helper
✓ file uploaded
```

**Skills are written by the harness, not by you.** When the agent figures something non-obvious out, it files the skill itself. Don't hand-author skill files — agent-generated ones reflect what actually works in the browser.

## 🛠️ Install & bring-up (verified 2026-07-10)

Distribution has converged: the harness ships **inside the `browser-use` pip package**. `uv tool install browser-use==1.0.3` gives you the `browser-use` CLI, which pipes Python to this harness's daemon; `browser-use --doctor` is the harness's own doctor. My bring-up was on 0.13.7 / harness 0.1.8 (when `browser-use --version` printed only the harness version). On 1.0 it prints both: `browser-use 1.0.3 (browser-harness 0.1.13)`. You can also install the harness alone (`browser-harness` on PyPI) if you don't want the browser-use library.

Day-to-day: `browser-use <<'PY' ... PY` heredocs, helpers pre-imported (`new_tab`, `page_info`, `js`, `click_at_xy`, `fill_input`, `wait_for_load`…). First navigation must be `new_tab(url)`. No LLM key needed in this mode — the agent writes the Python; a Browser Use key is only for the library's `Agent(...)` loop on its default gateway model, for cloud browsers, or for the hosted cloud agent.

On 1.0, attaching to a browser is stricter. The CLI no longer falls back to whatever answers on `127.0.0.1:9222`/`9223`: with neither `BU_CDP_WS` nor `BU_CDP_URL` set it attaches only to a browser whose live `DevToolsActivePort` sits in your own profile dirs, or it launches a Chromium of its own. The browser-use code says why: a process listening on 9222 could be another user's browser or a fake one, and the agent would type your secrets into it.

Full real-world Windows bring-up (no Chrome → isolated Edge over CDP, `BU_CDP_WS`, launcher, skill install, gotchas): **[[Running Browser Use on Windows via Edge CDP]]**.

## Reasoning for

For browser tasks where you need **complete freedom** — no opinionated framework boxing you in. Lets a competent coding agent build a per-site automation library on the fly. Pair with [[Browser Use]] Cloud for stealth/proxies when needed.

## Alternatives considered

- [[Browser Use]] — fuller framework, opinionated agent loop
- [[Playwright MCP]] / [[Chrome DevTools MCP]] — fixed MCP tool sets. In the vendor's own matched eval (100 BU Bench V2.1 tasks, Codex CLI with GPT-6 Luna, 2026-10-14) Browser Harness scored 60.4, statistically tied with Playwright MCP 0.0.83 (60.0) and Chrome DevTools MCP 1.10.1 (61.0). It used the fewest median input tokens (2.1M vs 4.4M and 6.7M) but was slower per task. It's a vendor benchmark run with one agent, so I read it as "no worse, cheaper on tokens", not as a win
- Playwright with custom selectors — no learning, no self-improvement
- Stagehand / Skyvern — agentic browser frameworks with more structure

## 🔗 Links

- Repo: https://github.com/browser-use/browser-harness
- Setup prompt: paste install request into Claude Code or Codex, agent handles the rest

## 📖 Further reading

- [The Bitter Lesson of Agent Harnesses](https://browser-use.com/posts/bitter-lesson-agent-harnesses)
- [Web Agents That Actually Learn](https://browser-use.com/posts/web-agents-that-actually-learn)

## 🔗 Related notes

- [[Browser Use]] — sibling, full framework
- [[Video Use]] — sibling, video editing under same philosophy
- [[Claude Code]] — primary host agent
- [[Awesome Claude Code]] — broader CC ecosystem
- [[Running Browser Use on Windows via Edge CDP]] — verified Windows bring-up how-to
- [[Browser Tools for AI Agents Compared]] — the four layers of browser tooling for agents

---
Template: [[templates/tool]]
