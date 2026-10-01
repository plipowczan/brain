---
title: "Laya"
date: 2026-10-01
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "decision-models", "classification", "multilingual", "python", "mcp", "self-hosted", "open-source", "apache-2.0"]
type: tool
source: "_raw/processed/2026-10-01_NandhaKishorMlaya Non-autoregressive System 1 decision engine.md"
agent-created: true
summary: "NandhaKishorM/laya — open-source Jev-compatible System 1 decision engine: typed choice/score/yes-no answers in one encoder pass (33 ms on T4), 100+ languages via a router; fine-tune first"
---
# Laya

🗒️ **[NandhaKishorM/laya](https://github.com/NandhaKishorM/laya)** is an open-source, non-autoregressive "System 1" decision engine. You give it a state (text, an email, a ticket, a JSON document) and typed questions. It answers all of them in **one forward pass** of an encoder: about 33 ms for one question and 7.2 ms per question batched, measured on a T4. It never generates text, so there is nothing to parse. Weights are Apache 2.0 on Hugging Face (`convaiinnovations/laya*`). It is trained with reinforcement learning against strictly proper scoring rules, which the README calls RLCD.

🚀 The part that matters most to me: its HTTP server speaks **the same `POST /v1/systemone` wire protocol as TypeSafe's hosted Jev API**, with a schema-identical answer payload. An existing Jev client only needs its `baseUrl` changed. That makes Laya a self-hosted fallback for Jev (see [[Jev Engineering for Coding Agents]]).

## Links
### Description
🧩 **Three question types:** `choice` (pick one of named options, with a probability per option), `score` (ordered levels) and `noul` (yes/no, returned as P(true)). The type really is spelled `noul`, matching Jev's API.

🧩 **Three checkpoints and a router:**

| Checkpoint | Encoder | Params | Context | Use it for |
|---|---|---|---|---|
| `laya` | ModernBERT-large | 421M | 512 | English |
| `laya-multilingual` | mmBERT-base | 322M | 1,024 (up to 8,192) | 100+ languages, 2× faster |
| `laya-typed-decisions` | ModernBERT-large | 421M | 1,024 | the typed-decisions workflows (fine-tuned) |

`Router` detects the script and language in under 0.5 ms of pure Python and sends non-English text to `laya-multilingual`. The README explains why with an alarming example: the English checkpoint scores **0.000 accuracy on Khmer at 95.2% confidence**. It stays confident while it is wrong, so confidence gating can't save you there. Very short Latin-script text ("Esqueci minha senha") carries too little signal to detect the language and falls to `default`, which you should set to `"multilingual"` if most of your traffic isn't English.

🧩 **Surfaces:**

- Python SDK (`pip install laya`, Python 3.10+), with `predict`, `predict_batch`, `predict_long`, `decide` and `decide_batch`
- `laya` CLI with ready-made presets: `triage`, `email`, `guard`, `moderation`, `router`
- `laya-serve` (FastAPI): a Jev-compatible `/v1/systemone` endpoint plus `/v1/systemone/batch` (up to 64 states)
- A local playground and JSON API: `python examples/server.py`
- An MCP server (`laya[mcp]`), [[LangGraph]]/LangChain conditional-edge routing, LlamaIndex selectors, CrewAI routing
- ONNX export with per-channel INT8 for CPU; a TileLang GPU fast path
- JS/TS: `laya-ts` runs inference locally through ONNX, and `laya-client` talks HTTP to a self-hosted `laya-serve`
- Prediction hooks (for example, redact the state before the model sees it), schema-driven decisions (JSON schema in, schema-shaped values out), opt-in abstention with `min_confidence=`, and `predict_shortlist` (embed and keep the top-k labels for high-cardinality questions)

### Download or use
```bash
pip install laya                     # or: uv add laya
laya "I was charged twice, please refund"            # routing only, offline, no download
laya "My payment failed twice" --preset triage       # answer a preset question set
pip install "laya[serve]" && laya-serve              # Jev-compatible server on :8000
```

```python
from laya import Router
router = Router()
result = router.predict(state, {
    "department": {"type": "choice", "instructions": "Which department?",
                   "criteria": {"billing": "invoices, refunds", "technical": "bugs", "other": "everything else"}},
    "churn_risk": {"type": "noul", "instructions": "Does the user threaten to cancel?"},
})
```

Fine-tuning notebook: runs on Kaggle's free 2× T4 (build the dataset, train, fit temperatures, evaluate, push to the Hub).

## Reasoning for
**The README's "Honest limits" section is the best thing in the repo.** It reads like a vendor arguing against its own marketing, and it changes how I'd use the tool:

- **The base checkpoints are near chance zero-shot.** On the typed-decisions benchmark they score 0.362 and 0.352. Random guessing gets 0.318 and always picking the majority class gets 0.461. All of the 0.766 headline comes from fine-tuning on that benchmark's own training split. In the README's words, Laya is "a fast base to specialise, not a zero-shot decision engine."
- **It ships overconfident.** Fitting one temperature per (question type, option count) on held-out data drops mean ECE from 0.466 to 0.081 on `laya`. `laya-multilingual` ships with **no** fitted temperatures, so fit them before trusting its probabilities.
- **Negation is unsafe.** In one issue, four negated cancellation requests all came back `cancel_account` on the English checkpoint, one of them at probability 0.9998.
- **`noul` can follow its option labels instead of the state** on the English checkpoint. A criteria-less `noul` there answers "no" whatever you send. Give it explicit `criteria`, or use a two-option `choice` with neutral keys (`A` / `B`).
- **Options share a fixed token budget.** At default settings a 77-option question (Banking77) leaves about 3–4 tokens per label, and accuracy falls to 0.425 against Jev's 0.870. Raise `head_max_len`/`max_len`, shortlist with embeddings, or split the question into coarse and fine.
- **`score` is the weakest primitive** (SST-5 0.372), and `laya-multilingual` rarely picks the first-listed level.

So my workflow would be: label a few hundred real decisions, fine-tune on the free Kaggle notebook, fit temperatures, then gate on confidence. The result is a 421M model I own, which can run on CPU through the INT8 ONNX export and costs nothing per call. The README publishes no CPU latency figures, so I'd measure that first. For PLSOFT client automations (ticket triage, intake routing, prompt-injection guards) that's a better deal than a per-token API, provided the client has labelled history. MASSIVE covers 51 languages, so `BENCHMARKS.md` is where I'd check Polish before relying on the multilingual checkpoint.

## Alternatives considered
**Laya vs Jev**, as published in the README. Jev's figures are third-party numbers; Laya's authors had no TypeSafe API access, so samples and prompts differ:

| | Jev 1.13.0 | Laya (routed) |
|---|---|---|
| typed-decisions, 2,000 decisions | 0.727 | **0.766** (fine-tuned checkpoint) |
| AG News / DAIR Emotion | 0.910 / 0.480 | **0.950 / 0.595** |
| Banking77 | **0.870** (72 labels) | 0.425 (77 labels) |
| ECE (lower is better) | 0.246 | **0.081** after temperature fitting |
| p50 latency, 1 question | 236–276 ms | **32.8 ms** |
| Weights / cost | closed API, $0.042 per 1M tokens | Apache 2.0, $0 self-hosted |

Jev keeps the lead on high-cardinality label sets, soft accuracy against a teacher's distributions (0.580 vs 0.471) and raw calibration before temperature fitting.

- **Jev (TypeSafe)**: the closed, hosted original. See [[Jev Engineering for Coding Agents]].
- **[[Drex]]**: Nace.ai's commercial sub-10B decision model. It claims #1 on Decision Index 0.2, with self-hosting and custom tuning sold as a service. It's much bigger than Laya and closed, but positioned to work zero-shot.
- **An LLM plus [[Instructor]] / [[Outlines]]**: no training, any model, but a sampled answer and no calibrated distribution.

## Resources
- 🔗 Repo: [github.com/NandhaKishorM/laya](https://github.com/NandhaKishorM/laya) · [docs](https://nandhakishorm.github.io/laya/) · [BENCHMARKS.md](https://github.com/NandhaKishorM/laya/blob/main/BENCHMARKS.md)
- 🤗 Checkpoints: [laya](https://huggingface.co/convaiinnovations/laya) · [laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual) · [laya-typed-decisions](https://huggingface.co/convaiinnovations/laya-typed-decisions)
- 📓 [Fine-tuning notebook (Kaggle 2× T4)](https://github.com/NandhaKishorM/laya/blob/main/notebooks/laya_finetune_typed_decisions_2xT4_kaggle.ipynb)
- 📊 Third-party Jev latency benchmarks: [AbdelStark/jev-benchmarks](https://github.com/AbdelStark/jev-benchmarks) · [nibzard/decision-model-benchmark](https://github.com/nibzard/decision-model-benchmark)
- 📖 Related: [[Drex]] · [[Jev Engineering for Coding Agents]] · [[Instructor]] · [[Outlines]] · [[LangGraph]]

---
Template: [[templates/tool]]
