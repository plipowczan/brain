---
title: "Stage Show — Benji Taylor's Demo Design Skill (AI LABS)"
date: 2026-11-08
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "agent-skills", "claude-code", "design", "frontend", "animation", "methodology"]
type: knowledge-note
source: "_raw/processed/2026-11-08_yt-of628n5754g_head-of-design-at-x-s-new-claude-skill-is-insane.md"
agent-created: true
summary: "Stageshow, the skill where X's head of design Benji Taylor writes down his process for faux-UI landing-page demos (AI LABS video plus the author's page): seven planning-heavy steps, gold examples, a React kit and a film-and-contact-sheet check. Not run by me."
source_url: "https://www.youtube.com/watch?v=of628n5754g"
source_author_page: "https://benji.org/stageshow"
source_repo: "https://github.com/benjitaylor/skills"
video_id: "of628n5754g"
channel: "AI LABS"
duration: "12m16s"
published: 2026-11-07
transcription: captions
---

# Stage Show — Benji Taylor's Demo Design Skill (AI LABS)

## 🚀 TL;DR
- Stage Show is a skill by Benji Taylor (head of design at X) that makes **animated product demos for landing pages**. It is not a general design skill and does not build the rest of the page.
- Idea: taste is mostly small decisions repeated until you know which work. He wrote those decisions down as a seven-step process so the agent does not need his taste explained each time.
- The agent builds a **stripped-down working copy of one app screen**, not your real app, and plays a short scripted story on it (a cursor clicks, an item slides in).
- Unusual step: the agent **records the demo and lays the frames side by side on one sheet**, and a small program checks it for overflowing text and jumps. It cannot hand over until that passes.

## 🗒️ Description
Video by AI LABS (12:16, published 2026-11-07). They show the problem, the seven steps, installing the skill and a test on a music-beat studio app they had Claude build. The skill is spelled **Stageshow** (one word) by its author. I also ingested his page, https://benji.org/stageshow (archived as `_raw/processed/2026-11-08_Stageshow.md`), and the repo README, https://github.com/benjitaylor/skills (archived as `_raw/processed/2026-11-08_benjitaylorskills Skills for AI coding agents.md`). The video matches them. I did not install the skill or open its files, so the details below come from the video and those two pages, not from running it.

## 🧩 The problem it targets
- A plain screenshot on a landing page is too cluttered, so people skip it.
- A Claude-made animated demo usually draws a generic picture of your app in code and animates it. Benji names five failure modes: **bland** (requested style missing), **too much** (text and numbers everywhere), **wireframe** (grey boxes, no longer your app), **boxed** (whole app shrunk into a card), **flat** (nothing stands out).

## 🧩 The seven steps
1. **Placement.** Decide where the demo sits, still or animated, and its size. Phone and desktop are designed as two separate screens, not one shrunk.
2. **Look.** Read the app's colours, fonts and corner radius so the demo looks like the product, not a template.
3. **Story.** One action split into 3-5 moments, 10-16 seconds. When in doubt, keep the screen simple.
4. **Start from a real example.** The skill ships about 40 of Benji's own demos. The agent copies the closest one, because rules alone only got him so far.
5. **Fill the screen.** Only 3-7 real words on the whole screen; everything else is bars standing in for text (the fix for "too much").
6. **Motion.** Every movement needs a reason: the cursor moves in a curve, parts slide in rather than pop, the loop's last moment matches its first so no restart is visible.
7. **Self-check.** Record the demo, line up every moment on one sheet, run a small program for text that does not fit and for jumps between moments. Fix the biggest problem first, record again. Benji admits the check catches mistakes but not a boring idea, so a human still has to watch it.

## 🧩 From the author's page (benji.org/stageshow)
- **Install:** `npx skills add benjitaylor/skills --skill stageshow`. Works with Claude Code, Codex, Gemini, Grok Build. Start small: one interaction, one product, one size. Output is an ordinary React component. The repo says each skill carries its own licence and third-party asset notices.
- **Contents:** `SKILL.md` (the one idea, the five failure modes, the seven-step workflow, a table of gold examples), `references/` (craft, motion, framing, bento grids, looks and backgrounds, real products and brand marks, filming checklist, good/bad pairs, kit props), `examples/` ("dozens" of gold examples), `kit/` (small React parts: stage, windows and phones drawn from real geometry, frame-safe motion such as a number rolling only the changed digits) and `scripts/`.
- **The one sentence:** it reads as a real product, simplified to what the viewer needs, framed with intent, and every motion has a cause.
- **Scripts:** `film.mjs` films the demo, builds the contact sheet and reports what it can measure; `jumps.mjs` catches one-frame snaps a sheet misses; `layout.mjs` checks that text and controls fit their boxes. Playground: `npm install && npm run dev` in the skill folder, with every example and good-vs-bad pairs.
- **Stage model:** a stage is a canvas with a design size; contents are drawn from state and a script changes state beat by beat (`click`, `set`, `wait`, `move`). The cursor aims at things by name, parts stay mounted so they transition instead of popping, and a camera can push in on one area. Looks (theme, palette, how many real words) are props, and your own design tokens map onto the kit's colours, type and radii.
- **How he built it:** give a fresh agent the skill and a short prompt, give the same prompt to an agent without it, compare; when something looks off, write down why, update the skill and rerun from scratch. He calls it opinionated, much of it his taste. Same loop as in [[Skill Authoring Best Practices]].
- **Count discrepancy:** the video says about 40 demos; the page only says "dozens".

## 📒 Install and use (as shown in the video)
- Run the install command in the project terminal. It asks which agent to install for; by default it writes to `.agents/`, which Codex and others already read. You choose project-only or global (AI LABS chose project-only).
- The folder holds `SKILL.md`, a set of common app icons, reference files (for example Bento grid rules and styles) and a **playground** you open by asking Claude. The playground shows the scenes on phone and desktop, demos of well-known products (Notion, Excel, Google apps), parts to build from, and the reduced-motion still version.
- Call it by slash command and name, then ask for animations wherever needed. In their test the agent loaded the references, built sections matching the app, recorded and reviewed them frame by frame, and wrote a `rehearsal.md` handover (which of Benji's demos it started from, what changed, what was checked). It also animated pieces of the app (mixer, beat arrangement) in the features grid.
- Expect a few feedback rounds, as Benji does. Tell the agent what is wrong in plain words, then ask it to add that lesson to the skill.

## ☘️ Takeaways for me
- The transferable pattern is **write your decisions down, ship examples with the rules, and gate "done" on a mechanical check of the output**. That fits [[Skill Authoring Best Practices]] (examples beat rules, eval-first) and the verify-before-done habit in [[Agent Skills]].
- The record-then-inspect check for motion is a good idea for anything animated I make with [[HyperFrames]]: a contact sheet of frames catches what a final screenshot hides.
- It sits next to the design-direction skills in [[AI UX Design Tools]], [[Impeccable]] and [[UI UX Pro Max]]: those set overall look, Stage Show handles one narrow artefact. It reads brand tokens from the app, so a [[DESIGN MD Spec]] file would be the natural input.
- Possible use: a demo section for client landing pages in [[PLSoft]] / [[Qamera AI]] work, run from [[Claude Code]].

## ⚠️ Claim check
- **Unverified:** "Insane" is clickbait framing. I did not install the skill or compare it with other design skills; the quality claim rests on the channel's own demo of one app against a no-direction first version.
- "No other design skill checks like this" is the video's statement, and "about 40" demos is firmer than the author's own "dozens". The author's page documents the check (`film.mjs`, `jumps.mjs`, `layout.mjs`) but I did not run it.
- The skill's own limits, from Benji: it does not catch a boring concept, and it only builds the demo, not the page around it.
- Sponsor segment (OpenArt, image/video models inside a coding agent) and the AI Labs Pro community funnel are marketing and unrelated to the skill.

## 🔗 Links
- Video: https://www.youtube.com/watch?v=of628n5754g
- Author's page: https://benji.org/stageshow · Repo: https://github.com/benjitaylor/skills
- Chapters: [0:55 why screenshots fail](https://youtube.com/watch?v=of628n5754g&t=55s), [2:07 five demo mistakes](https://youtube.com/watch?v=of628n5754g&t=127s), [4:16 what it is](https://youtube.com/watch?v=of628n5754g&t=256s), [7:56 installing](https://youtube.com/watch?v=of628n5754g&t=476s), [9:20 playground](https://youtube.com/watch?v=of628n5754g&t=560s), [10:03 real app test](https://youtube.com/watch?v=of628n5754g&t=603s)

## 📖 Further reading/watching
- [[Router and Workers — DeepSeek Super Agent in Claude Code (AI LABS)]] (another AI LABS video)
- [[Vibe Coding]], [[Context Engineering]]

---
Template: [[templates/knowledge_note_info]]
