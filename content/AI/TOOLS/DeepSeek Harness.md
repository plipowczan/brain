---
title: "DeepSeek Harness"
date: 2026-09-06
enableToc: true
openToc: true
tags: ["tool", "ai", "coding-agents", "harness", "modular", "typescript", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-09-06_deepseek-aideepseek-harness DeepSeek Harness Everything is a Plugin.md"
agent-created: true
agent-reviewed: 2026-09-06
summary: "deepseek-ai/deepseek-harness (dsh) — DeepSeek AI's open agent harness built on an everything-is-a-plugin architecture over the Cordis framework; Web UI on localhost:3080. Developer preview, MIT."
---
# DeepSeek Harness

🗒️ **[deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)** (`dsh`) — an open-source **agent harness** from DeepSeek AI, built on an **everything-is-a-plugin** architecture and powered by [Cordis](https://github.com/cordiverse/cordis), whose design is written up in *[A Programming Paradigm for Spatiotemporal Composability](https://arxiv.org/abs/2608.25512)*. MIT.

⚠️ **Developer preview, iterating rapidly — there will be compatibility-breaking changes.** Read the [safety notice](https://github.com/deepseek-ai/deepseek-harness/blob/master/SAFETY.md) before running it.

## Links
### Description
🧩 What it is:

- **A harness, not a model wrapper** — the frontier lab shipping its own agent runtime rather than leaving it to third parties, in the same category shift described in [[Harness Engineering]].
- **Everything is a plugin** — capabilities, tools and surfaces all arrive as plugins; the community tags them with the [`dsh-plugin`](https://github.com/topics/dsh-plugin) GitHub topic for discoverability.
- **Cordis-powered** — a composability framework with an actual published design paper behind it, which is unusual for this class of tool.
- **Web UI first** — the default launch serves a browser UI on `127.0.0.1:3080`. SSH launches only print the host URL, since the SSH client or editor owns the forwarded address.
- **Profile-scoped plugin management** — e.g. `dsh plugin --profile web add …` / `remove …`.

### Download or use
Run from npm (needs Node.js):
```bash
npx @deepseek-ai/dsh web        # Web UI at http://127.0.0.1:3080
npx @deepseek-ai/dsh web --no-open   # don't open a browser
```
Run from source:
```bash
git clone https://github.com/deepseek-ai/deepseek-harness.git
cd deepseek-harness
pnpm install
pnpm run build
pnpm dsh web
```

## Reasoning for
Worth tracking as a **harness-layer** entry rather than another model client. The interesting part is not DeepSeek's models — it's that the plugin boundary is the whole architecture, which makes it a natural target for skills that already publish cross-agent (see [[Agent Skills]] and [[Vercel Skills]]).

That's already happening: [[Archify]] ships a community DSH integration —
```bash
dsh plugin --profile web add @tt-a1i/archify-dsh@0.1.0
```
— targeting developer-preview `@deepseek-ai/dsh@0.1.0-rc.6` on Node `^22.19.0 || >=24.0.0`. A useful early signal of whether the plugin ecosystem actually takes.

For me this stays in the *watch* column until the breaking-change window closes. The developer-preview warning is explicit and the whole point of a harness is stability underneath your workflows.

## Alternatives considered
- **[[Claude Code]]** — my primary harness; skills/MCP/hooks rather than a single plugin abstraction.
- **[[Hermes Agent]] · [[Agent Zero]]** — other open harnesses; DSH's differentiator is the Cordis composability model and a lab standing behind it.
- **[[LiteLLM]] / [[OmniRoute]]** — gateways, not harnesses; they sit *under* a tool like this rather than replacing it.

## Resources
- 🔗 Repo: [github.com/deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)
- 🔗 [Documentation](https://deepseek-harness.github.io/deepseek-harness/) · [Architecture docs](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/architecture.md) · [Development guide](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/development.md)
- 🔗 [Cordis](https://github.com/cordiverse/cordis) · [the paradigm paper](https://arxiv.org/abs/2608.25512)
- 🔗 [Discord](https://discord.gg/Ycq5dCaS4) · [Discussions](https://github.com/deepseek-ai/deepseek-harness/discussions)
- 📖 Related: [[Harness Engineering]] · [[Agent Skills]] · [[Archify]] · [[Claude Code]]

---
Template: [[templates/tool]]
