---
title: "Spec-driven SEO and GEO"
date: 2026-04-26
enableToc: true
openToc: true
tags: ["knowledge", "info", "seo", "geo", "claude-code", "openspec"]
type: knowledge-note
agent-created: true
summary: "Synthesis of SEO + GEO optimization patterns from portfolio and Qamera AI case studies — code-stack only top 20% controls"
---

# Spec-driven SEO and GEO

## 🗒️ Description

A synthesis of SEO and GEO (Generative Engine Optimization) patterns drawn from two case studies — the portfolio (Vite 7 + React 19 SPA) and [[Qamera AI]] (Next.js 16 + Turborepo + Vercel + Supabase). The central thesis: **full control over SEO and GEO is only possible today on a code-based stack** — and it only pays off once you layer a spec-driven AI workflow on top ([[OpenSpec]] / [[OPSX Workflow]]).

WordPress / Webflow plugins cover the top 80% of needs. The top 20% (CSP with reporting to Sentry, `xhtml:link` in the sitemap, `requestIdleCallback` in `<head>`, build-time `llms.txt`, per-bot rules in `robots.txt`) is what wins positions today — in classic SERP and in LLM answers.

## 🧩 Toolchain — five tools, one loop

| Tool | Role |
|-----------|------|
| `claude-seo` plugin | Audit as the first command — technical, GEO, schema, performance, hreflang |
| [[OpenSpec]] / [[OPSX Workflow]] | Spec-driven workflow — `proposal.md` → `design.md` → `specs/` → `tasks.md` before code |
| Lighthouse MCP | Lab CWV and LCP opportunities from inside the agent |
| Rich Results Test + securityheaders.com + Sentry CSP Reports | Verification at every step |
| Git worktrees | Parallel work on independent changes (when the project allows it) |

The loop: **audit → proposal → design → specs → tasks → implement → verify → archive**. Spec-driven is a feedback loop for the AI — reviewing a spec costs minutes, reviewing 200 lines of generated code in the wrong place costs hours. See: [[Specification-Driven Development]], [[Context Engineering]].

## 🧩 Patterns transferable 1:1 between stacks

### A. `llms.txt` as a custom build-time artifact

[llmstxt.org](https://llmstxt.org/) (Answer.AI / Jeremy Howard, 2024). In 2026 ChatGPT web search, Perplexity, Claude Search and Gemini Deep Research all respect it. Build-time generator in Node:
- `llms.txt` — shortened index of content (~16 KB)
- `llms-full.txt` — full content with a `\n\n---\n\n` separator for single-token ingest

Not doable in a CMS panel — requires your own CMS with control over section ordering per language and a fallback for missing `description`.

### B. Schema enrichment

`BlogPosting` / `Article` / `Service` / `Product` with the full set of fields. Three non-obvious details:
- `articleBody: post.excerpt` is **semantically wrong** (the spec requires full content) — drop the field rather than hack it
- `publisher.logo` must be a **raster** (PNG 600×60), not SVG
- `datePublished` / `dateModified` in **ISO 8601 with `Z` or offset**, not just `YYYY-MM-DD`

Missing fields that add value: `mainEntityOfPage`, `publisher`, `dateModified`, `description` with a fallback to the first paragraph.

### C. Hreflang at the sitemap level, not just `<head>`

`Metadata.alternates.languages` is a head-level signal. Google prefers **sitemap-level `xhtml:link`** for clustering language variants:

```xml
<url>
  <loc>https://qamera.ai/pricing</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://qamera.ai/pricing"/>
  <xhtml:link rel="alternate" hreflang="pl" href="https://qamera.ai/pl/pricing"/>
  <xhtml:link rel="alternate" hreflang="uk" href="https://qamera.ai/uk/pricing"/>
  <xhtml:link rel="alternate" hreflang="x-default" href="https://qamera.ai/pricing"/>
</url>
```

A shared helper `buildLanguageAlternates(pathname)` used both in `sitemap.ts` and in every `generateMetadata`. **A drift-guard test in CI** fails if someone adds a path to the sitemap but forgets `alternates` in `page.tsx`.

### D. AI bot allowlist — named rules instead of wildcard

`robots.txt` with separate blocks for `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot`. Wildcard = "no signal", the bot interprets that conservatively. Named allow = "explicit yes".

### E. Security headers as a trust signal

- `X-XSS-Protection` is **deprecated** — drop it rather than update it
- `Content-Security-Policy` in **Report-Only** mode with reporting to Sentry before enforcing
- HSTS with `preload`, `Permissions-Policy` per page (geolocation, camera, microphone, payment)
- `securityheaders.com` C → A is reachable in a single afternoon

## 🧩 Stack-specific gotchas

**SPA / Vite:** `async=true` on an inline `<script>` is a **myth** — the attribute applies to downloading, but the inline code itself executes synchronously during HTML parsing. Fix: `requestIdleCallback` + `setTimeout(2000)` fallback for Safari ≤ 16.3.

**Next.js / SaaS:** CLS from client-side fetch without reserved dimensions (Qamera `/marketplace/styles`: 0.467 → 0.016 via SSR initial grid — bonus for GEO, because non-JS crawlers see the content).

**Field vs lab data:** Lab score (Lighthouse) has high variance (post-deploy variance 38 → 61 → 43). **Real verification is CrUX from Google Search Console** after 2-4 weeks. PSI cold function can show LCP 14.4s while Lighthouse warm shows 1.6s — a single PSI metric is sampling, always re-run.

## 🧩 Decision: one big PR vs many small ones

| Factor | One-PR (portfolio) | Multi-PR (Qamera) |
|---------|--------------------|--------------------|
| Maintainers | 1 | 2+ |
| Risk of file conflicts | low | high |
| Review cycle | self-review | code review by co-owner |
| Time distribution | one afternoon | 5 working days |
| Rollback granularity | all or nothing | per-feature |
| Dev environment | one | worktree + separate node_modules |

Threshold: thematic cohesion + <500 lines of diff + single maintainer → one PR. Disjoint file sets + multi-dev + monorepo → multi-PR with worktrees.

## 🧩 Meta-lessons

1. **Audits find bugs outside their scope** — e.g., self-referencing `alternateSlug` in the blog-article-writer skill, chain: data fix → code defense → process fix (a rule in `.claude/rules/`)
2. **AI workflow creates bugs, AI workflow fixes them** — a self-correcting loop, provided there is a process
3. **The second project = ~30% of the time of the first** — provided the patterns are documented (this note)
4. **Time compression is multiplicative**: code-based stack × good AI workflow = hours. Either alone is not enough.

## 🔗 Related

- [[OpenSpec]] / [[OPSX Workflow]] — spec-driven foundation
- [[Specification-Driven Development]] — why spec before code
- [[Claude Code]] / [[Awesome Claude Code]] / [[Claude Code Best Practice]] — agent as executor
- [[Vibe Coding]] / [[Agentic Coding]] — broader paradigm
- [[Qamera AI]] — Next.js / Turborepo / i18n case study
- [[Brain]] — related pattern: digital garden as a code artifact with its own verification loop

## 📖 Further reading

- [llmstxt.org](https://llmstxt.org/) — llms.txt spec
- [securityheaders.com](https://securityheaders.com/) — header scanner
- [Rich Results Test](https://search.google.com/test/rich-results) — structured data validator
- [Sentry Security Reports](https://docs.sentry.io/product/security-policy-reporting/) — CSP via Sentry
- [Google Search Central — Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article)
- [MDN — requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback)
- Full case study on the blog: [Why you can't do this on WordPress — spec-driven SEO on portfolio and Qamera AI](https://pawel.lipowczan.pl/blog/spec-driven-seo-portfolio-qamera-ai)

---
Source: `_raw/inbox/2026-04-22-portfolio-seo-improvements-brief.md` + `_raw/inbox/2026-04-22-qamera-seo-foundation-case-study.md`
