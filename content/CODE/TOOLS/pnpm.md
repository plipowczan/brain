---
title: "pnpm"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "package-manager", "javascript", "nodejs", "monorepo", "workspaces"]
type: tool
agent-created: true
summary: "Fast, disk-efficient Node package manager with a strict content-addressable store and first-class workspaces — the package manager across my JS/TS projects"
---

# pnpm

A fast, disk-efficient package manager for Node.js. Its trick is a **content-addressable global store**: every version of every package is stored once on disk and hard-linked into each project's `node_modules`, so installs are quick and disk usage stays low even across many repos. Its `node_modules` layout is also *strict* — packages can only import what they actually declared as dependencies, which catches phantom-dependency bugs that npm/yarn let slide.

## Links

### Description

- **Content-addressable store** — one copy per package version on disk, hard-linked into projects (fast, space-saving).
- **Strict `node_modules`** — non-flat layout prevents accidental use of undeclared (phantom) dependencies.
- **Workspaces** — first-class monorepo support (`pnpm-workspace.yaml`), pairs with [[Turborepo]].
- **Fast installs** — parallel + cached; notably quicker than npm on cold and warm runs.
- **`pnpm dlx`** — run a package without installing it (npx equivalent).
- **Catalogs / overrides** — central version pinning across a workspace.

### Download or use

```bash
corepack enable pnpm        # or: npm i -g pnpm
pnpm install
```

- Site: [pnpm.io](https://pnpm.io/)
- Repo: [github.com/pnpm/pnpm](https://github.com/pnpm/pnpm)

## Reasoning for

pnpm is the package manager across my JavaScript/TypeScript projects — [[Qamera AI]], [[AGRE]], and [[Tech News Weekly]]. It earns its place for two reasons. In monorepos (Qamera, managed with [[Turborepo]]) its workspaces + hard-linked store make installs fast and keep disk usage sane across packages. Across *many separate* repos on one machine, the shared global store means I'm not re-downloading and re-storing the same `[[Next.js]]`/React trees for every project. The strict `node_modules` is a quiet quality win too: it surfaces undeclared dependencies at install time instead of letting them break in CI or production.

## Alternatives considered

- **npm** — the default; flatter `node_modules` allows phantom deps and is slower/heavier on disk in multi-project setups.
- **yarn (classic/berry)** — fast, but Berry's PnP can complicate tooling; pnpm's model is simpler and equally fast.
- **Bun** — bundler + runtime + package manager, very fast; pnpm chosen for maturity and ecosystem compatibility in production stacks.

## Resources

- 📘 [pnpm docs](https://pnpm.io/motivation)
- 🧩 [Workspaces](https://pnpm.io/workspaces)
- 🔧 [Why pnpm? (store + strictness)](https://pnpm.io/symlinked-node-modules-structure)

---
Template: [[templates/tool]]
