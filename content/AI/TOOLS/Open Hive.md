---
title: "Open Hive"
date: 2026-11-27
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "multi-agent", "orchestration", "harness", "sales", "outbound", "open-source", "apache-2.0", "python"]
type: tool
sources: ["_raw/processed/2026-11-27_aden-hive-hive-repo.md", "_raw/processed/2026-11-27_open-hive-playbooks.md", "_raw/processed/2026-11-27_aden-hive-sample-prompts.md"]
agent-created: true
summary: "Aden's (YC) open-source runtime for colonies of agents: a persistent queen pilots one unit of work, saves the method as a skill, then a resumable playbook fans worker clones out over a shared SQLite tracker; Apache-2.0, plus a hosted GTM product with 16 public sales playbooks"
repo: "https://github.com/aden-hive/hive"
homepage: "https://www.open-hive.com/"
---
# Open Hive

Open Hive (OpenHive, repo `aden-hive/hive`) is Aden Technologies' runtime for "colonies" of AI agents that do business work; Aden is a Y Combinator company. You give a task to a **queen**, a long-lived agent with a role, memory and tools. She does the first unit of work herself, writes the method down as a skill, then a **playbook** fans the rest out to parallel **workers**, each writing one row to a shared **tracker** table. The hosted product sells this for go-to-market work. Its public [[Open Hive Sales Playbooks|playbook page]] is how I found it.

This note covers the tool. The transferable design ideas are in [[Pilot, Skill, Playbook — Open Hive's Fan-out Pattern]], and how they map onto my own agent repos is in [[Open Hive Playbooks — Fit for My Agent Systems]].

## Links

### Description

From the README, the architecture doc and the shipped skills (shallow clone of commit `6703b43`, 2026-11-17):

- **One execution primitive.** `AgentLoop` is the only unit. The queen is one loop with effectively unlimited turns. A worker is another instance with no persona, a narrower tool set and a fixed budget: **3 working turns plus 1 grace turn** that may only report or write the tracker, 30 tool calls a turn and 200 for its whole life. Workers can't spawn workers, can't see each other and can't talk to the user; they escalate only to the queen.
- **Orchestration is a tool call.** `run_worker` returns at once. Four workers run at a time by default and the rest queue. Each finished worker's report arrives in the queen's conversation as a new turn. Soft timeouts tell a worker to report; hard ones stop it, and it can be resumed later.
- **The tracker is the shared state.** It is one SQLite file per colony. The queen creates the tables and registers which columns workers may write; workers upsert one row per unit of work; the queen checks progress with read-only SQL. A task plan file, an event bus and a "reminder hub" that injects `<system-reminder>` context (in-flight workers, tracker snapshots, a nudge to turn a proven pilot into a playbook) do the rest.
- **Execute first, then systematize.** A queen starts as a plain agent. When the work turns out to be parallel, recurring or long, she proposes a colony and you confirm. Then she pilots one row, writes a skill (`write_skill`), and runs a playbook: a deterministic Python script that calls `converge(...)` over the undone rows, with retries, backoff, per-account rate lanes, a circuit breaker and a dead-letter list. Re-running it resumes, because "what's left" is a fresh query.
- **Queens are personas.** Thirteen ship as YAML profiles: traits, a "past wound", behaviour triggers and default tool categories. The Head of Outbound is modelled on Chris Voss and pushes back on "let's just email more people". Six are active by default: Growth, RevOps, Content, Lead Generation, Outbound, Brand & Design.
- **Memory is plain files.** A reflection step writes markdown notes, a selector injects the relevant ones before each turn, and past conversations are recalled by keyword search. Aden reports 88.4% on LongMemEval-S and 82.0% on LongMemEval-M with its own setup.
- **Tools.** In-process shell, files, ripgrep, PDFs, scraping, ECharts/Mermaid, CSV and image generation; any MCP server through `hive mcp add`; tool categories per queen, loaded on demand with `search_tools`. A browser extension drives **your own logged-in Chrome**, with one tab group per worker and Chrome profiles as separate accounts.
- **Human in the loop.** The queen asks with `ask_user` and parks. Turning a chat into a colony needs your confirmation. **Sentinel**, opt-in per colony, watches a parked queen: an LLM classifier decides `continue`, `needs_human` or `done`, and escalates through the Hive inbox, Telegram or Slack.
- **Reliability lives in the loop.** State is parked to disk on every wait and resumed after a crash. Tool results over 30,000 characters go to files, sessions compact, stall and loop detection run, and every agent has budgets.
- **Any model** through LiteLLM, including a Claude Code or Codex subscription and local Ollama; workers can run a cheaper model than the queen.

Things the docs say plainly that are easy to miss:

- **No spend limit in money yet**, only turn and tool-call caps (README FAQ).
- **Goal constraints are only prompt text.** A "hard" constraint such as "never send more than 3 messages to the same person per week" is written into the prompt as MUST; it is "not a runtime enforcement layer". For real limits the docs point to tool allowlists, budgets and the credentials you grant.
- **The shared team CRM is not in the open-source build.** The `hive-crm` CLI, which claims prospects so two colonies don't contact the same person, ships only in hosted builds (a test asserts the open build has none). The playbooks' "colony database" and "shared CRM" steps assume it.
- **Sentinel prefers to continue.** Its classifier prompt treats "shall I continue?" and "should I proceed to the next batch?" as needless permission-seeking. It says the queen "has standing authority to finish its goal without asking" and tells the classifier to prefer `continue` when unsure. That is the opposite default to a per-batch approval gate.
- **The full prompt library is closed.** The app's prompt library is served from a cloud catalogue (`GET /v1/community-prompts`). The repo keeps the category list (≈500 prompts across 11 categories routed to queens) and a separate file of 499 one-paragraph sample prompts. I picked the ones worth adapting in [[Open Hive Sample Prompts — Shortlist]].

Repo facts (GitHub API, 2026-11-27): Apache-2.0, Python, ~11.2k stars, ~5.6k forks, created 2026-01-12, release v1.0.15 on 2026-11-17.

### Download or use

- Self-hosted: `git clone https://github.com/aden-hive/hive.git`, then `./quickstart.sh` (or `.\quickstart.ps1` on Windows). Needs Python 3.11+, Node 20+ and git; the dashboard opens at `http://127.0.0.1:8787`. From PyPI: `pip install "aden-hive[tools]"`, then `hive open`. Everything lives under `~/.hive`, with API keys stored encrypted.
- Hosted: [open-hive.com](https://www.open-hive.com/). Launch pricing on 2026-11-27: Starter \$20/mo (1,000 Hive Credits, 5 concurrent workers, "15+ working GTM playbooks"), Pro \$50/mo (3,000 HC, a 24/7 cloud VM, Apollo/LinkedIn/X/SMS integrations), Business from \$10k/year for fully managed campaigns ("we handle domains, accounts, platform governance & messaging").

## Reasoning for

I have not run it. What I take is the shape, not the product:

- **Pilot one unit, save the method, then fan out** is the clearest version I've seen of what my skills do by hand. My agents usually design the method and the batch in one go and find the bug N times.
- **A tracker table that workers write and the orchestrator queries** is the piece my file-based setups lack for batch work. A markdown file per prospect is fine for 20 and poor for 500 rows with status columns.
- **The idempotency rule** in its delegation skill is the one I'd copy first: a resumed worker may repeat a side effect, so the sending step itself must check "already done?" before acting. The tracker row, not the worker's report, is the truth.
- **Its LinkedIn skill is an honest field report.** It covers shadow DOM, Trusted Types, the Lexical composer and silent spam filters, with limits of 25 messages a day to new connections and 100 invitations a week. It also says "Do not attempt" messages to non-connections and never to log in by automation. The same file says to "dare to break" the limits if the user confirms, and LinkedIn's User Agreement forbids the whole approach ([[Open Hive Sales Playbooks]]).
- I would not run its outreach on my accounts. The hosted Business tier runs campaigns "for you" on domains and accounts they manage, and Sentinel's default pushes past approval questions. Both are the opposite of the control my repos enforce.

## Alternatives considered

- **[[Paperclip]]** — a control plane for a company of coding agents: org chart, tickets, budgets, heartbeats. Paperclip governs many agents over time; Open Hive fans one agent's method out over many rows.
- **[[Hermes Agent]]** — one self-improving personal agent with a messaging gateway; no worker fan-out or shared tracker.
- **[[CrewAI]] / [[LangGraph]]** — frameworks where you design the agents or the graph up front; Open Hive shapes the colony at runtime and coordinates through a table instead of edges.
- **[[Archon]]** — deterministic YAML workflows for coding work with approval gates; closer to Hive's playbook layer than to its queens.
- **[[Claude Code]] with my own skills** ([[Agentic Systems]]) — what I use now. Subagents give the fan-out, but there is no built-in tracker, dead-letter list or per-account lane.
- **[[Clay]]** — the spreadsheet-first GTM data platform; Clay owns the data layer, Open Hive the agent layer.

## Resources

- [GitHub — aden-hive/hive](https://github.com/aden-hive/hive) · [docs](https://docs.open-hive.com/) · [playbooks](https://www.open-hive.com/playbook) · [pricing](https://www.open-hive.com/pricing)
- [[Pilot, Skill, Playbook — Open Hive's Fan-out Pattern]] — the transferable design ideas
- [[Open Hive Sales Playbooks]] — the 16 public playbooks and the patterns in them
- [[Open Hive Playbooks — Fit for My Agent Systems]] · [[Open Hive Sample Prompts — Shortlist]]
- [[Building Always-On Agents (Anthropic)]] — Anthropic's generic version; Hive's triggers, Sentinel and tracker map onto its timers, permissions and memory
- [[AI Tools Map]]

---
Template: [[templates/tool]]
