---
title: "Airtable"
date:   2022-09-21
enableToc: true
openToc: true
tags: ["tool", "database"]
type: tool
agent-reviewed: 2026-04-10
summary: "No-code relational database tool used as structured data store and automation hub"
homepage: "https://www.airtable.com/"
status-checked: 2026-11-13
project-status: active
---
# Airtable

> [!success] Status check 2026-11-13 — active
> **Verdict:** Airtable shipped its Fall Release on 2026-10-21 (Omni 2.0, Canvas beta, expanded MCP, agent audit logs).
> **Latest release:** Fall Release announced on 2026-10-21: Omni 2.0 on all plans, Airtable Canvas in open beta, an expanded MCP server (Claude… · **last dated update:** 2026-10-21 · **licence:** proprietary SaaS; billed per editor: Free, Team \$20/seat/mo and Business \$45/seat/mo (billed annually)…
> **Source:** https://community.airtable.com/announcements-6
> **Changed since this note:** Ownership changed: Bending Spoons bought Airtable (closed 2026-09-04). In October 2026 it let go a large part of the pre-acquisition team and published a 'Back to bases' plan: monthly core fixes, higher record limits, EU data residency and admin controls over what people and agents can do.

It is an excel on steroids. No-code database.

## 🔗 Links
### Description
[What is Airtable & Why Should You Use It? | Airtable Guides](https://www.airtable.com/guides/start/what-is-airtable)
### Download or use
[Airtable](https://airtable.com/)
## 🗒️ Reasoning for
It can be used as a database for your no-code project. Very nice database for your automation. I use it whenever I need to gather some data in structured way and I want to use it in some other tools. It's in many cases the heart of my automation processes.

## 🧩 Current Use
Aktualnie Airtable służy mi głównie jako structured data store:
- **Research database** — zbieranie i organizacja materiałów, linków, notatek z researchu
- **Content inventory** — tracking contentu, pomysłów na artykuły, statusy publikacji
- **Profiles & inspiration** — baza profili, wzorców, inspiracji do projektów

Nie jest już sercem automatyzacji — tę rolę przejął kod + AI agenci. Airtable pozostaje świetny jako flexible database z UI.

## 🔄 Airtable vs Excel — kiedy migrować

### Dlaczego Excel przestaje wystarczać:
- **Versioning chaos** — `Projekty_v2_final_NAPRAWDE_OSTATECZNY.xlsx`, nikt nie wie która wersja aktualna
- **Relacje między danymi** — VLOOKUP-y łamią się przy zmianach struktury, ręczne kopiowanie danych
- **Real-time collaboration** — Excel Online/Google Sheets to wciąż nie prawdziwa współpraca (brak kontroli uprawnień, historii zmian, elastycznych widoków)
- **Wizualizacja** — Kanban, kalendarz, galeria w Excelu = makra lub osobny dashboard

### Relational DB concepts w Airtable:
- **Linked records** — połączenia między tabelami (np. Artykuły ↔ Autorzy ↔ Kampanie) jednym kliknięciem, bez VLOOKUP
- **Field types** — email, URL, telefon, attachment, checkbox, rating — dane z integralnością typów
- **Widoki** — Grid, Calendar, Kanban, Gallery, Form — te same dane, różne perspektywy per rola

### Gdzie Excel wciąż wygrywa:
- Zaawansowane obliczenia finansowe i statystyczne
- Indywidualna analiza danych, jednorazowe raporty
- Tabele przestawne (pivot tables)
- Praca offline bez internetu

### 5-step migration process:
1. **Prepare** — nagłówki w 1. wierszu, usuń puste wiersze, rozdziel dane logicznie
2. **Import** — upload `.xlsx`/`.csv` do nowej bazy, Airtable auto-rozpoznaje typy kolumn
3. **Structure** — popraw typy pól, rozdziel na tabele, stwórz relacje (Link to another record), usuń duplikaty
4. **Views** — Calendar dla dat, Kanban dla statusów, Gallery dla projektów, filtered views per zespół
5. **Automations** — powiadomienia Slack, email deadline reminders, auto-zmiana statusu

### Najlepsze use cases na start migracji:
- Content calendars, CRM/baza klientów, project management, listy zadań zespołowych, inwentarz/katalogi produktów

## Alternatives considered
[[Notion]]
[[ClickUp]]
## 📖 Resources
[Airtable Resource Hub: Free eBooks, Webinars & More | Airtable](https://www.airtable.com/lp/resources)

---
Template: [[templates/tool]]