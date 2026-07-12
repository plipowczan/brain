# Tasks: export-privacy-levels

## 1. Deterministic plumbing

- [x] 1.1 Write `.claude/skills/export/scripts/privacy_sweep.py`: stdlib-only scan of a directory of .md files for emails, phone shapes (E.164 + PL), IBAN, card numbers, API-key prefixes (`sk-`, `ghp_`, `AKIA`, high-entropy tokens), BTC/ETH wallet shapes; JSON report (file, line, pattern class, context); report-only — never edits; exit 0 clean / 1 usage / 2 hits found
- [x] 1.2 Write `test_privacy_sweep.py`: one positive + one negative case per pattern class, plus false-positive guard (arXiv id not flagged as phone)
- [x] 1.3 Fix `bundle.py excluded()`: reject underscore-prefixed **files** as well as folders at any depth (today only folder segments are checked — `content/_privacy.md` would pack); extend `test_bundle.py` with `_privacy.md` case
- [x] 1.4 Run both test suites green

## 2. Export skill — redaction pipeline

- [x] 2.1 SKILL.md: privacy level parameter (`me` default = today's flow untouched, `--public`, unknown → abort); document that `me` keeps 2-prompt budget and writes no report
- [x] 2.2 SKILL.md: default redaction policy table (always-cut / genericize / keep categories) + `content/_privacy.md` override contract (optional, extends/overrides, absence = silent defaults)
- [x] 2.3 SKILL.md: verdict phase — redact working copies in scratchpad staging, one approvable table (note | include/redact/exclude | what-was-cut), diff on demand inside the same prompt, 3-prompt budget at `--public`
- [x] 2.4 SKILL.md: verification phase — `privacy_sweep.py` run + fresh-context adversarial audit pass; hits → fix + log; verdict flip → re-present affected rows only; sweep never auto-edits
- [x] 2.5 SKILL.md: wikilink de-personalization rules (strip personal markers keeping wikilink; person/client-name titles → genericize text or cut sentence; aliases keep alias text; all logged)
- [x] 2.6 SKILL.md: packaging from staged copies (include-verdict notes from originals, redact from staging), manifest unchanged shape (no privacy metadata, hashes = shipped bytes); local report `content/_outputs/reports/export-<date>-<slug>.md` written at `--public` only

## 3. Vault + template docs

- [x] 3.1 Author commented example `kb-template/content/_privacy.md` (default-off rules showing syntax: always-cut terms, exceptions); do NOT create `content/_privacy.md` in this brain (defaults suffice — vault already public)
- [x] 3.2 Root `AGENTS.md` EXPORT row: mention `--public` redaction level; same in `kb-template/AGENTS.template.md`
- [x] 3.3 `.claude/skills/AGENTS.md`: document redaction pipeline, 3-prompt budget at `--public`, the read-only exception (local report)

## 4. kb-template mirror

- [x] 4.1 Copy updated `export/` skill (SKILL.md + both scripts + tests) byte-identical to `kb-template/.claude/skills/export/`
- [x] 4.2 `kb-template/CHANGELOG.md` entry under `[Unreleased]`: privacy levels, policy file, sweep script, what subscribers pull
- [x] 4.3 `scripts/check-kb-template-drift.sh` — clean for export

## 5. Verification

- [x] 5.1 Regression `me`: export the same 3-note selection as the archived change's test; bundle must contain byte-identical note copies (hashes equal to fresh vault hashes), no report file created, `content/` clean
- [x] 5.2 Exclusion: attempt to pack `_privacy.md` style path → omitted (unit test from 1.3 + selector-level check)
- [x] 5.3 `--public` dry run on 2 real notes with known leaks (e.g. `CODE/KNOWLEDGE/HOWTO/Wiring Serena into a Codebase` — client monorepo context; one PROJECTS note with client name): verify verdict table, link de-personalization, sweep pass, report written to `_outputs/reports/`, sources byte-identical after; then delete test bundle + report
- [x] 5.4 Verify indexes unchanged after cleanup (no index task needed — `_outputs/` outside protocol) and `npx quartz build` passes
- [x] 5.5 `openspec validate export-privacy-levels` passes
