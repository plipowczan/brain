---
title: "Headroom"
date: 2026-06-14
enableToc: true
openToc: true
tags: ["tool", "ai", "claude-code", "token-optimization", "cost-optimization", "context-engineering", "open-source", "apache-2.0"]
type: tool
source: "_raw/processed/2026-06-14_yt-zjFE-dBzP_E_you-need-to-try-these-open-source-ai-projects-right-now.md"
agent-created: true
agent-reviewed: 2026-11-13
summary: "headroomlabs-ai/headroom (formerly chopratejas/headroom) — compresses what an AI agent reads (tool outputs, logs, RAG chunks, files, history) before it hits the LLM. Now claims 21–57% fewer input tokens on agent scenarios, 90%+ only on repetitive JSON/logs. Library, proxy, middleware or MCP. Apache 2.0 OSS; paid Enterprise tier from Headroom Labs."
status-checked: 2026-11-13
project-status: active
repo: "https://github.com/headroomlabs-ai/headroom"
---

# Headroom

> [!success] Status check 2026-11-13 — active
> **Verdict:** Commits landed on main on 2026-11-12 and 2026-11-13, and releases ship every one to two weeks (v0.42.0 2026-10-26, v0.43.0/0.43.1 2026-11-05, v0.44.0 2026-11-10).
> **Last release:** v0.44.0, 2026-11-10 (GitHub release; CHANGELOG dates it 2026-11-09). · **last commit:** 2026-11-13 · **licence:** Apache-2.0 for the whole repo (LICENSE + NOTICE); the README states everything in the repo stays Apache-2.0.
> **Repo:** https://github.com/headroomlabs-ai/headroom — **moved/renamed:** Yes. The repo was transferred from chopratejas/headroom to the headroomlabs-ai organisation, between v0.27.0 (2026-06-22, last CHANGELOG entry with chopratejas compare links) and v0.28.0 (2026-06-29, first with headroomlabs-ai links)…
> **Changed since this note:** Large changes between v0.25/0.26 (note time) and v0.44.0. (1) Ownership: moved to the headroomlabs-ai org with a company and an Enterprise upsell; the README now says Headroom OSS 'saves less than it could' and points teams to Headroom Enterprise.

## 🚀 Description

[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) — compresses everything your AI agent reads **before it reaches the LLM**: tool outputs, logs, RAG chunks, files, and conversation history. Same answers, fewer input tokens. Apache 2.0. When I wrote this note in June 2026 it was ~18k stars under `chopratejas/headroom`; on 2026-11-13 it is ~79.5k stars, latest release **v0.44.0** (2026-11-10, same version on PyPI and npm as `headroom-ai`).

**Ownership moved.** Between v0.27.0 (2026-06-22) and v0.28.0 (2026-06-29) the repo was transferred from `chopratejas/headroom` to the **headroomlabs-ai** organisation; old GitHub URLs redirect. It is now run by a company, Headroom Labs (headroomlabs.ai): docs moved to docs.headroomlabs.ai and the Docker image to `ghcr.io/headroomlabs-ai/headroom`. The package names did not change. The README now has a "Headroom for teams" section saying the OSS version was built for one developer's laptop and "saves less than it could", and points teams to a paid **Headroom Enterprise** (the README lists more cost savings, "tokens secured", on-premise deployment and "deep attribution"; sales contact only, no public pricing in the README). Licensed Enterprise extensions read a `HEADROOM_LICENSE` key, and since v0.40.0 their cloud usage reporting is opt-in. The README states everything in the repo stays Apache 2.0.

It sits in front of the model as a transparent proxy. Compression is **reversible** — originals stay local and the model can call `headroom_retrieve` to pull full context when it actually needs it, so quality isn't degraded.

The pitch that lands for me: on heavy [[Claude Code]] / [[Cursor]] / Codex sessions it can stretch your quota far enough to keep working *more than an hour* before hitting limits — directly addressing the same pain as [[Token Optimization for Claude Code]] and [[Caveman]], but on the **input/context** side. (That was the video's claim; the project's own numbers are now much more modest, see Features.)

## 🧩 Features

- **Wraps any agent harness** — `headroom wrap claude` launches [[Claude Code]] with Headroom intercepting context in front of the model. The list is now much longer: Codex, Grok CLI, Copilot CLI, VS Code Copilot (`headroom wrap vscode`), Claude Code in VS Code (`headroom wrap vscode-claude`), Aider, OpenCode, Cline, Continue, Goose, OpenHands, OpenClaw, Mistral Vibe, Oh My Pi, Factory Droid, Kimi CLI, ZCode. Cursor is manual setup (it starts the proxy and prints base URLs). `headroom unwrap <tool>` undoes durable wrapping; `headroom deploy` sets up a persistent proxy that survives reboots.
- **Four delivery modes** — Python/TypeScript library, transparent proxy, framework middleware (LiteLLM, LangChain, Vercel AI SDK, Agno, Strands, ASGI), or MCP server (`headroom_compress`, `headroom_retrieve`, `headroom_stats`). The `headroom` CLI ships only in the PyPI package; npm `headroom-ai` is the TypeScript SDK.
- **Smart compressors** — AST-aware code compression (CodeCompressor), JSON (SmartCrusher), and text via **Kompress-v2-base**, Headroom's own Hugging Face model (`chopratejas/kompress-v2-base`) trained on agentic traces, which replaced the ModernBERT-based compressor I noted in June. Image compression was added too. Live-zone compression only touches new bytes, so the provider prompt-cache prefix stays byte-identical. There is now also a Rust core next to the Python code.
- **Measured savings** — the video's figures (code search 17k→1.4k tokens, 92%; incident debugging 65k→5k, 92%; GitHub issue tracking 54k→14k, 73%; codebase exploration 78k→41k, 47%) and the README's old "60–95% fewer tokens" headline are gone. The current README reports seeded, offline numbers on four agent scenarios: code search 17,199→13,597 (**21%**), SRE incident 55,957→24,340 (**57%**), codebase exploration 58,801→33,895 (**42%**), GitHub issue triage 46,067→32,429 (**30%**). Repeated JSON arrays and log lines clear 90%; prose compresses very little. The repo description now says "20% fewer tokens for coding agents, 60–95% fewer tokens for JSON".
- **Quality preserved** — GSM8K 0.870 → 0.870, TruthfulQA 0.530 → 0.560 (inside the confidence interval at N=100, so no detectable difference), SQuAD v2 97% at 19% compression, BFCL 97% at 32% compression.
- **`headroom perf`** — per-model breakdown of tokens saved, cache performance, optimization overhead. `headroom doctor`, `headroom dashboard` and `headroom savings` sit next to it.
- **`headroom learn`** — mines failed sessions and writes corrections to `CLAUDE.local.md` by default (gitignored), or with `--target` to `CLAUDE.md` / `AGENTS.md` / `GEMINI.md` / `GROK.md`.
- **Output token reduction** (`HEADROOM_OUTPUT_SHAPER=1`, off by default) — trims what the model *writes back*, not just what you send (output costs ~5× input on Opus-class). The current README documents one lever from the proxy: **verbosity steering** (appends a "be terse, don't restate context" note to the end of the system prompt so the cache still hits). In June it also described **effort routing** (dialling thinking effort down on turns that just resume after a tool result); the README no longer mentions it, and I could not confirm on 2026-11-13 whether it still exists. `headroom learn --verbosity` infers your preferred terseness from past sessions; `headroom output-savings` gives an estimate with a confidence range.
- **Cross-agent memory** — shared store across [[Claude Code]] / Codex / Gemini / Grok with agent provenance and auto-dedup; `SharedContext` passes compressed context across multi-agent workflows.
- **CCR (reversible)** — the named mechanism behind reversibility: originals cached locally, model calls `headroom_retrieve` within TTL.
- **Copilot CLI subscription mode** — `headroom copilot-auth login`, then `headroom wrap copilot --subscription`, routes GitHub Copilot CLI subscription traffic through the local proxy, exchanging a Headroom-specific OAuth token for Copilot's short-lived API token.
- **Model routing (opt-in)** — the proxy can rewrite the upstream model by request size and tool use (`HEADROOM_MODEL_ROUTER_ENABLED`, Anthropic path); v0.44.0 added a log-only shadow mode.

## 📊 Compared to

Headroom's pitch vs. neighbours: it runs **locally**, covers **all** content (tools, RAG, logs, files, history), works across frameworks, and is **reversible** — where [RTK](https://github.com/rtk-ai/rtk) (shell-output only) and [lean-ctx](https://github.com/yvgude/lean-ctx) (CLI/MCP) are local but not reversible, hosted APIs (Compresr, Token Co.) are neither local nor reversible, and OpenAI Compaction is provider-native conversation history only. (The current README's comparison table keeps only the hosted APIs and OpenAI Compaction.)

Until mid-2026 Headroom also **shipped the RTK binary** and could use lean-ctx as its CLI context tool (`HEADROOM_CONTEXT_TOOL=lean-ctx`). RTK became opt-in in v0.33.0 (2026-07-29), and both CLI context tools were removed in v0.34.0 (2026-08-05, PR #2677), so that integration no longer exists. The README now names [[Serena]] (opt-in, `headroom wrap --code-memory serena`) as the recommended companion for code navigation, plus [[Ponytail]] for leaner model output, and says any other MCP server (code memory, [[Graphify]], [[Caveman]]) can sit upstream while Headroom compresses downstream of it.

## Reasoning for

The input-side complement to [[Caveman]] (which shrinks *output* tokens). Together they attack both halves of the bill. Fits squarely in the [[Context Engineering]] / [[Progressive Disclosure]] toolkit — instead of curating what the agent fetches, Headroom compresses whatever it does fetch, transparently. Worth trialing on [[Qamera AI]] / [[PLSoft]] agent work where long codebase-exploration loops burn quota.

## ⚠️ Caveats

- **Serena** — when I wrote this note, install added Serena (an unrelated MCP) by default, and the video's tip was to pass `--no-sa` to skip it. Since v0.44.0 (2026-11-09) the wrap makes it opt-in: add `--code-memory serena` if you want it.
- **Telemetry on by default** — an anonymous beacon reports compression ratios, counters, provider and model IDs, OS and architecture (no prompts, completions, code or file paths, per the README). Turn it off with `HEADROOM_TELEMETRY=off`, `HEADROOM_BEACON=off`, `DO_NOT_TRACK=1` or `HEADROOM_OFFLINE=1`. The code is open source so you can audit/strip it.
- **The proxy sees every request** — it is one more failure point in the path of all model traffic.
- **Third-party OpenAI-compatible providers** — `headroom wrap` sends OpenAI-shaped traffic to `api.openai.com` unless you pass `--openai-api-url` or set `OPENAI_TARGET_API_URL`, so a DeepSeek/OpenRouter key would go to OpenAI.
- **OSS vs Enterprise** — the README now explicitly positions the OSS edition below the paid one.
- **Copilot subscription mode** uses a Headroom-specific OAuth token exchange; check that this fits your Copilot terms before relying on it.
- **0.x churn** — breaking changes land in minor versions (MCP servers ported to MCP SDK 2.x in v0.43.0; `[all]` no longer pulls PyTorch extras in v0.44.0, add `[ml]` / `[memory]` for those).

## 🔗 Links

- Repo: https://github.com/headroomlabs-ai/headroom (Apache 2.0; the old https://github.com/chopratejas/headroom URL redirects)
- Docs: https://docs.headroomlabs.ai/docs
- Company / Enterprise: https://headroomlabs.ai
- PyPI: https://pypi.org/project/headroom-ai/ · Changelog: https://github.com/headroomlabs-ai/headroom/blob/main/CHANGELOG.md
- Install (CLI, recommended now): `uv tool install --python 3.13 "headroom-ai[all]"` (or `pip install "headroom-ai[all]"`), then `headroom wrap claude`. No `--no-sa` needed any more, since Serena is off by default.

## 🔗 Related notes

- [[Caveman]] — output-token compression; the natural pairing
- [[Token Optimization for Claude Code]] — broader catalog of token-reduction tools
- [[Context Engineering]] · [[Progressive Disclosure]] — the design context Headroom plugs into
- [[Claude Code]] — primary host harness
- Surfaced in [[Open-Source AI Projects Roundup (Matthew Berman)]]
- [[OmniRoute]] — vendors Headroom's GCF codec as engine #6 of its compression stack
- [[Ponytail]] — the README's recommended companion for leaner model output
- [[billion-context]] — a different bet: the model itself folds and restores conversation ranges

---
Template: [[templates/tool]]
