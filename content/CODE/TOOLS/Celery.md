---
title: "Celery"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "python", "task-queue", "async", "distributed", "workers"]
type: tool
agent-created: true
summary: "Python distributed task queue — runs background work across workers with retries, scheduling, and primitives like chord/group; orchestrates Travelcast AI's parallel research agents"
---

# Celery

The de-facto distributed task queue for Python. You decorate a function as a `@task`, a broker (usually [[Redis]] or [[RabbitMQ]]) carries the messages, and a pool of worker processes executes them asynchronously — with retries, rate limits, scheduling (Beat), and **canvas primitives** (`group`, `chain`, `chord`) for composing complex workflows out of individual tasks.

## Links

### Description

- **Tasks & workers** — async execution of Python functions across a worker pool, locally or on many machines.
- **Canvas primitives** — `group` (parallel), `chain` (sequential), `chord` (parallel + a callback once all finish).
- **Reliability** — automatic retries with backoff, `acks_late`, reject-on-worker-lost, visibility timeouts.
- **Scheduling** — Celery Beat for periodic/cron-style tasks.
- **Result backend** — store task results/state (Redis, DB) for polling and chords.
- **Broker-agnostic** — Redis, RabbitMQ, and others.

### Download or use

```bash
pip install celery[redis]
# celery -A app worker --loglevel=info
```

- Site: [docs.celeryq.dev](https://docs.celeryq.dev/)
- Repo: [github.com/celery/celery](https://github.com/celery/celery)

## Reasoning for

Celery orchestrates the generator in [[Travelcast AI]]. The core pattern is a **chord**: four research agents — Geo, Historian, Vibe, Critic — run concurrently as a group, and when all complete, a single GPT consensus task synthesizes their outputs into one script. That "parallel fan-out → single join" maps exactly onto Celery's chord primitive, so I didn't have to hand-roll coordination. On the reliability side, podcast generation is long-running and expensive, so the workers use `task_acks_late`, reject-on-worker-lost, a 2-hour visibility timeout, and a resume-from-failure check (agents skip work that already produced output) — all Celery features — backed by [[Redis]] as broker + result store.

## Alternatives considered

- **[[BullMQ]]** — the Node equivalent (used in [[Tech To The Rescue]]); Celery is the choice in Python land.
- **RQ (Redis Queue)** — simpler Python queue, but no canvas/chord primitives — the chord is exactly what Travelcast needs.
- **Dramatiq** — lighter, modern Celery alternative; smaller ecosystem.
- **Prefect / Temporal** — full workflow orchestrators with durable execution; more power and more operational weight than this pipeline warranted.

## Resources

- 📘 [Celery docs](https://docs.celeryq.dev/)
- 🧩 [Canvas: groups, chains, chords](https://docs.celeryq.dev/en/stable/userguide/canvas.html)
- 🔧 [Task retries & reliability](https://docs.celeryq.dev/en/stable/userguide/tasks.html)

---
Template: [[templates/tool]]
