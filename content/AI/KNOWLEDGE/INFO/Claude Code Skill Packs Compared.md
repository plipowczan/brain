---
title: "Claude Code Skill Packs Compared"
date: 2026-11-13
enableToc: true
openToc: true
tags: ["knowledge", "info", "compiled", "ai", "claude-code", "agent-skills", "skills", "coding-agents", "comparison", "methodology"]
type: compiled-note
source: "research deep research — content/_raw/research-workspaces/ai-tools-review-2026-11/"
agent-created: true
status-checked: 2026-11-13
summary: "Superpowers, Matt Pocock Skills, Karpathy Skills, ECC, gstack, Anthropic's Agent Skills, Addy Osmani's pack and the awesome lists: what each one is, when to pick which, and what no skill pack fixes."
---

# Claude Code Skill Packs Compared

A "skill pack" can mean four different things: the **format** itself, a **methodology** that takes over how the agent works, a **toolbox** of single skills you call when you need them, or a **list** of other people's skills. Comparing Superpowers with an awesome list makes as much sense as comparing a framework with a bookmarks folder. So this note first sorts the packs into those groups and only then says when to pick which.

All status lines were checked against each repository and its releases page on **2026-11-13**.

## 🚀 The short answer

- **Start with the format, not a pack.** [[Agent Skills]] (now an open standard under the Linux Foundation's AAIF) is what every pack below is built on. Learn how a `SKILL.md` and its description trigger before you install 300 of them.
- **Pick at most one methodology:** [[Superpowers]] if you want engineering rigour enforced (design → plan → TDD → review), [[gstack]] if you are a founder shipping a product end to end, [[Agent Skills (Addy Osmani)]] if you want a lifecycle with checklists and gates but less ceremony.
- **Add a toolbox on top:** [[Matt Pocock Skills]] are small, user-invoked and don't fight a methodology.
- **Put [[Karpathy Skills]] in every repo:** four rules, about 100 tokens, no learning curve.
- **Use [[Everything Claude Code]] only if you want a whole harness distribution** and accept its size.
- **Treat [[Awesome Agent Skills]] and [[Awesome Claude Code]] as search engines,** not as something to install.

## 🧩 Four kinds of pack

| Kind | Packs | What you get | What it costs you |
|---|---|---|---|
| Format | [[Agent Skills]] (Anthropic, spec at agentskills.io) | the `SKILL.md` standard + official example skills (docx, pptx, xlsx, pdf, skill-creator, …) | nothing; it is the base layer |
| Methodology | [[Superpowers]], [[gstack]], [[Agent Skills (Addy Osmani)]] | a process the agent follows from idea to merged PR | ceremony on small tasks; overlapping triggers if you install two |
| Toolbox | [[Matt Pocock Skills]], [[Karpathy Skills]] | sharp single skills or rules; you stay in charge of the process | you have to know when to call them |
| Distribution | [[Everything Claude Code]] (ECC) | hundreds of skills, agents, hooks, memory, security scanning, a control plane | context cost, overlap, one maintainer |
| Directory | [[Awesome Agent Skills]], [[Awesome Claude Code]] | curated links | no installer, no audit |

## 📒 Side by side

| Pack | Size | Who drives | Harnesses | Status 2026-11-13 | Licence |
|---|---|---|---|---|---|
| [[Agent Skills]] | spec + official example skills | the model, by description | most major agents (open standard) | active; spec donated to AAIF / Linux Foundation (announced 2026-10-22) | per skill; the Office skills are now Apache-2.0 |
| [[Superpowers]] | ~15 core skills | the pack: a bootstrap makes the agent check skills before every task | 17 | active, v7.0.2 (2026-11-03) | MIT |
| [[gstack]] | ~60 role skills | you, through role commands (`/office-hours` → `/ship`) | Claude Code full; others "advisory" | active, v1.99.2.0 (2026-11-12) | MIT |
| [[Agent Skills (Addy Osmani)]] | 25 skills, 9 commands | you, through phase commands (`/spec` → `/ship`) | 70+ via `npx skills` | active, 0.6.15 (2026-10-31) | MIT |
| [[Matt Pocock Skills]] | about 25–30 skills, split user- vs model-invoked | you | Claude Code, Codex, Copilot, Gemini CLI | active, v1.3.2 (2026-10-29) | MIT |
| [[Karpathy Skills]] | one `CLAUDE.md`, 4 rules | always on | Claude Code, Cursor | **done**: no merge since 2026-04-20; static file, repo moved to multica-ai | MIT (stated, no LICENSE file) |
| [[Everything Claude Code]] | ~314 skills, dozens of agents, hooks | the pack + hooks | ~15 (Claude Code best) | active, v2.2.3 (2026-10-01), commits to 11-06 | MIT; paid ECC Pro |
| [[Awesome Agent Skills]] | ~1,500 links | — | cross-agent | active | MIT (list); each skill its own |
| [[Awesome Claude Code]] | ~250 links | — | Claude Code | active; relaunched as v3 on 2026-07-03 | **CC BY-NC-ND 4.0** |

## ☘️ When to choose which

### [[Agent Skills]]: learn the format first
- The point is progressive disclosure: only the name and description load at start-up, the body loads when it triggers. That is why one good skill beats a page of `CLAUDE.md`.
- Anthropic calls its own example skills demonstrations; test them before critical use. A skill can bundle scripts that run with your permissions. See [[Skill Authoring Best Practices]].

### [[Superpowers]]: when you want discipline enforced
- **Pick it when** the agent's failure mode is jumping into code: Superpowers won't code before a design and a plan, runs subagent-driven development with a reviewer per task, and enforces TDD.
- **Skip it when** most of your work is small edits; the rigour is literal (v7 sizes the brainstorming step to soften this). Subagent runs are token-hungry unless you route them to cheaper models.

### [[gstack]]: when you ship a product alone
- **Pick it when** you need the roles a solo founder lacks: CEO review of the plan, design review, real-browser QA, release and canary checks. Skills hand artifacts to each other (design doc → reviewed plan → test plan → QA → ship).
- **Watch out:** about 60 skills and new versions almost daily; it assumes Bun. On Windows, Smart App Control blocks its unsigned locally compiled binaries (the workaround is WSL). Outside reviews send code to Codex or Claude Code under your login.

### [[Agent Skills (Addy Osmani)]]: a lifecycle with gates, less ceremony
- **Pick it when** you want Define → Plan → Build → Verify → Review → Ship with checklists (testing, security, performance, accessibility) and "anti-rationalisation" tables that say when a step may be skipped.
- **Watch out:** it leans toward web and frontend work, and installing one skill with `npx skills add --skill` skips the shared `references/` folder.

### [[Matt Pocock Skills]]: a toolbox that leaves the process to you
- **Pick it when** you like your own process and want sharper moves inside it: `/grill-me` before a change, `/tdd`, `/diagnosing-bugs`, `/improve-codebase-architecture`. The pack explicitly argues against frameworks that own the process.
- **Watch out:** installing it both as a plugin and through `skills.sh` gives you every skill twice. Skills in `in-progress/` can change without notice.

### [[Karpathy Skills]]: the baseline for every repo
- Four rules (think before coding, simplicity first, surgical changes, goal-driven execution) for about 100 tokens. It is finished rather than abandoned: nothing to maintain, but there is also no merged `AGENTS.md`/Codex variant. Pasting the rules into your own `AGENTS.md` works just as well.

### [[Everything Claude Code]]: a harness distribution, not a pack
- **Pick it when** you want one installer to set up skills, agents, hooks, memory and AgentShield config scanning across many harnesses, and you are willing to prune.
- **Watch out:** the surface is huge (hundreds of skills, overlapping), the README carries sponsor integrations, and one maintainer is handling 275 open issues. Don't stack install methods; you get duplicate hooks.

### [[Awesome Agent Skills]] and [[Awesome Claude Code]]: where to look, not what to install
- Awesome Agent Skills is cross-agent and vendor-first (official skills from Anthropic, Google, Vercel, Stripe, Cloudflare, Trail of Bits…). Awesome Claude Code is Claude-Code-only and editorial, and also lists hooks, status lines and tooling.
- Both curate; neither audits. Entries can change upstream after they are listed. Awesome Claude Code's CC BY-NC-ND licence forbids commercial or modified reuse of the list itself, so link to it rather than copying it.

## ⚠️ What no skill pack fixes

- **Triggering is probabilistic.** A model-invoked skill fires only if its description matches the moment. Only hooks are deterministic, and only Superpowers' bootstrap, gstack's Claude Code tier and ECC lean on them.
- **Two methodologies collide.** Superpowers' brainstorming, Matt Pocock's grilling and gstack's office hours all trigger on "I want to build X". Installing several means the agent picks one at random or runs two; nothing arbitrates between packs.
- **Nobody measures the gain on your codebase.** gstack runs paid evals on its own changes and Anthropic's skill-creator can benchmark a skill, but none of the packs tells you whether it makes *your* results better. Measure with a few real tasks before and after (see [[Skills 2.0 Testing]]).
- **Project knowledge still has to come from you.** No pack knows your domain, your conventions or why the code is shaped the way it is; that stays in `CLAUDE.md`/`AGENTS.md` and docs such as [[DOX — Self-Documenting AGENTS.md|DOX]].
- **Supply-chain safety is your job.** Skills run scripts with your permissions and can carry prompt injection. ECC's AgentShield scans agent config; nothing scans every skill you install.
- **They don't stay still.** gstack and ECC ship almost daily, Superpowers went from v5 to v7 in six months, and Awesome Claude Code dropped many entries in its v3 relaunch. Pin versions or re-check before you rely on a behaviour.

## 🎨 How I use this

In my own Claude Code setup I run [[Superpowers]] as the methodology and [[Matt Pocock Skills]] as the toolbox (grilling, TDD, diagnosing bugs), plus this vault's own workflow skills. That pair works because Matt Pocock's skills don't try to own the process. I keep [[gstack]] and [[Everything Claude Code]] as references to borrow single skills from rather than installing them whole.

## 📖 Further reading

- [[Agent Skills]] · [[Skill Authoring Best Practices]] · [[Building Claude Skills Guide]] · [[Skills 2.0 Testing]]: how skills work and how to test them
- [[Vercel Skills]]: the `npx skills` installer most packs use
- [[Elephant-Goldfish Model (EGM)]] · [[AI-Native SDLC Playbook]]: two more methodology takes
- [[Harness Engineering]] · [[Context Engineering]] · [[Extending Claude Code — Tools for Its Blind Spots]]
- The whole category in context: [[AI Tools Map]]

## 🔗 Resources

- Status data: deep research of 2026-11-13 over each repository and releases page. The details are in each tool note's "Status check" box.
- [agentskills.io](https://agentskills.io/) · [anthropics/skills](https://github.com/anthropics/skills) · [obra/superpowers](https://github.com/obra/superpowers) · [garrytan/gstack](https://github.com/garrytan/gstack) · [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) · [mattpocock/skills](https://github.com/mattpocock/skills) · [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) · [affaan-m/ECC](https://github.com/affaan-m/ECC) · [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) · [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)
