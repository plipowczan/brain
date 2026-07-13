---
title: "UX RULER"
date: 2026-05-09
enableToc: true
openToc: true
tags: ["tool", "ai", "ux", "skills", "claude-code", "open-source", "methodology"]
type: tool
source: "_raw/inbox/Guide a product from mission to measurable value for users.md"
agent-created: true
summary: "Open-source UX skill for agents — guides from mission through audience/need to measurable value, records decisions in the repo"
---

# UX RULER

An open-source **UX skill** for AI agents (Claude Code, Codex). Helps you go from an idea or a repo to a **concrete decision, metric, and next step** — instead of jumping straight into features.

Philosophy: every product decision has 4 layers (**Usefulness, Ergonomics, Attractiveness, Identity**) and should be testable via user research, not just the founder's intuition.

## Links

### Description
- [uxruler.com](https://www.uxruler.com/) — landing + documentation
- [GitHub: making-mike/uxruler](https://github.com/making-mike/uxruler) — skill code

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

**Repo-local (committable):**
```bash
cp -R "$TMP_DIR/uxruler-repo/uxruler" .claude/skills/
git add .claude/skills/uxruler
```

**Codex:** `Use $skill-installer to install: https://github.com/making-mike/uxruler/tree/main/uxruler`

## Reasoning for

Use it when:
- You're starting a new product / repo and want to avoid jumping into features without user research
- You have an existing product and want an audit: does every feature have a user, problem, value
- You want **product memory** in the repo — so the next human or agent knows what was decided, what is an assumption, what needs a test

Output: files in the repo — from a minimal stack (`AGENTS.md`, `PRODUCT.md`, `ROADMAP.md`, `README.md`) to a full maturity layer (decision-log, north-star-metric, experiments, tracking-plan).

## Process — 7 stages

1. **Mission** — what change we're creating, for whom, why now
2. **Audience/Market** — segments, channels, alternatives
3. **User** — a concrete person, jobs/pains/gains, context
4. **Need** — which need justifies building/prototype/research
5. **Infrastructure** — what has to work technically for value to be reliable
6. **Product** — flow, prototype, design system
7. **Value** — rollout, onboarding, metrics, feedback

## Alternatives considered

- [[Agent Skills]] — UX RULER **is** an Agent Skill, so this is not an alternative, it's the class
- [[Karpathy Skills]] — different set, doesn't cover product methodology
- [[Superpowers]] — SDLC methodology, but for development not product discovery
- Traditional PRD templates (Notion, Confluence) — without an agent, without consistency checking

## Resources

- Hub: [[AI UX Design Tools]]
- Post-decision UI generator: [[UX Pilot]]
- Design-language guardrails skill: [[Impeccable]]
- Related repo-as-memory pattern: [[Spec-driven SEO and GEO]]
- [[Awesome Agent Skills]] — where to find more skills of this kind
- [[Extending Claude Code — Tools for Its Blind Spots]] — compiled article featuring this tool

---
Template: [[templates/tool]]
