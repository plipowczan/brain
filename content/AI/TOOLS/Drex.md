---
title: "Drex"
date: 2026-10-01
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "decision-models", "classification", "evaluation", "self-hosted"]
type: tool
source: "_raw/processed/2026-10-01_Drex, a small model that decides.md"
agent-created: true
summary: "Nace.ai's sub-10B decision model: facts and options in, one probability per option out in a single pass; claims #1 on Decision Index 0.2, 1.15 points ahead of Jev"
---
# Drex

🗒️ **[Drex](https://www.nace.ai/drex)** from **Nace.ai** is a "small model that decides". You send the facts of a case and the options you would accept. One forward pass returns a probability for each option. It never writes text, so there is nothing to parse and it cannot answer with an option you didn't offer. It's commercial: managed, self-hosted or hybrid, and Nace will tune it on your labelled outcomes and ship you the weights.

🚀 It is the same kind of model as TypeSafe's **Jev** (see [[Jev Engineering for Coding Agents]]): a "System 1" decision layer that sits next to a chat model, not a replacement for one. Drex's pitch is that it beats Jev on Jev's own kind of index while reading about 5× fewer tokens.

## Links
### Description
🧩 **Three question types**, and several questions about one case can share a single pass:

- **Pick one of several**: named options in, the chosen one plus a probability per option out.
- **Yes or no**: the probability that the answer is yes. The demo labels this type `noul`, the same name Jev and [[Laya]] use.
- **Rate on a scale**: ordered levels in, the expected level and the spread across levels out.

🧩 **Headline numbers (vendor-reported, not independently verified):**

| Claim | Number |
|---|---|
| Decision Index 0.2, overall | **52.82**, rank 1 of 50 entries |
| Jev 1.13.0 / AutoJev-27B on the same index | 51.67 / 50.94 |
| Tests won | 21 of 40 |
| Size | under 10B total parameters (every other top-ten model with a published size is 12B–36B; Jev's size is not published) |
| Tokens read per decision | 70 vs Jev's 367 (median of eight identical requests) |
| Board games, Drex 1.0 vs Jev (Kaggle Game Arena harness, OpenSpiel rules, 256 matches) | 117 wins to 92, 47 draws; better in 5 of 8 games |
| FP8 vs bf16 on 2,511 questions | same answer 98.1% of the time, mean probability shift 0.015 (max 0.29), accuracy 92.57% vs 92.49% |

The index scores are chance-corrected, so random guessing scores zero. Drex 1.1 was scored on 2026-09-25 with the official scorer. The other entries are the public board's published scores, read 2026-09-24.

🧩 **Where it wins and where it loses** (from the page's full 40-row table, Drex 1.1 vs Jev 1.13.0):

- **Big wins:** chord recognition (POP909 75.4% vs 15.9%), causal inference (CLadder 77.8% vs 45.3%), multi-hop fact-checking (HoVer 73.4% vs 45.7%), group consensus (Habermas 40.3% vs 21.5%), stance (VAST 66.3% vs 46.9%), GSM8K (87.1% vs 75.6%).
- **Big losses:** graduate-level science (GPQA Diamond 25.2% vs 71.4%), multi-step reasoning puzzles (BBH 53.5% vs 89.7%), broad knowledge (MMLU-Pro 51.1% vs 80.5%), WinoGrande (68.0% vs 83.9%), smart-home tool calls (28.1% vs 52.5%).

The page publishes its losses, which I appreciate. The pattern is what you'd expect from a small model: it is good at shaped decisions it has seen before and weak where the answer depends on world knowledge or long reasoning chains.

🧩 **Deployment and compliance:** self-hosted (fits on one accelerator; your cloud, edge or on-prem), managed by Nace, or hybrid (regulated decisions stay in your network, the rest goes to managed capacity, same request shape). It has SOC 1 and SOC 2 Type II reports. "Trusted by" names an unnamed Big Four accounting firm and CLA.

### Download or use
- Playground and sign-up: [drex.nace.ai](https://drex.nace.ai/). Free to try, no card needed.
- No public weights, pricing or API reference on the launch page.

## Reasoning for
The idea I'd actually use is **"a distribution, not a verdict."** In client automations I usually ask an LLM for JSON, parse it, and hope it named one of my options. Drex returns a probability over options I supplied. Then the workflow is mechanical: act on the confident ones, send the uncertain middle to a person, and log every decision as a probability. That is the shape of AP-invoice holds, AML escalation and support triage, the exact examples on the page.

The demo makes a fair point about calibration. On a billing complaint, Jev returns billing 1.000 and the rest 0.000, so there is nothing to threshold. Drex returns 0.997 / 0.001 / 0.001, which at least gives you something to set a threshold on. [[Laya]]'s README makes the same complaint about Jev from the other side: on DAIR Emotion, Jev gave zero probability to the true label on 16% of examples. Two competitors are both saying Jev is overconfident. That's worth knowing, though both have a reason to say it.

⚠️ Caveats I'd keep in front of me:

- **It trains on the benchmark's training splits.** The FAQ says Drex is trained on the official training splits of the index benchmarks and evaluated on the held-out splits. That's allowed by how the index is run, but it means the index measures "decisions shaped like ones it trained on", not general judgment. Nace says so itself: the model is strong where it has seen the kind of decision before, which is their argument for tuning it on your data.
- **The lead is 1.15 points.** Going from Drex 1.0 (51.73) to 1.1 (52.82) moved the score by 1.09, about the same size as the whole lead over Jev. One retrain could close it or reverse it.
- **Every number is the vendor's.** Nothing here has been reproduced by a third party yet.

## Alternatives considered
- **Jev (TypeSafe)**: the incumbent this whole category is measured against; closed API. See [[Jev Engineering for Coding Agents]] for the design case for using a decision model inside a coding agent.
- **[[Laya]]**: an open-source (Apache 2.0) Jev-compatible decision engine on ModernBERT/mmBERT encoders, 33 ms per question on a T4. It's free and self-hostable, but its own README says the base checkpoints are near chance zero-shot, so you have to fine-tune it.
- **An LLM plus structured outputs ([[Instructor]], [[Outlines]])**: works with any model and needs no new vendor, but you get a sampled answer instead of a calibrated distribution, and you pay for generated tokens.
- **A fine-tuned classifier**: cheapest at inference, but one model per decision, and no typed multi-question pass.

## Resources
- 🔗 Launch page: [nace.ai/drex](https://www.nace.ai/drex) · playground: [drex.nace.ai](https://drex.nace.ai/) · [Discord](https://discord.gg/XJ8nc4dzE)
- 🎥 Demo video: [Drex commanding a Terran base in StarCraft II](https://media.nace.ai/drex/drex-starcraft.mp4)
- 📖 Related: [[Laya]] · [[Jev Engineering for Coding Agents]] · [[Instructor]] · [[Outlines]]

---
Template: [[templates/tool]]
