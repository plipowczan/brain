---
title: "Archon"
date: 2026-04-29
enableToc: true
openToc: true
tags: ["tool", "ai", "coding-agents", "harness", "workflow", "open-source"]
type: tool
source: "_raw/inbox/coleam00Archon The first open-source harness builder for AI coding. Make AI coding deterministic and repeatable.md"
agent-created: true
summary: "Open-source harness builder — YAML workflows for AI coding agents (plan/implement/validate/review/PR), deterministic + parallel via worktrees"
---
# Archon

`coleam00/Archon` — workflow engine dla AI coding agentów. Definiujesz proces developmentu jako YAML workflow (plan → implement → validate → review → PR) i odpalasz go deterministycznie przez CLI, Web UI, Slack, Telegram albo GitHub. Analogia z README: *Dockerfile zrobił to dla infrastruktury, GitHub Actions dla CI/CD — Archon robi to dla AI codingu*.

To bezpośrednia odpowiedź na problem opisany w [[Karpathy Skills]] i [[Harness Engineering]]: bez strukturalnej ramy każde uruchomienie LLM-a daje inny wynik. Archon zamraża strukturę (deterministic nodes), zostawia inteligencję w punktach gdzie naprawdę dodaje wartość (AI nodes).

## 🔗 Links

### Description
- Repo: https://github.com/coleam00/Archon
- Docs: https://archon.diy/
- Book of Archon (10-rozdziałowy tutorial): https://archon.diy/book/
- License: MIT

### Download or use

```bash
# Full setup (5 min) — wizard, web UI, skill copy
git clone https://github.com/coleam00/Archon
cd Archon && bun install && claude
# Then say: "Set up Archon"

# Quick install — sam CLI binary (wymaga osobnego Claude Code)
curl -fsSL https://archon.diy/install | bash       # macOS/Linux
irm https://archon.diy/install.ps1 | iex           # Windows PS
brew install coleam00/archon/archon                # Homebrew
```

Workflowy żyją w `.archon/workflows/*.yaml`, commands w `.archon/commands/*.md` — commitowane do repo, cały zespół używa tego samego procesu.

## 🗒️ Description

### 🧩 Co Archon naprawdę robi

Workflow to DAG nodów, gdzie każdy node to albo:
- **Deterministic** — `bash:` (testy, git ops, custom skrypty), nigdy nie odpala AI
- **AI** — `prompt:` z opcjonalnym `loop: until: ...` i `fresh_context: true` (świeża sesja per iteracja)
- **Interactive** — `loop: until: APPROVED` z `interactive: true` (pauzuje na human review)

Każdy run dostaje **własny git worktree** — można odpalić 5 fixów równolegle bez konfliktów. Odpalasz i wracasz po skończonym PR-ze.

### 🧩 Przykładowy workflow

```yaml
# .archon/workflows/build-feature.yaml
nodes:
  - id: plan
    prompt: "Explore the codebase and create an implementation plan"

  - id: implement
    depends_on: [plan]
    loop:
      prompt: "Read the plan. Implement the next task. Run validation."
      until: ALL_TASKS_COMPLETE
      fresh_context: true

  - id: run-tests
    depends_on: [implement]
    bash: "bun run validate"

  - id: review
    depends_on: [run-tests]
    prompt: "Review all changes against the plan. Fix any issues."

  - id: approve
    depends_on: [review]
    loop:
      prompt: "Present the changes for review. Address any feedback."
      until: APPROVED
      interactive: true

  - id: create-pr
    depends_on: [approve]
    prompt: "Push changes and create a pull request"
```

### 🧩 Bundled workflowy (17 sztuk)

| Workflow | Use case |
|----------|----------|
| `archon-assist` | General Q&A, debugging — pełny Claude Code z toolami |
| `archon-fix-github-issue` | Issue → classify → plan → implement → PR → self-fix |
| `archon-idea-to-pr` | Pomysł → plan → implement → 5 równoległych review → self-fix |
| `archon-plan-to-pr` | Wykonaj istniejący plan → implement → PR → review |
| `archon-comprehensive-pr-review` | 5 równoległych reviewerów + auto-fix |
| `archon-resolve-conflicts` | Detect → analyze obu stron → resolve → validate → commit |
| `archon-architect` | Sweep architektoniczny, redukcja złożoności |
| `archon-refactor-safely` | Refactor z type-check hooks i behavior verification |
| `archon-ralph-dag` | PRD implementation loop — przejdź przez stories aż do końca |

`archon workflow list` pokazuje wszystkie. Same-named pliki w twoim repo override'ują bundled defaults.

### 🧩 Architektura

```
Platform Adapters (Web UI, CLI, Telegram, Slack, Discord, GitHub)
                          ↓
                    Orchestrator
                  (routing + context)
            ↙           ↓            ↘
   Command Handler  Workflow Executor  AI Assistant Clients
      (slash)        (YAML DAG)       (Claude / Codex / Pi)
                          ↓
              SQLite / PostgreSQL (7 tabel:
              codebases, conversations, sessions,
              workflow runs, isolation envs, messages, events)
```

Web UI ma osobny dashboard z mission control, drag-and-drop workflow builder, step-by-step execution view i agreguje konwersacje ze **wszystkich platform** w jednym miejscu.

## ✍️ Reasoning for

Z mojej perspektywy to jest dokładnie ta warstwa, której brakuje między [[Claude Code]] a powtarzalnym dev workflow w [[Qamera AI]] i [[PLSoft]]. Dziś każdy issue traktuję jakby był pierwszy — z Archonem mogę raz zdefiniować "tak fixuje issues w tym repo" i potem `Use archon to fix issue #42` daje mi przewidywalny PR.

Trzy rzeczy szczególnie warte przemyślenia:
1. **Worktree isolation** — eliminuje problem "AI agent zepsuł mi branch" (mam to praktycznie co tydzień)
2. **Fire-and-forget przez Telegram/Slack** — odpalam workflow z telefonu, wracam do gotowego PR-a
3. **Fresh context per iteracja w loop nodes** — przeciwieństwo długich sesji Claude Code gdzie kontekst się zatruwa po 30+ tool callach

Słaby punkt: 17 bundled workflowów to dużo abstrakcji do nauczenia. Pewnie zacznę od `archon-fix-github-issue` i `archon-idea-to-pr`, resztę jak będę potrzebował.

## Alternatives considered

- **[[Claude Code]] sam w sobie** — brak strukturalnych gates, brak deterministic nodes, każdy run inny
- **[[Awesome Claude Code]]** — kuratela skilli/promptów, nie engine workflowów
- **GitHub Actions + Claude Code** — działa, ale bez worktree isolation i bez AI loop nodes z fresh context
- **n8n / Zapier** — workflow engines, ale nie zaprojektowane pod git/coding context

## 🔗 Resources

- Author X: https://x.com/coleam00
- Telemetry opt-out: `ARCHON_TELEMETRY_DISABLED=1` lub `DO_NOT_TRACK=1`
- Previous v1 (Python, task management + RAG): branch `archive/v1-task-management-rag`

---
Template: [[templates/tool]]
