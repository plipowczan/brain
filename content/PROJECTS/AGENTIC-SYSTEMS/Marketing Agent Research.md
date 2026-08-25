---
title: "Marketing Agent Research"
date: 2026-08-25
enableToc: true
openToc: true
tags: ["project", "ai", "agents", "marketing", "social-media", "claude-code", "research"]
type: compiled-note
source: "_raw/research-workspaces/marketing-agent-research/report.md"
agent-created: true
agent-reviewed: 2026-08-25
summary: "Brief decyzyjny z researchu 31 itemów: agent marketingowy dla agentic-ai-system i agentic-ai-private — co budować, co kupić, w jakiej kolejności"
---
# Marketing Agent Research

## 🗒️ Description

Brief decyzyjny z dwufazowego researchu (31 itemów × 75 pól, walidacja 100%) nad agentem
pełniącym rolę head of marketing / social media managera dla [[agentic-ai-system]]
i [[agentic-ai-private]]. Człowiek zostaje w pętli i akceptuje; agent robi nasłuch,
wybór tematów, drafty i planowanie.

**Ta notatka jest wsadem do changu OpenSpec.** Pełna baza dowodowa —
`content/_raw/research-workspaces/marketing-agent-research/report.md` (1,27 MB, 14k linii)
plus 31 JSON-ów w `results/` — **nie jest przeznaczona do czytania przez agenta implementującego**: to proza
per-pole, w której 156 wartości jest oznaczonych jako niepewne. Sięgać po nią punktowo,
gdy potrzebny konkret.

## 🚀 Punkt wyjścia: dolna połowa łańcucha już działa

Nie zaczynamy od zera i to zmienia cały rachunek.

| Warstwa | Stan | Gdzie |
|---|---|---|
| Publikacja multi-platform | działa — Publer API, 8 kanałów, karuzele, link w 1. komentarzu | `agentic-ai-private/tools/publer/` |
| Brand voice i strategia | działa — tone-of-voice, writing-style, strategia z 31 postów | `context/brand/` |
| Produkcja assetów | działa — Marp, cover-generator, HyperFrames | `tools/hyperframes`, `slides/` |
| Pipeline referencyjny | działa — `fetch → select → generate → cover → social → publish` | `tech_news_weekly_summary` |
| **Nasłuch, scoring, kalendarz, akceptacja, orkiestrator** | **brak** | — |

`ss:marketing` w [[Agentic Skills Submodules]] to nadal placeholder `TODO Phase 2`.

## ☘️ Werdykt: czego nie da się kupić

Rozkład 31 werdyktów — **14 build, 8 wrap, 3 buy, 3 skip, 3 złożone**. Cztery niezależne
przeglądy potwierdziły, że gotowego produktu nie ma:

- nie istnieje OSS czytający vault markdown i proponujący tematy (najbliższe to prototypy 0–2★)
- nie istnieje wiarygodny OSS „commit → post" (rekord kategorii: 13★, martwe od 2024)
- oficjalny plugin Marketing od Anthropic nie ma publikacji, kalendarza ani researchu trendów
- cała kategoria pakietowych dostawców monitoringu okazała się hosted-only

Kupić da się **warstwy** — runtime, polski nasłuch, transkrypcję. Mózg redakcyjny budujemy sami.

## 🧩 Kolejność wdrożenia

Wiązka D (scoring) ma w `time_to_first_post` wpisane „zero direct contribution" — to bramki
jakości, nie ścieżka publikacyjna. Ścieżka krytyczna biegnie inaczej:

| Faza | Zakres | Dni |
|---|---|--:|
| 1 | Obsidian MCP przez `obsidian-local-rest-api` v5.1.0 · most `git cliff --context` (JSON) | 3–5 |
| 2 | Firecrawl change tracking **w chmurze** + changedetection.io · darmowa warstwa sygnałów (RSS, GDELT) | 3–5 |
| 3 | PR jako bramka akceptacji · Agent SDK z process-exit-and-resume | 4–7 |
| 4 | Bramka anty-slop · rubryka addytywna · Langfuse + dedup `sqlite-vec` | 5–8 |
| 5 | Polski STT + post-korekta Bielikiem · Newspoint Pro | 5–8 |

**Pierwszy post wychodzi po fazie 3 — realnie w dwa tygodnie.**

## 🔗 Decyzje architektoniczne do wpisania w spec

- **Silnik: Claude Agent SDK (wrap), nie Managed Agents (buy).** Managed Agents kupują
  bezterminowe czekanie i zerowy koszt idle, ale PR jako bramka i tak przenosi akceptację poza
  runtime, co unieważnia ich największą przewagę. Zostaje lock-in i nieprzetestowany rachunek.
- **Akceptacja = merge PR-a.** Nieograniczona pauza, 0 EUR/h czekania, akceptacja z aplikacji
  mobilnej i — kluczowe — **natywna edycja przed akceptacją** przez suggested changes. Ani
  `defer`, ani `always_ask` nie pozwala człowiekowi zmienić wejścia narzędzia. Commit gita jest
  jednocześnie dowodem weryfikacji redakcyjnej.
- **Stan redakcyjny w repo**, nie u dostawcy: SQLite/Turso + `sqlite-vec` w jednym pliku obok
  gita — kalendarz, indeks dedupu i historia metryk razem.
- **Sufit autonomii L3.** Agent planuje i czeka na akcept; L4 traktować jako niedostępne.
- **Reference memory stores montowane `read_only`** — agent marketingowy z definicji połyka
  wrogą treść z internetu, a zapisywalna pamięć zamienia udany prompt injection w zaufaną
  pamięć kolejnych sesji.
- **Pętla zwrotna T+7 z API Publera** (zasięg, wyświetlenia, kliknięcia) doczepiana do trace'u
  T+0 w Langfuse. Publer nie ma MCP, ale ma te metryki — to uzasadnia utrzymanie własnego klienta.

## ⚠️ Miny znane z góry

Każda z nich zawodzi **cicho** — bez błędu, bez ostrzeżenia. To jest właściwa wartość tego
researchu i to musi trafić do specu jako wymagania negatywne.

- **Firecrawl self-hosted nie robi diffów.** Linia bazowa idzie z Google Cloud Storage; bez
  `GCS_BUCKET_NAME` sterowanie wpada w `else { changeStatus: "new" }` — każde sprawdzenie
  raportuje zmianę w nieskończoność. Zmiennej **nie ma w `.env.example`**, a wskaźnik bazowy
  przechodzi przez nieopublikowaną funkcję Postgresa `diff_get_last_scrape_v7`.
  → **Trzymać change tracking w chmurze, nigdy nie self-hostować tej funkcji.**
- **Angielskie bramki anty-slopu przepuszczają polski slop.** `sloptrim` (71 wzorców) i
  `content-quality-scorer.py` od ericosiu są wyłącznie angielskie — na polskim tekście zwracają
  czysty wynik. Cichy fałszywy pozytyw w bramce, która ma chronić.
- **`faststylometry` wycina polskie znaki.** Domyślny `tok_match_pattern = r'^[a-z][a-z]+$'`
  usuwa każde słowo z `ą ć ę ł ń ó ś ź ż` i zwraca wiarygodne liczby będąc rozwalonym.
- **Whisper odpada dla polskiego** — 42,26% WER na realnych nagraniach wobec 10,58% dla
  ElevenLabs Scribe. Uwaga: self-hostowana Vexa transkrybuje właśnie faster-whisperem.
- **`Pause` w Kestrze ma domyślnie `behavior: RESUME`** — po upływie czasu leci dalej, jakby
  zaakceptowano. Cicha auto-publikacja.
- **`waitForEvent` w Cloudflare Workflows ma domyślny timeout 24h**, dokładnie w oknie
  oczekiwania na człowieka; firmowy przykład HITL łapie go i „proceeds with default action".
- **Required reviewers w GitHub Actions działają tylko na repo publicznych** dla planów
  Free/Pro/Team. Merge PR-a omija to całkowicie.
- **Dedup międzyjęzykowy wymaga wymiaru `language` w kluczu**, inaczej zablokuje legalne
  tłumaczenie PL/EN tej samej myśli.
- **PLLuM ma reżim CC-BY-NC-4.0.** Do post-korekty komercyjnie bezpieczny jest Bielik (Apache-2.0).

## ✍️ Czego nie robić

- **Nie budować predykcji zaangażowania.** To wynik o zasadniczej nieprzewidywalności, nie
  o brakujących danych (Martin et al., WWW 2016; LOLA na 17 681 realnych testach A/B — ledwie
  lepiej niż losowo). Budować atrybucję post-hoc.
- **Nie stosować bandita na formatach.** Przy 15 postach miesięcznie reguła Kohaviego daje
  79–493 lata na ramię, a format jest przypisywany per post, więc wyświetlenia są randomizowane
  klastrowo. Rotacja blokowa ze stratyfikacją + miesięczny shrinkage empirical-Bayes.
- **Nie bramkować głosu sędzią LLM.** PersonalBench: sędziowie oceniali teksty jako zróżnicowane
  tam, gdzie stylometria pokazywała, że nie są. Metryka stylometryczna, nie sędzia.
- **Nie kupować monitoringu** — Kadoa, Diffbot, Visualping, Distill i Superfeedr odrzucone,
  żaden nie jest self-hostowalny. Visualping zapisany jako imienny następca, gdyby
  changedetection.io stracił jedynego maintainera.

## 📒 Do rozstrzygnięcia przez człowieka

1. **Wolumen.** 15 postów miesięcznie na dwie marki to ~1,8 tygodniowo na markę — poniżej progu
   skuteczności (2–5/tydz. wg analizy 4,8 mln postów). Albo rośnie wolumen, albo jedna marka
   dostaje priorytet.
2. **Podział marek jako jawna decyzja uznaniowa.** Teza „długie cykle zakupowe ⇒ przechył na
   markę" nie ma publikowanej podstawy; interwału dla consultingu IT nikt nie zmierzył.
   → **Dwadzieścia datowanych przeszłych zleceń z własnej listy klientów** zamknie to lepiej
   niż literatura.
3. **Własny gold set STT: 30–60 minut z waszych webinarów.** Deklaracje dostawców o polskim
   zawyżają rzeczywistość ~4–5× na mowie spontanicznej (29,90% vs 12,96% mediany WER),
   a utrzymywany polski leaderboard ASR nie istnieje.
4. **Test empiryczny: czy idle w Managed Agents jest naliczany** (godzina, przed budżetowaniem).
5. **Test empiryczny: czy Publer zdziera manifest C2PA** przy uploadzie.

## 🎨 Poza zakresem, ale większe

**Ekspozycja [[Qamera AI]] na art. 50(2) AI Act.** Jako podmiot wprowadzający na rynek
generatywny system obrazu podlegacie własnemu obowiązkowi znakowania maszynowo odczytywalnego,
a deep fake z art. 50(4) ¶1 **nie ma wyjątku dla ludzkiej weryfikacji** — bramka akceptacji tam
nie pomoże. To ryzyko produktowe, nie marketingowe, i wymaga osobnego postępowania.

Doprecyzowanie do wcześniejszych ustaleń: art. 50 **nie** obejmuje treści marketingowych jako
takich (obowiązek dotyczy tekstu informującego opinię publiczną o sprawach interesu publicznego),
a kary dla MŚP to **niższa** z wartości 3% obrotu albo 15 mln EUR.

## 📖 Further reading

- Baza dowodowa: `content/_raw/research-workspaces/marketing-agent-research/` — `report.md` + `results/*.json` (31 plików). Katalog jest w `.gitignore`, żyje lokalnie.
- Korekty tego, co nie przetrwało weryfikacji: sekcja `post_deep_corrections` w `outline.yaml`
- [[Agentic AI Repos]] · [[agentic-ai-system]] · [[agentic-ai-private]] · [[Agentic Systems]]
- [[Tech News Weekly]] — działający pipeline referencyjny
- [[OpenSpec]] · [[Progressive Disclosure]]
