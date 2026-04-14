---
title: "Where teams and agents work together"
source: "https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f"
author:
published:
created: 2026-04-13
description: "A collaborative AI workspace, built on your company context. Build and orchestrate agents right alongside your team's projects, meetings, and connected apps."
tags:
  - "clippings"
---
## The Autonomous Sales Agent Playbook

Welcome. This playbook shows how to replace a $5,000/mo marketing stack with one autonomous sales system.

![](https://www.notion.so/image/attachment%3A2347ae51-56b7-40e4-b9ac-2c01ca106260%3Aimage.png?table=block&id=31eb9abc-be3f-80bf-9d54-f558592ab088&spaceId=5ce1da52-1ca3-40b5-b008-2e531ea6cdf7&width=670&userId=&cache=v2)

My name is Romàn and I’m the co‑founder of [gojiberry.ai](http://gojiberry.ai/).

We built an AI agent to help B2B companies find and contact warm leads.

Goal: set up your agent in 10 minutes and get new warm opportunities and conversations every day.

We have a 7‑day trial available here: [gojiberry.ai](http://gojiberry.ai/)

Here’s a quick video explaining what we do:

![](https://www.youtube.com/watch?v=t5YeSDBfT4g)

Try 7 days for free here: [gojiberry.ai](http://gojiberry.ai/)

This guide walks you through the exact architecture, workflows, and prompts to build an autonomous sales agent that captures intent, researches prospects, and follows up automatically.[Executive summary](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f80cf89bff11925ab295a)[The one‑pager architecture](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f80439597f655a074b573)[Back-of-the-napkin ROI](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f80b39259ecdb956eaadb)[The cost of inaction](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#fd00475f0c1f42efb934079542932739)[What you’ll build in this playbook](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f80ae9e3ecdf61e5ff760)[Part 1 — Speed wins (the speed-to-lead case)](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f8076bfafd0af80f0aca1)[Why speed compounds](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f804caf4bc0a681ccb6d1)[The bloat audit (how stacks happen)](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f80a7a456fc5fa8b1e41a)[Stack vs agent (cost snapshot)](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f808eb41afc702ecf5bdd)[Part 2 — The agent stack (how the system is built)](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#21aa8b16f3b14d05a526466133429972)[The 4 components](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#0733443a634a445faca0bbc8dce6a5fc)[Code vs no‑code (the trap)](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f80a189e8c9798b6f98cc)[Infrastructure (VPS)](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f804891a9d0a0c32abcab)[Cheat sheet: required keys](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f80c18e81f993b5406636)[Part 3 — The Context Engine (signal → research → decide → write)](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#04bae68b73c345e1b129ea7ac0cbb8e5)[Phase 1 — Signal detection](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#98b56bff07674d4e975d1736439c91c2)[Phase 2 — Research loop (the context file)](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#7521f78a394a45c2bc51055b5e49dec7)[Phase 3 — Intent triage (priority rules)](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#117204fe1c774db79b3844f8f420580d)[Phase 4 — The copywriting engine (frameworks)](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#5c080d3219904d4880440ef296dfea3d)[Visualizing the flow (logic)](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#821688fe913e44d483bd322e8d082ac7)[Part 4 — The File‑Based CRM](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#46910f39d68c4ffa997913212fef0167)[Philosophy](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#1693567c844d458693a20ee7e486ba9a)[Structure: one lead = one file](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#5b703493859b45a9948bf5c6db5182d1)[“Folders as stages” (state machine)](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f80c099f9c0dd89249b82)[Master lead template (copy/paste)](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f803daccfe0ec608d32ed)[Part 5 — The 5‑Workflow Arsenal](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#6bc0e2fe69fe41f8919bb236de5836d7)[Skill 1 — Outbound campaign builder](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f8008a014ddf198a00652)[Skill 2 — Inbound content monitor](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f803e800deeed4e3cd538)[Skill 3 — Trial‑to‑paid nudger](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f80eaadd5c47af1d77a32)[Skill 4 — Win‑back agent](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#96f5a190e6c9411097d4d8b5771e98c5)[Skill 5 — Market intel briefing](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#25aac2c9d22a47eabcb32ce913547562)[Part 6 — Deployment & Human‑in‑the‑Loop](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#23765d4889e74218910be71cf9618bfb)[Safeguard 1 — Confidence score](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#c63e6c6f234f4cf4aef92e3e3158fc62)[Safeguard 2 — The kill switch](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#694b1c4e02ea4f388597d26bc4bf497b)[The new daily routine (operator mode)](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#a5015bc1b2084621abe4a79f0d01ddd6)[SOP — the 15‑minute daily audit](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f80e49039f4a5728efe62)[Part 7 — Stop Renting Software. Start Owning Agents.](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#64215082c0754d34a7599933548a51a8)[Option 2 — Do it yourself (DIY)](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#661a463332a84cf69b28a311cf4fbc9a)[Start now](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f8073acfbd4b2bca81bb4)[LinkedIn high‑intent outreach: the short version](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f80ce889ae37dd7352b4f)[Why high‑intent beats cold](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f800b9d66f0375f6a4e5b)[Cold outreach (typical)](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f8079bf1ce29a9e17bb5a)[High‑intent outreach (when you time it right)](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f8035b71eda6274db9839)[The difference?](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f807d8a9fc432e99fae4a)[The 300 high intent Leads Framework](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f8066801dda908e277946)[Step 1: Understand what an high intent lead is](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f80f7ac16ffe9bbc5dbf1)[Step 2: Set up your free AI agents to get high intent leads](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f80bdad07e38b7c01bee9)[Step 3: Get High intent leads](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f807996edea67ff689fda)[Once you have the leads, start outreach](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f8030a9dafa9c54b49136)[The Initial DM](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f80e3aa63c3113af21359)[The Meeting Booking DM (After They Respond)](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f802e8faec48818fb6747)[The Backup DM (If No Response to Guide)](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f802ea540eeb935a06a22)[The AI Prompts That Write Like a Human](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f80b29a32f3e827277648)[Research Prompt (Before Writing)](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f80f9aaf5e38b99f46939)[Message Writing Prompt](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f80fba4a1c2254de28a21)[Follow-Up Prompt](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f802ea3e8ccafdab74ed6)[Week 1: Foundation](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f806ba529d90c959eb4a0)[Week 2: Optimization](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f80a59a72c3a8bdb137ce)[Week 3: Scale](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f80f6b76bdefbd3b187a1)[Week 4 and Beyond: Compound Effect](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f8084a596c96a221d4551)[Your Next 48 Hours with Gojiberry AI](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f8083bff5ee6989bf3913)[The Mindset Shift That Changes Everything](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#31eb9abcbe3f8012b7c2caa70c9953ed)[Start your warm AI engine now](https://www.notion.so/The-Autonomous-Sales-Agent-Playbook-444b9abcbe3f835c9114813610d2733f?pvs=25#8d8e4c6acd4c42d9b3ffb9cdc00ae71c)

### Executive summary

Most founders end up with a messy subscription pile.

GoHighLevel, Zapier, Calendly, a VA… it adds up fast.

The punchline: you can easily spend $1,000+/month and still respond too slowly to the people who are ready to buy.

The Autonomous Sales Agent isn’t a chatbot widget.

Think of it as an always-on operator that handles speed, context, and follow‑up without dropping the ball.

#### The one‑pager architecture

Eyes: [Gojiberry.ai](http://gojiberry.ai/) — detects high‑intent signals.

Body: OpenClaw — executes workflows and moves data.

Brain: Claude 4.6 Sonnet — analyzes context and writes human‑level messages.

Memory: Markdown files — a lightweight CRM in plain text.

Visual (high-level):

Eyes → Body → Brain → Memory

Eyes = intent signals • Body = workflows • Brain = reasoning + writing • Memory = Markdown CRM

#### Back-of-the-napkin ROI

Close a single $1,000 deal and the economics make sense immediately:

model/API spend is basically paid for

infrastructure cost becomes negligible

Low downside, high leverage.

#### The cost of inaction

| Metric | The old way (Human + SaaS) | The new way (Agent stack) |
| --- | --- | --- |
| Response time | ~47 hours (avg) | &lt; 2 minutes |
| Follow‑up rate | ~30% (humans give up) | ~100% (until they clearly decline) |
| Monthly cost | ~$1,447/mo | ~$20/mo |
| Maintenance | High (integrations break) | Low (code is stable) |

Stop renting your revenue engine. Own it.

## What you’ll build in this playbook

Part 1: Speed‑to‑lead — the business case for replying fast.

Part 2: The stack — Brain, Body, Eyes, Memory.

Part 3: The Context Engine — signal → research → decide → write.

Part 4: The file‑based CRM — a lightweight system you can own.

Part 5: The workflow set — 5 repeatable automations.

Part 6: Human‑in‑the‑loop — confidence gates, approvals, kill switch.

Part 7: How to ship it — options depending on your time and skills.

## Part 1 — Speed wins (the speed-to-lead case)

If you’re still replying manually, you’re paying a hidden tax: latency.

Every minute you wait turns interest into distraction.

### Why speed compounds

A large study (Harvard Business Review, 2,241 companies) found the average lead response time was about 47 hours.

In practice, attention decays fast:

Replying within 5 minutes can make you ~21× more likely to qualify than waiting 30 minutes.

After the first few minutes, conversion odds drop sharply.

Reason: your prospect is in “buying mode” right now. Later, they’re back to meetings.

### The bloat audit (how stacks happen)

Founders try to patch speed with tools, then patch the tools with more tools.

Soon you’re juggling a brittle chain of apps that break quietly.

At that point you’re not “doing sales”—you’re doing integration maintenance.

### Stack vs agent (cost snapshot)

Old way (roughly):

GoHighLevel (Agency): $297/mo

Zapier (Pro): $74/mo

Calendly (Teams): $16/mo

Mailchimp (Standard): $60/mo

Part‑time VA: $1,000/mo

Total: ~$1,447/mo

Agent stack (roughly):

OpenClaw (self‑host): $0/mo

TidyCal (one‑time): $29 lifetime

Resend (email): $0/mo (free tier)

Claude API: ~$15/mo

VPS hosting: ~$5/mo

Total: ~$20/mo

98% reduction in overhead.

## Part 2 — The agent stack (how the system is built)

Chatbots wait.

Agents act.

The difference is execution: agents wake up on signals, do the work, and push outcomes forward.

### The 4 components

Brain (Claude 4.6 Sonnet)

Why: most models sound robotic

Fix: Claude handles nuance and writes like a senior copywriter

Body (OpenClaw)

Why: you need an execution environment (Zapier is expensive + breaks)

Fix: OpenClaw connects APIs and runs code (your “hands”)

Eyes (Signal detection)

Why: you can’t sell to what you can’t see

Fix: continuously detect high‑intent signals and turn them into structured events

Memory (Markdown)

Why: databases are often overkill and hard to migrate

Fix: one file per lead, readable forever

### Code vs no‑code (the trap)

“No‑code” is sold by SaaS companies.

It’s fine for prototypes and terrible for production:

slow (each step adds latency)

brittle (one API change breaks the chain)

expensive at scale (task pricing)

OpenClaw runs on your server.

Cost stays flat.

### Infrastructure (VPS)

Don’t run this on your laptop.

When you close your MacBook, your employee dies.

Run it on a small VPS (DigitalOcean / Hetzner):

~2GB RAM / 1 CPU

~$5/mo

### Cheat sheet: required keys

| Service | Purpose | Cost |
| --- | --- | --- |
| Anthropic API | Brain (Claude) | Pay‑as‑you‑go |
| OpenAI API | Backup brain (optional) | Pay‑as‑you‑go |
| GojiberryAI | Signal detection | Subscription |
| Resend / SendGrid | Sending emails | Free tier |
| Slack webhook | Internal alerts | Free |
| Search API | Research prospects | Free tier / usage‑based |

## Part 3 — The Context Engine (signal → research → decide → write)

Most automation fails because people automate typing, not thinking.

A bot that says “Thanks for your message!” adds no value.

The Context Engine flips the script: collect context first, then decide intent, then write a response that actually fits.

### Phase 1 — Signal detection

Speed is the only variable that matters.

We don’t “check” for leads once a day. We listen continuously.

Example flow:

You publish content / run campaigns

A high‑intent signal happens (comment, DM, inbound request)

The system captures it instantly

A structured event is created and forwarded to your workflow engine

### Phase 2 — Research loop (the context file)

Before the agent writes one word, it must learn who it’s talking to.

Research workflow:

Extract sender’s profile URL + company URL

Pull profile + recent posts

Search company name + “news” / “funding”

Synthesize into a JSON dossier

Example dossier output:

{ "name": "Alex Smith", "role": "VP of Sales", "company": "TechFlow", "recent\_news": "Raised Series B last week", "pain\_point": "Scaling outbound team", "tone\_match": "Direct, professional" }

### Phase 3 — Intent triage (priority rules)

Not all leads are equal.

You need a strict system that decides speed + channel + escalation.

| Intent type | Priority | Description | Action |
| --- | --- | --- | --- |
| Buyer | P0 | Explicit intent (“Price?”, “Sign up?”) | Instant response (Slack + email) |
| Call request | P0 | Wants a meeting (“Demo?”, “Free Tuesday?”) | Send calendar link |
| Product inquiry | P1 | Specific feature question | Answer + case study |
| Service interest | P1 | Vague interest (“Tell me more”) | Qualify + value prop |
| Support | P1 | Existing customer issue | Route to support |
| Networking | P2 | Partnership / collab request | Draft gentle decline/delay |
| Spam / sales | P3 | Someone selling to you | Ignore / archive |

Logic:

P0: wake founder (SMS/Slack), respond immediately

P1: draft reply → approval or auto‑send if confidence &gt; 90%

P2: auto‑reply with “reviewing” template

P3: delete/archive

### Phase 4 — The copywriting engine (frameworks)

We don’t use templates. Templates are for amateurs.

We use frameworks selected based on intent.

Framework A — Context → Value → CTA (for P0 buyers)

Context: reference the signal (funding, hiring, post)

Value: 1 sentence of credible outcome

CTA: one clean next step

Framework B — PAS (for P1 inquiries)

Problem: reflect the pain

Agitation: underline the cost of the status quo

Solution: your approach + proof

Framework C — BAB (for cold/warm leads)

Before: current state (chaos)

After: desired state (clarity)

Bridge: how you get there

### Visualizing the flow (logic)

Signal received

Spam? → yes: archive • no: continue

Research (profile + company + news)

Build dossier (JSON)

Classify priority (P0 / P1 / P2 / P3)

Draft reply

P0: send + alert founder

P1+: queue for review (or auto‑send if confidence is high)

Log to Markdown CRM

This loop can happen in ~10 seconds.

## Part 4 — The File‑Based CRM

Stop paying for a heavy CRM you don’t use.

### Philosophy

If it isn’t plain text, you don’t own it.

### Structure: one lead = one file

Every prospect gets a single

.md

file.The filename becomes the unique ID (e.g.,

john-doe-stripe.md

).

### “Folders as stages” (state machine)

01\_Inbox → 02\_Qualifying → 03\_Proposal → 04\_Closed

Dead ends: 02\_Qualifying → 99\_Dead, 03\_Proposal → 99\_Dead

/01\_Inbox/

— new leads land here

/02\_Qualifying/

— active outreach

/03\_Proposal/

— meeting booked, you take over

/04\_Closed/

— won

/99\_Dead/

— unqualified/unsubscribed

Moving a file triggers the next action.

### Master lead template (copy/paste)

id: "lead\_001" name: "Alex Smith" company: "TechFlow" role: "VP of Sales" email: "alex@techflow.io" linkedin: "https://linkedin.com/in/alexsmith" status: "active" stage: "02\_Qualifying" last\_contact: "2026-03-01" next\_action: "follow\_up\_email\_3" value\_potential: 20000 # tags: \["series-b", "hiring", "python"\] # Research Dossier - Company news: Just raised $15M Series B. - Pain point: Scaling team, drowning in admin. - Personal interest: Writes about outbound systems. # Interaction Log ## 2026-03-01 — Agent (Outbound) Sent Email 1: "Saw the Series B news..." ## 2026-03-02 — Prospect (Reply) "Thanks. We’re swamped. What do you do?" ## 2026-03-02 — Agent (Reply) "We automate X. Saves you Y hours/week. Free Tuesday?"

## Part 5 — The 5‑Workflow Arsenal

Your agent is only as good as the workflows you give it.

### Skill 1 — Outbound campaign builder

Most founders blast a list of 1,000 leads with the same template.

That’s how you get flagged.

The fix: unique outreach, per person.

Workflow:

Drop a CSV into

/inputs/prospects.csv

For each row:

research profile + company

extract a specific “hook” (e.g., “just hired a new CMO”)

draft a 4‑email sequence referencing the hook

schedule emails via Resend/Gmail

Output: 100 emails over 48 hours, 100% unique, 0% template.

Practical prompt template:

You are an expert copywriter. CONTEXT: Prospect Name: {name} Company: {company} News Hook: {news\_hook} Pain Point: {pain\_point} TASK: Write a 3-sentence cold email. 1) Hook: Reference the {news\_hook} naturally. 2) Bridge: Connect their {pain\_point} to our solution. 3) Ask: Soft CTA (e.g., "worth a chat?") CONSTRAINT: Do not be formal. Write like a busy colleague. No hype. No exclamation points.

### Skill 2 — Inbound content monitor

You post a case study.

People comment: “link”, “interested”, “send me this”.

If you reply 6 hours later, they’re gone.

Workflow:

Detect keyword comment

Research the commenter

Check ICP fit

If fit: DM the link + 1 qualifying question

If not: reply publicly with the link

Output: high‑intent leads captured in &lt; 60 seconds.

Regex patterns (examples):

/send|link|guide|pdf|doc/i

(asset request)

/interested|how much|cost|price|demo/i

(purchase intent)

/dm me|message me|chat/i

(conversation request)

### Skill 3 — Trial‑to‑paid nudger

Most free users churn because they never set up properly.

Generic onboarding emails don’t help.

Workflow (example):

Trigger: Stripe webhook

customer.subscription.created

Wait 3 days

Query usage:

Scenario A (inactive): send “stuck?” email + 1‑min setup video

Scenario B (active): send “power user” tip + advanced workflow

### Skill 4 — Win‑back agent

“Dead” leads are often just dormant.

Workflow:

Monthly run

Pull list of closed‑lost / churned

Check if champion changed jobs

If yes: send a congrats + re‑engagement email

Practical prompt:

Analyze this LinkedIn profile: {profile\_url} Compare with our CRM record: - old\_company: {old\_company} - old\_title: {old\_title} Determine: 1) Have they changed jobs? (Yes/No) 2) Is the new company a fit for us? (B2B SaaS, >10 employees) 3) Draft a short congrats + re-engagement email.

### Skill 5 — Market intel briefing

You can’t spend 2 hours/day reading news.

The agent can.

Workflow:

Every Monday 8:00

Search competitor news + funding + hiring

Filter noise

Cross‑reference with your active pipeline

Summarize into 5 bullets

Send to your Telegram/Slack

Example format:

Competitor alert: X raised $10M; hiring 5 SDRs

Prospect news: TechFlow mentioned in TechCrunch

Trend: “AI agents” search volume up +40%

Pending approvals: 3 drafts waiting

## Part 6 — Deployment & Human‑in‑the‑Loop

You’re afraid:

“What if the AI hallucinates? What if it insults someone? What if it offers a discount by accident?”

Valid fear.

We build human‑in‑the‑loop systems.

### Safeguard 1 — Confidence score

Before any message is sent, the model must rate confidence 0–100.

Rules:

confidence &gt; 90% → auto‑send (routine scheduling, simple questions)

confidence &lt;= 90% → send draft to approval queue

Approval workflow:

Agent drafts

Agent self‑scores (e.g., 75%)

Bot pings you with two buttons: APPROVE / REJECT

You approve

Agent sends

### Safeguard 2 — The kill switch

Software breaks. APIs fail.

You need an emergency brake.

Pattern:

global variable:

SYSTEM\_STATUS = "ACTIVE"

if anything looks weird: send

/STOP

system freezes instantly (no emails, no DMs)

fix bug →

/START

### The new daily routine (operator mode)

You’re not an SDR anymore. You’re a manager.

You review, not do.

Morning (8:00)

check market intel briefing

see who raised / who’s hiring

Time: ~5 min

Noon (12:00)

clear approval queue

approve/edit a handful of drafts

Time: ~10 min

Evening (17:00)

check pipeline folder (

/03\_Proposal/

)

see meetings booked

Time: ~2 min

### SOP — the 15‑minute daily audit

Checklist:

check logs: did the cron run at 9 AM?

check inbox: are there urgent P0s waiting?

spot check: read 3 sent emails (quality control)

If quality drops, tweak prompts.

You don’t fire the employee. You retrain it.

## Part 7 — Stop Renting Software. Start Owning Agents.

You now have the blueprint.

This is not about saving money.

It’s about speed.

It’s about control.

It’s about freedom.

You have four choices:

Use GojiberryAI as the eyes.

Even without a full agent stack, signal capture alone can multiply warm conversations.

### Option 2 — Do it yourself (DIY)

You have the guide.

Spin up a VPS.

Install OpenClaw.

Plug in your signal detection.

Build the machine.

Cost: time + effort.

### Start now

→ Start your warm AI engine: [https://gojiberry.ai](https://gojiberry.ai/) (trial)

⇒ [Book a call with the founder](https://calendly.com/d/cvbb-bf6-fth)

If you’d like extra guidance:

1) Join a live group demo (3× per week)

[https://us06web.zoom.us/webinar/register/WN\_u8o3Qm1aTTW0HPGd2zKQiw](https://us06web.zoom.us/webinar/register/WN_u8o3Qm1aTTW0HPGd2zKQiw)

2) Follow the full step‑by‑step blueprint

[The LinkedIn High Intent Outreach System: How We Booked 12 demos in 5 days with AI (powered by CLAUDE)](https://www.notion.so/The-LinkedIn-High-Intent-Outreach-System-How-We-Booked-12-demos-in-5-days-with-AI-powered-by-CLAUD-26fb9abcbe3f80eca978f3ede6acf809?pvs=24) Bonus

## LinkedIn high‑intent outreach: the short version

A practical add‑on on how to turn intent signals into conversations (without spamming).

### Why high‑intent beats cold

LinkedIn outreach works when you show up at the right moment, not when you blast a list.

#### Cold outreach (typical)

~1–2% response rate

You might need ~100 messages to create 1 meeting

Prospects assume you’re pitching

It feels like pushing a boulder uphill

![](https://www.notion.so/image/attachment%3A6e52a94d-7091-479b-81fe-d1e6427cc064%3ACapture_decran_2025-09-25_a_16.58.51.png?table=block&id=31eb9abc-be3f-80a0-91dd-f42ee76c189e&spaceId=5ce1da52-1ca3-40b5-b008-2e531ea6cdf7&width=1420&userId=&cache=v2)

#### High‑intent outreach (when you time it right)

Response rates can jump to ~25–40%

Often ~10 messages to create 1 meeting

Prospects are already engaged in the topic

You’re joining an active conversation

#### The difference?

Intent signals.

When someone comments "interested" on a post, they're literally raising their hand saying "I have this problem." That's a 100x stronger signal than any data point you can buy.

![](https://www.notion.so/image/attachment%3A17c7ea82-8d77-43f1-97ea-0ebde9c914db%3ACapture_decran_2025-09-25_a_16.59.35.png?table=block&id=31eb9abc-be3f-804e-8bd1-e1b57723bdf0&spaceId=5ce1da52-1ca3-40b5-b008-2e531ea6cdf7&width=1420&userId=&cache=v2)

### The 300 high intent Leads Framework

Let me show you exactly how we generated 300 high intent leads from a single AI agent search last week.

#### Step 1: Understand what an high intent lead is

A high intent lead isn’t just someone who is your Ideal Customer on the paper.

It’s someone actively showing signals that they are warm and active right now.

Think less about cold lists and more about real-time triggers:

Liking or commenting on competitor posts

Starting a new role or making key hires

Announcing fresh funding

Following relevant influencers or hashtags

Publicly sharing pain points or complaints

These signals tell you who is in the market now.

Reaching out at that moment feels less like cold outreach and more like joining a conversation they’ve already started.

If you target these people, you will win. You can do it manually (it takes a lot of time, 5 hours + per day) or use AI agents to do it for you.

#### Step 2: Set up your free AI agents to get high intent leads

1) go to [https://gojiberry.ai](https://gojiberry.ai/) and create an account (There is a trial, it’s enough to get your first demos + 300 leads)

![](https://www.notion.so/image/attachment%3A46c384da-0f82-43c1-883c-a805c4950721%3ACapture_decran_2025-09-25_a_16.09.38.png?table=block&id=31eb9abc-be3f-809d-afdc-cb707a6e15db&spaceId=5ce1da52-1ca3-40b5-b008-2e531ea6cdf7&width=1420&userId=&cache=v2)

First, enter your ideal customer profile (5mn)

![](https://www.notion.so/image/attachment%3A2bdbef89-bc47-41a7-b7e5-b5e6c29a1148%3ACapture_decran_2025-09-25_a_17.20.28.png?table=block&id=31eb9abc-be3f-802b-a612-fac2014c578e&spaceId=5ce1da52-1ca3-40b5-b008-2e531ea6cdf7&width=1420&userId=&cache=v2)

Then, set up your AI agents (5mn)

![](https://www.notion.so/image/attachment%3A849ed7dc-28c2-4a5a-8eb9-554cd0d8d4a3%3Aimage.png?table=block&id=31eb9abc-be3f-8065-917e-ca1bdc262d62&spaceId=5ce1da52-1ca3-40b5-b008-2e531ea6cdf7&width=1420&userId=&cache=v2)

With Gojiberry AI, you can activate multiple smart agents to capture high-intent signals in real time.

Company competitor profile: Track leads who follow or interact with your competitors.

Influencer profile in your field: Spot people engaging with trending content in your niche.

Recently changed jobs: Identify prospects who just switched roles and may have fresh budget.

Top 5% of ICP: Detect the most active and highly engaged profiles in your target market.

Recently raised funds: Get alerted when companies announce new funding, showing buying intent.

Engagement & Interest: Find leads who recently interacted with relevant LinkedIn content.

Your company: Monitor people engaging directly with your company or team.

These agents work on autopilot, keeping your pipeline full of warm, high-intent opportunities.

Recap video: