---
title: "Claude Code Tools I Use, by Operation — Video, Design, Memory, Research, Token Usage"
date: 2026-07-12
enableToc: true
openToc: true
tags: ["answer", "ai", "claude-code", "agent-skills", "tools", "video", "design", "memory", "research", "token-optimization"]
type: answer-note
agent-created: true
summary: "Article-input dossier: for each tool I actually use to extend Claude Code (video, design, memory, research, token usage) — how I use it + what it is, install, usage and gotchas from the source note."
---

# Claude Code Tools I Use, by Operation

> **Purpose of this note.** Raw input for an article on tools that extend [[Claude Code]] in the areas where it is weak out of the box. For every tool I personally use, two blocks: **① How I use it** (my workflow) and **② Source note** (what it is, install, usage, gotchas — drawn verbatim-in-spirit from the vault note). Nothing compressed — this is a dossier, not a summary.

## The thesis (article angle)

Claude Code is excellent at reading code, editing files, running commands and reasoning over text. It is **weak or blind** at five things out of the box:

1. **Video** — it cannot *watch* a video or *render* one.
2. **Design** — it produces generic "AI slop" frontends unless given a design brain.
3. **Memory** — each session forgets; there is no compounding long-term store.
4. **Research** — the built-in web tools are shallow/flaky for deep, structured, multi-source work.
5. **Token usage** — verbose output and bloated context burn money and context window.

Each section below is one of those gaps, and the tools I use to close it.

---

## 🎬 VIDEO

Claude cannot see or make video natively. Two tools cover the two directions: **watching** (input) and **generating/editing** (output).

### Claude Video — *watching & understanding video*

**① How I use it**
For watching and understanding video — I paste a URL (usually YouTube) or a local file plus a question, and Claude actually *sees* the frames and *reads* the transcript before answering. I use it to analyze other people's content, pull the substance out of a long video faster than 2× playback, and to extract knowledge that then feeds the vault. (See also the MEMORY + RESEARCH sections — it doubles as my YouTube-transcript grabber.)

**② Source note** — [[Claude Video]]
[bradautomates/claude-video](https://github.com/bradautomates/claude-video) — the **`/watch`** agent skill that gives Claude *sight*. Paste a URL or local path plus a question; Claude fetches captions, downloads only what it needs, extracts frames, pulls a timestamped transcript, and `Read`s every frame as an image. By the time it answers it has **seen** the video and **heard** the audio — not guessed from the title.

- **What it fills:** Claude can read a page or a repo but can't *watch a video* out of the box.
- **Install:** Claude Code (plugin marketplace), Codex / Cursor / Copilot / Gemini CLI via `npx skills add`, claude.ai web via `watch.skill` bundle. MIT. Zero config — `yt-dlp` / `ffmpeg` install on first run; a Whisper key (Groq `whisper-large-v3` preferred, or OpenAI `whisper-1`) is only needed for videos with **no** caption track.
- **Usage:**
  ```
  /watch https://youtu.be/dQw4w9WgXcQ what happens at the 30 second mark?
  ```
  Pipeline: (1) you paste video + question; (2) yt-dlp checks captions first — at `transcript` detail, captioned URLs return **without downloading video**; (3) ffmpeg extracts frames (JPEG 512px wide, clamped 1998px tall for Claude `Read`); (4) transcript from native captions (free/instant) or Whisper fallback; (5) frames + transcript handed to Claude, read in parallel; (6) working dir cleaned up.
- **Token-control dial (`--detail`)** — token cost is dominated by frames (each is an image):

  | Mode | Engine | Frame cap | Use |
  | --- | --- | --- | --- |
  | `transcript` | captions only, no frames | — | cheapest; text-only |
  | `efficient` | keyframes (`-skip_frame nokey`) | 50 | ~0.5s extraction, fast scan |
  | `balanced` (default) | scene-change | 100 | 2 fps max, general use |
  | `token-burner` | scene-change, uncapped | — | full coverage on long clips |

  Focus a section with `--start` / `--end` for a denser per-second budget (capped 2 fps). A **dedup pass** (mean-absolute-difference vs last kept frame, threshold 2.0) drops near-identical held-slide frames before they reach Claude; `--no-dedup` disables it.
- **Supports:** anything yt-dlp supports (YouTube, Loom, TikTok, X, Instagram, +hundreds) and local `.mp4/.mov/.mkv/.webm`.
- **Relation:** inverse of [[Video Use]] (which *edits* and reads transcript-not-frames); [[HyperFrames]] *generates* video that Claude Video can then consume.

### HyperFrames — *generating & editing video (on-brand)*

**① How I use it**
Brilliant for **generating video** — cutting, adding effects, all in my own brand. Because compositions are just HTML/CSS/GSAP, the "brand" lives in stylesheets and templates I control, so every render comes out consistent with my visual identity instead of a generic template look. This is my output side of video (product intros, hooks, animated overlays), where Claude Video is my input side.

**② Source note** — [[HyperFrames]]
[heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) — *Write HTML. Render video. Built for agents.* Compositions are HTML files with `data-*` attributes — no React, no proprietary DSL. Deterministic rendering for automated pipelines.

- **What it fills:** agent-generated video with a real license for commercial use — product intros, vertical TikTok hooks, animated charts, CSV→bar-chart-race, PDF→pitch-video.
- **Design:** agent-first — ships as Claude Code / Codex / Cursor **skills exposed as slash commands**.
- **Install:** `npx skills add heygen-com/hyperframes` **or** `npx hyperframes init`. Requirements: **Node.js ≥ 22, FFmpeg**.
- **Features:**
  - **HTML-native** — compositions are HTML files with data attributes.
  - **AI-first** — non-interactive CLI by default, agent-driven workflows.
  - **Deterministic** — same input = identical output.
  - **Frame Adapter pattern** — bring your own runtime: GSAP, Anime.js, Motion One, Lottie, CSS, Three.js, WAAPI.
  - **Slash commands:** `/hyperframes`, `/hyperframes-cli`, `/hyperframes-media` (TTS, transcription, background removal), `/tailwind`, `/gsap`, `/animejs`, `/css-animations`, `/lottie`, `/three`, `/waapi`.
- **Example composition:**
  ```html
  <div id="stage" data-composition-id="my-video" data-start="0" data-width="1920" data-height="1080">
    <video data-start="0" data-duration="5" data-track-index="0" src="intro.mp4" muted></video>
    <img data-start="2" data-duration="3" data-track-index="1" src="logo.png" />
    <audio data-start="0" data-duration="9" data-track-index="2" data-volume="0.5" src="music.wav"></audio>
  </div>
  ```
- **Why over Remotion:** authoring in HTML+CSS+GSAP (no build step); GSAP/Anime.js animations are seekable/frame-accurate; arbitrary HTML/CSS passthrough (paste and animate); **Apache 2.0** (OSI) vs Remotion's source-available/paid-above-thresholds license — commercial use at any scale, no per-render fees, no seat caps. Trade-off: single-machine rendering today (Remotion has Lambda distribution).
- **Relation:** pairs with [[Video Use]] as an overlay engine for talking-head edits.

---

## 🎨 DESIGN

Ask Claude Code for a page and you get the same hero-section-rounded-cards-purple-gradient look as everyone else. These three skills give the agent an actual design brain, split across the workflow: **who it's for → design it → strip the AI tells.**

### UI UX Pro Max — *UX audit / design-system generation*

**① How I use it**
For **UX audits** — pointing it at a project to check the interface against a coherent, project-appropriate design system rather than a generic one. It's my "does this UI actually hold together" pass. I run it with Tailwind CSS + React: it generates a coherent design system as a base that I then tweak, saving prototyping time.

**② Source note** — [[UI UX Pro Max]]
A skill for [[Claude Code]] that solves the **generic AI slop** problem — the generic look that instantly betrays an AI-generated page. Instead of one universal approach, it generates design systems tailored to the project type (portfolio vs SaaS vs e-commerce vs landing page — each with its own logic).

- **Install / use:** [GitHub: nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) · landing [uupm.cc](https://uupm.cc/).
- **v2.0 flagship — Design System Generator** (5-step pipeline): (1) user request (e.g. *"Build a landing page for my beauty spa"*); (2) **5 parallel searches** — product-type matching (161 categories), style recommendations (67), color palette (161 palettes), landing patterns (24), typography pairing (57); (3) reasoning engine — product→UI category match, BM25 style ranking, per-industry anti-pattern filter, JSON decision rules; (4) output = Pattern + Style + Colors + Typography + Effects + anti-patterns + pre-delivery checklist; (5) concrete spec with hexes, font pairing, AVOID list, a11y/responsiveness checklist.
- **161 industry reasoning rules** — each with Recommended Pattern · Style Priority · Color Mood · Typography Mood · Key Effects · **Anti-Patterns** (e.g. *"AI purple/pink gradients"* for banking). Categories span Tech & SaaS, Finance, Healthcare, E-commerce, Services, Creative, Lifestyle, Emerging Tech.
- **Feature counts (v2.0):** 67 UI styles · 161 color palettes (1:1 with product types) · 57 font pairings (Google Fonts imports) · 25 chart types · 15 tech stacks (React, Next.js, Astro, Vue, Nuxt, Svelte, SwiftUI, React Native, Flutter, HTML+Tailwind, shadcn/ui, Jetpack Compose, Angular, Laravel) · 99 UX guidelines · 161 reasoning rules.
- **Built-in review:** the v2.0 pre-delivery checklist (4.5:1 contrast, focus states, prefers-reduced-motion, responsive breakpoints) acts like a design code review.
- **Relation:** more *declarative* than [[gstack]]'s `/design-consultation` (which is more interactive). Delivers a ready spec.

### UX RULER — *UX/UI design for the right target audience*

**① How I use it**
For **designing UX/UI for the right target group** — it forces the "who is this actually for, and what measurable value does it give them" thinking *before* jumping into features. It writes that reasoning into the repo as product memory, so the audience/need decisions are explicit and reusable.

**② Source note** — [[UX RULER]]
An open-source **UX skill** for AI agents (Claude Code, Codex). Takes you from an idea or a repo to a **concrete decision, metric, and next step** instead of jumping straight into features. Philosophy: every product decision has 4 layers (**Usefulness, Ergonomics, Attractiveness, Identity**) and should be testable via user research, not founder intuition.

- **Install / use:** [uxruler.com](https://www.uxruler.com/) · [GitHub: making-mike/uxruler](https://github.com/making-mike/uxruler).
  ```bash
  # Claude Code (personal skill)
  REPO="https://github.com/making-mike/uxruler.git"
  TMP_DIR="$(mktemp -d)"
  git clone --depth 1 "$REPO" "$TMP_DIR/uxruler-repo"
  mkdir -p ~/.claude/skills
  rm -rf ~/.claude/skills/uxruler
  cp -R "$TMP_DIR/uxruler-repo/uxruler" ~/.claude/skills/
  # restart Claude Code

  # Repo-local (committable)
  cp -R "$TMP_DIR/uxruler-repo/uxruler" .claude/skills/
  git add .claude/skills/uxruler
  ```
  Codex: `Use $skill-installer to install: https://github.com/making-mike/uxruler/tree/main/uxruler`
- **Process — 7 stages:** (1) Mission — what change, for whom, why now; (2) Audience/Market — segments, channels, alternatives; (3) User — a concrete person, jobs/pains/gains; (4) Need — which need justifies building/prototype/research; (5) Infrastructure — what must work technically; (6) Product — flow, prototype, design system; (7) Value — rollout, onboarding, metrics, feedback.
- **Output:** files in the repo as **product memory** — minimal (`AGENTS.md`, `PRODUCT.md`, `ROADMAP.md`, `README.md`) up to a full maturity layer (decision-log, north-star-metric, experiments, tracking-plan) — so the next human or agent knows what was decided, what's an assumption, what needs a test.
- **When:** new product/repo (avoid feature-jumping); existing product audit (does every feature have a user/problem/value); repo product memory.

### Impeccable — *UX/UI free of AI slop*

**① How I use it**
For **designing UX/UI free of AI slop** — the design-language guardrail. It gives the agent the vocabulary and the deterministic linter to escape the tell-tale AI aesthetic (Inter everywhere, purple gradients, nested cards).

**② Source note** — [[Impeccable]]
[pbakaus/impeccable](https://github.com/pbakaus/impeccable) — a design-language skill that makes any AI harness better at frontend design (*"the vocabulary you didn't know you needed"*), by Paul Bakaus. Extends [Anthropic's frontend-design skill](https://github.com/anthropics/skills/tree/main/skills/frontend-design) with deeper reference material, a shared command vocabulary, and a deterministic anti-slop linter.

- **The problem it solves:** every model trained on the same SaaS templates → the same "tells" on every project: Inter for everything, purple-to-blue gradients, cards nested in cards, gray text on colored backgrounds, the rounded-square icon tile above every heading.
- **Install / use:** download the ZIP for your tool at [impeccable.style](https://impeccable.style/) and extract into your project, or copy from the repo's `dist/` per harness. Standalone CLI needs **no install**: `npx impeccable detect src/`. Package on [npm](https://www.npmjs.com/package/impeccable). Apache 2.0.
- **What it adds over a base design skill — 7 domain reference files** loaded on every command (typography; color-and-contrast/OKLCH; spatial-design; motion-design; interaction-design; responsive-design; ux-writing) + a brand-vs-product register that shifts defaults.
- **27 deterministic anti-pattern rules** + a 12-rule LLM critique pass. The deterministic rules run **with no LLM and no API key** (CLI or browser extension).
- **23 commands** under `/impeccable`, a shared design vocabulary. Workflow: `teach` / `document` / `extract` (set up the design system) → `shape` → `craft` → `critique` / `audit` → `polish`. Tone verbs: `bolder`, `quieter`, `distill`, `animate`, `colorize`, `typeset`, `layout`, `delight`, `overdrive`, `harden`, `onboard`, `clarify`, `adapt`, `optimize`, `live`. `pin <command>` creates standalone shortcuts (e.g. `/audit`).
- **Standalone CLI** — `npx impeccable detect` scans a directory, HTML file, or URL (Puppeteer); `--fast --json` for regex-only output. Catches 24 issues across AI slop (side-tab borders, purple gradients, bounce easing, dark glows) and general quality (line length, cramped padding, small touch targets, skipped headings).
- **Explicit anti-patterns:** no overused fonts (Arial, Inter, system defaults); no gray text on colored backgrounds; no pure black/gray (always tint); no everything-in-cards / nested cards; no bounce/elastic easing.
- **Harness support:** Cursor, Claude Code, OpenCode, Pi, Gemini CLI, Codex CLI, VS Code Copilot, Kiro, Trae, Rovo Dev, Qoder.

> **How the three fit together (article point):** [[UX RULER]] decides *who and why* (audience/value) → [[UI UX Pro Max]] generates the *design system* and audits it → [[Impeccable]] enforces the *design language* and strips AI tells. Discovery → generation → guardrail.

---

## 🧠 MEMORY

Claude forgets at the end of each session. Two layers give it durable memory: a **plain-text second brain** it reads and maintains (this repo's pattern), and **NotebookLM-py** as a grounded synthesis/memory layer.

### Second-brain-as-memory (LLM Wiki pattern) — *this repo, and in agentic systems*

**① How I use it**
A repo like **this one** *is* my memory — a plain-text vault Claude reads, files into, links and answers across. I also apply the same **LLM Wiki** concept inside agentic systems: knowledge lives as an interlinked markdown wiki the agent owns and maintains, so context compounds across sessions instead of rotting in chat history.

**② Source notes** — [[LLM Knowledge Bases]] · [[Building an AI Second Brain]] · [[Brain]]

**The concept — LLM Wiki vs RAG** ([[LLM Knowledge Bases]]): Andrej Karpathy's April 2026 pattern ([X thread](https://x.com/karpathy/status/2039805659525644595?s=46) → [LLM Wiki gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)). Most LLM+docs experience is RAG: upload, retrieve chunks, generate — the model rediscovers everything from scratch each query, nothing accumulates. The **LLM Wiki** is the opposite: the LLM **incrementally builds and maintains a persistent, interlinked markdown wiki**. A new source → the LLM reads it, extracts key info, integrates it into existing pages, revises summaries, flags contradictions. The wiki is a **persistent, compounding artifact**. The user sources and asks good questions; the LLM writes and maintains everything.

- **Three layers:** **Raw sources** (immutable source of truth) → **Wiki** (LLM-owned markdown: summaries, entity/concept pages, comparisons, syntheses) → **Schema** (a config doc, e.g. `CLAUDE.md`, telling the LLM how the wiki is organized, conventions, workflows; user + LLM co-evolve it).
- **Operations:** **Ingest** (new source → summary page + index + relevant entity/concept pages; one source can touch 10–15 pages) · **Query** (search relevant pages, synthesize with citations; good answers *filed back* as new pages so explorations compound) · **Lint** (periodic health check: contradictions, stale claims, orphans, missing pages/cross-references, data gaps).
- **Indexing without RAG:** `index.md` (content catalog, per-category, updated every ingest) + `log.md` (chronological append-only record). Works surprisingly well to ~100 sources / hundreds of pages **without embeddings or RAG infra**. At larger scale add a markdown search engine like [qmd](https://github.com/tobi/qmd) (hybrid BM25/vector + LLM re-rank, on-device, CLI + MCP).
- **Why it works:** the boring part of a knowledge base is *bookkeeping* (cross-references, keeping summaries current, noting contradictions). Humans abandon wikis because maintenance grows faster than value. LLMs don't get bored, can touch 15 files in one pass → maintenance cost → ~0. (Vannevar Bush's 1945 Memex, finally with someone to do the upkeep.)

**The build — Claude + Obsidian** ([[Building an AI Second Brain]]): operationalizes the pattern.

- **Prerequisites:** Claude Desktop (paid Pro plan — free tier won't run Claude Code); Obsidian (free) with a vault; the **Local REST API** community plugin (Obsidian must stay open while connected).
- **Wire Claude to the vault via MCP:**
  ```bash
  claude mcp add-json obsidian-vault '{ "type": "stdio", "command": "uvx", "args": ["mcp-obsidian"], "env": { "OBSIDIAN_API_KEY": "PASTE-YOUR-KEY-HERE", "OBSIDIAN_HOST": "127.0.0.1", "OBSIDIAN_PORT": "27124" } }'
  ```
  (Copy the API key from the plugin — drop the leading `Bearer`.) Test: *"list every file in my Obsidian vault."*
- **Load yourself in:** have Claude interview you one question at a time, then write a root **`CLAUDE.md`** that loads every session.
- **Project structure:** one folder per area with `Inputs / Process / Outputs / Feedback` + a project-level `CLAUDE.md`. **The big vault plans; a single project ships** (open a project as its own vault so Claude sees only that job's CLAUDE.md).
- **Skills:** anything done more than once becomes a saved markdown skill (name + when-to-trigger). Same idea as this repo's [[Agent Skills]] / `.claude/skills/`.
- **Live data:** wire read-only MCP servers (e.g. `claude mcp add google-workspace uvx workspace-mcp --tools calendar`).
- **Autopilot:** schedule a daily task that files new Inputs, links them, flags stale notes, writes a "what changed overnight" summary.
- **The one safety rule — keys, not prompts:** "don't delete this" is a suggestion, not a control. Enforce access at the permission level (read-only, scoped keys), never with prompt words.

**This repo** ([[Brain]]): Obsidian vault + Quartz 4 → GitHub Pages ([brain.lipowczan.pl](https://brain.lipowczan.pl)), maintained by an AI agent via [[Claude Code]] (ingests sources, writes articles, maintains indexes) — a built-out version of exactly this pattern. Portable across models because it's just text. Related packaged implementation: [[OpenKB]].

### NotebookLM-py — *YT transcripts + NotebookLM inside Claude Code*

**① How I use it**
Just started using it — it works nicely as an **alternative for pulling YouTube transcripts**, and it puts **most of NotebookLM's options inside Claude Code**. (I also want to test it for deep research — see RESEARCH.)

**② Source note** — [[NotebookLM-py]]
[teng-lin/notebooklm-py](https://github.com/teng-lin/notebooklm-py) — an **unofficial** Python API + CLI + MCP server + agent skill for Google **NotebookLM**, giving programmatic access to features the web UI doesn't expose. Uses **undocumented** Google endpoints — **use at your own risk** (not affiliated with Google, APIs can break, rate limits apply; best for prototypes/research/personal projects).

- **Core idea:** NotebookLM is a **grounded** engine — Gemini reads *your* sources and answers with citations. Let it do the expensive server-side reasoning while your agent (Claude Code, Codex…) orchestrates the final mile. A **zero-token synthesis + memory layer an agent drives in a loop**, plus bulk structured export *out*.
- **Install:** `uv tool install "notebooklm-py[browser]"` then `notebooklm login` (auto-downloads Chromium). On Windows plain `pip install` also works (not externally-managed).
- **Ways to use:** **CLI** (shell/CI-CD) · **Python API** (app integration, async) · **MCP server** (Claude Desktop/Code, Codex — local stdio or self-hosted remote via Cloudflare/Tailscale tunnel → claude.ai + ChatGPT, mobile included) · **REST server** · **Agent skill** (`notebooklm skill install` → `~/.claude/skills`, `~/.agents/skills`, or `npx skills add teng-lin/notebooklm-py`).
- **What it covers:** **Sources** — bulk import URLs, **YouTube**, PDFs/Word/EPUB/audio/video/images, Google Drive, pasted text; web/Drive **research agents** (fast/deep) with auto-import. **Chat** — cited Q&A (`ask --json`), personas, save answers/history as notes. **Generation** — Audio Overview (podcast), video, slide deck, infographic, quiz, flashcards, report, data table, mind map. **Beyond the web UI** — batch downloads, quiz/flashcard export (JSON/MD/HTML), mind-map JSON extraction, data-table CSV, slide-deck PPTX/PDF + per-slide revision, programmatic sharing. **Auth** — interactive Playwright login, import cookies from a signed-in browser, or a durable **master token** that self-heals expired sessions unattended.
- **The recipe worth stealing:** *knowledge distillation → permanent skill* — run Deep Research or load a corpus, let Gemini condense it, bake the result into a `SKILL.md` the agent loads at startup (build once, reuse with **zero runtime tokens**). Related: a "Master Brain" notebook as persistent cross-session memory queried from `CLAUDE.md`; a source-grounded troubleshooting oracle over a tool's docs; **Obsidian sync** — run the CLI from the vault root so reports / mind-map JSON / transcripts land as files (community skills resolve NotebookLM citations into `[[wikilinks]]`). → ties directly back to the second-brain layer above.
- **vs [[Open Notebook]]:** Open Notebook is a self-hostable OSS *clone* (own inference, local via Ollama). NotebookLM-py drives the **real hosted** NotebookLM via undocumented APIs — Gemini's quality/features, at API-break risk.

---

## 🔎 RESEARCH

Built-in web tools are shallow and sometimes broken. My research stack: **Firecrawl** as the reliable scraper fallback, **NotebookLM-py** as a grounded deep-research option (to test), and the **agent-swarm research skill** in this repo for structured, parallelized deep dives that feed the wiki.

### Firecrawl — *scraper fallback when Claude Code's built-in fails*

**① How I use it**
Sometimes — when Claude Code's built-in web scraper doesn't work, Firecrawl is my fallback to reliably turn a page into clean content the agent can actually use.

**② Source note** — [[Firecrawl]]
An API that turns any website into clean, **LLM-ready Markdown** (or structured JSON). It handles the messy parts — JavaScript rendering, pagination, anti-bot friction, boilerplate stripping — and returns content an agent can chew on.

- **Modes:** **Scrape** (one URL → clean Markdown/HTML/JSON, JS rendered) · **Crawl** (follow links across a whole site) · **Map** (enumerate a site's URLs) · **Search** (web search with content fetched) · **Extract** (schema-driven structured data, LLM-assisted).
- **Install / use:**
  ```bash
  pip install firecrawl-py        # or: npm i @mendable/firecrawl-js
  # app.scrape_url("https://example.com", params={"formats":["markdown"]})
  ```
  Site [firecrawl.dev](https://www.firecrawl.dev/) · repo [github.com/mendableai/firecrawl](https://github.com/mendableai/firecrawl) · docs [docs.firecrawl.dev](https://docs.firecrawl.dev/). Works as an **agent tool / MCP server**; this repo already ships a Firecrawl *skill*.
- **Where it fits:** the layer where an agent needs *clean full source content*, complementary to [[Perplexity]] (which answers *questions* with citations). Firecrawl gives the *full source*; Perplexity gives the *answer*. Lighter than [[Bright Data]] (industrial scale) and [[Scrapling]] (self-hosted control); LLM-output-shaped.

### NotebookLM-py — *deep research (to test)*

**① How I use it**
Haven't done it yet, but from what I understand it should work for **deep research** too — to verify. (Full tool description above in MEMORY.)

**② Source note** — [[NotebookLM-py]] (see MEMORY section). Relevant to research specifically: built-in web/Drive **research agents** with **fast/deep** modes and auto-import of found sources; cited `ask --json` Q&A; the *distill Deep Research → `SKILL.md`* recipe turns a one-time deep dive into a reusable, zero-token capability. This is the "to test" path: run its deep-research agent, then bake the condensed output back into the vault or a skill.

### Research skill (agent swarm) — *structured deep research, wired to this LLM Wiki*

**① How I use it**
A skill I found online at some point; in this repo it's **adapted for an LLM Wiki like this one**. It runs an agent-swarm deep research — an independent agent per item, in parallel — and the structured output is wired to flow into the vault via ingest.

**② Source** — `.claude/skills/research`, `.claude/skills/research-deep` (+ `research-add-items`, `research-add-fields`, `research-report`) in this repo.
A multi-phase, fan-out research pipeline for academic/benchmark/technology-selection work. It produces a structured outline, then launches **one independent web-search agent per research item in parallel batches** (the "swarm"), each writing a validated JSON record — then compiles a report that feeds this vault.

- **Phase 1 — `/research <topic>`** (`allowed-tools: Read, Write, Glob, WebSearch, Task, AskUserQuestion`): (1) generate an initial framework (items list + field framework) from model knowledge, confirm via `AskUserQuestion`; (2) launch a background web-search agent to supplement latest items + recommended fields within a chosen time range; (3) ask for any existing field-definition file to merge; (4) generate **`outline.yaml`** (items + execution config: `batch_size`, `items_per_agent`, `output_dir`) and **`fields.yaml`** (field definitions with `brief → moderate → detailed` levels + reserved `uncertain` list); (5) save to `content/_raw/research-workspaces/{topic_slug}/` and confirm.
- **Refine:** `/research-add-items`, `/research-add-fields`.
- **Phase 2 — `/research-deep`** (`allowed-tools: Bash, Read, Write, Glob, WebSearch, Task`): auto-locate `outline.yaml`; **resume check** (skip completed JSON); **batch execution** — batch by `batch_size` (user approval before each next batch), each agent handles `items_per_agent` items, launched as background parallel web-search agents with task output disabled; each agent outputs structured JSON per `fields.yaml`, marks uncertain values `[uncertain]`, and must pass `validate_json.py` for full field coverage before its task is considered complete; then wait/monitor → summary report (completion count, failed/uncertain items, output dir).
- **Wiring to the wiki:** workspaces live **outside** published Quartz content (under `content/_raw/`), so working files don't deploy. Only the final `report.md` is promoted by `/research-report` into `content/_raw/inbox/` for `/ingest` to classify into a topic folder. This is the "adapted for LLM Wiki" part — deep research → structured records → report → ingest → interlinked vault notes.
- **Related concept** (not the skill, but the pattern): [[Swarm Research — Orchestrating Coding Agents]] — shepherd/explorer/optimizer coding-agent swarms using Git branches as persistent memory.

---

## 🪙 TOKEN USAGE

Verbose output and bloated context cost money and burn the context window. I use **Caveman** for output compression; the broader toolkit is catalogued for the article but not yet personally tested.

### Caveman — *output-token compression*

**① How I use it**
I've used it — but in **`full` mode it sometimes produces descriptions that are completely incomprehensible, especially in Polish.** So it's useful for cutting output, with a real readability caveat at the higher levels. (I haven't tested the other token tools.)

**② Source note** — [[Caveman]]
[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) (MIT) — a Claude Code skill/plugin (also Codex, Gemini, Cursor, Windsurf, Cline, Copilot, 30+ hosts) that makes the agent **talk like a caveman**: drop articles, filler, pleasantries; keep substance; use fragments. Cuts **~65% of output tokens** on average (range 22–87%) with **100% technical accuracy** preserved.

- **Install (one-time, Node ≥18, ~30s, idempotent):**
  ```powershell
  # Windows (PowerShell 5.1+)
  irm https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.ps1 | iex
  ```
  ```bash
  # macOS / Linux / WSL / Git Bash
  curl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.sh | bash
  ```
- **Turn on:** `/caveman` or say *"talk like caveman"*. On Claude Code a session hook writes a flag file so it talks caveman from message one (auto-activates each session on Claude Code, Codex, Gemini).
- **Levels (stick until session end):** `/caveman lite` (drops filler) → `/caveman full` (default caveman) → `/caveman ultra` (telegraphic) → `/caveman wenyan` (classical Chinese, shortest). **→ my caveat maps here: `full`+ can become unreadable, worse in Polish. Mitigation: use `lite`, or `normal mode` for anything that must be clear.**
- **Turn off:** say *"normal mode"* — do this for **code, commits, and security writing** where terseness hurts clarity.
- **Sub-commands / what you get:** `/caveman-commit` (Conventional Commits, ≤50-char subject) · `/caveman-review` (one-line PR comments) · `/caveman-stats` (real session token usage + lifetime savings + USD; `--share`) · `/caveman-compress <file>` (rewrites a memory file e.g. `CLAUDE.md` into caveman-speak, cutting ~46% **input** tokens every session; code/URLs/paths byte-preserved) · `caveman-shrink` (MCP middleware compressing tool descriptions) · `cavecrew-*` subagents (~60% fewer tokens) · statusline badge `[CAVEMAN] ⛏ 12.4k`.
- **Key caveat (from README):** caveman only affects **output/visible tokens** — **thinking/reasoning tokens are untouched**. It shrinks the *mouth*, not the *brain*. Biggest win is readability/speed; cost savings a bonus. Pair with [[Headroom]] to compress *input/context* tokens.
- **Benchmarks:** avg output 1214 → 294 tokens (**65%** saved); `caveman-compress` memory files 898 → 481 (**46%**). Measured against an explicit terse baseline (`evals/` three-arm harness), not the verbose default.

### The rest of the token toolkit (catalogued, not yet personally tested)

From [[Token Optimization for Claude Code]] — a curated list of tools cutting Claude Code token usage 40–98% (proxies, context sandboxes, CLAUDE.md templates, code graphs). Candidates worth a mention in the article as "the ones I haven't tried yet":

- **[[Headroom]]** — compresses everything the agent *reads* (tool outputs, logs, RAG chunks, files, history) before it hits the LLM: **60–95% fewer tokens**, same answers. Library, proxy, or MCP. Apache 2.0. (The input-side complement to Caveman's output side.)
- **[[Ponytail]]** — YAGNI-first reasoning ladder so the agent writes minimal code: −54% LOC, −22% tokens.
- **[[Graphify]]** — code/docs/images → queryable knowledge graph: **71× token reduction** via structural retrieval instead of file-by-file reads.
- **[[Codebase Memory MCP]]** — tree-sitter + LSP persistent repo knowledge graph: ~99% fewer tokens on code navigation.
- **[[Camofox Browser]]** — returns pages as an accessibility tree instead of raw HTML: ~90% agent token cut on web work.
- **[[Progressive Disclosure]]** / **[[HOMER — Structured Agent Memory]]** / **[[SkillWeaver — Compositional Skill Routing]]** — the context-engineering patterns behind the numbers (index-first priming; hierarchical memory ~22% baseline tokens; MCP tool-routing 99.9% token cut).

---

## Quick reference table (for the article)

| Op | Tool | What it fixes in Claude Code | Type | How I use it |
|----|------|------------------------------|------|--------------|
| Video | [[Claude Video]] | Can't *watch* video | `/watch` skill | Understand/analyze video, grab YT transcripts |
| Video | [[HyperFrames]] | Can't *render* video | HTML→MP4 skill | Generate/edit on-brand video |
| Design | [[UI UX Pro Max]] | Generic UI, no design system | CC skill | UX audits, design-system base |
| Design | [[UX RULER]] | Feature-jumping, no audience thinking | UX skill | Design UX/UI for the right target group |
| Design | [[Impeccable]] | AI-slop aesthetic | design-language skill | UX/UI free of AI slop |
| Memory | LLM Wiki / second brain ([[LLM Knowledge Bases]], [[Building an AI Second Brain]], [[Brain]]) | Session amnesia | plain-text vault + MCP | This repo as memory; same concept in agentic systems |
| Memory | [[NotebookLM-py]] | No grounded synthesis/memory layer | skill/MCP/CLI | YT transcripts + NotebookLM inside Claude Code |
| Research | [[Firecrawl]] | Built-in scraper flaky | API/skill/MCP | Fallback scraper → clean Markdown |
| Research | [[NotebookLM-py]] | Shallow deep research | grounded agent | Deep research (to test) |
| Research | Research skill (agent swarm) — `.claude/skills/research*` | No structured, parallel deep research | multi-agent skill | Deep research wired to the LLM Wiki |
| Token | [[Caveman]] | Verbose output burns tokens | CC skill | Output compression (caveat: `full` unreadable, esp. PL) |
| Token | [[Headroom]], [[Ponytail]], [[Graphify]], [[Camofox Browser]] … | Bloated context/output | various | Catalogued, not yet tested |

---

## Gaps / to-do flagged for the article

- **Caveman readability** — quantify the `full`-mode-in-Polish problem; recommend `lite` as the safe default, or a Polish-aware terse mode.
- **NotebookLM-py deep research** — untested by me; validate the deep-research agent + the distill→`SKILL.md` recipe before recommending it.
- **Token tools beyond Caveman** — Headroom/Ponytail/Graphify are catalogued, not personally verified; the article should mark these as "candidates, not endorsements."
- **Design dataviz** — no vault note yet on charting/dataviz for Claude Code (a live `dataviz` skill exists in-harness but is undocumented here).

---

## Sources cited
[[Claude Video]] · [[Video Use]] · [[HyperFrames]] · [[UI UX Pro Max]] · [[UX RULER]] · [[Impeccable]] · [[LLM Knowledge Bases]] · [[Building an AI Second Brain]] · [[Brain]] · [[NotebookLM-py]] · [[Open Notebook]] · [[Firecrawl]] · [[Perplexity]] · [[Caveman]] · [[Headroom]] · [[Token Optimization for Claude Code]] · [[Graphify]] · [[Camofox Browser]] · [[Ponytail]] · [[Codebase Memory MCP]] · [[Progressive Disclosure]] · [[HOMER — Structured Agent Memory]] · [[SkillWeaver — Compositional Skill Routing]] · [[Swarm Research — Orchestrating Coding Agents]] · [[Agent Skills]] · [[OpenKB]] · in-repo skills: `.claude/skills/research`, `.claude/skills/research-deep`
