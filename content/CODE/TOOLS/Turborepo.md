---
title: "Turborepo"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "monorepo", "build-system", "javascript", "caching", "vercel"]
type: tool
agent-created: true
summary: "High-performance build system for JS/TS monorepos — task pipelines with content-aware caching and parallelism; orchestrates the Qamera AI monorepo"
---

# Turborepo

A high-performance build system for JavaScript/TypeScript monorepos (from the [[Vercel]] team, Rust-based). It sits on top of your package manager and makes monorepo task running fast: you declare a task pipeline (which tasks depend on which) and Turborepo runs them in parallel, **caching** outputs so unchanged packages are never rebuilt — locally and, optionally, on a shared remote cache.

## Links

### Description

- **Task pipelines** — declare dependencies between tasks (`build`, `lint`, `test`) across packages in `turbo.json`.
- **Content-aware caching** — hashes inputs; replays cached outputs/logs instead of re-running unchanged work.
- **Parallel execution** — schedules tasks across cores respecting the dependency graph.
- **Remote caching** — share the cache across a team/CI (e.g. via Vercel) so a build done once is reused everywhere.
- **Pruning** — produce a minimal subset of the monorepo for a given app's Docker build.
- **Package-manager agnostic** — works with [[pnpm]], npm, yarn workspaces.

### Download or use

```bash
# inside a workspaces monorepo
pnpm add turbo -Dw
# turbo run build --filter=web
```

- Site: [turborepo.com](https://turborepo.com/)
- Docs: [turborepo.com/docs](https://turborepo.com/docs)

## Reasoning for

Turborepo orchestrates the [[Qamera AI]] monorepo (scaffolded on [[MakerKit]], packages managed with [[pnpm]]). With app, worker, and shared packages in one repo, the task-pipeline + caching model means a change to one package only rebuilds what's affected — keeping local iteration and CI fast as the codebase grows. It also pairs naturally with [[Vercel]] (same vendor) for remote caching and with `turbo prune` to build lean [[Docker]] images for the [[Hetzner]] worker without dragging the whole monorepo into the image.

## Alternatives considered

- **Nx** — more powerful/feature-rich monorepo tooling (generators, plugins, graph viz); heavier and more opinionated than Turborepo's lean caching focus.
- **pnpm workspaces alone** — handles linking/installs but no task caching/orchestration; Turborepo adds the build-speed layer on top.
- **Bazel** — hermetic builds at massive scale; far too much overhead for a product-sized monorepo.
- **Lerna** — older monorepo manager, largely superseded by Turborepo/Nx for task running.

## Resources

- 📘 [Turborepo docs](https://turborepo.com/docs)
- 🧩 [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- 🔧 [Pruning for Docker](https://turborepo.com/docs/guides/tools/docker)

---
Template: [[templates/tool]]
