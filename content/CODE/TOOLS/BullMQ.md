---
title: "BullMQ"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "nodejs", "typescript", "queue", "jobs", "redis", "async"]
type: tool
agent-created: true
summary: "Redis-backed background-job queue for Node/TypeScript — retries, rate limiting, scheduling, flows; the job runner in the Tech To The Rescue platform"
---

# BullMQ

A robust background-job and message queue for Node.js, written in TypeScript and backed by [[Redis]]. It's the Node ecosystem's answer to [[Celery]]: you define a queue, add jobs to it, and process them in workers — with retries, exponential backoff, rate limiting, delayed/scheduled jobs, repeatable (cron) jobs, priorities, and **flows** (parent/child job trees). The successor to the original Bull library.

## Links

### Description

- **Queues & workers** — add jobs to a Redis-backed queue, process them in separate worker processes.
- **Retries & backoff** — configurable attempts with fixed/exponential delay.
- **Rate limiting** — cap jobs processed per time window (e.g. to respect external API limits).
- **Scheduling** — delayed jobs and repeatable cron-style jobs.
- **Flows** — parent jobs that fan out to children and aggregate results.
- **Observability** — events, metrics, and dashboards (Bull Board / Taskforce).

### Download or use

```bash
npm i bullmq            # requires a Redis instance
```

- Site/docs: [docs.bullmq.io](https://docs.bullmq.io/)
- Repo: [github.com/taskforcesh/bullmq](https://github.com/taskforcesh/bullmq)

## Reasoning for

BullMQ is the background-job runner in the [[Tech To The Rescue]] platform — the [[Next.js]] + Postgres stack offloads embedding generation, syncs, and other slow work to BullMQ workers on [[Redis]], keeping request handlers fast. It's the natural pick there because the whole stack is TypeScript: one language, typed job payloads, and rate limiting to stay within external API quotas (relevant when generating embeddings in bulk). Conceptually it plays the same role [[Celery]] plays for the Python [[Travelcast AI]] generator — Redis-backed durable jobs with retries — just on the Node side.

## Alternatives considered

- **[[Celery]]** — the Python equivalent; BullMQ is chosen when the codebase is Node/TypeScript.
- **[[RabbitMQ]]** — a heavier, broker-grade option with stronger routing/acking; BullMQ is simpler and Redis is already present.
- **Graphile Worker / pg-boss** — Postgres-backed Node queues (no extra Redis); good when you want one fewer service, fewer features than BullMQ.
- **Inngest / Trigger.dev** — managed durable-workflow platforms; less infra but external dependency and cost.

## Resources

- 📘 [BullMQ docs](https://docs.bullmq.io/)
- 🧩 [Flows (parent/child jobs)](https://docs.bullmq.io/guide/flows)
- 🔧 [Rate limiting](https://docs.bullmq.io/guide/rate-limiting)

---
Template: [[templates/tool]]
