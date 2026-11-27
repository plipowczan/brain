---
title: "Pilot, Skill, Playbook — Open Hive's Fan-out Pattern"
date: 2026-11-27
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "agents", "multi-agent", "orchestration", "harness", "agent-skills", "reliability", "methodology"]
type: knowledge-note
sources: ["_raw/processed/2026-11-27_aden-hive-hive-repo.md"]
agent-created: true
summary: "How Open Hive runs batch work: model it as a tracker table, pilot one row yourself, write the method as a skill, let a resumable playbook converge the rest; plus the rules around it (narrow workers, idempotent side effects, SOP gates, per-account lanes) and three limits"
---
# Pilot, Skill, Playbook — Open Hive's Fan-out Pattern

## 🗒️ Description

[[Open Hive]] (`aden-hive/hive`) runs batch work, such as 500 leads, 25 competitors or a folder of documents, with three artifacts and one rule. The artifacts are a **tracker table**, a **skill** and a **playbook**. The rule: **pilot before fan-out**. The design is written down in its architecture doc and in the `worker-delegation` and `colony-progress-tracker` skills it ships. It doesn't need Hive itself: any orchestrator that can run subagents and a SQLite file can copy it, and my Claude Code repos are the case I care about ([[Open Hive Playbooks — Fit for My Agent Systems]]).

The one-line version from Hive's docs: *"the tracker is the spine, the playbook is the controller."*

## 🔗 Links

- [The three artifacts](#-the-three-artifacts) · [The loop](#-the-loop-in-six-steps) · [Rules around it](#-rules-around-the-loop) · [Limits](#️-limits) · [What I take from it](#️-what-i-take-from-it)

## 🧩 The three artifacts

| Artifact | Job | Who writes it | Risk |
|---|---|---|---|
| **Tracker table** | The durable work-list. One row per unit of work; a status column or a `*_at` timestamp is the "done" predicate. | The orchestrator creates it and registers which columns workers may write. | Low — it's data. |
| **Skill** | The worker's procedure: schema, tool sequence, output format, quality bar. | The orchestrator, from her own pilot run. | **High** — a bad skill becomes N failed workers. |
| **Playbook** | Deterministic code: which rows are undone, how many workers at once, which account and rate lane each row uses, retry and dead-letter policy, the receipt schema. | The orchestrator, after the pilot. | Low — "the cheap part". |

The worker's task string carries only its row. Everything reusable is in the skill, and everything that needs no judgement is in the playbook.

## 🧩 The loop in six steps

1. **Model the goal as a table** — every unit is a row, with a done-predicate column. Without it nothing can resume.
2. **Write the worker protocol as a skill.**
3. **Pilot one row yourself** — "the most representative one, not the easiest". Patch the skill while you go. If the row can't be finished at all, the protocol is wrong, not one selector: redesign before any worker touches it.
4. **Write the playbook** — a script that calls `converge(pending=..., dispatch=...)` over the undone rows.
5. **Run it** — it returns immediately and reports on completion; terminal failures go to a dead-letter list.
6. **Re-running is resuming** — done rows are no longer in the pending query. "The pending query *is* the gap."

Skip step 1 and nothing resumes; skip step 2 and you pay N× tokens for a duplicated protocol; skip step 3 and one bad skill fails N times.

When **not** to fan out: one or two cheap units (spawning has overhead), or exploratory work ("figure out X"). Workers are bad at open-ended scope, so decompose first and fan out only the bounded parts.

Three decomposition axes, one per playbook: **per row** (the default), **per segment** (workers discover rows in a slice; a unique index on the natural key prevents duplicates) and **per stage** (`new → enriched → notified → done`, each pass advancing one state).

## 🧩 Rules around the loop

- **Narrow workers.** A worker has no persona, no memory of earlier runs, no way to spawn other workers or talk to the user, and a fixed budget: 3 turns plus 1 grace turn that may only report or write the tracker. A worker that runs out still reports instead of vanishing. A worker unsure about a row marks it `needs_review` and moves on; there is no mid-run escalation, and the human reviews after the run.
- **The row is the truth, the report is a claim.** If a worker's receipt and its tracker row disagree, the row wins and is re-dispatched.
- **Side effects must be idempotent.** A resumed run re-dispatches a row whose worker crashed after sending but before marking it done. The tracker upsert is safe; the email is not. So the sending step checks "already messaged this thread today?" before acting.
- **Claim with one atomic statement.** Use `UPDATE … WHERE id=(SELECT … LIMIT 1) RETURNING`, never select-then-update. A `worker_id` guard on every later write means a revoked claim changes zero rows, which tells the worker to stop. A claim idle for more than 15 minutes is reclaimed.
- **An SOP checklist is a hard gate.** A `sop_checklist` table holds required steps per task. A worker may not mark its task done while a required row is open: "this gate exists specifically to stop you from declaring success while skipping required steps."
- **Failed rows stay.** Never `DELETE`; `failed` with a one-sentence `last_error` is the audit trail.
- **One account, one lane.** Rotate the logged-in profile to spread load across accounts, and give each account its own lane with a concurrency and per-minute cap. A wrong account label fails fast instead of silently using another account.
- **Quality self-check every N iterations.** On-task, thorough, non-repetitive, consistent, complete — and if degrading, re-read the working notes and change approach explicitly.

Around the loop Hive adds the things every agent gets: park-and-resume from disk, large tool results spilled to files, compaction, stall and loop detection, and a reminder hub that tells the orchestrator which workers are in flight so she doesn't dispatch the same work twice.

## ⚠️ Limits

- **Constraints in a goal are only prompt text.** "Never more than 3 messages per person per week" is written into the prompt as MUST. The docs say so, and send real limits to tool allowlists, budgets and credentials.
- **Cross-colony dedup needs the hosted CRM.** Claiming prospects so two colonies don't double-touch a person uses `hive-crm`, which the open-source build doesn't ship.
- **Sentinel leans toward continuing.** The opt-in supervisor treats "should I proceed to the next batch?" as needless permission-seeking, so a batch-by-batch approval written as a question can be pushed through by an LLM classifier. Put approvals in a gate the runtime enforces, not in a question the agent asks.

## ☘️ What I take from it

- **The pilot rule is the cheapest improvement for my batch skills.** Today a skill is designed and run on the whole batch at once. Running row one by hand first, and patching the skill, is the same discipline as reviewing a plan before an implementation run ([[Elephant-Goldfish Model (EGM)]]).
- **SQLite as the shared work-list, markdown as the memory.** My repos keep everything in markdown (one file per prospect, per task), which is right for knowledge and wrong for a 500-row batch with status columns. The tracker belongs next to the markdown, not instead of it, the same split [[Marketing Agent Research]] arrived at for editorial state.
- **The SOP checklist gate is a stronger form of a Definition of done.** A list the worker must tick in a table before "done" is accepted is harder to skip than a paragraph in the task.
- **Idempotent sends are the missing rule in every "draft, approve, send" flow I have.** Approval protects the content, and idempotency protects against sending it twice after a crash.
- **This is [[Loop Engineering]] with a database.** The playbook is a reconciliation loop, and the tracker is its state file with SQL on top.
- Like [[Building Always-On Agents (Anthropic)]], it keeps runs short and state outside the context. Unlike Anthropic, it defaults to continuing when the agent hesitates.

## 📖 Further reading/watching

- [aden-hive/hive — architecture overview](https://github.com/aden-hive/hive/blob/main/docs/architecture/README.md)
- [How a colony improves](https://github.com/aden-hive/hive/blob/main/docs/key_concepts/improvement.md) — reflexion, memory, learned skills, playbooks
- [[Open Hive]] · [[Open Hive Sales Playbooks]] · [[Swarm Research — Orchestrating Coding Agents]] · [[Harness Engineering]] · [[Paperclip]]

---
Template: [[templates/knowledge_note_info]]
