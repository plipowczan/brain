---
title: "Redis"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "cache", "queue", "in-memory", "broker", "database"]
type: tool
agent-created: true
summary: "In-memory data store used as cache, message broker, and job-queue backend — the broker behind Celery (Travelcast) and BullMQ (TTTR)"
---

# Redis

An in-memory data store — a key-value database that lives in RAM, so reads and writes are sub-millisecond. It wears three hats in my projects: **cache**, **message broker**, and the **backing store for job queues**. Because it speaks a simple protocol and supports lists, streams, pub/sub, and atomic operations, it's the default substrate that higher-level queue libraries ([[Celery]], [[BullMQ]]) build on.

## Links

### Description

- **Cache** — fast key-value storage with TTL expiry for hot data.
- **Message broker / queues** — lists, streams, and pub/sub used as the transport for background-job systems.
- **Atomic operations** — `INCR`, `SETNX`, Lua scripts for locks, counters, rate limiters.
- **Data structures** — strings, hashes, lists, sets, sorted sets, streams, bitmaps.
- **Persistence options** — RDB snapshots and/or AOF logs when durability matters.
- **Pub/Sub & Streams** — real-time messaging and durable append-only logs.

### Download or use

```bash
docker run -p 6379:6379 redis        # local
# clients: redis-py (Python), ioredis (Node)
```

- Site: [redis.io](https://redis.io/)
- Docs: [redis.io/docs](https://redis.io/docs/)

## Reasoning for

Redis is the queue backbone in two of my pipelines. In [[Travelcast AI]] it's the broker (and result backend) for [[Celery]] — the four research agents run as a Celery *chord* with Redis carrying the task messages, and I rely on a long visibility timeout + `task_acks_late` so a worker crash mid-episode doesn't lose the job. In the [[Tech To The Rescue]] platform it backs [[BullMQ]] for Node background work. The reason it shows up everywhere: it's the lowest-friction way to get a durable-enough, fast queue without standing up heavier infrastructure like [[RabbitMQ]] — and the same instance doubles as a cache and a place to keep atomic locks/counters.

## Alternatives considered

- **[[RabbitMQ]]** — a "real" message broker with richer routing/acking guarantees; chosen for [[Qamera AI]]'s pipeline, while Redis is enough when the queue semantics are simpler.
- **PostgreSQL (as a queue)** — `SELECT … FOR UPDATE SKIP LOCKED` can serve as a queue without new infra; Redis wins on throughput and the ecosystem of queue libs.
- **Valkey** — the open-source Redis fork after the license change; a drop-in option to watch.
- **Memcached** — pure cache, no queues/data structures; Redis is the superset.

## Resources

- 📘 [Redis docs](https://redis.io/docs/)
- 🧩 [Data types](https://redis.io/docs/data-types/)
- 🔧 [Redis as a message broker](https://redis.io/solutions/messaging/)

---
Template: [[templates/tool]]
