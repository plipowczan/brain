---
title: "Serena"
date: 2026-07-08
enableToc: true
openToc: true
tags: ["tool", "ai", "mcp", "lsp", "code-intelligence", "coding-agents", "open-source", "gpl-3.0"]
type: tool
agent-created: true
summary: "oraios/serena — MCP server (GPL-3.0-or-later since v2.0; MIT through v1.7.0) that gives coding agents symbol-level code retrieval AND refactoring backed by real language servers (LSP) or a paid JetBrains plugin, not vector embeddings. 'The IDE for your agent', 40+ languages."
status-checked: 2026-11-13
project-status: active
agent-reviewed: 2026-11-13
repo: "https://github.com/oraios/serena"
---
# Serena

> [!success] Status check 2026-11-13 — active
> **Verdict:** Commits on main through 2026-11-09 (dependency pinning, an OpenSSF Scorecard workflow) after fixes on 2026-10-28.
> **Last release:** v2.1.0 (2026-10-19), GitHub release and PyPI serena-agent 2.1.0 · **last commit:** 2026-11-09 · **licence:** Component licensing since v2.0.0. The Serena application is GPL-3.0-or-later…
> **Repo:** https://github.com/oraios/serena
> **Changed since this note:** The note was written at v1.5.3; the current version is v2.1.0. (1) LICENSE CHANGE: the note's "MIT" is now wrong for current versions.

`oraios/serena` — an MCP toolkit that turns any LLM coding agent into something closer to an IDE: it retrieves and edits code at the **symbol level** using real **language servers (LSP)**, the same engines that power go-to-definition and find-references in VS Code. Tagline: *"the IDE for your agent."* GPL-3.0-or-later since v2.0.0 (MIT through v1.7.0), 40+ languages, free with the default language-server backend. Current version as of 2026-11-13: v2.1.0 (2026-10-19).

The point for me: this is the flagship example of **pure LSP-as-context** — retrieval with **no vector index at all** — the lane my existing code-graph tools ([[Codebase Memory MCP]], [[Graphify]]) don't occupy. See [[Structural Retrieval for Code]] for where it fits.

## Links
### Description
Serena is *"an abstraction layer for the integration of language servers that implement the Language Server Protocol (LSP),"* operating *"at the symbol level and exploiting the relational structure"* of code. There is no embedding step — retrieval is LSP-symbolic, plus a regex `search_for_pattern` tool for the cases where structure isn't enough.

Because it speaks LSP, it inherits IDE-grade precision: the **exhaustive, type-resolved** caller/reference set, not a ranked list of similar-looking chunks. And unlike a read-only graph, it **edits**: symbol-aware insert/replace/rename backed by the language server.

Two backends power this: **language servers** (free, open source, the default) or the **Serena JetBrains Plugin** (paid, free trial), which uses the IDE's own analysis and covers every language the JetBrains IDEs support.

Core tools (symbol retrieval + structural editing):
- `find_symbol`, `get_symbols_overview` — locate and outline definitions
- `find_referencing_symbols` — exhaustive references / blast radius
- `replace_symbol_body`, `insert_after_symbol`, `insert_before_symbol`, safe delete — symbol-aware edits
- rename via the language server (symbols only); move, inline and "propagate deletions" are JetBrains-plugin only, as are type hierarchy, dependency search and the interactive debugger
- diagnostics from the language server
- `search_for_pattern` — regex fallback (the basic file/search/shell tools are off by default inside Claude Code or Codex, since the harness already has them)

Since v2.0.0 there is also a **REPL agent interface**: instead of a long tool list, the agent gets a minimal tool set plus a code-execution environment for all Serena operations. The docs point out the trade-off: every action shows up as the same tool call, so you review the submitted code, not a tool name.

### ⚖️ Licence (changed in v2.0.0)
- **Through v1.7.0** (tag `mit-final`): MIT. Those releases stay MIT forever; the change isn't retroactive.
- **Since v2.0.0** (2026-10-13): the Serena application is **GPL-3.0-or-later**. Only SolidLSP (`src/solidlsp`, the language-server client library) stays MIT and can be pulled out and used under MIT on its own. The `serena-agent` package combines both, so as a whole it's GPL.
- Contributions now require signing a CLA.

What that means in practice: running Serena locally as an MCP server in my own harness changes nothing, because GPL obligations kick in on distribution, not use. And it's GPL, not AGPL, so offering it over a network doesn't trigger them either. It matters if I redistribute Serena or a modified fork, bundle it into something I ship to a client, or import its code into my own tool. Then the combined work has to go out under GPL-3.0 with source. Whether a product that only talks to an unmodified Serena process over MCP/stdio counts as a "combined work" is a legal question the repo doesn't answer; my reading is that it usually doesn't, but that's my interpretation, not legal advice. If I need permissive terms: pin v1.7.0, or build on SolidLSP alone.

### Download or use
Runs as an MCP server; integrates with [[Claude Code]], Codex, [[Cursor]], VS Code, JetBrains IDEs, Claude Desktop and other MCP clients. The `uvx --from git+https://github.com/oraios/serena …` one-liner I first noted is no longer in the README. The documented path is a uv-managed tool from PyPI (`serena-agent`):

```
uv tool install -p 3.13 serena-agent
serena init                  # add -b JetBrains to use the plugin backend
serena setup claude-code     # or manually:
claude mcp add --scope user serena -- serena start-mcp-server --context claude-code --project-from-cwd
```

The README warns against installing it from MCP or plugin marketplaces because their install commands are outdated. Some languages need extra language-server installs.

The LSP backend is free and self-hosted: no code or project data leaves the machine. It isn't silent, though. On startup Serena sends anonymous usage data (version, OS, agent interface, backend, dashboard status, context); set `SERENA_USAGE_REPORTING=false` to opt out.

Since v2.1.0 there's a **trusted-projects** model. In a repo that isn't trusted, Serena pins tsserver to its own TypeScript install instead of loading the project's `node_modules/typescript`, and it ignores symlinks that point outside the project root. Trust your own repos explicitly (`trusted_project_path_patterns`), or TS behaviour can differ from what you expect.

## Reasoning for
Where tree-sitter tools stop at *syntax*, Serena resolves *types* — so `find_referencing_symbols` gives the real caller set for a signature change, which is exactly the "what breaks if I touch this" question a vector index answers with guesses. It's the natural tool for **cross-subsystem edits** in the [[Structural Retrieval for Code]] task table, and the fact that it *edits* (not just reads) makes it a candidate to sit in a [[Claude Code]] harness alongside grep for local work.

For my stack (JS/TS agents) this lands in the sweet spot: `typescript-language-server` is mature, so Serena gives an agent real, type-resolved TS retrieval — the layer where vector RAG is weakest — with almost no setup. v2.1.0 also added `typescript_tsgo`, which runs TypeScript 7's native language server (`tsc --lsp`). (Language-agnostic in principle via LSP; C# goes through Roslyn, and v2.1.0 added VB.NET the same way, but that's untested by me and not the focus. Verified facts here are the mechanism, licence and toolset from the repo, re-checked at v2.1.0 on 2026-11-13.)

## 🛠️ What it actually improves in a harness

Concrete payoff of wiring Serena into a [[Claude Code]] agent (biased to my JS/TS work):

- **Signature changes without breakage** — `find_referencing_symbols` returns the *exact*, type-resolved caller set. Change `getUser(id)` → `getUser(id, opts)` and the agent hits all 15 real call sites, not grep's false positives (comments, same-named functions, strings).
- **No hallucinated APIs** — the agent checks a symbol's real `definition` / `hover` instead of inventing a method that doesn't exist and failing to compile.
- **Symbol-level edits** — `replace_symbol_body` / `rename` beat fragile line-range diffs; rename works IDE-grade across files.
- **Tighter loop** — edit → `diagnostics` → see tsc errors → self-correct, without running a full build.
- **Less context burned** — one symbol query instead of reading whole files to find a definition; the same ~99%-token logic as [[Progressive Disclosure]] / [[Codebase Memory MCP]].

**When it pays off:** a medium+ typed TS/JS codebase, agent making multi-file changes / refactors / signature edits. **When it doesn't:** small repo, mostly new code, local edits — plain agentic grep is enough (the [[GrepRAG]] point). Caveat: no independent head-to-head benchmark exists (Serena vs bare Claude Code) — the precision win is mechanical, the *magnitude* is unproven; my assessment, not a measured fact.

## Alternatives considered
- [[MCP Language Server]] — `isaacphi/mcp-language-server`, the *generic* LSP→MCP bridge; thinner (navigation + edit, 6 tools) vs Serena's richer symbol-refactoring toolkit.
- [[Codebase Memory MCP]] — builds its own tree-sitter + Hybrid-LSP graph and answers Cypher/`trace_path`; a persistent *graph* rather than live LSP calls.
- [[Graphify]] · [[Understand Anything]] — tree-sitter (syntactic) graphs, no type resolution and no editing.
- Plain grep / [[GrepRAG]] — index-free lexical search; cheaper for local completion, no type accuracy.

## 📖 Further reading
- [[Structural Retrieval for Code]] — the LSP-as-context lane and when it wins
- [[Progressive Disclosure]] · [[Context Engineering]] · [[Token Optimization for Claude Code]]

## Resources
- Repo: https://github.com/oraios/serena
- Licence overview (components, MIT cutoff): https://github.com/oraios/serena/blob/main/LICENSE · CHANGELOG: https://github.com/oraios/serena/blob/main/CHANGELOG.md
- [[Wiring Serena into a Codebase]] — step-by-step bring-up into a Claude Code harness (install, Windows SAC DLL fix, monorepo timeout, pre-index)
- Related: [[MCP Language Server]] · [[Codebase Memory MCP]] · [[Claude Code]]

---
Template: [[templates/tool]]
