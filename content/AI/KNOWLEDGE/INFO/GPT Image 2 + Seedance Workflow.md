---
title: "GPT Image 2 + Seedance 2 Workflow"
date: 2026-05-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "video", "image-generation", "workflow", "ads"]
type: knowledge-note
source: "_raw/inbox/Post  LinkedIn.md"
agent-created: true
summary: "Storyboard-driven AI video ad workflow: GPT Image 2 generuje frame-by-frame storyboard, Seedance 2 zamienia każdy frame w klip"
---

# GPT Image 2 + Seedance 2 Workflow

## 🗒️ Description

Workflow do **video ad generation** opisany przez Raphaela Guilhema na LinkedIn. Łączy dwa modele w pipeline gdzie storyboard z modelu image jest **promptem dla modelu video** — eliminuje guessing i waste credits.

Kluczowy insight: nie chodzi o "użyj AI", tylko o **sekwencjonowanie modeli**. GPT Image 2 dla intencji wizualnej (storyboard jako jeden grid image — jak old nanobanana), Seedance 2 dla ruchu z zachowaniem ciągłości między klatkami.

## 🔗 Links

- [Original LinkedIn post — Raphael Guilhem](https://www.linkedin.com/feed/update/urn:li:activity:7458080362468958208/)
- [[Awesome Nano Banana Pro Prompts]] — pokrewny prompt library dla Nano Banana Pro (Google), kolekcja YouMind ma też GPT Image 2 collection

## 🧩 Pipeline (3 kroki)

1. **Brief + packshot** — dajesz workflow creative brief i product image
2. **GPT Image 2 → storyboard** — generuje frame-by-frame jako jeden image grid; review przed wydaniem credits na video
3. **Seedance 2 → video** — storyboard jako prompt, każdy frame staje się klipem; model wie dokładnie co chcesz bo zaprojektowałeś to z precyzją

Output: video ad gdzie **każda klatka jest intencjonalna**. No guessing, no credit waste, no "let's try again".

## 🧩 Dlaczego działa

- **Temporal consistency** — Seedance 2 utrzymuje detail produktu między cuts (poprzednie tools gubiły fasety jubilerskie między klatkami)
- **Spatial structure preservation** — pipeline zachowuje strukturę z reference frame w sposób, którego wcześniejsze video tools nie umiały
- **Camera control** — respektuje camera path intention (smooth dolly, consistent horizon), co było bolączką AI video
- **Ekonomia rewizji** — w tradycyjnym shoot revision = re-shoot. Tu revision = update promptu

## 🧩 Use cases (z komentarzy)

- **Luxury / jewelry commercials** — temporal consistency wystarczająca dla brand
- **Architectural flythrough (AEC)** — Sketchup → stakeholder-ready video w pół dnia (zamiast tygodnia z visualization specialist)
- **Product photography z animacją** — zamiast statycznego packshota

⚠️ Otwarte pytanie: interior vs exterior — lighting control w pomieszczeniach nadal trudny dla AI video (większość tools ma problem przy professional architectural).

## 📖 Further reading

- [[Awesome Nano Banana Pro Prompts]] — biblioteka promptów dla Google Nano Banana Pro (alternatywny image model)
- [[Agentic Systems]] — szerszy kontekst pipeline'ów multi-model

---
Template: [[templates/knowledge_note_info]]
