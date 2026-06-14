---
video_id: RegzpFdW8pM
source_url: https://www.youtube.com/watch?v=RegzpFdW8pM
title: "10 GitHub Repos So Good They Shouldn't Be Free — And the Paid Tools They Kill"
channel: "Hyperautomation Labs"
uploader_id: "@hyperautomationlabs1045"
duration: 556
duration_human: "9:16"
published: 2026-06-01
language: en
transcription: captions
chapters:
  - { start: 0, title: "You're still paying for these" }
  - { start: 38, title: "1. AutoHedge — an autonomous hedge fund" }
  - { start: 85, title: "2. Vibe-Trading — the whole trading floor" }
  - { start: 136, title: "3. Fincept — a Bloomberg Terminal for $0" }
  - { start: 182, title: "4. LibreChat — every model, your keys" }
  - { start: 220, title: "5. Open Generative AI — 200+ models, one dashboard" }
  - { start: 273, title: "6. Open-LLM-VTuber — an offline AI companion" }
  - { start: 319, title: "7. Claude Ads — the agency audit, free" }
  - { start: 359, title: "8. Agentic Inbox — AI email in your own cloud" }
  - { start: 401, title: "9. Camofox — an invisible browser for agents" }
  - { start: 456, title: "10. Hyperframes — agent writes HTML, renders MP4" }
  - { start: 504, title: "Pick one. Install it. Cancel something." }
tags: ["AI", "AI agents", "AI tips", "AI tools", "ChatGPT", "Shorts", "artificial intelligence", "best github repos", "bloomberg alternative", "claude code", "cloudflare", "developer tools", "free software", "free tools", "github", "hyperautomation labs", "librechat", "open source", "open source AI", "self-hosted", "tech"]
categories: ["Science & Technology"]
fetched: 2026-06-14T11:32:51Z
---

# 10 GitHub Repos So Good They Shouldn't Be Free — And the Paid Tools They Kill

[0:02] Right now, there's a folder on GitHub
[0:03] Right now, there's a folder on GitHub that does the exact job you're paying a
[0:06] that does the exact job you're paying a
[0:06] that does the exact job you're paying a monthly bill for.
[0:07] monthly bill for.
[0:07] monthly bill for. Maybe six of them.
[0:09] Maybe six of them.
[0:09] Maybe six of them. A Bloomberg terminal
[0:11] A Bloomberg terminal
[0:11] A Bloomberg terminal that runs on your laptop.
[0:13] that runs on your laptop.
[0:14] that runs on your laptop. The ad agency audit you pay thousands
[0:16] The ad agency audit you pay thousands
[0:16] The ad agency audit you pay thousands for.
[0:17] for.
[0:17] for. The creative studio subscriptions.
[0:19] The creative studio subscriptions.
[0:19] The creative studio subscriptions. Somebody already built the free
[0:21] Somebody already built the free
[0:21] Somebody already built the free open-source version.
[0:23] open-source version.
[0:23] open-source version. And most people will never hear about
[0:24] And most people will never hear about
[0:24] And most people will never hear about it.
[0:25] it.
[0:25] it. So, I went and pulled 10 of them.
[0:28] So, I went and pulled 10 of them.
[0:28] So, I went and pulled 10 of them. 10 repositories so good they genuinely
[0:31] 10 repositories so good they genuinely
[0:31] 10 repositories so good they genuinely shouldn't be free.
[0:32] shouldn't be free.
[0:32] shouldn't be free. And for each one, I'm going to show you
[0:34] And for each one, I'm going to show you
[0:34] And for each one, I'm going to show you the exact paid product it replaces.
[0:37] the exact paid product it replaces.
[0:37] the exact paid product it replaces. Let's go.
[0:38] Let's go.
[0:38] Let's go. Number one, Auto Hedge.
[0:40] Number one, Auto Hedge.
[0:40] Number one, Auto Hedge. This is an autonomous hedge fund in
[0:43] This is an autonomous hedge fund in
[0:43] This is an autonomous hedge fund in Python that you install with one line.
[0:46] Python that you install with one line.
[0:46] Python that you install with one line. Under the hood, it's four AI agents
[0:49] Under the hood, it's four AI agents
[0:49] Under the hood, it's four AI agents working as a team.
[0:50] working as a team.
[0:50] working as a team. A director writes the investment thesis.
[0:53] A director writes the investment thesis.
[0:53] A director writes the investment thesis. A quant runs the analysis to check it. A
[0:56] A quant runs the analysis to check it. A
[0:56] A quant runs the analysis to check it. A risk manager decides how big the
[0:58] risk manager decides how big the
[0:58] risk manager decides how big the position should be.
[1:00] position should be.
[1:00] position should be. And an execution agent actually places
[1:02] And an execution agent actually places
[1:02] And an execution agent actually places the order.
[1:03] the order.
[1:03] the order. It operates live on Solana.
[1:06] It operates live on Solana.
[1:06] It operates live on Solana. The thing a trading firm pays a desk of
[1:08] The thing a trading firm pays a desk of
[1:08] The thing a trading firm pays a desk of people to do, generate the idea,
[1:10] people to do, generate the idea,
[1:10] people to do, generate the idea, size it,
[1:12] size it,
[1:12] size it, pull the trigger,
[1:13] pull the trigger,
[1:13] pull the trigger, pip install Auto Hedge,
[1:15] pip install Auto Hedge,
[1:16] pip install Auto Hedge, and it's running.
[1:17] and it's running.
[1:17] and it's running. Now, obviously, real money, real risk.
[1:20] Now, obviously, real money, real risk.
[1:20] Now, obviously, real money, real risk. This is not advice.
[1:22] This is not advice.
[1:22] This is not advice. But the architecture,
[1:23] But the architecture,
[1:23] But the architecture, it's all right there for free.
[1:25] it's all right there for free.
[1:25] it's all right there for free. Number two, Vibe Trading.
[1:28] Number two, Vibe Trading.
[1:28] Number two, Vibe Trading. If Auto Hedge is one fund, this is the
[1:31] If Auto Hedge is one fund, this is the
[1:31] If Auto Hedge is one fund, this is the whole trading floor.
[1:33] whole trading floor.
[1:33] whole trading floor. It runs on a directed graph.
[1:35] It runs on a directed graph.
[1:35] It runs on a directed graph. Agents that hand work to each other in
[1:37] Agents that hand work to each other in
[1:37] Agents that hand work to each other in order.
[1:39] order.
[1:39] order. And it ships with 77 specialized finance
[1:42] And it ships with 77 specialized finance
[1:42] And it ships with 77 specialized finance skills and 29 ready-made teams of
[1:45] skills and 29 ready-made teams of
[1:45] skills and 29 ready-made teams of specialist agents.
[1:47] specialist agents.
[1:47] specialist agents. Ichimoku, Elliott Wave,
[1:49] Ichimoku, Elliott Wave,
[1:49] Ichimoku, Elliott Wave, smart money concepts,
[1:51] smart money concepts,
[1:51] smart money concepts, risk parity,
[1:53] risk parity,
[1:53] risk parity, the analysis methods a professional desk
[1:55] the analysis methods a professional desk
[1:55] the analysis methods a professional desk uses.
[1:56] uses.
[1:56] uses. It's crypto desk
[1:58] It's crypto desk
[1:58] It's crypto desk pulls live liquidation heat maps.
[2:00] pulls live liquidation heat maps.
[2:01] pulls live liquidation heat maps. And the best part,
[2:02] And the best part,
[2:02] And the best part, you can watch the agents debate the
[2:04] you can watch the agents debate the
[2:04] you can watch the agents debate the trade in real time.
[2:05] trade in real time.
[2:05] trade in real time. One arguing the bull case,
[2:07] One arguing the bull case,
[2:07] One arguing the bull case, one
[2:08] one
[2:08] one arguing the bear
[2:10] arguing the bear
[2:10] arguing the bear before they ever agree.
[2:12] before they ever agree.
[2:12] before they ever agree. A terminal seat plus an analyst open
[2:14] A terminal seat plus an analyst open
[2:15] A terminal seat plus an analyst open source.
[2:16] source.
[2:16] source. Number three,
[2:17] Number three,
[2:17] Number three, Fincept terminal.
[2:19] Fincept terminal.
[2:19] Fincept terminal. And this is the one that made me stop
[2:20] And this is the one that made me stop
[2:20] And this is the one that made me stop scrolling.
[2:21] scrolling.
[2:22] scrolling. It's a Bloomberg terminal replacement
[2:24] It's a Bloomberg terminal replacement
[2:24] It's a Bloomberg terminal replacement that runs on your laptop.
[2:26] that runs on your laptop.
[2:26] that runs on your laptop. Bloomberg charges around $27,000 a year
[2:29] Bloomberg charges around $27,000 a year
[2:30] Bloomberg charges around $27,000 a year for a seat.
[2:31] for a seat.
[2:31] for a seat. Fincept is zero.
[2:34] Fincept is zero.
[2:34] Fincept is zero. It comes with CFA level analytics,
[2:37] It comes with CFA level analytics,
[2:37] It comes with CFA level analytics, over 100 data connectors, Polygon, the
[2:40] over 100 data connectors, Polygon, the
[2:40] over 100 data connectors, Polygon, the World Bank, the IMF,
[2:43] World Bank, the IMF,
[2:43] World Bank, the IMF, and 37 AI investor agents
[2:45] and 37 AI investor agents
[2:45] and 37 AI investor agents modeled on the legends,
[2:47] modeled on the legends,
[2:47] modeled on the legends, Buffett,
[2:48] Buffett,
[2:48] Buffett, Munger, Graham,
[2:50] Munger, Graham,
[2:50] Munger, Graham, Lynch.
[2:52] Lynch.
[2:52] Lynch. You can run a ticker past Warren
[2:53] You can run a ticker past Warren
[2:53] You can run a ticker past Warren Buffett's framework
[2:55] Buffett's framework
[2:55] Buffett's framework and a risk model in the same window.
[2:58] and a risk model in the same window.
[2:58] and a risk model in the same window. 24,000 stars on GitHub
[3:01] 24,000 stars on GitHub
[3:01] 24,000 stars on GitHub and it costs nothing.
[3:02] and it costs nothing.
[3:02] and it costs nothing. Number four,
[3:04] Number four,
[3:04] Number four, LibreChat.
[3:05] LibreChat.
[3:05] LibreChat. Every model chat GPT runs, plus Claude,
[3:09] Every model chat GPT runs, plus Claude,
[3:09] Every model chat GPT runs, plus Claude, plus Gemini, plus DeepSeek, plus 20 more
[3:12] plus Gemini, plus DeepSeek, plus 20 more
[3:12] plus Gemini, plus DeepSeek, plus 20 more in one self-hosted interface you
[3:13] in one self-hosted interface you
[3:13] in one self-hosted interface you control.
[3:15] control.
[3:15] control. It has native MCP support.
[3:17] It has native MCP support.
[3:17] It has native MCP support. So, it plugs into tools the same way
[3:19] So, it plugs into tools the same way
[3:19] So, it plugs into tools the same way Claude does.
[3:20] Claude does.
[3:21] Claude does. Here's the refrain.
[3:22] Here's the refrain.
[3:22] Here's the refrain. Open AI charges you 20 bucks a month to
[3:25] Open AI charges you 20 bucks a month to
[3:25] Open AI charges you 20 bucks a month to use their wrapper around the model.
[3:27] use their wrapper around the model.
[3:27] use their wrapper around the model. LibreChat is the wrapper, open source,
[3:30] LibreChat is the wrapper, open source,
[3:30] LibreChat is the wrapper, open source, and you point it at your own keys.
[3:32] and you point it at your own keys.
[3:33] and you point it at your own keys. You own the data, the history, the whole
[3:34] You own the data, the history, the whole
[3:34] You own the data, the history, the whole thing.
[3:35] thing.
[3:35] thing. Same chat experience.
[3:37] Same chat experience.
[3:37] Same chat experience. None of the subscription and none of the
[3:39] None of the subscription and none of the
[3:39] None of the subscription and none of the lock-in.
[3:40] lock-in.
[3:40] lock-in. Number five,
[3:41] Number five,
[3:41] Number five, Open Generative AI.
[3:44] Open Generative AI.
[3:44] Open Generative AI. It was launched as Open Higgs Field,
[3:46] It was launched as Open Higgs Field,
[3:46] It was launched as Open Higgs Field, so don't get thrown by the rename.
[3:49] so don't get thrown by the rename.
[3:49] so don't get thrown by the rename. It's a single self-hosted cinema studio
[3:52] It's a single self-hosted cinema studio
[3:52] It's a single self-hosted cinema studio that puts over 200 AI models behind one
[3:56] that puts over 200 AI models behind one
[3:56] that puts over 200 AI models behind one interface.
[3:57] interface.
[3:57] interface. Flux, Sora, Kling, Veo, GPT-4o,
[4:01] Flux, Sora, Kling, Veo, GPT-4o,
[4:01] Flux, Sora, Kling, Veo, GPT-4o, all in one place.
[4:03] all in one place.
[4:03] all in one place. Text to image, image to video, a cinema
[4:06] Text to image, image to video, a cinema
[4:06] Text to image, image to video, a cinema mode with real camera controls.
[4:09] mode with real camera controls.
[4:09] mode with real camera controls. Now, the honest part, because it
[4:11] Now, the honest part, because it
[4:11] Now, the honest part, because it matters. This is the control panel, not
[4:15] matters. This is the control panel, not
[4:15] matters. This is the control panel, not the GPUs.
[4:16] the GPUs.
[4:16] the GPUs. The big proprietary models run in the
[4:19] The big proprietary models run in the
[4:19] The big proprietary models run in the cloud.
[4:20] cloud.
[4:20] cloud. So, you bring your own API keys.
[4:23] So, you bring your own API keys.
[4:23] So, you bring your own API keys. What it kills
[4:24] What it kills
[4:24] What it kills is the chaos.
[4:26] is the chaos.
[4:26] is the chaos. Six separate creative subscriptions and
[4:29] Six separate creative subscriptions and
[4:29] Six separate creative subscriptions and six separate tabs
[4:30] six separate tabs
[4:30] six separate tabs collapsed into one open dashboard you
[4:32] collapsed into one open dashboard you
[4:32] collapsed into one open dashboard you own.
[4:33] own.
[4:33] own. Number six,
[4:35] Number six,
[4:35] Number six, Open LLM V-Tuber.
[4:37] Open LLM V-Tuber.
[4:37] Open LLM V-Tuber. This one's just delightful.
[4:40] This one's just delightful.
[4:40] This one's just delightful. It's a live 2D animated AI companion
[4:43] It's a live 2D animated AI companion
[4:43] It's a live 2D animated AI companion that runs fully offline.
[4:45] that runs fully offline.
[4:45] that runs fully offline. It can see your screen.
[4:47] It can see your screen.
[4:47] It can see your screen. It hears your voice,
[4:49] It hears your voice,
[4:49] It hears your voice, and it shows its inner thoughts as a
[4:51] and it shows its inner thoughts as a
[4:51] and it shows its inner thoughts as a separate text layer.
[4:53] separate text layer.
[4:53] separate text layer. So, you literally watch it reason before
[4:55] So, you literally watch it reason before
[4:55] So, you literally watch it reason before it speaks.
[4:57] it speaks.
[4:57] it speaks. There's a pet mode that floats it on
[4:59] There's a pet mode that floats it on
[4:59] There's a pet mode that floats it on your desktop while you work.
[5:01] your desktop while you work.
[5:01] your desktop while you work. And you can swap the brain,
[5:03] And you can swap the brain,
[5:03] And you can swap the brain, the underlying LLM, by changing one line
[5:06] the underlying LLM, by changing one line
[5:06] the underlying LLM, by changing one line in a config file.
[5:08] in a config file.
[5:08] in a config file. The character companion apps charge a
[5:10] The character companion apps charge a
[5:11] The character companion apps charge a monthly fee
[5:12] monthly fee
[5:12] monthly fee and keep your conversations on their
[5:14] and keep your conversations on their
[5:14] and keep your conversations on their servers.
[5:15] servers.
[5:15] servers. This one lives on your machine
[5:17] This one lives on your machine
[5:17] This one lives on your machine and answers to you.
[5:19] and answers to you.
[5:19] and answers to you. Number seven,
[5:20] Number seven,
[5:20] Number seven, Claude Ads.
[5:22] Claude Ads.
[5:22] Claude Ads. This is a free Claude code skill
[5:25] This is a free Claude code skill
[5:25] This is a free Claude code skill that audits your paid advertising
[5:27] that audits your paid advertising
[5:27] that audits your paid advertising the way an expensive agency would.
[5:29] the way an expensive agency would.
[5:29] the way an expensive agency would. It runs over 200 verified checks across
[5:32] It runs over 200 verified checks across
[5:33] It runs over 200 verified checks across Google, Meta, YouTube, LinkedIn, TikTok,
[5:36] Google, Meta, YouTube, LinkedIn, TikTok,
[5:36] Google, Meta, YouTube, LinkedIn, TikTok, and Microsoft Ads.
[5:38] and Microsoft Ads.
[5:38] and Microsoft Ads. And it does it with six sub-agents
[5:40] And it does it with six sub-agents
[5:40] And it does it with six sub-agents firing in parallel at the same time.
[5:43] firing in parallel at the same time.
[5:43] firing in parallel at the same time. Then, it consolidates everything into a
[5:44] Then, it consolidates everything into a
[5:45] Then, it consolidates everything into a a ads health score
[5:47] a ads health score
[5:47] a ads health score With the fixes prioritized by impact.
[5:50] With the fixes prioritized by impact.
[5:50] With the fixes prioritized by impact. An agency charges you anywhere from a
[5:52] An agency charges you anywhere from a
[5:52] An agency charges you anywhere from a couple grand to 10,000 for this exact
[5:55] couple grand to 10,000 for this exact
[5:55] couple grand to 10,000 for this exact audit.
[5:56] audit.
[5:56] audit. This runs in your terminal on your
[5:57] This runs in your terminal on your
[5:58] This runs in your terminal on your account for nothing.
[5:59] account for nothing.
[5:59] account for nothing. Number eight,
[6:01] Number eight,
[6:01] Number eight, Agentic inbox.
[6:03] Agentic inbox.
[6:03] Agentic inbox. Cloudflare, the actual company,
[6:06] Cloudflare, the actual company,
[6:06] Cloudflare, the actual company, just open-sourced an email client where
[6:08] just open-sourced an email client where
[6:08] just open-sourced an email client where an AI agent reads your inbox and drafts
[6:11] an AI agent reads your inbox and drafts
[6:11] an AI agent reads your inbox and drafts your replies for you.
[6:13] your replies for you.
[6:13] your replies for you. And the architecture is the point.
[6:15] And the architecture is the point.
[6:15] And the architecture is the point. It runs entirely on Cloudflare workers.
[6:18] It runs entirely on Cloudflare workers.
[6:19] It runs entirely on Cloudflare workers. Every mailbox lives in its own isolated
[6:21] Every mailbox lives in its own isolated
[6:21] Every mailbox lives in its own isolated durable object.
[6:23] durable object.
[6:23] durable object. And it uses Cloudflare's own AI.
[6:26] And it uses Cloudflare's own AI.
[6:26] And it uses Cloudflare's own AI. So, your email never leaves your
[6:27] So, your email never leaves your
[6:27] So, your email never leaves your account.
[6:29] account.
[6:29] account. The paid AI inboxes
[6:31] The paid AI inboxes
[6:31] The paid AI inboxes route your mail through someone else's
[6:33] route your mail through someone else's
[6:33] route your mail through someone else's servers and bill you monthly.
[6:35] servers and bill you monthly.
[6:35] servers and bill you monthly. This one deploys to infrastructure you
[6:38] This one deploys to infrastructure you
[6:38] This one deploys to infrastructure you already control.
[6:39] already control.
[6:39] already control. And the data stays yours.
[6:41] And the data stays yours.
[6:41] And the data stays yours. Number nine,
[6:42] Number nine,
[6:42] Number nine, Camo Fox.
[6:44] Camo Fox.
[6:44] Camo Fox. If you build
[6:46] If you build
[6:46] If you build AI agents that browse the web,
[6:48] AI agents that browse the web,
[6:48] AI agents that browse the web, you've hit the wall.
[6:50] you've hit the wall.
[6:50] you've hit the wall. Bot detection blocks them instantly.
[6:53] Bot detection blocks them instantly.
[6:53] Bot detection blocks them instantly. Camo Fox makes an agent's browser
[6:55] Camo Fox makes an agent's browser
[6:55] Camo Fox makes an agent's browser invisible.
[6:56] invisible.
[6:56] invisible. It's built on Camo Fox,
[6:58] It's built on Camo Fox,
[6:58] It's built on Camo Fox, a Firefox fork that spoofs the
[7:00] a Firefox fork that spoofs the
[7:00] a Firefox fork that spoofs the fingerprint, the WebGL,
[7:03] fingerprint, the WebGL,
[7:03] fingerprint, the WebGL, the audio and WebRTC signatures
[7:06] the audio and WebRTC signatures
[7:06] the audio and WebRTC signatures down at the C++ level.
[7:08] down at the C++ level.
[7:08] down at the C++ level. So, the browser doesn't look modified
[7:10] So, the browser doesn't look modified
[7:10] So, the browser doesn't look modified because it genuinely isn't.
[7:12] because it genuinely isn't.
[7:12] because it genuinely isn't. What Camo Fox adds on top
[7:15] What Camo Fox adds on top
[7:15] What Camo Fox adds on top is the part agents love.
[7:17] is the part agents love.
[7:17] is the part agents love. It returns the page as an accessibility
[7:20] It returns the page as an accessibility
[7:20] It returns the page as an accessibility tree instead of raw HTML.
[7:24] tree instead of raw HTML.
[7:24] tree instead of raw HTML. And that drops your token cost
[7:26] And that drops your token cost
[7:26] And that drops your token cost by around 90%.
[7:29] by around 90%.
[7:29] by around 90%. The commercial stealth scraping services
[7:32] The commercial stealth scraping services
[7:32] The commercial stealth scraping services that do this charge per request.
[7:34] that do this charge per request.
[7:35] that do this charge per request. This is yours.
[7:36] This is yours.
[7:36] This is yours. Number 10,
[7:38] Number 10,
[7:38] Number 10, Hyperframes.
[7:40] Hyperframes.
[7:40] Hyperframes. Hagen open-sourced a video framework.
[7:42] Hagen open-sourced a video framework.
[7:42] Hagen open-sourced a video framework. And it solves a very specific pain.
[7:45] And it solves a very specific pain.
[7:45] And it solves a very specific pain. Tools like Remotion are powerful, but
[7:48] Tools like Remotion are powerful, but
[7:48] Tools like Remotion are powerful, but you write your videos in React.
[7:51] you write your videos in React.
[7:51] you write your videos in React. Hyperframes flips that.
[7:53] Hyperframes flips that.
[7:53] Hyperframes flips that. Your agent writes plain HTML and the
[7:55] Your agent writes plain HTML and the
[7:55] Your agent writes plain HTML and the framework renders it to an MP4.
[7:58] framework renders it to an MP4.
[7:58] framework renders it to an MP4. No React, no JSX, no new format to teach
[8:02] No React, no JSX, no new format to teach
[8:02] No React, no JSX, no new format to teach the model.
[8:03] the model.
[8:03] the model. GSAP, Lottie, and 3.js
[8:07] GSAP, Lottie, and 3.js
[8:07] GSAP, Lottie, and 3.js all work inside it and it's
[8:09] all work inside it and it's
[8:09] all work inside it and it's deterministic. The same HTML always
[8:12] deterministic. The same HTML always
[8:12] deterministic. The same HTML always produces the exact same file, which is
[8:15] produces the exact same file, which is
[8:15] produces the exact same file, which is what you want for automation.
[8:16] what you want for automation.
[8:17] what you want for automation. If you've ever wanted an AI agent to
[8:19] If you've ever wanted an AI agent to
[8:19] If you've ever wanted an AI agent to generate real videos on a schedule, this
[8:21] generate real videos on a schedule, this
[8:21] generate real videos on a schedule, this is the missing piece
[8:23] is the missing piece
[8:23] is the missing piece and it's free.
[8:24] and it's free.
[8:24] and it's free. 10 repositories.
[8:26] 10 repositories.
[8:26] 10 repositories. Each one quietly replacing a product
[8:28] Each one quietly replacing a product
[8:28] Each one quietly replacing a product you're probably still being charged for.
[8:31] you're probably still being charged for.
[8:31] you're probably still being charged for. These aren't toys, they're real,
[8:34] These aren't toys, they're real,
[8:34] These aren't toys, they're real, they're maintained, and they're free.
[8:37] they're maintained, and they're free.
[8:37] they're maintained, and they're free. So, here's the move.
[8:39] So, here's the move.
[8:39] So, here's the move. Don't try to install all 10.
[8:42] Don't try to install all 10.
[8:42] Don't try to install all 10. Pick the one that hits the bill you're
[8:44] Pick the one that hits the bill you're
[8:44] Pick the one that hits the bill you're tired of paying and plug it into your
[8:46] tired of paying and plug it into your
[8:46] tired of paying and plug it into your workflow this week.
[8:47] workflow this week.
[8:47] workflow this week. I've put all 10, the links, what each
[8:51] I've put all 10, the links, what each
[8:51] I've put all 10, the links, what each one replaces, and the honest caveats
[8:54] one replaces, and the honest caveats
[8:54] one replaces, and the honest caveats into one free guide.
[8:57] into one free guide.
[8:57] into one free guide. Comment the word free stack and I'll
[9:00] Comment the word free stack and I'll
[9:00] Comment the word free stack and I'll send it straight to you.
[9:02] send it straight to you.
[9:02] send it straight to you. If you build with this stuff, the deep
[9:04] If you build with this stuff, the deep
[9:04] If you build with this stuff, the deep dives live here on YouTube, so
[9:06] dives live here on YouTube, so
[9:06] dives live here on YouTube, so subscribe.
[9:08] subscribe.
[9:08] subscribe. And the bite-size drops are on Instagram
[9:11] And the bite-size drops are on Instagram
[9:11] And the bite-size drops are on Instagram at Hyper Automation Labs.
[9:13] at Hyper Automation Labs.
[9:13] at Hyper Automation Labs. Now, go cancel something.
