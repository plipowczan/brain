---
title: "Higgsfield"
date: 2026-11-26
enableToc: true
openToc: true
tags: ["tool", "ai", "video", "image-generation", "text-to-speech", "audio", "mcp", "cli", "upscaling"]
type: tool
sources: ["_raw/processed/2026-11-26_Claude Motion Graphics Pack (everything).zip", "_raw/processed/2026-11-26_Claude Motion Graphics - Guide.pdf", "_raw/processed/2026-11-26_yt-E70WCbv1nYc_anthropic-just-dropped-claude-motion-2-0-tutorial.md"]
agent-created: true
summary: "Paid creative AI platform that puts image, video, voice, music, sound-effect and upscaling models (Nano Banana Pro, GPT Image, Kling, Seedance, Veo, ElevenLabs, Mirelo) behind one credit account, reachable from Claude through an MCP connector or the higgsfield CLI; models, credit prices and pitfalls as of November 2026, from Samin Yasar's motion-ads pack."
homepage: "https://higgsfield.ai/"
---

# Higgsfield

🗒️ [Higgsfield](https://higgsfield.ai/) is a paid creative AI platform: one account and one credit balance for image, video, voice, music, sound-effect and upscaling models from many vendors. For an agent the point is that it can be connected to Claude, so Claude can quote, generate, wait for and download every kind of media from one place.

Everything below comes from Samin Yasar's Claude Motion Graphics Pack, where Higgsfield powers Levels 2 and 3 ([[Claude Motion Graphics in Three Levels (Samin Yasar)]], [[Motion Ads]]). He links it through a personal sign-up link with his handle in it (likely a referral link; that is my inference), so read it as one promoter's working notes, not a review.

## Links

### Description

🧩 **Two ways to connect:**

- **The connector** (Claude desktop app, Claude Code, claude.ai): on higgsfield.ai open MCP → "Add Higgsfield to Claude" → Continue. Its tools then appear in Claude: generate an image, a video or audio, estimate a cost, wait for jobs, upload media, show the balance and transactions, upscale a video.
- **The CLI** (a terminal): `higgsfield auth login`, then `account status`, `model list --video` (or `--image`, `--audio`), `model get <model>` for a model's parameters, `generate cost`, `generate create`, `generate wait`, `account transactions`, `voices list`.

Media can be passed as a local file (uploaded for you), an upload ID, or the ID of an earlier job, which is how one generated still becomes the reference for the next.

🧩 **The models that worked for him (November 2026):**

| Job | Model | Settings | Credits |
|---|---|---|---|
| Keyframe stills | `nano_banana_pro` | 4K, 16:9, real photos attached as references | 4 |
| Exact text, or a one-change edit on a still | `gpt_image_2_6` | 4K, quality high or max | 3.25 to 12 |
| A shot that must join (first + last frame) | `kling4_0` | image-to-video, 5 s, 1080p, start and end image | 18.75 |
| The same, cheaper | `kling_o3_flf` | 5 s, pro mode, sound off (a native 4K mode exists) | 6.25 (30 at 4K) |
| Music | `elevenlabs_music_v2_5` | exact duration, instrumental, two takes | about 4 for 27 s |
| Sound effects | `mirelo_text_to_audio` | 2 to 10 s | 0.5 to 1.5 |
| Voiceover | `elevenlabs_v4` | one take, stability 0.5, similarity 0.8 | about 1.6 a take |
| Transcription | `speech2text` | | under 1 |
| 4K upscale of the joined picture | `bytedance_video_upscale` | pro, 4K | 150 for 20 s |

Also tried and not used: `seedance_2_5` (loose with the start frame, misspelt text) and `veo3_1` (start frame only, so it can't land on the next shot). Details in the model comparison in [[Claude Motion Graphics in Three Levels (Samin Yasar)]].

🧩 **Credit rules:** agree a budget in credits and tell Claude before the first paid job; quote every job; log model, purpose, quote, job ID, charge and a verdict; stop and ask before going over; **check the first charge on any model you haven't used** (one job was quoted 37.5 and charged 150); failed and refused jobs are refunded, but confirm it in the transactions. If other work runs on the same account, sum your own log instead of reading the balance.

🧩 **Things that bit him:**

- `--wait` on `generate create` can hang at submit or upload. No job exists and nothing is charged, but the command never returns: submit without it, then `generate wait` or poll `generate get`.
- A cost estimate can hang when given a job ID as its video input; upload the clip first and pass the upload ID.
- Some models can't quote. Don't run them without asking.
- Don't submit a second long job before the first has come back: he paid twice for the wrong tool that way.
- Content filters give false refusals on harmless stills (a wrist, a hand). Re-run them.
- Flag names differ per model (`--aspect_ratio` on one, `--mode` on another); read `model get`.
- One "enhancer" was an SDR-to-HDR converter, not an upscaler: up to 44 minutes for a file of the same size.

🧩 **Ready-made workflows:** Higgsfield also offers workflows for editing, sorting footage and putting text over video. The pack says they were not used in its builds and treats them as untested. The video names one, Katana, for sorting footage and putting text on it; the pack never names Katana, and I read it as one of these workflows.

### Download or use

- Sign up at [higgsfield.ai](https://higgsfield.ai/), then add the MCP connector to Claude or install the `higgsfield` CLI.
- Paid, credit-based. Models and prices change often: have Claude quote before every job.

## Reasoning for

One account instead of separate subscriptions for an image model, a video model, a voice service and a music service, and a connector that lets Claude drive all of them with cost estimates. That is what makes the Level 2 and Level 3 workflows in [[Motion Ads]] possible from a chat. It also fits the point in [[Software 3.0]] that products win by designing the system around a model; that note's example is Higgsfield wrapping Nano Banana in a UI.

Caveats:

- Every fact here comes from one creator who promotes it with a personal sign-up link. The video also promoted a Black Friday sale (up to 70% off) and three free days of the MCP; I left those out as time-limited.
- Prices are what he paid in November 2026, and one quote was four times below the charge.
- I have no account and have not used it.

## Alternatives considered

- [[Replicate]]: one API for thousands of open models, pay per use, no creative UI
- Open Generative AI (formerly "Open Higgs Field"): a self-hosted dashboard over 200+ models with your own API keys, from [[10 Free GitHub Repos That Replace Paid Tools]]
- Direct vendor APIs: [[ElevenLabs]] for voice and music, [[Google Gemini]] for Nano Banana, [[BytePlus Seedream]] for images, [[OpenAI]] for GPT Image
- [[OpenMontage]]: orchestrates Runway, Veo and Kling as providers inside its own pipelines
- [[Topaz Labs]]: dedicated image and video upscaling

## Resources

- [higgsfield.ai](https://higgsfield.ai/)
- [[Claude Motion Graphics in Three Levels (Samin Yasar)]]: the three-level method that uses it
- [[Motion Ads]]: the skill with `hf_submit.sh` and `credit_log.py` for the CLI
- [[GPT Image 2 + Seedance Workflow]]: another image-then-video model pairing

---
Template: [[templates/tool]]
