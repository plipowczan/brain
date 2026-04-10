# Blog Portfolio Ingestion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ingest 22 Polish blog posts from portfolio into Obsidian KB — 19 new wiki notes + 6 merges into existing notes, plus CLAUDE.md update and full reindex.

**Architecture:** Task 1 preps infrastructure (CLAUDE.md, directories). Tasks 2-5 create new notes in 4 parallel agent batches. Task 6 does 6 sequential merges. Task 7 rebuilds indexes. Task 8 verifies the build.

**Tech Stack:** Obsidian Markdown, YAML frontmatter, Wikilinks, Quartz 4 SSG

**Spec:** `docs/superpowers/specs/2026-04-10-blog-ingestion-design.md`

---

## Reference: Writing Rules (for all content tasks)

Every agent writing content MUST follow these rules:

1. **Read the source blog post fully** before writing
2. **Read `content/STYL_PISANIA_ANALIZA.md`** for style reference
3. **Wiki-condensed style:** All facts, frameworks, data, quotes preserved. Narrative padding (blog intros, transitions, repetitions, promotional language) removed. Notes must be complete enough to reconstruct an article.
4. **Mix Polish and English** — technical terms in English, explanations in Polish or English naturally
5. **Emoji in headings:** 🚀 main message, 🗒️ description, 📒 summary, 🔗 links/resources, 🧩 features, 📖 further reading
6. **Wikilinks:** Use `[[Note Name]]` shortest-path format to link to related KB notes
7. **Bullet points** over paragraphs. Hierarchical headings.
8. **First person** where appropriate (personal experience, opinions)
9. **No blog links** — notes stand alone, no reference to portfolio site
10. **Frontmatter:** Always include all required fields (title, date, enableToc, openToc, tags, type, agent-created, summary)

---

### Task 1: Infrastructure Setup

**Files:**
- Modify: `content/../CLAUDE.md` (add repos-as-tools pattern)
- Create: directories `content/AI/NOTES/` and `content/BUSINESS/NOTES/`

- [ ] **Step 1: Create missing directories**

```bash
mkdir -p "C:/Users/pawel/source/repos/plipowczan/brain/content/AI/NOTES"
mkdir -p "C:/Users/pawel/source/repos/plipowczan/brain/content/BUSINESS/NOTES"
```

- [ ] **Step 2: Update CLAUDE.md — add repos-as-tools pattern**

In `CLAUDE.md`, find the line:

```
Sub-patterns within topics: `BOOKS/`, `TOOLS/`, `KNOWLEDGE/INFO/`, `KNOWLEDGE/HOWTO/`, `NOTES/`, `HABITS/`
```

Replace with:

```
Sub-patterns within topics: `BOOKS/`, `TOOLS/`, `KNOWLEDGE/INFO/`, `KNOWLEDGE/HOWTO/`, `NOTES/`, `HABITS/`

GitHub/open-source repositories → individual `tool` notes in the topic folder matching their domain (e.g., `AI/TOOLS/`, `CODE/TOOLS/`). Each repo gets its own note, not merged into a parent tool note.
```

- [ ] **Step 3: Add AI to directory table**

In `CLAUDE.md`, in the Directory Structure table, add a row for AI:

```
| `/content/AI/` | AI tools, knowledge, agents, trends | Yes |
```

Add it between the first row and ABOUT.

- [ ] **Step 4: Commit**

```bash
git add CLAUDE.md content/AI/NOTES/.gitkeep content/BUSINESS/NOTES/.gitkeep
git commit -m "chore: add AI directory, BUSINESS/NOTES, repos-as-tools pattern to CLAUDE.md"
```

Note: If `.gitkeep` isn't needed (git tracks directories via files), skip gitkeep and the directories will be created when the first note is written.

---

### Task 2: New Notes — Batch A (BUSINESS + NOCODE, 5 notes)

**Source blog path prefix:** `C:/Users/pawel/source/repos/plipowczan/portfolio/src/content/blog/`
**These 5 notes are independent and can be written without referencing each other.**

- [ ] **Step 1: Read all 5 source blog posts**

Read these files fully:
1. `no-code-lead-generation.md`
2. `el-padre-automatyzacja-ofert-ai.md`
3. `zapier-vs-make-vs-n8n-wybor-narzedzia.md`
4. `dane-jako-paliwo-biznesu.md`
5. `kazda-firma-dziala-nieoptymalnie.md`

Also read `content/STYL_PISANIA_ANALIZA.md` for style reference.

- [ ] **Step 2: Write `content/NOCODE/KNOWLEDGE/HOWTO/Lead Generation Pipeline.md`**

Source: `no-code-lead-generation.md`

```yaml
---
title: "Lead Generation Pipeline"
date: 2025-11-05
enableToc: true
openToc: true
tags: ["knowledge", "howto", "nocode", "lead-generation", "automation"]
type: knowledge-note
agent-created: true
summary: "Automated lead gen system using n8n, Snov.io, Apollo, Airtable — from manual 2-3h/10 leads to automated pipeline"
---
```

**Sections to create (using knowledge_note_how_to template):**
- `🗒️ Task:` — What problem this solves (manual lead gen taking 2-3h per 10-15 leads)
- `🛠️ Prerequisites:` — Tools needed (n8n, Snov.io, Apollo, The Company API, Airtable)
- `📝 Architecture:` — 4-stage pipeline (company search → contact finder → email verifier → data enrichment), database structure with 4 tables
- `💰 ROI:` — Cost comparison ($140/mo automation vs $6000/mo manual, 81% savings)
- `📝 Implementation:` — 3-4 week timeline, key steps
- `📒 Podsumowanie` — Key takeaways
- `🔗 Zasoby` — Tool links

**Wikilinks to include:** `[[n8n]]`, `[[Airtable]]`, `[[Make]]`

- [ ] **Step 3: Write `content/BUSINESS/NOTES/El Padre Case Study.md`**

Source: `el-padre-automatyzacja-ofert-ai.md`

```yaml
---
title: "El Padre Case Study"
date: 2025-11-16
enableToc: true
openToc: true
tags: ["basic", "case-study", "ai", "automation", "events"]
type: basic-note
agent-created: true
summary: "Event agency AI offer automation — 10-50% faster, 75-120h/mo saved, ROI at 2-3 FTE equivalent"
---
```

**Sections to create:**
- `🚀` — Problem statement (16h per offer: 6-10 creative + 4-6 production)
- `🗒️ Solution:` — AION platform, AI assistants (briefing, ideas, financial planning, offer generation)
- `📊 Results:` — Concrete metrics (10-50% speedup, 10-15% productivity increase, 25-30 people supported, 75-120h/mo saved)
- `📝 Implementation:` — 6-week timeline (data integration → AI tools → workflow & training)
- `📒 Podsumowanie`
- `🔗 Zasoby`

**Wikilinks:** `[[Make]]`, `[[Airtable]]`, `[[Agentic Systems]]`

- [ ] **Step 4: Write `content/NOCODE/KNOWLEDGE/INFO/Automation Tool Selection.md`**

Source: `zapier-vs-make-vs-n8n-wybor-narzedzia.md`

```yaml
---
title: "Automation Tool Selection"
date: 2025-11-17
enableToc: true
openToc: true
tags: ["knowledge", "info", "nocode", "automation", "comparison"]
type: knowledge-note
agent-created: true
summary: "Decision framework for Zapier vs Make vs n8n based on team skills, scale, budget, security"
---
```

**Sections to create:**
- `🗒️ Description:` — Why choosing the right tool matters (100+ client implementations experience)
- `🧩 Tool Comparison:` — For each tool: integrations count, pricing model, learning curve, strengths, weaknesses
  - **Zapier:** 6000+ integrations, non-technical friendly, task-based pricing (scaling issue)
  - **Make:** 1800+ integrations, visual canvas, operation-based (10x cheaper), better logic
  - **n8n:** Open-source, self-hosted, unlimited operations, steepest learning curve, full code access
- `📊 Decision Matrix:` — team skills vs required control vs budget vs security
- `💰 Pricing Comparison:` — Task counting peculiarities (Zapier: steps × runs, Make: per-step operations)
- `📒 Podsumowanie`
- `🔗 Zasoby`

**Wikilinks:** `[[Zapier]]`, `[[Make]]`, `[[n8n]]`

- [ ] **Step 5: Write `content/BUSINESS/KNOWLEDGE/INFO/Data Maturity Model.md`**

Source: `dane-jako-paliwo-biznesu.md`

```yaml
---
title: "Data Maturity Model"
date: 2025-12-21
enableToc: true
openToc: true
tags: ["knowledge", "info", "business", "data", "ai"]
type: knowledge-note
agent-created: true
summary: "5-level data maturity model: Ad-hoc → Consolidation → Standardization → Optimization → Innovation"
---
```

**Sections to create:**
- `🗒️ Description:` — The data paradox (companies sit on data mines, can't extract value; 180 ZB in 2025)
- `🧩 5-Level Maturity Model:` — Detailed description of each level (Ad-hoc → Consolidation → Standardization → Optimization → Innovation)
- `🔧 Data Pipeline:` — Capture → Integrate → Clean → Store → Analyze → Act
- `⚠️ Common Challenges:` — Data silos, quality/consistency, difficult access, lack of data culture
- `📊 Case Study:` — 22Ventures/Automation House transformation (15 Excels → single Airtable system, 3-4h/week reports eliminated)
- `🤖 AI + Data:` — RAG for data conversations, automatic cleaning, pattern finding
- `📒 Podsumowanie`
- `🔗 Zasoby`

**Wikilinks:** `[[Airtable]]`, `[[Claude Code]]`, `[[n8n]]`, `[[Make]]`

- [ ] **Step 6: Write `content/BUSINESS/KNOWLEDGE/INFO/Process Mapping.md`**

Source: `kazda-firma-dziala-nieoptymalnie.md`

```yaml
---
title: "Process Mapping"
date: 2025-12-01
enableToc: true
openToc: true
tags: ["knowledge", "info", "business", "processes", "optimization"]
type: knowledge-note
agent-created: true
summary: "Process mapping methodology — 4 elements (Action, Actor, Tool, Mode), optimization via delete → simplify → automate"
---
```

**Sections to create:**
- `🗒️ Description:` — 400+ mapped processes at Automation House = all suboptimal
- `🧩 Process Mapping Elements:` — 4 required elements: Action, Actor, Tool, Mode (manual/automatic)
- `🔍 Finding Optimization Points:` — Error frequency, duration, manual data rewriting, team impact
- `📐 Methodology:` — Extended flowchart vs SIPOC vs BPMN
- `⚡ Elon's Principle:` — Delete → Simplify → Automate (not automate first)
- `📊 Evidence:` — Healthcare research: 20-45% patient wait time reduction
- `📒 Podsumowanie`
- `🔗 Zasoby`

**Wikilinks:** `[[Make]]`, `[[n8n]]`, `[[Agentic Systems]]`, `[[El Padre Case Study]]`

- [ ] **Step 7: Verify all 5 files exist and have correct frontmatter**

```bash
for f in \
  "content/NOCODE/KNOWLEDGE/HOWTO/Lead Generation Pipeline.md" \
  "content/BUSINESS/NOTES/El Padre Case Study.md" \
  "content/NOCODE/KNOWLEDGE/INFO/Automation Tool Selection.md" \
  "content/BUSINESS/KNOWLEDGE/INFO/Data Maturity Model.md" \
  "content/BUSINESS/KNOWLEDGE/INFO/Process Mapping.md"; do
  echo "=== $f ===" && head -15 "$f"
done
```

- [ ] **Step 8: Commit**

```bash
git add \
  "content/NOCODE/KNOWLEDGE/HOWTO/Lead Generation Pipeline.md" \
  "content/BUSINESS/NOTES/El Padre Case Study.md" \
  "content/NOCODE/KNOWLEDGE/INFO/Automation Tool Selection.md" \
  "content/BUSINESS/KNOWLEDGE/INFO/Data Maturity Model.md" \
  "content/BUSINESS/KNOWLEDGE/INFO/Process Mapping.md"
git commit -m "create: 5 new notes from blog (Lead Gen, El Padre, Tool Selection, Data Maturity, Process Mapping)"
```

---

### Task 3: New Notes — Batch B (AI knowledge, 4 notes)

**Source blog path prefix:** `C:/Users/pawel/source/repos/plipowczan/portfolio/src/content/blog/`

- [ ] **Step 1: Read all 4 source blog posts**

Read these files fully:
1. `hackathon-hacknation-analiza-doswiadczen.md`
2. `openclaw-bezpieczenstwo-agentow-ai.md`
3. `trendy-ai-2026-od-eksperymentow-do-operacjonalizacji.md`
4. `skills-2-0-multi-agent-system-zarzadzanie-firma.md`

Also read `content/STYL_PISANIA_ANALIZA.md` for style reference.

- [ ] **Step 2: Write `content/AI/NOTES/Hackathon Hacknation.md`**

Source: `hackathon-hacknation-analiza-doswiadczen.md`

```yaml
---
title: "Hackathon Hacknation"
date: 2025-12-12
enableToc: true
openToc: true
tags: ["basic", "notes", "hackathon", "ai", "govtech"]
type: basic-note
agent-created: true
summary: "24h hackathon building budget system with AI — lessons on validation, AI limitations, team dynamics"
---
```

**Sections to create:**
- `🚀` — Context (Hacknation hackathon, 24h, team of non-programmers building GovTech solution)
- `🗒️ Problem:` — Manual budget exchange (Excel files up & down hierarchy, manual consolidation)
- `🛠️ Stack:` — React, TypeScript, Supabase, HiGen for video
- `💰 Token Usage:` — Antigravity 1 week limit in 15h, Claude Code 18M tokens
- `⚠️ What Went Wrong:` — Validation failure: no domain expert feedback = "space missed" solution
- `🤖 AI Limitations Observed:` — Hallucinations (nonexistent libraries), needs constant steering, debugging requires manual code reading
- `☘️ Key Lesson:` — Walidacja > Technologia
- `📒 Podsumowanie`

**Wikilinks:** `[[Claude Code]]`, `[[Agentic Coding]]`

- [ ] **Step 3: Write `content/AI/KNOWLEDGE/INFO/AI Agent Security.md`**

Source: `openclaw-bezpieczenstwo-agentow-ai.md`

```yaml
---
title: "AI Agent Security"
date: 2026-02-09
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "security", "agents"]
type: knowledge-note
agent-created: true
summary: "Security analysis of autonomous AI agents — OpenClaw case study, CVEs, supply chain risks, safety practices"
---
```

**Sections to create:**
- `🗒️ Description:` — Why AI agent security matters as agents get more autonomous
- `🧩 OpenClaw Case Study:` — What it is (LocalAgent + Messenger + Skills + Memory + Cron), adoption metrics (150k stars, 28k exposed instances, 12.8k RCE-vulnerable)
- `🔓 Vulnerabilities Found:`
  - CVE-2026-25253: WebSocket hijacking → RCE
  - Reverse proxy bypass → default credentials
  - Plaintext credentials in Markdown/JSON
  - Prompt injection via email
  - Malicious skills (supply chain)
- `🤖 Moltbook Theater:` — 1.6M registered agents, ~17k human owners, orchestrated ecosystem
- `📊 Comparison Table:` — OpenClaw vs Claude Dispatch vs Perplexity Computer vs DIY
- `🛡️ Safety Practices:` — Isolated environment, budget limits, minimal permissions, skill verification, cost monitoring
- `📒 Podsumowanie`
- `🔗 Zasoby`

**Wikilinks:** `[[NemoClaw]]`, `[[Agentic Systems]]`, `[[Claude Code]]`

- [ ] **Step 4: Write `content/AI/KNOWLEDGE/INFO/AI Trends 2026.md`**

Source: `trendy-ai-2026-od-eksperymentow-do-operacjonalizacji.md`

```yaml
---
title: "AI Trends 2026"
date: 2026-01-01
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "trends", "strategy"]
type: knowledge-note
agent-created: true
summary: "2026 AI shift from experimentation to operationalization — agentic AI, reasoning models, EU AI Act, domain-specific models"
---
```

**Sections to create:**
- `🗒️ Description:` — Shift from chatbots/experiments to operationalized agentic systems
- `🤖 Agentic AI:` — From Q&A to autonomous action (IDC: 50% of AI spend by 2029, 80% enterprise apps by 2026)
- `🧠 Reasoning Models:` — System 2 thinking, inference-time compute, 93% accuracy on math/logic
- `🏭 Domain-Specific Models (DSLM):` — 50% by 2026, Med-PaLM 95%, FinGPT, JurisGPT
- `🖥️ Infrastructure:` — Training → inference shift (2/3 compute), hybrid cloud, AI PCs (55% of new), TinyML
- `🤖 Physical AI:` — Tesla Optimus, Figure AI+BMW, Agility Robotics, Software-Defined Factory
- `⚖️ EU AI Act:` — August 2, 2026 deadline, risk management, penalties (35M€ or 7% global revenue)
- `🔒 Cybersecurity:` — Deepfakes, AI Security Platforms, Digital Provenance (C2PA), post-quantum crypto
- `📊 No-code/Low-code:` — 70-75% enterprise apps by 2026
- `💰 ROI Focus:` — End of "AI tourism", 25% budget shift, outcome-based pricing
- `👤 Job Market:` — New roles (AI Product Owner, Risk Officer, Orchestrator)
- `🇵🇱 Poland:` — Cyberfabryka AI (5B€), mObywatel, e-Doręczenia
- `📒 Podsumowanie`
- `🔗 Zasoby`

**Wikilinks:** `[[Agentic Coding]]`, `[[Agentic Systems]]`, `[[NemoClaw]]`

- [ ] **Step 5: Write `content/AI/KNOWLEDGE/INFO/Skills 2.0 Testing.md`**

Source: `skills-2-0-multi-agent-system-zarzadzanie-firma.md`

```yaml
---
title: "Skills 2.0 Testing"
date: 2026-03-08
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "skills", "testing", "agents"]
type: knowledge-note
agent-created: true
summary: "Evolution from manual skills to tested, benchmarked, auto-triggered skill system with 4-agent eval pipeline"
---
```

**Sections to create:**
- `🗒️ Description:` — The problem (scattered Claude Projects, no context sharing, no versioning, no tests)
- `📈 Skills 1.0 → 2.0 Evolution:` — Table showing changes across 4 dimensions:
  - Testing: Manual → Automated evals + A/B benchmarking
  - Validation: Unvalidated → Deterministic validated context
  - Triggering: Manual → Automated tuning
  - Taxonomy: Flat → Capability uplift vs Encoded preference
- `🤖 4-Agent Eval Pipeline:` — Executor, Grader, Comparator, Analyzer (what each does)
- `📊 Skill Types:` — Capability uplift (depreciates with model upgrades) vs Encoded preference (stable, process-specific)
- `🛠️ Skill-Creator Plugin:` — Interview workflow → Draft SKILL.md → Evals → Benchmarks → Package
- `📊 Deployment:` — 8 agents across 2 companies, 3-repo architecture (shared + company-specific), Git submodules
- `📒 Podsumowanie`
- `🔗 Zasoby`

**Wikilinks:** `[[Agentic Systems]]`, `[[Claude Code]]`, `[[Agent Skills]]`, `[[Context Engineering]]`

- [ ] **Step 6: Verify all 4 files exist and have correct frontmatter**

```bash
for f in \
  "content/AI/NOTES/Hackathon Hacknation.md" \
  "content/AI/KNOWLEDGE/INFO/AI Agent Security.md" \
  "content/AI/KNOWLEDGE/INFO/AI Trends 2026.md" \
  "content/AI/KNOWLEDGE/INFO/Skills 2.0 Testing.md"; do
  echo "=== $f ===" && head -15 "$f"
done
```

- [ ] **Step 7: Commit**

```bash
git add \
  "content/AI/NOTES/Hackathon Hacknation.md" \
  "content/AI/KNOWLEDGE/INFO/AI Agent Security.md" \
  "content/AI/KNOWLEDGE/INFO/AI Trends 2026.md" \
  "content/AI/KNOWLEDGE/INFO/Skills 2.0 Testing.md"
git commit -m "create: 4 new AI notes from blog (Hackathon, Agent Security, Trends 2026, Skills 2.0)"
```

---

### Task 4: New Notes — Batch C (CODE, 5 notes)

**Source blog path prefix:** `C:/Users/pawel/source/repos/plipowczan/portfolio/src/content/blog/`

- [ ] **Step 1: Read all 5 source blog posts**

Read these files fully:
1. `chatboty-ai-od-koncepcji-do-wdrozenia.md`
2. `animacje-apple-ai-cursor.md`
3. `opsx-workflow-strukturyzowana-praca-z-ai.md`
4. `remotion-explainer-videos-ai.md`
5. `vibe-coding-przewodnik.md`

Also read `content/STYL_PISANIA_ANALIZA.md` for style reference.

- [ ] **Step 2: Write `content/CODE/KNOWLEDGE/INFO/AI Chatbots Architecture.md`**

Source: `chatboty-ai-od-koncepcji-do-wdrozenia.md`

```yaml
---
title: "AI Chatbots Architecture"
date: 2025-11-01
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "chatbots", "rag"]
type: knowledge-note
agent-created: true
summary: "LLM chatbot architecture — RAG, function calling, voicebots via VAPI, implementation costs and metrics"
---
```

**Sections to create:**
- `🗒️ Description:` — LLM chatbots vs traditional rule-based: natural language understanding, contextual responses, conversation memory
- `🧩 RAG (Retrieval Augmented Generation):` — Pipeline: chunking → embedding → vector DB → semantic search. Explain each step.
- `⚡ Function Calling:` — How LLMs execute real actions (booking, search, database queries)
- `🎙️ Voicebots:` — VAPI integration for voice agents
- `💰 Costs:` — $150-200/mo vs $2500-3500/mo human support
- `📊 Case Study:` — automation.house chatbot: 40% engagement increase, 25% more consultations booked
- `📒 Podsumowanie`
- `🔗 Zasoby`

**Wikilinks:** `[[VAPI]]`, `[[n8n]]`, `[[Agentic Systems]]`

Technologies to mention: VAPI, n8n, OpenAI, Claude 3.5 Sonnet, Qdrant

- [ ] **Step 3: Write `content/CODE/KNOWLEDGE/HOWTO/Apple-style Animations with AI.md`**

Source: `animacje-apple-ai-cursor.md`

```yaml
---
title: "Apple-style Animations with AI"
date: 2026-01-26
enableToc: true
openToc: true
tags: ["knowledge", "howto", "ai", "animations", "web-design", "vibe-coding"]
type: knowledge-note
agent-created: true
summary: "Creating scroll animations à la Apple using Google Whisk → Flow → Framer Motion pipeline"
---
```

**Sections to create:**
- `🗒️ Task:` — Create smooth scroll animations resembling Apple product pages without motion design expertise
- `🛠️ Prerequisites:` — Google Whisk, Google Flow, Online Convert, Cursor, Netlify
- `📝 Pipeline:` — Step-by-step: Concept research → 2-frame generation (Whisk) → AI transition creation (Flow) → MP4 to JPG sequence → Cursor for integration
- `⚙️ .cursorrules Configuration:` — Semantic HTML, 8px grid, reduced-motion support, CSS variables, Framer Motion
- `🧩 Technical Stack:` — Framer Motion for scroll triggering, progressive image loading
- `🚀 Deployment:` — Netlify drag-and-drop or GitHub integration
- `📒 Podsumowanie`
- `🔗 Zasoby`

**Wikilinks:** `[[Cursor]]`, `[[Vibe Coding]]`

- [ ] **Step 4: Write `content/CODE/TOOLS/OPSX Workflow.md`**

Source: `opsx-workflow-strukturyzowana-praca-z-ai.md`

```yaml
---
title: "OPSX Workflow"
date: 2026-02-05
enableToc: true
openToc: true
tags: ["tool", "ai", "workflow", "development"]
type: tool
agent-created: true
summary: "Structured spec-driven AI development workflow — replaces reactive prompting with persistent artifacts and DAG-based state"
---
```

**Sections to create (tool template):**
- Brief description — Spec-driven development with persistent artifacts in repo
- `🔗 Links:` — GitHub repo link
- `🗒️ Reasoning for:` — Problem: context window rot, chaotic sessions, knowledge loss. Solution: structured workflow with persistent files.
- `🧩 Commands:` — List all OPSX commands with what they do:
  - `/opsx:explore` — Brainstorming
  - `/opsx:new` — Create change
  - `/opsx:continue` — Iterative artifact creation
  - `/opsx:ff` — Fast-forward planning artifacts
  - `/opsx:apply` — Implementation
  - `/opsx:sync` — Merge to main
  - `/opsx:archive` — Complete change
- `📐 Architecture:` — DAG-based artifacts with dependencies, state machine (BLOCKED → READY → DONE), filesystem-driven
- `⚙️ Customization:` — YAML schemata for custom workflows, context injection via config
- `Alternatives considered:` — Compare to raw Claude Code, Cursor workflows
- `📖 Resources`

**Wikilinks:** `[[Claude Code]]`, `[[Agentic Coding]]`, `[[Context Engineering]]`

- [ ] **Step 5: Write `content/CODE/TOOLS/Remotion.md`**

Source: `remotion-explainer-videos-ai.md`

```yaml
---
title: "Remotion"
date: 2026-01-31
enableToc: true
openToc: true
tags: ["tool", "ai", "video", "react"]
type: tool
agent-created: true
summary: "React-based video production — code-driven explainers, dynamic data, AI-assisted via Claude Code"
---
```

**Sections to create (tool template):**
- Brief description — Create videos with React code instead of After Effects
- `🔗 Links:` — Remotion website, docs
- `🗒️ Reasoning for:` — Code-based = programmable, dynamic data integration, responsive. Replaces weeks of AE work.
- `🧩 Workflow:` — Prompt → React code → Studio preview → Render to MP4
- `📝 Prompt Structure:` — Scenes with timecode → visual style → brand assets (hex colors) → format
- `🛠️ Tools:` — Remotion Studio (live preview), `npm run build` (render), Remotion Lambda (cloud rendering)
- `📊 Use Cases:` — Explainers, product demos, title sequences, social media (9:16), feature announcements
- `💰 Cost:` — Open-source free, rendering time 2-5 min per 45s
- `Alternatives considered:` — Canva (templates), CapCut (editing), After Effects (control)
- `📖 Resources`

**Wikilinks:** `[[Claude Code]]`

- [ ] **Step 6: Write `content/CODE/KNOWLEDGE/HOWTO/Vibe Coding.md`**

Source: `vibe-coding-przewodnik.md`

```yaml
---
title: "Vibe Coding"
date: 2025-12-24
enableToc: true
openToc: true
tags: ["knowledge", "howto", "ai", "ui", "design", "vibe-coding"]
type: knowledge-note
agent-created: true
summary: "Creating UI with AI by describing vibe/impression — 3 pillars, design tokens, prompt templates"
---
```

**Sections to create:**
- `🗒️ Task:` — Create professional UI without design knowledge by describing impressions/vibes to AI
- `🛠️ Prerequisites:` — Vite + React + Tailwind + component library (shadcn/ui)
- `📝 Three Pillars:` — Good starter kit + Good prompts (reference images) + Good context (design system)
- `🎨 Design Brief Process:` — Style/aesthetic → Target audience → Key features
- `📊 Style Reference Table:` — Aesthetic, palette, typography, spacing, weight variants
- `📐 Layout Structures:` — Hero full-screen, sidebar, card grid, split screen (with when to use each)
- `🎨 Color Themes:` — Hex code tables for dark, light, neon variants
- `📝 Prompt Template:` — Structure: design context + technical requirements + visual details
- `⚙️ Design Tokens:` — JSON-based single source of truth (colors, spacing, typography, border-radius)
- `🛠️ Tools:` — Cursor (best - sees whole project), shadcn/ui, v0.dev (quick prototypes)
- `⚠️ Pitfalls:` — Generic AI design (no context), too-large components, no design system
- `📒 Podsumowanie`
- `🔗 Zasoby`

**Wikilinks:** `[[Cursor]]`, `[[Claude Code]]`

- [ ] **Step 7: Verify all 5 files exist**

```bash
for f in \
  "content/CODE/KNOWLEDGE/INFO/AI Chatbots Architecture.md" \
  "content/CODE/KNOWLEDGE/HOWTO/Apple-style Animations with AI.md" \
  "content/CODE/TOOLS/OPSX Workflow.md" \
  "content/CODE/TOOLS/Remotion.md" \
  "content/CODE/KNOWLEDGE/HOWTO/Vibe Coding.md"; do
  echo "=== $f ===" && head -15 "$f"
done
```

- [ ] **Step 8: Commit**

```bash
git add \
  "content/CODE/KNOWLEDGE/INFO/AI Chatbots Architecture.md" \
  "content/CODE/KNOWLEDGE/HOWTO/Apple-style Animations with AI.md" \
  "content/CODE/TOOLS/OPSX Workflow.md" \
  "content/CODE/TOOLS/Remotion.md" \
  "content/CODE/KNOWLEDGE/HOWTO/Vibe Coding.md"
git commit -m "create: 5 new CODE notes from blog (Chatbots, Animations, OPSX, Remotion, Vibe Coding)"
```

---

### Task 5: New Notes — Batch D (LIFE + Tool repos, 5 notes)

**Source blog path prefix:** `C:/Users/pawel/source/repos/plipowczan/portfolio/src/content/blog/`

- [ ] **Step 1: Read source blog posts**

Read these files fully:
1. `second-brain-obsidian-claude-code-skills.md`
2. `5-repozytoriow-github-claude-code.md` (for repos #16-19)

Also read `content/STYL_PISANIA_ANALIZA.md` for style reference.

- [ ] **Step 2: Write `content/LIFE/KNOWLEDGE/INFO/Second Brain Design.md`**

Source: `second-brain-obsidian-claude-code-skills.md`

```yaml
---
title: "Second Brain Design"
date: 2026-01-26
enableToc: true
openToc: true
tags: ["knowledge", "info", "pkm", "obsidian", "ai"]
type: knowledge-note
agent-created: true
summary: "PKM system design: Obsidian vault + Claude Code + Skills — Capture, Organize, Retrieve with AI automation"
---
```

**Sections to create:**
- `🗒️ Description:` — What a second brain is: external knowledge system. Three core functions: Capture, Organize, Retrieve.
- `🧩 Architecture:` — Obsidian (local Markdown files) + Claude Code (AI processing) + Skills (automation). No vendor lock-in.
- `📐 PARA Method:` — Projects → Areas → Resources → Archive (folder structure)
- `🤖 Skills for PKM:` — List each with what it does:
  - Research Engine (web → structured notes)
  - Document Generator (notes → polished docs)
  - Daily Review (automated summary + insights)
  - Content Creator (notes → content drafts)
- `🔧 Integrations:` — Scripts connecting to ClickUp, Gmail, Google Calendar
- `📊 Why Scripts over MCP:` — Speed, control, single location, reduced context overhead
- `📝 Progressive Disclosure:` — Description → SKILL.md → references (layers of detail)
- `📒 Podsumowanie`
- `🔗 Zasoby`

**Wikilinks:** `[[Obsidian]]`, `[[Claude Code]]`, `[[Agent Skills]]`, `[[Context Engineering]]`

Note: This is distinct from the Obsidian tool notes. This covers PKM system design as a concept.

- [ ] **Step 3: Write `content/AI/TOOLS/UI UX Pro Max.md`**

Source: `5-repozytoriow-github-claude-code.md` (section about UI/UX Pro Max)

```yaml
---
title: "UI UX Pro Max"
date: 2026-03-31
enableToc: true
openToc: true
tags: ["tool", "ai", "design", "claude-code", "skills"]
type: tool
agent-created: true
summary: "Claude Code design system skill — adapts UI/UX guidance per project type (portfolio, SaaS, e-commerce)"
---
```

**Sections to create (tool template):**
- Brief description — Design system intelligence for Claude Code
- `🔗 Links:` — GitHub repo link (extract from blog post)
- `🗒️ Reasoning for:` — Provides design knowledge to AI agents, adapts per project type
- `🧩 Features:` — What it does: design system selection, typography, color palettes, responsive patterns
- `Alternatives considered:` — Manual design systems, v0.dev
- `📖 Resources`

**Wikilinks:** `[[Claude Code]]`, `[[Vibe Coding]]`, `[[Cursor]]`

Note: Blog has brief info only. Write what's available, mark with `#todo/complete` sections that need full repo ingestion.

- [ ] **Step 4: Write `content/CODE/TOOLS/OpenSpec.md`**

Source: `5-repozytoriow-github-claude-code.md` (section about OpenSpec)

```yaml
---
title: "OpenSpec"
date: 2026-03-31
enableToc: true
openToc: true
tags: ["tool", "ai", "development", "specs", "claude-code"]
type: tool
agent-created: true
summary: "Spec-driven development framework — explore → specs → plan → implementation with version-controlled artifacts"
---
```

**Sections to create (tool template):**
- Brief description — Framework for structured AI-assisted development
- `🔗 Links:` — GitHub repo link
- `🗒️ Reasoning for:` — Structured approach to AI coding, persistent artifacts, avoids context rot
- `🧩 Workflow:` — explore → specs → plan → implementation
- `Alternatives considered:` — Raw prompting, ad-hoc workflows
- `📖 Resources`

**Wikilinks:** `[[Claude Code]]`, `[[OPSX Workflow]]`, `[[Agentic Coding]]`

Note: Brief info from blog. Mark `#todo/complete` for sections needing full repo ingestion.

- [ ] **Step 5: Write `content/CODE/TOOLS/Excalidraw.md`**

Source: `5-repozytoriow-github-claude-code.md` (section about Excalidraw)

```yaml
---
title: "Excalidraw"
date: 2026-03-31
enableToc: true
openToc: true
tags: ["tool", "ai", "diagrams", "claude-code"]
type: tool
agent-created: true
summary: "Diagram generation skill for Claude Code — integrates with Obsidian and VS Code for process mapping"
---
```

**Sections to create (tool template):**
- Brief description — AI-powered diagram generation
- `🔗 Links:` — GitHub repo link
- `🗒️ Reasoning for:` — Quick diagram/flowchart generation from agent context
- `🧩 Features:` — Integrates with Obsidian, VS Code, process mapping
- `Alternatives considered:` — Mermaid, draw.io, manual diagrams
- `📖 Resources`

**Wikilinks:** `[[Claude Code]]`, `[[Obsidian]]`, `[[Process Mapping]]`

Note: Brief info from blog. Mark `#todo/complete` for sections needing full repo ingestion.

- [ ] **Step 6: Write `content/AI/TOOLS/Awesome Claude Code.md`**

Source: `5-repozytoriow-github-claude-code.md` (section about Awesome Claude Code)

```yaml
---
title: "Awesome Claude Code"
date: 2026-03-31
enableToc: true
openToc: true
tags: ["tool", "ai", "claude-code", "resources"]
type: tool
agent-created: true
summary: "Curated list of Claude Code resources — skills, MCP servers, workflows, prompts, integrations"
---
```

**Sections to create (tool template):**
- Brief description — Community-curated resource list for Claude Code ecosystem
- `🔗 Links:` — GitHub repo link
- `🗒️ Reasoning for:` — Central hub for discovering skills, MCP servers, workflows, prompts
- `🧩 Categories:` — Skills, MCP servers, workflows, prompts (list what's available)
- `📖 Resources`

**Wikilinks:** `[[Claude Code]]`, `[[Agent Skills]]`, `[[Context Engineering]]`

Note: Brief info from blog. Mark `#todo/complete` for sections needing full repo ingestion.

- [ ] **Step 7: Verify all 5 files exist**

```bash
for f in \
  "content/LIFE/KNOWLEDGE/INFO/Second Brain Design.md" \
  "content/AI/TOOLS/UI UX Pro Max.md" \
  "content/CODE/TOOLS/OpenSpec.md" \
  "content/CODE/TOOLS/Excalidraw.md" \
  "content/AI/TOOLS/Awesome Claude Code.md"; do
  echo "=== $f ===" && head -15 "$f"
done
```

- [ ] **Step 8: Commit**

```bash
git add \
  "content/LIFE/KNOWLEDGE/INFO/Second Brain Design.md" \
  "content/AI/TOOLS/UI UX Pro Max.md" \
  "content/CODE/TOOLS/OpenSpec.md" \
  "content/CODE/TOOLS/Excalidraw.md" \
  "content/AI/TOOLS/Awesome Claude Code.md"
git commit -m "create: 5 new notes from blog (Second Brain, UI/UX Pro Max, OpenSpec, Excalidraw, Awesome CC)"
```

---

### Task 6: Merge into Existing Notes (6 merges, sequential)

**IMPORTANT:** For each merge:
1. Read the existing note fully (paths below)
2. Read the source blog post fully
3. Identify what is NEW in the blog post that is NOT already in the existing note
4. Append new info at the end of the relevant existing section (or add new sections)
5. NEVER modify or remove existing content
6. Add `agent-reviewed: 2026-04-10` to frontmatter

**Source blog path prefix:** `C:/Users/pawel/source/repos/plipowczan/portfolio/src/content/blog/`

- [ ] **Step 1: Read all 6 source blog posts and all 6 target notes**

Source posts to read:
1. `automatyzacja-email-frontdesk-ai.md`
2. `airtable-vs-excel-migracja.md`
3. `kodowanie-w-2025-ai-portfolio.md`
4. `5-technik-pracy-z-claude-code.md`
5. `15-cursor-hacks-produktywnosc-ai.md`
6. `srodowisko-agentowe-ai-dwie-firmy.md`

Target notes to read:
1. `content/BUSINESS/TOOLS/Make.md`
2. `content/BUSINESS/TOOLS/Airtable.md`
3. `content/AI/KNOWLEDGE/INFO/Agentic Coding.md`
4. `content/AI/TOOLS/Claude Code.md`
5. `content/AI/TOOLS/Cursor.md`
6. `content/PROJECTS/AGENTIC-SYSTEMS/Agentic Systems.md`

- [ ] **Step 2: Merge into `content/BUSINESS/TOOLS/Make.md`**

Source: `automatyzacja-email-frontdesk-ai.md`

**What to add** (only if NOT already present):
- In `🗒️ Reasoning for` section, append a new sub-section:

```markdown
### Email Automation Pattern
Make sprawdza się jako orchestrator email automation:
- Automatic categorization (inquiry, complaints, technical, invoicing, spam)
- Response generation via OpenAI GPT-4
- Integration: Gmail/Outlook API → Make → OpenAI → Airtable (storage)
- ROI: 20-30h/mo saved, 90% response time reduction, 24/7 availability
- Wdrożenie: 1-2 weeks
```

**Frontmatter:** Add `agent-reviewed: 2026-04-10`

- [ ] **Step 3: Merge into `content/BUSINESS/TOOLS/Airtable.md`**

Source: `airtable-vs-excel-migracja.md`

**What to add** (only if NOT already present):
- After the `🧩 Current Use` section, add a new section:

```markdown
## 📊 Airtable vs Excel
### Kiedy migrować z Excel:
- **Versioning chaos** — Excel nie śledzi zmian, brak historii
- **Data relationships** — Excel nie obsługuje relacji między tabelami natywnie
- **Real-time collaboration** — Excel wymaga workaroundów
- **Visualization** — ograniczone widoki vs Airtable (grid, calendar, kanban, gallery, form)

### 5-Step Migration:
1. Prepare data (clean, normalize)
2. Import to Airtable
3. Structure (field types, linked records)
4. Create views (per team/use case)
5. Set up automations

### Gdzie Excel wygrywa:
- Advanced finance calculations
- Offline work
- Complex pivot tables
```

**Frontmatter:** Add `agent-reviewed: 2026-04-10`

- [ ] **Step 4: Merge into `content/AI/KNOWLEDGE/INFO/Agentic Coding.md`**

Source: `kodowanie-w-2025-ai-portfolio.md`

**What to add** (only if NOT already present):
- In `🧩 Key principles:` section, append:

```markdown
- **AI as "junior developer on steroids"** — requires oversight, produces code that needs review, but dramatically speeds up implementation
- **Cost reality:** Building a full portfolio site: 60M tokens = ~$325 API equivalent, $60 with PRO+ Cursor subscription
- **Code review automation** — agents catch logical errors before commit, but human review still essential
- **Testing discipline** — Playwright E2E for every change, AI generates tests but human verifies coverage
```

**Frontmatter:** Add `agent-reviewed: 2026-04-10`

- [ ] **Step 5: Merge into `content/AI/TOOLS/Claude Code.md`**

Source: `5-technik-pracy-z-claude-code.md`

**What to add** (only if NOT already present):
- After `## How I use it` section, add:

```markdown
## 🧩 Practical Techniques
Kluczowe techniki pracy z Claude Code:
- **PRD-first development** — Product Requirement Document jako "guiding star" dla agentów. Zamiast reaktywnego promptingu, zaczynamy od specyfikacji.
- **Systematic prompting** — transformacja od chaotycznego "fix this" do strukturalnego workflow (context → spec → implement → review)
- **Context window management** — świadome zarządzanie tym, co agent "widzi". Mniej = lepiej. Progressive disclosure.
- **Skill composition** — łączenie wielu skills w jednym workflow zamiast jednorazowych promptów
- **Review loops** — każdy output agenta przechodzi review zanim zostanie zacommitowany
```

**Frontmatter:** Add `agent-reviewed: 2026-04-10`

- [ ] **Step 6: Merge into `content/AI/TOOLS/Cursor.md`**

Source: `15-cursor-hacks-produktywnosc-ai.md`

**What to add** (only if NOT already present):
- After `## How I use it` section, add:

```markdown
## 🧩 Productivity Tips
Kluczowe techniki zwiększające produktywność w Cursor:

### Context Management
- Context window to najcenniejszy zasób — nie marnuj go na niepotrzebne pliki
- Używaj `.cursorrules` do osadzania konwencji projektu (semantic HTML, grid 8px, CSS variables)
- Reference images jako input do vibe coding

### Workflow
- Worktrees dla izolacji feature'ów — każda gałąź w osobnym katalogu
- Agent mode do autonomicznych zmian w wielu plikach jednocześnie
- Composer do wieloplikowych edycji z pełnym kontekstem

### Keyboard Shortcuts
- Warto opanować podstawowe skróty zanim sięgnie się po zaawansowane techniki
- Większość użytkowników wykorzystuje tylko 20% możliwości narzędzia
```

**Frontmatter:** Add `agent-reviewed: 2026-04-10`

- [ ] **Step 7: Merge into `content/PROJECTS/AGENTIC-SYSTEMS/Agentic Systems.md`**

Source: `srodowisko-agentowe-ai-dwie-firmy.md`

**What to add** (only if NOT already present):
- Expand the `🧩 Architecture:` section with more detail:

```markdown
## 📐 Three-Layer Architecture (Detail)

### Layer 1: Skills (SKILL.md)
- Portable, open-source, domain knowledge
- Plain Markdown — readable by any AI agent
- Auto-triggering: skills activate on keywords without explicit `/skill` call

### Layer 2: Context (context/*.md)
- Firm-specific data: clients, accounts, procedures
- "Last updated" timestamps for freshness tracking
- Separate per company: same skill, different behavior based on context

### Layer 3: Tools (CLI scripts)
- API integrations: Revolut, Stripe, GUS, KRS
- Why scripts over MCP: 40k+ tokens overhead for MCP, simpler debugging, zero dependencies

## 🔧 Sync Strategy
- Git submodules for shared-skills across repos
- Git hooks for consistency
- Symlinks to multiple IDE targets (.claude, .github, .cursor)

## 📊 Design Principles
1. Version control as foundation (git diff, git revert, git blame, git log for audit)
2. Knowledge/data separation (skills vs context)
3. Conscious permission limits
4. Open formats (Markdown lingua franca)
5. Progressive disclosure
6. Code-first

## ⚠️ What Needs Work
- Memory portability across sessions
- Context freshness automation
- Client onboarding automation
- CI/CD for skills
```

**Frontmatter:** Add `agent-reviewed: 2026-04-10`

- [ ] **Step 8: Verify all 6 files were updated**

```bash
for f in \
  "content/BUSINESS/TOOLS/Make.md" \
  "content/BUSINESS/TOOLS/Airtable.md" \
  "content/AI/KNOWLEDGE/INFO/Agentic Coding.md" \
  "content/AI/TOOLS/Claude Code.md" \
  "content/AI/TOOLS/Cursor.md" \
  "content/PROJECTS/AGENTIC-SYSTEMS/Agentic Systems.md"; do
  echo "=== $f ===" && grep -c "agent-reviewed: 2026-04-10" "$f"
done
```

Expected: Each file shows `1` (the agent-reviewed date was added).

- [ ] **Step 9: Commit**

```bash
git add \
  "content/BUSINESS/TOOLS/Make.md" \
  "content/BUSINESS/TOOLS/Airtable.md" \
  "content/AI/KNOWLEDGE/INFO/Agentic Coding.md" \
  "content/AI/TOOLS/Claude Code.md" \
  "content/AI/TOOLS/Cursor.md" \
  "content/PROJECTS/AGENTIC-SYSTEMS/Agentic Systems.md"
git commit -m "update: merge blog insights into 6 existing notes (Make, Airtable, Agentic Coding, Claude Code, Cursor, Agentic Systems)"
```

---

### Task 7: Full Reindex

**Files:**
- Rewrite: `content/_indexes/vault-map.md`
- Rewrite: `content/_indexes/catalog.md`
- Rewrite: `content/_indexes/graph.md`

Follow the CLAUDE.md INDEX workflow exactly. Scan all `.md` files (excluding `_raw/`, `_indexes/`, `_outputs/`, `templates/`, `.obsidian/`). For each: extract frontmatter, extract wikilinks, generate one-line summary. Build all three indexes.

- [ ] **Step 1: Read current indexes for format reference**

```bash
head -30 "content/_indexes/vault-map.md"
head -30 "content/_indexes/catalog.md"
head -30 "content/_indexes/graph.md"
```

- [ ] **Step 2: Scan all notes and rebuild vault-map.md**

Scan all `.md` files in `content/` (excluding `_raw/`, `_indexes/`, `_outputs/`, `templates/`, `.obsidian/`).
Build the vault-map with:
- Folder table (note counts, types, top tags)
- Tag cloud
- Recent changes (last 10)
- Update the `updated:` timestamp to current time and `total_notes:` count

Follow the exact format specified in CLAUDE.md Navigation Protocol Level 0.

- [ ] **Step 3: Rebuild catalog.md**

For each note, generate one entry line:
`- **Title** | type | date | [tags] | summary (~15 words) | → link-targets or -`

Organize by folder section. Follow exact format from CLAUDE.md Level 1.

- [ ] **Step 4: Rebuild graph.md**

For each note, list outgoing wikilinks. Generate incoming links by inverting.
Follow exact format from CLAUDE.md Level 2.

- [ ] **Step 5: Verify index counts**

```bash
echo "=== vault-map ===" && head -5 "content/_indexes/vault-map.md"
echo "=== catalog entries ===" && grep -c "^\- \*\*" "content/_indexes/catalog.md"
echo "=== graph nodes ===" && head -5 "content/_indexes/graph.md"
```

Expected: total_notes should be ~182 (163 existing + 19 new), catalog entries should match, graph nodes should match.

- [ ] **Step 6: Commit**

```bash
git add content/_indexes/vault-map.md content/_indexes/catalog.md content/_indexes/graph.md
git commit -m "reindex: full rebuild after blog ingestion (19 new + 6 updated notes)"
```

---

### Task 8: Verification

- [ ] **Step 1: Run Quartz build**

```bash
cd "C:/Users/pawel/source/repos/plipowczan/brain" && npx quartz build
```

Expected: Build succeeds with no broken link errors.

- [ ] **Step 2: Spot-check 3 notes for style compliance**

Read these 3 notes and verify they follow the style guide:
1. `content/AI/KNOWLEDGE/INFO/AI Agent Security.md` — check emoji headings, wikilinks, frontmatter, condensed style
2. `content/CODE/TOOLS/OPSX Workflow.md` — check tool template structure
3. `content/BUSINESS/KNOWLEDGE/INFO/Data Maturity Model.md` — check knowledge-note structure

For each, verify:
- [ ] Frontmatter has all required fields (title, date, enableToc, openToc, tags, type, agent-created, summary)
- [ ] Emoji in section headings
- [ ] Wikilinks to related notes
- [ ] No blog narrative padding (no "W dzisiejszym artykule...", no promotional language)
- [ ] Content is complete enough to reconstruct an article

- [ ] **Step 3: Verify merge targets preserved original content**

For `content/AI/TOOLS/Claude Code.md`:
- Verify the original "Reasoning for" section is unchanged
- Verify the new "Practical Techniques" section was added after existing content

- [ ] **Step 4: Final commit (if any fixes needed)**

```bash
git add -A && git commit -m "fix: style compliance fixes after blog ingestion review"
```

Only run if fixes were needed in Steps 2-3.

---

## Execution Summary

| Task | Type | Parallelizable | Notes created/modified |
|------|------|:-:|:-:|
| 1 | Infrastructure | — | CLAUDE.md + dirs |
| 2 | New notes batch A | ✓ (with 3,4,5) | 5 new |
| 3 | New notes batch B | ✓ (with 2,4,5) | 4 new |
| 4 | New notes batch C | ✓ (with 2,3,5) | 5 new |
| 5 | New notes batch D | ✓ (with 2,3,4) | 5 new |
| 6 | Merges | Sequential | 6 updated |
| 7 | Reindex | After 2-6 | 3 indexes |
| 8 | Verification | After 7 | spot-check |

**Total: 19 new notes + 6 merges + 3 indexes + CLAUDE.md = 29 files touched**
