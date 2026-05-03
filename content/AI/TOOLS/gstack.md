---
title: "gstack"
date: 2026-05-03
enableToc: true
openToc: true
tags: ["tool", "ai", "claude-code", "coding-agents", "skills", "workflow", "open-source"]
type: tool
source: "_raw/inbox/garrytangstack Use Garry Tan's exact Claude Code setup 23 opinionated tools that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA.md"
agent-created: true
summary: "Garry Tan's (YC) opinionated Claude Code stack — 23+ skills jako wirtualny zespół (CEO/Designer/EngMgr/QA/SRE), MIT, sprint-driven (Think→Plan→Build→Review→Test→Ship→Reflect)"
---

# gstack

`garrytan/gstack` — **23+ opiniowanych skilli dla [[Claude Code]]** od Garry'ego Tana (CEO Y Combinator). Zamienia Claude Code w wirtualny zespół: CEO który przemyśla problem, eng manager który zamraża architekturę, designer który łapie AI slop, reviewer szukający production bugs, QA otwierający realny browser, security officer (OWASP+STRIDE), release engineer otwierający PR. Wszystko jako slash commands w Markdown, MIT license.

Punkt odniesienia od autora: w 60 dni shippował 600k+ linii production code (35% testów), 10-20k linii dziennie part-time, pisząc na YC pełnoetatowo.

## 🔗 Links

### Description
- Repo: https://github.com/garrytan/gstack
- License: MIT
- Wymagania: [[Claude Code]], Git, Bun ≥1.0, Node.js (Windows)

### Download or use

```bash
# Skopiuj prompt do Claude Code (instaluje globalnie + dopisuje sekcję do CLAUDE.md):
# "Install gstack: run git clone --single-branch --depth 1
#  https://github.com/garrytan/gstack.git ~/.claude/skills/gstack
#  && cd ~/.claude/skills/gstack && ./setup ..."
```

Działa też na Codex / Gemini CLI / Cursor / Factory Droid przez `--host codex|auto|factory`.

## 🗒️ Description

### 🧩 Sprint w 7 krokach (Think → Plan → Build → Review → Test → Ship → Reflect)

Kluczowa myśl: **skille feedują się nawzajem**. `/office-hours` pisze design doc → `/plan-ceo-review` go czyta → `/plan-eng-review` produkuje test plan → `/qa` go odpala → `/review` łapie bugi → `/ship` weryfikuje fix.

| Skill | Rola | Co robi |
|-------|------|--------|
| `/office-hours` | YC Office Hours | 6 wymuszających pytań przed kodem; pushback na framing, alternatywy, design doc dla downstream |
| `/plan-ceo-review` | CEO/Founder | Znajdź 10-star produkt w ramach requestu; 4 tryby (Expansion/Selective/Hold/Reduction) |
| `/plan-eng-review` | Eng Manager | Architektura, data flow, ASCII diagramy, edge cases, test matrix |
| `/plan-design-review` | Senior Designer | Ocena per design dimension 0-10; AI Slop detection; AskUserQuestion per choice |
| `/design-consultation` | Design Partner | Pełen design system from scratch (research + creative risks + mockups) |
| `/design-shotgun` | Design Explorer | Wiele wariantów, comparison board w browserze, taste memory |
| `/design-html` | Design Engineer | Production HTML z Pretext (text reflow, dynamic heights), framework detection |
| `/review` | Staff Engineer | Bugi które przejdą CI a wybuchną na proda; auto-fix + completeness gaps |
| `/investigate` | Debugger | Iron Law: no fixes without investigation; 3-fail stop rule |
| `/cso` | Chief Security Officer | OWASP Top 10 + STRIDE; 17 false-positive exclusions, 8/10+ confidence gate |
| `/qa` | QA Lead | Realny browser, klika flow'y, fixuje, regression test per fix |
| `/ship` | Release Engineer | Sync main + tests + coverage audit + push + PR; bootstrap test framework jak brak |
| `/land-and-deploy` | Release Engineer | Merge → wait CI → deploy → verify production health |
| `/canary` | SRE | Post-deploy monitoring (console errors, perf, page failures) |
| `/codex` | Second Opinion | Independent review z OpenAI Codex CLI; 3 tryby (review/adversarial/consultation) |
| `/retro` | Eng Manager | Weekly retro per-person; `/retro global` cross-projects + cross-AI (CC/Codex/Gemini) |
| `/learn` | Memory | Cross-session learnings: review/search/prune/export project patterns |

### 🧩 Power tools

`/careful` (warning przed `rm -rf`/`DROP TABLE`/force-push), `/freeze` (lock edits do jednego katalogu), `/guard` (= careful + freeze), `/connect-chrome` (Side Panel extension, watch live), `/setup-deploy`, `/gstack-upgrade`.

### 🧩 Real browser mode

`$B connect` odpala twój Chrome jako headed window kontrolowany przez Playwright — widzisz każdy klik agenta na żywo. Side panel = chat sidebar do bezpośredniego kierowania Claudem. `$B handoff` przy CAPTCHA/MFA: otwórz visible Chrome z cookies, rozwiąż, `$B resume`.

## ✍️ Reasoning for

Dla mnie najmocniejsze: **`/qa` z realnym browserem** + **`/codex` jako cross-model second opinion** + **`/retro global`**. To są dokładnie te miejsca w moim workflow w [[Qamera AI]] / [[PLSoft]], gdzie tracę najwięcej czasu na ręczne sprawdzanie. `/document-release` też brzmi jak coś, czego potrzebuję dla [[Brain]] (auto-update README/CLAUDE.md/CONTRIBUTING).

Ryzyka i ograniczenia:
- 23+ skille = duża powierzchnia do nauczenia. Plan: zacznę od `/office-hours` + `/review` + `/ship` + `/qa`, reszta jak będzie potrzeba.
- Opinionated stack — niektóre rzeczy (Bun-only, Pretext) mogą zderzyć się z istniejącymi konwencjami w repo.
- Dużo nakładania się z [[Superpowers]] (TDD/brainstorm/plan/review) — będę musiał wybrać jedną metodologię, nie obie.

## Alternatives considered

- **[[Superpowers]]** — bardziej methodology-first (TDD, subagent-driven), gstack bardziej rolling-team
- **[[Karpathy Skills]]** — minimalna 1-CLAUDE.md odpowiedź, gstack to maksymalizm w drugą stronę
- **[[Archon]]** — YAML workflow engine + worktree isolation; gstack zostaje w native Claude Code skills
- **[[Awesome Claude Code]]** — kuratorska lista, gstack to gotowy zestaw

## 🔗 Resources

- Wpis Karpathy ("nie wpisałem linijki kodu od grudnia") — No Priors podcast, March 2026
- Peter Steinberger / OpenClaw (247K stars, solo z agentami) jako inspiracja
- Skills deep-dive: https://github.com/garrytan/gstack/blob/main/docs/skills.md
- [[Claude Code]] — primary host
- [[Agent Skills]] — SKILL.md standard
- [[Awesome Claude Code]] — kuratorska lista zasobów
- [[Superpowers]] — alternatywne podejście

---
Template: [[templates/tool]]
