---
title: "PostHog"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "analytics", "product-analytics", "feature-flags", "ab-testing", "observability", "open-source"]
type: tool
source: "_raw/processed/2026-06-13_posthog-posthog-github.md"
agent-created: true
summary: "posthog/posthog — all-in-one open-source product OS: analytics, session replay, feature flags, experiments, surveys, data warehouse/CDP, and LLM observability; MIT (ee/ proprietary), cloud or Docker self-host"
---

# PostHog

All-in-one, open-source platform for building products — bundles the analytics, experimentation, and customer-data stack that teams usually assemble from a dozen separate SaaS tools. Developer-first: you instrument with a snippet or SDK, then everything (events, replays, flags, experiments) hangs off the same event stream.

## Links

### Description

A single platform spanning the whole product-feedback loop:

- **Product Analytics** — event-based analytics with visualization and SQL (HogQL) querying.
- **Web Analytics** — Google Analytics-style traffic dashboard.
- **Session Replays** — recordings of real user interactions.
- **Feature Flags** — controlled, targeted feature rollouts.
- **Experiments** — A/B tests with built-in statistical analysis.
- **Error Tracking** — issue monitoring and alerting.
- **Surveys** — templated and custom in-product surveys.
- **Data Warehouse** — pull in external data (Stripe, HubSpot, …) alongside product events.
- **Data Pipelines / CDP** — real-time event filtering and routing to destinations.
- **LLM Observability** — traces, latency, and cost monitoring for AI-powered apps.

Tech stack: Python (~53%), TypeScript (~38%), Rust (~7%). Licensed **MIT** (expat), with proprietary code isolated in the `ee/` directory.

### Download or use

```bash
# Self-hosted hobby deployment (one-line Docker install, ~100k events/month)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/PostHog/posthog/HEAD/bin/deploy-hobby)"
```

- Cloud (recommended): free tier of 1M events/month plus allowances across the other products — [posthog.com](https://posthog.com/)
- Repo: [github.com/posthog/posthog](https://github.com/posthog/posthog)

## Reasoning for

PostHog collapses product analytics, session replay, feature flags, A/B testing, and surveys into one open-source platform — instead of stitching together Mixpanel + LaunchDarkly + FullStory + Optimizely. For a SaaS product like [[Qamera AI]], that means one event stream powering both behavioral analytics and feature gating, with a generous free tier and the option to self-host on [[Docker]] for full data ownership. The newer **LLM Observability** product also makes it a candidate for monitoring agentic/AI features (traces, latency, cost) — overlapping ground with [[Langfuse]].

## Alternatives considered

- **[[Langfuse]]** — narrower scope (LLM engineering/observability only) but deeper on tracing, prompt management, and evals; PostHog's LLM observability is one module among many.
- **Mixpanel / Amplitude** — dedicated product-analytics SaaS, no self-host, no flags/replays bundled.
- **LaunchDarkly** — feature-flag specialist; richer flag tooling but proprietary and single-purpose.
- **[[Supabase]]** — also open-source dev infrastructure, but a backend/database platform rather than an analytics/experimentation suite (complementary, not competing).

## Resources

- 📘 [PostHog docs](https://posthog.com/docs)
- 🧩 [Product list & pricing](https://posthog.com/products)
- 🛠️ [Self-hosting guide](https://posthog.com/docs/self-host)

---
Template: [[templates/tool]]
