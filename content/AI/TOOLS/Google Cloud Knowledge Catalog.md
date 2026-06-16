---
title: "Google Cloud Knowledge Catalog"
date: 2026-06-14
enableToc: true
openToc: true
tags: ["tool", "ai", "knowledge-graph", "data-catalog", "metadata", "agents", "google", "rag", "apache-2.0", "open-source"]
type: tool
source: "_raw/processed/2026-06-14_GoogleCloudPlatform-knowledge-catalog.md"
agent-created: true
agent-reviewed: 2026-06-15
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
- Labs repo (enrichment-agent tutorials): https://github.com/GoogleCloudPlatform/dataplex-labs
- Product page: https://cloud.google.com/products/knowledge-catalog
- Open in Cloud Shell: console.cloud.google.com → import the repo and run the samples directly
- Docs — enable: https://docs.cloud.google.com/dataplex/docs/enable-api
- Docs — MCP / Gemini / agents: https://docs.cloud.google.com/dataplex/docs/pre-built-tools-with-mcp-toolbox
- Docs — build enrichment agent: https://docs.cloud.google.com/dataplex/docs/build-agent-to-enrich-metadata
- Docs — IAM & access: https://docs.cloud.google.com/dataplex/docs/iam-and-access-control
- Docs — Knowledge Catalog for AI agents: https://docs.cloud.google.com/dataplex/docs/ai-overview

## 🚀 Quick start

Open the repo in Google Cloud Shell (one-click button in the README) and run the provided samples against your own Knowledge Catalog / Dataplex instance. The repo is sample-and-tooling oriented — start from a sample agent, point it at your data sources, then adapt the enrichment/retrieval flow.

## 🛠️ Deployment (enable the service)

The catalog is a managed GCP service — you *enable* it, you don't host it. Project with billing + the `serviceusage.services.enable` permission (Owner/Editor role), then:

```bash
gcloud services enable dataplex.googleapis.com
gcloud services enable dataproc.googleapis.com      # Managed Service for Apache Spark
gcloud services enable metastore.googleapis.com     # Dataproc Metastore
# optional, separate charges:
gcloud services enable datalineage.googleapis.com
```

A new project (or one with the BigQuery API on) often has `dataplex.googleapis.com` enabled already. The **"Knowledge Catalog" rebrand does not change API endpoints, `gcloud dataplex` commands, or client libraries** — the old Dataplex names still work, which is why the "formerly Dataplex" lineage matters in practice, not just in branding.

IAM: **Dataplex Catalog Viewer** (`roles/dataplex.catalogViewer`) to *use* the catalog tools; **Service Usage Admin** + extra APIs to run enrichment agents.

## 🤝 Use it from agents

Three connection paths, in order of effort:

**1. MCP Toolbox → [[Claude Code]] / [[Cursor]] / VS Code** — the drop-in for my own stack, mirroring [[CocoIndex]]'s `CocoIndex-code` MCP server. Download the toolbox binary, then add an MCP server:

```bash
curl -O https://storage.googleapis.com/mcp-toolbox-for-databases/v0.31.0/darwin/arm64/toolbox
chmod +x toolbox && ./toolbox --version
```

```json
// .mcp.json (project root). VS Code → .vscode/mcp.json, key "servers"; Cursor → .cursor/mcp.json
{
  "mcpServers": {
    "knowledgeCatalog": {
      "command": "./PATH/TO/toolbox",
      "args": ["--prebuilt", "dataplex", "--stdio"],
      "env": { "DATAPLEX_PROJECT": "PROJECT_ID" }
    }
  }
}
```

Exposed tools: `search_entries`, `lookup_entry`, `search_aspect_types`, `lookup_context` (preview). The agent then queries in natural language — *"find all datasets related to sales in Europe"*, *"what's the schema of the orders table?"*.

**2. Gemini CLI extension** — simplest, no toolbox binary:

```bash
gemini extensions install https://github.com/gemini-cli-extensions/knowledge-catalog
export DATAPLEX_PROJECT="PROJECT_ID"
gemini
```

**3. Build an enrichment agent** — clone the labs repo, point an agent at knowledge bases / docs / code / chat to extract business context and enrich technical metadata at scale (needs Service Usage Admin + extra APIs):

```bash
git clone https://github.com/GoogleCloudPlatform/dataplex-labs.git
```

The companion repo folders: `agents/` (agent implementations), `okf/` (open knowledge framework), `samples/`, `toolbox/`. Stack ≈ 50% Python, 29% TypeScript.

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
