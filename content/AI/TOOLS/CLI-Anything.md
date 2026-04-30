---
title: "CLI-Anything"
date: 2026-04-20
enableToc: true
openToc: true
tags: ["tool", "ai", "cli", "coding-agents", "agent-native", "claude-code"]
type: tool
source: "_raw/inbox/HKUDSCLI-Anything CLI-Anything Making ALL Software Agent-Native -- CLI-Hub httpsclianything.cc.md"
agent-created: true
summary: "Auto-generate agent-native CLIs for any software — 7-phase pipeline, Claude Code plugin, 30+ harnesses"
---

# CLI-Anything

🚀 Tomorrow's software users will be agents, not humans. CLI-Anything bridges that gap — feed it a codebase or a GitHub repo and it auto-generates a full, structured CLI harness that LLM agents can drive directly. No UI automation, no brittle RPA, no dumbed-down API wrappers.

Distributed as a [[Claude Code]] plugin (also works with Pi, OpenClaw, OpenCode, Codex, Qodercli, GitHub Copilot CLI). Core idea: CLI is the universal interface for both humans and AI agents — structured, composable, self-describing, deterministic.

![[07f91ab9c28cd40194a8c876b8593532_MD5.gif]]

## 🗒️ Description
- CLI-Hub: `pip install cli-anything-hub` then `cli-hub install <name>` to browse/install community CLIs.
- Main command: `/cli-anything <software-path-or-repo>` — runs the full 7-phase pipeline.
- Output: installable Python package with Click CLI, stateful REPL, JSON output mode, `SKILL.md` for agent discovery.
- 30+ production harnesses: GIMP, Blender, Inkscape, LibreOffice, Zotero, Obsidian, Draw.io, Godot, n8n, Ollama, ComfyUI, Exa, QGIS, Mermaid, Shotcut, Kdenlive, etc. 2,152 passing tests across all.

![[45b8742d6768848f16da9265dcb00563_MD5.png]]

## Links
### Description
- Repo: https://github.com/HKUDS/CLI-Anything
- CLI-Hub: https://clianything.cc/

### Download or use
- Claude Code: `/plugin marketplace add HKUDS/CLI-Anything` → `/plugin install cli-anything`
- Then: `/cli-anything ./<path-or-repo>` or refine with `/cli-anything:refine`

## 🧩 Key Features
- **7-phase pipeline**: Analyze → Design → Implement → Plan tests → Write tests → Document → Publish.
- **Authentic integration** — generates valid project files (ODF, MLT XML, SVG) and delegates rendering to the real backend (Blender `bpy`, LibreOffice headless, FFmpeg).
- **Dual interaction model** — stateful REPL + subcommand mode, both with `--json` for agent consumption.
- **SKILL.md per CLI** — auto-generated in Phase 6.5, installed inside the package, discoverable by agents.
- **Refinement loop** — `/cli-anything:refine` does gap analysis vs. full software capability and adds missing commands/tests incrementally.

## 🏗️ Architecture
![[feebd003b9a4b9b40efc63cfad16b1d7_MD5.png]]

Core design principles:
1. Use the real software — no replacements, no toy renderers.
2. Dual mode — REPL for agents + subcommand for pipelines.
3. Consistent UX via shared `repl_skin.py`.
4. `--json` on every command.
5. Zero-compromise dependencies — backends are hard requirements; tests fail (not skip) when missing.

## 🎬 Demos
- Draw.io HTTPS handshake diagram — agent produces `.drawio` + `.png` in ~4 min.
  ![[49dac8b6c7daa44eb4f0aa443ee0244a_MD5.gif]]
  ![[9f56caabc0386e17b78af30361eb5eaf_MD5.png]]
- Slay the Spire II gameplay automation.
  ![[3134bf6a722a55159d4a66681c6e6bae_MD5.gif]]
- VideoCaptioner auto-subtitling.

## Reasoning for
Bardzo ciekawe dla [[Agentic Systems]] i [[Qamera AI]] — każdy GUI-based tool, który dziś wymagałby UI automation (Playwright, screenshots), można zamienić na strukturalny CLI z `--json` output. Szczególnie dla workflow z Blender / LibreOffice / Draw.io / n8n. Połączone z [[Agent Skills]] i [[Harness Engineering]] — generated `SKILL.md` wpada prosto do `.claude/skills/`.

## 📖 Further reading
- [[Agent Skills]] — skill system Anthropic
- [[Harness Engineering]] — jak konfigurować agent harness
- [[Context Engineering]] — projektowanie kontekstu dla agentów
- [[Claude Code]] — platforma, na której CLI-Anything działa jako plugin
- [[Awesome Claude Code]] — inne curated resources
- [[Agentic Coding]] — paradygmat agentic development

---
Template: [[templates/tool]]
