---
title: "Context Mode"
date: 2026-11-20
enableToc: true
openToc: true
tags: ["tool", "ai", "context-engineering", "token-optimization", "mcp", "hooks", "memory", "claude-code", "coding-agents", "source-available"]
type: tool
sources: ["_raw/processed/2026-11-20_mksglucontext-mode Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and   enforces routing across 17 platforms via MCP + hooks.md"]
agent-created: true
summary: "mksglu/context-mode — MCP server plus agent hooks that keep raw tool output in a sandboxed subprocess and a local SQLite FTS5 index, so only results enter context (98% claimed with hooks, ~60% without), and rebuild the working state after compaction; Elastic License 2.0, 17+ agents"
repo: "https://github.com/mksglu/context-mode"
---

# Context Mode

🗒️ [mksglu/context-mode](https://github.com/mksglu/context-mode) is an MCP server plus a set of agent hooks that attacks the context problem from the tool side. Raw tool output (logs, API responses, Playwright snapshots, file dumps) stays in a sandboxed subprocess or a local search index, and only what the agent prints or searches for enters the conversation. The README's headline: over a session 315 KB of raw output becomes 5.4 KB (98%), and a session lasts about 3 hours instead of about 30 minutes.

Its second job is memory: it records what happens in a session in SQLite and rebuilds the working state after the conversation compacts.

## Links

### Description

🧩 The README frames it as four parts:

1. **Context saving** — sandbox tools keep raw data out of the context window.
2. **Session continuity** — every file edit, git operation, task, error and user decision goes into a per-project SQLite database. When the conversation compacts, the events are indexed into FTS5 and only the relevant ones come back through BM25 search, instead of being dumped back into context. Start without `--continue` and the previous session's data is deleted.
3. **Think in code** — the model writes a script that computes the answer and prints only the result, instead of reading the data itself. Their example: counting lines across a folder takes 47 `Read` calls (700 KB) or one `ctx_execute` (3.6 KB).
4. **No prose-style enforcement** — it deliberately does not tell the model to be terse, citing a Moonshot AI finding that aggressive brevity prompts hurt coding benchmarks. That is the opposite bet from [[Caveman]].

**The 11 MCP tools:**

| Tool | What it does | Vendor's example |
|---|---|---|
| `ctx_batch_execute` | Several commands and searches in one call, optional concurrency 1–8 | 986 KB → 62 KB |
| `ctx_execute` | Runs code in 12 languages (JS, TS, Python, Shell, Ruby, Go, Rust, PHP, Perl, R, Elixir, C#); only stdout enters context | 56 KB → 299 B |
| `ctx_execute_file` | Processes a file inside the sandbox; raw content never leaves it | 45 KB → 155 B |
| `ctx_index` | Chunks Markdown into the FTS5 index | 60 KB → 40 B |
| `ctx_search` | Queries the index, several queries per call | on demand |
| `ctx_fetch_and_index` | Fetches a URL, converts it to Markdown, chunks and indexes it; 24 h TTL cache | 60 KB → 40 B |
| `ctx_stats`, `ctx_doctor`, `ctx_upgrade`, `ctx_purge`, `ctx_insight` | Savings report, diagnostics, upgrade, wipe the index, hosted dashboard | — |

Authenticated CLIs (`gh`, `aws`, `gcloud`, `kubectl`, `docker`) work inside the sandbox through credential passthrough. When output exceeds 5 KB and the call carries an `intent`, it indexes the full output and returns only the sections that match the intent.

**How the search index works:**

- Markdown is chunked by headings with code blocks kept whole, stored in SQLite FTS5 (`bun:sqlite`, `node:sqlite` on Node ≥ 22.5, or `better-sqlite3`) and ranked with BM25; headings weigh 5×.
- Two searches run in parallel and are merged with Reciprocal Rank Fusion: Porter stemming ("caching" finds "cached") and trigram substrings ("useEff" finds "useEffect").
- Results where the query terms sit close together rank higher; typos are corrected by Levenshtein distance; snippets are cut around the matches, not from the start of the document.
- Search calls are throttled: calls 1–3 normal, 4–8 fewer results plus a warning, 9 and later blocked and redirected to `ctx_batch_execute`.
- The index lives per project under the user's home folder; content older than 14 days is removed on startup.

**How a session survives compaction:**

- Five hooks do the work: `PreToolUse` routes tool calls into the sandbox, `PostToolUse` captures events, `UserPromptSubmit` captures decisions and corrections, `PreCompact` builds a snapshot, `SessionStart` restores it.
- The snapshot is at most 2 KB and built in priority tiers: active files, tasks, rules and decisions are always kept; intent and MCP call counts go first when space runs out.
- After compaction the model gets a "Session Guide": the last request, tasks with their status, plans, key decisions, files modified, unresolved errors, blockers, git operations, project rules, rejected approaches, external references and more. Detailed events stay searchable through `ctx_search`.
- Coverage differs per agent: full on [[Claude Code]], OpenCode and KiloCode; high on Gemini CLI and the Copilot variants; partial on [[Cursor]] (its validator rejects `sessionStart`), Codex CLI and Kiro; none on Zed and the Antigravity IDE, which have no hooks.

### Download or use

[[Claude Code]], through its plugin marketplace:

```
/plugin marketplace add mksglu/context-mode
/plugin install context-mode@context-mode
```

Restart, then check with `/context-mode:ctx-doctor`. To try only the tools without hooks or routing: `claude mcp add context-mode -- npx -y context-mode`.

Other agents (Gemini CLI, VS Code and JetBrains Copilot, Copilot CLI, Cursor, OpenCode, KiloCode, Codex CLI, Kimi Code, Qwen Code, Antigravity, Kiro, Zed, Pi, Oh My Pi, OpenClaw): `npm install -g context-mode`, then each agent's MCP and hook config from the README. Needs Node.js ≥ 22.5 or Bun; Linux with older Node is unsupported. An optional status line (`context-mode statusline`) shows the savings as you go.

## 🧩 Hooks matter more than the instruction file

| Setup | Claimed saving |
|---|---|
| Hooks route tool calls (Claude Code, Gemini CLI, Copilot, Cursor, Codex CLI, Kiro, Pi…) | **~98%** |
| Only a routing instruction file (Zed, Antigravity IDE) | ~60% |

A hook can block a raw `curl` or Playwright call and send it to the sandbox; an instruction file can only ask. The README puts it bluntly: one unrouted Playwright snapshot can dump 56 KB into context and wipe out a session's savings.

## 📊 Benchmarks (the project's own)

| Scenario | Raw | In context |
|---|---|---|
| [[Playwright MCP]] snapshot | 56.2 KB | 299 B |
| 20 GitHub issues | 58.9 KB | 1.1 KB |
| Access log, 500 requests | 45.1 KB | 155 B |
| Analytics CSV, 500 rows | 85.5 KB | 222 B |
| Git log, 153 commits | 11.6 KB | 107 B |
| Test output, 30 suites | 6.0 KB | 337 B |
| Repo research through a subagent | 986 KB | 62 KB |

These are the vendor's numbers on scenarios the vendor picked; the full set (21 scenarios) is in `BENCHMARK.md`.

## 🔒 Security

- It reads permission rules in Claude Code's format (`.claude/settings.json`, deny and allow) and applies them inside the sandbox too, on every agent. Chained commands (`&&`, `;`, `|`) are split and each part is checked; deny always wins.
- `ctx_execute_file` is confined to the project root; a path outside it needs the same `Read(...)` allow rule the host uses.
- `ctx_execute` and `ctx_batch_execute` still run arbitrary code with the process's file access. The README says so itself: approving them means approving arbitrary code, so keep the host's own sandbox on.
- `ctx_fetch_and_index` allows only `http` and `https`, blocks cloud-metadata and link-local addresses, and allows localhost and private ranges unless `CTX_FETCH_STRICT=1`.
- Tokens, passwords, cookies and API keys in MCP tool arguments are redacted before they are stored in the session database.

## Reasoning for

The LinkedIn list behind [[Token Optimization for Claude Code]] filed Context Mode under "context sandboxing". The README shows more: a sandbox, a search index and session memory in one plugin. Where it would pay off for me is MCP-heavy work (browser snapshots, GitHub, logs) and long Claude Code sessions that compact. The "think in code" rule is a habit worth keeping even without the tool: ask the agent for a script that prints the answer, not for the files.

How it differs from the neighbours: [[Headroom]] compresses what reaches the model, [[billion-context]] lets the model fold its own conversation, Context Mode keeps the raw data from reaching the model at all.

Caveats before I install it:

- **Licence:** Elastic License 2.0, source-available, not open source. You may use, fork, modify and redistribute it, but not offer it as a hosted service or remove the licence notices. GitHub shows the licence as NOASSERTION.
- **The privacy claim has an exception.** The README says nothing leaves your machine (no telemetry, no cloud sync) and that Context Mode is not a cloud analytics dashboard. Yet `ctx_insight` opens a hosted "Insight" dashboard at context-mode.com with organisation analytics for engineering teams, and the README does not say what data that dashboard receives. I would check before running it.
- **It hooks every tool call.** Its `PreToolUse` and `SessionStart` hooks intercept Bash, Read and WebFetch and inject routing text, so I would test it next to any other hooks in the harness before adopting it.
- Checked 2026-11-20: v2.2.1 released 2026-11-17, last push 2026-11-20, about 34k stars.

## Alternatives considered

- [[Headroom]] — a proxy that compresses tool outputs, logs and history before they reach the model
- [[billion-context]] — the model folds and restores old conversation ranges itself
- [[Caveman]] — shrinks the output side instead
- [[Trail-code]] — avoids reading code at all through a prebuilt repo graph
- Claude Code's built-in `/compact` — lossy and keeps no searchable record

## Resources

- 🔗 Repo: https://github.com/mksglu/context-mode
- 🔗 Homepage: https://contextmode.ai
- 🔗 Benchmarks: https://github.com/mksglu/context-mode/blob/main/BENCHMARK.md
- 🔗 Platform support: https://github.com/mksglu/context-mode/blob/main/docs/platform-support.md
- 🔗 Demo video: https://www.youtube.com/watch?v=QUHrntlfPo4
- 📖 Related: [[Token Optimization for Claude Code]], [[Context Engineering]], [[Harness Engineering]], [[Extending Claude Code — Tools for Its Blind Spots]], [[AI Tools Map]]

---
Template: [[templates/tool]]
