---
title: "AI Software Factory"
date: 2026-10-01
enableToc: true
openToc: true
tags: ["tool", "ai", "coding-agents", "harness", "sdlc", "orchestration", "testing", "open-source"]
type: tool
source: "_raw/processed/2026-10-01_coleam00ai-software-factory A repository that ships without anyone reading the diff.md"
agent-created: true
summary: "coleam00/ai-software-factory — lights-out repo setup on Archon's SDLC pack: GitHub issues in, verified and merged PRs out; MISSION.md out-of-scope list, journeys and holdout scenarios are the trust gates"
---
# AI Software Factory

🗒️ **[coleam00/ai-software-factory](https://github.com/coleam00/ai-software-factory)** by Cole Medin is a setup that makes a repository ship "without anyone reading the diff". You file a GitHub issue. The factory checks it against your mission, plans it, builds it, has something that didn't write the code judge it, and merges it. A scheduled regression run can re-test what already merged and file the bugs it finds. Some people call this a *dark factory*, after lights-out manufacturing.

🚀 The README's own framing: **the automation is the easy half; being able to trust a merge nobody read is the hard half.** Most of the repo exists for that second half.

It writes none of the AI steps itself. Every agent step is a workflow from the **SDLC pack of [[Archon]]**, pinned to an exact Archon revision. The factory supplies setup, scheduling, project context and the files only a human can write.

## Links
### Description
🧩 **The three files that are yours.** The setup agent drafts them, but they carry your intent:

| File | What it holds | Why it matters |
|---|---|---|
| `MISSION.md` | What the product is, and an **out-of-scope list** of things it must never become | The anti-drift gate. Without it every plausible, well-argued request is in scope, because almost any feature is defensible on its own. Aim for 5–7 entries that a reasonable person would actually ask for. |
| `harness/END-TO-END.md` | 2–5 user journeys in plain English, with the expected value named | Becomes runtime-verification input. "The page loads" passes against an app that returns an empty body forever. |
| `.factory/holdout/HOLDOUT.md` | Independent scenarios that combine behaviours and edge cases | A holdout the builder can read isn't hidden. Keep the private ones outside the builder's checkout. |

Journeys must describe what the product **does today**, never what it should do. A journey for behaviour that doesn't exist yet keeps the gate red forever, including for the change that would make it pass. A PRD is the exception, because it describes behaviour before the code exists.

🧩 **Calibration before trust.** The runtime check has to prove three things: the baseline verifies, a relevant deliberate fault **fails**, and a wrong-identity check comes back **inconclusive**. Assertions must exercise real transitions and non-empty user value, not seed the final state directly.

🧩 **The shared Archon workflows** (the factory runs them; it does not copy them):

| Need | Workflow |
|---|---|
| PRD → ordered backlog of issues (idempotent, first issue makes the app runnable end to end) | `archon-backlog` |
| Is this issue ready and in scope? | `archon-triage` |
| Issue → plan → implement → review → PR (runs its own triage) | `archon-ship` |
| Implement an existing plan or repair a PR | `archon-deliver` |
| Review / project checks | `archon-review`, `archon-validate` |
| Drive the running app and record evidence; prove verification catches deliberate defects | `archon-verify-runtime`, `archon-verify-runtime-suite` |
| Re-test merged behaviour, diagnose regressions | `archon-regress` |
| Recheck, dedupe and optionally publish discovered bugs | `archon-discoveries` |
| Check PRs and CI, merge per approval mode | `archon-merge-queue` |
| Roll the default branch onto the service and read the revision back | `archon-deploy` |
| All of the above as one lap | `archon-lifecycle` |

### Download or use
The install is a prompt you paste to your coding agent in the target repo. It clones the factory, runs `python ~/ai-software-factory/bin/factory.py init`, configures Archon for your agent and model tiers (Sonnet for small/medium, Opus for large is the suggested start), and interviews you about the three files. The agent should ask at most four questions, each with its proposed answer pre-filled, so the cheapest reply is "yes".

Needs: git, Python 3.10+, `gh` authenticated with the `workflow` scope, a GitHub remote, a coding agent, `bun` and `uv`.

```bash
python factory/consumer.py doctor
python factory/consumer.py run archon-ship --input target=https://github.com/OWNER/REPO/issues/1 --detach --json
python factory/consumer.py run archon-backlog --input prd=<path> --input publication=approve
python factory/consumer.py approve <run-id> --comment "Approved"
python factory/consumer.py halt          # block new launches; unhalt to resume
```

Scheduling stays **off** until you've watched one issue complete a full lap. Then `.factory/schedule.json` names a workflow, `consumer.py tick` submits one run, and `.factory/loop.sh` repeats it every five minutes without overlapping ticks. The scheduler never chooses work itself. Lifecycle takes the oldest open issue that has no factory state label and no open PR.

On a server it runs as a systemd timer. The example unit sets the three things a root service otherwise lacks: `HOME` (for `gh` credentials and `~/.archon`), `PATH` (`bun`, `uv` and `claude` live under the user's home) and `IS_SANDBOX=1` (Claude Code refuses to run unattended as root without it). The Claude token goes in a mode-600 env file, never in the unit.

## Reasoning for
This is the closest thing I've seen to an open-source implementation of the **Stage 6 closed loop** in Anthropic's [[AI-Native SDLC Playbook]]: issues and regressions come in, independent verification gates sit between stages, and humans review at the gates instead of starting each stage. The playbook describes the loop in enterprise terms. This repo makes it runnable on one Linux box.

What I'd steal even without running the factory:

- **The out-of-scope list as a machine-readable control.** I've watched agents "helpfully" grow client projects in exactly the direction this list blocks. It belongs in every client repo's AGENTS.md.
- **A deliberate fault must fail.** A verification step you haven't seen go red proves nothing. It's the same "make the test fail first" discipline the playbook asks for on bug fixes, applied to the whole runtime check.
- **The builder must not read the holdout.** The README says plainly that naming a folder "holdout" doesn't make it private.

⚠️ Caveats: the gate is only as good as the journeys and holdout you write. The README says so itself: a green gate means the machine-checkable layer is intact, **not that the product is good**, and it doesn't judge taste. It also doesn't invent a backlog. Merge approval starts gated and discovery publication starts in preview mode, which is the right default. Cost isn't covered beyond "instrument your tokens on day one" and "start with one small issue". Everything depends on a pinned Archon revision, so an upgrade means pulling the repo and rerunning `init`.

## Alternatives considered
- **[[Archon]] on its own**: the same workflows, run on demand without the mission, journeys, holdout and scheduler around them.
- **[[Loop Engineering]]**: Cole Medin's own argument for deterministic harnesses over free-running loops; the factory is that argument taken to its end state.
- **[[Orca]]**: the opposite stance. A human steers a fleet of agents in parallel worktrees and reviews every diff. Use Orca while you're still learning what your gates should be.
- **Claude Code in CI (`claude-code-action`) plus branch protection**: the playbook's Stage 5 setup. You get AI review and fixes on PRs, but no intake, holdout or deploy loop.

## Resources
- 🔗 Repo: [github.com/coleam00/ai-software-factory](https://github.com/coleam00/ai-software-factory)
- 📄 [docs/first-hour.md](https://github.com/coleam00/ai-software-factory/blob/main/docs/first-hour.md) · [docs/server-cheat-sheet.md](https://github.com/coleam00/ai-software-factory/blob/main/docs/server-cheat-sheet.md) · [docs/incidents.md](https://github.com/coleam00/ai-software-factory/blob/main/docs/incidents.md) · [migration guide](https://github.com/coleam00/ai-software-factory/blob/main/template/factory/MIGRATION.md)
- 🔗 Archon SDLC pack pin: [template/factory/pack.json](https://github.com/coleam00/ai-software-factory/blob/main/template/factory/pack.json)
- 📖 Related: [[Archon]] · [[AI-Native SDLC Playbook]] · [[Loop Engineering]] · [[Harness Engineering]] · [[Orca]] · [[Claude Code]]

---
Template: [[templates/tool]]
