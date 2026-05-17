# brain-mcp

MCP server exposing this brain (Obsidian + Quartz vault) as a search + ingestion surface for agentic systems.

## What it does

Indexes all notes under `content/` (excluding `_raw/`, `_indexes/`, `_outputs/`, `templates/`, `ATTACHMENTS/`) and exposes two tools over MCP stdio:

- **`brain_search`** — BM25 + graph-boosted search over the vault. Agents retrieve ranked, contextualized matches without scanning the filesystem themselves.
- **`brain_inbox_write`** — drop a markdown document into `_raw/inbox/` for the user to classify via `/ingest`. Designed for research agents and scrapers to deliver content into the brain pipeline.

The index lives in memory and rebuilds automatically when files under `content/` change (chokidar watcher, debounced 500ms).

## Tool: `brain_search`

| Param | Type | Default | Description |
|---|---|---|---|
| `query` | string | — | Required. BM25-ranked over title (3x), tags (2x), summary (2x), content (1x). Fuzzy + prefix. |
| `mode` | `"summary"` \| `"full"` | `"summary"` | Summary returns title/path/tags/summary/200-char excerpt. Full adds complete note content. |
| `limit` | number | 5 | Max results, capped at 20. |
| `filter_topic` | string | — | Top-level folder filter: `AI`, `BUSINESS`, `CODE`, `LIFE`, etc. |
| `filter_tag` | string | — | Restrict to notes carrying this tag. |
| `filter_type` | string | — | `tool`, `compiled-note`, `knowledge-note`, `book-note`, `basic-note`, `answer-note`. |

Each match returns:

```jsonc
{
  "path": "AI/TOOLS/Claude Code",
  "title": "Claude Code",
  "type": "tool",
  "tags": ["ai", "tool"],
  "summary": "...",
  "excerpt": "...200 chars around match...",   // summary mode only
  "content": "full markdown",                    // full mode only
  "score": 0.87,
  "links_to": ["AI/TOOLS/Cursor"],
  "linked_from": ["AI/Agentic Systems"]
}
```

Ranking adds a 10% graph boost when a result links to or from another high-ranked result in the same query.

## Tool: `brain_inbox_write`

| Param | Type | Default | Description |
|---|---|---|---|
| `filename` | string | — | Required. Path separators stripped. `.md` suffix auto-added. If filename doesn't start with `YYYY-MM-DD`, today's date is auto-prefixed. |
| `content` | string | — | Required. Full markdown including YAML frontmatter (`title`, `tags`, `summary`, `source`, `agent-created: true`). |
| `overwrite` | boolean | `false` | Replace existing file. Default returns an error on collision. |

Writes to `<BRAIN_PATH>/_raw/inbox/<safe-filename>.md`. The brain owner then runs `/ingest` to classify the document into the proper topic folder.

Returns:

```jsonc
{
  "written": true,
  "path": "_raw/inbox/2026-05-17-alior-bank-news.md",
  "absolute_path": "C:\\PROJEKTY\\brain\\content\\_raw\\inbox\\...",
  "bytes": 1842,
  "overwritten": false,
  "hint": "Run /ingest in the brain to classify..."
}
```

## File watcher

The watcher (chokidar) monitors `content/**/*.md` (excluding the same dirs as the indexer) and triggers a full re-index when files change. Rebuilds are debounced 500ms to batch bulk operations (e.g., `/ingest` writing several files at once).

Re-index cost at this vault size (226 notes) is ~200ms — full rebuild is simpler than incremental updates and stays fast up to ~1000 notes.

## Install + run

```bash
cd brain-mcp
npm install
npm run build
```

Dev (no build step, uses tsx):

```bash
BRAIN_PATH="C:\\PROJEKTY\\brain\\content" npm run dev
```

## Wire into an agent

Example MCP client config:

```jsonc
{
  "mcpServers": {
    "brain-personal": {
      "command": "node",
      "args": ["C:\\PROJEKTY\\brain\\brain-mcp\\dist\\index.js"],
      "env": { "BRAIN_PATH": "C:\\PROJEKTY\\brain\\content" }
    }
  }
}
```

The agent then sees `mcp__brain-personal__brain_search` as a tool.

## Conventions assumed

- Notes are markdown under `content/<TOPIC>/...`
- YAML frontmatter contains: `title`, `type`, `tags`, `summary`, `date`
- Wikilinks use `[[Target]]` or `[[Target|alias]]`; target resolves to filename basename
- Folder structure follows `CLAUDE.md` "Directory Structure" section

## Version history

- **v0.3** (current) — `brain_inbox_write` added; chokidar watcher with debounced full re-index.
- **v0.2** — chokidar file watcher.
- **v0.1** — single `brain_search` tool, in-memory index built on startup only.

## Possible future work

- Embeddings layer (multilingual or EN synonyms) as a second scorer; hybrid ranking via Reciprocal Rank Fusion. Only worth it once BM25 misses surface real pain.
- Incremental index updates (single-file add/change/remove) if rebuild time exceeds ~1s at vault scale.
