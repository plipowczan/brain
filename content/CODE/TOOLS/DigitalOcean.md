---
title: "DigitalOcean"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "hosting", "cloud", "paas", "storage", "infrastructure"]
type: tool
agent-created: true
summary: "Developer-friendly cloud — App Platform PaaS + Spaces object storage + Droplets; hosts the Tech To The Rescue platform"
---

# DigitalOcean

A developer-friendly cloud provider known for simple pricing and a clean UX compared to the hyperscalers. The pieces I use: **App Platform** (a PaaS that builds and runs apps/containers from a repo, with managed TLS and scaling), **Spaces** (S3-compatible object storage with a built-in CDN), and **Droplets** (plain VMs) when raw control is needed. It's a middle ground between fully-managed [[Vercel]] and self-managed [[Hetzner]].

## Links

### Description

- **App Platform** — PaaS that deploys apps/containers from Git or a registry; managed builds, TLS, autoscaling.
- **Spaces** — S3-compatible object storage with an integrated CDN.
- **Droplets** — straightforward Linux VMs.
- **Managed databases** — Postgres, MySQL, Redis as a service.
- **Container registry & Kubernetes (DOKS)** — for containerized workloads.
- **Predictable pricing** — flat, easy-to-forecast costs.

### Download or use

- Platform: [digitalocean.com](https://www.digitalocean.com/)
- `doctl` CLI + App Spec (`app.yaml`) for declarative App Platform deploys.
- Docs: [docs.digitalocean.com](https://docs.digitalocean.com/)

## Reasoning for

DigitalOcean hosts the [[Tech To The Rescue]] platform — the [[Next.js]] app runs on **App Platform** with assets in **Spaces**, fronted by [[Cloudflare]] DNS. For a nonprofit, the draw is predictable, modest cost and a PaaS that removes server administration without the per-execution limits that make [[Vercel]] a poor fit for the platform's [[BullMQ]]/[[Redis]] background workers (which need long-running processes). It's the pragmatic "managed enough, cheap enough, no surprises" host for that engagement — distinct from [[Qamera AI]], where heavy AI workers run on bare [[Hetzner]] [[Docker]] instead.

## Alternatives considered

- **[[Vercel]]** — best-in-class for the [[Next.js]] web tier, but serverless timeouts don't suit long-running queue workers; DigitalOcean runs persistent processes.
- **[[Hetzner]]** — cheaper raw compute, chosen for [[Qamera AI]]'s self-hosted stack; DigitalOcean trades some cost for a friendlier PaaS + managed services.
- **AWS / GCP** — more services and scale, far more complexity and cost-modelling overhead.
- **Render / Railway** — similar modern PaaS competitors; DigitalOcean adds Spaces + managed DBs in one place.

## Resources

- 📘 [DigitalOcean docs](https://docs.digitalocean.com/)
- 🧩 [App Platform](https://docs.digitalocean.com/products/app-platform/)
- 🪣 [Spaces (S3-compatible)](https://docs.digitalocean.com/products/spaces/)

---
Template: [[templates/tool]]
