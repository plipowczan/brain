---
title: "Agentic Engineering"
date: 2026-05-28
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "agents", "coding-agents", "vibe-coding", "context-engineering", "verifiability"]
type: knowledge-note
source: "_raw/processed/2026-05-28_yt-96jN2OCOfLs_andrej-karpathy-from-vibe-coding-to-agentic-engineering.md"
source_url: "https://www.youtube.com/watch?v=96jN2OCOfLs"
video_id: "96jN2OCOfLs"
channel: "Sequoia Capital"
duration: "29m49s"
published: 2026-04-29
transcription: captions
agent-created: true
summary: "Andrej Karpathy at Sequoia — vibe coding raises the floor, agentic engineering preserves the quality bar; verifiability, jagged intelligence, founder advice, agent-native infra, and 'you can't outsource understanding'"
---

# Agentic Engineering

## 🗒️ Description

Andrej Karpathy's interview with [Sequoia Capital](https://www.sequoiacap.com/) (the original source behind the [[Software 3.0]] breakdown). The framing hook: Karpathy — OpenAI co-founder, ex-head of AI at Tesla, who coined *vibe coding* — said he'd "never felt more behind as a programmer." In **December**, the latest agentic models crossed a threshold: code chunks "just came out fine," he stopped correcting them, started trusting the system, and went full vibe-coding. This note captures what's *new* in the interview beyond the Software 3.0 thesis: the **vibe-coding → agentic-engineering** distinction, verifiability, jagged intelligence, and what humans still own.

## 🚀 Vibe coding vs. agentic engineering

The central new idea: these are two different things.

- **Vibe coding** — *raises the floor*. Everyone can now build software; the floor rises for all. Amazing and democratizing.
- **Agentic engineering** — *preserves the ceiling*. It's a real engineering discipline: keep the professional quality bar (no new vulnerabilities, you're still responsible for your software) **while** going faster. Agents are "spiky entities" — fallible, a little stochastic, but extremely powerful; the craft is coordinating them without sacrificing the quality bar.

> "Vibe coding is about raising the floor for everyone... agentic engineering is about preserving the quality bar of what existed before in professional software."

The ceiling is very high: the old "10× engineer" is now magnified far beyond 10× for people who are good at this.

## 🧩 Software 3.0, restated

Quick recap (full treatment in [[Software 3.0]]): 1.0 = writing code; 2.0 = curating datasets + training weights; 3.0 = **prompting**, where the context window is your lever over the LLM interpreter. Karpathy's installer example: OpenClaw installs not via a ballooning shell script but a copy-paste blob handed to your agent — *"a little skill."* MenuGen: his 2.0 app (photo → image-gen overlay, deployed on Vercel) is made "spurious" by just handing the photo to Gemini + Nano Banana.

> "What is the piece of text to copy-paste to your agent? That's the programming paradigm now."

He stresses this isn't just *faster* programming — it's general **information processing** that's newly automatable. His [[LLM Knowledge Bases]] project (LLMs compiling wikis from your documents) is a thing that *couldn't exist before*: no prior code could "recompile" facts into a new, insightful reframing.

## ☘️ Verifiability — the key constraint

- Traditional computers automate **what you can specify in code**. This generation of LLMs automates **what you can verify**.
- Frontier models are trained in giant RL environments with verification rewards. So capability becomes **jagged**: peaks in verifiable domains (math, code, adjacent), rougher everywhere else.
- Jaggedness = *verifiable* **+** *labs care* (what they put in the data distribution). Chess jumped GPT-3.5→4 not as general progress but because lots of chess data was added.
- Founder takeaway: a **verifiable** problem is tractable now — you can throw RL at it, and even build your own RL environments / fine-tune ("pull the lever") independent of what the labs prioritize.
- Long-run: "**everything is automatable**" — even fuzzy domains like writing, via a council of LLM judges. It's a question of easy vs. hard, not possible vs. impossible.
- Practical implication: figure out which "circuits" you're in. In-distribution → you fly; out-of-distribution → expect to struggle and look at fine-tuning.

> "How is it possible that a state-of-the-art model will refactor a 100,000-line codebase or find zero-day vulnerabilities, and yet tell me to walk to a car wash 50 metres away?"

## 📒 What humans still own

- **Taste, judgment, aesthetics, oversight.** Agents fill in the blanks; you own the spec, plan, and top-level design. Example of agent weirdness: MenuGen's agent tried to cross-correlate Stripe vs. Google **email addresses** to match funds instead of using a persistent user ID — a "why would you ever do that" mistake a human must catch.
- **Fundamentals over API trivia.** Karpathy no longer memorizes `keepdim` vs `axis`, `reshape` vs `permute` — the "intern" has perfect recall for that. But you must still understand tensor views/storage so you're not silently copying memory around.
- **Understanding itself.** *"You can outsource your thinking, but you can't outsource your understanding."* He feels like the **bottleneck** — knowing what to build and why, directing the agents. LLMs don't excel at understanding; you uniquely do.

## 🧠 Agent-native infrastructure

- Pet peeve: docs are still written for humans. *"Why are people still telling me what to do? ... What is the thing I should copy-paste to my agent?"*
- The shift: describe systems to **agents first**; decompose workloads into **sensors** (read the world) and **actuators** (act on the world); keep data structures **legible to LLMs**.
- His litmus test: prompt an LLM "build MenuGen" and have it deploy end-to-end (the Vercel/DNS/settings config was harder than the code) without touching anything.
- Direction of travel: **agent representation** for people and orgs — "my agent talks to your agent" to arrange meetings.
- **Hiring** must be refactored: stop giving puzzles; give a big project (e.g. "build a secure Twitter-clone for agents," then have 10 agents try to break it) and watch how the candidate wields the tooling.

## 🐦 Animals vs. ghosts

On his "jagged intelligence" / "we're not building animals, we are summoning ghosts" framing: these are statistical simulation circuits (pre-training substrate + RL bolted on), **not** animal intelligences shaped by curiosity or evolution. Yelling at them does nothing. The value of the framing is mostly a *mindset* for using them competently — being appropriately suspicious and figuring out empirically what works.

## 📖 Takeaways

- The discipline to build for is **agentic engineering**: speed without dropping the quality bar — spec, oversight, taste, and verification around fallible-but-powerful agents.
- Pick **verifiable** problems; they're tractable now and let you build your own RL/fine-tuning moat.
- Invest in your **setup** and your **understanding** — the durable human edges. The agent handles recall and fill-in.
- This vault ([[Brain]]) is a direct instance of Karpathy's [[LLM Knowledge Bases]] insight: a wiki recompiled from sources, where "a different projection onto information" yields insight — a tool for **understanding**, the thing you can't outsource. Links straight to the [[Self-Improving Company]] "legible context" thesis.

## ✍️ Quotes

> "You can outsource your thinking, but you can't outsource your understanding."

> "We're not building animals. We are summoning ghosts."

> "Everything is automatable."

## 🔗 Related

- [[Software 3.0]] — the third-party breakdown of this same interview (business-playbook angle)
- [[Karpathy Method]] — tactical 3-layer distillation (spec / verifier / environment) of how to apply this in Claude Code
- [[LLM Knowledge Bases]] — Karpathy's own method, named directly here; the basis of this vault
- [[Agentic Coding]] — designing agent environments instead of writing code
- [[Context Engineering]] — the context window as the lever
- [[Harness Engineering]] — "invest in your setup" made concrete
- [[Karpathy Skills]] — Karpathy's CLAUDE.md addressing typical LLM-coder pitfalls
- [[Self-Improving Company]] — agent-native, legible-context org thesis

## 📖 Further reading/watching

- 📺 Source: [Andrej Karpathy: From Vibe Coding to Agentic Engineering](https://www.youtube.com/watch?v=96jN2OCOfLs) — Sequoia Capital, 29:49
- Karpathy's writing on verifiability and "animals vs. ghosts" (referenced in the talk)

---
Template: [[templates/knowledge_note_info]]
