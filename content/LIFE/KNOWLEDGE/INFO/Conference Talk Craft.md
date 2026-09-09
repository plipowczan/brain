---
title: "Conference Talk Craft"
date: 2026-09-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "public-speaking", "presentation", "slides", "research", "evidence-based"]
type: compiled-note
source: "_raw/processed/2026-09-08-research-wystapienia-publiczne-prelekcje.md"
agent-created: true
agent-reviewed: 2026-09-09
summary: "Researched playbook for a 25-minute technical talk — 27 techniques ordered by when they happen, with the evidence behind each one graded."
---

# Conference Talk Craft

## 🗒️ Description

A researched playbook for running a 25-minute technical conference talk, assembled from 27 techniques
across narrative, slides, delivery, rehearsal, Q&A and stage operations. Each technique was researched
against its primary sources and its evidence graded, which turned out to matter more than expected:
**a third of the standard advice in this field is sound practice resting on a debunked justification.**

The material is cut for a practitioner who speaks occasionally because they built something worth
explaining — not a professional speaker. It assumes Polish delivery to a technical audience,
markdown-based slides ([[Marp]]), and roughly 25 minutes plus 5 minutes of questions.

This is wave 1 of the research. A second wave covering slide design, code on slides, narrative
structure and accessibility is outstanding. The full field-by-field data and the source list live
in the workspace under `_raw/research-workspaces/wystapienia-publiczne-prelekcje/`.

## 🧩 The techniques, in the order they happen

### Before you arrive

| Technique | What it is |
|---|---|
| **Word-for-word scripted opening** | The first 60–90 seconds written as prose and rehearsed, not improvised. Memorise the seams — first sentence, handover sentence — and stay free in the middle, so there is no single point of failure. |
| **Cold open patterns** | Contrarian claim, opening with a failure, a question to the room. In a saturated room the strongest hook is the one *least like* the talks before it, not the most dramatic one. |
| **Framing for a saturated audience** | What to delete when earlier speakers already covered your subject. Repeating the "what is X" introduction burns the slot. |
| **Modular time blocking** | Semi-independent blocks, each with its own open and close, so cutting one does not break the talk. |
| **Expansion joints** | Designed cut points, so a shortened slot gets *cut* rather than *rushed*. The named antipattern for the alternative is Shortchanged. |
| **Timed dry run** | One full run aloud with a stopwatch, targeting roughly 85% of the slot. |
| **Rehearsal ladder + declared plan** | Silent read → aloud → standing → to camera → to one person → dress rehearsal, with the number and type of runs committed to in advance. |
| **Modular drills** | Target, measure and correct one narrow seam — the first 30 seconds, one block handover — instead of only running the whole thing. |
| **LLM as red team** | Generate the hardest questions with the asker's motive and a 60-second ideal answer. Useful purely as input; the model cannot judge whether your answer is good. |
| **Red-team question bank** | Not the questions that recur, but the 15–20 that *hurt*. Four lines each: the issue in your words, a 40-second answer, the likely follow-up, the counter. |
| **Demo strategy** | Live, recorded, or narrated over a recording — chosen deliberately. The antipattern is Dead Demo: a demo filling time you have no content for. |
| **Demo environment hygiene** | Terminal and editor fonts at 18–22pt on a hall projector, notifications off at OS level, dedicated browser profile, predictive shell autocomplete disabled. |
| **On-screen data leak** | A different class of risk from a failed demo, because the recording is permanent. Scan with `gitleaks`, purge the identity surface, photograph every screen the audience will see and review it corner by corner. |
| **Marp export constraints** | Fragments exist only in HTML and vanish silently in PDF. A `<video>` slide exports as an empty player unless it carries `poster=`. |
| **No-slides, no-internet plan** | The narrative version of the talk on one card, plus a whiteboard version of the core diagram, plus a stated rule for how long you troubleshoot before abandoning the projector. |
| **Physiology on the day** | The variable that moves is hours spent talking in loud corridors beforehand, not what you drink backstage. Vocal-fold rehydration is measured in hours. |

### First 90 seconds

- **Question policy announced immediately** — questions at the end, on a signal, or in the hallway. Protects both the opening and the time budget.
- **Audience interaction** — a show of hands, counted, as the cheapest state change available. One device can do attention, retrieval, measurement and permission, but a question trying to do all four does none.
- **Seeding the first question** — a prepared opener for the case where nobody moves.

### Middle blocks

- **Energy in a bad slot** — state changes every 10–20 minutes; props and prizes.
- **Reading the room** — diagnosis routed through pre-talk data and one counted probe, *not* through faces.
- **Live narration over a recorded demo** — you play the recording and talk to it live. Keeps control of the clock without losing the sense that something is happening.
- **On-stage time control** — cumulative checkpoints in the presenter notes, a stated tolerance band, and cuts executed at block boundaries rather than immediately.

### Last 90 seconds and Q&A

- **Answer protocol** — stop moving, let them finish, paraphrase into the microphone, answer *one* thing in 30–60 seconds, close by moving rather than by asking.
- **Repeating the question** — for the microphone and the recording, since audience questions rarely reach the audio track. But never repeat a hostile framing verbatim.
- **Hostile questions, false premises, "I don't know"** — hold the room without arguing.
- **Closing after Q&A, not on it** — 45–60 seconds written in advance so the last sentence of the recording is yours.

## ⚖️ What the evidence actually supports

This is the part that changed how I read every other speaking source. The practices below are all
worth keeping. The reasons usually given for them are not.

### Sound practice, wrong justification

| Practice | The usual reason | What the research says |
|---|---|---|
| Change state every 10–20 min | "Attention drops after ten minutes" | Not supported (Wilson & Korn 2007). Bunce et al. 2010 measured lapses of *under a minute*. The same paper is the honest anchor: clicker questions and demonstrations lowered attention decline, and the benefit carried into the next segment. |
| Voice and body work | Mehrabian's 7-38-55 ratio | That study concerned contradictory signals about emotion and liking, not informational delivery. Mehrabian asked people to stop extrapolating it. |
| Managing pre-talk nerves | Power posing | Author retracted; eleven replications found no behavioural effect. The evidenced alternative is arousal reappraisal — naming the activation as excitement (Brooks 2014, *JEP: General*). |
| Rehearse to 85% of the slot | The number itself | Folklore; published targets scatter across 80–90%. What *is* evidenced is the bias it patches: the planning fallacy (Buehler, Griffin & Ross 1994). "One hour of rehearsal per minute of talk" is likewise unsourced. |
| Paraphrase the question | "It makes the asker feel heard" | Weger, Castle & Emmett 2010 (n=180): paraphrasing raised the listener's *social attractiveness* but produced no increase in felt understanding. The real reasons are mechanical — the microphone, the recording, thinking time, and ownership of the frame. |
| Close after Q&A | Recency effect, peak-end rule | Recency is precisely what vanishes under a filled delay (Glanzer & Cunitz 1966), which is a conference attendee's condition. Peak-end derives from 60-second cold-pressor trials. The load-bearing argument is simply that the recording ends where it ends. |
| Moderate caffeine before speaking | "It dries the voice" | A 2021 systematic review in *Journal of Voice* found no voice measure adversely affected. The defensible reason is tremor stacked on adrenaline. |
| Avoid alcohol the night before | "It dries the vocal folds" | The mechanism is sleep architecture — fragmented second-half sleep and reduced REM (Ebrahim 2013). |
| The post-lunch slot is hard | "Blood diverted to digestion" | The early-afternoon dip is bi-circadian and appears without a meal. The difficulty is real; the folk explanation is not. |
| Drill one block in isolation | "Part-task practice is efficient" | Wightman & Lintern 1985 found part-task training *less* efficient in most cases, winning mainly for complex, cleanly divisible tasks and mostly under backward chaining. |

Also debunked and worth not repeating: milk causes mucus, menthol lozenges soothe the voice.

### Reverse myths — the fear is the error

- **"I don't know" costs credibility.** It does the opposite. Mushkat & Mayo find it *raises* perceived
  trustworthiness against directive advice, explained "I don't know" beats bare "I don't know" on
  competence, and people systematically expect a larger penalty than materialises.
- **Seeding the first question is a rescue for a dead Q&A.** Carter et al. 2018, *PLOS ONE* — 247
  seminars, 35 institutions, 10 countries. Mean six questions per seminar; a male first questioner
  reduced the share of subsequent questions from women by six points. The first question sets a
  template either way, so the only choice is whether to set it deliberately.
- **The covert plant is standard practice.** Ethics literature treats an undisclosed arranged question
  as deception, and disclosed variants work as well. In a small professional community where the same
  people attend every event, a discovered arrangement costs disproportionately more than it returns.

### Where the evidence is genuinely strong

- **Declared rehearsal plan** — implementation intentions, Gollwitzer & Sheeran 2006: d = 0.65 across
  94 tests and over 8,000 participants. Committing to *how many* run-throughs, of what type and when,
  outperforms knowing you should rehearse.
- **Assertion-Evidence slides** (Alley) — one of very few slide formats with comprehension and recall
  data behind it.
- **Face-reading cannot carry "reading the room"** — Barrett et al. 2019 and Savitsky & Gilovich 2003.
  Route diagnosis through pre-talk observation, one counted probe, and coarse behavioural signals.

### False attributions to avoid

"Cold Open" is **not** a Presentation Patterns pattern — verified against the full glossary. Neither
are Emergency Broadcast System or Dessert First. Cold Open is a borrowed screenwriting term.
**Talklet** means roughly 20-minute units, not the 3-minute blocks it is often cited for.
**Lipsync** (replaying a recorded tool interaction inside the talk) and **Live on Tape** (a recorded
version of the whole talk, distributed) are two different patterns, frequently merged.

## 🔧 Tooling reality

Verified empirically on Marp CLI v4.4.1 / Core v4.3.1 rather than read from documentation:

- `*` and `n)` fragments emit `data-marpit-fragment` in HTML and **flatten silently in PDF** — every
  item lands on one page, no warning. Load-bearing reveals must become separate slides.
- A `<video controls muted>` slide exports to a PDF page whose only text is the control bar's `0:00`,
  with no image. **`poster=` embeds that frame** and removes the empty player.
- `--pdf-notes` attaches presenter notes as PDF annotations; `--notes` writes a separate text file;
  `transition:` is HTML-only.
- Native Mermaid is a Core v5 feature and unavailable on v4. Pre-render diagrams to SVG.

The practical consequence: if the PDF is your backup *and* the file the organiser receives, design to
the PDF and treat HTML-only behaviour as decoration.

## 📖 Further reading

- [[Public Speaking]] — hub note
- [[TED Talks]] — Anderson: the idea is the payload; the five-step explanation ladder
- [[The Art of Public Speaking]] — Carnegie: emphasis, gesture, voice, and an argument-testing protocol that predates red-teaming by a century
- [[Marp]], [[Marp CLI]], [[Claude Code Marp Workflow]] — the deck toolchain
- [[Progressive Disclosure]] — the same layered-reveal principle applied to knowledge bases

---
Template: [[templates/knowledge_note_info]]
