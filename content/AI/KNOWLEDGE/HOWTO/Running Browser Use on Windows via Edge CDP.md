---
title: "Running Browser Use on Windows via Edge CDP"
date: 2026-07-10
enableToc: true
openToc: true
tags: ["knowledge", "howto", "ai", "browser", "cdp", "windows", "automation", "claude-code"]
type: knowledge-note
agent-created: true
agent-reviewed: 2026-07-10
summary: "Real Windows bring-up of Browser Use / Browser Harness driven by a coding agent — install via uv, attach to an isolated Edge over CDP when no Chrome exists, install the Claude Code skill"
---

# Running Browser Use on Windows via Edge CDP

## 🗒️ Task

Get [[Browser Harness]] (shipped inside the `browser-use` pip package) running on a Windows machine so a coding agent like [[Claude Code]] can drive a real browser — navigate, scrape, click, screenshot — via CDP heredocs (`browser-use <<'PY' ... PY`). Verified bring-up, 2026-07-10.

The non-obvious part: **the harness attaches to a running Chromium browser over CDP**, and this machine had **no Google Chrome** — only Microsoft Edge. This how-to captures the working path and the gotchas.

> [!note] Machine state changed since the original bring-up (re-checked 2026-08-06)
> Two premises of this how-to have moved on `PLSOFT-PCD1`:
> - **Google Chrome is now installed** (151.0.7922.75), so the Edge-over-CDP path is no longer forced — it is a *choice* (isolated profile, main browser untouched). The Edge route below still works and the daemon was verified attached to Edge, not Chrome.
> - **Versions bumped**: pip `browser-use` **0.13.7**, internal harness **0.1.8**.
> - **New blocker: Smart App Control** now blocks uv's shim `.exe`. See the gotchas section — the CLI itself is fine, only the launcher stub is blocked.

## 🧩 What you actually install

`uv tool install browser-use` installs **`browser-use` (pip v0.13.7)**, whose CLI *is* the harness — `browser-use --doctor` self-identifies as `browser-harness` and the code lives in `site-packages/browser_harness/`. So the [[Browser Use]] framework repo and the [[Browser Harness]] repo have **converged in the pip distribution**: one `pip`/`uv` install gives you the CDP-direct-control harness with a daemon + CLI (`browser-use`, `bu`, `browser-use-tui`).

In this CDP-direct mode **no LLM API key is needed** — the coding agent writes the Python snippets. `ANTHROPIC_API_KEY` etc. are only for the autonomous `Agent(...)` framework loop or the hosted cloud (v4) agent.

## 🛠️ Prerequisites

- Windows 11, `uv` on PATH (`uv 0.11+`), Python 3.11+ (had 3.13).
- A Chromium browser. Google Chrome is ideal; **Microsoft Edge works** identically over CDP (Edge *is* Chromium).
- A coding agent with shell access (Claude Code, Codex).

## 📝 Instructions

### 1. Install the CLI globally

```bash
uv tool install browser-use
uv tool upgrade browser-use   # later: bump in place
browser-use --version      # 0.1.8 (internal harness); pkg = browser-use 0.13.7
browser-use --doctor       # diagnose install / daemon / browser connections
```

Confirm what actually landed (the CLI reports the *harness* version, so check the venv metadata):

```bash
"$USERPROFILE/AppData/Roaming/uv/tools/browser-use/Scripts/python.exe" -c \
  "import importlib.metadata as m; print(m.version('browser-use'), m.version('browser-harness'))"
```

### 2. Give it a browser over CDP

The daemon discovers a browser by reading `DevToolsActivePort` from a set of **standard** profile dirs. Two ways to satisfy it:

- **Chrome, real profile (keeps logins):** open `chrome://inspect/#remote-debugging`, tick *"Allow remote debugging for this browser instance"*, click *Allow*. Keeps your cookies; any local process can then drive the browser while it runs.
- **Isolated Edge (used here — no Chrome installed):** launch a dedicated Edge on a debug port with its own profile, then point the harness at it with `BU_CDP_WS`. Fresh profile (log in again) but fully scriptable and your main browser is untouched.

Because a custom `--user-data-dir` is **not** in the harness's standard search list, auto-discovery fails and you must pass the websocket explicitly via `BU_CDP_WS`.

### 3. Launcher script (idempotent Edge + CDP)

`C:\Users\pawel\browser-use-edge.ps1` — starts an isolated Edge on port 9222 if not already up, prints the `BU_CDP_WS` ws URL:

```powershell
$edge    = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$profile = "C:\Users\pawel\AppData\Local\browser-use-edge"
$port    = 9222
function Get-CdpWs { try { (Invoke-RestMethod "http://127.0.0.1:$port/json/version" -TimeoutSec 2).webSocketDebuggerUrl } catch { $null } }
$ws = $null
foreach ($i in 1..3) { $ws = Get-CdpWs; if ($ws) { break }; Start-Sleep -Milliseconds 400 }
if (-not $ws) {
    Start-Process $edge -ArgumentList "--remote-debugging-port=$port","--user-data-dir=`"$profile`"","--no-first-run","--no-default-browser-check","about:blank"
    foreach ($i in 1..20) { Start-Sleep -Milliseconds 500; $ws = Get-CdpWs; if ($ws) { break } }
}
if (-not $ws) { Write-Error "Edge CDP endpoint not reachable on port $port"; exit 1 }
$env:BU_CDP_WS = $ws
Write-Output $ws
```

### 4. Drive the harness

Bring-up + a command, every session (the ws GUID changes per Edge launch, so re-fetch):

```bash
export BU_CDP_WS=$(powershell.exe -NoProfile -File 'C:\Users\pawel\browser-use-edge.ps1' | tr -d '\r')
browser-use <<'PY'
new_tab("https://example.com")     # FIRST nav must be new_tab, not goto_url
print(page_info())
PY
```

### 5. Core helpers (real, dumped from the harness namespace)

| Group | Helpers |
|-------|---------|
| Navigation | `new_tab(url)` (first), `goto_url`, `list_tabs`, `switch_tab`, `close_tab`, `current_tab` |
| Info | `page_info()`, `capture_screenshot()` |
| Interact | `click_at_xy(x,y)`, `fill_input`, `type_text`, `press_key`, `scroll`, `upload_file` |
| Wait | `wait`, `wait_for_element`, `wait_for_load`, `wait_for_network_idle` |
| Scripting | `js(...)` — run JS in the page, returns a Python object (the scraping workhorse) |
| Daemon | `daemon_alive`, `restart_daemon`, `run_doctor` |
| Cloud | `start_remote_daemon(name)`, `stop_remote_daemon(name)` |

Scrape pattern:

```bash
browser-use <<'PY'
new_tab("https://news.ycombinator.com"); wait_for_load()
titles = js("[...document.querySelectorAll('.titleline > a')].map(a=>a.textContent)")
print(titles)
PY
```

### 6. Install the Claude Code skill

The tool prints its own `SKILL.md` (valid frontmatter). Drop it into a skills dir so the agent auto-reaches for the right workflow:

```bash
browser-use skill > "C:\Users\pawel\.claude\skills\browser-use\SKILL.md"
```

Placed under `~/.claude/skills/` it is **global** (all repos), not repo-scoped. Append a machine addendum documenting the Edge/CDP bring-up above so the skill is accurate here (default `SKILL.md` assumes Chrome). Note: this top-level `SKILL.md` is distinct from the per-site `agent-workspace/domain-skills/` playbooks, which the harness writes for itself — don't hand-author *those*.

## ⚠️ Gotchas (what actually bit)

- **No Chrome ≠ blocked.** Edge (Chromium) attaches over CDP the same way. 99% of sites behave; only aggressive bot-detection may differ from real Chrome.
- **`DevToolsActivePort not found`** with a custom profile dir → the harness only scans standard dirs. Set `BU_CDP_WS` to the ws from `http://127.0.0.1:9222/json/version`.
- **The ws GUID changes every Edge launch** → never hardcode `BU_CDP_WS`; re-run the launcher each session.
- **`browser-use --version` shows the harness version** (`0.1.8`) while the pip package is `0.13.7` — not a broken install. Three numbers coexist: pip `0.13.x`, CLI product name `3.0`, hosted cloud agent `v4`. **There is no pip v4** — 136 PyPI releases, all major `0`. Don't go looking for an upgrade path to "4.0"; `uv tool upgrade browser-use` is it.
- Hung daemon / after a tool update → `browser-use --reload`, then `browser-use --doctor`.
- **`An Application Control policy has blocked this file`** (or `Permission denied` from bash) when running `browser-use` → **Smart App Control** is enforcing. Check with:
  ```powershell
  (Get-ItemProperty 'HKLM:\SYSTEM\CurrentControlSet\Control\CI\Policy').VerifiedAndReputablePolicyState  # 1 = on
  ```
  uv writes small **unsigned shim `.exe`s** into `%USERPROFILE%\.local\bin`, and SAC blocks unsigned binaries without established reputation — including after every `uv tool upgrade`, which rewrites them. The Python package is untouched; only the launcher stub is blocked. Options, least invasive first:
  1. **Call the tool venv's python directly** — `python.exe` is already trusted, so nothing is bypassed at the binary level:
     ```bash
     "$USERPROFILE/AppData/Roaming/uv/tools/browser-use/Scripts/python.exe" \
       -c 'from browser_use.cli import main; main()' --doctor
     ```
     Wrapped as `C:\Users\pawel\browser-use.ps1` — sibling to the Edge launcher `browser-use-edge.ps1`. **Verified 2026-08-06** across all three call shapes: `--doctor` (args), single-line stdin, and multi-line bash heredoc.
     ```bash
     powershell.exe -NoProfile -File 'C:\Users\pawel\browser-use.ps1' <<'PY'
     print(page_info())
     PY
     ```
  2. **Allowlist the shims** in the Smart App Control / WDAC policy — the correct fix if this box is policy-managed.
  3. **Disable Smart App Control** — ⚠️ on Windows 11 this is **one-way**: re-enabling requires a Windows reset. Weigh it before touching it.
- **Agent-authored `.ps1` dies with `The string is missing the terminator`** → **encoding, not logic.** `powershell.exe` (Windows PowerShell 5.1, still the default for `-File`) reads a BOM-less `.ps1` as **ANSI**, not UTF-8. An em dash written by an agent becomes `â€"`, whose stray quote-like bytes break string parsing and cascade into `Missing closing '}'`. Bit exactly this while writing the wrapper above. Two fixes: **keep agent-written `.ps1` ASCII-only** (chosen here — cheapest, no encoding assumptions), or save as UTF-8 **with BOM**. Note `pwsh` (PowerShell 7) assumes UTF-8 and would have parsed it fine — so this only shows up when something invokes the file via `powershell.exe`.

## Outcome

A coding agent can drive an isolated Edge over CDP with one `export` + heredoc. Verified end-to-end: navigated example.com and Hacker News, extracted headlines via `js()`, all through the isolated Edge with the main browser untouched. Global `browser-use` Claude Code skill auto-loads.

## 📖 Further reading

- [[Browser Harness]] — the tool this how-to operates (self-healing CDP harness)
- [[Browser Use]] — umbrella framework (the `Agent(...)` loop + cloud tier)
- [[Wiring Serena into a Codebase]] — sibling real-world Windows agent-tool bring-up with its own gotchas
- [[Chrome DevTools MCP]] — alternative "give the agent a live Chrome" path, via MCP
- [[Claude Code]] — host agent
- Repo: https://github.com/browser-use/browser-harness · Docs: https://docs.browser-use.com/

---
Template: [[templates/knowledge_note_how_to]]
