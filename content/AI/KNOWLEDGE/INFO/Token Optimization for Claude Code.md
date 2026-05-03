---
title: "Token Optimization for Claude Code"
date: 2026-04-20
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "claude-code", "token-optimization", "cost-optimization", "context-engineering"]
type: knowledge-note
source: "_raw/inbox/🚨 STOP BURNING YOUR TOKENS!.md"
agent-created: true
summary: "Curated list of 10 open-source tools that reduce Claude Code token usage by 40–98% — proxies, context sandboxes, CLAUDE.md templates, code graphs"
---

# Token Optimization for Claude Code

## 🗒️ Description
Krótki katalog narzędzi ograniczających zużycie tokenów w [[Claude Code]] i ogólnie w pracy z LLM-ami. Źródło: LinkedIn post agregujący 10 repo. Warto traktować jako punkt startowy — większość to nie sprawdzone, bardziej eksperymenty od społeczności. Logika wspólna: **mniej kontekstu, więcej wyników** — przez filtrowanie, sandboxing, kompresję lub strukturalne indeksy. Pokrywa się bezpośrednio z [[Context Engineering]] i [[Harness Engineering]].

## 🔗 Links
- Źródło: LinkedIn post (Mohammed Aboelez, 2026-04)

## 🧩 Narzędzia (10)
- **Caveman Claude** — każe Claude'owi odpowiadać "jaskiniowym" stylem, ścina ~75% output tokens bez straty dokładności.
- **RTK (Rust Token Killer)** — Rust proxy filtrujący output terminala, 60–90% redukcja, bez dependencies.
- **Code Review Graph** — Tree-sitter graph, Claude czyta tylko istotne node'y — deklarowana 49× redukcja na dużych monorepos.
- **Context Mode** — sandbox'uje raw output (logi, GitHub) do SQLite zamiast wrzucać do kontekstu; deklarowana 98% redukcja.
- **Claude Token Optimizer** — zbiór setup-promptów; 90% savings na dokumentacji (11K → 1.3K tokens).
- **Token Optimizer** — wykrywa "ghost tokens" (niewidoczne znaki/duplikacje) zjadające kontekst.
- **Token Optimizer MCP** — agresywne cache'owanie i kompresja dla tooli MCP; 95%+ redukcja.
- **Claude Context (Zilliz)** — hybrid vector search MCP, cała baza kodu jako kontekst przy 40% niższym koszcie.
- **Claude Token Efficient** — template `CLAUDE.md` wymuszający terseness, zero zmian w kodzie.
- **Token Savior** — nawigacja po symbolach (AST), nie po plikach; 97% redukcja + persistent memory.

## 🧩 Taksonomia (moja, uporządkowana)
- **Output compression** — Caveman Claude, RTK
- **Context sandboxing** — Context Mode, Token Optimizer MCP
- **Code graph / symbol index** — Code Review Graph, Token Savior, Claude Context
- **Prompt / CLAUDE.md templates** — Claude Token Optimizer, Claude Token Efficient
- **Hygiene** — Token Optimizer (ghost tokens)

## ☘️ Reasoning dla mnie
- Moje [[Agentic Systems]] i [[Qamera AI]] sesje Claude Code regularnie przekraczają 200k context — najbardziej sensowne są **code graph** (Token Savior, Claude Context) + **CLAUDE.md hygiene** (Claude Token Efficient).
- Context Mode (SQLite sandbox) idealnie pasuje do scenariuszy ingest logów i GitHub API — wpina się w [[Context Engineering]] jako kolejna warstwa.
- Warto zweryfikować repo przed instalacją — lista z LinkedIna, nie peer-reviewed.

## 📖 Further reading
- [[Context Engineering]] — framework, do którego te narzędzia się wpinają
- [[Harness Engineering]] — konfiguracja harness, w tym hooks i MCP do kontroli kosztów
- [[Claude Code]] — host platform
- [[Claude Code Best Practice]] — 69 tipów
- [[Agent Skills]] — komplementarny mechanizm redukcji kontekstu (lazy loading skilli)
- [[Graphify]] — własny code-graph approach, 71× redukcja tokenów

---
Template: [[templates/knowledge_note_info]]
