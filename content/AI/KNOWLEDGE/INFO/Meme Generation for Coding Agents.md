---
title: "Meme Generation for Coding Agents"
date: 2026-10-15
enableToc: true
openToc: true
tags: ["knowledge", "info", "compiled", "ai", "memes", "claude-code", "agent-skills", "image-generation", "mcp", "research"]
type: compiled-note
source: "_raw/processed/2026-10-15_2026-10-15-research-meme-generation-for-coding-agents.md"
agent-created: true
summary: "Deep research on 48 skills, MCP servers and tools that let Claude Code make memes: no ready-made option fits Windows + Polish captions, so the answer is a small own skill on Satori + a local template catalog"
---
# Meme Generation for Coding Agents

🚀 **The short answer.** I asked whether a skill, MCP or tool exists that lets Claude Code make a meme on demand: the agent picks the template and writes the caption, something renders it. Forty-eight candidates later, none fits all my constraints at once (Windows 11 with Smart App Control, Polish captions with diacritics, no subscription, credentials that are safe to hand to an agent). The strongest result is a **small own skill** built from parts that were each tested or read in source: a local template catalog that tells Claude what each template means, a pure-WASM renderer ([[Satori]] + resvg-wasm), and [[Memegen]] only as a hosted fallback. The cheapest start is forking [[OpenClaw Meme Maker]].

⚠️ Everything below comes from a research run by background agents on 2026-10-15 (details in "How this was researched"). The design is a proposal: its Polish rendering path passed a proof of concept on test text, but real template images, display in Claude Code Desktop, the Stop hook in a live session, paid image generation and humour quality are untested.

## 🗒️ Description
Two questions in one: (1) a capability Claude Code or a similar agent can call to produce a meme image or GIF, and (2) sources and formats for memes *about* coding agents and dev culture. The space changes monthly (Tenor shut down, model IDs were retired, repos vanished), so every conclusion here has a `last_verified` of 2026-10-15 in the underlying results.

## 🔗 Links
- [[#Ranked options]]
- [[#Decision matrix]]
- [[#Recommended design: the agent-meme skill]]
- [[#What did not hold up]]
- [[#Cross-cutting findings]]
- [[#Verdicts for all 48 items]]
- [[#Open questions]]

## 🧩 Ranked options
Judgement of the research agents against my context, not independently re-run.

1. **Fork [[OpenClaw Meme Maker]]**: the cheapest start for static memes from about 20 classic formats (MIT, 3 files, curated registry, no copyrighted images shipped, Polish kept in a local run). PNG needs Chrome or Edge through playwright-core. Strip its "install this" advice: an old error message that told agents to install sharp caused a real outage.
2. **Build the own skill `agent-meme`** (design below): [[Satori]] 0.57.2 + `@resvg/resvg-wasm` 2.6.2, Anton then Impact, a local catalog with a "when to use" line per template. In the proof of concept a static meme took 545-655 ms with Node start-up, and a 12-frame 480x480 GIF was 175 KB, with every Polish diacritic correct.
3. **[[Meme Factory]] on [[Memegen]]** for low-effort English memes, after fixing 8 dead template IDs. Unkeyed output carries a watermark.
4. **Hosted MCPs as a fallback only**: Memesio (forced watermark, 750 templates, GIF tool broken in 3 of 3 runs, anonymous operator). Createa, Supermeme and Canva stay on watch.
5. **Reaction GIFs**: the GIPHY MCP by magarcia as a side tool (pure JS, idle since 2025, attribution required).
6. **Animation**: [[Slack GIF Creator]] needs a TTF font and `PYTHONUTF8=1`; ffmpeg with `fontfile=` or ASS subtitles is fast enough for a hook; [[HyperFrames]] for real video.
7. **Generative backgrounds only**: Codex `$imagegen` (ChatGPT plan quota) first, then Nano Banana 2.1 ([[Google Gemini]]). Never let a model draw the Polish caption: the one real test (FLUX.2) garbled it, and nothing else was verified.

**Skip or park:** memelink-cli, smart-meme-generator (hard-coded shared Imgflip account), the haltakov and Arcade Imgflip MCPs, nkapila6/mcp-meme-sticky, the Hugging Face demo Space, meme-generator-rs (native route), ComfyUI MCP for memes, MemeStack, the Pipeworx GIPHY gateway (44 tools behind a borrowed key), installing [[Peon Ping]] itself, Tenor (shut down 2026-06-30).

## 📒 Decision matrix
| Route | Who picks the template | Polish glyphs | App Control | Cost | Verdict |
|---|---|---|---|---|---|
| Own skill `agent-meme` (Satori + resvg-wasm) | Claude, from a local catalog | Pass in the proof of concept | LOW | 0 USD | ADOPT |
| [[OpenClaw Meme Maker]] (fork) | Claude + curated registry | Pass (agent-tested) | LOW | 0 USD | ADOPT as base |
| [[Memegen]] direct | Claude; API keywords are thin, `/images/automatic` fails for Polish | Pass (tested) | LOW | Free with watermark; key via 10 USD per month sponsorship | ADOPT as renderer |
| Pillow local script | Claude | Pass (tested) | LOW | 0 USD | ADOPT |
| Memesio hosted MCP | API (`get_template_ideas`) or Claude | Pass on static memes; GIF captions failed | LOW | Free, forced watermark | TRY as fallback |
| Createa hosted MCP | AI picks template | Not tested | LOW | 20 free credits per month | WATCH |
| Codex imagegen / Nano Banana backgrounds | Claude writes the prompt; caption added separately | Model-drawn Polish text not verified | LOW | Plan quota / 0.0336 USD per 1K image | TRY for backgrounds |
| Canva MCP | No meme catalog; copy a saved design | Not tested | LOW | OAuth, any plan | WATCH |

## 🎨 Recommended design: the agent-meme skill
A SKILL.md folder in `~/.claude/skills/agent-meme/`. Claude picks a template from a local catalog that says what each one *means*, writes 3-5 candidate captions in the audience's language, ranks them, and a local script renders the best one into a private PNG.

**Flow:** trigger ("make a meme about this bug" or `/meme`) → Claude reads a compact catalog (about 3-6k tokens for 20 templates) → picks the template by joke shape → writes captions within `max_chars` per slot → writes a UTF-8 spec JSON → `meme.mjs` renders with Satori + resvg-wasm → self-check (overflow, missing glyphs) → file lands in `%USERPROFILE%/Pictures/agent-memes/` → Desktop shows it via Read plus a clickable path; the CLI uses `start "" <path>`. Sharing is a manual action; the skill never posts.

**Files (v1):** `SKILL.md` (triggers in PL and EN, hard rules), `package.json` with exact pins and no install scripts, `catalog/templates.json` (15-25 formats), `references/dev-agent-jokes.md` (content layer), `references/posting-policy.md`, `fonts/Anton-Regular.ttf` + OFL text, `scripts/meme.mjs` (`list | render | fontcheck | selftest`), `scripts/fetch-template.mjs`, `tests/selftest.json`. **v2:** `gif.mjs` (frames → ffmpeg palettegen/paletteuse), `trending.mjs` (Imgflip `get_memes`, 24 h cache, reports missing formats, never edits the catalog), `memegen.mjs` (hosted fallback, refuses captions flagged private).

**Catalog entry:** `id`, `name`, `aliases`, `meaning`, `when_to_use`, `avoid_when`, `joke_shape` (contrast / escalation / denial / dilemma / deadpan / reveal), `layout`, `slots` (role, normalised box, `max_chars`, case), `examples` (at least one EN and one PL), `renderers` (local image, memegen id, imgflip id), `source`, `licence_note`, `freshness`. Memeboat's REST metadata (situations, an AI-written meaning, example captions) is the model for this schema, but its images are a provenance risk.

**Rendering rules for Polish:** NFC-normalise, uppercase with `toLocaleUpperCase('pl-PL')` only where the slot says so, run a tofu detector (Satori `loadAdditionalAsset`) for each font in the chain and take the first with zero missing glyphs, line-height 1.32 (1.12 collided on Polish uppercase), binary-search auto-fit, never register same-name font subsets or variable fonts, and pass text only through UTF-8 spec files or argv arrays.

**Animation:** Satori renders 8-15 frames, ffmpeg (the winget Gyan build, not Playwright's) encodes with `palettegen=stats_mode=diff` / `paletteuse`; captions on an existing clip go through a UTF-8 `.ass` file, never inline `drawtext` or `font=`.

**Optional Stop hook** (off by default, add after a week of manual use): `Stop` fires after every reply, so exit silently if `stop_hook_active`, classify the last assistant message with EN+PL regexes (success or failure only), enforce a 15-minute global cooldown and 6 memes a day, and pick from a fixed caption pool so no work text leaks into a meme. Spawn the render as a detached child, always exit 0. In the proof of concept five piped events behaved correctly in 158-219 ms; it was not tested in a real session. Borrow the throttling from [[Peon Ping]]: 5 s debounce, silent window for short tasks, subagent suppression via `agent_id`, a pause command; write it in Node rather than PowerShell and never rewrite `settings.json` from an installer.

**Generative backgrounds (rare):** only for scenes no template covers, always with the instruction "no text, no letters, no logos" and the top and bottom fifth kept simple. Route 1 is Codex delegation (`codex exec` with `$imagegen`; no new credential, but 3-5 times the plan quota of a text turn); route 2 is per-image billing (`gemini-nano-banana-2.1`, 0.0336 USD per 1K image, or `gpt-image-2.5-flare` at 0.053 USD for a medium 1024x1024). Local diffusion is out: the GPU has 6 GB of VRAM.

**Fallbacks, in order:** Satori + resvg-wasm → Playwright-core with signed Edge (never run `playwright install`, its bundled ffmpeg was blocked) → Pillow script → memegen.link hosted (non-sensitive captions only; accept the watermark, sponsor for a key, or self-host from the Containerfile) → Imgflip `caption_image` with a Bearer key → Memesio (emergency only).

**Mods as phase 2:** a [[Claude Code Mods (RoboNuggets)|Claude Code mod]] can hook `turn.complete` and, in Desktop, may show a meme through the Desktop-only `Svg` element (whether it keeps embedded images is undocumented and untested). `$.http.fetch` returns text only, so a PNG must be fetched through `$.process.run` and curl.exe, mods are unsandboxed, and the API churns (changes in about 13 releases over 14 days).

## ☘️ What did not hold up
The preliminary screen made claims that the deep research overturned. The ones that change a decision:
- **memegen.link:** the default font is Titillium Web Black, not Noto Sans Bold (both render Polish correctly); self-hosting *is* documented; 51 of 209 templates carry keywords, but mostly franchise names, not meanings; `/images/automatic` returns unrelated images for Polish prompts.
- **meme-factory:** 8 of the 21 template IDs it teaches return 404 on memegen today; its bundled CLI prints nothing; SKILL.md hides the watermark and training-data terms.
- **Memesio:** the catalog is 750 templates, not "10,000+"; the GIF tool captioned 1 of 15, 0 of 50 and 0 of 20 frames; the repo is 404.
- **Memeboat:** 30,674 templates, but its MCP drops the meanings its own REST API carries, the hosted MCP returned HTTP 500 on every try, and its About page says templates come from Imgflip with Imgflip's watermark masked.
- **Imgflip MCPs:** haltakov's has no commit since 2025-03; Arcade's `CreateMeme` very likely needs Premium (inferred); `mariokernich/imgflip-mcp` is the better lead but takes a password only, while Imgflip's docs have shown Bearer keys since about 2026-09-30.
- **Smart-meme-generator:** 2,207 downloads, not ~14K, and a hard-coded shared Imgflip account that it uses silently.
- **Tenor** shut down on 2026-06-30; Microsoft's GIPHY MCP depends on MCP sampling, which Claude Code does not support.
- **Nano Banana:** `gemini-nano-banana-2.1` went GA on 2026-10-06 at half the price of NB2; GPT Image 2.5 was released 2026-09-08 and gpt-image-1 shuts down 2026-10-23.
- **FLUX.2 licences** are not really disputed (klein 4B is Apache-2.0; outputs of the non-commercial models may be used commercially), but the Polish caption test failed.
- **Machine:** the blocker is Smart App Control in enforce mode, deciding per file, not a generic "App Control" (see below).

## 🧩 Cross-cutting findings
- **Polish glyphs are solved on the renderer side and unverified on the model side.** Satori with Anton or Impact, Pillow with a TTF, ffmpeg with `fontfile=` or ASS, and memegen all rendered "Zażółć gęślą jaźń" correctly. For Nano Banana, GPT Image, Ideogram, Seedream, Grok and Createa no Polish result exists. Rule: generate backgrounds without text, add the caption in a deterministic step.
- **Template selection is the real gap, not rendering.** memegen keywords are thin and Imgflip returns names plus `box_count`. Hence the local catalog with a "when to use" line. Academic precedent is modest (memeBot about 69 percent over 24 templates).
- **"Free" hosted tools cost something else:** unkeyed memegen requests are watermarked and may be used as training data; Memesio forces a watermark and puts the caption in the URL slug; Seedream's watermark defaults to on; Ideogram free-tier images are public; Glif's terms make prompts non-confidential.
- **Smart App Control is per file.** Playwright's unsigned `ffmpeg-win64.exe` was blocked, yet the winget Gyan ffmpeg, `chrome-headless-shell`, sharp's `.node` and Remotion's binaries ran, and Pillow `.pyd` files load. Smoke-test the specific file. See also [[AI Agent Security]].
- **Agent-facing security hygiene.** A shared Imgflip account in plain text, a ComfyUI Cloud tool that returns a shell command the plugin tells the agent to run verbatim, bridges that reuse the Codex session token, a skill that tells the agent to `pip install` and edit its own MCP config, and Snyk's ToxicSkills finding of 13.4 percent of 3,984 registry skills with a critical issue. Read the SKILL.md and the source before installing.
- **The terminal cannot show the picture.** The Claude Code TUI does not render images. Practical surfaces: `start "" file.png`, Desktop inline widgets (data URIs only), Artifacts, or a Discord webhook upload.
- **A Stop hook fires on every reply, not per task**, and has to coexist with the other Stop hooks (graft, security-guidance, the Codex gate).
- **Where generated memes may be posted is limited.** r/ProgrammerHumor Rule 9 removes AI-generated posts; r/programming allows no memes; the four Polish sites checked (Kwejk, JBZD, Demotywatory, Wykop) have no AI rules but also grant no right to reuse images. Pelham II (CJEU C-590/23, 2026-04-14) makes pastiche an EU-wide concept that needs a recognisable creative dialogue with the original.
- **LLM captions are decent against the median and weak against the best.** On the New Yorker caption benchmark Claude-3-Opus beat the human top-10 in 54.4 percent of comparisons, yet an expert preferred it only 1.6 percent of the time. No benchmark covers Polish.

## 📋 Verdicts for all 48 items
Badge: verdict · Smart App Control risk on this machine.

**A. Meme engines and APIs**
| Item | Verdict | Risk |
|---|---|---|
| [[Memegen]] | ADOPT (default hosted renderer) | LOW |
| Imgflip API | TRY (secondary renderer) | LOW |
| Local Pillow / ImageMagick script | ADOPT (Pillow route) | LOW |
| meme-generator-rs | SKIP (WATCH only via Docker) | HIGH |
| Memesio | TRY (fallback only) | LOW |
| Createa.meme | WATCH | LOW |
| Supermeme.ai, KLIPY | WATCH Supermeme; SKIP KLIPY as generator | LOW |
| memecub, MemeStack | WATCH memecub; SKIP MemeStack | LOW |

**B. Skills and MCP servers**
| Item | Verdict | Risk |
|---|---|---|
| [[Meme Factory]] | TRY (then fork) | LOW |
| memelink-cli | SKIP | HIGH |
| meme-card-maker | WATCH | LOW-MEDIUM |
| [[OpenClaw Meme Maker]] | ADOPT (base pattern) | LOW |
| smart-meme-generator | SKIP | LOW |
| Imgflip MCPs (haltakov, Arcade) | SKIP both | LOW |
| mariokernich/imgflip-mcp | TRY, conditionally | LOW |
| t0ster / nkapila6 meme MCPs | WATCH t0ster; SKIP nkapila6 | LOW-MEDIUM / HIGH |
| HF Space meme-context-protocol | SKIP (keep the JSON contract) | MEDIUM-HIGH locally |
| [[Slack GIF Creator]] | TRY (animation layer only) | LOW-MEDIUM |
| GIPHY MCPs | TRY magarcia only | LOW |
| Pipeworx GIPHY gateway | SKIP | LOW hosted |
| Glif MCP | WATCH | LOW |
| Memeboat | WATCH (do not adopt) | LOW |
| dhruvmehra/makememe | TRY as a reference | LOW |
| sinanpl/mcp-memes | WATCH (TRY only in Desktop) | none hosted |

**C. Generative image models:** Nano Banana (TRY, backgrounds), GPT Image 2 (TRY via Codex), Codex `$imagegen` delegation (TRY, default generative path), Ideogram 4 (WATCH), FLUX.2 (WATCH, background without text), [[BytePlus Seedream]] (SKIP for Polish captions), open-weight local renderers (WATCH), Grok Imagine (WATCH), aggregators fal / Replicate / OpenRouter (TRY as backend).

**D-E. Composition and platforms:** [[Satori]] + resvg-wasm (ADOPT), ffmpeg GIF captions (ADOPT), [[HyperFrames]] (TRY) and [[Remotion]] (WATCH), Canva MCP (WATCH), ComfyUI MCP (SKIP for memes).

**F-I. Patterns, content, registries, research:** own skill pattern (ADOPT), Stop-hook memes (TRY), display surfaces (ADOPT two-surface default), Claude Code mods (TRY as phase 2), [[Peon Ping]] (ADOPT design lessons, SKIP installing), Claude Code meme canon (ADOPT as joke-topics file), template sources and posting policy (ADOPT), Polish meme sites (WATCH), discovery registries (ADOPT as a routine), LLM caption-humour research (ADOPT as design input).

## ❓ Open questions
- Does a template meme with an LLM-written caption count as "AI-generated" under r/ProgrammerHumor Rule 9? Undefined.
- Template-image copyright and Imgflip's terms for downloading from its CDN are unchecked.
- Polish humour quality is unmeasured; the proposed own test is about 54 images and under 2 USD.
- A fork of `mariokernich/imgflip-mcp` with an `IMGFLIP_API_KEY` Bearer header, or a throwaway Imgflip account, is the only Imgflip route worth testing.
- Whether Claude Code Desktop shows a PNG inline through Read rests on one user report.

## 🔬 How this was researched
Four waves of background agents researched 48 items across nine groups (engines, skills and MCP, generative models, programmatic composition, platforms, patterns, content sources, registries, research) against 48 fields, then a synthesis agent designed the skill from the first 39 results, and a fourth wave covered leads found along the way. Preliminary claims were treated as leads, not evidence. Values flagged uncertain are omitted from the underlying report (342 of 2,304 field values, 14.8 percent). No agent created an account or made a paid call. Disclosed side effects: two public test pages on memebo.at (test string only) and two requests to api.giphy.com with a third party's hard-coded key found in a public repo, which breaches the no-credentials rule; the key is redacted in the results. Apart from field-coverage validation, a secret scan and one registry read, nothing here was independently re-run.

## 📖 Further reading
- [[Claude Code]] · [[Agent Skills]] · [[Skill Authoring Best Practices]] · [[Claude Code Mods (RoboNuggets)]] · [[Harness Engineering]]
- [[Google Gemini]] · [[GPT Image 2 + Seedance Workflow]] · [[Awesome Nano Banana Pro Prompts]] · [[Replicate]] · [[BytePlus Seedream]]
- [[HyperFrames]] · [[Remotion]] · [[Playwright MCP]] · [[AI Agent Security]]

## Resources
- Full research report (all 48 items, every field): `content/_raw/processed/2026-10-15_2026-10-15-research-meme-generation-for-coding-agents.md`
- Research workspace with per-item JSON results, outline and generator: `content/_raw/research-workspaces/meme-generation-for-coding-agents/`
- Tool notes: [[Memegen]] · [[OpenClaw Meme Maker]] · [[Meme Factory]] · [[Slack GIF Creator]] · [[Satori]] · [[Peon Ping]]

---
Template: [[templates/knowledge_note_info]]
