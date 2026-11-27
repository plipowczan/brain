---
title: "Open Hive Sample Prompts — Shortlist"
date: 2026-11-27
enableToc: true
openToc: true
tags: ["project", "ai", "agents", "prompts", "sales", "marketing", "automation", "apache-2.0"]
type: basic-note
sources: ["_raw/processed/2026-11-27_aden-hive-sample-prompts.md"]
agent-created: true
summary: "30 of the 499 sample prompts in aden-hive/hive, verbatim (Apache-2.0), picked for agentic-ai-system and agentic-ai-private: priority, target repo, why, and what to change so each fits drafts-only, consent-first gates; plus five rejects and why"
---
# Open Hive Sample Prompts — Shortlist

## 🗒️ Description

The [[Open Hive]] repo keeps a file of 499 one-paragraph agent prompts, "Sample Prompts for AI Agent Use Cases", in eleven categories from Marketing & Growth to IT & Security. They are written for a US SaaS startup, and many of them send, scrape or pay on their own. I went through them for ideas worth adding to [[agentic-ai-system]] and [[agentic-ai-private]], and kept 30.

Each entry below has the prompt **verbatim**, then the target repo, why it is worth it, and what has to change before it fits. The change line matters more than the prompt. The prompts are © Aden Technologies Corp., Apache-2.0, copied unchanged from commit `6703b43` (2026-11-17). The full file is archived at `content/_raw/processed/2026-11-27_aden-hive-sample-prompts.md`.

Coverage: picks come from seven categories. Nothing was taken from Product & Engineering, Operations & Supply Chain or IT & Security, and HR & People Operations was read only up to #282. Those are worth a second pass if a repo needs them.

**This is my reading. None of these has been built or tried.**

## 🔗 Links

- [For an agent reading this](#-for-an-agent-reading-this) · [Overview](#-overview) · [P1](#-p1--adapt-now) · [P2](#-p2--when-the-need-comes-up) · [P3](#️-p3--later) · [Rejected](#️-rejected)
- How the playbooks and the batch pattern map onto both repos: [[Open Hive Playbooks — Fit for My Agent Systems]]

## 🧩 For an agent reading this

If you are an agent in either repo deciding what to implement:

1. **Never run a prompt as written.** Read the "Change" line; it is the spec. The verbatim text is only the inspiration.
2. Check whether your repo already has the capability, or most of it. Several of these extend something that exists (CRM checks, triage, the publication loop).
3. Keep every gate your repo has: outward messages are drafts, money moves need a person, nothing about a client goes public without their consent. A prompt that needs a gate removed is out.
4. Commercial email to new people, LinkedIn automation and personal data from public sources go to the legal agent first. The reasons are in [[Open Hive Sales Playbooks#⚠️ Where they break|Where they break]].
5. For anything that runs over many rows, follow the pilot-first rule in [[Pilot, Skill, Playbook — Open Hive's Fan-out Pattern]].
6. Propose through your repo's normal path (an OpenSpec change or a task) and name the prompt number as the source.

Priority: **P1** = clear fit, low risk, adapt now; **P2** = worth it when the need comes up; **P3** = only under a condition.

## 🧩 Overview

| # | Prompt | Priority | Repo | The adapted job |
|---|---|---|---|---|
| 22 | Warm-Intro Generator | P1 | both | Ranked intro paths from my own network data |
| 49 | Community Event Organizer | P1 | both | Event shortlist plus briefing notes |
| 91 | Referral Program Activator | P1 | both | Draft referral asks to happy clients |
| 96 | Pipeline Hygiene Enforcer | P1 | system | Weekly stale-deal report |
| 130 | Voice of Customer Analyst | P1 | system | Themes across consented conversation notes |
| 159 | Customer Outcome Tracker | P1 | both | Per-client success metrics, tracked |
| 221 | Accounts Receivable Optimizer | P1 | both | Draft payment reminders |
| 319 | NDA Processing Specialist | P1 | both | First-screen NDA deviation table |
| 439 | Conference Speaking Coordinator | P1 | private | CFP pipeline table |
| 452 | Stakeholder Mapping Analyst | P1 | both | Weekly relationship nurture list |
| 15 | B2B SaaS Copywriter - Case Studies | P2 | both | Case-study draft from tracked outcomes |
| 20 | Strategic Sales Rep - Job Posting Monitor | P2 | system | Job postings as a scoring signal |
| 21 | Relentless PR Agent - Podcast Outreach | P2 | private | Podcast guest pitch drafts |
| 30 | Conversion Rate Specialist | P2 | both | One ROI calculator page |
| 33 | Multimedia SEO Editor | P2 | both | Video transcript → draft post |
| 40 | AI Chief of Staff | P2 | system | Read-only morning digest |
| 41 | Authentic Indie Hacker Publicist | P2 | both | Weekly "what shipped" draft |
| 75 | Brilliant Deal Desk Manager | P2 | both | RFP/questionnaire drafts from an approved answer bank |
| 84 | Account-Based Sales Researcher | P2 | system | One-page account brief before a first call |
| 88 | Win-Loss Analysis Engine | P2 | both | Patterns from a short post-deal form |
| 108 | QBR Deck Generator | P2 | private | Quarterly client review deck |
| 109 | Lost Deal Re-engagement Specialist | P2 | system | Trigger watch on lost deals, drafts only |
| 114 | Joint Venture Scout | P2 | both | Partner shortlist and proposal draft |
| 146 | Customer Data Privacy Responder | P2 | both | GDPR request handling log |
| 315 | Regulatory Change Tracker | P2 | both | Weekly regulatory digest |
| 317 | Vendor Contract Database Manager | P2 | both | Renewal and notice-period alerts |
| 437 | Meeting Notes Distributor | P2 | both | Summary and action items as drafts |
| 35 | Data Journalist | P3 | system | Data report, only with own anonymised data |
| 229 | Tax Compliance Monitor | P3 | both | Polish tax calendar, checked by an advisor |
| 411 | Master Data Management Administrator | P3 | private | Golden contact record with lawful basis |

## 🚀 P1 — adapt now

### 22 · Warm-Intro Generator

*Marketing & Growth · both repos*

> You're a warm-intro Generator. Scan the LinkedIn profiles of every new user who signs up for our free tier. Map their past employers. Automatically cross-reference this list against my target outbound accounts. If a free user works at a target company, draft a LinkedIn DM from my account saying, 'Hey, saw you're using our free tier—any chance you'd introduce me to your VP of Engineering to discuss a team plan?'

- **Why:** warm network first is the sales motion in both repos, and an intro path beats a cold message.
- **Change:** no profile scanning and no DM from my account. Input is my CRM plus the connections export LinkedIn gives me on request. Output is a ranked table: target account → whom I know there or near it → why they would help → a draft ask that I send by hand.

### 49 · Community Event Organizer

*Marketing & Growth · both repos*

> You're a Community Event Organizer. Monitor Meetup.com, Eventbrite, and local tech calendars for events in our target cities where our ideal customers gather. Automatically RSVP for me, research the attendee list via LinkedIn, draft personalized icebreaker talking points for 5 high-value prospects, and add the events to my calendar with pre-meeting briefing notes.

- **Why:** meeting someone in person turns a cold contact warm, and a briefing before an event is cheap.
- **Change:** use only speaker and attendee lists the organiser publishes. No automatic RSVP (I register myself), no attendee research through LinkedIn, no messages. Output: a shortlist of events with the reason for each, plus a briefing on speakers and people I already know.

### 91 · Referral Program Activator

*Sales & Business Development · both repos*

> You're a Referral Program Activator. Identify customers who have given us high NPS scores and have connections at target accounts. Draft personalized referral requests highlighting specific use cases that would resonate with their contacts. Track referral outcomes and automatically send thank-you gifts and commission payments when deals close.

- **Why:** a referral from a happy client is the warmest way into a new one.
- **Change:** "high NPS" becomes "clients who told me they were happy", from my notes. Draft asks only. No automatic gifts or commission payments: a thank-you or a referral fee is a decision I make and pay myself.

### 96 · Pipeline Hygiene Enforcer

*Sales & Business Development · agentic-ai-system*

> You're a Pipeline Hygiene Enforcer. Review opportunities weekly for outdated close dates, stale stages, and missing next steps. Alert sales managers when deals have been in the same stage for too long. Automatically move deals to appropriate stages based on activity patterns and remind reps to update opportunity details before forecast calls.

- **Why:** the daily CRM consistency check catches broken records, not stuck deals.
- **Change:** report only, weekly: deal, days in the current stage, missing next step, past close date. No automatic stage moves; I move them.

### 130 · Voice of Customer Analyst

*Customer Success & Support · agentic-ai-system*

> You're a Voice of Customer Analyst. Conduct thematic analysis on qualitative customer feedback from interviews, surveys, and reviews. Identify unmet needs, pain points, and delight moments. Present findings to leadership quarterly with recommendations for product improvements and customer experience enhancements.

- **Why:** themes across many conversations show what to offer and how to say it; one conversation doesn't.
- **Change:** input is notes from conversations where the person agreed to be noted. Output is themes with a count and a short quote each, monthly, to me. No names in the output.

### 159 · Customer Outcome Tracker

*Customer Success & Support · both repos*

> You're a Customer Outcome Tracker. Work with customers to define measurable success metrics during onboarding. Track progress toward these outcomes quarterly, calculate ROI delivered, and feature successful outcomes in case studies and QBR presentations to demonstrate value.

- **Why:** a measured outcome per client is the proof behind case studies, pricing and renewals.
- **Change:** agree two or three metrics with the client at kickoff and keep them in the client's folder. Nothing about a client is used publicly without their sign-off. #15 and #108 build on this one.

### 221 · Accounts Receivable Optimizer

*Finance & Accounting · both repos*

> You're an Accounts Receivable Optimizer. Monitor outstanding invoices, send automated payment reminders at strategic intervals, and escalate delinquent accounts to collections. Analyze payment patterns to identify customers who consistently pay late and recommend credit limit adjustments or prepayment requirements.

- **Why:** a few late invoices hurt a small company's cash more than a lost lead.
- **Change:** reminder drafts on a schedule I set, sent by me. No automatic escalation to collections. The Polish late-payment rules (statutory interest, the fixed recovery compensation) go to the legal agent before any reminder mentions them.

### 319 · NDA Processing Specialist

*Legal & Compliance · both repos*

> You're an NDA Processing Specialist. Review incoming non-disclosure agreements, compare to company standard template, and flag material deviations. Process routine NDAs quickly and escalate non-standard terms to legal counsel for approval.

- **Why:** an NDA often comes before a first call, and a first screen means I read only the clauses that differ from mine.
- **Change:** compare against my own Polish-law template. Output a deviation table: clause, their text, my text, risk. It is a first screen, not an approval; the legal agent and, when needed, a lawyer decide.

### 439 · Conference Speaking Coordinator

*Executive & Administrative · agentic-ai-private*

> You're a Conference Speaking Coordinator. Identify relevant speaking opportunities, coordinate talk proposals, and manage logistics for accepted presentations. Ensure speakers have resources to deliver excellent presentations.

- **Why:** a talk reaches a room of potential clients at once.
- **Change:** public calls for proposals only. A pipeline table (event, deadline, topic fit, status) and a proposal draft per event. I submit by hand.

### 452 · Stakeholder Mapping Analyst

*Executive & Administrative · both repos*

> You're a Stakeholder Mapping Analyst. Map relationships with key stakeholders including investors, partners, customers, and regulators. Track engagement levels and recommend strategies for strengthening critical relationships.

- **Why:** relationships with partners and past clients fade when nobody keeps a list.
- **Change:** the CRM is the single source. Output a weekly nurture list: who, last touch, a suggested next step. No profiling from LinkedIn.

## 🎨 P2 — when the need comes up

### 15 · B2B SaaS Copywriter - Case Studies

*Marketing & Growth · both repos*

> You're a B2B SaaS Copywriter. Monitor our database for users who have achieved a massive milestone using our app (e.g., processed \$10k in payments, saved 100 hours). Automatically extract their usage metrics and draft a 500-word case study highlighting their ROI. Email them the draft, asking for permission to publish it on our blog in exchange for a permanent backlink to their site.

- **Change:** the trigger is an outcome reached in #159, not app usage. The draft goes to me first; the client approves the final text and every figure before it is published. The backlink offer is optional.

### 20 · Strategic Sales Rep - Job Posting Monitor

*Marketing & Growth · agentic-ai-system*

> You're a strategic Sales Rep. Monitor Indeed and LinkedIn job postings hourly. If a B2B SaaS company posts a job description for a 'RevOps Manager' or 'Salesforce Administrator', it means they have messy CRM data. Instantly find their VP of Sales via Apollo, and draft a cold email pitching our automated CRM hygiene agent as a cheaper, instant alternative to a new hire.

- **Change:** a job posting for a role my work replaces is a timing signal for the account score, not a trigger for a cold email. Weekly, from public job boards; no contact lookups.

### 21 · Relentless PR Agent - Podcast Outreach

*Marketing & Growth · agentic-ai-private*

> You're a relentless PR Agent. Scrape Apple Podcasts for active shows in the 'Bootstrapping', 'SaaS', and 'AI' categories. Extract the host's contact info. Automatically listen to their last 3 episodes (via transcript), reference a specific joke or point they made, and pitch me as a guest to talk about my journey building our product, offering to share transparent MRR numbers.

- **Change:** a handful of chosen shows, not a scrape. Use only the contact route a show publishes for guest requests. Draft pitches that I send. No revenue numbers.

### 30 · Conversion Rate Specialist

*Marketing & Growth · both repos*

> You're a Conversion Rate Specialist. Identify the top 10 cost-saving metrics our product provides. Automatically write the React code and logic for 10 interactive, embeddable 'ROI Calculators' (e.g., 'How much are you losing to manual data entry?'). Publish these calculators as standalone SEO landing pages designed specifically to capture high-intent, bottom-of-funnel traffic.

- **Change:** one calculator for the most common automation case, reviewed before it goes live. If it asks for an email, it has a consent checkbox and says what the address is for.

### 33 · Multimedia SEO Editor

*Marketing & Growth · both repos, where there is video*

> You're a Multimedia SEO Editor. Connect to our corporate YouTube channel API. The moment a new tutorial video is published, download the transcript, remove filler words, format it into a comprehensive, image-rich blog post with H2s and H3s, and publish it to our Webflow blog to capture both YouTube and Google search intent simultaneously.

- **Change:** a manual trigger per video. The post is a draft that enters the publication loop and its approval; nothing publishes on its own.

### 40 · AI Chief of Staff

*Marketing & Growth · agentic-ai-system*

> You're my AI Chief of Staff. Every morning at 7:00 AM, query Stripe, Google Analytics, and our internal database. Synthesize our new MRR, churn, daily active users, and any critical P0 bugs. Generate a 2-minute, highly energetic audio briefing using ElevenLabs, and text the MP3 to my phone so I can listen to my startup's vitals while making coffee.

- **Change:** a text digest to the existing approval channel from read-only sources the repo already reads (the events ledger, the CRM, the calendar). No audio.

### 41 · Authentic Indie Hacker Publicist

*Marketing & Growth · both repos*

> You're an authentic Indie Hacker Publicist. At the end of every week, automatically summarize the GitHub commits we shipped, the Stripe revenue we gained or lost, and the biggest technical challenge we faced. Format this into an honest, transparent 'Build in Public' thread and post it to Twitter and IndieHackers.com to build a cult following of early adopters.

- **Change:** a weekly "what shipped and what I learned" draft from commits. No revenue figures, client names removed, and it goes through the publication gate. No automatic posting.

### 75 · Brilliant Deal Desk Manager

*Sales & Business Development · both repos*

> You're a brilliant Deal Desk Manager. Ingest this complex, 250-question enterprise Request for Proposal (RFP) from a Fortune 500 prospect. Spawn dedicated agents to simultaneously query our Engineering wiki, Legal playbook, and InfoSec knowledge base. Draft a comprehensive, technically accurate response in the exact formatting required by the prospect, highlight any questions that require manual executive sign-off, and deliver the final draft in under 10 minutes.

- **Change:** answers come only from an approved answer bank (security, data handling, company facts). A question with no approved answer is marked "needs a human", never answered from the model's guess. This is the fan-out pattern's best case: one row per question.

### 84 · Account-Based Sales Researcher

*Sales & Business Development · agentic-ai-system*

> You're an Account-Based Sales Researcher. For each target account in our ABM list, deploy parallel agents to research: recent funding rounds, executive leadership changes, technology stack from BuiltWith, job postings indicating pain points, and 10-K mentions of strategic initiatives. Consolidate findings into a single-page battlecard with personalized talking points for the account executive before their first call.

- **Change:** public company sources plus the Polish registers (KRS, CEIDG) instead of 10-K filings. The brief ends with questions to ask in the call, not assumptions about the company.

### 88 · Win-Loss Analysis Engine

*Sales & Business Development · both repos*

> You're a Win-Loss Analysis Engine. After every deal closes (won or lost), automatically interview the sales rep via a structured form, analyze CRM data, and research the competitor involved. Identify patterns in why we win or lose, update competitive battlecards with new insights, and alert product marketing when consistent feature gaps are mentioned as loss reasons.

- **Change:** I am the sales rep, so the "interview" is a five-question form I fill after each closed deal. Patterns appear after enough deals; until then it is a log.

### 108 · QBR Deck Generator

*Sales & Business Development · agentic-ai-private*

> You're a QBR Deck Generator. For each quarterly business review with enterprise clients, automatically pull usage data, support ticket trends, ROI calculations, and roadmap updates. Generate a professional presentation deck with executive summary, detailed metrics, and recommendations for increasing value in the next quarter.

- **Change:** a quarterly review deck per long-running client, built from #159's outcomes with the deck tools the repo already has. I review it before it is sent.

### 109 · Lost Deal Re-engagement Specialist

*Sales & Business Development · agentic-ai-system*

> You're a Lost Deal Re-engagement Specialist. Monitor lost opportunities for 12 months after the loss. Alert sales when trigger events occur at those accounts (new funding, leadership changes, competitor outages). Draft re-engagement emails referencing why they chose the competitor and what's changed since then.

- **Change:** an alert on public trigger events at lost accounts, and a draft only. Check the person's consent status before drafting an email (PKE art. 398).

### 114 · Joint Venture Scout

*Sales & Business Development · both repos*

> You're a Joint Venture Scout. Research potential strategic partners who serve our target market with complementary products. Analyze partnership economics, cultural fit, and technical integration requirements. Draft partnership proposals and coordinate due diligence when both parties express interest in formal collaboration.

- **Change:** the input is the service providers that buyer-vs-provider scoring flags as partners rather than targets ([[Open Hive Playbooks — Fit for My Agent Systems#🚀 What I'd build first|build first, item 2]]). Output a shortlist and a proposal draft; due diligence stays with me.

### 146 · Customer Data Privacy Responder

*Customer Success & Support · both repos*

> You're a Customer Data Privacy Responder. Handle data subject access requests, deletion requests, and privacy inquiries within GDPR and CCPA timelines. Verify requester identity, compile requested data, coordinate with engineering for deletions, and document all actions for compliance audits.

- **Change:** GDPR only. One month from receipt, extendable by two months for complex requests (art. 12(3)). The agent logs the request, checks identity and compiles the data; a person does every deletion.

### 315 · Regulatory Change Tracker

*Legal & Compliance · both repos*

> You're a Regulatory Change Tracker. Monitor regulatory developments affecting our industry including new laws, guidance documents, and enforcement actions. Assess impact on business operations and recommend compliance strategies.

- **Change:** a fixed watch list: the AI Act, UODO guidance, the PKE, Polish tax changes. A weekly digest of what changed with a link; the legal and tax agents assess impact.

### 317 · Vendor Contract Database Manager

*Legal & Compliance · both repos*

> You're a Vendor Contract Database Manager. Maintain a centralized repository of all vendor contracts including key terms, renewal dates, and termination provisions. Alert stakeholders to upcoming renewals and auto-renewal clauses requiring action.

- **Change:** a table of my own tool and service subscriptions: renewal date, notice period, price. An alert 60 days before the last day to give notice.

### 437 · Meeting Notes Distributor

*Executive & Administrative · both repos*

> You're a Meeting Notes Distributor. Attend key meetings, capture decisions and action items, and distribute summaries within 24 hours. Track action item completion and follow up on outstanding items.

- **Change:** it works from transcripts I provide; it attends nothing. The summary and each follow-up are drafts.

## ☘️ P3 — later

### 35 · Data Journalist

*Marketing & Growth · agentic-ai-system*

> You're a Data Journalist. Once a quarter, aggregate all the anonymized metadata flowing through our platform (e.g., 'Millions of agent tasks analyzed'). Automatically synthesize this into a 20-page 'State of AI Agents' PDF report filled with charts and insights. Gate the report behind an email capture form and distribute the press release to tech journalists.

- **Condition:** only once there is enough own anonymised data to say something new. The download form needs consent for any follow-up, and press goes out by hand.

### 229 · Tax Compliance Monitor

*Finance & Accounting · both repos*

> You're a Tax Compliance Monitor. Track filing deadlines for income tax, sales tax, payroll tax, and international filings. Coordinate with external tax preparers, gather required documentation, and ensure all filings are completed accurately and on time.

- **Condition:** as a Polish calendar (VAT and JPK, PIT and CIT advances, ZUS) that collects the documents for my accountant. Deadlines checked by the tax-advisor agent and the accountant, never taken from the model's memory.

### 411 · Master Data Management Administrator

*Data & Analytics · agentic-ai-private*

> You're a Master Data Management Administrator. Maintain golden records for critical entities like customers, products, and suppliers. Implement matching rules, resolve duplicates, and distribute clean master data to consuming systems.

- **Condition:** when contacts live in more than two places. One golden contact record with a lawful-basis field, and a suppression list that every send step reads.

## ⚠️ Rejected

Five that look useful and break a rule I keep:

| # | Prompt | Why not |
|---|---|---|
| 5 | Guerrilla Marketer - YouTube Comments | Product replies in other people's comment sections, hourly: spam |
| 6 | Developer Relations Growth Lead | Harvests emails and handles of people who starred a competitor's repo; they never contacted me |
| 51 | Review Generation Engine | The vendor drafts the review "on their behalf"; that is not the customer's own words, and review sites forbid it |
| 52 | LinkedIn Thought Leadership Amplifier | Automated connection requests from my account, which LinkedIn's User Agreement bans |
| 72 | Highest-Performing SDR - LinkedIn Monitor | Round-the-clock LinkedIn monitoring, bought emails and 50 cold emails a day; only the trigger idea survives, as #20 |

## 📖 Further reading

- [[Open Hive Playbooks — Fit for My Agent Systems]] — the playbook-by-playbook verdicts and what to build first
- [[Open Hive Sales Playbooks]] · [[Open Hive]] · [[Pilot, Skill, Playbook — Open Hive's Fan-out Pattern]]
- [[Agentic AI Repos]] · [[Autonomous Sales Agent Playbook]] · [[AI Agent Security]]
- [Source file on GitHub](https://github.com/aden-hive/hive/blob/main/examples/recipes/sample_prompts_for_use_cases.md)
