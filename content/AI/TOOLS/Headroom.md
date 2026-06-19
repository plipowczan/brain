---
title: "Headroom"
date: 2026-06-14
enableToc: true
openToc: true
tags: ["tool", "ai", "claude-code", "token-optimization", "cost-optimization", "context-engineering", "open-source", "apache-2.0"]
type: tool
source: "_raw/processed/2026-06-14_yt-zjFE-dBzP_E_you-need-to-try-these-open-source-ai-projects-right-now.md"
agent-created: true
agent-reviewed: 2026-06-19
summary: "chopratejas/headroom — compresses everything an AI agent reads (tool outputs, logs, RAG chunks, files, history) before it hits the LLM. 60–95% fewer tokens, same answers. Library, proxy, or MCP. Apache 2.0."
---

# Headroom

## 🚀 Description

[chopratejas/headroom](https://github.com/chopratejas/headroom) — compresses everything your AI agent reads **before it reaches the LLM**: tool outputs, logs, RAG chunks, files, and conversation history. Same answers, a fraction of the tokens. Apache 2.0, ~18k stars and climbing fast in June 2026.

It sits in front of the model as a transparent proxy. Compression is **reversible** — originals stay local and the model can call `headroom_retrieve` to pull full context when it actually needs it, so quality isn't degraded.

The pitch that lands for me: on heavy [[Claude Code]] / [[Cursor]] / Codex sessions it can stretch your quota far enough to keep working *more than an hour* before hitting limits — directly addressing the same pain as [[Token Optimization for Claude Code]] and [[Caveman]], but on the **input/context** side.

## 🧩 Features

- **Wraps any agent harness** — `headroom wrap claude` launches [[Claude Code]] with Headroom intercepting context in front of the model; also Cursor / Codex / Copilot.
- **Three delivery modes** — Python library, transparent proxy, or MCP server.
- **Smart compressors** — AST-aware code compression, JSON (SmartCrusher), and text (ModernBERT-based); 70–95% reduction on boilerplate.
- **Measured savings** (from the video): code search 17k→1.4k tokens (92%), incident debugging 65k→5k (92%), GitHub issue tracking 54k→14k (73%), codebase exploration 78k→41k (47%).
- **Quality preserved** — benchmarked on GSM8K, TruthfulQA, SQuAD v2, BFCL with near-perfect retention.
- **`headroom perf`** — per-model breakdown of tokens saved, cache performance, optimization overhead.
- **`headroom learn`** — mines failed sessions and writes corrections to `CLAUDE.md` / `AGENTS.md` / `GEMINI.md`.
- **Output token reduction** (`HEADROOM_OUTPUT_SHAPER=1`) — trims what the model *writes back*, not just what you send (output costs ~5× input on Opus-class). Two levers from the proxy, no code changes: **verbosity steering** (appends a "be terse, don't restate context" note to the system prompt so the cache still hits) and **effort routing** (dials thinking effort down when a turn is just resuming after a tool result, keeps full effort on new questions/errors). `headroom learn --verbosity` infers your preferred terseness from past sessions.
- **Cross-agent memory** — shared store across [[Claude Code]] / Codex / Gemini with agent provenance and auto-dedup; `SharedContext` passes compressed context across multi-agent workflows.
- **CCR (reversible)** — the named mechanism behind reversibility: originals cached locally, model calls `headroom_retrieve` within TTL.
- **Copilot CLI subscription mode** — `headroom wrap copilot --subscription` routes GitHub Copilot CLI subscription traffic through the local proxy, exchanging a Headroom-specific OAuth token for Copilot's short-lived API token.

## 📊 Compared to

Headroom's pitch vs. neighbours: it runs **locally**, covers **all** content (tools, RAG, logs, files, history), works across frameworks, and is **reversible** — where [RTK](https://github.com/rtk-ai/rtk) (shell-output only) and [lean-ctx](https://github.com/yvgude/lean-ctx) (CLI/MCP) are local but not reversible, hosted APIs (Compresr, Token Co.) are neither local nor reversible, and OpenAI Compaction is provider-native conversation history only. Headroom actually **ships the RTK binary** and can use lean-ctx as its CLI context tool (`HEADROOM_CONTEXT_TOOL=lean-ctx`).

## Reasoning for

The input-side complement to [[Caveman]] (which shrinks *output* tokens). Together they attack both halves of the bill. Fits squarely in the [[Context Engineering]] / [[Progressive Disclosure]] toolkit — instead of curating what the agent fetches, Headroom compresses whatever it does fetch, transparently. Worth trialing on [[Qamera AI]] / [[PLSoft]] agent work where long codebase-exploration loops burn quota.

## ⚠️ Caveats

- Installs **Serena** by default (unrelated MCP) — pass `--no-sa` during install to skip it.
- **Telemetry on by default** — disable it; the code is open source so you can audit/strip it.

## 🔗 Links

- Repo: https://github.com/chopratejas/headroom (Apache 2.0)
- Install: `pip install "headroom-ai[all]"` then `headroom wrap claude --no-sa`

## 🔗 Related notes

- [[Caveman]] — output-token compression; the natural pairing
- [[Token Optimization for Claude Code]] — broader catalog of token-reduction tools
- [[Context Engineering]] · [[Progressive Disclosure]] — the design context Headroom plugs into
- [[Claude Code]] — primary host harness
- Surfaced in [[Open-Source AI Projects Roundup (Matthew Berman)]]

---
Template: [[templates/tool]]
