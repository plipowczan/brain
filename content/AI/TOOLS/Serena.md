---
title: "Serena"
date: 2026-07-08
enableToc: true
openToc: true
tags: ["tool", "ai", "mcp", "lsp", "code-intelligence", "coding-agents", "open-source", "mit"]
type: tool
agent-created: true
summary: "oraios/serena — MIT MCP server that gives coding agents symbol-level code retrieval AND refactoring backed by real language servers (LSP), not vector embeddings. 'The IDE for your agent', 40+ languages."
---
# Serena

`oraios/serena` — an MCP toolkit that turns any LLM coding agent into something closer to an IDE: it retrieves and edits code at the **symbol level** using real **language servers (LSP)**, the same engines that power go-to-definition and find-references in VS Code. Tagline: *"the IDE for your agent."* MIT, 40+ languages, free.

The point for me: this is the flagship example of **pure LSP-as-context** — retrieval with **no vector index at all** — the lane my existing code-graph tools ([[Codebase Memory MCP]], [[Graphify]]) don't occupy. See [[Structural Retrieval for Code]] for where it fits.

## Links
### Description
Serena is *"an abstraction layer for the integration of language servers that implement the Language Server Protocol (LSP),"* operating *"at the symbol level and exploiting the relational structure"* of code. There is no embedding step — retrieval is LSP-symbolic, plus a regex `search_for_pattern` tool for the cases where structure isn't enough.

Because it speaks LSP, it inherits IDE-grade precision: the **exhaustive, type-resolved** caller/reference set, not a ranked list of similar-looking chunks. And unlike a read-only graph, it **edits**: symbol-aware insert/replace/rename backed by the language server.

Core tools (symbol retrieval + structural editing):
- `find_symbol`, `get_symbols_overview` — locate and outline definitions
- `find_referencing_symbols` — exhaustive references / blast radius
- `replace_symbol_body`, `insert_after_symbol`, `insert_before_symbol` — symbol-aware edits
- rename / move refactors via the underlying LSP
- `search_for_pattern` — regex fallback

### Download or use
Runs as an MCP server; integrates with [[Claude Code]], [[Cursor]], VS Code, and other MCP clients. Typical wiring is via `uvx`:

```
uvx --from git+https://github.com/oraios/serena serena start-mcp-server
```

Then add the server to the agent's MCP config and point it at a project. Free, open source, self-hosted — nothing leaves the machine.

## Reasoning for
Where tree-sitter tools stop at *syntax*, Serena resolves *types* — so `find_referencing_symbols` gives the real caller set for a signature change, which is exactly the "what breaks if I touch this" question a vector index answers with guesses. It's the natural tool for **cross-subsystem edits** in the [[Structural Retrieval for Code]] task table, and the fact that it *edits* (not just reads) makes it a candidate to sit in a [[Claude Code]] harness alongside grep for local work.

For my stack (JS/TS agents) this lands in the sweet spot: `typescript-language-server` is mature, so Serena gives an agent real, type-resolved TS retrieval — the layer where vector RAG is weakest — with almost no setup. (Language-agnostic in principle via LSP; C#/Roslyn would wrap too but is untested, not the focus. Verified facts here are the mechanism, license, and toolset from the repo.)

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
- [[Wiring Serena into a Codebase]] — step-by-step bring-up into a Claude Code harness (install, Windows SAC DLL fix, monorepo timeout, pre-index)
- Related: [[MCP Language Server]] · [[Codebase Memory MCP]] · [[Claude Code]]

---
Template: [[templates/tool]]
