# KB Template — Plan B: Onboarding Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a guided `/onboard` flow to `kb-template/` that personalizes the generic foundation — turning parameterized brain templates (`CLAUDE.template.md`, `WRITING_STYLE.template.md`, `AGENTS.template.md`) into final files via a deterministic renderer, scaffolding topic folders, and auto-loading the vault map each session.

**Architecture:** A small Python renderer (`render.py`) substitutes `{{UPPER_SNAKE}}` placeholders and resolves `<!-- IF:flag -->…<!-- /IF:flag -->` conditional blocks from a JSON values file. The `onboard` skill conducts an interview (AskUserQuestion), writes the answers to `.kb-onboard.json`, calls `render.py` on the three `.template.md` files, creates topic folders, and runs the existing `reindex` script. A SessionStart hook prints `vault-map.md` into context on every session.

**Tech Stack:** Python 3 (renderer + hook, stdlib only — no new deps), Claude Code skills/commands/hooks, Markdown templates.

**Depends on:** Plan A (`kb-template/` foundation). Spec: `docs/superpowers/specs/2026-06-15-kb-template-design.md`. Personalization mechanism = **A: placeholder replacement** (deterministic).

**Scope note:** Plan C (refactor, gaps, schema, self-tests) is separate. This plan's `CLAUDE.template.md` lists the skills that exist after Plans A+B (it does NOT yet list `refactor`/`gaps`); Plan C appends those rows to the workflows table.

---

## File Structure (created/modified by this plan)

```
kb-template/
├─ CLAUDE.template.md                         # NEW — parameterized brain
├─ AGENTS.template.md                         # NEW — cross-tool mirror
├─ README.md                                  # MODIFY — document /onboard
├─ .claude/
│  ├─ settings.json                           # NEW — SessionStart hook
│  ├─ hooks/load_vault_map.py                 # NEW — prints vault-map into context
│  ├─ commands/onboard.md                     # NEW — slash command
│  └─ skills/onboard/
│      ├─ SKILL.md                            # NEW — interview + scaffold workflow
│      └─ scripts/
│          ├─ render.py                       # NEW — template renderer
│          └─ test_render.py                  # NEW — renderer tests (TDD)
└─ content/
   └─ WRITING_STYLE.template.md               # NEW — generic writing style
```

**Canonical onboarding variables** (the complete set `render.py` must satisfy; the templates use ONLY these):
`KB_NAME`, `KB_OWNER`, `PRIMARY_LANGUAGE`, `MAIN_BRANCH`, `TOPIC_TABLE` (pre-rendered markdown rows), `NOTE_TYPES` (comma list), `VOICE_PERSON`, `VOICE_FORMALITY` (strings), and boolean flag `emoji_headings` (used by an IF-block in the writing-style template).

**Working directory for commands:** repo root `C:\Projects\brain` unless a step says `cd kb-template`. `python` may be `python3` — try `python` first.

---

### Task 1: Template renderer `render.py` (TDD)

**Files:**
- Create: `kb-template/.claude/skills/onboard/scripts/test_render.py`
- Create: `kb-template/.claude/skills/onboard/scripts/render.py`

- [ ] **Step 1: Write the failing tests**

Create `kb-template/.claude/skills/onboard/scripts/test_render.py`:

```python
import json
import subprocess
import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import render  # noqa: E402


class TestSubstitute(unittest.TestCase):
    def test_simple_substitution(self):
        self.assertEqual(render.render("Hello {{NAME}}", {"NAME": "World"}), "Hello World")

    def test_multiple_vars(self):
        out = render.render("{{A}}-{{B}}-{{A}}", {"A": "x", "B": "y"})
        self.assertEqual(out, "x-y-x")

    def test_non_string_value_coerced(self):
        self.assertEqual(render.render("n={{N}}", {"N": 3}), "n=3")

    def test_missing_var_raises(self):
        with self.assertRaises(render.RenderError):
            render.render("Hello {{MISSING}}", {"NAME": "x"})


class TestConditionals(unittest.TestCase):
    def test_if_true_keeps_block(self):
        tmpl = "a<!-- IF:flag -->B<!-- /IF:flag -->c"
        self.assertEqual(render.render(tmpl, {"flag": True}), "aBc")

    def test_if_false_drops_block(self):
        tmpl = "a<!-- IF:flag -->B<!-- /IF:flag -->c"
        self.assertEqual(render.render(tmpl, {"flag": False}), "ac")

    def test_false_block_with_unknown_var_is_safe(self):
        # block removed BEFORE var substitution, so {{GONE}} never errors
        tmpl = "x<!-- IF:flag -->{{GONE}}<!-- /IF:flag -->y"
        self.assertEqual(render.render(tmpl, {"flag": False}), "xy")

    def test_missing_flag_raises(self):
        with self.assertRaises(render.RenderError):
            render.render("<!-- IF:flag -->z<!-- /IF:flag -->", {})

    def test_multiline_block(self):
        tmpl = "head\n<!-- IF:on -->\nline1\nline2\n<!-- /IF:on -->\ntail"
        out = render.render(tmpl, {"on": True})
        self.assertIn("line1", out)
        self.assertIn("line2", out)
        self.assertNotIn("IF:on", out)


class TestCli(unittest.TestCase):
    def test_cli_renders_file(self):
        here = Path(__file__).resolve().parent
        import tempfile
        with tempfile.TemporaryDirectory() as d:
            d = Path(d)
            (d / "t.md").write_text("Hi {{NAME}}", encoding="utf-8")
            (d / "v.json").write_text(json.dumps({"NAME": "Ada"}), encoding="utf-8")
            out = d / "out.md"
            r = subprocess.run(
                [sys.executable, str(here / "render.py"),
                 "--template", str(d / "t.md"),
                 "--values", str(d / "v.json"),
                 "--out", str(out)],
                capture_output=True, text=True,
            )
            self.assertEqual(r.returncode, 0, r.stderr)
            self.assertEqual(out.read_text(encoding="utf-8"), "Hi Ada")

    def test_cli_missing_var_exits_nonzero(self):
        here = Path(__file__).resolve().parent
        import tempfile
        with tempfile.TemporaryDirectory() as d:
            d = Path(d)
            (d / "t.md").write_text("Hi {{MISSING}}", encoding="utf-8")
            (d / "v.json").write_text("{}", encoding="utf-8")
            r = subprocess.run(
                [sys.executable, str(here / "render.py"),
                 "--template", str(d / "t.md"),
                 "--values", str(d / "v.json"),
                 "--out", str(d / "out.md")],
                capture_output=True, text=True,
            )
            self.assertNotEqual(r.returncode, 0)
            self.assertIn("MISSING", r.stderr)


if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `cd /c/Projects/brain/kb-template && python .claude/skills/onboard/scripts/test_render.py -v`
Expected: FAIL — `ModuleNotFoundError: No module named 'render'` (render.py does not exist yet).

- [ ] **Step 3: Implement `render.py`**

Create `kb-template/.claude/skills/onboard/scripts/render.py`:

```python
#!/usr/bin/env python3
"""Render a brain template by substituting {{VAR}} placeholders and resolving
<!-- IF:flag --> ... <!-- /IF:flag --> conditional blocks from a values dict.

Run ONLY on the brain templates (CLAUDE.template.md, WRITING_STYLE.template.md,
AGENTS.template.md) — never on content/templates/*, which use Obsidian's own
{{title}} placeholders.

Usage:
  python render.py --template PATH --values VALUES.json --out PATH

Behaviour:
  - Conditional blocks are resolved FIRST: the inner text is kept iff the flag's
    value in the values dict is truthy; the markers are stripped either way.
    A block whose flag is missing from the values dict is an error.
  - Then every remaining {{KEY}} is replaced by str(values[KEY]); a {{KEY}} with
    no matching value is an error (we fail loud rather than ship a half-filled
    file). Because false blocks are removed first, {{vars}} that live only inside
    a dropped block never trigger this error.
"""
from __future__ import annotations

import argparse
import json
import re
import sys

VAR = re.compile(r"\{\{([A-Z_][A-Z0-9_]*)\}\}")


class RenderError(Exception):
    pass


def resolve_conditionals(text: str, values: dict) -> str:
    block = re.compile(r"<!-- IF:([A-Za-z_][A-Za-z0-9_]*) -->(.*?)<!-- /IF:\1 -->", re.DOTALL)

    def repl(m: "re.Match") -> str:
        flag = m.group(1)
        if flag not in values:
            raise RenderError(f"conditional flag not in values: {flag}")
        return m.group(2) if values[flag] else ""

    # loop until no blocks remain (handles multiple sibling blocks; no nesting)
    prev = None
    while prev != text:
        prev = text
        text = block.sub(repl, text)
    return text


def substitute(text: str, values: dict) -> str:
    missing = []

    def repl(m: "re.Match") -> str:
        key = m.group(1)
        if key not in values:
            missing.append(key)
            return m.group(0)
        return str(values[key])

    out = VAR.sub(repl, text)
    if missing:
        raise RenderError("missing values for: " + ", ".join(sorted(set(missing))))
    return out


def render(text: str, values: dict) -> str:
    return substitute(resolve_conditionals(text, values), values)


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description="Render a brain template.")
    ap.add_argument("--template", required=True)
    ap.add_argument("--values", required=True)
    ap.add_argument("--out", required=True)
    args = ap.parse_args(argv)

    with open(args.template, encoding="utf-8") as f:
        text = f.read()
    with open(args.values, encoding="utf-8") as f:
        values = json.load(f)

    try:
        out = render(text, values)
    except RenderError as e:
        print(f"render error: {e}", file=sys.stderr)
        return 2

    with open(args.out, "w", encoding="utf-8") as f:
        f.write(out)
    print(f"rendered {args.template} -> {args.out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
```

- [ ] **Step 4: Run the tests to verify they pass**

Run: `cd /c/Projects/brain/kb-template && python .claude/skills/onboard/scripts/test_render.py -v`
Expected: all tests PASS (`OK`).

- [ ] **Step 5: Commit**

```bash
cd /c/Projects/brain
git add kb-template/.claude/skills/onboard/scripts/render.py kb-template/.claude/skills/onboard/scripts/test_render.py
git commit -m "feat(kb-template): add template renderer with tests (onboard engine)"
```

---

### Task 2: `CLAUDE.template.md` (parameterized brain)

**Files:**
- Create: `kb-template/CLAUDE.template.md`

- [ ] **Step 1: Write `kb-template/CLAUDE.template.md`**

````markdown
# CLAUDE.md

## Role

You are the **Knowledge Base Agent** for {{KB_OWNER}}'s knowledge base, "{{KB_NAME}}" —
an Obsidian-style markdown vault. You ingest raw sources, compile articles, maintain
navigation indexes, answer questions, lint for quality, and enhance notes. {{KB_OWNER}}
rarely edits notes directly — that is your domain. You have full autonomy to create and
edit notes.

Primary language: **{{PRIMARY_LANGUAGE}}** (keep established technical terms in English).

## Project Overview

- An Obsidian-style vault of markdown notes under `content/`.
- **No publishing pipeline** — this base is for *managing* knowledge, not publishing it.
- Always work on the `{{MAIN_BRANCH}}` branch.

## Directory Structure

| Directory | Purpose | In vault index? |
|-----------|---------|:-:|
{{TOPIC_TABLE}}
| `/content/_raw/inbox/` | Drop zone for source documents | No |
| `/content/_raw/processed/` | Archive of ingested sources | No |
| `/content/_indexes/` | Auto-maintained navigation indexes | No |
| `/content/_outputs/answers/` | Saved Q&A results | No |
| `/content/_outputs/reports/` | Lint/health reports | No |
| `/content/templates/` | Note templates | No |

Sub-patterns within topics: `BOOKS/`, `TOOLS/`, `KNOWLEDGE/INFO/`, `KNOWLEDGE/HOWTO/`,
`NOTES/`. Each external repo/tool gets its own `tool` note in the matching topic folder.

## Navigation Protocol (Progressive Disclosure)

Three index files exist. Read them in order, stopping when you have enough info.

### Level 0: `_indexes/vault-map.md` — read FIRST on every operation
Bird's-eye view: folder table (note counts, types, top tags), tag cloud, last 10 changes.
Always fits in context.

### Level 1: `_indexes/catalog.md` — read for search/navigation
One line per note: `- **Title** | type | date | [tags] | summary | → link-targets or -`.
Read only the folder sections you need.

### Level 2: `_indexes/graph.md` — read for link traversal
Outgoing and incoming wikilinks per note. Read only when following link chains.

### Navigation Rules
1. ALWAYS read `vault-map.md` first for any KB operation.
2. For search: scan vault-map tags/folders → read matching sections of `catalog.md`.
3. For a specific note: find entry in `catalog.md` → read the note.
4. For related notes: read `graph.md` → follow link chains.
5. NEVER grep the entire `content/` directory — use indexes first.
6. If any index is missing or stale: run a full reindex before proceeding.

### Auto-Update Rules (after EVERY write)
After creating or editing ANY note, update indexes IMMEDIATELY — don't defer.

- **On create:** add the catalog entry line; increment the folder count and update
  top-tags + Recent Changes in vault-map; add outgoing links and update incoming links
  for targets in graph.
- **On edit:** update the catalog entry; update vault-map Recent Changes and top-tags if
  changed; recompute outgoing links and affected incoming links in graph.
- **On delete:** remove from all three indexes, decrement counts, clean up incoming links.

You may also run the deterministic rebuild: `python .claude/skills/reindex/scripts/build_indexes.py`.

## Writing Style

**Read `content/WRITING_STYLE.md` before writing content.** Core rules live there
(voice, headings, wikilink conventions, Resources section).

## Frontmatter

```yaml
---
title: "Note Title"
date: YYYY-MM-DD
enableToc: true
openToc: true
tags: ["tag1", "tag2"]
type: {{NOTE_TYPES}}
# Optional agent fields:
source: "_raw/inbox/filename.md"
agent-created: true
agent-reviewed: YYYY-MM-DD
summary: "One-line description for indexes"
---
```

## Workflows

Each workflow is a skill with a matching slash command:

- **ONBOARD** (`/onboard`) — interview + scaffold a fresh knowledge base from the template.
- **INGEST** (`/ingest`) — process raw sources / YouTube URLs into wiki notes.
- **COMPILE** (`/compile`) — synthesize a new article from existing notes.
- **ENHANCE** (`/enhance`) — improve a single note; fill gaps; add wikilinks.
- **REINDEX** (`/reindex`) — rebuild the three indexes.
- **Q&A** (`/qa`) — answer a question from the vault, citing notes.
- **LINT** (`/lint`) — audit vault health.
- **OUTPUT** (`/output`) — generate a report/summary.

## Safety Rules

- Never modify `.obsidian/` or `.claude/` internals unless the task is about them.
- Never delete user-authored content without confirmation.
- Always preserve existing frontmatter when editing.
- Always add `agent-created: true` to new notes.
- Always update indexes after every write.
- Always work on the `{{MAIN_BRANCH}}` branch.
````

- [ ] **Step 2: Verify the template uses only canonical variables and has no leftover publish refs**

Run:
```bash
grep -oE "\{\{[A-Z_]+\}\}" kb-template/CLAUDE.template.md | sort -u
grep -niE "quartz|github pages|brain\.lipowczan|deploy" kb-template/CLAUDE.template.md || echo "NO-PUBLISH-REFS"
```
Expected: the variable list is a subset of `{{KB_OWNER}} {{KB_NAME}} {{PRIMARY_LANGUAGE}} {{MAIN_BRANCH}} {{TOPIC_TABLE}} {{NOTE_TYPES}}`; and `NO-PUBLISH-REFS`.

- [ ] **Step 3: Commit**

```bash
git add kb-template/CLAUDE.template.md
git commit -m "feat(kb-template): add parameterized CLAUDE.template.md brain"
```

---

### Task 3: `WRITING_STYLE.template.md` (generic writing style)

**Files:**
- Create: `kb-template/content/WRITING_STYLE.template.md`

- [ ] **Step 1: Write `kb-template/content/WRITING_STYLE.template.md`**

````markdown
# Writing Style

Primary language: **{{PRIMARY_LANGUAGE}}** (keep established technical terms in English).

## Voice

- Write in {{VOICE_PERSON}}.
- Tone: {{VOICE_FORMALITY}}.
- Be concrete. Prefer short sentences and active voice. Cut filler.

## Structure

- Open with the main point; don't bury it.
- Use hierarchical headings and bulleted lists over long paragraphs.
- End substantial notes with a **Resources** / further-reading section.
- One idea per note. Split when a note tries to cover two things.

<!-- IF:emoji_headings -->
## Heading emoji convention

Use a leading emoji on section headings to signal their role:
🚀 main message · 🎨 impressions · ☘️ impact · ✍️ quotes · 📒 summary ·
🗒️ description · 🔗 links · 🧩 features · 📖 further reading.

This is a convention, not a mandate — drop it for notes where it doesn't fit.
<!-- /IF:emoji_headings -->

## Wikilinks

- Link related notes with `[[Note Name]]`, using the shortest unambiguous form.
- Add a folder path only when two notes share a title.
- The link text must match the target note's filename — that is how links resolve.

## TODO markers

- `#todo` — needs attention.
- `#todo/replace` — placeholder text to replace.
- `#todo/complete` — unfinished section.
````

- [ ] **Step 2: Verify variables + conditional block**

Run:
```bash
grep -oE "\{\{[A-Z_]+\}\}" kb-template/content/WRITING_STYLE.template.md | sort -u
grep -c "IF:emoji_headings" kb-template/content/WRITING_STYLE.template.md
```
Expected: variables are a subset of `{{PRIMARY_LANGUAGE}} {{VOICE_PERSON}} {{VOICE_FORMALITY}}`; the `IF:emoji_headings` marker appears twice (open + close).

- [ ] **Step 3: Commit**

```bash
git add kb-template/content/WRITING_STYLE.template.md
git commit -m "feat(kb-template): add generic WRITING_STYLE.template.md"
```

---

### Task 4: `AGENTS.template.md` (cross-tool mirror)

**Files:**
- Create: `kb-template/AGENTS.template.md`

- [ ] **Step 1: Write `kb-template/AGENTS.template.md`**

````markdown
# AGENTS.md

This file mirrors the project's agent instructions for tools that read `AGENTS.md`
(e.g. Codex, Gemini CLI) instead of `CLAUDE.md`.

**The authoritative instructions live in `CLAUDE.md`. Read it and follow it.**

## Quick summary

- This is "{{KB_NAME}}", a knowledge base owned by {{KB_OWNER}}.
- It is an Obsidian-style markdown vault under `content/`. No publishing pipeline.
- Primary language: {{PRIMARY_LANGUAGE}}. Work on the `{{MAIN_BRANCH}}` branch.
- Before any vault operation, read `content/_indexes/vault-map.md` first
  (progressive disclosure — see `CLAUDE.md` → "Navigation Protocol").
- After every note write, update the three indexes (or run
  `python .claude/skills/reindex/scripts/build_indexes.py`).
- Follow `content/WRITING_STYLE.md` when writing notes.
````

- [ ] **Step 2: Verify variables**

Run: `grep -oE "\{\{[A-Z_]+\}\}" kb-template/AGENTS.template.md | sort -u`
Expected: subset of `{{KB_NAME}} {{KB_OWNER}} {{PRIMARY_LANGUAGE}} {{MAIN_BRANCH}}`.

- [ ] **Step 3: Commit**

```bash
git add kb-template/AGENTS.template.md
git commit -m "feat(kb-template): add AGENTS.template.md cross-tool mirror"
```

---

### Task 5: SessionStart hook (auto-load vault map)

**Files:**
- Create: `kb-template/.claude/hooks/load_vault_map.py`
- Create: `kb-template/.claude/settings.json`

- [ ] **Step 1: Write `kb-template/.claude/hooks/load_vault_map.py`**

```python
#!/usr/bin/env python3
"""SessionStart hook: print the vault map so the agent has it in context from the
start (enforces the progressive-disclosure protocol in CLAUDE.md). Output on stdout
is injected as session context by Claude Code."""
import os
import sys

root = os.environ.get("CLAUDE_PROJECT_DIR") or os.getcwd()
path = os.path.join(root, "content", "_indexes", "vault-map.md")

try:
    with open(path, encoding="utf-8") as f:
        sys.stdout.write(f.read())
except FileNotFoundError:
    sys.stdout.write(
        "No content/_indexes/vault-map.md yet. "
        "Run /onboard (new vault) or /reindex to build the navigation indexes.\n"
    )
```

- [ ] **Step 2: Write `kb-template/.claude/settings.json`**

```json
{
  "hooks": {
    "SessionStart": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "python \"$CLAUDE_PROJECT_DIR/.claude/hooks/load_vault_map.py\""
          }
        ]
      }
    ]
  }
}
```

- [ ] **Step 3: Verify the hook script prints the vault map**

Run:
```bash
cd /c/Projects/brain/kb-template
CLAUDE_PROJECT_DIR="$(pwd)" python .claude/hooks/load_vault_map.py | head -5
```
Expected: prints the start of the real `vault-map.md` (a line containing `Vault Map` and/or the `## Folders` table). Then confirm the missing-file branch:
```bash
cd /tmp && CLAUDE_PROJECT_DIR="/tmp" python /c/Projects/brain/kb-template/.claude/hooks/load_vault_map.py
```
Expected: the "No content/_indexes/vault-map.md yet…" message.

- [ ] **Step 4: Verify settings.json is valid JSON**

Run: `python -c "import json; json.load(open('kb-template/.claude/settings.json')); print('VALID-JSON')"`
Expected: `VALID-JSON`.

- [ ] **Step 5: Commit**

```bash
cd /c/Projects/brain
git add kb-template/.claude/hooks/load_vault_map.py kb-template/.claude/settings.json
git commit -m "feat(kb-template): SessionStart hook auto-loads vault map"
```

---

### Task 6: `onboard` skill + slash command

**Files:**
- Create: `kb-template/.claude/skills/onboard/SKILL.md`
- Create: `kb-template/.claude/commands/onboard.md`

- [ ] **Step 1: Write `kb-template/.claude/skills/onboard/SKILL.md`**

````markdown
---
name: onboard
description: Use when starting a fresh knowledge base from this template, or when the user says "onboard", "set up my KB", "initialize", "rozpocznij". Interviews the user, personalizes the brain (CLAUDE.md, WRITING_STYLE.md, AGENTS.md), scaffolds topic folders, and builds the indexes.
---

# ONBOARD

## When to use

A fresh clone of the KB template. Detect by the presence of `CLAUDE.template.md`
in the repo root. If `CLAUDE.template.md` is absent, the vault is already
initialized — report "already initialized" and offer to **reconfigure** by
re-running the interview from the saved `.kb-onboard.json` (Phase 4), rather than
clobbering existing files.

## Workflow

Four phases. Phase 1 interviews (one question at a time). Phases 2–4 run with the
collected answers.

### Phase 1 — Interview (use AskUserQuestion, ONE question at a time)

Collect, in order:
1. **KB name** and **owner** (free text).
2. **Primary language** (e.g. English / Polish / other).
3. **Topics/domains** — the top-level subject folders (e.g. `AI`, `BUSINESS`,
   `HEALTH`). Capture a short list.
4. **Note types** in use (default: `basic-note`, `knowledge-note`, `tool`,
   `book-note`, `answer-note`; let them add/remove).
5. **Voice**: person (first-person vs neutral) and formality (e.g. "direct and
   practical"); and whether to keep the **emoji-in-headings** convention (yes/no).
6. **Main branch** name (default `main`).

### Phase 2 — Prereq check (non-blocking)

Probe and print a ✅/⚠️ table:
- `python --version` (required for reindex/lint/render).
- `yt-dlp --version` (optional — only for YouTube ingest).
- `ffmpeg -version` (optional — Whisper fallback).
Warn on missing; do not abort.

### Phase 3 — Scaffold (deterministic)

1. **Build the values file** `.kb-onboard.json` at the repo root from the answers.
   Map answers to the canonical variables:
   - `KB_NAME`, `KB_OWNER`, `PRIMARY_LANGUAGE`, `MAIN_BRANCH`, `VOICE_PERSON`,
     `VOICE_FORMALITY` — direct strings.
   - `NOTE_TYPES` — the chosen types joined as `basic-note | knowledge-note | ...`.
   - `emoji_headings` — boolean from the emoji answer.
   - `TOPIC_TABLE` — pre-render the topic rows as markdown table lines, one per
     topic, in the exact form:
     `| `/content/TOPIC/` | <one-line purpose> | Yes |`
     (newline-separated; this whole block becomes the value of `TOPIC_TABLE`).

2. **Render the three brain files** with `render.py`:
   ```bash
   python .claude/skills/onboard/scripts/render.py --template CLAUDE.template.md          --values .kb-onboard.json --out CLAUDE.md
   python .claude/skills/onboard/scripts/render.py --template AGENTS.template.md          --values .kb-onboard.json --out AGENTS.md
   python .claude/skills/onboard/scripts/render.py --template content/WRITING_STYLE.template.md          --values .kb-onboard.json --out content/WRITING_STYLE.md
   ```
   If any render exits non-zero, STOP and show the error (a missing value means an
   interview answer wasn't captured) — fix the values and re-render. Do not delete
   the templates until all three renders succeed.

3. **Delete the templates** once all renders succeed:
   `CLAUDE.template.md`, `AGENTS.template.md`, `content/WRITING_STYLE.template.md`.

4. **Create the topic folders** from the answers under `content/` (e.g.
   `content/AI/`, `content/BUSINESS/`), each with a `.gitkeep` so it is tracked.

5. **Offer to delete the example** `content/REFERENCE/` folder and the sample
   `content/_raw/inbox/sample-source.md` (ask: keep as a tutorial, or remove). Act
   on the answer.

6. **Prune note templates** in `content/templates/` to the chosen note types
   (e.g. remove `book.md` if `book-note` was dropped).

7. **Rebuild the indexes** so they match the new structure:
   `python .claude/skills/reindex/scripts/build_indexes.py`.

### Phase 4 — Handoff

Print a short "what now":
- Drop a file in `content/_raw/inbox/` then run `/ingest`.
- Ask a question with `/qa`.
- Run `/lint` for a health check.
Summarize the created topic folders and the personalized files.

## Idempotence

`.kb-onboard.json` is the saved answer set. On a re-run when `CLAUDE.template.md`
is gone, offer **reconfigure**: re-read `.kb-onboard.json`, let the user adjust
answers, and re-render — but warn before overwriting an existing `CLAUDE.md`,
`AGENTS.md`, or `content/WRITING_STYLE.md`.
````

- [ ] **Step 2: Write `kb-template/.claude/commands/onboard.md`**

```markdown
Use the `onboard` skill to interview the user and set up this knowledge base from the template.
```

- [ ] **Step 3: Verify the skill frontmatter and command**

Run:
```bash
head -4 kb-template/.claude/skills/onboard/SKILL.md
cat kb-template/.claude/commands/onboard.md
```
Expected: SKILL.md frontmatter has `name: onboard` and a `description:`; the command file references the onboard skill.

- [ ] **Step 4: Commit**

```bash
cd /c/Projects/brain
git add kb-template/.claude/skills/onboard/SKILL.md kb-template/.claude/commands/onboard.md
git commit -m "feat(kb-template): add onboard skill and slash command"
```

---

### Task 7: Update README to document `/onboard`

**Files:**
- Modify: `kb-template/README.md`

- [ ] **Step 1: Replace the "Quickstart (manual)" section**

In `kb-template/README.md`, replace the entire `## Quickstart (manual)` section
(from the `## Quickstart (manual)` heading down to — but NOT including — the
`## Skills` heading) with:

```markdown
## Quickstart

1. Open this folder in Claude Code.
2. Install script prerequisites: `pip install -r requirements.txt`.
3. Run **`/onboard`** — it interviews you (KB name, owner, topics, language,
   voice) and then personalizes the brain (`CLAUDE.md`, `AGENTS.md`,
   `content/WRITING_STYLE.md`), creates your topic folders, and builds the
   navigation indexes.
4. Start using the vault:
   - Drop a file in `content/_raw/inbox/` and run `/ingest`.
   - Ask `/qa what does this vault say about …`.
   - Run `/lint` for a health check.

> Prefer to set things up by hand? You can skip `/onboard`, rename the
> `*.template.md` files yourself, and edit the `{{PLACEHOLDERS}}` directly.
```

- [ ] **Step 2: Add the `/onboard` row to the Skills table**

In the `## Skills` table, immediately after the table header separator row
(`|---------|--------------|`), insert this row as the first data row:

```markdown
| `/onboard` | Interview + scaffold a fresh knowledge base from the template (personalizes the brain, creates topics, builds indexes). |
```

- [ ] **Step 3: Verify**

Run:
```bash
grep -n "onboard" kb-template/README.md
grep -c "Quickstart (manual)" kb-template/README.md
```
Expected: `/onboard` referenced in both the Quickstart and the Skills table; the old "Quickstart (manual)" heading is gone (count `0`).

- [ ] **Step 4: Commit**

```bash
git add kb-template/README.md
git commit -m "docs(kb-template): document /onboard in README quickstart and skill table"
```

---

### Task 8: End-to-end onboarding render verification

Prove the three templates render to valid, placeholder-free files with a realistic
answer set — without running the interactive skill. This is a throwaway dry-run;
do not commit the generated files (they belong to a real onboarding run).

**Files:**
- None committed — verification only.

- [ ] **Step 1: Create a temporary values file and render all three templates**

```bash
cd /c/Projects/brain/kb-template
cat > /tmp/onboard-vals.json <<'JSON'
{
  "KB_NAME": "Demo Brain",
  "KB_OWNER": "Alex",
  "PRIMARY_LANGUAGE": "English",
  "MAIN_BRANCH": "main",
  "VOICE_PERSON": "first person",
  "VOICE_FORMALITY": "direct and practical",
  "NOTE_TYPES": "basic-note | knowledge-note | tool | book-note | answer-note",
  "emoji_headings": true,
  "TOPIC_TABLE": "| `/content/AI/` | AI notes and tools | Yes |\n| `/content/BUSINESS/` | Business and finance | Yes |"
}
JSON
python .claude/skills/onboard/scripts/render.py --template CLAUDE.template.md          --values /tmp/onboard-vals.json --out /tmp/CLAUDE.out.md
python .claude/skills/onboard/scripts/render.py --template AGENTS.template.md          --values /tmp/onboard-vals.json --out /tmp/AGENTS.out.md
python .claude/skills/onboard/scripts/render.py --template content/WRITING_STYLE.template.md          --values /tmp/onboard-vals.json --out /tmp/WRITING_STYLE.out.md
```
Expected: three `rendered … -> …` lines, all exit 0.

- [ ] **Step 2: Assert no unresolved placeholders or stray IF markers remain**

```bash
grep -lE "\{\{[A-Z_]+\}\}|IF:[a-z_]+" /tmp/CLAUDE.out.md /tmp/AGENTS.out.md /tmp/WRITING_STYLE.out.md && echo "LEFTOVER-FOUND" || echo "FULLY-RENDERED"
grep -c "Demo Brain" /tmp/CLAUDE.out.md
grep -c "first person" /tmp/WRITING_STYLE.out.md
grep -c "Heading emoji convention" /tmp/WRITING_STYLE.out.md
```
Expected: `FULLY-RENDERED`; `Demo Brain` present in CLAUDE; `first person` present in writing style; the emoji block present (count `1`) because `emoji_headings` was `true`.

- [ ] **Step 3: Assert the emoji block drops when the flag is false**

```bash
cd /c/Projects/brain/kb-template
python - <<'PY'
import json, subprocess, sys, tempfile, os
vals = json.load(open("/tmp/onboard-vals.json"))
vals["emoji_headings"] = False
p = "/tmp/onboard-vals-noemoji.json"
open(p, "w").write(json.dumps(vals))
subprocess.run([sys.executable, ".claude/skills/onboard/scripts/render.py",
                "--template", "content/WRITING_STYLE.template.md",
                "--values", p, "--out", "/tmp/WS.noemoji.md"], check=True)
txt = open("/tmp/WS.noemoji.md", encoding="utf-8").read()
assert "Heading emoji convention" not in txt, "emoji block should be absent"
assert "{{" not in txt, "no placeholders should remain"
print("EMOJI-BLOCK-DROPPED-OK")
PY
```
Expected: `EMOJI-BLOCK-DROPPED-OK`.

- [ ] **Step 4: Clean up temp files (nothing to commit)**

```bash
rm -f /tmp/onboard-vals.json /tmp/onboard-vals-noemoji.json /tmp/CLAUDE.out.md /tmp/AGENTS.out.md /tmp/WRITING_STYLE.out.md /tmp/WS.noemoji.md
git -C /c/Projects/brain status --short kb-template
```
Expected: no uncommitted changes under `kb-template` (verification produced only temp files outside the repo).

---

## Self-Review

**Spec coverage (Plan B subset of `2026-06-15-kb-template-design.md`):**
- §5.1 `CLAUDE.template.md` parameterized, publish section removed — Task 2 ✓
- §5.2 mechanism A deterministic renderer — Task 1 ✓
- §5.3 `WRITING_STYLE.template.md` generic + emoji as suggested default (conditional) — Task 3 ✓
- §6 `onboard` skill: interview / prereq check / scaffold / handoff / idempotence — Task 6 ✓ (interview is agent-run; render engine + reindex are scripted)
- §7 SessionStart hook + `AGENTS.md` mirror — Tasks 5, 4 ✓
- §8 README documents `/onboard` — Task 7 ✓

**Deferred to Plan C (stated in header):** `refactor`/`gaps` rows in the CLAUDE workflows table; `schema.yml`; skill self-tests. Task 2's workflows list intentionally omits refactor/gaps.

**Placeholder scan:** No "TBD"/vague steps. `render.py`, `test_render.py`, all template files, the hook, settings.json, and the skill are given in full. Every verify step has an exact command + expected output.

**Type/name consistency:** Canonical variable set (`KB_NAME, KB_OWNER, PRIMARY_LANGUAGE, MAIN_BRANCH, TOPIC_TABLE, NOTE_TYPES, VOICE_PERSON, VOICE_FORMALITY, emoji_headings`) is used identically in `render.py` tests, all three templates, and the onboard skill's values mapping. The renderer's public API (`render`, `RenderError`, `resolve_conditionals`, `substitute`, CLI `--template/--values/--out`) matches between `render.py` and `test_render.py`. The IF-block syntax `<!-- IF:flag -->…<!-- /IF:flag -->` is identical in `render.py`, the writing-style template, and the tests.

**Known acceptable detail:** `render.py`'s `substitute` regex only matches `{{UPPER_SNAKE}}`, so Obsidian's lowercase `{{title}}` placeholders in `content/templates/*` can never be touched even if the renderer were mistakenly pointed at them — but the skill only ever points it at the three brain templates.
