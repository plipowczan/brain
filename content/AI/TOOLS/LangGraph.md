---
title: "LangGraph"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "orchestration", "workflow", "llm", "python"]
type: tool
agent-created: true
summary: "Graph-based framework for stateful, controllable LLM agent workflows — nodes, edges, persistence, human-in-the-loop; evaluated for agent orchestration in TTTR"
---

# LangGraph

A framework (from the LangChain team) for building **stateful, controllable** LLM agent workflows as graphs. You model an agent as nodes (steps/tools/LLM calls) connected by edges (including conditional and cyclic ones), with shared state threaded through. Unlike a linear chain or a fully autonomous loop, the graph makes control flow explicit — which branches run, when to loop, where a human approves — and supports persistence so long-running agents can pause, resume, and recover.

## Links

### Description

- **Graph model** — nodes + edges (conditional, cyclic) for explicit agent control flow.
- **Shared state** — typed state passed and updated across nodes.
- **Persistence / checkpointing** — durable state so workflows resume after interruption.
- **Human-in-the-loop** — pause for approval/edits mid-run.
- **Streaming & observability** — stream steps/tokens; pairs with LangSmith tracing.
- **Multi-agent** — compose supervisor/worker agent topologies.

### Download or use

```bash
pip install langgraph        # or: npm i @langchain/langgraph
```

- Site/docs: [langchain-ai.github.io/langgraph](https://langchain-ai.github.io/langgraph/)
- Repo: [github.com/langchain-ai/langgraph](https://github.com/langchain-ai/langgraph)

## Reasoning for

LangGraph featured in the [[Tech To The Rescue]] platform's agent layer — orchestrating multi-step agent workflows (alongside MCP for tool access) over the [[Next.js]] + Postgres stack. Its appeal in an enterprise-transition context is **control and auditability**: a tech-for-good org moving from ad-hoc automation to *governed* skills needs agent flows that are inspectable, resumable, and human-approvable, not opaque autonomous loops. The explicit graph + persistence model gives exactly that — which aligns with the engagement's theme of turning shadow-IT automation into owned, auditable systems. It's the orchestration counterpart to lighter skill frameworks like [[Agent Skills]].

## Alternatives considered

- **Plain [[Agent Skills]] / Claude Code orchestration** — simpler and often enough; LangGraph adds explicit state-machine control for complex, resumable flows.
- **CrewAI / AutoGen** — role/conversation-based multi-agent frameworks; more autonomous, less explicit control than LangGraph's graph.
- **Temporal** — durable workflow engine (general-purpose); more infra, not LLM-shaped out of the box.
- **[[Archon]] / [[Ruflo]]** — agent harness/orchestration tools in the vault; different layer (dev harness vs in-app agent runtime).

## Resources

- 📘 [LangGraph docs](https://langchain-ai.github.io/langgraph/)
- 🧩 [Persistence & human-in-the-loop](https://langchain-ai.github.io/langgraph/concepts/persistence/)
- 🔗 [[Agent Skills]] · [[Context Engineering]] — related agent design

---
Template: [[templates/tool]]
