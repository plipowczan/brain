---
title: "Santander AI Open Source"
date: 2026-06-24
enableToc: true
openToc: true
tags: ["tool", "ai", "open-source", "apache-2.0", "harness", "responsible-ai", "fintech"]
type: tool
source: "_raw/processed/2026-06-24_Santander AI Open Source.md"
agent-created: true
summary: "Banco Santander AI Lab's open-source org — small models, harness engineering, evolving agents, responsible AI, graph ML for financial services; Apache-2.0"
---
# Santander AI Open Source
Open-source AI org from **Banco Santander AI Lab** (Madrid). Publishes tools for **small models, harness engineering, evolving agents, responsible AI, MLOps, and graph ML** for financial services. All projects ship under permissive licenses (mostly Apache-2.0) and use **synthetic or anonymised data only** — no real customer data. Notable as a regulated bank running a formal Open Source Programme Office (OSPO).

## Links
### Description
Run by an **OSPO** with a transparent **two-track release review**:
- **Fast Track** — forks, generic tools, tutorials, datasets, SDKs without business logic; OSPO Lead + automated scans, SLA < 4h.
- **Full Track** — models, IP-bearing frameworks, code that touched internal data; FOSS Review Board (OSPO Lead + Legal + CISO + Architect), SLA 2–4 weeks.

### Download or use
- GitHub org: https://github.com/SantanderAI
- Governance: [GOVERNANCE.md](https://github.com/SantanderAI/.github/blob/main/GOVERNANCE.md) · CLA on first PR.
- Contact: opensource@gruposantander.com

## 🧩 Featured projects
| Project | What it is |
|---|---|
| `ralph` | Configurable Bash/PowerShell loop running an AI coding CLI with a **fresh session each iteration** — a packaged [[Loop Engineering\|Ralph loop]]. |
| `ralph-vault-skill` | Skill to generate the knowledge vault for projects using the Ralph loop. |
| `autoguardrails` | Alignment-research scaffold (autoresearch-style) for LLM guardrails over a single `policy.md` surface. |
| `mech-gov-framework` | Mechanical Governance for LLM decisions — model-agnostic regimes, hard gates, governance metrics for high-stakes decisions. |
| `auto-bayesian` | Config-driven, interpretable Bayesian network training for relational tabular data. |
| `gen-fraud-graph` | Synthetic fraud graph generator (scales to 100M+ accounts) for benchmarking graph fraud detection. |
| `genetic-algorithm` | Dependency-free Python GA engine with pluggable fitness — search core for an LLM autoresearcher. |
| `linear-adapter-trainer` | Train linear embedding adapters (triplet loss) to align retrieval embeddings with queries (RAG). |
| `llm_bridge` | Tiny vendor-neutral LLM client — one interface, pluggable OpenAI/Bedrock/Gemini adapters. |
| `causal-perception-implementation` | Causal perception research — competing structural causal models for fair credit decisions. |
| `mutatis-mutandis` | Situation testing for discrimination analysis with counterfactual comparators. |
| `sota-stressed-datasets` | Benchmark datasets republished in "stressed" form to evaluate ML/LLM robustness. |

## Reasoning for
Direct overlap with this vault's working themes. **`ralph`** is a production-grade implementation of the loop-engineering idea — fresh session per iteration is exactly the context-rot mitigation behind [[Loop Engineering]] and the [[Harness Engineering]] practice; **`ralph-vault-skill`** auto-generates a project knowledge vault, paralleling [[LLM Knowledge Bases]] / [[OpenKB]]. **`autoguardrails`** and **`mech-gov-framework`** are concrete patterns for the "keys not prompts" / hard-gate governance lesson (see [[Building an AI Second Brain]]). Worth mining for harness and agent-governance ideas from a regulated-bank perspective.

## Alternatives considered
- [[Archon]], [[Superpowers]], [[gstack]] — other harness/agent-skill stacks; Santander's angle is governance + responsible AI under banking constraints.

## Resources
- Related: [[Harness Engineering]], [[Loop Engineering]], [[Autoresearch]], [[OpenKB]]

---
Template: [[templates/tool]]
