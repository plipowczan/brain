---
title: "Slides for Technical Talks"
date: 2026-11-06
enableToc: true
openToc: true
tags: ["knowledge", "info", "public-speaking", "presentation", "slides", "marp", "research", "evidence-based", "compiled"]
type: compiled-note
source: "_raw/research-workspaces/wystapienia-publiczne-prelekcje/report.md"
agent-created: true
agent-reviewed: 2026-11-06
summary: "Fourteen slide-design techniques for technical talks — assertion-evidence, code on slides, diagram builds, legibility, accessibility, deck lint — evidence graded, with what survives a Marp PDF export."
---

# Slides for Technical Talks

## 🗒️ Description

The visual layer of a talk, researched as the second wave behind [[Conference Talk Craft]]. Fourteen
techniques covering slide structure, showing a mechanism or code, making the room able to read it, and
the small slides around the talk. Each is graded for evidence, and each carries the answer to the
question that decides my choices: **does it survive a Marp PDF export?** The PDF is both the file the
organiser receives and the backup that runs when the laptop does not, so anything that exists only in
the HTML deck is decoration.

The rule that falls out of it is the same one throughout: **a build step is a separate slide, never
a fragment.** Fragments, transitions and in-slide animation flatten to the final state in the PDF.

Siblings: [[Talk Narrative and Structure]], [[Delivery and Stage Operations]],
[[Practising and Reviewing Talks]].

## 🧩 The techniques

### Slide structure

| Technique | What it is | Marp PDF |
|---|---|---|
| **Assertion-Evidence** | Replace each topic title with a one- or two-line sentence stating the slide's claim, and fill the body with visual evidence instead of bullets. The only slide format here with controlled data behind it, though narrow (below). High priority. | yes |
| **Multimedia learning (Mayer)** | My voice is the narration and the slide is the picture. Never put on screen the sentences I am about to say, label the diagram directly instead of through a legend, cue where to look, cut what is interesting but not needed. | yes |
| **High-velocity styles** | One word, phrase or image per slide, advancing in step with my sentences (Takahashi, Lessig, Godin). Good for openings and tired rooms; costs rehearsal time and fights reuse. | yes, but meaningless without the voice |
| **Speaking deck, reading deck** | One Markdown source with three layers — what the room sees, what a reader needs, an appendix after the closing slide — and two build commands, instead of compromising one deck or maintaining two. | yes |

### Showing a mechanism or code

| Technique | What it is | Marp PDF |
|---|---|---|
| **Progressive diagram build** | Show a complex diagram as a sequence of slides, each adding one layer and greying out what was already explained, so the room looks at the part I am talking about. | yes, as separate slides |
| **Code on a slide** | About a dozen short lines, trimmed; monospace at 18 pt equivalent or more (24 px on a 1280×720 slide); only the discussed lines at full strength, the rest dimmed. | yes, with a selectable text layer |
| **Explain code temporally** | Walk through code in execution order, one fragment per slide: current lines at full strength, explained lines greyed out, the rest dimmed. A robust substitute for live coding. | yes, as separate slides |
| **Diagrams in Marp** | Pre-render diagrams to SVG and embed them as images: they stay vector and searchable in the PDF and can be built up in layers. | yes |

### Making the room able to read it

| Technique | What it is | Marp PDF |
|---|---|---|
| **Projector legibility and visual identity** | Design for the worst seat in a lit room: text sized from the viewing geometry, high contrast that survives ambient light, fonts that render offline, and one theme of my own so every deck is recognisably mine. | yes, if fonts were available at build time |
| **Slide accessibility** | Colour never carries meaning alone, I say aloud what a chart shows instead of "as you can see", text stays large and high-contrast, the deck declares its language, and the published recording gets corrected captions. | partly — the PDF is untagged |
| **Deck lint** | Before sending or presenting, run a fixed checklist of named failure modes — Bullet-Riddled Corpse, Ant Fonts, Floodmarks, Photomaniac, Slideuments, Alienating Artifact — partly automated against the Markdown source, partly a visual pass. | n/a, it is a pre-export check |

### Around the talk

| Technique | What it is | Marp PDF |
|---|---|---|
| **Resource slide** | One large QR code pointing to a short URL on my own domain (so I can retarget it later), the same URL printed beside it, said aloud letter by letter, left up through Q&A. | yes |
| **Preroll slide** | Title, name and the resource QR on screen while the room fills: people know they are in the right room, early arrivals can scan, I get a live projector check from the back row, and I am free to step off the stage and greet people. | yes |
| **Markdown pipeline and tool choice** | Keep the deck as Markdown in the repo and pick the renderer by what the stage needs. Marp gives the most faithful PDF and one toolchain for talks and carousels. Slidev adds click-stepped code, live drawing and a camera overlay at the cost of a Vue/Vite app; reveal.js sits between. I stay on Marp and prototype Slidev only for a talk dominated by code walk-throughs. | partial |

## ⚖️ What the evidence actually supports

### Sound practice, wrong justification

| Practice | The usual reason | What the research says |
|---|---|---|
| Assertion-Evidence | "Proven to beat every other slide style" | The experiments are classroom and lab comparisons with engineering and geoscience students, run almost entirely by Alley's group. The one independent study found supports only the cognitive-load part and found no effect on understanding. A recall and comprehension gain for short explanatory talks to students; practitioner consensus beyond that. |
| Cut text on slides | "Never put text on a slide" and "people hold 7 ± 2 items" | Folklore built on top of Mayer's work, not findings of it. The experiments are mostly short, computer-based lessons with immediate tests, so applying them to a live 25-minute talk is an extrapolation and the effect sizes do not transfer. |
| One idea per slide at speed | "It improves learning and recall" | Unsupported. Classroom PechaKucha data show better ratings with equal recall. The benefit is focus and energy, not retention. |
| Progressive build | "Animation helps learning" | Evidence for animation itself is weak; the benefit is better explained by segmenting and attention guidance. |
| Dark theme for code | "Developers use dark themes" | Contested by the polarity research (positive polarity wins, more so for small characters) and by projector physics: ambient light washes out a projector's blacks. |
| Minimum 30 pt | "Kawasaki said so" | A heuristic meant to force fewer words. The right size depends on the viewing ratio, and the farthest viewer, not a point number, is the rule. |
| Preroll slide | "Five free minutes of exposure make them like you" | Over-extends the mere-exposure effect. The practice is justified by orientation, early scanning, the live tech check and the greeting it enables. |
| Hand out slides | "Handouts hurt learning" | Contested by the lecture-handout research. The failure mode worth avoiding is the Slideument, a stage deck doing a reading deck's job. |
| QR at 10:1 | "Scan distance is ten times the code's width" | An industry heuristic; sources disagree on whether it is a target or a floor. Test with two phones, one old. |
| Accessibility | "A niche accommodation" | The same practices help the back row, the recording and non-native listeners. |

### Attribution

- **Crawling Code, Traveling Highlights and Charred Trail are Presentation Patterns glossary entries**,
  and the glossary credits nobody for them. They are often attributed to Damian Conway. His contribution,
  as recorded in second-hand notes of his talks, is the principle "explain code temporally, not
  spatially". Cite the principle to Conway and the names to Presentation Patterns.
- **Lipsync and Live on Tape** are two different patterns — see [[Conference Talk Craft]]. The recording of
  a conference talk is arguably closer to the second.

## 🔧 Marp reality, verified on CLI 4.5.1 / Core 4.4.0 (2026-11-06)

Checked on the installed toolchain instead of read from documentation. The earlier note recorded
CLI 4.4.1 / Core 4.3.1; nothing in it has changed except the version.

- `*` lists build item by item **only in the HTML deck**; the PDF shows every item at once.
- Fence line-highlight attributes such as `{2}` are **silently ignored**. Highlighting steps have to be
  hand-built as separate slides with marked-up lines. Overflowing code blocks are shrunk silently.
- A mermaid fence renders as **plain code** and the PDF shows the source. Marp Core v5 is still a release
  candidate; it adds Mermaid (flowchart, sequence, state, class, ER, XY only) and Shiki highlighting, but
  themes have to move from `.hljs-*` classes to `--marp-shiki-*` variables. A project-local v5 core is
  picked up by the CLI automatically, so **pinning the CLI version does not pin the core**.
- An **SVG added as an image stays vector** in the PDF with searchable text, Polish diacritics included.
  Page CSS cannot reach into an SVG loaded as an image, so CSS step classes need inline SVG and `--html`.
- `lang: pl` sets the language in both HTML and PDF. The PDF has **no tag structure**, so it is not an
  accessible PDF.
- `--pdf-notes` attaches presenter notes as PDF annotations; `--pptx` carries notes, `--pptx-editable`
  does not. Presenter view opens with `p` and shows the next slide, notes, clock and an elapsed timer.
- A `<video>` slide needs `poster=`, or it exports as an empty player.

Defects worth checking in my own theme, since two of them cost nothing to fix: code size below the
18 pt floor, hand-drawn SVG labels that render far below the projection floor, a theme that loads its
fonts from a web service at runtime (install them locally on the presenting laptop), and a size
directive that has no effect with the theme in use.

## 🔧 Cheapest first moves

- **Headline read-aloud**: pull every `# ` line out of the Markdown and read them as a paragraph to a
  colleague. Every headline that is a topic rather than a claim gets rewritten.
- **Back-row test for code**: put one snippet on a slide at template size, view it at 25% zoom from two
  metres, and trim until it reads.
- **Greyscale pass**: export the deck in greyscale and mark every slide where meaning disappears.
- **Lint pass** against the named antipatterns before the deck leaves the laptop.
- **Spell the short URL** to someone who types it on their phone without looking at the slide.

## 📖 Further reading

- [[Conference Talk Craft]] — wave one, including the first Marp export findings
- [[Public Speaking]] — hub note
- [[Talk Narrative and Structure]] · [[Delivery and Stage Operations]] · [[Practising and Reviewing Talks]]
- [[Marp]] · [[Marp CLI]] · [[Claude Code Marp Workflow]] — the toolchain
- [[Progressive Disclosure]] — the same layered-reveal principle, applied to knowledge bases
- [[TED Talks]] — Anderson on one idea per visual

---
Template: [[templates/knowledge_note_info]]
