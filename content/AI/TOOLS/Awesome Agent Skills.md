---
title: "Awesome Agent Skills"
date: 2026-04-30
enableToc: true
openToc: true
tags: ["tool", "ai", "agent-skills", "claude-code", "codex", "gemini-cli", "cursor", "resources", "curated-list"]
type: tool
source: "_raw/inbox/VoltAgentawesome-agent-skills A curated collection of 1000+ agent skills from official dev teams and the community, compatible with Claude Code, Codex, Gemini CLI, Cursor, and more.md"
agent-created: true
summary: "VoltAgent-curated list of 1000+ Agent Skills from official dev teams and community — cross-platform (Claude Code, Codex, Gemini CLI, Cursor, etc.)"
---

# Awesome Agent Skills

A curated collection of 1000+ [[Agent Skills]] from official developer teams (Anthropic, Google, Vercel, Stripe, Cloudflare, Netlify, Trail of Bits, Sentry, Expo, Hugging Face, Figma, MongoDB, Notion, Resend, Apollo, Auth0, Browserbase, Datadog, Firebase, Flutter, Coinbase, Binance...) plus community skills — as opposed to "AI-slop" repos full of bulk-generated skills.

## Links
### Description
Maintained by [VoltAgent](https://github.com/VoltAgent/voltagent). Every entry is a skill actually used by engineering teams, not synthetic boilerplate. Cross-platform: the same skill runs in **Claude Code**, **Codex**, **Antigravity**, **Gemini CLI**, **Cursor**, **GitHub Copilot**, **OpenCode**, **Windsurf**.

### Download or use
- [GitHub: VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)
- [officialskills.sh](https://officialskills.sh/) — skill browser

## 🗒️ Reasoning for

The Agent Skills ecosystem exploded in 2026 — every major SaaS and framework ships its own skills. Without a curated list it's easy to drown in GitHub search or install something low-quality.

Workflow:
1. Open the right section (Official by [vendor] / domain / community)
2. Pick 2-3 skills matching the current project
3. Copy to the right path for your harness (see paths table below)
4. Verify against the Quality Standards before production use

Complementary to [[Awesome Claude Code]] — that one is *Claude-Code-only* and also covers workflows/hooks/slash commands/CLAUDE.md; Awesome Agent Skills is *cross-platform* and focuses on skills only. Larger end-to-end cross-harness systems live separately — see [[Everything Claude Code]] (60 agents/230 skills/hooks) and [[Open Design]] (31 design skills + 16 CLI auto-detect).

## 🧩 Notable categories

### Official skills by vendors
- **Anthropic** — docx, pptx, xlsx, pdf, frontend-design, mcp-builder, theme-factory, skill-creator, brand-guidelines, internal-comms (most already installed in this vault)
- **Google Gemini / Google Labs / Google Workspace CLI** — Gemini API dev, Vertex AI, Stitch, Workspace
- **Vercel** — see [[Vercel Skills]] — AI SDK, Next.js, Vercel CLI, Functions, Storage, Deployments, etc.
- **Stripe / Cloudflare / Netlify / Firebase / Auth0 / MongoDB / DuckDB / Notion / Resend / Apollo GraphQL / Sentry / Datadog Labs**
- **Trail of Bits** — security skills (CodeQL, Semgrep)
- **Microsoft / OpenAI / Hugging Face / Figma / Browserbase / CodeRabbit / Coinbase / Binance / Flutter / WordPress**

### Context Engineering (muratcankoylan kit)
8 skills covering full [[Context Engineering]] — context-fundamentals, context-degradation (lost-in-middle, poisoning, distraction, clash), context-compression, context-optimization, multi-agent-patterns, memory-systems, tool-design, evaluation. Ties into [[Progressive Disclosure]] and [[Token Optimization for Claude Code]].

### Evals (hamelsmu)
eval-audit, error-analysis, generate-synthetic-data, write-judge-prompt, validate-evaluator, evaluate-rag, build-review-interface — a pipeline for [[Skills 2.0 Testing]] and LLM evals in general.

### Specialized domains
- **Apple HIG** (raintree-technology) — 14 skills for iOS/macOS/visionOS/watchOS/tvOS
- **mattpocock/skills** — 17 dev workflow skills (PRD, TDD, refactoring plans, git guardrails)
- **mukul975/Anthropic-Cybersecurity-Skills** — 753 cybersec skills mapped to MITRE ATT&CK
- **n8n automation** (czlonkowski) — 7 skills for n8n Code/Expression/MCP/Validation
- **playwright-skill** (testdino-hq) — 70+ E2E patterns
- **rails-conventions, swift-server, threejs, video-db, materials-simulation, color-expert, kicad-happy** — niche but deep

### Compound / improvement loops
- **NeoLabHQ context-engineering-kit** — code-review, reflexion, sdd, ddd, sadd, kaizen
- **skill-optimizer** (hqhq1025) — diagnose and optimize your own SKILL.md based on sessions + research static analysis
- **agent-skill-bus** (ShunsukeHayashi) — self-improving task orchestration

## 🔗 Skills paths cheat-sheet

| Harness | Project path | Global path |
|---------|--------------|-------------|
| Claude Code | `.claude/skills/` | `~/.claude/skills/` |
| Codex | `.agents/skills/` | `~/.agents/skills/` |
| Cursor | `.cursor/skills/` | `~/.cursor/skills/` |
| Gemini CLI | `.gemini/skills/` | `~/.gemini/skills/` |
| GitHub Copilot | `.github/skills/` | `~/.copilot/skills/` |
| OpenCode | `.opencode/skills/` | `~/.config/opencode/skills/` |
| Windsurf | `.windsurf/skills/` | `~/.codeium/windsurf/skills/` |
| Antigravity | `.agent/skills/` | `~/.gemini/antigravity/skills/` |

The same SKILL.md works across every harness — only the path changes. Standardizing skills reduces lock-in to any specific harness.

## 🛡️ Quality Standards

VoltAgent enforces 4 skill acceptance rules — worth applying to your own skills ([[Skills 2.0 Testing]]):

| Area | Requirement |
|--------|-------|
| **Description** | Third person. *What* the skill does and *when* to use it. Concrete keywords (not "database stuff" but "PostgreSQL migration"). |
| **Progressive disclosure** | Top-level metadata <100 tokens. Body <500 lines. Load large resources on-demand, not inline. |
| **No absolute paths** | No `/Users/alice/`. Use `$HOME`, `$PROJECT_ROOT` variables or relative paths. |
| **Scoped tools** | Only tools the skill actually needs. Never `"tools": ["*"]`. |

This complements [[Progressive Disclosure]] — short metadata + lazy loading.

## 🔒 Security Notice

Skills are **curated, not audited**. They can contain prompt injections, tool poisoning, hidden payloads. Always review before installing. Recommended:
- Snyk Agent Scan
- Agent Trust Hub (Gen Digital)

See also [[AI Agent Security]] — broader context on autonomous agent threats.

## Alternatives considered
- [[Awesome Claude Code]] — Claude-Code-only, broader scope (skills + workflows + hooks + slash commands)
- officialskills.sh — UI browser for the same collection
- Direct GitHub search — time-consuming, no quality filters
- Claude Code plugin marketplace — broader than skills, but narrower harness scope

## 📖 Resources
- [GitHub: VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)
- [[Agent Skills]] — the fundamental mechanism
- [[Awesome Claude Code]] — complementary list (Claude-Code-specific)
- [[Vercel Skills]] — official set from Vercel (part of this collection)
- [[Karpathy Skills]] — a single universal CLAUDE.md
- [[Harness Engineering]] — how to configure the harness in which skills run
- [[Context Engineering]] — the context in which skills are loaded
- [[Progressive Disclosure]] — skill design principle
- [[Skills 2.0 Testing]] — testing and benchmarking skills
- [[Claude Code]] — main harness I use

![[de8e5f2be1862c73ea503ba784efb262_MD5.svg]]

---
Template: [[templates/tool]]
