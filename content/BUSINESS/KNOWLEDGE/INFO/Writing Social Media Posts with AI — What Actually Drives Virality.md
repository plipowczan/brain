---
title: "Writing Social Media Posts with AI — What Actually Drives Virality"
date: 2026-09-29
enableToc: true
openToc: true
tags: ["knowledge", "info", "research", "compiled", "social-media", "ai", "linkedin", "content", "marketing", "virality", "evidence-based"]
type: compiled-note
source: "_raw/processed/2026-09-29_2026-09-11-research-ai-social-post-virality.md"
agent-created: true
summary: "36 researched items on AI-assisted social writing and the science of sharing, evidence graded, with 18 circulating claims that failed primary-source checks"
---

# Writing Social Media Posts with AI — What Actually Drives Virality

## 🗒️ Description

A deep-research pass (2026-09-11) on two questions: how to write social posts with AI without the output reading as slop, and what the evidence actually says about why things get shared. 36 items across four groups (AI tooling, copy patterns, virality science, workflow), each researched on 32 fields. **327 of the 1,152 field values (28.4%) came back uncertain and are left out**, not guessed.

It is cut for my situation: a solo B2B/technical consultant posting on LinkedIn and X, in Polish and in English.

**Evidence discipline.** Most tactical numbers about 2026 social media come from vendor blogs that cite each other, and several of those are themselves AI-written. So throughout: **direction is informative, magnitude is unverified** unless the source is platform-official, published source code, or peer-reviewed. Each item carries two badges: automation level (L0 manual → L3 fully autonomous) and dominant evidence grade (STRONG / MODERATE / SPLIT). SPLIT means credible sources disagree.

**Scope.** Writing craft and the science of sharing. Per-platform ranking mechanics are in the companion note [[Social Media Algorithms — Maximizing Reach in 2026]]. This research caught errors in that note, and they were corrected on 2026-09-11.

This note condenses the report. The full field-by-field report (1.5 MB) is archived at `_raw/processed/2026-09-29_2026-09-11-research-ai-social-post-virality.md`, and the research workspace is `_raw/research-workspaces/ai-social-post-virality/`. Where an item-level claim in the raw report contradicts its own "What did not hold up" section, I went with the correction.

## 🔗 Links

- [[Social Media Algorithms — Maximizing Reach in 2026]] — companion: how 17 platforms rank; corrected against this research
- [[Marketing Agent Research]] — the agent that would run this workflow (listening, drafting, approval); this note is the craft layer under it
- [[LinkedIn Strategy]] · [[Build in Public]] · [[Richard van der Blom]] — my LinkedIn playbook and its main data source
- [[Spec-driven SEO and GEO]] · [[Claude SEO]] · [[Perplexity]] — the GEO / AI-citation side
- [[Deep-Research-skills]] — the pipeline that produced the report

## 🚀 Main message

1. **Virality is mostly luck at the level of a single post.** About 99% of cascades die within one generation, and the best models explain less than half the variance, by design, not for lack of data. Craft moves the odds per post. Judge tactics over blocks of 20+ posts, never one.
2. **The platform penalty targets genericness, not AI authorship.** LinkedIn explicitly allows AI assistance. What gets demoted is text with nothing only I could have written. Every post needs one of: a number I produced (with n), a dated first-hand incident, a named artifact or version, a judgement with its cost, or a correction of my own earlier position.
3. **LLMs generate and critique well, and are near chance at picking winners.** GPT-4o picks the better headline 58.3% of the time against a 50.9% random baseline. Use a model to produce candidates and to kill incomprehensible ones. Never let it choose.
4. **There are two objective functions, and they barely correlate.** Feed reach rewards dwell, depth and sends. AI-answer citation rewards self-contained, evidence-carrying chunks, and the median AI-cited LinkedIn post has 15–25 reactions. They need different artifacts.
5. **Negative actions dominate positive ones.** In X's published ranker a mute is −58.8 and a like +0.5. The target is not sounding positive. The target is that nobody reaches for mute, block, report or "not interested".
6. **At solo volume, organic A/B testing can't see realistic effects.** Measured textual effects are 2–10%; three posts a week resolves about a 40% lift per year. Test hooks as a small paid ad or an email subject line, and decide the rest by judgement.
7. **Under the EU AI Act, over-disclosure is the common, costly mistake.** Text I substantively reviewed, on topics outside the eight public-interest domains, needs no label. A bare "written with AI" label is worse than both silence and a full process note.

## ⚠️ What did not hold up

18 claims that circulate as fact did not survive primary-source checking. Several are load-bearing in popular advice; several got into the research's own working notes before being caught. Stop doing these first.

| # | Claimed | What the sources actually say |
|---|---|---|
| 1 | Each moral-emotional word gives ~+17% shares | Meta-analytic **IRR 1.13, 95% CI [1.06, 1.20]**. 1.17 is an unweighted mean inflated by one outlier (1.66) on the smallest dataset; the median of the five datasets is 1.07. |
| 2 | A field experiment showed human Instagram posts beat AI ones | **No difference is significant** (likes p=.91, ER p=.64). The authors conclude equivalence; readers significantly *preferred* the AI captions (p=.045); 7 of the 12 top posts were AI. One 770-follower account, culinary niche. |
| 3 | X's Grok reads tone and throttles combative posts | The open-sourced ranker has **no tone score**. Negative-action weights do the work: report −234.0, mute −58.8, not-interested −43.2, block −31.2 vs like +0.5. |
| 4 | Stats + quotes + sources lift AI visibility up to 40% | Three **separate** single interventions (Quotation +41%, Statistics ~+31–33%, Cite Sources +28%). Pairs were tested only on a 200-example subset. GEO is redistributive: the rank-5 source gains +115.1% while rank-1 loses −30.3%. |
| 5 | Localized content gets 3x the engagement | Traces to a vendor *conversion* claim that drifted. Real anchor, CULTURE-MT (arXiv 2605.25626): 90.80% culturally effective vs 50.40% for a baseline, while BLEU/COMET barely moved. The standard quality gate is blind to the failure that matters. |
| 6 | Instagram weights DM sends 3–5x likes | No coefficient is published. Mosseri: sends are "slightly" more important, and only for unconnected content. |
| 7 | Hook rate above 30% is good, below 15% weak | "Hook rate" is not a Meta metric, Meta publishes no benchmark, and vendor bands contradict each other. Use your own rolling median. |
| 8 | LinkedIn penalizes two posts within 4 hours | Untraceable; 18h and 24h variants circulate too — the signature of folklore. The one documented spacing mechanism is X's author-diversity decay: consecutive posts score 1.0, 0.625, 0.4375, then a 0.25 floor. |
| 9 | Accounts under 500 followers get cited by AI like big ones | Semrush's actual finding: **nearly half** of cited authors had **over 2,000 followers**. |
| 10 | AI Act Art. 50 means EUR 15M fines, grace until 2026-12-02 | SMEs are capped at the **lower** of the two amounts (Art. 99(6)), so 3% of a small turnover. The grace period covers providers, Art. 50(2) marking and pre-existing systems only. **Deployer duties apply in full since 2026-08-02.** |
| 11 | Pangram: 30% of LinkedIn comments are AI, ~57,000 items | Primary source: N=1,002,627 posts, Apr–Jun 2026. LinkedIn long-form **40.5%** fully AI, LinkedIn comments **23.7%**. The 57k/30% version exists nowhere on Pangram's blog. |
| 12 | The 360Brew paper documents LinkedIn's ranking model | arXiv 2501.16450 was **withdrawn by arXiv in Aug 2025** over licensing. Every claim resting on it is currently unsourced. |
| 13 | Diffusion is bimodal: broadcast vs viral | "Bimodal" appears zero times in Goel et al.; they say "surprising structural diversity". Cite *Management Science* 62(1), 2016. Base rates: average cascade 1.3, only 1 in 4,000 reaches 100 nodes. |
| 14 | STEPPS is the authoritative sharing framework | "STEPPS" appears zero times in Berger's own 2025 peer-reviewed review, which uses six drivers plus four moderators. |
| 15 | Pods carry a 45% penalty, detected with ~97% accuracy | Both numbers are untraceable. Verifiable: LinkedIn prohibits the **prior agreement** to engage. X's code says engagement from group-chat coordination "has no ranking impact" — pods are inert before they are penalised. |
| 16 | Make your writing more specific and concrete | Over 8,977 Upworthy field tests, more concreteness **helped 8.7%** of headlines and **hurt 50.9%** (inverted U). |
| 17 | Storytelling persuades better than argument | 77 experiments, N=24,380: **no significant difference**. The honest case for story is attention, which a dwell-ranked feed rewards anyway. |
| 18 | Use an LLM panel to pick the best hook | GPT-4o 58.3% vs fine-tuned BERT 76.5% vs 50.9% random over 86,035 pairs. Use a panel to eliminate incomprehensible variants, never to pick the winner. |

## 🧩 The 36 items

Format per item: what it is, the evidence worth quoting, what to do, what to watch or measure. Vendor numbers are marked as such.

### B. AI tooling for the writing craft

#### 1. LLM ghostwriting with voice prompts · L1 · SPLIT

A chat model drafts the post, steered by an explicit voice spec and exemplars of my own writing; I supply the substance and the final edit. Since May 2026 the report calls this "a defensive minimum", not an edge: it moves no positive ranking signal. It buys throughput and gets posts past the genericness gate that decides out-of-network reach. Claims that voice prompts lift comments or saves are "folklore".

- **Evidence:** co-writing with an LLM homogenises text and makes different authors sound more alike (Padmakumar & He, ICLR 2024). Instruction adherence decays within about eight dialogue rounds (Li et al., arXiv 2402.10962). Conflicting data: GPT-4 posts beat human ones on brand X accounts (Huang & Zhou 2025), while LinkedIn demotes generic AI text. They measure different things.
- **Do:** once (60–120 min), extract 8–12 checkable voice rules from 20–40 of my own pieces, each backed by three verbatim quotes, plus 15 phrasings I never use. Keep them as a versioned note. Per post (10–20 min): hand-write a 3–5-line brief with one fact only I could supply, generate in a fresh chat ("add no facts I did not give you"), critique in a *second* fresh chat. Pick exemplars for representativeness, not past performance. Hand-write the first two lines and the last line. Realistic time saving: 2–3x, not 10x.
- **Watch / measure:** drift inside long sessions; the model critiquing its own draft in the same thread; posting with nothing to say. Track edit distance from draft to published — it should stabilise, not fall to zero.

#### 2. Multilingual localization pipelines · L1 · STRONG

Re-authoring (transcreating) a post for a second language and culture instead of translating the words. For me, Polish and English are "different products, not one product in two wrappers".

- **Evidence:** on 1,002 social posts, a frontier model was 90.80% culturally effective against 50.40% for an 8B baseline, while BLEU/ChrF/COMET barely moved — standard translation metrics can't see the failure that matters (CULTURE-MT, arXiv 2605.25626). A Polish-language model ranking (Oxido / Jeleśniański, 2026, unreplicated) found humour the weakest category for every model. The biggest Polish advantage is less competition, which is a market effect, not an algorithm effect. The "3x engagement" claim is a vendor *conversion* number (see #5 in the debunk table).
- **Do:** choose the primary language by who buys from me, not a 50/50 mirror. Build a glossary once (prompt, deploy, agent, token stay English). Re-author from a four-bullet brief and write the hook fresh. Check separately for phrases that read as translated, and read the hook aloud. Publish the two versions 48–72 hours apart; the second must contain at least one element the first lacks.
- **Watch / measure:** American confessional openers carried into Polish; over-translated tech terms. Never publish in a language I can't read critically. Two languages cost about 1.6 posts of effort. Separate baselines per language, never pooled; 20+ posts per language before comparing.

#### 3. Persistent voice agents · L1 · STRONG

A saved configuration — Custom GPT, Claude Project with Styles, Gemini Gem — holding voice instructions and a small knowledge set. The report calls it a **container** for the voice prompt: consistency and setup time, not better output.

- **Evidence:** the STRONG grade covers how these containers *fail*; that a persona improves post performance is anecdotal. Instruction drift within eight rounds (arXiv 2402.10962), degradation across model versions (arXiv 2307.09009), and output quality falling as input grows (Chroma, "Context Rot", 18 frontier models) all argue for a small knowledge set. The report's rule — **persist the configuration, discard the thread** — is an inference, not a measurement.
- **Do:** keep the canonical instructions in git, ordered: role, hard bans, voice rules, what the human must supply, output format, self-check. Add a refusal rule: if the brief has no author-only fact, ask for one instead of writing. Exactly three knowledge files (10–15 exemplars, voice spec, banned list). A separate Editor persona in its own project. A new chat for every post.
- **Watch / measure:** every post converging on one shape. Never build a persona that writes comments; the May 2026 crackdown names them. Published Custom GPTs can leak their instructions and files. Monthly, check that the last ten posts don't share one skeleton; an Editor pass rate near 100% means the rubric is stale.

#### 4. RAG-grounded post generation · L1 · SPLIT

Search my own corpus — notes, transcripts, past posts with their results — and feed the hits into the draft, with the rule that the model may only assert what was retrieved or supplied. This vault already has the retrieval half: the `brain-mcp` search plus the `_indexes/` navigation in [[Brain]].

- **Evidence:** on the LaMP personalisation benchmark, retrieval gave +14.92% against +1.07% for fine-tuning (Salemi & Zamani, arXiv 2409.09510), and retrieving a user's history by relevance beats taking the most recent (LaMP, ACL 2024). These are benchmark tasks, not reach — "do not launder the 14.92%". No study compares reach for grounded vs ungrounded posts.
- **Do:** frame the post as a question about my own experience. Retrieve 5–8 passages and read the best two in full myself. Keep the three specifics the fewest people could state; check each is current, mine to publish and not client-identifiable. Search for anything that contradicts the claim. Make the draft cite a source path for every claim and report what it deleted. Voice pass after grounding; hand-write the opening and close. Write the post and its 7-day results back into the vault (20–25 min per post).
- **Watch / measure:** a thin or stale corpus makes the model invent first-hand experience — "the worst failure in the entire research". Leaked client metrics can't be taken back; test: "would I say this sentence with the client in the room". Track retrieval hit rate (low means the corpus is the bottleneck) and groundedness rate (target 100%).

#### 5. Synthetic persona pre-testing · L1 · MODERATE

Run 15–25 hook variants past an LLM-simulated audience to cut them to a shortlist, then confirm with real people. It removes weak variants; it does not predict virality.

- **Evidence:** semantic-similarity rating reached 90% of human test-retest reliability, but for purchase intent on physical products, not social copy, and numeric ratings from the model were unrealistic (arXiv 2510.08338). In a review of 285 synthetic-vs-human comparisons, 65.3% diverged; grounded personas collapsed onto one answer at ~85% concentration (ACM WWW 2026). Models are near chance at picking the engagement winner (see #18 in the debunk table).
- **Do:** build personas from my last ~200 comments and a few call transcripts, plus three hostile ones. Show one variant at a time, in random order, and ask behavioural questions: what is this about, would you scroll, who would you send it to? Keep the top two by intent-to-send plus one the panel disliked, then check with 3–5 real people. Below about four posts a month, skip the infrastructure.
- **Watch / measure:** more than 80% agreement means collapse, not a result. The panel favours smooth, safe copy — it selects *for* slop and against contrarian hooks. Track how often the panel's pick wins in reality against a 33% baseline; under ~50% sustained is noise.

#### 6. Visual and carousel generation · L1 · MODERATE

AI image models and design tools for post visuals. The report separates carousel *structure* (low risk — see #8) from generated *imagery*, which is where detection, disclosure and backlash live.

- **Evidence:** the carousel-vs-text multipliers range from ~1.25x to ~6.96x across vendors — "record the direction; discard the multipliers". 62% of consumers say they'd trust or engage less with a known AI post (Hootsuite 2024 survey). In a small independent test, LinkedIn and TikTok kept C2PA provenance on upload while Instagram and X stripped it. Text inside an image or PDF is invisible to ranking classifiers and answer engines.
- **Do:** choose by goal: video or text for reach, carousel for saves, a screenshot for proof. Build one style and template set once. Write the argument as text first. Use real screenshots for any claim; generate only backgrounds. Restate the claim in the post text, and disclose AI visuals in one line.
- **Watch / measure:** a title slide where the hook should be; generated images standing in as evidence ("unrecoverable for a personal brand"). Synthetic images that resemble real people, places or events always need disclosure under Art. 50 (see #32). Measure saves and sends per reach against my own text-post baseline.

### C. Copy frameworks and content patterns

#### 7. Answer-shaped content for AI citation · L1 · STRONG

One post = one complete answer to one real question: claim in sentence one, evidence attached, no back-references. Answer engines lift a chunk, not a post, so the chunk must stand alone. This opens a channel not gated by followers or early velocity. It does not drive feed reach.

- **Evidence:** Semrush (vendor, 325k prompts / 89k cited LinkedIn URLs, Jan–Feb 2026): LinkedIn is cited in ~11% of AI answers (second after Reddit); the median cited post has 15–25 reactions and ≤1 comment; ~95% of cited content is original; ~75% of cited authors posted 5+ times in the previous four weeks. A preprint (arXiv 2603.29979) reports structure alone adds +17.3% citation rate.
- **Do:** mine 15–30 verbatim questions from client calls, inbox and Reddit. Sentence 2 carries the evidence: a number with its denominator and date, a tool with its version, or a named source. Long form goes in a native LinkedIn article (500–2,000 words) with question-shaped subheads. About 1 in 3–4 posts answer-shaped.
- **Watch / measure:** the hook-vs-answer collision (the feed wants the payoff withheld, retrieval wants it first). A fabricated statistic, once cited, is near-irreversible. KPI: citations across 10–20 fixed target questions, re-asked monthly per engine. Expect nothing for 4–8 weeks.

#### 8. Carousel / document architecture · L1 · SPLIT

Ordered slides where each slide's only job is to earn the next swipe. On LinkedIn that means a PDF document post, since native carousels were retired in December 2023.

- **Evidence:** LinkedIn document posts 6.60% ER (van der Blom, 1.3M posts, self-published). Instagram Q2 2026: carousels 0.50%, Reels 0.48%, static 0.33% (Socialinsider, vendor), but the ranking flips with the denominator. Whether plain text still earns the most raw reach on LinkedIn is unresolved. Slide-count "sweet spots" and completion cliffs ("−40% at 15 slides") trace to no measurement firm.
- **Do:** one 4:5 template (1080×1350); hard ceiling of 9 slides plus a padding audit. Cover: a specific 4–8-word claim readable as a thumbnail (Polish loses a word or two of headroom). Slide 2: the stakes, not an intro. Body slides ≤40 words, each ending on an open loop. At least one first-party element. The caption carries the hook for people who never swipe. Publish a text twin the same week, because only text earns AI citation.
- **Watch / measure:** image-only PDFs are invisible to screen readers and answer engines; unredacted client screenshots are a GDPR problem. KPI: swipe completion and saves; comments that name a specific slide.

#### 9. Comment-driven CTA design · L1 · MODERATE

A closing ask designed for substantive replies and reply depth, kept clearly apart from engagement bait.

- **Evidence:** Meta's engagement-bait demotion is published policy. LinkedIn has no help page naming "engagement bait"; practitioners imported the term from Meta. A link in the post body cuts median reach ~18.8% (van der Blom). The "−60% for bait" family of numbers are vendor claims citing each other.
- **Do:** choose the objective first — comment-to-unlock buys leads and costs distribution. Write the post with no CTA; if there's no real open question, ship without one. Generate 10 candidate questions, each naming a concrete object from the post. Simulate replies from three personas and kill the question if replies come out under 12 words or near-identical. Block 30 minutes in the first two hours to reply by name.
- **Watch / measure:** imperative phrasing ("Drop your take below") pattern-matches bait. AI-written questions attract AI-written replies. KPI: median comment length, two-level reply threads, share of commenters outside first-degree connections.

#### 10. Contrarian / pattern-interrupt takes · L1 · STRONG

A first line that asserts a thesis against my own niche's consensus, stated flat. No "unpopular opinion:" label, because announcing the interrupt destroys it.

- **Evidence:** controversy follows an inverted U — it raises discussion up to a moderate level and lowers it past that, with a lower peak when people are identifiable (Chen & Berger 2013, *JCR*). On X a reply is +5.0 and a mute −58.8, so it takes about 12 replies to offset one mute. Out-group posts get shared ~2x (Rathje et al. 2021, *PNAS*), but that's news and political accounts, not a named consultant.
- **Do:** gate first — do I believe it, can I back it with something I measured, can I defend it live for 2–4 hours? Run a steelman kill test on a different model from the one I draft with. Line 1 states the position; evidence goes in the body. Concede where the consensus is right. Attack practices, never named people or companies (Polish personal-rights and defamation law apply). At most about one a month.
- **Watch / measure:** an LLM-generated "contrarian" take is a consensus position by construction. The Polish market is smaller and denser, so the blast radius is bigger. KPI: ratio of substantive disagreement to agreement, comment length, follower delta.

#### 11. Dwell-time copy architecture · L1 · STRONG

Structure the body so the reader expands it and keeps reading: fold placement, line rhythm, a curiosity gap at the truncation point, a late payoff. The report's line: *stop writing to be liked, start writing to be finished.*

- **Evidence:** LinkedIn Engineering confirms dwell time, including passive lingering, as a ranking signal. AuthoredUp (vendor, 372,126 posts): the fold sits at ~140 characters on mobile and ~210 on desktop; ~57% of engagement is mobile; posts of 1,301–2,000 characters show 2.61% median ER vs 2.10% under 400 characters (correlational — substance, not length). The popular dwell-second bands are one vendor report being copied.
- **Do:** write the one-sentence payoff first, beat-map the draft, and put the biggest payoff late (resist the inverted pyramid). Compose the first ~140 characters so the fold cuts mid-tension, and check it in a real mobile preview. One idea per line, no paragraph over three sentences, then break the rhythm once on purpose. Cut after the point where a reader would rationally stop.
- **Watch / measure:** tease-and-underdeliver — an expansion followed by short dwell is the strongest negative signal. The staccato one-line format now reads as AI. KPI: ER per impression in the first 60–90 minutes, comment substance, saves, against my own median over 30+ posts.

#### 12. Hook engineering · L1 · SPLIT

The opening unit that stops the scroll: 1–3 lines above the fold, or the first ~3 seconds of video. The taxonomy lasts; specific templates saturate within 6–12 months.

- **Evidence:** concreteness is an inverted U — helped 8.7% and hurt 50.9% of Upworthy headlines (Aubin Le Quere & Matias, *Scientific Reports* 2025). MagicPost (vendor, 1.18M LinkedIn posts, correlational): question openers get ~34% fewer median likes than other openers in every follower band; a number in the first line, 35 vs 26 median likes. Hook-rate benchmarks are vendor-only and conflict.
- **Do:** write the body first. Have the model pull the five most surprising *verifiable* facts; if there are fewer than three, go get a number. Generate 12–20 first lines across at least four hook types. No question openers on LinkedIn. Rewrite the lead at five concreteness levels and take level 3. Kill anything matching a known template ("Unpopular opinion:", "Let that sink in.", "It's not X. It's Y.", "Here's the thing:").
- **Watch / measure:** a hook the body doesn't pay off is worse than a weak hook. AI detectors flag non-native English writers ~61% of the time (Liang et al.), and a Polish author writing in English is exactly that population. KPI: ER per impression in the first 60–90 minutes.

#### 13. Listicle formats · L1 · SPLIT

A numbered set of self-contained items, count announced in line one. The payoff has moved from the saturated feed to AI retrieval.

- **Evidence:** Evertune (vendor, May 2026): 63% of ~400M AI citations went to listicle pages. Numbers in headlines raised click-through in Upworthy tests (Banerjee & Urminsky, preliminary working paper — direction only). No study tests an "N mistakes" post against an equally substantive un-numbered one.
- **Do:** pull items from my own notes and post-mortems, each with a source quote. Never pick the number first; dedupe to the true count (the report expects 14 candidates to collapse to about 6). Most surprising item first, each item 40–60 words (claim, evidence, boundary condition). At most one listicle in five posts. A directly translated English listicle "reads as imported marketing" in Polish.
- **Watch / measure:** "give me 10 mistakes" returns the training-corpus median. Tells: parallel openings, uniform item length, round counts, no proper nouns inside items. KPI: saves per impression; monthly citation check.

#### 14. Narrowcast / share-to-DM trigger design · L1 · STRONG

Write so one reader forwards it privately to one specific person. The report calls this *the single best-fitting tactic* for a Poland-based B2B/technical creator.

- **Evidence:** broadcasting makes people self-presentational; narrowcasting to one person makes them share what's useful to the recipient, and copy can induce that focus (Barasch & Berger 2014, *JMR*, six studies). Mosseri (Jan 2025, official): watch time, likes-per-reach and sends-per-reach are Instagram's top three signals. LinkedIn added Saves and Sends to post analytics in late 2025. "Sends = 3–5x likes" and "84% of sharing is dark social" have no source.
- **Do:** start from the thing being forwarded (a number, template, decision rule, warning, checklist) and privately name a real recipient. Put a role-plus-constraint descriptor in the first two lines ("solo consultants who just made their first hire and are still doing delivery"). Recipient-useful sentences should outnumber self-presenting ones 2:1. The post must survive being pasted into Slack with no caption. Never write "send this to…" or "tag someone".
- **Watch / measure:** success is invisible — a post forwarded 40 times can look like a flop. KPI: sends-per-reach against my own 30-day baseline, plus a hand-logged count of "a colleague sent me this" DMs.

#### 15. Original data drops · L1 · SPLIT

The payload is a number I produced, published with its n and method so people can carry it away and repeat it (attributed back to me).

- **Evidence:** practical utility, surprise and interest each predict making the most-emailed list (Berger & Milkman 2012, *JMR*). BuzzSumo × Backlinko (vendor, 912M posts): 94% earn zero backlinks; original research earns *links*, not necessarily shares. **No effect size exists** for "original statistic → more reach".
- **Do:** list what I already measure. Write the question before looking at the data. Analyse with a NOT_IN_DATA rule so the model can't estimate. Run a hostile-methodologist pass and kill the post if the top objection is fatal. One headline number. Feed post of 150–300 words with the number and its n in line 1; the same week, an article with number, n, date and method in one sentence. English for citation, plus a Polish adaptation that names the local context.
- **Watch / measure:** never let a model write the number. GDPR small cells: "an n of 8 in a named niche is identifiable". Judge across 10+ drops. KPI: saves, reshares with commentary, re-quotation of my number.

#### 16. Personal narrative arcs · L1 · STRONG

A micro-story from something that actually happened: situation, complication, turn, consequence, and the lesson last in one line.

- **Evidence:** narrative transportation correlates with affect .57, attitude .40, intention .28, belief .23 (van Laer et al. 2014 meta-analysis, *JCR*). But over 77 experiments and 24,380 people, narrative didn't persuade better than non-narrative (Rahmani et al. 2025). MagicPost (vendor): "challenge overcome" posts 1.03% median ER vs a 0.39% platform median. The edge is **a supply constraint, not a psychological one**: real stories can't be multiplied by buying tokens.
- **Do:** start from an incident, never a topic. Let the AI interview me one question at a time, then produce a fact-locked draft that writes `[MISSING: x]` instead of inventing. Make the complication visible inside the mobile fold. At least three specifics a stranger couldn't invent, plus one true detail that serves no lesson. Confidentiality pass. 2–4 arcs a month.
- **Watch / measure:** the model may reorganise, question and cut, but "may not add a single fact". Burnt arcs: the rejection montage, the taxi-driver epiphany, fired-then-founded. KPI: comment substance and the share of "this happened to me too" replies.

#### 17. Persuasion formulas · L1 · SPLIT

PAS, AIDA, BAB and 4U as private scaffolds. Use the structure, then delete the visible template before publishing, because the visible template is now **the single most reliable AI tell**.

- **Evidence:** on X, agitation buys likes at +0.5 and risks mutes at −58.8. Strong fear appeals with low efficacy produce the most defensive responses (Witte & Allen 2000). There is no independent large-N study of formula vs reach; "2–3x higher engagement" claims have no method.
- **Do:** write down the one verifiable particular first; if there isn't one, stop. BAB is the LinkedIn default. PAS only when I can show a real efficacy step. 4U grades a first line. AIDA belongs in newsletters and landing pages. De-signature pass: sentence-length SD above 8 words, no "It's not X, it's Y", no gratuitous triads, at least two proper nouns and one number. Same formula at most twice in five posts.
- **Watch / measure:** cadence uniformity (runs of 18–24-word sentences) is the most reliable general tell; em dashes no longer are. KPI: substantive comments (>10 words) in the first hour; saves.

#### 18. Proof-of-work receipts · L1 · SPLIT

Verifiable artifacts attached to a claim — screenshots, raw exports, logs, commit hashes, before/after pairs, verbatim quotes — so readers can check instead of trusting.

- **Evidence:** the defensive effect is the reliable one: receipts move a post out of the "generic, perspective-free" bucket LinkedIn suppresses. The circulating "~47% reach reduction / ~94% detection" figures are vendor-circular. No effect size exists for receipts on feed reach.
- **Do:** build a capture habit (a receipts folder, a screenshot hotkey, before-state captures). Write the claim as one falsifiable sentence, then audit: anything UNSUPPORTED gets cut or reframed as opinion. Use the smallest artifact that settles the claim, preferring ones that are expensive to fake (a live URL, a public commit). Redact with solid blocks using non-generative tools, then have a vision model try to deanonymise it.
- **Watch / measure:** GDPR and confidentiality leaks are irreversible — sidebars, tab titles, tokens, notification badges. Model-invented quotes or URLs destroy the whole premise. Measure citability: claim, source and date in the same sentence.

### D. Virality science and constraints

#### 19. AI citation visibility as a second objective function · L1 · STRONG

Treat "retrieved and quoted by ChatGPT Search, Google AI Mode and Perplexity" as its own target, with its own reward function and formats, not a side effect of posts that do well.

- **Evidence:** in GEO (Aggarwal et al., KDD 2024) keyword stuffing is the only tested change that scored *below* baseline, so SEO habits backfire. Semrush (vendor): LinkedIn articles of 500–2,000 words take 50–66% of LinkedIn citations, feed posts 15–28%; 54–64% of cited content is knowledge-sharing or advice. Up to ~93% of AI Mode sessions end without a click, so the value is a named mention inside the buyer's answer.
- **Do:** make two artifacts from the same substance (about 20 extra minutes): a feed post for engagement, and a hook-free 500–2,000-word article, canonical copy on a property I own. Build 30–50 real prospect questions from DMs and sales calls. Run that prompt set weekly across the three engines (a DIY script beats buying a tool). For a specialist under 1,000 followers with proprietary data, the report calls citation "the BETTER first objective".
- **Watch / measure:** counterfeit evidence satisfies this reward function, so every claim needs a source, a date and an n, or it's cut. Shares can move 65% in six months (vendor). KPI: citation share on the fixed prompt set.

#### 20. AI slop and the authenticity penalty · L1 · SPLIT

The cost of content that reads machine-written. Algorithmically, since 2026-05-20 LinkedIn removes low-effort AI content from out-of-network recommendations (connections still see it — a pass/fail gate, not a score). Socially, readers disengage, and since 2026-07-30 they can report "seems like AI slop". The target is low effort; AI assistance is explicitly allowed.

- **Evidence:** the audience penalty runs through **lower perceived creator effort** weakening the parasocial bond, not through quality concerns or AI aversion (Carney, Riveros & Tully, *JCR* 2026; TikTok data plus 8 preregistered experiments). Comments, shares and DMs fall first. **The size of the penalty is unknown**: every circulating magnitude is untraced and they contradict each other.
- **Do:** before opening a model, hand-write 3–5 lines containing something only I have. If I can't, I don't post that day. Prompt with a banned-construction block and "add no facts I did not give you". Run a slop rubric in a fresh context plus "could a competitor without my data write this?". Hand-write the first two lines and the last line. Set cadence by substance: three substantive posts a week beat twelve empty ones. Never automate comments.
- **Watch / measure:** "humaniser" and detector-passing tools fight the wrong target. The penalty is invisible, so authors misread it as bad timing and post more. Polish model output reads stiff and translated, so edit harder. KPI: substance rate, the share of posts with a proprietary number, named artifact or dated scene. Target 100%; below 80% the system is failing.

#### 21. AI vs human content performance — unresolved · L2 · STRONG

The two best-designed studies point in opposite directions. The deciding test — same author, same substance, randomised AI draft vs hand-written, on LinkedIn after May 2026 — has never been run.

- **Evidence:** GPT-4 posts on brand X accounts beat human ones (Huang & Zhou, *Public Relations Review* 2025). The Instagram field study is a null (see #2 above). Key confound: in detector-based observational data, "AI-detected" and "low-effort" are the same population, so those studies measure the cost of genericness, not of AI authorship.
- **Do:** name the objective (reach or relationship) and the account type (brand-transactional or personal-relational). Before accepting any performance number, ask six questions: what was the AI condition, the human condition, platform and date, design, funder, p-value. Self-testing needs low hundreds of posts; twelve a month can't resolve it within a year.
- **Watch:** cherry-picking whichever study suits the argument; applying pre-May-2026 results to today's LinkedIn.

#### 22. Berger word-of-mouth synthesis (STEPPS + 2025 review) · L1 · SPLIT

Berger's 2025 *Annual Review of Psychology* (CC-BY) organises sharing around six sender drivers — impression management, accessibility, emotion regulation, information acquisition, social bonding, persuasion — and four moderators: audience, modality, channel, device. STEPPS is a teaching mnemonic, not the theory.

- **Evidence:** it's a narrative review with **no effect sizes**, so any percentage attributed to "Berger 2025" is invented. Awe, anger and anxiety increase sharing and sadness decreases it (Berger & Milkman 2012): arousal matters, not valence. The model predicts how likely one reader is to share, not how far a post spreads.
- **Do:** pick one primary driver before drafting and finish the resharer sentence. Broadcast: "someone who reshares this is telling their network they are ___". Narrowcast: "a reader sends this to ___ because ___". Speak emotional drafts as voice notes, since writing suppresses emotion. Arousal check: a sad "we lost the client" post predicts comments, not reshares — shift it to anxiety or anger about the system and add a forwardable handle.
- **Measure:** reshare-to-like ratio and comment composition, not impressions.

#### 23. Engagement-driven LLM generation (research) · L3 · STRONG

The academic work on "AI optimising for engagement", in four families: RL against a simulated network, LLM-assisted adaptive experimentation (LOLA), best-of-n against an engagement reward, and LLMs as popularity forecasters. The common pattern: **the model varies, something else selects.**

- **Evidence:** the only deployed effect size in the field is **+1% sessions, +0.4% weekly active users** from rejection-sampled email subject lines (Zeng et al., arXiv 2312.12457). LOLA (17,681 Upworthy tests): an LLM prior plus a bandit beats A/B testing at low traffic, but pure-LLM approaches weren't accurate enough. RL-tuned generators win only in simulation, which overestimates engagement. RL on user feedback learns to manipulate the ~2% most vulnerable users (Williams et al., arXiv 2411.02306).
- **Do:** replace every "score this 1–10" prompt with "explain the reasons in prose, no number". Run best-of-n on phrasing only, substance fixed, N ≤ 8, scored in a fresh context against ~40 of my own past posts, then veto: publish the one that sounds like me. Use adaptive allocation only for newsletter subject lines, thumbnails, ads and landing pages, never feed posts.
- **Watch:** the generator judging its own output — the default setup, and the one the research says fails. Any tool promising large reach gains claims more than this literature shows.

#### 24. Limits of virality prediction · L0 · STRONG

Less than half of a post's spread is knowable in advance, and the gap is inherent. This isn't a tactic; it's the prior that constrains every other item.

- **Evidence:** over ~1 billion Twitter diffusion events, the average cascade size is 1.3, ~99% of adoptions come from the root or its immediate followers, and viral hits are "closer to one in a million" (Goel et al., *Management Science* 2016). Popularity is driven by **the size of the largest single broadcast** — today usually algorithmic amplification or one big account resharing. The best models explain less than half of cascade-size variance, and simulation shows more data wouldn't fix it (Martin et al., WWW 2016). High 2026 ML scores (e.g. AUC 0.836) come from solving an easier, redefined task.
- **Do:** export my last 50 posts and compute median reach and the interquartile range; anything inside it needs no explanation. No change to format, cadence or topic on fewer than 20 posts per variant. Write the expected outcome before publishing. For anything above P90, check non-content causes first (a big reshare, an external link, news, timing). Put the saved analysis time into distribution: people with audiences, newsletters, podcasts, talks.
- **Measure:** rolling-30 median, IQR and P90/median. Changing strategy more than once a quarter means reacting to variance. Never pay for a "virality score".

#### 25. Moral-emotional language — quantified effect · L1 · SPLIT

Words that are both moral and emotional ("hate", "disgust", "greed") go with more sharing, driven by group-based moral signalling.

- **Evidence:** the number to quote is **IRR 1.13 [1.06, 1.20]**, about +13% per word (Brady, Rathje, Globig & Van Bavel, *PNAS Nexus* 2025; 27 studies, N = 4.8M). Per standard deviation that's +8% (dictionary) or +16% (GPT scoring). The George Floyd dataset showed a significant *negative* effect. All data is US political Twitter 2018–2020, and ~91% of the meta-analytic sample comes from the authors' own group. There is no effect size for LinkedIn, B2B, non-political topics or non-English text.
- **Do:** use an LLM to *measure* drafts, not to generate moral content (LLM scoring is validated across languages, which matters for Polish). Set a ceiling from my 20 best and 20 worst posts. Aim the moral frame at a practice or incentive structure, never at a person, company or group. Evidence gate: quote the sentence that says who is harmed and how I know, or delete the claim. Then ask what a reader who disagrees does — the mute test.
- **Watch / measure:** the literature only measured upside. The report rates this the highest blast radius of any copy item: mutes are permanent and X labels whole accounts. KPI: reshares per impression paired with follower churn in the 48 hours after.

#### 26. Network structure, seeding and creator size · L0 · STRONG

In the 2026 interest-graph regime, followers don't guarantee delivery and non-followers are reachable without seeding. Classical seeding research is "largely OBSOLETE" for posting from my own account. Many of this item's fields came back uncertain.

- **Evidence:** X's code runs a small-account subsidy: one candidate slot per request, capped at 1,000 impressions, first 24 hours only, ending at 1,000 followers; out-of-network posts carry a 0.75 weight. TikTok officially says follower count is "not a direct factor". The famous ~8x hub-seeding multiplier (Hinz et al. 2011) could not be verified. Dense clusters saturate fast and hit a hard ceiling.
- **Do:** build for composition, not size — "a 2,000-connection network of actual practitioners in your niche beats an 8,000-connection network assembled from accepting everything". Quarterly, cluster the people who engaged with my last 30 posts. If one cluster is more than about half, the ceiling is structural: pick five central people in each of three adjacent communities, engage substantively for four weeks, then connect with a one-sentence reason. Check monthly that my last 20 posts read as one topic.
- **Watch / measure:** LinkedIn automation tools (Taplio, Dripify, Expandi, PhantomBuster) breach the User Agreement. KPI: share of engagement from my largest cluster — falling means bridging works. Follower count is the worst metric here.

#### 27. Platform AI labeling and C2PA provenance · L2 · SPLIT

C2PA Content Credentials, invisible watermarks (SynthID) and platform classifiers decide auto-labels regardless of what I disclose. "You do not control the label. You control whether the label, when it appears, is consistent with what you already said."

- **Evidence:** the C2PA steering committee includes TikTok, Meta, Google, Microsoft, OpenAI, Amazon and Adobe; **LinkedIn is absent** at every level. Recursive paraphrasing defeats every class of text detector (Sadasivan et al., TMLR), so human-edited AI text isn't reliably detectable and platforms fall back on behaviour: cadence, templating, cross-account duplication.
- **Do:** the cheapest strategy is a format choice — text-first posts with real screenshots of my own work have no auto-label exposure. Drop AI-generated header images on B2B posts. Before publishing an image, run `c2patool` over it and check the manifest against the caption. When an image post needs disclosure, name the tool and step in the post body. Never strip manifests.
- **Measure:** posts that got an *unexpected* AI label — target zero.

#### 28. The AI disclosure paradox · L0 · STRONG

Saying you used AI reliably lowers trust, perceived authenticity and competence, even when the disclosure is voluntary and honest and the work is good.

- **Evidence:** across 13 experiments, people who disclosed AI use were trusted less (Schilke & Reimann, *OBHDP* 2025). The mechanism is lower perceived effort, and disclosures that *show* effort reduce the drop (Carney et al., *JCR* 2026). A detailed "how and why" AI policy at the organisation level *increased* trust compared with no disclosure (Waddell 2026, N=675). People discount AI-labelled headlines even when they're true or human-made (Altay & Gilardi, *PNAS Nexus* 2024).
- **Do:** write one standing process statement for the profile or footer, in Waddell's "how and why" shape. Per post, disclose when the model shaped the substance or argument, or with synthetic media, not for spell-checking. A per-post disclosure names the tool, the step and what I did, with at least one verb that has *me* as the subject ("I pulled", "I verified"). On LinkedIn it goes at the end or in the first comment, never in the first two lines.
- **Watch:** a bare "written with AI" label is worse than silence or a full process note. Claiming verification I didn't do is a checkable falsehood and an unfair-commercial-practices risk. Disclosing on every post wears the signal out.

#### 29. Timing, cadence and frequency · L2 · STRONG

Three separate decisions usually sold as one: when to post, how often, and how far apart.

- **Evidence:** only spacing has a documented mechanism, and only on X (author-diversity decay). On frequency, Buffer (vendor, 2M+ posts) finds 11+ posts a week earn +16,946 impressions per post, while Metricool (1.06M accounts) finds LinkedIn impressions down 23% year on year as posting intensified. The report leaves that dispute unresolved. Buffer's consistency study — posting in 20+ of 26 weeks meant 5x median engagements — is evidence for consistency, not volume. Best-time tables contradict each other, and Buffer itself says timing "is not the secret sauce".
- **Do:** set cadence from supply — count how many things in the last four weeks passed the human-input gate. On X, space original posts so they don't compete in one candidate pool. On LinkedIn, default to at most one post a day. Post when I can spend 30 minutes replying: CET business hours for a Polish audience, 15:00–23:00 CET for a US one. Test frequency only as a one-way ratchet: one extra post a week for a quarter.
- **Measure:** monthly total reach alongside per-post median. Skip vendor best-time tables.

### E. System and workflow patterns

#### 30. Analytics feedback loop · L2 · SPLIT

The measurement layer that decides which tactics I keep. Normalise against my own baseline and judge blocks, never single posts. The signals rankers actually optimise (dwell, expansion, private forwards) are hidden, so everything is a proxy.

- **Evidence:** LinkedIn has no member-level organic analytics API. Power arithmetic: posts per arm = 15.70·σ²/(ln(1+lift))². At three posts a week (78 per arm per year) and a typical σ of 0.7 on ln(impressions), a year of posting resolves about a **40% lift**. 10–20% effects are "permanently out of reach" at solo volume.
- **Do:** once (~1 h), export the last 60–100 posts, compute σ, and work out the minimum detectable lift for a 12-week block. Declare one objective and one decision metric per quarter. At most one experiment a quarter, only on "doubling" questions (format, topic, halving length), interleaved A B A B. Have the model read results with a forced-null prompt that forbids naming a winner. Keep a manual ledger of inbound conversations and the post that triggered each.
- **Watch / measure:** Polish and English posts are separate populations — never pool them. Scrapers and extensions breach LinkedIn's prohibited-software policy. KPI for a solo consultant: **inbound conversations attributable to content, counted by hand.**

#### 31. Anti-pattern — inauthentic amplification · L2 · SPLIT

Manufacturing early velocity: pods, comment rings, reciprocal deals, bought engagement, auto-commenting bots. The sanctioned replacement is curated manual commenting.

- **Evidence:** LinkedIn's policies prohibit artificial engagement and any prior agreement to like or reshare, and its Prohibited Software policy bans automated engagement tools. On X, pod engagement arriving from a group chat has no ranking impact, while blocks and reports feed per-account labels with 180-day memory. The penalty sizes in circulation are untraceable.
- **Do:** exit pods without a wind-down and uninstall anything that engages on my behalf. Build a list of 30–50 accounts chosen by audience overlap (5–10 as tier one), re-cut quarterly. Daily, 20–40 minutes: find 3–8 posts where I have a non-substitutable contribution and write 25–60-word comments with one concrete particular from my own work. AI may draft; I rewrite and post. Never agree to mutual engagement. Fifteen substantive comments a day is credible; 200 isn't.
- **Watch:** the replacement turns back into "a pod with extra steps" if the comments are empty or I propose mutual support. The Polish professional network is small and dense, so a recurring engager set is easy to spot.

#### 32. Compliance layer — EU AI Act Article 50 · L2 · STRONG

The transparency gate between draft and publish under Regulation (EU) 2024/1689. Art. 50(4) puts a disclosure duty on *deployers* for deepfakes and for AI-generated text published to inform the public on matters of public interest. Text is exempt when a human reviewed it **and** a named person holds editorial responsibility. Art. 50(1) covers chatbots and auto-reply agents.

- **Evidence:** deployer duties apply since 2026-08-02. For a micro-enterprise the fine cap is the lower of 3% of turnover or EUR 15M — "four figures, not eight". The Commission lists eight public-interest domains: politics and democratic processes; public administration and services; justice and law enforcement; fundamental rights; public security; public health; environmental protection; consumer safety. Spell-checking doesn't count as human review. The report read the text through the artificialintelligenceact.eu consolidation, not the Official Journal, so verify before relying on it.
- **Do:** one-off (30–45 min) — record my deployer status, keep the eight-domain checklist, draft three disclosure lines (synthetic media, text, auto-reply agent), and adopt a standing policy: no AI avatars, no cloned voice, no photoreal generated images of real people, places or events. Check Poland's national implementing act once. Per post (under a minute): synthetic media resembling something real → disclose. Text in one of the eight domains → was it substantively reviewed, logged, published under a named editor? If yes, exempt. An AI talking to readers → Art. 50(1). Keep a three-line review log: what I changed, what I verified, who is responsible.
- **Watch / measure:** over-disclosure is the most common and costly failure, and a blanket notice in the bio isn't compliance. Fully autonomous publishing silently forfeits the exemption, and an AI "polish pass" after review can void it. Measure conformance, not performance: 100% of posts with a gate verdict and a review log.

#### 33. Hook A/B testing loop · L1 · STRONG

On organic channels an "A/B test" is really a confounded sequential comparison. The useful questions are what I can learn at my volume, which priors to borrow, and what I just have to decide.

- **Evidence:** measured textual effects are small, 2–10% (about 2.3% per negative headline word; concreteness ±5–10%). Models can't pick winners (GPT-4o 58.3% vs 50.9% random). At a 5% baseline, detecting a 10% relative lift needs about 30,400 impressions per arm.
- **Do:** if there's any budget, test the hook as a paid ad for a few tens of euros and publish the winner organically. Otherwise use email subject lines, YouTube Test & Compare or Instagram Trial Reels. Per post: write one hook by hand before opening a model; generate 12–15 candidates few-shot on my 15 best first lines; screen the top 5–6 for comprehension only (separate contexts, random order, no labels); aim for concreteness around 3/5; check the post delivers what the hook promises; choose by judgement. Tag every hook with a fixed 6–8-type taxonomy and say nothing about a type with fewer than 8 observations.
- **Watch:** stopping on a win; asking a model "which hook will win"; a loop that converges on one hook shape, which creates exactly the cross-post uniformity classifiers look for.

#### 34. Human-in-the-loop editorial protocol · L1 · SPLIT

A written, auditable gate that says in advance what the model may produce (structure, variants, compression, critique, retrieval, mechanical checks) and what a human must supply (the claim, the evidence, at least one non-substitutable specific, what to leave out, the publish decision), with a record of who approved what.

- **Evidence:** the Art. 50(4) exemption needs review *and* a named editor, and the Commission FAQ (24 July 2026) excludes superficial checks. Estimates of AI-written LinkedIn long-form run "between 41% and 81% depending on whose detector you believe" (Pangram vs Originality.ai, both vendors). No measured reach effect of gating exists; its job is keeping me out of the demotion bucket.
- **Do:** setup (2–4 h): write the two columns down; audit every timeout ("what happens if the human never responds?"); make approval a merged PR outside the agent runtime; log date, post id, gate results, **what the human added**, approver. Per post (8–15 min on top of drafting):
  1. A five-line brief before any model runs: claim / evidence / the thing only I know / audience / one action. No line 3 means I have a topic, not a post.
  2. Draft.
  3. Claim ledger (mine / public / ABSENT) — source or delete every ABSENT row.
  4. Substitution audit: swap in a competitor's name and different numbers. If the post still works, it fails.
  5. Hostile-editor pass, then a substantive hand edit that changes a claim, a hedge, the order, or cuts something.
  6. FREEZE — no model touches the text again. Record approval, publish.
  - Rotate the human input: a number with n and method; a dated incident; a named artifact or version; a judgement with its cost; a correction of my earlier position.
- **Watch / measure:** rubber-stamp drift within about three weeks. Timeout-as-approval (Kestra `Pause` defaults to resume; Cloudflare's `waitForEvent` example proceeds on expiry). English-only slop linters and stylometry defaults silently pass Polish. KPI: rejection rate of finished drafts; below 20% the gate is decorative.

#### 35. Repurposing pipeline · L1 · SPLIT

One substantive pillar (article, talk, shipped project) → N posts across M platforms, each **re-authored from the evidence**, not excerpted and cross-posted. Derivation vs duplication is the whole line.

- **Evidence:** more rewriting correlates with better performance, but the per-post effect is tiny (p<0.001, Spearman −0.05; arXiv 2505.03769). Meta's March 2026 rules can make a whole Page non-recommendable over repost history, and video fingerprinting identifies the first uploader. The big vendor multipliers are direction-only.
- **Do:** disable auto-cross-posting everywhere — "the single highest-value action". Pick 2–3 surfaces I can be native on and write a spec for each (length band, formats, ranked signal, hard rules). Extract claims from the pillar; **the number of independent claims is N** (realistically 4–8, not 30). Re-author each post in its own call, reloading the source every time, never deriving from a derived post. Name in one sentence what each post adds; if nothing, cut it. Polish is transcreation: budget 1.5–2x.
- **Watch / measure:** auto-publishing to N surfaces; orphaned evidence (compression drops the number); "In my recent article…" openers. KPI: derivation ratio, 4–8 posts per pillar; above ~12 means duplication.

#### 36. Voice corpus and style transfer · L2 · SPLIT

My own published writing as a versioned corpus tagged by brand, language and register, used to condition generation and to score drafts with non-LLM stylometry, so "does this sound like me" becomes a number. It's a floor, not an objective.

- **Evidence:** no inference-time personalisation method reached even the similarity between two *different* humans (LUAR 0.484–0.508 vs a 0.626 human floor; methods spread by only 0.024) — "your prompt engineering is not the variable" (PersonalBench, arXiv 2608.19746, preprint). Scoring a single post is wrong about a quarter of the time (AUC 0.76, vs 0.96 at five posts). Reliable Burrows's Delta needs 2,500–5,000 words, 5,000 for Polish, and Polish is the hardest language for authorship attribution (PAN 2018). Per-author LoRA adapters are the only family with evidence of beating prompting.
- **Do:** today, archive every published post in full text, tagged by brand, language, date and platform — the only step whose delay compounds. Exclude posts that aren't really mine. Write a six-section style spec where every claim is backed by a quote or count from the corpus. Score with `faststylometry`, after overriding its default token pattern, which silently strips Polish diacritic words. Calibrate on 30–50 genuine vs 30–50 impostor batches per language, score batches of 5+ drafts, and keep `voice_delta_pl` and `voice_delta_en` as separate series. Run advisory for four weeks before making it blocking.
- **Watch / measure:** LLM judges and embeddings measure topic, not style. A *rising* mean score or falling within-batch variance means convergence on the corpus mean — duller writing. Never pool Polish and English.

## 📒 How I'd wire it together

The items compose into one pipeline. This is the order I'd actually run it in:

1. **Corpus first** (#36). Archive everything I publish, per language. Nothing else works without it.
2. **Brief before model** (#34, #20). Five lines, with line 3 = the thing only I know. No line 3, no post.
3. **Pick the objective** (#19, #7). Feed reach or AI citation — different artifacts from the same substance.
4. **Pick one sharing driver and one shape** (#22, #14, #16, #15). Narrowcast utility is the best default for my audience.
5. **Draft with the model, facts locked** (#16, #15). The model structures and compresses; it adds no facts.
6. **Claim ledger + substitution audit + slop rubric** (#34, #20, #17).
7. **Hook: hand-written first, then candidates, comprehension screen only** (#12, #33; debunk 18).
8. **Dwell pass and fold check on a real phone** (#11).
9. **Mute test** on anything contrarian or moral (#10, #25).
10. **Art. 50 gate + review log, then FREEZE** (#32, #28).
11. **Publish when I can reply for 30 minutes** (#29, #9).
12. **Judge in blocks, Polish and English separately; count inbound conversations by hand** (#30, #24).

The agent design that would automate the listening, drafting and approval steps is in [[Marketing Agent Research]].

## ⚔️ Tensions the research leaves open

- **Hook vs answer.** The feed wants the payoff after the fold; retrieval wants it in sentence one. Resolution: about one post in 3–4 answer-shaped, plus a text twin for every carousel.
- **Frequency.** Buffer's "more posts, more reach per post" vs Metricool's "LinkedIn impressions −23% as frequency rose". Unresolved; cadence from supply sidesteps it.
- **Where the disclosure goes.** End of post or first comment for text (#28) vs the post body for image posts (#27). Both are defensible for their format.
- **How much of LinkedIn is AI-written.** 40.5% (Pangram) vs 81% (Originality.ai). Both vendors sell detectors.
- **AI vs human performance.** Unresolved until someone runs the within-author randomised test (#21).
- **Em dashes.** One item calls them a slop tell, another says they're no longer diagnostic. Cadence uniformity is the better signal.

## 📖 Resources

Primary sources the report leans on hardest:

- [X's open-sourced ranker — `home-mixer/params/param.rs`](https://raw.githubusercontent.com/xai-org/x-algorithm/main/home-mixer/params/param.rs) (xai-org/x-algorithm, Apache-2.0)
- [GEO: Generative Engine Optimization — Aggarwal et al., KDD 2024 (arXiv 2311.09735)](https://arxiv.org/abs/2311.09735)
- [Semrush — LinkedIn AI visibility study (2026-03-10)](https://www.semrush.com/blog/linkedin-ai-visibility-study/) — vendor, large N
- [Brady et al. — moral-emotional language replication and meta-analysis, PNAS Nexus 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12578369/)
- [Goel, Anderson, Hofman & Watts — The Structural Virality of Online Diffusion](https://5harad.com/papers/twiral.pdf) · [Martin et al. — Exploring Limits to Prediction in Complex Social Systems (arXiv 1602.01013)](https://arxiv.org/abs/1602.01013)
- [Berger — Annual Review of Psychology 2025, word of mouth (PDF, CC-BY)](https://www.annualreviews.org/doi/pdf/10.1146/annurev-psych-013024-031524)
- [Barasch & Berger — Broadcasting and Narrowcasting, JMR 2014](https://journals.sagepub.com/doi/10.1509/jmr.13.0238)
- [Aubin Le Quere & Matias — headline concreteness, Scientific Reports 2025](https://www.nature.com/articles/s41598-024-81575-9) · [Robertson et al. — negativity drives online news consumption, Nature Human Behaviour 2023](https://www.nature.com/articles/s41562-023-01538-4)
- [Hu et al. — LLMs vs fine-tuned models at picking engagement winners (arXiv 2505.03769)](https://arxiv.org/abs/2505.03769) · [LOLA — LLM-assisted online learning for headline testing (arXiv 2406.02611)](https://arxiv.org/abs/2406.02611)
- [Zeng et al. — engagement-driven content generation, deployed (arXiv 2312.12457)](https://arxiv.org/abs/2312.12457) · [Williams et al. — targeted manipulation from optimising user feedback (arXiv 2411.02306)](https://arxiv.org/abs/2411.02306)
- [PersonalBench — personalised generation vs the human floor (arXiv 2608.19746)](https://arxiv.org/abs/2608.19746)
- [EU AI Act Article 50](https://artificialintelligenceact.eu/article/50/) · [Commission FAQ on Article 50 transparency obligations](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act)
- [TechCrunch — LinkedIn adds a button to report AI-generated slop (2026-07-30)](https://techcrunch.com/2026/07/30/linkedin-adds-a-button-to-report-ai-generated-slop/) · [Pangram — AI in your feed](https://www.pangram.com/blog/ai-in-your-feed)
- [Sadasivan et al. — Can AI-Generated Text be Reliably Detected? (arXiv 2303.11156)](https://arxiv.org/abs/2303.11156) · [C2PA members](https://c2pa.org/membership/members/)

---
Template: [[templates/knowledge_note_info]]
