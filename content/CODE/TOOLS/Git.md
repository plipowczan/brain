---
title: "Git"
date:   2022-12-02
enableToc: true
openToc: true
tags: ["tool", "git", "version-control"]
type: tool
summary: "Distributed version control system — the backbone of every code project I work on; branching, history, and collaboration."
agent-reviewed: 2026-06-25
sources: ["_raw/processed/2026-11-25_2026-11-25-research-version-control-for-ai-agents.md"]
homepage: "https://git-scm.com/"

---
# Git

Distributed version control system. It tracks every change to a codebase, lets multiple people work in parallel through branches, and keeps a full, auditable history that you can move backward and forward through. It is the foundation under GitHub, GitLab, Azure DevOps, and almost every modern development workflow.

## Links
### Description
[Git — official site](https://git-scm.com/)
### Download or use
[Downloads — git-scm.com](https://git-scm.com/downloads)

## Reasoning for
Git is the version control system under every project I touch. I use it to:
- Branch per feature/fix and merge through pull requests — see [[How to deal with pull request merge conflicts]].
- Keep an auditable commit history; I export it for reporting via [[Export git logs to file]].
- Drive the team Agile flow in .NET work — see [[Common workflow I use in dotnet projects using Azure DevOps]].
It is the default for all my agentic project repos (Brain, Qamera, a fintech-executive agent system, a nonprofit platform).

## Alternatives considered
- **Mercurial** — simpler model, far smaller ecosystem.
- **SVN (Subversion)** — centralised, no cheap local branching.
Git won on ubiquity: every host, CI system, and coding agent assumes it.

Re-checked 2026-11-25 for teams of parallel coding agents ([[Version Control for Parallel AI Coding Agents]]):
- **Clients on top of Git** — [[Jujutsu]] (conflicts stored as data, undo) and [[GitButler]] (several branches in one directory). Less rebase friction, not fewer conflicts.
- **Merge drivers inside Git** — [[Mergiraf]] and [[Weave]] merge syntax instead of lines. Fewer textual conflicts, some silent wrong merges; only with tests on the merged tree.
- **Systems that replace the Git client for agents** — [[AVP]] (a pilot beside Git at most) and [[gitai]] (disposable repository only).
- **Why I stay on Git:** nothing public is shown to work with hundreds of agents on one repository, and for 5–30 a merge queue already removes the push races that make agents loop on fetch–rebase–push. Leaving Git costs pull requests, CI and tooling.

## Resources
- [Pro Git book (free)](https://git-scm.com/book/en/v2)
- Paired editor: [[Visual Studio Code]]
- [[Two-Slice Teams — Git and Code Review After Agents (Przeprogramowani)]]: why Anthropic replaced Git with Scion once its monorepo passed 30,000 merges a day, and why the real fix for agent merge conflicts is module ownership
- [[Version Control for Parallel AI Coding Agents]]: 29 alternatives and add-ons compared, with a setup for 5–30 agents

---
Template: [[templates/tool]]
