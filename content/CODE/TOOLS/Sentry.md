---
title: "Sentry"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "error-tracking", "observability", "apm", "monitoring", "fair-source"]
type: tool
source: "_raw/processed/2026-06-13_getsentry-sentry-github.md"
agent-created: true
summary: "getsentry/sentry — developer-first debugging platform: error tracking, performance/APM, session replay, distributed tracing, uptime, logs, AI fix suggestions; 20+ SDKs; FSL (Fair Source), cloud or Docker self-host"
---

# Sentry

Developer-first debugging platform — detect, trace, and fix issues in production. You drop an SDK into your app and Sentry captures every unhandled exception with full stack trace, breadcrumbs, release, and the user/session context needed to reproduce it. Over time it grew from pure error tracking into a broader application-monitoring suite.

## Links

### Description

- **Error Tracking** — captures crashes and exceptions with stack traces, breadcrumbs, and release/commit context.
- **Performance Monitoring (APM)** — transaction tracing to find slow endpoints and bottlenecks.
- **Session Replay** — recordings of user interactions tied to the error that occurred.
- **Trace Explorer** — distributed tracing across services.
- **Uptime Monitoring** — availability/health checks.
- **Log Aggregation** — centralized log search alongside errors.
- **AI-Powered Insights (Seer)** — ML-assisted root-cause analysis and fix suggestions.

20+ official SDKs: JavaScript, Python, Go, Java, Rust, PHP, Ruby, Dart/Flutter, C#/.NET, plus game engines (Unity, Unreal, Godot). Stack is Python (~58%) + TypeScript (~41%). Licensed under the **FSL (Functional Source License)** — "Fair Source": source-available and self-hostable, converting to Apache 2.0 after ~2 years (not OSI open-source).

### Download or use

```bash
# Self-hosted Docker Compose stack
git clone https://github.com/getsentry/self-hosted.git
cd self-hosted && ./install.sh
```

- Cloud (SaaS) with free tier: [sentry.io](https://sentry.io/)
- Main repo: [github.com/getsentry/sentry](https://github.com/getsentry/sentry)
- Self-hosting repo: [github.com/getsentry/self-hosted](https://github.com/getsentry/self-hosted)

## Reasoning for

Sentry is the default for catching and diagnosing production errors — one SDK turns silent crashes into actionable, deduplicated issues with the context to reproduce them. For a SaaS like [[Qamera AI]] it's the runtime-error counterpart to product analytics: where [[PostHog]] tells you *what users did*, Sentry tells you *what broke and why*. Its newer APM, tracing, and AI fix-suggestion features make it a candidate for a single monitoring backbone, self-hostable on [[Docker]] when data residency matters.

## Alternatives considered

- **[[PostHog]]** — bundles a lighter error-tracking module alongside analytics/flags; Sentry is the deeper specialist (richer stack traces, APM, tracing, broad SDK coverage).
- **Datadog / New Relic** — full-suite commercial observability/APM; broader infra monitoring but proprietary and pricier, no self-host.
- **[[Langfuse]]** — observability too, but scoped to LLM apps (traces, prompts, evals) rather than general application errors — complementary for AI features.
- **Self-hosted GlitchTip** — lightweight OSS, Sentry-API-compatible error tracking for teams wanting a fully open-source, smaller-footprint option.

## Resources

- 📘 [Sentry docs](https://docs.sentry.io/)
- 🧩 [Platform/SDK list](https://docs.sentry.io/platforms/)
- 🛠️ [Self-hosted install](https://develop.sentry.dev/self-hosted/)
- ⚖️ [Functional Source License (FSL)](https://fsl.software/)

---
Template: [[templates/tool]]
