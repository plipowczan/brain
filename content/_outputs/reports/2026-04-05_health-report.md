---
title: "Health Report 2026-04-05"
date: 2026-04-05
agent-created: true
---

# 🏥 Vault Health Report — 2026-04-05

## 📊 Podsumowanie

| Metryka | Wartość |
|---------|--------|
| Notatki łącznie | 133 |
| Notatki z problemami | 56 (42%) |
| Broken wikilinks (unikalne cele) | 32 |
| Notatki z TODO markerami | 33 |
| Stub notatki (<100 znaków) | 11 |
| Notatki bez frontmatter | 4 |
| Orphan notatki (0 incoming links) | 68 (51%) |
| Stale notatki (>1 rok) | 116 (87%) |

---

## 🔴 CRITICAL — Brakujący frontmatter

Notatki bez frontmatter YAML lub z poważnymi brakami:

| Notatka | Problem |
|---------|---------|
| `INVESTMENTS/Qualcomm.md` | Brak frontmatter, pusty plik (0 znaków) |
| `PROJECTS/Hospital Logistics.md` | Brak frontmatter, pusty plik (0 znaków) |
| `STYL_PISANIA_ANALIZA.md` | Brak frontmatter (plik systemowy) |
| `_index.md` | Brak frontmatter (strona główna) |
| `PROJECTS/Trendy 2026.md` | Tytuł: "Untitled" |
| `BUSINESS/KNOWLEDGE/HOWTO/Contact a client.md` | Tytuł: "Untitled" |
| `KNOWLEDGES/QUOTES/Hofstadter's law.md` | Data: `<% tp.date` — nieprzetworzona zmienna Templater |
| `HARDWARE/Kindle.md` | Brak type w frontmatter |
| `GENERAL/Reading list.md` | Puste tagi `[]` |
| `ABOUT/Roles/Roles.md` | Puste tagi `[]` |

---

## 🟡 WARNING — Broken Wikilinks

32 unikalne cele wikilinków nie mają odpowiadających plików.

### Złe prefixy folderów (linki do nieistniejących ścieżek)

| Link | Źródło | Prawdopodobna poprawna ścieżka |
|------|--------|-------------------------------|
| `[[INBOX/Roles/Developer]]` | Roles.md | ABOUT/Roles/Developer |
| `[[INBOX/Roles/Founder]]` | Roles.md | ABOUT/Roles/Founder |
| `[[INBOX/Roles/AutomationSpecialist]]` | Roles.md | ABOUT/Roles/AutomationSpecialist |
| `[[INBOX/Roles/Son]]` | Roles.md | ABOUT/Roles/Son |
| `[[INBOX/Roles/Friend]]` | Roles.md | ABOUT/Roles/Friend |
| `[[BOOK/Company of one]]` | I have a business..., STYL_PISANIA_ANALIZA | BUSINESS/BOOKS/Company of one |
| `[[BOOKS/12 Rules for Life: An Antidote to Chaos]]` | Jordan Petersons 12 rules | LIFE/BOOKS/12 Rules for Life |
| `[[BOOKS/W sercu emocji dziecka]]` | I have a business... | LIFE/BOOKS/W sercu emocji dziecka |
| `[[BOOKS/Twoje kompetentne dziecko]]` | I have a business... | LIFE/BOOKS/Twoje kompetentne dziecko |
| `[[KNOWLEDGE/Blue light]]` | Kindle.md | LIFE/KNOWLEDGE/INFO/Blue light |

### Brakujące notatki narzędzi (z "What tools I use")

| Link | Folder docelowy |
|------|----------------|
| `[[LIFE/TOOLS/Dashlane]]` | LIFE/TOOLS/ |
| `[[LIFE/TOOLS/Authenticator]]` | LIFE/TOOLS/ |
| `[[LIFE/TOOLS/Edge]]` | LIFE/TOOLS/ |
| `[[LIFE/TOOLS/PowerToys]]` | LIFE/TOOLS/ |
| `[[LIFE/TOOLS/Brave]]` | LIFE/TOOLS/ |
| `[[LIFE/TOOLS/Firefox]]` | LIFE/TOOLS/ |
| `[[LIFE/TOOLS/Feedly]]` | LIFE/TOOLS/ |
| `[[LIFE/TOOLS/Goodreads]]` | LIFE/TOOLS/ |
| `[[LIFE/TOOLS/LubimyCzytac]]` | LIFE/TOOLS/ |
| `[[LIFE/TOOLS/Audioteka]]` | LIFE/TOOLS/ |
| `[[BUSINESS/TOOLS/Blinkist]]` | BUSINESS/TOOLS/ |
| `[[BUSINESS/TOOLS/Descript]]` | BUSINESS/TOOLS/ |
| `[[BUSINESS/TOOLS/Happyscribe]]` | BUSINESS/TOOLS/ |
| `[[BUSINESS/TOOLS/Movavi]]` | BUSINESS/TOOLS/ |

### Brakujące notatki projektów

| Link | Źródło |
|------|--------|
| `[[PROJECTS/Genti Retail]]` | ShareFund.md |
| `[[PROJECTS/Drug Temperature Control System]]` | ShareFund.md |
| `[[PROJECTS/Work attendance management system]]` | ShareFund.md |

### Brakujące notatki osób

| Link | Źródło |
|------|--------|
| `[[Damon Zahariades]]` | The Mental Toughness Handbook.md |
| `[[Meurisse Thibaut]]` | Dopamine Detox.md |
| `[[Gosia Lipowczan]]` | Dopamine Detox.md |

### Inne

| Link | Źródło | Uwagi |
|------|--------|-------|
| `[[ARTICLES/Articles]]` | _index.md | Folder ARTICLES/ nie istnieje |
| `[[ścieżka/do/pliku]]` | STYL_PISANIA_ANALIZA.md | Placeholder w przykładach — zignorować |

### Referencje do szablonów (nie wymagają placeholderów)

Wiele notatek linkuje do szablonów Obsidian (`[[templates/tool]]`, `[[templates/knowledge_note_how_to]]`, itp.) — Quartz nie wyświetla tych notatek, ale linki w źródle są niefunkcjonalne. Dotyczy ~50 notatek.

---

## 🟡 WARNING — TODO Markers (33 notatki)

| Notatka | Ilość TODO | Markery |
|---------|-----------|---------|
| `CODE/TOOLS/Visual Studio Code.md` | 6 | #todo/replace, #todo/complete |
| `CODE/TOOLS/RunJS.md` | 6 | #todo/replace, #todo/complete |
| `CODE/TOOLS/Git.md` | 6 | #todo/replace, #todo/complete |
| `BUSINESS/TOOLS/Marble.md` | 6 | #todo/replace, #todo/complete |
| `BUSINESS/TOOLS/SendFox.md` | 6 | #todo/replace, #todo/complete |
| `LIFE/TOOLS/OneNote.md` | 6 | #todo/replace, #todo/complete |
| `LIFE/TOOLS/TextExpander.md` | 6 | #todo/replace, #todo/complete |
| `NOCODE/TOOLS/Webflow.md` | 6 | #todo/replace, #todo/complete |
| `NOCODE/TOOLS/Xata.md` | 6 | #todo/replace, #todo/complete |
| `NOCODE/KNOWLEDGE/HOWTO/How to create an app in Make.md` | 5 | #todo/replace, #todo/complete |
| `CODE/KNOWLEDGE/HOWTO/How I work on HTML email templates.md` | 4 | #todo |
| `STYL_PISANIA_ANALIZA.md` | 4 | #todo |
| `LIFE/KNOWLEDGE/HOWTO/How to create a task for delegation.md` | 3 | #todo/replace |
| `LIFE/TOOLS/Windows.md` | 2 | #todo |
| `LIFE/KNOWLEDGE/INFO/Trust.md` | 2 | #todo |
| `NOCODE/TOOLS/Notion.md` | 2 | #todo |
| `ABOUT/My career path.md` | 1 | #todo |
| `BUSINESS/BOOKS/Millionaire Fastlane.md` | 1 | #todo |
| `BUSINESS/KNOWLEDGE/HOWTO/Contact a client.md` | 1 | #todo/check |
| `BUSINESS/KNOWLEDGE/HOWTO/React when employee doesn't do what he is supposed to.md` | 1 | #todo |
| `BUSINESS/KNOWLEDGE/HOWTO/Test email rating.md` | 1 | #todo/complete |
| `CODE/KNOWLEDGE/HOWTO/Export git logs to file.md` | 1 | #todo |
| `LIFE/KNOWLEDGE/INFO/Cold shower.md` | 1 | #todo |
| `LIFE/KNOWLEDGE/INFO/Gratitude.md` | 1 | #todo |
| `LIFE/KNOWLEDGE/INFO/Jordan Petersons 12 rules for life.md` | 1 | #todo |
| `LIFE/TOOLS/Obsidian.md` | 1 | #todo |
| `NOCODE/KNOWLEDGE/HOWTO/How to send emails directly from Free Airtable using Sendgrid extension.md` | 1 | #todo |
| `NOCODE/TOOLS/Altogic.md` | 1 | #todo |
| `PROJECTS/SECONDBRAIN/Programmer and what's next.md` | 1 | #todo |

*Notatki z 6 markerami TODO to najprawdopodobniej nieedytowane szablony.*

---

## 🟡 WARNING — Stub notatki (<100 znaków treści)

| Notatka | Rozmiar | Opis |
|---------|---------|------|
| `INVESTMENTS/Qualcomm.md` | 0 zn. | Pusty plik, brak frontmatter |
| `PROJECTS/Hospital Logistics.md` | 0 zn. | Pusty plik, brak frontmatter |
| `NOCODE/Tools.md` | 56 zn. | Tylko link do folderu |
| `KNOWLEDGES/QUOTES/Think for yourself and question authority.md` | 61 zn. | Tylko cytat |
| `KNOWLEDGES/QUOTES/By failing to prepare you are preparing to fail.md` | 70 zn. | Tylko cytat |
| `KNOWLEDGES/QUOTES/In this world, nothing is certain except death and taxes.md` | 79 zn. | Tylko cytat |
| `KNOWLEDGES/QUOTES/Quotes.md` | 84 zn. | Tabela Dataview |
| `ABOUT/Roles/Husband.md` | 86 zn. | Tylko zdjęcie |
| `KNOWLEDGES/QUOTES/Importance and urgency.md` | 97 zn. | Tylko cytat |

*Notatki z cytatami (QUOTES/) mogą być poprawne jako krótkie wpisy — to kwestia stylu.*

---

## ℹ️ INFO — Niespójne nazewnictwo

| Problem | Szczegóły |
|---------|-----------|
| Kindle z tytułem "tool" | `HARDWARE/Kindle.md` — tytuł w frontmatter to "tool" zamiast "Kindle" |
| Revolut Junior z tytułem "tool" | `LIFE/TOOLS/Revolut Junior.md` — tytuł w frontmatter to "tool" |
| Obsidian z tytułem "tool" | `LIFE/TOOLS/Obsidian.md` — tytuł w frontmatter to "tool" |
| Dwa pliki o Obsidian | `LIFE/TOOLS/Obsidian.md` (narzędzie) i `LIFE/KNOWLEDGE/INFO/Obsidian.md` (informacja) |
| VisualStudioCode vs Visual Studio Code | Nazwa pliku bez spacji: `Visual Studio Code.md`, ale w tekście bywa "VisualStudioCode" |

---

## ℹ️ INFO — Orphan notatki (68 — brak incoming links)

Notatki do których żadna inna notatka nie linkuje. Nie znaczy to, że są błędne — mogą być punktami startowymi. Najważniejsze:

**Cały folder KNOWLEDGES/QUOTES/** (8 notatek) — żaden cytat nie jest linkowany z innej notatki.

**Cały folder TRAVELS/TRIPS/** (5 notatek) — żadna podróż nie jest linkowana.

**Większość HOWTO notatek** (~15) — nie są linkowane z notatek tematycznych.

**Nowsze notatki** bez linków: `Learn Like a Pro`, `Dopamine Detox`, `The Mental Toughness Handbook`, `5 second rule`, `Trendy 2026`.

Pełna lista: 68 notatek (patrz skan powyżej).

---

## ℹ️ INFO — Stale notatki (116 — starsze niż rok)

87% notatek nie było aktualizowanych od ponad roku. Większość pochodzi z 2022 roku (pierwotne tworzenie bazy). To informacja, nie błąd — ale warto rozważyć przegląd i aktualizację najważniejszych notatek.

**Najstarsze (2022-08):** About, Father, Husband, Roles, Habits, 5 Minute Journal, Digital Garden, Cornel Notes, Miracle morning, Projects, ShareFund, Reading list.

---

## 📋 Rekomendowane działania

### Priorytet 1 (szybkie naprawki)
- [ ] Uzupełnić frontmatter w `Qualcomm.md` i `Hospital Logistics.md` (lub usunąć puste pliki)
- [ ] Nadać tytuł `Trendy 2026.md` i `Contact a client.md`
- [ ] Naprawić datę Templater w `Hofstadter's law.md`
- [ ] Poprawić tytuły "tool" → właściwe nazwy (Kindle, Revolut Junior, Obsidian)

### Priorytet 2 (broken links — tworzone placeholdery)
- [ ] Stworzyć placeholder notatki dla brakujących celów wikilinków (narzędzia, projekty, role)
- [ ] Naprawić ścieżki w linkach: `INBOX/Roles/` → `ABOUT/Roles/`, `BOOK/` → `BUSINESS/BOOKS/`, `BOOKS/` → `LIFE/BOOKS/`

### Priorytet 3 (uzupełnianie treści)
- [ ] Uzupełnić 9 tool notatek z 6 TODO markerami (szablonowe stuby)
- [ ] Rozwiązać pozostałe TODO markery (24 notatki z 1-5 markerami)

### Priorytet 4 (jakość sieci)
- [ ] Dodać linki do orphan notatek z powiązanych tematycznie notatek
- [ ] Przejrzeć i zaktualizować najstarsze notatki (About, Roles, Habits)
