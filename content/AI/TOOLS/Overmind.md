---
title: "Overmind"
date: 2026-10-02
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "fine-tuning", "observability", "evaluation", "self-improving", "mcp", "self-hosted", "open-source", "agpl-3.0", "mit"]
type: tool
source: "_raw/processed/2026-10-02_overmind-coreovermind The platform for continuously improving AI agents.md"
agent-created: true
summary: "overmind-core/overmind — training platform that turns an agent's production traces into evals, code/prompt optimisations and fine-tuned models you own, served on one OpenAI-compatible API; driven from your coding agent via MCP"
---
# Overmind

![[cdaafd8da0a67d8fdf9d8692b4ad4c76_MD5.svg]]

🗒️ **[overmind-core/overmind](https://github.com/overmind-core/overmind)** is a training platform for specialized agents. You point it at an agent's codebase and it turns the agent's **production traces** (or any dataset) into versioned eval sets, prompt and code optimisations, and **fine-tuned models**. Those models are benchmarked against eval metrics you define and served next to frontier models on one OpenAI-compatible API. In the README's words, "the weights are yours to download, retrain or roll back." Hosted at [console.overmindlab.ai](https://console.overmindlab.ai/) or self-hosted with Docker Compose. The platform is AGPL-3.0; the SDK and CLI are MIT.

🚀 The pitch is the full improvement loop in one product: trace → score → dataset → eval → optimise or fine-tune → backtest → serve. Most tools I track own one or two of those steps.

## Links
### Description
🧩 **The pieces** (from the README):

| Piece | What it does |
|---|---|
| **Agent & Capabilities** | A graph of the agent (capabilities, prompts, tools, tasks), scanned from the repo |
| **Observability** | OpenTelemetry traces, scored on arrival and matched to the capability that produced them |
| **Datasets** | Production traces or uploaded files become versioned eval and training datasets |
| **Eval** | What "good" means per capability, measured on live traces and in batch |
| **Optimisers** | Prompt, tool and control-flow experiments run in your repo; **the winner is a git diff** |
| **Models** | Fine-tunes trained on your data and benchmarked against production |
| **Inference** | Trained and frontier models on one OpenAI-compatible API |

🧩 **Driven from the coding agent.** The onboarding prompt goes into Cursor, [[Claude Code]], OpenCode or Codex with the agent's repo open. It installs the CLI, runs `overmind init` and `overmind sync`, and builds the context graph. After that everything is a slash command in the same chat:

| Command | What it does |
|---|---|
| `/overmind ensure-tracing` | Inspect traces and instrument the agent |
| `/overmind dataset` | Build, clean, upload or export a dataset |
| `/overmind finetune` | Fine-tune, deploy and smoke-test a model |
| `/overmind optimise` | Run prompt and code optimisation |
| `/overmind backtest` | Compare models against the agent's own traces |

🧩 **MCP server** at `/api/mcp/`, about 35 tools across projects, observability, datasets, evaluations, training, optimiser, connectors, instrumentation and the model catalog. Prompts such as `investigate-capability`, `finetune-capability` and `ship-model` chain them into whole workflows. Two design choices I like:

- **Every tool declares its cost class** (`free`, `compute`, `llm`, `gpu`), so the coding agent knows before it calls `start_finetune` that it's about to spend GPU money.
- **No tool can delete anything.** Membership is checked on every call. Project API keys are limited to their project. `overmind sync` refuses to write a key into a git-tracked file.

An optional plugin bundles the MCP connection with nine workflow skills.

🧩 **Instrumentation** is light:

```python
import overmind

overmind.init(service_name="support-agent", capability_id="<capability-uuid>", providers="auto")

@overmind.tool()
def search(query: str) -> list[dict]: ...

def handle(request: dict, session_id: str) -> dict:
    with overmind.run("support-run", intent=request["question"], conversation_id=session_id) as run:
        answer = agent(request)
        run.deliver(answer)  # the final output that gets scored
        return answer
```

`providers="auto"` instruments the LLM SDKs you already use over OpenTelemetry. Without an API key, tracing switches off and nothing breaks. You don't need the Python SDK: any OTel exporter can `POST /api/v1/traces`. Connectors also sync existing traces from [[Langfuse]], LangSmith, Braintrust and Galileo.

### Download or use
- **Hosted:** sign up at [console.overmindlab.ai](https://console.overmindlab.ai/), pick your coding agent on *Get started*, paste the onboarding prompt.
- **Self-host:**

  ```bash
  git clone https://github.com/overmind-core/overmind.git && cd overmind
  cp .env.example .env    # set the required keys
  docker compose up -d    # Postgres, Redis, API :8000, Console :5173, Celery workers + beat, Grafana :3001
  ```

  Swagger is at `/api/docs/`. `docker compose exec api python manage.py seed_demo --owner <email>` loads a demo workspace.
- **MCP by hand (Claude Code):** `claude mcp add --transport http overmind https://api.overmindlab.ai/api/mcp/ --header "X-Api-Key: ovr_…"`. For self-host, swap in your own API URL.

⚠️ **"Self-hosted" still depends on several clouds.** The API refuses to boot until all of these are set: `OPENROUTER_API_KEY` (judges, evals, trace scoring, optimiser scoring, frontier inference), Modal tokens (training and serving workers), an inference endpoint, an AWS S3 bucket (checkpoint archive) and `HF_TOKEN`. Fine-tuning also needs three Modal workers deployed. The README says self-hosting "keeps traces and training data inside your own network", but by my reading of that key list, training and serving run on your Modal account and trace scoring goes through OpenRouter. So data does leave the box, just under your own accounts. For anything client-confidential, that is the part to check.

⚠️ **Telemetry:** the SDK and CLI send anonymous usage events to PostHog (never prompts, traces, keys or datasets). Opt out with `OVERMIND_ANALYTICS_ENABLED=false` or `DO_NOT_TRACK=1`. It is off automatically when `CI` is set.

## Reasoning for
It closes the loop that [[Self-Improving Company]] describes in the abstract: production usage becomes the training signal, and the agent gets better without someone hand-building an ML pipeline. Three things make it more than a tracing dashboard:

- **Evals are anchored to capabilities, not to the whole agent.** "What good means" is defined per capability and measured on live traces. That is the granularity where regressions actually show up.
- **Optimiser output is a git diff.** Prompt and control-flow changes land as a reviewable code change in the repo, not as a mutated prompt in a vendor UI. That fits how I already work: the agent proposes, I review the PR.
- **Backtesting on your own traces** before swapping a model is the step people skip when moving from a frontier model to a cheaper fine-tune.

It pairs naturally with the small specialized models I noted recently. [[Laya]]'s own "honest limits" say to fine-tune before trusting it, and [[Drex]] is a sub-10B decision model trained on task-specific splits. Overmind is the factory for exactly that kind of model, trained on my own traffic instead of a public benchmark.

Where I'd try it: an agent with one narrow, high-volume capability (classification, extraction, routing) currently served by an expensive frontier model, where a fine-tuned small model plus a backtest could cut cost. The SDK shown is Python, but since ingestion is plain OpenTelemetry, a TypeScript agent can export traces too.

What I'd watch:

- **Young and broad.** Seven subsystems plus training infrastructure is a big surface for a new project. I'd start hosted and only self-host once the loop proves itself.
- **Eval quality bounds everything.** Fine-tunes are benchmarked against the evaluators you write. Weak evals produce a confidently worse model. The judge-model scoring runs through OpenRouter, so cost scales with trace volume.
- **AGPL-3.0 on the platform.** Fine for internal use; running a modified version as a service for others triggers source-sharing (a commercial licence exists).

## Alternatives considered
- **[[Langfuse]]**: tracing, prompt management, evals and datasets, but no training or serving. Overmind can ingest Langfuse traces, so the two can stack.
- **[[Promptfoo]]**: pre-deploy evals and red-teaming in CI. A gate, not a production loop.
- **[[DSPy]]**: optimises prompts (and weights) against a metric in code. Closer in spirit to Overmind's optimiser lane, but a library you wire up yourself, with no trace ingestion or serving.
- **[[Autoharness]]**: self-improvement for a *coding* agent's skill layer, judged by adherence. Overmind does the same for a *production* agent's prompts, code and weights, judged by evals.
- **Provider fine-tuning APIs**: train on a hosted model, but you don't own the weights and there's no eval/backtest loop around them.

## Resources
- 🔗 Repo: [github.com/overmind-core/overmind](https://github.com/overmind-core/overmind) · docs: [docs.overmindlab.ai](https://docs.overmindlab.ai/) · site: [overmindlab.ai](https://www.overmindlab.ai/)
- 📄 Docs pages: [capabilities](https://docs.overmindlab.ai/latest/core/capabilities.md) · [observability](https://docs.overmindlab.ai/latest/core/observability.md) · [eval](https://docs.overmindlab.ai/latest/agent-testing/eval.md) · [optimisers](https://docs.overmindlab.ai/latest/agent-testing/optimisers.md) · [training](https://docs.overmindlab.ai/latest/models/training.md) · [REST API](https://docs.overmindlab.ai/latest/platform/api.md)
- 🎥 Demo: [youtu.be/DWC0BO48154](https://youtu.be/DWC0BO48154)
- 📖 Related: [[LLM App Engineering Stack]] (eval & observability lane) · [[Langfuse]] · [[DSPy]] · [[Self-Improving Company]] · [[Laya]] · [[Drex]] · [[Autoharness]]

---
Template: [[templates/tool]]
