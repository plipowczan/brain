---
title: "Cursor"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "ai", "ide", "coding-agents"]
type: tool
agent-reviewed: 2026-11-13
agent-created: true
summary: "AI-powered IDE based on VS Code with built-in coding agents"
status-checked: 2026-11-13
project-status: active
---
# Cursor

> [!success] Status check 2026-11-13 — active
> **Verdict:** Changelog entries on 2026-10-06, 10-13, 10-16, 10-20, 11-05 and 11-06, and the desktop app is at 3.30.
> **Latest release:** Desktop app 3.30, marked 'Latest' on cursor.com/download (the page shows no release date). · **last dated update:** 2026-11-06 · **licence:** Proprietary SaaS plus a closed-source desktop app (VS Code fork).
> **Source:** https://cursor.com/changelog
> **Changed since this note:** Material: (1) ownership: SpaceX acquired Anysphere, deal closed 2026-08-14, with Grok models trained jointly (Grok 4.6, then Grok 4.7 announced 2026-09-21); (2) pricing: since 2026-10-12 new customers get X Subscription tiers (Plus \$8, Premium \$30, Super \$100, Ultra \$200), where Claude…

AI-powered IDE built on VS Code with integrated coding agents.

## Links
### Description
Fork of Visual Studio Code with native AI capabilities — inline completions, chat, and autonomous agent mode. Since Cursor 3.0 (2026-04-02) the centre of the app is the Agents Window, which runs several agents in parallel across local, worktree, cloud and remote SSH setups.

**Ownership:** SpaceX acquired Anysphere, the company behind Cursor. Cursor's own post says the deal closed on 2026-08-14, and Grok 4.6 shipped as the first model built together. Cursor carries on as a product and brand. The post gives no deal terms; the ~\$60B all-stock figure comes from press reports.

**Pricing (new customers since 2026-10-12):** Cursor is sold as part of the X Subscription, bundled with Grok and X Premium: Free, Plus \$8, Premium \$30, Super \$100, Ultra \$200 per month, Teams from \$30 per seat, Enterprise custom. The weekly included pool covers Cursor's own models (Grok 4.5–4.7, Composer 2.5) and is shared with the Grok apps. Claude, GPT and Gemini are not in the pool: Plus gets Grok models only, Premium and above pay API list price for third-party models from prepaid credit, and Teams/Enterprise pay an extra \$0.25 per 1M tokens on eligible third-party requests. Legacy Pro, Pro+, Ultra and Teams plans keep working for existing customers.
### Download or use
[cursor.com](https://cursor.com) — desktop app for macOS, Windows and Linux (3.30 on the download page as of 2026-11-13), plus web and iOS.

## Reasoning for
Good for visual development work and when I need IDE features alongside AI assistance. Used heavily in [[Qamera AI]] development.

Key features:
- Agents Window (Cursor 3.0+) — parallel local, worktree, cloud and SSH agents, Design Mode for pointing the agent at UI elements, agent tabs side by side
- Agent mode — autonomous file editing across the project
- Composer — the name now belongs to Cursor's own coding model (Composer 2.5, in the included pool); multi-file editing is what agent mode does
- Model selection — Cursor's own models (Grok, Composer) come out of the plan; Claude, GPT and Gemini are still selectable, but on the new plans they bill at API list price (Premium and above)
- Added since April 2026: cloud agents that start without a repo and save to Cursor-hosted Origin repos, Cursor Projects with a coordinator agent, self-hosted worker machines, Rollouts and Security Review bots, an Agent SDK (2026-10-20), live apps shared by link (2026-11-05) and voice chat with agents (2026-11-06)

## How I use it
Complementary to [[Claude Code]] — Cursor for visual/frontend work, Claude Code for backend/architecture/batch operations. On the plans sold since 2026-10-12, Claude inside Cursor is billed at API list price, so Claude-heavy work no longer rides on a flat Cursor subscription.

## Alternatives considered
- [[Visual Studio Code]] + Copilot — more stable but less AI-native
- Windsurf — similar concept, less mature

## 🚀 Key insights — the hidden 80% of capabilities

Most users tap only **20% of what Cursor can do**. The key areas:

### Context management — the most valuable resource
- **The context window is the most valuable real estate** — every active MCP eats a huge chunk of it, even when you don't use it
- Project rules for project conventions — the agent knows the project's conventions without repeating them in every prompt. Rules now live in `.cursor/rules/` as `.mdc` files, or in a plain `AGENTS.md`; the current docs no longer mention the old single `.cursorrules` file
- **The 60% rule**: above 60% context-window fill the agent starts to "forget" earlier instructions. >80% = restart, no question
- Disable all MCP at the start, enable on demand — conversations last 2-3x longer
- `@` commands (Files, Docs, Branch, Browser) — add context precisely instead of describing it in words

### Worktrees — feature isolation
Git worktrees in Cursor = isolated copies of the project on separate branches. They let you test **3 different approaches at once** (different models or the same model 3x). Each version runs on its own port. After comparing — Apply the best one to the main branch. Setup: `.cursor/worktrees.json` with auto-install + auto-dev-server. Since Cursor 3.0 the `/worktree` and `/best-of-n` commands do this from the Agents Window.

### Agent mode workflows
- **Two-model workflow**: GPT-5 plans (a detailed plan with edge cases), then switch to Claude Sonnet for implementation (speed). Saves ~70% of the time vs. one model for both. On the plans sold since 2026-10-12 both are third-party models billed at API list price; only Cursor's own models (Grok, Composer) come out of the included pool
- **Agent steering**: queue messages ("Send after current message") to line up tasks without micro-managing
- **Structured prompts**: user stories + design patterns = 80% of the code goes from the first iteration to production

### Keyboard shortcuts — the foundation of flow
- `Cmd+E` (Ctrl+E) — switch editor/agent instantly
- `Shift+Tab` — cycle Ask/Agent/Plan/Debug
- `Cmd+J` (Ctrl+J) — terminal on/off
- `Cmd+B` (Ctrl+B) — sidebar on/off
- Usage summary: Settings → Agents → Always (keep an eye on credit burn)

### Pro tips:
- Index library documentation (Settings → Indexing and Docs) — removes hallucinations and the "cutoff date" problem
- Early Access (Settings → Beta) — new features months earlier
- Completion sounds — stop waiting idly
- Custom commands (`.cursor/commands/`) — import from [[Claude Code]], reusable prompt templates
- Duplicate chat — clone a well-prepared context instead of re-priming

## Resources
[Cursor Documentation](https://cursor.com/docs) (docs.cursor.com now redirects here)

- [Cursor changelog](https://cursor.com/changelog)
- [Cursor is now part of SpaceX](https://cursor.com/blog/joining-spacex) — 2026-08-14
- [Pricing](https://cursor.com/pricing) · [Plan details and model billing](https://cursor.com/docs/account/pricing)

- [[Cursor Plugins]] — the official plugin marketplace and manifest spec (skills, rules, MCP in one package)
---
Template: [[templates/tool]]
