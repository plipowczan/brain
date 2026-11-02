---
title: "How to Be More Ambitious with Models (Felix Rieseberg)"
date: 2026-11-02
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "claude", "prompts", "agents", "multi-agent", "verifiability", "red-teaming", "methodology", "psychology", "ambition"]
type: knowledge-note
source: "_raw/processed/2026-11-02_How to be more ambitious A tutorial for humans with models.md"
source_url: "https://felixrieseberg.com/how-to-be-more-ambitious-a-tutorial-for-humans-with-models/"
author: "Felix Rieseberg"
published: 2026-10-13
agent-created: true
summary: "Felix Rieseberg (Anthropic) on using models more ambitiously along four axes: speed, altitude (outcomes over tasks), depth (a top professional's standard, raw data, an outside judge) and range (more fields, a crew, a red team), plus the self-efficacy research behind aiming higher."
---

# How to Be More Ambitious with Models (Felix Rieseberg)

## 🗒️ Description

An essay by **Felix Rieseberg**, an engineering manager at Anthropic, published 2026-10-13 on [his blog](https://felixrieseberg.com/how-to-be-more-ambitious-a-tutorial-for-humans-with-models/). He has led engineering for Claude.ai, Cowork and Claude Code Desktop, co-maintains Electron, and worked at Notion, Stripe, Slack and Microsoft before that.

His starting point is that model capability is uneven (Terence Tao: models are "astounding in some directions, while inadequate in others"), and so is the way people use it. Some get remarkable results; many never get past asking simple questions. The bottleneck he cares about is not the model but the ambition of the person driving it, and he splits ambition into four axes.

🚀 **The one-line version:** stop asking the model to do your task faster. Ask it for the outcome behind the task, at the standard of the best professional in the field, drawing on fields you would never have staffed, and give it a computer and an outside judge so it can get there.

The clipping arrived with frontmatter only, so this note is built from the live page, read on 2026-11-02.

## 🔗 Links

- [Four kinds of ambition](#-four-kinds-of-ambition)
- [Altitude: outcomes, not tasks](#-altitude-outcomes-not-tasks)
- [Depth: a top professional's standard](#-depth-a-top-professionals-standard)
- [Range: more fields than you would staff](#-range-more-fields-than-you-would-staff)
- [Prerequisite: a model with a computer](#-prerequisite-a-model-with-a-computer)
- [We have been here before](#️-we-have-been-here-before)
- [Claim check](#-claim-check)
- [What I take from it](#️-what-i-take-from-it)

## 🧩 Four kinds of ambition

| Axis | What it means | His example |
|------|---------------|-------------|
| **Speed** | The same work, done faster | Writing code quicker with Claude. Well understood, so he skips it. |
| **Altitude** | Work one level of abstraction up: the outcome, not the task | From "fix this crash" to "keep the apps crash-free" |
| **Depth** | Push the task to a top professional's standard, one layer deeper into the data and tools | A churn analysis with a real statistical model instead of a markdown table |
| **Range** | Bring in more fields than used to be economical | A 3D-rendered homepage, from someone who had never thought of 3D for it |

## 🧩 Altitude: outcomes, not tasks

- **The question to ask:** what should happen next, and what is the goal behind the goal I just stated? His own shift was from asking Claude to fix individual crashes to asking it to keep the apps crash-free.
- **Worked example:** a quarterly business review (QBR) for a fictional Acme Inc., in three steps up.
  1. **Input:** don't fill a template. Hand over as much business data as you can and ask what changed, why, and what to do about it.
  2. **Decisions:** ask for the three most urgent decisions, with the case for and against each direction, and have it start drafting options.
  3. **Redesign:** ask it to design something better than a quarterly deck for catching problems early and moving money and people, back-test that design against the company's history, and run it next to the current process for a quarter.
- **Where it fits:** best when there is a clear end outcome, weaker for creative work. A good tell is work that would normally take meetings. He is explicit that "Claude, go make money" does not work on its own for most businesses in 2026.
- **Durable workflows:** altitude is what takes the human out of task-by-task prompting, but only if the environment is built for it. For "crash-free" he had to make crash reports easy to fetch, map app versions to git commits, and give Claude Windows, macOS and Linux machines to reproduce and verify fixes. That is [[Loop Engineering]] and [[Harness Engineering]] under another name.

## 🧩 Depth: a top professional's standard

Running example: Acme's customer churn. Five techniques:

- **Use the industry's real instruments.** Ask for a database and a statistical model, not a markdown table. Telling a model to "act like a professional" tends to change its vocabulary, not its method.
- **Set unreasonable goals and call them reasonable.** Ask for a 200 ms load time instead of 5 s, and push it to keep going when it says something is impossible.
- **Challenge what you know.** Give it the raw data and ask it to attack your assumptions. Is churn really an onboarding problem?
- **Produce new knowledge.** Ask it to find your blind spots: build a simulation of your customers, find the earliest churn signal nobody knows about, and test it on data it has not seen.
- **Use an outside judge.** Don't let the model grade its own work. Validate externally, ideally with a tool the model can run itself for immediate feedback. Same idea as the verifier layer in [[Karpathy Method]] and the zero-context reviewers in [[Elephant-Goldfish Model (EGM)]].

### A reusable "make it deeper" prompt

He shares a meta-prompt that asks for a deeper version of a task, not a bigger one. My paraphrase, ready to reuse:

```text
Before you do this task, rewrite my prompt so it asks for a deeper version of it, not a bigger one. First:
1. Name what a top professional in this field would do here that I have not asked for.
2. Name the rawest source material that professional would start from, instead of pre-digested summaries.
3. Name the specific methods and tools they would use.
4. Name what, other than my judgment or yours, would show that the result is correct.
Then give me the rewritten prompt that asks for exactly that.
```

## 🧩 Range: more fields than you would staff

Multi-agent setups (threads, orchestrators, subagents) make it cheap to bring in disciplines you would never have paid for, and he has seen good results from simply asking Claude to pull in more fields.

- **Example:** his colleague Alex Albert used Blender to render interior designs. Rieseberg had never considered a 3D environment for his own homepage, even though he has built video games.
- **Replace nouns with verbs** (from Tom Kelley and Jonathan Littman's *The Art of Innovation*). A QBR is not "a deck". It is the job of getting busy people to accept a cause-and-effect story and decide under uncertainty in 30 minutes. Once the task is a verb, the fields that could help become visible.
- **Assemble the crew.** For the QBR: an analyst, a journalist and an editor; a motion and audio designer if it will be presented; and a red team of a short seller and a forensic accountant.
- **Caution:** role-play makes the transcripts stranger without making the results better. Use the roles to find fields and techniques, then ask the model to *do* what each professional does, not to *write like* them. That is a direct critique of persona-style prompt libraries such as [[40 AI Prompts for Expert Output]].

## 🧩 Prerequisite: a model with a computer

All of this assumes the model has a computer where it can install software and reach the relevant data, through MCP connectors or other means. A chat window with pasted excerpts can't do altitude, depth or range.

## ✍️ We have been here before

The second half argues that the limit is self-belief, and that this is an old problem.

- **People trust themselves only in narrow lanes.** Michelangelo reportedly resisted painting the Sistine Chapel because he saw himself as a sculptor.
- **Self-efficacy**, the belief in your own ability, shapes what you accomplish. Locke and Latham reviewed 35 years of goal-setting research and found that specific, hard goals beat "do your best". Patrick Collison's *Fast* page collects projects done with bold goals and tight deadlines.
- **Three ways ambition gets unlocked:**
  - *Believing a hard thing is possible.* In 1939 George Dantzig solved two open statistics problems because he mistook them for homework.
  - *Seeing someone else do it.* Roger Bannister broke the four-minute mile in May 1954 and held it alone for only 46 days. Rieseberg thinks the two-hour marathon is following the same pattern: Sabastian Sawe ran the first official sub-two in London in April 2026, and the runner-up also went under two hours in the same race.
  - *Permission to fail.* *The Inner Game of Tennis*, whose core idea is that trying very hard can make you play worse, and Linux, which Torvalds announced as a hobby project.
- **Closing:** self-efficacy is old, but it matters more now that capability moves every few weeks. He asks readers to send him their own techniques.

## 🔍 Claim check

- **Who is speaking:** an Anthropic engineering manager arguing that people should use Claude more ambitiously. The advice is reasonable and useful, but not neutral: more ambitious use is more use. The post sells nothing beyond that.
- **The AI side rests on anecdote.** The four axes and the techniques come from his own work and his colleagues', with no measurement of how much each one helps. The research he cites (Locke and Latham) is about human goal-setting, not prompting.
- **"Set unreasonable goals"** pulls against [[DELEGATE-52]]: pushing a model past "impossible" without an outside judge is how silent corruption and confident fake fixes get through. His outside-judge rule is what makes the first rule safe, so I'd never use one without the other.
- **The history matches the usual accounts:** Dantzig (1939, Jerzy Neyman's class at Berkeley), Bannister (6 May 1954; John Landy went under four minutes 46 days later), and Locke and Latham's 2002 "35-year odyssey" review in *American Psychologist*. The Michelangelo reluctance is the traditional account.
- **The sub-two-hour marathon** (Sawe, London, April 2026) is his claim. I have not verified it.

## ☘️ What I take from it

- **Ask the altitude question before I prompt.** "What is the goal behind this goal?" For this vault the altitude move is from "ingest this file" to "keep the inbox processed", which is what [[External Triggers for Claude Code]] is about.
- **The environment is the real work.** His crash-free example only worked after crash reports, version-to-commit mapping and three OS machines were in place. That is the same lesson as [[Harness Engineering]]: the model's ambition is capped by what it can reach and verify.
- **Keep the deeper-prompt snippet handy.** It is short enough to paste before any non-trivial task, and a candidate for a small skill.
- **Never without an outside judge.** Tests, a validator script, or a second model with zero context: [[Elephant-Goldfish Model (EGM)]] and [[Claudex Loop]] already sit in this vault for exactly that.
- **Give subagents jobs, not personas.** When I fan out to subagents, each one gets a job (what to check, what tool to run), not a character to play.

## 📖 Further reading/watching

- Source: [How to be more ambitious: A tutorial for humans with models](https://felixrieseberg.com/how-to-be-more-ambitious-a-tutorial-for-humans-with-models/) by Felix Rieseberg, 2026-10-13
- Patrick Collison, [Fast](https://patrickcollison.com/fast)
- Locke, E. A. and Latham, G. P. (2002), *Building a practically useful theory of goal setting and task motivation: A 35-year odyssey*, American Psychologist
- Books: Tom Kelley and Jonathan Littman, *The Art of Innovation*; W. Timothy Gallwey, *The Inner Game of Tennis*
- [[Karpathy Method]] · [[Agentic Engineering]]: verifier-first use of models
- [[Loop Engineering]] · [[Harness Engineering]] · [[External Triggers for Claude Code]]: building the durable workflows altitude needs
- [[Elephant-Goldfish Model (EGM)]] · [[Claudex Loop]]: outside judges and red teams in practice
- [[DELEGATE-52]]: what delegated work looks like with no outside judge
- [[40 AI Prompts for Expert Output]]: the persona-prompt style the "do, don't write like" caution pushes against
- [[Software 3.0]]: sell the outcome, the business version of altitude

---
Template: [[templates/knowledge_note_info]]
