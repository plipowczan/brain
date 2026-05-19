---
title: "Self-healing harness that enables LLMs to complete any task."
source: "https://github.com/browser-use/browser-harness"
author:
published:
created: 2026-05-19
description: "Browser Harness | Self-healing harness that enables LLMs to complete any task. - browser-use/browser-harness"
tags:
  - "clippings"
---
[![[3a01cf0b88a0535d1207bfe74e27d074_MD5.svg]]](https://raw.githubusercontent.com/browser-use/media/main/browser-harness/banner-ink.svg)

## Browser Harness ♞

Connect an LLM directly to your real browser with a thin, editable CDP harness. For browser tasks where you need **complete freedom**.

One websocket to Chrome, nothing between. The agent writes what's missing during execution. The harness improves itself every run.

```
● agent: wants to upload a file
│
● agent-workspace/agent_helpers.py → helper missing
│
● agent writes it                         agent_helpers.py
│                                                       + custom helper
✓ file uploaded
```

**You will never use the browser again.**

## Setup prompt

Paste into Claude Code or Codex:

```
Set up https://github.com/browser-use/browser-harness for me.

Read \`install.md\` and follow the steps to install browser-harness and connect it to my browser.
```

The agent will open `chrome://inspect/#remote-debugging`. Tick the checkbox so the agent can connect to your browser:

[![[d7ff1bf4ae415c93c362ff6919dcb21c_MD5.png]]](https://github.com/browser-use/browser-harness/blob/main/docs/setup-remote-debugging.png)

Click Allow when the per-attach popup appears (Chrome 144+):

[![[aff522bd6150ef76a09f1872adb04065_MD5.png]]](https://github.com/browser-use/browser-harness/blob/main/docs/allow-remote-debugging.png)

See [agent-workspace/domain-skills/](https://github.com/browser-use/browser-harness/blob/main/agent-workspace/domain-skills) for example tasks.

## Free Browser Use Cloud browsers

Stealth, sub-agents, or headless deployment.  
**Browser Use Cloud free tier: 3 concurrent browsers, proxies, captcha solving, and more. No card required.**

- Grab a key at [cloud.browser-use.com/new-api-key](https://cloud.browser-use.com/new-api-key)
- Or let the agent sign up itself via [docs.browser-use.com/llms.txt](https://docs.browser-use.com/llms.txt) (setup flow + challenge context included).

## Architecture (~1k lines across 4 core files)

- `install.md` — first-time install and browser bootstrap
- `SKILL.md` — day-to-day usage
- `src/browser_harness/` — protected core package
- `agent-workspace/agent_helpers.py` — helper code the agent edits
- `agent-workspace/domain-skills/` — reusable site-specific skills the agent edits

## Contributing

PRs and improvements welcome. The best way to help: **contribute a new domain skill** under [agent-workspace/domain-skills/](https://github.com/browser-use/browser-harness/blob/main/agent-workspace/domain-skills) for a site or task you use often (LinkedIn outreach, ordering on Amazon, filing expenses, etc.). Each skill teaches the agent the selectors, flows, and edge cases it would otherwise have to rediscover.

- **Skills are written by the harness, not by you.** Just run your task with the agent — when it figures something non-obvious out, it files the skill itself (see [SKILL.md](https://github.com/browser-use/browser-harness/blob/main/SKILL.md)). Please don't hand-author skill files; agent-generated ones reflect what actually works in the browser.
- Open a PR with the generated `agent-workspace/domain-skills/<site>/` folder — small and focused is great.
- Bug fixes, docs tweaks, and helper improvements are equally welcome.
- Browse existing skills (`github/`, `linkedin/`, `amazon/`,...) to see the shape.

If you're not sure where to start, open an issue and we'll point you somewhere useful.

## Domain skills

Set `BH_DOMAIN_SKILLS=1` to enable [agent-workspace/domain-skills/](https://github.com/browser-use/browser-harness/blob/main/agent-workspace/domain-skills) — community-contributed per-site playbooks `goto_url` surfaces by domain. Contribute via PR.

---

[The Bitter Lesson of Agent Harnesses](https://browser-use.com/posts/bitter-lesson-agent-harnesses) · [Web Agents That Actually Learn](https://browser-use.com/posts/web-agents-that-actually-learn)