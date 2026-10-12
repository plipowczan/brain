---
title: "Omarchy"
date: 2026-10-12
enableToc: true
openToc: true
tags: ["tool", "linux", "omarchy", "dhh", "developer-tools", "agentic", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-10-12_omacomomarchy Beautiful, Modern & Opinionated Linux.md"
agent-created: true
summary: "omacom/omarchy — DHH's 'beautiful, fun & agentic' opinionated Linux distribution, MIT, documented by a 51-chapter manual in the repo; clipped README is only the manual's table of contents"
---
# Omarchy

🗒️ **[omacom/omarchy](https://github.com/omacom/omarchy)** is, in its own README's words, "a beautiful, fun & agentic Linux distribution by DHH" (David Heinemeier Hansson). Site: [omarchy.org](https://omarchy.org/). MIT licensed. The repo's `manual/` folder (branch `quattro`) is the authoritative documentation.

⚠️ **What this note is based on:** only the repo README, which is a table of contents for the manual plus a one-line pitch. Nothing below describes how the system actually behaves. Details live in the manual chapters linked under Resources.

## Links
### Description
🧩 The manual's 51 chapters are a decent map of what the distro bundles:

- **The basics (1 to 14):** getting started, "coming from Mac or Windows", navigation, the top bar, themes, hotkeys, a **unified clipboard with history**, reminders, notices, **text extraction and dictation**, screenshots and recording, toggles / idle / screensaver, and an `omarchy` **CLI**.
- **The applications (15 to 29):** terminal, Neovim, an **AI** chapter, development tools, shell tools and functions, TUIs, GUIs, browsers, commercial apps, web apps, gaming, filling out PDFs, a **Windows VM**, other packages.
- **Configuration (30 to 43):** updates, dotfiles, shell plugins, monitors, input devices, networking, system sleep, hardware authentication, fonts, backgrounds, prompt, branding, common tweaks, and **making your own theme**.
- **The rest (44 to 51):** Mac support, troubleshooting, FAQ, **system snapshots**, security, "Omarchy on…", dual-boot install and **unattended installs**.

### Download or use
#todo/complete Install media and supported hardware are in the manual's *Getting Started* chapter; not in the clipped README. Dual-boot and unattended installs have their own chapters (50, 51).

## Reasoning for
Tracking only; nothing here is something I run (my daily machine is Windows 11). Two reasons it is worth a note anyway:

- It is a high-profile example of an **opinionated, batteries-included dev environment** shipped as an OS, with "agentic" as a headline word. The manual's **AI** chapter is the first place to look for what that means in practice.
- The **unattended-install**, **dotfiles** and **system-snapshot** chapters are the same concern as my [[Machine Setup Manifest]]: making a whole machine reproducible.

#todo/complete Read the AI chapter (`manual/17-ai.md`) and the base-system details before judging "agentic".

## Alternatives considered
- **[[Windows]]** (current): the platform I actually use. Omarchy's own manual has a Windows VM chapter (28) for running Windows apps on top of it.
- **[[Agent Zero]]**: a Linux-native agentic framework rather than a distribution; the "agentic Linux" idea from the software side.
- Other opinionated dev-environment layers (dotfile managers, Nix setups) trade the polished out-of-the-box experience for portability.

## Resources
- 🔗 Repo: [github.com/omacom/omarchy](https://github.com/omacom/omarchy) · [omarchy.org](https://omarchy.org/) · [manual (branch `quattro`)](https://github.com/omacom/omarchy/blob/quattro/manual)
- 📖 Related: [[Machine Setup Manifest]] · [[Windows]] · [[Agent Zero]]

---
Template: [[templates/tool]]
