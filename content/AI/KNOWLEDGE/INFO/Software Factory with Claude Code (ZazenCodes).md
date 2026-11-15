---
title: "Software Factory with Claude Code (ZazenCodes)"
date: 2026-11-15
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "claude-code", "coding-agents", "orchestration", "harness", "sdlc", "multi-agent", "workflow"]
type: knowledge-note
source: "_raw/processed/2026-11-15_yt-RiaTyJ2POVo_build-a-better-software-factory-with-claude-code.md"
source_url: "https://www.youtube.com/watch?v=RiaTyJ2POVo"
video_id: "RiaTyJ2POVo"
channel: "ZazenCodes"
duration: "32m22s"
published: 2026-11-09
transcription: captions
agent-created: true
summary: "ZazenCodes' V2 software factory inside a Claude Code project: GitHub issues in, merged PRs out, an orchestrator session, sub-agents per stage, a deterministic bash spine, risk-based routing and per-job cost; the author's own caveats on cheap reviewers and production use."
---

# Software Factory with Claude Code (ZazenCodes)

## 🗒️ Description

ZazenCodes (a YouTube channel, video published 2026-11-09, sponsored by Anthropic) shows **V2 of a "software factory" that lives inside your own project** and is driven by [[Claude Code]] sub-agents. The input is a GitHub issue carrying a `factory` label. The output is a pull request, merged automatically when the approver deems it safe. The code is in the author's reference repo, linked from the video description. I did not open the repo, so everything below is what the video shows and says.

It sits in the same family as [[AI Software Factory]] (issues in, verified PRs out) and [[Archon]] (deterministic workflows around coding agents). The difference is the packaging: a copy-paste install prompt, one skill, a handful of sub-agent files and a small bash toolkit.

## 🔗 Links

- [[#🚀 The main idea]]
- [[#🧩 The pipeline]]
- [[#🛠️ Install and run]]
- [[#🎨 What the demo showed]]
- [[#⚙️ The deterministic spine]]
- [[#🔍 The author's caveats]]
- [[#☘️ What I take from it]]

**Video chapters**

| Time | Chapter |
|------|---------|
| [0:00](https://youtube.com/watch?v=RiaTyJ2POVo&t=0s) | Intro: what is new in V2 |
| [0:47](https://youtube.com/watch?v=RiaTyJ2POVo&t=47s) | Walk through the software factory mind map |
| [4:57](https://youtube.com/watch?v=RiaTyJ2POVo&t=297s) | Install the factory in a project |
| [7:26](https://youtube.com/watch?v=RiaTyJ2POVo&t=446s) | Run the first issue through the factory |
| [14:30](https://youtube.com/watch?v=RiaTyJ2POVo&t=870s) | Run the remaining issues in parallel |
| [27:54](https://youtube.com/watch?v=RiaTyJ2POVo&t=1674s) | Review tradeoffs and next steps |

## 🚀 The main idea

- **The agents do the thinking, scripts do the bookkeeping.** Claude Code only decides and writes. Moving a job between stages is done by shell commands (`factory/bin/job ...`) that are the *only* writer of each job's `job.json`. Claude calls them; it never edits the state file itself.
- **Everything a job produces is a durable file**: the intake form, the spec, the verdict of each reviewer, feedback, an agent log. That is what makes the factory restartable and debuggable.
- **The issue tracker is the interface.** Anything that can open a GitHub issue and add the label can feed the factory, including a future monitoring system.
- **Routing is dynamic.** The first agent labels each issue with a risk level, and that label changes which reviewers run later. The author calls the result a dynamic directed acyclic graph.

## 🧩 The pipeline

What is new in V2: an intake step, model routing, a deterministic gate, parallel jobs, GitHub issues and PRs, a dashboard, and cost and time per job.

1. **Intake (Fable).** Decides whether the issue is worth building, scopes it in the context of the project, assesses risk, and may reject it or ask a human for more information. Writes an intake form with a risk label (the demo showed low / medium / high).
2. **Spec writer** and **builder.** Still two separate steps. The author says in the closing thoughts that they could probably be merged.
3. **Gate (deterministic).** A cheap `checks.sh` run on the build. If it fails, the job goes back to the builder and never reaches a reviewer.
4. **Reviewers, in parallel.** Code review, UX, UI, and a security review only for medium-and-up risk. Code review uses Haiku, or Sonnet when intake judged the change risky. Any reviewer can send the job back to the builder with feedback.
5. **Approver.** Decides whether the PR merges automatically or needs a human. Jobs that need a human wait in a `needs human` state.

Concurrency is capped at three jobs at once, set in `factory.config.json`.

## 🛠️ Install and run

- **Install** by pasting one prompt into Claude Code in your project: "install this software factory in this project", with the reference repo as the source. Claude adapts the template to the project (for the demo's npm app, `checks.sh` runs lint, type-check, `npm test` and a build) and adds a **Software factory** section to `AGENTS.md`.
- **What lands in the project:** a `.claude/` folder with the sub-agent definitions and one `factory` skill (`SKILL.md` describes the whole behaviour), and a `factory/` folder with `bin/` scripts (`job`, `checks.sh`, route, queue), the config and the dashboard.
- **Safety label.** Only issues labelled `factory` are picked up. Several people may file issues, and the label is how you choose which ones the factory touches. You create the label yourself.
- **Commands** in the orchestrator session: `factory run` (everything in the queue), `factory run 4` (one issue), or any free-form string. A second Claude Code session in the same project can ask about jobs as long as it loads the factory skill.

## 🎨 What the demo showed

The demo project was a small notes app ("NoteWall") with four open issues.

- **One job end to end** ([7:26](https://youtube.com/watch?v=RiaTyJ2POVo&t=446s)): a "dark mode" issue passed intake as low risk, went through spec, build and the gate, then reviewers. Code review and UI review both failed once, the builder fixed the findings, the second round went green, and the approver merged the PR without asking the author. Eight minutes, and a displayed cost of \$3.40 (not actually paid, it ran on a Claude plan; the number is for comparing jobs).
- **Parallel jobs** ([14:30](https://youtube.com/watch?v=RiaTyJ2POVo&t=870s)): the other issues started three at a time. One stalled on "needs human" because intake narrowed the scope and wanted a decision. The author answered in the orchestrator chat, and the answer was saved as `feedback-1.md` and the job resumed.
- **Durability test** ([19:00](https://youtube.com/watch?v=RiaTyJ2POVo&t=1140s)): pressing Ctrl+C killed the orchestrator and, with it, all background sub-agents and the shell serving the dashboard. Running `factory run` again read the queue and job state and restarted everything. Work in flight at the moment of the kill was lost and redone, so it works but is wasteful.
- **A factory bug found live**: one job was blocked by a rule in the factory, not by the feature. The author told it to fix itself and updated the published template so new installs get the fix.
- **Result**: dark mode, sticky-note colours, a changeable display name, all merged; the app ran with the changes after a `git pull`.

## ⚙️ The deterministic spine

- `checks.sh` is plain bash: lint, type-check, tests, build. Swap the commands for another stack.
- `job.json` is the state of a job; `factory/bin/job` is its only writer, with subcommands like queue, create, advance, merge and feedback. The queue reads GitHub through `gh`.
- Job data lives in a git-ignored `factory/jobs/` folder with round-by-round markdown (round 1, 2, 3). It is local only. The author would back it up separately, for example to cloud storage.
- The dashboard reads those files. Every job gets time and estimated cost, which gives a benchmark for optimising the factory.

## 🔍 The author's caveats

- **Cheaper reviewers can cost more.** A weaker model (Haiku) reviewing a stronger builder's code can nitpick, bounce work back, and burn more money overall. He would be careful with Haiku on reviewers and unsure about Haiku as the approver, because that decision goes into the codebase.
- **More complex is not automatically better.** V2 beats V1 in his view, but he encourages simplifying it for your own use.
- **Not for production as is.** He would not plug it into a real production system and close his eyes. He thinks it can be the basis of something that works there, with care, and that software development will move to a layer above today's coding-agent harnesses.
- **Running locally is the limit.** Next step he is considering: run it in the cloud with the Claude Agent SDK.
- **Funnel.** The mind map and a PDF summary are behind his newsletter signup. The video is also sponsored. Neither changes the demo, but the full mind map is not in the transcript.
- **Claims not checked.** Cost figures come from his own dashboard, and "merged without my attention" was shown on a toy app with small features.

## ☘️ What I take from it

- The part worth copying is the split: **an LLM orchestrator for decisions and a single script as the sole writer of state**. It is the same logic as hooks enforcing what skills only advise in the [[AI-Native SDLC Playbook]].
- **Risk label from the first agent, used to route the rest** is a cheap way to spend review effort where it matters. Compare the zero-context reviewers in [[Elephant-Goldfish Model (EGM)]]: there the reviewers are fresh by design, here they are cheaper by design, and the video shows that trade has a price.
- It is a concrete answer to "who merges when agents write the PRs": an approver agent for small changes and a human queue for the rest, which echoes the small-change auto-approval in [[Two-Slice Teams — Git and Code Review After Agents (Przeprogramowani)]].
- A restartable orchestrator that rebuilds its view from files and the issue tracker is what makes [[Loop Engineering]] survivable in practice, where a plain long loop loses everything when the session dies.
- Related maps: [[Harness Engineering]] for the general discipline, [[Agent Skills]] for how the single `factory` skill is packaged.

## 📖 Further reading/watching

- [Build a Better Software Factory with Claude Code (YouTube)](https://www.youtube.com/watch?v=RiaTyJ2POVo), ZazenCodes
- The channel's previous video on the first, simpler software factory (mentioned at [1:02](https://youtube.com/watch?v=RiaTyJ2POVo&t=62s), not ingested)
- [[AI Software Factory]], [[Archon]], [[Orca]]

---
Template: [[templates/knowledge_note_info]]
