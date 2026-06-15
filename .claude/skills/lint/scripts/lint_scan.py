#!/usr/bin/env python3
"""Vault health scanner. Walks content/ topic folders, parses frontmatter, reports issues."""
import os, re, sys, json
from datetime import date, datetime

ROOT = "content"
EXCLUDE_TOP = {"_raw", "_indexes", "_outputs", "templates", "ATTACHMENTS", ".obsidian"}
ALLOWED_TYPES = {"basic-note", "book-note", "knowledge-note", "tool",
                 "compiled-note", "answer-note", "quote", "quote-note", "dailyjournal"}
TODAY = date(2026, 6, 14)

def parse_fm(text):
    if not text.startswith("---"):
        return None, text
    end = text.find("\n---", 3)
    if end == -1:
        return None, text
    fm_raw = text[3:end].strip()
    body = text[end+4:]
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

notes = []
for dirpath, dirnames, filenames in os.walk(ROOT):
    rel = os.path.relpath(dirpath, ROOT)
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
        notes.append({"path": path.replace("\\","/"), "name": fn[:-3], "fm": fm or {},
                      "body": body, "has_fm": fm is not None, "raw": text})

issues = {k: [] for k in [
    "missing_frontmatter","missing_title","missing_date","missing_tags","missing_type",
    "missing_summary","bad_type","stub","todo","stale","title_filename_mismatch"]}

for n in notes:
    fm, p, body = n["fm"], n["path"], n["body"]
    if not n["has_fm"]:
        issues["missing_frontmatter"].append(p); continue
    if not fm.get("title"): issues["missing_title"].append(p)
    if not fm.get("date"): issues["missing_date"].append(p)
    if not fm.get("tags") or fm.get("tags") in ("[]","[ ]"): issues["missing_tags"].append(p)
    t = fm.get("type","")
    if not t: issues["missing_type"].append(p)
    elif t not in ALLOWED_TYPES: issues["bad_type"].append(f"{p} (type={t})")
    if not fm.get("summary"): issues["missing_summary"].append(p)
    # stub: body minus headings/template line under ~200 chars
    clean = re.sub(r'^#.*$','',body,flags=re.M)
    clean = re.sub(r'Template:.*$','',clean,flags=re.M)
    clean = re.sub(r'#todo\S*','',clean)
    if len(clean.strip()) < 200:
        issues["stub"].append(f"{p} ({len(clean.strip())} chars)")
    # todo markers
    todos = re.findall(r'#todo\S*', n["raw"])
    if todos:
        issues["todo"].append(f"{p} ({', '.join(sorted(set(todos)))})")
    # stale
    d = get_date(fm)
    rev = fm.get("agent-reviewed","").strip().strip('"')
    revd = None
    m = re.search(r'(\d{4})-(\d{2})-(\d{2})', rev)
    if m: revd = date(int(m.group(1)),int(m.group(2)),int(m.group(3)))
    if d and (TODAY - d).days > 365:
        if not revd or (TODAY - revd).days > 365:
            issues["stale"].append(f"{p} (date={d})")
    # title/filename mismatch
    ftitle = fm.get("title","").strip().strip('"')
    if ftitle and ftitle != n["name"]:
        issues["title_filename_mismatch"].append(f"{p} (title=\"{ftitle}\")")

print(json.dumps({"total": len(notes), "issues": issues,
                  "counts": {k: len(v) for k,v in issues.items()}}, indent=1, ensure_ascii=False))
