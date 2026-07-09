---
title: "Wiring Serena into a Codebase"
date: 2026-07-08
enableToc: true
openToc: true
tags: ["knowledge", "howto", "ai", "mcp", "lsp", "claude-code", "coding-agents"]
type: knowledge-note
agent-created: true
summary: "How to wire Serena (LSP-as-context MCP server) into a Claude Code harness on a real TS/JS monorepo — install, register, the Windows Smart-App-Control DLL block, the worktree-scan MCP timeout, and offline pre-indexing. Verified on the saas-platform (Qamera AI) repo."
---

# Wiring Serena into a Codebase

## 🗒️ Task

Give a [[Claude Code]] agent **LSP-as-context** — type-accurate symbol retrieval and editing over a real codebase — by wiring in [[Serena]] as an MCP server. This is the practical companion to [[Structural Retrieval for Code]]. Written from a real bring-up on the `saas-platform` ([[Qamera AI]]) TS monorepo on Windows 11; the non-obvious blockers are the point.

## 🛠️ Prerequisites

- [[Claude Code]] installed.
- `uv` (Astral) for the Python tool install.
- A language server for your stack — for TS/JS it's `typescript-language-server`, which Serena manages itself (Node must be present).
- Best fit: a **medium+ typed codebase** with cross-file changes (see the "when it pays off" note in [[Serena]]). Small/greenfield repos gain little.

## 📝 Instructions

### 1. Install Serena
```powershell
uv tool install -p 3.13 serena-agent
serena init
```

> [!warning] Windows Smart App Control / WDAC blocks a native DLL
> On a machine with **Smart App Control** on (Win11) or org **WDAC**, `serena init` can die with:
> `ImportError: DLL load failed while importing cd: An Application Control policy has blocked this file.`
> Cause: `charset_normalizer`'s compiled (mypyc) `.pyd` speedup is unsigned and gets blocked. Fix — force the **pure-Python** build, no security change needed:
> ```powershell
> uv tool uninstall serena-agent
> uv tool install -p 3.13 serena-agent --no-binary-package charset-normalizer
> ```
> Diagnose the policy first: `Get-MpComputerStatus | Select SmartAppControlState` (`On` = personal SAC, can be disabled but irreversibly; `2` from `Win32_DeviceGuard.CodeIntegrityPolicyEnforcementStatus` = enforced WDAC, likely org-managed).

### 2. Register with Claude Code
From the target repo root:
```powershell
cd C:\path\to\your-repo
serena setup claude-code
```
Equivalent manual form: `claude mcp add serena -- serena start-mcp-server --context=claude-code --project-from-cwd`. Note `--project-from-cwd`: Serena binds to **the directory you launch Claude Code from** — always start CC from the repo root you want indexed. Confirm with `claude mcp list` (look for `serena … ✔ Connected`).

### 3. Fix the MCP startup timeout on big / monorepo repos
First launch on a large repo can hang: `MCP server "serena" connection timed out after 30000ms`. Cause seen on `saas-platform`: Serena's first-run project **auto-generation scanned `.claude/worktrees/`** — four full monorepo copies — taking ~30s and blowing Claude Code's 30s MCP handshake. Fixes:

- **Exclude throwaway/heavy dirs.** Edit `.serena/project.yml` → `ignored_paths`:
  ```yaml
  ignored_paths:
  - ".claude/worktrees"
  - "**/node_modules"
  - "**/dist"
  - "**/.next"
  - "**/build"
  ```
- **Config is written once.** After the first (slow) activation, `.serena/project.yml` exists, so later launches skip the ~30s auto-generation.
- **Raise the startup timeout** as a safety margin (Claude Code reads `MCP_TIMEOUT`, ms). Restart the terminal after setting:
  ```powershell
  [Environment]::SetEnvironmentVariable("MCP_TIMEOUT","180000","User")
  ```

### 4. Pre-index offline (so CC launches fast)
Build the symbol cache outside the 30s handshake:
```powershell
serena project index "C:\path\to\your-repo"
```
On `saas-platform` this indexed **1864 TS files in ~38s** → `.serena/cache` (~60 MB). This is also where you find out whether the **Node language server** trips Smart App Control (it didn't — tsserver ran clean). Later launches read the cache instead of indexing from scratch.

### 5. Launch and verify
```powershell
cd C:\path\to\your-repo
claude --system-prompt="$(serena prompts print-cc-system-prompt-override)"
```
The `--system-prompt` override matters — without it Claude Code favors its own grep and under-uses Serena's tools. In the session:
- `/mcp` → `serena` connected with ~20 tools (`find_symbol`, `find_referencing_symbols`, `replace_symbol_body`, `rename_symbol`, …).
- Test: *"serena: show everyone who calls `<some function>`"* → should return the exact, type-resolved caller set.

## Outcome

Claude Code can query the codebase structurally: exact callers / blast radius before a signature change, real definitions (no hallucinated APIs), symbol-level edits and rename, and a `diagnostics` self-correct loop — the wins listed in [[Serena]] and [[Structural Retrieval for Code]]. Startup is fast because the symbol cache is pre-built.

## ⚠️ Gotchas

- **`.serena/` in git** — Serena auto-writes `.serena/.gitignore` for the cache. `project.yml` can be committed as shared team config; keep the ~60 MB `cache/` out of git (check `git status`).
- **Stale cache** — re-run `serena project index …` after large changes; the cache doesn't auto-refresh symbols for new files.
- **Per-repo first run** — each new repo repeats auto-gen + first index (slower once). Exclude its worktrees/build dirs up front.
- **`--system-prompt` override or it under-triggers** — the tools exist but Claude Code leans on grep without it.
- **When to skip Serena entirely** — small repo, mostly greenfield, local edits: bare agentic grep is enough (the [[GrepRAG]] result).

## 📖 Further reading

- [[Serena]] — the tool: what it does, when it pays off
- [[MCP Language Server]] — the thinner generic LSP→MCP bridge alternative
- [[Structural Retrieval for Code]] — why LSP-as-context beats vector RAG for code
- [[Claude Code]] · [[Qamera AI]] — host and the repo this was verified on

---
Template: [[templates/knowledge_note_how_to]]
