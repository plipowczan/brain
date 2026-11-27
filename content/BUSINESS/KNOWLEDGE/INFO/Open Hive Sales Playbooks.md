---
title: "Open Hive Sales Playbooks"
date: 2026-11-27
enableToc: true
openToc: true
tags: ["knowledge", "info", "business", "sales", "outbound", "lead-generation", "linkedin", "agents", "prompts", "automation", "methodology"]
type: knowledge-note
sources: ["_raw/processed/2026-11-27_open-hive-playbooks.md", "_raw/processed/2026-11-27_aden-hive-hive-repo.md", "https://www.linkedin.com/legal/user-agreement", "https://api.sejm.gov.pl/eli/acts/DU/2024/1221/text.html", "https://www.rb2b.com/gdpr"]
agent-created: true
summary: "The 16 public Open Hive agent playbooks (15 sales, 1 marketing) read as one GTM pipeline: what each does, the twelve prompt patterns worth reusing (drafts not sends, tracker as truth, verify side effects, score plus reason), and where they break in the EU"
---
# Open Hive Sales Playbooks

## 🗒️ Description

[[Open Hive]] publishes 16 playbooks on [open-hive.com/playbook](https://www.open-hive.com/playbook): ready prompts for its agent runtime, 15 tagged sales and 1 marketing, each with a copy counter (922 to 1,923 copies on 2026-11-27). Each one is a single prompt with `{{VARIABLES}}` to fill, a list of the skills it needs (LinkedIn Core, LinkedIn Discovery, LinkedIn Messaging, Browser Automation) and three "pair it with" links. The page says more prompts live only in the app; the app loads them from a cloud catalogue, so they are not in the open-source repo either. The public IDs skip 1020–1025 and 1028. The repo does carry a separate file of 499 one-paragraph sample prompts; my picks from it are in [[Open Hive Sample Prompts — Shortlist]].

I read all 16 end to end. They are short — most are one screen — and they are worth more as a set than one by one: together they describe a whole outbound machine and the guardrails its authors learned the hard way.

These are vendor prompts. The copy counts are Open Hive's own numbers, and no playbook reports an outcome (reply rate, meetings booked). Treat them as specs to borrow, not as proof that the motion works.

## 🔗 Links

- [The pipeline](#-the-16-playbooks-as-one-pipeline) · [What each one does](#-what-each-playbook-does) · [Patterns worth reusing](#-twelve-patterns-worth-reusing) · [Where they break](#️-where-they-break) · [What I take from it](#️-what-i-take-from-it)
- How I'd apply them to my two agent repos: [[Open Hive Playbooks — Fit for My Agent Systems]]
- The runtime they are written for, and its batch pattern: [[Open Hive]] · [[Pilot, Skill, Playbook — Open Hive's Fan-out Pattern]]

## 🧩 The 16 playbooks as one pipeline

| Stage | Playbook | Copies | Sends anything itself? |
|---|---|--:|---|
| Research | Market Mapping | 1,522 | no — an HTML report |
| Research | Competitor Intelligence | 1,101 | emails a digest to me |
| Research | ICP Discovery | 1,720 | no — a ranked table |
| List | ICP List Building | 968 | no |
| List | Signal Scraping | 978 | no |
| List | Lead Scoring | 922 | no — writes scores to the CRM |
| List | Website Visitor De-anonymization & Lead Capture | 1,322 | alerts me; never contacts the lead |
| List | Warm Intro Mapper | 1,510 | no — drafts, waits for approval |
| Outreach | Drip Email Campaign | 978 | no — drafts; sends only after approval |
| Outreach | Personalized Outbound Email Drip Campaign | 1,923 | **yes**, when the operator says "Run" |
| Outreach | Outbound BDR | 938 | **yes** — LinkedIn DMs from a fixed template |
| Outreach | LinkedIn Influencer-Based Outreach | 1,301 | **yes** — invites and DMs, daily |
| Replies | Reply Handler & Meeting Booker | 1,410 | no — drafts and a notification |
| Replies | Inbound LinkedIn Invitation Reply | 1,422 | drafts for review, then messages every pending invite |
| Replies | Inbound Sales Email Reply Sweep | 1,411 | **yes** — a fixed template to every vendor pitch |
| Hygiene | Email Deliverability & Warmup Builder | 1,251 | pauses sequences on its own; never restarts them |

Four send to other people without a review of each message: the Personalized Outbound Email Drip (the operator's "Run" approves the day's batch), Outbound BDR, the Influencer outreach and the Inbound Sales Email Reply Sweep. The other twelve stop at a draft, a table, an alert or a digest sent to me — the page's own line is "The Queen drafts; you approve."

## 🧩 What each playbook does

### Research

- **ICP Discovery** — scans my LinkedIn connections (about 3× as many as the matches I want), sorts them into 3–4 ICP buckets by headline, then re-scores each from their **recent activity**. Buying signals, strongest first: explicit pain, tool complaints or switching, hiring (especially GTM roles), using the tools I sell, building and launching, explicit asks ("anyone using X?"). Down-scores: every post has a "book a demo" CTA, all content promotes their own company, dormant longer than `{{DORMANT_THRESHOLD_MONTHS}}` (cap at 5), reposts only. Its sharpest point: **about 30% of headline matches sell to the same customers I do** (agencies, consultants, fractional CMOs) — flag them "service provider, not buyer"; they are partners, not targets. Output: name, headline, bucket, score, and one sentence on why — "the note is the most valuable column".
- **Market Mapping** — one landscape-orientation HTML report styled like a strategy deck in my site's branding: TAM/SAM/SOM top-down and bottom-up as a funnel, a 5–10-year growth line with CAGR, a competitor scatter (funding vs revenue, bubble = headcount) in tiers, price vs alternatives, hiring signals, a wedge matrix (strategic fit × revenue potential), and a 90-day / 6 / 18 / 36-month plan. Rules: every number from a real source, show the range when research firms disagree, no page with only a heading.
- **Competitor Intelligence** — watches each competitor's product pages, pricing, blog and changelog, job posts, founders' LinkedIn and funding news. Each digest entry is **what changed (with link) → what it means for my positioning → one concrete action** (update the battle card, change messaging, protect an account, ignore). Every event also goes into a running log table.

### List

- **ICP List Building** — from an attached ICP document and my site, build a contact list from LinkedIn (`{{CONTACT_FIELDS}}`, at least `{{MIN_CONTACTS}}`). Three sentences; the work is in the ICP document.
- **Signal Scraping** — for each ICP on the list, search `{{SIGNAL_SOURCES}}` for conversations where they complain about `{{PROBLEM_YOU_SOLVE}}`; store the link and a one-line summary on their row; rank by `{{SIGNAL_STRENGTH_CRITERIA}}`.
- **Lead Scoring** — score every CRM lead between `{{SCORE_MIN}}` and `{{SCORE_MAX}}` on ICP fit, engagement and buying intent, with a comment explaining the score.
- **Website Visitor De-anonymization** — company-level visitor data from a visitor-intelligence tool (RB2B, Warmly, PostHog, Clearbit Reveal, 6sense, Leadfeeder), then a LinkedIn search for the ICP-matching employee most likely to have visited. Scores **fit** and **intent** separately. Alert only when a company passes the fit threshold **and** shows real engagement — 3+ visits or 5+ minutes on pricing/demo pages. "Do not guess the visitor's identity": no strong match, leave them "unidentified". Never auto-contacts anyone.
- **Warm Intro Mapper** — for each top prospect, list mutual connections and score each as an intro path on three axes: closeness to the prospect (same company highest), seniority, and warmth to me (recently connected, active). 8+/10 is a strong path; keep two alternates. Drafts two versions per path — a short LinkedIn DM and a slightly longer email — always with a forwardable blurb and an easy out. Output is one table plus drafts, made so I can say "send these 5, edit this one, skip these 2."

### Outreach

- **Drip Email Campaign** — reads the ICP list, market map and competitor digest, then drafts `{{SEQUENCE_EMAIL_COUNT}}` emails per prospect: opener about *their* problem → value drop (insight or data point) → proof point → soft break-up. All saved as drafts; the campaign starts only after I approve.
- **Personalized Outbound Email Drip** — the only one written as a full `SKILL.md` (config tables, a daily protocol, guardrails). Founders and CEOs at companies under 10 staff in tier-1 countries, leads from Apollo. Its **credit rules**: check company size from search results before enriching; dedupe against the tracker before enriching; pull from page 3 or deeper to cut duplicates; capture every field on first enrichment, never a second pass; target 1.2 credits per email sent. Sends on day 1, 3 and 7, plain text, no HTML, no tracking pixels, no em dashes, across six inboxes (two Gmail at 50/day, four new SendGrid domains at 25/day = 200/day; "new SendGrid domains land in spam during warmup"). If an inbox fails, redistribute its leads; refresh tokens right before each send. The operator's "Run" is the approval.
- **Outbound BDR** — DM every ICP connection a fixed template; skip anyone already messaged; don't reply to anyone.
- **LinkedIn Influencer-Based Outreach** — find 10+ influencers in my space, collect the 25–50 people who reacted to each recent post (they self-selected into the topic), plus employees from relevant companies' People tabs. Invite in bulk, then message every acceptance daily. Its operational notes are the most useful part of the whole set: LinkedIn caps invites at roughly 100 a week and **fails silently** at the cap — the button clicks, nothing sends — so check the Sent Invitations count after every batch; parallelise mining and invites (3 workers), but message one at a time because the browser session is shared; expect the browser session to die overnight. The prompt also mentions a "workaround" to stretch the weekly cap to ~130, and says to "blast out as many invites as possible" when the cap lifts. Hive's own `linkedin-automation` skill says otherwise: 100 invitations a week **spread across days**, 25 messages a day to new connections with 5–10 s random pauses, no messages to non-connections at all, and stop the run on a checkpoint page or a silent "message failed".

### Replies

- **Reply Handler & Meeting Booker** — watches the inbox and LinkedIn for replies to campaigns and sorts each into seven classes: interested, not now, wrong person, objection, unsubscribe, out of office, question. Interested → propose a time with my booking link; not now → log for re-engagement; wrong person → ask for the right one; objection → draft but flag for my review; unsubscribe → remove from every sequence at once. Nothing is auto-sent; every reply is logged in the CRM with a sentiment score.
- **Inbound LinkedIn Invitation Reply** — a template intro message to every pending invitation, after I've seen the drafts; skip anyone already messaged, newsletters and page follows; never accept or ignore the requests themselves.
- **Inbound Sales Email Reply Sweep** — across several inboxes (spam folders included, because pitches land there), reply to every vendor or agency pitch with my own pitch. The bar is low on purpose: "the cost of a wrong reply is low; the cost of missing someone who could have been a partner is higher." Never our customers, never echoes of our own campaigns, never anyone already contacted on **any** address — cross-account duplicates are "the most common mistake". Its "Things we've learned" section reads like a lessons file: don't ask setup questions, per-account counts in reports, the numbers must match sent mail ("the user has caught discrepancies before"), one rolling task instead of one per sweep.

### Hygiene

- **Email Deliverability & Warmup Builder** — every morning checks spam placement, bounces, replies, opens per sequence and volume; diagnoses a drop by domain reputation, SPF/DKIM/DMARC, content triggers, volume spikes or list quality, with a specific fix. It **pauses** a sequence above the spam threshold without asking, and **waits for my approval to restart** it.

## 🚀 Twelve patterns worth reusing

These hold across the set and apply to any agent prompt that touches the outside world, not just to sales.

1. **Goal → success criteria → deliverables → what "done" looks like.** Most playbooks open this way. The success criteria are stated as failures to avoid ("no sequence silently lands in spam without me knowing within 24 hours").
2. **The prompt is a template with named variables.** Fill the `{{VARIABLES}}` once and the method stays fixed; the full-skill version (1032) keeps them in a config table at the top.
3. **Drafts, not sends — and the human's yes is one word.** Twelve of sixteen stop at a draft, a table or a report to me. Where a run does send, a single command ("Run", "continue") is the approval for that batch.
4. **Asymmetric autonomy.** Safe direction without asking, risky direction only with approval: pause a sequence yourself, never restart it; flag non-sales issues, don't act on them.
5. **The tracker is the source of truth.** One table per campaign; log every send immediately; "what's left" is a query, not memory. Open Hive's runtime is built on this ([[Pilot, Skill, Playbook — Open Hive's Fan-out Pattern]]).
6. **Dedupe before every outward action, across every account.** Check the log and the sent folder of every inbox, not only the current one.
7. **Verify the side effect, don't trust the click.** LinkedIn fails silently at the invite cap; report numbers must be recounted from sent mail.
8. **A skip list checked before every send** — competitors, existing customers, prior contacts.
9. **Score plus reason.** Every score gets a one-sentence reason; the reason is what turns a number into an opener.
10. **Spend gates before paid calls.** Qualify on free data, dedupe, then enrich once with every field.
11. **Alert on thresholds, not on events.** "Do not alert me on every single visitor." Fit **and** intent, or no alert.
12. **Don't guess; leave it unknown.** An unconfirmed identity stays "unidentified"; a disagreement between research firms is shown as a range.

Two smaller ones: **serialise what shares state** (one browser session → one messaging worker) and keep a **"Things we've learned"** section in the prompt for the operator's preferences, so the agent stops re-asking.

## ⚠️ Where they break

The playbooks are written for a US founder. Three things change for a company in Poland, and none of them is in the prompts:

- **LinkedIn forbids this kind of automation.** Its User Agreement (effective 2025-11-03) bans using "bots or other unauthorized automated methods to access the Services, add or download contacts, send or redirect messages", and software, scripts or browser plug-ins that scrape profiles. Ten of the sixteen list LinkedIn skills and drive LinkedIn through a browser in your own account, and the "workaround" for more invites is exactly what the cap exists to stop. The risk is the account you sell through.
- **Cold commercial email needs prior consent in Poland.** Art. 398(1) of the Prawo komunikacji elektronicznej (Dz.U. 2024 poz. 1221, in force since 2024-11-10) bans sending commercial information, direct marketing included, to a subscriber or end user through terminal equipment unless they consented beforehand. The text does not exempt business recipients; commentaries read it as covering B2B too. That puts both email-drip playbooks, as written, outside the law for Polish recipients. My reading, not legal advice — the next step is the legal agent, not a guess.
- **Person-level visitor identification is US-only.** RB2B, the first tool the de-anonymization playbook names, says its person-level ID works only for US visitors and offers company-level ID elsewhere. For EU traffic the playbook's "most likely individual visitor" step means inferring a person from a company visit and LinkedIn profiles — in my reading, personal-data processing that GDPR applies to, with no consent from that person.

Two more that are not legal:

- **Reading inbound mail is a prompt-injection surface.** The reply playbooks read text written by strangers and hold the power to reply. A fixed template and drafts-only limit what an injected instruction can make the agent say ([[AI Agent Security]]).
- **Replying to every vendor pitch with your own pitch** is a brand choice. It suits a founder hunting partners; it does not suit a consultancy whose name is its reputation.

## ☘️ What I take from it

- The set is a spec catalogue more than a product pitch. Patterns 3–7 are what my own approval gates already try to do, written more concretely than I had them.
- The research stage (ICP Discovery, Competitor Intelligence, Market Mapping, Warm Intro Mapper) carries none of the legal risk above and fits a consultancy and a SaaS alike.
- "Buyer vs provider" is the idea I'll use first: in an AI-automation niche, many of the people who talk most about the topic sell it.
- The send-side playbooks need a consent-first rewrite before they are usable in Poland: warm intros, inbound replies and LinkedIn conversations started by hand, with the agent doing the research and the drafts.
- The [[Autonomous Sales Agent Playbook]] sells "no human in the loop"; Open Hive's own prompts keep a human before twelve of sixteen outputs. I marked that as a contradiction in that note rather than pick a side here.

## 📖 Further reading

- [Open Hive playbooks](https://www.open-hive.com/playbook) · [aden-hive/hive on GitHub](https://github.com/aden-hive/hive)
- [LinkedIn User Agreement](https://www.linkedin.com/legal/user-agreement) — section on what members may not do
- [Prawo komunikacji elektronicznej, Dz.U. 2024 poz. 1221](https://api.sejm.gov.pl/eli/acts/DU/2024/1221/text.html) — art. 398
- [RB2B and GDPR](https://www.rb2b.com/gdpr) — person-level ID is US-only
- [Wolters Kluwer: marketing under the RODO and PKE](https://www.wolterskluwer.com/pl-pl/expert-insights/jak-prowadzic-dzialania-marketingowe-zgodnie-z-rodo) — commentary that PKE does not separate B2C from B2B
- [[Open Hive]] · [[Pilot, Skill, Playbook — Open Hive's Fan-out Pattern]] · [[Open Hive Playbooks — Fit for My Agent Systems]] · [[Open Hive Sample Prompts — Shortlist]] · [[Autonomous Sales Agent Playbook]] · [[Lead Generation Pipeline]] · [[Contact a client]] · [[Clay]] · [[LinkedIn Strategy]] · [[Building Always-On Agents (Anthropic)]] · [[AI Agent Security]]

---
Template: [[templates/knowledge_note_info]]
