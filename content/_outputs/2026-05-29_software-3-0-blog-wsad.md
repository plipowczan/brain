---
title: "Wsad blogowy: Software 3.0 i agentic engineering"
date: 2026-05-29
type: answer-note
tags: ["output", "blog", "ai", "agents", "software-3-0", "agentic-engineering"]
agent-created: true
summary: "Brief + szkielet treści do artykułu blogowego o paradygmacie Karpathy'ego (Software 1.0→3.0, vibe coding → agentic engineering), z diagramem i linkami do notatek źródłowych"
sources:
  - "[[Software 3.0]]"
  - "[[Agentic Engineering]]"
  - "[[Karpathy Paradigm.excalidraw]]"
---

# Wsad blogowy: Software 3.0 i agentic engineering

> **Status:** materiał wejściowy (brief + szkielet), nie gotowy tekst. Do przepisania na żywy artykuł.
> **Język docelowy:** PL (do potwierdzenia — mogę zrobić wersję EN dla `brain.lipowczan.pl`).

---

## 🎯 Brief redakcyjny

| Pole | Wartość |
|------|---------|
| **Temat** | Trzy paradygmaty oprogramowania (1.0 → 2.0 → 3.0) i nowa dyscyplina: *agentic engineering* |
| **Źródło** | Wywiad Andreja Karpathy'ego dla Sequoia Capital + jego teza „Software 3.0" |
| **Grupa docelowa** | Founderzy, inżynierowie, no-code/automatyzatorzy, osoby budujące produkty AI-first |
| **Kąt (angle)** | Nie „kolejny hype o AI", tylko *mapa decyzyjna*: czego nie budować, co budować, i co zostaje po stronie człowieka |
| **Obietnica dla czytelnika** | Po przeczytaniu wiesz, w którym paradygmacie działasz, gdzie jest twoja fosa i dlaczego „zrozumienia nie da się outsourcować" |
| **Długość** | 1200–1800 słów (czyta się ~6–8 min) |
| **Ton** | Bezpośredni, praktyczny, pierwsza osoba — bez korpo-mowy i bez „AI zmieni wszystko" |
| **CTA** | Komentarz/dyskusja: „W którym paradygmacie jest twój produkt?" + link do diagramu |

### Słowa kluczowe / SEO
`Software 3.0`, `agentic engineering`, `vibe coding`, `Andrej Karpathy`, `context engineering`, `verifiability`, `jagged intelligence`, `agent-native`, `AI-first business`

### Robocze tytuły (do wyboru)
1. **Software 3.0: dlaczego twoja aplikacja nie powinna istnieć**
2. **Vibe coding podnosi podłogę. Agentic engineering trzyma sufit.**
3. **Czego nie da się outsourcować, kiedy kod pisze agent**
4. **1.0 → 2.0 → 3.0: nowa mapa dla każdego, kto buduje software**

---

## 🖼️ Diagram (oś wizualna artykułu)

Cały artykuł da się powiesić na jednym diagramie — użyj go jako grafiki otwierającej i wracaj do kolejnych pasów przy każdej sekcji.

![[Karpathy Paradigm.png]]

- **Źródło edytowalne:** [[Karpathy Paradigm.excalidraw]] (Excalidraw — można podmienić kolory/teksty, dorobić warianty pod social)
- **Sugestia:** wyeksportuj 5 wycinków (po jednym pasie) jako osobne grafiki do sekcji — albo pojedyncze kafelki na karuzelę LinkedIn.

---

## 🪝 Lead / hook (propozycje)

**Wariant A — osobisty (Karpathy):**
> Człowiek, który ukuł termin *vibe coding*, powiedział, że „nigdy nie czuł się bardziej w tyle jako programista". W grudniu agentowe modele przekroczyły próg: kawałki kodu „po prostu wychodziły dobrze", więc przestał je poprawiać. To nie jest historia o szybszym pisaniu kodu. To historia o tym, że programowanie zmieniło się w *prompcie*.

**Wariant B — prowokacja:**
> „Ta aplikacja nie powinna istnieć." Karpathy mówi to o własnej apce, którą zbudował kilka miesięcy wcześniej. Jeśli budujesz pojedyncze narzędzia, kursy albo manualne usługi — ten tekst jest o tym, dlaczego LLM właśnie je zjada.

---

## 🧱 Szkielet treści (sekcja po sekcji)

### 1. Trzy paradygmaty — jak „programujesz" maszynę
*(pas ① diagramu)*

- **1.0** — piszesz jawny kod, regułę po regule. Kruche, nie samonaprawialne.
- **2.0** — „programujesz" przez **dane**: kurujesz zbiory i trenujesz wagi sieci.
- **3.0** — **prompting**: okno kontekstu to twoja dźwignia nad interpreterem, którym jest LLM.
- Cytat (zostawić w EN + gloss PL):
  > „Software 3.0 is kind of about your programming now turns to prompting. And what's in the context window is your lever over the interpreter that is the LLM."
  > *(Programowanie zmienia się w prompcie; okno kontekstu to twoja dźwignia nad LLM-em.)*
- **Reframe biznesowy:** czytaj „software" jako *wszystkie cyfrowe biznesy*. Każdy biznes jest przebudowywany na AI-first — LLM to silnik, ty projektujesz samochód wokół niego.
- Źródło: [[Software 3.0]]

### 2. Cztery przykłady, które to unaoczniają
*(treść z notatki [[Software 3.0]])*

- **Instalator** — agent wywołany jedną komendą, samonaprawialny „mały skill", zamiast pęczniejącego skryptu.
- **Aplikacja (MenuGen)** — apka 2.0 staje się „natychmiast bezużyteczna": wystarczy podać zdjęcie do Gemini + Nano Banana.
- **Kurs / wiedza ekspercka** — od sekwencyjnych lekcji do agenta-coacha, który „robi to *z tobą*".
- **Usługa (montaż wideo)** — od ręcznego Premiere do pola tekstowego: „zmontuj w stylu MrBeast, poniżej 8 minut".
- **Puenta:** *Software 3.0 sprzedaje wynik (outcome), nie narzędzie.*

### 3. Vibe coding ≠ agentic engineering
*(pas ② diagramu — najważniejsze nowe rozróżnienie)*

- **Vibe coding — podnosi PODŁOGĘ.** Każdy może teraz budować software. Demokratyzujące.
- **Agentic engineering — trzyma SUFIT.** Realna dyscyplina: utrzymać poprzeczkę jakości (żadnych nowych podatności, *to wciąż twój* software) **jednocześnie** przyspieszając.
- Agenci to „spiky entities" — zawodni, trochę stochastyczni, ale ekstremalnie potężni. Sztuką jest ich koordynować bez obniżania poprzeczki.
- Cytat:
  > „Vibe coding is about raising the floor for everyone… agentic engineering is about preserving the quality bar of what existed before in professional software."
- Mocny akcent: stary „10× engineer" jest teraz wzmocniony *daleko* poza 10× — dla tych, którzy są w tym dobrzy.
- Źródło: [[Agentic Engineering]]

### 4. Weryfikowalność — nowe ograniczenie
*(pas ③ diagramu)*

- Stare komputery automatyzują to, co umiesz **zaprogramować (specify)**. To pokolenie LLM-ów automatyzuje to, co umiesz **zweryfikować (verify)**.
- Stąd **jagged intelligence** — szczyty w domenach weryfikowalnych (kod, matematyka), doliny gdzie indziej. Jaggedness = *weryfikowalne* **+** *to, na czym laby trenują*.
- Cytat-haczyk (świetny do social):
  > „How is it possible that a state-of-the-art model will refactor a 100,000-line codebase or find zero-day vulnerabilities, and yet tell me to walk to a car wash 50 metres away?"
- **Founder takeaway:** problem *weryfikowalny* jest dziś wykonalny — rzuć w niego RL, zbuduj własne środowiska RL / fine-tune. Własna fosa, niezależna od labów.

### 5. Czego nie da się outsourcować
*(pas ④ diagramu — emocjonalny rdzeń tekstu)*

- **Smak, osąd, nadzór** — ty trzymasz spec, plan, top-level design; agent „wypełnia luki".
- **Fundamenty > trivia API** — „stażysta" ma idealną pamięć do `keepdim` vs `axis`; ty musisz rozumieć, co dzieje się pod spodem.
- **Samo zrozumienie** — i tu pointa:
  > „You can outsource your thinking, but you can't outsource your understanding."
  > *(Myślenie możesz oddelegować. Zrozumienia — nie.)*
- Anegdota do zilustrowania zawodności agenta: MenuGen próbował dopasowywać środki po **adresach e-mail** Stripe vs Google zamiast po trwałym ID użytkownika — błąd, który musi wyłapać człowiek.

### 6. Buduj dla agentów, nie dla ludzi
*(pas ⑤ diagramu)*

- Opisuj systemy **najpierw agentom**; rozkładaj pracę na **sensory** (czytają świat) i **aktuatory** (działają), trzymaj dane **czytelne dla LLM**.
- Kierunek: „mój agent rozmawia z twoim agentem".
- **Rekrutacja do przebudowy:** zamiast łamigłówek — duży projekt („zbuduj bezpiecznego Twitter-clone dla agentów, potem niech 10 agentów próbuje go złamać") i obserwacja, *jak* kandydat włada narzędziami.

### 7. Zakończenie — „nie zwierzęta, lecz duchy"

- Framing Karpathy'ego: nie budujemy zwierząt, *przywołujemy duchy* — statystyczne obwody symulacji, nie inteligencje ukształtowane przez ciekawość/ewolucję.
- Wartość tej metafory to *nastawienie*: bądź odpowiednio podejrzliwy, sprawdzaj empirycznie co działa.
- **Klamra z czytelnikiem:** zapytaj, w którym paradygmacie jest jego produkt i co jest jego fosą (dane / prompty / system design / zaufanie — cztery fosy z [[Software 3.0]]).

---

## ✍️ Bank cytatów (oryginały EN — do wplecenia)

> „You can outsource your thinking, but you can't outsource your understanding."

> „We're not building animals. We are summoning ghosts."

> „Everything is automatable."

> „All businesses are literally being restructured to be AI first… AI in the middle being the engine and driving them forward. But that is all the engine is. You get to design your own car."

---

## 🔗 Linki i materiały źródłowe

**Notatki w bazie (do podlinkowania w tekście / przypisach):**
- [[Software 3.0]] — teza paradygmatów jako playbook biznesowy + cztery fosy
- [[Agentic Engineering]] — pełen wywiad Sequoia: vibe→agentic, weryfikowalność, jagged intelligence, „nie da się outsourcować zrozumienia"
- [[Context Engineering]] — „okno kontekstu to twoja dźwignia"
- [[Agentic Coding]] — ten sam zwrot od strony budującego
- [[LLM Knowledge Bases]] — metoda Karpathy'ego na własną wiedzę (fosa #1); fundament tej bazy
- [[Self-Improving Company]] — teza o „legible context" i organizacji AI-first

**Diagram:**
- Grafika: `Karpathy Paradigm.png` (osadzona wyżej)
- Edytowalne źródło: [[Karpathy Paradigm.excalidraw]]

**Wideo (osadzić / zlinkować):**
- 📺 [Andrej Karpathy: From Vibe Coding to Agentic Engineering](https://www.youtube.com/watch?v=96jN2OCOfLs) — Sequoia Capital, 29:49 (źródło pierwotne)
- 📺 [Software 3.0 — breakdown](https://www.youtube.com/watch?v=hJNp9RwK-Uw) — Dream Labs AI, 14 min (ujęcie biznesowe)

---

## 🗒️ Notatki dla piszącego

- Trzymaj jeden wątek przewodni: **„rośnie abstrakcja → przesuwa się to, co robi człowiek"**.
- Każdą sekcję otwórz konkretnym obrazem/anegdotą (MenuGen, car wash, 10 agentów), potem uogólnij.
- Cytaty Karpathy'ego zostaw w EN i daj krótki gloss PL — brzmią mocniej w oryginale.
- Unikaj listy „10 narzędzi AI" — to ma być tekst o *modelu myślenia*, nie katalog toolów.
- Jeśli wersja EN na `brain.lipowczan.pl`: przełóż całość, podlinkuj te same notatki, zachowaj diagram.

---
Template: bazuje na strukturze `templates/basic_notes` (typ `answer-note`, materiał wyjściowy w `_outputs/`)
