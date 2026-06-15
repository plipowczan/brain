---
title: "Google Cloud Knowledge Catalog"
date: 2026-06-14
enableToc: true
openToc: true
tags: ["tool", "ai", "knowledge-graph", "data-catalog", "metadata", "agents", "google", "rag", "apache-2.0", "open-source"]
type: tool
source: "_raw/processed/2026-06-14_GoogleCloudPlatform-knowledge-catalog.md"
agent-created: true
summary: "Google Cloud's AI-powered data catalog (formerly Dataplex) — a dynamic knowledge graph over structured + unstructured data that gives AI agents semantics and business context; companion GitHub repo ships tools, agents, and samples."
---
# Google Cloud Knowledge Catalog

Google Cloud's **AI-powered data catalog and metadata-management platform** (formerly **Dataplex**). It builds a *dynamic knowledge graph* over all of an organisation's data — structured and unstructured — so that **AI agents** get semantics and business context rather than raw tables. The [knowledge-catalog GitHub repo](https://github.com/GoogleCloudPlatform/knowledge-catalog) ships tools, agents, and samples that demonstrate the platform's features and patterns for context management, enrichment, and retrieval. Apache 2.0.

## 🧩 Core idea

- **Knowledge graph over your data** — unifies structured + unstructured sources into one graph that captures semantics and business context, not just schema
- **Built for AI agents** — the explicit goal is feeding agents trustworthy, contextual metadata so they reason over *your* data correctly
- **Context management, enrichment, retrieval** — the repo's samples target these three jobs: organising context, enriching it, and serving it back to LLM/agent workflows
- **Managed Google Cloud product** — the catalog itself is the cloud service; the repo is the open companion (samples, agents, tooling)

## 🔗 Links

- GitHub: https://github.com/GoogleCloudPlatform/knowledge-catalog (Apache 2.0)
- Product page: https://cloud.google.com/products/knowledge-catalog
- Open in Cloud Shell: console.cloud.google.com → import the repo and run the samples directly

## 🚀 Quick start

Open the repo in Google Cloud Shell (one-click button in the README) and run the provided samples against your own Knowledge Catalog / Dataplex instance. The repo is sample-and-tooling oriented — start from a sample agent, point it at your data sources, then adapt the enrichment/retrieval flow.

## 🎨 Why it matters for me

- Same problem space as [[CocoIndex]], [[LightRAG]], and [[Graphify]] — turning messy data into **agent-usable context** — but from the managed-cloud / enterprise-governance angle rather than self-hosted OSS. Useful as the "what does Google ship" reference point when designing knowledge layers
- Relevant to [[LLM Knowledge Bases]] and [[AI Chatbots Architecture]]: a worked example of metadata + knowledge-graph as the retrieval substrate for agents
- The "formerly Dataplex" lineage matters — it signals Google folding data governance/cataloguing into the AI-agent context story

## ⚠️ Caveats

- The repo is **not an official Google product** (explicit disclaimer) — samples and tooling, not a supported SDK
- Value is tied to using the Google Cloud Knowledge Catalog / Dataplex service; less relevant for fully self-hosted stacks

## 📖 Further reading

- [[Open Knowledge Format (OKF)]] — the open markdown+frontmatter knowledge spec (`okf/SPEC.md`) shipped inside this repo
- [[CocoIndex]] — incremental indexing engine for fresh agent context
- [[LightRAG]] — KG-based RAG framework
- [[Graphify]] — code/docs → queryable knowledge graph skill
- [[LLM Knowledge Bases]]
- [[AI Chatbots Architecture]]
