---
title: "TesterArmy e2e"
date: 2026-11-01
enableToc: true
openToc: true
tags: ["tool", "testing", "ai", "agents", "playwright", "e2e", "open-source", "apache-2.0", "typescript"]
type: tool
source: "_raw/processed/2026-11-01_tester-armye2e Next generation e2e testing framework for web and mobile apps.md"
agent-created: true
summary: "tester-army/e2e — Playwright-based e2e framework where a test step can be a natural-language goal; the agent's actions are recorded and replayed with no model calls until the app changes"
repo: "https://github.com/e2e-inc/e2e"
status-checked: 2026-11-13
project-status: active
---

# TesterArmy e2e

> [!success] Status check 2026-11-13 — active
> **Verdict:** Several commits landed on main on 2026-11-13.
> **Last release:** e2e@0.23.0 (core npm package) on 2026-11-05. · **last commit:** 2026-11-13 · **licence:** Apache-2.0
> **Repo:** https://github.com/e2e-inc/e2e — **moved/renamed:** yes: the GitHub repo moved from tester-army/e2e to e2e-inc/e2e (org move on 2026-11-10, PR #1672). The vendor TesterArmy is winding down and its team now builds e2e under the e2e.com brand; docs moved from e2e.tester.army/docs to e2e.com/docs.
> **Changed since this note:** The note's vendor framing is now wrong. TesterArmy is winding down (new sign-ups closed, platform online until 2027-01-15, no automatic test migration), and the same team now develops e2e as a standalone open-source product under e2e.com, so the framework is no longer a funnel for a hosted platform.

## 🚀 Description

[tester-army/e2e](https://github.com/tester-army/e2e) is an end-to-end testing framework for web and mobile apps. You describe a goal in natural language (`agent.act('upgrade the workspace to the Pro plan')`), an agent drives the app to reach it, and you verify the result with ordinary locators and assertions in the same test. Apache-2.0, still pre-1.0 (APIs and config can change between minor releases).

The trick that makes it practical: an agent step that a later assertion verifies **records its actions**, and the next run **replays them with no model calls** until the app changes. Tests with no agent steps need no model at all. Bring your own subscription, API key or local model.

```ts
test('a member upgrades to Pro', async ({ app, agent, screen }) => {
  await app.open('/settings/billing');
  await agent.act('upgrade the workspace to the Pro plan');
  await agent.assert('the invoice preview shows a prorated amount');
  await expect(screen.getByRole('status')).toContainText('Pro');
});
```

## 🧩 Features

- `npx e2e init` asks for engine (web or mobile) and model provider, then writes a config and an example test
- **Engines:** `@e2e-dev/web` (Chromium, Firefox, WebKit via Playwright) and `@e2e-dev/mobile` (iOS and Android simulators/emulators via agent-device)
- **Hosted runtimes (optional):** Kernel browsers, Limrun and EAS Simulators for mobile, smol machines (a warm Chromium microVM branched per attempt)
- `@e2e-dev/github` posts results as a pull request comment
- `@e2e-dev/decision` — decision-model executors for bounded semantic actions and assertions
- Examples for Vite, Next.js, Astro, Expo, SwiftUI, Jetpack Compose, Kotlin Multiplatform and Flutter
- The package ships its docs in `node_modules/e2e/docs`, so a coding agent can read them offline
- Anonymous CLI telemetry on by default; opt out with `npx e2e telemetry disable` or `E2E_TELEMETRY_DISABLED=1`

## Reasoning for

It fixes the usual complaint about LLM-driven testing — non-deterministic, slow and costly on every run — by treating the agent as a *test author* whose output is cached and replayed. Worth a look for the Next.js projects ([[Next.js]], [[Qamera AI]]) where hand-written Playwright selectors rot quickly. The vendor, TesterArmy, sells a hosted platform on top, so the open-source framework doubles as its funnel.

## Alternatives considered

- [[Playwright MCP]] — lets an agent drive a browser interactively, but nothing is recorded into a repeatable test
- Plain Playwright tests — fully deterministic, but you write and maintain every locator
- [[Chrome DevTools MCP vs Claude in Chrome vs Playwright MCP]] — comparison of the interactive browser-automation options

## 🔗 Links

- Repo: https://github.com/tester-army/e2e
- Docs: https://e2e.tester.army/docs
- Vendor: https://tester.army/

---
Template: [[templates/tool]]
