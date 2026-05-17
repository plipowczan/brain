---
title: "Awesome Claude Code"
date: 2026-03-31
enableToc: true
openToc: true
tags: ["tool", "ai", "claude-code", "resources"]
type: tool
agent-created: true
agent-reviewed: 2026-05-16
summary: "Curated list of Claude Code resources — skills, MCP servers, workflows, prompts, integrations"
---

# Awesome Claude Code

A carefully curated list of the best resources for [[Claude Code]] — skills, workflows, MCP servers, prompts, tools. One entry point instead of searching hundreds of repositories.

## Links
### Description
Community-curated resource list. The Claude Code ecosystem grows fast — new skills and tools appear every day. Awesome Claude Code saves research time — someone has already filtered the available resources.

### Download or use
[GitHub: hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)

## 🗒️ Reasoning for

Using Claude Code without the skills ecosystem is like using a smartphone without apps. Awesome Claude Code is the central hub for discovering the ecosystem — the ideal repo to start from.

Workflow:
1. Browse the list
2. Find 2-3 things matching your needs
3. Install and test
4. Come back for more

Many of the tools I use myself — [[UI UX Pro Max]], [[Agent Skills]] — can be found through Awesome Claude Code. It's like an index to the whole ecosystem.

## 🧩 Categories

### Agent Skills
Specialized skill packages enabling Claude Code to perform domain-specific tasks. Standouts:
- **[[Superpowers]]** (obra) — core SDLC competencies: planning, reviewing, testing, debugging
- **[[Everything Claude Code]]** (affaan-m) — cross-harness perf system (60 agents, 230 skills, AgentShield), MIT, Hackathon winner
- **Compound Engineering Plugin** (EveryInc) — agents + skills built around learning from past mistakes
- **Trail of Bits Security Skills** — professional security auditing with CodeQL and Semgrep
- **cc-devops-skills** (akin-ozer) — detailed DevOps/IaC skills for cloud platforms
- **Claude Scientific Skills** (K-Dense) — research, science, engineering, analysis, finance
- **[[Graphify]]** (safishamsi) — code/docs/images → queryable knowledge graph
- **[[gstack]]** (garrytan, YC) — 23+ opinionated skills as a virtual team (CEO/Designer/QA/SRE/Release)

### Workflows & Knowledge Guides
Structured development processes and guides:
- **Claude Code Best Practice** (shanraisshan) — 69 tips, development workflows comparison, orchestration patterns → see [[Claude Code Best Practice]]
- **Claude Code Ultimate Guide** (FlorianBruniaux) — beginner to power user, with quizzes
- **RIPER Workflow** — Research → Innovate → Plan → Execute → Review
- **AB Method** — spec-driven workflow with incremental missions
- **Ralph Wiggum Loop** — autonomous development loop for long-running tasks

### Tooling
Applications built on top of Claude Code:
- **claude-devtools** (matt1398) — desktop app for session observability, context visualization
- **Claude Code Templates** (davila7) — UI z usage dashboard, analytics, hooks, commands
- **ccexp** — interactive CLI for discovering Claude Code configurations
- **cc-tools** — high-performance Go hooks and utilities

### Hooks
Event-driven handlers firing outside the agentic loop:
- PostToolUse auto-formatting, PreToolUse skill measurement, Stop hooks for verification
- Permission routing to Opus for auto-approval

### Slash Commands
User-invoked prompt templates covering: version control, code analysis, testing, context loading, documentation, CI/deployment, project management

### CLAUDE.md Files
Language-specific and domain-specific configurations, project scaffolding, MCP setup. See also [[Karpathy Skills]] — a single CLAUDE.md addressing 4 typical LLM coder pitfalls.

### Status Lines & Alternative Clients
Custom status bars, IDE integrations, usage monitors, orchestrators

## Alternatives considered
- Searching GitHub on your own — time-consuming, easy to miss valuable repos
- Reddit/Discord — less structured, harder to navigate
- Anthropic's official docs — doesn't cover community tools
- [[Claude Code Best Practice]] (shanraisshan) — complementary: best practice is more tips & workflows comparison, Awesome CC is more tool discovery

## 📖 Resources
- [GitHub: hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)
- [[Claude Code]] — primary AI coding assistant
- [[Agent Skills]] — agent extension system
- [[Context Engineering]] — context management when working with LLMs
- [[Claude Code Best Practice]] — tips and workflows comparison
- [[Graphify]] — knowledge graph skill from awesome-claude-code

---
Template: [[templates/tool]]
