---
title: "Extending Claude Code — Tools for Its Blind Spots"
date: 2026-07-13
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "claude-code", "agent-skills", "coding-agents", "video", "design", "memory", "research", "token-optimization"]
type: compiled-note
source: "_outputs/answers/2026-07-12_claude-code-tools-i-use-by-operation.md"
agent-created: true
summary: "The tools I actually use to extend Claude Code where it's weak out of the box — video, design, memory, research and token usage — with how I use each."
---

# Extending Claude Code — Tools for Its Blind Spots

## 🚀 The gaps, and why they matter

[[Claude Code]] is excellent at the things it was built for: reading code, editing files, running commands, and reasoning over text. But it is **blind or weak** at five jobs out of the box — and each one has a fix I actually run day to day:

1. **Video** — it can't *watch* a video or *render* one.
2. **Design** — it produces generic "AI slop" frontends unless given a design brain.
3. **Memory** — every session forgets; nothing compounds.
4. **Research** — the built-in web tools are shallow or flaky for deep, structured work.
5. **Token usage** — verbose output and bloated context burn money and context window.

The pattern that fixes all five is the same: **[[Agent Skills|agent skills]] and small tools that plug a capability into the harness.** This article walks the five gaps and names the specific tools I use to close them. The exhaustive install/usage detail lives in the companion dossier; this is the narrative version, centered on what earns a slot in my workflow.

## 🎬 Video — from blind to watching *and* rendering

Claude has no eyes and no render engine natively. Two tools cover the two directions.

### Watching: [[Claude Video]]

I use it to **understand** video — paste a YouTube URL or a local file plus a question, and Claude actually *sees* the frames and *reads* the transcript before answering. I lean on it to analyze other people's content, pull the substance out of a long video faster than 2× playback, and grab YouTube transcripts that then feed the vault.

It ships as the **`/watch`** skill ([bradautomates/claude-video](https://github.com/bradautomates/claude-video), MIT): yt-dlp checks captions first, ffmpeg extracts frames only as needed, a Whisper fallback covers caption-less videos, and every frame is `Read` back as an image. The clever part is the **`--detail` dial** (`transcript` → `efficient` → `balanced` → `token-burner`) plus a dedup pass that drops near-identical frames — so a 30-minute clip doesn't blow the context budget. It's the inverse of [[Video Use]] (which *edits* and reads transcript-not-frames).

### Rendering: [[HyperFrames]]

For the output side I use HyperFrames — generating and editing video, cutting, adding effects, **all in my own brand**. Because compositions are just HTML + CSS + GSAP, my visual identity lives in stylesheets and templates I control, so every render comes out on-brand instead of template-generic.

HyperFrames ([heygen-com/hyperframes](https://github.com/heygen-com/hyperframes), Apache 2.0) is agent-first: it registers as slash commands (`/hyperframes`, `/gsap`, `/hyperframes-media`, …), renders deterministically, and — unlike Remotion — carries an OSI license with no per-render fees or seat caps. Needs Node ≥ 22 + FFmpeg; install with `npx skills add heygen-com/hyperframes`.

> **The video pair:** [[Claude Video]] is my *input* (watch/understand), [[HyperFrames]] is my *output* (generate/edit on-brand).

## 🎨 Design — giving the agent a design brain

Ask Claude Code for a page and you get the same hero-section, rounded-cards, purple-gradient look as everyone else — the tell-tale AI slop. Three skills give it an actual design brain, split cleanly across the workflow: **who it's for → design it → strip the AI tells.**

### Audience & value: [[UX RULER]]

I use UX RULER to **design UX/UI for the right target group** — it forces the "who is this for, and what measurable value does it give them" thinking *before* jumping into features, then writes that reasoning into the repo as product memory. Its 7-stage process (Mission → Audience → User → Need → Infrastructure → Product → Value) and its 4 decision layers (Usefulness, Ergonomics, Attractiveness, Identity) keep design tied to research, not intuition ([making-mike/uxruler](https://github.com/making-mike/uxruler)).

### Generation & audit: [[UI UX Pro Max]]

I use it for **UX audits** — checking an interface against a coherent, project-appropriate design system rather than a generic one — and as a **design-system base** I then tweak with Tailwind + React. Its v2.0 Design System Generator runs five parallel searches (161 product categories, 67 styles, 161 palettes, 24 landing patterns, 57 font pairings) and outputs a full spec with per-industry anti-patterns (e.g. "no AI purple gradients" for banking) plus an a11y/responsiveness checklist that doubles as a built-in design review ([nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)).

### Guardrail: [[Impeccable]]

I use Impeccable to keep **UX/UI free of AI slop** — it's the design-language guardrail. It extends Anthropic's frontend-design skill with 7 domain reference files (typography, OKLCH color, spatial, motion, interaction, responsive, ux-writing), a 23-command vocabulary under `/impeccable`, and — the killer feature — **27 deterministic anti-pattern rules that run with no LLM and no API key** (`npx impeccable detect src/`). It explicitly hunts the tells: overused fonts (Inter, system defaults), gray text on colored backgrounds, pure black/gray, nested cards, bounce easing ([pbakaus/impeccable](https://github.com/pbakaus/impeccable), Apache 2.0).

> **The design chain:** [[UX RULER]] (discovery) → [[UI UX Pro Max]] (generation + audit) → [[Impeccable]] (language + anti-slop guardrail). See the hub [[AI UX Design Tools]] for the wider landscape.

## 🧠 Memory — beating session amnesia

Claude forgets at the end of every session. Two layers give it durable memory.

### The plain-text second brain (LLM Wiki pattern)

A repo like **this one** *is* my memory. I also apply the same **LLM Wiki** concept inside agentic systems: knowledge lives as an interlinked markdown wiki the agent owns and maintains, so context compounds across sessions instead of rotting in chat history.

The methodology is Andrej Karpathy's [[LLM Knowledge Bases|LLM Wiki]] — the opposite of RAG. Instead of re-discovering everything per query, the LLM **incrementally builds and maintains a persistent, interlinked wiki**: a new source is read, integrated into 10–15 pages, summaries revised, contradictions flagged. Three layers — **raw sources** (immutable) → **wiki** (LLM-owned markdown) → **schema** (a `CLAUDE.md` telling it the conventions) — with ingest / query / lint operations and an `index.md` + `log.md` that work to ~hundreds of pages *without embeddings*. It works because the boring part of a knowledge base is bookkeeping, and LLMs don't get bored: maintenance cost → ~0.

[[Building an AI Second Brain]] operationalizes it on Claude + Obsidian: the Local REST API plugin, an MCP wire-up (`claude mcp add-json obsidian-vault …`), a self-interview into a root `CLAUDE.md`, per-project `Inputs/Process/Outputs/Feedback` folders, saved markdown skills, read-only live-data MCP servers, and a daily autopilot. The one rule you never break: **keys, not prompts** — enforce access at the permission level, never with words in a prompt. This vault, [[Brain]], is a built-out version of exactly this — and because it's just text, it's portable across models. Packaged version of the loop: [[OpenKB]].

### The grounded synthesis layer: [[NotebookLM-py]]

I just started using NotebookLM-py — it's a nice **alternative for pulling YouTube transcripts**, and it puts **most of NotebookLM's options inside Claude Code**. It's an unofficial Python API + CLI + MCP + agent skill for Google NotebookLM ([teng-lin/notebooklm-py](https://github.com/teng-lin/notebooklm-py)); it drives NotebookLM as a **zero-token, grounded synthesis + memory layer** — Gemini does the server-side reasoning, your agent orchestrates. The recipe worth stealing: **distill Deep Research → bake into a `SKILL.md`** the agent loads at startup (build once, reuse with zero runtime tokens), or run a "Master Brain" notebook as cross-session memory queried from `CLAUDE.md`. Caveat: undocumented endpoints, use at your own risk. Install `uv tool install "notebooklm-py[browser]"` then `notebooklm login`. (Self-hosted alternative: [[Open Notebook]].)

## 🔎 Research — deeper and more reliable than the built-ins

The built-in web tools are shallow and sometimes broken. My research stack has three legs.

### The scraper fallback: [[Firecrawl]]

When Claude Code's built-in web scraper doesn't work, Firecrawl is my fallback — it turns any page into clean, **LLM-ready Markdown**, handling JS rendering, pagination, anti-bot friction and boilerplate. Modes: `scrape` / `crawl` / `map` / `search` / `extract`. `pip install firecrawl-py`, works as an agent tool / MCP server, and this repo already ships a Firecrawl skill ([mendableai/firecrawl](https://github.com/mendableai/firecrawl)). It's the complement to [[Perplexity]]: Perplexity answers *questions* with citations; Firecrawl hands over the *full source content*.

### Grounded deep research (to test): [[NotebookLM-py]]

I haven't done it yet, but NotebookLM-py should also work for **deep research** — its built-in web/Drive research agents have fast/deep modes with auto-import, and the distill→`SKILL.md` recipe turns a one-time deep dive into a reusable, zero-token capability. On my list to validate.

### Structured, parallel deep research: the agent-swarm research skill

A skill I found online, now **adapted in this repo for an LLM Wiki like this one** — the [[Deep-Research-skills]] suite (upstream `Weizhena/Deep-Research-skills`, MIT), running as `.claude/skills/research` + `research-deep` and dispatched to the `web-search-agent`. It runs an agent-swarm deep research — **one independent web-search agent per item, in parallel batches** — and wires the output straight into the vault:

- **`/research <topic>`** builds an outline (`outline.yaml` items + execution config, `fields.yaml` field definitions) from model knowledge + a background web-search supplement, confirmed interactively.
- **`/research-deep`** fans out: batch by `batch_size`, each agent handles `items_per_agent` items, writes validated JSON per `fields.yaml` (uncertain values marked, `validate_json.py` gate), with resume support.
- **`/research-report`** promotes only the final `report.md` into `content/_raw/inbox/` for [[Agentic Coding|/ingest]] to classify — working files stay outside the published site.

That "deep research → structured records → report → ingest → interlinked notes" loop is the LLM-Wiki adaptation. Related concept: [[Swarm Research — Orchestrating Coding Agents]].

## 🪙 Token usage — spending less mouth, and less brain-food

Verbose output and bloated context cost money and burn the window. I use one tool here and have catalogued the rest.

### Output compression: [[Caveman]]

I've used Caveman ([JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman), MIT) — it makes the agent drop articles, filler and pleasantries, cutting **~65% of output tokens** with 100% technical accuracy. Levels stick per session: `lite` → `full` → `ultra` → `wenyan`. **My honest caveat: in `full` mode it sometimes produces descriptions that are completely incomprehensible, especially in Polish.** So it's genuinely useful for trimming output, but I'd default to `lite` and drop to `normal mode` for anything that must read clearly. Key limitation from the README: it only compresses **output/visible tokens — thinking/reasoning tokens are untouched.** It shrinks the mouth, not the brain. Pair it with [[Headroom]] to compress the *input* side.

### The rest of the toolkit (catalogued, not yet tested by me)

From [[Token Optimization for Claude Code]] — tools that cut usage 40–98%:

- **[[Headroom]]** — compresses everything the agent *reads* (tool outputs, logs, RAG, files, history): 60–95% fewer tokens. The input-side complement to Caveman.
- **[[Ponytail]]** — YAGNI-first minimal code: −54% LOC, −22% tokens.
- **[[Graphify]]** — code/docs → queryable knowledge graph: 71× token reduction.
- **[[Codebase Memory MCP]]** — persistent repo knowledge graph: ~99% fewer tokens on navigation.
- **[[Camofox Browser]]** — pages as accessibility tree not raw HTML: ~90% cut on web work.
- Patterns behind the numbers: [[Progressive Disclosure]], [[HOMER — Structured Agent Memory]], [[SkillWeaver — Compositional Skill Routing]].

## 🧩 At a glance

| Gap | Tool | What it fixes | How I use it |
|-----|------|---------------|--------------|
| Video | [[Claude Video]] | Can't *watch* video | Understand/analyze video, grab YT transcripts |
| Video | [[HyperFrames]] | Can't *render* video | Generate/edit on-brand video |
| Design | [[UX RULER]] | Feature-jumping, no audience | Design for the right target group |
| Design | [[UI UX Pro Max]] | Generic UI, no system | UX audits + design-system base |
| Design | [[Impeccable]] | AI-slop aesthetic | Keep UX/UI free of AI slop |
| Memory | [[LLM Knowledge Bases]] / [[Building an AI Second Brain]] / [[Brain]] | Session amnesia | This repo as memory; same concept in agent systems |
| Memory | [[NotebookLM-py]] | No grounded synthesis layer | YT transcripts + NotebookLM in Claude Code |
| Research | [[Firecrawl]] | Built-in scraper flaky | Fallback scraper → clean Markdown |
| Research | [[NotebookLM-py]] | Shallow deep research | Deep research (to test) |
| Research | [[Deep-Research-skills]] (agent swarm) | No structured parallel research | Deep research wired to the wiki |
| Token | [[Caveman]] | Verbose output | Output compression (caveat: `full` unreadable, esp. PL) |
| Token | [[Headroom]] et al. | Bloated context | Catalogued, not yet tested |

## 📒 Summary

The through-line: **Claude Code is a great harness with holes, and skills are the plugs.** Video (watch + render), design (audience → generation → anti-slop), memory (plain-text LLM Wiki + grounded NotebookLM), research (clean scraping + parallel agent-swarm), and token usage (output + context compression) are the five holes I hit most — and every plug above is either an agent skill or a small tool the harness can drive. The meta-lesson is [[Harness Engineering]]: pick the gap, add the skill, and the agent gets a capability it didn't have an hour ago.

## 📖 Further reading

- Companion dossier (exhaustive install/usage detail): `_outputs/answers/2026-07-12_claude-code-tools-i-use-by-operation.md`
- [[Agent Skills]] · [[Awesome Agent Skills]] · [[Building Claude Skills Guide]] — the skill ecosystem
- [[Harness Engineering]] · [[Context Engineering]] · [[Progressive Disclosure]] — why plugging gaps this way works
- [[Token Optimization for Claude Code]] · [[AI UX Design Tools]] — topic hubs this article draws on
- [[Deep-Research-skills]] — the agent-swarm research suite wired into this vault
- [[Machine Setup Manifest]] — how these tools get installed across my machines

---
Template: [[templates/knowledge_note_info]]
