---
title: "4 Claude Code Upgrades for Making Money (Nate Herk)"
date: 2026-06-25
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "claude-code", "agents", "context-engineering", "workflow", "verifiability"]
type: knowledge-note
source: "_raw/processed/2026-06-25_yt-iTY8Q449YNQ_i-asked-claude-code-to-make-me-as-much-money-as-possible.md"
agent-created: true
summary: "Nate Herk's four Claude Code upgrades to turn it from feel-productive into make-money: roast/council to kill sycophancy, build-then-verify loop, context/session-handoff, and subagents + /goal."
source_url: "https://www.youtube.com/watch?v=iTY8Q449YNQ"
video_id: "iTY8Q449YNQ"
channel: "Nate Herk | AI Automation"
duration: "28m12s"
published: 2026-06-25
transcription: captions
---

# 4 Claude Code Upgrades for Making Money (Nate Herk)

## 🗒️ Description

YouTube walkthrough (28 min) where [Nate Herk](https://www.youtube.com/watch?v=iTY8Q449YNQ) builds a small business end-to-end inside [[Claude Code]] to demonstrate four upgrades that move it from *feeling* productive to actually making money. His framing: income is capped by **output quality × speed**, and Claude's defaults quietly work against both — it is tuned to make you feel productive, not to make you money.

Each upgrade fixes one default failure mode. Three are reusable skills/methods; the fourth stacks them all. This is a practitioner restatement of patterns already in the vault: anti-sycophancy review, verification loops, context management, and [[Loop Engineering]] primitives.

Running example throughout: a $9/mo tool that turns a YouTube transcript into a week of LinkedIn posts — roasted, reshaped, built, verified, and shipped via a go-to-market kit.

## 🔗 Links

- [The four upgrades](#-the-four-upgrades)
- [Upgrade 1 — Roast / Council (kill sycophancy)](#upgrade-1--roast--council-kill-sycophancy)
- [Upgrade 2 — Build, then verify](#upgrade-2--build-then-verify)
- [Upgrade 3 — Manage context / session handoff](#upgrade-3--manage-context--session-handoff)
- [Upgrade 4 — Subagents + /goal](#upgrade-4--subagents--goal)
- [The skills (full source)](#-the-skills-full-source)
- [Evidence cited](#-evidence-cited)
- [Takeaways](#-takeaways)

## 🧩 The four upgrades

| # | Problem (Claude default) | Upgrade | Form |
|---|--------------------------|---------|------|
| 1 | Agrees with everything (sycophancy) | **Roast / council** — stress-test ideas from adversarial personas | Skill |
| 2 | Hands you "finished" ≠ "working"; sometimes lies | **Build, then verify** — check own work + stress test | Method |
| 3 | Slows / degrades as context fills (context rot) | **Session handoff** — summarize → clear → resume | Skill + `/context` |
| 4 | You are the bottleneck (one direction at a time) | **Subagents + `/goal`** — parallel work to a verified finish line | Command |

## Upgrade 1 — Roast / Council (kill sycophancy)

**Problem.** Claude defaults to agreement — "great idea, you're smart" — and gets *more* agreeable the longer you talk and the more it knows about you. This is documented as **sycophancy**.

**Fix.** A `/roast` skill that pulls Claude out of agreement mode and forces it to stress-test the idea *and its own work* before approving anything. It spins up a **council of personas**, each attacking from a different angle:

- **Contrarian** — find fatal flaws (gave the demo idea 2/10)
- **Expansionist** — find the biggest upside (8/10)
- **First-principles thinker** — pure logic, no outside context
- **Deep researcher** — pulls real market data + competitor pricing off the web
- **Buyer** — role-plays the customer, says straight up whether they'd buy
- **Judge** — synthesizes one verdict: **green light / reshape / kill**, plus the single **cheapest 48-hour test** to validate before writing code

In the demo the verdict was **reshape** (high confidence): kill the $9 commodity wrapper built to churn, keep the engine, aim it at a narrow paying niche with a real moat (provable voice matching + scheduled posting). The recommended 48h test: DM/email 20–30 people in one niche before building anything.

Compared side-by-side, plain Claude gave generic "maybe rework it" advice; the council gave specific, multi-perspective, actionable direction. The transferable principle: **always have your ideas stress-tested by a devil's advocate from multiple perspectives** — even outside money decisions. This is the same anti-agreement discipline behind [[Harness Engineering]]'s review-personas and the separate-judge idea in upgrade 4.

## Upgrade 2 — Build, then verify

**Problem.** Claude hands you something that *looks* finished. "Finished" and "actually working" are not the same — and it will sometimes confidently lie that work is done. Herk's war story: an outreach agent reported sending hundreds of emails; four days later only ~25% had gone out.

**Fix.** A method (not a prebuilt skill) — a **mindset shift** with two parts:

1. **Verify as it builds** — Claude checks its own work along the way, not just at the end.
2. **Stress test when "done"** — actively try to break it; hunt the edge cases neither of you planned for.

The verification loop is **medium-specific** (a landing page ≠ a data pipeline ≠ an edited video). For a landing page he uses **Playwright CLI** (computer-use): start the local server, open the real site, screenshot each section at both viewports, click through buttons, submit forms, try to break it, iterate — stop only when a written **definition of done** is met (no visible errors, form clean, all sections shot).

Why it pays: one-shot prompting gets you ~65% there and leaves you reviewing/fixing; baking in verification gets you to ~90% first, so you review once instead of re-editing every handoff — "like an employee whose reports you can trust." Connects to [[DELEGATE-52]] (delegated edits silently corrupt output) and the **verifier** layer of the [[Karpathy Method]].

## Upgrade 3 — Manage context / session handoff

**Problem — context rot.** As the context window fills, Claude slows and degrades. Herk's rule of thumb: start a new session once context passes ~**250k tokens** (a quarter of the 1M window).

**Tools.**
- `/context` — visualizes what's eating the window (MCP servers loaded on demand, skills, memory files, system tools/prompts) and flags savings (e.g. "Read results using 490k tokens — save ~140k"). Good for trimming startup bloat.
- `/compact` and auto-compact exist but he finds them slow and rarely uses them.
- **Session-handoff skill** (his own) — prompts Claude to emit a structured summary: where it started, locked decisions, what shipped, key files, running state, verification, deferred/open questions, and a "pick up here." Then: `/copy` → `/clear` (window fully resets) → paste the handoff back in. The fresh session knows the files, the state, and where to resume — and you can hand off to a different model or even Codex this way.

This is the same family as [[Context Engineering]], [[Progressive Disclosure]], and [[Token Optimization for Claude Code]].

## Upgrade 4 — Subagents + /goal

**Problem.** Even with perfect prompts, **you are the bottleneck** — the single decision-maker/reviewer, pointing Claude one direction at a time.

**Subagents.** A subagent is a separate Claude with its own task and **clean context window** that works alone and reports back — so no single agent hits the context-rot wall. Run anything **independent and parallelizable** as subagents (e.g. research topic A / topic B / past-video comments at once), then synthesize. Herk cites Anthropic's own result: a lead agent coordinating parallel subagents beat a single agent by **90%+** on their internal research eval.

**`/goal`.** Sets a **completion condition** and Claude works turn after turn until it's met. Crucially, a **separate evaluator model** grades `done = true/false` every turn — Claude doesn't get to declare itself done. This separates the worker from the judge, directly answering upgrade 1's sycophancy problem. See [[Loop Engineering]] for the broader `/loop`, `/goal`, `/routines` primitives and their cost/reliability/context tradeoffs.

**The stacked demo.** A `/goal` to build a complete go-to-market kit: parallel subagents, **one per deliverable** (six — positioning, market research, launch plan, outreach templates, outreach drafts, content calendar), each writing its own non-overlapping file. **Objective** done-conditions (all six files exist and non-empty; market research ≥7 competitors; ≥25 personalized drafts) plus a self-verification pass before declaring done. Result: ~8 minutes, all six files verified. This single run stacks every upgrade — roast-validated idea, verification methodology, clean-context subagents, and `/goal` driving it home.

> The more **objective** your goal's done-condition, the better it works — it keeps going until it *thinks* it's done.

## 🧩 The skills (full source)

The two named skills, as shared by Nate Herk. Drop each as a `SKILL.md` under `.claude/skills/<name>/`. Paths inside reference the author's machine (`C:\Users\Nate\…`) — swap for your own. Both lean on the same patterns already in the vault: `roast` is the council from upgrade 1, `session-handoff` is the context reset from upgrade 3.

### `roast` — convene the council

````markdown
---
name: roast
description: Use when someone asks to roast an idea, pressure-test or stress-test an idea, validate a business idea, "convene the council", get a brutal second opinion before building something, or says "/roast". Spins up a 5-persona council that attacks the idea from every angle, then a Judge returns one GO / RESHAPE / KILL verdict with the cheapest test to de-risk it.
argument-hint: "[the idea to roast]"
---

## What this does

Claude's default is to agree with you. `/roast` is the opposite. It convenes a council of five independent persona agents who tear an idea apart and build it up from every angle, then a Judge synthesizes everything into one honest verdict. Use it before you sink time and money into building the wrong thing.

The council is adversarial on purpose. No persona is allowed to hedge or be polite. The point is to surface what you can't see because you're too close to it.

## Step 1: Get the brief

If `$ARGUMENTS` contains the idea, start there. Then ask the user a tight set of clarifying questions so the council has real context to work with. Ask only what hasn't already been provided. Keep it to 3-4 questions max, in one batch:

1. **The idea** in one or two sentences (what it is, what it does).
2. **Who it's for** and **how it makes money** (the buyer + the price/model).
3. **Your edge** — relevant skills, audience, or assets you already have.
4. **Constraints** — budget, timeline, how fast you need first dollar.

If the user says "just run it" or gives you enough already, skip the questions and proceed. Don't over-interrogate. One round, then convene the council.

Write the brief into a single short paragraph you will paste into every council member's prompt, so all five judge the same thing.

## Step 2: Convene the council (5 agents, in parallel)

Spin up **all five agents in parallel in a single message** (one Task call each, `subagent_type: general-purpose`). Paste the same brief into each, then give each its persona mandate below.

Each council member must return: a one-line stance, their 3-5 sharpest points, the single most important thing the user must hear, and a 1-10 score on their own dimension (1 = walk away, 10 = no-brainer).

**1. The Contrarian (Red Team)**
> You are the Contrarian on an idea council. Assume this idea fails. Your job is to find the fatal flaws, the fastest way it dies, and the load-bearing assumptions that are probably wrong. Be ruthless and specific. No hedging, no "but it could work." Attack the weakest points. THE BRIEF: [brief]

**2. The Expansionist (Bull)**
> You are the Expansionist on an idea council. Make the strongest possible case FOR this idea. Find the biggest upside, the 10x version, the adjacent opportunities and unlock points the founder isn't seeing. Fight for the potential. Be specific about where the real money and leverage could be. THE BRIEF: [brief]

**3. The Logician (First principles)**
> You are the Logician on an idea council. Use NO outside research and NO web. Reason purely from first principles: does the core mechanism make sense, do the incentives line up, is the underlying logic sound, does the math even work in theory? Strip it to fundamentals and tell us if it holds together. THE BRIEF: [brief]

**4. The Researcher (Evidence)**
> You are the Researcher on an idea council. Use web search. Bring real-world evidence: who the existing competitors are, market size or demand signals, what comparable products charge, whether this is validated by what's already out there or contradicted by it. Cite what you find. Is the real world saying yes or no? THE BRIEF: [brief]

**5. The Buyer (Voice of customer)**
> You are the Buyer on an idea council. Role-play the exact target customer described in the brief. React as them, in first person. Would you actually pay for this? What's your real objection? What would make you choose a competitor or just do nothing instead? What price feels right, and what would make you say yes today? Be the honest, slightly skeptical customer, not a cheerleader. THE BRIEF: [brief]

## Step 3: The Judge delivers the verdict

Once all five return, YOU act as the Judge. Read every council member's findings, weigh them, and synthesize one decisive verdict. Do not just average the scores. Name the real tension between the personas and resolve it.

Fold in the **economics lens** yourself: rough pricing, realistic time-to-first-dollar, and whether the user can actually ship this fast given the edge they described.

Output the verdict in this exact shape:

```
## THE VERDICT: GO / RESHAPE / KILL
Confidence: [low / medium / high]

**The call in one line:** [the decision, plainly]

**Why:** [2-3 sentences resolving the council's tension]

**Biggest risk:** [the single thing most likely to kill it]
**Biggest upside:** [the strongest reason to do it]

**Money read:** [rough price, time-to-first-dollar, can they ship fast]

**The cheapest 48-hour test:** [the smallest, fastest thing they can do
to validate the riskiest assumption BEFORE building anything]

**If RESHAPE:** [the specific pivot that fixes the fatal flaw while keeping the upside]
```

Then list the five council scores in one line: `Contrarian X/10 · Expansionist X/10 · Logician X/10 · Researcher X/10 · Buyer X/10`.

## Rules

- Every persona stays in character. None of them hedges or softens. The value is in the friction.
- The Judge must make an actual call. "It depends" is not a verdict. Pick GO, RESHAPE, or KILL and own it.
- The cheapest 48-hour test is the most important output. It's how the user finds out if they're right without building the whole thing.
- Keep the final verdict skimmable. The council does the depth; the Judge does the decision.
````

### `session-handoff` — context reset without losing state

````markdown
---
name: session-handoff
description: Use when the user says "session handoff", "wrap up session", "hand off", "handoff summary", or wants a structured end-of-session summary before clearing context. Produces a chat-only handoff covering decisions, shipped changes, key files, running state, verification steps, deferrals, and open questions so a fresh agent can continue seamlessly.
---

# Session Handoff

Produce a repeatable end-of-session summary so the user can `/clear` and start a fresh agent without losing continuity. The next agent should be able to pick up by reading this summary alone.

This is a **context-handoff artifact**, not a status report. The audience is a future instance of you, not a stakeholder.

## When to invoke

User says: "session handoff", "wrap up session", "hand off", "handoff summary", "let's wrap up", "summarize before I clear", or any near-equivalent. Also invoke proactively if the user says they're about to `/clear` without having run it yet.

## How to produce the summary

1. **Review the full conversation**, not just the last few turns. Handoffs miss things when they only summarize recent context.
2. **Pull state from these sources (in order):**
   - Plan files referenced this session (check `C:\Users\Nate\.claude\plans\` if a plan was mentioned).
   - TodoWrite state — any in-progress or pending tasks.
   - Background processes you started with `run_in_background` — shell IDs are load-bearing for the next agent.
   - Files created or modified this session — you know what you touched; don't grep to re-discover.
   - Memory files written or updated (`C:\Users\Nate\.claude\projects\<project>\memory\`).
   - Unresolved questions — things you asked the user that never got a clear answer, or things the user asked that got deflected.
3. **Do NOT audit the filesystem.** This is synthesis of what happened in THIS session. No `git log`, no broad `Glob` sweeps. If you didn't touch it this session, it doesn't belong here.
4. **Produce the output in chat.** Do not write a file. Do not update memory. Chat-only.

## Output template — use exactly this structure, every time

```
# Session Handoff — <one-line title of what this session was about>

## Where it started
<2-3 sentences: what the user asked for, key framing or constraints that emerged>

## Decisions locked + what shipped
- <decision or change> — <why, and where it lives (absolute path if a file)>
- ...

## Key files for next session
- `<absolute path>` — <why the next agent should read this first>
- Plan file: `<path>` (if a plan drove the session)
- Memory files touched: `<paths>` (if any)

## Running state
- Background processes: <shell IDs + what they are + how to kill> — or "none"
- Dev servers / ports: <url + port> — or "none"
- Open worktrees / branches: <paths> — or "none"

## Verification — how to confirm things still work
- `<command>` — <expected outcome>
- ...

## Deferred + open questions
- Deferred: <item> — <why pushed to later>
- Open: <question needing the user's input> — <context>

## Pick up here
<1-2 sentences: the single most likely next action for a fresh agent>
```

## Hard rules

1. **Chat output only.** Never write the handoff to a file. Never update memory from this skill.
2. **Never invent state.** If a section has nothing to report, write "none" — do not omit the section. Structure stability is the whole point.
3. **Absolute paths always.** The next agent may have a different working directory.
4. **If a plan file drove the session, name it first** in "Key files" so the next agent reads it before anything else.
5. **No emojis, no hype, no "great job" summaries.** Terse and concrete — paths, commands, shell IDs, decisions. Match the tone of a seasoned engineer handing off at end-of-shift.
6. **Background process IDs are critical.** If you started any `run_in_background` shells, their IDs must appear in "Running state" with the kill command — the next agent cannot find them otherwise.

## Anti-patterns — do not do these

- Summarizing the last 3 turns and calling it a handoff.
- Listing files by relative path.
- Skipping the "Running state" section because "nothing is running" — write "none" instead.
- Writing the summary to `~/.claude/handoffs/` or any file. This is chat-only by design.
- Adding a "what went well / what went poorly" retrospective. This isn't a retro.
- Recommending next steps beyond the single "Pick up here" line. The next agent decides; you just hand off.
````

## 📒 Evidence cited

Claims as stated in the video (channel is a creator promoting a paid community — treat numbers as directional, not independently verified per [[user-prefers-verified-research]]):

- **Sycophancy / "elephant" study** — AI fails to push back on user framing ~**88%** of the time vs ~**60%** for humans.
- **MIT / Penn State** — personalization + memory features make models *more* agreeable over long conversations.
- **NYU / GitHub Copilot** — review of ~1,600 generated programs found ~**40%** had security vulnerabilities (see [[AI Agent Security]]).
- **Anthropic multi-agent** — lead + parallel subagents beat a single agent by **90%+** on an internal research eval.

## 📖 Takeaways

1. **Productive ≠ profitable.** Claude's defaults optimize for the feeling of progress; the upgrades reattach it to output quality and speed.
2. **Stop letting it agree** → build the *right* thing (roast/council).
3. **Make it check its own work** → ship things that actually *work* (build-then-verify).
4. **Manage context** → Claude stays sharp (session handoff before ~250k tokens).
5. **Stop being the bottleneck** → subagents + `/goal` run work without you; you become the reviewer/judge, not the builder.
6. Each upgrade maps to an existing vault concept — this is a concrete, business-flavored application of [[Loop Engineering]], [[Context Engineering]], [[Harness Engineering]], and the [[Karpathy Method]].

## 📖 Further reading/watching

- Source video: [I asked Claude Code to make me as much money as possible](https://www.youtube.com/watch?v=iTY8Q449YNQ) — Nate Herk | AI Automation
- [[Loop Engineering]] — `/loop`, `/goal`, `/routines` and their tradeoffs
- [[Context Engineering]] · [[Progressive Disclosure]] · [[Token Optimization for Claude Code]]
- [[Harness Engineering]] · [[Karpathy Method]] · [[DELEGATE-52]]
- [[Claude Code]] · [[Agentic Coding]]
- [[AI Voices to Follow on LinkedIn (2026)]] — creator list where Nate Herk appears under AI Automation

---
Template: [[templates/knowledge_note_info]]
