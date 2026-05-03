---
title: "Karpathy Skills"
date: 2026-04-26
enableToc: true
openToc: true
tags: ["tool", "ai", "claude-code", "coding-agents", "context-engineering"]
type: tool
source: "_raw/inbox/forrestchangandrej-karpathy-skills A single CLAUDE.md file to improve Claude Code behavior, derived from Andrej Karpathy's observations on LLM coding pitfalls.md"
agent-created: true
summary: "Pojedynczy CLAUDE.md adresujący 4 typowe pitfalle LLM-coderów wg Karpathy'ego: assumptions, overengineering, scope creep, weak goals"
---
# Karpathy Skills

`forrestchang/andrej-karpathy-skills` — jeden plik `CLAUDE.md` z 4 zasadami, które bezpośrednio adresują obserwacje [Andreja Karpathy'ego](https://x.com/karpathy/status/2015883857489522876) o tym, gdzie LLM-coderzy się wykładają. Dystrybuowany jako Claude Code plugin albo do appendowania do istniejącego CLAUDE.md.

## 🔗 Links

### Description
- Repo: https://github.com/forrestchang/andrej-karpathy-skills
- Karpathy original tweet: https://x.com/karpathy/status/2015883857489522876
- Cursor wariant: https://github.com/forrestchang/andrej-karpathy-skills/blob/main/CURSOR.md

### Download or use

```bash
# Claude Code plugin (recommended)
/plugin marketplace add forrestchang/andrej-karpathy-skills
/plugin install andrej-karpathy-skills@karpathy-skills

# Per-project (CLAUDE.md)
curl -o CLAUDE.md https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md

# Append to istniejący
echo "" >> CLAUDE.md
curl https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md >> CLAUDE.md
```

## 🗒️ Description

### 🧩 Co robi LLM źle (wg Karpathy)

1. **Wrong assumptions, no clarification** — modele cicho wybierają interpretację, nie pytają, nie ujawniają wątpliwości
2. **Overengineering** — bloated abstractions, 1000 linii zamiast 100, dead code zostaje
3. **Side-effect edits** — zmieniają komentarze i kod, którego nie rozumieją, nawet ortogonalny do zadania
4. **Weak success criteria** — bez kryterium "make it work" wymaga ręcznej walidacji

### 🧩 Cztery zasady

| Principle | Addresses |
|-----------|-----------|
| **Think Before Coding** | Wrong assumptions, hidden confusion, missing tradeoffs |
| **Simplicity First** | Overcomplication, bloated abstractions |
| **Surgical Changes** | Orthogonal edits, touching code you shouldn't |
| **Goal-Driven Execution** | Leverage przez tests-first i verifiable success criteria |

#### 1. Think Before Coding

Stop. State assumptions explicitly. Present multiple interpretations gdy ambiguity. Push back gdy istnieje prostsze rozwiązanie. Stop & ask gdy confused.

#### 2. Simplicity First

- No features beyond what was asked
- No abstractions for single-use code
- No "flexibility" that wasn't requested
- No error handling for impossible scenarios
- 200 lines → 50? Rewrite.

> **Test:** Would a senior engineer say this is overcomplicated? If yes, simplify.

#### 3. Surgical Changes

- Don't "improve" adjacent code/comments/formatting
- Match existing style, even if you'd do it differently
- Notice unrelated dead code → mention, don't delete
- Remove imports/vars/funcs that **YOUR** changes orphaned; nie usuwaj pre-existing dead code

> **Test:** Every changed line should trace directly to the user's request.

#### 4. Goal-Driven Execution

Transformacja imperatywnych zadań w deklaratywne goals z weryfikacją:

| Zamiast... | Użyj... |
|------------|---------|
| "Add validation" | "Write tests for invalid inputs, then make them pass" |
| "Fix the bug" | "Write a test that reproduces it, then make it pass" |
| "Refactor X" | "Ensure tests pass before and after" |

Multi-step plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

> Karpathy: "LLMs are exceptionally good at looping until they meet specific goals... Don't tell it what to do, give it success criteria and watch it go."

### 🧩 Sygnały, że działa

- Mniej niepotrzebnych zmian w diffach (tylko requested)
- Kod jest prosty od razu, nie po refaktorze
- Clarifying questions **przed** implementacją, nie po pomyłkach
- Czyste, minimalne PR-y, bez drive-by refactoring

### 🧩 Tradeoff

Wytyczne biasują w stronę **caution over speed**. Dla trywialnych zadań (typo fix, jednoliniowiec) — odstąp od pełnego rygoru. Cel to ograniczenie kosztownych pomyłek na non-trivial work, nie spowolnienie wszystkiego.

## ✍️ Reasoning for

Z mojej perspektywy to jest dobry baseline CLAUDE.md do podpięcia obok już istniejących project-specific instrukcji. Trzy z czterech zasad pokrywają się z tym, co już robię ręcznie ("don't add features beyond what's asked", "match existing style", "surgical changes"). Czwarta — Goal-Driven — to dokładnie to, czego brakuje większości moich proszków: zamiast "add X", piszę "write test that fails when X is missing, then make it pass". To zmienia LLM z wykonawcy w autonomous worker.

Dla mojego setupu warto rozważyć cherry-pick zasady #4 do mojego głównego `~/.claude/CLAUDE.md`, bo zasady #1–3 częściowo pokrywam już przez [[Context Engineering]] i [[Claude Code Best Practice]]. Strukturalna alternatywa wymuszająca te zasady przez workflow gates — zobacz [[Archon]].

## Alternatives considered

- **CLAUDE.md from scratch** — bardziej tailored, ale większy effort
- **[[Awesome Claude Code]]** — kuratela zasobów, ale to katalog, nie gotowy plik
- **[[Agent Skills]]** — skille są bardziej granularne (load on demand), CLAUDE.md jest always-on

## 🔗 Resources

- Karpathy obserwacje (X): https://x.com/karpathy/status/2015883857489522876
- Multica (powiązany projekt autora): https://github.com/multica-ai/multica
- License: MIT
- [[Superpowers]] — methodology framework wymuszający Karpathy-style discipline przez 7 mandatory skilli
- [[gstack]] — opposite extreme (23+ opinionated role-skille zamiast 1 CLAUDE.md)

---
Template: [[templates/tool]]
