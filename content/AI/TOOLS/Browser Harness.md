---
title: "Browser Harness"
date: 2026-05-19
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "browser", "harness", "cdp", "self-improving", "open-source"]
type: tool
source: "_raw/inbox/Self-healing harness that enables LLMs to complete any task.md"
agent-created: true
agent-reviewed: 2026-07-10
summary: "Thin self-healing CDP harness (~1k lines) that connects an LLM directly to your real browser — agent writes the missing helpers itself at runtime"
---

# Browser Harness

## 🚀 Description

[browser-use/browser-harness](https://github.com/browser-use/browser-harness) — minimal editable CDP harness. One websocket to Chrome, nothing between. The agent writes what's missing during execution and the harness improves itself every run.

Same org as [[Browser Use]] and [[Video Use]]. Where Browser Use is a full framework, Browser Harness goes the opposite direction: a thin shell where the agent writes its own helpers. Embodies the "bitter lesson of agent harnesses" — stop over-engineering, let the agent fill in gaps as it works.

## 🧩 Features

- ~1k lines across 4 core files
- `install.md` — first-time install and browser bootstrap
- `SKILL.md` — day-to-day usage
- `src/browser_harness/` — protected core
- `agent-workspace/agent_helpers.py` — helper code the agent edits
- `agent-workspace/domain-skills/` — reusable per-site playbooks the agent builds (LinkedIn, Amazon, GitHub…)
- Set `BH_DOMAIN_SKILLS=1` to enable surfacing of community-contributed per-domain skills
- Works with Claude Code, Codex, any agent with shell access
- Connects via `chrome://inspect/#remote-debugging` (Chrome 144+ allow popup)

## 🎨 Self-healing pattern

```
agent: wants to upload a file
agent-workspace/agent_helpers.py → helper missing
agent writes it → + custom helper
✓ file uploaded
```

**Skills are written by the harness, not by you.** When the agent figures something non-obvious out, it files the skill itself. Don't hand-author skill files — agent-generated ones reflect what actually works in the browser.

## 🛠️ Install & bring-up (verified 2026-07-10)

Distribution has converged: the harness now ships **inside the `browser-use` pip package** — `uv tool install browser-use` (pkg v0.13.3) gives you the CLI `browser-use`, and `browser-use --doctor` self-identifies as `browser-harness`. The `browser-use` CLI *is* this harness. `browser-use --version` reports the internal `0.1.4`, not the pip version.

Day-to-day: `browser-use <<'PY' ... PY` heredocs, helpers pre-imported (`new_tab`, `page_info`, `js`, `click_at_xy`, `fill_input`, `wait_for_load`…). First navigation must be `new_tab(url)`. No LLM key needed in this mode — the agent writes the Python; keys are only for the framework `Agent(...)` loop or the hosted cloud agent.

Full real-world Windows bring-up (no Chrome → isolated Edge over CDP, `BU_CDP_WS`, launcher, skill install, gotchas): **[[Running Browser Use on Windows via Edge CDP]]**.

## Reasoning for

For browser tasks where you need **complete freedom** — no opinionated framework boxing you in. Lets a competent coding agent build a per-site automation library on the fly. Pair with [[Browser Use]] Cloud for stealth/proxies when needed.

## Alternatives considered

- [[Browser Use]] — fuller framework, opinionated agent loop
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

---
Template: [[templates/tool]]
