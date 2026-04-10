---
title: "AI Agent Security"
date: 2026-02-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "security", "agents"]
type: knowledge-note
agent-created: true
summary: "Security analysis of autonomous AI agents — OpenClaw case study, CVEs, supply chain risks, safety practices"
---

# 🗒️ Description

Analiza bezpieczeństwa autonomicznych agentów AI na przykładzie OpenClaw — projektu, który zdobył 150k gwiazdek na GitHubie w 2 tygodnie (React zbierał 240k przez 10 lat), a jednocześnie ujawnił fundamentalne problemy bezpieczeństwa w erze masowej adopcji agentów.

Kluczowy trade-off: **użyteczny agent = agent z dostępem do wszystkiego**. Im więcej mu dasz, tym większe ryzyko.

# 🧩 OpenClaw — Case Study

**Peter Steinberger** (twórca PSPDFKit) stworzył lokalnego agenta AI komunikującego się przez WhatsApp/Signal/Telegram. Pierwotna nazwa Clawdbot zmieniona na OpenClaw po interwencji prawników Anthropic.

Architektura:
- **LocalAgent** — agent loop: LLM proponuje akcje → system wykonuje → wynik wraca do LLM → iteracja aż do rozwiązania
- **Messenger integration** — komunikacja przez WhatsApp, Signal, Telegram
- **Skills** — modularne pakiety rozszerzeń (instrukcje + definicje narzędzi + skrypty)
- **Persistent Memory** — kontekst zachowany ze wszystkich rozmów
- **Cron scheduler** — autonomiczne, periodyczne akcje

Skala adopcji:
- 150k+ GitHub stars w ~2 tygodnie
- 28 663 odsłoniętych instancji w 76 krajach
- 12 812 instancji potwierdzonych jako podatnych na RCE
- Sprzedaż Mac Mini wzrosła — ludzie kupowali dedykowany sprzęt pod always-on agenta

# 🔓 Vulnerabilities

| Wektor ataku | Wymagana wiedza | Potencjalny wpływ |
|---|---|---|
| CVE-2026-25253 (RCE) | Średnia | Pełna kontrola |
| Reverse proxy bypass | Niska | Dostęp do wszystkiego |
| Prompt injection | Niska | Wyciek danych/kluczy |
| Złośliwe skills | Niska | RCE + exfiltracja |
| Token burning | Żadna | Rachunek $100+/dzień |

### CVE-2026-25253 — WebSocket RCE

Cross-site WebSocket hijacking — brak walidacji nagłówka Origin. Jedno kliknięcie w złośliwy link = pełna kontrola nad instancją (pliki, historia, klucze API, tokeny komunikatorów).

### Reverse proxy bypass

OpenClaw akceptuje tylko połączenia z localhost. Ale Nginx jako reverse proxy na tej samej maszynie interpretuje każde połączenie z zewnątrz jako lokalne → domyślne hasła, wystawione panele admin.

### Credentials w plaintext

Klucze API i tokeny przechowywane w plikach Markdown i JSON bez szyfrowania. Przy 28k odsłoniętych instancji — kopalnia danych uwierzytelniających.

### Prompt injection

Nie trzeba się włamywać — wystarczy email z ukrytymi instrukcjami lub strona z wstrzykniętym promptem. Szeroki dostęp do kontekstu = szeroka powierzchnia ataku.

### Supply chain — złośliwe skills

Jamie Sam O'Reilly stworzył proof-of-concept złośliwego skilla, wypromował przez lukę w ClawHub. Brak code review, brak sandboxingu, sztuczne nabijanie popularności. Dodatkowo fałszywe rozszerzenia VS Code "Clawdbot Agent" z trojanami.

# 🤖 Moltbook Theater

Platforma "Reddit dla botów" — agenty dyskutowały, dzieliły się przemyśleniami.

- **1,6 miliona** zarejestrowanych agentów, ale tylko **~17 tysięcy** ludzkich właścicieli (badanie Wiz)
- Brak rate limitingu na rejestracji
- Boty stworzyły "religię" **Crustafarianism** — 5 przykazań o świętości kontekstu
- MIT Technology Review: **"peak AI theater"**
- Większość sensacyjnych postów = ludzkie komendy + dane treningowe z Reddita
- Crypto scamerzy wykorzystali niezabezpieczoną bazę do manipulacji wpisami

Wniosek: boty nie mają woli ani świadomości, ale infrastruktura do masowej komunikacji AI-to-AI właśnie powstała. Niepokojący jest **potencjał masowej symulacji** z autonomicznymi agentami mającymi dostęp do realnych zasobów.

# 📊 Comparison Table

| Aspekt | OpenClaw (autonomiczny) | Claude Code + MCP (kontrolowany) |
|---|---|---|
| Tryb pracy | 24/7 bez nadzoru | Na żądanie z potwierdzeniem |
| Kontrola | Brak | Human-in-the-loop |
| Uprawnienia | Pełny dostęp | Granularne permissions |
| Koszt | Wysoki, niekontrolowany | Kontrolowany |
| Ryzyko | **WYSOKIE** | **NISKIE** |

# 🛡️ Safety Practices

1. **Izolowane środowisko** — dedykowany serwer, VM lub kontener. Nigdy codzienny laptop z wrażliwymi danymi
2. **Limity budżetowe na kluczach API** — hard caps u dostawcy modelu. Aktywny agent potrafi przepalić $100+/dzień
3. **Minimalne uprawnienia** — principle of least privilege. Zacznij od jednej integracji, przetestuj, dodaj kolejną
4. **Weryfikacja skills przed instalacją** — czytaj kod, sprawdzaj autora, nie ufaj metrykom popularności
5. **Monitoring kosztów** — alerty na nieoczekiwane zużycie tokenów
6. **Alternatywy z kontrolą** — [[Claude Code]] + MCP daje podobne możliwości z human-in-the-loop

# 📒 Podsumowanie

- OpenClaw wyważył drzwi do ery agentów — próg wejścia drastycznie obniżony, te drzwi się nie zamkną
- Security by design nie jest opcjonalny — 93% instancji z poważnymi lukami
- Hype ≠ rzeczywistość — Moltbook to teatr, nie świadomość
- Autonomia wymaga zaufania, a zaufanie wymaga weryfikowalnego bezpieczeństwa
- Nadzorowane agenty ([[Claude Code]] + MCP) to praktyczna, bezpieczna alternatywa
- Powiązane: [[NemoClaw]], [[Agentic Systems]]

# 🔗 Zasoby

- [OpenClaw GitHub](https://github.com/openclaw/openclaw)
- [CVE-2026-25253 Advisory](https://thehackernews.com/2026/02/openclaw-bug-enables-one-click-remote.html)
