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

Synteza wzorców SEO i GEO (Generative Engine Optimization) wyciągniętych z dwóch case studies — portfolio (Vite 7 + React 19 SPA) oraz [[Qamera AI]] (Next.js 16 + Turborepo + Vercel + Supabase). Centralna teza: **pełna kontrola nad SEO i GEO jest dziś możliwa tylko na stacku opartym na kodzie** — i opłaca się dopiero, gdy dołożysz spec-driven AI workflow ([[OpenSpec]] / [[OPSX Workflow]]).

Pluginy WordPress / Webflow domykają top 80% potrzeb. Top 20% (CSP z reportingiem do Sentry, `xhtml:link` w sitemapie, `requestIdleCallback` w `<head>`, `llms.txt` build-time, per-bot reguły w `robots.txt`) to dziś zakres, w którym wygrywa się pozycje — w klasycznym SERP i w odpowiedziach LLM-ów.

## 🧩 Toolchain — pięć narzędzi, jedna pętla

| Narzędzie | Rola |
|-----------|------|
| `claude-seo` plugin | Audyt jako pierwsza komenda — technical, GEO, schema, performance, hreflang |
| [[OpenSpec]] / [[OPSX Workflow]] | Spec-driven workflow — `proposal.md` → `design.md` → `specs/` → `tasks.md` przed kodem |
| Lighthouse MCP | Lab CWV i LCP opportunities z poziomu agenta |
| Rich Results Test + securityheaders.com + Sentry CSP Reports | Weryfikacja na każdym kroku |
| Git worktrees | Równoległa praca nad niezależnymi changes (gdy projekt na to pozwala) |

Pętla: **audit → proposal → design → specs → tasks → implement → verify → archive**. Spec-driven jako feedback loop dla AI — review specu kosztuje minuty, review 200 linii wygenerowanego kodu w niewłaściwym miejscu kosztuje godziny. Patrz: [[Specification-Driven Development]], [[Context Engineering]].

## 🧩 Wzorce transferowalne 1:1 między stackami

### A. `llms.txt` jako własny artefakt build-time

[llmstxt.org](https://llmstxt.org/) (Answer.AI / Jeremy Howard, 2024). W 2026 ChatGPT web search, Perplexity, Claude Search i Gemini Deep Research go respektują. Build-time generator w Node:
- `llms.txt` — skrócony index treści (~16 KB)
- `llms-full.txt` — pełna treść z separatorem `\n\n---\n\n` do single-token ingest

Nie do zrobienia w panelu — wymaga własnego CMS-a z kontrolą kolejności sekcji per język i fallback dla brakujących `description`.

### B. Schema enrichment

`BlogPosting` / `Article` / `Service` / `Product` z pełnym zestawem pól. Trzy nieoczywiste detale:
- `articleBody: post.excerpt` jest **semantycznie błędne** (spec wymaga pełnej treści) — wytnij pole zamiast hackować
- `publisher.logo` musi być **rasterem** (PNG 600×60), nie SVG
- `datePublished` / `dateModified` w **ISO 8601 z `Z` lub offsetem**, nie samo `YYYY-MM-DD`

Brakujące pola, które dodają wartość: `mainEntityOfPage`, `publisher`, `dateModified`, `description` z fallback do pierwszego akapitu.

### C. Hreflang na poziomie sitemapy, nie tylko `<head>`

`Metadata.alternates.languages` to head-level signal. Google preferuje **sitemap-level `xhtml:link`** dla klasteryzacji wariantów językowych:

```xml
<url>
  <loc>https://qamera.ai/pricing</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://qamera.ai/pricing"/>
  <xhtml:link rel="alternate" hreflang="pl" href="https://qamera.ai/pl/pricing"/>
  <xhtml:link rel="alternate" hreflang="uk" href="https://qamera.ai/uk/pricing"/>
  <xhtml:link rel="alternate" hreflang="x-default" href="https://qamera.ai/pricing"/>
</url>
```

Wspólny helper `buildLanguageAlternates(pathname)` używany z `sitemap.ts` i każdego `generateMetadata`. **Drift-guard test w CI** failuje, gdy ktoś doda ścieżkę do sitemap, a zapomni o `alternates` w `page.tsx`.

### D. AI bot allowlist — named rules zamiast wildcard

`robots.txt` z osobnymi blokami dla `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot`. Wildcard = "brak sygnału", bot interpretuje to konserwatywnie. Named allow = "explicit yes".

### E. Security headers jako sygnał zaufania

- `X-XSS-Protection` jest **deprecated** — wytnij go zamiast aktualizować
- `Content-Security-Policy` w **Report-Only** trybie z reportingiem do Sentry przed wymuszeniem
- HSTS z `preload`, `Permissions-Policy` per-page (geolocation, camera, microphone, payment)
- `securityheaders.com` C → A jest osiągalne w jedno popołudnie

## 🧩 Stack-specific pułapki

**SPA / Vite:** `async=true` na inline `<script>` to **mit** — atrybut dotyczy ściągania, ale sam inline kod wykonuje się synchronicznie podczas parsowania HTML. Fix: `requestIdleCallback` + fallback `setTimeout(2000)` dla Safari ≤ 16.3.

**Next.js / SaaS:** CLS przez client-side fetch bez zarezerwowanych wymiarów (Qamera `/marketplace/styles`: 0.467 → 0.016 przez SSR initial grid — bonus dla GEO, bo non-JS crawlers widzą content).

**Field vs lab data:** Lab score (Lighthouse) ma duży variance (post-deploy variance 38 → 61 → 43). **Prawdziwa weryfikacja to CrUX z Google Search Console** po 2-4 tygodniach. PSI cold function może pokazać LCP 14.4s, gdy Lighthouse warm pokazuje 1.6s — jedna metryka z PSI to sampling, zawsze re-run.

## 🧩 Decyzja: jeden duży PR vs wiele małych

| Czynnik | One-PR (portfolio) | Multi-PR (Qamera) |
|---------|--------------------|--------------------|
| Maintainerów | 1 | 2+ |
| Ryzyko konfliktu plików | niskie | wysokie |
| Cykl review | self-review | code review wspólnika |
| Rozkład czasowy | jedno popołudnie | 5 dni roboczych |
| Rollback granularity | całość lub nic | per-feature |
| Dev environment | jedno | worktree + osobne node_modules |

Próg: tematyczna spójność + <500 linii diff + single maintainer → one PR. Disjoint file sets + multi-dev + monorepo → multi-PR z worktree'ami.

## 🧩 Meta-lekcje

1. **Audyt znajduje bug-i poza swoim scopem** — np. self-referencing `alternateSlug` w blog-article-writer skillu, łańcuch: data fix → code defense → process fix (reguła w `.claude/rules/`)
2. **AI workflow tworzy bug-i, AI workflow je naprawia** — pętla samokorygująca pod warunkiem, że jest proces
3. **Drugi projekt = ~30% czasu pierwszego** — pod warunkiem dokumentacji wzorców (ten note)
4. **Kompresja czasu jest multiplikatywna**: kodowy stack × dobry AI workflow = godziny. Każdy z osobna nie wystarczy.

## 🔗 Powiązane

- [[OpenSpec]] / [[OPSX Workflow]] — spec-driven foundation
- [[Specification-Driven Development]] — dlaczego spec przed kodem
- [[Claude Code]] / [[Awesome Claude Code]] / [[Claude Code Best Practice]] — agent jako wykonawca
- [[Vibe Coding]] / [[Agentic Coding]] — szerszy paradygmat
- [[Qamera AI]] — case study Next.js / Turborepo / i18n
- [[Brain]] — pokrewny pattern: digital garden jako kodowy artefakt z własną pętlą weryfikacji

## 📖 Further reading

- [llmstxt.org](https://llmstxt.org/) — spec llms.txt
- [securityheaders.com](https://securityheaders.com/) — skaner nagłówków
- [Rich Results Test](https://search.google.com/test/rich-results) — walidator structured data
- [Sentry Security Reports](https://docs.sentry.io/product/security-policy-reporting/) — CSP via Sentry
- [Google Search Central — Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article)
- [MDN — requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback)
- Pełny case study na blogu: [Dlaczego nie da się tego zrobić na WordPressie — spec-driven SEO na portfolio i Qamera AI](https://pawel.lipowczan.pl/blog/spec-driven-seo-portfolio-qamera-ai)

---
Source: `_raw/inbox/2026-04-22-portfolio-seo-improvements-brief.md` + `_raw/inbox/2026-04-22-qamera-seo-foundation-case-study.md`
