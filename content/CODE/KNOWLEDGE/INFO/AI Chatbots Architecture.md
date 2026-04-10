---
title: "AI Chatbots Architecture"
date: 2025-11-01
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "chatbots", "rag"]
type: knowledge-note
agent-created: true
summary: "LLM chatbot architecture — RAG, function calling, voicebots via VAPI, implementation costs and metrics"
---

# AI Chatbots Architecture

## 🗒️ Description

Chatboty nowej generacji oparte na LLM (Large Language Models) prowadzą naturalne, kontekstowe rozmowy. Nie są ograniczone do sztywnych scenariuszy — rozumieją intencje, adaptują się do kontekstu i wykonują akcje.

### LLM vs tradycyjne chatboty

| Cecha | Tradycyjne | LLM-based |
|-------|-----------|-----------|
| Logika | Sztywne decision trees | Naturalne zrozumienie języka |
| Zapytania | Rozpoznawanie słów kluczowych | Kontekstowe odpowiedzi |
| Pamięć | Brak | Pamięć konwersacji |
| Akcje | Ograniczone | Function calling (booking, search) |
| Elastyczność | Tylko przewidziane scenariusze | Obsługa nieoczekiwanych zapytań |

## 🧩 RAG Pipeline

RAG (Retrieval Augmented Generation) — zamiast trenować model na swoich danych, podajemy mu kontekst w runtime.

### Pipeline krok po kroku

1. **Chunking** — podział dokumentów na fragmenty 500-1000 tokenów
2. **Embedding** — wektoryzacja chunków (OpenAI ada-002)
3. **Vector DB** — zapis do bazy wektorowej (Qdrant)
4. **Semantic search** — przy zapytaniu: wyszukanie top N relevantnych chunków
5. **LLM context** — podanie chunków jako kontekst dla modelu

### Zalety RAG nad fine-tuningiem

- Aktualizacja wiedzy bez kosztownego retreningu
- Niższe koszty operacyjne
- Kontrola nad źródłami odpowiedzi (traceability)
- Możliwość wskazania skąd pochodzi informacja

### Źródła bazy wiedzy

- FAQ, dokumentacja produktu
- Artykuły blogowe, polityki firmy
- Dowolne dokumenty tekstowe

## ⚡ Function Calling

Chatbot może wykonywać akcje w zewnętrznych systemach:

```json
{
  "name": "book_meeting",
  "parameters": {
    "date": "2025-11-20",
    "time": "14:00",
    "email": "user@example.com"
  }
}
```

Flow: [[n8n]] wykrywa function call → integracja z Calendly/Google Calendar → confirmation dla użytkownika.

Typowe akcje:
- Rezerwacja spotkań
- Wyszukiwanie w bazie produktów
- Kwalifikacja leadów
- Transfer do konsultanta (graceful degradation)

## 🏗️ Architektura systemu

Backend workflow w [[n8n]]:

1. Webhook receive message
2. Load conversation context
3. Search knowledge base (RAG)
4. Call LLM (OpenAI GPT-4 / Claude 3.5 Sonnet)
5. Execute actions if needed (function calling)
6. Store conversation history
7. Return response

### Modele LLM

| Model | Zaleta | Koszt |
|-------|--------|-------|
| OpenAI GPT-4 | Najlepsza jakość odpowiedzi, function calling | ~$0.01/1k tokens |
| Claude 3.5 Sonnet | Świetna analiza, 200k context window | ~$0.003/1k tokens |

## 🎙️ Voicebots

[[VAPI]] — platforma do voice AI:

- Real-time voice conversations
- Integracja z telefonią (infolinia)
- Transfer do człowieka
- Recording & transcription

**Use cases:**
- Automatyczna infolinia 24/7
- Kwalifikacja leadów przez telefon
- Appointment booking
- Customer support

## 💰 Costs

### Setup (jednorazowo)

- Przygotowanie bazy wiedzy: 1-2 tygodnie
- Konfiguracja workflow: 1 tydzień
- Testing: 1 tydzień
- **Razem: 3-4 tygodnie**

### Miesięczne koszty operacyjne (1000 rozmów)

| Składnik | Koszt |
|----------|-------|
| n8n (self-hosted) | $0-20 |
| OpenAI API | $30-50 |
| Qdrant Cloud | $25 |
| VAPI (voicebot, opcjonalnie) | $99 |
| **Razem** | **$150-200/mo** |

vs. 1 pracownik customer support: **$2500-3500/mo**

## 📊 Case Study — automation.house

**Problem:** Strona z wieloma ofertami (Note Taker, Lead Generator, etc.) — użytkownicy mieli trudności z wyborem.

**Rozwiązanie:** Context-based chatbot:
- Zadaje pytania o potrzeby klienta
- Rozumie kontekst biznesowy
- Rekomenduje odpowiednie rozwiązania
- Umawia konsultacje

**Stack:** [[n8n]] + OpenAI GPT-4o + Qdrant + Airtable

**Wyniki:**
- **40% wzrost engagement**
- **25% więcej umówionych konsultacji**
- 80% użytkowników kończy rozmowę z konkretną akcją

## Best Practices

1. **Jasny cel konwersacji** — bot musi wiedzieć co ma osiągnąć
2. **Graceful degradation** — transfer do człowieka gdy bot nie wie
3. **Krótkie odpowiedzi** — nie generuj esejów
4. **Personality** — charakter zgodny z brandem
5. **Testing** — testuj z prawdziwymi użytkownikami

## 📒 Podsumowanie

Context-based chatboty to przyszłość customer experience:
- Dostępność 24/7 z konsystentną jakością
- Skalowalność przy niskim koszcie operacyjnym ($150-200/mo vs $2500-3500/mo za pracownika)
- RAG zapewnia aktualną wiedzę bez retreningu modelu
- Function calling umożliwia realne akcje (booking, search)
- [[VAPI]] rozszerza chatboty o kanał głosowy

## 🔗 Zasoby

- [Qdrant](https://qdrant.tech/) — vector database for semantic search
- [OpenAI Embeddings](https://platform.openai.com/docs/guides/embeddings) — embedding API
- [[VAPI]] — voice AI platform
- [[n8n]] — workflow automation
- [[Agentic Systems]] — szersza perspektywa agentowych systemów AI

---
Template: [[templates/knowledge_note_info]]
