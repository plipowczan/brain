# KB Template — Plan C: Enrichments Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the four enrichments to `kb-template/`: a `refactor` skill (note surgery with link integrity), a `gaps` skill (coverage analysis), a `schema.yml` frontmatter contract enforced by `lint`, and skill self-tests — plus fix the two lint-quality follow-ups deferred from Plan A.

**Architecture:** Two new scripted primitives (`refactor.py`, `gaps.py`) each with TDD unit tests and a thin skill wrapper. `lint_scan.py` is refactored behind a `main()` guard and gains optional `schema.yml` enforcement (unit-tested). `lint_links.py` is hardened to exclude `templates/` and skip code spans. A self-contained `tests/run_tests.py` integration-tests every script against a throwaway temp vault.

**Tech Stack:** Python 3 (stdlib + PyYAML, already a dependency), Claude Code skills/commands, Markdown.

**Depends on:** Plans A + B. Spec: `docs/superpowers/specs/2026-06-15-kb-template-design.md` §4.3.

**Working directory:** repo root `C:\Projects\brain` unless a step says `cd kb-template`. `python` may be `python3`.

---

## File Structure (created/modified by this plan)

```
kb-template/
├─ schema.yml                                           # NEW — frontmatter contract
├─ CLAUDE.template.md                                   # MODIFY — add refactor/gaps rows
├─ README.md                                            # MODIFY — add refactor/gaps rows
├─ .githooks/pre-commit                                 # NEW — opt-in lint gate
├─ .claude/
│  ├─ commands/refactor.md gaps.md                      # NEW
│  └─ skills/
│      ├─ lint/scripts/lint_links.py                    # MODIFY — exclude templates + skip code
│      ├─ lint/scripts/lint_scan.py                     # MODIFY — main() guard + schema
│      ├─ lint/scripts/test_lint_scan.py                # NEW — schema unit tests
│      ├─ refactor/SKILL.md                             # NEW
│      ├─ refactor/scripts/refactor.py                  # NEW (+ test_refactor.py)
│      └─ gaps/SKILL.md                                 # NEW
│         gaps/scripts/gaps.py                          # NEW (+ test_gaps.py)
├─ content/REFERENCE/Wikilinks Explained.md             # MODIFY — revert entity hack
└─ tests/run_tests.py                                   # NEW — integration self-tests
```

---

### Task 1: Harden `lint_links.py` + revert the HTML-entity workaround

**Files:**
- Modify: `kb-template/.claude/skills/lint/scripts/lint_links.py`
- Modify: `kb-template/content/REFERENCE/Wikilinks Explained.md`

- [ ] **Step 1: Show the current broken state (templates flagged as orphans; entity hack present)**

Run:
```bash
cd /c/Projects/brain/kb-template
python .claude/skills/lint/scripts/lint_links.py
grep -n "&#91;" "content/REFERENCE/Wikilinks Explained.md"
```
Expected NOW: `orphans` includes `basic_notes` and `book`; the grep finds the `&#91;&#91;Note Title&#93;&#93;` entity line.

- [ ] **Step 2: Edit `lint_links.py` — exclude `templates`, add code-span stripping**

In `kb-template/.claude/skills/lint/scripts/lint_links.py`:

(a) Change line 4 from:
```python
EXCLUDE_TOP={"_raw","_indexes","_outputs","ATTACHMENTS",".obsidian"}
```
to:
```python
EXCLUDE_TOP={"_raw","_indexes","_outputs","templates","ATTACHMENTS",".obsidian"}
```

(b) Immediately after the `linkre=re.compile(...)` line (currently line 21), add a helper:
```python
def strip_code(t):
    t = re.sub(r'```.*?```', '', t, flags=re.DOTALL)  # fenced blocks
    t = re.sub(r'`[^`\n]*`', '', t)                    # inline spans
    return t
```

(c) In the scan loop, change:
```python
    txt=open(p,encoding="utf-8").read()
    for raw in linkre.findall(txt):
```
to:
```python
    txt=strip_code(open(p,encoding="utf-8").read())
    for raw in linkre.findall(txt):
```

- [ ] **Step 3: Revert the entity hack in `Wikilinks Explained.md` to a clean code span**

In `kb-template/content/REFERENCE/Wikilinks Explained.md`, change the line containing `&#91;&#91;Note Title&#93;&#93;` back to use a normal inline code span. The line should read:

```markdown
Wikilinks are how notes reference each other. They look like `[[Note Title]]`
```

(The `` `[[Note Title]]` `` is now inside a code span, which `strip_code` removes before link scanning, so it will not be flagged as broken.)

- [ ] **Step 4: Rebuild indexes and verify lint_links is clean with no template orphans**

Run:
```bash
cd /c/Projects/brain/kb-template
python .claude/skills/reindex/scripts/build_indexes.py
python .claude/skills/lint/scripts/lint_links.py
grep -c "&#91;" "content/REFERENCE/Wikilinks Explained.md"
```
Expected: `build_indexes` prints `OK notes=2 ...`; `lint_links` prints `"broken": {}` AND `orphans` no longer contains `basic_notes`/`book` (orphan list should be empty `[]` now that templates are excluded and the two notes are mutually linked); entity grep count `0`.

- [ ] **Step 5: Commit**

```bash
cd /c/Projects/brain
git add kb-template/.claude/skills/lint/scripts/lint_links.py "kb-template/content/REFERENCE/Wikilinks Explained.md" kb-template/content/_indexes
git commit -m "fix(kb-template): lint_links skips code spans and excludes templates; restore clean wikilink example"
```

---

### Task 2: `refactor.py` (rename + relink) with tests + skill

**Files:**
- Create: `kb-template/.claude/skills/refactor/scripts/test_refactor.py`
- Create: `kb-template/.claude/skills/refactor/scripts/refactor.py`
- Create: `kb-template/.claude/skills/refactor/SKILL.md`
- Create: `kb-template/.claude/commands/refactor.md`

- [ ] **Step 1: Write the failing tests**

Create `kb-template/.claude/skills/refactor/scripts/test_refactor.py`:

```python
import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import refactor  # noqa: E402


def write(p: Path, text: str):
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(text, encoding="utf-8")


class TestRewriteText(unittest.TestCase):
    def test_plain(self):
        self.assertEqual(refactor.rewrite_text("see [[Old]] here", "Old", "New"), "see [[New]] here")

    def test_alias_preserved(self):
        self.assertEqual(refactor.rewrite_text("[[Old|label]]", "Old", "New"), "[[New|label]]")

    def test_heading_preserved(self):
        self.assertEqual(refactor.rewrite_text("[[Old#sec]]", "Old", "New"), "[[New#sec]]")

    def test_path_form(self):
        self.assertEqual(refactor.rewrite_text("[[FOLDER/Old]]", "Old", "New"), "[[FOLDER/New]]")

    def test_unrelated_untouched(self):
        self.assertEqual(refactor.rewrite_text("[[Other]]", "Old", "New"), "[[Other]]")


class TestRename(unittest.TestCase):
    def _vault(self, d):
        root = Path(d) / "content"
        write(root / "A" / "Old.md", '---\ntitle: "Old"\n---\n# Old\nbody\n')
        write(root / "A" / "Ref.md", 'links [[Old]] and [[Old|alias]] and [[A/Old#h]]\n')
        return str(root)

    def test_rename_moves_file_and_rewrites(self):
        import tempfile
        with tempfile.TemporaryDirectory() as d:
            root = self._vault(d)
            res = refactor.rename("Old", "New", root=root)
            self.assertFalse((Path(root) / "A" / "Old.md").exists())
            self.assertTrue((Path(root) / "A" / "New.md").exists())
            ref = (Path(root) / "A" / "Ref.md").read_text(encoding="utf-8")
            self.assertIn("[[New]]", ref)
            self.assertIn("[[New|alias]]", ref)
            self.assertIn("[[A/New#h]]", ref)
            self.assertNotIn("[[Old", ref)
            moved = (Path(root) / "A" / "New.md").read_text(encoding="utf-8")
            self.assertIn('title: "New"', moved)

    def test_missing_raises(self):
        import tempfile
        with tempfile.TemporaryDirectory() as d:
            root = self._vault(d)
            with self.assertRaises(refactor.RefactorError):
                refactor.rename("Nope", "X", root=root)

    def test_target_exists_raises(self):
        import tempfile
        with tempfile.TemporaryDirectory() as d:
            root = self._vault(d)
            write(Path(root) / "A" / "New.md", "x")
            with self.assertRaises(refactor.RefactorError):
                refactor.rename("Old", "New", root=root)


class TestRelink(unittest.TestCase):
    def test_relink_rewrites_without_renaming(self):
        import tempfile
        with tempfile.TemporaryDirectory() as d:
            root = Path(d) / "content"
            write(root / "A" / "Ref.md", "see [[B]] twice [[B]]\n")
            res = refactor.relink("B", "A", root=str(root))
            ref = (root / "A" / "Ref.md").read_text(encoding="utf-8")
            self.assertEqual(ref.count("[[A]]"), 2)
            self.assertNotIn("[[B]]", ref)


if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run tests, verify they FAIL**

Run: `cd /c/Projects/brain/kb-template && python .claude/skills/refactor/scripts/test_refactor.py -v`
Expected: FAIL — `ModuleNotFoundError: No module named 'refactor'`.

- [ ] **Step 3: Implement `refactor.py`**

Create `kb-template/.claude/skills/refactor/scripts/refactor.py`:

```python
#!/usr/bin/env python3
"""Note surgery with link integrity.

Primitives:
  rename  — rename a note file, rewrite every wikilink that targets it (keeping
            |alias and #heading), and update the note's own `title:`.
  relink  — rewrite wikilink targets across the vault WITHOUT renaming a file
            (used by the refactor skill to merge notes).

Merge and split are orchestrated by the refactor skill on top of these.

Usage:
  python refactor.py rename --old "Old Title" --new "New Title"
  python refactor.py relink --old "Old Title" --new "Target Title"
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys

CONTENT = "content"
EXCLUDE = {"_raw", "_indexes", "_outputs", "templates", ".obsidian", "ATTACHMENTS"}
WIKILINK = re.compile(r"\[\[([^\]]+)\]\]")


class RefactorError(Exception):
    pass


def iter_notes(root=CONTENT):
    for dp, dn, fns in os.walk(root):
        rel = os.path.relpath(dp, root)
        if rel != ".":
            top = rel.split(os.sep)[0]
            if top in EXCLUDE or top.startswith("."):
                dn[:] = []
                continue
        for fn in fns:
            if fn.endswith(".md"):
                yield os.path.join(dp, fn)


def find_note(title, root=CONTENT):
    matches = [p for p in iter_notes(root) if os.path.basename(p)[:-3] == title]
    if not matches:
        raise RefactorError(f"no note titled {title!r}")
    if len(matches) > 1:
        raise RefactorError(f"ambiguous title {title!r}: {sorted(matches)}")
    return matches[0]


def rewrite_link_target(inside, old, new):
    """Given the text inside [[...]], return the rewritten inside if its target
    basename equals `old`, else None (leave untouched)."""
    target = inside
    alias = heading = ""
    if "|" in target:
        target, rest = target.split("|", 1)
        alias = "|" + rest
    if "#" in target:
        target, rest = target.split("#", 1)
        heading = "#" + rest
    base = target.split("/")[-1]
    if base != old:
        return None
    prefix = target[: len(target) - len(base)]
    return f"{prefix}{new}{heading}{alias}"


def rewrite_text(text, old, new):
    def repl(m):
        out = rewrite_link_target(m.group(1), old, new)
        return f"[[{out}]]" if out is not None else m.group(0)
    return WIKILINK.sub(repl, text)


def relink(old, new, root=CONTENT):
    changed = []
    for p in list(iter_notes(root)):
        txt = open(p, encoding="utf-8").read()
        new_txt = rewrite_text(txt, old, new)
        if new_txt != txt:
            open(p, "w", encoding="utf-8").write(new_txt)
            changed.append(p.replace("\\", "/"))
    return {"changed": sorted(set(changed))}


def rename(old, new, root=CONTENT):
    src = find_note(old, root)
    dst = os.path.join(os.path.dirname(src), new + ".md")
    if os.path.exists(dst):
        raise RefactorError(f"target already exists: {dst}")
    changed = []
    for p in list(iter_notes(root)):
        txt = open(p, encoding="utf-8").read()
        new_txt = rewrite_text(txt, old, new)
        if p == src:
            new_txt = re.sub(
                r'(?m)^(title:\s*")' + re.escape(old) + r'(")',
                r"\g<1>" + new + r"\g<2>", new_txt)
        if new_txt != txt:
            open(p, "w", encoding="utf-8").write(new_txt)
            changed.append(p.replace("\\", "/"))
    os.rename(src, dst)
    return {"renamed": [src.replace("\\", "/"), dst.replace("\\", "/")],
            "changed": sorted(set(changed))}


def main(argv=None):
    ap = argparse.ArgumentParser(description="Note surgery with link integrity.")
    sub = ap.add_subparsers(dest="cmd", required=True)
    for name in ("rename", "relink"):
        sp = sub.add_parser(name)
        sp.add_argument("--old", required=True)
        sp.add_argument("--new", required=True)
    args = ap.parse_args(argv)
    try:
        result = rename(args.old, args.new) if args.cmd == "rename" else relink(args.old, args.new)
    except RefactorError as e:
        print(f"refactor error: {e}", file=sys.stderr)
        return 2
    print(json.dumps(result, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
```

- [ ] **Step 4: Run tests, verify they PASS**

Run: `cd /c/Projects/brain/kb-template && python .claude/skills/refactor/scripts/test_refactor.py -v`
Expected: all PASS (`OK`).

- [ ] **Step 5: Write `kb-template/.claude/skills/refactor/SKILL.md`**

````markdown
---
name: refactor
description: Use when the user says "rename note", "move note", "merge notes", "split note", or "refactor [[Note]]". Renames, moves, merges, or splits notes while repairing every wikilink and rebuilding the indexes.
---

# REFACTOR

## When to use

Restructuring notes without breaking wikilinks: rename, move, merge, or split.

Run all commands from the repo root (the scripts resolve `content/` relative to
the current directory). After any operation, rebuild indexes:
`python .claude/skills/reindex/scripts/build_indexes.py`.

## Rename or move

```bash
python .claude/skills/refactor/scripts/refactor.py rename --old "Old Title" --new "New Title"
```
Renames the file, rewrites every `[[Old Title]]` reference (preserving `|alias`
and `#heading`), and updates the note's own `title:`. To **move** a note to a
different folder, run `rename` (if also retitling), then move the file with `git mv`
— wikilinks resolve by filename, so moving the file alone does not break links;
just reindex afterward.

## Merge B into A

1. Append B's body into A (de-duplicate overlapping content).
2. Re-point links: `python .claude/skills/refactor/scripts/refactor.py relink --old "B" --new "A"`.
3. Delete B's file.
4. Reindex.

## Split A into A + C

1. Create the new note C (correct frontmatter) and move the relevant section into it.
2. Add `[[C]]` from A and `[[A]]` from C so the two stay connected.
3. Reindex.

## After every operation

Rebuild indexes and run `/lint` to confirm no broken links were introduced.
````

- [ ] **Step 6: Write `kb-template/.claude/commands/refactor.md`**

```markdown
Use the `refactor` skill to rename, move, merge, or split notes with automatic wikilink repair.
```

- [ ] **Step 7: Commit**

```bash
cd /c/Projects/brain
git add kb-template/.claude/skills/refactor kb-template/.claude/commands/refactor.md
git commit -m "feat(kb-template): add refactor skill (rename/relink note surgery) with tests"
```

---

### Task 3: `gaps.py` with tests + skill

**Files:**
- Create: `kb-template/.claude/skills/gaps/scripts/test_gaps.py`
- Create: `kb-template/.claude/skills/gaps/scripts/gaps.py`
- Create: `kb-template/.claude/skills/gaps/SKILL.md`
- Create: `kb-template/.claude/commands/gaps.md`

- [ ] **Step 1: Write the failing tests**

Create `kb-template/.claude/skills/gaps/scripts/test_gaps.py`:

```python
import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import gaps  # noqa: E402

SAMPLE = """# Link Graph

## Outgoing
A -> B, C
B -> A

## Incoming
A <- B
B <- A
C <- A
"""


class TestParse(unittest.TestCase):
    def test_degree_and_weak(self):
        res = gaps.analyze(SAMPLE)
        # A: out 2 + in 1 = 3 ; B: out 1 + in 1 = 2 ; C: out 0 + in 1 = 1 (weak)
        self.assertEqual(res["nodes"], 3)
        self.assertIn("C", res["weakly_connected"])
        self.assertNotIn("A", res["weakly_connected"])
        self.assertNotIn("B", res["weakly_connected"])

    def test_empty_graph(self):
        res = gaps.analyze("# Link Graph\n\n## Outgoing\n\n## Incoming\n")
        self.assertEqual(res["nodes"], 0)
        self.assertEqual(res["weakly_connected"], [])


if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run tests, verify they FAIL**

Run: `cd /c/Projects/brain/kb-template && python .claude/skills/gaps/scripts/test_gaps.py -v`
Expected: FAIL — `ModuleNotFoundError: No module named 'gaps'`.

- [ ] **Step 3: Implement `gaps.py`**

Create `kb-template/.claude/skills/gaps/scripts/gaps.py`:

```python
#!/usr/bin/env python3
"""Structural gap signals from the vault link graph. Parses
content/_indexes/graph.md to compute per-note link degree and surface
weakly-connected notes (total degree <= 1). The `gaps` skill layers semantic
analysis (missing topics, stale clusters) on top of these signals.

Usage:
  python gaps.py                 # reads content/_indexes/graph.md
  python gaps.py --graph PATH
"""
from __future__ import annotations

import argparse
import json
import os
import sys


def parse_graph(text):
    out_deg, in_deg = {}, {}
    section = None
    for line in text.splitlines():
        s = line.strip()
        low = s.lower()
        if low.startswith("## outgoing"):
            section = "out"; continue
        if low.startswith("## incoming"):
            section = "in"; continue
        if not s or s.startswith("#"):
            continue
        if section == "out" and "->" in s:
            left, right = s.split("->", 1)
            node = left.strip()
            tgts = [t for t in (x.strip() for x in right.split(",")) if t]
            out_deg[node] = out_deg.get(node, 0) + len(tgts)
            in_deg.setdefault(node, in_deg.get(node, 0))
        elif section == "in" and "<-" in s:
            left, right = s.split("<-", 1)
            node = left.strip()
            srcs = [t for t in (x.strip() for x in right.split(",")) if t]
            in_deg[node] = in_deg.get(node, 0) + len(srcs)
            out_deg.setdefault(node, out_deg.get(node, 0))
    return out_deg, in_deg


def analyze(text):
    out_deg, in_deg = parse_graph(text)
    nodes = set(out_deg) | set(in_deg)
    degree = {n: out_deg.get(n, 0) + in_deg.get(n, 0) for n in nodes}
    weak = sorted(n for n in nodes if degree[n] <= 1)
    return {"nodes": len(nodes), "weak_count": len(weak), "weakly_connected": weak}


def main(argv=None):
    ap = argparse.ArgumentParser(description="Structural gap signals from the link graph.")
    ap.add_argument("--graph", default=os.path.join("content", "_indexes", "graph.md"))
    args = ap.parse_args(argv)
    try:
        text = open(args.graph, encoding="utf-8").read()
    except FileNotFoundError:
        print(f"gaps: no graph index at {args.graph}; run /reindex first", file=sys.stderr)
        return 2
    print(json.dumps(analyze(text), ensure_ascii=False, indent=1))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
```

- [ ] **Step 4: Run tests, verify they PASS**

Run: `cd /c/Projects/brain/kb-template && python .claude/skills/gaps/scripts/test_gaps.py -v`
Expected: all PASS (`OK`).

- [ ] **Step 5: Write `kb-template/.claude/skills/gaps/SKILL.md`**

````markdown
---
name: gaps
description: Use when the user says "find gaps", "what's missing", "coverage analysis", "where is my vault thin". Surfaces weakly-connected notes, topics implied but never written, and stale clusters — an actionable to-build map.
---

# GAPS

## When to use

The user wants to know where the knowledge base is incomplete — not mechanical
issues (that is `/lint`), but *knowledge* gaps.

## Workflow

1. Ensure the indexes are fresh (run `/reindex` if stale).
2. Get structural signals (run from the repo root):
   ```bash
   python .claude/skills/gaps/scripts/gaps.py
   ```
   This returns weakly-connected notes (link degree ≤ 1) — candidates that are
   under-linked into the rest of the vault.
3. Read `content/_indexes/catalog.md` and `content/_indexes/vault-map.md` and
   reason over them together with the signals to identify:
   - **Weakly-connected notes** — should they link to existing notes?
   - **Implied-but-missing topics** — notes that reference a concept that has no
     note of its own.
   - **Thin areas** — folders/tags with very few notes relative to their importance.
   - **Stale clusters** — groups of old notes (cross-check `/lint` staleness).
4. Produce a short, prioritized "to-build / to-link" list. Offer to save it to
   `content/_outputs/reports/`.
````

- [ ] **Step 6: Write `kb-template/.claude/commands/gaps.md`**

```markdown
Use the `gaps` skill to find knowledge gaps: weakly-connected notes, missing topics, and thin areas.
```

- [ ] **Step 7: Commit**

```bash
cd /c/Projects/brain
git add kb-template/.claude/skills/gaps kb-template/.claude/commands/gaps.md
git commit -m "feat(kb-template): add gaps skill (coverage analysis) with tests"
```

---

### Task 4: `schema.yml` contract + `lint_scan.py` enforcement (TDD)

**Files:**
- Create: `kb-template/schema.yml`
- Create: `kb-template/.claude/skills/lint/scripts/test_lint_scan.py`
- Modify (full rewrite): `kb-template/.claude/skills/lint/scripts/lint_scan.py`
- Create: `kb-template/.githooks/pre-commit`

- [ ] **Step 1: Write `kb-template/schema.yml`**

```yaml
# Frontmatter contract per note type. `/lint` enforces the `required` fields for
# each type. Edit this to match your conventions; DELETE this file to fall back to
# the built-in default type list with no required-field enforcement.
types:
  basic-note:
    required: [title, date, type]
  knowledge-note:
    required: [title, date, type, tags, summary]
  tool:
    required: [title, date, type, tags, summary]
  book-note:
    required: [title, date, type, tags]
  answer-note:
    required: [title, date, type, summary]
  compiled-note:
    required: [title, date, type, tags, summary]
```

- [ ] **Step 2: Write the failing tests**

Create `kb-template/.claude/skills/lint/scripts/test_lint_scan.py`:

```python
import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import lint_scan  # noqa: E402


class TestSchemaFunctions(unittest.TestCase):
    def test_no_violation_when_complete(self):
        schema = {"knowledge-note": {"required": ["title", "date", "type", "tags", "summary"]}}
        fm = {"title": "X", "date": "2026-01-01", "type": "knowledge-note",
              "tags": '["a"]', "summary": "s"}
        self.assertEqual(lint_scan.schema_violations(fm, "knowledge-note", schema), [])

    def test_reports_missing(self):
        schema = {"tool": {"required": ["title", "summary"]}}
        self.assertEqual(lint_scan.schema_violations({"title": "X"}, "tool", schema), ["summary"])

    def test_unknown_type_no_violation(self):
        self.assertEqual(lint_scan.schema_violations({}, "mystery", {"tool": {"required": ["x"]}}), [])

    def test_load_schema_missing_file(self):
        self.assertEqual(lint_scan.load_schema("definitely-not-here.yml"), {})


class TestScanIntegration(unittest.TestCase):
    def test_scan_flags_schema_violation(self):
        schema = {"knowledge-note": {"required": ["title", "date", "type", "tags", "summary"]}}
        with tempfile.TemporaryDirectory() as d:
            c = Path(d) / "content" / "T"
            c.mkdir(parents=True)
            (c / "Bad.md").write_text(
                '---\ntitle: "Bad"\ndate: 2026-01-01\ntype: knowledge-note\n---\n# Bad\n'
                + ("x" * 300), encoding="utf-8")
            res = lint_scan.scan(str(Path(d) / "content"), schema)
            self.assertTrue(any("missing=" in s for s in res["issues"]["schema_violation"]))

    def test_scan_clean_when_complete(self):
        schema = {"knowledge-note": {"required": ["title", "date", "type", "tags", "summary"]}}
        with tempfile.TemporaryDirectory() as d:
            c = Path(d) / "content" / "T"
            c.mkdir(parents=True)
            (c / "Good.md").write_text(
                '---\ntitle: "Good"\ndate: 2026-01-01\ntype: knowledge-note\n'
                'tags: ["a"]\nsummary: "s"\n---\n# Good\n' + ("x " * 200), encoding="utf-8")
            res = lint_scan.scan(str(Path(d) / "content"), schema)
            self.assertEqual(res["issues"]["schema_violation"], [])
            self.assertEqual(res["issues"]["bad_type"], [])


if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 3: Run tests, verify they FAIL**

Run: `cd /c/Projects/brain/kb-template && python .claude/skills/lint/scripts/test_lint_scan.py -v`
Expected: FAIL — importing `lint_scan` either runs the old top-level scan (side effects / error) or lacks `schema_violations`/`scan`/`load_schema`. (The current module runs at import; the rewrite in Step 4 fixes this.)

- [ ] **Step 4: Rewrite `lint_scan.py`** with a `main()` guard + schema support

Replace the ENTIRE contents of `kb-template/.claude/skills/lint/scripts/lint_scan.py` with:

```python
#!/usr/bin/env python3
"""Vault health scanner. Walks content/ topic folders, parses frontmatter, reports
issues. If a schema.yml is present in the working directory, the allowed types are
its keys and each type's `required` fields are enforced (schema_violation)."""
import os
import re
import json
from datetime import date

ROOT = "content"
EXCLUDE_TOP = {"_raw", "_indexes", "_outputs", "templates", "ATTACHMENTS", ".obsidian"}
DEFAULT_TYPES = {"basic-note", "book-note", "knowledge-note", "tool",
                 "compiled-note", "answer-note", "quote", "quote-note", "dailyjournal"}
TODAY = date.today()


def parse_fm(text):
    if not text.startswith("---"):
        return None, text
    end = text.find("\n---", 3)
    if end == -1:
        return None, text
    fm_raw = text[3:end].strip()
    body = text[end + 4:]
    fm = {}
    for line in fm_raw.splitlines():
        m = re.match(r'^([A-Za-z0-9_-]+):\s*(.*)$', line)
        if m:
            fm[m.group(1)] = m.group(2).strip()
    return fm, body


def get_date(fm):
    d = fm.get("date", "").strip().strip('"')
    m = re.search(r'(\d{4})-(\d{2})-(\d{2})', d)
    if m:
        try:
            return date(int(m.group(1)), int(m.group(2)), int(m.group(3)))
        except ValueError:
            return None
    return None


def load_schema(path="schema.yml"):
    """Return {type: {required: [...]}} from schema.yml, or {} if absent/unloadable."""
    try:
        import yaml
    except ImportError:
        return {}
    try:
        with open(path, encoding="utf-8") as f:
            data = yaml.safe_load(f) or {}
    except FileNotFoundError:
        return {}
    return data.get("types", {}) or {}


def schema_violations(fm, ntype, schema):
    """List required fields missing/empty for this note's type; [] if type unknown."""
    spec = schema.get(ntype)
    if not spec:
        return []
    return [field for field in spec.get("required", []) if not fm.get(field)]


def scan(root=ROOT, schema=None):
    schema = schema or {}
    allowed = set(schema) if schema else set(DEFAULT_TYPES)
    notes = []
    for dirpath, dirnames, filenames in os.walk(root):
        rel = os.path.relpath(dirpath, root)
        if rel != ".":
            top = rel.split(os.sep)[0]
            if top in EXCLUDE_TOP or top.startswith("."):
                dirnames[:] = []
                continue
        for fn in filenames:
            if not fn.endswith(".md"):
                continue
            path = os.path.join(dirpath, fn)
            with open(path, encoding="utf-8") as f:
                text = f.read()
            fm, body = parse_fm(text)
            notes.append({"path": path.replace("\\", "/"), "name": fn[:-3], "fm": fm or {},
                          "body": body, "has_fm": fm is not None, "raw": text})

    keys = ["missing_frontmatter", "missing_title", "missing_date", "missing_tags",
            "missing_type", "missing_summary", "bad_type", "stub", "todo", "stale",
            "title_filename_mismatch", "schema_violation"]
    issues = {k: [] for k in keys}

    for n in notes:
        fm, p, body = n["fm"], n["path"], n["body"]
        if not n["has_fm"]:
            issues["missing_frontmatter"].append(p)
            continue
        if not fm.get("title"):
            issues["missing_title"].append(p)
        if not fm.get("date"):
            issues["missing_date"].append(p)
        if not fm.get("tags") or fm.get("tags") in ("[]", "[ ]"):
            issues["missing_tags"].append(p)
        t = fm.get("type", "")
        if not t:
            issues["missing_type"].append(p)
        elif t not in allowed:
            issues["bad_type"].append(f"{p} (type={t})")
        if not fm.get("summary"):
            issues["missing_summary"].append(p)
        clean = re.sub(r'^#.*$', '', body, flags=re.M)
        clean = re.sub(r'Template:.*$', '', clean, flags=re.M)
        clean = re.sub(r'#todo\S*', '', clean)
        if len(clean.strip()) < 200:
            issues["stub"].append(f"{p} ({len(clean.strip())} chars)")
        todos = re.findall(r'#todo\S*', n["raw"])
        if todos:
            issues["todo"].append(f"{p} ({', '.join(sorted(set(todos)))})")
        d = get_date(fm)
        rev = fm.get("agent-reviewed", "").strip().strip('"')
        revd = None
        m = re.search(r'(\d{4})-(\d{2})-(\d{2})', rev)
        if m:
            revd = date(int(m.group(1)), int(m.group(2)), int(m.group(3)))
        if d and (TODAY - d).days > 365:
            if not revd or (TODAY - revd).days > 365:
                issues["stale"].append(f"{p} (date={d})")
        ftitle = fm.get("title", "").strip().strip('"')
        if ftitle and ftitle != n["name"]:
            issues["title_filename_mismatch"].append(f'{p} (title="{ftitle}")')
        if schema and t:
            missing = schema_violations(fm, t, schema)
            if missing:
                issues["schema_violation"].append(f"{p} (type={t} missing={','.join(missing)})")

    return {"total": len(notes), "issues": issues,
            "counts": {k: len(v) for k, v in issues.items()}}


def main():
    result = scan(ROOT, load_schema())
    print(json.dumps(result, indent=1, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
```

- [ ] **Step 5: Run tests, verify they PASS**

Run: `cd /c/Projects/brain/kb-template && python .claude/skills/lint/scripts/test_lint_scan.py -v`
Expected: all PASS (`OK`).

- [ ] **Step 6: Verify the real vault still lints clean WITH schema enforcement active**

Run:
```bash
cd /c/Projects/brain/kb-template
python .claude/skills/lint/scripts/lint_scan.py
```
Expected: all counts `0`, including `schema_violation: 0` (the two REFERENCE knowledge-notes have title/date/type/tags/summary). If `bad_type` appears, schema.yml is missing a type the example notes use — fix schema.yml.

- [ ] **Step 7: Write the opt-in pre-commit hook `kb-template/.githooks/pre-commit`**

```bash
#!/usr/bin/env bash
# Optional KB pre-commit hook. NOT installed by default.
# Enable:  git config core.hooksPath .githooks
# Blocks the commit if lint finds missing frontmatter or schema violations.
out="$(python .claude/skills/lint/scripts/lint_scan.py)" || exit 0
echo "$out" | python -c "import sys,json; c=json.load(sys.stdin)['counts']; sys.exit(1 if (c['missing_frontmatter'] or c['schema_violation']) else 0)" && exit 0
echo 'KB lint: fix missing frontmatter / schema violations before committing (run /lint).' >&2
exit 1
```

- [ ] **Step 8: Commit**

```bash
cd /c/Projects/brain
git add kb-template/schema.yml kb-template/.claude/skills/lint/scripts/lint_scan.py kb-template/.claude/skills/lint/scripts/test_lint_scan.py kb-template/.githooks/pre-commit
git commit -m "feat(kb-template): schema.yml frontmatter contract enforced by lint + opt-in pre-commit hook"
```

---

### Task 5: Integration self-tests `tests/run_tests.py`

**Files:**
- Create: `kb-template/tests/run_tests.py`

- [ ] **Step 1: Write `kb-template/tests/run_tests.py`**

```python
#!/usr/bin/env python3
"""Integration self-tests for the KB template skills. Builds a throwaway temp vault
and exercises build_indexes, lint_scan, lint_links, gaps, and refactor end to end.
Run from anywhere:  python tests/run_tests.py   (exit 0 = all pass)."""
import json
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SKILLS = ROOT / ".claude" / "skills"
BUILD = SKILLS / "reindex" / "scripts" / "build_indexes.py"
LINT_SCAN = SKILLS / "lint" / "scripts" / "lint_scan.py"
LINT_LINKS = SKILLS / "lint" / "scripts" / "lint_links.py"
REFACTOR = SKILLS / "refactor" / "scripts" / "refactor.py"
GAPS = SKILLS / "gaps" / "scripts" / "gaps.py"

PAD = " padding" * 30
NOTE_A = ('---\ntitle: "Alpha"\ndate: 2026-01-01\ntags: ["x"]\ntype: knowledge-note\n'
          'summary: "Alpha note."\n---\n# Alpha\nLinks to [[Beta]] and a code span '
          '`[[NotARealLink]]`.\n' + PAD)
NOTE_B = ('---\ntitle: "Beta"\ndate: 2026-01-01\ntags: ["x"]\ntype: knowledge-note\n'
          'summary: "Beta note."\n---\n# Beta\nLinks back to [[Alpha]].\n' + PAD)

failures = []


def check(name, cond, detail=""):
    print(("PASS" if cond else "FAIL"), "-", name, ("" if cond else f":: {detail}"))
    if not cond:
        failures.append(name)


def run(script, args=None, cwd=None):
    return subprocess.run([sys.executable, str(script)] + (args or []),
                          cwd=cwd, capture_output=True, text=True)


def main():
    with tempfile.TemporaryDirectory() as d:
        c = Path(d) / "content" / "REFERENCE"
        c.mkdir(parents=True)
        (Path(d) / "content" / "_indexes").mkdir()
        (c / "Alpha.md").write_text(NOTE_A, encoding="utf-8")
        (c / "Beta.md").write_text(NOTE_B, encoding="utf-8")

        r = run(BUILD, cwd=d)
        check("build_indexes runs", r.returncode == 0, r.stderr)
        check("build_indexes notes=2", "notes=2" in r.stdout, r.stdout)

        r = run(LINT_SCAN, cwd=d)
        scan = json.loads(r.stdout)
        check("lint_scan no missing_frontmatter", scan["counts"]["missing_frontmatter"] == 0)
        check("lint_scan no bad_type", scan["counts"]["bad_type"] == 0)

        r = run(LINT_LINKS, cwd=d)
        links = json.loads(r.stdout)
        check("lint_links skips code span (no broken)", links["broken"] == {}, links["broken"])

        r = run(GAPS, cwd=d)
        check("gaps runs", r.returncode == 0, r.stderr)

        r = run(REFACTOR, ["rename", "--old", "Beta", "--new", "Gamma"], cwd=d)
        check("refactor rename ok", r.returncode == 0, r.stderr)
        alpha = (c / "Alpha.md").read_text(encoding="utf-8")
        check("refactor rewrote link", "[[Gamma]]" in alpha and "[[Beta]]" not in alpha)
        check("refactor renamed file", (c / "Gamma.md").exists())

    print("---")
    if failures:
        print("FAILURES:", failures)
        return 1
    print("ALL PASS")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
```

- [ ] **Step 2: Run the self-tests**

Run: `cd /c/Projects/brain/kb-template && python tests/run_tests.py`
Expected: every line `PASS`, final `ALL PASS`, exit 0. (This proves Task 1's code-span fix, Task 2's refactor, Task 3's gaps, and the indexing/lint all work together.)

- [ ] **Step 3: Commit**

```bash
cd /c/Projects/brain
git add kb-template/tests/run_tests.py
git commit -m "test(kb-template): add integration self-tests exercising all skill scripts"
```

---

### Task 6: Register `refactor` + `gaps` in the brain template and README

**Files:**
- Modify: `kb-template/CLAUDE.template.md`
- Modify: `kb-template/README.md`

- [ ] **Step 1: Add the two skills to the `CLAUDE.template.md` Workflows list**

In `kb-template/CLAUDE.template.md`, in the `## Workflows` list, immediately after
the `- **OUTPUT** (`/output`) …` line, add:

```markdown
- **REFACTOR** (`/refactor`) — rename/move/merge/split notes with automatic wikilink + index repair.
- **GAPS** (`/gaps`) — coverage analysis: weakly-connected notes, missing topics, thin areas.
```

- [ ] **Step 2: Add the two skills to the README Skills table**

In `kb-template/README.md`, in the `## Skills` table, immediately after the
`/reindex` row, add:

```markdown
| `/refactor` | Rename/move/merge/split notes with automatic wikilink repair. |
| `/gaps` | Coverage analysis: weakly-connected notes, missing topics, thin areas. |
```

- [ ] **Step 3: Verify**

Run:
```bash
grep -c "refactor\|gaps" kb-template/CLAUDE.template.md
grep -nE "/refactor|/gaps" kb-template/README.md
```
Expected: both skills appear in the CLAUDE template Workflows and in the README Skills table.

- [ ] **Step 4: Commit**

```bash
cd /c/Projects/brain
git add kb-template/CLAUDE.template.md kb-template/README.md
git commit -m "docs(kb-template): register refactor and gaps in brain template and README"
```

---

### Task 7: Final enrichment verification

**Files:**
- None modified.

- [ ] **Step 1: Run every unit + integration test**

Run:
```bash
cd /c/Projects/brain/kb-template
python .claude/skills/onboard/scripts/test_render.py
python .claude/skills/refactor/scripts/test_refactor.py
python .claude/skills/gaps/scripts/test_gaps.py
python .claude/skills/lint/scripts/test_lint_scan.py
python .claude/skills/ingest/scripts/test_yt_fetch.py
python tests/run_tests.py
```
Expected: every suite ends `OK` / `ALL PASS`; no failures.

- [ ] **Step 2: Confirm the real shipped vault is clean under full enforcement**

Run:
```bash
cd /c/Projects/brain/kb-template
python .claude/skills/reindex/scripts/build_indexes.py
python .claude/skills/lint/scripts/lint_scan.py
python .claude/skills/lint/scripts/lint_links.py
```
Expected: `OK notes=2 ...`; `lint_scan` all counts `0` (incl. `schema_violation`); `lint_links` `"broken": {}` and `orphans` empty `[]`.

- [ ] **Step 3: Restore any index timestamp churn and confirm a clean tree**

Run:
```bash
cd /c/Projects/brain
git checkout -- kb-template/content/_indexes 2>/dev/null || true
git status --short kb-template
```
Expected: no uncommitted changes under `kb-template` (only `updated:` timestamp churn, if any, which is discarded).

- [ ] **Step 4: Show the Plan C commit series**

Run: `cd /c/Projects/brain && git log --oneline -8 -- kb-template`
Expected: the Plan C commits (lint fix, refactor, gaps, schema, self-tests, docs) are present. Plan C complete.

---

## Self-Review

**Spec coverage (§4.3 enrichments):**
- `refactor` (rename/move/merge/split, link integrity) — Task 2 ✓ (rename+relink scripted & tested; merge/split skill-orchestrated)
- `gaps` (coverage analysis) — Task 3 ✓ (structural signals scripted & tested; semantic layer in skill)
- Schema contract enforced by lint + opt-in pre-commit — Task 4 ✓
- Skill self-tests — Task 5 ✓ (self-contained temp-vault runner; deviates from spec's "fixture-vault dir" but equivalent and survives onboarding — noted)
- Plan A deferred follow-ups (lint_links: exclude templates + skip code spans; revert entity hack) — Task 1 ✓
- Register new skills in brain/README — Task 6 ✓

**Placeholder scan:** No vague steps; full code for `refactor.py`, `gaps.py`, rewritten `lint_scan.py`, all test files, `schema.yml`, the hook, and `run_tests.py`. Every verify step has an exact command + expected output.

**Type/name consistency:** Public APIs match between modules and their tests — `refactor.{rewrite_text, rename, relink, RefactorError}` (+ CLI `rename`/`relink --old/--new`); `gaps.{parse_graph, analyze}`; `lint_scan.{parse_fm, get_date, load_schema, schema_violations, scan, main}`. `run_tests.py` references the exact script paths created in Tasks 2–4. The `schema_violation` issue key is added to `lint_scan`'s `issues` dict and asserted in both `test_lint_scan.py` and the clean-vault check (Step 6 of Task 4 / Task 7 Step 2).

**Backward-compatibility check:** `lint_scan.scan` keeps all prior issue categories and behaviour; `schema_violation` is only populated when `schema.yml` loads. With `schema.yml` present, `allowed` types become the schema keys — `schema.yml` therefore lists every type the shipped vault uses (`knowledge-note` included), so the example notes stay clean. Deleting `schema.yml` falls back to `DEFAULT_TYPES` with no schema enforcement.
