---
title: "oh-my-pi"
date: 2026-10-12
enableToc: true
openToc: true
tags: ["tool", "ai", "coding-agents", "harness", "lsp", "typescript", "rust", "mcp", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-10-12_can1357oh-my-pi Coding agent with the IDE wired in. Built by Stencil Labs.md"
agent-created: true
summary: "can1357/oh-my-pi (omp) — Stencil Labs' MIT terminal coding agent, a fork of Pi: hashline content-hash edits, LSP and debugger wired into the agent, subagents in isolated worktrees, an advisor model, 60+ providers, and a ~80k-line Rust core"
---
# oh-my-pi

![[ba41e549c1825df71aead3a0568234de_MD5.png]]

🗒️ **[can1357/oh-my-pi](https://github.com/can1357/oh-my-pi)** (`omp`) is a terminal **coding agent with the IDE wired in**, built by [Stencil Labs](https://stencil.so/). It is a fork of [Pi](https://github.com/badlogic/pi-mono) by Mario Zechner, rewritten as a coding-first surface: sessions, subagents, slash commands and extensions, all TypeScript on top of a Rust native core. MIT. README headline numbers: **60+ providers · 31 built-in tools · 14 LSP ops · 28 DAP ops · ~80k lines of Rust**.

🚀 The thesis, from the project's own post [The harness problem](https://blog.can.ac/2026/02/12/the-harness-problem/): the *tool surface*, not the model, is what makes agents fail. If the edit format stops eating the model alive, the same weights do much better.

## Links
### Description
🧩 **What stands out** (all as described in the README, none verified by me):

- **Hashline edits.** The model points at content-hash anchors instead of retyping the lines it wants to change. A stale file makes the anchors diverge and the patch is rejected before it corrupts anything. Claimed effects: Grok Code Fast 1 from 6.7% to 68.3%, Grok 4 Fast using 61% fewer output tokens, MiniMax 2.1x pass rate. These are the vendor's own numbers.
- **LSP wired into every write.** A rename goes through `workspace/willRenameFiles`, so re-exports, barrel files and aliased imports update before the file moves. "Everything your IDE knows, the agent knows."
- **Drives a real debugger (DAP).** Attaches lldb, dlv or debugpy, steps to the bad pointer and reads the frame, instead of sprinkling print statements.
- **Time-traveling stream rules (TTSR).** Rules sit dormant until the model goes off-script. A regex match aborts the stream mid-token, injects the rule as a system reminder and retries from the same point, so you only pay context for a rule when it is needed. Injections survive compaction.
- **First-class subagents.** `task` fans out into isolated worktrees; each worker yields a schema-validated object the parent reads directly. `Alt+A` opens an Agent Hub to watch, steer, revive or kill any worker.
- **Advisor model.** A second model assigned the `advisor` role reads every turn and injects notes (aside, concern or hard blocker) on its own context.
- **Nine model roles** (`default`, `smol`, `slow`, `plan`, `commit`, `vision`, `task`, `advisor`, `tiny`), **fallback chains** on 429 or quota walls, **path-scoped models**, and **round-robin credentials** across stacked API keys.
- **Everything is a path.** Sixteen internal schemes (`pr://`, `issue://`, `agent://`, `skill://`, `ssh://`, `conflict://`…) resolve inside the normal `read` / `grep` / `write` tools, so a PR or a merge conflict is read and resolved like a file.
- **Native, even on Windows.** ripgrep, glob, find, a bash implementation (brush) and 58 coreutils-style utilities run in-process, with no fork/exec and no WSL bridge. Prebuilt for linux, darwin and win32 on x64 and arm64.
- **Memory the agent curates** (`retain`, `recall`, `reflect`, `learn`), with `memory.backend` of local, Hindsight or Mnemopi, scoped per project by default.
- **Inherits what other tools wrote.** On first run it reads rules, skills and MCP servers from `.claude`, `.cursor`, `.windsurf`, `.gemini`, `.codex`, `.cline`, `.github/copilot` and `.vscode`, with no migration script.
- **Four entry points:** TUI, one-shot `omp -p`, a Node SDK (`@oh-my-pi/pi-coding-agent`), and RPC / ACP over stdio. ACP lets Zed drive it with the editor's own buffer and terminal.
- **Also:** `/review` with P0 to P3 priorities and a verdict, `omp commit` that splits changes into atomic commits, `ast_edit` previews staged until you accept, a `web_search` that walks 23 providers, browser and desktop-control tools, `/collab` live session sharing over an end-to-end encrypted relay, and prompt keywords `ultrathink`, `orchestrate` and `workflowz`.

### Download or use
```bash
bun install -g @oh-my-pi/pi-coding-agent   # recommended, needs bun >= 1.3.14
```

Also `brew install can1357/tap/omp`, `mise use -g github:can1357/oh-my-pi`, and a Nix flake. The macOS / Linux and Windows one-liners (`curl … | sh`, `irm … | iex`) pipe a remote script straight into the shell, so I would read them first or stick to bun. Custom OpenAI-compatible providers go in `~/.omp/agent/models.yml`; roles in `~/.omp/agent/config.yml`.

## Reasoning for
I have not run it. It is on the radar because it is the most complete worked example of **harness engineering done in the tool layer** rather than the prompt layer, which is the lens in [[Harness Engineering]] and [[Harness Engineering (Ryan Lopopolo)]]. Three ideas are worth stealing even if I never switch:

- **Edit format as a first-class design problem.** Content-hash anchors avoid the string-not-found retry loop that burns tokens in every `str_replace`-style harness.
- **Just-in-time rules (TTSR).** Dormant guardrails that fire on a regex match are the "shift interventions right" principle from the Lopopolo note made concrete, and a cheaper alternative to a bloated always-on `CLAUDE.md`.
- **A reviewer model on its own context** (`advisor`) is the separate-judge pattern from [[4 Claude Code Upgrades for Making Money (Nate Herk)]] built into the harness.

⚠️ What I would check before trusting it:

- The benchmark gains are the vendor's own, on specific models, and pair with a blog post I have not read in full.
- A huge feature surface for one project, and the README says pull requests are **temporarily open to everyone** as a trial, with the vouch system possibly returning. Watch the contribution policy and supply chain.
- It reads rules, skills and MCP servers from other tools' folders automatically, which is convenient but means the trust boundary is wider than one config file. See [[AI Agent Security]].

## Alternatives considered
- **[[Claude Code]]**: the incumbent in this vault; extension model is skills, MCP, hooks and now mods ([[Claude Code Mods (RoboNuggets)]]). Its edit tool is exact-string replacement, the failure mode hashline targets, but it is tightly integrated with Anthropic's models.
- **[[Cursor]]** and **[[GitHub Copilot]]**: IDE-first rather than terminal-first.
- **[[Hermes Agent]]** and **[[DeepSeek Harness]]**: other open, hackable agent harnesses, with a different emphasis (messaging gateway, plugin-everything).
- **[[Serena]]** and **[[MCP Language Server]]**: add LSP-grade code intelligence to an existing agent over MCP, which is the lighter way to get part of what omp bakes in.
- **[[OmniRoute]]** and **[[LiteLLM]]**: gateways that do the model routing outside the agent. omp already ships fallback chains and round-robin credentials in the harness, so for one agent the gateway layer is optional.
- **Pi itself** ([badlogic/pi-mono](https://github.com/badlogic/pi-mono)): the upstream project omp forks, if the batteries are not needed.

## Resources
- 🔗 Repo: [github.com/can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) · site: [omp.sh](https://omp.sh/) · [docs](https://omp.sh/docs/tools) · [providers](https://omp.sh/docs/providers) · [SDK](https://omp.sh/docs/sdk)
- 📄 [The harness problem](https://blog.can.ac/2026/02/12/the-harness-problem/) — the post behind the hashline numbers
- 📖 Related: [[Harness Engineering]] · [[Harness Engineering (Ryan Lopopolo)]] · [[Claude Code]] · [[Claude Code Mods (RoboNuggets)]] · [[Agent Skills]] · [[Serena]] · [[Hermes Agent]] · [[DeepSeek Harness]] · [[AI Agent Security]]

---
Template: [[templates/tool]]
