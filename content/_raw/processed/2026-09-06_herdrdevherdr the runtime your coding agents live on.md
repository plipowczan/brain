---
title: "herdrdev/herdr: the runtime your coding agents live on"
source: "https://github.com/herdrdev/herdr"
author:
published:
created: 2026-09-06
description: "the runtime your coding agents live on. Contribute to herdrdev/herdr development by creating an account on GitHub."
tags:
  - "clippings"
---
## herdr

[![[be703ae2210f70d2931fb5ff9fcaff67_MD5.png]]](https://github.com/herdrdev/herdr/blob/master/assets/logo.png)

[herdr.dev](https://herdr.dev/) · [install](#install) · [quick start](https://herdr.dev/docs/quick-start/) · [docs](https://herdr.dev/docs/)

English · [简体中文](https://github.com/herdrdev/herdr/blob/master/README.zh-CN.md)

---

**the runtime your coding agents live on.**

- **always running** — herdr is a background server; the terminals live inside it. close the lid, drop the network, or restart the machine; agents keep working and sessions come back. reattach from any terminal, or over ssh.
- **never hunt for the stuck one** — every pane is marked working, blocked, or idle. when an agent stops and needs an answer, herdr says so.
- **agent-native** — agents drive herdr through the cli and socket api: they can spawn panes, prompt each other, and wait until another agent is genuinely blocked. [agent skill →](https://herdr.dev/docs/agent-skill/)
- **runs what you already run** — claude code, codex, cursor, opencode, grok and the rest. herdr doesn't wrap or replace them; it owns their terminals.
- **keyboard and mouse, both first-class** — tmux-style prefix keys *and* click, drag, split. pick per moment, not per tool.
- **plugins** — extend panes and workflows. [browse the marketplace →](https://herdr.dev/plugins/)
- **one rust binary, no electron** — runs in whatever terminal you already use.

---

## install

```
curl -fsSL https://herdr.dev/install.sh | sh
```

or `brew install herdr` · `mise use -g herdr` · windows: `powershell -ExecutionPolicy Bypass -c "irm https://herdr.dev/install.ps1 | iex"` · [endpoint-protected Windows](https://herdr.dev/docs/windows-beta/) · [binaries](https://github.com/herdrdev/herdr/releases)

then start it where the work lives:

```
herdr
```

run your agents, split panes, walk away. `ctrl+b q` detaches, `herdr` reattaches. [quick start →](https://herdr.dev/docs/quick-start/)

## docs

everything lives at [herdr.dev/docs](https://herdr.dev/docs/): [quick start](https://herdr.dev/docs/quick-start/) · [concepts](https://herdr.dev/docs/concepts/) · [supported agents](https://herdr.dev/docs/agents/) · [keyboard](https://herdr.dev/docs/keyboard/) · [configuration](https://herdr.dev/docs/configuration/) · [session state](https://herdr.dev/docs/session-state/) · [remote](https://herdr.dev/docs/persistence-remote/) · [integrations](https://herdr.dev/docs/integrations/) · [plugins](https://herdr.dev/docs/plugins/) · [socket api](https://herdr.dev/docs/socket-api/)

## thanks

every past sponsor and backer is listed in [SPONSORS.md](https://github.com/herdrdev/herdr/blob/master/SPONSORS.md) — thank you 🐑

enterprise / partnership: [hey@herdr.dev](mailto:hey@herdr.dev)

## agent instructions

if you are an ai agent helping with this repository, read [`AGENTS.md`](https://github.com/herdrdev/herdr/blob/master/AGENTS.md) before making changes and read [`CONTRIBUTING.md`](https://github.com/herdrdev/herdr/blob/master/CONTRIBUTING.md) before opening issues or PRs.

## development

```
git clone https://github.com/herdrdev/herdr
cd herdr
cargo build --release

just test        # unit tests
just check       # formatting, tests, and maintenance checks
```

## license

Herdr is licensed under the [Apache License 2.0](https://github.com/herdrdev/herdr/blob/master/LICENSE).