---
title: "Machine Setup Manifest"
date: 2026-07-11
enableToc: true
openToc: true
tags: ["knowledge", "howto", "ai", "claude-code", "agent-skills", "setup", "environment", "sync", "windows", "mcp"]
type: knowledge-note
agent-created: true
agent-reviewed: 2026-07-13
summary: "Canonical unified desired-state manifest of Claude Code plugins, agent skills, CLI tools, MCP servers and runtimes across all my machines — say 'install from Machine Setup Manifest' and every tool gets reinstalled"
---

# Machine Setup Manifest

## 🗒️ What this is

The **single source of truth** for the agent/dev tooling that should exist on every machine I work on: Claude Code plugins, agent skills, CLI tools, MCP servers, and their runtime prerequisites.

**How to use it:** point the agent at this note — *"install everything from [[Machine Setup Manifest]]"* — and it walks §0→§6 in order, reinstalling anything missing. No more wondering why a skill/tool exists on one box but not another.

> **One unified desired state** across all machines (decided 2026-07-12). Not per-machine reality — §7 tracks which machine is synced to which date and any per-machine carve-outs. Reconciled against the real box **PLSOFT-PCD1** (Windows 11 Pro, build 26200) on 2026-07-12.
>
> Version numbers below are **reference/minimums, not hard pins** — machines legitimately run different patch levels. Only pin where compatibility breaks (e.g. npm 12 needs Node ≥22.22.2).

---

## §0 — Runtimes & prerequisites (install FIRST)

Everything below depends on these. Install via `winget` / `choco` on Windows.

| Tool | Min / ref | This box (PLSOFT-PCD1) | Install (Windows) |
|------|-----------|------------------------|-------------------|
| **Node.js** | ≥22.22.2 (LTS or current) | **24.18.0** via `nvm4w` (`C:\nvm4w\nodejs`) | `winget install OpenJS.NodeJS` — but this box manages Node with **nvm4w** + **fnm** (see §7 cleanup #todo) |
| **npm** | ≥11 (12 needs Node ≥22.22.2) | **11.16.0** | ships with Node; optional bump `npm i -g npm@latest` |
| **Python** | 3.11–3.13 | **3.13.13** primary, +3.12 +3.11 (`py --list`) | `winget install Python.Python.3.13` (keep 3.11/3.12 too) |
| **uv** | ≥0.9 | **0.11.15** | `winget install astral-sh.uv` |
| **git** | ≥2.49 | **2.54.0** | `winget install Git.Git` |
| **gh** (GitHub CLI) | ≥2.87 | **2.92.0** | `winget install GitHub.cli` → `gh auth login` |
| **ffmpeg** | ≥8.0 | **8.1.2** (gyan full build) | `choco install ffmpeg` |
| **yt-dlp** | latest | **2026.07.04** | `yt-dlp.exe` on PATH (`…\Python313\Scripts`, pip-provided). Update with `python -m pip install -U yt-dlp` — NOT `yt-dlp -U` (errors on pip installs). |
| **scoop** | — | **installed** (2026-07-13) | `~\scoop\shims` on PATH. Backs `supabase` (§4). Update apps: `scoop update *`. See [scoop.sh](https://scoop.sh) |

---

## §1 — Claude Code plugins

Add each marketplace once, then install its plugins. `claude plugin install <plugin>@<marketplace>` works **headless from the shell** (auto-enables at user scope) — no need for the interactive `/plugin` TUI.

### Marketplaces
```
# claude-plugins-official is built in
/plugin marketplace add anthropics/skills                 # → "anthropic-agent-skills"
/plugin marketplace add kepano/obsidian-skills            # → "obsidian-skills"
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin marketplace add openai/codex-plugin-cc            # → "openai-codex"
/plugin marketplace add AgriciDaniel/claude-seo           # → "agricidaniel-seo"
/plugin marketplace add getsentry/sentry-mcp
/plugin marketplace add 200iqlabs/shared-skills
/plugin marketplace add JuliusBrussee/caveman
# personal/project marketplace (git, autoUpdate): plsoft-vsoft-marketplace
#   git: https://github.com/plipowczan/plsoft-vsoft-agent.git
```

### Plugins (user scope — sync everywhere) — 30 enabled
```
# from claude-plugins-official
claude plugin install superpowers@claude-plugins-official
claude plugin install frontend-design@claude-plugins-official
claude plugin install context7@claude-plugins-official
claude plugin install code-review@claude-plugins-official
claude plugin install typescript-lsp@claude-plugins-official
claude plugin install pyright-lsp@claude-plugins-official
claude plugin install claude-md-management@claude-plugins-official
claude plugin install security-guidance@claude-plugins-official
claude plugin install commit-commands@claude-plugins-official
claude plugin install skill-creator@claude-plugins-official
claude plugin install vercel@claude-plugins-official
claude plugin install github@claude-plugins-official
claude plugin install playwright@claude-plugins-official
claude plugin install chrome-devtools-mcp@claude-plugins-official
claude plugin install sentry@claude-plugins-official
claude plugin install cloudflare@claude-plugins-official
claude plugin install feature-dev@claude-plugins-official
claude plugin install supabase@claude-plugins-official
claude plugin install stripe@claude-plugins-official
claude plugin install plugin-dev@claude-plugins-official
claude plugin install pr-review-toolkit@claude-plugins-official
claude plugin install claude-code-setup@claude-plugins-official
claude plugin install explanatory-output-style@claude-plugins-official   # canonical output style (§6)
# from other marketplaces
claude plugin install document-skills@anthropic-agent-skills
claude plugin install obsidian@obsidian-skills
claude plugin install ui-ux-pro-max@ui-ux-pro-max-skill
claude plugin install codex@openai-codex           # needs the codex CLI binary too (§4)
claude plugin install claude-seo@agricidaniel-seo
claude plugin install sentry-mcp@sentry-mcp
claude plugin install caveman@caveman
```

**30 user-scope plugins.** `context7`, `playwright`, `chrome-devtools-mcp`, `sentry`, `sentry-mcp`, `github`, `vercel`, `supabase`, `cloudflare` each also register an MCP server (see §5).

> **Output style:** manifest uses **`explanatory-output-style`** (canonical as of 2026-07-12), NOT `learning-output-style`. See §6.

---

## §2 — Agent Skills (`npx skills add`)

Standalone skills, symlinked into `~/.claude/skills` (and `~/.agents/skills`) by the Agent Skills CLI. Source-of-truth lockfile: `~/.agents/.skill-lock.json`.

```
npx skills add bradautomates/claude-video -g     # → skill "watch" ([[Claude Video]])
npx skills add vercel-labs/skills -g             # → find-skills
npx skills add vercel-labs/agent-skills -g       # → web-design-guidelines, writing-guidelines, vercel-* patterns, deploy-to-vercel
npx skills add Omerr/claude-skills -g            # → create-marp-deck
npx skills add firecrawl/cli -g                  # → firecrawl + 6 sub-skills (agent/crawl/download/map/scrape/search)
npx skills add heygen-com/hyperframes -g         # → hyperframes + family (animation/cli/core/creative/keyframes/registry) + media-use
```

- **notebooklm** — NOT installed this way; ships with the uv tool via `notebooklm skill install` (see §3).
- **Additional local skills present on this box** (source varies — #todo/complete confirm provenance): `browser-use` ([[Browser Use]] uv tool, §3), `graphify`, `uxruler`, `prd` / `to-prd`, `review-fix`, `review-loop`, `prepare-openspec-goal`. Some likely come from the `plsoft-vsoft` marketplace or manual drops.

---

## §3 — uv tools (Python CLIs)

```
# NotebookLM
uv tool install "notebooklm-py[browser]"         # → CLI "notebooklm" ([[NotebookLM-py]]) v0.7.3
notebooklm skill install                         # installs the notebooklm agent skill into ~/.claude/skills + ~/.agents/skills
"$(uv tool dir)/notebooklm-py/Scripts/playwright.exe" install chromium   # bundled venv browser binary (Windows)
notebooklm login                                 # interactive Google sign-in — run by the user when needed
notebooklm auth check --test --json              # expect "status": "ok"

# Browser automation ([[Browser Use]]) — driven via isolated Edge CDP; launcher C:\Users\pawel\browser-use-edge.ps1
uv tool install browser-use                       # v0.13.7 → CLI: browser-use / bu / browser-use-tui
# ⚠️ Smart App Control blocks uv's unsigned shim .exe after every install/upgrade.
# Workaround wrapper: C:\Users\pawel\browser-use.ps1 (verified 2026-08-06: args + stdin + heredoc)
# Full context: [[Running Browser Use on Windows via Edge CDP]] § Gotchas

# Serena (semantic code MCP + agent)
uv tool install serena-agent                      # v1.5.3 → serena / serena-agent / serena-hooks (also an MCP server, §5)
```

---

## §4 — npm global CLIs

```
npm i -g @github/copilot @google/gemini-cli @marp-team/marp-cli @openai/codex \
  @sentry/cli firecrawl-cli nano-banana-mcp openai vercel @fission-ai/openspec
```

| Package | Version (ref) | Notes |
|---------|---------------|-------|
| `@fission-ai/openspec` | 1.6.0 | OpenSpec CLI |
| `@github/copilot` | 1.x | Copilot CLI — ⚠️ on this box `copilot` on PATH resolves to the **VS Code** copilot-chat CLI (PATH shadow); the npm one is present but shadowed. #todo/complete |
| `@google/gemini-cli` | 0.50.0 | Gemini CLI — needs key |
| `@marp-team/marp-cli` | 4.x | [[Marp CLI]] — deck export |
| `@openai/codex` | 0.144.1 | Codex CLI — **required binary** for the `codex@openai-codex` plugin (§1) |
| `@sentry/cli` | 3.6.0 | Sentry releases — postinstall was skipped by npm allow-scripts guard; run `npm approve-scripts @sentry/cli` if the binary is missing |
| `firecrawl-cli` | 1.19.x | backs the [[Firecrawl]] skills (§2) |
| `nano-banana-mcp` | 1.0.3 | image-gen MCP |
| `openai` | 6.x | OpenAI SDK/CLI |
| `vercel` | 55.0.0 | Vercel CLI — `vercel login` |
| `pnpm` | 10.33.0 | **via corepack** (`C:\nvm4w\nodejs\pnpm.ps1`), NOT an npm global on this box — leave as-is |

> npm bulk installs trigger a **`npm warn allow-scripts`** guard (postinstall scripts blocked): `@sentry/cli`, `@github/keytar`, `esbuild`, `protobufjs`, `@fission-ai/openspec`. If a CLI misbehaves, run `npm approve-scripts <pkg>` to complete its postinstall.

### Standalone CLIs (outside npm)
- **supabase** CLI **2.109.1** — installed via **scoop**: `scoop install supabase` (npm global install is deprecated for Supabase; needs [scoop](https://scoop.sh), §0). Complements the `supabase` plugin (§1) + MCP (§5). Update: `scoop update supabase`.

---

## §5 — MCP servers

| Server | Scope | Provided by | Status on this box |
|--------|-------|-------------|--------------------|
| `context7` | plugin | context7 plugin | ✔ connected |
| `playwright` | plugin | playwright plugin | ✔ connected |
| `chrome-devtools` | plugin | chrome-devtools-mcp plugin | ✔ connected |
| `sentry` / `sentry-mcp` | plugin | sentry / sentry-mcp plugins | ✔ connected |
| `vercel` | plugin | vercel plugin | ! needs `vercel login` |
| `github` | plugin | github plugin | ✘ failing to connect (#todo/complete — re-auth) |
| `cloudflare-*` | plugin | cloudflare plugin | docs ✔; api/bindings/builds/observability ! need auth |
| `supabase` | plugin | supabase plugin | token (after §4 install) |
| `beeper` | user (`~/.claude.json`) | custom | ✔ connected — messaging (http://127.0.0.1:23373) |
| `serena` | user | `serena-agent` uv tool (§3) | ✔ connected — semantic code nav |
| `perplexity` | project | custom | needs API key (only in its project) |
| `claude-in-chrome` | Chrome extension | Claude in Chrome | browser extension, not a CLI |

### Account-level remote MCP (claude.ai connectors — signed in via web/desktop, shared across sessions)
- **Sentry** · **inFakt** (accounting) · **Google Drive** · **Google Calendar** · **Gmail** · **ClickUp** — all ✔ connected. These live on the claude.ai account, not in a local config file; may be absent in headless/cron runs.

---

## §6 — Config & output

- **Output style:** **`explanatory`** (from `explanatory-output-style` plugin) — canonical as of 2026-07-12. Provides inline educational insights.
- **effortLevel:** `xhigh`.
- **Caveman:** fully wired on this box — `SessionStart` hook (`caveman-activate.js`), `UserPromptSubmit` hook (`caveman-mode-tracker.js`), **and** a `statusLine` block → `caveman-statusline.ps1`. Hooks now point at the stable **nvm4w** node (`C:\nvm4w\nodejs\node.exe`) — fixed 2026-07-13 (previously a per-session `fnm_multishells\52756_…` path that vanishes between sessions).
- **Other settings.json:** `theme: dark` · `autoUpdatesChannel: latest` · `permissions.defaultMode: auto` · `skipDangerousModePermissionPrompt` · `skipAutoPermissionPrompt` · `skipWorkflowUsageWarning` · `agentPushNotifEnabled` — all true.
- **enabledPlugins:** 30 (matches §1 user scope).

---

## §7 — Per-machine sync status & project-scoped extras

### Synced machines
| Machine | OS | Last synced | Notes |
|---------|----|-----------  |-------|
| **PLSOFT-PCD1** | Windows 11 Pro (build 26200) | 2026-07-13 | reference machine; audited & converged to unified state. Node via **nvm4w** (fnm installed but unused); stack = video/browser/serena + full plugin set |

> The original 2026-07-11 draft described a different tool profile (notebooklm/scoop/supabase-centric, Node 22 in `Program Files`). The 2026-07-12 audit reconciled the manifest against the **actual** box (PLSOFT-PCD1) and merged both into one unified desired state.

### Open cleanups

**Resolved 2026-07-13:**
- ✔ **Node manager** — `nvm4w` chosen canonical (active, stable path `C:\nvm4w\nodejs`); caveman hooks repointed off the fragile per-session fnm multishell path onto it. `fnm` (winget) left installed but unused — optionally `winget uninstall Schniz.fnm`.
- ✔ **scoop + supabase** installed (2.109.1).
- ✔ **notebooklm** logged in (`notebooklm auth check --test --json` → `"status": "ok"`).
- ✔ **yt-dlp** confirmed as `.exe` on PATH (pip-managed; update via `python -m pip install -U yt-dlp`).

**Still pending — need interactive auth (user action):**
- **github MCP** ✘ fails to connect → authenticate via the `/mcp` menu (it uses its own OAuth; the `gh` token here has scopes `gist/read:org/repo/workflow`, no Copilot scope, and isn't used by this MCP).
- **vercel MCP** → `vercel login`. **cloudflare MCP** (api/bindings/builds/observability) → authenticate via `/mcp` OAuth (docs endpoint already works).
- **`copilot`** on PATH resolves to the VS Code copilot-chat CLI; the npm `@github/copilot@1.0.70` lives at `C:\nvm4w\nodejs\copilot` — invoke by full path if you want the npm build. Harmless (both are the Copilot CLI).

### Project-scoped plugins (do NOT global-sync — tied to specific local repos)
- `skill-creator@claude-plugins-official` — general skill authoring (currently user scope here)
- `200iqlabs-agent-skills@shared-skills` → repo `…/portfolio` (installed **local**, disabled globally)
- `plsoft-vsoft-marketplace` (git, autoUpdate) — personal marketplace

### Secrets / logins required (values live in env or `.env`, never in this note)
- Claude Code — Anthropic account login
- `notebooklm login` (Google) · Whisper optional: `GROQ_API_KEY` / `OPENAI_API_KEY` in `~/.config/watch/.env`
- `FIRECRAWL_API_KEY` · Perplexity key · `vercel login` · `gh auth login` · Sentry token · Supabase token · Cloudflare auth · Gemini/OpenAI/Copilot keys

---

## 🔗 Related notes

- [[Claude Video]] — the `/watch` skill (§2)
- [[NotebookLM-py]] — the `notebooklm` CLI + skill (§3)
- [[Browser Use]] — the browser-automation uv tool + skill (§3)
- [[Agent Skills]] — the Anthropic skill-packaging system underpinning §1–§2
- [[Firecrawl]] — skills backed by the npm CLI (§2/§4)
- [[Everything Claude Code]] — reference for a maximal cross-harness skill/agent stack
- [[Building an AI Second Brain]] · [[Brain]] — the vault this tooling maintains

---
Template: [[templates/knowledge_note_how_to]]
