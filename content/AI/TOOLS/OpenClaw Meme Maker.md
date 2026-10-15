---
title: "OpenClaw Meme Maker"
date: 2026-10-15
enableToc: true
openToc: true
tags: ["tool", "ai", "memes", "claude-code", "agent-skills", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-10-15_2026-10-15-research-meme-generation-for-coding-agents.md"
agent-created: true
summary: "meme-maker skill in openclaw/openclaw — a 3-file MIT skill with a curated registry of ~20 templates, local SVG/PNG rendering and an Imgflip mode; the best base to fork for a Claude Code meme skill"
---
# OpenClaw Meme Maker

🗒️ The **`meme-maker` skill** in [openclaw/openclaw](https://github.com/openclaw/openclaw/tree/main/skills/meme-maker) is a small MIT skill (3 files) that turns a joke topic into a captioned meme. It ships a **curated registry of about 20 templates** with named fields, hand-placed text boxes and a "use" line each, and it **does not ship copyrighted template images**: in local mode it downloads and caches them, writes SVG and rasterises to PNG with Playwright. An Imgflip mode is also available. It is the closest thing to a ready design reference I found for an agent-picks-template skill, and the cheapest base to fork in the [[Meme Generation for Coding Agents]] plan.

## Links
### Description
- **Workflow.** `node scripts/meme.mjs suggest "<topic>" --json` (a keyword ranker) or read `references/templates.json` directly; the agent chooses the template and writes one caption per named field (drake: "rejected option", "preferred option"); then `render drake --text "…" --text "…" --out ./meme.png`. Imgflip mode adds `--service imgflip` and prints a hosted URL. One to two tool calls.
- **Tested by the research agent:** an English topic ("deploy on friday broke production") ranked *this-is-fine* well; Polish diacritics survived in the drake SVG and a four-panel expanding-brain PNG, upper and lower case, no forced uppercase. SVG took about 0.3 s and PNG about 5.7 s through `playwright-core` with the installed, signed Chrome.
- **Activity.** The repo is huge (about 392k stars) and the skill has had four commits (2026-05-17 to 2026-10-08); skills.sh shows 322 installs. [3rd-party]

### Download or use
Node 18 or newer. Copy `skills/meme-maker/` into `~/.claude/skills/meme-maker/` (the skill uses OpenClaw's `{baseDir}` placeholder, so substitute the folder path or let the agent do it). For PNG add `npm i playwright-core` next to the script and have Chrome or Chromium installed; **never run `playwright install`**, its downloaded ffmpeg was blocked by Smart App Control. Edge alone gives SVG only.

## Reasoning for
It fits my constraints better than anything hosted: local rendering, no account, no watermark, a registry that tells the agent what each format is for. Known limits, all fixable in a fork:
- Captions wrap to at most 5 lines and overflow is silently dropped; extra `--text` values reuse the last box and overlap.
- `suggest` strips non-ASCII, so Polish topics rank by accident (the agent picks the template anyway, so this matters little).
- The SVG depends on the viewer's Impact font; there is no custom-background option.
- Template images are hot-linked from `i.imgflip.com` and can disappear; Imgflip mode takes only a username and password, and credentials passed as flags leak into transcripts.
- Historical incident: an earlier error message told agents to install `sharp`, an agent did so inside a pnpm-managed OpenClaw tree and pruned 379 `node_modules` entries (issue #109405). Strip any "install this" advice from a fork. See [[AI Agent Security]].

My plan is to seed my own catalog from its registry and swap the renderer for [[Satori]] so PNG no longer needs a browser.

## Alternatives considered
- **Own skill on [[Satori]] + resvg-wasm** (the design in [[Meme Generation for Coding Agents]]): same idea without the browser dependency and with a tofu detector for Polish glyphs.
- **[[Meme Factory]]:** a skill on [[Memegen]], simpler, but 8 of its 21 template IDs are dead and it hides the watermark.
- **Hosted MCPs** (Memesio, Createa): less control, watermarks, anonymous operators.

## Resources
- 🔗 [github.com/openclaw/openclaw/tree/main/skills/meme-maker](https://github.com/openclaw/openclaw/tree/main/skills/meme-maker) · [skills.sh listing](https://www.skills.sh/steipete/clawdis/meme-maker) · incident [#109405](https://github.com/openclaw/openclaw/issues/109405)
- 📖 Related: [[Meme Generation for Coding Agents]] · [[Memegen]] · [[Meme Factory]] · [[Satori]] · [[Claude Code]] · [[Agent Skills]] · [[AI Agent Security]]

---
Template: [[templates/tool]]
