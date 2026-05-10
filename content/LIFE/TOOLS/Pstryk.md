---
title: "Pstryk"
date: 2026-05-10
enableToc: true
openToc: true
tags: ["tool", "energy", "dynamic-pricing", "household", "savings", "poland"]
type: tool
source: "_raw/inbox/Pstryk, czyli kolejna odsłona Prądu dla Finansowych Ninja.md"
agent-created: true
summary: "Polski sprzedawca prądu po cenach dynamicznych godzinowych z Tarczą 0,61 zł/kWh, miernikiem WiFi i transparentną aplikacją"
---
# Pstryk

Polski startup energetyczny (od X 2024) sprzedający prąd w modelu **cen dynamicznych godzinowych** z giełdy TGE (RDN), z **zerową opłatą handlową**, marżą **0,08 zł netto/kWh** i własnym miernikiem WiFi w skrzynce z bezpiecznikami. Kluczowy mechanizm bezpieczeństwa: **Tarcza Pstryk** — średnia ważona miesięczna nie przekroczy **0,61 zł/kWh brutto** (do 31.12.2026, planowo przedłużana). Polecane przez [[Michał Szafrański]] (ambasador, kod **NINJA50** = 50 zł rabat).

## 🚀 Główna teza

> Pstryk to nie „tańszy prąd” — to **prąd, którym da się sterować**.

Tarcza chroni przed górką, dynamiczne ceny dają potencjał oszczędności, aplikacja daje pełną transparentność (rozbicie kosztu kWh: rynek + marża + dystrybucja + akcyza + VAT), a powiadomienia o cenach na jutro pozwalają planować zużycie.

## 🧩 Model rozliczania

- **Cena godzinowa z TGE/RDN** + marża 0,08 zł netto/kWh.
- **0 zł opłaty handlowej** (vs 12–31 zł/m-c u E.ON i ofert komercyjnych).
- **Ceny na jutro znane dziś po 12:00** + push o 19:00 z rekomendacjami.
- **Tarcza Pstryk** liczona miesięcznie (nie godzinowo): jeśli średnia ważona miesięczna > 0,61 zł/kWh brutto → opust do 0,61. Jeśli niższa → płacisz mniej. **Nie da się stracić.**

## ☘️ Dla kogo to ma sens

**TAK:**
- **Posiadacze EV z domową ładowarką** — potencjał ~1800 zł/rok przy ładowaniu w złotym oknie 10–15 zamiast wieczorem.
- **Pompa ciepła** — ~970 zł/rok przy programowaniu pracy.
- **Magazyn energii / fotowoltaika z magazynem** — naturalny match z dynamicznymi cenami.
- **Klient E.ON** (większość warszawiaków) — sama oszczędność na opłacie handlowej 180–300 zł/rok, ROI miernika 8–12 m-cy.
- **Emeryt / praca zdalna** — profil zużycia naturalnie w „złotym oknie” południowym 10–15.
- **Lubiący rozumieć rachunki** — żaden inny sprzedawca w PL nie daje takiego poziomu szczegółowości.

**NIE:**
- **Klient na taryfie URE (PGE/Tauron/Enea) pasywny** — 9–33 zł/rok oszczędności, miernik zwraca się 3–4 lata.
- **Brak WiFi / smartfona** — usługa nie zadziała.
- **Brak chęci optymalizacji** — Tarcza chroni, ale tracisz cały potencjał produktu.

## 📒 Liczbowe back-testy 2025 (8760 godzin)

Wzór odniesienia: typowy sprzedawca URE 0,615 zł/kWh.

### Pasywny użytkownik (nic nie optymalizuje)

| Profil | Zużycie | Średnia roczna | Oszczędność |
|--------|--------:|---------------:|------------:|
| Standardowy w bloku | 2400 kWh | 0,6100 zł | 12 zł/rok |
| Para w pracy 8–17 | 1800 kWh | 0,6100 zł | 9 zł/rok |
| Emeryt w domu | 2200 kWh | 0,5837 zł | **69 zł/rok** |
| Rodzina z dziećmi | 3500 kWh | 0,6100 zł | 22 zł/rok |
| Praca zdalna | 3000 kWh | ~0,599 zł | 33 zł/rok |

### Aktywny (przesuwa ~20% z 17–21 do 10–15)

- Standardowy: 60 zł/rok
- Para w pracy: 51 zł/rok
- Emeryt: 117 zł/rok
- **Rodzina z dziećmi: 120 zł/rok** (6× więcej niż pasywny)
- **Praca zdalna: 127 zł/rok**

### Pełny bilans z opłatą handlową (rok 2 i kolejne)

| Obecny sprzedawca | Aktywny standardowy | Aktywny rodzina |
|---|---:|---:|
| URE (0 zł/m-c) | ~60 zł/rok | ~120 zł/rok |
| E.ON (~15 zł/m-c) | ~240 zł/rok | ~300 zł/rok |
| Komercyjna z pakietem (~25 zł/m-c) | ~360 zł/rok | ~420 zł/rok |

## 🗒️ Złote okno cenowe

- **Najtaniej 10:00–15:00**: średnia 2025 = 0,45 zł/kWh (28% pod benchmarkiem). 67% godzin tego okna jest tańszych niż URE.
- **Najdrożej 17:00–21:00**: średnia 0,88 zł/kWh (43% nad benchmarkiem). Tylko 9% godzin tu jest tańszych niż URE.
- **Spread dobowy 2025**: średnio 0,74 zł/kWh, max >2 zł/kWh.
- **Niedziela** = król tanich dni (16 gr taniej niż wtorek).
- **Ceny ujemne**: 95 godzin w 2025, rekord -0,52 zł/kWh (13.04 niedziela wielkanocna 12:00). 72% to weekendy/święta. 33% przypadło na kwiecień.

## 🔌 Co da się przesunąć

- **Pralka 2×/tydz w złote okno**: ~68 zł/rok
- **Zmywarka 6×/tydz**: ~162 zł/rok
- **Ładowanie EV 2×/tydz po 40 kWh**: **~1800 zł/rok**
- **Pompa ciepła sezon grzewczy**: ~970 zł/rok

Czego NIE warto ruszać: lodówka/zamrażarka (24/7), oświetlenie LED (grosze), router, klimatyzacja (i tak gra w złotym oknie).

## 💰 Wejście

- **299 zł brutto** opłata aktywacyjna (miernik + montaż przez elektryka Pstryka — Warszawa, Kraków, Wrocław, Łódź, Poznań, Trójmiasto, Szczecin, Bydgoszcz, Katowice, Częstochowa, Toruń, Grudziądz, Lublin, Rybnik, Racibórz, Wodzisław Śl.).
- **Kod NINJA50** = -50 zł na pierwszej fakturze → efektywnie **249 zł**.
- **Miernik własnością Pstryka**, zwrot przy rozwiązaniu umowy.
- **Umowa na czas nieokreślony**, miesięczne wypowiedzenie, **zero kar umownych**, 14-dniowe prawo odstąpienia.
- **Pstryk Connect** (opcja): 30 zł/m-c (3 m-ce gratis) — automatyzacja ładowarek EV, magazynów energii, w przyszłości pomp ciepła.

### ROI miernika (249 zł, profil Standardowy aktywny)

- URE: ~3,5 roku
- E.ON: **~1 rok**
- Komercyjna z pakietem: **~8 m-cy**

## ⚠️ Wymagania

- Stałe WiFi w domu.
- Miejsce w skrzynce na 1 dodatkowy „bezpiecznik”.
- Smartfon (iOS/Android) — aplikacja jest sercem produktu.
- Numer PPE z faktury przy rejestracji.

Pstryk załatwia wypowiedzenie u obecnego sprzedawcy (pełnomocnictwo). Czas zmiany: 6–8 tygodni.

## 🔧 Pułapki montażu (przestrogi z artykułu)

1. **Rozpakowanie miernika przy Was** — miernik + cewki są **fabrycznie skalibrowane razem**. Pomieszanie kompletów = błędne pomiary.
2. **Kolejność faz przy 3-fazowym** — porównać chwilowe obciążenie faz w aplikacji z licznikiem głównym.
3. **Sparowanie aplikacji przy elektryku** — nie wypuszczać fachowca przed weryfikacją.

## 📱 Funkcje aplikacji

- Ceny godzinowe na dziś + jutro (od 12:00).
- Push o 19:00 z rekomendacjami.
- Bieżące zużycie odświeżane co minutę, per faza (3-fazowe).
- Historia godzinowa / dobowa / miesięczna od 1. dnia.
- Pełne rozbicie: cena rynkowa + marża Pstryk + dystrybucja + akcyza + VAT.
- Ślad węglowy CO2.
- Faktury + płatności (przelew / PayU).
- **Otwarte API** — integracja ze smart home.
- Program poleceń.

## ⚠️ Zastrzeżenia

- **Tarcza nie obejmuje dystrybucji** (na to nie ma wpływu żaden sprzedawca).
- **Tarcza wymaga sprawnego miernika** (gdy padnie WiFi → brak ochrony).
- **Pstryk to startup od X 2024** — krótka historia, ryzyko ekspozycji na młodą firmę. Mityguje to brak długoterminowego zobowiązania.
- **Tarcza obowiązuje do 31.12.2026** — kierownictwo deklaruje przedłużenie, ale gwarancji na lata 2027+ nie ma.

## 🔗 Linki

- **Strona**: https://pstryk.pl/
- **Infolinia**: +48 588 810 295
- **Kod rabatowy**: NINJA50 (-50 zł)
- **Źródłowa analiza Michała Szafrańskiego (maj 2026)**: https://jakoszczedzacpieniadze.pl/pstryk-czyli-czy-warto-zmienic-sprzedawce-pradu

## 📖 Resources

- Oryginalny wpis blogowy z back-testami 8760 godzin 2025: zobacz `_raw/processed/2026-05-10_Pstryk-czyli-kolejna-odslona-Pradu-dla-Finansowych-Ninja.md`.
- Akcja poprzedniczka „Prąd dla Finansowych Ninja” z Lumi (2019–2024): 2417 klientów, gwarantowane stawki 0,29 → 0,39 zł/kWh.

---
Template: [[templates/tool]]
