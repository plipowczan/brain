---
title: "Promptfoo"
date: 2026-07-24
enableToc: true
openToc: true
tags: ["tool", "ai", "llm", "evaluation", "testing", "security", "red-teaming", "cli", "open-source", "mit"]
type: tool
source: "https://github.com/promptfoo/promptfoo"
agent-created: true
summary: "CLI + library for evaluating and red-teaming LLM apps — declarative test configs, side-by-side model comparison, and vulnerability scanning; MIT, now part of OpenAI"
---
# Promptfoo

`promptfoo/promptfoo` — a **CLI and library for evaluating and red-teaming LLM apps**. Two jobs: (1) **evals** — declarative configs that run your prompts/agents/RAGs across models and assert on the outputs, with side-by-side comparison of GPT / Claude / Gemini / DeepSeek etc.; (2) **red teaming / pentesting** — automated vulnerability and jailbreak scanning for AI systems. Built for the command line and CI/CD, so quality and safety checks become part of the pipeline rather than manual vibe-testing. Used by OpenAI and Anthropic; MIT-licensed; as of 2026 the company is **part of OpenAI** (project stays open source).

In the [[LLM App Engineering Stack]] this is the **eval + security lane**, the pre-ship / CI counterpart to [[Langfuse]]'s runtime observability: Promptfoo catches regressions and vulnerabilities *before* deploy; Langfuse watches production *after*.

## 🔗 Links

### Description
- Repo: https://github.com/promptfoo/promptfoo
- Site: https://www.promptfoo.dev · Docs: https://www.promptfoo.dev/docs
- Red teaming: https://www.promptfoo.dev/docs/red-team/
- License: **MIT** (Node.js `^20.20.0` or `>=22.x`; Node 20 support ends 2026-07-30 — move to Node 24 LTS)

### Download or use
```bash
npm install -g promptfoo
# or: brew install promptfoo  |  pip install promptfoo  |  npx promptfoo@latest
promptfoo init --example getting-started
promptfoo eval        # run the eval matrix
promptfoo view        # web UI for results
```
```bash
promptfoo redteam init && promptfoo redteam run    # vulnerability scan
```

## 🗒️ Description

### 🧩 Evals
- **Declarative configs** — YAML defines prompts, providers, test cases, and assertions (exact-match, LLM-as-judge, similarity, custom JS).
- **Matrix comparison** — one run scores N prompts × M models; results as a diffable table / web view.
- **CI/CD-native** — exit codes + machine-readable output gate merges on eval regressions.

### 🧩 Red teaming
- **Automated attacks** — jailbreaks, prompt injection, PII leakage, harmful-content probes, and OWASP-LLM-style checks.
- **Scoped to your app** — generates adversarial inputs against your actual prompts/agents, not a generic benchmark.

## ✍️ Reasoning for
- **Regression safety** — prompt changes silently break behaviour; a Promptfoo eval suite in CI turns "seems fine" into a pass/fail gate (pairs with [[Claude Code]]-driven dev loops).
- **Security posture** — the red-team module is the cheapest way to probe an agent for injection/leakage before it faces real users.
- **Model selection** — objective side-by-side scoring beats anecdote when choosing between providers for a task.

Weak points: eval quality depends on the assertions you write (LLM-as-judge has its own noise); red-team coverage is broad but not a substitute for a real security review; config sprawl on large suites.

## Alternatives considered
- **[[Langfuse]] evals** — runtime, trace-attached eval + datasets; Promptfoo is CLI/CI-first and pre-deploy.
- **DeepEval / Ragas** — Python-native eval frameworks (Ragas is RAG-specific); Promptfoo is language-agnostic + red-teaming.
- **OpenAI Evals** — provider-tied; Promptfoo is cross-provider.
- **Garak** — dedicated LLM vulnerability scanner; narrower than Promptfoo's eval+redteam combo.

## 🔗 Resources
- Docs: https://www.promptfoo.dev/docs
- Getting started: https://www.promptfoo.dev/docs/getting-started/
- OpenAI acquisition note: https://www.promptfoo.dev/blog/promptfoo-joining-openai/

---
Template: [[templates/tool]]
