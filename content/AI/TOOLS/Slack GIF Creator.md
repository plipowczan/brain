---
title: "Slack GIF Creator"
date: 2026-10-15
enableToc: true
openToc: true
tags: ["tool", "ai", "memes", "claude-code", "agent-skills", "animation", "open-source", "apache-2.0"]
type: tool
source: "_raw/processed/2026-10-15_2026-10-15-research-meme-generation-for-coding-agents.md"
agent-created: true
summary: "Anthropic's official slack-gif-creator skill (anthropics/skills) — Pillow + imageio GIF builder with Slack-size validators; a good first-party base for animated reaction memes once you swap the default font"
---
# Slack GIF Creator

🗒️ **`slack-gif-creator`** is an official skill in [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/slack-gif-creator) (Apache-2.0) that builds animated GIFs for Slack. It is built on Pillow, imageio and numpy and ships a `GIFBuilder`, validators (`is_slack_ready`), easing functions and a frame composer. It targets 480x480 message GIFs and 128x128 emoji at 10-30 fps. In the [[Meme Generation for Coding Agents]] research it was the best first-party starting point for **animated** reaction memes, not for captioned templates.

## Links
### Description
- **Tested by the research agent:** a 480x480, 20-frame GIF built in 0.66 s, was 372 KB and passed `is_slack_ready`.
- **Polish needs a font.** The bundled `draw_text` uses Pillow's default 10 px font, which draws every Polish diacritic (including ó) as an empty box. With a TTF (Impact, Arial or Anton) Polish renders correctly.
- **Windows crash risk.** `GIFBuilder.save()` prints a check mark after writing the file, so with cp1250 stdout it should raise `UnicodeEncodeError` unless `PYTHONUTF8=1` is set. Inferred from a test of the print, not from running `save()` (imageio was not installed).
- **Known bugs, none fixed upstream:** validators check dimensions only, not the 128 KB / 50-frame limits Slack requires (#116, open since 2025-11-19); delays are truncated to whole centiseconds so GIFs play faster than requested (#1870); `validate_gif` computes duration from the last frame's delay (#1811); about a dozen reports and fix PRs are open, none merged as of 2026-10-15.
- **Adoption (registry data):** skills.sh shows 73K installs and three passing audits, which I treat as a signal, not proof.

### Download or use
`/plugin marketplace add anthropics/skills` then `/plugin install example-skills@anthropic-agent-skills` (installs 12 example skills; issues #189 and #919 report duplicate content with `document-skills`), or `npx skills add https://github.com/anthropics/skills --skill slack-gif-creator`, or copy the folder into `~/.claude/skills/`. Python 3.10 or newer and `pip install pillow imageio numpy`; **avoid `pip install -r requirements.txt`**, which also pulls `imageio-ffmpeg` and its bundled ffmpeg `.exe`, which GIF output does not need.

## Reasoning for
Animation is the one place where a ready first-party skill beats my own code. I would use it as the GIF layer behind the caption renderer, always with a bundled TTF and `PYTHONUTF8=1`, and add my own size and frame-count check on top of its validators. For plain captioned frames, ffmpeg with `palettegen` and an `.ass` subtitle file was faster to wire (a captioned GIF to GIF conversion took 0.8 s). Smart App Control risk is LOW on the Pillow route.

## Alternatives considered
- **ffmpeg** with `fontfile=` or ASS subtitles: Polish-correct, fast enough for a hook, but `drawtext` does not wrap text.
- **[[HyperFrames]]** (installed): real motion design; rendered a 480x480 Polish GIF in 5.3 s, but a root-element background turns transparent in GIF mode and telemetry is on by default.
- **[[Remotion]]:** needs a company licence at four or more employees.
- **[[Satori]] frames + ffmpeg:** the route in my own design: 12 frames at 480x480 came to 175 KB with Polish intact.

## Resources
- 🔗 [anthropics/skills — slack-gif-creator](https://github.com/anthropics/skills/tree/main/skills/slack-gif-creator) · [skills.sh listing](https://skills.sh/anthropics/skills/slack-gif-creator)
- 📖 Related: [[Meme Generation for Coding Agents]] · [[Agent Skills]] · [[Skill Authoring Best Practices]] · [[Claude Code]] · [[Satori]]

---
Template: [[templates/tool]]
