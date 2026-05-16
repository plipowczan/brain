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

Curated kolekcja 1000+ [[Agent Skills]] od oficjalnych zespołów developerskich (Anthropic, Google, Vercel, Stripe, Cloudflare, Netlify, Trail of Bits, Sentry, Expo, Hugging Face, Figma, MongoDB, Notion, Resend, Apollo, Auth0, Browserbase, Datadog, Firebase, Flutter, Coinbase, Binance...) plus skills społecznościowe — w odróżnieniu od "AI-slop" repo z masowo generowanymi skillami.

## Links
### Description
Maintained przez [VoltAgent](https://github.com/VoltAgent/voltagent). Każdy wpis to skill realnie używany przez engineering teams, nie syntetyczny boilerplate. Cross-platform: ten sam skill działa w **Claude Code**, **Codex**, **Antigravity**, **Gemini CLI**, **Cursor**, **GitHub Copilot**, **OpenCode**, **Windsurf**.

### Download or use
- [GitHub: VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)
- [officialskills.sh](https://officialskills.sh/) — przeglądarka skillów

## 🗒️ Reasoning for

Ekosystem Agent Skills eksplodował w 2026 — każdy większy SaaS i framework wypuszcza własne skille. Bez kuratorskiej listy łatwo utopić się w GitHub search albo zainstalować coś niskiej jakości.

Workflow:
1. Otwórz odpowiednią sekcję (Official by [vendor] / domain / community)
2. Wybierz 2-3 skille pasujące do bieżącego projektu
3. Skopiuj do właściwej ścieżki dla Twojego harness (patrz tabela ścieżek poniżej)
4. Zweryfikuj zgodnie z Quality Standards przed użyciem produkcyjnym

Komplementarne do [[Awesome Claude Code]] — to drugie jest *Claude-Code-only* i obejmuje też workflows/hooks/slash commands/CLAUDE.md; Awesome Agent Skills jest *cross-platform* i skupia się tylko na skillach. Większe end-to-end systemy cross-harness żyją osobno — patrz [[Everything Claude Code]] (60 agents/230 skills/hooks) i [[Open Design]] (31 design skills + 16 CLI auto-detect).

## 🧩 Notable categories

### Official skills by vendors
- **Anthropic** — docx, pptx, xlsx, pdf, frontend-design, mcp-builder, theme-factory, skill-creator, brand-guidelines, internal-comms (większość już zainstalowana w tym vault)
- **Google Gemini / Google Labs / Google Workspace CLI** — Gemini API dev, Vertex AI, Stitch, Workspace
- **Vercel** — patrz [[Vercel Skills]] — AI SDK, Next.js, Vercel CLI, Functions, Storage, Deployments, etc.
- **Stripe / Cloudflare / Netlify / Firebase / Auth0 / MongoDB / DuckDB / Notion / Resend / Apollo GraphQL / Sentry / Datadog Labs**
- **Trail of Bits** — security skills (CodeQL, Semgrep)
- **Microsoft / OpenAI / Hugging Face / Figma / Browserbase / CodeRabbit / Coinbase / Binance / Flutter / WordPress**

### Context Engineering (muratcankoylan kit)
8 skillów pokrywających pełen [[Context Engineering]] — context-fundamentals, context-degradation (lost-in-middle, poisoning, distraction, clash), context-compression, context-optimization, multi-agent-patterns, memory-systems, tool-design, evaluation. Łączy się z [[Progressive Disclosure]] i [[Token Optimization for Claude Code]].

### Evals (hamelsmu)
eval-audit, error-analysis, generate-synthetic-data, write-judge-prompt, validate-evaluator, evaluate-rag, build-review-interface — pipeline do [[Skills 2.0 Testing]] i ogólnie LLM evals.

### Specialized domains
- **Apple HIG** (raintree-technology) — 14 skillów dla iOS/macOS/visionOS/watchOS/tvOS
- **mattpocock/skills** — 17 dev workflow skills (PRD, TDD, refactoring plans, git guardrails)
- **mukul975/Anthropic-Cybersecurity-Skills** — 753 skille cybersec mapowane na MITRE ATT&CK
- **n8n automation** (czlonkowski) — 7 skillów do n8n Code/Expression/MCP/Validation
- **playwright-skill** (testdino-hq) — 70+ patternów E2E
- **rails-conventions, swift-server, threejs, video-db, materials-simulation, color-expert, kicad-happy** — niszowe ale głębokie

### Compound / improvement loops
- **NeoLabHQ context-engineering-kit** — code-review, reflexion, sdd, ddd, sadd, kaizen
- **skill-optimizer** (hqhq1025) — diagnoza i optymalizacja własnych SKILL.md na bazie sesji + research static analysis
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

Ten sam SKILL.md działa we wszystkich harnesach — przekleja się tylko ścieżka. Standardyzacja skillów obniża lock-in na konkretny harness.

## 🛡️ Quality Standards

VoltAgent egzekwuje 4 zasady akceptacji skilla — warto je stosować do własnych skillów ([[Skills 2.0 Testing]]):

| Obszar | Wymóg |
|--------|-------|
| **Description** | Trzecia osoba. *Co* robi skill i *kiedy* go używać. Konkretne keywords (nie "database stuff" tylko "PostgreSQL migration"). |
| **Progressive disclosure** | Top-level metadata <100 tokenów. Body <500 linii. Duże resources ładuj on-demand, nie inline. |
| **No absolute paths** | Bez `/Users/alice/`. Zmienne `$HOME`, `$PROJECT_ROOT` lub względne ścieżki. |
| **Scoped tools** | Tylko narzędzia, których skill rzeczywiście potrzebuje. Nigdy `"tools": ["*"]`. |

To uzupełnienie zasady [[Progressive Disclosure]] — short metadata + lazy loading.

## 🔒 Security Notice

Skille są **kuratorowane, nie audytowane**. Mogą zawierać prompt injections, tool poisoning, hidden payloads. Zawsze review przed instalacją. Polecane:
- Snyk Agent Scan
- Agent Trust Hub (Gen Digital)

Patrz też [[AI Agent Security]] — szerszy kontekst zagrożeń autonomicznych agentów.

## Alternatives considered
- [[Awesome Claude Code]] — Claude-Code-only, szerszy zakres (skills + workflows + hooks + slash commands)
- officialskills.sh — przeglądarka tej samej kolekcji w UI
- Bezpośredni search po GitHub — czasochłonny, brak filtrów jakości
- Marketplace pluginów Claude Code — szerszy niż skills, ale węższy harness scope

## 📖 Resources
- [GitHub: VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)
- [[Agent Skills]] — fundamentalny mechanizm
- [[Awesome Claude Code]] — komplementarna lista (Claude-Code-specific)
- [[Vercel Skills]] — oficjalny zestaw od Vercela (część tej kolekcji)
- [[Karpathy Skills]] — pojedynczy CLAUDE.md uniwersalny
- [[Harness Engineering]] — jak konfigurować harness, w którym skille działają
- [[Context Engineering]] — kontekst, w którym skille są ładowane
- [[Progressive Disclosure]] — zasada projektowania skillów
- [[Skills 2.0 Testing]] — testowanie i benchmarkowanie skillów
- [[Claude Code]] — główny harness, z którego korzystam

![[de8e5f2be1862c73ea503ba784efb262_MD5.svg]]

---
Template: [[templates/tool]]
