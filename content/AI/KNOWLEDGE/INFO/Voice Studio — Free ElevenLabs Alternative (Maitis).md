---
title: "Voice Studio — Free ElevenLabs Alternative (Maitis)"
date: 2026-11-02
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "tts", "voice-cloning", "open-source", "local", "claude-code", "dubbing"]
type: knowledge-note
source: "_raw/processed/2026-11-02_yt-qKsMQg4WB6s_claude-this-free-ai-tool-unlimited-ai-voice-generation.md"
agent-created: true
summary: "Maitis (YouTube): Voice Studio, a free local ElevenLabs alternative with voice cloning, voice design, dubbing and audiobooks, installed by Claude Code; the claims are unverified and lean on a money-making pitch"
source_url: "https://www.youtube.com/watch?v=qKsMQg4WB6s"
video_id: "qKsMQg4WB6s"
channel: "Maitis"
duration: "13m50s"
published: 2026-10-31
transcription: captions
---

# Voice Studio — Free ElevenLabs Alternative (Maitis)

## 🚀 Main message

A short demo video: an open-source desktop app called **Voice Studio** does most of what [[ElevenLabs]] sells (voice cloning, designing new voices, dubbing, audiobooks) and runs locally, so there are no credits and no monthly plan. [[Claude Code]] installs it from the GitHub repo with a single prompt. The pitch closes with "sell voice-overs, audiobooks and dubbing to creators".

## 🗒️ Description

- The video opens with the ElevenLabs V4 launch and its plans, which run up to \$99 a month, and the credits that still run out.
- Voice Studio is presented as an open-source ElevenLabs alternative: voice cloning, voice design, video and audio dubbing, transcription, audiobooks, dictation, workflows and agent integrations in one app.
- Claimed reach: "up to 646 languages across its features" (it depends on the feature). The recommended cloning model is **OmniVoice**, picked at install time from a couple of options.
- Everything runs on a normal laptop, recordings stay on the machine, and supported features work offline once the models are downloaded.
- A blind A/B test (one line by ElevenLabs, one by the free tool) is promised, with the reveal at the very end. The transcript never actually gives the answer.

## 🧩 What it does (as shown)

- **Voice cloning:** a 10-second sample in a quiet room, a local cloning model, a new sentence, generate. The presenter says it sounds "so similar" to the original. Clone only with permission.
- **Voice design:** describe a voice ("deep, calm, late-night radio host") and get one without recording anyone. There is also a voice gallery with many voices and languages.
- **Stories:** turns text into narrated audio, storybooks and full audiobooks; it detects characters and casts a fitting voice for each.
- **Dubbing:** upload English audio, pick a language, get a dubbed version; the dubbed voice may not match the original exactly. Batch dubbing is available.
- **Other tools:** transcribe, A/B voice comparison, directorial AI, speech-rate fit, file probe, audio conversion, profile settings.

## 🛠️ Setup with Claude Code

1. Open the project's GitHub repo (found by searching "Voice Studio"; the link is only in the video description).
2. Make a folder and `cd` into it (`mkdir -p ~/voice-studio`, then `cd ~/voice-studio`).
3. Launch `claude` in that folder and trust it.
4. Paste a prompt: download Voice Studio, install the dependencies, set up a free local voice-cloning model, launch the app, fix errors, and check that generation and audio export work.
5. Claude hit dependency and memory problems during install and worked through them on its own.
6. It asks which cloning model to install (OmniVoice recommended). The app then opens with a system check, a "fast model pack" install and privacy settings.

## 🎨 Impressions and caveats

- Useful pattern regardless of the tool: hand Claude Code a repo URL plus "install, fix errors, verify it works" instead of following the README by hand.
- **Not verified.** The transcript never names the author or repo, so I could not confirm which project this is. Some features sound like [[Voicebox]], which I already track (local, voice cloning, dictation, MCP agent voice), but the model (OmniVoice), the dubbing and the 646-language claim do not match its note. Treat it as a separate project until I find the repo.
- "Same quality as ElevenLabs" rests on one unreveled A/B test. The presenter himself says ElevenLabs is still more convenient in the browser and better for expressive voice-overs and real-time conversation.
- A claim from the video worth taking seriously: check the **model's license** before using output for paid client work. Open-source app does not mean open-licensed voices.
- The video teases that Claude can be connected to Voice Studio for scripts-to-audio in your own voice, then says "well, not exactly" and shows nothing. No MCP or API integration is demonstrated.
- The money section is a generic gig list (YouTuber voice-overs, audiobooks for authors, dubbing for creators), with no pricing or demand data. Channel funnel: scorecard and resources on the channel's own site.
- For Polish, cloning quality and language coverage need testing; see [[TTS Engines Comparison (Polish)]].

## 🔗 Related notes

- [[Voicebox]] — the local-first voice studio I already track; compare once the repo is identified
- [[ElevenLabs]] — the paid incumbent being replaced
- [[TTS Engines Comparison (Polish)]] — where local engines sit for Polish
- [[Chatterbox TTS]] — another free local cloning engine
- [[Claude Code]] — used as the installer

## 📖 Further reading/watching

- Video: [Claude + This FREE AI Tool = UNLIMITED AI Voice Generation!](https://www.youtube.com/watch?v=qKsMQg4WB6s) (Maitis, 13:50)
- Chapters: [0:00 Free AI Voice Generator vs ElevenLabs](https://youtube.com/watch?v=qKsMQg4WB6s&t=0s), [4:24 Install with Claude Code](https://youtube.com/watch?v=qKsMQg4WB6s&t=264s), [8:07 Cloning, design and dubbing](https://youtube.com/watch?v=qKsMQg4WB6s&t=487s), [11:43 Replace ElevenLabs and make money?](https://youtube.com/watch?v=qKsMQg4WB6s&t=703s)

---
Template: [[templates/knowledge_note_info]]
