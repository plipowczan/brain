---
title: "Spaced Repetition and Flashcards from Your Own Notes — Research Report"
date: 2026-11-13
enableToc: true
openToc: true
tags: ["research", "compiled", "learning", "spaced-repetition", "flashcards", "anki", "fsrs"]
type: compiled-note
source: "deep research — content/_raw/research-workspaces/spaced-repetition-flashcards-own-notes/"
agent-created: true
summary: "21 researched items on spaced repetition: learning-science evidence, schedulers (Leitner, SM-2, FSRS, benchmark), card writing, tools, AI-made cards, workload"
---

# Spaced repetition and flashcards from your own notes — Research Report

21 items researched in depth. Values the research agents marked uncertain are left out.

## Table of Contents

1. [Spacing effect and optimal gaps](#spacing-effect-and-optimal-gaps) - Category: science | Evidence: strong
2. [Retrieval practice and the testing effect](#retrieval-practice-and-the-testing-effect) - Category: science | Evidence: strong
3. [Successive relearning](#successive-relearning) - Category: science | Evidence: moderate
4. [Forgetting curve, desirable difficulties and memory models](#forgetting-curve-desirable-difficulties-and-memory-models) - Category: science | Evidence: mixed
5. [Generation effect: your own cards vs premade decks](#generation-effect-your-own-cards-vs-premade-decks) - Category: science | Evidence: strong
6. [Metacognitive illusions and deck mixing](#metacognitive-illusions-and-deck-mixing) - Category: science | Evidence: mixed
7. [Real-world evidence: Anki in medical education](#real-world-evidence-anki-in-medical-education) - Category: science | Evidence: weak
8. [Classic schedulers: Leitner boxes and SM-2 / SuperMemo](#classic-schedulers-leitner-boxes-and-sm-2-supermemo) - Category: algorithm | Evidence: strong
9. [FSRS (Free Spaced Repetition Scheduler)](#fsrs-free-spaced-repetition-scheduler) - Category: algorithm | Evidence: moderate
10. [Other memory models and the open SRS benchmark](#other-memory-models-and-the-open-srs-benchmark) - Category: algorithm | Evidence: moderate
11. [Minimum information principle (Wozniak's 20 rules)](#minimum-information-principle-wozniaks-20-rules) - Category: card-design | Evidence: anecdotal
12. [Writing prompts for conceptual knowledge](#writing-prompts-for-conceptual-knowledge) - Category: card-design | Evidence: moderate
13. [Cloze deletion and image occlusion](#cloze-deletion-and-image-occlusion) - Category: card-design | Evidence: moderate
14. [Mnemonic medium, salience prompts and 'spaced everything'](#mnemonic-medium-salience-prompts-and-spaced-everything) - Category: card-design | Evidence: weak
15. [Anki](#anki) - Category: tool | Evidence: moderate
16. [Flashcards inside Obsidian and plain-text SRS](#flashcards-inside-obsidian-and-plain-text-srs) - Category: tool | Evidence: anecdotal
17. [Other SRS apps: SuperMemo, RemNote, Mochi, Quizlet, Readwise Mastery](#other-srs-apps-supermemo-remnote-mochi-quizlet-readwise-mastery) - Category: tool | Evidence: anecdotal
18. [LLM-generated flashcards from your own notes](#llm-generated-flashcards-from-your-own-notes) - Category: workflow | Evidence: moderate
19. [AI study modes and agent bridges to SRS](#ai-study-modes-and-agent-bridges-to-srs) - Category: tool | Evidence: anecdotal
20. [Pitfalls and workload management](#pitfalls-and-workload-management) - Category: workflow | Evidence: anecdotal
21. [Spaced repetition vs Zettelkasten: what to memorise vs what to link](#spaced-repetition-vs-zettelkasten-what-to-memorise-vs-what-to-link) - Category: workflow | Evidence: moderate

## Spacing effect and optimal gaps

### Basic Info

**name**: Spacing effect and optimal gaps

**category**: science

**origin**: First documented by Hermann Ebbinghaus in 'Über das Gedächtnis' (1885), who used himself as the only subject. The modern quantitative picture, in which the best gap depends on how long you need to remember, comes from Nicholas Cepeda, Harold Pashler, Edward Vul, John Wixted and Doug Rohrer (UC San Diego / University of South Florida): a 2006 meta-analysis and a 2008 'temporal ridgeline' study. Karpicke & Bauernschmidt (Purdue, 2011) and Latimier, Peyre & Ramus (ENS Paris, 2021) answered the expanding-vs-equal question.

**one_line**: The same amount of study split into sessions with gaps beats cramming it into one sitting. The best gap gets longer the longer you need to remember, but it shrinks as a share of that horizon: roughly 20-40% of a one-week horizon, 5-10% of a one-year horizon.

### Evidence

**evidence_strength**: strong for the spacing effect itself, moderate for the exact optimal-gap numbers. It is one of the most replicated findings in learning research: hundreds of experiments over 140 years and several independent meta-analyses (Cepeda 2006; Donoghue & Hattie 2021, d = 0.85; Latimier 2021, g = 0.74; Mawson & Kang 2025 for classrooms, d = 0.54). The gap-to-horizon ratios rest mainly on one large online study (Cepeda 2008) with a single restudy session and trivia facts. They are backed by the same team's lab benchmark and by Bahrick's longitudinal data. 'Expanding schedules are not inherently better than equal ones' is moderate: mixed single studies, but two meta-analyses converge.

**numbers_or_effect_sizes**:
- Cepeda 2006, Table 1: mean final recall 47.3% spaced vs 36.7% massed, across 271 comparisons, 254 studies and 14,811 participants (t(540) = 6.6, p < .001). Only 12 of 271 comparisons showed no effect or a massing advantage. For retention over at least one day, effect sizes sometimes exceed d = 1.0 (Carpenter, Pan & Butler 2022 summarising Cepeda 2006).
- Cepeda 2008, optimal gap vs zero gap: +64% final recall (d = 1.1) and +26% recognition (d = 1.5). Recall gain over zero gap at each RI: 7 days +10%, 35 days +59%, 70 days +111%, 350 days +77%.
- Cepeda 2008, interpolated optimal gaps for recall: about 3, 8, 12 and 27 days for RIs of 7, 35, 70 and 350 days, i.e. 43%, 23%, 17% and 8% of the RI. For recognition: 1.6, 7, 10 and 25 days (24%, 19%, 14%, 7%). Among the gaps actually tested, the best for the 350-day RI was 21 days.
- Cepeda 2008 lab benchmark (150 subjects, final test 6 months later): the best gap was 1 month, implying a gap-to-RI ratio of about 15-20%.
- Bahrick, Bahrick, Bahrick & Bahrick 1993, Psychological Science 4(5):316-321: 4 subjects, 300 English-foreign word pairs, 9 years. 13 relearning sessions 56 days apart gave retention comparable to 26 sessions 14 days apart, tested 1-5 years later.
- Karpicke & Bauernschmidt 2011 (96 students, 24 Swahili-English pairs, final test after 1 week): studied once 1%; recalled once 26%; three massed retrievals 25%; short spacing (15 trials total) 49%; medium (30) 64%; long (90) 75%, i.e. +200% over massed. Expanding vs equal vs contracting: F < 1, no difference.
- Latimier, Peyre & Ramus 2021: spaced vs massed retrieval g = 0.74 (39 effect sizes); expanding vs uniform g = 0.034, n.s. (54 effect sizes); considerable heterogeneity (I² about 49%, per citing reviews).
- Kim & Webb 2022, Language Learning 72(1):269-319, second-language learning: 98 effect sizes, 48 experiments, N = 3,411. Medium-to-large spacing benefit; short and long spacing were equal on immediate tests, but longer spacing won on delayed tests; equal and expanding schedules performed similarly.
- Donoghue & Hattie 2021, Frontiers in Education, re-analysis of Dunlosky's 10 techniques: distributed practice d = 0.85 (150 effects, I² = 83%), the highest of the ten.
- Mawson & Kang 2025, Behavioral Sciences 15(6):771, applied classroom studies: d = 0.54 (22 reports, 31 effect sizes, >3,000 students). Murray, Horner & Göbel 2025, Educational Psychology Review, mathematics: g = 0.28 (27 studies, 53 effect sizes); g = 0.24 when embedded in real courses.

**evidence_setting_and_comparator**: Mostly lab and online experiments (Cepeda 2008 used an internet panel; Karpicke & Bauernschmidt 2011 used a lab with spacing measured in trials within one session), plus longitudinal case data (Bahrick 1993, 4 family members over 9 years) and a growing set of classroom studies (Mawson & Kang 2025 meta-analysis). The comparator is massed practice (the same number of exposures back-to-back) or shorter vs longer gaps, with total study time equated. Schedule studies compare expanding vs equal vs contracting with total spacing equated.

**retention_interval_tested**: Most of the literature: under 1 day (80% of comparisons in Cepeda 2006; only 4% over 1 month). Anchor studies: Ebbinghaus 1 day (relearning savings); Cepeda 2008: 7, 35, 70 and 350 days; Cepeda lab benchmark: 6 months; Karpicke & Bauernschmidt 2011: 1 week; Bahrick 1993: 1, 2, 3 and 5 years after training ended.

### Practice

**how_to_apply**: 1) Decide the horizon first: how long you need to remember this (a talk next week, an exam in two months, a career-long fact). 2) Never rely on one session. Schedule at least one more retrieval session on a later day. 3) Set the first gap from the ridgeline. Cepeda 2008's interpolated optima are about 3 days for a 1-week horizon, 8 days for 5 weeks, 12 days for 10 weeks and 27 days for a year. As a rule of thumb, aim for 10-30% of the horizon for weeks-to-months and 5-10% for a year. 4) When unsure, err longer: a too-long gap costs less than a too-short one. 5) For multi-year retention, keep reviewing with gaps that grow as items stabilise (Bahrick: fewer, wider-spaced sessions matched twice as many narrow ones). An SRS does this bookkeeping. Use one because it automates scheduling, not because expanding intervals are magic: total spacing is what matters. 6) Make every spaced session a retrieval session (recall, then check) rather than re-reading; spaced retrieval gives g = 0.74 over massed retrieval. 7) Expect the spaced schedule to feel harder and less fluent. That is the mechanism, not a sign it is failing.

**concrete_example**: Goal: remember 30 key facts from my book notes for a talk in 5 weeks (RI about 35 days). Day 0: after writing the note, turn the facts into prompts and recall each until it is correct once. Cepeda 2008's interpolated optimum for a 35-day RI is about 8 days (23%), so session 2 goes on day 8. An optional session 3 goes on about day 20, then the talk on day 35. For comparison, in Cepeda 2008 the optimal gap raised 35-day recall by 59% over a zero-day gap. For a career-long fact, the first gap would be roughly 3-4 weeks (about 8% of a year), with later reviews spaced further out. Karpicke & Bauernschmidt's schedules show that the shape of the schedule does not matter: three retrievals at 1-5-9, 5-5-5 and 9-5-1 trials gave the same 1-week recall (about 46-51%), while widening the total to 30-30-30 trials raised it to about 75%.

**from_own_notes**: Spacing is about scheduling, so the question for own notes is which notes get which horizon. Book notes and Zettelkasten permanent notes that hold claims you want to quote from memory get a long horizon (months to years) and should go into an SRS, where gaps grow automatically. Project and meeting notes usually need a short horizon (days to weeks), so one or two reviews spaced by about 20-40% of the deadline is enough. The Cornell 'Review' step (recite again every few days, not the night before) is spacing done on paper. Revisiting notes in Obsidian while linking (Zettelkasten) or distilling them (Building a Second Brain) gives spaced re-exposure, but not spaced retrieval. It helps less than closing the note and recalling first. Keep a link from each card back to its source note so a spaced review can end with checking the original.

**time_cost**: Spacing itself costs no extra study time: spacing studies equate total time, and only the calendar position changes. It often saves repetitions. Ebbinghaus needed 38 spaced vs 68 massed repetitions (about 44% fewer) for the same next-day savings. Bahrick 1993: 13 sessions 56 days apart matched 26 sessions 14 days apart (half the sessions). The real costs are scheduling discipline and slightly slower acquisition at long gaps: Bahrick reported longer gaps slowed acquisition a little, and in Karpicke & Bauernschmidt success on repeated tests fell from .97 (short) to .90 (long). In SRS terms, the workload depends on how many items you add and how long the intervals grow; see the FSRS and workload items.

**knowledge_type_fit**: Fits best: verbal facts, vocabulary, definitions, paired associates, trivia, names. Motor skills also benefit: over 80% of verbal and of motor-skill studies show a benefit (Moss 1995 via Cepeda 2006). It also helps concepts and some transfer (Carpenter, Pan & Butler 2022 report spacing benefits for transfer as well as retention). Weaker: intellectual skills such as math computation (only a third of studies showed a benefit; math meta-analysis g = 0.28) and some STEM course settings. Not useful when you only need the material once, very soon: for a test in 5 minutes, massed study wins.

**failure_modes**: 1) Cramming new material right before a deadline, so there is no room for gaps. 2) Gaps that are too short for the horizon, such as reviewing daily for something needed in a year. This wastes reviews, and too-short gaps hurt more than too-long ones. 3) Spaced re-reading instead of spaced retrieval: looking at the note feels like review but tests nothing. 4) Trusting the fluency of massed study ('I know it now') and stopping. 5) Obsessing over exact intervals or expanding-vs-equal schedules instead of simply doing the next review. Total spacing is what matters. 6) In an SRS, skipped days pile up into review debt that compresses later gaps (see the workload item).

### Tools

**availability_and_price**: n/a (science item). Every spaced repetition app implements it (Anki, the Obsidian Spaced Repetition plugin, SuperMemo, Mochi, RemNote), and a paper calendar or Leitner box works too.

**obsidian_integration**: n/a for the science itself. It is applied in Obsidian through the Spaced Repetition plugin or by exporting cards to Anki (see the tool items).

**data_ownership_and_format**: n/a

**automation_interface**: n/a (libraries that implement spaced scheduling, such as ts-fsrs and py-fsrs, are covered in the FSRS item).

**maintenance_signals**: n/a

### Links

**relation_to_vault_notes**: Learn Like a Pro (Oakley & Schewe) recommends spaced repetition with Anki or Quizlet, reviewing harder items more often. This item supplies the evidence behind that advice and a rule for choosing gaps. In the Cornell note-taking system, the 'Review' step (recite again every few days, not the night before) is spacing on paper. Zettelkasten / How to Take Smart Notes (Ahrens): the slip-box remembers for you, so spacing matters only for what you need to recall without the box. Building a Second Brain: progressive summarisation revisits notes over time, which is spaced exposure but not spaced retrieval.

**sources**:
- https://www.evullab.org/pdf/CepedaVulRohrerWixtedPashler-PS-2008.pdf (Cepeda et al. 2008, full text read)
- https://pubmed.ncbi.nlm.nih.gov/19076480/ (Cepeda et al. 2008 abstract)
- https://www.evullab.org/pdf/CepedaPashlerVulWixtedRohrer-PB-2006.pdf (Cepeda et al. 2006, full text read)
- https://pubmed.ncbi.nlm.nih.gov/16719566/ (Cepeda et al. 2006 abstract)
- https://learninglab.psych.purdue.edu/downloads/2011/2011_Karpicke_Bauernschmidt_JEPLMC.pdf (Karpicke & Bauernschmidt 2011, full text read)
- https://link.springer.com/article/10.1007/s10648-020-09572-8 (Latimier, Peyre & Ramus 2021; abstract and citing reviews)
- https://www.gwern.net/doc/psychology/spaced-repetition/1993-bahrick.pdf (Bahrick et al. 1993, full text read)
- https://sc-pan.github.io/pdf/NRP_2022.pdf (Carpenter, Pan & Butler 2022, Nature Reviews Psychology 1:496-511, full text read)
- https://www.frontiersin.org/articles/10.3389/feduc.2021.581216/full (Donoghue & Hattie 2021)
- https://doi.org/10.1111/lang.12479 (Kim & Webb 2022, abstract via search)
- https://www.mdpi.com/2076-328X/15/6/771 (Mawson & Kang 2025)
- https://eprints.whiterose.ac.uk/id/eprint/229807 (Murray, Horner & Göbel 2025)
- https://stemeducationjournal.springeropen.com/articles/10.1186/s40594-024-00468-5 (Bego et al. 2024, search summary only)
- https://www.frontiersin.org/articles/10.3389/fpsyg.2025.1632206/full (Franzoi et al. 2025, search summary only)
- https://notes.andymatuschak.org/zKo9oLfGnps2DZxPMotN9EiTdwAi6dZrTqX (Matuschak's notes on Ebbinghaus ch. 8, secondary)

**last_verified**: 2026-11-13. Primary full texts read: Cepeda 2006 (Table 1 and the expanding-ISI section), Cepeda 2008 (all pages), Karpicke & Bauernschmidt 2011, Bahrick 1993 (abstract and intro), Carpenter, Pan & Butler 2022, Donoghue & Hattie 2021. Abstract or secondary only: Latimier 2021, Kim & Webb 2022, Mawson & Kang 2025, Murray 2025, Bego 2024 and Franzoi 2025 (search summaries), and the Ebbinghaus repetition counts (Matuschak's notes, not the book).

### Other Info

**uncertain** (left out):
- key_studies
- limitations_and_criticism
- replication_status
- status_2026

## Retrieval practice and the testing effect

### Basic Info

**name**: Retrieval practice and the testing effect

**category**: science

**origin**: Early demonstrations: Abbott (1909), Gates (1917, 'recitation'), Spitzer (1939). Revived and named for education by Henry L. Roediger III and Jeffrey D. Karpicke (Washington University in St. Louis), 'Test-enhanced learning' (Psychological Science, 2006). Dunlosky, Rawson, Marsh, Nathan & Willingham (2013) ranked practice testing as one of only two 'high utility' study techniques.

**one_line**: Recalling something from memory (a flashcard, a quiz, a blank-page brain dump) makes it stick far better than spending the same time re-reading it, even though re-reading feels more productive.

### Evidence

**key_studies**:
- Roediger & Karpicke 2006, Psychological Science 17(3):249-255. Students learned short science prose passages. Experiment 2 (180 students): after 1 week, studying once and taking three recall tests (STTT) gave 61% recall, studying three times and testing once (SSST) 56%, and studying four times (SSSS) 40%. At 5 minutes the order reversed: 83%, 78% and 71% for SSSS, SSST and STTT. The SSSS group predicted the best one-week memory and did worst.
- Meta-analyses of testing vs restudy. Rowland 2014, Psychological Bulletin 140(6):1432-1463: 159 effect sizes from 61 studies, g = 0.50 [0.42, 0.58]. Adesope, Trevisan & Sundararajan 2017, Review of Educational Research 87(3):659-701: 272 effect sizes from 118 articles, about 15,400 participants; practice tests beat restudy and every other comparison condition. Yang, Luo, Vadillo, Yu & Shanks 2021, Psychological Bulletin 147(4):399-435: classroom quizzing g = 0.499 across 222 studies and 48,478 students. Dunlosky et al. 2013, Psychological Science in the Public Interest 14(1):4-58: of 10 techniques, only practice testing and distributed practice were rated high utility; rereading, highlighting and summarisation were rated low.
- Pan & Rickard 2018, Psychological Bulletin 144(7):710-756, on transfer of test-enhanced learning: 192 effect sizes, 122 experiments, 67 articles, N = 10,382. Overall transfer d = 0.40 [0.31, 0.50]. Transfer is strongest across test formats and to application and inference questions. It is weakest to rearranged cue-answer items, to untested material and to worked-example problems.
- Karpicke & Blunt 2011, Science 331:772-775: retrieval practice vs elaborative studying with concept mapping, with learning time matched and a final test 1 week later. Retrieval scored 0.67 vs 0.45 (d = 1.50) in Experiment 1, and d = 1.07 and 1.01 in Experiment 2, even when the final test was a concept map. A preregistered re-examination by Mayrhofer, Kuhbandner & Frischholz 2023 (Frontiers in Psychology, N = 230) attributes the advantage to extra memorisation time built into the retrieval condition.

**evidence_strength**: strong for retention: over 200 studies across a century, several independent meta-analyses agreeing on medium effects (g of about 0.50 in the lab and about 0.50 in classrooms; 0.50-0.63 per Carpenter, Pan & Butler 2022), and a consistent direction. There is some publication bias (unpublished studies g = 0.25 vs published 0.58 in Rowland 2014), but the effect survives. Moderate for transfer: d = 0.40 overall, but bias-corrected estimates fall to about zero when none of the helpful moderators is present. Contested for complex problem-solving material and mathematics, where g = 0.18 with a confidence interval crossing zero (Murray, Horner & Göbel 2025).

**limitations_and_criticism**: 1) The benefit only appears after a delay. At 5 minutes, restudy beats testing (81% vs 75%), so retrieval feels worse in the moment and learners misjudge it. 2) It needs success or feedback. Without feedback and with initial success of 50% or less, there is no effect (g = 0.03, Rowland 2014). 3) Transfer is limited. Near transfer works, but there is little or no spillover to untested material or to reversed cue-answer pairs. Retrieving 'Jefferson purchased Louisiana from WHOM?' did not help 'Jefferson purchased WHAT from Spain?' (Pan & Rickard 2018). Correct-answer-only feedback reduces transfer, and bias-corrected estimates are about zero when no helpful moderator is present. 4) The complex-material debate. Van Gog & Sweller 2015 (Educational Psychology Review 27(2):247-264) argue that the testing effect shrinks or disappears as element interactivity rises (problem solving, worked examples). Karpicke & Aue 2015 (EPR 27(2):317-326) and Rawson 2015 ('Still a winner', EPR 27(2):327-331) reply that complexity is orthogonal to retrieval, that the review omitted positive studies with complex texts, and that no worked-example study actually manipulated element interactivity. The working consensus: for novice problem solving, studying worked examples beats trying to solve problems as retrieval, while repeatedly retrieving a solved scenario helps (Carpenter, Pan & Butler 2022). In mathematics the effect is not robust (g = 0.18). 5) The concept-mapping result is contested. Karpicke & Blunt's retrieval condition included an extra restudy phase and a 'recall everything' instruction. Lechuga et al. 2015 and O'Day & Karpicke 2021 replicated the pattern, but the preregistered Mayrhofer et al. 2023 found the advantage vanished once concept mappers got the same extra memorisation. The sensible reading: retrieval and elaboration combine; neither should replace the other. 6) Publication bias and heterogeneity (unpublished g = 0.25; I² = 84). 7) Engagement matters. A 2026 online (Prolific) study by Sigayret, Parmentier & Silvestre found no testing effect, which its authors attribute to disengaged crowd workers. 8) Self-grading can interfere. In Higham et al. 2023 (preregistered, online), requiring a memory rating on each trial reversed the effect so that spaced restudy beat spaced retrieval. This is relevant for apps that ask you to grade every card. 9) Common misreadings: treating any multiple-choice quiz as equally good (recognition gives the smallest effects), and treating retrieval as flashcards only (blank-page recall, explaining aloud and practice questions all count).

**evidence_setting_and_comparator**: Mostly lab experiments with students, plus a substantial classroom literature (Yang 2021: 222 classroom studies; Agarwal 2021: 50 classroom experiments) and some online samples. Comparators: restudy or re-reading for the same time (Rowland 2014; Roediger & Karpicke 2006); no re-exposure or filler activity (included in Adesope 2017, which inflates effects relative to restudy); elaborative study via concept mapping (Karpicke & Blunt 2011; Mayrhofer 2023); worked-example study (the complex-material debate); a non-testing re-exposure control for transfer (Pan & Rickard 2018).

**retention_interval_tested**: Roediger & Karpicke 2006: 5 minutes, 2 days, 1 week. Karpicke & Blunt 2011 and Mayrhofer 2023: 1 week. Rowland 2014 split studies into under 1 day vs 1 day or more (larger effect at 1 day or more). Pan & Rickard 2018: varied; each extra hour of retention interval slightly increased transfer (+0.0033 d per hour). Classroom studies: unit and term exams, weeks to months later. Carpenter, Pan & Butler 2022 cite single retrieval sessions with benefits lasting 9 months, and multi-session retrieval (Bahrick) lasting at least 8 years.

### Practice

**how_to_apply**: 1) Replace re-reading with closed-book recall. Close the note, write or say everything you remember, then compare with the source. 2) Prefer production (cued or free recall) over recognition (multiple choice); recognition gives the smallest effects. 3) Always check the answer. Feedback roughly doubles the effect (g = 0.73 vs 0.39) and is essential when you get less than half right. 4) Retrieve more than once, and space those retrievals (see the spacing and successive-relearning items): STTT beat SSST. 5) Phrase prompts the way you will need the knowledge. Transfer is strongest when the answer you practise is the answer you will need later, so make reverse cards or application questions explicitly instead of hoping for spillover. 6) Add 'why' and 'how' prompts (elaborated retrieval), which improves transfer. 7) For new problem-solving procedures, study worked examples first and then practise retrieving the solution steps. 8) Ignore the feeling. Material you tested will feel less known than material you re-read, even when you remember it better a week later.

**concrete_example**: Blank-page recall after reading a chapter: 20 minutes reading, 10 minutes writing everything I remember without looking, 5 minutes comparing with the text and marking gaps. In Roediger & Karpicke 2006, students who swapped reading time for recall (STTT) read the passage only 3.4 times vs 14.2, yet remembered 61% vs 40% a week later. A card from a book note: Q: 'Roediger & Karpicke 2006: one-week recall after repeated testing vs repeated study?' A: '61% vs 40%; restudy only wins on a 5-minute test.' To make it transferable, I add an application card: Q: 'I have 30 minutes before tomorrow's meeting and 2 pages of notes. Reread or recall?' A: 'Recall first, then check; rereading only wins if the test is in 5 minutes.'

**from_own_notes**: Own notes already contain the raw material for prompts. Cornell notes: the cue column holds the questions and the notes column holds the feedback, so covering the right side and answering aloud is retrieval practice. Zettelkasten permanent notes: the title or core claim becomes a 'what does X claim and why?' prompt, and the note itself is the answer to check against. Book notes: turn key numbers, definitions and arguments into cue-answer pairs. Because transfer depends on response congruency, write cards in the direction you will use the knowledge (term to definition and definition to term if you need both) and include 'why' cards. Keep a link from every card to its source note so feedback is one click away. A slip-box does not need retrieval for what you only need to find; reserve retrieval practice for what you must produce without looking.

**time_cost**: No extra time compared with re-reading: in Roediger & Karpicke 2006 and Karpicke & Blunt 2011 total learning time was matched, and retrieval simply replaced reading. Lab recall tests ran 7-10 minutes per passage. The overhead is checking answers (feedback) and writing prompts. In practice, a 5-10 minute closed-book recall after a reading session, or a flashcard review where each card takes seconds, is enough to get the effect. Workload for card-based review is covered in the FSRS and workload items.

**knowledge_type_fit**: Fits: facts, vocabulary, definitions, paired associates (g = 0.59), prose and science texts (0.58), medical diagnosis and treatment procedures (strong transfer, Pan & Rickard 2018), and comprehension and inference questions when retrieval is elaborated. Weaker: single words (0.33), novice problem solving (worked examples work better), mathematics (g = 0.18), far transfer and deductive inference after a single retrieval. Does not reach untested material: practising one fact does not teach its neighbours.

**failure_modes**: 1) Recognition-only quizzing, such as multiple choice or flipping a card and thinking 'yes, I knew that'. 2) Peeking or giving up before a real retrieval attempt. 3) Retrieving without checking when success is low, which gives no effect and can entrench errors. 4) Pattern-matching the card wording: answering the cue rather than the concept. Rephrased or reversed questions then fail (Agarwal 2021: smaller effects for rephrased questions; Pan & Rickard: rearranged items barely transfer). 5) Retrieving once and stopping. 6) Lenient self-grading, which drops items before they are learned (Dunlosky & Rawson 2012), and per-card rating reactivity (Higham et al. 2023). 7) Treating retrieval and elaboration as either-or: writing notes in your own words and recalling them combine well.

### Tools

**availability_and_price**: n/a (science item). Any medium works: paper, the Cornell cue column, flashcard apps (Anki, the Obsidian Spaced Repetition plugin), or quizzes generated from your notes.

**obsidian_integration**: n/a for the science itself. It is applied in Obsidian through flashcard plugins or by covering parts of notes (see the tool items).

**status_2026**: Settled as a general effect. Active debates concern complex materials and problem solving, mathematics (Murray et al. 2025, g = 0.18), whether retrieval beats elaborative activities once time and memorisation are matched (Mayrhofer et al. 2023), engagement in online samples (Sigayret et al. 2026), and reactivity of self-ratings (Higham et al. 2023). AI-generated quizzes are a new delivery channel, but the evidence they rest on is this same literature (see the LLM items).

**data_ownership_and_format**: n/a

**automation_interface**: n/a

**maintenance_signals**: n/a

### Links

**relation_to_vault_notes**: Cornell notes: the 'Recite' step (cover the notes, answer the cue questions, check) is retrieval practice, and the vault note already cites Dunlosky et al. 2013. Learn Like a Pro (Oakley & Schewe): the split-notes method (cover the details, recall from key ideas) and spaced repetition are retrieval practice. Zettelkasten / How to Take Smart Notes (Ahrens) favours elaboration (writing in your own words, linking). The Karpicke & Blunt vs Mayrhofer debate suggests elaboration and retrieval complement each other: write the permanent note, then later recall it. Building a Second Brain: a second brain retrieves for you; to remember yourself you still need retrieval practice.

**sources**:
- https://www.gwern.net/docs/spaced-repetition/2006-roediger.pdf (Roediger & Karpicke 2006, full text read)
- https://pubmed.ncbi.nlm.nih.gov/25150680/ (Rowland 2014; full text read via a PDF copy at courseware.epfl.ch)
- https://sc-pan.github.io/pdf/PR_2018.pdf (Pan & Rickard 2018, full text read)
- https://doi.org/10.3102/0034654316689306 (Adesope, Trevisan & Sundararajan 2017; abstract and secondary summaries only)
- https://scholars.hkbu.edu.hk/en/publications/testing-quizzing-boosts-classroom-learning-a-systematic-and-meta-/ (Yang et al. 2021, abstract)
- https://doi.org/10.1177/1529100612453266 (Dunlosky et al. 2013)
- https://learninglab.psych.purdue.edu/downloads/2011/2011_Karpicke_Blunt_Science.pdf (Karpicke & Blunt 2011, full text read)
- https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1258359/full (Mayrhofer, Kuhbandner & Frischholz 2023)
- https://research-portal.uu.nl/en/publications/not-new-but-nearly-forgotten-the-testing-effect-decreases-or-even/ (van Gog & Sweller 2015)
- https://notes.andymatuschak.org/zMjGz9ddgwjxadBRxQCnnWY (summary of Karpicke & Aue 2015; secondary)
- https://doi.org/10.1007/s10648-021-09595-9 (Agarwal, Nunes & Blunt 2021, abstract via search)
- https://www.frontiersin.org/articles/10.3389/feduc.2021.581216/full (Donoghue & Hattie 2021)
- https://sc-pan.github.io/pdf/NRP_2022.pdf (Carpenter, Pan & Butler 2022, full text read)
- https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1727423/full (Sigayret, Parmentier & Silvestre 2026)
- https://eprints.whiterose.ac.uk/id/eprint/229807 (Murray, Horner & Göbel 2025)
- https://doi.org/10.1007/s10648-023-09809-2 (Higham et al. 2023, full text read)

**last_verified**: 2026-11-13. Primary full texts read: Roediger & Karpicke 2006, Rowland 2014 (all moderator values), Pan & Rickard 2018, Karpicke & Blunt 2011, Mayrhofer et al. 2023, Sigayret et al. 2026, Carpenter, Pan & Butler 2022, Higham et al. 2023, Donoghue & Hattie 2021. Abstract or secondary only: Adesope 2017 (the g values are from secondary sources), Yang 2021, Agarwal 2021, Murray 2025, the van Gog & Sweller / Karpicke & Aue / Rawson 2015 exchange (abstracts and summaries), Lechuga 2015 and O'Day & Karpicke 2021 (described in citing papers).

### Other Info

**uncertain** (left out):
- numbers_or_effect_sizes
- replication_status

## Successive relearning

### Basic Info

**name**: Successive relearning

**category**: science

**origin**: Harry P. Bahrick introduced the paradigm in 1979 ('Maintenance of knowledge: Questions about memory we forgot to ask', Journal of Experimental Psychology: General 108:296-308): English-Spanish word pairs relearned to criterion in sessions up to 30 days apart. Katherine A. Rawson and John Dunlosky (Kent State University) named and systematised it as 'successive relearning' from 2011 onward. Carpenter, Pan & Butler (2022) and Rawson & Dunlosky (2022) reviewed it.

**one_line**: Quiz yourself with feedback until you get each item right, then come back on later days and do it again until right. It is retrieval practice plus spacing plus a mastery criterion, and it is what a well-used flashcard deck does.

### Evidence

**key_studies**:
- Bahrick 1979 (JEP: General 108:296-308), Bahrick & Phelps 1987 (JEP: LMC 13:344-349) and Bahrick, Bahrick, Bahrick & Bahrick 1993 (Psychological Science 4:316-321). Foreign vocabulary was relearned to criterion across sessions. Longer intersession intervals (30 days in 1979; 56 days in 1993) slowed acquisition slightly but gave much better retention years later. In 1993, 13 sessions 56 days apart matched 26 sessions 14 days apart.
- Rawson & Dunlosky 2011, JEP: General 140(3):283-302, 'Optimizing schedules of retrieval practice for durable and efficient learning: How much is enough?'. Key-term definitions were practised to an initial criterion of 1-4 correct recalls, then relearned to 1 correct recall in 1-5 later sessions, with durability measured 1-4 months later. The number of relearning sessions mattered far more than the initial criterion. Rawson & Dunlosky 2012 (Educational Psychology Review 24:419-435) turned this into a recommendation: reach 1 correct recall initially, then relearn to 1 correct recall in 3-4 later sessions.
- Classroom studies. Rawson, Dunlosky & Sciartelli 2013 (Educational Psychology Review 25:523-548), introductory psychology: exam scores rose more than 10 percentage points over business-as-usual concepts, and 24 days after the exam students recalled over 60% of relearned concepts vs under 20% of self-studied ones. Janes, Dunlosky, Rawson & Jasnow 2020 (Applied Cognitive Psychology 34:1118-1132), biopsychology: about a 10% boost, more than a letter grade. Higham, Zengel, Bartlett & Hadwin 2022 (Journal of Educational Psychology): an independent lab with a time-matched restudy control; the benefit held at 42 and 68 days for practised items.
- Reviews. Rawson & Dunlosky 2022, Current Directions in Psychological Science 31(4):362-368, 'Successive relearning: An underexplored but potent technique for obtaining and maintaining knowledge'. Carpenter, Pan & Butler 2022, Nature Reviews Psychology 1:496-511, 'The science of effective learning with spacing and retrieval practice', which presents successive relearning as the combination of the two and best supported for factual material.

**evidence_strength**: moderate. It is a coherent research program of well-controlled lab experiments plus several randomised within-student classroom studies (intro psychology, biopsychology, university psychology, eighth-grade statistics). However, most of it comes from one group (Rawson & Dunlosky, Kent State), with one independent group (Higham, Southampton), and no meta-analysis existed as of November 2026. Its two components, retrieval practice and spacing, each have strong meta-analytic support. Evidence is concentrated on term definitions and vocabulary in college students. It is weak for mathematical problem solving (d = 0.28) and for children (one study).

**limitations_and_criticism**: 1) Narrow evidence base: mostly one lab group, mostly college students, mostly key-term definitions and vocabulary (Rawson & Dunlosky 2022 acknowledge the base is still limited). 2) Boundary for procedures: for probability problems the gain was small (d = 0.28) and absolute performance stayed low (Rawson et al. 2020), so more or different practice is needed for problem solving. 3) Transfer: clear for near-transfer exam questions that apply definitions (Rawson 2013), but minimal for transfer or new questions in the time-matched Higham 2022 study. 4) Weak comparators. Many studies compare against business-as-usual self-study or single-session learning rather than exposure-matched restudy, which confounds retrieval with extra exposure (a critique made by Higham et al. 2023). Higham 2022 matched time and still found a benefit. 5) Self-scoring. When learners grade their own answers, overconfidence drops items too early (Dunlosky & Rawson 2012). In Higham et al. 2023 (three preregistered online experiments, Swahili-English pairs, sessions 2 days apart), requiring a correctness rating on every trial made spaced restudy beat spaced retrieval. Without ratings, retrieval won. This is a caution for apps that ask you to grade every card. 6) Relearning override: relearning sessions shrink the effects of the initial criterion and of spacing differences (Rawson & Dunlosky 2013, 'Relearning attenuates the benefits and costs of spacing', JEP: General 142:1113-1129; Vaughn, Dunlosky & Rawson 2016, Memory & Cognition). This is forgiving in practice, but it means optimal-gap results from single-restudy studies do not map directly onto relearning schedules. 7) Up-front time and tedium; how much relearning very long-term retention needs is still unknown. 8) Common misreading: 'successive relearning is just flashcards'. Flashcards can be used without a criterion or spacing, and notes or a textbook with answers covered work too.

**evidence_setting_and_comparator**: Lab experiments (Rawson & Dunlosky 2011, 2013; Rawson et al. 2018, 2020; Higham et al. 2023 online, preregistered) and randomised within-student classroom studies (Rawson 2013 intro psychology; Janes 2020 biopsychology; Higham 2022 university psychology; Rawson 2021 eighth-grade statistics). Comparators: single-session learning to a higher criterion (e.g. 3 correct recalls in one sitting); business-as-usual self-study of other course concepts; spaced restudy on the same schedule; time-matched restudy (Higham 2022); different numbers of relearning sessions (0-3, 1-5).

**retention_interval_tested**: 2 days (Rawson & Dunlosky 2011, Experiment 2); 1 week (Rawson & Dunlosky 2022 example; Rawson 2018; Rawson 2020); 3 weeks (Rawson 2018); 24 days after the course exam (Rawson 2013); 1 month (Rawson 2021; Vaughn 2016, Experiment 2); 1-4 months (Rawson & Dunlosky 2011); 42 and 68 days (Higham 2022); up to 8 years in Bahrick's vocabulary studies.

**replication_status**: Replicated across the Kent State program (several lab studies and three classroom studies, from eighth grade to university) and independently by Higham et al. 2022 (Southampton) with a time-matched control. Rawson et al. 2020 found only a small effect for math procedures. No meta-analysis of successive relearning specifically had been published as of November 2026 (none found). Higham et al. 2023 showed that the retrieval advantage can reverse under per-trial self-ratings, which qualifies self-graded relearning.

### Practice

**how_to_apply**: 1) Build small sets: 6-10 items for long definitions or concepts (the classroom studies used stacks of 6-8), more for short vocabulary. 2) Session 1, the day you first learn the material: try to recall each item; if correct, set it aside for today; if wrong, study the answer and put it at the end of the stack. Cycle until every item has been correct once. Going to 3 correct gives a stronger start (d = 0.63 on the next session), but relearning matters more. 3) Relearn in at least 3 later sessions, each at least a day apart (every 2 days, or weekly), each time to 1 correct recall. 4) Recall in your own words and write long answers out rather than thinking them, so the attempt is complete and easier to score. 5) Score strictly against the source: partial is wrong. 6) Add booster sessions before the exam or talk, and occasionally afterwards if you want to keep the knowledge. 7) In app terms, Anki's 'Again' within a session re-queues the card until correct (the within-session criterion), and later scheduled reviews act as relearning sessions. A spaced repetition app therefore approximates successive relearning automatically, as long as you grade honestly and do not drop cards after one success.

**concrete_example**: A stack of 8 concepts from my book note on memory. Q: 'What is the spacing effect?' A: 'The same study time split into sessions with gaps gives better long-term recall than one block.' Q: 'What is successive relearning?' A: 'Retrieve to criterion, then relearn to criterion in several spaced sessions.' Day 0: cycle until all 8 are correct once; for 8-10 long definitions this takes about 30-40 minutes (Dunlosky et al. 2023 guide). Day 2: relearn to criterion, about 15 minutes. Day 5 or day 7: relearn, under 5 minutes. Day 14: a booster. Expected result, by analogy with the studies: about 60-80% recall one week to one month later, vs about 20-26% for a single session or own methods (Rawson 2013, 2018, 2021; Rawson & Dunlosky 2022).

**from_own_notes**: Own notes work directly as the material. Dunlosky et al. suggest writing notes on one side of the page and using the blank back for retrieval attempts. Cornell notes: Recite (cover the notes, answer the cues) plus Review (repeat every few days) becomes successive relearning if every cue must be answered correctly in each session. Book notes: key definitions and numbers become a small stack, started the day the note is written and relearned 3 times. Zettelkasten permanent notes: only notes you need to produce without the box should become prompts, such as 'what does this note claim and why?', with the note as the answer to score against. Answers in your own words are encouraged; the classroom studies did not require verbatim answers. Link each card to its source note so feedback and re-study are one click away.

**time_cost**: The first session is the expensive one; relearning gets much faster. About 30-40 minutes to first learn 8-10 lengthy definitions, about 15 minutes in the first relearning session, and under 5 minutes in the next (Dunlosky et al. 2023, citing Rawson & Dunlosky 2011). Eighth graders took about 3 minutes per concept in the first session and about 1 minute per concept by the third relearning session (Rawson 2021). For a semester, plan 3+ sessions per stack (e.g. every 2 days), plus one or two boosters before a cumulative exam.

**knowledge_type_fit**: Best: foreign-language vocabulary, key-term definitions, concept definitions, labels on diagrams (e.g. neuroanatomy images in Janes 2020), and factual material generally (Carpenter, Pan & Butler 2022). It also supports near-transfer questions that apply a definition (Rawson 2013). Weaker: mathematical procedures and problem solving (d = 0.28), and far-transfer or new questions (Higham 2022). Not needed for ideas you only have to find again; the note system holds those.

**failure_modes**: 1) Lenient self-scoring (counting a partial answer as correct), so items leave the stack too early. 2) Covert recall of long answers, which is not a full retrieval attempt; write them out. 3) 'One and done': skipping the relearning sessions, which gives the 26% single-session outcome. 4) Stacks of long definitions that are too big, so sessions run long and get abandoned. 5) Time management, the main barrier students report (Maurer & Cabay 2023, Teaching & Learning Inquiry). 6) Using it only for vocabulary while ignoring concepts and processes. 7) Per-card confidence ratings that may undercut the retrieval benefit (Higham 2023). Keep grading quick and honest rather than deliberative.

### Tools

**availability_and_price**: n/a (science item). It can be done with paper flashcards, covered notes, or any spaced repetition app that re-queues missed cards within a session (Anki, the Obsidian Spaced Repetition plugin).

**obsidian_integration**: n/a for the science itself. It is applied through Obsidian flashcard plugins or by exporting to Anki (see the tool items).

**status_2026**: An active, growing research topic. Key reviews: Rawson & Dunlosky 2022; Carpenter, Pan & Butler 2022. A practical guide for educators: Dunlosky, Greve, Badali, Wissman & Rawson 2023 (APA Division 2, 'In Their Own Words'). Higham et al. 2023 added the self-rating reactivity caveat. No dedicated meta-analysis was found as of November 2026.

**data_ownership_and_format**: n/a

**automation_interface**: n/a

**maintenance_signals**: n/a

### Links

**relation_to_vault_notes**: Learn Like a Pro (Oakley & Schewe) recommends spaced repetition with Anki and focusing on the harder items, which is successive relearning in app form. Cornell notes: the 5 Rs (Recite, then Review every few days) become successive relearning once a mastery criterion is added. Zettelkasten / How to Take Smart Notes (Ahrens): the slip-box remembers for you, so successive relearning is reserved for what must be recalled without it. Building a Second Brain: distilling notes revisits them without retrieval; successive relearning is the step that turns a distilled note into knowledge you can produce from memory.

**sources**:
- https://www.unh.edu/teaching-learning-resource-hub/sites/default/files/media/2023-06/itow-successive-relearning-dunlosky-greve-badali-wissman-rawson.pdf (Dunlosky, Greve, Badali, Wissman & Rawson 2023, guide for educators, full text read)
- https://sc-pan.github.io/pdf/NRP_2022.pdf (Carpenter, Pan & Butler 2022, Nature Reviews Psychology, full text read)
- https://doi.org/10.1177/09637214221100484 (Rawson & Dunlosky 2022, Current Directions; paywalled, numbers via secondary sources)
- https://firth.substack.com/p/learning-and-re-learning (secondary quote of the 68% vs 26% result from Rawson & Dunlosky 2022)
- https://doi.org/10.1037/a0023956 (Rawson & Dunlosky 2011, JEP: General)
- https://doi.org/10.1007/s10648-013-9240-4 (Rawson, Dunlosky & Sciartelli 2013)
- https://doi.org/10.1007/s10648-020-09528-y (Rawson, Dunlosky & Janes 2020, math boundary condition)
- https://repository.essex.ac.uk/30280/ (Higham, Zengel, Bartlett & Hadwin 2022)
- https://doi.org/10.1007/s10648-023-09809-2 (Higham et al. 2023, 'Spaced retrieval practice: Can restudying trump retrieval?', full text read)
- https://link.springer.com/10.3758/s13421-016-0606-y (Vaughn, Dunlosky & Rawson 2016, relearning override)
- https://www.kent.edu/psychology/comprehension-memory-lab/rawsons-comprehension-memory-lab-publications (Rawson lab publication list)
- https://www.gwern.net/doc/psychology/spaced-repetition/1993-bahrick.pdf (Bahrick et al. 1993, full text read)
- https://scholars.georgiasouthern.edu/en/publications/challenges-of-shaping-student-study-strategies-for-success-replic-3/ (Maurer & Cabay 2023)

**last_verified**: 2026-11-13. Primary full texts read: the Dunlosky et al. 2023 educator guide (which summarises Rawson 2013, Janes 2020, Higham 2022, Rawson 2020 and Rawson 2021 with numbers), Carpenter, Pan & Butler 2022, Higham et al. 2023 (which reports the Rawson 2018 80%/77% figures), and Bahrick 1993. Secondary or abstract only: Rawson & Dunlosky 2022 (paywalled; the 68% vs 26% figure is from a quoting blog), Rawson & Dunlosky 2011 details (the 73% vs 67% and 56% vs 83% figures come from citing papers), Rawson & Dunlosky 2012 (recommendation via search summary), Vaughn 2016 and Rawson & Dunlosky 2013 (abstract and listing).

### Other Info

**uncertain** (left out):
- numbers_or_effect_sizes

## Forgetting curve, desirable difficulties and memory models

### Basic Info

**name**: Forgetting curve, desirable difficulties and memory models

**category**: science

**origin**: Three layers from three eras. (1) The forgetting curve: Hermann Ebbinghaus, 'Uber das Gedachtnis' (1885), a self-experiment with nonsense syllables measured by the savings method; modern single-subject replication by Jaap Murre and Joeri Dros (University of Amsterdam, PLOS ONE 2015). (2) The New Theory of Disuse: Robert A. Bjork and Elizabeth L. Bjork (UCLA), 1992 chapter in the Festschrift for William K. Estes; the term 'desirable difficulties' was coined by R. A. Bjork in 1994. (3) Memory models for schedulers: Piotr Wozniak, Edward Gorzelanczyk and Janusz Murakowski's two-component model (stability and retrievability, Acta Neurobiologiae Experimentalis 1995), later extended with difficulty in SuperMemo; the open DSR model (difficulty, stability, retrievability) behind FSRS by Jarrett Ye (MaiMemo, then the open-spaced-repetition project; KDD 2022 paper with Jingyong Su and Yilong Cao), shipped in Anki since 23.10 (late 2023).

**one_line**: Memories fade fast at first and then more slowly; a review helps most when the memory has faded a bit but can still be retrieved, and FSRS turns this into numbers by tracking each card's difficulty, stability (days until recall drops to 90%) and current recall probability.

### Evidence

**key_studies**:
- Ebbinghaus 1885 (Uber das Gedachtnis). One subject (himself), lists of nonsense syllables, savings in relearning time: 58.2% after 20 min, 44.2% after 1 h, 35.8% after 8.8 h, 33.7% after 1 day, 27.8% after 2 days, 25.4% after 6 days, 21.1% after 31 days. Steep early loss, long flat tail.
- Murre & Dros 2015, PLOS ONE 10(7): e0120644, 'Replication and analysis of Ebbinghaus' forgetting curve'. One subject (the second author), about 70 hours of learning and relearning over 75 days, lists of 104 nonsense syllables, 7 intervals from 20 min to 31 days. The curve replicated, with a probable upward jump at the 24-hour point (possibly sleep). The 31-day point was much lower than Ebbinghaus's. Of the functions tested, the Memory Chain Model (a sum of exponentials) had the best average AIC; a single exponential fitted worst.
- Rubin & Wenzel 1996, Psychological Review 103(4):734-760, 'One hundred years of forgetting'. Refitted 210 published retention data sets with 105 two-parameter functions. Logarithmic, power, exponential-in-square-root-of-time and hyperbola-in-square-root-of-time fitted best and could hardly be told apart. Forgetting is not a simple exponential.
- Bjork & Bjork 1992, 'A new theory of disuse and an old theory of stimulus fluctuation' (in Healy, Kosslyn & Shiffrin, eds., From Learning Processes to Cognitive Processes, vol. 2, pp. 35-67); restated in Bjork & Bjork 2020, Journal of Applied Research in Memory and Cognition 9(4):475-479, 'Desirable difficulties in theory and practice'. Each memory has storage strength (how well learned and interconnected) and retrieval strength (how accessible right now). Recall depends only on retrieval strength. The higher the current retrieval strength, the smaller the gain in storage strength from a review. So some forgetting before a review boosts learning, which explains why spacing, interleaving, variation and testing help at a delay while hurting performance during practice. A difficulty is desirable only if the learner can still respond successfully.
- Wozniak, Gorzelanczyk & Murakowski 1995, Acta Neurobiologiae Experimentalis 55:301-305, 'Two components of long-term memory': retrievability (R, the probability a trace can be recalled now) and stability (S, the rate at which R declines). FSRS formalises this as the DSR model: R = probability of recall, S = interval at which R falls to 90%, D = difficulty in [1, 10] (how hard it is to raise S). Ye, Su & Cao 2022 (KDD, DOI 10.1145/3534678.3539081) fitted a memory model with the Markov property to 220 million MaiMemo review logs; Su et al. extended it in IEEE TKDE 2023.

**evidence_strength**: Mixed by layer, stated explicitly. (a) Forgetting curve shape: strong. A century of data sets (Rubin & Wenzel's 210) and a modern replication (Murre & Dros 2015) agree on fast early loss and a slowing, power-like tail. (b) New Theory of Disuse / desirable difficulties: moderate as a theory. Its predictions are strongly supported by separate meta-analyses (spacing, testing, interleaving, generation), but storage strength cannot be measured directly. The theory is a framework, not one testable effect, and it has documented boundary conditions (high element-interactivity material, low prior knowledge). (c) DSR model: strong as a predictive engineering model and weak-to-untested as a learning intervention. FSRS predicts recall well on hundreds of millions of real reviews (open benchmark, open data). I found no randomized study showing that people scheduled by FSRS learn more than people scheduled by SM-2 on an external test. The claimed benefit is fewer reviews for the same predicted retention.

**numbers_or_effect_sizes**:
- Ebbinghaus 1885 savings: 58.2% (20 min), 44.2% (1 h), 35.8% (8.8 h), 33.7% (1 day), 27.8% (2 days), 25.4% (6 days), 21.1% (31 days). These are savings in relearning time, not percent recalled. 33.7% at one day means relearning took 66.3% of the original time.
- Murre & Dros 2015: 31-day savings of 4.1% (13.7% after correcting for learning time that crept up by ~2.67 s per day over the study) versus 21.1% for Ebbinghaus. Adding a 24-hour 'boost' to the power function raised average R^2 from 98.7% to 99.1%. The Memory Chain Model's average AIC was 1.5 lower than the simple power function's.
- Rubin & Wenzel 1996: 210 data sets x 105 candidate functions. Four functions (log, power, exp-sqrt, hyperbola-sqrt) tie for best fit.
- FSRS-4.5 and FSRS-5 forgetting curve: R(t,S) = (1 + (19/81) * t/S)^-0.5, so R = 0.90 exactly when t = S. FSRS-6 makes the decay trainable: R = (1 + factor * t/S)^-w20, with factor = 0.9^(-1/w20) - 1. Parameter counts: FSRS v1 7, v3 13, v4 and 4.5 17, FSRS-5 19, FSRS-6 21 (open-spaced-repetition wiki).
- DSR stability update (FSRS v4 form): the stability gain on success is larger when D is lower, when S is lower, and when R is lower (a longer delay). This is the New Theory of Disuse in formula form: reviewing a card you are about to forget pays more than reviewing one you know cold.
- Worked numbers from the FSRS-4.5/5 curve for a card with S = 10 days: R = 0.95 at 5 days, 0.90 at 10 days, 0.77 at 30 days. The next interval for desired retention 0.80 is ~24 days, for 0.90 10 days, for 0.95 ~4.6 days. Moving from 90% to 95% retention more than halves that card's interval.
- Anki manual (FSRS): default desired retention is 90%. Above 90% the workload increases very quickly, and above 97% it can be overwhelming. Re-optimising parameters about once a month is enough. FSRS may perform poorly with fewer than a few hundred reviews.
- Ye, Su & Cao 2022 (KDD): 220 million MaiMemo memory logs. Their SSP-MMC scheduler reported a 12.6% improvement over prior state-of-the-art methods on their cost metric.
- Open SRS benchmark (open-spaced-repetition/srs-benchmark, ~10k Anki collections, ~350M reviews excluding same-day reviews). Log loss, RMSE(bins) and AUC: FSRS-6 0.3460 / 0.0653 / 0.7034; FSRS-5 0.3561 / 0.0742 / 0.7010; FSRS-4.5 0.3625 / 0.0764 / 0.6891; Duolingo HLR 0.4694 / 0.1275 / 0.6369; GRU 0.3328 / 0.0549 / 0.7324; LSTM 0.3332 / 0.0538 / 0.7329; FSRS-7 (recency) 0.3370 / 0.0593 / 0.7220. Neural nets still predict slightly better than FSRS-6.
- Pyc & Rawson 2009 (Journal of Memory and Language 60(4):437-447): with retrieval success held constant, final test performance rose as retrieval during practice became more difficult (the retrieval effort hypothesis). This is direct support for 'lower R at review = bigger gain'.

**limitations_and_criticism**: Forgetting curve: Ebbinghaus and Murre & Dros each had one subject, learned meaningless syllables, and measured savings rather than recall. The viral claim 'you forget 70% within 24 hours' is a misreading of the 33.7% one-day savings figure. Meaningful, well-integrated and overlearned material forgets far more slowly, and there is no single universal curve: the shape depends on material, degree of learning and how retention is measured. Murre & Dros could not reproduce Ebbinghaus's 31-day point, and their bump at 24 hours is a hypothesis (sleep), not a finding. New Theory of Disuse: storage strength is latent, so the theory is hard to falsify directly. 'Desirable' is often misread as 'harder is always better'. Bjork & Bjork stress that a difficulty turns undesirable when the learner lacks the background to respond successfully. Chen, Castro-Alonso, Paas & Sweller (2018, Frontiers in Psychology) argue that testing, generation and varied practice can backfire with high element-interactivity material that already loads working memory. The retrieval effort hypothesis is supported in several studies, but the direction of item-difficulty effects is still contested. DSR model: it is a statistical fit to self-reported grades on cards, not a model of understanding. FSRS 'difficulty' is a fitted per-card state, not the intrinsic complexity of the idea. Grading errors (pressing Hard when you failed) bias it. It needs a few hundred reviews to optimise. Benchmark metrics measure prediction of the next review, not exam performance or transfer. LSTM, GRU and other neural models beat FSRS-6 on the benchmark, so FSRS is a pragmatic, interpretable choice rather than the best possible predictor.

**evidence_setting_and_comparator**: Forgetting curve: lab self-experiments (Ebbinghaus; Murre & Dros), measured as savings relative to original learning time across retention intervals. Rubin & Wenzel: secondary re-analysis of 210 published lab data sets, comparing 105 mathematical functions by fit. New Theory of Disuse / desirable difficulties: a theoretical framework drawing on lab and classroom experiments in which the comparator is the 'easy' condition (massed vs spaced, restudy vs test, blocked vs interleaved, read vs generate), with learning measured at a delay. DSR / FSRS: field-observational review logs (220M MaiMemo logs; ~10k Anki users in srs-benchmark). The comparator is other schedulers and memory models (SM-2 heuristics, Duolingo HLR, DASH, neural nets), measured on log loss, RMSE(bins) and AUC for predicting the next recall, plus simulations of review workload.

**retention_interval_tested**: Ebbinghaus 1885 and Murre & Dros 2015: 20 min, 1 h, ~9 h, 1 day, 2 days, 6 days, 31 days. Rubin & Wenzel 1996: published data sets ranging from short-term lab retention to autobiographical memory (the latter fitted worst). Pyc & Rawson 2009: delayed final test after spaced practice. FSRS / srs-benchmark: whatever intervals real users had in their Anki histories, from same-day reviews up to months and years.

**replication_status**: Forgetting curve: replicated (Murre & Dros 2015; they also cite an earlier replication by Heller, Mack & Seitz). The general shape holds across hundreds of data sets (Rubin & Wenzel 1996). The FLoRA Replication Atlas lists no further direct replication of Murre & Dros. New Theory of Disuse: not tested as a single effect. Its predictions (spacing, testing, interleaving, generation) are each backed by meta-analyses, and the framework was extended in 2023 by the S2D2 'start and stick to desirable difficulties' framework (de Bruin et al., Educational Psychology Review 35:41), which addresses why learners avoid effortful strategies. DSR / FSRS: open code, open data (anki-revlogs-10k on Hugging Face) and an open benchmark make the predictive results independently reproducible. Results have been re-run for each version (FSRS-4.5 to FSRS-6, FSRS-7 experimental). I found no independent controlled trial of learning outcomes.

### Practice

**how_to_apply**: 1) Expect the steep early drop: do the first review of a new card within about a day, then let intervals expand. 2) Use an FSRS scheduler (Anki 23.10+) and keep desired retention at about 0.85-0.90. Go higher only for a deadline, because above 0.90 the workload climbs steeply. 3) Make each review a real retrieval: answer fully from memory before flipping. An effortful success is where storage strength grows, while seeing a card you know cold adds little. 4) Grade honestly: Again if you did not produce the answer, Good if you did. The DSR model learns your memory only from these grades, and Hard is not a polite word for 'failed'. 5) After a few hundred reviews, run the FSRS optimiser, then roughly monthly. 6) Judge your methods by delayed recall, not by how fluent a session felt; performance during practice is not learning. 7) Keep the difficulty desirable: if a card keeps failing (a leech), the difficulty is no longer productive. Go back to the source note, rebuild understanding, split or rewrite the card.

**concrete_example**: Card made from my FSRS note. Front: 'In FSRS, what does stability S = 10 days mean?' Back: 'In 10 days my recall probability for this card falls to 90%.' With the FSRS-4.5/5 curve R = (1 + 0.2346 * t/10)^-0.5: on day 5 R = 0.95 (a review now adds little storage strength), on day 10 R = 0.90 (FSRS schedules it here at 90% desired retention), on day 30 R = 0.77 (still recallable with effort, a big stability gain if I get it, but a real risk of a lapse). Changing desired retention moves the next interval to ~24 days at 0.80 and ~4.6 days at 0.95. A second card for the theory: Front: 'Why does a review help more when I have partly forgotten?' Back: 'Low retrieval strength means a bigger gain in storage strength (Bjork's New Theory of Disuse), as long as I can still retrieve it.'

**from_own_notes**: My vault holds a lot of storage and very little retrieval. Writing a permanent note in my own words (Zettelkasten), a Cornell summary or a BASB layer-4 summary builds storage strength through elaboration. Without retrieval, the ability to recall it unaided still decays along the forgetting curve, even though the note sits safely in Obsidian. Flashcards made from those notes keep retrieval strength up. The note is also my relearning substrate, which is Ebbinghaus's savings effect: when a card lapses, re-reading the original note relearns it much faster than first learning did. So each card should link back to its source note (an Obsidian link or block reference), and a lapsed card is a cue to reopen the note rather than just press Again. Only facts, definitions and key claims I want available without the vault belong in the SRS. Linking and elaboration stay in the slip-box.

**time_cost**: n/a for the theory itself. The practical cost lever is the DSR model's desired retention. Under the FSRS-4.5/5 curve, moving from 0.90 to 0.95 shrinks each next interval from S to about 0.46*S, more than doubling reviews for those cards, while 0.80 stretches it to about 2.4*S. The Anki manual warns that workload rises very quickly above 90% and can be overwhelming above 97%. Murre & Dros's replication took about 70 hours of one person's time for 7 intervals.

**knowledge_type_fit**: The forgetting curve and the DSR model apply to discrete, testable items with a clear right answer: facts, vocabulary, definitions, formulas, names, short claims. They fit poorly where 'recall' is ill-defined: deep understanding, judgement, open-ended ideas and procedures. Those are better served by practice and elaboration, with cards acting at most as reminders or salience prompts. Desirable difficulties apply broadly (verbal material, concepts, motor skills; Bjork & Bjork cite motor-learning parallels with Schmidt) but turn undesirable for complex, high element-interactivity material when prior knowledge is low (Chen et al. 2018).

**failure_modes**: Misreading Ebbinghaus as 'forget 70% in a day' and over-reviewing in panic. Cramming because in-session performance looks great (performance is not learning). Reviewing too early (desired retention 0.95-0.99, or reviewing ahead), which spends time where the storage-strength gain is smallest. Making retrieval too hard (cards you cannot answer, no feedback, missing prerequisite knowledge), turning the difficulty undesirable. Pressing Hard for failed recalls or Easy out of impatience, which corrupts the DSR fit. Running the optimiser with too few reviews. Treating FSRS 'difficulty' as a judgement of the idea instead of a fitted card state. Ignoring leeches instead of going back to the note.

### Tools

**availability_and_price**: n/a (science item). The DSR model is free to use through FSRS in Anki and the open-source FSRS libraries; see the FSRS item.

**obsidian_integration**: n/a (science item). For plugins that implement FSRS-style scheduling inside Obsidian, see the Obsidian flashcards item.

**data_ownership_and_format**: n/a (science item). The benchmark data set (anki-revlogs-10k) is openly hosted on Hugging Face.

**automation_interface**: n/a (science item). The DSR model is implemented in ts-fsrs, py-fsrs and fsrs-rs; see the FSRS item.

**maintenance_signals**: n/a (science item).

### Links

**relation_to_vault_notes**: Learn Like a Pro (Oakley & Schewe): its spaced-repetition and interleaving advice rests on this theory, and its 'harder but deeper' line is the desirable-difficulties idea. Zettelkasten / How to Take Smart Notes (Ahrens): writing in your own words and elaborating raises storage strength, but Ahrens is clear that the slip-box remembers for you. Retrieval strength still decays, which is the gap flashcards fill. Cornell notes: the recite step (cover the notes, answer from cues) is a retrieval with desirable difficulty, and spaced reviews of the cue column are the forgetting curve put into practice. Building a Second Brain (Forte): an external memory with no retrieval practice; the note is relearning support (savings), not memory.

**sources**:
- https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0120644
- https://doaj.org/article/1eb262a059254c17b017e217aee289d0
- https://forrt.org/flora-replication-atlas/doi/10.1371/journal.pone.0120644/
- https://bjorklab.psych.ucla.edu/wp-content/uploads/sites/13/2021/01/RABjorkELBjorkJARMAC2020ForPostingSingleSpaced.pdf
- https://bjorklab.psych.ucla.edu/wp-content/uploads/sites/13/2016/11/RABjork_JacobyFestschriftChapterFigsEmbedded052014.pdf
- https://ane.pl/index.php/ane/article/view/1090
- https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm
- https://github.com/open-spaced-repetition/srs-benchmark
- https://huggingface.co/datasets/open-spaced-repetition/anki-revlogs-10k
- https://docs.ankiweb.net/deck-options.html
- https://docs.ankiweb.net/faqs/what-spaced-repetition-algorithm.md
- https://dblp1.uni-trier.de/rec/conf/kdd/YeSC22.html
- https://scholar.hit.edu.cn/en/publications/a-stochastic-shortest-path-algorithm-for-optimizing-spaced-repeti/
- https://dukespace.lib.duke.edu/items/cab855f1-0cce-453f-bace-dc1ba5ce3fee
- https://core.ac.uk/download/357306317.pdf
- https://www.frontiersin.org/articles/10.3389/fpsyg.2018.01483/text
- https://link.springer.com/article/10.1007/s10648-023-09766-w
- https://newreleases.io/project/github/ankitects/anki/release/25.07
- https://www.supermemo.com/en/blog/history-of-spaced-repetition

**last_verified**: 2026-11-13. Primary sources read directly: Murre & Dros 2015 full text (PLOS ONE), Bjork & Bjork 2020 author PDF (JARMAC), the FSRS algorithm wiki (formulas, parameter counts), the Anki manual and FAQ (desired retention, DSR definitions), and the srs-benchmark README (metrics). From abstracts or listings: Rubin & Wenzel 1996, Pyc & Rawson 2009, Wozniak et al. 1995, Ye et al. 2022 (220M logs, 12.6%), Chen et al. 2018, de Bruin et al. 2023. From secondary summaries and checked for consistency: Ebbinghaus's savings percentages, and the FSRS-6 release version in Anki.

### Other Info

**uncertain** (left out):
- status_2026

## Generation effect: your own cards vs premade decks

### Basic Info

**name**: Generation effect: your own cards vs premade decks

**category**: science

**origin**: Generation effect: Norman J. Slamecka and Peter Graf, 'The generation effect: Delineation of a phenomenon' (Journal of Experimental Psychology: Human Learning and Memory, 1978). Applied to digital flashcards: Steven C. Pan (National University of Singapore) with Inez Zung (UC San Diego), Megan N. Imundo, Xuxin Zhang and Yunning Qiu (UCLA), 'User-generated digital flashcards yield better learning than premade flashcards' (Journal of Applied Research in Memory and Cognition 12(4):574-588; online December 2022, issue 2023). The main contrary result is Chelsea Lin, Mark A. McDaniel and Toshiya Miyatsu (Washington University in St. Louis), JARMAC 7(4):529-539, 2018.

**one_line**: Information you produce yourself sticks better than information you only read. For flashcards, writing your own cards (especially paraphrasing) beat studying a premade deck for the same total time in five of six experiments.

### Evidence

**key_studies**:
- Slamecka & Graf 1978, JEP: Human Learning and Memory 4(6):592-604. The original demonstration: words that participants generated from a rule and a cue (e.g. a synonym) were remembered better than the same words read intact.
- Bertsch, Pesta, Wiscott & McDaniel 2007, Memory & Cognition 35(2):201-210, 'The generation effect: A meta-analytic review'. 86 studies, 445 effect sizes, 17,711 subjects: generating beat reading by d = 0.40 (95% CI 0.38-0.42), almost half a standard deviation. The effect was larger at retention intervals over one day (d = 0.64) and in within-subject designs (0.50 vs 0.28 between subjects). It was near zero for nonwords (0.05) and for lists of more than 50 items (0.09).
- Pan, Zung, Imundo, Zhang & Qiu 2023, JARMAC 12(4):574-588. Six preregistered within-participant experiments. Undergraduates read two ~500-word passages, each with 10 key terms, then had 20-25 min either to practise with a premade deck or to make their own cards and practise with them. Test 48 h later. Internal meta-analysis: user-generated cards beat premade by d = 0.45 [0.25, 0.66] on definition questions and d = 0.29 [0.12, 0.45] on application questions. Paraphrasing and copy-and-paste helped, example-generation helped definitions only, and word-for-word transcription gave no advantage. Open data and materials (OSF k9q8r).
- Lin, McDaniel & Miyatsu 2018, JARMAC 7(4):529-539. Experiment 1 compared provided cards, self-generated cards, self-generated conceptual cards and free study. There was no difference on the test, and self-generators spent ~24 min against ~15 min. Students defaulted to detail-level cards, but the number of conceptual cards a person made predicted their score. Experiment 2: provided conceptual cards beat detail cards on short-answer questions for low structure-builders.
- McCurdy, Viechtbauer, Sklenar, Frankenstein & Leshikar 2020, Psychonomic Bulletin & Review 27(6):1139-1165. A larger meta-analysis (126 articles, 310 experiments, 1,653 estimates) testing seven theories of the generation effect. Generation constraint (how tightly the task limits what you can produce) significantly moderates the effect. Data are open as dat.mccurdy2020 in the R package metadat.

**evidence_strength**: Generation effect in general: strong (two large meta-analyses covering hundreds of experiments over four decades). Self-made versus premade flashcards specifically: moderate. The best evidence is one rigorous paper (Pan et al. 2023): six experiments with time on task controlled, preregistration, open data, and a positive result in 5 of 6. It sits against a mixed earlier literature, which Pan et al.'s own Table 1 summarises. Premade cards won in Cihon et al. 2012 Exp 1, Dodigovic 2013, Sage et al. 2019 and Wilkinson 2020a. There was no clear difference in Lin et al. 2018 and in Wilkinson 2020a at the longer delay. User-generated cards won in Cihon et al. 2012 Exp 2 and Wilkinson 2020b. All of these samples are undergraduates, with delays of minutes to a few weeks, and none were independent direct replications of Pan's design.

**limitations_and_criticism**: Boundary conditions matter more than the headline. (1) Copying is not generating: word-for-word transcription gave no benefit (Pan Exp 1), so typing a highlight onto a card is not enough. (2) Pan's participants were told which 10 key terms to card. When learners choose content themselves they mostly make shallow detail cards and spend more time for no gain (Lin et al. 2018). Commentators (Learning and the Brain) see this guidance difference as the likeliest reason the two papers disagree, but that has not been tested directly. (3) The generate-vs-read effect shrinks in conditions typical of real decks: between-subject comparisons (d = 0.28), free recall (0.32), long lists of more than 50 items (0.09), and meaningless material (nonwords 0.05). The flashcard studies used 10-20 items per passage, far from a 5,000-card deck. (4) Pan's test came at 48 h with multiple-choice questions. There is no long-term (months) evidence for self-made versus premade digital cards, and earlier vocabulary studies often found premade cards better on immediate tests. (5) Practice in Pan's study was silent (no typed answers), with shuffling and dropping disabled. (6) Premade decks still produced learning; the result is that generation adds to retrieval practice, not that premade decks are useless. A carefully curated expert deck aligned with a standardised exam (e.g. medical boards) is a different situation that these lab studies did not test. (7) The mechanism is open: extra processing during card-making, better retrieval success later, or both. Card quality correlated with scores only in Exp 3A.

**evidence_setting_and_comparator**: Pan et al. 2023: online lab experiments (custom browser flashcard interface built on the Collector platform), within-participants and counterbalanced. Comparator: premade digital cards with content drawn verbatim from the passage (Exps 1-3B) or written by other students at high or low quality (Exps 4A/4B), with total time fixed at 20-25 min. Lin et al. 2018: lab study of authentic textbook material (biological anthropology, geology), comparing provided textbook flashcards, self-generated cards, self-generated conceptual cards and free study. Bertsch 2007 and McCurdy 2020: meta-analyses of lab paradigms comparing generate vs read (synonyms, word fragments, anagrams, calculations, sentence completion).

**retention_interval_tested**: Pan et al. 2023: 48 hours. Lin et al. 2018: 20 minutes. Earlier flashcard studies reviewed by Pan et al.: immediate to under 1 week (Cihon 2012, Sage 2019, Wilkinson 2020a), up to 8 weeks (Wilkinson 2020a/b), up to 2 months (Dodigovic 2013). Bertsch 2007: immediate to more than 1 day (30 effect sizes in the longest-delay bin).

**replication_status**: Generation effect: widely replicated (86 studies in Bertsch 2007; 126 articles / 310 experiments in McCurdy 2020, with open data). User-generated versus premade flashcards: Pan et al. replicated the advantage internally across five of six preregistered experiments with open data, materials and preregistrations (OSF k9q8r; AsPredicted). I found no independent direct replication as of November 2026, and the earlier literature is conflicting (premade advantages in four comparisons, null in two, user-generated advantages in two). Related later work from the same lab is not a replication: Imundo, Zung, Whatley & Pan 2024 (Metacognition and Learning) on studying flashcards with a partner, and Khin & Pan 2026 (Journal of Experimental Education) on generative processing.

### Practice

**how_to_apply**: 1) Write your own cards from material you have already read and processed. Do not download a deck on a topic you are trying to understand. 2) Paraphrase: rewrite the answer in your own words (Pan's best condition, d = 0.62). Never transcribe word for word, which gave no benefit. 3) Decide what to card with guidance: first mark the 3-10 key terms or claims in the source (the way Pan handed students the key terms) instead of carding whatever catches your eye, which drifts toward trivial details (Lin 2018). 4) Add conceptual cards (why, how, how does X differ from Y) on top of definitions. Conceptual cards predicted better scores in Lin 2018 and help most when you struggle to structure the material. 5) If you use a premade deck (a language core deck, a board-exam deck), personalise it: rewrite answers you do not understand, add your own example, delete what you do not need. 6) If an LLM drafts cards, keep a generation step: write the answer yourself first, or heavily rewrite the draft, rather than accepting cards verbatim. 7) Cap creation time. In Pan's study, paraphrasing 10 cards took about 10-13 minutes, roughly a minute per card, and the rest of the time still went to practice.

**concrete_example**: Source line in my Learn Like a Pro note: 'Interleaving: mixing different types of problems or concepts during a single study session. This is harder but leads to deeper understanding.' Transcribed card (no benefit, Pan Exp 1): Q 'What is interleaving?' A 'Mixing different types of problems or concepts during a single study session.' Paraphrased card (Pan's best method): Q 'Interleaving: what is it, in my words?' A 'Shuffling similar kinds of problems so each time I must first work out which kind it is, not just apply the last method.' Conceptual card (Lin 2018): Q 'When does interleaving help and when does it hurt?' A 'Helps with confusable categories (painting styles g = 0.67, math g = 0.34); hurts for plain word lists (g = -0.39).' Budget, in Pan's terms: 10 key terms from one ~500-word note, about 10-12 min to write paraphrased cards, the remaining 10-15 min of a 25-min block to practise them, then spaced reviews afterwards.

**from_own_notes**: This is the core evidence for making cards from your own notes rather than importing decks. A permanent Zettelkasten note written in my own words, the cue column of a Cornell page, or a BASB layer-4 summary is already a generation step. Writing the card question and a paraphrased answer from that note adds a second one, and spaced retrieval then maintains it. Practical rules: (a) card only claims already rewritten in a permanent note, never raw highlights or copied literature notes (that is transcription, Pan Exp 1, and Tietze's collector's fallacy); (b) choose the 1-3 load-bearing claims per note, which is the 'guided selection' that separates Pan's positive result from Lin's null; (c) keep a link from card to note so a lapse sends me back to the note; (d) if an agent drafts cards from the vault, the note-writing step still counts as generation, but I should still write or edit each answer.

**time_cost**: Pan et al. 2023: generating content for 10 cards took 2.5 min (copy-paste) to 12.9 min (paraphrasing against low-quality premade cards), about 15-75 seconds per card, or 13-52% of a 20-25 min session. User-generated learners got 1.6-4.9 fewer repetitions per card and still learned more from Exp 2 on. Lin et al. 2018: self-generation stretched study from ~15 to ~24 min without a gain when learners picked their own (mostly detail) content. Rule of thumb: about a minute per paraphrased card is time well spent, while more time per card or carding everything is not.

**knowledge_type_fit**: Best fit: meaningful verbal material from texts, such as definitions, concepts and key claims from books, articles and lecture notes (Pan's passages on art history and ancient Rome). Transfer to application questions is smaller (d = 0.29) and absent for example-generation. Weak or no fit: meaningless material (nonwords d = 0.05), huge unstructured lists (more than 50 items d = 0.09), and plain foreign-language vocabulary, where several studies found premade cards equal or better on immediate tests (Sage 2019, Wilkinson 2020a, Dodigovic 2013). For large standardised curricula with high-quality expert decks, writing everything yourself may cost more than it returns; see the medical-education item.

**failure_modes**: Copying or transcribing text onto cards and calling it generation. Carding trivial details because you choose content without a plan (Lin 2018). Spending the whole session building cards and never practising them. Errors in self-written cards that then get rehearsed. Paraphrasing so loosely that the answer becomes vague and hard to grade. Card-making as procrastination (polishing formatting). Skipping the generation step entirely by accepting AI-generated cards verbatim. Importing a huge premade deck on a topic you never studied, so there is no prior processing to anchor it. Assuming a self-made deck of thousands of cards keeps the lab-sized benefit (the effect fades in long lists).

### Tools

**availability_and_price**: n/a (science item).

**obsidian_integration**: n/a (science item). Practically, writing cards inline in the note (e.g. the Obsidian Spaced Repetition plugin syntax or Anki export plugins) keeps card creation next to the generative note-writing step; see the Obsidian flashcards item.

**status_2026**: Pan et al. 2023 remains the anchor study and has no independent direct replication. The earlier mixed literature is unchanged. The question has shifted to AI: LLM tools can produce cards from notes instantly, which removes the user's generation step. Evidence on that trade-off (e.g. the 2026 Kirkby & Matuschak 'Memory Machines' report on LLM-written prompts) is covered in the LLM flashcards item. Pan's lab continues generative-learning work (Khin & Pan 2026, Journal of Experimental Education; Imundo et al. 2024 on partner flashcards).

**data_ownership_and_format**: n/a (science item). Pan et al.'s data and materials are open on OSF (osf.io/k9q8r).

**automation_interface**: n/a (science item).

**maintenance_signals**: n/a (science item).

### Links

**relation_to_vault_notes**: Zettelkasten / How to Take Smart Notes (Ahrens): the 'one idea, in your own words' rule is the generation effect. Copied literature notes are the transcription condition that gave no benefit. Cornell notes: writing cues and the summary in your own words is generation, and the recite step is retrieval, so the cue column is a hand-made deck. Learn Like a Pro (Oakley & Schewe): self-explanation and elaboration in your own words, the technique I noted as working best for me. Building a Second Brain (Forte): capture in your own words and the layer-4 executive summary are generative steps, and cards built on them inherit that benefit.

**sources**:
- https://sc-pan.github.io/pdf/PZIZQ_2022.pdf
- https://doi.org/10.1037/mac0000083
- https://osf.io/k9q8r/
- https://sc-pan.github.io/publications.html
- https://mcdaniel97.github.io/Publications/Bertsch%20et%20al.%202007.pdf
- https://pubmed.ncbi.nlm.nih.gov/17645161/
- https://cris.maastrichtuniversity.nl/en/publications/theories-of-the-generation-effect-and-the-impact-of-generation-co/
- https://wviechtb.github.io/metadat/reference/dat.mccurdy2020.html
- https://profiles.wustl.edu/en/publications/effects-of-flashcards-on-learning-authentic-materials-the-role-of/
- https://www.learningscientists.org/blog/2023/2/3-1
- https://www.learningandthebrain.com/blog/?p=7456
- https://www.techlearning.com/news/tech-tools-provide-flashcards-to-students-thats-not-a-good-thing-says-new-research
- https://michellemillerphd.substack.com/p/r3-21-january-8-2024-do-students
- https://scienceoflearning.substack.com/p/edu-snippets-77f
- https://sc-pan.github.io/pdf/ZIP_2022.pdf
- https://sc-pan.github.io/pdf/IZWP_2024.pdf
- https://notes.andymatuschak.org/zL3dp2Zri9y1wHKC5NZNA53

**last_verified**: 2026-11-13. Primary sources read directly: Pan et al. 2023 author PDF (abstract, Table 1 of prior studies, Experiment 1 method, Table 2 durations, Experiments 4A/4B, forest plot of per-experiment d, discussion and limitations) and Bertsch et al. 2007 full text (Table 1 moderators). From abstracts or listings: Lin et al. 2018 and McCurdy et al. 2020. Secondary (blogs and press, used for context and quotes only): Learning and the Brain, Tech & Learning, Michelle Miller's newsletter, the Science of Learning Substack. The 284-participant total is secondary only.

### Other Info

**uncertain** (left out):
- numbers_or_effect_sizes

## Metacognitive illusions and deck mixing

### Basic Info

**name**: Metacognitive illusions and deck mixing

**category**: science

**origin**: Self-regulated flashcard research from Nate Kornell and Robert A. Bjork (UCLA): 'Optimising self-regulated study: The benefits and costs of dropping flashcards' (Memory, 2008) and 'Learning concepts and categories: Is spacing the enemy of induction?' (Psychological Science, 2008). Then Kornell's 'Optimising learning using flashcards: Spacing is more effective than cramming' (Applied Cognitive Psychology, 2009) and Jeffrey Karpicke's 'Metacognitive control and strategy selection' (JEP: General, 2009). Interleaving roots: contextual interference in motor learning (Shea & Morgan 1979) and Rohrer & Taylor's math shuffling (2007). Synthesised by Matthias Brunmair and Tobias Richter (University of Wurzburg), 'Similarity matters: A meta-analysis of interleaved learning and its moderators' (Psychological Bulletin, 2019).

**one_line**: Learners trust in-session fluency, so they drop cards after one correct answer, prefer small stacks studied one at a time, and believe blocking beats mixing. Keeping 'known' cards in rotation and studying one big shuffled, spaced deck actually produce more durable learning, with interleaving helping mainly when categories are easy to confuse.

### Evidence

**key_studies**:
- Kornell & Bjork 2008, Memory 16(2):125-136 (DOI 10.1080/09658210701763899). Four experiments with computerised English-Swahili word-pair flashcards, with dropping allowed for one list and not the other. Being allowed to drop cards had small but consistently negative effects on learning. Learners often dropped a card after a single correct recall and sometimes before any correct recall (Exp 3), cutting off the benefits of overlearning.
- Kornell 2009, Applied Cognitive Psychology 23(9):1297-1317. Three experiments with web-based flashcards of GRE-type word pairs. Studying one large stack (more spacing between repetitions of each card) beat studying four smaller stacks separately (massing), and both beat cramming the night before. Spacing was better for 90% of participants, with 6% showing the reverse. After the first session, 72% believed massing had been more effective.
- Kornell & Bjork 2008, Psychological Science 19(6):585-592. Participants learned the styles of 12 artists from 72 paintings (6 per artist), shown either blocked by artist or interleaved, then classified new paintings. Interleaving won (first test block 0.61 vs 0.35, d = 0.99, Exp 1a within-subjects; 0.59 vs 0.36, d = 1.28, Exp 1b between-subjects). 78% of participants did better with interleaving, yet 78% said blocking was as good as or better.
- Brunmair & Richter 2019, Psychological Bulletin (DOI 10.1037/bul0000209). Multilevel meta-analysis of 59 studies (238 effect sizes, 158 samples): overall interleaving effect g = 0.42. Paintings g = 0.67; other visual materials positive; math tasks g = 0.34; expository texts and tastes not significant; words g = -0.39 (blocking better). Effects are stronger when categories are similar to each other, items within a category are dissimilar, and material is complex. The authors advise caution for expository texts and words. Data and scripts are on OSF (osf.io/7u253).
- Supporting work. Karpicke 2009 (JEP: General 138(4):469): given control, many learners removed items after one recall instead of practising retrieval, and retention suffered. Wissman, Rawson & Pyc 2012 (Memory 20(6):568-579): students prefer smaller flashcard stacks, and about one-third do not always check whether their answer was right. Yan, Bjork & Bjork 2016 (JEP: General 145(7):918-933): across 7 experiments, the belief that blocking is better persisted even after people were told and shown otherwise. Imundo, Zung, Whatley & Pan 2024 (Metacognition and Learning): learners studying flashcards alone and silently over-predicted their immediate test score by about 20%, and retrieving out loud removed the bias.

**evidence_strength**: Mixed, stated per claim. (a) People misjudge flashcard strategies (prefer massing and blocking, drop too early, are overconfident after covert recall): strong. It is replicated across many experiments, labs and populations (Kornell & Bjork 2008 x2, Kornell 2009, Karpicke 2009, Wissman et al. 2012, Yan et al. 2016, Imundo et al. 2024), and the illusions are hard to correct. (b) Dropping 'known' cards hurts learning: moderate, consistent in direction but small in size. (c) One big stack beats small stacks studied separately: strong, because it is the spacing effect (90% of participants in Kornell 2009, backed by large spacing meta-analyses). (d) Interleaving: moderate. The meta-analytic effect is g = 0.42 but heterogeneous (a secondary review reports I^2 = 77%), it depends on the material, it is negative for word learning, and it is supported in the classroom mainly for math (Rohrer et al. 2020 RCT).

**limitations_and_criticism**: Dropping: the effect is small, and Kornell & Bjork's title says 'benefits and costs'. Dropping does free time for unlearned items, and the harm comes from dropping too early, after one recall, because of overconfidence. A spaced-repetition scheduler already 'drops' rationally by stretching intervals, so the lesson applies to manual suspending, deleting and self-scheduled study, not to FSRS giving a card a long interval. Big stack vs small stacks: these were lab sessions with GRE-type word pairs, and the manipulation is really spacing (lag between repetitions), not a magic property of deck size. Interleaving: in many studies interleaving and spacing are confounded, because mixing categories also spaces items of the same category. The benefit is for discrimination and induction (telling confusable categories apart, picking the right strategy), not for memorising unrelated facts. It is negative for word learning and unclear for expository texts. Even in math the effect is small and varies widely between studies. A secondary summary notes that the 2020 classroom RCT was run in a single US school district and that interleaved assignments took students more time. Metacognition: the judgments were mostly global beliefs collected right after study. Telling people the facts rarely fixes the illusion (Yan et al. 2016), which is a limitation for advice-based interventions. Common misreading: 'interleave everything' or 'random order is always better'. Anki already shuffles reviews by default, so the practical gains come from not splitting study into many small decks done one at a time and not suspending cards early.

**evidence_setting_and_comparator**: Lab experiments with computerised flashcards, comparing self-regulated conditions against controls: drop allowed vs drop disallowed (Kornell & Bjork 2008; Karpicke 2009); one large stack vs four small stacks vs cramming (Kornell 2009); interleaved vs blocked presentation (Kornell & Bjork 2008 Psych Science; Yan et al. 2016). Metacognitive judgments were compared with actual test performance (questionnaires, judgments of learning). Brunmair & Richter 2019 is a meta-analysis of lab and some classroom studies comparing interleaved vs blocked. Rohrer et al. 2020 is a field classroom cluster-RCT comparing mostly-interleaved with business-as-usual blocked math homework. Imundo et al. 2024 compared individual vs paired flashcard practice and silent vs out-loud retrieval.

**replication_status**: Metacognitive illusions about massing and blocking: replicated many times, including with children and older adults (Kornell et al. 2010, via secondary sources), in 7 experiments by Yan et al. 2016, and in reviews through 2026 (Navarro-Baez, Broder & Undorf 2026 cite them as very hard to correct). Costs of dropping: replicated within Kornell & Bjork 2008 (four experiments) and conceptually by Karpicke 2009 and Imundo et al. 2024 (partners drop less). Big stack vs small stacks: replicated within Kornell 2009 (three experiments) and consistent with the spacing literature. Interleaving: meta-analysed with open data (OSF), with a large classroom RCT in math (Rohrer et al. 2020). I found no newer (2024-2025) meta-analysis superseding Brunmair & Richter 2019. Pan et al. (2024, Learning and Instruction) found interleaving benefits for L2 grammar tenses while noting mixed results for vocabulary.

### Practice

**how_to_apply**: 1) Never suspend or delete a card because it 'feels known' after one or two correct answers. Let the scheduler stretch its interval; long intervals are the rational form of dropping. 2) Study one combined deck: open the parent deck, not each small subdeck in turn. Keep Anki's default review sort 'Due date, then random' and avoid 'Deck, then due date', which the manual warns makes answers guessable from context. 3) Spread new cards across days (e.g. 10/day) instead of adding and drilling a whole chapter in one sitting. 4) Make retrieval overt: say the answer out loud or type it before flipping, and grade on what you actually produced. That removes the ~20% overconfidence found for silent solo study. 5) Interleave deliberately where categories are confusable (similar concepts, look-alike problem types, statistical tests, painters' styles, grammar tenses), and add contrast cards ('X vs Y: how do I tell them apart?'). For plain vocabulary or unrelated facts, mixing brings no benefit, and the scheduler mixes them anyway. 6) Judge your method by delayed recall, not by how smooth a session felt. Expect the better method to feel worse.

**concrete_example**: Setup: 200 cards from four books (50 each). Illusion-driven routine: four separate decks, drill deck A until every card is right, suspend the easy ones, then move to deck B. This is small massed stacks plus early dropping, which lost to the alternative for 90% of Kornell's participants. Evidence-based routine: one parent deck 'Books' with four subdecks for organisation only, review sort 'Due date, then random', 10 new cards per day drawn from all four books, no suspending after the first correct answer, answers spoken aloud. Interleaving example from my learning notes: three confusable cards asked in random order. 'Mixing problem types within one session is called...?' (interleaving). 'Spreading reviews of the same item over days is called...?' (spacing). 'Testing yourself instead of re-reading is called...?' (retrieval practice). Plus one contrast card: 'Spacing vs interleaving: what is the difference?' -> 'Spacing = time between repetitions of the same item; interleaving = mixing different categories so you must discriminate.'

**from_own_notes**: Obsidian structures tempt you into small, massed stacks. The Obsidian Spaced Repetition plugin and exporters build decks from tags or folders, so it is natural to review 'the cards from this book' right after reading it. Better: let decks mirror folders for organisation, but review everything merged and shuffled. Use the vault's links to build contrast cards: when two Zettelkasten notes are near-neighbours (e.g. spacing vs interleaving, Cornell vs split notes), a card that asks you to tell them apart is the interleaving benefit for confusable categories. Do not retire cards for a note because re-reading the note feels fluent, since re-reading fluency is exactly the illusion. And speak or type the answer before checking it against the linked source note.

**time_cost**: Mostly zero or negative. In Kornell 2009, one big stack used the same number of trials as four small stacks and produced more learning. Dropping saves time, but too-early dropping trades that time for worse retention (Kornell & Bjork 2008: small but consistent costs). Interleaved math homework took students somewhat more time than blocked practice (Rohrer et al. 2020, per secondary summary). Retrieving out loud or typing answers adds a few seconds per card. In an SRS, mixing decks costs nothing: it is a sort-order setting.

**knowledge_type_fit**: Avoiding early dropping and studying one big spaced stack applies to any item-based memorisation: vocabulary, facts, definitions, formulas. Interleaving fits discrimination and category learning: visual styles (g = 0.67), math problem types (g = 0.34; classroom d = 0.83), grammar tenses, diagnosis-like 'which category is this?' judgments, confusable concepts. It does not fit word or vocabulary lists (g = -0.39, blocking better) or expository texts (not significant). For those, rely on spacing and retrieval and let the scheduler's shuffle be enough.

**failure_modes**: Suspending or deleting 'easy' cards early. Studying subdecks one by one, or using 'Deck, then due date'. Building a separate deck per book or chapter and cramming it before a deadline (custom study of one deck). Grading Good after a silent 'I kind of knew it' (covert retrieval inflates confidence by about 20%). Reviewing in a fixed order so answers are guessed from context. Judging a method by how easy the session felt and switching back to massing and blocking. Over-interleaving unrelated material and expecting a boost. Re-reading the source note instead of retrieving, because it feels like learning.

### Tools

**availability_and_price**: n/a (science item).

**obsidian_integration**: n/a (science item). The relevant settings live in the SRS tool: Anki's review sort order (default 'Due date, then random'; with FSRS, 'Ascending retrievability' replaces 'Relative overdueness') and studying from the parent deck.

**status_2026**: The illusions are stable findings. Recent work focuses on correcting them: correction is very hard and yields small improvements (Navarro-Baez, Broder & Undorf 2026), and partners or overt retrieval improve calibration (Imundo et al. 2024). A 2025 survey across a North American and a Southeast Asian university (Pan et al., Applied Cognitive Psychology 39(3):e70071) found that distributed practice is familiar to only some students, interleaving is almost unknown, and distributed-practice users had better grades. Brunmair & Richter 2019 is still the main interleaving meta-analysis. Pan's lab added studies on interleaving for L2 grammar (2024), on interleaved pretesting (2024), and on fluid intelligence moderating the interleaving effect (2024-2025).

**data_ownership_and_format**: n/a (science item). Brunmair & Richter's meta-analytic data and R scripts are open on OSF (osf.io/7u253).

**automation_interface**: n/a (science item).

**maintenance_signals**: n/a (science item).

### Links

**relation_to_vault_notes**: Learn Like a Pro (Oakley & Schewe): the interleaving section ('mixing problem types... harder but deeper understanding') and the advice to focus spaced repetition on the harder items are this research. Its warnings about illusions of competence are the metacognitive findings. Cornell notes: the recite step ('answer each question out loud') is overt retrieval, which Imundo et al. 2024 show also fixes overconfidence. Zettelkasten / How to Take Smart Notes (Ahrens): linked neighbour notes are ready-made material for contrast and interleaving cards, and re-reading a note feels like knowing it, the collector's-fallacy cousin of the fluency illusion. Building a Second Brain (Forte): reviewing captured notes by project or folder is a small massed stack, so mixed retrieval is the counterweight.

**sources**:
- https://www.gwern.net/docs/spaced-repetition/2008-kornell.pdf
- https://bjorklab.psych.ucla.edu/wp-content/uploads/sites/13/2016/07/Kornell_Bjork_2008_PsychScience.pdf
- https://bjorklab.psych.ucla.edu/wp-content/uploads/sites/13/2016/07/Kornell_Bjork_2008_Memory.pdf
- https://sites.williams.edu/nk2/research/
- https://doi.org/10.1002/acp.1537
- https://gwern.net/spaced-repetition
- https://notes.andymatuschak.org/Spacing_effect
- https://www.psychologie.uni-wuerzburg.de/fileadmin/06020400/2019/Brunmair_Richter_in_press__2019_META-ANALYSIS_OF_INTERLEAVED_LEARNING.pdf
- https://pubmed.ncbi.nlm.nih.gov/31556629/
- https://osf.io/7u253/
- https://pcllab.github.io/downloads/2009/2009_Karpicke_JEPGeneral.pdf
- https://informahealthcare.com/doi/abs/10.1080/09658211.2012.687052
- https://sites.lifesci.ucla.edu/psych-bjorklab/wp-content/uploads/sites/13/2016/11/YanBjorkBjork2016.pdf
- https://sc-pan.github.io/pdf/IZWP_2024.pdf
- https://ies.ed.gov/use-work/awards/efficacy-study-interleaved-mathematics-practice
- https://www.structural-learning.com/research-briefings/mix-it-up
- https://sc-pan.github.io/pdf/PRKL_2024.pdf
- https://pure.athabascau.ca/en/publications/distributed-practice-and-interleaved-practice-undergraduate-stude/
- https://docs.ankiweb.net/deck-options.html
- https://www.brucehayes.org/Teaching/papers/2008_Roediger_Karpicke_Science.pdf
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10950551

**last_verified**: 2026-11-13. Primary sources read directly: Kornell & Bjork 2008 Psychological Science (full text: design, accuracy, 78%/78% beliefs), the Brunmair & Richter 2019 accepted manuscript (abstract figures), the Imundo et al. 2024 accepted manuscript (abstract and introduction summarising Kornell & Bjork 2008, Kornell 2009 and Wissman et al. 2012), and the Anki manual (display order). From abstracts or listings: Kornell & Bjork 2008 Memory ('small but consistently negative'), Kornell 2009 (90% / 72%), Karpicke 2009, Yan et al. 2016, Rohrer et al. 2020, Pan et al. 2025. Secondary only, marked uncertain: the 58% / 20% dropping figures, the 80% vs ~35% Karpicke & Roediger figures, and the exact test delays in Kornell 2009 and Kornell & Bjork 2008 Memory (UCLA PDF host was unreachable).

### Other Info

**uncertain** (left out):
- numbers_or_effect_sizes
- retention_interval_tested

## Real-world evidence: Anki in medical education

### Basic Info

**name**: Real-world evidence: Anki in medical education

**category**: science

**origin**: Field literature opened by Deng, Gluckstein & Larsen (2015, Perspectives on Medical Education), who first linked self-directed Anki use to USMLE Step 1 scores. Synthesised in 2026 by two systematic reviews: Frappa, Chernov, Dillon & Alben (Medical Science Educator 36(2):1015-1025, 11 studies) and Luu & Severance (Cureus, 21 studies). A 2026 meta-analysis covers structured spaced repetition in medical education more broadly (Maye & Hurley, The Clinical Teacher). Anki itself is Damien Elmes's open-source app (2006); the dominant medical deck is the community-built AnKing Step deck, now distributed through AnkiHub.

**one_line**: Studies of real medical students show that heavy Anki users tend to score a few points higher on Step 1 and other cumulative, fact-heavy exams. The data are observational and the effects modest, and several studies of short course exams and of Step 2 CK find no difference at all.

### Evidence

**key_studies**:
- Deng, Gluckstein & Larsen 2015, Perspectives on Medical Education 4(6):308-313. Survey of 72 students with Step 1 scores. The number of unique Anki cards seen independently predicted Step 1 (B = 5.9e-4 per card, p = 0.024, i.e. ~1 point per 1,700 cards), after controlling for MCAT, honours grades, practice questions (1 point per 445 questions) and test anxiety. The model explained 67.2% of variance. Cards from Firecracker, a premade commercial platform, did not predict Step 1 (p = 0.76).
- Lu, Farhat & Beck Dallaghan 2021, Medical Science Educator. Survey of 201 students in years 2-4. Anki users scored 241.1 +/- 13.2 on Step 1 vs 235.5 +/- 17.7 for non-users (p = 0.012). Students who reviewed past decks 'most of the time/always' scored 246.9 vs 236.3, and frequent summer users 248.7 (p < 0.001).
- Wothe et al. 2023, Journal of Medical Education and Curricular Development. Survey of 165 students (18% response rate); 56% were daily users. Daily users had a higher median Step 1 (238 vs 233.5, p = 0.039). Step 2 CK was not significantly different (252.5 vs 247.0, p = 0.44) and Anki was not an independent predictor of it. Daily use was also linked to better sleep quality (p = 0.01). The authors note that daily users 'may simply have studied more'.
- Frappa et al. 2026, Medical Science Educator 36(2):1015-1025 (systematic review, searched 12 Oct 2025). 11 studies from 2015-2025 with 1,135 students in total and no randomised trials. Three Step 1 studies were consistently positive, with frequent users 4-13 points ahead. Course-exam results were mixed: Levy 2023, Sun 2021 and Magro 2024 were null, while Gilbert 2023 and Durrani 2024 were positive. The only Step 2 CK study was null. Companion review: Luu & Severance 2026 (Cureus, 21 studies) rated no study at low risk of bias and 14 of 18 non-randomised studies at serious risk. Its conclusion: controlled, structured spaced retrieval is consistently positive; self-directed Anki use is mixed.

**evidence_strength**: weak for the specific causal claim that using Anki raises a student's exam scores, but moderate-to-strong for structured spaced repetition in medical education. Why weak: every Anki study is observational or quasi-experimental, and most are small, single-site and based on self-reported use. Students choose whether to use Anki, so motivation and ability are confounded with use. The Luu & Severance 2026 review judged no included study to be at low risk of bias. Why moderate-to-strong: controlled designs with assigned spaced repetition show consistent benefits, including a 2026 meta-analysis (SMD 0.78) and a randomised trial of 26,258 physicians (Price et al. 2025). The mechanism itself (spacing plus retrieval) is strongly supported in the lab (see the spacing and testing-effect items).

**numbers_or_effect_sizes**:
- Step 1 dose-response: ~1 point per 1,700 unique Anki cards (Deng 2015, B = 5.89e-4, p = 0.024; the erratum corrects Table 3's printed 5.89e-3). The average Anki user saw ~5,086 cards (SD 5,719) over ~24.5 weeks. By the regression that is ~3 Step 1 points, about 0.28 SD of the sample's 10.8-point SD (derived calculation).
- Users vs non-users on Step 1: +5.6 points (241.1 vs 235.5; Lu 2021) and +4.5 median points (238 vs 233.5; Wothe 2023). Frappa 2026 summarises the gap as 4-13 points between frequent and minimal users.
- Null Step 1 result: Cooper et al. 2023 (International Journal of Medical Students; Rocky Vista osteopathic school, class of 2023). 35 Anki users vs 268 non-users scored 223.71 vs 222.58 on Step 1 and 569.51 vs 559.99 on COMLEX Level 1, with no significant correlation. GPA was lower in the Anki group (83.82 vs 85.60, p < 0.01).
- Step 2 CK: 252.5 vs 247.0, p = 0.44, not significant (Wothe 2023, the only study).
- Course and preclinical exams (positive): Gilbert 2023 (n = 130, MCAT-adjusted) found users ahead by +6.4%, +6.2% and +7.0% on three course exams and +12.9% on the CBSE. Winter 2025 (n = 36) found students with >= 9,390 mature cards scored 71.5% vs 60.0% on the CBSE (p = 0.002); mature cards were the only independent predictor (beta = 0.649, R2 = 0.427).
- Course exams (null): Sun 2021, psychiatry, n = 101, usage not associated with the final exam. Levy 2023, n = 45: 90.3% and 91.7% vs 85.9% and 87.8%, p > 0.05. Magro 2024 vs a historical cohort: p = 0.43. Spence 2026 (n = 176; 82% used Anki): Anki use not associated with in-house exam performance. Alnaser-Almusa 2026, Saudi Arabia, n = 306: beta = 0.04 for CGPA, p = 0.52. Harder 2026, Ulm pharmacology: users scored lower, which was no longer significant after adjusting for self-rated ability.
- Perception vs outcome: 87% (Sun 2021) and 74% (Magro 2024) rated the flashcards helpful despite null exam effects. In a 2026 radiology pilot, Anki users' confidence rose (Spearman rho = 0.79) but their test scores did not.
- Structured spaced repetition (not self-directed Anki): the Maye & Hurley 2026 meta-analysis (13 studies, 21,415 learners) found SMD = 0.78 (95% CI 0.56-0.99) vs standard study. Price et al. 2025 (randomised trial, 26,258 family physicians): learning 58.03% vs 43.20% (d = 0.62); transfer to rewritten questions 58.33% vs 52.39% (d = 0.26); two repetitions beat one (d = 0.43 learning).
- Barhdaoui et al. 2026 (randomised within-participant, pathologists): diagnoses reviewed with spaced repetition scored 7.3/10 vs 5.4/10 at 3 months (+1.9, p < 0.001) and were made 1.4 min faster (median).

**limitations_and_criticism**: 1) Self-selection and confounding. Students choose to use Anki and choose how heavily, so motivation, baseline ability, total study time and question-bank use all travel with it. Wothe 2023 did not measure study hours. Harder 2026 found the reverse pattern: weaker students were more likely to use flashcards. 2) 'Use' is defined inconsistently: app installed, self-reported daily use, cards seen, or mature-card counts from a logging add-on. 3) The samples are small, single-site and have low response rates (Wothe 18%), and Deng reported response bias toward high scorers. 4) The dose-response pattern (more cards, higher scores) may reflect motivation. Where use was logged objectively, as in Levy 2023 and Sun 2021, the differences often disappeared. 5) The benefit seems limited to cumulative, fact-heavy exams. It is absent for Step 2 CK, the clinical-reasoning exam, and inconsistent for short course exams that leave little time for spacing. 6) Deck quality and curriculum fit vary: AnKing targets the USMLE, while faculty decks are local. 7) USMLE Step 1 has been pass/fail since January 2022, so the score-based literature is frozen and less relevant to current cohorts. 8) Common misreadings: 'Anki raises Step 1 by X points' (an association, not an effect), and 'the app is what works' (Frappa 2026 attributes any benefit to spaced retrieval, not to the Anki platform). 9) Most users rely on premade decks, so this literature says almost nothing about making cards from your own notes. 10) Neither 2026 review registered a protocol, and no study shares open data.

**evidence_setting_and_comparator**: Field-observational: cross-sectional surveys linked to exam records (Deng 2015, Lu 2021, Wothe 2023, Spence 2026, plus surveys in Jordan and Saudi Arabia in 2026); retrospective and prospective cohorts with logged usage (Winter 2025, Levy 2023, Mehta 2023, Haughey 2025, Gilbert 2023); and quasi-experiments with parallel or historical controls (Durrani 2024, Magro 2024). The comparators are non-users or light users of Anki. These students are not doing nothing: they use question banks, lectures, notes and other resources. None of these studies compares Anki with restudy under controlled conditions, and none compares premade with self-made cards under randomisation. The controlled evidence comes from different designs: a randomised trial of spaced vs no repeated questions in physicians (Price 2025), a within-participant randomised exposure in pathology (Barhdaoui 2026), and a meta-analysis of spaced repetition vs standard study (Maye & Hurley 2026).

**replication_status**: Partly replicated, with contrary findings. A positive Step 1 association appears in three independent single-site studies (Deng 2015, Lu 2021, Wothe 2023), but Cooper 2023 found no significant correlation at an osteopathic school; that study is not among Frappa 2026's included studies. Course-exam associations often fail to replicate: Sun 2021, Levy 2023, Magro 2024, Spence 2026, Harder 2026, Alnaser-Almusa 2026, and Haughey 2025 for the overall module. Gilbert 2023 and Durrani 2024 were positive. There is no randomised trial of self-directed Anki use, and no pre-registered or open-data study. The underlying effect of structured spaced repetition has been replicated in controlled designs (Maye & Hurley 2026 meta-analysis; Price 2025 randomised trial, n = 26,258).

### Practice

**how_to_apply**: 1) Calibrate expectations. In the real world, consistent spaced retrieval buys a modest edge on cumulative tests (a few points, roughly a quarter of an SD in Deng's data), not a transformation. 2) Play the long game. The benefit shows up where review can be spread over months, so start early (Mehta 2023: higher scorers started earlier and logged more days) and keep reviewing old material rather than only new decks (Lu 2021). 3) Watch the right metric. In Winter 2025 the predictor was mature cards (interval >= 21 days), not hours or streaks; Gilbert 2023 found streaks did not predict CBSE scores. 4) Pair cards with application practice. Deng found practice questions and Anki predicted Step 1 independently, and the null result for Step 2 CK suggests cards do not train reasoning, so add questions, cases or writing about the material. 5) Do not stack many methods. Spence 2026 found students using three or more methods scored lower. Protect sleep (>= 7 h) and wellness, which predicted scores better than any tool. 6) Do not trust the feeling of helpfulness. Satisfaction of 74-87% coexisted with null effects, so test yourself on held-out questions to see whether it is working. 7) Be cautious about building polished decks for others. Harder 2026 measured ~7 minutes to create each curated card and found no exam benefit.

**concrete_example**: Benchmarks from the studies, as a reality check. The AnKing Step deck has ~28,800 notes and ~35,000 cards (community forum figures, which drift with updates). A logged UNLV first-year cohort (Winter 2025) averaged 15,179 unsuspended cards, 9,390 mature cards and 178.8 hours in Anki over the preclinical year (SD 139 h, max 616 h). Students above 9,390 mature cards scored 71.5% vs 60.0% on the CBSE. Levy 2023 defined a 'heavy user' as using Anki on >= 90% of course days with >= 75 cards per day and >= 5 s per card. Translated to a knowledge worker: 30 new cards a day for 24 weeks is ~5,000 cards, which is Deng's average user. In that sample it was associated with ~3 extra points on an exam with a 10.8-point SD, while 445 practice questions were worth about the same as 1,700 cards. A practical personal version: 10-20 new cards a day from your notes, daily reviews, a monthly check of your mature-card count, and a self-made held-out quiz each quarter.

**from_own_notes**: This real-world literature mostly measures premade, shared decks, not cards made from your own notes. In Jordan, 80% of Anki users used premade decks such as AnKing (Almaabreh 2026), and Wothe 2023 reports that 87% used decks made by others. The interesting exception is historical. In Deng 2015, Anki was described as a tool where users create and share their own cards. Anki predicted Step 1 while Firecracker, a premade commercial platform, did not, and the authors list 'additional learning gained in the process of creating flashcards' among possible reasons. This is speculation, not a tested result. The 2026 Jordanian survey found deck type (premade, self-made or both) was not associated with self-reported performance. So field data neither confirm nor refute an advantage for own-note cards; that case rests on lab generation-effect studies (see the generation-effect item). For an Obsidian vault the lesson is this: cards drawn from your notes pay off for knowledge you will need repeatedly over months. Pair them with elaboration (writing, linking, applying) rather than treating card counts as the goal. Personal cards are much cheaper to make than the ~7 min per curated faculty card in Harder 2026, but the cost is still real.

**time_cost**: Heavy. Winter 2025 logged a mean of 178.8 h in Anki over the first preclinical year (~3.4 h/week if spread over 52 weeks; derived), with an SD of 139 h. Levy 2023 found that Anki users spent ~74% of their study time in Anki vs ~37% for limited users, and its heavy-user threshold was >= 75 cards/day. Sun 2021: the median user studied 660 cards in 2.95 h (~16 s per review; derived). Making curated cards cost ~7 min per card (Harder 2026). Students also experience it as a time burden: 73.7% named time commitment as the main barrier (Alnaser-Almusa 2026), and the Jordan study flags burnout risk. For context, during dedicated Step 1 study 44.6% of Michigan students studied 9-11 h/day (Wang 2024).

**knowledge_type_fit**: Fits: high-volume declarative facts such as pharmacology, microbiology, pathology and immunology. Gilbert 2023 found the strongest card-count correlation for a 6-week immunology/microbiology course. Image recognition also fits when the cards are image-based (Barhdaoui 2026 pathology diagnoses). Cumulative standardized exams of foundational knowledge (Step 1, CBSE, NBME) fit best. Weak or no fit: integrative principles (Gilbert's cardio-pulmonary-renal course had the lowest correlation), clinical reasoning and application (Step 2 CK null; Harder 2026 found cards were used less for case-based seminar exams), and short course exams with little time for spacing.

**failure_modes**: Starting too late, cramming new cards just before a course exam, where spacing has no room to work. Using Anki as the only method and skipping application practice; the reviews warn this risks superficial learning. Juggling too many resources (Spence 2026). Chasing streaks or raw card counts instead of mature, retained cards. Using premade decks misaligned with what will actually be tested (deck-quality mismatch is a suggested explanation for null course-exam results). Time overload and burnout. Mistaking confidence for competence: confidence rose without score gains (radiology pilot 2026) and helpfulness ratings were high despite null results. For educators: investing many staff hours (~7 min per card) in tailored decks that showed no benefit (Harder 2026).

### Tools

**obsidian_integration**: n/a

**status_2026**: The evidence base consolidated in 2026: two systematic reviews (Frappa et al.; Luu & Severance) and a meta-analysis of spaced repetition in medical education (Maye & Hurley). Since Step 1 went pass/fail in January 2022, new studies have moved to in-house exams, the CBSE and NBME, Step 2 CK, and residency and continuing education (the Price 2025 physician trial; Barhdaoui 2026 pathology). Recent 2026 studies keep finding null results for in-course performance (Spence; Alnaser-Almusa; Almaabreh; Harder). Research is also turning to card design (the DEAME framework, Balczewski 2025) and to LLM-generated Anki cards (a 2026 dental education paper).

**data_ownership_and_format**: n/a

**automation_interface**: n/a (researchers logged usage objectively with Anki add-ons such as 'Anki Stat Scraper', built by Levy et al. 2023 and reused by Winter 2025).

**maintenance_signals**: n/a

### Links

**relation_to_vault_notes**: Learn Like a Pro (Oakley & Schewe) recommends spaced repetition and self-testing. This item adds the reality check that outside the lab the gains are modest, conditional on long horizons, and confounded with motivation. Zettelkasten / How to Take Smart Notes (Ahrens) puts understanding through elaboration first. That fits the null result for Step 2 CK: cards help facts stay, not reasoning develop. Cornell notes: the cue column is a self-generated prompt, the own-notes version of a flashcard that this literature does not test. Building a Second Brain (Forte): this literature does not test capture and retrieval of notes. The relevant takeaway is to reserve spaced repetition for knowledge you will need repeatedly.

**sources**:
- https://pubmed.ncbi.nlm.nih.gov/42183420/ (Frappa et al. 2026 systematic review; full text read via Europe PMC, PMC13197492)
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13197492/
- https://pubmed.ncbi.nlm.nih.gov/42866698/ (Luu & Severance 2026, Cureus, doi 10.7759/cureus.116147; full text PMC13657408)
- https://doi.org/10.1111/tct.70353 (Maye & Hurley 2026 meta-analysis, The Clinical Teacher; abstract)
- https://pubmed.ncbi.nlm.nih.gov/26498443/ (Deng, Gluckstein & Larsen 2015; full text PMC4673073)
- https://doi.org/10.1007/s40670-021-01386-9 (Lu, Farhat & Beck Dallaghan 2021; abstract and Frappa data table)
- https://journals.sagepub.com/doi/full/10.1177/23821205231173289 (Wothe et al. 2023; full text PMC10176558)
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10403443/ (Gilbert et al. 2023 cohort study)
- https://ijms.info/IJMS/article/view/1549 (Cooper et al. 2023, Rocky Vista null result)
- https://doi.org/10.1177/23821205231205389 (Levy et al. 2023, Anki Stat Scraper pilot)
- https://doi.org/10.1007/s40670-021-01286-y (Sun et al. 2021, psychiatry flashcards null result)
- https://doi.org/10.1177/23821205251369705 (Winter et al. 2025, mature cards and CBSE; full text PMC12357012)
- https://doi.org/10.1007/s40670-025-02504-7 (Haughey et al. 2025, Ireland graduate-entry; full text PMC12961065)
- https://doi.org/10.1007/s40670-025-02549-8 (Spence et al. 2026, Wellness and Work; abstract)
- https://doi.org/10.1007/s00210-026-05954-x (Harder, Barth & Hafner 2026, institute-made pharmacology flashcards; abstract)
- https://doi.org/10.1186/s12909-026-09040-x (Almaabreh et al. 2026, Jordan; full text PMC13126877)
- https://doi.org/10.3389/fmed.2026.1896043 (Alnaser-Almusa et al. 2026, Saudi Arabia; full text PMC13474006)
- https://doi.org/10.1097/ACM.0000000000005856 (Price et al. 2025, randomised trial of 26,258 physicians; abstract)
- https://doi.org/10.1002/ase.70261 (Barhdaoui et al. 2026, histopathology within-participant randomised evaluation; abstract)
- https://doi.org/10.1067/j.cpradiol.2026.09.007 (Wang et al. 2026, neuroradiology Anki pilot; abstract)
- https://doi.org/10.1007/s40670-024-02072-2 (Wang et al. 2024, Step 1 pass/fail study habits; abstract)
- https://doi.org/10.1097/ACM.0000000000005968 (Barrison et al. 2025, electronic flashcards scoping review; abstract)
- https://community.ankihub.net/t/how-do-i-make-sure-i-have-the-correct-number-of-notes-on-anking-step-deck/453646 (AnKing deck size; community forum, secondary)

**last_verified**: 2026-11-13. Key numbers came from primary sources. I read full texts via Europe PMC for Frappa 2026, Luu & Severance 2026, Deng 2015, Gilbert 2023, Wothe 2023, Winter 2025, Haughey 2025, Almaabreh 2026 and Alnaser-Almusa 2026. I read abstracts only for Maye & Hurley 2026, Spence 2026, Harder 2026, Price 2025, Barhdaoui 2026, Levy 2023, Sun 2021 and Lu 2021; Lu's numbers are confirmed by Frappa's data table. Cooper 2023 figures come from the IJMS article page, and the AnKing deck size from AnkiHub community posts (secondary). PMC and PubMed pages were behind a bot check, so content was retrieved through the Europe PMC REST API.

### Other Info

**uncertain** (left out):
- availability_and_price
- retention_interval_tested

## Classic schedulers: Leitner boxes and SM-2 / SuperMemo

### Basic Info

**name**: Classic schedulers: Leitner boxes and SM-2 / SuperMemo

**category**: algorithm

**origin**: Leitner system: Sebastian Leitner, a German science journalist, in the book 'So lernt man lernen' (Herder, Freiburg, 1972). SuperMemo line: Piotr Wozniak (Poland). SM-0 was a paper method he started on 25 Aug 1985, with intervals of 1, 7, 16 and 35 days, then doubling. SM-2 was the first computer version: SuperMemo 1.0 for DOS (Turbo Pascal 3.0), December 1987, used in SuperMemo 1.0-3.0 (13 Dec 1987 to 9 Mar 1989). It is written up in his 1990 MSc thesis 'Optimization of learning' (Poznan University of Technology). The later algorithms are proprietary: SM-5 (1989), SM-8 (1995), SM-11 (2002), SM-15 (2011), SM-17 (2016, the first built on the two-component model of stability and retrievability), SM-18 (2019, a new item-difficulty model) and SM-20 (2026). SM-20 is the engine of the SuperMemo API launched by SuperMemo World on 31 Mar 2026. Anki (Damien Elmes, 2006) adopted a modified SM-2. It was Anki's only scheduler until FSRS arrived in Anki 23.10 (Oct 2023).

**one_line**: These are the two pre-FSRS ways to space flashcards. Leitner moves paper or virtual cards between boxes that are reviewed at fixed, growing intervals. SM-2 gives each card an 'ease factor' that multiplies the last interval after every successful review.

### Evidence

**key_studies**:
- Leitner 1972, 'So lernt man lernen' (Herder). This is a practitioner design, not an experiment. Cards move up one box when answered correctly and back to box 1 when missed. The original schedule came from physical partitions 1, 2, 5, 8 and 14 cm wide, each reviewed when full. Digital variants use 1-2-4-8-16-day boxes.
- Wozniak 1990 thesis / SM-2 description (super-memory.com). I(1) = 1 day, I(2) = 6 days, I(n) = I(n-1) * EF. EF starts at 2.5, is floored at 1.3, and is updated by EF' = EF + (0.1 - (5-q)*(0.08 + (5-q)*0.02)) on a 0-5 grade q. Grades below 3 restart the repetitions without changing EF. Evidence for SM-2 itself is Wozniak's self-experiments and decades of practitioner use.
- Settles & Meeder 2016, ACL (Duolingo). On 12.9M student-word traces, the Leitner variant Duolingo used had a mean absolute error of 0.235, against 0.128 for half-life regression and 0.445 for Pimsleur. Leitner still had the highest AUC (0.542 vs 0.538). In a six-week A/B test with about 1M students, HLR vs Leitner changed daily return only marginally.
- Open benchmarks against FSRS. (a) srs-benchmark / Expertium analysis of about 10k Anki collections: FSRS-6 with recency weighting predicts recall better (lower log loss) than Anki's SM-2 for 99.6% of users. SM-2 needs a bolted-on interval-to-probability converter for this test. (b) Shu et al. 2024, EMNLP (KARL), independent trivia data from 543 users. AUC: Leitner 0.752, SM-2 0.660, FSRS 0.752. Calibration error (ECE): Leitner 0.234, SM-2 0.200, FSRS 0.111. (c) Reddy et al. 2016, KDD: a queueing model of the Leitner system. Their Mechanical Turk experiment showed a sharp phase transition: learning collapses once new cards come in faster than the boxes can absorb.

**evidence_strength**: Split, and stated explicitly. (1) Spacing reviews beats cramming: strong. That is the spacing-effect literature, and both schedulers inherit it. (2) These specific rules are good choices: weak. Leitner's direct evidence is small single-classroom EFL pre/post studies (about 30-50 students, p<0.05, no long delays) plus its role as a baseline. SM-2 rests on Wozniak's own self-experiments (1985-87) and practitioner experience. No randomized trial pits SM-2 against a modern scheduler on learning outcomes. (3) They predict forgetting worse than modern models: moderate to strong. Large open-data comparisons agree: Duolingo's 12.9M traces, about 10k Anki collections with roughly 350M evaluated reviews, and the independent KARL trivia data set. Caveat: better prediction has not been shown to mean better long-term learning per minute in a controlled trial.

**numbers_or_effect_sizes**:
- SM-2 constants (super-memory.com): first interval 1 day, second 6 days, then interval times EF. EF starts at 2.5 and has a minimum of 1.3. EF change per grade: q=5 +0.10, q=4 0.00, q=3 -0.14. q<3 restarts the item.
- Original SM-2 with grade 4 every time (EF stays 2.5), computed from the formula: 1, 6, 15, 38, 95, 238, 595 days. Reviews fall on day 1, 7, 22, 60, 155, 393, 988, so about 5 reviews in the first year.
- Anki's SM-2 variant defaults (Anki manual). Starting ease 250%. Again -20 points (card relearns, new interval 0.00 of the old one). Hard -15 points, interval x1.2. Good leaves ease unchanged. Easy +15 points with an easy bonus of 1.30. Interval modifier 1.00. Ease never falls below 130%.
- Ease hell arithmetic (computed): 6 Again presses take a card from 250% to the 130% floor (250 - 6*20). Good never raises ease again, so the card grows only 1.3x per success, roughly 1, 2, 3, 4, 5, 6, 8 days. At 250% it would grow 2.5x.
- SM-0 paper method (Wozniak, 1985): intervals 1, 7, 16 and 35 days, then doubling. Retention was 80% 'at worst', at about 12 minutes a day per database.
- Duolingo (Settles & Meeder 2016). MAE: Leitner 0.235, HLR 0.128, Pimsleur 0.445, constant baseline 0.175. AUC: Leitner 0.542, HLR 0.538. Six-week A/B test, HLR vs Leitner, about 1M students: any activity +0.3%, lessons +0.3%, practice sessions -7.3%.
- KARL (Shu et al. 2024), seen cards. AUC: Leitner 0.752, SM-2 0.660, FSRS 0.752, content-aware KAR3L 0.864. ECE: Leitner 0.234, SM-2 0.200, FSRS 0.111, KAR3L 0.091.
- Expertium / srs-benchmark: FSRS-6 (recency weighting) beats Anki SM-2 on log loss for 99.6% of about 10k collections. SM-2 has since been dropped from the main srs-benchmark table because it does not output probabilities.
- SuperMemo vs FSRS (open-spaced-repetition/fsrs-vs-sm17; 19 SuperMemo users, 687,662 repetitions). Log loss weighted by reviews: FSRS-6 0.367, SM-17 0.432, SM-16 0.417. FSRS-6 beats SM-17 for 83.3% of collections. On SuperMemo's own 'Universal Metric' (lower is better): FSRS-6 0.0287, SM-17 0.0435.
- SuperMemo World's counter-claim (Krzysztof Biedalak, CEO, blog 13 Oct 2025): Universal Metric error of 1-3% for SM-19 and 15-20% for optimized FSRS. SM-20, 'still work in progress', is said to be approaching SM-19. No sample size and no open data are given.

**limitations_and_criticism**: Leitner: every card in a box gets the same interval, whatever its difficulty or how overdue it is. Sending a near-miss back to box 1 is harsh and wastes reviews. The original capacity-driven schedule (review a partition when it is full) is not time-based at all. It predicts no probability of recall, so you cannot target a retention level, and it has no rule for retiring mastered cards. SM-2: it was designed in 1987 from one person's data and uses one formula with the same constants for everyone. Nothing is fitted to your history. It depends on subjective 0-5 self-grades. It cannot target a retention level, and it handles overdue reviews in an ad hoc way. In Anki's 4-button variant, lapses cut ease by 20 points while Good never restores it, so hard cards get stuck at 130% ease: the 'ease hell' or 'low interval hell' that Anki's FAQ acknowledges. Some experienced users argue the 130% floor just reflects genuinely hard cards, but FSRS's mean-reversion of difficulty was designed explicitly to avoid it. Common misreadings: (a) 'SuperMemo uses SM-2'. SuperMemo moved past SM-2 in 1989; SM-2 lives on in other apps. (b) 'Anki is SM-2'. Anki's SM-2 differs from textbook SM-2: 4 buttons instead of 6 grades, configurable learning steps, Hard x1.2, a separate lapse penalty. FSRS has been optional since 23.10. (c) SuperMemo's newer algorithms (SM-17 to SM-20) are closed. Claims that they beat FSRS are self-reported. They are scored with the Universal Metric, which SuperMemo's own wiki admits can be gamed. The FSRS team's counter-evidence comes from only 16-19 exported SuperMemo collections.

**evidence_setting_and_comparator**: Mostly field-observational log data scored on predictive accuracy. Duolingo used two weeks of production logs with a 90/10 time split; comparators were HLR, Pimsleur, logistic regression and a constant, measured by MAE and AUC. The open Anki benchmark uses about 10k collections with time-series cross-validation, compared against FSRS versions, HLR, neural nets and an average-retention baseline, by log loss, RMSE(bins) and AUC. KARL used trivia study logs from 543 users, compared against FSRS, HLR and content-aware models. There is one large production A/B test (Duolingo HLR vs Leitner, about 1M students, six weeks), but its outcome was daily return rate, not measured learning. Leitner classroom studies are small EFL pre/post designs against conventional vocabulary study. SM-2's own support is Wozniak's self-experiment (1985-87), with no controlled comparator.

**retention_interval_tested**: Benchmarks test the outcome of the next review at whatever interval actually elapsed in real logs, from same-day to multi-year (Anki's default maximum interval is 100 years). Duolingo: lags within a two-week log window, plus six-week and two-week A/B tests. KARL: four months of logs, and an online study with a post-test on day 6. SM-0 experiment: six months (Feb to Aug 1985), intervals up to 35 days and then doubling. Leitner EFL studies: end-of-semester post-tests, typically weeks.

**replication_status**: Several independent data sets show SM-2 predicts recall worse than modern models: the FSRS team's Anki benchmark, the UMD KARL trivia data, and the LECTOR simulation, where SM-2 is last. Leitner's standing is mixed. HLR beat it on MAE at Duolingo, yet Leitner matched FSRS on AUC in KARL while being far worse calibrated. Both the Anki benchmark and the Duolingo HLR data set are openly downloadable. No independent group has replicated SuperMemo World's SM-19/SM-20 accuracy claims. The fsrs-vs-sm17 comparison is open code on 19 users' data. No large, multi-site replication of Leitner classroom gains exists.

### Practice

**how_to_apply**: 1) Paper or Cornell-style Leitner, for a bounded set such as exam vocabulary. Use 5 boxes: box 1 daily, box 2 every 2 days, box 3 every 4, box 4 every 8, box 5 every 16. Correct moves a card up one box. Wrong sends it to box 1, or one box down for a gentler variant. Retire a card after it passes box 5 and spot-check retired cards monthly. Keep new-card intake small and steady: the Leitner queueing model shows learning collapses when new cards outpace reviews. 2) In Anki, prefer FSRS today. If I stay on SM-2: keep the 250% starting ease, use Again (never Hard) for a forgotten answer, and avoid interval-modifier tinkering. Treat a card stuck near 130% ease as a badly written card and rewrite or split it, rather than adding ease-fixing add-ons. 3) In the Obsidian Spaced Repetition plugin, the default scheduler is an SM-2 variant (SM-2-OSR). Since version 1.15.0 I can switch to FSRS in the scheduling settings. 4) If I script my own reviews, SM-2 is about ten lines and fine for a toy. For anything I will keep, use a maintained FSRS library (ts-fsrs or py-fsrs) instead.

**concrete_example**: A card from my 'Spacing effect' permanent note. Front: 'In SM-2, how does a grade-3 answer change the ease factor?' Back: 'It drops by 0.14, from 2.50 to 2.36.' Schedule in textbook SM-2 if I always answer with grade 4: review on day 1, then 6 days later (day 7), then 15 (day 22), 38 (day 60), 95 (day 155) and 238 (day 393). The same card in Anki's SM-2 at 250% ease and a 40-day interval: if I press Again, ease drops to 230% and the card relearns at a 1-day interval. Answering Good afterwards gives about 2, 5, 12, then 28 days. Without the lapse the next step would have been about 100 days. After six such lapses over its life the card sits at 130% ease and crawls 1, 2, 3, 4, 5, 6, 8 days. That is ease hell in numbers. Paper Leitner version: the card starts in box 1 (daily). After three correct answers it is in box 4 (every 8 days). One miss sends it back to box 1.

**from_own_notes**: Leitner maps directly onto Cornell notes: the cue-column questions are the card fronts, and a page or index card moves between boxes, or between #box1 to #box5 tags in Obsidian. SM-2 state is tiny (due date, interval, ease), so it can live inside the Markdown itself. The Obsidian Spaced Repetition plugin writes it as an inline comment after each card, e.g. '<!--SR:!2021-08-20,13,290-->' (due date, interval in days, ease 290 = 2.90). Notes reviewed as whole notes keep it in YAML front matter. Notes stay the source of truth and are git-diffable. The catch is that every review edits the note file, which adds noise to git history and risks sync conflicts. The plugin also seeds a note's initial ease from the notes it links to, weighted by PageRank, a nice touch for a Zettelkasten. For Zettelkasten and book notes, neither scheduler knows that cards from the same note are related. I keep cards atomic and few per note so that interference between siblings stays low.

**time_cost**: Computed for illustration, at about 8 seconds per review (Nielsen's estimate). Leitner with 5 boxes (1-2-4-8-16 days) and perfect recall: each card costs 5 reviews before retirement. At 10 new cards a day that is about 50 reviews, or about 7 minutes, a day at steady state, plus extra for every miss. Textbook SM-2 with grade 4 every time: about 5 reviews per card in the first year. Anki SM-2 with Good every time: reviews on days 1, 3, 8, 20, 50, 125 and 313, so about 7 in year one. A card in ease hell (130%) costs about 7 reviews in its first month. For comparison, FSRS-6 with default parameters at 90% desired retention: about 4 reviews in year one for an always-remembered card. Wozniak's SM-0 paper system cost about 12 minutes a day per database.

**knowledge_type_fit**: Both suit discrete, atomic question-answer items with one right answer: vocabulary, definitions, formulas, names, dates. Leitner works best for small, bounded sets (tens to a few hundred cards) studied for a deadline, and for paper or classroom use. SM-2 scales to large collections, but every card starts at the same ease, and it cannot tell a hard card from a badly worded one. Neither fits well for concepts, procedures or open-ended ideas. Neither models interference between similar or related items, which matters for vocabulary near-synonyms and for many cards cut from one note.

**failure_modes**: Leitner: the boxes overflow after skipped days and the backlog never clears. Sending near-misses back to box 1 burns time. There is no retirement rule, so you either review forever or let retired cards silently decay. Physical cards get lost. Taking in new cards faster than reviews can absorb them leads to collapse. SM-2: ease hell from repeated lapses. Pressing Hard for a forgotten answer inflates later intervals. Grade inflation or deflation makes the 0-5 or 4-button ratings meaningless. After a long break the review debt piles up, and in Anki an overdue card that is still remembered gets a large bonus, while a forgotten one restarts. Users fiddle with starting ease or the interval modifier, or stack add-ons that fight the scheduler. People also believe 'SuperMemo is SM-2' and judge SuperMemo by it. Obsidian inline storage: editing or moving card text can orphan the '<!--SR:...-->' comment and lose the schedule.

### Tools

**obsidian_integration**: Obsidian Spaced Repetition plugin (st3v3nmw). Its default scheduler is SM-2-OSR, an Anki-like SM-2 variant with Hard/Good/Easy and fuzz for intervals of 8 or more days, with ease floored at 130 and seeded from linked notes via PageRank. Card schedules are stored inline in the Markdown as '<!--SR:...-->' comments, and note-review schedules in YAML front matter. FSRS has been opt-in since 1.15.0 (24 May 2026, via ts-fsrs 5.4.1); latest version 1.15.4 (14 Jun 2026). Leitner needs no plugin: tags or folders (#box1 to #box5) plus a Bases or Dataview query by date reproduce it. Exporters such as Obsidian_to_Anki push cards into Anki, where Anki's SM-2 or FSRS does the scheduling.

**data_ownership_and_format**: Leitner on paper: fully local. SM-2 state is a few numbers per card (repetition count, interval, ease, due date), so it ports to anything. Inline Markdown comments in the Obsidian plugin keep the notes as the source of truth and git-friendly. Anki keeps it in a local SQLite collection and exports .apkg or .colpkg. Mnemosyne keeps it in a local SQLite database. SuperMemo for Windows keeps collections in proprietary local files. supermemo.com is cloud-hosted, and the SuperMemo API stores items and repetitions server-side.

**automation_interface**: SM-2 is trivial to implement in a script or AI agent, and many small libraries exist on npm and PyPI. Anki's SM-2 cards can be driven through AnkiConnect (an HTTP add-on), which includes actions to read and set ease factors (getEaseFactors / setEaseFactors) and to query card intervals. Anki MCP servers build on AnkiConnect. The SuperMemo API (2026, early access) is a REST interface: send an item ID and the user's interactions, and the SM-20 engine returns the next interval. Leitner: n/a (a manual or tag-based workflow). For new automation, ts-fsrs and py-fsrs are the better targets (see the FSRS item).

**maintenance_signals**: Leitner and textbook SM-2 are fixed specifications with no maintainer. Anki's SM-2 code is maintained by Ankitects (stewardship moving to AnkiHub since Feb 2026) in the Rust backend of ankitects/anki: 26.09.4 released 4 Nov 2026, 26.11 beta 1 on 12 Nov 2026. Obsidian Spaced Repetition plugin: 1.15.4 (14 Jun 2026), active. SuperMemo: SuperMemo World sp. z o.o. (CEO Krzysztof Biedalak) runs supermemo.com and the API (API site version 2026.06.10). Piotr Wozniak's SuperMemo for Windows: 20.00.32 (29 Jun 2026, per Wikipedia).

### Links

**relation_to_vault_notes**: Learn Like a Pro (Oakley & Schewe) recommends spaced repetition. A Leitner box is the zero-tech way to start, and SM-2/FSRS is the app version. Cornell notes: the cue column is a ready-made Leitner deck. Zettelkasten / How to Take Smart Notes (Ahrens) values elaboration and connection over rote memorisation, so a scheduler should only get the small atomic layer of facts I need on recall, not my permanent notes. Building a Second Brain (Forte) makes notes an external memory you retrieve from. A Leitner or SM-2 schedule is for the few items I must know by heart, without looking them up.

**sources**:
- https://super-memory.com/english/ol/sm2.htm
- https://supermemo.guru/wiki/SuperMemo_Algorithm
- https://supermemo.guru/wiki/Birth_of_SuperMemo
- https://supermemo.guru/wiki/Algorithm_SM-18
- https://en.wikipedia.org/wiki/SuperMemo
- https://en.wikipedia.org/wiki/Leitner_system
- https://aclanthology.org/P16-1174.pdf
- https://arxiv.org/abs/1602.07032
- https://arxiv.org/abs/2402.12291
- https://docs.ankiweb.net/faqs/what-spaced-repetition-algorithm
- https://docs.ankiweb.net/deck-options.html
- https://github.com/open-spaced-repetition/srs-benchmark
- https://expertium.github.io/Benchmark.html
- https://expertium.github.io/History.html
- https://github.com/open-spaced-repetition/fsrs-vs-sm17
- https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm
- https://supermemo.com/en/blog/supermemo-is-better-than-fsrs-by-far
- https://www.supermemo.com/blog/supermemo-api-launch-the-spaced-repetition-algorithm-is-now-available-to-developers
- https://api.supermemo.com/about
- https://supermemoapi.pages.dev/
- https://supermemo.guru/wiki/Universal_metric_for_cross-comparison_of_spaced_repetition_algorithms
- https://kuroahna.github.io/anki_srs_kai/guide/issuesWithAnkiSM2.html
- https://github.com/ankitects/anki/releases
- https://github.com/ankitects/anki/issues/3616
- https://github.com/st3v3nmw/obsidian-spaced-repetition/releases
- https://stephenmwangi.com/obsidian-spaced-repetition/algorithms/
- https://stephenmwangi.com/obsidian-spaced-repetition/flashcards/flashcards-overview/
- https://callej.org/index.php/journal/article/download/87/396
- https://journals.utm.my/jurnalteknologi/article/download/7021/4685/19127

**last_verified**: 2026-11-13. Primary sources read directly: the SM-2 description on super-memory.com, the Settles & Meeder 2016 full text (Leitner baseline numbers and A/B tests), the KARL 2024 full text (Leitner/SM-2/FSRS AUC and ECE), the srs-benchmark and fsrs-vs-sm17 READMEs, the Anki manual (SM-2 defaults, ease hell FAQ), Anki GitHub releases, the Obsidian SR plugin releases and docs, and SuperMemo World's own blog and API pages. Secondary or abstract-only: Wikipedia for SuperMemo version history and the Leitner partition sizes, the Expertium benchmark analysis (the 99.6% figure), and the Leitner EFL classroom studies (abstracts only). Interval sequences and the ease-hell arithmetic are my own calculations from the published formulas.

### Other Info

**uncertain** (left out):
- availability_and_price
- status_2026

## FSRS (Free Spaced Repetition Scheduler)

### Basic Info

**name**: FSRS (Free Spaced Repetition Scheduler)

**category**: algorithm

**origin**: Jarrett Ye (Junyao Ye, GitHub L-M-Sherlock) created FSRS. It grew out of his work at MaiMemo (a Chinese vocabulary app) with Harbin Institute of Technology (Shenzhen) co-authors: the DHP memory model and SSP-MMC scheduler (KDD 2022, extended in IEEE TKDE 2023). It is developed in the open by the Open Spaced Repetition GitHub organisation. Key contributors include Expertium, user1823, Luc-Mcgrady and asukaminato0721. Timeline: v1/v2 were private experiments. FSRS v3 (2022) was the first public release, as an Anki custom-scheduling script (fsrs4anki). FSRS v4 was built into Anki 23.10 (31 Oct 2023, via the Rust crate fsrs-rs). Then FSRS-4.5 in Anki 23.12 (25 Dec 2023), FSRS-5 in Anki 24.11 (26 Nov 2024) and FSRS-6 in Anki 25.07 (4 Jul 2025). FSRS-7 appeared in srs-benchmark in 2026 and became the default model of ts-fsrs v6.0.0 (28 Oct 2026) and fsrs-rs v7.0.0 (10 Nov 2026). It is not yet in a released Anki: integration PR #5687 has been open since 24 Sep 2026.

**one_line**: FSRS is an open-source, machine-learning scheduler. It tracks each card's difficulty, stability and current recall probability, fits its parameters to your own review history, and brings the card back when predicted recall falls to a retention level you choose (90% by default).

### Evidence

**key_studies**:
- Ye, Su & Cao 2022, 'A Stochastic Shortest Path Algorithm for Optimizing Spaced Repetition Scheduling', KDD 2022, pp. 4381-4390, doi 10.1145/3534678.3539081. Built from 220M MaiMemo memory-behaviour logs: a Markov memory model (DHP, a difficulty-stability-retrievability variant) plus a cost-minimising scheduler (SSP-MMC). It reports a 12.6% improvement over prior methods in their evaluation. Code and data are public (maimemo/SSP-MMC, Harvard Dataverse). Extended as Su, Ye, Nie, Cao & Chen 2023, 'Optimizing Spaced Repetition Schedule by Capturing the Dynamics of Memory', IEEE TKDE.
- open-spaced-repetition/srs-benchmark (README updated Sep-Oct 2026): anki-revlogs-10k, 9,999 Anki collections and 349,923,850 evaluated reviews, time-series split. Without same-day reviews (log loss / RMSE(bins) / AUC): FSRS-7 0.3401 / 0.0634 / 0.7167, FSRS-6 0.3460 / 0.0653 / 0.7034, FSRS-5 0.3561 / 0.0742 / 0.7010, FSRS-4.5 0.3625 / 0.0764 / 0.6891. For comparison: HLR 0.4694, Ebisu v2 0.4989, constant-average baseline 0.3945. The neural nets RWKV-Instant (0.2773) and GRU (0.3328) do better still. Expertium's analysis: FSRS-6 with recency weighting beats Anki's SM-2 for 99.6% of users.
- Shu, Balepur, Feng & Boyd-Graber 2024, KARL, EMNLP 2024. Independent data: 123,143 trivia study logs from 543 users. FSRS was trained with the authors' 2024 optimizer notebook, so it predates FSRS-6. It was the best history-only model: AUC 0.752 and ECE 0.111, against 0.660 / 0.200 for SM-2 and 0.370 / 0.387 for HLR. The content-aware KAR3L beat it (0.864 / 0.091). Online, 32 six-day study sessions from 27 users: post-test accuracy was similar (FSRS 0.41 to 0.88, KAR3L 0.42 to 0.86), and KAR3L answered faster (2.74 vs 2.58 correct per second).
- open-spaced-repetition/fsrs-vs-sm17 (updated Apr 2026): 19 SuperMemo users, 687,662 repetitions. FSRS-6 log loss 0.367 vs SM-17 0.432 (weighted by reviews), and FSRS-6 is better than SM-17 for 83.3% of collections. On SuperMemo's Universal Metric: FSRS-6 0.0287, SM-17 0.0435. SuperMemo World disputes this (13 Oct 2025 blog) and claims 1-3% error for SM-19 versus 15-20% for FSRS, on undisclosed data.

**evidence_strength**: Moderate, and it depends on the claim. For predictive accuracy (does FSRS forecast whether I will recall a card), the evidence is moderate to strong. It comes from a very large open data set (about 10k users, about 350M reviews) with open code and confidence intervals, and an independent academic group (KARL, UMD) reproduced the ranking FSRS > SM-2 > HLR on different data. The main caveat is that the benchmark is run by the FSRS developers themselves, which open data and code only partly offset. For better learning or less time per unit learned, the evidence is weak. No randomized controlled trial shows FSRS users learn more, or spend less time, than SM-2 users at equal retention. The usual '20-30% fewer reviews' figures come from simulations and secondary blogs. The only head-to-head user study (KARL) compared FSRS with a content-aware model, not with SM-2.

**limitations_and_criticism**: 1) Prediction is not learning. The benchmark scores how well FSRS predicts the next review's outcome, not exam results or how many minutes are spent per item learned. 2) Trivial baselines come close on calibration. A zero-parameter MOVING-AVG (0.3369) gets a lower log loss than FSRS-7 with default settings (0.3401). FSRS's edge shows mainly in AUC, which suggests much of the remaining error is noise in individual reviews rather than a model failure. 3) Cards are isolated. FSRS ignores card text and related cards, so siblings and near-duplicates interfere unseen. Content-aware models (KARL) and cross-card neural nets (RWKV) beat it. 4) It depends on honest grading. The Anki manual warns that pressing Hard for a forgotten answer makes all intervals unreasonably high. 5) It needs data. Since Anki 24.06.3 the optimiser runs with any number of reviews, but parameters fitted to a few hundred reviews are noisy, and default parameters are clearly worse. 6) Desired retention is not true retention. Measured retention can drift from the target, and the scheduler cannot fix inaccurate grades or poorly written cards. 7) Switching from SM-2 can cause a review spike, if 'Reschedule cards on change' is used or desired retention is set high. Forum threads report much higher workload, and an FSRS-5+ regression for a minority who press Again a lot on new cards. 8) The model is opaque. Since Anki 26.05, unlocking manual parameter editing takes three clicks. 9) Selection bias: the benchmark data are Anki users with at least 5,000 reviews (many medical students), with no card text. 10) Common misreadings: '90% retention means I will remember 90% of everything' (it means 90% at the moment a card is due). 'FSRS cuts my reviews automatically' (raising desired retention increases them). 'FSRS-7 is in Anki' (not yet, as of 26.09.4).

**evidence_setting_and_comparator**: Field-observational review logs with time-series cross-validation: about 10k Anki collections, 220M MaiMemo logs, 19 SuperMemo collections. Comparators: SM-2 (via a probability converter), HLR, Ebisu, ACT-R, DASH, logistic regression, GRU/LSTM/RWKV neural nets, SM-16/SM-17, and constant and moving-average baselines. The KDD 2022 scheduler gains were measured in simulation. KARL adds a small within-subject online study (27 users, 6 days) against a content-aware scheduler. Workload claims come from simulations, including Anki's built-in simulator, not from randomized comparisons with SM-2 users.

**retention_interval_tested**: Benchmarks: the outcome of the next review at whatever interval actually elapsed, from seconds (same-day reviews, scored only in the 'with same-day' table) to multi-year intervals. Anki's default maximum interval is 100 years. KARL online study: five days of study and a post-test on day 6. No study measures FSRS against long-delay final tests of months or years.

**replication_status**: The predictive ranking has been reproduced on independent data. KARL (UMD trivia data, 2024): FSRS beats SM-2, HLR and Leitner on calibration. fsrs-vs-sm17 (SuperMemo users' exported data): FSRS-6 beats SM-17. LECTOR (2025 simulation): FSRS 89.6% success vs SM-2 47.1%, simulation only. The data are open: anki-revlogs-10k on Hugging Face (gated, custom licence) and the MaiMemo logs on Harvard Dataverse, so others can rerun everything. No independent randomized trial of learning outcomes exists. SuperMemo World contests the SuperMemo comparison and has not published its data.

### Practice

**how_to_apply**: In Anki: 1) Update every client first (Anki 23.10+, AnkiMobile 23.10+, AnkiDroid 2.17+). Then turn on FSRS at the bottom of Deck Options; the toggle is global. 2) Keep learning and relearning steps short and same-day (e.g. 10m, or 1m 10m), or leave them empty so FSRS handles short-term scheduling (experimental). 3) Leave desired retention at 0.90. Use 0.85 for low-stakes hobby decks and up to 0.95 for an exam crunch, never above 0.97. 'Help Me Decide' and the simulator show the workload. 4) Press Optimize once. Re-optimize monthly, or whenever the review count doubles, and use separate presets only for genuinely different material (e.g. language vs geography). 5) Grade honestly. Again means I forgot. Hard means I recalled it with real effort. Using only Again and Good is fine. 6) Do not tick 'Reschedule cards on change' when first switching, to avoid a wall of due cards. 7) Turn on Easy Days if I want lighter weekends; the load balancer spreads reviews within the fuzz range. 8) Check the true-retention table in Stats once a month. If it is far from the target, look first at grading habits and leech cards. In my own tools: use ts-fsrs (TypeScript; v6 defaults to FSRS-7, needs Node 24+) or py-fsrs (Python, FSRS-6). Store each card's state plus a full review log (card id, timestamp, rating, duration), and fit parameters with @open-spaced-repetition/binding or 'fsrs[optimizer]'.

**concrete_example**: A card from my 'Desirable difficulties' Zettel. Front: 'In FSRS, what does a stability of 30 days mean?' Back: 'Thirty days after the last review my predicted recall falls to 90%.' Schedule with FSRS-6 default parameters at 90% desired retention, always pressing Good (computed, ignoring learning steps and fuzz). The first Good sets stability to 2.3 days, so the card is due in 2 days. Then 11, 46 and 163 days. If I forget it at the 163-day review, stability falls to about 4.7 days and difficulty jumps from 2.1 to 7.4, so the card comes back in about 5 days and climbs more slowly. The same card at 95% retention would be reviewed after 1, 3, 8, 19, 43 days and so on. In TypeScript (ts-fsrs v6): 'const scheduler = await DefaultScheduler(); const card = scheduler.newCard({ now }); const { card: next, revlog } = scheduler.review({ card, grade: Rating.Good, now });'. Store 'next' (due date, stability, difficulty) and append 'revlog' to the review history.

**from_own_notes**: FSRS only schedules; it does not care where cards come from. For an Obsidian vault there are three routes. (a) Export cards from Markdown into Anki (Obsidian_to_Anki or similar) and let Anki's FSRS schedule them. The notes stay the source of truth for content, and Anki holds the schedule. (b) Schedule inside Obsidian. The Obsidian Spaced Repetition plugin has had FSRS opt-in since 1.15.0 (via ts-fsrs). Other FSRS-6 plugins are obsidian-spaced-repetition-recall (separate JSON data file), True Recall (local SQLite via ts-fsrs, with Anki import and export), LearnKit and HiNote. (c) Build my own pipeline: an agent parses Q/A blocks from Zettelkasten, Cornell or book notes, keeps a stable card ID tied to the source note, and stores FSRS state and review logs in a sidecar file or SQLite rather than in the note body. That keeps the notes clean and git-diffable. Because FSRS fits parameters per preset, cards from very different note types (vocabulary vs concepts) should be kept in separate presets or parameter sets.

**knowledge_type_fit**: FSRS fits anything that can be graded as recalled or not on a recurring card: vocabulary, facts, definitions, formulas, medical details, and short conceptual prompts. It adapts difficulty per card and parameters per preset, so it handles mixed difficulty better than SM-2. It fits poorly for open-ended ideas, skills and procedures where 'recall' is fuzzy, for one-off material needed only for a few days (Anki's default steps may suit cramming better), and for many cards that overlap in meaning, since it is blind to content.

**failure_modes**: Pressing Hard instead of Again for a forgotten answer, which inflates every interval. Copying someone else's parameters, or never pressing Optimize. Setting desired retention at 0.95-0.99 and drowning in reviews. Enabling 'Reschedule cards on change' on the first switch and facing a backlog. Long learning steps (e.g. 1 day or more) that duplicate what FSRS already does. Assuming the 'true retention' shown is wrong when the real problem is badly written cards (pattern-matching on card wording, siblings giving away the answer). Leech cards consuming most of the time. Using add-ons that change intervals on top of FSRS. Mixing very different material in one preset. In self-built pipelines: losing review history (no timestamps or ratings), which makes optimisation impossible; regenerating card IDs when a note is edited, which orphans the FSRS state; or writing FSRS state into notes on every review and causing sync conflicts.

### Tools

**availability_and_price**: Free and open source. The algorithm is free to use in any app. Libraries: ts-fsrs (MIT, npm), py-fsrs (MIT, PyPI 'fsrs', optimiser via 'fsrs[optimizer]'), fsrs-rs (BSD-3-Clause, Rust, also behind Anki), @open-spaced-repetition/binding (optimiser for Node.js, browsers and Cloudflare Workers), fsrs4anki (MIT, helper and optimiser notebooks). The awesome-fsrs list has ports for Go, Java, Swift, Kotlin, Dart, C, Ruby, Elixir, Clojure, OCaml, Lisp, Haskell and Scala. Apps using it include Anki (desktop and AnkiDroid free, AnkiMobile paid), RemNote (FSRS-4.5 since release 1.16), Mochi, Logseq (database version), SiYuan (FSRS-5), Rember, ZKMemo, Org-srs and several Obsidian plugins.

**obsidian_integration**: Several plugins schedule with FSRS inside Obsidian. Obsidian Spaced Repetition (st3v3nmw) has had FSRS opt-in since 1.15.0 (24 May 2026, ts-fsrs 5.4.1; latest 1.15.4, 14 Jun 2026), keeping SM-2-OSR as the default. obsidian-spaced-repetition-recall (Open Spaced Repetition fork) uses FSRS-6 and stores data in a separate JSON file. True Recall uses FSRS-6 via ts-fsrs, with local SQLite and Anki import/export. LearnKit and HiNote also use FSRS-6. Alternatively, Markdown-to-Anki exporters hand scheduling to Anki's FSRS. For plain Markdown outside Obsidian, tools such as hashcards and Org-srs (Emacs) run FSRS over text files.

**status_2026**: Actively developed. Anki 26.09 (14 Sep 2026) ships FSRS-6 through fsrs-rs 6.6.2, and the latest stable release is 26.09.4 (4 Nov 2026); 26.11 beta 1 (12 Nov 2026) has no new FSRS version. Changes since 2023: FSRS-4.5 (23.12). FSRS-5, the simulator, the load balancer, Easy Days and true-retention stats (24.11). Easy Days reworked (25.02). FSRS-6, health check instead of Evaluate, load balancer and Easy Days applied when rescheduling, 'Compute minimum recommended retention' removed (25.07). Per-deck desired retention and desired-retention info graphs (25.09). Reworked 'Help Me Decide' efficiency graph and a three-click lock on parameter editing (26.05). fsrs-rs 6.6.1 performance work (26.08). FSRS-7 (34 parameters, fractional intervals, best same-day predictions) is the default in ts-fsrs v6.0.0 (28 Oct 2026) and is supported in fsrs-rs v7.0.0 (10 Nov 2026). Anki integration PR #5687 is still open, and the benchmark notes that in Anki FSRS-7 'should be shipped with' recency weighting and scheduling penalties. py-fsrs is still FSRS-6 (21 parameters; v6.3.3, 13 Nov 2026). Expertium states that FSRS-7 'is the final version', with no major releases expected. FSRS is still opt-in in Anki: issue #3616 'Make FSRS the default?' remains open.

**data_ownership_and_format**: The algorithm itself has no storage. In Anki, FSRS memory state (stability, difficulty) and the review log live in the local SQLite collection and export with .apkg or .colpkg. Parameters are stored per preset and are stripped from exports made without scheduling (26.08). The libraries are stateless: the app stores the Card object (due, stability, difficulty, state) and the ReviewLog records. Anything can hold them: JSON, SQLite, or YAML or sidecar files next to Markdown notes, which keeps notes as the source of truth and works with git. The benchmark data format (Parquet: card_id, day_offset, rating, state, duration, elapsed_days, elapsed_seconds) is a sensible template for my own review logs.

**automation_interface**: ts-fsrs (TypeScript; ESM, CommonJS and UMD; v6 requires Node 24+; DefaultScheduler with preview() and review(); llms.txt documentation for AI-assisted migration). @open-spaced-repetition/binding (parameter training and CSV conversion in Node, browser and WASI). py-fsrs (Scheduler, Card, Rating, ReviewLog; Optimizer.compute_optimal_parameters() and compute_optimal_retention()). fsrs-rs (Rust, plus Python bindings fsrs-rs-python). In Anki, AnkiConnect and Anki MCP servers can read card stats, and since 26.05 card decay and desired retention are exposed to the custom scheduler. For a JS/TS agent, ts-fsrs plus my own review-log table is the shortest path to an FSRS pipeline from Obsidian notes.

**maintenance_signals**: Very active, as of 13 Nov 2026. ts-fsrs: v6.0.0 28 Oct 2026, binding 0.6.1 10 Nov 2026, last push 13 Nov 2026, 870 stars, about 1.38M npm downloads a month. py-fsrs: v6.3.3 13 Nov 2026, 531 stars, about 310k PyPI downloads a month. fsrs-rs: v7.0.0 10 Nov 2026, 461 stars. fsrs4anki: last release v6.1.3 (8 Sep 2025), 4,134 stars. srs-benchmark: last push 24 Oct 2026. The work is spread across the Open Spaced Repetition organisation (L-M-Sherlock / Jarrett Ye, Expertium, ishiko732, asukaminato0721, JSchoreels, Luc-Mcgrady, user1823), with code in Anki itself maintained by Ankitects and AnkiHub contributors.

### Links

**relation_to_vault_notes**: Learn Like a Pro (Oakley & Schewe) says to space and test yourself. FSRS is the most evidence-backed way to automate the 'when' for card-sized material. Zettelkasten / How to Take Smart Notes (Ahrens): permanent notes are for elaboration and linking, and only the small layer of facts I need on recall should become FSRS cards that link back to their source Zettel. Cornell notes: the cue questions become cards, and FSRS replaces a fixed review calendar. Building a Second Brain (Forte) keeps knowledge retrievable externally. FSRS covers the opposite case: things I want in my head with a known probability, e.g. 90%.

**sources**:
- https://github.com/open-spaced-repetition/srs-benchmark
- https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm
- https://github.com/open-spaced-repetition/awesome-fsrs
- https://dl.acm.org/doi/10.1145/3534678.3539081
- https://github.com/maimemo/SSP-MMC
- https://scholar.hit.edu.cn/en/publications/a-stochastic-shortest-path-algorithm-for-optimizing-spaced-repeti/
- https://arxiv.org/abs/2402.12291
- https://github.com/open-spaced-repetition/fsrs-vs-sm17
- https://docs.ankiweb.net/deck-options.html
- https://docs.ankiweb.net/faqs/what-spaced-repetition-algorithm
- https://docs.ankiweb.net/faqs/frequently-asked-questions-about-fsrs
- https://github.com/ankitects/anki/releases
- https://github.com/ankitects/anki/pull/5687
- https://github.com/ankitects/anki/issues/3616
- https://github.com/open-spaced-repetition/ts-fsrs
- https://github.com/open-spaced-repetition/ts-fsrs/releases/tag/v6.0.0
- https://github.com/open-spaced-repetition/py-fsrs
- https://github.com/open-spaced-repetition/fsrs-rs/releases/tag/v7.0.0
- https://github.com/open-spaced-repetition/fsrs4anki
- https://expertium.github.io/Benchmark.html
- https://expertium.github.io/Retention.html
- https://expertium.github.io/History.html
- https://github.com/st3v3nmw/obsidian-spaced-repetition/releases
- https://supermemo.com/en/blog/supermemo-is-better-than-fsrs-by-far
- https://forums.ankiweb.net/t/fsrs-5-is-a-significant-regression-for-a-minority-of-users-who-use-again-a-lot-on-new-and-learn-cards/66593
- https://forums.ankiweb.net/t/since-switching-to-fsrs-workload-has-gone-up-dramatically/56350
- https://dev.to/palachdigital_20fd679f5fe/why-fsrs-is-better-than-sm-2-2m17
- https://api.npmjs.org/downloads/point/last-month/ts-fsrs
- https://pypistats.org/api/packages/fsrs/recent

**last_verified**: 2026-11-13. Primary sources read directly: the srs-benchmark README (results tables, version descriptions, commit dates), the FSRS algorithm wiki (FSRS-4.5/5/6 formulas and default parameters), the Anki manual and FSRS FAQ, Anki GitHub release notes 23.10-26.11b1, the ts-fsrs, py-fsrs and fsrs-rs READMEs and release notes, the GitHub, npm and PyPI download APIs, the KARL full text, and the fsrs-vs-sm17 README. Secondary: the KDD 2022 abstract via the HIT scholar page and dblp (full text not read), Expertium's analysis pages (99.6%, 84.3% and 88.2% superiority figures), SuperMemo World's blog, and blogs for the '20-30% fewer reviews' claim. Interval sequences, lapse values and retention ratios are my own calculations from the published FSRS-6 formulas and default parameters.

### Other Info

**uncertain** (left out):
- numbers_or_effect_sizes
- time_cost

## Other memory models and the open SRS benchmark

### Basic Info

**name**: Other memory models and the open SRS benchmark

**category**: algorithm

**origin**: Half-life regression (HLR): Burr Settles (Duolingo) and Brendan Meeder (research done at Duolingo; then at Uber ATC), ACL 2016, Berlin. Code and the 13M-trace data set are released under MIT. Open SRS benchmark: the srs-benchmark repository of the Open Spaced Repetition organisation (Jarrett Ye / L-M-Sherlock, Expertium and others), created 11 Oct 2023. Its data set, anki-revlogs-10k, was published on Hugging Face on 29 Oct 2024 (DOI 10.57967/hf/3435, last modified 22 Aug 2025). It replaces the earlier FSRS-Anki-20k set. Content-aware scheduling: KARL (KAR3L) by Matthew Shu, Nishant Balepur, Shi Feng and Jordan Boyd-Graber (Jordan Boyd-Graber's Pinafore group at the University of Maryland), EMNLP 2024. LECTOR by Jiahao Zhao (Xi'an University of Posts and Telecommunications), an arXiv preprint of 5 Aug 2025. Other models in the benchmark: ACT-R activation model (Pavlik & Anderson), DASH (Lindsey, Shroyer, Pashler & Mozer 2014), Ebisu (Ahmed Fasih, Bayesian), neural nets (GRU, LSTM, RWKV), and SBD, a 7-parameter model added in Sep 2026. Related optimisation work: MEMORIZE (Tabibian et al., PNAS 2019) and SSP-MMC (Ye et al., KDD 2022).

**one_line**: Besides Leitner, SM-2 and FSRS there is a family of memory models: Duolingo's half-life regression, ACT-R, DASH, Ebisu, neural nets, and new content-aware models that read the card text. An open benchmark on about 10,000 real Anki collections ranks how well each one predicts whether you will remember a card.

### Evidence

**key_studies**:
- Settles & Meeder 2016, 'A Trainable Spaced Repetition Model for Language Learning', ACL 2016, pp. 1848-1858, doi 10.18653/v1/P16-1174. Recall is modelled as p = 2^(-lag/h), with half-life h = 2^(theta*x) learned from features of the practice history and the word. On 12.9M Duolingo traces it cut mean absolute error by at least 45% vs the Leitner and Pimsleur baselines. Two production A/B tests followed: HLR vs Leitner, and the HLR variant without word-level (lexeme) features vs full HLR.
- open-spaced-repetition/srs-benchmark (README updated Sep-Oct 2026). 9,999 Anki collections and 349,923,850 evaluated reviews; 10,000 collections and 519,296,315 reviews when same-day reviews are scored. Time-series split, reporting log loss, RMSE(bins) and AUC with 99% confidence intervals. It compares FSRS v1 to FSRS-7, HLR, Ebisu, ACT-R, DASH variants, SBD, logistic regression, GRU, LSTM, RWKV, and constant and moving-average baselines.
- Shu, Balepur, Feng & Boyd-Graber 2024, 'KARL: Knowledge-Aware Retrieval and Representations aid Retention and Learning in Students', EMNLP 2024 (arXiv 2402.12291). A content-aware student model: deep knowledge tracing plus BERT embeddings plus top-k retrieval of similar studied cards. Trained on 123,143 study logs from 543 users on trivia flashcards. It beats HLR, Leitner, SM-2, FSRS, LM-KT and GPT-3.5 on 7 of 8 offline metrics. An online test on 27 users compared it with FSRS.
- Zhao 2025, 'LECTOR: LLM-Enhanced Concept-based Test-Oriented Repetition for Adaptive Spaced Learning', arXiv 2508.03275 (not peer-reviewed; an anonymous ICAIS 2025 version is on airaxiv). It adds LLM-judged semantic similarity between vocabulary items to spacing. Evaluated only in simulation: 100 simulated learners over 100 days, against SSP-MMC, SM-2, HLR, FSRS, an Anki baseline and a threshold baseline.

**evidence_strength**: Graded by component. HLR: moderate. It comes from one large industrial study with open code and data and two large randomized A/B tests, but those measured engagement, not learning. On Anki data, HLR lags far behind FSRS. Open SRS benchmark: moderate to strong as a measure of predictive accuracy. It is very large, uses real-world data, and publishes open code, confidence intervals and outside model submissions. The weaknesses: Anki data only, run by the FSRS developers, and it says nothing about learning outcomes. Content-aware scheduling: weak and preliminary. There is one peer-reviewed study (KARL) with a 27-user, six-day online test, one non-peer-reviewed simulation-only preprint (LECTOR), and a small practitioner experiment (Rember, 4,447 reviews). DASH-style personalised review has one well-known classroom study (Lindsey et al. 2014), not replicated at scale.

**numbers_or_effect_sizes**:
- HLR on Duolingo logs (12.9M traces, two weeks, 90/10 split). MAE: HLR 0.128, HLR without lexeme features 0.128, Leitner 0.235, Pimsleur 0.445, logistic regression 0.211, constant p=0.859 0.175. AUC: HLR 0.538, Leitner 0.542, Pimsleur 0.510. So the '45%+ error reduction' is MAE, and Leitner still ranked items slightly better.
- HLR A/B tests (Table 4). Experiment I, HLR vs Leitner, six weeks, just under 1M students: daily return after any activity +0.3%, after lessons +0.3%, after practice -7.3% (significant). Experiment II, HLR without lexeme features vs HLR, two weeks, 3.3M students: any activity +12.0%, lessons +1.7%, practice +9.5%. The abstract's '12% engagement' figure comes from Experiment II, not from beating Leitner.
- srs-benchmark, without same-day reviews (log loss / RMSE(bins) / AUC): RWKV-Instant 0.2773 / 0.02502 / 0.8329 (2.76M parameters, trained across users). RWKV-Curve 0.3193. GRU 0.3328. LSTM 0.3332. FSRS-7 (recency, 100 epochs) 0.3363. MOVING-AVG 0.3369 / 0.05915 / 0.7001 (0 parameters). Logistic regression 0.3393. FSRS-7 0.3401 / 0.0634 / 0.7167. SBD (7 parameters) 0.3410. FSRS-6 0.3460. DASH 0.3682. AVG 0.3945. ACT-R 0.4033 / 0.1074 / 0.5225. HLR 0.4694 / 0.1275 / 0.6369. Ebisu v2 0.4989 / 0.1627 / 0.6051.
- Metric gaming: RMSE-BINS-EXPLOIT reaches the 'best' RMSE(bins), 0.0135, with an absurd log loss of 4.608. That is why the benchmark reports three metrics.
- With same-day reviews scored: RWKV-Instant 0.2660, LSTM 0.3140, GRU 0.3141, FSRS-7 0.3206, DASH 0.3487, FSRS-6 0.3842, HLR 0.705, Ebisu v2 0.772 log loss.
- anki-revlogs-10k: about 10,000 collections, each with at least 5,000 review-log entries; about 727M reviews; 15.7 GB of Parquet (revlogs, cards, decks). Fields: card_id, day_offset, rating 1-4, state, duration (0-60,000 ms), elapsed_days, elapsed_seconds. There is no card text. 30,880 downloads in the last month.
- KARL offline (seen cards, AUC / ECE): KAR3L 0.864 / 0.091, FSRS 0.752 / 0.111, Leitner 0.752 / 0.234, SM-2 0.660 / 0.200, LM-KT 0.658 / 0.285, GPT-3.5 0.427 / 0.544, HLR 0.370 / 0.387. On unseen cards KAR3L reaches 0.786 / 0.085; history-only models cannot predict unseen cards at all. Online (32 six-day study sessions, 27 users): pre/post accuracy FSRS 0.41 to 0.88, KAR3L 0.42 to 0.86. Response time on all cards 6.82 s vs 6.27 s (p<0.05). Testing throughput 2.58 vs 2.74 correct answers per second.
- LECTOR simulation (100 simulated learners, 25 concepts each, 100 days). Success rate: LECTOR 90.2% (50,706 attempts), FSRS 89.6% (151,848 attempts), SSP-MMC 88.4% (42,743), threshold 84.7%, HLR 76.6%, Anki baseline 60.5%, SM-2 47.1%. The headline gain is 1.8 percentage points over SSP-MMC.
- DASH-style personalised review (Lindsey et al. 2014, Psychological Science, eighth-grade Spanish): on a cumulative exam a month after the semester, +16.5% retention vs massed study and +10.0% vs a one-size-fits-all spaced schedule.
- Content-aware tweak on FSRS (Randazzo, Rember, Aug 2025; 4,447 reviews, 940 cards, 317 notes): AUC 0.6294 for optimised FSRS, rising to 0.6386 when related cards from the same note were reviewed since the card's last review (a 'priming' bonus). Seeding a new card's stability from its note siblings lowered the calibration error (ICI) from 0.0108 to 0.0070. Preliminary, small data set.

**limitations_and_criticism**: Benchmark: it measures how well a model predicts the next review, not how much anyone learns or how many minutes a schedule costs. Calibration metrics can be gamed (RMSE-BINS-EXPLOIT). Trivial baselines come close on log loss: MOVING-AVG 0.3369 beats FSRS-7 on log loss, though its AUC is lower. The data come from Anki users with at least 5,000 reviews (heavy users, many in medicine), and the reviews were scheduled by SM-2 or FSRS, which biases what is observed. There is no card text, so content-aware models cannot be tested on it. It is curated by the FSRS team; the open code, gated-but-open data and external model submissions mitigate this. HLR: designed around Duolingo's word-and-skill structure. The lexeme features overfit (students complained that some words decayed regardless of practice) and needed removal. On Anki data it ranks below even the constant-average baseline on log loss (0.4694 vs 0.3945). Its 'half-life' is a 50%-recall point, not FSRS's 90% stability. Neural models (RWKV, GRU, LSTM) are the most accurate but are heavy (RWKV has 2.76M parameters), are trained across thousands of users, use extra features (deck structure, siblings, time of day), and can give unintuitive outputs (recall rising over time, never 100%). None ships in a mainstream app. KARL: trivia only, 27 online users over six days. The online gain is answer speed, not retention. Its FSRS baseline was a 2024 version, and BERT inference is slower. LECTOR: simulation with synthetic learners, a single author, not peer-reviewed. SM-2 at 47% success suggests the simulator behaves oddly, and every scheduling decision needs LLM calls. Content-aware models in general need card text, which raises privacy issues for shared data sets, and they assume content affects difficulty similarly for everyone.

**evidence_setting_and_comparator**: HLR: field-observational logs (Duolingo, two weeks) with a time split, compared against Leitner, Pimsleur, logistic regression and a constant; plus two randomized production A/B tests measuring daily return rate. srs-benchmark: field-observational Anki logs, time-series cross-validation, every model compared against the AVG and MOVING-AVG baselines and against each other. KARL: offline logs from a trivia flashcard app, plus a small within-subject online study against FSRS. LECTOR: simulation against six schedulers. Lindsey et al. 2014 (DASH): a classroom experiment against massed and generic spaced review.

**retention_interval_tested**: HLR: lags observed within Duolingo practice in a two-week log window; the A/B tests ran six and two weeks. srs-benchmark: the next review at whatever interval actually elapsed, from seconds (same-day table) to years. KARL: five days of study, post-test on day 6. LECTOR: a simulated 100 days. Lindsey et al. 2014: a cumulative exam one month after the end of the semester.

**replication_status**: HLR: open code and the 13M-trace data set (Harvard Dataverse, 361 MB). It has been re-implemented in srs-benchmark with an FSRS-style power forgetting curve, where it lags. Expertium notes HLR reaches AUC 0.633 on Anki data, higher than Duolingo's reported 0.54. srs-benchmark: fully reproducible from public code and the gated-but-open data set. Outside authors have added models (DASH variants, SBD in Sep 2026), and SuperMemo comparisons sit in sister repos (fsrs-vs-sm15, fsrs-vs-sm17). Content-aware scheduling: KARL has not been independently replicated (code and data are public at Pinafore/fact-repetition). LECTOR has not been replicated, has no public code that I found, and is simulation only. Randazzo's results are a small single-app experiment. DASH-style personalised review: the 2014 classroom result is cited widely but not replicated at scale.

### Practice

**how_to_apply**: 1) As a user: pick a scheduler backed by srs-benchmark results. Today that means FSRS (FSRS-6 in Anki, FSRS-7 in ts-fsrs). Treat 'AI scheduler' marketing that is not benchmarked with suspicion. 2) To judge a new scheduler, ask three questions. Is it on srs-benchmark or a comparable open data set? What are its log loss and AUC against FSRS-6 and against MOVING-AVG? Were outcomes measured on people, or only in simulation? 3) If I build my own pipeline (a JS/TS agent over my vault): schedule with ts-fsrs. Log every review in the anki-revlogs schema (card_id, timestamp or day_offset, rating 1-4, state, duration, elapsed_days, elapsed_seconds), so I can run the FSRS optimiser and the benchmark scripts on my own data. Also store the card text and the source note's ID, so content-aware ideas can be tested later. 4) Cheap content-aware tweaks worth trying on my own data: seed a new card's stability from its siblings in the same note, and add a small 'priming' bonus when a related card from the same note was just reviewed. 5) Never select a model on RMSE(bins) alone; look at log loss and AUC together.

**concrete_example**: HLR worked example: with half-life h = 4 days, p = 2^(-lag/4). Recall is 0.84 after 1 day, 0.50 after 4 days and 0.25 after 8 days. HLR reaches 90% recall only 0.61 days after the last practice (0.152*h). FSRS with stability S = 4 days means 90% recall at day 4, so the two '4-day' memories are very different, and comparing them by name misleads. Benchmark example: download anki-revlogs-10k (Hugging Face, accept the licence), then run 'uv run script.py --algo FSRS-6 --short'. Or use the tiny sample data set linked in the README, and compare log loss, RMSE(bins) and AUC with '--algo HLR' and '--algo GRU'. Content-aware example from my vault: my 'Spacing effect' Zettel yields three cards (the definition, Cepeda's gap rule, the lag effect). A content-aware scheduler would treat a fresh success on the definition card as weak evidence that the other two are fresher too. FSRS and HLR treat them as three unrelated IDs.

**from_own_notes**: This is where my own notes have an edge over shared decks. Content-aware models are the first that could use what a vault already encodes: which cards come from the same note, which notes link to each other, and the text itself. Practical steps now: give every card a stable ID plus a link back to its source note (Obsidian_to_Anki-style exporters and my own scripts can do this), and keep my review logs with card text. The public benchmark data deliberately strip the text, so my own logs are what make content-aware experiments possible. Randazzo's 'idea-level' scheduling (many generated prompts testing one idea, with history shared by meaning rather than card ID) fits evergreen and Zettelkasten notes better than one-card-one-fact. But it is still research, not a tool I can install.

**knowledge_type_fit**: HLR: language vocabulary and morphology (lexeme tags), its original Duolingo setting. srs-benchmark: whatever Anki users study, mostly medicine and languages, but text-blind. KARL: trivia facts from quiz-bowl questions; the authors note it is untested on other domains. LECTOR: exam vocabulary (TOEFL, IELTS, GRE) where near-synonyms interfere. Content-aware scheduling in general: most promising for interrelated concepts (cards cut from linked notes), paraphrased prompts and duplicates. It adds least for isolated facts.

**failure_modes**: Choosing a scheduler from vendor claims or simulations instead of open benchmarks. Mistaking HLR's half-life (50% recall) for FSRS stability (90% recall) when porting parameters or comparing apps. Trusting one metric (RMSE(bins)) that can be gamed. Overfitting item features (HLR's lexeme weights) so some items decay no matter what. Building a custom scheduler without logging timestamps, ratings and durations, so it can never be optimised or benchmarked. Regenerating card IDs on every note edit, which breaks any history-based model. Sending private note text to a third-party LLM for 'semantic' scheduling without thinking about privacy. Assuming a benchmark win (better prediction) automatically means better learning.

### Tools

**availability_and_price**: All free. HLR: code (pure Python experiment.py plus R evaluation) is on GitHub under MIT (duolingo/halflife-regression), and the data (361 MB gzipped CSV, 13M traces) are on Harvard Dataverse. srs-benchmark: free on GitHub; the GitHub API reports no licence file. anki-revlogs-10k: free on Hugging Face, gated (log in and accept a custom 'anki-revlogs-10k' licence; access is auto-approved). KARL: code and data under MIT at github.com/Pinafore/fact-repetition. LECTOR: paper only; I found no public code. Ebisu, ACT-R and DASH implementations are bundled in srs-benchmark.

**obsidian_integration**: None directly. Obsidian flashcard plugins use SM-2 variants or FSRS (via ts-fsrs). HLR, DASH, Ebisu, the neural nets and the content-aware models are not available as plugins. The DIY route is ts-fsrs for scheduling, plus vault embeddings or the link graph for a content-aware adjustment, plus a review log in the anki-revlogs schema so the benchmark tools can evaluate it.

**data_ownership_and_format**: Benchmark data: Parquet in three tables (revlogs, cards, decks). Users are anonymised to IDs, there is no card content, and access is gated by licence on Hugging Face. HLR data: gzipped CSV of learning traces. Both formats are simple and portable. Mirroring the revlog schema in my own system keeps my review history portable between FSRS implementations, Anki and the benchmark tools.

**automation_interface**: srs-benchmark: a Python command line ('uv run script.py --algo <MODEL>' with flags such as --short, --secs, --default, --recency, --partitions deck|preset, --n_splits, --raw, --weights), plus pretrain.py for pooled pretraining. HLR: experiment.py (pure Python; the authors suggest pypy for speed) and evaluation.r. The data set loads with Hugging Face Datasets, Dask or Polars. For my own logs: fsrs-rs, @open-spaced-repetition/binding (Node or browser, including CSV conversion) and py-fsrs's Optimizer fit and evaluate FSRS. An agent can export Anki review logs and score them with the same metrics. KARL: Python research code (Pinafore/fact-repetition).

**maintenance_signals**: srs-benchmark: created 11 Oct 2023, about 787 commits, 287 stars, last push 24 Oct 2026. Maintained by L-M-Sherlock (Jarrett Ye), Expertium and asukaminato0721, and it invites new algorithm submissions through GitHub issues. anki-revlogs-10k: created 29 Oct 2024, modified 22 Aug 2025, 30,880 downloads last month, 23 likes. duolingo/halflife-regression: created 2016, 585 stars, MIT, a research artifact. Pinafore/fact-repetition (KARL): 8 stars, last push Feb 2024. LECTOR: a single-author preprint with no code repository found.

### Links

**relation_to_vault_notes**: Learn Like a Pro (Oakley & Schewe): the forgetting curve it describes is what HLR, FSRS and the benchmark models fit numerically. Zettelkasten / How to Take Smart Notes (Ahrens): Ahrens says understanding comes from connecting ideas. Content-aware memory models are the first schedulers that could treat linked notes as related memories instead of isolated cards. Cornell notes: cue questions become cards whose logs can feed these models. Building a Second Brain (Forte): the vault is the external store, and the benchmark tells me which scheduler to trust for the small slice I commit to memory.

**sources**:
- https://aclanthology.org/P16-1174.pdf
- https://aclanthology.org/P16-1174/
- https://github.com/duolingo/halflife-regression
- https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/N8XJME
- https://github.com/open-spaced-repetition/srs-benchmark
- https://huggingface.co/datasets/open-spaced-repetition/anki-revlogs-10k
- https://arxiv.org/abs/2402.12291
- https://aclanthology.org/2024.emnlp-main.784
- https://github.com/Pinafore/fact-repetition
- https://arxiv.org/abs/2508.03275
- https://airaxiv.com/papers/view/2510.0024/v1
- https://giacomoran-dot-com.pages.dev/blog/content-aware-sr
- https://community.ankihub.net/t/formalizing-memory-models/592361
- https://expertium.github.io/Benchmark.html
- https://home.cs.colorado.edu/~mozer/Research/Selected%20Publications/reprints/LindseyShroyerPashlerMozer2014.pdf
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6410796
- https://learning.mpi-sws.org/memorize
- https://github.com/maimemo/SSP-MMC
- https://fasiha.github.io/ebisu/
- https://github.com/open-spaced-repetition/fsrs-vs-sm17

**last_verified**: 2026-11-13. Primary sources read directly: the Settles & Meeder 2016 full text (results and A/B tables), the KARL full text (Tables 1 and 4, limitations), the LECTOR full text (abstract, Table 1, simulation setup), the srs-benchmark README and its commit history, the Hugging Face dataset card and API metadata, the HLR repository README, and the GitHub API for repository dates and stars. Secondary or abstract-level: Lindsey et al. 2014 (abstract and press copies), Tabibian et al. 2019 (abstract), Randazzo's content-aware blog (practitioner experiment), and Expertium's benchmark commentary (HLR AUC on Anki data). The AnkiHub 'Formalizing Memory Models' thread returned HTTP 503 and was seen only through a search snippet. The HLR worked numbers are my own calculations from the paper's formula.

### Other Info

**uncertain** (left out):
- status_2026
- time_cost

## Minimum information principle (Wozniak's 20 rules)

### Basic Info

**name**: Minimum information principle (Wozniak's 20 rules)

**category**: card-design

**origin**: Piotr Wozniak (creator of SuperMemo, Poland). Rule 4 of his article 'Effective learning: Twenty rules of formulating knowledge', compiled in 1999 (the supermemo.com page is dated 06.12.1999 and says 'February, 1999 (updated)'). Distilled from his own SuperMemo practice since the late 1980s. Revisited on the SuperMemo Guru wiki ('20 rules of knowledge formulation', last edited 22 July 2026), which adds a 'New rules: incremental reading' section.

**one_line**: Make each flashcard ask for the smallest possible piece of knowledge, so every review retrieves one short, unambiguous answer along the same memory path.

### Evidence

**key_studies**:
- Wozniak, P. (1999). 'Effective learning: Twenty rules of formulating knowledge' (supermemo.com / super-memory.com). The primary source. The rules are ordered by importance: 1 Do not learn if you do not understand, 2 Learn before you memorize, 3 Build upon the basics, 4 Stick to the minimum information principle, 5 Cloze deletion is easy and effective, 6 Use imagery, 7 Use mnemonic techniques, 8 Graphic deletion is as good as cloze deletion, 9 Avoid sets, 10 Avoid enumerations, 11 Combat interference, 12 Optimize wording, 13 Refer to other memories, 14 Personalize and provide examples, 15 Rely on emotional states, 16 Context cues simplify wording, 17 Redundancy does not contradict the minimum information principle, 18 Provide sources, 19 Provide date stamping, 20 Prioritize. Rationale for rule 4: a simple item is retrieved along one path every time. A complex item activates its parts in different orders, so the traces interfere and stability cannot be raised evenly. Split items can also each be scheduled at their own pace. This is a practitioner essay, not a controlled study.
- Pan, S. C. & Rickard, T. C. (2018). Transfer of test-enhanced learning: Meta-analytic review and synthesis. Psychological Bulletin 144(7), 710-756. 192 transfer effect sizes, 122 experiments, 67 articles, N = 10,382. Testing transfers on average (d = 0.40), but transfer is weakest to rearranged stimulus-response items and to untested material seen during study. This indirectly backs the principle: what you do not retrieve is barely strengthened, so each fact you want needs its own prompt, and each direction (A->B, B->A) needs its own card.
- Hinze, S. R. & Wiley, J. (2011). Testing the limits of testing effects using completion tests. Memory 19(3), 290-304. Fill-in-the-blank practice on prose helped only the exact items that had been tested, not related information from the same passage, at 2-day and 7-day delays. Retrieval benefits are narrow, so cards must target exactly what you want to keep.
- Dunlosky, J. & Rawson, K. A. (2012). Overconfidence produces underachievement: Inaccurate self evaluations undermine students' learning and retention. Learning and Instruction 22, 271-280. Learners self-grading definition-length answers often score wrong or partial answers as fully correct (commission errors), then drop those items too early. Later work found that breaking answers into 'idea units' reduced the overconfidence. This is indirect support for short answers you can grade honestly.
- Matuschak, A. (2020). 'How to write good prompts'. A modern restatement in which prompts should be focused, precise, consistent, tractable and effortful. Inconsistent answers invite interference, including retrieval-induced forgetting (Anderson, Bjork & Bjork 1994, JEP:LMC). Practitioner guide.

**evidence_strength**: Anecdotal as a direct claim, moderate for its parts. No controlled experiment comparing atomic and compound flashcards was found. Wozniak supports the rule with his own SuperMemo experience and one quantified anecdote. Its mechanisms rest on established lab findings: retrieval benefits are specific to what was retrieved (Pan & Rickard 2018 meta-analysis; Hinze & Wiley 2011), self-grading of long answers is lenient (Dunlosky & Rawson 2012), and similar items interfere (retrieval-induced forgetting, cue overload). These justify the principle but do not test it as a card-writing rule.

**limitations_and_criticism**:
- Untested as a rule. The ordering of the 20 rules is Wozniak's judgement, and the SuperMemo Guru page (2026 edit) still cites no studies, only 'experiments with AlterBrain'.
- Wozniak himself now says 'sticking to the 20 rules is not enough'. His AlterBrain model trained only on perfect flashcards speaks 'flashcardese' (thin answers such as 'Putin = a Russian politician'). In incremental reading, items may start complex and be simplified step by step. Semantic context, applicability and pleasure of learning gain weight.
- Fragmentation and loss of the big picture: atomized cards can lose the links between facts (AnkiWeb forum 'The Big Picture Problem'). The rules themselves counter this with rules 1-3 (understand first, learn before memorizing, build on basics), rule 16 (context cues) and rule 17 (redundancy), but they are often quoted without them.
- Common misreading: 'minimum information' is not 'minimum context'. Ultra-short cards with no context cue produce ambiguous questions with several valid answers. The Memory Machines report (Kirkby & Matuschak 2026) names missing context and multiple valid answers as top failure modes.
- Cost: splitting takes authoring time (a Zettelkasten forum objection) and multiplies card count, so daily workload grows.
- Retrieving fragments does not automatically integrate them. Pan & Rickard find little transfer to untested material, so understanding questions (why, how, compare) must be written explicitly; they do not emerge from atomic facts.
- Precision trade-off: rounding numbers for simplicity, as in the Dead Sea example, loses precision unless extra cards add it back.

**evidence_setting_and_comparator**: Primary source: practitioner self-observation in SuperMemo, with no control condition and no comparator (one before/after anecdote). Supporting studies: a meta-analysis of lab and classroom experiments measured against non-testing re-exposure (Pan & Rickard 2018); a lab study of college students reading prose, comparing tested with untested and related items against restudy (Hinze & Wiley 2011); and a lab study of definition learning comparing accurate with inaccurate self-evaluation (Dunlosky & Rawson 2012). None compares atomic with compound flashcards directly.

**replication_status**: The principle as a card-writing rule has not been tested or replicated. The specificity of testing effects is well replicated (meta-analysed in Pan & Rickard 2018). Retrieval-induced forgetting was meta-analysed by Murayama et al. 2014 (Psychological Bulletin), with boundary conditions. The vendor length data is a single unreplicated observation. Wozniak's 25-fold figure is one item.

### Practice

**how_to_apply**:
- 1. Understand first (rules 1-3). Read the note and build the big picture before writing any card. Never card something you could not explain.
- 2. One card, one retrievable fact. If the answer contains 'and', a comma-separated list or two clauses, split it.
- 3. Keep the answer to a word, number, name or short phrase. Make the question as short as possible but unambiguous: add a context prefix (rule 16), e.g. 'Pomodoro:' or '[Zettelkasten]'.
- 4. Replace sets with structure (rules 9-10). Turn unordered sets into ordered lists or smaller groups, and use overlapping clozes for sequences. Never ask 'list all X' for more than about 5 items.
- 5. Combat interference (rule 11). When two cards keep getting confused, add a distinguishing cue or a personal or emotional example (rules 13-15), or merge or delete one. Treat leeches as a design problem, not a memory problem.
- 6. Add redundancy deliberately (rule 17): a reverse card, a 'why' card and an example card for the same fact. Each stays simple.
- 7. Add the source and a date stamp for volatile facts (rules 18-19), and prioritize (rule 20): only card what is worth the review time.
- 8. Self-check before saving: can I grade this card honestly as right or wrong within a few seconds?

**concrete_example**: From the vault's Pomodoro note. Bad (compound) card: 'Q: Describe the Pomodoro Technique. A: Francesco Cirillo, late 1980s, 25-minute focus blocks, 5-minute breaks, a longer 15-30 minute break after 4 pomodoros, kitchen timer.' Self-grading is fuzzy and each review recalls a different subset. Minimum-information version (Obsidian Spaced Repetition plugin syntax 'question::answer'): 'Pomodoro: who created the technique?::Francesco Cirillo' / 'Pomodoro: length of one focus interval?::25 minutes' / 'Pomodoro: length of a short break?::5 minutes' / 'Pomodoro: after how many pomodoros do you take a long break?::4' / 'Pomodoro: why stop when the timer rings even mid-task?::(my own reason, e.g. it protects the break and keeps the next block fresh)'. That is five cards at about 8 s each per review, against one card that is never graded consistently.

**from_own_notes**:
- Zettelkasten permanent notes are already atomic (one idea per note), but one note is not one card. A typical permanent note yields 2-5 atomic cards: definition, cause, example, contrast.
- Cornell notes: cue-column keywords and questions map directly to the question side. The summary section is not a card; split it into its claims.
- Book notes: one card per claim worth keeping, phrased as 'Author claims X' (rule 18, sources). Put the card inline in the note (e.g. 'Q::A' or Matuschak-style 'Q.' / 'A.' lines) so it always links back to its source and context.
- Use note titles, headings or tags as the context cue (rule 16), and frontmatter dates as the date stamp (rule 19).
- Do not card a whole note. Prioritize (rule 20) with Nielsen's 10-minute rule or Gwern's 5-minute rule.
- Wozniak's 2026 incremental-reading view matches Building a Second Brain's progressive summarization: a first-pass cloze on your own sentence is acceptable, then simplify it on later passes as the idea proves valuable.

**time_cost**: Authoring: splitting is the main cost. One compound card becomes about 5-10 cards, and writing them takes minutes per note. Reviewing: each atomic card is fast, about 8 s per review and about 4-7 minutes over 20 years (Nielsen 2018), or 10-30 s across the first year (Matuschak 2020). Workload scales with card count. Nielsen's deck of about 10,000 cards cost 15-20 minutes a day, and he treats more than 20 min/day as a sign of adding too fast.

**knowledge_type_fit**: Strong fit: discrete facts, vocabulary, definitions, names, dates, numbers, formulas, closed lists and sequences (via overlapping clozes). Moderate fit: concepts and mechanisms, when broken into several focused prompts from different angles. Poor fit: holistic understanding on its own, motor and procedural skills, open-ended arguments, creative synthesis, and fast-changing data (unless date-stamped).

**failure_modes**:
- Over-splitting into context-free fragments ('flashcardese'), so cards no longer connect to anything.
- Ambiguous ultra-short questions with several valid answers, causing inconsistent grading and interference.
- Interference between near-identical cards, which then turn into leeches.
- Card explosion from splitting everything, leading to review debt and quitting.
- Learning the card's wording rather than the knowledge (pattern matching).
- Sets or enumerations crammed into one card ('list the 7 ...'), which are almost never answered completely.
- Long answers graded leniently as 'Good' when only half recalled.
- Memorizing before understanding (breaking rules 1-2).
- Rounded or approximate values replacing precise ones without a follow-up card.

### Tools

**availability_and_price**: n/a (a guideline). The article is free to read at supermemo.com and super-memory.com, and the principle applies in any SRS (Anki, SuperMemo, Obsidian plugins, Mochi, RemNote).

**obsidian_integration**: n/a as software. In practice it shapes how you write inline cards: Obsidian Spaced Repetition plugin 'question::answer' single-line cards, Decks plugin heading-based cards, Obsidian_to_Anki notes. Short single-line cards are the natural format for atomic items.

**status_2026**: Still the canonical card-design reference. The 1999 article remains online, and the Anki community, Matuschak and Nielsen all cite it. The SuperMemo Guru wiki page '20 rules of knowledge formulation' was last edited 22 July 2026. It adds 'New rules: incremental reading' (complex items allowed early, simplified later; more weight on applicability and semantic context) and the AlterBrain warning that the rules alone are not enough. The principle is widely embedded in LLM flashcard-generation prompts. The 2026 Memory Machines report (Kirkby & Matuschak) offers a successor quality rubric, targeting plus construction, that checks the same things: one clear answer and enough context.

**data_ownership_and_format**: n/a (a writing guideline, not a tool).

**automation_interface**: n/a. No software interface, though the rules are commonly encoded as rubric text in LLM card-generation and card-linting prompts.

**maintenance_signals**: n/a (not software). The text is maintained by Wozniak, and the SuperMemo Guru wiki page was last edited 22 July 2026.

### Links

**relation_to_vault_notes**: Learn Like a Pro (Oakley & Schewe): its chunking and retrieval-practice advice matches atomic cards, and its warning about illusions of competence matches lenient grading of long answers. Zettelkasten / How to Take Smart Notes (Ahrens): note atomicity (one idea per note) parallels card atomicity, and Ahrens's preference for elaboration over rote learning echoes rules 1-2 (understand first). Cornell notes: the cue column is effectively a list of minimum-information questions. Building a Second Brain: progressive summarization resembles Wozniak's 2026 'simplify items progressively'. Pomodoro and Mind map notes provide ready worked examples (rule 6, imagery, cites mind maps).

**sources**:
- https://www.supermemo.com/en/blog/twenty-rules-of-formulating-knowledge
- https://www.super-memory.com/articles/20rules.htm
- https://supermemo.guru/wiki/20_rules_of_knowledge_formulation
- https://supermemo.guru/wiki/Minimum_information_principle
- https://sc-pan.github.io/pdf/PR_2018.pdf
- https://doi.org/10.1080/09658211.2011.560121
- https://doi.org/10.1016/j.learninstruc.2011.08.003
- https://andymatuschak.org/prompts/
- http://augmentingcognition.com/ltm.html
- https://memory-machines.com/report
- https://forums.ankiweb.net/t/the-big-picture-problem-with-anki/46516
- https://forum.zettelkasten.de/discussion/comment/6901
- https://studycardsai.com/blog/does-flashcard-question-length-matter

**last_verified**: 2026-11-13. Primary sources read directly: the supermemo.com 20-rules article, the SuperMemo Guru pages (20 rules and minimum information principle), the Pan & Rickard 2018 abstract (PDF), Matuschak's 'How to write good prompts', Nielsen's 'Augmenting Long-term Memory' and the Memory Machines report. Secondary (search abstracts and summaries only): Hinze & Wiley 2011, Dunlosky & Rawson 2012, the forum criticism, and the vendor length data. The DOI for Dunlosky & Rawson 2012 was not opened.

### Other Info

**uncertain** (left out):
- numbers_or_effect_sizes
- retention_interval_tested

## Writing prompts for conceptual knowledge

### Basic Info

**name**: Writing prompts for conceptual knowledge

**category**: card-design

**origin**: Michael Nielsen, 'Augmenting Long-term Memory' (Y Combinator Research, July 2018) and 'Using spaced repetition systems to see through a piece of mathematics' (12 January 2019). Andy Matuschak & Michael Nielsen, Quantum Country and 'How can we develop transformative tools for thought?' (October 2019). Andy Matuschak, 'How to write good prompts: using spaced repetition to create understanding' (December 2020). Gwern Branwen, 'Spaced Repetition for Efficient Learning' (created 2009-03-11, last modified 2019-05-17), source of the '5-minute rule'.

**one_line**: Write many small, focused retrieval prompts that come at one concept from several angles (attributes, similarities, parts, causes, significance), so spaced repetition builds understanding rather than isolated trivia.

### Evidence

**key_studies**:
- Matuschak, A. (2020). 'How to write good prompts'. Practitioner guide, the core reference. Good prompts are focused (one detail), precise (clear what answer is wanted), consistent (same answer every time, avoiding interference and retrieval-induced forgetting), tractable (answerable correctly most of the time) and effortful (require real retrieval, no giveaways). Five lenses for concepts: attributes and tendencies, similarities and differences, parts and wholes, causes and effects, significance and implications. Also covers procedural prompts (keywords, conditions, 'why'), closed lists as clozes, open lists as tags, creative prompts and salience prompts.
- Nielsen, M. (2018). 'Augmenting Long-term Memory'. Practitioner self-report with about 10,000 cards. Keep questions and answers atomic, avoid orphan questions (2-3 related cards per new idea), avoid yes/no questions, phrase paper claims as 'paper X claims...', build your own decks (writing cards is elaborative encoding), tie cards to projects. Nielsen (2019) adds 'deep Ankification' of a proof: graze and atomize, restate in several ways, write 'aspirational' structural questions, then vary assumptions to find the boundaries.
- Pan, S. C. & Rickard, T. C. (2018). Psychological Bulletin 144(7), 710-756. Meta-analysis: 192 effect sizes, 122 experiments, N = 10,382. Practice testing transfers (d = 0.40, 95% CI 0.31-0.50). Transfer is greatest across test formats, to application and inference questions and to medical diagnosis problems, and weakest to rearranged items and untested material. Elaborated retrieval, response congruency and high initial accuracy drive transfer, and with none of them present the model predicts no transfer. This is the empirical case for writing conceptual prompts explicitly instead of hoping facts add up.
- Agarwal, P. K. (2019). Retrieval practice & Bloom's taxonomy: Do students need fact knowledge before higher order learning? Journal of Educational Psychology 111(2), 189-209. Three experiments (college lab and a 6th-grade classroom). Fact quizzes did not improve higher-order test performance. Higher-order and mixed quizzes did, and mixed quizzes did best overall. Conceptual retrieval must be practised directly.
- Butler, A. C. (2010). Repeated testing produces superior transfer of learning relative to repeated studying. JEP:LMC 36, 1118-1133. Testing beat restudy on rephrased, conceptual and inference questions at a 1-week delay. Listed as successfully replicated (van Eersel et al. 2016) in the FORRT replication atlas.
- Pan, S. C., Zung, I., Imundo, M. N., Zhang, X. & Qiu, Y. (2023). User-generated digital flashcards yield better learning than premade flashcards. JARMAC 12(4), 574-588. Six experiments, 48-hour test: self-made cards gave d = 0.45 for memory and d = 0.29 for application questions. Contrary result: Lin & McDaniel (2018).

**evidence_strength**: Moderate for the underlying claim, anecdotal for the specific heuristics. The claim that retrieval practice with conceptual, inference or higher-order questions improves understanding and transfer is supported by a meta-analysis (Pan & Rickard 2018) and several controlled lab and classroom studies (Butler 2010, Agarwal 2019), with a replication of Butler. The prompt-writing heuristics (five properties, five lenses, orphan rule, 10-minute and 5-minute thresholds, deep Ankification) come from practitioner experience and Quantum Country field observation. They have not been tested head-to-head against other prompt-writing styles.

**numbers_or_effect_sizes**:
- Nielsen 2018: about 8 s per review on average; about 4-7 minutes of lifetime review per average card over 20 years (versus just over 2 hours for weekly paper flashcards). 10-minute rule: 'if memorizing a fact seems worth 10 minutes of my time in the future, then I do it'. A little over 10,000 cards in about 2.5 years, 15-20 min/day when keeping up (more than 20 min/day means adding too fast). Intervals expand about 2.4x per success, about 1 in 12 cards is failed, and the average interval is 1.2 years.
- Nielsen 2018, reading output: 5-20 questions per shallow paper read (fewer than 5 is usually not worth it), several hundred questions for the AlphaGo deep dive, at least 3 good questions per seminar and at least 1 per extended conversation.
- Nielsen 2019 (mathematics): 'on the order of dozens' of cards per theorem, a few hours to add them, an estimated 5-10 minutes of lifetime study per card. 3.5 theorems processed.
- Matuschak 2020: an easy prompt costs about 10-30 s across its first year of practice. Aim for about 5-10 prompts per article on a first pass, and write more prompts than feels natural. SuperMemo-style schedulers target about 90% accuracy.
- Gwern 'Spaced Repetition': the 5-minute rule. Card it if you would spend more than 5 minutes over your lifetime looking it up or lose more than 5 minutes by not knowing it. The model gives 1.83 minutes of lifetime review per item, rounded up to 5 for safety. He suggests 3-20 new questions a day while studying a topic and ranks question types free recall > short answer > multiple choice > cloze > recognition.
- Quantum Country (Matuschak & Nielsen 2019): 112 embedded prompts in an essay that takes about 4 h to read. About 95 minutes of total review over 6 repetitions gave about 54 days of demonstrated retention per prompt (about 6,000 card-days in total). 195 users showed one month of retention on at least 80% of cards six months after launch.
- Pan & Rickard 2018: transfer d = 0.40. Pan et al. 2023: own cards d = 0.45 (memory) and d = 0.29 (application) over premade cards.
- Memory Machines (Kirkby & Matuschak 2026): even the best model, GPT-5.2, produced unusable prompts about 36% of the time (10% off-target, 26% needing refactor), and unaided LLM judges were under 70% accurate at spotting usable prompts. Writing good conceptual prompts is still hard.

**limitations_and_criticism**:
- The heuristics are untested. Nielsen calls his essay anecdotal and says he is not a memory expert. Matuschak says the mechanisms behind creative and salience prompts are open questions.
- Complexity debate: van Gog & Sweller (2015, Educational Psychology Review) argue the testing effect shrinks or disappears as element interactivity rises. Karpicke & Aue (2015) and Rawson (2015) rebut this and find a smaller but positive effect, so expect weaker gains for highly interdependent material.
- Pan & Rickard 2018 predict no transfer when none of the moderators are present. Conceptual prompts that are easy to pattern-match or graded leniently may not transfer.
- Declarative recall is not skill. Nielsen notes Anki knowledge does not automatically become procedural ability, and Gwern notes testing maintains rather than extends skill; deliberate practice is still needed.
- Writing good prompts is a hard, slow skill (Matuschak: 'Writing good spaced repetition memory prompts is hard'). Deep Ankification of one theorem took a few hours, and LLMs do not yet solve it (Memory Machines 2026).
- Quantum Country data are observational and self-selected (a small informal delayed-review comparison of 25 vs 16 users), and recall rates are an imperfect proxy for understanding (Matuschak's own analysis log).
- The 10-minute (Nielsen) and 5-minute (Gwern) thresholds are back-of-envelope estimates from optimistic scheduler models, not measurements.
- Emotional disconnection: Matuschak says the most important thing to optimize is the emotional connection to review sessions. Prompts you no longer care about should be deleted, or reviews become a chore and people quit.

**evidence_setting_and_comparator**: Practitioner essays: self-observation with no comparator. Quantum Country: field-observational data from real readers, plus one informal two-week comparison of delayed vs regular review. Pan & Rickard 2018: meta-analysis of lab and classroom studies, comparator = non-testing re-exposure (restudy). Agarwal 2019: lab (college) and a 6th-grade classroom, comparators = restudy or no quiz, plus fact vs higher-order vs mixed quizzes. Butler 2010: lab, comparator = repeated restudy. Pan et al. 2023: lab/online, comparator = premade flashcards.

### Practice

**how_to_apply**:
- 1. Decide whether it is worth carding: apply Nielsen's 10-minute rule or Gwern's 5-minute rule. Add striking ideas regardless.
- 2. Never write one big 'What is X?' prompt. Write at least 2-3 prompts per new idea so it is not an orphan, typically 3-6 per concept.
- 3. Run the five lenses: attributes (what is always, usually or never true of it), similarities and differences (versus the nearest concept), parts and wholes (examples, sub-types, parent category), causes and effects (what it does, what triggers it, when to use it), significance (why it matters to me or my projects).
- 4. Check each prompt against the five properties: focused, precise, consistent, tractable, effortful. Rewrite yes/no prompts as 'why' or 'how' prompts.
- 5. For papers and books, phrase claims as attributed ('Ahrens argues that...'), draw prompts from the abstract, intro, conclusion and figures, and aim for 5-10 prompts on a first pass.
- 6. For a deep idea such as a proof or model, do Nielsen's deep Ankification: graze and atomize the elements, restate them in several ways, add aspirational 'core reason in one sentence' prompts, then vary assumptions ('what breaks if...?').
- 7. Treat procedures as keyword prompts (key verbs, conditions, 'why this step') and open lists as tags with example prompts.
- 8. After a few review sessions, refactor prompts you fail for the wrong reasons, and delete 'exhaust' prompts and prompts you no longer care about.

**concrete_example**: Concept: Zettelkasten, from the vault's 'Zettelkasten' and 'How to take smart notes' notes. Avoid: 'Q: What is a Zettelkasten?' It is too broad, gives a different answer each time and is impossible to grade. Five-lens set: (1) Attribute: 'Q: What should one Zettelkasten permanent note contain? A: One idea, in my own words.' (2) Difference: 'Q: How does a Zettelkasten organize notes, unlike a topic-folder archive? A: By links between notes, not by filing under topics.' (3) Parts: 'Q: Ahrens's three main note types? A: Fleeting, literature and permanent notes.' (4) Cause/effect: 'Q: Why does Ahrens insist permanent notes are written in your own words rather than copied? A: Rewriting forces elaboration and exposes gaps in understanding.' (5) Significance: 'Q: What do I do with a book note's key idea before archiving it? A: Turn it into a permanent note and link it to at least one existing note.' Cost at Nielsen's rates: 5 prompts x about 4-7 min ≈ 20-35 minutes of lifetime review for a concept used daily.

**from_own_notes**:
- Write prompts inline in the note they come from. Matuschak's own system scans Markdown for 'Q.' / 'A.' lines and '{cloze}' paragraphs ending in '☉', syncs them to Anki and identifies each by a hash of its text (open source: andymatuschak/computer-supported-thinking). Editing the text resets its review history.
- In Obsidian, the Spaced Repetition plugin's multi-line '?' separator or Obsidian_to_Anki do the same job, and the prompt stays next to its source note and links.
- Evergreen or permanent notes (Zettelkasten) are the best source: they are already in your own words, so the five lenses can be run on each.
- Cornell cue-column questions are draft prompts; refine them with the five properties.
- Book notes: 5-10 attributed prompts per book chapter or article on the first pass.
- When a lens prompt cannot be answered from the note, that exposes a gap. Write it down as a note to-do, not a card (Matuschak suggests prompts that flag gaps).
- Self-written prompts carry the generation benefit (Pan et al. 2023). Nielsen argues others' prompts, and even your own deep-math decks, are largely illegible without their context, so cards made by an AI agent from your notes should be reviewed and edited, not accepted wholesale.

**time_cost**: Review: about 8 s per prompt per review (Nielsen); about 10-30 s per prompt across the first year (Matuschak); about 4-7 minutes per prompt over 20 years (Nielsen) or 1.8 minutes modelled, rounded to 5 (Gwern). Daily: 15-20 min/day sustained a deck of about 10,000 cards (Nielsen). Writing: deep conceptual sets are expensive, a few hours for dozens of cards per theorem (Nielsen 2019). Quantum Country: about 95 min of review on top of 4 h of reading for 112 prompts to reach about 54 days of retention each.

**knowledge_type_fit**: Fits: concepts, definitions with relations, mechanisms and causal chains, arguments and paper claims, mathematical proofs and their boundary conditions, procedures as keywords plus 'why', personal salience ('when would I use this?'). Weak fit: motor and tacit skills (need deliberate practice), open-ended creative application (creative prompts are experimental), open lists (use tags plus example prompts), and material you do not care about or have not understood yet.

**failure_modes**:
- Orphan prompts: a single card per idea with no related cards.
- Vague 'Explain X' or 'What is X' prompts with shifting answers, graded generously.
- Yes/no and true/false prompts that can be guessed.
- Answers recognised from the prompt's wording rather than retrieved (pattern matching), often from copied text.
- Cues that give the answer away (not effortful).
- Too many prompts added at once (review time over 20 min/day), causing review debt and quitting.
- Writing prompts for material you have not understood, or importing other people's conceptual decks.
- Over-optimizing the system ('programmer's efficiency disease', Nielsen) instead of using it.
- LLM-generated prompts missing context or allowing multiple valid answers (Memory Machines 2026).

### Tools

**availability_and_price**: n/a (a technique). All anchor guides are free online: andymatuschak.org/prompts, augmentingcognition.com/ltm.html, cognitivemedium.com/srs-mathematics, gwern.net/spaced-repetition, quantum.country. Applies in any SRS (Anki is free on desktop and Android; Nielsen cited about USD 25 for the iOS client in 2018).

**obsidian_integration**: n/a as a tool. Practical routes: inline Q/A or multi-line '?' cards with the Obsidian Spaced Repetition plugin; Obsidian_to_Anki or Anki-sync plugins to push note-embedded prompts to Anki; or Matuschak's open-source note-sync code (computer-supported-thinking) as a pattern for a script or agent that extracts 'Q.' / 'A.' lines from Markdown.

**status_2026**: Matuschak's December 2020 guide remains the standard reference for conceptual prompts and is the basis of most rubric-style guidance, including LLM prompt rubrics. Nielsen's 2018 and 2019 essays are unchanged, and Gwern's essay was last modified 2019-05-17. Newest development: Kirkby & Matuschak's 'Memory Machines' report (2026) tested LLM-generated prompts from reading highlights. GPT-5.2 produced about 36% unusable prompts, and LLM judges scored under 70%. The authors propose a targeting plus construction quality taxonomy (T0-T3). Prompt writing is still the bottleneck, and human review of machine-written conceptual prompts is still needed.

**data_ownership_and_format**: n/a (a writing technique). Where prompts live depends on the tool. Matuschak keeps them as plain-text 'Q.' / 'A.' lines inside Markdown notes, which keeps the notes as the source of truth.

**automation_interface**: n/a. No interface of its own. The guide's five properties and five lenses are often used as rubric text for LLM card generation and judging, and Matuschak's note-to-Anki sync code is open source on GitHub.

**maintenance_signals**: n/a (essays and guides, not software). Guide dated December 2020; Nielsen essays 2018 and 2019; Gwern last modified 2019; Memory Machines report 2026 (sponsor list as of April 2026).

### Links

**relation_to_vault_notes**: Learn Like a Pro (Oakley & Schewe): elaboration and retrieval practice. The five lenses are a structured form of elaboration, and Agarwal's result supports the book's call to practise recall at the level you need to perform. Zettelkasten / How to Take Smart Notes (Ahrens): permanent notes in your own words are the ideal prompt source. Both systems favour elaboration and connection, and orphan prompts are the SRS twin of orphan notes. Cornell notes: the cue column is a draft prompt list and the summary is a 'significance' lens. Building a Second Brain: distilled notes supply the material, and prompts add the retention layer BASB itself lacks.

**sources**:
- https://andymatuschak.org/prompts/
- http://augmentingcognition.com/ltm.html
- https://cognitivemedium.com/srs-mathematics
- https://numinous.productions/ttft/
- https://gwern.net/spaced-repetition
- https://notes.andymatuschak.org/z6sX7ZcYdPiya3SzQ5segaq
- https://notes.andymatuschak.org/zKy4FsHTcf8LdkgXkMueeGL
- https://memory-machines.com/report
- https://sc-pan.github.io/pdf/PR_2018.pdf
- https://www.learningscientists.org/blog/2019/6/27-1
- https://forrt.org/flora-replication-atlas/doi/10.1037/a0019902/
- https://www.learningscientists.org/blog/2016/6/2-1
- https://michellemillerphd.substack.com/p/r3-21-january-8-2024-do-students
- https://link.springer.com/10.1007/s10648-015-9309-3

**last_verified**: 2026-11-13. Primary sources read directly: Matuschak 'How to write good prompts', Nielsen 'Augmenting Long-term Memory' (first 100k characters), Nielsen 'srs-mathematics', Matuschak & Nielsen 'transformative tools for thought' (first 100k characters), Gwern 'Spaced Repetition' (both halves), the Memory Machines report and the Pan & Rickard 2018 abstract (PDF). Secondary (blog summaries and search abstracts): Agarwal 2019, Butler 2010 and its replication, Pan et al. 2023, and the van Gog & Sweller / Karpicke & Aue debate.

### Other Info

**uncertain** (left out):
- replication_status
- retention_interval_tested

## Cloze deletion and image occlusion

### Basic Info

**name**: Cloze deletion and image occlusion

**category**: card-design

**origin**: Cloze: Wilson L. Taylor, '"Cloze Procedure": A New Tool for Measuring Readability', Journalism Quarterly 30(4), 415-433 (1953). The name comes from Gestalt 'closure', and it began as a readability test. Adopted for spaced repetition by Piotr Wozniak in SuperMemo: rule 5 'Cloze deletion is easy and effective' and rule 8 'Graphic deletion is as good as cloze deletion' in his 1999 '20 rules'. Cloze is the basis of SuperMemo incremental reading. Image occlusion in Anki went through add-ons: Image Occlusion 2.0 (Tiago Barroso, GitHub tmbb) and Simple Picture Occlusion (Steve AW) led to Image Occlusion Enhanced (Glutanimate). Built into Anki 23.10 (released 2023-11-01), contributed by krmanik with help from Glutanimate, hikaru-y, abdnh and dae.

**one_line**: Cloze deletion blanks out a word or phrase inside a sentence, and image occlusion masks a label or region on a picture. Both turn existing text or diagrams into many fill-in-the-blank cards very quickly.

### Evidence

**key_studies**:
- Hinze, S. R. & Wiley, J. (2011). Testing the limits of testing effects using completion tests. Memory 19(3), 290-304. Fill-in-the-blank practice on prose improved memory for the exact blanks tested at 2-day and 7-day delays, but did not help related, untested information from the same passages. Experiment 3 compared it with whole-paragraph recall. Clozes strengthen only what is blanked.
- Pan, S. C. & Rickard, T. C. (2018). Psychological Bulletin 144(7), 710-756. Meta-analysis of 192 effect sizes and 122 experiments: testing transfers with d = 0.40, but transfer is weakest to untested material seen during study and to rearranged items. This explains why the visible context of a cloze sentence is not learned by reviewing the blank.
- Carpenter, S. K. & Pashler, H. (2007). Testing beyond words: Using tests to enhance visuospatial map learning. Psychonomic Bulletin & Review 14, 474-478. Retrieving one map feature at a time beat restudying, even on a final test that required drawing the whole map. Later work (Rohrer, Taylor & Sholar 2010, JEP:LMC; Carpenter & Kelly 2012) found testing also improved retention and transfer of spatial knowledge. This is the closest lab analogue of image occlusion.
- Matuschak, A. (notes, undated; guide December 2020). 'Cloze deletion prompts seem to produce less understanding than question-answer pairs'. Practitioner observation: after several reviews, cloze answers feel like pattern matching because the extra context gives hints. Clozes are less focused, one-angle, wordy, sometimes ambiguous about the answer's shape, and require little generation effort. He still keeps clozes for lists and sequences ('better than nothing'), and suggests converting clozes to Q&A, reporting promising results with GPT-4.
- Anki Manual (Editing: Cloze Deletion; Image Occlusion) and the Anki 23.10 changelog: the authoritative tool documentation.

**evidence_strength**: Moderate for the general mechanism, weak for cloze vs Q&A, anecdotal for the card formats themselves. Several controlled studies show that retrieving blanked text or map features beats restudy (Hinze & Wiley 2011; Carpenter & Pashler 2007; Rohrer et al. 2010; Carpenter & Kelly 2012). No study was found that compares cloze cards with Q&A cards inside a spaced-repetition system, and the 'cloze = shallower' claim is Matuschak's practitioner experience. No peer-reviewed study of image occlusion as an Anki card format was found; claims in medical-student guides are opinion or marketing. The narrow transfer of fill-in-the-blank retrieval rests on a meta-analysis (Pan & Rickard 2018).

**limitations_and_criticism**:
- Pattern matching: copied cloze sentences carry extra context that hints at the answer, so you learn the sentence's shape, not the idea (Matuschak; Issa Rice's 'permutation trick' page says permutations do not fix this for clozes and suggests converting to Q&A).
- Narrow benefit: only the blank is strengthened (Hinze & Wiley 2011; Pan & Rickard 2018). The visible rest of the sentence is not reliably learned, so one sentence needs several deletions or companion Q&A cards.
- Skipped generation: making a cloze takes little effort, so you lose the benefit of writing your own prompt in your own words (Matuschak; compare Pan et al. 2023 on self-made cards).
- Ambiguity: a blank often has several valid fillers, or the sentence does not show what kind of answer is expected (a number, a name, a mechanism).
- Image occlusion: in 'Hide One, Guess One' the visible neighbouring labels can cue the answer, while 'Hide All, Guess One' is harder but slower. Recognizing a position on a familiar image is not the same as recalling the structure without it. One lab group questions whether visual testing effects are visual or mediated by verbal labels.
- Tool issues: deleting a mask leaves an orphan card (run Tools > Empty Cards). AnkiDroid users have reported blank or missing-image occlusion cards and rendering differences. The Image Occlusion Enhanced add-on is no longer maintained (no update since about 2020-2022), and its support thread points users to the built-in note type.
- Wozniak's 2026 incremental-reading view sees clozes on half-understood phrases as acceptable early, simplified later. Matuschak's view treats them as a fallback. The two schools disagree on how far to rely on clozes.

**evidence_setting_and_comparator**: Lab studies with college students. Hinze & Wiley used prose passages, compared tested items with related untested ones, and used restudy and paragraph recall as comparators. The map studies (Carpenter & Pashler 2007; Rohrer et al. 2010; Carpenter & Kelly 2012) compared testing with restudy. Pan & Rickard 2018 is a meta-analysis against non-testing re-exposure. Practitioner evidence (Matuschak, Wozniak) has no comparator. No study compares cloze with Q&A cards or image occlusion with labelled-diagram Q&A inside an SRS.

### Practice

**how_to_apply**:
- 1. Use cloze for exact wording: closed lists and sequences, quotes, formulas, code syntax, terminology inside a definition, grammar in context. Use Q&A for 'why', 'how' and 'compare' questions.
- 2. Trim the sentence before blanking it. Remove every word that does not help cue the answer (minimum information).
- 3. Use one deletion per card (c1, c2, c3...). Same number = hidden together on one card; different numbers = separate cards. Add a hint with {{c1::answer::hint}} when the expected answer type is unclear.
- 4. For lists, use overlapping clozes (each card shows neighbours as context) and keep the list order stable. Bury siblings so cards from the same sentence do not reveal each other the same day.
- 5. Add a context field or header (the note title or source) so the cloze is unambiguous out of context.
- 6. Image occlusion: use it for anatomy, maps, diagrams, architecture sketches and UI layouts. Choose 'Hide All, Guess One' when labels would cue each other, and group shapes when several regions form one answer. Put an explanation and source in Header or Back Extra.
- 7. When a cloze keeps being answered by pattern matching, convert it to a Q&A prompt; an LLM can draft the conversion, which you then edit.

**concrete_example**: Cloze from the vault's Pomodoro note in Anki syntax: 'The Pomodoro Technique uses {{c1::25::minutes}}-minute focus intervals and {{c2::5}}-minute short breaks; after {{c3::4}} pomodoros you take a longer break.' This makes 3 cards. Each hides one value and shows the rest, so bury siblings. The same in the Obsidian Spaced Repetition plugin: 'The Pomodoro Technique uses ==25==-minute focus intervals...' Each == highlight becomes its own sibling card. Converted to Q&A when the 'why' matters: 'Q: Why does Pomodoro force a break even when you feel productive? A: (my reason from the note).' Image occlusion: paste a diagram, e.g. the vault's Cornell notes page layout or a mind map image. Draw rectangles over its labels (cue column, notes area, summary area), choose 'Hide All, Guess One' and click Add. That gives one card per rectangle, so 3 cards here; Wozniak cites 10-20 for a dense illustration.

**from_own_notes**:
- Highlights are cheap clozes. The Obsidian Spaced Repetition plugin turns ==highlight==, **bold** or {{curly}} text (custom patterns with hints) into sibling cloze cards inside the note. Decks (FSRS-6) uses ==highlight== clozes. Obsidian_to_Anki supports Anki-style and highlight clozes once both CurlyCloze settings are enabled, and Anki Helper converts == markers to {{cN::}}.
- Matuschak's own notes mark clozes with {braces} and end the paragraph with '☉'. His sync identifies the card by the paragraph hash, so editing the paragraph resets its history.
- Images already in the vault: the Decks plugin stores masks as a 'decks-occlusion' code block in the note, with coordinates as percentages. Anki Flashcard Sync stores 'IO:' lines with <!-- MASK: x, y, w, h --> comments and pushes them to Anki through AnkiConnect. Talking Cards and Flashcard Studio also create occlusions. With Anki's native image occlusion the image is copied into Anki's media folder and leaves the vault.
- Risk: Building a Second Brain-style progressive summarization produces many highlights, and turning them all into clozes gives card bloat and shallow cards. Highlight first, then card only the highlights worth 5-10 minutes of lifetime review, and rewrite conceptual ones as Q&A in your own words (Zettelkasten principle).

**time_cost**: Authoring is the fastest of any format: seconds per cloze, about 9 clozes from one paragraph, and 10-20 occlusions from one image (Wozniak). Reviews take a similar time to Q&A (about 8 s per review, Nielsen 2018), but long cloze sentences and dense occlusion images take longer to read. The real cost is volume: cheap creation makes it easy to add more cards than 15-20 min/day of review can sustain.

**knowledge_type_fit**: Cloze fits closed lists, sequences, quotes, exact terminology, formulas, code syntax and language patterns in context. Image occlusion fits anatomy, geography and maps, labelled diagrams, charts, circuit and architecture diagrams, and UI layouts. Poor fit for both: explanations and causal 'why' knowledge, comparisons between concepts, open lists, and images without discrete labelled parts.

**failure_modes**:
- Pattern-matching the sentence instead of recalling the idea.
- Giveaway context: the remaining words reveal the blank.
- Ambiguous blanks with several valid answers.
- Whole-paragraph clozes that break the minimum information principle.
- Sibling cards from one sentence reviewed the same day and leaking answers (not buried).
- Deleting trivial words such as articles or the obvious noun.
- Copying text you do not understand, which skips the generation step.
- Card bloat from 'highlight everything'.
- Image occlusion in 'Hide One' mode, where neighbouring labels cue the answer.
- Masks misaligned on mobile or when zoomed.
- Orphan cards left after deleting shapes.
- Answering an occlusion by recognizing the image's position instead of recalling the name.

### Tools

**obsidian_integration**: Cloze: Obsidian Spaced Repetition plugin (default '==' delimiter, also bold and curly braces, custom patterns, ^[hint] hints, simplified, classic and overlapping cloze types, no image occlusion). Decks plugin (FSRS-6, ==cloze== highlights, image occlusion via 'decks-occlusion' code blocks, review state in SQLite, AGPL-3.0). Obsidian_to_Anki (CurlyCloze and highlight-cloze settings). Anki Helper (converts == to {{cN::}}). Anki Flashcard Sync (native Anki clozes plus IO lines with MASK comments, via AnkiConnect). Talking Cards and Flashcard Studio (image occlusion boxes).

**status_2026**: Native image occlusion has been standard in Anki since 23.10 (2023-11-01), effectively replacing the Image Occlusion Enhanced add-on, which is unmaintained. Nested cloze is supported (since 2.1.56, limited to 3 levels in 24.11). AnkiDroid has supported image occlusion since 2.17, with some rendering bugs reported. The Obsidian ecosystem now has several image-occlusion implementations (Decks was updated in Nov 2026). On the design side, Matuschak's view (cloze as fallback, convert to Q&A, LLM conversion) and Wozniak's 2026 incremental-reading view (clozes in context, simplified progressively) coexist. The 2026 Memory Machines report uses only Q&A prompts.

**automation_interface**: AnkiConnect (add-on 2055492159, local HTTP on 127.0.0.1:8765): addNote with the 'Cloze' note type and a Text field containing {{c1::...}} creates cloze cards from scripts or agents. Image occlusion notes can be created through AnkiConnect by tools such as the Anki Flashcard Sync plugin, which auto-creates an IO note type. Anki MCP servers built on AnkiConnect can do the same. Scheduling libraries (ts-fsrs, py-fsrs) are format-agnostic: a cloze sibling is just another card.

**maintenance_signals**: Anki is actively maintained by Ankitects. Image occlusion was contributed by krmanik, who also built a standalone AnkiDroid occlusion app. Image Occlusion Enhanced (Glutanimate) has had no meaningful updates for years. Obsidian: Decks (dscherdi) has 171 releases and was updated days before Nov 2026. Obsidian Spaced Repetition (st3v3nmw) has about 2.6k stars. Anki Flashcard Sync (joey) is small (203 downloads, v1.1.3).

### Links

**relation_to_vault_notes**: Learn Like a Pro (Oakley & Schewe): recall beats rereading, but a cloze whose context gives the answer away creates the illusion of competence the book warns about. Zettelkasten / How to Take Smart Notes (Ahrens): writing in your own words argues for converting copied clozes into self-written Q&A. Cornell notes: the cue column suits Q&A, while a diagram in the notes area suits image occlusion. Mind map and How to create mind map: mind maps are natural image-occlusion sources, and Wozniak's rule 6 (use imagery) cites mind maps. Building a Second Brain: progressive-summarization highlights are cloze candidates, not automatic cards.

**sources**:
- https://docs.ankiweb.net/editing.html
- https://changes.ankiweb.net/changes/23.10.html
- https://www.supermemo.com/en/blog/twenty-rules-of-formulating-knowledge
- https://supermemo.guru/wiki/20_rules_of_knowledge_formulation
- https://notes.andymatuschak.org/zPJt42JTcoAPTTTa2vdDonV
- https://andymatuschak.org/prompts/
- https://notes.andymatuschak.org/z6sX7ZcYdPiya3SzQ5segaq
- https://doi.org/10.1080/09658211.2011.560121
- https://sc-pan.github.io/pdf/PR_2018.pdf
- https://escholarship.org/uc/item/6hp881r6
- https://notes.andymatuschak.org/z3XxxRTPi588HtWJq1hFioP
- https://github.com/Glutanimate/image-occlusion-2-enhanced
- https://forums.ankiweb.net/t/image-occlusion-enhanced-official-support-thread/924
- https://github.com/krmanik/Anki-Occlusion
- https://forums.ankiweb.net/t/image-occlusion-ankidroid-v2-17/43841
- https://www.stephenmwangi.com/obsidian-spaced-repetition/flashcards/cloze-cards/
- https://github.com/st3v3nmw/obsidian-spaced-repetition
- https://community.obsidian.md/plugins/decks
- https://www.obsidianstats.com/plugins/anki-cloze-sync
- https://github.com/Pseudonium/Obsidian_to_Anki
- https://wiki.issarice.com/wiki/Permutation_trick
- https://www.screensnap.pro/blog/anki-image-occlusion

**last_verified**: 2026-11-13. Primary sources read directly: Anki Manual (editing page), Anki 23.10 changelog, the Wozniak 20-rules article, the SuperMemo Guru page, Matuschak's cloze note and prompt guide, the Obsidian Spaced Repetition cloze docs, the Decks and Anki Flashcard Sync plugin pages, and the Pan & Rickard abstract. Secondary (search abstracts and citing papers): Hinze & Wiley 2011, Carpenter & Pashler 2007 and follow-ups, the Taylor 1953 cloze origin, add-on lineage (forum posts), and AnkiDroid image-occlusion timing (forum and blog).

### Other Info

**uncertain** (left out):
- availability_and_price
- data_ownership_and_format
- numbers_or_effect_sizes
- replication_status
- retention_interval_tested

## Mnemonic medium, salience prompts and 'spaced everything'

### Basic Info

**name**: Mnemonic medium, salience prompts and 'spaced everything'

**category**: card-design

**one_line**: Instead of filling a separate flashcard app, the mnemonic medium puts expert-written review prompts inside the text, so reading and spaced review become one thing. Salience prompts and 'spaced everything' take the SRS scheduler beyond memorising facts and use it to bring back ideas, half-formed writing, reading lists and behaviours. The 'situated idea' swaps the static card for a highlight plus its context, and new prompts are generated from that over time.

### Evidence

**key_studies**:
- Matuschak & Nielsen (Oct 2019), 'How can we develop transformative tools for thought?' (numinous.productions/ttft): Quantum Country's intro essay embeds 112 prompts. Six months after release, 195 users had shown at least a month of retention on 80% or more of the cards. Getting to the sixth repetition took about 95 minutes of review in total, for an essay that takes about 4 hours to read, and gave about 54 days of demonstrated retention per question. An informal 2-week delay experiment on 8 cards: the delayed-review group (n=25) fell from 91% to 87% accuracy, while the regular-review group (n=16) rose from 89% to 96%.
- Matuschak, Quantum Country working notes (2019-2023, notes.andymatuschak.org): for the median reader, demonstrated retention was about 8 days after the 1st repetition and about 150 days after the 5th. Once readers had shown 5-day retention they rarely forgot, with median accuracy around 95% from then on. In the 2020-01 RCT, a 9-question review set was withheld: most experimental readers forgot 3 or more of the 9 answers and about a third forgot 5 or more. A later reanalysis suggests this mostly measured a practice effect rather than forgetting. Matuschak's own grading: strong evidence that doing the reviews gives reliable retention, emerging evidence that readers would retain much less without reviews, moderate evidence that the time cost is low, and no evidence yet that it generalises across domains.
- Matuschak, 2022-10-14 Patreon letter 'Lessons from summer 2022's mnemonic medium prototype': Orbit prompts sat in the margin of 'Introduction to Modern Statistics' and 'Shape Up'. Across 20 live observation sessions plus diaries, the medium worked well for the technical textbook and less well for the informal, self-help-like book. Readers wanted a lightweight 'save without committing to review' action. Always-visible prompts got read as summaries, so collapsed prompts were recommended as the default.
- Background science: the adjunct-question literature. Hamaker (1986, Review of Educational Research 56(2)) found that questions embedded in text strongly help on repeated test items and help less on related items. Matuschak's Nov 2024 situated-idea essay reports that LLM-generated tasks need filtering. Its quality classifier was trained on several hundred hand-built situated ideas expanded to more than 2,000 manually scored samples, and it generalised poorly to new texts. Salience prompts have no direct study. Matuschak links them to prospective-memory and spontaneous-retrieval research (e.g. McDaniel 2000).

**evidence_strength**: Weak to moderate for the mnemonic medium itself. There is one large but self-selected observational dataset from Quantum Country plus small informal in-product experiments, none of it peer-reviewed, and Matuschak asks readers not to cite it as established. Salience prompts, 'spaced everything' and situated ideas are anecdotal: they are design proposals and practitioner use with no controlled studies. The mechanisms they rely on are strong: retrieval practice, spacing, and adjunct questions embedded in text.

**numbers_or_effect_sizes**: Quantum Country (Matuschak & Nielsen 2019): 112 embedded prompts. 195 users showed at least 1 month of retention on 80% or more of cards after 6 months. About 95 minutes of total review to reach the 6th repetition, against about 4 hours of reading, which is under 50% overhead. Demonstrated retention was about 54 days per question at the 6th repetition. Schedule: 5 days, 2 weeks, 1 month, and so on, reaching about 4 months after five successful reviews; a lapse drops the card one level. Informal delay experiment (8 cards): delayed review 91% to 87% (n=25) vs regular review 89% to 96% (n=16); 40% of delayed users got worse vs 0% of regular users. Working notes: median demonstrated retention 7/8/9 days (25th/50th/75th percentile) after repetition 1 and 103/150/169 days after repetition 5. The 2019H2 median reader reached 95%+ 2-week retention by session 9. 2020-01 RCT: most readers without the withheld review forgot 3 or more of 9 answers and about a third forgot 5 or more (likely a practice-effect confound). Reading-time overhead is estimated at 35-50%. Nielsen (2018): about 8 s per review and 4-7 minutes of lifetime review per card over 20 years.

**limitations_and_criticism**: 1) Selection and survivorship: the analyses include only readers who answered 80% or more of prompts before their first review session. 2) Recall accuracy in review is a misleading proxy, as Matuschak himself says. Seeing the same wording every time can produce pattern-matched recall that does not transfer. 3) Prompts overlapped, which muddied the informal experiment, and one early claim (that trivial early questions improve attention) was retracted in December 2019 after a data-analysis error. 4) Readers did not write their own prompts, so they lose the generation benefit (see Pan et al. 2023). Prompts written by an expert author partly make up for this. 5) Scope: the 2022 prototype worked for technical textbooks and gave little benefit for informal or self-help books. 6) Salience prompts: Matuschak notes that SRS scheduling is 'probably all wrong' for them, that nobody knows whether retrieval practice makes spontaneous retrieval more likely, and that there is no method yet to measure them. 7) 'Spaced everything' is mostly a conceptual sketch; few of its examples are implemented. 8) Situated ideas depend on LLM generation. Models are poor at targeting (deciding what the reader cares about in a highlight), and the 2026 Memory Machines report finds about 36% of GPT-5.2 prompts unusable. 9) Common misreading: Quantum Country shows that a well-authored embedded deck retains well. It does not show that the medium beats self-made Anki cards, because that comparison was never run.

**evidence_setting_and_comparator**: Field-observational: real online Quantum Country readers, using logged review data. The informal in-product RCTs compare reviewed prompts against prompts whose review was withheld or delayed. Nothing was compared with re-reading, with self-made cards, or with other schedulers such as SM-2. The 2022 Orbit prototype gave qualitative usability observations only (20 live sessions plus diaries, no control group). Salience prompts and spaced everything: no empirical comparator. Situated ideas: offline evaluation of LLM-generated tasks against human quality labels.

**retention_interval_tested**: Quantum Country review intervals start at 5 days and expand through 2 weeks and 1 month to about 4 months after five successful reviews. Demonstrated retention reaches about 150 days (median) after the 5th repetition. The 2020-01 efficacy study compared 5-day and 1-month conditions. The 2019 informal delay experiment ran about 2 weeks. No retention test exists for salience prompts or spaced everything.

### Practice

**how_to_apply**: 1) Write prompts in place while you read or take notes, directly under the passage they test, so each card keeps its context and its link to the source. That is the mnemonic-medium idea applied to your own notes. 2) Write at least 2-3 prompts per important idea and mix recall prompts with simple application prompts. Nielsen's rule: a lone 'orphan' card goes stale. 3) Salience prompts: put a situation on the front ('You are about to... what do you check?') and the idea or heuristic on the back. Grade them on whether the idea feels available and useful, not on word-perfect recall, and treat their intervals as rough guesses. 4) Spaced everything: put non-memory items on a scheduled queue, such as inklings, draft notes, reading-list items, and periodic reflections. At each review, write something or decide something, then mark the item 'fruitful' (bring it back soon) or 'unfruitful' (push it far out). Ignored items should also get longer intervals. 5) Give the system a fixed daily budget (e.g. 10 minutes) and let the scheduler pick the items. That is the 'cron for your mind' idea. 6) Situated-idea approach with current tools: highlight a passage, add a one-line comment saying why it matters to you, have an LLM propose candidate prompts, and keep only the good ones (see the LLM-generated flashcards item).

**concrete_example**: From a vault note on Zettelkasten (Ahrens), passage: 'A permanent note must be understandable without its source.' (a) Embedded recall prompt, Obsidian Spaced Repetition plugin single-line syntax: 'What test must a permanent note pass before it goes into the slip-box?::It must make sense on its own, without the book or the original context.' (b) Salience prompt: 'You are about to paste a book highlight into your vault. What do you ask first?::Will this make sense to me in a year without the book? If not, rewrite it in my own words and link it to an existing note.' (c) Spaced-writing inkling: a note 'Why my Cornell summaries go unread' tagged #review goes into the note-review queue. On review day you write two sentences. Fruitful means it comes back in a few days; unfruitful means it comes back in a month or more. (d) Reference schedule from Quantum Country: first review at 5 days, then 2 weeks, then 1 month, reaching about 4 months after five successful reviews; a failed review drops one level.

**from_own_notes**: Your vault can be your own mnemonic medium. 1) Keep cards inside the source note (Obsidian Spaced Repetition plugin: 'Question::Answer', multi-line '?' separator, or ==cloze==), so the note stays the source of truth and every card sits next to its context. 2) Cornell notes already have a cue column, which is a set of embedded prompts, and a summary area that works like a salience prompt. Turn the cues into cards. 3) Zettelkasten permanent notes are atomic, so each one makes a natural situated idea. Use note-level review (#review queue or the Spaced Everything plugin) to resurface notes for linking and rewriting, not for recall. 4) Book notes: highlight plus a 'why I care' comment is exactly Matuschak's situated idea. Generate or write prompts from those comments, not from the raw highlight. 5) Inklings and half-finished drafts belong in a spaced writing queue, not in the flashcard deck.

**knowledge_type_fit**: Fits: technical and explanatory texts (quantum computing, statistics textbooks), declarative knowledge, and simple application of concepts. Salience prompts fit principles, heuristics and 'when X, think Y' ideas you want to come to mind in context. Spaced everything fits ideas in progress, writing, reading triage, reflection and relationship or habit prompts. Fits less: informal, self-help or opinion books (the 2022 prototype found little benefit with Shape Up), long narrative, and deep conceptual understanding that needs varied rather than fixed wording. Plain vocabulary and isolated facts do not need the medium; ordinary cards work. Salience and writing prompts should not be graded as rote recall.

**failure_modes**: 1) Pattern-matching: reviewing the same wording builds recognition of the card, not of the idea (Matuschak's brittle-recall critique). 2) Prompts get read as summaries before the passage, or every prompt gets read compulsively; collapse them by default. 3) Saving everything: all-or-nothing saving turns every highlight into a card and builds review debt. 4) Grading salience prompts as recall: they become rote recitation and the scheduler misfires. 5) A spaced-everything queue that is never pruned becomes a guilt pile; items marked unfruitful should drift far out or be deleted. 6) Orphan prompts with no link back to a note or project go stale. 7) Over-trusting high in-review accuracy as proof of real-world recall. 8) With LLM-generated situated prompts: off-target tasks and ambiguous construction.

### Tools

**availability_and_price**: Quantum Country: free at quantum.country (live as of 2026-11-13). Orbit: free hosted service at withorbit.com supported by Patreon; code on GitHub. Libraries are Apache-2.0; the app and backend are AGPL-3.0-or-later or Business Source License 1.1, converting to Apache-2.0 after 3 years; official binaries are Apache-2.0. Obsidian options, all free community plugins: Spaced Repetition (st3v3nmw, MIT; flashcards plus #review note queue), Spaced Everything (Zach Mueller; spaced writing practice queue), Incremental Writing (bjsi, MIT), and Incremental Reading Toolkit. SuperMemo (incremental reading) is commercial Windows software.

**status_2026**: Quantum Country and withorbit.com are still online (HTTP 200 on 2026-11-13). Orbit is a research vehicle: the master branch was last committed on 2024-10-14 (Markdown multiblock parsing), and later pushes are dependency-bot branches. Matuschak's focus has moved to 'an augmented book which actively helps people understand, remember, and use what they read' and to LLM-generated prompts. The line runs from the situated-idea essay (Nov 2024) to the 'Memory Machines' report with Ozzie Kirkby (2026), whose open model arena was updated through July 2026. Spaced Everything for Obsidian is at v1.4.0, about 3.7k downloads. Incremental Writing is stale at v0.4.1.

**automation_interface**: Orbit: an embeddable web component (loaded from js.withorbit.com) that adds review areas to any web page, plus the note-sync package and API/iframe task sources described in the README. Obsidian plugins expose no scripting API, but the scheduling data sits in plain Markdown and frontmatter, so scripts and agents can read and write it. Spaced Everything supports a custom JavaScript scheduling script. For a custom 'spaced everything' queue of microtasks, a scheduler library (ts-fsrs, py-fsrs) or Anki via AnkiConnect or MCP is the practical bridge.

**maintenance_signals**: andymatuschak/orbit: 1,839 stars, 66 forks, master last committed 2024-10-14. Direction is set by Matuschak and close collaborators, a contributor agreement is required, and the README says it does not aim to be a typical open-source project. laddermedia/memory-machines (the successor LLM-prompt research): Apache-2.0, 25 stars, last commit 2026-07-01. bjsi/incremental-writing: 209 stars, last push 2022-08-10. Spaced Everything (Obsidian): v1.4.0, about 3,657 downloads (obsidianstats). st3v3nmw/obsidian-spaced-repetition: 2,618 stars, last push 2026-11-01.

### Links

**relation_to_vault_notes**: Learn Like a Pro (Oakley & Schewe): the mnemonic medium puts its core advice (retrieval practice plus spacing, not rereading) directly into the reading flow. Zettelkasten / How to Take Smart Notes (Ahrens): Ahrens favours elaboration and linking over memorisation. Salience prompts and spaced writing practice connect the two by resurfacing permanent notes so they get used and linked, not just recalled. Matuschak's evergreen notes are the direct counterpart. Cornell notes: the cue column is a set of embedded prompts and the summary works like a salience prompt. Building a Second Brain (Forte): 'spaced everything' puts BASB's resurfacing of notes and intermediate packets on a schedule instead of leaving it to chance.

**sources**:
- https://numinous.productions/ttft/
- https://quantum.country/
- https://notes.andymatuschak.org/z3kzMVAPanLdwuE4MQYt2ZW3p67Ce57ZVXjwZ
- https://notes.andymatuschak.org/z93QR51f6HAUPLVDxE6KT1T
- https://notes.andymatuschak.org/z2Rv4RAjXUrwa3fMYn9Q1iR
- https://notes.andymatuschak.org/z2HZewx7paBEVgthTnyG8WA
- https://notes.andymatuschak.org/zqetsQERteJhyPitmRoaeE
- https://notes.andymatuschak.org/zmfaivPvmpokH8qe6TtxaX
- https://notes.andymatuschak.org/zFcmVJAwG2YaEvJVxDM6Emc
- https://notes.andymatuschak.org/zF8pCkzLVarNsaFyBxF9Aib
- https://notes.andymatuschak.org/zB92WZZ5baBHKZPPbWMbYEv
- https://notes.andymatuschak.org/Unusual_applications_of_spaced_repetition_memory_systems
- https://notes.andymatuschak.org/zSK4LyrCbG9zDrdCWmcovUW
- https://andymatuschak.org/situated-idea-memory-system
- https://andymatuschak.org
- https://github.com/andymatuschak/orbit
- https://withorbit.com/
- http://augmentingcognition.com/ltm.html
- https://memory-machines.com/report
- https://boch.sciencegate.app/works/W4242603802
- https://www.obsidianstats.com/plugins/spaced-everything
- https://community.obsidian.md/plugins/obsidian-incremental-writing
- https://github.com/st3v3nmw/obsidian-spaced-repetition
- https://vihaan3.github.io/knowledge-garden/Tools-for-Thought/Spaced-everything

**last_verified**: 2026-11-13. Key facts come from primary sources: the Matuschak & Nielsen 2019 essay, Matuschak's working notes and essays, the Orbit README and GitHub API metadata, and live HTTP checks of quantum.country and withorbit.com. Obsidian plugin download counts come from obsidianstats.com (secondary). The Hamaker 1986 summary comes from an abstract via a secondary index. Matuschak marks the Quantum Country figures as preliminary.

### Other Info

**uncertain** (left out):
- data_ownership_and_format
- obsidian_integration
- origin
- replication_status
- time_cost

## Anki

### Basic Info

**name**: Anki

**category**: tool

**origin**: Created by Damien Elmes (Ankitects Pty Ltd, Australia); first released in 2006. AnkiDroid is a separate volunteer open-source Android project (since about 2009). AnkiMobile (iOS) and the AnkiWeb sync service are Ankitects products. On 2 Feb 2026 Elmes announced ('Anki's Growing Up') a gradual transfer of business operations and open-source stewardship to AnkiHub, the company behind the collaborative AnKing medical decks. He stays involved 'at a more sustainable level'. AnkiDroid is explicitly not part of the agreement.

**one_line**: The de-facto standard free, open-source flashcard app. Desktop and AnkiDroid are free, AnkiMobile on iOS is paid. It schedules reviews with FSRS or a legacy SM-2 variant and syncs through the free AnkiWeb service.

### Evidence

**key_studies**:
- open-spaced-repetition srs-benchmark (Jarrett Ye and contributors, GitHub, continuously updated 2023-2026): about 10,000 real Anki collections and ~350M evaluation reviews (~727M reviews in total). FSRS-6, the version shipped in Anki since 25.07, predicts recall best of the FSRS versions Anki ships. Benchmark for the scheduler, not a learning-outcome study.
- Ye, Su & Cao 2022, KDD 'A Stochastic Shortest Path Algorithm for Optimizing Spaced Repetition Scheduling': the DSR-model and optimisation work behind FSRS (MaiMemo data).
- Systematic review of Anki in medical education, Medical Science Educator 2026 (Springer, doi 10.1007/s40670-026-02643-5): 11 studies (2015-2025), ~1,135 students. Anki use was consistently associated with higher USMLE Step 1 / foundational exam scores, course-exam results were mixed, and the evidence is 'largely observational'. Only the abstract and secondary summaries were checked (paywalled).
- Deng, Gluckstein & Larsen 2015, Perspectives on Medical Education: student-directed Anki retrieval practice predicted Step 1 score (about +1 point per ~1,700 unique cards). Wothe et al. 2023 (University of Minnesota): daily Anki users had a median Step 1 of 238 vs 233.5 for others, with no difference on Step 2 CK (250 vs 251).
- Official documentation (docs.ankiweb.net): since 23.10 Anki has two schedulers, the legacy SM-2 variant (4 buttons, ease factor) and FSRS (fits parameters to your review history and targets a chosen desired retention).

**evidence_strength**: Moderate overall, with a split verdict. (1) The underlying principles (spacing, retrieval practice) are strong science; see the science items. (2) FSRS's predictive accuracy is well benchmarked on large open data, which is strong for prediction accuracy. But the benchmark is run by the FSRS authors and measures prediction (log loss), not learning gains. (3) Evidence that using Anki causes better outcomes is weak to moderate. It comes from observational, mostly self-reported, self-selected medical-student samples with no randomised trial of Anki vs no Anki.

**limitations_and_criticism**: Steep learning curve and a dated UI. Borretti 2025 cites a poor interface, awkward workflows and unreliable plugins, while saying the scheduling works well. The add-on ecosystem is fragile: add-ons break after updates, and the October 2026 AnkiConnect rewrite broke some integrations on Windows. Shared decks were a real attack vector in 2026. Anki 26.09 fixed notes reading local files from the editor, plus an unvalidated 'Open image' action. 26.09.2 fixed deck-description links manipulating the page. 26.09.4 (4 Nov 2026) fixed iframes in the editor running arbitrary code (GHSA-j9v5-m549-cg6c) and a macOS 'Show in Folder' command injection via crafted image filenames (GHSA-gfvm-4968-jp9m), and it distrusts compromised eMudhra CA certificates. An earlier advisory, CVE-2026-58266, covered iframe-based local-file exfiltration, fixed in 25.09.4. Governance: critics on the forum asked why stewardship went to a for-profit company and not to an independent foundation. A formal governance model was promised 'in the coming weeks' in Feb 2026, and no published model was found as of Nov 2026. Pricing: iOS users alone pay (AnkiMobile, USD 24.99 in the US), which draws recurring complaints. Outcome evidence: the medical-education associations are confounded by motivation and by premade decks such as AnKing. Premade decks also skip the generation step of writing your own cards. The legacy SM-2 scheduler suffers 'ease hell'. FSRS still mis-schedules if grades are misused.

**evidence_setting_and_comparator**: Scheduler benchmark: offline simulation and prediction on real Anki review logs (anki-revlogs-10k), compared against SM-2 and other memory models. Medical education: field-observational, cross-sectional or retrospective surveys, comparing Anki non-users or lower-volume users with heavier users. No lab or classroom RCT compares Anki with another study method.

**retention_interval_tested**: n/a for the tool. The benchmark predicts recall at each real next-review interval, from minutes to years. Medical-education studies measure board exams taken months to about two years after Anki use.

**replication_status**: The benchmark is open: code plus the anki-revlogs-10k dataset on Hugging Face, so anyone can re-run it. FSRS has also been re-implemented independently in RemNote, Mochi, hashcards, Obsidian plugins and the ts-fsrs, py-fsrs and fsrs-rs libraries. The Step 1 association has appeared across several schools, but not always: a national survey of 560 students found no correlation between third-party resource use and Step 1. There is no randomised replication.

### Practice

**how_to_apply**: 1) Install desktop Anki 26.09.4 or later from apps.ankiweb.net. That version is required for the shared-deck security fixes, and an older system may also need OS updates. Add AnkiDroid (Android, free) or AnkiMobile (iOS, paid), and create a free AnkiWeb account for sync. 2) In Deck Options > FSRS, enable FSRS for the preset and keep desired retention at 0.90 to start. After about 1,000 reviews, press 'Optimize' (repeat every month or so) and use the simulator or 'Help Me Decide' to see the workload. 3) Keep learning steps short and under one day (for example 10m). 4) Start with 10-20 new cards per day; Anki's defaults are 20 new and 200 maximum reviews per day. 5) Grade honestly. Use 'Again' when you forgot. Use 'Hard' only for a correct but effortful recall, because Hard is a pass. Use 'Good' for normal recall. 6) Use the note types that fit: Basic, Basic (and reversed), Cloze, and the built-in Image Occlusion (since 23.10). Add a 'Source' field that links back to the note. 7) Turn on Easy Days or the load balancer (24.11+) to smooth daily load. 8) Import shared decks only from trusted sources and keep Anki updated. 9) Rely on the automatic backups, and periodically export a .colpkg.

**from_own_notes**: Make Markdown the source of truth and treat Anki as the review engine. Plugins such as Yanki, Obsidian_to_Anki and Anki Exporter push cards from Obsidian into Anki through AnkiConnect. Card content then lives in the note, and review history lives in Anki. Practical rules: (a) Write cards only for the claims in a note that you want to recall without looking. That is typically 1-3 cards per Zettelkasten permanent note and 3-5 per book chapter. (b) Turn Cornell cue-column questions directly into Basic cards and summary sentences into clozes. (c) Add a back-link on every card: an obsidian:// URI, or Yanki's automatic link conversion, so a failed card leads back to its context. (d) Treat sync as one-way. Edit in Obsidian, never in Anki, or the next sync will overwrite or duplicate the card. Do not delete the IDs the plugins write back: Yanki stores a noteId in frontmatter, and Obsidian_to_Anki writes an '<!--ID: ...-->' comment. (e) AnkiConnect needs Anki desktop running, so card creation happens on the desktop. Review then happens anywhere via AnkiWeb sync.

**knowledge_type_fit**: Strong fit: discrete facts, vocabulary, definitions, formulas, names and dates, anatomy and diagrams (image occlusion), commands, shortcuts, API names, and short procedural steps. Works with care: concepts and principles, if broken into several atomic prompts that ask for explanations, examples and contrasts (Matuschak). Poor fit: whole procedures or skills that need practice, problem solving, judgement, long lists without cloze decomposition, and ideas you want to develop rather than memorise, which belong in the Zettelkasten.

**failure_modes**: Review debt: skipping days creates a backlog that discourages you further. Too many new cards per day. Premade decks memorised without understanding, which skips the generation step. Pattern-matching the card wording instead of recalling the idea. Leeches: cards that keep failing; the default threshold is 8 lapses, after which Anki tags or suspends the card. Pressing 'Hard' as if it were a fail, which is a pass in both schedulers and inflates intervals. 'Ease hell' under legacy SM-2, where ease sinks toward 130%. Interference between similar cards. Orphaned cards when the source note changes and sync is one-way. Duplicate cards when plugin IDs are deleted. Add-on breakage after Anki or AnkiConnect updates. Running an outdated version and importing untrusted shared decks, which was a code-execution risk before 26.09.4.

### Tools

**obsidian_integration**: There is no official integration; everything goes through AnkiConnect. (1) Obsidian_to_Anki (also listed as 'Export to Anki'; Pseudonium / ObsidianToAnki org; GPL-3.0; ~135k downloads; v3.6.0, last updated about 3 years ago). It uses START/END or inline syntax plus custom regex, and writes card IDs back into the note. (2) Yanki (kitschpatrol; MIT). One note becomes one card, folders become decks, and '---' separates front and back. It writes the Anki noteId to frontmatter and converts wikilinks to obsidian:// links. It needs Anki 26.08+ and AnkiConnect 26.10.14.0+. (3) Anki Exporter and similar smaller plugins. In the reverse direction, the Decks Obsidian plugin can import an Anki .apkg, including review history, into Markdown decks.

**status_2026**: Actively developed. Since 2023: FSRS and built-in image occlusion arrived in 23.10. 24.11 brought FSRS-5, Easy Days and the load balancer. 25.07 brought FSRS-6 and a uv-based launcher. 2026: 26.05 was the first stable release from the consolidated AnkiHub-era team; it replaced the 25.07 launcher with a Briefcase-packaged installer and stayed on FSRS-6. 26.08 / 26.08.1 followed. 26.09 (14 Sep 2026) brought shared-deck security fixes, removed the legacy anki.importing/anki.exporting modules, and moved the FSRS crate to 6.6.2. Then 26.09.2 (15 Sep), 26.09.3 (23 Sep) and 26.09.4 (4 Nov 2026), the current 'Latest', with important security fixes. 26.11 beta 1 (12 Nov 2026) adds a {{type:ci:}} case-insensitive type-answer filter, numeric field range search and a fix for Windows Smart App Control blocking. AnkiDroid 2.25 (28 Sep 2026) brings edge-to-edge UI, an E-ink theme, browser find-and-replace and the Anki 26.05 backend, followed by patches 2.25.1-2.25.3. Stewardship: AnkiHub since the 2 Feb 2026 announcement. The June 2026 team update reported unified documentation (temporary Mintlify site), a refreshed icon and logo, and work on add-on discovery. A built-in REST API has been requested, but nothing is committed.

**data_ownership_and_format**: Local-first. The collection is a SQLite database (collection.anki2 / collection.anki21b) plus a media folder in the profile directory, with automatic backups. Sync goes through AnkiWeb (proprietary service) or a self-hosted sync server. Export formats: .apkg (deck, optionally with scheduling and media), .colpkg (whole collection) and plain text/CSV notes. Import accepts CSV, including a note-type column (26.05). The binary DB is not git-friendly. With an Obsidian-to-Anki pipeline, card content stays in Markdown (the source of truth), while review history and FSRS parameters stay in Anki. The full review log (revlog) is yours and readable, which is what FSRS optimises on.

### Links

**relation_to_vault_notes**: Learn Like a Pro (Oakley & Schewe) recommends spaced repetition and retrieval practice, and Anki is the canonical tool for doing both. Zettelkasten / How to Take Smart Notes (Ahrens) favours elaboration and linking over rote memorisation. Anki should therefore hold only the facts that support thinking, with each card pointing back to its permanent note, not replacing it. Cornell notes: the cue column is already a question list that maps one-to-one to Basic cards. Building a Second Brain (Forte) externalises memory so you don't need to remember everything. Anki is the complement: it deliberately internalises a small, chosen subset, for example layer-4 highlights from progressive summarisation. Obsidian (vault tool) connects to Anki through AnkiConnect plugins.

**sources**:
- https://github.com/ankitects/anki/releases
- https://apps.ankiweb.net/
- https://forums.ankiweb.net/t/ankis-growing-up/68610
- https://forums.ankiweb.net/t/updates-from-the-anki-team-june-2026/70120
- https://forums.ankiweb.net/t/anki-26-09-release/71024
- https://forums.ankiweb.net/t/anki-26-09-2-release/71062
- https://forums.ankiweb.net/t/ankidroid-2-25-changelog/71237
- https://forums.ankiweb.net/t/anki-connect-new-26-10-rewrite-errno-22-on-windows-for-learning-cards-in-filtered-decks-breaks-getdecks-cardsinfo/71419
- https://forums.ankiweb.net/t/tsunagi-modern-ankiconnect-alternative/71411
- https://forums.ankiweb.net/t/built-in-rest-api-for-anki-clients/66425
- https://forums.ankiweb.net/t/i-do-not-like-your-ios-pricing-strategy-and-i-do-not-accept-any-excuse/71040
- https://docs.ankiweb.net/faqs/what-spaced-repetition-algorithm.md
- https://docs.ankiweb.net/faqs/can-i-use-anki-in-a-company-or-school
- https://newreleases.io/project/github/ankitects/anki/release/25.07
- https://newreleases.io/project/github/ankitects/anki/release/24.11
- https://github.com/ankitects/anki
- https://github.com/open-spaced-repetition/srs-benchmark
- https://link.springer.com/article/10.1007/s40670-026-02643-5
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10176558
- https://ubuntu.com/security/CVE-2026-58266
- https://ankiweb.net/shared/info/2055492159
- https://github.com/kitschpatrol/yanki-obsidian
- https://community.obsidian.md/plugins/obsidian-to-anki-plugin
- https://mcpservers.org/en/servers/nailuoGG/anki-mcp-server
- https://borretti.me/article/hashcards-plain-text-spaced-repetition
- https://www.ankihub.net/faq
- https://apppricinglab.com/app/apple/373493387
- https://appgoblin.info/apps/com.ichi2.anki

**last_verified**: 2026-11-13. Primary sources: the GitHub releases page (26.09.4 as Latest on 4 Nov 2026, 26.11b1 on 12 Nov 2026, with security details), apps.ankiweb.net (current download 26.09.4), the official forum posts ('Anki's Growing Up' of 2 Feb 2026, the June 2026 team update, the AnkiDroid 2.25 changelog, the AnkiConnect rewrite bug report), the srs-benchmark README and the Anki docs. Secondary sources: the AnkiMobile price (third-party price trackers plus a forum thread), AnkiDroid install counts, the 99.6% FSRS-vs-SM-2 figure, details of the 2026 systematic review (paywalled; summary only), the AnkiHub price and the AnkiConnect maintainer.

### Other Info

**uncertain** (left out):
- automation_interface
- availability_and_price
- concrete_example
- maintenance_signals
- numbers_or_effect_sizes
- time_cost

## Flashcards inside Obsidian and plain-text SRS

### Basic Info

**name**: Flashcards inside Obsidian and plain-text SRS

**category**: tool

**one_line**: Ways to keep flashcards in your own Markdown notes. You can review them inside Obsidian (Spaced Repetition plugin, Decks), in a standalone plain-text SRS (hashcards), or keep Markdown as the source and push cards to Anki (Obsidian_to_Anki, Yanki).

### Evidence

**key_studies**:
- Spaced Repetition plugin release notes. 1.15.0 (24 May 2026): 'Enabled FSRS algorithm', which is not on by default because 'it isn't in use for long and there might be some bugs hiding there'. 1.15.4 (14 Jun 2026) is the latest release. PR #1471, merged 22 May 2026, shows that the proposed 'store schedule in plugin data' mode was not delivered, so scheduling data still lives inline in notes.
- open-spaced-repetition srs-benchmark (~10k Anki collections, ~350M reviews): FSRS-6 predicts recall far better than SM-2-style schedulers (log loss 0.3460 for FSRS-6). This matters because the Spaced Repetition plugin's default is an SM-2 variant (SM-2-OSR).
- Borretti 2025, 'Hashcards: A Plain-Text Spaced Repetition System' (borretti.me), the design rationale for plain-text SRS. Cards are Markdown files and each file is a deck. Cards are content-addressed by hash, scheduling uses FSRS, and progress is stored in SQLite. Borretti deliberately keeps cards separate from prose notes, unlike Matuschak's prompts-in-notes approach.
- Decks plugin listing (community.obsidian.md, Nov 2026): FSRS-6 with a client-side optimiser that trains the 21 weights on your own history. It imports Anki .apkg files with review history and migrates cards from the Spaced Repetition plugin.

**evidence_strength**: Anecdotal for the tools themselves. There are no outcome studies comparing reviewing inside Obsidian with Anki or any other app. Scheduler quality can be inferred from the srs-benchmark, which is strong evidence that FSRS predicts recall better than SM-2 variants. The case for making cards from your own notes rests on the generation effect (see the science item, moderate evidence), not on any plugin.

**evidence_setting_and_comparator**: n/a for learning outcomes: no controlled studies of in-Obsidian review against other apps exist. The available comparisons are feature-based, plus offline scheduler benchmarks (FSRS vs SM-2 on log loss, srs-benchmark).

**retention_interval_tested**: n/a (tools).

### Practice

**how_to_apply**: Option A, review inside Obsidian (Spaced Repetition plugin). 1) Install 'Spaced Repetition' from Community plugins. 2) Tag a note with #flashcards (the default deck tag; sub-tags such as #flashcards/books become sub-decks). 3) Write cards in one of these forms: 'Question::Answer' (single line), 'Question:::Answer' (also creates the reversed card), a question line followed by a '?' line and then the answer (multi-line; '??' for reversed), or ==highlight== for cloze. 4) In Settings > Scheduling, switch the algorithm to FSRS, which is opt-in since 1.15.0, and optionally enable the 'sr' metadata callout to hide scheduling comments. 5) Review with the command 'Review flashcards from all notes'. Add #review to a whole note to resurface it in the Notes Review Queue. Option B, keep Markdown as the source and review in Anki. 1) Install AnkiConnect in Anki desktop. 2) Install Yanki (one note per card; the folder is the deck; '---' separates front and back; ~~text~~ is a cloze) or Obsidian_to_Anki (START/END blocks or inline syntax). 3) Sync while Anki is open, then review with FSRS on any Anki client. Option C, a plain-text SRS outside Obsidian. 1) Install with 'cargo install hashcards', a release binary, or the AUR. 2) Keep a cards/ folder: 'Q:'/'A:' lines, 'C:' with [brackets] for clozes, 'T:'/'D:' for term-definition pairs. 3) Run 'hashcards drill ./cards' and review at localhost:8000. 4) Commit the Markdown to git. Option D, the Decks plugin. Headings (H2 by default) become card fronts, and two-column tables, ==highlight== clozes and image occlusion are supported. Scheduling is FSRS-6 with an optimiser, and the DecksMD app gives mobile review. A one-click migrator converts Spaced Repetition plugin cards and history.

**concrete_example**: Spaced Repetition plugin, inside a permanent note 'Spacing effect.md' tagged #flashcards/learning, under a '## Cards' heading: 'Who published the first forgetting curve, and when?::Hermann Ebbinghaus, 1885'. After the first review the plugin appends a line such as <!--SR:!2026-11-16,3,250--> (due date, interval in days, ease 250). Yanki, as a file 'Brain/Learning/FSRS desired retention.md': 'In FSRS, what does desired retention 0.90 mean?' then a line with '---' then 'A card is due when its predicted recall probability drops to 90%.' Yanki writes the Anki noteId into the note's properties after the first sync. Obsidian_to_Anki block: 'START', 'Basic', 'Which Anki version added FSRS?', 'Back: 23.10', 'END'. The plugin then inserts an '<!--ID: 17...-->' comment so later edits update the same Anki note. hashcards file 'cards/learning.md': 'Q: Who published the first forgetting curve?' / 'A: Hermann Ebbinghaus, 1885.' then a blank line, then 'C: Anki added FSRS in version [23.10] and FSRS-6 in [25.07].'

**knowledge_type_fit**: Same fit as any flashcard SRS: facts, definitions, vocabulary, formulas and short procedures fit well, and concepts fit if split into several prompts. One addition is specific to in-Obsidian review: the Spaced Repetition plugin's note-level review (#review) suits ideas and salience. Whole permanent notes resurface on a schedule so you re-read and re-link them, which fits Zettelkasten development rather than memorisation. Image occlusion (anatomy, diagrams) is only available in Decks or by pushing to Anki. Complex note types and templates are better in Anki or Decks than in the Spaced Repetition plugin's simple syntax.

### Tools

**availability_and_price**: All free. Obsidian is free for personal use. Spaced Repetition plugin: MIT, Obsidian community plugin, desktop and mobile, requires Obsidian 1.2.8+. Obsidian_to_Anki: GPL-3.0; plugin or Python CLI; needs Anki desktop with AnkiConnect, so desktop only. Yanki: MIT; desktop only; needs Obsidian 1.9.12+, Anki desktop 26.08+ and AnkiConnect 26.10.14.0+. Decks: AGPL-3.0-or-later plugin, free; 'Decks Pro' is a paid tier for AI card generation without your own API key, with a trial of ~100 cards or 10 PDF pages (prices at decksmd.app/pricing); the companion DecksMD app runs on iPhone, iPad and Android. hashcards: Apache-2.0 Rust binary (cargo, release binaries, AUR), free.

**obsidian_integration**: Spaced Repetition plugin and Decks run natively inside Obsidian; Spaced Repetition also works on Obsidian mobile, and Decks via DecksMD. Obsidian_to_Anki and Yanki are Obsidian plugins that push cards to Anki over AnkiConnect, and Yanki converts wikilinks to obsidian:// back-links. hashcards has no Obsidian plugin. It simply reads a folder of Markdown files, which can sit inside the vault and be edited in Obsidian, but its 'Q:'/'A:' syntax is its own. Mochi Cards Pro exports cards written under Markdown headings to Mochi via the paid Mochi API.

**status_2026**: Spaced Repetition plugin: 1.14.0 (26 Apr 2026, redesigned UI), 1.15.0 (24 May 2026, FSRS added as an opt-in setting, 'sr' callout, 'j' hotkey), 1.15.1-1.15.4 (29 May-14 Jun 2026, fixes, opt-in reminder notifications). Last updated about 5 months before Nov 2026. Obsidian_to_Anki: v3.6.0, no update in about 3 years, effectively in maintenance limbo. Yanki: active, already updated for the AnkiConnect 26.10 rewrite (requires 26.10.14.0+). Decks: very active, v2.12.9 in Nov 2026, 171 releases since 2025, FSRS-6. hashcards: v0.5.0 (9 Oct 2026), active since the Oct 2025 launch. Newer FSRS-based Obsidian plugins also appear in listings, for example Lemma, Come Through, Mnemoloop and an 'FSRS' plugin; they were not evaluated.

**data_ownership_and_format**: Spaced Repetition plugin: everything is plain Markdown. Cards are inline syntax and the schedule is HTML comments in the same file, which is fully portable and git-friendly but noisy. Obsidian_to_Anki and Yanki: content in Markdown, with IDs written back as an '<!--ID-->' comment or a frontmatter noteId; review history and FSRS state live in Anki's SQLite collection. Decks: content in Markdown, with state and review history in a SQLite flashcards.db in the plugin folder plus append-only .deckssynclog files for sync; it imports .apkg. hashcards: Markdown decks with optional TOML frontmatter, plus a hashcards.db SQLite file next to the cards, and 'hashcards export' to JSON. In every option, the notes stay the source of truth for card content.

**maintenance_signals**: Spaced Repetition: 2 maintainers (owner st3v3nmw and maintainer Kyle Klus), 10 releases between Mar and Jun 2026, then quiet for about 5 months. Obsidian_to_Anki: 735 commits, but no release in about 3 years, 246 open issues and 32 open PRs, so treat it as unmaintained. Yanki: a single maintainer, active and tracking AnkiConnect changes. Decks: a single maintainer with a very high release cadence (171 releases). hashcards: a single maintainer (Borretti), 813 commits, regular releases (0.2.1, then 0.3.0, 0.4.0 and 0.5.0).

### Links

**relation_to_vault_notes**: Zettelkasten / How to Take Smart Notes (Ahrens): cards inside permanent notes keep each prompt attached to its context and links, close to Matuschak's prompts-in-notes practice. Ahrens's warning still applies: the slip-box is for thinking, so card only what you need to recall. Cornell notes: the cue column turns directly into '::' cards. Learn Like a Pro (Oakley & Schewe): spacing and retrieval practice done without leaving the vault, which lowers friction. Building a Second Brain (Forte): note-level #review resurfacing works like scheduled re-reading of key notes. Obsidian (vault tool): choose between the native plugins and the Anki pipelines. Because this vault is published with Quartz, inline card syntax would appear on the public site.

**sources**:
- https://github.com/st3v3nmw/obsidian-spaced-repetition/releases
- https://github.com/st3v3nmw/obsidian-spaced-repetition/releases/tag/1.15.0
- https://github.com/st3v3nmw/obsidian-spaced-repetition/pull/1471
- https://github.com/st3v3nmw/obsidian-spaced-repetition
- https://community.obsidian.md/plugins/obsidian-spaced-repetition
- https://stephenmwangi.com/obsidian-spaced-repetition/
- https://community.obsidian.md/plugins/decks
- https://github.com/ObsidianToAnki/Obsidian_to_Anki
- https://community.obsidian.md/plugins/obsidian-to-anki-plugin
- https://system3.md/observatory/plugins/obsidian-to-anki-plugin
- https://forum.obsidian.md/t/obsidian-to-anki-export-to-anki-plugin-no-longer-syncing-with-no-errors-in-the-console/105849
- https://github.com/kitschpatrol/yanki-obsidian
- https://community.obsidian.md/plugins/yanki
- https://borretti.me/article/hashcards-plain-text-spaced-repetition
- https://github.com/eudoxia0/hashcards
- https://docs.rs/hashcards
- https://community.obsidian.md/plugins/mochi-cards-pro
- https://github.com/open-spaced-repetition/srs-benchmark
- https://forums.ankiweb.net/t/anki-connect-new-26-10-rewrite-errno-22-on-windows-for-learning-cards-in-filtered-decks-breaks-getdecks-cardsinfo/71419

**last_verified**: 2026-11-13. Primary sources: GitHub release pages and PR #1471 for the Spaced Repetition plugin, the official Obsidian community plugin listings (downloads, versions, licences), the GitHub READMEs of Yanki, Obsidian_to_Anki and hashcards, docs.rs for hashcards, and Borretti's blog post. Secondary or inferred: the Spaced Repetition plugin's first-release year, Yanki's author name, the 'Export to Anki' alias (system3.md), the FSRS library used by each tool, the Quartz rendering behaviour and the time-cost estimates.

### Other Info

**uncertain** (left out):
- automation_interface
- failure_modes
- from_own_notes
- limitations_and_criticism
- numbers_or_effect_sizes
- origin
- replication_status
- time_cost

## Other SRS apps: SuperMemo, RemNote, Mochi, Quizlet, Readwise Mastery

### Basic Info

**name**: Other SRS apps: SuperMemo, RemNote, Mochi, Quizlet, Readwise Mastery

**category**: tool

**one_line**: Five alternatives to Anki with different trade-offs. SuperMemo is the original SRS, Windows-only, with incremental reading. RemNote puts notes and flashcards in one outliner with FSRS-6. Mochi offers local-first Markdown cards with optional FSRS. Quizlet is a mass-market study-set app with a light spaced-repetition mode. Readwise Mastery turns reading highlights into flashcards.

### Evidence

**evidence_strength**: Anecdotal to weak for app-specific outcomes. No independent controlled studies compare these apps' learning outcomes. SuperMemo's algorithm claims rest on Woźniak's own data and writings. RemNote and Mochi inherit FSRS's benchmark evidence (strong for prediction accuracy), but their implementations have not been independently benchmarked. Whether Quizlet's Learn mode is true spaced repetition is disputed, and the claims come from competitors. Readwise publishes no accuracy data for its half-life model.

**evidence_setting_and_comparator**: n/a for learning outcomes: there are no controlled comparisons. The available evidence is vendor documentation, plus offline scheduler benchmarks that compare FSRS with SM-2 on log loss.

**retention_interval_tested**: n/a (tools).

### Practice

**how_to_apply**: Choose by need. 1) To read long articles and PDFs and gradually turn them into cards, use SuperMemo 20 on Windows for incremental reading. Import the article, read a portion, extract key passages (Alt+X), turn extracts into clozes (Alt+Z), and set a priority. The priority queue decides what returns tomorrow and what returns in 30 days. 2) For notes and cards in one tool, if you accept the cloud, use RemNote. Write 'Concept >> definition' (forward card), '<<' (backward) or '<>' (both ways), '::' for concept/descriptor cards, and {{text}} for a cloze. Enable FSRS v6 in Settings > Schedulers and press 'Auto train weights' after 1,000+ reviews. 3) For local-first Markdown cards with a clean UI, use Mochi. Separate front and back with '---', switch to FSRS in Settings > Review Settings, and set 'Target retention rate'. Buy Pro only if you need sync or the API. 4) For shared class sets and quick vocabulary drilling, use Quizlet. Open Flashcards and choose 'Spaced repetition' (web) rather than plain sorting. 5) If you read a lot in Kindle or Readwise Reader, use Readwise Mastery. Press M on a Daily Review highlight to make a cloze or Q&A card, then review it in the second half of Daily Review or on the Mastery dashboard. Use the .qa action tag with a Ghostreader prompt to generate Q&A cards while reading.

**knowledge_type_fit**: SuperMemo: broad knowledge built up from long texts, through reading, extracts and clozes, plus classic facts. RemNote: structured course material and concept hierarchies, such as medicine, law or university courses, and exam cramming (exam scheduler). Mochi: programming, languages and anything Markdown or code formatting suits. Quizlet: vocabulary and term-definition pairs, school-level facts. It is weak for concepts. Readwise Mastery: ideas and salience from books and articles, 'pattern recognition rather than verbatim memorization' in its own words, and not precise fact retention.

**failure_modes**: Lock-in to a proprietary format (RemNote, Quizlet, SuperMemo) and vendor price changes. RemNote, SuperMemo.com and Quizlet terms explicitly allow price changes. Premade Quizlet sets used without understanding. In RemNote, every outline bullet becomes a card, which leads to review debt. SuperMemo incremental-reading overload: too many imported articles at high priority. Mochi's binary grading hides 'hard' recalls. In Readwise, a low recall target plus verbatim cloze cards produce a familiarity illusion. Subscription lapse: Mochi keeps local data on downgrade, while cloud-only apps restrict access.

### Tools

**status_2026**: SuperMemo: SM-20 algorithm released in 2026. SuperMemo for Windows 20.00.32 dated 29 Jun 2026 (Wikipedia); supermemo.store markets SuperMemo 20 with PDF reading and 'AI explanations'. A commercial SuperMemo API (version 2026.06.10) sells SM-20 scheduling, and SuperMemo.com courses use SM-20. RemNote: FSRS v6 built in as an opt-in beta, earlier available as a plugin, and may become default; pricing tiers now include Pro with AI (Learn PDF, AI grading, lecture recorder). Mochi: FSRS added as an option in 2025 (beta first) with v6.1 default parameters; v1.20.5 (28 Oct 2025) fixed FSRS fuzz; own algorithm still default. Quizlet: Plus subscription with AI study tools; a spaced-repetition option in Flashcards (help center). Readwise: Mastery still available in Full and Highlights plans; the pricing page lists four plans (Full, Highlights-only, Highlights Lite, Reader-only).

**data_ownership_and_format**: SuperMemo for Windows: a local proprietary collection on your PC with XML/HTML export; SuperMemo.com is cloud-based. RemNote: cloud with offline support and a proprietary data model; export to Markdown, Anki-compatible and other formats, though bullets without flashcards are dropped in the Anki export. Mochi: local-first, with data stored on the device and Pro sync to the cloud; the .mochi zip format holds data.edn or data.json (version 2) plus media; import and export are on the free tier. Quizlet: cloud only; set creators can export term/definition text. Readwise: cloud; highlights export to Markdown/CSV and note apps, and Mastery cards with half-lives are visible at readwise.io/mastery. Only Mochi keeps cards as local Markdown, close to 'notes as source of truth'.

**maintenance_signals**: SuperMemo: a long-running commercial company (35+ years) with a 2026 algorithm and Windows release; its promotional cadence suggests a course-business focus. RemNote: an active company with frequent feature work; it shipped FSRS v6 and AI tiers. Mochi: a small independent developer with an active changelog and forum and FSRS updates in 2025. Quizlet: a large commercial edtech company, actively changing its paywall. Readwise: an active small company; Mastery is a mature, low-change feature inside Highlights.

### Links

**relation_to_vault_notes**: Building a Second Brain (Forte): Readwise is the classic BASB capture pipe (highlights to Obsidian), and Mastery adds an optional recall layer on top of progressive summarisation. Zettelkasten / How to Take Smart Notes (Ahrens): SuperMemo incremental reading resembles Ahrens's literature-note processing, from extract to clozes, while RemNote merges notes and cards in one outliner, unlike a separate slip-box. Learn Like a Pro (Oakley & Schewe): all five implement spacing and retrieval, but Quizlet premade sets and verbatim Readwise clozes weaken the self-generation and elaboration that the book stresses. Cornell notes: RemNote's '>>' syntax maps naturally to cue-column questions.

**sources**:
- https://supermemo.store/
- https://en.wikipedia.org/wiki/SuperMemo
- https://www-v1.supermemo.com/en/about-supermemo-method
- https://www.supermemo.com/premium-annual-access
- https://api.supermemo.com/
- https://en.wikipedia.org/wiki/Incremental_reading
- https://www-v1.supermemo.com/archives1990-2015/help/faq/read
- https://www.remnote.com/pricing
- https://help.remnote.com/en/articles/9124137-the-fsrs-spaced-repetition-algorithm
- https://help.remnote.com/en/articles/6330674-notes-on-remnote-importers
- https://help.remnote.com/en/articles/7898019-exporting-notes
- https://forum.obsidian.md/t/can-anybody-help-with-migrating-remnote-to-obsidian/40156
- https://mochi.cards/
- https://mochi.cards/pricing/
- https://mochi.cards/docs/reviewing/fsrs/
- https://mochi.cards/changelog/
- https://www.mochi.cards/docs/api/
- https://community.obsidian.md/plugins/mochi-cards-pro
- https://help.quizlet.com/hc/en-ca/articles/48324742264077-Studying-with-Spaced-Repetition
- https://medium.com/tech-quizlet/spaced-repetition-for-all-cognitive-science-meets-big-data-in-a-procrastinating-world-59e4d2c8ede1
- https://www.myengineeringbuddy.com/blog/quizlet-reviews-alternatives-pricing-offerings/
- https://readwise.io/pricing
- https://docs.readwise.io/readwise/guides/mastery
- https://docs.readwise.io/readwise/docs/faqs/reviewing-highlights
- https://blog.readwise.io/hack-your-brain-with-spaced-repetition-and-active-recall/
- https://borretti.me/article/hashcards-plain-text-spaced-repetition
- https://github.com/open-spaced-repetition/srs-benchmark

**last_verified**: 2026-11-13. Primary sources: supermemo.store prices, RemNote's pricing page and help center, Mochi's pricing, FSRS docs and API docs, Readwise's pricing page and docs (Mastery algorithm), and Wikipedia for SuperMemo versions. Secondary sources: Quizlet prices (quizlet.com returned 403; third-party Oct 2026 figures), the SuperMemo.com App Store prices (2025 snapshot), SuperMemo API pricing, founding dates for RemNote, Mochi and Readwise Mastery, and the Quizlet API status.

### Other Info

**uncertain** (left out):
- automation_interface
- availability_and_price
- concrete_example
- from_own_notes
- key_studies
- limitations_and_criticism
- numbers_or_effect_sizes
- obsidian_integration
- origin
- replication_status
- time_cost

## LLM-generated flashcards from your own notes

### Basic Info

**name**: LLM-generated flashcards from your own notes

**category**: workflow

**one_line**: An LLM turns your notes or highlights into spaced-repetition prompts in seconds. Even the best model makes about a third of its cards unusable, and you lose some of the learning that comes from writing the card yourself.

### Evidence

**evidence_strength**: Moderate for 'LLM cards need human filtering': one systematic, expert-labelled, open-data report (Memory Machines), not peer-reviewed. Strong for the generation effect in general (meta-analyses), and moderate for its flashcard-specific form (Pan et al. 2023, six experiments from one lab). Moderate for cognitive-offloading harm when AI does the work for you (one large field RCT, Bastani 2025), plus a weak preprint (Kosmyna et al. 2025, n=54) and correlational survey data (Gerlich 2025). I found no RCT that directly compares retention from LLM-generated cards with self-written cards, so the net effect of the trade-off is unknown.

**numbers_or_effect_sizes**: Memory Machines (2026): GPT-5.2 36% unusable (10% T0 + 26% T1); Gemini 2.5 Pro trivia control about 75% unusable (33% T0 + 42% T1). T1 rate over time: GPT-4o 59%, GPT-4.1 52%, Claude 3.7 Sonnet 47%, Gemini 3 Pro 34%, GPT-5.2 26%. As judges, no model passed 70% binary accuracy and the best runs were in the mid-60s. Rubric F1 for 'ambiguous, lacks context' was 0.85-0.87, but for 'wordy' only 0.07-0.37. Judges picked the T3 prompt only 40-50% of the time. A reward model scored 77% on targeting comparisons and 62% on construction. Grounded judging with Sonnet 4.5 raised tier accuracy from 39% to 49% and precision from 56% to 78%, and cut false positives from 52% to 17%. A fine-tuned Qwen3-14B matched a frontier model's ROC-AUC (0.754 vs 0.752). In the arena, GPT-5.2 led at 1630 Elo with 64.3% usable prompts. Highlights study: 39% pairwise interest agreement (45% counting participants who selected everything). Pan et al. 2023: d = 0.45 for self-made vs premade cards, roughly 10 percentage points. Bastani et al. 2025: GPT Base +48% in practice, -17% on the unassisted exam; GPT Tutor +127% in practice with exam roughly equal to control. Nielsen (2018): about 4-7 minutes of lifetime review per card, so every bad card that is kept has a real cost.

**evidence_setting_and_comparator**: Memory Machines: an offline benchmark comparing LLM-generated prompts and LLM judges against expert human labels for the same highlight, plus an online highlights study with 42 users. Pan et al. 2023: lab and online experiments comparing self-made with premade digital flashcards, total time equated. Bastani et al. 2025: classroom field RCT comparing GPT Base and GPT Tutor with a no-AI control. Pan et al. 2025: lab experiments comparing AI-generated prequestions, human prequestions, an AI outline, and reading only. None of these compares LLM-made cards with self-written cards on long-term retention, and none involves a scheduler comparison such as FSRS vs SM-2.

**replication_status**: Memory Machines has open data (srs-prompts on Hugging Face, laddermedia/srs-prompts) and open code (github.com/laddermedia/memory-machines, Apache-2.0). Its arena kept adding models through mid-2026 (Opus 4.8, Sonnet 5), but there is no independent replication. Pan 2023 replicated within the lab across six experiments; I found no independent replication. Bastani 2025 is a single site; Kosmyna 2025 (preprint) and Gerlich 2025 (correlational) point the same way. The general generation effect is widely replicated (Bertsch 2007, McCurdy 2020).

### Practice

**how_to_apply**: 1) Do the targeting yourself. Before generating, highlight the passage and add a one-line 'why I care' comment. Readers agree only 39% of the time on what matters, and targeting is where your judgement adds the most. 2) Write the core card for each key idea yourself to keep the generation benefit. Use the LLM for variants, cloze versions, reverse cards and application prompts. 3) Give the model the note text, the highlight, your intent, and 3-5 examples of cards you previously accepted. Grounding in your own good examples was the biggest quality gain in Memory Machines. Ask for atomic prompts with exactly one correct answer and enough context to be answerable months later without the note. 4) Triage every card before it enters the SRS. Drop it if it is off-target trivia (T0). Rewrite it if it is ambiguous or has many valid answers (T1). Trim it if it is wordy (T2). Accept only cards you would answer the same way in 6 months (T3). 5) Do not hand this triage to a second LLM as the final judge: no model passed 70% accuracy. 6) Cap the flow at, for example, 3-5 cards per note and 10-20 new cards per day. 7) Link every card to its source note and tag it (e.g. #flashcards/ai) so you can audit it. After 30 days, delete or rewrite leeches and any card you answer without understanding. 8) Never let the AI answer or grade the retrieval for you. The recall has to be yours, which is the offloading lesson from Bastani 2025.

**concrete_example**: Source note (book note on 'Learn Like a Pro'): 'Rereading feels productive but retrieval practice produces stronger retention because effortful recall strengthens memory.' Highlight plus intent: 'I want to remember why rereading fools me.' An LLM returns 5 candidates, triaged as follows. (T0, reject) 'Who wrote Learn Like a Pro?' (T1, rewrite) 'What is better than rereading?' because many answers fit. (T2, trim) A three-sentence question restating the whole paragraph. (T3, accept) 'Why does rereading feel productive yet retain worse than retrieval practice?::Familiarity (fluency) is mistaken for knowing; it is the effort of recall, not exposure, that strengthens memory.' (T3, accept, application) 'You have 20 minutes before a meeting to refresh a book you read. What do you do instead of rereading highlights?::Close the book and try to recall the key ideas, then check.' Result: 5 candidates, 2 kept, 1 rewritten, 2 dropped. This illustrative ratio is close to the about 36% unusable rate Memory Machines reports for the best model. Cards go into the same note in Obsidian Spaced Repetition plugin syntax and carry a #flashcards/ai tag.

**from_own_notes**: Generating from your own notes is the best case for LLM cards. You already did the elaboration when you wrote the note in your own words (Ahrens), so the LLM only reformats your phrasing into prompts, which keeps part of the generation benefit. Practical rules: 1) Work from atomic permanent notes (Zettelkasten) or the Cornell cue column, where you have already chosen the targets, not from raw book highlights. 2) Write cards back into the note (Obsidian Spaced Repetition syntax) or push them to Anki with a link back to the note, so the note stays the source of truth. 3) Keep the card wording close to your note's wording, so recall reinforces your own formulation. 4) Use LLM generation for coverage (definitions, lists, cloze) and write the conceptual 'why' and 'when' cards yourself. 5) Watch for hallucinated facts that are not in the note. Tell the model to use only the note text.

**knowledge_type_fit**: Works better for factual detail, definitions, terminology, vocabulary and cloze cards on technical explainers, which is the kind of material Memory Machines' data comes from, and where off-target errors are easy to spot. Works worse for conceptual 'why' prompts, salience or idea prompts, personal-meaning and opinion material (the targeting problem: only you know what you care about), and procedures or maths, where construction must be precise. Not a substitute for writing when the point of the card is to understand.

**failure_modes**: 1) Off-target trivia (T0): author names, dates, incidental numbers. 2) Ambiguous construction (T1): 'What is X?' with many valid answers. This is the dominant failure mode, and it turns into leeches and pattern-matched answers. 3) Wordy cards (T2) that slow every review; LLM judges barely detect these (F1 0.07-0.37). 4) A card flood that becomes review debt, because generation is free and review is not. 5) Orphan cards with no link to a source note, which become uninterpretable months later. 6) Skipping the generation step entirely, leading to shallow understanding and an illusion of competence. 7) Facts hallucinated beyond the note. 8) Duplicate cards across notes. 9) Rubber-stamping, where a second LLM approves cards that a human would reject. 10) Letting the AI answer or explain before you attempt recall, the 'crutch' effect.

### Tools

**obsidian_integration**: Plugins generate cards into the current note in Obsidian Spaced Repetition plugin syntax ('Q::A', multi-line '?', cloze), so cards stay next to their source. Alternatively, an agent reads the vault and pushes cards to Anki via AnkiConnect or an Anki MCP server, putting the Obsidian deep link (obsidian://open?vault=...&file=...) in a 'Source' field. Obsidian_to_Anki can sync Markdown-authored cards to Anki without an LLM. A Claude Code or other agent with filesystem access can do generate, triage-list and write-back on Markdown directly.

**status_2026**: Memory Machines (2026) is the current reference. Frontier models improved sharply on construction between GPT-4o (59% T1) and GPT-5.2 (26% T1), but still produce unusable prompts about a third of the time. The arena tracked newer models through July 2026 (Opus 4.8, Sonnet 5, GPT-5.5 listed). NotebookLM made generated flashcards editable on 2026-06-22. The Obsidian AI-card plugin ecosystem is fragmented and many plugins are stale: crybot/obsidian-flashcards-llm was last pushed 2025-07-07 and Spaced Repetition AI was last updated about 2 years ago.

**data_ownership_and_format**: With cloud LLMs, your note text goes to the provider; check data-retention settings for private notes such as health or journal entries. Local models (Ollama or similar, e.g. via Flashcard Gen) keep notes on-device. Cards written into Markdown (Spaced Repetition plugin) stay plain-text and git-friendly, with the note as the source of truth. Cards pushed to Anki live in Anki's SQLite collection (exportable as .apkg) and should keep a source link back to the note.

**automation_interface**: AnkiConnect (local JSON API on 127.0.0.1:8765; e.g. addNotes, findNotes) and Anki MCP servers (ankimcp: 53 tools including addNotes, findNotes and updateNoteFields) let an agent create and update cards. ts-fsrs or py-fsrs let you schedule cards in your own store. The Memory Machines repo provides judge and arena code for evaluating your own generation prompts against labelled data. An agent pipeline might run: read note, generate candidates, write them to a triage list in Markdown, wait for human accept or edit, then push accepted cards with a source link.

**maintenance_signals**: laddermedia/memory-machines: Apache-2.0, 25 stars, last commit 2026-07-01 ('add sonnet 5'); dataset at huggingface.co/datasets/laddermedia/srs-prompts. ankimcp/anki-mcp-server: MIT, 557 stars, v0.27.0 (2026-10-04); ankimcp/anki-mcp-server-addon v0.41.1 (2026-11-09). crybot/obsidian-flashcards-llm: MIT, 52 stars, last push 2025-07-07. st3v3nmw/obsidian-spaced-repetition: 2,618 stars, last push 2026-11-01.

### Links

**relation_to_vault_notes**: Learn Like a Pro (Oakley & Schewe): stresses active recall and putting ideas in your own words. The generation step is part of the learning, so let the LLM assist rather than replace it. Zettelkasten / How to Take Smart Notes (Ahrens): writing permanent notes in your own words is the elaboration; LLM cards built from those notes inherit that benefit, while cards from raw highlights do not. Cornell notes: the cue column holds the questions you chose, which makes it the ideal targeting input for an LLM. Building a Second Brain (Forte): AI makes capture and distillation effortless, and this research shows why the final 'express or recall' step still needs a human pass.

**sources**:
- https://memory-machines.com/report
- https://github.com/laddermedia/memory-machines
- https://huggingface.co/datasets/laddermedia/srs-prompts
- https://andymatuschak.org/situated-idea-memory-system
- https://econpapers.repec.org/RePEc:nas:journl:v:122:y:2025:p:e2422633122
- https://knowledge.wharton.upenn.edu/article/without-guardrails-generative-ai-can-harm-education/
- https://papers.ssrn.com/abstract=4895486
- https://www.bohrium.com/paper-details/user-generated-digital-flashcards-yield-better-learning-than-premade-flashcards/817403503885418496-6359
- https://michellemillerphd.substack.com/p/r3-21-january-8-2024-do-students
- https://www.techlearning.com/news/tech-tools-provide-flashcards-to-students-thats-not-a-good-thing-says-new-research
- https://link.springer.com/content/pdf/10.3758/s13423-020-01762-3.pdf
- https://www.learningandthebrain.com/blog/tag/prequestions
- https://sciety.org/articles/activity/10.31234/osf.io/hsu8e_v1
- https://www.media.mit.edu/publications/your-brain-on-chatgpt/
- https://papers.ssrn.com/abstract=5082524
- http://augmentingcognition.com/ltm.html
- https://community.obsidian.md/plugins/flashcards-llm
- https://github.com/crybot/obsidian-flashcards-llm
- https://community.obsidian.md/plugins/spaced-repetition-ai
- https://community.obsidian.md/plugins/flashcard-gen
- https://community.obsidian.md/plugins/recallflow-ai
- https://www.brainscape.com/academy/flashcard-copilot-ai-generator/
- https://github.com/ankimcp/anki-mcp-server

**last_verified**: 2026-11-13. Memory Machines numbers come from the primary report page and the GitHub repo. Bastani 2025 numbers come from the PNAS record (EconPapers) plus the Wharton and SSRN summaries; the PNAS full text was not read. Pan 2023 effect size comes from the abstract via secondary summaries. Bertsch 2007 d is from memory and not re-checked. Obsidian plugin details come from community.obsidian.md listings and the GitHub API.

### Other Info

**uncertain** (left out):
- availability_and_price
- key_studies
- limitations_and_criticism
- origin
- retention_interval_tested
- time_cost

## AI study modes and agent bridges to SRS

### Basic Info

**name**: AI study modes and agent bridges to SRS

**category**: tool

**one_line**: Chatbot study modes and NotebookLM quiz you on a topic or on your own sources, but none of them schedules reviews over weeks. To get real spaced repetition out of AI, connect the AI to an SRS: Anki through AnkiConnect or an MCP server, or your own scheduler built on ts-fsrs.

### Evidence

**evidence_strength**: Anecdotal to weak for the study-mode products themselves. Only one company-run, partly reported study exists for ChatGPT Study Mode, and I found no independent efficacy studies for Gemini Guided Learning or NotebookLM flashcards. The design principle behind study modes (guardrails, no answer-giving) has moderate support from one large field RCT (Bastani 2025). The bridges (MCP, AnkiConnect, ts-fsrs) are engineering, not learning interventions. Their value comes from the strong evidence for spacing and retrieval and from FSRS's benchmarked scheduling accuracy.

**replication_status**: Not replicated. OpenAI says its Learning Outcomes Measurement Suite will be validated by a randomized controlled trial and released publicly, and analysis was still ongoing as of March 2026. No independent studies of Guided Learning or NotebookLM flashcards were found. FSRS scheduling accuracy is openly benchmarked and reproducible (open-spaced-repetition/srs-benchmark).

### Practice

**how_to_apply**: 1) Use a study mode to understand: turn on ChatGPT 'Study and learn' or Gemini Guided Learning on a new topic, or attach your note, and ask it to quiz you one question at a time before it explains anything. 2) Use NotebookLM for a quick grounded self-test on a set of your notes: upload them as sources, generate flashcards or a quiz, and set topic, difficulty and count. 3) Move anything you want to keep for months into a real scheduler. NotebookLM: edit the cards, export them as CSV, and import into Anki or sync them with an AnkiConnect-based extension. Chat or agent: connect an Anki MCP server and ask it to create cards from a note into a named deck with a Source field linking back. 4) Rate cards yourself. Let the agent present cards or explain lapses, but do not let it grade you, and use setDueDate or forgetCards, not 'Again', to fix schedules. 5) Keep destructive tools (delete notes, remove fields) disabled or confirmation-gated. 6) For a fully owned pipeline, keep cards in Markdown, parse them with a script, schedule with ts-fsrs, store state next to the note, and review in a small CLI or web UI.

**knowledge_type_fit**: Study modes and Guided Learning: conceptual understanding, worked problem solving (maths, economics), and exploring a new field through Socratic questioning. NotebookLM flashcards: key terms, dates and concepts from uploaded sources. SRS bridges: anything you have decided to retain long-term. A ts-fsrs custom queue also fits 'spaced everything' tasks (inklings, reading items) that do not belong in Anki. Poor fit: using any of these as a substitute for a schedule, since one-off quiz sessions are massed practice.

**failure_modes**: 1) Treating in-app quizzes as spaced repetition, which amounts to cramming the same day and forgetting by next month. 2) Switching study mode off to get the answer, which is the Bastani 'crutch'. 3) Regenerating a NotebookLM deck instead of keeping and editing it, so nothing accumulates. 4) An agent flooding Anki with unreviewed cards. 5) An agent rating cards or rescheduling with 'Again', which fakes retrieval, logs false lapses, and skews FSRS parameters. 6) Destructive MCP calls (deleteNotes, removeModelField, clearUnusedTags) run without confirmation. 7) Anki exposed through a tunnel without an API key or allowed-hosts configuration. 8) ts-fsrs migration mistakes, such as reusing FSRS-6 weights for FSRS-7 or inventing stabilityFast without full history. 9) Uploading private notes to cloud tools without checking data policies.

### Tools

**obsidian_integration**: No native Obsidian integration for ChatGPT Study Mode, Gemini Guided Learning or NotebookLM; notes have to be uploaded or pasted. The practical bridge is an agent with vault access plus an Anki MCP server (Markdown to Anki with a backlink), or Obsidian_to_Anki via AnkiConnect without an LLM. Third-party Chrome extensions (e.g. Study Cycle Bridge, AnkiNLM) move NotebookLM flashcards into Anki via AnkiConnect or CSV; these are unofficial. ts-fsrs can power a custom scheduler that reads and writes the vault's Markdown and frontmatter directly.

**status_2026**: ChatGPT Study Mode is live on all plans. March 2026 brought a company study and a measurement suite with Tartu and Stanford SCALE. Teen parental controls can make new chats start in Study Mode, and Edu workspaces can require it. Gemini: Guided Learning is live, Gemini in Classroom expanded to students of all ages from 2026-08-10, and a learning hub with study notebook, flashcards and quizzes was reported 2026-08-19. NotebookLM: progress saving and 'Got it / Missed it' since 2026-03-20; editable, user-created and link-shareable cards since 2026-06-22; still no spaced scheduling. AnkiConnect's GitHub repo is archived and development continues at git.sr.ht/~foosoft/anki-connect. ankimcp is active (server v0.27.0 2026-10-04, add-on v0.41.1 2026-11-09) and now recommends the in-Anki add-on, which needs no AnkiConnect. ts-fsrs v6.0.0 (2026-10-28) made FSRS-7 the default and publishes an llms.txt for AI-assisted migration.

**maintenance_signals**: ankimcp/anki-mcp-server: MIT, 557 stars, 40 forks, last push 2026-11-07, releases v0.25.1 (2026-09-09), v0.26.0 (2026-09-18), v0.27.0 (2026-10-04). ankimcp/anki-mcp-server-addon: 102 stars, v0.41.1 (2026-11-09). nailuoGG/anki-mcp-server: 253 stars, last push 2026-10-27. scorzeth/anki-mcp-server: 185 stars, last push 2025-01-08 (stale). spacholski1225/anki-connect-mcp: 27 stars, last push 2026-11-02. FooSoft/anki-connect (GitHub): archived, 2,083 stars, moved to SourceHut. open-spaced-repetition/ts-fsrs: MIT, 870 stars, 76 forks, v6.0.0 (2026-10-28), last push 2026-11-13, about 404k weekly npm downloads. open-spaced-repetition/py-fsrs: MIT, 531 stars, v6.3.3 (2026-11-13).

### Links

**relation_to_vault_notes**: Learn Like a Pro (Oakley & Schewe): study modes deliver the 'test yourself, don't reread' half of Oakley's advice but not the spacing half, so pair them with an SRS. Zettelkasten / How to Take Smart Notes (Ahrens): agent bridges let permanent notes stay the source of truth while cards are generated from them with backlinks, which avoids a second, disconnected knowledge store. Cornell notes: the cue column is a ready-made quiz for NotebookLM or Study Mode and a ready-made card list for an MCP import. Building a Second Brain (Forte): an MCP or ts-fsrs pipeline automates the step from distilled notes to long-term retention.

**sources**:
- https://help.openai.com/en/articles/11780217
- https://www.axios.com/2025/07/29/openai-chatgpt-study-mode
- https://openai.com/index/understanding-ai-and-learning-outcomes/
- https://scale.stanford.edu/research-in-action/new-tools-understanding-ai-learning-outcomes
- https://blog.google/products-and-platforms/products/education/guided-learning/
- https://techcrunch.com/2025/08/06/google-takes-on-chatgpts-study-mode-with-new-guided-learning-tool-in-gemini/
- https://workspaceupdates.googleblog.com/2026/08/gemini-in-google-classroom-is-expanding-to-users-of-all-ages-with-contextualized-Gemini-starter-prompts-for-students.html
- https://workspaceupdates.googleblog.com/2025/09/flashcards-quizzes-reports-notebook-lm-google-education.html
- https://workspaceupdates.googleblog.com/2026/03/new-ways-to-customize-and-interact-with-your-content-in-NotebookLM.html
- https://androidauthority.com/notebooklm-flashcards-edit-learning-3680276
- https://9to5google.com/2025/11/06/notebooklm-app-flashcards-quizzes/
- https://www.nlmtools.com/blog/notebooklm-export-quiz
- https://chromewebstore.google.com/detail/study-cycle-bridge-notebo/hibpfanlbdndbmicmlkddjchcbccolho
- https://github.com/ankimcp/anki-mcp-server
- https://github.com/ankimcp/anki-mcp-server-addon
- https://github.com/nailuoGG/anki-mcp-server
- https://github.com/scorzeth/anki-mcp-server
- https://github.com/FooSoft/anki-connect
- https://git.sr.ht/~foosoft/anki-connect
- https://github.com/open-spaced-repetition/ts-fsrs/releases/tag/v6.0.0
- https://open-spaced-repetition.github.io/ts-fsrs/guide/quick-start
- https://github.com/open-spaced-repetition/py-fsrs
- https://econpapers.repec.org/RePEc:nas:journl:v:122:y:2025:p:e2422633122
- https://knowledge.wharton.upenn.edu/article/without-guardrails-generative-ai-can-harm-education/
- https://memory-machines.com/report

**last_verified**: 2026-11-13. Primary sources: GitHub API (stars, releases, pushes), the npm registry and download API, the ts-fsrs v6.0.0 release notes and quick-start, the ankimcp READMEs, and Google Workspace Updates posts (Sept 2025, Mar 2026, Aug 2026). The OpenAI Study Mode help article and the March 2026 outcomes post were read only through search snippets and secondary coverage (openai.com returned 403). NotebookLM's June 2026 editing update and CSV export come from secondary outlets. The about-15% Study Mode figure is secondary only.

### Other Info

**uncertain** (left out):
- automation_interface
- availability_and_price
- concrete_example
- data_ownership_and_format
- evidence_setting_and_comparator
- from_own_notes
- key_studies
- limitations_and_criticism
- numbers_or_effect_sizes
- origin
- retention_interval_tested
- time_cost

## Pitfalls and workload management

### Basic Info

**name**: Pitfalls and workload management

**category**: workflow

**one_line**: The common ways a spaced-repetition habit collapses, and the settings and habits that keep the daily load sustainable. The failures: piling up overdue reviews, adding too many cards, wrong grading, cards that never stick, and retention targets set too high.

### Evidence

**key_studies**:
- Anki Manual, Deck Options and Leeches (docs.ankiweb.net, current 2026). 20 new cards/day leads to ~200 reviews/day. Desired retention defaults to 90%, and workload rises quickly above 90% and 'can be overwhelming' above 97%. The 'Compute Minimum Recommended Retention' tool was removed in 25.07 and replaced by an experimental 'Help Me Decide' simulation. A leech is a card with 8 lapses, which Anki tags and suspends by default.
- FSRS tutorial (open-spaced-repetition/fsrs4anki docs). 'Hard should be used as a passing grade, not a failing grade'. Pressing Hard after forgetting makes intervals 'unreasonably high'. 80-95% desired retention is reasonable, 90% suits most people, and values above 0.97 are discouraged.
- SuperMemo help, Forgetting index (Wozniak). Default 10% forgetting index, giving ~94.9% average retention; 8-13% works best in most cases; 3% makes repetitions 'annoyingly frequent'. Simulations put the maximum acquisition rate at 25-30% forgetting.
- Practitioner workload accounts. Nielsen 2018: ~8 s per review, 4-7 minutes lifetime per card, >10,000 cards in 2.5 years at 15-20 min/day; slow down new cards if review routinely exceeds 20 min. Gwern: 18,300 items gave 90-100 reviews/day in under 20 min, and the 5-minute rule. Domenic Denicola's FSRS simulation of his own deck (domenic.me/fsrs): desired retention of 90% vs 70%.

**evidence_strength**: anecdotal to moderate. Most of this is official documentation, practitioner experience, and simulations built from users' own review logs (FSRS simulator, SuperMemo simulations), not controlled experiments. The direction of the main claims is consistent across independent sources: Anki, SuperMemo, the FSRS developers, Nielsen and Gwern. Those claims are that new cards drive review load, that workload climbs steeply as target retention approaches 100%, and that failing items must be graded as failures. The exact multipliers are model- and person-dependent. The FSRS memory model behind the simulations is validated on large review datasets (see the FSRS and benchmark items), which lifts the workload-vs-retention trade-off above pure anecdote. The real-world medical-student studies add field support: time commitment was the top barrier, cited by 73.7% of students in a 2026 Saudi survey.

**limitations_and_criticism**: 1) Workload figures are personal. The 10:1 ratio, the 8 s/review figure and the retention-workload curves depend on the scheduler, your FSRS parameters, card difficulty and answer speed; the FSRS wiki itself says 'real graphs vary among different learners'. 2) The retention comparison comes from one learner's simulation, and its 'new cards only while <200 reviews' rule partly drives the result. Low retention also has a motivational cost: the FSRS docs warn that forgetting a lot is demoralising. 3) 'Ease hell' is debated. Some forum users argue it was overstated, and FSRS has no ease, though users report a similar 'difficulty hell'. FSRS-5 added mean reversion of difficulty to counter this. 4) The 'Hard misuse' prevalence is a forum guess, not a measurement. 5) Simulated workload assumes you do every due card, and real behaviour (skipped days, binges) deviates. 6) Common misreadings: 'higher desired retention is always better' (no: the extra reviews buy little), 'Max reviews/day = time limit' (a low cap just hides growing debt), and 'leech = bad memory' (usually a badly formulated card or interference between similar items). 7) Button semantics differ across tools. In the Obsidian Spaced Repetition plugin's SM-2-OSR the lowest button is Hard (interval x0.5, ease -20); there is no Again. So the Anki rule 'Hard = pass' does not transfer.

**evidence_setting_and_comparator**: Practitioner and official-documentation setting, plus simulation. The comparisons are between scheduler settings: desired retention 70-97%, forgetting index 3-20%, SM-2 vs FSRS, numbers of new cards per day. They are run on users' own review logs through the FSRS simulator or SuperMemo simulations. No lab or classroom experiments compare workload policies. Field corroboration comes indirectly from medical-education surveys that report time burden.

**retention_interval_tested**: n/a (workflow item). The workload estimates span a 365-day simulation (Denicola), 3- and 20-year lifetime projections (Gwern; Nielsen 4-7 min over 20 years), and multi-year personal logs (Nielsen 2.5 years; Gwern several years).

**replication_status**: No controlled replications. The main claims are independently corroborated by different practitioners and systems: SuperMemo since the 1990s, Anki, the FSRS developers since 2023, Nielsen 2018 and Gwern. The FSRS memory model that powers the simulator is benchmarked openly on ~10k users' review logs (srs-benchmark, anki-revlogs-10k), which gives the retention-workload curves an open-data basis. The specific multipliers (2x at 95%, 3x at 97%) have not been verified in primary sources.

### Practice

**how_to_apply**: 1) Start from a time budget, not a card count. Choose daily minutes (e.g. 20) and derive new cards/day: with ~10 reviews per new card per day at steady state and ~8-10 s each, daily minutes are roughly 1.3-1.7 times your new cards/day (derived from the Anki 10:1 ratio and Nielsen's 8 s). A 20-minute budget supports ~12-15 new cards/day. 2) If reviews routinely exceed your budget, cut new cards first (Nielsen's 20-minute signal); never cut reviews. 3) Keep 'Maximum reviews/day' high so debt stays visible, and leave 'New cards ignore review limit' off. 4) Grade honestly: Again = forgot (including partial or wrong answers), Hard = recalled with real struggle, Good is the default. If in doubt, use only Again and Good. 5) Switch Anki to FSRS, which has no ease factor and therefore no ease hell. Optimise parameters about monthly and keep desired retention at 0.85-0.90. Raise it only for exam-critical decks or temporarily before a test, and never above 0.97. Use the simulator or 'Help Me Decide' to see the workload impact. 6) Treat leeches as a writing problem. When Anki tags a card at 8 lapses, split it, add context or a mnemonic, separate it from look-alike cards (suspend one until the other is learned), or delete it if it is not worth the time. 7) Recovering from backlog: set new cards to 0 and switch review order to 'Ascending retrievability' (FSRS) or 'Relative overdueness' (SM-2). Clear today's due cards every day, then work down the overdue pile with a rising daily quota (Nielsen used 100, 150, 200, 250, 300), or use a catch-up filtered deck. FSRS Helper's Postpone can push the least-urgent cards out. 8) Smooth the week with Easy Days and the Load Balancer (Anki 24.11+). 9) Prune ruthlessly: suspend or delete cards for things you no longer care about (Gwern: trivia leads to skipped reviews, then to quitting).

**concrete_example**: Budget: 20 min/day. Settings: FSRS on, desired retention 0.90, new cards/day 12, maximum reviews/day 9999, leech threshold 8 (Tag Only, so you see it and rewrite), review sort order 'Due date, then random', Easy Days set to Reduced on Sunday. Expected after 2-3 months: ~120 reviews/day x ~9 s ≈ 18 min, plus 12 new cards x ~25 s ≈ 5 min, about 23 min in total (derived estimate). Signal: the 7-day average stays above 25 min, so drop new cards to 8. Backlog scenario: after a 3-week break, 1,500 cards are due. Set new cards to 0, switch sort to 'Ascending retrievability', and do today's due cards plus quotas of 150, 200, 250 and then 300 from the pile; it is cleared in about 7-8 days. Then restore 12 new cards/day. Ease-hell scenario (legacy SM-2): a card lapses 6 times and its ease drops 250% to 130%, so its intervals grow only 1.3x per Good (1, 1.3, 1.7, 2.2, 2.9 days ...) and it keeps eating reviews. Fix: rewrite the card or move to FSRS, rather than pressing Easy to pump the ease back up.

**from_own_notes**: Making cards from your own notes amplifies two of these pitfalls. 1) Over-carding: a vault holds thousands of highlights and bullets, and turning each into a card is the fastest route to review debt. Apply the Nielsen/Gwern test per card (will not knowing this cost me 5-10 minutes in the future?) and Nielsen's guidance to skip sources that yield fewer than ~5 good questions. 2) Orphaned or stale cards: a card cut off from its note loses context and becomes a leech; Nielsen observed that lonely single-question topics are recalled poorly. Keep a back-link from every card to its source note (note path or block ID in a field), so a leech can be fixed at the source. Often the leech means the note itself is unclear, and rewriting the note fixes both. When a note is revised, re-check its cards. Use tags from the note (topic, book) to suspend a whole cluster when a project ends. In the Obsidian Spaced Repetition plugin, scheduling data lives in the note's YAML front matter or in comments, and the button semantics differ: Hard is its failing grade. Pick one tool's grading convention and stick to it.

**time_cost**: Steady state for practitioners is ~15-20 min/day for decks of 10,000-18,000 cards (Nielsen; Gwern), with ~8 s per review. The Anki manual's rule of thumb is 20 new/day, giving ~200 reviews/day, or roughly 27-33 min/day of reviews at 8-10 s each (derived). New cards cost extra time for first exposure and learning steps. Lifetime cost per card is ~2-7 min (Gwern 1.8 min rounded up to 5; Nielsen 4-7 min). In the 90% vs 70% retention simulation, workload was ~24 vs 13-23 min/day at 10 new cards/day. Heavy medical users log far more: a mean of 178.8 h in a preclinical year (Winter 2025; see the medical-education item).

**knowledge_type_fit**: Workload discipline matters most for large, fact-heavy decks: vocabulary, medicine, law, and dates and names. Similar-looking items in those decks (synonyms, drug names, lists) are the main source of leeches through interference. Conceptual prompts in the Matuschak/Nielsen style produce smaller decks but slower reviews per card. Lower desired retention (0.80-0.85) suits 'nice to know' material; higher (0.90-0.95) suits exam-critical or professional must-know facts. SRS does not fit anything needed in under ~5 days (Gwern) or trivia you do not care about.

**failure_modes**: 1) Review debt: skipped days compound, the due count balloons, and the user quits. A low 'Maximum reviews/day' cap hides the debt instead of preventing it. 2) Too many new cards: front-loading hundreds of new cards in the first days, or carding every highlight (Anki manual warning). 3) Grade misuse: pressing Hard when you forgot inflates FSRS stability, so intervals become 'unreasonably high' and true retention falls below target. Pressing Easy to rescue ease, or grading by the interval preview instead of the recall experience, are related errors. 4) Ease hell (SM-2): repeated Again/Hard pins ease at the 130% floor and intervals crawl. 5) Leeches left in rotation: 8+ lapses each costing a relearning cycle, usually from violating the minimum-information principle or from interference with sibling cards. 6) Retention set too high: 0.95-0.99 gives brutal workload for tiny gains; set too low and you are demoralised by forgetting. 7) Fiddling: constantly changing settings, or using interval-changing add-ons together with FSRS (the FSRS docs advise against it), plus what Nielsen calls 'programmer's efficiency disease'. 8) Pattern-matching: recognising a card by its look or deck order rather than recalling it; the manual warns that 'Deck, then due date' ordering makes answers guessable from context. 9) Obligation cards: cards made to stockpile knowledge for a hypothetical future feel lifeless and get skipped (Nielsen).

### Tools

**status_2026**: Anki 23.10 (Nov 2023) added FSRS, with 'Relative overdueness' and retrievability-based sort orders. Anki 24.11 added the Load Balancer, Easy Days, an FSRS simulator in deck options, and descending-retrievability sorting for backlogs; FSRS-5 added mean reversion of difficulty against 'difficulty hell'. Anki 25.07 shipped FSRS-6, removed 'Compute Minimum Recommended Retention', and added an experimental 'Help Me Decide' workload simulation. Per-deck desired retention within a preset is available in the latest version. Ankitects discussed making button semantics clearer in the UI (forum thread on Hard misuse, Sept 2024). FSRS Helper's 'Remedy Hard Misuse' can rewrite past Hard presses to Again.

**data_ownership_and_format**: Scheduling state and review logs live in the local Anki collection (SQLite) and sync via AnkiWeb; FSRS parameters are stored per preset. FSRS Helper's 'Remedy Hard Misuse' rewrites review history, which needs a backup first, though it is undoable via a record file. The Obsidian SR plugin stores due dates and ease in the Markdown notes themselves, which is git-friendly but mixes scheduling noise into your notes.

**automation_interface**: FSRS Helper add-on: Postpone, Advance, Flatten (caps future daily reviews), Load Balance, Easy Days on specific dates, Steps Stats, and Remedy Hard Misuse. AnkiConnect exposes due counts and card info for scripts or agents, e.g. a daily budget check. ts-fsrs and py-fsrs can reproduce workload simulations outside Anki. Anki's search syntax (e.g. 'prop:due<=-1', 'tag:leech') supports scripted catch-up filtered decks.

### Links

**relation_to_vault_notes**: Learn Like a Pro (Oakley & Schewe) recommends spaced repetition but says little about upkeep. This item covers the maintenance side: budget, grading and pruning. It also echoes Oakley's warning against illusions of competence: honest Again grading is the SRS version of not fooling yourself. Zettelkasten / How to Take Smart Notes (Ahrens): leeches often signal a note you have not understood or elaborated, so fix it in the slip-box, not by drilling. Cornell notes: cue-column questions are natural card candidates, but only the ones passing the 5-10-minute test. Building a Second Brain (Forte): capture is cheap, review is not, so do not route every captured highlight into SRS.

**sources**:
- https://docs.ankiweb.net/deck-options.html (Anki Manual: limits, 10:1 review ratio, sort orders, desired retention, simulator, Easy Days, SM-2 settings)
- https://docs.ankiweb.net/leeches.html (Anki Manual: leech threshold and handling)
- https://docs.ankiweb.net/studying.html (Anki Manual: meaning of answer buttons, 80-95% Good)
- https://docs.ankiweb.net/faqs/what-spaced-repetition-algorithm.md (Anki FAQ: SM-2 ease changes, 130% floor, FSRS difficulty)
- https://github.com/open-spaced-repetition/fsrs4anki/blob/main/docs/tutorial.md (FSRS tutorial: Hard is a pass, desired retention range)
- https://github.com/open-spaced-repetition/fsrs4anki/wiki/The-optimal-retention (FSRS wiki: workload vs retention, CMRR)
- https://github.com/open-spaced-repetition/fsrs4anki-helper (FSRS Helper: Postpone, Flatten, Remedy Hard Misuse)
- https://github.com/ankitects/anki/releases/tag/24.11 (Anki 24.11: load balancing, Easy Days, simulator, backlog sorting)
- https://www-v1.supermemo.com/archives1990-2015/help/fi (SuperMemo: forgetting index, workload, 25-30% acquisition optimum)
- https://supermemo.guru/wiki/Leech (Wozniak: leeches come from violating the 20 rules)
- https://augmentingcognition.com/ltm.html (Nielsen 2018: 8 s per review, 4-7 min per card, 20-minute signal, orphan cards)
- https://gwern.net/spaced-repetition (Gwern: 5-minute rule, workload figures, what not to add)
- https://domenic.me/fsrs/ (Denicola: 90% vs 70% retention workload simulation)
- https://forums.ankiweb.net/t/how-to-prevent-users-from-misusing-hard-ideas-are-welcome/49092 (Expertium, Sept 2024: Hard misuse)
- https://forums.ankiweb.net/t/adressing-backlog/43842 (Anki forum: backlog strategies)
- https://kuroahna.github.io/anki_srs_kai/guide/issuesWithAnkiSM2.html (ease hell explanation)
- https://skerritt.blog/difficulty-hell-in-anki/ (difficulty hell and FSRS-5 mean reversion; secondary)
- https://stephenmwangi.com/obsidian-spaced-repetition/algorithms/ (Obsidian SR plugin SM-2-OSR rules)
- https://www.remnote.com/fsrs-retention-calculator (third-party retention calculator; secondary)

**last_verified**: 2026-11-13. Primary sources were checked directly: the Anki Manual (deck options, leeches, studying, algorithm FAQ), the FSRS tutorial and wiki, the FSRS Helper README, the Anki 24.11 release notes, the SuperMemo forgetting-index help, Nielsen's essay and Gwern's essay. The retention-workload multipliers (2x/3x) and the ~10% Hard-misuse estimate come from secondary sources and forums and are flagged uncertain. Per-day time estimates in how_to_apply and concrete_example are my derivations from the Anki 10:1 ratio and Nielsen's 8 s per review.

### Other Info

**uncertain** (left out):
- availability_and_price
- maintenance_signals
- numbers_or_effect_sizes
- obsidian_integration
- origin

## Spaced repetition vs Zettelkasten: what to memorise vs what to link

### Basic Info

**name**: Spaced repetition vs Zettelkasten: what to memorise vs what to link

**category**: workflow

**origin**: Two traditions meet here. The first is the slip-box: Niklas Luhmann's Zettelkasten (1950s-1990s), popularised by Sönke Ahrens's 'How to Take Smart Notes' (2017), and Andy Matuschak's 'evergreen notes' (working notes, ~2019 onwards). The second is spaced repetition: Leitner (1972), SuperMemo (1987), Anki (2006). The bridge was proposed by practitioners. Michael Nielsen's 'Augmenting Long-term Memory' (2018) and Matuschak & Nielsen's mnemonic medium (Quantum Country, 2019) led to Matuschak's notes on a 'personal mnemonic medium', with prompts embedded in one's own notes (~2020). The underlying cognitive science contrasts retrieval practice (Karpicke & Blunt 2011) with generative or elaborative learning (Roelle & Nückles 2019; Obergassel et al. 2025).

**one_line**: A decision rule for a notes vault: link what you want to think with, make cards for what you must recall reliably without looking it up, and make every card point back to the note that explains it.

### Evidence

**key_studies**:
- Karpicke & Blunt 2011, Science 331:772-775. Retrieval practice (free recall of a science text) beat elaborative studying with concept mapping on a 1-week delayed test. The advantage held for verbatim and inference questions, and even when the final test was itself a concept map. Contested by Mintzes et al. 2011 (Science 334, comment) on methodological and epistemological grounds.
- O'Day & Karpicke 2021, Journal of Educational Psychology 113(5):986-997, two experiments. Retrieval again beat concept mapping at 1 week. Concept mapping before retrieval added no benefit beyond retrieval alone, even though the combined group spent substantially more time. The paper also reviews Rummer et al. 2017: retrieval beat note-taking on a 2-week free-recall test, and note-taking plus retrieval was no better than retrieval alone.
- Obergassel, Renkl, Endres, Nückles, Carpenter & Roelle 2025, Journal of Educational Psychology 117(6):980-997 (n = 306 students, four psychology concepts). Generating one's own examples (a generative, elaborative task) improved comprehension but not retention. Retrieval with feedback improved delayed retention but not comprehension. Combining both beat either alone on both outcomes, with no significant order effect. Roelle & Nückles 2019 (Journal of Educational Psychology 111(8):1341-1361): generative tasks yield deeper understanding, retrieval yields less forgetting, and which wins depends on how cohesive and elaborated the text is.
- Practitioner theory. Ahrens 2017 calls elaboration the best-researched learning method; the slip-box takes over storage so the head can work on understanding, and its use 'forces us to do exactly what is recommended'. Matuschak's working notes argue three points. Evergreen-note maintenance approximates spaced repetition, but without the testing effect and only for topics you keep touching. Existing SRS 'discourage evergreen notes', because prompts float 'in an undifferentiated mist', unlinked. The remedy is a personal mnemonic medium with prompts embedded in notes. Dunlosky et al. 2013 (Psychological Science in the Public Interest) rated practice testing and distributed practice 'high utility', elaborative interrogation and self-explanation 'moderate', and summarisation, highlighting and rereading 'low'.

**evidence_strength**: moderate for the division of labour, but untested for the Zettelkasten-to-SRS workflow itself. Several controlled studies support three points: retrieval practice beats elaboration-only activities (concept maps, note-taking) for retention; generative and elaborative tasks add comprehension that retrieval alone does not; and combining them is best (Karpicke & Blunt 2011; O'Day & Karpicke 2021; Rummer et al. 2017; Roelle & Nückles 2019; Obergassel et al. 2025). No study tests Zettelkasten or evergreen-note writing, or decks made from slip-box notes. Ahrens's and Matuschak's specific claims are theory and practitioner reports, i.e. anecdotal.

**evidence_setting_and_comparator**: Lab and classroom experiments with university students learning short educational texts (science passages, psychology concepts). The comparisons are retrieval practice vs elaborative concept mapping, note-taking, restudy, or a combination (Karpicke & Blunt 2011; O'Day & Karpicke 2021; Rummer et al. 2017), and generation of examples vs retrieval vs restudy vs combinations (Obergassel et al. 2025; Roelle & Nückles 2019). There are no field or observational studies of Zettelkasten or Obsidian users. The workflow advice comes from practitioner essays and forum discussions (Nielsen, Matuschak, Zettelkasten.de forum).

**retention_interval_tested**: 1 week (Karpicke & Blunt 2011; O'Day & Karpicke 2021; Obergassel et al. 2025, immediate vs 1 week) and 2 weeks (Rummer et al. 2017). No study compares linking with carding over months or years, the horizon a slip-box is built for.

**replication_status**: Retrieval beating concept mapping has been replicated by the same lab (Blunt & Karpicke 2014; O'Day & Karpicke 2021) and by others (Lechuga, Ortega-Tudela & Gómez-Ariza 2015, as cited by O'Day & Karpicke). Concept-mapping researchers contest it (Mintzes et al. 2011). The complementarity of generation and retrieval rests mainly on one research network (Roelle, Nückles, Renkl and colleagues, 2019-2025) and has limited independent replication. Zettelkasten-specific or evergreen-note-specific effects have not been studied. O'Day & Karpicke published their materials and data.

### Practice

**how_to_apply**: 1) Write the note first. Restate the idea in your own words, link it to at least two existing notes and add an example. This generative step is what builds comprehension (Obergassel 2025), and it is the step you skip if you card raw highlights. 2) Then ask the card question. Make cards when: (a) you must recall it on the spot, without the vault (in a meeting, while coding, in an exam, in a clinical or professional decision); (b) looking it up would cost more than 5-10 minutes over your lifetime or would break your flow (Gwern/Nielsen rule); (c) other ideas are built on it (definitions, distinctions, key numbers, names, formulas, procedure steps); (d) you will use it over months. 3) Link, don't card, when: it is an argument or claim still developing; it matters only while writing about the topic (the slip-box can 'remember' it for you); it is a detail you can look up in seconds; or it is a judgement that depends on context. 4) Write 2-5 focused prompts per carded note, never a single orphan. Include at least one connection prompt ('How does X differ from Y?' or 'Why does X imply Y?') so retrieval exercises the links, not just isolated facts. 5) Give every card a back-link to its source note (note title or Obsidian URI in a 'Source' field), and keep cards inline in the note where possible so the note stays the source of truth. 6) Close the loop: when a card lapses repeatedly or feels hollow, open the source note and rewrite it, as more elaboration rather than more drilling. When you revise a note, re-check its cards. 7) For ideas rather than facts, use spaced note review instead of Q&A: tag notes '#review' in the Obsidian Spaced Repetition plugin, or keep a Matuschak-style 'writing inbox' where each resurfaced idea is marked fruitful or unfruitful. 8) Retire cards when the project ends; the notes remain.

**from_own_notes**: This item is about exactly that. Own-note cards earn their keep only after the note has done the elaboration, which is why 'note first, card second' matters; carding unprocessed source text skips the generative step. The generation effect for self-made cards (d ≈ 0.45, Pan et al. 2023) argues for writing prompts yourself rather than importing premade decks. Keep the note as the source of truth: either cards live inline in the note (Obsidian SR plugin, Matuschak's personal mnemonic medium) or synced cards carry a link back (Obsidian_to_Anki file link, Orbit note-sync). Zettelkasten (Ahrens): only permanent notes in your own words are candidates; fleeting and literature notes are not. Book notes: card the 3-10 ideas you actually want to keep, and link the rest. Cornell notes: the cue column is a ready-made list of candidate prompts, and the summary row is a candidate connection prompt. Building a Second Brain: progressive summarisation helps find the card-worthy core, but most captured material should stay searchable, not memorised.

**time_cost**: Each card costs ~2-7 minutes of lifetime review (Gwern ~1.8 rounded up to 5; Nielsen 4-7), plus writing time; curated curriculum cards took ~7 min each to build (Harder et al. 2026). That is why cards must pass the 5-10-minute value test. At a sustainable ~15-20 min/day of review, a vault can feed roughly 10-15 new cards a day (see the pitfalls item). Linked notes have no scheduled review cost, but writing them takes much longer per idea; Matuschak treats rewriting as the point, not overhead. Adding an elaborative activity on top of retrieval costs extra time, and paid off for comprehension in Obergassel 2025 but not for retention in O'Day & Karpicke 2021.

**knowledge_type_fit**: Cards: definitions, terminology, names, dates, numbers, formulas, API or keyboard specifics, procedure steps, crisp distinctions, and key claims or quotes you want to retrieve in conversation. Salience prompts help you notice when an idea applies (see the mnemonic-medium item). Links and notes: arguments, syntheses across sources, open questions, evolving positions, comparisons, and project-specific details you can look up. Ideas in development (inklings): spaced note review or a writing inbox rather than Q&A cards (Matuschak). Poor fit for cards: long lists, opinions you are still forming, anything you will need for less than ~5 days.

**failure_modes**: 1) Carding every permanent note, which leads to review overload and quitting (see the pitfalls item). 2) Orphan cards with no back-link: they lose context, become leeches and cannot be fixed at the source (Nielsen; Matuschak's 'undifferentiated mist'). 3) Skipping the generative step by turning raw highlights or quotes into cards: you memorise wording without understanding, and the cards invite pattern-matching. 4) Treating note re-reading or resurfacing as retrieval practice, which builds familiarity, not recall, and creates an illusion of competence. 5) Stale cards: the note is revised but the card still says the old thing. 6) Double maintenance: keeping the same content in Anki and Obsidian by hand, so they drift apart (Matuschak). 7) Using the slip-box for knowledge needed on the spot; a Zettelkasten forum member (a medical student) found it unhelpful for drug dosing and first-line treatments. 8) Collector's fallacy: many notes and many cards, but little writing or use.

### Tools

**obsidian_integration**: Inline cards: the Obsidian Spaced Repetition plugin parses cards inside notes ('::' single-line, '?' multi-line, ==highlight== cloze), so each card lives in its source note. A separate note-review mode schedules whole notes tagged #review, which is spaced resurfacing of ideas rather than testing. FSRS has been an opt-in scheduler since plugin 1.15.0 (May 2026). Anki route: Obsidian_to_Anki (via AnkiConnect) can add a file link to a configurable field and add note context. Variants include Obsidian_to_Anki_Kai (per-note-type link settings) and plugins such as 'Anki card link'. Orbit has a note-sync component that pulls prompts from Markdown notes. Community tools such as files2flashcards (a Zettelkasten.de forum member) generate Anki cards from note files.

**automation_interface**: AnkiConnect (used by Obsidian_to_Anki; also callable by scripts and AI agents to create cards with a 'Source' back-link field). Orbit's note-sync and API (experimental). ts-fsrs and py-fsrs for building a custom note-to-card scheduler. An agent can propose 2-5 prompts per permanent note with a back-link, leaving the accept-or-reject decision to the human, which preserves the generation step (see the LLM-generated flashcards item).

**maintenance_signals**: st3v3nmw/obsidian-spaced-repetition: ~2.6k GitHub stars, MIT, frequent 2026 releases, last push 1 Nov 2026. ObsidianToAnki/Obsidian_to_Anki: ~2.0k stars, GPL-3.0, last release 3.6.0 on 24 Jan 2024. andymatuschak/orbit: ~1.8k stars, last push 20 Oct 2026, no tagged releases. Figures checked via the GitHub API on 2026-11-13.

### Links

**relation_to_vault_notes**: Zettelkasten / How to Take Smart Notes (Ahrens): permanent notes are the generative step, and cards are an optional retention layer on top, used only for knowledge needed without the slip-box. Learn Like a Pro (Oakley & Schewe): the book pairs elaboration with spaced retrieval, which matches the combined-task evidence (Obergassel 2025). Cornell notes: the cue column is a set of self-generated prompts, the bridge from note to card. Building a Second Brain (Forte): an external memory means most captures should be findable, not memorised; card only the distilled core. Mind map: like concept mapping, it is an elaborative activity that does not replace retrieval (Karpicke & Blunt 2011; O'Day & Karpicke 2021).

**sources**:
- https://doi.org/10.1126/science.1199327 (Karpicke & Blunt 2011, Science; abstract via Europe PMC)
- https://doi.org/10.1126/science.1203698 (Mintzes et al. 2011, comment on Karpicke & Blunt)
- https://learninglab.psych.purdue.edu/downloads/2021/2021_ODay_Karpicke_JEDP.pdf (O'Day & Karpicke 2021, Journal of Educational Psychology 113(5):986-997; abstract and introduction read)
- https://firth.substack.com/p/combining-retrieval-practice-and (summary of Obergassel et al. 2025, Journal of Educational Psychology 117(6):980-997; secondary)
- https://www.pe.ruhr-uni-bochum.de/erziehungswissenschaft/bildungspsychologie/research/combining.html.en (DFG project combining generative and retrieval tasks)
- https://cris-portal.uni-muenster.de/portal/en/publication/171863072 (Combining generative tasks and retrieval tasks; cites Roelle & Nückles 2019)
- https://doi.org/10.1177/1529100612453266 (Dunlosky et al. 2013, utility ratings of learning techniques)
- https://notes.andymatuschak.org/Evergreen_note_maintenance_approximates_spaced_repetition
- https://notes.andymatuschak.org/zMXZQANJPzCDUFPrUAYAFrn (Existing spaced repetition systems discourage evergreen notes)
- https://notes.andymatuschak.org/zWWh96dE6YZYmDCoo37977X (The mnemonic medium can be extended to one's personal notes)
- https://notes.andymatuschak.org/zSK4LyrCbG9zDrdCWmcovUW (Spaced repetition may be a helpful tool to incrementally develop inklings)
- https://augmentingcognition.com/ltm.html (Nielsen 2018: 10-minute rule, orphan questions, Anki and creative work)
- https://gwern.net/spaced-repetition (Gwern: 5-minute rule)
- https://www.sloww.co/how-to-take-smart-notes/ (summary of Ahrens 2017 on elaboration and the slip-box; secondary)
- https://forum.zettelkasten.de/discussion/1594/how-do-you-incorporate-memorization-with-the-zettlekasten-method (Zettelkasten.de forum, Jan 2021: integration vs separation)
- https://stephenmwangi.com/obsidian-spaced-repetition/notes/ (Obsidian SR plugin: note review)
- https://github.com/st3v3nmw/obsidian-spaced-repetition/releases (SR plugin 1.15.0: FSRS opt-in)
- https://github.com/ObsidianToAnki/Obsidian_to_Anki (Obsidian_to_Anki repository)
- https://forum.obsidian.md/t/obsidian-to-anki-v3-4-0-a-feature-rich-plugin-that-allows-you-to-add-notes-from-obsidian-to-anki/5030 (Add File Link and context features)
- https://github.com/andymatuschak/orbit (Orbit repository)

**last_verified**: 2026-11-13. Primary sources read directly: the Karpicke & Blunt 2011 abstract and the Mintzes 2011 comment (Europe PMC), the O'Day & Karpicke 2021 PDF (abstract and introduction), the Dunlosky 2013 abstract, Matuschak's working notes, Nielsen's and Gwern's essays, the Obsidian SR plugin docs and GitHub releases, and GitHub API repository stats. Secondary sources: Obergassel et al. 2025 (Substack summary; the original was not read), Roelle & Nückles 2019 (cited via a 2022 review), and Ahrens 2017 (book summaries, since the book text was not consulted). Effect sizes for the combination studies were not extracted.

### Other Info

**uncertain** (left out):
- availability_and_price
- concrete_example
- data_ownership_and_format
- limitations_and_criticism
- numbers_or_effect_sizes
- status_2026
