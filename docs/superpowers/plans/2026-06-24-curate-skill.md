# /curate Skill Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a `/curate` skill that diagnoses stale/unused/dead-linked/duplicate notes, writes a triage report, and reversibly retires confirmed notes to `_graveyard/`.

**Architecture:** Mirror the existing `/lint` skill layout — a `SKILL.md` workflow doc plus stdlib-only Python helper scripts with `unittest` tests. Two helpers: `curate_score.py` (pure scoring from gathered note data) and `curate_links.py` (live HTTP status classification). The SKILL.md orchestrates: gather → score → report → execute-on-confirm, delegating merges to `/refactor` and refreshes to `/enhance`.

**Tech Stack:** Python 3.13 stdlib only (`os`, `re`, `json`, `subprocess`, `urllib`, `unittest`). Markdown skill + command files. Quartz config (TypeScript) one-line edit.

## Global Constraints

- **Python: stdlib only.** No pip dependencies (match `lint_scan.py` / `lint_links.py`).
- **Scripts live in** `.claude/skills/curate/scripts/`. Tests are `test_*.py` beside them, run with `python -m unittest`.
- **Reversible only.** The skill never `git rm`s a note; retirement = move to `_graveyard/`.
- **Mutation is gated.** Default output is a dry-run report; file moves happen only after explicit user confirmation.
- **Safety Rules (CLAUDE.md):** never touch `.obsidian/`, `quartz/` engine dir, `.github/`. Editing root `quartz.config.ts` is allowed. Always update the 3 indexes after writes. Work on `v4` branch.
- **stdout encoding:** scripts that print vault content reconfigure stdout to utf-8 (Windows cp1252 guard), per `lint_links.py`.

---

### Task 1: `_graveyard/` infrastructure + Quartz exclusion

**Files:**
- Create: `content/_graveyard/.gitkeep`
- Modify: `quartz.config.ts:16` (add `_graveyard` to `ignorePatterns`)

**Interfaces:**
- Produces: a build-excluded `_graveyard/` folder that later tasks move retired notes into.

- [ ] **Step 1: Create the graveyard folder with a keepfile**

Create `content/_graveyard/.gitkeep` with content:

```
Retired notes live here. Out of the Quartz build and out of the indexes.
Moved here by the /curate skill on user confirmation. Move a file back to its
original topic folder to restore it.
```

- [ ] **Step 2: Add `_graveyard` to Quartz ignorePatterns**

In `quartz.config.ts` line 16, change:

```ts
    ignorePatterns: ["private", "templates", ".obsidian", "_raw", "_indexes", "_outputs"],
```

to:

```ts
    ignorePatterns: ["private", "templates", ".obsidian", "_raw", "_indexes", "_outputs", "_graveyard"],
```

- [ ] **Step 3: Verify the build ignores the folder**

Run: `npx quartz build`
Expected: build succeeds; output contains no page generated from `_graveyard/`. (Drop a throwaway `content/_graveyard/zzz-test.md` with frontmatter, rebuild, confirm no `public/_graveyard` or `public/zzz-test*` is emitted, then delete the throwaway.)

- [ ] **Step 4: Commit**

```bash
git add content/_graveyard/.gitkeep quartz.config.ts
git commit -m "feat(curate): add _graveyard/ folder excluded from Quartz build"
```

---

### Task 2: `curate_score.py` — staleness scoring

**Files:**
- Create: `.claude/skills/curate/scripts/curate_score.py`
- Test: `.claude/skills/curate/scripts/test_curate_score.py`

**Interfaces:**
- Consumes: gathered per-note data (age in days, graph in/out edge counts, dead-link flag, superseded flag) — supplied by the SKILL.md orchestration in Task 4.
- Produces:
  - `days_since(date_str: str, today: date) -> int | None`
  - `isolation_points(in_edges: int, out_edges: int) -> int`
  - `age_points(days: int | None) -> int`
  - `score_note(age_days, in_edges, out_edges, dead_link: bool) -> tuple[int, list[str]]` → `(score, reasons)`
  - `recommend_action(score: int, dead_link: bool, has_superseder: bool) -> str` → one of `"archive"`, `"merge"`, `"refresh"`, `"keep"`
  - `parse_graph(text: str) -> dict[str, tuple[int, int]]` → note name → (in_edges, out_edges) from `graph.md`

- [ ] **Step 1: Write the failing tests**

Create `.claude/skills/curate/scripts/test_curate_score.py`:

```python
import sys
import unittest
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import curate_score as cs  # noqa: E402

TODAY = date(2026, 6, 24)


class TestDaysSince(unittest.TestCase):
    def test_parses_iso_date(self):
        self.assertEqual(cs.days_since("2026-06-14", TODAY), 10)

    def test_strips_quotes(self):
        self.assertEqual(cs.days_since('"2026-06-14"', TODAY), 10)

    def test_unparseable_returns_none(self):
        self.assertIsNone(cs.days_since("", TODAY))
        self.assertIsNone(cs.days_since("not-a-date", TODAY))


class TestPoints(unittest.TestCase):
    def test_age_points_brackets(self):
        self.assertEqual(cs.age_points(100), 0)    # <=365
        self.assertEqual(cs.age_points(400), 1)    # <=545
        self.assertEqual(cs.age_points(600), 2)    # <=730
        self.assertEqual(cs.age_points(900), 3)    # >730
        self.assertEqual(cs.age_points(None), 0)   # unknown age contributes nothing

    def test_isolation_points(self):
        self.assertEqual(cs.isolation_points(0, 0), 2)
        self.assertEqual(cs.isolation_points(1, 0), 1)
        self.assertEqual(cs.isolation_points(0, 1), 1)
        self.assertEqual(cs.isolation_points(3, 2), 0)


class TestScoreNote(unittest.TestCase):
    def test_fresh_linked_alive_scores_zero(self):
        score, reasons = cs.score_note(100, 3, 2, False)
        self.assertEqual(score, 0)
        self.assertEqual(reasons, [])

    def test_dead_link_dominates(self):
        score, reasons = cs.score_note(100, 3, 2, True)
        self.assertEqual(score, 4)
        self.assertIn("dead source/repo link", reasons)

    def test_old_orphan_accumulates(self):
        score, reasons = cs.score_note(900, 0, 0, False)
        self.assertEqual(score, 5)  # 3 age + 2 isolation
        self.assertEqual(len(reasons), 2)


class TestRecommendAction(unittest.TestCase):
    def test_dead_link_archives(self):
        self.assertEqual(cs.recommend_action(4, True, False), "archive")

    def test_superseder_merges(self):
        self.assertEqual(cs.recommend_action(2, False, True), "merge")

    def test_high_score_archives(self):
        self.assertEqual(cs.recommend_action(4, False, False), "archive")

    def test_mid_score_refreshes(self):
        self.assertEqual(cs.recommend_action(2, False, False), "refresh")
        self.assertEqual(cs.recommend_action(3, False, False), "refresh")

    def test_low_score_keeps(self):
        self.assertEqual(cs.recommend_action(1, False, False), "keep")


class TestParseGraph(unittest.TestCase):
    def test_counts_edges(self):
        text = (
            "## Outgoing\n"
            "AI/Foo -> BAR, BAZ\n"
            "AI/Lonely -> -\n"
            "## Incoming\n"
            "BAR <- AI/Foo\n"
            "BAZ <- AI/Foo\n"
        )
        g = cs.parse_graph(text)
        self.assertEqual(g["AI/Foo"], (0, 2))   # 2 outgoing, 0 incoming
        self.assertEqual(g["BAR"], (1, 0))       # 1 incoming, 0 outgoing
        self.assertEqual(g["AI/Lonely"], (0, 0)) # "-> -" means no edges


if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `cd .claude/skills/curate/scripts && python -m unittest test_curate_score -v`
Expected: FAIL — `ModuleNotFoundError: No module named 'curate_score'`.

- [ ] **Step 3: Write the implementation**

Create `.claude/skills/curate/scripts/curate_score.py`:

```python
#!/usr/bin/env python3
"""Pure staleness-scoring functions for the /curate skill. No I/O here —
the SKILL.md orchestration gathers note data (ages, graph edges, link status)
and feeds it to these functions. Kept pure so it is unit-testable."""
import re
import sys
from datetime import date

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

_DATE_RE = re.compile(r"^(\d{4})-(\d{2})-(\d{2})$")


def days_since(date_str, today):
    """Days from an ISO YYYY-MM-DD date string until `today`. None if unparseable."""
    if not date_str:
        return None
    s = date_str.strip().strip('"').strip("'")
    m = _DATE_RE.match(s)
    if not m:
        return None
    try:
        d = date(int(m.group(1)), int(m.group(2)), int(m.group(3)))
    except ValueError:
        return None
    return (today - d).days


def age_points(days):
    """Time-decay points. Unknown age (None) contributes nothing."""
    if days is None:
        return 0
    if days <= 365:
        return 0
    if days <= 545:
        return 1
    if days <= 730:
        return 2
    return 3


def isolation_points(in_edges, out_edges):
    """Graph-isolation penalty: 0 edges -> 2, exactly 1 edge -> 1, else 0."""
    total = in_edges + out_edges
    if total == 0:
        return 2
    if total == 1:
        return 1
    return 0


def score_note(age_days, in_edges, out_edges, dead_link):
    """Return (score, reasons). dead_link adds a heavy fixed weight of 4."""
    reasons = []
    score = 0
    ap = age_points(age_days)
    if ap:
        score += ap
        reasons.append(f"stale: ~{age_days}d since last touch")
    ip = isolation_points(in_edges, out_edges)
    if ip:
        score += ip
        reasons.append(f"graph-isolated: {in_edges} in / {out_edges} out links")
    if dead_link:
        score += 4
        reasons.append("dead source/repo link")
    return score, reasons


def recommend_action(score, dead_link, has_superseder):
    """Map a score + flags to one action. dead link or score>=4 -> archive;
    a newer note covering the topic -> merge; mid score -> refresh; else keep."""
    if dead_link or score >= 4:
        return "archive"
    if has_superseder:
        return "merge"
    if score >= 2:
        return "refresh"
    return "keep"


def parse_graph(text):
    """Parse _indexes/graph.md into {note_name: (in_edges, out_edges)}.
    Reads the `## Outgoing` (A -> B, C) and `## Incoming` (B <- A) sections."""
    out_counts = {}
    in_counts = {}
    section = None
    for line in text.splitlines():
        if line.startswith("## Outgoing"):
            section = "out"
            continue
        if line.startswith("## Incoming"):
            section = "in"
            continue
        if line.startswith("#") or not line.strip():
            continue
        if section == "out" and "->" in line:
            left, right = line.split("->", 1)
            name = left.strip()
            targets = [t.strip() for t in right.split(",") if t.strip() and t.strip() != "-"]
            out_counts[name] = out_counts.get(name, 0) + len(targets)
            for t in targets:
                in_counts.setdefault(t, in_counts.get(t, 0))
            out_counts.setdefault(name, out_counts.get(name, 0))
        elif section == "in" and "<-" in line:
            left, right = line.split("<-", 1)
            name = left.strip()
            sources = [s.strip() for s in right.split(",") if s.strip() and s.strip() != "-"]
            in_counts[name] = in_counts.get(name, 0) + len(sources)

    names = set(out_counts) | set(in_counts)
    return {n: (in_counts.get(n, 0), out_counts.get(n, 0)) for n in names}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `cd .claude/skills/curate/scripts && python -m unittest test_curate_score -v`
Expected: PASS (all tests OK).

- [ ] **Step 5: Commit**

```bash
git add .claude/skills/curate/scripts/curate_score.py .claude/skills/curate/scripts/test_curate_score.py
git commit -m "feat(curate): add staleness scoring functions with tests"
```

---

### Task 3: `curate_links.py` — live link status classification

**Files:**
- Create: `.claude/skills/curate/scripts/curate_links.py`
- Test: `.claude/skills/curate/scripts/test_curate_links.py`

**Interfaces:**
- Consumes: URLs extracted from `tool` notes (`source:` frontmatter, repo links) by the SKILL.md orchestration.
- Produces:
  - `classify_status(status_code: int | None, network_error: bool = False) -> str` → `"alive"`, `"dead"`, or `"unverified"`
  - `check_url(url: str, timeout: float = 8.0) -> str` → calls `classify_status` after an HTTP request (I/O; not unit-tested)
  - CLI: `python curate_links.py <url> [<url> ...]` prints JSON `{url: status}` (used by the skill on the flagged subset only)

- [ ] **Step 1: Write the failing tests**

Create `.claude/skills/curate/scripts/test_curate_links.py`:

```python
import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import curate_links as cl  # noqa: E402


class TestClassifyStatus(unittest.TestCase):
    def test_2xx_3xx_alive(self):
        self.assertEqual(cl.classify_status(200), "alive")
        self.assertEqual(cl.classify_status(301), "alive")
        self.assertEqual(cl.classify_status(399), "alive")

    def test_404_410_dead(self):
        self.assertEqual(cl.classify_status(404), "dead")
        self.assertEqual(cl.classify_status(410), "dead")

    def test_blocked_codes_unverified(self):
        # 401/403/429 are access blocks, not proof the resource is gone
        self.assertEqual(cl.classify_status(401), "unverified")
        self.assertEqual(cl.classify_status(403), "unverified")
        self.assertEqual(cl.classify_status(429), "unverified")

    def test_5xx_unverified(self):
        self.assertEqual(cl.classify_status(500), "unverified")
        self.assertEqual(cl.classify_status(503), "unverified")

    def test_network_error_unverified(self):
        # a timeout / DNS failure is never proof of death
        self.assertEqual(cl.classify_status(None, network_error=True), "unverified")

    def test_none_without_error_unverified(self):
        self.assertEqual(cl.classify_status(None), "unverified")


if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `cd .claude/skills/curate/scripts && python -m unittest test_curate_links -v`
Expected: FAIL — `ModuleNotFoundError: No module named 'curate_links'`.

- [ ] **Step 3: Write the implementation**

Create `.claude/skills/curate/scripts/curate_links.py`:

```python
#!/usr/bin/env python3
"""Live link-status classification for the /curate skill. A network failure is
never treated as proof a link is dead — only explicit 404/410 are 'dead'.
Everything ambiguous is 'unverified' so the skill never auto-retires on a
transient error. Run only on the already-flagged subset, not the whole vault."""
import json
import sys
import urllib.request
import urllib.error

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

_UA = {"User-Agent": "Mozilla/5.0 (curate-skill link check)"}


def classify_status(status_code, network_error=False):
    """Map an HTTP status (or network failure) to alive/dead/unverified."""
    if network_error or status_code is None:
        return "unverified"
    if status_code in (404, 410):
        return "dead"
    if 200 <= status_code < 400:
        return "alive"
    # 401/403/429 blocks, 5xx server errors -> not proof of death
    return "unverified"


def check_url(url, timeout=8.0):
    """Fetch headers for `url` and classify. Falls back to GET if HEAD is refused."""
    req = urllib.request.Request(url, method="HEAD", headers=_UA)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return classify_status(resp.status)
    except urllib.error.HTTPError as e:
        if e.code == 405:  # HEAD not allowed — retry with GET
            try:
                greq = urllib.request.Request(url, method="GET", headers=_UA)
                with urllib.request.urlopen(greq, timeout=timeout) as resp:
                    return classify_status(resp.status)
            except urllib.error.HTTPError as e2:
                return classify_status(e2.code)
            except Exception:
                return classify_status(None, network_error=True)
        return classify_status(e.code)
    except Exception:
        return classify_status(None, network_error=True)


if __name__ == "__main__":
    results = {u: check_url(u) for u in sys.argv[1:]}
    print(json.dumps(results, indent=1, ensure_ascii=False))
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `cd .claude/skills/curate/scripts && python -m unittest test_curate_links -v`
Expected: PASS (all tests OK).

- [ ] **Step 5: Commit**

```bash
git add .claude/skills/curate/scripts/curate_links.py .claude/skills/curate/scripts/test_curate_links.py
git commit -m "feat(curate): add live link-status classifier with tests"
```

---

### Task 4: `SKILL.md` — the curate workflow

**Files:**
- Create: `.claude/skills/curate/SKILL.md`

**Interfaces:**
- Consumes: `curate_score.py` and `curate_links.py` (Tasks 2–3), the 3 indexes, `git log`, and the `/refactor` + `/enhance` skills.
- Produces: the documented 4-phase workflow an agent follows when `/curate` is invoked.

- [ ] **Step 1: Write SKILL.md**

Create `.claude/skills/curate/SKILL.md`:

````markdown
---
name: curate
description: Use when user says "curate", "prune", "cleanup the vault", "retire stale notes", "wyczyść bazę". Scores notes for staleness/isolation/dead-links/duplication, writes a triage report, and on confirmation moves retired notes to _graveyard/.
---

# CURATE

## When to use

Trigger phrases: "curate", "prune", "cleanup", "retire stale notes", "wyczyść bazę".
The user wants a hygiene sweep that proposes (and, on confirmation, executes)
reversible retirement of stale/unused content. Recommended cadence: quarterly.

`/lint` diagnoses; `/curate` treats. This skill is action-oriented but every
mutation is gated on explicit user confirmation. Nothing is ever `git rm`'d.

## Workflow

### Phase 1 — Gather (read-only)

1. Read `content/_indexes/vault-map.md`, `catalog.md`, `graph.md` (Navigation
   Protocol — never grep all of `content/`). If any index is missing/stale, run
   `/reindex` first.
2. For each note collect: frontmatter `date` and `agent-reviewed`; git last-touched
   date via `git log -1 --format=%cs -- <path>`. Use the most recent of these as
   the "last touched" date.
3. Parse graph edges with `curate_score.parse_graph(open(graph.md).read())` to get
   per-note (in_edges, out_edges).

### Phase 2 — Score

For every note compute `age_days = curate_score.days_since(last_touched, today)`
then `score, reasons = curate_score.score_note(age_days, in_edges, out_edges, dead_link)`.

- `dead_link` starts False. Only run live checks on the **flagged subset** — notes
  that already have age_points>0 or isolation_points>0, prioritising `tool` notes.
  For those, extract the `source:`/repo URL and run
  `python .claude/skills/curate/scripts/curate_links.py <url> ...`. A `"dead"`
  result sets `dead_link=True`; `"unverified"` leaves it False and is noted as
  `unverified` in the report (never auto-flag on a network error).
- Detect duplication/superseded: if a newer `compiled-note` (or newer note with the
  same topic per catalog summaries) covers the same ground, set `has_superseder=True`
  for the older note.
- `action = curate_score.recommend_action(score, dead_link, has_superseder)`.

### Phase 3 — Triage report

Write `content/_outputs/reports/YYYY-MM-DD_curate.md`. Group candidates by
recommended action (`archive`, `merge`, `refresh`, `keep`). For each: note path,
score, signals fired (`reasons`), recommended action, one-line rationale, and any
`unverified` flags. Print summary counts per action to the user. This report is
the dry-run; produce it before any mutation.

### Phase 4 — Execute (only after explicit user confirmation)

Present the grouped candidates and ask the user to confirm which actions to run.
Then, per confirmed note:

- **archive** → move the file to `content/_graveyard/` preserving its folder name as
  a prefix if needed to avoid collisions; preserve all frontmatter and add
  `archived: YYYY-MM-DD` and `archived-reason: "<reasons joined>"`. Repair or stub
  inbound wikilinks (delegate to `/refactor` link-repair).
- **merge** → delegate to `/refactor` (merge into the superseding note; it repairs
  wikilinks).
- **refresh** → delegate to `/enhance` (re-verify and update the note in place).
- **keep** → no action.

After mutations, update all three indexes per CLAUDE.md auto-update rules (remove
archived notes from counts, catalog entries, graph nodes/edges). Optionally run
`npx quartz build` to confirm the build still succeeds.

## Safety

- Mutation is gated on explicit confirmation. Default is the dry-run report.
- Reversible: retirement = move to `_graveyard/` (build-excluded). Restore by moving
  the file back to its topic folder.
- Network errors / blocked status codes are `unverified`, never `dead`.
- Never modify `.obsidian/`, the `quartz/` engine dir, or `.github/`.

## See also

- CLAUDE.md "Navigation Protocol" — read on every operation before this workflow.
- `/lint` — passive diagnosis. `/refactor` — merge + wikilink repair. `/enhance` — refresh.
````

- [ ] **Step 2: Lint-check the scripts referenced by the skill still pass**

Run: `cd .claude/skills/curate/scripts && python -m unittest -v`
Expected: PASS — all tests from Tasks 2–3 green (sanity check before commit).

- [ ] **Step 3: Commit**

```bash
git add .claude/skills/curate/SKILL.md
git commit -m "feat(curate): add SKILL.md workflow doc"
```

---

### Task 5: `/curate` command + CLAUDE.md registration

**Files:**
- Create: `.claude/commands/curate.md`
- Modify: `CLAUDE.md` (Workflows section)

**Interfaces:**
- Consumes: the `curate` skill (Task 4).
- Produces: the `/curate` slash command and its registration in project docs.

- [ ] **Step 1: Create the command file**

Create `.claude/commands/curate.md` with content:

```
Use the `curate` skill to score notes for staleness/isolation/dead-links/duplication, write a triage report to `content/_outputs/reports/`, and on confirmation retire notes to `content/_graveyard/`.
```

- [ ] **Step 2: Register the workflow in CLAUDE.md**

In `CLAUDE.md`, in the `## Workflows` list, add this line after the `GAPS` entry:

```
- **CURATE** (`curate`, `prune`, `cleanup`, `retire stale notes`) — `.claude/skills/curate/`, command `/curate` — staleness/relevance hygiene: scores notes, proposes archive/merge/refresh, retires confirmed notes to `_graveyard/` (reversible)
```

- [ ] **Step 3: Verify the command resolves and skill triggers**

Run: `ls .claude/commands/curate.md .claude/skills/curate/SKILL.md`
Expected: both paths listed (exist). Confirm `CLAUDE.md` Workflows section now contains the `CURATE` line (grep `CURATE` in `CLAUDE.md` returns the new entry).

- [ ] **Step 4: Full test sweep + commit**

Run: `cd .claude/skills/curate/scripts && python -m unittest -v`
Expected: PASS (all curate tests green).

```bash
git add .claude/commands/curate.md CLAUDE.md
git commit -m "feat(curate): register /curate command and document workflow"
```

---

## Self-Review

**Spec coverage:**
- 4 signals (age, isolation, dead-link, duplication) → Task 2 `score_note` + Task 3 link classifier + Task 4 superseder detection. ✓
- Report + propose, user confirms → Task 4 Phases 3–4. ✓
- Separate skill vs lint → Tasks 4–5 (own SKILL.md + command). ✓
- `_graveyard/` out of build → Task 1. ✓
- Reversibility / no git rm → Global Constraints + Task 4 Safety. ✓
- Performance guard (live checks only on flagged subset) → Task 4 Phase 2. ✓
- Error handling (network error ≠ dead) → Task 3 `classify_status` + tests. ✓
- Delegation to /refactor and /enhance → Task 4 Phase 4. ✓
- Index update after writes → Task 4 Phase 4. ✓
- Cadence recommendation → Task 4 "When to use". ✓

**Placeholder scan:** No TBD/TODO/"handle edge cases" — all code and commands are concrete. ✓

**Type consistency:** `score_note` / `recommend_action` / `parse_graph` / `days_since` / `classify_status` / `check_url` signatures match between Tasks 2–3 definitions, their tests, and the Task 4 SKILL.md call sites. ✓
