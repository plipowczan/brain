---
title: "promptfoo/promptfoo: Test your prompts, agents, and RAGs. Red teaming/pentesting/vulnerability scanning for AI. Compare performance of GPT, Claude, Gemini, DeepSeek, and more. Simple declarative configs with command line and CI/CD integration.  Used by OpenAI and Anthropic."
source: "https://github.com/promptfoo/promptfoo"
author:
published:
created: 2026-07-23
description: "Test your prompts, agents, and RAGs. Red teaming/pentesting/vulnerability scanning for AI. Compare performance of GPT, Claude, Gemini, DeepSeek, and more. Simple declarative configs with command line and CI/CD integration.  Used by OpenAI and Anthropic. - promptfoo/promptfoo"
tags:
  - "clippings"
---
## Promptfoo: LLM evals & red teaming

`promptfoo` is a CLI and library for evaluating and red-teaming LLM apps. Stop the trial-and-error approach - start shipping secure, reliable AI apps.

[Website](https://www.promptfoo.dev/) · [Getting Started](https://www.promptfoo.dev/docs/getting-started/) · [Red Teaming](https://www.promptfoo.dev/docs/red-team/) · [Documentation](https://www.promptfoo.dev/docs/) · [Discord](https://discord.gg/promptfoo)

> Promptfoo is now part of OpenAI. Promptfoo remains open source and MIT licensed. Read the [company update](https://www.promptfoo.dev/blog/promptfoo-joining-openai/).

## Quick Start

Requires [Node.js](https://nodejs.org/en/download) `^20.20.0` or `>=22.22.0` for npm and npx usage. [Node.js 20 support ends July 30, 2026 at 00:00 UTC](https://www.promptfoo.dev/docs/installation/#nodejs-runtime-support); upgrade to Node.js 24 LTS before updating promptfoo at or after the cutoff.

```
npm install -g promptfoo
promptfoo init --example getting-started
```

Also available via `brew install promptfoo` and `pip install promptfoo`. You can also use `npx promptfoo@latest` to run any command without installing.

Most LLM providers require an API key. Set yours as an environment variable:

```
export OPENAI_API_KEY=sk-abc123
```

Once you're in the example directory, run an eval and view results:

```
cd getting-started
promptfoo eval
promptfoo view
```

See [Getting Started](https://www.promptfoo.dev/docs/getting-started/) (evals) or [Red Teaming](https://www.promptfoo.dev/docs/red-team/) (vulnerability scanning) for more.

## What can you do with Promptfoo?

- **Test your prompts and models** with [automated evaluations](https://www.promptfoo.dev/docs/getting-started/)
- **Secure your LLM apps** with [red teaming](https://www.promptfoo.dev/docs/red-team/) and vulnerability scanning
- **Compare models** side-by-side (OpenAI, Anthropic, Azure, Bedrock, Ollama, and [more](https://www.promptfoo.dev/docs/providers/))
- **Automate checks** in [CI/CD](https://www.promptfoo.dev/docs/integrations/ci-cd/)
- **Review pull requests** for LLM-related security and compliance issues with [code scanning](https://www.promptfoo.dev/docs/code-scanning/)
- **Share results** with your team

Here's what it looks like in action:

[![[5189a10973d4deff772cb8a00500dacf_MD5.png]]](https://github.com/promptfoo/promptfoo/blob/main/site/static/img/claude-vs-gpt-example@2x.png)

It works on the command line too:

[![[8f5603e5953403a71275475fa2d46a5e_MD5.gif]]](https://camo.githubusercontent.com/47ee0e51b19828842c55db05bae53cfd2495c0f55626ee27b9e66e3d751907d5/68747470733a2f2f7777772e70726f6d7074666f6f2e6465762f696d672f646f63732f73656c662d67726164696e672e676966)

It also can generate [security vulnerability reports](https://www.promptfoo.dev/docs/red-team/):

[![[f41b8169a6b7493bb3dcc634ef1adb66_MD5.jpg]]](https://camo.githubusercontent.com/cab7cc32e3943d389b0c99f4b16e6c25c5f5083cdfc9485e0c80dff001f7b616/68747470733a2f2f7777772e70726f6d7074666f6f2e6465762f696d672f7265647465616d2d64617368626f6172644032782e6a7067)

## Why Promptfoo?

- **Developer-first**: Fast, with features like live reload and caching
- **Private**: LLM evals run 100% locally - your prompts never leave your machine
- **Flexible**: Works with any LLM API or programming language
- **Battle-tested**: Powers LLM apps serving 10M+ users in production
- **Data-driven**: Make decisions based on metrics, not gut feel
- **Open source**: MIT licensed, with an active community

## Learn More

- [Getting Started](https://www.promptfoo.dev/docs/getting-started/)
- [Full Documentation](https://www.promptfoo.dev/docs/intro/)
- [Red Teaming Guide](https://www.promptfoo.dev/docs/red-team/)
- [CLI Usage](https://www.promptfoo.dev/docs/usage/command-line/)
- [Node.js Package](https://www.promptfoo.dev/docs/usage/node-package/)
- [Supported Models](https://www.promptfoo.dev/docs/providers/)
- [Code Scanning Guide](https://www.promptfoo.dev/docs/code-scanning/)

## Contributing

We welcome contributions! Check out our [contributing guide](https://www.promptfoo.dev/docs/contributing/) to get started.

[![[8f17abad428fc5bc32c365c274b015d6_MD5.svg]]](https://github.com/promptfoo/promptfoo/graphs/contributors)