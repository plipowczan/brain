# AGENTS.md — brain-mcp/

## Purpose

TypeScript **MCP server** exposing the brain vault (Obsidian + Quartz content) as a search
tool for agentic systems. `name: brain-mcp`, entry `dist/index.js`, ships a `bin`. See `README.md`.

## Layout (`src/`)

| File | Responsibility |
|------|----------------|
| `index.ts` | MCP server entry — registers tools, wires stdio transport |
| `indexer.ts` | Builds/maintains the search index over `content/` notes |
| `parser.ts` | Parses note markdown + frontmatter into structured records |
| `search.ts` | Query logic over the index |
| `watch.ts` | Filesystem watcher — re-index on note changes |
| `types.ts` | Shared type definitions |
| `smoke-test.ts` | Standalone smoke test |

## Rules

- TypeScript, compiled to `dist/` (git-ignored). Build before running the `bin`.
- The server **reads** `content/`; it must not mutate notes or the `_indexes/` files — that is the Knowledge Base Agent's job (see root `AGENTS.md`).
- Keep `parser.ts` frontmatter fields in sync with the note frontmatter schema in root `AGENTS.md` / `templates/`.

## Verify

Run `smoke-test.ts` after changes to indexing/parsing/search before shipping.
