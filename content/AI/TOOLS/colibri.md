---
title: "colibri"
date: 2026-11-19
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "local", "inference", "moe", "self-hosted", "open-source", "apache-2.0", "c"]
type: tool
sources: ["_raw/processed/2026-11-19_JustVuggcolibri A hierarchical inference engine for frontier MoE models.md"]
agent-created: true
repo: "https://github.com/JustVugg/colibri"
summary: "JustVugg/colibri — an inference engine in C that runs MoE models larger than RAM: dense part in RAM, routed experts streamed from NVMe, hottest experts on the GPU; OpenAI/Anthropic APIs, a Jev-compatible decision endpoint, Apache 2.0"
---
# colibri

🗒️ **[JustVugg/colibri](https://github.com/JustVugg/colibri)** is an inference engine written in C that runs very large open mixture-of-experts (MoE) models on hardware you already own. It keeps the dense part of the model in RAM, reads the routed experts from the disk when the router asks for them, and puts the hottest experts and the dense layers on a GPU when there is one. There's one C file per model family over shared headers, no BLAS and no Python at runtime (Python only runs the setup, the launcher, the converters and the API gateway). Apache 2.0, by Vincenzo Fornaro. It started as a one-person project on a 12-core laptop with 25 GB of RAM; the README's sample session shows v2.1.0.

🚀 **The idea in one sentence:** an MoE model doesn't have to *fit* in fast memory, it has to be *placed*. GLM-5.2 has 744B parameters, uses about 40B per token, and only about 11 GB of those change from one token to the next (the routed experts). So the design rule is that **placement only decides speed**: the router's decisions and the weights' precision are the same whether an expert came from VRAM, RAM or disk. Less fast memory costs tokens per second, it must not quietly change the model.

![[ATTACHMENTS/7e53170af29fa60241ebf52cdc9885a5_MD5.png]]

## Links
### Description

🧩 **What it runs** — thirteen engines:

- **Ten language-model engines:** GLM-5.2/5.3 (also runs Mistral-Large-4), GLM-5.3-Flash, Inkling, Kimi K3, DeepSeek V4 Flash, DeepSeek V4.1 Flash, MiMo-V2.6 Flash and Pro, Qwen3.8-Flash-Next, Qwen3.6 (also runs Qwen3-Coder, the dense Qwen3.8-27B, Flint, Muse Spark Open and LFM3-VL) and OLMoE.
- **One image engine:** Qwen-Image-2.1 (text to picture, non-commercial licence).
- **Two decision engines:** [[Laya]] and GLiNER2.5-Decide, plus Clef (Cloudflare) on the Qwen3.6 engine.
- **GGUF files read as they are:** `./coli import` takes a published GGUF and runs its blocks as the file holds them (IQ1_S to Q8_0, F16, BF16, MXFP4) — no re-quantization.

🧩 **How a token is computed** — every layer walks five steps: route, union, place, overlap, learn.

![[ATTACHMENTS/8cc846d9338ed8bbe3400f7518dfb764_MD5.png]]

- **A JIT for weights.** Measured routing heat decides which experts earn VRAM, RAM or disk: a per-layer LRU cache plus a pinned hot set learned from your own conversations (`.coli_usage`, updated every turn). It gets faster the more you use it.
- **Never wait for the disk twice.** An expert's three matrices come in one `pread`, a loader pool reads missing experts while resident ones compute, and a router-lookahead thread can prefetch the next layer (GLM-5.2's routing is 71.6% predictable one layer ahead). `DIRECT=1` (O_DIRECT) often helps on fast NVMe and is neutral or worse elsewhere — measure it.
- **More than one SSD.** `COLI_MODEL_MIRROR` reads from a copy on a second drive; two NVMe drives on independent controllers measured **+37.5% decode**.
- **From laptop to rack.** On a 25 GB laptop every expert streams from disk; on a big host every expert is resident and the disk drops out. `COLI_NUMA=1` for multi-socket hosts, and a local cluster mode runs routed experts on other machines.
- **A faithful model.** Every engine is checked in CI against its model's reference implementation on a tiny fixture. GLM-5.2's compressed MLA KV state (576 floats per token instead of 32,768) survives restarts, so a conversation reopens without re-reading the prompt.
- **Speculation only where it pays.** MTP heads on GLM-5.2, Qwen3.8-Flash-Next (+16–20%) and Qwen3.6; switched off where drafting costs more than it saves (DeepSeek V4).

🧩 **Backends** — the CPU is enough; a GPU is a faster place to keep weights:

- **Vulkan, any GPU** (AMD, Intel, NVIDIA, integrated or discrete): an expert tier in GPU memory plus a "dense chain" that records a whole layer as one GPU submission.
- **CUDA** for NVIDIA (Linux build, a prebuilt DLL on Windows), with every layer on the card for Qwen3.6, Qwen3.8 and OLMoE.
- **Metal** on Apple Silicon for several engines.
- **Integrated GPUs are a trap for small models.** An iGPU shares the CPU's RAM, so it only pays when it saves expert reads: Qwen3.6 went from 6.0 to 9.9 tok/s on a Radeon 780M, while OLMoE dropped from 23.1 (CPU) to 12.8 tok/s (Vulkan expert tier). The setup turns Vulkan on for an iGPU only for the models measured faster there.

🧩 **Surfaces** — `coli serve` is one server with several APIs:

- **OpenAI-compatible** `/v1/chat/completions`, `/v1/completions`, `/v1/models` (streaming, JSON replies, logprobs).
- **Anthropic-compatible** `/v1/messages`, so [[Claude Code]] and the Anthropic SDKs work against it.
- Tool calling on every chat engine except Inkling and OLMoE; images in on the vision models; documents in (`/file PATH`, text or PDF); pictures out with Qwen-Image-2.1; up to 16 parallel conversations with `--kv-slots`.
- **System One**: `POST /v1/systemone` — see below.
- A dashboard (`coli web`) with the chat, the System One page, the "Brain" expert map and a Profiling page; a separate chat UI (`coli ui`).
- An MCP server (`coli mcp`) with tools to detect the hardware, recommend a model, install, start, stop and check it, and `docs/AI_SETUP.md` written for coding assistants (it tells the assistant to ask before downloading a model or installing a system package).

![[ATTACHMENTS/52520bb5207c3eeec48f020bf4d64aa1_MD5.png]]

*OLMoE with the expert map open: a cell per expert in each block, white when chosen in this step, amber when used in this answer.*

🧩 **System One: decisions with a probability.** You send a state (text or JSON) and typed questions (`choice`, `noul`, `score`); each answer comes back as a probability per allowed option plus a confidence, and nothing is generated. The request and reply are **TypeSafe's Jev API**, so a Jev client switches by changing `TYPESAFE_BASE_URL`, and the two official SDKs are tested unmodified against `coli serve` (see [[Jev Engineering for Coding Agents]]). Two ways to answer:

- **Any chat model, by scoring** — it reads the probability of each option instead of writing an answer. On Qwen3.6, four questions about one document came back 5.7× faster than generating the answers on the same CPU box.
- **Three native decision models** with their authors' calibration: [[Laya]] (Convai Innovations), GLiNER2.5-Decide (fastino) and Clef (Cloudflare, also chats).

### Download or use
```bash
# Linux (macOS: brew install libomp git python first)
git clone https://github.com/JustVugg/colibri
cd colibri
./start-here.sh            # Windows: double-click START-HERE.bat
```

The one-step setup checks RAM, disk, CPU and GPUs, recommends the largest model that fits, builds or downloads the engine (CUDA, Vulkan or CPU), downloads the model with resume, then starts the server and the dashboard:

```text
Browser:             http://127.0.0.1:8000/
OpenAI base URL:     http://127.0.0.1:8000/v1
Anthropic base URL:  http://127.0.0.1:8000
```

Useful flags: `--list` (every model against this machine, and why one doesn't fit), `--model ID`, `--dir DIR` (models on another disk), `--backend vulkan|cuda|cpu`. By hand: `coli chat | web | serve | plan | doctor | tune | import | ui --model <dir>`. Minimum: 8 GB of RAM (16+ better) and 22 GB of free disk for the smallest model.

### What runs on which machine

Numbers are the project's own and its community's, decode speed unless noted:

| Model | Download | RAM (start / as measured) | Measured |
|---|---|---|---|
| Qwen3.6-35B-A3B | 23 GB | 10 / 20 GB | 6.0 tok/s CPU (Ryzen 7 PRO 8700GE); 30 tok/s CUDA (RTX 3070); 92.9 Vulkan, 104.8 CUDA (RTX PRO 4000, 24 GB) |
| OLMoE (7B) | 14 GB → 7 GB int8 | 8 GB | 22–23 tok/s CPU; 354.6 CUDA (RTX PRO 4000) |
| DeepSeek V4 Flash (284B) | 167 GB | 16 / 32 GB | 0.93–1.24 tok/s CPU only; 1.5–1.6 CUDA (RTX 5080) |
| GLM-5.2 (744B, the reference model) | 429 GB | 16 / 24 GB | 0.05–0.1 tok/s cold on a 25 GB laptop; 1.83 on a 128 GB Ryzen AI Max+ 395; 9.0–9.2 on 6× RTX 5090 |
| Kimi K3 (2.8T, the largest) | 1.56 TB | 32 / 64 GB | about 9.4 s per token, experts read at 6.3 GB/s |

![[ATTACHMENTS/e78ef93a615b1410dd6fabd3566c6781_MD5.png]]

For the large models **the disk sets the speed** and a fast NVMe helps most; for the small ones, the RAM.

## Reasoning for

What I'd use it for, and what I'd watch out for (I haven't run it yet):

- **A local Claude Code / agent backend on a machine with a real GPU.** Qwen3.6-35B-A3B at ~100 tok/s on a 24 GB card, behind an Anthropic-compatible endpoint, is the realistic sweet spot. The frontier-sized models at 1–2 tok/s are for batch jobs and curiosity, not for an interactive agent loop.
- **Offline work on data that can't leave the machine.** Same reason as [[Ollama]], but for models Ollama can't hold in memory.
- **Local System One decisions.** A Jev-compatible endpoint that serves [[Laya]], GLiNER2.5-Decide and Clef natively, or any chat model by scoring. For PLSOFT-style triage and routing that gives me a self-hosted Jev fallback with more than one model behind it.
- **The research honesty is the selling point.** "An optimisation earns its place with a reproducible end-to-end measurement", the default never silently changes precision or router semantics, and the README publishes its negative results: MTP measured a 32% loss around 85% expert hit, integrated GPUs can lose to the CPU, and the older per-row int4 GLM-5.2 mirrors measured about 9 quality points worse and caused looping answers. Its open-questions table even asks contributors to publish negative results.

Caveats:

- Speed claims come from the project and community issues, on named machines — measure on mine (`coli tune`) before planning around them.
- Model licences vary: Qwen-Image-2.1 is non-commercial, Muse Spark Open is under Meta's licence agreement, GLM-5.2 is MIT.
- Expect a very large disk bill for the big models (GLM-5.2 429 GB, Kimi K3 1.56 TB), and WSL users must keep models off `/mnt/c` (many times slower).

## Alternatives considered

- **[[Ollama]]** — the easy path for models that fit in RAM or VRAM, with a curated library. colibri's reason to exist is the models that don't fit.
- **llama.cpp** — the GGUF engine; colibri reads the same GGUF files unchanged and credits llama.cpp for its grammar subset and a Metal residency trick.
- **kTransformers** — CPU/GPU expert offloading for MoE models, cited in colibri's acknowledgements as prior work.
- **vLLM** — production GPU serving with high throughput; colibri uses it as the reference for output semantics.
- **Hosted APIs** — far faster and better on hard tasks, but paid and off-device.

## Resources
- 🔗 Repo: [github.com/JustVugg/colibri](https://github.com/JustVugg/colibri) · [website](https://justvugg.github.io/colibri) · [Discord](https://discord.gg/RXV83nSZdk)
- 📖 Docs: [quickstart](https://github.com/JustVugg/colibri/blob/main/docs/quickstart.md) · [benchmarks](https://github.com/JustVugg/colibri/blob/main/docs/benchmarks.md) · [System One](https://github.com/JustVugg/colibri/blob/main/docs/systemone.md) · [API](https://github.com/JustVugg/colibri/blob/main/docs/api.md) · [GGUF](https://github.com/JustVugg/colibri/blob/main/docs/gguf.md) · [Vulkan](https://github.com/JustVugg/colibri/blob/main/docs/vulkan.md) · [tuning](https://github.com/JustVugg/colibri/blob/main/docs/tuning.md) · [AI_SETUP](https://github.com/JustVugg/colibri/blob/main/docs/AI_SETUP.md) · [MCP server](https://github.com/JustVugg/colibri/blob/main/docs/MCP_SERVER.md)
- 📖 Related: [[Laya]] · [[Jev Engineering for Coding Agents]] · [[Ollama]] · [[LLM App Engineering Stack]] · [[AI Tools Map]]

---
Template: [[templates/tool]]
