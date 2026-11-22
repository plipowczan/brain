---
title: "How I Prompt AI to Build Good-Looking Demos (Leon Lin)"
date: 2026-11-22
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "prompts", "design", "agent-skills", "claude-code", "coding-agents", "video", "image-generation", "methodology"]
type: knowledge-note
sources: ["_raw/processed/2026-11-22_How I prompt AI to build good looking demos.md", "_raw/processed/2026-11-22_Leonxlnxcook Give your agent a target, a bar and time, then let it cook.md", "https://github.com/Leonxlnx/unlazy (README read 2026-11-22)"]
source_url: "https://x.com/LexnLin/status/2116662591363690999"
author: "Leon Lin (@LexnLin)"
published: 2026-10-31
agent-created: true
summary: "Leon Lin's method for AI-built demos (3D worlds, films, launch videos): 9–12 reference images and a short prompt, a numeric bar (99.9%, 9/10), a time floor, stills before the final render, zero-context critics and a slop ban list, packaged as his /cook skill; his Greek-world run took ~45h and 55 subagents."
---

# How I Prompt AI to Build Good-Looking Demos (Leon Lin)

![[4b13234055936e41142824942901a6c4_MD5.jpg]]
*A collage of his demos from the top of the article. The labels are my reading, not his: the Clawd film, the ancient Greek world, the Afterglow pianist film, a paper-craft landscape and a campfire.*

## 🗒️ Description

An X article by **Leon Lin** (@LexnLin), published 2026-10-31. He posts AI-built demos on X: 3D worlds in three.js, short films, launch videos for AI products. Most are built by Opus 5.5 in [[Claude Code]], some by GPT 6 Astra in Codex. People kept asking for his prompts, so he wrote down his method as eleven tips. At the end he packages it as a skill, [[Cook]].

🚀 **The one-line version:** give the agent a target it can see (reference images), a bar it cannot quite reach (a number), a minimum amount of time, and a judge that is not itself. Ban the usual clichés, and review stills before you pay for the final render.

## 🔗 Links

- [The method in eleven tips](#-the-method-in-eleven-tips)
- [The Greek-world prompt, paraphrased](#️-the-greek-world-prompt-paraphrased)
- [What one big run costs](#-what-one-big-run-costs)
- [Claim check](#-claim-check)
- [What I take from it](#️-what-i-take-from-it)

## 🧩 The method in eleven tips

### 1. A short prompt with strong references

His main lesson: the reference images carry most of the quality, and the text matters much less. An image shows light, colour and materials that are hard to put into words. His big demos start with **9 to 12 reference images and a short prompt**.

![[0279b0810b82ba32cf13d6d5a1d91f82_MD5.jpg]]
*The nine reference images behind the ancient Greek world.*

### 2. Generate the target first

For 3D demos he makes the reference images himself with GPT Image Gen, then gives them to Opus 5.5 and asks it to build or clone that scene in code. It is the same order as in [[GPT Image 2 + Seedance Workflow]]: one model fixes what the result should look like, another one produces it.

![[5f27706c927bce06e568f093b6b81cb3_MD5.jpg]]
*References on the left, the code-built result on the right.*

He is honest about the gap: on its own the result looks impressive, but next to the references it looks clearly weaker. More iteration closes some of it, and he thinks future models will close more. References do not have to be copied one to one. For his night-city stills he asked for the same quality and mood, in the model's own art style.

### 3. Where references for UI and motion come from

- **Websites, apps and launch videos:** screens from real products. He uses [Mobbin](https://mobbin.com/) most, a library of sections and screens from professional websites and apps, plus design posts on X. Liking a few of those trains the timeline to show more.
- **Motion design:** reference videos. What matters is the instruction that goes with them. The model should analyse every video frame by frame, list every small effect, transition and timing, and take inspiration from all of them without copying any one element.

### 4. Set the bar with a number

"Make it look good" tells the model little; a number tells it a lot. For the Greek world he asked for a 99.9% match with the references and told the model to keep iterating until it got there. He adds that `/goal` (see [[Loop Engineering]]) suits such tasks. For his pianist film, 98% closeness to the references was the minimum.

He knows 99.9% is not realistic. The number is there to say that the job is not done when it first works. He finds Opus 5.5 and GPT Astra 6.1 good at iterating on and judging their own work, with two calibration tricks:

- **Tell it your own estimate.** If the model says it is at 90% and he thinks 60–70%, he says so, so it knows how high the bar is.
- **Use ratings for videos.** He rates the reference videos at about 8.5/10 and asks for at least 9/10. He knows that is not achievable, but models rate their own work too high, so the inflated bar evens it out.

### 5. Give it time

The same model gives very different results in 20 minutes and in 20 hours. He always sets a time budget. For demos it is a floor: at least 8 hours, and finishing after 2 means something is wrong. Big builds get "this may take days". Small jobs get the opposite, a hard cap such as 1.5 hours, or the agent works far too long.

### 6. Make sure it doesn't stop early

Some models stop early and hand you a summary; he names Argon and, back then, Opus 5. After a sakura-tree world built with Opus 5 in August he turned his "tree" method into a skill, [unlazy](https://github.com/Leonxlnx/unlazy). The idea: split the task into subtasks, split those again a few layers down, and give every leaf as much effort as the whole task would normally get. He says newer models such as Opus 5.5 rarely need it. His forest demo in Codex started with an instruction to read the skill and use it for a visual build of at least five hours. The forest has 3,808 trees, 2.5 million grass clumps and almost 40,000 ferns, all three.js plus custom shaders.

### 7. Render a few frames first, the video later

A 4K render on his laptop's integrated GPU takes hours; the Greek world's final render alone took about 13 hours of GPU time. So every prompt says: render the shots that match the references as stills, show them first, and do not render the video before he approves. The agent works in rounds and sends screenshots after each one **without pausing**. He gives feedback whenever he looks, and the final video is rendered only once the stills are good enough.

### 8. Let another model judge

The agent that built something is the worst judge of it. He asks for the work to be rated by subagents with **no context**, and the builder keeps going until they score it at least 9.2/10. The judge can also be a different model, for example GPT 6.1 Sol rating Opus 5.5's work. It is the same idea as the zero-context reviewers in [[Elephant-Goldfish Model (EGM)]] and the second-model attacks in [[Claudex Loop]].

### 9. Everything is code (most of the time)

His default rule: zero external assets, so every mesh, texture, shader and effect is generated in code. Two reasons: it is the impressive part (people often don't believe it), and it forces the model to really build things instead of downloading a tree, which shows what frontier models can do.

- **Sound is the exception for now.** Code-made music sometimes turns out great (his Chinese landscapes and alpine lake), but code-made sound effects often sound cheap, especially in launch videos. He then points the agent at professional free sound libraries instead. He also co-built [earshot](https://github.com/Leonxlnx/earshot) for this (see the claim check).
- **Launch videos:** real logos and real photos look better than SVG people.

### 10. Ban the slop

Every prompt carries a list of things the model may not use:

- eyebrow labels
- monospace uppercase text
- random serif fonts
- beige
- 01 / 02 / 03 counters
- glowing orbs
- shockwave rings popping out of everything
- em dashes

It is a prompt-level cousin of the anti-pattern rules in [[Impeccable]]. For the Clawd film, the slop part of the prompt was that list, a request for art and creativity instead, no random fonts, and a clean animation of the character.

### 11. Give feedback with targets

"Make it better" does not work. What works:

- **Colours:** say which way each one should move, for example a much bluer sky, pinker blossoms, greener grass with a touch of yellow. His most common feedback on 3D builds is that the colours are too grey.
- **Timecodes:** name the span and the problem, for example clouds that don't look real between seconds 18 and 38.
- **Marked screenshots:** draw on them and send them.
- **Distance:** say where detail breaks down, for example far-off trees that look plain in half-wide shots.

If you cannot say what you dislike, ask the model to describe what it built. Then you usually have the words.

### Extra tips

- **Questions up front.** End the prompt by inviting any questions now and telling the agent to start building otherwise, so it does not stop to ask something in the middle of the night.
- **Usage pacing.** He writes his plan's limits into the prompt: use about 99% of the 5-hour window within those 5 hours, but never hit 100%. Otherwise it burns the window in 2 hours and sits idle for 3.

## ✍️ The Greek-world prompt, paraphrased

He ran it on Opus 5.5 at xhigh effort with the nine images attached. The verbatim prompt is in [the article](https://x.com/LexnLin/status/2116662591363690999); this is my paraphrase as a reusable template:

```text
Build a large, highly detailed 3D world in three.js from the N reference images attached.

Rules:
- No external assets. Generate every mesh, texture, shader and effect in code.
- Match the references as closely as you can (aim for 99.9%): composition, scale,
  materials and above all colour. Cinematic and realistic, neither oversaturated
  nor grey and washed out.
- Detail everywhere, also far away. Nothing may look copy-pasted or simple.
- [The hard parts, e.g. water and waterfalls must look real.]
- My GPU is weak ([model]). Keep it efficient and get quality from offline rendering.
- Work only inside this project folder.

Process:
- Keep iterating, for hours or days, until it matches the references.
- Render the matching shots as stills and show them to me first.
  No video before I approve.
- After I approve: [video spec: length, resolution, fps, camera moves,
  no on-screen text, free music from the web with the artist credited].
```

The prompt is short, but it is not just "make it nice": every rule is a bar or a constraint the model can check against the images.

## 📊 What one big run costs

His numbers for the ancient Greek world (repo: [Leonxlnx/athenaion](https://github.com/Leonxlnx/athenaion)):

| | |
|---|---|
| Total time | about 45 h |
| Agents | 55 subagents, up to 12 in parallel |
| Code | about 45k lines of JavaScript |
| Output tokens | about 11M |
| API-equivalent cost | about \$1.8k to \$2.3k at Opus 5.5 API prices (it ran on his Max plan) |
| Final 4K render | about 13 h of GPU time on an integrated Radeon 780M |

A motion video about an AI product took, by his count, 3B tokens.

## 🧩 The method as a skill: /cook

He packaged all of this as the **Cook Loop**, an agent skill for Claude Code and Codex: questions up front, references as the minimum bar, a number per dimension, a time floor and usage pacing, rounds of build, stills, zero-context critics and fixes, a stills gate before the final render, and a slop ban list. Details in [[Cook]].

## 🔍 Claim check

- **Who is speaking:** a demo maker whose posts promote his own skills (cook, unlazy, earshot). The Mobbin link in the article is an affiliate link, which he discloses; I link the plain site. Everything here comes from his own demos. There is no comparison of the same build with and without references, numbers or critics.
- **"References carry the quality, the text barely matters"** is his experience with visual builds, not a measurement. His own example prompt still has nine bullet points of rules and process, so "short" means short next to the images, not trivial.
- **"99.9%" is a signal, not a measurement.** No model measures similarity to a reference in percent. He says as much, and the calibration tricks (his own estimate, an inflated video rating) exist because models score their own work too high. Zero-context critics from the same model family share that bias, which is why he also suggests a different model as judge, and why his approval of the stills stays the last gate.
- **The cost figure** is his estimate at API prices for a run on a subscription. I did not check the arithmetic. The [[Cook]] README repeats the same numbers, but it is the same author, so it is not a second source.
- **unlazy has changed.** The article describes it as the "tree" method (the GitHub description still says Depth Tree). The current README (2.1.0, unreleased, read 2026-11-22) presents it as completion discipline: an acceptance ledger (`GATES.md`) of runnable checks, a `gate-check.mjs` checker that executes them, and an optional Claude Code Stop hook that blocks the session while gates are unmet. The tree method now sits in `references/method.md`. MIT, about 4.5k stars. I have not run it.
- **earshot** is, per its repo description, sound effects that an agent renders in code from a plain-words request, CPU-only, with no audio model (MIT, about 5.5k stars, not tested). That sits a little oddly next to his own point that code-made sound effects often sound cheap. He presents earshot as the fix, and I can't judge whether it is.
- **Model names** (Opus 5.5, Opus 5, GPT 6 Astra, GPT Astra 6.1, GPT 6.1 Sol, Argon) are as he writes them. His forecast that sound will improve "in the next 2 weeks" is speculation.
- I did not open the demo links or the live forest site.

## ☘️ What I take from it

- **References before words for anything visual.** For a client landing page in [[PLSoft]] work or [[Qamera AI]], collect 9–12 references first (Mobbin, real products) instead of writing a longer brief. Where nothing fitting exists, generate the target images first.
- **A number and an outside judge go together.** The bar alone invites the agent to grade itself generously. It is the pairing [[How to Be More Ambitious with Models (Felix Rieseberg)]] asks for: an unreasonable goal, always with a judge other than the builder.
- **Stills before the expensive step.** The same checkpoint helps with [[HyperFrames]] or [[Remotion]] videos: approve a few frames, then render. [[Stage Show — Benji Taylor's Demo Design Skill (AI LABS)]] does the same with a contact sheet and scripts.
- **Keep a ban list in the prompt** next to a linter such as [[Impeccable]]. The prompt prevents the clichés, the linter catches what slips through.
- **Time floors cost money.** A 45-hour run is about two thousand dollars at API prices, so it fits showcase work on a subscription, not a client invoice. [[Loop Engineering]] covers the cost and reliability side of long loops.
- **Ask now, then build** is a good closing line for any long autonomous run, not only demos.
- I have not tried the method or installed [[Cook]].

## 📖 Further reading/watching

- Source: [How I prompt AI to build good looking demos](https://x.com/LexnLin/status/2116662591363690999) by Leon Lin, 2026-10-31
- All his demos with videos and repos: [leonlin.de/demos](https://leonlin.de/demos). Repos named in the article: [athenaion](https://github.com/Leonxlnx/athenaion), [procedural-alpine-lake](https://github.com/Leonxlnx/procedural-alpine-lake), [shanshui](https://github.com/Leonxlnx/shanshui), [golden-temple](https://github.com/Leonxlnx/golden-temple), [afterglow](https://github.com/Leonxlnx/afterglow)
- His skills: [[Cook]], [unlazy](https://github.com/Leonxlnx/unlazy), [earshot](https://github.com/Leonxlnx/earshot)
- [[Stage Show — Benji Taylor's Demo Design Skill (AI LABS)]] · [[Impeccable]] · [[AI UX Design Tools]]: design skills for agents
- [[Vibe Coding]]: my older notes on prompting UI, which put more weight on the text prompt
- [[GPT Image 2 + Seedance Workflow]]: generate the target image first, then animate it
- [[How to Be More Ambitious with Models (Felix Rieseberg)]] · [[Elephant-Goldfish Model (EGM)]] · [[Claudex Loop]]: high bars and outside judges
- [[Loop Engineering]] · [[Agent Skills]] · [[Claude Code]]

---
Template: [[templates/knowledge_note_info]]
