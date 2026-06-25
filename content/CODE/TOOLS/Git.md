---
title: "Git"
date:   2022-12-02
enableToc: true
openToc: true
tags: ["tool", "git", "version-control"]
type: tool
summary: "Distributed version control system — the backbone of every code project I work on; branching, history, and collaboration."
agent-reviewed: 2026-06-25

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
It is the default for all my agentic project repos (Brain, Qamera, Jakub Głąb, TTTR).

## Alternatives considered
- **Mercurial** — simpler model, far smaller ecosystem.
- **SVN (Subversion)** — centralised, no cheap local branching.
Git won on ubiquity: every host, CI system, and coding agent assumes it.

## Resources
- [Pro Git book (free)](https://git-scm.com/book/en/v2)
- Paired editor: [[Visual Studio Code]]

---
Template: [[templates/tool]]
