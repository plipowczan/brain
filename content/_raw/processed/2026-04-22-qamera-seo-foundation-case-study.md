# Brief artykułu: SEO foundation dla SaaS w 5 dni — case study Qamera AI

**Data briefu:** 2026-04-22
**Projekt:** Qamera AI (qamera.ai) — SaaS do AI product photography
**Stack:** Next.js 16 App Router, React 19, Turborepo, Vercel, Supabase, i18n (EN/PL/UK)
**Audience:** tech leads, solo devs, founders robiący własne SaaSy — szukający konkretów, nie "SEO checklist for beginners"

---

## Executive summary (numer do hooka)

W 5 dni roboczych zamknięto **9 spec-driven zmian SEO** (7 planowanych + 2 wykryte po drodze), które podniosły witrynę Qamera AI z **health score 56/100** (audyt 2026-04-17) do stanu, w którym wszystkie "Critical" findings zostały rozwiązane. Pracowano równolegle na worktree'ach git, z pełną weryfikacją Rich Results Test / Lighthouse / CrUX na każdym kroku.

**Kluczowe rezultaty mierzalne (przed → po):**
- `/marketplace/styles` CLS mobile: **0.467 → 0.016** (27× poprawa, cel ≤ 0.1 osiągnięty z zapasem)
- `/marketplace/styles` LCP mobile: 2.4s → 1.6s
- Homepage JSON-LD: **0 → 3 bloki** (Organization + WebSite + SoftwareApplication)
- Pricing JSON-LD: **0 → 3 bloki** (Product × 2 + FAQPage)
- Offer page JSON-LD: **0 → 2 bloki** (Service + FAQPage, GEO citability 58/100)
- Hreflang pokrycie: **docs-only → 20 static marketing paths + docs** (468 xhtml:link tagów w sitemap)
- AI crawler allowlist: wildcard → **nazwane reguły dla GPTBot/ClaudeBot/PerplexityBot/Google-Extended/CCBot/OAI-SearchBot**
- `llms.txt`: 404 → opublikowane
- Security headers (CSP/HSTS/XFO/XCTO): opt-in → **default-on w produkcji**
- Social-preview copy (OG/Twitter): hardcoded EN → **pełna lokalizacja EN/PL/UK per request**

---

## Struktura artykułu (proponowana)

### 1. Problem: SEO scorecard 56/100 i dlaczego to typowa choroba młodych SaaSów

- Homepage bez `generateMetadata` → SERP inherituje generic fallback
- Zero JSON-LD na stronach high-intent (pricing, offer landing, blog)
- CSP disabled by default (`ENABLE_STRICT_CSP=false` — safety hatch który zbyt długo żył)
- CLS 0.467 na marketplace (4× ponad próg failing) przez client-side Airtable fetch bez zarezerwowanych wymiarów kart
- Hreflang na `/docs/*`, ale nie na 20 stronach marketingowych — Google nie klasteryzuje wariantów językowych
- Bot allowlist = wildcard, co dla `Google-Extended` i `GPTBot` oznacza "brak sygnału" zamiast "allow"
- Brak `llms.txt` — biggest miss na GEO readiness (AI Overviews / Perplexity / ChatGPT grounding)

**Hook:** pokazać pełny executive summary audytu jako screen/quote — to pokazuje że "gotowy SaaS" ≠ "gotowy SEO".

### 2. Metodologia: spec-driven + git worktrees + równoległość

**Główna teza:** SEO nie musi być sekwencyjny. Z dobrym tool chain (OpenSpec + worktrees + sub-agenci AI) można 3 niezależne changes prowadzić równolegle w osobnych oknach IDE, zachowując pełną izolację i brak konfliktów merge.

Elementy do opisania:
- **OpenSpec workflow** (`proposal.md` → `design.md` → `specs/` → `tasks.md` → implementation → archive) — spec-driven development przenosi dyskusję na etap zanim kod powstanie
- **Git worktrees** jako "niech każda zmiana ma swoje własne node_modules" — zero konfliktów port/state
- **Skill-based AI orchestration** (superpowers skills, sub-agenty do równoległych researchów)
- **Monorepo singletony** (pnpm dev / Supabase / Mailpit / RabbitMQ) — jedyna granica: E2E musi być sekwencyjne
- **Claude-seo plugin** (20+ sub-skilli) jako baseline audit tool

**Przykład decyzyjny warty opisu:** dlaczego rozdzieliliśmy scope na 9 małych PR-ów zamiast jednego "big bang SEO overhaul". Disjoint file sets → zero merge conflicts → bezpieczny szybki merge cadence → szybka pętla feedback / rollback.

### 3. Najbardziej pouczające przypadki (deep-dive na 3–4)

Nie opisywać wszystkich 9 — wybrać te, które mają uniwersalną lekcję:

**A) CLS 0.467 — nie assumuj root cause**
- Co zrobiliśmy zanim zaczęliśmy kodować: `mcp__lighthouse__get_lcp_opportunities` + `layout-shift-elements` audit
- Trzy opcje fixu: SSR initial grid / reserved card dimensions / combined
- Dlaczego wybraliśmy A (SSR): dodatkowy benefit dla GEO (non-JS crawlers widzą content)
- **Bonus twist:** post-deploy PSI run pokazał LCP 14.4s (cold Vercel function), ale Lighthouse MCP: 1.6s (warm). **Lekcja: jedna metryka z PSI to samplowanie — zawsze re-run lub weryfikuj Lighthouse lokalnie.**

**B) Product schema dla SaaS — Merchant Listings false-positive**
- Rich Results Test na `/pricing` pokazał: Product Snippets ✓, FAQ ✓, **Merchant Listings ✗**
- Merchant Listings wymaga `sku`, `gtin`, `shippingDetails`, `hasMerchantReturnPolicy` — pola e-commerce które SaaS nie ma
- Decyzja: zaakceptować (Product Snippets to wszystko czego potrzebujemy w SERP), ale zanotować follow-up: migracja na `SoftwareApplication` z per-plan `offers`
- **Lekcja:** Google testuje jeden schema pod wieloma rich-result profile'ami. "Invalid" w jednym profilu ≠ błąd.

**C) Hreflang — dlaczego "alternates.languages" w `generateMetadata` NIE wystarcza**
- Next.js `Metadata.alternates` to tylko head-level signal
- Google preferuje sitemap-level `xhtml:link` elementy dla klasteryzacji
- Rozwiązanie: shared helper `buildLanguageAlternates(pathname)` używany **z dwóch miejsc** — `sitemap.ts` i każde `generateMetadata`
- Drift-guard test: CI failuje jak ktoś doda ścieżkę do sitemapa ale nie doda `alternates` do page.tsx
- **Lekcja:** SEO helpery muszą być reusable across route types (dynamic route files, page files, sitemap) — inaczej drift gwarantowany.

**D) Bug wykryty post-deploy przez preview**
- `seo-localize-root-metadata` — nie było w oryginalnym audycie, wykryte przy weryfikacji `marketplace-styles-cls-fix` na preview Vercel
- `root-metadata.ts` miał hardcoded EN strings → PL/UK użytkownicy dostawali angielski OG description na każdej stronie marketingowej
- **Lekcja:** preview weryfikacja per lokalizacja = nowa klasa bugów. Locale cookie + curl w CI = tanie.

### 4. GEO / AI search — co zrobić dla ChatGPT/Perplexity/Google AI Overviews

Osobna sekcja dla "nowego SEO":
- `llms.txt` i `llms-full.txt` jako deklaracja grounding
- AI bot allowlist (nazwana reguła dla `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot`)
- Factual-definition opener (first 150 words = co to jest produkt, kto za nim stoi) — LLM preferuje to nad generic copy
- Author signal w Article JSON-LD — LLM waży `author.name` + `datePublished` heavily przy source selection

### 5. Liczby i narzędzia do cytowania

**Tool chain (ciekawe dla czytelnika-programisty):**
- `claude-seo` plugin (20+ sub-skilli: seo-technical, seo-geo, seo-schema, seo-performance, seo-sxo, seo-hreflang, seo-ai-discoverability, …)
- Lighthouse MCP (`@danielsogl/lighthouse-mcp`) — lab CWV data + LCP opportunities
- Google Rich Results Test (manualnie) + schema.org Validator
- GSC URL Inspection + "Request Indexing"
- PageSpeed Insights API (quota-limited — fallback: Lighthouse MCP)
- OpenSpec CLI (`openspec new` / `status` / `instructions` / `validate`) — spec-driven scaffolding

**Numerki:**
- 9 changes × ~4 artefaktów (proposal/design/specs/tasks) = **36 markdown plików** spec-driven
- 5 dni roboczych
- 6 nowych capabilities w `openspec/specs/` (seo-homepage-identity, seo-ai-discoverability, seo-static-marketing-hreflang, seo-offer-pricing-blog-schema, marketplace-styles-cwv-compliance, seo-root-metadata-i18n)
- 9 × 3 = **27 changelog entries** (EN/PL/UK × 9 zmian z user-facing impact)

### 6. Czego NIE zrobiliśmy (świadome odroczenia)

Żeby artykuł nie brzmiał triumfalistycznie, warto pokazać co zostało i dlaczego:
- **GA4 integration** — osobna sesja (różne compliance wymagania, inna persona decyzyjna)
- **Programmatic landings v2** — to osobna strategia biznesowa, nie technical debt
- **Blog/marketplace i18n** — PL-only blog → EN/UK wymaga content investmentu, nie tylko kodu
- **CrUX field data** — wymaga Google API creds, nie lab data
- **Backlink audit** — dopiero sensowny po tym foundation release'ie

### 7. Lessons learned (kluczowe lekcje dla czytelnika)

Kompaktowo (każda = 1–2 zdania):

1. **Rób audit zanim piszesz tasks.** Health score 56/100 vs 72/100 zmienia kolejność priorytetów, nie jakość taski.
2. **Spec-driven zadziała tylko gdy WSZYSTKIE artefakty są napisane przed implementacją.** Pokusa "write tasks.md prosto do kodu" to główny fail mode.
3. **Worktrees > branch-switching.** Windows ma issues z file locks przy `git worktree remove --force` — workaround: `rm -rf` → `git worktree prune`.
4. **Jedna metryka z PSI to sampling.** Zawsze potwierdź Lighthouse MCP lub 2. run.
5. **Google testuje schema pod wiele rich-result profiles.** "Invalid" w jednym ≠ bug — sprawdź który profil.
6. **Preview per-locale = wykrywanie bugów których nie widać z jednej lokalizacji.** Jeden curl + cookie, 3× lokalizacje.
7. **Changelog per PR przy merge = nie-potem.** 3 × 9 = 27 wpisów, ale rozbite na 9 małych akcji = trywialne.
8. **Follow-up'y w tasks.md, nie w głowie.** `Product` → `SoftwareApplication` migracja na `/pricing` jest zapisana jako nota w archiwum — za 3 miesiące nikt nie pamięta dlaczego.

### 8. Wnioski i call-to-action

Jeden konkret dla czytelnika do domowego zrobienia:
- "Otwórz `https://search.google.com/test/rich-results` i wpisz swój landing page. Zobacz ile items znajdzie."
- "Sprawdź czy masz `public/llms.txt`. Jeśli 404 — to jest dosłownie 2h pracy na biggest GEO lever."
- "Odpal `mcp__lighthouse__get_core_web_vitals` na swoich mobile pages. Jeden z nich na pewno ma CLS > 0.1."

---

## Dodatki / materiały wyjściowe

- **Pełny audit:** `docs/knowledge/seo-audit-2026-04.md` w repo Qamera — surowy raport z claude-seo
- **OpenSpec archive:** `openspec/changes/archive/2026-04-*` — 9 zestawów proposal/design/specs/tasks
- **Rich Results Test links (publiczne):**
  - `/offer/swimwear-lingerie`: https://search.google.com/test/rich-results/result?id=slqnSNpktkJceCFMvN_Lig
  - `/pricing`: https://search.google.com/test/rich-results/result?id=QY2Lv7U_P2nsu0W_7gayhQ
- **GitHub PRs:** #75, #76, #77, #82, #92, #93, #94, #96

---

## Tabela podsumowująca 9 zmian (do wklejenia 1:1 w artykule)

| # | Change | PR | Główny efekt |
|---|---|---|---|
| 1 | `seo-ai-crawlers-and-llms-txt` | #75 | AI bot allowlist + `llms.txt` / `llms-full.txt` |
| 2 | `seo-homepage-metadata-and-schema` | #76 | Homepage `generateMetadata` + Org/WebSite/SoftwareApplication JSON-LD; usunięty deprecated HowTo |
| 3 | `security-headers-default-on` | #77 | CSP/HSTS/XFO/XCTO default-on w produkcji |
| 4 | `seo-homepage-facts-lavel` | #82 | Unsourced stats → attributed Lavel YoY data (case study link) |
| 5 | `marketplace-styles-cls-fix` | #92 | CLS 0.467 → 0.016 mobile (SSR initial Airtable grid) |
| 6 | `seo-hreflang-static-marketing` | #93 | 20 static marketing paths + sitemap `xhtml:link` |
| 7 | `seo-offer-and-pricing-enrichment` | #94 | Service+FAQ+Product+Offer+Article+Blog JSON-LD + canonicals |
| 8 | `seo-localize-root-metadata` | #96 | OG/Twitter copy: hardcoded EN → EN/PL/UK per locale |
| 9 | *bundled* | (w #76) | `seo-remove-deprecated-howto-schema` — HowTo (deprecated Sep-2023) removal |

---

## SEO hook dla samego artykułu

Artykuł powinien sam siebie traktować jak case study — tj. zawierać:
- `<script type="application/ld+json">` z `Article` + `author` + `datePublished`
- 5–8 self-contained passage'y definiowanych jak w audit'owych "citability" wytycznych (LLM cites 40–120 word paragraphs z factual opener)
- `<h2>` strukturę mirror-ing powyższą (hierarchia → skanowalność)
- Internal link do self-referential resources (portfolio case studies, podobne artykuły)
- Faktograficzny, źródłowy opener — "Qamera AI's SEO health score moved from 56/100 to [X]/100 in 5 days via 9 parallel spec-driven changes. Here's the playbook."

**Keyword pod który pozycjonować:** `"spec-driven SEO workflow"` — długi ogon, low competition, dokładnie opisuje unikalną metodologię. Wtórnie: `"Next.js SEO audit case study"`, `"Lighthouse MCP"`, `"OpenSpec workflow"`.

**Tytuł roboczy (do wyboru):**
- "9 changes in 5 days: how spec-driven SEO fixed a SaaS from 56/100"
- "SEO dla Next.js 16 SaaSa: case study z realnymi numerami"
- "Nie piszę tasks.md. Piszę specs. — case study SEO dla Qamera AI"
