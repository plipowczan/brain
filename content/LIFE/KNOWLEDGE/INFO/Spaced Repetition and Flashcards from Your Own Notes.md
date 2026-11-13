---
title: "Spaced Repetition and Flashcards from Your Own Notes"
date: 2026-11-13
enableToc: true
openToc: true
tags: ["knowledge", "info", "learning", "spaced-repetition", "flashcards", "anki", "obsidian", "research", "evidence-based", "compiled"]
type: compiled-note
source: "_raw/processed/2026-11-13-research-spaced-repetition-flashcards-own-notes.md"
agent-created: true
summary: "Evidence-graded guide to spaced repetition: why spacing and self-testing work, how Anki/FSRS schedule reviews, how to write cards from your own notes, which tools fit Obsidian, AI-made cards, and keeping the daily load sane."
---

# Spaced Repetition and Flashcards from Your Own Notes

## 🚀 The main message
- **Two of the best-supported findings in learning science do the work:** testing yourself beats re-reading, and spreading reviews over time beats cramming. A spaced repetition system (SRS) is just software that combines the two and decides *when* each card comes back.
- **Cards you write yourself, from notes you've already thought through, beat ready-made decks.** The act of writing the card is part of the learning.
- **A note and a card do different jobs.** Notes ([[Zettelkasten]]) develop ideas and remember them *for* you. Cards put the few things you must recall without looking into *your* head. Write the note first, then card only what has to be in your head.
- **The hard part isn't the algorithm, it's the habit.** Most people quit because of review debt: too many cards, too little time. Start from a daily time budget, not a card count.
- **AI can draft cards, but you have to choose what to card and check every draft.** In the best study so far, about a third of the cards from a top model were unusable, and AI judges couldn't reliably tell good cards from bad.

## 🗒️ Description
Spaced repetition means reviewing material at growing intervals, timed for just before you'd forget it. In practice that means **flashcards**, a question on the front and the answer on the back, managed by an app. When you answer a card, you grade yourself. The app then schedules the next review: a card you know well comes back in weeks or months, a card you failed comes back tomorrow.

The idea predates computers. Sebastian Leitner's box system (1972) used paper cards that moved to a less frequently reviewed box each time you got them right. Today the standard free tool is Anki, with the FSRS scheduler built in. Plugins also let you keep the cards inside your Obsidian notes.

This note is the practical side of the "spaced repetition" chapter in [[Learn Like a Pro]] and the missing piece in a [[Zettelkasten]]. The slip-box makes sure you never lose an idea. Spaced repetition makes sure you can use it without opening the box.

## 🧠 Why it works — what the evidence says
Evidence strength: **strong** = meta-analyses and many replications; **moderate** = several controlled studies; **weak** = few or small studies, observational data.

| Finding | What it says | Evidence |
|---|---|---|
| Spacing effect | The same study time spread over sessions beats one block | **Strong** |
| Testing effect (retrieval practice) | Recalling beats re-reading, especially at delays of a day or more | **Strong** |
| Successive relearning | Retrieve until correct, then repeat in later sessions | **Moderate** (mostly one research group) |
| Expanding intervals | Growing gaps are no better for memory than equal gaps of the same total | **Moderate** |
| Own cards vs premade decks | Writing your own cards beats studying someone else's | **Moderate** |
| Metacognitive illusions | People misjudge which study methods work for them | **Moderate** |
| Anki in real life (medical school) | Heavy users score a bit higher, but the studies can't show cause | **Weak** |

### Spacing: spread it out
- A meta-analysis of 271 comparisons found **47% recall with spaced study versus 37% with massed study** (Cepeda et al., 2006). Most of those studies tested within a day, though, and only 4% tested after more than a month.
- **The best gap depends on how long you need to remember.** In a large study, the best gap between two sessions was about 20–40% of the test delay when the test came a week later, and only about 5–10% when it came a year later (Cepeda et al., 2008). A gap that is too long costs much less than one that is too short.
- **The shape of the schedule matters less than the total spacing.** Expanding, equal and contracting schedules gave the same recall when the total spacing was equal (Karpicke & Bauernschmidt, 2011; Latimier et al., 2021). Apps use growing intervals because they save reviews, not because growing gaps help memory more.

### Testing: recall, don't re-read
- **The classic study:** after one week, students who had tested themselves recalled **61%** of a text, against **40%** for students who had re-read it. The re-readers had gone through the text about four times as often. Five minutes after studying, the order was reversed. That's why re-reading *feels* better (Roediger & Karpicke, 2006).
- **A meta-analysis** found a medium overall effect (g = 0.50). It was bigger with feedback (0.73) and with tests a day or more later (0.69). It disappeared when there was no feedback and learners got fewer than half the answers right (Rowland, 2014). Lesson: always check the answer.
- **Transfer is limited.** Testing helps with related questions too (d = 0.40, Pan & Rickard, 2018), but recalling a fact one way barely helps the reversed question. "Who bought Louisiana from France?" doesn't train "What did the US buy from France in 1803?" Write cards for the way you'll need the knowledge.
- **Weak spots:** effects are smaller for maths problems than for facts and concepts.

### The forgetting curve and "desirable difficulty"
- Ebbinghaus (1885) measured how much *relearning time* he saved, not how much he recalled. He saved 58% after 20 minutes, 34% after a day and 21% after a month. The popular "you forget 70% in a day" is a misreading of the one-day figure. A 2015 replication found the same shape (Murre & Dros, *PLOS ONE*).
- **Why a review on the edge of forgetting works best:** Robert and Elizabeth Bjork's theory separates *retrieval strength* (how easy it is to recall right now) from *storage strength* (how well it's learned). The easier a memory is to recall right now, the less a review adds. A review that takes effort but succeeds builds the most. That's the whole logic of a scheduler: show the card when recall has become hard but is still possible.

### Make your own cards
- **Six experiments with study time held equal:** students who made their own flashcards remembered definitions better than students given premade cards (d = 0.45) and did better on application questions (d = 0.29) (Pan et al., 2023).
- **How you make them matters.** Copying sentences word for word gave almost no benefit. Paraphrasing gave the largest one (d = 0.62).
- **Not universal:** in another study, students who chose their own content made mostly detail cards, spent more time and gained nothing (Lin, McDaniel & Miyatsu, 2018). Own cards help when they capture the important ideas in your own words.

### Don't trust your gut about what works
- Learners allowed to drop cards they "knew" did slightly worse. They dropped cards too early, often after a single correct answer (Kornell & Bjork, 2008).
- One big deck reviewed with long gaps beat four small decks crammed one after another for 90% of participants, yet 72% believed the opposite (Kornell, 2009). Trust the scheduler, not the feeling.
- **Mixing topics (interleaving)** helps when the categories look alike (g = 0.42 overall, Brunmair & Richter, 2019). It hurt for word lists. A deck that mixes related concepts is good; mixing everything isn't automatically better.

### Real life: Anki in medical school
Medical students are the biggest group of heavy Anki users, so most real-world data comes from them. Two 2026 systematic reviews found heavy users scored about 4–13 points higher on the US licensing exam (USMLE Step 1). But none of the studies was randomised, several found no difference, and almost all used premade decks. Expect modest gains on fact-heavy exams, and little for clinical reasoning. No real-world study has tested cards made from your own notes.

## ⚙️ How the schedulers work
| Scheduler | Idea | Where you meet it |
|---|---|---|
| **Leitner boxes** (1972) | Paper cards move to a less frequent box when right, back to box 1 when wrong | Paper, simple apps, kids' vocabulary |
| **SM-2** (Piotr Woźniak, 1987) | Each card has an "ease"; the interval is multiplied by it after each success | Anki's default until you switch FSRS on, the Obsidian Spaced Repetition plugin's default, many apps |
| **FSRS** (Free Spaced Repetition Scheduler, Jarrett Ye) | A memory model estimates, for each card, how likely you are to recall it today, trained on your own review history | Anki (opt-in since 23.10), Obsidian plugins, RemNote, Mochi |

- **SM-2's weakness is "ease hell".** In Anki's version every failed card loses ease (20 points for *Again*, 15 for *Hard*, down to a floor of 130%), and *Good* never gives it back. Six lapses take a card from the starting 250% to the floor. From then on its interval grows only 1.3× per success instead of 2.5×, so a card you once struggled with keeps coming back far too often, forever.
- **FSRS models three numbers per card:** *difficulty*, *stability* (how many days until recall drops to 90%) and *retrievability* (the chance you recall it today). You set one goal, the **desired retention**, and the card comes back when its predicted recall drops to that level.
- **Example** (computed with FSRS-6's default forgetting curve): for a card with stability of 10 days, the next review is in about 33 days at 80% desired retention, 10 days at 90% and about 4 days at 95%. Higher retention costs a lot more reviews. A card you always answer correctly at 90% comes back after roughly 2, 11, 46, 163 and 497 days. After optimisation, FSRS-6 fits the curve to your own history, so your numbers will differ.
- **It predicts better than the classics.** The open benchmark run by the FSRS team (about 10,000 real Anki collections) shows FSRS-6 predicting recall better than Anki's SM-2 for 99.6% of them, and far better than Duolingo's half-life regression. Two caveats:
  - Heavier neural models predict even better, and a simple moving average of your recent answers even edges FSRS-6 on one of the benchmark's measures (log loss).
  - The benchmark measures *prediction*, which saves reviews. No controlled trial yet shows people actually *learn* more with FSRS than with SM-2.
- **Versions:**
  - Anki 23.10 (October 2023) built FSRS in, still as an opt-in.
  - FSRS-5 arrived in 24.11 and FSRS-6 (21 parameters, with a trainable forgetting curve) in 25.07. Anki 26.09.4, the stable release in November 2026, still runs FSRS-6.
  - FSRS-7 (34 parameters, better same-day predictions) is the default in the `ts-fsrs` library (v6.0.0, October 2026) and is supported in `fsrs-rs` v7.0.0, but it has not shipped in Anki yet.

**Practical setting in Anki:**
1. Turn FSRS on at the bottom of Deck Options. The toggle applies to all decks.
2. Leave desired retention at **0.90**. Go down to 0.85 for low-stakes hobby decks and up to 0.95 for an exam crunch, never above 0.97.
3. Press "Optimize" once you have some review history, then again monthly or whenever your review count doubles.
4. When you first switch, don't tick "Reschedule cards on change", or you may face a wall of due cards.

## ✍️ Writing good cards
### The rules that matter most
1. **One fact or idea per card** (Woźniak's "minimum information principle", rule 4 of his *20 rules of formulating knowledge*). Big cards are hard to grade and you end up recalling half.
2. **A card must have one right answer.** Matuschak's five properties of a good prompt: *focused* (one detail), *precise* (no vague "tell me about"), *consistent* (the same answer every time), *tractable* (you can usually get it right) and *effortful* (you actually have to recall, not recognise).
3. **Several small cards per concept, not one big one.** For an idea worth keeping, write 2–5 prompts from different angles: what it is, how it differs from the nearest concept, an example, what it causes, why it matters to you.
4. **Your own words, plus context.** The card should still make sense in a year, without the note.
5. **Prefer questions over cloze for ideas.** Fill-in-the-blank cards (*cloze deletions*) are great for lists, terms and numbers in context. For ideas they tend to train pattern matching on the sentence rather than understanding.

### Is this card worth it?
Michael Nielsen estimates about **8 seconds per review** and **4–7 minutes per card over its lifetime**. His rule: make a card only if remembering it is worth about 10 minutes of your future time. Gwern's rule of thumb is 5 minutes. With those numbers he reports keeping over 10,000 cards for 15–20 minutes a day.

### Before → after, from the notes in this vault
```text
❌ What is a Zettelkasten?
   (too broad — a different answer every time, impossible to grade)

✅ What goes into one Zettelkasten permanent note?
   → One idea, in my own words.
✅ How does a Zettelkasten organise notes, unlike a topic-folder archive?
   → By links between notes, not by filing them under topics.
✅ Why does Ahrens insist permanent notes are rewritten, not copied?
   → Rewriting forces elaboration and exposes gaps in understanding.

❌ Pomodoro technique: 25 min work, 5 min break, long break after 4,
   indivisible, inform-negotiate-call back
   (a list on one card — you will always forget one part)

✅ In Cirillo's Pomodoro, what happens to a pomodoro that gets truly interrupted?
   → It's void; start a new one.
✅ The three steps for handling an external interruption in Pomodoro?
   → Inform, negotiate, call back.
```

## 🧩 From your notes to cards: the workflow
### Note first, card second
1. **Write the note.** Restate the idea in your own words, link it to at least two existing notes and add an example. This is where understanding is built. Carding raw highlights skips that step.
2. **Then ask: do I need this in my head?** Make cards when:
   - you must recall it on the spot, without the vault (in a meeting, while coding, in an exam, on stage);
   - looking it up would cost more than the card (the 5–10 minute rule above);
   - other ideas build on it (definitions, distinctions, key numbers, names, steps of a procedure);
   - you'll use it for months.
3. **Link, don't card,** when it's an argument still developing, a detail you can look up in seconds, or a judgement that depends on context. The [[Zettelkasten]] remembers those for you.

### Patterns that work in a Markdown vault
- **A small `## Cards` section at the end of a permanent note**, with 1–3 cards. When you fail a card, the reasoning is right above it.
- **Cornell notes:** the cue column of a [[Cornel Notes Taking System]] page is a ready-made list of questions. Turn each cue into a card, and the summary into a "how does this connect" card.
- **Book notes:** card the 3–10 ideas you actually want to keep, in a sub-deck per book, and link the rest (see [[How to take smart notes]] and [[LIFE/BOOKS/Building a Second Brain]]).
- **Every card links back to its note.** Then a failed or confusing card sends you back to the source, and you can repair cards when a note changes.
- **Mind maps:** redrawing a [[Mind map]] from memory is retrieval practice on paper (see [[How to create mind map]]).

## 🛠️ Tools (November 2026)
| Tool | Price | Scheduler | Cards live in | Good for |
|---|---|---|---|---|
| **Anki** | Desktop, web and Android free; iOS app \$24.99 one-time | FSRS (opt-in), SM-2 | Anki's own database | The standard; best stats, add-ons, mobile apps |
| **Obsidian Spaced Repetition plugin** | Free (MIT) | SM-2 default, FSRS opt-in since v1.15.0 (May 2026) | Your notes | Cards inside notes, no second app |
| **Yanki** (Obsidian → Anki) | Free (MIT) | Anki's | Notes, synced to Anki | One note per card, review on Anki mobile |
| **Decks** (Obsidian plugin) | Free | FSRS-6 | Markdown cards, review state in a separate database file | Clean notes, very active development |
| **hashcards** | Free (Apache-2.0) | FSRS | Plain Markdown files + SQLite | Plain text in git; editing a card resets its progress |
| **Mochi** | Free; Pro \$5/month | SM-2 or FSRS | Markdown-based app | Clean, local-first app with an API |
| **RemNote** | Free; Pro \$8/month | FSRS (beta) | Notes with cards inside | Notes and cards in one app |
| **SuperMemo 20** | \$64 one-time, Windows | SuperMemo's own (proprietary) | SuperMemo | The original; incremental reading |
| **Readwise Mastery** | In Readwise plans from \$7.99/month | Own | Readwise | Turning reading highlights into cards |

**In the Obsidian Spaced Repetition plugin**, a note tagged `#flashcards` becomes a deck, and cards are written right in the text:

```markdown
## Cards
Who published the first forgetting curve, and when?::Hermann Ebbinghaus, 1885

What does FSRS "desired retention 0.90" mean?
?
A card is due when its predicted chance of recall drops to 90%.
```

After a review, the plugin adds an HTML comment with the next due date under the card. It's invisible in the rendered note but shows up in the file and in git.

**Watch out:**
- **Grading differs between apps.** In Anki with FSRS, *Hard* means "recalled with effort", a pass. Pressing *Hard* when you actually forgot makes intervals far too long. In the Obsidian plugin's default SM-2 mode, *Hard* counts as a fail. When in doubt, use only *Again* (forgot) and *Good* (recalled).
- **Publishing a vault?** Inline card syntax (`question::answer`, `==cloze==` highlights) shows up as-is on a published site such as Quartz. Keep cards in a folder you don't publish, or accept them as part of the page.
- **Shared decks can carry risk.** Anki 26.09.4 (November 2026) fixed a security hole that let a crafted shared deck run code. Keep Anki updated and import decks only from sources you trust.

## 🤖 AI-made cards from your notes
- **The best evidence so far:** the *Memory Machines* report (Ozzie Kirkby & Andy Matuschak, 2026) graded about 1,500 AI-written prompts from 93 sources. Even the best model (GPT-5.2) produced **36% unusable cards** (10% off-target, 26% badly built). **No AI model used as a judge exceeded 70% accuracy** at spotting good cards. The biggest quality gain came from showing the model examples of cards the reader had already accepted (precision went from 56% to 78%).
- **People disagree on what matters.** Readers agreed on which details were worth carding only 39% of the time. *Choosing what to card is your job*; the AI can help with wording.
- **The trade-off:** AI-written cards skip the generation step that makes own cards work. And in a study with about 1,000 high-school students, those with an unrestricted AI tutor did 48% better during practice but 17% *worse* on the exam without it. A tutor with guardrails removed most of the harm (Bastani et al., *PNAS*, 2025).
- **None of the big AI "study modes" schedules reviews.** ChatGPT Study Mode, Gemini Guided Learning and NotebookLM flashcards (2025–2026) can quiz you, but they don't bring a card back in three weeks. For long-term memory you still need an SRS.
- **Agent bridges exist.** Anki can be driven by scripts and AI agents (AnkiConnect, the AnkiMCP add-on), and FSRS is available as libraries (`ts-fsrs` for JavaScript/TypeScript, `py-fsrs` for Python). A vault agent can draft cards into a note or push them to Anki. Treat the drafts as drafts.

**A workflow that keeps the benefits:**
1. Highlight the passage yourself and add one line: *why do I care?*
2. Write the core card yourself. Let the AI propose variants: reverse cards, examples, application questions.
3. Give the model the note, your highlight, your intent and 3–5 cards you've accepted before.
4. Triage every draft: drop trivia, rewrite anything with several right answers, trim wordy cards. Accept only cards you'd answer the same way in six months.
5. Cap it: 3–5 cards per note, a fixed number of new cards per day. Tag AI-drafted cards so you can audit them after a month.

## ⚠️ Pitfalls and keeping the load sane
- **Review debt kills the habit.** In Anki's rule of thumb, 20 new cards a day leads to about 200 reviews a day. Start from **minutes per day**, not cards: a 20-minute budget supports roughly 10–15 new cards a day.
- **If reviews run over budget, cut new cards, never reviews.**
- **Grade honestly.** *Again* = forgot (including half-right). Typical healthy use is mostly *Good*.
- **Leeches.** A card that fails 8 or more times is badly written, not a sign you're stupid. Anki tags it as a "leech". Rewrite it, split it or delete it.
- **Don't set retention too high.** Above 90%, workload grows fast. Anki's manual calls targets above 97% overwhelming.
- **Coming back after a break.** With a pile of overdue cards: stop new cards, review the backlog in daily chunks over a week (FSRS can sort by "lowest retrievability first"), then restart new cards.
- **Over-carding.** Not every note needs cards. Most don't.
- **Grading every answer can itself backfire.** In online experiments, asking learners to rate their own correctness after every item wiped out the advantage of testing (Higham et al., 2023). Keep grading quick and binary.

## 📅 A 30-day starter plan
1. **Day 1:** install Anki (or the Obsidian Spaced Repetition plugin), switch to FSRS, keep desired retention at 0.90. Set new cards to 10 a day.
2. **Week 1:** pick *one* area where you really need recall (a language, a framework's API, a book you're studying). Write 3–5 cards per note you finish, in your own words.
3. **Every day:** do all due reviews first, then new cards. Grade with *Again* and *Good* only.
4. **Week 2:** look at your leeches and rewrite them using the card rules above.
5. **Day 30:** check the 7-day average review time. Over budget? Cut new cards. Under budget and happy? Add a second area. Run the FSRS optimiser once.

## 🔗 Related
- [[Learn Like a Pro]] — the learning science behind this: spaced repetition, elaboration, working vs long-term memory
- [[Zettelkasten]] — the note side of the split: notes that remember for you
- [[How to take smart notes]] — Ahrens on why rewriting beats collecting
- [[Cornel Notes Taking System]] — the cue column is a list of cards waiting to be written
- [[Włam się do mózgu]] — the Polish book on the same science, with the "crash-test" and flashcard methods
- [[LIFE/BOOKS/Building a Second Brain]] — progressive summarisation helps find the core worth carding
- [[Mind map]] and [[How to create mind map]] — redrawing from memory as retrieval practice
- [[Pomodoro]] — a daily review fits into one pomodoro
- [[LIFE/TOOLS/Obsidian]] — plugins for cards inside notes
- [[LLM Knowledge Bases]] and [[Building an AI Second Brain]] — the agent-maintained vault that AI-drafted cards would come from
- [[Second Brain Design]] — the Obsidian + Claude Code + skills setup such a card workflow would run in

## 📖 Sources
**Learning science**
- Cepeda, N. J., et al. (2006). Distributed practice in verbal recall tasks. *Psychological Bulletin*, 132(3), 354–380.
- Cepeda, N. J., et al. (2008). Spacing effects in learning: A temporal ridgeline of optimal retention. *Psychological Science*, 19(11), 1095–1102. [PubMed](https://pubmed.ncbi.nlm.nih.gov/19076480/)
- Karpicke, J. D., & Bauernschmidt, A. (2011). Spaced retrieval: Absolute spacing enhances learning regardless of relative spacing. *JEP: Learning, Memory, and Cognition*. [PDF](https://pcllab.github.io/downloads/2011/2011_Karpicke_Bauernschmidt_JEPLMC.pdf)
- Latimier, A., Peyre, H., & Ramus, F. (2021). A meta-analytic review of the benefit of spacing out retrieval practice episodes. *Educational Psychology Review*. [Springer](https://link.springer.com/10.1007/s10648-020-09572-8)
- Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning. *Psychological Science*, 17(3), 249–255.
- Rowland, C. A. (2014). The effect of testing versus restudy on retention: A meta-analytic review. *Psychological Bulletin*, 140(6), 1432–1463.
- Pan, S. C., & Rickard, T. C. (2018). Transfer of test-enhanced learning: Meta-analytic review and synthesis. *Psychological Bulletin*, 144(7), 710–756. [PDF](https://sc-pan.github.io/pdf/PR_2018.pdf)
- Dunlosky, J., et al. (2013). Improving students' learning with effective learning techniques. *Psychological Science in the Public Interest*, 14(1), 4–58. [doi:10.1177/1529100612453266](https://doi.org/10.1177/1529100612453266)
- Murre, J. M. J., & Dros, J. (2015). Replication and analysis of Ebbinghaus' forgetting curve. *PLOS ONE*, 10(7), e0120644.
- Bjork, R. A., & Bjork, E. L. (2020). Desirable difficulties in theory and practice. *Journal of Applied Research in Memory and Cognition*, 9(4). [PDF](https://bjorklab.psych.ucla.edu/wp-content/uploads/sites/13/2021/01/RABjorkELBjorkJARMAC2020ForPostingSingleSpaced.pdf)
- Pan, S. C., Zung, I., Imundo, M. N., Zhang, X., & Qiu, Y. (2023). User-generated digital flashcards yield better learning than premade flashcards. *Journal of Applied Research in Memory and Cognition*, 12(4), 574–588.
- Kornell, N., & Bjork, R. A. (2008). Optimising self-regulated study: The benefits — and costs — of dropping flashcards. *Memory*, 16(2). [PDF](https://bjorklab.psych.ucla.edu/wp-content/uploads/sites/13/2016/07/Kornell_Bjork_2008_Memory.pdf)
- Kornell, N. (2009). Optimising learning using flashcards: Spacing is more effective than cramming. *Applied Cognitive Psychology*, 23(9), 1297–1317.
- Brunmair, M., & Richter, T. (2019). Similarity matters: A meta-analysis of interleaved learning. *Psychological Bulletin*, 145(11). [PubMed](https://pubmed.ncbi.nlm.nih.gov/31556629/)
- Carpenter, S. K., Pan, S. C., & Butler, A. C. (2022). The science of effective learning with spacing and retrieval practice. *Nature Reviews Psychology*, 1, 496–511. [PDF](https://www.nature.com/articles/s44159-022-00089-1.pdf)
- Bastani, H., et al. (2025). Generative AI without guardrails can harm learning. *PNAS*, 122(26). [Wharton summary](https://knowledge.wharton.upenn.edu/article/without-guardrails-generative-ai-can-harm-education)

**Practice and card writing**
- [Piotr Woźniak — Effective learning: Twenty rules of formulating knowledge (SuperMemo)](https://www.supermemo.com/en/blog/twenty-rules-of-formulating-knowledge)
- [Andy Matuschak — How to write good prompts](https://andymatuschak.org/prompts/)
- [Michael Nielsen — Augmenting Long-term Memory](https://augmentingcognition.com/ltm.html)
- [Gwern — Spaced Repetition for Efficient Learning](https://gwern.net/spaced-repetition)
- [Andy Matuschak & Michael Nielsen — How can we develop transformative tools for thought? (Quantum Country)](https://numinous.productions/ttft/)
- [Ozzie Kirkby & Andy Matuschak — Memory Machines report (2026)](https://memory-machines.com/report)

**Tools**
- [Anki manual — deck options and FSRS](https://docs.ankiweb.net/deck-options.html)
- [Anki releases](https://github.com/ankitects/anki/releases)
- [Open Spaced Repetition — srs-benchmark](https://github.com/open-spaced-repetition/srs-benchmark), [ts-fsrs](https://github.com/open-spaced-repetition/ts-fsrs) and [the FSRS algorithm formulas](https://github.com/open-spaced-repetition/awesome-fsrs/wiki/The-Algorithm)
- [Expertium — benchmark analysis of FSRS vs other schedulers](https://expertium.github.io/Benchmark.html)
- [Piotr Woźniak — the SM-2 algorithm (SuperMemo)](https://super-memory.com/english/ol/sm2.htm)
- Settles, B., & Meeder, B. (2016). A trainable spaced repetition model for language learning. *ACL 2016*. [PDF](https://aclanthology.org/P16-1174.pdf)
- [Obsidian Spaced Repetition plugin](https://github.com/st3v3nmw/obsidian-spaced-repetition)
- [hashcards — plain-text spaced repetition (Fernando Borretti)](https://borretti.me/article/hashcards-plain-text-spaced-repetition)

The full research report (21 items, with every number and its source) is kept with this vault's raw sources, at the path in this note's `source` field.
