---
title: "Peon Ping"
date: 2026-10-15
enableToc: true
openToc: true
tags: ["tool", "ai", "claude-code", "hooks", "coding-agents", "open-source"]
type: tool
source: "_raw/processed/2026-10-15_2026-10-15-research-meme-generation-for-coding-agents.md"
agent-created: true
summary: "PeonPing/peon-ping — plays a sound (Warcraft peon voices and other packs) when Claude Code finishes or fails; the most popular reaction-on-finish hook, worth copying for throttling but not for installing"
---
# Peon Ping

🗒️ **[PeonPing/peon-ping](https://github.com/PeonPing/peon-ping)** plays a sound when a coding agent finishes a task, fails, or needs input. About 5k stars (created 2026-02-09, last push 2026-10-06), a pack registry and a published spec (CESP). I looked at it because it is the closest popular precedent for a **reaction hook**, the pattern behind a "meme on task end" feature in [[Meme Generation for Coding Agents]]. Verdict from the research: **adopt the design lessons, skip installing it**.

## Links
### Description
- **Hook mode, agent not in the loop.** Claude Code runs `powershell -NoProfile -NonInteractive -File peon.ps1` with the event JSON on stdin. The script maps events to categories (`Stop` → task.complete, `PostToolUseFailure` → task.error, permission and elicitation prompts → input.required, `PreCompact` → resource.limit, three or more prompts in 10 s → user.spam), applies debounce and suppression rules, picks a random line from the active pack without repeats and plays it detached.
- **Throttling worth copying:** a 5 s `Stop` debounce, a silent window for short tasks, idle-prompt suppression, subagent suppression via `agent_id`, `exclude_dirs` and a pause command.
- **MCP mode.** Its MCP server lets the agent pick a sound from a catalog resource and call `play_sound`. That "agent picks from a catalog" shape fits an agent-picks-meme tool.
- **On Windows it registers nine hook events plus `UserPromptSubmit`**, including `PreToolUse`, so a synchronous PowerShell starts on every tool call. Bare start-up measured about 210 ms against about 104 ms for Node.

### Download or use
Not installed here. Windows: download `install.ps1` and run it with `powershell -ExecutionPolicy Bypass -File .\install.ps1`; about five minutes; hooks go into `~/.claude/settings.json` and apply to the CLI and the Desktop app. There is also a Homebrew tap, a `curl | bash` installer and a Nix flake. A `-Local` install is the safer route if you try it. Uninstall script: `~/.claude/hooks/peon-ping/uninstall.ps1`.

## Reasoning for
Why I would not install it: the installer **rewrites `settings.json`** and needs an execution-policy bypass; two Windows bugs show the cost (#569 wrote a byte-order mark that broke the Claude Desktop app, #568 left hung stdin processes piling up); no independent security audit exists; it bundles game audio under a self-declared fair-use claim; and the README promotes a crypto token. Smart App Control risk for the PowerShell core is LOW-MEDIUM (a locally created script ran in FullLanguage mode).

What I would copy into a meme hook: the throttling list above, a fixed pool instead of model-written text, registering only the events that are needed, a pause command, and writing the hook in Node. See [[Claude Code Mods (RoboNuggets)]] for the in-process alternative.

## Alternatives considered
- **`code-notify`:** another finish-notification hook, about 18 times fewer stars.
- **A Claude Code mod on `turn.complete`:** in-process, no `settings.json` edits, but the mod API churns and mods are unsandboxed.
- **Plain `Stop` hook script of my own:** the plan in [[Meme Generation for Coding Agents]], with a 15-minute cooldown and a daily cap.

## Resources
- 🔗 [github.com/PeonPing/peon-ping](https://github.com/PeonPing/peon-ping) · [peonping.com](https://www.peonping.com) · [openpeon.com](https://openpeon.com)
- 📖 Related: [[Claude Code]] · [[Claude Code Mods (RoboNuggets)]] · [[Meme Generation for Coding Agents]] · [[AI Agent Security]] · [[Harness Engineering]]

---
Template: [[templates/tool]]
