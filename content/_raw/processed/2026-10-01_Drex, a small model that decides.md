---
title: "Drex, a small model that decides"
source: "https://www.nace.ai/drex"
author:
published:
created: 2026-09-27
description: "Drex is a small model that decides. It returns a probability for every option in one forward pass, and Drex 1.1 tops the public Decision Index ahead of Jev 1.13.0 with under 10B parameters."
tags:
  - "clippings"
---
## Introducing Drex.A small model that decides.

Facts in, a probability for every option out. One pass, and no text to parse.

[Get started](https://drex.nace.ai/?utm_campaign=drex-launch&utm_content=hero&utm_medium=website&utm_source=nace.ai)

52.82

Decision Index 0.2, rank 1

+1.15

over Jev 1.13.0

21

of 40 tests won

<10B

total parameters

Decision Index 0.2Drex 1.1 and the top 5 of 50 entries

52.82Drex

51.67

50.94

47.23

46.08

45.73

Drex 1.1<10B Jevn/a AutoJev27.8B Rune25.8B Decider27.8B Jevfire27.8B

The axis starts at 45, not zero. Total parameters under each name; Jev's size is not published.

<video title="Drex commanding a Terran base in StarCraft II, with its decisions listed on the right" src="https://media.nace.ai/drex/drex-starcraft.mp4" controls=""></video>

0:16 / 0:30

## Trusted by

Big Four

accounting firm

![CLA](https://www.nace.ai/logos/navi/cla.svg)

## First on the public Decision Index. Ahead of every other model.

Decision Index 0.2 scores 40 tests of deciding rather than writing: contracts, causes, tool calls, routing, judgment. Every score is chance-corrected, so guessing at random scores zero. Drex 1.1 leads all 50 entries with under 10B parameters; every other model in the top ten with a published size has 12B to 36B.

|  | Drex 1.1 | Drex 1.0 | Jev 1.13.0 | AutoJev-27B | Surogate Rune | Decider chat |
| --- | --- | --- | --- | --- | --- | --- |
| Overall  Decision Index 0.2, 40 tests. Every cell is chance-corrected: 0% is random guessing. | 52.82 | 51.73 | 51.67 | 50.94 | 47.23 | 46.08 |
| Knowledge & Reasoning  GSM8K · accuracy | 87.1% | 85.1% | 75.6% | 61.1% | 70.1% | 49.3% |
| Knowledge & Reasoning  MuSR · accuracy | 31.5% | 31.7% | 46.0% | 39.3% | 45.0% | 40.6% |
| Language Understanding  ContractNLI · macro-F1 | 75.3% | 80.5% | 59.1% | 68.4% | 67.4% | 62.4% |
| Language Understanding  ANLI · macro-F1 | 47.6% | 45.7% | 62.2% | 56.0% | 56.8% | 61.9% |
| Retrieval & Classification  BANKING77 · macro-F1 | 85.1% | 86.0% | 79.5% | 78.8% | 75.9% | 74.8% |
| Retrieval & Classification  BRIGHT · nDCG@10 | 14.5% | 12.6% | 15.1% | 15.5% | 14.3% | 14.7% |
| Tools & Automation  BFCL · case exact accuracy | 95.5% | 89.2% | 94.3% | 96.8% | 92.8% | 96.7% |
| Tools & Automation  API-Bank · accuracy | 85.0% | 73.5% | 88.0% | 83.8% | 80.1% | 79.3% |
| Arts & Human Taste  Humicroedit · accuracy | 29.8% | 31.5% | 23.7% | 24.8% | 26.2% | 21.7% |
| Arts & Human Taste  BPoMP · accuracy | 69.0% | 50.1% | 81.8% | 87.8% | 81.7% | 75.7% |
| Knowledge & Reasoning  ChessBench · accuracy | 15.2% | 15.7% | 9.8% | 9.8% | 11.3% | 10.3% |
| Knowledge & Reasoning  SATA-Bench · case exact accuracy | 21.5% | 21.3% | 25.4% | 28.9% | 33.7% | 33.9% |
| Language Understanding  FinEntity · macro-F1 | 84.3% | 84.6% | 80.8% | 89.6% | 77.9% | 73.3% |
| Language Understanding  WinoGrande · accuracy | 68.0% | 61.3% | 83.9% | 70.3% | 62.1% | 66.4% |
| Retrieval & Classification  CLINC150 · macro-F1 | 90.8% | 94.1% | 89.2% | 87.7% | 86.9% | 85.0% |
| Retrieval & Classification  PhishNChips · accuracy | 18.8% | — | 25.1% | 19.9% | 57.5% | 35.1% |
| Tools & Automation  ToolRet · nDCG@10 | 43.5% | 42.2% | 39.1% | 40.7% | 38.7% | 38.5% |
| Tools & Automation  RouterBench · selected quality (quality objective) | 51.9% | 52.8% | 52.7% | 52.4% | 52.7% | 52.6% |
| Arts & Human Taste  POP909 · accuracy | 75.4% | 73.8% | 15.9% | 37.3% | 12.9% | 17.5% |
| Knowledge & Reasoning  GPQA Diamond · accuracy | 25.2% | 15.7% | 71.4% | 32.6% | 26.5% | 39.5% |
| Arts & Human Taste  cfcolor · accuracy | 22.2% | 29.6% | 28.8% | 28.8% | 24.2% | 26.8% |
| Knowledge & Reasoning  CRUXEval · accuracy | 63.3% | 62.4% | 57.1% | 60.2% | 52.7% | 42.9% |
| Knowledge & Reasoning  HLE · accuracy | 0.0% | 0.0% | 4.4% | 0.0% | 0.0% | 0.0% |
| Language Understanding  iSarcasmEval · Sarcasm F1 · track A, English | 48.6% | 64.4% | 36.3% | 49.0% | 36.4% | 30.3% |
| Language Understanding  HellaSwag · accuracy | 91.8% | 91.2% | 92.7% | 92.0% | 89.6% | 93.9% |
| Retrieval & Classification  SGD · macro-F1 | 15.5% | 10.1% | 5.1% | 0.0% | 0.0% | 0.0% |
| Tools & Automation  Home appliances · case exact accuracy | 28.1% | 16.3% | 52.5% | 70.6% | 38.8% | 41.9% |
| Tools & Automation  When2Call · accuracy | 86.5% | 88.1% | 74.6% | 75.6% | 65.7% | 71.3% |
| Arts & Human Taste  ForecastBench · Brier skill vs always 0.5 | 15.0% | 12.9% | 30.6% | 22.1% | 14.2% | 25.6% |
| Arts & Human Taste  Habermas · accuracy | 40.3% | 41.3% | 21.5% | 15.5% | 18.0% | 14.2% |
| Knowledge & Reasoning  MMLU-Pro · accuracy | 51.1% | 37.8% | 80.5% | 60.1% | 58.7% | 58.2% |
| Knowledge & Reasoning  CLadder · accuracy | 77.8% | 80.7% | 45.3% | 49.0% | 40.6% | 32.7% |
| Language Understanding  ACOS · case exact accuracy | 3.3% | 0.2% | 6.3% | 0.5% | 0.5% | 0.8% |
| Language Understanding  VAST · macro-F1 | 66.3% | 64.2% | 46.9% | 56.2% | 41.8% | 37.6% |
| Knowledge & Reasoning  BBH · accuracy | 53.5% | 47.4% | 89.7% | 68.3% | 62.3% | 60.5% |
| Retrieval & Classification  Amazon ESCI · macro-F1 | 45.2% | 45.4% | 43.8% | 43.7% | 41.1% | 34.4% |
| Language Understanding  NLI4CT · macro-F1 | 59.2% | 53.3% | 69.0% | 70.5% | 61.4% | 65.0% |
| Arts & Human Taste  New Yorker · accuracy | 69.2% | 65.9% | 62.6% | 62.8% | 57.6% | 65.9% |
| Language Understanding  RAGTruth · F1 on hallucinated class | 71.1% | 72.3% | 60.1% | 66.6% | 61.7% | 57.6% |
| Retrieval & Classification  HoVer · accuracy | 73.4% | 70.8% | 45.7% | 48.4% | 43.0% | 36.0% |

Drex 1.1 was scored on 2026-09-25 with the official scorer, on all 40 benchmarks; unanswered rows count as wrong. Drex 1.0, the previous checkpoint, is shown beside it; PhishNChips was never scored for it and is left out of its Retrieval average. Other entries are the public board's published scores, read 2026-09-24.

[Join the community to learn more](https://discord.gg/XJ8nc4dzE)

## Ask it a question. It tells you how likely each answer is.

Send Drex the facts of a case and the options you would accept. One pass through the model returns a probability for each one. It never writes text, so there is nothing to parse and nothing it can make up.

You send

Wire of $48,700 to a first-time counterparty in a higher-risk jurisdiction. Sender's 90-day average is $6,100. Stated purpose: equipment purchase. Invoice attached.

What should we do with this payment?

escalate to analyst · request evidence · clear

one pass

You get back

escalate to analyst 57%

request evidence 32%

clear 11%

A probability for every option. Nothing written, nothing to parse. Example values; recorded answers are further down the page.

## It is not a chatbot. It is the other kind of thinking.

Psychologists call the deliberate, step-by-step kind System 2 and the practised, intuitive kind System 1. A chat model is System 2: it writes its way to a decision. A decision model is System 1: it has seen the shape of the decision before and answers in one pass, with how sure it is.

A chat model

Drex

### How it answers

Thinks out loud, one word at a time, then names an answer at the end.

Reads the case once and scores every option in the same pass.

### What comes back

A sentence, or JSON you parse and hope names one of your options.

A probability for each option you offered. Nothing else can come back.

### A distribution, not a verdict.

Because the answer is a probability for every option, you can see how close the call was. Threshold it, route the uncertain cases to a person, and act on the confident ones without reading a word.

Each board is an example case, and each pile is the probability on one option. Recorded answers are further down the page.

Accounts payableWhat should happen to this invoice?

hold for buyer

dispute

approve

## So it is like Jev? Same kind of model. Ahead of it on the index.

Jev is the decision model the public index is named after. Drex answers the same requests in the same shape, scores higher on the index, and reads 5× fewer tokens to do it.

On the indexDrex 1.1 on Decision Index 0.2, Jev 1.13.0 at 51.67

+0123456789.01234567890123456789

points ahead, winning 21 of 40 tests

Tokens read per decisionmedian of eight identical requests

Drex 1.170 tokens

Jev 1.13.0367 tokens

## Drex 1.0 also beats Jev at board games, 117 to 92.

Eight games, 256 matches, every legal move offered as an option. Neither model looks ahead; each move is one pass over the board. Drex 1.0 won more matches than Jev in five of the eight, and in the total.

Drex 1.0 11747 drawsJev 92

GameDrex 1.0 · draw · JevW–D–LScore

- Checkers19–9–473.4%
- Four in a Row22–0–1068.8%
- Chess8–22–259.4%
- Clobber18–0–1456.3%
- Nine Men's Morris13–10–956.3%
- Reversi15–0–1746.9%
- Dots and Boxes14–0–1843.8%
- Lines of Action8–6–1834.4%

A head-to-head we ran between Drex 1.0 and Jev 1.13.0 with the Kaggle Game Arena harness, OpenSpiel rules. Every game has 16 openings, each played from both sides, so neither model keeps the first move. Score counts a win as one and a draw as a half. Drex 1.1 has not played the tournament yet.

## See it answer. Real cases, recorded replies.

Pick a case. The same text and questions went to both columns, and neither wrote a sentence back.

Choice + yes/no on the same customer message the official Jev docs example.

The case

Customer: I was charged twice last Tuesday and I am furious. Order #4419. I want a refund today.

The questions

topic choice

What is the issue about?

billing · bug · shipping

urgent noul

Escalate to a human now?

recorded 2026-09-24

Drex

72 tokens read

topic choice

billing 0.997

bug 0.001

shipping 0.001

urgent noul

noyes0.732

Jev 1.13.0

365 tokens read

topic choice

billing 1.000

bug 0.000

shipping 0.000

urgent noul

noyes0.490

Run your own case.

Paste a case, name the options, and get the probabilities back. Free to try, no card needed.

[Get started](https://drex.nace.ai/?utm_campaign=drex-launch&utm_content=playground&utm_medium=website&utm_source=nace.ai)

On topic, Jev returns a flat 1.000 and 0.000 where Drex returns a distribution you can threshold.

## Runs where your data lives.

Small enough to own, and to keep. Every way of running Drex answers the same request in the same shape.

### Self-hosted

In your own cloud account, at the edge or on-premises. The model fits on one accelerator, so the decision layer never leaves your network.

### Managed

On Nace-managed infrastructure, with capacity, scaling and upgrades handled for you.

### Hybrid

Keep the decisions that touch regulated data in your environment and send the rest to managed capacity. Same request, same answer.

### Tuned on your decisions

The results on this page come from training on decision data. We tune Drex on your labelled outcomes and ship you the weights.

0123456789.0123456789%

of answers unchanged in FP8

### Drex 1.1 in FP8 decides like it does in bf16.

The FP8 weights take about half the memory. On 2,511 questions they gave the same answer as bf16 on 98.1%, moved probabilities by 0.015 on average and 0.29 at most, and scored 92.57% accuracy against 92.49% in bf16.

## Questions, answered.

A decision model answers closed questions with numbers instead of writing text. You send the facts and the options; one forward pass returns a probability for every option. There is no token stream, no chain of thought and no JSON to repair, so the failure modes of chat models (truncation, malformed output, invented options) do not arise. Drex can only ever answer with options you gave it.

Three. Pick one of several: named options in, the chosen one plus a probability for each out. Yes or no: the probability that the answer is yes. Rate on a scale: ordered levels in, the expected level plus the spread across levels out. Several questions about one case can share a single pass.

Drex 1.1 scores 52.82 on Decision Index 0.2, ahead of Jev 1.13.0 at 51.67 and of the strongest community entry, AutoJev-27B, at 50.94. It wins 21 of the 40 benchmarks, with its largest margins on chord recognition, causal inference, multi-hop fact checking, stance detection and group consensus, and it trails on graduate-level science, multi-step reasoning puzzles and broad subject knowledge. Every result, including every loss, is in the table on this page.

Drex 1.1 has under 10B parameters, the smallest model in the top ten of Decision Index 0.2. Every other top-ten model with a published size has 12B to 36B parameters, and Jev's size is not published. The strongest other model under 10B on the board, Decision 1.0 Lux, scores 38.98, nearly fourteen points below Drex. Sizes are total parameters: mixture-of-experts models such as Decider 35B-A3B use only part of their weights per request, but still have to hold all of them in memory.

It is trained on the official training splits of the index benchmarks alongside verifiable procedural data, and evaluated only on the held-out splits with the official scorer. That is how the leaderboard is designed to be run. It also explains the shape of the results: the model is strong where it has seen the kind of decision before, which is exactly the property that makes it worth tuning on your decisions.

Yes. It fits on a single accelerator, so it runs in your cloud account, at the edge or on-premises, as well as on Nace-managed infrastructure or a mix of the two. Every deployment answers the same request in the same shape. We also tune Drex on your labelled outcomes and ship you the weights.

## SOC 1 and SOC 2 compliant. Audited, not promised.

Independent auditors test the controls around Drex, so it can go where the decisions are regulated.

SOC 1

### Financial reporting controls

The controls your auditors rely on when a Drex decision feeds a financial-reporting process: access, change management and operations.

SOC 2

### Security controls

Our Type II report covers how Drex is built, deployed and supported. An independent auditor tested those security controls over months of operation.

### Shorter vendor reviews

Send security and procurement the reports instead of filling in another questionnaire.

### Ready for your own audit

Drex can sit inside processes your auditors already test, without a separate exception.

### Data stays where you put it

Run it self-hosted or hybrid and the cases it reads never leave your network.

### Every decision on the record

Each answer is a probability over the options you supplied, so every decision can be logged and reviewed.