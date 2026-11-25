---
title: "GitButler"
date: 2026-11-25
enableToc: true
openToc: true
tags: ["tool", "git", "version-control", "coding-agents", "cli", "rust", "fair-source"]
type: tool
sources: ["_raw/processed/2026-11-25_2026-11-25-research-version-control-for-ai-agents.md"]
agent-created: true
summary: "gitbutlerapp/gitbutler — Git client (desktop, TUI, `but` CLI) that keeps several branches applied in one directory, with stacks, absorb and an undo log; fits 2-5 agents per checkout, not a sync layer for many"
repo: "https://github.com/gitbutlerapp/gitbutler"
---

# GitButler

🗒️ [gitbutlerapp/gitbutler](https://github.com/gitbutlerapp/gitbutler) is a Git client with a desktop app, a terminal UI and a CLI called `but`. Its core idea: **several branches are applied in one working directory at the same time**. An agent edits files in the shared directory, then commits chosen files or hunks to its own branch, and each branch gets its own pull request.

## Links

### Description

🧩 Features:

- **Parallel and stacked branches** in one directory, held together by a generated `gitbutler/workspace` commit. Since 0.23 a repository with one applied branch stays a normal checkout.
- **History editing** (`absorb`, `move`, `split`, `squash`, `reorder`) that rebases dependent commits automatically.
- **Conflicts as a stored state.** A rebase always completes; `but resolve` lists and resolves conflicted commits; pushing them is refused.
- **Operation log** with snapshots that include uncommitted work: `but undo`, `but oplog restore`.
- **Agent interface.** `--json`, short IDs, dry runs on `absorb`, `pull` and `push`, and a skill of about 34 KB installed with `but skill install` or `but agent setup` for Claude Code, Codex, Cursor and others. The MCP server is hidden and read-mostly.
- **Linked worktrees** next to parallel branches (`but worktree new`), with copy-on-write copies where the file system allows.

### Download or use

- [gitbutler.com](https://gitbutler.com) · [docs.gitbutler.com](https://docs.gitbutler.com) · native Windows, macOS and Linux
- Version on 2026-11-24: 0.23.5 (2026-11-20), pre-1.0, 22,015 stars
- Licence FSL-1.1-MIT (Fair Source): free except for a competing product; each version turns MIT after two years. Free to use; paid tiers not confirmed.

## Reasoning for

Verdict from [[Version Control for Parallel AI Coding Agents]]: **pilot at 5–30 agents, skip as a synchronisation layer at hundreds.** Not yet tried by me.

- **Where it fits:** one or two agents per checkout, or 2–5 with clearly separate files and one coordinator, when running the app twice is expensive (ports, database, heavy install). It is also a better history-editing client for one agent in its own worktree.
- **Where it doesn't:** 10–30 agents in one directory. Reports of locked state, stale IDs and corrupted workspaces come from fewer.
- **Rules I'd give agents:** pin a release, commit by path only, re-read status after every write because IDs are snapshots, take a manual snapshot before editing history, don't combine `but pull` with linked worktrees until issue 17461 is settled.

⚠️ Caveats:

- **No locks.** A stale full-file write can silently overwrite a peer's edit, and a plain `but commit` takes everyone's uncommitted changes.
- **A green combined build hides dependencies** between branches; test each branch, the combination and the integration state.
- **Hooks are skipped in linked worktrees** (issue 17363).
- **Data-loss reports:** an amend that dropped an unrelated stack (14848) and a same-day nightly report of dropped files (17461, unconfirmed).
- The vendor's benchmark (34 s against 92 s for plain git, 4.5 commands against 20.4) tests one agent at a time and is self-reported.

## Alternatives considered

- **Git worktrees** ([[Git]], [[Orca]]): real file isolation, at the cost of disk, ports and databases per agent.
- **[[Jujutsu]]**: conflicts as data and an operation log too, with separate workspaces and an Apache licence.

## Resources

- 🔗 [Repository](https://github.com/gitbutlerapp/gitbutler) · [Docs](https://docs.gitbutler.com) · [vcbench.dev](https://vcbench.dev) (vendor benchmark)
- ✍️ [Trigger.dev on replacing worktrees with GitButler](https://trigger.dev/blog/parallel-agents-gitbutler) (2026-04-16)
- 📖 [[Version Control for Parallel AI Coding Agents]]: the comparison this note comes from
- Configured Git merge drivers such as [[Mergiraf]] and [[Weave]] are honoured

---
Template: [[templates/tool]]
