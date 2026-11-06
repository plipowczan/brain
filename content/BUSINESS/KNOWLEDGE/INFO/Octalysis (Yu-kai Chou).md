---
title: "Octalysis (Yu-kai Chou)"
date: 2026-11-06
enableToc: true
openToc: true
tags: ["knowledge", "info", "gamification", "behavioral-design", "motivation", "product", "ux", "psychology", "evidence-based"]
type: knowledge-note
source_url: "https://yukaichou.com/gamification-examples/octalysis-complete-gamification-framework/"
agent-created: true
agent-reviewed: 2026-11-06
summary: "Yu-kai Chou's Octalysis: 8 core drives, white vs black hat, the player journey and the PBL fallacy; never empirically validated, but a good idea generator. What the gamification evidence supports, and how I'd use it in product onboarding, automation adoption and my kids' motivation system."
---

# Octalysis (Yu-kai Chou)

> [!info] Context
> Parked research item (PL-255): Yu-kai Chou, gamification and behavioural design. I wanted to know what is actually usable in product and automation work. Chou's own material is persuasive but self-published and anecdotal, so the evidence sits in a separate section.

**Evidence key:** 🟢 strong (meta-analysis / large review) · 🟡 moderate / mixed · 🔴 anecdote or untested.

## 🗒️ Who is Yu-kai Chou

- Born 1986 in Taipei, UCLA graduate (2007). He started thinking about gamification around 2003 and published the **Octalysis** framework on his blog in **2012**.
- He wrote ***Actionable Gamification: Beyond Points, Badges, and Leaderboards***, self-published in April 2015 and reissued by Packt in 2019. His later book is *10,000 Hours of Play* (2025).
- He co-founded **The Octalysis Group**, a consultancy, in 2016 and runs **Octalysis Prime**, a paid learning community, since 2018.
- He calls his approach **"human-focused design"**: design for how people feel and what motivates them, not only for function. His site claims top rankings among "gamification gurus"; those claims are self-reported.

## 🧩 The framework

### The 8 Core Drives

Octalysis claims that every engaging activity draws on at least one of eight drives. They are drawn as the sides of an octagon.

| # | Core Drive | The feeling | Typical mechanics |
|---|---|---|---|
| 1 | **Epic Meaning & Calling** | I'm part of something bigger | mission, "chosen one" narrative |
| 2 | **Development & Accomplishment** | I'm making progress and getting better | progress bars, levels, points |
| 3 | **Empowerment of Creativity & Feedback** | I can experiment and see the result | sandboxes, combinations, instant feedback |
| 4 | **Ownership & Possession** | It's mine, and I want to grow it | collections, virtual goods, customisation |
| 5 | **Social Influence & Relatedness** | others matter: mentorship, competition, envy | friends, teams, comparison |
| 6 | **Scarcity & Impatience** | I want what I can't have yet | waits, limited access, countdowns |
| 7 | **Unpredictability & Curiosity** | what happens next? | random rewards, mystery boxes |
| 8 | **Loss & Avoidance** | I don't want to lose what I've got | streaks, expiring progress |

The octagon has two axes:

- **White Hat vs Black Hat** (top vs bottom of the octagon).
  - Drives 1–3 are White Hat. They make people feel good and in control, but they create no urgency.
  - Drives 6–8 are Black Hat. They create urgency and obsession, but they leave a bad aftertaste.
  - Chou doesn't call Black Hat evil. His test is how users feel *after* using the product.
- **Left Brain vs Right Brain** (left vs right of the octagon).
  - Left Brain is extrinsic, logic and ownership: drives 2, 4 and 6.
  - Right Brain is intrinsic, creativity and social: drives 3, 5 and 7.
  - Chou concedes the labels are symbolic, not neuroscience.

### Levels and the player journey

- **Level 1** maps each mechanic to a drive and scores each drive 0–10 (the "Octalysis Score"). Chou says this is enough for most companies.
- **Level 2** repeats the analysis for each of the four phases of the player journey:
  1. **Discovery**: why would someone try it?
  2. **Onboarding**: learning the rules and tools.
  3. **Scaffolding**: the daily repeated loop.
  4. **Endgame**: why veterans stay.
- **Level 3** adds player types (Bartle). Levels 4–5 are barely documented.

### The PBL fallacy

Points, badges and leaderboards mostly hit drive 2, the easiest one to design for. "Gamification = PBL" is the shallow version.

- A badge should *reflect* an achievement; it isn't an achievement in itself.
- A leaderboard discourages newcomers. Keep the user's own position central, or compare them only with friends.

### Onboarding advice

- **Confusion, more than boredom, kills early retention.**
- Guide step by step. Use a "glowing choice", the one obvious next action.
- Give an **early win**, then a first "boss fight", a first real challenge.
- Ask for invites only *after* the first big win.

## 🔬 What the evidence says

- **Octalysis itself: not validated 🔴.**
  - A 2022 review screened 344 Google Scholar hits down to 78 papers (Weber, Grönewald & Ludwig, GamiFIN). None of them empirically validated the framework.
  - The reviewers' criticisms: scoring is subjective, the framework is anecdotal and rarely cites research, and drive 5 lumps intrinsic relatedness together with extrinsic social pressure.
  - They do find it **useful for generating ideas**. I found no psychometric validation of the 8 drives either.
- **Gamification works a little, depending on context 🟢/🟡.**
  - Hamari et al. (2014) reviewed 24 empirical studies. Effects were mostly positive but depended heavily on context and on the users.
  - Koivisto & Hamari (2019) reviewed 819 studies. Results were mostly positive, with a "remarkable" share of mixed results and little coherent theory.
  - Sailer & Homner (2020) meta-analysed gamification in learning. Effects were small to moderate: cognitive g = 0.49, motivational 0.36, behavioural 0.25. Only the cognitive effect held up in the most rigorous studies. Game fiction and social interaction (competition plus collaboration) made effects stronger.
- **The novelty effect is real 🟡.** One 14-week study of 756 students (Rodrigues et al., 2022) found that the effect dropped after about 4 weeks and partly recovered between weeks 6 and 10. Judge a gamified feature over 6–10+ weeks, not after the launch week.
- **Rewards can crowd out intrinsic motivation 🟢.**
  - Deci, Koestner & Ryan (1999) meta-analysed 128 studies. Rewards that are expected and tied to a task undermined intrinsic motivation, whether they were contingent on engagement, completion or performance (d ≈ −0.28 to −0.40).
  - Positive informational feedback *raised* it (d ≈ +0.33).
  - Tangible rewards did the most harm to **children**.
- **Self-determination theory is the scientific backbone 🟢.** Ryan, Rigby & Przybylski (2006) showed that autonomy, competence and relatedness predict enjoyment and continued play. Octalysis drives 2, 3 and 5 roughly map onto these three needs.
- **Consent matters 🟡.** Mollick & Rothbard's "Mandatory Fun" field experiment (200+ salespeople) found that workplace games raised positive affect when employees consented to them and **lowered** it when they didn't.
- **Endowed progress 🟡.** Nunes & Drèze (2006): car-wash loyalty cards that came with 2 of 10 stamps already filled were completed more often than 8-stamp cards that started empty.
- **The critique.** Ian Bogost (2011) called gamification marketing "exploitationware": it lets firms add "gaminess" without changing anything real.

## 🧭 What's usable in my product and automation work

1. **Start from the metric, not the mechanic.** Duolingo's ex-CPO describes the sequence:
   - Its first gamification test, copied from a mobile game, had a neutral result.
   - Then a growth model showed that **current-user retention** was the biggest lever, about 5× the next one.
   - Leagues adapted to that goal raised learning time 17%. Over four years DAU grew 4.5×.
   - The lesson: copy *why* a mechanic works, not the mechanic.
   - For [[Qamera AI]], first decide which retention or activation number matters, then pick drives, then measure in [[PostHog]].
2. **Onboarding = drive 2 + drive 3, aimed at a first win.**
   - Qamera AI: get to the first generated product photo fast, with one glowing next step.
   - An automation rollout: get to the first run that saves someone real time.
   - Start the progress bar partly filled (endowed progress).
3. **Make automation adoption visible inside client teams** ([[PLSoft]]). Things like "hours saved this week" (drive 2), letting users tweak their own flows (drive 3), and team-level visibility (drive 5).
   - Keep competition **opt-in**, because forced leaderboards backfire.
   - This is the people side of the [[AI 70-20-10 Rule]].
4. **Use Black Hat only for habits the user chose.** Streaks and loss aversion (drive 8) are fine in a habit app the person installed on purpose. For B2B tools they're manipulative. Run Chou's aftertaste test: would the user thank me for this mechanic a month later?
5. **Use Octalysis as an audit checklist, not as science.**
   - Score an onboarding flow or feature on the 8 drives and find the empty sides.
   - Treat the result as a source of ideas, then A/B test them.

### My kids' motivation system, through this lens

My [[Motivation system for my kids]] runs almost entirely on **Left Brain / Black Hat** drives:

- money per task (drive 4, ownership);
- paying for skipped tasks and a weekly "keep" deduction (drive 8, loss);
- no screens until all tasks are done (drive 6, scarcity).

The research says to be careful here:

- **Deci et al.**: tangible, task-contingent rewards hurt children's intrinsic motivation the most.
- **Chou's parenting piece**:
  - sticker charts fail once supervision stops;
  - bribes teach a child that the task itself is unpleasant;
  - drive 1 (meaning) develops last in children.

Ideas worth trying (my reading, not tested):

- keep the money for *chores* (life costs money, which is the real lesson);
- **stop paying for reading, music and exercise**, the things I want them to love; use informational praise and their own choice there (drive 3);
- add identity framing, "in our family we…" (drive 1);
- hold a weekly family meeting where chores rotate (drive 5).

## 📖 Further reading

- Yu-kai Chou — Octalysis: complete gamification framework: https://yukaichou.com/gamification-examples/octalysis-complete-gamification-framework/
- Yu-kai Chou — Core Drive 2 and the PBL fallacy: https://yukaichou.com/core-drives/core-drive-2-development-accomplishment/
- Yu-kai Chou — the onboarding phase: https://yukaichou.com/gamification-study/4-experience-phases-gamification-2-onboarding-phase/
- Yu-kai Chou — Octalysis parenting: https://yukaichou.com/parenting/octalysis-parenting-behavioral-design-raising-children/
- Yu-kai Chou — about: https://yukaichou.com/about-me/ · Wikipedia: https://en.wikipedia.org/wiki/Yu-kai_Chou
- *Actionable Gamification* (Packt edition, 2019): https://www.packtpub.com/en-us/product/actionable-gamification-9781839210778
- Weber, Grönewald & Ludwig 2022 (GamiFIN) — review of Octalysis in research: https://ceur-ws.org/Vol-3147/paper8.pdf
- Hamari, Koivisto & Sarsa 2014 (HICSS) — Does gamification work?: https://research.aalto.fi/fi/publications/does-gamification-work-a-literature-review-of-empirical-studies-o/
- Koivisto & Hamari 2019 (IJIM) — the rise of motivational information systems: https://trepo.tuni.fi/bitstream/10024/115953/2/the_rise_of_motivational_2019.pdf
- Sailer & Homner 2020 (Educational Psychology Review) — meta-analysis: https://opus.bibliothek.uni-augsburg.de/opus4/frontdoor/index/index/docId/109056
- Deci, Koestner & Ryan 1999 — extrinsic rewards meta-analysis: https://depts.washington.edu/techdocs/papers/deciExtrinsicRewardsAndIntrinsicMotivation99.pdf
- Ryan, Rigby & Przybylski 2006 — PENS / self-determination in games: https://selfdeterminationtheory.org/player-experience-of-needs-satisfaction-pens/
- Mollick & Rothbard — Mandatory Fun: https://papers.ssrn.com/abstract=2277103
- Rodrigues et al. 2022 — novelty and familiarisation effects: https://www.universityxp.com/research/2022/10/3/gamification-suffers-from-the-novelty-effect-but-benefits-from-the-familiarization-effect-findings-from-a-longitudinal-study
- Lenny's Newsletter — how Duolingo reignited user growth (Jorge Mazal): https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth
- Ian Bogost — Gamification is bullshit (2011): https://www.bogost.com/blog/gamification_is_bullshit.shtml

## 🔗 Links

- [[Motivation system for my kids]] — my own gamified system, analysed above
- [[Atomic habits]] — habit design from the user's side
- [[Qamera AI]] · [[PostHog]] — where the product ideas would be tested
- [[PLSoft]] · [[AI 70-20-10 Rule]] — automation adoption is mostly a people problem

---
Template: [[templates/knowledge_note_info]]
