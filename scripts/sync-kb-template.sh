#!/usr/bin/env bash
#
# Publish the current kb-template/ to the standalone second-brain-template repo,
# PRESERVING that repo's history (one "sync" commit per run). Use this for ongoing
# releases after the initial extract-kb-template.sh.
#
# Usage:
#   scripts/sync-kb-template.sh [STANDALONE_DIR]     # default ../second-brain-template
#
# The standalone dir must already be a git clone of the published template repo.
# Run from the brain repo root.
#
set -euo pipefail

SRC_REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$SRC_REPO/kb-template"
DEST="${1:-$SRC_REPO/../second-brain-template}"
PY="$(command -v python || command -v python3 || true)"

[ -d "$SRC" ] || { echo "error: $SRC missing (run from the brain repo)" >&2; exit 1; }
[ -d "$DEST/.git" ] || { echo "error: $DEST is not a git repo. Clone the template there first, or run scripts/extract-kb-template.sh." >&2; exit 1; }
[ -n "$PY" ] || { echo "error: python not found on PATH" >&2; exit 1; }

echo ">> mirroring kb-template/ -> $DEST (preserving .git)"
if command -v rsync >/dev/null 2>&1; then
  rsync -a --delete \
    --exclude '.git' \
    --exclude '__pycache__' \
    --exclude '*.pyc' \
    --exclude 'node_modules' \
    "$SRC"/ "$DEST"/
else
  # No rsync: clear the working tree (keep .git), copy fresh. git tracks deletions.
  find "$DEST" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
  cp -r "$SRC"/. "$DEST"/
  find "$DEST" -type d -name '__pycache__' -prune -exec rm -rf {} + 2>/dev/null || true
  find "$DEST" -type f -name '*.pyc' -delete 2>/dev/null || true
fi

echo ">> smoke test in $DEST"
( cd "$DEST" && "$PY" tests/run_tests.py )

cd "$DEST"
git add -A
if git diff --cached --quiet; then
  echo ">> no changes to publish — standalone repo already matches kb-template/"
  exit 0
fi
SHA="$(git -C "$SRC_REPO" rev-parse --short HEAD)"
git -c commit.gpgsign=false commit -q -m "sync from brain@$SHA"
echo ">> committed 'sync from brain@$SHA'."
echo ">> push it with:  (cd \"$DEST\" && git push)"
