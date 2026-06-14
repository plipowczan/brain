---
title: "GitHub Copilot"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "ai", "coding-assistant", "ide", "code-completion", "github"]
type: tool
agent-created: true
summary: "In-IDE AI code completion and chat from GitHub/OpenAI — inline suggestions, chat, agent mode; the in-editor assist used on the Tech To The Rescue project"
---

# GitHub Copilot

The original mainstream in-IDE AI coding assistant, from GitHub (built on OpenAI models). It offers inline autocomplete as you type, a chat sidebar for questions/refactors, and — more recently — agent and multi-file editing modes. It lives inside VS Code, JetBrains, Visual Studio, and on github.com, making it the lowest-friction AI assist for developers already in those editors.

## Links

### Description

- **Inline completions** — context-aware single-line to whole-function suggestions.
- **Copilot Chat** — in-editor chat for explanations, fixes, tests, refactors.
- **Agent / edit modes** — multi-file changes and task execution.
- **Model choice** — pick among frontier models (OpenAI/Anthropic/Google) in recent versions.
- **Broad IDE support** — VS Code, JetBrains, Visual Studio, Neovim, github.com.

### Download or use

- Site: [github.com/features/copilot](https://github.com/features/copilot)
- Install the Copilot extension in your IDE; requires a subscription (free tier available).

## Reasoning for

GitHub Copilot appears in the [[Tech To The Rescue]] platform's dev tooling, alongside [[Claude Code]] and [[Cursor]]. It's the in-editor, stay-in-flow assist — inline completions and quick chat — complementing the heavier agentic tools I lead with. The pragmatic case for noting it: in a client/team context, Copilot is often already adopted and IDE-native, so it's the path of least resistance for day-to-day completion, while [[Claude Code]] handles the larger autonomous, multi-step work. They're different points on the spectrum from *autocomplete* to *agent*, not competitors for the same job.

## Alternatives considered

- **[[Cursor]]** — AI-first IDE (VS Code fork) with deeper codebase awareness; Copilot is the extension-in-your-existing-editor option.
- **[[Claude Code]]** — terminal/agentic coding for autonomous multi-step tasks; my primary, with Copilot as inline assist.
- **Codeium / Windsurf, Supermaven** — strong autocomplete alternatives (incl. free tiers); Copilot leads on ubiquity and IDE integration.

## Resources

- 📘 [Copilot docs](https://docs.github.com/copilot)
- 🔗 [[Cursor]] · [[Claude Code]] — the rest of the AI-coding spectrum

---
Template: [[templates/tool]]
