---
title: "REA"
date: 2026-11-20
enableToc: true
openToc: true
tags: ["tool", "ai", "mcp", "reverse-engineering", "security", "code-intelligence", "coding-agents", "claude-code", "cli", "open-source", "mit"]
type: tool
sources: ["_raw/processed/2026-11-20_morlutorea Reverse engineer anything with agents, from app behavior down to native binaries.md"]
agent-created: true
summary: "morluto/rea (npm rea-agents) — Reverse Engineer Anything: one MCP server and CLI that lets a coding agent analyse native binaries (via Hopper, Ghidra, IDA or Kuna), Electron/JS, .NET, Android, firmware and websites, returning evidence and limits with each finding; MIT"
repo: "https://github.com/morluto/rea"
---

# REA

🗒️ [morluto/rea](https://github.com/morluto/rea) — "Reverse Engineer Anything" — is one MCP server (plus a CLI with the same workflows) that connects a coding agent to reverse-engineering tools. The pitch: you see a feature you like in some app, ask your agent how it works, get the evidence, and have the agent build a similar feature in your own project. Analysis runs locally, and every conclusion comes back with the evidence and the limitations behind it.

## Links

### Description

**How it works:** the agent calls REA over MCP → REA inspects the target and traces the relevant code with its analysis tools → it returns findings with evidence → the agent explains the behaviour, asks follow-up questions, or writes and tests an implementation.

🧩 **What it can analyse** (a selection from a table of about 40 target types):

- **Native binaries** — pseudocode, assembly, strings, symbols, calls and references, through Hopper, [[Ghidra]], IDA or Kuna. Setup can install Hopper after you approve; the others use installations you already have. GNU objdump and Rizin work for offline inspection.
- **JavaScript and Electron apps** — modules, imports, source maps, routes, IPC and native add-ons, with no native engine needed.
- **.NET assemblies** — metadata, CIL instructions and native dependencies, statically.
- **Android** — manifest, classes and decompiled methods through headless JADX; APK signatures; Apktool resources; Flutter build provenance; live devices through adb.
- **Websites** (Chrome-family browser) and **saved network captures** (HAR, Fiddler SAZ).
- **Built-in static readers** for many formats: Go and Rust build metadata, PE imports and certificates, ELF notes and dependencies, DWARF units, binary hardening flags, GGUF and safetensors model files, Unity IL2CPP metadata, Godot PCK, PyInstaller and Deno executables, SQLite databases, firmware (UEFI, Binwalk/Unblob), packet captures (tshark), EVM bytecode, WebAssembly.
- **Process behaviour** on Linux and macOS: terminal output, interactions and file-system changes captured through a PTY.

Static JavaScript and .NET inspection read the files without running the app; runtime capture runs the target with your user permissions.

**Showcases from the README:**

- **DX-Ball** — followed a sound call into its position-to-pan helper and rebuilt it in C; the reconstruction passes 3,205 cases against the original x86 and reproduces all 63 compiled function bytes.
- **Notion** — traced the Electron clipboard bridge from the renderer through preload and IPC into the main process.
- **TH04** — recovered a bullet-ring angle calculation from 16-bit code of a PC-98 game and compared the rebuilt C++ with the original compiler output.

**A second use: RL environments.** REA can record a web app session, turn its API into tools and export a runnable environment (AgentEnv plus Docker) where an agent practises tasks for reinforcement learning or evaluation, without the original app. It can do the same for a Linux desktop app, driven by screenshots, mouse and keyboard.

**Light on context:** the MCP server advertises compact input schemas and leaves output schemas out of `tools/list` by default (REA validates results itself), to save the agent's context.

### Download or use

```
npx rea-agents setup
```

Choose your agents (Claude Code, Codex, Cursor, Gemini CLI, Grok Build and others), review the proposed changes and approve. Setup registers the MCP server and installs matching workflow instructions, backing up existing config; then restart the agent. Requirements: Node.js 22.x (≥ 22.23.4), 24.x (≥ 24.22.1) or 26.12.1+, plus npm. On Linux, Ghidra, JADX and JavaScript analysis need a procps-compatible `ps`. Run the package download from a trusted folder outside the target project.

Example prompt from the README: "Understand how search works in the Notes app, show me the evidence, and build a similar feature for my project."

From the terminal: `npx -y rea-agents@latest analyze-javascript-application /absolute/path/to/app --json`, or install it globally with `npm install --global rea-agents` and keep it current with `rea update`. The project releases very often and asks you to update before reporting a bug.

## Reasoning for

What I'd use it for: understanding how a feature in a closed desktop or Electron app works before I build my own version, and checking what a binary or an npm package really does. The part I value is the output format, evidence plus limits: an agent's claim about a binary is worth nothing without the addresses and code behind it.

The legal line, from the README: REA is for lawful research, education, interoperability, software preservation, and software you own or are authorised to examine. Commercial engines (IDA Pro, Hopper, JEB) need your own valid licences; REA grants none, and cracked copies are explicitly out.

> [!warning] Install only from the official sources
> The README warns that a similar repository name or a copied README does not make a download official: get REA from github.com/morluto/rea, rea.tools or the `rea-agents` npm package. GitHub search already shows other repositories with the same description. For a tool that runs analysis engines and an MCP server on my machine, a fake copy is a supply-chain risk (see [[AI Agent Security]]).

**Popularity caveat.** On 2026-11-20 the repository showed about 471,000 stars and 115,000 forks seven months after it was created (2026-04-14), several times what [[Ghidra]] (about 101,000) has gathered since 2019. I would not read quality from that number; I'd judge REA by the showcases and my own test.

Checked 2026-11-20: MIT, release rea-agents-6.10.1 on 2026-11-20, pushes daily.

## Alternatives considered

- [[Ghidra]], IDA Pro or Hopper used directly — full control, no agent in between
- IDA's own MCP bridge or a JEB MCP client — REA can call both as providers
- [[Chrome DevTools MCP]] or [[Playwright MCP]] — when only a website's behaviour matters

## Resources

- 🔗 Repo: https://github.com/morluto/rea
- 🔗 Website, guides and showcases: https://rea.tools/
- 🔗 npm: https://www.npmjs.com/package/rea-agents
- 🔗 Installation guide: https://github.com/morluto/rea/blob/main/docs/getting-started/installation.md
- 🔗 Disclaimer: https://github.com/morluto/rea/blob/main/DISCLAIMER.md
- 📖 Related: [[Ghidra]], [[AI Agent Security]], [[Claude Code]], [[AI Tools Map]]

---
Template: [[templates/tool]]
