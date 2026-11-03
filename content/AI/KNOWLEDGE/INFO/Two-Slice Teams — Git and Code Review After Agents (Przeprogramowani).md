---
title: "Two-Slice Teams — Git and Code Review After Agents (Przeprogramowani)"
date: 2026-11-03
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "coding-agents", "sdlc", "git", "code-review", "team-structure", "methodology"]
type: knowledge-note
source: "_raw/processed/2026-11-03_yt-TGVtRGHhruM_git-i-code-review-to-przeszlosc-jak-agenci-ai-zmienia-twoja.md"
agent-created: true
summary: "Przeprogramowani: agent-driven merge conflicts are a team-shape problem, not a Git-tooling one. Two-slice teams own whole modules, Anthropic replaced Git with Scion at 30,000 merges a day, Imprint auto-approves small PRs."
source_url: "https://www.youtube.com/watch?v=TGVtRGHhruM"
video_id: "TGVtRGHhruM"
channel: "Przeprogramowani"
duration: "11m40s"
published: 2026-10-26
transcription: captions
---

# Two-Slice Teams — Git and Code Review After Agents (Przeprogramowani)

## 🗒️ Description

A 12-minute Polish video by Przemek Smyrdek of [Przeprogramowani](https://www.youtube.com/watch?v=TGVtRGHhruM), the team behind the 10xDevs course. It starts from a question asked on their live stream: several frontend developers on one team, each running agents, keep hitting merge conflicts because their tasks touch the same component. Does the 10xDevs workflow give a way to control who works on what? The person asking added: *when I work on a project alone, I can keep my agents out of each other's code.*

Przemek's answer is that this second sentence is the fix. The conflicts don't come from a missing Git skill or IDE plugin. They come from forcing a tool with several-fold leverage into a team structure designed for hand-written code.

🚀 **TL;DR**

- The culprit is the **two-pizza team** (6–10 people across specialisations). Once every developer in one module runs a pack of agents, merge collisions don't grow linearly, they explode.
- The fix is **two-slice teams**: one or two people plus agents with full ownership of a module, instead of many people sharing one backlog.
- Most "best practices" (team size, sprint planning, backlog, code review) were built for a world that no longer exists. Take notes on what others do, then throw them away and design for your own company.
- Two examples of breaking sacred rules: **Anthropic replaced Git with Scion** once its monorepo passed 30,000 merges a day, and **Imprint auto-approves small PRs** that pass size, AI-review, test and author-trust checks.
- Source caveat: Przeprogramowani sells the 10xDevs course, the video is an opinion piece, and every number in it is a company's own figure.

## 🔗 Links

- [Two pizzas, not Git](#-two-pizzas-not-git)
- [Act like an R&D lab](#-act-like-an-rd-lab)
- [Anthropic: Git gives way to Scion](#-anthropic-git-gives-way-to-scion)
- [Imprint: the small-change path](#-imprint-the-small-change-path)
- [Claim check](#-claim-check)
- [What I take from it](#-what-i-take-from-it)
- [Takeaways](#-takeaways)

## 🧩 Two pizzas, not Git

[From 1:33](https://youtube.com/watch?v=TGVtRGHhruM&t=93s)

- Jeff Bezos popularised **two-pizza teams** at Amazon to fight communication jams as a company grows: more people and more points of contact mean more waiting, more dependencies and blurred ownership. A team should be small enough to feed with two large pizzas, in practice 6–10 people with different specialisations.
- That balance worked when one frontend developer spent two or three days on a task, so others could safely work next to them. [Now](https://youtube.com/watch?v=TGVtRGHhruM&t=178s) the same developer starts several agents and churns through dozens of files in a module within an hour. Put four of them in one area, each with their own agents, and merge conflicts **explode** rather than grow linearly.
- Hence [**two-slice teams**](https://youtube.com/watch?v=TGVtRGHhruM&t=205s): smaller teams, even of two people, that take over a bigger part of the codebase together with agents, which shrinks the conflict surface between teams. Instead of six or eight people getting in each other's way in one backlog, give one or two people backed by agents full **ownership of a module**.
- It works because agents fill the gaps between specialisations and scale easily, which cuts internal handoffs. Working across many low-level layers used to need a specialist per layer. Now one or two people can change much larger cross-cutting parts of a project.
- [Named references](https://youtube.com/watch?v=TGVtRGHhruM&t=248s): Dan Shipper (CEO of Every) wrote about this shift in early 2026, and a Polish company whose CTO, Maciej Mendrela, described rolling it out on an AI Product Heroes live stream. Przemek says both are linked in the description; the fetched description has no such links.

## 🧩 Act like an R&D lab

[From 4:40](https://youtube.com/watch?v=TGVtRGHhruM&t=280s)

The "uncomfortable truth": most of what the industry treats as untouchable best practice, from team size through sprint and backlog planning to how code review works, was made for a world that is gone. Przemek's rule: **listen to everything others do, take lots of notes, then throw it all away** and work out what your company actually needs. Copying other people's playbooks doesn't work.

He leans on [Josh Woodward](https://youtube.com/watch?v=TGVtRGHhruM&t=311s) (VP of Google Labs, responsible for the Gemini app and AI Studio, among others) on Lenny Rachitsky's podcast: every company and product team must start acting like an **R&D lab**, because the technology underneath changes every few months. A rigid yearly roadmap and a bloated backlog then produce things that are out of date on launch day. Three principles from that conversation:

1. [**Innovation can't be microwaved.**](https://youtube.com/watch?v=TGVtRGHhruM&t=344s) Breakthroughs don't come out of a two-day calendar workshop with 15 people. They come from small one- or two-person teams fixated on a problem, prototyping fast, outside the main process. NotebookLM's Audio Overviews (the podcast feature) started that way, and they were in no spreadsheet or quarterly OKR.
2. [**Short horizons and ruthless killing of prototypes.**](https://youtube.com/watch?v=TGVtRGHhruM&t=372s) Most internal initiatives die of sunk cost: companies won't close things they already put time into, even with no measurable benefit. A lab runs fast, cheap experiments in short windows and is ready to bin 90% of them, so it can double down where real value shows up. That holds for a product team and for one developer's workflow.
3. [**A backlog of "almost possible" things.**](https://youtube.com/watch?v=TGVtRGHhruM&t=402s) Google Labs teams keep a living list of what doesn't work yet but probably will after the next jump in models. When a new model ships they don't brainstorm from scratch. They check which items on the list it has unlocked.

## 🧩 Anthropic: Git gives way to Scion

[From 7:32](https://youtube.com/watch?v=TGVtRGHhruM&t=452s)

Przemek cites a recent Anthropic report on how AI changed its own organisation. Anthropic says that, as an AI lab, it is roughly 12–18 months ahead of the market in understanding how AI affects work, so its changes are a preview of what comes to everyone else. Figures quoted in the video:

| Metric | Figure (per the video) |
|---|---|
| Agent hours per human hour (August 2026) | 6 |
| Juniors among new technical hires | 27% → 9% |
| Code committed per engineer, vs six months earlier | 5× |
| Share of AI sessions spent on infrastructure for agents rather than product (since autumn 2025) | 10% → 22% |
| Changes merged per day into the monorepo | 2,500 → 30,000+ |
| CI checkouts per day | 25 million |

Classic Git, built for a human working locally with the full repository history, stopped coping. [In five months](https://youtube.com/watch?v=TGVtRGHhruM&t=525s) Anthropic engineers wrote a new version control system, **Scion**, from scratch:

- Far fewer repository downloads than Git; more of the work happens on the server, less on the client.
- The **server performs commits, merges and rebases**, so nothing needs pushing.
- The client fetches only the files it actually needs, not the whole repository.
- The infrastructure is **200× smaller**, and a checkout takes seconds instead of minutes.

## 🧩 Imprint: the small-change path

[From 9:18](https://youtube.com/watch?v=TGVtRGHhruM&t=558s)

At Imprint, adopting tools like [[Claude Code]] means the average engineer merges **4× more pull requests** than two years ago. Over the period of heavy AI adoption, total incidents fell **42%** half-year over half-year, and critical incidents fell **78%**. The new problem: the average wait for code review grew from **33 to 77 minutes**. Human review became the bottleneck.

Will Larson, Imprint's CTO, describes on his blog how the team asked a lab-style question: if our automation and tests protect production this well, does every change really need to block a second person's time and attention? Imprint introduced [**small change**](https://youtube.com/watch?v=TGVtRGHhruM&t=605s): a PR gets approved automatically, with no human, when it meets hard criteria agreed in advance:

1. It is under a size threshold (for example 1,000 lines) and doesn't touch security-critical areas.
2. A purpose-built AI code-review bot scanned it and found no P1 or P2 issues under the internal rules.
3. Automated tests pass, and the author meets trust criteria (not an outside contributor).

The result: from day one about **10% of all PRs** took the automatic path, which freed reviewers for the changes that need human judgement. Przemek expects 20–30% soon.

## 🔍 Claim check

The captions are auto-generated, so I checked names against the video description and a quick web search on 2026-11-03:

- **Scion: corroborated.** The video description names it, and [The New Stack](https://thenewstack.io/anthropic-scion-git-replacement/) covers Anthropic's engineering post of 13 October 2026. Merges into the monorepo went from about 2,500 a day in May to over 30,000 in September 2026. A seven-person team built Scion and moved the monorepo off Git in five months. Scion is centralised, assumes clients are always online, and uses sparse, virtualised checkouts. Two corrections to the video:
  - The "200× smaller" figure is CPU and memory compared with Anthropic's *previous Git-mirroring infrastructure*, not with Git in general.
  - Anthropic says Scion is not a general-purpose Git replacement and won't be released. It wants to work with GitHub, GitLab and the open-source community to bring some of Scion's ideas to Git.
  - The coverage also credits an early internal Claude snapshot with rewriting the Git-to-Scion ingestion pipeline (20× less memory, 4× faster).
- **Imprint small change: partly corroborated, secondhand.** I couldn't reach Will Larson's own post. A summary of it (dated 17 October 2026) matches the 1,000-line limit and the P1/P2 rule, and adds three details: the author needs 10+ earlier merges in that service, sensitive areas such as payments and security are excluded, and the reviewer skill can only approve or do nothing. It never comments, so reviews don't become rubber stamps that just forward AI feedback. The merge and incident figures are Imprint's own and not independently checked.
- **Anthropic workforce figures** (agent hours, junior hiring, 5× commits, 10% → 22%): from the video only, not checked.
- **"Idron" and Maciej Mendrela:** no match found. The captions probably garbled the company name. I didn't check Dan Shipper's two-slice piece either.

## ☘️ What I take from it

- **The person asking already had the answer.** A solo developer can keep agents apart because one person owns the whole module. Worktree tools like [[Orca]] isolate agents on one machine, but they don't stop two *people* changing the same component; only ownership does. Splitting work by module instead of by ticket is cheaper than any merge tooling.
- **Imprint's rule is the [[AI-Native SDLC Playbook]]'s "humans approve at gates" made concrete.** The gate is a set of checkable conditions (size, sensitive paths, AI-review severity, tests, author track record), and the AI reviewer can only approve or stay silent. That last choice is the one I'd copy: a bot that comments on everything teaches people to click approve without reading. Worth trying on a client repo as a branch ruleset plus an AI reviewer; an idea to test, not a conclusion.
- **The "almost possible" backlog** pairs with [[How to Be More Ambitious with Models (Felix Rieseberg)]]: keep a list of tasks the current model fails at and re-run it on every release. It's cheap to start, and it turns a model launch into a checklist instead of a brainstorm.
- **Scion is not a reason to leave [[Git]].** Anthropic itself says it isn't a general replacement. The lesson is narrower: at agent-scale merge volume, a tool's built-in assumptions (local clones, full history) become the bottleneck. Re-check the assumptions, not just the tools.
- The **junior-hiring drop (27% → 9%)** is the figure that matters most for mentoring people early in their careers, which I do in [[Value Builders Tribe]]. It is unverified, though.
- It echoes [[Self-Improving Company]]: fewer people, clear owners, and humans placed where judgement is needed.

## 📖 Takeaways

1. Merge conflicts caused by agents are a **team-shape problem**. Give one or two people plus agents end-to-end ownership of a module before reaching for Git plugins.
2. Treat every inherited practice (team size, sprints, backlog, code review) as a hypothesis to re-test against how your team works with agents today.
3. Run work like a lab: small teams fixated on a problem, short time boxes, kill most prototypes, and keep an "almost possible" list for the next model.
4. Spend human review deliberately: define hard, checkable criteria under which a change merges without a second person, then measure how many PRs qualify.

## 📖 Further reading/watching

- Source video: [GIT i Code Review to przeszłość? Jak Agenci AI zmienią twoją pracę](https://www.youtube.com/watch?v=TGVtRGHhruM) (Przeprogramowani, 2026-10-26, in Polish)
- [The New Stack on Anthropic's Scion](https://thenewstack.io/anthropic-scion-git-replacement/), covering Anthropic's engineering post of 13 October 2026
- [Greptile's auto-approve for PRs](https://www.greptile.com/docs/code-review/auto-approve-prs): an off-the-shelf version of the small-change idea (beta, low-risk changes only)
- [[Git]] · [[How to deal with pull request merge conflicts]] · [[Orca]]: the tooling layer the video says isn't the real fix
- [[AI-Native SDLC Playbook]]: review gates, and adding parallel sessions only while review keeps up
- [[Self-Improving Company]] · [[Agentic Coding]] · [[Agentic Engineering]] · [[Claude Code]]
- [[How to Be More Ambitious with Models (Felix Rieseberg)]]: aiming past what models can do today

---
Template: [[templates/knowledge_note_info]]
