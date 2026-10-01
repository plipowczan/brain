---
title: "Jev Engineering for Coding Agents"
date: 2026-09-29
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "coding-agents", "harness", "context-engineering", "token-optimization", "cost-optimization", "orchestration"]
type: knowledge-note
source: "_raw/processed/2026-09-29_Jev-Engineering-for-Coding-Agents.pdf"
agent-created: true
summary: "Diogo Almeida's (TypeSafe) harness thesis: design a coding agent as if there were no KV cache — typed state, per-query context, routing priced per context rebuild"
---

# Jev Engineering for Coding Agents

## 🗒️ Description

A 12-page working note (September 2026) that synthesizes design notes by **Diogo Almeida**, founder and CEO of **TypeSafe AI**, on how to build a coding agent around **Jev**, TypeSafe's decision model. The PDF is an independent compilation: it says it is not affiliated with or endorsed by TypeSafe, and the design notes reached the compiler second-hand. I archived it in `_raw/processed/`.

**What Jev is** (checked against launch coverage, not just the PDF): TypeSafe announced it on 2026-09-15 after two years in stealth, with $40M in funding. Jev is a "System One" model. You hand it a piece of state plus a list of typed questions, and it returns typed answers — a choice from a set you supplied, a score on a rubric, or a yes/no — each with a calibrated probability. It generates the whole output in one parallel pass, which is where the quoted 70–500 ms latency comes from. It is not a code-writing model. It is a decision layer that sits next to one. (The PDF spells the yes/no answer type "noul"; that is a typo.)

The thesis in one line: **a coding agent is a while loop around a model, and the loop is not where the leverage is. The leverage is in what the loop puts in front of the model on every turn.**

**Provenance caveats.** The token-share table below is an illustrative estimate, not a measurement. Model prices are the list prices the notes used and may be stale. The one hard external number (the FastContext read/search share) I checked against the paper.

## 🔗 Links

- [[Harness Engineering]] · [[Harness Engineering in Practice]] — the discipline this note argues about; Jev is a proposal for what a harness should decide per turn
- [[Context Engineering]] · [[Progressive Disclosure]] — the "visibility ladder" and tiered tool disclosure are progressive disclosure made per-query
- [[DOX — Self-Documenting AGENTS.md]] — per-folder AGENTS.md is a manual version of "conditional instructions"; this vault's code layer already does it
- [[Agent Skills]] · [[SkillWeaver — Compositional Skill Routing]] — skills vs. tool lists, and routing intent to the right tool
- [[Token Optimization for Claude Code]] · [[Headroom]] · [[OmniRoute]] — the "batteries" (Headroom, RTK) the notes want built in natively
- [[Structural Retrieval for Code]] · [[GrepRAG]] · [[Graft]] — retrieval is the biggest token bucket, so this is where the savings are
- [[Swarm Research — Orchestrating Coding Agents]] · [[Loop Engineering]] — sub-agent parallelism and goal loops
- [[AI Agent Security]] — programmable permissions and security-aware routing
- [[Claudex Loop]] — cross-model review, one of the background patterns
- [[Claude Code]] — the harness I actually run; several of these ideas already exist in it in weaker form

## 🚀 The organizing question

> How would you design a coding agent if LLMs had no KV cache?

The KV cache is why agents are built as **append-only transcripts**. Reusing a cached prefix is cheap. Changing anything early in the context invalidates the cache and forces the model to reprocess everything after it. That one economic fact shapes almost every agent design decision, usually without anyone saying so. The notes call it **the tyranny of the KV cache**.

Imagine the cache away and two things happen. A state-explicit design becomes possible, where context is **assembled per turn rather than accumulated**. And it becomes clear why intuitively right ideas, like routing easy work to a cheap model, fail in practice.

The four starting assumptions:

1. Coding agents are simple, especially the agentic part: a loop, a model, a handful of tools.
2. The best parts of existing agents can be reused. Frontier models are all available through APIs, open source supplies inspiration and even UI components, and only a few areas (e.g. MCP auth) carry real complexity.
3. The cost advantage of first-party agents may be shrinking as usage drifts toward pay-as-you-go API pricing.
4. **Some capabilities can only be built natively.** They can't ship as a plugin to someone else's agent because they need control over how context is assembled on every turn. This is the thesis.

## 🧩 Where Jev sits: the per-turn questions

The harness hands Jev the current state (goal, context, rules, available actions, previous actions) plus a predefined question. Jev returns a typed answer the harness can validate, threshold and branch on without parsing prose. Every native feature below is one of these questions, asked thousands of times per session.

| Decision point | Question to Jev | Typed answer |
|---|---|---|
| Context | How visible should this chunk be for this query? | choice: hide / short / long / full |
| Cache | Reuse the cached prefix or rebuild? | yes/no + probability |
| Routing | Can this subtask leave the frontier model? | choice + cost estimate |
| Tools | Which tool fits this intent? | ranked choice, top-k |
| Permissions | Should this command run? | allow / ask / deny |
| Security | Which files will this task touch? | sensitivity score |

## 🧩 Six design choices current agents inherit

| Symptom | Why it exists | What it costs |
|---|---|---|
| 1. Routing fails | Handing back to the large model reprocesses the context | Mixed routes cost more than staying on the frontier model |
| 2. Tools crowd the context | Schemas must sit in the system message | Tokens spent on irrelevant tools; weaker tool selection |
| 3. Compaction | One shared state assumed for all future turns | Query-blind compression loses what matters later |
| 4. Sub-agents are rare | Choosing what context to pass in and merge back is hard | Little automatic parallelism |
| 5. Restarts | Stateful transcripts corrupt over time | Relevant old state discarded along with the bad |
| 6. Batteries debate | Every built-in costs permanent context | Forced choice between ease and power |

A few of these are worth expanding:

- **Tool calling is a weird tradeoff.** Tools are declared up front with full schemas whether or not they're relevant, which eats context and still doesn't produce smart selection. The working hypothesis: models struggle with **high cardinality** (many tools at once) plus **off-policy tool calling** (usage patterns unlike training). That may be why skills (short description, detail deferred) often beat raw tool lists and MCP servers.
- **Compaction compresses blind.** It makes sense only if every future turn wants the same state. Generic compression is hard and lossy. Query-aware compression is easy: if you know the next question, you know what to keep. *A summary written before the question is known will reliably throw away something the question needed.*
- **Sub-agents are "meh"** because deciding which parent context to pass in and which findings to merge back is expensive and error-prone, so the model avoids it.
- **Restarting** throws away good state with bad. With addressable state you could start clean and reload only the still-relevant chunks on demand.

## 🧩 The routing arithmetic

The intuitive plan is to let a frontier model plan, hand execution to a cheaper model, and bring the frontier model back to review. The notes price it with list prices of Opus $5 in / $25 out and Sonnet $3 / $15 per million tokens. X = context tokens, Y = generated output, Z = extra tokens read during the work (command output, file reads).

| Path | Cost terms | Total |
|---|---|---|
| **Pure Opus** | generate 25·Y + read 5·Z | **25Y + 5Z** |
| **Opus → Sonnet → Opus** | Sonnet loads context 3·X + Sonnet generates 15·Y + Sonnet reads 3·Z + Opus reloads what changed 5·(Y+Z) | **3X + 20Y + 8Z** |

With a plausible session shape of X = 0.65, Y = 0.12, Z = 0.23: **pure Opus 4.15 vs routed 6.19**. Staying on the frontier model costs about two-thirds of the route that was supposed to save money. The routed path loses whenever the session is long (large X), whenever the work reads much more than it writes, or both.

**The lesson is not that routing is wrong. Routing priced per token is wrong. Price it per context rebuild.** Routing only pays when the harness can hand the cheaper model a small, purpose-built context instead of the full transcript, and when the return trip doesn't force the frontier model to reread everything the helper produced.

## 🧩 Where tokens actually go

Estimated share of processed tokens in a typical CLI coding-agent session (input-heavy view, so rereads count every time). **Illustrative, not measured:**

| Subtask | ~Share | Note |
|---|---|---|
| Reading file contents | 30–40% | Largest bucket; files re-read as context |
| Searching the codebase | 10–18% | grep, glob, listings; noisy output |
| Command output | 10–20% | Stack traces and logs balloon on failure |
| System prompt, tool schemas, AGENTS.md | 5–12% | Fixed overhead paid on every turn |
| Conversation replay | amplifier | Why everything above is counted repeatedly |
| Reasoning and planning | 5–15% | Higher on hard debugging |
| Writing and editing code | 4–10% | Diffs and `str_replace` edits are compact |
| Explaining to the user | 2–5% | Terse by design in CLI agents |

**Writing code, the thing a coding agent exists to do, is one of the smallest line items.** Reading, searching and command output together are roughly two-thirds.

The independent data point holds up. Microsoft's **FastContext** paper (arXiv 2606.14066) reports that in GPT-5.4 trajectories, reading and searching are **56.2% of all tool-use turns and 46.5% of the main agent's total tokens**. Their fix is a 4B read-only explorer sub-agent that returns file paths and line ranges instead of file dumps. It cut main-agent tokens by up to 60% and improved resolution by up to 5.5% in Mini-SWE-Agent. Conclusion: **the biggest efficiency gain is smarter retrieval**, not a better model or a better diff format.

## 🧩 The proposed harness, feature by feature

### Programmable permissions

Claude's auto mode decides with a classifier. The notes go further: permissions as programmable queries, with deeper inspection where stakes justify it. For example, read the contents of a Python or shell script before running it instead of approving the command name alone.

```
policy "exec":
    deny  if command touches ~/.ssh or .env*
    deny  if script contents contain network egress
          and task.scope != "deploy"
    ask   if command writes outside repo root
    allow if command in read_only_set
    allow if tests/ and exit code is expected
```

### The harness as tool router

Instead of exposing every schema, the model describes its intent in plain text. The harness uses a sequence of typed Jev calls to pick the best tool (or top few) and constructs the arguments. The model never holds hundreds of schemas, and a wrong argument type becomes a validation error rather than a silent failure.

### Meta-attention: context as a decision

The central proposal. For every user query the harness asks Jev two things:

1. **Is the previous context still good?** Reuse the KV cache, or rebuild from scratch because it will be cheaper and better? An explicit, cost-aware decision instead of a default.
2. **How do I build a context with everything relevant and nothing else?**

In its simplest form that's a yes/no per chunk: each tool-call input and output, each piece of reasoning, each user exchange. The later version is a **visibility ladder**:

| Chunk | Visibility for *this* query |
|---|---|
| grep output, 2,400 lines | SHORT SUMMARY — 12 hits |
| test log, failing run | LONG SUMMARY — trace + cause |
| file: `auth/session.ts` | FULL — relevant to the query |
| old plan, superseded | DON'T SHOW |

This keeps the idea behind compaction and removes its main flaw. **Compaction compresses once, before it knows the question. The ladder compresses per query, after it knows.** A 2,400-line grep result can be twelve relevant hits for one question and invisible for the next, without ever being deleted from state. A side idea: heatmap which part of a grep output is relevant, then filter it down to whatever the budget allows.

### Routing and sub-agents, revisited

Once the harness can build a small relevant context for a subtask, routing works again. The cheap model doesn't load the whole session, and its result merges back as a **scored chunk** rather than a transcript the frontier model must reread. The same mechanism unblocks sub-agents: the notes guess that much of today's sub-agent cost is deciding what context to pass. Make that cheap and automatic, and sub-agents get used far more. It also opens a user-facing dial: spend more for faster or better, or run conservatively.

- **Extreme parallelism** brings concurrent-systems problems: synchronization, inter-agent messaging, write collisions. The suggestion is shared state with locks. **Explicit typing of reads vs. writes** is what keeps it tractable, because read-only tasks never contend.
- **Deduplicating goals.** In goal-driven loops (`/goal`), register every subtask as a subgoal and dedupe it against all previous subgoals before spawning. Work already done or in flight never launches twice.

### Tools and skills from first principles: tiered disclosure

A model can't propose an action it doesn't know exists, so it needs a cheap map of everything. That map doesn't have to live in the system message.

1. **Tier 1: snippets.** One line per capability, loaded when relevant; hundreds of tools.
2. **Tier 2: schema on demand.** Full arguments for the chosen few (like a tool-search tool).
3. **Tier 3: docs.** The manual, for a one-off query.

The requirement that ties it together: **none of it corrupts the context once it's no longer needed.** If a built-in costs nearly nothing until used, an agent can ship hundreds of tools and thousands of doc pages, and the batteries debate disappears. Side benefit: near-zero-cost integrations are a co-marketing channel.

**Better batteries.** Many community tools promise to help agents and don't. The notes cite a tool-output compressor and guess the cause: models don't natively understand these tools. A native harness can ship a first-party prompt per tool (effectively a built-in skill or sub-agent), and its clean context keeps the tool's custom logic from poisoning the session.

### Conditional instructions

AGENTS.md loads in full today. The proposal: load sections **conditionally**.

- Current task touches `*.tsx` → load `style-guide.md`
- Working inside `billing/` → load `billing/GOTCHAS.md` (the notes say *every subdirectory should have a footguns file*)
- Writing prose → load voice samples plus a list of don'ts

This differs from skills. **Skills mean "do this now." Conditional instructions mean "keep this in memory somewhere."** The second kind needs a property skills lack: **immunity to compaction**. A skill loaded early in a long session eventually gets summarized out; a condition-bound instruction reloads whenever its condition holds. The same need shows up in ordinary chat: "summarize" should pull in my preferred format, "write in my style" should pull in samples.

- **Structured skills** would carry behavioral changes, not just instructions — like Claude Code skill hooks, but able to **attach and detach** with the triggering condition. Today a hook, once added, stays for the whole session.
- **Recursive language models** (A. Zhang, 2025): hold more agent state as named variables instead of transcript text.

### Security-aware routing

Routing today is framed around difficulty and cost. The notes add a third axis: **trust**. Some open-weight models served by low-cost providers are dramatically cheaper, but data sent to some of those endpoints may not stay private. So estimate which kinds of files a subtask will touch and route by policy:

| Files likely touched | Policy | Eligible models |
|---|---|---|
| Public docs, open-source deps | open | any, cheapest first |
| Application code | standard | vetted providers |
| Secrets, env, infra config | restricted | first-party frontier only |
| Proprietary research code | custom | excludes named vendors |

Once routing is policy-driven, preferences like "avoid vendor X for our own model research" become **configuration rather than discipline**.

### Background processing on shared retrieval

An emerging pattern across popular agent workflows is **read-only background tasks** that extend normal coding work:

- HTML pages that update in parallel as work proceeds
- "Understanding, not generation, is the new bottleneck" — an ELI5 skill that explains a system in a few big pictures and very few words
- Generating evals in the background
- A small deployed progress page with screenshots and notes, checkable from a phone during a long run
- Mirroring live traffic to a candidate model and auto-generating evals for about a day before switching
- Cross-model review, e.g. one vendor's agent reviewing another's work

They are all read-only functions of the current codebase state. Finding what's relevant to a change is the expensive part. If that **retrieval is done once and shared** by every background task, running many of them becomes cheap. Given that retrieval dominates the token budget, sharing it is the largest single saving available.

### The batteries shortlist

| Project | Role | Native angle |
|---|---|---|
| headroom | context compressor | a classifier checks the compression kept the needed facts |
| rtk | tool-output compressor | first-party prompts so the model understands it |
| ast-grep | structural search | load the manual once, generate N queries, filter by relevance |
| ast-outline | structural outline | hierarchical calling: pick the subtree to inspect |
| fastcontext | repo-exploration sub-agent | route to it, or replace its search with structure |
| fff | path and content search | in-memory index, frequency-ranked, faster than ripgrep in long sessions |

## ☘️ What I take from it

- **The routing math changed how I think about "cheap model for easy work."** Mid-session hand-offs that carry the full transcript cost more than staying on Opus. What works is what the Explore/research sub-agents in my own setup already do: a narrow brief in, a compact answer out. That is routing priced per context rebuild.
- **This vault already runs two of the ideas by hand.** The DOX tree (one `AGENTS.md` per code folder, read-before-edit) is conditional instructions without the automation, and the `_indexes/` protocol is progressive disclosure. The per-directory GOTCHAS file is worth copying straight into client repos.
- **Tiered disclosure is already visible in Claude Code.** Skill descriptions are tier 1, deferred tools loaded through a tool search are tier 2. The gap is that nothing un-loads.
- **Retrieval is where I should spend optimization effort.** Structural retrieval ([[Graft]], LSP) and output compression ([[Headroom]], RTK via [[OmniRoute]]) attack the biggest bucket. A terser agent voice attacks the 2–5% one.
- **Security-aware routing is directly relevant to PLSOFT client work.** "Client code never goes to a cheap third-party endpoint" should be a routing policy, not something I remember to do.
- Open question: this is a founder's argument for why his product matters. The diagnosis (six symptoms, where tokens go) stands on its own; whether Jev is the right decider is a separate claim the PDF can't settle.

## 📖 Further reading

- Source PDF: *Jev Engineering for Coding Agents — The TypeSafe Founder's Blueprint for Building with Jev* (independent synthesis, September 2026), archived at `_raw/processed/2026-09-29_Jev-Engineering-for-Coding-Agents.pdf`
- [Jev: System One models for Prod, not God — with Diogo Almeida (Latent Space)](https://www.latent.space/p/jev)
- [TypeSafe launches Jev for AI decisions inside software (The Rundown AI)](https://www.therundown.ai/news/typesafe-jev-ai-decisions-software)
- [What is Jev (2026)? TypeSafe AI's System One model (DigitalOcean)](https://www.digitalocean.com/resources/articles/what-is-jev)
- [FastContext: Training Efficient Repository Explorer for Coding Agents (arXiv 2606.14066)](https://arxiv.org/html/2606.14066v1) · [microsoft/FastContext-1.0-4B-RL on Hugging Face](https://huggingface.co/microsoft/FastContext-1.0-4B-RL)

---
Template: [[templates/knowledge_note_info]]
