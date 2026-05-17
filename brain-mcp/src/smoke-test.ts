import { resolve } from "node:path";
import { buildIndex } from "./indexer.js";
import { search } from "./search.js";

const BRAIN_PATH = resolve(process.cwd(), "..", "content");

async function main() {
  console.log(`Indexing ${BRAIN_PATH}...`);
  const t0 = Date.now();
  const index = await buildIndex(BRAIN_PATH);
  const ms = Date.now() - t0;
  console.log(`Indexed ${index.notes.size} notes in ${ms}ms`);
  console.log(`Outgoing edges: ${[...index.outgoing.values()].reduce((a, s) => a + s.size, 0)}`);

  const queries = [
    "Claude Code skills",
    "PRD from discovery and offer",
    "process mapping",
    "Bieszczady trip",
    "graph database",
  ];

  for (const q of queries) {
    console.log(`\n=== Query: "${q}" ===`);
    const t1 = Date.now();
    const results = search(index, { query: q, limit: 3 });
    const sms = Date.now() - t1;
    console.log(`Found ${results.length} matches in ${sms}ms`);
    for (const r of results) {
      console.log(`  [${r.score}] ${r.path} (${r.type})`);
      console.log(`    tags: ${r.tags.join(", ")}`);
      console.log(`    excerpt: ${(r.excerpt ?? r.summary).slice(0, 120)}...`);
      if (r.links_to.length > 0) {
        console.log(`    -> ${r.links_to.slice(0, 3).join(", ")}${r.links_to.length > 3 ? "..." : ""}`);
      }
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
