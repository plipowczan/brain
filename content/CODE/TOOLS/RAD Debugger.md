---
title: "RAD Debugger"
date: 2026-11-01
enableToc: true
openToc: true
tags: ["tool", "debugging", "windows", "c", "native", "open-source", "linker"]
type: tool
source: "_raw/processed/2026-11-01_EpicGamesraddebugger A native, user-mode, multi-process, graphical debugger.md"
agent-created: true
summary: "EpicGames/raddebugger — native user-mode multi-process graphical debugger for Windows x64 (alpha), plus the RDI debug-info format and a very fast RAD Linker"
---

# RAD Debugger

## 🚀 Description

[EpicGames/raddebugger](https://github.com/EpicGames/raddebugger) is a **native, user-mode, multi-process, graphical debugger**. Today it supports local-machine **Windows x64 debugging with PDBs**; Linux and other ports are planned. It is in **alpha** — expect bugs and report them with dumps.

Three technologies live in the repo:

1. **The debugger** (`raddbg.exe`)
2. **RAD Debug Info (RDI)** — a custom debug-info format the debugger parses instead of PDB/DWARF. PDB (and later DWARF) is converted into RDI; the format is specified in code under `src/lib_rdi`. The `radbin` utility converts native formats to RDI and dumps their contents
3. **RAD Linker** — a performance linker for x64 PE/COFF, MSVC-command-line compatible, aimed at huge projects (multi-gigabyte debug info). About 50% faster link times in their tests, another ~25% with `/rad_large_pages`; thread count limited via `/rad_workers`. No link-time optimization yet

## Build

Windows needs MSVC (Build Tools 2017 or later) with the Windows SDK, or Clang on top of the SDK. In an MSVC-equipped terminal run `build` (debug) or `build release`; `build radlink release` and `build radbin release` build the linker and utility. The repo is also developed on Linux x64.

## Reasoning for

Not something I use day to day — my work is mostly JS/TS agents, where VS Code and browser devtools cover debugging. I keep it as a reference for native Windows work and as an example of a vendor betting on its own debug-info format. Worth remembering if I ever debug C/C++ or Rust binaries on Windows without a full Visual Studio.

## Alternatives considered

- [[Visual Studio Code]] with the C++ debugger extensions — the default for me
- WinDbg and Visual Studio's debugger — mature, heavier

## 🔗 Links

- Repo: https://github.com/EpicGames/raddebugger

---
Template: [[templates/tool]]
