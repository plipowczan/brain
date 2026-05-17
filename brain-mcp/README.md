# brain-mcp

MCP server exposing this brain (Obsidian + Quartz vault) as a search tool for agentic systems.

## What it does

Indexes all notes under `content/` (excluding `_raw/`, `_indexes/`, `_outputs/`, `templates/`, `ATTACHMENTS/`) and exposes a single tool `brain_search` over MCP stdio. Agents call it to retrieve ranked, contextualized matches without scanning the filesystem themselves.

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

## Roadmap

- v0.1 — single `brain_search` tool, in-memory index built on startup (this version).
- v0.2 — file watcher (chokidar) for incremental index updates without restart.
- v0.3 — second tool `brain_inbox_write(filename, content)` for agentic systems to drop research into `_raw/inbox/` for `/ingest` pickup.
- Future — optional semantic layer (multilingual embeddings) as second scorer; hybrid via RRF.
