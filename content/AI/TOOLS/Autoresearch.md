---
title: "Autoresearch"
date: 2026-04-05
enableToc: true
openToc: true
tags: ["tool", "ai", "research", "llm", "autonomous-agents"]
type: tool
source: "_raw/inbox/karpathyautoresearch AI agents running research on single-GPU nanochat training automatically.md"
agent-created: true
agent-reviewed: 2026-04-09
summary: "Karpathy's framework for AI agents running autonomous ML research experiments overnight"
---

# Autoresearch

AI agents autonomicznie prowadzące eksperymenty ML research na single-GPU. Projekt Andreja Karpathy'ego — dajesz agentowi setup treningowy LLM, a on modyfikuje kod, trenuje 5 minut, sprawdza wynik, zachowuje lub odrzuca zmianę i powtarza. Rano masz log eksperymentów i (hopefully) lepszy model.

> *"One day, frontier AI research used to be done by meat computers in between eating, sleeping, having other fun, and synchronizing once in a while using sound wave interconnect in the ritual of 'group meeting'. That era is long gone."* — @karpathy, March 2026

## Links
### Description
[GitHub: karpathy/autoresearch](https://github.com/karpathy/autoresearch)
### Download or use
```bash
# Requirements: single NVIDIA GPU (tested H100), Python 3.10+, uv
curl -LsSf https://astral.sh/uv/install.sh | sh
uv sync
uv run prepare.py  # one-time data prep (~2 min)
uv run train.py    # single training experiment (~5 min)
```

Po weryfikacji setupu — autonomous mode:
```
# W repo, z Claude/Codex (disable all permissions):
Hi have a look at program.md and let's kick off a new experiment! let's do the setup first.
```

## Reasoning for
Autonomiczne eksperymentowanie z architekturą i hyperparametrami modeli LLM. Agent AI (Claude/Codex) modyfikuje `train.py`, trenuje, porównuje wyniki i iteruje — ~12 eksperymentów/godzinę, ~100 przez noc.

Kluczowe design choices:
- **Single file to modify** — agent edytuje tylko `train.py`, co ogranicza scope i ułatwia review
- **Fixed 5-minute time budget** — eksperymenty są porównywalne niezależnie od zmian agenta; model optymalny dla Twojego hardware w danym budżecie czasu. Minus: wyniki nie porównywalne między platformami.
- **Self-contained** — brak external dependencies poza PyTorch, jeden GPU, jeden plik, jedna metryka (val_bpb — bits per byte, lower = better, vocab-size-independent)

Struktura projektu:
- `prepare.py` — data prep, runtime utilities (nie modyfikowane)
- `train.py` — model, optimizer, training loop (**edytowane przez agenta**)
- `program.md` — instrukcje dla agenta (**edytowane przez człowieka**) — lightweight "skill"

Nie programujesz Pythona — programujesz `program.md` markdown, który daje kontekst agentom AI i definiuje Twój autonomous research org.

### Platform support & mniejszy compute
Oficjalnie wymaga single NVIDIA GPU. Na mniejszym hardware (MacBook itp.) — rekomendacje:
1. Dataset z mniej entropy — np. [TinyStories](https://huggingface.co/datasets/karpathy/tinystories-gpt4-clean) (GPT-4 generated short stories)
2. Mniejszy `vocab_size` — z 8192 w dół do 4096/2048/1024 lub nawet byte-level (256)
3. Niższy `MAX_SEQ_LEN` — nawet 256, kompensując wyższym `DEVICE_BATCH_SIZE`
4. Niższy `EVAL_TOKENS` — mniej danych do walidacji
5. Niższy `DEPTH` — z 8 w dół do np. 4
6. `WINDOW_PATTERN` = "L" zamiast "SSSL" (alternating banded attention — nieefektywne na małym hardware)
7. Niższy `TOTAL_BATCH_SIZE` — powers of 2, np. `2**14` (~16K)

## Alternatives considered
- Tradycyjny manual ML research
- Hyperparameter sweeps (grid/random search)
- AutoML frameworks

## Resources
- [GitHub: karpathy/autoresearch](https://github.com/karpathy/autoresearch)
- [Tweet z kontekstem](https://x.com/karpathy/status/2029701092347630069)
- [Drugi tweet](https://x.com/karpathy/status/2031135152349524125)
- [Dummy's Guide](https://x.com/hooeem/status/2030720614752039185) — dobry intro dla nowych w neural networks
- [nanochat](https://github.com/karpathy/nanochat) — parent repo z wider platform support
- [[LLM Knowledge Bases]] — powiązany wątek Karpathy'ego o LLM-driven knowledge management

---
Template: [[templates/tool]]
