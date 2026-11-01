---
title: "Elephant-Goldfish Model (EGM)"
date: 2026-11-01
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "coding-agents", "claude-code", "agent-skills", "sdd", "specs", "multi-agent", "red-teaming", "methodology"]
type: knowledge-note
source: "_raw/processed/2026-11-01_yt-fo9fyl-xJQM_googles-free-elephant-goldfish-ai-agents.md"
source_repo: "https://github.com/google/elephant-goldfish-model"
source_url: "https://www.youtube.com/watch?v=fo9fyl-xJQM"
video_id: "fo9fyl-xJQM"
channel: "Julian Goldie SEO"
duration: "22m01s"
published: 2026-11-01
transcription: captions
agent-created: true
summary: "Google's open-source EGM plugin (Apache-2.0) for Claude Code, Codex and Antigravity: a deep-context elephant drafts the spec, zero-context goldfish subagents review it, the human decides. Julian Goldie video with five marketing builds, checked against the repo."
---

# Elephant-Goldfish Model (EGM)

## 🗒️ Description

**EGM** ([`google/elephant-goldfish-model`](https://github.com/google/elephant-goldfish-model), [egm.dev](https://egm.dev)) is an open-source plugin of skills for designing software with AI agents before writing code. It runs in [[Claude Code]], OpenAI Codex, Google Antigravity, Claude Cowork and ChatGPT Work. Apache-2.0, ~8.8k stars on 2026-11-01, repo created 2026-09-13. The README's own tagline: *"Design with an elephant. Review with a goldfish."*

It is built on Dave Rensin's essay [Elephants, Goldfish, and the New Golden Age of Software Engineering](https://medium.com/@drensin/elephants-goldfish-and-the-new-golden-age-of-software-engineering-c33641a48874). Rensin is a Google engineer. The repo calls itself an implementation of [[Specification-Driven Development]].

This note comes from a Julian Goldie SEO video that shows EGM on five marketing builds instead of software. The video is also a sales funnel for a paid community. I checked what it says against the repo, see [[#🔍 Claim check]].

## 🔗 Links

- [[#🚀 The main idea — three roles]]
- [[#🧩 The skills]]
- [[#🛠️ Setup and the core loop]]
- [[#🎨 The five builds from the video]]
- [[#🔍 Claim check]]
- [[#☘️ What I take from it]]

**Video chapters**

| Time | Chapter |
|------|---------|
| [0:00](https://youtube.com/watch?v=fo9fyl-xJQM&t=0s) | Google's free EGM plugin, 5 builds side by side |
| [1:10](https://youtube.com/watch?v=fo9fyl-xJQM&t=70s) | What Google just released |
| [1:48](https://youtube.com/watch?v=fo9fyl-xJQM&t=108s) | The elephant and the goldfish |
| [2:59](https://youtube.com/watch?v=fo9fyl-xJQM&t=179s) | Why your audience is a goldfish |
| [3:31](https://youtube.com/watch?v=fo9fyl-xJQM&t=211s) | 4 reviewers vs a plan that looked fine |
| [5:01](https://youtube.com/watch?v=fo9fyl-xJQM&t=301s) | The skills + systems I built (sales pitch) |
| [7:14](https://youtube.com/watch?v=fo9fyl-xJQM&t=434s) | Build 1: 3D website |
| [8:39](https://youtube.com/watch?v=fo9fyl-xJQM&t=519s) | Build 2: Instagram carousel |
| [10:06](https://youtube.com/watch?v=fo9fyl-xJQM&t=606s) | Build 3: Ad creatives |
| [11:40](https://youtube.com/watch?v=fo9fyl-xJQM&t=700s) | Build 4: Video agent |
| [13:17](https://youtube.com/watch?v=fo9fyl-xJQM&t=797s) | Build 5: Lead generation agent |
| [15:02](https://youtube.com/watch?v=fo9fyl-xJQM&t=902s) | Old way vs new way |
| [15:54](https://youtube.com/watch?v=fo9fyl-xJQM&t=954s) | How to set it up (2 commands) |
| [17:51](https://youtube.com/watch?v=fo9fyl-xJQM&t=1071s) | The other EGM skills |
| [18:32](https://youtube.com/watch?v=fo9fyl-xJQM&t=1112s) | 3 common doubts |
| [19:38](https://youtube.com/watch?v=fo9fyl-xJQM&t=1178s) | What to do this week |
| [21:25](https://youtube.com/watch?v=fo9fyl-xJQM&t=1285s) | Recap |

## 🚀 The main idea — three roles

- **Elephant.** This is the agent you have been working with for a while. It knows the project, the goals and every decision made so far, so it writes the plan. Its weak point is that same memory: it fills gaps from context nobody wrote down, so the plan looks complete to it and to you.
- **Goldfish.** A new subagent that has seen none of the conversation. It gets only the document and the files the document references, so it reads the plan the way a stranger would. Missing assumptions, unclear requirements and implementation risks show up at once.
- **You.** You read what the goldfish found, choose which findings matter, approve the plan, and only then let the agent build.

The video adds one point that holds up. Everyone who sees your work for the first time is a goldfish: someone scrolling Instagram, someone seeing an ad for one second, a first-time visitor to a landing page. So a goldfish review is a test run on a fake audience before the real one arrives.

**The clinic demo** ([3:31](https://youtube.com/watch?v=fo9fyl-xJQM&t=211s)). This was a 19-line plan for an agent that answers a local clinic's new inquiries by text and books appointments. It looked fine. Four reviewers ran in parallel, each with a different lens: is it too simple, does a beginner understand it, attack the design, could someone build it from this. All four said *not ready*, and they found:

- no rule for emergencies, so a patient texting that they are in pain gets no special handling
- two people can book the same slot at the same time (race condition)
- the plan turned it on for every customer on Monday with no test run and no off switch
- one reviewer alone caught that the contact form could be flooded with spam and used for prompt injection

## 🧩 The skills

All seven ship in the plugin. You can use any of them alone; the full sequence is optional.

| Skill | What it does |
|-------|--------------|
| `egm-brainstorm` | Clarifies the idea with you, then sends a goldfish swarm with 6 lenses at the concept and saves the agreed direction to `concepts_brief.md` |
| `egm-draft` | Turns the brief, or existing notes, into a design doc under `docs/designs/`, one section at a time, pausing for your feedback after each |
| `egm-review` | Fresh-context review in five stages: initial zoom-out, comprehension, design critique, intermediate zoom-out, implementation readiness. Presets: `interactive`, `uninterrupted`, `feature_spec`, `implementation` |
| `egm-resolve` | Walks through the review findings one by one so you can agree on changes without drowning in them |
| `egm-review-loop` | Runs a group of reviewers you configure for one specific job (Goldie built his scroller/skeptic/first-time visitor/buyer panel with it) |
| `egm-bootstrap` | Writes READMEs for an existing codebase bottom-up: leaf folders first, then a summary per parent, then the root |
| `egm-drift-report` | Compares checked-in design docs with the current code. Google suggests running it weekly; the human decides whether to fix the doc or the code |

Design details worth knowing:

- **No fresh subagent, no review.** The skill stops if the harness cannot start a subagent with empty context, because a review inside the same memory is not a goldfish review. Claude Code can do this out of the box.
- **The reviewer prompts forbid sycophancy.** The review skill bans flattering adjectives and apologies, requires critique before praise, and requires a counter-argument for every proposal.
- **Artifacts go to files, not chat.** Drafts, summaries and review reports are written to disk, and chat only gets the path.
- **Not for small fixes.** The README says it outright: for a small, clear bug fix, use your normal workflow.

## 🛠️ Setup and the core loop

Claude Code (two commands, then start a new session):

```sh
claude plugin marketplace add google/elephant-goldfish-model
claude plugin install egm@egm
```

Codex: `codex plugin marketplace add google/elephant-goldfish-model` and then `codex plugin add egm@egm`. Antigravity CLI: `agy plugin install https://github.com/google/elephant-goldfish-model`.

The core loop from the repo's getting-started guide:

1. `/egm:egm-brainstorm <the idea in plain words>` → goldfish challenge the concept → `concepts_brief.md`
2. `/egm:egm-draft` → design doc, section by section
3. `/egm:egm-review <path to design doc>` → the review gives a lot of feedback on purpose. Take what is relevant and ignore the rest.
4. **Human review**: send the design doc as a PR to another person. The video skips this step.
5. Tell the agent to build to the plan. If the result is wildly off, fix the design doc and run it again instead of patching the code.

The suggested project layout puts approved specs in `docs/designs/` with a `SITEMAP.md` index, plus an optional `<project>-elephant` skill that loads the project context.

## 🎨 The five builds from the video

Each build followed the same recipe. First the AI built from one sentence with no plan. Then the elephant wrote a one-page plan, three goldfish attacked it, the plan was fixed, and the AI built again. The useful part is the kind of gap the reviewers found, not the screenshots.

1. **3D website for a coffee subscription.** The signup buttons only scrolled down the page and choosing a plan did nothing. There was no fallback for devices that cannot render 3D, so some visitors would see a blank space. Plans, prices and FAQ answers were missing, so the AI would have made them up.
2. **Instagram carousel (5 AI tools).** The last slide broke the plan's own "every slide stands alone" rule ("pick one" — one of what?). The smallest text would shrink to about 9px on a phone. A guessed time saving was stated as a fact.
3. **Nine ad creatives for a serum.** The plan required product, benefit and offer readable in one second, yet 6 of the 9 concepts lacked one of them. The text was unreadable at phone size, and white text on an orange button had too little contrast. An extra cold-scroller goldfish rated each ad: average 2/10 before the review, 5.7/10 after.
4. **15-second promo video for a fitness app.** The review ran on the storyboard before any frame was made. The hook was an unbacked claim that could get the ad rejected, so it became a question. The calendar could be read backwards. The coaching moment showed no cause and effect, so heart rate climbing → ring turns red → coach eases you to zone 2 was put on one screen.
5. **Lead-generation agent.** The lead score was rigged: 30 of 100 points went to every business no matter what. Opt-outs were promised but never tracked, so the same people would come back tomorrow, which was fixed with statuses (new / contacted / skipped / opted out). Messages could invent facts, so now every sentence cites the signal it came from and ends with an easy way to say no.

The lesson the video draws: the goldfish don't make the design smaller, they make it clearer. The work moves to the front, where changes are cheap, instead of the back-and-forth after customers have already seen it.

## 🔍 Claim check

Checked against the repo README, `docs/getting_started.md` and `skills/egm-review/SKILL.md` on 2026-11-01.

| Claim in the video | Verdict |
|---|---|
| Google released it free and open source | ✅ `google/` org, Apache-2.0. But the README says it is *"not an officially supported Google product"*, and it appeared on 2026-09-13, about seven weeks before the video, not "just now" |
| Thousands of Google engineers use it | ⚠️ The README's own claim, with no independent evidence |
| Works in Claude Code, Codex, Antigravity | ✅ Also Claude Cowork and ChatGPT Work |
| Installs in two commands | ✅ Exact for Claude Code and Codex |
| Based on an essay by "Dave Renen" | ✅ Captions misspelled the name: it is **Dave Rensin** |
| Four reviewers check the plan | ⚠️ Simplified. `egm-review` has five stages (zoom-out runs twice), and brainstorm uses a 6-lens swarm |
| Each review takes about 40 seconds | ⚠️ The presenter's own experience; it depends on model and doc size |
| Review gives a lot of feedback on purpose; skip it for small fixes; drift report weekly | ✅ All three come from the repo's own guide |
| Five builds side by side, ads 2/10 → 5.7/10 | ⚠️ Demos, not an experiment. One run each, an AI grading AI output, and the baseline had **no plan at all**, so it compares planning with not planning, not EGM with other planning methods |
| "Goldfish audience check", "plan before build", "storyboard gate" skills | ❌ **Not part of EGM.** They are Goldie's own skills, sold in the paid AI Profit Boardroom community, which the video pitches twice ([5:01](https://youtube.com/watch?v=fo9fyl-xJQM&t=301s), [20:12](https://youtube.com/watch?v=fo9fyl-xJQM&t=1212s)) |

Also: EGM's skills and reviewer prompts are tuned for **software design docs**. The marketing use is a stretch of the idea. It plausibly carries over, but nobody measured it.

## ☘️ What I take from it

- **I already run half of this.** [[Superpowers]] brainstorming → plan, then subagent review; [[Claudex Loop]] and my review loop with Codex as the adversary; [[Matt Pocock Skills]] grill-me. What EGM adds is the empty context as a hard rule (it refuses to run without one) plus named review lenses. Other setups only hope the reviewer has a fresh context.
- **Two different ways to break the echo chamber.** Claudex Loop changes the *model* (Claude writes, Codex attacks). EGM changes the *context* (same model, no memory). The two combine: a zero-context reviewer from another model family is the strongest version of both. Same principle as the roast/council in [[4 Claude Code Upgrades for Making Money (Nate Herk)]] and the swarms in [[Swarm Research — Orchestrating Coding Agents]]: whoever built it should not grade it.
- **`egm-bootstrap` is DOX by another name.** It builds a README tree bottom-up where [[DOX — Self-Documenting AGENTS.md]] builds an `AGENTS.md` tree, and `egm-drift-report` is the audit that DOX's update-after-edit rule tries to make unnecessary. For this vault's code layer, a weekly drift check of each folder's `AGENTS.md` against its code is the part worth taking.
- **It fits next to [[OpenSpec]], not instead of it.** OpenSpec versions the change; EGM stress-tests the design before the change is written. EGM's `docs/designs/` plays roughly the role of OpenSpec's proposal and design artifacts. See [[Spec-Driven + Self-Documenting]] and [[AI-Native SDLC Playbook]].
- **The cold-reader panel works for content too.** Before a LinkedIn post or landing page goes out, run a scroller, a skeptic, a first-time visitor and a buyer as zero-context subagents ([[LinkedIn Strategy]]). `egm-review-loop` is enough to build this. The paid skill from the video isn't needed.

## 📖 Further reading / watching

- Source video: [Google's FREE Elephant Goldfish AI Agents!](https://www.youtube.com/watch?v=fo9fyl-xJQM) — Julian Goldie SEO, 22:01
- Repo: [`google/elephant-goldfish-model`](https://github.com/google/elephant-goldfish-model), plus the [getting-started guide](https://github.com/google/elephant-goldfish-model/blob/main/docs/getting_started.md) and [harness setup](https://github.com/google/elephant-goldfish-model/blob/main/docs/harnesses.md)
- Essay: Dave Rensin, [Elephants, Goldfish, and the New Golden Age of Software Engineering](https://medium.com/@drensin/elephants-goldfish-and-the-new-golden-age-of-software-engineering-c33641a48874)
- [[Specification-Driven Development]] — the methodology EGM implements
- [[OpenSpec]] — the spec-driven tool I already use; versioned change contracts
- [[Spec-Driven + Self-Documenting]] — the two axes of agent context engineering
- [[DOX — Self-Documenting AGENTS.md]] — the doc-tree counterpart to `egm-bootstrap` and `egm-drift-report`
- [[Claudex Loop]] — adversarial plan review across models (Claude plans, Codex attacks)
- [[Superpowers]] — brainstorm → plan → subagent-driven development
- [[Matt Pocock Skills]] — grill-me and to-spec, the interview half of the same job
- [[AI-Native SDLC Playbook]] — Anthropic's intent → spec → plan chain with human gates
- [[Agent Skills]] — the SKILL.md format EGM ships in
- [[Context Engineering]] — why an empty context is a feature for a reviewer

---
Template: [[templates/knowledge_note_info]]
