# KB Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the Obsidian vault to reflect current professional focus (AI/agentic coding, SaaS, consulting), remove dead content, and add missing knowledge.

**Architecture:** File-based Obsidian vault with Quartz 4 SSG. All operations are file moves/creates/edits within `content/`. Wikilinks use shortest-path resolution. Three index files (`_indexes/vault-map.md`, `catalog.md`, `graph.md`) must be rebuilt after all changes.

**Tech Stack:** Obsidian Markdown, Quartz 4, Git, bash for batch operations

**Spec:** `docs/superpowers/specs/2026-04-09-kb-overhaul-design.md`

**External context directories (read-only, for content reference):**
- `C:\PROJEKTY\agentic-ai-private\context\` — PLSoft, personal brand, finances, clients
- `C:\PROJEKTY\agentic-ai-system\context\` — 200IQ Labs, Qamera AI, operations, product

**Writing style reference:** `content/STYL_PISANIA_ANALIZA.md`

**Key conventions:**
- Frontmatter: title, date, enableToc, openToc, tags, type, agent-created, summary
- Emoji headings: 🚀 main, 🎨 impressions, ☘️ impact, ✍️ quotes, 📒 summary, 🗒️ description, 🔗 links, 🧩 features, 📖 further reading
- Mix Polish/English (technical terms in English)
- Wikilinks: `[[Note Name]]` shortest-path
- Templates in `content/templates/`

---

## Task 1: Delete 25 notes

**Files:**
- Delete: 25 files listed below

Before deleting books, add them to Reading list.

- [ ] **Step 1: Add unread books to Reading list**

Read `content/GENERAL/Reading list.md`, then append these two titles to the reading list before deleting them:
- Twoje kompetentne dziecko
- W sercu emocji dziecka

- [ ] **Step 2: Delete all 25 files**

```bash
cd "C:\Users\pawel\source\repos\plipowczan\brain"

# INVESTMENTS
rm "content/INVESTMENTS/Qualcomm.md"

# GENERAL (dataview queries)
rm "content/GENERAL/Tools.md"

# NOCODE
rm "content/NOCODE/Tools.md"

# TRAVELS (dataview query)
rm "content/TRAVELS/Tools.md"

# NOCODE/TOOLS - dead/empty
rm "content/NOCODE/TOOLS/Altogic.md"
rm "content/NOCODE/TOOLS/Xata.md"
rm "content/NOCODE/TOOLS/Webflow.md"

# BUSINESS/TOOLS - empty/unused
rm "content/BUSINESS/TOOLS/Marble.md"
rm "content/BUSINESS/TOOLS/SendFox.md"
rm "content/BUSINESS/TOOLS/Blinkist.md"
rm "content/BUSINESS/TOOLS/Descript.md"
rm "content/BUSINESS/TOOLS/Happyscribe.md"
rm "content/BUSINESS/TOOLS/Movavi.md"

# LIFE/TOOLS - unused placeholders
rm "content/LIFE/TOOLS/Audioteka.md"
rm "content/LIFE/TOOLS/Brave.md"
rm "content/LIFE/TOOLS/Feedly.md"
rm "content/LIFE/TOOLS/Firefox.md"
rm "content/LIFE/TOOLS/Goodreads.md"
rm "content/LIFE/TOOLS/LubimyCzytac.md"
rm "content/LIFE/TOOLS/Dashlane.md"

# LIFE/BOOKS - unread placeholders (already added to Reading list)
rm "content/LIFE/BOOKS/Twoje kompetentne dziecko.md"
rm "content/LIFE/BOOKS/W sercu emocji dziecka.md"

# PROJECTS - empty
rm "content/PROJECTS/Hospital Logistics.md"
```

Note: "Contact a client.md" in BUSINESS/KNOWLEDGE/HOWTO was listed as "Untitled" in catalog but has real content — keep it. "Trendy 2026.md" in PROJECTS has content — move to ARCHIVE in Task 3.

- [ ] **Step 3: Remove empty parent directories**

```bash
rmdir "content/INVESTMENTS" 2>/dev/null
# GENERAL and NOCODE cleaned up after migration in Task 3
```

- [ ] **Step 4: Commit**

```bash
git add -A content/INVESTMENTS content/GENERAL/Tools.md content/NOCODE/Tools.md content/TRAVELS/Tools.md content/NOCODE/TOOLS/Altogic.md content/NOCODE/TOOLS/Xata.md content/NOCODE/TOOLS/Webflow.md content/BUSINESS/TOOLS/Marble.md content/BUSINESS/TOOLS/SendFox.md content/BUSINESS/TOOLS/Blinkist.md content/BUSINESS/TOOLS/Descript.md content/BUSINESS/TOOLS/Happyscribe.md content/BUSINESS/TOOLS/Movavi.md content/LIFE/TOOLS/Audioteka.md content/LIFE/TOOLS/Brave.md content/LIFE/TOOLS/Feedly.md content/LIFE/TOOLS/Firefox.md content/LIFE/TOOLS/Goodreads.md content/LIFE/TOOLS/LubimyCzytac.md content/LIFE/TOOLS/Dashlane.md content/LIFE/BOOKS/Twoje\ kompetentne\ dziecko.md content/LIFE/BOOKS/W\ sercu\ emocji\ dziecka.md content/PROJECTS/Hospital\ Logistics.md
git commit -m "chore: delete 25 dead/placeholder notes"
```

---

## Task 2: Create new folder structure

**Files:**
- Create: new directories for AI/, CRYPTO/, PROJECTS/ subfolders

- [ ] **Step 1: Create all new directories**

```bash
cd "C:\Users\pawel\source\repos\plipowczan\brain"

# AI (new top-level)
mkdir -p content/AI/KNOWLEDGE/HOWTO
mkdir -p content/AI/KNOWLEDGE/INFO
mkdir -p content/AI/TOOLS

# BUSINESS/KNOWLEDGE/INFO (new)
mkdir -p content/BUSINESS/KNOWLEDGE/INFO

# CRYPTO (replaces WEB3)
mkdir -p content/CRYPTO/KNOWLEDGE/INFO
mkdir -p content/CRYPTO/NOTES

# PROJECTS subfolders
mkdir -p content/PROJECTS/QAMERA-AI
mkdir -p content/PROJECTS/PLSOFT
mkdir -p content/PROJECTS/BRAIN
mkdir -p content/PROJECTS/AGENTIC-SYSTEMS
mkdir -p content/PROJECTS/VALUE-BUILDERS
mkdir -p content/PROJECTS/VALUE-BUILDERS-TRIBE
mkdir -p content/PROJECTS/ARCHIVE/SHAREFUND
mkdir -p content/PROJECTS/ARCHIVE/AH
```

- [ ] **Step 2: Verify structure**

```bash
find content/AI content/CRYPTO content/PROJECTS -type d | sort
```

Expected: all directories listed above exist.

---

## Task 3: Migrate existing files

**Files:**
- Move: ~22 files to new locations

- [ ] **Step 1: Migrate CODE → AI (4 files)**

```bash
cd "C:\Users\pawel\source\repos\plipowczan\brain"
mv "content/CODE/KNOWLEDGE/INFO/Harness Engineering.md" "content/AI/KNOWLEDGE/INFO/"
mv "content/CODE/KNOWLEDGE/INFO/LLM Knowledge Bases.md" "content/AI/KNOWLEDGE/INFO/"
mv "content/CODE/TOOLS/Agent Skills.md" "content/AI/TOOLS/"
mv "content/CODE/TOOLS/Autoresearch.md" "content/AI/TOOLS/"
```

- [ ] **Step 2: Migrate CODE/GENERAL → CODE/KNOWLEDGE/HOWTO (2 files)**

```bash
mv "content/CODE/GENERAL/Common workflow I use in dotnet projects using Azure DevOps.md" "content/CODE/KNOWLEDGE/HOWTO/"
mv "content/CODE/GENERAL/How to deal with pull request merge conflicts.md" "content/CODE/KNOWLEDGE/HOWTO/"
rmdir "content/CODE/GENERAL"
```

- [ ] **Step 3: Migrate NOCODE → BUSINESS (8 files)**

```bash
# Tools
mv "content/NOCODE/TOOLS/Airtable.md" "content/BUSINESS/TOOLS/"
mv "content/NOCODE/TOOLS/Make.md" "content/BUSINESS/TOOLS/"
mv "content/NOCODE/TOOLS/Zapier.md" "content/BUSINESS/TOOLS/"
mv "content/NOCODE/TOOLS/Excalidraw.md" "content/BUSINESS/TOOLS/"
mv "content/NOCODE/TOOLS/Notion.md" "content/BUSINESS/TOOLS/"
mv "content/NOCODE/TOOLS/Sendgrid.md" "content/BUSINESS/TOOLS/"

# HOWTOs
mv "content/NOCODE/KNOWLEDGE/HOWTO/How to convert multiselect field into a 'link to another table field'.md" "content/BUSINESS/KNOWLEDGE/HOWTO/"
mv "content/NOCODE/KNOWLEDGE/HOWTO/How to convert pdf to Goodle Docs or Word.md" "content/BUSINESS/KNOWLEDGE/HOWTO/"
mv "content/NOCODE/KNOWLEDGE/HOWTO/How to create an app in Make.md" "content/BUSINESS/KNOWLEDGE/HOWTO/"
mv "content/NOCODE/KNOWLEDGE/HOWTO/How to instantly trigger Make scenario on row created event from Airtable free plan.md" "content/BUSINESS/KNOWLEDGE/HOWTO/"
mv "content/NOCODE/KNOWLEDGE/HOWTO/How to send emails directly from Free Airtable using Sendgrid extension.md" "content/BUSINESS/KNOWLEDGE/HOWTO/"
mv "content/NOCODE/KNOWLEDGE/HOWTO/Synchronize Airtable with Webflow.md" "content/BUSINESS/KNOWLEDGE/HOWTO/"
```

- [ ] **Step 4: Migrate GENERAL → new locations (2 files)**

```bash
mv "content/GENERAL/Reading list.md" "content/LIFE/NOTES/"
mv "content/GENERAL/What tools I use.md" "content/ABOUT/"
```

- [ ] **Step 5: Migrate HARDWARE → LIFE/TOOLS (1 file)**

```bash
mv "content/HARDWARE/Kindle.md" "content/LIFE/TOOLS/"
rmdir "content/HARDWARE"
```

- [ ] **Step 6: Migrate WEB3 → CRYPTO (8 files)**

```bash
mv "content/WEB3/Crypto Exchanges.md" "content/CRYPTO/NOTES/"
mv "content/WEB3/Influencers.md" "content/CRYPTO/NOTES/"
mv "content/WEB3/My web3.md" "content/CRYPTO/NOTES/"
mv "content/WEB3/What mistakes I made on the crypto market in 2021-2022.md" "content/CRYPTO/NOTES/"
mv "content/WEB3/KNOWLEDGE/INFO/CEX.md" "content/CRYPTO/KNOWLEDGE/INFO/"
mv "content/WEB3/PROJECTS/Cosmos.md" "content/CRYPTO/NOTES/"
mv "content/WEB3/PROJECTS/Filecoin.md" "content/CRYPTO/NOTES/"
mv "content/WEB3/PROJECTS/Polygon.md" "content/CRYPTO/NOTES/"
```

- [ ] **Step 7: Migrate PROJECTS → ARCHIVE (5 files)**

```bash
mv "content/PROJECTS/SHAREFUND/ShareFund.md" "content/PROJECTS/ARCHIVE/SHAREFUND/"
mv "content/PROJECTS/Drug Temperature Control System.md" "content/PROJECTS/ARCHIVE/"
mv "content/PROJECTS/Genti Retail.md" "content/PROJECTS/ARCHIVE/"
mv "content/PROJECTS/Work attendance management system.md" "content/PROJECTS/ARCHIVE/"
mv "content/PROJECTS/AH/PULS.md" "content/PROJECTS/ARCHIVE/AH/"
mv "content/PROJECTS/Trendy 2026.md" "content/PROJECTS/ARCHIVE/"
mv "content/PROJECTS/SECONDBRAIN/Programmer and what's next.md" "content/LIFE/NOTES/"
```

- [ ] **Step 8: Clean up empty directories**

```bash
rm -rf "content/NOCODE"
rm -rf "content/WEB3"
rm -rf "content/GENERAL"
rm -rf "content/PROJECTS/SHAREFUND"
rm -rf "content/PROJECTS/AH"
rm -rf "content/PROJECTS/SECONDBRAIN"
```

- [ ] **Step 9: Verify migration**

```bash
# Check no files left in old locations
ls content/NOCODE 2>/dev/null && echo "NOCODE still exists!" || echo "OK: NOCODE gone"
ls content/WEB3 2>/dev/null && echo "WEB3 still exists!" || echo "OK: WEB3 gone"
ls content/GENERAL 2>/dev/null && echo "GENERAL still exists!" || echo "OK: GENERAL gone"
ls content/HARDWARE 2>/dev/null && echo "HARDWARE still exists!" || echo "OK: HARDWARE gone"
ls content/INVESTMENTS 2>/dev/null && echo "INVESTMENTS still exists!" || echo "OK: INVESTMENTS gone"

# Check files arrived
ls "content/AI/KNOWLEDGE/INFO/Harness Engineering.md" && echo "OK"
ls "content/AI/TOOLS/Agent Skills.md" && echo "OK"
ls "content/BUSINESS/TOOLS/Airtable.md" && echo "OK"
ls "content/CRYPTO/NOTES/Crypto Exchanges.md" && echo "OK"
ls "content/PROJECTS/ARCHIVE/SHAREFUND/ShareFund.md" && echo "OK"
```

- [ ] **Step 10: Commit**

```bash
git add -A
git commit -m "refactor: migrate files to new folder structure (AI, CRYPTO, BUSINESS, ARCHIVE)"
```

---

## Task 4: Copy profile photo

**Files:**
- Copy: profile photo to ATTACHMENTS
- Modify: `content/ABOUT/About.md`

- [ ] **Step 1: Copy photo**

```bash
cp "C:\Users\pawel\OneDrive\Pictures\SESJA BIZNESOWA\2023\JPG\_DSC0755_square.jpg" "content/ATTACHMENTS/pawel_lipowczan_2023.jpg"
```

- [ ] **Step 2: Verify**

```bash
ls -la "content/ATTACHMENTS/pawel_lipowczan_2023.jpg"
```

---

## Task 5: Update About.md

**Files:**
- Modify: `content/ABOUT/About.md`

- [ ] **Step 1: Read current About.md and update**

Replace the entire content of `content/ABOUT/About.md` with updated bio. Key changes:
- New photo reference (`pawel_lipowczan_2023.jpg` instead of `4a_round_nobg.png`)
- Updated role: CTO & Co-Founder at 200IQ Labs (Qamera AI), not ShareFund
- Updated areas: AI/agentic coding, SaaS product, consulting — not crypto/NFT/web3
- Updated interests: AI, mountains, travel — not blockchain/NFT

New content:

```markdown
---
title: "About"
date: 2022-08-22
enableToc: true
openToc: true
tags: ["about", "pawellipowczan"]
type: basic-note
agent-reviewed: 2026-04-09
---
# About

![[ATTACHMENTS/pawel_lipowczan_2023.jpg]]

Hello! I'm Pawel Lipowczan. I have been a software architect and developer for more than 17 years. Currently I focus on AI-powered development, building agentic coding environments, and creating SaaS products. I also work as a technology advisor helping companies automate their processes. Privately a husband and father of two children, enthusiast of modern technology, sports and traveling.

## Areas in which I am currently active:
- CTO & Co-Founder at [[PROJECTS/QAMERA-AI/Qamera AI|200IQ Labs]] — building Qamera AI, an AI-powered virtual photo studio for e-commerce
- Technology Advisor at [[PROJECTS/PLSOFT/PLSoft]] — consulting on AI integration, process automation, and system architecture
- Builder of [[PROJECTS/AGENTIC-SYSTEMS/Agentic Systems|agentic coding environments]] — designing agent architectures, skills, and context systems for AI-assisted development
- Trainer & Mentor at [[PROJECTS/VALUE-BUILDERS/Value Builders]] and [[PROJECTS/VALUE-BUILDERS-TRIBE/Value Builders Tribe]]
- Passive crypto investor — primarily Bitcoin

## As a lover of modern technology, sports and travel:
- I explore AI and agentic coding patterns
- I hike in the mountains
- I travel 😉

## MY PERSONALITY TESTS
[[ABOUT/DISC]]
[[ABOUT/CLIFTONSTRENGTHS]]
```

- [ ] **Step 2: Commit**

```bash
git add "content/ABOUT/About.md" "content/ATTACHMENTS/pawel_lipowczan_2023.jpg"
git commit -m "update: About page — new photo, updated bio and roles"
```

---

## Task 6: Update What tools I use

**Files:**
- Modify: `content/ABOUT/What tools I use.md` (already moved to ABOUT in Task 3)

- [ ] **Step 1: Rewrite with current tools**

Replace content of `content/ABOUT/What tools I use.md`:

```markdown
---
title: "What tools I use"
date: 2022-09-06
enableToc: true
openToc: true
tags: ["tools", "about"]
type: basic-note
agent-reviewed: 2026-04-09
---
# What tools I use

## AI & Development
[[AI/TOOLS/Claude Code]]
[[AI/TOOLS/Cursor]]
[[CODE/TOOLS/Visual Studio Code]]
[[CODE/TOOLS/Git]]
[[CODE/TOOLS/Docker]]
[[CODE/TOOLS/Supabase]]

## Automation & Integration
[[BUSINESS/TOOLS/Make]]
[[BUSINESS/TOOLS/n8n]]
[[AI/TOOLS/VAPI]]

## Productivity
### Task management
[[BUSINESS/TOOLS/ClickUp]]
[[LIFE/TOOLS/Microsoft To Do]]

### Notes
[[LIFE/TOOLS/Obsidian]]
[[BUSINESS/TOOLS/Notion]]

### Mail & Calendar
[[BUSINESS/TOOLS/Outlook]]

### Password manager
[[BUSINESS/TOOLS/1Password]]
[[LIFE/TOOLS/Authenticator]]

### Window manager & Launcher
[[LIFE/TOOLS/PowerToys]]

### Diagrams & Whiteboard
[[BUSINESS/TOOLS/Excalidraw]]
[[BUSINESS/TOOLS/Miro]]

## Browser
[[LIFE/TOOLS/Edge]]

## Books
[[LIFE/TOOLS/Kindle]]

## Infrastructure
[[CODE/TOOLS/Google Cloud]]
[[AI/TOOLS/NemoClaw]]
```

- [ ] **Step 2: Commit**

```bash
git add "content/ABOUT/What tools I use.md"
git commit -m "update: What tools I use — refreshed for 2026 toolset"
```

---

## Task 7: Update My career path

**Files:**
- Modify: `content/ABOUT/My career path.md`

- [ ] **Step 1: Read current file, then append current chapter**

Read `content/ABOUT/My career path.md` and add a new section at the end (before any Resources section) covering 2024-2026:

```markdown

## 2024-2026: CTO & Agentic Coding

After years of consulting and leading technical teams, I made a significant shift. Together with a partner, I co-founded **200IQ Labs** and took the role of CTO. We're building [[PROJECTS/QAMERA-AI/Qamera AI]] — an AI-powered virtual photo studio for e-commerce.

The biggest change in how I work: I no longer write most of the code myself. Instead, I design environments for AI coding agents — specifications, context files, review loops, and guardrails. 99% of small code fixes in Qamera AI are done by agents. My role shifted from "developer who writes code" to "architect who designs systems for agents to write code."

Key areas I focus on now:
1. [[AI/KNOWLEDGE/INFO/Agentic Coding]] — designing agent environments, not manual coding
2. [[AI/KNOWLEDGE/INFO/Context Engineering]] — CLAUDE.md, MCP servers, skills, sub-agents
3. [[BUSINESS/KNOWLEDGE/INFO/Product-Market Fit]] — validating Qamera AI with real customers
4. [[BUSINESS/KNOWLEDGE/INFO/Build in Public]] — sharing the journey on LinkedIn

I also continue consulting through [[PROJECTS/PLSOFT/PLSoft]], helping companies integrate AI into their workflows, and I'm becoming a trainer/mentor at [[PROJECTS/VALUE-BUILDERS/Value Builders]].
```

- [ ] **Step 2: Update frontmatter** — add `agent-reviewed: 2026-04-09`

- [ ] **Step 3: Commit**

```bash
git add "content/ABOUT/My career path.md"
git commit -m "update: My career path — add 2024-2026 CTO & agentic coding chapter"
```

---

## Task 8: Update remaining existing notes (Make, ClickUp, Airtable, Obsidian, Digital Garden, Projects, Principles)

**Files:**
- Modify: 7 files

- [ ] **Step 1: Update Make** (`content/BUSINESS/TOOLS/Make.md` — moved from NOCODE in Task 3)

Read the file first. Update to reflect current role: still a powerful automation tool in the toolbox, but user now automates primarily with code + AI agents. Make is used for specific integration scenarios, not as primary development paradigm. Update wikilink paths (from NOCODE/ to BUSINESS/).

- [ ] **Step 2: Update ClickUp** (`content/BUSINESS/TOOLS/ClickUp.md`)

Read the file first. Update to reflect current use: daily/weekly task execution, CRM for leads, project tracking for 200IQ Labs and PLSoft. Not just generic "task management."

- [ ] **Step 3: Update Airtable** (`content/BUSINESS/TOOLS/Airtable.md` — moved from NOCODE in Task 3)

Read the file first. Update to reflect current use: research database, content inventory, profiles and inspiration tracking. Update wikilink paths.

- [ ] **Step 4: Update Obsidian** (`content/LIFE/KNOWLEDGE/INFO/Obsidian.md`)

Read the file first. Update to reflect: used with LLM agents for knowledge base management (see [[AI/KNOWLEDGE/INFO/LLM Knowledge Bases]]), Quartz 4 for SSG, agent-maintained digital garden at brain.lipowczan.pl.

- [ ] **Step 5: Update Digital Garden** (`content/LIFE/KNOWLEDGE/INFO/Digital Garden.md`)

Read the file first. Update to reflect: current state of brain.lipowczan.pl, maintained by AI agents, Quartz 4, deployed via GitHub Actions.

- [ ] **Step 6: Update Projects** (`content/PROJECTS/Projects.md`)

Rewrite the project list to reflect current active projects:
1. Qamera AI — AI virtual photo studio (200IQ Labs)
2. PLSoft — Technology consulting
3. Agentic Systems — Agent environments and shared-skills
4. Value Builders — Trainer role
5. Value Builders Tribe — Tech Lead / Mentor role
6. Brain — This digital garden

Link to ARCHIVE for historical projects.

- [ ] **Step 7: Update Principles** (`content/ABOUT/Principles.md`)

Read the file first. Check if principles still hold. Add new principles if relevant from external context (e.g., "Technology as leverage", "Design environments for agents, not code manually").

- [ ] **Step 8: Commit**

```bash
git add content/BUSINESS/TOOLS/Make.md content/BUSINESS/TOOLS/ClickUp.md content/BUSINESS/TOOLS/Airtable.md content/LIFE/KNOWLEDGE/INFO/Obsidian.md content/LIFE/KNOWLEDGE/INFO/Digital\ Garden.md content/PROJECTS/Projects.md content/ABOUT/Principles.md
git commit -m "update: refresh 7 existing notes for current context"
```

---

## Task 9: Fill role placeholders (5 roles)

**Files:**
- Modify: `content/ABOUT/Roles/Developer.md`, `Founder.md`, `AutomationSpecialist.md`, `Friend.md`, `Son.md`

For each role: read the current placeholder, then replace with meaningful content based on external context. Keep the same frontmatter structure as `Father.md` (basic-note). Remove `todo/complete` tag, add descriptive tags. Set `agent-reviewed: 2026-04-09`.

- [ ] **Step 1: Fill Developer.md**

```markdown
---
title: "Developer"
date: 2022-08-21
enableToc: true
openToc: true
tags: ["about", "developer", "architect"]
type: basic-note
agent-reviewed: 2026-04-09
---
# Developer

17+ years in software development. Started as a junior .NET programmer during university, grew into a software architect working across 100+ projects for 50+ clients.

## Current focus
- **Agentic coding** — I design environments for AI coding agents rather than writing most code myself. Specs, context files, review loops, guardrails.
- **AI-powered SaaS** — CTO at 200IQ Labs, building [[PROJECTS/QAMERA-AI/Qamera AI]]
- **Full-stack** — .NET backend roots, learning React/Next.js for frontend

## Core stack
Python, .NET, FastAPI, SQL Server, Docker, Supabase, [[AI/TOOLS/Claude Code]], [[AI/TOOLS/Cursor]]

## Philosophy
Code-first. No-code only when the client lacks a technical team. Technology is a multiplier for business goals, not an end in itself.

Powiazane: [[ABOUT/Roles/Roles]]
```

- [ ] **Step 2: Fill Founder.md**

```markdown
---
title: "Founder"
date: 2022-08-21
enableToc: true
openToc: true
tags: ["about", "founder", "entrepreneur"]
type: basic-note
agent-reviewed: 2026-04-09
---
# Founder

Co-Founder & CTO at **200IQ Labs PSA** (30% ownership). Previously co-founded ShareFund.

## 200IQ Labs
Building [[PROJECTS/QAMERA-AI/Qamera AI]] — an AI-powered virtual photo studio for e-commerce. My role: product architecture, agent environments, technical strategy.

## PLSoft (JDG)
Running my own consulting practice since 2008 — [[PROJECTS/PLSOFT/PLSoft]]. Technology advisory, process automation, AI integration.

## What I've learned about founding
1. Pre-PMF: direct sales > marketing processes
2. 10-12 active paying customers from outside founder network = real validation
3. If every sale requires customization, you don't have a product yet
4. [[ABOUT/Principles|Work or invest in a project that when done will still bring income]]

Powiazane: [[ABOUT/Roles/Roles]]
```

- [ ] **Step 3: Fill AutomationSpecialist.md**

```markdown
---
title: "AutomationSpecialist"
date: 2022-08-21
enableToc: true
openToc: true
tags: ["about", "automation", "integration"]
type: basic-note
agent-reviewed: 2026-04-09
---
# Automation Specialist

I automate business processes — primarily with code and AI agents, supplemented by tools like [[BUSINESS/TOOLS/Make]] and [[BUSINESS/TOOLS/n8n]] where they fit.

## What I automate
- Business process workflows (document processing, approvals, notifications)
- System integrations (SQL Server, BigQuery, Airtable, APIs)
- AI-powered workflows (chatbots, voicebots via [[AI/TOOLS/VAPI]], RAG systems)
- Data pipelines and reporting

## Approach
Code-first. I use no-code/low-code tools when the client lacks a technical team or for rapid prototyping, but the default is writing code with AI agent assistance.

## Past projects
- Invoice automation (OCR + bank integration) — 95% error reduction
- Creative system for event agency — 50% acceleration
- System integration for PHU Impex — SQL Server + Airtable + BigQuery
- Contextual chatbot — 70%+ automation rate

Powiazane: [[ABOUT/Roles/Roles]]
```

- [ ] **Step 4: Fill Friend.md**

```markdown
---
title: "Friend"
date: 2022-08-21
enableToc: true
openToc: true
tags: ["about", "friend"]
type: basic-note
agent-reviewed: 2026-04-09
---
# Friend

I value deep, long-term friendships over a wide social circle. I prefer quality time — hiking, shared meals, honest conversations — over large social events.

My closest friends are often people I've worked with or built something together. Shared challenges create the strongest bonds.

Powiazane: [[ABOUT/Roles/Roles]]
```

- [ ] **Step 5: Fill Son.md**

```markdown
---
title: "Son"
date: 2022-08-21
enableToc: true
openToc: true
tags: ["about", "family"]
type: basic-note
agent-reviewed: 2026-04-09
---
# Son

Maintaining a strong relationship with my parents. Family is a foundation — I try to stay close, visit regularly, and be present.

Powiazane: [[ABOUT/Roles/Roles]]
```

- [ ] **Step 6: Update Roles.md** — add wikilinks to Friend and Son if missing

Read `content/ABOUT/Roles/Roles.md` and verify all roles are linked.

- [ ] **Step 7: Commit**

```bash
git add content/ABOUT/Roles/
git commit -m "fill: complete all 5 role placeholders with content"
```

---

## Task 10: Fill other placeholders (Authenticator, PowerToys, Blue light, 12 Rules for Life, Company of One)

**Files:**
- Modify: 5 files

- [ ] **Step 1: Fill Authenticator** (`content/LIFE/TOOLS/Authenticator.md`)

Read current file, then replace with:

```markdown
---
title: "Authenticator"
date: 2022-09-06
enableToc: true
openToc: true
tags: ["tool", "security", "2fa"]
type: tool
agent-reviewed: 2026-04-09
---
# Authenticator

Two-factor authentication app for securing online accounts.

## Links
### Description
Microsoft Authenticator — generates time-based one-time passwords (TOTP) and supports push notifications for Microsoft accounts.
### Download or use
Available on iOS and Android app stores.

## Reasoning for
Essential security layer for all important accounts. I use it alongside [[BUSINESS/TOOLS/1Password]] — 1Password for passwords, Authenticator for 2FA codes.

## Alternatives considered
- Google Authenticator — simpler but less features
- Authy — multi-device sync but more complex

## Resources
[Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)

---
Template: [[templates/tool]]
```

- [ ] **Step 2: Fill PowerToys** (`content/LIFE/TOOLS/PowerToys.md`)

Read current file, then replace with:

```markdown
---
title: "PowerToys"
date: 2022-09-06
enableToc: true
openToc: true
tags: ["tool", "windows", "productivity"]
type: tool
agent-reviewed: 2026-04-09
---
# PowerToys

Microsoft PowerToys — a set of utilities for power users to tune and streamline their Windows experience.

## Links
### Description
Open-source collection of tools from Microsoft that enhance Windows productivity.
### Download or use
[Microsoft PowerToys on GitHub](https://github.com/microsoft/PowerToys)

## Reasoning for
I use it primarily for:
- **FancyZones** — window management and snapping to custom layouts
- **PowerToys Run** — quick launcher (Alt+Space) to find files, apps, and run commands
- **Color Picker** — quick color sampling
- **File Explorer add-ons** — Markdown and SVG preview

## Alternatives considered
- Individual tools for each feature — but PowerToys bundles everything in one package

## Resources
[PowerToys Documentation](https://learn.microsoft.com/en-us/windows/powertoys/)

---
Template: [[templates/tool]]
```

- [ ] **Step 3: Fill Blue light** (`content/LIFE/KNOWLEDGE/INFO/Blue light.md`)

Read current file, then replace with:

```markdown
---
title: "Blue light"
date: 2022-09-06
enableToc: true
openToc: true
tags: ["knowledge", "info", "health", "sleep"]
type: knowledge-note
agent-reviewed: 2026-04-09
---

# Blue light

## 🗒️ Description
Blue light is the high-energy visible (HEV) light emitted by screens, LEDs, and the sun. Excessive exposure, especially in the evening, suppresses melatonin production and disrupts the circadian rhythm, leading to poor sleep quality.

## 🧩 Key facts:
- Blue light wavelength: 380-500 nm
- Highest exposure sources: smartphones, monitors, LED lighting
- Evening exposure (2-3h before sleep) has the strongest negative effect on sleep
- [[LIFE/TOOLS/Kindle]] uses e-ink which doesn't emit blue light — better for reading before bed
- Windows Night Light and similar filters reduce blue light from screens

## 📖 Further reading
[Blue light has a dark side – Harvard Health](https://www.health.harvard.edu/staying-healthy/blue-light-has-a-dark-side)

---
Template: [[templates/knowledge_note_info]]
```

- [ ] **Step 4: Fill 12 Rules for Life** (`content/LIFE/BOOKS/12 Rules for Life.md`)

Read current file, then replace with book note using the book template structure:

```markdown
---
title: "12 Rules for Life: An Antidote to Chaos"
date: 2022-10-09
enableToc: true
openToc: true
tags: ["book", "self-development", "psychology"]
type: book-note
agent-reviewed: 2026-04-09
---
# 12 Rules for Life: An Antidote to Chaos
Date Finished: 2022
Author: Jordan B. Peterson

# 🚀 The Book in 3 Sentences
A guide to finding meaning and order in the chaos of modern life through 12 practical rules. Peterson draws on clinical psychology, philosophy, religion, and personal experience to argue that taking responsibility and pursuing what is meaningful (not what is expedient) is the path to a good life. The rules range from practical ("Stand up straight with your shoulders back") to philosophical ("Pursue what is meaningful, not what is expedient").

# 🎨 Impressions

## How I Discovered It
Jordan Peterson's lectures and interviews were popular at the time. The book seemed like a structured version of his ideas.

## Who Should Read It?
People looking for a philosophical framework for self-improvement and taking responsibility for their own lives.

# ☘️ How the Book Changed Me
It reinforced the idea that order and responsibility are prerequisites for meaning. The concept of "cleaning your room before criticizing the world" resonated with my approach to work and life. See also: [[LIFE/KNOWLEDGE/INFO/Jordan Petersons 12 rules for life]]

# ✍️ My Top 3 Quotes
1. "Compare yourself to who you were yesterday, not to who someone else is today."
2. "To stand up straight with your shoulders back is to accept the terrible responsibility of life."
3. "If you can't even clean up your own room, who the hell are you to give advice to the world?"

# 📒 Summary + Notes
See detailed rules summary: [[LIFE/KNOWLEDGE/INFO/Jordan Petersons 12 rules for life]]

# Resources
[12 Rules for Life – Wikipedia](https://en.wikipedia.org/wiki/12_Rules_for_Life)
```

- [ ] **Step 5: Fill Company of One** (`content/BUSINESS/BOOKS/Company of one.md`)

Read current file, then replace:

```markdown
---
title: "Company of One"
date: 2022-09-07
enableToc: true
openToc: true
tags: ["book", "business", "entrepreneurship"]
type: book-note
agent-reviewed: 2026-04-09
---
# Company of One
Date Finished: 2022
Author: Paul Jarvis

# 🚀 The Book in 3 Sentences
The book challenges the assumption that growth is always good for business. A "company of one" is any business that questions growth as the default path and instead focuses on becoming better, not bigger. The key is to build a sustainable business around your life, not the other way around.

# 🎨 Impressions

## How I Discovered It
Referenced in my notes about building a business that serves you, not one that enslaves you. See: [[ABOUT/I have a business and not business has me]]

## Who Should Read It?
Solopreneurs, freelancers, and anyone building a small business who feels pressure to scale.

# ☘️ How the Book Changed Me
It validated my approach to [[PROJECTS/PLSOFT/PLSoft]] — a one-person consulting practice that serves my life goals rather than demanding constant growth. Not every business needs to become a startup with 50 employees.

# ✍️ My Top 3 Quotes
1. "The key is to find ways to grow your business without growing it."
2. "A company of one resists and questions some forms of traditional growth, not because it is anti-growth, but because it seeks to find the right size for the business."
3. "Purpose is the core driver of a company of one."

# 📒 Summary + Notes
Key principles:
1. **Question growth** — bigger isn't always better. Ask: will this growth make things better?
2. **Start small, stay small (if it works)** — a profitable small business beats a scaling unprofitable one
3. **Build systems, not headcount** — automation and efficiency over hiring
4. **Focus on existing customers** — retention > acquisition
5. **Enough is enough** — define your "enough" and build toward it

# Resources
[Company of One – Paul Jarvis](https://ofone.co/)
```

- [ ] **Step 6: Commit**

```bash
git add "content/LIFE/TOOLS/Authenticator.md" "content/LIFE/TOOLS/PowerToys.md" "content/LIFE/KNOWLEDGE/INFO/Blue light.md" "content/LIFE/BOOKS/12 Rules for Life.md" "content/BUSINESS/BOOKS/Company of one.md"
git commit -m "fill: complete 5 placeholders (Authenticator, PowerToys, Blue light, 12 Rules, Company of One)"
```

---

## Task 11: Create AI/ notes (7 new notes)

**Files:**
- Create: 4 tools + 3 knowledge notes in `content/AI/`

- [ ] **Step 1: Create Claude Code** (`content/AI/TOOLS/Claude Code.md`)

Read external context files for details on Claude Code usage, then write:

```markdown
---
title: "Claude Code"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "claude", "coding-agents"]
type: tool
agent-created: true
summary: "Anthropic's CLI for AI-assisted development — primary dev environment"
---
# Claude Code

Anthropic's official CLI tool for AI-assisted software development. My primary development environment since 2025.

## Links
### Description
An interactive terminal agent that can read, write, and execute code. Works with the full Claude model family (Opus, Sonnet, Haiku).
### Download or use
Available via npm: `npm install -g @anthropic-ai/claude-code`

## Reasoning for
This is where I spend most of my development time. Instead of writing code manually, I design the environment (CLAUDE.md, skills, MCP servers, hooks) and let Claude Code do the implementation. Key capabilities:
- **Skills system** — reusable instruction packages loaded on demand ([[AI/TOOLS/Agent Skills]])
- **MCP servers** — connect to external tools and APIs
- **Hooks** — automated responses to agent events
- **Sub-agents** — parallel task execution with isolated context
- **[[AI/KNOWLEDGE/INFO/Harness Engineering]]** — the practice of configuring all the above

## How I use it
- 99% of small code fixes in [[PROJECTS/QAMERA-AI/Qamera AI]] are done by Claude Code agents
- I review agent output, not write code myself
- Combined with [[AI/KNOWLEDGE/INFO/Context Engineering]] for optimal results

## Alternatives considered
- [[AI/TOOLS/Cursor]] — IDE-based, good for visual work, but CLI gives more control
- GitHub Copilot — inline completions, but less autonomous
- Codex CLI — OpenAI's alternative

## Resources
[Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code/overview)

---
Template: [[templates/tool]]
```

- [ ] **Step 2: Create Cursor** (`content/AI/TOOLS/Cursor.md`)

```markdown
---
title: "Cursor"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "ai", "ide", "coding-agents"]
type: tool
agent-created: true
summary: "AI-powered IDE based on VS Code with built-in coding agents"
---
# Cursor

AI-powered IDE built on VS Code with integrated coding agents.

## Links
### Description
Fork of Visual Studio Code with native AI capabilities — inline completions, chat, and autonomous agent mode.
### Download or use
[cursor.com](https://cursor.com)

## Reasoning for
Good for visual development work and when I need IDE features alongside AI assistance. Used heavily in [[PROJECTS/QAMERA-AI/Qamera AI]] development.

Key features:
- Agent mode — autonomous file editing across the project
- Composer — multi-file editing with context
- Built-in model selection (Claude, GPT-4o, etc.)

## How I use it
Complementary to [[AI/TOOLS/Claude Code]] — Cursor for visual/frontend work, Claude Code for backend/architecture/batch operations.

## Alternatives considered
- [[CODE/TOOLS/Visual Studio Code]] + Copilot — more stable but less AI-native
- Windsurf — similar concept, less mature

## Resources
[Cursor Documentation](https://docs.cursor.com)

---
Template: [[templates/tool]]
```

- [ ] **Step 3: Create VAPI** (`content/AI/TOOLS/VAPI.md`)

```markdown
---
title: "VAPI"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "ai", "voicebot", "voice-agents"]
type: tool
agent-created: true
summary: "Platform for building AI voice agents and voicebots"
---
# VAPI

Platform for building AI-powered voice agents and conversational voicebots.

## Links
### Description
VAPI provides infrastructure for creating voice-based AI assistants that can handle phone calls, customer service, and conversational interfaces.
### Download or use
[vapi.ai](https://vapi.ai)

## Reasoning for
Used in consulting projects for building voicebots and phone-based AI assistants. Integrates with various LLMs and telephony providers.

Key capabilities:
- Real-time voice conversations with AI
- Phone call handling (inbound/outbound)
- Custom voice and personality
- Integration with knowledge bases (RAG)
- Webhook-based workflow triggers

## How I use it
Part of my consulting toolkit at [[PROJECTS/PLSOFT/PLSoft]] — building voice-based customer service solutions.

## Alternatives considered
- Custom Python + Twilio — more control but much more work
- Bland.ai — similar but less flexible

## Resources
[VAPI Documentation](https://docs.vapi.ai)

---
Template: [[templates/tool]]
```

- [ ] **Step 4: Create NemoClaw** (`content/AI/TOOLS/NemoClaw.md`)

```markdown
---
title: "NemoClaw"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "ai", "inference", "self-hosted"]
type: tool
agent-created: true
summary: "Self-hosted AI inference setup — OpenClaw gateway + NVIDIA Nemotron model"
---
# NemoClaw

Self-hosted AI inference environment combining OpenClaw gateway with NVIDIA Nemotron-3 Super 120B model.

## Links
### Description
Custom setup for running AI inference locally/on own infrastructure. OpenClaw provides the gateway layer, NVIDIA Nemotron provides the model.
### Download or use
Deployed on own infrastructure via Docker/k3s.

## Reasoning for
Independence from cloud AI providers for specific workloads. Used in [[PROJECTS/AGENTIC-SYSTEMS/Agentic Systems]] architecture.

Key components:
- **OpenClaw** — gateway and sandbox environment (Docker k3s)
- **NVIDIA Nemotron-3 Super 120B** — large language model for inference
- **Cloudflare Tunnel** — remote access

## Alternatives considered
- Ollama — simpler but less capable models
- Cloud-only (Claude API, OpenAI) — easier but vendor-dependent

## Resources
[NVIDIA Nemotron](https://developer.nvidia.com/nemotron)

---
Template: [[templates/tool]]
```

- [ ] **Step 5: Create Agentic Coding** (`content/AI/KNOWLEDGE/INFO/Agentic Coding.md`)

```markdown
---
title: "Agentic Coding"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "coding-agents", "paradigm"]
type: knowledge-note
agent-created: true
summary: "Paradigm shift: designing agent environments instead of writing code manually"
---

# Agentic Coding

## 🗒️ Description
A development paradigm where the developer's primary role shifts from writing code to designing environments in which AI coding agents operate effectively. Instead of typing code, you create specifications, context files, review loops, and guardrails — then agents do the implementation.

This is not "AI-assisted coding" (Copilot-style completions). It's a fundamentally different workflow where agents are first-class team members that handle the majority of code changes.

## 🧩 Key principles:
- **CTO as architect of agent work** — you design the environment (specs, context, guardrails, review loops), agents write the code
- **Specifications over instructions** — detailed specs produce better agent output than vague requests
- **[[AI/KNOWLEDGE/INFO/Context Engineering]]** — the quality of what you feed the agent determines the quality of output
- **Review loops** — every agent output gets human review. Trust but verify.
- **Git as source of truth** — all agent work goes through Git. Full transparency and auditability.
- **Skill modularity** — reusable instruction packages ([[AI/TOOLS/Agent Skills]]) that can be shared across projects

## 🔗 How I practice it
- 99% of small code fixes in [[PROJECTS/QAMERA-AI/Qamera AI]] are done by agents
- I use [[AI/TOOLS/Claude Code]] as primary environment
- I built a multi-agent architecture for two companies ([[PROJECTS/AGENTIC-SYSTEMS/Agentic Systems]])
- The shift: from "developer who writes code" to "architect who designs systems for agents to write code"

## 📖 Further reading
[[AI/KNOWLEDGE/INFO/Harness Engineering]]
[[AI/KNOWLEDGE/INFO/Context Engineering]]
[[AI/TOOLS/Claude Code]]

---
Template: [[templates/knowledge_note_info]]
```

- [ ] **Step 6: Create Context Engineering** (`content/AI/KNOWLEDGE/INFO/Context Engineering.md`)

```markdown
---
title: "Context Engineering"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "context-engineering", "llm"]
type: knowledge-note
agent-created: true
summary: "Designing optimal context for LLM agents — CLAUDE.md, MCP, skills, sub-agents"
---

# Context Engineering

## 🗒️ Description
The practice of designing and optimizing the context that gets fed to LLM agents. The quality of agent output is directly proportional to the quality of context you provide. This includes project instructions (CLAUDE.md), tool configurations (MCP servers), reusable skills, and architectural decisions about what information goes where.

## 🧩 Key components:
- **CLAUDE.md / project instructions** — persistent context about the project: conventions, architecture, workflows, safety rules
- **MCP servers** — tools that give agents access to external systems (databases, APIs, documentation)
- **Skills** — dynamically loaded instruction packages ([[AI/TOOLS/Agent Skills]]) for specific tasks
- **Sub-agents** — delegating tasks to focused agents with isolated context windows
- **Hooks** — automated responses to agent events (pre-commit checks, post-edit validation)

## 🔗 Related concepts
- **Context window management** — knowing what fits and what to prioritize. Claude Opus 4 has 200k tokens, but effectiveness degrades with context size.
- **Context rot** — the phenomenon where agent performance degrades as conversation context grows. Solution: fresh sub-agents for complex tasks.
- **[[AI/KNOWLEDGE/INFO/Harness Engineering]]** — the practical implementation of context engineering

## 📖 Further reading
[[AI/KNOWLEDGE/INFO/Agentic Coding]]
[[AI/KNOWLEDGE/INFO/LLM Knowledge Bases]]
[[AI/TOOLS/Claude Code]]

---
Template: [[templates/knowledge_note_info]]
```

- [ ] **Step 7: Create Specification-Driven Development** (`content/AI/KNOWLEDGE/INFO/Specification-Driven Development.md`)

```markdown
---
title: "Specification-Driven Development"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "sdd", "methodology"]
type: knowledge-note
agent-created: true
summary: "OpenSpec framework — writing detailed specs before AI agents implement code"
---

# Specification-Driven Development

## 🗒️ Description
A development methodology where detailed specifications are written before any code. The specs serve as the primary input for AI coding agents — the more precise and complete the spec, the better the agent output.

Also known as **SDD** (Specification-Driven Development). The **OpenSpec** framework formalizes this approach.

## 🧩 Key principles:
- **Spec first, code second** — never start coding without a spec
- **Specs are the product** — in [[AI/KNOWLEDGE/INFO/Agentic Coding]], the developer's output IS the spec, not the code
- **Executable specs** — specs should be precise enough that an agent can implement them without ambiguity
- **Iterative refinement** — write spec → agent implements → review → refine spec → repeat

## 🔗 How it fits together
1. **Brainstorm** — clarify what to build (goals, constraints, success criteria)
2. **Write spec** — detailed design document with architecture, components, data flow
3. **Write plan** — break spec into bite-sized implementation tasks
4. **Agent executes** — AI coding agent implements task by task
5. **Review** — human reviews each task output before proceeding

## 📖 Further reading
[[AI/KNOWLEDGE/INFO/Agentic Coding]]
[[AI/KNOWLEDGE/INFO/Context Engineering]]

---
Template: [[templates/knowledge_note_info]]
```

- [ ] **Step 8: Commit**

```bash
git add content/AI/
git commit -m "create: 7 new AI notes (Claude Code, Cursor, VAPI, NemoClaw, Agentic Coding, Context Engineering, SDD)"
```

---

## Task 12: Create CODE/TOOLS/ notes (5 new notes)

**Files:**
- Create: Docker, Supabase, React, Next.js, Google Cloud

- [ ] **Step 1: Create Docker** (`content/CODE/TOOLS/Docker.md`)

```markdown
---
title: "Docker"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "devops", "containers"]
type: tool
agent-created: true
summary: "Container platform for packaging and deploying applications"
---
# Docker

Container platform for packaging, distributing, and running applications in isolated environments.

## Links
### Description
Docker enables consistent development and deployment environments through containerization.
### Download or use
[docker.com](https://www.docker.com/products/docker-desktop/)

## Reasoning for
Essential infrastructure tool. Used for:
- Local development environments
- Deploying [[PROJECTS/QAMERA-AI/Qamera AI]] services
- Running [[AI/TOOLS/NemoClaw]] (k3s-based setup)
- Isolating services and dependencies

## Alternatives considered
- Podman — Docker-compatible, daemonless. Good alternative but Docker has broader ecosystem.

## Resources
[Docker Documentation](https://docs.docker.com)

---
Template: [[templates/tool]]
```

- [ ] **Step 2: Create Supabase** (`content/CODE/TOOLS/Supabase.md`)

```markdown
---
title: "Supabase"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "database", "backend", "baas"]
type: tool
agent-created: true
summary: "Open-source Firebase alternative — Postgres database, auth, storage, realtime"
---
# Supabase

Open-source Backend-as-a-Service built on PostgreSQL.

## Links
### Description
Supabase provides a Postgres database, authentication, file storage, edge functions, and realtime subscriptions out of the box.
### Download or use
[supabase.com](https://supabase.com)

## Reasoning for
Database and backend for [[PROJECTS/QAMERA-AI/Qamera AI]]. Key advantages:
- PostgreSQL underneath — real database, not a proprietary format
- Row-level security — fine-grained access control
- Auth built-in — social logins, magic links, JWT
- Realtime subscriptions — live data updates
- Works well with [[CODE/TOOLS/Next.js]] via Makerkit

## Alternatives considered
- Firebase — proprietary, vendor lock-in
- [[BUSINESS/TOOLS/Airtable]] — good for prototyping but not for production SaaS
- PlanetScale — MySQL-based, less Postgres ecosystem

## Resources
[Supabase Documentation](https://supabase.com/docs)

---
Template: [[templates/tool]]
```

- [ ] **Step 3: Create React** (`content/CODE/TOOLS/React.md`)

```markdown
---
title: "React"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "frontend", "javascript", "framework"]
type: tool
agent-created: true
summary: "Frontend UI library — currently learning for Qamera AI frontend"
---
# React

JavaScript library for building user interfaces, developed by Meta.

## Links
### Description
Component-based UI library. The most popular frontend framework.
### Download or use
[react.dev](https://react.dev)

## Reasoning for
Frontend technology for [[PROJECTS/QAMERA-AI/Qamera AI]] (via [[CODE/TOOLS/Next.js]] + Makerkit). Currently learning — my background is primarily backend (.NET, Python).

Key concepts I work with:
- Components and hooks
- State management
- Server vs. client components (Next.js App Router)
- Tailwind CSS for styling

## Alternatives considered
- Vue.js / Nuxt — considered, but Next.js/React has larger ecosystem and more AI agent support
- Svelte — elegant but smaller ecosystem

## Resources
[React Documentation](https://react.dev/learn)

---
Template: [[templates/tool]]
```

- [ ] **Step 4: Create Next.js** (`content/CODE/TOOLS/Next.js.md`)

```markdown
---
title: "Next.js"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "frontend", "fullstack", "framework"]
type: tool
agent-created: true
summary: "React meta-framework — SSR, routing, API routes. Used for Qamera AI frontend."
---
# Next.js

Full-stack React meta-framework by Vercel. Provides server-side rendering, file-based routing, and API routes.

## Links
### Description
The most popular React framework for production. App Router (v13+) introduces server components and streaming.
### Download or use
[nextjs.org](https://nextjs.org)

## Reasoning for
Frontend framework for [[PROJECTS/QAMERA-AI/Qamera AI]], used via Makerkit (SaaS boilerplate built on Next.js + [[CODE/TOOLS/Supabase]]).

Key features I use:
- App Router — server/client component split
- API routes — lightweight backend endpoints
- Middleware — auth, redirects
- Integration with [[CODE/TOOLS/Supabase]] for database and auth

## Alternatives considered
- Nuxt (Vue) — considered via [[CODE/TOOLS/Nucleify]], but switched to Next.js for ecosystem
- Remix — good DX but smaller community

## Resources
[Next.js Documentation](https://nextjs.org/docs)

---
Template: [[templates/tool]]
```

- [ ] **Step 5: Create Google Cloud** (`content/CODE/TOOLS/Google Cloud.md`)

```markdown
---
title: "Google Cloud"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "cloud", "infrastructure"]
type: tool
agent-created: true
summary: "Cloud infrastructure for Qamera AI — compute, storage, AI services"
---
# Google Cloud

Google's cloud computing platform — infrastructure for [[PROJECTS/QAMERA-AI/Qamera AI]].

## Links
### Description
Full cloud platform with compute, storage, networking, AI/ML services, and managed databases.
### Download or use
[cloud.google.com](https://cloud.google.com)

## Reasoning for
Main infrastructure provider for Qamera AI. Key services:
- Compute Engine — VM instances for AI workloads
- Cloud Storage — media file storage
- BigQuery — analytics and reporting
- Cloud Run — containerized services

## Alternatives considered
- Azure — familiar from .NET background, but Google Cloud better for AI workloads
- AWS — largest ecosystem, but team already set up on GCP

## Resources
[Google Cloud Documentation](https://cloud.google.com/docs)

---
Template: [[templates/tool]]
```

- [ ] **Step 6: Commit**

```bash
git add content/CODE/TOOLS/Docker.md content/CODE/TOOLS/Supabase.md content/CODE/TOOLS/React.md "content/CODE/TOOLS/Next.js.md" "content/CODE/TOOLS/Google Cloud.md"
git commit -m "create: 5 new CODE/TOOLS notes (Docker, Supabase, React, Next.js, Google Cloud)"
```

---

## Task 13: Create BUSINESS/ notes (5 new notes)

**Files:**
- Create: 3 knowledge notes + 2 tools

- [ ] **Step 1: Create Product-Market Fit** (`content/BUSINESS/KNOWLEDGE/INFO/Product-Market Fit.md`)

```markdown
---
title: "Product-Market Fit"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "business", "pmf", "startup"]
type: knowledge-note
agent-created: true
summary: "When your product satisfies strong market demand — the key milestone for startups"
---

# Product-Market Fit

## 🗒️ Description
Product-Market Fit (PMF) is the degree to which a product satisfies strong market demand. It's the most critical milestone for any startup — without it, scaling is premature and dangerous.

Marc Andreessen: "Product-market fit means being in a good market with a product that can satisfy that market."

## 🧩 How to measure:
- **Sean Ellis test** — ask customers: "How disappointed would you be if [product] didn't exist?" If 40%+ say "very disappointed," you likely have PMF.
- **Customer retention** — do customers come back without being pushed?
- **Organic growth** — are new customers coming from word of mouth?
- **Sales require no customization** — if every sale needs custom work, you don't have a product yet

## 🔗 My experience with PMF
Building [[PROJECTS/QAMERA-AI/Qamera AI]] — currently in pre-PMF validation phase:
- Need 10-12 active paying customers from outside founder network
- Current challenge: most sales come from personal connections
- Pre-PMF priority: direct sales (60%) > marketing (30%) > processes (10%)

## 📖 Further reading
[[BUSINESS/BOOKS/Company of one]] — different perspective: not every business needs VC-scale PMF
[[ABOUT/Principles]]

---
Template: [[templates/knowledge_note_info]]
```

- [ ] **Step 2: Create Build in Public** (`content/BUSINESS/KNOWLEDGE/INFO/Build in Public.md`)

```markdown
---
title: "Build in Public"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "business", "branding", "linkedin"]
type: knowledge-note
agent-created: true
summary: "Strategy of sharing the building process transparently — for trust, audience, and accountability"
---

# Build in Public

## 🗒️ Description
A content and business strategy where you share the real process of building your product or company — including challenges, mistakes, numbers, and lessons learned. The goal is authenticity, trust, and audience building.

## 🧩 Key principles:
- **Show the work, not just the result** — process posts resonate more than announcements
- **Be honest about failures** — mistakes and pivots build more trust than success stories
- **Data over generalities** — share real numbers (costs, metrics, timelines)
- **Practitioner perspective** — write from doing, not from theory
- **Consistency** — regular posts, not bursts of activity

## 🔗 How I practice it
- Regular LinkedIn posts about building [[PROJECTS/QAMERA-AI/Qamera AI]] and [[PROJECTS/AGENTIC-SYSTEMS/Agentic Systems]]
- Content pillars: agentic coding backstage, cost/ROI comparisons, CTO workflow shifts
- See: [[BUSINESS/KNOWLEDGE/INFO/LinkedIn Strategy]]

## 📖 Further reading
[[BUSINESS/KNOWLEDGE/INFO/LinkedIn Strategy]]
[[ABOUT/My career path]]

---
Template: [[templates/knowledge_note_info]]
```

- [ ] **Step 3: Create LinkedIn Strategy** (`content/BUSINESS/KNOWLEDGE/INFO/LinkedIn Strategy.md`)

```markdown
---
title: "LinkedIn Strategy"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "business", "linkedin", "branding", "content"]
type: knowledge-note
agent-created: true
summary: "Data-driven LinkedIn publishing strategy — formats, timing, content pillars"
---

# LinkedIn Strategy

## 🗒️ Description
My approach to LinkedIn content, based on data from 31 posts analyzed (Feb-Apr 2026). Target audience: founder/operator-focused IT market. Geographic focus: Poland.

## 🧩 Key findings:

### Format
- **Default: ugcPost** (original content) — avg 1,056 impressions, 4.13 saves/post, 1.83% ER
- Share format weak on saves — use only for quick reach

### Timing
- **Best day: Tuesday** (2.93% ER, 29.7 avg interactions)
- Secondary: Friday, Thursday
- Post at 6:00 AM (morning commute)
- One post max per day (batching cannibalizes)
- Target: ~15 posts/month

### What works
- Technical insights with data (model comparisons, context window findings)
- CTO / [[AI/KNOWLEDGE/INFO/Agentic Coding]] perspective (operational, not theoretical)
- Architectural patterns from real products ([[PROJECTS/QAMERA-AI/Qamera AI]] examples)
- [[BUSINESS/KNOWLEDGE/INFO/Build in Public]] content

### What doesn't work
- Reposts (virtually no growth effect)
- Lifestyle/non-tech content
- Rhetorical questions or fluff

## 🔗 Three content pillars
1. **Illusion** — AI quality parity with fashion photoshoots (Qamera)
2. **Economy** — cost/time benefits (98% cheaper, 25x faster)
3. **Backstage** — building in public, challenges, learnings

## 📖 Further reading
[[BUSINESS/KNOWLEDGE/INFO/Build in Public]]

---
Template: [[templates/knowledge_note_info]]
```

- [ ] **Step 4: Create n8n** (`content/BUSINESS/TOOLS/n8n.md`)

```markdown
---
title: "n8n"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "automation", "integration", "workflow"]
type: tool
agent-created: true
summary: "Self-hosted workflow automation platform — open-source alternative to Make/Zapier"
---
# n8n

Self-hosted, open-source workflow automation platform.

## Links
### Description
Visual workflow builder with 400+ integrations. Can be self-hosted for full data control.
### Download or use
[n8n.io](https://n8n.io)

## Reasoning for
Part of the automation toolbox alongside [[BUSINESS/TOOLS/Make]]. Key advantage over Make: self-hosting option for clients with data sensitivity requirements.

Used in:
- AI workflow orchestration (LLM chains, RAG pipelines)
- Client projects at [[PROJECTS/PLSOFT/PLSoft]]
- Internal automation at [[PROJECTS/QAMERA-AI/Qamera AI]]

## Alternatives considered
- [[BUSINESS/TOOLS/Make]] — easier UI, but cloud-only
- [[BUSINESS/TOOLS/Zapier]] — simplest but most expensive, limited for complex flows

## Resources
[n8n Documentation](https://docs.n8n.io)

---
Template: [[templates/tool]]
```

- [ ] **Step 5: Create 1Password** (`content/BUSINESS/TOOLS/1Password.md`)

```markdown
---
title: "1Password"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["tool", "security", "passwords"]
type: tool
agent-created: true
summary: "Password manager and secrets vault — replaces Dashlane"
---
# 1Password

Password manager and secrets management tool.

## Links
### Description
Stores and auto-fills passwords, credit cards, secure notes. Also provides developer tools for managing secrets (SSH keys, API tokens, environment variables).
### Download or use
[1password.com](https://1password.com)

## Reasoning for
Replaced Dashlane. Key advantages:
- **Developer tools** — CLI, SSH agent, secrets automation
- **Family sharing** — shared vaults for family members
- **1Password CLI** — integrate secrets into scripts and CI/CD
- **Watchtower** — breach monitoring and weak password alerts
- Cross-platform (Windows, Mac, iOS, Android, browser extensions)

Used alongside [[LIFE/TOOLS/Authenticator]] for 2FA.

## Alternatives considered
- Dashlane — used previously, switched for better developer tools
- Bitwarden — open-source, good but less polished UX

## Resources
[1Password Documentation](https://developer.1password.com/docs)

---
Template: [[templates/tool]]
```

- [ ] **Step 6: Commit**

```bash
git add content/BUSINESS/KNOWLEDGE/INFO/ content/BUSINESS/TOOLS/n8n.md "content/BUSINESS/TOOLS/1Password.md"
git commit -m "create: 5 new BUSINESS notes (PMF, Build in Public, LinkedIn Strategy, n8n, 1Password)"
```

---

## Task 14: Create PROJECTS/ notes (6 new notes)

**Files:**
- Create: one note per project folder

- [ ] **Step 1: Create Qamera AI** (`content/PROJECTS/QAMERA-AI/Qamera AI.md`)

Read external context `C:\PROJEKTY\agentic-ai-system\context\` for product details. Write a public-facing note (no confidential financials):

```markdown
---
title: "Qamera AI"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["project", "ai", "saas", "product", "qamera"]
type: basic-note
agent-created: true
summary: "AI-powered virtual photo studio for e-commerce — B2B SaaS by 200IQ Labs"
---
# Qamera AI

## 🗒️ Description
AI-powered virtual photo studio for e-commerce. Users select, compare, and approve AI-generated product photography and video — zero prompting required.

Built by **200IQ Labs PSA** where I'm CTO & Co-Founder (30% equity).

## 🧩 Key features:
- Packshot creation with automatic background removal
- AI custom models (virtual mannequins)
- AI scenery and backgrounds
- Photo sessions (batches of 10 per config)
- Video generation (HD, 5s clips)
- Reel editing (auto-montages)
- Style library (11+ pre-built visual styles)
- Teams with role-based access and credits system

## Target market
Primary niche: swimwear & lingerie brands (high sizing complexity, ad censorship requiring constant fresh variants). Secondary: broader fashion e-commerce.

## Technology
[[CODE/TOOLS/Next.js]] + [[CODE/TOOLS/Supabase]] (via Makerkit), [[CODE/TOOLS/Google Cloud]], AI models (multiple providers).

99% of code changes are made by AI coding agents ([[AI/KNOWLEDGE/INFO/Agentic Coding]]). I design the environment, agents implement.

## 🔗 Links
- [[ABOUT/About]] — my role
- [[PROJECTS/PLSOFT/PLSoft]] — my consulting practice (separate entity)
- [[PROJECTS/AGENTIC-SYSTEMS/Agentic Systems]] — agent architecture used in development
```

- [ ] **Step 2: Create PLSoft** (`content/PROJECTS/PLSOFT/PLSoft.md`)

```markdown
---
title: "PLSoft"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["project", "consulting", "plsoft"]
type: basic-note
agent-created: true
summary: "Technology consulting practice — AI integration, process automation, architecture"
---
# PLSoft

## 🗒️ Description
My solo consulting practice (Jednoosobowa Dzialalnosc Gospodarcza), operating since 2008. Technology advisory focused on AI integration, process automation, and system architecture.

## 🧩 Services:
- Process audits & bottleneck analysis
- Solution design & technology selection
- End-to-end implementation (AI, automation, integrations)
- Post-deployment technical support
- Workshops and training

## Approach
- **Code-first** — no-code only when client lacks technical team
- **Technology agnostic** — tool selection based on problem fit, not hype
- **Iterative** — weeks for first effects, not months
- **Transparent partnership** — client controls the solution, no vendor lock-in

## Notable projects
- Invoice automation (manufacturing) — 95% error reduction
- Creative system for event agency — 50% acceleration
- System integration (SQL Server + Airtable + BigQuery)
- Contextual chatbot — 70%+ automation rate
- Voice agents via [[AI/TOOLS/VAPI]]

## 🔗 Links
- [[ABOUT/About]] — my profile
- [[PROJECTS/QAMERA-AI/Qamera AI]] — my product company (separate entity)
```

- [ ] **Step 3: Create Brain** (`content/PROJECTS/BRAIN/Brain.md`)

```markdown
---
title: "Brain"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["project", "digital-garden", "obsidian", "quartz"]
type: basic-note
agent-created: true
summary: "This digital garden — Obsidian vault + Quartz 4, published at brain.lipowczan.pl"
---
# Brain

## 🗒️ Description
My public digital garden — a personal knowledge base published at [brain.lipowczan.pl](https://brain.lipowczan.pl). Built with [[LIFE/KNOWLEDGE/INFO/Obsidian]] as the editor and [[LIFE/KNOWLEDGE/INFO/Quartz]] as the static site generator.

## 🧩 Stack:
- **Editor:** Obsidian
- **SSG:** Quartz 4
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions (deploy on push to `v4` branch)
- **Maintenance:** AI agent via [[AI/TOOLS/Claude Code]] — ingests sources, writes articles, maintains indexes

## Concept
Based on [[LIFE/KNOWLEDGE/INFO/Zettelkasten]] and [[LIFE/KNOWLEDGE/INFO/Digital Garden]] ideas. Notes are interconnected with wikilinks, organized by topic, and evolve over time.

See also: [[AI/KNOWLEDGE/INFO/LLM Knowledge Bases]] — methodology of AI-maintained knowledge bases.

## 🔗 Links
- [[LIFE/BOOKS/Building a Second Brain]]
- [[LIFE/BOOKS/How to take smart notes]]
```

- [ ] **Step 4: Create Agentic Systems** (`content/PROJECTS/AGENTIC-SYSTEMS/Agentic Systems.md`)

```markdown
---
title: "Agentic Systems"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["project", "ai", "agents", "architecture"]
type: basic-note
agent-created: true
summary: "Multi-agent architecture for two companies — shared skills, separate contexts"
---
# Agentic Systems

## 🗒️ Description
A project to build and maintain replicable AI agent environments across two companies (200IQ Labs and PLSoft). The architecture separates what's shared (skills, tools) from what's private (context per company).

## 🧩 Architecture:
Three layers:
1. **Skills** — reusable instruction packages shared across companies (CFO, Legal, Tax Advisor, Marketing, Product Manager, Business Consultant, LinkedIn Coach)
2. **Context** — company-specific data and instructions (separate per entity)
3. **Tools** — shared execution layer ([[AI/TOOLS/Claude Code]], [[AI/TOOLS/NemoClaw]])

## Design principles:
- **Git as source of truth** — all configurations versioned
- **Skill modularity** — skills are independent, composable packages ([[AI/TOOLS/Agent Skills]])
- **Local execution** — agents run on own infrastructure
- **Transparency** — full audit trail through Git history
- **Zero vendor lock-in** — skills are plain markdown, tools are swappable

## 🔗 Links
- [[AI/KNOWLEDGE/INFO/Agentic Coding]]
- [[AI/KNOWLEDGE/INFO/Context Engineering]]
- [[PROJECTS/QAMERA-AI/Qamera AI]] — primary product using this architecture
```

- [ ] **Step 5: Create Value Builders** (`content/PROJECTS/VALUE-BUILDERS/Value Builders.md`)

```markdown
---
title: "Value Builders"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["project", "training", "education"]
type: basic-note
agent-created: true
summary: "Course where I serve as a trainer — teaching AI and technology to builders"
---
# Value Builders

## 🗒️ Description
A course/program where I participate as a **trainer**. Teaching AI integration, agentic coding patterns, and technology strategy to founders and builders.

## My role
Trainer — sharing practical knowledge from building [[PROJECTS/QAMERA-AI/Qamera AI]], [[PROJECTS/AGENTIC-SYSTEMS/Agentic Systems]], and consulting at [[PROJECTS/PLSOFT/PLSoft]].

## 🔗 Links
- [[PROJECTS/VALUE-BUILDERS-TRIBE/Value Builders Tribe]] — the community arm
```

- [ ] **Step 6: Create Value Builders Tribe** (`content/PROJECTS/VALUE-BUILDERS-TRIBE/Value Builders Tribe.md`)

```markdown
---
title: "Value Builders Tribe"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["project", "community", "mentoring"]
type: basic-note
agent-created: true
summary: "Tech community where I'm Tech Lead/Mentor — organizing regular meetups"
---
# Value Builders Tribe

## 🗒️ Description
A technology-focused community where I serve as **Tech Lead / Mentor**. I organize and lead regular meetings, share technical insights, and mentor members.

## My role
- Tech Lead / Mentor
- Organizing cyclical meetings
- Sharing practical experience from [[PROJECTS/QAMERA-AI/Qamera AI]] and [[PROJECTS/AGENTIC-SYSTEMS/Agentic Systems]]

## 🔗 Links
- [[PROJECTS/VALUE-BUILDERS/Value Builders]] — the course arm
- [[BUSINESS/KNOWLEDGE/INFO/Build in Public]] — related content strategy
```

- [ ] **Step 7: Commit**

```bash
git add content/PROJECTS/QAMERA-AI/ content/PROJECTS/PLSOFT/ content/PROJECTS/BRAIN/ content/PROJECTS/AGENTIC-SYSTEMS/ content/PROJECTS/VALUE-BUILDERS/ content/PROJECTS/VALUE-BUILDERS-TRIBE/
git commit -m "create: 6 new project notes (Qamera AI, PLSoft, Brain, Agentic Systems, Value Builders, VBT)"
```

---

## Task 15: Create CRYPTO/ and LIFE/ notes (3 new notes)

**Files:**
- Create: 2 crypto notes + 1 life tool

- [ ] **Step 1: Create Bitcoin** (`content/CRYPTO/KNOWLEDGE/INFO/Bitcoin.md`)

Research current BTC state (use web search or external context), then write:

```markdown
---
title: "Bitcoin"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "crypto", "bitcoin", "investment"]
type: knowledge-note
agent-created: true
summary: "Bitcoin — the original cryptocurrency, decentralized digital money"
---

# Bitcoin

## 🗒️ Description
Bitcoin (BTC) is the first and largest cryptocurrency — a decentralized digital currency that operates without a central authority. Created in 2009 by Satoshi Nakamoto. Based on proof-of-work consensus and a fixed supply of 21 million coins.

## 🧩 Why I hold BTC:
- **Sound money thesis** — fixed supply, deflationary by design
- **Digital gold** — store of value in a digital world
- **Decentralization** — no single point of failure or control
- **Passive investment** — buy and hold, no active trading needed

## 🔗 Current state (2026)
- Bitcoin ETFs approved and trading (BlackRock, Fidelity, etc.)
- Institutional adoption accelerating
- Lightning Network improving payment use case
- Post-halving cycle (April 2024 halving)

## 📖 Further reading
[[CRYPTO/NOTES/What mistakes I made on the crypto market in 2021-2022]]
[[CRYPTO/KNOWLEDGE/INFO/CEX]]

---
Template: [[templates/knowledge_note_info]]
```

- [ ] **Step 2: Create Stan rynku krypto 2026** (`content/CRYPTO/KNOWLEDGE/INFO/Stan rynku krypto 2026.md`)

```markdown
---
title: "Stan rynku krypto 2026"
date: 2026-04-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "crypto", "market"]
type: knowledge-note
agent-created: true
summary: "Overview of crypto market state in 2026 — what changed since 2022 bear market"
---

# Stan rynku krypto 2026

## 🗒️ Description
Przegląd rynku kryptowalut w 2026 — co się zmieniło od bear marketu 2022.

## 🧩 Kluczowe zmiany od 2022:
- **Bitcoin ETF** — zatwierdzony w USA (styczeń 2024), handel na głównych giełdach. BlackRock, Fidelity, i inni tradycyjni gracze weszli na rynek.
- **Bitcoin halving** — kwiecień 2024, nagroda za blok spadła do 3.125 BTC
- **Regulacje** — MiCA w Europie, rosnąca jasność regulacyjna w USA
- **DeFi maturation** — mniej spekulacji, więcej real-world use cases
- **AI + Crypto** — rosnące intersection (AI agents managing wallets, on-chain AI)
- **NFT hype minął** — rynek NFT znacząco się skurczył, zostały utility-focused projekty
- **Luna/FTX aftermath** — regulacje zaostrzone, centralised exchanges pod większym nadzorem

## 🔗 Moje podejście
Inwestuję pasywnie, głównie w [[CRYPTO/KNOWLEDGE/INFO/Bitcoin]]. Nie day-tradin, nie altcoiny. Focus na AI i SaaS, nie na crypto.

Lekcje z przeszłości: [[CRYPTO/NOTES/What mistakes I made on the crypto market in 2021-2022]]

## 📖 Further reading
[[CRYPTO/KNOWLEDGE/INFO/CEX]]
[[CRYPTO/NOTES/Crypto Exchanges]]

---
Template: [[templates/knowledge_note_info]]
```

- [ ] **Step 3: Create Microsoft Edge** (`content/LIFE/TOOLS/Edge.md`)

Read current placeholder first, then replace:

```markdown
---
title: "Microsoft Edge"
date: 2022-09-06
enableToc: true
openToc: true
tags: ["tool", "browser"]
type: tool
agent-reviewed: 2026-04-09
---
# Microsoft Edge

Primary web browser.

## Links
### Description
Chromium-based browser from Microsoft with built-in AI features (Copilot), vertical tabs, and Collections.
### Download or use
Pre-installed on Windows. [microsoft.com/edge](https://www.microsoft.com/edge)

## Reasoning for
Default browser on Windows. Key features I use:
- Vertical tabs — better for many open tabs
- Collections — save and organize research
- Built-in password manager (supplementary to [[BUSINESS/TOOLS/1Password]])
- Profile separation — work vs. personal

## Alternatives considered
- Chrome — virtually identical engine, but Edge has better Windows integration
- Firefox — good for privacy, but worse performance on some sites

---
Template: [[templates/tool]]
```

- [ ] **Step 4: Commit**

```bash
git add content/CRYPTO/KNOWLEDGE/INFO/ "content/LIFE/TOOLS/Edge.md"
git commit -m "create: 3 new notes (Bitcoin, Stan rynku krypto 2026, Microsoft Edge)"
```

---

## Task 16: Fix wikilinks across vault

**Files:**
- Modify: multiple files with broken wikilinks after migration

- [ ] **Step 1: Find all broken wikilinks**

Search for wikilinks pointing to old paths:

```bash
cd "C:\Users\pawel\source\repos\plipowczan\brain"
grep -r "NOCODE/" content/ --include="*.md" -l
grep -r "WEB3/" content/ --include="*.md" -l
grep -r "GENERAL/" content/ --include="*.md" -l
grep -r "HARDWARE/" content/ --include="*.md" -l
grep -r "INVESTMENTS/" content/ --include="*.md" -l
grep -r "PROJECTS/SHAREFUND/" content/ --include="*.md" -l
grep -r "PROJECTS/AH/" content/ --include="*.md" -l
grep -r "PROJECTS/SECONDBRAIN/" content/ --include="*.md" -l
grep -r "CODE/KNOWLEDGE/INFO/Harness" content/ --include="*.md" -l
grep -r "CODE/TOOLS/Agent Skills" content/ --include="*.md" -l
grep -r "CODE/TOOLS/Autoresearch" content/ --include="*.md" -l
```

- [ ] **Step 2: Update all found wikilinks**

For each file found, update wikilinks to new paths:
- `NOCODE/TOOLS/Make` → `BUSINESS/TOOLS/Make`
- `NOCODE/TOOLS/Airtable` → `BUSINESS/TOOLS/Airtable`
- `NOCODE/TOOLS/Zapier` → `BUSINESS/TOOLS/Zapier`
- `NOCODE/TOOLS/Notion` → `BUSINESS/TOOLS/Notion`
- `NOCODE/TOOLS/Excalidraw` → `BUSINESS/TOOLS/Excalidraw`
- `NOCODE/TOOLS/Sendgrid` → `BUSINESS/TOOLS/Sendgrid`
- `WEB3/` → `CRYPTO/NOTES/` or `CRYPTO/KNOWLEDGE/INFO/` as appropriate
- `GENERAL/Reading list` → `LIFE/NOTES/Reading list`
- `GENERAL/What tools I use` → `ABOUT/What tools I use`
- `HARDWARE/Kindle` → `LIFE/TOOLS/Kindle`
- `CODE/KNOWLEDGE/INFO/Harness Engineering` → `AI/KNOWLEDGE/INFO/Harness Engineering`
- `CODE/KNOWLEDGE/INFO/LLM Knowledge Bases` → `AI/KNOWLEDGE/INFO/LLM Knowledge Bases`
- `CODE/TOOLS/Agent Skills` → `AI/TOOLS/Agent Skills`
- `CODE/TOOLS/Autoresearch` → `AI/TOOLS/Autoresearch`
- `PROJECTS/SHAREFUND/ShareFund` → `PROJECTS/ARCHIVE/SHAREFUND/ShareFund`
- `PROJECTS/AH/PULS` → `PROJECTS/ARCHIVE/AH/PULS`

Also: remove wikilinks to deleted notes (Dashlane, Blinkist, etc.) from any files that reference them.

Note: Obsidian uses shortest-path wikilink resolution. If the note name is unique, a bare `[[Make]]` will resolve correctly regardless of path. Only update links that use full paths.

- [ ] **Step 3: Also update template references in migrated files**

Some NOCODE howto files may reference `knowledge_note_how_to` template — these are fine, template paths haven't changed.

- [ ] **Step 4: Commit**

```bash
git add -A content/
git commit -m "fix: update wikilinks to match new folder structure"
```

---

## Task 17: Rebuild indexes

**Files:**
- Rewrite: `content/_indexes/vault-map.md`, `content/_indexes/catalog.md`, `content/_indexes/graph.md`

- [ ] **Step 1: Full reindex**

Follow the INDEX workflow from CLAUDE.md:
1. Scan all `.md` files (excluding `_raw/`, `_indexes/`, `_outputs/`, `templates/`, `.obsidian/`)
2. For each: extract frontmatter, extract wikilinks, generate one-line summary
3. Build all three index files from scratch

- [ ] **Step 2: Verify index accuracy**

Spot-check:
- vault-map.md: folder counts match actual file counts
- catalog.md: new notes (AI/TOOLS/Claude Code, etc.) are listed
- graph.md: wikilinks between new notes are captured

- [ ] **Step 3: Commit**

```bash
git add content/_indexes/
git commit -m "reindex: full rebuild after KB overhaul"
```

---

## Task 18: Verify Quartz build

- [ ] **Step 1: Run build**

```bash
cd "C:\Users\pawel\source\repos\plipowczan\brain"
npx quartz build
```

Expected: build completes without errors.

- [ ] **Step 2: If build fails, fix issues**

Common issues:
- Broken wikilinks → fix in Task 16
- Frontmatter errors → fix invalid YAML
- File encoding issues → re-save as UTF-8

- [ ] **Step 3: Final commit if any fixes were needed**

```bash
git add -A
git commit -m "fix: resolve quartz build issues after KB overhaul"
```

---

## Summary

| Task | Description | Files |
|------|------------|-------|
| 1 | Delete 25 notes | -25 files |
| 2 | Create folder structure | new directories |
| 3 | Migrate files | ~22 moves |
| 4 | Copy profile photo | 1 file |
| 5 | Update About.md | 1 file |
| 6 | Update What tools I use | 1 file |
| 7 | Update My career path | 1 file |
| 8 | Update 7 existing notes | 7 files |
| 9 | Fill 5 role placeholders | 5 files |
| 10 | Fill 5 other placeholders | 5 files |
| 11 | Create 7 AI/ notes | 7 files |
| 12 | Create 5 CODE/TOOLS/ notes | 5 files |
| 13 | Create 5 BUSINESS/ notes | 5 files |
| 14 | Create 6 PROJECTS/ notes | 6 files |
| 15 | Create 3 CRYPTO + LIFE notes | 3 files |
| 16 | Fix wikilinks | multiple files |
| 17 | Rebuild indexes | 3 files |
| 18 | Verify build | verification |
