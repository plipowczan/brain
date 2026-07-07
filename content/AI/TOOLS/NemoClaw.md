---
title: "NemoClaw"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "ai", "inference", "self-hosted"]
type: tool
agent-created: true
summary: "Self-hosted AI inference setup — OpenClaw gateway + NVIDIA Nemotron model"
---
# NemoClaw

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
