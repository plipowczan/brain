---
title: "Version Control for Parallel AI Coding Agents"
date: 2026-11-25
enableToc: true
openToc: true
tags: ["knowledge", "info", "compiled", "ai", "coding-agents", "git", "version-control", "multi-agent", "orchestration", "research"]
type: compiled-note
sources: ["_raw/processed/2026-11-25_2026-11-25-research-version-control-for-ai-agents.md"]
agent-created: true
summary: "Deep research on 29 alternatives and add-ons to Git for 5-30 and hundreds of parallel coding agents — nothing public is proven at hundreds; stay on Git with ownership, a merge queue and tests on the merged tree"
---

# Version Control for Parallel AI Coding Agents

## 🚀 Main message

**I found no publicly available tool that has been shown to land changes from hundreds of agents on one repository.** Systems that work at that scale (Anthropic's Scion, OpenAI's Pando, Meta's Mononoke) are internal, or open source without support. Public figures at 100 or more writers are synthetic and self-reported.

So for 5–30 agents: **stay on [[Git]]**. Give every agent its own worktree or clone, give every file or module one owner, make a merge queue the only way onto main, and test the merged tree.

The question I started from was "something like Scion, to minimise conflicts and speed up synchronisation". Those are **two separate problems**:

1. **Conflicts.** Scion doesn't publish a way to have fewer of them. Textual conflicts are stopped before main by a check Anthropic has not described; semantic ones surface in tests after the merge, and Claude fixes them.
2. **Synchronisation.** This is what Scion solves: the server commits, rebases and merges, and main moves by compare-and-swap on one row, without a global lock.

Source: a deep-research run on 2026-11-24 and 25 (29 items × 43 fields, web search since January 2026). The full 750 KB report is archived at `_raw/processed/2026-11-25_2026-11-25-research-version-control-for-ai-agents.md`. Numbers are the makers' own unless I say otherwise; see [what was checked](#-what-was-checked). Nobody ran these tools under load.

## 🧩 Which layer solves which problem

| Problem | What helps | What does not |
|---|---|---|
| Agents overwrite each other's files | Worktree or clone per agent (today), sandbox or copy-on-write workspace (hundreds) | One shared checkout with locks |
| Two agents do the same task | Planner, claims on tasks, one owner per module | One shared task file behind a lock |
| Textual conflicts | Partitioning, small short-lived changes, split hot files, a structural merge driver | A faster Git host, a merge queue, [[Jujutsu]] |
| Semantic conflicts | Tests on the merged tree, interfaces published before the work starts | File locks, a clean textual merge |
| Push, rebase, push-again loops | A server or queue that rebases and moves main | Better prompts |
| Broken main | Queue with batching and bisection, or post-merge tests with automatic revert and a known-good pointer | Tests on each branch alone |
| Push and clone throughput | Git storage built for agents, partial clone, batched pushes | Conflict tools |

## 🧩 Variant 1: Git-compatible (what I'd do)

**Now:**

- **Isolation.** One worktree per agent. Create them under a lock, commit and push before any cleanup, and give each its own ports, database and cache, because a worktree isolates only files.
- **Ownership before writing.** A planner gives each agent whole files or modules and its own failing test. Split shared append-only files (changelogs, registries, migrations) into one file per entry. Publish changed signatures before dependent work starts.
- **One way onto main.** A queue without bypass, the full suite in the queue, cheap checks on push. GitHub's own queue works only in public repositories owned by an organisation and in private ones on Enterprise Cloud; a repository on a personal account is not eligible. Otherwise Mergify (free up to 5 users and for open source) or Trunk (free up to 5 committers).
- **What an agent does:** commit, push its own branch, enqueue, read the ejection reason as data, repair within a capped number of attempts. It never loops on fetch–rebase–push.
- **Who resolves a conflict is open.** CAID and Cursor (January 2026) leave it to the author of the branch; Cursor (July 2026) moved it to a neutral agent. My choice: start with the author, switch if resolutions lose the other side's work.
- **Batch pushes.** GitHub recommends at most 6 pushes and 1 merged pull request a minute per repository (recommendations, not hard limits). Thirty agents pushing once every 5 minutes are exactly at 6.
- **Measure for two weeks** before buying anything: `git merge-tree` for every open branch against main and against the others, and conflicts per 100 landings by size, age and path.

**Pilot next, cheapest and most reversible first (my order):**

1. [[Mergiraf]] or [[Weave]] as a merge driver, with tests on the merged tree as the gate.
2. [[Jujutsu]] as the client of a few agents. Less rebase friction and easy undo, not fewer conflicts.
3. [[AVP]] on a branch mirror next to the existing CI. Strictly it belongs to variant 2, but it can run beside Git and be dropped.
4. Special cases: [[GitButler]] for 2–5 agents in one checkout; MCP Agent Mail (leases and messages for a shared checkout) after a licence review, because its rider excludes OpenAI, Anthropic and those acting for them; Entire's CLI for session checkpoints; Gas City on a side repository.

## 🧩 Variant 2: agents don't use the Git client

No candidate is ready to replace Git on a real repository. Leaving it costs pull requests, CI and tooling, and the main gain at 5–30 agents, no push races on main, a queue already gives.

- **[[gitai]]** — a Scion-style server with Git objects underneath and a cheap exit. Disposable repository only.
- **Watch:** Veil (right shape, but its owner ruled out Git interop, and it is weeks old), bnsd55/openscion (alpha), Oak (built and then removed a merge queue and a CI system), Atomic (patch theory; recording serialised, tested to 8 sessions).
- **Perforce P4:** only if the code is already there. **CarterT27/scion:** design reference without an active maintainer.

## 🧩 Path to several hundred agents

- **Storage.** 300 agents pushing once every 5 minutes make 60 pushes a minute, ten times GitHub's recommendation. GitHub's rebuilt storage is in private preview with a wider rollout planned for 2027; GitLab's is in private beta; Entire is usable under preview terms; [[Cloudflare]] Artifacts is a building block; [[Cursor]] Origin is an early beta; ERSC has no public access. None publishes a landing rate on one main, and none lowers conflicts.
- **Landing.** 3,000 landings a day with 12-minute CI need about 25 parallel builds before retries. First lanes by affected targets and batches with bisection. Above that, post-merge tests with automatic revert and a known-good pointer that agents start from.
- **Workspaces.** Sandboxes with a partial clone or a copy-on-write snapshot of a prepared checkout, not hundreds of worktrees on one `.git` (reasoning, not measured).
- **Coordination.** Planner tree, a neutral conflict resolver, hot-file detection that blocks and splits.

## 🔍 What the evidence says about conflicts

- **No rate transfers to my repository.** AgenticFlict's 27.67% covers only unmerged pull requests. The other pull-request studies reuse the same dataset (AIDev: five agents, December 2024 to July 2025), so they don't confirm each other.
- **File overlap is a weak predictor.** In MergeGym 79 of 167 conflicts (47.3%) had no authored file in common, and 48 of those 79 disappeared once both patches stood on the same base; a stale base predicts better (AUROC 0.873 against 0.694–0.702). Short-lived branches matter as much as ownership.
- **A clean merge proves little.** In "Passes Alone, Fails Together", constructed pairs that merged cleanly failed together in 97% of runs, real ones in 1 of 834.
- **More agents, less success.** CooperBench: 68.6%, 46.5%, 30.0% with 2, 3 and 4 agents on overlapping tasks. No benchmark covers more than 4 agents and no coordination paper has a controlled result above 8.
- **Textual conflicts may not be the main cost.** StudioOS, one team with many agents: text conflicts in 1 of 35 open pull requests, while 53% of queue runs failed (38 of 72). About 92% of its last 100 pushes bypassed the queue.
- **Broken main grows with the team.** Mergify, about 153,000 merges: share of merges in a failed batch from 0.77% at 2–5 developers to 12.5% above 40.
- **Server-side merge helps.** Meta, ordinary production traffic: 4.9% of 163,655 rebase attempts rejected for path conflicts, of which Meta estimates 57.7% could be resolved by a text merge on the server.
- **Locks lose to partitioning, without a controlled test.** Cursor's locks on a shared task file cut 20 agents to the output of 2–3. In Anthropic's C compiler, claim files took two thirds of the commits and the same work was still done twice.
- **Worktrees against a shared workspace is undecided.** STORM (macro score, Sonnet 4.6, 4 engineers): worktrees below a single agent (63.8 against 66.4) and far below a shared workspace with write-time checks (82.5), with most of the gain coming from intent comments. CAID found worktrees better than one agent and than a shared workspace (59.1 against 53.1 and 56.1). Each measured its own method.

## ⚠️ Claims to discount

- "95% fewer conflicts" ([[Weave]]): its own replay removed 32.7%.
- "Over 30,000 merges a day" (Scion): the peak; the 7-day average was about 18,000, read from the chart.
- Entire's 418 pushes a second: pushes to separate refs, nothing lands.
- Cursor's 70,000 → under 1,000 conflicts: one task, and the new run made about one seventieth of the commits.
- Veil's 207 landings a second: load-generator clients, every public CI run failing when read. Grit's "0% loss": its benchmark adds conflicting lines to the Git arm.
- Gas Town's bisecting merge queue: not found in the running path; its author calls the project retired.

## 📖 Full verdict list

| Item | 5–30 agents | Hundreds |
|---|---|---|
| Git worktrees | use | pilot, inside sandboxes |
| Merge queues and stacked pull requests | use | use, not alone |
| Task partitioning (swarm case studies) | use | pilot as a design |
| Conflict-rate studies · coordination benchmarks | use as evidence | use with caution · wait |
| [[Mergiraf]], [[Weave]] | pilot | pilot as a component |
| [[Jujutsu]] | pilot | wait |
| [[AVP]] | pilot beside Git | wait |
| [[GitButler]] | pilot (2–5 per checkout) | skip as sync layer |
| Entire · Agent Mail · Gas City | pilot parts | wait · skip · wait |
| GitHub agent-scale storage · Cursor Origin | wait | wait |
| [[gitai]] | skip (pilot disposable) | wait |
| Pando · Mononoke (optional `sl` client pilot) · Veil · bnsd55/openscion · GitLab next-gen · Cloudflare Artifacts · ERSC · Oak · Atomic · Perforce P4 | skip | wait |
| LayerFS · BranchFS | wait · skip | wait · skip |
| Scion · Perplexity forge · CarterT27/scion · other OpenScions · coordination protocols · Grit · Gas Town | skip | skip |

## ✅ What was checked

- **By me, against primary sources:** GitHub's recommendations, queue eligibility, stacked pull requests GA (2026-10-06) and the queue incident of 2026-04-23 (2,092 pull requests in 658 repositories got wrong squash commits); Meta's commit; both Cursor posts; AgenticFlict, arXiv 2607.04697, MergeGym, "Passes Alone"; Mergify's report; Weave's benchmark page; StudioOS; the AVP and Agent Mail licences; gastown issue 4469.
- **Everything else** is the research agents' reading of public sources. 35 of 1,247 fields are flagged uncertain in the report.
- **Not assessed:** `land` (useland.dev), a hosted merge-and-test service built on Weave.
- **Unknown to everyone outside the makers:** how any of these behaves with a hundred real agents on one repository. A trial on your own repository is the only way to know.

## Resources

- People side of the same problem: [[Two-Slice Teams — Git and Code Review After Agents (Przeprogramowani)]]
- Running the agents: [[Claude Code]], [[Orca]], [[Archon]], [[Software Factory with Claude Code (ZazenCodes)]], [[AI Software Factory]], [[Router and Workers — DeepSeek Super Agent in Claude Code (AI LABS)]]
- Process around it: [[AI-Native SDLC Playbook]], [[Loop Engineering]], [[Swarm Research — Orchestrating Coding Agents]]
- Doing it by hand: [[How to deal with pull request merge conflicts]]
- [Anthropic: redesigning source control (Scion)](https://www.anthropic.com/engineering/redesigning-source-control) · [OpenAI: scaling Git (Pando)](https://openai.com/index/scaling-git-at-openai/) · [Cursor: scaling agents](https://cursor.com/blog/scaling-agents) · [GitHub: agent-scale Git storage](https://github.blog/engineering/infrastructure/inside-githubs-new-git-storage-architecture/)
