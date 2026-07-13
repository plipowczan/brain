---
title: "Claude Code Marp Workflow"
date: 2026-04-29
enableToc: true
openToc: true
tags: ["knowledge", "howto", "ai", "claude-code", "presentation", "markdown", "marp"]
type: knowledge-note
source: "_raw/inbox/Stop Staring at a Blank Deck How I Use Claude Code + Marp to Think Through Presentations.md"
agent-created: true
summary: "4-phase workflow for creating Markdown presentations: Brainstorm (interview) → React (first draft) → Iterate (chat or VS Code) → Export (HTML/PPTX)"
---
# Claude Code Marp Workflow

A workflow by Omer Rosenbaum (article on freeCodeCamp, March 2026) describing how to create presentations through Markdown with [[Claude Code]] + [[Marp]]. The key insight: the hard part isn't the slide layout, it's the *story*. It's easier to react to someone else's draft than to stare at a blank page. Claude generates the first draft, you iterate on it through conversation or by editing the `.md` file directly.

## 🗒️ Task

Create a coherent presentation (story → structure → slides) in minutes, using [[Claude Code]] as interviewer and first-draft generator, and [[Marp]] as the engine that renders Markdown into HTML/PPTX.

## 🛠️ Prerequisites

- [[Marp CLI]] installed: `npm install -g @marp-team/marp-cli`
- [[Claude Code]] (or [[Cursor]] / GitHub Copilot — the skill is agent-agnostic)
- (optional) VS Code with the Marp extension for live preview
- `Omerr/claude-skills` skill installed via [[Vercel Skills]]: `npx skills add Omerr/claude-skills`

## 📝 Instructions

### 🧩 Phase 1 — Brainstorm (interview)

You fire the slash command, Claude runs a ~5-question interview:

```
> /create-marp-deck API rate limiting

Claude: What's this presentation about? What should the audience walk away knowing?
User:   How our rate limiting works, which algorithm we chose and why...
Claude: Who's the audience?
User:   Platform engineering team — they know our stack but haven't seen the rate limiting internals.
Claude: What are the key points or sections you want to cover?
User:   1. Why we need rate limiting (the incident last month)
        2. Token bucket vs sliding window — our decision
        3. How to configure it per-service
        4. Monitoring dashboard walkthrough
```

The goal: force the story to be articulated **before** the first slide exists. The interview phase is one of two parts of the skill file (~200 lines), so you don't re-explain the same conventions to Claude every time.

### 🧩 Phase 2 — React (first draft)

Claude generates the entire Marp Markdown file with:
- A title slide with `<!-- _class: lead title-slide -->`
- Section dividers with gradient backgrounds (`<!-- _class: lead part-problem -->`)
- Breadcrumb headers (`<!-- header: "The Problem > **Algorithms** > Implementation" -->`)
- Consistent formatting (CSS palette in the skill file)

Title slide in raw Marp Markdown:

```markdown
<!-- _class: lead title-slide -->

# API Rate Limiting
## A Technical Deep Dive

**Team**: Platform Engineering
**Date**: February 2026
```

The draft doesn't have to be perfect — it's there as a starting point you **react to**. That's dramatically faster than a blank canvas.

### 🧩 Phase 3 — Iterate (conversation or VS Code)

Two parallel editing paths, mix as you like:

**(a) Via Claude Code:**
```
> Slide 6 is too dense. Split the algorithm comparison into two slides,
  one for token bucket, one for sliding window.

Claude: I'll split slide 6 into two separate slides...
        - # Algorithm Comparison
        - | Feature | Token Bucket | Sliding Window |
        + # Token Bucket
        + Tokens refill at a steady rate...
        + ---
        + # Sliding Window
        + Track exact timestamp of every request...
```

**(b) Directly in VS Code:** Open the `.md`, hit `Ctrl+Shift+V` — the Marp extension gives a split view (source ↔ rendered). Claude edits the file, VS Code detects the change, the preview refreshes automatically. Side-by-side: Claude in one window, VS Code in another.

### 🧩 Phase 4 — Export

The skill triggers the conversion automatically after generating a deck. ~2s for a 15-slide deck.

```bash
# Standard (every slide as an image — pixel-perfect, but text not editable in PowerPoint)
marp --no-stdin deck.md -o deck.html
marp --no-stdin --pptx deck.md -o deck.pptx

# Editable (text boxes via LibreOffice — requires LibreOffice)
marp --no-stdin --pptx-editable deck.md -o deck.pptx
```

Three outputs:
- `.md` — source, version-controlled, diffable
- `.html` — open in a browser, share on Slack
- `.pptx` — open in PowerPoint / Google Slides

**Editable PPTX gotcha:** LibreOffice produces text boxes that are too narrow, the text wraps and overlaps. The skill has a python-pptx post-processing script that auto-widens them. Just ask for "editable PPTX" — the skill takes care of the rest.

## 🧩 Conventions in the skill file (Under the Hood)

The skill is ~200 lines long and codifies specific stylistic choices:
- **Section dividers** — gradient background per section, so the audience intuitively knows when you switch topics (CSS `<!-- _class: lead part-problem -->`)
- **Breadcrumb navigation** — a header showing where you are in the deck, e.g. `The Problem > **Algorithms** > Implementation` with bold acting as a blue highlight (`header strong { color: #2563eb; }`). Omer writes that this is his favorite part — it eliminates the "wait, where are we?" syndrome
- **Marp frontmatter baseline** — `marp: true`, `theme: default`, `paginate: true`, `size: 16:9`. Four lines and you have widescreen + paginated

## 🧩 Use case: this very article

Omer wrote the article starting from a deck — he ran `/create-marp-deck`, went through the interview, produced 15 slides, and only then wrote the article. The argument: if the story doesn't flow across 15 slides, it won't flow across 1500 words. The deck becomes the outline.

This corresponds with Goal-Driven Execution from [[Karpathy Skills]] — instead of "write an article about X", you define a verifiable goal "story flows across 15 slides" and iterate until it does.

## ✅ Outcome

After all 4 phases you have:
- A coherent deck in Markdown in minutes, not hours
- Three output formats: `.md` / `.html` / `.pptx`
- A reusable workflow — subsequent decks go even faster (the skill already knows your conventions)
- The source in git — diffable, mergeable, AI-editable

## 🔗 Further reading

- Original article: https://www.freecodecamp.org/news/how-to-use-claude-code-and-marp-to-think-through-presentations/
- Author's skill repo: https://github.com/Omerr/claude-skills
- Demo deck (this article as slides): https://omerr.github.io/claude-skills/presentations/claude-code-marp/
- [[Marp]] — Markdown Presentation Ecosystem
- [[Marp CLI]] — `marp --no-stdin deck.md -o deck.html`
- [[Marpit]] — the framework underneath Marp
- [[Marp Core]] — engine with themes
- [[Vercel Skills]] — `npx skills add` as installer
- [[Karpathy Skills]] — related idea of structuring LLM workflows

---
Template: [[templates/knowledge_note_how_to]]
