---
title: "Software 3.0"
date: 2026-05-28
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "agents", "paradigm", "business", "prompts"]
type: knowledge-note
source: "_raw/processed/2026-05-28_yt-hJNp9RwK-Uw_kaparthy-revealed-the-most-profitable-business-to-build-in-2.md"
source_url: "https://www.youtube.com/watch?v=hJNp9RwK-Uw"
video_id: "hJNp9RwK-Uw"
channel: "Dream Labs AI"
duration: "14m3s"
published: 2026-05-23
transcription: captions
agent-created: true
summary: "Karpathy's Software 1.0/2.0/3.0 thesis applied to business — sell the outcome, not the tool; the four moats left are data, prompting, system design, and trust"
---

# Software 3.0

## 🗒️ Description

A breakdown of [Andrej Karpathy](https://x.com/karpathy)'s **Software 1.0 → 2.0 → 3.0** thesis (from his Sequoia Capital interview) reframed as a *business* playbook: which digital business models AI is making obsolete, and what is still worth building. The core reframe — when Karpathy says "software," read it as **all digital businesses**, because every business is being projected through the software lens and restructured to be AI-first.

The promise: those who grasp the 3.0 paradigm early "will find more opportunity than has ever been possible before."

## 🚀 The three paradigms

| Paradigm | How you "program" | Installer example | Business analogue |
|----------|-------------------|-------------------|-------------------|
| **Software 1.0** | Write explicit code — every rule, step by step | Shell script: step 1 accept terms, step 2 find folder… brittle, not self-healing | Udemy course taken in fixed lecture order; Premiere Pro manual editing |
| **Software 2.0** | Program by curating **datasets** and training neural-network weights | Installer reports errors back to Apple → ML feedback loop improves install rate | YouTube engagement heatmaps + comments reshape the course; Descript AI-infused editor |
| **Software 3.0** | **Prompting** — the [[Context Engineering\|context window]] is your lever over the LLM interpreter | OpenClaw: copy-paste a skill to your agent; it inspects your machine, debugs in a loop, self-heals | A personalized expert agent that *does the work with you* and delivers the finished outcome |

> "Software 3.0 is kind of about your programming now turns to prompting. And what's in the context window is your lever over the interpreter that is the LLM." — Andrej Karpathy

## 🧩 The four real-world examples

1. **The installer** — 3.0 is an agent you summon with one command (the OpenClaw bash command). It owns the *goal* ("get OpenClaw installed") and loops through problems it has never seen before, instead of following a fixed rulebook. This is a [[Agent Skills\|little "skill"]] — a copy-paste blob handed to your agent.
2. **The app (MenuGen)** — Karpathy's own 2.0 app (photograph a menu → render dish images via Nano Banana through an MCP connection) became "instantly useless." The 3.0 version: just hand the photo to Gemini and say "use Nano Banana to overlay the items." No app to download — *"That app shouldn't exist."* This is coming for almost every app.
3. **The course / specialized knowledge** — 1.0 = sequential Udemy lectures; 2.0 = course reshaped by engagement data; 3.0 = a personalized agent (a "Max Verstappen in your headset") that coaches you *as you take action*. Example: Alex Hormozi's acquisition.com LLM trained on his whole brain — next step is "go build it *with* me," not "ask me a question."
4. **The service (video editing)** — 1.0 = manual Premiere Pro rules; 2.0 = Descript auto-trimming silences/mistakes; 3.0 = a text box: "edit this in a viral MrBeast style, under 8 minutes" → finished render in 5–10 minutes. **Software 3.0 sells the outcome, not the tool.**

## ☘️ The four moats left

When the big LLMs (Gemini, ChatGPT, Claude) can do the task directly, four defensible moats remain:

1. **Your proprietary data** — a model trained on your own knowledge/style (Hormozi's LLM; an agent that edits in *your* last-100-videos style). Your value lives in the training data, used well so it isn't AI slop.
2. **Prompt engineering / context** — a good outcome needs both the knowledge *and* the instructions + [[Context Engineering\|context]] you give the engine. Get good at this.
3. **System design around the AI engine** — the LLM is "just the engine"; you design the car, the wheels, the UX. Example: Higgsfield wraps Nano Banana in a UI that helps people get the most out of it.
4. **Trust from your audience** — "I trained an LLM on all of Elon's knowledge" from a random on Twitter vs. from Elon himself. Trust in the person and their access to genuine data is the most valuable asset.

## 📒 Takeaways

- **Don't build** static courses, single-purpose apps, or manual services that an LLM can now do directly — they're being made obsolete.
- **Do build** outcome-delivering agents wrapped in your own data, prompts, system design, and audience trust.
- Every business is being restructured to be **AI-first**: AI as the engine in the middle, you design the system around it.
- The shift mirrors [[Agentic Coding]] — you stop writing explicit logic and start designing the environment/context an intelligent agent operates in.

## ✍️ Quotes

> "All businesses are literally being restructured to be AI first… AI in the middle being the engine and driving them forward. But that is all the engine is. You get to design your own car."

> "The trust that you have in Elon Musk… his access to his own data is the most valuable thing in the future that we're heading towards."

## 🔗 Related

- [[Agentic Engineering]] — the primary Sequoia interview this video summarizes, with the vibe-coding→agentic-engineering distinction and verifiability
- [[Agentic Coding]] — the same paradigm shift from the builder's side: design agent environments, not code
- [[Context Engineering]] — "what's in the context window is your lever" made concrete
- [[Self-Improving Company]] — Karpathy-adjacent thesis on AI-first org loops
- [[Agent Skills]] — the copy-paste "little skill" install pattern Karpathy describes
- [[LLM Knowledge Bases]] — Karpathy's method for using your proprietary knowledge (moat #1)

## 📖 Further reading/watching

- 📺 Source video: [Kaparthy revealed the most profitable business to build in 2026 (Software 3.0)](https://www.youtube.com/watch?v=hJNp9RwK-Uw) — Dream Labs AI, 14 min
- Original: Andrej Karpathy's [Sequoia Capital interview](https://www.youtube.com/watch?v=hJNp9RwK-Uw) on the evolution of software

---
Template: [[templates/knowledge_note_info]]
