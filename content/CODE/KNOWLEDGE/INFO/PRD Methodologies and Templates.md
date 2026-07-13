---
title: "PRD Methodologies and Templates"
date: 2026-06-04
enableToc: true
openToc: true
tags: ["research", "compiled", "prd", "specs", "methodology", "product", "sdd"]
type: compiled-note
source: "research-en deep research — content/_raw/research-workspaces/prd-methodologies/"
agent-created: true
summary: "15 PRD methodologies compared — classic PM frameworks vs 2026 spec-driven development, across 18 fields"
---
# PRD — methodologies and templates for preparing Product Requirements Documents

_Deep research report — 15 methodologies/templates. Generated from structured research results; uncertain values omitted._

## Table of Contents

1. [Amazon Working Backwards (PR/FAQ + 6-pager)](#amazon-working-backwards-prfaq-6-pager) — type: methodology | executable_vs_descriptive: Purely descriptive/strategic. It is a thinking-and-decisi...
2. [Atlassian / Confluence Product Requirements Document Template](#atlassian-confluence-product-requirements-document-template) — type: template | executable_vs_descriptive: Purely descriptive. The document describes intended behav... | license_model: Public / free template — provided as a built-in Confluenc...
3. [BMAD-METHOD (Breakthrough Method for Agile AI-Driven Development)](#bmad-method-breakthrough-method-for-agile-ai-driven-development) — type: methodology | executable_vs_descriptive: Primarily descriptive — artifacts are rich planning docum... | license_model: Open-source (MIT). Free framework + optional expansion pa...
4. [Evidence-Grounded PRD](#evidence-grounded-prd) — type: methodology | year: 2025-2026 (named/popularized as a distinct trend) | executable_vs_descriptive: Primarily descriptive. It is still a human-readable requi... | license_model: Open methodology / industry pattern; instantiated by both...
5. [GitHub Spec Kit](#github-spec-kit) — type: framework | license_model: Open-source (MIT). Free toolkit/CLI; methodology is open ...
6. [Google-style Design Doc / One-pager](#google-style-design-doc-one-pager) — type: methodology | year: Practiced internally since the early-to-mid 2000s; widely... | executable_vs_descriptive: Descriptive. It explains and justifies an intended techni... | license_model: Open / public methodology — no formal license; an informa...
7. [Jobs-to-be-Done (JTBD)](#jobs-to-be-done-jtbd) — type: framework | year: 1990-1991 (Ulwick's origin); 2003 popularized via Christe... | executable_vs_descriptive: Descriptive. JTBD is a needs-framing and prioritization l... | license_model: Open theory/methodology — concepts are public and freely ...
8. [Lean Canvas](#lean-canvas) — type: template | year: 2010 | executable_vs_descriptive: Descriptive — it is a strategic business-model artifact t...
9. [Lenny Rachitsky PRD Template + 1-Pager](#lenny-rachitsky-prd-template-1-pager) — type: template | executable_vs_descriptive: Descriptive. A classic communication-and-alignment PRD th...
10. [Marty Cagan / SVPG Product Discovery & Opportunity Assessment](#marty-cagan-svpg-product-discovery-opportunity-assessment) — type: methodology | executable_vs_descriptive: Descriptive and decision-oriented. It frames problems and... | license_model: Public / freely shared methodology — SVPG blog templates ...
11. [Mini-Specs Philosophy (Traycer Epic Mode)](#mini-specs-philosophy-traycer-epic-mode) — type: methodology | executable_vs_descriptive: Hybrid leaning executable — the mini-specs are descriptiv...
12. [OpenSpec (Delta-Specs) — OPSX](#openspec-delta-specs-opsx) — type: framework | executable_vs_descriptive: Descriptive — specs are living markdown documents (struct... | license_model: Open-source (MIT). Free CLI installed via npm (openspec i...
13. [Opportunity Solution Tree (Continuous Discovery Habits)](#opportunity-solution-tree-continuous-discovery-habits) — type: framework | year: 2016 (concept introduced); 2021 (Continuous Discovery Hab... | executable_vs_descriptive: Descriptive/strategic. The OST is a discovery and decisio... | license_model: Public/open methodology — taught via books, courses, and ...
14. [Process Mapping (AS-IS analysis) — Extended Flowchart (4 elements: Action / Actor / Tool / Mode)](#process-mapping-as-is-analysis-extended-flowchart-4-elements-action-actor-tool-mode) — type: methodology | executable_vs_descriptive: Descriptive — it documents reality (the current operating...
15. [RFC / One-pager to Six-pager Narrative Style](#rfc-one-pager-to-six-pager-narrative-style) — type: methodology | year: RFC concept 1969 (IETF); Amazon banned slide decks in fav... | executable_vs_descriptive: Descriptive. These are human-authored argumentative docum... | license_model: Open / public methodology — a cultural practice with no l...

## Amazon Working Backwards (PR/FAQ + 6-pager)

### Basic Info

| Field | Value |
|---|---|
| name | Amazon Working Backwards (PR/FAQ + 6-pager) |
| type | methodology |
| origin | Amazon (formalized internally; popularized externally by Colin Bryar and Bill Carr in the book 'Working Backwards') |
| maturity_traction | Very high industry adoption. Canonical reference in PM circles; 'Working Backwards' book is a bestseller; PR/FAQ and 6-pager are de-facto standards copied across many tech companies. No GitHub repo (it is a writing practice, not software). |

### Approach

| Field | Value |
|---|---|
| philosophy | Start from the customer and work backwards to the product, rather than starting from an idea/technology and trying to find customers. Force clarity of thinking before building: if you cannot write a compelling, customer-facing press release announcing the finished product, the idea is not ready. The PR/FAQ surfaces the customer benefit, the hardest questions, and the unknowns up front, killing weak ideas cheaply on paper instead of in expensive engineering. Narrative memos (over slides) force rigorous, complete, logically structured thinking; PowerPoint hides gaps behind bullets. |
| document_structure | Two linked artifacts. (1) PR/FAQ: a ~1-page mock Press Release written as if the product just launched (headline, subheading, summary paragraph, customer problem, the solution, internal/leadership quote, customer quote, how-to-get-started/call to action), followed by an FAQ split into External/Customer FAQs and Internal/Stakeholder FAQs (economics, technical feasibility, dependencies, risks, go-to-market, metrics). (2) The 6-pager: a separate narrative-memo format (max six pages, prose not bullets) used to propose, plan, or review initiatives; read silently at the start of a meeting ('study hall') then discussed. The PR/FAQ is typically the front of a Working Backwards doc; the 6-pager is the broader narrative memo convention. Single-document, multi-section. |
| executable_vs_descriptive | Purely descriptive/strategic. It is a thinking-and-decision artifact, not an executable spec — it describes the desired customer outcome and validates the idea; it does not generate or sync with implementation. |
| living_vs_static | Largely static / point-in-time. Iterated heavily during the conception and approval phase (many drafts), but once the project is greenlit it is not a living spec synced to code; it serves as the north-star vision and is occasionally revisited rather than continuously reconciled. |
| governance_layer | No formal project-wide constitution. Governance is cultural: Amazon Leadership Principles (esp. Customer Obsession) and writing standards act as the shared rules every PR/FAQ implicitly inherits, plus the narrative-memo / silent-reading meeting ritual. There is no machine-enforced rule layer. |

### Inputs & Outputs

| Field | Value |
|---|---|
| inputs | Customer needs and pain points, market/opportunity sizing, target customer definition, anticipated objections, business economics (cost, pricing, P&L assumptions), technical feasibility considerations, dependencies, and success metrics. Driven by a clear hypothesis about a customer problem worth solving. |
| evidence_grounding | Mixed. Strongly customer-centric in framing and expected to draw on real customer insight, but the press release and quotes are authored/aspirational prose (a fictional future announcement), not direct transcripts of customer calls or tickets. Rigor is enforced through the FAQ's hard questions rather than mandatory raw-evidence citation. |
| outputs | A narrative document: (1) a one-page mock press release (future-dated, customer-facing language); (2) an external FAQ and internal FAQ; optionally (3) visuals/mockups; and the broader (4) 6-page narrative memo. Format is Word-style prose document (not slides, not repo files), designed to be read silently and debated. Output is a go/no-go decision and a shared, scrutinized product vision. |

### Fit & Integration

| Field | Value |
|---|---|
| ai_native | Not AI-native by origin (predates modern LLMs). However it has become a very popular prompt/format for AI assistants: LLMs are now widely used to draft PR/FAQs and 6-pagers, and the narrative structure suits generation and critique by agents. No repo-as-memory pattern, no agent-execution or automation hooks — the artifact is consumed by humans for decision-making, not executed by agents. |
| best_for | New product / big-bet conception and executive approval; greenfield initiatives and major new features. Best for product, business, and leadership stakeholders aligning on vision and economics before committing engineering. Works at any team size but shines for cross-functional bets needing leadership buy-in; less suited to incremental backlog grooming or detailed engineering specs. |
| integration | Sits at the front of the product lifecycle — feeds into downstream PRDs, design, and engineering specs once approved. Composes well with: discovery/customer-research inputs upstream; classic PRD, design docs, and OKRs/metrics downstream. In a vault pipeline it would precede Process Mapping → UX RULER → OpenSpec, acting as the vision/justification gate before detailed/executable specs are written. Pairs with the narrative-memo silent-reading meeting practice. |
| pros_cons | Pros: forces deep customer-first thinking and writing clarity; cheaply kills bad ideas on paper; creates durable shared vision and alignment; the FAQ surfaces risks early; strong executive communication tool. Cons/failure modes: time-consuming to write well; can become fiction/'happy-path theater' where aspirational quotes mask weak evidence; reviewers may game the narrative; does not bridge to implementation (still need PRDs/specs); requires a strong writing culture and disciplined silent-reading meetings to work; quality depends heavily on author skill and honest FAQ-writing. |

### Uncertain fields (omitted)

- year
- license_model

## Atlassian / Confluence Product Requirements Document Template

### Basic Info

| Field | Value |
|---|---|
| name | Atlassian / Confluence Product Requirements Document Template |
| type | template |
| origin | Atlassian (popularized through its Product Management / Atlassian Playbook and Confluence template library; rooted in the practices of Atlassian PMs such as Sherif Mansour) |
| license_model | Public / free template — provided as a built-in Confluence blueprint and as a freely reusable web template; the Confluence platform itself is proprietary SaaS |

### Approach

| Field | Value |
|---|---|
| philosophy | Provide a lightweight, collaborative, single-page product requirements document that replaces heavy traditional spec documents. The thesis is that a PRD should be a living, conversation-driving page (not a static contract): it captures the 'why' and 'what' of a feature, links out to designs and tickets rather than duplicating them, and lives where the team already collaborates (Confluence, next to Jira). It deliberately keeps requirements concise so the document stays current and readable, favoring discussion over exhaustive specification. |
| document_structure | Single Confluence page organized into prescribed sections: (1) a top 'project info' / metadata box (document status, target release, document owner, designer, developers, QA, stakeholders); (2) Objective / problem statement and strategic fit; (3) Goals and success metrics; (4) Assumptions; (5) User stories / use cases — often in a table with priority and notes, frequently linked to Jira issues; (6) User interaction and design (links to mockups/wireframes); (7) Questions / open issues table; (8) 'Not Doing' / out-of-scope list. Macros embed Jira issues, status labels, and decision/action items. It is a single-doc artifact (one page per feature/epic), not a multi-file repo. |
| executable_vs_descriptive | Purely descriptive. The document describes intended behavior for humans (PMs, designers, engineers) to read and implement; it does not generate code or function as an executable specification. |
| living_vs_static | Intended to be living during the discovery/definition phase — status field, open-questions table, and Jira links keep it semi-synced. In practice it commonly drifts after development starts and is not automatically reconciled with the shipped code; staying current depends on manual updates. |
| governance_layer | No formal project-wide constitution. Consistency comes from the shared blueprint/template and Confluence space conventions, but there is no enforced rule layer that individual PRDs inherit. |

### Inputs & Outputs

| Field | Value |
|---|---|
| inputs | Product strategy and roadmap context, customer/user research and interviews, support tickets and feedback, business objectives and success metrics, designs/wireframes from the design team, and engineering feasibility input. Stakeholder discussion feeds the open-questions and assumptions sections. |
| outputs | A single Confluence PRD page (the artifact itself) in rich-text/HTML format, with embedded Jira issue links, status macros, decision logs, and tables. It serves as the linkable hub that connects strategy to design files (Figma/embedded mockups) and to the engineering backlog in Jira. Exportable to PDF/Word. |

### Fit & Integration

| Field | Value |
|---|---|
| best_for | Product teams of any size that already use the Atlassian stack (Confluence + Jira); cross-functional product/design/engineering collaboration; brownfield and greenfield feature definition in a classic product-management context (PM-led, not engineer-led RFC culture). Especially good for organizations wanting a low-friction, standardized PRD format. |
| pros_cons | Pros: low barrier to entry, widely understood, collaborative and comment-friendly, strong Jira/design traceability, standardized via blueprint, keeps requirements concise. Cons / failure modes: drifts out of date once build starts (becomes stale 'shelfware'); descriptive only, so no guarantee the implementation matches; quality depends entirely on author discipline (can become a box-checking exercise); table-of-user-stories format can fragment narrative reasoning; locked into the Atlassian ecosystem; not designed for AI-agent execution or living sync with code. |

### Uncertain fields (omitted)

- year
- maturity_traction
- evidence_grounding
- ai_native
- integration

## BMAD-METHOD (Breakthrough Method for Agile AI-Driven Development)

### Basic Info

| Field | Value |
|---|---|
| name | BMAD-METHOD (Breakthrough Method for Agile AI-Driven Development) |
| type | methodology |
| license_model | Open-source (MIT). Free framework + optional expansion packs. |
| maturity_traction | Strong traction — ~48.6k GitHub stars, 150+ contributors, ~1,900 commits, active v6.x (e.g. v6.8.0, mid-2026). Healthy community (Discord, YouTube, GitHub discussions) and frequent releases. |

### Approach

| Field | Value |
|---|---|
| philosophy | Multi-agent, agile-grounded AI development. Thesis: traditional AI tools 'think for you' and produce average results; BMad instead orchestrates specialized agent personas that act as expert collaborators guiding a human through a structured process (human-in-the-loop). It solves the gap where AI loses planning context by combining (1) agentic planning that produces detailed, consistent PRDs/architecture and (2) context-engineered development where those documents are sharded and fed to dev/QA agents. Scale-adaptive intelligence adjusts planning depth to project complexity. |
| document_structure | Multi-file. Phase 1 produces PRD, Architecture spec, UX spec, PRFAQ, and user stories; Phase 2 shards these into modular per-story context documents consumed during implementation. Web bundles cover brainstorming, product brief, PRFAQ, PRD, UX research, market research. |
| executable_vs_descriptive | Primarily descriptive — artifacts are rich planning documents (PRD, architecture, stories) plus facilitated workflows, not directly executable specs. They drive implementation indirectly by being handed as engineered context to dev/QA agents rather than compiling to code. |
| living_vs_static | Living — documents are maintained and refined across the lifecycle via the bmad-help skill and context-engineered hand-offs; the Scrum Master/Dev/QA loop keeps stories and context updated as work proceeds, though sync with code is workflow-driven not automatic. |
| governance_layer | Partial/implicit — no single named 'constitution' file. Project-wide consistency is enforced through agent role definitions, agile workflow structure, QA gates, and configuration rather than an explicit inherited rules document. |

### Inputs & Outputs

| Field | Value |
|---|---|
| inputs | Natural-language product idea/brief, brainstorming and market/UX research, plus human decisions during the facilitated Analyst→PM→Architect planning sessions. Domain expansion packs add specialized inputs (e.g. game design, test strategy). |
| evidence_grounding | Moderate but author/agent-driven — discovery agents (Analyst, market/UX research bundles) can incorporate research, but grounding in real customer artifacts (calls, tickets, quotes) is not built-in; PRD quality depends on what the human and agents supply via prompt-engineered, human-in-the-loop refinement. |
| outputs | PRD, Architecture document, UX spec, PRFAQ, and a backlog of user stories, then sharded context documents for development. Output format is markdown repo files; downstream the Dev agent produces code and the QA agent enforces a QA gate. |

### Fit & Integration

| Field | Value |
|---|---|
| ai_native | Highly AI-native and the most agent-centric of the SDD/PRD tools — 12+ specialized agent personas (Analyst, PM, Architect, Scrum Master, Dev, QA, UX + domain experts) invoked as slash commands (/pm, /architect, /dev, /qa). 'Party Mode' enables multi-agent collaboration in one session. Installs into Claude Code, Cursor, and other IDEs via NPX; planning runs on web LLMs through Gemini Gems and ChatGPT Custom GPT 'web bundles'. bmad-help provides real-time workflow guidance. Repo/sharded docs act as durable context memory. |
| best_for | Teams and solo builders wanting a structured agile process with AI as a partner rather than autopilot. Good for greenfield product builds, enterprise/complex projects needing scale-adaptive planning, and cost-conscious teams that plan on flat-rate web LLM subscriptions. Domain expansion packs broaden fit (game dev, creative, test architecture). |
| integration | Composes with Claude Code, Cursor, Gemini, ChatGPT, and CI/CD (non-interactive install). Expansion modules: BMad Builder (custom agents/workflows), Test Architect (TEA), Game Dev Studio (BMGD), Creative Intelligence Suite (CIS). Requires Node.js 20.12+, Python 3.10+, UV. Fits a PRD pipeline as the planning/multi-agent layer feeding downstream dev/QA. |
| pros_cons | Pros: comprehensive free multi-agent ecosystem; specialized collaborating personas; scale-adaptive planning; agile QA-gate discipline; multi-platform; cheap planning via web LLMs; extensible expansion packs. Cons: steeper learning curve coordinating many agents/workflows; heavier conceptual overhead; best only for teams that value structured process; web bundles need separate LLM subscriptions; no explicit governance/constitution layer; descriptive specs require discipline to keep aligned with code. |

### Uncertain fields (omitted)

- year
- origin

## Evidence-Grounded PRD

### Basic Info

| Field | Value |
|---|---|
| name | Evidence-Grounded PRD |
| type | methodology |
| origin | Emergent industry pattern (no single author); driven by customer-led development tooling and the AI-PRD ecosystem — e.g. BuildBetter, Productboard, NotebookLM-style grounded generation, Reforge community practice |
| year | 2025-2026 (named/popularized as a distinct trend) |
| license_model | Open methodology / industry pattern; instantiated by both proprietary SaaS tools (BuildBetter, Productboard, ChatPRD alternatives) and open techniques (RAG over customer evidence) |

### Approach

| Field | Value |
|---|---|
| philosophy | Reaction against generic, AI-authored 'prose' PRDs that read well but aren't grounded in what customers actually said. The thesis: a PRD's claims about user problems, demand, and priority must be traceable to real evidence — customer call transcripts, support tickets, Slack threads, sales notes, reviews — with inline citations (quotes + timestamps + source links) so reviewers can audit every assertion. It moves PRD quality from 'is it well written?' to 'is it grounded and verifiable?', reducing the build of features that don't move metrics by anchoring requirements in validated customer demand. |
| document_structure | A conventional PRD structure (problem, goals/outcomes, user needs, requirements, success metrics, scope) augmented with an evidence layer: each problem statement, user need, and priority claim carries inline citations to source artifacts (quoted snippets, timestamps, links). Often includes a synthesized evidence/insights section clustering customer signals, and an auditable trail back to source documents. Typically a single doc with an attached/linked evidence corpus rather than multi-file. |
| executable_vs_descriptive | Primarily descriptive. It is still a human-readable requirements document describing what to build and why; the innovation is in grounding and citation, not in generating implementation. It can feed executable/SDD pipelines downstream but is not itself an executable spec. |
| living_vs_static | Tends toward living when tool-backed: because evidence sources (tickets, calls) stream in continuously, the PRD can be regenerated or refreshed as new customer signals arrive, and citations stay linked to a maintained corpus. Without integrated tooling it degrades to a static snapshot that drifts from incoming evidence. |
| governance_layer | Weak/implicit. Its governing rule is a quality/citation standard ('every material claim must cite real customer evidence' and be auditable), which acts as a review gate. It does not define a project-wide constitution or engineering rules that other specs inherit; governance is about evidentiary discipline, not architecture. |

### Inputs & Outputs

| Field | Value |
|---|---|
| inputs | Real customer evidence: call/meeting transcripts (Gong, Fireflies, etc.), support tickets, Slack/community threads, sales-call notes, CRM data, product reviews, NPS/feedback, and usage signals. These are ingested (often via RAG/an integrated customer-evidence layer) and clustered into themes that drive the requirements. |
| evidence_grounding | This IS the defining attribute — maximal evidence grounding. The methodology mandates that the PRD be anchored in real customer data with inline, auditable citations (actual quotes, timestamps, source links) rather than generated/authored prose. Grounded citation on every AI response and the ability to audit answers against source documents are core requirements. |
| outputs | A cited PRD where requirements and problem statements link back to source evidence; a clustered insight/evidence summary; and often auto-generated downstream artifacts (e.g. dev tickets) traceable to the originating customer signals (cf. Mistral's transcript-to-PRD-to-ticket agentic workflow). Formats: a structured document with hover-to-source citations (NotebookLM-style), plus exportable tickets/specs. |

### Fit & Integration

| Field | Value |
|---|---|
| ai_native | Strongly AI-native — it is essentially an AI-era methodology. Relies on LLM/RAG pipelines to ingest and retrieve customer evidence, cluster signals, draft requirements, and attach grounded citations; agentic workflows can carry transcripts to PRDs to tickets. The customer-evidence corpus functions as a memory/retrieval layer (analogous to repo-as-memory) that agents query and cite. Automation level ranges from AI-assisted drafting with human review to near-autonomous transcript-to-ticket pipelines. |
| pros_cons | Pros: dramatically improves trust and auditability of PRDs; reduces hallucinated/generic requirements; ties priorities to validated demand, improving the odds features move metrics; keeps the spec connected to live customer reality; speeds synthesis of large evidence corpora. Cons / failure modes: only as good as the evidence corpus (garbage/biased input → confidently cited but skewed PRD); citation can create false confidence if quotes are cherry-picked or misattributed; requires integrated tooling and clean data plumbing; risk of over-indexing on loud/recent customers and recency bias; privacy/compliance concerns with customer transcripts; still nascent with no agreed standard, so practices and tool quality vary. |

### Uncertain fields (omitted)

- maturity_traction
- best_for
- integration

## GitHub Spec Kit

### Basic Info

| Field | Value |
|---|---|
| name | GitHub Spec Kit |
| type | framework |
| origin | GitHub (github/spec-kit); methodology heavily influenced by the research of John Lam |
| license_model | Open-source (MIT). Free toolkit/CLI; methodology is open and template-based. |
| maturity_traction | High traction — ~108k GitHub stars, ~9.6k forks, 150+ releases (v0.9.x). Backed by GitHub, broad community adoption, fast version velocity since its 2025 launch. |

### Approach

| Field | Value |
|---|---|
| philosophy | Spec-Driven Development (SDD) inverts the traditional workflow: instead of code being the source of truth with specs as throwaway scaffolding, the specification becomes the central, executable artifact that directly generates working implementations via AI agents. It targets 'vibe coding' chaos by enforcing intent-first, multi-step refinement — define WHAT and WHY before HOW — so the spec drives the build rather than merely guiding it. Constitution-first governance ensures all downstream artifacts inherit non-negotiable project principles. |
| document_structure | Multi-file, version-controlled artifacts produced sequentially: constitution.md (governing principles), spec.md (functional requirements, user stories, acceptance criteria), plan.md (technical architecture and stack), tasks.md (dependency-aware, parallel-marked task breakdown). Supporting files: research.md, data-model.md, api-spec.json/contracts, quickstart. Each feature lives on its own branch/folder (e.g. 001-create-taskify). Templates are overridable via presets and project-local overrides. |
| living_vs_static | Living — artifacts are version-controlled and refined iteratively across the workflow phases (clarify, analyze, re-plan). /speckit.analyze checks cross-artifact consistency, helping specs stay synced, though sync with code still depends on re-running the workflow. |
| governance_layer | Yes — explicit. The constitution.md establishes project-wide, non-negotiable principles authored before any iteration; all specs, plans, and tasks inherit and must conform to it. This is the defining governance feature of Spec Kit. |

### Inputs & Outputs

| Field | Value |
|---|---|
| inputs | Natural-language feature requirements and intent, project principles (constitution), tech-stack preferences, and structured clarification responses (/speckit.clarify). Enterprise constraints (compliance, design systems, cloud requirements) can be injected. |
| evidence_grounding | Weak/absent by default — the spec is authored from user intent and natural-language prompts, not anchored in real customer data (calls, tickets, quotes). Grounding in evidence is left to whatever the author provides; no built-in customer-data integration. |
| outputs | Repo files (markdown + JSON): constitution.md, spec.md (user stories + acceptance criteria), plan.md (architecture decisions), tasks.md (ordered, parallel-aware task list), plus research.md, data-model.md, api-spec.json/contracts, and implementation-ready code. Optionally converts tasks into GitHub issues (/speckit.taskstoissues). |

### Fit & Integration

| Field | Value |
|---|---|
| ai_native | Strongly AI-native. Slash commands (/speckit.constitution, .specify, .clarify, .plan, .tasks, .implement, .analyze, .checklist) are injected into 30+ agent environments — GitHub Copilot, Claude Code, Gemini CLI, Cursor CLI, Codex CLI, Qwen, opencode, Goose, and more — via .claude/commands/ etc. or as agent skills (--skills flag). Agents execute local CLI tools during implementation; the repo acts as durable memory/state across sessions. |
| best_for | Greenfield 0-to-1 builds, parallel exploration across stacks, brownfield feature addition, and enterprise-constrained development needing compliance/governance. Best for individuals and teams using capable AI coding agents who want an auditable, structured process over ad-hoc prompting. |
| integration | Composes with any of 30+ AI coding agents and standard Git/GitHub workflows (branch-per-feature, tasks→issues). Requires uv/pipx, Python 3.11+, Git. In a vault-style PRD pipeline it occupies the same SDD slot as OpenSpec — fed by upstream analysis (e.g. Process Mapping) and discovery (UX RULER) to seed the spec/constitution. |
| pros_cons | Pros: constitution-first governance, tech-agnostic specs, full version-controlled audit trail, broad 30+ agent support, extensible (extensions/presets/overrides), enterprise-ready. Cons: depends on capable AI agents (quality varies by model); vague specs propagate errors downstream; real learning curve for SDD; heavier tooling setup (Python/uv/Git/CLIs); per-agent idiosyncrasies; not suited to true one-shot generation — needs iterative refinement and validation. |

### Uncertain fields (omitted)

- year
- executable_vs_descriptive

## Google-style Design Doc / One-pager

### Basic Info

| Field | Value |
|---|---|
| name | Google-style Design Doc / One-pager |
| type | methodology |
| origin | Google (engineering culture); popularized externally through writings such as Malte Ubl's 'Design Docs at Google' (industrialempathy.com) and numerous ex-Googler accounts |
| year | Practiced internally since the early-to-mid 2000s; widely popularized externally around 2018-2020 |
| license_model | Open / public methodology — no formal license; an informal cultural practice described in free blog posts and talks (the specific internal Google templates are proprietary, but the approach is public domain knowledge) |

### Approach

| Field | Value |
|---|---|
| philosophy | A design doc is the primary engineering artifact for thinking through and socializing a technical solution BEFORE building it. Its core thesis: writing the design down forces rigorous thinking, surfaces trade-offs and risks early, and creates an asynchronous, reviewable, durable record that aligns reviewers and teams cheaply compared to the cost of building the wrong thing. It is informal and adapted per problem (no rigid template), emphasizing the engineer's reasoning, the trade-offs considered, and the rejected alternatives over exhaustive specification. |
| document_structure | A free-form but conventional set of sections: Title/metadata (author, reviewers, status, date); Context and Scope (background, problem); Goals and Non-Goals; the Design / Proposed Solution (system-context diagram, APIs, data model, key flows); Alternatives Considered (with reasons for rejection); Cross-cutting concerns (security/privacy, scalability, reliability, observability, cost, legal); Trade-offs; Open Questions; and Appendix. A 'one-pager' is the lightweight short form used for smaller or early-stage proposals. Single-document artifact (typically a Google Doc), not multi-file. Length is deliberately variable — from one page to ~10+ depending on complexity. |
| executable_vs_descriptive | Descriptive. It explains and justifies an intended technical design for humans to review and then implement; it does not generate or execute code and is not an executable specification. |
| living_vs_static | Mostly a point-in-time artifact: it is most valuable during the design/review phase and is typically frozen (marked 'Final/Approved') once implementation begins. It captures intent at decision time and is generally NOT kept in sync with the evolving codebase — it drifts and is rarely reconciled, serving instead as a historical record of the decision. |
| governance_layer | No formal constitution. Governance is cultural: a review process (LGTM from designated reviewers), shared conventions, and organizational expectations that significant work has a design doc. There is no machine-enforced project-wide rule layer that individual docs inherit. |

### Inputs & Outputs

| Field | Value |
|---|---|
| inputs | Engineering problem/requirements (often from a PRD or product brief), existing system architecture and constraints, prior art and related design docs, performance/scale requirements, security and privacy considerations, and input gathered from peers and stakeholders during drafting. |
| outputs | A single design document (commonly a Google Doc, sometimes markdown), with embedded diagrams (system context, sequence, data model), an Alternatives-Considered section, and a review/approval trail of inline comments and reviewer sign-off (LGTM). The doc becomes a durable, searchable reference linked from code, tickets, and future docs. |

### Fit & Integration

| Field | Value |
|---|---|
| best_for | Engineering-led organizations and teams of any size doing non-trivial technical work; especially strong for greenfield system design and significant brownfield changes where trade-offs and cross-cutting concerns matter. More a dev/architecture artifact than a product artifact; the one-pager form fits small or early proposals and individual contributors. |
| pros_cons | Pros: forces rigorous up-front thinking; cheap alignment and early risk discovery; durable searchable institutional memory; flexible (no rigid template); 'Alternatives Considered' captures reasoning future readers need. Cons / failure modes: goes stale after implementation (decisions diverge from doc); quality is highly author-dependent and can become a bureaucratic checkbox; review can bottleneck or rubber-stamp; over-documentation for trivial work and under-documentation for complex work; no enforcement that built system matches the doc; not living/executable, so no automatic sync with code. |

### Uncertain fields (omitted)

- maturity_traction
- evidence_grounding
- ai_native
- integration

## Jobs-to-be-Done (JTBD)

### Basic Info

| Field | Value |
|---|---|
| name | Jobs-to-be-Done (JTBD) |
| type | framework |
| origin | Tony Ulwick (Strategyn) coined the operational framework and Outcome-Driven Innovation; Clayton Christensen (Harvard) popularized the theory; Bob Moesta & Chris Spiek developed the 'Switch'/timeline interview variant |
| year | 1990-1991 (Ulwick's origin); 2003 popularized via Christensen's 'The Innovator's Solution'; 2016 Christensen's 'Competing Against Luck' |
| license_model | Open theory/methodology — concepts are public and freely written about; specific operational systems (Ulwick's Outcome-Driven Innovation, Strategyn engagements, JTBD training/certifications) are proprietary commercial services |
| maturity_traction | Mature, decades-old, broadly adopted across product, marketing, and innovation; foundational in PM education. Multiple competing schools (Ulwick/ODI 'jobs-as-process' vs Christensen/Moesta 'jobs-as-progress'). ODI claims an independently verified ~86% success rate vs ~17% industry average. No single canonical repo — it is a body of theory and books. |

### Approach

| Field | Value |
|---|---|
| philosophy | Customers 'hire' products and services to get a 'job done' — to make progress in a particular circumstance. The core thesis is that the job is stable and solution-agnostic while products come and go, so framing innovation around the customer's underlying job (and its desired outcomes) produces a more durable, less feature-myopic basis for defining what to build. In PRD terms, JTBD reframes requirements away from features and demographics toward the functional, emotional, and social progress the customer is trying to achieve, reducing the risk of building well-executed solutions to the wrong problem. |
| document_structure | Not a single prescribed document. Artifacts vary by school: a job statement ('When [situation], I want to [motivation], so I can [expected outcome]'); a job map (the steps a customer goes through to execute a functional job, in Ulwick's ODI); a list of desired outcome statements with importance/satisfaction scores (opportunity scoring); and Switch/timeline interview narratives (Moesta). These feed into, rather than replace, a PRD — JTBD supplies the problem framing and prioritized needs. |
| executable_vs_descriptive | Descriptive. JTBD is a needs-framing and prioritization lens, not an executable spec. It informs what should be built and why by surfacing under/over-served outcomes; it does not generate implementation. Outputs are consumed by humans (and increasingly AI) when authoring PRDs and roadmaps. |
| living_vs_static | Mostly static per study but conceptually durable. Job statements and job maps are intended to be stable over time (a key selling point — jobs don't change as fast as technology), so artifacts are revisited periodically rather than continuously synced to code. They do not auto-reconcile with implementation reality. |
| governance_layer | Limited. The articulated 'job' and its prioritized desired outcomes can act as a governing reference that strategy, roadmap, and individual specs ladder up to, giving cross-initiative alignment. It is not a technical constitution and defines no project-wide engineering rules. |

### Inputs & Outputs

| Field | Value |
|---|---|
| inputs | Qualitative customer interviews (notably Switch/timeline interviews capturing the moment of 'firing' an old solution and 'hiring' a new one), observation of customers executing the job, and — in Ulwick's ODI — quantitative surveys measuring importance and satisfaction of desired outcomes. Inputs center on circumstances, motivations, struggles, and the steps of getting the job done. |
| evidence_grounding | Strongly evidence-grounded when applied rigorously. The methodology is rooted in direct customer interviews and (in ODI) quantitative outcome surveys, anchoring needs in real customer language about struggles and progress. Quality depends on interview rigor; poorly applied JTBD can drift into assumed jobs, but the canonical practice is data-driven. |
| outputs | Job statement(s); a structured job map of the steps in executing the core functional job; a prioritized list of desired outcome statements with opportunity scores (Ulwick) identifying under-served (high-opportunity) and over-served needs; customer segments defined by unmet outcomes; and forces/timeline narratives (Moesta). Formats are typically statements, tables/spreadsheets, and maps — these become the evidence base and acceptance criteria input for PRDs. |

### Fit & Integration

| Field | Value |
|---|---|
| best_for | Innovation, product strategy, market definition, segmentation, and positioning across team sizes — used by both startups and large enterprises. Strong for both greenfield (defining a new market/offer) and brownfield (finding under-served outcomes in an existing product). More a strategy/discovery lens than a delivery method; pairs with PM and marketing contexts. ODI suits data-heavy, enterprise innovation; Switch interviews suit lean/early discovery. |
| pros_cons | Pros: durable, solution-agnostic framing reduces feature myopia and chasing fads; clarifies real customer needs and reveals under/over-served outcomes; strong basis for differentiation and prioritization; ODI offers a quantitative, repeatable opportunity-scoring method with a strong reported success rate. Cons / failure modes: fragmented schools and terminology cause confusion (Ulwick vs Christensen vs Moesta); rigorous application (especially ODI surveys) is time- and skill-intensive; easy to misapply by writing assumed jobs without real interviews; produces framing/needs but not an implementation-ready spec; defining the 'right' level of the job is hard and contested. |

### Uncertain fields (omitted)

- ai_native
- integration

## Lean Canvas

### Basic Info

| Field | Value |
|---|---|
| name | Lean Canvas |
| type | template |
| origin | Ash Maurya (LeanStack), adapted from Alexander Osterwalder's Business Model Canvas |
| year | 2010 |
| maturity_traction | Widely adopted industry-standard startup artifact taught in accelerators, lean-startup courses and used by hundreds of thousands of founders; no GitHub repo (it is a conceptual template, not software) |

### Approach

| Field | Value |
|---|---|
| philosophy | Replace the slow, multi-page business plan with a single-page, fast-to-draft model that concentrates attention on the riskiest parts of a new venture from day one: problem, customer, unique value proposition and how the business makes money. The thesis is that early-stage plans are full of untested assumptions, so the canvas exists to surface and prioritize risk (problem/solution risk, product/market risk, scale risk) and drive rapid hypothesis-testing iteration rather than detailed up-front planning. As a PRD precursor it forces the team to articulate the business 'why' (problem, customer, UVP, metrics) before any product requirement is written. |
| document_structure | Single one-page document divided into nine fixed segments: (1) Problem (top 3 problems + existing alternatives), (2) Customer Segments, (3) Unique Value Proposition, (4) Solution (3 key features), (5) Unfair Advantage, (6) Revenue Streams, (7) Cost Structure, (8) Channels, (9) Key Metrics. Single-doc, not multi-file. |
| executable_vs_descriptive | Descriptive — it is a strategic business-model artifact that describes assumptions and hypotheses; it does not generate implementation and is not an executable/SDD spec. It precedes and informs a PRD rather than producing code. |
| living_vs_static | Intended to be living during the discovery phase — founders iterate the canvas as hypotheses are validated/invalidated through customer interviews and experiments. However it is not synced to code or product reality and requires manual updating; once a venture stabilizes it tends to become static. |
| governance_layer | No — it defines no project-wide rules or constitution that downstream specs inherit. It is a standalone strategic snapshot, not a governance framework. |

### Inputs & Outputs

| Field | Value |
|---|---|
| inputs | Founder hypotheses, market and customer research, customer/problem interviews (Design Thinking discovery), competitive/alternatives analysis, and early business metrics. For an existing company: value-proposition vs customer-segment fit analysis and revenue-stream data. Operationally, an AS-IS Process Map can feed problem/solution segments. |
| evidence_grounding | Partially — best practice anchors the Problem, Customer Segments and UVP in real customer-interview data and validated learning (Lean Startup/Running Lean), but in practice many canvases start as authored founder assumptions to be tested, so grounding depends on discipline. |
| outputs | A single completed one-page canvas (nine filled segments) usable as a planning, communication and risk-prioritization artifact. Format is a visual grid (whiteboard, slide, or tool such as LeanStack/Canvanizer). Output is shareable with investors, partners and stakeholders and serves as the business-model input/precursor to a downstream PRD. |

### Fit & Integration

| Field | Value |
|---|---|
| ai_native | Not AI-native by design — it predates the agentic era and has no agent-execution, repo-as-memory or automation mechanism. It can be generated or critiqued by LLMs (a prompt can scaffold a canvas), and as a structured nine-field schema it is easily machine-parseable, but consuming/executing it is not part of the method. Automation level: low. |
| best_for | Early-stage startups and solo founders / small teams validating a new venture; greenfield 0-to-1 contexts and pivots of existing businesses facing declining margins or stagnant growth. Product-strategy context rather than engineering; weak fit for large brownfield engineering specs. |
| integration | Composes with Design Thinking (problem discovery) and Lean Startup / Running Lean (validation loop). In the vault PRD pipeline it sits upstream as business-model framing before operational discovery: Lean Canvas → Process Mapping (AS-IS) → UX RULER (discovery) → OpenSpec/OPSX (formal spec). Pairs with pitch decks and investor communication. |
| pros_cons | Pros: fast (one page vs full business plan), portable and easy to share/update, concise and investor-friendly, forces focus on problem/customer/UVP and risk early, low barrier to entry, iteration-friendly. Cons: too high-level to drive implementation (not a PRD by itself), can become a box-filling exercise of untested assumptions if not validated with real customers, omits team/operations/go-to-market depth, no governance or sync to reality, weak for complex/established businesses, and quality depends entirely on the rigor of the underlying customer research. |

### Uncertain fields (omitted)

- license_model

## Lenny Rachitsky PRD Template + 1-Pager

### Basic Info

| Field | Value |
|---|---|
| name | Lenny Rachitsky PRD Template + 1-Pager |
| type | template |
| maturity_traction | High traction in the PM community. Lenny's Newsletter is one of the largest product/growth newsletters (millions of readers; large paid community); the PRD and 1-pager templates are among the most widely circulated PM templates. Distributed as docs, not a versioned repo, so no GitHub stars; traction measured by community reach and reuse. |

### Approach

| Field | Value |
|---|---|
| philosophy | Make PRDs practical, lightweight, and aligned. A good PRD aligns the team on the problem, the why, and the what — without over-specifying the how. The 1-pager exists to force early clarity and crisp communication: separate the PROBLEM (and why it matters / who it's for) from the SOLUTION, so teams agree the problem is worth solving before debating implementation. Avoid bloated specs nobody reads; keep it concise, outcome-focused, and easy to align around. |
| document_structure | Two related artifacts. (1) 1-Pager: a concise problem brief — typically Problem statement, Why now / why it matters, Target customer, Goals/Success metrics, and optionally high-level Solution direction — deliberately separating problem from solution. (2) Full PRD template: a more complete doc with sections such as Overview/TL;DR, Problem & background, Goals and non-goals, Success metrics, Target users/personas, Hypotheses/assumptions, Proposed solution & user flows, Requirements/scope (MVP vs later), Open questions, Dependencies/risks, Go-to-market, and Timeline/milestones. Single-document, multi-section (Notion/Google Doc style). |
| executable_vs_descriptive | Descriptive. A classic communication-and-alignment PRD that describes what to build and why; it does not generate or sync with implementation code. |
| living_vs_static | Intended as a living working document during a project (updated as scope, open questions, and decisions evolve), but not technically synced to code — it can drift from reality unless manually maintained. In practice more living than a one-shot spec, less than an executable/SDD spec. |
| governance_layer | No project-wide constitution or inherited rule layer. It is a standalone template; consistency comes from team/company convention rather than an enforced governing spec. |

### Inputs & Outputs

| Field | Value |
|---|---|
| inputs | Customer/user research and interviews, support tickets and feedback, product analytics and metrics, business goals/strategy, competitive context, and stakeholder input. The 1-pager is fed primarily by a well-articulated customer problem and its business rationale. |
| evidence_grounding | Encourages grounding in real customer data and metrics (problem statements, success metrics, user evidence are expected), but the template itself is authored prose and does not mandate citing raw evidence (calls/tickets/quotes); rigor depends on the author. Moderately evidence-grounded. |
| outputs | A 1-pager problem brief and/or a fuller PRD document, in narrative + structured-section format (Notion page or Google/Word doc). Includes goals, success metrics, scope, and open questions. Not repo files or executable artifacts. Output is team alignment and a shared plan of record for a feature/product. |

### Fit & Integration

| Field | Value |
|---|---|
| ai_native | Not AI-native by design (a human-authored doc template), but highly AI-friendly: its clear section structure makes it a common scaffold for LLM-assisted PRD drafting, and many PMs now generate first drafts with AI then refine. No repo-as-memory, no agent execution, no automation layer — consumed by human teams for alignment. |
| best_for | Product managers and cross-functional teams in startups and scale-ups; individual feature/product definition. The 1-pager suits early framing and quick stakeholder buy-in; the full PRD suits committed builds. Works for small-to-mid teams especially; flexible for greenfield and brownfield. Less suited to heavy regulated/engineering-spec contexts that need formal requirements traceability. |
| integration | Composes with discovery/research inputs upstream and design, eng tickets (Jira/Linear), and OKRs downstream. Lives in Notion/Google Docs/Confluence. In a vault pipeline the 1-pager/PRD sits after framing and before detailed/executable specs — feeding Process Mapping → UX RULER → OpenSpec. Pairs with roadmaps, design docs, and metric dashboards. |
| pros_cons | Pros: practical, lightweight, fast to adopt; the problem/solution separation drives clearer thinking and alignment; widely understood community standard with ready-made examples; flexible and easy to tailor. Cons/failure modes: not prescriptive about rigor, so quality varies with author; can drift from reality if not maintained; risks becoming a checkbox doc nobody updates; no link to implementation or validation built in; templates can be over- or under-filled without discipline; relies on team convention for consistency. |

### Uncertain fields (omitted)

- origin
- year
- license_model

## Marty Cagan / SVPG Product Discovery & Opportunity Assessment

### Basic Info

| Field | Value |
|---|---|
| name | Marty Cagan / SVPG Product Discovery & Opportunity Assessment |
| type | methodology |
| origin | Marty Cagan, Silicon Valley Product Group (SVPG) |
| license_model | Public / freely shared methodology — SVPG blog templates and books (commercial). No software license; concepts are open and widely reused, books are copyrighted. |
| maturity_traction | Extremely high influence in product management. 'Inspired' is a foundational PM text; SVPG is a leading authority; concepts (empowered teams, product trio, dual-track discovery, opportunity assessment) are industry vocabulary. No GitHub/version metrics — it is a body of practice, not a tool. |

### Approach

| Field | Value |
|---|---|
| philosophy | Most product ideas fail and the role of product is to discover a solution that is valuable, usable, feasible, and viable BEFORE building it. Replace 'build what stakeholders ask for' with empowered product teams solving customer problems. Discovery (deciding what to build, validating risks fast and cheap) must precede and run in parallel with delivery. The Opportunity Assessment forces a team to answer a small set of hard framing questions before committing — preventing waste on solutions to poorly understood or low-value problems. Outcomes over output; tackle the riskiest assumptions first. |
| document_structure | Lightweight, narrative-driven artifacts rather than heavy templates. (1) Opportunity Assessment — a short set of four key questions: (a) What business objective/outcome is this addressing? (b) How will you know if you've succeeded? (success metrics) (c) What problem will this solve for our customers? (customer problem) (d) What type of customer are we focused on? (target market). (2) Product Discovery toolkit: opportunity solution trees, story maps, assumption mapping (value/usability/feasibility/viability risks), prototypes, and various validation techniques. (3) Product Vision and Strategy / Narrative documents. Multi-artifact, deliberately minimal — favors thinking and prototypes over exhaustive specs. |
| executable_vs_descriptive | Descriptive and decision-oriented. It frames problems and validates solution risks; it does not generate or sync with code. Output guides what to build; delivery teams then build it. |
| living_vs_static | Discovery is continuous and iterative (dual-track: discovery runs alongside delivery), so the practice is 'living' as a process. Individual artifacts (an opportunity assessment, a prototype) are lightweight and disposable/point-in-time rather than a single continuously-maintained spec synced to code. |
| governance_layer | No machine-enforced constitution. Governance comes from product vision, product principles, and product strategy that all teams inherit, plus the empowered-team operating model. These are organizational guardrails, not a per-spec rule file. |

### Inputs & Outputs

| Field | Value |
|---|---|
| inputs | Business objectives/outcomes (often OKRs), customer and user research, direct customer interactions, qualitative and quantitative data/analytics, market and competitive insight, and the four risks to assess (value, usability, feasibility, viability). Strong emphasis on continuous customer contact and on the product trio (PM, designer, engineer) gathering insight together. |
| evidence_grounding | Heavily evidence-grounded. Core tenet is direct, frequent customer contact, rapid validation with real users, and data-informed decisions; prototypes are tested with actual customers. Discovery explicitly seeks to validate assumptions against reality rather than rely on authored prose, though the framing artifacts themselves are concise narratives. |
| outputs | A completed Opportunity Assessment (answers to the four questions), validated/invalidated assumptions, prototypes and test results, an opportunity solution tree, and a product vision/strategy narrative. Format: short narrative docs, visual trees/maps, and interactive prototypes — not repo files or executable specs. Output is confidence (or a kill decision) on what to build next. |

### Fit & Integration

| Field | Value |
|---|---|
| ai_native | Not AI-native in origin (predates LLM agents). It is a human-team, customer-facing practice centered on the product trio. AI can assist (synthesizing research, generating prototype variations, drafting assessments), but there is no repo-as-memory, no agent-executable spec, and no automation layer. Discovery emphasizes human judgment and real customer signal, which AI augments rather than replaces. |
| best_for | Empowered product teams (the product trio) in product-led tech companies; medium-to-large orgs transforming from feature-factory/project model to outcome-driven teams. Strong for both greenfield and ongoing product work where the goal is to discover valuable solutions. Less prescriptive for solo founders or pure engineering specs; assumes a dedicated PM/design/eng team and leadership willing to empower teams. |
| integration | Composes with OKRs (objectives feed the assessment), dual-track agile/delivery, design (prototypes, story maps), and downstream PRDs/specs once a solution is validated. In a vault pipeline it sits at the discovery/framing stage — feeding Process Mapping and detailed/executable specs (UX RULER → OpenSpec) only after the opportunity and solution are validated. Pairs naturally with continuous discovery habits (Teresa Torres), JTBD, and assumption mapping. |
| pros_cons | Pros: prevents building the wrong thing; forces outcome and customer-problem clarity with minimal overhead; risk-first validation saves engineering waste; empowers teams and improves morale; battle-tested and widely understood. Cons/failure modes: requires real organizational change (empowered teams, leadership trust) that many companies fail to make; light on prescriptive templates so weak teams flounder; depends on genuine customer access and skilled product trio; can be misapplied as ceremony without real validation; says little about implementation detail (still need delivery specs). |

### Uncertain fields (omitted)

- year

## Mini-Specs Philosophy (Traycer Epic Mode)

### Basic Info

| Field | Value |
|---|---|
| name | Mini-Specs Philosophy (Traycer Epic Mode) |
| type | methodology |
| origin | Traycer (Traycer AI), founded by Vijay Krishnan |
| maturity_traction | Strong 2025-2026 SDD traction: ~550K tasks created, ~135K Open VSX installs, ~36K VSCode installs, 100K+ users cited; growing fast as a spec-driven orchestration layer (no open-source repo — proprietary) |

### Approach

| Field | Value |
|---|---|
| philosophy | AI writes code fast but struggles to preserve intent — the why, constraints, edge cases and 'invisible rules' — which lives scattered across chat messages or only in the author's head, causing the agent to fill gaps wrongly (drift). Monolithic specs make this worse: one giant document becomes a wall of text that goes stale and is painful to maintain. The mini-specs philosophy instead captures intent as a SYSTEM of small, tightly-scoped specs (a PRD, a tech plan, edge-case clarifications, maybe a wireframe), each focused on a single aspect so it stays stable, reviewable and easy to update. You get the rigor of spec-driven development without the maintenance burden of a monolith: when something changes you update the relevant mini-spec instead of rewriting the world. This solves the PRD-writing problem of monolithic, quickly-outdated requirement docs. |
| document_structure | Explicitly multi-file. An Epic is a system of mini-specs rather than one document. Artifacts: SPECS (PRD, tech plan, design/UX spec, API spec, edge-case clarifications, optional wireframe) and TICKETS (discrete work units with acceptance criteria and Todo→In Progress→Done status). All live in a Documents panel with interconnected spec↔ticket relationships; every spec and ticket in an epic is automatically in the LLM's context. Executions track each agent handoff (implementation plan, verification comments, git commits, status). |
| executable_vs_descriptive | Hybrid leaning executable — the mini-specs are descriptive intent artifacts, but Epic Mode is an orchestration layer that hands selected specs/tickets to coding agents (Cursor, Claude Code, Windsurf, Cline) to generate implementation, with verification of execution against captured intent. So the system drives code generation even though individual specs read descriptively. |
| living_vs_static | Designed to stay living — small scoped specs are meant to be cheaply updated as the project evolves (update the relevant mini-spec, not the whole world), tickets carry live status, and Executions capture git commits and verification feedback, keeping specs connected to implementation reality more than a static monolithic PRD. |
| governance_layer | Partial — within an epic, the interconnected spec system and the rule that all specs/tickets are auto-loaded into the agent's context act as shared governing context, plus a verification layer that validates execution against intent. It does not advertise a formal cross-project constitution that every spec inherits the way Spec-Kit does. |

### Inputs & Outputs

| Field | Value |
|---|---|
| inputs | An initial problem statement / goal / intent from the developer, plus a chosen structured workflow. Epic Mode then actively asks pointed questions to surface constraints, edge cases and invisible rules, turning scattered context into explicit specs. Codebase context is drawn in for tech-plan grounding. |
| evidence_grounding | Grounded in developer intent and codebase context rather than external customer data — the system interrogates the author to extract the why/constraints/edge-cases (intent capture), and verifies agent output against those captured specs; it is not anchored in customer calls/tickets but in elicited engineering intent. |
| outputs | A set of mini-specs (PRD, tech plan, design/API specs, edge-case docs, optional wireframes) plus actionable tickets with acceptance criteria, organized in a Documents panel; and Executions records (implementation plans, verification comments, git commits, status). Format: structured documents + tickets handed off to coding agents — effectively a maintained spec system rather than one markdown file. |

### Fit & Integration

| Field | Value |
|---|---|
| ai_native | Fully AI-native — purpose-built as the workflow/orchestration layer between human intent and AI coding agents. It auto-loads all epic specs and tickets into the LLM's context (repo/epic-as-memory), hands selected artifacts to agents via selection-based handoff, and offers Smart YOLO for end-to-end orchestration that coordinates execution, verification and iterative refinement. High automation; integrates with Cursor, Claude Code, Windsurf and Cline. |
| best_for | Developers and engineering teams using AI coding agents who want spec-driven rigor without monolithic-doc overhead; medium-to-complex features where intent/edge-case drift is costly. Works for both greenfield and brownfield (codebase-aware tech plans), individual devs through teams (per-user pricing, ticket assignment). |
| integration | Composes with VSCode/Open VSX (IDE extension) and major coding agents (Cursor, Claude Code, Windsurf, Cline) as the orchestration layer above them; uses git for execution tracking. Conceptually adjacent to other 2026 SDD approaches (Spec-Kit, OpenSpec). In the vault pipeline it occupies the same formal-spec slot that OpenSpec/OPSX fills downstream of Process Mapping and UX RULER discovery. |
| pros_cons | Pros: kills the monolithic-spec maintenance problem (small, stable, updatable specs), preserves intent and reduces agent drift via explicit edge-case/constraint capture, full agent orchestration with verification against intent, auto-context loading, multi-agent/IDE compatibility, fast-growing 2025-2026 traction. Cons: proprietary paid SaaS with credit/subscription cost and vendor lock-in (no open-source/repo-portable spec format), value depends on quality of the elicited intent and on the underlying coding agents, added tooling/workflow learning curve, and an extra orchestration layer to manage on top of the IDE. |

### Uncertain fields (omitted)

- year
- license_model

## OpenSpec (Delta-Specs) — OPSX

### Basic Info

| Field | Value |
|---|---|
| name | OpenSpec (Delta-Specs) — OPSX |
| type | framework |
| origin | Fission-AI (Fission-AI/OpenSpec) |
| license_model | Open-source (MIT). Free CLI installed via npm (openspec init). |
| maturity_traction | Strong, fast-rising traction — ~52.7k GitHub stars, ~600 commits, 38 releases, active v1.4.x (mid-2026). Daily-use tool in the vault owner's workflow; community on Discord. |

### Approach

| Field | Value |
|---|---|
| philosophy | Lightweight in-repo Spec-Driven Development that solves 'context window rot' — the degradation of AI output as chat history grows. Instead of chaotic step-by-step sessions, OpenSpec persists structured artifacts under version control so the agent always knows what it is building and why before writing code. Four principles: fluid not rigid, iterative not waterfall, easy not complex, built for brownfield not just greenfield. Its signature move is delta-specs: changes are described incrementally against a living spec rather than rewriting whole documents, keeping context small and diffs traceable. |
| document_structure | Multi-file, DAG-organized per change in openspec/changes/<name>/: proposal.md (root — problem/scope), specs/ (Given/When/Then requirements as living delta specs), design.md (technical approach), tasks.md (implementation checklist). Completed changes move to archive/ with timestamps; canonical specs live in specs/ and are updated via sync. Artifacts form a Directed Acyclic Graph (proposal → specs/design → tasks) with filesystem-as-state (file exists = DONE). |
| executable_vs_descriptive | Descriptive — specs are living markdown documents (structured prompts) defining what/why, not directly executable code. The tasks.md checklist items become the executable steps the agent performs; implementation is generated indirectly by the AI agent. |
| living_vs_static | Living — delta specs are merged into the canonical spec via /opsx:sync, and /opsx:verify reconciles implementation against the spec. Filesystem-as-state and incremental deltas keep the spec evolving with the work, minimizing drift; brownfield support means it tracks reality in existing codebases. |
| governance_layer | Light/implicit — no constitution.md equivalent. Project conventions are injected via openspec/config.yaml (context: tech stack, API conventions, testing) plus per-artifact rules (e.g. 'use Given/When/Then', 'include rollback plan'). Governance is folder-convention and config-driven, customizable through editable YAML schemata + markdown templates, not a separate inherited rules document. |

### Inputs & Outputs

| Field | Value |
|---|---|
| inputs | A natural-language change idea (e.g. add-dark-mode) explored via /opsx:explore, plus project context from config.yaml. In a PRD pipeline: business analysis (AS-IS Process Mapping: Action/Actor/Tool/Mode) seeds the proposal, discovery (UX RULER 7 stages) supplies PRODUCT.md/decision-log/north-star, and an offer (scope/stack/timeline) populates config context. |
| evidence_grounding | Author/agent-driven — grounding depends on inputs the user feeds (analysis, discovery docs, offer). No built-in hook to raw customer artifacts (calls, tickets, quotes); evidence enters through the upstream Process Mapping / UX RULER stages rather than the tool itself. |
| outputs | A DAG of version-controlled markdown in the repo: proposal.md, specs/*.md (Given/When/Then per feature, as delta specs), design.md, tasks.md, plus archived changes. Downstream the agent produces implementation code; verify produces a spec-vs-code reconciliation. |

### Fit & Integration

| Field | Value |
|---|---|
| ai_native | Strongly AI-native and the lightest-weight SDD option. Slash commands (/opsx:explore, new, continue, ff, apply, sync, verify, archive) are injected into 25+ AI assistants — Claude Code, Cursor, GitHub Copilot, generic LLM APIs — which read the openspec/ folder as context (repo-as-memory). No vendor lock-in; agents execute tasks locally. Editable YAML schemata + markdown templates let users define custom workflows (e.g. research-first). Recommended with high-reasoning models (e.g. Opus, Codex-class). |
| best_for | Brownfield iterative feature work in existing codebases, but also greenfield; ideal for solo devs and teams wanting structure without ceremony, persistent artifacts across sessions, and traceable incremental changes. Scales from personal projects to enterprise. |
| integration | Composes with Claude Code (primary), Cursor, Copilot, and generic LLMs via npm-installed CLI. Pairs with the vault PRD pipeline: Process Mapping (AS-IS analysis) → UX RULER (discovery) → OpenSpec config/specs, producing proposal/design/tasks in the DAG. Related vault notes: OpenSpec, OPSX Workflow, Context Engineering, Agentic Coding. |
| pros_cons | Pros: very lightweight, low-friction onboarding (no Python setup); delta specs cut context bloat and give clean diffs; brownfield-friendly; tool-agnostic, no lock-in; DAG/filesystem-as-state model fits non-linear real work; customizable schemata/templates. Cons: specs are descriptive, not auto-enforced — needs discipline to keep spec/code aligned; learning curve for new team members; telemetry on by default (opt-out available); no explicit constitution/governance layer; context hygiene still depends on user discipline. |

### Uncertain fields (omitted)

- year

## Opportunity Solution Tree (Continuous Discovery Habits)

### Basic Info

| Field | Value |
|---|---|
| name | Opportunity Solution Tree (Continuous Discovery Habits) |
| type | framework |
| origin | Teresa Torres (Product Talk) |
| year | 2016 (concept introduced); 2021 (Continuous Discovery Habits book) |
| license_model | Public/open methodology — taught via books, courses, and blog; no formal license, the underlying training and certification (Product Talk Academy) is commercial |
| maturity_traction | Widely adopted product-management standard; 'Continuous Discovery Habits' is a best-selling PM book, taught in major PM curricula (Product School, Reforge), and OST is a de-facto industry framework. No GitHub repo (it is a conceptual/visual framework, not code). |

### Approach

| Field | Value |
|---|---|
| philosophy | Product teams should base decisions on continuous, weekly contact with customers rather than one-off research or stakeholder opinion. The Opportunity Solution Tree gives teams a shared visual structure that connects a single desired business outcome to the customer opportunities (unmet needs, pain points, desires) that drive it, and then to candidate solutions and the experiments that test them. It solves the problem of teams jumping straight to solutions ('feature factories') by forcing them to first map and prioritize the opportunity space, keeping discovery aligned with a measurable outcome and grounded in real customer evidence. |
| document_structure | A single visual tree (a DAG/hierarchy) with four levels: (1) Outcome at the root — the measurable business/product outcome; (2) Opportunity space — customer needs, pain points, and desires structured as a hierarchy from broad to small, sourced from interviews; (3) Solutions — candidate ideas that address a specific target opportunity; (4) Experiments / Assumption tests — the assumptions to validate for each solution. It is a single living diagram rather than a multi-section prose document; it complements but does not replace a written PRD. |
| executable_vs_descriptive | Descriptive/strategic. The OST is a discovery and decision-making artifact that frames and prioritizes problems and ideas; it does not generate implementation. It feeds downstream into PRDs/specs that engineering builds from — it describes the 'why' and 'what to explore', not the 'how to build'. |
| living_vs_static | Living. The tree is explicitly meant to be continuously updated as new interview insights, opportunities, solutions, and experiment results arrive each week. It evolves with discovery rather than being a static one-time deliverable. |
| governance_layer | Partial. The desired outcome at the root acts as a single governing constraint that all opportunities and solutions must ladder up to, enforcing alignment. It does not define project-wide engineering rules or a constitution; governance is limited to outcome-alignment and prioritization discipline. |

### Inputs & Outputs

| Field | Value |
|---|---|
| inputs | Continuous customer interviews (weekly cadence), customer pain points/needs/desires, a single prioritized product outcome cascaded from business goals, opportunity assessments/prioritization, and assumption tests / experiment results. Story-based interviewing is the primary input-gathering technique. |
| evidence_grounding | Strongly evidence-grounded by design. Opportunities must originate from actual customer interviews and observed needs rather than invented; Torres emphasizes interviewing customers weekly and capturing real stories. The opportunity space is meant to be a faithful, evidence-backed map of what customers said, not authored assumptions. |
| outputs | Primary output is the Opportunity Solution Tree itself — a visual map (whiteboard/Miro/FigJam/dedicated tools) linking outcome → opportunities → solutions → assumption tests. Secondary outputs include prioritized opportunities, a portfolio of solution ideas mapped to target opportunities, and a set of assumption tests/experiments with results. These outputs feed the writing of PRDs/specs but the OST is not itself a prose PRD. |

### Fit & Integration

| Field | Value |
|---|---|
| ai_native | Not AI-native by origin — it is a human-centered discovery framework predating the agentic era. However it is increasingly AI-assisted: 2025-2026 tooling (Maze, Dovetail, productboard, and PRD generators) can auto-cluster interview insights into opportunities and help populate trees. It has no repo-as-memory pattern or agent-executable spec; AI acts as an assistant for synthesizing interview data into the tree rather than executing it. |
| best_for | Product trios (PM + designer + engineer) and product teams practicing continuous discovery; best for ongoing/iterative product work (brownfield and evolving products) where teams have regular customer access. Strongest in product context rather than pure engineering delivery; less suited to one-off greenfield projects with no users yet or to teams unable to interview customers regularly. |
| pros_cons | Pros: enforces outcome-orientation and stops feature-factory behavior; makes the opportunity space and trade-offs visible and shareable; keeps discovery grounded in real customer evidence; improves alignment across the trio and stakeholders; lightweight and tool-agnostic. Cons / failure modes: requires consistent weekly customer access many teams lack; trees can grow unwieldy or become 'solution trees' with thin opportunity grounding; risk of opportunities being framed as solutions; requires discipline and skill in interviewing and opportunity assessment; does not produce an implementation-ready spec on its own; can feel heavyweight for small or very early-stage teams. |

### Uncertain fields (omitted)

- integration

## Process Mapping (AS-IS analysis) — Extended Flowchart (4 elements: Action / Actor / Tool / Mode)

### Basic Info

| Field | Value |
|---|---|
| name | Process Mapping (AS-IS analysis) — Extended Flowchart (4 elements: Action / Actor / Tool / Mode) |
| type | methodology |
| origin | Automation House (Extended Flowchart method); builds on established process-mapping traditions (Flowchart, SIPOC, BPMN) |
| maturity_traction | Practitioner methodology refined across 400+ mapped processes at Automation House; no GitHub/community metrics — adoption is consulting-driven rather than open-source |

### Approach

| Field | Value |
|---|---|
| philosophy | You cannot optimize what you have not measured — 'no map, no navigation.' Every company runs sub-optimally; the goal is to find and fix those spots quickly. The method exists because existing notations fail: SIPOC tables are unreadable for the business, BPMN is too complex (too many gateways/symbols), and plain flowcharts are too simple (show 'what' but not 'who' or 'with what'). The Extended Flowchart is the golden middle that stays readable while carrying enough context to spot waste. As a PRD precursor its core thesis is that an AS-IS map with all four elements is the best possible input to a product spec: every manual step and every missing integration is a candidate feature, and Elon's principle (delete → simplify → automate) filters which candidates belong in the PRD at all. |
| document_structure | A visual AS-IS process map (Extended Flowchart) where every step must carry 4 mandatory elements: (1) Action — what happens, (2) Actor — who does it, (3) Tool — what it is done with (Excel, CRM, Slack, Make, n8n), (4) Mode — manual or automatic. Single-artifact map per process; manual vs automatic steps are explicitly marked to expose quick wins. Serves three audiences: business, users, and IT/implementation teams. |
| executable_vs_descriptive | Descriptive — it documents reality (the current operating state) and identifies optimization candidates; it does not generate implementation. It is a diagnostic input that precedes a PRD, not an executable spec. |
| living_vs_static | Snapshot of the AS-IS state at mapping time — it captures how the process really is, not the to-be. It is not auto-synced to systems and drifts as the process changes, so it requires manual re-mapping; in practice it is re-run/updated when a process is revisited rather than continuously living. |
| governance_layer | Weak/implicit — Elon's principle (delete → simplify → automate, never in reverse) and the rule that every step must have all 4 elements act as method-level discipline, but it defines no project-wide constitution that downstream specs formally inherit. |

### Inputs & Outputs

| Field | Value |
|---|---|
| inputs | Direct observation and interviews with the people who actually do the work (not managers), real operational behavior, error/time/cost data, and existing tooling inventory (which systems each step touches). Optionally meeting transcripts (e.g. Fireflies.ai 'ear of the process') and a central knowledge base (e.g. Airtable) feed the mapping. |
| evidence_grounding | Strongly grounded in operational reality — the method explicitly mandates mapping AS-IS with the operators who perform the work rather than management's mental model, and locating optimization points by where the most errors happen, the process takes longest, and data is rewritten by hand. Evidence-first by design. |
| outputs | An AS-IS Extended Flowchart map (each step annotated with Action/Actor/Tool/Mode and manual-vs-automatic markers), a ranked list of pain points / optimization candidates (highest error, longest, most manual re-keying, biggest impact), and a feature candidate list that becomes the input to a PRD. Format: a process diagram plus an accompanying pain-point list. |

### Fit & Integration

| Field | Value |
|---|---|
| ai_native | Not AI-native as a notation, but explicitly positioned as an input that feeds AI/automation: manual steps and missing integrations become candidate features for automation via Make, n8n and AI assistants (e.g. the El Padre case: Fireflies transcription + Airtable brain + Make/AION agents). The map itself is human-authored; AI consumes its output downstream rather than executing the map. Automation level of the artifact itself: low; of its downstream pipeline: high. |
| best_for | Operations/process-optimization and digital-transformation contexts in SMBs and agencies; brownfield analysis of existing real-world workflows before building or automating. Best where work is cross-functional with multiple tools and manual handoffs (copy-paste, missing integrations). Less suited to greenfield products with no existing process. |
| integration | Sits at the front of the vault PRD pipeline: AS-IS map → Elon's principle (delete → simplify → automate) filter → UX RULER discovery (Mission/Audience/User/Need/Infrastructure/Product/Value) → OpenSpec / OPSX Workflow (proposal + specs + design + tasks, versioned in the repo). Composes with automation tools (Make, n8n), AI meeting transcription (Fireflies.ai), Airtable as central brain, and references BPMN as a heavier alternative notation. |
| pros_cons | Pros: readable to the business while carrying real context (4 elements), exposes quick wins instantly (manual vs automatic), grounded in operational reality, produces directly actionable feature candidates for a PRD, proven across 400+ processes (healthcare waiting-time cuts of 20-45%, El Padre 10-50% faster offers). Cons: requires mapping discipline (every step needs all 4 elements), is a manual snapshot that drifts and must be re-mapped, depends on access to and honesty of frontline operators, only captures AS-IS (to-be design is a separate step), and lacks a formal governance/versioning layer of its own until handed to OpenSpec/OPSX. |

### Uncertain fields (omitted)

- year
- license_model

## RFC / One-pager to Six-pager Narrative Style

### Basic Info

| Field | Value |
|---|---|
| name | RFC / One-pager to Six-pager Narrative Style |
| type | methodology |
| origin | Two converging lineages: the engineering RFC ('Request for Comments') tradition (IETF, 1969; adapted internally at companies such as Google, Uber, Squarespace, Oxide) and Amazon's narrative-memo culture (the one-pager / PR-FAQ and the six-page narrative championed by Jeff Bezos) |
| year | RFC concept 1969 (IETF); Amazon banned slide decks in favor of written narratives circa 2004; the combined 'narrative requirements' style was widely popularized 2015-2020 |
| license_model | Open / public methodology — a cultural practice with no license; RFC templates are freely shared and Amazon's narrative/PR-FAQ approach is documented in public books, talks, and blog posts (specific internal templates are proprietary) |

### Approach

| Field | Value |
|---|---|
| philosophy | Replace bullet-point decks and thin templates with full prose narrative as the unit of thinking and decision-making. The core thesis (Amazon's): writing complete sentences and paragraphs forces clear, complete, logically connected reasoning that bullets let you hide; a well-written six-pager conveys far more rigor than a slide deck, and silent reading of it at the start of a meeting levels the discussion. The RFC half adds: propose changes as written documents open for asynchronous comment and consensus before building, scaling decision-making transparently. Together: requirements/decisions live as readable, reviewable, argued narratives that scale from a one-pager (small) to a six-pager (major bet). |
| document_structure | Prose-first documents at graduated lengths: the one-pager (concise problem + proposal + key trade-offs for lighter decisions) scaling up to the six-pager (a structured narrative essay for major decisions). A six-pager typically reads as: context/problem, goals, the proposal/approach, alternatives and trade-offs, risks, and an appendix (data, FAQs, metrics) that does NOT count against the six-page limit. Amazon's PR-FAQ variant front-loads a mock press release plus internal/external FAQ. An RFC adds metadata (author, status, reviewers, discussion thread) and an explicit comment/consensus process. Single-document artifact, narrative paragraphs (no bullets-as-substance), with a hard page budget forcing prioritization. |
| executable_vs_descriptive | Descriptive. These are human-authored argumentative documents meant to be read, debated, and decided upon; they describe and justify a direction but do not generate or execute code. |
| living_vs_static | Largely point-in-time decision artifacts. RFCs move through statuses (draft to accepted/rejected) and accrue comment threads, so they are living during the review window; once accepted they typically freeze as the record of the decision. Six-pagers are read-once meeting documents and are generally not kept synced with the implemented reality — they drift and are not reconciled with code. |
| governance_layer | Process-level governance rather than a machine-enforced constitution: a defined RFC lifecycle (statuses, required reviewers, comment period, acceptance criteria) and cultural norms (page limits, silent reading, no slides) that all documents follow. There is no inheritable rule file that specs derive from, but the shared process and templates act as a soft governance layer. |

### Inputs & Outputs

| Field | Value |
|---|---|
| inputs | Problem framing and goals, customer needs and data, business and engineering context, prior RFCs/decisions, metrics, and anticipated objections (especially for the FAQ section). For PR-FAQs, 'working backwards' from the customer outcome is the explicit starting input. |
| outputs | A single narrative document — a one-pager, six-pager, RFC, or PR-FAQ — in prose (Google Doc / markdown / wiki), with an appendix of data and FAQs and, for RFCs, an attached comment/decision thread and status field. The artifact is the durable, searchable record of the reasoning and the decision. |

### Fit & Integration

| Field | Value |
|---|---|
| best_for | Engineering-led and writing-strong organizations making consequential decisions; scales by document size to team and decision size (one-pager for small, six-pager for major bets). Strong for both greenfield direction-setting and brownfield change proposals; less suited to organizations that lack a writing/reading culture or need rapid lightweight ticket-level specs. |
| pros_cons | Pros: forces rigorous, complete, logically connected reasoning; narrative exposes gaps that bullets hide; scalable and asynchronous; transparent, archived decision-making; page limits force prioritization; silent-reading meetings democratize input. Cons / failure modes: writing good prose is hard and time-consuming; high authoring and reading cost; quality and outcome are very author-dependent; can bottleneck decisions or descend into endless comment threads; goes stale after the decision (not living/executable, no sync with code); demands a strong writing culture that many teams lack; risk of polished prose masking weak ideas. |

### Uncertain fields (omitted)

- maturity_traction
- evidence_grounding
- ai_native
- integration


## 🔗 Related notes

- [[Specification-Driven Development]] — OpenSpec: specs before AI agents implement code
- [[Spec-driven SEO and GEO]] — spec-driven patterns applied to SEO/GEO
- [[Software 3.0]] — the agentic-engineering paradigm these specs feed into
- [[Agentic Engineering]] — verifiability and the quality bar for AI-built work
- [[Lean Canvas]] — one-page business-model artifact referenced as a PRD-adjacent template
- [[Deep-Research-skills]] — the `/research*` pipeline this comparison matrix was produced with
