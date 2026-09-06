---
title: "OmniRoute"
date: 2026-09-06
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "gateway", "proxy", "token-optimization", "cost-optimization", "mcp", "self-hosted", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-09-06_diegosouzapwOmniRoute Never stop coding. Free MIT AI gateway.md"
agent-created: true
agent-reviewed: 2026-09-06
summary: "diegosouzapw/OmniRoute — self-hosted MIT AI gateway: one OpenAI-compatible endpoint over 352 providers and 1300+ models, quota-aware auto-fallback across 19 routing strategies, and a 12-engine compression stack (RTK → Caveman) that cuts 15–95% of tokens transparently."
---
# OmniRoute

🗒️ **[diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute)** — a free, self-hosted **AI gateway**: one OpenAI-compatible endpoint (`http://localhost:20128/v1`) fronting **352 providers and ~1,312 chat model IDs**, with quota-aware auto-fallback and a transparent token-compression pipeline. Works with [[Claude Code]], Codex, [[Cursor]], OpenCode, Cline and Copilot. MIT, v3.8.51, Node ≥22.22.2.

🚀 The headline claim: **~1.47B free tokens/month**, computed from a catalog of 444 free-tier entries across 34 recurring pool keys — and, to their credit, published with the methodology, re-audited every two weeks, and explicitly allowed to *go down* when a provider ends a free tier.

## Links
### Description
🧩 What it does:

- **Works with zero credentials** — a fresh install already answers `{"model":"auto"}` by routing to keyless free backends (OpenCode Free, Pollinations, and friends).
- **Combos + 19 routing strategies** — a combo is a chain of models OmniRoute moves across automatically when quota runs out, a provider fails, or cost spikes. Strategies include `priority`, `cost-optimized`, `headroom`, `reset-aware`, `context-relay`, `cache-optimized`, `lkgp` (last-known-good path), `fusion` (model panel + judge) and `pipeline` (chained steps).
- **Zero-config `auto` variants** — `auto`, `auto/coding`, `auto/fast`, `auto/cheap`, `auto/offline`, `auto/smart`, `auto/lkgp`, `auto/chaos` (fault injection for resilience testing). The Auto-Combo engine scores every candidate on 16 live factors.
- **12-engine compression stack** — see below; 15–95% fewer tokens with no client changes.
- **Full CLI, 80+ commands** — `omniroute` (serve), `chat` (TUI), `setup`, `doctor`, plus `omniroute run claude|codex|aider|goose|opencode|qwen|gemini` to launch a CLI through the gateway with credentials injected per process and no config files written.
- **Remote mode** — run OmniRoute on a VPS and drive it from your laptop with the same CLI and scoped `read`/`write`/`admin` tokens; process-spawning routes stay loopback-only.
- **Agent-drivable** — MCP over stdio (`omniroute --mcp`), HTTP (`/api/mcp/stream`, **110 tools**, 33 scopes) and SSE; A2A via `/.well-known/agent.json`; REST, webhooks.
- **Private & local-first** — SQLite on your machine, AES-256-GCM at rest, prompt-injection guard on every LLM route, opt-in credential-masking guardrail, optional OIDC gate for the dashboard.
- **Runs anywhere** — npm global, Docker, source, Nix/devbox, Arch AUR, Electron desktop, Termux on Android, PWA.

### Download or use
```bash
npm install -g omniroute
omniroute
```
Dashboard at `http://localhost:20128`, API at `http://localhost:20128/v1`. Then Dashboard → **Providers** → connect a free provider (Kiro AI, or OpenCode Free with no auth).

Point a coding agent at it in one command:
```bash
omniroute run claude   --model openai/gpt-5.4
omniroute run codex    --model glm/glm-5.2
omniroute configure codex          # or: claude opencode qwen aider goose gemini cline continue kilo
```
Give Claude Code the whole gateway over MCP:
```bash
claude mcp add-server omniroute --type http --url http://localhost:20128/api/mcp/stream
```

## Reasoning for
This is the first gateway I've found that treats **token compression as a first-class routing concern**, not an afterthought — and it ships the two engines I already run separately, [[Caveman]] and [[Headroom]] (as the vendored GCF codec), inside one pipeline. That makes it a direct competitor to hand-assembling the stack from [[Token Optimization for Claude Code]].

Where it earns attention:
- **Quota-aware fallback across free tiers** is the actual pain it solves. Stacking free tiers by hand means dozens of SDKs, dozens of rate limits, and no idea how much headroom is left.
- **`X-OmniRoute-Decision` on every response** names the strategy, provider and latency that served it — routing transparency you can actually debug.
- **`omniroute run <cli>`** avoids the usual mess of rewriting each agent's config file to point at a proxy.

Where I'd be careful:
- Enormous surface for one project (122 domain modules, 169 migrations, 39k test declarations) and a fast release cadence — that's a lot of moving parts between me and the model.
- Heavy affiliate/partner monetisation in the README. Disclosed openly, but it does shape which providers get top billing.
- The stealth layer (`wreq-js` JA3/JA4 TLS fingerprint impersonation) exists to make provider endpoints accept traffic they might otherwise refuse. Know that before pointing it at an account you care about.

## The 12-engine compression stack
Default stacked combo is `RTK → Caveman`, and savings compound: `1 − (1 − 0.80) × (1 − 0.46) = 89.2%` (range 78.4–94.6%).

| # | Engine | What it does |
| --- | --- | --- |
| 1 | Session-Dedup | Drops content repeated across turns (content-addressed) |
| 2 | CCR | Archives large blocks behind retrieve markers, fetched on demand |
| 3 | Lite | Whitespace + image-URL trimming |
| 4 | RTK | Smart tool-result filtering, dedup and truncation (command-aware) |
| 5 | Responses Tool Output | Lossless-first JSON for shell/patch/search/build output |
| 6 | **[[Headroom]]** | Lossless tabular compaction of JSON arrays (~30%) via a vendored GCF codec |
| 7 | Relevance | Extractive sentence scoring against the last user query |
| 8 | **[[Caveman]]** | Rule-based prose compression (~65–75% on output) |
| 9 | Aggressive | Summarization + progressive aging of old turns |
| 10 | LLMLingua-2 | ML semantic pruning via MobileBERT ONNX — code-safe, async |
| 11 | Ultra | Heuristic token pruning with an optional small-model tier |
| 12 | OmniGlyph | Experimental context-as-image encoding (opt-in, most aggressive) |

Code blocks, URLs and structured data are always preserved byte-perfect. One-click presets: Lite ~15% · Standard (Caveman) ~30% · Aggressive ~50% · Ultra ~75% · RTK 60–90% · **Stacked (RTK → Caveman) 78–95%**.

Beyond the engines: **output styles** (terse prose, less code, [[Ponytail]]'s lazy-senior-dev YAGNI ladder, action-first ADHD mode, classical-Chinese terse), an **adaptive context-budget dial** that escalates only the cheapest lossless engines needed to fit the model's window, and per-request control via the `x-omniroute-compression` header. The applied plan echoes back in `X-OmniRoute-Compression`.

## Alternatives considered
- **[[LiteLLM]]** — the mature, boring choice: 100+ APIs in unified OpenAI format with cost tracking and guardrails. No compression stack, no free-tier quota arbitrage, far smaller surface. Better fit for production.
- **OpenRouter** — hosted, not self-hosted; you pay a margin and hand over your traffic, but there's nothing to run or patch.
- **[[Ollama]]** — different axis entirely: local models rather than routing to remote ones. Complementary; OmniRoute ships an Ollama provider card.
- **Rolling your own** — [[Caveman]] + [[Headroom]] + a thin proxy gets most of the token savings with a fraction of the moving parts.

## Resources
- 🔗 Repo: [github.com/diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) · [omniroute.online](https://omniroute.online/) · [npm](https://www.npmjs.com/package/omniroute)
- 🔗 [Auto-Combo engine](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/routing/AUTO-COMBO.md) · [Compression engines](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/compression/COMPRESSION_ENGINES.md) · [Free tiers methodology](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/reference/FREE_TIERS.md)
- 🔗 [Provider reference](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/reference/PROVIDER_REFERENCE.md) · [CLI integrations](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/CLI-INTEGRATIONS.md) · [vs alternatives](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/comparison/OMNIROUTE_VS_ALTERNATIVES.md)
- 📖 Related: [[LiteLLM]] · [[Caveman]] · [[Headroom]] · [[Ponytail]] · [[Token Optimization for Claude Code]] · [[Ollama]] · [[Context Engineering]]

---
Template: [[templates/tool]]
