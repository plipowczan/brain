---
title: "Autonomous Sales Agent Playbook"
date: 2026-04-14
enableToc: true
openToc: true
tags: ["knowledge", "info", "business", "ai", "agents", "sales", "automation", "lead-generation"]
type: knowledge-note
source: "_raw/inbox/Where teams and agents work together.md"
agent-created: true
summary: "Playbook for building autonomous AI sales agents replacing $1.4k/mo SaaS stacks with ~$20/mo agent architecture"
---

# Autonomous Sales Agent Playbook

## 🗒️ Description
Playbook autorstwa Romàna z [gojiberry.ai](https://gojiberry.ai/) — jak zastąpić tradycyjny marketing stack ($1,400+/mo) jednym autonomicznym systemem sprzedażowym za ~$20/mo. Nie chodzi o chatbota — to always-on operator, który obsługuje speed-to-lead, context research i follow-up bez udziału człowieka.

## 🚀 Key Insight: Speed-to-Lead
- Średni czas odpowiedzi na leada: **47 godzin** (Harvard Business Review, 2,241 firm)
- Odpowiedź w ciągu 5 minut = **21x większa szansa** na kwalifikację vs 30 min
- Agent odpowiada w < 2 minuty, follow-up rate ~100%

## 🧩 Architektura — 4 komponenty

| Komponent | Rola | Narzędzie |
|-----------|------|-----------|
| **Eyes** | Detekcja high-intent signals | [Gojiberry.ai](https://gojiberry.ai/) |
| **Body** | Wykonanie workflow'ów, ruch danych | OpenClaw (self-hosted) |
| **Brain** | Analiza kontekstu, pisanie wiadomości | Claude (Anthropic API) |
| **Memory** | Lightweight CRM | Markdown files (1 plik = 1 lead) |

## 🎨 Context Engine — 4 fazy
1. **Signal Detection** — ciągłe nasłuchiwanie intent signals (komentarze, DM, inbound)
2. **Research Loop** — zanim agent napisze słowo, zbiera kontekst: profil, firma, ostatnie newsy, pain points → JSON dossier
3. **Intent Triage** — priorytetyzacja leadów:
   - P0: Buyer / call request → natychmiastowa odpowiedź
   - P1: Product inquiry / service interest → qualify + value prop
   - P2: Networking → draft gentle decline
   - P3: Spam → ignore
4. **Copywriting Engine** — personalizowane wiadomości oparte na zebranym kontekście

## 📒 File-Based CRM
- Jeden plik Markdown na leada
- Foldery jako stages (state machine): `new/` → `qualified/` → `contacted/` → `won/` / `lost/`
- Zero vendor lock-in, czytelne forever

## 🧩 5 Workflow Arsenal
1. **Outbound campaign builder** — budowanie kampanii wychodzących
2. **Inbound content monitor** — monitoring treści przychodzących
3. **Trial-to-paid nudger** — konwersja trial → paid
4. **Win-back agent** — odzyskiwanie utraconych klientów
5. **Market intel briefing** — briefing rynkowy

## ☘️ Cost Comparison

| | Old way (Human + SaaS) | Agent stack |
|---|---|---|
| Response time | ~47h | < 2 min |
| Follow-up rate | ~30% | ~100% |
| Monthly cost | ~$1,447/mo | ~$20/mo |
| Maintenance | High | Low |

Stack: GoHighLevel ($297) + Zapier ($74) + Calendly ($16) + Mailchimp ($60) + VA ($1,000) = **$1,447/mo**
Agent: OpenClaw ($0) + TidyCal ($29 lifetime) + Resend ($0) + Claude API (~$15) + VPS (~$5) = **~$20/mo**

## 🔗 Links
- [[AI/KNOWLEDGE/INFO/Agentic Coding|Agentic Coding]] — related concept of AI agents in development
- [[BUSINESS/TOOLS/Make|Make]], [[BUSINESS/TOOLS/n8n|n8n]] — alternative automation platforms mentioned in comparison

## 📖 Further reading
- [gojiberry.ai](https://gojiberry.ai/) — autonomous sales agent platform
- [OpenClaw](https://openclaw.com/) — open-source workflow execution engine
- Source: Notion playbook by Romàn (gojiberry.ai co-founder)

---
Template: [[templates/knowledge_note_info]]
