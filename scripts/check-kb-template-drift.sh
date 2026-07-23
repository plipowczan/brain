#!/usr/bin/env bash
#
# Report differences between the brain repo's LIVE skills (.claude/skills/) and the
# kb-template COPIES (kb-template/.claude/skills/) for the skills shared by both.
# Use it to decide what to port after changing a skill on either side.
#
# Some drift is EXPECTED and intentional (e.g. the live lint_scan.py is pinned to a
# fixed "today" date, while the template uses date.today()). This tool only reports;
# it does not change anything.
#
# Usage:  scripts/check-kb-template-drift.sh
#
set -euo pipefail

SRC_REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LIVE="$SRC_REPO/.claude/skills"
TMPL="$SRC_REPO/kb-template/.claude/skills"

SHARED="brain-ingest brain-compile brain-enhance brain-lint brain-output brain-qa brain-reindex \
        excalidraw-diagram brain-research brain-research-deep brain-research-report \
        brain-research-add-fields brain-research-add-items"

drift=0
for s in $SHARED; do
  if [ -d "$LIVE/$s" ] && [ -d "$TMPL/$s" ]; then
    if ! diff -rq -x '__pycache__' -x '*.pyc' "$LIVE/$s" "$TMPL/$s" >/dev/null 2>&1; then
      echo "== DRIFT: $s =="
      diff -rq -x '__pycache__' -x '*.pyc' "$LIVE/$s" "$TMPL/$s" || true
      drift=1
    fi
  elif [ -d "$LIVE/$s" ] || [ -d "$TMPL/$s" ]; then
    echo "== ONLY ON ONE SIDE: $s (live=$([ -d "$LIVE/$s" ] && echo yes || echo no) template=$([ -d "$TMPL/$s" ] && echo yes || echo no)) =="
    drift=1
  fi
done

[ "$drift" = 0 ] && echo "no drift in shared skills" || echo "--- review the drift above; port intentional changes with the workflow in docs/kb-template-maintenance.md ---"
