---
title: "AVP"
date: 2026-11-25
enableToc: true
openToc: true
tags: ["tool", "version-control", "git", "coding-agents", "multi-agent", "mcp", "rust", "self-hosted", "source-available"]
type: tool
sources: ["_raw/processed/2026-11-25_2026-11-25-research-version-control-for-ai-agents.md"]
agent-created: true
summary: "Mossab28/avp (Murmell) — tasks instead of branches, each landing proven on the exact head, conflicts returned to the agent, one-way Git mirror, MCP for 13 agents; pilot beside Git for tens of agents, one known user"
repo: "https://github.com/Mossab28/avp"
---

# AVP

🗒️ [Mossab28/avp](https://github.com/Mossab28/avp) by Murmell is a server, CLI and MCP server in Rust that replaces branches and pull requests with **tasks on one line**. In [[Version Control for Parallel AI Coding Agents]] it came closest to what I was looking for: version control that agents operate through MCP while the server does the synchronisation.

## Links

### Description

🧩 How a change lands:

1. The agent opens a task (`avp_open`) and gets a folder at the head of the line.
2. It writes and calls `avp_land`.
3. A **proof** (type check plus tests related to the touched files, set in `avp.toml`) runs on the exact head. Only green lands, as the next numbered position.
4. If the line moved, AVP **replays the task's writes** on the new head by a 3-way merge, and proves again when what landed touches what the proof covered.
5. A real conflict comes back as "not landed: conflict" with ours, original and theirs markers in the agent's folder.
6. The **full suite runs after landings**, once per batch; a position that breaks it twice is found and reverted.
7. Every position is mirrored to [[Git]] as an ordinary commit (branch `avp/line` by default).

Also: `avp claim`, `avp wait`, `avp why` (blame with reasons), `avp undo`, proof workers on your own runners, approvals on guarded paths. `avp up` wires 13 agents, including [[Claude Code]], Codex, [[Cursor]] and Gemini CLI.

### Download or use

- Release binaries for macOS and Linux; Windows only inside WSL. Version on 2026-11-24: v0.7.12 (2026-11-19).
- Licence: **Elastic License 2.0** (source-available; releases up to 0.5.0 were AGPL-3.0). Free to self-host; you can't sell it as a hosted service.
- AVP Cloud (read 2026-11-24): free for up to 3 people, Team \$10 per person a month.

## Reasoning for

Verdict: **pilot at 5–30 agents, beside Git; wait at hundreds.** Not yet tried by me.

- **How I'd pilot it:** mirror to `avp/line` first, keep the full CI on main, compare its verdicts with mine for days, guard `avp.toml`, put a person on risky paths.
- **Evidence, all the maker's own:** 14 replays without conflict in Murmell's first 31 landings (about six hours, one repository). A benchmark with 32 agents finished 56, 52 and 56 of 56 sections through AVP, against 56, 53 and 56 through Git plus CI and 34 and 32 through GitHub's merge queue with default settings. With 64 agents the result depends on the model.

⚠️ Caveats:

- **One known production user**, Murmell itself (two people and many agents). 14 stars, one contributor, no issue history, public history reset once.
- **Landing is serialised on one server** over SQLite. Nothing above 64 agents is shown, so landings per hour are bounded by proof time.
- **A proof is not the full suite:** red changes can land and are caught later. An agent can also make a weak proof green by writing its own tests, or settle a conflict by dropping a teammate's side.
- **No independent report exists.**

## Alternatives considered

- **Worktrees plus a merge queue**: the default; no new server.
- **[[gitai]]**: a Scion-style server with higher synthetic throughput, but without tests before clean landings.
- **Veil**: similar shape without any Git interop.

## Resources

- 🔗 [Repository](https://github.com/Mossab28/avp) · [AVP Cloud](https://cloud.murmell.com)
- 📖 [[Version Control for Parallel AI Coding Agents]]: the comparison this note comes from

---
Template: [[templates/tool]]
