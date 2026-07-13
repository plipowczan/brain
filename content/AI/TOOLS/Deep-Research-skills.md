---
title: "Deep-Research-skills"
date: 2026-07-12
enableToc: true
openToc: true
tags: ["tool", "ai", "research", "deep-research", "claude-code", "agent-skills", "open-source", "mit"]
type: tool
source: ".claude/skills/research*/ (adapted from Weizhena/Deep-Research-skills)"
agent-created: true
agent-reviewed: 2026-07-12
summary: "The upstream repo behind this vault's /research* skill suite — a 5-skill schema-first deep-research pipeline (outline → parallel deep dive → matrix report)."
---
# Deep-Research-skills

The open-source repo that this vault's `/research`, `/research-add-items`, `/research-add-fields`, `/research-deep` and `/research-report` skills were adapted from. It is a **structured, comparative deep-research pipeline** for coding agents: give it a topic, it builds a matrix of *N research items × M fields*, fills every cell in parallel from the web, and compiles a report. Built for technology selection, benchmark surveys, competitive/market analysis — anything that wants a **table, not an essay**.

> **Origin traced.** The suite came in as a folder named `research-en` (the English variant of a bilingual repo) — commit `b209a3c3` *"add research-en suite from Deep-Research-skills (5 sub-skills)"*, later flattened in `2c63769d` because Claude Code only detects skills one level deep at `.claude/skills/<name>/SKILL.md`.

## 🗒️ What it is

- **Repo:** [Weizhena/Deep-Research-skills](https://github.com/Weizhena/Deep-Research-skills) — GitHub, MIT license, ~1.6k★.
- **Bilingual:** English primary + a Chinese `README.zh.md`. The residue is still visible in the local code — `validate_json.py` and `/research-report` carry a `CATEGORY_MAPPING` that reconciles CN/EN category keys (`technical_features` ↔ `technical_characteristics` ↔ `Technical Features`).
- **Cross-harness:** ships variants for Claude Code, OpenCode and Codex (Codex uses `web-researcher.toml` instead of the `web-search-agent`).
- **Lineage:** the upstream README credits the **RhinoInsight** paper for its human-in-the-loop control mechanism (per-README, not independently verified here).
- **Two-phase philosophy:** a cheap, extensible *outline* phase followed by an expensive *parallel deep* phase, then a deterministic *report* — with a user-confirmation gate at every stage.

## 🧩 The five skills (the pipeline)

| # | Skill | Command | Role |
|---|-------|---------|------|
| 1 | `research` | `/research <topic>` | Build the outline — items list + field schema |
| 2 | `research-add-items` | `/research-add-items` | Append more research objects to `outline.yaml` |
| 3 | `research-add-fields` | `/research-add-fields` | Append more field definitions to `fields.yaml` |
| 4 | `research-deep` | `/research-deep` | Launch one background agent per item → structured JSON |
| 5 | `research-report` | `/research-report` | Merge all JSON → markdown matrix report |

Skills 2 and 3 are optional refinement loops — you can re-open and extend an outline before (or between) deep runs.

## ⚙️ How it works

**Phase 1 — Outline (`/research`).** Seeds an items list + field framework from model knowledge, then launches a `web-search-agent` to supplement missing items and fields within a user-chosen time range. Everything is confirmed via `AskUserQuestion`, then written as two files:
- `outline.yaml` — `topic`, `items[]`, and an `execution` block (`batch_size` = parallel agents, `items_per_agent`, `output_dir`).
- `fields.yaml` — field categories, each field's `name` / `description` / `detail_level` (`brief → moderate → detailed`), plus a reserved `uncertain` list.

**Phase 2 — Deep dive (`/research-deep`).** Batches the items by `batch_size` (with an approval gate before each next batch) and dispatches one **background agent per item batch**. Each agent reads `fields.yaml`, writes `{item}.json` covering every field, marks unknowns as `[uncertain]`, and must pass `validate_json.py` before its task counts as done. Task output is disabled — the file *is* the result. **Resume is built in**: already-completed JSON files are skipped on re-run.

**Phase 3 — Report (`/research-report`).** Generates a one-off `generate_report.py` that reads every JSON + `fields.yaml` and emits `report.md`: a table-of-contents (item anchors + user-selected summary metrics like `github_stars` / `swe_bench_score`) over a by-category detail section. It handles both flat and nested JSON, the multilingual category map, and **skips any `[uncertain]` value**.

### Why the design holds up

- **Schema-first.** `fields.yaml` is a shared contract, so every parallel agent emits the *same* shape → a uniform, comparable matrix instead of drifting free-form prose.
- **Anti-fabrication net.** `[uncertain]` marking + the `validate_json.py` coverage gate (required fields must be present) + report-skips-uncertain = the pipeline leaves a cell blank rather than inventing it.
- **Token economy.** One item per sub-agent, each writing to its own file with task output off, keeps the main thread's context small — [[Progressive Disclosure]] applied to research.
- **Human-in-the-loop.** Confirmation gates on items, field framework, time range, batch size, and each deep batch keep a human steering a long, expensive run.

## 🔧 How it was adapted into this brain

- **Flattened** out of the `research-en/` wrapper so Claude Code discovers the skills (`2c63769d`).
- **Workspace rewired** to `content/_raw/research-workspaces/{topic_slug}/` — under `_raw`, so working files (`outline.yaml`, `fields.yaml`, `results/*.json`, `generate_report.py`) never deploy to the Quartz site.
- **Brain-specific promotion step** (not in upstream): `/research-report` Step 5 copies the finished report to `content/_raw/inbox/{date}-research-{slug}.md` with Obsidian frontmatter (`type: compiled-note`, `tags: [research, compiled]`), so `/ingest` can classify it into a real topic folder and update the three indexes.
- **Dependency now vendored.** The deep phase dispatches a `web-search-agent` (+ 5 `web-search-modules`), which is now installed at `.claude/agents/` (vendored from upstream, MIT). Its module-load path and `research-deep`'s `validate_json.py` call were rewritten from `~/.claude/…` to **project-relative** paths so the suite is self-contained — no global install needed. Mirrored into `kb-template/.claude/agents/` for template clones.

## ☘️ Role — where it fits among the vault's research tools

This is one of three research primitives here, each for a different shape of question:

| Tool | Sources | Output | Use when |
|------|---------|--------|----------|
| `/qa` | Existing vault notes only (no web) | Synthesized answer, cited wikilinks | "What do my notes already say about X?" |
| `/deep-research` (Superpowers) | Web fan-out + adversarial verify | One cited **narrative** report | A deep, fact-checked argument on a single question |
| **`/research*` (this)** | Web, schema-driven, parallel | A **matrix** report (N items × M fields) → `/ingest` | Comparing many options on the same axes |

So it earns its place whenever the deliverable is a *comparison table* — technology selection, benchmark round-ups, competitive/market scans, academic surveys. It is the front of a pipeline that ends in `/ingest` and a finished `compiled-note` in a topic folder.

**Already shipped from this pipeline in the vault:**
- [[TTS Engines Comparison (Polish)]] — 19 TTS engines × quality/cost.
- [[Social Media Algorithms — Maximizing Reach in 2026]] — 17 reach surfaces × 19 dimensions.
- [[PRD Methodologies and Templates]].

## 🔗 Related

- [[Agent Skills]] · [[Awesome Agent Skills]] — the format and ecosystem this ships in.
- [[Progressive Disclosure]] · [[Context Engineering]] · [[Harness Engineering]] — the design principles it embodies.
- [[Autoresearch]] — Karpathy's autonomous overnight-experiment framing; the same "agent runs research for you" ambition, aimed at ML experiments rather than comparison matrices.
- [[Brain]] — this vault, where the promoted reports land.

## 📖 Resources

- Repo: https://github.com/Weizhena/Deep-Research-skills (MIT, ~1.6k★)
- Local skills: `.claude/skills/research/`, `research-add-items/`, `research-add-fields/`, `research-deep/`, `research-report/`
- Validation script: `.claude/skills/research/validate_json.py`

---
Template: [[templates/tool]]
