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
A cohort-based startup accelerator (the "Startup Builders #2" run is a ~5-week program) that takes founders from problem validation to a pitch-ready, deployed MVP. Two online sessions a week plus offline networking/demo days. I'm the **Week 3 trainer** — the "Build & Ship" module.

## 📚 Curriculum (5 weeks)
1. **Problem & Validation** — Business Hypothesis Canvas, The Mom Test, desk research + expert interviews.
2. **GTM & Strategy** — ICP, positioning, [[Lean Canvas]], unit economics (LTV:CAC), Bullseye distribution, landing-page brief.
3. **MVP & Vibe Coding** *(my week)* — PRD as single source of truth → ship a deployed MVP in 7 days.
4. **Market Feedback & Testing** — soft launch, analytics ([[PostHog]], Hotjar, Clarity), RICE prioritization, iterate.
5. **Pitch Deck & Fundraising** — deck anatomy, storytelling, SAFE/valuation basics, pitch simulation.

Each week's output is the next week's input (validated problem → GTM → PRD → analytics → pitch).

## 🛠️ My module — two MVP tracks
- **Tech track**: [[Claude Code]] + [[Next.js]] + [[Supabase]] + [[Vercel]] + [[shadcn-ui|shadcn/ui]] + [[Tailwind CSS]] — full control, exports to GitHub, professional workflow.
- **Builder track**: [[Lovable]] / [[v0]] + [[Supabase]] + Vercel — ~90% faster to first visual, limited control, fine for non-technical founders.
- Both converge on the same brand, PRD, [[Supabase]] backend, Vercel deploy, [[Stripe]] payments, and analytics hooks.

## 🧠 Teaching know-how
- **Specification-Driven Development**: ~95% of the work is decisions on the spec, not coding. The PRD lives in a git-tracked file (not chat history) to dodge context-window rot; [[OPSX Workflow]] / OpenSpec drives explore → propose → design → spec → tasks. See [[PRD Methodologies and Templates]].
- **GIGO demo**: same topic, two PRDs — an evidence-rich one generates the correct core flow; a one-line generic one hallucinates features. Spec quality ∝ code quality.
- **"Vibe engineering," not vibe coding**: prompts are engineering artifacts; verification via unit + manual + Playwright; the human reviews the reasoning, not just the output.
- **Analytics boundary**: my week wires only Vercel Analytics + empty `data-analytics-event` hooks; full instrumentation ([[PostHog]]) is Week 4's job.
- Design polish via the [[Impeccable]] skill; the `/prd` + `/prepare-goal` skills come from the 200IQ Labs [[Agentic Skills Submodules|shared-skills]] plugin.

## My role
Trainer (Week 3) — sharing practical knowledge from building [[Qamera AI]], [[Agentic Systems]], and consulting at [[PLSoft]]. Engagement runs through [[PLSoft]]. Cohort community on Skool.

## 🔗 Links
- [[Value Builders Tribe]] — the community arm
- [[Software 3.0]] · [[Agentic Engineering]] — the worldview behind the MVP track
- [[Claude Code]] · [[Next.js]] · [[Supabase]] · [[Vercel]] · [[shadcn-ui|shadcn/ui]] · [[Tailwind CSS]] · [[Stripe]] · [[ElevenLabs]] · [[Lovable]] · [[v0]] · [[OPSX Workflow]]
- [[Ops, Collaboration, Analytics & Community SaaS]] (Hotjar, Microsoft Clarity, Skool, Loom, Reforge, Figma, Warp, Google Workspace) · [[Dev Libraries & Build Tools]] (Playwright)
