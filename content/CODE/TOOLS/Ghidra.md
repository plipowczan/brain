---
title: "Ghidra"
date: 2026-11-20
enableToc: true
openToc: true
tags: ["tool", "reverse-engineering", "security", "decompiler", "java", "python", "open-source", "apache-2.0"]
type: tool
sources: ["_raw/processed/2026-11-20_NationalSecurityAgencyghidra Ghidra is a software reverse engineering (SRE) framework.md"]
agent-created: true
summary: "NSA's open-source software reverse-engineering suite — disassembly, decompilation, graphing and Java/Python scripting for compiled code across many CPUs and executable formats, interactive or headless; Apache-2.0, JDK 25"
repo: "https://github.com/NationalSecurityAgency/ghidra"
---

# Ghidra

🗒️ [NationalSecurityAgency/ghidra](https://github.com/NationalSecurityAgency/ghidra) is a software reverse-engineering (SRE) framework built and maintained by the NSA's Research Directorate and published as open source. It analyses compiled code on Windows, macOS and Linux: disassembly, assembly, decompilation, graphing and scripting, plus hundreds of smaller features. It supports a wide range of processor instruction sets and executable formats and runs either interactively or in automated (headless) mode. You extend it with your own scripts and modules in Java or Python.

The NSA built it to handle scaling and teamwork on large reverse-engineering jobs, and uses it to analyse malicious code and look for vulnerabilities in networks and systems.

## Links

### Description

🧩 Features:

- **Disassembler and decompiler** — from machine code to assembly and C-like pseudocode
- **Graphing** — control-flow and call graphs
- **Scripting and extensions** — Java or Python ([PyGhidra](https://github.com/NationalSecurityAgency/ghidra/blob/master/Ghidra/Features/PyGhidra/README.md)); write them in Eclipse with the GhidraDev plugin, or in VS Code (Script Manager icon, or CodeBrowser → Tools → Create VSCode Module project)
- **Headless mode** — analysis without the GUI, which is what lets agent tools drive it
- **Teaming** — designed for several analysts working on one large target

> [!warning] Security advisories
> Some Ghidra versions have known security vulnerabilities. Read the [Security Advisories](https://github.com/NationalSecurityAgency/ghidra/security/advisories) before installing. Ghidra is used on untrusted binaries, so this matters more than for an ordinary tool.

### Download or use

1. Install JDK 25, 64-bit (for example [Temurin](https://adoptium.net/temurin/releases)).
2. Download the release file `ghidra_<version>_<release>_<date>.zip` from [Releases](https://github.com/NationalSecurityAgency/ghidra/releases) → Assets. The "Source Code" archives are the wrong file.
3. Extract it into a fresh folder, never on top of an existing installation.
4. Run `ghidraRun` (`ghidraRun.bat` on Windows), or PyGhidra with `support/pyghidraRun` (`support\pyghidraRun.bat`).

Latest release on 2026-11-20: Ghidra 12.2 (2026-10-22).

**Build from source:** JDK 25, Gradle 9.1+ (or the wrapper), Python 3.9–3.15 with pip, GCC or Clang and make on Linux/macOS, Visual Studio 2017+ or the C++ Build Tools (MSVC, Windows SDK, C++ ATL) on Windows. Then `gradle -I gradle/support/fetchDependencies.gradle` and `gradle buildGhidra`; the build lands in `build/dist/`. To work on Ghidra itself the project recommends Eclipse: `gradle prepdev eclipse buildNatives`, then import the projects.

## Reasoning for

I don't reverse-engineer software day to day, so Ghidra is not a tool I'd open by hand often. It is in the vault as the free engine that agent tools drive: [[REA]] can hand native-binary analysis to an existing Ghidra installation (next to Hopper, IDA and Kuna), and the agent gets back pseudocode, assembly, strings and cross-references without me learning the GUI. The cases where I'd want that: understanding how a feature of a closed desktop app works, checking what a third-party library or binary really calls, or looking at a suspicious executable.

## Alternatives considered

- **IDA Pro / Hex-Rays** — the commercial standard disassembler and decompiler
- **Hopper** — commercial disassembler for macOS and Linux; REA can install it after approval
- **Rizin, GNU objdump** — lighter command-line disassemblers (REA supports both for offline inspection)
- [[REA]] — not an alternative but an agent layer on top of Ghidra and the others

## Resources

- 🔗 Repo: https://github.com/NationalSecurityAgency/ghidra
- 🔗 Releases: https://github.com/NationalSecurityAgency/ghidra/releases
- 🔗 Getting Started: https://github.com/NationalSecurityAgency/ghidra/blob/master/GhidraDocs/GettingStarted.md
- 🔗 Developer's Guide: https://github.com/NationalSecurityAgency/ghidra/blob/master/DevGuide.md
- 🔗 Security advisories: https://github.com/NationalSecurityAgency/ghidra/security/advisories
- 📖 Related: [[REA]]

---
Template: [[templates/tool]]
