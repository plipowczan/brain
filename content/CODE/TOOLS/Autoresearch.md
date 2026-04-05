---
title: "Autoresearch"
date: 2026-04-05
enableToc: true
openToc: true
tags: ["tool", "ai", "research", "llm", "autonomous-agents"]
type: tool
source: "_raw/inbox/karpathyautoresearch AI agents running research on single-GPU nanochat training automatically.md"
agent-created: true
summary: "Karpathy's framework for AI agents running autonomous ML research experiments overnight"
---

# Autoresearch

AI agents autonomicznie prowadzące eksperymenty ML research na single-GPU. Projekt Andreja Karpathy'ego — dajesz agentowi setup treningowy LLM, a on modyfikuje kod, trenuje 5 minut, sprawdza wynik, zachowuje lub odrzuca zmianę i powtarza. Rano masz log eksperymentów i (hopefully) lepszy model.

## Links
### Description
[GitHub: karpathy/autoresearch](https://github.com/karpathy/autoresearch)
### Download or use
```bash
# Requirements: single NVIDIA GPU (tested H100), Python 3.10+, uv
curl -LsSf https://astral.sh/uv/install.sh | sh
uv sync
uv run prepare.py  # one-time data prep
uv run train.py    # single training experiment (~5 min)
```

## Reasoning for
Autonomiczne eksperymentowanie z architekturą i hyperparametrami modeli LLM. Agent AI (Claude/Codex) modyfikuje `train.py`, trenuje, porównuje wyniki i iteruje — ~12 eksperymentów/godzinę, ~100 przez noc.

Kluczowe design choices:
- **Single file to modify** — agent edytuje tylko `train.py`, co ogranicza scope i ułatwia review
- **Fixed 5-minute time budget** — eksperymenty są porównywalne niezależnie od zmian agenta
- **Self-contained** — brak external dependencies poza PyTorch, jeden GPU, jeden plik, jedna metryka (val_bpb)

Struktura projektu:
- `prepare.py` — data prep, runtime utilities (nie modyfikowane)
- `train.py` — model, optimizer, training loop (**edytowane przez agenta**)
- `program.md` — instrukcje dla agenta (**edytowane przez człowieka**)

## Alternatives considered
- Tradycyjny manual ML research
- Hyperparameter sweeps (grid/random search)
- AutoML frameworks

## Resources
- [GitHub: karpathy/autoresearch](https://github.com/karpathy/autoresearch)
- [Tweet z kontekstem](https://x.com/karpathy/status/2029701092347630069)
- [[LLM Knowledge Bases]] — powiązany wątek Karpathy'ego o LLM-driven knowledge management

---
Template: [[templates/tool]]
