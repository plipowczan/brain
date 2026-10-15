---
title: "Memegen"
date: 2026-10-15
enableToc: true
openToc: true
tags: ["tool", "ai", "memes", "claude-code", "agent-skills", "api", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-10-15_2026-10-15-research-meme-generation-for-coding-agents.md"
agent-created: true
summary: "jacebrowning/memegen (memegen.link) — open-source URL-based meme API with 209 templates and no auth; my default hosted renderer, with a watermark, training-data terms and thin template metadata"
---
# Memegen

🗒️ **[jacebrowning/memegen](https://github.com/jacebrowning/memegen)** is the open-source service behind **memegen.link**: a URL-based meme API. You pick a template id, put the lines in the path and get an image back, no account and no key. MIT, about 1.75k stars, last push 2026-10-15 (mostly dependency bumps), with an agent-oriented URL guide added in May 2026. I use it as the hosted renderer in the [[Meme Generation for Coding Agents]] design, because it is the only hosted option that behaved in every test.

## Links
### Description
- **Two ways to call it.** A GET URL built by the agent (`/images/<template>/<line1>/<line2>.png`, with `_` for a space, `~q` for `?`, `~s` for `/`, `~n` for a newline) or `POST /images` with JSON `{template_id, text: [...], extension: "png"}`, which returns a `url`. A POST took about 0.2 s and the cold render about 1.3-1.5 s; GIF and WebP take 6-10 s. Output formats are png, jpg, gif and webp; some templates animate.
- **Templates.** 209 of them, listed at `GET /templates/`. The metadata is thin: `keywords` are empty on 158 of 209 and mostly franchise names on the rest ("The Office", "Futurama"), not meanings. `POST /images/automatic` matched an English prompt well but returned an unrelated image for Polish text and for a "you're absolutely right" prompt.
- **Polish works.** The default font is Titillium Web Black (not Noto Sans Bold, as I first assumed); it, Impact and Noto Sans all rendered "Zażółć gęślą jaźń" correctly, and the forced uppercase is correct for Polish. Templates force uppercase, with no per-request case control.
- **Terms to know.** Requests without a key are **watermarked, may be rate-limited and may be used as training data**; the hosted service also forwards caption text and referer to the maintainer's tracking service (from the source). An API key comes with a 10 USD per month GitHub sponsorship (`X-API-KEY` header, not the URL) and lets you set your own watermark.
- **Self-hosting is documented** (`make run`, a Heroku deploy and a Containerfile), though there is no official Docker image (#726) and the instructions lean to Heroku, macOS and Linux.

### Download or use
Nothing to install for the hosted API. Minimal Claude Code route: a skill that fetches `https://api.memegen.link/templates/` once (or ships a curated local catalog), has Claude pick the template and write the lines, builds the URL, downloads the PNG to a local file and opens it with `start file.png`. Use Node `fetch` with UTF-8 bodies: a Polish JSON body pasted inline through Git Bash curl arrived garbled. `%`, `#`, `/`, `?` and `_` in captions need the escape rules, and `%` and `#` only worked after memegen's 301 redirect.

## Reasoning for
I want one renderer that needs no native binary and no account, for non-sensitive captions. Memegen is that, with three caveats: the watermark, the training-data clause, and the fact that every hosted caption can end up cached for weeks. Hence the rule in my design: use it only as a fallback behind a local renderer, and never for captions that name a client or a project. The thin template metadata is the reason the design keeps its own catalog with a "when to use" line per template.

⚠️ Known issues from the research: custom backgrounds need a public URL, possible Pillow memory growth on small dynos (#860), and no case control. Several skills wrap memegen and inherit all of this: [[Meme Factory]], makememe (which has no API-key support, so even sponsoring would not remove its watermark) and memelink-cli.

## Alternatives considered
- **Imgflip API:** free `get_memes` (about 100 templates) and `caption_image`, watermark on the free tier; auth moved to Bearer keys around 2026-09-30 while wrappers still use passwords.
- **Local rendering** with [[Satori]] or a Pillow script: no watermark and no data leaves the machine, at the cost of owning a template catalog. This is my primary route.
- **[[OpenClaw Meme Maker]]:** a curated registry plus local rendering, Imgflip as an option.
- **Memesio** and other hosted MCPs: forced watermarks, anonymous operators, brittle.

## Resources
- 🔗 Repo: [github.com/jacebrowning/memegen](https://github.com/jacebrowning/memegen) · [API docs](https://api.memegen.link/docs/) · [guide](https://memegen.link/guide/) · [clients and terms](https://memegen.link/clients/)
- 📖 Related: [[Meme Generation for Coding Agents]] · [[Meme Factory]] · [[OpenClaw Meme Maker]] · [[Satori]] · [[Claude Code]] · [[Agent Skills]]

---
Template: [[templates/tool]]
