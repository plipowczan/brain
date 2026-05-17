#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { resolve } from "node:path";
import { buildIndex, type VaultIndex } from "./indexer.js";
import { search } from "./search.js";
import type { SearchArgs } from "./types.js";

const BRAIN_PATH = process.env.BRAIN_PATH
  ? resolve(process.env.BRAIN_PATH)
  : resolve(process.cwd(), "content");

let index: VaultIndex | null = null;

const TOOL_DEFINITION = {
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

const server = new Server(
  { name: "brain-mcp", version: "0.1.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [TOOL_DEFINITION],
}));

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  if (req.params.name !== "brain_search") {
    throw new Error(`Unknown tool: ${req.params.name}`);
  }
  if (!index) {
    throw new Error("Index not built yet");
  }
  const args = (req.params.arguments ?? {}) as Partial<SearchArgs>;
  if (typeof args.query !== "string" || args.query.trim() === "") {
    throw new Error("query is required and must be a non-empty string");
  }
  const matches = search(index, args as SearchArgs);
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify({ matches, total: matches.length }, null, 2),
      },
    ],
  };
});

async function main() {
  console.error(`[brain-mcp] building index from ${BRAIN_PATH}...`);
  const t0 = Date.now();
  index = await buildIndex(BRAIN_PATH);
  const ms = Date.now() - t0;
  console.error(`[brain-mcp] indexed ${index.notes.size} notes in ${ms}ms`);
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("[brain-mcp] ready");
}

main().catch((e) => {
  console.error("[brain-mcp] fatal:", e);
  process.exit(1);
});
