---
title: "CrewAI"
date: 2026-07-24
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "multi-agent", "orchestration", "framework", "python", "open-source", "mit"]
type: tool
source: "https://github.com/crewAIInc/crewAI"
agent-created: true
summary: "Open-source Python framework for orchestrating role-playing autonomous agents — Crews (autonomous collaboration) + Flows (event-driven control); standalone, not built on LangChain"
---
# CrewAI

`crewAIInc/crewAI` — an open-source **Python framework for multi-agent orchestration**. You define agents with roles, goals, and tools, then compose them two ways: **Crews** (role-based agents collaborating autonomously) and **Flows** (event-driven workflows with precise, deterministic control, single LLM calls, and native Crew support). Deliberately **standalone** — a lightweight core, not a LangChain wrapper — which is its main pitch versus heavier frameworks.

In the [[LLM App Engineering Stack]] this is the **agent-orchestration lane**: when a task needs several specialised agents (researcher → writer → reviewer) rather than one big prompt. Pairs naturally with [[Instructor]] for typed tool outputs and [[Langfuse]] for tracing (CrewAI is a first-class Langfuse integration).

## 🔗 Links

### Description
- Repo: https://github.com/crewAIInc/crewAI
- Homepage: https://crewai.com · Docs: https://docs.crewai.com
- Learn (community courses, 100k+ certified): https://learn.crewai.com
- License: **MIT**

### Download or use
```bash
uv pip install crewai
uv pip install 'crewai[tools]'   # + built-in tool library
```
```python
from crewai import Agent, Task, Crew

researcher = Agent(role="Researcher", goal="Find facts", backstory="…")
task = Task(description="Research X", agent=researcher, expected_output="notes")
crew = Crew(agents=[researcher], tasks=[task])
print(crew.kickoff())
```

## 🗒️ Description

### 🧩 Crews vs Flows
| Primitive | Optimises for | Use when |
|-----------|---------------|----------|
| **Crews** | Autonomy + collaborative intelligence | Open-ended tasks where agents divide the work themselves |
| **Flows** | Precise, event-driven control | Production automations needing deterministic branching + auditability |

### 🧩 Why it exists
- **Purpose-built** for agent orchestration — clean primitives (Agent / Task / Crew / Flow) instead of general-purpose graph plumbing.
- **Production-leaning** — event-driven Flows, a tools ecosystem, and a commercial "AMP" control plane for teams that want hosted deployment/monitoring.
- Big community footprint (100k+ developers certified through its courses).

## ✍️ Reasoning for
- **Role decomposition** — for [[Agentic Systems]] where distinct personas beat a monolithic prompt, Crews express that directly.
- **Control when it matters** — Flows give the deterministic, event-driven backbone that pure-autonomous frameworks lack, which is what makes agent workflows shippable rather than demo-ware.
- Standalone core keeps the dependency surface (and the LangChain lock-in) small.

Weak points: multi-agent adds cost + latency + non-determinism — only worth it when a single-agent loop genuinely can't do the job; the AMP suite is commercial; role-based autonomy can wander without tight `expected_output` schemas.

## Alternatives considered
- **[[LangGraph]]** — graph-based, lower-level control; more flexible, more plumbing.
- **AutoGen (Microsoft)** — conversation-centric multi-agent; research-heavy lineage.
- **OpenAI Swarm / Agents SDK** — minimal handoff-based orchestration, tied to OpenAI's stack.
- **Single agent + tools** — the honest default; reach for CrewAI only when the task is genuinely multi-role.

## 🔗 Resources
- README: https://github.com/crewAIInc/crewAI
- Docs: https://docs.crewai.com
- Examples: https://github.com/crewAIInc/crewAI-examples

---
Template: [[templates/tool]]
