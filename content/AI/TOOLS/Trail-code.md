---
title: "Trail-code"
date: 2026-09-10
enableToc: true
openToc: true
tags: ["tool", "ai", "coding-agents", "claude-code", "code-intelligence", "knowledge-graph", "tree-sitter", "context-engineering", "token-optimization", "open-source"]
type: tool
source: "_raw/processed/2026-09-10_trailhq-graft.md"
agent-created: true
agent-reviewed: 2026-11-13
aliases: ["Graft"]
summary: "Trail-code, formerly Graft (renamed Oct 2026; trailhq/Trail-Code, npm @trailhq/trail-code, CLI trail; graft still works) — builds a markdown code graph of your repo (tree-sitter + optional LLM pass) so coding agents skip rediscovery, now plus git-shared team 'learnings'. Claims −42% uncached input tokens, −60% time, 66% vs 54% on SWE-bench Verified."
status-checked: 2026-11-13
project-status: active
---
# Trail-code

> [!success] Status check 2026-11-13 — active
> **Verdict:** Commits on main through 2026-11-09 (Bash and GLSL indexing, 28 languages counted in the README commit). npm releases 0.27.0-0.29.0 between 2026-10-27 and 2026-11-06.
> **Last release:** npm @trailhq/trail-code 0.29.0 (2026-11-06); no GitHub Releases, and the newest git tag… · **last commit:** 2026-11-09 · **licence:** MIT (LICENSE: Context Graph Engine contributors).
> **Repo:** https://github.com/trailhq/Trail-Code — **moved/renamed:** yes: Graft was renamed and expanded into Trail-code. The repo moved from trailhq/Graft to trailhq/Trail-Code (the old URL redirects), and the npm package from @nanonets/graft to @trailhq/trail-code (first published 2026-10-14…
> **Successor / fallback:** Official successor: Trail-code (@trailhq/trail-code, `trail init`), the same product renamed. Existing graft setups migrate automatically the first time [[Claude Code]] opens the repo once `trail` is installed, or right away with `trail init`. `graft upgrade` adds the `trail` command.
> **Changed since this note:** Note written at @nanonets/graft 0.18.0 (2026-09-10). Since then: (1) Rename to Trail-code, about 2026-10-14, with new repo, package, CLI and MCP tool names; graft aliases are kept.

Every coding-agent task starts blind: grep a term, open a file, follow an import, back out, try again. Its bet, from the days it was still called Graft, is that this rediscovery is pure, repeated, discarded overhead — so it builds the understanding **once** and writes it into the repo as a folder of linked markdown files, one node per system, API, or concept. The agent reads those files the way it reads any other file.

## 🔁 Graft is now Trail-code

This note was titled Graft until 2026-11-13. The project was renamed around 2026-10-14 (the date `@trailhq/trail-code` was first published to npm; I did not find an exact announcement date). The code map lives on as **"the graft map"**, one of Trail-code's two parts; the second part, **learnings**, is new (see below).

| | When I wrote this note (0.18.0, 2026-09-10) | Now (2026-11-13) |
|---|---|---|
| Name | Graft | Trail-code (by Trail, trailhq.com) |
| Repo | `trailhq/Graft` | [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) — the old URL and the old dev repo `NanoNets/context-graph-engine` both redirect there |
| npm | `@nanonets/graft` | `@trailhq/trail-code`, 0.29.0 (2026-11-06); `@nanonets/graft` is still published in lockstep at the same version and runs the same code |
| CLI | `graft` | `trail` (`graft` still works) |
| MCP tools | `graft_*` | `trail_*` (the server still answers the old `graft_*` names) |
| Settings | `GRAFT_*` env vars | unchanged, still `GRAFT_*` |

Migration: `graft upgrade` adds the `trail` command; repos that graft set up move to trail the first time Claude Code opens them once `trail` is installed, or right away with `trail init`. There are no GitHub Releases, and the newest git tag (v0.21.1, 2026-09-29) lags npm, so npm is the place to check versions. Licence is still MIT. Below, the original `graft …` commands still work; each is also `trail …` with the same arguments.

This vault's own harness still runs the pre-rename package: the global `graft` CLI on my machine is `@nanonets/graft` 0.21.1, and the `graft` MCP server is registered as `npx -y @nanonets/graft mcp`. Same project, just before the rename.

![[5b85e1d4dfd9d1113f21d8bd6776e332_MD5.png]]

> [!note] All numbers below are vendor-reported (project README). The SWE-bench arm at least uses the official `swebench` 4.1.0 grader and official Verified images, which is a stronger claim than a self-judged sweep — but it is 50 instances, not the full 500, and both arms were run by the vendor.

## Links
### 🗒️ Description
Two artifacts, two cost profiles — this is the part worth internalizing:

1. **The structural graph** — `graft build` runs pure tree-sitter. Every function, class, and call edge lands in `graft/.graph/wiring.json` plus a per-file wiring card mirroring the source tree. **No model, no API key, no network.** `graft ask`, `grep`, `callers`, `skeleton`, `map`, `blast` and `check` all read this and never call an LLM.
2. **The concept graph** — `graft build --deep` adds the LLM layer, in two passes: summarize each file, then group those summaries into a curated set of nodes (subsystems, key files, concepts) with typed links. Graft picks the level of detail rather than emitting one node per file, so a big repo becomes a few dozen readable nodes. Your provider, your key, your model.

`graft/` is git-ignored on purpose — a regenerable local cache like `node_modules`, not a committed artifact. What you commit is the small wiring `init` drops into `.claude/` and friends — since the rename that is `.claude`, `.mcp.json`, `.trail`, `.gitignore` and `.ignore` — and each teammate builds their own map.

**What's in a node.** Most code maps stop at an address — this thing lives in that file, on that line — which tells an agent where to look, not what it will find, so it still has to open the source. A Graft node carries the meaning inline: a plain-English **summary**, the **crux** (the handful of lines that actually carry the logic — the guard, the skip condition, the state change), the **sources** each tracked by content hash, typed **links** as `[[wikilinks]]` (`depends_on`, `part_of`, `uses`, `implements`, `produces`), and a **notes** section below the generated block that survives regeneration. Three depths in one file: what, how, and where to go for the rest.

The crux is stored as the code text, not a line range — deliberately. Line numbers drift when unrelated code above them shifts; the lines that matter do not.

### 🧩 Features
- **Freshness without an index to babysit.** Every query stats the tree against the last build's fingerprint and rebuilds only what moved, so answers describe the working tree *right now* — uncommitted, unstaged and staged edits all look the same to Graft. When I wrote this the README said ~3 ms; it now says "a few tens of milliseconds when nothing moved". The refresh is structural and `$0`; it never calls the LLM. Disable per-command with `--no-refresh` or globally with `GRAFT_NO_REFRESH=1`.
- **28 languages, three tiers** (up from 23; the README says 24 in one place and 28 in its language section, so treat the count loosely). Full-fidelity hand-written extractors with scope-aware cross-file call/import resolution (TS/JS incl. JSX/TSX, Python, Go, Java, Kotlin, PHP, Swift, R); broad generic tree-sitter extraction (Rust, C, C++, C#, Ruby, Scala, Elixir, Solidity, Dart, Clojure, Nix, Lua, Gleam, Julia, PowerShell; OCaml, Zig and GLSL symbols only; Bash function symbols only); Vue, Svelte and Astro single-file components through the TypeScript extractor; and opt-in **compiler-grade** edges via `graft build --lsp` when rust-analyzer / clangd / gopls / pyright / typescript-language-server is on `PATH`.
- **Content-hash caching everywhere** — LLM passes and tree-sitter parse alike. On the Graft repo itself (124 files): 0.74 s cold, 0.18 s after one edited file. That cheapness is what makes the per-query refresh affordable.
- **Six MCP tools** — `graft_find_code` (question → ranked nodes with file:line and source inlined), `graft_file_api` (every signature in a file, no bodies, ~1/10th the tokens), `graft_trace_calls` (blast radius, N levels, either direction), `graft_find_all` (regex, grouped by enclosing symbol, ranked by coupling), `graft_repo_map`, `graft_check_freshness`. Since the rename they are `trail_find_code`, `trail_file_api` and so on; the server still answers the `graft_*` names.
- **`graft blast`** — blast radius of a *diff*: what depends on the lines a change touched. `--base origin/main --format markdown` produces a PR comment, `--name` labels the areas with one cached LLM call, and git history names who to tag. This is the feature I have not seen elsewhere in this lane.
- **Deep Claude Code wiring** — `init` writes its own skill file (`.claude/skills/graft/SKILL.md` at note time, `.claude/skills/trail/SKILL.md` now; it never touches your `CLAUDE.md`), a live statusline showing graph size, learnings count and `⚠ N stale`, hooks that add the matching files and functions to each prompt plus post-edit blast-radius warnings and `$0` re-sync, and the MCP server into the project's `.mcp.json`. It merges into `.claude/settings.json` rather than clobbering it, and leaves a non-Trail `statusLine` alone. Since the rename it also writes **user-level** Claude Code files: hooks in `~/.claude/settings.json`, a shim in `~/.claude/helpers/graft-hooks.cjs`, and the MCP server in `~/.claude.json`.
- **Eleven agents from one command** (nine at note time) — `agents` (the shared `AGENTS.md` that Codex/OpenCode read), `cursor`, `gemini`, `grok`, `copilot`, `kiro`, `windsurf`, `adal`, `claude`, plus `hermes` and `antigravity`. Marker-fenced sections in shared files, wholly-owned files where the agent uses one. Careful: selection **replaces** the previous set — `init --agents claude` removes Trail-code's wiring for every other agent, user-level files included, unless you add `--no-global`.
- **Monorepo / submodule / multi-repo aware** — per-scope ranking then fusion, so the biggest sub-project cannot drown a small one; `--follow-submodules` and `--follow-nested-repos` (independent flags, persisted in `.graft/config.json`) for gitlinked and non-gitlinked nested clones; a folder of separate repos auto-splits with a federating `graft/workspace.json`.
- **`graft viz`** — prebuilt interactive viewer, no dev server. Context tab (architecture graph), Code tab (per-symbol wiring), Outline tab (file→class→method tree). Select a node and edges take direction: amber = depends on, teal = depended on by, verb written on the edge; tree-sitter edges solid, LLM-inferred dashed. `--export site/` writes one self-contained `index.html` for CI or Pages.
- **`graft uninstall`** — a real inverse of `init`, including the out-of-repo writes. Rarer than it should be.

### 🧩 New since the rename: learnings
- **Learnings** — when a session works something out, or you correct how something is done, the agent saves it as a short markdown file (what was decided, what was ruled out, what to watch out for, which files it `touches`). Repo learnings live in `.trail/learnings/` and are committed and reviewed like code; personal ones stay in `~/.trail`. Learnings on a teammate's pushed but unmerged branch show up too. The README says the agent saves one only when you ask, never on its own.
- **Look-back on day one** — `trail init` reads your own messages from the repo's past Claude Code transcripts (through your own Claude Code login, counting toward your Claude usage) and, if `gh` is signed in, the review comments on the last 50 merged PRs, and seeds learnings from what came up more than once. Secrets are scrubbed, per the README.
- **`trail check`** — before a PR, compares the change with recorded learnings and flags one that undoes a teammate's decision, quoting who decided it and why. Overlap warnings fire when your edit touches code a teammate's open branch also changes. `trail team` shows a 7-day digest; `trail note` saves a learning by hand.
- **Trail workspace (coming soon)** — an optional hosted team view with a team page across repos. Nothing goes to Trail until you connect one; once connected, the committed learnings from the repos you add go to Trail's cloud. No pricing published as of 2026-11-13.

![[6f951e1454679d292cd548c35d8ad2b2_MD5.gif]]

### 📊 The benchmarks
Two harnesses making two different claims. The rename did not change them; the Trail-code README now labels the token row "uncached input tokens".

**Controlled sweep** — 162 runs, two repos, 3 trials, Claude Sonnet 5 with identical file tools, Opus 4.8 judge with a required-keyword floor, cache-aware costing:

| Metric (mean/task) | Cold Claude Code | With Graft |
|---|---|---|
| Cost | \$0.0429 | **\$0.0292 (−32%)** |
| Tokens | 8,070 | **4,650 (−42%)** |
| Tool calls | 4.2 | **2.3 (−46%)** |
| Latency | 39.8 s | **15.8 s (−60%)** |
| Correctness | 93% | 93% (equal) |

**SWE-bench Verified**, 50 instances, Claude Sonnet 5 both arms, official grader:

| | Cold | With Graft |
|---|---|---|
| Resolved | 27 / 50 (54%) | **33 / 50 (66%)** |
| Tokens | 142.0 M | **109.4 M (−23%)** |
| Wall-clock | 13,094 s | **8,922 s (−32%)** |

The correctness wins have a consistent shape: the baseline patches one file and misses its siblings. On `django-11532` it patched 1 of the 5 files the fix needs and broke 18 passing tests; on `django-16263`, 1 of 4. That is exactly the failure mode a call/dependency graph should fix, which makes the result more believable than the headline percentage alone.

**Push vs pull is the interesting finding.** Injecting a `graft ask --source` bundle up front (push) buys the speed. Exposing `graft_find_code` / `graft_file_api` as tools and paying for context only when the agent asks (pull) gave up most of the speed but pushed correctness to 98%, +5 points over cold — the strongest single result in their sweep. Push when speed is what you need; pull when being right matters more.

Separately they ran 15 tasks each on popular OSS repos — 10 developer questions plus 5 real merged PRs re-implemented from base commit and scored against the files the maintainers actually touched. On PocketBase (Go, ~350 files): cost \$13.91 → \$11.02 (−21%), wall-clock −14%, and 5/5 PRs reproduced touching the same files. The gap was widest on cross-file synthesis — "how does auth work across OAuth2 providers" fell from \$2.19 to \$0.84.

### Download or use
```
npm install -g @trailhq/trail-code   # once (was: npm install -g @nanonets/graft)
trail init                           # pick agents, build the graft map, set up .trail/, wire it in
```

Trail-code needs Node 22.3+ (20.16 also works, per the README). `trail init --dry-run` shows the agent wiring it would write; `trail init --agents claude` skips the prompt, but see the warning above: it also removes wiring for every agent you don't list. With no TTY (CI, Dockerfile, piped shell) it writes **nothing** and prints the command to run instead — pass `--agents` or `--yes` to make a scripted run explicit. On a repo whose team hasn't set it up, `init` asks who it's for: "My team" (commit the setup once) or "Just me" (`--just-me`: kept out of git via `.git/info/exclude`, learnings in `~/.trail`). For an MCP-only setup: `npx -y @trailhq/trail-code mcp`.

⚠️ **Read this before running `init`:** it writes **user-level** files that apply to *every* repo you open with that agent, not just this one. At note time that was only Codex (when `~/.codex/` exists: `config.toml`, `hooks/graft/graft-hooks.cjs`, `hooks.json`). Now it is also Claude Code (`~/.claude/settings.json` hooks, `~/.claude/helpers/graft-hooks.cjs`, the MCP server in `~/.claude.json`), Pi (`~/.pi/…`) and Antigravity (`~/.gemini/…`). The picker labels them `machine-wide`, `--dry-run` lists them separately, and `--no-global` skips them all.

Telemetry: one batched usage ping with buckets and fixed labels only (never code, paths, repo names, symbols, queries, learnings or error messages), plus a daily npm version check. `trail telemetry debug` prints exactly what would be sent. `trail telemetry disable` or the checkbox in `init` stops the ping; `DO_NOT_TRACK=1` stops both the ping and the version check. Off in CI and in builds from source.

## Reasoning for
This is the strongest entry yet in the lane [[Structural Retrieval for Code]] maps out, and it differs from its neighbours on one axis that matters to me: **the graph is markdown files the agent just reads**. No database, no daemon, no embedding index, no server. [[Codebase Memory MCP]] answers in <1 ms from a SQLite graph; [[Serena]] and [[MCP Language Server]] hold a live language server; Graft's artifact is inert text with `[[wikilinks]]` — the same shape as this [[Brain]] vault's own progressive-disclosure indexes. If the MCP layer breaks, `cat graft/whatever.md` still works. That degradation path is worth a lot.

Concretely useful to me:
- **[[Qamera AI]] and [[Brain]]'s own harness** — the repos where [[Claude Code]] sessions burn the most context re-grepping the same modules. The `$0` tree-sitter tier means I can try `graft build` + `graft ask` before committing to any LLM spend at all.
- **`graft blast --base origin/main`** — a PR comment naming the areas a change can reach, plus who to tag from git history. That is a review-workflow feature, not a retrieval feature, and none of the alternatives here have it.
- **The pull-over-push result** — a transferable lesson beyond this tool: front-loading context is a speed optimization that can *cost* correctness versus letting the agent pull what it decides it needs. Files under [[Context Engineering]] and [[Progressive Disclosure]].

Caveats before I trust it in a real workflow. Every number is vendor-run; the SWE-bench arm is 50 of 500 instances. The crux — the feature that most distinguishes a Graft node from an address-only code map — **ships per-symbol in the code graph but is still not inlined into the markdown nodes** (the Trail-code README on 2026-11-13 still says "inlining it into markdown nodes is next"), so the README describes a node richer than the one currently written. And `init` writes to agent config files, hooks, and machine-wide paths (now for Claude Code too, not only Codex): run `--dry-run` first, same audit discipline I applied to [[Codebase Memory MCP]].

The learnings layer adds its own caveats. The day-one look-back sends my past transcripts and PR review comments through my Claude account and spends Claude usage. Committed learnings are readable by anyone with repo access, so internal decisions travel with the code, and connecting a Trail workspace uploads them to Trail's cloud. The rename also means docs and tools mix `graft` and `trail` names for now (env vars are still `GRAFT_*`, hook shims are still `graft-hooks.cjs`).

## Alternatives considered
- [[Codebase Memory MCP]] — closest functional sibling: persistent code knowledge graph over MCP, tree-sitter + hybrid LSP, single C binary, <1 ms queries. Binary+SQLite artifact vs Graft's readable markdown; no `blast`-style diff radius, but broader language coverage (158) and semantic search.
- [[Serena]] · [[MCP Language Server]] — the LSP lane: live language-server symbol resolution, ground-truth accurate, no persisted artifact and no concept-level summaries. Graft's opt-in `--lsp` tier borrows from this lane rather than competing with it.
- [[Graphify]] — Claude Code skill producing a clustered knowledge graph from code/docs/images. Graph-as-skill vs Graft's graph-as-files-plus-MCP.
- [[Understand Anything]] — Tree-sitter+LLM multi-agent pipeline building an explorable knowledge graph; aimed at human onboarding and exploration more than at cutting an agent's token bill.
- [[RepoGraph]] — the published research version of this idea (ICLR 2025): tree-sitter def/ref graph retrieved via k-hop ego-graphs, +32.8% across four SWE agents. Graft is roughly this plus an LLM summarization layer plus agent wiring.
- [[GrepRAG]] — the opposing bet: no index at all, let the LLM generate ~10 ripgrep commands and re-rank. Index-free and ~1/35th the latency. Graft's own `graft grep` is a concession to the same insight — exhaustive regex for the tasks where a ranked top-N is not enough.
- Plain grep/read — the cold baseline both benchmark arms measure against.

## 📖 Further reading
- [trailhq/Trail-Code](https://github.com/trailhq/Trail-Code) (formerly trailhq/Graft) — README, [Coming from graft](https://github.com/trailhq/Trail-Code#coming-from-graft), [TELEMETRY.md](https://github.com/trailhq/Trail-Code/blob/main/TELEMETRY.md), [.env.example](https://github.com/trailhq/Trail-Code/blob/main/.env.example), [CREDITS.md](https://github.com/trailhq/Trail-Code/blob/main/CREDITS.md)
- npm: [@trailhq/trail-code](https://www.npmjs.com/package/@trailhq/trail-code) · [@nanonets/graft](https://www.npmjs.com/package/@nanonets/graft) · site: https://trailhq.com/trail-code
- [[Structural Retrieval for Code]] — where this sits among the LSP / SCIP / repo-map / grep lanes, and when each wins
- [[Token Optimization for Claude Code]] — the same goal from the cost side; Graft belongs in that roster
- [[Context Engineering]] · [[Progressive Disclosure]] — the push-vs-pull result generalizes past code retrieval

---
Template: [[templates/tool]]
