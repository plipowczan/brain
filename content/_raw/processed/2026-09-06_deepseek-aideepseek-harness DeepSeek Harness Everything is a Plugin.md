---
title: "deepseek-ai/deepseek-harness: DeepSeek Harness: Everything is a Plugin."
source: "https://github.com/deepseek-ai/deepseek-harness"
author:
published:
created: 2026-09-06
description: "DeepSeek Harness: Everything is a Plugin. Contribute to deepseek-ai/deepseek-harness development by creating an account on GitHub."
tags:
  - "clippings"
---
## DeepSeek Harness

English | [中文](https://github.com/deepseek-ai/deepseek-harness/blob/master/README.zh.md)

DeepSeek Harness (`dsh`) is an open-source agent harness developed by [DeepSeek AI](https://deepseek.com/).

It is built on an **everything-is-a-plugin** architecture and powered by [Cordis](https://github.com/cordiverse/cordis), whose design is described in [*A Programming Paradigm for Spatiotemporal Composability*](https://arxiv.org/abs/2608.25512).

Documentation: [https://deepseek-harness.github.io/deepseek-harness/](https://deepseek-harness.github.io/deepseek-harness/)

## Developer preview

DeepSeek Harness is in *developer preview* and iterating rapidly. **THERE WILL BE COMPATIBILITY-BREAKING CHANGES.**

Review the [safety notice](https://github.com/deepseek-ai/deepseek-harness/blob/master/SAFETY.md) before running the project.

## Run

### Run from npm

Install `Node.js`, then run:

```
npx @deepseek-ai/dsh web
```

The command starts the Web UI at `http://127.0.0.1:3080` by default and opens it in the default browser for a local launch. An SSH launch only prints the host URL because the SSH client or editor owns the local forwarded address. Pass `--no-open` to run the server without opening a browser. See [Web UI guide](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/user/guide/index.md).

### Run from source

To run from a repository checkout:

```
git clone https://github.com/deepseek-ai/deepseek-harness.git
cd deepseek-harness
pnpm install
pnpm run build
pnpm dsh web
```

`pnpm run build` prepares the repository artifacts. `pnpm dsh web` uses those built artifacts without rebuilding.

## Community and support

- Submit feedback or bug reports through [GitHub Discussions](https://github.com/deepseek-ai/deepseek-harness/discussions).
- Add the [`dsh-plugin`](https://github.com/topics/dsh-plugin) topic to your plugin repository for discoverability.
- Join [DeepSeek Harness Discord community](https://discord.gg/Ycq5dCaS4).

## Contributing

See [CONTRIBUTING.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/CONTRIBUTING.md).

## Development

Start with the [development guide](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/development.md) and [architecture documentation](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/architecture.md).

For agents, follow [AGENTS.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/AGENTS.md).

## License

[MIT](https://github.com/deepseek-ai/deepseek-harness/blob/master/LICENSE)

Third-party dependencies and their licenses are disclosed in [THIRD\_PARTY\_NOTICES.md](https://github.com/deepseek-ai/deepseek-harness/blob/master/THIRD_PARTY_NOTICES.md).