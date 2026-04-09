---
title: "Nucleify"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "framework", "laravel", "nuxt", "fullstack", "modular"]
type: tool
source: "_raw/inbox/Modular Web Framework for Laravel & Nuxt.md"
agent-created: true
summary: "Modular full-stack framework for Laravel 11 + Nuxt 3 — 40+ production modules, Atomic Design, override system"
---

# Nucleify

Modularny full-stack framework łączący **Laravel 11** (backend) + **Nuxt 3** (frontend). Eliminuje chaos web developmentu — jedna komenda do startu, 40+ gotowych modułów, zero nadmiarowej konfiguracji. MVP w < 5 minut. PageSpeed 94+.

## Links
### Description
[nucleify.io](https://nucleify.io/pl/docs/getting-started/introduction)
### Download or use
```bash
make  # Setup jedną komendą
```

## Reasoning for
Rapid prototyping i budowa full-stack aplikacji webowych z modular architecture. Każda funkcjonalność jako samodzielny, niezależnie testowalny moduł — koniec z monolitem i tangled dependencies.

### Stack
| Warstwa | Technologie |
|---------|------------|
| Backend | Laravel 11, PHP 8.2+, Sanctum, Pest |
| Frontend | Nuxt 3, Vue 3, TypeScript, Pinia, PrimeVue 4 |
| Styling | SCSS, GSAP, Chart.js |
| DevOps | Docker, Vite, Husky, Biome |

### Kluczowe cechy
- **40+ production modules** — Auth, pliki, wykresy, datatables, animacje, nawigacja
- **Atomic Design** — 100+ komponentów z prefiksem `ad-` (Boson → Atom → Molecule → Organism)
- **Feature-Sliced Design** — cały related code w jednym katalogu modułu (backend, frontend, DB, testy)
- **Override system** (`nuc_overrides`) — customize bez forkowania, zachowując upgrade path
- **Full typing** — TypeScript + PHP type hints
- **Test coverage** 92% (Pest + Vitest)

### Moduły
| Kategoria | Przykłady |
|-----------|-----------|
| Core | `nuc_modules`, `nuc_api`, `nuc_stores`, `nuc_globals` |
| Auth | `nuc_auth`, `nuc_friendship`, `nuc_activity` |
| Data | `nuc_entities`, `nuc_files`, `nuc_database`, `nuc_fields` |
| UI | `nuc_charts`, `nuc_datatable`, `nuc_dialog`, `nuc_navigation` |

## Alternatives considered
- Laravel + Inertia.js
- Next.js + tRPC
- Custom monolithic setup

## Resources
- [Dokumentacja Nucleify](https://nucleify.io/pl/docs/getting-started/introduction)
- Autor: Szymon Radomski (SzymCode)

---
Template: [[templates/tool]]
