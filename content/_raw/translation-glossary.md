---
generated: 2026-05-17
total_entries: 225
needs_rename: 6
needs_translation: 47
already_en: 172
---

# PL→EN Translation Glossary

Phase 0 inventory for migrating the brain vault to English. Filenames listed relative to `content/`. Wikilinks resolve to filenames (`[[Title]]` → `Title.md`), so any filename change must be propagated in Phase 1.

Scope: 225 wiki notes (ABOUT, AI, BUSINESS, CODE, CRYPTO, KNOWLEDGES, LIFE, NOCODE, PROJECTS, TRAVELS) + 15 templates + `STYL_PISANIA_ANALIZA.md`. Excludes `_raw/`, `_indexes/`, `_outputs/`, `ATTACHMENTS/`.

---

## Notes requiring rename + translation

| Current path (from content/) | Current title | New filename | New title | Body language | Notes |
|---|---|---|---|---|---|
| CRYPTO/KNOWLEDGE/INFO/Stan rynku krypto 2026.md | Stan rynku krypto 2026 | CRYPTO/KNOWLEDGE/INFO/Crypto Market State 2026.md | Crypto Market State 2026 | PL | Polish common-noun phrase; common subject, EN filename preferred. Update wikilinks |
| LIFE/BOOKS/Sapiens. Od zwierząt do bogów.md | Sapiens. Od zwierząt do bogów | LIFE/BOOKS/Sapiens. A Brief History of Humankind.md | Sapiens. A Brief History of Humankind | EN (body already EN) | PL book-title variant; the book exists in English under this name — switch to canonical EN edition title |
| LIFE/BOOKS/Włam się do mózgu.md | Włam się do mózgu | LIFE/BOOKS/Włam się do mózgu.md | Włam się do mózgu — Radek Kotarski (PL book on learning) | PL+EN mix | PL book proper noun (no EN edition) — keep filename + Polish title verbatim, expand subtitle in title for context |
| LIFE/BOOKS/Zaprojektuj swoją przyszłość.md | Zaprojektuj swoją przyszłość | LIFE/BOOKS/Design Your Future.md | Design Your Future (Brian Tracy, PL edition "Zaprojektuj swoją przyszłość") | PL (mostly empty template) | Original English book by Brian Tracy — use canonical EN title, note PL edition in body |
| PROJECTS/ARCHIVE/Trendy 2026.md | Trendy 2026 (assumed) | PROJECTS/ARCHIVE/AI Trends 2026 Notes.md | AI Trends 2026 Notes | mixed (likely EN+PL) | Filename PL common noun → EN; archive note from video summary |
| BUSINESS/KNOWLEDGE/HOWTO/Contact a client.md | Untitled | BUSINESS/KNOWLEDGE/HOWTO/Contact a client.md | Contact a client | EN | Filename already EN, but YAML `title: Untitled` is wrong — fix title only (rename column kept for tracking) |

---

## Notes requiring translation only (filename already EN or proper-noun OK)

These notes have PL or PL+EN body prose; filenames stay as is. Translate body during Phase 2.

| Current path | Current title | Body language | Notes |
|---|---|---|---|
| LIFE/TOOLS/Pstryk.md | Pstryk | PL | Polish energy vendor (proper noun) — keep filename, expand title to `Pstryk — Polish dynamic-pricing electricity vendor` |
| LIFE/KNOWLEDGE/INFO/Obsidian.md | Obsidian | PL+EN mix | First paragraph PL, rest EN; translate PL portions |
| BUSINESS/KNOWLEDGE/INFO/Process Mapping.md | Process Mapping | PL | Body fully PL despite EN title and summary |
| BUSINESS/KNOWLEDGE/INFO/AI 70-20-10 Rule.md | AI 70-20-10 Rule | PL | EN title, fully PL body |
| BUSINESS/KNOWLEDGE/INFO/Autonomous Sales Agent Playbook.md | Autonomous Sales Agent Playbook | PL+EN mix | Headers EN, paragraphs PL |
| BUSINESS/NOTES/El Padre Case Study.md | El Padre Case Study | PL (probable) | "El Padre" is the project proper noun — keep, translate body |
| AI/NOTES/Hackathon Hacknation.md | Hackathon Hacknation | PL | PL prose throughout |
| AI/KNOWLEDGE/INFO/GPT Image 2 + Seedance Workflow.md | GPT Image 2 + Seedance 2 Workflow | PL+EN mix | Heavy PL with EN tech terms |
| AI/KNOWLEDGE/INFO/Building Claude Skills Guide.md | Building Claude Skills Guide | PL+EN mix | Tooling EN, prose PL |
| AI/KNOWLEDGE/INFO/DELEGATE-52.md | DELEGATE-52 | PL+EN mix | Methodology paragraphs PL |
| AI/KNOWLEDGE/INFO/Progressive Disclosure.md | Progressive Disclosure | EN | Body looks EN-clean — verify in Phase 2 (likely already-EN, listed here as safety) |
| AI/KNOWLEDGE/INFO/Token Optimization for Claude Code.md | Token Optimization for Claude Code | PL+EN mix | PL prose, EN tool names |
| AI/KNOWLEDGE/INFO/AI UX Design Tools.md | AI UX Design Tools | PL+EN mix | PL framing paragraphs |
| AI/TOOLS/Agent Zero.md | Agent Zero | PL+EN mix | PL prose around EN install snippets |
| AI/TOOLS/Space Agent.md | Space Agent | PL+EN mix | Same pattern as Agent Zero |
| AI/TOOLS/gstack.md | gstack | PL+EN mix | PL framing, EN install |
| AI/TOOLS/Hermes Agent.md | Hermes Agent | PL+EN mix | PL prose |
| AI/TOOLS/Superpowers.md | Superpowers | PL+EN mix | PL prose |
| AI/TOOLS/Paperclip.md | Paperclip | PL+EN mix | PL prose |
| AI/TOOLS/Vercel Skills.md | Vercel Skills | PL+EN mix | PL prose |
| AI/TOOLS/Ruflo.md | Ruflo | PL+EN mix | PL prose |
| AI/TOOLS/LightRAG.md | LightRAG | PL+EN mix | PL prose |
| AI/TOOLS/UX RULER.md | UX RULER | PL+EN mix | PL framing |
| AI/TOOLS/UX Pilot.md | UX Pilot | PL+EN mix | PL framing |
| AI/TOOLS/UI UX Pro Max.md | UI UX Pro Max | PL+EN mix | PL framing |
| AI/TOOLS/Everything Claude Code.md | Everything Claude Code | PL+EN mix | PL framing |
| AI/TOOLS/Open Design.md | Open Design | PL+EN mix | PL framing |
| AI/TOOLS/Archon.md | Archon | PL+EN mix | PL prose |
| AI/TOOLS/Awesome Nano Banana Pro Prompts.md | Awesome Nano Banana Pro Prompts | PL+EN mix | PL prose |
| AI/TOOLS/Awesome Agent Skills.md | Awesome Agent Skills | PL+EN mix | PL prose |
| AI/TOOLS/Awesome Claude Code.md | Awesome Claude Code | PL+EN mix | PL prose |
| AI/TOOLS/Claude Code Best Practice.md | Claude Code Best Practice | PL+EN mix | PL prose |
| AI/TOOLS/Graphify.md | Graphify | PL+EN mix | PL prose |
| AI/TOOLS/CLI-Anything.md | CLI-Anything | EN+PL mix | Mostly EN with light PL — verify Phase 2 |
| AI/TOOLS/Claude Peers MCP.md | Claude Peers MCP | PL+EN mix | PL prose |
| AI/TOOLS/Karpathy Skills.md | Karpathy Skills | PL+EN mix | PL prose |
| CODE/TOOLS/Marp.md | Marp | PL+EN mix | PL prose |
| CODE/TOOLS/Marpit.md | Marpit | PL+EN mix | PL prose |
| CODE/TOOLS/Awesome Design MD.md | Awesome Design MD | PL+EN mix | PL prose |
| CODE/TOOLS/Scrapling.md | Scrapling | PL+EN mix | PL prose |
| CODE/TOOLS/OPSX Workflow.md | OPSX Workflow | PL+EN mix | PL prose |
| CODE/KNOWLEDGE/HOWTO/Claude Code Marp Workflow.md | Claude Code Marp Workflow | PL+EN mix | PL prose |
| CODE/KNOWLEDGE/INFO/Spec-driven SEO and GEO.md | Spec-driven SEO and GEO | PL+EN mix | PL prose |
| PROJECTS/Projects.md | Projects | PL+EN mix | "Archiwum poprzednich projektów" — single PL line |
| PROJECTS/ARCHIVE/Drug Temperature Control System.md | Drug Temperature Control System | PL | Placeholder body in PL ("do uzupelnienia", "Powiazane:") |
| PROJECTS/ARCHIVE/Genti Retail.md | Genti Retail | PL | Same placeholder pattern |
| PROJECTS/ARCHIVE/Work attendance management system.md | Work attendance management system | PL | Same placeholder pattern |
| TRAVELS/TRIPS/2024 07 Bieszczady.md | 2024 07 Bieszczady | PL | Polish trip planning prose + PL map labels |
| TRAVELS/TRIPS/2025 07 Beskidy.md | 2025 07 Beskidy | PL | Polish trip planning prose |

Note: `LIFE/BOOKS/Sapiens. Od zwierząt do bogów.md` body is mostly already EN — only the filename + title are PL. Listed under rename+translate because the title change is non-trivial.

---

## Already fully English (no changes)

Count: ~172

| folder | count |
|---|---|
| ABOUT | 11 |
| ABOUT/HABITS | 1 |
| ABOUT/Roles | 8 |
| AI/KNOWLEDGE/INFO | 6 (Agentic Coding, AI Agent Security, AI Trends 2026, Context Engineering, Harness Engineering, LLM Knowledge Bases, Skills 2.0 Testing, Specification-Driven Development) |
| AI/TOOLS | 6 (Agent Skills, Autoresearch, Claude Code, Cursor, NemoClaw, VAPI) |
| BUSINESS/BOOKS | 5 |
| BUSINESS/KNOWLEDGE/HOWTO | 9 (all EN; "Contact a client" title-only fix) |
| BUSINESS/KNOWLEDGE/INFO | 3 (Build in Public, Data Maturity Model, LinkedIn Strategy, Product-Market Fit) |
| BUSINESS/TOOLS | 11 |
| CODE/KNOWLEDGE/HOWTO | 7 |
| CODE/KNOWLEDGE/INFO | 1 (AI Chatbots Architecture) |
| CODE/TOOLS | 16 |
| CRYPTO/KNOWLEDGE/INFO | 2 (Bitcoin, CEX) |
| CRYPTO/NOTES | 7 |
| KNOWLEDGES/QUOTES | 8 |
| LIFE/BOOKS | 8 |
| LIFE/KNOWLEDGE/HOWTO | 6 |
| LIFE/KNOWLEDGE/INFO | 19 |
| LIFE/NOTES | 3 |
| LIFE/TOOLS | 11 |
| NOCODE/KNOWLEDGE/HOWTO | 1 |
| NOCODE/KNOWLEDGE/INFO | 1 |
| PROJECTS (root + active) | 7 (Brain, PLSoft, Qamera AI, Value Builders, Value Builders Tribe, ShareFund, PULS) |
| PROJECTS/AGENTIC-SYSTEMS | 5 (all EN bodies; verified) |
| PROJECTS/ARCHIVE | 2 (Untitled = AI Trends 2026 video — EN body; AutomationHouse) |
| TRAVELS | 2 |
| TRAVELS/TOOLS | 1 (Ventusky) |
| TRAVELS/TRIPS | 3 (2022 Iceland October, 2023 Albania June, 2023 Greece January — bodies EN) |
| templates/ | 15 (all EN; quote template uses literal `#todo/replace`) |
| STYL_PISANIA_ANALIZA.md | 1 — **fully PL**, but flagged as Phase 3 meta file (writing-style analysis) — out of Phase 2 scope per task description |

Counts above are approximate per-folder buckets; exact split is rename+translate=6, translate-only=47, already-EN=172 (=225 total).

---

## Decisions log

1. **Polish proper nouns kept as filenames.** Vendor/brand/proper-noun titles like `Pstryk`, `El Padre Case Study`, `PLSoft`, `Hacknation`, `Włam się do mózgu`, Polish trip names (`Bieszczady`, `Beskidy`) keep their filenames. Wikilinks already work; renaming would break references for no semantic gain. Title field gets an EN parenthetical where helpful (e.g., Pstryk).

2. **Polish common-noun filenames renamed.** `Stan rynku krypto 2026` → `Crypto Market State 2026` and `Trendy 2026` → `AI Trends 2026 Notes`. These are descriptive headings, not proper nouns; EN improves discoverability.

3. **Polish-edition vs English-edition books.** `Sapiens. Od zwierząt do bogów` → canonical EN edition title `Sapiens. A Brief History of Humankind`. `Zaprojektuj swoją przyszłość` → original EN `Design Your Future` (Brian Tracy). `Włam się do mózgu` has no EN edition (Radek Kotarski) — kept verbatim.

4. **PL summary field ≠ PL body.** Several notes (e.g., `Process Mapping`, `Agentic AI Repos`, `agentic-ai-system`) have PL/PL+EN summary in frontmatter but EN body. Conversely, several tools have EN summary but PL body. Sampled body content directly to classify — do not trust summary as proxy.

5. **EN title + PL body is the most common pattern.** Roughly all 2026 ingested AI/TOOLS notes have EN titles (matching repo slugs) but Polish prose body. This batch is mechanical translation work for Phase 2 — no filename or title changes needed.

6. **Placeholder notes (#todo/complete).** Three PROJECTS/ARCHIVE placeholder notes have only `Notatka do uzupelnienia. / Powiazane: [[ShareFund]]`. Translate strings to EN (`Note to be completed. / Related: [[ShareFund]]`) — trivial.

7. **`Untitled` files.** Two notes carry the literal title `Untitled`:
   - `BUSINESS/KNOWLEDGE/HOWTO/Contact a client.md` — filename is fine, only fix `title:` to `Contact a client`.
   - `PROJECTS/ARCHIVE/Untitled.md` (actually `AI Trends 2026` video summary) — rename file + title to `AI Trends 2026 Notes` (already EN body); this is the same row as the `Trendy 2026` row above (catalog label confusion noted).

8. **Templates and STYL_PISANIA_ANALIZA.** Templates are EN already. `STYL_PISANIA_ANALIZA.md` is fully Polish and itself describes the writing style — treat as Phase 3 meta file (rename to `WRITING_STYLE_ANALYSIS.md`?) — flagged for user decision.

9. **2024/2025 Bieszczady/Beskidy trips.** Filenames kept (`2024 07 Bieszczady`, `2025 07 Beskidy`) because Bieszczady/Beskidy are Polish toponyms (proper nouns). Body prose is PL and needs translation.

10. **Out-of-scope ambiguity.** Task says "exclude `_outputs/`" but several catalog summaries reference `_outputs/answers/2026-05-16_PRD-z-analizy-i-oferty` which has a Polish filename. Per scope, untouched.

---

## Scope ambiguities noted

- `STYL_PISANIA_ANALIZA.md` placement: task says "include", but also "translate meta files" is Phase 3 — kept in glossary but not counted in rename/translate buckets.
- The catalog lists `KNOWLEDGES/QUOTES/Untitled` style entries that don't actually exist — catalog `entries: 130` vs vault-map `total_notes: 225` reflects partial reindex; counts above use the 225 figure.
- `PROJECTS/ARCHIVE/Trendy 2026.md` exists on disk per `ls`, but catalog has no entry for it; catalog has `Untitled` instead — listed both as same item.
