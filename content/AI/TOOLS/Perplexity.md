---
title: "Perplexity"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "ai", "research", "search", "rag", "api", "llm"]
type: tool
agent-created: true
summary: "AI answer engine with a search-grounded API (Sonar) — returns cited, up-to-date factual answers; the research/fact layer in Travelcast AI and the Jakub Głąb agent"
---

# Perplexity

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
