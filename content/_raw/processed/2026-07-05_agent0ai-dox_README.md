---
title: "agent0ai/dox: Self-documenting AGENTS.md"
source: "https://github.com/agent0ai/dox"
author:
published:
created: 2026-07-05
description: "Self-documenting AGENTS.md. Contribute to agent0ai/dox development by creating an account on GitHub."
tags:
  - "clippings"
---
[![DOX](https://github.com/agent0ai/dox/raw/main/banner.jpg)](https://github.com/agent0ai/dox/blob/main/banner.jpg)

## How DOX works

DOX is a tiny AGENTS.md framework that gives an AI agent precise project context.

The agent keeps a hierarchy of AGENTS.md files as the project changes:

- root AGENTS.md contains project-wide instructions and the top-level index
- child AGENTS.md files contain local instructions for specific areas
- before any edit, the agent walks the docs tree from the root to the area it will touch
- the relevant docs give it exact local guidelines, so it does not edit blindly
- after meaningful changes, it updates the affected AGENTS.md files

The result is simple: traverse the docs, understand the local rules, make precise edits, keep the docs current. Less guessing. Less drift. Less "why did it touch that file?"

## How to use

1. Copy the contents of [AGENTS.md](https://github.com/agent0ai/dox/blob/main/AGENTS.md?plain=1) into your project's AGENTS.md file.
  
That's it. No installation, no dependencies, no package, no runtime. DOX is just a Markdown instruction for AI agents.

It works with any AI agent that supports AGENTS.md files, including Codex, Claude Code, OpenCode, and similar tools.

No AGENTS.md yet? Copy the file into your project root. The agent will see these instructions and will start building the DOX tree.

For an existing project, you can tell your agent: `Initialize DOX tree for this project now.` It will create all the child AGENTS.md files and indexes.

## Credits

Created by **[Agent Zero](https://www.agent-zero.ai/)**  
Open-source agentic AI framework  
[Website](https://www.agent-zero.ai/) · [GitHub repository](https://github.com/agent0ai/agent-zero)