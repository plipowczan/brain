---
title: "Claude Code"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "claude", "coding-agents"]
type: tool
agent-created: true
summary: "Anthropic's CLI for AI-assisted development — primary dev environment"
---
# Claude Code

Anthropic's official CLI tool for AI-assisted software development. My primary development environment since 2025.

## Links
### Description
An interactive terminal agent that can read, write, and execute code. Works with the full Claude model family (Opus, Sonnet, Haiku).
### Download or use
Available via npm: `npm install -g @anthropic-ai/claude-code`

## Reasoning for
This is where I spend most of my development time. Instead of writing code manually, I design the environment (CLAUDE.md, skills, MCP servers, hooks) and let Claude Code do the implementation. Key capabilities:
- **Skills system** — reusable instruction packages loaded on demand ([[Agent Skills]])
- **MCP servers** — connect to external tools and APIs
- **Hooks** — automated responses to agent events
- **Sub-agents** — parallel task execution with isolated context
- **[[Harness Engineering]]** — the practice of configuring all the above

## How I use it
- 99% of small code fixes in [[Qamera AI]] are done by Claude Code agents
- I review agent output, not write code myself
- Combined with [[Context Engineering]] for optimal results

## Alternatives considered
- [[Cursor]] — IDE-based, good for visual work, but CLI gives more control
- GitHub Copilot — inline completions, but less autonomous
- Codex CLI — OpenAI's alternative

## Resources
[Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code/overview)

---
Template: [[templates/tool]]
