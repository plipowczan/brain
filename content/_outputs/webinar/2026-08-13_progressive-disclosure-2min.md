---
title: "Progressive Disclosure — 2-minutowy wtręt na webinar"
date: 2026-08-13
summary: "Skrypt narracyjny do diagramu Progressive Disclosure — wyjaśnienie koncepcji bazowej, ~2 min"
diagram: "content/AI/KNOWLEDGE/INFO/Progressive Disclosure.png"
source-note: "content/AI/KNOWLEDGE/INFO/Progressive Disclosure.md"
---

# Progressive Disclosure — wtręt ~2 min

**Cel bloku:** posadzić jedną koncepcję bazową, do której będziesz wracał w dalszych tematach.
**Nie jest celem:** wyczerpać temat. Zero dygresji o RAG-u, embeddingach, chunkingu.
**Na ekranie:** cały diagram od początku do końca. Nie przełączaj slajdów — prowadź wzrok głosem i kursorem.

---

## Skrypt

**[0:00 — cały diagram, kursor nieruchomo]**

> Zanim pójdziemy dalej — jedna koncepcja bazowa, do której będę dzisiaj wracał: **progressive disclosure**. Cały ten slajd sprowadza się do jednego zdania: nie ładuj wszystkiego naraz. Pokaż, co istnieje i ile kosztuje, a wybór zostaw agentowi.

**[0:15 — kursor na lewe okno, na czerwony blok]**

> Po lewej klasyczne podejście. To jest okno kontekstu, sto tysięcy tokenów, narysowane w skali. Wrzucamy w nie trzydzieści pięć tysięcy: historię rozmowy, podsumowania, dokumenty „na wszelki wypadek". A ile z tego było naprawdę potrzebne do zadania? Ten zielony pasek. Dwa tysiące. **Sześć procent.**

**[0:35 — zostań na lewym oknie, wskaż pustą przestrzeń pod blokiem]**

> I nie jest tak, że reszta okna jest darmowa. Model ma skończoną uwagę. Pytanie użytkownika leży przysypane trzydziestoma pięcioma tysiącami tokenów historii. Płacisz dwa razy — raz za tokeny, drugi raz za rozproszoną uwagę.

**[0:50 — przejedź kursorem w dół lejka: L1 → L2 → L3]**

> Progressive disclosure odwraca kolejność. **Warstwa pierwsza: indeks.** Nie treść — spis. Co istnieje i ile kosztuje pobranie każdej pozycji. Osiemset tokenów na pięćdziesiąt wpisów. Agent to skanuje i wybiera dwa. **Warstwa druga:** dociąga pełną treść tych dwóch. Dwieście tokenów. **Warstwa trzecia:** oryginalne źródło — ale tylko, jeśli naprawdę trzeba. Zwykle nie trzeba.

**[1:15 — kursor na prawe okno]**

> Efekt po prawej. To samo okno, ta sama skala. Zamiast czerwonej masy — kreska. Tysiąc tokenów zamiast trzydziestu pięciu. **Dziewięćdziesiąt dziewięć tysięcy zostaje na właściwą pracę.** I każdy załadowany token był świadomie wybrany, a nie wrzucony na zapas.

**[1:35 — zejdź na dolny pas, cztery timeline'y]**

> I teraz powód, dla którego o tym mówię na starcie. To nie jest trik do notatek. Ten sam kształt wraca wszędzie: baza wiedzy, skille agenta, kod, katalog narzędzi. Ostatni przykład jest najbrutalniejszy — zamiast ładować całą bibliotekę narzędzi, indeksujesz ją i pobierasz kilka. **Osiemset osiemdziesiąt cztery tysiące tokenów schodzi do tysiąca dwustu.**

**[1:55 — kursor z powrotem na górę, na tytuł]**

> Jedno zdanie do zapamiętania: **pokaż, co istnieje i ile to kosztuje — resztę dowieź na żądanie.** Wrócimy do tego przy każdym kolejnym temacie.

---

## Wersja awaryjna (~50 s, gdy czas ucieka)

> Progressive disclosure. Po lewej: wrzucamy trzydzieści pięć tysięcy tokenów do okna, potrzebne są dwa — sześć procent trafienia, a pytanie użytkownika ginie pod historią. Po prawej to samo okno po odwróceniu kolejności: najpierw indeks — co istnieje i ile kosztuje, osiemset tokenów; agent wybiera dwa wpisy i dociąga tylko je. Tysiąc tokenów zużyte, dziewięćdziesiąt dziewięć tysięcy wolne. Ten sam wzorzec działa na notatkach, kodzie, skillach i katalogu narzędzi. Zasada: pokaż spis i cenę, treść dowieź na żądanie.

---

## Notatki wykonawcze

- **Pauzuj po liczbach.** „Sześć procent" i „dziewięćdziesiąt dziewięć tysięcy" to dwa kotwiczne momenty — daj sekundę ciszy po każdym.
- **Nie czytaj tabelki z ciemnego artefaktu.** Na 2 minuty jej nie tłumaczysz. Jeśli ktoś zapyta w Q&A — wtedy pokaż, że kolumna TOKENS jest tam po to, żeby agent policzył opłacalność przed pobraniem.
- **Nie mów „RAG jest zły".** Mów „klasyczne podejście ładuje z góry". Inaczej wejdziesz w dyskusję o RAG-u, na którą nie masz czasu.
- **Skala jest uczciwa** — oba okna narysowane w tej samej skali (520 px = 100k tokenów). Jeśli ktoś podejrzewa, że wykres kłamie, to jest twoja odpowiedź.

## Gdyby padło pytanie

| Pytanie | Odpowiedź w jednym zdaniu |
|---|---|
| „Czym to się różni od RAG-u?" | RAG zwykle dostarcza gotowe fragmenty do promptu; tu agent najpierw widzi katalog z cenami i sam decyduje, co pobrać — i może nie pobrać nic. |
| „Kto buduje ten indeks?" | Ty, raz — i utrzymujesz go automatycznie przy każdym zapisie; bez narzędzi do przeszukiwania indeks jest martwy. |
| „Czy agent nie przegapi czegoś ważnego?" | Dlatego tytuły w indeksie muszą być semantyczne — dziesięć konkretnych słów, nie „notatka o pewnej sprawie". Zła kompresja tytułu psuje cały mechanizm. |
| „Ile to daje w praktyce?" | Liczby z dołu slajdu: katalog narzędzi 884k → 1,2k tokenów, mapa repo Aidera mieści się w ~1k. |

## Przejście do dalszej części

> Trzymajcie ten kształt z tyłu głowy: **indeks → szczegół → źródło**. Za chwilę zobaczycie go w [KOLEJNY TEMAT] — tylko pod inną nazwą.
