---
title: "AI-Native SDLC Playbook"
date: 2026-10-01
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "claude-code", "sdlc", "coding-agents", "harness", "governance", "agent-skills", "methodology"]
type: knowledge-note
source: "_raw/processed/2026-10-01_ai-native-sdlc-playbookbook.md at main.md"
agent-created: true
summary: "Anthropic's Claude Academy course: the SDLC as a loop of committed artifacts (intent.md → spec.md → plan.md → PR → incident); skills advise, hooks enforce, humans approve at gates"
---

# AI-Native SDLC Playbook

## 🗒️ Description

**The AI-Native SDLC Playbook** is a 14-lesson course from Anthropic's Applied AI team on [Claude Academy](https://academy.claude.com/courses/ai-native-sdlc-playbook). The premise is that code is no longer the bottleneck. When agents build at agent speed, the stages around the build (plan, review/test, deploy) still run at human speed, controls built for human-written diffs stop matching reality, and exceptions still wait for a weekly committee.

The answer is not to drop the controls. It is to **keep the old control objectives and change how they are enforced**, turning the linear SDLC into a loop with AI at every step and humans above it, starting, directing and governing.

**Provenance:** I clipped a third-party Markdown/EPUB copy of the course (`yibie/ai-native-sdlc-playbook`), which says the content belongs to Anthropic and is reproduced for study. I haven't checked it line by line against the original course. What follows is my summary, not the course text.

## 🚀 The one idea: every stage ends in a committed artifact

Each stage ends by **committing an artifact to version control**, and that commit is what starts the next stage:

`intent.md` → `spec.md` → `plan.md` → diff + tests → PR with review findings → incident record → the next `intent.md`

- Early stages produce Markdown, because a product owner and an agent can both read and act on the same file. From Build onward the artifact is code and its records.
- **The commit chain is the audit trail**: who asked for what, what the agent produced, who approved it.
- You start by prompting each step by hand. The end state is a loop where each accepted artifact fires the next gate, and human attention concentrates **at the gates**.
- Each play is written the same way: what changes, prerequisites, steps, governance (what's enforced, the evidence, where it's logged, who approves) and a **leading plus a lagging indicator**, almost always read straight from Git or PR history.

## 🔗 Links

- [[Specification-Driven Development]] · [[Spec-Driven + Self-Documenting]]: intent → spec → plan is the same chain OpenSpec gives me, with the product owner added in front
- [[Harness Engineering]] · [[DOX — Self-Documenting AGENTS.md]]: CLAUDE.md, skills, hooks and subagents as the controls
- [[Agent Skills]] · [[Agent Skills (Addy Osmani)]] · [[Skills 2.0 Testing]]: skills as institutional knowledge, and evals for them. [[Autoharness]] keeps a per-skill evidence ledger you could turn into those evals.
- [[Karpathy Method]]: spec / verifier / environment, the same three layers seen from one engineer's desk
- [[Orca]]: parallel sessions in worktrees, as a desktop app
- [[AI Software Factory]] · [[Archon]] · [[Loop Engineering]]: an open-source build of the Stage 6 closed loop
- [[AI Agent Security]]: what the managed-settings block below defends against
- [[Claude Code]]: the harness the whole course assumes

## 🧩 The plays, stage by stage

### Stage 1 · Plan: capture as `intent.md`

- The person with the idea brainstorms with Claude (claude.ai or Cowork for non-engineers). Claude asks the questions an analyst would and writes a **proto-spec** from the org template: problem, proposed outcome, affected users and systems, constraints, open questions.
- The originator corrects it and commits it to an `intent/` folder in the product repo (a separate intent repo is only worth it when intent spans many repos). Non-Git people commit through a GitHub connector.
- The product owner accepts by merging or rejects by closing. **Measure:** time from first conversation to a committed intent (weeks down to hours), and how many intents survive into Design.

### Stage 2 · Design: requirements and design in one session

- Claude turns the accepted intent into `spec.md`, constrained by org skills for brand, security, compliance and UX, and **flags areas of concern**, especially where policies contradict each other. Front-end work can go intent → Claude Design mock → Claude Code.
- Run it by hand first, then codify it as an org slash command, then fire it automatically when the intent merges, so the product owner's first touch is the review.
- Flagged concerns go to their **named policy owners** before engineering sees the spec. A human always makes the build/no-build call.

### Stage 3 · Build

- **Plan mode as the default start.** The engineer gives Claude the intent and spec and asks for files that change, order of work, risks and the tests that prove it, then interrogates the plan: what could break, the riskiest step, the rejected options. Iterate until someone who never saw the conversation could implement from the plan alone. Commit it as `plan.md`, and if implementation departs from the plan, update it in the same commit (optionally enforced by a hook).
- **Auto mode** becomes the default for routine work once the guardrails mature: tight spec, small blast radius, code the tests already cover. Review shifts from watching edits to reviewing artifacts after longer autonomous runs.
- **Legacy systems:** for each artifact, name **one** source of truth: the repo, the legacy tool (Jira or ServiceNow, written back through MCP), or at minimum two-way linkage (record ID in the file, commit SHA in the record).
- **CLAUDE.md:** run `/init`, then cut it down to what a new joiner needs on day one: commands, conventions that matter, architecture, and a "things Claude gets wrong" section. The working rule: **when Claude makes the same mistake twice, the fix goes into CLAUDE.md.** Keep it under a page.
- **Skills as institutional knowledge:** pick one policy that's enforced inconsistently today, write it as a skill from the policy owner's source of truth, test that it triggers when you phrase the task in different ways, and have the owner sign off on every change.
- **A skill is an advisory control; a hook is the deterministic one behind it.** Build-phase hooks block protected paths, run formatter and linter, keep credentials out of the diff, and must stay fast. Human-approval hooks belong at deploy gates, not mid-build, or a person ends up blocking every parallel session.
- **Parallel sessions and subagents:** one engineer runs 2–3 sessions, each in its own worktree on a task that touches different files. Add more only while review keeps up. Recurring jobs become subagents in `.claude/agents/` (simplifier, verifier, researcher).

### Stage 4 · Test

- **Give Claude a feedback loop:** one command each for test, build and lint, with healthy output shown in CLAUDE.md, plus a quantifiable target. For bugs, **write the failing test first**, commit it, then fix without touching it, with a hook that blocks test-file edits during a fix. UI work closes the loop with a screenshot compared against the mock (2–3 rounds is normal).
- The feedback loop runs throughout the task. A verifier subagent is a separate final check in a fresh context, so the verdict isn't colored by the assumptions that produced the code.
- **Continuous evals in CI:** take 20–50 real tasks with accepted outcomes, write them as prompt plus checks, and run them nightly and on **every change to CLAUDE.md, skills or hooks**, because that configuration steers the agent and deserves regression tests. Each production incident adds a permanent eval.

### Stage 5 · Deploy

- **AI in the PR review loop:** managed Code Review or `claude-code-action` in your own CI. A `REVIEW.md` at the repo root defines the passes (bugs, security, compliance with spec/plan/design principles), what counts as Important versus a Nit, a nit cap, and what to skip. Findings never approve a PR on their own; branch protection still requires a code owner. Tagging `@claude` on a comment gets it fixed. Mistakes flagged twice go into CLAUDE.md.
- **Separation of duties survives:** the agent that wrote the code can't approve it.
- **Hooks as approval gates:** each required human approval (change sign-off, release authorization, protected paths) becomes a `PreToolUse` hook that allows, asks or blocks. A block must explain itself and the route to approval. Non-negotiable hooks go in **managed settings** that engineers can't disable.
- **CI/CD:** start with read-only judgment steps (`claude -p` to triage a failed build, summarize a flaky test, draft the changelog). Add write steps only behind existing gates; anything the agent writes arrives as a PR. Expose deploy, status and rollback as **MCP tools scoped per environment**. Autonomy is tiered: free in dev, prepare-only in prod with a release-manager hook. **Rollback should be the most rehearsed path in the pipeline.**

### Stage 6 · Maintain: closing the loop

- A **deterministic** script (no model) watches one metric with a stable baseline, such as CI failure rate, post-deploy 5xx or PR cycle time, using rolling mean/σ and Western Electric rules so slow drift trips as well as spikes.
- **Tiered response from versioned config:** at 1σ, log only. At 2σ, Claude diagnoses read-only. At 3σ, Claude may act, but only by opening a PR into the review gate or triggering a pre-approved runbook such as rollback.
- The diagnosis is written as a new `intent.md` and re-enters the loop. People triage the queue (fix, schedule or dismiss), and dismissals tune the bands.
- **Claude Tag** (in Slack) puts Claude in incident channels under its own identity. Small fixes arrive as PRs, and bigger ones become intent files.

## 🧩 Managed settings for a regulated enterprise

The most concretely useful block in the course is a managed-settings policy, pushed via MDM or the admin console, that no engineer, project file or flag can widen. In control terms:

- `permissions.deny`: keep `.env*` and secrets out of context, and block `WebFetch`/`curl`/`wget`. `permissions.allow` pre-approves the safe inner loop (`git`, `make build/test/lint`) so the deny list doesn't cause prompt fatigue.
- `disableBypassPermissionsMode` + `allowManagedPermissionRulesOnly`: nobody can widen the rules.
- `sandbox` with a **network domain allowlist**, `failIfUnavailable` and no unsandboxed retries. A tool-level `WebFetch` deny doesn't stop a shell command reaching the network; the OS-level sandbox does. Credential rules deny `~/.ssh` and `~/.aws/credentials` reads and strip tokens like `GITHUB_TOKEN` from the environment.
- `allowManagedHooksOnly`, `allowManagedMcpServersOnly`, `disableSideloadFlags`, `strictKnownMarketplaces`: hooks, MCP servers, skills and plugins come only from the org's approved sources. Note that `allowManagedHooksOnly` also disables project hooks, so the approval gate itself must live in the managed file.
- `requiredMinimumVersion`: refuse to start on a build the org hasn't assessed.

## ☘️ What I take from it

- **I already run half of this on myself.** This vault is the Stage 3 setup in miniature: `AGENTS.md` as CLAUDE.md, the DOX tree, skills for every workflow, and the indexes as the committed artifact each operation starts from. What's missing is **Stage 4**: there's no eval suite that reruns when I edit a skill. "Regression-test CLAUDE.md, skills and hooks like code" is the one play I'd adopt here first.
- **"Skill advises, hook enforces" is the cleanest framing I've seen.** If a rule has to hold every time (no test edits during a fix, no prod deploy without sign-off), it doesn't belong only in a skill.
- **The leading/lagging indicators are what make it sellable to clients.** Every play comes with a measure that's two Git timestamps or a PR-history query, so a PLSOFT engagement can show the pipeline getting faster from data the client already has.
- **Stage 6's 1σ / 2σ / 3σ tiers are a template for AI autonomy in general**: log, then diagnose read-only, then act only through a gate. The detection stays deterministic, and the model only ever sees a breach.
- Open question: the course is written for regulated enterprises with a platform team. For a two-person client repo the useful subset is plan.md, CLAUDE.md, the feedback loop and REVIEW.md. The managed settings and band monitoring are overkill until there's a team to govern.

## 📖 Further reading

- Original course: [The AI-Native SDLC Playbook (Claude Academy)](https://academy.claude.com/courses/ai-native-sdlc-playbook)
- Clipped copy: [yibie/ai-native-sdlc-playbook — book.md](https://github.com/yibie/ai-native-sdlc-playbook/blob/main/book.md)
- The course's own reading order for platform teams: Claude Code org setup → settings reference and managed-only keys → permissions → sandboxing → hooks → skills → plugins and private marketplaces → managed MCP → enterprise deployment (Bedrock, Vertex AI, Foundry) → OpenTelemetry monitoring → Compliance API
- [[AI Software Factory]]: the closed loop, open source

---
Template: [[templates/knowledge_note_info]]
