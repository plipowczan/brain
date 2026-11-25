---
title: "gitai"
date: 2026-11-25
enableToc: true
openToc: true
tags: ["tool", "version-control", "git", "coding-agents", "multi-agent", "self-hosted", "cli", "open-source", "mit"]
type: tool
sources: ["_raw/processed/2026-11-25_2026-11-25-research-version-control-for-ai-agents.md"]
agent-created: true
summary: "feder-cr/git-ai — self-hosted Scion-style Git server (Gitaly fork): server-side rebase and compare-and-swap landing for agents, post-merge tests with bisect and revert; disposable-repository pilot only, one maintainer"
repo: "https://github.com/feder-cr/git-ai"
---

# gitai

🗒️ [feder-cr/git-ai](https://github.com/feder-cr/git-ai) is a self-hosted Git server for agents, written in Go as a fork of GitLab's Gitaly. It takes ideas from Anthropic's Scion article: **the server rebases and lands, the agent only asks**. Its README calls it an open-source version of that design; its own LIMITATIONS.md says it is "Not a Scion implementation".

Not `git-ai-project/git-ai` (usegitai.com, AI-code attribution).

## Links

### Description

🧩 How it works:

- **Landing.** The agent writes a commit to a temporary branch and calls `graft land`. The server fast-forwards, rebases or merges onto the tip and moves the ref by compare-and-swap. A batch of up to 50 requests is stacked on the tip and published with one swap; one conflicting member fails alone.
- **Retries are safe.** A land that already happened answers `already_landed`.
- **Conflicts.** By default the land fails and the agent fixes it. An optional resolver can propose a merge; a model's answer lands by itself only if `verify.command` passes on the exact merged tree.
- **Tests after the merge.** `graft-verify` runs one command on the tip, bisects and reverts, and moves `refs/graft/green/<branch>` on success.
- **Git objects underneath.** Repositories are normal bare Git repositories, so leaving is cheap. Agents use the `graft` CLI or the Go SDK instead of `git`.

### Download or use

- Server on Linux and macOS; the CLI also runs on Windows. v0.4.2 (2026-11-05), pre-1.0.
- Own code MIT; a question about the bundled Git's GPL-2.0 notice is still open.
- No MCP server, pull requests or CI integration.

## Reasoning for

Verdict from [[Version Control for Parallel AI Coding Agents]]: **skip for a real repository, pilot in a disposable one; wait at hundreds.** It is the most complete public landing path in the Scion style, which is why I keep a note on it.

- **Throughput (self-reported, synthetic, one machine):** 794–1,944 landings a minute with 50–100 agents, far above what several hundred agents need.
- **When a pilot makes sense:** you have measured agents losing pushes to one branch at the upper end of 5–30.

⚠️ Caveats:

- **Clean rebases are tested only after they land**; review doesn't gate landing.
- **One maintainer, main branch quiet since 2026-11-05**, outside pull requests unmerged, no named production user.
- **Untested:** S3, GCS and Azure buckets, nodes on separate machines. v0.4.1 and v0.4.2 fixed bugs where a push rejected to the client could still be recorded.
- `verify.command` runs model-written code as the server user; the docs state the prompt-injection path.
- No hands-on user report found.

## Alternatives considered

- **[[AVP]]**: tests before landing and an MCP server, but lower scale and a source-available licence.
- **bnsd55/openscion**: easier to run, alpha, path-level conflicts (worse than Git's text merge), no Git export.
- **CarterT27/scion**: the most thorough specification, no active maintainer, no Git exit.
- **A merge queue on [[Git]]**: removes the same push races without new agent commands.

## Resources

- 🔗 [Repository](https://github.com/feder-cr/git-ai) · [Wavect's source review](https://wavect.io/blog/git-ai-concurrent-agents-merge-verification/) (nothing executed)
- 📖 [[Version Control for Parallel AI Coding Agents]]: the comparison this note comes from
- [[Two-Slice Teams — Git and Code Review After Agents (Przeprogramowani)]]: where Scion first entered this vault

---
Template: [[templates/tool]]
