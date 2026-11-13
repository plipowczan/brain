---
title: "Perplexity"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "ai", "research", "search", "rag", "api", "llm"]
type: tool
agent-created: true
agent-reviewed: 2026-11-13
summary: "AI answer engine with a search-grounded API — returns cited, up-to-date factual answers; Sonar Chat Completions ended 2026-09-27, the Agent API (effort levels + tools) replaces it; the research/fact layer in Travelcast AI and the Jakub Głąb agent"
status-checked: 2026-11-13
project-status: active
homepage: "https://www.perplexity.ai/"
---

# Perplexity

> [!success] Status check 2026-11-13 — active
> **Verdict:** Monthly changelog sections from June to November 2026 add models and APIs.
> **Latest release:** The newest changelog section is 'November 2026', which gives no day. · **last dated update:** 2026-11-11 · **licence:** Proprietary SaaS, pay as you go. The Agent API bills the underlying model's tokens at published rates…
> **Source:** https://docs.perplexity.ai/docs/resources/changelog — **moved/renamed:** Yes, at the API product level. The Sonar API the note describes was folded into the Agent API. The 2026-08-13 'Agent API' post announced it, and Sonar tiers were retired on 2026-09-27.
> **Successor / fallback:** Within Perplexity, the Agent API replaces Sonar. The migration guide maps Sonar -> fast, Sonar Pro -> fast, Sonar Reasoning Pro -> low and Sonar Deep Research -> high, and recommends xhigh for deep research.
> **Changed since this note:** Material, and breaking for the note's setup. (1) The note's integration (OpenAI Chat Completions shape, base_url api.perplexity.ai, model 'sonar') is retired: Sonar tiers ended on 2026-09-27.

An AI "answer engine": instead of a list of links it returns a synthesized, **cited** answer grounded in a live web search. The product is the consumer app, but what I use is the API: retrieval + synthesis in one call, the answer returned with its sources. It's the pragmatic way to give an agent fresh, factual, attributable information without building your own search+RAG stack.

> [!warning] Sonar Chat Completions ended on 2026-09-27 (checked 2026-11-13)
> What I originally wired in was the **Sonar API**: an OpenAI Chat Completions-shaped endpoint (`messages` in, `choices` out) with `model="sonar"`. Perplexity announced the **Agent API** on 2026-08-13 and ended Sonar Chat Completions support on **2026-09-27**. Per the [migration guide](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview), synchronous and streaming Sonar calls still answer for now: they're reformulated as Agent API requests, rolling out model by model. **Async Sonar requests no longer work** (use background mode). Anything still calling `sonar` should move to the Agent API; I don't count on the reformulation lasting.
>
> The guide maps the old tiers to effort levels: Sonar → `fast`, Sonar Pro → `fast`, Sonar Reasoning Pro → `low`, Sonar Deep Research → `high`, and it recommends `xhigh` for deep research. Perplexity's own 2026-08-13 blog post gave a different mapping, so trust the current guide.

## Links

### Description

- **Agent API** — one endpoint for search-grounded agent runs. You pick an **effort level** (`fast`, `low`, `medium`, `high`, `xhigh`, `ultra`), and each level is a versioned preset of model + tools + budgets. Pin a version (`effort="fast@2026-10-16.0"`) if you need stable behaviour, because the presets move. Built-in tools: `web_search`, `fetch_url`, `image_search`, people and finance search, a code `sandbox`, remote MCP servers and custom functions.
- **Citations** — the response is a typed `output` array: a `message` item with the answer and a `search_results` item with the sources, so claims are checkable.
- **Recency** — answers reflect the live web, not a training cutoff.
- **Models** — no longer just Sonar tiers. The Agent API is multi-vendor: OpenAI, Anthropic, Google, xAI, Z.AI, Moonshot AI and NVIDIA model families plus Perplexity's own Sonar model. Model IDs get pruned from the docs monthly.
- **Other APIs** — Search API (ranked results as JSON, no generated answer), Embeddings, the Orchestrator API for open-weight models (Chat Completions / Responses / Anthropic Messages shapes), and a Decisions API.
- **Not OpenAI Chat Completions any more** — the Agent API follows the [Open Responses](https://www.openresponses.org/) spec (`input` → typed `output`). The official SDKs are `perplexityai` on PyPI (0.46.1) and `@perplexity-ai/perplexity_ai` on npm.
- **Pricing** — the model's tokens at published rates plus per-tool fees: `web_search` \$2.50 per 1,000 calls (\$1.00 with Fast Search), `sandbox` \$0.03 per session; the Search API is \$5 per 1,000 requests (\$1 with Fast Search). Harder to predict than one Sonar price (pricing page, 2026-11-13).

### Download or use

```python
# Agent API (replaces model="sonar" on Chat Completions)
from perplexity import Perplexity   # pip install perplexityai

client = Perplexity()                # reads PERPLEXITY_API_KEY
response = client.responses.create(effort="fast", input="What are the latest developments in AI agents?")
print(response.output_text)
# raw HTTP: POST https://api.perplexity.ai/v1/agent  {"effort": "fast", "input": "..."}
```

- Site: [perplexity.ai](https://www.perplexity.ai/)
- API docs: [docs.perplexity.ai](https://docs.perplexity.ai/)

## Reasoning for

Perplexity is the factual-research layer in two projects. In [[Travelcast AI]] it powers the **Historian** agent — one of the four parallel research agents — pulling verifiable, cited facts about a destination's history that then feed the GPT consensus script ([[OpenAI]]). In the [[Jakub Głąb Agent System]] it backs the `/research` skill, giving the agent current, attributable answers for briefings. The reason it beats a raw LLM call here: the citations make hallucination auditable, and the live search means the answer isn't frozen at a training cutoff — both essential when the output is going into something a person will publish or act on. Both integrations were built on Sonar Chat Completions, so they need moving to the Agent API (`fast` is the guide's equivalent of plain Sonar; go up a level for multi-step research). Citations make hallucination auditable; they don't remove it.

## Alternatives considered

- **[[OpenAI]] / [[Google Gemini]] with web tools** — capable, but Perplexity's search+cite is purpose-built and lower-friction for pure factual lookups.
- **Firecrawl / [[Scrapling]] + own RAG** — full control over sources, far more to build and maintain; Perplexity is the managed shortcut.
- **Tavily / Exa** — search APIs aimed at agents; comparable, Perplexity adds synthesized cited answers out of the box.
- **Brave Search API / Perplexity's own Search API** — raw ranked results without synthesis; you build the answer layer yourself.

## Resources

- 📘 [Perplexity API docs](https://docs.perplexity.ai/)
- 🔁 [Migrate from Sonar to the Agent API](https://docs.perplexity.ai/docs/agent-api/migrate-from-sonar/overview)
- 🧩 [Agent API effort levels](https://docs.perplexity.ai/docs/agent-api/effort) · [Agent API models](https://docs.perplexity.ai/docs/agent-api/models)
- 💲 [Pricing](https://docs.perplexity.ai/docs/getting-started/pricing) · 📰 [Changelog](https://docs.perplexity.ai/docs/resources/changelog)
- 🔗 [[Firecrawl]] · [[Scrapling]] — complementary scraping/research tooling

---
Template: [[templates/tool]]
