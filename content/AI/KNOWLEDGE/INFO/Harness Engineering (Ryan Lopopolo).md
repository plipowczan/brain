---
title: "Harness Engineering (Ryan Lopopolo)"
date: 2026-06-24
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "coding-agents", "context-engineering", "harness", "claude-code", "codex"]
type: knowledge-note
source: "_raw/processed/2026-06-24_yt-c8bE0cj7vHY_ryan-lopopolo-harness-engineering-how-to-build-software-when.md"
source_url: "https://www.youtube.com/watch?v=c8bE0cj7vHY"
video_id: "c8bE0cj7vHY"
channel: "AI Native Dev"
duration: "29m47s"
published: 2026-06-19
transcription: captions
agent-created: true
summary: "Ryan Lopopolo (OpenAI/Codex) at AI Native DevCon — make what 'a good job' means legible, then just-in-time surface it to steer agents; shift interventions RIGHT, encode every mistake as a static guardrail."
---

# Harness Engineering (Ryan Lopopolo)

## 🗒️ Description
Conference talk by **Ryan Lopopolo** (OpenAI, Codex) at AI Native DevCon, day one. He claims to have coined the term *harness engineering*. Note the attribution conflict: the concept note [[Harness Engineering]] credits Viv Trivedy / HumanLayer's lineage — treat both as parallel origin stories of the same idea.

The thesis: with the December GPT-5.2 / Opus 4.5 generation, code production hit "singularity levels" and stopped being the constraint on software engineering. What remains is steering a team of humans + agents. **Harness engineering** is making the context around *what it means to do a good job* legible, then just-in-time surfacing it to the agent over its trajectory to steer and refine output back to baseline.

> "Harness engineering is making context around what it means to do a good job legible and then just-in-time surface[d] to the agent over the course of its trajectories in order to steer and refine its output."

## 🔗 Links
- [[Harness Engineering]] — the concept note; this talk is a primary source for it (different attribution)
- [[Context Engineering]] — broader discipline; harness is the practical loop
- [[Loop Engineering]] — long-running headless runs, autocompaction-aware loops
- [[Agentic Engineering]] — Karpathy's verifiability framing; same "raise the floor, hold the bar" idea
- [[Karpathy Method]] — spec / verifier / environment layers map onto the three phases below
- [[Progressive Disclosure]] — why you don't jam every rule into agents.md
- [[Self-Improving Company]] — "dream over the data every night" / burn tokens not headcount
- [[Specification-Driven Development]] — writing NFRs down as the net-new 2026 function
- [[Vibe Coding]] — acceptable for gross local-only guardrail tooling
- [[Claude Code]] · [[Agent Skills]] — the harness primitives in practice

## 🧩 What remains scarce
Code production is cheap now ("a prompt → a PR or six"). Three foundational limits survive:

1. **Human time** — the fundamentally scarce resource. He maxes ~3 concurrent sessions; more throughput *requires* removing his own synchronous attention from the process.
2. **Human + model attention** — attention "must sum to one." Thrashing an agent with conflicting/overbearing requirements degrades performance. Go more parallel; fork more tasks; accept more/smaller PRs.
3. **Context window** — still scarce even as it grows. With GPT-series autocompaction he runs tasks 6–36h without thinking about it, but the window gets *obliterated and rebuilt* across compactions — you must structure context to survive that.

## 🧩 The net-new 2026 function: write it down
Agents have no standup, no durable memory, no battle scars. The non-functional requirements that humans absorb by osmosis must be made **legible as text** — because text is what the LLM craves and what drives token prediction.

- Writing down "what a good job is" is a genuinely *new* function for a software team in 2026.
- Not enough to write it — it must be **pulled into context at the right time** without thrashing the agent or killing its room to reason and be creative.
- **Prune latent space.** Agents have seen every permutation of every choice in training; your job is telling them *which* choices to make. A Jupyter prototype and "add a new DB index type" are different choice-sets — make the distinction (prototype vs staged production rollout with A/B tests + feature flags) legible.
- **All code is prompts.** Every token fed to the agent is prompting, so the *whole repository* is a prompt. Unify on one pattern (e.g. a single OpenTelemetry stack) and the model transfers context across the codebase losslessly; six observability stacks force it to waste attention deciding "which is canonical here?"

## 🧩 Shift RIGHT, not left
Counter to normal DevOps "shift left." Lopopolo puts interventions **as far right as possible** to minimize his own synchronous time. The escalation ladder (cheapest signal → most durable):

1. Bad result → trash it, change the prompt, re-roll. (Not durable, not socialized.)
2. **Write it down** so it's reusable and shared.
3. Empower a **review agent to judge every diff** against the written guardrails.
4. Shift further left into **statically verifiable lints, guardrails, tests**.

> "I never want to give the same review feedback twice." — make every mistake something that is *just not possible*, not a point-in-time fix.

## 🧩 Three phases of context delivery per PR

### 1. Before — grounding (accept slowness)
Page in the global context up front: ground in the docs knowledge base + the ticket, spider ADRs and design docs to find blast radius, read the **critical user journeys** to keep a QA plan in mind. Slowness here is intentional.

### 2. The messy middle — just-in-time steering
The agent writes code, runs tools and tests. Exploit those tool calls to **just-in-time prompt-inject** and steer output back to baseline — *without* polluting the context window up front.

- **Tests/lints for agents differ from those for humans.** They assume the agent truncates tool output and respond well to **descriptive error messages that point to runbooks** for remediation → the agent **self-heals**.
- Tool-call outputs get **less weight during autocompaction**, so just-in-time correction is cheap and survives compaction better than front-loaded rules.
- Example: the classic outage from a **missing timeout + retry** on a cross-service call. No ESLint plugin asserts this — but code is cheap now, so *vibe a guardrail into place* with 100% coverage + table-driven tests, migrate the whole codebase, and surface the failure every time a new `fetch` is written.
- **Coarse structural tests as blunt hammers**: file line counts, "does a snapshot test exist." Requiring every React component to have a snapshot test with 100% branch coverage *forces* the model to decompose components, keep them pure, avoid prop drilling, and put hooks near the data — because that's the only way to satisfy the requirement.
- **Ban `any`/`unknown`** via ESLint except when parsing input at route handlers / the DB. 100% typed + 100% coverage makes type-probing junk fall out (untyped branches can't be exercised).

### 3. After — review & merge
The diff is now a **static artifact**, so point **many LLM-as-judge** reviewers at it. Treat the model as a teammate who must *convince you* to merge:

- Benefit of the doubt, **bias toward merge**; only block on P2-and-above issues.
- Require **evidence** like you would from a human: staging logs, screenshots, a **reproduction video** (computer use / browser use; or vibe up an Xvfb headless display + FFmpeg in Docker — "Codex can sling ffmpeg better than anybody in this room").
- Reviewer agents **collaborate over the PR thread** with the implementation agent (more text → realign the diff).

## 🧩 agents.md and review personas
- The most important thing in `agents.md` is a **numbered operating loop** the model runs every session (ground → spider history → check CUJs → execute).
- **Don't jam rules in** — it chops up latent space and stops the model spidering the codebase creatively.
- Instead, point to a **curated set of review personas** = bulleted guardrail lists, paged in by change category (backend, design system, etc.). Models naturally page the relevant persona files into context.
- This is cheap to evolve: have a Slack thread about a perf regression, then `@`-mention the agent → "yoink all of this into a PR that adds it to our static guardrails."
- Apply the same pattern to **product features / critical user journeys / why the app exists** — grounding the agent in user problems yields more aligned output.

## 🧩 Closing the loop (toward headless)
Systematize capturing *all* human feedback — every review comment, interrupt, agentic intervention, failed build, production exception. Each is a **signal that context was missing** to the implementation agent.

> "Slurp all this data up and dream over it every night, pointing a bunch of sub-agents at it" — distil better human prompting + missing guardrails, moving toward less human-interrupt-dependent, more headless operation.

**Vibe coding** is part of this: guardrail tooling that only affects local dev can be gross. It lets you operate like a **group/org tech lead** — no visibility into every keystroke, caring only about **invariants, interfaces, and whether components do what they say on the tin with high reliability.**

## ✍️ Quotes
- "Every bit of text that we feed them is in some sense prompting … all the code in the repository … is also prompts." [14:22](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=862s)
- "It's up to us to prune latent space to tell it which choices we want to make." [13:13](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=793s)
- "I never want to give the same review feedback twice." [11:08](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=668s)

## 📒 Takeaways
- Code is no longer the constraint; **human attention is** — design the harness to spend less of it.
- Make NFRs **legible text**, surfaced **just-in-time**, not front-loaded.
- **Shift right**: cheapest durable encoding wins; escalate prompt → written rule → review agent → static lint only as needed.
- Treat **the whole repo as a prompt**; aligning patterns reduces required attention.
- Every interrupt/failure is **missing context** — feed it back into guardrails until you can go headless.

## 📖 Further reading/watching
- [Talk: Harness Engineering — How to Build Software When Humans Steer and Agents Execute](https://www.youtube.com/watch?v=c8bE0cj7vHY) (AI Native Dev, 2026-06-19)
- [[Harness Engineering]] — concept note with the HumanLayer / Viv Trivedy lineage and the CLAUDE.md/MCP/skills/sub-agents/hooks levers
- [[Harness Engineering in Practice]] — HOWTO applying this talk's playbook to my agentic projects
- Ryan's OSS where he applies these techniques: `artichoke/rand_mt` (Mersenne Twister in Rust)

---
Template: [[templates/knowledge_note_info]]
