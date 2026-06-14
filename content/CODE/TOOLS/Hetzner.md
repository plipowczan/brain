---
title: "Hetzner"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "hosting", "vps", "dedicated-servers", "infrastructure", "self-hosted"]
type: tool
agent-created: true
summary: "Low-cost German cloud/dedicated-server provider — exceptional price/performance for self-hosted compute; runs Qamera AI's Docker worker + queue stack"
---

# Hetzner

A German hosting provider famous for the best raw price/performance in the market — cloud VPS and dedicated servers at a fraction of hyperscaler prices. You trade managed convenience for control and savings: you administer the box (OS, [[Docker]], networking), but you get serious compute for very little money. Ideal for self-hosted, long-running, compute-heavy workloads that would be expensive or impossible on serverless.

## Links

### Description

- **Cloud VPS** — affordable virtual servers with fast NVMe and generous bandwidth.
- **Dedicated servers** — bare-metal at standout prices (incl. GPU/AX lines).
- **Volumes & networks** — block storage and private networking.
- **EU data residency** — German/Finnish datacentres (GDPR-friendly).
- **Full control** — root access; run any container/stack you like.

### Download or use

- Platform: [hetzner.com](https://www.hetzner.com/)
- Cloud console + `hcloud` CLI; typically provisioned with [[Docker]]/Compose.
- Docs: [docs.hetzner.com](https://docs.hetzner.com/)

## Reasoning for

Hetzner runs [[Qamera AI]]'s self-hosted backend: a [[Docker]] stack hosting the **worker + queue** ([[RabbitMQ]]) that drives AI image/video generation. This is the deliberate counterpart to [[Vercel]] in Qamera's split architecture — the [[Next.js]] app lives on Vercel for its deploy/preview DX, while the long-running, GPU/CPU-heavy generation orchestration lives on Hetzner where there are no serverless timeouts and compute is cheap enough to run continuously. For a credit-based product where margins depend on per-generation cost, Hetzner's price/performance directly protects unit economics. Where a project wants a managed PaaS instead of administering servers, [[DigitalOcean]] is the friendlier (pricier) alternative.

## Alternatives considered

- **[[Vercel]]** — paired with Hetzner, not replaced by it: Vercel hosts the web tier, Hetzner the workers.
- **[[DigitalOcean]]** — managed App Platform + Spaces; easier ops, higher cost — chosen for [[Tech To The Rescue]] but not for Qamera's cost-sensitive compute.
- **AWS EC2 / GCP** — vastly more services, far higher cost and complexity for the same raw compute.
- **Fly.io / Railway** — nice DX for containers; more expensive at the sustained compute Qamera's workers need.

## Resources

- 📘 [Hetzner docs](https://docs.hetzner.com/)
- ☁️ [Hetzner Cloud](https://www.hetzner.com/cloud)
- 🖥️ [Dedicated servers](https://www.hetzner.com/dedicated-rootserver)

---
Template: [[templates/tool]]
