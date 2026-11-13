---
title: "billion-context"
date: 2026-11-01
enableToc: true
openToc: true
tags: ["tool", "ai", "context-engineering", "token-optimization", "proxy", "coding-agents", "claude-code", "open-source", "mcp"]
type: tool
source: "_raw/processed/2026-11-01_ranxiangleibillion-context.md"
agent-created: true
agent-reviewed: 2026-11-13
summary: "ranxianglei/billion-context (bili) — proxy/plugin that lets the model itself compress and restore conversation ranges, targeting 5x fewer tokens and month-long single sessions on 100K windows"
status-checked: 2026-11-13
project-status: active
---

# billion-context

> [!success] Status check 2026-11-13 — active
> **Verdict:** Commits landed on master on 2026-11-13 (about 100 commits since 2026-11-01), and npm/GitHub releases ship every one to five days (v0.1.211 2026-11-01, v0.1.212 2026-11-02, v0.1.213 2026-11-07).
> **Last release:** v0.1.213, 2026-11-07 (GitHub release; npm billion-context 0.1.213 published the same day). · **last commit:** 2026-11-13 · **licence:** MIT plus an 'Additional Term - Attribution on Product Surfaces': any product or service with a user-facing surface that…
> **Repo:** https://github.com/ranxianglei/billion-context
> **Changed since this note:** On 2026-11-13 the repo added a governance policy for in-app announcements. The 1,500-item benchmark (LongMemEval-S, ContextBench, MemoryAgentBench, run on v0.1.202 by contributor Wang Tian Yi) was added on 2026-10-31, the day before the note.

## 🚀 Description

[ranxianglei/billion-context](https://github.com/ranxianglei/billion-context) ships the `bili` command (alias `bili-proxy`): a context-compression layer that sits between **any** coding agent and its model API. It rewrites Anthropic- and OpenAI-shaped streams using the `acp-kernel` compressor. Pitch: small windows (100K is enough), ~5x fewer tokens, and single sessions that run for months (billions of tokens through one window).

The key design choice: **the model decides when and what to compress**, not a hard truncation limit. Compression is incremental (small ranges), reversible and prefix-cache friendly — the author reports a healthy 95–97% prefix-cache hit rate with compression costing at most 2%.

## 🧩 How it works

1. Parse the request (Anthropic or OpenAI shape)
2. Run acp-kernel compression on the conversation
3. Inject four context-management tools and a "compression philosophy"
4. Forward to the real model API
5. Rewrite the streaming response

Injected tools: `compress` (fold a range into a detailed summary, executed server-side), `decompress` (restore exact details), `search_context` (keyword search over summaries and visible messages), `acp_status` (usage overview and what is still compressible).

**Three ways to attach it:** native plugin (`bili plugin install <client>`), launcher (`bili <client>`, config-free), or a base-URL change using the `/bili/` prefix. Supported clients include Claude Code, Codex, OpenCode, pi, oh-my-pi, Kimi, Hermes, Gemini CLI, Qwen Code, Aider, Copilot CLI, Amp, Crush, Zed and Goose; some are launcher-only because the client has no plugin seam. Native plugins and the older standalone extensions (`billion-context-pi`, `opencode-acp`) are mutually exclusive — both active means double compression.

Install: `npm install -g billion-context --prefix=~/.local` (Linux/macOS; plain `npm install -g` on Windows). npm declares Node ≥ 20, but the README warns that the SQLite storage engine it downloads needs Node ≥ 22 and crashes under 20, so I'd use 22+. Latest release as of 2026-11-13: v0.1.213 (2026-11-07, GitHub and npm).

## ⚖️ Licence — not plain MIT

The LICENSE is MIT **plus an "Additional Term — Attribution on Product Surfaces"**, which is why GitHub shows the licence as NOASSERTION (npm metadata still says plain MIT). The term covers billion-context and its kernels (the `kernel/` directory and the separate `ranxianglei/acp-kernel` repo carry the same text). To comply:

- **If you use or embed it in a product or service end users can see or interact with** (commercial or open source): state visibly, on the home page, in the docs, or on an About / Credits / Acknowledgements page, that the product uses billion-context (and acp-kernel where applicable), with links to https://github.com/ranxianglei/billion-context (and https://github.com/ranxianglei/acp-kernel).
- **If the use is purely server-side or embedded, with no user-facing surface**: carrying the same notice in the shipped documentation is enough.
- On top of that, the usual MIT condition: keep the copyright and licence notice in copies.

For my own use as a local proxy in front of my coding agents this changes nothing; it matters if I ever ship it inside something other people use. The preprint in `paper/` is plain MIT.

## 📄 Evidence

Accompanied by an MIT-licensed preprint, *Model-Driven Incremental Hierarchical Compression: Training-Free Multi-Generational Context Management for Long-Lived Coding Agents*: a 4.5-month longitudinal study over three hosts, 174,327 model calls and 18.76B cumulative input tokens, with zero window violations on 204,800-token models and marathon sessions of 8,584–12,049 calls. This is the author's own study, not an independent benchmark.

The repo also has a 1,500-item evaluation (LongMemEval-S, ContextBench, MemoryAgentBench; 500 items each), added 2026-10-31, run on v0.1.202 by a contributor with DeepSeek V4.1 Flash as the base model. It is labelled "independent third-party" but lives in the author's repo. It shows the trade-off clearly: on LongMemEval-S plain full context still wins (83.2% vs 79.2%) while bili is much cheaper under independent sessions; on MemoryAgentBench bili survives a 1.48M-token test where full context overflows every time, but verbatim needle QA drops from 69.0% to 27.0%. So it is lossy for exact recall: good for long-running agents with evolving state, worse than index-based RAG for "find this exact sentence".

## Reasoning for

A different bet from [[Token Optimization for Claude Code]] and [[Headroom]]: instead of trimming inputs, give the model explicit memory-management tools. Interesting next to [[Context Engineering]] and [[HORMA — Structured Agent Memory]]. The risk I see is the trust and security surface: a proxy sees every prompt and response, and cert-MITM launchers intercept TLS for some clients. On top of that, **self-update is on by default**: the proxy checks npm on start and every 3 minutes and installs new versions in place (staggered over 15 min–48 h). A separate advisory channel can force-install a target version, even an older one, while auto-update is off. v0.1.212 (2026-11-02) also restored an emergency `raw_publish/skip_ci_gate` release channel. For a process that sees every prompt, I'd set `ACP_AUTO_UPDATE=0` (or `"autoUpdate": false`) and `BILI_ADVISORY_CHECK=0`, pin a version and update by hand. The Docker image listens on `0.0.0.0:8787` with no authentication, so expose it only on a trusted network. The README also carries a QQ group and lots of client-specific caveats, and the project churns very fast (GitHub lists about 1,100 commits on master between 2026-11-01 and 2026-11-13, with ~620 open issues and ~440 open PRs), so expect rough edges.

## Alternatives considered

- Built-in `/compact` in [[Claude Code]] — lossy and not reversible
- [[Headroom]] and [[Caveman]] — token-saving by compressing or shortening content
- [[Trail-code]] — avoids reading code in the first place, via a prebuilt graph

## 🔗 Links

- Repo: https://github.com/ranxianglei/billion-context
- Compressor: https://github.com/ranxianglei/acp-kernel (also vendored in the repo's `kernel/` directory)
- Licence (MIT + attribution term): https://github.com/ranxianglei/billion-context/blob/master/LICENSE
- npm: https://www.npmjs.com/package/billion-context
- 1,500-item evaluation: https://github.com/ranxianglei/billion-context/blob/master/benchmarks/third-party-1500/README.md

---
Template: [[templates/tool]]
