---
title: "External Triggers for Claude Code"
date: 2026-11-01
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "claude-code", "webhooks", "automation", "agents", "research", "compiled"]
type: compiled-note
source: "_raw/processed/2026-11-01_2026-10-15-research-claude-code-external-triggers.md"
agent-created: true
summary: "Deep research on 30 ways to trigger Claude Code or the Desktop Code tab from outside on Windows when the URL changes and the PC may be off — no first-party answer; stable ingress plus outbound poller wins"
---

# External Triggers for Claude Code

## 🚀 Main message

**No first-party mechanism gives the Claude Desktop Code tab a stable inbound endpoint that also buffers events.** What works is a **stable ingress that stores events** (cloud or SaaS) plus an **outbound poller or runner on the PC**. Tunnels alone fix only half the problem: every tunnel returns an error while the PC is off.

Source: a deep-research run on 2026-10-15 (30 items × 37 fields, one agent each). The full 750 KB report is archived at `_raw/processed/2026-11-01_2026-10-15-research-claude-code-external-triggers.md`; claims come from the research agents and are not independently verified, apart from Svix's 7-day Free retention, which was checked on its pricing page.

## 📒 The two sub-problems

1. The sender needs a **stable endpoint** (my local URL changes).
2. The event must **survive while the PC or app is off**.

## 🧩 Designs that solve both

| # | Design | Good for | Limits |
|---|---|---|---|
| 1 | **Cloud-first: Claude Code Routines API trigger** | Work that needs no local files; stable URL on Anthropic's side, runs with the PC off | 30 fires/hour per routine, 100/hour per account; no idempotency key (retries create duplicate sessions); text up to 65,536 characters; no local files or locally added MCP servers; Local (Desktop) routines have no API trigger |
| 2 | **GitHub `repository_dispatch` + self-hosted runner** running `claude -p` | Repo work on my PC | Job waits up to 24 h for an offline runner; run the runner as my own user, private repo only; runs do not appear in the Desktop Code tab |
| 3 | **Hosted queue + outbound poller on the PC** — a Cloudflare Worker (verifies signature, enqueues) with Cloudflare Queues, or Svix Ingest | Desktop work on local files | Retention: Cloudflare Queues 24 h Free / 4–14 days Paid; Svix Free up to 7 days |
| 4 | **AgentsRoom** (packaged) | Easy setup | Vendor server queues events up to 7 days and sees every payload; closed source, single maintainer; runs in its own app, not the Code tab |
| 5 | **Always-on host running `claude -p`** | Repo or service work, both problems solved | Loses local files; unattended runs need `--permission-mode dontAsk` with an allowlist; `claude setup-token` gives a one-year subscription token |

**Poller options for design 3:**

- a **mod** (`$.clock.every` + `$.prompt.submit`) — runs in the Code tab but only while a session is open, needs de-duplication across sessions, and the loop has not been tested end to end (see [[Claude Code Mods (RoboNuggets)]])
- a **Desktop Scheduled Task** — minimum 1 minute, app open and PC awake, one catch-up run for the latest miss within 7 days; every poll costs a model session unless a script checks the queue first
- **`claude -p` from Task Scheduler** — invisible in the Desktop app, and two open Windows scheduler bugs were reported

## ⚠️ What does not help here

- Tunnels alone (Cloudflare Tunnel, Tailscale Funnel, ngrok, Dev Tunnels, zrok, Azure Relay) and Hookdeck without a live listener
- Channels (CLI only), cross-session messaging (no public API), Remote Control and Projects (nothing external can start them), Dispatch, deep links and Slack (a human is in the loop), background sessions (terminal only)
- Chat bridges, OpenClaw and [[Hermes Agent]] gateways, GitHub/Linear bridges (no durability, or abandoned), Power Automate, Temporal and Inngest (licensing or over-engineered), Managed Agents (not Claude Code, API billing, WSL)

## 📖 Full item list (fit for my scenario)

- **High:** Routines, mods as in-session poller, GitHub self-hosted runner, always-on host with headless Claude Code, Svix Ingest + polling, outbound pull queues (Cloudflare Queues, SQS, Upstash Redis), AgentsRoom (flagged uncertain)
- **Medium:** self-hosted environments for routines, Channels, hooks as event intake, background sessions, `claude -p` as own receiver, Desktop Scheduled Tasks / `/loop` / Cron / Monitor, `claude-code-action` on GitHub Actions and GitLab, [[n8n]] / Make / Zapier glue, tunnels, Hookdeck, chat/email transports
- **Low:** cloud-session CLI (`--cloud`, `--teleport`), cross-session inbox, Remote Control, Dispatch/deep links/Slack, PR/CI monitor and Auto-fix delivery, Managed Agents with a self-hosted worker, workflow engines, OpenClaw/Hermes gateways, event bridges, chat bridges

## ✅ To verify before building

- an end-to-end test of the mod poller in the Desktop Code tab on Windows
- whether polling endpoints are enabled on Svix's Free plan
- whether a cloud routine can message a local Remote Control session (would be a native cloud-to-local path)
- AgentsRoom's trust model, since the vendor sees all payloads

## Resources

- Related: [[Claude Code]], [[Loop Engineering]], [[Claude Peers MCP]], [[Claude Code Mods (RoboNuggets)]], [[Hermes Agent]], [[n8n]], [[AI Agent Security]]
