#!/usr/bin/env bash
#
# Report differences between the brain repo's LIVE skills (.claude/skills/) and the
# TEMPLATE's skills (../second-brain-template/.claude/skills/) for the skills shared
# by both.
#
# Since 2026-10-13 the template repo is the source of truth and brain is one of its
# instances. A change to a shared skill lands in the template first, then is ported by
# hand into brain's .claude/skills/ — template -> brain, never the other way. This check
# guards that until phase 5, when brain adopts the template (brain-upgrade --adopt).
# The frozen kb-template/ copy is no longer compared. This tool only reports; it does
# not change anything.
#
# Usage:
#   scripts/check-kb-template-drift.sh [TEMPLATE_DIR]   # default ../second-brain-template
#
set -euo pipefail

SRC_REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LIVE="$SRC_REPO/.claude/skills"
TEMPLATE="${1:-$SRC_REPO/../second-brain-template}"
TMPL="$TEMPLATE/.claude/skills"

[ -d "$TMPL" ] || { echo "error: $TMPL missing. Clone the template there first (git clone git@github.com:plipowczan/second-brain-template.git), or pass its path as the first argument." >&2; exit 1; }

SHARED="brain-ingest brain-compile brain-enhance brain-lint brain-output brain-qa brain-reindex \
        excalidraw-diagram brain-research brain-research-deep brain-research-report \
        brain-research-add-fields brain-research-add-items"

# Local build artifacts that exist only on the live side because the skill was run
# here. They are not drift, and reporting them trains people to ignore this check.
# Kept in one place so the two diff calls below cannot fall out of sync.
EXCLUDES=(-x '__pycache__' -x '*.pyc' -x '.venv' -x 'uv.lock')

drift=0
for s in $SHARED; do
  if [ -d "$LIVE/$s" ] && [ -d "$TMPL/$s" ]; then
    if ! diff -rq "${EXCLUDES[@]}" "$LIVE/$s" "$TMPL/$s" >/dev/null 2>&1; then
      echo "== DRIFT: $s =="
      diff -rq "${EXCLUDES[@]}" "$LIVE/$s" "$TMPL/$s" || true
      drift=1
    fi
  elif [ -d "$LIVE/$s" ] || [ -d "$TMPL/$s" ]; then
    echo "== ONLY ON ONE SIDE: $s (live=$([ -d "$LIVE/$s" ] && echo yes || echo no) template=$([ -d "$TMPL/$s" ] && echo yes || echo no)) =="
    drift=1
  fi
done

[ "$drift" = 0 ] && echo "no drift in shared skills" || echo "--- review the drift above. The template is the source: port its changes template -> brain by hand. A change made here first goes into the template (a session in $TEMPLATE) and comes back by that port. Workflow: docs/kb-template-maintenance.md ---"
