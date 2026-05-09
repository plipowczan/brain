---
title: "UX RULER"
date: 2026-05-09
enableToc: true
openToc: true
tags: ["tool", "ai", "ux", "skills", "claude-code", "open-source", "methodology"]
type: tool
source: "_raw/inbox/Guide a product from mission to measurable value for users.md"
agent-created: true
summary: "Open-source UX skill dla agentów — prowadzi od misji przez audience/need do mierzalnej wartości, zapisuje decyzje w repo"
---

# UX RULER

Open-source **UX skill** dla agentów AI (Claude Code, Codex). Pomaga przejść od pomysłu lub repo do **konkretnej decyzji, metryki i kolejnego kroku** — zamiast skakać od razu w features.

Filozofia: każda decyzja produktowa ma 4 warstwy (**Usefulness, Ergonomics, Attractiveness, Identity**) i powinna być sprawdzalna przez user research, nie tylko intuicję founder'a.

## Links

### Description
- [uxruler.com](https://www.uxruler.com/) — landing + dokumentacja
- [GitHub: making-mike/uxruler](https://github.com/making-mike/uxruler) — kod skilla

### Download or use

**Claude Code (personal skill):**
```bash
REPO="https://github.com/making-mike/uxruler.git"
TMP_DIR="$(mktemp -d)"
git clone --depth 1 "$REPO" "$TMP_DIR/uxruler-repo"
mkdir -p ~/.claude/skills
rm -rf ~/.claude/skills/uxruler
cp -R "$TMP_DIR/uxruler-repo/uxruler" ~/.claude/skills/
# restart Claude Code
```

**Repo-local (commitowalne):**
```bash
cp -R "$TMP_DIR/uxruler-repo/uxruler" .claude/skills/
git add .claude/skills/uxruler
```

**Codex:** `Use $skill-installer to install: https://github.com/making-mike/uxruler/tree/main/uxruler`

## Reasoning for

Używać gdy:
- Startujesz nowy produkt / repo i chcesz uniknąć skakania w features bez user research
- Masz istniejący produkt i chcesz audyt: czy każdy feature ma user, problem, value
- Chcesz **product memory** w repo — żeby następny człowiek lub agent wiedział co zostało zdecydowane, co jest assumption, co wymaga testu

Output: pliki w repo — od minimalnego stacka (`AGENTS.md`, `PRODUCT.md`, `ROADMAP.md`, `README.md`) po pełną maturity layer (decision-log, north-star-metric, experiments, tracking-plan).

## Process — 7 etapów

1. **Mission** — jaką zmianę tworzymy, dla kogo, dlaczego teraz
2. **Audience/Market** — segmenty, kanały, alternatywy
3. **User** — concrete person, jobs/pains/gains, kontekst
4. **Need** — która potrzeba uzasadnia building/prototype/research
5. **Infrastructure** — co technicznie musi działać żeby value był reliable
6. **Product** — flow, prototyp, design system
7. **Value** — rollout, onboarding, metrics, feedback

## Alternatives considered

- [[Agent Skills]] — UX RULER **jest** Agent Skill, więc to nie alternatywa, tylko klasa
- [[Karpathy Skills]] — inny zestaw, nie pokrywa product methodology
- [[Superpowers]] — SDLC methodology, ale dla developmentu nie dla product discovery
- Tradycyjne PRD templates (Notion, Confluence) — bez agenta, bez sprawdzania spójności

## Resources

- Hub: [[AI UX Design Tools]]
- Generator UI po decyzjach: [[UX Pilot]]
- Pokrewny pattern repo-as-memory: [[Spec-driven SEO and GEO]]
- [[Awesome Agent Skills]] — gdzie znaleźć więcej skilli tego typu

---
Template: [[templates/tool]]
