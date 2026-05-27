---
title: "CocoIndex"
date: 2026-05-27
enableToc: true
openToc: true
tags: ["tool", "ai", "rag", "indexing", "incremental", "knowledge-graph", "python", "rust", "open-source", "apache-2.0"]
type: tool
source: "_raw/processed/2026-05-27_cocoindex-io-cocoindex.md"
agent-created: true
summary: "Incremental indexing engine for long-horizon AI agents — Python declarative API, Rust core; turns codebases/notes/PDFs/Slack/video into always-fresh agent context, recomputing only the delta."
---
# CocoIndex

Open-source incremental data-transformation engine for AI agents. Turns codebases, meeting notes, inboxes, Slack, PDFs, and videos into live, continuously fresh context for LLM apps — recomputing **only the delta** when sources change. Python declarative API on top of a Rust engine; Apache 2.0.

Tagline: *"Your agents deserve fresh context."*

## 🧩 Core idea

- **Incremental** — only the Δ. When a source changes, CocoIndex identifies affected records, propagates the change across joins/lookups, updates the target, and retires stale rows without touching anything else
- **Declarative** — describe *what* should be in the target; engine keeps it in sync forever
- **Cached by content hash** — `@coco.fn(memo=True)` keys cache on `hash(input) + hash(code)` so logic changes invalidate correctly
- **Parallel by default** — Rust core, zero-copy transforms where possible, failure isolation per record
- **Lineage explainable** — concept of sources → flows → targets with traceable provenance

## 🔗 Links

- GitHub: https://github.com/cocoindex-io/cocoindex (Apache 2.0)
- Homepage: https://cocoindex.io/
- Docs: https://cocoindex.io/docs
- Quickstart: https://cocoindex.io/docs/getting_started/quickstart
- Discord: https://discord.com/invite/zpA9S2DR7s
- X: https://x.com/cocoindex_io
- **CocoIndex skill for AI coding agents** (Claude Code, Cursor): https://github.com/cocoindex-io/cocoindex/blob/main/skills/cocoindex
- Flagship: **CocoIndex-code** — MCP server giving Claude Code / Cursor an AST-aware, incremental, semantic code index of the whole repo

## 🚀 Quick start

```bash
pip install -U cocoindex
```

```python
import cocoindex as coco
from cocoindex.connectors import localfs, postgres
from cocoindex.ops.text import RecursiveSplitter

@coco.fn(memo=True)
async def index_file(file, table):
    for chunk in RecursiveSplitter().split(await file.read_text()):
        table.declare_row(text=chunk.text, embedding=embed(chunk.text))

@coco.fn
async def main(src):
    table = await postgres.mount_table_target(PG, table_name="docs")
    table.declare_vector_index(column="embedding")
    await coco.mount_each(index_file, localfs.walk_dir(src).items(), table)

coco.App(coco.AppConfig(name="docs"), main, src="./docs").update_blocking()
```

Run once to backfill. Re-run anytime — only changed files re-embed.

## 🎨 Why it matters for me

- Solves the **"batch pipelines drift stale"** problem head-on — directly relevant for [[Brain]] (this vault: re-embed only modified notes), [[Qamera AI]] (product catalog freshness), and any RAG-backed agent
- Same problem space as [[LightRAG]] but with a sharper take on *incrementality* rather than retrieval quality; complementary, not competitive
- Built-in MCP server (`CocoIndex-code`) gives [[Claude Code]] / [[Cursor]] a whole-repo semantic index without bespoke plumbing — drop-in for [[Agentic Coding]] workflows
- The "React for data engineering" mental model maps cleanly to declarative pipelines I already build in [[Make]] / Airtable

## 📒 Reference example tree (20+ recipes)

| Example | What it does |
|---|---|
| `code_embedding` | Walks git repo, AST-aware chunking, sentence-transformers → pgvector / LanceDB; incremental per commit |
| `pdf_embedding` | PDFs from local / S3 / Google Drive → recursive chunk → vector index; only edited PDFs re-embed |
| `hn_trending_topics` | Algolia HN API → recursive comments → Gemini 2.5 Flash extracts typed topics → weighted ranking |
| `conversation_to_knowledge` | Meeting transcripts / Slack / podcasts → LLM extracts people, topics, decisions, actions → Neo4j / Kuzu |
| `multi_codebase_summarization` | Walk N repos → README/API/module extraction → LLM summary → top-level rollup; only commits trigger re-run |
| `patient_intake_extraction_baml` | Messy forms/PDFs/invoices → BAML or DSPy typed extraction → Postgres |
| `podcast → knowledge graph` | YouTube audio → Whisper/AssemblyAI diarization → per-speaker statement extraction → SurrealDB / Neo4j |
| `csv_to_kafka` | Watch CSV folder → publish each row as JSON to Kafka topic (StreamNative/Confluent), keyed by PK; sub-second |

## ☘️ Architecture notes

- **Rust core** — production-grade from day one; parallel chunking, zero-copy where possible, per-record failure isolation
- **Connectors** — `localfs`, `postgres`, plus pluggable sources/targets (S3, GDrive, Kafka, Neo4j, Kuzu, SurrealDB, pgvector, LanceDB)
- **Enterprise tier** — petabyte-scale stores; "process once, reconcile forever"

## 📖 Further reading

- [[LightRAG]] — RAG framework with KG entity extraction; pairs well as the *retrieval* layer downstream of CocoIndex
- [[Graphify]] — knowledge-graph generator skill
- [[Brain]] — this vault; candidate ingestion target
- [[LLM Knowledge Bases]]
- [[AI Chatbots Architecture]]
- [[Qamera AI]]
