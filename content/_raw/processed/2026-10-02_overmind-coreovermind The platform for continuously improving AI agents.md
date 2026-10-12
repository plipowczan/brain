---
title: "overmind-core/overmind: The platform for continuously improving AI agents."
source: "https://github.com/overmind-core/overmind"
author:
published:
created: 2026-10-01
description: "The platform for continuously improving AI agents. - overmind-core/overmind"
tags:
  - "clippings"
---
[![X Company Banner Stone (1)](https://private-user-images.githubusercontent.com/29205532/652611956-8ba6a64f-0819-47bd-9d58-af89ee3e7bad.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTA4NzQ0NDYsIm5iZiI6MTc5MDg3NDE0NiwicGF0aCI6Ii8yOTIwNTUzMi82NTI2MTE5NTYtOGJhNmE2NGYtMDgxOS00N2JkLTlkNTgtYWY4OWVlM2U3YmFkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjEwMDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYxMDAxVDE3MDIyNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWMzOWQzYmM5MzEwNDJkM2UwODBjNTQzZGViZDBjMjQwMTA1N2ZhZTkxNTg4M2Q4YWNiMDNmYWRjMDFhMTZlOTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.2AGgbJZ2E5X9Id0M9AUbnJOam88izF0ns1pjojrkwrE)](https://private-user-images.githubusercontent.com/29205532/652611956-8ba6a64f-0819-47bd-9d58-af89ee3e7bad.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTA4NzQ0NDYsIm5iZiI6MTc5MDg3NDE0NiwicGF0aCI6Ii8yOTIwNTUzMi82NTI2MTE5NTYtOGJhNmE2NGYtMDgxOS00N2JkLTlkNTgtYWY4OWVlM2U3YmFkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjEwMDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYxMDAxVDE3MDIyNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWMzOWQzYmM5MzEwNDJkM2UwODBjNTQzZGViZDBjMjQwMTA1N2ZhZTkxNTg4M2Q4YWNiMDNmYWRjMDFhMTZlOTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.2AGgbJZ2E5X9Id0M9AUbnJOam88izF0ns1pjojrkwrE)

## The Training Platform for Specialized Agents

[Console](https://console.overmindlab.ai/) | [Site](https://www.overmindlab.ai/) | [Self-host](#run-it-yourself)

**Overmind continuously trains & improves your agents, with data from your production traces**

Point it at your agent's codebase and it turns production traces (or any dataset) into a fine-tuned model, benchmarked against the eval metrics you define and served via 1 unified API, with no ML infrastructure to build.

> The weights are yours to download, retrain or roll back.

Available from the [Console](https://console.overmindlab.ai/), the `overmind` CLI, the [REST API](https://docs.overmindlab.ai/latest/platform/api.md), and an [MCP server](#connect-your-coding-agent) for Cursor, Claude Code, OpenCode and Codex. Hosted at [console.overmindlab.ai](https://console.overmindlab.ai/) or [run it yourself](#run-it-yourself).

| **[Agent & Capabilities](https://docs.overmindlab.ai/latest/core/capabilities.md)** | A graph of your agent — capabilities, prompts, tools, and tasks — scanned from the repo. |
| --- | --- |
| **[Observability](https://docs.overmindlab.ai/latest/core/observability.md)** | OpenTelemetry traces, scored as they arrive and matched to the capability that produced them. |
| **[Datasets](https://docs.overmindlab.ai/latest/core/datasets.md)** | Production traces or uploaded files become versioned eval and training datasets. |
| **[Eval](https://docs.overmindlab.ai/latest/agent-testing/eval.md)** | What "good" means per capability, measured on live traces and in batch. |
| **[Optimisers](https://docs.overmindlab.ai/latest/agent-testing/optimisers.md)** | Prompt, tool, and control-flow experiments in your repo; the winner is a git diff. |
| **[Models](https://docs.overmindlab.ai/latest/models/training.md)** | Fine-tunes you own, trained on your data and benchmarked against production. |
| **[Inference](https://docs.overmindlab.ai/latest/models/inference.md)** | Trained and frontier models on one OpenAI-compatible API. |

[![playframe](https://private-user-images.githubusercontent.com/29205532/653508149-246a21c5-e07a-4414-981e-f60d6308a729.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTA4NzQ0NDYsIm5iZiI6MTc5MDg3NDE0NiwicGF0aCI6Ii8yOTIwNTUzMi82NTM1MDgxNDktMjQ2YTIxYzUtZTA3YS00NDE0LTk4MWUtZjYwZDYzMDhhNzI5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjEwMDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYxMDAxVDE3MDIyNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVlOTY2YWFiMjU1ZWZhMGRlNDkzYzlkMDg1YTlmODU4ZDZkNTQyODI1YmM4MTczOTJiYWVmYTgwMjQyYjM4YzUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.67h0Vz9zQn4HXDZUo9J2ImB0qeH_wDVw_oj83UMp5qU)](https://youtu.be/DWC0BO48154)

## Get started

### Hosted

Sign up at [console.overmindlab.ai](https://console.overmindlab.ai/), pick your coding agent on **Get started** — Cursor, Claude Code, OpenCode or Codex — and paste the onboarding prompt into it with your agent's repo open. It installs `overmind`, runs `overmind init` and `overmind sync`, and builds the context graph. From then on everything is a `/overmind` command in the same chat:

| Command | What it does |
| --- | --- |
| `/overmind ensure-tracing` | Inspect traces and instrument the agent |
| `/overmind dataset` | Build, clean, upload or export a dataset |
| `/overmind finetune` | Fine-tune, deploy and smoke-test a model |
| `/overmind optimise` | Run prompt and code optimisation |
| `/overmind backtest` | Compare models against the agent's own traces |

### Run it yourself

Self-hosting keeps traces and training data inside your own network. The hosted and self-hosted stacks are the same code.

```
git clone https://github.com/overmind-core/overmind.git && cd overmind
cp .env.example .env    # set the required keys below
docker compose up -d    # Postgres, Redis, API on :8000, Console on :5173, Celery workers, beat, Grafana on :3001
```

On first boot the API runs migrations and seeds the built-in evaluators; Swagger is at `/api/docs/`. Sign in at `http://localhost:5173` with any email and password. `docker compose exec api python manage.py seed_demo --owner <your email>` loads a full demo workspace.

**What the API needs to boot**

The API refuses to start until every required key is set, and the error names each missing one. `.env.example` documents every key.

| Required | Used for |
| --- | --- |
| `OPENROUTER_API_KEY` | Judges, evals, trace scoring, the Data Workshop, optimiser scoring, frontier inference |
| `MODAL_TOKEN_ID`, `MODAL_TOKEN_SECRET` | Modal training and serving workers (`MODAL_ENVIRONMENT` defaults to `overmind-dev`) |
| `INFERENCE_API_URL`, `INFERENCE_API_KEY` | Serving trained models — the endpoint printed by `modal deploy` and its shared secret |
| `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_BUCKET_NAME` | The fine-tuning checkpoint archive |
| `HF_TOKEN` | Gated Hugging Face base models; also set it in the Modal secret |

| Optional | Effect |
| --- | --- |
| `CURSOR_API_KEY` | Recommended for the Data Workshop: runs the dataset agent as a Cursor Composer session |
| `OPENAI_API_KEY` | The `embedding_cosine` evaluator |
| `ANTHROPIC_API_KEY`, `GEMINI_API_KEY` | Fallback engines for the Data Workshop; unused while `OPENROUTER_API_KEY` is set |
| `STRIPE_SECRET_KEY` | Paid plans and the credit cap; without it, usage is metered with no cap |

Fine-tuning and serving also need the Modal workers deployed (`modal deploy overbae/modal/modal_vllm_worker.py`, `register_model.py` and `modal_sft_worker.py`) and a Modal secret named `overmind-inference` with the AWS keys, `INFERENCE_API_KEY` and `HF_TOKEN`.

### Send a first trace

```
pip install "overmind[tracing]"
export OVERMIND_API_KEY=ovr_…   # project key from Console → Settings; add OVERMIND_API_URL for self-host
```
```
import overmind

overmind.init(
    service_name="support-agent", capability_id="<capability-uuid>", providers="auto"
)

@overmind.tool()
def search(query: str) -> list[dict]: ...

def handle(request: dict, session_id: str) -> dict:
    with overmind.run(
        "support-run", intent=request["question"], conversation_id=session_id
    ) as run:
        answer = agent(request)
        run.deliver(answer)  # the final output that gets scored
        return answer
```

`providers="auto"` instruments the LLM SDKs you already use over OpenTelemetry; without a key, tracing is off and nothing breaks. Any OTel exporter can `POST /api/v1/traces` instead, and existing traces in Langfuse, LangSmith, Braintrust or Galileo can be synced through a connector. Open **Observability → Task executions** to see the trace and its score.

## Connect your coding agent

Overmind ships an MCP server at `/api/mcp/` with tools, resources and prompts for the platform's agent workflows. Account API keys and OAuth connections can access every active project their account is authorized to use: call `list_projects`, then pass the selected `project_id` on project tools and resource URIs. Membership is checked on every operation. Project API keys remain limited to their configured project. Every tool declares what it costs to run (`free`, `compute`, `llm`, `gpu`) and none can delete anything.

The [optional plugin](https://github.com/overmind-core/overmind/blob/main/overmind/README.md#mcp-and-optional-plugins) packages the MCP connection, Overmind branding and nine workflow skills. OAuth connections remain authorized until revoked; access tokens expire after one hour and refresh tokens rotate. Direct MCP connections can use an API key without OAuth or a plugin.

`overmind init --ide <cursor|claude|opencode|codex>` prepares the local configuration and `overmind sync` installs the repository's project API key. To configure an API key by hand:

**Cursor** — `.cursor/mcp.json`
```
{
  "mcpServers": {
    "overmind": {
      "url": "https://api.overmindlab.ai/api/mcp/",
      "headers": { "X-Api-Key": "ovr_…" }
    }
  }
}
```
**Claude Code**
```
claude mcp add --transport http overmind https://api.overmindlab.ai/api/mcp/ --header "X-Api-Key: ovr_…"
```
**OpenCode** — `opencode.json`
```
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "overmind": {
      "type": "remote",
      "url": "https://api.overmindlab.ai/api/mcp/",
      "enabled": true,
      "headers": { "X-Api-Key": "ovr_…" }
    }
  }
}
```
**Codex** — `.codex/config.toml`
```
[mcp_servers.overmind]
url = "https://api.overmindlab.ai/api/mcp/"
http_headers = { "X-Api-Key" = "ovr_…" }
```
**What the tools cover**

| Domain | Tools |
| --- | --- |
| Projects | `list_projects` |
| Observability | `inspect_capability_health`, `query_failures`, `query_traces`, `query_task_executions`, `get_job` |
| Datasets | `list_datasets`, `inspect_dataset`, `query_dataset`, `create_dataset_from_traces`, `create_dataset_from_llm_calls`, `message_dataset_agent`, `run_dataset` |
| Evaluations | `check_evaluation_readiness`, `upsert_evaluator`, `run_evaluation`, `compare_evaluations`, `annotate_evaluation_sample` |
| Training | `check_finetune_readiness`, `estimate_finetune`, `start_finetune`, `retry_deployment`, `set_active_model`, `run_inference`, `get_model_swap_prompt` |
| Optimiser | `check_optimizer_readiness`, `start_optimizer`, `inspect_optimizer_result` |
| Connectors | `inspect_connectors`, `configure_connector`, `sync_connector` |
| Instrumentation | `get_instrumentation_plan`, `verify_instrumentation` |
| Catalog | `get_model_catalog` |

Prompts such as `investigate-capability`, `finetune-capability` and `ship-model` chain the tools into complete workflows.

For a self-hosted instance, replace the host with your API URL (`http://localhost:8000` locally). Keys are written to git-ignored files only; `overmind sync` will not write a key into a tracked file.

---

## Contributing

Open an [issue](https://github.com/overmind-core/overmind/issues/new), or a PR from a feature branch using `.github/PULL_REQUEST_TEMPLATE.md` — `main` is protected and `AGENTS.md` describes how we work. Questions go to the [Discord](https://discord.gg/TPF722ZKuj).

---

## Telemetry

The SDK and CLI send anonymous usage analytics to PostHog — one `cli.invoked` event per CLI run and `sdk_init` on library use; never prompts, trace contents, keys or dataset contents. Opt out with `OVERMIND_ANALYTICS_ENABLED=false` or `DO_NOT_TRACK=1`; analytics is also off when `CI` is set. Your traces go only to your own project.

---

## Licence

The platform (`overbae/`, `frontend/`) is [AGPL-3.0](https://github.com/overmind-core/overmind/blob/main/LICENSE). The SDK and CLI (`overmind/`) stay [MIT](https://github.com/overmind-core/overmind/blob/main/overmind/LICENSE). A commercial licence is a paid alternative from Overmind Ltd if you need different terms — [support@overmindlab.ai](mailto:support@overmindlab.ai).

[![[cdaafd8da0a67d8fdf9d8692b4ad4c76_MD5.svg]]](https://github.com/overmind-core/overmind/blob/main/frontend/src/assets/overmind-eye-copper.svg)

[docs.overmindlab.ai](https://docs.overmindlab.ai/) · [overmindlab.ai](https://www.overmindlab.ai/)