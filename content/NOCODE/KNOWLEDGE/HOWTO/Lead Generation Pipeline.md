---
title: "Lead Generation Pipeline"
date: 2025-11-05
enableToc: true
openToc: true
tags: ["knowledge", "howto", "nocode", "lead-generation", "automation"]
type: knowledge-note
agent-created: true
summary: "Automated lead gen system using n8n, Snov.io, Apollo, Airtable — from manual 2-3h/10 leads to automated pipeline"
---

# Lead Generation Pipeline

## 🗒️ Task

Ręczne pozyskiwanie leadów B2B to jeden z najbardziej czasochłonnych procesów:

1. Wyszukiwanie firm w Google — 15-30 min na listę
2. Odwiedzanie stron, szukanie kontaktów — 5-10 min na firmę
3. Weryfikacja adresów email — 2-3 min na kontakt
4. Wprowadzanie do CRM — 1-2 min na rekord

**Efekt: 2-3 godziny pracy = 10-15 zweryfikowanych leadów**

## 🛠️ Prerequisites

| Narzędzie | Rola |
|-----------|------|
| [[n8n]] | Workflow automation (self-hosted, $0) |
| Snov.io | Email finder & verifier |
| Apollo | Baza firm i kontaktów |
| The Company API | Dane firmowe |
| [[Airtable]] | Centralna baza leadów |

## 📝 Architecture

### 4-Stage Pipeline

1. **Definiowanie kryteriów** — w Airtable tabela "Campaigns": branża, wielkość firmy, lokalizacja, stanowiska decydentów (CEO, CTO, Marketing Director)
2. **Automatyczne wyszukiwanie firm** — n8n trigger na nową kampanię → Apollo Search → The Company API (wzbogacanie) → filtrowanie duplikatów → zapis do Airtable
3. **Pozyskiwanie kontaktów decydentów** — Apollo (profile LinkedIn) → Snov.io (email finder) → Snov.io (weryfikacja) → zapis kontaktów
4. **Wzbogacanie danych** — wielkość firmy, przychody, technologie na stronie, aktywność social media, ostatnie newsy

### DB Structure (Airtable)

- **Campaigns** — definicje kampanii wyszukiwania
- **Companies** — znalezione firmy
- **Contacts** — decydenci w firmach
- **Enrichment** — dodatkowe dane

### n8n Workflows

- **Company Search** — uruchamiany raz dziennie
- **Contact Finder** — ciągły, dla nowych firm
- **Email Verifier** — weryfikacja co 7 dni
- **Data Enrichment** — wzbogacanie danych

## 💰 ROI

### Porównanie wydajności

| Metryka | Ręcznie (8h) | Automatycznie (24h) |
|---------|-------------|---------------------|
| Firmy | 30-40 | 500-1,000 |
| Zweryfikowane kontakty | 60-80 | 1,500-3,000 |
| Koszt | 8h × stawka godzinowa | ~$50 (API calls + narzędzia) |

**ROI: 95% redukcja kosztów pozyskania leada**

### Koszty miesięczne

| Narzędzie | Koszt |
|-----------|-------|
| n8n (self-hosted) | $0 |
| Snov.io (1,000 credits) | $39/mo |
| Apollo (Basic) | $49/mo |
| The Company API (1,000 calls) | $29/mo |
| Airtable (Pro) | $20/mo |
| **Razem** | **~$140/mo** |

### Case Study: Agencja marketingowa

**Przed:** 2 osoby full-time na prospecting → ~200 leadów/mies. → koszt $6,000/mo

**Po:** System automatyczny + 1 osoba part-time na weryfikację → ~2,500 leadów/mies. → koszt $1,140/mo

**Oszczędność: $4,860/mo (81%)**

## 📝 Implementation

| Tydzień | Zakres |
|---------|--------|
| 1 | Konfiguracja narzędzi i integracji |
| 2 | Budowa workflow w n8n |
| 3 | Testy i optymalizacja |
| 4 | Szkolenia i launch |

Czas wdrożenia: **3-4 tygodnie**

## 📒 Podsumowanie

- System działa 24/7 bez przerw
- Generuje **10-15x więcej leadów** niż praca ręczna
- Kosztuje **80-90% mniej** niż manual process
- Dostarcza wyższą jakość danych dzięki automatycznej weryfikacji
- Stack no-code — nie wymaga programowania, ale wymaga zrozumienia API i workflow design
- Alternatywa do n8n: [[Make]] (płatny, ale łatwiejszy setup)

## 🔗 Zasoby

- [Snov.io](https://snov.io/) — email finder & verifier
- [Apollo.io](https://www.apollo.io/) — sales intelligence platform
- [The Company API](https://thecompaniesapi.com/) — company data enrichment
