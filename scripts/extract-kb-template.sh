#!/usr/bin/env bash
#
# Extract kb-template/ into a standalone, clean-slate git repository ready to push
# to GitHub and mark as a Template repository.
#
# Usage:
#   scripts/extract-kb-template.sh [TARGET_DIR]
#
# TARGET_DIR defaults to ../kb-template (a sibling of this repo). The target must
# not already exist (or must be empty). History is NOT preserved — the new repo
# starts with a single "Initial commit". Run from the repo root.
#
set -euo pipefail

SRC_REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$SRC_REPO/kb-template"
TARGET="${1:-$SRC_REPO/../kb-template}"

# --- preflight ---------------------------------------------------------------
if [ ! -d "$SRC" ]; then
  echo "error: source $SRC not found (run from the brain repo)" >&2
  exit 1
fi
if [ -e "$TARGET" ] && [ -n "$(ls -A "$TARGET" 2>/dev/null || true)" ]; then
  echo "error: target $TARGET already exists and is not empty" >&2
  exit 1
fi

PY="$(command -v python || command -v python3 || true)"
if [ -z "$PY" ]; then
  echo "error: python not found on PATH (needed for the smoke test)" >&2
  exit 1
fi

echo ">> extracting $SRC -> $TARGET"
mkdir -p "$TARGET"

# --- copy (exclude VCS leftovers and python caches) --------------------------
if command -v rsync >/dev/null 2>&1; then
  rsync -a \
    --exclude '.git' \
    --exclude '__pycache__' \
    --exclude '*.pyc' \
    --exclude 'node_modules' \
    "$SRC"/ "$TARGET"/
else
  cp -r "$SRC"/. "$TARGET"/
  find "$TARGET" -type d -name '__pycache__' -prune -exec rm -rf {} + 2>/dev/null || true
  find "$TARGET" -type f -name '*.pyc' -delete 2>/dev/null || true
fi

# --- smoke test in the extracted copy ----------------------------------------
echo ">> smoke test: running the template's own self-tests in $TARGET"
( cd "$TARGET" && "$PY" tests/run_tests.py )
echo ">> smoke test: rebuilding indexes + lint"
( cd "$TARGET" \
    && "$PY" .claude/skills/reindex/scripts/build_indexes.py \
    && "$PY" .claude/skills/lint/scripts/lint_scan.py >/dev/null \
    && "$PY" .claude/skills/lint/scripts/lint_links.py >/dev/null )
# discard any index timestamp churn from the smoke build (re-copy the committed ones)
if command -v rsync >/dev/null 2>&1; then
  rsync -a "$SRC"/content/_indexes/ "$TARGET"/content/_indexes/
else
  cp -r "$SRC"/content/_indexes/. "$TARGET"/content/_indexes/
fi

# --- fresh git repo ----------------------------------------------------------
echo ">> initializing fresh git repo (branch: main)"
cd "$TARGET"
git init -q -b main
git add -A
git -c commit.gpgsign=false commit -q -m "Initial commit: Claude Code knowledge-base template"

echo ""
echo "Done. Standalone template at: $TARGET"
echo ""
echo "Next steps (run yourself — these are outward-facing):"
echo "  cd \"$TARGET\""
echo "  gh repo create <name> --public --source=. --remote=origin --push"
echo "  # then on GitHub: Settings -> 'Template repository' -> enable"
echo ""
echo "Or push to an existing remote:"
echo "  git remote add origin <git-url> && git push -u origin main"
