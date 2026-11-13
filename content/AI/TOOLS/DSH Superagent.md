---
title: "DSH Superagent"
date: 2026-11-07
enableToc: true
openToc: true
tags: ["tool", "ai", "coding-agents", "agents", "multi-agent", "orchestration", "harness", "github", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-11-07_deepseek-aidsh-superagent-prototype Towards a More Autonomous Agent System.md"
agent-created: true
summary: "deepseek-ai/dsh-superagent-prototype — DeepSeek's research prototype of a proactive coding agent for one GitHub repo (optionally Feishu): opens work items, works in its own session and directory, answers with a PR, web panel for what needs a person. MIT, not official."
status-checked: 2026-11-13
project-status: active
---
# DSH Superagent

> [!success] Status check 2026-11-13 — active
> **Verdict:** Under the 30-day rule it counts as active: the only commit landed on 2026-10-31, 13 days ago, and GitHub shows 22.9k stars and 2.8k forks.
> **Last release:** no releases (commits only); the repo has no tags and no GitHub releases · **last commit:** 2026-10-31 · **licence:** MIT (LICENSE file at the repo root, linked from the README; GitHub reports MIT)
> **Repo:** https://github.com/deepseek-ai/dsh-superagent-prototype
> **Changed since this note:** The note dates from 2026-11-07 and the repo has had no commits since 2026-10-31. One open item from the note is now settled: press coverage (SCMP and Interesting Engineering, 2026-11-01) confirms the companion article 'Exploring Super-agent Design: Towards a More Autonomous Agent System'.

🗒️ **[deepseek-ai/dsh-superagent-prototype](https://github.com/deepseek-ai/dsh-superagent-prototype)** — a proactive coding agent for **one GitHub repository**, packaged as a bundle for [[DeepSeek Harness]]. It listens to GitHub and, optionally, Feishu. When an allowed person asks for work, it opens a **work item**, handles it in its own agent session and directory, and replies in the original conversation, for example with a pull request. A web panel shows what needs a person. MIT.

⚠️ **Research prototype, reference only, not an official DeepSeek product.** Much of it was written by coding agents, may contain bugs, and differs from DeepSeek's internal version and from the design article *Exploring Super-agent Design: Towards a More Autonomous Agent System*. Some designs in the article are future directions and are not implemented here.

## Links
### Description
🧩 What it is:

- **Philosophy: as little human attention as possible, as much value as possible.** An agent that can act for a whole team can also waste a whole team's attention, so it acts only when asked or when a rule the team wrote allows it, and speaks only when someone must act or can use a result.
- **Work items** — each request becomes one item with its own agent session and working directory; results come back in the conversation it started from.
- **Authorization** — only allowed people can ask for work (doc 002).
- **Sources** — GitHub, optionally Feishu; the cookbook explains adding another Source.
- **Panel** — a web view of what needs a human decision.
- This is the original that [[Router and Workers — DeepSeek Super Agent in Claude Code (AI LABS)]] rebuilds in Claude Code by copying the router/worker ideas. The AI LABS setup is *not* this code, and the README does not use the router/worker/benchmark wording from that video, so those claims still need the design article.

### Download or use
- Setup is long, so an agent does it with you. Tell your coding agent: *"Read SETUP.md in this repository and set up dsh-superagent with me."* It asks one short question at a time, shows the whole plan once, then installs and configures.
- Docs, read in order: 000 Philosophy, 001 Domain model, 002 Authorization, 003 Execution, 004 Prompts, 005 Panel, 006 Deployment, 007 Architecture, 008 Cookbook.
- Dev check: `pnpm check` (typecheck, tests, build).

## Reasoning for
- Reads like the reference design behind the "one agent you talk to" idea: compare my fleet notes [[Orca]], [[Swarm Research — Orchestrating Coding Agents]] and the ticket-first approach in [[Specification-Driven Development]].
- Worth reading the philosophy and authorization docs even without running it: the attention-budget rule is a useful test for any agent I build ([[Harness Engineering]]).
- Not for me as-is: it targets GitHub (plus Feishu) and DeepSeek Harness, not my Claude Code setup.
- #todo find and read the design article *Exploring Super-agent Design* and check the router/worker claims from the AI LABS video against it.

## Alternatives considered
- [[Orca]] — worktree-per-agent desktop fleet manager, human-driven rather than proactive.
- [[OpenRig]] — persistent multi-agent teams in YAML.
- The router/worker pattern rebuilt by hand in [[Claude Code]].

## Resources
- Repo: https://github.com/deepseek-ai/dsh-superagent-prototype
- DeepSeek Harness: https://www.deepseek.com/en/harness/

---
Template: [[templates/tool]]
