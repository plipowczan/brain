---
title: "Tech News Weekly"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["project", "plsoft", "ai", "newsletter", "automation", "cli"]
type: basic-note
agent-created: true
summary: "PLSoft project — an automated weekly tech newsletter generator: a TypeScript CLI that sources, selects, writes, illustrates, and publishes AI/tech news to LinkedIn"
---
# Tech News Weekly

## 🗒️ Description
A [[PLSoft]] project: an automated weekly newsletter on AI, LLMs and tech, published to a Polish-language LinkedIn audience (~700 subscribers). It's a TypeScript CLI pipeline that sources articles, has Claude select and write the issue, generates platform-specific cover images, drafts social posts, and schedules publishing — replacing an earlier [[Make]] automation.

## 🧩 Pipeline
`fetch → select → generate → cover → social → publish_social → archive`

Each command reads the previous step's artifacts from a per-ISO-week folder and writes new ones; only an issue counter in `state.json` is mutated. Stateless and resumable.

## Technology

### Stack
- **Runtime**: Node.js 20+ (ESM), TypeScript (strict), [[pnpm]], tsup; [[Git]] versions the artifacts.
- **CLI**: Commander.js; config in YAML validated by Zod; Pino JSON logging.
- **Content sourcing**: Event Registry API (concept/keyword/category queries over a rolling 7-day window, curated source list).
- **AI**: Claude (Anthropic) via the `tool_use` pattern for structured selection, newsletter writing, social copy, and taglines.
- **Cover images**: Satori (JSX→SVG) + Sharp (SVG→PNG) rendered per platform (LinkedIn/Facebook/Instagram dimensions).
- **Publishing**: Publer API (schedules to LinkedIn/Facebook/Instagram).
- **Dev**: Vitest, ESLint, Prettier; OpenSpec workflow skills.

## ⚙️ Know-how (reusable)
- **`tool_use` for editorial control.** Claude doesn't free-write selection — it returns structured JSON (rank, section, audience segment, summary, rationale) scored against six criteria, balanced across audience segments. Malformed model JSON is salvaged with `jsonrepair` before failing.
- **Prompts as editable assets.** Selection / newsletter / social / tagline prompts are external Markdown with Handlebars placeholders, populated from config — tone and rules change without touching code.
- **Ghostwriting rules encoded in the prompt.** First-person practitioner voice, banned tokens (no em-dashes, no markdown), explicit hook patterns and hashtag policy — the writing-style discipline lives in the prompt, not in post-editing.
- **Render-once, scale-per-platform covers.** One JSX template renders at a reference width, then logo/tagline scale factors and output dimensions vary per platform.
- **Resilience**: retries with backoff on Event Registry + Anthropic, 15s polling on Publer's async jobs, atomic state writes (temp file + rename), and a warning if you archive before publishing.

## 🔗 Links
- [[PLSoft]] — runs this project; the newsletter is part of the PLSoft brand
- [[Claude Code]] · [[Git]] · [[Make]] (the replaced automation)
- [[TTS Engines Comparison (Polish)]] — sibling research on Polish-language AI media
- [[Autonomous Sales Agent Playbook]] — related agent-as-pipeline pattern
- [[Dev Libraries & Build Tools]] (Commander.js, Zod, Pino, Satori, Sharp, Vitest) · [[Marketing, Sales & Publishing SaaS]] (Event Registry, Publer)
