import matter from "gray-matter";
import type { Note } from "./types.js";

const WIKILINK_RE = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;

export function parseNote(path: string, raw: string): Note {
  const parsed = matter(raw);
  const fm = parsed.data as Record<string, unknown>;
  const body = parsed.content;

  const tagsRaw = fm.tags;
  const tags: string[] = Array.isArray(tagsRaw)
    ? tagsRaw.map(String)
    : typeof tagsRaw === "string"
      ? tagsRaw.split(/[,\s]+/).filter(Boolean)
      : [];

  return {
    path,
    title: typeof fm.title === "string" ? fm.title : basenameWithoutExt(path),
    type: typeof fm.type === "string" ? fm.type : "untyped",
    tags,
    summary: typeof fm.summary === "string" ? fm.summary : extractSummary(body),
    date: typeof fm.date === "string" ? fm.date : "",
    content: body,
  };
}

export function extractWikilinkTargets(body: string): string[] {
  const targets = new Set<string>();
  for (const match of body.matchAll(WIKILINK_RE)) {
    targets.add(match[1].trim());
  }
  return [...targets];
}

function basenameWithoutExt(path: string): string {
  const last = path.split(/[\\/]/).pop() ?? path;
  return last.replace(/\.md$/i, "");
}

function extractSummary(body: string): string {
  const firstPara = body
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0 && !l.startsWith("#") && !l.startsWith("---"))
    .find((l) => l.length > 20);
  if (!firstPara) return "";
  const words = firstPara.split(/\s+/).slice(0, 15);
  return words.join(" ") + (firstPara.split(/\s+/).length > 15 ? "..." : "");
}
