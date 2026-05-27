---
title: "cocoindex-io/cocoindex: Incremental engine for long horizon agents 🌟 Star if you like it!"
source: "https://github.com/cocoindex-io/cocoindex?trk=public_post_comment-text"
author:
published:
created: 2026-05-27
description: "Incremental engine for long horizon agents 🌟 Star if you like it! - cocoindex-io/cocoindex"
tags:
  - "clippings"
---
![[5e72b5a866f4f7f86b78784277c610b7_MD5.svg]]

## Your agents deserve fresh context.

**Star us ❤️ →**[![[c254505c71208a2e6523faf3f008b8b2_MD5.svg]]](https://github.com/cocoindex-io/cocoindex "Star CocoIndex on GitHub — open-source incremental indexing framework for AI agents")

·[

![[2df0ee52cc3034e0ae4a5ad1b0df2db6_MD5.svg]]

](https://cocoindex.io/ "Visit cocoindex.io — the CocoIndex homepage")·[

![[cb48a5d297af40ae4e916aee1caf038a_MD5.svg]]

](https://cocoindex.io/docs "Read the CocoIndex documentation — guides, quickstart, connectors, transformations, and API reference")·[

![[6e9eef9ced37b0af3564f221e31e0e8d_MD5.svg]]

](https://discord.com/invite/zpA9S2DR7s "Join the CocoIndex Discord — community chat, showcase, release notes, help and support")

CocoIndex turns codebases, meeting notes, inboxes, Slack, PDFs, and videos into live, continuously fresh context for your AI agents and LLM apps to reason over effectively — with minimal incremental processing. Get your production AI agent ready in 10 minutes with reliable, continuously fresh data — no stale batches, no context gap

**Incremental** · only the delta · **Any scale** · parallel by default · **Declarative** · Python, 5 min

[![[0338afb7c2ac910d795d767faff93020_MD5.svg]]](https://trendshift.io/repositories/13939)

[Deutsch](https://readme-i18n.com/cocoindex-io/cocoindex?lang=de) | [English](https://readme-i18n.com/cocoindex-io/cocoindex?lang=en) | [Español](https://readme-i18n.com/cocoindex-io/cocoindex?lang=es) | [français](https://readme-i18n.com/cocoindex-io/cocoindex?lang=fr) | [日本語](https://readme-i18n.com/cocoindex-io/cocoindex?lang=ja) | [한국어](https://readme-i18n.com/cocoindex-io/cocoindex?lang=ko) | [Português](https://readme-i18n.com/cocoindex-io/cocoindex?lang=pt) | [Русский](https://readme-i18n.com/cocoindex-io/cocoindex?lang=ru) | [中文](https://readme-i18n.com/cocoindex-io/cocoindex?lang=zh)

## Built with CocoIndex ❤️[![[df6ec9b695eb5ffbd196721b5185babf_MD5.svg]]](https://cocoindex.io/cocoindex-code "CocoIndex-code — flagship MCP server for AI coding agents: AST-aware, incremental, semantic code index. Claude Code and Cursor see your whole repo instantly.")

[**See all 20+ examples · updated every week →**](https://github.com/cocoindex-io/cocoindex/blob/main/examples)

### Get started

```
pip install -U cocoindex
```

Declare *what* should be in your target — CocoIndex keeps it in sync forever, recomputing only the Δ.

```
import cocoindex as coco
from cocoindex.connectors import localfs, postgres
from cocoindex.ops.text import RecursiveSplitter

@coco.fn(memo=True)                          # ← cached by hash(input) + hash(code)
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

Run once to backfill. Re-run anytime — only the changed files re-embed.

Building with an AI coding agent?  
Drop in our [**CocoIndex skill**](https://github.com/cocoindex-io/cocoindex/blob/main/skills/cocoindex) so your agent writes correct v1 code — concepts, APIs, patterns, all in one file.  
<sub>See <a href="https://cocoindex.io/docs/getting_started/ai_coding_agents/">Use with AI coding agents</a> for install steps.</sub>[![[bc3fd53424009d120922644fc413a29f_MD5.svg]]](https://cocoindex.io/docs/getting_started/quickstart "Full CocoIndex quickstart — install, declare sources and targets, run the incremental engine, set up vector search or knowledge graph in 5 minutes")

[

![[e9b191f64c3c814a07c907a0d454308b_MD5.svg]]

](https://cocoindex.io/docs/programming_guide/core_concepts "Learn the CocoIndex core concepts — sources, targets, flows, incremental engine, lineage")[![[5cddacb93fd26450286b02a5b7d58156_MD5.svg]]](https://github.com/cocoindex-io/cocoindex "Star CocoIndex on GitHub — open-source Python framework for live agent context")

## React — for data engineering

![[267b2f752117b1714f6bf3c55efaf44a_MD5.svg]]

![[ca0a2c13d785040b8273c959d06ea946_MD5.svg]]

[**See the React ↔ CocoIndex mental model →**](https://cocoindex.io/react-cocoindex)

## Incremental engine for long-horizon agents

Data transformation for any engineer, designed for AI workloads —  
with a smart incremental engine for *always-fresh, explainable data.*[![[e9b191f64c3c814a07c907a0d454308b_MD5.svg]]](https://cocoindex.io/docs/programming_guide/core_concepts "Learn the CocoIndex core concepts — sources, targets, flows, incremental engine, lineage")

![[9262be2d5c86d1e6d88bf3c6b1cd7bc6_MD5.svg]]

## Why incremental?

Your agents are only as good as the data they see.  
Batch pipelines drift stale. CocoIndex stays live — and only runs the Δ.

![[70eb067162c22e318c3b3ed5dbb30fb5_MD5.svg]]

## What can you build?

[**See all 20+ examples · updated every week →**](https://github.com/cocoindex-io/cocoindex/blob/main/examples "Browse all 20+ CocoIndex examples on GitHub — code, PDF, HN, knowledge graph, podcast, CSV-to-Kafka, image, and more")

**Working starters from [the examples tree](https://github.com/cocoindex-io/cocoindex/blob/main/examples) — clone, plug your source, ship.**

[![[8ae7aee9de40ebf7de9f820205bc3d93_MD5.svg]]](https://github.com/cocoindex-io/cocoindex/blob/main/examples/code_embedding "Real-time code index — walk a git repo, chunk source files with an AST-aware splitter, embed with sentence-transformers, and upsert to pgvector / LanceDB. Fully incremental: only files touched by the latest commit re-embed. Good for coding agents, code review, semantic find-by-meaning.")

[![[2230766092dac24a8d29771f9d98c083_MD5.svg]]](https://github.com/cocoindex-io/cocoindex/blob/main/examples/pdf_embedding "PDF → RAG index — ingest PDFs from local / S3 / Google Drive, extract text, chunk with a recursive splitter, embed each chunk, and upsert into pgvector / LanceDB with a vector index. Classic RAG stack, incremental — only edited PDFs re-embed.")

[![[733d2066b93ef1cb3e98bd787317f9b5_MD5.svg]]](https://github.com/cocoindex-io/cocoindex/blob/main/examples/hn_trending_topics "HN trending topics — fetch Hacker News threads via the Algolia API, recursively pull nested comments, LLM-extract typed topic lists per message with Gemini 2.5 Flash, and rank topics by weighted mention count (thread = 5 points, comment = 1 point).")

[![[db05ba65a0b0965b181ce2b0c443dc0b_MD5.svg]]](https://github.com/cocoindex-io/cocoindex/blob/main/examples/conversation_to_knowledge "Conversation → knowledge graph — pull people, topics, decisions, and action items out of meeting transcripts, Slack, podcasts, or support calls with an LLM extractor, and upsert into Neo4j or Kuzu. Incremental: only changed turns re-extract.")

[![[79b0b6059d769eb486e7b255f32a39e1_MD5.svg]]](https://github.com/cocoindex-io/cocoindex/blob/main/examples/multi_codebase_summarization "Multi-repo summarization — walk N git repositories, extract READMEs / public APIs / modules, LLM-summarize each one, and roll up into a single top-level summary. Incremental: only repos with new commits re-run.")

[![[6293c88e59486e4164d274edaebff624_MD5.svg]]](https://github.com/cocoindex-io/cocoindex/blob/main/examples/patient_intake_extraction_baml "Structured extraction — read messy forms, PDFs, invoices, or free-text and extract typed, schema-validated fields with BAML or DSPy, then write rows into Postgres or a warehouse. Incremental: only changed documents re-extract.")

[![[848e3754c72038973bac8fac097fe9f6_MD5.svg]]](https://github.com/cocoindex-io/cocoindex/blob/main/examples/conversation_to_knowledge "Podcast → knowledge graph — download YouTube podcast audio, transcribe with speaker diarization (Whisper / AssemblyAI), LLM-extract structured statements and entities per speaker, resolve duplicates across episodes with embeddings, and store the whole graph (speakers, statements, topics) in SurrealDB or Neo4j. Incremental.")

[![[03d88713b86575d1785b376ec16d8f31_MD5.svg]]](https://github.com/cocoindex-io/cocoindex/blob/main/examples/csv_to_kafka "CSV → Kafka live — watch a folder of CSV files (local or S3) and publish each row as a JSON message keyed by its primary key to a Kafka topic on StreamNative / Confluent / self-hosted. Sub-second incremental — only changed rows publish.")

![[b36d963e333a5bc93ba81481e36b9364_MD5.svg]]

Building something with CocoIndex? **We want to see it.**  
Tag [@cocoindex\_io](https://x.com/cocoindex_io "Tag @cocoindex_io on X to showcase your CocoIndex project") on X or drop a link in [#showcase](https://discord.com/invite/zpA9S2DR7s "Share your project in the CocoIndex Discord #showcase channel") on Discord. We'll boost it. 🥥

## Community

| [  ![[d4cf4772e41e54944e13fb754fb8023b_MD5.svg]] ](https://discord.com/invite/zpA9S2DR7s "Join the CocoIndex Discord — community chat, showcase, help, release notes") | [  ![[391a964abfb8bfde99acbae46566b4f3_MD5.svg]] ](https://www.youtube.com/@cocoindex-io "Subscribe to the CocoIndex YouTube channel — live demos, tutorials, and deep dives") | [  ![[1a6afeedce8cc3d6b6e4f14388e1a29d_MD5.svg]] ](https://cocoindex.io/blogs/ "Read the CocoIndex blog — engineering posts, release notes, and tutorials") | [  ![[7dd3aafb9b1a5ad870b02214a834b2f5_MD5.svg]] ](https://x.com/cocoindex_io "Follow @cocoindex_io on X (Twitter) for release notes, demos, and updates") |
| --- | --- | --- | --- |

[![[85aba9a88f9a6328a5ed3d56d2f4521f_MD5.svg]]](https://camo.githubusercontent.com/f30dbe1e1eda31c2f8c3f495bdedf7ab6dc291cfe67e760aa8364a67ca270174/68747470733a2f2f636f636f696e6465782e696f2f626c6f62732f6769746875622f686f6d65706167652f77652d6c6f76652d636f6e7472696275746f72732e737667)

**We are *so* excited to meet you.**  
Every typo fix, new connector, doc tweak, or full-on rewrite makes CocoIndex better.  
Come hang out — big PRs and small ones, both welcome.

📝 [**Read the contributing guide**](https://cocoindex.io/docs/contributing/guide) · 🐛 [**good first issues**](https://github.com/cocoindex-io/cocoindex/labels/good%20first%20issue) · 💬 [**Say hi on Discord**](https://discord.com/invite/zpA9S2DR7s)

## CocoIndex Enterprise

![[ef4a85a167fa7b5d3898e69485010c76_MD5.svg]]

### Large corpus — built for enterprise scale.

Incremental compute is the only way to keep large corpora fresh without re-embedding them every cycle.  
CocoIndex scales from a single repo to petabyte-scale stores — parallel by default, delta-only by design.

### Process once. Reconcile forever.

When a source changes, CocoIndex identifies the affected records, propagates the change  
across joins and lookups, updates the target, and retires stale rows —  
without touching anything that didn't change.

### Built on a Rust engine.

The core is Rust — production-grade from day zero.  
Parallel chunking, zero-copy transforms where possible, and failure isolation  
so one bad record doesn't stall the flow.

[![[35f14749df9f2faaad50e28b4b7b7148_MD5.svg]]](https://cocoindex.io/enterprise/ "Explore CocoIndex Enterprise — PB-scale incremental data pipelines for AI agents")

<sub>Apache 2.0 · © CocoIndex contributors 🥥</sub>