# Proposal: export-privacy-levels

## Why

`/export` today ships notes verbatim — fine between one's own brains, but a bundle handed to another person or published openly can leak private data: third-party PII (client names), health and finance details, commercial context, and even private note titles inside wikilinks. Subscribers of kb-template with non-public vaults have no safe way to share note packs at all.

## What Changes

- `/export` gains a privacy level: default `me` (verbatim, exactly today's behavior — no change) and `--public` (redaction pipeline). The level is an extensible enum; a future `trusted` slots in without breaking anything.
- `--public` adds a redaction pass per note with verdicts **include / redact / exclude**, shown as one approvable table ("what was cut" summaries, full per-note diff on demand). Export interaction budget: 2 prompts for `me` (unchanged), 3 for `--public`.
- Redaction policy: default category rules baked into the skill (always cut: secrets, third-party PII, health, finance, rates/contracts; genericize commercial context; keep: tools, howtos, technical opinions) + optional per-vault override file `content/_privacy.md`.
- Post-redaction safety net, before zipping: deterministic regex sweep (emails, phones, IBAN/cards, API keys, wallet addresses — script, no LLM) + fresh-context adversarial LLM audit pass; hits feed back into the verdict table.
- Wikilink leak handling: links to excluded/private notes get **de-personalized titles** (`[[My Crypto Strategy]]` → `[[Crypto Strategy]]`); when the title is unsalvageable (person name), genericize the text or cut the sentence. Deliberate exception to the import-side "broken links stay verbatim" rule.
- Manifest carries **no trace of redaction** (no privacy field, no per-note flags) — a public bundle is indistinguishable from a full one (user-accepted risk). The full redaction log goes only to a local report in `content/_outputs/reports/` (the sole write-exception to export's read-only rule, applies to `--public` only).
- Both skill homes updated (`.claude/skills/export/` + `kb-template/.claude/skills/export/`) + `kb-template/CHANGELOG.md` entry.

## Capabilities

### New Capabilities

_None — redaction is a behavior of the export capability, not a standalone one._

### Modified Capabilities

- `note-bundle-export`: adds privacy-level parameter and the `--public` redaction pipeline (policy, verdict table, verification sweeps, link de-personalization, local redaction report); relaxes the read-only requirement to permit exactly one local report file at `--public`; manifest requirement explicitly unchanged (no redaction metadata).

## Non-goals

- No `trusted` level in this change (enum reserved, policy undefined until a real use-case).
- No changes to `/import` — a redacted bundle imports like any other; content differences resolve through the existing collision triage.
- No retroactive privacy labeling of existing notes (no `privacy:` frontmatter rollout, no writes to exported source notes — the redacted copy exists only inside the bundle).
- No bundle-format bump: manifest stays format 1 (deliberately carries no redaction metadata).
- No redaction for the Quartz site build — the published website is out of scope (its boundary is `quartz.config.ts` ignorePatterns).

## Impact

- **Code layer**: `.claude/skills/export/SKILL.md` (level parameter, redaction workflow, policy, interaction 3) + new `scripts/privacy_sweep.py` (regex patterns scan) + tests; mirrored byte-identical to `kb-template/.claude/skills/export/`; `kb-template/CHANGELOG.md` entry; root `AGENTS.md` / `AGENTS.template.md` EXPORT row mentions levels; `.claude/skills/AGENTS.md` updated.
- **Content layer**: recognizes optional `content/_privacy.md` (never required; template may ship a commented example); `--public` writes one report to `content/_outputs/reports/` (build-excluded).
- **Specs**: delta on `openspec/specs/note-bundle-export/spec.md` (MODIFIED read-only + ADDED redaction requirements). `note-bundle-import` spec untouched.
- **Indexes**: none — `_outputs/` and `_privacy.md` (underscore-prefixed) are outside the wiki-note index protocol.
