---
title: "Guide a product from mission to measurable value for users."
source: "https://www.uxruler.com/"
author:
published:
created: 2026-05-08
description: "UX RULER is an open-source UX skill for AI agents. It helps move from an idea or repo to a clearer decision, metric, and best next step."
tags:
  - "clippings"
---
**Process map**

Define the change the product should create, who it may matter to, and why it is worth testing now.

**Question**

What change do we want to create, who might it matter to, and why now?

**Artifact**

Product thesis: audience, problem area, tension or opportunity, and reason to act.

**Signal**

Market tension, a repeated problem, weak alternatives, or strong timing are visible.

Define the market, buyers, adopters, blockers, channels, and demand signals before moving to the person doing the task.

**Question**

Is there a large and reachable enough segment with a reason, budget, or influence over adoption?

**Artifact**

Market map: segments, size, channels, buying and adoption roles, alternatives, and positioning.

**Signal**

Segment size, reach, demand, or the cost of current alternatives can be estimated.

Research the concrete person doing the task: what they do, what blocks them, what they want, and what conditions they work in.

**Question**

What is the concrete user trying to do, and what blocks or frustrates them?

**Artifact**

User profile: jobs, pains, gains, context, and current workarounds.

**Signal**

Behavior, feedback, interviews, logs, or support show the problem's frequency and cost.

Derive the need from user evidence and decide whether it justifies a feature, prototype, or more research.

**Question**

Which need is strong enough to justify building, prototyping, or more research?

**Artifact**

Need statement: the user wants \[gain\], tries to \[job\], but is blocked by \[pain\].

**Signal**

Need strength, task impact, confidence level, and the decision can be named.

Prepare the secure, stable environment and integrations that must exist to deliver the promised value.

**Question**

What must work technically for value to be reliable, secure, and measurable?

**Artifact**

Technical plan: data, architecture, integrations, quality, risks, and operational requirements.

**Signal**

Data, performance, reliability, security, and cost support the user need.

Turn the validated need into interaction, architecture, and interface based on the design system, so the user can understand and use them.

**Question**

How will the user discover, understand, operate, and remember the solution?

**Artifact**

Product map: user flow, prototype, key interaction, copy, and design system direction.

**Signal**

A test or prototype shows comprehension, task completion, low effort, and trust.

Plan launch, onboarding, communication, feedback, and metrics that show whether value truly reached the user.

**Question**

How will we deliver, communicate, and verify value after launch?

**Artifact**

Value plan: rollout, message, onboarding, feedback, usability test, and iterations.

**Signal**

Adoption, retention, task completion, satisfaction, and feedback show what to keep or change.

## Every decision shapes the user experience

Every stage of product work can be checked through four layers: whether we solve a real need, whether the experience is clear and efficient, whether the form engages the user, and whether the product fits who the user wants to become.

**Usefulness**

The product solves a real problem and answers a research-backed need, not just a feature idea.

Does the user receive value they actually need?

**Ergonomics**

The experience lets the user complete the task quickly, clearly, and without unnecessary cognitive effort.

Can the most important task be completed clearly and efficiently?

**Attractiveness**

The product is clear, engaging, and memorable, and the design system strengthens the character of the solution.

Does the user want to return to this experience?

**Identity**

The product fits who the user wants to be, what values they want to strengthen, and how they want to be seen.

Does the experience strengthen the image the user wants to build?

## Two ways to use it: new idea or existing product check

You can start from an idea, feature, empty repo, or working product. The skill helps name the decision first, then check context, available evidence, and the best next step.

### New idea or new repo

When you start from zero, the skill helps you avoid jumping straight to features. It first organizes the mission, audience, need, first value metric, and validation step.

- Helps choose or refine the product direction.
- Maps audience, user, and need before choosing features.
- Defines the first value metric, risks, and validation step.
- Can save product context in `PRODUCT.md`, a plan in `ROADMAP.md` and optional instructions in `AGENTS.md`.

### Existing product or feature

When the product already exists, the skill works like a practical decision audit. It checks whether features trace back to real needs, what is known from the repo, feedback, or data, and what is worth doing next.

- Checks whether the feature has a clear user, problem, and value.
- Connects available data, feedback, analytics, architecture, and rollout with decisions.
- Points out missing decisions, metrics, research, and risks.
- Helps decide whether to develop, narrow, measure, defer, or test.

## Product memory that humans and agents can return to

Key decisions can be saved in the repo so the next person or agent knows what has already been decided, what is an assumption, and what should be checked next. Files are created as work on the project progresses: from PRODUCT.md and ROADMAP.md to more detailed artifacts when they are needed.

Minimal root4 files
- AGENTS.mdagent
- PRODUCT.mdmap
- ROADMAP.mdplan
- README.mdlink
Root as maturity layer7 files
- CLAUDE.mdagent
- DESIGN.mddesign
- tokens.jsontokens
- CHANGELOG.mdrelease
- SECURITY.mdrisk
- CODEOWNERSowner
- CONTRIBUTING.mdopen
Tool instructions4 files
- .cursor/rules/product-ux.mdcCursor
- .github/copilot-instructions.mdCopilot
- .github/ISSUE\_TEMPLATE/feedback.ymlfeedback
- .github/ISSUE\_TEMPLATE/feature\_request.ymlrequest
product/00-mission5 files
- mission.mdwhy
- product-thesis.mdthesis
- principles.mdprinciples
- assumptions.mdrisk
- non-goals.mdboundaries
product/01-audience5 files
- market-map.mdmap
- segments.mdsegments
- competitors.mdalternatives
- positioning.mdpositioning
- channels.mdreach
product/02-user5 files
- research-plan.mdresearch
- interview-guide.mdguide
- user-profile.mdprofile
- jobs-pains-gains.mdJTBD
- insights.mdinsight
product/03-need4 files
- problem-statement.mdproblem
- opportunities.mdopportunities
- feature-hypotheses.mdhypotheses
- prd.mdscope
product/04-infrastructure12 files
- architecture.mdarch
- data-model.mddata
- permissions.mdauth
- openapi.yamlapi
- asyncapi.yamlevents
- schemas/folder
- observability.mdops
- slo.mdslo
- runbooks/folder
- threat-model.mdrisk
- adr/decisions
- adr/0001-template.mdADR
product/05-product9 files
- information-architecture.mdIA
- flows.mdflow
- interaction-patterns.mdUI
- design-system.mdsystem
- accessibility.mda11y
- content-guidelines.mdcopy
- empty-states.mdstate
- error-states.mdstate
- onboarding.mdstart
product/06-value6 files
- rollout.mdrollout
- release-notes.mdrelease
- feedback-plan.mdfeedback
- usability-test.mdtest
- survey.mdsurvey
- analytics-events.mdevents
product/07-ux-test3 files
- ux-scorecard.mdscore
- test-plan.mdplan
- metrics.mdmetrics
product/08-decision-measurement14 files
- assumptions.mdassumptions
- non-goals.mdboundaries
- decision-log.mdlog
- risk-register.mdrisk
- north-star-metric.mdNSM
- metrics-tree.mdtree
- experiments/tests
- experiments/0001-template.mdexp
- flags.jsonflags
- analytics/data
- analytics/tracking-plan.yamlplan
- analytics/events/folder
- feedback/usability-test.mdtest
- feedback/survey.qmdsurvey

## Add the skill to your agent

Choose a tool, copy the instruction, and start with the first prompt. You can install the skill personally or add it locally to a project repo.

### Codex

The simplest path: use the built-in \`skill-installer\` and provide the URL to the skill folder in the public repo.

[Install](https://www.uxruler.com/install.html#codex)

```shell
Use $skill-installer to install this skill:
https://github.com/making-mike/uxruler/tree/main/uxruler

Then restart Codex to pick up new skills.
```

### Claude Code

Install as a personal skill. Claude detects skills from \`~/.claude/skills/\` after restarting Claude Code.

[Install](https://www.uxruler.com/install.html#claude)

```shell
REPO="https://github.com/making-mike/uxruler.git"
TMP_DIR="$(mktemp -d)"
git clone --depth 1 "$REPO" "$TMP_DIR/uxruler-repo"
mkdir -p ~/.claude/skills
rm -rf ~/.claude/skills/uxruler
cp -R "$TMP_DIR/uxruler-repo/uxruler" ~/.claude/skills/
rm -rf "$TMP_DIR"

# restart Claude Code
```

### Repository

A team option: the skill becomes part of a specific repo and can be committed with the project.

[Install](https://www.uxruler.com/install.html#projectSkill)

```shell
REPO="https://github.com/making-mike/uxruler.git"
TMP_DIR="$(mktemp -d)"
git clone --depth 1 "$REPO" "$TMP_DIR/uxruler-repo"
mkdir -p .claude/skills
rm -rf .claude/skills/uxruler
cp -R "$TMP_DIR/uxruler-repo/uxruler" .claude/skills/
rm -rf "$TMP_DIR"

git add .claude/skills/uxruler
```

## Choose an example and copy the first prompt

You do not need to know the whole process. Choose an example, copy the prompt, and name the decision you want to make. The agent will guide the conversation, research, recommendation, and possible repo update.