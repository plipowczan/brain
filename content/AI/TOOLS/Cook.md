---
title: "Cook"
date: 2026-11-22
enableToc: true
openToc: true
tags: ["tool", "ai", "agent-skills", "claude-code", "codex", "coding-agents", "design", "video", "prompts", "open-source", "mit"]
type: tool
sources: ["_raw/processed/2026-11-22_Leonxlnxcook Give your agent a target, a bar and time, then let it cook.md", "_raw/processed/2026-11-22_How I prompt AI to build good looking demos.md"]
agent-created: true
summary: "Leonxlnx/cook — Leon Lin's agent skill for visual builds that must match reference images or videos (3D worlds in code, films, launch videos, games, UI): up-front intake, a numeric bar per dimension, a time floor, rounds of stills scored by zero-context critics, no final render before you approve; MIT"
repo: "https://github.com/Leonxlnx/cook"
---

# Cook

🗒️ [Leonxlnx/cook](https://github.com/Leonxlnx/cook) is an [[Agent Skills|agent skill]] by Leon Lin (@LexnLin) for ambitious visual builds that have to hold up next to references: 3D worlds in code, films, launch videos, games and UI. Its tagline: give your agent a target, a bar and time, then let it cook. It packages the method from his article, which I wrote up in [[How I Prompt AI to Build Good-Looking Demos (Leon Lin)]].

## Links

### Description

🧩 **The Cook Loop**, one intake and then a long autonomous loop:

1. **Intake.** Every question asked once, up front, each with a default. After that the agent does not ask again, so it can run through the night.
2. **Target.** The references are the minimum bar, not inspiration. Each reference becomes a shot with notes on what to take from it; motion references are analysed frame by frame.
3. **Bar.** A number per dimension: composition, light, colour, materials, detail near and far, motion. For example 99.9% for stills or at least 9/10 for a video. Models rate themselves too high, so your own estimate calibrates every score.
4. **Rules.** Zero external assets by default, an explicit policy for sound and assets, a slop ban list, colours neither grey nor oversaturated, offline rendering on weak GPUs.
5. **Time.** A floor for demos (at least 8 hours; done after 2 means something is wrong), a hard cap for small jobs, and usage pacing so the run never hits a plan limit and stalls.
6. **Loop.** Build, render stills at the reference shots, compare side by side, score with zero-context critics, fix the weakest part, log the round in `cook/ROUNDS.md`, repeat.
7. **Gate.** Stills go to you after every round, without pausing. No final render before you approve.
8. **Ship.** The first frame is the thumbnail, the best scene first, no text on screen, licensed music credited, and a public repo with honest numbers if you want one.

All run state lives in a `cook/` folder in the project, so the agent can resume after a context reset or hand the run to another agent.

**What's inside:** `SKILL.md` (the loop), five reference files (`intake`, `target-and-bar`, `loop-and-critics`, `rules`, `ship`), two templates (`brief.md` for writing your own prompt, `ROUNDS.md` for the round log) and `scripts/side-by-side.mjs`, which builds one comparison image with the reference on the left and the render on the right, one row per shot.

### Download or use

Any Agent Skills host, through the [[Vercel Skills|skills CLI]]:

```
npx skills add Leonxlnx/cook
```

Manual locations: `~/.claude/skills/cook` for [[Claude Code]], `~/.codex/skills/cook` for Codex. Invoke it as `/cook` in Claude Code or `$cook` in Codex. It also triggers on phrases such as "go cook", "iterate until it matches" or "match the references 99%". The side-by-side script needs Node 18+ and ffmpeg on PATH; everything else is Markdown.

Quick start: attach the reference images and ask, for example, for the ancient Greek world in three.js matching the nine attached references. For full control, fill in `templates/brief.md` and send that instead.

## Reasoning for

For a showcase build where the look matters more than the cost: a demo for a talk, a hero video for a product page, a 3D scene for a client pitch. What I like is that the bar is concrete. The agent must put its stills next to the references, a critic with no context scores them, and nothing expensive is rendered before a human says yes.

The limits, from the article and the README:

- **It is built for long runs.** His Greek world took about 45 hours, 55 subagents and an API-equivalent \$1.8k–2.3k on a Max plan. Without a subscription and a real reason, that is a lot for a demo.
- **The critics are models.** Zero-context critics reduce the builder's bias but share their model's taste, so the score is a signal, not a measurement. The README admits models rate themselves too high and asks you to calibrate.
- **Single author, young repo.** Created 2026-10-31 and not pushed since (checked 2026-11-22: MIT, 798 stars). The demo numbers in the README are the author's own, the same as in his article.

Not installed or tried by me.

## Alternatives considered

- [[Stage Show — Benji Taylor's Demo Design Skill (AI LABS)]] — narrower: animated faux-UI demos for landing pages, done when a filmed contact sheet and layout scripts pass
- [[Impeccable]] — design language and an anti-slop linter for interfaces, no long autonomous loop
- [unlazy](https://github.com/Leonxlnx/unlazy) — the author's completion-discipline skill (runnable acceptance gates); his README says cook sets the target and the bar, unlazy makes sure the work behind it gets done
- `/goal` or other long-run modes ([[Loop Engineering]]) — keep an agent going, but set no visual bar; cook works with or without them

## Resources

- Repo: https://github.com/Leonxlnx/cook
- Method write-up: [[How I Prompt AI to Build Good-Looking Demos (Leon Lin)]]
- Built with it: [athenaion](https://github.com/Leonxlnx/athenaion) (ancient Greek world), [procedural-alpine-lake](https://github.com/Leonxlnx/procedural-alpine-lake), [shanshui](https://github.com/Leonxlnx/shanshui), [golden-temple](https://github.com/Leonxlnx/golden-temple), [afterglow](https://github.com/Leonxlnx/afterglow); all demos at [leonlin.de/demos](https://leonlin.de/demos)
- Hub note: [[AI UX Design Tools]] · map: [[AI Tools Map]]

---
Template: [[templates/tool]]
