---
title: "agent0ai/space-agent: The agent that re-shapes the Space"
source: "https://github.com/agent0ai/space-agent"
author:
  - "[[agent0ai]]"
published:
created: 2026-05-01
description: "The agent that re-shapes the Space. Contribute to agent0ai/space-agent development by creating an account on GitHub."
tags:
  - "clippings"
---
[![[5543f1f645cc05057a727f58cdd00627_MD5.svg]]](https://space-agent.ai/)

[![[b33cfd7db6eb145d792ba75f06f565d3_MD5.svg]]](https://space-agent.ai/)  

### Created by Agent Zero.

[![[6243546ecd5090a131388396d2b1b72b_MD5.webp]]](https://www.youtube.com/watch?v=CNRHxEZ8yqs)

## Why Space Agent Is Different

| **The agent reshapes the interface**   Ask for a page, tool, widget, or workflow and the agent can build it straight into the running workspace while you work. | **Endless possibilities**   The agent is not trapped inside a fixed product surface. It can develop the capabilities it needs from within the system itself and keep extending the Space toward whatever the user can imagine. |
| --- | --- |
| [![[4e35e3d851590efa437877a0da11a1e7_MD5.webp]]](https://github.com/agent0ai/space-agent/blob/main/packaging/resources/icons/source/space-agent-icon-256.webp) | **The agent lives in the frontend runtime**   Space Agent runs in the browser layer itself, whether you open it in a tab or through the desktop app, so the agent can work directly with the same framework, modules, spaces, and UI it is reshaping. |
| **Text-based agent**   New capabilities can live in simple `SKILL.md` files that the agent can write and extend itself in plain text. | **Token-efficient execution**   No bulky tool-call JSON. When action is needed, the agent can stay in plain text and plain JavaScript inside the same message. |
| **Puzzle-piece modularity**   The core stays small. Most of Space Agent is made of modular pieces that can be added, removed, or swapped cleanly instead of being welded into one rigid app. | [![[bb73c4801edeb35554b1ebb19e6e1981_MD5.webp]]](https://github.com/agent0ai/space-agent/blob/main/app/L0/_all/mod/_core/visual/res/chat/admin/helmet_no_bg_256.webp) |
| **Personal to hierarchical**   Use Space Agent as a completely personal assistant, or organize it into a hierarchical system of users and groups as the scope grows. | **Per-user work, group sharing**   Users can build in their own layer without affecting anyone else, then groups can share tools, workflows, and behavior across teams when they are ready. |
| [![[b3f45acdcb16b8e0657086b0953dd21e_MD5.webp]]](https://github.com/agent0ai/space-agent/blob/main/app/L0/_all/mod/_core/visual/res/engineer/astronaut_red_512h.webp) | **Persistent admin and time travel**   When something breaks, admin mode gives you a stable control plane, and Git-backed history lets you roll back user or group changes without taking everyone down with you. |

## Try it in 30 seconds

## space-agent.ai

Try our demo server with guest account.

## Run it yourself

### The desktop app

Grab the latest build from [GitHub Releases](https://github.com/agent0ai/space-agent/releases/latest). It runs everything as one app. No terminal required.

### A real server, for you or your team

```
git clone https://github.com/agent0ai/space-agent.git
cd space-agent
npm install

# create yourself an admin
node space user create admin --password "change-me-now" --full-name "Admin" --groups _admin

# start the server
node space serve
```

### For development

```
npm run dev # server with auto-reload
```

Open the checked-in VS Code launch entry `Dev Server (npm run dev)` when you want breakpoints in `server/` code. It launches the same watcher and auto-attaches to the spawned `node space serve` process across restarts.

### For production

```
node space set CUSTOMWARE_PATH=/srv/space/customware
node space supervise HOST=0.0.0.0 PORT=3000 # zero downtime auto-update
```

Run `node space help` to see the full command surface and built-in help for each from [`commands/params.yaml`](https://github.com/agent0ai/space-agent/blob/main/commands/params.yaml).

## AI-driven development and documentation

Space Agent is developed by AI agents, including its documentation.

The framework keeps a hierarchical `AGENTS.md` instruction system, plus skills and focused docs, so agents can understand ownership, architecture, workflows, and local implementation rules while they build and maintain the system autonomously.

DeepWiki covers the human-readable side of that same knowledge base. Together, this keeps the codebase and its documentation prepared for autonomous agent work, and helps the documentation keep up with the pace of AI-driven development instead of falling behind.

If you want the deep tour, start here: