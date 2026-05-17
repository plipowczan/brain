#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { mkdir, writeFile, access } from "node:fs/promises";
import { join, resolve, basename } from "node:path";
import { buildIndex, type VaultIndex } from "./indexer.js";
import { search } from "./search.js";
import { startWatcher } from "./watch.js";
import type { SearchArgs } from "./types.js";

const BRAIN_PATH = process.env.BRAIN_PATH
  ? resolve(process.env.BRAIN_PATH)
  : resolve(process.cwd(), "content");

let index: VaultIndex | null = null;

const SEARCH_TOOL = {
  name: "brain_search",
  description:
    "Search the brain (Obsidian + Quartz vault) for notes matching a query. Returns ranked matches with title, path, type, tags, summary, excerpt around match, score, and graph context (outgoing + incoming wikilinks). Use mode='summary' (default, cheap) for ranked candidate discovery, then call again with mode='full' and limit=1 to retrieve a specific note's full content.",
  inputSchema: {
    type: "object",
    properties: {
      query: {
        type: "string",
        description: "Search query. BM25 ranked over title (3x), tags (2x), summary (2x), content (1x). Supports fuzzy and prefix matching.",
      },
      mode: {
        type: "string",
        enum: ["summary", "full"],
        description: "summary: title/path/tags/summary/200-char excerpt around match (default). full: same plus complete note content.",
      },
      limit: {
        type: "number",
        description: "Max results to return. Default 5, max 20.",
      },
      filter_topic: {
        type: "string",
        description: "Restrict to a top-level topic folder, e.g., 'AI', 'BUSINESS', 'CODE', 'LIFE', 'PROJECTS'.",
      },
      filter_tag: {
        type: "string",
        description: "Restrict to notes containing this tag.",
      },
      filter_type: {
        type: "string",
        description: "Restrict to a note type: 'tool', 'compiled-note', 'knowledge-note', 'book-note', 'basic-note', 'answer-note'.",
      },
    },
    required: ["query"],
  },
};

const INBOX_WRITE_TOOL = {
  name: "brain_inbox_write",
  description:
    "Drop a markdown document into the brain's `_raw/inbox/` directory. Designed for agentic systems (research agents, scrapers) to deliver content that the user will later classify into a topic folder via the brain's `/ingest` skill. The brain owns final classification; this tool only handles delivery. Filenames are sanitized; the date is auto-prefixed if missing; existing files are not overwritten unless `overwrite=true`.",
  inputSchema: {
    type: "object",
    properties: {
      filename: {
        type: "string",
        description: "Target filename (with or without .md extension). Path separators are stripped. If filename does not start with YYYY-MM-DD, today's date is auto-prefixed. Examples: 'alior-bank-news', '2026-05-17-research-PRD'.",
      },
      content: {
        type: "string",
        description: "Full markdown content. Should include Obsidian YAML frontmatter (`title`, `tags`, `summary`, `source`, `agent-created: true`) for /ingest to classify it properly. If frontmatter is missing the ingest step will need to derive metadata.",
      },
      overwrite: {
        type: "boolean",
        description: "If true, replaces an existing file with the same name. Default false: returns an error instead.",
      },
    },
    required: ["filename", "content"],
  },
};

const server = new Server(
  { name: "brain-mcp", version: "0.3.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [SEARCH_TOOL, INBOX_WRITE_TOOL],
}));

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  const name = req.params.name;
  const args = (req.params.arguments ?? {}) as Record<string, unknown>;

  if (name === "brain_search") {
    if (!index) throw new Error("Index not built yet");
    if (typeof args.query !== "string" || args.query.trim() === "") {
      throw new Error("query is required and must be a non-empty string");
    }
    const matches = search(index, args as unknown as SearchArgs);
    return {
      content: [{ type: "text", text: JSON.stringify({ matches, total: matches.length }, null, 2) }],
    };
  }

  if (name === "brain_inbox_write") {
    if (typeof args.filename !== "string" || args.filename.trim() === "") {
      throw new Error("filename is required and must be a non-empty string");
    }
    if (typeof args.content !== "string") {
      throw new Error("content is required and must be a string");
    }
    const overwrite = args.overwrite === true;
    const written = await writeInbox(BRAIN_PATH, args.filename, args.content, overwrite);
    return {
      content: [{ type: "text", text: JSON.stringify(written, null, 2) }],
    };
  }

  throw new Error(`Unknown tool: ${name}`);
});

async function writeInbox(brainPath: string, rawName: string, content: string, overwrite: boolean) {
  const inboxDir = join(brainPath, "_raw", "inbox");
  await mkdir(inboxDir, { recursive: true });

  let safe = basename(rawName.trim())
    .replace(/[\\/]/g, "")
    .replace(/\.+/g, ".")
    .replace(/[<>:"|?*\x00-\x1f]/g, "_");
  if (!safe.toLowerCase().endsWith(".md")) safe += ".md";

  const today = new Date().toISOString().slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}/.test(safe)) {
    safe = `${today}-${safe}`;
  }

  const target = join(inboxDir, safe);
  const exists = await fileExists(target);
  if (exists && !overwrite) {
    throw new Error(`File already exists at _raw/inbox/${safe}. Pass overwrite=true to replace, or choose a different filename.`);
  }

  await writeFile(target, content, "utf8");
  return {
    written: true,
    path: `_raw/inbox/${safe}`,
    absolute_path: target,
    bytes: Buffer.byteLength(content, "utf8"),
    overwritten: exists,
    hint: "Run /ingest in the brain to classify this file into the proper topic folder and update indexes.",
  };
}

async function fileExists(p: string): Promise<boolean> {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  console.error(`[brain-mcp] building index from ${BRAIN_PATH}...`);
  const t0 = Date.now();
  index = await buildIndex(BRAIN_PATH);
  console.error(`[brain-mcp] indexed ${index.notes.size} notes in ${Date.now() - t0}ms`);

  startWatcher(BRAIN_PATH, async () => {
    const fresh = await buildIndex(BRAIN_PATH);
    index = fresh;
  });
  console.error("[brain-mcp] watcher active");

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("[brain-mcp] ready");
}

main().catch((e) => {
  console.error("[brain-mcp] fatal:", e);
  process.exit(1);
});
