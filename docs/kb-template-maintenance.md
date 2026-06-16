# Maintaining the KB template

This repo (`brain`) is both a live personal knowledge base **and** the home of a
reusable template. There are three copies of the shared skills; keep the direction
of truth clear so changes propagate cleanly.

## The three copies

| Copy | Path | Role |
|------|------|------|
| **Template source (canonical)** | `kb-template/` | The source of truth for the template. Generic, tested, no personal content. |
| **Published mirror** | `github.com/plipowczan/second-brain-template` | Public template repo. A mirror of `kb-template/`, updated by the sync script. |
| **Live skills** | `.claude/skills/`, `content/` | The brain vault's own daily-use skills + notes. May carry personal tweaks. |

**Rule of thumb:** generic, reusable improvements land in `kb-template/` first. The
published repo is downstream of `kb-template/`. The live skills are independent — pull
in template improvements only when you want them for your own vault.

## Adding functionality and propagating it

1. **Build it in `kb-template/`** (the canonical copy). Write the skill/script, add or
   update tests, follow the existing patterns. Keep it generic — no personal names,
   topics, or dates.
2. **Test it:**
   ```bash
   cd kb-template
   python tests/run_tests.py
   # plus any per-skill unit tests you added, e.g.
   python .claude/skills/<skill>/scripts/test_*.py
   ```
3. **Register it** if it's a new skill: add a row to `kb-template/CLAUDE.template.md`
   (Workflows) and `kb-template/README.md` (Skills table), and add a
   `kb-template/.claude/commands/<skill>.md`.
4. **Publish to the standalone repo:**
   ```bash
   # one-time: clone the published repo as a sibling (if you don't have it)
   git clone git@github.com:plipowczan/second-brain-template.git ../second-brain-template
   # each release:
   scripts/sync-kb-template.sh            # mirrors kb-template/ -> ../second-brain-template, runs smoke tests, commits
   (cd ../second-brain-template && git push)
   ```
5. **(Optional) Adopt it in your live vault:** if you want the new skill for your own
   daily use, copy it from `kb-template/.claude/skills/<skill>` into `.claude/skills/`.

## Going the other way (built it live first)

If you prototyped a generic improvement in `.claude/skills/` (live) and want it in the
template, port the changed files into `kb-template/.claude/skills/`, then **re-generify**
(strip personal references, replace any fixed dates with `date.today()`-style logic,
add tests), and continue from step 2 above.

## Spotting what needs porting

```bash
scripts/check-kb-template-drift.sh
```
Reports per-skill differences between the live `.claude/skills/` and the
`kb-template/.claude/skills/` copies. Some drift is **intentional** — e.g. the live
`lint_scan.py` is pinned to a fixed "today" date, while the template uses
`date.today()`. The tool only reports; you decide what to port.

## Re-cutting a clean standalone repo

To recreate the standalone repo from scratch (clean-slate, no history):
```bash
scripts/extract-kb-template.sh ../second-brain-template-fresh
```
Prefer `sync-kb-template.sh` for ongoing updates — it preserves the published repo's
release history instead of replacing it.
