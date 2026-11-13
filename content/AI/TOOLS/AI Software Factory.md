---
title: "AI Software Factory"
date: 2026-10-01
enableToc: true
openToc: true
tags: ["tool", "ai", "coding-agents", "harness", "sdlc", "orchestration", "testing", "source-available"]
type: tool
source: "_raw/processed/2026-10-01_coleam00ai-software-factory A repository that ships without anyone reading the diff.md"
agent-created: true
summary: "coleam00/ai-software-factory — you plan the release (PRD), agents on Archon's SDLC pack build and independently review/merge, you test in staging (explicitly 'not a dark factory'); MISSION.md out-of-scope list, journeys and fenced holdouts are the trust gates; no licence"
status-checked: 2026-11-13
project-status: active
agent-reviewed: 2026-11-13
repo: "https://github.com/coleam00/ai-software-factory"
---
# AI Software Factory

> [!success] Status check 2026-11-13 — active
> **Verdict:** Main has 82 commits since 2026-10-01, the last on 2026-10-27, 17 days ago.
> **Last release:** no releases (commits only); no tags · **last commit:** 2026-10-27 · **licence:** No license. There is no LICENSE file at the root, the README states no license and GitHub reports none.
> **Repo:** https://github.com/coleam00/ai-software-factory
> **Changed since this note:** Since 2026-10-01 the project has been reframed: the README now says humans plan the release and test it in staging, and explicitly that this is not a dark factory, so the note's 'ships without anyone reading the diff' framing is outdated. The flow now starts from a PRD (archon-holdouts writes hidden holdout scenarios, archon-backlog slices issues), the recommended scheduled workflow is archon-loop with a deterministic merge gate, and scheduling moved to Archon's native triggers (.factory/loop.sh is gone).

🗒️ **[coleam00/ai-software-factory](https://github.com/coleam00/ai-software-factory)** by Cole Medin is a setup with a simple split: **you plan the release, the factory builds it, you test it in staging.** You start from a PRD for the next release (a proof of concept, or a small epic for an existing app), or you file issues against an app that already exists. The factory slices the PRD into linked issues and works out what can run in parallel. Then it loops: an agent picks an issue and builds it, and two reviewers that didn't write the code decide whether it merges. Merged work lands in staging, where you use the whole release like a customer would. Anything that's off becomes a new issue, and the factory picks it up.

The framing changed after I first wrote this (2026-10-01). Back then the README pitched a repo that ships "without anyone reading the diff", what some people call a *dark factory*, after lights-out manufacturing. It now says outright **"This is not a dark factory"**. The middle runs on its own, but humans stay at the two ends: deciding what to build, and judging in staging whether what got built is right.

🚀 The README's own framing, unchanged: **the automation is the easy half; being able to trust a merge you didn't read is the hard half.** Most of the repo exists for that second half.

It writes none of the AI steps itself. Every agent step is a workflow from the **SDLC pack of [[Archon]]**, pinned to an exact Archon revision (as of 2026-11-13: `1cfb8fc5` on Archon's `factory/sdlc-on-dev` branch). The factory supplies setup, scheduling, project context and the files only a human can write.

⚖️ **No licence.** The repo has no LICENSE file and GitHub reports none, so by default all rights are reserved. GitHub's terms let you view and fork it on GitHub, but nothing grants reuse of the code. I treat it as a reference design to learn from, not something to copy into a client repo. There are also no releases or tags, only commits on `main` (last on 2026-10-27, with work continuing on branches into November).

## Links
### Description
🧩 **The three files that are yours.** The setup agent drafts them, but they carry your intent:

| File | What it holds | Why it matters |
|---|---|---|
| `MISSION.md` | What the product is, and an **out-of-scope list** of things it must never become | The anti-drift gate. Without it every plausible, well-argued request is in scope, because almost any feature is defensible on its own. Aim for at least five entries that a reasonable person would actually ask for; the setup agent proposes seven for you to strike. |
| `harness/END-TO-END.md` | 2–5 user journeys in plain English, with the expected value named | Becomes runtime-verification input. "The page loads" passes against an app that returns an empty body forever. |
| `.factory/holdout/HOLDOUT.md` | Independent scenarios that combine behaviours and edge cases, written from the product document, not the issues | A holdout the builder can read isn't hidden. Only the `holdout-writer` subagent drafts it (via `archon-holdouts`). It's committed so the team shares it, and **fenced**: a Claude Code hook (`.factory/hooks/holdout_fence.py`) refuses every other agent any call that would show a scenario, `.ignore` keeps Grep/Glob out, and any leak the hook spots is logged to `holdout-exposures.jsonl`. Codex or Pi get no fence, so there you keep the holdout outside the repo and pass its path. |

Journeys must describe what the product **does today**, never what it should do. A journey for behaviour that doesn't exist yet keeps the gate red forever, including for the change that would make it pass. A PRD is the exception, because it describes behaviour before the code exists.

🧩 **Calibration before trust.** The runtime check has to prove three things: the baseline verifies, a relevant deliberate fault **fails**, and a wrong-identity check comes back **inconclusive**. Assertions must exercise real transitions and non-empty user value, not seed the final state directly.

🧩 **The shared Archon workflows** (the factory runs them; it does not copy them). This is the README's list as of 2026-11-13:

| Need | Workflow |
|---|---|
| PRD → ordered backlog of issues (idempotent, first issue makes the app runnable end to end) | `archon-backlog` |
| Write holdout scenarios no builder sees, from the PRD or an escaped defect | `archon-holdouts` |
| Issue → triage → planning → delivery rounds → review → PR | `archon-ship-block` |
| Project checks | `archon-validate` |
| Drive the running app and record evidence; prove verification catches deliberate defects | `archon-verify-runtime`, `archon-verify-runtime-suite` |
| Re-test merged behaviour, diagnose regressions | `archon-regress` |
| Recheck, dedupe and optionally publish discovered bugs | `archon-discoveries` |
| Check PRs and CI, merge per approval mode (reads `required_checks` and `protected_paths`) | `archon-merge-queue` |
| Roll the default branch onto the service and read the revision back | `archon-deploy` |
| **Keep a backlog moving unattended**: one move per lap (finish an open PR, build a simple item, or ship a complex one), a black-box app check, a reviewer and a deterministic merge gate; 1–8 parallel laps | `archon-loop` |
| Step back on a slower schedule: steer the backlog, unstick work, record metrics, add holdouts for escaped defects | `archon-manager` |

`archon-loop` is now the recommended scheduled workflow. The October version of this note had `archon-lifecycle` ("all of the above as one lap") in that slot. `archon-ship` still appears in the command examples, and the README still says ship runs its own triage, but triage, deliver, review and lifecycle are no longer in the main table.

🧩 **Two more gates in `harness/harness.config.json`:**
- `required_checks` — free private GitHub repos can't report branch protection, so you name the CI jobs a merge needs (or `"none"`). Left empty on such a repo, the merge queue holds every PR.
- `protected_paths` — the loop's merge gate refuses any PR that touches these paths, so the owner has to make that change. That's because a reviewed delivery once rewrote `engineering.md` and merged. New installs protect `MISSION.md`, `harness/**`, `.factory/**`, `factory/**`, `.claude/settings.json`, `.ignore` and a few more. Existing installs need the key added by hand.

### Download or use
The install is a prompt you paste to your coding agent in the target repo. It clones the factory, runs `python ~/ai-software-factory/bin/factory.py init`, configures Archon for your agent and model tiers (Sonnet for small/medium, Opus for large is the suggested start), and interviews you about the three files. The agent should ask at most four questions, each with its proposed answer pre-filled, so the cheapest reply is "yes".

Needs: git, Python 3.10+, `gh` authenticated with the `workflow` scope (`gh auth login -s workflow`, then `gh auth setup-git`), a GitHub remote, a coding agent, `bun` and `uv`. The installer brings its own pinned Archon source.

After setup the agent asks one question that picks the path: an existing codebase (you file issues and write holdouts for the area first) or a PRD (holdouts from the PRD, then a backlog):

```bash
python factory/consumer.py doctor
python factory/consumer.py run archon-holdouts --input source=<path to the PRD>
python factory/consumer.py run archon-backlog --input prd=<path to the PRD> --input publication=approve
python factory/consumer.py run archon-loop --input merge=approve   # one lap; the reviewer approves instead of merging
python factory/consumer.py run archon-ship --input target=https://github.com/OWNER/REPO/issues/1 --detach --json
python factory/consumer.py approve <run-id> --comment "Approved"
python factory/consumer.py halt          # block new launches; unhalt to resume
```

Scheduling stays **off** until you've watched one lap complete. Then `.factory/schedule.json` names a workflow (recommended: `archon-loop`), its inputs and `parallel`, the number of laps at once (1–8, default 1). Scheduling now goes through **Archon's native triggers**. `schedule install` writes an Archon trigger binding, and `--apply` registers the OS timer: launchd on macOS, a hidden Task Scheduler task on Windows (it runs only while you're logged on), a systemd user timer on Linux. Each tick runs `schedule fire`, which calls `archon trigger fire` and then `archon workflow wake`. The wake resumes runs paused on a pending CI check or a provider usage limit. The old `.factory/loop.sh` and `consumer.py tick` are gone. The scheduler still never chooses work itself. Each `archon-loop` lap's pick agent reads the whole board and picks one move, and parallel laps claim their item with a comment so they don't collide. `archon-manager` runs every few hours above the loop. `pause`/`unpause` stops timer laps without stranding one that's in flight.

On a server it runs as a systemd user service and timer printed by `schedule install` (`bin/bootstrap-ubuntu.sh` installs the toolchain on Ubuntu). The unit carries what a timer otherwise lacks: `PATH` (`bun`, `uv` and `claude` live under the user's home; it's captured from the shell that ran the install), `IS_SANDBOX=1` (Claude Code refuses to run unattended as root without it) and `EnvironmentFile=-%h/.factory-env`, a mode-600 file for the Claude Code token, never the unit or the repo. A root user timer also needs `loginctl enable-linger root` to keep running after logout.

## Reasoning for
This is the closest thing I've seen to a public implementation of the **Stage 6 closed loop** in Anthropic's [[AI-Native SDLC Playbook]]: issues and regressions come in, independent verification gates sit between stages, and humans review at the gates instead of starting each stage. The reframe makes the match closer. Humans now own the two ends, the PRD and acceptance in staging, instead of being written out entirely. The playbook describes the loop in enterprise terms. This repo makes it runnable on one Linux box. ("Public", not "open-source": there's no licence, see above.)

What I'd steal even without running the factory:

- **The out-of-scope list as a machine-readable control.** I've watched agents "helpfully" grow client projects in exactly the direction this list blocks. It belongs in every client repo's AGENTS.md.
- **A deliberate fault must fail.** A verification step you haven't seen go red proves nothing. It's the same "make the test fail first" discipline the playbook asks for on bug fixes, applied to the whole runtime check.
- **The builder must not read the holdout.** Naming a folder "holdout" doesn't make it private. The repo now enforces it with a hook fence and counts leaks, but only on Claude Code.

⚠️ Caveats: the gate is only as good as the journeys and holdout you write. The README says so itself: a green gate means the machine-checkable layer is intact, **not that the product is good**, and it doesn't judge taste. It also doesn't invent a backlog: the backlog comes from your issues or from a PRD that `archon-backlog` slices into issues you approve. The first lap runs with `merge=approve` (the reviewer approves instead of merging) and backlog publication with `publication=approve`, which is the right default. On a free private GitHub repo you must set `required_checks`, or the merge queue holds everything. Cost isn't covered beyond "instrument your tokens on day one" and "start with one small issue". Everything depends on a pinned Archon revision, so an upgrade means pulling the repo and rerunning `init`. And there's no licence, so reuse isn't granted.

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
