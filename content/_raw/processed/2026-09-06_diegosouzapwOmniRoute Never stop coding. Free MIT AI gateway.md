---
title: "diegosouzapw/OmniRoute: Never stop coding. Free MIT AI gateway: one endpoint, 352 providers (150+ free), 1200+ models Kimi, Claude, GPT, Gemini, GLM, DeepSeek, MiniMax. Works with Claude Code, Codex, Cursor, OpenCode, Cline & Copilot. Quota-aware auto-fallback, RTK+Caveman compression saves 15-95% tokens, MCP/A2A, Desktop/PWA. Built by 550+ contributors"
source: "https://github.com/diegosouzapw/OmniRoute"
author:
published:
created: 2026-09-06
description: "Never stop coding. Free MIT AI gateway: one endpoint, 352 providers (150+ free), 1200+ models Kimi, Claude, GPT, Gemini, GLM, DeepSeek, MiniMax. Works with Claude Code, Codex, Cursor, OpenCode, Cline & Copilot. Quota-aware auto-fallback, RTK+Caveman compression saves 15-95% tokens, MCP/A2A, Desktop/PWA. Built by 550+ contributors - diegosouzapw/OmniRoute"
tags:
  - "clippings"
---
[![[80360b6301cd2763a94ea6c354e3c04d_MD5.png]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/screenshots/MainOmniRoute.png)  
  

## 🚀 OmniRoute — The Free AI Gateway

[![[d30cbcf470404575885c782b580b52b3_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/diagrams/readme-hero.svg)

## 💰 ~1.47B Free Tokens / Month

> Stacking free tiers by hand is painful — dozens of SDKs, dozens of rate limits, and no idea how much you actually have. OmniRoute catalogs **444 free-tier entries across 34 recurring pool keys** and computes the token headline from the **16 pools with a published positive monthly budget plus five per-model Groq caps**, deduplicated by shared pool. Quotas that only open after a regional identity check (today: ModelScope) are shown apart, +~6M behind regional identity verification, and never summed into the headline. The result stays visible on the dashboard (`/dashboard/free-tiers`).

[![[56c7d8b20336d048029fb2767732f38e_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/diagrams/free-tier-budget.svg)

> Animated summary of the live `/dashboard/free-tiers` page. Full methodology (pool dedupe, credit tiers, provider terms): **[docs/reference/FREE\_TIERS.md](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/reference/FREE_TIERS.md)**.
> 
> <sub>These figures are re-audited every two weeks against the live catalog and <strong>move both ways</strong> — a provider ends a free tier and the number drops; a new one lands and it climbs. We publish what the catalog actually computes, never a rounded-up best case.</sub>

### ⭐ Star the repo if OMNIROUTE helped you save money and make your work easier.

[![[0338afb7c2ac910d795d767faff93020_MD5.svg]]](https://trendshift.io/repositories/23589) [![[50b9e8549e24a679e07a60191131946a_MD5.svg]]](https://www.star-history.com/diegosouzapw/omniroute)

### 💬 Join the community

**👋 Follow the maintainer — get new providers, releases & tips first:**

**Questions, provider tips, roadmap & support → [Discord](https://discord.gg/U47eFqAXCn) · [Telegram](https://t.me/omnirouteOficial) · WhatsApp [🌍 Global](https://chat.whatsapp.com/FvuCbrpZmQ6I85n2vW5QIC?s=cl&p=a&mlu=4) / [🇧🇷 Brasil](https://chat.whatsapp.com/KWgatljAjmbELQory59Oti?s=cl&p=a&mlu=4) / [Portal](https://portal.sthub.com.br/communities/groups/st-hub/channels/Omniroute-World-8kRjmK)**

## 📈 The Gateway Keeps Growing

|  | v3.8.49 | **v3.8.50** | `v3.8.51+` |
| --- | --- | --- | --- |
| 🌐 Providers | 290 | **352** | more queued |
| 🧠 Unique chat model IDs | 1185 | **1312** | — |
| 🖼️ Modality Bridge | — | 🆕 vision + audio + video | — |
| 📡 Radar free catalog | — | 🆕 opt-in | — |
| ⚖️ Quota-aware scheduling | — | 🆕 Quota-Share | — |
| 📊 Quota telemetry | — | 🆕 live | — |

**→ [Roadmap](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/ROADMAP.md) — riding the rail to `v3.9.0 LTS`**

## 🧩 Available

| **🚀 Start** | [🚀 Quick Start](#-quick-start) | [📦 Install](#-more-install-methods--docker-source-pnpm-arch) | [🆓 Zero-config](#-works-the-second-you-install-it--no-keys-no-config) |
| --- | --- | --- | --- |
| **💡 Learn** | [💥 The Promise](#-the-promise) | [🤔 Why OmniRoute](#-why-omniroute) | [🏆 What Sets Apart](#-what-sets-omniroute-apart) |
| **⚙️ Features** | [🎯 Combos](#-combos--the-flagship) | [🌐 Providers](#-352-ai-providers--154-catalog-marked-free) | [🔌 CLI & MCP](#-full-cli--a2a--mcp) |
|  | [🗜️ Compression](#%EF%B8%8F-save-1595-tokens--automatically) | [🖥️ Where It Runs](#%EF%B8%8F-where-omniroute-runs--anywhere) | [🔒 Private](#-private--local-first) |
| **👀 See it** | [🎬 In Action](#-omniroute-in-action) | [✨ What's New](#-whats-new) | [🤖 Compatible CLIs](#-compatible-clis--coding-agents) |
| **💚 Support** | [💚 Support / Donate](#-support-omniroute) | [💬 Community](#-community--help) | [💖 Sponsors](#-sponsors) |
| **📦 Project** | [🛠️ Tech Stack](#%EF%B8%8F-tech-stack) | [📖 Docs](#-documentation) | [👥 Contributors](#-600-contributors) |

## 🆓 Works the second you install it — no keys, no config

[![[cbc3ddaefdaca529082d97f4abb1ea0b_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/diagrams/works-zero-config.svg)

```
# Fresh install, zero credentials — \`auto\` already works:
curl http://localhost:20128/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"model":"auto","messages":[{"role":"user","content":"Hello!"}]}'
```

<sub>Prefer a specific free backend? Call <code>oc/…</code> (OpenCode Free) directly. Then graduate to <code>auto</code> and let OmniRoute pick.</sub>

<sub>📦 Copy-paste quickstart scripts for <strong>Python, Node.js, PHP, and cURL</strong> → <a href="https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/examples/quickstart"><code>examples/quickstart/</code></a></sub>

## 💥 The Promise

[![[e983f04e62a6c1f8cfa7fcd3bf31a847_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/diagrams/promise-pillars.svg)

## 🤔 Why OmniRoute?

[![[af900ed11112558ba5176e28d105b256_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/diagrams/why-pain-fix.svg)

[![[59da4d1de3274a1638cc9c4dc39218f6_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/diagrams/tier-cascade.svg)

## 🤝 Supported by our Open Source Friends

[![[8d0e6ca23786abd4ed2cce3441990f5a_MD5.png]]](https://platform.kimi.ai/?track_id=track-8197581fdd7d4139a0f562e4a03c3798&aff=omniroute)

> **Want to join as an Open Source Friend?** These are the companies that back open source and help keep OmniRoute moving — and we say publicly where every token they give us goes. Reach out: [diegosouza.pw@outlook.com](mailto:diegosouza.pw@outlook.com)

| [  ![[b7b6d1ca9ab8ef0c1fc2cf836e0d049f_MD5.svg]]  ](https://platform.kimi.ai/?track_id=track-8197581fdd7d4139a0f562e4a03c3798&aff=omniroute)   **Kimi**   <sub>Moonshot AI</sub> | Thanks to **Kimi (Moonshot AI)**, our founding Open Source Friend, for backing this project! Kimi is the AI lab behind the open-weight K2 and K3 model families — **Kimi K3** delivers a 1M-token context window, native vision and frontier-level coding at a fraction of closed-model prices, and works out of the box with Claude Code, Codex and every coding tool OmniRoute serves.      **What Kimi's support powers:** Kimi's API credits power OmniRoute's AI-validated release pipeline — the *merge validation powered by Kimi K3* stage that reviews every pull request before it ships — plus day-to-day feature development. First-class Kimi support ships on both rails: the direct [Kimi API](https://platform.kimi.ai/?track_id=track-8197581fdd7d4139a0f562e4a03c3798&aff=omniroute) (`kimi-k3`) and the [Kimi Code coding plan](https://www.kimi.com/code?aff=omniroute) (OAuth and API key). OmniRoute is also the first Brazilian open-source project in Kimi's support program. [**Get a Kimi API key with 15% extra credits →**](https://platform.kimi.ai/?track_id=track-8197581fdd7d4139a0f562e4a03c3798&aff=omniroute) |
| --- | --- |
| **Cheaper Inference**   <sub>cheaperinference.com</sub> | Thanks to **Cheaper Inference**, an OmniRoute Open Source Friend, for backing this project! Cheaper Inference is a cost-ranked gateway that resells 42 frontier models — Claude, GPT-5.x, Gemini, Kimi K3, GLM, DeepSeek, Grok and MiniMax — behind one OpenAI-compatible endpoint, routing each request to the cheapest eligible provider without ever charging above the model maker's list price.      **First-class support in OmniRoute:** Chat Completions, the native `/v1/responses` endpoint, vision, tool calling and 3 image models (`grok-imagine`, `nano-banana-pro`, `nano-banana-2`, reachable as `cheaperinference/<model>`). [**Get an API key →**](https://cheaperinference.com/?utm_source=omniroute) |

<sub>Links tagged <code>aff=omniroute</code> are partner links. They fund the project at no extra cost to you.</sub>

<sub><b>🎟️ Affiliates Promo</b> — free signup coupons from providers we don't sponsor (click to expand)</sub>

<sub><i>This section is for referral/coupon codes only. Sponsored partnerships live in <b>🤝 Supported by our Open Source Friends</b> above. OmniRoute has no sponsorship or partnership with the providers listed here — these are public coupons anyone can use.</i></sub>

| <sub><b>AgentRouter</b></sub>   <sub>agentrouter.org</sub> | <sub><b><a href="https://agentrouter.org/register?aff=70LM">AgentRouter</a></b> — affiliate signup · <b>$100 free credits</b> on signup (free server, expect higher latency — best for testing, not production). First-class support in OmniRoute since <b>v3.8.50</b>: Chat Completions, the Anthropic-compatible wire format and the OpenAI-compatible path. Available models include <code>claude-opus-4-8</code>, <code>claude-opus-5</code>, <code>gpt-5.6-sol</code> and more. <b><a href="https://agentrouter.org/register?aff=70LM">Grab your $100 →</a></b></sub>      <sub><p>⚠️</p><i>Affiliate link — OmniRoute has no sponsorship or partnership with this provider.</i></sub> |
| --- | --- |

<sub>Know another provider with a generous free signup coupon that benefits OmniRoute users? Open an issue and we'll add it here.</sub>

## 🎯 Combos — The Flagship

[![[46bfb386656aa618d3748dd32e0ca3e3_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/diagrams/strategies-grid.svg)

> A **combo** is a chain of models OmniRoute routes across **automatically**. If quota runs out, a provider fails, or costs spike, the combo can move to the next eligible healthy model. 🛡️

### ⚡ Zero-config — just use auto

No combo to create. Set your model to `auto` (or a variant) and OmniRoute builds a virtual combo from your connected providers, scored live:

| Model ID | What it optimizes for |
| --- | --- |
| `auto` | 🎯 Balanced default (LKGP — sticks to your last good provider) |
| `auto/coding` | 🧑💻 Quality-first weights for code generation |
| `auto/fast` | ⚡ Lowest latency first |
| `auto/cheap` | 💰 Cheapest per token first |
| `auto/offline` | 🔋 Most quota / rate-limit headroom first |
| `auto/smart` | 🔭 Quality-first + 10% exploration to discover better models |
| `auto/lkgp` | 📌 Explicit last-known-good-provider stickiness |
| `auto/chaos` | 🧪 Fault-injection weights for resilience testing (chaos engineering) |

### 🔀 Or build your own — 19 routing strategies

All **19** strategies — mix & match per combo step:

| # | Strategy | What it does |
| --- | --- | --- |
| 1 | `priority` | First-target ordered list — drain each before the next 🥇 |
| 2 | `fill-first` | Fill each target's quota fully before moving on |
| 3 | `weighted` | Weighted random by per-target weight |
| 4 | `round-robin` | Cycle through targets in order |
| 5 | `p2c` | Power-of-two-choices random load balancing |
| 6 | `least-used` | Pick the target with the lowest current load |
| 7 | `random` | Uniform random pick (deduplicated) |
| 8 | `strict-random` | Random without de-duplicating repeats 🎲 |
| 9 | `cost-optimized` | Minimize $ per request from live catalog pricing 💸 |
| 10 | `headroom` | Pick the target with the most remaining quota |
| 11 | `reset-window` | Prefer the target whose quota window resets soonest |
| 12 | `reset-aware` | Rank by quota reset time — short windows first 📊 |
| 13 | `context-relay` | Hand off context across targets for long conversations 🧠 |
| 14 | `context-optimized` | Pick the best fit for the current context size |
| 15 | `cache-optimized` | Pin each reusable prompt prefix to the same account — maximize prompt-cache hits 🎯 |
| 16 | `lkgp` | Last-Known-Good Path — pins to the last successful provider, then falls back to rules |
| 17 | `auto` | 16-factor live scoring across every connection 🤖 |
| 18 | `fusion` | Fan out to a panel of models + a judge synthesizes one answer 🧬 |
| 19 | `pipeline` | Chain steps — each target's output feeds the next one 🔗 |

<sub>The Auto-Combo engine scores every candidate on <strong>16 factors</strong> (health, quota, cost, latency, task fit, quality, session availability…) — see <a href="https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/routing/AUTO-COMBO.md"><code>docs/routing/AUTO-COMBO.md</code></a>.</sub>

### 🧱 Resilience is built in (3 independent layers)

[![[821587722fd5ca2f3d8392d625a83cef_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/diagrams/resilience-layers.svg)

<sub>📖 <a href="https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/routing/AUTO-COMBO.md">Auto-Combo Engine</a> · <a href="https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/architecture/RESILIENCE_GUIDE.md">Resilience Guide</a></sub>

## 🏆 What Sets OmniRoute Apart

[![[d63ce02fa9c6992efc27a25db7a99f17_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/diagrams/comparison-table.svg)

<sub>📊 Full methodology &amp; per-feature detail vs 9router, OpenRouter, CLIProxyAPI &amp; LiteLLM → <a href="https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/comparison/OMNIROUTE_VS_ALTERNATIVES.md"><code>docs/comparison/OMNIROUTE_VS_ALTERNATIVES.md</code></a></sub>

## 💚 Support OmniRoute

OmniRoute is MIT-licensed and maintained in the open. If it saves you time or money, here's how to keep it independent — pick whatever fits you. Sponsorship never affects routing priority; it buys visibility, not ranking.

| ⭐ **Star the repo** | Free — genuinely helps visibility | [Star OmniRoute](https://github.com/diegosouzapw/OmniRoute) |
| --- | --- | --- |
| 🐙 **GitHub Sponsors** | One-off or monthly · zero platform fee | [github.com/sponsors/diegosouzapw](https://github.com/sponsors/diegosouzapw) |
| ☕ **Ko-fi** | Quick one-off tip, no signup for the donor |  |
| 🧋 **Buy Me a Coffee** | Small, informal gesture |  |
| 🖐 **Liberapay** | Recurring · non-profit · open source |  |
| 🇧🇷 **PIX** (Brazil) | Instant, no fees | key & QR below |
| ₿ **Crypto** | BTC · ETH · USDT-TRC20 · USDC-Solana | addresses below |

**🇧🇷 PIX** — instant, no fees (Brazil)

[![[97e53521a88f64e092ea59500f45effe_MD5.png]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/assets/pix-qr.png)

Key (random): `5d865059-bc44-483a-962d-43ceb80126eb`

Pix copia-e-cola:

```
00020101021126580014br.gov.bcb.pix01365d865059-bc44-483a-962d-43ceb80126eb5204000053039865802BR5922OMNIROUTE CONTRIBUICAO6006BRASIL62070503***630475DD
```

**₿ Crypto** — BTC · ETH · USDT-TRC20 · USDC-Solana (click to expand)

| **₿ BTC** | Bitcoin (SegWit) | `bc1qh00smz004sy85wyl28v77tenkt3ckl6eaep7fd` |
| --- | --- | --- |
| **Ξ ETH** | Ethereum (ERC20) | `0x64Cf6B68A6Ff34288e89172950a2d00102337a84` |
| **₮ USDT** | Tron (TRC20) | `TKAF41JpuQrHbKTnsQa9svJE2T192Hvsc2` |
| **$ USDC** | Solana | `2emNNZzVVWQc3FQ2wk9M6qXUQmW8AKdjjL174fXR28Tu` |

⚠️

Send each coin only on the network shown — sending on the wrong network can lose the funds.

🐛 Found a bug or have feedback? Open a [Discussion](https://github.com/diegosouzapw/OmniRoute/discussions).

**Developer notes:** The project may generate a local `.env` file during npm install/postinstall for developer convenience. This file is intentionally ignored via `.gitignore` (see `.gitignore`) and must never be committed — if accidentally committed, rotate any exposed secrets and remove the file from history. See [docs/DEVELOPER-ENVIRONMENT.md](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/DEVELOPER-ENVIRONMENT.md) for guidance on managing local environment files and secrets.

## 📡 OmniRoute Radar

The main free-tier headline remains **~1.47B tokens/month** from the documented, pool-deduplicated catalog above. Temporary provider signup credits can separately lift the first month to **~2.10B**. Radar is an optional, signed catalog overlay for people who want fresher free-model availability between OmniRoute releases; the community catalog and every existing free feature remain free.

Supporters can receive the live catalog and additional provider opportunities. Its separate, mutable ceiling is **approximately 3B tokens/month at most**, depending on provider availability. That ceiling is not a guarantee: providers can change quotas, eligibility, models, or regions at any time.

Radar is opt-in and GET-only. The OmniRoute client does not upload prompts, traffic, provider configuration, usage telemetry, or local announcement-dismiss state. Learn about eligibility and the current catalog at **[radar.omniroute.online/planos](https://radar.omniroute.online/planos)**.

## ✨ What's New

> Recent highlights from **v3.8.20 → v3.8.50**. Full history in [`CHANGELOG.md`](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/CHANGELOG.md).

- **🎛️ OmniConductor** — inbound A2A delegation to your agent fleet, Conductor skills on the Agent Card, and a dashboard panel with Faro push-to-talk voice chat. → [A2A Server](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/frameworks/A2A-SERVER.md)
- **🛂 Adaptive admission & overload protection** — heavyweight chat requests queue instead of 503ing, with atomic RPM rolling leases per connection. → [Resilience Guide](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/architecture/RESILIENCE_GUIDE.md)
- **🗂️ Canonical `/v1/models` ordering** — one contiguous provider-grouped block per provider (combos pinned first), stable across every catalog source. → [API Reference](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/reference/API_REFERENCE.md)
- **🗜️ Compression hardening** — default-on inflation guard, Caveman packs for DE / FR / JA + Chinese (wényán), RTK filters for Gradle &.NET. → [Compression](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/compression/COMPRESSION_ENGINES.md)
- **💸 Honest flat-rate cost** — subscription / coding-plan providers read **$0** in cost analytics; budget, quota & routing keep estimating. → [API Reference](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/reference/API_REFERENCE.md)
- **⚖️ Quota-Share routing** — split a shared account's quota fairly across pooled keys, work-conserving so idle slices are lent out. → [Resilience Guide](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/architecture/RESILIENCE_GUIDE.md)
- **🤖 One-command CLI/agent setup** — 13 registered `setup-*` commands; `omniroute run` launches 7 CLIs (Claude Code, Codex, Aider, Goose, OpenCode, Qwen Code, Gemini CLI); `omniroute configure` supports 10 targets with an interactive provider+model picker and per-context favorites. → [CLI Integrations](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/CLI-INTEGRATIONS.md)
- **🛰️ Remote mode** — drive a remote OmniRoute with scoped tokens (`connect` / `contexts` / `tokens`) + an `antigravity` OAuth helper for VPS installs. → [Remote Mode](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/REMOTE-MODE.md)
- **🧭 Smarter auto-routing** — `auto/<category>:<tier>` combos, **Fusion** (model panel + judge), task-aware routing, per-request model / mode / USD-budget overrides. → [Auto-Combo](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/routing/AUTO-COMBO.md)
- **🗜️ Pluggable compression** — 12 composable engines + Compression Studios: LLMLingua-2, two-tier Ultra, omniglyph, per-step fidelity gate, GCF v3.2, drag-reorder editor. → [Compression](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/compression/COMPRESSION_ENGINES.md)
- **🕵️ Transparent MITM decrypt (TPROXY)** — capture CLIs that ignore proxy env vars, with a per-SNI CA + trust-store installer. → [MITM/TPROXY](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/security/MITM-TPROXY-DECRYPT.md)
- **💸 Cost telemetry everywhere** — `X-OmniRoute-*` cost/usage headers on every endpoint, cache-HIT savings header, per-key USD spend quotas. → [API Reference](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/reference/API_REFERENCE.md)
- **🧠 Memory you control** — off by default, opt-in int8 vector quantization + typed decay, per-request `x-omniroute-no-memory`. → [Memory](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/frameworks/MEMORY.md)
- **🛡️ Security** — prompt-injection guard on every LLM route (red-team suite), opt-in credential-masking guardrail (redacts leaked API keys/secrets in both directions), free DuckDuckGo last-resort web search, and an optional OIDC login gate for the dashboard (password login always stays available). → [Guardrails](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/security/GUARDRAILS.md)
- **🖼️ New endpoints** — `/v1/ocr` (Mistral OCR) and `/v1/audio/translations` (Whisper-style) round out the media surface. → [API Reference](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/reference/API_REFERENCE.md)
- **🎨 Image / video / audio generation** — one API for media: xAI Grok Imagine & Novita AI video, ComfyUI, Magnific, Adobe Firefly, Segmind, and speech providers such as ElevenLabs. → [API Reference](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/reference/API_REFERENCE.md)
- **🌍 Deployment & ops** — reverse-proxy `basePath`, browser-language auto-detect, per-key device tracking, root-less MITM trust, zh-TW localization. → [Environment](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/reference/ENVIRONMENT.md)
- **🤝 More providers & agents** — cloud agents (Codex Cloud, Cursor, Devin, Jules), Grok Build (xAI) with browser + OAuth login, Ollama first-class card, Claude Opus 5 & Sonnet 5, Kimi official partnership (Code/Web/Moonshot), Zed, Requesty, SenseNova, Yuanbao, Agnes AI… and a refreshed **352-provider catalog**. → [Providers](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/reference/PROVIDER_REFERENCE.md)
- **📡 Routing transparency** — every response carries an `X-OmniRoute-Decision` header naming the strategy/provider/latency that served it, a new `cache-optimized` combo strategy + Auto-Combo `cacheAffinity` factor route repeat requests back to the connection holding the cached prefix, and a read-only `/v1/auto-combo/{channel}/candidates` endpoint exposes an `auto/*` channel's live candidate pool. → [Auto-Combo](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/routing/AUTO-COMBO.md)
- **⚡ Local performance & infra** — one-click local Redis, Cloudflare Workers / Deno Deploy relay deployers, Bifrost & Mux as supervised embedded services. → [Embedded Services](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/frameworks/EMBEDDED-SERVICES.md)
- **🧩 Also in the box** — plugin framework + marketplace, Omni/Agent/GitHub skills frameworks, Obsidian vault integration (22 MCP tools), OpenAI-compatible Batch & Files APIs, semantic response cache, gamification with leaderboards, ACP agent discovery (15 built-in agents), scheduled log export to BigQuery, `auto/chaos` fault injection, a Telegram bot bridge, an in-app version manager and LMArena-ELO free-provider rankings. → [Docs](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/README.md)

## 🤖 Compatible CLIs & Coding Agents

> One config — `http://localhost:20128/v1` — and **every** AI IDE or CLI runs on free & low-cost models.

| [![[ef85aeb899e79211a374aceb1262dae7_MD5.svg]]   <sub><b>Claude Code</b></sub>   ](https://github.com/anthropics/claude-code) | [![[c6a740ee37e26b67b516547941e5fb72_MD5.svg]]   <sub><b>Codex CLI</b></sub>   ](https://github.com/openai/codex) | ![[be8c140695fd6a28ddc065d4688eee2b_MD5.svg]]    <sub><b>Cline</b></sub> | [   <sub><b>Kilo Code</b></sub>   ](https://github.com/Kilo-Org/kilocode) | [   <sub><b>Zoo Code</b></sub>   ](https://github.com/Zoo-Code-Org/Zoo-Code) | [![[dac25f187f5e5e633c8f064edcb57fb6_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/public/providers/continue.svg)   <sub><b>Continue</b></sub> |
| --- | --- | --- | --- | --- | --- |
| <sub><b>Aider</b></sub> | <sub><b>ForgeCode</b></sub> | <sub><b>jcode</b></sub> | [![[d34207f1991142921e935d47d4e3124f_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/public/providers/deepseek.svg)   <sub><b>DeepSeek TUI</b></sub> | <sub><b>CodeWhale</b></sub> | [   <sub><b>OpenCode</b></sub>   ](https://github.com/anomalyco/opencode) |
| <sub><b>Factory Droid</b></sub> | [![[8c69ebd018078c18f4c8d1b3c7b58942_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/public/providers/copilot.svg)   <sub><b>Copilot CLI</b></sub> | [![[8e46950145b40a6532006a76a4486170_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/public/providers/cursor.svg)   <sub><b>Cursor CLI</b></sub> | <sub><b>Smelt</b></sub> | <sub><b>Pi</b></sub> | [![[6e31582ff9d0bca40a1a6f4112e0b5d4_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/public/providers/grok.svg)   <sub><b>Grok Build</b></sub> |
| ![[50ce9ad1937032a2a7629d43c1b2748d_MD5.svg]]    <sub><b>Hermes Agent</b></sub> | [![[bd957475cae76da1cc8d98eeebd74507_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/public/providers/openclaw.svg)   <sub><b>OpenClaw</b></sub> | ![[a51df8d6469479272061c07645d29e5f_MD5.svg]]    <sub><b>Goose</b></sub> | <sub><b>Open Interpreter</b></sub> | <sub><b>Warp AI</b></sub> | <sub><b>Agent Deck</b></sub> |

**＋ also works with** · Kiro · Command Code · Antigravity · Windsurf · AMP · **any OpenAI-compatible tool**

<sub>📖 Per-tool setup for all 36 tools (26 CLI Code's + 10 CLI Agents) → <a href="https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/reference/CLI-TOOLS.md"><code>docs/reference/CLI-TOOLS.md</code></a> · 🧩 OpenCode plugin → <a href="https://www.npmjs.com/package/@omniroute/opencode-provider"><code>@omniroute/opencode-provider</code></a></sub>

**Launch any supported CLI through OmniRoute in one command** — no config files written, credentials injected per process, Qwen/Gemini get a throwaway isolated home:

```
omniroute run claude   --model openai/gpt-5.4          # Claude Code
omniroute run codex    --model glm/glm-5.2             # OpenAI Codex CLI
omniroute run aider    --model glm/glm-5.2 -- --message "reply OK"
omniroute run goose    --model glm/glm-5.2
omniroute run opencode --model glm/glm-5.2 -- run "reply OK"
omniroute run qwen     --model glm/glm-5.2 -- -p "reply OK"
omniroute run gemini   --model glm/glm-5.2 -- --skip-trust -p "reply OK"

# Or pick provider+model interactively and write the tool's own config:
omniroute configure codex          # also: claude opencode qwen aider goose gemini cline continue kilo
```

Every command honors the active remote context (`omniroute connect <host>`), `--dry-run` previews the exact env/args without executing, and `--api-key-env NAME` keeps secrets out of your shell history. → [CLI Integrations](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/CLI-INTEGRATIONS.md)

## 🌐 352 AI Providers — 152 Catalog-Marked Free

> **352 registered providers** across the canonical chat, media, search, local, cloud-agent and system collections, including **152 carrying `hasFree: true` discovery metadata**. The chat model registry covers **229 providers / 2,554 distinct provider-model pairs / 1,283 raw model IDs**; the separate free-budget catalog has **444 per-model rows**, **34 recurring pools** and **52 recurring/keyless free-forever providers**. These are different denominators by design; definitions and pool-deduped calculations live in the [Provider Reference](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/reference/PROVIDER_REFERENCE.md) and [Free Tiers](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/reference/FREE_TIERS.md).

### 🏢 Every major lab — through one endpoint

| ![[8cbc85e5223d4697d81f49b0936c64f4_MD5.svg]]    <sub>OpenAI</sub> | [![[ef85aeb899e79211a374aceb1262dae7_MD5.svg]]](https://camo.githubusercontent.com/cb03c016663c26c89fe9bf55f5b6b038f6ccef7c788370b7a77b4cff5c5d888c/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f6e706d2f406c6f62656875622f69636f6e732d7374617469632d73766740312e39312e302f69636f6e732f636c617564652d636f6c6f722e737667)   <sub>Anthropic</sub> | [![[8e9eb12f07f15cc07b171ede2ed0f6b5_MD5.svg]]](https://camo.githubusercontent.com/dca1f5387b8a64e60bce4ad87b592e47fdc585b9ae84f34a12c50358168d4577/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f6e706d2f406c6f62656875622f69636f6e732d7374617469632d73766740312e39312e302f69636f6e732f67656d696e692d636f6c6f722e737667)   <sub>Gemini</sub> | ![[52e8b8150da4be0100b9c373d404030c_MD5.svg]]    <sub>xAI Grok</sub> | [![[4d20194c47c84c2ebdcbce259210836a_MD5.svg]]](https://camo.githubusercontent.com/5e3312d77e29631d88fa568298c597969175cb7cdf11cdc39142c99eb280c752/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f6e706d2f406c6f62656875622f69636f6e732d7374617469632d73766740312e39312e302f69636f6e732f646565707365656b2d636f6c6f722e737667)   <sub>DeepSeek</sub> | [![[04d2afaf1fcad8f12c7042f0ec2405e9_MD5.svg]]](https://camo.githubusercontent.com/8a219dad6b0ddf1cd54dffef724dd2ef061e8edfab80a53655961d29ba0a9955/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f6e706d2f406c6f62656875622f69636f6e732d7374617469632d73766740312e39312e302f69636f6e732f6d69737472616c2d636f6c6f722e737667)   <sub>Mistral</sub> |
| --- | --- | --- | --- | --- | --- |
| [![[f0fcfd56820c5b3197794d301ea95f65_MD5.svg]]](https://camo.githubusercontent.com/2499af658731fd18983333d838f76b64c0e94e47f01352d52b8c3d382d556533/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f6e706d2f406c6f62656875622f69636f6e732d7374617469632d73766740312e39312e302f69636f6e732f7177656e2d636f6c6f722e737667)   <sub>Qwen</sub> | [![[146c20b8e8367ecdff0bb750ae7f795a_MD5.svg]]](https://camo.githubusercontent.com/d10473405e517137e46f08d394261945b27dfc0d1261f0306a949d998a316c6b/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f6e706d2f406c6f62656875622f69636f6e732d7374617469632d73766740312e39312e302f69636f6e732f6d6574612d636f6c6f722e737667)   <sub>Meta Llama</sub> | ![[5b68f2a9d256174b3039a26f3a9792ed_MD5.svg]]    <sub>Groq</sub> | [![[e55e002c79d5b896176c92c0f9fec33c_MD5.svg]]](https://camo.githubusercontent.com/7e6fc7d4eaad82f0cb98c1e5e991b521fae3b8a7ade4c82659bf0ed2cd8bc347/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f6e706d2f406c6f62656875622f69636f6e732d7374617469632d73766740312e39312e302f69636f6e732f6e76696469612d636f6c6f722e737667)   <sub>NVIDIA</sub> | [![[f2162280cf196c47594b711bbe8e8ebe_MD5.svg]]](https://camo.githubusercontent.com/482e615fe94a3b6a82584393583f89511dce9cc9c39e1fca9feaa52e471a1faa/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f6e706d2f406c6f62656875622f69636f6e732d7374617469632d73766740312e39312e302f69636f6e732f6d696e696d61782d636f6c6f722e737667)   <sub>MiniMax</sub> | [![[1a3848ef907d8fc6806fb2a67efc3d83_MD5.svg]]](https://camo.githubusercontent.com/317c2df066200a683e168843f3ca15d92df504648e3a3b8526848d2299106aa4/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f6e706d2f406c6f62656875622f69636f6e732d7374617469632d73766740312e39312e302f69636f6e732f636f686572652d636f6c6f722e737667)   <sub>Cohere</sub> |
| [![[e36623f77933ca7e41328f5b0bb999c1_MD5.svg]]](https://camo.githubusercontent.com/fd9347726654927c3164936cdb130f64f3851cd321255d54a59d7832116296fc/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f6e706d2f406c6f62656875622f69636f6e732d7374617469632d73766740312e39312e302f69636f6e732f706572706c65786974792d636f6c6f722e737667)   <sub>Perplexity</sub> | [![[151a49e479adf3b12864924fb4b7913d_MD5.svg]]](https://camo.githubusercontent.com/9735104369ade4f5d1a73b907e4eb71a9c62dfebb9db27ae834ace900de43c75/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f6e706d2f406c6f62656875622f69636f6e732d7374617469632d73766740312e39312e302f69636f6e732f68756767696e67666163652d636f6c6f722e737667)   <sub>HuggingFace</sub> | [![[52f358346a7aee9b110f9c566041a57c_MD5.svg]]](https://camo.githubusercontent.com/0358e372dd6f787f4bedf388f6270db7f2cf2e34d5b8dcfd19c7e8330705b430/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f6e706d2f406c6f62656875622f69636f6e732d7374617469632d73766740312e39312e302f69636f6e732f746f6765746865722d636f6c6f722e737667)   <sub>Together</sub> | [![[97f68750c341ede8f441de40db2f324d_MD5.svg]]](https://camo.githubusercontent.com/138549dfde5d2a87a56b0ee58d964c092941e71eb0d5f21a1b5b5af6785772e7/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f6e706d2f406c6f62656875622f69636f6e732d7374617469632d73766740312e39312e302f69636f6e732f66697265776f726b732d636f6c6f722e737667)   <sub>Fireworks</sub> | [![[c92f80a750567a2a2efa726f357809e9_MD5.svg]]](https://camo.githubusercontent.com/415b9fb4e2d18ae2f8d7a8bc9f4051c73235aea0c3d084796d7837a4d2741ad5/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f6e706d2f406c6f62656875622f69636f6e732d7374617469632d73766740312e39312e302f69636f6e732f636c6f7564666c6172652d636f6c6f722e737667)   <sub>Cloudflare</sub> | [![[07f94758fb762c41f569389292b27044_MD5.svg]]](https://camo.githubusercontent.com/330afeb1f281e41fee0ca67dc8c3e9e4909889fc3e593b8191b694c536d70f8e/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f6e706d2f406c6f62656875622f69636f6e732d7374617469632d73766740312e39312e302f69636f6e732f62616964752d636f6c6f722e737667)   <sub>Baidu</sub> |

<sub>…and 330+ more — every icon resolves live from the dashboard's provider catalog. 📖 <a href="https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/reference/PROVIDER_REFERENCE.md">Provider Reference</a></sub>

### 🆓 Free Forever — $0, no card

| **OpenCode Zen**   <sub>DeepSeek V4, Nemotron 3<br>No token cap</sub> | **Kilo Code**   <sub>Auto-router, Tencent Hy3<br>Free forever</sub> | [![[78531f172dced5f8241995d0653135b9_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/public/providers/requesty.svg)   **Requesty**   <sub>GPT-OSS 120B, Nemotron<br>Free forever</sub> | [![[c62a58644ee0eb0969f568ba87b8b3a8_MD5.svg]]](https://camo.githubusercontent.com/4a8ada6fced43ef5abdbc773f16cd3216bc7ee6a0491699c0324d6ac80b861e1/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f6e706d2f406c6f62656875622f69636f6e732d7374617469632d73766740312e39312e302f69636f6e732f73696c69636f6e636c6f75642d636f6c6f722e737667)   **SiliconFlow**   <sub>DeepSeek V3.2 / R1<br>Free tier</sub> | [![[7b0006f813ab49ee2fa3551f3296bb4e_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/public/providers/zhipu.svg)   **Z.AI GLM**   <sub>GLM-4.7 / 4.5-Flash<br>Free forever</sub> | [![[07f94758fb762c41f569389292b27044_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/public/providers/baidu.svg)   **Baidu ERNIE**   <sub>ERNIE 4.0<br>Free forever</sub> |
| --- | --- | --- | --- | --- | --- |
| [![[26b456de06a720f32501d25339b4f7f1_MD5.svg]]](https://camo.githubusercontent.com/4c26e35307621fc8211ff5f71e542af8e49aca4065a396a03a5d1385ebed1f81/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f6e706d2f406c6f62656875622f69636f6e732d7374617469632d73766740312e39312e302f69636f6e732f716f6465722d636f6c6f722e737667)   **Qoder AI**   <sub>Qwen3-Max, Kimi-K2<br>Unlimited FREE</sub> | [![[6f976dfcbff00bcee4a14023898dc392_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/public/providers/pollinations.svg)   **Pollinations**   <sub>GPT, Llama, Claude<br>No key needed</sub> | [![[c504b1603c8a9c6ab348cdb6e3287330_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/public/providers/cloudflare.svg)   **Cloudflare AI**   <sub>50+ models<br>10K neurons/day</sub> | **NVIDIA NIM**   <sub>GLM, MiniMax<br>~40 RPM free</sub> | [![[9c3ee1ca0829d8d1614faa8cdd6c327d_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/public/providers/cerebras.svg)   **Cerebras**   <sub>GLM 4.7, GPT-OSS<br>1M tokens/day</sub> | [![[1526e6565493d7d8711e85fa9b75078b_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/public/providers/openrouter.svg)   **OpenRouter**   <sub>:free models<br>+$10 → higher RPM</sub> |

📖 Full machine-readable catalog → [`docs/reference/PROVIDER_REFERENCE.md`](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/reference/PROVIDER_REFERENCE.md)

## 🖥️ Where OmniRoute Runs — Anywhere

> Same app, your machine, your rules. From a global npm install to **your phone** via Termux.

| Platform | Install | Highlights |
| --- | --- | --- |
| 📦 **npm (global)** | `npm install -g omniroute` | One command, any OS |
| 🐳 **Docker** | `docker run … diegosouzapw/omniroute` | Multi-arch **AMD64 + ARM64** |
| 🖥️ **Desktop (Electron)** | `npm run electron:build` | Native window + system tray — **Windows / macOS / Linux** |
| 🎩 **Menu-bar (OmniRouteTray)** | `brew install --cask zoispag/tap/omniroute-tray` | Supervises & auto-updates the server — **macOS** |
| 💪 **ARM** | native `arm64` | Raspberry Pi, ARM servers, Apple Silicon |
| 📱 **Android (Termux)** | `pkg install nodejs && npx -y omniroute` | Runs **on your phone**, 24/7, no root |
| 📲 **PWA** | "Add to Home Screen" | Fullscreen, offline, installable from browser |
| 🧩 **OpenCode plugin** | `@omniroute/opencode-provider` | Native OpenCode integration |
| 🤖 **VS Code Copilot Chat** | install **OmniCopilot** extension | Every OmniRoute model in the native Copilot Chat picker — stable & Insiders |
| 🛠️ **From source** | `npm install && npm run dev` | Hack on it, contribute |

<sub>📖 <a href="https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/DOCKER_GUIDE.md">Docker Guide</a> · <a href="https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/electron/README.md">Desktop</a> · <a href="https://github.com/zoispag/omniroute-tray">Menu-bar tray</a> · <a href="https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/TERMUX_GUIDE.md">Termux</a> · <a href="https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/PWA_GUIDE.md">PWA</a> · <a href="https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/frameworks/OPENCODE.md">OpenCode</a></sub>

### 🧩 New: OmniRoute inside VS Code's native Copilot Chat

> No new sidebar, no new chat UI — every model OmniRoute serves shows up right in the **Copilot Chat model picker you already use**. Since VS Code 1.122, provider models work without a GitHub sign-in or a Copilot subscription — agent mode, tool calling and vision, for free.

Install the **[OmniCopilot](https://github.com/diegosouzapw/OmniCopilot)** extension, point it at your OmniRoute server (defaults to `localhost:20128`), then open Copilot Chat → model picker → **Manage Models…** → **OmniRoute**.

| Store | Link | Works with |
| --- | --- | --- |
| 🧩 **VS Code Marketplace** | [Install →](https://marketplace.visualstudio.com/items?itemName=diegosouzapw.omnicopilot) | VS Code — stable & Insiders |
| 🔓 **Open VSX Registry** | [Install →](https://open-vsx.org/extension/diegosouzapw/omnicopilot) | Cursor, Windsurf, VSCodium, Theia, code-server, Gitpod, Antigravity, Kiro… |

From inside the editor: open the **Extensions** view, search **"OmniRoute"**, click **Install** — works the same way on both stores. Source, issues and the publishing runbook live at [diegosouzapw/OmniCopilot](https://github.com/diegosouzapw/OmniCopilot).

<sub>📖 <a href="https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/VSCODE-COPILOT.md">VS Code Copilot Chat guide</a> — setup, what the picker shows, dashboard-in-a-tab, troubleshooting</sub>

> `omniroute serve` is happiest when it's always on. **[OmniRouteTray](https://github.com/zoispag/omniroute-tray)** turns that into a set-and-forget menu-bar app for macOS: it starts the server, keeps it alive across reboots, updates it in place, and puts your live token budget one click away — **no terminal window left open, no `npm install -g omniroute` to babysit.**

Built with [Tauri v2](https://v2.tauri.app/) (a Rust core the size of a rounding error), it ships its own signed Node 24 runtime and manages an app-owned OmniRoute install, so it never fights your global `node` / `bun`. It **shares your existing `~/.omniroute/` config and database** — so it's the same OmniRoute you already run, just with a hat on. 🎩

| What it does | How |
| --- | --- |
| 🟢 **Supervises the server** | Spawns `omniroute serve`, adopts an already-running instance instead of duplicating it |
| 📊 **Live usage at a glance** | Provider quota bars, Claude session/weekly limits with reset countdowns, 30-day cost breakdown |
| 🔄 **Auto-updates in place** | Staged install, atomic swap, rollback on failure — always on the newest release |
| 🚀 **Start on login** | Optional launch at login; tray-only, no dock icon |
| 🩺 **Doctor & logs** | One-click diagnostics and server log access |

```
brew install --cask zoispag/tap/omniroute-tray
```

<sub>Prefer a download? Grab the latest <code>.dmg</code> from <a href="https://github.com/zoispag/omniroute-tray/releases">Releases</a>. Source, issues and build docs live at <a href="https://github.com/zoispag/omniroute-tray">zoispag/omniroute-tray</a>.<br>💛 A community project by <a href="https://github.com/zoispag">@zoispag</a> — not an official OmniRoute release.</sub>

## 🔒 Private & Local-First

[![[25377d0c9b29e9554aa9aac709d87c80_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/diagrams/privacy-local.svg)

<sub>📖 <a href="https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/architecture/AUTHZ_GUIDE.md">Authorization</a> · <a href="https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/security/GUARDRAILS.md">Guardrails</a> · <a href="https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/security/COMPLIANCE.md">Compliance</a></sub>

## 🔌 Full CLI + A2A & MCP

> Beyond the server, OmniRoute is a **full command-line cockpit** with **80+ commands**, plus open agent protocols so an AI agent can drive it **on its own**.

### ⌨️ A real CLI (not just start)

```
omniroute               # serve gateway + dashboard (port 20128)
omniroute chat          # interactive TUI chat client (slash: /model /combo /skill /memory)
omniroute setup         # guided first-run wizard
omniroute doctor        # diagnose providers, ports, native deps
```

### 🛰️ Remote mode — run the CLI here, OmniRoute on a VPS

OmniRoute on a server? Drive it from your laptop with the **same CLI**. Log in once with a scoped access token; every command then targets the remote.

```
omniroute connect 192.168.0.15            # password → scoped token, saved as a context
omniroute models list                     # ← runs against the REMOTE server
omniroute configure codex                 # ← picks a remote model, writes a local Codex profile
omniroute tokens create --name ci --scope read   # mint narrower tokens for other machines
omniroute contexts use default            # ← switch back to the local server
```

Tokens are scoped `read` / `write` / `admin`; process-spawning routes stay loopback-only. <sub>📖 <a href="https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/REMOTE-MODE.md">Remote Mode</a></sub>

[![[9054303674ca1db6f4ad1e3706438729_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/diagrams/cli-terminal.svg)

### 🤝 Connect an agent — and it controls OmniRoute itself

Expose OmniRoute over **MCP**, **A2A**, a **REST API**, **webhooks** or a **remote CLI** — any capable agent (or your own code) gets the keys to the whole gateway: routing, providers, combos, cache, compression, memory — autonomously. HTTP endpoints below are served under `http://localhost:20128`.

| Interface | Endpoint / command | Use it for |
| --- | --- | --- |
| 🧰 **MCP (stdio)** | `omniroute --mcp` | Plug into Claude Desktop, Cursor, any MCP client |
| 🌊 **MCP (HTTP)** | `/api/mcp/stream` | Remote MCP — **110 tools**, 33 scopes (enforcement opt-in), full audit trail |
| 📡 **MCP (SSE)** | `/api/mcp/sse` | Streaming MCP transport |
| 🤝 **A2A** | `/.well-known/agent.json` | Agent-to-agent, **JSON-RPC 2.0** + SSE, 6 skills |
| 🌐 **REST API** | `/v1/*` | OpenAI-compatible — chat, embeddings, images, audio, OCR |
| 🔔 **Webhooks** | `/api/webhooks` | Push request / quota events to Slack, Discord, Telegram or any URL |
| 🛰️ **Remote CLI** | `omniroute connect ` | Drive a remote instance with scoped access tokens |

```
# Give Claude Code the full OmniRoute toolset over MCP:
claude mcp add-server omniroute --type http --url http://localhost:20128/api/mcp/stream
```

<sub>📖 <a href="https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/frameworks/MCP-SERVER.md">MCP Server</a> · <a href="https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/frameworks/A2A-SERVER.md">A2A Server</a> · <a href="https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/frameworks/AGENT_PROTOCOLS_GUIDE.md">Agent Protocols</a></sub>

## 🗜️ Save 15–95% Tokens — Automatically

### 📖 How it works — pipeline, architecture & savings math

[![[21f7f7b9882eaa8e9ff18b2e4894fe8f_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/diagrams/compression-pipeline.svg)

Default stacked combo runs `RTK → Caveman`. When both act on the same tool/context payload, savings compound:

```
combined = 1 − (1 − RTK) × (1 − Caveman_input)
average  = 1 − (1 − 0.80) × (1 − 0.46) = 89.2%
range    = 78.4 – 94.6%
```

Code blocks, URLs, JSON and structured data are **always protected** by the preservation engine.

> **Why use many tokens when few tokens do the trick?** Every request passes through OmniRoute's compression pipeline **transparently** — no client changes. It's now a **stack of 12 composable engines** that run in order and mix & match per routing combo — building on ideas from [RTK](https://github.com/rtk-ai/rtk), [Caveman](https://github.com/JuliusBrussee/caveman) (⭐ 90K+), [LLMLingua-2](https://github.com/microsoft/LLMLingua), and [Troglodita](https://github.com/leninejunior/troglodita) (PT-BR).

### 🧱 The 12-engine stack

Engines run in pipeline order; each is independently toggleable and configurable per combo:

| # | Engine | What it does |
| --- | --- | --- |
| 1 | **Session-Dedup** | Drops content repeated across turns (content-addressed, cross-turn) |
| 2 | **CCR** | Archives large blocks behind retrieve markers, fetched on demand |
| 3 | **Lite** | Whitespace + image-URL trimming (latency-light baseline) |
| 4 | **RTK** | Smart tool-result filtering, dedup & truncation (command-aware) |
| 5 | **Responses Tool Output** | Lossless-first JSON + bounded diagnostic compression for shell/patch/search/build outputs (Responses API) |
| 6 | **Headroom** | Lossless tabular compaction of JSON arrays (~30%) via a vendored **GCF** codec |
| 7 | **Relevance** | Extractive sentence scoring against the last user query |
| 8 | **Caveman** | Rule-based prose compression (~65–75% on output) |
| 9 | **Aggressive** | Summarization + progressive aging of old turns |
| 10 | **LLMLingua-2** | ML semantic pruning via MobileBERT ONNX — code-safe, async |
| 11 | **Ultra** | Heuristic token pruning with an optional small-model (SLM) tier |
| 12 | **OmniGlyph** | Experimental context-as-image encoding for measured Claude Fable 5 on the direct Anthropic wire; GPT 5.6 transformers remain fail-closed pending provider receipts. Four compression profiles (aggressive default, balanced, coding-safe, passthrough) (most aggressive; opt-in) |

Code blocks, URLs and structured data are **always preserved** byte-perfect. **One-click presets** combine the engines:

| Mode | Savings | Best for |
| --- | --- | --- |
| 🪶 **Lite** | ~15% | Always-on safe default |
| 🪨 **Standard (Caveman)** | ~30% | Daily coding |
| ⚡ **Aggressive** | ~50% | Long tool-heavy sessions |
| 🔥 **Ultra** | ~75% | Maximum savings |
| 🧰 **RTK** | 60–90% | Shell/test/build/git output |
| 🔗 **Stacked (RTK → Caveman)** | **78–95%** | Mixed prompts + tool logs |

**Real example — Standard mode:**

> **Before (69 tokens):** *"The reason your React component is re-rendering is likely because you're creating a new object reference on each render cycle. When you pass an inline object as a prop, React's shallow comparison sees it as a different object every time, which triggers a re-render. I would recommend using useMemo to memoize the object."*
> 
> **After (19 tokens):** *"New object ref each render. Inline object prop = new ref = re-render. Wrap in useMemo."*
> 
> **Same answer. 72% fewer tokens. Zero accuracy loss.** ✅

**PT-BR example — [Troglodita](https://github.com/leninejunior/troglodita) mode:**

> **Antes (42 tokens):** *"O problema é que o componente está re-renderizando porque uma nova referência de objeto está sendo criada em cada ciclo de renderização. Eu recomendaria usar useMemo."*
> 
> **Depois (12 tokens):** *"Re-render: ref nova cada ciclo (objeto inline recriado). Usar `useMemo`."*
> 
> **Mesma resposta. ~70% menos tokens. Precisão técnica intacta.** ✅

### 🎚️ Beyond the engines — output styles, the adaptive dial & per-request control

The 12 engines above shrink what goes **in**. Three more layers shape **how**, **when**, and what comes **out**:

- **🪄 Output Styles** *(output-axis steering)* — inject deterministic, cache-safe response-shaping instructions; combinable, each at `lite` / `full` / `ultra` intensity. Adding a style is a one-line registry entry:
	- **Terse prose** — drop filler / articles / hedging; keep technical substance exact.
		- **Less code** — "lazy senior dev" YAGNI: smallest working change, no unrequested scaffolding.
		- **Ponytail (lazy senior dev)** — climb the YAGNI ladder, fix the root cause, smallest working diff.
		- **I have ADHD (action-first)** — next action leads, steps numbered, one concrete next step, no preamble.
		- **Terse CJK (文言)** — classical-Chinese ultra-terse style (locale-gated to `zh`).
- **🎯 Adaptive context-budget** *(the dial)* — instead of one on/off token threshold, escalate the cheapest, most-lossless engines only as far as needed to **fit the model's context window**. Policy: `reserve-output` (default, model-aware) · `percentage` · `absolute`. Mode: `floor` (guarantee fit) · `replace-autotrigger` (your explicit choice wins) · `off` (legacy threshold).
- **🎛️ Where compression is decided** *(precedence, high → low)* — per-request `x-omniroute-compression` header › routing-combo override › active named profile › adaptive / auto-trigger › panel default › off. The applied plan echoes back in the `X-OmniRoute-Compression: <mode>; source=<source>` response header.

Auto-trigger by token threshold, flip on the adaptive dial, pin a named profile, set a one-off per request, or assign a pipeline per routing combo — whichever fits the workload. An opt-in offline **eval harness** (`npm run eval:compression`) scores fidelity vs. savings on a pinned corpus before you promote a change.

📖 [`COMPRESSION_GUIDE.md`](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/compression/COMPRESSION_GUIDE.md) · [`RTK_COMPRESSION.md`](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/compression/RTK_COMPRESSION.md) · [`COMPRESSION_ENGINES.md`](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/compression/COMPRESSION_ENGINES.md)

## ⚡ Quick Start

**1) Install & run**

```
npm install -g omniroute
omniroute
```

> 💡 See `npm warn ERESOLVE` or peer-dep warnings? [They're harmless](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/TROUBLESHOOTING.md#npm-install-warnings-eresolve--peer--deprecated).

Dashboard at `http://localhost:20128` · API at `http://localhost:20128/v1`.

**2) Connect a FREE provider (no signup)**

Dashboard → **Providers** → connect **Kiro AI** (free Claude, ~50 credits/month per account) or **OpenCode Free** (no auth) → done.

**3) Point your coding tool**

```
Base URL: http://localhost:20128/v1
API Key:  [copy from Dashboard → Endpoints]
Model:    auto            (zero-config smart routing — or any provider/model)
```

**4) Verify it's working**

```
curl http://localhost:20128/v1/models -H "Authorization: Bearer YOUR_KEY"
```

You should see your connected models listed. 🎉 That's it — start coding, and OmniRoute auto-routes & falls back for you.

If your client cannot send custom headers, OmniRoute also exposes tokenized compatibility aliases:

```
OpenAI catalog:   http://localhost:20128/vscode/YOUR_KEY/
OpenAI models:    http://localhost:20128/vscode/YOUR_KEY/models
OpenAI chat:      http://localhost:20128/vscode/YOUR_KEY/chat/completions
OpenAI responses: http://localhost:20128/vscode/YOUR_KEY/responses
Ollama chat:      http://localhost:20128/vscode/YOUR_KEY/api/chat
Ollama tags:      http://localhost:20128/vscode/YOUR_KEY/api/tags
```

Use these only for clients that cannot attach `Authorization: Bearer ...`. Header auth remains the preferred mode.

## 📦 More install methods — Docker, source, pnpm, Arch

**🐳 Docker**

```
docker run -d --name omniroute --restart unless-stopped --stop-timeout 40 \
  -p 127.0.0.1:20128:20128 -v omniroute-data:/app/data diegosouzapw/omniroute:latest
```

`:latest` follows the highest **published** stable SemVer. It does not track git `main`. Pin `:X.Y.Z` for GitOps. See [Docker Release Channels](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/DOCKER_GUIDE.md#release-channels).The image pins **`OMNIROUTE_MEMORY_MB=1024`**. That is enough for the dashboard and a light chat. **Coding agents** (`POST /v1/responses` from Claude Code, Codex, Grok, …) need a much larger V8 heap or the process `FATAL ERROR` s at ~12 GiB under two overlapping long contexts. Size the container above the heap (native buffers sit outside V8):

| Workload | Heap (`-e OMNIROUTE_MEMORY_MB`) | Container (`--memory`) |
| --- | --- | --- |
| Dashboard / light chat | `1024` (image default) | ≥2 g |
| One coding agent | `8192` | ≥10 g |
| Two concurrent long `/v1/responses` | `10240` – `12288` | ≥12–16 g |

```
docker run -d --name omniroute --restart unless-stopped --stop-timeout 40 \
  -e OMNIROUTE_MEMORY_MB=8192 --memory=10g \
  -p 127.0.0.1:20128:20128 -v omniroute-data:/app/data diegosouzapw/omniroute:latest
```

Full table: [Docker Guide — runtime RAM](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/DOCKER_GUIDE.md#runtime-ram-for-coding-agents).

> **Pre-release Docker channel:** `diegosouzapw/omniroute:next` and `diegosouzapw/omniroute:next-web` follow the current default `release/v*` branch. These mutable tags are intended only for testing unreleased fixes and are **not supported for production**. See [Docker Release Channels](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/DOCKER_GUIDE.md#release-channels).

**🥟 Bun**

Standard `bun install` and global installation (`bun install -g omniroute`) are supported via Bun runtime detection:

- **Built-in `bun:sqlite`**: OmniRoute uses Bun's built-in `bun:sqlite` driver when running under Bun, falling back to `better-sqlite3` on Node.js or `sql.js`.
- **Automatic Webpack bundler selection in dev**: Development (`bun run dev`) automatically detects Bun and disables Turbopack in favor of Webpack to prevent native V8 binding incompatibilities. Production builds (`bun run build`) follow `OMNIROUTE_USE_TURBOPACK` exactly as on Node: Turbopack by default, `OMNIROUTE_USE_TURBOPACK=0` to build with Webpack (`Dockerfile.bun` exposes it as a `--build-arg`).
- **Dedicated Bun Dockerfile**: Multi-stage `Dockerfile.bun` for native Bun production deployments (`docker build -f Dockerfile.bun -t omniroute:bun .`).
```
# Install and run with Bun
bun install
bun run dev
```

**🛠️ From source**

```
cp .env.example .env && npm install
PORT=20128 npm run dev
```

**📦 pnpm**

```
pnpm add -g omniroute@latest --allow-build=better-sqlite3 --allow-build=@swc/core && omniroute
```

**🐧 Arch Linux (AUR)**

```
yay -S omniroute-bin && systemctl --user enable --now omniroute.service
```

**🔧 Nix (Flake)**

```
# Using Nix flakes
nix develop
npm run dev

# Or using devbox
devbox run npm run dev
```

📖 [Docker Guide](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/DOCKER_GUIDE.md) — Compose profiles, Caddy HTTPS, Cloudflare tunnels.

**🦭 Podman**

```
# 1. Prepare the bind-mounted data directory
mkdir -p data

# 2. Linux + local rootless Podman only (never a remote Podman Machine client):
podman unshare chown 1000:1000 ./data

# 3. Set the runtime hint, build the local Compose image, and start
echo "CONTAINER_HOST=podman" >> .env
podman compose --profile base up -d --build
```

On macOS or Windows, Podman uses a remote Podman Machine: skip `podman unshare` and follow the [topology-specific data directory guidance](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/contrib/podman/README.md#data-directory-permissions-by-topology).

📖 [Podman Guide](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/contrib/podman/README.md) — Compose builds, Podman Machine, and Linux/systemd Quadlet setup.

**⚡ Faster / leaner install (skip the native build)**

The native SQLite engine (`better-sqlite3`) is an **optional** dependency, so a global install never blocks on compiling from source: it uses a prebuilt binary when one matches your platform/Node, and otherwise falls back transparently to a pure-JS engine (`node:sqlite` on Node 22+, else the bundled `sql.js` WASM) — no build tools required.

To skip the post-install native warm-up entirely (CI, headless, or slow machines):

```
OMNIROUTE_SKIP_POSTINSTALL=1 npm install -g omniroute   # CI=1 also skips it
```

For the fastest installs prefer **pnpm** (content-addressed store + hard links — see above). For a dashboard-free, headless runtime use the Docker `base` profile (above) or the [Termux guide](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/TERMUX_GUIDE.md). The CLI and the web dashboard are served by the same process on one port, so there is no separate CLI-only package today.

## 🎬 OmniRoute in Action

## 📹 Video Guides

<sub>Snapshot do painel em 2026-08-24 · Catálogo bruto: YT 809 | TT 137 | IG 124 · Frescor (dias): YT 1 | TT 21 | IG 22</sub>

| [![[853d811330dfeae04b8610704427abf0_MD5.svg]]](https://www.instagram.com/reel/Da8ZthUPK98/)   **🎬 #1 — Instagram**   <sub>nick_saraev — 3,042,474 views</sub> | [![[d50576d81ff040e593ccec4b6902a9bb_MD5.svg]]](https://www.instagram.com/reel/DaSs65mMrHk/)   **🎬 #2 — Instagram**   <sub>theopenstack — 692,419 views</sub> | [![[9afa2f28e6ad17e3fd3d790878d856fc_MD5.svg]]](https://www.tiktok.com/@milesreevesai/video/7667980059189366019)   **🎬 #3 — TikTok**   <sub>milesreevesai — 620,400 views</sub> | [![[e0d1216516a3a93918b90baa570630b1_MD5.jpg]]](https://www.youtube.com/watch?v=QucgvbO5gsM)   **🎬 #4 — YouTube**   <sub>Vaibhav Sisinty — 391,109 views</sub> | [![[b666b37a33702b0201faffadac6d95e1_MD5.svg]]](https://www.instagram.com/reel/DbIt9AjK7-U/)   **🎬 #5 — Instagram**   <sub>buildwithai.club — 347,652 views</sub> |
| --- | --- | --- | --- | --- |

**Ranking completo (URLs canônicas deduplicadas, `v > 0`, maior alcance):**

| #1 | #2 | #3 | #4 | #5 |
| --- | --- | --- | --- | --- |
| [nick\_saraev — Instagram](https://www.instagram.com/reel/Da8ZthUPK98/) — **3,042,474** | [theopenstack — Instagram](https://www.instagram.com/reel/DaSs65mMrHk/) — **692,419** | [milesreevesai — TikTok](https://www.tiktok.com/@milesreevesai/video/7667980059189366019) — **620,400** | [Vaibhav Sisinty — YouTube](https://www.youtube.com/watch?v=QucgvbO5gsM) — **391,109** | [buildwithai.club — Instagram](https://www.instagram.com/reel/DbIt9AjK7-U/) — **347,652** |

| #6 | #7 | #8 | #9 | #10 |
| --- | --- | --- | --- | --- |
| [nivedan.ai — Instagram](https://www.instagram.com/reel/DbIrCksJiqq/) — **331,973** | [vaibhavsisinty — Instagram](https://www.instagram.com/reel/Dae05TSAK1l/) — **263,744** | [Nick Automates — YouTube Shorts](https://www.youtube.com/shorts/fZIBK_4fKq8) — **218,174** | [theroshankrishna — Instagram](https://www.instagram.com/reel/Dapjs58z0P0/) — **186,786** | [midudev — TikTok](https://www.tiktok.com/@midudev/video/7664636453544152342) — **177,800** |

Métricas canônicas em 2026-08-24: **1.029 vídeos únicos** · **11.132.922 visualizações conhecidas** (`v > 0`) · **639 canais/perfis por rede**. O painel bruto contém 1.070 linhas; 41 duplicatas do Instagram foram normalizadas pela URL canônica, mantendo a maior contagem por vídeo.

> 🎬 **Made a video about OmniRoute?** Open an [issue](https://github.com/diegosouzapw/OmniRoute/issues/new) or [discussion](https://github.com/diegosouzapw/OmniRoute/discussions) with the link — we'll feature it here.

## 📧 Community & Help

> Everything in one place — follow the maintainer, chat with the community, or open an issue.

| Channel | Where / how |
| --- | --- |
| 💼 **LinkedIn** — follow the maintainer | [linkedin.com/in/diegosouzapw](https://www.linkedin.com/in/diegosouzapw/) |
| 🐙 **GitHub** — follow for releases & tips |  |
| 💬 **Discord** | [discord.gg/U47eFqAXCn](https://discord.gg/U47eFqAXCn) |
| ✈️  **Telegram** | [t.me/omnirouteOficial](https://t.me/omnirouteOficial) |
| 🟢 **WhatsApp — 🌍 Global** | [join the group](https://chat.whatsapp.com/FvuCbrpZmQ6I85n2vW5QIC?s=cl&p=a&mlu=4) |
| 🟢 **WhatsApp — 🇧🇷 Brasil** | [entrar no grupo](https://chat.whatsapp.com/KWgatljAjmbELQory59Oti?s=cl&p=a&mlu=4) |
| 🌍 **Website** | [omniroute.online](https://omniroute.online/) |
| 🌍 **🌍StHub OmniRoute Community (free)** | [portal sthub](https://portal.sthub.com.br/communities/groups/st-hub/channels/Omniroute-World-8kRjmK) |
| 📦 **Source code** | [github.com/diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) |
| 🐛 **Report a bug** | [open an issue](https://github.com/diegosouzapw/OmniRoute/issues) — attach `npm run system-info` output |
| 🤝 **Contribute** | [CONTRIBUTING.md](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/CONTRIBUTING.md) · [Branching & Release Model](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/ops/BRANCHING_MODEL.md) · pick a `good first issue` |
| 💚 **Support the project** | [Ways to support ↑](#-support-omniroute) · [GitHub Sponsors](https://github.com/sponsors/diegosouzapw) |

---

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| **Runtime** | Node.js 22.x / 24.x LTS — `>=22.22.2 <23 \|\| >=24.0.0 <27` |
| **Language** | TypeScript 6.0 — **100% TypeScript** across `src/` and `open-sse/` (zero `any` in core since v2.0) |
| **Framework** | Next.js 16 + React 19 + Tailwind CSS 4 |
| **Database** | better-sqlite3 (SQLite, WAL journaling) + LowDB (JSON legacy) — 122 domain modules, 169 migrations |
| **Memory** | SQLite FTS5 full-text + int8-quantized vector embeddings, typed decay |
| **Schemas** | Zod 4 — MCP tool I/O validation + API contracts |
| **Protocols** | MCP (stdio / HTTP / SSE) + A2A v0.3 (JSON-RPC 2.0 + SSE) |
| **Streaming** | Server-Sent Events (SSE) + WebSocket bridge (`/v1/ws`) |
| **Compression** | 12-engine pipeline — RTK, Caveman, LLMLingua-2 (MobileBERT ONNX), GCF, OmniGlyph |
| **Auth & security** | OAuth 2.0 (PKCE) + JWT + API Keys + MCP scoped auth · AES-256-GCM at rest · DOMPurify |
| **Stealth** | wreq-js — JA3 / JA4 TLS fingerprint impersonation, 3-level proxy |
| **Resilience** | Circuit breaker, exponential backoff, anti-thundering-herd, auto-combo self-healing |
| **Logging** | pino — structured JSON logs with request context |
| **Testing** | Node.js test runner + Vitest — **39,000+ static test declarations** across 5,100+ tracked test files (unit, integration, E2E, security, ecosystem) |
| **Platforms** | Desktop (Electron) · Android (Termux) · PWA (any browser) |
| **CI/CD** | GitHub Actions — auto npm publish + Docker Hub on release |
| **Links** | [Website](https://omniroute.online/) · [npm](https://www.npmjs.com/package/omniroute) · [Docker Hub](https://hub.docker.com/r/diegosouzapw/omniroute) |

## 📖 Documentation

### 📘 Getting Started

| Document | Description |
| --- | --- |
| **[User Guide](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/USER_GUIDE.md)** | Providers, combos, CLI integration, deployment |
| **[Setup Guide](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/SETUP_GUIDE.md)** | Full install methods, CLI tool configs, protocol setup, timeout tuning |
| **[CLI Tools Guide](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/reference/CLI-TOOLS.md)** | Per-tool setup for Claude Code, Codex, Cursor, Cline, OpenClaw, Kilo, Copilot |
| **[Remote Mode](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/REMOTE-MODE.md)** | Drive a remote OmniRoute (VPS) from your laptop CLI via scoped access tokens |
| **[Claude Code Config](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/CLAUDE-CODE-CONFIGURATION.md)** | Point Claude Code at OmniRoute (local/remote) with `launch` + per-model profiles |
| **[Quick Start](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/README.md#-quick-start)** | 3-step install → connect → configure |

### 🔧 Operations & Deployment

| Document | Description |
| --- | --- |
| **[Docker Guide](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/DOCKER_GUIDE.md)** | Docker run, Compose profiles, Caddy HTTPS, tunnels, image tags |
| **[Podman Guide](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/contrib/podman/README.md)** | Quadlet systemd integration, podman-compose, SELinux |
| **[VM Deployment](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/ops/VM_DEPLOYMENT_GUIDE.md)** | Complete guide: VM + nginx + Cloudflare setup |
| **[Fly.io Deployment](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/ops/FLY_IO_DEPLOYMENT_GUIDE.md)** | Deploy to Fly.io with persistent storage |
| **[Termux Guide](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/TERMUX_GUIDE.md)** | Run OmniRoute on Android via Termux |
| **[PWA Guide](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/PWA_GUIDE.md)** | Progressive Web App install, caching, architecture |
| **[Uninstall Guide](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/UNINSTALL.md)** | Clean removal for all install methods |
| **[Environment Config](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/reference/ENVIRONMENT.md)** | Complete `.env` variables and references |

### 🧠 Features & Architecture

| Document | Description |
| --- | --- |
| **[Architecture](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/architecture/ARCHITECTURE.md)** | System architecture, data flow, and internals |
| **[Compression Guide](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/compression/COMPRESSION_GUIDE.md)** | 7-option pipeline: off / lite / standard / aggressive / ultra / RTK / stacked |
| **[RTK Compression](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/compression/RTK_COMPRESSION.md)** | Command-output compression, filters, trust, verify, raw-output recovery |
| **[Compression Engines](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/compression/COMPRESSION_ENGINES.md)** | Caveman, RTK, stacked pipelines, dashboard/API/MCP surfaces |
| **[Compression Rules Format](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/compression/COMPRESSION_RULES_FORMAT.md)** | JSON rule-pack schemas for Caveman and RTK filters |
| **[Compression Language Packs](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/compression/COMPRESSION_LANGUAGE_PACKS.md)** | Language detection and Caveman rule-pack authoring |
| **[Resilience Guide](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/architecture/RESILIENCE_GUIDE.md)** | Circuit breakers, cooldowns, queue, anti-thundering herd, TLS spoofing |
| **[Auto-Combo Engine](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/routing/AUTO-COMBO.md)** | 16-factor scoring, mode packs, self-healing |
| **[Proxy Guide](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/ops/PROXY_GUIDE.md)** | 3-level proxy system, 1proxy marketplace, registry CRUD |
| **[Free Tiers](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/reference/FREE_TIERS.md)** | Consolidated directory: 34 documented recurring pools / 444 cataloged free-tier entries |
| **[Features Gallery](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/FEATURES.md)** | Visual dashboard tour with screenshots |
| **[Codebase Documentation](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/architecture/CODEBASE_DOCUMENTATION.md)** | Beginner-friendly codebase walkthrough |

### 🤖 Protocols & APIs

| Document | Description |
| --- | --- |
| **[API Reference](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/reference/API_REFERENCE.md)** | All endpoints with examples |
| **[OpenAPI Spec](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/openapi.yaml)** | OpenAPI 3.0 specification |
| **[MCP Server](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/open-sse/mcp-server/README.md)** | 110 MCP tools, IDE configs, Python/TS/Go clients |
| **[MCP Server Guide](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/frameworks/MCP-SERVER.md)** | MCP installation, transports, and tool reference |
| **[A2A Server](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/src/lib/a2a/README.md)** | JSON-RPC 2.0 protocol, skills, streaming, task mgmt |
| **[A2A Server Guide](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/frameworks/A2A-SERVER.md)** | A2A agent card, tasks, skills, and streaming |

### 📋 Project & Quality

| Document | Description |
| --- | --- |
| **[Contributing](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/CONTRIBUTING.md)** | Development setup and guidelines |
| **[Branching & Release Model](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/ops/BRANCHING_MODEL.md)** | Where PRs target (`release/*`), what `main` and tags mean |
| **[Changelog](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/CHANGELOG.md)** | Full per-version release history |
| **[Security Policy](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/SECURITY.md)** | Vulnerability reporting and security practices |
| **[i18n Guide](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/guides/I18N.md)** | 42-language support, translation workflow, RTL |
| **[Release Checklist](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/ops/RELEASE_CHECKLIST.md)** | Pre-release validation steps |
| **[Coverage Plan](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/ops/COVERAGE_PLAN.md)** | Test coverage strategy for 39,000+ static test declarations across 5,100+ tracked test files |

## ⭐ Top Contributors

> OmniRoute is shaped by a passionate open-source community. These individuals have made exceptional contributions that directly impact the quality, stability, and reach of the project. **Thank you.**

### External contributors by merged pull requests

| Rank | Contributor | Merged PRs | ~Changed lines |
| --- | --- | --- | --- |
| 1 | [**backryun**](https://github.com/backryun) | 190 | 227,977 |
| 2 | [**oyi77**](https://github.com/oyi77) | 180 | 407,678 |
| 3 | [**rdself**](https://github.com/rdself) | 145 | 80,663 |
| 4 | [**JxnLexn**](https://github.com/JxnLexn) | 128 | 387,049 |
| 5 | [**KooshaPari**](https://github.com/KooshaPari) | 101 | 125,747 |
| 6 | [**herjarsa**](https://github.com/herjarsa) | 88 | 230,872 |
| 7 | [**RaviTharuma**](https://github.com/RaviTharuma) | 79 | 55,106 |
| 8 | [**maxmad64bis**](https://github.com/maxmad64bis) | 69 | 394,715 |
| 9 | [**artickc**](https://github.com/artickc) | 59 | 33,260 |
| 10 | [**HouMinXi**](https://github.com/HouMinXi) | 51 | 47,334 |
| 10 | [**chirag127**](https://github.com/chirag127) | 51 | 5,153 |
| 12 | [**xz-dev**](https://github.com/xz-dev) | 50 | 245,976 |
| 13 | [**hartmark**](https://github.com/hartmark) | 47 | 52,185 |
| 14 | [**rqzbeh**](https://github.com/rqzbeh) | 39 | 143,181 |
| 15 | [**dhaern**](https://github.com/dhaern) | 34 | 19,559 |
| 16 | [**Dingding-leo**](https://github.com/Dingding-leo) | 33 | 1,986 |
| 17 | [**NomenAK**](https://github.com/NomenAK) | 32 | 13,854 |
| 18 | [**MumuTW**](https://github.com/MumuTW) | 30 | 16,953 |
| 19 | [**benzntech**](https://github.com/benzntech) | 29 | 11,641 |
| 20 | [**pacocartones**](https://github.com/pacocartones) | 24 | 9,331 |
| 20 | [**Prudhvivuda**](https://github.com/Prudhvivuda) | 24 | 6,312 |

<sub>Frozen at live <code>release/v3.8.50</code> tip <code>dafb4ae808</code>, with merges through 2026-08-24 05:26:03 UTC. The paginated GitHub GraphQL census contains 5,911 merged PRs: 2,707 by the repository owner, 179 by Dependabot, and <b>3,025 external PRs from 535 distinct contributors</b>. “Changed lines” is GitHub additions + deletions and includes generated files, lockfiles, catalogs, translations and documentation; it is churn, not authored LOC. Ties at the cutoff are retained.</sub>

### GitHub-attributed commits

| [![[6d8651864f0a3a04c222e4f721fd6d74_MD5.png]]   **backryun**](https://github.com/backryun)   <sub>🥇 220 GitHub-attributed commits</sub> | [![[c1ef14600fdb7eeb0ccb68e7e0dcd1c2_MD5.jpg]]   **Paijo**](https://github.com/oyi77)   <sub>🥈 219 GitHub-attributed commits</sub> | [![[d12c8ed724489011619f4f1133a3cfe5_MD5.jpg]]   **Randi**](https://github.com/rdself)   <sub>🥉 108 GitHub-attributed commits</sub> | [![[9afc7eb7d3c767d80e144529f947eccc_MD5.jpg]]   **Ravi Tharuma**](https://github.com/RaviTharuma)   <sub>🏅 81 GitHub-attributed commits</sub> | [![[fd026b63ca7ebaecb7a53e8e4d74b903_MD5.jpg]]   **Chris**](https://github.com/christopher-s)   <sub>🏅 70 GitHub-attributed commits</sub> | [![[ca8886ddfa8bfd619fde3b8822611d3c_MD5.png]]   **Markus Hartung**](https://github.com/hartmark)   <sub>🏅 69 GitHub-attributed commits · tied #6</sub> |
| --- | --- | --- | --- | --- | --- |
| [![[1d4fa2b0615821cd823709fef03ec264_MD5.png]]   **Dizzle**](https://github.com/maxmad64bis)   <sub>🏅 69 GitHub-attributed commits · tied #6</sub> | [![[8b4c35eacf12d95116adb72e92e0bcc9_MD5.png]]   **Jan Leon**](https://github.com/JxnLexn)   <sub>🏅 64 GitHub-attributed commits</sub> | [![[295a4b1b66317b9c61ad961fa7af316f_MD5.png]]   **zenobit**](https://github.com/zen0bit)   <sub>🏅 62 GitHub-attributed commits</sub> | [![[710c538ac9d7835cb6fda954524b43ec_MD5.png]]   **Bob.Hou**](https://github.com/HouMinXi)   <sub>🏅 51 GitHub-attributed commits · tied #10</sub> | [![[ad340f34189b80525f2a934730ff8347_MD5.jpg]]   **Xiangzhe**](https://github.com/xz-dev)   <sub>🏅 51 GitHub-attributed commits · tied #10</sub> |  |

<sub>Rechecked at 2026-08-24 06:14:31 UTC: GitHub-attributed commits reported by the repository Contributors API for the <code>release/v3.8.50</code> default branch. The API returned 525 identities (415 users, 2 bots, 108 anonymous); this table excludes the maintainer, bots and anonymous identities and retains competition ties. It is distinct from both the merged-PR ranking above and the 639-person Git-metadata census below.</sub>

> 🙏 These contributors' features, bug fixes, and infrastructure improvements are a **core part** of what makes OmniRoute reliable and feature-rich. Every pull request, every test case, and every i18n translation file matters. Open source is built by people like them.

---

## 💖 Sponsors

A heartfelt thank-you to the people who fund OmniRoute out of their own pocket — every contribution keeps the project free, independent and moving.

| [![[7c126252713f0cd559a15a788605ce3a_MD5.png]]  **Andrew**](https://github.com/drewbitt)   <sub>💛 Active monthly sponsor</sub> | [![[487b55171140da12057ebe81331fa4c4_MD5.jpg]]  **Vlad I**](https://github.com/psylligent)   <sub>💛 Active monthly sponsor</sub> | [![[756225b60e26dd52a0c2cf484d0c5f43_MD5.jpg]]  **Paco Cartones**](https://github.com/pacocartones)   <sub>💛 Active one-time sponsor</sub> | [![[855a9ea79b7e7290ae4ab2645823866d_MD5.jpg]]  **Prof. Igor Morais**](https://github.com/igormorais123)   <sub>💛 Past one-time supporter</sub> | [![[4e98e0a24c79ac11c8ab27c781602f12_MD5.jpg]]  **longtao**](https://github.com/longtao77)   <sub>💛 Past one-time supporter</sub> |
| --- | --- | --- | --- | --- |

<sub>… and others who prefer to stay private 💛</sub>

<sub>Public GitHub Sponsors revalidated on 2026-08-24. GitHub's <code>activeOnly</code> status determines the active labels above; previously disclosed public one-time supporters remain thanked, and private sponsors remain anonymous.</sub>

**[💖 Become a sponsor →](https://github.com/sponsors/diegosouzapw)** — every dollar keeps OmniRoute free and independent.

## 👥 600+ Contributors

[![[62f90a526f44e9ecf6bd179c59f02d2e_MD5.svg]]](https://github.com/diegosouzapw/OmniRoute/graphs/contributors)

<sub>Audited on 2026-08-24 at frozen base <code>ac02c5b42f</code> and rechecked at live <code>release/v3.8.50</code> tip <code>dafb4ae808</code>: <b>639 normalized human Git identities</b> — 407 appear as commit authors (including the maintainer) and 232 only in explicit <code>Co-authored-by</code> trailers. The census normalizes GitHub noreply handles, excludes 26 bot/agent/service/placeholder identities, and does not merge ordinary email addresses merely because their display names match.</sub>

### How to Contribute

1. Fork the repository
2. Branch from the **active** `release/vX.Y.Z` tip (not `main`) — see [Branching & Release Model](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/docs/ops/BRANCHING_MODEL.md)
3. Create your feature branch (`git checkout -b feat/amazing-feature`)
4. Commit your changes (`git commit -m 'feat: add amazing feature'`)
5. Push to the branch (`git push origin feat/amazing-feature`)
6. Open a Pull Request with **base = that `release/vX.Y.Z` branch**

See [CONTRIBUTING.md](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/CONTRIBUTING.md) for detailed guidelines.

### Releasing a New Version

```
# Create a release — npm publish happens automatically
VERSION=x.y.z
gh release create "v${VERSION}" --title "v${VERSION}" --generate-notes
```

## 📊 Stars

[

![[6cb8572c099a74ac56ba802f5b441c2a_MD5.svg]]

](https://www.star-history.com/?repos=diegosouzapw%2FOmniRoute&type=date&legend=top-left)  

## 🌍 StarMapper

[

![[ac5af75ef595108729ea5ed0924bfc6b_MD5.svg]]

](https://starmapper.bruniaux.com/diegosouzapw/omniroute)

## 🙏 Acknowledgments

OmniRoute stands on the shoulders of giants. It started as a fork of **[9router](https://github.com/decolua/9router)** and a TypeScript port of the Go project **[CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI)** — and from there, every subsystem below was inspired by an open-source project that got there first. Each one shaped a concrete piece of OmniRoute. This is our thank-you to all of them. 🙏

> ⭐ star counts verified from GitHub's REST API on August 24, 2026 — go give these projects a star. Counts are an exact dated snapshot and will naturally change.

### 🧬 Lineage & gateway

| Project | ⭐ | How it inspired OmniRoute |
| --- | --- | --- |
| **[9router](https://github.com/decolua/9router)** | 26,161 | The original project this fork is built on — extended here with multi-modal APIs and a full TypeScript rewrite. |
| **[CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI)** | 48,497 | The Go implementation that inspired this JavaScript / TypeScript port. |
| **[LiteLLM](https://github.com/BerriAI/litellm)** | 57,100 | The AI gateway whose public pricing dataset feeds our cost-tracking sync and whose provider-normalization model informed our routing. |
| **[codex-chatgpt-web](https://github.com/miuuyy/codex-chatgpt-web)** | 1,410 | MIT source adapted into the vendored ChatGPT Web → Codex Responses bridge, including browser-session, response-framing, usage and web-search adapters. |
| **[free-claude-code](https://github.com/Alishahryar1/free-claude-code)** | 48,112 | Patterns ported into stream recovery, no-thinking aliases, fallback web search, sliding-window limits, log redaction and hardened launcher flows. |
| **[composer-api](https://github.com/standardagents/composer-api)** | 322 | Cursor Composer tool-choice, output-constraint and tool-commit patterns adapted into the native Cursor executor. |
| **[codex-multi-auth](https://github.com/ndycode/codex-multi-auth)** | 457 | Fresh-login and refresh-token rotation patterns ported into Codex OAuth reauthentication. |
| **[opencode-anthropic-auth](https://github.com/ex-machina-co/opencode-anthropic-auth)** | 510 | Claude Code-compatible transform defaults and billing-header behavior generalized into OmniRoute's config-driven bridge. |
| **[grok2api-merged](https://github.com/520mmxx/grok2api-merged)** | 2 | Its Grok model mappings, fake-TypeError Statsig generator, request and device defaults, and NDJSON response processor were materially adapted into OmniRoute's Grok Web executor. |
| **[TQZHR/grok2api](https://github.com/TQZHR/grok2api)** | 705 | The principal transitive code source behind grok2api-merged; its model, header, payload, Statsig and processor implementations are preserved in the Grok Web lineage. |
| **[chenyme/grok2api](https://github.com/chenyme/grok2api)** | 7,520 | The underlying MIT source for Grok payload and device defaults, the Statsig generator, and the `result.response` processor carried through TQZHR and grok2api-merged. |
| **[grok2api-pro](https://github.com/miuzhaii/grok2api-pro)** | 27 | A transitive source credited by grok2api-merged for its proxy-pool layer; OmniRoute preserves that lineage notice but does not claim a proxy-pool port in its bounded Grok Web executor. |
| **[GrokProxy](https://github.com/CNFlyCat/GrokProxy)** | 50 | Its cookie-authenticated Grok proxy and `result.response.token` streaming pattern informed OmniRoute's Grok Web transport. |
| **[GrokBridge](https://github.com/lianying1716/GrokBridge)** | 5 | The original Grok Web implementation consulted its HTTP/browser upstream design; its direct HTTP path derives from GrokProxy, so no independent code port is claimed. |
| **[grok-web-api](https://github.com/imjustprism/grok-web-api)** | 14 | Its Rust `ChatOptions` and response-envelope schemas informed OmniRoute's TypeScript Grok request and streaming-response types. |

### 🗜️ Context & token compression — engines

| Project | ⭐ | How it inspired OmniRoute |
| --- | --- | --- |
| **[Caveman](https://github.com/JuliusBrussee/caveman)** | 100,538 | The viral "why use many token when few token do trick" project — its caveman-speak philosophy powers our standard compression mode and 30+ filler/condensation rules. |
| **[RTK – Rust Token Killer](https://github.com/rtk-ai/rtk)** | 77,185 | High-performance command-output compression — inspired our RTK engine, JSON filter DSL, raw-output recovery and the stacked RTK → Caveman pipeline. |
| **[headroom](https://github.com/headroomlabs-ai/headroom)** | 67,310 | Reversible context-compression (SmartCrusher) — inspired our `headroom` engine and the `ccr` retrieve-marker pattern. |
| **[LLMLingua](https://github.com/microsoft/LLMLingua)** | 6,598 | Prompt-compression research (LLMLingua / LLMLingua-2) — inspired our async, code-safe, fail-open `llmlingua` engine. |
| **[llmlingua-2-js](https://github.com/atjsh/llmlingua-2-js)** | 31 | The JS/ONNX port (MobileBERT / XLM-RoBERTa) used as the worker-thread backend for our LLMLingua engine. |
| **[Troglodita](https://github.com/leninejunior/troglodita)** | 40 | PT-BR token compression — powers our pt-BR language pack: pleonasm reduction and filler removal tuned for Brazilian-Portuguese grammar. |
| **[ponytail](https://github.com/DietrichGebert/ponytail)** | 108,957 | The viral "lazy senior dev" YAGNI-coder skill — inspired our **less-code** Output Style: smallest-working-change steering that cuts \_generated\_ code (the output-axis sibling to Caveman's terse prose). |
| **[i-have-adhd](https://github.com/ayghri/i-have-adhd)** | 23,526 | Its action-first, ADHD-friendly response style was adapted into OmniRoute's concise output style across five languages. |

### 🧩 Compact formats, token research & code-aware tooling

| Project | ⭐ | How it inspired OmniRoute |
| --- | --- | --- |
| **[TOON](https://github.com/toon-format/toon)** | 25,233 | Token-Oriented Object Notation — its columnar, header-plus-rows model shaped our tabular compaction stage. |
| **[GCF – Graph Compact Format](https://github.com/blackwell-systems/gcf)** | 41 | Its compact graph format and generic-profile design informed OmniRoute's tabular compaction and Headroom codec format. |
| **[gcf-typescript](https://github.com/blackwell-systems/gcf-typescript)** | 4 | The MIT TypeScript implementation directly vendored and extended as the Headroom generic-profile codec. |
| **[token-optimizer-mcp](https://github.com/ooples/token-optimizer-mcp)** | 494 | Brotli/SQLite cache + per-session context-delta — inspired our `session-dedup` engine. |
| **[token-savior](https://github.com/Mibayy/token-savior)** | 1,122 | Bash-output compaction + MCP profiles — inspired our compression bail-out discipline and MCP tool-manifest reduction. |
| **[token-saver](https://github.com/ppgranger/token-saver)** | 138 | Content-aware, per-file-type output compression with failure-aware bail-out — validated our per-type dispatch and minimum-gain skip. |
| **[token-optimizer](https://github.com/alexgreensh/token-optimizer)** | 1,951 | "Find the ghost tokens" — its offload + recoverable-handle pattern informed our CCR offload thinking. |
| **[TokenMizer](https://github.com/Shweta-Mishra-ai/tokenmizer)** | 28 | A session-graph + cross-turn line-dedup blueprint that informed our session-dedup design. |
| **[OmniCompress](https://github.com/jessefreitas/OmniCompress)** | 3 | Rust columnar-JSON + content-addressed retrieve + cross-message dedup — validated our `headroom` / `ccr` / `session-dedup` engine design and the cache-stable "compressed form is position-independent" invariant. |
| **[mcp-compressor](https://github.com/atlassian-labs/mcp-compressor)** | 113 | MCP tool-schema/description compression — informed our MCP tool-manifest cardinality reduction. |
| **[RepoMapper](https://github.com/pdavis68/RepoMapper)** | 197 | Aider-style repo-map ranking — informed our repo-map / retrieval-ranking exploration. |
| **[quiet-shell-mcp](https://github.com/mrsimpson/quiet-shell-mcp)** | 4 | Declarative shell-output reduction over MCP — validated our declarative bash-output compaction. |
| **[ts-morph](https://github.com/dsherret/ts-morph)** | 6,162 | TypeScript Compiler API toolkit — inspired our parser-based comment removal that preserves string, template and regex literals. |

### 🧠 Memory & RAG

| Project | ⭐ | How it inspired OmniRoute |
| --- | --- | --- |
| **[Mem0](https://github.com/mem0ai/mem0)** | 63,902 | Universal memory layer — its proxy-as-write/read-boundary model shaped our memory architecture. |
| **[Letta (MemGPT)](https://github.com/letta-ai/letta)** | 24,382 | Stateful agents with tiered memory — inspired our Context Control & Recovery (CCR) tiered model. |
| **[WFGY](https://github.com/onestardao/WFGY)** | 1,781 | The ProblemMap taxonomy of 16 recurring RAG/LLM failure modes — the shared vocabulary in our troubleshooting guide. |

### 🛰️ Traffic inspection, MITM & transparent proxy

| Project | ⭐ | How it inspired OmniRoute |
| --- | --- | --- |
| **[llm-interceptor](https://github.com/chouzz/llm-interceptor)** | 66 | MITM interception/analysis of coding-assistant ↔ LLM traffic informed early Traffic Inspector requirements. Four previously derived modules — SSE merging, conversation normalization, secret masking and header sanitization — have been replaced by independent clean-room implementations based on public protocol standards. The two host-passthrough surfaces (`passthrough.ts` and `_internal/bypass.cjs`) remain OmniRoute-internal implementations classified independently; they were not rewritten as part of that replacement. |
| **[ProxyBridge](https://github.com/InterceptSuite/ProxyBridge)** | 5,995 | Transparent per-process proxy routing — inspired our crash-safe MITM teardown, socket idle-timeouts, `/proc` process attribution and TPROXY capture. |

### 📚 Model data, observability & UI

| Project | ⭐ | How it inspired OmniRoute |
| --- | --- | --- |
| **[models.dev](https://github.com/anomalyco/models.dev)** | 6,555 | Open database of AI model specs, pricing and capabilities — synced natively into our model catalog. |
| **[React Flow / xyflow](https://github.com/xyflow/xyflow)** | 38,108 | The node-based graph library powering our real-time Compression Studio and Combo/Routing Studio. |
| **[LangGraph](https://github.com/langchain-ai/langgraph)** | 40,314 | LangGraph Studio's live workflow-graph visualization inspired our Studios' real-time cascade view. |
| **[Langfuse](https://github.com/langfuse/langfuse)** | 33,592 | Its trace → span → generation observability model shaped our Compression Studio waterfall. |
| **[Kiali](https://github.com/kiali/kiali)** | 3,631 | Istio service-mesh observability — inspired our circuit-breaker badges and error-edge visuals in the Routing/Combo Studio. |
| **[lobe-icons](https://github.com/lobehub/lobe-icons)** | 2,428 | AI/LLM brand logos that render the provider icons across our dashboard. |
| **[flag-icons](https://github.com/lipis/flag-icons)** | 12,354 | Provides the MIT-licensed SVG flags used by the README language selector. |

### 🛡️ Security

| Project | ⭐ | How it inspired OmniRoute |
| --- | --- | --- |
| **[awesome-secure-defaults](https://github.com/tldrsec/awesome-secure-defaults)** | 721 | A curated list of secure-by-default libraries that guides our security choices (Helmet.js, DOMPurify, ssrf-req-filter, safe-regex, Google Tink). |

### 🧭 Complementary tools

| Project | ⭐ | How it inspired OmniRoute |
| --- | --- | --- |
| **[ClawRouter](https://github.com/BlockRunAI/ClawRouter)** | 6,564 | Inspired request deduplication, emergency zero-cost fallback, pluggable Auto-Combo strategies and multilingual intent classification. |
| **[Antigravity-Manager](https://github.com/lbjlaq/Antigravity-Manager)** | 30,652 | Its account-aware model remapping, executable-path validation and plan-label behavior informed OmniRoute's Antigravity runtime. |
| **[vscode-antigravity-cockpit](https://github.com/jlcodes99/vscode-antigravity-cockpit)** | 4,817 | Its compact quota-reset countdown format inspired the corresponding provider-limit display in OmniRoute. |
| **[AionUi](https://github.com/iOfficeAI/AionUi)** | 32,230 | Its ACP integrations inspired OmniRoute's automatic detection of installed CLI agents. |
| **[CodexBar](https://github.com/steipete/CodexBar)** | 20,507 | Identified the Grok Build quota surface; OmniRoute then verified and corrected the live wire format independently. |

## 📄 License

MIT License - see [LICENSE](https://github.com/diegosouzapw/OmniRoute/blob/release/v3.8.51/LICENSE) for details.

---

**[⬆ Back to top](#-omniroute)** · Built with ❤️ for the open-source AI community.

<sub>OmniRoute v3.8.51 · Node ≥22.22.2 · MIT License · <a href="https://omniroute.online/">omniroute.online</a></sub>