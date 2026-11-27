---
title: "AI Agent Security"
date: 2026-02-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "security", "agents"]
type: knowledge-note
agent-created: true
sources: ["_raw/processed/2026-11-22_Building always-on agents.md", "_raw/processed/2026-11-27_aden-hive-hive-repo.md", "_raw/processed/2026-11-27_open-hive-playbooks.md"]
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

> [!contradiction] Is Claude Code only on demand with confirmation?
> Earlier: Claude Code + MCP works "on demand with confirmation", with a human in the loop (source: this note, 2026-02-09; no source file recorded)
> New: Claude Code's auto mode lets classifiers review higher-risk actions and block the dangerous ones, so Claude works without constant user input; the user reviews only the most important decisions (source: _raw/processed/2026-11-22_Building always-on agents.md)

# 🛡️ Safety Practices

1. **Izolowane środowisko** — dedykowany serwer, VM lub kontener. Nigdy codzienny laptop z wrażliwymi danymi
2. **Limity budżetowe na kluczach API** — hard caps u dostawcy modelu. Aktywny agent potrafi przepalić $100+/dzień
3. **Minimalne uprawnienia** — principle of least privilege. Zacznij od jednej integracji, przetestuj, dodaj kolejną
4. **Weryfikacja skills przed instalacją** — czytaj kod, sprawdzaj autora, nie ufaj metrykom popularności
5. **Monitoring kosztów** — alerty na nieoczekiwane zużycie tokenów
6. **Alternatywy z kontrolą** — [[Claude Code]] + MCP daje podobne możliwości z human-in-the-loop

# 🔐 Keeping an unattended agent under control

Anthropic's [[Building Always-On Agents (Anthropic)]] (2026-11-13) calls permissions the place where always-on agents carry the most risk: a run holds the user's access and nobody watches it. For every tool call the agent decides to go ahead, block it, or wait for approval. Three pieces, each answering a failure from the OpenClaw case above:

- **Credential proxy instead of keys in files.** A proxy outside the agent's environment adds the real credentials to outgoing requests; the agent never holds them. That is the direct fix for OpenClaw's plaintext keys in Markdown and JSON.
- **Classifiers on risky actions** (Claude Code's auto mode): higher-risk actions are reviewed and the dangerous ones blocked, so the agent looks for a safer route. The most important decisions still go to the user.
- **Deferred tool calls.** The run stops mid-call, the session is saved, the user gets the request (for example an MCP Apps card), and the answer comes back as an event that resumes the session. The agent asks instead of guessing, without blocking other work.
- Deeper checks such as prompt-injection screening belong inside the run, not in the webhook handler that receives the event.

Two traps from [[Open Hive]] (2026-11-27), both relevant to any agent that reads mail and works in batches:

- **An inbound sweep is an injection surface.** Its Inbound Sales Email Sweep reads every vendor pitch, spam folders included, and answers it ([[Open Hive Sales Playbooks]]). Each of those emails is untrusted text the agent acts on. Treat inbound mail as data, and keep the reply a draft.
- **An LLM supervisor can approve on your behalf.** Open Hive's opt-in Sentinel classifier treats "should I proceed to the next batch?" as needless permission-seeking and prefers `continue` when unsure, and its docs say goal constraints such as "never more than 3 messages per person per week" are only prompt text. An approval written as a question the agent asks is weaker than a gate the runtime enforces ([[Pilot, Skill, Playbook — Open Hive's Fan-out Pattern]]).

# 📒 Podsumowanie

- OpenClaw wyważył drzwi do ery agentów — próg wejścia drastycznie obniżony, te drzwi się nie zamkną
- Security by design nie jest opcjonalny — 93% instancji z poważnymi lukami
- Hype ≠ rzeczywistość — Moltbook to teatr, nie świadomość
- Autonomia wymaga zaufania, a zaufanie wymaga weryfikowalnego bezpieczeństwa
- Nadzorowane agenty ([[Claude Code]] + MCP) to praktyczna, bezpieczna alternatywa
- Powiązane: [[NemoClaw]], [[Agentic Systems]]
- [[Building Always-On Agents (Anthropic)]] — Anthropic's architecture for unattended agents: credential proxy, auto mode, deferred tool calls
- [[Open Hive]] — a batch-agent runtime whose supervisor leans toward continuing and whose goal constraints are prompt text only
- [[AI-Native SDLC Playbook]] — Anthropic's managed-settings policy for a regulated enterprise: deny secrets and network egress, an OS-level sandbox with a domain allowlist, managed-only hooks, MCP servers and plugin marketplaces

# 🔗 Zasoby

- [OpenClaw GitHub](https://github.com/openclaw/openclaw)
- [CVE-2026-25253 Advisory](https://thehackernews.com/2026/02/openclaw-bug-enables-one-click-remote.html)
