---
title: "Wytyczne do przygotowania pliku CLAUDE.md"
date: 2026-05-24
enableToc: true
openToc: true
tags: ["answer", "claude-code", "claude-md", "context-engineering", "harness-engineering"]
type: answer-note
agent-created: true
summary: "Synteza wytycznych do CLAUDE.md z bazy wiedzy — struktura, reguły Karpathy'ego, anti-patterns"
---

# Wytyczne do przygotowania pliku CLAUDE.md

Synteza z notatek w bazie wiedzy.

## 🎯 Fundamentalna zasada

> **Find the smallest possible set of high-signal tokens that maximize the likelihood of your desired outcome.** ([[Context Engineering]])

CLAUDE.md to **persistent context** wstrzykiwany do system prompt — nie dokumentacja. Każdy token konkuruje o "attention budget" agenta. ([[Harness Engineering]])

## ✅ Reguły strukturalne

1. **Less is more — < 200 linii na plik** ([[Claude Code Best Practice]]). HumanLayer trzyma < 60 linii. ([[Harness Engineering]])
2. **Nie generuj automatycznie** — badanie ETH Zurich na 138 agentfiles pokazało, że LLM-generated CLAUDE.md *pogorszyły* performance przy 20%+ wyższym koszcie. ([[Harness Engineering]])
3. **Unikaj codebase overviews** — agenty same odkrywają strukturę repo przez glob/grep. ([[Harness Engineering]])
4. **Progressive disclosure** — nie upychaj wszystkiego w jednym pliku; przerzucaj specyficzną wiedzę do skills (load-on-demand) zamiast do always-on CLAUDE.md. ([[Karpathy Skills]], [[Context Engineering]])
5. **Multiple CLAUDE.md w monorepach** — jeden per pakiet/obszar. ([[Claude Code Best Practice]])
6. **`<important if="...">` tagi** dla reguł, które Claude łatwo ignoruje. ([[Claude Code Best Practice]])
7. **Nie pisz w CLAUDE.md tego, co można wymusić deterministycznie przez settings.json/hooks** — np. zamiast "NEVER add Co-Authored-By" ustaw `attribution.commit: ""`. ([[Claude Code Best Practice]])

## 🧩 Co MA się znaleźć w CLAUDE.md

Treści, które są **persistent, project-specific i nieodkrywalne z kodu**:
- Konwencje, architektura, workflows, safety rules ([[Context Engineering]])
- 6 przykładów użycia CLI/wrapperów zamiast podpinania ciężkich MCP (case HumanLayer/Linear — oszczędność tysięcy tokenów) ([[Harness Engineering]])
- Reguły bezpieczeństwa i granice działania agenta

## 🎯 4 reguły Karpathy'ego (gotowy moduł do dołączenia)

Rozwiązują 4 typowe upadki LLM-coderów ([[Karpathy Skills]]):

| Reguła | Adresuje |
|--------|----------|
| **Think Before Coding** | Ciche założenia, brak pytań klaryfikujących |
| **Simplicity First** | Overengineering, abstrakcje dla single-use code |
| **Surgical Changes** | Side-effect edits, "improvement" sąsiadującego kodu |
| **Goal-Driven Execution** | Słabe success criteria — zamiast "add X" pisz "write a test that fails when X is missing, then make it pass" |

Można dociągnąć przez:

```bash
curl https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md >> CLAUDE.md
```

## 📐 System prompt: Goldilocks zone

- ❌ **Too prescriptive** — hardcoded if-else, brittle
- ❌ **Too vague** — falsely assumes shared context
- ✅ **Just right** — specific guidance + flexible heuristics
- Distinct sections (XML lub Markdown), proste/bezpośrednie słownictwo
- Zaczynaj minimalnie, dodawaj na podstawie failure modes ([[Context Engineering]])

## ⚠️ Anti-patterns

- ❌ Cramming everything into prompt ([[Context Engineering]])
- ❌ Brittle if-else logic
- ❌ Bloated tool sets / overlapping MCP servers
- ❌ Exhaustive edge cases jako przykłady — wybieraj diverse canonical examples
- ❌ Auto-generowane CLAUDE.md ([[Harness Engineering]])

## 🧪 Sygnały, że działa

Mniej zbędnych zmian w diffach, kod prosty od razu (nie po refaktorze), clarifying questions **przed** implementacją, czyste minimalne PRy. ([[Karpathy Skills]])

## 📖 Źródła z bazy

- [[Context Engineering]] — teoria attention budget i strategii retrieval
- [[Harness Engineering]] — konfiguracja CLAUDE.md + MCP + skills + hooks jako całości
- [[Karpathy Skills]] — gotowy moduł 4 reguł
- [[Claude Code Best Practice]] — 69 tips, sekcja CLAUDE.md
- [[Token Optimization for Claude Code]] — narzędzia oszczędzające kontekst (m.in. Claude Token Efficient — szablon CLAUDE.md wymuszający terseness)
- [[Building Claude Skills Guide]] — kiedy wyrzucać wiedzę z CLAUDE.md do skills

## Luki w bazie

- Brak dedykowanej notatki z konkretnym **szablonem CLAUDE.md** (tylko wskazówki strukturalne). Link do "Writing a good CLAUDE.md" HumanLayer jest tylko w [[Harness Engineering]] jako external resource, nie zingestowany.
- Brak notatki o `<important>` / XML tagach jako osobnym wzorcu.

---
Template: [[templates/basic_notes]]
