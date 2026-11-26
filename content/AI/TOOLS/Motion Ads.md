---
title: "Motion Ads"
date: 2026-11-26
enableToc: true
openToc: true
tags: ["tool", "ai", "agent-skills", "claude-code", "video", "animation", "motion-graphics", "ads", "ffmpeg", "open-source", "mit"]
type: tool
sources: ["_raw/processed/2026-11-26_Claude Motion Graphics Pack (everything).zip", "_raw/processed/2026-11-26_Claude Motion Graphics - Guide.pdf", "https://github.com/Samin12/claude-ads-skill (repo metadata read 2026-11-26)"]
agent-created: true
summary: "Samin12/claude-ads-skill — Samin Yasar's motion-ads skill for Claude: product ads and motion graphics in three levels (code only, real footage, photoreal keyframe shots), four steps with a storyboard gate, 11 rules plus honesty rules, and 14 scripts (time-driven page renderer, frame sheets, hidden-cut finder, shot joiner, sound kit, mixer, mastering, video study, credit log). MIT per its LICENSE file."
repo: "https://github.com/Samin12/claude-ads-skill"
---

# Motion Ads

🗒️ [Samin12/claude-ads-skill](https://github.com/Samin12/claude-ads-skill) is an [[Agent Skills|agent skill]] named `motion-ads`, by Samin Yasar, that teaches Claude to make product ads and motion graphics the way a small studio would. It is the written-down version of the three ads he built for his tutorial: the steps, the rules, the prompts, the scripts and the mistakes. The method itself is in [[Claude Motion Graphics in Three Levels (Samin Yasar)]].

It triggers on requests for a product ad, promo, launch video, animated logo or title, SaaS demo animation, event recap, "an Apple-style ad", a spec ad, or a video in the style of another, and also on adding sound to a silent video or blending a person into the end of an ad.

## Links

### Description

🧩 **Four steps, at every level:** assets in one sorted folder (`assets/`, `refs/`, `storyboard/`, `build/`, `sound/`, `out/`, plus `credits.md` for paid jobs), a numbered storyboard with a **stop for approval**, the build, then sound on the picture's beats.

🧩 **Three levels**, each with its own guide:

| Level | Use it when | Made with |
|---|---|---|
| 1. Code only | Screens, apps, logos, devices with simple shapes, charts, type | A time-driven web page (HTML, canvas, three.js) rendered to video. Nothing paid |
| 2. Real footage | There is footage to cut down and dress | A cut list, code-built graphics over the footage, AI voice and music |
| 3. Photoreal product | Metal, glass, skin, liquid, fabric | Keyframe stills, then video shots from one keyframe to the next, joined |

🧩 **11 rules it applies without being asked:** real assets; storyboard first; transform, never dissolve; dead centre; always moving; sound only where something moves; one folder; text slides up inside a mask; copy a style, not a video; write the prompt before the picture; blend the person in. Plus three that keep it honest: one light and shallow focus, label spec work, say what you could not check.

🧩 **14 scripts** (each explains itself with `--help`):

| Script | Does |
|---|---|
| `render_page.mjs` | Renders a page that exposes `window.ad = { duration, width, height, seek(t), events }` to video, stills or a transparent ProRes overlay, frame by frame through the local Chrome and ffmpeg. No npm packages |
| `frame_sheet.py` | Frames of a video, or a folder of stills, on one labelled sheet, because Claude can't watch playback |
| `find_jumps.py` | Finds hidden jump cuts in generated clips and checks that clips meet at their joins |
| `join_shots.py` | Joins first/last-frame shots into one move, re-timed so the camera never stops at a join, and writes the beats for the sound |
| `cut_footage.py` | Cuts footage to a cut list: speed, crop, freeze, slow motion |
| `ink_morph.py` | Pairs the dark pixels of two flat images so one re-forms into the other |
| `make_sounds.py` | A free sound kit from sine waves and filtered noise |
| `tick_bed.py` | A steady mechanical bed at an exact rate from recorded beats |
| `split_takes.py` | Splits one voiceover take into lines at the pauses |
| `mix_sound.py` | Mixes music, voice and effects from one cue sheet onto named beats; prints each cue's error and the stem levels |
| `master_audio.py` | Two-pass loudness normalisation to −14 LUFS / −1 dB true peak, and measures the last half second |
| `study_video.py` | Takes a reference video apart: cuts, shot lengths, motion, colour, loudness, tempo, a sheet per shot |
| `credit_log.py` | Logs paid jobs against a budget; `can-spend` fails if a job would go over |
| `hf_submit.sh` | Submits a [[Higgsfield]] CLI job: quote first, retry if the submit stalls, poll, download |

🧩 **References:** a guide per level, a storyboard guide (fields: time, title, on screen, moves, **becomes**, sound, text), prompt templates (PRODUCT, LOOK and RULES blocks, music, effects, voice, the reverse-engineer prompt), sound design, Higgsfield setup, a full checks list and honesty rules. Templates for the storyboard page and a starter ad page, and a sample storyboard and review sheet.

🧩 **Honesty rules:** label spec ads ("Spec ad. Not affiliated with {brand}"), never draw or generate a logo from memory, reject takes with invented product text, no invented numbers, awards or quotes, a voiceover over footage uses only facts in the footage, a real person's likeness only with their consent and their own picture, and it never posts or uploads anything.

### Download or use

```bash
# Claude Code, all projects
git clone https://github.com/Samin12/claude-ads-skill ~/.claude/skills/motion-ads
# or one project only: clone into <project>/.claude/skills/motion-ads
```

- claude.ai or the desktop app: Settings → Skills (under Capabilities) → upload `motion-ads.zip` from the [latest release](https://github.com/Samin12/claude-ads-skill/releases/latest). There it gives Claude the method and prompts only; rendering and mixing need a machine, so run the levels in Claude Code.
- Needs ffmpeg, Python 3.9+ with numpy and Pillow (`ink_morph.py` also needs scipy), Node 22+ and Chrome. Claude sets missing packages up in a virtual environment inside the project and asks before installing anything system-wide.
- Start prompt: *"Use the motion-ads skill. I want a 15-second ad for the product in this folder. Start with Level 1 (code only). Sort my assets, tell me if anything is missing or too low-resolution, then give me a numbered storyboard and stop so I can approve it."*

## Reasoning for

A ready-made studio procedure for ads and motion graphics in Claude Code, worth more for its rules and checks than for its code. The parts I'd reuse even without the skill:

- the storyboard "Becomes" line and the approval gate;
- the review loop for a model that can't see playback: frame sheets, full-size single frames, `find_jumps.py` on every generated clip, sound measured rather than heard;
- the credit log with a verdict per job;
- the choice of level by material (code for screens and logos, generated footage for anything shiny or organic).

For code-built video I already use [[HyperFrames]], which is a maintained framework; this skill's `render_page.mjs` does the same deterministic page-to-MP4 job in one file with no dependencies.

Caveats:

- **Brand new:** the repo was created on 2026-11-25 with one release (v1.0.0) and 2 stars when I read it. One author, built from three of his own ads.
- **Licence:** the LICENSE file is MIT, with an extra paragraph saying product names and logos in the example images belong to their owners. GitHub's licence detection reports it as `NOASSERTION` because of that paragraph.
- **Scripts:** I read the headers of all 14 scripts, not every line. A search for network calls found only the local Chrome DevTools endpoint in `render_page.mjs`; `hf_submit.sh` calls the Higgsfield CLI and downloads the job's result.
- I have not installed or run it.

## Alternatives considered

- [[HyperFrames]]: HeyGen's open framework for HTML → MP4 with GSAP and three.js adapters, many skills, Apache 2.0. The maintained choice for Level 1-style work
- [[Remotion]]: React-based code video, source-available licence
- [[Video Use]]: edits a folder of raw footage from a word-level transcript; the closest match to Level 2 without the generated graphics, voice and music
- [[OpenMontage]]: a whole agent video production system with pipelines and director skills, AGPLv3
- [[Cook]]: Leon Lin's skill for visual builds that must match references, with stills before the final render
- Anthropic's Claude Motion: code-driven animated explainers inside Claude (in beta on Team and Enterprise at its 2026-10-08 launch), a product rather than a skill. See the claim check in [[Claude Motion Graphics in Three Levels (Samin Yasar)]]
- Not to be confused with "Claude Ads" in [[10 Free GitHub Repos That Replace Paid Tools]], which audits ad accounts

## Resources

- Repo: [Samin12/claude-ads-skill](https://github.com/Samin12/claude-ads-skill)
- The tutorial: [Anthropic Just Dropped Claude MOTION 2.0](https://www.youtube.com/watch?v=E70WCbv1nYc) (Samin Yasar)
- The skill's README credits [Rourke's video](https://youtu.be/cDb-wPq0Iyk) on making motion graphics with Claude as its inspiration
- [[Claude Motion Graphics in Three Levels (Samin Yasar)]]: the method, the numbers and the claim check
- [[Higgsfield]]: the model platform for Levels 2 and 3
- [[Agent Skills]] · [[Claude Code]]

---
Template: [[templates/tool]]
