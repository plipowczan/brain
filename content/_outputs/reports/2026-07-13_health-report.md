---
title: "Vault Health Report — 2026-07-13"
date: 2026-07-13
type: basic-note
tags: ["report", "lint", "health"]
agent-created: true
summary: "Lint audit of 361 notes: broken links, orphans, stale, stubs, tag hygiene, TODO markers, type compliance."
---

# Vault Health Report — 2026-07-13

Scanned **361** markdown notes under `content/` (excl. `_raw`, `_indexes`, `_outputs`, `templates`, `_graveyard`).

## Summary counts

| Class | Count | Severity |
|-------|------:|----------|
| Missing `date:` | 1 | high |
| Broken wikilinks (raw) | 55 | med |
| Non-standard `type:` | 8 | med |
| Missing `tags:` | 9 | med |
| Stub notes (<220c body) | 14 | med |
| Orphan notes (0 incoming) | 39 | low |
| Stale (>1yr, unreviewed) | 71 | low |
| TODO markers | 36 | low |
| Missing `summary:` | 1 | low |

Of the 55 raw broken-link hits, **28 are genuine missing-note links**; the rest are asset embeds (18), prose illustrations (6), and skill-name refs (3) — mostly non-actionable.

## 1. Broken wikilinks — actionable (28)

Genuine links to notes that don't exist:

- AI/KNOWLEDGE/HOWTO/Machine Setup Manifest.md -> [[browser-use]]
- AI/KNOWLEDGE/INFO/10 Free GitHub Repos That Replace Paid Tools.md -> [[Camofox Browser\|Camofox]]
- AI/KNOWLEDGE/INFO/10 Free GitHub Repos That Replace Paid Tools.md -> [[Fincept Terminal\|Fincept]]
- AI/KNOWLEDGE/INFO/10 Free GitHub Repos That Replace Paid Tools.md -> [[HyperFrames\|Hyperframes]]
- AI/KNOWLEDGE/INFO/4 Claude Code Upgrades for Making Money (Nate Herk).md -> [[user-prefers-verified-research]]
- AI/KNOWLEDGE/INFO/Software 3.0.md -> [[Agent Skills\|little "skill"]]
- AI/KNOWLEDGE/INFO/Software 3.0.md -> [[Context Engineering\|context window]]
- AI/KNOWLEDGE/INFO/Software 3.0.md -> [[Context Engineering\|context]]
- AI/TOOLS/DESIGN MD Spec.md -> [[Frontend Design]]
- AI/TOOLS/OpenKB.md -> [[PageIndex]]
- AI/TOOLS/OpenKB.md -> [[PageIndex]]
- AI/TOOLS/OpenWiki.md -> [[PageIndex]]
- AI/TOOLS/Personal AI Infrastructure.md -> [[Second Brain]]
- AI/TOOLS/Santander AI Open Source.md -> [[Loop Engineering\|Ralph loop]]
- AI/TOOLS/Unlimited-OCR.md -> [[PageIndex]]
- AI/TOOLS/Voicebox.md -> [[Pulse]]
- CODE/KNOWLEDGE/HOWTO/Claude Code Marp Workflow.md -> [[Goal-Driven Execution]]
- CODE/TOOLS/Tailwind CSS.md -> [[shadcn/ui]]
- CODE/TOOLS/Tailwind CSS.md -> [[shadcn/ui]]
- LIFE/BOOKS/Dopamine Detox.md -> [[Gosia Lipowczan]]
- LIFE/BOOKS/Dopamine Detox.md -> [[Meurisse Thibaut]]
- LIFE/BOOKS/The Mental Toughness Handbook.md -> [[Damon Zahariades]]
- LIFE/KNOWLEDGE/INFO/Stoicism.md -> [[LIFE/BOOKS]]
- LIFE/TOOLS/Pstryk.md -> [[Michał Szafrański]]
- PROJECTS/ARCHIVE/AH/PULS.md -> [[templates/puls_end]]
- PROJECTS/ARCHIVE/SHAREFUND/ShareFund.md -> [[PROJECTS/Hospital Logistics]]
- PROJECTS/Projects.md -> [[PROJECTS/ARCHIVE/AH/AutomationHouse|Automation House]]
- _index.md -> [[ARTICLES/Articles]]

### Recurring gap
`[[PageIndex]]` referenced from 3+ tool notes (OpenKB, OpenWiki, Unlimited-OCR) but no note exists → candidate to **create** as a stub, or delink.

### Quick fixes
- `[[shadcn/ui]]` (Tailwind CSS ×2) → `[[shadcn-ui]]` (slash breaks resolution; note exists).
- `[[Second Brain]]` (Personal AI Infrastructure) → `[[Second Brain Design]]` or `[[Building a Second Brain]]`.

### Non-actionable (informational)
- **Asset embeds (18)** — `*_MD5.*` images, `Pasted image *`, `.json`: attachments not under `content/` (pre-existing; fine if assets live in ATTACHMENTS/ or are intentionally external).
- **Prose illustrations (6)** — e.g. `[[goals]]`, `[[wikilinks]]`, `[[path/to/file]]`: literal examples in text, not real links.
- **Skill-name refs (3)** — `[[refactor]]`, `[[ingest]]`, `[[reindex]]`: point at skills, not content notes.

## 2. Non-standard `type:` (8)

Allowed: basic-note, book-note, knowledge-note, tool, compiled-note, answer-note.

- KNOWLEDGES/QUOTES/By failing to prepare you are preparing to fail.md (type=quote-note)
- KNOWLEDGES/QUOTES/Hofstadter's law.md (type=quote)
- KNOWLEDGES/QUOTES/Importance and urgency.md (type=quote)
- KNOWLEDGES/QUOTES/In this world, nothing is certain except death and taxes.md (type=quote)
- KNOWLEDGES/QUOTES/Not everyone gets the opportunity to be stressed.md (type=quote)
- KNOWLEDGES/QUOTES/Parkinson's law.md (type=quote-note)
- KNOWLEDGES/QUOTES/Think for yourself and question authority.md (type=quote)
- LIFE/KNOWLEDGE/INFO/Cornel Notes Taking System.md (type=dailyjournal)

→ `quote` / `quote-note` / `dailyjournal` are in use but not in the CLAUDE.md allow-list. Decide: add them to the allow-list, or normalise (`quote`/`quote-note` → a single `quote-note`).

## 3. Missing frontmatter fields

**Missing `date:` (1)** — HIGH, breaks sort/stale logic:
- _index.md

**Missing `tags:` (9):**
- _index.md
- BUSINESS/BOOKS/Amp It Up.md
- BUSINESS/KNOWLEDGE/HOWTO/How to convert pdf to Goodle Docs or Word.md
- LIFE/BOOKS/Design Your Future.md
- LIFE/BOOKS/Dopamine Detox.md
- LIFE/BOOKS/Learn Like a Pro.md
- LIFE/BOOKS/The Mental Toughness Handbook.md
- TRAVELS/TRIPS/2024 07 Bieszczady.md
- TRAVELS/TRIPS/2025 07 Beskidy.md

**Missing `summary:` (1):**
- _index.md

## 4. Stub notes (14)

Very short body (<220 chars of prose) — candidates to enhance or retire:

- ABOUT/CLIFTONSTRENGTHS.md (185c)
- ABOUT/Roles/Father.md (109c)
- ABOUT/Roles/Husband.md (76c)
- ABOUT/Roles/Roles.md (176c)
- ABOUT/Roles/Son.md (150c)
- BUSINESS/BOOKS/Millionaire Fastlane.md (128c)
- CRYPTO/NOTES/My web3.md (136c)
- KNOWLEDGES/QUOTES/Not everyone gets the opportunity to be stressed.md (162c)
- KNOWLEDGES/QUOTES/Quotes.md (84c)
- LIFE/KNOWLEDGE/HOWTO/How to learn.md (118c)
- PROJECTS/ARCHIVE/Drug Temperature Control System.md (22c)
- PROJECTS/ARCHIVE/Genti Retail.md (22c)
- PROJECTS/ARCHIVE/Work attendance management system.md (22c)
- TRAVELS/My travels.md (48c)

## 5. Tag hygiene — near-duplicates (15)

- case: Airtable:1 / airtable:2
- case: Make:1 / make:2
- sing/plur: algorithm:1 vs algorithms:1
- sing/plur: book:14 vs books:2
- sing/plur: design-system:3 vs design-systems:2
- sing/plur: exchange:1 vs exchanges:1
- sing/plur: influencer:1 vs influencers:2
- sing/plur: investment:7 vs investments:8
- sing/plur: meeting:1 vs meetings:1
- sing/plur: principle:1 vs principles:1
- sing/plur: project:19 vs projects:4
- sing/plur: quote:7 vs quotes:1
- sing/plur: spec:2 vs specs:4
- sing/plur: tool:154 vs tools:4
- sing/plur: travel:1 vs travels:1

→ Clear wins: `Airtable`→`airtable`, `Make`→`make` (case dups). Singular/plural pairs mostly reflect genuine distinct tags (`book` vs `books`, `tool` vs `tools`, `project` vs `projects`) — consider consolidating `design-system`/`design-systems` and `investment`/`investments`.

## 6. TODO markers (36)
- ABOUT/My career path.md
- AI/KNOWLEDGE/HOWTO/Machine Setup Manifest.md
- AI/KNOWLEDGE/INFO/High-Signal AI Voices to Follow (2026).md
- BUSINESS/BOOKS/Millionaire Fastlane.md
- BUSINESS/KNOWLEDGE/HOWTO/Contact a client.md
- BUSINESS/KNOWLEDGE/HOWTO/How to send emails directly from Free Airtable using Sendgrid extension.md
- BUSINESS/KNOWLEDGE/HOWTO/React when employee doesn't do what he is supposed to.md
- BUSINESS/KNOWLEDGE/HOWTO/Test email rating.md
- BUSINESS/TOOLS/Notion.md
- CODE/KNOWLEDGE/HOWTO/Export git logs to file.md
- CODE/TOOLS/Excalidraw.md
- CODE/TOOLS/OpenSpec.md
- CRYPTO/KNOWLEDGE/INFO/CEX.md
- CRYPTO/NOTES/Cosmos.md
- CRYPTO/NOTES/Filecoin.md
- CRYPTO/NOTES/My Crypto Strategy.md
- INVESTMENTS/My Investment Strategy.md
- LIFE/BOOKS/Design Your Future.md
- LIFE/BOOKS/Sapiens. A Brief History of Humankind.md
- LIFE/KNOWLEDGE/HOWTO/How to create a task for delegation.md
- LIFE/KNOWLEDGE/INFO/Cold shower.md
- LIFE/KNOWLEDGE/INFO/Glucose Spikes and Performance.md
- LIFE/KNOWLEDGE/INFO/Gratitude.md
- LIFE/KNOWLEDGE/INFO/Hashimoto and Diet.md
- LIFE/KNOWLEDGE/INFO/Intermittent Fasting.md
- LIFE/KNOWLEDGE/INFO/Jordan Petersons 12 rules for life.md
- LIFE/KNOWLEDGE/INFO/Mindfulness Meditation.md
- LIFE/KNOWLEDGE/INFO/Trust.md
- LIFE/NOTES/Programmer and what's next.md
- LIFE/TOOLS/Obsidian.md
- LIFE/TOOLS/Windows.md
- PROJECTS/ARCHIVE/Drug Temperature Control System.md
- PROJECTS/ARCHIVE/Genti Retail.md
- PROJECTS/ARCHIVE/Work attendance management system.md
- TRAVELS/TRIPS/2023 Albania June.md
- WRITING_STYLE_ANALYSIS.md

## 7. Orphan notes — 0 incoming wikilinks (39)

Not linked from any other note (some are hubs/entrypoints, which is expected):

- ABOUT/What tools I use.md
- AI/KNOWLEDGE/INFO/40 AI Prompts for Expert Output.md
- AI/NOTES/Hackathon Hacknation.md
- AI/TOOLS/CLI-Anything.md
- BUSINESS/KNOWLEDGE/HOWTO/How to convert multiselect field into a 'link to another table field'.md
- BUSINESS/KNOWLEDGE/HOWTO/How to convert pdf to Goodle Docs or Word.md
- BUSINESS/KNOWLEDGE/HOWTO/How to instantly trigger Make scenario on row created event from Airtable free plan.md
- BUSINESS/KNOWLEDGE/HOWTO/React when employee doesn't do what he is supposed to.md
- BUSINESS/KNOWLEDGE/HOWTO/Synchronize Airtable with Webflow.md
- BUSINESS/KNOWLEDGE/HOWTO/Test email rating.md
- BUSINESS/KNOWLEDGE/INFO/Data Maturity Model.md
- CODE/KNOWLEDGE/HOWTO/Apple-style Animations with AI.md
- CODE/KNOWLEDGE/HOWTO/How to set Hugo RSS feed.md
- CODE/TOOLS/Redoc.md
- INVESTMENTS/BOOKS/The Intelligent Investor.md
- INVESTMENTS/BOOKS/The Psychology of Money.md
- KNOWLEDGES/QUOTES/By failing to prepare you are preparing to fail.md
- KNOWLEDGES/QUOTES/Hofstadter's law.md
- KNOWLEDGES/QUOTES/Importance and urgency.md
- KNOWLEDGES/QUOTES/In this world, nothing is certain except death and taxes.md
- KNOWLEDGES/QUOTES/Not everyone gets the opportunity to be stressed.md
- KNOWLEDGES/QUOTES/Parkinson's law.md
- KNOWLEDGES/QUOTES/Quotes.md
- KNOWLEDGES/QUOTES/Think for yourself and question authority.md
- LIFE/KNOWLEDGE/HOWTO/How to clean desktop on Windows.md
- LIFE/KNOWLEDGE/HOWTO/How to download webm video from URL (html page).md
- LIFE/NOTES/Programmer and what's next.md
- LIFE/TOOLS/OneNote.md
- LIFE/TOOLS/Pstryk.md
- LIFE/TOOLS/TextExpander.md
- LIFE/TOOLS/Windows.md
- NOCODE/KNOWLEDGE/HOWTO/Lead Generation Pipeline.md
- NOCODE/KNOWLEDGE/INFO/Automation Tool Selection.md
- PROJECTS/ARCHIVE/AH/PULS.md
- PROJECTS/ARCHIVE/AI Trends 2026 Notes.md
- TRAVELS/TRIPS/2023 Albania June.md
- TRAVELS/TRIPS/2023 Greece January.md
- WRITING_STYLE_ANALYSIS.md
- _index.md

## 8. Stale content (71)

`date:` >1 year old with no `agent-reviewed:` in the last year. Most are legacy 2022-2023 personal/book notes that don't need agent review — low priority. Full list:

- ABOUT/Bucket list.md (date=2022-09-12)
- ABOUT/Building a Second Brain.md (date=2022-09-15)
- ABOUT/CLIFTONSTRENGTHS.md (date=2023-01-08)
- ABOUT/DISC.md (date=2022-09-12)
- ABOUT/HABITS/Habits.md (date=2022-08-22)
- ABOUT/How i read books.md (date=2022-09-07)
- ABOUT/I have a business and not business has me.md (date=2022-09-07)
- ABOUT/Motivation system for my kids.md (date=2022-09-11)
- ABOUT/Roles/Father.md (date=2022-08-21)
- ABOUT/Roles/Husband.md (date=2022-08-21)
- ABOUT/Roles/Roles.md (date=2022-08-21)
- BUSINESS/BOOKS/Amp It Up.md (date=2025-04-06)
- BUSINESS/BOOKS/Millionaire Fastlane.md (date=2022-09-18)
- BUSINESS/BOOKS/The Inevitable.md (date=2023-01-08)
- BUSINESS/BOOKS/The One Thing.md (date=2022-09-16)
- BUSINESS/KNOWLEDGE/HOWTO/Contact a client.md (date=2022-12-12)
- BUSINESS/KNOWLEDGE/HOWTO/How to convert multiselect field into a 'link to another table field'.md (date=2022-09-05)
- BUSINESS/KNOWLEDGE/HOWTO/How to convert pdf to Goodle Docs or Word.md (date=2023-12-16)
- BUSINESS/KNOWLEDGE/HOWTO/How to instantly trigger Make scenario on row created event from Airtable free plan.md (date=2022-12-02)
- BUSINESS/KNOWLEDGE/HOWTO/How to send emails directly from Free Airtable using Sendgrid extension.md (date=2023-05-17)
- BUSINESS/KNOWLEDGE/HOWTO/React when employee doesn't do what he is supposed to.md (date=2023-08-17)
- BUSINESS/KNOWLEDGE/HOWTO/Synchronize Airtable with Webflow.md (date=2022-09-21)
- BUSINESS/KNOWLEDGE/HOWTO/Test email rating.md (date=2022-09-21)
- CODE/KNOWLEDGE/HOWTO/Common workflow I use in dotnet projects using Azure DevOps.md (date=2022-10-27)
- CODE/KNOWLEDGE/HOWTO/Export git logs to file.md (date=2022-09-13)
- CODE/KNOWLEDGE/HOWTO/How to deal with pull request merge conflicts.md (date=2022-10-27)
- CODE/KNOWLEDGE/HOWTO/How to set Hugo RSS feed.md (date=2022-10-30)
- CRYPTO/KNOWLEDGE/INFO/CEX.md (date=2023-03-06)
- CRYPTO/NOTES/Cosmos.md (date=2022-09-10)
- CRYPTO/NOTES/Crypto Exchanges.md (date=2022-09-11)
- CRYPTO/NOTES/Filecoin.md (date=2022-09-10)
- CRYPTO/NOTES/Influencers.md (date=2022-09-11)
- CRYPTO/NOTES/My web3.md (date=2022-09-11)
- CRYPTO/NOTES/Polygon.md (date=2022-09-10)
- CRYPTO/NOTES/What mistakes I made on the crypto market in 2021-2022.md (date=2022-09-01)
- LIFE/BOOKS/Atomic habits.md (date=2022-09-16)
- LIFE/BOOKS/Building a Second Brain.md (date=2022-09-15)
- LIFE/BOOKS/How to take smart notes.md (date=2022-09-05)
- LIFE/BOOKS/Miracle morning.md (date=2022-08-21)
- LIFE/KNOWLEDGE/HOWTO/How to clean desktop on Windows.md (date=2022-11-07)
- LIFE/KNOWLEDGE/HOWTO/How to create a task for delegation.md (date=2022-10-19)
- LIFE/KNOWLEDGE/HOWTO/How to create mind map.md (date=2022-09-13)
- LIFE/KNOWLEDGE/HOWTO/How to download webm video from URL (html page).md (date=2022-12-02)
- LIFE/KNOWLEDGE/HOWTO/How to learn.md (date=2022-09-13)
- LIFE/KNOWLEDGE/HOWTO/When to exercise.md (date=2023-02-07)
- LIFE/KNOWLEDGE/INFO/5 Minute Journal.md (date=2022-08-22)
- LIFE/KNOWLEDGE/INFO/5 second rule.md (date=2025-04-06)
- LIFE/KNOWLEDGE/INFO/6 life tips from Kevin Kelly.md (date=2022-10-09)
- LIFE/KNOWLEDGE/INFO/Cold shower.md (date=2023-02-02)
- LIFE/KNOWLEDGE/INFO/Cornel Notes Taking System.md (date=2022-08-21)
- LIFE/KNOWLEDGE/INFO/DISC.md (date=2022-09-12)
- LIFE/KNOWLEDGE/INFO/Eisenhower Matrix.md (date=2023-01-04)
- LIFE/KNOWLEDGE/INFO/Gratitude.md (date=2023-02-08)
- LIFE/KNOWLEDGE/INFO/Jordan Petersons 12 rules for life.md (date=2022-10-09)
- LIFE/KNOWLEDGE/INFO/Mind map.md (date=2022-09-13)
- LIFE/KNOWLEDGE/INFO/Pareto principle.md (date=2023-01-04)
- LIFE/KNOWLEDGE/INFO/Pomodoro.md (date=2022-10-28)
- LIFE/KNOWLEDGE/INFO/Quartz.md (date=2022-09-01)
- LIFE/KNOWLEDGE/INFO/The Tale of the Old Man and His Son's Journey.md (date=2023-09-17)
- LIFE/KNOWLEDGE/INFO/Trust.md (date=2023-09-17)
- LIFE/KNOWLEDGE/INFO/Zettelkasten.md (date=2022-08-28)
- LIFE/NOTES/Programmer and what's next.md (date=2022-09-18)
- LIFE/NOTES/Reading list.md (date=2022-08-28)
- PROJECTS/ARCHIVE/AH/PULS.md (date=2022-08-24)
- PROJECTS/ARCHIVE/SHAREFUND/ShareFund.md (date=2022-08-22)
- TRAVELS/My travels.md (date=2023-01-08)
- TRAVELS/TRIPS/2022 Iceland October.md (date=2022-08-28)
- TRAVELS/TRIPS/2023 Albania June.md (date=2023-07-16)
- TRAVELS/TRIPS/2023 Greece January.md (date=2023-01-07)
- TRAVELS/TRIPS/2024 07 Bieszczady.md (date=2024-06-25)
- TRAVELS/TRIPS/2025 07 Beskidy.md (date=2025-06-19)

## Recommended actions (priority order)

1. **HIGH** — fix the 1 missing `date:` (breaks stale/sort logic).
2. **MED** — repair the 2 quick-fix broken links (`shadcn/ui`, `Second Brain`); decide on `[[PageIndex]]` (create stub vs delink from 3 notes).
3. **MED** — resolve `type:` allow-list (add quote/dailyjournal to CLAUDE.md, or normalise).
4. **MED** — fill missing `tags:` (9 notes) and stub bodies (14 notes) via `/enhance`.
5. **LOW** — tag case-dedup (`Airtable`/`Make`); triage orphans via `/gaps`; stale list is mostly benign.

_Report generated by `/lint`._
