---
title: "Zettelkasten"
date:  2022-08-28
enableToc: true
openToc: true
tags: ["knowledge", "info", "zettelkasten", "slip-box", "obsidian", "notes"]
type: knowledge-note
summary: "Zettelkasten (slip-box): one idea per note, in your own words, linked to other notes — Luhmann's system, Ahrens' 8 steps, a worked example and how I run it in Obsidian with AI agents."
agent-reviewed: 2026-11-13
---

The concept from the book [[LIFE/BOOKS/How to take smart notes]]

## 🗒️ What it is
*Zettelkasten* is German for "slip box": a box of index cards. Each card holds **one idea, written in your own words**, and points to other cards. Over time the links matter more than any single card. You end up with a network you can think with, not an archive you file things into.

The method comes from the German sociologist **Niklas Luhmann** (1927–1998). He kept two card collections over more than four decades, about 90,000 handwritten A6 cards in total:
- **First collection (about 1951–1962):** about 23,000 cards in 108 sections, with a keyword index of about 1,250 entries.
- **Second collection (1963–1997):** about 67,000 cards, with a keyword index of 3,200 entries and about 30,000 cross-references between cards.

He credited the box for his output: more than 500 publications by the time he died. Bielefeld University now holds the collection and is publishing it online at the Niklas Luhmann-Archiv.

What made Luhmann's box work was not the cards but three rules:
1. **Atomic notes** — one idea per card, small enough to be linked precisely.
2. **Fixed addresses** — every card has a permanent number. A card that continues or branches a thought is filed right behind it with a longer number: `1/1` → `1/1a` → `1/1b` → `1/1b1`. Numbers could grow to 13 characters, like `21/3a1p5c4fB1a`. Ideas grow inward in chains, which practitioners call *Folgezettel*.
3. **Links and an index** — cards reference other cards by number, and the keyword index lists only one to four entry points per term, not every card that mentions it.

## The 8 Steps of Taking Smart Notes

Ahrens recommends the following 8 steps for taking notes:

1. Make fleeting notes
2. Make literature notes
3. Make permanent notes from literature and fleeting notes
4. File permanent notes in slip-box 
5. Make references to other notes.
6. Add permanent note to index (by keyword).
7. Add tags to note.
8. Elaborate - look for connections with other notes and add relations

Hints: 

1. Read with a pen in your hand.
2. Don't try to confirm what you already know.
3. Write notes for You in the future (you might not know the context and general knowledge)
4. Make smart notes part of your reading routine.
5. Elaborate - look for connections with what you already know.

## 🧩 Worked example: from a highlight to a permanent note
**1. Fleeting note** (phone, during a walk):
> spacing > cramming? check

**2. Literature note** (while reading, with the source):
> Dunlosky et al. 2013 rate distributed practice and practice testing as the only two "high utility" techniques out of ten; highlighting and re-reading rated low. — *Psych. Science in the Public Interest* 14(1)

**3. Permanent note** — a title that states the claim, body in my own words, links:
```markdown
# Re-reading feels productive but tests nothing

Re-reading makes material feel familiar, and familiarity is
easy to mistake for knowing. Testing yourself (recall without
looking) and spacing sessions out both beat it in controlled
studies. The feeling of fluency is a bad guide to what I'll
remember next month.

Links: [[Spaced Repetition and Flashcards from Your Own Notes]],
[[Cornel Notes Taking System]] (the recite step),
[[Learn Like a Pro]]
Source: Dunlosky et al. 2013
```
**4. Index:** the note gets linked from the "learning" entry point. Only one link is needed there; the rest of the network is reachable through the note's own links.

The test of a good permanent note: someone who never read the source understands it, and it says something you could disagree with.

## My workflow
My workflow has changed since I started this note in 2022. Today the slip-box is this Obsidian vault and an AI agent does much of the filing:

1. **Capture (fleeting):** anything worth keeping — an article, a video transcript, a thought — goes into an inbox folder as a raw file.
2. **Process (literature → permanent):** an agent reads the inbox, writes notes in a fixed format (summary, key points, sources, claim check) and files them by topic.
3. **Link:** every new note gets links to existing ones, and the agent updates backlinks so links go both ways.
4. **Index:** three index files (a folder map, a one-line catalogue of every note, a link graph) play the role of Luhmann's keyword register.
5. **Elaborate:** rereading a cluster of notes, noticing a tension, writing a new note about it. An agent can suggest connections, but this step is the thinking itself and should stay human.

The trade-off: the agent makes filing nearly free, so the risk shifts from "not enough notes" to "notes nobody really thought about". Ahrens would say that's not a Zettelkasten anymore, just a collection. Step 5 is what keeps it a slip-box. The full setup is in [[Building an AI Second Brain]] and [[LLM Knowledge Bases]].

## ⚠️ Common mistakes
- **Collector's fallacy** — saving highlights feels like learning but isn't. Christian Tietze's phrase: knowing *about* something is not the same as knowing it. A note you didn't rewrite is a bookmark.
- **Copying Luhmann's numbering blindly** — in a digital tool, links and a few "structure notes" (a note that lists and orders other notes) give the same context. Whether fixed sequence numbers are still worth it is an open debate among practitioners (see "The Great Folgezettel Debate" on zettelkasten.de).
- **Notes too big** — a note with five ideas can only be linked as a blob. Split it.
- **Folders instead of links** — a topic folder is fine for storage, but the value is in links *across* folders.
- **Orphans** — a note with no links is lost. Link every new note to at least one existing note.
- **Tagging everything** — tags are for broad retrieval; the precise connections are links.
- **Mistaking it for memorisation** — a slip-box remembers *for* you. If you need to recall something without the box (an exam, a talk, a language), add flashcards. See [[Spaced Repetition and Flashcards from Your Own Notes]].

## 🔗 Related
- [[LIFE/BOOKS/How to take smart notes]] — the book that describes the method
- [[LIFE/BOOKS/Building a Second Brain]] — the project-first alternative: notes organised around what you produce
- [[Cornel Notes Taking System]] — good for the literature-note stage of a lecture or chapter
- [[Mind map]] — a map per topic works as an entry point into the network
- [[LIFE/TOOLS/Obsidian]] — the tool I run my slip-box in
- [[Second Brain Design]] — capture, organise, retrieve with AI on top of the same idea
- [[Spaced Repetition and Flashcards from Your Own Notes]] — what to memorise vs what to keep in the box

## Resources
[Zettelkasten - jak robić wartościowe notatki | Paweł Kadysz (pwlk.pl)](https://pwlk.pl/zettelkasten/) #reading-list/social-sciences 
- [Niklas Luhmann-Archiv — the digitised slip-box (Bielefeld University)](https://niklas-luhmann-archiv.de/)
- Schmidt, J. F. K. (2018). Niklas Luhmann's Card Index: The Fabrication of Serendipity. *Sociologica*, 12(1), 53–60. [doi:10.6092/issn.1971-8853/8350](https://doi.org/10.6092/issn.1971-8853/8350) — the numbers above come from here; Schmidt coordinates the archive project
- [Zettelkasten.de — practitioner guides and forum](https://zettelkasten.de/)
- [The Collector's Fallacy — Christian Tietze, zettelkasten.de (2014)](https://zettelkasten.de/posts/collectors-fallacy/)
- [The Great Folgezettel Debate — zettelkasten.de](https://zettelkasten.de/folgezettel/)
- Sönke Ahrens, *How to Take Smart Notes* — see [[LIFE/BOOKS/How to take smart notes]]
