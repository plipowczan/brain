---
title: "RabbitMQ"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "message-queue", "broker", "amqp", "async", "infrastructure"]
type: tool
agent-created: true
summary: "Mature message broker (AMQP) for reliable async job pipelines — the queue behind Qamera AI's HTTP-variant generation pipeline"
---

# RabbitMQ

A mature, battle-tested message broker. Producers publish messages to exchanges, which route them to queues that consumers drain — with acknowledgements, redelivery, dead-letter queues, and routing rules that give you real delivery guarantees. Where [[Redis]] is a fast store you *can* use as a queue, RabbitMQ is a purpose-built broker: it's the right tool when a job must not be silently lost.

## Links

### Description

- **Exchanges + queues + bindings** — flexible routing (direct, topic, fanout, headers).
- **Acknowledgements & redelivery** — consumers ack on success; unacked messages requeue on failure/crash.
- **Dead-letter queues (DLQ)** — failed/expired messages divert to a DLQ for inspection and alerting.
- **Durability** — persistent queues/messages survive broker restarts.
- **Prefetch / QoS** — control how many in-flight messages a consumer holds.
- **Protocols** — AMQP 0-9-1 natively; also MQTT, STOMP, and an HTTP API.

### Download or use

```bash
docker run -p 5672:5672 -p 15672:15672 rabbitmq:management   # broker + web UI
```

- Site: [rabbitmq.com](https://www.rabbitmq.com/)
- Docs: [rabbitmq.com/docs](https://www.rabbitmq.com/docs)

## Reasoning for

RabbitMQ is the queue at the heart of [[Qamera AI]]'s asynchronous image-generation pipeline — but used in a deliberate **HTTP variant**: the web app publishes a `run_due` message to RabbitMQ, a thin Node worker on [[Hetzner]] consumes it and enforces platform/per-account limits, then calls *back into the web app over authenticated HTTP* to do the actual generation. This keeps the heavy domain logic in the [[Next.js]] app (and out of the worker), while RabbitMQ provides the durable hand-off, retries, and dead-letter alerting (wired to [[ClickUp]] + email) that a credit-charging pipeline needs. I reached for RabbitMQ over [[Redis]] here precisely because lost or double-processed jobs would mean mischarged credits — the stronger acking/DLQ semantics earn their keep.

## Alternatives considered

- **[[Redis]] (+ [[Celery]]/[[BullMQ]])** — simpler and already-present; fine for [[Travelcast AI]]/[[Tech To The Rescue]], but weaker delivery guarantees than a real broker.
- **AWS SQS / Google Pub/Sub** — managed queues, no ops; chosen against to avoid cloud lock-in and keep the self-hosted [[Docker]] stack portable.
- **Kafka** — built for high-throughput event streaming/replay; overkill for a task queue at this scale.
- **NATS** — lightweight and fast; smaller ecosystem and fewer built-in delivery guarantees than RabbitMQ.

## Resources

- 📘 [RabbitMQ docs](https://www.rabbitmq.com/docs)
- 🎓 [Tutorials (work queues, routing)](https://www.rabbitmq.com/tutorials)
- 🧩 [Dead letter exchanges](https://www.rabbitmq.com/docs/dlx)

---
Template: [[templates/tool]]
