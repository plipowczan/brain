---
title: "MCP Language Server"
date: 2026-07-08
enableToc: true
openToc: true
tags: ["tool", "ai", "mcp", "lsp", "code-intelligence", "coding-agents", "open-source"]
type: tool
agent-created: true
summary: "isaacphi/mcp-language-server — a generic LSP→MCP bridge: run any stdio language server (gopls, rust-analyzer, pyright, clangd, tsserver) and expose definition/references/diagnostics/hover/rename/edit to an LLM agent. Structure, not embeddings."
status-checked: 2026-11-13
project-status: stale
---
# MCP Language Server

> [!warning] Status check 2026-11-13 — stale
> **Verdict:** The last commit on main was 2025-06-03 and the last release v0.1.1 was 2025-05-16, about 17 months ago.
> **Last release:** v0.1.1, 2025-05-16 (GitHub releases page; tags v0.0.3 to v0.1.1 only) · **last commit:** 2025-06-03 · **licence:** BSD-3-Clause
> **Repo:** https://github.com/isaacphi/mcp-language-server
> **Use instead:** There is no official successor. For [[Claude Code]], the first-party replacement is the native LSP tool, turned on by installing an official code-intelligence plugin (typescript-lsp, pyright-lsp, gopls-lsp, rust-analyzer-lsp, clangd-lsp…
> **Changed since this note:** Around it: Claude Code's native LSP tool and official code-intelligence plugins (shipped in 2.0.74, Dec 2025; the note did not mention them) now cover the read-only half of this tool's surface. Serena reached v2.0/v2.1 (Oct 2026).

`isaacphi/mcp-language-server` — the minimal, generic version of the [[Serena|LSP-as-context]] idea: a thin **bridge that runs any stdio language server and re-exposes its capabilities as MCP tools**. The agent gets IDE-grade navigation and edits derived from the language server's native type system and symbol tables — not grep, not embeddings.

The clearest instance of "an MCP server that exposes an LSP." See [[Structural Retrieval for Code]] for the lane.

## Links
### Description
It proxies a real language server over stdio and surfaces six tools:

- **definition** — *"retrieves the complete source code definition of any symbol"*
- **references** — *"locates all usages and references of a symbol throughout the codebase"* (exhaustive, not top-k)
- **diagnostics** — compiler/linter errors for a file
- **hover** — type/signature/docs at a position
- **rename_symbol** — project-wide rename
- **edit_file** — line-based edits

Confirmed working with **gopls** (Go), **rust-analyzer** (Rust), **pyright** (Python), **typescript-language-server**, and **clangd** (C/C++) — plus *"many more"* servers that communicate over stdio. Because retrieval comes from the language server, it understands *semantic meaning* and precise callers/blast-radius that embeddings can't.

Caveat on wording: "retrieval" here is really **navigation/lookup**, and rename/edit are **mutations** — this is a code-intelligence tool surface, not a RAG pipeline.

### Download or use
Go binary, run as an MCP server pointed at a workspace + a chosen language server command; register in the agent's MCP config ([[Claude Code]], [[Cursor]], etc.). One server instance per language server.

## Reasoning for
This is the **lowest-friction way to give a [[Claude Code]] agent type-accurate structure** without adopting a whole graph engine: if the language already has a good LSP, wrap it and the agent can ask "definition of X", "every reference to Y", "does this file compile". Thinner and more composable than [[Serena]] — fewer tools, no refactoring DSL — which makes it a good building block when I want *one* language's intelligence rather than a 40-language toolkit.

For JS/TS work, wrap `typescript-language-server` and the agent gets type-accurate TS navigation with almost no setup — the sweet spot. (C#/Roslyn would wrap too in principle, but it's untested and not the focus.)

## Alternatives considered
- [[Serena]] — richer LSP toolkit with symbol-level refactoring and 40+ languages out of the box; heavier.
- [[Codebase Memory MCP]] — persistent tree-sitter + Hybrid-LSP *graph* with Cypher/`trace_path`; a stored graph vs live LSP calls.
- [[Graphify]] · [[Understand Anything]] — tree-sitter syntactic graphs, no type resolution.
- Plain [[GrepRAG|agentic grep]] — index-free, cheaper, but false positives and no type info.

## 📖 Further reading
- [[Structural Retrieval for Code]] — the taxonomy and the grep-vs-graph tension
- [[Serena]] — the fuller LSP-as-context sibling
- [[Progressive Disclosure]] · [[Context Engineering]]

## Resources
- Repo: https://github.com/isaacphi/mcp-language-server
- Related: [[Serena]] · [[Codebase Memory MCP]] · [[Claude Code]]

---
Template: [[templates/tool]]
