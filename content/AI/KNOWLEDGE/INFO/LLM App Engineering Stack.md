---
title: "LLM App Engineering Stack"
date: 2026-07-24
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "llm", "rag", "agents", "open-source", "map"]
type: knowledge-note
agent-created: true
summary: "Map of the open-source LLM application stack by lane — gateway, agents, ingestion/RAG, structured outputs, eval & observability — with the tool I track in each"
---

# LLM App Engineering Stack

## 🗒️ Description

A **map, not a manual.** Building a production LLM app is less about the model and more about the plumbing around it: how you route to providers, orchestrate agents, get documents in, retrieve the right context, force outputs into a schema, and measure quality + safety. This note groups the open-source tools I track into **lanes**, so that when a build needs "the vector-DB piece" or "the eval piece" I go to the lane, not a flat list of 90 tool notes.

Each lane links to the tool note(s); the tool notes carry the detail, trade-offs, and alternatives. A single app rarely uses all lanes — pick the two or three the problem actually needs.

> Related architecture write-ups: [[AI Chatbots Architecture]] · [[Structural Retrieval for Code]] (why RAG ≠ RAG) · [[Context Engineering]] · [[Agentic Systems]].

## 🔗 The lanes

### 1. Gateway / provider abstraction
Route to any model behind one interface; track cost, add fallbacks and guardrails.
- **[[LiteLLM]]** — 100+ LLMs in unified OpenAI format; self-hosted proxy with cost tracking, virtual keys, load balancing.

### 2. Agent orchestration
Coordinate multiple role-playing agents or event-driven workflows.
- **[[CrewAI]]** — Crews (autonomous collaboration) + Flows (deterministic, event-driven control).
- Related: [[LangGraph]] (graph control), [[Agentic Systems]] (the pattern).

### 3. Ingestion — documents & web → clean text
Turn messy sources into LLM-ready markdown before anything else.
- **[[Marker]]** — PDF/DOCX/PPTX/images → markdown/JSON via a Surya VLM (tables, math, references).
- **[[Crawl4AI]]** — LLM-friendly web crawler/scraper → clean markdown; async, self-hosted.
- Related: [[PageIndex]], [[MinerU]], [[Unlimited-OCR]], [[Bright Data]] (hard-target acquisition).

### 4. Chunking
Split text into good retrieval units — a bigger lever on recall than people expect.
- **[[Chonkie]]** — lightweight, fast; token/sentence/semantic/code chunkers, 32+ integrations.

### 5. Vector storage & retrieval
Store embeddings, search by similarity with metadata filters.
- **[[Qdrant]]** — Rust vector DB with strong payload filtering; self-host or Cloud.
- Related embedder: **[[VoyageAI]]** (embeddings + reranking).
- Counter-approach (vectorless): [[PageIndex]], [[GrepRAG]], [[Structural Retrieval for Code]] — reasons *not* to reach for a vector DB.

### 6. Structured outputs
Make the model return valid, typed data instead of free text.
- **[[Instructor]]** — Pydantic-schema extraction with validation + retries, for hosted APIs.
- **[[Outlines]]** — constrained decoding (JSON/regex/grammar) for models you host.
- **[[DSPy]]** — a level up: program the LM with I/O signatures and *optimise* the prompts against a metric.

### 7. Local model serving
Run open models privately, offline, at zero marginal cost.
- **[[Ollama]]** — one-command local models behind an OpenAI-compatible REST API.

### 8. Evaluation & observability
Catch regressions and vulnerabilities before ship; watch quality + cost in production.
- **[[Promptfoo]]** — CLI/CI evals + red-teaming (pre-deploy gate).
- **[[Langfuse]]** — tracing, prompt management, evals, datasets (runtime).

## 🧩 How the lanes connect

A canonical RAG-plus-agent app reads left to right:

```
source docs / web
   → Marker / Crawl4AI      (ingestion)
   → Chonkie                (chunking)
   → VoyageAI               (embedding)
   → Qdrant                 (vector store + filtered retrieval)
   → LiteLLM → model        (generation, provider-abstracted; Ollama for local)
       with Instructor/Outlines/DSPy  (typed, optimised output)
   → CrewAI                 (if the task is multi-agent)
   → Promptfoo (CI) + Langfuse (prod)   (eval & observability wrap everything)
```

The honest default is to use *fewer* lanes: many tasks need only a gateway + structured output, or ingestion + a single retrieval call. Add a lane when a real failure mode demands it, not speculatively.

## 📖 Further reading
- [[AI Chatbots Architecture]] — the reference architecture these tools slot into.
- [[Structural Retrieval for Code]] — when structural/vectorless retrieval beats the vector-DB lane.
- [[Context Engineering]] · [[Progressive Disclosure]] — getting the right tokens to the model.
- [[Open-Source AI Projects Roundup (Matthew Berman)]] — broader OSS survey.

---
Template: [[templates/knowledge_note_info]]
