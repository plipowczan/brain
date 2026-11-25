---
title: "Weave"
date: 2026-11-25
enableToc: true
openToc: true
tags: ["tool", "git", "merge", "conflict", "version-control", "coding-agents", "mcp", "tree-sitter", "rust", "open-source"]
type: tool
sources: ["_raw/processed/2026-11-25_2026-11-25-research-version-control-for-ai-agents.md"]
agent-created: true
summary: "Ataraxy-Labs/weave — entity-level Git merge driver built for agents (JSON, MCP, structured refusals); its own replay removed 32.7% of conflicts, not the advertised 95%"
repo: "https://github.com/Ataraxy-Labs/weave"
---

# Weave

🗒️ [Ataraxy-Labs/weave](https://github.com/Ataraxy-Labs/weave) is a Git merge driver in Rust that merges by **entity** (function, class, key) instead of by line. It splits each version of a file into entities with tree-sitter, matches them by name, type and scope, takes one-sided changes, merges inside an entity when both sides changed it, and otherwise refuses with a reason.

Not Weights & Biases Weave (LLM tracing) and not Weaveworks Weave (networking).

## Links

### Description

🧩 Features:

- **Structured refusals.** A conflict marker names the entity, its type, a confidence and a `refused_by:` line; `weave explain --json` gives per-hunk detail.
- **`weave check`** verifies an agent's own resolution: lost lines, duplicates, dangling names, wrong argument counts.
- **Agent interface.** CLI with `--json` and defined exit codes, a SKILL.md with a resolve loop, an MCP server with six tools (preview, edit, explain, check, land, patch), and an experimental claim layer.
- **Sibling `sem`:** entity-level diff, blame and impact for agents; it doesn't merge.

### Download or use

- Homebrew, npm and GitHub binaries for Linux, macOS and native Windows
- Version on 2026-11-24: v0.7.1 (2026-11-02), created in February 2026, 1,365 stars, nearly all commits by the two founders
- Licence MIT or Apache-2.0. The company also sells `land` (useland.dev), a hosted merge-and-test service on Weave, which I haven't assessed.

## Reasoning for

Verdict from [[Version Control for Parallel AI Coding Agents]]: **pilot at 5–30 agents, pilot as a component at hundreds.** Not yet tried by me. Choose it over [[Mergiraf]] when the agent should get a machine-readable reason for every refused merge.

⚠️ Caveats:

- **"~95% fewer conflicts" has no published method.** Its own replay of real human merges (five repositories, 4,971 file merges): 1,052 conflicts with Git's line merge, 344 of them resolved, 708 left. That is 32.7%, from 14% on TypeScript to 47% on Flask. The page also counts 86 regressions and defines them inconsistently.
- **Silent corruption has happened:** truncated import, dropped assignment, dropped import, dropped top-level code, the same function added twice with exit 0. All reported issues closed. One user noticed code disappearing after weeks and stopped (Hacker News, 2026-06-14).
- **Behaviour changes fast** (0.5.3 changed verdicts on purpose); pin the version and put one version in one place.
- **No figure for agent merges**, and semantic conflicts are outside the method. Run the tests on the merged tree.
- `weave land` retries on the client; it is not a queue.

## Alternatives considered

- **[[Mergiraf]]**: older, more conservative, plain-text output, GPLv3.
- **A server that merges on landing** ([[AVP]], [[gitai]]): the same merge step in one place, but a new system to run.

## Resources

- 🔗 [Repository](https://github.com/Ataraxy-Labs/weave) · [Benchmark page](https://ataraxy-labs.github.io/weave/)
- 📖 [[Version Control for Parallel AI Coding Agents]]: the comparison this note comes from
- [[How to deal with pull request merge conflicts]]: resolving by hand

---
Template: [[templates/tool]]
