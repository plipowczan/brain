---
title: "Router and Workers — DeepSeek Super Agent in Claude Code (AI LABS)"
date: 2026-11-07
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "claude-code", "coding-agents", "multi-agent", "orchestration", "workflow", "sdd", "methodology"]
type: knowledge-note
sources: ["_raw/processed/2026-11-07_yt-3DklR44DHnM_deepseek-just-released-the-greatest-claude-code-workflow-eve.md", "_raw/processed/2026-11-22_yt-EFGvVCpW9zc_fable-5-2-is-insane-only-if-you-use-it-anthropic-s-way.md"]
agent-created: true
summary: "AI LABS rebuilds DeepSeek's 'super agent' in Claude Code: one router that only talks to you and dispatches tickets, workers that build them, a watchdog, merger and checker. Numbers are the channel's retelling of DeepSeek's test, unverified."
source_url: "https://www.youtube.com/watch?v=3DklR44DHnM"
video_id: "3DklR44DHnM"
channel: "AI LABS"
duration: "14m16s"
published: 2026-11-05
transcription: captions
---

# Router and Workers — DeepSeek Super Agent in Claude Code (AI LABS)

## 🚀 TL;DR
- Running several Claude Code sessions in parallel breaks down for the human: DeepSeek says a person tracks about 3-5 sessions, then loses track of what each one is doing.
- The fix, as AI LABS retells it: split the two jobs a normal session does (talking to you and doing the work). A **router** only talks to you and hands out tickets; **workers** each take one ticket in their own context window.
- Tickets written up front (with an `eval.md` for "done") are what lets workers run without asking you anything.
- AI LABS rebuilt this in Claude Code with agent teams, sub-agents, worktrees and a `board.md`. Their run: one hour, three tickets built, the human only chose between two options once.

## 🗒️ Description
Video by AI LABS (a software company's channel), published 2026-11-05, [14:16](https://youtube.com/watch?v=3DklR44DHnM). The method is attributed to DeepSeek ("super agent"), which runs it as an always-on cloud agent reachable through team chat and GitHub. AI LABS did not use DeepSeek's code. They copied the ideas into Claude Code. Their setup is sold in their paid community (AI Labs Pro), so the exact files are not public.

## 🧩 How it works
### Router vs lead agent
- A lead agent takes one task and splits it into steps for sub-agents. The router does not decompose anything. It only tracks workers and hands them tickets.
- The router is held back from writing code by instructions, not by removing tools. Claude Code teammates inherit the session's tools, so a tool-less router would produce tool-less workers.
- It checks finished work itself against the ticket's `eval.md` and only comes to you for real choices. A fix goes back to the same worker, which still remembers the ticket.
- AI LABS runs it on Opus with high effort because it launches everyone else. DeepSeek reportedly does the opposite and uses a lighter model, finding the router's job simpler than expected.

### Tickets
- A skill turns a request or a PRD into tickets. It splits features, then interviews you until nothing is ambiguous. Each ticket is a numbered folder under `specs/tickets/` with two files:
  - `rd.md`: what the feature must do, which parts of the app it changes, which it must not touch, every decision taken.
  - `eval.md`: how the checks run, pass criteria, edge cases, and a definition of done.
- Their PRD produced 19 tickets. All start as `draft`; you flip one to `ready` to release it.
- `board.md` is the control surface. Columns: status (draft / ready / done), **mode** (solo or team), and **runs** (can run in parallel, or which ticket it waits on and why).
- Solo mode means a sub-agent (no peer messaging). Team mode uses Claude Code's experimental **agent teams** (enable in `.claude/settings.json`), where agents talk to each other. On another harness, use sub-agents for team tickets too.

### The agents
| Agent | Model / effort | Job |
|-------|----------------|-----|
| router | Opus, high | Starts the watchdog, dispatches ready tickets, verifies results, asks you when a choice is needed |
| watchdog | Sonnet, medium, context capped at 150k tokens | Every 10 minutes runs a script listing stuck, looping or silent agents and reports to the router |
| worker | Sonnet | Takes one ticket in its own git worktree; writes contract, results and screenshots into the ticket folder |
| merger | n/a | Combines worktrees into the main branch when a team finishes |
| checker | n/a | Tests the merged features in a browser |
| reproducer | n/a | Replays a bug with agent-browser, fixes small ones on its own branch, otherwise reports |
| tester | n/a | Runs browser tests with Vercel's agent-browser; reports problems to the worker |

- Launch: `claude --agent router` with permission mode `auto`, then give it a ticket number. Dependencies on the board (tickets 2 and 6 waiting on 1) are picked up automatically once the blocker is merged.
- Sonnet for workers is justified by the ticket already spelling out what to build, and it keeps usage lower.

## 📒 The test and the numbers
- DeepSeek's claim as retold: a single session told to use sub-agents vs router + workers, five runs each. Slowest task: **15.7 min** (router) vs **29.5 min** (single session). The single session kept working itself and each new message interrupted it, and it often ignored the sub-agent instruction.
- AI LABS' own run: router open about an hour, three tickets built. The team ticket ran 26 minutes before they stopped and merged it; two parallel solo tickets took 11 and 17 minutes. They say the app also found and fixed a bug unprompted via the reproducer.
- Cost: every worker has its own context window, so token use is clearly higher than one session. The payoff is fewer slow tasks and no human session-juggling.
- Not built: DeepSeek's cloud, always-on version. AI LABS suggests Claude Code remote sessions or the free open-source app Paseo to check on agents from a phone.

## ☘️ Takeaways for me
- The useful idea is separating the *conversation* agent from the *doing* agents, and writing the spec so complete (rd + eval) that workers never need me. It is spec-driven development with a dispatcher on top: compare [[Specification-Driven Development]] and the interview step in [[Elephant-Goldfish Model (EGM)]].
- The watchdog is cheap insurance against the failure mode of silent loops, and a capped context window on a monitoring agent is a good token-saving habit ([[Token Optimization for Claude Code]]).
- The board with mode and dependency columns is a plain-Markdown task graph, no tooling needed. Similar fleet ideas live in [[Orca]] (worktree per agent) and [[Swarm Research — Orchestrating Coding Agents]] (shepherd/expert split).
- Merge pain is real once workers write in parallel worktrees: see [[Two-Slice Teams — Git and Code Review After Agents (Przeprogramowani)]] for why task ownership by module matters.
- Worth trying on a small project in [[Claude Code]] before trusting it, starting with solo tickets only (agent teams are experimental).
- **A week later the same channel put Fable in the lead** *(added 2026-11-22)*. In [[Fable 5.2 — Nine Rules for Using It (AI LABS)]] (2026-11-14), AI LABS puts Fable 5.2 in the lead role, still on `high` effort like the Opus router here. Anthropic's Fable guide reports good results with Fable as planner and orchestrator for other models.
  - The roles differ. That lead splits a job into tasks and picks a worker model per task (Sonnet for simple, Opus 5.5 for harder, Haiku for search and logs). This router only hands out tickets that are already written.
  - The video adds the cost side this note lacks: on a small feature, lead-and-workers cost about 1.7× Opus alone, because the lead rereads everything it checks. Telling Fable what a sub-agent costs cuts how many it starts. My guess, not measured: the router's checking step has the same reread cost, so it is likelier to pay off on a backlog of tickets than on a single feature.

## ⚠️ Claim check
- **Unverified:** the 15.7 vs 29.5 minutes result and "3-5 sessions" come only from this video's retelling. I did not find or read the DeepSeek post. Five runs per arm is also a small sample, and the benchmark task set is not described.
- "Greatest workflow ever" is clickbait framing. The AI LABS result is one hour and three tickets on their own app, with no baseline run of the same tickets in a single session.
- The router-on-a-light-model advice is DeepSeek's; AI LABS chose Opus and did not test the difference.
- Sponsor segment (Mobbin, with a discount link) and the AI Labs Pro funnel are marketing; the Mobbin demo is unrelated to the method.
- Related: [[DSH Superagent]] is DeepSeek's published research prototype of the super agent, packaged as a bundle for [[DeepSeek Harness]]. Its README confirms the philosophy (minimum human attention) but not the router/worker split or the benchmark, and says some designs in the design article are not implemented.

## 🔗 Links
- Video: https://www.youtube.com/watch?v=3DklR44DHnM
- Chapters: [0:39 problem](https://youtube.com/watch?v=3DklR44DHnM&t=39s), [1:34 setup](https://youtube.com/watch?v=3DklR44DHnM&t=94s), [3:32 tickets](https://youtube.com/watch?v=3DklR44DHnM&t=212s), [7:44 agents](https://youtube.com/watch?v=3DklR44DHnM&t=464s), [10:07 building](https://youtube.com/watch?v=3DklR44DHnM&t=607s), [12:42 results](https://youtube.com/watch?v=3DklR44DHnM&t=762s)

## 📖 Further reading/watching
- [[Agentic Coding]], [[Harness Engineering]], [[Context Engineering]]
- [[AI-Native SDLC Playbook]]
- [[Fable 5.2 — Nine Rules for Using It (AI LABS)]] — the same channel on Fable as lead, worker models per task, and what sub-agents cost

---
Template: [[templates/knowledge_note_info]]
