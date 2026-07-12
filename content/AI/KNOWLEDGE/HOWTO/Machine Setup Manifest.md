---
title: "Machine Setup Manifest"
date: 2026-07-11
enableToc: true
openToc: true
tags: ["knowledge", "howto", "ai", "claude-code", "agent-skills", "setup", "environment", "sync", "windows", "mcp"]
type: knowledge-note
agent-created: true
summary: "Canonical desired-state manifest of Claude Code plugins, agent skills, CLI tools, MCP servers and runtimes across machines — say 'install from Machine Setup Manifest' and every tool gets reinstalled"
---

# Machine Setup Manifest

## 🗒️ What this is

The **single source of truth** for the agent/dev tooling that should exist on every machine I work on: Claude Code plugins, agent skills, CLI tools, MCP servers, and their runtime prerequisites.

**How to use it:** point the agent at this note — *"install everything from [[Machine Setup Manifest]]"* — and it walks §0→§6 in order, reinstalling anything missing. No more wondering why a skill/tool exists on one box but not another.

> Desired state, not per-machine reality. §7 tracks which machine is synced to which date. Reflects the **primary Windows 11** box as of 2026-07-11.

---

## §0 — Runtimes & prerequisites (install FIRST)

Everything below depends on these. Install via `winget` / `choco` on Windows.

| Tool | Version (ref) | Location | Install (Windows) |
|------|---------------|----------|-------------------|
| **Node.js** | 22.23.1 | `Program Files\nodejs` | `winget install OpenJS.NodeJS.22` (22 LTS line; ≥22.22.2 required for npm 12) |
| **Python** | 3.11.9 (primary) + 3.12.10 | `…\Python311`, WindowsApps | `winget install Python.Python.3.11` |
| **uv** | 0.9.26 | `…\Python311\Scripts` | `winget install astral-sh.uv` |
| **git** | 2.49.0 | `mingw64/bin` | `winget install Git.Git` |
| **gh** (GitHub CLI) | 2.87.0 | `Program Files\GitHub CLI` | `winget install GitHub.cli` → `gh auth login` |
| **ffmpeg** | 8.0.1 | `ProgramData\chocolatey\bin` | `choco install ffmpeg` |
| **yt-dlp** | 2026.07.04 | `~/.local/bin/yt-dlp` | needs the `.exe` (not the pip module) on PATH; self-update `yt-dlp -U` |
| **scoop** | — | `~/scoop` | Windows package manager for standalone CLIs (e.g. supabase) — [scoop.sh](https://scoop.sh) |

---

## §1 — Claude Code plugins

Add each marketplace once, then install its plugins. Commands are typed in Claude Code (slash commands).

### Marketplaces
```
/plugin marketplace add anthropics/claude-plugins-official
/plugin marketplace add anthropics/skills          # → "anthropic-agent-skills"
/plugin marketplace add 200iqlabs/shared-skills
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin marketplace add JuliusBrussee/caveman
/plugin marketplace add getsentry/sentry-mcp
```

### Plugins (user scope — sync everywhere)
```
# from claude-plugins-official
/plugin install code-review@claude-plugins-official
/plugin install context7@claude-plugins-official
/plugin install feature-dev@claude-plugins-official
/plugin install playwright@claude-plugins-official
/plugin install supabase@claude-plugins-official
/plugin install vercel@claude-plugins-official
/plugin install stripe@claude-plugins-official
/plugin install superpowers@claude-plugins-official
/plugin install pyright-lsp@claude-plugins-official
/plugin install typescript-lsp@claude-plugins-official
/plugin install plugin-dev@claude-plugins-official
/plugin install claude-md-management@claude-plugins-official
/plugin install security-guidance@claude-plugins-official
/plugin install commit-commands@claude-plugins-official
/plugin install pr-review-toolkit@claude-plugins-official
/plugin install claude-code-setup@claude-plugins-official
/plugin install learning-output-style@claude-plugins-official
# from other marketplaces
/plugin install document-skills@anthropic-agent-skills
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
/plugin install caveman@caveman
/plugin install sentry-mcp@sentry-mcp
```

21 user-scope plugins. `context7`, `playwright`, `supabase`, `sentry-mcp` each also register an MCP server (see §5).

---

## §2 — Agent Skills (`npx skills add`)

Standalone skills, symlinked into `~/.claude/skills` (and `~/.agents/skills`) by the Agent Skills CLI. Source-of-truth lockfile: `~/.agents/.skill-lock.json`.

```
npx skills add bradautomates/claude-video -g     # → skill "watch" ([[Claude Video]])
npx skills add vercel-labs/skills -g             # → find-skills
npx skills add vercel-labs/agent-skills -g       # → web-design-guidelines
npx skills add Omerr/claude-skills -g            # → create-marp-deck
npx skills add firecrawl/cli -g                  # → firecrawl + 6 sub-skills (agent/crawl/download/map/scrape/search)
```

- **remotion-best-practices** — present but not in lockfile; source #todo/complete (likely a Remotion repo via `npx skills add`).
- **notebooklm** — NOT installed this way; it ships with the uv tool (see §3).

---

## §3 — uv tools (Python CLIs)

```
uv tool install "notebooklm-py[browser]"         # → CLI "notebooklm" ([[NotebookLM-py]]) v0.7.3
notebooklm login                                 # interactive Google sign-in; first run downloads Chromium
notebooklm skill install                         # installs the notebooklm agent skill into ~/.claude/skills
# Playwright browser binary (bundled venv):
"$(uv tool dir)/notebooklm-py/Scripts/playwright.exe" install chromium   # Windows path
notebooklm auth check --test --json              # expect "status": "ok"
```

---

## §4 — npm global CLIs

```
npm i -g @fission-ai/openspec @github/copilot @google/gemini-cli \
  @marp-team/marp-cli @openai/codex @sentry/cli firecrawl-cli \
  nano-banana-mcp openai pnpm vercel
```

| Package | Version (ref) | Notes |
|---------|---------------|-------|
| `@fission-ai/openspec` | 1.6.0 | OpenSpec CLI |
| `@github/copilot` | 1.0.70 | Copilot CLI — `gh`/Copilot auth |
| `@google/gemini-cli` | 0.50.0 | Gemini CLI — needs key |
| `@marp-team/marp-cli` | 4.4.1 | [[Marp CLI]] — deck export |
| `@openai/codex` | 0.144.1 | Codex CLI |
| `@sentry/cli` | 3.6.0 | Sentry releases |
| `firecrawl-cli` | 1.19.24 | backs the [[Firecrawl]] skills (§2) |
| `nano-banana-mcp` | 1.0.3 | image-gen MCP |
| `openai` | 6.46.0 | OpenAI SDK/CLI |
| `pnpm` | 11.11.0 | package manager |
| `vercel` | 55.0.0 | Vercel CLI — `vercel login` |

> `npm` **12.0.1** — requires Node ≥22.22.2 (this box runs 22.23.1 ✓). Update npm with `npm i -g npm@latest`.

### Standalone CLIs (outside npm)
- **supabase** CLI 2.109.1 — via **scoop**: `scoop install supabase` (npm global install is deprecated for Supabase; needs [scoop](https://scoop.sh)). Complements the `supabase` plugin (§1) + MCP (§5). Update: `scoop update supabase`.

---

## §5 — MCP servers

| Server | Scope | Provided by | Notes |
|--------|-------|-------------|-------|
| `beeper` | user (`~/.claude.json`) | custom | messaging |
| `perplexity` | project | custom | needs API key |
| `vercel` | project | vercel plugin/CLI | `vercel login` |
| `sentry` | via plugin | `sentry-mcp` plugin (§1) | token |
| `context7` | via plugin | `context7` plugin (§1) | docs retrieval |
| `playwright` | via plugin | `playwright` plugin (§1) | browser automation |
| `supabase` | via plugin | `supabase` plugin (§1) | token |
| `claude-in-chrome` | Chrome extension | Claude in Chrome | installed as a browser extension, not a CLI |

---

## §6 — Config & output

- **Output style:** `learning` (from `learning-output-style` plugin). Interactive-teaching + explanatory mode.
- **Caveman statusline:** NOT configured — optional. Adds a `[CAVEMAN]` badge; needs a `statusLine` block in `~/.claude/settings.json` pointing at the caveman plugin's `caveman-statusline.ps1`. #todo/complete
- **enabledPlugins:** 21 (matches §1 user scope).

---

## §7 — Per-machine sync status & project-scoped extras

### Synced machines
| Machine | OS | Last synced | Notes |
|---------|----|-----------  |-------|
| primary | Windows 11 Pro | 2026-07-11 | reference machine for this manifest |

### Project-scoped plugins (do NOT global-sync — tied to specific local repos)
- `skill-creator@claude-plugins-official` → repo `C:\Projects\shared-skills`
- `200iqlabs-agent-skills@shared-skills` → repo `…/portfolio`

### Secrets / logins required (values live in env or `.env`, never in this note)
- Claude Code — Anthropic account login
- `notebooklm login` (Google) · Whisper optional: `GROQ_API_KEY` / `OPENAI_API_KEY` in `~/.config/watch/.env`
- `FIRECRAWL_API_KEY` · Perplexity key · `vercel login` · `gh auth login` · Sentry token · Supabase token · Gemini/OpenAI/Copilot keys

---

## 🔗 Related notes

- [[Claude Video]] — the `/watch` skill (§2)
- [[NotebookLM-py]] — the `notebooklm` CLI + skill (§3)
- [[Agent Skills]] — the Anthropic skill-packaging system underpinning §1–§2
- [[Firecrawl]] — skills backed by the npm CLI (§2/§4)
- [[Everything Claude Code]] — reference for a maximal cross-harness skill/agent stack
- [[Building an AI Second Brain]] · [[Brain]] — the vault this tooling maintains

---
Template: [[templates/knowledge_note_how_to]]
