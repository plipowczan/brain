# Design: export-privacy-levels

## Context

`/export` (archived change `note-bundle-export-import`) ships verbatim notes with a manifest; it is read-only for the vault and uses 2 interaction points (selection confirm, depth-1 closure). This change layers a redaction pipeline on top for bundles leaving the trust boundary of one's own brains. All product decisions were made in the explore session (2026-07-11/12); this design records them.

Vault reality feeding the policy: this brain publishes all of `content/` to the public web already, but bundles travel context-free and kb-template subscribers may run fully private vaults — the feature is designed for the bundle boundary, not the site boundary.

## Goals / Non-Goals

**Goals:**
- `me` level = byte-for-byte today's behavior; zero regression risk.
- `--public` = redact-then-verify pipeline with one extra approval table (3 prompts total).
- Policy legible and per-vault tunable without editing the skill.
- No redaction trace in the shipped artifact; full trace kept locally.

**Non-Goals:**
- `trusted` level, import-side changes, `privacy:` frontmatter rollout, site-build redaction, manifest format bump.

## Decisions

### D1 — Level as extensible enum, `me` is the untouched default
`/export [--public] <selector>`. Absent flag → `me` path: the existing workflow runs with no added steps, no report file, no behavior delta. `--public` inserts phases 3a–3c (below) between closure and packaging. A future `trusted` adds a policy profile, not new machinery. Rejected: `--level me|public` verbose form as primary UX (accepted as alias).

### D2 — Policy = default categories in SKILL.md + `content/_privacy.md` overrides
Default policy (baked into the skill, applies to every vault):

| Class | Action |
|-------|--------|
| Secrets/credentials/keys | always cut (and flag — they should not be in notes at all) |
| Third-party PII (names, client companies) | always cut |
| Health, finance (amounts, wallets, strategies) | always cut |
| Rates, contracts, commercial identifiers | always cut |
| Personal/commercial context | genericize ("my client's real-estate platform" → "a real-estate platform") |
| Tools used, howtos, technical opinions, the fact of using something | keep |

`content/_privacy.md` (optional, underscore-prefixed → outside index protocol and Quartz build) adds vault-specific rules: extra always-cut terms, explicit exceptions ("my own name is public — this vault is published"). Read at `--public` export start; absence = defaults only. kb-template ships a commented example.

### D3 — Verdict table (interaction 3, `--public` only)
After closure, redact every selected note in a working copy (scratchpad), then show one table: note | include/redact/exclude | "what was cut" summary. `exclude` for unsalvageable notes (substance itself is private — e.g. a personal finance strategy). User approves/edits as a whole; "show diff [[X]]" renders a full before/after diff for any note before approving. Consistent with import's triage pattern. Budget: `me` 2 prompts, `--public` 3.

### D4 — Redact-then-verify: regex sweep + adversarial audit
Order, after user approves verdicts, before zipping:
1. **`privacy_sweep.py`** (new, deterministic, stdlib-only): scans redacted copies for hard patterns — emails, phone numbers, IBAN/card numbers, API-key shapes (`sk-…`, `ghp_…`, AWS keys, generic high-entropy tokens), crypto wallet addresses. Exit report JSON with file/line/pattern-class (matched text only locally, never in bundle).
2. **Adversarial LLM audit**: fresh pass over redacted copies with the policy + `_privacy.md`, prompt role "find remaining private information".
Hits from either net → corrections applied and folded into the (already approved) verdict summaries in the local report; if a hit forces a verdict change (redact→exclude), re-show only the affected rows — the sole case where a 4th interaction is permitted, expected rare.
Rejected: audit-only (loses the cheap deterministic net), sweep-only (misses contextual leaks like names).

### D5 — Wikilink leak rule: de-personalize the title, keep the link
Links pointing at excluded notes or at notes matching the privacy policy:
1. **De-personalize title** when the leak is a personal marker: `[[My Crypto Strategy]]` → `[[Crypto Strategy]]`, `[[My Investment Strategy]]` → `[[Investment Strategy]]`. Stays a wikilink (imports under the normal broken-link rule at the receiver).
2. **Fallback** when the title itself is the private datum (person name, client company): genericize the surrounding text ("a client project") or cut the sentence when it loses meaning.
Every transformation counts in "what was cut". Deliberate, documented exception to the import-side "broken links stay verbatim" rule: that rule protects graph re-stitching between one's own vaults; here the title leaks to strangers. Alias handling: `[[Private Note|alias]]` — the alias already masks the title; keep alias text, de-personalize the target.

### D6 — No redaction trace in the shipped artifact
Manifest: format 1, unchanged fields, no `privacy` key, no per-note `redacted` flags. Shipped note files carry no `redacted:` frontmatter either — the bundle is indistinguishable from a full export (user-accepted risk, explore decision 5b). Consequence embraced: version confusion is mitigated only by the local report; import-side merges of redacted vs full versions resolve through normal collision triage (hashes differ).

### D7 — Local redaction report: the one read-only exception
`--public` writes `content/_outputs/reports/export-<date>-<slug>.md`: selection, verdicts, per-note cut log (including link transformations), sweep/audit hits and resolutions, bundle path. `_outputs/` is build-excluded and outside the index protocol — no index updates. `me` level writes nothing (read-only rule fully intact). The main spec's read-only requirement is MODIFIED to state this single exception.

### D8 — Redaction works on copies; sources never touched
Redacted copies live in the scratchpad staging dir; `bundle.py pack` gains nothing — it already packs arbitrary file bytes; the skill points it at the staged copies for redacted notes and originals for `include` verdicts. Manifest `sha256` = shipped (redacted) bytes, exactly as the format already defines. No `privacy-class:` frontmatter cache written to source notes (rejected: breaks read-only; revisit only if `--public` exports become frequent enough that re-redaction cost hurts).

### D9 — Dual-home + changelog, as before
Skill + new script mirrored byte-identical to `kb-template/.claude/skills/export/`; entry in `kb-template/CHANGELOG.md` under `[Unreleased]`; EXPORT rows in root `AGENTS.md` and `AGENTS.template.md` mention the level; drift check must stay clean.

## Risks / Trade-offs

- [LLM redaction misses a contextual leak] → D4 double net (deterministic sweep + fresh-context audit); verdict table + on-demand diffs keep a human check; policy failures feed `_privacy.md` rules so the same leak class can't recur.
- [Over-redaction hollows notes out] → `exclude` verdict for unsalvageable notes instead of husk-redaction; "what was cut" summaries make over-cutting visible at approval time.
- [No redaction trace → version confusion (5b)] → accepted by user; local report is the only record; collision triage on import handles redacted-vs-full merges naturally.
- [`_privacy.md` itself becomes a sensitive file] → it lives in `content/` but is underscore-prefixed: excluded from Quartz build, indexes, and `/export` packing (existing `excluded()` rule catches `_`-prefixed paths only at top level — extend exclusion so `_privacy.md` can never be packed).
- [Regex sweep false positives (e.g. arXiv IDs shaped like phone numbers)] → sweep reports classes with context lines; agent dismisses false positives in the report rather than blindly cutting; sweep never auto-edits.
- [4th interaction on sweep/audit hits] → only when a verdict flips; expected rare; alternative (silent verdict change) is worse — user approved a table that no longer matches reality.

## Migration Plan

Additive; default path (`me`) is byte-identical to current behavior. Rollback = revert skill/SKILL.md changes and delete `privacy_sweep.py` (both homes) + revert doc/changelog/spec edits. No data migration.

## Open Questions

- OQ1: exact regex pattern set for `privacy_sweep.py` v1 (start: email, E.164/PL phone shapes, IBAN, 4×4 card digits, `sk-`/`ghp_`/`AKIA` key prefixes, BTC/ETH address shapes; extend from real sweep misses).
- OQ2: should `_privacy.md` ship in kb-template as a commented template file or only be documented? (Resolved during apply: shipped as commented example.)
- OQ3 (found in the verification dry run): a `redact`-verdict note whose OWN title/path contains private data (e.g. a client name) has no retitle mechanism — manifest `path`+`title` would leak it. v1 answer: such notes get `exclude` (as exercised with the client-named PROJECTS note). If real usage wants to ship them redacted, a future change needs a retitle-on-export rule (new path/title in manifest, link rewrite inside the bundle).
