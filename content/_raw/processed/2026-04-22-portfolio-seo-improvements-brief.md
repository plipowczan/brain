---
status: draft / wsad dla asystenta
source_pr: https://github.com/plipowczan/portfolio/pull/2
source_change: openspec/changes/archive/2026-04-22-seo-improvements/
captured: 2026-04-22
---

# Wsad do artykułu: Od audytu SEO do grade A — 5 zmian na portfolio

**Data sesji:** 2026-04-20 (audyt) → 2026-04-22 (merge + archive)
**Powiązany PR:** [#2 seo-improvements](https://github.com/plipowczan/portfolio/pull/2) + [#3 EN translation](https://github.com/plipowczan/portfolio/pull/3)
**Archiwum OpenSpec:** `openspec/changes/archive/2026-04-22-seo-improvements/`

---

## Meta informacje

**Roboczy tytuł:** _Od audytu SEO do grade A — 5 zmian które zrobiłem w jedno popołudnie z Claude Code_

**Alternatywne tytuły:**

- _Security headers A+, Rich Results zero warnings, llms.txt — SEO portfolio w 2026_
- _Claude Code jako SEO engineer — co wyszło z audytu pawel.lipowczan.pl_
- _GEO, CSP i bilingual hreflang — o czym nie pisze się w tutorialach SEO_
- _Od „X-XSS-Protection" do Sentry CSP Report-Only — modernizacja security headers_

**Docelowy czytelnik:** developer/founder, który sam utrzymuje portfolio/SaaS/blog, ma już działający prerender + sitemap, ale podejrzewa że „pewnie dałoby się lepiej". Zna podstawy SEO (meta tags, canonical, schema) ale nie dotykał GEO, CSP ani hreflang. 25-45 lat, techniczny, czytuje Vercel blog.

**Format:** long-form blog post (15-20 min read), techniczny z narracją case-study. Polski z angielskim technicznym. Styl: bezpośredni, praktyczny, konkretne liczby. First-person.

**Kategoria:** AI (pasuje do narracji o Claude Code jako wykonawcy) — albo **Automatyzacja** jeśli chcesz wyodrębnić SEO od AI narracji.

**Przypominany wątek z poprzednich postów:** [Skills 2.0](/blog/skills-2-0-multi-agent-system-zarzadzanie-firma), [OPSX Workflow](/blog/opsx-workflow-strukturyzowana-praca-z-ai) — ten artykuł pokazuje OPSX w praktyce na realnym, mierzalnym problemie (SEO audyt → merge → metryki).

---

## Hook — "pewnie dałoby się lepiej"

Odpaliłem `/claude-seo:seo` na własnym portfolio nie dlatego, że coś nie działało, tylko dlatego że **zero widoczności ≠ zero problemów**. Audyt wyprodukował 10 findings — część oczywistych (deprecated `X-XSS-Protection`), część takich które zobaczyłem dopiero w raporcie (sitemap lastmod dla każdego URL ustawiony na ten sam dzień, semantycznie zły `articleBody: post.excerpt` w schema, zero presence w AI search). **Pięć realnych pól do pracy. Cztery i pół godziny z Claude Code. Jeden PR. Merge.**

Ten artykuł to nie tutorial. To **case study** z konkretnymi before/after, trade-offami i bugiem i18n którego bym nigdy nie znalazł bez tej pracy.

---

## Struktura artykułu — propozycja (9 sekcji)

### 1. Dlaczego audyt SEO małego portfolio ma sens

- Argument: nawet jeśli nie gonisz rankingów, audyt pokazuje martwe zakątki infrastruktury
- GEO (Generative Engine Optimization) to nowy wymiar — ChatGPT/Perplexity/Claude Search czytają twoje strony, ale inaczej niż Googlebot
- Mały scope = testowy poligon dla wzorców które możesz potem zastosować u klientów
- Konkret: co audyt znalazł (10 findings: 4× performance, 2× schema, 2× security, 1× sitemap, 1× GEO)

### 2. Pięć filarów optymalizacji — mapa zmian

Zamieniam audyt na OpenSpec change (`/opsx:new`) z 5 niezależnymi obszarami w jednym PR:

| Filar | Problem | Rozwiązanie |
|---|---|---|
| Performance | `clickrank.ai` synchroniczny w `<head>` — blokuje parser przed First Paint | `requestIdleCallback` + fallback `setTimeout(2000)` |
| Schema | `BlogPosting` bez `publisher`, `dateModified`, `mainEntityOfPage`; `articleBody: excerpt` semantycznie błędne | Enrichment + dedicated raster logo (600×60 PNG) |
| GEO | Brak `llms.txt` / `llms-full.txt` → AI crawlers robią RAG zamiast czytać index | Build-time generator zgodny ze spec llmstxt.org |
| Security | Deprecated `X-XSS-Protection`, brak HSTS/Referrer-Policy/Permissions-Policy/CSP | Modernizacja + CSP Report-Only → Sentry |
| Sitemap | Wszystkie 73 URLe miały `lastmod: 2026-04-13` (build timestamp) | Per-URL lastmod: post→frontmatter.modified, listing→max, legal→git mtime |

**Dlaczego bundlowanie w jeden PR:** projekt single-maintainer. Pięć osobnych gałęzi = 5× koszt review bez korzyści. Review całości jest prostsze, bo zmiany są logicznie związane tematycznie.

### 3. Performance — dlaczego `async=true` to nie to samo co „nie blokuje"

Ten fragment wart jest osobnej uwagi, bo **wszyscy się mylą**.

```html
<!-- Przed — wydaje się że async=true rozwiązuje problem -->
<script>
  var s = document.createElement('script');
  s.src = 'https://js.clickrank.ai/...';
  s.async = true;
  document.head.appendChild(s);
</script>
```

Pułapka: `async=true` dotyczy **ściągania skryptu**, ale sam inline kod który go tworzy — wykonuje się **synchronicznie podczas parsowania HTML**. Dodaje microtask do event loopa zanim browser wyrenderuje cokolwiek.

Rozwiązanie — `requestIdleCallback` + fallback dla Safari 16.3-:

```html
<script>
  (function () {
    var inject = function () { /* current logic */ };
    if ('requestIdleCallback' in window) {
      requestIdleCallback(inject, { timeout: 3000 });
    } else {
      setTimeout(inject, 2000);
    }
  })();
</script>
```

**Weryfikacja:** po deploy na prod, w DevTools konsola `performance.getEntriesByType('resource').filter(r=>r.name.match(/clickrank/))` → `startTime: 101.6ms`. Browser zgłosił idle po ~100ms i dopiero wtedy odpalił callback. Inline script nie blokuje parsera.

**Lighthouse lab comparison (preview vs prod):**
- Home: prod 69 → preview 75
- Blog post: prod 38 → preview 61 (drugi run 43 — Lighthouse lab jest szumne)

**Nauka:** lab score ≠ field data. Prawdziwa weryfikacja to CrUX z Google Search Console po 2-4 tygodniach.

### 4. Schema enrichment — o czym milczy Google „How to Rich Results"

Co trzeba wyciąć, co dodać:

**Przed (mój stary schemat):**
```json
{
  "@type": "BlogPosting",
  "headline": "...",
  "author": { "@type": "Person", "name": "..." },
  "datePublished": "2026-01-15",
  "image": "...",
  "articleBody": "Skrócony excerpt...",
  "url": "..."
}
```

Rich Results Test: **5 non-critical warnings**. Główne:
- `articleBody` nie powinien zawierać excerpt — to semantycznie błędne (spec wymaga pełnej treści)
- brak `publisher` — Google Rich Results preferuje Organization z rasterowym logo
- brak `dateModified` — Google preferuje znać ostatnią aktualizację
- brak `mainEntityOfPage` — pomaga pod indexation hints
- daty bez strefy czasowej — preferred format to ISO 8601 z `Z` lub offsetem

**Po (wzbogacony):**
```json
{
  "@type": "BlogPosting",
  "headline": "...",
  "description": "pierwsze 300 znaków contentu lub frontmatter.description",
  "author": {
    "@type": "Person",
    "name": "Pawel Lipowczan",
    "url": "https://pawel.lipowczan.pl"
  },
  "datePublished": "2026-01-15T00:00:00Z",
  "dateModified": "2026-04-21T00:00:00Z",
  "image": "...",
  "url": "...",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "..." },
  "publisher": {
    "@type": "Organization",
    "name": "Pawel Lipowczan",
    "logo": {
      "@type": "ImageObject",
      "url": "https://pawel.lipowczan.pl/logo-schema.png"
    }
  }
}
```

Rich Results Test po zmianie: **3 prawidłowe elementy (BlogPosting, BreadcrumbList, FAQ), zero warnings.**

**Dodatek — `description` z fallbackiem:**
- Opcjonalne pole frontmatter `description` (dłuższy semantyczny opis, ~300 znaków).
- Jeśli brak — automatyczny fallback do `extractFirstParagraph(content)` (pomija nagłówki, frontmatter, code fences, trimuje do 300 chars na granicy słowa).
- `excerpt` (SERP snippet ~160 chars) zostaje bez zmian — to inny use case.

**Logo asset:** Google Rich Results wymaga **rastera** dla `publisher.logo.url` (nie SVG). Wygenerowałem `public/logo-schema.png` (600×60) skryptem `sharp`, brand text + icon. Osobny asset od `/logo.svg` (strona) i `/images/og-*.webp` (social previews).

### 5. llms.txt — GEO wchodzi do mainstreamu

**Dlaczego to robimy w 2026:**
- ChatGPT web search, Perplexity, Claude Search — wszystkie respektują [llmstxt.org](https://llmstxt.org/) spec.
- llms.txt to skrócony index treści (jak sitemap dla LLM), llms-full.txt to pełny dump do pojedynczego tokenowania.
- Dla AI-focused portfolio (25 artykułów o Claude Code, LLM, AI agents) → wysoki ROI.

**Implementacja** — `scripts/generate-llms-txt.js` uruchamiany w `build:prerender`:
- Czyta `src/content/blog/*.md` (PL + EN) przez gray-matter, `src/data/projects.js`
- Generuje `public/llms.txt` (index, ~16 KB) — sekcje: summary, Blog PL, Blog EN, Projekty, Kontakt
- Generuje `public/llms-full.txt` (~800 KB) — index + pełna treść każdego posta z separatorem `\n\n---\n\n`

**Przykład struktury `llms.txt`:**

```
# Pawel Lipowczan

> Architekt oprogramowania i doradca ds. technologii...

## Blog (PL)
- [Tytuł](url): jednozdaniowy opis
...

## Kontakt
- email: ...
```

**Trade-off do wspomnienia:** `llms-full.txt` przy 100+ postach dojdzie do megabajtów. Spec jest niezdefiniowany w tym zakresie — na razie OK, przy skali można rozważyć paginację albo `top-articles-only`.

### 6. Security headers 2026 — co deprecated, co modern, co experimental

**Usunięte:** `X-XSS-Protection: 1; mode=block` — deprecated od 2020, ignorowany przez Chrome/Firefox. Obecny tylko zaszumia scan.

**Dodane:**

```
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), camera=(), microphone=(), payment=(), usb=(), magnetometer=(), gyroscope=()
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
Content-Security-Policy-Report-Only: default-src 'self'; script-src 'self' 'unsafe-inline' https://js.clickrank.ai ...; report-uri https://<sentry>/security/...; report-to csp-endpoint
Reporting-Endpoints: csp-endpoint="https://<sentry>/security/..."
```

**Dlaczego Report-Only zamiast enforce:**
- `'unsafe-inline'` dla script-src jest wymuszony przez Vercel Analytics + Helmet inline JSON-LD + Framer Motion inline styles.
- Enforce od razu = ryzyko zepsucia strony produkcyjnie.
- Report-Only monitoruje, Sentry agreguje violations. Po 2-4 tygodniach analiza logów → osobny change `csp-enforcing` z `nonce`/`hash` dla inline scripts.

**Sentry dla CSP — dlaczego nie report-uri.com:**
- report-uri.com zlikwidował free tier (sprawdzałem w trakcie pracy — 10k reports/mies. był kiedyś darmowy, w 2026 już nie).
- Sentry ma **osobny bucket** "Security Reports" (nie konsumuje quota errorów w free planie).
- URL wzorzec: `https://o<ORG>.ingest.<REGION>.sentry.io/api/<PROJECT>/security/?sentry_key=<PUBLIC_KEY>`.
- **Uwaga:** nie wpisuj `sentry_environment=production` w `vercel.json` na sztywno — Vercel nie wspiera env interpolacji w `vercel.json`, więc preview deploymenty będą taggować reporty jako production.
- `connect-src` w CSP musi zawierać host Sentry — inaczej CSP blokuje sam raport o CSP violation (ironiczne, ale prawdziwe).

**Weryfikacja:** securityheaders.com scan na prod → **grade A**. `Content-Security-Policy` pokazuje się jako "missing" — **zamierzone**, bo używamy Report-Only. A+ dopiero po enforcing.

**Gotcha 1:** Vercel preview deployments domyślnie mają `Deployment Protection` (SSO). securityheaders.com hit-uje preview URL, dostaje 401 login page od Vercela, widzi tylko nagłówki które Vercel dokleja PRZED auth gate (HSTS i X-Frame-Options) — nasze custom headers są niewidoczne. Żeby weryfikować scany na preview: Vercel → Settings → Deployment Protection → Only Production.

**Gotcha 2:** Vercel preview zawsze zwraca `X-Robots-Tag: noindex` — to default Vercela żeby preview URL-e nie trafiały do wyszukiwarek. Google Rich Results Test respektuje noindex i odmawia skanowania. Workaround: `view-source:` → kopiuj HTML → wklej w Rich Results Test jako **Code** (nie URL).

### 7. Sitemap lastmod — mały sygnał, duża różnica

**Przed:** 73 URLe, wszystkie z `lastmod: 2026-04-13` (build timestamp).
**Problem:** Google widzi "jedna data dla wszystkiego" → traktuje jako szum, ignoruje sygnał świeżości.

**Po — hybrid per page-type:**
- **Posty:** `lastmod = frontmatter.modified || frontmatter.date` (świadomy sygnał od autora, nie git mtime który łapie kosmetyczne edycje jako false positives)
- **Listingi** (`/`, `/blog`, `/en/`, `/en/blog`): `lastmod = max(wszystkie posty)` — listing jest „świeży" kiedy jest świeża treść
- **Legal pages** (`/privacy-policy` etc.): `lastmod = git mtime` pliku `.jsx` — przez `execFileSync('git', [...])` (bez shell injection — nie `exec`, nie template strings)

**Efekt:** po regeneracji `public/sitemap.xml` → 23 różnych dat lastmod zamiast jednej. Google dostaje uczciwy sygnał "nowe treści doszły, stare zostały bez zmian".

### 8. Niezamierzony bonus — bug i18n odkryty w trakcie audytu

Audyt SEO pokazał że hreflang alternatywy dla posta `llm-knowledge-base-brain-karpathy` wskazują na `/en/blog/<pl-slug>`, który zwraca "Post not found".

**Root cause:** post był **PL-only** (brak EN wersji), ale miał we frontmatterze `alternateSlug: llm-knowledge-base-brain-karpathy` (wskazujący sam na siebie — prawdopodobnie efekt blog-article-writer skilla który autouzupełnił pole bez walidacji).

**Łańcuch zdarzeń:**
1. User na PL poście klika przełącznik języka
2. `getAlternatePost(currentSlug)` zwraca… ten sam PL post (bo `alternateSlug` = własny slug)
3. LanguageSwitcher buduje `/en/blog/<pl-slug>` i nawiguje
4. `BlogPostPage` filtruje `getPostsByLang("en")` → brak match → renderuje "Post not found"
5. Sitemap dziedziczy ten bug jako bad hreflang

**Dwupoziomowa naprawa:**
- **Data fix:** usunięcie `alternateSlug` z frontmatter PL-only posta
- **Code defense:** `getAlternatePost` odrzuca `alternateSlug === slug` i kandydatów o tym samym `lang`
- **Process fix:** update skilla `/blog-article-writer:validate` + reguła w `.claude/rules/data-storage/00-overview.md` — „nigdy nie ustawiaj alternateSlug bez istniejącego symetrycznego pliku EN"

**Osobny PR (#3):** stworzenie faktycznej EN translacji posta — zamknięcie bilingual symmetry (23 PL + 23 EN).

### 9. Post-deploy verification — co sprawdzić, w jakiej kolejności

**Preview (przed merge):**
1. `curl -sI <preview-url>/` → wszystkie modern headers obecne
2. pagespeed.web.dev → Lighthouse score porównanie preview vs prod
3. securityheaders.com → grade A (po wyłączeniu Deployment Protection)
4. Rich Results Test (**Code** mode, nie URL — noindex blokuje URL scan) → 0 warnings
5. xml-sitemaps.com/validate → Valid XML Sitemap
6. Sentry CSP test przez sztuczną violation w DevTools console
7. DevTools → `performance.getEntriesByType('resource')` → clickrank ładuje się po idle

**Post-merge (prod):**
1. clickrank dashboard (albo DevTools Network na prod) — eventy dalej wpadają
2. Google Search Console → Sitemaps → resubmit `sitemap.xml`
3. CrUX field data w GSC po 2-4 tygodniach (autorytatywny sygnał CWV)

---

## Takeaways / wnioski (5 punktów)

1. **Audyt SEO na małym projekcie ≠ strata czasu.** Testowy poligon dla wzorców u klientów. Bug `alternateSlug` znalazłem tylko dzięki audytowi — był tam przez tygodnie.

2. **`async=true` na skrypcie inline to mit.** Jeśli kod jest w `<head>` i tworzy `<script>`, wykonanie jest synchroniczne podczas parsowania HTML. `requestIdleCallback` to dopiero prawdziwy defer.

3. **Schema enrichment kosztuje 15 linijek kodu, eliminuje 5 warningów.** `publisher`, `dateModified`, `mainEntityOfPage`, `description`, ISO datetime. Zero → pełny compliance.

4. **CSP Report-Only > CSP enforce (na start).** Zero ryzyka zepsucia strony, logi budują się w tle, po 2-4 tygodniach świadoma decyzja o enforcingu z realnym materiałem.

5. **Sentry > report-uri.com dla CSP (w 2026).** Osobny bucket, free tier nadal dostępny, jedna dependency zamiast dwóch.

6. _(bonus)_ **GEO to nie buzzword — llms.txt kosztuje 150 linii Node scriptu i pół tokena w AI crawlerach.** Warto, szczególnie dla AI-focused treści.

---

## Mierzalne before/after (do tabeli w artykule)

| Metryka | Przed | Po |
|---|---|---|
| securityheaders.com | C | **A** |
| Rich Results Test warnings (BlogPosting) | 5 | **0** |
| sitemap unique lastmod | 1 | **23** |
| llms.txt / llms-full.txt | brak | **obecne** (16 KB / 800 KB) |
| modern security headers | 0/4 | **4/4** (HSTS, Referrer, Permissions, CSP-RO) |
| Lighthouse Performance (post, lab) | 38 | 43-61 (variance) |
| Deprecated headers | 1 (X-XSS) | **0** |
| BlogPosting pola | 6 | **11** (+ publisher, dateModified, mainEntityOfPage, description, author.url) |

---

## Cytaty / fragmenty do wplecenia

Z mojej własnej sesji (w narracji):

> „Audyt wyprodukował 10 findings — część oczywistych, część takich które zobaczyłem dopiero w raporcie. Pięć realnych pól do pracy."

> „`async=true` dotyczy ściągania skryptu, ale inline kod który go tworzy wykonuje się synchronicznie podczas parsowania HTML."

> „Wiem co niektóre tooly zobaczą jako 'missing Content-Security-Policy' — to zamierzone. Używamy Report-Only. A+ dopiero po enforcingu, za 2-4 tygodnie."

Z audytu:

> „Wszystkie 73 URLe mają ten sam lastmod — Google traktuje to jako szum, nie sygnał."

Z dokumentacji llmstxt.org:

> „llms.txt is a simple, uniform way for websites to expose their content to LLMs."

---

## Linki / zasoby do artykułu

- [PR #2 seo-improvements](https://github.com/plipowczan/portfolio/pull/2) — pełny diff, commits, Copilot review, post-deploy checklista
- [PR #3 blog-karpathy-en](https://github.com/plipowczan/portfolio/pull/3) — follow-up i18n fix
- [OpenSpec archive](https://github.com/plipowczan/portfolio/tree/main/openspec/changes/archive/2026-04-22-seo-improvements) — proposal, design, specs, tasks (reference)
- [llmstxt.org](https://llmstxt.org/) — spec llms.txt
- [securityheaders.com](https://securityheaders.com/) — skaner
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Sentry Security Reports](https://docs.sentry.io/product/security-policy-reporting/) — CSP reports via Sentry
- [Google Search Central — Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article)
- [MDN — requestIdleCallback](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback)
- [MDN — Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)

---

## Powiązania wewnętrzne (internal linking)

- [OPSX Workflow — strukturyzowane podejście do pracy z AI](/blog/opsx-workflow-strukturyzowana-praca-z-ai) — ten artykuł pokazuje OPSX w praktyce na mierzalnym problemie (SEO audyt jako change proposal)
- [Second Brain z Obsidian i Claude Code](/blog/second-brain-obsidian-claude-code-skills) — pokrewny wątek o Claude Code jako wykonawcy
- [15 hacków do Cursor.sh](/blog/15-cursor-hacks-produktywnosc-ai) — pokrewna tematyka developer productivity
- [Skills 2.0](/blog/skills-2-0-multi-agent-system-zarzadzanie-firma) — jak specjalizowane skille (tu: claude-seo) dopełniają się z Claude Code

---

## Wizualia / screenshoty do artykułu

- **Before/after securityheaders.com** — dwa screeny, oceny C vs A, lista nagłówków
- **Rich Results Test panel** — 3 prawidłowe elementy, 0 warnings (po)
- **PageSpeed Insights comparison** — prod vs preview, post vs home
- **DevTools Network tab** — clickrank script z startTime po LCP, widoczne w waterfall
- **Sentry CSP Reports dashboard** — lista violations po sztucznym teście
- **sitemap.xml fragment** — przed (uniform lastmod) vs po (różne daty)
- **Schema validator JSON-LD diff** — kolorowy side-by-side przed/po (6 → 11 pól)
- **OpenSpec tasks.md checklist** — 34 taski z [x] — wizualny dowód zakresu
- _(opcjonalnie)_ **Diagram architektury:** Vercel → headers → browser → Sentry

---

## FAQ proposals (5 pytań — zgodnie z docs/faq/FAQ_GUIDELINES.md)

1. **Czy warto robić audyt SEO na małym portfolio?**  
   Tak, szczególnie w 2026 — GEO dodaje nowy wymiar widoczności (ChatGPT, Perplexity, Claude Search). Audyt zajmuje 15 minut, implementacja 4h, a finding-i z małego projektu często transferują się do klientów.

2. **`async=true` na skrypcie tracking wystarcza, żeby nie blokować LCP?**  
   Nie. `async` dotyczy ściągania skryptu, ale inline kod JavaScript w `<head>` który tworzy ten `<script>` wykonuje się synchronicznie podczas parsowania HTML. Prawdziwy defer wymaga `requestIdleCallback` z fallbackiem `setTimeout`.

3. **CSP Report-Only vs enforce — od czego zacząć?**  
   Zawsze Report-Only jako pierwszy krok. Zero ryzyka zepsucia strony, Sentry/podobne agreguje violations, po 2-4 tygodniach masz realny materiał do decyzji o enforcingu z `nonce`/`hash` dla inline scripts. Od razu enforce = gra w ruletkę.

4. **Czy llms.txt jest już standardem (2026)?**  
   De facto tak dla AI crawlerów. Spec `llmstxt.org` jest od 2024, w 2026 ChatGPT web search, Perplexity, Claude Search i Gemini Deep Research respektują go. Dla AI-focused treści (tutoriale, docs) to najtańsza inwestycja w GEO.

5. **Dlaczego Sentry zamiast report-uri.com dla CSP reports?**  
   report-uri.com w 2026 nie ma już free tier (10k reports/mies. było darmowe kiedyś). Sentry ma dedykowany bucket "Security Reports" w free planie, nie konsumujący quota errorów. Jedna dependency dla errors + CSP zamiast dwóch.

---

## Notatki operacyjne (dla autora, nie do artykułu)

**Czas pracy:** audyt `/claude-seo:seo` (~15 min) + OpenSpec proposal + implementacja + verification = sesja 4-5h rozłożona na 2 dni. Post-deploy checklist dodatkowe ~30 min.

**Skille użyte:**
- `claude-seo:seo` — audyt
- `/opsx:new`, `/opsx:ff`, `/opsx:apply`, `/opsx:verify`, `/opsx:archive` — workflow OpenSpec
- `commit-commands:commit-push-pr` — PR flow
- `portfolio-code-review` (implicit) — review zmian

**Co poszło dobrze:**
- OpenSpec jako strukturyzowany proces dla nietrywialnego change
- Copilot review na PR złapał 3 trafne issues (placeholder Sentry DSN, preview env var, unused import)
- Sztuczna CSP violation w DevTools jako sprytny test Sentry pipeline
- `performance.getEntriesByType` zamiast zgadywania czy defer działa

**Co bym zrobił inaczej:**
- Disable Vercel Deployment Protection **przed** pierwszym scanem preview (zaoszczędzone 15 min diagnozy "dlaczego securityheaders.com pokazuje C")
- Od razu wygenerować `description` dla większej liczby postów, nie tylko 1 testowego

**Potencjalne follow-upy do linkowania:**
- `csp-enforcing` za 2-4 tygodnie (już w memory)
- `perf-bundle-optimization` jeśli CrUX field data pokaże LCP P75 > 2.5s (już w memory)
