import type { SearchArgs, SearchMatch, SearchMode } from "./types.js";
import type { VaultIndex } from "./indexer.js";

const DEFAULT_LIMIT = 5;
const MAX_LIMIT = 20;
const MIN_SCORE = 0.05;
const GRAPH_BOOST = 1.1;
const EXCERPT_RADIUS = 100;

export function search(index: VaultIndex, args: SearchArgs): SearchMatch[] {
  const query = args.query?.trim();
  if (!query) return [];

  const mode: SearchMode = args.mode === "full" ? "full" : "summary";
  const limit = clamp(args.limit ?? DEFAULT_LIMIT, 1, MAX_LIMIT);

  const raw = index.miniSearch.search(query);
  if (raw.length === 0) return [];

  const maxScore = raw[0].score;
  let candidates = raw
    .map((r) => ({ id: r.id as string, score: r.score / maxScore }))
    .filter((r) => {
      const note = index.notes.get(r.id);
      if (!note) return false;
      if (args.filter_topic && !r.id.startsWith(`${args.filter_topic}/`)) return false;
      if (args.filter_type && note.type !== args.filter_type) return false;
      if (args.filter_tag && !note.tags.includes(args.filter_tag)) return false;
      return true;
    });

  const topSet = new Set(candidates.slice(0, limit * 2).map((c) => c.id));
  candidates = candidates.map((c) => {
    const out = index.outgoing.get(c.id) ?? new Set();
    const inc = index.incoming.get(c.id) ?? new Set();
    let boosted = false;
    for (const t of out) if (topSet.has(t)) { boosted = true; break; }
    if (!boosted) for (const s of inc) if (topSet.has(s)) { boosted = true; break; }
    return boosted ? { ...c, score: Math.min(1, c.score * GRAPH_BOOST) } : c;
  });

  candidates.sort((a, b) => b.score - a.score);

  const out: SearchMatch[] = [];
  for (const c of candidates) {
    if (c.score < MIN_SCORE) break;
    if (out.length >= limit) break;
    const note = index.notes.get(c.id);
    if (!note) continue;
    const linksTo = [...(index.outgoing.get(c.id) ?? [])];
    const linkedFrom = [...(index.incoming.get(c.id) ?? [])];
    const match: SearchMatch = {
      path: note.path,
      title: note.title,
      type: note.type,
      tags: note.tags,
      summary: note.summary,
      score: round(c.score),
      links_to: linksTo,
      linked_from: linkedFrom,
    };
    if (mode === "summary") {
      match.excerpt = extractExcerpt(note.content, query) ?? note.summary;
    } else {
      match.content = note.content;
    }
    out.push(match);
  }
  return out;
}

function extractExcerpt(content: string, query: string): string | null {
  const terms = query.toLowerCase().split(/\s+/).filter((t) => t.length > 2);
  if (terms.length === 0) return null;
  const lower = content.toLowerCase();
  let idx = -1;
  for (const t of terms) {
    const i = lower.indexOf(t);
    if (i !== -1 && (idx === -1 || i < idx)) idx = i;
  }
  if (idx === -1) return null;
  const start = Math.max(0, idx - EXCERPT_RADIUS);
  const end = Math.min(content.length, idx + EXCERPT_RADIUS);
  const slice = content.slice(start, end).replace(/\s+/g, " ").trim();
  return (start > 0 ? "..." : "") + slice + (end < content.length ? "..." : "");
}

function clamp(n: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, n));
}

function round(n: number): number {
  return Math.round(n * 1000) / 1000;
}
