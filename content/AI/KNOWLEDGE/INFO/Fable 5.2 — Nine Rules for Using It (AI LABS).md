---
title: "Fable 5.2 — Nine Rules for Using It (AI LABS)"
date: 2026-11-22
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "claude", "claude-code", "coding-agents", "models", "multi-agent", "orchestration", "cost-optimization", "harness"]
type: knowledge-note
sources: ["_raw/processed/2026-11-22_yt-EFGvVCpW9zc_fable-5-2-is-insane-only-if-you-use-it-anthropic-s-way.md"]
agent-created: true
summary: "AI LABS' nine rules for Claude Fable 5.2, drawn from Anthropic's guidance: start on Opus 5.5, give Fable a testable finish line and a high bar, use it for big, 3D and hardest jobs, as a lead over cheaper workers or a fresh reviewer, prepare unattended runs, switch models only between tasks; checked against Anthropic's own Fable guide."
source_url: "https://www.youtube.com/watch?v=EFGvVCpW9zc"
video_id: "EFGvVCpW9zc"
channel: "AI LABS"
duration: "16m02s"
published: 2026-11-14
transcription: captions
---

# Fable 5.2 — Nine Rules for Using It (AI LABS)

## 🗒️ Description

A 16-minute video by AI LABS, the channel of a software company (same channel as [[Router and Workers — DeepSeek Super Agent in Claude Code (AI LABS)]] and [[Stage Show — Benji Taylor's Demo Design Skill (AI LABS)]]). They combined three sources from Anthropic, tested them on their own work and reduced them to nine rules for Claude **Fable 5.2**:

- a talk on Claude Code best practices by **Lydia Hallie** from the Claude Code team,
- a guide by **Addy Osmani** (Anthropic) on which Claude model to use for which job,
- Anthropic's own guide for Fable.

Their framing: people use Fable 5.2 for everything and run out of their usage limit before the work is done. Most of the rules are about how you **set Fable up**, not how you prompt it.

🚀 **TL;DR**

- **Don't start on Fable.** Opus 5.5 is the default. Move up only when Opus at a higher effort still can't do the job.
- **Fable earns its price in three places:** as the main model for big jobs, 3D and the hardest problems; as a **lead** that hands tasks to cheaper models; and as a **reviewer** in a fresh session that checks what Opus built.
- **Unattended runs need setup:** a testable definition of done, a high bar, high effort on the lead, a list of what it may do without asking, and reports written for someone who wasn't there.
- **Old instruction files hurt.** "NEVER" and "IMPORTANT" lines written for older models make results worse; Fable treats "never" as unbreakable.
- **Switch models only between tasks.** The prompt cache and Fable's reasoning don't carry over to another model.
- **Claim check:** most rules match Anthropic's Fable 5.2 guide. Two details differ (sub-agent cost note, the cost of the keep-going text), and the benchmarks and field tests are the video's word only. Details in the claim check below.

## 🔗 Links

- Video: [Fable 5.2 Is Insane... Only If You Use It Anthropic's Way](https://www.youtube.com/watch?v=EFGvVCpW9zc) (AI LABS, 2026-11-14)
- Chapters: [0:53 about Fable 5.2](https://youtube.com/watch?v=EFGvVCpW9zc&t=53s) · [3:52 rule 1](https://youtube.com/watch?v=EFGvVCpW9zc&t=232s) · [5:01 rule 2](https://youtube.com/watch?v=EFGvVCpW9zc&t=301s) · [6:55 rule 3](https://youtube.com/watch?v=EFGvVCpW9zc&t=415s) · [7:46 rule 4](https://youtube.com/watch?v=EFGvVCpW9zc&t=466s) · [10:51 rule 5](https://youtube.com/watch?v=EFGvVCpW9zc&t=651s) · [12:29 rule 6](https://youtube.com/watch?v=EFGvVCpW9zc&t=749s) · [13:38 rule 7](https://youtube.com/watch?v=EFGvVCpW9zc&t=818s) · [14:24 rule 8](https://youtube.com/watch?v=EFGvVCpW9zc&t=864s) · [15:01 rule 9](https://youtube.com/watch?v=EFGvVCpW9zc&t=901s)

## 🧩 What changed in Fable 5.2

[0:53](https://youtube.com/watch?v=EFGvVCpW9zc&t=53s) As the video presents it:

- **Price:** \$8 per million input tokens and \$40 per million output tokens, down from \$10 / \$50 for Fable 5.1 (20% cheaper on both).
- **Speed and tokens:** writes answers up to 30% faster and needs fewer tokens for the same work. On `low` effort it scored close to what 5.1 got on a higher effort in Anthropic's coding tests.
- **Quality:** on Frontier Code, a test of whether maintainers of real public projects would accept the model's code, 5.1 scored 32.4% and 5.2 scored 49.1%, both at their highest effort. Opus 5.5 at its highest effort scored 45.5%.
- **Fewer false refusals** on requests that only look like hacking or biology, and clearer writing than 5.1, whose answers were long and dense.
- **Reviews its own work:** at its highest effort settings it starts sub-agents to check what it built, which 5.1 never did. Lydia Hallie: both Opus 5.5 and Fable 5.2 are great at long tasks, and Fable is very good at checking its work.
- **3D:** Anthropic calls it their best model for 3D, and people use it to build full 3D games.
- **The catch:** it still costs **twice as much as Opus 5.5 per token** and uses up plan limits much faster than other models.

## 🧩 The nine rules

### 1. Don't start on Fable

[3:52](https://youtube.com/watch?v=EFGvVCpW9zc&t=232s)

- Anthropic's launch post: start with **Opus 5.5** for most work, and move to Fable only when Opus on a higher effort setting still can't do what you need.
- The Claude Code team works this way. Lydia calls Opus 5.5 her favourite model for daily work and starts every session on the normal settings: Opus 5.5 with auto mode.
- Two comparisons from the video:
  - A builder on X gave both models the same one-line prompt for a 3D model. Opus 5.5 finished in 27 minutes; Fable 5.2 took 58 minutes and about seven times the tokens, for the same result.
  - AI LABS built the same feature with both: equally good work, Fable about 58% more expensive.

### 2. Say what finished looks like before it starts

[5:01](https://youtube.com/watch?v=EFGvVCpW9zc&t=301s)

- Fable works for hours on its own and makes many small choices. Its report won't list all of them, so you only find them by digging. A finish line gives it something to check those choices against.
- Lydia's fix: say what done looks like, and ask Fable to **split the job into smaller tasks, each with its own pass/fail test**. "Make the page good" gives it nothing to check.
- **Set the bar as high as you can.** Fable keeps working until it reaches the bar you give it; a low bar gets a normal result, a very high bar gets more than you'd expect.
- **Review in a fresh session.** Fable checks work better in a session that hasn't seen how it was built. On most of AI LABS' builds, **Opus 5.5 on medium building + a separate Fable 5.2 review agent** gave better results (the video doesn't say compared with what). The Fable review was strict and found problems Opus usually misses.
- **It doesn't just agree with you.** Most models change their review when you push back. Fable sticks to what it can prove with a source, and doesn't invent problems or fixes. Anthropic's testing found it less likely than their other models to make things up or claim it finished work it hadn't.

### 3. Use Fable for three kinds of jobs

[6:55](https://youtube.com/watch?v=EFGvVCpW9zc&t=415s)

1. **Big jobs.** Lydia: give Claude a whole job, much bigger than usual, instead of one small task at a time. Osmani's guide lists rewriting big parts of an app and planning how a whole app fits together.
2. **3D and games.** Unity said Fable did best at building 3D scenes from scratch and at harder game work, where it kept improving the result instead of getting stuck.
3. **The hardest problems.** On the coding test above, Fable on high effort scored about the same as Opus on its highest effort **for about half the cost per task**. On the hardest jobs, Fable is the cheaper choice.

### 4. Fable leads, cheaper models build

[7:46](https://youtube.com/watch?v=EFGvVCpW9zc&t=466s)

- Anthropic calls Fable its strongest **lead agent**: a manager that splits the job and hands out smaller tasks to other models. Lydia's team already works this way. Instead of talking to eight sessions, they talk only to the lead Fable agent.
- The lead only decides what to do and judges what comes back. The workers need a model that is good at the work itself, picked per task:

  | Task the lead splits off | Worker model |
  |---|---|
  | Simple and clear | Sonnet |
  | Harder, needs more thinking | Opus 5.5 |
  | Searching files, reading logs | Haiku |

  Osmani's guide splits the models the same way.
- **Setup in Claude Code:** pick Fable as the main model with `/model`, then tell it that it is the conductor. It thinks, splits the job into tasks and gives each one to its own worker. It checks each result as it comes back, and stops only when it needs a decision from you. Have Claude write into `CLAUDE.md` which model does which kind of task, so Fable picks the right one when it starts a sub-agent.
- **Sub-agents aren't free, and Fable is quick to start them** when your instructions ask it to hand work off. They can become a large part of what a session costs. In Anthropic's test, telling Fable what a sub-agent costs cut the number it started by about half (Anthropic's guide says about a third, see the claim check). AI LABS adds a short `CLAUDE.md` note: what a sub-agent costs, and to start one only for work that can run at the same time.
- **Only for big jobs.** On a small feature this setup cost about **1.7× what Opus alone did**, because the lead reads everything again to check it. Osmani: for work that fits in one session, planning it out and putting the pieces back together costs more than it saves.

### 5. Run the lead on high effort

[10:51](https://youtube.com/watch?v=EFGvVCpW9zc&t=651s)

- On long jobs Fable sometimes stops before the work is done: it lists what's left, offers to keep going, or stops at something ordinary like a slow command. It does this more often on `low` and `medium`. For a lead nobody is watching, that means unfinished work sitting there until you come back.
- **Fix 1:** set the lead to `high` with `/effort` before a long job you'll leave running. Anthropic: `high` is for long jobs nobody is watching, and it gets most of what the model can do.
- **Fix 2:** stay on `medium` and add Anthropic's keep-going text to `CLAUDE.md`. It tells Fable not to stop while it still owes work, and to carry on instead of offering to wait. On `medium` it cut unfinished sessions by about half, but it mostly stopped the "should I continue?" ending, not the "here's what's left" ending. If your runs end with a list of remaining work, go to `high`.
- **Don't go past `high`.** Extra high raised scores only a little and used many more tokens. Osmani: one level above high can cost as much as a bigger model. `max` is for jobs where time and tokens don't matter at all.

### 6. Set Claude Code up so it can keep going without asking

[12:29](https://youtube.com/watch?v=EFGvVCpW9zc&t=749s)

- Lydia: by default **auto mode trusts only the folder and repo you're working in**. A deploy to the test version of your site, which lives elsewhere, gets blocked and you're back to approving things by hand. Change the auto mode settings; the auto mode setup command builds them from your past sessions.
- Those settings only cover what Claude Code may run. Fable also needs a list of **steps it may take without asking**. Lydia's test: if a step can be undone, Fable goes ahead; if it can't, Fable waits for you.
- List every place Fable may work in `CLAUDE.md`: project folders, repos, the test version of the site.
- Add a line to the prompt asking Fable to raise any decision it needs from you **before** it starts working.
- When it does stop to ask, don't reply "go". Anthropic: say exactly what you're approving, so it doesn't ask the same kind of question again.

### 7. Write the final report for someone who never watched

[13:38](https://youtube.com/watch?v=EFGvVCpW9zc&t=818s)

- Once a long job runs without you, the final report is all you see. Anthropic gives a block of text for `CLAUDE.md` that tells Fable to write for someone who doesn't know what happened: most important points first, plain words, no unneeded jargon.
- Lydia also asks Fable to **show the actual results**: screenshots of the app and the test results next to the summary.
- In one of Anthropic's tests, Fable's final summary often left out small changes.
- You can ask for the report as a page you open in the browser, in simple words.

### 8. Update your setup for Fable

[14:24](https://youtube.com/watch?v=EFGvVCpW9zc&t=864s)

- Your `CLAUDE.md` probably still has lines written for older models, with "never" or "important" in them. Lydia: these confuse the model and make results worse, and Fable treats any line with "never" as a rule it can't break.
- Where you still want the final say, write **"ask before deleting files"** instead of "never delete files".
- Claude Code has a **prompt audit** command that checks `CLAUDE.md` and your skills against the model you're on and reports what that model no longer needs.

### 9. Switch models only between tasks

[15:01](https://youtube.com/watch?v=EFGvVCpW9zc&t=901s)

- Claude keeps a cached copy of the conversation it has already read for **one hour** and reuses it instead of reading everything again, which saves a lot of money. That copy belongs to the model that read it.
- So the first message after a model switch reads the whole conversation again at full price.
- Moving off Fable to any other model also loses the **thinking Fable did before each answer**. The new model carries on without knowing why Fable made its choices.
- When a task ends, run `/compact` or start a fresh session, **then** switch models.

## ⚠️ Claim check

I checked the rules against Anthropic's Fable 5.2 migration and prompting guidance as bundled in the `claude-api` skill of Claude Code 2.1.330 (read 2026-11-22). That guide is the "Anthropic put out its own guide for Fable" source the video cites, so it is the primary text for rules 1, 4, 5, 7, 8 and 9.

**Confirmed by Anthropic's guide:**

- Prices: Fable 5.2 at \$8 / \$40 per million tokens, down from \$10 / \$50. Opus 5.5 lists at \$4 / \$20, so "twice Opus per token" is exact.
- "Claude Opus 5.5 stays the default for most workloads." Target Fable when the user asks for it, or when evals on an Opus model at higher effort still fall short (rule 1).
- At `low`, Fable 5.2 scored close to Fable 5.1 at higher levels.
- The effort ladder (rule 5): `high` for hard work and long unattended runs, with most of the gain arriving by `high`; `xhigh` raised scores slightly for many more tokens; `max` for measuring the ceiling or tasks where time and tokens don't matter. The model stops early more often at `low` and `medium`.
- The keep-going text halved the sessions that ended with doable work left (tested at `medium`). It removed most "should I continue?" endings, but not "here's what's left" endings.
- Approvals: name what you approve instead of a bare "continue" (rule 6).
- "Never" rules (rule 8): under a "never" rule, Fable took a step the person in charge had approved in about one try in ten, against nine in ten when the rule said to get a go-ahead first. The guide's advice is the same as the video's: write the exception into the rule.
- Reports (rule 7): a text block for a low-context reader, key points first, plain words. Separately, its closing summary often left out small changes, so review the diff, not only the summary.
- At `xhigh` / `max` it used sub-agents to review its own work, which 5.1 didn't. Early testers had good results using it as planner and orchestrator for other models (rule 4).
- Model switch (rule 9): no earlier model reads Fable 5.2's thinking blocks, so turns after a switch run without that reasoning, with higher cost and latency on the first turn. Prompt caches are scoped to one model.
- The prompt audit exists as `/claude-api prompt-audit`: it scans prompts, skills and `CLAUDE.md`-style files for text written for older models.

**Differs from the guide:**

- **The sub-agent cost note.** The guide reports Fable delegating **about a third** less often, not half. The change was to the **description of the tool that starts sub-agents**, with cost first, not a `CLAUDE.md` note. And the guide says to do it only if Fable still over-delegates after you've removed the delegation lines from your prompts, skills and agent files.
- **The keep-going text has a cost the video leaves out:** output tokens rose by about 30%, and because the model asks less, Anthropic says to keep a confirmation step for risky or irreversible actions.
- **"One hour" is Claude Code session behaviour.** The API offers both 5-minute and 1-hour cache writes. My own Claude Code session's docs say it uses the 1-hour cache, dropping to 5 minutes in usage overage; [[Claude Code Mods (RoboNuggets)]] says the same about a normal subscription.

**The video's word only (not checked):**

- The Frontier Code scores (32.4% / 49.1% / 45.5%), "30% faster", fewer false refusals, and "Fable on high ≈ Opus on max at half the cost per task".
- The launch date of 9 November. The bundled model table, stamped 2026-11-03, already lists Fable 5.2, so treat the date as the video's.
- The Unity quote, the X builder's 27 vs 58 minutes and ~7× tokens, and AI LABS' own 58% and 1.7× cost figures: one run each, no setup described.
- What Lydia Hallie said in her talk and what Osmani's guide says. Neither was linked or fetched. That includes the auto mode details (trusts only the working folder and repo; a setup command that builds settings from past sessions).
- **Marketing:** a sponsor segment for a transactional email API (captions spell it "Brivo") and the AI Labs Pro paid community.

## ☘️ What I take from it

- **The video is a packaging of Anthropic's own Fable guide plus a few field tests.** For exact wording I'd go to the guide in the `claude-api` skill, not to the video. The video's real additions are the Opus-builds / Fable-reviews result and the 1.7× warning on lead-and-workers for small jobs.
- **Four places to put Fable:**
  1. **Advisor:** the everyday model consults it only at big decisions ([[7 New Claude Features (RoboNuggets)]]). On 2026-11-22 the session that wrote this note ran that way, on Opus 5.5 with an advisor tool backed by a stronger model. What a consultation costs is unknown.
  2. **Fresh-context reviewer** of what Opus built (rule 2).
  3. **Lead** over cheaper workers, for big parallel jobs only (rule 4).
  4. **Main model** for big jobs, 3D and the hardest problems (rule 3).
- **The reviewer result runs against cheaper reviewers.** [[Software Factory with Claude Code (ZazenCodes)]] routes review to Haiku or Sonnet, and its author warns that a weaker reviewer nitpicks and can cost more overall. AI LABS goes the other way: a *stronger* model reviews, in a clean context. That is the goldfish reviewer of [[Elephant-Goldfish Model (EGM)]] with a stronger model.
- **"Set the bar high" is the same lever** as Leon Lin's numeric bar and time floor ([[How I Prompt AI to Build Good-Looking Demos (Leon Lin)]], [[Cook]]) and Felix Rieseberg's "depth" axis ([[How to Be More Ambitious with Models (Felix Rieseberg)]]).
- **The 1.7× is the routing arithmetic of [[Jev Engineering for Coding Agents]] in one field test:** a lead that rereads everything its workers produce loses on small jobs. The Jev note also says agents rarely start sub-agents; with Fable the opposite problem shows up (see the contradiction marked there).
- **The same channel moved its lead to Fable.** In [[Router and Workers — DeepSeek Super Agent in Claude Code (AI LABS)]] (2026-11-05) they ran the router on Opus at high effort. Here they put Fable in the lead role, still on `high`.
- **Rule 8 applies to this vault.** `AGENTS.md` and the skills are full of "Never", "ALWAYS" and "IMPORTANT". Under Fable those read as rules with no exceptions. Before running vault workflows on Fable, `/claude-api prompt-audit` over `AGENTS.md` and `.claude/skills/` is worth a run.
- **Rule 9 is the Cache Tax mod's problem** from [[Claude Code Mods (RoboNuggets)]], seen from the model-switch side. Both say the same thing: a cold cache, or a cache for a different model, means the next message pays for the whole conversation. See also [[Token Optimization for Claude Code]].

## 📖 Takeaways

1. Default to **Opus 5.5**. Reach for Fable for big jobs, 3D, the hardest problems, or as a reviewer.
2. Write **done as pass/fail checks**, and set the bar high.
3. Review in a **fresh session**, ideally Fable checking what Opus built.
4. Use **lead + workers only for big parallel jobs**. Name the worker model per kind of task in `CLAUDE.md`, and state what a sub-agent costs (Anthropic: in the sub-agent tool's description).
5. For long unattended runs, use **`high` effort and nothing above it**, or `medium` plus the keep-going text (about 30% more output).
6. Before a long run, list **where it may work, what it may do without asking** (reversible yes, irreversible no), and approve specific actions, not "go".
7. Ask for a **report a stranger can read**, with screenshots and test results, and review the diff, not only the summary.
8. Rewrite "never" rules with the exception inside, and run **`/claude-api prompt-audit`**.
9. **Switch models only between tasks**, after `/compact` or in a fresh session.

## 📖 Further reading/watching

- Source video: [Fable 5.2 Is Insane... Only If You Use It Anthropic's Way](https://www.youtube.com/watch?v=EFGvVCpW9zc) (AI LABS, 2026-11-14)
- [[7 New Claude Features (RoboNuggets)]] — `/advisor`: the everyday model calls Fable only at big decisions
- [[Router and Workers — DeepSeek Super Agent in Claude Code (AI LABS)]] — the same channel's router/worker setup, a week earlier
- [[Jev Engineering for Coding Agents]] — why routing and sub-agents cost what they cost
- [[Harness Engineering]] · [[Token Optimization for Claude Code]] · [[Claude Code]]
- [[Claude Code Mods (RoboNuggets)]] — the Cache Tax mod and the one-hour cache
- [[Elephant-Goldfish Model (EGM)]] · [[Software Factory with Claude Code (ZazenCodes)]] — fresh vs cheaper reviewers
- [[How I Prompt AI to Build Good-Looking Demos (Leon Lin)]] · [[Cook]] · [[How to Be More Ambitious with Models (Felix Rieseberg)]] — setting the bar high

---
Template: [[templates/knowledge_note_info]]
