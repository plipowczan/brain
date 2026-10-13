# FROZEN — do not edit this directory

**Frozen on 2026-10-13.** `kb-template/` is no longer the source of the knowledge-base
template.

- **Source of truth:** [`plipowczan/second-brain-template`](https://github.com/plipowczan/second-brain-template),
  checked out locally as `../second-brain-template`. Make every template change there, in a
  session whose working directory is that repo; its `CONTRIBUTING.md` holds the rules for
  developing the template.
- **Direction:** template → brain. Brain is one instance of the template. A change to a skill
  shared by both lands in the template first and is ported by hand into brain's
  `.claude/skills/`; `scripts/check-kb-template-drift.sh` compares those two.
- **This copy:** byte-identical to the template as of the freeze (last change `a2187b34`,
  2026-08-07; mirrored as `5cc542d sync from brain@a2187b34`). It is kept only so nothing
  disappears before brain adopts the template. It is not published, so it gets no
  `CHANGELOG.md` entries.
- **Scripts:** `scripts/sync-kb-template.sh` and `scripts/extract-kb-template.sh` refuse to run.
  They would overwrite the template, or cut a new one, from this stale copy.
- **End of life:** this directory and those two scripts are removed in phase 5, when brain
  adopts the template (`brain-upgrade --adopt`).
