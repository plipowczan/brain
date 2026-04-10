---
title: "Hackathon Hacknation"
date: 2025-12-12
enableToc: true
openToc: true
tags: ["basic", "notes", "hackathon", "ai", "govtech"]
type: basic-note
agent-created: true
summary: "24h hackathon building budget system with AI — lessons on validation, AI limitations, team dynamics"
---

# 🚀 Context

**Hacknation** — hackathon organizowany przez GovTech Polska. 1500+ uczestników, 480 tys. PLN puli nagród, 24 godziny na działające rozwiązanie dla administracji publicznej.

- Zespół: "emerytowany" programista (4 lata przerwy od kodowania) + nieprogramiści korzystający z nocode i LLM
- Główna teza: **AI to equalizer** — narzędzie pozwalające zespołowi z mniejszym doświadczeniem koderskim konkurować z profesjonalnymi dev teamami
- Do wyboru zadania użyto AI — analiza wyzwań pod kątem kompetencji zespołu

# 🗒️ Problem — Pani Zosia i Tysiące Exceli

Proces budżetowania w administracji publicznej oparty na ręcznej wymianie setek tysięcy plików Excel:

1. **Start (dół):** urzędniczka ręcznie wpisuje dane budżetowe do Excela
2. **Eskalacja (góra):** plik wędruje: Gmina → Miasto → Województwo → Ministerstwo Finansów
3. **Konsolidacja:** specjalna komórka w ministerstwie scala dane (często ręcznie)
4. **Decyzja i powrót (dół):** limity budżetowe wracają tą samą drogą z arbitralnymi cięciami — nikt nie potrafi wyjaśnić dlaczego

Rozwiązanie: **Cyfrowy Budżet** — scentralizowana aplikacja webowa:
- Jedno źródło prawdy — wszystkie pozycje budżetowe w jednym systemie
- Transparentność — komentowanie i dyskusja nad pozycjami w systemie zamiast w mailach
- Workflow akceptacji — uproszczony proces zatwierdzania i konsolidacji

# 🛠️ Stack

| Warstwa | Technologia |
|---------|-------------|
| Frontend | React, TypeScript |
| Backend | Supabase |
| Prezentacja | Wideo wygenerowane w HiGen |

# 💰 Token Usage

- **Paweł i Kuba:** Antigravity (Gemini Pro / Claude 4.5) — zużyty cały tygodniowy limit tokenów w ~15h
- **Justyna:** Bolt ([[Claude Code]]) — rekordowe **18 milionów tokenów**

Praca trwała non-stop 24h, sen 2-3h. Początkowo każdy tworzył osobne kawałki kodu "na żywioł". Zwrot nastąpił po konsolidacji wokół najbardziej zaawansowanego prototypu Justyny.

# ⚠️ What Went Wrong

Wynik końcowy: **2.15 / 5 punktów** — brak finału.

- Technologia działała, prezentacja była świetna
- Zabrakło **walidacji** — zespół nie miał dostępu do praktyka (urzędnika pracującego z budżetem na co dzień)
- Mentor przypisany do zadania nie był ekspertem dziedzinowym
- System mógł być kompletnie "przestrzelony" — oderwany od realiów administracji

# 🤖 AI Limitations

- **Kod często nie działał** — rozwiązania wyglądały poprawnie, ale sypały się przy uruchomieniu
- **Halucynacje** — proponowane biblioteki nie istniały, logika "od czapy"
- **Potrzeba prowadzenia za rękę** — precyzyjne promptowanie i ciągłe korygowanie kursu
- **Blokady** — błąd w filtrach _current user_, którego model nie potrafił zdiagnozować; konieczny powrót do ręcznego czytania kodu i debugowania

AI to potężny mnożnik siły, ale nie magiczna różdżka. Bez umiejętności technicznych i krytycznego myślenia — utkniesz w połowie drogi.

# ☘️ Key Lesson — Walidacja > Technologia

Nawet najlepszy kod nie obroni rozwiązania, które nie odpowiada na realne potrzeby użytkownika.

Zespoły, które przyszły z gotowymi komponentami i lepszą analizą biznesową — wygrały. Podejście "na żywioł" jest romantyczne, ale w starciu z przygotowaniem przegrywa.

**Plan na kolejny hackathon:**
1. **Wybór zadania** — role w zespole, scraping zadań, analiza przez AI (ten etap był OK)
2. **Analiza biznesowa** (tu polegliśmy) — mapa AS-IS/TO-BE, User Stories, PRD, SRS, skille dla agentów
3. **Development** — gotowy boilerplate, iteracyjny development, testy automatyczne, ciągłe Code Review
4. **Dokumentacja i weryfikacja** — security review, performance review

# 📒 Podsumowanie

- AI pozwala robić rzeczy niemożliwe jeszcze rok temu — mały zespół w 24h stworzył działającą aplikację webową
- Technologia jest wtórna wobec zrozumienia problemu
- AI to przyszłość programowania, ale człowiek musi być pilotem, który wie dokąd leci
- [[Agentic Coding]] i narzędzia jak [[Claude Code]] dramatycznie obniżają próg wejścia, ale nie eliminują potrzeby fundamentów technicznych i analizy biznesowej
