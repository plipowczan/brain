---
title: "Building Always-On Agents (Anthropic)"
date: 2026-11-22
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "agents", "architecture", "memory", "security", "orchestration", "webhooks", "claude-code"]
type: knowledge-note
sources: ["_raw/processed/2026-11-22_Building always-on agents.md"]
source_url: "https://claude.com/resources/articles/building-always-on-agents"
author: "William Hu (Anthropic)"
published: 2026-11-13
agent-created: true
summary: "Anthropic (William Hu): an always-on agent sleeps and wakes for short runs; five primitives around the agent loop make that reliable: an event inbox with one worker, timers polled by a scheduler, file-based memory, permissions (credential proxy, auto mode, deferred tool calls) and an outbox"
---

# Building Always-On Agents (Anthropic)

## 🗒️ Description

A Claude blog article by **William Hu** (Anthropic), published 2026-11-13, written for teams that want proactive agents in their own products. An always-on agent is **stateful** (it keeps context across sessions) and **proactive** (it acts without being asked). It runs the same agent loop as any other agent. What differs is the architecture around the loop: what wakes the agent, what carries over between runs, and how its work reaches the user.

Why now, according to the article: newer models judge better what the user wants and when to check in, and long tasks got cheaper. Anthropic's own figure: on one long-horizon coding benchmark, Opus 5.5 cost 78% less per solved task than Opus 5, against 40% less on typical workloads. That is Anthropic's claim about its own models.

🚀 **The one-line version:** "always on" describes the experience, not the process. The agent sleeps, wakes for a short run when an event arrives, saves what it learned and goes back to sleep. Five durable stores around the loop keep that cycle from losing or duplicating work.

## 🔗 Links

- [The run cycle](#-the-run-cycle)
- [The five primitives](#-the-five-primitives)
- [How it fits together](#-how-it-fits-together)
- [What I take from it](#️-what-i-take-from-it)

## 🧩 The run cycle

- A **run** is one stretch of work: an event arrives, a session starts, the agent loop runs, and the run writes what happened back to stored state. Between runs the agent sleeps and spends no tokens.
- A **session** is the transcript of messages and tool calls that a run works inside. Events that continue earlier work, such as a reply from the user, resume an existing session; everything else starts a new one.
- The cycle repeats indefinitely. That is the whole trick behind "always on".

## 🧩 The five primitives

### 1. Event inbox

The tempting design is to let every event source (webhooks, scheduled tasks, background jobs, user messages) call the agent directly. It fails two ways: two events arriving together start competing runs, and a crash loses an event.

The fix is an inbox. Every source writes an event to it, and a worker picks it up. The minimum:

- a **durable list of events**, usually a database table with one row per event and a status column; duplicates are dropped by the unique ID the source sends
- a **handler**, usually an HTTP endpoint, that writes events to the list and wakes the worker
- a **worker**, usually a background service, that reads what is pending, starts the run, waits for it and marks the events done

Start with one inbox per user and split it only when you need more parallelism. The rules that make it work:

- **Acknowledge fast.** Webhook providers treat slow responses as failures. The handler may run light checks; anything deeper, such as screening for prompt injection, happens inside the run.
- **The inbox is the source of truth.** A woken worker first pulls the latest events from the inbox. If it dies mid-run, a new worker picks up the same event and retries.
- **One active worker per inbox**, so two runs never duplicate or overwrite each other's work. An event that arrives mid-run can wait for the next run, be folded into the current one, or interrupt and restart it.
- **Batch pending events.** Several messages in a row become one run with one reply.

### 2. Timers

Timers make the agent proactive together with the inbox. Two kinds:

- a **follow-up**: a deadline the agent sets for itself, such as checking whether a reply came
- a **schedule**: a recurring task the user sets, such as a daily newsletter

Timers live in their own durable table, separate from the inbox, because the inbox holds only events that are ready to work on. A schedule also stores its recurrence. A timer never starts a run by itself. A **scheduler** polls the table at a fixed interval and on each pass:

1. finds the timers that are due
2. marks a follow-up done, or moves a schedule's due time to its next occurrence
3. adds an event to the inbox and wakes the worker

The scheduler can be your own service or a durable execution engine.

### 3. Memory

Memory carries continuity across disjointed runs and gets its own store. Anthropic's products implement it as a **directory of files**: Claude Code's auto memory and the Messages API's memory tool. For an always-on agent the directory should sit on durable storage (a database or an object store), so memory outlives the worker.

Rule of thumb: **memory holds only what the agent can't look up again.** If a fact lives in another system, such as an issue tracker, save a pointer instead.

| Memory | What it holds | Loaded |
|---|---|---|
| User instructions | how the user wants the agent to behave, in a file of its own; the user won't be around to steer each run | at the start of every run |
| User notes | role, preferences, corrections; one file at first, many small files as it grows | the index every run, single files when needed |
| Past messages | what the agent already told the user, so it doesn't repeat itself | a file every run, or the worker loads the last few messages |
| Task progress | one progress file per ongoing task: what's done and what's left, so the next run picks up where the last one stopped | the index every run, single files when needed |

The article's example layout: `instructions.md`, `index.md` and `reported.md` load at the start of every run; the `notes/` and `progress/` folders are read on demand; the agent writes to memory during the run.

Beyond writing memory during runs, you can add **dreaming**: a separate pass that reviews past sessions to curate memory, replacing outdated entries and finding patterns that only show across many runs. Anthropic covers it in a separate post on agent memory, which I have not read.

**Inside the context window:**

- Every run pays a fixed overhead: system prompt, tool definitions and memory files. Keep it lean and use prompt caching.
- A new session starts with only that overhead plus the events that triggered it. A resumed session also brings back its earlier messages and tool calls.
- When a session gets too long, compact the older messages or start a new session. Both lose detail, so whatever has to last must go into memory along the way.

### 4. Permissions

This is where always-on agents carry the most risk: a run holds the user's access and, by design, nobody watches it. For each tool call the agent decides whether to go ahead, block it, or wait for approval. The pieces are the same ones other agents use:

- **Credential store.** Agents need passwords and tokens to be useful. The recommended pattern is a proxy outside the agent's environment: the agent sends requests without credentials, and the proxy adds the real ones before forwarding.
- **Auto mode.** Anthropic's answer in Claude Code: classifiers review higher-risk actions and block the dangerous ones, so Claude looks for a safer approach. The most important decisions still need the user.
- **Deferred tool calls.** In Claude Code a hook can defer a tool call until the user answers. In an always-on agent the run ends and the session is saved mid-call. The request reaches the user (for example as an interactive card built with MCP Apps), and the answer comes back as an inbox event that starts a new run, which resumes the saved session. Meanwhile the worker keeps handling other events, so the agent is never blocked.

### 5. Outbox

A chat agent streams its work as it goes. An always-on agent works in the background, so the user gets the outcome and a few details, not every step. A run ends one of three ways:

1. the agent sends a message to the outbox
2. the agent decides there is nothing to send
3. the agent defers a tool call to ask for permission or input

Most agents can get by with a "send" tool that delivers directly. A formal outbox (a table of outgoing messages plus a **dispatcher** that reads them, decides what to deliver and sends it) is worth it only when you want to pace messages or recover from errors. A deferred request can go through the outbox or show up directly in your own interface.

Then tune the volume: too many messages and the agent is noise, too few and the user misses things. Anthropic recommends building evals for it, and says it's better to **start quiet and earn attention over time**.

## 🧩 How it fits together

Every run starts with an event from the inbox: a user message, a webhook or a timer. The worker picks it up and wakes the agent in a new or existing session. The agent reads its memory, acts within its permissions, updates its memory and pushes a row to the outbox, and the dispatcher delivers it. A run can set a timer that wakes the agent again, and the user's reply comes back as an inbox event. Each run is short; the cycle never ends.

## ☘️ What I take from it

- **My [[External Triggers for Claude Code]] research landed on the same shape** — a stable store for events plus a worker that pulls from it. The article adds the rules I didn't have: de-duplicate by the sender's event ID, one worker per inbox, batch what's pending.
- **My Claude Code auto-memory folder already follows the memory layout**: a `MEMORY.md` index plus one file per fact, opened only when relevant — the "user notes" row above. The same index-first idea runs this vault ([[Progressive Disclosure]]).
- **This vault's monthly `brain-watch` scheduled task is a schedule timer** in this vocabulary, and its `snapshot.json` is the memory it carries between runs. It has no inbox or outbox: what it produces is a report plus the status boxes it writes into tool notes.
- **The credential proxy is the direct fix for OpenClaw's plaintext keys** ([[AI Agent Security]]). If the CFO agent from [[Agentic Systems]] (Revolut, Stripe, inFakt access) ever ran unattended, a proxy plus a deferred approval before any payment would be my minimum.
- **Short runs instead of one endless loop** (my reading) address two of the complaints in [[Loop Engineering]]: idle cost, because the agent sleeps between runs, and context bloat, because lasting state lives in memory files and a long session gets compacted or replaced. They do nothing about the cost of one expensive orchestrator fanning out to workers.
- **My reading, not the article's:** [[Hermes Agent]] and [[Paperclip]] already ship parts of this. Hermes has a messaging gateway, built-in cron and agent-curated memory; Paperclip wakes agents on heartbeats and checks tasks out atomically.
- I have not built any of this. The article gives no code, and its cost figures are Anthropic's own.

## 📖 Further reading/watching

- Source: [Building always-on agents](https://claude.com/resources/articles/building-always-on-agents) by William Hu, Claude blog, 2026-11-13
- Linked from the article, not ingested: [Building effective agents](https://www.anthropic.com/research/building-effective-agents) (the core loop) · [components of agent memory](https://www.anthropic.com/research/components-of-agent-memory) (dreaming) · [Claude Code auto mode](https://www.anthropic.com/research/claude-code-auto-mode) · [agent identity and access model](https://claude.com/resources/articles/agent-identity-access-model) · [credential management](https://code.claude.com/docs/en/agent-sdk/secure-deployment#credential-management) · [deferring a tool call in a hook](https://code.claude.com/docs/en/hooks#defer-a-tool-call-for-later) · [memory tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool) · [MCP Apps](https://modelcontextprotocol.io/extensions/apps/overview)
- [[External Triggers for Claude Code]] · [[AI Agent Security]] · [[Claude Code]]: inbox, permissions and the Claude Code pieces
- [[Context Engineering]] · [[Progressive Disclosure]] · [[Agent Memory and Knowledge Base Tools Compared]] · [[HORMA — Structured Agent Memory]]: memory and context
- [[Loop Engineering]] · [[Hermes Agent]] · [[Paperclip]] · [[Agentic Systems]]: agents that run without me

---
Template: [[templates/knowledge_note_info]]
