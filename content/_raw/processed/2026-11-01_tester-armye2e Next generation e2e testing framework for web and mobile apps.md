---
title: "tester-army/e2e: Next generation e2e testing framework for web and mobile apps."
source: "https://github.com/tester-army/e2e"
author:
published:
created: 2026-10-14
description:
tags:
  - "clippings"
---
[![[4f030728755544ba3e8f999b963e159a_MD5.png]]](https://tester.army/e2e?utm_source=e2e&utm_medium=github&utm_campaign=readme_banner)[![[df5acb12df0d4b8774c0acfd9d168541_MD5.svg]]](https://www.star-history.com/tester-army/e2e)

## e2e

[e2e](https://tester.army/e2e?utm_source=e2e&utm_medium=github&utm_campaign=readme_intro) is an end-to-end testing framework for web and mobile apps. Describe a goal in natural language and an agent drives the app to reach it. Check the result with locators and assertions in the same test.

```
// tests/checkout.e2e.ts
import { test, expect } from 'e2e';

test('a member upgrades to Pro', async ({ app, agent, screen }) => {
  await app.open('/settings/billing');

  await agent.act('upgrade the workspace to the Pro plan');
  await agent.assert('the invoice preview shows a prorated amount');

  await expect(screen.getByRole('status')).toContainText('Pro');
});
```

An agent step that a later assertion verifies records its actions, and the next run replays them with no model calls until the app changes. Tests without agent steps need no model. Bring your own subscription, API key, or local model.

## Quick start

```
npx e2e init
```

`init` asks for an engine, web or mobile, and a model provider, then writes a config and an example test. The [quickstart](https://e2e.tester.army/docs/quickstart) covers the rest.

To see a finished setup in your stack, open [`examples/`](https://github.com/tester-army/e2e/tree/main/examples): Vite, Next.js, Astro, Expo, SwiftUI, Jetpack Compose, Kotlin Multiplatform, and Flutter, each a standalone project with a passing suite.

## Packages

| Package | What it does |
| --- | --- |
| [`e2e`](https://www.npmjs.com/package/e2e) | The SDK, runner, and CLI. |
| [`@e2e-dev/web`](https://www.npmjs.com/package/@e2e-dev/web) | Browser engine: Chromium, Firefox, and WebKit through Playwright. |
| [`@e2e-dev/mobile`](https://www.npmjs.com/package/@e2e-dev/mobile) | iOS and Android engine: simulators and emulators through agent-device. |
| [`@e2e-dev/github`](https://www.npmjs.com/package/@e2e-dev/github) | Reporter that posts results as a pull request comment. |
| [`@e2e-dev/kernel`](https://www.npmjs.com/package/@e2e-dev/kernel) | Kernel hosted browsers for the web engine. |
| [`@e2e-dev/limrun`](https://www.npmjs.com/package/@e2e-dev/limrun) | Limrun hosted iOS simulators and Android emulators for mobile tests. |
| [`@e2e-dev/eas`](https://www.npmjs.com/package/@e2e-dev/eas) | EAS Simulators hosted iOS simulators and Android emulators for the mobile engine. |
| [`@e2e-dev/smol`](https://www.npmjs.com/package/@e2e-dev/smol) | smol machines browsers for the web engine: by default, each attempt branches a warm Chromium microVM. |
| [`@e2e-dev/decision`](https://e2e.tester.army/docs/decision-models) | Decision-model executors for bounded semantic actions and assertions. |

## Documentation

[e2e.tester.army/docs](https://e2e.tester.army/docs). The `e2e` package ships every page, so coding agents can read them offline in `node_modules/e2e/docs`.

## Contributing

See [CONTRIBUTING.md](https://github.com/tester-army/e2e/blob/main/CONTRIBUTING.md). Questions go to [Discord](https://tester.army/discord).

## Security

Please don't open public issues for security vulnerabilities. Follow [SECURITY.md](https://github.com/tester-army/e2e/blob/main/SECURITY.md) and report them to [security@tester.army](mailto:security@tester.army).

## Telemetry

The CLI sends anonymous usage data, such as which commands and engines run and where runs fail, but no test content, app content, or credentials. Opt out with `npx e2e telemetry disable` or `E2E_TELEMETRY_DISABLED=1`. [Telemetry](https://e2e.tester.army/docs/telemetry) lists every field.

## Status

> [!note] Note
> e2e is in active development on the way to 1.0. APIs and config can still change between minor releases.

## Made by TesterArmy

e2e is built by [TesterArmy](https://tester.army/?utm_source=e2e&utm_medium=github&utm_campaign=readme_footer), the agentic testing platform that runs natural language tests on web and mobile apps, on every pull request or on a schedule.

Apache-2.0.