---
title: "Public Speaking — Conference Talk Craft (Wave 1)"
date: 2026-09-08
enableToc: true
openToc: true
tags: ["research", "compiled", "presentation", "public-speaking", "slides", "marp"]
type: compiled-note
source: "deep research — content/_raw/research-workspaces/wystapienia-publiczne-prelekcje/"
agent-created: true
summary: "27 researched techniques for running, rehearsing and designing a 25-minute technical conference talk, ordered by when they happen"
---

# Public speaking — running a talk, training the craft, and designing the slides

Wave 1 of a two-wave research pass: **27 items**, the ones that hit a named gap in the speaker's own practice and could still change what happens at BBConf4.IT on 12 September 2026. Wave 2 (47 items — slides, code on slides, narrative craft, accessibility, meta) is not included here.

Items are ordered by **when they happen**, from preparation through the opening and the middle blocks to Q&A and the aftermath, so the report reads as a run of the day rather than as a catalogue of techniques. Fields that the research could not establish are omitted from each entry and listed at the end of it instead.


---

## Corrections that override the entries below

Written 2026-09-08 during `/b:research-deep` wave 1. **`/b:research-report` must apply every entry
below.** Several of these contradict claims that were still present in the item descriptions when the
research agents were dispatched, and a few contradict text that survives inside individual result
JSONs. Where a result file and this document disagree, this document wins.

### A. False attributions — do not cite

| Claim | Correction |
|---|---|
| "Cold Open" is a Presentation Patterns pattern | It is **not**. Verified against the full published glossary. Neither are Emergency Broadcast System or Dessert First. Cold Open is a borrowed screenwriting term. Do not attribute it to Ford, McCullough and Schutta. |
| Talklet means ~3-minute blocks | Talklet means **~20-minute units** — "instead of doing an hour-long presentation, do three semirelated 20-minute talks". The fine-grained 3-minute version is unnamed practitioner craft and the number has no source. |
| Lipsync and Live on Tape are the same technique | Two different patterns. **Lipsync** = recording the tool interaction and playing it back inside the talk (this is the BB4IT setup). **Live on Tape** = a recorded version of the entire presentation provided electronically. |

Genuine and quotable from the glossary: Talklet, Expansion Joints, Shortchanged, Breadcrumbs,
Echo Chamber, Negative Ignorance, Weatherman, Bunker, Charred Trail, Brain Breaks, Breathing Room,
Make It Rain, Emotional State, Know Your Audience, Greek Chorus, Posse.

### B. Myths to name, not repeat

Each of these is a **sound practice resting on a wrong justification**. Keep the practice, replace
the reason, and say so explicitly in the note rather than quietly dropping the myth.

1. **Ten-minute attention span.** Wilson & Korn 2007 found the evidence behind the rule does not
   support it; Bunce, Flens & Neiles 2010 measured lapses of under a minute. Replacement anchor:
   Bunce et al. also found clicker questions and demonstrations lowered self-reported attention
   decline *and the benefit persisted into the following segment* — which argues for more frequent
   re-entry points than the myth ever did. Mayer's segmenting principle supports the design shape
   but not an effect size, because it measures learner-paced multimedia and a live talk is not that.
2. **Mehrabian 7-38-55.** Concerned contradictory signals about emotion and liking, not
   informational delivery. Mehrabian himself asked people to stop extrapolating it.
3. **Power posing.** Author retracted; eleven replications found no behavioural effect. The
   evidenced alternative is arousal reappraisal — Brooks 2014, *JEP: General*.
4. **The 85 percent rule.** The constant is folklore; published targets scatter across 80–90 percent.
   What is evidenced is the bias it patches: the planning fallacy (Buehler, Griffin & Ross 1994).
   "One hour of rehearsal per minute of talk" is likewise unsourced.
5. **Paraphrasing a question makes the asker feel heard.** Weger, Castle & Emmett 2010 (n=180):
   paraphrasing raised the listener's *social attractiveness* but produced no increase in felt
   understanding or satisfaction. The honest justifications are mechanical — the microphone, the
   recording's audio track, thinking time, and ownership of the frame.
6. **Closing after Q&A works because of recency and peak-end.** Glanzer & Cunitz 1966 showed recency
   is precisely what vanishes under a filled delay, which is a conference attendee's condition.
   Peak-end derives from 60-second cold-pressor trials. The load-bearing argument is simply that the
   recording ends where it ends.
7. **The post-lunch dip is caused by digestion.** The early-afternoon dip (14:00–16:00) is
   bi-circadian and largely independent of eating. This makes the `late_slot` gap objectively real
   while killing the folklore explanation.
8. **Part-task drilling beats whole-task practice.** Wightman & Lintern 1985 found part-task training
   is *less* efficient in the majority of cases, winning mainly for complex, cleanly divisible tasks
   and mostly under backward chaining. Macnamara et al. 2014 caps expectations: deliberate practice
   explains under 1 percent of performance variance in professions.

9. **Caffeine dries the voice.** A 2021 systematic review in *Journal of Voice* (PMID 33752928) found
   no voice measure adversely affected, and rated the evidence unreliable for bias. The defensible
   reason to moderate caffeine before a talk is tremor on top of adrenaline, not dehydration.
10. **Alcohol dries the vocal folds.** The mechanism that matters is sleep architecture — fragmented
    second-half sleep and reduced REM (Ebrahim 2013) — not local drying.
11. **Milk causes mucus** and **menthol lozenges soothe the voice.** Both debunked; menthol is drying.
12. **Backstage water fixes a tired voice.** Systemic rehydration of vocal-fold tissue takes hours
    (MRI quantification, 2018). Water at 14:40 is surface comfort. The variable that actually moves
    on the day is how many hours are spent talking in loud corridors beforehand.
13. **"Always repeat the question."** The Buckley School's critique of the word *always* holds: in a
    small room it is unnecessary, multi-part questions should be split, and unclear ones clarified
    rather than echoed. More importantly, media training's *never repeat the negative* applies —
    repeating a hostile framing verbatim puts the damaging sentence in the speaker's own voice, on a
    recording, permanently. Reframe instead of echoing.

### C. Reverse myths — the fear is the error, not the behaviour

- **"I don't know" costs credibility.** Mushkat & Mayo find the opposite: "I don't know" *raises*
  perceived trustworthiness against directive advice, explained IDK beats bare IDK on competence, and
  people systematically expect a larger penalty than materialises. Correct the speaker's fear, not
  the behaviour.
- **Seeding the first question is a rescue for a dead Q&A.** Carter et al. 2018, *PLOS ONE* — 247
  seminars, 35 institutions, 10 countries; mean 6 questions per seminar in 12 minutes; a male first
  questioner reduced the share of subsequent questions from women by 6 points. The first question
  sets a template either way, so the choice is whether to set it deliberately.
- **The covert plant is standard practice.** Public-speaking ethics literature treats an undisclosed
  arranged question as deception, and three disclosed variants achieve the same effect. In a small
  Polish IT community where the same people attend every event, a discovered *ustawka* costs
  disproportionately more than it returns.

### D. Facts verified on this machine — do not re-derive from documentation

Installed toolchain: **Marp CLI v4.4.1 / Core v4.3.1** (note `slides/config.yaml` pins `^3`).

- `*` and `n)` fragments emit `data-marpit-fragment` in HTML and **flatten silently in PDF** — all
  items land on one page with no warning.
- A `<video controls muted>` slide exports to a PDF page whose only text is the control bar's `0:00`,
  with no embedded image. **Adding `poster=` embeds that frame and removes the empty chrome.**
- `--pdf-notes` attaches presenter notes as PDF annotations; `--notes` writes a separate text file;
  `transition:` appears in HTML only.
- Native Mermaid is a Core v5 claim and is **not available here**. Pre-render diagrams to SVG.

Defects found in `C:\Projects\agentic-ai-private`, all cheap to fix:

- `slides/themes/plsoft-dark.css` defines no `section.video` rule, so `<!-- _class: video -->` is a
  styling no-op.
- The NCP4 deck's video slides use `controls autoplay muted`: `autoplay` removes control over when
  the demo starts, and `muted` (which autoplay requires) will silence a narrated clip.
- `slides/config.yaml` pins `marp_cli_version: "^3"` against a resolved v4.4.1.
- Windows Terminal `profiles.defaults` is empty, leaving the stock 12pt against a 14–18pt bold floor
  for stage demos. (PSReadLine `PredictionSource` is already `None`, so the history-autocomplete leak
  risk is closed.)

### E. BB4IT facts — the authoritative source is `project.md`, not `brief.md`

`context/plsoft/projects/BB4IT/project.md`, updated 2026-09-08 after reading all nine talk
descriptions, records:

- **Two** talks are explicitly about agents (Wojtyna, Wolny), with two adjacent (Michaluk,
  Rzeszowski). The earlier figure of four was guessed from titles.
- **State no count of earlier talks from the stage at all** — it is contestable by anyone who sat
  through the day.

`slides/workspace/bb4it/brief.md` still carries the stale "cztery wprost o agentach" and a hook line
built on it. Twelve occurrences of the stale claim were corrected across six result JSONs on
2026-09-08, including a ready-made Polish closing line that used *"słyszeliście dziś już cztery
razy"*. Any opening or closing script in the report must avoid a numeric claim entirely.

### F. Facts with a short shelf life — re-verify in the week of the talk

- **LLM provider data-retention terms.** These moved recently and the common claim that "every
  provider keeps your data for 30 days" is stale. This underpins the sensitive-data answer that
  already caught the speaker once at NoCode Poland #4. Stating a confident number on a recorded talk
  is worse than saying it will be checked.
- **Polish speaking rate in words per minute.** No research-grade source exists; only coaching
  figures. Derive the number from the speaker's own recordings rather than importing the English
  130–150 wpm.

### G. Where diagnosis cannot rest on face-reading

Barrett et al. 2019 (*Psychological Science in the Public Interest*) and Savitsky & Gilovich 2003
mean facial expression cannot carry "reading the room". Route the diagnosis through pre-talk data
(sitting in the preceding sessions in the same room), one counted probe, and coarse behavioural
signals instead.


---

## Contents

1. [Data leaking on screen](#data-leaking-on-screen) — *before arriving* · demo_risk · prio high · 0 min · prep low to medium
2. [Demo environment hygiene](#demo-environment-hygiene) — *before arriving* · demo_risk · prio high · 0 min · prep medium
3. [Demo strategy — live, recorded or hybrid](#demo-strategy-live-recorded-or-hybrid) — *before arriving* · demo_risk · prio high · 7 min · prep medium
4. [Expansion joints — 15, 25 and 45 minute versions of one talk](#expansion-joints-15-25-and-45-minute-versions-of-one-talk) — *before arriving* · timing · prio high · 0 min · prep medium
5. [Framing for a topic-saturated audience](#framing-for-a-topic-saturated-audience) — *before arriving* · late_slot · prio high · prep medium
6. [LLM as red team and rehearsal partner](#llm-as-red-team-and-rehearsal-partner) — *before arriving* · qa · prio high · 0 min · prep medium
7. [Marp export constraints](#marp-export-constraints) — *before arriving* · demo_risk · prio high · 0 min · prep low
8. [Modular drills on one block or transition](#modular-drills-on-one-block-or-transition) — *before arriving* · opening · prio high · 0 min · prep low
9. [Modular time blocking and talklets](#modular-time-blocking-and-talklets) — *before arriving* · timing · prio high · 0 min · prep medium
10. [On-stage time control](#on-stage-time-control) — *before arriving* · timing · prio high · 0.2 min · prep low
11. [Reading the room and adapting live](#reading-the-room-and-adapting-live) — *before arriving* · late_slot · prio high · 0.3 min · prep low
12. [Red-team question bank](#red-team-question-bank) — *before arriving* · qa · prio high · 0-2 min · prep high
13. [Rehearsal ladder and a declared rehearsal plan](#rehearsal-ladder-and-a-declared-rehearsal-plan) — *before arriving* · opening · prio high · 0 min · prep medium
14. [Timed dry run and the 85 percent rule](#timed-dry-run-and-the-85-percent-rule) — *before arriving* · timing · prio high · 0 min · prep low
15. [Physiology on the day](#physiology-on-the-day) — *before arriving* · late_slot · prio medium-high · 0 min · prep low
16. [The no-slides, no-internet plan](#the-no-slides-no-internet-plan) — *before arriving* · demo_risk · prio medium-high · ~25 min · prep low to medium
17. [Audience interaction](#audience-interaction) — *first 90 seconds* · late_slot · prio high · 0.6 min · prep medium
18. [Cold open and hook patterns](#cold-open-and-hook-patterns) — *first 90 seconds* · opening · prio high · 0.5 min · prep low
19. [Question policy announced in the first minute](#question-policy-announced-in-the-first-minute) — *first 90 seconds* · qa · prio high · 0.25 min · prep low
20. [Seeding the first question](#seeding-the-first-question) — *first 90 seconds* · late_slot · prio high · 0.1 min · prep low
21. [Word-for-word scripted opening](#word-for-word-scripted-opening) — *first 90 seconds* · opening · prio high · 1.5 min · prep low
22. [Energy in a bad slot](#energy-in-a-bad-slot) — *middle blocks* · late_slot · prio high · 1.5 min · prep low to medium
23. [Live narration over a recorded demo (Lipsync)](#live-narration-over-a-recorded-demo-lipsync) — *middle blocks* · demo_risk · prio high · 5-7 min · prep medium
24. [Closing after Q&A, not on it](#closing-after-qa-not-on-it) — *last 90 seconds* · reuse · prio high · 0.75-1.0 min · prep low to medium
25. [Answer protocol and paraphrase](#answer-protocol-and-paraphrase) — *Q&A* · qa · prio high · 0 min · prep low
26. [Hostile questions, false premises and I don't know](#hostile-questions-false-premises-and-i-dont-know) — *Q&A* · qa · prio high · 0 min · prep low
27. [Repeating the question](#repeating-the-question) — *Q&A* · qa · prio high · 0 min · prep low


---

## Data leaking on screen

> Treat the screen you put on a projector as published: run a deliberate leak pass over keys, .env files, client names, mail, history and messengers before the demo is recorded, because the talk goes to YouTube and the mistake is permanent and not yours to delete.

### What it is

- **category** — operations


**origin_author**  
<sub>Originating author, book, lab or community that named the method</sub>

No named pattern owner — the practice is assembled from security engineering (secret scanning: Gitleaks, TruffleHog, GitHub secret scanning), incident-response convention (assume exposed, rotate first), and conference-speaking checklists (PostHog's 'use a demo project, not a live account with customer data'; Marier's separate presentation account; Hanselman's prepared machine)

- **origin_year** — Secret-scanning tooling from ~2018 onward; the speaking-checklist half from 2008 (Hanselman) to 2024 (PostHog); no canonical origin for the combined practice


**talk_moment**

before arriving — and specifically before the demo is recorded, since a recording preserves the leak permanently; a residual watch continues through the middle blocks and Q&A

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

This is a different risk class from a failed demo and the difference is worth naming precisely. A failed demo is bounded, public, recoverable and forgettable: the room sees it, you recover, and next month nobody remembers. A leak is unbounded, often unnoticed in the moment, and irreversible — the artefact outlives the event. Three separate mechanisms make it worse than it looks. First, permanence: the talk is filmed and published, so a two-second notification preview becomes a frame that anyone can pause, and the frame is indexed and downloadable. Second, loss of control: the recording lives on the organiser's channel, so remediation is a request to a third party rather than an action you can take — YouTube's trim and blur tools exist but only the channel owner can use them, and the edit takes render time and may be restricted on high-view videos. Third, automation: exposed credentials are harvested and used at machine speed, so the window between exposure and abuse is measured in minutes, not days — the standard incident rule is therefore to assume the credential is burned the moment it is visible and rotate it, rather than to reason about who was watching. On top of the technical layer sits a commercial and legal one: a client name in a window title, a mail subject or a repository path is a confidentiality breach in a room full of people who know that client, and if personal data is on screen it is a data-protection incident with its own reporting clock, independent of whether any credential was involved.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Decide the blast radius first: demo from a purpose-built project with synthetic data, never from a live client repository or a production account. This single decision removes most of the surface. 2. Run automated secret scanning over whatever you will show: `gitleaks dir -v <path>` for the working tree and `gitleaks git -v --log-opts="--all"` for history; TruffleHog with `--verified` when you need to know whether a found secret is still live. 3. Rotate anything the scan finds and anything you are unsure about — rotation is cheap, forensics is not. 4. Purge the environment surface: `.env` files out of the demo directory, environment variables scrubbed from the shell you will use, cloud CLI logged into a sandbox account, and no credential visible in any config the demo opens. 5. Purge the identity surface: shell history, editor 'recently opened', browser history and autofill, bookmarks bar, open tabs, window titles, taskbar previews, Git remotes and commit author lines, and the machine's own hostname and username if they name a client. 6. Purge the communication surface: quit mail, Slack, Teams, Discord and any calendar client — do not merely mute them — and silence the phone and the watch. 7. Do a visual dry run at presenting resolution and photograph or record every screen the audience will see; review the frames deliberately, corner by corner, rather than from memory. 8. Repeat steps 5–7 immediately before capturing the demo recording, because the recording is the permanent artefact. 9. Prepare the on-stage response line in advance, so a leak is handled in one calm sentence rather than improvised. 10. Prepare the post-incident runbook in advance: who to contact at the organiser to cut the recording, and the rotation order for each credential class. 11. After the talk, before anything else, re-scan and rotate anything that was on screen and should not have been.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Every talk that shows your screen, and non-negotiably when the talk is recorded, when you work under NDA or with named clients, when the demo touches any cloud provider, or when the machine is your daily working machine rather than a purpose-built one. The pass is short; the consequence it prevents is not proportional to its cost.

### Evidence


**evidence_level**

Mixed, and worth separating. The prevention practice is practitioner consensus (every serious speaking and demo checklist includes it). The 'assume exposed and rotate immediately' rule is established security-engineering convention with strong operational backing — automated scanners harvest public secrets within seconds of exposure. The specific tooling comparisons (Gitleaks fast and local, TruffleHog broader with live verification) are documented tool behaviour. The financial-impact figures circulating in developer write-ups are anecdote: a widely repeated February 2026 report of an $82,000 bill after a stolen Google Cloud key is a single unverified account and should never be presented as a statistic.


**myth_status**

confirmed — that exposed credentials get abused fast and must be rotated is not in dispute. One adjacent belief is 'sound practice with a wrong justification': people blur or crop a leaked value in post and consider it handled, when the only thing that actually resolves the exposure is rotation. Blurring protects reputation, not the credential.


**contested_claims**

1. 'Nobody in a 200-person room is reading my terminal that closely' — irrelevant once the talk is published; the audience for a leak is everyone who ever pauses the video, plus anyone running frame extraction over conference channels. 2. 'I can just ask them to cut it' — partially true and slow: YouTube Studio can trim a middle section and can blur a region without re-uploading, and the URL, views and comments survive, but only the channel owner can do it, rendering takes time, and unedited videos above roughly 100,000 views are restricted to face blur only for channels outside the Partner Program. Plan on prevention, not on remediation. 3. 'It was only on screen for two seconds' — the exposure duration is irrelevant to an automated harvester and to a paused frame. 4. 'Blurring it in the recording fixes it' — it does not; rotate. 5. 'The repo is private, so the key in it is fine' — the screen is the publication channel here, not the repo. 6. That this is merely an embarrassment: a client name or personal data on screen is a confidentiality and data-protection matter with its own obligations, which is a different category from a leaked test key.


**key_sources**

1. Gitleaks and TruffleHog documentation and comparisons (2026) — Gitleaks as a fast local Go binary suited to a pre-demo sweep (`gitleaks git -v --log-opts="--all"`, `gitleaks dir -v <path>`), TruffleHog as the deeper entropy-based scanner whose `--verified` flag confirms whether a found secret is still live; the two are complementary rather than alternatives. 2. PostHog / Jina Yoon, '24 tips for giving S-tier demos' — the structural control: demo from a demo project, not a live account with customer data. 3. Practitioner incident write-ups on screen-share exposure (dev.to, 2026) — the recurring pattern of a `.env` open in the editor during a shared screen, and the rule that follows: assume the credential is exposed, rotate it, then deal with the surface it leaked to. 4. YouTube Help, 'Trim your videos' and 'Blur your videos' — what remediation is actually possible after publication, by whom, and under what limits.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

Over-sanitising has a cost. A demo built entirely on synthetic data can lose the credibility that comes from showing a real working system — PostHog's own advice is to 'use real data wherever possible', which pulls directly against this item; the resolution is real-shaped data that is not real, not a compromise between the two. There is also a rehearsal risk: a heavily scrubbed environment behaves differently from your daily one, so the demo must be rehearsed in the scrubbed state or the scrubbing itself becomes the failure. And a fully paranoid pass on a low-stakes internal talk is disproportionate — the calibrating variable is publication, not audience size.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

Zero stage minutes and no place in the deck — it is entirely a before-arriving item whose deadline is earlier than most: it must be complete before the demo recording is captured, which for BB4IT means before the 10.09 recording task, not before the 12.09 talk. Its on-stage footprint is two things: a prepared one-sentence response if something appears, and the discipline of not narrating your own desktop. It also constrains the Q&A standby terminal, which is a live environment on the same machine and must be as clean as the recorded one.


**time_budget_min**

0 minutes of the 25-minute slot. Off-stage: 30–60 minutes for the first full pass including a scan, 15 minutes per subsequent talk, plus a second pass immediately before the demo capture. Post-incident, if it goes wrong: 15 minutes to rotate, then an unbounded conversation with the organiser.


**audience_change**

Nothing, when it works — and that is the point, because the correct measure here is what the audience does not leave with: your client's name, your key, the subject line of your mail. When it fails, the audience change is entirely negative and displaces the talk's actual message: the thing people remember and repeat is the leak, not the argument. For a talk whose thesis is that a company's knowledge can safely live in files under your own control, a visible leak also directly contradicts the thesis, which is a sharper cost than embarrassment.


**application_pl_talk**

The mechanics are language-neutral; the exposure is not. In a Polish-delivered talk to a Polish IT audience, every leaked string is in Polish and instantly parsed by the room: a Slack preview, a mail subject, a client's company name in a window title or a repository path carries immediate commercial meaning to people who plausibly work with that client. This is materially riskier than the equivalent leak in front of an international audience reading an unfamiliar name. Two Polish-context obligations follow. First, contractual: NDAs with Polish clients typically forbid naming the client at all, and a repository path is naming them. Second, regulatory: if personal data appears on screen in a recorded and published talk, that is a personal-data breach under GDPR/RODO with its own assessment and notification clock — a category entirely separate from a leaked API key, and one that reaches the client's obligations as well as your own. For this speaker there is a further alignment point: BB4IT's prepared answer to the predictable hard question about sending sensitive company data to cloud LLMs claims that the base is local files under the listener's control and that only what the agent opened goes to the model. A visible leak on the same screen would demolish that answer in front of the person who asked it, which makes this item part of the Q&A preparation, not only the demo preparation.


**pl_language_notes**

Use 'wyciek danych' for the incident and 'klucz' / 'poświadczenia' rather than the calque 'credentiale'. 'Rotate the key' is 'wymienić klucz' or 'unieważnić i wygenerować nowy' — do not say 'zrotować klucz', which is jargon that reads as a translation artefact. 'Dane wrażliwe' has a specific legal meaning in Polish (special-category data under RODO); if you mean ordinary confidential business data, say 'dane poufne' or 'dane klienta', because the audience at an IT conference will hear the legal sense. Prepared on-stage line if something appears: 'Sekunda, to nie powinno tu być.' — then close it and continue; nothing longer, no explanation of what it was, no second apology. If asked afterwards, the honest line is 'wymieniam ten klucz jeszcze dziś' rather than a reassurance that nobody saw it.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

demo_risk — the same gap, but its irreversible half; the demo gap as stated is about a demo failing, while this is about a demo succeeding and leaking. It is also the binding constraint on how the demo_risk gap is being closed: the BB4IT demo runs from a recording, so the leak pass must precede the recording (PL-87, due 10.09) rather than the talk. Second, qa — indirectly but concretely, because the prepared answer about sensitive data going to cloud models is undermined by anything visible on screen that contradicts it, and because the Q&A standby terminal is a second live environment that has to pass the same pass. Third, reuse — a clip with a leak in frame is unusable as content and cannot be republished. Not related to opening, timing or late_slot.


**minimal_2h_version**

Twenty minutes, in this order, and the ordering matters because it is a risk ordering. (1) Close everything not in the demo, quit all messengers and mail clients, enable Do Not Disturb, silence phone and watch. (2) Open the demo directory and look for `.env`, `*.local`, `credentials*`, `*.pem`, `config.json` — move them out of the tree entirely rather than hiding them; run `gitleaks dir -v .` if it is installed, since it takes seconds. (3) Check the surfaces that render your past without being asked: shell history, editor recent files, browser history, autofill, bookmarks bar and open tabs — clear or switch to a clean profile. (4) Check window titles, the taskbar and the terminal prompt for client names and paths. (5) Run the demo once end to end at presenting resolution and record the screen; watch the recording back and read the corners deliberately, because you will not see them live. (6) Rotate anything you saw that should not have been there, before you do anything else. (7) Write the one-sentence on-stage line and the organiser contact for a recording cut. If time is shorter than twenty minutes, do (1), (2) and (5) — messengers, secrets files, and one recorded dry run.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

For the BB4IT agentic-knowledge-base demo the risk is unusually concrete, because the demo's entire content is a knowledge base of files and the demo shows a `git diff`. The controlled version: the base is cooking recipes (the 08.09 decision), stored in a repository created for the talk, with a Git remote and commit author that name nothing; the agent runs against a key issued for the demo alone and rotated after the conference regardless of what happened; no `.env` lives inside the demo tree; the terminal prompt is a single short token rather than a path containing a client directory; the editor's recent-files list is empty because the profile is new; the browser is a fresh profile with two tabs. The `git diff` beat is the sharpest hazard in the talk, because a diff renders file contents on a projector at high contrast — it is the one screen to rehearse and photograph specifically. The recording is captured only after this pass, and the standby terminal held open for Q&A is the same clean environment, not the working one.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

Move it out of memory and into structure, because this is precisely the class of task that vigilance fails at. Three levels, adopted over weeks. Level one: a written pre-demo checklist in the talk repo, run as a checklist. Level two: automation — Gitleaks as a pre-commit hook on any repo that will ever be shown, a script that quits chat clients and enables DND, a purpose-built demo repository template that starts clean. Level three: structural isolation — a dedicated presentation user account or a dedicated demo machine or VM, so that private material is not merely hidden but absent. The habit that generalises fastest is 'record and review the dry run': train yourself to watch your own demo capture looking at everything except the thing the demo is about, since every leak lives in the periphery.


**drill**

Input: your demo environment as it is right now, and a screen recorder. Action: run the demo end to end at presenting resolution while recording; then watch it back at 1x with a checklist of surfaces (window titles, tab strip, bookmarks, notifications, prompt, file paths, editor recents, terminal history, git remotes, any diff contents, the taskbar, the second monitor) and pause at every frame where any of them is visible; write down every string a stranger could act on. Output: a list of exposures and the fix for each; anything credential-shaped gets rotated the same hour. 15–20 minutes, and the finding rate on a first run is almost never zero.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

One screen surface — a single place the machine can render your history or identity (the tab strip, the prompt, the recents list), checked and cleared. The item fails by omission of one surface, so the surface is the unit.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

First pass: 30–60 minutes including a scan and a recorded dry run. Per talk afterwards: 15 minutes, plus a repeat immediately before any demo capture. Building the automation: 1–2 hours once. Incident cost if it fails: 15 minutes of rotation plus an open-ended remediation conversation you do not control.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

The recorded dry run is the only reliable loop, because live self-observation does not work — the speaker is looking at the demo, not at the corners of the screen. Secondary loops: an automated scanner's exit code before the demo, and a second pair of eyes watching the dry run with the explicit brief of finding names and secrets rather than following the demo. After publication, watch the demo block of the conference recording once, deliberately, as a review pass rather than as vanity viewing.


**measurable_kpi**

Exposures found per recorded dry run (target 0; the first run's count tells you how much structural work is still needed). Secret-scanner findings in the demo repo before the talk (target 0). Credentials rotated after the talk as a matter of routine (target: all demo credentials, unconditionally). Time from noticing an on-stage exposure to rotation (target under 60 minutes). Number of surfaces on the checklist actually verified (target 100 percent).

### Online and recorded


**online_variant**

The risk profile shifts in one helpful direction and one harmful one. Helpful: conferencing tools let you share a single application window instead of the whole screen, which structurally eliminates notifications, the taskbar, the second monitor and every unrelated window — this is the single highest-value control in the online variant and it should be the default. Harmful: the meeting client generates its own notifications that OS Do Not Disturb may not suppress, chat and participant panels display names, and many webinars are recorded by default without an explicit announcement, so exposures become permanent artefacts held by a third party in the same way. Also, remote viewers are closer to the pixels than any conference room and can screenshot instantly, so the effective exposure of any frame is total.


**recorded_variant**

This is the variant that defines the item. Publication converts a momentary exposure into a permanent, indexable, downloadable artefact, and for BB4IT the channel belongs to the organiser, so the speaker owns the mistake but not the remedy. What is actually possible after the fact: the channel owner can trim a section out of the middle without re-uploading and without losing the URL, view count or comments, and can apply a custom blur to a region with the blur either tracking an object or fixed in place; renders take time, and for unedited videos above roughly 100,000 views the editing options are restricted to face blur for channels outside the Partner Program. None of this reaches copies already downloaded. Practical consequence: agree the contact path with the organiser in advance so a cut request takes minutes rather than a day, and rotate immediately regardless of whether the cut succeeds.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

Blurring or cropping in post and treating the incident as closed while the credential remains valid. Hiding a window instead of quitting the application, so it resurfaces at the worst moment. Demoing from the real client repository with a promise to 'be careful'. Doing the leak pass after recording the demo rather than before it. Relying on the audience not looking closely, in a talk that will be published. Explaining on stage what the leaked thing was, which converts a two-second frame into a two-minute story that everyone will now remember and look for in the recording. And the mirror antipattern — sanitising so hard that the demo shows nothing real, which surrenders the credibility the demo existed to create.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Checking the primary window and forgetting the periphery: tab strip, bookmarks bar, taskbar, window titles, second monitor, notification centre. Forgetting that a `git diff` renders file contents at high contrast on a projector. Forgetting Git remotes and commit author lines, which name organisations and people. Leaving cloud CLIs authenticated to a production account. Leaving the editor's recent-files list populated with client paths. Scrubbing the demo environment but not the browser. Not repeating the pass before the recording. Assuming a private repository is a safe demo subject. And, after an exposure, spending the first hour deciding whether it mattered instead of spending the first minute rotating.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

There is no talk that shows a screen where this can be skipped; what scales is the depth. For an unrecorded internal session on a machine with no client material, the pass is five minutes of closing messengers and checking the demo directory. The full protocol — scanning, isolation, recorded dry run, prepared incident runbook — is calibrated to publication and to NDA exposure, and applying all of it to a private team demo is disproportionate.


**fallback_if_it_fails**

On stage, in order and without deviation: (1) remove it from the screen immediately — switch window, close the tab, do not linger to tidy; (2) one short flat sentence and nothing more ('Sekunda, to nie powinno tu być.'), then continue the talk, because naming the content aloud is what makes it memorable and searchable; (3) do not apologise a second time. Off stage, within the hour: rotate every credential that was visible and every credential that shares its scope, on the assumption it is burned — do not attempt to reason about who was watching; check provider logs for use; then contact the organiser with the exact timestamp and ask for a trim or a blur before publication if possible, or after it if not. If personal or client data was exposed rather than a credential, the path is different and heavier: notify the client, and assess the data-protection reporting obligation on its own clock rather than treating it as an IT problem. Prepare both paths in writing before the talk, because neither is improvisable under adrenaline.


**works_signal**

Silence — nobody reacts to anything that is not the demo. Failure signals are distinctive and fast: a ripple of laughter or a sharp intake of breath that does not match anything you said, phones coming up to photograph the screen, someone in the front row pointing, or a question afterwards that begins 'I noticed on your screen…'. In the online variant the equivalent is a sudden burst of chat activity unrelated to the content. Any of these means stop looking at the demo and look at what else is on the screen.


**dependencies_conflicts**

Extends demo-environment-hygiene — same pass, security grade, and it should be run as a separate explicit step rather than folded in, because hygiene optimises for attention and this optimises for irreversibility. Hard prerequisite for lipsync-recorded-demo: the pass must complete before the capture, since a recording bakes the leak in permanently. Constrains demo-strategy, because the hybrid's standby live terminal is a second environment that must also pass. Interacts with talk-as-youtube-artifact, which is where recording rights and the organiser contact path are agreed. Feeds speaker-faq-bank, since the prepared answer about sensitive data in cloud models must not be contradicted by the screen. Conflicts: synthetic demo data against the credibility argument for real data (resolve with real-shaped, non-real data); a scrubbed environment against rehearsal fidelity (rehearse in the scrubbed state); and the leak pass against last-minute demo changes, which silently invalidate it.

### Tooling


**tool_support**

Scanning: Gitleaks (fast local Go binary; `gitleaks dir -v <path>` for the tree, `gitleaks git -v --log-opts="--all"` for history; also usable as a pre-commit hook), TruffleHog (entropy-based, broader detector set, `--verified` to test whether a found secret is still live), GitHub secret scanning and push protection for repositories that will be shown or shared. Isolation: a dedicated demo repository, a dedicated cloud project or sandbox account, a separate OS user account or VM, a fresh browser profile. Suppression: OS Do Not Disturb, quitting chat clients outright, single-window share in conferencing tools. Review: any screen recorder for the dry run, and a checklist of surfaces kept with the talk brief. Remediation: the provider consoles for rotation, and YouTube Studio's trim and blur — usable only by the channel owner. An LLM is useful for generating the surface checklist and for drafting the incident runbook, but must never be shown the secrets themselves — pasting a `.env` into a chat interface is one of the leak paths, not a remedy for it.


**marp_implementation**

The deck is a leak surface too, and this is often forgotten because attention goes to the terminal. Concretely: screenshots pasted into slides carry whatever was in frame at capture time, including tab strips, notification corners and file paths — crop them deliberately rather than trusting the slide's scaling to hide the edges; images referenced from `./sources/` are packaged into the HTML build and travel with any deck you share; presenter notes live in HTML comments in the Markdown, so anything candid written there ships inside the exported HTML and is readable by anyone who opens the file — check the notes before sending the deck to the organiser. The deck sent to biuro@itwgorach.pl by 11.09 14:00 should be reviewed as an artefact that leaves your control, not merely as a backup. There is no directive that helps here; the control is a review pass over the built output, ideally the PDF, page by page.


**survives_pdf_export**

yes, unfortunately — this is the direction of concern. Anything leaked into a slide image or a screenshot survives PDF export intact and is preserved in the file the organiser receives and may republish; PDF text is also extractable and searchable, so a value pasted as text is machine-readable rather than merely visible. Presenter notes in HTML comments do not appear in the PDF body but do ship in the HTML build, so the two exports leak differently and both need checking.

### Effort and payoff


**prep_effort**  
<sub>low | medium | high — one-off setup cost</sub>

low to medium — 30–60 minutes for a proper first pass and 15 minutes per talk thereafter, against a downside that is unbounded and unrecoverable. It is the best cost-to-risk ratio in the whole operations group.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Immediate: the class of permanent, public, credibility-destroying mistakes stops being available. There is no visible upside when it works, which is exactly why it is skipped, and why it belongs on a written checklist rather than in the speaker's judgement on the day.


**needs_organiser_agreement**

yes, and it should be settled before the talk rather than after an incident. Agree: (1) that the talk is recorded and where it will be published (BB4IT: the organiser's YouTube channel, confirmed, plus a short interview for a summary film immediately after the talk — a second unrehearsed recorded surface worth remembering); (2) a named contact and a fast path for requesting a trim or blur of a specific timestamp before publication; (3) whether you may review the cut before it goes public; (4) what happens to the deck file you send them — whether it is republished, and in which format. Establishing the contact path in advance turns a day-long escalation into a fifteen-minute message.


**priority**

high — highest in the operations group on a risk-adjusted basis. It is cheap, entirely under the speaker's control, and its deadline is earlier than the talk itself because the demo recording is due 10.09; a leak captured into that file is permanent before the conference even starts.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

https://newsletter.posthog.com/p/how-to-demo (PostHog / Jina Yoon — 'use a demo project, not a live account with customer data', plus the full demo setup checklist); https://github.com/gitleaks/gitleaks (fast local secret scanning: `gitleaks dir`, `gitleaks git --log-opts`, pre-commit use); https://github.com/trufflesecurity/trufflehog (entropy-based detection and `--verified` live-credential checking); https://docs.github.com/en/code-security/secret-scanning (GitHub secret scanning and push protection for repositories that will be shown); https://support.google.com/youtube/answer/9057455 (YouTube trim — cut a middle section without re-uploading; URL, views and comments preserved); https://support.google.com/youtube/answer/9057652 (YouTube blur — face or custom region, tracked or fixed; channel-owner only); https://dev.to/razcodev/i-leaked-an-api-key-while-screen-sharing-this-chrome-extension-wouldve-saved-me-fbg (first-hand screen-share exposure account; anecdote, not evidence); https://www.hanselman.com/blog/11-top-tips-for-a-successful-technical-presentation (the prepared-machine discipline this pass sits on top of)


---

## Demo environment hygiene

> Build a presentation-only machine state — large fonts, no notifications, empty desktop, a separate browser profile, no shell autocomplete guessing at your history — and set it up before the talk, never during it.

### What it is

- **category** — operations


**origin_author**  
<sub>Originating author, book, lab or community that named the method</sub>

Scott Hanselman — '11 Top Tips for a Successful Technical Presentation' (the canonical list); Matthew Gilliard — 'Live Coding In Presentations'; Francois Marier — 'Presenting from a separate user account'; PostHog / Jina Yoon — '24 tips for giving S-tier demos' (the checklist form); Neal Ford et al. — Presentation Patterns ('Ant Fonts' as the slide-side cousin)

- **origin_year** — 2008 (Hanselman); 2012 (Presentation Patterns); 2018 (Gilliard); 2024 (PostHog)

- **talk_moment** — before arriving — the entire value is in doing it in advance; a hygiene step performed on stage is itself the failure

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

Two separate mechanisms, usually conflated. The first is legibility: a projector has lower contrast and far lower effective resolution than the monitor you built the demo on, and the back row is three to five times further from the screen than you are from your laptop. Text that is comfortable at your desk is unreadable at row twelve, and an audience that cannot read the screen stops trying within seconds — they are then present in body only, which in a tired late slot is unrecoverable. The second is attention integrity: every notification, every autocomplete popup, every stray desktop icon is an involuntary attention capture that pulls the room off your argument and onto a fragment of your private life. Shell history autocomplete is the underrated one, because it is a live, unpredictable renderer of everything you have ever typed on that machine, appearing in grey text in front of two hundred people at exactly the moment you type the first three characters of a command. Setting all of this up in advance also removes the visible fumbling that Hanselman calls out as disrespectful — the audience watching you drag a font slider is watching you tell them you did not prepare.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Decide the isolation level: a dedicated OS user account is the strongest (Marier's approach — nothing on the desktop but the deck and the backup videos), a dedicated terminal profile plus a dedicated browser profile is the pragmatic minimum. 2. Fonts: set terminal and editor to a monospace face at a size that is readable from the back of the room — Hanselman's baseline is 14–18pt bold for a console, and 18–22pt is safer on a large hall projector. Set it in a saved profile, not by zooming live. 3. Contrast: prefer high-contrast schemes and test them under real room lighting; projectors crush dark greys, and a beautiful low-contrast theme becomes an unreadable smear. 4. Notifications off at the OS level — Windows 11 'Do not disturb' (formerly Focus Assist), macOS Focus. Then quit, not merely mute, every messenger, mail client and calendar app. 5. Phone silenced and face down, including the smartwatch that repeats the notifications. 6. Desktop: empty or a plain background; close every window that is not in the demo; empty the taskbar of anything unrelated. 7. Browser: a dedicated profile with no bookmarks bar of your own, no saved history, no autofill, no extensions that inject UI, and the demo URLs pre-opened as tabs. Set page zoom to 125–150 percent. 8. Shell: disable predictive/history autocomplete, simplify the prompt to something short, and prepare aliases or a snippets file so long commands are pasted rather than typed. 9. Clear or relocate shell history if it contains anything client-specific. 10. Power and screensaver: disable sleep, screen lock and screensaver; plug in. 11. Displays: set the presenting resolution in advance and rehearse at it, because a resolution change reflows every window you carefully arranged. 12. Rehearse the whole demo once from inside the presentation state — Marier's point is that the configuration itself must be rehearsed, since large fonts change what fits on screen. 13. Run the on-screen data leak pass as a separate, explicit step before you consider this done.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Any talk where your screen is shown, without exception, and with more rigour when the talk is recorded, when the room is large, when the machine is your daily working machine, or when you work under NDA with named clients. The cost is one to three hours once and about fifteen minutes per subsequent talk, which is small against a single leaked notification in a permanently published video.

### Evidence


**evidence_level**

practitioner consensus for the whole package — every conference-speaking guide converges on the same checklist, and the items are individually uncontroversial. The legibility half has adjacent empirical support in slide-design research (Alley's Assertion-Evidence work and Mayer's coherence principle both bear on 'extraneous on-screen material costs comprehension'), but no controlled study specifically measures demo-environment hygiene. Individual thresholds (14pt, 18pt, 125–150 percent zoom) are single-expert recommendations, not measurements.

- **myth_status** — confirmed — the practice is sound and the justification is straightforward; the only folklore is in the specific numbers.


**contested_claims**

1. 'Black background with green text is better because the eye perceives it better' (Hanselman, 2008) — the physiological framing is folklore; the real variables are contrast ratio and projector gamma, and on many projectors a light background with dark text is more legible than a dark one, which is why Gilliard recommends black-on-white. Keep the practice (high contrast, tested in the room), drop the eye-physiology explanation. 2. 'Minimum 14pt' — a widely repeated number with no room-size term in it; the honest rule is a back-row test in the actual room, and 14pt is a floor for a small room, not a target for a hall. 3. 'Turn off notifications' is often reduced to enabling Do Not Disturb; in practice DND does not stop every application (some apps render their own toasts, and some meeting clients ignore it), so quitting the apps is the reliable step and DND is the safety net. 4. The claim that a separate user account is overkill — it is the only measure that structurally prevents the whole class of leaks rather than enumerating them.


**key_sources**

1. Hanselman, '11 Top Tips for a Successful Technical Presentation' (2008) — 'Lucida Console, 14 to 18pt, Bold' for consoles, set every program up before you begin, a dedicated large-font user account ('BigFonty'), and the explicit rule that adjusting fonts during the talk disrespects the audience. 2. Gilliard, 'Live Coding In Presentations' (2018) — test the font size against the longest line in the demo, prefer black-on-white for projectors, simplify the shell prompt (`export PS1=$'conf-name:topic\n> '`), use aliases and `ctrl-r` tagged commands rather than typing long strings, and keep a reset script. 3. Marier, 'Presenting from a separate user account' — a presentation account whose desktop holds only the deck and the backup videos, and the instruction to rehearse the whole presentation inside that account. 4. PostHog / Jina Yoon, '24 tips for giving S-tier demos' — the checklist form: demo project not live data, notifications disabled, phone silenced, URLs bookmarked, WiFi-failure plan, browser at 125–150 percent, projector tested before anyone arrives.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

A fully separate account can backfire: tools authenticate per user, so an unrehearsed presentation account produces a login prompt on stage — the failure mode it was meant to prevent, relocated. Very large fonts reduce how much context fits on screen, which hurts demos whose point is structure (a directory tree, a long diff), so size is a trade-off against information, not a monotonic good. Extremely sanitised environments can read as staged and cost a little credibility with developer audiences who value seeing a real working machine. And there is a real time cost: for a fifteen-minute internal talk with three slides, the full protocol is disproportionate.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

Zero stage minutes — this is entirely a before-arriving item, and that is exactly its value in a 25-minute slot where there is no slack to spend on a font slider. It attaches to the demo block (BB4IT slides 13–15) and to the standby terminal that stays open for Q&A. The one on-stage consequence to plan for: the resolution the room forces may differ from the one you rehearsed at, so the presentation state has to be robust to a reflow, which is another argument for a saved terminal profile rather than a hand-tuned window.


**time_budget_min**

0 minutes of the 25-minute slot. Off-stage: 60–180 minutes for the first full setup, 15 minutes of re-verification per subsequent talk, plus roughly 20 minutes on site as part of the room recon and tech check.


**audience_change**

Nothing is added to what the audience learns; what changes is that they can actually read the evidence, and that nothing pulls them off it. The correct way to read this field here is negative: bad hygiene subtracts the demo's entire value, because a demo nobody can read proves nothing, and a demo interrupted by a message preview is remembered for the message.


**application_pl_talk**

The technical steps are language-neutral, but two things are specific to a Polish-delivered, English-screen talk. First, the audience is reading English on screen while listening to Polish, which is a heavier cognitive load than a monolingual demo — legibility margins therefore need to be larger, not equal, so err toward the top of the font range. Second, the leak surface is Polish: notification previews, mail subjects, messenger names and window titles will be in Polish and instantly readable by everyone in the room, including client names that carry meaning locally in a way an anonymous English string would not. In a Polish IT community where the audience plausibly knows your clients, a single Slack preview is a commercial problem, not just an embarrassment. Practical note for this speaker's machine (checked 2026-09-08): PowerShell 7.6.5 with PSReadLine 2.4.5 already has `PredictionSource` set to `None`, so the shell autocomplete risk is closed; Windows Terminal, however, has an empty `profiles.defaults` block, meaning it is running at the stock 12pt Cascadia Mono — well under the recommended presentation size and the single most concrete fix available.


**pl_language_notes**

This item is mostly executed alone in front of a machine, so the language layer is thin — but the on-stage vocabulary matters when something slips through. Say 'wyciszam powiadomienia' rather than the calque 'wyłączam notyfikacje'; 'osobny profil przeglądarki' not 'separate profile'; 'podpowiedzi z historii' for shell autocomplete suggestions. Avoid announcing the hygiene work on stage at all — 'przepraszam, zaraz powiększę czcionkę' is the sentence this whole item exists to prevent. If a notification does appear, the recovery line is flat and short: 'Zaraz, wyciszam to.' — one sentence, no apology loop. Do not narrate your desktop ('tu mam otwarte…'); it invites the room to read everything on it.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

demo_risk — directly; this is the preventive half of the demo gap, and it is the precondition for both the recorded demo (a permanent recording bakes in whatever was on screen) and the standby live terminal that BB4IT keeps open for Q&A. Also late_slot, indirectly but materially — an exhausted 14:50 room will not squint, so illegible output loses them instantly and irreversibly. Weakly related to timing, in that a hygiene failure on stage costs 30–90 unplanned seconds. Not related to opening, qa or reuse, except that a clean screen is what makes a recording clippable later.


**minimal_2h_version**

Ninety minutes of this is achievable in about twenty-five. In order: (1) create or open a saved terminal profile at 18–20pt with a high-contrast scheme and use only that profile — for Windows Terminal, set `fontSize` in `profiles.defaults` rather than zooming live; (2) enable OS Do Not Disturb and then actually quit Slack, Teams, Outlook, Discord, and the mail client — quitting is the reliable step; (3) silence the phone and the watch; (4) close every window and clear the desktop, or move the icons into one folder; (5) open a clean browser profile with only the demo tabs, zoom to 125–150 percent; (6) disable sleep, lock and screensaver, and plug in; (7) run the demo once end to end at the presenting resolution, looking for anything that wraps or truncates at the larger font; (8) run the separate data-leak pass. Skip the dedicated OS account entirely — creating one two hours out is a net risk because it will not be rehearsed.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

For the BB4IT agentic-knowledge-base demo the presentation state is: Windows Terminal on a saved 'Demo' profile at 20pt with a light, high-contrast scheme, prompt reduced to a single short token so the path does not eat the line; the editor showing the vault at a matching size with the minimap and side panels closed; a dedicated Edge profile holding two tabs (the template repo and the QR target) at 140 percent zoom, no bookmarks bar, no extensions; Do Not Disturb on and Slack, Teams and mail quit; desktop empty; sleep and lock disabled; a second desktop holding the standby terminal on the same recipe base for the Q&A offer. The whole state is verified by running the three demo beats once at the room's resolution — and, critically, this is the state the recording is captured in, because the recorded demo is permanent.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

Turn it from a memory exercise into an artefact: write the checklist once, keep it in the talk repo next to the brief, and run it as a checklist rather than from recall — this is the class of task humans reliably fail from memory under time pressure. Over a few talks, push the manual steps into configuration: a saved terminal profile, a saved browser profile, a script that toggles DND and quits the chat apps, a snippets file for long commands. The end state Hanselman describes is a dedicated presentation account you simply log into, at which point the whole item costs a login. Train the back-row test as a habit at every venue — walk to the last row and read your own screen before the room fills.


**drill**

Input: your laptop in normal daily state and your demo. Action: set a 20-minute timer, run the full hygiene protocol, then project or mirror the screen and walk to the far wall of the room you are in; read every line of your demo output aloud from there. Anything you cannot read, fix immediately by profile setting, not by zooming. Output: a written list of what failed the back-row test and the setting that fixed each one — that list becomes the checklist you reuse. Repeat once with the room lights on, since projector contrast collapses under lighting.

- **practice_unit** — One checklist line — a single setting, verified. The unit is deliberately atomic because this item fails by omission, not by poor execution.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

First full setup: 1–3 hours, most of it in building the reusable profiles. Per talk afterwards: 15 minutes at home plus about 20 minutes on site (folded into room recon). The dedicated OS account, if adopted, is a one-off 2–3 hours and then near zero, but must be rehearsed in at least once before it is used on stage.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

The back-row read is the primary loop and it is immediate. Second loop: record 60 seconds of your own screen at the presenting resolution and watch it on a phone — that approximates both the projector's loss and the eventual YouTube 720p pass. Third loop: the published recording, where every notification and every unreadable frame is preserved for review. On stage, the live signal is people leaning forward or squinting, and phones coming up during the demo.


**measurable_kpi**

Interruptions on screen per talk — notifications, popups, autocomplete suggestions, unexpected windows (target 0, and this is the number to track across talks). Terminal/editor font size in points (target ≥ 18 on a hall projector; current stock Windows Terminal default is 12). Back-row read: percentage of demo lines readable from the last row (target 100). Checklist items completed before leaving home (target 100 percent). Seconds of on-stage environment fiddling (target 0).

### Online and recorded


**online_variant**

The legibility half changes shape and the attention half gets worse. Screen-share compression punishes thin fonts and low contrast far harder than a projector does, so bump the font size again and prefer a light background; share a single window rather than the whole desktop so a stray notification never enters the frame. Notification risk rises because the meeting client itself generates toasts (join/leave, chat) that DND may not suppress — quit or fully mute the client's own notifications, and hide the participant panel. Set the conferencing tool to share a specific application, not 'entire screen', which structurally prevents most of the leak surface. And remember that in a webinar the audience is closer to the pixels than any conference room, so unreadable output is the one failure they will comment on in chat.


**recorded_variant**

Hygiene stops being cosmetic and becomes permanent. A notification that appears for two seconds in the room appears forever on YouTube, and remediation depends on whoever owns the channel — for BB4IT that is the organiser, not the speaker. Optimise for the recording as well as the room: the published video is a re-encode, so favour larger fonts and higher contrast than the room strictly needs, and avoid colour-only distinctions that survive neither compression nor colour-blind viewers. Also, a clean screen is what makes the segment reusable — a clip with a Slack preview in the corner cannot become a LinkedIn asset.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

Adjusting fonts, closing windows or logging out of a messenger on stage — the visible cleanup is worse than the mess, and Hanselman names it directly. Enabling Do Not Disturb and considering notifications handled, while the apps keep rendering their own toasts. A presentation account that has never been rehearsed in, so the demo dies on a missing credential or a missing tool. Fonts so large that the demo's structure no longer fits, turning a diff into a keyhole. A dark, low-contrast 'nice' theme chosen on an OLED laptop and first seen on a projector at showtime. Relying on zoom shortcuts as the plan rather than as a repair. And the deepest one: treating hygiene as cosmetic polish rather than as the precondition for the demo proving anything at all.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Doing the setup after recording the demo rather than before it, so the recording is permanently dirty. Forgetting the second screen or the second desktop, which is where the leak usually lives. Forgetting the phone's watch companion. Leaving the browser's bookmarks bar, autofill and open-tab strip visible — these leak client names silently and constantly. Leaving shell history autocomplete on, so the machine renders your past commands to the room unprompted. Not disabling screen lock, then unlocking in front of everyone while typing a password. Changing resolution at the venue and never re-checking what reflowed. Assuming a check done last time still holds — configuration drifts, and so do app updates that re-enable notifications.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

Nothing here is skippable for a public, recorded talk. Proportionality applies to the isolation level, not to the checklist: for a small internal session with three colleagues, a dedicated OS account and a separate browser profile are overhead, while notifications-off and a readable font are not. If the talk shows no screen of yours at all, the item does not apply.


**fallback_if_it_fails**

A notification appears: say one short, flat sentence, dismiss it, enable DND on screen if it is not on, and continue — do not apologise twice and do not explain what the message was. Text is unreadable from the back and someone says so: use the tool's zoom immediately (Ctrl+scroll in a terminal, Ctrl+plus in a browser), fix it in five seconds, thank the person, move on; this is the one case where on-stage adjustment is correct because the alternative is losing the room. The wrong window or desktop appears: switch away first, comment second — never linger to close it tidily. Resolution forces a reflow you did not rehearse: fall back to the recorded demo, whose framing is fixed and immune to the room's display. Something private is exposed: treat it as the data-leak item, not this one — it has its own protocol.


**works_signal**

Nobody mentions the screen. That is the whole signal, and it is the reason this item is invisible when done right: no squinting, no 'can you make that bigger', no laughter at a notification, no heads turning to each other during the demo. Failure signals arrive fast and are unmistakable — people in the back rows leaning forward or giving up and looking at phones within the first 20 seconds of the demo, or a ripple of laughter that is not about anything you said.


**dependencies_conflicts**

Prerequisite for demo-strategy in any live or hybrid mode, and a hard prerequisite for lipsync-recorded-demo, because the recording preserves the environment permanently — hygiene must precede capture. Tightly coupled to on-screen-data-leak, which is the security-grade extension of the same pass and should be run as a separate explicit step rather than folded in. Depends on room-recon-tech-check for the back-row test and the actual presenting resolution. Complements one-command-demo-reset. Conflicts: font size against on-screen information density (a real trade-off, resolved per demo, not globally); a dedicated presentation account against tool authentication state, unless rehearsed; and full-desktop sharing against leak prevention in the online variant.

### Tooling


**tool_support**

Windows: 'Do not disturb' in Settings > System > Notifications (the successor to Focus Assist); Windows Terminal profiles with `fontSize` and a chosen `colorScheme`; PowerShell `Set-PSReadLineOption -PredictionSource None` to stop history-based suggestion rendering, and `Clear-History` plus the PSReadLine history file (`$env:APPDATA\Microsoft\Windows\PowerShell\PSReadLine\ConsoleHost_history.txt`) for the history surface; a dedicated Edge or Chrome profile; ZoomIt for on-demand magnification and annotation. macOS: Focus modes, a separate user account, Presenter Overlay. Shell: `unset ZSH_AUTOSUGGEST_*` or simply not loading zsh-autosuggestions in the presentation profile; a short `PS1`/prompt; aliases and a snippets file so long commands are pasted, not typed. Cross-cutting: a written checklist stored in the talk repo, and a reset script (`git reset --hard && git clean -fdx` or a `prepare-for-demo.sh`).


**marp_implementation**

Not a slide-level technique, so there is no directive that implements it — but the deck participates in three ways. First, the deck should carry the stills fallback for the demo so a hygiene or hardware failure does not remove the evidence. Second, presenter notes (HTML comments under a slide) are the right place to hold the on-stage reminders this item generates — 'DND on', 'standby terminal is on desktop 2'. Third, if the deck is built to HTML for a video demo slide, it needs `--html` and `--allow-local-files`, and the browser it opens in should be the same clean profile as the rest of the demo, not your daily browser with its bookmarks bar and open tabs. Concrete pending fixes on this machine (verified 2026-09-08): Windows Terminal `profiles.defaults` is empty, so the terminal is at the stock 12pt — add a saved presentation profile; PSReadLine `PredictionSource` is already `None`, so that risk is closed.


**survives_pdf_export**

not applicable — this is machine configuration rather than deck content, and nothing about it is exported. The related deck artefact that must survive PDF export is the demo stills fallback, which does.

### Effort and payoff

- **prep_effort** — medium the first time (1–3 hours, mostly building reusable profiles), low thereafter (about 15 minutes plus the on-site check).


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Immediate and binary at the very next talk: either the screen is readable and uninterrupted or it is not. The compounding effect arrives after two or three talks, when the profiles exist and the checklist runs in fifteen minutes, at which point a whole class of on-stage failure simply stops occurring.


**needs_organiser_agreement**

no for the machine state itself — every step is under the speaker's control. Yes for the two things it depends on: room access early enough to do the back-row test before the audience arrives, and the display chain (resolution, aspect ratio, HDMI and adapter — for BB4IT the cable is the organiser's and the adapter is flagged as PL-217). Ask the organiser which resolution the projector will negotiate, and whether the confidence monitor mirrors or extends, since both determine what you rehearse at.


**priority**

high — it is cheap, entirely under the speaker's control, must be completed before the demo recording is captured rather than after, and it is the precondition for both the recorded demo and the standby terminal in Q&A. For BB4IT it has a concrete outstanding action (terminal font size) that takes minutes.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

https://www.hanselman.com/blog/11-top-tips-for-a-successful-technical-presentation (Hanselman 2008 — console at 14–18pt bold, set everything up in advance, the dedicated large-font account, never adjust fonts on stage); https://blog.gilliard.lol/2018/10/25/live-coding-tips.html (Gilliard 2018 — test against the longest line, black-on-white for projectors, simplified prompt, aliases and tagged `ctrl-r` history, reset script, asciinema backup); https://newsletter.posthog.com/p/how-to-demo (PostHog / Jina Yoon — the demo setup checklist: demo project not live data, notifications off, phone silenced, bookmarked URLs, WiFi-failure plan, browser at 125–150 percent, projector tested before anyone arrives); https://presentationpatterns.com/glossary/ ('Ant Fonts — don't use tiny fonts to cram more information; avoid unreadable slide content', the deck-side counterpart of this item); https://github.com/zsh-users/zsh-autosuggestions/blob/master/README.md (the configuration surface for shell history suggestions); https://learn.microsoft.com/en-us/powershell/module/psreadline/set-psreadlineoption (PSReadLine `-PredictionSource`, the Windows equivalent of disabling history autocomplete); https://speaking.io/prep/scoping-out-the-room/ (Holman — checking the room, sightlines and the back row before the audience arrives)


---

## Demo strategy — live, recorded or hybrid

> Decide in the brief — before a single slide exists — whether the demo runs live, from tape, or hybrid, and delete it outright if its only real job is to consume minutes you have no content for.

### What it is

- **category** — operations


**origin_author**  
<sub>Originating author, book, lab or community that named the method</sub>

Neal Ford, Matthew McCullough and Nathaniel Schutta — Presentation Patterns (the 'Dead Demo' antipattern and the 'Lipsync' pattern); Zach Holman — speaking.io, 'Live Tech Demos'; Scott Hanselman — '11 Top Tips for a Successful Technical Presentation'

- **origin_year** — 2012 (Presentation Patterns, Addison-Wesley, ISBN 9780321820808); 2008 (Hanselman); ~2014 (speaking.io)

- **talk_moment** — before arriving — the mode is a brief-stage decision, not a stage-time decision; the execution then lands in the middle blocks

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

A demo is the only part of a technical talk that produces evidence instead of assertion: the audience stops taking the speaker's word for it and watches the thing happen. It is also the only part of the talk whose duration the speaker does not control, because it is the only part where a machine is a co-performer. Choosing the mode up front converts an unbounded risk (a live demo can take 2 minutes or 12, or never finish) into a bounded one (a recording has a known runtime to the second). The Dead Demo antipattern names the failure that has nothing to do with technology: the demo is not there to prove a claim, it is there because the speaker ran out of expositional content, and the room can feel the absence of an argument even when every command succeeds. Presentation Patterns also names a density cost — by its authors' estimate even outstanding live demonstrators cover at most about 60 percent of the material the same slot could carry as a presentation — plus a specific failure mechanic of typing as performance: typists speed up because they can feel the room waiting, which produces more typos, which produces more speedup to recover the lost time. The hybrid resolves the real tension: the recording carries the argument on a fixed clock, and a live environment stays open and untouched so a question in Q&A can be answered by actually running something.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Write the demo's claim as one sentence before choosing a mode: 'this demo proves that ___'. If you cannot write it, the demo is a Dead Demo — cut it and take the minutes back. 2. Classify the artefact: does it need a machine to be believable (yes → demo), or is it a concept a diagram carries better (no → slide)? 3. Time three cold live runs on a clean machine and record the durations. If the spread exceeds about 25 percent of the mean, or if any run depends on a network call you do not own, the demo goes to tape. 4. Cap the demo budget at roughly one third of the slot before you script it. 5. Pick the mode explicitly and write it into the brief as a dated decision, so it stops being re-litigated: live | recorded (Lipsync) | hybrid (recording plays, live environment stands by). 6. If recorded: record, trim dead time, keep the runtime under the budget, and store the file in at least two places that are not the presenting laptop. 7. If hybrid: open the live environment before the talk starts, on the same data as the recording, and leave it on a second desktop you never switch to unless asked. 8. Verify the delivery chain end to end in the room — projector, resolution, and audio if the recording has sound. 9. Write the exact framing sentence you will say when the demo starts and the exact bridge sentence you will say when it ends. 10. Define the abort rule in advance: how many seconds of stall before you switch to the fallback, and what the fallback is.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Every technical talk that has a working artefact, and unconditionally in slots of 30 minutes or less, on hardware you do not own, or in front of an audience that has already heard the concept described and needs to see it instead. The deliberate choice matters most when the demo is the largest single block in the deck, because that is exactly when an unbounded duration destroys the rest of the talk.

### Evidence


**evidence_level**

practitioner consensus — a named pattern catalogue (Presentation Patterns) plus multiple independent practitioner sources (speaking.io, Hanselman, PostHog's demo guide, conference retrospectives) converge on the same advice. The specific '60 percent of the material' density figure is a single-expert claim from the book with no published method behind it, and should be quoted as an estimate, not a measurement.


**myth_status**

contested — that the mode should be chosen deliberately is uncontroversial and universally recommended; the claim that a live demo is inherently more credible than a well-narrated recording is folklore with no measurement behind it.


**contested_claims**

1. 'The demo gods' — the widespread superstition that demo failure is a supernatural force rather than an unmanaged dependency; harmless as a joke, dangerous when it substitutes for a reset script and a fallback. 2. 'The audience can always tell, and will mark you down for a recording' — asserted by practitioners (utkusen argues visible video controls make viewers 'feel less excited because they know everything is already prepared'), but never measured; the honest counter-move is to announce the recording rather than hide it. 3. 'A live demo proves you actually built it' — it proves the demo path works on your machine, nothing more. 4. The '60 percent information density' figure is repeated as if it were a study result; it is a book estimate. 5. 'Nobody remembers the slides, everybody remembers the demo' — plausible and unmeasured; the NoCode Poland #4 and Pionierzy AI #03 retrospectives show the opposite happens when the audience cannot judge whether the demo output was correct.


**key_sources**

1. Ford, McCullough, Schutta, Presentation Patterns (2012) — names 'Dead Demo' as using a live demonstration as a time filler when the presenter is short on expositional content, and quantifies the density cost (~60 percent coverage) and the typing-as-performance speedup spiral. 2. Holman, speaking.io 'Live Tech Demos' (~2014) — 'Live demos ... are notoriously failure-prone', and recommends embedding a screencast so the speaker only has to narrate. 3. PostHog, '24 tips for giving S-tier demos' (Jina Yoon) — supplies the operational checklist (demo project not live data, notifications off, bookmarked URLs, a WiFi-failure plan with screenshots, browser at 125–150 percent, projector tested) and the counterweight 'active demos always win'.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

PostHog's guidance runs the other way — an active demo beats slides for engagement, and for a developer-tools audience a live run answers the question a recording cannot: does this work on an ordinary machine right now. A recording also cannot answer an unanticipated question ('what happens if the file isn't there?'), which is the specific reason the hybrid exists. And a demo that is visibly recorded can read as evasion if the talk's thesis is 'this is production-ready' — in that case the credibility cost is real, and the answer is a live demo with a one-command reset, not a recording.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

In the BB4IT plan the demo is slides 13–15 at 7 minutes of 25 — 28 percent of the slot and the single largest block. It sits after the architecture block (slides 9–12) so the audience already holds the map before it sees the terrain, and before the 'how to build it' block, so what they just saw becomes actionable. The decision itself costs zero stage minutes; it buys back the 3–5 minutes a stalling live demo would have stolen from the closing. Practically: a transition slide reading DEMO, then the recording, then a bridge sentence back to the deck — never a raw alt-tab out of the deck, which is what makes the seam visible.


**time_budget_min**

7 minutes on stage in the BB4IT plan (slides 13–15, 28 percent of the 25-minute slot). General cap: no more than one third of the slot. The mode decision itself: 0 stage minutes. Add ~30 seconds for the framing sentence and ~20 seconds for the bridge out.


**audience_change**

The audience leaves having seen the claim, not heard it: 'the same question returned nothing, then a note was ingested, then it returned an answer' is something they watched happen. The cutting criterion applies here — if the audience cannot judge whether the demo output was correct, the demo changed nothing in the room and should be cut or re-based on a domain they can judge.


**application_pl_talk**

Everything in the method transfers; the rebuild is linguistic. The demo runs in English (terminal output, file names, agent responses) while the narration is Polish, so every on-screen string that carries the argument needs a spoken Polish gloss the moment it appears — otherwise the audience is reading and listening in two languages at once and does neither. Announce the mode in one plain sentence rather than hiding it: Polish technical audiences read a concealed recording as a trick and an announced one as competence. Keep the honest hybrid line ready — the terminal is open, ask and I will run it — because it converts the recording from a limitation into a standing offer. Note also that the demo base decided for BB4IT (cooking recipes, per the 08.09 decision) exists precisely to solve the Polish-audience version of this problem: the AI Act base used at Pionierzy AI #03 left the room unable to evaluate the answers, so the demo proved nothing.


**pl_language_notes**

Prefer 'pokaz' over 'demo' as the noun — 'demo' is effectively indeclinable in Polish ('tego demo' grates), while 'pokaz / pokazu / pokazie' declines cleanly; keep 'demo' only in the fixed collocation 'demo na żywo' if you want it. Avoid the calques 'zrobić demo live' and 'prezentować live' (hybrid slang), 'screencast' (say 'nagranie ekranu'), and 'setup dema' (say 'przygotowanie pokazu'). Ready transitional phrases: opening the block — 'Teraz pokaz. To nagranie, nie transmisja na żywo — chcę zmieścić się w czasie i komentuję je na bieżąco.'; the standing offer — 'Terminal z tą samą bazą stoi otwarty. Jak będzie pytanie, odpalę to na żywo.'; the bridge out — 'To był cały dowód. Wracamy do tego, czym to zbudować.' Do not translate 'Dead Demo' or 'Lipsync' on stage — they are internal vocabulary, and a Polish rendering ('martwe demo') sounds like a translation exercise.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

demo_risk — directly and primarily; this is the decision the gap is about, and it is already resolved for BB4IT (decision no. 1, 08.09: the demo runs from a recording, with the terminal on the same base standing open for Q&A). Also timing — a recording has a duration known to the second, which is the only way the 7-minute demo block stops threatening the 25-minute budget. Also late_slot — a fixed-length, well-paced recording holds a tired 14:50 room better than a speaker typing into silence. Also reuse — a recorded demo is a finished asset that becomes a LinkedIn clip and a course segment without re-shooting, which a live demo never is.


**minimal_2h_version**

The mode can no longer be changed with two hours left, so this collapses into verification of a decision already made: (1) play the recording end to end from the presenting laptop with the projector cable in, at the room's resolution, with sound routed the way it will be routed on stage; (2) confirm a second copy of the file exists off the laptop (the PL-200 obligation), and that the deck opens from it; (3) time the recording and write the number into the notes next to the block; (4) write and say aloud twice the two sentences — the framing sentence that opens the demo and the bridge sentence that closes it; (5) open the live environment on the same base and leave it untouched on a second desktop; (6) set the abort rule — 30 seconds of stall, then three stills and keep talking.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

For the BB4IT talk about an agentic knowledge base, the demo's claim sentence is: 'the agent does not fail at reasoning, it fails at access to your knowledge — and adding one file fixes it.' The arc that proves it, in three beats and roughly seven minutes: (1) ask the agent a question whose answer is in the base — it answers and cites the file; (2) ask a question whose answer is not there — it says it does not have it, instead of inventing one; (3) ingest one new note, ask the identical question again — it now answers, and `git diff` shows exactly what grew. The base is cooking recipes, so every attendee can evaluate correctness without a minute of setup, which is precisely the condition the AI Act base failed at Pionierzy AI #03. Recorded, trimmed, narrated live; the live terminal on the same base stays open for the 5-minute Q&A.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

Over weeks, make mode selection a written step in the deck brief rather than an implicit habit, and keep a one-line decision record per talk (mode chosen, actual duration on stage, what went wrong). After three or four talks the record itself tells you your own live-demo variance, which is the number the decision should be based on. In parallel, build the reusable half: a demo base you know by heart and re-use across talks, and a recording pipeline (record, trim, embed) fast enough that choosing 'recorded' is never the expensive option. The single highest-leverage habit is the one from the Pionierzy AI #03 retrospective — never demo a base whose content you have not personally worked through, because then you discover the answers alongside the audience instead of commenting on them.


**drill**

Input: your current demo, on a machine rebooted cold. Action: run it live three times, start to finish, with a stopwatch, speaking the narration aloud each time; log each duration and every unplanned recovery action (a retry, a path fix, a wait on a network call). Output: three numbers and an incident count. Decision rule, applied immediately: spread greater than about 25 percent of the mean, or any incident at all, and the demo goes to tape today. 15–20 minutes for a 5-minute demo.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

One demo beat — a single command plus its visible output plus the one sentence you say over it. Decks are rehearsed by slide; demos are rehearsed by beat, because a beat is the smallest unit that can independently fail.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

Live: 3–6 hours (environment build, one-command reset script, three cold rehearsals) plus a re-check on the morning of the talk. Recorded: 2–4 hours (script the beats, record 2–3 takes, trim dead time, embed, verify playback) and near-zero on the day. Hybrid: recorded cost plus about 1 hour to stand up and pre-warm the live environment. The recording is the cheaper option the second time it is used, and BB4IT already carries that cost as a dated task (PL-87, recording ready 10.09).


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

Three timed cold runs give the variance number. A rehearsal recording watched at 1x tells you whether the narration keeps up with the screen. On stage the signal is behavioural — phones going down when the demo starts and coming back up when it drags. After the talk, a demo-specific question in Q&A means the demo landed as evidence; no question about it at all usually means it read as filler.


**measurable_kpi**

Demo minutes as a share of the slot (target ≤ 33 percent; BB4IT is at 28 percent). Duration spread across three timed cold runs (target ≤ 10 percent; > 25 percent forces tape). Unplanned recovery actions per run (target 0). Post-talk: number of Q&A questions that reference the demo (target ≥ 1).

### Online and recorded


**online_variant**

For a webinar the calculus shifts further toward recorded. Screen-share compression destroys terminal legibility, upstream bandwidth is a live dependency you do not own, and a stall reads far worse online because there is no room to look at while you recover — the audience is looking at a frozen screen and a silent face. A recorded demo played from the local file, narrated live over an open microphone, keeps the pace and lets you watch the chat while it runs. Announce it: 'to nagranie, komentuję na żywo'. Keep the hybrid, because in a webinar the live environment can genuinely be opened on request without physical risk.


**recorded_variant**

When the talk goes to YouTube the demo becomes its most-rewatched and most-clipped segment, so it is the block worth optimising for the recording rather than the room: check that terminal text is legible at 720p, not just from the back row, and avoid mouse-only gestures the camera or capture may miss. Two things the recording silently loses: the room's reaction during the demo (which is where a live audience's laughter or intake of breath actually happens) and any audience question asked over the demo. Also plan for the file's second life — a 60–90 second cut of the three-beat arc is a finished LinkedIn asset, which is why the recording pays for itself against the reuse gap.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

Dead Demo — a demo that exists to fill time rather than to prove a claim; recognisable because the speaker cannot say in one sentence what it demonstrates. 'Let me just show you one more thing' — the unbudgeted extra demo that eats the closing. Playing a recording while implying it is live — detectable (video controls, no typing rhythm, no cursor jitter) and it costs more credibility than the recording ever saved. The tour — walking the audience through a tool's UI instead of through an argument. And the mirror image of Dead Demo: a live demo chosen for machismo when a recording would carry the same argument with none of the risk.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Choosing the mode after the deck is written, when the demo's length is already load-bearing. Demoing a domain the audience cannot evaluate, so the outcome is 'I take your word for it' instead of 'I saw it work' — exactly what happened with the AI Act base at Pionierzy AI #03. Not knowing the demo base by heart, which flips the speaker into reading along with the room. Leaving the demo's duration unmeasured. Forgetting that a demo needs the same one-sentence claim a slide does. Rehearsing the demo warm, on a machine that has already run it once that hour.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

Cut the demo when the artefact is conceptual and a diagram carries it better; when the audience has no basis to judge whether the output is correct; when the slot is under about 15 minutes and the demo would consume more than a third of it; when the talk's thesis is architectural rather than behavioural; and whenever the honest answer to 'what does this prove' is 'that I have something to show'.


**fallback_if_it_fails**

Recording will not play: do not troubleshoot in front of the room. Say one flat sentence ('nagranie nie chce ruszyć, opowiem to na trzech obrazkach'), advance to the still frames you exported for exactly this, and narrate the same three beats — the argument survives, only the motion is lost. Live demo stalls: give it a hard 30 seconds, then switch to the recording or the stills and say what should have happened; never keep retrying while the room watches. Everything is dead: the demo's three beats are three sentences you can say standing still — deliver them and move on. In all three cases name it once and do not apologise again, which is the standard recovery protocol.


**works_signal**

Phones go down and stay down for the length of the demo; heads track the screen rather than the speaker; the room goes quiet at the moment of the contrast beat ('nie mam' → the answer). Failure signals: phones come back up within 30 seconds, side conversations start, people begin packing bags — in a 14:50 last slot the bag signal arrives fast, and it means cut to the last beat.


**dependencies_conflicts**

Prerequisites: demo-environment-hygiene and on-screen-data-leak (a demo is a screen you have handed to the room and to YouTube); one-command-demo-reset for any live or hybrid mode; backup-equipment-checklist and room-recon-tech-check for the delivery chain, including audio. Enables lipsync-recorded-demo, which is the execution technique once 'recorded' is chosen. Hard conflicts: live demo against the time budget (the classic one — a live demo has no upper bound while the 85 percent rule needs one); a `<video>` slide against the PDF backup and against the file the organiser receives, since the video is not in the PDF; and demo minutes against Q&A minutes when the demo overruns into the 5-minute question block.

### Tooling


**tool_support**

Screen recording: OBS Studio, Screen Studio, macOS/Windows built-in capture; asciinema for terminal-only capture with a real replay feel. Editing and trimming: ffmpeg for a lossless cut, any NLE for speed ramps over slow steps. Playback: the deck itself (a video slide) is preferable to alt-tabbing to VLC, because it keeps the seam invisible. Stopwatch or phone timer for the three cold runs. A second machine or second desktop for the standby live environment. An LLM is useful upstream — for turning the demo into a three-beat script and generating the 'what if they ask X during the demo' list.


**marp_implementation**

Verified in this speaker's own NCP4 deck: a dedicated slide carrying `<!-- _class: video -->` followed by `<video src="./sources/budget-process.mp4" controls autoplay muted></video>`, with the narration held in an HTML-comment presenter note under it. Requires the HTML build path (`/slides:build --html`; Marp needs `--html` to pass raw tags through, and `--allow-local-files` when converting locally referenced media). Two concrete fixes found in the current setup: `section.video` is not defined anywhere in `slides/themes/plsoft-dark.css` (checked 2026-09-08), so the class is presently a styling no-op — add `section.video { padding: 0 } section.video video { width: 100%; height: 100%; object-fit: contain }`; and `autoplay` starts the clip the instant the slide appears, which removes your control over when the demo begins — drop `autoplay`, keep `controls`, and start it deliberately. Note `muted` is what makes autoplay legal in Chrome, so an autoplaying clip with narration audio will be blocked. Also add a DEMO transition slide before the video slide, as the NCP4 deck does, so the audience is told a mode change is coming.


**survives_pdf_export**

no — the demo does not survive `marp --pdf` in any form. Tested on the installed Marp CLI v4.4.1 / Core v4.3.1 on 2026-09-08: a slide holding `<video src="…" controls muted>` exports as a page containing only empty player chrome (the extracted page text is the literal `0:00` of the control bar, and the page contains zero embedded images). The PDF is both the organiser's copy (due to biuro@itwgorach.pl by 11.09, 14:00) and the backup that runs when the laptop does not. Two mitigations, both verified: add a `poster="./sources/demo-poster.png"` attribute — with a poster present the same page embeds that image and the empty control chrome disappears — and additionally keep a parallel stills sequence for the demo block, one frame per beat with a one-line caption, so the argument survives without motion.

### Effort and payoff

- **prep_effort** — medium — the decision itself is nearly free; the recorded path it usually selects costs 2–4 hours once and then amortises across reuse.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Immediate, at the next talk: the demo block stops being the variable that can destroy the timing plan, and the closing survives. Within two or three talks the decision record turns demo mode from a nervous judgement call into a rule with your own numbers behind it.


**needs_organiser_agreement**

yes — three specific things. (1) Audio: if the recording carries sound, the room PA must take laptop audio, which is a separate cable and a separate test from video. (2) Video chain: HDMI is on the organiser's side for BB4IT and the adapter must be flagged by email (PL-217). (3) The file the organiser receives: confirm that the PDF due to biuro@itwgorach.pl by 11.09 14:00 is understood to be the static version and will not contain the demo, and agree whether the deck may be published alongside the YouTube recording.


**priority**

high — it is the first decision in the operations group, every other demo item depends on which branch it takes, and for this speaker it is a named gap that is already resolved for 12.09 and therefore only needs verifying rather than deciding.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

https://presentationpatterns.com/glossary/ (canonical one-line definitions: 'Dead Demo — uses a live demonstration as a time filler when the presenter is short on expositional content'; 'Lipsync — record the interaction with the tool and play it back as part of the presentation'); https://www.informit.com/articles/article.aspx?p=1930512 (Presentation Patterns, ch. 'Demonstrations Versus Presentations' — the ~60 percent density estimate and the typing-as-performance spiral); https://speaking.io/prep/live-demos/ (Holman — live demos are notoriously failure-prone; embed a screencast and narrate); https://newsletter.posthog.com/p/how-to-demo (PostHog / Jina Yoon, 24 tips — demo setup checklist, demo project not live data, WiFi-failure plan); https://www.hanselman.com/blog/11-top-tips-for-a-successful-technical-presentation (Hanselman 2008 — one-click reset, utter preparation, console legibility); https://utkusen.substack.com/p/dont-do-live-demos-do-live-looking (the 'live-looking demo' argument and the DEF CON failure anecdote); https://blog.gilliard.lol/2018/10/25/live-coding-tips.html (reset script `git reset --hard && git clean -fdx`, asciinema recording as last-resort backup); https://mitcommlab.mit.edu/cee/commkit/technical-demonstrations/ (MIT CommLab, structuring a technical demonstration)


---

## Expansion joints — 15, 25 and 45 minute versions of one talk

> Design one talk with declared expansion and contraction points so that a shortened slot is cut at planned seams instead of being delivered faster, and a longer slot is filled with prepared depth instead of improvisation.

### What it is

- **category** — narrative


**origin_author**  
<sub>Originating author, book, lab or community that named the method</sub>

Neal Ford, Matthew McCullough and Nathaniel Schutta, 'Presentation Patterns: Techniques for Crafting Better Presentations' — Expansion Joints is a named pattern (Creativity Patterns), and its matching antipattern Shortchanged covers the unplanned last-minute reduction. Supporting practitioner guidance on cut lists and on rehearsing to a fraction of the slot comes from conference-speaking guides and from Gunnar Morling's rehearsal advice.

- **origin_year** — 2012 (Presentation Patterns, ISBN 9780321820808)

- **talk_moment** — before arriving (designed and rehearsed) → room filling (the decision, when you learn the real slot) → middle blocks (executed live)

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

Time pressure on stage has exactly two possible responses: deliver less material, or deliver the same material faster. The second is the default because it requires no prior decision, and it is uniformly worse — speech rate rises, pauses disappear, the takeaway sentences get swallowed, and the parts that get compressed are the ends of blocks, which is where the meaning was. Expansion joints work by making the first response available at zero cognitive cost during the talk: the decision about what to lose was made in a calm room days earlier, so on stage it reduces to executing a marked cut. There is a second, subtler mechanism: knowing that a designed 15-minute version exists removes the fear that drives the acceleration in the first place. A speaker who believes the talk only exists at one length experiences a lost five minutes as a threat to the whole talk; a speaker with a cut list experiences it as a branch. The pattern also inverts the usual failure of long slots — an unexpectedly generous slot is filled with prepared depth (the appendix blocks) rather than with improvisation, which is where most overruns and most Dead Demos come from.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Establish the spine: the smallest set of blocks that still delivers the promise. For a 25-minute talk this is usually three or four blocks plus opening and close — this is the 15-minute version and it must be a complete talk, not a truncated one. 2. Tag every remaining block as EXPANSION (adds depth to a spine block) or OPTIONAL (a self-contained addition). Only zero-dependency blocks can be either. 3. Order the cut list explicitly, worst first: write the sequence in which blocks leave — 'cut B5, then B3, then shorten B1's demo to 90 seconds'. An ordered list is what makes a live decision possible; an unordered set is not a plan. 4. Never put the opening, the close or the single CORE asset on the cut list. Standard guidance is to cut examples and evidence first, never the main points and never the conclusion. 5. Define the three versions concretely by naming which blocks each contains: 15 = spine; 25 = spine + two EXPANSION; 45 = spine + all EXPANSION + all OPTIONAL + extended Q&A. 6. Place every joint at a block boundary and write the alternative transition sentence for the cut case, so the seam is invisible: the sentence that leads from B2 to B4 must already exist. 7. Rehearse the transitions across cuts, not just the full talk — the joint is the part that fails, and it has never been said aloud otherwise. 8. Encode the joints in the deck: a marker comment at each cut candidate, cut blocks contiguous in the file, and slide numbers written on the printed cut list so you can jump in the PDF if the HTML deck is not running. 9. Time each version at least once. A 15-minute version is not 'the 25 minus ten minutes' until a stopwatch says so. 10. On the day, confirm the actual slot length and the actual start time before you go on, and pick the version then — not mid-talk.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Any talk you will give more than once, any conference where the schedule is likely to slip, any slot at the end of a day or after a session known to overrun, and any talk with a live or recorded demo (demos are where time disappears). Highest value for a signature talk delivered repeatedly at different events and lengths. Lowest value for a one-off internal presentation with a controlled agenda, or for a tightly moderated lightning-talk format where the length is enforced and fixed and there is no room to expand into.

### Evidence


**evidence_level**

Practitioner consensus, plus one named pattern in a published catalogue (Ford et al. 2012). No controlled study exists comparing planned cutting with live acceleration, and none is likely; the argument rests on the near-universal agreement among experienced conference speakers and on the mechanical fact that a rehearsed cut point is executable while an unrehearsed one is not. The adjacent numeric claim — rehearse to 80-90% of the slot — is also practitioner consensus, with sources spread across 80%, 85% and 90% and no empirical basis for choosing among them.


**myth_status**

confirmed as practice — the pattern is documented, uncontroversial and low-risk; its only contested element is the specific percentage of the slot to target in rehearsal.


**contested_claims**

1) 'Rehearse to 85% of the slot' — the figure varies by source (80%, 85%, 90%) and none of them is empirical. The defensible version of the claim is the direction, not the number: rehearse under the slot length, because live delivery runs longer than rehearsal (questions, laughs, technical friction, slower speech), and pick a target you can verify against your own recordings. 2) 'A shorter version means speaking faster' — this is precisely the Shortchanged antipattern the pattern exists to prevent; the glossary frames handling a last-minute reduction as a skill frequent presenters have to hone, not as an acceleration exercise. 3) 'Cut the Q&A if you are short' — commonly done and usually wrong for a conference talk with a scheduled Q&A slot, because it converts a visible time problem into an invisible one, and it removes the moment that generates hallway conversations. 4) 'Just skip slides live' — skipping without a prepared transition sentence produces a visible seam; the audience sees slides flick past and infers you are behind, which costs more than the content would have.


**key_sources**

1) Presentation Patterns glossary (Ford, McCullough, Schutta, 2012) — Expansion Joints (pattern): 'Building a presentation for one (and only one) length is a missed opportunity.'; Shortchanged (antipattern): 'Dealing with a last-minute reduction in presentation time is unfortunately one of the skills frequent presenters have to hone.' The canonical naming of both sides of this item. 2) Conference-speaking guidance on cut lists — know in advance exactly which points you will cut, cut examples and evidence first rather than main points, and never cut the conclusion or the call to action. 3) Morling, G., 'Ten Tips to Make Conference Talks Suck Less' — three full rehearsals for new material, noting timestamps at transitions (especially around demos) to identify what needs trimming; the practical mechanism that turns joints into measured decisions. 4) Rehearsal-target guidance clustering at 80-90% of the slot across multiple speaking guides (no primary study behind any of the figures).


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

1) Maintenance cost: three versions of a talk is three things that can drift out of sync, especially once the deck is edited between events; the mitigation is that only one deck exists, with markers, but the discipline is real work. 2) The spine can hollow out: repeated cutting toward the 15-minute version can leave a talk that is technically complete and substantively thin — a spine should still be a good talk, not a summary. 3) Over-planning: for a speaker who does two talks a year, designing three versions may cost more than it returns, and a single ordered cut list of two items delivers most of the benefit. 4) Cutting a block mid-talk still costs attention, and under stress a speaker can execute the cut and then keep referring to the cut material out of habit — this is a real failure mode and it is why cut transitions must be rehearsed. 5) In moderated formats the moderator may cut you anyway, at a point of their choosing rather than yours, which no amount of design prevents.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

The 25-minute delivery is itself one point on the curve, and the BB4IT slot is exactly the case the pattern was written for: last talk of the day, after nine sessions, on a schedule that has had all day to slip. Concretely: the spine is opening + recorded demo + failure taxonomy + guardrail architecture + Monday checklist + close ≈ 15:30. EXPANSION blocks are the cost numbers (3 min) and 'what we got wrong first' (3 min), giving 21:30 for the full version — under the 85% target of 21:15 by a hair, which itself signals that one expansion block should be shortened rather than both kept. The cut list, ordered: (1) drop 'what we got wrong first' entirely; (2) drop the cost numbers, keeping one spoken figure; (3) shorten the recorded demo from four minutes to ninety seconds by starting it at the runaway moment. That third cut is the one to rehearse, because a video cut point has to be found live.


**time_budget_min**

0 on stage — this item spends no time, it decides how time is spent. Its output is a set of durations: 15-16 for the spine, 21-22 for the standard version, 40-42 for the long version plus Q&A. Preparation cost is 60-90 minutes on top of building the talk once.


**audience_change**

Nothing visible, which is the point: the audience of a cut talk should not be able to tell that anything was removed. The measurable difference is negative — the room does not experience the rushed final three minutes in which the actual conclusion is delivered at double speed, which is what they otherwise remember most (recency). Secondarily, the audience gets a real ending and a real Q&A instead of a truncated one.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

timing — directly and primarily. This is the structural answer to the recurring 40-minutes-of-material-in-a-25-minute-slot problem, and it is the counter-antipattern to Shortchanged named in the item's own description. late_slot — directly: the last talk of the day is the one most likely to have the slot compressed by earlier overruns, so the cut list is disproportionately likely to be needed at 14:50. demo_risk — indirect but real: the demo is both the longest block and the most failure-prone, so a version of the talk with a 90-second demo is simultaneously a time contingency and a demo contingency. opening — none. reuse — mild: the blocks cut from the 15-minute version are exactly the material that becomes standalone content afterwards.


**minimal_2h_version**

Seventy-five minutes and it is worth doing even four days out. (1) 15 min — write the spine: which blocks would remain if the slot were halved, and confirm the promise still holds without the others. (2) 10 min — write the ordered cut list, worst first, three items, and mark the slide numbers next to each. (3) 20 min — write and say aloud the two covering transitions (the seams that only exist in the cut version). (4) 25 min — one timed run of the spine only, in Polish, standing, to get its real duration. (5) 5 min — print the cut list on the same card as the opening script. If only twenty minutes exist: write the ordered cut list and the covering transitions, say each transition aloud three times, and skip the timed run — an unrehearsed cut list still beats improvised acceleration.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

Agentic-AI talk, three declared versions from one Marp file. 15-minute version (spine): opening 1:30 → recorded demo cut to 90 s starting at the runaway moment → failure taxonomy 3:00 → guardrail architecture 3:00 → Monday checklist 3:00 → close 1:30, total ≈ 13:30, leaving buffer. 25-minute version: the same plus the full 4-minute demo and the two EXPANSION blocks (cost numbers, what we got wrong first) ≈ 21:30. 45-minute version: adds two OPTIONAL blocks held in the appendix (the evaluation harness, the human-in-the-loop escalation design), extends the demo to the full seven-minute recording with live narration, and doubles Q&A ≈ 41:00. Ordered cut list carried on the card: '1) B5 out — transition: "To domyka architekturę. Konkret na poniedziałek." 2) B3 out, keep one figure spoken. 3) demo → start at 02:15 in the file.' Encoded in the deck as <!-- JOINT: cut B5 | next-transition: … | slides 22-27 -->.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

(1) Deliver the same talk at two different lengths deliberately, even when not forced to — the cut version delivered by choice is the only way to learn where a talk is actually load-bearing. (2) Practise the cut transitions in isolation; they are two or three sentences and they are the only genuinely new material in a shortened version. (3) After each talk, record what you actually cut on stage and whether it was on the list — unplanned cuts reveal where the design was wrong. (4) Build the habit of writing the spine first and the expansions second, which reverses the usual authoring order and makes every new talk arrive with joints already in place. (5) Over several events, converge on a signature talk with a stable spine and a growing library of expansions — this is the compounding version of the practice and it removes most future preparation cost.


**drill**

The halving drill, 20 minutes. Input: the current deck outline, a stopwatch. Action: (a) 5 min — mark the blocks that would survive a 50% cut and write them as an ordered list; (b) 5 min — write the covering transition for each removed block, in full sentences; (c) 10 min — deliver the cut version's seams only: the last 20 seconds of the block before each cut, the transition, and the first 20 seconds of the block after, three times each, standing and aloud. Observable output: a written ordered cut list with slide numbers, and three rehearsed seams. Success test: someone who knows the full talk cannot tell from the seams where the cut happened.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

The seam — the last sentence before a cut plus the covering transition plus the first sentence after. It is about twenty seconds long, it is the only material unique to the cut version, and it is what fails on stage. The secondary unit is the whole spine, timed once.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

60-90 minutes on top of building the talk: 20 for the spine and tagging, 15 for the ordered cut list and transitions, 25-40 for timing the spine and rehearsing the seams. Per repeat performance of the same talk: 10 minutes to re-check the cut list against the new slot. Long-run cost falls to near zero for a signature talk.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

Stopwatch against each version, which is the only objective measure. On stage: whether you reached the close with time to spare — the real test, and it either happened or it did not. From the recording: listen for speech-rate increase in the final third, which is the acoustic signature of an unplanned compression and is audible even when the speaker did not notice it. From the audience: questions about material you cut mean the cut was visible; no such questions mean the seam held.

### Online and recorded


**online_variant**

Webinars slip differently: they start late because of admissions and audio checks, and they overrun because chat questions arrive continuously. The joints therefore need to be usable mid-talk rather than chosen at the start, which argues for more, smaller joints. One online-specific expansion that has no room equivalent: chat-driven depth — an OPTIONAL block held in reserve and delivered only if the chat asks for it, which fills a long slot with demonstrably wanted material. Also, remote delivery makes cutting easier to hide, since the audience cannot see a deck's slide count or your notes.


**recorded_variant**

The published recording is of whichever version you delivered, which creates a small conflict with the deck: if the organiser publishes the full PDF, the video and the file will not match, and viewers will ask about slides that were never presented. Options: publish the deck after the talk in its delivered form, or leave the cut blocks in an explicitly labelled appendix so the mismatch reads as intentional. There is also an upside — the spine version is a better YouTube artefact than the long one, because online attention rewards the tighter cut, so a deliberately cut delivery is often the better recording.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

1) Shortchanged itself — discovering the reduction on stage and responding by talking faster. 2) The fake cut list: blocks nominated as optional that the argument actually depends on, so cutting them leaves the talk incoherent and the speaker improvising a repair. 3) Three separate decks, which drift apart and produce a version mismatch on the day. 4) Cutting the close, which sacrifices the recency window and leaves the recording without an ending. 5) Announcing the cut aloud ('nie zdążę tego pokazać'), which converts an invisible edit into a visible failure. 6) Filling an unexpectedly long slot by improvising, or worse by extending the demo to fill time — the Dead Demo antipattern, which the OPTIONAL blocks exist to prevent.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Not timing the short version, so the 15-minute version is 19 minutes. Placing joints inside blocks rather than at boundaries, which makes cuts visible. Forgetting to write the covering transition, so the seam is improvised at the worst moment. Building the cut list as an unordered set rather than an ordered sequence. Leaving the cut slides in the middle of the deck, so they appear on screen during the cut version — a mistake with no recovery. Deciding the version mid-talk rather than before going on. Failing to re-check the cut list after editing the deck, so the slide numbers on the card are wrong.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

A tightly enforced fixed-length format — a lightning talk, an Ignite-style deck with auto-advancing slides, or a broadcast slot — where the length cannot vary and the design work has nowhere to go. A talk given once, internally, with a controlled agenda. A first-ever talk, where the effort is better spent on rehearsing one version well: an unrehearsed variant is not a contingency, it is a second untested talk. And do not use expansion joints as a substitute for cutting an over-long talk properly: if the standard version does not fit the slot, the fix is editing, not a branch.


**fallback_if_it_fails**

If you are cut to half your slot with no warning and have no prepared spine: keep the opening, keep one piece of evidence, keep the close, and say the rest as three sentences — an honest 12-minute talk beats a compressed 25-minute one. If you execute a cut and then catch yourself referring to the cut material, do not correct it aloud; carry on and let the reference pass, because explaining the cut is more disruptive than the orphaned reference. If you are given more time than expected and the OPTIONAL blocks are not ready, extend Q&A rather than the talk — a longer Q&A is always credible, an improvised extra block rarely is. If the moderator signals to wrap while you are mid-block, jump to the close immediately: the close is 90 rehearsed seconds and is never the thing you cut.


**works_signal**

The signal is on your own clock, not in the room: at each checkpoint you are within thirty seconds of plan, and you arrive at the close with 90-120 seconds in hand. Room-side signals that a cut worked: nobody asks about the removed content, and the ending lands with the same pause and applause pattern as a full delivery. Signals that it failed: you notice yourself speeding up (the sensation of hearing your own next sentence before finishing the current one), the room's note-taking stops in the final third, and the moderator makes a time gesture — by which point the cut list should already have been used.


**dependencies_conflicts**

Prerequisites: modular block structure (a cut point can only exist at a block boundary) and a rehearsed timed run (you cannot cut what you have not measured). Feeds: on-stage time control, which consumes this item's ordered cut list as its live instrument, and the saturated-audience item, whose day-of cuts use the same joints. Conflicts: (a) with a fixed PDF already sent to the organiser, since the delivered version will not match the published file; (b) with animated or fragment-based builds, which do not survive PDF export and complicate jumping between slides; (c) with a continuous live demo, which cannot be cut cleanly — a recorded demo can, by starting later in the file; (d) with narrative arcs that depend on cumulative build-up, where removing a block removes a setup the payoff needs.

### Tooling


**tool_support**

A stopwatch with laps for timing each version. The printed cut list card, which must work without a laptop. Presenter notes for joint markers and checkpoint times. A markdown deck pipeline, because contiguous ranges make cuts mechanical — this is the specific place where the Marp workflow pays off compared with a slide GUI. For the recorded demo, a video file with known timestamps so 'start at 02:15' is executable. An LLM can review a deck outline and propose which blocks are removable without breaking references, which is a decent first pass on the dependency analysis but not a substitute for saying the cut version aloud.


**marp_implementation**

One file, three versions, expressed as markers rather than branches: at each cut candidate's first slide put `<!-- JOINT: id=B5 | order=1 | slides=22-27 | transition: "To domyka architekturę. Konkret na poniedziałek." -->`. Keep every cut candidate as a contiguous slide range so removal is a single delete. Hold OPTIONAL blocks after the close under an appendix heading with `<!-- _paginate: false -->`. Keep `paginate: true` globally so the printed cut list can carry slide numbers, which is what lets you jump forward in a PDF viewer by typing a page number if you are running from the backup file. Avoid implementing joints with Marp fragments or `_class`-driven reveals: fragments exist only in the HTML export and vanish in PDF, which is the deck's own backup — the joints must work in both.

### Effort and payoff


**prep_effort**  
<sub>low | medium | high — one-off setup cost</sub>

medium — 60-90 minutes the first time, and it is the item with the best long-run amortisation in this batch: the same joints serve every future delivery of the same talk, and the habit changes how new talks are outlined.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Immediate: the specific failure mode of rushing the last three minutes disappears, which is the part of the talk the audience remembers best. Within two or three talks: schedule slippage stops being a source of pre-talk anxiety, which measurably improves delivery for reasons unrelated to timing. Long run: one signature talk that can be offered at any length an organiser asks for, which lowers the cost of accepting future invitations.


**needs_organiser_agreement**

yes, in a small but non-negotiable way: confirm the actual slot length, your actual start time, and whether Q&A is inside or outside the slot — three facts that decide which version you deliver, and all three change on the day at conferences that run late. Also agree who signals time and how (see the moderator-contract item), since a cut list is useless without a reliable signal that you are behind.


**priority**

high for this speaker — it is the direct structural fix for the named timing gap, it is the counter-antipattern the outline itself identifies, and the last slot of a nine-talk day is the single most likely place to need it. It is achievable in the four days before 2026-09-12 provided the deck already has block boundaries.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

- https://presentationpatterns.com/glossary/
- https://nealford.com/books/presentationpatterns.html
- https://www.morling.dev/blog/ten-tips-make-conference-talks-suck-less/
- https://www.informit.com/store/presentation-patterns-techniques-for-crafting-better-9780321820808
- https://tressacademic.com/rehearse-presentation/
- https://sphericalcowconsulting.com/2026/04/21/a-practical-guide-for-conference-speakers/
- https://cs.stanford.edu/people/widom/conference-talks.html
- https://winningpresentations.com/presentation-time-management/

### Not established by this research

- `application_pl_talk`
- `pl_language_notes`
- `measurable_kpi`
- `survives_pdf_export`


---

## Framing for a topic-saturated audience

> When earlier speakers have already covered your subject, delete everything they established, say out loud that you are deleting it, and spend the reclaimed minutes on the one thing only you have.

### What it is

- **category** — narrative

- **talk_moment** — before arriving (candidate cuts prepared) → room filling and earlier sessions (the decision) → first 90 seconds (announced) → middle blocks (executed)

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

Saturation changes what your material is worth, not what it says. Three effects. (1) Marginal value collapse: after four talks on agents, the audience's prior on 'what an agent is' is already set, so every minute spent establishing it delivers close to zero new understanding while consuming the same minute of a 25-minute budget — it is the highest-cost, lowest-yield content in the deck. (2) Cost of unacknowledged repetition: a room that recognises material it has already heard does not think 'good, reinforcement', it thinks 'this speaker did not check' — the credibility hit is larger than the time loss, and it lands in the first three minutes, which is where the primacy window lives. (3) Contrast as an attention mechanism: novelty is relative to what preceded it, so in a saturated room your differentiator does the work a hook would otherwise have to do — the fifth talk that says 'nie będę tłumaczył, czym jest agent' buys more attention with eight words than any amount of stagecraft. The reclaimed minutes then go into depth, which is the only dimension that is still unoccupied: the earlier capability talks leave failure modes, economics, operations and evidence untouched.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Before the event: tag every block in the deck as CORE (only you have it), CONTEXT (anyone could give it), or BRIDGE (needed only to reach a CORE block). Saturation removes CONTEXT first, never CORE. 2. Read the full agenda and every abstract of the talks scheduled before yours; write one line per talk stating what it will establish. 3. Pre-plan the swap list: for each CONTEXT block, write what replaces it if it is cut — usually depth on an existing CORE block, not new material. Doing this in advance is what makes the decision executable on the day. 4. On the day, attend the talks that overlap with yours — this is the only reliable source of what was actually said, as against what the abstract promised. Take exactly three notes per talk: the claim, one quotable phrase, and one thing you can build on by name. 5. At the last break, run a 20-30 minute saturation pass: cut the CONTEXT blocks that were covered, promote depth material from the appendix, and check that the argument still stands without the cut blocks (if it does not, the block was BRIDGE, not CONTEXT — keep a one-sentence version). 6. Write the acknowledgement sentence: one sentence, in the opening, naming what you will not repeat and why. This converts the cut from an omission into a promise. 7. Add one or two callbacks by name to earlier speakers — 'jak pokazał Michał o jedenastej' — placed where they support your argument, not as flattery. 8. Re-time after cutting: a cut deck runs faster than its slide count suggests because the cut blocks were also the ones you knew coldest. Re-check against the 85% target. 9. Keep the cut material reachable — appendix slides after the close — in case a Q&A question asks for it. 10. Do not change your declared level or your abstract's promise; the Abstract Attorney antipattern exists because someone in the room chose your session on the strength of that text.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

A multi-track or single-track conference where a theme dominates the day (agents in 2026, microservices in 2017, LLMs in 2024); any slot after the third talk on your subject; a late slot where the audience has been in the room all day; and internal formats where the topic has already been presented by others in the same quarter. It is not needed at a meetup with a mixed agenda, in a client presentation, or where you are the first or only speaker on the topic — and it is actively wrong at an introductory-level event where repetition is the point.

### Evidence


**myth_status**

confirmed as practice, unevidenced as a claim — the practice is near-universally recommended and low-risk, but any statement about how much attention it buys would be invented. Do not attach numbers to it.


**contested_claims**

1) 'Repetition is fine, the audience needs reinforcement.' True in teaching, where learners are novices and repetition is spaced deliberately; false in a conference track, where the repetition is unplanned, dense and undifferentiated. Do not import the spacing literature to defend an unedited deck. 2) 'Just change the abstract's framing on the day.' Presentation Patterns' Abstract Attorney names the audience member who holds you to the printed description — cutting content is fine, but silently switching topic is a broken contract with the people who chose the session. 3) 'Cut your level up because they have already heard the basics.' This is where Tower of Babble starts: saturation on one topic does not make the room expert in your subtopic, and jargon density that assumes it will lose the half of the room that attended different tracks. 4) 'Being the fifth talk on a topic is bad luck.' It is a position with its own advantages — shared vocabulary already established, an audience primed with questions, and four talks' worth of claims available to build on or contradict.


**key_sources**

1) Presentation Patterns glossary (Ford, McCullough, Schutta, 2012) — Abstract Attorney (antipattern): 'Someone who takes the description from the conference brochure way too seriously'; Tower of Babble (antipattern): presenters use arcane jargon irrespective of the audience's level. The two guardrails on how far you may re-cut. 2) Conference-speaking guidance on attending earlier sessions: the only way to be sure your talk does not repeat or collide with an earlier speaker is to listen to them, and referencing them by name creates a link with the room — also the standard warning that jokes, quotes and examples fall flat once already used. 3) Morling, G., 'Ten Tips to Make Conference Talks Suck Less' — open with a mission statement framed as the audience's problem, three learnings from the listener's perspective, and match the talk to who is actually in the room. 4) Berkun, S., 'Confessions of a Public Speaker' (2009) — name the room's real state (late, tired, ready to leave) rather than performing against it.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

1) Overcutting: you can delete so much shared context that the talk becomes unreachable for the third of the room that arrived at 14:30 for your session only — in a single-track conference this risk is low, in a multi-track one it is real and routinely underestimated. 2) The saturation you perceive may not be the saturation the room experienced: people attended different tracks, checked email, arrived late; your sample of the day is not theirs. 3) A last-break re-cut introduces exactly the kind of unrehearsed change that damages timing and fluency — the deck you deliver is then not the deck you rehearsed. Pre-planned swap lists are the mitigation, ad-hoc surgery is the failure mode. 4) Repeated cutting toward depth can produce a talk that only the ten most advanced people in the room can follow, which is a worse outcome than mild redundancy. 5) Naming other speakers can misfire if you misrepresent what they said — a public correction from the front row is expensive.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

Three touchpoints. (a) 0:50-1:05 in the opening: the one-sentence acknowledgement — 'Nie będę tłumaczył, czym jest agent; cztery osoby zrobiły to dzisiaj lepiej ode mnie. Ja pokażę, co się dzieje po wdrożeniu.' This is the single highest-value use of eight seconds in the whole deck. (b) The cut itself: for BB4IT the candidates are the definition block, the market/landscape slide, the tool-comparison slide and any 'why agents matter' framing — plausibly 4-6 minutes, which is roughly the size of the recurring overrun. (c) One or two callbacks by name in the middle blocks, used as evidence rather than courtesy: 'Michał pokazał rano, jak to działa na jednym zadaniu — pokażę, co się dzieje przy jedenastu tysiącach.' The reclaimed minutes go to the recorded demo and to the failure-mode block, not to new topics.


**audience_change**

The room stops waiting to find out whether this is the fifth version of the same talk — a decision they otherwise make somewhere around minute four, by which point half of them have opened a laptop. Afterwards they can name the specific thing this talk added to the day, which is also what makes them recommend it, and they leave with the day's material connected rather than as five parallel versions of one topic.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

late_slot — directly and primarily; this is the exact BB4IT situation (last talk, 14:50-15:20, after nine talks of which four cover agents). timing — strongly indirect: it is the only item that reclaims 4-6 minutes from a 25-minute slot, and the material it deletes is exactly the material a speaker with 40 minutes of content should lose first. opening — supplies one of the four sentences of the scripted opening. reuse — mild: the cut CONTEXT blocks are the parts that work best as standalone carousel or post material afterwards, so cutting them from the talk does not waste them.


**minimal_2h_version**

Ninety minutes, mostly on the day. (1) 15 min — read the agenda and the abstracts of every earlier talk, and write one line each on what they will establish. (2) 45-60 min — sit in the one or two talks that overlap most, three notes each. (3) 20 min at the last break — cut the covered CONTEXT blocks, promote one depth block, write the acknowledgement sentence, note two callbacks with names. (4) 5 min — re-check the running time. If only twenty minutes exist and you attended nothing: ask two attendees in the corridor what the earlier agent talks covered, cut your definition block on their answer, and write the acknowledgement sentence from it. Second-hand information is enough for this decision.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

BB4IT, 2026-09-12. Pre-conference tagging of the agentic-AI deck: CORE — the recorded 40-minute runaway-agent demo, production failure taxonomy, cost numbers from eleven thousand runs, the guardrail architecture, the Monday-morning checklist. CONTEXT — what an agent is, the tool landscape (LangChain/CrewAI/Claude Code), why 2026 is the year of agents, a market-size chart. BRIDGE — one architecture diagram needed before the failure taxonomy. Swap list prepared in advance: if 'what is an agent' is covered → cut 2 min, extend the failure taxonomy with the two cases currently in the appendix; if the tool landscape is covered → cut 2 min, add the cost-per-task breakdown; if someone else shows a runaway-agent story → keep the demo but re-cut the framing to 'why our fix was wrong the first time'. At 12:30 the swap list says two of three conditions are met, so the pass takes eighteen minutes: two blocks out, one appendix block promoted, one BRIDGE diagram reduced to a single slide with a spoken one-liner, acknowledgement sentence written into the opening, and two callbacks noted with first names. Delivered length drops from a rehearsed 24:30 to about 21:00 — inside the 85% target with the demo intact.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

This is a judgement skill, trained by exposure rather than by drilling. (1) Build the CORE/CONTEXT/BRIDGE tagging into deck construction from the start, so every talk arrives pre-cut; after three or four talks the tagging becomes automatic and the day-of pass shrinks to fifteen minutes. (2) Attend other people's talks on your own topic deliberately, even when you are not speaking, and note which parts of your own material they just made worthless — this is the cheapest possible calibration. (3) Keep a running 'what everyone already says' list for your topic and refresh it quarterly; in fast-moving areas the saturated context changes every few months. (4) After each conference, write down what you cut and whether cutting it hurt — over a few events this produces a personal rule set more reliable than any general advice. (5) Practise the acknowledgement sentence as a genre: it is the same eight seconds every time, and it should be fluent.


**drill**

The saturation-delta drill, 20 minutes, run the week before the event. Input: your deck plus the conference agenda with abstracts. Action: (a) 8 min — tag every block CORE / CONTEXT / BRIDGE in the deck outline, in writing; (b) 7 min — for each earlier talk, write the one sentence it will establish, and mark which of your CONTEXT blocks it kills; (c) 5 min — write the swap list: for every kill, name the replacement block and where it comes from. Observable output: a one-page swap list with named cut and replacement blocks, and a draft acknowledgement sentence. Test of success: at the conference, the day-of pass consists only of ticking conditions on this page — no new decisions.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

One block (roughly three minutes of material) — the unit at which cutting is possible without breaking the argument. The acknowledgement sentence is a second, much smaller unit trained separately as part of the opening.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

Preparation: 20-30 minutes at deck-build time for tagging and the swap list. On the day: 60-90 minutes attending overlapping talks (which is time you would likely spend at the conference anyway) plus 20-30 minutes for the pass. Marginal cost after three or four conferences: near zero, because the tagging becomes part of writing the deck.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

Same-day: hallway conversations after the talk — if people describe your talk as 'the one about what breaks' rather than 'another agent talk', the framing worked. In-room: the reaction to the acknowledgement sentence, which in a saturated room usually gets an audible laugh or nod and is the fastest confirmation available. Delayed: post-talk feedback that mentions 'nie powtarzał tego, co inni', and the ratio of questions about your specific material versus general topic questions — general questions mean the differentiation did not land.


**measurable_kpi**

(a) Minutes cut on the day, versus the pre-planned swap list — target: every cut was pre-planned, zero improvised. (b) Delivered duration against the 85% target after cutting. (c) Number of earlier talks attended: target two or more. (d) Number of named callbacks used: target one or two, not zero and not five. (e) Q&A composition: share of questions about your specific material rather than about the general topic.

### Online and recorded


**online_variant**

Saturation is weaker and harder to read online: attendees of a webinar have not sat through the earlier talks, so the aggressive cut is usually wrong. What replaces it is series-saturation — the same audience has seen your and others' AI webinars for a year, so the redundant material is not the day's earlier talks but the genre's standard content ('co to jest agent' has been saturated online since 2024). The acknowledgement move still works, retargeted: 'Zakładam, że definicje macie z dziesięciu innych webinarów.' Additionally, you can ask directly in chat what the audience already knows and cut live — the only format where real-time saturation measurement is available.


**recorded_variant**

This item has a genuine conflict with the recording. Cuts and callbacks are optimised for the room that sat through the earlier talks; the YouTube viewer has none of that context, so a callback by first name ('jak pokazał Michał') is meaningless later, and a cut definition block leaves the remote viewer without a foothold. Mitigations: phrase callbacks self-containedly ('w porannej prelekcji o agentach w CI pokazano X'), and put the cut CONTEXT material into the video description or a linked resource rather than back into the talk. Also, the acknowledgement sentence dates the recording — that is acceptable and even useful, but keep it out of the clip you intend to reuse.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

1) The apology frame: 'Wiem, że słyszeliście to już dzisiaj cztery razy, ale…' — naming the saturation and then delivering the repeated content anyway, which is worse than either option alone. 2) Panic re-cut: rewriting the talk at the last break into something never rehearsed, driven by the fear of repetition rather than by a prepared list. 3) Sniping: differentiating by contradicting an earlier speaker for effect rather than on evidence — the room protects the speaker who is not on stage to answer. 4) Topic drift: cutting so much that the delivered talk no longer matches the abstract people chose (Abstract Attorney). 5) Level inflation: treating topic saturation as expertise and jumping to jargon (Tower of Babble). 6) Callback flattery: three name-checks that support nothing, which reads as networking rather than as argument.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Deciding what was covered from the abstracts instead of from the talks — abstracts systematically overstate. Cutting BRIDGE material by accident and leaving the argument with a hole nobody notices until the middle of the talk. Cutting slides but not the words, so the talk runs the same length with fewer visuals. Forgetting to re-time after the cut. Making the acknowledgement sentence too long: three sentences of positioning is defensiveness, one sentence is confidence. Assuming everyone in the room attended the same talks. Leaving the cut slides in the deck body rather than moving them behind the close, so they reappear on screen at the wrong moment.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

An introductory-track session where establishing shared vocabulary is the actual assignment. A multi-track conference where your session is the only one on the topic in its slot and the audience self-selected into it because they missed the others. A client presentation, where nothing has saturated them and cutting the definitions leaves them lost. A workshop, where repetition of the framing is what makes the exercises land. Any situation where you did not attend and cannot ask — improvising a cut on assumed saturation can delete exactly the block the room needed.


**fallback_if_it_fails**

If the acknowledgement sentence gets no reaction, do not repeat or expand it — advance to the demo immediately; in a saturated room, showing is the recovery move for a framing that did not land. If mid-talk you realise you cut too much and the room looks lost (blank faces at a term you assumed shared), spend one sentence, not a slide: 'Jedno zdanie dla tych, którzy byli rano na innym torze:' and continue — the appendix slides exist for the same purpose if a question demands them. If a Q&A question asks for the cut CONTEXT, answer it in thirty seconds and offer the appendix slide; that is the moment cutting is vindicated, not the moment it fails. If you discover during the earlier talk that someone has delivered essentially your talk, do not re-write — switch the frame to explicit contrast ('słyszeliście już wersję, która działa; ja pokażę, gdzie ta wersja pęka'), which is the strongest available position and requires no new slides.


**works_signal**

Positive: a laugh or a visible nod at the acknowledgement sentence; laptops closing rather than opening in minutes 2-4; in Q&A, questions about your specific numbers or architecture rather than about the topic in general; hallway comments that position your talk relative to the others. Negative: at minute four, several people checking the agenda on their phones (the classic 'is this the same talk?' gesture); questions in Q&A that you already answered, indicating the room stopped tracking; a flat reception for the callback, which usually means you attributed something to the wrong speaker.


**dependencies_conflicts**

Prerequisites: the conference agenda and, ideally, attendance at the earlier talks; the expansion-joints item, because cutting cleanly requires that the deck was built with designed cut points — without them this item degenerates into rushing (the Shortchanged antipattern). Feeds: the scripted opening (one sentence), the cold-open item (family selection depends on what the earlier talks did), and the on-stage time-control item (the cut list here is the same cut list used live). Conflicts: (a) with the abstract as a contract — the cut must not change what was promised; (b) with the recording, which has no access to the room's context; (c) with a fixed, pre-built PDF handed to the organiser before the day, since cuts made at the last break will not be reflected in the file the audience receives; (d) with rehearsal integrity — every cut made on the day is material that will not be delivered exactly as practised.

### Tooling


**tool_support**

The conference agenda page and abstracts (the primary input). A notebook or phone notes for three-notes-per-talk. The deck outline with CORE/CONTEXT/BRIDGE tags — a plain markdown list is enough and works better than slides for the decision. A one-page printed swap list, because it has to be usable in a corridor with fifteen minutes left. An LLM can help beforehand by reading the abstracts and proposing which of your blocks each earlier talk makes redundant, but it cannot know what was actually said in the room, so its output is a hypothesis to be checked, not a decision.


**marp_implementation**

Build cuttability into the markdown rather than into a second deck. Give optional slides a marker in a comment (<!-- CUT-IF: definitions-covered -->) and keep the swap-list condition in the same comment, so a search for 'CUT-IF' produces the whole cut list. Use a horizontal rule per slide as usual, and place all cut candidates at block boundaries so removing them means deleting a contiguous markdown range, not surgery in the middle of a block. Keep the promoted depth slides in the same file after the close under a '# Appendix' section, with <!-- _paginate: false -->, so they exist in the exported PDF but are never reached during a linear run.


**survives_pdf_export**

partially — the framing itself is spoken and survives everything, but the mechanics do not translate to a static PDF: a cut made at the last break is not reflected in a PDF already sent to the organiser, and appendix slides are physically present in that file, so anyone reading it sees material you deliberately did not deliver. If the organiser publishes the deck, either send the file after the talk or accept that the exported PDF is the uncut version.

### Effort and payoff


**prep_effort**  
<sub>low | medium | high — one-off setup cost</sub>

medium — low in preparation (20-30 minutes of tagging) but it consumes conference-day attention: attending earlier talks and running a pass at the last break. That day-of cost is what most speakers skip, and it is the part that actually produces the result.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Immediate and specific to the saturated event: the room's first-four-minutes verdict flips from 'we've heard this' to 'this is the different one', and 4-6 minutes are returned to the time budget. Longer term it changes how decks are built — tagging blocks by ownership makes every future talk cuttable, which is the same capability the expansion-joints item needs.


**needs_organiser_agreement**

no for cutting your own content. Yes for two things: the confirmed final running order and the abstracts (ask for them, or take them off the agenda page), and — if you plan to name other speakers — a check that the running order did not change, since crediting a talk that was moved or cancelled is an avoidable error. Also confirm whether the organiser wants the deck before or after the talk, which decides whether your PDF shows the uncut version.


**priority**

high for this specific event — it is the direct answer to the late_slot gap, it is the only item that returns time rather than spending it, and its preparation can be done in the four days before 2026-09-12. Medium as a standing practice, since it only activates when the topic is genuinely saturated.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

- https://presentationpatterns.com/glossary/
- https://www.morling.dev/blog/ten-tips-make-conference-talks-suck-less/
- https://www.destination-innovation.com/as-a-speaker-should-you-stay-for-the-whole-conference-or-just-your-session/
- https://cs.stanford.edu/people/widom/conference-talks.html
- https://www.nateliason.com/notes/confessions-public-speaker-scott-berkun
- https://simon.peytonjones.org/great-research-talk/
- https://sphericalcowconsulting.com/2026/04/21/a-practical-guide-for-conference-speakers/
- https://iris.eecs.berkeley.edu/~jrs/speaking.html

### Not established by this research

- `origin_author`
- `origin_year`
- `evidence_level`
- `application_pl_talk`
- `pl_language_notes`
- `time_budget_min`


---

## LLM as red team and rehearsal partner

> Use a model to manufacture the 15 to 20 hardest questions with each asker's motive and a 60-second ideal answer, and to analyse your rehearsal transcript against stated criteria — while treating everything it says about how good you were as unreliable, because the same model is measurably biased toward telling you it was fine.

### What it is

- **category** — practice


**talk_moment**

before arriving — question generation 5 to 7 days out, transcript analysis after each recorded rehearsal, final answer drill the day before; the product of it lands in Q&A and, for the delivery metrics, in the middle blocks

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

Split the tool into two jobs that have different reliability, because conflating them is what makes this item dangerous. Job one — generation — is where a model is genuinely strong: producing broad, plausible coverage of an adversarial space fast. Twenty questions from a model include several a single human reviewer would not have produced, because the model is sampling from an enormous distribution of how strangers argue rather than from one colleague's habits. It does not know what your room will ask, but coverage is the point: preparing 20 candidate questions makes any one real question more likely to be inside the prepared set, and preparing an answer converts a live reasoning task into a retrieval task, which is exactly the difference between the NCP4 answer that came out 'acceptable, not good' and one that comes out clean. Job two — evaluation — is where it is weak, and measurably so. Instruction-tuned models systematically match the user's beliefs and protect the user's self-image; the ELEPHANT work puts social sycophancy at roughly 45 percentage points above human baseline on self-image preservation, and 'Challenging the Evaluator' (EMNLP Findings 2025) shows models flip their judgements under a user's follow-up rebuttal even when they judge the same two arguments correctly when shown them simultaneously. That single finding has a direct operational consequence: ask for a simultaneous comparison of two versions, never a sequential 'what about now?' loop. Speech-measurement tools sit outside both jobs — they count surface features (words per minute, filler rate, pause length) reliably and mean nothing on their own, which the expert study makes explicit.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Assemble the input: the abstract, the slide markdown, and — for the strongest results — a transcript of an actual rehearsal, not a summary. 2. Generate questions before showing the model any of your answers, so it is not anchored on your framing. Prompt shape: role ('you are three specific attendees: a sceptical staff engineer, a security lead, and a CTO who has already tried this and failed'), context (audience, event, slot, the abstract), task ('list 20 questions, hardest first'), and required output columns — question as it would actually be asked out loud, the asker's real motive underneath it, damage if answered badly (1-5), likelihood (1-5), and the trap in the question. 3. Force adversarial framing explicitly; a model asked for 'questions the audience might have' returns friendly comprehension questions, which is the failure mode of this whole technique. Ask for the questions that would embarrass you. 4. Rank by damage times likelihood and take the top 8. 5. For each, draft your own answer in 60 seconds of speech (roughly 130-150 Polish words), then ask the model for the strongest follow-up to your answer — its second question, not its first, is where the value is. 6. Ask separately for the strongest counter-case to your talk's thesis; if it produces an argument you cannot answer, that is a content problem, not a Q&A problem. 7. For evaluation, use a fresh session with no history, paste two versions side by side (your opening A and opening B) and ask which is stronger against named criteria; do not push back and re-ask. 8. Run the rehearsal transcript through a structured critique with explicit criteria — 'list every sentence where the claim exceeds the evidence', 'mark each block boundary and quote the transition sentence', 'flag every unexplained English term' — rather than 'give me feedback'. 9. Measure delivery with a measurement tool (transcription plus counting, or Yoodli/Poised class tools) and treat the numbers as inputs to your judgement, not verdicts. 10. Verify every fact the model produced that you intend to say on stage — dates, figures, product limits. 11. Write the top 8 questions and answers onto one card, and drill the top 3 aloud.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Highest value when the talk makes a claim someone in the room has a professional reason to resist — a security lead hearing about cloud LLMs, an architect hearing that agents are production-ready, a CTO who has already spent money failing at this. Also strong for a first delivery of new material, where you have no empirical question history, and for a talk to an audience you have not faced before. It is the cheapest available red team when no competent colleague is free, and it is available at 23:00 the night before, which no colleague is. Use the measurement tools when you have a specific delivery number you want to move (filler rate, pace) and a baseline recording to move it from. Do not reach for it when the real problem is that the talk is too long or the argument does not hold — it will happily help you polish a talk that should be cut.

### Evidence


**evidence_level**

split by claim, and the split matters. (a) That models are unreliable evaluators of your work: controlled and benchmark evidence, 2025, multiple independent groups — ELEPHANT (arXiv:2505.13995) on social sycophancy, 'Challenging the Evaluator' (arXiv:2509.16533, EMNLP Findings 2025) on evaluation flips under user rebuttal, plus multi-turn sycophancy benchmarks; the consistent finding is that alignment tuning amplifies sycophancy. (b) That expert speaking coaches find current AI feedback tools limited in specific, nameable ways: qualitative study, 16 semi-structured interviews plus two design workshops with 7 coaches, July 2025 — strong for what it is, not a measurement of outcomes. (c) That automated delivery feedback improves measurable behaviours: an experimental finding for Presentation Trainer (significant reduction in flagged mistakes after five training sessions) and a body of HCI prototypes; the commercial tools have no published randomised evidence of effectiveness that this search surfaced, despite large adoption claims. (d) That LLM-generated question banks improve real Q&A performance: no studies at all — practitioner claim, and it should be labelled as one.


**myth_status**

contested. The generation use is sound practice with a thin evidence base; the evaluation use is actively contradicted by 2025 sycophancy research, and the popular framing — 'an AI speech coach that gives you objective feedback' — is the part that fails. The marketing claim of objectivity survives only for surface metrics (words per minute, filler counts), and the expert study argues those metrics are close to meaningless without the communicative context the tools do not capture.


**contested_claims**

(1) 'AI gives objective feedback on your speaking.' It gives objective counts of some surface features and subjective, user-flattering prose about everything else. (2) 'Fewer filler words means a better talk.' The coaches interviewed reject the isolated metric directly — one puts it as 'speaking speed doesn't mean much in itself' — and note that systems treat pace and fillers as isolated defects rather than components of energy; a talk optimised to zero fillers and a target wpm can be worse, because deliberate silence carries meaning that the systems score as a fault ('we choose to be silent because there is meaning in silence, and AI-feedback does not say this'). (3) 'It will tell you the questions you will get.' It generates a plausible distribution, not a prediction about this room; treat the output as coverage, not foresight. (4) 'The model can tell you if your talk is good.' The measured sycophancy findings say otherwise, and it is worse in exactly the mode people use — conversational follow-up. (5) 'AI coaching helps with speaking anxiety.' The expert study found that no commercial tool addresses anxiety, which all 16 coaches named as foundational. (6) Implicit in tool marketing: that standardised feedback is desirable — coaches warned it risks a 'robotic style' and that 'speakers will all become the same'.


**key_sources**

Barbulescu et al. (2025), 'Probing Experts' Perspectives on AI-Assisted Public Speaking Training', arXiv:2507.07930 — 16 coach interviews plus 2 design workshops on PolymnIA, VocaCoach, Poised, Orai and Yoodli; specific findings: no commercial tool addresses anxiety; extensive automated feedback causes cognitive load and coaches recommend 2-3 comments maximum; systems never ask for the speech's goal or audience, producing 'flat' performances; gesture-frequency and pause-length metrics give 'detailed feedback but with limited value'; the genuine value is neutral, unlimited repetition without emotional judgement. Cheng et al. (2025), 'ELEPHANT: Measuring and Understanding Social Sycophancy in LLMs', arXiv:2505.13995 — models preserve the user's self-image roughly 45 percentage points more than humans. 'Challenging the Evaluator: LLM Sycophancy Under User Rebuttal', arXiv:2509.16533, EMNLP 2025 Findings — models endorse a user's counterargument when it arrives as a conversational follow-up while judging the same pair correctly when both are presented simultaneously, and are more persuadable when the rebuttal contains detailed but wrong reasoning; this is the finding that dictates the simultaneous-comparison protocol. Schneider et al., Presentation Trainer (ACM UbiComp 2015 lineage) — automated corrective feedback on posture, volume, pauses and fillers reduced flagged mistakes over five training sessions.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

(1) Sycophancy is not a quirk to work around but the default behaviour of the tool in the exact interaction pattern people use for rehearsal — conversational, iterative, with the user pushing back. Every protective measure here (fresh sessions, simultaneous comparison, adversarial roles, no rebuttal loops) is friction, and friction gets dropped at 23:00 the night before, which is when this tool is most used. (2) Hallucinated specifics are a serious hazard in this particular application: an invented benchmark number inside a drafted 60-second answer, rehearsed three times, becomes something you will say confidently on stage to a technical audience — and the answer will be recorded. (3) The model has no access to the two things that decide a Q&A: the room's mood and the asker's face. It cannot tell you that the question was really an objection to a previous speaker, or that the room is 20 minutes past caring. (4) Confidentiality: preparing a talk with a model means pasting in client context, architecture and sometimes data — and for this speaker the sharpest audience question already on record is about exactly that risk. Rehearsing the answer to 'do you send sensitive company data to cloud LLMs?' by sending sensitive company data to a cloud LLM is a real credibility exposure if you cannot describe your own policy. (5) Over-preparation risk: a bank of 20 memorised answers can produce a speaker who answers the prepared question rather than the one that was asked. (6) The delivery-measurement tools are English-centric, so their headline metrics may degrade on Polish audio.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

Zero stage minutes; it changes what happens in the 5 minutes of Q&A and quietly improves the 25. Concretely for BB4IT: run the generation pass 5 days out against the abstract and slides.md, rank, and prepare 8 answers of 60 seconds each — 8 answers is more than 5 minutes of Q&A can consume, which is the point: you are buying coverage, not filling time. Put the top 3 as appendix slides after the close (one diagram each), so a hard question is answered with an artefact rather than with talk. Second use inside the 25: after the camera rehearsal, run the transcript through a criteria-based critique to catch claims that outrun their evidence and English terms used without a Polish gloss — both are cheap fixes with high credibility value in front of engineers and architects. Third: ask for a shortened variant of the talk, which produces a first draft of the on-stage cut list in two minutes.


**time_budget_min**

0 minutes of the 25-minute slot. Downstream effect on the 5-minute Q&A: a prepared answer runs 45-75 seconds against 2-3 minutes for an improvised one, so the same 5 minutes takes 4 or 5 questions instead of 2. Preparation cost off stage: 60-90 minutes for a full pass.


**audience_change**

In the room, the visible change is in Q&A: the answer to the hardest question is specific, bounded and finished, and it usually comes with a concrete example or an appendix slide rather than a hedge. That is a disproportionately large credibility signal for an audience of engineers and architects, because Q&A is the only unscripted part of the talk and therefore the part they read as evidence of whether you actually do this work. Secondary: fewer unexplained terms and fewer unsupported claims in the body of the talk, because the transcript pass caught them.


**application_pl_talk**

Two things must be done in Polish, not translated later. First, generate the questions in Polish and instruct the model to phrase them as a Polish attendee would say them out loud, including the mixed register Polish engineers actually use ('czy to nie jest przypadkiem tak, że przy tym waszym agencie…'). A question translated from polished English arrives in a different shape than the one you will hear. Second, draft the 60-second answers in Polish. An answer composed in English and translated live costs 5 to 10 seconds of search time per sentence and is precisely where a technical speaker starts producing calques under pressure. Third, the model is a good glossary partner for the bilingual layer: ask it to list every English term in slides.md with the Polish sentence you will use around it, and keep that list as the deck's glossary — this is the highest-value Polish-specific use of the tool. Caution on measurement: Polish transcription with a large Whisper model is usable, but the filler-word detection in English-tuned commercial coaching tools does not target Polish fillers ('yyy', 'eee', 'znaczy', 'prawda?', 'tak?', 'no i'), so for a Polish talk count them yourself from the transcript with a simple search rather than trusting a tool's filler score.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

qa — direct and primary, and this is the item that closes the specific documented failure: the NCP4 retrospective records no prepared answer to a predictable hard question about sending sensitive company data to cloud LLMs, and an answer that came out 'acceptable, not good'. That question is exactly the kind a red-team pass produces in the first five, with the motive labelled ('the asker is a security lead who has to sign off on this and is looking for a reason to say no') and a 60-second answer drafted. reuse — direct and underrated: the rehearsal transcript is the raw material for the carousel, the clips and the post, so one pass produces both the Q&A bank and the second life of the talk. opening — indirect but useful: ten hook variants generated and then judged by you, or two variants compared simultaneously by the model, is faster than staring at a blank slide, provided the model never picks the winner alone. timing — weak and partly misleading: it can estimate duration from word count and propose cuts, but it cannot judge pace and will confidently tell you a 40-minute deck is fine. late_slot — modest: useful for generating state-change ideas and a shortened variant for a tired room. demo_risk — modest: good at generating a pre-flight failure checklist for the recorded demo, worthless at testing it.


**minimal_2h_version**

0:00-0:20 generation: paste the abstract and slides.md, prompt for 20 adversarial questions with motive, damage, likelihood and the trap, phrased in Polish as they would be asked aloud. 0:20-0:25 rank and take the top 6. 0:25-1:00 draft your own 60-second answer to each — yours, not the model's, then ask only for the strongest follow-up to each. 1:00-1:15 verify every number and factual claim in those answers; delete anything you cannot verify. 1:15-1:30 write the six questions and answer skeletons onto one card, plus the one-line honest fallback ('Nie wiem — sprawdzę i odpiszę'). 1:30-1:50 drill the top 3 aloud, standing, twice each, with a stopwatch; target under 60 seconds each. 1:50-2:00 if a rehearsal transcript already exists, one criteria-based pass over it for claims that exceed their evidence. Skipped knowingly: all delivery measurement, all evaluative use of the model, and any appendix slides.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

Agentic-AI talk, generation prompt: 'You are three attendees at a Polish IT conference, in the last slot of the day, after four other talks about agents: a security lead at a bank, a staff engineer who prototyped agents last year and abandoned them, and a CTO paying the bills. Here is my abstract and my slides. Write 20 questions in Polish, phrased as they would actually be said out loud, hardest first. For each: the asker's real motive, what makes it a trap, damage 1-5 if answered badly, likelihood 1-5.' Expected top of the list, and the one that already happened once: 'Wysyłacie dane klienta do OpenAI/Anthropic — jak to godzicie z RODO i z umowami NDA?' Motive: this person must sign off on it and needs a reason it is safe or a reason to refuse. Trap: any answer that starts with reassurance instead of architecture loses the room. Prepared 60-second answer, structured as a claim, a mechanism and a boundary: what actually leaves the perimeter, what does not, which layer enforces it, what the data-processing terms and retention settings say, one sentence on the deployment where a local model was used instead, and an explicit statement of the case where you would refuse the project. Follow-up the model produces next, which is the real value: 'Dobrze, ale co z logami i śladami z narzędzi agenta — to też przechodzi przez model?' — a sharper question than the first, and one worth an appendix slide.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

The multi-week skill is not prompting; it is maintaining a durable question bank and a calibrated sense of what the tool is good for. (1) Keep one bank across talks, organised by claim rather than by talk, since the same claims recur — every talk that touches cloud LLMs regenerates the same data question. After a few talks the bank is mostly written and each new talk adds three or four. (2) After every talk, add the questions that were actually asked, and mark which ones the model had predicted. That hit rate is the only real calibration of this technique, and it takes four or five talks to establish. (3) Practise the two-version simultaneous comparison as your default interaction shape, so the sycophancy-resistant pattern is habit rather than a rule you remember. (4) Build a personal baseline of delivery numbers from your own Polish recordings — words per minute, filler rate — so that a tool's number can be compared against you rather than against an English-language norm. (5) Periodically re-read the limits: the technique degrades as trust grows, because trust is what removes the friction that made it safe.


**drill**

Input: the current abstract and slides.md, and 20 minutes. Action: in a fresh session, generate 20 adversarial questions with motive and trap; pick the three with the highest damage-times-likelihood; then, without writing anything down, stand up and answer each aloud into a phone recording, once, with a stopwatch running. Then ask the model — in a separate fresh session, and pasting the transcript of your answer alongside the question — for the strongest follow-up to each answer, and answer the follow-ups aloud too. Observable output: six recorded answers, six timings, and a written note of which follow-up you could not answer. Pass criteria: each first answer is under 75 seconds and ends deliberately rather than trailing off; at least one follow-up exposes a genuine gap, which becomes a slide or a decision. Note the failure mode you are checking for: if the model's follow-ups all feel easy, your prompt was not adversarial enough — re-run it demanding the questions that would embarrass you.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

One question with its 60-second answer. It is a well-shaped unit: short enough to drill 5 times in 10 minutes, judged against a clear criterion (under 60 seconds, one claim, one piece of evidence, one boundary), and directly transferable to the stage. The secondary unit is one transcript pass against one named criterion — not 'analyse my talk' but 'list every claim that exceeds its evidence'.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

First full pass 60-90 minutes: 20 minutes generation and ranking, 35 minutes drafting your own answers, 15 minutes fact-verification, 10 minutes drilling the top three. Subsequent talks 20-30 minutes because the bank is reused. Transcript analysis 10-15 minutes per rehearsal recording, plus the transcription itself. Delivery-measurement tooling adds a setup cost of an hour once and 5 minutes per run afterwards, and is the most optional part of the whole item.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

Reliable loops: the stopwatch on each drilled answer; the fact-check pass, which is binary; the count of Polish fillers found by searching the transcript yourself; and, across talks, the hit rate of predicted versus actually-asked questions. Unreliable loop, to be treated as generative rather than evaluative: the model's opinion of your answer or your talk. The one human loop that cannot be replaced is the peer dry run — the expert study's point that these systems never ask what the speech is for, and therefore cannot judge whether it achieved it, is precisely what a colleague does in 45 minutes.


**measurable_kpi**

(a) Question-bank hit rate: fraction of the questions actually asked that were in the prepared top 8 — the headline number, target above 50 percent after two or three talks of calibration. (b) Answer length in seconds, target 45-75, measured on the drill recording. (c) Number of prepared questions with a supporting appendix slide, target 3. (d) Claims flagged as exceeding their evidence in the transcript pass, and how many were fixed. (e) Polish filler words per minute counted from your own transcript, tracked across rehearsals against your own baseline rather than an English norm. (f) Fabricated facts caught in verification — if this is ever zero across several passes, you are probably not checking.

### Online and recorded


**online_variant**

Better fit than in the room, in three ways. Questions arrive in chat as text, so they can be pasted straight into a prepared bank, and a second screen makes a prepared answer card usable without hiding it. There is time to read while someone else talks. And the transcript is generated automatically by most webinar platforms, which removes the main friction of the transcript-analysis loop. Two cautions: pasting live audience questions into a cloud model during a session is a confidentiality decision you should make before the webinar, not during it; and the temptation to answer from a screen produces a visible drop in eye contact that the room version does not suffer. For the Pionierzy AI format specifically, prepare the top 8 as text snippets, since a written chat answer can be pasted and reused.


**recorded_variant**

Two consequences pulling in opposite directions. Risk: a fabricated number spoken in a recorded Q&A is permanent and searchable, so the verification step stops being hygiene and becomes mandatory. Also, audience questions rarely reach the recording's audio track, so a prepared answer that begins by paraphrasing the question is doubly valuable — it repairs the recording as well as the room, and it is easy to make habitual precisely because the answer is prepared. Benefit: the recording plus the model is the cheapest content pipeline available — transcript in, chapter markers, a description, three clip candidates and a carousel outline out — which addresses the reuse gap directly and is work that currently happens manually or not at all. Do the extraction from the event recording within a day, while you still remember what the room reacted to, because that is the signal the model does not have.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

(1) Asking 'is my talk good?' and believing the answer — the single most common use and the one the 2025 sycophancy findings most directly invalidate. (2) The rebuttal loop: disagreeing with a critique until the model agrees with you, then treating the agreement as validation; the EMNLP result shows models flip under exactly this pattern. (3) Using the model's drafted answers verbatim instead of your own, which produces fluent, generic answers that a technical audience recognises immediately as not-yours — and which fail on the follow-up, because you never built the reasoning. (4) Optimising the metrics the tools report: driving filler count to zero and pace to a target number, producing the 'robotic style' and sameness the coaches warned about, and eliminating the deliberate silence that carries meaning. (5) Treating generated questions as predictions of what the room will ask, then being thrown when the real question is different. (6) Feeding client-confidential context into a cloud model while preparing the talk in which you claim to handle client data carefully. (7) Skipping verification because the answer sounded authoritative — the most expensive antipattern in a technical Q&A. (8) Generating 40 questions and preparing none of the answers.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Prompting too politely, so the questions come back friendly and useless; the fix is an explicit instruction to produce the questions that would embarrass you, with roles and motives. Showing the model your answers first, which anchors the questions on your framing and removes the blind spots you wanted it to find. Running everything in one long session, so later outputs are contaminated by earlier agreement. Preparing answers as text and never saying them aloud, so the 60-second answer turns out to be 100 seconds of speech. Forgetting to prepare the follow-up — the second question is where the damage happens. Not marking motives, which is what turns a question list into a strategy. Trusting an English-tuned filler detector on Polish audio. Believing an estimated duration from word count instead of a stopwatch. Never updating the bank after the talk, which throws away the only calibration data the technique generates.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

When the material is confidential in a way that makes pasting it into a hosted model a policy breach — a client deck under NDA, unpublished architecture, real customer data; use a local model or work from an abstracted version, and note that this constraint is itself talk material. When a competent human reviewer is available and time is scarce: the peer rung answers the one question the model cannot ('did this land, and did it achieve what you wanted?'). When the failure you are trying to fix is delivery-level anxiety — no commercial tool addresses it and the study's 16 coaches all named it as foundational. When the talk's problem is length or structure, where the model will cheerfully help you improve the wrong thing. And in the last hour before the talk, when generating new hard questions creates anxiety without leaving time to prepare answers — after a certain point, close the laptop.


**fallback_if_it_fails**

On stage, when the question is one the bank did not contain: paraphrase it aloud, which buys 5 seconds and repairs the recording, answer the part you can answer with a concrete example, name the boundary of what you know, and offer the follow-up — 'Nie wiem. Sprawdzę i odpiszę, złapmy się po prelekcji.' A clean 'I don't know' plus a specific commitment is a complete answer and reads as more credible to engineers than a fluent guess. If a prepared answer starts coming out as recitation and you can see it landing badly, drop the script and answer the question that was actually asked — the prepared version's job was to make you fluent, not to be performed. If you realise mid-answer that a number you rehearsed came from the model and you never verified it, do not say it; say 'z pamięci nie podam liczby, dopytajcie mnie po prelekcji'. In preparation, if the generated questions are all soft, the fix is the prompt, not the tool; if the model's critique of your transcript is uniformly positive, that is a sycophancy signal, not a result — switch to simultaneous comparison of two versions or go to a human.


**works_signal**

In preparation: at least one generated question makes you uncomfortable and cannot be answered from what is currently in the deck — that is the technique working. The follow-up question is harder than the first. The fact-check finds something. On stage: the hard question arrives and you recognise it, your answer runs under a minute and ends deliberately, and the asker nods rather than following up. Room-level: several hands go up in Q&A after the first answer lands well, because a confident, bounded answer signals that questions are welcome. Failure signals: every generated question feels easy (bad prompt); the model praises everything (sycophancy, distrust the session); your answers run past 90 seconds in the drill (they are essays, not answers); in the room, the asker restates their question after your answer, which means you answered the prepared version rather than theirs.


**dependencies_conflicts**

Prerequisites: a written abstract and a markdown deck, which this speaker's Marp pipeline already provides in exactly the form a model consumes best; a rehearsal recording and a transcript for the analysis half. Feeds directly: the red-team question bank, the answer protocol and paraphrase, hostile-question handling, seeding the first question, and — via the transcript — talk-to-content reuse. Substitutes partially for the peer dry run, and only partially: it replaces the question generation, never the comprehension check. Conflicts: (a) the tool versus its own subject matter — preparing a talk about safe use of LLMs by pasting client context into a cloud LLM, which is a live contradiction for this speaker and needs a stated personal policy before it is a stage-worthy answer; (b) prepared answers versus reading the room — an over-prepared bank pushes toward answering the rehearsed question; (c) model-suggested cuts versus the timed dry run — the stopwatch is authoritative and the model's duration estimates are not; (d) delivery-metric optimisation versus authentic style, which the expert study frames as the main risk of the whole tool category; (e) 2-3 comments maximum is the coaches' recommendation, while an LLM will return thirty — so an unfiltered critique creates cognitive load that makes the rehearsal worse.

### Tooling


**tool_support**

A frontier chat model for generation and structured critique (Claude, ChatGPT), used in fresh sessions per job. Whisper or an equivalent for Polish transcription of rehearsal recordings — the input that makes every downstream analysis better than working from memory. A plain text search over the transcript for Polish fillers, which beats English-tuned detectors here. Commercial speech coaches (Yoodli, Poised, Orai) for pace, filler and engagement metrics, with the caveats above and unknown Polish quality. A stopwatch for answer length. The deck source itself: because slides.md is markdown, the whole deck can be pasted as input with no export step, which is the single biggest practical advantage of this toolchain for this technique. A local model for anything confidential. One durable file — a question bank kept with the talk brief and updated after every talk.


**marp_implementation**

Three concrete moves. (1) Keep the question bank next to the deck as `qa.md` in the same folder, versioned with `slides.md`, so pasting the pair into a model is one operation and the bank survives from talk to talk. (2) Build the top three answers as appendix slides placed after the closing slide, each one diagram or three lines, marked `<!-- _paginate: false -->` and separated by a comment such as `<!-- APPENDIX: hard questions -->`; they never appear during the talk, they exist in every export including PDF, and jumping to one during Q&A is a strong move. (3) Store the prepared answer skeletons as presenter-note comments on the appendix slides, so the answer travels with its artefact. For transcript analysis, pass `slides.md` and the transcript together, since the model's critique is far sharper when it can align what you said with what was on screen at the time.


**survives_pdf_export**

yes for the parts that matter. Appendix slides after the close are ordinary slides and survive to PDF intact, which is exactly why they are the right container for a hard-question answer — they work on the organiser's copy and on a borrowed laptop. Presenter-note comments carrying answer skeletons do not survive to PDF, so the top three answers should also exist on the paper card. The question bank itself is off-deck and unaffected.

### Effort and payoff


**prep_effort**  
<sub>low | medium | high — one-off setup cost</sub>

medium for the first pass (60-90 minutes), low afterwards (20-30 minutes per talk) because the bank is reused and the deck is already markdown. The delivery-measurement side has a higher setup cost and the weakest evidence, and should be treated as optional.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Immediate on the Q&A gap: after one 90-minute pass you walk in with 8 prepared answers instead of 0, and the specific question that caught you at NCP4 has a considered answer with a boundary and an appendix slide. Fast on content quality: a criteria-based transcript pass reliably finds two or three claims that outrun their evidence, which is a credibility fix in front of architects. Slower and more speculative on delivery: the metric-driven tools have adoption but no published effectiveness evidence for this use, and the coaches interviewed doubt the isolated metrics — expect little there, and do not let it consume preparation time. Longer term, the compounding asset is the question bank, which after several talks makes Q&A preparation nearly free.


**needs_organiser_agreement**

no for preparation. Adjacent items to settle with the organiser because they change what the preparation is for: whether Q&A is moderated and who selects the questions, whether an anonymous channel (Slido, Mentimeter) will be used — which changes the question mix toward blunter and more honest — whether audience questions are picked up by the recording's audio, and whether appendix slides may stay on screen during Q&A. For BB4IT specifically, the two prize questions the organiser asks each speaker to prepare are a separate deliverable that this same generation pass can produce in five minutes.


**priority**

high — the highest-priority item after the timed dry run for this speaker, because it is the only practice item that directly targets the qa gap, which is one of only two gaps with a documented on-stage failure. It is cheap, self-service, executable the evening before, and it produces a reusable asset. The delivery-measurement half of the item is low priority and should be deferred; the generation half should be done before 2026-09-12.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

- https://arxiv.org/html/2507.07930
- https://arxiv.org/pdf/2507.07930
- https://arxiv.org/pdf/2505.13995
- https://arxiv.org/abs/2509.16533
- https://aclanthology.org/2025.findings-emnlp.1222.pdf
- https://arxiv.org/pdf/2505.23840
- https://arxiv.org/pdf/2508.13743
- https://dl.acm.org/doi/10.1145/2750858.2806060
- https://www.nature.com/articles/s41598-023-33703-0
- https://www.inderscience.com/info/inarticle.php?artid=148593
- https://yoodli.ai/use-cases/public-speaking
- https://github.com/NetsecExplained/chatgpt-your-red-team-ally

### Not established by this research

- `origin_author`
- `origin_year`
- `pl_language_notes`


---

## Marp export constraints

> Fragments, transitions and embedded video exist only in Marp's HTML output and silently flatten in PDF — so if the PDF is your backup and the organiser's copy, no reveal may carry load-bearing meaning.

### What it is

- **category** — slides


**origin_author**  
<sub>Originating author, book, lab or community that named the method</sub>

Marp team (marp-team/marp, marp-team/marpit, marp-team/marp-cli); the constraint is documented behaviour rather than a named method, with maintainer yhatt's rationale given in marp-team discussion #311. The presentation-design side is Presentation Patterns ('Slideuments' — one artefact trying to be both a presentation aid and a printed document)


**origin_year**  
<sub>Year the method was named or popularised; approximate is fine</sub>

Marpit fragmented lists since ~2018; the PDF-cannot-animate rationale stated by the maintainer on 2022-05-30; behaviour unchanged through Marp CLI v4.4.1 / Core v4.3.1 (verified 2026-09-08)

- **talk_moment** — before arriving — a build-pipeline and deck-design decision; it only becomes visible on stage at the exact moment the HTML build fails and the PDF runs instead

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

Marp's fragment syntax does not create slides — it annotates them. A `*` bullet or an `n)` ordered item marks a list element as fragmented, and the renderer emits `data-marpit-fragment="1"`, `"2"`, `"3"` attributes on those elements; the default HTML template (`bespoke`) then reads those attributes and turns each into a build step you advance with the arrow key. The PDF exporter is a headless Chrome print pass over the same DOM in its final state, so all fragments are simply present at once. Nothing errors, nothing warns — the deck exports cleanly and the build steps are gone. The same applies to the `transition:` directive (View Transitions API, HTML only) and to `<video>` elements, which a PDF cannot play. The design consequence is the part that matters: HTML and PDF are not two renderings of one deck, they are two different talks. In the HTML version a fragment reveal can carry a punchline — the room sees the problem, then the answer. In the PDF version the room sees both at once, which pre-empts the reveal and deflates the beat you rehearsed. Because the PDF is the artefact that runs precisely when everything else has failed, a deck whose pacing depends on fragments has its most fragile moment scheduled for its worst moment. The resolution is not a tool fix but a design rule: build steps must be structural (separate slides) rather than annotational (fragments), or the reveal must be decorative rather than load-bearing.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Decide which export is canonical for the stage. If the projector chain is uncertain, make the PDF canonical and design to it. 2. Classify every reveal in the deck as load-bearing (the meaning changes if the audience sees it early) or decorative (pacing only). 3. Convert every load-bearing reveal into separate slides — duplicate the slide and add one element per copy. This is PDF-native, survives every export, and costs only Markdown lines. 4. Leave decorative reveals as `*` fragments if you like, accepting that the PDF shows them at once. 5. Never let a `<video>` slide be the only carrier of an argument: add `poster="…"` so the PDF page is not an empty player, and keep a captioned stills sequence for the demo beats. 6. Build both artefacts from the same source in one command run, so they cannot drift. 7. Open the PDF and page through it as if you were presenting from it — this is the actual rehearsal of the backup, and it takes three minutes. 8. Note every slide where the PDF changes the meaning, and fix those by step 3. 9. Add `--pdf-notes` if you want your presenter notes attached to the PDF as annotations, and `--pdf-outlines` for navigable bookmarks — both are opt-in and off by default. 10. If you genuinely need fragments preserved as separate PDF pages, run the HTML output through decktape, which the Marp maintainer recommends for exactly this. 11. Send the organiser the PDF and check what you sent by opening the file you actually attached.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Whenever the deck is built with Marp and any of these three are true: the talk will be presented on someone else's hardware, the organiser requires a file in advance, or the deck is intended to be readable after the event. For BB4IT all three hold simultaneously, which is why this is a wave-1 item rather than a tooling footnote.

### Evidence


**evidence_level**

Documented tool behaviour plus direct verification — the strongest evidence level in this whole research set, because it was tested rather than read. Verified locally on 2026-09-08 with Marp CLI v4.4.1 / Core v4.3.1 (the globally installed toolchain, resolving in both this vault and the speaker's slides repo). The maintainer's rationale is a single-maintainer statement, and the design recommendation that follows from the constraint is practitioner judgement, not evidence.

- **myth_status** — confirmed — the constraint is real, current and documented, and it behaves exactly as the documentation says.


**contested_claims**

1. 'It is a bug / it will be fixed' — it will not. marp-cli issue #496 ('Fragment support for PDF export', opened 2023-01-09) is closed as not planned and marked duplicate; the earlier proposal in marp-cli#141 was not pursued, with the maintainer citing slide-reproducibility problems when GIF and `<video>` are involved. Treat it as permanent design ground. 2. 'PDF loses everything fancy' — too broad. Verified to survive PDF: pagination, custom themes and CSS, `_class` directives, headers and footers, background images, static images and SVG, and text layout. Verified to be lost: fragments, `transition:` effects, and playable video. 3. 'Marp Core v5 renders Mermaid natively so diagrams are fine' — a claim from a GitHub discussion rather than release notes, and irrelevant on this machine, which runs Core v4.3.1; pre-render diagrams to SVG or PNG and the export question disappears entirely. 4. 'The organiser's copy is just a formality' — it is the file that gets republished and, on a bad day, the file that gets projected.


**key_sources**

1. Marp official guide, 'Fragmented list' — the syntax (`*` for bullets, `n)` for ordered items) and the explicit statement that 'Fragmented lists are only available if you export to HTML. If you export to PDF and PPTX, the fragmented list will be rendered as a normal list'; the same page notes the syntax only indicates that a list should be fragmented, and that the `bespoke` HTML template is what reproduces it as build animations. 2. marp-team discussion #311 (2022-05-30) — maintainer yhatt: PDF output cannot reproduce animations, Marp treats a fragmented list as an animation like PowerPoint bullet animations; the marp-cli#141 solution was not pursued due to slide-reproducibility problems with GIF and `<video>`; recommended workaround `decktape generic -s 1280x720 --load-pause 3000 ./deck.html ./deck.pdf`, confirmed by the asker as solving the problem. 3. marp-cli issue #496 (2023-01-09) — closed as not planned, duplicate. 4. Direct verification, 2026-09-08, Marp CLI v4.4.1 / Core v4.3.1: a deck with three `*` items and two `n)` items produced eight `data-marpit-fragment` attributes in the HTML output, while the PDF of the same source rendered page 1 with all three items present on one page and page 2 as a plain `1. / 2.` list; a `<video controls muted>` slide exported to a page whose only extractable text was the control bar's `0:00` with zero embedded images, and adding `poster` caused that page to embed the poster image and drop the chrome; `--pdf-notes` attached the HTML-comment note as a PDF annotation; `--pdf-outlines` produced five outline entries for a three-page deck; `--notes` wrote the notes to a plain-text file; the `transition:` directive appeared only in the HTML.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

The constraint is arguably a feature. The Marp documentation itself cautions that fragments can create confusion about hidden content and points at external guidance recommending against builds altogether, and Presentation Patterns names 'Slideuments' as the failure of one artefact trying to be both a talk aid and a document. Read that way, PDF flattening is a forcing function toward the discipline the design literature already recommends: one idea per slide, structural progression rather than animated progression. There is also a real cost to the recommended fix — duplicated slides inflate the deck's slide count and make edits repetitive, which matters when a deck is regenerated often. And for a purely online talk where you control the browser end to end, the HTML build is never at risk and the constraint is theoretical.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

It shapes the deck rather than occupying stage time. In the BB4IT deck of 19 slides across 25 minutes, the places to check are every reveal that carries an argument: the 'what actually breaks' block (slides 5–6), the thesis and its defence (7–8), the architecture build (9–12) and the three conclusions (18–19). Each of those is a candidate for a fragment and each is load-bearing, so each should be built as separate slides instead. The demo block (13–15) is the other affected place, for a different reason — it is video, and it is simply absent from the PDF, so the PDF needs a stills version of those beats. Practical effect on the run of show: with structural builds, a forced switch to the PDF changes nothing about the talk's pacing, which is what makes the backup an actual backup rather than a different talk.


**time_budget_min**

0 minutes of the 25-minute slot when handled in design. If it is not handled and the PDF has to run, the cost is real but diffuse: every flattened reveal lands early, punchlines deflate, and the speaker improvises around slides that have already said the thing — typically 1–3 minutes of lost pacing across the talk plus the confidence cost at the worst possible moment.


**audience_change**

Indirect but sharp. A load-bearing reveal delivered as a build changes what the audience believes in sequence: they hold the problem for a beat before they get the answer, which is what makes the answer land. Flattened, the same slide delivers problem and answer simultaneously and the audience reads the answer first, since the eye scans faster than the speaker talks. So the audience change at stake is not extra information, it is the ordering of belief — and the design rule preserves that ordering in both exports.


**application_pl_talk**

Nothing about the export behaviour is language-dependent, but two things about this speaker's setup are. First, the organiser obligation is concrete and dated: the presentation must reach biuro@itwgorach.pl by Friday 11.09 at 14:00, one day before the talk, which means the PDF is finalised while the talk is still being rehearsed — so the design rule has to be applied before that deadline, not on the morning of the conference. Second, the deck is English-language slides with Polish delivery, which raises the cost of flattening specifically: an audience reading a second language reads more slowly and more deliberately, so a fully revealed slide holds their eyes longer and pulls attention away from the Polish narration for longer than it would in a monolingual talk. Build discipline is therefore worth more here, not less. A third, purely local note: `slides/config.yaml` in the speaker's slides repo still pins `marp_cli_version: "^3"` while the resolved toolchain is CLI v4.4.1 with Core v4.3.1 (checked 2026-09-08) — worth reconciling before the 11.09 build, so the file sent to the organiser is produced by the version that was tested.


**pl_language_notes**

This item is executed at a keyboard, so the on-stage language layer is minimal — but there is one line worth having ready, because the failure it describes is public. If the PDF has to run and a slide reveals everything at once, do not explain the tooling: say 'Tu miało to wchodzić po kolei — mówię po kolei.' and carry on. Never say 'przepraszam, mam tu animacje, które nie działają' — it converts a formatting detail into an admission. Terminology, if it comes up in the corridor: 'fragmenty' or 'stopniowe odsłanianie' rather than the calque 'fragmentowane listy'; 'przejścia' for transitions; 'kopia zapasowa prezentacji' for the PDF backup. Avoid 'eksportować do PDF-a' in writing to the organiser — 'wysyłam prezentację w PDF' is the natural Polish form.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

demo_risk — directly, because the demo's video slide is the single deck element that is completely absent from the PDF, so this item defines what the demo's backup actually looks like. Also timing, second-order: a flattened reveal disrupts rehearsed pacing, and the 85-percent timing plan assumes the deck behaves on stage the way it behaved in rehearsal. Weakly reuse — a PDF that reads correctly on its own is the artefact that can be republished or mined for carousels without rework, and structural builds make each step a self-contained frame that a carousel can use directly. Not related to opening, qa or late_slot.


**minimal_2h_version**

Twenty minutes, and it is mostly checking rather than building. (1) `grep` the deck source for lines starting with `* ` and for `n)` ordered items — that is the complete list of fragments in the deck. (2) For each hit, ask whether the meaning changes if the audience sees everything at once; if yes, split it into separate slides right now, which is a copy-paste edit. (3) Build both exports from the same source in one run. (4) Page through the PDF at full screen as if presenting, looking for slides that give away their own punchline and for the empty page where the video should be. (5) Add `poster` to the video slide and drop in captioned stills for the demo beats. (6) Confirm the PDF you send to the organiser is the one you just checked, and that a copy exists off the laptop. Do not attempt to install decktape two hours out — the design fix is faster and more reliable than a new tool in the chain.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

The BB4IT thesis slide is the clearest case. Written as a fragmented list it reads: `* Agent nie zawodzi na rozumowaniu` / `* Zawodzi na dostępie do wiedzy` / `* Naprawiają to zwykłe pliki w repozytorium` — three build steps in HTML, one fully visible slide in PDF, where the audience reads the conclusion before the speaker has stated the problem. Rebuilt structurally it becomes three slides, each adding one line, which behaves identically in HTML and PDF and additionally yields three clean frames for a LinkedIn carousel. The demo block is the second case: slides 13–15 hold `<video src="./sources/demo.mp4" controls muted poster="./sources/beat-1.png">`, which the PDF renders as the poster frame — better than an empty player, but still one frame for a four-beat argument, so the PDF-safe version is four captioned stills, one per beat, each caption carrying that beat's claim rather than describing the picture.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

Make the constraint structural rather than remembered. Adopt a house rule for the deck pipeline — no load-bearing fragments, ever — so the question stops being asked per slide. Add a build step that produces both HTML and PDF from the same source in one command, so drift is impossible. Then add a review habit: page through the PDF before every send, which takes three minutes and catches the whole class of problem. Over a few decks, the reflex that develops is designing progression as slides rather than as animation, which is what the slide-design literature recommends independently of any tool. If fragment-preserving PDFs turn out to be genuinely needed, set decktape up once, off the critical path, and verify it against a real deck rather than a toy one.


**drill**

Input: your current deck source and 15 minutes. Action: run `grep -n "^\* \|^[0-9])" slides.md` to enumerate every fragment; build the PDF; open it full screen and step through it aloud, delivering the talk from the PDF alone. Mark every slide where you say something the slide has already said, and every slide that is blank or wrong (the video). Output: a marked list with a fix for each — split into slides, add a poster, or add a stills sequence. Success condition: a second pass through the PDF where you never have to talk against a slide that has pre-empted you.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

One reveal — a single fragment, classified as load-bearing or decorative and then either split into slides or left alone. The deck-level pass is just the sum of these decisions.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

First audit of an existing deck: 20–40 minutes. Converting a fragmented list to structural slides: 2–3 minutes each. Setting up a both-exports build: 15 minutes once. Per-deck PDF page-through before sending: 3 minutes. Adding a stills sequence for a demo: 20–30 minutes including frame export and captions. Decktape, if adopted: an hour to install and validate, and it adds a step to every build thereafter.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

The PDF itself is the feedback and it is immediate and unambiguous — there is no interpretation involved, you either see the punchline early or you do not. Second loop: `grep -c data-marpit-fragment` on the HTML output tells you how many fragments the deck actually contains, which is usually more than the author remembers. Third loop, on stage: if the backup ever runs, note which slides forced you to improvise and fix exactly those.


**measurable_kpi**

Load-bearing fragments remaining in the deck (target 0). Slides where the PDF and the HTML tell a different story (target 0). Fragment count in the built HTML, from `grep -c data-marpit-fragment` (informational, but a rising number signals drift back toward animated builds). Demo beats represented in the PDF as captioned stills (target: all of them; BB4IT: 4). Minutes between finishing the deck and having a verified PDF off the laptop (target under 15).

### Online and recorded


**online_variant**

Largely dissolves. In a webinar the presenter controls the browser end to end, so the HTML build with its fragments, transitions and video is not at risk, and the PDF exists only as an archive. Two residual effects remain. First, builds are worth more online than in a room, because a fragment reveal is one of the few state changes available when there is no stage, no movement and no eye contact — so an online-first deck may reasonably use more fragments than a conference deck. Second, if the deck is shared afterwards as a PDF, the flattened version is what the audience keeps, so the reading-deck question resurfaces even though the presenting question went away.


**recorded_variant**

The recording captures whichever export actually ran, which makes the constraint permanent rather than momentary. If the HTML build runs, the published video shows the intended builds and the video demo — the best case, and the reason to protect the HTML path. If the PDF backup runs, the published video shows a deck that gives away its own reveals and has a still frame where the demo should be, and that is the version that lives on YouTube. There is also a reuse angle: structural builds produce one clean frame per step, which is exactly the input a LinkedIn carousel needs, so the PDF-safe design pays for itself twice — once as a backup and once as content.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

Designing the talk against the HTML build and treating the PDF as a formality, so the backup is a different and worse talk. Discovering the flattening on stage and explaining it to the room. Maintaining two decks — an HTML one for presenting and a PDF one for sending — which drift within a day and double every edit; this is the Slideuments failure with extra steps. Sending the organiser a PDF nobody has opened. Using fragments as a substitute for structure, so the deck is a small number of dense slides pretending to be a large number of clear ones. Adding decktape to the critical path days before a talk. And the tooling-fixation antipattern: hunting for a flag that makes PDF animate, when the design fix takes three minutes per slide and is more robust than any flag would be.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Assuming a clean export means a faithful export — Marp emits no warning when it drops fragments, so the failure is silent by design. Forgetting that ordered lists have their own fragment syntax (`1)` rather than `1.`), so fragments appear in decks whose author believes there are none. Forgetting `--html` and `--allow-local-files` on the video build, which fails differently and more loudly. Forgetting `--pdf-notes` and then wondering where the presenter notes went — they are off by default. Building the PDF from a different source revision than the HTML. Not opening the attachment actually sent to the organiser. Relying on Mermaid rendering that this Core version does not provide, instead of pre-rendering diagrams to SVG.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

The strict no-load-bearing-fragments rule is worth relaxing for decks that will never be exported or shared — an internal walkthrough presented from your own machine, or an online-only session where the HTML path is under your control and the PDF is archival. It is also unnecessary for a deck with no progressive reveals at all, which is the case for most image-led or one-idea-per-slide decks; those already satisfy the rule by construction.


**fallback_if_it_fails**

The HTML build will not run and the PDF is what is on screen: say nothing about the tooling, and adjust delivery rather than explaining. Concretely — on a flattened slide, name the first point aloud before the audience finishes reading and take them through the list in your own order ('Trzy rzeczy. Pierwsza…'), which restores the sequence with voice instead of animation. On the demo slide, you have the poster frame or the stills; narrate the beats as you would have narrated the video, which is exactly the narration score already prepared for the recorded demo. If nothing renders at all, this becomes the no-slides plan. And if the flattening only becomes apparent mid-talk, do not go back and re-explain — carry the ordering forward for the remaining slides.


**works_signal**

Preventive rather than live, so the signal is the absence of a specific behaviour: the audience is not reading ahead of you. Concretely, when a build is doing its job you are looking at faces during the reveal; when a slide has flattened, you see eyes drop to the bottom of the slide while you are still on the first point, and the room's reaction to your punchline arrives a few seconds before you deliver it — flat, early, and unmistakable once you know to watch for it. Off stage the signal is simpler: paging through the PDF and finding no slide that says something before you do.


**dependencies_conflicts**

This is the item the outline names as a known live conflict, and the conflict is real: Marp fragments against the PDF backup. Conflicts with progressive-diagram-build and temporal-code-explanation (Crawling Code, Traveling Highlights, Charred Trail), all of which are progressive by nature and all of which must be implemented as separate slides rather than as in-slide animation if the PDF is to hold. Conflicts with lipsync-recorded-demo, whose `<video>` slide has no PDF representation beyond a poster frame. Depends on markdown-deck-pipeline for the build commands and on diagrams-in-marp for the pre-rendering decision that makes diagrams export-safe. Feeds backup-equipment-checklist, since the PDF is the artefact carried on the USB sticks, and speaking-deck-vs-reading-deck, which is the same tension seen from the design side rather than the tooling side. Enables talk-to-content-reuse, because structural builds yield carousel-ready frames.

### Tooling


**tool_support**

Marp CLI (verified v4.4.1 with Core v4.3.1) with the flags that matter here: `--pdf` for the export, `--html` to allow raw tags such as `<video>`, `--allow-local-files` for locally referenced media during conversion, `--pdf-notes` to attach presenter notes as PDF annotations (verified: one annotation on the page carrying a note), `--pdf-outlines` for bookmarks with `--pdf-outlines.pages` and `--pdf-outlines.headings` both on by default (verified: five entries for a three-page deck), `--notes` to write presenter notes to a plain-text file, `--images` to export slides as image files (the natural way to produce the stills sequence and carousel frames), and `--preview` / `--watch` while authoring. The `bespoke` HTML template is what actually animates fragments and also provides presenter view, overview mode and an optional progress bar. decktape is the maintainer-recommended escape hatch when fragments must become real PDF pages (`decktape generic -s 1280x720 --load-pause 3000 deck.html deck.pdf`). For diagrams, any tool that produces SVG or PNG ahead of the build sidesteps the whole question.


**marp_implementation**

The syntax itself: `*` as a bullet marker makes a fragmented list, `n)` after a digit does the same for ordered lists, and both compile to `data-marpit-fragment="1…n"` attributes that only the HTML template acts on (verified: a three-item and a two-item list produced eight fragment attributes in the HTML and no extra pages in the PDF). The PDF-safe replacement is structural — duplicate the slide with `---` and add one line per copy, which requires no directives at all. For the demo slide, `<!-- _class: video -->` with `<video src="./sources/demo.mp4" controls muted poster="./sources/beat-1.png"></video>`; the poster is what stops the PDF page from being an empty player. Note that `slides/themes/plsoft-dark.css` currently defines no `section.video` rule, so that class styles nothing until one is added. The `transition:` directive is HTML-only and safe to use as decoration, never as meaning. Build both artefacts from one source in a single run so they cannot diverge, and reconcile `slides/config.yaml`'s `marp_cli_version: "^3"` pin with the v4.4.1 actually in use before producing the file the organiser receives.


**survives_pdf_export**

partially — and knowing exactly which half is the whole point of this item. Verified to survive on Marp CLI v4.4.1 / Core v4.3.1 (2026-09-08): custom themes and CSS, `_class` directives, pagination, headers and footers, background images, static images and SVG, text layout, plus opt-in presenter notes as annotations (`--pdf-notes`) and navigable outlines (`--pdf-outlines`). Verified lost: fragmented lists in both bullet and ordered form, the `transition:` directive, and playable video — a `<video>` slide becomes a page with empty player chrome unless a `poster` is supplied, in which case that image is embedded instead.

### Effort and payoff


**prep_effort**  
<sub>low | medium | high — one-off setup cost</sub>

low — the audit is a `grep` and a page-through, and each fix is a copy-paste edit. The only medium-cost path is adding decktape to the build, which is rarely necessary once the design rule is adopted.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Immediate and specific: the backup becomes a genuine backup rather than a degraded variant, so the worst-case stage scenario stops costing pacing. A second effect shows up within a deck or two — designing progression as slides rather than as animation produces clearer slides in general, and hands the reuse workflow a set of frames it can use without rework.


**needs_organiser_agreement**

yes, narrowly but concretely. Agree the format and deadline for the file they receive — for BB4IT the presentation is due at biuro@itwgorach.pl by 11.09 at 14:00 — and confirm whether that file may be republished alongside the recording, since the PDF is the version the public would read. Also worth confirming with them: whether they will project from your laptop (they will, with their HDMI cable and your adapter, flagged as PL-217) or from a copy on their machine, because the second case makes the PDF the presenting artefact rather than the backup, and the design rule then becomes mandatory rather than prudent.


**priority**

high — it is a wave-1 item with a deadline earlier than the talk itself (11.09 14:00), the fix is cheap and mechanical, and it is the difference between having a backup and having a different talk. It also resolves a live conflict that touches the demo, the diagram builds and the reuse pipeline simultaneously.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

https://github.com/marp-team/marp/blob/main/website/docs/guide/fragmented-list.md (official guide: `*` and `n)` syntax; 'Fragmented lists are only available if you export to HTML. If you export to PDF and PPTX, the fragmented list will be rendered as a normal list'; the `bespoke` template is what reproduces them as build animations); https://github.com/orgs/marp-team/discussions/311 (maintainer yhatt, 2022-05-30: PDF cannot reproduce animations; marp-cli#141 not pursued due to reproducibility problems with GIF and `<video>`; recommends `decktape generic -s 1280x720 --load-pause 3000 deck.html deck.pdf`); https://github.com/marp-team/marp-cli/issues/496 (2023-01-09, 'Fragment support for PDF export' — closed as not planned, duplicate); https://github.com/marp-team/marp-cli (the flag reference: `--pdf`, `--pdf-notes`, `--pdf-outlines`, `--html`, `--allow-local-files`, `--notes`, `--images`, and the bespoke template's presenter view); https://github.com/astefanutti/decktape (the PDF exporter that renders fragments as separate pages); https://presentationpatterns.com/glossary/ ('Slideuments — a presentation trying to be both a presentation aide and an attractive printed version', the design-side framing of the same tension)


---

## Modular drills on one block or transition

> Instead of only running the whole talk, isolate one narrow sub-skill — the first 30 seconds, the handover into the recorded demo, the close — set a target for it, repeat it 5 to 10 times with immediate feedback, and put it back into the whole run.

### What it is

- **category** — practice


**talk_moment**

before arriving — sits between rehearsal-ladder rungs, in 10 to 20 minute units that do not need a free evening; the drilled moments themselves land in the first 90 seconds, at middle-block boundaries and in the last 90 seconds

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

A full run-through gives one repetition of every moment and concentrated attention on none. The weakest 30 seconds of a 25-minute talk get 30 seconds of practice per run — so after four full runs the opening has been rehearsed four times, which is why openings stay fragile in speakers who rehearse conscientiously. A modular drill inverts the ratio: ten repetitions of the opening in ten minutes. Three mechanisms make it work. (1) Segmentation (Wightman and Lintern): a temporally separable part is trained alone and then reintegrated, which is efficient exactly when the part is separable — an opening and a block handover are separable in a way that 'delivering well' is not. (2) Deliberate practice: repetition only improves performance when it has a specific target and immediate feedback; drills supply both because the unit is short enough to judge and short enough to repeat while the last attempt is still in memory. (3) Variance reduction at the joints. Failures cluster at boundaries — the start, where there is no momentum to carry you, and the handovers, where you leave one structure before entering the next. The NCP4 drift happened at a boundary, and the recorded-demo handover is a boundary that also carries technical risk. Drilling boundaries converts the highest-variance seconds of the talk into the most automatic ones.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Pick the unit. Legitimate units: the first 30-90 seconds; the handover out of one block into the next; the entry into the recorded demo and the exit back out; the final 45-60 seconds; the answer-to-one-hard-question; a single dense diagram explained aloud. One unit per drill session. 2. Name the failure you are fixing, concretely: 'I improvise the agenda instead of saying it', 'I go silent for four seconds while the recording loads', 'my close trails off into thanks'. If you cannot name it, you are not drilling, you are repeating. 3. Set a target the repetition can be judged against: under 90 seconds; the same three agenda items in the same order; the demo entry sentence spoken before the recording starts, not after. 4. Repeat 5 to 10 times, standing, aloud, with the real trigger — the real slide, the real clicker press, the real recording actually starting. 5. Feed back immediately after each repetition. The cheapest loop is a phone recording you play back after every second attempt; the sharpest is a stopwatch plus one written criterion. 6. Vary deliberately in the last two repetitions: start from the slide before, or have someone interrupt, so the unit is not welded to one entry cue. 7. Reintegrate the same day or the next: run the two blocks either side of the drilled joint, so the part goes back into the whole. Wightman and Lintern's warning is that part-training without reintegration transfers poorly. 8. Log one line: unit, repetitions, what changed. Retire the unit when two consecutive repetitions hit the target without conscious effort.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

When a full run has already located a problem, which is the ordering that matters — full runs diagnose, drills treat. Highest value for: an opening that has drifted before (documented at NCP4); any handover into or out of a fixed-length artefact such as a recorded demo; the close, which is the segment most often reached in a hurry and least often rehearsed; a hard Q&A answer; and any single moment that has technical dependencies. Also the right tool when time comes in 15-minute fragments rather than free evenings — a drill fits into a gap between meetings, a full run does not. Least useful for pacing and total duration, which are properties of the whole and cannot be drilled in parts.

### Evidence


**evidence_level**

controlled study for the underlying training principles, with important boundary conditions; practitioner consensus for the speaking application. Part-task training is well studied in the training literature, and the honest summary is not a blanket endorsement: Wightman and Lintern's review found that in the majority of cases part-training was less efficient than whole-task training, with part-training superior when the whole task is complex or dangerous and cleanly divisible, and with backward chaining the technique that carried most of the advantage in the studies where it won. Deliberate practice as a framework is a controlled-study lineage (Ericsson et al. 1993) but its explanatory power is contested (see contested_claims). No study addresses drilling a conference-talk opening. Treat the practice as well motivated by analogy, not as demonstrated for speaking.


**myth_status**

sound practice with a wrong justification. The drill works, but the usual justification — '10,000 hours', 'deliberate practice is what separates experts from everyone else' — is overstated and, for a professional domain, close to false. The defensible justification is narrower and sufficient: repetition with a specific target and immediate feedback improves a specific separable sub-skill faster than the same time spent on undifferentiated whole-task repetition, and talk failures cluster at separable boundaries.


**contested_claims**

(1) The 10,000-hour rule, popularised from Ericsson's work by Gladwell (2008) and disowned by Ericsson himself — it was never a threshold, and the original figure was an average for elite violinists. (2) 'Deliberate practice explains expertise': Macnamara, Hambrick and Oswald's 2014 meta-analysis in Psychological Science found deliberate practice accounted for 26 percent of performance variance in games, 21 percent in music, 18 percent in sports, 4 percent in education and less than 1 percent in professions — public speaking sits nearest that last, worst category. (3) 'Break every skill into parts and drill them' — the training literature says the opposite for tasks whose components interact strongly; over-fractionating a talk into drilled fragments produces a speaker who can deliver seven polished 90-second units that do not join up. (4) 'Practise your opening 20 times' — a common coaching figure with no basis beyond practitioner assertion; it is a reasonable order of magnitude, not a finding.


**key_sources**

Wightman, D. C. and Lintern, G. (1985), 'Part-task training for tracking and manual control', Human Factors 27(3):267-283 — the canonical review; defines segmentation, fractionation and simplification, stresses the reintegration step, and reports the uncomfortable finding that part-training is often less efficient than whole-task training except for complex, cleanly divisible tasks, with backward chaining present in the studies where part-training won. Macnamara, B. N., Hambrick, D. Z. and Oswald, F. L. (2014), 'Deliberate practice and performance in music, games, sports, education, and professions: a meta-analysis', Psychological Science 25:1608-1618 — the variance figures above; the specific relevance is that in professional domains structured practice explains almost none of the between-person variance, which caps how much any drilling regime can be expected to deliver. Tress Academic, 'How to rehearse a scientific presentation' — practitioner source that explicitly recommends isolating difficult sections rather than always running the whole talk, and spreading rehearsal across several short sessions. Moxie Institute and comparable speaker-coaching sources — chunk the talk into 30-60 second units, practise each separately, then connect; practise the opening more than any other segment.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

(1) The strongest one comes from the same literature that supports the method: part-task training frequently loses to whole-task training, and the losses come precisely from tasks whose parts interact — a talk's parts do interact, through pacing, energy and cumulative context. (2) Drilling can polish a fragment into something that no longer fits: a 30-second opening rehearsed ten times becomes tight and performed, and if the rest of the talk is conversational the seam is audible. (3) Drills feel productive and are cheap, which makes them an attractive avoidance behaviour when the real problem is that the deck is 40 minutes long — no amount of drilling the transition fixes an over-length talk. (4) Macnamara et al. cap expectations: in professional domains, practice quantity explains little variance, so a drilling programme is not a route to becoming a good speaker; it is a route to removing named, specific defects. (5) For a speaker whose material changes every talk, drills have low reuse — the opening drilled this month is discarded next month, unlike a signature talk where drilling compounds.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

No stage time; it reshapes how preparation hours are spent. For a 25 + 5 slot, four drilled units are enough and their selection should follow the known failure history rather than intuition: (1) the first 90 seconds — hook, one-sentence thesis, 30-second agenda, question policy — drilled to 10 repetitions; (2) the entry into the recorded demo, drilled with the recording actually playing, until the first narration sentence lands before the first frame rather than after; (3) the exit out of the demo back into the argument, which is the transition most often forgotten and the one where a tired room decides whether the demo had a point; (4) the final 45-60 seconds, so the close survives an overrun. Each is 10-15 minutes. Together they cost about an hour and cover the four moments where a 25-minute talk visibly fails.


**time_budget_min**

0 minutes of stage time. The drilled units themselves occupy the minutes they always did: roughly 1.5 min for the opening, 0.5 min for each block handover (about 3 min total across 6 blocks), 3 min for the fixed-length demo it hands over to, and 1 min for the close. Off stage, each drill is 10-20 minutes; four drills is about one hour per talk.


**audience_change**

The audience experiences it as competence at the joints. Concretely: the talk begins with a sentence rather than with a throat-clear and a laptop adjustment; when the demo starts they are told what to watch for before the first frame instead of being left to interpret a moving screen in silence; when it ends they are told what it proved instead of being returned to slides without comment; and the talk finishes on a sentence the speaker chose. In a tired late slot these joints are where attention is either recaptured or permanently lost.


**application_pl_talk**

Transfers fully — a drill is language-agnostic — with one addition specific to Polish delivery over English slides. The units worth drilling in Polish are exactly the ones where an English-language script is not available to fall back on: the transitional sentences. English gives a speaker a large stock of fluent connective phrases ('which brings us to', 'so far so good, but'); the Polish equivalents have to be chosen, or the speaker defaults to 'no dobra', 'tak więc', 'okej' — the audible signature of an undrilled handover. So drill the Polish transition sentence itself as a fixed line, not just the timing of the move. Second, drill the entry into the demo in Polish while the on-screen text is English: the sentence 'zaraz zobaczycie, jak agent…' has to be said over an English UI, and the mismatch is where speakers start reading the screen aloud in translation. Third, for a technical Polish audience, drill the pronunciation and declension of the two or three English terms that appear most often, once, so they are identical every time.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

opening — direct and primary. The NCP4 retrospective records drifting off script at the start despite having a plan, and the unfinished action item is precisely a one-sentence hook plus a 30-second agenda; the ladder schedules that work, but this item is the technique that actually fixes it, because it puts 10 repetitions on the 90 seconds that a full run rehearses once. demo_risk — direct and second in importance: for BB4IT the block-3-to-block-4 handover is literally the handover into a locally played recording, so the drill covers both the narration and the technical trigger (audio path, focus, window switch) in one repetition. timing — indirect but real: boundaries are where an unrehearsed talk leaks 20 to 40 seconds each, and six leaky boundaries is two minutes of a 25-minute slot. qa — the answer-to-one-hard-question is a drillable unit, and is how the sensitive-data-in-cloud-LLMs answer moves from acceptable to good. late_slot — the state-change moments that re-wake a tired room are boundaries too, and they only work if they are clean. reuse — a drilled 60-second segment is exactly the length of a reusable clip.


**minimal_2h_version**

Two hours is enough for three drills and one reintegration run, and this is a better use of a final two hours than a third full run-through. 0:00-0:20 opening drill: the hook, the thesis sentence, the 30-second agenda and the question policy, standing, 10 repetitions, phone recording, target under 90 seconds with the same wording in the last three attempts. 0:20-0:40 demo-entry and demo-exit drill with the recording genuinely playing through the speakers you will use: 6 repetitions of entering (narration sentence first, then play) and 6 of exiting (one sentence naming what it proved, then back to slides). 0:40-0:55 close drill: 5 repetitions of the final 45 seconds ending on a fixed last sentence, then held silence. 0:55-1:35 reintegration — a single run of blocks 1-4 and then the last two blocks, so the drilled parts are re-embedded. 1:35-2:00 listen back only to the opening, the two demo joints and the close; fix one thing in each.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

Agentic-AI talk, drill on the block-3-to-block-4 handover. Failure named: at the previous delivery there were six silent seconds while the recording was found and started, and the narration then began mid-clip, so the room watched an unexplained screen. Target: the sentence 'Teraz zobaczycie ten sam agent w produkcji — patrzcie na moment, w którym sam się zatrzymuje' is spoken with the recording already cued and started on the last word; total dead air under one second. Setup: the actual laptop, the actual video file open in the actual player, output to the TV, sound on. Repetitions: 8, alternating who triggers the play (clicker versus keyboard) so the cue is not welded to one motor action. Feedback: phone recording, and a stopwatch on dead air. Reintegration: run block 3 in full, through the handover, into the first 30 seconds of narration, twice. Result to expect: dead air from 6 seconds to under 1, and — the real prize — the narration's first sentence tells the room what to look for, which is what makes a recorded demo land instead of merely playing.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

The multi-week skill is diagnosis, not repetition: knowing which 30 seconds to drill. Build it from evidence rather than feeling. (1) After every talk, watch the recording once with a single question — where did the seams show? — and write down the two worst joints. Those are next month's drill units. (2) Keep a standing list of recurring units across talks: openings, demo handovers, the close, the top three hard questions. Because a practitioner's talks change but the joints repeat, the drill list is portable even when the deck is not. (3) Apply backward chaining, which is the one part-task technique with a track record: drill the close first and most, then the segment before it, then the segment before that. A talk trained backwards ends strongly under pressure, because the final segment is the most rehearsed rather than the least. (4) Retire units on evidence — two consecutive on-target repetitions and no recurrence on the last recording — and add new ones, so the list stays short and the practice stays targeted rather than becoming a ritual.


**drill**

Input: the first 90 seconds of the current talk (hook, thesis sentence, agenda, question policy) written out word for word, plus a phone and a stopwatch. Action: standing, away from the desk, deliver those 90 seconds from memory 10 times in a row. Record every attempt. After attempts 3, 6 and 9, listen to that attempt only and write one word for what to fix next (pace, filler, order, ending). Attempts 8 to 10 must start from a different cue each time — walking to the front, after a slide is already on screen, and immediately after saying good afternoon — so the unit is not bound to a single entry. Observable output: 10 recordings and three one-word notes. Pass criteria: attempts 8, 9 and 10 use substantially the same wording, are each under 90 seconds, contain no restart, and end on the same sentence that hands over into block 2. 15-20 minutes.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

One sentence, one transition or one block of up to 90 seconds — deliberately smaller than the run. The unit must satisfy three tests: it is temporally separable (it has a clear start and end cue), it is short enough to repeat 8 to 10 times inside 15 minutes, and its success is judgeable on the spot against a stated criterion. A unit that fails any of those is a run-through in disguise.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

10-20 minutes per drill, 4 drills per new talk, plus one reintegration pass of 20-30 minutes: about 1.5 hours total. The cost profile is the point — it is the only rehearsal item that fits into fragments of a working day, which for a CTO with client calls is often the difference between preparation happening and not happening. Marginal cost of adding a recurring unit to a later talk is near zero because the wording is already written.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

Immediate and local, which is what distinguishes a drill from a repetition: a stopwatch for dead air and segment length; a phone playback after every second attempt while the attempt is still in working memory; a single written criterion so the judgement is binary rather than impressionistic; and for the demo joints, the physical reality of whether the audio actually came out of the speakers. The delayed loop is the recording of the real talk, watched for whether the drilled joint still shows a seam — that is what decides whether the unit is retired or repeated.


**measurable_kpi**

Per unit: (a) repetitions completed, target 8-10 for a new unit; (b) duration of the unit against its target, e.g. opening under 90 seconds; (c) wording stability across the last three repetitions, scored simply as same / mostly same / different; (d) dead air in seconds at each handover, target under 1 second at the demo entry; (e) filler words in the unit, counted off the recording, target 0 in the opening; (f) number of restarts, target 0 in the last three attempts. Across talks: number of drilled joints that still show a seam on the event recording — the number that tells you whether drilling is working at all.

### Online and recorded


**online_variant**

Drills matter more online, not less, because the joints are worse there: a screen share that has to be started, a window that has to be switched, a video that has to be played with audio sharing enabled, and no room energy to cover the gap. The unit list changes accordingly — drill 'start screen share while still talking', 'switch from slides to browser and back', 'play the recording with system audio on' — each with the actual platform running. A second online-specific unit is the chat handover: the sentence that takes a question from chat, reads it aloud and hands back to the slides. Also drill the first 30 seconds separately for the online case, since online openings begin cold with no applause, no walk-on and no visible audience.


**recorded_variant**

The drilled joints are disproportionately what ends up in the published artefact: the opening becomes the thumbnail moment and the first chapter, the close becomes the clip, and the demo narration becomes the segment people actually watch. Two adjustments. First, drill the units to be self-contained enough to survive being cut out — an opening that references something said before it cannot be clipped, and a close that begins with 'so as I said' cannot either. Second, drill for a clean edit point: a held final slide and two seconds of silence after the last sentence gives the editor somewhere to cut, and gives you the clip. Note that this is where drills and the reuse gap intersect directly — a drilled 60-second unit is already the right length and shape for a LinkedIn clip, so the rehearsal recording is publishable material rather than only diagnostics.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

(1) Drilling in place of running: eight polished fragments that have never been performed in sequence, which is the reintegration failure the part-task literature specifically warns about. (2) Drilling without a named failure — repeating a segment because repeating feels like progress. (3) Over-polishing the opening until it is a different register from the rest of the talk, so the seam moves rather than disappearing. (4) Drilling the wrong unit because it is the comfortable one: rehearsing the section you enjoy while the demo handover, which you dread, stays undrilled. (5) Drilling in a chair, quietly, without the real trigger — a demo-entry drill without the recording actually playing tests nothing that will fail. (6) Cargo-culting deliberate practice language ('10,000 hours', 'expert performance') onto what is really 45 minutes of targeted repetition. (7) Using drills as displacement activity when the actual problem is an over-length deck.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Choosing units that are too long — 'block 3' is not a unit, 'the last sentence of block 3 and the first sentence of block 4' is. Not writing the target down, so the repetitions have nothing to be judged against and drift toward whatever felt good. Skipping playback because listening to yourself is unpleasant, which removes the feedback half and leaves only repetition. Drilling once, on one occasion, and expecting it to hold a week later without a refresh. Forgetting the reintegration run, so the whole talk is never performed with the fixed joints in place. Drilling only entries and never exits — the way out of a demo or a story is at least as fragile as the way in. Binding the unit to a single cue, so it collapses when the cue differs on the day. Drilling after the deck is already too long, when cutting was the correct intervention.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

When no full run has been done yet — drills without a diagnosis treat symptoms you have not observed, and the first full run may reveal that the whole talk is 30 percent too long, which no drill addresses. When the talk is short enough (under 5 minutes) that the whole thing is the unit. When the material is still being rewritten, since a drilled sentence in a deleted block is wasted. For pacing, energy arc and total duration, which are properties of the whole and are only measurable in a run. And in a genuinely interactive format, where the moments that matter are responses to participants and cannot be scripted into units — there, drill facilitation moves (how you cut off a long answer, how you park a question) rather than segments of your own speech.


**fallback_if_it_fails**

On stage, when a drilled unit does not come out as drilled: do not restart it. A restarted opening is worse than an imperfect one, because it tells the room you are working from a script and lost your place. Say the next true sentence and continue — the structure is what carries you, and the structure is intact. Specifically for the demo handover, if the recording does not start: keep talking, say what the room is about to see, give it one more attempt while narrating, and if it still fails, switch to the fallback still image and describe what happened — you have the narration drilled, which is most of what the segment was for. If the close comes out wrong, stop, take a breath, and deliver the last sentence alone; the final sentence is the only part that has to be exact. In preparation, if a unit will not stabilise after 10 repetitions, the unit is wrong — it is usually too long or the content itself is unclear; shorten it or rewrite it rather than drilling harder.


**works_signal**

In practice: the last three repetitions are near-identical without conscious effort; you can start the unit from three different cues; the stopwatch reading stops moving. On stage: the opening arrives without a search pause and you can see faces come up from phones during it; the demo starts while you are still speaking rather than in silence; after the demo exit sentence, people look back at you rather than continuing to stare at the screen; the close lands and there is a beat of silence before applause rather than an uncertain overlap. Failure signals in the room: a filler word at a boundary ('tak więc… no dobra…'), your own eyes going to the screen to find out what is next, dead air longer than two seconds at a handover, or an audible restart of a sentence in the first minute.


**dependencies_conflicts**

Prerequisites: at least one full timed run, which is what identifies which joints leak (drills without that diagnosis are guesses); modular time blocking, since blocks are what create the drillable boundaries; and, for the opening drill, a word-for-word scripted opening — you cannot drill a unit that has no fixed wording. Sits inside: the rehearsal ladder, as the between-rungs work and as the implementation of 'isolate the difficult section'. Feeds: the on-stage cut list (a drilled boundary is a boundary you can enter cleanly after cutting the block before it), talk-to-content reuse (drilled units are clip-shaped), and the Q&A protocol (the answer to one hard question is a drillable unit). Conflicts: (a) drills versus full runs for the same finite time — the resolution is diagnose with runs, treat with drills, and never let drills replace the final timed run; (b) over-drilled polish versus a conversational register, which creates an audible seam; (c) the part-task reintegration risk — parts trained separately must be re-embedded or transfer suffers; (d) drilling the demo handover requires the real technical setup, which conflicts with the drill's chief advantage of fitting into a 15-minute gap.

### Tooling


**tool_support**

Phone for recording and immediate playback; stopwatch for unit duration and for dead air at handovers; the real hardware for any drill involving a technical trigger — the laptop, the clicker, the HDMI path and speakers; a written card with the unit's target and criterion so judgement stays binary; transcription (Whisper or similar) over the drill audio when counting filler words; an LLM to critique a drilled unit's transcript against a stated criterion and to generate the hard-question units worth drilling; a short standing list of recurring units kept with the talk brief so drilling does not restart from scratch each talk.


**marp_implementation**

Mark drillable joints in the source so they survive into the next talk: a `<!-- DRILL: demo entry, target <1s dead air -->` presenter-note comment on the slide that carries the handover, and the fixed transition sentence written verbatim in the same comment so it is drilled and delivered identically. Keep the scripted opening in a presenter-note comment on slide 1. Because a drill needs to start from an arbitrary slide, use Marp's HTML export and deep-link to a slide number (`#7`) or use presenter mode's slide navigation to jump straight to the joint rather than clicking through from the start — this is the single Marp affordance that makes drilling practical. Give demo slides a distinct `_class` so the handover slides are visually identifiable in the deck outline.


**survives_pdf_export**

partially. The drilled skill survives everything — it is in the speaker. The scaffolding does not: presenter-note comments carrying the fixed transition sentences and drill targets exist only in HTML and Marp presenter mode, and any fragment-based staging inside a drilled block is flattened in PDF, which changes the unit you drilled if you drilled it against the HTML build. Practical consequence: drill the demo handover at least once against the PDF version, since the PDF is the artefact most likely to be running when something has already gone wrong.

### Effort and payoff


**prep_effort**  
<sub>low | medium | high — one-off setup cost</sub>

low — 10 to 20 minutes per unit, no setup beyond a phone and a stopwatch, and the units fit into fragments of a working day. The only unit with real setup cost is the demo handover, which needs the full hardware path assembled.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Fast and narrow, which is its appeal days before a talk. One 15-minute opening drill reliably converts a fragile first 90 seconds into a stable one — the single change most visible to an audience and most likely to prevent the documented NCP4 failure. The demo-handover drill removes several seconds of dead air and, more importantly, makes the recording land as evidence instead of as filler. Do not expect it to make you a better speaker in general: the meta-analytic evidence for professional domains says structured practice explains very little of the between-person variance. Expect it to remove specific named defects, which is exactly what the gap list asks for.


**needs_organiser_agreement**

no for the drills themselves. Adjacent facts worth having in advance, because they change what you drill: whether room audio is available for the recorded demo and through what connector, whether you can enter the room before the session to run the demo joint once in situ, whether a confidence monitor exists and whether it shows presenter notes or a mirror of the slides, and the microphone type — a handheld microphone makes the clicker-plus-laptop demo trigger a two-hand problem, and that is a drill you would rather discover in advance than on stage.


**priority**

high — third in the practice group after the timed dry run and the rehearsal ladder, but the highest-leverage item per minute spent, and the one that most directly addresses the named opening gap. It is executable in fragments, it needs no one else's time, and its two flagship units for 2026-09-12 (the first 90 seconds and the recorded-demo handover) map onto two of the six named gaps. If only 45 minutes of preparation remain, spend them here.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

- https://journals.sagepub.com/doi/10.1177/001872088502700304
- https://www.semanticscholar.org/paper/Part-Task-Training-for-Tracking-and-Manual-Control-Wightman-Lintern/618c5311dd0fe7edf553f6c816de4672c95d0a75
- https://hhs.purdue.edu/skill-learning-and-performance-lab/wp-content/uploads/sites/43/2024/08/macnamara-et-al-2014-deliberate-practice-and-performance-in-music-games-sports-education-and-professions-a-meta-analysis.pdf
- https://journals.sagepub.com/doi/abs/10.1177/0956797614535810
- https://www.researchgate.net/publication/236926003_Effectiveness_of_Part-Task_Training_and_Increasing-Difficulty_Training_Strategies_A_Meta-Analysis_Approach
- https://tressacademic.com/rehearse-presentation/
- https://speaking.io/prep/practicing-it/
- https://www.moxieinstitute.com/how-to-memorize-speech/
- https://www.duarte.com/blog/why-and-how-to-care-about-the-first-30-seconds-of-your-talk/
- https://files.eric.ed.gov/fulltext/ED470148.pdf

### Not established by this research

- `origin_author`
- `origin_year`
- `pl_language_notes`


---

## Modular time blocking and talklets

> Build the talk as a chain of short, semi-independent blocks that each open and close on their own, so any block can be cut without breaking the argument and every block boundary is a free re-entry point for a listener who drifted.

### What it is

- **category** — narrative

- **talk_moment** — before arriving (structure decided at deck-build time) → middle blocks (where it operates on stage)

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

Modularity buys four distinct things, and they are worth separating because only two of them have evidence behind them. (1) Cuttability: a block with its own opening claim and closing takeaway is a unit that can be removed without leaving a dangling reference, which is the structural precondition for cutting under time pressure rather than accelerating. This is a design property, not a psychological one, and it is the strongest reason to do it. (2) Re-entry: a listener whose attention lapsed — which happens continuously and unpredictably, not on a schedule — can rejoin at the next block opening, because each block restates its own premise. Without boundaries, a lapse at minute nine costs the rest of the talk. (3) Segmentation of processing: Mayer's segmenting principle finds better learning when material arrives in segments rather than as a continuous unit, with a median effect size around 0.79-0.98 across experimental tests — but the principle as tested is learner-paced, and a live talk cannot be learner-paced, so this supports the shape of the design without licensing a claim about the size of the benefit on stage. (4) State change: block boundaries are the natural place to change something — voice, medium, direction of address, from slide to demo to question — and it is the state change, not any fixed clock interval, that re-wakes a tired room.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Write the talk as a list of block titles before writing any slides — each title stated as a claim, not a topic ('Agenci nie halucynują, tylko wykonują' rather than 'Failure modes'). 2. Size the blocks to the slot: for 25 minutes, six or seven blocks of about three minutes plus a 90-second opening and a 90-second close. Treat three minutes as a design convention for cuttability, not as an attention-span figure — see myth_status. 3. Give every block the same internal shape: claim (10-15 s) → evidence, demo or example (2 min) → takeaway sentence (10 s) → transition (5 s). The takeaway is what makes the block survive being the only one someone hears. 4. Make every block's dependencies explicit in one line: which earlier block it needs. Any block with zero dependencies is a candidate cut; any block that three others depend on is structural and never cut. 5. Vary the medium across adjacent blocks deliberately — diagram, then recorded demo, then numbers, then story — so that the boundaries carry a state change rather than only a topic change. 6. Write the transitions as sentences and rehearse them, because block boundaries are where talks fall apart and where a cut has to be executed live and invisibly. 7. Put the block's target clock time in the presenter notes at its first slide, which turns the modular structure into the checkpoint system used by the on-stage time-control item. 8. Rehearse blocks individually (modular drills) as well as end to end; a block is a rehearsable unit of three minutes, which is what makes targeted practice affordable. 9. Test cuttability once before the event: deliver the talk aloud with blocks four and six removed and check that nothing dangles. If something does, the dependency line in step 4 was wrong.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Any talk of 20 minutes or more, and specifically: slots at risk of being shortened, late or post-lunch slots where attention has to be re-won repeatedly, talks that will be mined for clips afterwards, and any talk you intend to deliver more than once at different lengths. Least useful in a talk under ten minutes (which is already one block), in a single-argument keynote whose whole force comes from an unbroken build, and in a workshop, where the natural unit is the exercise rather than the block.

### Evidence


**evidence_level**

Split, and it matters. The design argument (cuttability, re-entry, rehearsability) is practitioner consensus and essentially self-evident engineering — no study needed and none exists. The learning argument rests on controlled studies: Mayer's segmenting principle was supported in 10 of 10 experimental tests with a median effect size near 0.79 (some summaries report 0.98 from an earlier, smaller set), and its stated boundary conditions are complex material, fast pace and inexperienced learners. The transfer to conference talks is an extrapolation, because those experiments segmented learner-paced multimedia lessons, not live speech. The specific figure of three minutes has no empirical basis at all: single-expert claim at best.

- **myth_status** — sound practice with a wrong justification


**contested_claims**

1) The ten-minute attention rule. Modular structure is frequently justified with 'attention drops after ten minutes, so change something'. Wilson & Korn (2007, Teaching of Psychology) reviewed note-taking studies, observation, self-report and physiological measures and found the research behind the 10-15 minute estimate provides little support for it; Bunce et al. (2010), measuring attention with clickers, found reported lapses were mostly a minute or less and did not follow a clean decay curve. Use the segmenting and cuttability arguments; do not cite the ten-minute rule. 2) Talklet is not this. The Presentation Patterns glossary defines Talklet as: 'Instead of doing an hour-long presentation, do three semirelated 20-minute talks.' That is a coarse-grained pattern for long slots — three 20-minute units, not seven 3-minute ones. Citing Ford et al. for a 3-minute block structure would misattribute the pattern; the fine-grained version is a different, unnamed technique that shares the motivation. 3) 'Segmenting is proven for presentations.' It is proven for learner-paced multimedia instruction; a live talk removes learner pacing, which is the mechanism the studies manipulated. 4) 'Every block needs a slide transition or an animation.' Nothing supports this; the boundary is carried by what you say and by the change of medium.


**key_sources**

1) Presentation Patterns glossary (Ford, McCullough, Schutta, 2012) — Talklet: 'Instead of doing an hour-long presentation, do three semirelated 20-minute talks.'; Breadcrumbs: 'Create an agenda trail throughout your presentation to provide context on progress.' The two patterns that bracket this item. 2) Mayer, R. E., segmenting principle (Multimedia Learning, and Cambridge Handbook of Multimedia Learning chapter on managing essential processing) — better learning from learner-paced segments than from a continuous unit; supported in 10 of 10 tests, median effect size around 0.79, strongest for complex, fast-paced material and inexperienced learners. 3) Wilson, K. & Korn, J. H. (2007), 'Attention During Lectures: Beyond Ten Minutes', Teaching of Psychology 34(2), 84-89 — the evidence behind the 10-15 minute attention claim does not support it. 4) Bunce, D. M., Flens, E. A. & Neiles, K. Y. (2010), 'How Long Can Students Pay Attention in Class?', Journal of Chemical Education — clicker-measured attention lapses were typically a minute or less, not a scheduled collapse.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

1) Fragmentation: a talk chopped into seven self-contained units can lose the through-line and read as a list, which is exactly the failure the Narrative Arc pattern warns against — the mitigation is that blocks must be links in one argument, not seven mini-talks. 2) Repetition cost: each block's own opening and closing spends 20-25 seconds on framing, so seven blocks cost around 2.5 minutes of a 25-minute slot in structure alone. In a tight slot that is real content foregone. 3) Over-engineering: for an experienced speaker with a strong narrative, the modular scaffolding can flatten delivery into a mechanical rhythm the audience begins to hear. 4) The evidence for the learning benefit does not hold the pace constant with a live speaker, and the boundary conditions (inexperienced learners) do not describe a room of senior engineers. 5) Blocks make cutting easy, which can encourage cutting as a habit instead of fixing an over-long talk at source.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

This is the load-bearing structure of the whole slot, not a technique used at one moment. Layout for BB4IT's 25+5: opening 1:30 → B1 recorded demo, 4 min (deliberately longer, it is the CORE asset) → B2 failure taxonomy, 3 min → B3 cost numbers, 3 min → B4 guardrail architecture, 3 min → B5 what we got wrong first, 3 min → B6 Monday checklist, 3 min → close 1:30. Total 22:00, inside the 85% target of 21:15 with a 45-second margin, with B3 and B5 tagged as cut candidates. Each block starts with a claim slide and ends with one spoken takeaway sentence. The medium alternates: recording, diagram, numbers, diagram, story, list.


**time_budget_min**

0 net as a technique — it does not consume stage time, it partitions it. The internal overhead of block openings and closings is roughly 20-25 seconds per block, about 2.5 minutes across seven blocks, and that overhead is what buys cuttability and re-entry.


**audience_change**

A listener who drops out at minute nine still leaves with the takeaways of blocks four, five and six, instead of with nothing after minute nine. In a tired room that is the difference between a talk remembered as one point and a talk remembered as none. Secondary: the audience can tell where they are, which lowers the effort of staying, and the Monday-morning takeaways survive as discrete, quotable sentences.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

timing — directly and primarily: blocks are the unit that gets cut, so this item is the structural precondition for both the expansion-joints item and the live cut list, and therefore for the recurring 40-minutes-of-material problem. late_slot — directly: block boundaries are where state changes go, which is the operable half of re-waking a tired room. reuse — directly and underrated: a three-minute block with its own opening and closing is already a clip, a carousel or a short post, so modular design does most of the work of the talk-to-content pipeline before the talk is even delivered. opening — indirect (the opening is itself a block with the same shape).


**minimal_2h_version**

Ninety minutes, and it is a restructuring pass rather than a rewrite. (1) 20 min — list the blocks already implicit in the existing deck and give each a claim-style title; most decks have this structure latent and undeclared. (2) 20 min — write one takeaway sentence per block and put it in the presenter notes at the block's last slide. This alone captures much of the re-entry benefit. (3) 15 min — write the dependency line for each block and mark two blocks as cut candidates. (4) 20 min — write and say aloud the six transitions. (5) 15 min — one timed run of blocks one and two only, to check the three-minute assumption against reality. If only thirty minutes exist: write the takeaway sentences and the transitions, and skip the rest — those two are 80% of the value.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

Agentic-AI talk, block B2 'Agenci nie halucynują — wykonują dokładnie to, o co prosisz', 3 minutes. [0:00 claim] 'Cztery z pięciu awarii, które zebraliśmy, to nie był zły model. To była zła instrukcja.' [0:15 evidence] Three real cases from the incident log, thirty seconds each, one slide each, no bullet lists — a screenshot of the instruction and the resulting action. [2:15 takeaway] 'Jedno zdanie z tego bloku: jeśli agent zrobił coś głupiego, zacznijcie od czytania promptu, nie logów modelu.' [2:45 transition] 'To kosztuje. Konkretnie — ile, w liczbach.' [3:00 → B3]. Properties: no dependency on B1 beyond a shared vocabulary, so B2 is cuttable; the takeaway sentence stands alone as a LinkedIn post; the medium (screenshots) differs from B1 (video) and B3 (numbers), so the boundary carries a state change; the block was rehearsed four times as a standalone unit and lands at 2:55-3:05.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

(1) Change the authoring habit first: start every new deck as a list of claim-titled blocks in markdown before opening any slide tool — this is Fourthought applied to structure, and it is where the skill actually lives. (2) Practise block-sized delivery rather than whole talks: three minutes is short enough to rehearse ten times in half an hour, which is how transitions and takeaways get fluent. (3) After each talk, check the recording for where you actually crossed boundaries versus where the deck said you would; drift here predicts timing failures. (4) Reuse discipline: within a week of each talk, cut two blocks into standalone clips — the act of cutting them reveals immediately which blocks were genuinely self-contained and which leaned on context. (5) Over several talks, build a personal library of reusable blocks; a speaker with fifteen well-formed blocks can assemble a new talk in an afternoon, which is the compounding payoff.


**drill**

The block-integrity drill, 20 minutes. Input: one existing block of your current deck, a timer, a phone camera. Action: (a) 3 min — write the block's claim sentence and takeaway sentence on paper, without looking at the slides; (b) 12 min — deliver the block standing, timed, four times, once with the slides hidden; (c) 5 min — record the fourth run and check three things: did it start with a claim, did it end with a takeaway, did it land within 15 seconds of three minutes. Observable output: a recorded three-minute unit with an explicit opening claim and closing takeaway, and a written note of the actual duration. Success criterion: someone who watches only this recording, with no other context, can state the block's point.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

One block — about three minutes, six to ten slides. This is the central practice unit of the whole preparation system: small enough to repeat ten times, large enough to contain a real transition, and identical to the unit used for cutting, for clipping and for checkpointing time.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

Timer at block boundaries — the fastest and most useful loop in the entire preparation, because a block that runs 30 seconds long in rehearsal will run 60 seconds long on stage and the error compounds. Recording: check whether each boundary is audible without the slides, which is the test of whether the transitions are real. On stage: whether you can cut a block live without stumbling, which only shows up under actual pressure. Afterwards: whether a block clipped out of the recording makes sense with no lead-in — the strictest test of block independence.


**measurable_kpi**

(a) Per-block duration variance across rehearsals: target under 15 seconds. (b) Number of blocks with a written one-sentence takeaway: target all of them. (c) Number of zero-dependency blocks: target at least two, which is the cut list. (d) Cumulative clock time at each boundary versus the planned checkpoint. (e) Post-talk: number of blocks that could be clipped standalone from the recording without editing in context.

### Online and recorded


**online_variant**

More valuable online, not less. With no room energy and a one-click exit, block boundaries are the moments to change something the viewer can perceive — screen share to face, slide to demo, monologue to a chat prompt. Shorten the blocks to two or two and a half minutes and make the takeaway sentences more explicit, because a distracted remote viewer needs a louder signal to re-enter than a listener in a room does. The chat is also a genuine re-entry mechanism unavailable in a room: dropping the takeaway sentence into chat at each boundary gives a returning viewer a text trail, which is a real implementation of Breadcrumbs.


**recorded_variant**

The recording is where modular structure pays twice. Block boundaries become YouTube chapters directly — the claim titles are the chapter names, and no extra work is needed if the titles are claims rather than topics. A three-minute block with its own opening and closing is a publishable clip with a hard cut at both ends, which is exactly the reuse workflow the speaker already runs. Two cautions: takeaway sentences that refer to the room ('jak państwo widzicie') do not survive clipping, so phrase them self-containedly; and if a block was cut live, the deck's PDF still contains its slides, so the published deck and the published video will disagree unless one of them is edited.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

1) Mini-talks with no through-line: seven self-contained blocks that never assemble into an argument — the audience leaves with a list instead of a point. 2) Cosmetic modularity: section-divider slides with no change in what is said, so the boundaries exist in the deck and not in the delivery. 3) Uniform-rhythm delivery: every block the same length, the same medium and the same cadence, which produces a lulling metronome exactly when a state change was the goal. 4) Justifying the structure with the ten-minute attention rule, in the deck or aloud — a debunked claim used to sell a sound design. 5) Padding blocks to equal length (Cookie Cutter in structural form) — a good block that takes 100 seconds should stay 100 seconds. 6) Numbering blocks on screen while the count no longer matches the delivered talk after a live cut.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Writing topic titles instead of claim titles, which makes the block boundary invisible to the audience. Omitting the takeaway sentence — the single most common omission and the one that costs re-entry. Not writing transitions, so boundaries turn into 'yyy… dobra, to teraz…'. Overestimating what fits in three minutes: three minutes is roughly 350-400 Polish words, and most speakers plan five minutes of content into it. Making every block depend on the previous one, which produces the shape of modularity with none of the cuttability. Rehearsing only end-to-end, so no individual boundary ever gets practised.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

A talk under ten minutes, which is one block with an opening. A single-thread narrative keynote where the effect depends on an unbroken build and boundaries would deflate the tension. A workshop, where the exercise is the unit and imposing a second block structure duplicates it. A demo-centred session where one continuous 15-minute walkthrough is the content — although even there, marking internal checkpoints aloud helps. And do not force a talk into blocks of equal length when the material has a natural asymmetry, which is the usual case when one demo carries the talk.


**fallback_if_it_fails**

If you lose your place at a boundary, do not scroll back through slides: say the takeaway of the block you just finished — it is a memorised sentence and it always exists — and then advance. If a block runs long, do not compress the next one; cut a zero-dependency block instead, which is the whole reason the dependency lines were written. If a block lands flat (no reaction, no questions later), skip its planned callback later in the talk rather than referring back to material that did not land. If the deck fails entirely, the block list is the talk: six claims plus six takeaways is a deliverable 20-minute talk with no slides at all, which is the same asset the no-slides plan needs.


**works_signal**

Positive at a boundary: heads come up as the medium changes, note-taking spikes at takeaway sentences (in a technical room, phones coming up to photograph a slide is the takeaway signal), and questions afterwards quote block takeaways almost verbatim. Negative: the room's posture does not change across a boundary, meaning the state change was announced but not delivered; people ask in Q&A about something a block already covered, meaning the block's claim never registered; and rising phone use in the second half of a block, which usually indicates the block ran past its natural length rather than that the topic was wrong.


**dependencies_conflicts**

Prerequisite for: expansion joints (a cut point requires a block boundary), on-stage time control (checkpoints are placed at boundaries), talk-to-content reuse (a clip is a block). Pairs with: Breadcrumbs or a progress cue, which makes the boundaries visible; and with the bad-slot state-change item, which supplies what to change at each boundary. Conflicts: (a) with a single continuous live demo, which cannot be subdivided without artificial pauses — the recorded-demo route resolves this, since a recording can be stopped at a boundary; (b) with narrative build-up, where a boundary discharges tension you wanted to accumulate; (c) with a fixed animation-heavy deck, since Marp fragments do not survive PDF export and boundary-marking should therefore not depend on them; (d) with very tight slots, where the per-block framing overhead is a real cost.

### Tooling


**tool_support**

Markdown as the authoring format, because a block is a contiguous range of text and blocks can be reordered by moving lines — this is the concrete advantage of the Marp pipeline over a slide GUI for this specific technique. A timer with lap or split functionality for per-block timing (a phone stopwatch's lap button is sufficient). Presenter notes for the takeaway sentence and the checkpoint time. For the reuse side, the block list doubles as the chapter list for YouTube and the outline for carousels. An LLM is useful for one job here: given a deck outline, propose which blocks are zero-dependency — it is decent at spotting undeclared cross-references.


**marp_implementation**

Blocks map to markdown regions separated by `---`, with the boundary marked in a comment for tooling: `<!-- BLOCK B2: agenci nie halucynują | 3:00 | cut-candidate: no | depends: B1 -->` at the block's first slide, and `<!-- TAKEAWAY: jeśli agent zrobił coś głupiego, czytaj prompt -->` at its last. Use a per-block class for the claim slide (`<!-- _class: claim -->`) so block openings are visually distinct in the theme without any animation. Because each block is a contiguous markdown range, cutting one is a delete of that range — which is what makes the expansion-joints item mechanical rather than fiddly. Keep `paginate: true` globally so slide numbers give you a jump target when cutting live.


**survives_pdf_export**

yes — block structure is carried by slide sequence, claim slides and spoken transitions, all of which survive PDF export unchanged. Only the presenter-note metadata (checkpoint times, takeaways, dependency lines) is lost in a standard `marp --pdf`, and only the speaker needs those. This is a deliberate advantage over animation-based structure signalling, which does not survive.

### Effort and payoff


**prep_effort**  
<sub>low | medium | high — one-off setup cost</sub>

medium — 45-60 minutes of structural work per talk the first few times, dropping sharply once decks are authored this way by default. The cost is front-loaded into outlining, where it displaces less useful work.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Visible on the first talk in one specific way: cutting becomes possible without rushing, so a shortened slot stops being a crisis. Within two or three talks: per-block timing stabilises, which is what makes the 85% rehearsal target achievable rather than aspirational. Over a few months: a library of reusable blocks, faster deck assembly, and a clip pipeline that costs almost nothing because the clips already exist as designed units.


**needs_organiser_agreement**

no — entirely a design decision. One adjacent thing worth confirming: whether the organiser wants chapters or timestamps for the recording, since the block list supplies them for free if asked before publication.


**priority**

high — it is the structural prerequisite for the timing gap (the recurring 40-in-25 problem), it can be applied to the existing BB4IT deck as a restructuring pass in about 90 minutes, and it simultaneously serves the late-slot and reuse gaps. Lower than the scripted opening only because it is more work and its benefit is less immediately visible in the room.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

- https://presentationpatterns.com/glossary/
- https://www.cambridge.org/core/books/abs/multimedia-learning/segmenting-principle/37240877DDA0362355ADB39936027982
- https://www.cambridge.org/core/books/abs/cambridge-handbook-of-multimedia-learning/principles-for-managing-essential-processing-in-multimedia-learning-segmenting-pretraining-and-modality-principles/DD24C2F48B9B1277CE59F78276110258
- https://journals.sagepub.com/doi/10.1080/00986280701291291
- https://www.researchgate.net/publication/231268772_How_Long_Can_Students_Pay_Attention_in_Class_A_Study_of_Student_Attention_Decline_Using_Clickers
- https://www.morling.dev/blog/ten-tips-make-conference-talks-suck-less/
- https://nealford.com/books/presentationpatterns.html
- https://www.facultyfocus.com/articles/course-design-ideas/student-attention-spans/

### Not established by this research

- `origin_author`
- `origin_year`
- `application_pl_talk`
- `pl_language_notes`
- `time_cost`


---

## On-stage time control

> Put target clock times in the presenter notes at block boundaries, look at one clock only at those boundaries, and act on a deviation immediately by using the pre-written cut list rather than by speeding up.

### What it is

- **category** — delivery

- **talk_moment** — before arriving (checkpoints computed and written) → middle blocks (executed at every boundary) → last 90 seconds (the decision to close on time)

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

Overrun is not caused by not knowing the time; it is caused by finding out too late to do anything cheap about it. A speaker who checks the clock at minute 20 of a 25-minute slot with three blocks left has only expensive options: compress everything, cut the close, or run over. A speaker who checks at minute 8 and finds a 60-second deficit has cheap options: drop one zero-dependency block and continue at normal pace. Checkpoints work by converting an accumulating, invisible error into a series of small, visible ones at moments when correction is still cheap. There are two supporting mechanisms. (1) Attention offloading: under arousal, tracking elapsed time in your head is an extra task that degrades everything else and is performed badly; a checkpoint written next to the slide removes the arithmetic ('am I ahead or behind?' becomes 'is the number on screen bigger than the number in my notes?'). (2) Decision pre-commitment: the cut decision was made calmly days earlier, so on stage it is executed, not deliberated — the same mechanism that makes expansion joints work. The characteristic failure this prevents is not overrunning by five minutes, it is delivering the last three minutes — the conclusion, the takeaways, the call to action — at double speed, which is exactly the material the recency effect would otherwise have made the most memorable.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Decide the target finish time first: 85% of the slot as a working default (21 minutes of a 25-minute slot), verified against your own recordings rather than adopted from a blog. 2. Divide the target across blocks and compute cumulative times, not durations — 'B3 starts at 8:30' is actionable on stage, 'B3 lasts 3 minutes' is not. 3. Write the cumulative time in the presenter notes at the first slide of every block, in the same format each time so it is findable at a glance. 4. Decide where the clock lives before you go on: presenter view on the laptop, a phone face-up on the lectern, or the stage timer — and confirm it is running and visible during the tech check, not at 0:00. 5. Define the tolerance band: ±30 seconds is normal drift, requiring no action; more than 60 seconds behind at any checkpoint triggers the cut list. Without a stated threshold you will either ignore the clock or over-correct on noise. 6. Order the cut list in advance (from the expansion-joints item) and put it on the same card as the opening script, with slide numbers. 7. Look at the clock only at boundaries. Continuous clock-watching is visible to the audience, raises your own arousal, and produces mid-block acceleration, which is the failure mode you are trying to avoid. 8. On a trigger, cut at the next boundary, not immediately — you finish the current block including its takeaway, then use the covering transition. 9. Protect the last two minutes absolutely: the close begins at its checkpoint regardless of what remains undelivered. 10. After the talk, write down the actual times at each checkpoint from the recording and compare with the plan — this is what calibrates the next talk's estimates.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Every talk with a hard stop, and especially: conference slots with a following speaker, any talk containing a demo (the single largest source of time variance), a slot late in a day that has already slipped, and any talk delivered for the first time. Less necessary in an open-ended internal session, a workshop with a flexible block structure, or a talk you have delivered ten times and whose timing you know from experience — although even then the checkpoints cost nothing to keep.

### Evidence


**evidence_level**

Practitioner consensus, with no controlled study. The checkpoint mechanism is standard advice across conference-speaking guides, academic presentation guides and presenter-timer documentation, and is recommended in essentially identical form by speakers with very different styles — convergence is the strongest evidence available here. The '85% of the slot' target is a convention, not a finding: sources give 80%, 85% and 90% with no empirical basis. The claim that live delivery runs longer than rehearsal is universal practitioner report and matches the mechanism (audience reactions, technical friction, slower speech under arousal), but no measured effect size was found.


**myth_status**

sound practice with a wrong justification — the practice is solid; the specific numbers attached to it (85%, 'two minutes per slide', 'people speak 130-150 wpm') are conventions repeated without sources, and the words-per-minute figure in particular does not transfer to Polish.


**contested_claims**

1) 'Two minutes per slide' — a widely repeated planning heuristic with no basis; slide count is unrelated to speaking time in a deck that mixes a four-minute video with ten-second claim slides. Time blocks, not slides. 2) '130-150 words per minute' — an English-language convention, and one of the known unknowns of this research: no reliable Polish speaking-rate figure was found, so derive your own from a recording instead of planning a Polish talk on an English number. 3) 'Rehearse to 85%' — direction defensible, exact figure arbitrary (see evidence_level). 4) 'Keep an eye on the clock throughout' — common advice that is actively harmful in the form usually given; continuous monitoring is visible to the room and raises arousal, which is why the checkpoint form exists. 5) 'If you are behind, speak faster' — the Shortchanged antipattern; acceleration destroys pauses and takeaways, which is where the comprehension lives.


**key_sources**

1) Presentation Patterns glossary (Ford, McCullough, Schutta, 2012) — Shortchanged (antipattern): 'Dealing with a last-minute reduction in presentation time is unfortunately one of the skills frequent presenters have to hone'; Expansion Joints (pattern): building for one and only one length is a missed opportunity. The vocabulary for what time control is for. 2) Morling, G., 'Ten Tips to Make Conference Talks Suck Less' — three full rehearsals of new material, noting the timestamps of transitions (especially demos) to find what needs trimming, and the observation that both overrunning and finishing twenty minutes early signal inadequate preparation. 3) Conway, D., 'Instantly Better Presentations' (YOW! 2014) — practise live at least three times before a real audience; explicit signalling systems (his blue-slide convention for questions) as a way of pre-deciding on-stage rules. 4) Conference-speaking guidance on checkpoints and cut lists: mark the timestamp you should reach at the end of each section, know in advance which points you will cut, cut examples and evidence first, and never cut the conclusion.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

1) Clock anxiety: for a speaker prone to nerves, the timer can become the focus and produce a rushed, mechanical delivery in which time is managed and nothing else is — a real risk, mitigated by the boundaries-only rule and by a tolerance band that permits drift. 2) Checkpoints assume the plan was right: if the block estimates were wrong, checkpoints faithfully report a deficit that has nothing to do with delivery, and a speaker who cuts on a bad estimate loses content unnecessarily. Only a timed rehearsal fixes this. 3) Over-correction: cutting on a 30-second deficit at minute five, when audience reactions later in the talk may return that time, is a common and unrecoverable error. 4) Some talks legitimately breathe: a strong Q&A-style exchange or a room that is genuinely engaged can be worth a small overrun in some formats — although not in a conference slot with a following speaker. 5) The whole apparatus is useless without a reliable clock, and the clock is the thing most likely to be missing or wrong on the day.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

Concrete checkpoint table for the BB4IT 25+5 slot, targeting a 21:30 finish: 0:00 start → 1:30 opening ends, first content slide up → 5:30 demo block ends → 8:30 failure taxonomy ends → 11:30 cost numbers end → 14:30 architecture ends → 17:30 'what we got wrong' ends → 20:00 Monday checklist ends → 20:00-21:30 close → 21:30 hand over to Q&A. Written into presenter notes as a single token per block first slide (e.g. `<!-- @8:30 -->`). Trigger rule: more than 60 seconds behind at 8:30 or 14:30 → drop the 'what we got wrong' block at the next boundary. The clock is the phone, face up, at the lectern, started at the first word — not the venue clock, whose zero point you do not control.


**time_budget_min**

0.2 on stage — six or seven glances of about two seconds each. The cost is in preparation and in discipline, not in stage time; and it returns time, since it is the mechanism that keeps the close from being compressed.


**audience_change**

The audience gets the ending. That is the whole visible effect: the last two minutes are delivered at normal pace with pauses, so the takeaways and the call to action land in the recency window instead of being rushed. Secondarily, they never see the tells of a speaker who has lost the plot on time — the repeated glances, the visible skipping, the 'nie zdążę tego pokazać'.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

timing — directly and primarily; this is the live instrument for the named gap, and it is the item that converts the expansion-joints design into behaviour on stage. late_slot — directly: a last slot on a slipped schedule is where cutting is most likely to be needed and where finishing on time has the most social value, since the room and the organisers both want to leave. qa — indirect but real: protecting the last two minutes is what keeps the 5-minute Q&A from being eaten, and a Q&A that starts late is a Q&A that gets one question. demo_risk — indirect: the demo block is where time variance concentrates, so the checkpoint immediately after it is the most informative one in the talk.


**minimal_2h_version**

Forty-five minutes, and it works even without a full rehearsal. (1) 10 min — compute the checkpoint table: target 85% of the slot, cumulative times per block. (2) 10 min — write one time token into the presenter notes at each block's first slide. (3) 5 min — write the trigger rule and the ordered cut list on the opening card. (4) 15 min — one timed partial run: the opening plus the first two blocks, to check whether the estimates are anywhere near reality; if the first two blocks are already 60 seconds over, every later estimate is wrong and the whole table shifts. (5) 5 min — decide and physically set up where the clock will be. If only fifteen minutes exist: write the cumulative checkpoint times and the single trigger rule, and put the phone stopwatch where you can see it. That alone captures most of the benefit.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

BB4IT, 14:50 slot that starts at 14:53 because the previous session overran. Preparation: presenter notes carry `@1:30 @5:30 @8:30 @11:30 @14:30 @17:30 @20:00`; the card reads 'TRIGGER: >60s late at 8:30 or 14:30 → cut B5 ("To domyka architekturę. Konkret na poniedziałek."), slides 22-27'. On stage: stopwatch started at the first word. At the 5:30 checkpoint the clock reads 6:40 — the recorded demo ran long because the room reacted to it, which is a good problem. That is 70 seconds behind, above threshold. The speaker does not accelerate and does not cut mid-block; at the end of the failure-taxonomy block (planned 8:30, actual 9:35) the cut is executed at the boundary: B5 is skipped with its covering transition, recovering three minutes. The next checkpoint at 14:30 reads 13:50 — 40 seconds ahead, inside the tolerance band, so no further action. The close begins at 20:10 and the talk ends at 21:40, with Q&A intact. Total on-stage time spent on time management: about fifteen seconds of glances and one decision.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

(1) Time every rehearsal, always, and record the checkpoint times rather than only the total — a total tells you that you are over, checkpoints tell you where. (2) Build a personal correction factor: compare rehearsal times with delivered times from recordings across three or four talks; most speakers have a stable ratio (live typically runs longer), and knowing yours is more useful than any generic percentage. (3) Practise the cut itself under mild pressure — run a rehearsal in which you deliberately start 90 seconds behind and have to use the cut list; this is the only way the on-stage decision becomes cheap. (4) Practise the numeric sentences of your talk separately, because they are what breaks first under acceleration. (5) After each talk, extract the real checkpoint times from the recording and update the block estimates; two or three iterations make estimates accurate enough that cutting is rarely needed.


**drill**

The deficit drill, 20 minutes. Input: your deck, a stopwatch, the ordered cut list. Action: (a) 2 min — start the stopwatch at 1:30 instead of 0:00, simulating a 90-second deficit; (b) 13 min — deliver blocks one to four aloud, standing, checking the clock only at boundaries, and execute the cut list where the trigger fires; (c) 5 min — write down what actually happened: at which boundary you noticed, what you cut, and whether you accelerated anyway. Observable output: a completed run in which at least one planned cut was executed at a boundary, and a written note of the checkpoint times. Success criterion: you finished within 30 seconds of the target and did not increase your speaking rate — check the second half of the recording against the first if you are not sure.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

The boundary — the two-second glance, the comparison and the go/cut decision. It is a decision, not a passage of speech, and it can be rehearsed dozens of times in a single run-through. The secondary unit is one block, timed.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

Preparation: 30-45 minutes per talk (checkpoint table, notes tokens, trigger rule, cut list), of which most is shared with the expansion-joints work. Rehearsal: no additional time — it rides on the timed run-throughs you already need. On the day: five minutes to set up and verify the clock. Ongoing: about ten minutes per subsequent delivery of the same talk.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

During the talk: the checkpoint comparison itself, which is the fastest loop available and the only one that permits correction. After the talk: the recording gives the real checkpoint times, and the difference between planned and actual is the single most useful preparation datum you can collect. Slower loop: the ratio between rehearsed and delivered duration across several talks, which turns estimation from guesswork into arithmetic. A moderator's time signal is a feedback loop of last resort — by the time it arrives, cheap options are gone.


**measurable_kpi**

(a) Total delivered duration against the 85% target — the headline number. (b) Absolute deviation at each checkpoint (mean and maximum): target under 30 seconds mean. (c) Words per minute in the final third versus the first third of the recording: a rise over roughly 10% means the close was compressed. (d) Number of clock glances visible in the recording: target under eight and all at boundaries. (e) Seconds of Q&A time actually available versus scheduled. (f) Number of cut-list items used versus improvised cuts: improvised should be zero.

### Online and recorded


**online_variant**

Easier in one way and harder in two. Easier: the clock can sit on screen next to the deck with no visibility cost at all — remote delivery removes the social penalty of clock-watching entirely, so checkpoints can be checked more often. Harder: webinars start late and unpredictably (admissions, audio checks), so the zero point of your stopwatch must be your own first word, not the scheduled time; and chat questions arrive continuously, silently consuming time that no checkpoint anticipated. Practical adjustment: reserve an explicit chat-handling budget (for example 60 seconds at every second boundary) and treat it as a block with its own checkpoint, otherwise it borrows time from the close.


**recorded_variant**

The recording is where time control is audited: speech-rate rise in the final third is clearly audible, and a compressed close is the single most common flaw in published conference talks. It is also where the cost of overrunning is permanent — a talk cut off by the moderator ends mid-sentence on YouTube forever. One useful asymmetry: finishing 90 seconds early looks composed on a recording, while finishing 90 seconds late looks amateurish, so the target should skew early for a recorded talk. Also note the recording usually starts before your first word, so its timestamps and your stopwatch will differ by a fixed offset — worth knowing when extracting real checkpoint times afterwards.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

1) The visible clock-watcher: repeated glances mid-sentence, which the audience reads as 'he wants this to end'. 2) Speeding up instead of cutting (Shortchanged) — the default, and the one this item exists to prevent. 3) Cutting the close to save time, which sacrifices the most valuable ninety seconds of the talk for the least valuable reason. 4) Checkpoints with no trigger rule, so the speaker learns he is behind and does nothing. 5) Cutting mid-block, which strands the block's takeaway and makes the seam audible. 6) Announcing the deficit to the room. 7) Trusting the venue's wall clock or the moderator's promise of a five-minute signal — both fail routinely, and neither is under your control.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Writing durations instead of cumulative times in the notes, which forces mental arithmetic under arousal. Starting the stopwatch at the scheduled time rather than at the first word. Planning to 100% of the slot, so any friction produces an overrun. Estimating from slide count. Cutting on the first small deficit and then finishing four minutes early. Forgetting that the demo block's variance is much larger than any other block's, and giving it the same tolerance. Not checking during the tech check that the presenter view — and therefore the notes and the timer — actually appears on the laptop screen rather than being mirrored to the projector.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

An untimed internal discussion, a workshop where the agenda is negotiated with the room, or a fireside-chat format where a moderator owns the clock. Also, do not add checkpoints to a talk that has never been timed once — checkpoints derived from guessed durations produce false triggers and cause you to cut content for no reason. And in a very short slot (five to ten minutes) the whole apparatus collapses to one rule: know the single sentence you must reach and say it before the end.


**fallback_if_it_fails**

If the clock is missing or dead: use the deck as a coarse clock — you know which slide should be up at the halfway point, and the moderator's presence is a second signal. If you discover at minute 18 that you have seven minutes of material left: go straight to the close, and offer the remaining block as 'to jest w materiałach, chętnie omówię na korytarzu' — never attempt to deliver seven minutes in four. If the moderator signals wrap while you are mid-block: finish the sentence, not the block, and jump to the close. If you find yourself already accelerating: stop, take one deliberate pause of two seconds — the pause resets speech rate more reliably than the intention to slow down, and it costs less than the comprehension you were losing.


**works_signal**

Self-directed rather than audience-directed: at each checkpoint you are within the tolerance band, and you reach the close with 90-120 seconds in hand. In-room signals that time control is failing: the moderator moves into your peripheral vision, people at the back start gathering bags (in a last slot this is also a sign of the hour, so read it together with the clock), your own sensation of hearing the next sentence before finishing the current one, and pauses disappearing from your delivery. Signal that it is working from the audience's side: nothing at all — good time control is invisible, and its only visible artefact is a Q&A that starts on schedule.


**dependencies_conflicts**

Prerequisites: modular block structure (checkpoints attach to boundaries), expansion joints (the ordered cut list is this item's live instrument), and at least one timed rehearsal (checkpoints derived from estimates are noise). Feeds: the question-policy item (a Q&A that starts on time is the product of this item) and closing-after-Q&A (the protected last two minutes). Conflicts: (a) with live demos, whose duration variance is the largest single threat to any checkpoint plan — the recorded-demo route reduces the variance to near zero and is therefore also a timing decision; (b) with questions taken during the talk, which make every downstream checkpoint meaningless, which is the strongest argument for the end-only question policy in a 25-minute slot; (c) with audience interaction generally (show of hands, polls), which should be budgeted as its own block rather than absorbed; (d) with the presenter view itself, if the room's display configuration mirrors rather than extends and the notes and timer end up on the projector.

### Tooling


**tool_support**

A phone stopwatch, face up, started at the first word — the most reliable clock available and the only one you control. Marp presenter view (`marp -p` or the VS Code preview) for notes plus an on-screen timer. A printed card carrying the checkpoint table and the ordered cut list, which is the version that survives a laptop failure. A stage timer or Stagetimer-style display if the organiser provides one; treat it as secondary, since its zero point is theirs. For calibration afterwards, the published recording and any transcript tool that reports words per minute — the cheapest way to measure acceleration and to derive a Polish speaking rate from your own delivery.


**marp_implementation**

One token per block, in the presenter notes of the block's first slide: `<!-- @8:30 | cut-if-late: B5 -->`. Keep the format identical everywhere so it is recognisable at a glance under stress. `paginate: true` globally, so slide numbers on the printed cut list are usable for jumping. Marp's presenter view (opened with `marp -p` or from the VS Code preview) shows the notes and the next slide; it does not provide a countdown to a target finish, so the phone stopwatch remains the clock. Do not encode timing cues as on-slide animations or fragments — they exist only in the HTML export and disappear in the PDF that is your backup.

### Effort and payoff


**prep_effort**  
<sub>low | medium | high — one-off setup cost</sub>

low — 30-45 minutes per talk, most of it shared with the expansion-joints work, and near zero once the habit is formed. It is the cheapest available fix for the timing gap.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Immediate and measurable on the next talk: the close is delivered at normal pace and the Q&A starts on schedule. Within two or three talks, the accumulated checkpoint data makes block estimates accurate enough that cutting becomes rare, which is the real end state — time control that is never exercised because the plan was right.


**needs_organiser_agreement**

yes, on three specific points: the true slot length and whether Q&A is inside or outside it; who gives time signals, at what marks, and from where in the room (a signal you cannot see is not a signal); and whether a stage timer exists and when it starts. Agree these with the moderator before the session, not during it — this is the moderator-contract item, and without it the whole apparatus depends on your phone.


**priority**

high — it addresses the named timing gap directly, costs under an hour, requires no deck rewrite, and can be applied to the existing BB4IT deck immediately. Together with the expansion-joints item it is the pair that makes the 25-minute slot survivable; alone it diagnoses the problem without solving it, so implement both.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

- https://presentationpatterns.com/glossary/
- https://www.morling.dev/blog/ten-tips-make-conference-talks-suck-less/
- https://gist.github.com/whostolebenfrog/5107027
- https://www.youtube.com/watch?v=W_i_DrWic88
- https://tressacademic.com/rehearse-presentation/
- https://winningpresentations.com/presentation-time-management/
- https://stagetimer.io/use-cases/conference-and-speaker-timer/
- https://cs.stanford.edu/people/widom/conference-talks.html
- https://speaking.io/prep/practicing-it/

### Not established by this research

- `origin_author`
- `origin_year`
- `application_pl_talk`
- `pl_language_notes`
- `survives_pdf_export`


---

## Reading the room and adapting live

> Stop trying to read faces — you cannot — and instead gather data before you go on, run two or three designed probes during the talk, and act only on coarse behavioural signals through a decision rule you wrote in advance, so that 'adapting' means selecting a pre-built variant rather than improvising on stage.

### What it is

- **category** — delivery


**talk_moment**

before arriving (the largest and most reliable share of the diagnosis, done in the previous speakers' sessions) → room filling (headcount, layout, energy, who is here) → first 90 seconds (the first designed probe) → middle blocks (one further probe and the decision point) → after the event (calibrating how wrong your in-room reading was against the recording).

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

The technique as usually taught assumes a channel that does not carry the signal. The claim is that a speaker can infer the audience's cognitive and emotional state from facial expressions and posture. The strongest available review of that assumption — Barrett et al. (2019), a 68-page evidence review in Psychological Science in the Public Interest — concludes that inferring emotion from facial movements is unreliable, because the same configuration of a face occurs across different states and the same state produces different faces across people and contexts. Add a second-order problem: a speaker under arousal is a poor instrument, and the illusion of transparency (Savitsky & Gilovich, 2003) shows that people systematically overestimate how legible internal states are — speakers assume their nervousness shows, and by the same mechanism assume the room's states are readable off its faces. A neutral engineer's face at 15:05 is compatible with rapt attention, mild boredom, and thinking about a train. So the mechanism that actually works is different and has three parts. First, substitute data for inference: most of what you need to know is knowable before you speak — who is in the room, what they have already been told today, which claims have already been made from that stage, and which jokes have already been used. In a single-track conference this information is free and sitting in the previous two sessions collects it. Second, instrument rather than observe: a designed probe (a counted question with a known expected answer) converts an unreadable room into a number. It is a measurement, not an interaction technique, and its value is the count, not the participation. Third, act through a pre-committed rule: the reason live adaptation usually fails is not bad diagnosis but bad decision-making under arousal — a speaker who decides mid-talk to 'go lighter' typically cuts the wrong material, loses the thread, and ends early with the argument missing. If the variants are built in advance (see expansion joints) and the trigger is written down, adaptation becomes selection, which is cheap and reversible, instead of improvisation, which is not. What remains of face-reading after all this is a narrow, reliable band: coarse behavioural signals that involve movement and are hard to misinterpret — phones going down or up, people leaving, someone photographing a slide, the latency before laughter, bags being gathered. These are actions, not expressions, and they are the only in-room channel worth acting on.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Before the day: get the agenda and read every other talk's description, not just its title — the difference between 'four talks about agents' and 'two about agents plus two adjacent' is the difference between deleting the right material and deleting the wrong material. 2. On the day, arrive early enough to sit in at least the two sessions immediately before yours, and watch the room rather than the speaker: how full it is, where people sit, how many laptops are open, how the room responds to a question from the stage, whether anyone leaves. This is the single highest-value hour of diagnosis available and it costs nothing. 3. Note what has already been said from that stage that overlaps with your material, and what devices have already been used (if two speakers have already run a live poll, yours is not a change of pace, it is the third poll). 4. Talk to three or four people during the break — Presentation Patterns calls the greeting version 'Seeding Satisfaction'; the diagnostic value is separate and higher. Ask what they came for and what they have got so far. 5. Write the decision rule before you go on, on the same card as the opening: which signal, at which point, selects which variant. For example: 'At the 8:00 checkpoint — if fewer than about a quarter of the room answered the probe AND more than two people have left, switch to the light variant: drop block 5, extend the demo narration, finish at 21.' 6. Place the first probe in the first three minutes. Early, because its purpose is calibration and a probe at minute 18 informs nothing you can still act on. 7. Place a second probe at or just after the midpoint if the first was ambiguous. 8. Read only the coarse channel between probes: movement, phones, doors, cameras. Do not attempt to read faces, and specifically do not read the front row, which is unrepresentative by self-selection. 9. Make at most one adaptation decision per talk, at a pre-defined moment. More than one and you are improvising. 10. After the talk, compare your in-room reading against the recording and against whatever feedback exists. This is the only way the instrument gets calibrated, and most speakers never do it.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

When the room's state is genuinely uncertain and you have pre-built variants to switch between. Highest value: a slot late in a day whose earlier sessions you can observe; a topic-saturated single-track conference where you cannot know in advance what has already been said; an audience of unknown technical level; a repeated talk being given to a new kind of room; and any situation where the schedule has slipped and your real slot length is unknown until you are standing in it. Lowest value: a talk you have not built variants for, where diagnosis produces anxiety and no action; a small room where you already know everyone; a hard-scripted keynote; and a first-ever delivery, where the speaker's attention budget is fully consumed by getting through the material and adding a live diagnostic loop degrades everything else. In that last case, do the pre-talk half (steps 1-4) and skip the live half entirely.

### Evidence


**evidence_level**

Split, and the split is the point. The negative claim — that emotional and cognitive states cannot be reliably inferred from facial movements — rests on a strong, formal evidence review (Barrett et al. 2019, Psychological Science in the Public Interest, a commissioned review of the literature across six emotion categories), supported by the illusion-of-transparency experiments (Savitsky & Gilovich 2003, Journal of Experimental Social Psychology, controlled experiments). Teacher-judgment research points the same way from a different angle: monitoring accuracy for students' comprehension is low in absolute terms even for professionals who see the same people repeatedly. The positive claim — that gathering data beforehand, probing during, and switching to a pre-built variant improves outcomes — is practitioner consensus only, with no controlled study, and it is convergent rather than proven. The narrow band of coarse behavioural signals (people leaving, phones, photographs of slides) is anecdote plus face validity; it is used here because the signals are actions with few competing interpretations, not because anyone measured their diagnostic value. Never present in-room reading as perception; present it as low-resolution measurement with a wide error bar.


**myth_status**

sound practice with a wrong justification. Adapting a talk to the room is sound and sometimes necessary. The justification usually given for it — that an experienced speaker can read the audience's engagement, comprehension or agreement from faces and body language — is not supported and is contested at the level of the underlying science (Barrett et al. 2019). Two consequences follow that most treatments of the topic get wrong: first, the diagnosis should be moved off the unreliable channel (faces) onto reliable ones (prior data, designed probes, gross behaviour); second, the failure mode of the folk version is not passivity but overconfident action — a speaker who 'reads' boredom that is not there and cuts the block the room actually wanted.


**key_sources**

1) Barrett, L. F., Adolphs, R., Marsella, S., Martinez, A. M. & Pollak, S. D. (2019), 'Emotional Expressions Reconsidered: Challenges to Inferring Emotion From Human Facial Movements', Psychological Science in the Public Interest 20(1), 1-68 — the anchor for the negative claim: facial configurations are neither reliable nor specific indicators of emotional state across people and contexts; the common practice of inferring emotion from faces is not supported by the evidence. 2) Savitsky, K. & Gilovich, T. (2003), 'The illusion of transparency and the alleviation of speech anxiety', Journal of Experimental Social Psychology 39, 618-625 — speakers systematically overestimate how visible their internal states are to an audience; telling speakers about the illusion improved both their confidence and the rated quality of their speeches. Relevant twice over: it explains why your sense of how you are being received is unreliable, and it supplies a usable pre-talk intervention. 3) Presentation Patterns glossary (Ford, McCullough & Schutta, 2012) — 'Emotional State' and 'Know Your Audience' as the named patterns, the second of which is the one that actually works because it is about data collection rather than perception. 4) Teacher-judgment research on monitoring students' comprehension — accuracy is low even for professionals with repeated exposure to the same individuals, which bounds what a speaker meeting a room once can expect. 5) The dissenting practitioner position, argued in presentation-coaching writing ('you should never try to read the room — it's impossible'), which recommends organiser briefings, focusing on responsive audience members, and post-hoc instruments instead. Useful as the counterweight to the uncritical majority of practitioner sources on this topic.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

1) The strongest objection to the corrective: Barrett et al. is about inferring discrete emotions from static facial configurations, and a speaker in a room has access to a richer stream — movement, sound, timing, the collective rather than the individual. It is plausible that aggregate room-level signals are more readable than individual faces, and nobody has tested that. So the honest position is 'individual face-reading is unsupported and room-level gross behaviour is unvalidated', not 'reading the room is impossible'. 2) Probes cost time and social capital. Two probes in a 25-minute slot is roughly a minute plus the risk of an unanswered question, and in a very tired room the probe can itself be the thing that fails. 3) Pre-committed rules are brittle. A rule keyed to a hand count will fire wrongly if the question was badly phrased, and cutting good material because of a bad probe is a real and unrecoverable cost. 4) Adaptation is often the wrong response. Many rooms that read as flat are simply quiet, and the talk that was designed carefully weeks ago is usually better than the one improvised at minute twelve; the base rate favours delivering the plan. 5) Diagnosis competes for attention with delivery. For a practitioner speaker whose named gap is the opening, adding a monitoring task in the first minutes is actively harmful; the pre-talk half of this item is safe, the live half is not free. 6) Observing the previous sessions has a cost the practitioner literature never mentions: watching another speaker on your topic immediately before going on can rattle you or tempt you into last-minute rewrites, which is a worse failure than a slightly mistuned talk.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

Split it into a pre-talk block and a two-touch live loop. Pre-talk, which is where nearly all the value is: be in the room for the two sessions before yours — at BB4IT that is 13:50-14:20 and 14:20-14:50, which fits inside the 45 minutes the organiser already requires you to be on site — and record four numbers rather than impressions: how full the room is, how many laptops are open, how the room answered when an earlier speaker asked it something, and how many people left mid-session. Also record which of your claims someone else has already made from that stage, because that changes what to delete, not merely how to deliver. Live, two touches only. Touch one at roughly minute 2:30, folded into the state-change question that is already planned there, giving a counted number rather than a feeling. Touch two at the 8:00 checkpoint, which is already in the time table — the same glance that reads the clock reads the room, and it is the single decision point of the talk: continue with the full version, or select the light variant. Nothing after minute 12, because the demo block runs to about minute 18 and there is no useful adaptation left after it. What this replaces: the diffuse, continuous, anxiety-producing monitoring that most speakers do instead, which consumes attention all the way through and produces no decision.


**time_budget_min**

0.3 on stage as a marginal cost — the probe itself is already budgeted under audience interaction, and the decision glance rides on the existing 8:00 checkpoint. The real cost is 60 minutes before the talk, sitting in the two preceding sessions, which is outside the slot and inside the 45 minutes the organiser already requires you to be present. Budget an additional 1.5-3.5 minutes of contingency in the plan itself: the light variant selected at the decision point returns roughly that much, which is the point of having it.


**audience_change**

In the good case, nothing visible — the audience receives a talk that fits the room they are actually in, and never knows an alternative existed. The concrete difference is in what gets cut: a saturated room does not sit through the block that repeats what three earlier speakers said, and a flat room gets a shorter talk with a clean ending instead of a full-length one delivered against resistance. The stronger, more measurable change is negative avoidance: the audience does not experience the two characteristic failures — a speaker visibly hunting for reaction, and a speaker who improvises a shortcut mid-talk and loses the argument.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

late_slot — directly, and this is the diagnosis half of that gap, with expansion joints and on-stage time control as the execution half. The specific BB4IT value is that a single-track agenda makes the diagnosis cheap: the two sessions before yours are in the same room with the same audience, so an hour of observation gives you the room's actual state, its actual size, its tolerance for questions from the stage, and the overlap with your own material. timing — directly: the decision point selects between pre-built lengths, so the diagnosis is what makes the light variant a choice rather than a panic. It also interacts with the real risk that the 14:50 slot starts late if the day has slipped, in which case the reading that matters most is of the clock, not the room. qa — indirectly but usefully: how a room responded to earlier speakers' questions is the best available predictor of whether your own Q&A and the organiser's two prize questions will get volunteers, and it lets you decide in advance whether to seed the first question. demo_risk — indirectly: watching the earlier sessions tells you whether the projector, the audio and the resolution actually work in L120 and how they behaved for other people's material, which is diagnosis of the room in a more literal sense and is free. opening — a caution rather than a fit: do not add live monitoring to the first ninety seconds, which are scripted precisely because that is the named weak point.


**minimal_2h_version**

Ninety minutes of it happens on the day and requires no preparation at all: be in the room for the two talks before yours and watch the room. If two hours is all that is left before the talk, spend them like this. (1) 60 min — sit through the preceding sessions and write down four numbers (room fullness, open laptops, response to any question asked from the stage, people leaving) plus every claim from those talks that overlaps with yours. (2) 15 min — in the speaker room, decide what to delete on the basis of the overlap, using the cut list you already have; this is the highest-value fifteen minutes available. (3) 10 min — write the decision rule on the opening card in one sentence: which signal, at which checkpoint, selects which variant. (4) 10 min — rehearse the probe question aloud, word for word, with its fallback line. (5) 5 min — talk to three people in the corridor and ask what they came for. If only fifteen minutes exist: write the one-sentence decision rule and rehearse the probe question. Everything else in this item is optional.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

BB4IT, 12 September. 13:50 — the speaker is in L120, at the side, for Marcin Rzeszowski's talk on teams working with AI agents. He is not watching the speaker; he is counting. Room roughly two-thirds full, perhaps a dozen laptops open, three people leave in the second half, the speaker asks the room a question and gets about eight hands. He notes two claims that overlap with his own material and one that contradicts it. 14:20 — Karol Wolny on QA in an AI-driven SDLC. The room thins slightly; the projector shows a dark theme badly in the second half of the room, which is a note for his own deck; nobody photographs a slide. 14:45 — speaker room L152: on the basis of the overlap, one planned paragraph is deleted from the 'what actually breaks' block, because Rzeszowski already made that point better and to the same people. The decision rule goes on the card: 'At 8:00 — if the probe returned under ten hands AND anyone has left, take the light variant: drop block 5, hold the demo, close at 21:00.' 14:53 — start (three minutes late, the day has slipped). 2:30 — the probe: 'Ręka w górę, kto w ostatnim miesiącu tłumaczył agentowi coś, co już było opisane w firmowej dokumentacji.' Around twenty hands, counted aloud as 'mniej więcej połowa'. That is a live room by the standards of what he watched for the previous hour, and it is a number, not a feeling. 8:00 — checkpoint: clock at 8:20, nobody has left, two people have photographed the architecture slide. Rule does not fire; full variant continues. 11:30-18:30 — the recorded demo. No further reading, by design. 21:30 — close. Afterwards, watching the recording, he finds that the stretch he experienced on stage as 'losing them' at minute 6 shows a room sitting still and looking at the screen — which is the calibration lesson, and the reason the decision rule is keyed to counts and departures rather than to how it felt.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

Three separate skills, trained separately. (1) Observation, trained without any personal stakes: at every conference you attend, spend one session watching the room instead of the speaker, and write down what you saw and what you predicted about how the talk was going. It costs one session per event and it is the only way to learn what a room actually looks like from the side. (2) Calibration, which is the part almost nobody does: after each of your own talks, write down your in-room impression before you look at anything else, then watch the recording and compare. Over four or five talks a personal bias emerges and it is usually the same one — most speakers systematically read neutral rooms as negative, which is the reading-the-room analogue of the illusion of transparency. Knowing your own bias is worth more than any amount of technique. (3) Decision-making under arousal, trained the same way the cut list is trained: rehearse a run in which the rule fires and you take the light variant, so that the switch is a movement you have made before rather than a judgement you are making for the first time in front of two hundred people. Over months, the compounding improvement comes from the pre-talk half — conversations with organisers, reading other speakers' abstracts properly, arriving early as a habit — which is unglamorous, requires no perceptual skill, and yields most of the benefit.


**drill**

The calibration drill, 20 minutes, and it needs a recording of one of your own talks. Input: the recording, a timer, a sheet with two columns. Action: (a) 3 min — from memory, before playing anything, write down the three moments in that talk where you felt you were losing the room, with approximate timestamps, in the left column. (b) 12 min — play those three passages, watching the audience if the camera shows them, and otherwise listening to the room audio, and write in the right column what is actually observable: movement, phones, noise, laughter latency, departures. (c) 5 min — write one sentence naming the direction of your error and one decision rule that would have been keyed to something observable rather than to your impression. Observable output: a two-column table of three predicted-versus-observed moments and one written decision rule. Success criterion: you can state your own bias in a sentence — for example 'I read silence as failure' — and the rule you wrote references only counts, movement or departures, with no words about mood, energy or interest.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

One prediction-and-check pair: an impression noted at a specific timestamp, then compared against what the recording shows at that timestamp. It is small, repeatable dozens of times from a single recording, and it is the only unit that improves accuracy rather than merely confidence. The secondary unit is the probe question plus its counted, spoken result — about 35 seconds.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

Pre-talk, per event: 60-90 minutes to sit in the preceding sessions, which for BB4IT is already inside the required arrival window and therefore free; plus 15 minutes in the speaker room to convert the observations into cuts and a rule. Preparation, per talk: 20 minutes to write the probe and the decision rule, most of which is shared with the audience-interaction and expansion-joints items. Training: about 20 minutes per past recording for the calibration drill, and one session per conference for the observation habit. On stage: negligible. The largest hidden cost is discipline rather than time — resisting the constant low-grade monitoring that feels like reading the room and is actually just anxiety.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

The probe is the only real-time loop worth the name, and it returns a number. Everything else arrives afterwards. The recording is the primary calibration instrument and is available here because BBDays4.IT publishes the talks; watch it once for the audience rather than for yourself. The short video interview the organiser records immediately after the talk is an unusually good second loop, because your answers are given while your in-room impression is still fresh and can be checked against the recording later. The hallway conversations in the following twenty minutes are the highest-signal source of all for what actually landed, and they are also the moment when your reading is most likely to be corrected — the block you thought failed is frequently the one people ask about. Slowest and most reliable: the Crossweb speaker-feedback panel the organiser offers, if the QR is on the closing slide, and any organiser debrief. Weight all of these above your own memory of standing on stage.


**measurable_kpi**

(a) Calibration error: number of moments you predicted as 'losing them' that the recording does not support — the headline number, and the only one that measures the skill rather than the ritual. Target: trending toward zero across talks. (b) Probe response as a counted number, tracked across talks with the same phrasing, which turns an impression into a time series. (c) Number of live adaptation decisions made: target exactly one per talk, at the pre-defined point; two or more means improvisation. (d) Number of pre-talk data points collected before speaking (sessions observed, people spoken to, overlapping claims noted): target 2 sessions, 3 conversations, and a written overlap list. (e) Departures per five minutes, counted from the recording, which is the cleanest behavioural signal available and is comparable across talks. (f) Whether the variant selected on the day matched the variant a calm reviewer would have chosen watching the recording afterwards.

### Online and recorded


**online_variant**

The unreliable channel disappears entirely and is replaced by a narrow but honest one. There are no faces (or a grid of frozen ones, which is worse than none because it invites reading), no movement, no room sound. What exists instead is genuinely quantitative and should be used as such: the attendee count and its slope over the session — the single best engagement signal available online and one with no in-room equivalent — chat volume and latency, poll response rates, and, on some platforms, an attention or tab-focus indicator. Practical protocol: designate someone as the backchannel watcher if a co-host is available, because monitoring chat and presenting at the same time degrades both; check the participant count at your existing checkpoints rather than continuously; treat a chat question as a probe result, not an interruption. The decision rule should be keyed to the count slope, not to chat sentiment, which is dominated by the two most extroverted people present. One asymmetry worth knowing: the online room gives you better data and less of a reason to trust your instincts, which makes the pre-committed rule more important rather than less.


**recorded_variant**

The recording is the calibration instrument for this item rather than a context in which the item is applied, and it is the reason the item can be trained at all — before video, a speaker had no way to check a reading against reality. Three things to know. First, the camera usually points at the speaker, so the audience channel may be limited to room audio; learn to read that track, because laughter latency, rustle and the sound of a door are all on it. Second, any adaptation you make live is invisible on the recording — the viewer sees only the variant you delivered, and a well-executed cut is undetectable, which means adapting costs nothing in the artefact and is one more reason to build variants. Third and least obvious: a probe delivered for diagnostic reasons produces a silent gap for the viewer unless you say the result aloud, so the counted answer has to be spoken ('mniej więcej połowa sali') both because it is the measurement and because it is the only version of the moment that survives to YouTube.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

1) Continuous scanning — the speaker whose eyes sweep the room hunting for reaction. It is visible, it reads as insecurity, it consumes the attention that delivery needs, and it produces no decision. 2) Reading the front row, or worse, reading the one person who is frowning, and rebuilding the talk for them. 3) Adapting without variants: 'they look bored, I'll speed up and skip ahead', which is improvisation under arousal and reliably damages the argument. 4) Naming the room's state out loud ('widzę, że jesteście zmęczeni', 'wiem, że to ostatnia prelekcja'), which converts your possibly-wrong reading into a shared fact and licenses the room to act on it. 5) Asking 'czy wszystko jasne?' as a diagnostic — a question that returns nothing and signals that you do not know how it is going. 6) Treating your own comfort as the measurement: the talks that feel best on stage are frequently not the best ones, and the illusion-of-transparency literature explains why your internal read is a poor instrument. 7) Cargo-culting the coach's version — memorising a list of body-language meanings and applying it as if it were a lookup table, which is the practice this item's evidence base specifically contradicts.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Doing the live half and skipping the pre-talk half, when the pre-talk half carries most of the value and none of the risk. Arriving too late to see the preceding sessions — at BB4IT the organiser requires arrival 45 minutes early, which happens to be exactly enough, but only if that time is spent in L120 rather than in the speaker room. Writing a decision rule keyed to a feeling rather than to a count. Placing the probe too late to act on. Making several small adaptations instead of one deliberate selection, so that by minute 15 the talk is neither the full version nor the light one. Confusing quiet with disengaged, particularly in a Polish room and particularly at 15:00. Confusing phones with disengagement in a room where phones are used to photograph slides. Rewriting material in the speaker room on the basis of what an earlier speaker said — deleting an overlap is correct, writing new unrehearsed material forty minutes before a talk is not. And, finally, never checking the reading against the recording, which leaves years of confident practice uncalibrated.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

A first delivery of new material, where attention should go entirely to getting through it — do the pre-talk half only. A tightly scripted keynote or a filmed set piece where no variants exist. A five-to-ten minute lightning talk, where there is no time to act on anything. A high-stakes formal context (a client decision meeting, an audit, a defence) where visible adaptation reads as uncertainty. A small room of people you already know, where you have real information and do not need proxies. And any situation where the honest answer is that you will not act on the reading — diagnosis with no available action is a pure anxiety generator, and in that case the correct move is to deliver the plan and read the recording afterwards.


**fallback_if_it_fails**

The probe returns nothing: treat the absence as missing data, not as a negative reading — answer your own question, move on within four seconds, and let the decision rule fall back to its default, which should be 'deliver the full version'. Never let a failed probe trigger a cut. The room is unreadable and the rule cannot be evaluated: default to the plan; the prepared talk beats the improvised one on the base rate. You realise mid-block that you have misread and cut something the room wanted: do not restore it mid-talk — say one sentence at the close ('Wyciąłem kawałek o X, jest w materiałach pod tym kodem, chętnie pogadam na korytarzu') and move on. You are losing the room and no variant fits: lower the information rate rather than the content — slow down, add pauses, say the next section's point before explaining it — and finish early. A short talk that ends cleanly in the last slot of the day is a better outcome than a full one delivered against the room. The schedule has slipped and your slot is shorter than planned: this is the most likely 'adaptation' you will actually face, and it is answered by the expansion-joints cut list, not by reading anyone's face.


**works_signal**

This item is the works_signal machinery for the whole set, so the list is the operative content rather than a footnote. Signals worth acting on, in descending order of reliability: someone photographs a slide (unambiguous, and the single best positive signal in a technical room); people leaving, counted per five minutes (unambiguous, negative, and the one signal that should always be able to fire a rule); laptop lids closing or opening at a block boundary; the count returned by a designed probe; laughter latency shortening or lengthening across the talk; bags being gathered before the close (in a last slot, partly an artefact of the hour — weight it with the clock, not alone); the room's response to earlier speakers, as a baseline against which yours is measured. Signals not worth acting on: facial expression of any kind; posture; arms folded; the front row; individual attention; whether anyone is smiling; and your own sense of how it is going, which is the least reliable input available and feels like the most reliable.


**dependencies_conflicts**

Prerequisites, and this item is nearly useless without them: expansion joints (there must be a pre-built variant to switch to — diagnosis without an alternative produces anxiety and no action), on-stage time control (the decision point rides on an existing checkpoint), and a modular block structure (so that a cut removes a whole unit rather than a fragment). Feeds: bad-slot-energy, which is the treatment this item's diagnosis selects; audience-interaction, which supplies the probe mechanics; seeding-the-first-question and the Q&A items, since the room's response to earlier speakers predicts whether your Q&A will have volunteers; saturated-audience-framing, which is executed on the overlap data collected while watching the earlier talks. Conflicts: (a) with the scripted opening — do not monitor during the first ninety seconds, which are scripted precisely because that is the named weak point; (b) with the time budget, since each probe costs slot time and an adaptation decision costs contingency that must be reserved; (c) with attention itself, because live monitoring and live delivery compete for the same limited resource, which is why the number of live touches is capped at two; (d) with the demo block, during which no useful adaptation is possible because the recording runs at a fixed length — all reading must happen before it; (e) a soft conflict with pre-talk observation, which is valuable for diagnosis and mildly risky for composure, since watching a good speaker on adjacent material immediately before going on can tempt you into last-minute rewrites.

### Tooling


**tool_support**

Almost none of it is technological, and that is a feature. The instruments are: the agenda with full talk descriptions read in advance; the two preceding sessions; three corridor conversations; a written decision rule on the same printed card as the opening script; and the phone stopwatch whose checkpoint glance carries the decision. For calibration afterwards: the published recording, the organiser's short post-talk video interview, and the Crossweb speaker-feedback panel the organiser offers. Online only: the participant-count display, the chat, and poll tooling (Slido, Mentimeter) whose response rate is the probe. An LLM is useful in the preparation phase rather than the live one — for generating the probe question variants and for pressure-testing the decision rule ('under what circumstances does this rule fire wrongly?'), which is the same red-team use as in the Q&A preparation item.


**marp_implementation**

Nothing on the slides implements the diagnosis, but two things support it. First, mark the decision point and the variant in the presenter notes of the relevant block's first slide, in the same fixed format as the timing tokens: `<!-- @8:00 | DECIDE: light? drop B5 → close 21:00 -->`. Second, make the variant switchable without visible fumbling — keep the optional block as a contiguous run of slides so that skipping it is a single jump, use `paginate: true` so the printed card can name the target slide number, and end each block with a slide whose content works as a bridge to either the next block or the one after it. A blank or full-bleed slide at the seam gives you a place to stand while making the decision without dead screen. Do not build the variants as separate decks; one deck with a contiguous, skippable block is what survives contact with a laptop under pressure.

### Effort and payoff


**prep_effort**  
<sub>low | medium | high — one-off setup cost</sub>

low — 20 minutes of preparation per talk, plus an hour on the day that the organiser's arrival requirement already reserves. The training half (the calibration drill against your own recordings) is a genuinely low-cost habit at roughly 20 minutes per recording, and it is the part that produces lasting improvement.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Two effects on different timescales. Immediately, on the next talk: the pre-talk half produces better cuts, which is a concrete, visible improvement in a topic-saturated room — you delete the block that three earlier speakers already covered, which no amount of on-stage perception could tell you. The live half mainly removes a cost: the diffuse monitoring, the hunting for reaction, the mid-talk temptation to improvise. Over three or four talks, the calibration half produces the real gain, which is knowing the direction of your own bias — most speakers discover they read neutral rooms as negative, and simply knowing that changes on-stage behaviour more than any technique does.


**needs_organiser_agreement**

no for the technique itself, which is entirely under your control. Two things are worth confirming rather than agreeing: that you may sit in the room for the preceding sessions (trivially yes at a single-track conference, and BB4IT already requires you on site from 14:05, though the useful window starts at 13:50), and whether the schedule has slipped and what your real slot length is — which is the moderator-contract conversation and the single most actionable piece of information available on the day. Ask the moderators, Agnieszka and dr Tomasz Gancarczyk, before the session rather than during it, and ask specifically whether the two prize questions the organiser requires sit inside or after your 30 minutes, because that determines what your variants have to fit.


**priority**

high, but with an unusual shape: the pre-talk half is high priority and the live half is medium at best. The pre-talk half costs nothing extra at BB4IT (the arrival window already exists), it directly serves the late_slot and topic-saturation problems, and it produces the one input nobody can guess in advance — what has already been said to this exact room today. The live half is worth exactly one probe and one decision point in a 25-minute talk, and should be kept that small; its real value is negative, in preventing the continuous monitoring and mid-talk improvisation that otherwise fill the gap.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

- https://journals.sagepub.com/doi/full/10.1177/1529100619832930
- https://pubmed.ncbi.nlm.nih.gov/31313636/
- https://www.sciencedirect.com/science/article/abs/pii/S0022103103000568
- https://crisp.org.uiowa.edu/sites/crisp.org.uiowa.edu/files/2020-04/15.4.pdf
- https://presentationpatterns.com/glossary/
- https://www.spokenwithauthority.com/blog/analyzing-your-audience-while-speaking
- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6394429/
- https://courses.lumenlearning.com/wm-publicspeaking/chapter/during-the-speech-adapting-to-the-audience/
- https://www.presentationtraininginstitute.com/reading-the-room-real-time-adjustments-based-on-audience-feedback/
- https://sixminutes.dlugan.com/illusion-of-transparency/
- https://pubs.acs.org/doi/10.1021/ed100409p
- https://journals.sagepub.com/doi/10.1080/00986280701291291

### Not established by this research

- `origin_author`
- `origin_year`
- `contested_claims`
- `application_pl_talk`
- `pl_language_notes`
- `survives_pdf_export`


---

## Red-team question bank

> A written table of the 15-20 questions that would actually hurt — not the ones that recur — each with the asker's real motive, a 40-second answer you have said out loud, and a prepared counter to the follow-up, built by attacking your own deck rather than by remembering what people asked last time.

### What it is

- **category** — qa


**origin_author**  
<sub>Originating author, book, lab or community that named the method</sub>

Jerry Weissman (Power Presentations) is the canonical source — 'identify and develop position statements for each red flag issue', from coaching ~500 executives through IPO road shows. Roger Ailes' 'prepare the five toughest questions' is the older, shorter version. The red-team framing is borrowed from security practice; the retrieval-practice mechanism underneath comes from Roediger and Karpicke's testing-effect work.


**origin_year**  
<sub>Year the method was named or popularised; approximate is fine</sub>

Ailes' five-toughest-questions advice 1988 (You Are the Message); Weissman's red-flag position statements 2005 (In the Line of Fire); testing effect formalised by Roediger & Karpicke 2006


**talk_moment**

before arriving — built in the week before, carried on one card; consumed during Q&A and, on a good day, during the middle blocks when you pre-empt a question you know is coming

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

Three mechanisms, in descending order of how well they hold up. (1) Retrieval under load. Answering a hard question on stage is a retrieval task performed with elevated arousal, a hostile audience model in your head and a clock running. If the answer has never been retrieved before, you are composing it live, and composition is the first thing adrenaline takes away — this is exactly what the NoCode Poland #4 retrospective describes: the answer existed somewhere but came out 'acceptable, not good'. Writing and then speaking each answer converts composition into retrieval, and retrieval of a previously retrieved item is far more robust than retrieval of a never-retrieved one. (2) Motive, not text. The reason a bank of remembered questions fails while a bank of red-flag issues works is that the same underlying concern arrives in twenty different sentences. If you index by wording, none of them match on the day. If you index by the thing the asker is actually worried about — 'will this leak my client's data', 'will this survive contact with production', 'is this you selling me something' — then any phrasing maps to a prepared position. This is Weissman's Roman Column applied before the talk instead of during it. (3) Follow-up pre-emption. Hard questions in a technical room come in pairs: the question, then the follow-up that tests whether your answer was real. 'We use enterprise terms with zero retention' invites 'and where are those servers physically?'. A bank that stops at the first answer produces a speaker who sounds prepared for ten seconds and improvised for the next thirty, which is worse than not sounding prepared at all. Preparing the second move is the entire difference between an FAQ and a red team.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Freeze the deck first. You cannot red-team a talk that is still moving; do this after the content is locked, ideally 5-7 days out. 2. Generate wide, from three sources, because each finds different questions. (a) Yourself, adversarially: read your own deck as if you were the most sceptical architect in the room and write every sentence that makes you slightly uncomfortable. (b) An LLM: paste the abstract and slide text and ask for 20 hostile questions from named personas — a security lead, a CFO, an engineer whose job the tool threatens, a competitor's founder, a burned early adopter — and for each, the motive behind it. The model is good at inventing the persona and the phrasing, and bad at judging whether your answer is good, so use it purely for input. (c) One human who does not like your conclusion, given five minutes and permission to be rude. 3. Collapse to issues. Merge the ~50 raw questions into 15-20 distinct red-flag issues. If two questions have the same answer, they are one issue. 4. Rank by damage-times-likelihood, not by frequency. The question that gets asked at every talk and is easy is not on this list; the question that gets asked once in five talks and would visibly hurt is at the top. 5. For each issue, write four lines and no more: the issue in your words (not the questioner's), a 40-second answer, the most likely follow-up, the counter to that follow-up. Anything longer than four lines you will not be able to retrieve on stage. 6. Mark honestly. Every entry gets a tag: SOLID (you can defend this with a fact you can name), THIN (true but you have one example, not data), or NO (you genuinely do not have an answer — write the honest sentence for it now, because you will not invent a good one live). 7. Say each answer out loud once, on a timer. Reading them does not count — the whole mechanism is retrieval, and reading is recognition. 8. Cut the bank to a card. Twenty issues as twenty two-word triggers on one index card or one presenter-note block. On the day you need the trigger, not the text. 9. Decide which two to pre-empt on stage. The one or two you are most certain will come should be answered inside the talk, on a slide, before anyone asks — that converts your weakest moment into a demonstration of having thought about it. 10. After the talk, add every question actually asked to the bank, with what you wish you had said. The bank is a compounding asset across the signature talk.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Any talk where you are the practitioner and the room contains people who could be doing it themselves — which is every technical conference talk, and BB4IT specifically. Highest return when: your topic has an obvious objection with a compliance or money shape (agentic AI in enterprises has both), when you are visibly commercially interested in the subject (CTO of a company that sells this), and when the talk claims something worked in production. Lowest return for a purely educational tutorial talk to beginners, where questions are 'how do I install it' rather than 'why should I believe you'.

### Evidence


**evidence_level**

practitioner consensus for the practice, with one strong adjacent laboratory result and no direct test. No controlled study exists on question banks for conference speakers. Weissman's method is a single-expert claim, though from an unusually large uncontrolled sample (~500 IPO road-show executives, a setting where the questions are genuinely adversarial and the consequences are priced by a market). The 'writing it down and saying it once beats knowing it' mechanism is an extrapolation from the testing effect (Roediger & Karpicke 2006 and the wider retrieval-practice literature), which is one of the better-replicated findings in cognitive psychology but was established on word lists and prose passages, not on Q&A under stage arousal — flag the transfer as reasoned, not demonstrated. The factual content of the example bank below (LLM provider retention terms) is documented vendor policy with dates and must be re-verified before use.


**myth_status**

confirmed as practice, with one common overreach. Preparing for hostile questions is universally recommended and nobody credible argues against it. The overreach is the belief that a bank makes you immune — Weissman's own framing is 'prepare and practice, practice and prepare' precisely because the bank is the input to rehearsal, not a substitute for it. A second, subtler myth: that the bank should contain the questions people usually ask. That produces an FAQ, which is a marketing artefact and covers exactly the questions that were never dangerous.


**contested_claims**

(a) 'Prepare five tough questions' (Ailes) versus 15-20 — the low number is fine for a media interview with one topic, but a 25-minute technical talk has more surface area than five questions cover, and the questions that hurt at a developer conference are unusually specific. Neither number is empirically grounded; both are practitioner heuristics. (b) 'Answer the hard question pre-emptively in the talk' — genuinely contested. It builds credibility and removes the sting, but it also plants the objection in the heads of people who were not going to raise it, and it costs slot time you may not have. The honest position: pre-empt at most two, and only ones you can dismantle in under 60 seconds. (c) 'An LLM can rehearse Q&A with you' — the model generates plausible hostile questions well, and cannot tell you whether your spoken answer landed, whether you sounded defensive, or whether you were talking too fast; treating its assessment as feedback is the cargo-cult version. (d) The much-repeated claim that all cloud LLM providers retain your data for 30 days is now out of date and should not be repeated on stage without checking — Anthropic reduced default API log retention from 30 to 7 days on 2025-09-14, and both OpenAI and Anthropic operate approval-gated Zero Data Retention arrangements.


**key_sources**

Weissman, J., 'In the Line of Fire: How to Handle Tough Questions...When It Counts' (2005; 3rd ed. Pearson 2021) — the method is stated as a sequence: rely on absolute truth, honour the audience, listen, paraphrase the Roman Column, identify and develop position statements for each red flag issue, achieve Topspin, prepare and practice; the red-flag-issue step is this item. || Roediger, H. L. & Karpicke, J. D. (2006), 'Test-Enhanced Learning', Psychological Science 17(3) — retrieval practice produces markedly better long-term retention than restudying; the mechanism this item borrows for why speaking an answer once beats reading it five times. || OpenAI, 'Data controls in the OpenAI platform' (developer docs, current) — abuse-monitoring logs generated by default for all API usage and retained up to 30 days; Zero Data Retention and Modified Abuse Monitoring are approval-gated controls that exclude customer content from those logs. || Anthropic, 'API and data retention' (platform docs) — API inputs and outputs deleted after 7 days as of 2025-09-14 (reduced from 30), never used for model training; ZDR available to qualifying enterprise customers. || Westside Toastmasters / Ailes — the older 'list the five toughest questions, and get others to write them for you' formulation.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

1. A bank can make you rigid: if the question is 20 degrees off your prepared issue, a rehearsed answer arrives sounding canned and slightly beside the point, which reads worse than an honest improvisation. Mitigation is to rehearse the position, not the paragraph. 2. Overpreparation can produce the media-trained voice a technical audience distrusts on sight — five fluent, polished answers in a row make a room suspect a script. 3. It cannot manufacture facts you do not have; a bank entry marked NO is still a NO on stage, and the temptation to fill it with something plausible is exactly how a speaker ends up making a claim about GDPR they cannot support. 4. The time cost is real — 3-4 hours for a proper bank — and for a single one-off talk that may be worse value than an extra timed run-through, which addresses the timing gap that has a higher base rate of biting. 5. LLM-generated questions cluster around the obvious; they will produce the compliance question and the cost question and almost never the one specific to your architecture that an actual expert in row three will ask.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

The bank itself consumes no stage time — it lives on a card and in the presenter notes of the closing slide, and it is spent during the 5-minute Q&A. Two deliberate incursions into the 25 minutes are worth paying for. (1) Pre-empt the single biggest objection with one slide, placed immediately after the demo or the architecture diagram, at the moment the room is most primed to object: a slide titled with the objection itself ('Ale to wysyla dane klienta do OpenAI' — but this sends client data to OpenAI) and answered in three bullets. Cost: 60-75 seconds. Payoff: the hardest question in the room is now on the record as something you raised, not something you were caught by. (2) One 'what I would not do' or 'where this breaks' item in the closing block, 30 seconds, which disarms the skeptic questions before they form and costs less than answering three of them live. Everything else stays in the bank. For a 25-minute slot the discipline is: two pre-empts maximum, and only if the timed run-through is already at or under 21 minutes.


**time_budget_min**

0-2 minutes of the 25-minute slot. 0 if the bank stays entirely in Q&A; ~1.2 minutes for one pre-emption slide; up to 2 minutes if you also add the 'where this breaks' item. Building it costs 3-4 hours off-stage, which is where the real budget goes.


**audience_change**

The room leaves believing the speaker has already thought about the objection they were about to raise, which is the specific thing that separates a practitioner from a vendor on stage. Concretely: an architect who arrived planning to ask 'so where does the data actually go' either does not need to ask, or gets an answer specific enough to repeat to their own security team on Monday. The second-order change is who talks to you afterwards — prepared answers to money-and-compliance questions convert a decision-maker in the audience into a hallway conversation, which is the actual conversion event for a CTO speaking at a regional IT conference.


**application_pl_talk**

The structure transfers; the content is where Polish specificity matters, and in two directions. First, the questions themselves differ. A Polish IT audience in 2026 asks compliance questions with a sharper edge than an American one, because RODO is a lived operational reality rather than an abstraction, because the EU AI Act applies here and not there, and because a meaningful share of the room works for or with public-sector or banking clients where a US-hyperscaler answer is a non-answer. Expect 'a co z RODO', 'gdzie fizycznie sa te dane', 'czy to przejdzie u nas przez bezpieczenstwo' and, in a Krakow or Bielsko room, 'robimy to dla klienta z sektora publicznego, to nam odpadnie'. Second, the register. Polish technical audiences read polished, evenly-cadenced answers as sales, faster than English-speaking ones do; the credible Polish answer is flatter, more concrete and admits a limitation early. 'Nie kazdy klient to kupi' (not every client will accept this) said early buys more trust than three fluent paragraphs. Also: at BB4IT, the earlier talks will have covered agents, so several of your bank entries will already have been asked of someone else that day — the room's questions to you will be the residue, which skews toward the sceptical and the operational. Prepare the 'czy to w ogole dziala u kogos na produkcji' (does anyone actually run this in production) entry first.


**pl_language_notes**

Calques to avoid: 'adresowac ryzyko' (address the risk) — say 'ograniczac ryzyko' or 'radzic sobie z ryzykiem'; 'dedykowany' used the English way ('dedykowany model') is tolerated in Polish IT speech but 'osobny' or 'wlasny' is cleaner; 'to jest game changer' will cost you the room at 15:00. Declension you will need in exactly these answers: 'do LLM-a / w LLM-ach', 'w promptcie', 'agenta / agentow / agentami', 'z API' (indeclinable), 'w chmurze' not 'w cloudzie', 'na on-premie' is spoken but 'lokalnie / u siebie' is better, 'retencja danych', 'przetwarzanie danych', 'powierzenie danych' (the exact RODO term for a processor arrangement — use it, it signals you have read the contract), 'administrator' vs 'podmiot przetwarzajacy' (controller vs processor; getting these two the wrong way round in front of a Polish audience is the single fastest way to lose a compliance answer). Ready stems for bank answers: 'Krotka odpowiedz: nie. Dluzsza jest taka, ze...', 'To zalezy od jednej rzeczy, i powiem ktorej...', 'Mamy to na produkcji od X miesiecy u jednego klienta - to nie jest jeszcze statystyka', 'Tego nie sprawdzalem i nie bede zgadywal'. Where a translated method sounds artificial: the Topspin. A prepared Polish answer that pivots back to your key message on every question reads as a press conference; use it once.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

qa — this is the item that maps one-to-one onto the named gap. The retrospective does not say 'I was asked something I had never considered'; it says the question about sending sensitive company data to cloud LLMs was predictable and there was no prepared answer, so the result was acceptable rather than good. A bank is precisely the artefact whose absence produces that outcome, and the sensitive-data question is entry number one, already written, already spoken aloud. Strong secondary fit on late_slot: at 14:50 on 2026-09-12, after nine talks of which four covered agents, the questions that survive to your slot are the ones the earlier speakers did not answer — sceptical, operational, and slightly impatient ('czy ktos to naprawde uzywa'), which is the exact quadrant a red-team bank covers and a recurring-FAQ list does not. Also feeds reuse: each bank entry is a finished LinkedIn post — the objection is the hook, the 40-second answer is the body — so a 3-hour build produces 15-20 posts as a by-product, which is a better ratio than anything else in this research. Indirect help on timing: prepared answers run 40 seconds and improvised ones run 90, so the bank is also what makes a 5-minute Q&A hold five questions.


**minimal_2h_version**

Ninety minutes, and it produces most of the value because the ranking step is cheap and the writing step is short. (1) 10 min: dump 25 questions fast — five yourself, twenty from an LLM given your abstract and slide titles with the instruction to ask as a security lead, a CFO, a sceptical staff engineer, a competitor and someone whose team you would replace. (2) 10 min: collapse to the 8 that would actually hurt. Eight, not twenty — under deadline the long tail is not worth writing. (3) 45 min: for each of the 8 write four lines only (issue, 40-second answer, likely follow-up, counter) and tag SOLID / THIN / NO. Be strict about NO; two honest NOs are worth more than eight confident fabrications. (4) 20 min: say all 8 out loud once, on a timer, standing, no notes after the first read. Anything over 50 seconds gets cut in half. (5) 5 min: eight two-word triggers onto one index card, into your pocket. Do NOT build the pre-emption slide in this version — touching the deck two hours out risks the timing you already verified. Start the list with sensitive data in cloud LLMs; if you only get through three entries, that one plus cost plus 'does anyone run this in production' covers the majority of the damage surface.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

The bank for the BB4IT agentic-AI talk, as twenty red-flag issues, ranked by damage times likelihood. Format per entry on the card: ISSUE / MOTIVE / TAG. 1. Sensitive client data going to a cloud LLM — motive: the security lead has to sign this off — SOLID. 2. Does anyone actually run this in production, and for how long — motive: has been shown demos before — THIN. 3. Non-determinism: how do you test something that answers differently each time — motive: the QA-minded engineer, genuine — SOLID. 4. What happens when the agent is confidently wrong, and who is liable — motive: risk owner — THIN. 5. Cost at real volume, per month, not per token — motive: the CFO or the tech lead who owns a budget — SOLID. 6. This is a workflow with a language model in it, not an agent — motive: status play, wants the definition fight — SOLID. 7. Why not a script / why not regex / why not the tool we already have — motive: territorial, their current stack is implicitly criticised — SOLID. 8. Prompt injection and tool abuse — motive: genuine security — SOLID. 9. EU AI Act: which risk class is this and who did the assessment — motive: compliance, and a genuine trap if unprepared — THIN. 10. Vendor lock-in and pricing risk — motive: architect thinking in three-year horizons — SOLID. 11. Why not open-weight models on your own hardware — motive: half genuine, half ideological — SOLID. 12. How do you evaluate it — where are your numbers — motive: wants proof, and is right to — THIN. 13. Latency, and whether a human waits for it — motive: product-minded — SOLID. 14. Who maintains this in two years when the framework is dead — motive: has inherited someone's abandoned automation — SOLID. 15. How many people does this replace — motive: room politics; the answer is watched by everyone — THIN. 16. Where is the human approval gate — motive: genuine, and a good question — SOLID. 17. You are the CTO of a company that sells this, so why should we believe the numbers — motive: fair challenge to your standing — SOLID. 18. It worked in your demo because you built the demo — motive: sceptic, possibly correct — THIN. 19. Data residency: are these servers in the EU, and does that even help given the CLOUD Act — motive: the sharpest person in the room — THIN. 20. What did you try that failed — motive: genuine, and the easiest to win — SOLID. || FULLY WORKED ENTRY, number 1, the NCP4 question. ISSUE: sensitive client data leaving the client's perimeter when an agent calls a hosted model. MOTIVE: this person has to defend the decision to their own security officer; they are not attacking you, they are collecting ammunition — treat them as an ally, not a heckler. 40-SECOND ANSWER (Polish, spoken): 'Rozdzielmy dwie rzeczy: co wychodzi i na jakich warunkach. Co wychodzi — tylko to, co przejdzie przez warstwe redakcji; identyfikatory podmieniamy po naszej stronie, wiec model widzi strukture sprawy, nie nazwiska. Na jakich warunkach — umowa powierzenia z dostawca enterprise, bez trenowania na naszych danych, z krotka retencja logow. U Anthropica to od wrzesnia 2025 siedem dni zamiast trzydziestu, u OpenAI domyslnie do trzydziestu, a zero retention jest osobna zgoda, o ktora sie wnioskuje. I trzeci wariant: tam gdzie klient tego nie kupi, ten sam agent stoi na modelu lokalnym — to zamiana jednej linii w konfiguracji, nie przepisywanie systemu.' LIKELY FOLLOW-UP: 'Dobrze, ale te serwery i tak stoja u amerykanskiego dostawcy — CLOUD Act to przykryje niezaleznie od regionu.' COUNTER: concede the point immediately, because it is correct, and move to the decision instead of defending: 'Tak, i to jest realne ryzyko, ktorego nie da sie wyklikac — region UE nie chroni przed CLOUD Act, jesli spolka matka jest amerykanska. Dlatego to nie jest decyzja techniczna tylko decyzja o ryzyku, i podejmuje ja klient, nie ja. Moja robota jest taka, zeby zmiana dostawcy na europejskiego albo na model lokalny kosztowala dzien, a nie kwartal — i wlasnie po to jest ta warstwa abstrakcji na trzecim slajdzie.' Note what the counter does: it agrees with the hard part, refuses the false choice, and lands on an architectural point that was already in the talk. That is a Topspin used exactly once. VERIFY BEFORE USE: provider retention terms move — re-read the OpenAI data-controls page and the Anthropic API retention page the week of the talk, and do not state a number you have not checked that month.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

The bank is an asset that compounds across talks, so training it is mostly a matter of never throwing one away. Week 1: build the first bank properly, 3-4 hours, for one specific talk. Weeks 2-4: after every talk, meeting, client call or webinar, add the questions actually asked, in the asker's own words, with what you wish you had said — five minutes, same day, because within 48 hours you will remember the gist and not the sting. Month 2-3: the entries start repeating across contexts, and that repetition is the signal that an entry has become a position rather than an answer; those graduate onto slides as pre-emptions. Ongoing: once a quarter, re-tag the bank — SOLID entries decay into THIN as facts move (provider terms, pricing, model capabilities), and a stale SOLID is more dangerous than a THIN, because you will say it with confidence. Separately, train the skill of hearing the motive rather than the words: in any meeting, silently classify each question you receive as genuine / status / territorial / risk-check / trap before answering. That is free, invisible, and it is the part that does not transfer from reading.


**drill**

The hostile-persona drill, 20 minutes. Input: your locked deck as text or PDF, an LLM, a phone recording video, a timer. Action: (1) 5 min — prompt the model: 'You are a staff security engineer at a Polish bank attending this talk. You are sceptical and slightly hostile. Write the five questions you would ask, in Polish, in the register you would actually use, and after each one state in one sentence what you are really trying to find out.' Repeat with two more personas (CFO, competitor's CTO). You now have 15 questions and 15 motives. (2) 10 min — shuffle them, and answer each one to camera, standing, in one take, capped at 45 seconds by a visible timer. No retakes; a retake is not a stage. (3) 5 min — watch on mute first, looking only at whether your body goes defensive (arms in, weight back, faster) on any specific question. Then watch with sound and tag each answer SOLID / THIN / NO. Observable output: a list of exactly which questions made you defensive on camera, which is information you cannot get from thinking about it, plus three to five entries you now know are NO and must either research or answer honestly.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

One bank entry — the four-line block of issue, answer, follow-up, counter. It is the right unit because it can be written in five minutes, spoken in 90 seconds, and tested in isolation, and because entries accumulate independently of any particular talk.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

First build: 3-4 hours for a 15-20 entry bank (generation 45 min, collapsing and ranking 30 min, writing 90 min, speaking aloud 30 min, card 10 min). Minimal deadline version: 90 minutes for 8 entries. Per subsequent talk: 30-45 minutes, because you are updating a bank rather than building one. Maintenance: 5 minutes after every talk, 30 minutes quarterly for re-tagging. This is the most expensive item in the Q&A group and the only one with an asset at the end.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

Four loops. Immediate, on camera: whether your body changes when a specific question is read out — the defensive tells appear before you are aware of them. On the day: the ratio of questions asked that map to a prepared issue; a bank that covers 60-70% of what arrives is working, one that covers 20% was built from the wrong source (probably an LLM alone, without your own adversarial read). In the room: whether the follow-up comes and whether your counter ends the exchange or extends it — a counter that produces a third question was not a counter. Slowest and most valuable: whether a hallway conversation afterwards starts with 'that thing you said about the redaction layer', which means the prepared answer was specific enough to be repeatable by someone else.


**measurable_kpi**

(1) Bank coverage rate: questions asked that map to a prepared entry / total questions asked. Target 60%+ by the third talk on the same material. (2) Number of entries tagged NO — track it going down as you actually research the gaps; a bank with zero NOs is a bank you were dishonest about. (3) Mean prepared-answer duration on the timer, target 40 seconds, hard cap 60. (4) Entries added per talk, target 2-4; a talk that produces no new entries means the room was not engaged. (5) Content by-product: entries converted into published posts, target 1 per week from an existing bank, which is the reuse metric.

### Online and recorded


**online_variant**

The bank matters more, not less, and its content shifts. In a webinar the questions arrive typed, which means they are better formulated, more pointed, and often more hostile than spoken ones — anonymity plus a text box removes the social cost of asking the sharp version. It also means you can see them before answering, so the bank functions as a lookup table rather than a memory aid, and you can afford 20 entries you half-remember instead of 8 you know cold. Open the bank in a second window, visible. Two online-specific additions to the bank: the 'is this an ad' question, which arrives far more bluntly in chat than in a room ('czy to jest webinar czy prezentacja sprzedazowa'), and the link-request question ('gdzie to jest na GitHubie'), which has a one-line answer that should be pre-written and pasteable. For the Pionierzy AI-style format, also prepare the entry for the question nobody asks aloud but everyone types: 'ile to kosztuje'.


**recorded_variant**

The stakes change in kind, not degree. A prepared answer said badly in a room evaporates; the same answer on YouTube is a permanent, searchable, quotable artefact attached to your name and your company's. Three consequences. (1) Factual precision becomes non-negotiable: a wrong claim about a provider's retention policy or an AI Act risk class is now a document, and a Polish IT audience will screenshot it. Re-verify every number in a SOLID entry the week of the talk. (2) Never name a client, a competitor or a specific failure that could identify either, however well the question invites it — a bank entry should carry an explicit 'do not name' marker where relevant, because that decision must be made before adrenaline, not during. (3) The recording is where the bank pays its second dividend: a paraphrased question plus a 40-second prepared answer is a finished, self-contained clip needing no editing, which is exactly the format the existing carousel-and-clips workflow consumes. Ask the organiser whether the Q&A is in the recording at all — some events cut it, in which case the reuse argument disappears and the bank's value is purely defensive.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

The FAQ Masquerade — building a list of the questions people usually ask, which by definition excludes every question that was ever dangerous, and then feeling prepared. The Script — writing full paragraphs and trying to deliver them, producing a memorised recitation that a room hears as memorised within four words; the bank holds positions, not prose. The Fluent Wall — five perfectly polished consecutive answers, which makes an audience suspect a corporate media training and start looking for the seam. Answer Inflation — the prepared answer expands on stage because you finally get to use it, and a 40-second position becomes a 2-minute lecture that eats the Q&A. The Fabricated SOLID — an entry you tagged confident because you did not want a NO on your list; on stage this is how a speaker ends up asserting something about GDPR they cannot support, which is worse than the original gap. The LLM Monoculture — generating the whole bank from a model, which yields the twelve obvious objections and none of the specific ones, and produces a speaker who is armoured against generic scepticism and naked in front of an expert.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Building the bank before the deck is locked, so half the entries are about content you cut. Indexing by question wording instead of by underlying issue, so nothing matches on the day. Writing the answers and never speaking them — this is the most common failure and it destroys the mechanism, because the whole benefit is retrieval and reading is not retrieval. Stopping at the first answer and never preparing the follow-up, which produces ten seconds of competence followed by thirty of improvisation. Preparing only technical objections and none of the personal ones ('you sell this, why should we believe you'), which are the ones that actually rattle a practitioner. Carrying the full text on stage instead of triggers, then looking down and reading. Not re-verifying facts that move — provider retention terms, pricing and model names changed materially between 2025 and 2026, and a confidently stated stale number is a worse outcome than 'sprawdze'.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

A tutorial or workshop where the questions are operational ('how do I install this') rather than adversarial — the AI Startup Builders 120-minute format needs a different artefact, a troubleshooting list, not a red team. A talk with no Q&A at all, where the effort is better spent on the content. A first-time talk on unfamiliar material where the bank would be mostly NOs — in that case the honest move is to narrow the claim in the talk rather than to armour a claim you cannot defend. And under genuine time pressure with the timing gap unresolved: if the timed run-through says 27 minutes for a 25-minute slot, cutting the talk beats building the bank, because overrunning is certain and the hard question is only probable.


**fallback_if_it_fails**

When a question arrives that is not in the bank and you have nothing: say so in one clean sentence and convert it into a commitment, not an apology — 'Nie wiem. Zapisze to i odpisze Ci do konca tygodnia — zlap mnie po prelekcji, wezme kontakt.' Then actually do it; the follow-through is worth more than the answer would have been. When the question is in the bank but the prepared answer is visibly not landing (the asker's face does not change, the room is quiet in the wrong way), abandon the prepared version mid-answer rather than finishing it — 'Powiem inaczej' and give the one-sentence version. When a bank entry turns out to rest on a fact you now suspect is stale, do not bluff past it: 'Podaje z pamieci i moge sie mylic o rzad wielkosci — sprawdz to zanim zacytujesz.' When the follow-up is sharper than your counter, concede the specific point and keep the frame, as in the worked example above: agreeing with a correct objection costs almost nothing and defending against one costs the room.


**works_signal**

Landing: the asker writes something down while you answer; the follow-up you predicted actually arrives, word for word or close (this is the single most satisfying confirmation that the bank was built right); a second person asks a related question, meaning the topic opened rather than closed; someone finds you afterwards and re-uses your phrase back at you. Failing: the asker restates the question after your answer, which means you answered the prepared issue and not their question; the room goes flat and nobody follows up on a topic that should be contentious, meaning the answer sounded rehearsed enough to end the conversation without satisfying it; you notice yourself speeding up and adding sentences, which is the tell that the entry was a THIN you tagged SOLID; the moderator steps in to move things along mid-answer, which means it ran long.


**dependencies_conflicts**

Prerequisites: the deck must be locked (a bank built against a moving deck is wasted work) and qa-answer-protocol must exist, because the bank supplies content and the protocol supplies shape — the bank without the protocol produces a good answer delivered badly, and the protocol without the bank is the NCP4 outcome, a well-shaped container that is empty. llm-as-rehearsal-partner is the generation engine for step 2 and its stated limits apply directly here. Feeds: hostile-questions (the bank is where the false-premise entries are pre-written), closing-after-qa (a bank keeps answers to 40 seconds, which is what leaves room for the prepared close), on-screen-data-leak (the 'do not name' markers in bank entries are the spoken counterpart of the same discipline), and talk-to-content-reuse (entries are post-shaped by construction). Conflicts: with the time budget — every pre-emption slide is ~60-75 seconds off a slot that the timing gap says is already over-full, so pre-empting is capped at two and only after the run-through comes in at or under 21 minutes; and with the honest-uncertainty principle — a bank creates pressure to have an answer for everything, and resisting that pressure (keeping entries tagged NO) is the discipline that makes the whole thing credible.

### Tooling


**tool_support**

An LLM for adversarial generation with named personas — the highest-leverage single tool, and strictly for input rather than assessment. A plain text or markdown file under version control alongside the deck, so the bank travels with the talk and diffs across versions; a spreadsheet works if you want the SOLID/THIN/NO tags sortable. Phone camera plus timer for the persona drill. Whisper or any transcript tool on the Q&A audio from a previous talk, which surfaces the questions actually asked in the asker's own words rather than your reconstruction of them. One human sceptic, unautomatable and worth more per minute than anything on this list. For the fact-checking pass: the primary vendor documentation pages, not summaries of them — provider retention terms are the entries most likely to be stale and most damaging when wrong.


**survives_pdf_export**

partially. The pre-emption slide is a static content slide and survives PDF export intact, including any theme-scoped styling — that half is safe. The bank carried as Marp presenter notes does NOT survive: notes are rendered in presenter view and in the HTML export, not into the PDF, so in the exact failure scenario where you are running from the organiser's PDF on a borrowed laptop, the bank is gone. This is not a reason to avoid presenter notes; it is a reason the index card is the primary artefact and the notes are the convenience copy.

### Effort and payoff


**prep_effort**  
<sub>low | medium | high — one-off setup cost</sub>

high — 3-4 hours for a full first build, 90 minutes for the deadline version, and it is the only Q&A item that costs more than an evening. Amortised, the effort drops sharply: the second talk on the same material costs 30-45 minutes, and the bank doubles as content stock for the reuse workflow, which is what makes the initial cost defensible rather than indulgent.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

The named failure stops recurring immediately — the first talk after building the bank, the predictable hard question gets a good answer instead of an acceptable one, and you will know it in the room. Answer length drops from ~90 seconds improvised to ~40 prepared, which visibly increases how many questions fit in a 5-minute slot. The less obvious effect appears over three or four talks: knowing the objections are covered changes how you deliver the talk itself, because you stop unconsciously hedging the claims you were afraid of being challenged on, and hedged claims are the ones a technical audience discounts. By-product from talk one: 15-20 finished post drafts.


**needs_organiser_agreement**

no for the bank itself — it is entirely yours and invisible until used. yes for three adjacent decisions worth settling with the BB4IT organisers before 2026-09-12: (1) whether the Q&A is recorded and published, which determines both the precision bar on factual entries and whether the reuse dividend exists at all; (2) whether questions are moderated or open-floor, since a moderator who filters questions changes which entries are likely to fire; (3) whether an anonymous question tool is in use, because typed anonymous questions skew harder and would move several THIN entries up the ranking.


**priority**

high — arguably the highest-value item in the Q&A group for this speaker specifically, because it is the only one that addresses the content of the failure rather than its form, and because the failure it addresses has already happened once and is documented. The qualification is cost: at 3-4 hours it is the most expensive thing on the wave-1 list, and it competes with the timed dry run for the same evening. The resolution for 2026-09-12 is the 90-minute eight-entry version, done after the run-through, not instead of it — the timing gap has a higher probability of biting than any single question, but the question, if it comes, is the one that ends up on YouTube.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

- https://www.informit.com/store/in-the-line-of-fire-9780136933557 — Weissman, In the Line of Fire, 3rd ed.; the source of 'identify and develop position statements for each red flag issue' and of the prepare-and-practice framing
- https://ptgmedia.pearsoncmg.com/images/9780131855175/samplepages/0131855174.pdf — publisher sample pages from In the Line of Fire, including the method summary
- https://westsidetoastmasters.com/resources/master_presenters/lib0041.html — 'Preparing for Questions'; Roger Ailes' five-toughest-questions rule and the advice to have other people write the questions
- https://developers.openai.com/api/docs/guides/your-data — OpenAI primary documentation: abuse-monitoring logs by default for all API usage, retained up to 30 days; Zero Data Retention and Modified Abuse Monitoring are approval-gated
- https://openai.com/enterprise-privacy/ — OpenAI enterprise privacy page; the no-training and retention commitments in their own words
- https://platform.claude.com/docs/en/manage-claude/api-and-data-retention — Anthropic primary documentation: API inputs and outputs deleted after 7 days (reduced from 30 on 2025-09-14), never used for training; ZDR for qualifying enterprise customers
- https://privacy.claude.com/en/articles/15425996-data-retention-practices-for-covered-models — Anthropic privacy centre detail on retention practices
- https://arxiv.org/pdf/2510.11558 — 'Zero Data Retention in LLM-based Enterprise AI Assistants' (2025 preprint); the closest thing to a peer-reviewable treatment of the architecture the sensitive-data answer describes
- https://regolo.ai/zero-data-retention-llm-gdpr-ai-act-compliance/ — European CTO guide to ZDR, GDPR Art. 5(1)(c) and 17, EU AI Act Art. 12 logging, and the CLOUD Act point that survives EU data residency; note the author is a vendor with a commercial interest in the conclusion, so treat the architectural argument as advocacy and verify the legal claims independently
- https://www.edenai.co/post/zero-data-retention-for-ai-apis-what-it-is-why-enterprises-need-it-and-how-to-get-it — vendor-neutral explainer separating no-training commitments from zero retention, which is the distinction the prepared answer turns on
- https://benjaminball.com/blog/how-to-answer-questions-after-a-presentation/ — practitioner guidance on anticipating questions and jotting three key points per answer
- https://publicspeakingacademy.co.uk/how-to-handle-difficult-audience-questions-without-losing-composure/ — question typology: genuine questions that challenge assumptions versus hostile questions aimed at the narrative
- https://sheridancollege.libguides.com/presentationskills/delivering-your-presentation/handling-audience-questions — academic library guide on classifying and handling audience questions
- https://cezarywalenciuk.pl/blog/speech/8-porad-na-odpowiadanie-na-pytania-od-publicznosci-zdobadz-szacunek-pora-na-pytania — Polish practitioner list; includes 'anticipate questions and prepare responses beforehand' and the never-bluff rule ('nie wiem')
- https://flowconsulting.pl/podcast/odcinek-13-5-sposobow-jak-odpowiadac-na-trudne-pytania/ — Polish-language treatment of five ways to handle difficult questions during a presentation

### Not established by this research

- `marp_implementation`


---

## Rehearsal ladder and a declared rehearsal plan

> Climb a fixed sequence of rehearsal modes that get progressively closer to stage conditions — silent read, aloud, standing, to camera, to one person, full dress run — and commit in writing to how many of each you will do, and when, before you start.

### What it is

- **category** — practice


**talk_moment**

before arriving — the ladder spans the 7 to 10 days before the talk, with the dress rehearsal the day before and the declaration written the moment the talk is accepted

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

Two mechanisms, and they are independent — which is why the item pairs them. (1) The ladder works by specificity of practice. Skill is specific to the conditions it was trained under (Proteau 1992; the memory analogue is Godden and Baddeley's encoding specificity, 1975): what you rehearse silently while sitting is retrievable while sitting silently, not while standing under lights with a clicker in one hand. Each rung adds one performance condition — voice, body and breath, a lens, a listener, the whole apparatus — so the gap between the last rehearsal and the first minute on stage is one small step instead of one large one. It also front-loads cheap discovery: a silent read catches missing logic at 10 percent of the cost of catching it in a dress run. (2) The declaration works as an implementation intention. 'I'll rehearse a few times' is a goal intention and predicts almost nothing; 'Tuesday 20:00, one standing aloud run of blocks 1-4 at my desk' is an if-then plan tied to a cue, and Gollwitzer and Sheeran's meta-analysis over 94 independent tests and more than 8,000 participants puts the effect on goal attainment at d = 0.65 — medium-to-large. For a practitioner speaker whose real failure mode is not lack of skill but rehearsal that never happens because a client call ate the evening, the declaration is the operative half.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. The day the talk is accepted, write the plan: number of runs per rung, dates, times, and where. Six lines in the talk's brief file, not in your head. Include what each run is for. 2. Rung 1 — silent read of the full outline and slide sequence, seated, 15 minutes. Purpose: does the argument hold and is anything missing? Fix structure here, where fixing is cheap. 3. Rung 2 — aloud, seated, sections only, not timed. Purpose: find the sentences you cannot actually say. Tress Academic's rule applies: the first two or three rounds are not fluid, so do not time them and do not draw conclusions from them. 4. Rung 3 — aloud, standing, full run, slides advancing, still untimed if it is the first standing pass. Purpose: breath, pace, hands, and whether the transitions exist. 5. Rung 4 — to camera, full run, recorded. Purpose: an objective second opinion, and for this speaker it doubles as raw material for the carousel and clips. 6. Rung 5 — to one person, live, with stated review criteria given before they watch (not 'what did you think'). Purpose: the only rung that tests whether the thing is comprehensible to someone who is not you. 7. Rung 6 — dress rehearsal: the real laptop, the real deck build, the recorded demo actually played through real speakers, the clicker, standing, timed, no stopping. Purpose: the timed dry run and the 85 percent check, plus every technical failure you would rather meet at home. 8. After each run, write one line: what changed. If nothing changed, the rung was tourism, not rehearsal. 9. Never skip downward — if the dress run exposes a structural hole, you go back to rung 1 for that block only, not for the whole talk.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Any talk that matters more than an internal update, and above all a first delivery of new material. The full six-rung version earns its cost when the material is new, the audience is unfamiliar, the slot is fixed and the talk will be recorded — all four true for BB4IT. Compress to rungs 3, 4 and 6 for a repeat of a talk you have delivered before. For a signature talk delivered for the fifth time, only rung 6 (a timed run in real conditions) is genuinely required, and even that mainly to re-time it for a different slot length.

### Evidence


**evidence_level**

mixed, and the two halves differ sharply. The declared plan rests on a controlled meta-analysis: Gollwitzer and Sheeran 2006, d = 0.65 over 94 independent tests, more than 8,000 participants — one of the better-replicated findings in motivation research, though effects are smaller in field settings and depend on the goal already being wanted. The ladder itself is practitioner consensus with an indirect empirical warrant from the specificity-of-practice and encoding-specificity literatures; no study compares a six-rung ladder against three unstructured run-throughs for conference talks, and the exact rung order is convention. Individual counts ('two to three run-throughs', 'five to seven for a nervous speaker') are single-expert claims from speaking.io.


**myth_status**

sound practice with a wrong justification. The practice is well grounded; the popular justification usually is not. Two specific misattributions to avoid: (a) 'it takes 21 days to form a habit' and similar habit folklore used to justify a rehearsal schedule — the actual field study (Lally et al. 2010) found a median of 66 days with a range of 18 to 254 and is about habit automaticity, not talk preparation; (b) 'one hour of rehearsal per minute of talk', quoted in TED-adjacent guidance as though measured. Neither is needed: the defensible claim is that a specific, dated plan is executed far more often than an unspecific one, and that rehearsal transfers best when its conditions resemble the stage.


**contested_claims**

(1) 'Rehearse until you can do it in your sleep' — over-rehearsal to word-level memorisation is a real risk that produces a recitation the room can hear, and it is exactly what makes recovery from an interruption harder, because a memorised script has one retrieval path and a rehearsed structure has many. (2) 'Practising in front of a mirror' — widely repeated, weakly supported, and it splits attention between speaking and self-monitoring; the camera does the same job better and later. (3) 'Never rehearse the day of the talk, you will burn out' — no evidence; a single quiet pass of the opening on the morning is cheap insurance and is what the NCP4 drift argues for. (4) 'The number of run-throughs is what matters' — the count is a proxy; what matters is that each run is under different conditions and produces a change.


**key_sources**

Gollwitzer, P. M. and Sheeran, P. (2006), 'Implementation intentions and goal achievement: a meta-analysis of effects and processes', Advances in Experimental Social Psychology 38:69-119 — d = 0.65 across 94 independent tests, >8,000 participants; the specific finding is that specifying when, where and how a chosen action will be performed substantially raises the rate at which it actually is. speaking.io, 'Practicing It' (Zach Holman) — two to three full run-throughs for an experienced speaker, five to seven for a nervous or first-time one, always out loud, and record yourself; practitioner, but the reference point for the developer-conference community. Tress Academic, 'How to rehearse a scientific presentation' — several shorter rehearsal units spread over several days rather than one long session, the first two or three rounds will not be fluid so do not judge or time them, and isolate difficult sections instead of always running the whole talk; practitioner, academic-conference context. Proteau, L. (1992), 'A sensorimotor basis for motor learning: evidence indicating specificity of practice', QJEP 44A — learning is specific to the sources of information available during practice, which is the mechanism behind climbing toward stage conditions rather than rehearsing in a comfortable one.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

(1) Specificity of practice has uneven support — it is well evidenced for aiming and precision tasks and much weaker for gross motor skills, and public speaking is neither; the transfer argument for the ladder is therefore analogical, not demonstrated. (2) Implementation-intention effects shrink in field settings and vanish when the underlying goal is not genuinely wanted; declaring a rehearsal plan you privately do not intend to keep buys nothing. (3) A six-rung ladder can become preparation theatre — the rungs are visible, satisfying and countable, which makes them an attractive substitute for the harder, less countable work of cutting the deck. (4) For a practitioner speaker with 17 years of domain fluency, the marginal return on rungs 1 and 2 is low; the binding constraints are the timed run and the peer rung, and a plan that treats all rungs as equal spends scarce evenings on the cheap ones. (5) Excess rehearsal of a talk you will deliver once has a real opportunity cost against improving the deck itself.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

Zero stage time; it is the scaffold every other item is installed on. Concretely for a 25 + 5 slot with new material: 6 sessions over 7 days, roughly 4 hours total. Assign each rung a job rather than repeating the same run six times — rung 1 checks the argument, rung 3 checks breath and transitions, rung 4 (camera) checks the opening and the demo narration, rung 5 (one person) checks comprehensibility and generates the first red-team questions, rung 6 checks time and technology. The single most valuable placement for this speaker: put the word-for-word scripted opening on rungs 3, 4 and 6 every single time, because the opening is the segment with a documented failure and it costs 90 seconds to rehearse.


**time_budget_min**

0 minutes on stage. Off stage, roughly 3.5 to 4.5 hours across a week for a 25-minute talk: 15 min (rung 1) + 30 min (rung 2) + 30 min (rung 3) + 40 min (rung 4, including watching the recording) + 45 min (rung 5, including the debrief) + 60 min (rung 6, two timed runs plus fixes). The declaration itself costs 10 minutes.


**audience_change**

Invisible to the audience as an item, but it is the reason the audience gets a talk with a clean opening, working transitions and a demo that plays. The specific observable difference at the top of the ladder is that the first 90 seconds sound composed rather than searching, which is what buys the room's attention for the remaining 23 minutes — particularly in a late slot where the default is disengagement.


**application_pl_talk**

The ladder transfers wholesale; the content of each rung shifts. Because the delivery is Polish over English slides, rung 2 (aloud, seated) acquires a job it does not have in a monolingual talk: fixing the Polish sentence for every English term on a slide, once, so it is not improvised on stage. Decide there whether it is 'agent' or 'agentowy system', whether you say 'kontekst' or 'context window', and whether the English phrase is declined or left in nominative — then keep it identical on every later rung, because inconsistent terminology is what makes a bilingual technical talk feel unrehearsed. Rung 5 should ideally be a Polish-speaking technical peer, since the failure mode being tested is a Polish sentence that only makes sense if you already know the English term behind it. Rung 4 (camera) doubles as content production: the same Polish audio feeds LinkedIn clips, so record it in a usable framing rather than a laptop webcam from below.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

opening (direct and primary) — the unfinished NCP4 action item is 'write and rehearse a one-sentence hook plus a 30-second agenda', and the ladder is the mechanism that turns 'rehearse' into six dated occasions on which the opening is actually spoken; drift at the start is a retrieval failure under conditions never trained, which is precisely what the rungs address. timing (direct, via rung 6, which is where the timed dry run and the 85 percent check live). qa (indirect but real — rung 5 with a technical peer is the cheapest source of the hard questions the red-team bank needs, and the sensitive-data-in-cloud-LLMs question would have surfaced there). reuse (direct side effect — rung 4 produces recorded Polish audio and video of the talk before the event, which is carousel and clip material that currently only exists after the fact). demo_risk (rung 6 only, where the recording is actually played through real audio). late_slot: none directly.


**minimal_2h_version**

Collapse six rungs into three and accept the loss. 0:00-0:10 write the three-line plan anyway — it is the cheapest part and it decides what the two hours are spent on. 0:10-0:25 rung 3 compressed: standing, aloud, opening and close only, three times each; these are the two segments where failure is most expensive and rehearsal is most efficient. 0:25-1:00 rung 6 first pass: full timed run with the deck and the demo recording playing, standing, no stopping. 1:00-1:20 fix what the run exposed, cutting whole blocks. 1:20-1:50 rung 6 second pass, timed, with a phone recording so you have at least one camera artefact. 1:50-2:00 watch only the first 90 seconds of that recording and fix the opening. Skipped rungs, knowingly: the peer rung (replace with sending three red-team questions to a colleague by message) and the silent read (the structure is what it is at this point).


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

Agentic-AI talk, accepted three weeks out. Declared plan written the same day into the talk's brief file: 'Mon 8 Sep 20:00 — silent read of the outline, 15 min, desk. Tue 9 Sep 20:00 — aloud seated, blocks 1-4 plus every English term's Polish sentence, 30 min. Wed 10 Sep 07:30 — standing full run, untimed, 30 min. Wed 10 Sep 20:00 — to camera, full run, phone on a tripod at eye level, 40 min including playback. Thu 11 Sep 18:00 — to one person (technical colleague), criteria sent in advance: did the architecture land, what would you attack, where did you drift. Thu 11 Sep 21:00 — dress rehearsal: real laptop, HDMI to TV, demo recording through speakers, clicker, timed, target 21:00.' Outcome pattern to expect: rung 2 rewrites two slides, rung 3 finds that block 3 has no transition into block 4, rung 4 shows the opening is delivered to the floor, rung 5 produces four questions of which one is the sensitive-data question, rung 6 comes in at 24:40 and forces a cut.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

Over months the trainable skill is not 'rehearsing' but running the plan reliably, and then shortening it. Three habits build it. (1) Make the declaration a standing part of the talk brief — a template section in the same file as the abstract, filled in at acceptance time, so it is never a separate decision. (2) Log actual versus planned for every talk: which rungs happened, which were skipped, what went wrong on stage. Over four or five talks the correlation becomes personal and specific — 'every time I skip the camera rung, I open badly' is worth more than any general guidance. (3) Progressively drop rungs that stop producing changes. A rung whose 'what changed' line has been empty for three talks running is a rung you have outgrown for that material; delete it and reinvest the evening in the peer rung, which almost never stops producing changes.


**drill**

Input: the current talk brief and a calendar. Action (10 minutes): write six dated lines — rung, date, time, place, duration, and the single question that rung must answer — then create the calendar entries with reminders, and message one named colleague with a specific ask and two proposed slots for the peer rung. Second half (10 minutes): execute rung 3 for the opening only — standing, aloud, the scripted hook plus the 30-second agenda, five consecutive times, without slides. Observable output: six calendar entries that exist, one sent message, and a recording of the fifth repetition of the opening in which you do not stop, hedge or restart. Pass criterion: repetitions four and five are near-identical in wording and under 90 seconds.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

Varies deliberately by rung, and that is the point of the ladder. Rungs 1-2: the sentence and the slide. Rung 3: the block, and the transition between two blocks. Rungs 4-6: the full run. A plan that uses the full run as its unit at every rung wastes the cheap rungs; a plan that never reaches the full-run unit never tests the thing that will actually be delivered.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

3.5 to 4.5 hours across a week for a new 25-minute talk, plus 10 minutes to write the plan and the cost of one colleague's 45 minutes. For a repeat of existing material, 1 to 1.5 hours (rungs 3, 4, 6). The distribution matters as much as the total — Tress Academic's point that several shorter sessions across days beat one long one is the difference between a plan that is executed and a four-hour Thursday evening that gets cancelled.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

One per rung, and each is different in kind: rung 1 gives a logical gap you notice while reading; rung 2 gives sentences that will not come out of your mouth; rung 3 gives breath, pace and missing transitions felt in the body; rung 4 gives the camera's objective record — posture, eye line, filler words, the opening; rung 5 gives the only external human signal, and only if you supply criteria in advance rather than asking 'how was it'; rung 6 gives the stopwatch and the technology. The meta-loop is the 'what changed' line after each rung: no change means either the rung is redundant or it was not really performed.


**measurable_kpi**

Plan adherence: rungs completed / rungs declared, target 5 of 6 or better — this is the number that predicts everything else. Secondary: (a) opening repetitions logged, target at least 8 across the week and at least 3 under standing conditions; (b) number of substantive changes generated per rung, tracked to find the rungs that have stopped earning their place; (c) days between first and last rehearsal, target at least 5 (spacing, not massing); (d) rung-6 duration against the 85 percent target; (e) filler words per minute measured off the rung-4 recording and again off the rung-6 recording, to see whether the ladder is moving the number.

### Online and recorded


**online_variant**

The ladder shortens and one rung becomes non-negotiable. Rung 3 (standing) matters less — many webinars are delivered seated — but rung 4 becomes the highest-value rung of all, because the camera rehearsal is a near-perfect simulation of the delivery conditions, which is not true for a stage talk. Add a rung the room version does not need: a full technical rehearsal inside the actual platform, with the actual screen share, the actual second monitor layout and the actual notification-suppression state, because the platform's start-up ritual and window management are part of the performance. Replace the peer rung with a colleague joining the test meeting, which also tests audio from the listener's side. The Pionierzy AI webinar format is the case in point.


**recorded_variant**

Two consequences. First, the camera rung stops being only a diagnostic and becomes production: framing, background, light and audio quality of the rehearsal recording determine whether the footage is reusable, and this speaker already mines every deck for carousels and clips — so rehearse in a framing you would publish. Second, because the event recording outlives the room, the dress rehearsal must include the things the recording will expose permanently: the notification banner, the visible client name in a browser tab, the terminal font too small to read on video. Add an explicit screen-hygiene pass to rung 6. What the recording will silently lose — unrepeated audience questions, anything you pointed at with a laser — should also be rehearsed around at rung 6, not discovered in the edit.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

(1) The declared plan as a document that is written, admired and never executed — a to-do list with no cue, which is exactly the goal intention the implementation-intention literature says fails. (2) Six repetitions of the same comfortable rung, counted as six rehearsals: sitting at the desk, muttering through the deck, six times. (3) Climbing the ladder without changing anything — running the talk repeatedly as a confidence ritual rather than a diagnostic, so problems get more familiar instead of getting fixed. (4) Word-level memorisation as the goal, which produces a recitation and a brittle single retrieval path; the opening is the only segment that should be memorised verbatim. (5) The peer rung wasted on 'what did you think' — an ungrounded question that reliably returns 'it was good'. (6) Booking all rungs into one evening, which is massing, not a ladder. (7) Declaring the plan publicly for accountability theatre while quietly intending to do rung 6 only.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Starting the ladder too late, so rungs 1-3 get compressed into the day before and structural problems surface when there is no time to fix them. Judging the talk on the first aloud run, which is always bad — Tress Academic's rule exists because speakers conclude 'the talk is broken' from a rehearsal artefact. Timing too early, which produces a discouraging number that reflects disfluency rather than length. Skipping the camera rung because watching yourself is unpleasant — reliably the most-skipped and one of the highest-yield rungs. Asking the peer for feedback without criteria. Rehearsing without the actual technology, so the demo recording's audio path is first tested in front of 100 people. Rehearsing the slides but never the transitions between blocks, which is where a talk actually falls apart. Not rehearsing the close, on the assumption that you will get there naturally.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

Material delivered many times where the marginal rung changes nothing — the signature-talk case, where a single timed run in real conditions is the whole reasonable plan. Genuinely interactive formats (the 120-minute workshop) where most of the time belongs to participants and the useful preparation is exercise design and facilitation contingencies, not run-throughs of your own speech. A slot under 5 minutes, where rehearsing the whole thing eight times is cheaper than administering a ladder. Also: when the deck is not yet finished, rehearsing it is premature — a ladder run against material you are still rewriting burns evenings and produces changes that are discarded.


**fallback_if_it_fails**

If the week collapses and only one evening survives, execute rung 6 and nothing else: the timed full run in real conditions is the rung that catches the failures that cannot be fixed on stage. If even that is impossible, protect the two segments where preparation has the highest marginal value — the opening (five standing repetitions, 10 minutes) and the close (three repetitions, 5 minutes) — and accept that the middle will be improvised around the slides. If the peer rung falls through because the colleague cancels, substitute an LLM red-team pass for the questions and your own camera recording for the delivery signal, and note that neither replaces the comprehension check. If the dress rehearsal exposes a problem you have no time to fix, do not attempt a rewrite the night before: write the workaround on a card instead.


**works_signal**

In rehearsal: each rung produces a written 'what changed' line; the opening becomes word-stable across repetitions while the middle stays flexible; the standing runs stop needing restarts; the rung-6 duration lands under target twice. On stage, the ladder is working if the first 90 seconds come out as written, the transitions between blocks arrive without a hunting pause, and you reach for a slide without having to look at the screen to know what is next. It is failing if you find yourself reading your own slides, if the first minute deviates from the script, or if any transition begins with a filler ('tak więc…', 'no i…') that was not there in rehearsal.


**dependencies_conflicts**

Prerequisites: a finished-enough deck (rehearsing unstable material is waste) and modular time blocking, which gives the rungs something to isolate. Contains: the timed dry run and the 85 percent rule occupies rung 6; modular drills are the sub-rung practice that the ladder's 'isolate the difficult section' step turns into; self-recording is rung 4; the peer dry run is rung 5; the LLM red team can substitute for part of rung 5 but not for its comprehension check. Enables: the scripted opening only exists as a delivered artefact if rungs 3-6 rehearse it; the red-team question bank is largely populated at rung 5. Conflicts: (a) rehearsal time competes directly with deck-improvement time in the same finite evenings — over-climbing a ladder against a weak deck is the classic misallocation; (b) verbatim memorisation of the whole talk conflicts with reading the room and with the on-stage cut list, both of which need a structure that can be re-ordered live; (c) the camera rung's production framing conflicts with its diagnostic purpose if perfecting the shot displaces running the talk.

### Tooling


**tool_support**

Calendar with reminders (the cue half of the implementation intention — without it the declaration is just a list); the talk brief file as the single place the plan lives; a phone on a tripod for rung 4; a stopwatch for rung 6; the real laptop, clicker, HDMI and speakers for rung 6; a written criteria sheet sent to the peer before rung 5; transcription (Whisper or similar) over the rung-4 audio for filler-word and pace counts; an LLM to generate the peer's question list in advance and to critique the rung-4 transcript; a two-column log across talks (rungs planned, rungs done, what happened on stage).


**marp_implementation**

The plan itself belongs next to the deck source, not in a separate tool — a `<!-- rehearsal plan -->` block at the top of `slides.md` or, better, a section in the talk's brief file in the same folder, so it is versioned with the deck. Per-rung notes go in Marp presenter-note comments on the relevant slide (the block a rung exposed as weak), which keeps the diagnosis attached to the slide that caused it. For rung 6, Marp presenter mode plus `paginate: true` reproduces the on-stage view; run the actual `npx marp slides.md --pdf` build before the dress rehearsal so the rehearsal uses the same artefact the organiser will get. For rung 4, build to HTML and present from it if you rely on fragments, since that is the only export where they exist.


**survives_pdf_export**

partially. The rehearsal work survives entirely — it lives in the speaker. What does not survive is the apparatus: presenter notes carrying the per-rung fixes, fragments and any build-dependent staging exist only in the HTML or in Marp's presenter window, so a fallback to the organiser's PDF strips them. The practical consequence for the ladder is that rung 6 should be run at least once against the PDF, on the assumption that the PDF is what you will actually stand in front of when something fails.

### Effort and payoff


**prep_effort**  
<sub>low | medium | high — one-off setup cost</sub>

medium — 3.5 to 4.5 hours per new talk plus one colleague's time, spread across a week. The setup cost is low (10 minutes to write the plan and create calendar entries); the recurring cost is real and competes with the working week, which is exactly why the declaration matters more than the ladder.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Visible on the first talk that uses it. Most immediate: the opening stops drifting, because it has been spoken aloud standing at least eight times rather than reviewed in the head. Within one talk cycle: fewer surprises on the day, a demo whose audio path has been tested, and a stopwatch number known days rather than hours in advance. Over three or four talks: a personal, evidence-based short version of the ladder — you learn which two rungs do all the work for you and can drop the rest without loss, which is the point at which preparation stops being expensive.


**needs_organiser_agreement**

no for the ladder. Two dependencies sit outside it and should be settled early: the peer rung needs a colleague's 45 minutes booked in advance (a person, not the organiser), and rung 6 is far more valuable if you know the real conditions — so ask the organiser in advance for projector resolution and aspect ratio, whether audio is available for the recorded demo, microphone type (handheld, headset or lavalier, which changes what your hands can do), whether a confidence monitor exists and what it shows, and whether you can access the room before the session. Those answers change what the dress rehearsal simulates.


**priority**

high. It is the second-highest-priority practice item after the timed dry run, and it is the item that makes the others actually happen — the opening, the Q&A bank, the demo check and the timing target are all things the ladder schedules. It is also cheap to start (10 minutes to declare) and applicable days before a talk rather than months. Lower the priority only for repeat deliveries of a signature talk, where a compressed three-rung version is sufficient.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

- https://www.socmot.uni-konstanz.de/publications/implementation-intentions-and-goal-achievement-meta-analysis-effects-and-processes
- https://kops.uni-konstanz.de/handle/123456789/10973
- https://cancercontrol.cancer.gov/sites/default/files/2020-06/goal_intent_attain.pdf
- https://pubmed.ncbi.nlm.nih.gov/1631322/
- https://link.springer.com/article/10.1007/s00426-016-0748-3
- https://speaking.io/prep/practicing-it/
- https://tressacademic.com/rehearse-presentation/
- https://ispeak.com/101-questions-to-improve-your-presentations/how-do-professional-speakers-prepare/
- https://www.stagemilk.com/successful-rehearsal-process/
- https://www.inknarrates.com/post/presentation-rehearsal
- https://www.komlogo.pl/encyklopedia/137-t/1576-tempo-mowienia

### Not established by this research

- `origin_author`
- `origin_year`
- `pl_language_notes`


---

## Timed dry run and the 85 percent rule

> Run the whole talk out loud once against a stopwatch and treat about 85 percent of the slot — 21:15 in a 25-minute slot — as the pass mark; a longer run is not a pacing problem to be fixed by talking faster, it is a cut list.

### What it is

- **category** — practice


**talk_moment**

before arriving — the full timed run belongs 2 to 7 days out with a final confirmation run the day before; it also produces the checkpoint times you use in the middle blocks on stage

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

Three separate effects stack. (1) Silent or mental review runs far faster than speech, so any estimate not made out loud is systematically low — this is the planning fallacy applied to a talk, and it does not go away with experience. (2) Live delivery inflates: pauses lengthen, filler words multiply, an unplanned aside appears, a question is asked and repeated, the clicker misfires. Community figures put the inflation at roughly 1 to 2 minutes on a 15-minute talk, i.e. 7 to 13 percent. (3) The endgame is asymmetric — a talk that finishes 3 minutes early costs nothing, a talk that runs 3 minutes over eats the Q&A, gets a hand signal from the moderator, and forces the close (the part you wrote most carefully) to be delivered at double speed or dropped. The 85 percent target converts a vague intention to 'watch the time' into a single number that either passes or fails before you leave the house, and the failure produces a specific artefact: a ranked list of what gets cut.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Fix the real speaking budget first. 25-minute slot minus 1 minute of room settling and introduction = 24 minutes of your own. 2. Subtract incompressible fixed blocks — the recorded demo plays for exactly its runtime and does not stretch, so a 3-minute recording leaves 21 minutes of speech. 3. Set the target: 85 percent of the compressible part plus the fixed part. For 21 minutes of speech that is 17:50 spoken plus 3:00 recorded = 20:50, comfortably inside 24. Round to a single number on a sticky note: 21:00. 4. Do the run for real — standing, out loud at delivery volume, slides advancing, the recording actually playing, no stopping to fix a slide, no restarting after a stumble. Stopwatch counting up, face down, not visible while you speak. 5. Record split times at each block boundary as you pass them (or afterwards from the recording). 6. Read the total. If it is at or under target, you are done — write the split times into the presenter notes as checkpoints. 7. If it is over, do not resolve to speak faster. Cut. Delete whole blocks, not sentences: a talklet, a second example, one slide of context. Re-run only the changed section, not the whole talk. 8. Repeat the full run once more the day before, in the same conditions, to confirm the cut held. 9. Carry the split times on stage — at minute 12 you should be entering block 3; if you are not, you take item 1 off the cut list.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Any talk with a fixed slot and a hard handover — a conference track, a webinar with a scheduled end, a client meeting where the next item is someone else's. Highest value at 20 to 30 minutes, where there is enough material to overshoot but not enough slack to absorb it. Mandatory when the slot is shorter than the last time you delivered similar material, when a fixed-length recording or demo sits inside the talk, or when Q&A is inside the slot rather than after it. Skip the formal version only for a talk under 5 minutes or one you have already delivered three times to time.

### Evidence


**evidence_level**

practitioner consensus for the rule itself, with the underlying mechanism resting on controlled research. The planning fallacy (Buehler, Griffin and Ross 1994; Kahneman and Tversky 1977) is a robust controlled finding — people underestimate their own completion times even when they know their past estimates were wrong. The specific 85 percent figure is a convention, not a measured optimum: published guidance ranges from 80 to 90 percent and no study compares them. Treat the practice as sound and the number as a rounded convention.


**myth_status**

sound practice with a wrong justification, in one respect. The practice — a full timed out-loud run with a sub-slot target — is confirmed by universal practitioner consensus and supported by the planning-fallacy literature. The wrong justification is the frequently cited precise figure ('exactly 85 percent', 'exactly 90 percent') presented as if measured. It is not. What is measured is that people underestimate durations; the buffer size is a judgement call.


**contested_claims**

(1) 'Rehearse one hour for every minute of stage time' — repeated in TED-adjacent guidance and quoted uncritically; it is an intensity heuristic for a high-stakes memorised 18-minute talk, not a general requirement, and applied literally to a 25-minute conference talk it would demand 25 hours. (2) 'Speak at 130-150 words per minute' — an English-language figure with no established Polish equivalent; do not transplant it. (3) 'If you are over, just speak faster' — the opposite of the rule: speeding up degrades comprehension and raises filler-word rate, and the overrun returns anyway. (4) 'A full run kills spontaneity' — the objection applies to memorising word-for-word, not to timing a structure.


**key_sources**

The Speaker Lab, 'Effective Time Management for Presentations' — states the rule directly: rehearse to 90 percent of your allotted time so you have buffer, and allocate roughly 40 percent of stage time to the most important point (practitioner, undated blog). speaking.io (Zach Holman), 'Practicing It' — two or three full run-throughs, five to seven for a nervous or first-time speaker, out loud because 'you speak in your mind way too quickly', and record yourself to catch filler words (practitioner, widely cited in the developer-conference community). gotimer.org, 'Public Speaking Timer' — gives the concrete arithmetic: a 15-minute slot needs a rehearsal that finishes at 13-14 minutes because live delivery almost always adds 1-2 minutes (practitioner). Buehler, Griffin and Ross 1994, 'Exploring the planning fallacy', J. Personality and Social Psychology 67:366 — the controlled underpinning for why the self-estimate is low.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

(1) The rule optimises for not overrunning, and a speaker who over-applies it under-fills the slot — finishing at 19 of 25 minutes reads as thin preparation, not discipline, and hands the moderator dead air. The fix is a designed expansion joint (one optional example) rather than a smaller buffer. (2) A single dry run measures one performance of a variable process; run-to-run variance for the same speaker is easily 10 percent, so a run that lands exactly on 21:00 is not proof, it is one sample within noise — which is the argument for two runs, not for a tighter target. (3) For a highly interactive format (workshop, community talk with discussion) the total is dominated by audience behaviour and the rule measures the wrong thing; there you time the blocks, not the talk. (4) Timing a run you deliver alone in a room ignores that adrenaline speeds some speakers up rather than slowing them down — the direction of the error is personal, which is why split times from your own recordings beat any published percentage.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

This is the item that governs the shape of the whole 25 + 5 slot rather than occupying part of it. Concretely for BB4IT: 24 minutes of usable time after the introduction, of which the recorded demo is a fixed block. Target 21:00 on the stopwatch for everything you personally say plus the recording. Build the deck as 6 to 8 blocks of about 3 minutes, put a split time in the Marp presenter notes at each block boundary, and decide the cut list before you walk in: which block goes if you are 2 minutes down at the halfway checkpoint, which second one goes if you are 4 minutes down. Because Q&A is a separate 5 minutes at BB4IT and not inside the 25, an overrun steals from Q&A and from the organiser's turnaround, not from your own content — which makes the last-talk-of-the-day slot even less forgiving.


**time_budget_min**

0 minutes of stage time — it is a preparation control, not a talk element. Its entire function is to make the other items' time_budget_min values true. Budgeting effect: it defines the 21:00 envelope inside which every other item's minutes must fit.


**audience_change**

Nothing directly — the audience never sees it. Indirectly it is the difference between hearing your prepared close and hearing you say 'I see I'm out of time, so quickly, the last thing is...'. The measurable audience-side change is that the final call to action and the resource QR slide are actually delivered, at normal pace, with the room still seated rather than already standing.


**application_pl_talk**

The method transfers unchanged — a stopwatch does not care about language — but two numbers do not transfer. First, English words-per-minute targets are useless here: Paweł should derive his own pace from his own Polish recordings (NCP4, Pionierzy AI #03) rather than importing 130-150 wpm. Second, Polish delivery over English slides adds a cost English-language guides never budget: every English term on a slide is either read in English inside a Polish sentence (fast, but needs a declension decision made in advance) or glossed on the fly (slower, and the gloss is improvised, which is exactly where time leaks). Do the timed run in Polish, with the English terms said the way they will be said on stage, or the measurement is of a different talk. A practical Polish-specific overrun source: the reflex 'w skrócie', 'żeby nie przedłużać', 'to tylko taka dygresja' — each announces a digression that then costs 40 seconds. Count them on the recording.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

timing — direct, and this is the single highest-leverage item for that gap. The profile names the exact failure mode: 40 minutes of material in a 25-minute slot, with one timed dry run the day before as the only checkpoint that catches it. This item both confirms that the checkpoint is the right one and upgrades it from a single late catch to a target with a number, a cut list and split times. Secondary fit: late_slot (a talk that ends on time in the last slot of the day is a courtesy the room feels) and demo_risk (the fixed-length recording must be measured inside the run, not assumed).


**minimal_2h_version**

0:00-0:05 compute the target: 24 minutes usable, minus the recording runtime, times 0.85, plus the recording; write one number on a sticky note. 0:05-0:30 one full standing run out loud with the phone recording audio and a stopwatch counting up; do not stop for anything. 0:30-0:40 read the total and the block splits off the recording. 0:40-1:10 if over, cut whole blocks until the arithmetic works, and write the cut list as three ranked lines on a card. 1:10-1:35 re-run only the sections you changed plus the last two minutes. 1:35-1:45 write the split times into the Marp presenter notes. 1:45-2:00 rehearse the close alone, three times, so the one part that must survive an overrun is the most automatic thing you own.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

Agentic-AI talk, 25 + 5 at BB4IT. Blocks: (1) hook and agenda 1:30, (2) why agents fail in production 3:00, (3) the architecture 3:30, (4) recorded demo with live narration 3:00 fixed, (5) what it cost and what broke 3:30, (6) the three rules 3:00, (7) close and QR 1:30 = 19:00 planned. First timed run comes in at 24:40 — a 30 percent overrun, entirely from block 3 (the architecture diagram, explained twice) and an unplanned aside in block 5. Cut: the second architecture variant (-2:10), one of the three rules folded into another (-1:20), and the aside deleted with the slide that invited it (-1:00). Second run: 20:50 against a 21:00 target. Cut list carried on stage: (a) drop the second failure story, (b) drop rule three, (c) shorten the close to two sentences — used only if the halfway checkpoint at 10:30 shows block 4 has not started.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

Over weeks, the skill being trained is calibration — the ability to look at a deck and know what it costs. Build it by keeping a two-column log across talks: estimated duration before the first run, actual duration of the first run, actual duration on stage. After three or four talks a personal inflation factor emerges (some speakers run 10 percent longer live, some run shorter because they skip material under pressure), and that factor replaces the borrowed 85 percent with a measured one. Second habit: after every delivered talk, extract the real per-block durations from the recording and compare them to the rehearsal splits — the block that inflates most on stage is the block that is not actually finished. Third: practise cutting as a separate skill. Take an existing deck and produce a 15-minute version in 20 minutes, twice a month; the ability to cut cleanly under pressure is what makes the on-stage cut list usable.


**drill**

Input: the current deck and a phone. Action: set a stopwatch counting up, stand, deliver blocks 1 to 3 only, out loud at full volume, advancing slides, without stopping; note the time; then, without preparation, deliver the same three blocks again with the instruction 'the same content in 60 percent of that time', and note the time again. Observable output: two durations and an audio recording. Pass criteria: the second run is genuinely shorter (not merely faster) and you can name, from memory, the three things you deleted to achieve it. Those three things are the first draft of your on-stage cut list. 15-20 minutes.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

The full run is the unit for this item specifically — a partial run measures nothing about total duration. The corrective work it produces, however, is done at block level: you cut and re-run one three-minute block, not the whole talk. So: measure at full-run granularity, correct at block granularity.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

Per talk: 2 full runs at ~25 minutes each, plus ~40 minutes of cutting and re-running the changed sections, plus 10 minutes to transfer split times into presenter notes — about 2 hours total, of which the irreducible core is the single 25-minute run. Setup cost is near zero (a stopwatch). The often-quoted 'one hour of rehearsal per minute of talk' is not this item's cost and should not be attributed to it.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

Immediate: the stopwatch total against the sticky-note number — binary, unarguable, available the moment the run ends. Secondary: block split times, which localise the overrun to a specific block instead of leaving 'the talk is too long' as a global feeling. Delayed: the recording of the real delivery, whose per-block durations, compared against the rehearsal splits, calibrate the personal inflation factor for next time.


**measurable_kpi**

Primary: full-run duration as a percentage of usable slot time; target 85 percent (21:00 of 24 usable minutes at BB4IT), pass/fail. Secondary: (a) delta between run 1 and run 2, which should be a deliberate cut rather than a speed-up — if the block count is unchanged, the reduction was speed and does not count; (b) number of cut-list items actually used on stage, target 0 to 1 (2 or more means the deck was never inside budget); (c) on-stage delivered duration versus rehearsed duration, tracked across talks to derive the personal inflation factor; (d) filler words per minute from the run recording, as a side benefit of having the audio.

### Online and recorded


**online_variant**

For a webinar the buffer should be larger, not smaller — target 80 percent rather than 85. The reasons are specific: chat questions arrive mid-talk and cost unbudgeted time, a shared-screen or audio hiccup at the start can consume 2 minutes before you speak, and there is no moderator hand signal to warn you. Compensating advantage: the platform shows a running clock and the presenter view is on the same screen, so checkpoints are easier to hit than on stage. Practical addition to the protocol — do the timed run inside the actual webinar tool with screen share active, because the tool's own start-up ritual is part of the elapsed time and is invisible in an offline rehearsal.


**recorded_variant**

The recording makes an overrun permanent and public in a way the room does not: a talk cut off by the organiser, or a close delivered at panic speed, is what the YouTube artefact preserves. Two additions. First, protect the close absolutely — it is the segment most likely to be clipped for reuse, so it must never be the part that gets compressed. Second, the recording usually starts before you do and the camera keeps running through the Q&A; agree with the organiser where the cut points are, and rehearse ending on a clean beat with a held final slide so there is an obvious edit point. Note also that the recording gives you the only truly accurate per-block on-stage timings you will ever get — extract them.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

(1) The estimate that never becomes a measurement — counting slides, multiplying by a minute each, and calling it timed. (2) The silent run: reading the deck in your head, which runs at roughly double speaking speed and produces a comfortable, false number. (3) Timing a run in which you stop, restart, fix a typo and skip 'the bit I know' — the resulting total measures a talk nobody will ever deliver. (4) Hitting the target by speaking faster, which passes the stopwatch and fails the room. (5) Treating the fixed-length recorded demo as compressible. (6) Building the buffer and then spending it in advance by adding 'just one more slide' after the successful run. (7) Cargo-cult precision: obsessing over 85 versus 87 percent while the real overrun is a whole unwritten block.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Doing the first timed run too late for the result to be actionable — the night before, when cutting hurts and the instinct is to hope instead. Timing only once and trusting a single sample. Running it sitting down and quietly, which changes both pace and breath. Forgetting the introduction, the walk to the lectern, the 'thank you for having me' and the laptop-to-projector handshake, all of which come out of the same 25 minutes. Measuring the total but not the splits, so the diagnosis stays 'too long' with no location. Cutting sentences rather than blocks — trimming words removes seconds and destroys rhythm; removing a whole talklet removes minutes and leaves the structure intact. Not re-running after the cut, so the fix is unverified.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

A genuinely interactive format where audience time dominates — the 120-minute AI Startup Builders workshop or the Value Builders Tribe talk with 30 minutes of discussion; there you time each block and design for elasticity rather than targeting a single total. A 5-minute lightning talk, where a full run is cheap enough that percentages are noise and you simply rehearse it until it lands under time. A talk you have delivered three times with recorded evidence of the duration — the log replaces the run. Also skip the arithmetic when the organiser has already told you the slot is soft and the next session cannot start early anyway; the discipline still helps, the number matters less.


**fallback_if_it_fails**

If the run is far over and there is no time left to cut properly — the two-hours-before case — do not attempt to re-cut the whole deck. Instead: (1) identify the last block that must be delivered (the close) and mark the slide before it as the emergency entry point; (2) mark two slides as 'skip on sight' with a visible marker in the presenter notes; (3) set a hard on-stage rule: at minute 18 you go to the emergency entry point regardless of where you are. On stage, if the checkpoint shows you are behind, execute the cut silently — never announce it. Saying 'I'll have to skip this' costs 10 seconds and tells the room they are getting the degraded version. If the moderator signals time and you are mid-block, stop the block, say one sentence that closes it, and deliver the close intact.


**works_signal**

In rehearsal: the total lands under target twice in a row without a speed-up, and the split times are stable between the two runs (a block whose duration swings 40 percent between runs is unfinished). On stage: you pass the halfway checkpoint within 45 seconds of the rehearsed split, and you reach the close with the room still seated and enough time to hold the QR slide for 20 seconds. Failure signals: you are more than 90 seconds behind at the halfway checkpoint; you find yourself saying 'quickly' or 'I'll skip this'; the moderator moves into your sightline; people at the back start packing up while you still have two blocks left.


**dependencies_conflicts**

Prerequisites: modular time blocking (without blocks there is nothing to cut cleanly), expansion joints (the pre-designed 15 / 25 / 45-minute versions are what the cut list draws on), and the scripted opening (an unscripted opening is the single largest source of run-to-run variance — the NCP4 drift cost time as well as structure). Feeds: on-stage time control consumes the split times this produces; the rehearsal ladder places this run at the top rung. Direct conflicts: (a) live demo versus the time budget — an unrehearsed live demo has unbounded duration and makes the whole measurement meaningless, which is the argument for the recorded demo already chosen for BB4IT; (b) questions during the talk versus the time budget — this is why the question policy must be announced in the first minute; (c) audience interaction (show of hands, prize questions) adds unbudgeted time and must be timed inside the run, not added afterwards; (d) a fixed-length recorded demo conflicts with the 85 percent arithmetic if treated as compressible — subtract it before applying the percentage.

### Tooling


**tool_support**

Stopwatch counting up (phone, or a physical timer placed face-down); a phone recording audio for the whole run so splits and filler words can be extracted afterwards; Marp presenter notes to carry the split times; stagetimer.io or a similar countdown for a confidence monitor if the venue supplies one; a transcription tool (Whisper, or any speech-to-text) to get word counts and derive your own Polish words-per-minute figure from the run; a spreadsheet or note with three columns — estimate, run 1, on-stage — kept across talks to build the personal inflation factor.


**marp_implementation**

Split times live in presenter notes, which in Marp are HTML comments in the markdown and appear in presenter mode without ever rendering on the slide: on the first slide of each block add a comment line such as a checkpoint marker with the target elapsed time and the cut-list item for that block. Add `paginate: true` in the front matter so the slide number is a coarse progress cue for you and the room. Keep a `<!-- CUT -->` comment on optional slides so the cut list is visible in the source, and consider a `_class: cut-candidate` on those slides with a subtle theme marker visible only in presenter view. Presenter mode (`p` in Marp preview, or the presenter window in Marp for VS Code) shows the notes and a clock, which is the mechanism that turns rehearsal splits into on-stage control.


**survives_pdf_export**

partially. The measurement and the discipline are properties of the speaker, not the file, so they survive completely. What does not survive is the delivery mechanism: presenter notes and the presenter-mode clock exist only in the HTML or in Marp's presenter window, so if you fall back to the organiser's PDF on a strange laptop, the split times are gone. Mitigation: carry the checkpoint times on paper — three lines on an index card (halfway, block 5, close) — which is the version that survives every failure mode.

### Effort and payoff

- **prep_effort** — low — one stopwatch, two run-throughs and a sticky note. The cost is not effort but willingness to act on the result, which is where it usually fails.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Immediate and large. First timed run typically exposes a 20 to 40 percent overrun on a deck that felt right, and it does so while there is still time to cut. On the day, the visible effects are that the close is delivered at normal pace, Q&A starts on schedule, and the moderator never has to signal. Across talks, the compounding effect is calibration — after three or four logged talks the estimate before the first run is close enough that the run becomes confirmation rather than discovery.


**needs_organiser_agreement**

no for the rehearsal itself. Two adjacent details are worth confirming in advance and cost one message: (1) whether the 5 minutes of Q&A are inside or outside the 25 (at BB4IT they are stated as 25 + 5, so the speaking budget is 25); (2) what the time signals are, who gives them, and at which marks — 5 minutes, 2 minutes, stop — plus whether a countdown clock or confidence monitor is visible from the stage. Also confirm whether the introduction comes out of your slot. These belong in the moderator contract.


**priority**

high — the highest-priority item in the practice group for this speaker. It targets a named recurring gap (40 minutes of material in a 25-minute slot), it is executable in one evening, it costs almost nothing, and it is the only item here that produces a hard pass/fail number days before the talk. For a talk on 2026-09-12 it should already be done.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

- https://speaking.io/prep/practicing-it/
- https://web.mit.edu/curhan/www/docs/Articles/biases/67_J_Personality_and_Social_Psychology_366,_1994.pdf
- https://thespeakerlab.com/blog/time-management-presentation/
- https://gotimer.org/blog/public-speaking-timer-how-to-nail-your-talk-in-exactly-the-time-you-have
- https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/speakers-program/prepare-your-speaker/rehearsals
- https://storage.ted.com/tedx/manuals/tedx_speaker_guide.pdf
- https://tressacademic.com/rehearse-presentation/
- https://stagetimer.io/blog/prevent-speaker-time-overruns/
- https://en.wikipedia.org/wiki/Planning_fallacy
- https://www.komlogo.pl/encyklopedia/137-t/1576-tempo-mowienia
- https://onespeech.pl/za-szybko-czy-za-wolno-jak-znalezc-adekwatne-tempo-mowienia/

### Not established by this research

- `origin_author`
- `origin_year`
- `pl_language_notes`


---

## Physiology on the day

> A fixed, pre-decided physical protocol for the 24 hours before the slot - sleep, no alcohol, fluids started in the morning rather than backstage, one timed caffeine dose, five minutes of semi-occluded vocal warm-up and a cap on how much you talk in loud corridors - which protects the two things a 14:50 slot attacks: working memory and the voice.

### What it is

- **category** — delivery


**talk_moment**

before arriving - the item spans the previous evening through the 45 minutes in the speaker room (L152 at BB4IT, occupied from 14:05 at the latest), with a thin tail into the first 90 seconds (water already placed, first sentence at rehearsed pitch) and one more into after the event, because the BBDays4.IT filmed interview happens immediately after 15:20 and the voice budget therefore runs to roughly 15:35, not 15:20.

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

Six mechanisms, only one of which is the one people talk about. (1) The voice is a wet oscillator. Phonation threshold pressure - the minimum subglottal pressure needed to start the vocal folds vibrating - rises when the fold tissue is dry and falls when it is hydrated (Verdolini-Marston, Titze and Druker 1990). Lower threshold pressure means less effort per phrase, which is why a hydrated speaker can carry a 30-minute room without pushing from the throat. The corollary is the important half: systemic rehydration of vocal-fold tissue is measured in hours, not minutes (MRI quantification of dehydration and rehydration in vocal fold tissue layers, 2018), so the glass of water drunk backstage cannot do this work. Sipping on stage still helps - swallowing spreads mucus over the fold surface and it relieves the adrenaline dry mouth - but that is surface comfort, not tissue hydration. This is exactly why the item is called hydration started hours earlier. (2) Warm-up. SOVT exercises - straw phonation, lip trills, humming - raise inertive reactance above the glottis, which lowers phonation threshold pressure and makes voicing efficient at lower effort (Titze 2006). Five minutes measurably shifts self-perceived ease; the acoustic evidence is more modest than the coaching literature implies. (3) Vocal load, which is the biggest and least-discussed lever. Speaking over background noise triggers the Lombard effect: louder, higher-pitched, more effortful voice. A conference day of corridor networking and a loud lunch room is precisely the loading pattern that produces vocal fatigue in teachers. The voice spent between 09:30 and 14:50 is not available at 14:50. The day's largest voice decision is therefore not what you drink but how many hours you spend talking in loud rooms before your slot. (4) Sleep. Short sleep hits sustained attention hardest and working memory next (Lim and Dinges 2010: 70 articles, 147 cognitive tests). Working memory is exactly the capacity that holds a structure in place when you drift off script - the NCP4 failure mode. Alcohol degrades this even without a hangover: it shortens sleep onset, consolidates the first half of the night and fragments the second, and reduces total REM at moderate and high doses (Ebrahim 2013). (5) Circadian trough. 14:50 sits inside the post-lunch dip, and the dip is a genuine circadian phenomenon linked to raised afternoon sleep propensity - it appears even without a meal and even when the person cannot see a clock (Monk 2005). Both you and the room are in it. This is the physiological half of the late-slot problem; slide design cannot reach it. (6) Routine as such. Pre-performance routines produce small pre-post and moderate-to-large experimental effects on performance, unmoderated by the type of routine (Rupprecht et al. 2021 meta-analysis, 112 effect sizes). Part of the value is not what is in the routine but that a routine occupies the last 45 minutes, so the mind is not free to re-edit the opening.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

Friday 11.09 (day before). 1. Deck to the organiser by 14:00 - done, so the evening is not a work evening. 2. Timed dry run in the evening, including the recorded demo with audio actually playing. 3. Zero alcohol. Not one glass; the cost lands on second-half sleep and on the working memory that carries your opening. 4. Normal bedtime targeting 7-8 hours. Saturday 12.09. 5. From waking, drink steadily - roughly 2-3 glasses through the morning, another in the car. Pale straw urine before you leave is the only field check that exists. 6. Decide arrival deliberately. Arriving about 13:15, during or just after the lunch break (13:05-13:50), buys registration, room recon, the speaker room and about an hour of networking at roughly a third of the vocal cost of a full day. Arriving at the mandated 14:05 minimum saves the voice completely but gives you no read of the room and no tech-check window. 7. On arrival: register as speaker on the first-floor corridor, drop the bag in L152 (lockable, opposite the conference-room entrance), eat light if you eat at all - a full conference plate at 13:20 lands squarely in your slot. 8. Book the tech check immediately. The talk before yours runs 14:20-14:50, so the realistic window to touch the projector and, critically, the audio for the recorded demo is either before 13:50 or in the 14:50 handover. Settle it with the AV person as soon as you arrive; it outranks everything else in this list. 9. 14:00-14:05: one normal coffee, about 80-100 mg, if it is inside your usual daily total. Peak plasma lands 30-120 minutes later, i.e. across the talk. Skip it entirely if your hands are already unsteady or you have had two already. 10. 14:05-14:12 in L152: the five-minute warm-up (see drill), then twenty seconds of arousal reappraisal - name the activation as excitement rather than fear (Brooks 2014). Not power posing, which failed replication. 11. 14:12-14:30: read the opening script aloud once at delivery volume, then look only at the block list and the cut list - not the whole deck. 12. 14:30: the toilet trip that the morning hydration plan guarantees. Schedule it; there is no window after 14:45. 13. 14:40: bottle of still, room-temperature water placed on the table or lectern before you start, not left in the bag; second bottle in the bag for afterwards. Phone silenced, not vibrating. 14. On stage: sip at the two planned block boundaries, which are also your split-time checkpoints. Never mid-sentence. 15. If your throat catches: swallow or sip. Do not clear your throat; clearing starts a cycle of irritation and more clearing. 16. 15:20-15:35: the filmed interview. Water first, then talk, and not shouted over corridor noise. 17. After the interview: stop projecting for the day. The voice has nothing left to buy.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Any talk where you must project for more than about fifteen minutes; any slot in the early afternoon or very early morning; any talk at the end of a day you have spent talking; any recorded talk, because the voice is permanent; any day that includes a drive. The full protocol earns its cost when at least two of those apply, which at BB4IT is all five. It is over-engineering for a ten-minute lightning talk, a seated panel, or a small-room client meeting where the voice is never loaded - there, the five-minute warm-up alone is the whole of it.

### Evidence


**evidence_level**

Mixed by component, and it must never be presented as one evidence-based routine. Controlled study: hydration and phonation threshold pressure (Verdolini-Marston, Titze and Druker 1990 and replications); sleep deprivation and cognition (Lim and Dinges 2010 meta-analysis of 70 studies, 147 tests); alcohol and sleep architecture (Ebrahim 2013 review of experimental studies); dehydration and cognition above 2 percent body-mass loss (Wittbrodt and Millard-Stafford 2018 meta-analysis - small but significant; a 2019 crossover-only meta-analysis found no significant impairment, so this component is genuinely contested). Controlled but null: caffeine and voice (Erickson-Levendoski and Sivasankar 2011; 2021 Journal of Voice systematic review found no measure adversely affected and rated the evidence unreliable for bias). Field study and meta-analysis: post-lunch dip (Monk 1996, 2005); pre-performance routines (Rupprecht et al. 2021). Practitioner and clinical consensus without trial evidence: the five-minute warm-up length, menthol-lozenge avoidance, throat-clearing avoidance, water temperature. Anecdote: essentially every speaker-blog day-of checklist. The honest summary is that the mechanisms are well evidenced and the specific numbers in any checklist - including this one - are conventions.


**myth_status**

Split across the components. Confirmed: hydration lowers phonation threshold pressure and takes hours to reach the tissue; sleep loss degrades attention and working memory; the post-lunch dip is real and circadian; a consistent pre-performance routine helps. Sound practice with a wrong justification: skipping alcohol the night before (the good reason is sleep architecture and judgement; the reason usually given, that it dries the vocal folds, is not the demonstrated mechanism) and being careful with caffeine (the good reason is that a high dose stacks tremor and palpitations on pre-talk adrenaline and wrecks the following night; the reason usually given, that caffeine dehydrates and harms the voice, is unsupported). Debunked: milk causes mucus; and two justifications that must not be imported into this item at all - Mehrabian's 7-38-55 ratio, which does not apply to informational delivery and therefore cannot be used to argue that voice work is 38 percent of your message, and power posing, which failed replication and has no place in a warm-up routine. Contested: whether whispering rests the voice.


**key_sources**

Verdolini-Marston, Titze and Druker, 'Changes in phonation threshold pressure with induced conditions of hydration', Journal of Voice, 1990 - the founding controlled finding that induced dehydration raises the pressure needed to start phonation and rehydration lowers it; the whole hydration half of this item rests on it. Alves and colleagues, 'The Effect of Hydration on Voice Quality in Adults: A Systematic Review', Journal of Voice, 2019 - water ingestion associated with improved jitter, shimmer, fundamental frequency and maximum phonation time; systemic dehydration associated with worse noise-to-harmonics ratio, jitter, shimmer and s/z ratio; effect sizes modest, study quality variable. Titze, 'Voice training and therapy with a semi-occluded vocal tract: rationale and scientific underpinnings', JSLHR, 2006 - the mechanism for why straw phonation and lip trills work: raised supraglottal inertive reactance lowering phonation threshold pressure. Lim and Dinges, 'A meta-analysis of the impact of short-term sleep deprivation on cognitive variables', Psychological Bulletin, 2010 - 70 articles, 147 cognitive tests; largest effects on simple attention and vigilance lapses, reliable but more modest effects on working memory, smallest on reasoning accuracy. Monk, 'The post-lunch dip in performance', Clinics in Sports Medicine, 2005, building on Monk et al., Chronobiology International, 1996 - the mid-afternoon dip is linked to raised sleep propensity and appears independently of meal ingestion. Ebrahim, Shapiro, Williams and Fenwick, 'Alcohol and Sleep I: Effects on Normal Sleep', Alcoholism: Clinical and Experimental Research, 2013 - at all doses alcohol shortens sleep onset and consolidates the first half of the night while disrupting the second; total-night REM percentage falls at moderate and high doses. 'The Effects of Caffeine on Voice: A Systematic Review', Journal of Voice, 2021 (PMID 33752928) - no voice measure adversely affected; evidence rated unreliable due to few studies, methodological weakness and high risk of bias. Rupprecht, Harwood and Groepel, 'The effectiveness of pre-performance routines in sports: a meta-analysis', International Review of Sport and Exercise Psychology, 2021 - 112 effect sizes; significant small effect in pre-post designs, moderate-to-large in experimental designs, under both low and high pressure, not moderated by routine type, age, gender or skill level.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

1. Individual variance swamps the group findings. Caffeine metabolism, chronotype and habitual sleep need differ by more than the effects being described; a protocol copied from a book can leave you worse off than your ordinary Saturday. The correct use of the research is to take the mechanisms and calibrate the numbers on yourself. 2. Novelty is the real risk on the day. Every element must be something you have already done at lower stakes. A first-ever fasted morning, an unfamiliar supplement, a lozenge bought at the station or an unusual volume of water with no toilet plan are self-inflicted problems dressed as preparation. 3. External validity is thin. The hydration and vocal-load research is largely on singers, teachers and dysphonic patients with high daily vocal loads - not on a healthy speaker doing 25 amplified minutes with a microphone. For that case the effect is probably real and small. 4. The routine can become the anxiety. Monitoring your own throat is a reliable way to notice sensations and read them as failure; a routine that produces rumination is doing the opposite of what the pre-performance-routine literature credits routines with. 5. Opportunity cost inside the same 45 minutes. Warm-up, tech check, opening read and meeting people all want the window between 14:05 and 14:50. At BB4IT the projector-and-audio check for the recorded demo outranks the warm-up: a silent demo destroys the talk, a slightly dry voice does not. 6. Half the late-slot problem is the audience's circadian state, and nothing you drink reaches it. That half belongs to state changes and structure, not to physiology. 7. The dehydration-and-cognition literature is less settled than the voice literature: a 2018 meta-analysis finds small significant impairments above 2 percent body-mass loss, a 2019 crossover-only meta-analysis finds none. Hydrate for the voice, where the mechanism is clear, and treat any cognitive benefit as a bonus you cannot bank on.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

Zero stage time except about fifteen seconds of drinking, spent at two pre-decided block boundaries where a pause is already useful - the same boundaries that carry your split times. One structural detail matters at BB4IT: the demo is a recording you narrate over (Lipsync), so it is not a rest for your voice, but the moment it ends is the single best sip point in the talk. Put the water on the table before you start; a bottle on the floor is a bottle you will not pick up. Do not drink during the two prize questions at the end - you need the microphone and both hands. Everything else in this item happens off the clock, before 14:50.


**time_budget_min**

0 minutes of the 25 on stage; about 0.25 min in practice (two planned sips of roughly seven seconds). Off-stage cost on the day: about 20 minutes (5 for the warm-up, 15 for the rest of the routine including the scheduled toilet trip). Previous evening: no working time at all, but two decisions - no alcohol, normal bedtime.


**audience_change**

Nothing the audience can name, which is the point - this item is invisible when it works. What changes observably is that minute 25 sounds like minute 3: same volume, same pitch, no thinning, no throat-clearing, and the last answer in Q&A carries to the back row as well as the opening did. For the ninth talk of a full day, a voice that is still carrying is itself a state change; the room reads energy in the speaker before it reads anything on a slide. Under the deletion criterion this item survives not because it changes what the audience believes but because it is the delivery substrate every other item runs on.


**application_pl_talk**

Four things that do not transfer unchanged from the English-language advice. 1. Polish loads articulation harder than pitch. Consonant clusters - 'wszystkich', 'przedstawie', 'sztuczna inteligencja', or an English term embedded in a Polish sentence - are where a tired Polish-speaking voice fails first: consonants smear before the voice goes hoarse. So weight the warm-up toward tongue and lip agility (tongue twisters, articulated Polish text) rather than the range glides that English-language, singer-derived routines emphasise. 2. The Polish conference lunch is heavy and the BB4IT break runs 13:05-13:50, ninety minutes before your slot. Eat, but eat noticeably less than the queue suggests; the subjective sluggishness of a full plate stacks on a circadian dip that is already there. 3. Polish conference corridors are loud and networking is the main reason to be there all day - the Lombard load is the cost of a real benefit, not a mistake to be eliminated. Decide the trade in advance: arriving at the lunch break keeps most of the networking value at a fraction of the vocal cost. 4. There is no Polish-language research on speaker physiology to draw on; everything above is imported mechanism plus practice observation, which matches the workspace's standing note that Polish sources on technical speaking are blogs, not evidence. Terminology you may actually need on stage or with the organiser: 'rozgrzewka glosowa', 'nawodnienie', 'chrypka', 'woda niegazowana w temperaturze pokojowej'.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

late_slot - direct, and this is the only item in the whole set that acts on the speaker's own state in that slot rather than on the audience's. 14:50 sits inside the post-lunch circadian trough for both sides of the room; the room's half is handled by structure and state changes, the speaker's half is handled here, by sleep, caffeine timing and how much of the day was spent talking in loud corridors. opening - indirect but real: sleep loss hits sustained attention and working memory hardest, which is exactly the capacity that keeps a memorised first ninety seconds on rails, and the NCP4 drift happened at that precise point; a short night makes a recurrence more likely regardless of how well the opening is written. reuse - direct and underrated: the recording is the reusable artefact and a thin or hoarse voice is baked into every clip cut from it, and the filmed interview for the BBDays4.IT summary video starts within minutes of 15:20, so the voice has to survive past the end of the slot. demo_risk - only as a scheduling conflict: the warm-up wants the same 45-minute window as the projector-and-audio check, and the check wins. Not: timing, qa.


**minimal_2h_version**

Two hours before means about 12:50 on 12.09, during the lunch break. The sleep and alcohol decisions are already made and nothing on the day recovers them - do not try. Four things remain, twenty minutes in total. 1. Stop talking loudly, now. Leave the loud corridor conversation and take the next hour quieter. Highest-value single action left, and it costs nothing. 2. Drink 400-500 ml of still water in the next twenty minutes, then stop at 14:20. Two hours is the short end of useful for tissue, but it is what is left, and it also pre-empts the adrenaline dry mouth, which is a first-two-minutes problem. 3. Eat half of what you were going to eat. A full plate at 13:20 lands in your slot. 4. At 14:05 in L152, five minutes: 60 seconds straw phonation into a glass of water, 60 seconds lip trills, 60 seconds humming, 60 seconds of two Polish tongue twisters, 60 seconds reading the first two sentences of the opening at delivery volume. Then twenty seconds of arousal reappraisal - name the activation as excitement - and stop. Skip entirely: a second or third coffee, anything you have not done before, power posing, throat lozenges, and any attempt to nap.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

The full day for the agentic-AI talk at BB4IT, 12.09.2026, 14:50-15:20 in L120. Friday 11.09: deck emailed to biuro@itwgorach.pl before 14:00; timed dry run in the evening with the demo recording actually playing so the audio path is verified once at home; zero alcohol; 7-8 hours of sleep. Saturday: wake without needing to be rescued by coffee; two glasses of water through the morning, one more in the car; drive to Willowa 2, free university parking on the 'BBDays4.IT' password, entrance from Willowa. 13:15 arrive - deliberately at the tail of the lunch break rather than at 09:00, buying registration, room recon, the speaker room and some networking at roughly one hour of vocal load instead of six, while still hearing enough of the day's language to reference it from stage. Register as speaker on the first-floor corridor; bag into L152; find whoever runs AV and settle exactly when the projector and, above all, the audio for the recorded demo can be tested - either before the 13:50 talk or in the 14:50 handover. Eat light. 14:00-14:05: one normal coffee, peaking 30-120 minutes later, i.e. across the talk. 14:05-14:12 in L152 with the door closed: straw phonation, lip trills, humming, Polish tongue twisters, opening lines aloud; then twenty seconds of arousal reappraisal. 14:12-14:30: the opening script once at delivery volume, then the block list and cut list only. 14:30: toilet. 14:40: room-temperature still water on the lectern, second bottle in the bag, phone silenced. 14:50: start. Sip once when the demo block ends, once before the closing. 15:15-15:20: two prize questions to the room and two questions from the room. 15:20: finish. 15:22: two sips, then the filmed interview for the summary video - the voice must still be intact for this, and it is the part most often left out of the plan. After the interview, stop projecting for the day.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

Weeks, not days, and mostly through repetition at low stakes. 1. Attach the five-minute warm-up to an existing trigger - every client call, every webinar, every recorded video - so that on 12.09 it is not a novel act performed under adrenaline. This is the only component that genuinely needs habituation. 2. Learn your own caffeine curve by logging dose, clock time and effect on ordinary working days for two weeks: when it peaks for you, what dose gives useful alertness and what dose gives a jittery hand. Group pharmacokinetics will not tell you this. 3. Learn what a loaded day does to your voice by simulating one: attend a meetup, talk in a corridor for four hours, then read your own deck aloud for 25 minutes and record it. Compare that to a rested recording. This is what turns 'talking all day costs my voice' from a plausible sentence into a number you believe. 4. Track sleep for two weeks before a talk so you know your own baseline instead of a book's eight hours, and so the night of 11.09 is a normal night rather than an experiment. 5. Rehearse the physical recovery lines ('Sekunda, lyk wody.') until they are automatic, so a voice crack costs one sentence rather than a paragraph of apology.


**drill**

Input: your own opening block, a drinking straw, a glass of water, a phone set to record voice memos. Best done either first thing in the morning or after an hour of loud talking, because a cold or loaded voice is what you are testing against. Action, 12-15 minutes. (1) Record 90 seconds of your opening cold, no warm-up, at delivery volume. (2) Do the five minutes: 60 seconds of straw phonation - straw in the glass, blow gentle bubbles while phonating a comfortable pitch; 60 seconds of lip trills gliding up and down; 60 seconds humming on 'mmm' sliding into the first words of a Polish sentence; 60 seconds of two Polish tongue twisters at increasing speed, chosen for the clusters your talk actually contains; 60 seconds of the first two sentences of the opening at delivery volume. (3) Record the same 90 seconds again. Observable output: two voice memos. Compare on three named criteria, not on general impression - does the first syllable of each phrase start without a push; are the consonant clusters landing separately or smearing; is the pitch of the first sentence lower and steadier in take two. Then do the part most people skip: identify which of the five minutes changed the recording most, drop the rest, and fix that as your routine. A three-minute routine you actually perform beats a ten-minute one you skip in the corridor.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

The five-minute warm-up block is the repeatable unit, and one 60-second exercise (straw phonation, say) is the smallest unit below it. The day-level protocol is not a practice unit at all - it is executed once per talk and is rehearsed only by being used at smaller events, which is the argument for running the warm-up before ordinary client calls.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

Setup, once: one evening to design the routine plus 12-15 minutes to test it with the drill. Per talk: about 20 minutes on the day, plus two decisions the evening before that cost no time at all. Ongoing: 5 minutes before any speaking engagement including calls, which is where the habit is actually built. Compared with the rest of the wave-1 items this is the cheapest in hours and the most expensive in willingness - the hard part is declining the drink on Friday and leaving the loud corridor on Saturday, not finding twenty minutes.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

Immediate and internal: how much push the first sentence needs; whether you clear your throat in the first two minutes; whether your hands are steady on the clicker. Immediate and external: whether anyone asks you to speak up; whether the back rows lean in or lean back. Delayed and decisive: the BBDays4.IT recording. Listen at minute 3 and minute 27 with headphones and compare volume, pitch and clarity of consonant clusters - that single comparison is the only honest measurement of whether the day's vocal load reached the talk, and it is free. A second free sample sits right next to it: the filmed interview a few minutes later, recorded at the very end of the voice budget. If the interview sounds worse than minute 27, the fix next time is a lower vocal-load ceiling during the day, not more water.

### Online and recorded


**online_variant**

The physiology changes shape rather than disappearing. What falls away: room noise, projection, the Lombard load, the corridor - vocal demand drops sharply. What gets worse: the microphone is ten centimetres from your mouth, so a dry mouth is audible - swallows, clicks, breath - in a way a hall system forgives, which makes hydration matter as much or more, not less. A cold, unwarmed voice at conversational volume reads as flat and there is no room energy to carry it, so the warm-up survives the move online intact. Caffeine is riskier on camera because a seated speaker's jitter is visible and speech accelerates with no room to pace into. The routine can run right up to the start - no travel, no registration, no corridor - so the 45-minute window conflict disappears. And the dominant online physiological problem is a different one: sitting, shallow breathing and four hours of prior calls. Stand for a webinar, put the camera at eye height, and treat the preceding calls as the vocal load they are.


**recorded_variant**

The recording turns this item from a 30-minute concern into a durable one, because the voice is the substrate of every clip cut from the talk afterwards. Five specifics. 1. A close microphone - lavalier or headset - records swallows, dry-mouth clicks and breath; hydration shows up in the audio track, not only in how the room hears you. 2. Throat-clears and coughs are effectively unfixable in a short clip and often cost the surrounding sentence, so one throat-clear is paid for again every time the material is reused. 3. A voice that thins over 25 minutes makes the last third - where the takeaways and the CTA live - the least usable footage in the talk, exactly inverting the value. 4. The recording is also the only objective feedback instrument this item has: minute 3 against minute 27 is the measurement. 5. The camera keeps working after the room stops - the BBDays4.IT filmed interview starts within minutes of 15:20, so the voice budget runs to about 15:35. Most speakers plan to the end of the slot and then do an on-camera interview on an empty tank.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

1. The wellness ritual with no mechanism - herbal tea, honey and lemon, a throat spray bought at the station - none of which reaches the vocal folds systemically, all of which feel like preparation and quietly replace it. (Honey is a reasonable comfort measure; it is not a hydration strategy.) 2. Caffeine loading to beat the dip: a double espresso at 14:30 that stacks on pre-talk adrenaline and produces a fast, high, shaky first three minutes - precisely the state a fragile opening least needs. 3. Repairing sleep on the day: a nap at 13:30 that ends in sleep inertia at 14:20, or coffee stacked to cover a four-hour night, when the working-memory cost was incurred hours earlier and cannot be bought back. 4. Whisper-saving the voice all morning and then talking loudly for thirty minutes anyway - the saving is doubtful, the load is real. 5. Anything new on the day: a new supplement, an unfamiliar pre-workout, fasting because someone said it sharpens you, or an unusual volume of water with no toilet plan. 6. Power posing in the speaker room, which failed replication; twenty seconds of arousal reappraisal is the evidenced substitute and fits the same window. 7. Using the routine as a reason to stay in L152 and skip the tech check - the most expensive version of this antipattern, because it trades a small real benefit for a large real risk.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Starting hydration backstage, which is the most common version of the practice and mechanically the least effective. Not scheduling the toilet trip that a hydration plan guarantees, then standing for 30 minutes plus 5 of Q&A plus a filmed interview. Six hours of loud networking followed by surprise at a thin voice at 14:50. Treating 'no coffee' as a rule because of the voice myth and walking into the circadian trough under-caffeinated - the sleepiness cost is real, the voice cost is not established. Clearing the throat instead of swallowing or sipping, which starts a self-reinforcing cycle. Taking a menthol lozenge for comfort ten minutes before speaking. Drinking a whole glass mid-sentence instead of a planned sip at a block boundary. Leaving the bottle in the bag or on the floor. Planning the voice to 15:20 and forgetting the interview. And the subtlest one: performing the routine while mentally rewriting the opening, which gives you neither the routine's benefit nor a rehearsed opening.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

A ten-minute lightning talk, a seated panel, a small-room client meeting, a morning slot after a normal night - the full protocol is over-engineering and the warm-up alone is enough. On the day there are two hard exclusions. First, if the projector-and-audio check for the recorded demo is not done and you can only do one thing in the window, do the check; a dry voice costs a few percent, a silent demo costs the talk. Second, if the physiological routine is displacing rehearsal of the opening, drop it - a warm voice delivering an unrehearsed opening is worse than a slightly dry voice delivering a memorised one, and the named gap is the opening, not the throat. Also skip any component you have not used before; on the day, novelty is a bigger risk than dryness.


**fallback_if_it_fails**

Voice cracks or drops mid-sentence: stop, sip, say one short line ('Sekunda.') and continue at the next sentence. One acknowledgement, never two - the repeated apology is the failure, not the crack. Dry mouth and a sticking tongue in the first two minutes (adrenaline, not dehydration): sip and deliberately slow the next three sentences; it resolves by minute three. A cough that will not settle: sip, and move to the recorded demo early if you are near it - the recording is the only unforced pause in the talk and buys 30-60 seconds; at BB4IT you narrate over it, so narrate less for the first half-minute. Caffeine shakes: put the clicker down, rest both hands on the lectern edge, slow the opening block on purpose, and do not pick up a laser pointer, which magnifies a tremor onto a three-metre screen. A sleep-deprived blank: this is exactly what the written opening and the printed block list exist for - read the next line rather than improvising a bridge. Voice largely gone before you start: ask for a microphone even if you had not planned to use one, drop to conversational volume and let amplification carry it, tell the room once in one clause, and cut the two prize questions if you must choose between them and the closing. If the room is hot or dry, ask for a window to be opened before you start rather than fighting it for 25 minutes.


**works_signal**

First 30 seconds: the opening sentence comes out at the pitch you rehearsed rather than a third higher, and you do not clear your throat. Minute 3: nobody signals from the back that they cannot hear, and projection feels like breath rather than effort. Minute 20-25: the voice is not thinning and the last block sounds like the first - the single best observable, and the one the recording will confirm. Failure signals, in the order they appear: repeated throat-clearing in the first five minutes; pitch creeping upward as the talk goes on; needing more breath per sentence than at the start; visible hand tremor on the clicker (caffeine, arousal, or both); and the one that is not about the voice at all - losing the thread mid-sentence and having to restart it, which is a working-memory signal and means the sleep debt, not the hydration, is what is showing.


**dependencies_conflicts**

Prerequisite for nothing, but silently underneath several items: scripted-opening (working memory holds a memorised opening), bad-slot-energy (your own arousal is half of any state change you try to create in a tired room), closing-after-qa and the filmed interview (the voice must last past 15:20). Direct conflict over the 14:05-14:50 window with room-recon-tech-check and with the last read of the opening. Resolution order at BB4IT: (1) projector and audio check for the recorded demo, (2) five-minute warm-up, (3) opening script read aloud. If the room only frees at the 14:50 handover, invert it: warm up in L152 first and make the tech check a two-minute audio-only verification in the handover. Second real conflict, to be decided in advance rather than at 11:00 on the day: a full day at the conference gives you material to reference from stage - which is what the saturated-audience framing needs - but costs six hours of corridor voice; arriving at the lunch break buys most of the framing value at a third of the vocal cost. Mutually exclusive with nothing, but explicitly must not be combined with power posing or justified by Mehrabian's ratio.

### Tooling


**tool_support**

Almost none, which is a feature. A plain drinking straw and a glass of water - the SOVT tool that actually has literature behind it - or lip trills alone if a straw in a university corridor is a step too far. A room-temperature bottle of still water. A phone stopwatch for the five-minute block and a phone voice memo for the before-and-after drill. A calendar entry at 14:00 on 12.09 carrying the four-line protocol, because an adrenaline state is exactly when you do not remember a checklist written a week earlier. A sleep tracker only if you already wear one; buying one for this is the wellness-ritual antipattern. The most valuable instrument is one you already have: the BBDays4.IT recording, used as a before-and-after measurement of your own voice at minute 3 and minute 27.


**marp_implementation**

None - this item produces no slide and needs none. One Marp-adjacent hook is worth adding anyway: put the four-line day protocol and the two planned sip points into presenter notes at the top of slides.md as an HTML comment, so the checklist lives in the same file as the talk and appears in presenter mode, and mark the two sip points in the notes of the block-boundary slides where the split times already live. That is the only place this item touches the deck pipeline.


**survives_pdf_export**

yes - nothing here depends on the deck rendering. The caveat runs the other way: presenter notes do not appear in the PDF, so if the protocol lines live only in Marp notes they vanish in the backup path and on the organiser's copy. Keep them on paper or in a phone note as well. The PDF the organiser receives is unaffected either way.

### Effort and payoff


**prep_effort**  
<sub>low | medium | high — one-off setup cost</sub>

low - one evening to design the routine, 12-15 minutes to test it once with the drill, then about 20 minutes per talk. The real cost is not effort but three decisions: no alcohol on 11.09, arrival time on 12.09, and a ceiling on corridor talking.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Immediate, modest, and concentrated at the tail. The most reliable effect is that minute 25 sounds like minute 3, measurable in the recording within a week. Second: fewer throat-clears and less audible push on a close microphone, which is what makes the Q&A and the closing usable as clips. Third and least reliable: a steadier first 60 seconds, partly through the warm-up and partly because a routine occupies the pre-talk mind that would otherwise re-edit the opening. What it will not do is make you sharper than your sleep allows - that was decided the night before, and no amount of caffeine, water or humming on the day recovers it.


**needs_organiser_agreement**

mostly no - this is the item you can execute alone. Three adjacent details belong in the reply that is already going to biuro@itwgorach.pl alongside the adapter question. 1. Confirm L152 is open and usable from about 13:15, since the organiser already offered it as a lockable speaker room - that is where the warm-up happens. 2. Ask when the projector and, specifically, the audio can be tested, given that the previous talk runs 14:20-14:50; this shares the same window as the warm-up and outranks it. 3. Confirm the microphone type for L120 (headset, lavalier or handheld), which changes both projection effort and what you can do with your hands. Water in the room is worth asking about and worth bringing regardless. The filmed interview immediately after the talk is already announced by the organiser and needs no negotiation - only planning voice for it.


**priority**

medium-high, with two components that are individually high. It will not change the talk the way the opening script, the timed dry run or the demo audio check will, and it must never displace them. But it is cheap, it is one of the very few levers available on a 14:50 circadian trough, and it protects the recording, which is the artefact with the longest life. Two elements should be treated as non-negotiable because they cost nothing and are irreversible once skipped: zero alcohol on the evening of 11.09, and starting fluids on the morning of 12.09 rather than in the speaker room. The five-minute warm-up is genuinely medium priority - worth doing, easy to habituate, small effect. Everything else in this item is optimisation and should be dropped without regret if the window is short.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

- https://www.semanticscholar.org/paper/Changes-in-phonation-threshold-pressure-with-of-Verdolini-Marston-Titze/868dbb25f299039a7111beea0804236aa4bc8bcd
- https://www.sciencedirect.com/science/article/abs/pii/S0892199717303892
- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6283588/
- https://pubs.asha.org/doi/10.1044/2017_JSLHR-S-17-0017
- https://vocology.utah.edu/_resources/documents/vsr_2020.pdf
- https://www.med.upenn.edu/uep/assets/user-content/documents/LimDinges2010MetaAnalysis.pdf
- https://pubmed.ncbi.nlm.nih.gov/15892914/
- https://pubmed.ncbi.nlm.nih.gov/8877121/
- https://onlinelibrary.wiley.com/doi/abs/10.1111/acer.12006
- https://pubmed.ncbi.nlm.nih.gov/33752928/
- https://pubmed.ncbi.nlm.nih.gov/21704493/
- https://www.tandfonline.com/doi/full/10.1080/1750984X.2021.1944271
- https://www.semanticscholar.org/paper/Dehydration-Impairs-Cognitive-Performance:-A-Wittbrodt-Millard-Stafford/0f47a12158a92e32cdaad4e8896099e8e8ebf1cc
- https://www.sciencedirect.com/science/article/abs/pii/S0031938418308618
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7210446/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3311979/
- https://doi.org/10.3390/ijerph19158929
- http://www.ucdvoice.org/vocal-hygiene/
- https://utswmed.org/medblog/voice-care-tips/
- https://dchft.nhs.uk/leaflets/taking-care-of-your-voice/
- https://vocalprocess.co.uk/hydration-vocal-folds/
- https://virtualspeech.com/blog/exercises-warm-up-voice-before-speech
- https://www.scienceofpeople.com/vocal-warm-ups/
- https://thespeakerlab.com/blog/vocal-exercises-for-speaking/

### Not established by this research

- `origin_author`
- `origin_year`
- `contested_claims`
- `pl_language_notes`
- `measurable_kpi`


---

## The no-slides, no-internet plan

> Have a rehearsed narrative version of the talk — four or five points on one card, deliverable for the full slot with a whiteboard or with nothing — so that losing the projector costs you the visuals and not the talk.

### What it is

- **category** — operations


**origin_author**  
<sub>Originating author, book, lab or community that named the method</sub>

Scott Berkun — 'How to present well without slides' and Confessions of a Public Speaker (the outline as the thing that survives when the slides do not); Zach Holman — speaking.io ('Fucking Up', room recon); practitioner accounts of unplugged delivery (Joey D'Antoni, 'You're Speaking…and You Don't Have Slides'); the 'no-tech backup kit' idea from general speaking guidance

- **origin_year** — 2009 (Confessions of a Public Speaker); 2013 (Berkun's without-slides post); ongoing practitioner writing

- **talk_moment** — before arriving — it is built and rehearsed in advance; it is invoked in the first 90 seconds, when you discover the room's hardware does not work

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

A talk fails without slides for one reason: the speaker's memory of the talk is indexed by the deck. If the sequence lives in the slide order, removing the slides removes the sequence, and the speaker is left improvising structure in front of a room — the hardest possible task under adrenaline. The fix is to hold a second, redundant index that does not depend on any hardware: four or five points, in order, that you can recite cold. Berkun's argument is that this index should exist anyway and should be built first, because developing the ideas before the visuals is what keeps slides supporting the content rather than driving it — the without-slides version is not a degraded copy of the talk, it is the talk, with the deck as removable scaffolding. Two secondary mechanisms make the unplugged version work better than speakers expect. First, attention consolidates: with nothing to look at, the room looks at you, which Berkun frames as being granted more attention and authority. Second, adaptivity returns: without a fixed slide sequence you can compress or expand freely, which is exactly what a broken-projector situation needs, because you may have lost five minutes to failed troubleshooting before you start. The whiteboard, if there is one, is a bonus channel rather than the plan — a drawn diagram is slower than a rendered one but it is built in front of the audience, which carries its own attention benefit.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Write the talk's four or five load-bearing points, in delivery order, on one card. Not the slide titles — the claims. 2. For each point, write the one example or story that carries it, since the unplugged version runs on examples rather than on visuals. 3. Add the two sentences that only exist as pictures in the normal talk: the one that describes the architecture and the one that describes what the demo showed. These are the hardest to improvise and the most necessary. 4. Rehearse the whole thing standing, aloud, with the card visible but not read from, until it runs the full slot without the deck. 5. Decide in advance what the whiteboard version of your one core diagram looks like — three boxes and two arrows, drawable in under thirty seconds — and practise drawing it. 6. Pack the no-tech kit: the printed card, your own whiteboard markers, and a printed copy of the deck if it is short enough to be useful. 7. Decide the invocation rule now: how many minutes of failed troubleshooting before you abandon the projector and start. Two minutes is a reasonable ceiling. 8. Write the opening sentence for the unplugged case, so the first thing the audience hears is deliberate rather than apologetic. 9. Identify what genuinely requires a screen and prepare its spoken substitute — for a QR resource slide, this is the URL said aloud, slowly, twice, plus a request to the organiser to post it. 10. Rehearse it once more, three days before the talk, and then leave it alone.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Prepared for every talk on unfamiliar hardware, which is every conference talk. Invoked when the projector, the cable, the adapter or the laptop fails and the failure is not resolvable in about two minutes; when the room's display is present but unusable (dead pixels across the slide area, a resolution the deck cannot survive, sunlight); or when the schedule has collapsed so badly that setup time no longer exists. The internet half is invoked separately and far more often: any talk whose deck, demo or resources assume connectivity should assume they will not have it.

### Evidence


**evidence_level**

practitioner consensus, with a strong single-expert core — Berkun is a professional speaker writing from repeated experience, and his advice is echoed across independent speaking guides. There is no controlled comparison of slide-supported versus unplugged delivery on comprehension or recall, so claims that audiences pay more attention without slides are experienced assertion, not measurement. The preparation logic (redundant index, rehearsed fallback) is straightforwardly sound and does not need evidence beyond its own mechanics.


**myth_status**

sound practice with a partly wrong justification — the practice of having a rehearsed slide-free version is unambiguously correct and cheap, but the common justification, that presenting without slides is inherently better and audiences prefer it, is an assertion rather than a finding. Keep the practice; do not repeat the claim as if it were established.


**contested_claims**

1. 'Audiences grant you more attention and authority without slides' (Berkun) — a credible practitioner observation, not a measured effect; it is also confounded, since a speaker who chooses to go slide-free is usually a speaker who has rehearsed harder. 2. 'Great historical speeches had no slides, therefore slides are unnecessary' — a rhetorical argument that does not transfer to technical content, where a diagram often carries information that speech genuinely cannot. 3. 'You can just improvise if you know your material' — the specific failure this item prevents is that knowing the material and being able to sequence it under adrenaline are different capacities; without a rehearsed index, subject expertise does not save the talk. 4. 'Print the deck as a handout and read from that' — a printed deck is a slide index, not a narrative index, and it reproduces the dependency in paper form; Berkun's card of points is a different artefact and does a different job.


**key_sources**

1. Berkun, 'How to present well without slides' (2013) — the five-step method: a strong position-forward title, analysis of the specific audience, distilling to four or five major points from an initial ten or twelve, practising delivery with no visual aids, then revising and repeating; the single small card of five points used on stage; develop ideas before making slides so visuals support rather than drive; treat slides as removable scaffolding. 2. Berkun, Confessions of a Public Speaker (2009) — the outline is 'an invaluable resource' when you have to give an unplugged version because the projector died or the slides are missing, and the confidence that comes from practice is what makes it possible to improvise around equipment failure. 3. Practitioner accounts of unplanned unplugged delivery — the consistent lesson is procedural rather than rhetorical: start on time, do not make a production of the failure, and rely on knowing the material. 4. Holman, speaking.io — the recovery posture when things go wrong, and checking the room before the audience arrives so failures are discovered early rather than on stage.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

For genuinely visual technical content the unplugged version is a real loss, not merely a different mode: an architecture with six components and their data flows is transmitted by a diagram in seconds and by speech in minutes, badly. A talk whose entire argument rests on showing a working system loses its evidence entirely, and no amount of narrative recovers that — which is why the honest unplugged plan for a demo-led talk is a shorter, more modest talk rather than the same talk without pictures. There is also an opportunity-cost argument: full rehearsal of a second version is real time, and for a low-stakes talk on hardware you control, a printed deck and composure may be sufficient. And Berkun's own framing warns against the opposite excess — going slide-free as a stylistic flex when the content needed a picture.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

It replaces the entire deck, so its structure has to be the talk's structure. In the BB4IT plan the seven blocks collapse to four spoken points, and the two blocks that are purely visual have to be rebuilt: 'how it is built' (slides 9–12) becomes one drawn or described diagram, and the demo (slides 13–15, seven minutes) becomes a narrated account of what the recording would have shown — which is easier than it sounds, because the demo's narration score already exists as prose. The timing plan changes shape too: without slides the natural pace is slower and the natural drift is longer, so the unplugged version should target about 20 minutes of material for the 25-minute slot, leaving room for the minutes already lost to the failed setup. The one element with no spoken substitute is the QR resource slide, which becomes a URL said aloud, slowly, twice, plus a request that the organiser post it.


**time_budget_min**

The full 25 minutes when invoked — that is the point of the item. Realistically 20 minutes of prepared material plus the overhead of a slower unplugged pace, since a projector failure typically consumes two to five minutes of the slot before you begin. Preparation cost is off-stage: 60–90 minutes to build and rehearse.


**audience_change**

Ideally the same as the full talk minus the evidence — the audience should still leave able to state the thesis and the three conclusions. Realistically they lose the demo's proof and gain a clearer sense of the argument's shape, because an unplugged speaker is forced into the four or five points and cannot hide behind a dense slide. What they must not leave with is the impression that the talk was cancelled and replaced by improvisation; that is the failure this item exists to prevent, and it is prevented entirely by rehearsal.


**application_pl_talk**

Two Polish-specific considerations. First, an unplugged Polish delivery is more exposed than a slide-supported one: without English slide text on screen to carry technical terms, every term has to be spoken, and English technical nouns declined mid-sentence in Polish are exactly where an unrehearsed speaker stumbles — so the terminology decisions have to be made in advance rather than in the moment, which is a strong argument for rehearsing the unplugged version aloud rather than mentally. Second, the artefact hand-off has to work by voice alone. The BB4IT deck ends on a QR code to `github.com/plipowczan/second-brain-template`; with no screen, that becomes a URL spelled out slowly and repeated, ideally with a request to the organiser to put it in the event chat or the video description. Two contextual notes make the unplugged plan more plausible here than it might seem: the talk is the last slot of the day, so a hardware failure competes with people leaving for trains and pace matters more than completeness, and the room is a university lecture room, which raises the odds that a real whiteboard or blackboard is available — worth confirming during the on-site check at 14:05 rather than discovering at 14:50.


**pl_language_notes**

The opening line for the unplugged case should be flat and unapologetic: 'Rzutnik nie działa, więc opowiem to bez slajdów. Nic nie tracicie z treści.' — never 'przepraszam za problemy techniczne', which hands the room a reason to lower expectations. Useful spoken-structure phrases that replace visual signposting: 'Cztery rzeczy. Pierwsza…', 'Wracam na chwilę do punktu drugiego', 'Gdybym miał tu slajd, byłyby na nim trzy pudełka: …'. For describing the diagram aloud, the natural Polish frame is spatial and sequential — 'po lewej repozytorium, w środku spis, po prawej agent' — rather than the English tendency to name components first. Avoid the calque 'plan B na wypadek awarii' being said on stage at all; the audience does not need to know it is a plan B. Terminology: 'awaria rzutnika', 'wersja bez slajdów', 'tablica' for whiteboard; do not say 'unplugged', which reads as affectation in Polish.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

demo_risk — it is the outermost layer of the same gap: the recorded demo covers a failing demo, the PDF covers a failing HTML build, and this covers the case where nothing renders at all. Also timing, in a specific and useful way — building the four-or-five-point version is the same exercise as finding the talk's expansion joints, so it directly serves the recurring problem of 40 minutes of material in a 25-minute slot; a speaker who can deliver the talk in four points can also cut it live. Also late_slot, since the unplugged version is naturally the leaner one and a tired 14:50 room is the audience most tolerant of a shorter, more direct talk. Not related to opening, qa or reuse, except that the scripted opening should have an unplugged variant.


**minimal_2h_version**

Forty-five minutes, and it is worth the time even at that range because it is the only fallback for a total failure. (1) Write four or five points on one index card — the claims, not the slide titles (10 minutes). (2) Under each, note the one example that carries it (5 minutes). (3) Write two sentences that replace the two purely visual moments: what the architecture is, and what the demo showed (5 minutes). (4) Sketch the core diagram as three boxes and two arrows and draw it twice on paper until it takes under thirty seconds (5 minutes). (5) Deliver the whole thing aloud, standing, once, timed, with only the card (20 minutes). (6) Put the card in your pocket, not in the laptop bag. If only fifteen minutes are available, do steps 1 and 5 — the card and one spoken run — and accept that the diagram will be described rather than drawn.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

The BB4IT talk, unplugged, in four points, on one card. Point 1 — 'Agent nie zawodzi na rozumowaniu, zawodzi na dostępie do waszej wiedzy'; carried by the example of asking an agent to do something it has no way of knowing about. Point 2 — 'Context engineering bije prompt engineering'; carried by the contrast between writing a better prompt and giving the agent a file. Point 3 — the architecture, drawn or described as three boxes and two arrows: files in a repository, an index over them, an agent that reads the index first and only then opens what it needs; the reason it is the index and not the whole set is that everything does not fit in context and more material makes the answer worse. Point 4 — the demo told as a story rather than shown: 'zadałem pytanie o przepis, którego w bazie nie było, i dostałem "nie mam"; dorzuciłem jedną notatkę; to samo pytanie dostało odpowiedź z cytatem i wskazaniem pliku' — which is the recording's three beats in one sentence and lands almost as well spoken as watched, because the contrast is verbal, not visual. Close on the three conclusions and the repository URL said aloud twice. Total: comfortably 20 minutes at unplugged pace.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

Berkun's ordering is the training method: build the four-or-five-point version first, for every talk, before the deck exists. Done consistently, the fallback stops being a separate artefact and becomes a by-product of how talks are written, and the cost drops to zero. Two supporting habits build over weeks. First, rehearse at least one run-through of every talk without the deck — not as a fallback drill but as a content test, because any point that cannot survive being spoken without a slide is a point that was being carried by the slide rather than by the argument. Second, practise the spoken description of your recurring diagrams; a practitioner who talks about the same architecture across many talks should be able to describe it fluently in thirty seconds, and that fluency is what the unplugged version runs on. Long term, the strongest version of this skill is a signature talk you have delivered enough times that the deck is genuinely optional.


**drill**

Input: your finished deck and a blank index card. Action: close the laptop, write the talk's four or five load-bearing claims on the card from memory, then stand up and deliver the full talk from the card alone, timed, aloud, recording the audio. Output: a duration, a recording, and a list of the moments where you reached for a slide that was not there. Success condition: the run lands within about 20 minutes for a 25-minute slot and the list has no more than two entries — each of which then becomes a sentence you add to the card. 15–20 minutes, and it doubles as a content audit, because anything you could not say without the slide was probably not yours to begin with.

- **practice_unit** — One point plus its carrying example — a claim and the story or number that makes it stick. The card is a list of these; the talk is the list delivered in order.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

60–90 minutes to build and rehearse the first time for a given talk, dropping to about 20 minutes for a talk whose narrative was written before the deck. Per-talk maintenance afterwards: one timed unplugged run, 20–25 minutes. Zero on the day, except for putting the card in a pocket.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

The timed unplugged run is the primary loop, and the audio recording is the honest one — listen for the places where the sentence structure collapses, because those are where you were describing a picture rather than making an argument. A second loop is a listener: deliver the card version to one person and ask them to state the four points back; whatever they cannot state is not yet a point. If the fallback is ever actually invoked, the post-talk retrospective should record which card entries carried and which were dead weight.


**measurable_kpi**

Unplugged run duration against the slot (target: about 20 minutes for a 25-minute slot — deliberately under, because the failure consumed minutes and the pace is slower). Points recallable cold without the card (target: all of them). Reaches for a missing slide during the drill (target ≤ 2, then 0). Seconds from deciding the projector is dead to speaking your first prepared sentence (target under 30). Whether the card is physically on your person rather than in the bag (binary, and it is the one that actually fails in practice).

### Online and recorded


**online_variant**

The failure mode inverts. Online, the screen almost never dies but the connection does, so the equivalent scenario is being audible but unable to share — or being reduced to a phone call. The unplugged version transfers directly and is arguably more valuable, because an online audience with nothing to look at and a speaker with nothing to show has only the narrative to hold it, and attention decays faster. Two adaptations: shorten further, because a slide-free online talk holds attention for less time than a slide-free room talk, and use the chat as the compensating channel — post the four points as text at the start, which restores the signposting the slides were providing. If the connection is intermittent rather than dead, the card also lets you resume mid-point after a dropout instead of restarting a slide sequence.


**recorded_variant**

If the fallback is invoked at a recorded event, the published video is a person talking for 25 minutes with no visuals, and that is a genuinely worse artefact than the intended one — the recording loses everything the slides carried and gains nothing. Two practical consequences. First, if the failure happens, say the URL and the key numbers more slowly and more often than feels natural, because the recording's viewers have no slide to pause on. Second, agree with the organiser in advance what happens in this case: whether the deck can be published alongside the video, or the video annotated with the slides, which converts an impoverished recording into an acceptable one. This is a five-minute conversation before the event and an impossible one afterwards.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

Treating a printed copy of the deck as the fallback — it reproduces the slide dependency on paper and reads to the audience as a speaker reading slides they cannot show. Announcing the failure at length, apologising repeatedly, or narrating the troubleshooting; the room's experience of a hardware failure is almost entirely determined by how many seconds the speaker spends on it. Troubleshooting past the invocation rule because the fix feels close — this is how five minutes disappear. Filling the time with unstructured improvisation, which is what happens when the fallback was assumed rather than rehearsed. Using the whiteboard as a substitute deck and drawing everything, which is slower than speech and turns the talk into a lecture on drawing. And the inverse antipattern: going slide-free deliberately as a style choice on content that genuinely needed a diagram.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Never rehearsing it, so it exists as a belief rather than a capability. Writing the card as slide titles rather than as claims. Leaving the card in the laptop bag or, worse, in the laptop. Forgetting the elements that only exist visually — the architecture and the demo — which are precisely the two hardest to improvise. Forgetting the resources hand-off entirely, so the audience leaves with no way to find the artefact. Assuming a whiteboard will be there, or that markers in the room will work. Not deciding the invocation rule, so the decision gets made under stress. Preparing an unplugged version that is the same length as the full talk, when the failure has already eaten several minutes.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

When the talk's entire value is a demonstration and there is genuinely no narrative substitute, the honest fallback is a shorter, reframed talk plus an offer to show the thing afterwards — not a 25-minute unplugged version of a talk that no longer exists. It is also disproportionate for a short internal session on hardware you control, where composure and a whiteboard are enough. And it should not be invoked prematurely: if the projector is recoverable in under two minutes, recover it, because the slides are better than their absence.


**fallback_if_it_fails**

This item is itself the fallback, so its own failure mode is the speaker freezing without the card. The recoveries, in order: (1) if the card is missing, open with the thesis sentence — the one thing you can always say — and then ask the room a question ('kto z was ma w firmie agenta, który nie wie, co robić?'), which buys thirty seconds and re-establishes the frame; (2) if the sequence is gone, deliver the talk as one worked example told end to end, which needs no structure beyond chronology and is the most robust shape available under stress; (3) if the room is visibly leaving — realistic in a last slot after a technical failure — cut deliberately to the three conclusions and the URL, finish early and cleanly, and offer the rest as a conversation in the corridor. Finishing early with a complete argument is a far better outcome than filling the slot badly, and in a 14:50 room it may be the correct choice rather than the emergency one.


**works_signal**

The room settles within the first thirty seconds and stays with you: eyes up, no phones coming out, and — the distinctive signal for unplugged delivery — people start listening the way they listen to a story rather than watching the way they watch a screen. A drawn diagram working looks like heads tilting to follow the pen. Failure signals arrive fast and are unambiguous in a late slot: phones up within a minute, side conversations, and people gathering bags. Any of those means stop expanding and go straight to the conclusions and the URL.


**dependencies_conflicts**

Depends on time-blocking-structure and expansion-joints, since the four-or-five-point version is the same distillation those items produce, and on scripted-opening, which needs an unplugged variant of its first sentence. Depends on backup-equipment-checklist for the physical card and markers, and on room-recon-tech-check to discover the failure before 14:50 rather than during it. Sits below marp-export-constraints in the same degradation ladder: HTML build → PDF backup → no slides at all. Complements recovery-after-failure, which supplies the on-stage manner. Conflicts: the unplugged version against any content that is irreducibly visual (the architecture and the demo), which must be rewritten as speech rather than merely delivered without pictures; against the resource QR slide, which has no visual substitute and must become a spoken URL plus an organiser action; and against the full-length timing plan, since the unplugged version should be deliberately shorter, not equal.

### Tooling


**tool_support**

Deliberately minimal, and that is the point — the whole item must work with zero technology. What it needs: one printed index card carried on your person, your own whiteboard markers (room markers are unreliable), and a printed page with the URL and any numbers you must say exactly. Useful in preparation rather than on stage: a phone voice recorder for the timed unplugged run, a timer, and an LLM to compress the deck into four or five claims and then to interrogate whether each is a claim or a slide title. Nothing in the fallback may depend on the laptop, the phone's battery, or connectivity — the failure mode being planned for is precisely the one where those are gone.


**marp_implementation**

There is no Marp implementation, and that is the correct answer — a fallback implemented in the deck tool is not a fallback. The one useful connection is generative rather than technical: the deck's presenter notes already contain most of the narrative, so `marp slides.md --notes -o notes.txt` extracts them to a plain-text file that can be printed and reduced to the card. Do that once, when the deck is finished, and the unplugged version starts from prose rather than from a blank page. Keep the card printed, not on the laptop.


**survives_pdf_export**

not applicable — this item exists specifically for the case where no export runs at all. The related artefacts that must survive without any renderer are physical: the index card and the printed URL sheet.

### Effort and payoff


**prep_effort**  
<sub>low | medium | high — one-off setup cost</sub>

low to medium — 60–90 minutes the first time, and effectively zero if the talk's narrative was built before the deck, which is the practice Berkun recommends for unrelated reasons.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Immediate as insurance: a class of total failure stops being able to end the talk. The larger effect is not defensive at all — building the four-or-five-point version consistently improves the deck itself, because it forces the argument to be stated independently of the visuals and exposes every point that was being carried by a slide rather than by reasoning. Most speakers report the deck getting shorter after the first time they do this.


**needs_organiser_agreement**

partly, and it is worth five minutes on arrival. Ask: is there a whiteboard, blackboard or flipchart in room L120, and are there working markers; will there be a working microphone independent of the projector, since a room of that size without amplification changes the plan again; can they post a link in the event channel or the video description if you cannot show a QR code; and, if a failure does occur, whether the deck may be published alongside the recording so the video is not left visual-free. The tech-check slot on arrival at 14:05 is the natural moment for all four.


**priority**

medium-high — lower than the demo and leak items because the probability of total display failure is low, but higher than its probability alone suggests, because the cost is the entire talk, the preparation is cheap, and the same work directly serves the timing gap by producing the cut-down version of the talk. For BB4IT the minimal 45-minute version is the right investment; a full second rehearsed variant is not.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

https://scottberkun.com/2013/how-to-present-well-without-slides/ (Berkun — the five-step method, four to five points distilled from ten or twelve, the single card used on stage, develop ideas before slides, treat slides as removable scaffolding); https://www.oreilly.com/library/view/confessions-of-a/9780596806927/ (Berkun, Confessions of a Public Speaker, 2009 — the outline as the resource that survives an unplugged talk, and practice as what enables improvisation around equipment failure); https://speaking.io/deliver/fucking-up/ (Holman — on-stage manner when things go wrong); https://speaking.io/prep/scoping-out-the-room/ (checking the room and its hardware before the audience arrives); https://joeydantoni.com/2017/03/20/youre-speakingand-you-dont-have-slides/ (practitioner account of delivering without slides: start on time, do not make a production of it, know the material); https://www.junoschool.org/article/how-to-present-without-slides-projector-failed/ (the no-tech backup kit and the practical framing of a projector failure)


---

## Audience interaction

> Ask the room a small number of questions written word for word — one early counted show of hands as a probe and prequestion, and the two prize questions the organiser requires at the end — each with a stated threshold, a pre-written fallback for silence, and the answer spoken aloud so it exists on the recording; design the prize questions so the winning answer is your own takeaway said back to you by someone in the audience.

### What it is

- **category** — delivery


**talk_moment**

first 90 seconds (optional: the question policy announcement that tells the room whether interaction is coming) → middle blocks (one counted question, placed early, ideally before the content it previews) → Q&A → after the event (the two prize questions, which at BB4IT sit after the audience's own questions and are the last thing that happens in the room all day).

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

Three different mechanisms hide under one word, and they call for different questions. (1) Attention. A question changes the mode of the room: people who were reading Slack look up, because something is now expected of them. Bunce et al. (2010) measured this directly — clicker questions and demonstrations produced significantly lower self-reported attention decline than lecture, and the benefit persisted into the segment that followed. This is the mechanism that matters most in a late slot, and note that it does not require anyone to actually answer; the expectation alone does most of the work. (2) Learning. Retrieval is a learning event, not a measurement event: Roediger & Karpicke (2006) showed recall practice beating rereading at one week (61% versus 40%) despite losing at five minutes. Asking a question before the content — a prequestion — improves retention of both the questioned and the unquestioned material (Carpenter & Toftness 2017), apparently by directing attention to a gap the listener now wants filled. So the placement rule follows from the mechanism: a question asked before you explain something is doing more work than the same question asked after. (3) Social permission. The first question converts a room of individuals into an audience that has done something together, which lowers the cost of the next contribution and is the single best predictor of whether your Q&A produces volunteers. This is the mechanism the two prize questions exploit, and it explains why the show of hands early in the talk matters for the Q&A twenty minutes later. Against all three sits a measurement problem that most advice ignores. A show of hands is a public, non-anonymous response, and Asch's classic finding — conformity drops sharply when responses are private rather than public — applies directly: the first hands are informative, the ones that follow are partly conformity. Mayer et al. (2009) noted exactly this asymmetry when explaining why the clicker condition outperformed the class that had to rely on a show of hands. So read the first wave as data and the second as social proof; the second wave is still useful, because social proof is precisely what you want when the goal is permission rather than measurement.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Decide what each question is for before writing it — attention, retrieval, measurement, or permission. A question trying to do all four does none of them. 2. Cap the number. In a 25-minute talk, one question to the room inside the talk plus the organiser's two at the end is the right budget; three inside the talk is a workshop. 3. Write each one word for word, including the sentence that follows the answer. Improvised questions come out compound ('kto z was pracuje z agentami i miał problem z kontekstem, albo w ogóle z dokumentacją?') and a compound question gets no hands. 4. Make it binary and observable: one criterion, answerable by raising a hand, with no thinking required. 5. State the threshold and give permission to be lazy: 'Nie muszę widzieć wszystkich rąk, wystarczy mi obraz sali.' 6. Never phrase it as ignorance (the Negative Ignorance antipattern) — ask what people have done, not what they do not know. 7. Place it before the content it relates to, not after, so that it works as a prequestion. 8. Say the result aloud and specifically: 'okej, mniej więcej połowa'. This does three jobs — it is the measurement, it is the acknowledgement that makes answering feel worth it, and it is the only version of the moment that exists on the recording. 9. Write the fallback line for silence and rehearse it until it is boring: raise your own hand, say the line, be back in the argument within four seconds, and never re-ask. 10. For the prize questions, design backwards from the answer: decide what sentence you want said aloud in that room, then write the question whose correct answer is that sentence. 11. Make one of the two answerable by anyone who merely listened, and the other require a judgement — the first is winnable and inclusive, the second produces a moment worth watching. 12. Define what counts as a good answer before you ask, because a prize is at stake and 'good' will otherwise be adjudicated live in front of everyone. 13. Agree with the moderator who judges, who hands over the prize, and whether the questions sit inside or after your thirty minutes. 14. Prepare a third question in reserve, and prepare the closed-choice fallback: if nobody volunteers, restate the question as an A-or-B show of hands and then invite one of the raised hands to say why.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

One counted question inside any talk longer than about 15 minutes where you need an early probe, a state change, or a prequestion — and especially in a late slot, a large room, or an audience whose level you cannot infer from the abstract. The prize-question format applies whenever an organiser asks for it, as BBConf4.IT does, and is worth borrowing voluntarily when you want your takeaway restated in the audience's own voice as the last words of the session. Interaction is worth much more in a workshop, a webinar with chat, or any format over 45 minutes. It is worth least in a short slot, in a formal client presentation, in a room of fewer than about fifteen people where a show of hands is socially awkward, and in a room that two earlier speakers have already asked to participate — repetition of a device is not interaction, it is fatigue.

### Evidence


**evidence_level**

Strong evidence for the underlying learning mechanisms, weak transfer to this format, and the gap must be stated rather than glossed. Controlled and quasi-experimental: Roediger & Karpicke (2006) on retrieval practice; Carpenter & Toftness (2017) on prequestions improving retention from video lectures; Mayer et al. (2009), a quasi-experimental comparison in which a clicker condition outperformed both a no-questioning and a paper-questioning condition in a large lecture course. Field study: Bunce, Flens & Neiles (2010) on reduced self-reported attention decline after clicker questions and demonstrations. Meta-analysis: Freeman et al. (2014), 225 studies, +0.47 SD on examinations under active learning. Long-run programme evaluation: Crouch & Mazur (2001), ten years of Peer Instruction with gains on the Force Concept Inventory. Every one of these is a graded course with repeated exposure, a captive audience, and learning as the measured outcome. A 25-minute conference talk has none of those properties, so what transfers is the direction (asking beats not asking) and the mechanism (retrieval and prequestions work), while the dose, the format and the effect size do not. Practitioner consensus only for the show of hands as a stage device, for props and prizes, and for the prize-question format specifically, which is a local organiser convention with no literature at all.


**myth_status**

confirmed, with an important qualification on one sub-claim. That asking the audience something improves attention and retention relative to uninterrupted lecture is as well supported as anything in this research set. The qualification concerns what a show of hands tells you: it is confirmed as an attention and permission device and contested as a measurement, because a public response is subject to conformity in a way a private one is not — which is why response systems outperform hand-raising in the classroom studies. Two adjacent claims are false and travel with this one: that interaction is needed because attention collapses after ten minutes (debunked — Wilson & Korn 2007), and that more interaction is monotonically better (unsupported; the studies compare interaction with none, not many with few).


**contested_claims**

1) 'A show of hands tells you what the room knows.' It tells you what people are willing to admit publicly, discounted by conformity. Asch's variation in which responses were written privately produced markedly less conformity, and Mayer et al. (2009) explicitly floated the show-of-hands limitation as an explanation for their clicker advantage. Use it as permission and as a coarse probe, not as data. 2) 'Engage the audience every ten minutes' — the cadence is folklore attached to the debunked ten-minute attention rule; the real reason to ask early is the prequestion effect, and the real reason to ask at all is mode change. 3) 'Interaction always improves a talk.' The evidence compares interactive courses with non-interactive ones, not talks with three questions against talks with one. In a 25-minute slot with a binding abstract, the marginal question competes directly with the content the audience was promised. 4) 'If nobody answers, the room is not engaged.' In a Polish technical audience at 15:00, silence is the default and carries little information; a failed question usually means the question was compound, exposing, or asked into a room that had not yet been given permission. 5) 'Plant someone in the audience to ask the first question.' Presentation Patterns does name Greek Chorus and Posse as genuine patterns, but an undisclosed plant is a small deception in front of people who may know both of you, and a Polish regional conference where the room partly knows each other is exactly where it is most likely to be noticed. If used, disclose it. 6) 'Prizes make people pay attention.' Berkun says the attention level will definitely rise, and there is no measurement of that at all; the theoretical risk runs the other way, since tangible expected rewards can undermine intrinsic motivation (Deci, Koestner & Ryan 1999), although that literature's strongest effects are in children and free-choice measures and a one-off conference prize is close to the weakest case.


**key_sources**

1) Roediger, H. L. & Karpicke, J. D. (2006), 'The Power of Testing Memory', Perspectives on Psychological Science 1(3), 181-210, and the companion experiments — retrieval outperformed rereading at one week (61% vs 40%) while losing at five minutes; the reason a question asked in a talk is worth more than the same content asserted. 2) Carpenter, S. K. & Toftness, A. R. (2017), 'The Effect of Prequestions on Learning from Video Presentations', Journal of Applied Research in Memory and Cognition — prequestions before video segments improved retention of both questioned and unquestioned material; the reason to place the question before the content. 3) Mayer, R. E. et al. (2009), 'Clickers in college classrooms: Fostering learning with questioning methods in large lecture classes', Contemporary Educational Psychology 34(1), 51-57 — a quasi-experimental design in which the response-system condition outperformed both no questioning and paper-based questioning, with the visible answer distribution, as against a show of hands, offered as one explanation. 4) Bunce, D. M., Flens, E. A. & Neiles, K. Y. (2010), Journal of Chemical Education 87(12) — clicker questions and demonstrations lowered self-reported attention decline, with the effect persisting into the following lecture segment. 5) Crouch, C. H. & Mazur, E. (2001), 'Peer Instruction: Ten years of experience and results', American Journal of Physics 69(9), 970-977 — the canonical implementation, and the source of the design rule that a good question targets a conceptual misunderstanding rather than a fact. 6) Presentation Patterns glossary (Ford, McCullough & Schutta, 2012) — Echo Chamber ('when an attendee asks a question, always repeat the question before answering'), Greek Chorus, Posse, and the Negative Ignorance antipattern, all verified in the published glossary. 7) BBConf4.IT organiser's requirements, email of 8 September 2026 — two questions to the audience prepared by the speaker and asked after the talk, with prizes for good answers, plus two questions from the audience.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

1) The evidence base is about courses, and the transfer to a one-off 25-minute talk is an assumption, not a finding. Nobody has measured whether a show of hands in a conference talk improves anything at all. 2) Interaction costs the scarcest resource in the slot. A counted question plus its acknowledgement is about 35 seconds; the two prize questions are about two minutes; in a talk whose abstract promises a working example, that time is taken from the demonstration people came for. 3) A failed interaction is worse than none. Silence after a question is a memorable event and it damages the speaker's authority in a way that ten more seconds of content never would — and the probability of failure rises with the hour of the day. 4) Interaction can be a substitute for substance. The Dead Demo antipattern has a cousin here: questions to the room used to fill time the speaker has no content for, which an engineering audience detects quickly. 5) Prizes may distort the moment. The room competes for a mug, the questions get answered by the two most extroverted people, and the last thing that happens in the conference is a game rather than an idea — a real risk in a format that puts the prize questions after the Q&A. 6) A public show of hands has a small ethical cost that is rarely acknowledged: it asks people to disclose something about their workplace in front of colleagues and competitors, and questions about failure, tooling or budget can be genuinely uncomfortable to answer honestly. Prefer questions where the honest answer embarrasses the tooling, not the person. 7) A device the room has already seen twice that day is not a change of pace. In a single-track conference this is a real constraint and it can only be checked by watching the earlier sessions.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

Three interactions, no more, and only one of them inside the talk. (1) At roughly 2:30, opening the 'what actually breaks' block, one counted show of hands, written word for word, placed deliberately before the explanation so it works as a prequestion: it previews the failure mode the block is about, so the room spends the next three minutes filling a gap it has just noticed it has. Cost about 35 seconds including saying the count aloud. This is simultaneously the state change from the bad-slot item and the probe from the reading-the-room item — one device, three jobs, one budget line. (2) Nothing during the demo block, which runs about seven minutes from roughly 11:30 and is fixed-length. (3) After the close and after the audience's own questions, the organiser's two prize questions, about two minutes. Design them backwards from the three takeaways on slide 18: the correct answer to the first should be, in the audience's own words, that the agent's problem is access to the company's knowledge rather than reasoning. That makes the last sentence spoken in room L120 on 12 September a member of the audience restating the talk's thesis — which is a better ending than any closing line the speaker could deliver. What this replaces: the diffuse 'engagement' most speakers attempt and none budget, and it removes the temptation to ask a second question in the middle of the talk when the first one goes well.


**time_budget_min**

0.6 inside the 25-minute slot — one counted question at about 35 seconds including the spoken result and the transition back into the argument. Plus roughly 2.0 minutes for the two prize questions, which at BB4IT sit after the 5-minute Q&A and therefore outside the talk itself; confirm with the moderator, because if they are counted inside the 14:50-15:20 block they are a direct 2-minute cut to the talk and the light variant should be selected in advance. Add 0.1 for the six-second clause in the opening that tells the room whether questions are coming. Total inside the slot: about 0.7 minutes. Preparation cost is far larger than stage cost and is where this item actually lives.


**audience_change**

Three separable changes. During the talk: the room has done something together in the first three minutes, which lowers the cost of the next contribution and is the strongest available predictor of whether the Q&A produces volunteers rather than silence. Through the prequestion: listeners retain more of the block that follows, because they are filling a gap they noticed rather than receiving an assertion. At the end: someone in the audience says the talk's central claim out loud, in their own words, in front of everyone — which is a different and stronger form of the message landing than the speaker asserting it for the third time. The cutting criterion applies cleanly here: a question that changes none of these three things is decoration and should be deleted.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

late_slot — directly: the counted question is the cheapest state change available for a room that has been sitting since 09:30, and the permission it creates is what makes a Q&A possible at 15:12 rather than five minutes of silence. qa — directly and in two ways: the early question is the single best predictor of whether the audience's own two questions materialise, and the organiser's two prize questions are themselves a Q&A obligation that has to be designed rather than improvised, with a fallback for the case where nobody answers. timing — a conflict rather than a fit: interaction is unbudgeted in most talks and is the first thing cut when behind, so it must appear in the checkpoint table with an explicit decision about whether the prize questions sit inside or outside the 30 minutes. reuse — directly and undervalued: a counted show of hands with the result spoken aloud, and a member of the audience restating the thesis as a prize answer, are the two most clippable moments in the whole talk, and the second is a testimonial in someone else's voice. demo_risk — indirectly: if the recorded demonstration fails, an interaction is one of the few devices that can hold a room while you switch to the narrated fallback. opening — a caution: do not put a question in the first ninety seconds, which are scripted precisely because that is the named weak point; 2:30 is early enough.


**minimal_2h_version**

Fifty minutes, and most of it is the prize questions, which are a hard organiser requirement rather than an optional technique. (1) 20 min — write the two prize questions backwards from the three takeaways: decide the two sentences you want said aloud in the room, then write the questions whose correct answers are those sentences. Make the first winnable by anyone who listened and the second a judgement call. Write down what counts as a good answer for each. (2) 5 min — write the reserve third question and the closed-choice fallback for silence. (3) 10 min — write the one in-talk question word for word, with its stated threshold, its spoken-count line, and its fallback. (4) 5 min — place it in the deck before the block it previews, and put the tokens in the presenter notes. (5) 5 min — add the timings to the checkpoint table and decide whether the prize questions are inside or outside the 25 minutes. (6) 5 min — rehearse the in-talk question and both fallbacks aloud, five repetitions each, until the four-second recovery is automatic. If only fifteen minutes exist: write the two prize questions and their answer criteria, because they are contractually required and being asked to improvise them at 15:15 in front of a tired room is the worst version of this item.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

BB4IT, room L120. In-talk, at 2:30: 'Ręka w górę — kto w ostatnim miesiącu tłumaczył agentowi coś, co już było opisane w waszej firmowej dokumentacji?' Note the shape: it asks about an action, not about knowledge; the honest answer embarrasses the tooling and not the person; it is binary; and it previews the block that follows, so it is a prequestion. Threshold given: 'Nie muszę widzieć wszystkich rąk.' Hands: perhaps eight in the first wave, then a second wave up to about twenty after a two-second pause. Counted aloud: 'Okej, mniej więcej połowa. To dokładnie o tym są następne trzy minuty.' Fallback, unused but rehearsed: 'To ja podniosę swoją.' Total 35 seconds. After the close and the audience's two questions, the organiser's prize questions. First, deliberately easy and winnable by anyone who was in the room: 'Wracamy do jednego zdania z tej prelekcji — na czym tak naprawdę wykłada się agent: na rozumowaniu czy na czymś innym?' The winning answer is the talk's thesis said by a member of the audience, which is the last idea spoken in that room at the end of a nine-talk day. Second, requiring judgement and producing a moment worth watching: 'Macie repozytorium i pierwszy tydzień na zbudowanie takiej bazy. Co wchodzi do niej najpierw i dlaczego akurat to?' Answer criterion decided in advance: any answer that names something already written down and repeatedly re-explained counts as good. Reserve third question in the pocket. Fallback if nobody speaks: convert to a closed choice — 'To inaczej: kto obstawia rozumowanie, ręka w górę. A kto dostęp do wiedzy?' — then invite one raised hand to say why, which turns a dead silence into an answered question in about fifteen seconds. The moderator, briefed beforehand, hands over the prizes; the speaker judges. Total about two minutes, after which the conference ends.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

Two sub-skills, both narrow. (1) Writing the question, which is where nearly all failures originate and which trains away from the stage: take three talks you have already given and write one question for each, then test them against four criteria — is it binary, is it about an action rather than knowledge, does the honest answer embarrass the tooling rather than the person, and does it come before the content it relates to. Most first drafts fail two of the four. Rewriting a bad question is a five-minute exercise you can do anywhere and it improves faster than any delivery practice. (2) The four-second recovery from silence, which is pure delivery and must be drilled until it is dull, because it is executed under exactly the conditions in which improvisation fails. Ten repetitions in a row, out loud, standing. Beyond these two: build a personal bank of questions that have worked, with the count each returned, so that over several talks you learn which phrasings your kind of audience answers; and watch other speakers specifically for the moment after they ask something, which is the two seconds nobody rehearses and everybody gets wrong. For the prize-question format specifically, the transferable skill is designing backwards from the sentence you want said, and it is worth practising against your own past talks — pick a talk, name its thesis, and write the question whose correct answer is that thesis in someone else's words.


**drill**

The question-rewrite drill, 20 minutes. Input: your current deck, a timer, and the four criteria (binary; asks about an action not knowledge; the honest answer embarrasses the tooling not the person; placed before the content it relates to). Action: (a) 5 min — write three candidate questions for the same block, word for word. (b) 5 min — score each against the four criteria and keep the one that scores highest; rewrite the winner once. (c) 5 min — write the spoken-count line and the silence fallback for it, then place it in the deck before the relevant block. (d) 5 min — deliver the 90 seconds around it aloud, standing, twice: once as if the room answers, once as if nobody does, timing both. Observable output: one word-for-word question with a fallback line, a criteria score sheet showing why the other two were rejected, and two timed figures. Success criterion: the answering and the silent versions differ by less than ten seconds, and in the silent version you are back in the argument within four seconds of the fallback line. A variant for the prize questions: same drill, but start from a takeaway sentence and work backwards to the question.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

One question plus the four seconds that follow it — the ask, the pause, and either the counted result or the fallback line. About 20 seconds, repeatable dozens of times in a short session, and it is the unit that actually breaks on stage. The question text itself is a writing unit rather than a practice unit and improves at a desk, not out loud.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

Preparation: 30-40 minutes for a talk with one in-talk question, plus 20-30 minutes for the two prize questions including their answer criteria and fallbacks — the prize questions are the larger cost and are a hard requirement here rather than an option. Rehearsal: 10 minutes, mostly on the fallback. On the day: 5 minutes with the moderator to settle who judges, who hands over prizes, and whether the questions are inside or outside the slot. On stage: about 0.7 minutes inside the talk and 2 minutes after it. Ongoing: falls to about 15 minutes per talk once you have a bank of questions that have worked, since good questions are reusable across audiences in a way that content is not.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

Immediate: the count itself, which is the only quantitative feedback available live and should be recorded after the talk alongside the exact phrasing, so that the phrasing-to-response relationship becomes visible over several talks. Also immediate and more diagnostic than the count: the gap between the first and second wave of hands, which measures social permission rather than prevalence. Short loop: whether the Q&A produces volunteers, which is the downstream effect the early question was partly for. Same-day: the prize-question segment — whether anyone answered unprompted, how many distinct people spoke, and whether the answers restated the takeaway or something else, which is a direct measurement of whether the message landed. Slower: the recording, where you can hear the latency between the question and the first movement, and count how much of the room actually responded rather than how much you thought did. Slowest: the organiser's feedback panel and hallway conversations. The most valuable single datum is the pair (exact wording, count) logged over five or six talks.


**measurable_kpi**

(a) Hands raised as a fraction of the estimated room, logged against the exact question wording — the core number, and comparable across talks only if the wording is stable. (b) First-wave versus second-wave hand count, which separates prevalence from social permission. (c) Latency from question to first hand, measured from the recording; over three seconds means the question needed rewriting. (d) Number of distinct people who answered the prize questions, target 2 or more, and whether any of them had not spoken before. (e) Whether the prize answers restated the intended takeaway — a binary, and the single best available measure of whether the talk's thesis landed. (f) Number of questions asked versus number planned; more than planned means improvisation. (g) Q&A volunteer count, tracked against whether an early in-talk question was used, which over several talks tests the permission mechanism on your own material. (h) Seconds of silence after any unanswered question: target under four.

### Online and recorded


**online_variant**

Interaction is more necessary online and mechanically different. The show of hands does not exist; its substitutes are a chat prompt, a platform poll, or a reaction button, and each has a longer latency than a hand — 15-20 seconds of typing, which must be planned and filled deliberately rather than apologised for. The advantages are real: responses are effectively private, which removes the conformity problem that makes an in-room show of hands unreliable as measurement, and the result arrives as an actual number and a visible distribution, which is precisely the asymmetry Mayer et al. identified in favour of response systems. The cadence tightens to a prompt every 4-6 minutes because there is no other way to know anyone is there. Reading a specific chat answer aloud with the person's name is the highest-value single move available online and has no in-room equivalent. Tooling (Slido, Mentimeter, Wooclap, or the platform's own poll) is worth the setup cost here in a way it is not in a 25-minute room talk, where a join code between you and the audience costs more than the data is worth. Caution: the poll result becomes the state change, so a poll whose results you do not display is half a device.


**recorded_variant**

The room's half of every interaction is nearly invisible on the recording, so the speaker has to narrate it. A show of hands with no spoken count is a two-second silence on YouTube; 'okej, mniej więcej połowa' is what makes the moment exist for the several hundred people who will watch it later, and this is the Echo Chamber discipline applied to your own questions rather than to the audience's. The same applies with more force to the prize questions: audience answers come from an unmiked room and will almost certainly not be on the audio track, so every answer must be repeated before being judged — which is also the courteous thing to do for the back rows. Two further consequences. A prize segment reads to a remote viewer as an in-joke about a room they were not in, so the questions themselves must carry substance that survives without the prize; designed as recommended, they do, because the answer is the talk's thesis. And the moment in which an audience member states your central claim in their own words is the most valuable ten seconds of the recording for reuse — worth ensuring the camera and microphone are still running, since post-talk segments are exactly what gets cut from a conference recording.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

1) Negative Ignorance — 'kto z was nie zna…' — named as an antipattern in Presentation Patterns and reliably returns nothing, because the honest answer is a public admission of ignorance among peers. 2) The compound question, which asks two things and gets no hands because nobody knows which they are answering. 3) The rhetorical question delivered as if it were real, followed by the speaker answering it himself immediately — it trains the room that questions here are decorative, which then poisons the prize questions and the Q&A. 4) Asking and not acknowledging: hands go up, the speaker says nothing about what he saw, and the room learns that answering achieves nothing. 5) The plant nobody knows about — Greek Chorus and Posse are real patterns, but an undisclosed confederate is a small deception, and at a regional conference where people know each other it is likely to be spotted. 6) The quiz for its own sake, which converts the last five minutes of a conference into a game show and makes the mug the memorable object. 7) Interaction as filler for content you do not have — the Dead Demo failure in a different costume, and an engineering audience detects it quickly. 8) Re-asking after silence ('no dobra, to inaczej… ktoś?'), which converts a four-second recovery into a thirty-second collapse. 9) Repeating a device that two earlier speakers already used the same day.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Improvising the wording, which produces compound and unanswerable questions. Asking after the content instead of before it, which throws away the prequestion effect for free. Not saying the count aloud, which loses both the acknowledgement and the recording. Having no fallback and therefore standing in growing silence. Treating the show of hands as data about the room rather than as permission and a coarse probe. Asking three questions inside a 25-minute talk. Leaving the prize questions to the last hour, or worse improvising them on stage — they are a contractual requirement of this event with prizes attached and they will be judged in public. Failing to define what counts as a good answer, so that adjudication happens live and takes three minutes instead of thirty seconds. Not agreeing with the moderator who judges and who hands over the prize. Putting the prize questions on a slide in the deck emailed to the organiser without noticing that this spoils them for anyone who opens the file early. And forgetting to repeat the audience's answer before responding, which loses it for both the back rows and the recording.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

A lightning talk of 5-10 minutes. A formal client presentation or any high-stakes decision meeting, where a show of hands reads as a technique rather than a question. A room of fewer than about fifteen people, where hand-raising is awkward and the natural equivalent is simply talking to people. A hostile or politically charged room, where inviting public positions is inviting a fight. A room that two earlier speakers have already asked to participate. A topic where the honest answer to any useful question would require admitting something in front of an employer or a competitor. And the first ninety seconds of any talk, which belong to the scripted opening — particularly for a speaker whose named gap is exactly that opening.


**fallback_if_it_fails**

Nobody raises a hand: raise your own, deliver the pre-written line, be back in the argument within four seconds. Never re-ask, never comment on the silence, never say 'trudna publiczność'. The pause is what turns a small non-event into a visible failure. Two hands only: say the true thing precisely and move on — 'kilka osób, okej' — which is honest, costs nothing, and is better than pretending you saw more. Nobody answers a prize question: convert immediately to a closed choice with a show of hands ('kto obstawia A, kto B'), then invite one raised hand to explain, which reliably converts silence into an answer in about fifteen seconds; if that also fails, answer it yourself, award the prize to the first person who asked a question during the Q&A, and move on. The same person answers both prize questions: name the constraint out loud and reopen it — 'kto jeszcze dziś nie odpowiadał'. An answer is wrong but confident: take the part that is right, name the specific word you were looking for, and give the prize anyway if the room is with them; adjudicating strictly for a mug at 15:18 costs more than it is worth. You are behind on time when the interaction is due: keep it — in a late slot the question is worth more than the block it was inside — unless it is the prize segment being squeezed, in which case ask one question instead of two and say so.


**works_signal**

During the ask: hands beginning to move within about two seconds; a visible second wave after the first, which is the permission mechanism working; heads coming up from laptops even among people who do not raise a hand; a small laugh at a question that names something everyone recognises. After the ask: people photographing the slide that follows, which is the strongest positive signal available in a technical room; a question in the Q&A that references your question back to you. In the prize segment: two or more distinct people answering, at least one of whom has not spoken before, and answers that restate the thesis rather than a detail. Failure signals: no movement at three seconds (the wording was wrong, not the room); exactly one hand, from the front row, from someone you know; laughter with the wrong latency, which usually means the question was heard as rhetorical; and in the prize segment, the room looking at the moderator rather than at you, which means it is unclear whose question it is and who is judging.


**dependencies_conflicts**

Prerequisites: question-policy-announced, which tells the room in the first minute whether questions are coming and from which direction, and makes an in-talk question legible rather than surprising; a modular block structure, so the question sits on a seam and previews a block; and on-stage time control, because an unbudgeted interaction is the first thing cut. Shares mechanics with, and should be designed together with: bad-slot-energy (the in-talk question is the cheapest state change in the catalogue — one device, one budget line, do not count it twice), reading-the-room (the same question is the probe that feeds the decision rule), and seeding-the-first-question (its show-of-hands variant is this same mechanism deployed at the start of the Q&A; decide once whether the hands go up during the talk or at the start of Q&A, because doing both is a repeat). Feeds closing-after-qa, since the prize questions come after the audience's own and therefore after your prepared close, which means the close must be delivered before them and the prize segment must not be allowed to become the talk's real ending — write the ordering down. Conflicts: (a) with the time budget, directly and unavoidably in a 25-minute slot with a binding abstract; (b) with the demo block, which is fixed-length and admits no interaction; (c) with the end-only question policy, which is the correct choice here and which the in-talk show of hands must not appear to contradict — hands are not questions, and the opening clause should make that distinction; (d) with the deck sent to biuro@itwgorach.pl by 11 September at 14:00, if the prize questions are on slides inside it; (e) with the recording, since unmiked audience answers do not survive and must be repeated aloud.

### Tooling


**tool_support**

Deliberately minimal for the room version: the question written word for word in the presenter notes and on the printed card, a rehearsed spoken-count line, and the moderator briefed on the prize logistics. The prizes themselves come from the organiser. No polling tool is recommended for this 25-minute in-room slot — a join code, a QR and a wifi dependency cost more time than a show of hands and put a device between you and a tired room; the QR budget for this talk is already spent on the single closing code to the repository, and a precedent from NoCode Poland #4 shows that two codes split attention and neither gets scanned. Polling tooling (Slido, Mentimeter, Wooclap) belongs in the online variant, in a longer slot, or where an anonymous channel is genuinely needed. For preparation: an LLM is well suited to generating and stress-testing candidate questions — ask it to produce ten variants, then score them against the four criteria yourself, and separately ask what a hostile listener would answer, which is the same red-team use as the question-bank item. For the feedback loop: the published recording and a simple log of (wording, count) after each talk.


**marp_implementation**

Put the question on a slide, in full, in large type — a question asked only aloud in a lecture room is misheard by the back rows and returns fewer hands. Use `<!-- _class: lead -->` with the question as the only content, no bullets, no header or footer (`<!-- _header: '' --> <!-- _footer: '' -->`), so the slide reads as a change of mode as well as a question. Keep the answer off the slide. In the presenter notes of the same slide, carry the operational tokens in a fixed format: `<!-- ASK: hands | 0:35 | count aloud | fallback: "To ja podniosę swoją." -->`. For the prize questions, prefer a printed card plus one plain slide per question kept after the closing QR slide, and note the export conflict: the deck emailed to the organiser by 11 September at 14:00 contains those slides, which spoils the questions for anyone who opens the file beforehand — either accept that (the organiser is not the audience) or keep the prize questions off the emailed deck and on the card only. Never implement a question as a fragment or animated reveal; it exists only in the HTML export and is gone from the PDF backup.

### Effort and payoff


**prep_effort**  
<sub>low | medium | high — one-off setup cost</sub>

medium — 50-70 minutes for the first talk, dominated by writing the two prize questions and their answer criteria rather than by the in-talk question. It falls to 15-20 minutes per talk once a bank of questions that have worked exists, because good questions are more reusable than content. The effort is front-loaded and almost entirely writing; the delivery half is one rehearsed fallback line.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Immediate and visible on the next talk, in three places. Within the talk: the room is doing something in the first three minutes, which changes the second half more than the thirty-five seconds it costs. In the Q&A: volunteers rather than silence, which is the effect most worth having in a last slot. In the prize segment: someone in the audience states the talk's thesis out loud as the final content of the conference day, which is a stronger close than any sentence the speaker could deliver and is also the best clip the recording will produce. The longer-run effect is a bank of questions with known response rates, which turns an improvised gamble into a device with a predictable cost and a predictable return.


**needs_organiser_agreement**

yes, and unusually so, because at BBConf4.IT part of this item is the organiser's own requirement rather than the speaker's choice. Settle five things with the organiser or the moderators (Agnieszka and dr Tomasz Gancarczyk) before the session: (1) whether the two prize questions are inside or after the 14:50-15:20 block, which determines whether they cost the talk two minutes; (2) who judges a good answer and who hands over the prize; (3) what the prizes actually are, so the framing matches them; (4) whether a roaming microphone exists for audience answers, which determines whether every answer must be repeated for the room and the recording — assume it must; (5) that the recording continues through the prize segment, since it contains the most reusable ten seconds of the session. The in-talk show of hands needs no agreement at all, but does need the room check: whether raised hands are visible from the front of L120 with the projector running. If any polling tool were used it would additionally need wifi and advance agreement, which is a further reason not to.


**priority**

high, and part of it is not optional: the two prize questions are a stated organiser requirement for 12 September, so the only decision is whether they are designed or improvised. Designing them well is also the highest-leverage move available in this item, because it places the talk's thesis in an audience member's mouth as the last idea spoken at the conference. The in-talk question is high priority for a different reason — it is a single device that simultaneously serves the late_slot gap (state change), the diagnosis (probe), the retention of the block that follows (prequestion), and the Q&A that comes twenty minutes later (permission), at a cost of thirty-five seconds. Few items in this research set return that much for that little.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

- https://www.sciencedirect.com/science/article/abs/pii/S0361476X08000295
- https://pubs.acs.org/doi/10.1021/ed100409p
- https://pubs.aip.org/aapt/ajp/article/69/9/970/310529/Peer-Instruction-Ten-years-of-experience-and
- https://web.mit.edu/jbelcher/www/TEALref/Crouch_Mazur.pdf
- http://psychnet.wustl.edu/memory/wp-content/uploads/2018/04/Roediger-Karpicke-2006_PPS.pdf
- https://www.sciencedirect.com/science/article/abs/pii/S2211368116301103
- https://link.springer.com/article/10.1007/s10648-023-09814-5
- https://www.pnas.org/doi/10.1073/pnas.1319030111
- https://presentationpatterns.com/glossary/
- https://www.simplypsychology.org/asch-conformity.html
- https://journals.sagepub.com/doi/10.1080/00986280701291291
- https://www.nateliason.com/notes/confessions-public-speaker-scott-berkun
- https://www.academia.edu/24470499/A_meta_analytic_review_of_experiments_examining_the_effects_of_extrinsic_rewards_on_intrinsic_motivation
- https://community.slido.com/presenting-slido-213

### Not established by this research

- `origin_author`
- `origin_year`
- `application_pl_talk`
- `pl_language_notes`
- `survives_pdf_export`


---

## Cold open and hook patterns

> Start inside the interesting thing — a failure, a number, a claim the room disagrees with, a question — and supply the context afterwards, instead of spending the first minute on housekeeping.

### What it is

- **category** — narrative


**origin_author**  
<sub>Originating author, book, lab or community that named the method</sub>

The term 'cold open' comes from television and screenwriting (the scene before the titles), not from the presentation literature — note that 'Cold Open' is NOT one of the patterns in the Presentation Patterns glossary (verified 2026-09-08), so it should not be cited as a Ford/McCullough/Schutta pattern. Talk-specific hook taxonomies come from Chris Anderson (TED), Gunnar Morling's 'mission statement' opener, and practitioner guides (taim.io's four openers). The mechanism is Loewenstein's information-gap theory of curiosity. Related genuine Presentation Patterns entries: Narrative Arc (pattern) and Negative Ignorance (antipattern).

- **talk_moment** — first 90 seconds (specifically the first 10-30 seconds of it)

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

A hook works by opening an information gap rather than by being entertaining. Loewenstein (1994) framed curiosity as a reference-point phenomenon: attention focused on a specific gap between what you know and what you have just been told exists produces a felt deprivation that motivates seeking the answer. That is why a hook must be specific — a vague gap creates no deprivation. 'Agenci mają problem z niezawodnością' opens nothing; 'mój agent przez czterdzieści minut robił coś, o co nikt go nie prosił' opens a gap with a definite shape (what? why? how did it end?). The second mechanism is frame-setting: the first concrete thing said is what the audience uses to decide what kind of talk this is, so a failure opening pre-commits the room to a practitioner frame and makes the rest of the talk read as evidence rather than as marketing. The third is contrast: in a saturated room, the strongest hook is not the most dramatic one but the one least like the the talks that came before — the differentiator does the attention work, which is why hook choice cannot be made before you know the running order.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Write down what the audience already believes on your topic after the earlier talks — one sentence. The hook is built against that sentence, not against a blank room. 2. Generate one candidate hook in each of five families: (a) failure/incident — 'this is what broke'; (b) hard number — a specific figure from your own data with a twist; (c) contrarian claim — a testable statement the room would push back on; (d) concrete vignette — two sentences of scene plus one line of meaning; (e) question to the room — but see the Negative Ignorance warning in antipatterns. 3. Kill any candidate that needs more than two sentences of setup, or that only works if the audience already agrees with you. 4. Apply the specificity test: replace every abstract noun with a thing that has a size, a time or a name. If the sentence still works after that, it is a hook; if it evaporates, it was a topic sentence. 5. Apply the gap test: after saying it, is there an obvious question the room now wants answered? Write the question down. If you cannot, there is no gap. 6. Apply the delivery test: say all surviving candidates aloud and keep the one that survives your own mouth. 7. Attach it to the promise — a hook without a promise is a stunt; the gap must be closed by the talk, and the closing of it is what the promise announces. 8. Decide when you deliver it: with a preroll title slide up, or on black. Do not put the hook's own text on a slide — reading it kills it. 9. Plan the resolution point: state where in the talk the gap gets closed (block one for a failure hook, the close for a contrarian claim). Anderson's bookending pairs with this. 10. Memorise it verbatim; it is the one sentence in the talk that must not be improvised.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Whenever the audience has no obligation to listen: conference talks, meetups, webinars, and above all crowded topics and late slots where the default state of the room is politely absent. Highest value in a 15-30 minute slot, where a slow start is unrecoverable. Lower value in a client presentation where you have been introduced by someone who already established relevance, in a workshop where people paid and pre-committed, or in an academic session where a dramatic opener conflicts with genre expectations.

### Evidence


**evidence_level**

Practitioner consensus for the technique and for the specific taxonomy of openers (converging advice from TED, taim.io, Morling, Berkun — but no controlled comparison of opener types in real talks). Controlled study only for the underlying curiosity mechanism: Loewenstein (1994) is a review and reinterpretation in Psychological Bulletin with substantial supporting lab work, not a study of presentations. Anecdote level for the claim that a specific hook family (failure openings, memes) outperforms another — that ranking rests on speaker experience, including the speaker's own.


**myth_status**

confirmed (that a specific, gap-opening start beats a housekeeping start) — but with one contested sub-claim: that the hook must be dramatic or entertaining. Anderson's 'say something dramatic' is a single-expert claim, and it is routinely over-applied into theatrics that a technical room reads as a sales pitch.


**contested_claims**

1) 'Cold Open is a Presentation Patterns pattern.' It is not in the glossary (checked 2026-09-08); attributing it there would propagate a false citation. Use it as a borrowed screenwriting term. 2) 'Open with a joke.' The practitioner guidance runs the other way: taim.io lists jokes that depend on memes or sarcasm among the five opening sins, because they fail silently in a mixed or tired room, and Presentation Patterns' Alienating Artifact covers humour that excludes part of the audience. The meme opener named in this item's description is the highest-variance option in the set and should be treated as the weakest of the five families, not as a default. 3) 'A question to the room always warms the audience up.' Presentation Patterns names Negative Ignorance as an antipattern — never ask 'who here is not familiar with X?' — and in a tired late slot any show-of-hands question risks the silent-room failure. 4) 'You must hook them in the first 7 seconds.' Folklore; see the scripted-opening item.


**key_sources**

1) Loewenstein, G. (1994), 'The Psychology of Curiosity: A Review and Reinterpretation', Psychological Bulletin 116(1), 75-98 — curiosity as a response to a salient, specific information gap; the mechanism that explains why specificity, not drama, is what makes a hook work. 2) taim.io, 'Opening a talk without burning the first 90 seconds' — four concrete opener patterns (surprising fact, concrete vignette, reframed question, strong claim) with worked examples, plus five opening sins (apology, agenda read-out, meme-dependent joke, throat-clearing, logistics). The most operational taxonomy found. 3) Presentation Patterns glossary (Ford, McCullough, Schutta, 2012) — Narrative Arc: 'Organizing your presentation in a similar way leverages your audience's lifetime of story listening experience'; Negative Ignorance (antipattern): 'Never pose a question to the audience in the form of "Who here is not familiar with X?"'. 4) Anderson, C. (2016), TED guide — say something dramatic within the first minute, consider a fascinating image, avoid a predictable throughline.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

1) Hook inflation: a dramatic opener that the talk cannot pay off produces a worse outcome than a plain start, because the audience registers the mismatch as manipulation. In technical rooms this is punished harder than in general audiences. 2) Genre mismatch: engineers frequently read a strongly performed hook as marketing, especially from a CTO, and the credibility cost is immediate. The failure-opening and hard-number families avoid this because their content is evidence, not performance. 3) The gap can be closed too early: a hook that resolves in the first thirty seconds spends its own tension; the gap needs to stay open at least until the first block lands. 4) Interaction hooks (show of hands, question to the room) transfer control to the audience at the exact moment you have least ability to recover it — a real risk at 14:50. 5) There is no evidence that hook type predicts talk outcome; the whole taxonomy is craft, not finding.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

Occupies 0:00-0:30 inside the scripted opening and replaces the self-introduction as the first content. For BB4IT specifically, the running order dictates the family: after the earlier agent talks, the differentiating families are failure/incident and hard number, because the previous speakers almost certainly opened with capability and possibility. Deliver it with either the preroll title slide still up or a black slide — no text of its own. Close the loop it opens in block one (the recorded demo), so the hook is not a detached stunt but the entry point into the material. Reserve a second, smaller hook for the start of the last block, at roughly minute 17, where attention in a late slot drops the furthest.

- **time_budget_min** — 0.5 (10-30 seconds of speech). The cost is not stage time but preparation time and the requirement that the talk actually pay it off.


**audience_change**

The room stops sampling and starts listening: within thirty seconds they hold a specific unanswered question that only this talk closes. Concretely, after the earlier capability talks they now expect failure modes rather than another demo of what agents can do — which is exactly the expectation the rest of the talk needs.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

opening — directly (this supplies the content of the one-sentence hook that the NCP4 action item requires). late_slot — directly: in a tired, saturated room the hook is the main instrument for re-winning attention, and hook family selection is the differentiation move. Indirect: reuse (a good hook is the natural first frame of the LinkedIn clip), and timing (a hook replaces two minutes of preamble that would otherwise be improvised).


**minimal_2h_version**

40 minutes: (1) 5 min — write the one sentence describing what the room already believes after the earlier talks. (2) 15 min — write one candidate hook in each of the five families; do not edit while generating. (3) 5 min — apply the specificity and gap tests, keep two. (4) 10 min — say both aloud, standing, three times each, and keep the one that survives your mouth. (5) 5 min — write down where the gap closes and add that line to block one. If only ten minutes exist: take the most embarrassing true thing that happened in your own production system, say it in one sentence with a number in it, and stop there.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

Agentic-AI talk, BB4IT, fifth agent-adjacent talk of the day. Failure family (recommended): 'Czterdzieści minut. Tyle mój agent pracował nad zadaniem, o które nikt go nie prosił — i zapłaciliśmy za każdą z tych minut.' [beat] 'Pokażę wam to nagranie, bo to nie był błąd modelu. To był błąd projektowy, i jest w co drugim systemie agentowym, który dzisiaj widziałem na tej sali.' The gap: what design error, and is it in mine? It closes in block one. Number family, same material: 'Nasze agenty wykonały w zeszłym miesiącu jedenaście tysięcy zadań. Trzysta z nich było kompletnie niepotrzebnych — i to te trzysta zdefiniowało nam architekturę.' Contrarian family: 'Zaryzykuję tezę: problemem w systemach agentowych nie jest halucynacja. Problemem jest to, że agent robi dokładnie to, o co go poprosiliście.' Question family (use only if the room is awake): 'Ręka w górę, kto ma dzisiaj agenta na produkcji, nie w demo.' — with the fallback pre-planned for zero hands.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

(1) Build a hook inventory from your own material rather than from talk transcripts: every time something breaks in production, write the one-sentence version that night — most good hooks are incidents recorded before they were needed. (2) Practise the transformation drill weekly: take a paragraph of your own writing and rewrite its first sentence in all five families; this trains family fluency, which is what lets you switch on the day when the running order surprises you. (3) After each talk, record which family you used and what the room did in the first thirty seconds — three or four talks is enough to learn which family you deliver well. (4) Practise delivering the hook to people who have no context (a partner, a non-technical friend): if they ask the follow-up question you predicted, the gap is real. (5) Deliberately deliver one talk with a plain, unhooked opening to calibrate how much the hook is actually doing.


**drill**

The five-families drill, 20 minutes. Input: one true incident from your own systems, a timer, a phone. Action: (a) 10 min — write the same incident as five hooks, one per family, one sentence each, no editing; (b) 5 min — for each, write the question you predict the audience now has; delete any hook whose question you cannot write; (c) 5 min — record yourself saying the two survivors, watch once, keep one. Observable output: one hook of at most two sentences, one written audience question it provokes, and a recording in which you deliver it without reading. Repeat with a different incident the next week.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

One sentence. This is the smallest and most repeatable unit in the whole research set — a hook can be written, tested and discarded in ninety seconds, which is why the generate-five-keep-one protocol is affordable.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

30-45 minutes of writing and testing per talk, plus the rehearsal time it shares with the scripted opening (it does not add rehearsal cost, because it is the opening's first sentence). Ongoing cost near zero once an incident inventory exists.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

Immediate and readable in the room: what happens in the three seconds after the hook (see works_signal). Delayed: check the recording — the first thirty seconds tell you whether you delivered the hook or explained it. Slowest and most reliable: whether anyone repeats your hook back to you in the hallway or in a post; a hook that gets quoted worked, and it is the same sentence that will carry the LinkedIn clip.

### Online and recorded


**online_variant**

Harder and more important. There is no room reaction to steer by, so the hook must be built for a viewer who can leave silently: put the specific number or the incident in the first sentence, before any greeting, because the join-and-decide window is shorter than in a room. Question-to-the-room hooks translate into a chat prompt ('wpiszcie na czacie: macie agenta na produkcji czy w demo?') and must have a stated fallback, since a silent chat is more common than a silent room. A visual hook (a screen recording already playing) works better online than in a room, because the viewer's attention is already on the screen.


**recorded_variant**

The hook is the single most valuable second-life asset in the talk — it is the first frame of the clip and the sentence a title card is built from. Two design consequences: write it so it stands without room context (no 'as we saw in the previous talk'), and deliver it while looking at the camera side of the room if you know where the camera is. Also, a hook that depends on a live show of hands is unusable in the recording, because the audience response is invisible and inaudible on the recording's audio track — if you use one, narrate the result aloud ('połowa sali' / 'trzy osoby'), otherwise the clip loses the moment.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

1) The hook that is really a topic sentence — 'Dzisiaj opowiem o niezawodności systemów agentowych' delivered with drama. 2) The stunt hook with no payoff, where the opening incident never returns. 3) The meme opener: a slide with an image the room half-recognises, generating three laughs and a frame you then have to climb out of; also the Alienating Artifact risk of humour that excludes part of the room. 4) Negative Ignorance — 'kto z was nie wie, czym jest agent?' — which forces people to publicly declare ignorance and reliably produces silence. 5) The hook printed on the slide, read by the audience two seconds before you say it, so the gap closes before it opens. 6) The borrowed hook — a striking statistic from someone else's talk, which in a saturated room may be the same statistic the audience heard at 11:00.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Choosing the hook before knowing the running order, so it competes with an earlier speaker instead of contrasting with them. Making it abstract, which is the single most common failure — the fix is always to add a number, a time or a name. Explaining the hook immediately ('to znaczy, że…'), which closes the gap you just opened; the correct move after the hook is a pause. Using a question hook in a tired room without a fallback. Making the hook longer than two sentences. Building the hook on a client name or a customer incident that is not cleared for public use — a specific and permanent risk once the talk is on YouTube.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

Where the audience is already committed and the drama has nowhere to go: paid workshops, internal team sessions, a 45-60 minute client presentation to non-technical staff who need orientation first, and academic or regulated formats with genre expectations. Also skip the strong-claim family when you are the vendor in the room and the claim conveniently favours what you sell — the room discounts it automatically. And if the talk's payoff is genuinely mild, do not manufacture a hook out of proportion to it; a specific plain start beats an oversold one.


**fallback_if_it_fails**

If a question-to-the-room hook gets no hands: answer it yourself immediately and move — 'W zeszłym roku ja też bym nie podniósł ręki' — never repeat the question, never wait a second time. If a joke or meme lands silently: do not explain it, do not apologise; go straight to the next sentence, which is why the next sentence must be the strongest one you have. If the hook is stepped on by external noise (a late arrival, a mic problem), pause, wait, and deliver it again — the hook is the only sentence in the talk worth repeating verbatim. If the room reacts flat overall, skip the promise's expansion and get to the demo or the first visual within sixty seconds; in a saturated room, showing beats claiming.


**works_signal**

Positive within three seconds of the hook: the room goes quiet rather than louder, heads lift, several people stop typing, and in Polish rooms specifically a short collective exhale or half-laugh at a failure line. At thirty seconds: nobody has looked at a phone since you started. Negative: continued typing, people finishing conversations, eyes on the slide instead of on you, and — the clearest one — no change at all in the ambient noise level. On negative signals, switch immediately to concrete evidence: play the recording, show the number, stop making claims.


**dependencies_conflicts**

Prerequisites: the topic-saturated framing item (family selection depends on what the earlier speakers already did) and the scripted-opening item (the hook is a memorised sentence inside that script). Pairs with: bookending — the gap opened here should be closed in the close, which also gives the recording a clean ending. Conflicts: (a) with audience interaction — a show-of-hands hook and a low-energy late slot are mutually hostile, so in a 14:50 slot pick a non-interactive family; (b) with the preroll slide, if the preroll already states the talk's punchline; (c) with the time budget, if the hook's payoff requires a demo you have not budgeted for; (d) with a live demo opening — 'demo as hook' is attractive but couples the riskiest asset to the least recoverable moment, so the recorded-demo route is the compatible version.

### Tooling


**tool_support**

A notes file that accumulates incidents as they happen (the actual source of hooks). A stopwatch, to keep the hook under thirty seconds. A phone camera for the delivery test. An LLM is genuinely useful here for divergence — 'generate ten hooks in these five families from this incident' — and genuinely bad at selection, because it optimises for punchiness rather than for what you can say credibly; use it to produce candidates and choose them yourself out loud. For the topic-saturation input, the conference agenda page and the earlier talks' abstracts.


**marp_implementation**

Deliberately minimal: the hook is spoken, not projected. Either keep the title slide up (the preroll) or add a full-bleed black slide before the first content slide — in Marp, a slide whose only content is a directive: <!-- _backgroundColor: #000 --> with no text. The hook text goes into presenter notes as an HTML comment, marked HOOK — VERBATIM. If a visual hook is wanted (a still from the recorded demo), use a full-bleed image with the bg directive (![bg](demo-still.png)) and no caption, so nothing is readable before you speak.


**survives_pdf_export**

yes — the hook lives in speech and in an image or blank slide, both of which export unchanged. The only casualty is the presenter-note text, which a standard `marp --pdf` drops unless you export with --pdf-notes; that does not affect delivery, since the hook is memorised.

### Effort and payoff

- **prep_effort** — low — 30-45 minutes per talk, and much less once an incident inventory exists. The binding constraint is having a real incident worth telling, not the writing.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Immediate: the first thirty seconds stop being warm-up and the room's attention state at minute one is visibly different. Over several talks: the hook becomes the part of the talk people quote back, which is also what makes the clip and the post work — a compounding effect on the reuse gap.


**needs_organiser_agreement**

no for the hook itself. Yes for two adjacent things: whether the earlier talks' content can be referenced by name (courtesy, and needs the running order), and whether an incident involving a client can be described publicly — that is a client agreement rather than an organiser one, and it must be settled before the talk is recorded.


**priority**

high — it supplies the content of the opening the speaker has already committed to writing, it is the main lever for the late, saturated BB4IT slot, and it costs under an hour. Slightly below the scripted-opening item only because it is the payload and the script is the container.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

- https://www.taim.io/public-speaking/opening-a-talk-without-burning-the-first-90-seconds
- https://presentationpatterns.com/glossary/
- https://www.scirp.org/reference/referencespapers?referenceid=2828034
- https://psychologyfanatic.com/information-gap-theory/
- https://calvinrosser.com/notes/ted-talks-chris-anderson/
- https://www.morling.dev/blog/ten-tips-make-conference-talks-suck-less/
- https://speaking.io/
- https://www.nateliason.com/notes/confessions-public-speaker-scott-berkun

### Not established by this research

- `origin_year`
- `application_pl_talk`
- `pl_language_notes`
- `measurable_kpi`


---

## Question policy announced in the first minute

> State in one sentence, inside the opening, when questions are welcome — at the end, on a visible signal, or in the hallway — so the room stops deciding for itself and both the opening and the time budget are protected.

### What it is

- **category** — delivery


**origin_author**  
<sub>Originating author, book, lab or community that named the method</sub>

Damian Conway, 'Instantly Better Presentations' (YOW! 2014 and earlier versions) — the explicit questions policy: open with an invitation ('I'm keen to take questions'), then state the policy, with options including at the end, on a visual cue (his blue-slide convention), at the break, or informally afterwards. Reinforced by conference Q&A guidance (explain the session's rules at the beginning, budget the time, keep the hallway track open) and paired with Presentation Patterns' Echo Chamber (always repeat the question before answering).

- **talk_moment** — first 90 seconds (announced) → middle blocks (enforced) → Q&A (executed)

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

An unstated policy is not the absence of a rule; it is a rule set by whoever in the room is boldest. That produces three costs. (1) Interruption at the worst moment: the highest-risk question arrives during the opening or the demo, when the speaker has least capacity and the material is least self-supporting. (2) Time leakage that is invisible until it is fatal: one two-minute exchange at minute six silently invalidates every downstream timing checkpoint, and in a 25-minute slot two such exchanges are the whole margin. (3) Suppression: in a room with no stated rule, people who would have asked good questions often stay silent because asking would mean interrupting — so an unstated policy reduces both control and participation at once. Announcing the policy fixes all three by transferring one decision from the audience to the speaker, at a cost of about ten seconds. There is a fourth, less obvious mechanism: the announcement is itself a signal of competence and preparation, delivered inside the primacy window, and it tells the audience that a Q&A exists at all — which materially increases the chance that someone has a question ready when the time comes, because they have been holding one for twenty minutes rather than composing one in the last thirty seconds.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Choose the policy from the real constraints, not from preference: slot length, whether Q&A is inside or outside the slot, room size, whether there is a microphone for the audience, and whether the session is recorded. 2. For a 25+5 conference slot, default to end-only, with the hallway explicitly named as the overflow channel. For a 45-60 minute client or workshop session, mid-talk questions are usually right; for a webinar, name the chat. 3. Write it as one sentence with three components: the invitation, the rule, and the escape hatch — 'I want your questions / at the end, we have five minutes / and if we run out, catch me in the corridor'. Never state the rule without the invitation; the rule alone reads as defensive. 4. Put the sentence in the scripted opening, after the promise and before the handover into block one, so it cannot be forgotten under nerves. 5. Decide the exception you will honour: a genuine comprehension-blocker ('nie słychać', 'nie widać slajdu', 'nie rozumiem tego oznaczenia') should always be taken immediately — say so if the room is small enough for it to matter. 6. If you choose the signal variant, make the signal real and visible: a distinctly coloured slide, or a spoken marker at block boundaries ('pytania do tego bloku?'). A signal you forget to give is worse than no signal. 7. Enforce it once, kindly, if someone breaks it — this is the entire enforcement mechanism, and doing it once early is what makes the rest of the talk quiet. 8. Repeat the policy in one clause when you reach the Q&A ('teraz pytania, mamy pięć minut'), which is also the moment to state that you will repeat each question aloud for the recording. 9. After the last question, do not end on it: return to your prepared close (see the closing-after-Q&A item). 10. Tell the moderator your policy before the session, so their expectations and yours agree.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Every talk, in some form — the choice is which policy, not whether to state one. End-only is right for: short conference slots, recorded talks, large or dark rooms, audiences without microphones, and any talk with a demo whose flow cannot absorb interruptions. Mid-talk questions are right for: workshops, client presentations to a small non-technical group who will otherwise stop following, small internal sessions, and long slots with slack. The hallway-only variant fits a very tight slot with no scheduled Q&A. The one case where you can skip it is a moderated format where the moderator opens by announcing the rules — then say nothing and let the moderator's rule stand.

### Evidence


**evidence_level**

Practitioner consensus, and unusually consistent: the same advice appears in Conway's talk, in conference Q&A guidance, in academic presentation guides and in first-time-speaker guides, and it is essentially cost-free, which is why it survives without evidence. No controlled study comparing announced with unannounced question policies was found, nor any measuring the effect of question timing on comprehension or on question quality. The trade-off claims — that end-only protects flow while mid-talk questions aid clarification and engagement — are stated in guidance as tendencies, not measured.


**myth_status**

confirmed as practice, unevidenced as a claim — the practice is universally recommended and near-costless, but the specific benefits attributed to each variant rest on experience rather than on data. Do not attach numbers to it.


**contested_claims**

1) 'Questions during the talk make it more engaging.' Presented in Q&A guidance as a genuine benefit, and true in workshops and small rooms, but the claim is routinely over-generalised to short conference slots where the cost to the time budget is decisive. Both halves of the trade-off are practitioner claims, not findings. 2) 'Taking questions at the end means fewer people get answers.' True in arithmetic, and the standard guidance response — the hallway track, plus an anonymous channel like Slido — is exactly why the escape hatch belongs in the sentence. 3) 'Never plan Q&A at the end; plan it near the end.' A specific piece of advice that is right for a different reason than usually given: the point is not the questions, it is that you must close after them, which is the closing-after-Q&A item. 4) 'A policy makes you look controlling.' The opposite is the common experience: the invitation half of the sentence signals openness, and rooms with no stated policy are quieter, not livelier.


**key_sources**

1) Conway, D., 'Instantly Better Presentations' (YOW! 2014; notes and slides at damian.conway.org) — have an explicit questions policy: start with 'I'm keen to take questions', then state it (at the end, on seeing a blue slide, at the break, or informally). The canonical formulation of this item, including the signal variant. 2) Presentation Patterns glossary (Ford, McCullough, Schutta, 2012) — Echo Chamber (pattern): 'When an attendee asks a question, always repeat the question before answering.' The mandatory companion practice, and the one that saves the recording. 3) Conference Q&A guidance — explain the session's rules at the beginning, state that time is limited, budget Q&A time so you do not overrun your slot, repeat each question, and plan to stay afterwards because some people will not ask in front of a room. 4) Berkun, S., 'Confessions of a Public Speaker' (2009) — on the end-of-day case: acknowledging that everyone wants to get to the evening event lets a tired room off the hook rather than leaving a silence hanging.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

1) A rigid end-only policy in a small, engaged room suppresses exactly the interaction that would have made the session good — the format, not the principle, must decide. 2) It costs the one thing the opening is shortest of: ten to fifteen seconds inside a 90-second window that is already carrying a hook, a promise and a saturation line. In a very short slot, cutting the policy sentence is a defensible trade. 3) Announcing an end-of-talk Q&A creates an expectation you must then meet; if you overrun and there is no Q&A, the unmet promise is more visible than if you had never mentioned it. 4) Some rooms ignore the policy entirely, and enforcement costs social capital at the worst possible moment — although one polite deferral is nearly always enough. 5) In a tired late slot, an announced end-of-talk Q&A can produce a visible silence — a real risk, which is why the seeded first question and the hallway escape hatch are prerequisites rather than optional extras.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

One sentence at 1:05-1:20 of the scripted opening, immediately before the handover into block one. For BB4IT's 25+5 the policy is end-only with a hallway escape hatch, because five minutes is enough for two or three questions and no more, and because a mid-talk exchange would break the recorded-demo block. Restate it in a clause when Q&A opens, together with the promise to repeat each question for the microphone. Because BB4IT asks each speaker to prepare two prize questions for the audience, note the interaction: those are questions from you to the room, and they must be framed so they are not mistaken for an invitation to open a general Q&A — put them at block boundaries and answer them yourself if the room stays quiet.


**time_budget_min**

0.25 — ten to fifteen seconds in the opening, plus about five seconds when Q&A opens. It is the cheapest sentence in the talk and the one that protects the largest amount of downstream time.


**audience_change**

The room stops holding an unresolved question about how to behave, which is a small but real background load, and it starts holding questions for the end instead of either interrupting or abandoning them. Concretely: nobody interrupts the demo, and at 21:30 there are two or three people with a question already formed rather than a silence while someone composes one.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

qa — directly; it is the frame every other Q&A item hangs on (answer protocol, red-team question bank, seeding the first question, closing after Q&A all assume a stated policy). timing — directly and strongly: it is the single cheapest protection of the time budget, because it removes the class of interruptions that silently invalidates every checkpoint. opening — directly: it is one of the four sentences of the scripted opening and part of the unfinished NCP4 action item. late_slot — indirect: in a tired room a stated policy plus a named hallway option is what prevents an awkward silence from becoming the last thing that happens on stage.


**minimal_2h_version**

Twenty minutes, and it is the highest ratio of value to effort in this batch. (1) 5 min — decide the policy from the constraints (slot length, Q&A inside or outside, microphone availability, recording). (2) 5 min — write the one sentence with all three components and add it to the opening script at the fixed position. (3) 5 min — say it aloud five times until it is fluent, since a hesitant delivery of a rule undermines the rule. (4) 5 min — write the Q&A opening clause ('teraz pytania, będę je powtarzał') and one seeded first question in case nobody starts. If only five minutes exist: write the sentence and put it in the notes. It is ten seconds long and it is the most reliable single improvement available before a talk.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

BB4IT, 25 minutes plus 5 of Q&A, recorded, no audience microphone, last slot of the day. Opening, at 1:05: 'Pytania bardzo chętnie — zbieram je na koniec, mamy na nie pięć minut. Jeśli czegoś nie widać albo nie słychać, przerywajcie od razu. A jak nie zdążymy z pytaniami, łapcie mnie na korytarzu, będę tu do końca konferencji.' Twelve seconds, invitation first, one honoured exception, escape hatch named. Enforcement case: at minute nine someone asks about model costs mid-block — 'Świetne pytanie, zapisuję je i wracam do niego na koniec' — then continue; the question is written on the card and answered first in Q&A, which both honours the policy and rewards the asker. Q&A opening at 21:40: 'To teraz pytania. Będę je powtarzał, bo nagranie was nie słyszy. Zacznę od pytania, które dostaję najczęściej: co z wysyłaniem firmowych danych do chmurowych LLM-ów?' — the seeded question, chosen because it is the one that caught the speaker unprepared at NCP4. Close at 24:30 with the prepared 45-second ending, not on the last answer.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

(1) Make the sentence a fixed part of your opening template so it stops being a decision — after three talks it is automatic. (2) Practise the enforcement line separately: one sentence, warm, non-negotiable, ready before you need it. Most speakers fail here not from unwillingness but from not having the words. (3) Build a per-format table of your own — 25-minute conference slot, 45-minute client talk, 2-hour workshop, webinar — with the policy for each, so the choice is looked up rather than made under pressure. (4) After each talk, record what actually happened: was the policy stated, was it broken, did anyone use the hallway option. Three or four data points reveal whether your policy fits the rooms you actually speak in. (5) Train the companion skill in parallel — repeating the question aloud (Echo Chamber) — because a stated policy that funnels everything into a five-minute Q&A makes the quality of that Q&A matter much more.


**drill**

The policy-and-deferral drill, 10 minutes. Input: your next talk's format details, a phone camera. Action: (a) 3 min — write the policy sentence for that specific format, all three components; (b) 4 min — record yourself saying it five times, varying the wording slightly, and keep the version that sounds like an invitation rather than a rule; (c) 3 min — record the deferral line as if interrupted at minute nine, twice: once for a real comprehension blocker (which you take) and once for a content question (which you defer). Observable output: two recorded lines, each under eight seconds, that you can deliver without hesitation. Success criterion: play the deferral line to someone and ask whether it sounded dismissive — if yes, rewrite it, because a badly delivered deferral costs more than the interruption.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

One sentence — the policy statement — plus one short deferral line. Both are under fifteen seconds, both are reusable across every talk, and both are trained by saying them aloud rather than by writing them.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

15-20 minutes the first time, including choosing the policy and rehearsing the deferral. Under five minutes per subsequent talk, and effectively zero once it is part of the opening template. The only recurring cost is the moderator conversation before the session.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

Immediate: whether anyone interrupts during the talk — the policy either held or it did not, and one data point per talk is enough. At Q&A: whether questions arrive without prompting, and how quickly the first hand goes up; a fast first question usually means people were holding one, which is the intended effect. Afterwards: how many people approach you in the hallway, which measures whether the escape hatch was heard. From the recording: whether you actually said the sentence — at NCP4 the comparable opening item was not delivered, so verifying against the recording rather than against memory matters.

### Online and recorded


**online_variant**

The policy becomes more important, not less, because the channel is ambiguous by default: chat, Q&A panel, raised-hand and unmuting are all technically available and the audience does not know which one you are watching. State the channel explicitly in the first minute ('pytania wrzucajcie na czacie, będę na nie odpowiadał na końcu każdego bloku'), and name who is watching it if you have a co-host — an unwatched chat is worse than no chat, because people can see their question being ignored. Mid-talk questions are more workable online than in a room when a moderator triages the chat, since the interruption is asynchronous. The equivalent of the hallway is a named follow-up channel: LinkedIn, email, or a link on the resource slide.


**recorded_variant**

Two consequences, one of which is invisible until publication. First, audience questions almost never reach the recording's audio track, so a policy that funnels questions into a Q&A must be paired with repeating every question aloud (Echo Chamber) — otherwise the published video contains a speaker answering silence for five minutes, which is the most common defect in recorded conference talks. Announce the repetition when you open Q&A, so it does not look like a stalling tactic. Second, the policy sentence itself dates and localises the recording ('mamy pięć minut', 'łapcie mnie na korytarzu'), so it should be excluded from clips; when a talk is re-recorded or re-delivered, this is one of the sentences that must change.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

1) The rule without the invitation — 'Pytania na koniec' as the first thing said, which reads as defensive and suppresses questions you wanted. 2) The unenforced policy: stated once, broken at minute six, and abandoned, which is worse than never stating one because it demonstrates that the rules are negotiable. 3) The forgotten signal: promising a blue-slide cue and never showing it, leaving the audience waiting for a moment that never comes. 4) The policy with no escape hatch, in a slot too short to answer everyone. 5) Ending on 'Czy są jakieś pytania?' with thirty seconds left, which is a policy announcement disguised as an invitation and reliably produces silence. 6) Taking questions at the end and then ending on the last answer, so the recording's final sentence belongs to a stranger.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Forgetting to say it — the most common failure by a distance, and the reason it belongs in the written opening script rather than in the speaker's intentions. Making it three sentences instead of one. Choosing end-only in a small client meeting where the audience needed to interrupt to follow. Choosing mid-talk questions in a 25-minute recorded slot. Not telling the moderator, so the moderator opens the floor at minute twenty. Promising more Q&A time than the schedule contains. Not repeating questions once Q&A starts, which quietly ruins the recording. Treating the policy as a substitute for preparing the answers — the policy governs when questions arrive, not whether you can answer them, which is the red-team question bank's job.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

A moderated panel or fireside chat, where the moderator owns the interaction and a speaker-declared policy conflicts with theirs. A workshop or a small internal session, where imposing a formal policy makes a naturally conversational format stiff — though even there, one sentence about how to interrupt helps. An extremely short slot (five to ten minutes) with no scheduled Q&A, where 'catch me afterwards' is the whole policy and needs no framing. And if the organiser's format already announces the rules to the room, do not restate them differently.


**fallback_if_it_fails**

If someone interrupts anyway: take it if it is a genuine blocker, otherwise defer warmly and visibly write it down — the writing is what makes the deferral read as respect rather than refusal — and answer it first at the end. If someone persists into a monologue: 'To jest temat na dłuższą rozmowę — złapmy się po prelekcji' and turn your body back to the room, which ends the exchange more reliably than words. If Q&A opens to silence: use the seeded question immediately, do not wait through more than three seconds of silence, and follow Berkun's late-slot move — acknowledge the hour and release the room rather than letting a silence sit. If you run out of time entirely and there is no Q&A: state the escape hatch again from the stage in one sentence, so the promise is not simply broken. If the room turns out to want continuous interaction (small client audience), change the policy explicitly and once — 'Widzę, że lepiej pójdzie nam na bieżąco: przerywajcie' — rather than letting it erode silently.


**works_signal**

Positive: nobody interrupts, and the first hand goes up within a few seconds of Q&A opening — that speed is the clearest evidence people were holding questions rather than composing them. Also positive: someone in the hallway opens with 'nie chciałem pytać przy wszystkich', which means the escape hatch was heard and used. Negative: an interruption in the first five minutes, which means the sentence was not said or not heard; a silence longer than five seconds at Q&A, which in a late slot means the room has already left mentally; and questions arriving to the moderator instead of to you, which means the moderator's rules and yours did not match.


**dependencies_conflicts**

Prerequisites: the scripted opening (this sentence lives inside it) and the moderator contract (your policy and theirs must agree). Hard companions: Echo Chamber — repeating each question — without which an end-loaded Q&A ruins the recording; the seeded first question, without which an end-only policy risks silence in a tired room; and the prepared close, without which the talk ends on someone else's question. Conflicts: (a) with audience interaction and the two prize questions BB4IT asks speakers to prepare, which are questions from the stage and must be framed so they do not read as opening the floor; (b) with mid-talk questions and the time budget — the conflict named in the field definitions, and the reason end-only is the default for 25 minutes; (c) with an anonymous question channel such as Slido, which changes the policy and must be agreed with the organiser in advance; (d) with a live demo, whose flow cannot absorb interruptions, making the policy a demo-risk control as well as a time control.

### Tooling


**tool_support**

The opening script card and the presenter notes, which is where the sentence must physically live so it is not forgotten. A card or notebook for writing down deferred questions in front of the room, which is both a memory aid and a visible act of respect. Slido or Mentimeter as an anonymous channel where the organiser supports it — worth asking about for a tired late slot, since it raises question volume when hands do not go up. A microphone for the audience if one exists; where it does not, repeating the question is the only way the recording works. An LLM is useful before the talk for generating the hard questions the policy will funnel into five minutes, but has no role in the policy itself.


**marp_implementation**

Two small things. Put the sentence in the title slide's presenter notes as part of the opening script: `<!-- 1:05 POLICY: pytania na koniec, 5 min, korytarz -->`. If you use Conway's signal variant, implement the cue as a distinct slide class in the theme (`<!-- _class: questions -->` with a strongly contrasting background) and place it at the block boundaries where questions are allowed — a class-based slide rather than a fragment, so it survives PDF export. Do not put the policy text on the title slide itself; it is a spoken rule, and a slide bullet reading 'Pytania na koniec' spends visual attention on housekeeping during the primacy window.


**survives_pdf_export**

yes — the policy is speech, and the optional signal slide is a normal slide with a theme class, both of which export unchanged. Only the reminder in the presenter notes is dropped by a standard `marp --pdf` (recoverable with `--pdf-notes`), which is irrelevant, since the sentence should be memorised as part of the opening.

### Effort and payoff

- **prep_effort** — low — 15-20 minutes once, then effectively free as part of the opening template. The lowest-cost item in this batch.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Immediate on the next talk: no interruptions during the demo, timing checkpoints stay meaningful, and the Q&A starts with a question rather than a silence. Cumulative: it makes the rest of the Q&A preparation worth doing, because it guarantees the questions arrive in one predictable window that you have prepared for.


**needs_organiser_agreement**

yes, briefly and specifically: confirm with the moderator whether Q&A is inside or outside the 25 minutes, who opens and closes it, who cuts off a monologue, whether there is a microphone for the audience (which decides how much repeating you must do), and whether an anonymous question tool is available or permitted. Two minutes of conversation before the session, and it is the same conversation as the time-signal agreement in the time-control item.


**priority**

high — ten seconds of stage time that protect the opening, the time budget and the Q&A simultaneously; it directly addresses the qa gap and part of the opening gap; it costs under twenty minutes to prepare; and it is applicable immediately at BB4IT on 2026-09-12.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

- https://gist.github.com/whostolebenfrog/5107027
- http://damian.conway.org/IBP.pdf
- https://www.youtube.com/watch?v=W_i_DrWic88
- https://presentationpatterns.com/glossary/
- https://nicolalindgren.com/speaking-at-a-conference-a-practical-guide-for-first-time-presenters/
- https://sheridancollege.libguides.com/presentationskills/delivering-your-presentation/handling-audience-questions
- https://blog.slido.com/the-art-of-organising-successful-qa-sessions/
- https://www.nateliason.com/notes/confessions-public-speaker-scott-berkun
- https://www.enago.com/academy/6-simple-ways-to-handle-a-qa-session-at-a-conference/

### Not established by this research

- `origin_year`
- `application_pl_talk`
- `pl_language_notes`
- `measurable_kpi`


---

## Seeding the first question

> Never open the floor into silence — have the first question ready in your own pocket ('the question I get most often is…'), answer it in 40 seconds while the room composes theirs, and only fall back to an arranged questioner if that is disclosed, because the first question sets the norm for every one that follows.

### What it is

- **category** — qa


**origin_author**  
<sub>Originating author, book, lab or community that named the method</sub>

No single origin. The practice is webinar-industry standard under the name seed questions (BrightTALK / Informa TechTarget), and older speaker-coaching canon under 'plant a question' or 'prime the pump'. The mechanism it exploits is pluralistic ignorance, named by Floyd Allport and Daniel Katz. The empirical demonstration that the first questioner shapes the rest is Carter, Croft, Lukas and Sandstrom.

- **origin_year** — Pluralistic ignorance named by Katz & Allport 1931; seed questions as webinar practice from roughly 2010 onward; Carter et al., PLOS ONE, 2018


**talk_moment**

first 90 seconds (where you announce the question policy and warn that you have one of your own) and the first 30 seconds of Q&A — plus a decision made before arriving about which of the three variants you will use

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

The silence after 'any questions?' is not an absence of questions; it is a coordination failure with a name. Pluralistic ignorance: each person privately has a question, observes that nobody else is asking, infers from that silence that everyone else understood and that asking would mark them as the one who did not, and stays quiet — producing exactly the silence that convinced them. Everybody is deferring to a consensus that does not exist. The self-silencing is amplified by an anticipated competence cost: people expect to be judged less competent for asking, which is a specific, documented driver of staying quiet. Two things break the loop, and seeding does both. (1) It supplies existence proof. Once one question has been asked and answered without the asker suffering, the inference that questions are unwelcome collapses, and the private questions surface. (2) It sets a norm, and the norm is more specific than 'asking is allowed' — it is a template. The first question demonstrates the acceptable length, register, and level of the questions that follow, which is why a long showing-off first question produces more long showing-off questions and a short practical one produces short practical ones. That the first questioner shapes the composition of what follows is not speculation: Carter et al., observing 247 seminars across 35 institutions in 10 countries, found that when a man asked the first question the proportion of subsequent questions asked by women fell by 6 percentage points relative to a woman asking first. The identity and shape of question one propagates. Which means the real argument for seeding is not that it rescues a dead Q&A — it is that the first question is going to set the template whether you choose it or not, and you can either choose it or let a random attendee choose it for you.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Decide the variant before the talk. There are three legitimate ones and one to avoid — see when_to_use. Default to the self-seed. 2. Write the seed question in the questioner's voice, not yours. 'Jak to sie ma do RODO?' not 'A common question concerns regulatory compliance.' If it does not sound like something a tired engineer would actually say, it will not do its job. 3. Choose a question that is genuinely common and genuinely useful — the seed must earn its 40 seconds on content, because a room that senses filler disengages further. 4. Have the answer prepared and short. This is the one answer in the whole session that is fully scripted; it should be the cleanest 40 seconds you deliver. 5. Signal it in the opening. In the first 90 seconds, alongside the question policy: 'Pytania na koncu. Jesli nikt nie zacznie, mam jedno wlasne, ktore i tak zawsze pada.' This costs six seconds and removes all the awkwardness later, because when you use it the room already knows it was planned. 6. On the day, open the floor properly first — say 'Jakie macie pytania?' (open form) rather than 'Czy sa jakies pytania?' (yes/no form, which is answerable by silence), then wait. 7. Wait longer than is comfortable. Seven to ten seconds, counted, not felt. Most speakers wait two or three and conclude there are no questions; the room is still composing. Look at faces, not at the floor or the clock. 8. If a hand goes up, drop the seed entirely. It has done its job by existing. 9. If nothing at seven seconds, deploy: 'To zaczne sam - pytanie, ktore dostaje najczesciej, brzmi...' Answer it in 40 seconds. Then re-open the floor once: 'Teraz wy.' 10. Have a second seed ready but use it only if the first produced nothing; two seeds in a row is a monologue and it is time to close instead. 11. If you are using the arranged variant, brief the person before the talk with the exact question, tell them to ask it only if nobody else does after ten seconds, and disclose it on stage when you take it ('poprosilem Marka, zeby zaczal').


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Any slot with a real risk of silence, which is: a late slot, a tired room, a topic already covered by earlier speakers, a large room where standing up is socially expensive, a first talk in front of an audience that does not know you, and any online format. The BB4IT slot on 2026-09-12 is four of these at once. THE FOUR VARIANTS, ranked by honesty and by how well they hold up on a recording. (A) SELF-SEED — you ask your own question out loud and answer it, framed as the question you always get. Fully honest, requires nobody's cooperation, works in every format, and is the default. (B) FLIP IT — instead of taking a question, ask the room one first: a show of hands, or a direct question to a specific area of the room. Lowers the participation threshold from 'formulate a question and speak alone in front of 200 people' to 'raise a hand', and often produces a question as a by-product. Costs 30-60 seconds. (C) DISCLOSED ARRANGEMENT — you ask a colleague or an organiser in advance to open with a specific question, and you say on stage that you asked them. Honest because disclosed; useful when you specifically want a question you cannot naturally ask yourself. (D) COVERT PLANT — an arranged question presented as spontaneous. This is the one that is widely recommended and should be avoided: the ethics literature on public speaking treats undisclosed planted questions as deception because the audience is led to believe it is witnessing a spontaneous exchange, and journalism has a long record of what happens when a planted question is discovered. Beyond the ethics, the practical risk is asymmetric — the upside is a slightly smoother Q&A, the downside is that a room of engineers who suspect it stops believing everything else you said. In a recorded talk in a Polish IT community where the same people attend every event, the discovery risk is not theoretical.

### Evidence


**evidence_level**

Mixed, and unusually good for a Q&A item. The mechanism (pluralistic ignorance as the cause of seminar silence) is established social psychology with a large literature, though most of it is on classrooms and public opinion rather than conference Q&A. The claim that the first question shapes subsequent questions rests on one large field study: Carter et al. (2018), 247 seminars, 42 departments, 35 institutions, 10 countries — a genuine field study with a specific, quantified effect. Note that it demonstrates a first-questioner effect on the demographics of subsequent questioners, not directly on the total number of questions, so using it as evidence that seeding increases participation overall is an inference rather than a finding — flag it as such. The practice itself (seed questions) is practitioner consensus from the webinar industry, with no controlled testing. The ethical judgement on covert plants is normative, drawn from public-speaking ethics texts and journalism practice, not empirical.


**myth_status**

sound practice with a wrong justification, plus one sub-practice that should be retired. The practice of preparing a first question is right, and the usual justification — 'it breaks the ice so people relax' — is vague folk psychology; the accurate justification is that the first question sets a norm and a template whether you choose it or not, and that the silence you are breaking is a coordination failure rather than a lack of interest. The sub-practice to retire is the covert plant, which appears in a great deal of speaker-coaching content ('have a buddy in the audience ask a question you've prepared') without any mention that the audience is being deceived. The honest variants achieve the same result and carry no discovery risk. Also worth flagging as folklore: 'no questions means the talk was bad'. Carter et al. observed a range of 0 to 24 questions per seminar with a mean of 6; zero is inside the normal distribution, and in a 5-minute slot at the end of a long day it is unremarkable.


**contested_claims**

(a) 'Plant a question with a friend' — recommended widely and without qualification by speaker-coaching sources including large webinar platforms, while public-speaking ethics material treats undisclosed planting as a violation of the speaker-audience relationship. The two literatures do not talk to each other. Position taken here: use disclosure, and the technique is fine. (b) 'Silence means your talk was unclear' — the Polish practitioner list by Walenciuk offers this reading, and it is one plausible cause among several (a tired room, a short slot, a large audience, an intimidating format), so treating it as diagnostic is overreach. (c) 'Ask if there are any questions' — a bad default that survives everywhere: the yes/no form invites the answer 'no' by silence, whereas 'what questions do you have' presupposes questions exist. Widely repeated in coaching content, no controlled evidence, but the linguistic argument is sound. (d) 'Wait three seconds' — the commonly cited wait time is too short; nothing establishes an optimal number, but the practitioner consensus that speakers systematically under-wait is strong and consistent.


**key_sources**

Carter, A. J., Croft, A., Lukas, D. & Sandstrom, G. M. (2018), 'Women's visibility in academic seminars: women ask fewer questions than men', PLOS ONE 13(9) — 247 seminars observed across 42 departments, 35 institutions, 10 countries, plus 600+ survey respondents; mean 6 questions per seminar (range 0-24) in a mean 12 minutes of question time (range 2-60); men over 2.5 times more likely to ask a question than women (OR 2.57); and the key result for this item, that when a man asked the first question the proportion of subsequent questions from women fell by 6 percentage points relative to when a woman asked first — direct evidence that question one propagates. || Katz, D. & Allport, F. H. (1931), and the subsequent pluralistic-ignorance literature (see Sargent & Newman, 2021, scoping review in Personality and Social Psychology Review) — the mechanism: people suppress a private view because they misread others' silence as consensus, and expect to be judged less competent for breaking it. || BrightTALK / Informa TechTarget, 'Sparking Q&A Participation with Seed Questions' — the webinar-industry protocol: prepare seed questions in advance, address genuine live questions first, and write seeds conversationally so they do not sound canned. || Columbia Journalism Review, 'Planted Questions', and standard public-speaking ethics texts (Stand Up Speak Out; Principles of Public Speaking) — the case against covert planting: the audience is led to believe it is witnessing a spontaneous exchange, which breaks the speaker-audience relationship.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

1. The Carter et al. effect is about who asks, not how many ask; extending it to 'seeding increases participation' is a reasonable inference and not a demonstrated result. 2. A seed can suppress rather than stimulate: answering your own question consumes 40 seconds of a 5-minute slot and signals that the speaker will fill the space, which gives a hesitant person permission to keep hesitating. This is the strongest practical objection and it is why the protocol waits a full 7-10 seconds first and drops the seed the instant a hand appears. 3. A seed that is obviously easy is worse than silence — a room that hears a softball recognises the manoeuvre and reads it as the speaker avoiding real questions. 4. In a very short Q&A the arithmetic is unforgiving: a seed plus its answer is roughly one of the four or five questions you had room for. 5. The structural fix may be better than the behavioural one — an anonymous question channel with upvotes removes the social cost that causes the silence in the first place, and where it is available it dominates seeding. 6. Silence is sometimes correct information: at 15:15 after nine talks, a room that wants to go home is not exhibiting pluralistic ignorance, and forcing a Q&A that the room has opted out of costs more than closing early.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

Two touch points, both cheap. In the opening 90 seconds, one clause attached to the question policy: 'Pytania na koncu; jesli nikt nie zacznie, mam jedno wlasne.' Six seconds, and it converts the later seed from an awkward improvisation into a kept promise. Then at the start of the 5-minute Q&A: open with the interrogative form, wait 7-10 seconds by count, and deploy only into genuine silence. Budget one seed at 40-50 seconds including the answer. There is also a placement decision worth making deliberately for BB4IT: because the slot is the last of the day and the room may be thin on energy, the FLIP IT variant is worth considering instead — a show of hands question ('kto z was ma dzis w firmie cokolwiek agentowego na produkcji?') costs 20 seconds, requires no one to speak, wakes a tired room physically, and reliably produces a follow-up question from someone whose hand went up. In a saturated late slot that is a better opening move than a self-seed, and the self-seed stays in reserve.


**time_budget_min**

0.1 minutes (about 6 seconds) inside the 25-minute talk for the announcement. 0.7-0.8 minutes inside the 5-minute Q&A if the seed is used (10 seconds of waiting plus 40-50 seconds of question and answer). The FLIP IT show-of-hands variant costs 0.3-0.5 minutes and can be run inside the talk rather than the Q&A. If nobody asks anything at all, the seed is the difference between a 5-minute Q&A and a 5-minute silence, so its worst case is also its best case.


**audience_change**

The room learns that asking is safe and learns what a question here is supposed to look like — length, register, level. Concretely, the person in row eight who had a question and had decided not to ask it now asks it, and the recording gains an exchange it would not otherwise have had. Second-order and more valuable: the seed you choose determines the shape of the following questions, so a short, practical, slightly self-critical first question tends to produce short, practical questions rather than long positioning statements, which is worth an entire item's effort on its own in a room full of senior engineers.


**application_pl_talk**

The structure transfers; the phrasing and the social reading do not. Three Polish specifics. (1) The interrogative form matters more in Polish than in English because 'Czy sa jakies pytania?' is grammatically a yes/no question and gets answered with silence, which is functionally 'no'. Use 'Jakie macie pytania?' or 'To co chcecie wiedziec?' — presupposing that questions exist. (2) Polish audiences at technical conferences are, in practitioner observation, slower to raise the first hand than Anglo-American ones and quicker once someone has, which if true makes the first-question threshold the whole game — but note this is observation and not evidence; no Polish research on this exists and it should not be presented as a finding. (3) The disclosed-arrangement variant reads differently in Polish community contexts: at a regional conference where many attendees know each other, 'poprosilem Marka, zeby zaczal, bo wiem, ze zawsze pyta o koszty' is warm and gets a laugh, whereas the same thing undisclosed and later discovered ('ustawka') would be socially expensive in a small ecosystem where the same people meet at every event. The disclosure is not just ethically cleaner in Polish, it is safer. BB4IT-specific: the organisers ask each speaker to prepare two prize questions for the audience, which is a ready-made, organiser-sanctioned FLIP IT mechanism — those questions can be positioned to do the seeding work at the start of Q&A, which means the seeding problem for this particular talk is already half-solved by the format.


**pl_language_notes**

Forms to prefer: 'Jakie macie pytania?' over 'Czy sa jakies pytania?'; 'To co chcecie wiedziec?' as the informal version; 'Kto z was...?' for the show-of-hands variant, followed by counting aloud ('o, spora czesc sali'). Seed stems: 'Pytanie, ktore dostaje najczesciej, brzmi...', 'Zawsze ktos pyta o X, wiec odpowiem od razu...', 'Zanim wy zaczniecie - jedno, ktore samo sie prosi...'. Disclosure stems for the arranged variant: 'Poprosilem Marka, zeby otworzyl, bo wiem, ze zada to pytanie i tak.' Calques and register traps: 'zasiac pytanie' is a literal translation of 'seed a question' and is not idiomatic Polish — nobody says it, so do not use it on stage (in writing, 'przygotowane pytanie' or 'pytanie na rozgrzewke'); 'ustawka' is the Polish word for a fixed or staged exchange and it carries a strong negative charge, which is precisely why the covert variant is dangerous here; 'czy ktos ma jakies pytanie, cokolwiek?' with a pleading tone reads as desperation and lowers the odds further. Where the translated method sounds artificial: the American energy-raising opener ('Come on, don't be shy, who's got a question for me?') has no natural Polish equivalent and any attempt lands as pressure rather than invitation. The Polish version of warmth here is matter-of-fact: state that you have one of your own, and use it.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

late_slot — this is the primary fit and it is unusually direct. The BB4IT slot is 14:50-15:20, the last talk of the day, after nine talks of which four covered agents; that is the single highest-probability configuration for an empty Q&A in the whole set of formats this speaker delivers. A room that is tired, saturated on the topic, and mentally on the way to the car park will not produce a spontaneous first question, and the 5-minute Q&A becomes 5 minutes of the speaker standing still — which is a bad last impression and a bad last two minutes of recording. Secondary fit on qa, from a different direction than the other items in this group: the red-team bank and the answer protocol both prepare for questions that arrive, and this one prepares for the case where none do, which is the failure mode none of them cover. Also touches reuse: a Q&A that produced nothing yields no clips, so seeding is what guarantees at least one publishable exchange exists — and because you choose the seed, you choose a question whose answer you know is clip-worthy. Minor timing relevance: a seed is the one part of Q&A whose duration is fully known in advance, which makes the tail of the slot more predictable.


**minimal_2h_version**

Fifteen minutes, and it is one of the highest ratios of value to effort in the entire research set. (1) 5 min: write two seed questions in the questioner's voice, one practical and one slightly uncomfortable, and write the 40-second answer to each in bullet form. Take them straight from the red-team bank if it exists — the best seed is a real question you have already prepared, and for this talk the obvious candidate is the sensitive-data one, because seeding it lets you answer it on your terms rather than under fire. (2) 3 min: write the six-second announcement line into the opening and rehearse it with the rest of the first 90 seconds so it does not sound bolted on. (3) 3 min: decide and write down the show-of-hands question, which for BB4IT should be one of the two prize questions the organisers already asked for, so the same preparation serves both purposes. (4) 4 min: say both seeds out loud, standing, on a timer, and cut whichever runs past 45 seconds. Do not arrange anything with another person in the last two hours — a rushed briefing produces a questioner who asks it at the wrong moment or in the wrong words, which is worse than silence.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

For the BB4IT agentic-AI talk at 14:50, three prepared moves in order of use. FLIP IT, deployed as the first Q&A beat (or as the last beat of the talk, which is better in a tired room because it wakes them before you stop talking): 'Zanim przejdziemy do pytan - reka w gore, kto z was ma dzisiaj cokolwiek agentowego na produkcji? Nie w POC, na produkcji.' Count aloud, comment on the count honestly ('okej, siedem osob na jakies sto - i to sie zgadza z tym, co widze u klientow'), then: 'To ci, ktorzy podniesli rece, wiedza teraz, o co zapytac. Jakie macie pytania?' This costs 25 seconds, requires nobody to speak, physically moves a room that has been sitting since nine, and converts the silence problem into a much easier one because the seven people who raised their hands have been publicly identified as having relevant experience, which is exactly the social permission that pluralistic ignorance withholds. SELF-SEED, held in reserve for genuine silence after a 10-second wait: 'To zaczne sam, bo to pytanie i tak zawsze pada: co z danymi wrazliwymi, skoro model stoi w chmurze? Krotko: do modelu idzie zredagowany kontekst, identyfikatory podmieniamy po naszej stronie, umowa jest enterprise bez trenowania na naszych danych, a tam gdzie klient nie akceptuje nawet tego, ten sam agent stoi lokalnie - to zmiana jednej linii w konfiguracji, bo ta warstwa abstrakcji byla na trzecim slajdzie po to. I to jest zwykle moment, w ktorym ktos pyta o CLOUD Act.' Note the last clause: it explicitly hands the room the next question, which is the seeding function performed twice in one answer. DISCLOSED ARRANGEMENT, if you know someone in the room: 'Poprosilem Michala, zeby zaczal, bo wiem, ze i tak zapyta o koszty' — said while pointing at him, which turns the arrangement into a joke the room is in on rather than a secret it might uncover.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

Two separable skills, both trained outside conference talks. The first is tolerance for silence, which is the actual bottleneck — almost every speaker who says 'nobody had questions' waited two or three seconds. Train it by counting: in every meeting you run, after asking a question, count to eight silently before saying anything. It will feel like a very long time and it will produce answers you would otherwise never have heard, which is the disconfirming experience that makes the habit stick. Do this weekly and it transfers to stage within a month. The second is seed-writing, which is a by-product of the red-team bank: every talk you give, note which question came first and whether it was any good, and over four or five talks you accumulate a set of openers that reliably work for your material. Also worth training over months: the show-of-hands instinct — running one hand-raise in every internal presentation until asking a room to move is as automatic as advancing a slide. Finally, if you want the arranged variant available, build the relationship rather than the technique: knowing two or three people in the Polish IT conference circuit well enough to ask them to open is a networking asset, not a speaking skill, and it compounds across events.


**drill**

The silence-tolerance drill, 10 minutes, and it is deliberately uncomfortable. Input: a stopwatch with a visible display, a recording of yourself, and any internal meeting or a rehearsal audience of one. Action: (1) 2 min — write your two seed questions and their 40-second answers on a card. (2) 6 min — run the Q&A open three times to camera, standing: say 'Jakie macie pytania?', then start the stopwatch and stand in silence, looking at an imaginary room, until it reads 10 seconds, then deploy the seed and answer it in 40 seconds. Three full repetitions. Do not fill the silence, do not shuffle, do not look at your shoes, do not add 'anyone?'. (3) 2 min — watch the playback and check three things: how long the silence actually felt versus what the clock said (the gap is the point of the drill); whether your face stayed open and looking at the room or dropped to the floor around second four; whether the seed, when it came, sounded planned and calm rather than like a rescue. Observable output: three recordings, a self-rated comfort score for each 10-second silence, and the specific second at which your composure broke on take one — which is almost always earlier than you would have guessed.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

The open-and-wait — the single beat from 'Jakie macie pytania?' to either a hand or the seed. It is the right unit because it is ten seconds long, it can be repeated twenty times in a drill, and it isolates the one thing that actually goes wrong.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

Setup: 15 minutes to write two seeds and the announcement line. Rehearsal: 10 minutes for the silence drill, worth doing twice in the week before a talk. The disclosed-arrangement variant adds a 5-minute conversation with the person, best done at the venue on the day rather than by message. Ongoing: near zero — seeds are reusable across talks on the same material, and the silence tolerance, once trained, does not decay quickly. This is the cheapest item in the Q&A group.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

Immediate: whether a hand goes up during your 7-10 second wait, which tells you the seed was not needed and the wait was the whole intervention — this happens more often than speakers expect and is itself the finding. After deploying the seed: whether a real question follows within fifteen seconds. If yes, the seed did its job; if the silence returns, the room has opted out and you should close rather than deploy a second seed. Over several talks: the ratio of sessions where you needed the seed at all, and whether the questions that follow a seed resemble the seed in length and register (they will, and noticing this is how you learn to choose seeds deliberately). On the recording: whether the seed sounds planned or panicked — this is audible and is the only thing about it that can go visibly wrong.


**measurable_kpi**

(1) Wait time in seconds before you speak into silence, measured off the recording; target 7-10, and the near-certain baseline for an untrained speaker is 2-4. (2) Questions asked per session — Carter et al. give a field benchmark of mean 6 in a mean 12 minutes of question time, so for a 5-minute slot the proportional expectation is roughly 2-3 and anything above that is good. (3) Seed deployment rate: sessions where the seed was needed / total sessions; a falling rate over time means the wait alone is now doing the work. (4) Time from seed answer to first genuine question, target under 15 seconds. (5) Zero-question sessions, target 0 — noting that Carter et al. observed a floor of 0 questions in real seminars, so this is a target rather than a norm.

### Online and recorded


**online_variant**

Seeding is more necessary online and much easier, which is why it is standard webinar practice rather than standard conference practice. The silence is worse because the social proof that unblocks pluralistic ignorance is invisible — nobody can see anybody else about to ask, so nobody starts. It is easier because a typed question costs almost nothing socially and because the seed can be delivered by the host rather than by you, which removes the awkwardness entirely: the host reads a prepared question as if it came from the chat. The webinar-industry protocol adds one important sequencing rule — take genuine live questions first, and use seeds only to fill, because a seed deployed while real questions are waiting is both wasteful and, if noticed, embarrassing. Two additional online levers: ask people to drop questions in chat during the talk rather than at the end, so the queue exists before you open the floor; and use a poll as the FLIP IT variant, since a poll is the online equivalent of a show of hands and produces a visible result the room can react to. For the Pionierzy AI-style webinar, agree who reads the chat, because you cannot present and monitor a chat at the same time.


**recorded_variant**

Two consequences. First, the seed must not sound like a rescue, because on the recording nobody can see the silence that preceded it — a viewer hears only a speaker suddenly asking themselves a question, which reads as odd unless the framing carries it. This is exactly what the six-second announcement in the opening buys: 'jesli nikt nie zacznie, mam jedno wlasne' makes the later seed legible on the recording as a plan rather than as a save. Second, the seed is the only Q&A exchange whose content you fully control, which makes it the most reliably clippable sixty seconds of the whole session — so choose the seed for its clip value as well as its ice-breaking value, and make sure the answer stands alone without reference to earlier slides. Third and quieter: an unrepeated audience question is missing from the recording anyway, so a session that produced two real questions and one seed will show up as three exchanges only if you paraphrased the real ones. And if the Q&A is not recorded at all, the clip argument disappears and the seed's value is purely in the room.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

The Covert Plant — an arranged question presented as spontaneous, which is the version most widely recommended and the one to avoid; the ethics literature classes it as deception, and in a small national IT community the discovery risk is real and the Polish word for it ('ustawka') is not neutral. The Softball — seeding a question so easy that the room reads it as the speaker dodging the hard ones, which lowers rather than raises the odds of a real question. The Impatient Open — asking 'jakies pytania?' and answering your own silence after two seconds, which is not seeding, it is not waiting. The Double Seed — deploying a second prepared question when the first produced nothing, turning the Q&A into an unrequested monologue in front of a room that has already left mentally. The Pleading Open — 'no dajcie spokoj, ktos musi miec pytanie', which converts an invitation into pressure and makes asking feel like doing the speaker a favour. The Yes/No Open — 'czy sa jakies pytania?', which offers silence as a valid answer. The Seed as Filler — reaching for a seed because you finished four minutes early, which is a content problem being treated as a Q&A problem.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Under-waiting, by a factor of three, and then genuinely believing the room had no questions. Writing the seed in your own register rather than the audience's, so it sounds like a marketing FAQ. Making the seed answer too long — it is the one answer you scripted, so it expands, and a 90-second seed answer signals that this Q&A is going to be the speaker talking. Not announcing it in the opening, which makes the deployment feel like a rescue to everyone including you. Choosing a seed the earlier speakers already answered, which at a conference with four other agent talks is a live risk and must be checked by actually watching the other sessions. Arranging a question with someone and forgetting to tell them to wait ten seconds first, so they ask it over the top of a genuine hand. Treating a silent room as a verdict on the talk rather than as a normal outcome in a small time slot at the end of a long day.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

When real questions are already queued — a seed deployed over a waiting hand is pure loss. When the room has legitimately opted out: at 15:15 with the last train on people's minds, forcing a Q&A costs more goodwill than closing early with your prepared close, and closing early is a legitimate, even generous, choice. In a small workshop where the format is already conversational — the AI Startup Builders 120-minute cohort will not be silent and the technique is unnecessary. When the moderator owns the Q&A and has their own opening question, which should be established in advance rather than discovered on stage. And when an anonymous question channel is running with a populated queue, since the structural fix has already solved the problem the seed was for.


**fallback_if_it_fails**

If the seed produces no follow-up, do not deploy a second one. Offer the low-cost exit and close on your own terms: 'To widze, ze mamy komplet - jestem tu jeszcze przez godzine, zlapcie mnie przy kawie, a teraz ostatnia minuta ode mnie.' Then deliver the prepared close, which is the whole point of having one. If the room is silent and you have four minutes left rather than one, the honest move is to give the time back — a room at 15:15 will thank you for it, and 'oddaje wam cztery minuty' is a better last impression than four minutes of manufactured discussion. If the arranged questioner does not show up or forgets, fall through to the self-seed, which is why you carry both. If the show-of-hands question produces almost no hands (say two out of a hundred), use it honestly rather than pretending: 'okej, dwie osoby - i to jest wlasciwie caly punkt tej prezentacji', which converts a failed interaction into a content point. If the seed itself gets a hostile response, that is a good outcome — the room is awake and you are into the hostile-question protocol with a question you chose.


**works_signal**

The wait is working when you see people looking at each other rather than at you around second five — that lateral glance is pluralistic ignorance being resolved in real time and a hand usually follows it. Also: someone shifting forward in their seat, a hand going half-up and down (that person will ask if you wait two more seconds and look at them), phones going down. The seed is working when a real question follows within fifteen seconds, and when the following questions resemble the seed in length and directness. It is failing when the silence after your seed answer is identical to the silence before it, when people start packing bags during the answer, or when you can hear your own voice getting faster — which is the tell that you have started performing rather than asking. The clearest negative signal: nobody looks at the person who eventually asks, meaning the room has already left and the question came from politeness.


**dependencies_conflicts**

Prerequisites: question-policy-announced carries the six-second announcement that makes the seed legible rather than desperate, and the two should be written as one sentence. speaker-faq-bank supplies the seed content — the best seed is a bank entry you have already rehearsed, so building the bank makes this item nearly free. qa-answer-protocol governs what happens once real questions start. Feeds directly into closing-after-qa: a session that ends in silence needs the prepared close more than one that ends in discussion, and the two are best rehearsed as a single sequence — seed, real questions, close. Strong interaction with audience-interaction: the FLIP IT variant is the same mechanism as the show of hands, and at BB4IT the two prize questions the organisers ask each speaker to prepare can serve both purposes with one piece of preparation. Conflicts: with the time budget, since a seed consumes roughly one question's worth of a 5-minute slot — resolved by deploying only into genuine silence; with anonymous-question-channel, which is a superior structural fix where it exists and makes seeding redundant; and, in its covert form, with ethics-and-affiliation, which is the reason the covert form is excluded rather than merely discouraged.

### Tooling


**tool_support**

Very little, deliberately — this is a paper-and-nerve item. A stopwatch or phone timer for the silence drill, because the whole intervention depends on a duration your internal clock reports wrongly. An index card with the two seeds and their bullet answers, in the same pocket as the red-team triggers. For the online variant, the platform's own Q&A panel and poll feature, plus a co-host briefed to read seeds. Slido or Mentimeter with upvotes is the structural alternative and belongs to a different item, but it is worth noting here that where it is available it outperforms every behavioural technique on this list, because it removes the social cost that causes the silence rather than working around it. An LLM is useful for one narrow job: generating twenty candidate seed questions in the register of a tired Polish engineer, from which you pick two.


**survives_pdf_export**

yes for the visible part — a Q&A slide carrying the show-of-hands question is static and exports to PDF unchanged, and since this is the variant that benefits most from being on screen, the important half survives. no for the presenter notes carrying the seed text, which render in presenter view and the HTML export but not into the PDF; if you end up running the organiser's PDF from a borrowed laptop, the seeds must come off the index card.

### Effort and payoff


**prep_effort**  
<sub>low | medium | high — one-off setup cost</sub>

low — 15 minutes of writing plus a 10-minute drill, and the seeds are reusable across every talk on the same material. If the red-team bank already exists, the marginal cost is close to zero because the seeds are drawn from it. The only variant with a real coordination cost is the disclosed arrangement, and that is one five-minute conversation.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Immediate and binary: the first talk where you would have stood in silence, you do not. The subtler effect appears over two or three talks as the silence tolerance builds — you will find that a meaningful share of the sessions where you thought there were no questions were sessions where you waited four seconds, and that simply waiting ten produces a hand without any seed at all. That is the larger win and it costs nothing. Third effect, only visible in the recordings: Q&A blocks stop being the ragged part of the video, because at least one exchange is always well-formed and clippable.


**needs_organiser_agreement**

mostly no, with three things worth confirming for BB4IT before 2026-09-12: (1) who runs the Q&A — if a moderator opens with their own question, the seeding problem is theirs and yours becomes redundant, and this is worth a thirty-second conversation before you go on rather than a discovery on stage; (2) the exact end time and whether overrunning into the closing is acceptable, since a last-slot Q&A has no slack and the decision to close early needs to be yours rather than the moderator's; (3) the two prize questions the organisers ask each speaker to prepare — confirm when in the slot they are meant to be used, because if they land at the start of Q&A they do the seeding work for free, and if they land mid-talk they do not. If any anonymous question tool is in use, that needs agreeing in advance too, and it changes the item substantially.


**priority**

high for 2026-09-12 specifically, medium in general. The general case is medium because most rooms produce a first question eventually and the technique is insurance. The specific case is high because every risk factor for an empty Q&A is present at once — last slot of the day, 14:50 start, nine talks already delivered, four of them on the same subject, and a five-minute window too short to recover from a slow start. It is also the cheapest insurance available: fifteen minutes of preparation against the risk of the last two minutes of your recording being a speaker asking an empty room whether anyone has questions. Take the show-of-hands variant as the primary move and the self-seed as reserve.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

- https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0202743 — Carter, Croft, Lukas & Sandstrom (2018), PLOS ONE; 247 seminars, 42 departments, 35 institutions, 10 countries; mean 6 questions per seminar (range 0-24) in mean 12 min of question time; men 2.57x more likely to ask; and the first-questioner effect — a male first questioner reduced the proportion of subsequent questions from women by 6 percentage points
- https://arxiv.org/pdf/1711.10985 — preprint version of the same study
- https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0212146 — published correction to Carter et al. (2019); read alongside the original
- https://arxiv.org/pdf/1708.02775 — 'Who asks questions at astronomy meetings?'; an independent field observation of conference question-asking behaviour and session-chair effects
- https://journals.sagepub.com/doi/abs/10.1177/1089268021995168 — Sargent & Newman (2021), scoping review of pluralistic ignorance research; the mechanism behind seminar silence and its topic/method variation
- https://thedecisionlab.com/biases/pluralistic-ignorance — accessible summary of pluralistic ignorance, including the classroom case where nobody asks because nobody else is asking
- https://www.sciencedirect.com/science/article/abs/pii/S027249441630038X — 'Climate of silence: pluralistic ignorance as a barrier to discussion'; evidence that correcting the misperception increases willingness to speak
- https://www.brighttalk.com/business/blog/sparking-qa-participation-with-seed-questions — the webinar-industry seed-question protocol: prepare in advance, take genuine live questions first, write seeds conversationally so they do not sound canned
- https://www.informatechtarget.com/blog/sparking-qa-participation-with-seed-questions/ — same protocol, with the rationale that people are more comfortable asking once someone else has gone first
- https://www.cjr.org/campaign_desk/planted_questions.php — Columbia Journalism Review on planted questions; the audience is led to believe it is witnessing a spontaneous exchange
- https://courses.lumenlearning.com/suny-fmcc-standupspeakout/chapter/ethics-in-public-speaking/ — public-speaking ethics: openness about intentions, and why a hidden agenda alienates an audience faster than anything else
- https://openfl.pressbooks.pub/spc2608/chapter/chapter-2-ethics/ — ethical speaking principles; the speaker-audience relationship as the thing a covert plant breaks
- https://www.mentimeter.com/blog/meetings/how-to-run-a-q-and-a-session — practical Q&A-running guidance including the open-form question and the anonymous-channel alternative
- https://www.toastmasters.org/magazine/magazine-issues/2021/mar/handling-the-qanda-session-with-confidence — Toastmasters on opening and structuring a Q&A session
- https://cezarywalenciuk.pl/blog/speech/8-porad-na-odpowiadanie-na-pytania-od-publicznosci-zdobadz-szacunek-pora-na-pytania — Polish practitioner list; includes the (contestable) reading that no questions means the message was unclear, plus Polish phrasing for opening and closing the session

### Not established by this research

- `marp_implementation`


---

## Word-for-word scripted opening

> Write the first 60-90 seconds as literal sentences and rehearse them until they run on recall, so the highest-arousal window of the talk is executed rather than improvised.

### What it is

- **category** — narrative


**origin_author**  
<sub>Originating author, book, lab or community that named the method</sub>

No single originator; practitioner consensus. Most explicit statements: Chris Anderson (TED Talks: The Official TED Guide to Public Speaking) — script and memorise the opening minute and the closing lines; Zach Holman (speaking.io) — say it aloud until the muscle memory is in your mouth; Scott Berkun (Confessions of a Public Speaker). Underlying mechanisms come from Ambady & Rosenthal (thin slices) and Murdock (serial position / primacy).

- **talk_moment** — first 90 seconds (written before arriving, executed in the first 90 seconds)

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

Three mechanisms stack in the same window. (1) Load: the opening is the only moment where you simultaneously compose language, manage adrenaline, read an unknown room and operate unfamiliar hardware. Composition is the only one of those four you can remove in advance, and removing it frees attention for the other three. (2) Arousal: sympathetic arousal degrades working memory and fluent lexical retrieval — exactly the resources improvisation needs — and arousal peaks in the first minute, then decays. A memorised block is retrieved, not constructed, so it survives the peak. (3) Judgement formation: Ambady & Rosenthal (1993) showed that silent clips under 30 seconds of teachers predicted end-of-semester student evaluations, and 6-second clips did about as well as 30-second ones; whatever the audience is doing in the first half-minute, it is forming a durable competence impression from very little data. Murdock's primacy effect (1962) adds that first items in a sequence are recalled disproportionately. Net effect: the sentences with the highest chance of being remembered are produced in the state least able to produce good ones — unless they were written earlier.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Decide the opening's job before writing a word: hook, then the promise (what they leave with), then the question policy, then the handover into block one. Nothing else — no biography slide, no sponsor, no agenda read-out. 2. Write it as prose, in full sentences, not as bullets; bullets are what you improvise from and the point is to not improvise. 3. Cap the length by clock, not word count: 90 seconds at your own measured speaking rate (see pl_language_notes — do not assume the English 130-150 wpm figure). 4. Delete every meta-sentence: 'chciałbym opowiedzieć o', 'zanim zacznę', 'nazywam się i pracuję w' — the badge and the host's introduction already did that. 5. Read it aloud once and rewrite whatever you stumble on; a word you trip over in your kitchen is a word you will lose on stage. 6. Memorise structurally, not verbatim everywhere: lock the first sentence, the handover sentence, and the two or three beats between. Verbatim on the seams, free in the middle — this removes the single-point-of-failure risk of a fully memorised block. 7. Rehearse standing, aloud, five to seven times across at least two days, with a timer, and only the opening — it is a 90-second unit, so seven runs cost twelve minutes. 8. Record run five to seven on a phone, watch once, and adopt the phrasing of the take that sounded most conversational; rewrite the script to match what you actually said. 9. Put the final text on one index card and into the presenter notes of the title slide — you will not read it, but knowing it exists removes the fear of blanking, which is most of the effect. 10. On the day, run only this 90 seconds once more, quietly, in the corridor.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Any talk where the first impression is load-bearing: a conference slot in front of strangers, a late slot where a tired room has to be re-won, a recorded talk that will be clipped, a client presentation where credibility is still being established. It earns its cost most in short slots (15-30 min), where a three-minute wandering start burns 12-20% of the budget. It earns least in a familiar internal meeting, a two-hour workshop with the same people, or a session whose first block is a discussion you cannot script.

### Evidence


**evidence_level**

Mixed, and must be stated as such. The technique itself: practitioner consensus — strong and near-unanimous across TED, speaking.io, Berkun and conference-speaking guides — with no controlled study of scripted versus improvised openings in conference talks found by this research. The supporting mechanisms: controlled study (Ambady & Rosenthal 1993, thin slices, 13 teaching fellows, replicated on principals' ratings of high-school teachers; Murdock 1962, serial position, lab free recall). The step from 'brief nonverbal clips predict teacher ratings' to 'your first 90 seconds decide your talk' is an extrapolation, not a finding.

- **myth_status** — sound practice with a wrong justification


**contested_claims**

Three pieces of folklore routinely attached to this item. (1) 'You have 7 seconds (or 30 seconds) before the audience decides whether to listen.' No study establishes a decision threshold; Ambady & Rosenthal measured the correlation between thin-slice ratings and end-of-term evaluations, not a moment of decision, and their 6-second condition performed comparably to the 30-second one, which undermines rather than supports a specific cut-off. (2) 'Communication is 93% nonverbal, so the opening is about delivery, not words' — Mehrabian's 7-38-55 figures come from 1967 studies on judging the emotional attitude conveyed by single spoken words and do not generalise to informational talks. (3) 'Memorise the whole talk.' Nobody in the consensus advocates this; Anderson explicitly limits scripting to the opening and the closing, and full memorisation introduces the recitation failure mode below.


**key_sources**

1) Ambady, N. & Rosenthal, R. (1993), 'Half a Minute: Predicting Teacher Evaluations From Thin Slices of Nonverbal Behavior and Physical Attractiveness', Journal of Personality and Social Psychology 64(3), 431-441 — silent clips under 30 s predicted end-of-semester evaluations, and 6-second clips performed comparably; the specific finding that justifies treating the opening as disproportionately informative to the audience. 2) Anderson, C. (2016), 'TED Talks: The Official TED Guide to Public Speaking' — the explicit rule to script and memorise the opening minute and the closing lines, say something dramatic within the first minute, and avoid a predictable throughline; single-expert claim, but from the highest-volume talk producer in the world. 3) Holman, Z., speaking.io, 'Practicing It' — two or three full run-throughs if experienced, five to seven for beginners, always aloud: 'You speak in your mind way too quickly, and you need to teach yourself the muscle memory of how your talk fits together in your mouth.' 4) Murdock, B. B. (1962), 'The serial position effect of free recall', Journal of Experimental Psychology 64(5), 482-488 — primacy over the first three or four items; lab evidence on word lists, usable as mechanism, never citable as a finding about talks.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

1) Recitation risk: a memorised paragraph delivered under arousal often comes out flat, fast and eye-contact-free; the audience hears 'recited' and reads it as nerves or insincerity, which costs more than a slightly rough but present opening. speaking.io's hedge — memorise one or two sentences and keep them conversational — exists precisely for this. 2) Single point of failure: a verbatim block has one failure mode, losing the thread mid-sentence with no improvisational scaffolding underneath; structural memorisation is the mitigation, full verbatim is the risk. 3) Brittleness to the room: a script cannot respond to what just happened — the previous speaker overran, the projector failed, the room laughed at something — and a speaker committed to the text may deliver a line that is now wrong. Keep one improvised acknowledgement sentence in front of the script rather than editing the script live. 4) The evidence gap is real: no controlled comparison exists, and the consensus may be a professional-speaker norm that transfers imperfectly to practitioner talks where slight roughness reads as authenticity.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

Owns 0:00-1:30 and replaces the default practitioner opening (name, company, agenda list, 'kilka słów o mnie'). Internal structure for a 25+5 slot: 0:00-0:20 hook (content supplied by the cold-open item); 0:20-0:50 the promise — what the room can do differently at 15:20; 0:50-1:05 the one-line saturation move ('four talks today already showed you what agents can do; this one is about what happens after they run in production'); 1:05-1:20 question policy in one sentence; 1:20-1:30 handover into block one. The self-introduction is one clause inside the promise, not a slide. The 30-second agenda from the NCP4 action item is the promise — stated as outcomes, never as a table of contents.


**time_budget_min**

1.5 on stage (drop to 1.0 if the room is restless). Preparation is separate: roughly 60-90 minutes to write, cut, rehearse and record; 25-35 minutes for each later talk.


**audience_change**

By 1:30 the room knows three things it did not know at 0:00: what this specific talk gives them that the previous four did not, that the speaker is in control (which buys patience through the slow middle), and when they are allowed to ask questions. Observable version: laptops close and the room stops treating the last slot as an early coffee break.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

opening — directly, and this is the exact unfinished action item from the NCP4 retrospective ('write and rehearse a one-sentence hook plus a 30-second agenda'). Secondary: timing (a fixed 90-second opening stops the start from leaking into minute four, which is where the 40-minutes-of-material-in-25 problem begins), late_slot (a cold, tired 14:50 room is the worst possible place to improvise a warm-up), and qa (the question-policy sentence rides inside the script, so it cannot be forgotten under nerves).


**minimal_2h_version**

Two hours out, in order: (1) 20 min — write 130-160 words covering hook, promise, saturation line, question policy, handover. (2) 10 min — delete every meta-sentence, read once aloud, fix stumbles. (3) 25 min — seven standing run-throughs with a stopwatch, opening only, target 1:20-1:30. (4) 10 min — record run five on the phone, watch once, adopt the wording you actually used. (5) 5 min — card plus presenter notes. Seventy minutes with buffer left. If only twenty minutes exist: lock the first sentence and the handover sentence verbatim, say them aloud five times, improvise the middle — that captures most of the effect at a fifth of the cost.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

BB4IT, 2026-09-12, 14:50, ninth talk of the day, two of them explicitly about agents, room of engineers and tech leads. Script, Polish delivery, ~85 seconds. [0:00] 'Dzień dobry. Jest 14:52, to dziewiąte wystąpienie dzisiaj i czwarte o agentach.' [beat] [0:10] 'Wiecie już, że agent potrafi napisać kod. Ja pokażę wam nagranie, na którym mój agent przez czterdzieści minut robił coś, o co nikt go nie prosił — i dlaczego to była moja wina, nie jego.' (hook: failure plus curiosity gap) [0:30] 'Przez ostatni rok zbudowaliśmy kilkanaście systemów agentowych, które chodzą u klientów. Wychodzicie stąd z trzema rzeczami: gdzie te systemy pękają, jak to wykryć zanim wykryje to klient, i co da się z tego wdrożyć w poniedziałek.' (promise, self-introduction folded into one clause) [0:55] 'Nie będę tłumaczył, czym jest agent — cztery osoby zrobiły to dzisiaj lepiej ode mnie.' (saturation move, one sentence, usually gets a laugh and buys goodwill) [1:05] 'Pytania zbieram na koniec, mamy na nie pięć minut, a jak nie zdążymy — łapcie mnie na korytarzu.' (question policy) [1:15] 'Zaczynamy od tego nagrania.' (handover). Only 0:00, 0:10 and 1:15 are memorised verbatim; the rest are beats.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

Over weeks, not once. (1) Keep an opening bank: after every talk write down the opening that worked and why, so the next talk starts from a library rather than a blank page. (2) Train the sub-skill separately from any real talk — once a week, take a random technical topic and write plus deliver a 60-second opening to camera. Ten reps of this build more capability than three full rehearsals of one talk, because the reps hit the part that actually fails. (3) Deliberately vary the hook type across talks (failure, number, contrarian claim, vignette) so you learn which type you personally deliver well instead of defaulting to one. (4) Review only against three criteria: did I fill the first ten seconds, did I state a promise, did I finish inside 90 seconds. (5) After roughly ten talks, drop to structural memorisation and keep only the first sentence verbatim — but not before.


**drill**

The 15-minute opening drill. Input: the current talk's title, its abstract, a stopwatch, a phone. Action: (a) write 140 words of opening prose — 6 min; (b) stand and deliver it to a wall, timed, three times, rewriting after each — 6 min; (c) record the fourth take — 1 min; (d) watch it once at normal speed with sound and mark exactly two changes — 2 min. Observable output: a recorded take under 1:30 with no filler in the first ten seconds, and a written script whose wording matches what you actually said. Run it again the next day; the second day's version is the one you use on stage.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

One sentence for memorisation work (the first sentence, the handover sentence); the whole 90-second block for timing and delivery work. Never the whole talk — training the opening as a standalone unit is what makes seven repetitions affordable.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

First time 60-90 minutes: 30 writing and cutting, 25 rehearsing, 15 recording and reviewing, 10 transferring to card and notes. Each later talk 25-35 minutes, because only the hook and the promise change. On the day: two minutes for one corridor run-through.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

Three loops, best signal first. (1) The phone recording — watch only the first 90 seconds, with sound, once; filler and rushing are audible immediately. (2) The stopwatch — a stable duration across three consecutive runs means it is memorised; a duration that keeps growing means you are still composing live. (3) The room — see works_signal. After the talk the retrospective question is narrow: at what second did the room go quiet? The recording answers it.


**measurable_kpi**

(a) Opening duration within ±10 seconds of 1:30 across three consecutive rehearsals. (b) Zero filler words ('yyy', 'znaczy', 'tak naprawdę') in the first 60 seconds of the recorded take. (c) Presenter-clock time when the first content slide appears: target ≤ 1:35. (d) Binary: was the question policy actually spoken — it was not, at NCP4.

### Online and recorded


**online_variant**

A webinar opening competes with a browser tab, not with a room. Three changes: (1) the first 20-30 seconds are structurally lost to people joining and audio checks, so open with a 15-second hold and then deliver the hook — or deliver it twice, at 0:00 and again at 0:30, phrased differently; (2) there is no room to read, so the script's benefit narrows to fluency and pace, while the cost of a bad opening rises because leaving is one click; (3) fold the backchannel rule into the policy sentence ('pytania wrzucajcie na czacie, odpowiem na końcu bloku'), because chat is the only channel and it needs governing from second one. Look at the lens for the whole scripted block — this is the moment when reading notes is most visible.


**recorded_variant**

The scripted opening is the most reusable 90 seconds of the talk — it is the clip that gets cut for LinkedIn, which is precisely the reuse gap. Consequences: (1) '14:52, dziewiąte wystąpienie' is unclippable, so either write a context-free opening or deliberately place a second, context-free hook sentence at the start of block one for the clip to start from; (2) the recording usually starts after the host's introduction, so never build the script on a line the host said; (3) anything said before the camera rolls is lost — if the room-acknowledgement line is the funny one, it will not exist on YouTube, so the clip-safe version has to carry its own value.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

1) The recited paragraph — full verbatim at speed, eyes up and left, no pauses: technically the script, functionally a hostage video. 2) The scripted throat-clear — a beautifully written 90 seconds that says nothing (greeting, biography, agenda, thanks to the organiser): the default opening with better sentences. 3) The unrehearsed script — written, printed, never said aloud, read off the card on stage: the stiffness of a script without the fluency. 4) Script creep — 90 seconds grows to four minutes as the promise turns into a preview of every block. 5) Reading the agenda aloud from a slide, which the taim.io guide lists among the opening sins and which the room has already read.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Writing in the register you write in rather than the one you speak in — long subordinate clauses that cannot be delivered on one breath. Memorising before cutting, so the memorised version is the bloated one. Rehearsing seated and silently, which badly understates duration. Putting the hook after the self-introduction, spending the primacy window on a job title. Forgetting that the opening must end somewhere: with no handover sentence the script dissolves into the talk and 90 seconds becomes three minutes. Rewriting the script the night before, after it was already memorised, which puts two competing versions on stage.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

A workshop or a two-hour training block, where the opening is a logistics and rapport phase and a polished script reads as a sales pitch. A discussion-format community session (the Value Builders Tribe 30+30 format), where the opening's job is to lower the barrier to speaking rather than to perform. Any slot where you genuinely cannot know what happened immediately before you — although the fix there is one improvised acknowledgement sentence in front of the script, not abandoning it. And skip it if it would be the only thing rehearsed while the talk is still 15 minutes over budget: fixing timing outranks polishing the start.


**fallback_if_it_fails**

If you blank mid-script: stop, do not restart from the top, do not apologise twice. Have one memorised bridge sentence that always leads somewhere — 'Zacznijmy od konkretu.' — then advance to the first content slide, whose appearance is a physical cue that restarts the talk. If the room is still noisy at 0:00, do not deliver the hook into noise: greet, wait three seconds, then start. If the previous speaker overran and you lost four minutes, compress the promise to one sentence and keep the hook and the handover — never cut the question policy, the cheapest sentence in the block and the one that protects the end. If the projector is dead, the opening is the one part of the talk that needs no slides: deliver it identically and buy the technicians 90 seconds.


**works_signal**

In the first 20 seconds: side conversations stop and heads come up from laptops. By 45 seconds: phones go face-down or into pockets — the strongest single signal in a late slot. At the failure hook: a short laugh or an audible exhale means the frame landed. Failure signals: two separate conversations still audible at 45 seconds, people still walking in and looking at the screen rather than at you, no reaction at all to the saturation line. On those signals, skip the expanded promise, go straight to the handover, and let the recording or the first strong visual do the work.


**dependencies_conflicts**

Prerequisites: the hook comes from the cold-open item (this script is the container, the hook is the content) and the saturation line from the topic-saturated framing item — neither can be finalised until the running order is known. Feeds: the question-policy item lives inside this script; the closing-after-Q&A item is its mirror and should be written in the same session. Conflicts: (a) with the time budget — every sentence added here is taken from block one, and the 90-second cap is the constraint that keeps it honest; (b) with reading the room and adapting live — a script is by definition unresponsive, so the acknowledgement sentence must sit outside it; (c) with a preroll slide and the host's introduction — if the host already gave your name and company, the script must not repeat them, so it has to be checked against the introduction on the day.

### Tooling


**tool_support**

A stopwatch or phone timer (the only mandatory tool). A phone camera for the review loop. Marp presenter notes as the durable home of the script. An index card as the physical backup, because it works when the laptop does not. An LLM helps with two narrow jobs — compressing a 250-word draft to 140 words while keeping your phrasing, and generating three alternative hooks to choose between — but it cannot judge whether a sentence sounds like you when spoken, so the recording stays the arbiter.


**marp_implementation**

The script lives in an HTML comment on the title slide, which Marp treats as presenter notes: <!-- 0:00 Dzień dobry… / 0:10 HOOK verbatim / 0:30 promise / 0:55 saturation / 1:05 pytania na koniec / 1:15 handover -->. Visible in `marp -p` presenter view and in the VS Code preview's presenter mode, never rendered on the slide. Keep the title slide free of an agenda list — the promise is spoken, not projected. Optionally add <!-- _paginate: false --> to the title slide so the page counter does not appear during the opening.

### Effort and payoff

- **prep_effort** — low — 60-90 minutes for the first one, 25-35 minutes per talk afterwards. The highest return per minute of any item in this batch.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Visible on the very next talk: the start stops drifting, the first content slide appears before minute two instead of minute four, and the recorded opening is clean enough to clip. Secondary effect within two or three talks: lower arousal across the whole talk, because the first 90 seconds are what generates anticipatory anxiety and they stop being uncertain.


**needs_organiser_agreement**

no — entirely within the speaker's control. Two things to check with the organiser on the morning rather than agree in advance: the final running order and your actual start time (the example script names both), and what the host will say when introducing you, so the script does not repeat it.


**priority**

high — the highest-priority item in this batch: a named, still-open action item from the previous talk, under 90 minutes of work, completable four days before BB4IT, and it improves the opening, the timing and the odds that the question policy is stated at all.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

- https://business.columbia.edu/sites/default/files-efs/pubfiles/3102/slices.preprint.pdf
- https://www.researchgate.net/publication/232554260_Half_a_Minute_Predicting_Teacher_Evaluations_From_Thin_Slices_of_Nonverbal_Behavior_and_Physical_Attractiveness
- https://www.semanticscholar.org/paper/The-serial-position-effect-of-free-recall-Murdock-Bennet/f51820619ca42c5799f3c5acc3855671b905419c
- https://speaking.io/prep/practicing-it/
- https://www.taim.io/public-speaking/opening-a-talk-without-burning-the-first-90-seconds
- https://calvinrosser.com/notes/ted-talks-chris-anderson/
- https://www.morling.dev/blog/ten-tips-make-conference-talks-suck-less/
- https://presentationpatterns.com/glossary/
- https://gist.github.com/whostolebenfrog/5107027
- https://www.simplypsychology.org/thin-slicing-psychology.html

### Not established by this research

- `origin_year`
- `application_pl_talk`
- `pl_language_notes`
- `survives_pdf_export`


---

## Energy in a bad slot

> Plan a deliberate change of mode every three to six minutes and a large one every ten to twenty — not because attention collapses on a ten-minute clock (it does not), but because attention drifts continuously and each mode change creates a re-entry point for the people who have already drifted, which matters most in a slot sitting inside the early-afternoon circadian trough.

### What it is

- **category** — delivery


**talk_moment**

middle blocks — this is where it lives and where the deck must be marked. Two satellites: room filling (a preroll slide and greeting people already sets a baseline that the first mode change builds on) and Q&A (the two prize questions BBConf4.IT requires are a state change that sits after the 25 minutes, not inside them).

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

The mechanism is re-entry, not recharging. The folk model says attention is a battery that empties after ten minutes and must be refilled; the measured picture is different. Bunce et al. (2010) had students report attention lapses in real time with clickers and found lapses of one minute or less reported more often than longer ones, with the cycle of attention and non-attention getting shorter as the lecture went on. So the failure mode in a 25-minute talk is not one collapse at minute ten — it is dozens of short dropouts distributed across the whole talk, in different people at different times. That changes what the fix has to do. You cannot prevent the dropouts. What you can do is make sure that a listener who surfaces at any moment finds a handhold rather than the middle of a sentence they cannot place. A mode change does three things at once: it produces an orienting signal (the screen, the sound, the speaker's position or the room's own noise changes), it creates a natural boundary at which you restate context in one sentence, and it gives the listener something to do other than follow prose. Bunce's second finding is the one that justifies the effort: the reduction in reported attention decline persisted into the lecture that followed the intervention, so the change buys attention for the block after it, not only during it. A second, independent mechanism applies specifically to a 14:50 slot. The early-afternoon dip in alertness and performance around 14:00-16:00 is a bi-circadian phenomenon — a 12-hour harmonic of the circadian clock — and is largely unrelated to having eaten lunch (Monk and colleagues; the dip appears in protocols without a meal). This matters practically: the room's lower arousal is not a failure of your content and is not fixable by the speaker working harder, so the correct response is to increase the density of re-entry points rather than the volume or the pace. Props and prizes work through a third mechanism again — anticipation and social attention. A physical object or a stated reward creates a short interval in which the room is watching a thing happen rather than listening to an argument, which is cheap attention that you then have to convert into content within seconds or lose.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Before anything else, list the modes your talk actually contains, in order: speaker talking over a static slide, diagram being built, recorded screen capture with live narration, question to the room, physical prop, silence, numbers on screen, a story about a failure. Most technical talks contain exactly two modes and the speaker has not noticed. 2. Draw the talk as a timeline with a mark at every mode change, using the block times you already have. 3. Measure the longest single-mode stretch. If it exceeds six minutes, that stretch is where the room will be lost, regardless of how good the content is. 4. Insert one change inside that stretch — not after it. A change placed after a boring block rescues nobody; the people who left, left during it. 5. Choose the cheapest change that fits the content: a question to the room (30-40 seconds), a single full-bleed slide with one word or one number (5 seconds), a deliberate two-second silence before a claim (Breathing Room), physically moving to the other side of the stage, or a prop. Reserve the expensive changes — the demo, the story — for the places the structure already wanted them. 6. Anchor the biggest change at roughly 40-50% of the talk. In a 25-minute slot that is minute 10-12, which is where a demo naturally belongs. 7. Budget the time explicitly in the checkpoint table. A change that is not in the time budget is the first thing cut when you are behind, which inverts the whole point in a late slot. 8. Decide in advance which single change is protected — the one you deliver even if you are 90 seconds behind. 9. Write the fallback for each change on the same card as the opening script: what you do and say if nobody raises a hand, if the recording will not play, if the prop is missing. 10. On the day, verify the physical conditions the changes depend on: can you actually see raised hands with the projector on and the room lights as they will be, and does the laptop's audio reach the room's speakers. 11. Do not announce the technique. 'Zrobimy teraz krótkie ćwiczenie' converts a state change into a workshop exercise and a conference audience in the last slot will not follow you there.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Any talk over about 15 minutes where you do not control the audience's incentive to stay, and specifically: late-day slots, post-lunch and early-afternoon slots, the last talk before people can leave, a topic the room has already heard several talks about, a large room where the back rows are anonymous, and any single-mode talk (pure slides, pure code, pure narrative). It earns most in exactly the BBConf4.IT configuration — 14:50-15:20, last of the day, an audience that has been in the room since 9:30 and has already heard other speakers on adjacent material. It earns least in a short slot, in a room that came specifically for you, and in a format where the audience is already producing the changes themselves (workshop, fireside chat, heavy Q&A).

### Evidence


**evidence_level**

Mixed, and the parts must not be merged. (a) Controlled/field evidence for the underlying claim that interactive interventions reduce attention lapses: Bunce, Flens & Neiles 2010 (field study, self-report via clickers, single institution, chemistry courses) and, more broadly, Freeman et al. 2014 (meta-analysis of 225 studies; examination performance +0.47 SD under active learning, failure odds ratio 1.95 under traditional lecturing) — although Freeman is about semester-long courses and learning outcomes, not about a 25-minute conference talk, so it supports the direction and not the dose. (b) Field/lab evidence for the early-afternoon dip being real and circadian rather than digestive: Monk and colleagues. (c) Practitioner consensus for the cadence itself, props and prizes: Presentation Patterns, Bowman, Berkun — convergent, unmeasured. (d) The specific numbers — every 3-6 minutes, every 10-20 minutes — are conventions with no measurement behind them. State the practice at level (a)-(b) and the numbers at level (d), never the other way round.


**myth_status**

sound practice with a wrong justification. Varying the delivery mode and planning re-entry points is supported. The justification almost universally attached to it — that human attention lasts about ten minutes — is debunked: Wilson & Korn (2007, Teaching of Psychology, 'Attention during Lectures: Beyond Ten Minutes') reviewed note-taking studies, observational studies, self-report and physiological measures and found little support for a consistent decline at 10-15 minutes; Bunce et al. (2010) then measured lapses directly and found the dominant lapse was under one minute. The practice survives the loss of its folk justification and is in fact better supported by the correct one, because continuous short lapses argue for more frequent re-entry points than a ten-minute clock ever did.


**contested_claims**

1) 'People can only pay attention for ten minutes' — attributed to John Medina's Brain Rules (2008) and repeated by Berkun, by presentation-training vendors and across the design-agency blogosphere. Not supported (Wilson & Korn 2007). Do not say it on stage, do not put it on a slide, and do not use it to justify the cadence in your own notes. 2) 'Attention lessens after about 10-20 minutes' — Bowman's 'Shorter Trumps Longer' as popularly summarised. Same underlying literature, same problem; the practical advice it produces is fine, the stated fact is not. 3) 'The post-lunch dip happens because blood is diverted to your stomach for digestion' — the standard explanation on every after-lunch-slot blog and false as stated; the dip is a bi-circadian phenomenon that appears largely independent of meal ingestion. The dip is real, the explanation is folklore. 4) 'Movement sends more oxygen to the brain, so learners think better' — Bowman's stated mechanism for Movement Trumps Sitting; heavily over-claimed as neuroscience. Standing people up may still be worth doing, for reasons of posture, blood pressure and social permission, but not for that reason. 5) 'Human attention span is now eight seconds, shorter than a goldfish' — a widely circulated statistic with no traceable primary source. It appears in slide decks about attention spans, which is the only place it belongs as an example of what not to cite. 6) 'A tired audience needs more energy from the speaker' — the intuition behind shouting through a graveyard slot. What a low-arousal room needs is more frequent structural handholds and a lower information rate; a speaker who compensates with volume and pace reliably makes it worse.


**key_sources**

1) Bunce, D. M., Flens, E. A. & Neiles, K. Y. (2010), 'How Long Can Students Pay Attention in Class? A Study of Student Attention Decline Using Clickers', Journal of Chemical Education 87(12), 1438-1443 — the primary empirical anchor. Two findings matter: attention lapses of one minute or less were reported more often than longer lapses, with cycles shortening as the lecture proceeded; and clicker questions and demonstrations produced significantly lower self-reported attention decline than lecture, with the benefit persisting into the following lecture segment. 2) Wilson, K. & Korn, J. H. (2007), 'Attention during Lectures: Beyond Ten Minutes', Teaching of Psychology 34(2) — the debunking of the ten-minute rule across note-taking, observational, self-report and physiological studies; also the source of the point that individual differences swamp any group-level attention curve. 3) Monk, T. H. (2005), 'The post-lunch dip in performance', Clinical Sports Medicine, and Monk et al. (1996), 'Circadian determinants of the postlunch dip in performance' — the early-afternoon dip is real, is a 12-hour harmonic of the circadian clock, and is largely unrelated to eating. This is the evidence that makes a 14:50 slot objectively harder rather than merely unlucky. 4) Presentation Patterns glossary (Ford, McCullough & Schutta, 2012) — Brain Breaks and Make It Rain as named, quotable patterns; Breathing Room ('purposeful insertion of quiet to allow important concepts time to settle and germinate') as the cheapest state change in the catalogue. 5) Freeman, S. et al. (2014), PNAS 111(23), 8410-8415 — supporting, not primary: active learning raises exam performance by 0.47 SD across 225 studies, effect largest in small classes; establishes the direction but is about courses, not conference talks.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

1) External validity is thin. Bunce measured chemistry undergraduates in a semester course with a grade at stake, reporting their own attention through a device they had been trained to use. A voluntary professional audience in the last slot of a Saturday conference is a different population with different incentives, and no study measured them. The direction is defensible; any specific dose is not. 2) Novelty for its own sake fragments. A talk with eight mode changes and no argument is worse than a talk with two changes and a clear one; the changes must sit on the seams of the structure, not be sprinkled over it. 3) State changes cost slot time, and in a 25-minute slot with a binding abstract that promises a working example, the marginal minute spent on a hands-up question is a minute not spent on the demo the audience was promised. 4) A tired room resists participation, and a failed participation attempt costs more energy than it creates — the silence after an unanswered question is itself a memorable event, and not in your favour. This is the strongest practical argument for preferring low-demand changes (silence, a prop, a full-bleed slide, movement) over high-demand ones (hands up, discussion) as the day gets later. 5) Prizes carry a theoretical risk of overjustification (Deci, Koestner & Ryan 1999 — tangible, expected, performance-contingent rewards undermine intrinsic motivation), although the meta-analysis's effects are strongest for children and for free-choice behaviour measures, and a one-off prize at a conference is close to the weakest case for the effect. The practical risk is different and larger: prizes can become the memorable thing, so that the room remembers a mug and not a thesis. 6) The abstract constrains you. This talk's published abstract promises 'bez teorii, bez sprzedaży' and a working example; devices that read as workshop technique or as filler are a breach of that contract in front of an audience that read it before coming.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

Map the changes onto the deck that already exists rather than adding a layer. The BB4IT structure is 19 slides in seven blocks: opening and agenda (1-4, 2.5 min), what actually breaks (5-6, 3 min), thesis and its defence (7-8, 3 min), how it is built (9-12, 3.5 min), the demonstration (13-15, 7 min), what and how to build it with (16-17, 3 min), three conclusions and the artefact (18-19, 3 min). Marked as a mode timeline, the shape is clear: the demo at roughly minute 12 is one very large state change, and everything before it is a single mode — speaker talking over slides — running for about twelve minutes. That is the exposure. Three insertions fix it without touching the argument. (a) At the top of the 'what breaks' block, one question to the room with a stated threshold, delivered in about 35 seconds — this also front-loads a prequestion, which independently improves retention of the answer you are about to give. (b) At the seam between the thesis block and the architecture block, roughly minute 8, one full-bleed slide carrying a single number or one sentence, held in silence for two seconds before you speak (Breathing Room) — cost about 8 seconds, and it functions as the audible boundary a drifting listener needs. (c) The demo block is the anchor change and already exists; protect it, and make sure the transition into it is announced as a shift ('przestaję mówić, zaczynam pokazywać') so the room registers the change rather than sliding into it. Optionally, a fourth: a physical prop at the conclusions block, held up rather than shown on screen, which is also the moment most likely to be clipped for social media. What this replaces: nothing structural. It costs roughly 60-90 seconds, taken from the architecture block, which is the block most tolerant of compression because its content also exists on the QR-linked repository.


**time_budget_min**

1.5 on stage for the added changes, on top of the mode changes the content already contains. Breakdown: one question to the room with a counted answer 0.6 min; one silence-and-single-slide boundary 0.15 min; one prop moment 0.4 min; the transition sentences into and out of each 0.3 min. The 7-minute demo is not counted here because it is content, not an inserted device. The two prize questions required by the organiser cost roughly 2 min and sit outside the 25, in or after the Q&A block — confirm which with the moderator, because if they are inside the 30 minutes they are a real cut to the talk.


**audience_change**

The audience is still present at minute 20 — not physically, which they would be anyway, but cognitively: they can answer what the last block was about. The visible version is that the room can re-enter after drifting, so the three conclusions at minute 21 land on people who are listening rather than on people who checked out at minute 9 and have been reading Slack since. Secondary and specific to a last slot: the room does not experience the talk as an endurance test, which is what determines whether they stay for the Q&A and the two prize questions rather than starting to pack at 15:10.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

late_slot — directly and primarily. This is the core technique for the named gap: 14:50-15:20 on 12 September, last of nine talks, an audience in the room since 9:30, and a slot that sits inside the measured early-afternoon circadian trough. It is also the item that supplies the correct reasoning for that gap, replacing 'they will be tired so I must be energetic' with 'their baseline arousal is genuinely lower, so I must raise the density of re-entry points and lower the information rate'. timing — directly, and with a conflict worth naming: state changes are the first thing a speaker cuts when behind, which in a late slot is exactly backwards, so one change must be marked as protected in the checkpoint table. demo_risk — directly: the recorded demonstration is the single largest state change in this talk and carries roughly seven of the twenty-five minutes, so a technical failure removes both the demo and the talk's energy anchor at once; the fallback narration has to be designed as a state change in its own right, not merely as a substitute explanation. reuse — indirectly but usefully: a prop moment or a counted show of hands is the most clippable ten seconds in a technical talk, and the recorded-demo block is the segment most likely to be reused, so marking the changes also marks the cut points for the second life of the material. opening — indirectly: the first mode change should arrive early enough that the room learns the talk will keep moving. qa — indirectly, through the organiser's two prize questions, which are themselves a state change placed after the talk.


**minimal_2h_version**

Forty minutes, and it requires no new content. (1) 10 min — mark the existing 19-slide deck as a mode timeline and find the longest single-mode stretch. In this deck it is slides 1-12, about twelve minutes of one mode. (2) 10 min — write exactly two insertions for that stretch: one question to the room with its own answer prepared in case nobody responds, and one full-bleed slide with a single number held in two seconds of silence. Write the question word for word; improvised questions to a tired room fail. (3) 5 min — write the transition sentence into and out of the demo so the change is announced rather than accidental. (4) 5 min — write the fallback line for each insertion on the opening card. (5) 5 min — add the 60-90 seconds to the checkpoint table and mark which change is protected if you fall behind. (6) 5 min — decide the two prize questions the organiser requires and where they sit. If only fifteen minutes exist: write the one question to the room, its fallback line, and the sentence that announces the demo. Those three sentences capture most of the benefit.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

BB4IT, room L120, 14:50. The room has been sitting since 09:30, has had lunch at 13:05, and is now inside the early-afternoon dip. The preroll slide is up while people come back in, the speaker is standing at the front rather than behind the laptop, and greets a few people (Seeding Satisfaction). 0:00 the scripted opening, no slide change for 40 seconds — the first mode is deliberately bare, so that the first change registers. 2:30, entering the 'what actually breaks' block, the first insertion: 'Ręka w górę, kto w ostatnim miesiącu tłumaczył agentowi coś, co już było opisane w firmowej dokumentacji.' Hands go up; the speaker counts aloud — 'okej, mniej więcej połowa' — which is the mode change and simultaneously the sentence that makes it exist on the YouTube recording, where the room is not visible. Fallback, pre-written and rehearsed, if nothing happens: 'To ja podniosę swoją.' — hand up, one beat, move on. Cost: 35 seconds. 8:00, seam between thesis and architecture: full-bleed black slide, one number, two seconds of silence before the sentence that explains it. Cost: 8 seconds, and it is the audible boundary at which a drifting listener re-enters. 11:30, the anchor change, announced rather than slid into: 'Teraz przestaję mówić o tym i zaczynam to pokazywać.' The recorded demo plays with live narration for seven minutes. This is the block that carries the energy of the second half, which is precisely why its failure mode has to be rehearsed. 19:00, conclusions: the prop moment — the second brain of this talk is a directory of markdown files, so the physical object is a printout of one note held up, the concrete version of an abstract claim, held for four seconds. 21:30 close, QR, hand over. 22:00-27:00 Q&A. After it, the organiser's two prize questions, which are the last state change of the entire conference day and, delivered well, the reason the room stays in their seats until 15:20 rather than filtering out during the last five minutes.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

This is a design skill first and a delivery skill second, and they train differently. Design: after each of your next three talks, watch your own recording with the sound off at double speed and mark every mode change on a timeline. Two things become obvious that are invisible from the stage — how few modes you actually have, and where the long flat stretch is. Do it for three talks and you will have a personal profile (most technical practitioners discover they have two modes and one change, at the demo). Delivery: the sub-skill that actually needs rehearsal is the transition, not the change — the two sentences that get you into and out of it without losing the thread. Drill those separately, ten repetitions each, the way you would drill the opening. Second sub-skill: the four-second recovery from a failed change, which cannot be improvised and must be rehearsed until it is boring. Third, slower loop: build a personal inventory of changes that fit your register — for a practitioner speaker, that usually means props, artefacts, silence and counted questions, and not games, standing up or turning to your neighbour. Over months, the reliable improvement comes from watching other speakers specifically for their mode timeline rather than for their content.


**drill**

The flat-stretch drill, 15 minutes. Input: the recording of your last talk (or the current deck if no recording exists), a timer, and a sheet of paper with a horizontal line marked in minutes. Action: (a) 6 min — play the recording at 2x with the sound off and put a tick on the timeline at every mode change: slide-build, demo, question, prop, silence, movement, change of screen type. If you are working from the deck instead, do the same from the block table. (b) 2 min — measure the longest gap between ticks and write the number down. (c) 5 min — write one insertion for the middle of that gap, word for word, including the sentence that gets you back to the argument and the fallback line for when it does not land. (d) 2 min — deliver the 90 seconds around the insertion aloud, standing, timed. Observable output: a timeline with the longest gap measured in minutes, one word-for-word insertion with a fallback, and a timed figure for what it costs. Success criterion: after the insertion, no single-mode stretch in the talk exceeds six minutes, and the delivered cost is within 15 seconds of your estimate.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

One transition — the sentence that enters a mode change plus the sentence that returns to the argument, about 40 seconds end to end. It is small enough to repeat ten times in ten minutes and it is the part that actually breaks on stage; the change itself (a slide, a prop, a question) needs no practice, while getting back to the thread after it does.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

First time: 60-90 minutes — 30 to map the mode timeline and find the flat stretch, 30 to write the insertions and their fallbacks, and 15-30 to rehearse the transitions. Per subsequent talk: 20-30 minutes, because the inventory of changes that suit you is reusable and only the placement changes. On the day: 5 minutes, folded into the tech check — verify that you can see raised hands under the actual room lighting and that laptop audio reaches the room. Ongoing: near zero once the habit is formed; the recurring cost is resisting the urge to cut the changes when the checkpoint says you are behind.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

Fastest loop, live: the response to the first change, which tells you what the second one should cost. If a counted question returns a good show of hands, the room will tolerate a higher-demand change later; if it returns four hands, drop to low-demand changes for the rest of the talk and do not ask again. Second loop, the recording: watch the audience-facing camera if there is one, and otherwise listen to the room audio track — laughter latency, movement, the rustle after a pause. Third loop, immediate and specific to BB4IT: the short video interview the organiser records right after the talk, and the hallway conversations, where what people quote back to you tells you which moment survived. Fourth loop, slow: the Crossweb speaker-feedback panel the organiser offers, if the QR is on the closing slide. A caution — the absence of visible reaction in a tired late-day room is weak evidence of failure, so weight the recording and the hallway over your in-room impression.


**measurable_kpi**

(a) Number of distinct modes in the talk — count from the timeline; target 4 or more in 25 minutes, against the typical technical-talk baseline of 2. (b) Longest single-mode stretch in minutes — the headline number; target under 6, current BB4IT deck approximately 12 before insertions. (c) Time from the first word to the first audience action — target under 4 minutes. (d) Hands raised as a rough fraction of the room on a counted question — track it across talks; it is a measure of your framing, not of the audience. (e) Number of people who leave before the end — in a last slot this is the cleanest available signal and it is free to count from the recording. (f) Number of planned changes actually delivered versus cut under time pressure — target 100% for the protected one. (g) Phones visible in the back two rows before and after the anchor change, counted from the recording if the camera shows the room.

### Online and recorded


**online_variant**

Harder in every direction and the cadence has to tighten. There is no room energy, no peripheral sense of whether anyone is present, and the competing tab is one keystroke away rather than a walk to the door, so the practical cadence moves to a change every 3-4 minutes. Which changes survive: switching what is shared (slides to terminal to browser), the speaker's camera going full-screen for a claim, silence (which is far more uncomfortable online and therefore stronger, but must be capped at about 1.5 seconds), and chat prompts. Which changes die: props, which read badly through a webcam; physical movement, which is invisible; and a show of hands, which does not exist — its online equivalent is a chat prompt or a poll widget, and it needs longer than you think (15-20 seconds of dead air while people type, which must be filled deliberately, not apologised for). The single most valuable online change is the one that is unavailable in the room: reading a specific chat message aloud with the person's name, which proves in one sentence that the session is live. Poll tooling matters more here because the result display is the state change; in the room, the counted hands are.


**recorded_variant**

The recording flattens every state change that depended on the room. A show of hands is a silent gap on YouTube unless you say the result aloud — the Echo Chamber discipline applies to your own questions, not only to the audience's, and 'okej, mniej więcej połowa sali' is the sentence that makes the moment exist for the viewer. A prop must be held where the camera is, not where the front row is, and if the recording is a screen capture with a small speaker inset, the prop simply does not exist and the change should be delivered on screen instead. Silence reads longer on video than in the room, so two seconds is enough. Prizes and the organiser's prize questions are, from the viewer's side, an in-joke about a room they were not in — worth keeping short and worth making the questions themselves substantive, since the questions travel even when the prize does not. Conversely, the recording rewards changes the room barely notices: the full-bleed single-number slide, the change of screen type, the shift from prose to narration over a demo. Because this talk goes to the BBDays4.IT YouTube channel, and because the deck is being mined for carousels and clips, the prop moment and the counted-hands moment are the two most clippable seconds in the talk and should be delivered with that in mind — self-contained, one sentence, no dependence on what came before.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

1) Energizer theatre — a device with no relationship to the content, inserted because a book said every ten minutes. A conference audience recognises it instantly and reads it as filler, which in a late slot converts fatigue into resentment. 2) Enforcing a ten-minute clock mechanically, which is the cargo-cult version of the whole item: the timing derives from your structure's seams, not from a stopwatch, and the underlying rule is not real anyway. 3) The rescue-after-the-fact change — placing the funny slide after the twelve dull minutes rather than inside them. 4) Asking a question you do not want answered, or whose answer you cannot use; the Negative Ignorance antipattern ('kto z was nie zna…') is the sharpest version. 5) Making the prize the memorable object. If the room remembers a mug and not the thesis, the device consumed the message. 6) Standing the room up in a 25-minute conference talk. It is a workshop move, it costs 90 seconds, and in a Polish engineering audience in the last slot it will be complied with grudgingly and remembered badly. 7) Treating the demo as the only change, which makes a single technical dependency the load-bearing element of the talk's energy. 8) Narrating your own technique ('teraz zrobimy zmianę tempa'), which destroys the effect it announces.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Budgeting zero time for the changes, then cutting them when the checkpoint shows a deficit — the specific failure this item is most likely to suffer in practice. Improvising the question to the room instead of writing it word for word, which produces a compound question nobody can answer with a hand. Having no fallback for silence, so the four seconds after an unanswered question become eight. Placing the biggest change too late (a demo at minute 18 rescues the block nobody was still listening to). Overcorrecting after reading one book — six changes in a 25-minute talk is fragmentation, not energy. Forgetting the physical preconditions: not being able to see hands because the room lights are down and the projector is in your eyes, or discovering during the demo that the laptop's audio was never patched into the room. Using the same device an earlier speaker used the same day. Delivering a change at the same volume and pace as everything else, so the room does not register that anything changed. And, specific to a last slot: mistaking the room's low baseline arousal for a verdict on the content, and responding by speeding up.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

A lightning talk of 5-10 minutes, where the whole talk is one state and any change is an interruption. A formal client presentation to a small group, where the equivalent function is served by questions and discussion that arise naturally. A room of fewer than about fifteen people, where a show of hands is socially awkward and a prop is theatrical. A hostile or high-stakes context (an audit, a post-incident review) where a device reads as evasion. A room that has already been asked to participate twice that day by earlier speakers. And an expert audience that came for density: if the abstract promised depth and no theatre, the correct change is a shift into more technical detail, not a shift into a game.


**fallback_if_it_fails**

Nobody raises a hand: raise your own, say the pre-written line ('To ja podniosę swoją.'), and be back in the argument within four seconds — never re-ask, never say 'no dobra, to inaczej', and never comment on the silence. The pause after a failed question is the only thing that turns it into a visible failure. The recorded demo will not play: this is the big one, because it is both the content and the energy anchor; the fallback is the narrated walkthrough at the whiteboard or with the terminal that is already open — deliver it as a different mode, standing away from the laptop, and say once, without apology, what happened. The prop is missing or the printout is in the speaker room L152: skip it silently; a prop that is described but not shown is worse than no prop. The room lights make hands invisible: convert the counted question into a rhetorical one, answer it yourself, and keep the timing. You are 90 seconds behind at the checkpoint: cut everything except the protected change; in a last slot the change is more valuable than the block it was inside. The room is flatter than expected even after two changes: stop raising the demand, drop to low-demand changes only (silence, single slides, movement, the recording), lower the information rate, and finish early — a talk that ends at 21 minutes in the last slot of the day is a gift, not a shortfall.


**works_signal**

Positive, in rough order of reliability: someone photographs a slide (the strongest single signal in a technical room, and it is unambiguous); phones going face-down or laptops closing; heads coming up from screens within two seconds of the change; laughter latency shortening across the talk; unprompted note-taking; people who came in late moving forward rather than staying by the door; and, at the end, the room staying seated through the Q&A instead of packing during the last five minutes. Negative: hands not going up on a question whose honest answer is obviously yes; the back two rows going still in the specific way that is not attention (no head movement at all); people leaving between blocks — one or two is normal at 15:00, four in a minute is a verdict; the sound of bags. One caution that belongs here rather than in the reading-the-room item: absence of visible reaction in a tired late-day room is a weak signal in both directions, so act on strong positive signals and on movement toward the door, and ignore ambiguous middle states rather than adjusting on noise.


**dependencies_conflicts**

Prerequisites: a modular block structure (changes attach to the seams between blocks — see time-blocking-structure), the block time table, and the demo decision, because the recorded-demo choice fixes a seven-minute change in place and all remaining flexibility has to live around it. Feeds: reading-the-room (which supplies the diagnosis this item acts on), audience-interaction (the highest-demand subclass of state change, with its own protocol), onstage-time-control (the changes must be in the checkpoint table or they will be cut), and talk-to-content-reuse (the prop and counted-hands moments are the clips). Conflicts, named and live: (a) with the time budget — every change costs slot time in a 25-minute talk with a binding abstract, so the changes compete directly with the demo the abstract promised; (b) with on-stage time control — the natural response to a deficit is to cut the changes, which in a late slot is precisely inverted, so one change must be marked protected in advance; (c) with the recorded demo as a single point of failure — the biggest change is the most fragile one, so a lower-tech change must exist elsewhere in the talk; (d) with Marp's export split — any change implemented as a fragment or animation exists only in the HTML export and vanishes in the PDF that goes to biuro@itwgorach.pl and serves as the backup, so changes must be built from whole slides, not from builds; (e) with the question policy — if questions are taken during the talk they become uncontrolled state changes that wreck every downstream checkpoint, which is a further argument for the end-only policy in this slot.

### Tooling


**tool_support**

Marp presenter notes for the change markers and the fallback lines; a printed card carrying the fallback lines, because it survives a laptop failure; a phone stopwatch for the checkpoint that tells you whether the protected change is still affordable. A physical prop — for this talk, a printed markdown note from the vault, which is the concrete form of the abstract claim. The organiser's prizes for the two required questions. Live-poll tooling (Slido, Mentimeter, Wooclap) only if agreed with the organiser in advance and only in the online variant or a longer slot; in a 25-minute room talk the counted show of hands is faster, needs no wifi, and does not put a join code between you and the room. For the feedback loop: the published recording, and the Crossweb speaker-feedback panel the organiser provides.


**marp_implementation**

Changes must be built from whole slides, never from fragments. A full-bleed boundary slide: `<!-- _class: lead --> <!-- _backgroundColor: #000 --> <!-- _color: #fff -->` with one number or one sentence, and the header/footer suppressed with `<!-- _header: '' --> <!-- _footer: '' -->` so the visual break is total. Mark the changes in the presenter notes of the block's first slide in a fixed format so they are findable under stress: `<!-- STATE: hands-up | 0:35 | fallback: "To ja podniosę swoją." -->` and `<!-- STATE: protected -->` on the one that survives a deficit. Use `paginate: false` on the boundary slides (`<!-- _paginate: false -->`) so the page number does not undercut the full-bleed effect. For the demo block, keep a still frame of the recording as a slide so that a slide exists even when the video does not — the PDF then still contains the block. Do not implement any change as a CSS animation, a `data-marpit-fragment` list build or a video embed you rely on: the first two exist only in HTML and the third does not survive the file being emailed. The demo video ships as a separate file played from the desktop, exactly as already decided.

### Effort and payoff


**prep_effort**  
<sub>low | medium | high — one-off setup cost</sub>

low to medium — 60-90 minutes for the first talk, 20-30 for each one after, and no new content required. Most of the work is diagnosis (finding the flat stretch) rather than creation, and the artefacts produced (word-for-word question, fallback lines, boundary slides) are reusable across talks on the same material.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Visible on the next talk, and asymmetrically valuable in a bad slot. The immediate effect is that the second half of the talk is delivered to a room that is still following, which shows up most clearly in the conclusions landing and in the Q&A having volunteers. The measurable version arrives after two or three talks, when the longest single-mode stretch on your own timeline drops from roughly twelve minutes to under six and stays there. A secondary effect appears sooner than expected: knowing the changes are planned and rehearsed removes the mid-talk temptation to improvise energy, which is where late-slot talks usually go wrong.


**needs_organiser_agreement**

yes, on four specific points, three of them already partly settled for BB4IT. (1) The two prize questions: the organiser requires each speaker to prepare two questions for the audience with prizes for good answers, plus two questions from the audience — agree whether they sit inside the 14:50-15:20 block or after it, who hands out the prizes, and who moderates them, because if they are inside the 30 minutes they are a direct cut to the talk. (2) Laptop audio into the room's sound system, since the demonstration runs from a recording and a silent video is a state change that fails; HDMI is provided by the organiser, adapters must be reported by email in advance. (3) Room lighting and layout in L120 — whether you can see raised hands from the front with the projector running, checked in person during the 45 minutes you are required to be on site before the talk. (4) If any live-poll tool is contemplated, it needs agreeing in advance along with wifi; for this slot the recommendation is not to. Anything else — props, silence, movement, boundary slides — you decide alone on the day.


**priority**

high. It addresses the late_slot gap directly, it is the only item in the set whose value is specifically increased by the 14:50 position and the topic-saturated room, it costs under 90 minutes and no content rewrite, and it can be applied to the finished deck before the 11 September 14:00 deadline. It ranks below the timed dry run and the scripted opening only because those two protect against harder failures; among the delivery items for this particular talk it is first.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

- https://pubs.acs.org/doi/10.1021/ed100409p
- https://eric.ed.gov/?id=EJ921304
- https://journals.sagepub.com/doi/10.1080/00986280701291291
- https://eric.ed.gov/?id=EJ772424
- https://pubmed.ncbi.nlm.nih.gov/15892914/
- https://pubmed.ncbi.nlm.nih.gov/8877121/
- https://www.pnas.org/doi/10.1073/pnas.1319030111
- https://presentationpatterns.com/glossary/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC5373483/
- https://bowperson.com/images/resources/the-six-trumps.pdf
- https://www.nateliason.com/notes/confessions-public-speaker-scott-berkun
- https://uk.gingerleadershipcomms.com/article/speaking-in-the-after-lunch-slot-how-to-bring-the-graveyard-shift-back-to-life
- https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2021.652849/full
- https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0125359
- https://www.academia.edu/24470499/A_meta_analytic_review_of_experiments_examining_the_effects_of_extrinsic_rewards_on_intrinsic_motivation

### Not established by this research

- `origin_author`
- `origin_year`
- `application_pl_talk`
- `pl_language_notes`
- `survives_pdf_export`


---

## Live narration over a recorded demo (Lipsync)

> Play a pre-recorded demo inside the deck and talk over it live — the screen is on rails and fixed in length, the voice is improvised and present, so you keep the sense of something happening while owning the clock.

### What it is

- **category** — operations


**origin_author**  
<sub>Originating author, book, lab or community that named the method</sub>

Neal Ford, Matthew McCullough and Nathaniel Schutta — Presentation Patterns, pattern 'Lipsync' (chapter 'Demonstrations Versus Presentations'); Zach Holman — speaking.io, 'Live Tech Demos'; utkusen — 'Don't Do Live Demos, Do Live-Looking Demos' for the terminal-replay variant

- **origin_year** — 2012 (Presentation Patterns, ISBN 9780321820808); ~2014 (speaking.io); 2025 (utkusen, after DEF CON 33)

- **talk_moment** — middle blocks — the demo block itself; the preparation is 'before arriving'

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

The technique splits the demo into two channels and fixes only the risky one. The screen channel becomes deterministic: it will take exactly as long as it takes, it cannot fail, it cannot hit a cold cache or an expired token, and it can be edited so that a ninety-second build takes four seconds. The voice channel stays fully live: the speaker is looking at the room, reacting to what the room reacts to, and — as Presentation Patterns puts it — can 'talk over the top of the running demonstration with full concentration' instead of spending that concentration on making a persnickety example work. The audience still gets motion, causality and the feeling of watching a thing happen, because the perceptual cue that reads as 'live' is movement synchronised with a human voice, not the fact that a CPU is actually executing. Two secondary mechanisms matter: because the recording lives inside the presentation tool, deck-level overlays, callouts and transitions can be layered on top of the video; and because the length is known to the second, the demo block stops being the variable that can wreck the timing plan. The cost is that the screen no longer answers questions — hence the standing live environment on the side.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Script the demo as beats before recording: each beat is one command, its visible output, and the sentence you will say over it. 2. Prepare the environment to demo hygiene standards first — you are recording it permanently, so a leaked key or a client name is baked in. 3. Record 2–3 takes on the finished script, at the resolution the room will use, with no cursor wandering; record silent, because the narration is live. 4. Trim ruthlessly: cut every keystroke pause, speed-ramp anything that is a wait rather than an event, and land the whole clip inside the budgeted minutes. 5. Watch the trimmed clip once with a stopwatch and mark, on paper, the timecode of each beat and the sentence that belongs to it — this is the narration score. 6. Embed the clip in the deck as its own slide; put a transition slide (DEMO) before it so the mode change is announced visually. 7. Disable autoplay so you start the clip deliberately; keep controls visible so you can pause. 8. Tell the room, once, in one sentence, that this is a recording and why. 9. Rehearse the narration against the clip at least three times, standing, without pausing the video — narration that needs pauses is too long. 10. Mark one or two designated pause points where you may stop the video for a beat and speak to the room; anything else stays running. 11. Open the same environment live, on the same data, and leave it standing for Q&A. 12. Export still frames of each beat as the fallback for a PDF-only or dead-laptop run.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

When the demo is the largest block of a short slot; when the process being shown contains real waiting (a build, an ingest, a long agent run) that would burn stage minutes; when the machine, network or projector chain is not yours; when the demo has to be repeated across several talks; and when the room is tired and needs motion but the speaker cannot afford a recovery. It is the default choice for a 25-minute conference slot with a 5–7 minute demo.

### Evidence


**evidence_level**

practitioner consensus — a named pattern in a published catalogue plus independent convergent practice from several conference speakers. No controlled comparison of narrated-recording versus live demo on audience comprehension or credibility exists; treat every claim about which one 'feels more real' as an assertion.


**myth_status**

confirmed as sound practice — the technique does what it claims (fixed duration, zero failure surface, narration freed up); the folklore attaches to the surrounding claims, not to the mechanism.


**contested_claims**

1. Naming: the research outline calls this 'Lipsync or Live on Tape', but the official Presentation Patterns glossary defines them as different things — 'Lipsync: record the interaction with the tool and play it back as part of the presentation', whereas 'Live on Tape: a recorded version of your entire presentation provided electronically'. Live on Tape is about shipping a recording of the whole talk, not about narrating over a clip. Use 'Lipsync' for this item and do not propagate the merge. 2. 'The audience can tell and will hold it against you' — utkusen argues that visible video controls make viewers 'feel less excited because they know everything is already prepared'; this is an experienced practitioner's observation, not a measurement, and the counter-move preferred here is disclosure rather than concealment. 3. 'A recording is what you do when you couldn't get the demo working' — a status claim, not a technical one; the same catalogue treats Lipsync as a positive pattern precisely because it buys editing and concentration. 4. The stronger 'live-looking demo' variant — replaying an asciinema recording so the terminal appears to be typing live — deliberately conceals the recording; that is a different ethical position from narrated Lipsync and should be chosen consciously, not drifted into.


**key_sources**

1. Ford, McCullough, Schutta, Presentation Patterns (2012), pattern 'Lipsync' — recording lets you 'edit for time, speeding up necessary but boring sections or compressing the length of long-running processes', and lets you 'talk over the top of the running demonstration with full concentration'; because the video runs inside the presentation tool you can overlay animations and decorations on it. 2. presentationpatterns.com glossary — the canonical one-line definitions that separate Lipsync from Live on Tape. 3. Holman, speaking.io 'Live Tech Demos' — embed the screencast in the deck so you never flip apps or fight display mirroring, and so the speaker's only job during the demo is audio narration. 4. utkusen (2025) — the DEF CON 33 asciinema replay as the concealed variant, plus the anecdote of a DEF CON talk that collapsed when a VM failed to boot.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

The recording cannot respond. Any question that starts 'what happens if…' has to be deferred to the live environment or to Q&A, and a speaker who has narrated the same clip a dozen times can slip into reciting rather than presenting — the narration goes flat exactly because the risk is gone. There is also a genuine credibility case against it for product launches and tool releases, where 'it runs right now on this laptop' is itself the claim being made. And the technique fails badly if the narration was written to the clip's original pace rather than to the trimmed pace: over-scripted narration collides with the video and the speaker starts pausing the demo, which destroys the illusion of flow.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

This is the execution of the 7-minute demo block at slides 13–15 in the BB4IT plan. Structure it as: a DEMO transition slide (~10 s, says the mode change out loud), the video slide (5–6 min of clip), then the bridge slide back to 'what to build it with'. Speak over the whole clip; use at most one deliberate pause, at the contrast beat where the same question that returned nothing now returns an answer. Because the clip's length is known, this is also the block that makes the 15:05 checkpoint in the speaker notes operable: if the demo has not started by 15:05, slides 10 and 11 collapse to one sentence and the demo still fits.


**time_budget_min**

5–7 minutes of clip inside a 25-minute slot (BB4IT: 7 minutes including framing and bridge). Add 10 seconds for the transition slide, ~20 seconds for the framing sentence, ~20 seconds for the bridge out. The point of the technique is that this number does not move.


**audience_change**

The audience watches the argument execute instead of hearing it asserted, and — because the speaker is talking rather than typing — they get an interpretation of every step as it happens rather than a silence to fill in themselves. They leave able to describe the three beats in their own words, which is what makes the demo quotable in the corridor afterwards.


**application_pl_talk**

The split-channel structure transfers unchanged; the rebuild is that the screen is in English and the narration is in Polish, so the narration score has to include a Polish gloss for every on-screen string that carries meaning — file names, the agent's 'I don't have that' response, the `git diff` header. Without the gloss the audience silently translates while you talk and loses the beat. Disclose the recording in one plain Polish sentence at the start of the block; Polish technical audiences treat an announced recording as professional and a concealed one as a stunt, and the concealed 'live-looking' variant is a poor fit for a room that will meet you in the corridor afterwards. Pair the disclosure with the standing offer to run it live in Q&A — that single sentence recovers all the credibility the recording notionally costs. Practical note for this speaker: the NCP4 deck already ran this pattern (`_class: video` slides with presenter notes reading 'comment live on each phase as it appears in the recording'), so BB4IT is a second iteration, not a first attempt.


**pl_language_notes**

Say 'nagranie' for the clip and 'pokaz' for the demo block; avoid 'screencast' and avoid the calque 'odtwarzam demo live', which is self-contradictory. 'Lipsync' has no usable Polish rendering — do not say it on stage, it is internal vocabulary. Ready phrases: disclosure — 'To nagranie. Chcę zmieścić się w czasie, więc pokaz idzie z pliku, a ja komentuję go na bieżąco.'; the standing offer — 'Ten sam terminal, ta sama baza, stoi otwarty obok. W pytaniach mogę to odpalić na żywo.'; live narration connectors that keep the voice ahead of the picture — 'Za chwilę zobaczycie…', 'Tu jest cały sedno: to samo pytanie, inna odpowiedź.', 'Zwróćcie uwagę na tę linijkę.'; the bridge out — 'Tyle pokazu. Wracamy do tego, czym to zbudować.' Keep the narration in the present tense; Polish narration slips easily into the past tense ('kliknąłem, potem pojawiło się…'), which instantly reveals that you are describing a recording rather than reading a live screen.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

demo_risk — this is the concrete implementation of the decision that closes the gap, and it is exactly the BB4IT setup (decision no. 1 of 08.09; recording due 10.09 as PL-87). Also timing — a clip of known length is the only demo form compatible with an 85-percent-of-slot rehearsal target. Also late_slot — 5–7 minutes of moving screen with a live voice over it is the single strongest state change available in a 14:50 room, and it costs no recovery risk. Also reuse — the trimmed clip is a finished asset: a 60–90 second cut of the contrast beat is a LinkedIn post without a re-shoot. Only weakly related to opening and qa.


**minimal_2h_version**

Assume the clip exists and is trimmed. (1) Play it once end to end from the deck, on the presenting laptop, with the projector cable attached and audio routed as it will be on stage; confirm it is not autoplaying before you are ready. (2) Watch it once with a stopwatch and write the beat timecodes plus one narration sentence each on a single sheet — this is the whole score and it is the highest-value 20 minutes available. (3) Narrate it aloud twice, standing, without pausing the video; if you run out of words before the clip ends, add a sentence, if you are still talking when it ends, cut one. (4) Write the disclosure sentence and the standing-offer sentence and say them aloud. (5) Export 3 stills as the fallback. (6) Confirm the second copy off the laptop (PL-200) also plays.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

BB4IT, the cooking-recipe knowledge base, roughly six minutes of clip with live Polish narration: beat 1 (0:00–1:30) `/qa` about a recipe that is in the base — the agent answers and cites the file; narration names the file and says why the citation matters. Beat 2 (1:30–2:45) `/qa` about a recipe that is not there — the agent says it does not have it; the deliberate pause point lands here, one sentence to the room: 'to jest odpowiedź, której chcecie od agenta.' Beat 3 (2:45–5:00) ingest one new recipe, then repeat the identical question — now answered; `git diff` shows the note and the index entry that appeared. Beat 4 (5:00–6:00) the same question asked directly of the bare model — an invented answer, the contrast that closes the argument. Every wait in the ingest is speed-ramped so the clip never idles.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

Build the recording pipeline until it is boring: a repeatable capture setup, a trim step you can do in ffmpeg without thinking, and a deck slide type that takes a video file. Then train the actual skill, which is not recording but narrating — commentary over moving pictures is a distinct performance skill from speaking to slides, closest to sports commentary, and the way to build it is repetition against the clock. Over weeks, narrate other people's demo videos cold for five minutes at a time to develop the habit of staying half a beat ahead of the screen. Build a reusable demo base you know by heart, because the whole technique collapses if you are discovering the content alongside the audience — the explicit lesson from the Pionierzy AI #03 retrospective.


**drill**

Input: your trimmed demo clip and a stopwatch. Action: play it full screen and narrate it aloud, standing, without notes and without pausing — three consecutive runs, recording your own audio. Output: three audio tracks plus three numbers (seconds of silence, times you fell behind the picture, times you ran out of material before the beat ended). Target after three runs: no silence longer than about four seconds, no beat where the picture is ahead of the voice, and the last sentence landing within five seconds of the clip's end. 15–20 minutes.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

One beat — a timecode range in the clip plus the sentence that covers it. The full run only tells you whether the beats stitch together; the beat is where the narration is actually fixed.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

Recording and trimming: 2–4 hours for a 5–7 minute demo, including retakes and the environment hygiene pass. Building the narration score: 30–45 minutes. Rehearsal: 3 runs at clip length plus review, about an hour. On the day: 10 minutes of playback verification. Second and subsequent talks reuse the clip, so the marginal cost drops to the rehearsal hour.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

The clip is the metronome — a rehearsal recording played against it immediately shows every place the voice trails the picture. On stage the signal is whether you finish your sentence as the clip finishes, and whether you had to pause the video unplanned. Afterwards, the published recording is the honest feedback: watch the demo block at 1x and count the seconds of dead air.


**measurable_kpi**

Clip runtime versus the budgeted block minutes (target: clip ≤ block − 40 seconds, leaving room for framing and bridge). Seconds of dead air during narration (target < 4 seconds in any single gap). Unplanned pauses of the video (target 0). Beats covered before the picture moves on (target 100 percent). Post-talk: whether a clip cut from this recording was reusable without re-shooting (binary, feeds the reuse gap).

### Online and recorded


**online_variant**

Stronger online than in a room. Sharing a local video file rather than a live screen removes bandwidth and compression from the risk list, and the speaker can watch chat while narrating — impossible during a live demo. Two changes: share the clip via the presentation tool rather than 'share screen with sound' where possible, since audio routing over conferencing tools is the usual failure; and shorten the beats, because online attention decays faster and there is no room energy carrying a slow reveal. Disclose the recording the same way — in a webinar the audience often assumes it anyway.


**recorded_variant**

This is the one item where the recorded and live artefacts diverge sharply. On YouTube the audience sees your recording inside the conference recording — a re-encode of a re-encode — so record at the highest sensible resolution and use large terminal fonts, because the 720p pass is what most viewers get. The published video also silently loses two things: the room reaction during the demo, and any question shouted over it. The upside is unusual: because the clip is a separate file you already own, the reuse workflow does not need to cut it out of the conference video at all — you clip the source. Ask the organiser whether the conference recording may be republished, but note that for reuse purposes you do not need it.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

Playing the recording and letting it play — standing back and watching your own video with the room, which converts a talk into a screening. Over-scripting the narration so tightly that you must pause the video to fit it in. Concealing the recording and getting caught (visible controls, a cursor that never hesitates, a build that finishes impossibly fast). Narrating in the past tense, which announces the recording without meaning to. Leaving `controls` on and then scrubbing the timeline on stage. Recording a demo you have not scripted, which produces a clip full of dead time that no trimming saves. And the Presentation Patterns warning that applies here too — a Lipsync demo that proves nothing is still a Dead Demo, just a punctual one.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Writing the narration before trimming the clip, so the words are paced to a video that no longer exists. Recording with a small terminal font because it looked fine on the recording monitor. Forgetting that autoplay in Chrome requires `muted`, so a narrated-audio clip silently fails to start. Not rehearsing standing up, which is the posture where you actually have to look at the room instead of the screen. Not exporting stills, so the PDF-only fallback has a hole exactly where the evidence was. Recording after the environment hygiene pass instead of before it — the recording is permanent, so any leak in it is permanent too.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

When the claim being made is specifically 'this works right now, unrehearsed' — a product launch or a robustness claim. When the demo is short enough and stable enough that live costs nothing (under about 90 seconds, no network, no build). When the audience is small enough that the session is really a working conversation rather than a talk, and people will want to redirect the demo mid-flight. When you have not had time to script beats — an unscripted recording is worse than an unscripted live run, because it has all the dead time and none of the spontaneity.


**fallback_if_it_fails**

Clip will not play or has no sound path: say one sentence, advance to the exported stills, and narrate the same beats over three frozen images — the argument is in the narration, not in the motion, which is precisely why the score exists. Clip plays but is out of sync with the plan (wrong take, wrong length): let it run, drop to the two beats that carry the contrast, and take the time back in the closing rather than in Q&A. You fall behind the picture: stop narrating the mechanics and speak the meaning instead ('to jest ten moment: to samo pytanie, inna odpowiedź'), then rejoin at the next beat. Someone asks whether it is really working: that is the standing-live-environment moment, and it is the strongest answer available — offer to run it in Q&A.


**works_signal**

Heads stay on the screen while the voice carries them; the room laughs or reacts at the contrast beat rather than at the end; phones stay down for the whole clip. Failure signals: eyes flick between speaker and screen as if trying to work out which one to follow (the narration is trailing the picture); phones come up in the first 30 seconds (the clip started before the framing landed); someone asks 'is that live?' with an edge to it (the disclosure was missed or hedged).


**dependencies_conflicts**

Prerequisite: demo-strategy, which is the decision this technique implements. Prerequisites for the recording itself: demo-environment-hygiene and on-screen-data-leak — both must be satisfied before the capture, because a recording bakes the leak in permanently. Complements bad-slot-energy (the clip is a state change) and one-command-demo-reset (needed for the standby live environment). Hard conflicts: the `<video>` slide against the PDF backup and against the PDF the organiser receives — the demo is simply absent from the PDF, which is why the stills version is not optional; the trimmed clip's fixed length against any temptation to add a fourth beat on the day; and the standing live environment against demo-environment-hygiene, since the second desktop must be as clean as the first.

### Tooling


**tool_support**

Capture: OBS Studio, Screen Studio (adds zoom and cursor emphasis, useful for terminal work seen at 720p), macOS/Windows built-in recorders; asciinema for terminal-only capture, which also enables the concealed live-looking variant. Editing: ffmpeg for lossless trims and speed ramps (`-filter:v setpts=0.25*PTS` for a 4x compression of a wait), any NLE for finer work. Playback: the deck itself. Narration score: a single printed sheet of timecodes, or the presenter view if the tool shows notes alongside the video. Rehearsal: phone recorder against the clip. An LLM is useful for turning a beat list into narration sentences and for generating the 'what will they ask during the demo' list that the standby terminal has to be ready for.


**marp_implementation**

The pattern this speaker already runs: a slide with `<!-- _class: video -->` and `<video src="./sources/demo.mp4" controls muted></video>`, with the narration held as an HTML-comment presenter note directly beneath it (verified in `slides/workspace/ncp4-2-zalozycieli/slides.md`, which carries three such slides). Build through the HTML path — Marp requires `--html` for raw tags and `--allow-local-files` for locally referenced media. Three fixes to apply for BB4IT: drop `autoplay` so the clip starts on your action rather than on slide entry (the NCP4 slides have `controls autoplay muted`); add the missing `section.video` rule, since `slides/themes/plsoft-dark.css` defines none as of 2026-09-08, so the class currently styles nothing — `section.video { padding: 0 } section.video video { width: 100%; height: 100%; object-fit: contain }`; and precede the video slide with a `_class: lead` DEMO transition slide, as the NCP4 deck does, so the mode change is announced. Presenter notes in HTML comments are exactly where the beat timecodes belong, and they can be exported separately with `marp --notes`. Local toolchain verified 2026-09-08: Marp CLI v4.4.1 with Marp Core v4.3.1, while `slides/config.yaml` still pins `marp_cli_version: "^3"` — worth reconciling before the build.


**survives_pdf_export**

no — the video is absent from `marp --pdf` output, and this is the file the organiser receives and the backup that runs when the laptop does not. Verified on the installed Marp CLI v4.4.1 / Core v4.3.1 on 2026-09-08: a `<video src="…" controls muted>` slide exports to a page whose only extractable text is the control bar's `0:00` and which contains no embedded image at all. Adding `poster="./sources/beat-1.png"` fixes that specific page — the same export then embeds the poster image and the empty control chrome disappears — so the poster attribute is the cheapest single mitigation. It is still not sufficient on its own: one poster frame cannot carry a four-beat demo, so keep a parallel stills sequence, one captioned frame per beat, as the PDF-only version of the demo block.

### Effort and payoff

- **prep_effort** — medium — 3–5 hours the first time for a 5–7 minute demo, dropping to about an hour of rehearsal on every reuse.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Immediate and large at the next talk: the demo block's duration becomes a constant, the failure surface goes to zero, and the speaker's attention moves from the keyboard to the room. Second-order effect within a talk or two — the narration itself improves, because the same clip can be re-narrated many times against a fixed picture, which is a rehearsal loop a live demo does not offer.


**needs_organiser_agreement**

yes, but narrowly: audio routing to the room PA if the clip carries sound (a separate cable and a separate test from video), the HDMI chain and adapter (BB4IT: cable is on the organiser's side, adapter flagged by email as PL-217), and an explicit note that the PDF sent to biuro@itwgorach.pl by 11.09 14:00 will not contain the demo video. Recording rights for the conference video are worth confirming for reuse, though the source clip is yours regardless.


**priority**

high — it is the technique that operationalises the already-made BB4IT demo decision, it hits three named gaps at once (demo_risk, timing, late_slot), and the remaining work before 12.09 is verification and narration rehearsal rather than construction.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

https://presentationpatterns.com/glossary/ (canonical definitions: 'Lipsync — record the interaction with the tool and play it back as part of the presentation'; 'Live on Tape — a recorded version of your entire presentation provided electronically' — the two are different patterns); https://www.informit.com/articles/article.aspx?p=1930512 (Presentation Patterns, ch. 'Demonstrations Versus Presentations' — Lipsync's editing-for-time and full-concentration narration argument, and overlaying deck decorations on the running video); https://speaking.io/prep/live-demos/ (Holman — embed the screencast in the deck so the speaker only narrates); https://utkusen.substack.com/p/dont-do-live-demos-do-live-looking (the concealed 'live-looking' asciinema variant, and why visible controls change audience perception); https://blog.gilliard.lol/2018/10/25/live-coding-tips.html (asciinema recordings as the standing backup, terminal legibility, prompt simplification); https://newsletter.posthog.com/p/how-to-demo (pre-load and cache content to eliminate dead time; enhanced screen-recording tools with zoom); https://github.com/marp-team/marp-cli (the `--html`, `--allow-local-files` and `--notes` flags that this implementation depends on)


---

## Closing after Q&A, not on it

> Split the ending in two — deliver the content close, then run Q&A, then take the microphone back for 45-60 seconds written and rehearsed in advance, so the last thing the room hears and the last thing on the recording is your sentence rather than whatever the final questioner happened to ask.

### What it is

- **category** — qa


**origin_author**  
<sub>Originating author, book, lab or community that named the method</sub>

Practitioner canon with no single author; the clearest statements are in Toastmasters' Q&A guidance ('never end your speech with Q&A'), the Buckley School of Public Speaking ('a savvy speaker tries not to let Q&A be the last word'), and Jerry Weissman's Topspin principle applied at session scale. The two mechanisms usually invoked come from Ebbinghaus and Glanzer & Cunitz (serial position) and from Kahneman, Fredrickson, Schreiber & Redelmeier (peak-end).


**origin_year**  
<sub>Year the method was named or popularised; approximate is fine</sub>

Serial position effect described by Ebbinghaus 1913, recency isolated by Glanzer & Cunitz 1966; peak-end rule Kahneman et al. 1993; 'never end on Q&A' as speaker-coaching orthodoxy from at least the 1990s


**talk_moment**

last 90 seconds — but written at the same time as the opening, because the two are a matched pair and the close is the one part of the talk most likely to be improvised away under time pressure

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

The structural problem is that a talk with a Q&A has two endings and most speakers only design one. The content close lands the message; then five minutes of other people's agendas run; then the session stops, usually by evaporation — a last answer trails off, the speaker says 'no to chyba tyle, dzieki', and that shapeless moment is the actual ending. Four mechanisms make the second close worth 45-60 seconds, and it is worth separating the ones that hold up from the ones that are usually cited. THE MECHANICAL ONES, which are the real argument. (1) The recording. A published talk's final frame is whatever happened last, and if that is a trailing answer to a narrow question from one attendee, then every future viewer's last impression is a stranger's edge case — plus, since audience questions are usually not on the audio track, the video literally ends with you answering something inaudible. This is not a psychological claim; it is a property of the artefact. (2) The call to action. Anything you want the room to do — scan the QR, connect on LinkedIn, find you at the coffee — has to be said at the moment people are deciding what to do next, which is the moment the session ends, not five minutes earlier. A CTA delivered before Q&A has been overwritten by the time anyone can act on it. (3) The applause cue. A room genuinely does not know when a Q&A has ended; a defined close is the signal, and without it the session dissolves rather than finishes. (4) Time control. A fixed 45-60 second block is a landing point you can steer toward, which is what lets you end a 14:50-15:20 slot at 15:19 rather than discovering you are three minutes over. THE PSYCHOLOGICAL ONES, which are weaker than they are usually presented. The recency effect is real in free recall of lists, but Glanzer and Cunitz showed the recency portion is precisely the part that disappears when a filled delay intervenes between presentation and recall — and a conference attendee walks out, talks to someone, and drives home before recalling anything, which is a filled delay. The peak-end rule is a genuine finding about short, mostly aversive experiences with defined boundaries, and applying it to a 30-minute talk is an extrapolation across duration, valence and setting. Both are plausible and neither is established for this case; the mechanical arguments carry the item on their own.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Write the close at the same time as the opening, not last. Both are short, both are fully scripted, both are the parts you will deliver under the most and the least adrenaline respectively, and both are the first things sacrificed if you write them late. 2. Keep it to 45-60 seconds, which is 110-150 words in Polish — write it as words and count them, because 'about a minute' improvised is always two. 3. Build it from four beats and no more. (a) One sentence closing the Q&A explicitly: 'Dobra, to tyle pytan.' (b) The message, restated in one sentence — not a summary of the talk, the single thing you want them to leave with, ideally the same sentence you used in the opening so the talk bookends. (c) One concrete next action, singular: the QR, the repo, the link, said aloud as well as shown. (d) A final line that is a sentence, not a logistics note — the last eight words are the ones that get clipped. 4. Never put 'thank you' as the final beat. It is a punctuation mark, not an ending, and it converts your last line into a formality. Thank them earlier if you want to, and end on the sentence. 5. Rehearse it separately from the talk, at least ten times, until it survives being tired — this is the block you will deliver in the worst cognitive state of the whole session, after the adrenaline has drained and a hard question has just used up your working memory. 6. Reserve the time physically. Set the cut for the Q&A at slot-minus-90-seconds, not slot-end, and treat that as immovable: cut a question, never the close. 7. Have a 20-second emergency version for the case where the Q&A overran anyway — message plus action, nothing else. 8. Put a slide behind it, and make it the one that stays up while the room leaves. 9. Do not take a question after you have started closing. If a hand goes up, acknowledge and defer: 'zlap mnie za chwile' — restarting Q&A after the close is the one move that guarantees the session ends shapelessly.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Every talk that is recorded, every talk with a call to action, and every talk with a Q&A block — which is essentially all conference formats. The value scales with the recording: a 25-minute BB4IT talk published to YouTube gets it entirely, while an internal client presentation that nobody films gets only the applause-cue and CTA benefits. It matters most in exactly the configuration on 2026-09-12: a last slot, where your close is also the last thing said from the stage all day, and where a shapeless ending leaves the whole conference dissolving rather than finishing. Least useful in a conversational workshop where there is no clean boundary between content and discussion, and where a formal 60-second close would be jarring — the AI Startup Builders 120-minute format needs a different, softer landing.

### Evidence


**evidence_level**

practitioner consensus for the practice, with two supporting laboratory findings that do not transfer cleanly. The convergence among speaker-coaching sources is unusually strong and unusually unanimous, which is worth something but is not evidence. The serial position and recency effects are robust controlled findings in free-recall paradigms (Ebbinghaus 1913; Glanzer & Cunitz 1966), and the recency component specifically is known to be eliminated by a filled delay — which is the condition that obtains for anyone recalling a talk more than a minute after leaving the room. The peak-end rule is a controlled finding (Kahneman et al. 1993, the cold-pressor study; Redelmeier & Kahneman's colonoscopy work) about brief, largely aversive experiences with clear boundaries and pronounced duration neglect; a 25-minute voluntary talk is outside the domain it was established on. The mechanical arguments — the recording ends where it ends, the CTA has to be said when people can act on it, the room needs an applause cue — require no psychological evidence at all and are the ones to lead with.


**myth_status**

sound practice with a wrong justification. The practice is right and close to universally recommended; the two justifications almost always attached to it are extrapolations. 'People remember the last thing best (recency effect)' invokes a result whose defining feature is that it vanishes under exactly the delay a conference imposes. 'The peak-end rule means your ending determines the whole memory' invokes a finding from 60-second cold-water immersions and colonoscopies, generalised across duration, valence and context without acknowledgment. Neither is a reason to abandon the practice; both are reasons to stop citing them on stage or in a note, because the honest justification is stronger anyway: the recording literally ends there, and it will end on a stranger's question if you let it.


**contested_claims**

(a) 'The recency effect means your last words are what they remember' — the cited mechanism does not survive a filled delay, which is the normal condition for a conference attendee; see Glanzer & Cunitz (1966). (b) 'Peak-end rule: the ending dominates the memory of the whole talk' — the rule is documented for short, bounded, mostly aversive experiences and is explicitly noted as applicable only where an experience has definite beginning and end periods; the transfer to a 25-minute talk is unestablished. (c) 'Always end with thank you' — near-universal in practice and criticised across speaker-coaching sources as converting the ending into a formality; note this is a stylistic consensus, not a finding. (d) 'Take Q&A at the end' versus 'take Q&A, then close' — the second is what this item recommends and is itself the resolution of a real disagreement: some sources place Q&A before the conclusion entirely, some after with a re-close. Functionally these are the same design, and the naming ('Q&A before your final remarks') matters less than reserving the last 90 seconds. (e) 'The last slide should be Questions?' — a widespread default that wastes the most-viewed slide of the deck; the slide that stays up during and after Q&A should carry the message, the QR and your handle.


**key_sources**

Glanzer, M. & Cunitz, A. R. (1966), 'Two storage mechanisms in free recall', Journal of Verbal Learning and Verbal Behavior — the canonical demonstration that the recency portion of the serial position curve is eliminated by a filled delay between presentation and recall; the finding that undercuts the usual justification for this item and is the reason to prefer the mechanical one. || Kahneman, D., Fredrickson, B. L., Schreiber, C. A. & Redelmeier, D. A. (1993), 'When more pain is preferred to less: adding a better end', Psychological Science — the cold-pressor study establishing the peak-end rule and duration neglect; read for what it does and does not license, since it concerns 60-90 second aversive episodes. || Toastmasters International, 'Handling the Q&A Session With Confidence' (2021) — the practitioner rule that a speech should never end with Q&A, and the recommendation to close after questions. || Buckley School of Public Speaking, 'Ending Well' — 'a savvy speaker tries not to let Q&A be the last word… after taking questions, reassert yourself and your main ideas with a brief close, even if you have already closed out the presentation', plus the specific failure mode of ending on 'well, I guess that's it' after a hard question. || Duarte on ending with the new bliss rather than the call to action — relevant to what the final sentence should contain, and a useful corrective to closes that are pure logistics.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

1. The whole item rests on practitioner agreement rather than evidence, and the two studies usually cited for it do not support it as directly as everyone claims — an honest note should say so rather than borrowing authority. 2. A second close can feel like a second ending, and a room that has mentally finished will resent being restarted; this is a real cost at 15:19 on a Friday and it is the reason for the hard 60-second ceiling and the 20-second emergency version. 3. The 45-60 seconds is taken from somewhere, and in a 5-minute Q&A it is roughly one question — for a room that is genuinely engaged and asking good questions, taking one more question may be worth more than a rehearsed paragraph. 4. Duration neglect cuts both ways: if the peak-end rule really applied, a short flat close would be as good as a crafted one, and the effort would be misallocated. 5. In a conference where the moderator handles the wrap and the applause, an additional speaker close can collide with theirs, which is a coordination problem rather than a design one but produces the same awkwardness.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

The design that fits a 25+5 slot: content close at roughly minute 24 (message, one action, land it), Q&A from 25 to 29, then reclaim at 29:00 for 45-60 seconds and finish at 30:00. Two things make this work in practice. First, the content close and the reclaim close must not be the same words — the reclaim is shorter, references something from the Q&A if anything good came up ('to pytanie o koszty jest wlasciwie sednem'), and lands on the same final sentence. Repeating the full content close verbatim reads as a loop. Second, the clock discipline is what actually delivers it: the Q&A cut is at 29:00 regardless of how many hands are up, and the sentence that enforces it is prepared — 'ostatnie pytanie' said before taking the last one, so the room knows the shape. Under the 85 percent rule, a 25-minute talk rehearsed to 21 minutes leaves genuine slack, and this is the item that slack is for. Since the same deck feeds carousels and clips, the reclaim close should also be written to stand alone as a 45-second video: no 'as I showed earlier', no pronouns without referents.


**time_budget_min**

0.75-1.0 minutes of stage time, taken from the Q&A window rather than from the 25 minutes of content — the content close is separate and already budgeted. Emergency version: 0.3 minutes. Preparation: 30-45 minutes to write and 30 minutes of cumulative rehearsal, which is the highest ratio of rehearsal minutes to stage minutes anywhere in the talk and is correct, because it is the block delivered in the worst cognitive state.


**audience_change**

The room leaves with one sentence rather than with the residue of a stranger's question, and it leaves knowing what to do next — which is the difference between a QR code that gets scanned by four people and one that gets scanned by forty, because the scanning decision is made in the twenty seconds after the session ends. Second-order: the room knows the session is over, so the applause happens and the transition is clean, which matters disproportionately in a closing slot where your ending is also the conference's. For the recorded audience, which over time is the larger one, the change is categorical: the video ends on a statement instead of trailing off, which is what makes it usable as a clip and shareable as a whole.


**application_pl_talk**

Structure transfers unchanged; three Polish specifics. (1) 'Dziekuje za uwage' is the default Polish talk ending and functions almost as a full stop — which is exactly the problem, because it is a formality that overwrites whatever came before it. Polish audiences expect it, so removing it entirely can read as abrupt; the workable compromise is to thank them one beat before the final sentence ('Dziekuje za uwage - a na koniec jedno zdanie'), so the gratitude is delivered and the last words are still yours. (2) Polish closes tend toward summary and away from statement; the strong Polish ending is a short declarative sentence, present tense, no hedging — 'To nie jest technologia przyszlosci, to jest decyzja architektoniczna, ktora podejmujecie w tym kwartale' works, and 'Mam nadzieje, ze udalo mi sie pokazac, ze...' does not, because it hedges the claim at the exact moment you should be making it. (3) At a closing slot, part of the room will already be standing. Polish conference etiquette is fairly forgiving about this, but the close must be short enough to finish before the movement becomes noise — 45 seconds, not 90 — and it helps to name it so people sit back down for it: 'jeszcze czterdziesci sekund i konczymy'.


**pl_language_notes**

Phrases to avoid as the final beat: 'Dziekuje za uwage' alone (formality, not ending); 'To by bylo na tyle' (reads as running out of material); 'Mam nadzieje, ze sie podobalo' (asks for approval and hedges the content); 'Jesli macie jeszcze jakies pytania, to...' (reopens what you just closed); 'Jakies pytania? Nie? To dziekuje' — the exact evaporation this item exists to prevent. Ready stems, in order of the four beats: closing the Q&A — 'Dobra, to tyle pytan', 'Ostatnie pytanie' (said before taking it), 'Reszte zbieram przy kawie'; restating the message — 'Jesli macie zapamietac jedna rzecz z tych dwudziestu piatu minut, to te:', 'Wracam do tego, od czego zaczalem:'; the action — 'Kod QR jest na ekranie i zostaje tam, dopoki nie zgasna swiatla; adres to X, powtarzam: X'; the final line — a declarative sentence in the present tense. Calques to avoid: 'na zakonczenie chcialbym podsumowac' is a written-register construction that sounds like a report read aloud; 'take-away' as a noun in Polish speech ('jaki jest wasz take-away') is jargon that will land badly in a mixed room; 'call to action' should be spoken as 'co z tym zrobic'. Declension for the technical terms likely to appear in the final sentence: 'agentow', 'w produkcji', 'do repozytorium', 'na LinkedInie'. Where a translated method sounds artificial: the American inspirational close ('So go out there and build something amazing') has no Polish equivalent that does not sound like a motivational trainer; the Polish equivalent of inspiration is specificity, so end on a concrete claim rather than an exhortation.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

reuse — the primary and most direct fit, and the one that distinguishes this item from generic closing advice. One deck is routinely mined for carousels, clips and posts, and the reclaim close is the single most reusable 45 seconds the talk produces: it is self-contained, it states the message without setup, it contains the call to action, and because it is written in advance it can be written to work as a standalone video from the start. Without it, the last thing on the recording is an answer to an inaudible question, which is unclippable and makes the full video weaker to share. Secondary fit on qa: it converts the Q&A from something that ends the talk into something the talk contains, which is what allows the earlier Q&A items — the caps, the paraphrasing, the seeding — to be run on a clock rather than open-endedly. Also timing: a fixed-length terminal block is a landing target, and the 85-percent rehearsal figure only pays off if there is something specific to land on. And late_slot, in a way specific to 2026-09-12: as the last talk of the day, this close is the last thing said from that stage, and a shapeless ending leaves the whole conference without a period at the end of its sentence — a well-delivered 45 seconds there is disproportionately memorable precisely because everyone else that day ended on 'jakies pytania? nie? dziekuje'.


**minimal_2h_version**

Forty minutes, and this is the item most worth spending deadline time on because it is fully written rather than improvised, so preparation converts directly into performance. (1) 15 min: write it, 110-150 Polish words, four beats, counted not estimated. Take the message sentence verbatim from the opening if the opening is already written — the bookend is free and it is the single cheapest structural improvement available. (2) 5 min: write the 20-second emergency version, message plus action, nothing else. (3) 15 min: say the full version out loud ten times, standing, on a timer, and cut whatever pushes past 60 seconds. Ten repetitions is not excessive here; this is the block you deliver with the least cognitive capacity available, and it needs to be closer to recitation than to composition. (4) 3 min: write the two enforcement sentences on the index card — 'ostatnie pytanie' and the Q&A-cut time in wall-clock terms (for a 14:50 start, the cut is 15:19). (5) 2 min: check the last slide is the one you want frozen on screen while the room leaves, which for this deck means the QR and the message, not the word 'Pytania?'. Do not redesign slides in the last two hours; if the closing slide is wrong, just do not advance to it and close over the previous one.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

For BB4IT, 14:50-15:20, delivered at 15:19 after the Q&A cut. 'Dobra, to tyle pytan - reszte zbieram przy kawie, jestem tu do konca. [beat] Jesli macie zapamietac jedna rzecz z tego, co dzis pokazalem, to nie to, ze agenci dzialaja, bo to slyszeliscie to dzis juz nie raz. To ta: agent, ktory podejmuje decyzje, jest projektem badawczym, a agent, ktory przygotowuje decyzje i czeka na klikniecie, jest systemem produkcyjnym - i to jest jedna linia w architekturze, nie roznica filozoficzna. [beat] Kod QR jest na ekranie i zostaje tam, dopoki nie zgasna swiatla: sa tam slajdy, repozytorium z tym pipeline'em i moj LinkedIn. Adres to 200iq.pl/bb4it - powtarzam, 200iq.pl/bb4it. [beat] Dziekuje za uwage - i za to, ze zostaliscie do konca dnia. [beat, quieter] Zbudujcie ten krok z akceptacja, zanim zbudujecie agenta.' That is 118 words, about 48 seconds at conference pace. Four things it does deliberately: it acknowledges the saturated late slot rather than ignoring it ('slyszeliscie to dzis juz nie raz'), which converts the room's fatigue into a shared joke instead of an obstacle; it states the message as a claim rather than a summary; it says the URL aloud twice for the people who will not scan and for the recording, where a QR is useless; and it puts the thank-you one beat before the end so the last eight words are a sentence. EMERGENCY 20-SECOND VERSION, for a Q&A that ran to 15:19: 'Jedno zdanie na koniec: agent, ktory przygotowuje decyzje, jest produkcyjny; agent, ktory ja podejmuje, jest projektem badawczym. QR na ekranie, 200iq.pl/bb4it. Dzieki, ze zostaliscie.'

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

Three things train separately and only one of them is writing. (1) The writing itself is a craft skill that improves by collecting: keep a file of the final sentences of talks that landed, your own and other people's, and notice that almost all of them are short declarative claims rather than summaries or exhortations. Over a few months this makes the drafting fast. (2) Delivery under depletion is the actual bottleneck, and it needs to be trained in the depleted state: rehearse the close at the end of a full run-through, never fresh, because a close rehearsed cold and delivered tired is a different task. Ten repetitions after a full run beats fifty repetitions standalone. (3) Clock discipline is a separate skill and it is the one that fails on stage — knowing the wall-clock time at which Q&A stops, and stopping it there while a hand is up. Train it in any meeting you run: pick an end time, announce 'last question' 90 seconds before it, and hold the line. It is socially uncomfortable exactly once. Over several talks, the compounding move is to keep the same close across a signature talk and sharpen one sentence each time, rather than rewriting it — the close is the part of a talk that most rewards being reused and polished rather than regenerated.


**drill**

The depleted-close drill, 15 minutes. Input: the written 45-60 second close, a timer, a phone recording video, and — this is the load-bearing part — a state of genuine cognitive fatigue, so run it immediately after a full timed run-through or at the end of a working day, never first thing. Action: (1) 2 min — read the close once, then put the paper face down and do not look at it again. (2) 8 min — deliver it to camera from memory, standing, four times, with a 60-second timer visible. Between takes, do 30 seconds of something demanding and unrelated (mental arithmetic, or answer a hard question from the red-team card out loud) to simulate the state you will actually be in after Q&A. (3) 5 min — review with four binary checks per take: did it come in at 45-60 seconds; were the last eight words the written ones or did you improvise a landing; did you say the URL aloud; did it end on a sentence rather than on 'dziekuje'. Observable output: four scores out of four, and specifically the identity of the sentence you dropped when tired — which is almost always the call to action, and which tells you to move it earlier in the block.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

The 45-60 second block as a whole, because it is short enough to be a single unit and its whole value lies in being delivered intact. The one sub-unit worth isolating is the final sentence — eight to fifteen words, rehearsed to the point of being unlosable, since it is the one that gets clipped and the one most likely to be improvised away under fatigue.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

Writing: 30-45 minutes for a first version, 10-15 to adapt an existing close to a new talk. Rehearsal: 30 minutes cumulative, spread across the week rather than massed, and always at the end of a run-through rather than fresh. On the day: 45-60 seconds. Amortised across a signature talk delivered several times, the marginal cost approaches zero while the quality keeps rising, which makes it one of the better long-term investments in this research set.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

In the room: whether applause starts cleanly on your last word or straggles in after a confused pause — the straggle means the close did not read as an ending. Whether people stay seated for the whole 45 seconds or start moving at second fifteen; movement means it was too long or started too late. On the recording, which is the loop that matters: watch the last 60 seconds and ask whether it works as a standalone clip with no preceding context, because that is precisely how it will be used. Also check that the final frame is the slide you intended and not a black screen or a presenter-view artefact. Delayed and measurable: QR scans or short-link hits clustered in the ten minutes after your slot, which is a direct readout on whether the call to action was delivered at a moment anyone could act on it. Slowest: whether people quote your final sentence back at you in the hallway or on LinkedIn, which is the only real test of whether it was a sentence worth writing.


**measurable_kpi**

(1) Close duration in seconds off the recording; target 45-60, and any take over 75 means it was improvised. (2) Wall-clock finish time versus slot end; target within 60 seconds under, never over. (3) Whether the last eight words on the recording match the written script — binary, and the single most diagnostic number here, because it is the thing that silently fails. (4) Short-link or QR hits in the 15 minutes following the slot, against the room size — this is the closest thing to a conversion metric a talk has. (5) Q&A questions cut in order to protect the close; tracking this deliberately makes the trade visible rather than accidental. (6) Whether the final 45 seconds shipped as a clip in the reuse workflow without needing a re-record — target yes, every time.

### Online and recorded


**online_variant**

More important and harder. More important because online endings are structurally worse: there is no applause, no room signal, and the session frequently ends with a host talking over the speaker or a screen share collapsing, so without a defined close the recording ends on someone saying 'okay, I think that's everyone, thanks all'. Harder because you cannot see whether anyone is still there, and because the temptation to keep answering chat questions indefinitely is much stronger than in a room. Adjustments: agree the handover with the host explicitly before the session — you close, then they wrap, in that order, and say so; keep the close to 30-40 seconds because online attention at the end of a webinar is worse than in a room; put the link in the chat as you say it, since online there is no QR and no hallway; and end while sharing the closing slide rather than after stopping the share, because the transition is often the last thing recorded. For a Pionierzy AI-style webinar, also decide in advance whether the recording is cut at your close or at the host's, since that determines which of you owns the final sentence.


**recorded_variant**

This is the entire justification for the item, so the recorded variant is the primary one rather than an adaptation. Four consequences. (1) The close must be self-contained: no 'as I showed earlier', no pronouns without referents, no dependence on a slide that will not be in frame. Write it so a viewer who joins at that moment understands the claim. (2) Say every URL aloud and repeat it, because a QR code is worthless in a video watched on a phone and unreadable in most conference recordings anyway. (3) Whatever slide is on screen during the close is the thumbnail candidate and the frame people freeze on; make it the message and the link, never the word 'Pytania?'. (4) Because audience questions are typically absent from the recording's audio, a talk without a reclaim close ends with the speaker answering silence — the single most common defect in published conference video, and one that costs nothing to fix. Worth agreeing with the organiser: whether the Q&A is included in the published cut at all, and whether the recording stops at the close or runs into the moderator's wrap. If the Q&A is cut from the published video, the reclaim close becomes the actual ending of the published talk, which raises its stakes further.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

The Evaporation — 'jakies pytania? nie? no to dziekuje', which is not an ending, it is a session running out; the default this item exists to replace. Thank You As The Ending — a formality occupying the position reserved for a statement, which is the most common version and the easiest to fix. The Repeat Close — delivering the full content close a second time verbatim, which reads as a loop and makes the talk feel longer than it was. The Overrun Close — a rehearsed 60 seconds that expands to three minutes because you are relieved and the pressure has dropped, which turns a strong ending into the reason the moderator has to interrupt you. The Reopened Floor — 'jeszcze jakies pytania zanim skoncze?' asked after you have started closing, which discards the ending you just began. The Logistics Close — a final block that is entirely URLs and housekeeping with no sentence, which is technically a close and rhetorically nothing. The Apology Close — 'przepraszam, ze tak szybko, mialem wiecej materialu', which retroactively frames the whole talk as incomplete. And the deck-level version: making 'Pytania?' the last slide, so the most-viewed frame of the presentation carries no message and no link.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Writing the close last, which means writing it worst and rehearsing it least. Not counting the words, so 'about a minute' is two. Rehearsing it fresh rather than depleted, so the version you trained is not the version you deliver. Failing to set the Q&A cut in wall-clock terms, so the decision to stop taking questions gets made emotionally at the moment a hand is up. Taking one more question after announcing the last one, which destroys the enforcement mechanism for every subsequent talk you give in that room. Dropping the call to action when tired — the most frequently lost beat, and the reason to place it third rather than last. Saying a URL once and only showing a QR, which loses everyone watching the recording. Leaving 'Pytania?' on screen through the close. Assuming the moderator's wrap counts as your ending; it does not, and it is theirs.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

A conversational workshop or a small-group session where content and discussion have no clean boundary — a formal 60-second close after two hours of back-and-forth with the AI Startup Builders cohort would read as a switch into presenting mode at exactly the wrong moment; there, the softer version is a two-sentence landing. A session where the moderator owns the wrap and has said so — then your close goes before their wrap, shortened, or it collides. A slot that has already overrun badly through no fault of yours, where the generous move is the 20-second emergency version rather than the full block. And a genuinely hot Q&A where the room is engaged and questions are good: taking one more question may be worth more than the paragraph, and the correct response is the emergency version rather than skipping the close entirely, because some ending is always better than evaporation.


**fallback_if_it_fails**

If the Q&A has eaten the time, run the 20-second version — message and link, nothing else — rather than skipping the close, because the difference between 20 seconds of your sentence and none is larger than the difference between 20 seconds and 60. If the moderator cuts you off before you close, take the six seconds you have: 'Jedno zdanie: [message]. QR na ekranie.' If the projector or laptop has died and there is no slide behind you, say the link twice and slowly and say that it will be in the event's channel afterwards — then actually post it. If you lose the script mid-close, do not restart; go straight to the final sentence, which is the one you rehearsed to the point of being unlosable, and land on it. If a hand goes up as you begin closing, do not take it: 'zlap mnie za chwile, jestem tu' and continue — reopening is worse than the small rudeness of not taking it. If the room has started packing and the close is being talked over, cut to the final sentence and deliver it louder rather than fighting for the whole block.


**works_signal**

Landing: applause starts on the last word rather than after a pause, which is the clearest available signal that the room understood it was an ending. People stay seated through the whole block. Phones come up during the QR beat — visible, countable, and a direct indicator that the call to action registered. Somebody laughs at the acknowledgment of the late slot, which means the room is still with you at 15:19. Failing: movement toward the door starting before you finish, meaning too long or started too late; a confused two-second silence before applause, meaning it did not read as an ending; the moderator starting to talk over you, meaning you overran; nobody reaching for a phone during the link beat, meaning the action was buried or said too fast. On the recording, the diagnostic is simpler: play the last 60 seconds to someone who did not see the talk and see whether they can state what you wanted them to do.


**dependencies_conflicts**

Prerequisites: scripted-opening, because the close's message sentence should be the opening's message sentence and the two are written as a pair — writing either alone loses the bookend for free; onstage-time-control, because the close only survives if the Q&A cut is enforced on a clock; qa-answer-protocol and the answer caps, since 40-second answers are what leave 90 seconds at the end and 90-second answers are not. Depends on and completes seeding-the-first-question: in the silent-room case the seed and the close are the same 90 seconds of prepared material and should be rehearsed as one sequence. Feeds: talk-to-content-reuse directly, since the close is the most reusable clip the talk produces; resource-slide-qr, which is the visual half of the call-to-action beat. Conflicts: with the Q&A time budget, unavoidably — the close costs roughly one question, and the resolution is to decide in advance that questions are cut and the close is not; with a moderator who owns the wrap, which is a coordination conflict to settle before going on stage rather than on it; and mildly with the reading-the-room instinct, since an engaged room tempts you to keep taking questions past the cut, which is exactly the moment the discipline is needed. No conflict with the Marp/PDF constraint — the closing slide is static by design.

### Tooling


**tool_support**

A word counter, because 110-150 Polish words is a checkable target and 'about a minute' is not. A timer visible during rehearsal, and a stopwatch or a watch on stage — the wall-clock cut time is the enforcement mechanism and it needs to be readable without turning around to look at a confidence monitor. Phone video for the depleted-close drill. A short branded link (200iq.pl/… style) rather than a raw URL, because it has to be speakable twice and memorable once, and because the click count on it is the closest thing to a conversion metric the talk has — which also makes it a link analytics tool, not just a convenience. The index card carries the two enforcement sentences and the cut time. For the reuse half: whatever cuts the clips should be told in advance that the last 45 seconds is a deliberate standalone unit.


**survives_pdf_export**

yes. The closing slide is deliberately static — heading, QR image, text, no fragments — so it exports to PDF byte-for-byte equivalent in appearance and works identically whether you are driving the HTML deck, the PDF, or someone else's laptop. This is a deliberate design choice given the known Marp constraint that fragments and animations exist only in the HTML export: the single most important slide in the deck is the one that must never depend on the export path. The written close carried in presenter notes does not survive to PDF, which is why the index card exists.

### Effort and payoff


**prep_effort**  
<sub>low | medium | high — one-off setup cost</sub>

low to medium — 30-45 minutes to write, 30 minutes of rehearsal spread across the week, 10 minutes to build the slide. Medium rather than low only because the rehearsal has to be done in the depleted state to be worth anything, which makes it harder to schedule than it is to execute. Reusable almost entirely across talks on the same material, so the second and subsequent uses cost 10-15 minutes.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Immediate and visible on the first talk: the session ends instead of stopping, the applause is clean, and the recording has a proper final frame. The measurable effect shows up in link clicks, which should cluster sharply in the ten minutes after the slot rather than trickling. The reuse effect appears within days — a 45-second self-contained close is the easiest clip the workflow will ever get, requiring no editing and no context. The slowest and largest effect is on the talk itself: knowing there is a fixed, rehearsed landing point changes how the Q&A is run, because you stop treating the end of the slot as something that happens to you.


**needs_organiser_agreement**

partly yes, and this is worth thirty seconds of conversation before going on stage at BB4IT. (1) Who wraps the session — if the moderator has a closing routine, establish that you close first and they wrap after, rather than discovering the collision live; in a final slot the moderator may also be closing the whole conference, which makes the ordering more important, not less. (2) The hard end time and whether the schedule after you is empty — a last slot often has slack that earlier slots do not, and knowing whether 15:22 is acceptable changes how tightly you have to cut the Q&A. (3) What the time signals are and where they come from, since the close depends on knowing the wall-clock time without visibly checking. (4) For the reuse half: recording rights and whether the Q&A is in the published cut, which determines whether the close is the end of the video or the middle of it.


**priority**

high. It is cheap, fully scriptable, and it addresses two named gaps at once — reuse directly, since it manufactures the single most usable clip the talk produces, and timing, since a fixed terminal block is what a rehearsed-to-85-percent talk lands on. It is also the item most likely to be skipped precisely because it lives at the end, which is where preparation runs out, and skipping it is what produces the default outcome of a recording that ends on a stranger's inaudible question. For 2026-09-12 specifically it is worth doing even in the 40-minute deadline version, because the slot is last, the close is the conference's last words as well as yours, and the delta between a prepared 45 seconds and an evaporated ending is larger there than anywhere else in the day.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

- https://www.toastmasters.org/magazine/magazine-issues/2021/mar/handling-the-qanda-session-with-confidence — Toastmasters: never end a speech with Q&A; close after questions so the last words are yours
- https://www.buckleyschool.com/magazine/articles/ending-well-tips-for-concluding-presentations/ — 'a savvy speaker tries not to let Q&A be the last word… after taking questions, reassert yourself and your main ideas with a brief close, even if you have already closed out the presentation'
- https://www.simplypsychology.org/primacy-recency.html — Glanzer & Cunitz (1966) and the serial position curve; specifically the finding that the recency portion is eliminated by a filled delay, which is the caveat that undercuts the usual justification for this item
- https://en.wikipedia.org/wiki/Serial-position_effect — the effect, its origin with Ebbinghaus (1913), and the conditions under which recency holds and fails
- https://www.researchgate.net/publication/5246508_Evaluations_of_pleasurable_experiences_The_peak-end_rule — the peak-end rule literature, for what it does and does not license
- https://en.wikipedia.org/wiki/Peak%E2%80%93end_rule — Kahneman, Fredrickson, Schreiber & Redelmeier (1993) cold-pressor study, duration neglect, and the stated limitation that the rule applies to experiences with definite beginning and end periods
- https://thedecisionlab.com/biases/peak-end-rule — accessible summary including the scope caveats (short, bounded, largely aversive experiences)
- https://www.duarte.com/resources/talks/the-secret-structure-of-great-talks/ — Duarte on ending with the new bliss rather than with the call to action; guidance on what the final sentence should contain
- https://www.mentimeter.com/blog/meetings/ways-to-end-a-presentation-and-tools — practical closing patterns, including keeping a holding slide up through Q&A rather than ending the deck on 'Questions?'
- https://pumble.com/blog/how-to-end-presentation/ — closing phrase patterns and the case against 'thank you' as the final beat
- https://storyfiner.com/how-to-end-a-presentation-nicely/ — the reclaim-the-floor structure: Q&A before final remarks so the speaker retains the last word
- https://www.informit.com/store/in-the-line-of-fire-9780136933557 — Weissman, In the Line of Fire; Topspin as the principle of returning every exchange to what the audience needs to hear, applied here at session scale
- https://cezarywalenciuk.pl/blog/speech/8-porad-na-odpowiadanie-na-pytania-od-publicznosci-zdobadz-szacunek-pora-na-pytania — Polish practitioner list, including the 'a teraz, zanim skoncze, czy sa jakies pytania?' construction that places Q&A before the close

### Not established by this research

- `marp_implementation`


---

## Answer protocol and paraphrase

> Run every audience question through the same four moves — hear it, restate it in your own words, answer one thing, close the loop — so the paraphrase buys you three seconds of thinking time, puts the question on the recording's audio track, and lets you own the frame instead of inheriting the asker's.

### What it is

- **category** — qa


**origin_author**  
<sub>Originating author, book, lab or community that named the method</sub>

Jerry Weissman (Buffer / Roman Column / Topspin, Power Presentations) is the closest named origin; the four-step Listen-Acknowledge-Answer-Confirm framing is generic presentation-training canon (DiSC/Wiley facilitator materials, ThinkSCIENCE, The Speaker Lab). The empirical strand is Carl Rogers' reflective listening, tested by Harry Weger Jr. and colleagues.


**origin_year**  
<sub>Year the method was named or popularised; approximate is fine</sub>

Rogers' reflective listening 1940s-1950s; Weissman's Buffer/Roman Column/Topspin published 2005 (In the Line of Fire, 3rd ed. 2021); Weger's paraphrase experiment 2010


**talk_moment**

Q&A — but the paraphrase stems must be rehearsed before arriving, and the same move is reused whenever a question is shouted from the floor during the middle blocks

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

Four distinct mechanisms stack in one move, and they are worth separating because only some of them are load-bearing. (1) Airtime: a spoken question takes 10-25 seconds; a paraphrase gives your brain that long again to retrieve and structure an answer, which is why it beats standing in silence or filling with 'that's a great question'. (2) Audio channel: at a conference the speaker is miked and the audience usually is not, so an unrepeated question is simply absent from the recording — the viewer hears an answer to nothing. (3) Frame ownership: a question arrives with the asker's framing baked in ('why does your agent leak our data to OpenAI?'). Restating it as the neutral underlying issue ('the question is where the data physically goes and who can read it') strips the loaded premise without visibly refusing to answer, because you are quoting yourself, not contradicting them. This is Weissman's Roman Column — you find the one structural issue holding the question up and answer that. (4) Scope control: a three-clause rambling question becomes one answerable question, and the confirm step ends the exchange so the asker does not treat your answer as the opening of a dialogue. Note that the mechanism most often cited — 'paraphrasing makes the asker feel heard' — is the weakest one empirically (see myth_status).


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Stop moving. Face the asker, hands still, do not start formulating your answer while they are talking — the failure mode is answering the question you predicted, not the one asked. 2. Let them finish. Do not interrupt even a three-clause question; if it is still going after ~30 seconds, cut in with 'and the question is?' (in Polish: 'i pytanie brzmi?'). 3. If you did not hear it, say so as a hearing problem, not a comprehension problem: 'I couldn't hear that, louder please' — these are different failures and conflating them makes you look confused. 4. Paraphrase into the microphone, addressed to the room, not the asker: 'So the question is whether X'. One sentence. Neutral nouns. Strip the loaded adjective if there was one. 5. Micro-check only when the paraphrase changed the framing: half a beat of eye contact with the asker, not a spoken 'is that right?' every time. 6. Answer ONE thing. Headline first, then at most two supporting sentences, then stop. A conference answer is 30-60 seconds; the honest cap is one breath's worth of structure. 7. Optionally add a Topspin — one clause tying the answer back to the talk's message ('which is exactly why the architecture puts the redaction step before the model call'). 8. Close the loop by moving, not by asking: break eye contact, step toward the centre, take the next hand. Reserve the spoken 'does that answer it?' for the one case where you genuinely reframed and might have missed. 9. Park it if it is deep or narrow: 'that one deserves more than a minute — find me by the coffee'.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Every question in every room where you are miked and the audience is not, which is every conference talk that gets recorded — so, default-on for BB4IT. Highest value in a short Q&A slot (5 minutes, roughly 4-5 questions) where a single rambling question can eat 20% of the window, and in any room where a question is likely to arrive with a hostile or false premise. Lowest value in a small workshop of 10-15 people with no recording, where a full paraphrase every time sounds like a trainer and slows a conversation that would be better off fast.

### Evidence


**evidence_level**

Mixed, and the split matters. The mechanical claims (audience cannot hear an unmiked question; unrepeated questions are missing from conference recordings) are practitioner consensus and directly verifiable — check any conference video. The 'buys thinking time' claim is practitioner consensus with an obvious physical basis. The 'paraphrasing makes the asker feel understood' claim is a controlled study finding that points the other way (Weger et al. 2010). Weissman's Buffer/Roman Column/Topspin is a single-expert claim from a coach with a large but uncontrolled client sample.


**myth_status**

sound practice with a wrong justification. The practice is right and should be default-on; the usual justification ('it makes people feel heard / demonstrates active listening') is the part the evidence does not support. Weger, Castle and Emmett (2010) ran 180 undergraduates through peer interviews with either paraphrased reflections or simple acknowledgments and found paraphrasing raised the listener's social attractiveness but produced no significant increase in the speaker's conversational satisfaction or feeling of being understood. Keep the practice; justify it with the microphone, the recording, the thinking time and frame control, not with pop active-listening.


**contested_claims**

(a) 'Repeat the question so the asker feels heard' — not supported; see Weger et al. 2010, and the broader observation in the listening literature that active listening has decent evidence for subjective emotional-support outcomes and thin evidence for actual comprehension gains. (b) 'Always say that's a good question' — actively criticised: it reads as stalling, it is a tell that you were stumped, and it hides the question from listeners who did not hear it (Applause Inc., 'Six Reasons to Avoid That's a Good Question'). Notably, the popular Polish list by Cezary Walenciuk recommends the exact opposite ('a to dobre pytanie'), so this one is genuinely contested and cannot be presented as settled. (c) 'Always end with does that answer your question?' — widely taught, but it hands the floor back to the asker and invites a follow-up you have no time for; treat it as conditional, not routine. (d) 'Paraphrase every question' — Weissman's own framing is that the Buffer is for hostile or unclear questions, not a universal ritual; the universal case is the microphone, not the psychology.


**key_sources**

Weger, H. Jr., Castle, G. R., & Emmett, M. C. (2010), 'Active Listening in Peer Interviews: The Influence of Message Paraphrasing on Perceptions of Listening Skill', International Journal of Listening 24(1) — 180 participants; paraphrase raised social attractiveness of the listener but NOT conversational satisfaction or perceived understanding; this is the finding that reclassifies the item. || Weissman, J., 'In the Line of Fire: How to Handle Tough Questions...When It Counts' (2005; 3rd ed. Pearson 2021) — the Buffer (restate the key issue), the Roman Column (find the single structural issue the question rests on), the Topspin (return every answer to what the audience needs to hear); Weissman explicitly positions the Buffer as the tool for hostile questions. || ThinkSCIENCE, 'How to handle difficult Q&A moments' — a six-scenario phrase protocol that separates 'I didn't hear' from 'I didn't understand', gives explicit thinking-time and tentative-answer stems, and is written for non-native English speakers at international conferences, which makes it the closest fit to a Polish speaker's mechanics.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

1. The interpersonal payoff is smaller than the training industry claims (Weger 2010). 2. Over-paraphrasing is legible as media training to a technical audience — engineers recognise the ABC bridging move (Acknowledge, Bridge, Communicate) from PR interviews and read it as spin; a room of architects and tech leads is exactly the room where 'so what you're really asking is...' can land as evasion. 3. The Topspin is the most dangerous step: routinely bending every answer back to your message is bridging, and bridging away from a question the room wanted answered costs more credibility than a plain 'I don't know'. 4. In a 5-minute Q&A, 5-8 seconds of paraphrase across five questions is ~30-40 seconds, roughly one whole extra question you did not take. 5. Paraphrase cannot rescue an answer you do not have; it only delays the moment.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

It lives entirely in the 5-minute Q&A block after the 25 minutes, so it costs zero content time — but it must be prepared inside the talk, not after it. Two hooks in the deck: (a) announce the question policy in the first 90 seconds ('questions at the end, I'll repeat each one for the recording') so nobody interrupts the middle blocks and the repetition later looks like protocol rather than stalling; (b) keep the resource/closing slide up during Q&A rather than a black screen, so the room has something to read while you think and the QR gets five more minutes of exposure. Answers are capped at 45 seconds by decision, not by feel — five questions at 45 seconds plus 8 seconds of paraphrase each is 4.4 minutes, which is the whole slot.


**time_budget_min**

0 minutes of the 25-minute content slot. Inside the separate 5-minute Q&A: ~0.1 min (5-8 s) per question for the paraphrase, ~0.5-0.7 min total across the slot. The one line announcing the question policy costs ~10 seconds of the opening.


**audience_change**

The room can follow the Q&A instead of hearing half of it — every viewer of the recording gets both the question and the answer, and the people in row 15 who could not hear the question in row 2 stay in the conversation. Second-order: the asker with a loaded premise does not get their framing entered into the record unchallenged, so the room leaves with your framing of the sensitive-data problem rather than theirs.


**application_pl_talk**

The structure transfers unchanged; the phrases must be rebuilt, because literal translations of the English stems sound like a dubbed training video. Three things are specifically Polish. (1) Polish conference questions are often prefaced with a long personal context ('u nas w firmie mamy taki przypadek, ze...') before any question appears — so the 'and the question is?' cut-in ('i pytanie brzmi?') is needed more often than in English-language rooms, and it is socially acceptable if delivered warmly. (2) 'To dobre pytanie' is even more of a tic in Polish than 'great question' is in English, and Polish practitioner advice is split on it — Walenciuk's widely-read list actively recommends it as a respect marker. The safe resolution: use it at most once per session and only when you mean it; default to 'Dziekuje za to pytanie' or straight to the paraphrase. (3) The paraphrase stem itself: 'Czyli pytanie brzmi, czy...' or 'Jesli dobrze rozumiem, pytanie jest o to, gdzie...' — both are natural Polish. 'Pozwol, ze sparafrazuje' is not; nobody says that out loud.


**pl_language_notes**

Calques to avoid: 'adresowac pytanie' (from 'address the question') — Polish is 'odniesc sie do pytania'; 'czy to odpowiada na twoje pytanie?' is a stiff calque of the English check — use 'Czy o to Ci chodzilo?'; 'dobre pytanie' repeated is the Polish equivalent of a filler word. Declension of English technical terms in a Polish sentence, which you will need in exactly these answers: 'do LLM-a', 'w LLM-ach', 'promptu / w promptcie', 'agenta / agentow', 'do API' (indeclinable), 'w kontekscie', 'embeddingi / embeddingow', 'w chmurze' rather than 'w cloudzie'. Ready transitional stems: 'Czyli pytanie brzmi...' (so the question is), 'Rozbije to na dwie czesci...' (let me split that in two), 'Krotka odpowiedz brzmi... dluzsza jest taka, ze...' (short answer... longer answer...), 'Nie wiem, ale wiem gdzie to sprawdzic' (I don't know but I know where to check), 'To temat na dluzej niz minute - zlapmy sie przy kawie' (that's longer than a minute, catch me at coffee). Where the translated method starts sounding artificial: the full Weissman Topspin. Bending every Polish answer back to your key message sounds like a politician on TVN24, and a Polish IT audience is unusually allergic to it. Use the Topspin on at most one answer per session — the one that matters.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

qa — directly, and this is the item that closes the specific NCP4 failure. The retrospective records not a missing answer but an unstructured one: the sensitive-data-in-cloud-LLM question was predictable, the answer came out acceptable rather than good. A protocol is what converts 'acceptable' into 'good' under stage pressure, because it removes the need to decide how to start. Secondary fit: timing — the paraphrase-and-cap discipline is what makes a 5-minute BB4IT Q&A hold four or five questions instead of two; and reuse — every paraphrased question is a self-contained clip on the recording, so a Q&A exchange becomes a 60-second LinkedIn video with no editing, which the current one-deck-many-artefacts workflow cannot get from an unrepeated question. Also touches late_slot: at 14:50 after nine talks the room's questions will be fewer and vaguer, and a paraphrase that sharpens a vague question is the difference between a dead Q&A and a live one.


**minimal_2h_version**

Twenty minutes, done on paper, gets 80% of the value. (1) Write four Polish stems on an index card and say each aloud three times: 'Czyli pytanie brzmi...', 'Rozbije to na dwie czesci...', 'Nie wiem - sprawdze i odpisze', 'To temat na dluzej niz minute, zlapmy sie przy kawie'. (2) Write one sentence of question policy into the opening and rehearse it with the rest of the first 90 seconds: 'Pytania zbieram na koniec, powtorze kazde do mikrofonu, bo inaczej nie wejdzie na nagranie.' (3) Set a hard rule you can execute tired: paraphrase, then answer in at most three sentences, then move. (4) Take the three questions you already know are coming (sensitive data in cloud LLMs first) and speak the paraphrase-plus-first-sentence aloud once each. Do not try to build the full red-team bank in two hours — that is a separate item; here you are only installing the reflex.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

Question from the floor at BB4IT, asked with a loaded premise: 'No dobrze, ale przeciez wysylacie dane klienta do OpenAI - jak to w ogole przechodzi u was przez compliance?' Bad move: answering the accusation as stated, which concedes that you send client data to OpenAI. Paraphrase that takes the frame back: 'Czyli pytanie brzmi: co dokladnie opuszcza infrastrukture klienta, kiedy agent wola model - i kto to widzi.' (So the question is what exactly leaves the client's infrastructure when the agent calls a model, and who can see it.) Answer, one thing, 40 seconds: 'Do modelu idzie tylko to, co przejdzie przez warstwe redakcji - identyfikatory zamieniamy na tokeny po naszej stronie, wiec model widzi strukture sprawy, nie nazwiska. Umowa jest z dostawcem enterprise, bez trenowania na naszych danych, retencja zero. A tam gdzie klient tego nie akceptuje, ten sam agent stoi na modelu lokalnym - to jest zamiana jednej linii w configu.' Topspin, one clause: 'I dlatego redakcja jest osobnym krokiem w architekturze, a nie opcja w promptcie.' Close by moving, taking the next hand. The whole exchange is 55 seconds and it is a complete, publishable clip because the question is on the audio track.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

Weeks, not hours, because the failure is a reflex under adrenaline, not a knowledge gap. Week 1: install the paraphrase in low-stakes contexts — client calls, standups, internal reviews. Before answering any question at work, say the restated version out loud first. It will feel absurd for about four days, then it becomes automatic. Week 2: add the cap. Answer every question in three sentences, then deliberately stop and stay silent. The hard skill is not the paraphrase; it is stopping. Week 3: pressure. Have an LLM generate ten hostile questions on your own material, read them aloud on a random timer, and answer to camera in one take with no retakes — retakes destroy the training value because the stage has none. Week 4: transfer. Take questions after any internal presentation with a live recording running and review only the first eight seconds of each answer.


**drill**

The eight-second drill, 15 minutes. Input: five real questions from your own material — the four you can predict for BB4IT plus one you dread — written on cards, plus a phone recording video. Action: shuffle, draw a card, read it aloud in the questioner's voice, then immediately deliver only the paraphrase and the first sentence of the answer, in Polish, in one take. Stop talking. Draw the next card. Five cards, no retakes, about 4 minutes of recording. Then watch with the sound on and score each of the five on three binary criteria: did the paraphrase start within 2 seconds of the question ending (yes/no); is the paraphrase one sentence with no loaded adjective carried over (yes/no); is there a filler in the first three words — 'yyy', 'no wiec', 'to dobre pytanie' (yes/no). Observable output: a score out of 15 and a rewritten paraphrase for every card that failed. Repeat the next day with the failed cards only.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

One question-and-answer exchange — and inside that, the smallest unit worth isolating is the first sentence: the paraphrase alone. It is the atom because it is fully scriptable in advance, unlike the answer, and because it is where the reflex either fires or does not.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

Setup: 20-30 minutes to write and rehearse the Polish stems and the question-policy line. Ongoing: the 15-minute drill, done three or four times across the week before a talk — roughly 1 hour total. Per talk on the day: zero extra preparation once the stems exist; the cost is entirely in the Q&A slot itself (~40 seconds across five questions).


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

Three loops at different latencies. Live, in the room: whether the asker nods during your paraphrase (frame accepted) or starts talking over it (frame rejected — you overreached, back off and answer their version). Same day, on the recording: play the Q&A block with your eyes closed and count how many questions you can actually understand from the audio alone; every one you cannot is a repetition you skipped. Slower: whether Q&A exchanges become usable as standalone clips in the reuse workflow without you having to voice-over the question in post.


**measurable_kpi**

Four numbers, all countable off one recording. (1) Question-audibility rate: questions intelligible from the recording alone / total questions asked. Target 100%; the NCP4 baseline is almost certainly well below that. (2) Mean answer length in seconds, target 45, hard ceiling 60 — measured with a stopwatch on playback. (3) Questions taken in the 5-minute slot, target 4-5 rather than 2. (4) Fillers in the first three words of an answer, per question — target 0; this is where 'yyy' and 'to dobre pytanie' cluster.

### Online and recorded


**online_variant**

The microphone rationale disappears (questions arrive typed in chat or Q&A panel, already in the record) and the frame-ownership rationale becomes stronger, because you must read the question aloud anyway and you choose the wording of what gets read. For the Pionierzy AI-style webinar: read the question aloud with the asker's first name ('Michal pyta o...'), which is the online substitute for eye contact, then paraphrase only if the written question is loaded or unclear — do not paraphrase a clear typed question, because attendees can see the original text and any change looks like editing. New online-only mechanics: batch questions by theme rather than answering in arrival order, and answer to camera rather than to the chat window. Attention decays faster online, so cap answers at 30 seconds, not 45. Downside: you can read ahead and prepare, which removes the thinking-time benefit and, with it, the excuse for the pause — silence lands worse online.


**recorded_variant**

This is the variant that matters most and it is the reason the item is not optional. A conference recording captures the speaker's lavalier and, at best, an ambient room mic — an unrepeated audience question is either inaudible or entirely absent, and the published video shows a person answering a silence. Everything in the Q&A block that was not spoken by you is lost. Consequences: paraphrase becomes mandatory, not stylistic; each answer should be self-contained enough to stand without the previous three (viewers arrive by clip, not in order); and you must not answer with 'as I said in slide 12' because the clip will be watched alone. Also: anything the asker says on the recording is out of your control but attributed to your video, so a paraphrase that neutralises a named client or a competitor's name before you repeat it is a live risk-management move, not politeness. Practical: agree with the organiser whether the room mic is in the mix, and if the Q&A is being filmed, restate any question that names a company before answering.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

Echo Chamber run as a ritual — mechanically repeating every question verbatim, including the ones everyone heard, until the Q&A is twice as long and half as informative; the pattern is repeat-for-the-mic, not repeat-for-ceremony. The Media-Trained Bridge — ABC applied to every question, so every answer detours to your message and the room correctly concludes you are not answering; this is the failure mode most visible to a technical audience. Therapist Paraphrase — 'so what I'm hearing is that you feel...' in a room of engineers. The Sneaky Rewrite — paraphrasing a hard question into an easier adjacent one you can answer; the asker will say 'that's not what I asked' and you will have spent your credibility to buy four seconds. Compulsive 'that's a great question' on every question, which grades the askers and reveals which one stumped you. Answering the question you rehearsed rather than the one asked, because you started composing during their second clause.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Formulating the answer while the question is still being spoken — the single most common one, and it is why step 1 is 'stop moving'. Paraphrasing to the asker instead of to the room, so the microphone gets a mumble. Making the paraphrase longer than the question. Carrying the loaded word through ('so the question is why we leak client data' — you just said it into the microphone and onto YouTube). Answering three things because the question had three clauses, which burns 90 seconds and the rest of the slot. Ending with a raised-eyebrow 'ok?' that invites a follow-up. Taking the last question at the 5-minute mark and letting it run past the slot, which pushes into the organiser's schedule — in a 14:50-15:20 closing slot, that means running into people's train times.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

A workshop of 10-15 people in a small room with no recording — full paraphrase every time slows a discussion that should feel like a conversation, and the AI Startup Builders 120-minute format is exactly this. A hostile question where the paraphrase would amplify the accusation: sometimes the right move is a direct one-sentence denial before any restatement. A yes/no factual question ('does it work with Azure OpenAI?') — paraphrasing that is theatre; say yes. When the moderator is already repeating questions into a handheld mic, which is a thing to establish before you go on. And when the question is a monologue with no question in it: there is nothing to paraphrase — go to 'i pytanie brzmi?' instead.


**fallback_if_it_fails**

If your paraphrase is rejected ('no, that's not what I meant'), do not defend it — one line, no friction: 'Okej, to powiedz mi to jeszcze raz jednym zdaniem' (fine, give it to me again in one sentence), and answer their version. If you genuinely did not understand after two attempts, park it publicly and without shame: 'Nie chce zgadywac, o co pytasz - zlap mnie po prelekcji, doprecyzujemy.' If the answer runs out mid-sentence because you had less than you thought, land on the honest edge rather than padding: 'Tyle wiem na pewno; reszty nie sprawdzalem.' If nobody asks anything at all, the fallback belongs to a different item (seeding the first question) — do not fill the silence by paraphrasing an imaginary question. If the room mic dies, keep going but state it: 'Powtarzam pytanie, bo nie wchodzi na nagranie.'


**works_signal**

It is landing when: the asker nods or says 'tak, dokladnie' during your paraphrase rather than after it; heads in the middle rows turn from the asker back to you when you start restating (that is the room getting the question for the first time); a second hand goes up before you finish answering the first question; the follow-up questions get more specific rather than broader. It is failing when: the asker interrupts your paraphrase; you hear 'nie, chodzilo mi o...'; nobody in the back rows reacts to the question at all, which means they still cannot hear it and your paraphrase was aimed at the asker; or your answers keep provoking 'a jeszcze jedno' from the same person, which means the close-the-loop step is not closing anything.


**dependencies_conflicts**

Prerequisites: question-policy-announced (the first-90-seconds line that says questions come at the end and will be repeated) — without it people interrupt the middle blocks and the whole protocol has nowhere to run; repeat-the-question (this item is its generalised form, and they should be treated as one habit); speaker-faq-bank (the protocol gives you a shape to pour an answer into, but not the answer — without the prepared bank, paraphrasing a question you cannot answer just makes the gap more visible, which is precisely the NCP4 pattern). Feeds: closing-after-qa (the protocol keeps the Q&A tight enough that the prepared 45-60 second close still fits in the slot) and hostile-questions (paraphrase is the first move in the hostile-question protocol too). Conflicts: with the time budget — every paraphrase is a question not asked, and in a 5-minute slot this is a real trade, so paraphrase length is capped at one sentence by rule; and with taking questions during the talk, which the announced policy exists to prevent. No conflict with the Marp/PDF pipeline: this item is purely spoken and leaves no trace in the deck.

### Tooling


**tool_support**

An LLM as red team and rehearsal partner is the highest-leverage tool here — generate 15-20 hostile questions from your own abstract and deck, then rehearse only the paraphrase-plus-first-sentence for each; the model is good at inventing the asker's motive and bad at judging whether your delivery landed, so use it for input, not for assessment. Phone video for the eight-second drill. A stopwatch or the recording's own timeline for answer length. Index cards, physically — the stems need to exist somewhere that is not a screen, because the presenter view is showing slides during Q&A. Speech-measurement tools (Whisper transcript plus a filler-word count) turn the filler KPI into a number instead of an impression. Slido or the event's own Q&A app changes the item substantially and needs organiser agreement.


**survives_pdf_export**

yes — for the visible artefact. The Q&A holding slide is static and exports to PDF unchanged. Partially for the support layer: Marp presenter notes are not rendered into the PDF, so the paraphrase cheat sheet in the notes disappears in the exact scenario where you are running from the organiser's PDF on someone else's laptop. Mitigation: index card in the pocket.

### Effort and payoff

- **prep_effort** — low — 20-30 minutes to write and drill the Polish stems, plus the recurring 15-minute drill. Nothing to build, nothing to design, no organiser involvement.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Immediate and visible on the first talk: the Q&A stops feeling like improvisation, answers get shorter, the recording becomes usable. The measurable jump is question-audibility on the recording, which goes from partial to 100% the first time you apply it. The credibility effect — looking composed under a hard question — shows up on the second or third talk once the reflex is automatic rather than deliberate. What it does not do on its own: give you the answer to the hard question. That is the red-team bank's job, and this item without that one is a well-shaped container for an empty answer.


**needs_organiser_agreement**

no for the core practice — repeating and paraphrasing is entirely under your control. yes for three adjacent details worth settling in advance at BB4IT: (1) whether there is a roaming or audience microphone, and whether the room mic is in the recording mix — this determines whether repetition is mandatory or merely helpful; (2) who moderates the Q&A, who picks questions and who cuts off a monologue, since in a closing 14:50-15:20 slot the moderator may be under pressure to end the day on time; (3) whether any anonymous question tool (Slido/Mentimeter) is running, because that changes the protocol from 'listen and paraphrase' to 'read and select'.


**priority**

high. It is the cheapest item on the entire Q&A list, it directly addresses the named qa gap that already cost something at NoCode Poland #4, it is fully installable in the two hours before BB4IT on 2026-09-12, and it is a prerequisite for three other items on the list. The one caveat on priority: on its own it is form without content — pair it with the red-team question bank, or it will produce a well-structured version of the same 'acceptable, not good' answer.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

- https://www.tandfonline.com/doi/full/10.1080/10904010903466311 — Weger, Castle & Emmett (2010), Active Listening in Peer Interviews, International Journal of Listening; the controlled study showing paraphrase raises social attractiveness but not felt-understanding
- https://eric.ed.gov/?id=EJ910765 — ERIC record for the same study, with abstract
- https://journals.sagepub.com/doi/10.1177/00936502241230711 — Jäckel, Zerres & Hüffmeier (2025), Active Listening in Integrative Negotiation; notes the thin empirical support for active listening's effect on actual understanding
- https://www.tandfonline.com/doi/abs/10.1080/10904018.2022.2136674 — 'So you're telling me...': paraphrasing (formulating), affective stance and active listening, International Journal of Listening 38(1)
- https://www.informit.com/store/in-the-line-of-fire-9780136933557 — Weissman, In the Line of Fire, 3rd ed.; Buffer, Roman Column, Topspin (publisher page with table of contents)
- https://www.oreilly.com/library/view/in-the-line/9780136933335/ — same book, chapter list including 'The Roman Column' and 'Paraphrase' under Retake the Floor
- https://thinkscience.co.jp/en/articles/how-to-handle-difficult-QandA-moments — six-scenario conference Q&A phrase protocol written for non-native English speakers; separates 'didn't hear' from 'didn't understand'
- https://www.discprofile.com/fac-sup/tips/managing-q-and-a-sessions — the four-step Listen / Acknowledge / Answer / Confirm framing
- https://applausellc.com/blog-content/2017/2/16/six-reasons-to-avoid-thats-a-good-question — the case against 'that's a good question', including that it hides the question from listeners who did not hear it
- https://thespeakerlab.com/blog/qa-session/ — practitioner walkthrough: repeat the question, pause before answering, keep answers short
- https://www.toastmasters.org/magazine/magazine-issues/2021/mar/handling-the-qanda-session-with-confidence — Toastmasters on Q&A structure and repetition
- https://cezarywalenciuk.pl/blog/speech/8-porad-na-odpowiadanie-na-pytania-od-publicznosci-zdobadz-szacunek-pora-na-pytania — Polish practitioner list; source of the Polish phrasing and of the contested 'a to dobre pytanie' recommendation
- https://flowconsulting.pl/podcast/odcinek-13-5-sposobow-jak-odpowiadac-na-trudne-pytania/ — Polish podcast on five ways to answer hard questions during a presentation
- https://kadry.infor.pl/kadry/hrm/komunikacja/777213,Jak-reagowac-na-trudne-pytania-podczas-prezentacji.html — Polish article on reacting to difficult questions; covers softening a hostile question via paraphrase
- https://www.matternow.com/blog/media-interviews-art-of-bridging/ — ABC bridging (Acknowledge, Bridge, Communicate) as taught in media training; included as the technique to recognise and mostly avoid on a technical stage

### Not established by this research

- `marp_implementation`


---

## Hostile questions, false premises and I don't know

> Three failure modes with one shared rule — you are answering the room, not the questioner: de-escalate a hostile question by going quieter and slower instead of arguing, refuse a loaded question's built-in premise before answering the fair version of it, and treat 'I don't know, and here is what I would check' as a complete, credibility-positive answer rather than a defeat.

### What it is

- **category** — qa


**origin_author**  
<sub>Originating author, book, lab or community that named the method</sub>

No single origin; three strands converge. Hostile-question handling: Jerry Weissman (Buffer for hostile questions), Scott Berkun (Confessions of a Public Speaker — you hold the microphone and the room came for you), Impact Factory's six-step de-escalation. False premise: classical logic — the loaded-question fallacy (plurium interrogationum), documented from antiquity and formalised in modern fallacy catalogues. 'I don't know': the empirical strand is Tom Mushkat and Ruth Mayo's work on admitting ignorance, plus the risk-communication uncertainty literature.


**origin_year**  
<sub>Year the method was named or popularised; approximate is fine</sub>

Loaded question as a named fallacy: classical, catalogued in modern form through the 20th century. Berkun 2009. Weissman 2005. Mushkat & Mayo working paper 2025-2026; Risk Analysis review of uncertainty communication 2026.

- **talk_moment** — Q&A primarily; the heckler variant can fire during the middle blocks, and the prepared sentences for all three must exist before arriving

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

The three cases share one structural fact and diverge in mechanism. THE SHARED FACT: there are two audiences for every hostile exchange — the questioner, and the two hundred people watching how you treat the questioner. You cannot win the first and you do not need to; you only need to not lose the second. Berkun's observation is the practical version: you hold the microphone, you can talk over anyone in the room, and the audience came to hear you rather than them, so the power asymmetry is already yours and any move that spends it (arguing, sarcasm, defensiveness) converts a structural advantage into a fair fight you have no reason to accept. HOSTILE QUESTIONS: the escalation mechanism is vocal mirroring — a raised, fast, high-inflection question pulls the answer up to match it, and two escalating voices read to the room as a fight in which the speaker has lost their footing. The counter is deliberate anti-mirroring, sometimes called the soften technique: drop volume, flatten inflection, slow down. This does two things at once — it removes the fuel, and it makes the questioner audibly the more agitated person in the exchange, which the room scores in your favour without you saying anything. Asking them to repeat the question does similar work by a different route: people rarely repeat hostility verbatim, so the second version usually arrives with the sharp adjectives sanded off. FALSE PREMISES: a loaded question embeds a presupposition the answerer has not agreed to. 'Why do you send client data to OpenAI?' cannot be answered directly — every direct answer, including a defensive one, ratifies that you send client data to OpenAI. But visibly refusing to answer reads as evasion. The escape is that the trap is only in the direct answer: naming the presupposition out loud, denying it in one clean sentence, and then answering the fair reconstruction of the question satisfies the room's demand for an answer while declining the frame. Speed matters here — the denial must come first, before any explanation, because the first clause is what gets clipped. I DON'T KNOW: the mechanism is counterintuitive and is the reason this belongs in the same item. Speakers avoid IDK because they expect to be penalised for it, and the evidence suggests the expected penalty is substantially larger than the real one — Mushkat and Mayo find IDK responses increasing perceived trustworthiness relative to confident directive answers, and find a gap between what people expect the reaction to be and what it actually is. The moderating variable is explanation: an explained IDK ('I haven't measured that; the number I would want is X') is evaluated better on competence than a bare one. So the operational form is never the two words alone — it is IDK plus the reason plus the next step.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

HOSTILE QUESTION. 1. Do not move toward them and do not fold your arms; stay where you are, weight even. 2. Let them finish completely, including the rude part. Interrupting is the single move that turns the room against you. 3. Drop your voice a step below your presentation volume and slow down. Deliberately. This is the whole de-escalation. 4. If it was genuinely unclear or genuinely nasty, ask for it again: 'Powtorz, chce dobrze zrozumiec' — the second version is usually softer. 5. Find the legitimate concern underneath, because there almost always is one, and say it back neutrally. 6. Answer that concern in 30-45 seconds. Concede any part of it that is true, immediately and without hedging — conceding a correct point costs nothing and buys the room. 7. End by moving to the next hand. Do not ask if that answered it; that is an invitation to round two. FALSE PREMISE. 1. Hear the presupposition as a separate object from the question. The tell is that you cannot answer yes or no without agreeing to something. 2. Name it, briefly and without accusation: 'W tym pytaniu jest zalozenie, ze X.' 3. Deny it flatly in one sentence, no qualifiers: 'X nie jest prawda, i powiem dlaczego.' 4. Reconstruct the fair question: 'Prawdziwe pytanie brzmi: Y.' 5. Answer Y, properly, in 30-45 seconds. 6. Do not gloat, do not explain the fallacy, do not use the word 'manipulacja'. Naming the technique rather than the content makes you the aggressor. I DON'T KNOW. 1. Say it early, in the first sentence, not after ninety seconds of circling — a late IDK reads as a failed attempt to bluff. 2. Say the two words plainly, no cushioning ('to ciekawe, bo wlasciwie...'). 3. Add the explanation, which is the part that protects competence: why you do not know, or what would have to be true for you to know. 4. Add the next step and make it specific and time-bound: 'sprawdze i odpisze do konca tygodnia', 'zapisuje sobie, zlap mnie po prelekcji'. 5. If you have a partial answer, mark the boundary explicitly: 'Wiem tyle: A i B. Czy to sie skaluje do C - nie sprawdzalem.' 6. Write it down visibly, on paper. The visible act of writing is what converts the promise into something the room believes. 7. Actually follow up. THE PERFORMANCE (a comment wearing a question's clothes). 1. Let it run about 20-25 seconds. 2. Cut in warmly, not sharply: 'i pytanie brzmi?' 3. If a question appears, answer it. 4. If none appears, agree with the true part in one sentence, add one sentence of your own, and move: 'Zgadzam sie z tym, ze X. U mnie wyszlo dodatkowo Y. Nastepne pytanie.' 5. Never let a second one from the same person. HECKLER. Rare, per Berkun — a few times across hundreds of talks. Keep your cool, decline the frame once, publicly and politely: 'Pytania na koncu, dzieki.' Do not joke at their expense; Berkun's own account of the Ignite Boston disaster is a joke that escalated rather than closed.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Hostile-question handling: any talk where you make a claim someone's current work contradicts, which at a technical conference is most talks. False-premise handling: specifically when your subject has an available villain framing — 'AI sends your data to America', 'agents replace developers', 'no-code produces unmaintainable systems' — all three of which are live in the Polish market in 2026 and all three of which can arrive as loaded questions. 'I don't know': always available, and most valuable exactly when the room suspects you are selling something, because a well-placed IDK from a vendor is the cheapest credibility purchase on stage. Least applicable in a friendly internal or client presentation where nobody is contesting anything — VSoft-style rooms need none of this.

### Evidence


**evidence_level**

Mixed and worth separating. The de-escalation and heckler advice is practitioner consensus plus single-expert claim (Berkun, Weissman, corporate training providers) with no controlled testing; it is plausible, widely converged upon, and unproven. The loaded-question analysis is not empirical at all — it is a logical structure, true by definition, which is a different and in some ways stronger kind of warrant: you do not need a study to establish that a direct answer to a presupposing question ratifies the presupposition. The 'I don't know' claim is the one strand with controlled experimental support: Mushkat and Mayo report across experiments that IDK responses increased perceived trustworthiness relative to directive advice, that explained IDK beat unexplained IDK on competence, and that participants expected IDK to be punished more than it actually was. Caveat: as of this research that work is a working paper on SSRN, so treat it as controlled study, not yet peer-reviewed. The adjacent risk-communication literature (2026 Risk Analysis review) independently finds that transparency about uncertainty generally builds rather than erodes trust, which raises confidence in the direction of the effect even if the specific effect sizes are open.


**myth_status**

Mixed across the three. Hostile-question de-escalation: confirmed as sound practice, with the caveat that its evidence base is entirely practitioner experience. False-premise refusal: confirmed, and by logical structure rather than study. 'I don't know': this is the interesting one — it is a case of debunked folklore in the reverse direction. The folk belief is that admitting ignorance on stage costs credibility; the experimental evidence points the other way, and specifically identifies the belief itself as a misperceived social norm. So the item to correct is not the practice but the fear. One genuinely debunked sub-item: the idea that humour is a reliable tool against a hostile questioner. It works when it works and it is catastrophic when it misfires, and Berkun's published account of his own Ignite Boston heckling — a joke about 'the feminist section of the audience' that escalated the room — is the cautionary case from someone who teaches this for a living.


**contested_claims**

(a) 'Use humour to disarm a heckler' — widely repeated in speaker-coaching content and contradicted by the most-cited first-person account of it failing. Humour at the questioner's expense converts a one-person problem into a room-wide one. (b) 'Never say I don't know, it destroys your authority' — the specific folklore this item exists to kill; see myth_status. (c) 'Take the hostile questioner outside / shut them down hard' — advocated by some corporate-training sources; at a developer conference this reads as thin skin, and the room's sympathies flip fast. (d) 'Repeat the hostile question back verbatim so everyone hears how unfair it was' — a bad idea that gets recommended: it puts the accusation on the recording in your own voice. Paraphrase strips it; repetition amplifies it. (e) 'Ask the audience to side with you against the heckler' — appears in speaker-coaching lists; it works in a comedy club and it is a gamble in a conference room where the heckler may be someone's colleague.


**key_sources**

Mushkat, T. & Mayo, R., 'Admitting Ignorance: The Perception of I Don't Know Responses from Knowledge Sources' (SSRN working paper, 2025-2026) — across experiments, IDK increased perceived trustworthiness relative to directive advice; explained IDK outperformed unexplained IDK on competence; participants systematically expected IDK to be penalised more than it was, indicating the avoidance is driven by a misperceived norm. || Risk Analysis literature review (2026), summarised in Psychology Today, 'The Science of Saying We Don't Know' — transparency about uncertainty generally builds trust while downplaying it erodes trust over the longer term; numeric ranges preserve trust better than vague hedges; explained uncertainty presented as normal process increases trust; prior institutional trust is the strongest single predictor of how the message lands. || Berkun, S., 'Confessions of a Public Speaker' (O'Reilly, 2009) — hecklers are rare; the speaker holds the microphone and the audience's attention by default; keep your cool and politely defer; includes his own account of escalating a heckle with a joke at Ignite Boston. || Impact Factory, 'Handling Hostile Questions and Statements in Six Simple Steps' — the practitioner protocol this item's hostile branch follows: ask them to repeat it, read the motivation, rephrase into practical language, find alignment, talk in terms of impact, move on to the next question. || The Fallacy Files and standard fallacy catalogues on the loaded question (plurium interrogationum) — a question is loaded when it embeds a presupposition the respondent has not conceded, and the correct response is to identify and reject the presupposition rather than answer directly.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

1. The IDK evidence comes largely from advice-giving and knowledge-source contexts (physicians, experts) rather than from a stage with a commercial interest attached; a CTO who sells agentic systems saying 'I don't know' about his own product's cost profile may be read differently from a doctor saying it about a prognosis. The direction of the effect is probably robust; the magnitude in this specific setting is not established. 2. IDK has a budget. One well-placed 'nie wiem' buys credibility; three in a five-minute Q&A suggest you should not have given the talk. Nothing in the research says the effect is linear, and practitioner intuition says it is not. 3. De-escalating by going quiet can be misread as being cowed, particularly in a room that has watched four earlier speakers assert things confidently — the counter is to keep the content firm while the delivery softens, which is harder than it sounds. 4. Refusing a premise can be technically correct and socially expensive; a room that liked the questioner will hear a well-executed premise refusal as lawyering. This is why the reconstruction step matters more than the refusal step. 5. Prior trust dominates technique (the strongest predictor in the uncertainty review). In a room that has decided you are a vendor, no protocol rescues the exchange — that is a talk-design problem, not a Q&A problem.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

Zero content time; it is entirely a Q&A capability, plus one optional cheap insurance policy in the talk itself. The insurance: one honest limitation stated inside the 25 minutes ('to nie dziala tam, gdzie...', 30 seconds) pre-establishes you as someone who says what does not work, which makes a later 'nie wiem' land as consistency rather than as a hole. For a 5-minute Q&A the operational rules are: any hostile exchange capped at 60-75 seconds and then closed by moving; any false-premise refusal capped at one denial sentence plus a 40-second answer; any IDK capped at 15 seconds including the commitment. The reason for hard caps is arithmetic — a single hostile exchange allowed to become a debate consumes the whole slot, and the last thing the recording captures is you losing an argument instead of your prepared close.


**time_budget_min**

0 minutes of the 25-minute content slot, plus an optional 0.5 minute for the stated-limitation insurance line. Inside the 5-minute Q&A: budget at most one 75-second hostile exchange, and treat a second one as a signal to close the session early and continue in the hallway.


**audience_change**

The room revises its estimate of what kind of speaker you are. Handling a hostile question without heat, and admitting a limit without flinching, moves you from the vendor category into the practitioner category, which is precisely the distinction a room of architects and tech leads is silently making throughout your talk. Concretely: the person who came to catch you out either drops it or ends up talking to you afterwards, and the twenty people who were quietly sceptical update on the basis of how you behaved rather than what you claimed. The false-premise refusal has a narrower, sharper effect — it prevents the room from leaving with a false statement about your architecture that you appeared to accept.


**application_pl_talk**

The structure transfers; three things are specifically Polish. (1) 'Nie wiem' carries more weight in Polish professional culture than 'I don't know' does in American English, in both directions — it is rarer, so it costs more socially and buys more credibility when it lands. The safe form is never the bare two words: 'Nie wiem' followed immediately by the reason and the commitment. 'Nie wiem, nie mierzylismy tego, ale wiem jak bym to zmierzyl' is strong; a bare 'nie wiem' with a shrug reads as not having done the homework. (2) Polish hostile questions at IT conferences are more often delivered as sarcasm or as a weary aside than as a direct attack — 'no tak, kolejny agent, ktory zaraz zastapi programistow' — and sarcasm resists the standard de-escalation because there is no explicit claim to answer. The move that works is to take the sarcasm literally and answer the serious version, without acknowledging the tone: 'Nie zastapi. Powiem gdzie faktycznie zabiera robote, a gdzie nie.' (3) The performance-question is more common in Polish rooms and longer, typically opening with the asker's own institutional context. It is not hostility, it is a status ritual, and it should be handled warmly. At BB4IT specifically, at 14:50 after four other agent talks, expect the saturated-audience version: a question that is really 'we have heard this more than once today', to which the only good answer is to agree and immediately say what is different about your case.


**pl_language_notes**

Phrases to avoid outright: 'z calym szacunkiem, ale...' — in Polish, exactly as in English, this announces a fight and the room hears it; 'nie zrozumiales mnie' (you misunderstood me) blames the listener, use 'zle to powiedzialem' or 'doprecyzuje'; 'to manipulacja' or 'to jest pytanie manipulacyjne' — never name the technique, only the content; 'jak juz mowilem' (as I already said) is condescending on a recording. Calques: 'adresowac obawy' (address the concerns) — Polish 'odniesc sie do obaw'; 'to fair pytanie' — 'to uczciwe pytanie'. Ready stems, by case. Hostile: 'Powtorz, chce dobrze zrozumiec', 'Masz racje w jednej rzeczy i powiem w ktorej', 'To jest sensowna obawa, tylko nazwe ja inaczej'. False premise: 'W tym pytaniu jest zalozenie, ze X - i to zalozenie nie jest prawdziwe', 'Nie odpowiem tak jak zapytales, bo odpowiedz brzmialaby, ze sie zgadzam. Nie zgadzam sie', 'Prawdziwe pytanie brzmi...'. IDK: 'Nie wiem', 'Nie mierzylismy tego', 'Nie bede zgadywal', 'Zapisuje sobie i odpisze do konca tygodnia', 'Wiem tyle: ...; dalej nie sprawdzalem'. Performance: 'I pytanie brzmi?', 'Zgadzam sie z tym, ze...; u mnie doszlo jeszcze to, ze...'. Where translated method turns artificial: the American de-escalation register ('I really appreciate you raising that, and I hear your frustration') has no natural Polish equivalent and any attempt sounds like a corporate training video. Polish de-escalation is done by dropping the voice and by conceding a specific point, not by naming feelings.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

qa — direct, and it covers the half of the NCP4 gap that the red-team bank does not. The bank supplies content for questions you predicted; this item supplies behaviour for the moment when the question arrives with an edge, a false premise, or beyond your knowledge, which is the state the NCP4 sensitive-data question was actually in — predictable in substance, loaded in framing, and answered without a prepared way to decline the framing. Strong secondary fit on late_slot: a 14:50 slot after nine talks, four of them on agents, is the highest-probability setting for the two hostile variants that are not really hostile — the saturated 'we've heard this all day' aside and the performance question from someone who has been sitting quietly since 09:00 and wants to say something. Neither is an attack and both are lost by treating them as one. Also reuse, with the sign flipping either way: an ugly exchange handled well is the most shareable sixty seconds you will ever record, and the same exchange handled badly is permanently attached to your name on YouTube — which is the specific reason the caps and the prepared sentences are worth having rather than trusting improvisation.


**minimal_2h_version**

Thirty minutes, and it is mostly memorisation rather than research. (1) 10 min: write six Polish sentences on the same index card as the red-team triggers — two for hostile ('Powtorz, chce dobrze zrozumiec' / 'Masz racje w jednej rzeczy i powiem w ktorej'), two for false premise ('W tym pytaniu jest zalozenie, ze X, i ono nie jest prawdziwe' / 'Prawdziwe pytanie brzmi...'), two for IDK ('Nie wiem, nie mierzylismy tego' / 'Zapisuje i odpisze do konca tygodnia'). (2) 10 min: say all six out loud, standing, five times each, deliberately quieter and slower than your presentation voice. The volume drop is the part that has to be trained physically, because under adrenaline everything goes up. (3) 5 min: identify the single most likely loaded question for this room and write its one-sentence denial — at BB4IT that is the data-leaves-the-country framing. (4) 5 min: decide the caps and say them to yourself as rules — 75 seconds on any hostile exchange, one IDK is free and the second costs, no debates, close by moving. Do not attempt to rehearse full hostile scenarios in two hours; you will only rehearse anxiety.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

Three, one per case, all reusable for an agentic-AI talk. HOSTILE, delivered as sarcasm at 15:05 in a tired room: 'No dobra, ale to jest kolejna prezentacja o agentach, ktore niby wszystko zrobia, a potem i tak ktos to musi poprawiac po nocach.' There is no question here and there is a real grievance. Voice down, slower: 'Zgadzam sie z ta czescia o poprawianiu po nocach - u nas tez tak bylo przez pierwsze trzy miesiace. Powiem konkretnie, co to zmienilo: przestalismy dawac agentowi decyzje, a dalismy mu przygotowanie decyzji. Czlowiek klika akcept. To nie jest ta demonstracja, ktora dzis widziales cztery razy, i wlasnie dlatego pokazalem ten krok z akceptacja, a nie sam happy path.' Then move. Note: concedes the true part in the first clause, does not defend agents in general, and re-anchors on the one thing that differentiated your talk from the other four. FALSE PREMISE, the NCP4-shaped one: 'Skoro wysylacie dane klientow do Stanow, to jak wy to w ogole godzicie z RODO?' The presupposition is that you send client data to the US, and any direct answer concedes it. Denial first, then reconstruction: 'W tym pytaniu jest zalozenie, ze dane klienta wychodza do Stanow. Nie wychodza - do modelu idzie zredagowany kontekst bez identyfikatorow, a tam gdzie klient nie akceptuje nawet tego, ten sam agent stoi lokalnie. Ale pytanie pod spodem jest dobre i brzmi tak: kto jest administratorem, kto podmiotem przetwarzajacym i co dokladnie jest powierzone. Odpowiem na to.' Then 40 seconds on the actual data-flow. Notice the move: the premise is denied in eight words, and the questioner is then given a better version of their own question, which lets them keep face. I DON'T KNOW, the one that would have cost you nothing at NCP4: 'Ile to kosztuje miesiecznie przy stu tysiacach zgloszen?' 'Nie wiem. Nie mamy zadnego wdrozenia w tej skali - najwieksze, ktore prowadzimy, jest o rzad wielkosci mniejsze, wiec kazda liczba, ktora bym teraz podal, bylaby ekstrapolacja i pewnie mylna. Powiem, co wiem: przy naszej skali dominujacym kosztem nie sa tokeny, tylko retry i ludzka weryfikacja. Zapisuje sobie to pytanie - jesli zostawisz mi kontakt, policze to na waszych wolumenach i odesle.' Fifteen seconds, and it does more for credibility than a confident invented number would have done, because the room contains at least one person who knows the real figure.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

The three branches train differently. Hostile: the trainable component is physical, not verbal — under adrenaline your volume and pace rise automatically, and the whole de-escalation depends on overriding that. Train it by practising the six sentences at deliberately low volume in a state of elevated arousal: immediately after exercise, or standing while reading a genuinely annoying comment aloud. Over weeks, add real exposure — take questions after internal presentations, argue in code review without raising your voice, and notice the moment your pitch goes up. False premise: this is a perception skill and it trains in reading, not speaking. For two weeks, when reading LinkedIn comments, journalism, or client emails, mark every question that cannot be answered yes or no without conceding something, and write its denial-plus-reconstruction in two sentences. Ten minutes a day, and after a fortnight you start hearing presuppositions in real time, which is the entire skill. IDK: this is an exposure problem, because the barrier is a misperceived norm rather than a missing technique. Deliberately say 'nie wiem' out loud in low-stakes professional settings — standups, client calls, sales conversations — at least once a week, and observe what actually happens, which will be less than you expect. That observation is the mechanism; the research finding is that people overestimate the penalty, and personal disconfirmation is how you stop overestimating it.


**drill**

The loaded-question drill, 15 minutes. Input: your locked deck, an LLM, a phone recording video with the volume meter visible if your app has one. Action: (1) 4 min — prompt: 'From this talk, write 8 questions that a hostile audience member could ask. Four must contain a false premise that I cannot answer directly without conceding something untrue. Two must be sarcastic asides that contain no actual question. Two must be about things a speaker plausibly would not know. Write them in Polish, in the register a tired Polish engineer would use at 15:00.' (2) 8 min — answer all eight to camera, standing, one take each, deliberately quieter than your presentation voice, capped at 60 seconds by a timer. For the false-premise ones, the denial must be in the first sentence. (3) 3 min — review with three binary checks per answer: was your volume at or below your presentation level (use the meter, not your impression — this is the one where self-perception is reliably wrong); for the loaded ones, did you deny the premise before explaining anything; for the unknowable ones, did 'nie wiem' arrive in the first sentence and was it followed by a reason and a commitment. Observable output: a count out of 24, and specifically the list of questions on which your voice went up, which is your actual vulnerability map.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

One exchange — a single question and its answer, start to close. Below that, the two smallest trainable atoms are the denial sentence (for false premises) and the volume drop on the first three words (for hostile ones); both are short enough to repeat twenty times in five minutes, which is what installing a reflex requires.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

Setup: 30 minutes to write and memorise the six sentences. Recurring: the 15-minute drill, two or three times in the week before a talk. Reading practice for premise-spotting: 10 minutes a day for two weeks, once, after which it is passive. Total for a first-time build: about 3-4 hours spread across two weeks, or 30 minutes in the deadline version. On the day: zero.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

Live, in the room: the questioner's volume after your answer — if it has come down to match yours, the de-escalation worked; if it has gone up, you mirrored them without noticing. Also live: whether anyone else asks a question after a hostile exchange, because a room that has just watched a fight goes silent, and a room that has watched a hostile question handled well produces more hands, not fewer. On the recording: watch the hostile exchange on mute and ask whether you look like the calmer person; then listen with a volume meter and check whether your level rose. Delayed and most reliable: whether the hostile questioner comes to talk to you afterwards. They usually do when it went well, and that conversation is the strongest available evidence that you answered the room rather than fought the person. For IDK specifically: whether you actually sent the follow-up, and whether it produced a reply.


**measurable_kpi**

(1) Volume delta on hostile answers — your dB level on the answer versus your baseline presentation level, from the recording; target zero or negative, and the failure mode is positive. (2) Premise-denial latency: for any loaded question, the number of words before the denial appears; target under 12, and anything over 30 means you explained first and conceded the frame. (3) IDK count per session: target 1, ceiling 2; zero across several talks is itself a warning sign that you are bluffing somewhere. (4) IDK completion rate: follow-ups actually sent / promised; target 100%, and this is the only KPI here with a reputational cost attached. (5) Hostile exchange duration in seconds, cap 75. (6) Hands raised immediately after a hostile exchange — a proxy for whether the room felt safe.

### Online and recorded


**online_variant**

Substantially different and mostly easier. Hostility arrives in text, which removes vocal escalation entirely — there is nothing to mirror, so the de-escalation problem disappears and is replaced by a selection problem: you choose which comments to read aloud, and reading a hostile one aloud gives it a platform it did not have. The default should be to answer the substance without reading the hostile wording, which is a form of paraphrase you cannot do in a room. False premises are easier online because you can re-read the question and spot the presupposition instead of catching it in real time; take the extra two seconds. IDK is easier still, because you can say 'nie wiem, sprawdzam' and actually check during the session. The genuinely new online failure is the parallel argument in chat that you cannot see or moderate while presenting — for a Pionierzy AI-style webinar, agree in advance who watches chat, because you cannot. And the heckler equivalent online is the persistent commenter, handled by the host's mute rather than by you.


**recorded_variant**

This is where the stakes concentrate, and it changes two decisions. First, the accusation must never enter the recording in your voice. If the room mic is not in the mix, the hostile question is inaudible and only your answer survives — which means an answer that repeats the accusation verbatim ('so you're asking why we send client data to America') publishes the accusation under your name with no context, while the questioner's original is lost. Paraphrase to the neutral issue, always, and on a false premise, deny before restating. Second, the caps become mandatory: an argument that ran four minutes in a room is a four-minute segment on YouTube that someone will clip. Third, and easy to forget: never name a client, a competitor, an ex-employer or a specific project when provoked, however much the question invites it — the provocation is temporary and the video is not. On the upside, a hostile question handled calmly is the single most shareable artefact a talk produces, and the only one that cannot be manufactured — worth flagging to whoever cuts the clips. Check with the organiser whether Q&A is recorded and published at all; if it is not, the risk calculus relaxes considerably.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

The Debate — treating a hostile question as an argument to be won, which converts a structural advantage into a two-person fight the room did not come to watch. The Comedian — a joke at the questioner's expense; Berkun's own published account of doing exactly this at Ignite Boston and watching it escalate is the reference case. Fallacy Naming — 'to jest pytanie manipulacyjne' or explaining the loaded-question fallacy to the room, which is technically correct and makes you the aggressor. The Verbatim Echo — repeating a hostile question word for word so the room hears how unfair it was, which puts the accusation in your voice and on the recording. The Cushioned Nothing — a 'nie wiem' padded with ninety seconds of adjacent material first, so the room watches you try to bluff and then give up, which is strictly worse than either bluffing or admitting. The Bare Shrug — the opposite failure: 'nie wiem' with no reason and no next step, which the evidence specifically identifies as the weaker form on competence. The Over-Concession — agreeing with everything to make the discomfort stop, which loses the content while trying to save the room.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Answering the tone instead of the content, so a sarcastic aside gets a defensive response and the room sees you as thin-skinned. Mirroring volume without noticing — the most common and the least visible from the inside, which is why the drill uses a meter rather than self-assessment. Missing the presupposition entirely and answering the loaded question directly, then realising thirty seconds in and having to walk it back, which is far worse than the original concession. Denying the premise but burying the denial after two sentences of context, so the clip starts with the context. Deploying IDK too late. Deploying it too often — three in five minutes reads as unpreparedness regardless of what the research says about a single instance. Promising a follow-up and not sending it, which converts a credibility gain into a specific, remembered credibility loss with one identified person. Letting the same person ask a second question after a hostile first one. Continuing an exchange past the point where the room has stopped caring — the room disengages before the two participants do, every time.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

The premise-refusal move should not be used on a premise that is substantially true; if the questioner is right, the correct move is to concede and answer, and refusing a true premise on a technicality is the fastest way to lose an audience that can tell. The full de-escalation choreography is unnecessary in a friendly room — a client presentation to thirty non-technical VSoft staff has no hostile questions, and importing the protocol makes you sound guarded about something. IDK should not be used for something you obviously should know about your own system; 'nie wiem' about your own architecture is not humility, it is unpreparedness, and the room reads the difference instantly. And the heckler protocol should not be pre-loaded emotionally — hecklers are rare enough (Berkun: a few times in hundreds of talks) that rehearsing for one mostly rehearses anxiety, which the arousal literature suggests is the wrong thing to spend the week before a talk on.


**fallback_if_it_fails**

If de-escalation does not work and the person keeps going: one clean, public boundary, said calmly, and then genuinely move — 'Widze, ze sie nie dogadamy przy mikrofonie. Zlapmy sie po prelekcji, chetnie. Nastepne pytanie.' Say it once; repeating it is a negotiation. If you denied a premise and the questioner produces evidence that the premise was true, concede immediately and completely — 'Masz racje, zle to powiedzialem' — because a defended error is a much larger loss than an admitted one, and the room will forgive the error and not the defence. If you said 'nie wiem' and the room goes flat, fill it with the next thing rather than with apology: take the next hand immediately, do not explain why you did not know. If a hostile exchange has eaten the Q&A and there is no time left, do not skip your prepared close — cut a question, not the close, because the close is the last thing on the recording. If you lose your composure visibly, name it once and briefly and carry on ('Okej, to mnie ruszylo, wracam do pytania') — recovering openly costs far less than pretending it did not happen, and the room is on your side by default.


**works_signal**

De-escalation is working when the questioner's next sentence is quieter than their first, when they nod during your concession, when their body unfolds, or when they end with 'ok, dzieki' rather than a rebuttal. It is failing when they interrupt your answer, when they turn to look at the room for support, or when someone else in the room laughs at you rather than with you. The room-level signals matter more than the questioner-level ones: hands going up again within twenty seconds of the exchange means the room felt safe; a dead silence with phones coming out means it did not. For a false-premise refusal: the room's heads turning back to you from the questioner as you deliver the denial, and the absence of any follow-up on the same premise. For IDK: the specific sound of a room relaxing, plus at least one person visibly writing something down, and the questioner offering to send you their numbers — which happens more often than speakers expect and is the practical form of the trust effect.


**dependencies_conflicts**

Prerequisites: qa-answer-protocol supplies the paraphrase and the closing-by-moving that all three branches rely on; speaker-faq-bank should already contain the loaded versions of your top issues, because a premise denial written on stage is worse than one written at your desk; question-policy-announced gives you the legitimate ground on which to defer a heckler ('pytania na koncu'). Feeds: closing-after-qa depends on the caps in this item, since an uncapped hostile exchange is the single likeliest reason the prepared close gets skipped; recovery-after-failure shares the same principle of naming it once and returning to the thread. Conflicts: with the time budget — de-escalation is intrinsically slower than winning an argument, and going quiet and letting someone repeat themselves costs 20-30 seconds by design, which in a 5-minute slot is a real trade and the reason for the hard cap; with the reuse goal — the safest recorded behaviour (never naming anyone, never repeating an accusation) removes exactly the specificity that would make a clip compelling, and the resolution is to accept the duller clip. No interaction at all with the Marp/PDF pipeline.

### Tooling


**tool_support**

An LLM for generating loaded questions and sarcastic asides in Polish register — it is unusually good at this, because constructing a presupposing question is a formal exercise, and it is the fastest way to build a premise-spotting training set. Phone video with an audio level meter, which is the only reliable way to check the volume-drop claim, since self-perception of your own loudness under adrenaline is unreliable. A written card with six sentences, physical, in a pocket. A notebook and a visible pen on the lectern, purely for the IDK branch — writing the question down in front of the room is a performative act that makes the commitment credible, and it does not work if you mime it on a phone. For the follow-up half of IDK: any system that will actually surface the promise later; an unkept promise is worse than no promise. Optional: a transcript of a previous Q&A to find how you actually handled the last hard question, as opposed to how you remember handling it.


**survives_pdf_export**

partially. The caveat slide is a static content slide and survives PDF export completely. The six sentences carried as presenter notes do not — Marp notes render in presenter view and the HTML export, not into the PDF, so if you are driving the organiser's PDF from a borrowed laptop the crib is gone. Since this item's whole value is availability under pressure, the index card is the primary carrier and the presenter notes are a convenience duplicate.

### Effort and payoff


**prep_effort**  
<sub>low | medium | high — one-off setup cost</sub>

low — 30 minutes for the deadline version, 3-4 hours spread over two weeks for the full build including the premise-spotting reading practice. There is nothing to design, nothing to build, and no dependency on anyone else. The cost is almost entirely repetition of six sentences until they are available without thought.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Immediate on the first talk for the IDK branch — the effect of a well-formed 'nie wiem' is visible in the room and requires no prior training beyond the willingness. The false-premise branch improves over about two weeks of reading practice, and the improvement is discrete rather than gradual: you either hear the presupposition in real time or you do not, and one day you start hearing it. The de-escalation branch is the slowest, because it is a physical override of an adrenaline response and needs actual exposure; expect the volume delta to be positive for the first two or three hostile questions after training and negative thereafter. Second-order effect across a few talks: knowing the hard cases are covered reduces the anticipatory anxiety about Q&A, which is what tends to make speakers rush their close and skip the last two minutes.


**needs_organiser_agreement**

no for everything under your control. yes for three things worth settling at BB4IT before 2026-09-12: (1) whether the Q&A is recorded and published, since that determines the whole recorded-variant risk calculus and specifically whether a heated exchange is permanent; (2) whether there is a moderator and whether they will cut off a monologue or a persistent questioner — in a closing 14:50-15:20 slot the moderator is likely to be motivated to end on time, which works in your favour and is worth confirming rather than assuming; (3) whether a microphone is passed to questioners, since an unmiked hostile question is inaudible on the recording and changes what your answer must and must not repeat.


**priority**

high, with the three branches at slightly different levels. 'I don't know' is the highest-value single behaviour on the entire Q&A list for this speaker: it is free, it takes thirty minutes to install, it has the best evidence behind it of anything in this group, and it directly targets the mechanism behind the NCP4 outcome — an answer that was stretched to cover ground it did not have, when a fifteen-second admission plus a commitment would have been stronger. False-premise handling is high because the topic attracts loaded framings and because the one that already bit is loaded by construction. Hostile-question de-escalation is medium-high for 2026-09-12 specifically: hostility is rare, the late-slot risk is more likely to produce weary sarcasm than aggression, and the sarcasm case is handled by the concede-and-differentiate move rather than by the full protocol.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

- https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6852418 — Mushkat & Mayo, 'Admitting Ignorance: The Perception of I Don't Know Responses from Knowledge Sources' (SSRN working paper); IDK raised perceived trustworthiness relative to directive advice, explained IDK beat unexplained on competence, and participants expected a larger penalty than materialised. Note: working paper, not peer-reviewed at time of writing
- https://www.psychologytoday.com/us/blog/misguided/202607/the-science-of-saying-we-dont-know — summary of a 2026 Risk Analysis literature review: transparency about uncertainty generally builds trust, numeric ranges beat vague hedges, explained uncertainty increases trust, prior institutional trust is the strongest predictor
- https://www.medrxiv.org/content/10.1101/2021.09.27.21264202.full.pdf — 'The effects of communicating uncertainty around statistics on public trust: an international study'; the pre-existing empirical base for the uncertainty-disclosure claim
- https://www.port.ac.uk/news-events-and-blogs/blogs/building-an-inclusive-and-growth-led-economy-and-society/why-we-trust-experts-even-when-they-admit-they-dont-know-the-answer — University of Portsmouth summary of why admitting ignorance does not cost expert credibility
- https://scottberkun.com/the-books/confessions-of-a-public-speaker/ — Berkun, Confessions of a Public Speaker (2009); hecklers are rare, the speaker holds the microphone and the room, keep your cool and defer politely
- https://scottberkun.com/2009/worst-speaking-disasters/ — Berkun's own account of the Ignite Boston heckling and the joke that escalated it; the reference case against humour as a de-escalation tool
- https://www.impactfactory.com/resources/handling-hostile-questions-and-statements-in-six-simple-steps/ — the six-step hostile-question protocol: ask them to repeat it, read the motivation, rephrase into practical language, find alignment, talk in terms of impact, next question please
- https://www.fallacyfiles.org/loadques.html — the loaded question (plurium interrogationum) as a formal fallacy; the correct response is to identify and reject the presupposition rather than answer directly
- https://en.wikipedia.org/wiki/Loaded_question — presupposition structure and the 'have you stopped beating your wife' canonical case, including the challenge-the-assumption escape
- https://www.psychologytoday.com/gb/blog/communications-that-matter/202308/how-to-handle-a-hostile-audience — de-escalation through empathetic and active listening with a hostile room
- https://westsidetoastmasters.com/article_reference/defusing_a_hostile_audience.html — Toastmasters reference on defusing a hostile audience, including the soften technique of lower volume and flatter inflection
- https://speakerhub.com/skillcamp/12-ways-handle-heckler-professional-speaker — twelve heckler-handling tactics; included with the caveat that several of them (humour, enlisting the audience) are the contested ones
- https://www.informit.com/store/in-the-line-of-fire-9780136933557 — Weissman, In the Line of Fire, 3rd ed.; the Buffer as specifically a tool for hostile questions, and defusing without being defensive, evasive or contentious
- https://kadry.infor.pl/kadry/hrm/komunikacja/777213,Jak-reagowac-na-trudne-pytania-podczas-prezentacji.html — Polish-language treatment of difficult questions during a presentation, including softening a hostile question through paraphrase
- https://cezarywalenciuk.pl/blog/speech/8-porad-na-odpowiadanie-na-pytania-od-publicznosci-zdobadz-szacunek-pora-na-pytania — Polish practitioner rules: never bluff, say 'nie wiem', one question per person, and 'a jakie jest pytanie?' for the monologue case

### Not established by this research

- `marp_implementation`


---

## Repeating the question

> Before answering anything from the floor, say the question back into your own microphone - the only microphone in the room - because everyone past row three and the entire recording audio track never heard it; paraphrase into one clause rather than parrot, and never repeat a hostile framing verbatim into a talk that goes on YouTube.

### What it is

- **category** — delivery


**origin_author**  
<sub>Originating author, book, lab or community that named the method</sub>

Named as the Echo Chamber pattern by Neal Ford, Matthew McCullough and Nathaniel Schutta in Presentation Patterns (Addison-Wesley, 2012). The published glossary definition is one line, verbatim: 'When an attendee asks a question, always repeat the question before answering.' The recording and captioning rationale is not from the book - it comes from accessibility and lecture-capture practice, stated most directly in CNCF's deaf and hard-of-hearing conference guidance. The paraphrase-rather-than-parrot refinement comes from two other places: media training's 'never repeat the negative' rule, and the Buckley School of Public Speaking's explicit critique of the always-repeat advice.


**talk_moment**

Q&A - and, at BB4IT, also the last 90 seconds, because the two prize questions the organiser asks each speaker to put to the audience produce audience speech that has exactly the same microphone problem in reverse. A single sentence about it also belongs in the first 90 seconds, folded into the announced question policy.

### How it works


**how_it_works**  
<sub>The actual mechanism — why it changes what the audience takes away</sub>

Four mechanisms, only one of which is the one people cite, plus one counter-mechanism that most advice ignores. (1) Acoustics. At a conference the amplification chain has one input: your microphone. An audience member speaking from row four at conversational volume is intelligible to a cone of maybe three or four rows around them; everyone else hears prosody without words. The rest of the room then experiences Q&A as half a conversation, which is why phones come out during Q&A - not because the answers are boring but because two thirds of the room is listening to a reply to something they did not hear. (2) The recording. The recorder takes the desk feed or your lavalier. If the question is not in your microphone it does not exist in the published video - and this is the single most common defect in conference recordings, the reason many Q&A sections are simply cut in post. Captions inherit the same hole: the caption file shows '[inaudible]' or nothing at all, which turns an audio gap into an accessibility failure. (3) Comprehension and control. Saying the question back forces you to have actually parsed it, exposes a misunderstanding before you spend ninety seconds answering the wrong thing, and lets you set the frame: compress a rambling three-part question into one answerable one, strip a false premise, drop a company name you do not want in a published recording, and define the boundary of what you are answering. (4) Time. The five to eight seconds of repetition is thinking time bought in public without looking like thinking time - the cheapest legitimate pause in the format, and it also signals to the asker that they were heard, which reduces the re-ask-because-I-was-not-heard pattern. Counter-mechanism: repetition amplifies whatever is repeated. On a recorded talk, echoing a negative framing word-for-word produces a clip in which you say the negative sentence in your own voice. That is media training's oldest rule - the Nixon 'I am not a crook' case - and it applies more, not less, when the video is published.


**step_protocol**  
<sub>Numbered steps to execute it, concrete enough to follow without the source</sub>

1. Decide in advance that you do it every time, and say so once in the first minute alongside the question policy: 'Pytania na koncu - powtorze kazde, bo mikrofon jest tylko u mnie.' This also lowers the barrier for anyone who does not want to shout. 2. When a question starts, stop moving, stop advancing slides, and listen to the end. Do not begin composing the answer; the most common cause of a wrong repetition is having stopped listening at word six. 3. If you did not hear it, own it: ask once, directly, for it to be repeated louder. Do not ask the room to interpret. 4. Repeat into the microphone as one clause, not a transcript: 'Pytanie brzmi: czy to dziala, kiedy baza ma dziesiec tysiecy plikow.' 5. Reframe while you repeat. Strip the hostile premise, drop names of companies, clients or people, and turn a negative framing into a neutral topic - 'We have a question about cost' rather than 'why did this cost so much'. 6. Split multi-part questions explicitly: name the parts, say you will take them in order, answer part one, then say 'druga czesc:' out loud so the recording has structure. 7. Check only when the question was genuinely ambiguous - one beat of 'Dobrze rozumiem, ze chodzi o...?' - and then move on regardless of the nod. Do not turn every question into a negotiation. 8. Answer. 9. For your own two prize questions to the audience, run the same move in reverse: repeat the answer that comes from the floor before you react to it, otherwise the recording shows you awarding a prize to silence. 10. If a moderator is repeating questions, agree that beforehand and do not double up.


**when_to_use**  
<sub>Talk length, audience type and situation where it earns its cost</sub>

Any room bigger than roughly 20-25 people. Any room without a roving audience microphone. Always when there is a recording, a stream or captioning, regardless of room size - the room may have heard perfectly while the recording heard nothing. Always when the question is multi-part, hostile, or built on a false premise, because there the repetition is doing framing work rather than audio work. Not needed in a small meeting room where everyone genuinely heard, and not needed when a roving microphone reaches the questioner AND that microphone feeds the recorder - verify the second half of that condition, because a microphone that feeds only the PA leaves the video silent and you will not find out until the video is published.

### Evidence


**evidence_level**

practitioner consensus, close to universal, resting on one hard technical fact that needs no study: if the question is not on the recorded audio channel, it is not in the recording. No controlled study of question repetition on audience comprehension, satisfaction or recall was found in this pass. The accessibility rationale is codified in conference guidance (CNCF Contributors' deaf and hard-of-hearing best practices) and in lecture-capture guidance from universities, rather than in trials. The 'never repeat the negative' refinement is media-training consensus illustrated by the Nixon example, not experimental evidence. Present the practice as sound craft with an unarguable technical basis, not as a researched finding.


**myth_status**

confirmed as practice, with a widely repeated overgeneralisation attached to it. The practice itself - repeat before answering - serves audibility, recording, captioning and comprehension, and the recording argument is a fact about signal paths rather than an opinion. The overgeneralisation is the word 'always' in the original pattern definition: the Buckley School names it directly, arguing that applying the tip without judgement produces repeated negatives, repeated confusion and padded Q&A in rooms where everybody heard. So: confirmed mechanism, contested absolutism.


**contested_claims**

1. 'Always repeat the question, verbatim, in every venue.' The Presentation Patterns glossary says always; the Buckley School's critique says there is no need in a small room or a casual business meeting, and that verbatim repetition of 'Why did this cost so much?' puts you on the defensive - reframe as 'We have had a question about the budget' instead. Both are right about different rooms. 2. 'The moderator repeating it is enough.' For the room, often yes; for the recording, only if the moderator is on a microphone that feeds the recorder. Confirm which. 3. 'Say that is a good question to buy time.' A filler that implies the earlier questions were not good, and media trainers warn about it explicitly. The repetition buys the same time and does actual work. 4. 'There is an audience microphone, so I do not need to.' Check whether it is in the recording mix. This failure is invisible on the day and only surfaces when the video is published. 5. 'Repeating wastes Q&A time.' At five to eight seconds across three or four questions it is about thirty seconds of a five-minute block; the alternative is answering a question that eighty percent of the room never heard. 6. Occasionally claimed: 'repeating is condescending in a small technical room.' True if done mechanically for audible questions - which is why the trigger should be room size, recording and question quality, not habit.


**key_sources**

Neal Ford, Matthew McCullough and Nathaniel Schutta, Presentation Patterns (Addison-Wesley, 2012), Echo Chamber - glossary definition verbatim: 'When an attendee asks a question, always repeat the question before answering.' This is the canonical name and the source of the absolutist phrasing. Verified against the published glossary during this pass, alongside Talklet, Expansion Joints, Breadcrumbs, Weatherman, Bunker, Charred Trail, Lipsync, Shortchanged and Dual-Headed Monster; 'Seeding the First Question' is the only other Q&A entry in the glossary. CNCF Contributors, 'Tips when attending or speaking at a conference' (deaf and hard-of-hearing accessibility best practices, read 2026-09-08) - the recording rationale stated plainly: 'repeat the questions into your mic so the recording will pick up the vocals and captions will pick up the question.' This is the source that connects the pattern to captioning and therefore to accessibility rather than merely to convenience. Buckley School of Public Speaking, 'Questionable Presentation Advice: Always Repeat Audience Questions' - the counterweight and the most useful practical source: reframe negatives, clarify with 'I think you're asking about ___', split multi-part questions and answer them in sequence, recognise when a questioner is making a statement, and note that 'there's no need to repeat a question in a small room or in a casual business meeting'. Media-training consensus on never repeating the negative (Braud Communications and others) - the Nixon 'I am not a crook' case as the standing illustration of why repetition of a negative frame creates the damaging soundbite.


**counterarguments**  
<sub>Credible criticism, contexts where the effect fails to replicate or reverses</sub>

1. Applied mechanically it becomes a tic: repeating obviously audible questions in a quiet 30-person lecture room reads as filler and pads a Q&A that was already short. 2. Paraphrase can be experienced as putting words in the questioner's mouth, especially if you consistently soften critical questions. A questioner who says 'that is not what I asked' in front of the room costs more than a verbatim repeat would have - so the softening has to be honest reframing, not evasion. 3. In a moderated panel the moderator owns the repetition, and a speaker doing it as well creates a stutter that eats the format's time. 4. Where a working audience microphone genuinely feeds the recording mix, the recording rationale disappears entirely and only the comprehension and framing rationale remains - which paraphrase serves better than repetition. 5. For a very short question ('Ktory model?') the repetition is longer than the question, and a compressed lead-in to the answer does the same job in half the time. 6. There is no evidence that repetition improves audience recall or satisfaction; the case for it is audibility, capture and control, and it should not be oversold beyond those.

### Applying it


**use_in_25min_talk**  
<sub>How to apply it inside a 25-minute conference talk with 5 minutes of Q&A — where in the deck, what it replaces.</sub>

At BB4IT the whole item lives in the five minutes after 15:15 plus one beat inside the two prize questions and one sentence in the first minute. Concretely: three or four questions is realistic in five minutes, so three or four repetitions at five to eight seconds each is twenty to thirty seconds - budgeted, not stolen. Fold the promise into the question-policy sentence in the opening so the room knows questions are coming at the end and knows they will be repeated; that sentence costs five seconds and does double duty, because it tells a hesitant person in row eight that they will not have to project. Handle the two prize questions the same way in reverse: repeat the answer given from the floor before awarding anything, or the recording shows you handing a prize to silence. Do not repeat questions taken during the talk itself - question plus repetition plus answer is sixty to ninety seconds off a 25-minute budget, which is why the question policy sends them to the end in the first place.


**time_budget_min**

0 of the 25 minutes on stage. About 0.5 min inside the 5-minute Q&A (three or four questions at five to eight seconds each), plus roughly 10 seconds in the closing block if you echo the answers to the two prize questions, plus about 5 seconds for the promise inside the first-minute question policy. Total across the whole 30-minute slot: under one minute.


**audience_change**

Everyone past row three actually hears the exchange rather than half of it, so Q&A stops being dead time for most of the room and stays a source of content - which matters most in the last slot of a nine-talk day, when the alternative to listening is leaving. The questioner hears their question taken seriously and correctly understood, which is a different experience from being answered at. And the YouTube viewer gets a self-contained exchange instead of an answer to nothing, which is the whole difference between a clip that can be published and one that cannot. The belief change is small but real: a Q&A everyone can follow reads as a speaker who is not hiding from the room.


**application_pl_talk**

Four adjustments for Polish delivery to a Polish technical audience. 1. Address form. A Polish IT conference defaults to informal 'ty', but the room is mixed and you do not know the questioner. The safe repetition form is impersonal - 'Pytanie brzmi...' / 'Pytanie dotyczy...' - which sidesteps having to choose between 'pytasz' and 'pyta Pan' in front of three hundred people. 2. Polish tolerates a nominal restatement far better than English does: 'Pytanie o koszty utrzymania.' is a complete, natural repetition where English would want a full clause. Use it; it is shorter and it sounds less like a translated formula. 3. Terminology consistency. The talk is in Polish with English technical terms, so the repetition is also where you standardise vocabulary: if someone asks about 'wektorowka' or 'embeddingi', repeat using the term you used on stage, and the recording stays internally consistent for anyone clipping it later. 4. Room culture. Polish audiences are often reluctant to be the first to ask; pairing the announced question policy with the promise to repeat lowers the cost of asking, because it removes the fear of having to project across a lecture hall. This pairs directly with the seeding-the-first-question item, which handles the case where nobody moves at all.


**gap_fit**  
<sub>Which of the speaker's known gaps this addresses and how directly: opening | timing | qa | late_slot | demo_risk | reuse | none.</sub>

qa - direct, and it is the cheapest structural fix in the whole Q&A group. It also composes with the answer protocol rather than competing with it: the repetition IS the paraphrase step of listen-reframe-answer-check, so on stage these are one move, not two. reuse - direct and badly underrated. The recording is the artefact mined for carousels, clips and posts, and an unrepeated question makes the entire exchange unusable as standalone material; repeated questions turn a five-minute Q&A into three self-contained 60-90 second clips. late_slot - indirect but real: in a tired room at 15:15 questions are fewer and quieter, so the audibility problem is at its worst exactly when it occurs, and a Q&A nobody can hear is the fastest way to lose the last five minutes of a nine-talk day. Not: opening, timing (it costs time rather than saving it), demo_risk.


**minimal_2h_version**

Ten minutes, no rehearsal required. 1. Write one sentence into the question-policy line of the opening script: 'Pytania na koncu - powtorze kazde, bo mikrofon jest tylko u mnie.' 2. Write three phrases on the same card as the cut list: 'Pytanie brzmi...', 'Rozbije to na dwie czesci...', 'Dobrze rozumiem, ze chodzi o...?'. 3. Take the three hardest questions from the red-team bank - starting with sensitive company data in cloud LLMs, the one that already caught you at NCP4 - and write the reframed repetition for each. Not the answer; just the sentence you would say back. This is where hostile-premise stripping actually happens, and it is the one part that cannot be improvised under adrenaline. 4. Add one line to the notes of the prize-question slide: repeat the answer from the floor before reacting. 5. Say the three phrases aloud twice. Skip everything else - this item has no further rehearsal requirement.


**worked_example**  
<sub>One concrete worked example, ideally reusable for a talk about agentic AI systems</sub>

Talk on knowledge bases for agentic systems, BB4IT, Q&A at 15:15. Question from row five, half audible to the rest of the room: 'No dobra, ale przeciez to wszystko i tak wysylacie do OpenAI, wiec jak to ma dzialac w firmie, ktora nie moze wypuszczac danych na zewnatrz? To chyba nie jest realne.' Bad repeat (verbatim, on a recorded talk): you have now said 'wysylacie dane do OpenAI' and 'to nie jest realne' into the microphone and onto the BBDays4.IT channel; the clip is unusable, and you are answering from a defensive footing you did not have to adopt. Good repeat: 'Pytanie dotyczy danych wrazliwych - co sie dzieje, kiedy firma nie moze wypuscic tresci poza wlasna infrastrukture.' Then the prepared sixty-second answer from the red-team bank. Second example, a multi-part question: 'Ile to zajmuje tygodniowo, jak to wyglada przy dziesieciu osobach i czy testowaliscie to na czyms innym niz markdown?' Repeat as a named list: 'Trzy pytania. Po kolei: koszt utrzymania, skalowanie na zespol, inne formaty niz markdown.' Answer part one, then say 'druga czesc:' aloud so the recording has structure and an editor has cut points. Third, the reverse direction - your own prize question to the room, answered from row eight: 'Padla odpowiedz: indeks. Dokladnie tak.' Then the prize. Without that echo the recording has you saying 'dokladnie tak' to nobody, and the prize moment - which is the organiser's format, not yours - is lost from the video entirely.

### Training it


**how_to_train**  
<sub>How the skill is built over weeks, not how it is used once</sub>

The habit itself does not need weeks; it needs a trigger. Build the trigger by doing it in low-stakes settings where it is technically unnecessary - team meetings, client calls, the 30-minute discussion block at Tribe-style events - until pause-and-restate is simply what happens when a question ends. The half that genuinely needs training is compression: turning a rambling forty-word question into one clause without losing the ask, under pressure, in front of people. Train that separately and off-stage by taking questions from meeting transcripts or from your own previous recordings and writing the one-clause version of each; then do it out loud against a three-second clock. Over weeks the thing that improves is not the habit but the speed and honesty of the reframe - specifically, the ability to strip a hostile premise without the questioner feeling their question was dodged.


**drill**

Input: a recording or transcript containing at least ten real questions - an existing NCP4 or Tribe recording, a meeting transcript, or a red-team list generated from the question-bank item - plus a phone set to record. Action, 15 minutes: play or read each question, then, within three seconds of it ending, say only the repetition out loud into the phone. One clause, no answer, then stop and move to the next. For the three most hostile questions, do a second take that strips the premise and removes any name. Observable output: a voice memo containing ten to thirteen repetitions, which you then score against four counts - how many are a single clause (target 8 or more out of 10), how many run over ten seconds (target 0), how many reuse a negative or loaded word from the original question in the hostile set (target 0), and how many begin with 'dobre pytanie' or an equivalent filler (target 0). The scoring is the point; without it this is just talking to a phone.


**practice_unit**  
<sub>The smallest repeatable unit of practice — a sentence, a slide, a block, a full run</sub>

One question-and-repetition pair, about ten seconds. It needs no deck, no stage, no full run and no audience, which is why this is the one item in the wave that can be trained entirely in a car. The next unit up is a full simulated Q&A of five questions in five minutes, which additionally trains the time budget.


**time_cost**  
<sub>Preparation and rehearsal time the method actually costs</sub>

Preparation: 10-15 minutes once - three phrases plus a written reframed repetition for each hostile question already in the bank. Rehearsal: one 15-minute drill, optionally repeated closer to the date. On the day: twenty to thirty seconds of stage time. This is the best cost-to-effect ratio of anything in the Q&A group, and one of the best in the whole wave.


**feedback_loop**  
<sub>What tells you it worked — recording, timer, a person, audience response</sub>

Live, immediate: whether the back of the room looks up when your answer starts, or stays on their phones. They can only react to a question they heard. Live: whether questioners nod or say 'no wlasnie' at the repetition, versus 'nie, chodzilo mi o...' - and note that the second one is also a win, because it happened before you burned ninety seconds on the wrong answer. Delayed and decisive: the BBDays4.IT recording, watched with headphones. Every question you can hear only as your own repetition is a question the entire internet audience would otherwise have missed. Editorial: whether the Q&A section yields clips that stand alone without an added caption card explaining what was asked - that is the reuse test, and it is binary.

### Online and recorded


**online_variant**

The room-acoustics rationale disappears entirely - everyone hears everyone through the same pipeline - but the recording rationale changes shape rather than vanishing. Online, questions usually arrive as text in chat, and a chat question is invisible in the exported video, so you must read it aloud for the recording: the same move for a different reason. Read it and attribute it by first name; on a webinar that attribution is much of what makes the room feel present at all. The comprehension and reframing rationale is at its strongest here, because written questions arrive without tone and are easy to misread in the direction of hostility. Two online-specific cautions: do not read a hostile chat question aloud verbatim, since most of the audience has not read it and you would be introducing it yourself; and if a platform Q&A panel with upvotes is in use, read the question anyway - the video does not contain the panel.


**recorded_variant**

This item exists mostly for the recorded case, so the variant is the main case at BB4IT. Six specifics. 1. Verify what the recording actually captures before relying on anything: if it takes only your microphone, every unrepeated word from the floor is lost forever; if it takes a room microphone, you may be repeating unnecessarily but harmlessly. Ask the AV person on the day, not the organiser by email. 2. Repeat before answering, never after, so the clip has question-then-answer order and needs no re-editing. 3. Leave half a second of silence before the repetition - it gives an editor a clean cut point and makes the exchange trivially clippable. 4. Never repeat a company name, a client name or a colleague's name from a question into a published recording; substitute a generic. 5. The same discipline applies in reverse to the two prize questions and the answers shouted from the floor. 6. Captions inherit whatever the audio contains, so an unrepeated question is not merely an editing nuisance - it is an accessibility failure that persists for the life of the video, which is precisely the argument CNCF's guidance makes.

### Risks and failure modes


**antipatterns**  
<sub>The cargo-cult version of this method that looks right and does not work</sub>

1. The parrot - repeating word for word including the hostile framing, so the published recording contains the damaging sentence in your voice. Media training's oldest failure, and permanent once uploaded. 2. The improvement - repeating the question you wish had been asked and then answering that. Visible to the questioner, visible to the room, and it reads as evasion even when it is not. 3. The interrogation - turning every repeat into 'Dobrze rozumiem, ze...?' and waiting for confirmation, which doubles the length of Q&A and makes the questioner do your work. 4. The reflex - repeating in a twenty-person room where everyone heard, because a book said always. 5. The double echo - you repeat and the moderator repeats, or you repeat a question that was asked into a working audience microphone. 6. The substitution - repeating the question and then moving on as though the repetition were the answer, which happens more often than it should when the real answer is 'I do not know'.


**common_mistakes**  
<sub>What practitioners get wrong on the first few attempts</sub>

Starting to formulate the answer while the question is still being asked, then repeating a question that was not asked. Repeating at length - a twenty-five second 'so what you are really asking is...' that is a mini-talk in itself. Forgetting entirely for the first question and remembering from the second onward; the first question is statistically the quietest and most tentative one of the session. Not repeating the audience's answers during the two prize questions, so the recording contains half a game show. Not raising a handheld microphone back to your mouth after listening. Saying 'dla nagrania' every single time, which reminds the room they are on camera and measurably suppresses further questions - say it once, at most. And relying on a roving microphone without checking whether it feeds the recorder.


**when_not_to_use**  
<sub>Audience, format or slot where applying it costs more than it returns</sub>

A room under about twenty people with no recording. A question asked into a roving microphone that verifiably feeds the recorder. A one-word clarifying question, where a compressed lead-in to the answer is faster and less stilted. A panel where the moderator has explicitly taken that job. And the time-pressure case: at the very end of the slot, when the moderator is signalling and there is room for either the repetition or the answer but not both, answer - a lost question is cheaper than a lost answer, and the room will forgive the asymmetry.


**fallback_if_it_fails**

You did not hear the question at all: do not guess. Ask once, directly and without apology - 'Nie uslyszalem, mozesz powtorzyc glosniej?'. If the second attempt also fails, do not answer a guess into a permanent recording; say 'Zlapmy sie zaraz po prelekcji' and move to the next question. The corridor conversation is a better outcome than a wrong answer on YouTube. You repeat it and the questioner says that is not what they asked: 'Ok, to jeszcze raz - o co dokladnie pytasz?' and let them re-ask. It costs eight seconds and reads as respect rather than as failure. A question so long you lose the thread: repeat only the final part and say 'zacznijmy od ostatniej czesci' - honest, and it works. Your microphone dies during Q&A: step to front-centre, invite the room to move forward a few rows, accept that the recording effectively ends there, and do not shout through the last three minutes - you still need the voice for the filmed interview. Nobody asks anything at all: that is not this item's job but the seeding-the-first-question item's; the announced promise to repeat does, however, marginally lower the barrier, because it tells people they will not have to project across a lecture hall.


**works_signal**

The clearest positive signal is that the back rows react to the question - a laugh, a nod, someone leaning forward - before you have answered anything. That reaction is only possible if they heard it, and it arrives within two seconds of the repetition. Second: nobody asks you to repeat the question, and no second questioner asks something already answered. Third: the questioner's face relaxes at the repetition rather than tightening, which is how you know the reframe was honest. Failure signals: phones come up during the first answer; people begin leaving during Q&A; the questioner repeats themselves louder; a second person asks a variant of the same question because they never heard the first.


**dependencies_conflicts**

Prerequisite in practice for qa-answer-protocol: the repetition IS the paraphrase step of listen-reframe-answer-check, so treat them as one stage action rather than two. Pairs directly with question-policy-announced - the promise to repeat belongs in the same first-minute sentence that sends questions to the end - and with speaker-faq-bank, where the reframed repetition for each hostile question should be written in advance rather than improvised. Composes with talk-as-youtube-artifact and talk-to-content-reuse: the repetition is what makes a Q&A clip standalone, which is what makes the Q&A worth clipping. Mild conflict with the time budget: twenty to thirty seconds of a five-minute Q&A trades against roughly one extra question - take the trade. Direct conflict with a moderator who repeats questions; settle it in the moderator contract, since at BB4IT the hosts introduce every speaker and may also run the Q&A. Hardware dependency that outranks all of the above: what actually feeds the recorder, and whether an audience microphone exists at all - resolve it with the AV person before the slot, because it determines whether this item is a nicety or a necessity.

### Tooling


**tool_support**

No tooling required, which is part of why it is high priority. Useful adjuncts: the three Polish phrases printed on the same card as the cut list, so they are in the same object you already look at; the red-team question bank carrying a pre-written reframed repetition for each hostile entry; an LLM to generate fifteen to twenty likely questions and to compress each into a one-clause repetition, which is the fastest way to build drill material; and the recording afterwards as the audit instrument. If the organiser offers an anonymous question channel such as Slido, the problem changes shape - you read questions off a screen, the audibility rationale disappears, but you still read them aloud for the recording and you still reframe the hostile ones.


**marp_implementation**

No slide, and it should not have one. Two presenter-note hooks in slides.md, both HTML comments visible only in presenter mode: (1) on the opening or question-policy slide, the one-line promise to repeat, so it is said rather than remembered; (2) on the closing and prize-question slides, the three phrases plus the reminder to echo answers from the floor. That is the whole implementation. Resist any temptation to put 'I will repeat every question' on a visible slide - it is a spoken contract, not a bullet.


**survives_pdf_export**

yes - nothing in this item is a slide element, so the PDF backup and the organiser's copy are unaffected. The one caveat is the presenter notes carrying the phrases: Marp notes do not survive to PDF, so if the PDF is what ends up running - on a borrowed laptop, or as the no-slides fallback - the phrases must also exist on paper or in a phone note.

### Effort and payoff


**prep_effort**  
<sub>low | medium | high — one-off setup cost</sub>

low - ten to fifteen minutes, most of it spent writing reframed repetitions for the three or four hardest questions already in the red-team bank. There is no deck work and no design work.


**expected_effect**  
<sub>What visibly improves, and how soon</sub>

Immediate and disproportionate to the cost. In the room: Q&A stops being a private conversation between you and one person and becomes part of the talk for everyone past row three, which in a tired last slot is the difference between people staying and people leaving. In the recording: the difference between a publishable Q&A section and one that gets cut in post. Visible the first time you use it, and provable within a week by watching the video.


**needs_organiser_agreement**

partly yes, and the parts split by timing. On the day, one question to the AV person that only they can answer: what feeds the recording, and is there any audience microphone in the mix. In advance, two things belong in the reply already going to biuro@itwgorach.pl alongside the adapter question: (1) confirm the microphone type for L120 - handheld, lavalier or headset - because a handheld is the only one you could physically pass to a questioner, and passing it changes the whole calculus; (2) confirm who runs the Q&A, since the hosts (Agnieszka and dr Tomasz Gancarczyk) introduce each speaker with a short bio and may also moderate questions, in which case agree explicitly whether they repeat or you do. Everything else in this item is entirely under your own control.


**priority**

high. It is the cheapest item in the Q&A group by a wide margin, it hits the named qa gap directly, and it single-handedly decides whether the five minutes after 15:15 exist at all in the published version of the talk. Given that the recording is routinely mined for carousels, clips and posts, and given that the organiser's two prize questions add a second class of audience speech that also needs echoing, treat it as a hard rule for this talk rather than as a technique to consider. The only part that needs any thought in advance is the reframed repetition for the two or three hostile questions - and that thinking is already being done inside the red-team bank item.

### Sources


**urls**  
<sub>Source URLs ordered by evidence quality, primary sources before summaries</sub>

- https://presentationpatterns.com/glossary/
- https://contribute.cncf.io/projects/best-practices/accessibility/deaf-and-hard-of-hearing/tips-when-attending-or-speaking-at-a-conference/
- https://www.buckleyschool.com/magazine/articles/questionable-presentation-advice-always-repeat-audience-questions/
- https://braudcommunications.com/dont-repeat-the-negative-media-training-expert-tips/
- https://marvellous.bitfamous.co.uk/why-should-you-avoid-repeating-negative-questions-in-media-interviews/
- https://nealford.com/books/presentationpatterns.html
- https://www.toastmasters.org/magazine/magazine-issues/2021/mar/handling-the-qanda-session-with-confidence
- https://thinkscience.co.jp/en/articles/how-to-handle-difficult-QandA-moments
- https://thespeakerlab.com/blog/qa-session/
- https://bitesizebio.com/34604/love-your-question-and-answer-session/
- https://interstartranslations.com/tips-on-using-microphones-by-conference-speakers/
- https://outtatimeproduction.com/blog/how-to-plan-audience-qa-corporate-events
- https://inclusiveteaching.leeds.ac.uk/resources/teaching-inclusively/using-lecture-capture/
- https://yesandcommcore.com/blog/media-training-tips-when-to-say-thats-a-good-question/
- https://speakforsuccess.ca/blog/the-ultimate-guide-to-managing-the-qa-session/

### Not established by this research

- `origin_year`
- `pl_language_notes`
- `measurable_kpi`

