import { readdir, readFile, stat } from "node:fs/promises";
import { join, relative, sep } from "node:path";
import MiniSearch from "minisearch";
import { parseNote, extractWikilinkTargets } from "./parser.js";
import type { Note } from "./types.js";

const EXCLUDED_DIRS = new Set([
  "_raw",
  "_indexes",
  "_outputs",
  "templates",
  "ATTACHMENTS",
  ".obsidian",
]);

export interface VaultIndex {
  brainPath: string;
  notes: Map<string, Note>;
  miniSearch: MiniSearch<IndexedDoc>;
  outgoing: Map<string, Set<string>>;
  incoming: Map<string, Set<string>>;
}

interface IndexedDoc {
  id: string;
  title: string;
  tags: string;
  summary: string;
  content: string;
}

export async function buildIndex(brainPath: string): Promise<VaultIndex> {
  const notes = new Map<string, Note>();
  const files: string[] = [];
  await walk(brainPath, brainPath, files);

  for (const abs of files) {
    const rel = toRelKey(brainPath, abs);
    try {
      const raw = await readFile(abs, "utf8");
      const note = parseNote(rel, raw);
      notes.set(rel, note);
    } catch (e) {
      console.error(`[brain-mcp] failed to parse ${rel}: ${(e as Error).message}`);
    }
  }

  const basenameMap = buildBasenameMap(notes);
  const { outgoing, incoming } = buildGraph(notes, basenameMap);

  const docs: IndexedDoc[] = [...notes.values()].map((n) => ({
    id: n.path,
    title: n.title,
    tags: n.tags.join(" "),
    summary: n.summary,
    content: n.content,
  }));

  const miniSearch = new MiniSearch<IndexedDoc>({
    fields: ["title", "tags", "summary", "content"],
    storeFields: ["id"],
    searchOptions: {
      boost: { title: 3, tags: 2, summary: 2, content: 1 },
      fuzzy: 0.2,
      prefix: true,
      combineWith: "AND",
    },
  });
  miniSearch.addAll(docs);

  return { brainPath, notes, miniSearch, outgoing, incoming };
}

async function walk(root: string, dir: string, out: string[]): Promise<void> {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name.startsWith(".") && e.name !== ".obsidian") continue;
    if (EXCLUDED_DIRS.has(e.name)) continue;
    const full = join(dir, e.name);
    if (e.isDirectory()) {
      await walk(root, full, out);
    } else if (e.isFile() && e.name.toLowerCase().endsWith(".md")) {
      out.push(full);
    }
  }
}

function toRelKey(root: string, abs: string): string {
  return relative(root, abs).split(sep).join("/").replace(/\.md$/i, "");
}

function buildBasenameMap(notes: Map<string, Note>): Map<string, string[]> {
  const m = new Map<string, string[]>();
  for (const key of notes.keys()) {
    const base = key.split("/").pop()!;
    const list = m.get(base) ?? [];
    list.push(key);
    m.set(base, list);
  }
  return m;
}

function buildGraph(
  notes: Map<string, Note>,
  basenameMap: Map<string, string[]>
): { outgoing: Map<string, Set<string>>; incoming: Map<string, Set<string>> } {
  const outgoing = new Map<string, Set<string>>();
  const incoming = new Map<string, Set<string>>();
  for (const [key, note] of notes) {
    const targets = extractWikilinkTargets(note.content);
    const resolved = new Set<string>();
    for (const t of targets) {
      const r = resolveTarget(t, notes, basenameMap);
      if (r && r !== key) resolved.add(r);
    }
    outgoing.set(key, resolved);
    for (const r of resolved) {
      const inc = incoming.get(r) ?? new Set<string>();
      inc.add(key);
      incoming.set(r, inc);
    }
  }
  return { outgoing, incoming };
}

function resolveTarget(
  target: string,
  notes: Map<string, Note>,
  basenameMap: Map<string, string[]>
): string | null {
  const norm = target.replace(/\.md$/i, "").split(/[\\/]/).filter(Boolean).join("/");
  if (notes.has(norm)) return norm;
  const base = norm.split("/").pop()!;
  const matches = basenameMap.get(base);
  if (matches && matches.length > 0) return matches[0];
  return null;
}
