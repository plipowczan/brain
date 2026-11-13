---
title: "Perplexity"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "ai", "research", "search", "rag", "api", "llm"]
type: tool
agent-created: true
summary: "AI answer engine with a search-grounded API (Sonar) — returns cited, up-to-date factual answers; the research/fact layer in Travelcast AI and the Jakub Głąb agent"
status-checked: 2026-11-13
project-status: active
---

# Perplexity

> [!success] Status check 2026-11-13 — active
> **Verdict:** Monthly changelog sections from June to November 2026 add models and APIs.
> **Latest release:** The newest changelog section is 'November 2026', which gives no day. · **last dated update:** 2026-11-11 · **licence:** Proprietary SaaS, pay as you go. The Agent API bills the underlying model's tokens at published rates…
> **Source:** https://docs.perplexity.ai/docs/resources/changelog — **moved/renamed:** Yes, at the API product level. The Sonar API the note describes was folded into the Agent API. The 2026-08-13 'Agent API' post announced it, and Sonar tiers were retired on 2026-09-27.
> **Successor / fallback:** Within Perplexity, the Agent API replaces Sonar. The migration guide maps Sonar -> fast, Sonar Pro -> fast, Sonar Reasoning Pro -> low and Sonar Deep Research -> high, and recommends xhigh for deep research.
> **Changed since this note:** Material, and breaking for the note's setup. (1) The note's integration (OpenAI Chat Completions shape, base_url api.perplexity.ai, model 'sonar') is retired: Sonar tiers ended on 2026-09-27.

An AI "answer engine": instead of a list of links it returns a synthesized, **cited** answer grounded in a live web search. The product is the consumer app, but what I use is the **Sonar API** — an OpenAI-compatible endpoint that performs retrieval + synthesis in one call and returns the answer with its sources. It's the pragmatic way to give an agent fresh, factual, attributable information without building your own search+RAG stack.

## Links

### Description

- **Sonar API** — search-grounded completions; the model retrieves and cites as it answers.
- **Citations** — every answer carries source URLs, so claims are checkable.
- **Recency** — answers reflect the live web, not a training cutoff.
- **Model tiers** — Sonar / Sonar Pro / reasoning variants for depth vs cost.
- **OpenAI-compatible** — drop-in via the OpenAI SDK with a different base URL.

### Download or use

```bash
# OpenAI-compatible endpoint
# base_url="https://api.perplexity.ai", model="sonar"
```

- Site: [perplexity.ai](https://www.perplexity.ai/)
- API docs: [docs.perplexity.ai](https://docs.perplexity.ai/)

## Reasoning for

Perplexity is the factual-research layer in two projects. In [[Travelcast AI]] it powers the **Historian** agent — one of the four parallel research agents — pulling verifiable, cited facts about a destination's history that then feed the GPT consensus script ([[OpenAI]]). In the [[Jakub Głąb Agent System]] it backs the `/research` skill, giving the agent current, attributable answers for briefings. The reason it beats a raw LLM call here: the citations make hallucination auditable, and the live search means the answer isn't frozen at a training cutoff — both essential when the output is going into something a person will publish or act on.

## Alternatives considered

- **[[OpenAI]] / [[Google Gemini]] with web tools** — capable, but Perplexity's search+cite is purpose-built and lower-friction for pure factual lookups.
- **Firecrawl / [[Scrapling]] + own RAG** — full control over sources, far more to build and maintain; Perplexity is the managed shortcut.
- **Tavily / Exa** — search APIs aimed at agents; comparable, Perplexity adds synthesized cited answers out of the box.
- **Brave/Bing Search APIs** — raw results without synthesis; you build the answer layer yourself.

## Resources

- 📘 [Perplexity API docs](https://docs.perplexity.ai/)
- 🧩 [Sonar models](https://docs.perplexity.ai/guides/model-cards)
- 🔗 [[Firecrawl]] · [[Scrapling]] — complementary scraping/research tooling

---
Template: [[templates/tool]]
