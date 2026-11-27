---
title: "Open Hive Playbooks — Fit for My Agent Systems"
date: 2026-11-27
enableToc: true
openToc: true
tags: ["project", "ai", "agents", "sales", "outbound", "claude-code", "architecture", "plsoft", "200iq-labs"]
type: basic-note
sources: ["_raw/processed/2026-11-27_open-hive-playbooks.md", "_raw/processed/2026-11-27_aden-hive-hive-repo.md", "Read-only surveys of agentic-ai-system and agentic-ai-private, 2026-11-27 (two subagents; paths spot-checked by me)"]
agent-created: true
summary: "The 16 Open Hive sales playbooks and Hive's batch pattern mapped onto agentic-ai-system and agentic-ai-private: what both repos already enforce, playbook-by-playbook verdicts, eight things worth building (competitor watch, buyer-vs-provider scoring, warm intros, idempotent sends first) and what not to adopt"
---
# Open Hive Playbooks — Fit for My Agent Systems

## 🗒️ Description

This note answers one question: what from [[Open Hive Sales Playbooks]], the [[Open Hive]] runtime and its [[Pilot, Skill, Playbook — Open Hive's Fan-out Pattern|batch pattern]] is worth taking into my two agent repos, [[agentic-ai-system]] (200IQ LABS) and [[agentic-ai-private]] ([[PLSoft]] and personal).

It rests on two read-only surveys of the repos (2026-11-27), done by subagents. I checked a sample of the paths they named myself. **Everything below is my reading; nothing has been built or tried.** The repos change weekly, so treat the mapping as a snapshot and check the current state before acting on it.

This vault is public, so the note stays at architecture level: no client names, figures or business plans. Those stay in the repos.

## 🔗 Links

- [For an agent reading this](#-for-an-agent-reading-this) · [Already in place](#-what-both-repos-already-enforce) · [Playbook by playbook](#-playbook-by-playbook) · [Build first](#-what-id-build-first) · [Don't adopt](#️-what-not-to-adopt) · [Gaps found](#️-gaps-found-in-passing)
- The prompts picked from Hive's 499-prompt sample file: [[Open Hive Sample Prompts — Shortlist]]

## 🧩 For an agent reading this

If you are an agent in either repo asked "is anything here worth implementing?", work in this order:

1. Read this note, then [[Open Hive Sales Playbooks]] (what each playbook does and where it breaks) and [[Pilot, Skill, Playbook — Open Hive's Fan-out Pattern]] (the batch rules). The full prompt text of all 16 playbooks is in `content/_raw/processed/2026-11-27_open-hive-playbooks.md` in the brain repo.
2. **Check your repo's current state first.** The table below is a 2026-11-27 snapshot; something marked missing may exist by now.
3. **Never weaken a gate to fit a playbook.** Both repos already enforce drafts-only and human consent for outward acts; a playbook that sends on its own gets rewritten, not the gate.
4. Anything that sends commercial email to new people, touches LinkedIn by automation, or identifies people from website visits goes through the legal agent first. The three caveats are in [[Open Hive Sales Playbooks#⚠️ Where they break|Where they break]].
5. Propose changes the way your repo already does it (an OpenSpec change or a task), with the playbook named as the inspiration. Don't implement straight from this note.

## 🧩 What both repos already enforce

Nine of the playbooks' twelve patterns, against what each repo already has. Most of the guardrails Open Hive writes into prompts are enforced by code in my repos.

| Pattern from the playbooks | agentic-ai-system | agentic-ai-private |
|---|---|---|
| Drafts, not sends | Gmail through a draft-only tool with no send path; Publer bot account locked to drafts; daily sending manifest that the operator sends by hand | The router's executor only writes drafts; an external effect happens only after "Wyślij"; the publication loop releases only content whose fingerprint was approved |
| One-word approval | Consent in chat, recorded as a decision in the ledger and checked by a script before the act (`zgoda-na-akt` gate) | "Przyjmij" / "Wyślij" in the router session; one consent per batch in `/rozeslij`, enforced by a hook |
| Asymmetric autonomy | Gates checked by a person or by a script; "no answer is never consent" in the approval chat | Night work runs with sending and merging disabled |
| Tracker as source of truth | Airtable CRM plus a file CRM; an append-only events ledger | Task registry (`PL-n` files) plus a sent-messages log |
| Dedup before acting | Daily CRM consistency check, topic dedup in the social loop, one-run-per-slot guards | Message markers in task notes, mail-triage labels |
| Skip list | A send block list and a do-not-contact gate | — |
| Score plus reason | Account scoring writes a fit score, a tier and a reason | — |
| Spend gates | Paid email-finder credits need a person's consent | — |
| Verify the side effect | Pre-send address checks (catch-all, domain without mail) | — |

## 🧩 Playbook by playbook

| Playbook | agentic-ai-system | agentic-ai-private | My verdict |
|---|---|---|---|
| ICP Discovery | missing — and the repo rules out mass collection from LinkedIn | partial, one-off (a warm decision-maker list built by hand) | **adapt** — score my own connections export, not scraped profiles |
| Market Mapping | partial — one-off competitor and market documents, no TAM/SAM/SOM | missing; research pipeline and HTML output exist | adapt when a deck is needed, not as a job |
| Competitor Intelligence | missing as a recurring job; every part exists (RSS feeds, dedup, rhythms, ledger) | not in this repo | **build** — lowest risk, highest reuse |
| ICP List Building | exists (prospecting chain) | partial | nothing to add |
| Signal Scraping | partial — a timing/trigger dimension in the scoring rubric; signals read by hand | spec only | adapt as a scoring input, not as a list source |
| Drip Email Campaign | exists — drafts, cadence and three-touch gates | a campaign script (dry run by default, test address, warm-up, sent log) | keep; add the idempotency rule |
| Personalized Outbound Drip | partial — email finder instead of Apollo, one mailbox | the same campaign script | keep one mailbox; skip inbox rotation |
| Outbound BDR (LinkedIn DMs) | partial — a DM queue sent by hand | missing; chat send exists | **don't automate** |
| Lead Scoring | exists for companies, with a reason | missing | keep; add the reason column wherever a score exists without one |
| Influencer Outreach | missing | missing | **don't adopt** |
| Reply Handler & Meeting Booker | partial — 8 response types mapped to next steps, run on command | partial — the router classifies inbound mail and chats, drafts, notifies | add "objection → flag for review" and a booking-link step |
| Inbound Sales Email Sweep | missing | partial — mail triage labels, never drafts | adapt as a polite draft decline, not a pitch-back |
| Inbound LinkedIn Invitation Reply | missing (manual channel) | partial — DM triage covers threads, not invitations | skip |
| Warm Intro Mapper | minimal | partial, one-off | **build** — on my own data |
| Email Deliverability | partial — pre-send checks | partial in the campaign script | build the post-send watch before email goes out at any volume |
| Visitor De-anonymization | missing | missing | **don't adopt** for EU traffic |

## 🚀 What I'd build first

In order of value against risk:

1. **Competitor Intelligence as a weekly job in agentic-ai-system.** The marketing loop already has feeds, dedup, a scheduler and a ledger; today the competitor list is deliberately kept out of the researcher. Output: the playbook's three-part entry (what changed with a link → what it means for positioning → one action) plus a running log. Nothing is sent outside, so there is no legal risk. [[Marketing Agent Research]] already planned the listening layer (Firecrawl change tracking, changedetection.io); this is its first concrete consumer.
2. **Buyer-vs-provider scoring of my own network.** Input is the connections export LinkedIn gives me on request (Settings → Data privacy → Get a copy of your data), plus my CRM and notes. That avoids scraping and avoids the no-mass-collection rule. Score each person with a reason, and flag service providers as partners rather than targets. The "about 30% of headline matches are providers" warning matters most in my niche, where many people who talk about AI automation sell it. It serves both repos.
3. **Warm Intro Mapper on the same data.** A warm introduction beats a cold message for a small consultancy and a young product alike, so it serves both repos. Use mutual connections I can see, score them on closeness, seniority and warmth, and write a draft ask that I send by hand.
4. **Idempotent sends everywhere.** Before any send, check "already sent this to this person in this thread?" against the log, not only the draft's approval. This is the rule from Hive's delegation skill, and it protects the router's accept stage, the campaign script and the sales day against a crash-and-resume double send.
5. **Pilot before fan-out in batch skills.** Run row one by hand and patch the skill before a batch runs. The obvious first place is batch email drafting in agentic-ai-system.
6. **An SOP checklist as a done-gate.** Required steps per task in a table, and "done" is refused while any is open. Both repos have a Definition of done in prose; this makes it checkable.
7. **Reply handling extras.** The objection → flag rule, unsubscribe → every sequence at once, and a booking link in the "interested" draft.
8. **A post-send deliverability watch** (bounces, spam placement, auto-pause, a person restarts), before email goes out at any volume.

## ⚠️ What not to adopt

- **Influencer outreach, Outbound BDR and invitation auto-replies.** All three drive LinkedIn through a bot in my own account, which LinkedIn's User Agreement bans. agentic-ai-system already says LinkedIn is a manual channel.
- **Cold drip to new recipients as written.** PKE art. 398 needs prior consent for commercial email, and a legal review in agentic-ai-private already concluded that cold email to firms is still commercial communication. Keep warm and consented contacts only.
- **Visitor de-anonymization of EU traffic.** Person-level identification is US-only even at the vendor the playbook names, and guessing a person from a company visit is personal-data processing.
- **Pitch-back replies to vendors.** It suits a founder hunting partners, not a consultancy whose name is its reputation.
- **Sentinel-style auto-continue.** A supervisor that decides an approval question was unnecessary is the opposite of both repos' gates ([[Pilot, Skill, Playbook — Open Hive's Fan-out Pattern#⚠️ Limits|Limits]]).
- **Prompt-only constraints.** Hive's own docs say goal constraints are text, not enforcement. My repos enforce in hooks and scripts; keep it that way.

## ⚠️ Gaps found in passing

- **This vault:** the [[agentic-ai-system]] and [[agentic-ai-private]] notes still describe the 2026-05-10 layout. The `context/` folder they describe is gone from agentic-ai-system, and `shared-skills` is now a plugin rather than a submodule. They need a refresh of their own.

## 📖 Further reading

- [[Open Hive Sales Playbooks]] · [[Open Hive]] · [[Pilot, Skill, Playbook — Open Hive's Fan-out Pattern]] · [[Open Hive Sample Prompts — Shortlist]]
- [[Agentic AI Repos]] · [[Agentic Systems]] · [[Marketing Agent Research]] · [[Qamera AI]] · [[PLSoft]]
- [[Autonomous Sales Agent Playbook]] · [[Lead Generation Pipeline]] · [[AI Agent Security]]
