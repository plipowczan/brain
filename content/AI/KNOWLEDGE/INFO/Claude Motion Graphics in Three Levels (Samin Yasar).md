---
title: "Claude Motion Graphics in Three Levels (Samin Yasar)"
date: 2026-11-26
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "claude", "claude-code", "agent-skills", "video", "animation", "motion-graphics", "ads", "image-generation", "prompts", "methodology"]
type: knowledge-note
sources: ["_raw/processed/2026-11-26_yt-E70WCbv1nYc_anthropic-just-dropped-claude-motion-2-0-tutorial.md", "_raw/processed/2026-11-26_Claude Motion Graphics - Guide.pdf", "_raw/processed/2026-11-26_Claude Motion Graphics Pack (everything).zip", "https://runway.com/news/company-news/runway-claude-motion (read 2026-11-26, for the claim check)"]
agent-created: true
summary: "Samin Yasar's method for ads made by Claude in three levels: code only (a three.js page rendered to 4K, sound by code), real footage with Higgsfield voice and music, and photoreal product shots from keyframe stills joined by Kling 4.0. Same four steps each time: real assets, approved storyboard, build, sound. 11 tips, credit costs, and a claim check (the 'Claude Motion 2.0' title vs what the pack uses)."
source_url: "https://www.youtube.com/watch?v=E70WCbv1nYc"
video_id: "E70WCbv1nYc"
channel: "Samin Yasar"
duration: "18m24s"
published: 2026-11-25
transcription: captions
---

# Claude Motion Graphics in Three Levels (Samin Yasar)

## 🗒️ Description

An 18-minute tutorial by **Samin Yasar** ("Anthropic Just Dropped Claude MOTION 2.0"), plus his free **Claude Motion Graphics Pack**: an 11-page guide, every prompt as copy-paste text, a Higgsfield setup page, a sample storyboard and review sheet, and his **motion-ads** skill ([[Motion Ads]]). He runs a community, Claude Club on Skool, which he promotes in the video, and says he won the AI Grandmaster 2026 competition in Dubai. The Level 2 trailer is cut from that event's footage.

His claim: Claude can now work as a motion designer, a product animator and an ad maker. He shows it in three levels, each one adding paid tools on top of the last. Every video in the pack was made with the same four steps.

🚀 **The one-line version:** give Claude the real logo, photos and screens, approve a numbered storyboard before anything is built, make every shot physically turn into the next, and lay the sound on the picture's own beats. You direct; Claude builds.

> "You can't turn cheap ingredients into a five-star meal." [(2:43)](https://youtube.com/watch?v=E70WCbv1nYc&t=163s)

## 🔗 Links

- Video: [Anthropic Just Dropped Claude MOTION 2.0 (Tutorial)](https://www.youtube.com/watch?v=E70WCbv1nYc), 2026-11-25
- The skill: [[Motion Ads]] ([Samin12/claude-ads-skill](https://github.com/Samin12/claude-ads-skill))
- The model platform used for Levels 2 and 3: [[Higgsfield]]
- Guide and pack (archived): `_raw/processed/2026-11-26_Claude Motion Graphics - Guide.pdf`, `_raw/processed/2026-11-26_Claude Motion Graphics Pack (everything).zip`
- Not the same thing: Anthropic's own [Claude Motion](https://runway.com/news/company-news/runway-claude-motion) (see the claim check)

## 🧩 The four steps

Every level runs through the same steps, and the storyboard is the one place where work stops for a decision.

| Step | What happens |
|---|---|
| 1. Assets | The real logo file, product photos and screenshots, in one sorted folder. Check the resolution, list every source in `assets/SOURCES.md`, never draw a logo from memory |
| 2. Storyboard | A numbered board, 6–8 shots for 12–20 seconds. **Stop and approve** before any code or paid generation runs |
| 3. Build | Code, real footage or generated shots, depending on the level. A quick draft first, a frame-by-frame review, then the full-size render |
| 4. Sound | Music, voice and effects placed on the picture's named beats, after the picture is approved |

Each storyboard card has a **"Becomes"** line: how this shot turns into the next one. If you cannot fill it in without writing "fades to" or "cuts to", the two shots do not belong next to each other yet.

## 🧩 The three levels

| Level | What it makes | What you need | His example |
|---|---|---|---|
| 1. Claude only | Motion graphics and ads built in code, rendered to 4K, sound made by code | Claude Code, Node 22+, Chrome, ffmpeg, Python. Nothing paid | A 16-s 4K spec ad for the TRMNL e-ink display: ~37 min in total |
| 2. Claude + Higgsfield | Real footage cut down to a tight promo, with code-built graphics, an AI voiceover and AI music | Level 1 plus a [[Higgsfield]] account | A 104-s event recap cut to a 27-s promo: ~55 min, ~15 credits |
| 3. Photoreal product ads | Photoreal footage from keyframe stills and first-frame/last-frame video shots, joined into one camera move | Level 2 plus more credits, Kling 4.0 | A 20-s 4K ad for a luxury steel product: ~2 h 15 min, ~790 credits (~330 in the final cut) |

The rule for choosing: anything with real light on real materials (brushed metal, glass, skin, liquid, fabric) goes to Level 3. Code makes those look like plastic.

## 🧩 Level 1: Claude only

**The example:** an 8-shot, 16-second storyboard for a desk e-ink display. One camera orbits the device while its screen goes from weather to calendar to stocks to the logo, and the ink itself travels and re-forms each screen. From the approved storyboard to the finished 4K picture took about 15 minutes; the 4K render itself was 1.4 minutes.

**How it is built** (from the skill): one HTML page draws the whole ad as a function of time. It exposes `window.ad = { duration, width, height, seek(t), events }`, and the skill's renderer calls `seek(t)` for every frame, screenshots it in Chrome and pipes it to ffmpeg. Nothing runs on a clock, so the render is exact and repeatable. three.js handles the 3D device. Every beat (`'logo.land': 12.7`) is a named number in one block, and the same names go to the sound.

**The transforms that work in code:**

- **Pixels travel:** each dark pixel of screen A is paired with a nearby dark pixel of screen B and moves there. Neighbouring pixels must leave together, as a wave from one point, or the picture turns to dust.
- **A shape opens:** the logo's opening grows until it becomes a window onto the next shot.
- **The camera carries it:** one continuous move, so there is nothing to dissolve between.

**The director's notes that fixed his build** (give notes like a director: what looks wrong, what you want instead):

1. The background blur looks smeared sideways; it should be round and soft. Everything is too yellow: paler desk, off-white wall, neutral light.
2. When the pixels move they turn into dust. Make neighbours leave together and take the same path.
3. The opening is too fast, and the camera does most of its turning in the first five seconds. Spread it out.

**Sound by code:** every sound in the Level 1 ad (soft hits, the airy whoosh, the pull-back) was generated by code inside Claude: sine waves and filtered noise, free to use. You can also drop your own music or effects into the folder.

**What Claude can't check:** it can't watch a video play or hear it. It reads frames on a contact sheet and measures the sound, so you watch the result once with sound before using it.

## 🧩 Level 2: Claude + Higgsfield on real footage

**The example:** the 104-second recap of the AI Grandmaster 2026 competition at Dubai Future Week, cut to a 27-second promo on a 120 BPM grid. Graphics in the event's own look, an AI voiceover and an AI music bed. It took about 55 minutes and about 15 Higgsfield credits (four voice takes, two music takes, transcription). No AI video was generated: it is all his real footage.

**The order of work:**

1. **Watch the footage.** Claude reads it as frame sheets, one frame a second, then every 0.2–0.4 s around the best moments, and transcribes the audio. It notes burned-in text and logos.
2. **Write the cut list.** For a footage edit the cut list is the storyboard: stop for approval.
3. **Cut** (subtract first). Every cut lands on the beat: at 120 BPM, a multiple of 0.5 s.
4. **Write the voiceover from facts in the footage only,** at about 2.3 words a second (44 words in 27 s). Generate it as one take in four voices, transcribe each take back to check the words.
5. **Build the graphics** as a page rendered with a transparent background: a title that builds itself, a counter to a real number, lower thirds, an end card. The opening goes from pure animation into the footage, never by cross-dissolve.
6. **Music at the exact length,** duck it about 8 dB under the voice, master to −14 LUFS for YouTube.

His promo music prompt writes the structure second by second (0–4 s airy intro, 4–13 s pulse and arpeggio, a lift at 13.5 s, the one big impact at 23 s, a resolving tail to 27 s). The music that came back sat at 118–120 BPM and lined up after a 60 ms nudge.

## 🧩 Level 3: photoreal product ads

He first had Claude build a luxury steel watch in code alone, and it failed: flat lighting, steel that looks like plastic, a fake whole. With the Kling 4.0 video model the brushed steel looks brushed, the ceramic bezel catches reflections and the glass reads as sapphire. His point: no Blender, no 3D modelling, no camera.

**The example:** a 20-second 4K ad, six shots, eight keyframes, one camera and one light. About 2 h 15 min. About 790 credits in total, about 330 of them in the final cut; the rest went on a model comparison, rejected takes and two wasted upscale runs. He made 29 takes for 6 shots and kept 8 of 21 stills. **Budget roughly twice what the final cut needs.**

**How it works:** an image model makes keyframe stills from real photos. A video model makes each shot from one keyframe to the next. Because shot N ends on the exact picture shot N+1 starts on, the shots join into one move that never cuts.

1. **About ten real reference photos** from every angle, turned into a written detail checklist: every part, material and piece of printed text, and what must *not* appear. That becomes the **PRODUCT block**.
2. **A LOOK block:** where it is, one hard key light high on the upper left, 100 mm macro lens, shallow depth of field, fine grain, "real photography, not a 3D render".
3. **The hero keyframe first** on Nano Banana Pro at 4K with the photos attached. Every later still gets the hero as reference image 1, with **"same framing, same crop, ONE CHANGE ONLY"**.
4. **Short edit prompts for small changes.** A long prompt makes the image model recompose the whole picture and move the wrong part.
5. **A model comparison** of the hero shot on two or three video models before making all the shots.
6. **Each shot first-frame to last-frame** on Kling 4.0, 5 s, 1080p, sound off, with a fixed **RULES block** (one continuous move, the product is rigid, its text never changes, no new text).
7. **Join with re-timing** so the camera doesn't stop dead at every keyframe, check single frames at full size, then upscale the joined picture once.

**The two rules that decide whether a shot can be made:**

- **The model can only keep text it was shown.** If text is hidden in both keyframes and slides into view mid-shot, the model invents it, every time. Crop both keyframes so it never enters the frame.
- **Keep both keyframes at the same scale** unless the shot is a push-in or pull-back. For a big scale change, split the shot at a mid-point keyframe.

**His model comparison (November 2026):**

| Model | Verdict |
|---|---|
| `kling4_0` (first + last frame) | Starts and ends on the stills, text stays correct, materials hold. Used for five of six shots |
| `kling_o3_flf` | A third of the price, but small parts flicker and it invents text sliding in from off-frame. One shot, best value |
| `seedance_2_5` | Sharp metal, but treated the start frame as a loose reference, misspelt text, the moving part never moved. Not used |
| `veo3_1` | Native 4K, but takes a start frame only, so it can't land on the next shot. Not used |

For stills, `nano_banana_pro` looked like a real macro photo and obeyed the camera angle; `gpt_image_2_6` got every character of text right but looked like a catalogue shot, so it became the fixer. Prices are in [[Higgsfield]].

## 🧩 Meta-prompting and copying a style

**Meta-prompting (Tip 10):** get Claude to write the prompt for Claude. Before generating anything, it writes the full prompt for the ad from the real photos: the product, the place, the one light, the lens, the camera move shot by shot, how each shot becomes the next, the pace, the sound, the end frame and what must not appear. You read it, edit it, and it becomes the reference for every still and shot. In his words, reviewing a prompt is far easier than imagining every lighting angle and camera move yourself. To reuse a result for another product, swap only the PRODUCT block.

**Copy a style, never the video (Tip 9):** put a video you like in `refs/` as a private reference. Claude takes it apart shot by shot (the skill's `study_video.py` measures cuts, shot lengths, motion, colour, loudness and tempo), writes the style down with nothing of the reference in it, and applies it to your product. Take structure, pacing, camera language, light and how text behaves; never its footage, logo, music, voice or wording.

## 🧩 Blend yourself in (Tip 11)

Join the ad's last frame to your own first frame, so the ad becomes the opening shot of your video instead of a separate clip. Design the hand-off before you build: the product dead centre, a dark top, a dark background, one hard light, no face in the frame, no text in the last half second, the music already faded.

- **Option A, film it:** wear what the end frame shows, match the light and framing beside the camera, hold two seconds, then move.
- **Option B, generate the bridge:** one Kling 4.0 shot from the ad's last frame to a still from your own recording, about 4 s. This is what he did; it cost about 19 credits. Only with your own face.

## 🧩 The 11 tips

| # | Tip | In one line | In the video |
|---|---|---|---|
| 1 | Real assets | Quality in is quality out; skip the high-res references and Claude fakes the product | [2:34](https://youtube.com/watch?v=E70WCbv1nYc&t=154s) |
| 2 | Storyboard first | A numbered board before anything animates: cheaper, faster, and where you direct | [3:32](https://youtube.com/watch?v=E70WCbv1nYc&t=212s) |
| 3 | Transform shots | Every shot physically turns into the next, zero cross-dissolves | [4:13](https://youtube.com/watch?v=E70WCbv1nYc&t=253s) |
| 4 | Dead center | Everything transforms around one focal point, so the eye never hunts | [5:14](https://youtube.com/watch?v=E70WCbv1nYc&t=314s) |
| 5 | Always moving | Something moves in every frame, even on a hold | [5:25](https://youtube.com/watch?v=E70WCbv1nYc&t=325s) |
| 6 | Sound by code | Every Level 1 sound is generated by code; a sound only where something moves | [5:36](https://youtube.com/watch?v=E70WCbv1nYc&t=336s) |
| 7 | One folder, sorted | All footage and assets in one place, sorted before anything is cut | [9:29](https://youtube.com/watch?v=E70WCbv1nYc&t=569s) |
| 8 | Slide-up text | No bouncing, no letters fading in: each word slides up in place inside a mask, blurred to sharp | [11:18](https://youtube.com/watch?v=E70WCbv1nYc&t=678s) |
| 9 | Copy a style | Reverse-engineer a video you like, apply the style, never the content | [12:15](https://youtube.com/watch?v=E70WCbv1nYc&t=735s) |
| 10 | Meta-prompting | Claude writes the long prompt; you edit it | [15:15](https://youtube.com/watch?v=E70WCbv1nYc&t=915s) |
| 11 | Blend yourself in | The ad's last frame becomes your first | [16:44](https://youtube.com/watch?v=E70WCbv1nYc&t=1004s) |

## 🧩 Sound rules from the skill

His first product-ad mix was rejected as "buried, whoosh-heavy and robotic". The rebuild changed these:

- **Music leads.** In the rejected mix the music sat 6 dB *below* the effects; in the rebuilt one about 17 dB above them.
- **No repeated whooshes.** One whoosh re-pitched under every camera move is the sound of a template.
- **A sound only where something visibly moves,** exactly on its beat (the mixer reports the error; it should be 0 ms).
- **Mechanical sounds run at their real rate.** Text-to-sound models can't keep time (ask for eight ticks a second, get six uneven clicks), so the steady bed is built in code from separate recorded beats.
- **Never digital silence:** quiet room tone underneath. Master to −14 LUFS and at most −1 dB true peak, with a near-silent last half second.

## 🧩 Credits: quote, log, check

Levels 2 and 3 run on paid models, so the pack treats money as part of the method:

1. Agree a credit budget and tell Claude before the first paid job.
2. Quote every job before it runs; log model, purpose, quote, job ID, charge and a one-line verdict ("kept as keyframe 3", "rejected: invented text").
3. Stop and ask before going over budget.
4. **Check the first charge on any new model.** One job was quoted 37.5 credits and charged 150: the quote looked like a per-5-seconds price for a 20-second clip.
5. Failed and refused jobs are refunded, but confirm it in the transactions.

## ⚠️ Claim check

- **"Claude MOTION 2.0" is not what the pack uses.** Anthropic's Claude Motion is real: Runway's launch-partner post (2026-10-08) says it turns a prompt into a short animated explainer by writing the code that animates your own text, charts, shapes and images, exportable as MP4. At launch it was in beta on Team and Enterprise plans. That post mentions no "2.0", and a search on 2026-11-26 found no "Claude Motion 2.0" announcement either. The pack never names Claude Motion: Level 1 runs in Claude Code with his own skill, which renders through Chrome and ffmpeg. The video's one line ("Claude has this new thing called Claude Motion") and its title tie the method to Anthropic's product; I can't verify what ran on his machine.
- **"Use Higgsfield Katana" vs the skill.** In the video he tells you to sort and caption footage with Higgsfield's Katana. The skill's Higgsfield guide never names Katana, but it says Higgsfield's ready-made workflows for editing, sorting footage and adding text over video were not used in the builds and should be treated as untested. I read Katana as one of those.
- **"REA video" isn't in the pack.** The video names a skill called "REA video" for reverse-engineering a style. The pack does that job with the motion-ads skill's reverse-engineer pass (`study_video.py`). It is also not the vault's [[REA]], which reverse-engineers binaries.
- **Which video:** the pack and the guide cite an earlier upload, "Claude Just Changed Motion Graphics Forever!" (`03aOyIKmQak`), which YouTube now reports as unavailable. The guide's tip timestamps match this video's chapters to the second through Tip 6, then run 17–18 s early, so the difference starts somewhere between Tip 6 and Tip 7 (a stretch that holds the Dubai trailer and the Higgsfield sign-up). Most likely the same video, re-cut and re-titled.
- **Who is speaking:** a creator who promotes his own community (Claude Club) and links Higgsfield through a personal sign-up link with his handle in it (likely a referral link; that is my inference), with a Black Friday promotion in the video (up to 70% off, the MCP free for three days). I link the plain sites. Every number comes from his own builds, one product per level; there is no comparison with other methods beyond his own code-vs-Kling test.
- **Prices and models are November 2026,** and one quote was four times too low. Treat the model table as a method for choosing, not a ranking.
- **"One person can run a full production studio from a chat window"** is his framing. His own Level 3 numbers (2 h 15 min, ~790 credits, 29 takes for 6 shots) show a lot of rejected work behind the 20 seconds.
- **Spec work:** the TRMNL ad and the luxury watch are spec ads for brands he doesn't own. The pack labels them, and the skill's honesty rules require a "Spec ad. Not affiliated with…" label and forbid invented logos and product text.

## ☘️ What I take from it

- **The storyboard gate with a "Becomes" line is the transferable idea.** It is the same checkpoint as Leon Lin's stills before the render ([[How I Prompt AI to Build Good-Looking Demos (Leon Lin)]]) and the storyboard grid in [[GPT Image 2 + Seedance Workflow]], but the "how does this shot become the next" field isn't in my other notes, and it forces transitions to be designed, not added.
- **Level 1 fits what I already render with [[HyperFrames]].** Screens, apps and logos for a product demo (e.g. [[Qamera AI]]) are exactly the subjects it recommends code for. The tips (dead centre, always moving, slide-up text, no cross-dissolves) apply whatever renders the frames.
- **Materials are the line between code and a video model.** Anything shiny or organic goes to generated footage; I shouldn't spend hours making three.js steel look real.
- **Credit discipline applies to any paid generation API:** budget, quote, log with verdicts, check the first real charge.
- **Claude can't watch or hear,** so frame sheets and measured sound are the review, and a human watch-through with sound is the last check. Same lesson as [[Claude Video]] and [[Stage Show — Benji Taylor's Demo Design Skill (AI LABS)]].
- I have not installed the skill or run any level yet.

## 📖 Takeaways

- Real assets in, pixel for pixel. Never let Claude draw a logo or a product from memory.
- Approve a numbered storyboard before any build; every card says how it becomes the next.
- Transform, never dissolve; keep the subject dead centre and something always moving.
- Choose the level by material: code for flat and simple shapes, Level 3 for metal, glass and skin.
- For generated shots: keyframes first, same crop and one change per keyframe, first/last-frame video between them, join with re-timing.
- Write the long prompt before the picture, and let the person edit it.
- Music leads; a sound only where something moves; master to −14 LUFS.
- Budget credits at about twice the final cut, and check the first real charge.

## 📖 Further reading/watching

- [[Motion Ads]]: the skill, its scripts and its rules
- [[Higgsfield]]: the model platform, models and prices used for Levels 2 and 3
- [[HyperFrames]] · [[Remotion]]: frameworks for rendering code-built video
- [[Video Use]] · [[OpenMontage]]: other agent video pipelines (editing footage, producing from a topic)
- [[Claude Video]]: the `/watch` skill that lets Claude read a video as frames and transcript
- [[GPT Image 2 + Seedance Workflow]]: storyboard first, then video, with a different model pair
- [[How I Prompt AI to Build Good-Looking Demos (Leon Lin)]] · [[Cook]]: references, a high bar and stills before the render
- [[Stage Show — Benji Taylor's Demo Design Skill (AI LABS)]] · [[Apple-style Animations with AI]]: motion design with agents
- [[ElevenLabs]] · [[Awesome Nano Banana Pro Prompts]] · [[Topaz Labs]]: the voice, still-image and upscaling side
- [[Extending Claude Code — Tools for Its Blind Spots]]: where video sits in my Claude Code setup

---
Template: [[templates/knowledge_note_info]]
