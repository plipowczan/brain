# Maintaining the KB template

**Since 2026-10-13 the template's source of truth is the `second-brain-template` repo**
(github.com/plipowczan/second-brain-template, checked out as `../second-brain-template`).
Brain is one of its instances. Until then the template was built here in `kb-template/` and
`scripts/sync-kb-template.sh` mirrored it over the public repo; that direction is reversed,
and the sync is disabled so it cannot overwrite work done in the template.

## The copies

| Copy | Path | Role |
|------|------|------|
| **Template (source of truth)** | `../second-brain-template` | Generic, tested, no personal content. Developed in place; the developer rules (tests, CHANGELOG entry per change, registering a skill) live in its `CONTRIBUTING.md`. |
| **Live brain** | `.claude/skills/`, `content/` | This vault's daily-use skills and notes. The skills shared with the template are kept byte-identical to the template's copies. |
| **Frozen copy** | `kb-template/` | Snapshot of the template at the freeze (see `kb-template/FROZEN.md`). Not edited, not published, no CHANGELOG entries. Removed in phase 5. |

**Rule of thumb:** a generic, reusable change lands in the template first. Brain gets it by
porting it by hand (template → brain) until phase 5.

## Changing the template (a shared skill included)

1. **Work in the template.** Open a session whose working directory is
   `../second-brain-template` and follow its `CONTRIBUTING.md`. Commit and push there.
2. **Port it into brain** if the change touches a shared skill: copy the changed files from
   `../second-brain-template/.claude/skills/<skill>/` into `.claude/skills/<skill>/`, so the two
   copies are byte-identical again.
3. **Check:**
   ```bash
   bash scripts/check-kb-template-drift.sh   # must print: no drift in shared skills
   ```
4. **New template skill you want in brain:** copy the whole skill directory into
   `.claude/skills/` (plus its `/b:` command and the AGENTS.md workflow entry) and add it to
   `SHARED` in `scripts/check-kb-template-drift.sh` so the drift check guards it.

## Built it in brain first

If you prototyped a generic improvement in brain's `.claude/skills/`, move it into the
template: a session in `../second-brain-template` ports it, re-generifies it (no personal
names, topics or fixed dates), adds tests and a CHANGELOG entry. Then port the template's
version back into brain. Until you do, the drift check flags the skill — that is intended.

## Spotting what needs porting

```bash
bash scripts/check-kb-template-drift.sh [TEMPLATE_DIR]   # default ../second-brain-template
```

Reports per-skill differences between brain's live `.claude/skills/` and the template's
`.claude/skills/` for the skills in its `SHARED` list. It only reports; you port. The frozen
`kb-template/` is no longer compared. If the template directory is missing it exits 1 and
tells you to clone it.

## Disabled scripts

`scripts/sync-kb-template.sh` and `scripts/extract-kb-template.sh` print why they are
disabled and exit 1 before touching anything. There is no override flag: publishing
`kb-template/` would overwrite the template (sync) or cut a new one (extract) from the stale,
frozen copy. They stay in the repo only as history.

## Phase 5: adoption

Brain adopts the template with `brain-upgrade --adopt`. From then on it receives template
updates through that skill instead of manual ports, and `kb-template/` plus the two disabled
scripts are removed.
