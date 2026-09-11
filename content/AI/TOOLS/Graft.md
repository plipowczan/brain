---
title: "Graft"
date: 2026-09-10
enableToc: true
openToc: true
tags: ["tool", "ai", "coding-agents", "claude-code", "code-intelligence", "knowledge-graph", "tree-sitter", "context-engineering", "token-optimization", "open-source"]
type: tool
source: "_raw/processed/2026-09-10_trailhq-graft.md"
agent-created: true
summary: "trailhq/Graft — builds a markdown node graph of your repo once (tree-sitter + optional LLM pass) so coding agents skip rediscovery. Claims −42% tokens, −60% latency, and 66% vs 54% on SWE-bench Verified."
---
# Graft
Every coding-agent task starts blind: grep a term, open a file, follow an import, back out, try again. Graft's bet is that this rediscovery is pure, repeated, discarded overhead — so it builds the understanding **once** and writes it into the repo as a folder of linked markdown files, one node per system, API, or concept. The agent reads those files the way it reads any other file.

Repo: [trailhq/Graft](https://github.com/trailhq/Graft) · npm `@nanonets/graft` · dev repo `NanoNets/context-graph-engine`.

![[5b85e1d4dfd9d1113f21d8bd6776e332_MD5.png]]

> [!note] All numbers below are vendor-reported (project README). The SWE-bench arm at least uses the official `swebench` 4.1.0 grader and official Verified images, which is a stronger claim than a self-judged sweep — but it is 50 instances, not the full 500, and both arms were run by the vendor.

## Links
### 🗒️ Description
Two artifacts, two cost profiles — this is the part worth internalizing:

1. **The structural graph** — `graft build` runs pure tree-sitter. Every function, class, and call edge lands in `graft/.graph/wiring.json` plus a per-file wiring card mirroring the source tree. **No model, no API key, no network.** `graft ask`, `grep`, `callers`, `skeleton`, `map`, `blast` and `check` all read this and never call an LLM.
2. **The concept graph** — `graft build --deep` adds the LLM layer, in two passes: summarize each file, then group those summaries into a curated set of nodes (subsystems, key files, concepts) with typed links. Graft picks the level of detail rather than emitting one node per file, so a big repo becomes a few dozen readable nodes. Your provider, your key, your model.

`graft/` is git-ignored on purpose — a regenerable local cache like `node_modules`, not a committed artifact. What you commit is the small wiring `graft init` drops into `.claude/` and friends; each teammate runs `graft build` to generate their own.

**What's in a node.** Most code maps stop at an address — this thing lives in that file, on that line — which tells an agent where to look, not what it will find, so it still has to open the source. A Graft node carries the meaning inline: a plain-English **summary**, the **crux** (the handful of lines that actually carry the logic — the guard, the skip condition, the state change), the **sources** each tracked by content hash, typed **links** as `[[wikilinks]]` (`depends_on`, `part_of`, `uses`, `implements`, `produces`), and a **notes** section below the generated block that survives regeneration. Three depths in one file: what, how, and where to go for the rest.

The crux is stored as the code text, not a line range — deliberately. Line numbers drift when unrelated code above them shifts; the lines that matter do not.

### 🧩 Features
- **Freshness without an index to babysit.** Every query stats the tree against the last build's fingerprint (~3 ms) and rebuilds only what moved, so answers describe the working tree *right now* — uncommitted, unstaged and staged edits all look the same to Graft. The refresh is structural and `$0`; it never calls the LLM. Disable per-command with `--no-refresh` or globally with `GRAFT_NO_REFRESH=1`.
- **23 languages, three tiers.** Full-fidelity hand-written extractors with scope-aware cross-file call/import resolution (TS/JS incl. JSX/TSX, Python, Go, Java, Kotlin, PHP, Swift, R); broad generic tree-sitter extraction (Rust, C, C++, C#, Ruby, Scala, Elixir, Solidity, OCaml, Zig, Dart, Clojure, Nix, Lua); and opt-in **compiler-grade** edges via `graft build --lsp` when rust-analyzer / clangd / gopls / pyright / typescript-language-server is on `PATH`.
- **Content-hash caching everywhere** — LLM passes and tree-sitter parse alike. On the Graft repo itself (124 files): 0.74 s cold, 0.18 s after one edited file. That cheapness is what makes the per-query refresh affordable.
- **Six MCP tools** — `graft_find_code` (question → ranked nodes with file:line and source inlined), `graft_file_api` (every signature in a file, no bodies, ~1/10th the tokens), `graft_trace_calls` (blast radius, N levels, either direction), `graft_find_all` (regex, grouped by enclosing symbol, ranked by coupling), `graft_repo_map`, `graft_check_freshness`.
- **`graft blast`** — blast radius of a *diff*: what depends on the lines a change touched. `--base origin/main --format markdown` produces a PR comment, `--name` labels the areas with one cached LLM call, and git history names who to tag. This is the feature I have not seen elsewhere in this lane.
- **Deep Claude Code wiring** — `graft init` writes `.claude/skills/graft/SKILL.md` (it owns that file and never touches your `CLAUDE.md`), a live statusline showing graph size / % enriched / `⚠ N stale`, post-edit hooks for blast-radius warnings and `$0` re-sync, and the MCP server into the project's `.mcp.json`. It merges into `.claude/settings.json` rather than clobbering it, and leaves a non-Graft `statusLine` alone.
- **Nine agents from one command** — `agents` (the shared `AGENTS.md` that Codex/OpenCode read), `cursor`, `gemini`, `grok`, `copilot`, `kiro`, `windsurf`, `adal`, `claude`. Marker-fenced sections in shared files, wholly-owned files where the agent uses one.
- **Monorepo / submodule / multi-repo aware** — per-scope ranking then fusion, so the biggest sub-project cannot drown a small one; `--follow-submodules` and `--follow-nested-repos` (independent flags, persisted in `.graft/config.json`) for gitlinked and non-gitlinked nested clones; a folder of separate repos auto-splits with a federating `graft/workspace.json`.
- **`graft viz`** — prebuilt interactive viewer, no dev server. Context tab (architecture graph), Code tab (per-symbol wiring), Outline tab (file→class→method tree). Select a node and edges take direction: amber = depends on, teal = depended on by, verb written on the edge; tree-sitter edges solid, LLM-inferred dashed. `--export site/` writes one self-contained `index.html` for CI or Pages.
- **`graft uninstall`** — a real inverse of `init`, including the out-of-repo writes. Rarer than it should be.

![[6f951e1454679d292cd548c35d8ad2b2_MD5.gif]]

### 📊 The benchmarks
Two harnesses making two different claims.

**Controlled sweep** — 162 runs, two repos, 3 trials, Claude Sonnet 5 with identical file tools, Opus 4.8 judge with a required-keyword floor, cache-aware costing:

| Metric (mean/task) | Cold Claude Code | With Graft |
|---|---|---|
| Cost | $0.0429 | **$0.0292 (−32%)** |
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

Separately they ran 15 tasks each on popular OSS repos — 10 developer questions plus 5 real merged PRs re-implemented from base commit and scored against the files the maintainers actually touched. On PocketBase (Go, ~350 files): cost $13.91 → $11.02 (−21%), wall-clock −14%, and 5/5 PRs reproduced touching the same files. The gap was widest on cross-file synthesis — "how does auth work across OAuth2 providers" fell from $2.19 to $0.84.

### Download or use
```
npm install -g @nanonets/graft   # once
graft init                       # pick agents, build the graph, wire it in
```

`graft init --dry-run` lists every file it would touch before writing anything; `graft init --agents claude` skips the prompt. With no TTY (CI, Dockerfile, piped shell) it writes **nothing** and prints the command to run instead — pass `--agents` or `--yes` to make a scripted run explicit. `npx @nanonets/graft init` works without the global install.

⚠️ **Read this before running `init`:** selecting the `agents` host also writes to **user-level** Codex config when `~/.codex/` exists — `config.toml` (MCP server registration), `hooks/graft/graft-hooks.cjs`, and a `PostToolUse` entry in `hooks.json`. Those apply to *every* repo you open with Codex, not just this one. The picker labels them `machine-wide` and `--no-global` skips them.

Telemetry: one batched usage ping with buckets and fixed labels only (never code, paths, repo names, symbols, queries, or error messages), plus a daily npm version check. `graft telemetry debug` prints exactly what would be sent; disable with `graft telemetry disable`, `DO_NOT_TRACK=1`, or the checkbox in `init`. Off in CI and in builds from source.

## Reasoning for
This is the strongest entry yet in the lane [[Structural Retrieval for Code]] maps out, and it differs from its neighbours on one axis that matters to me: **the graph is markdown files the agent just reads**. No database, no daemon, no embedding index, no server. [[Codebase Memory MCP]] answers in <1 ms from a SQLite graph; [[Serena]] and [[MCP Language Server]] hold a live language server; Graft's artifact is inert text with `[[wikilinks]]` — the same shape as this [[Brain]] vault's own progressive-disclosure indexes. If the MCP layer breaks, `cat graft/whatever.md` still works. That degradation path is worth a lot.

Concretely useful to me:
- **[[Qamera AI]] and [[Brain]]'s own harness** — the repos where [[Claude Code]] sessions burn the most context re-grepping the same modules. The `$0` tree-sitter tier means I can try `graft build` + `graft ask` before committing to any LLM spend at all.
- **`graft blast --base origin/main`** — a PR comment naming the areas a change can reach, plus who to tag from git history. That is a review-workflow feature, not a retrieval feature, and none of the alternatives here have it.
- **The pull-over-push result** — a transferable lesson beyond this tool: front-loading context is a speed optimization that can *cost* correctness versus letting the agent pull what it decides it needs. Files under [[Context Engineering]] and [[Progressive Disclosure]].

Caveats before I trust it in a real workflow. Every number is vendor-run; the SWE-bench arm is 50 of 500 instances. The crux — the feature that most distinguishes a Graft node from an address-only code map — **ships per-symbol in the code graph today but is not yet inlined into the markdown nodes**, so the README describes a node richer than the one currently written. And `init` writes to agent config files, hooks, and (for Codex) machine-wide paths: run `--dry-run` first, same audit discipline I applied to [[Codebase Memory MCP]].

## Alternatives considered
- [[Codebase Memory MCP]] — closest functional sibling: persistent code knowledge graph over MCP, tree-sitter + hybrid LSP, single C binary, <1 ms queries. Binary+SQLite artifact vs Graft's readable markdown; no `blast`-style diff radius, but broader language coverage (158) and semantic search.
- [[Serena]] · [[MCP Language Server]] — the LSP lane: live language-server symbol resolution, ground-truth accurate, no persisted artifact and no concept-level summaries. Graft's opt-in `--lsp` tier borrows from this lane rather than competing with it.
- [[Graphify]] — Claude Code skill producing a clustered knowledge graph from code/docs/images. Graph-as-skill vs Graft's graph-as-files-plus-MCP.
- [[Understand Anything]] — Tree-sitter+LLM multi-agent pipeline building an explorable knowledge graph; aimed at human onboarding and exploration more than at cutting an agent's token bill.
- [[RepoGraph]] — the published research version of this idea (ICLR 2025): tree-sitter def/ref graph retrieved via k-hop ego-graphs, +32.8% across four SWE agents. Graft is roughly this plus an LLM summarization layer plus agent wiring.
- [[GrepRAG]] — the opposing bet: no index at all, let the LLM generate ~10 ripgrep commands and re-rank. Index-free and ~1/35th the latency. Graft's own `graft grep` is a concession to the same insight — exhaustive regex for the tasks where a ranked top-N is not enough.
- Plain grep/read — the cold baseline both benchmark arms measure against.

## 📖 Further reading
- [trailhq/Graft](https://github.com/trailhq/Graft) — README, [TELEMETRY.md](https://github.com/trailhq/Graft/blob/main/TELEMETRY.md), [.env.example](https://github.com/trailhq/Graft/blob/main/.env.example), [CREDITS.md](https://github.com/trailhq/Graft/blob/main/CREDITS.md)
- [[Structural Retrieval for Code]] — where this sits among the LSP / SCIP / repo-map / grep lanes, and when each wins
- [[Token Optimization for Claude Code]] — the same goal from the cost side; Graft belongs in that roster
- [[Context Engineering]] · [[Progressive Disclosure]] — the push-vs-pull result generalizes past code retrieval

---
Template: [[templates/tool]]
