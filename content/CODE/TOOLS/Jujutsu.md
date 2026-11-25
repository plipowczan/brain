---
title: "Jujutsu"
date: 2026-11-25
enableToc: true
openToc: true
tags: ["tool", "git", "version-control", "coding-agents", "cli", "rust", "open-source", "apache-2.0"]
type: tool
sources: ["_raw/processed/2026-11-25_2026-11-25-research-version-control-for-ai-agents.md"]
agent-created: true
summary: "jj-vcs/jj — Git-compatible version control client: conflicts stored as data, automatic rebase of descendants, operation log with undo; worth a pilot as an agent's client, doesn't lower the number of conflicts"
repo: "https://github.com/jj-vcs/jj"
---

# Jujutsu

🗒️ [jj-vcs/jj](https://github.com/jj-vcs/jj) (command `jj`) is a version control client written in Rust that uses an ordinary Git repository as its storage. It talks to GitHub, GitLab, Gitea or Gerrit over the Git protocol, so the server side doesn't change. Formerly `martinvonz/jj`; moved to the jj-vcs organisation in December 2024.

## Links

### Description

🧩 What differs from [[Git]], and why it matters for agents:

- **The working copy is a commit.** Nearly every command snapshots the files, so there is no staging area or stash to get wrong.
- **Conflicts are data.** A rebase or merge always completes; the commit is marked conflicted and resolved later, by this agent or another one on the same machine.
- **Descendants rebase automatically**, and each change keeps a stable ID through rewrites.
- **Operation log.** `jj undo`, `jj redo`, `jj op revert`, `jj op restore`, and `--at-op` to look at any past state.
- **Workspaces.** Several working copies share one store. Since v0.46.0 (2026-10-07) a colocated workspace is a real Git worktree.
- **Scriptable.** Machine-readable output through templates with `json()`; a push of conflicted commits is refused.

### Download or use

- Docs: [docs.jj-vcs.dev](https://docs.jj-vcs.dev/) · native binaries for Windows, Linux and macOS
- Version on 2026-11-24: v0.47.1, monthly releases, pre-1.0, Apache-2.0, 32,627 stars

> [!warning] Not supported (compatibility page of v0.47.1)
> Submodules, Git LFS, Git hooks (including pre-commit), `.gitattributes`, partial clones. On Windows: own line-ending setting, `@` must be quoted in PowerShell, and an open bug where a directory junction (pnpm makes them) blocks checkout (issue 10521).

## Reasoning for

Verdict from [[Version Control for Parallel AI Coding Agents]]: **pilot at 5–30 agents, wait at hundreds.** Not yet tried by me.

- **How I'd pilot it:** one colocated workspace per agent started from main, a skill plus a hook that blocks mutating `git` commands, `jj undo` allowed but `jj op restore` forbidden, file watcher off, landing left to a merge queue. Separate clones if agents interfere through the operation log.
- **What to expect:** less rebase friction and easy recovery. No study or vendor figure shows fewer conflicts; the design changes *when* a conflict blocks, not how often it happens.
- **Speed is not the argument.** In GitButler's benchmark (an interested party, one agent at a time) Claude took 145.7 s with jj against 98.4 s with git, while Codex showed no clear difference.

⚠️ Caveats:

- **The operation log is shared between workspaces.** Before 0.46.0 `jj undo` in one workspace could silently undo another agent's work; it now refuses, but `jj op restore` still wipes others' operations.
- **"The working copy is stale"** is the most common complaint (issue 7538), reproduced within seconds with the file watcher on.
- **Agents fall back to `git`.** Mixing the two caused races. One agent ran `jj rebase` inside a setup of plain Git worktrees and moved other agents' branches (issue 10741, open).
- **Interactive commands hang agents** (`split`, `squash -i`, `describe` without `-m`). No official MCP server or skill.
- **Largest described use:** five agents on workspaces, one practitioner, no measurements.

## Alternatives considered

- **[[Git]]** with a worktree per agent, `rerere` and `push --force-with-lease`: no new tool, but interrupted rebases stay.
- **[[GitButler]]**: several branches in one directory, with a friendlier history editor; Fair Source licence.
- **Sapling (`sl`)**: Meta's client for stacks; on a Git host it doesn't bring Meta's server-side landing.

## Resources

- 🔗 [Repository](https://github.com/jj-vcs/jj) · [Docs](https://docs.jj-vcs.dev/)
- 📖 [[Version Control for Parallel AI Coding Agents]]: the comparison this note comes from
- Third-party skill: [danverbraganza/jujutsu-skill](https://github.com/danverbraganza/jujutsu-skill)
- [[Mergiraf]] is built into jj as a merge tool, but runs only on `jj resolve`

---
Template: [[templates/tool]]
