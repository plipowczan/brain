---
title: "NemoClaw"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "ai", "inference", "self-hosted"]
type: tool
agent-created: true
summary: "Self-hosted AI inference setup — OpenClaw gateway + NVIDIA Nemotron model"
status-checked: 2026-11-13
project-status: active
repo: "https://github.com/NVIDIA/NemoClaw"
---
# NemoClaw

> [!success] Status check 2026-11-13 — active
> **Verdict:** Several commits a day: the last was on 2026-11-12, with PR numbers above #14400.
> **Last release:** v0.0.143 (2026-11-10), per the tag and docs/changelog/2026-11-10.mdx. · **last commit:** 2026-11-12 · **licence:** Apache-2.0 (LICENSE file, SPDX headers, README).
> **Repo:** https://github.com/NVIDIA/NemoClaw
> **Changed since this note:** The note (2026-04-09) describes a self-built setup: OpenClaw gateway plus Nemotron-3 Super 120B on Docker/k3s behind a Cloudflare Tunnel. It also mislabels the sandbox, which is NVIDIA OpenShell, not OpenClaw.

Self-hosted AI inference environment combining OpenClaw gateway with NVIDIA Nemotron-3 Super 120B model.

## Links
### Description
Custom setup for running AI inference locally/on own infrastructure. OpenClaw provides the gateway layer, NVIDIA Nemotron provides the model.
### Download or use
Deployed on own infrastructure via Docker/k3s.

## Reasoning for
Independence from cloud AI providers for specific workloads. Used in [[Agentic Systems]] architecture.

Key components:
- **OpenClaw** — gateway and sandbox environment (Docker k3s)
- **NVIDIA Nemotron-3 Super 120B** — large language model for inference
- **Cloudflare Tunnel** — remote access

## Alternatives considered
- Ollama — simpler but less capable models
- Cloud-only (Claude API, OpenAI) — easier but vendor-dependent

## Resources
[NVIDIA Nemotron](https://developer.nvidia.com/nemotron)
- [[Hugging Bay]] — torrent/mirror registry for open model weights (unverified); relevant to sourcing weights for self-hosted inference

---
Template: [[templates/tool]]
