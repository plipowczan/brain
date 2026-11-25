---
title: "Mergiraf"
date: 2026-11-25
enableToc: true
openToc: true
tags: ["tool", "git", "merge", "conflict", "version-control", "coding-agents", "tree-sitter", "rust", "open-source", "gpl-3.0"]
type: tool
sources: ["_raw/processed/2026-11-25_2026-11-25-research-version-control-for-ai-agents.md"]
agent-created: true
summary: "Mergiraf — syntax-aware Git merge driver (GPLv3, Codeberg): tries the line merge first, then merges syntax trees; the conservative choice for fewer textual conflicts, with a measured risk of silent wrong merges"
homepage: "https://mergiraf.org/"
---

# Mergiraf

🗒️ [Mergiraf](https://mergiraf.org/) ([codeberg.org/mergiraf/mergiraf](https://codeberg.org/mergiraf/mergiraf)) is a Git merge driver in Rust. It parses files with tree-sitter and replaces the content-merge step when [[Git]] merges, rebases or cherry-picks. Agents use it without knowing it is there.

## Links

### Description

🧩 How it works:

- **Line merge first.** A clean line merge is kept (except when it would create duplicate keys), so it only steps in where Git would conflict.
- **Then the syntax trees.** It matches nodes across base, left and right, merges them, and unites insertions only where a language profile says order doesn't matter ("commutative parents").
- **Otherwise conflict markers**, aligned to lines, plus `mergiraf review <id>` to inspect what it solved.
- **No model calls, no stored data.** The result is a normal Git commit, so removing the driver loses nothing.

### Download or use

- Linux, macOS and native Windows binaries; Homebrew, crates.io and others. Git 2.44 or newer recommended.
- Set it as a merge driver in `.gitattributes`. Built into [[Jujutsu]] as a merge tool, but there it runs only on `jj resolve`.
- Version on 2026-11-24: v0.20.0 (2026-09-26), two years of steady releases by two main volunteers. GPLv3, which doesn't affect your code when Git calls it as a separate program.

## Reasoning for

Verdict from [[Version Control for Parallel AI Coding Agents]]: **pilot at 5–30 agents, pilot as a component at hundreds.** Not yet tried by me. It is the cheapest and most reversible experiment in that research: one binary, one config line, off again in a minute.

- **Good case:** many agents adding separate functions, methods, imports or keys to the same files, with a test suite that runs on the merged tree.
- **How I'd pilot it:** in the agents' container image, only for languages I test well, every automatic resolution logged for a sample review, conflict rate measured before and after.

⚠️ Caveats:

- **Silent wrong merges are the failure that costs code.** An independent study of Mergiraf 0.12.1 on 21,615 human merges found more real conflicts let through: 377 extra on Python and 432 on Rust compared with the plain line merge (a conflict-free result that differs from the human merge and fails to build or to pass tests). Open issues on 0.19 and 0.20 include an edit applied to the wrong property with exit 0 (829).
- **Never without tests on the merged tree.** Semantic conflicts are outside the method.
- **No measurements on agent merges**, and no machine-readable output or MCP.
- Users disagree: one reports about 70% of conflicts solved in four months and none contested, another uninstalled it over odd problems (both Hacker News, 2025-11-13).

## Alternatives considered

- **[[Weave]]**: the same slot, built for agents (JSON, MCP, structured refusals), younger and with a longer list of corruption bugs.
- **`git rerere`**: replays a resolution you already made; no guessing.
- **Not conflicting**: one file per changelog entry, registration or test beats any driver.

## Resources

- 🔗 [Site](https://mergiraf.org/) · [Repository on Codeberg](https://codeberg.org/mergiraf/mergiraf)
- 📖 [[Version Control for Parallel AI Coding Agents]]: the comparison this note comes from
- [[How to deal with pull request merge conflicts]]: resolving by hand

---
Template: [[templates/tool]]
