---
title: "Agentic Coding"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "coding-agents", "paradigm"]
type: knowledge-note
agent-reviewed: 2026-04-10
agent-created: true
summary: "Paradigm shift: designing agent environments instead of writing code manually"
---

# Agentic Coding

## 🗒️ Description
A development paradigm where the developer's primary role shifts from writing code to designing environments in which AI coding agents operate effectively. Instead of typing code, you create specifications, context files, review loops, and guardrails — then agents do the implementation.

This is not "AI-assisted coding" (Copilot-style completions). It's a fundamentally different workflow where agents are first-class team members that handle the majority of code changes.

## 🧩 Key principles:
- **CTO as architect of agent work** — you design the environment (specs, context, guardrails, review loops), agents write the code
- **Specifications over instructions** — detailed specs produce better agent output than vague requests
- **[[Context Engineering]]** — the quality of what you feed the agent determines the quality of output
- **Review loops** — every agent output gets human review. Trust but verify.
- **Git as source of truth** — all agent work goes through Git. Full transparency and auditability.
- **Skill modularity** — reusable instruction packages ([[Agent Skills]]) that can be shared across projects

## 🔗 How I practice it
- 99% of small code fixes in [[Qamera AI]] are done by agents
- I use [[Claude Code]] as primary environment
- I built a multi-agent architecture for two companies ([[Agentic Systems]])
- The shift: from "developer who writes code" to "architect who designs systems for agents to write code"

## 🎨 AI as "junior developer on steroids"

Kluczowa metafora: AI to nie replacement dla programisty, ale junior developer na sterydach. Przyspiesza pracę 10x, ale wymaga nadzoru doświadczonego inżyniera:
- Agenci potrafią się zapętlić, halucynują nieistniejące biblioteki
- Bez narzuconej struktury generują "spaghetti code"
- Fundamenty inżynierskie niezbędne do oceny poprawności kodu i odkręcania błędów
- Wiedza o architekturze systemów i clean code pozwala kontrolować output

## 💰 Cost analysis — real numbers

Przykład z budowy portfolio (React + Vite + Tailwind):
- ~60M tokenów przepuszczonych przez AI
- Koszt API (Claude Sonnet 4.5): ~**$325 USD**
- Realny koszt z planem PRO+ [[Cursor]]: **$60 USD**
- Oszczędność ~5x vs. surowe API calls

## ✅ Dyscyplina testowa i code review

- **Playwright E2E** dla każdej zmiany — automatyczna weryfikacja, że nowa feature nie rozsypała starej
- **Code review agent** w Cursor — analizuje zmiany przed commitem, wyłapuje błędy logiczne i potencjalne problemy
- Dwa poziomy: automated tests + agent review = polisa ubezpieczeniowa projektu

## 🧩 SPA + SEO insight

Prerendering SPA (React) daje najlepsze z obu światów: błyskawiczny build (Vite) + widoczność dla Google jak klasyczny dokument HTML. Inżynierski trick, którego AI nie wymyśli sam.

## 📖 Further reading
[[Harness Engineering]]
[[Context Engineering]]
[[Claude Code]]

---
Template: [[templates/knowledge_note_info]]
