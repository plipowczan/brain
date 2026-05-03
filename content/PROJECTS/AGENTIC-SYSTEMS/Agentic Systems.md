---
title: "Agentic Systems"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["project", "ai", "agents", "architecture"]
type: basic-note
agent-reviewed: 2026-04-10
agent-created: true
summary: "Multi-agent architecture for two companies — shared skills, separate contexts"
---
# Agentic Systems

## 🗒️ Description
A project to build and maintain replicable AI agent environments across two companies (200IQ Labs and PLSoft). The architecture separates what's shared (skills, tools) from what's private (context per company).

## 🧩 Architecture — 3-layer stack (detailed):

```
┌─────────────────────────────────────┐
│  IDE (Claude Code / Cursor / etc.)  │  ← Interfejs użytkownika
├─────────────────────────────────────┤
│  Skills (SKILL.md + references/)    │  ← Wiedza domenowa (przenośna)
├─────────────────────────────────────┤
│  Context (context/*.md)             │  ← Dane firmowe (unikalne per firma)
├─────────────────────────────────────┤
│  Tools (scripts CLI)                │  ← Integracje z API
└─────────────────────────────────────┘
```

### Layer 1: Skills — portable SKILL.md
- Każdy skill to `SKILL.md` z frontmatter (name, description, triggery) + katalog `references/` z materiałami referencyjnymi
- **Przenośność** — skill CFO działa identycznie w 200IQ Labs i PLSoft, zmienia się tylko context
- **Progressive disclosure** — `references/` ładowane dopiero gdy rozmowa tego wymaga (oszczędność context window)
- **Auto-triggering** — agenty aktywują się automatycznie na podstawie słów kluczowych w zapytaniu (pole `description` w metadanych). Napisz "ile mamy na koncie?" → agent CFO włącza się sam
- Podział: `shared-skills` (Apache 2.0, open-source) vs `private-skills` (proprietary)
- Agenci: CFO (Revolut API, Stripe, inFakt), Tax Advisor, Legal, Business Consultant, Product Manager, LinkedIn Content, Marketing, Coach The Five

### Layer 2: Context — firm-specific *.md with timestamps
- Struktura: `context/company/`, `context/finance/`, `context/clients/`, `context/brand/`
- Każdy plik zawiera nagłówek **"Last updated: YYYY-MM-DD"** — agent widzi czy dane mają tydzień czy trzy miesiące
- Context 200IQ Labs: finanse, zespół, Qamera AI, marka, operacje, klienci
- Context PLSoft: JDG od 2008, szkolenia, newsletter Tech News Weekly (~700 subskrybentów), marka osobista LinkedIn

### Layer 3: Tools — CLI scripts for APIs
- Lekkie skrypty bash/Python pobierające dane na żywo z zewnętrznych systemów
- Przykład: `tools/revolut-balance.sh` — curl do Revolut Business API + jq parsing

## 🔧 Why scripts over MCP
- Definicje narzędzi MCP potrafią zajmować **40 000+ tokenów** context window. Skrypt CLI to kilka linii
- Łatwiejsze debugowanie: `bash -x tools/revolut-balance.sh` i widzisz dokładnie co się dzieje
- Zero zależności — bash i curl są wszędzie
- MCP ma sens dla dużych organizacji z dziesiątkami integracji; dla mojej skali lekkie skrypty wygrywają pragmatyzmem

## 🔄 Sync strategy — Git submodules + hooks + symlinks
- `shared-skills/` — Git submodule z open-source skills
- `private-skills/` — osobne repo
- Symlinki do katalogów IDE: `.claude/skills/`, `.github/copilot/`, `.cursor/skills/`, `.agent/skills/`
- Skrypt `tools/sync-skills.sh` tworzy symlinki do wszystkich IDE targets
- Git hooks (`post-checkout`, `post-merge`) automatycznie uruchamiają sync po aktualizacji submodułów
- Efekt: update skill w jednym miejscu → zmiana propaguje się do [[Claude Code]], [[Cursor]], Copilot i Antigravity jednocześnie

## 📋 6 design principles:
1. **Kontrola wersji jest fundamentem** — bez Git nie ma zaufania. Bez zaufania nie ma autonomii. Bez autonomii agent jest bezużyteczny
2. **Separuj wiedzę od danych** — skills (przenośne) vs context (unikalne per firma). Separation of concerns
3. **Ograniczaj uprawnienia świadomie** — odczyt tak, zapis z kontrolą, autonomia proporcjonalna do poziomu audytu
4. **Buduj na otwartych formatach** — Markdown, YAML, skrypty CLI. Zero vendor lock-in
5. **Progressive disclosure** — nie ładuj wszystkiego na raz. Context window jest ograniczony i drogi
6. **Code-first, no-code gdy trzeba** — agenty jako narzędzie dla ludzi technicznych, no-code alternatywy dla klientów bez zespołu tech

## ⚠️ What needs work:
- **Memory portability** — skills działają w wielu IDE, ale pamięć i stan rozmów są locked per platforma. Claude Code nie wie co powiedziałem w Cursor
- **Context freshness** — nagłówki "Last updated" to minimum. Brak automatycznego ostrzegania gdy dane stare + brak auto-aktualizacji
- **Client onboarding** — wdrożenie nowego klienta to ~4h pracy. Za dużo, potrzeba bardziej zautomatyzowanego procesu
- **CI/CD for skills** — weryfikacja jakości skills jest manualna. Brak automatycznego pipeline testującego czy skill nadal działa po zmianie
- **Sandbox** — potencjał na autonomiczne zadania nocne (analizy, raporty), ale model bezpieczeństwa wymaga dopracowania przed real data

## 🔗 Links
- [[Agentic Coding]]
- [[Context Engineering]]
- [[Qamera AI]] — primary product using this architecture
- [[Paperclip]] — gotowy control plane do company-of-agents (org chart + budgety + governance)
- [[Hermes Agent]] — single self-improving agent z TUI/messaging/cron, kompatybilny z `agentskills.io`
- [[Agent Zero]] / [[Space Agent]] — alternative agentic frameworks (Linux/canvas vs frontend runtime)
- [[Superpowers]] — methodology framework, alternatywa dla custom workflow gates
