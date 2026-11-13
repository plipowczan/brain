---
title: "Cornel Notes Taking System"
date: 2022-08-21
enableToc: true
openToc: true
tags: ["knowledge", "info", "notes", "learning", "journaling"]
type: knowledge-note
aliases: ["Cornell Notes", "Cornell Note-Taking System"]
summary: "Cornell note-taking: split the page into cue column, notes and summary, then use the cues to quiz yourself — layout, the 5 Rs, a filled example and an Obsidian template."
agent-reviewed: 2026-11-13
---

# Cornel Notes Taking System

Cornell Note Taking System is a solution for taking, organizing and reviewing notes and has been devised by Prof. Walter Pauk of Cornell University in the 1950s. It turned out to be an effective way to take notes and organize information. This system allows you to quickly identify and record key information. It also provides a way to review and recall information later.

It is based on the simple principles:

Divide notes page into 4 sections:
1. Title section (optional)
2. Keywords/comments/questions section (30% width)
3. Notes section (70% width)
4. Summary section

Like this:
![[ATTACHMENTS/Pasted image 20220821205449.png]]

The same layout as text (in case the image doesn't load):

```text
┌──────────────────────────────────────────────────────────┐
│ Title · date · source (lecture, chapter, meeting)        │
├──────────────────┬───────────────────────────────────────┤
│ CUES (~30%)      │ NOTES (~70%)                          │
│                  │                                       │
│ keywords         │ main ideas, facts, examples,          │
│ questions        │ diagrams — written during the         │
│ comments         │ lecture or reading, in short          │
│                  │ phrases, not full sentences           │
│ (filled in       │                                       │
│  AFTER class)    │                                       │
├──────────────────┴───────────────────────────────────────┤
│ SUMMARY (bottom ~5 lines): the whole page in 2–3         │
│ sentences, in your own words                             │
└──────────────────────────────────────────────────────────┘
```

On a letter-size sheet Pauk's proportions are a 2½-inch cue column on the left, a 6-inch notes column on the right and a 2-inch band at the bottom for the summary. On A4 the same split works: about 6 cm for cues and 5 cm at the bottom.

Walter Pauk (1914–2019) directed Cornell's Reading and Study Skills Center. He described the system in *How to Study in College*, first published in 1962 and still in print in new editions.

As you listen to a lecture or read a chapter, record the main ideas in the "Notes" section. Then, write down key details and your thoughts in the "Keywords/comments/questions" section.

When you're finished taking notes, review each section and highlight important points. Then, create a summary of your notes by writing a brief overview of the main ideas in the "Summary" section.

## The 5 Rs — how Pauk meant it to be used
The page layout is only half of the method. The other half is what you do with it:

1. **Record** — during the lecture or reading, write the main ideas in the notes column. Telegraphic style, leave space.
2. **Reduce** (some editions call it *Question*) — soon after, condense the notes into keywords and **questions** in the cue column.
3. **Recite** — cover the notes column, look only at the cues, and answer each question out loud in your own words. Then uncover and check.
4. **Reflect** — ask what it means, how it connects to what you already know, and where it applies.
5. **Review** — spend at least ten minutes every week going back over your notes with the recite step, not just the night before the exam.

Some course handouts add a sixth R, *Recapitulate* (writing the summary). The versions adapted from Pauk's own book list five.

Step 3 is the important one. It turns the page into a self-test. The cue column is a set of flashcards printed next to their answers. Step 5 is spaced repetition done on paper.

## Example: a filled page

```text
Title: Spacing effect — lecture 3 · 2026-11-13

CUES                         │ NOTES
─────────────────────────────┼─────────────────────────────────────
What is the spacing effect?  │ Same study time, split into sessions
                             │ with gaps → better long-term recall
                             │ than one block (massed practice)
Who first described it?      │ Ebbinghaus, 1885, self-experiments
                             │ with nonsense syllables
Why does recall help more    │ Retrieval strengthens memory more
than re-reading?             │ than re-reading (testing effect)
How long should the gap be?  │ Depends on how long you need to
                             │ remember: longer goal → longer gaps
─────────────────────────────┴─────────────────────────────────────
SUMMARY: Spread study over time and test yourself instead of
re-reading; the gap should grow with how long you need to remember.
```

To review this page, cover the right column and answer the four questions on the left.

# Why Should You Use Cornell Notes?

Besides being a very efficient way of taking great notes in class, Cornell note taking is THE perfect tip for exam preparation. Here's why:

The system itself encourages you to reflect on your notes by actively summarizing them in their own words. Often, this can already be enough to remember study notes and to successfully pass an exam.

When reviewing your notes it's also useful to reorder objects on the page, for example, to add a solution to an answer on the side to the notes.

### What the evidence says
- The parts of the method that matter most are well supported in learning research: **self-testing** (the recite step) and **spreading reviews over time** (the review step). Both are rated "high utility" in the big review of study techniques by Dunlosky and colleagues (2013).
- Studies of the Cornell *format* itself are few and small, with mixed results:
  - One study with 160 college students found Cornell notes beat outline notes, which beat verbatim notes (Akintunde, 2013; a low-profile journal, so treat it with caution).
  - A 2008 study found Cornell notes helped students *synthesise* material, while guided notes (a handout with gaps to fill) were better for plain recall (Jacobs, 2008).
  - A 2023 high-school study found no difference compared with notes in the students' own format (Quintus et al., 2023).
- The layout alone does not make you learn. Using the cue column to test yourself does.
- **Paper or laptop:** the method works in both. The cue and summary steps make you process the material either way, so the format matters less than doing those steps.

## Cornell notes in Obsidian
A plain Markdown version that survives any export:

```markdown
# Lecture 3 — Spacing effect
source: course X, 2026-11-13

## Notes
- Same study time split into sessions → better long-term recall
- Ebbinghaus 1885, nonsense syllables

## Cues
- What is the spacing effect?
- Who first described it?

## Summary
Spread study over time and test yourself instead of re-reading.
```

The order differs from paper (notes first, cues after) because Markdown has no columns. The cues can be turned straight into flashcards. See [[Spaced Repetition and Flashcards from Your Own Notes]]. Good literature notes in a [[Zettelkasten]] often start life as a Cornell page.

YT:
[How to Take Cornell Notes (with examples) - YouTube](https://www.youtube.com/watch?v=OcWfXWM4kco)

## 🔗 Related
- [[Mind map]] — complementary visual note-taking method for engaging both brain hemispheres
- [[Zettelkasten]] — another structured knowledge system built on connected, atomic notes
- [[Włam się do mózgu]] — book on effective learning techniques that motivates good note-taking habits
- [[Learn Like a Pro]] — describes the same idea as the "split notes method": cover the details, recall from the key ideas
- [[Spaced Repetition and Flashcards from Your Own Notes]] — the review step done properly: cues become flashcards, reviews get spaced out
- [[How to take smart notes]] — what to do with the page afterwards: turn it into permanent notes

## 📖 Further reading
- Walter Pauk, *How to Study in College* (Houghton Mifflin, 1962; 10th edition with Ross Owens, 2010) — the book that describes the system
- [The Cornell Note-taking System — Cornell University Learning Strategies Center](https://lsc.cornell.edu/how-to-study/taking-notes/cornell-note-taking-system/)
- [Cornell note-taking handout with the 5 Rs and page dimensions (Western Carolina University, adapted from Pauk, 7th ed.)](https://www.wcu.edu/_files/academic-success/CornellNoteTaking.pdf)
- [Cornell Notes — Wikipedia](https://en.wikipedia.org/wiki/Cornell_Notes) — summary of the (inconclusive) research on the format
- Dunlosky, J., et al. (2013). Improving students' learning with effective learning techniques. *Psychological Science in the Public Interest*, 14(1), 4–58. [doi:10.1177/1529100612453266](https://doi.org/10.1177/1529100612453266)
