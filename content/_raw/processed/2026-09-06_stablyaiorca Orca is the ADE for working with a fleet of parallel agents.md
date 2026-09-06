---
title: "stablyai/orca: Orca is the ADE for working with a fleet of parallel agents. Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime."
source: "https://github.com/stablyai/orca"
author:
published:
created: 2026-09-06
description: "Orca is the ADE for working with a fleet of parallel agents. Run any coding agent with your own subscription. Available on desktop, mobile and remote runtime. - stablyai/orca"
tags:
  - "clippings"
---
## Orca

<sub><a href="https://github.com/stablyai/orca/blob/main/docs/readme/README.zh-CN.md">中文</a> · <a href="https://github.com/stablyai/orca/blob/main/docs/readme/README.ja.md">日本語</a> · <a href="https://github.com/stablyai/orca/blob/main/docs/readme/README.ko.md">한국어</a> · <a href="https://github.com/stablyai/orca/blob/main/docs/readme/README.es.md">Español</a> · <a href="https://github.com/stablyai/orca/blob/main/docs/readme/README.fr.md">Français</a> · <a href="https://github.com/stablyai/orca/blob/main/docs/readme/README.pt.md">Português</a></sub>

**The AI Orchestrator for 100x builders.**  
Run Codex, ClaudeCode, OpenCode or Pi side-by-side — each in its own worktree, tracked in one place.

### Download Orca

[![[cabfc4fea9fd4b504c98fe66233a1447_MD5.jpg]]](https://github.com/stablyai/orca/blob/main/docs/assets/readme-hero.jpg)

## Features

| ### Mobile Companion  Monitor and steer your agents from your phone — get notified when an agent finishes and send follow-ups from anywhere.  [iOS App Store](https://apps.apple.com/us/app/orca-ide/id6766130217) · [TestFlight](https://testflight.apple.com/join/YjeGMQBA) · [Android APK 0.0.47](https://github.com/stablyai/orca/releases/download/mobile-android-v0.0.47/app-release.apk) · [Docs →](https://www.onorca.dev/docs/mobile) | [  ![[0c3b31e11dbf695640b5354f3152e993_MD5.gif]]  ](https://www.onorca.dev/docs/mobile) |
| --- | --- |
| ### Parallel Worktrees  Fan one prompt across five agents, each in its own isolated git worktree — compare the results and merge the winner.  [Docs →](https://www.onorca.dev/docs/model/worktrees) | [  ![[75ed1b28b199991afa8ab51d176c6db3_MD5.gif]]  ](https://www.onorca.dev/docs/model/worktrees) |
| ### Terminal Splits  Ghostty-class terminals with WebGL rendering, infinite splits, and scrollback that survives restarts.  [Docs →](https://www.onorca.dev/docs/terminal) | [  ![[2ae177cc598c04bb690ae9c8908de32c_MD5.gif]]  ](https://www.onorca.dev/docs/terminal) |
| ### Design Mode  Click any UI element in a real Chromium window to send its HTML, CSS, and a cropped screenshot straight into your agent's prompt.  [Docs →](https://www.onorca.dev/docs/browser/design-mode) | [  ![[2c4f6279fe3abbc400cd780fb45f1892_MD5.gif]]  ](https://www.onorca.dev/docs/browser/design-mode) |
| ### GitHub & Linear, Native  Browse PRs, issues, and project boards in-app — open a worktree from any task and review without a context switch.  [Docs →](https://www.onorca.dev/docs/review/linear) | [  ![[f25c2314efa6275def179c697a46ada6_MD5.gif]]  ](https://www.onorca.dev/docs/review/linear) |
| ### SSH Worktrees  Run agents on a beefy remote box with full file editing, git, and terminals — auto-reconnect and port forwarding included.  [Docs →](https://www.onorca.dev/docs/ssh) | [  ![[3aae83eed292dce0baad21902c2221f8_MD5.gif]]  ](https://www.onorca.dev/docs/ssh) |
| ### Annotate AI Diffs  Drop comments on any diff line and ship them back to the agent — review, edit, and commit without leaving Orca.  [Docs →](https://www.onorca.dev/docs/review/annotate-ai-diff) | [  ![[c8b9af9d25b2908254dffa6015cb77a1_MD5.gif]]  ](https://www.onorca.dev/docs/review/annotate-ai-diff) |
| ### Drag Files to Agents  VS Code's editor with autosave everywhere — drag files or images straight into an agent prompt.  [Docs →](https://www.onorca.dev/docs/editing/file-explorer) | [  ![[79aa4c652bb179fada2d0bb00af1db28_MD5.gif]]  ](https://www.onorca.dev/docs/editing/file-explorer) |
| ### Orca CLI  Agents drive Orca too — script every workflow with `orca worktree create`, `snapshot`, `click`, and `fill`.  [Docs →](https://www.onorca.dev/docs/cli/overview) | [  ![[1d38576ea4f04032ce09738d4b99bdfa_MD5.gif]]  ](https://www.onorca.dev/docs/cli/overview) |

**Also in the box:**

- **[Quick open](https://www.onorca.dev/docs/model/quick-open)** — Search across worktrees, files, agents, commands, and repo context without leaving your flow.
- **[Account switcher & usage tracking](https://www.onorca.dev/docs/agents/usage-tracking)** — See Claude and Codex usage and rate-limit resets, and hot-swap accounts without re-logging in.
- **[Rich repo previews](https://www.onorca.dev/docs/editing/markdown)** — Preview Markdown, images, PDFs, and repo docs in the workspace.
- **[Computer Use](https://www.onorca.dev/docs/cli/computer-use)** — Let agents operate desktop apps and visible UI when a workflow needs real interaction.
- **[Notifications and unread state](https://www.onorca.dev/docs/notifications)** — Know when an agent finishes or needs attention, then mark threads unread to come back later.
- **And many, many more** — we ship daily, so this list is perpetually behind. The [changelog](https://github.com/stablyai/orca/releases) is the real feature list.

---

## Supported Agents

Works with **any CLI agent** — if it runs in a terminal, it runs in Orca.

[Claude Code](https://docs.anthropic.com/claude/docs/claude-code) [Codex](https://github.com/openai/codex) [Grok](https://x.ai/cli) [Cursor](https://cursor.com/cli) [GitHub Copilot](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli) [OpenCode](https://opencode.ai/docs/cli/) [MiMo Code](https://mimo.xiaomi.com/coder) [Amp](https://ampcode.com/manual#install) [OpenClaude](https://openclaude.gitlawb.com/) [Antigravity](https://antigravity.google/docs/cli-overview) [Pi](https://pi.dev/) [oh-my-pi](https://omp.sh/) [Hermes Agent](https://hermes-agent.nousresearch.com/docs/) [Devin](https://devin.ai/cli) [Goose](https://block.github.io/goose/docs/quickstart/) [Auggie](https://docs.augmentcode.com/cli/overview) [Autohand Code](https://github.com/autohandai/code-cli) [Charm](https://github.com/charmbracelet/crush) [Cline](https://docs.cline.bot/cline-cli/overview) [Codebuff](https://www.codebuff.com/docs/help/quick-start) [Command Code](https://commandcode.ai/docs/quickstart) [Continue](https://docs.continue.dev/guides/cli) [Droid](https://docs.factory.ai/cli/getting-started/quickstart) [Kilocode](https://kilo.ai/docs/cli) [Kimi](https://www.kimi.com/code/docs/en/kimi-code-cli/getting-started.html) [Kiro](https://kiro.dev/docs/cli/) [Mistral Vibe](https://github.com/mistralai/mistral-vibe) [Qwen Code](https://github.com/QwenLM/qwen-code) [Rovo Dev](https://support.atlassian.com/rovo/docs/install-and-run-rovo-dev-cli-on-your-device/) \+ any CLI agent

---

## Install

### Desktop — macOS, Windows, Linux

- **[Download from onOrca.dev](https://onorca.dev/download)**
- Or grab a build directly: [macOS Apple Silicon](https://github.com/stablyai/orca/releases/latest/download/orca-macos-arm64.dmg) · [macOS Intel](https://github.com/stablyai/orca/releases/latest/download/orca-macos-x64.dmg) · [Windows (.exe)](https://github.com/stablyai/orca/releases/latest/download/orca-windows-setup.exe) · [Linux AppImage](https://github.com/stablyai/orca/releases/latest/download/orca-linux.AppImage) · [All builds](https://github.com/stablyai/orca/releases/latest)
- Running `orca serve` on a headless Linux server? See the [headless Linux server guide](https://github.com/stablyai/orca/blob/main/docs/reference/headless-linux-server.md).

*Or via a package manager:*

```
# macOS (Homebrew)
brew install --cask stablyai/orca/orca

# Arch Linux (AUR) — or stably-orca-git to build from source
yay -S stably-orca-bin
```

### Mobile Companion — iOS, Android

Pair with your desktop app to monitor and steer your agents from your phone.

- **iOS:** [Download on the App Store](https://apps.apple.com/us/app/orca-ide/id6766130217) or [join TestFlight](https://testflight.apple.com/join/YjeGMQBA)
- **Android:** [Download APK 0.0.47](https://github.com/stablyai/orca/releases/download/mobile-android-v0.0.47/app-release.apk) · [Install guide](https://www.onorca.dev/docs/android-apk)

---

## Community & Support

- **Discord:** Join the community on **[Discord](https://discord.gg/fzjDKHxv8Q)**.
- **Twitter / X:** Follow **[@orca\_build](https://x.com/orca_build)** for updates and announcements.
- **WeChat:** Scan to join the Orca community WeChat group 8. Group 8 may be full; if so, scan the Group 9 QR code instead.
	[![[4706e7b8da7bb9783c8f583c48dfd728_MD5.jpg]]](https://github.com/stablyai/orca/blob/main/docs/assets/wechat-qr-group8.jpg) [![[f8b8210806f3baa6db95b42eddeb8ac2_MD5.jpg]]](https://github.com/stablyai/orca/blob/main/docs/assets/wechat-qr-group9.jpg)
- **Feedback & Ideas:** We ship fast. Missing something? [Request a new feature](https://github.com/stablyai/orca/issues).
- **Privacy:** See the [privacy & telemetry docs](https://www.onorca.dev/docs/telemetry) for what anonymous usage data Orca collects and how to opt out.
- **Show Support:** [Star](https://github.com/stablyai/orca) this repo to follow along with our daily ships.

---

## Developing

Want to contribute or run locally? See our [CONTRIBUTING.md](https://github.com/stablyai/orca/blob/main/.github/CONTRIBUTING.md) guide.

The relay that pairs the mobile app with a desktop host is also in this repository under [`cloud/`](https://github.com/stablyai/orca/blob/main/cloud/README.md), with a separate pnpm workspace and setup guide.

[![[b9299f28f0f65c4e39630699ad8fda76_MD5.svg]]](https://github.com/stablyai/orca/graphs/contributors)

[![[a837e9bf4df774805ea2bec6e264a6bc_MD5.png]]](https://github.com/stablyai/orca/blob/main/docs/assets/star-history.png)

## Signed Builds

Windows code signing sponored/provided by [SignPath.io](https://signpath.io/), certificate by [SignPath Foundation](https://signpath.org/).

## License

Orca is free and open source under the [MIT License](https://github.com/stablyai/orca/blob/main/LICENSE).