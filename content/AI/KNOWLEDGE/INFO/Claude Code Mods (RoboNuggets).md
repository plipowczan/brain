---
title: "Claude Code Mods (RoboNuggets)"
date: 2026-10-12
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "claude-code", "harness", "extensibility", "mods"]
type: knowledge-note
source: "_raw/processed/2026-10-12_yt-lDrAZ1wAyVs_9-new-claude-mods-that-can-truly-change-how-you-work.md"
agent-created: true
summary: "Jay (RoboNuggets) on Claude Code mods, the add-ons that run inside Claude Code and change its UI and behaviour: how they differ from skills and MCP, nine worth installing, and how to have Claude build your own."
source_url: "https://www.youtube.com/watch?v=lDrAZ1wAyVs"
video_id: "lDrAZ1wAyVs"
channel: "Jay E | RoboNuggets"
duration: "12m47s"
published: 2026-10-08
transcription: captions
---

# Claude Code Mods (RoboNuggets)

## 🗒️ Description

A 13-minute YouTube walkthrough by Jay of [RoboNuggets](https://www.youtube.com/watch?v=lDrAZ1wAyVs) on **mods**, the newest extension surface in [[Claude Code]]. A mod is a small add-on that runs *inside* Claude Code and changes how it looks and behaves: extra buttons, side panels, a progress bar, even a mini-game. You describe the feature you wish Claude Code had and it builds that feature into itself.

🚀 **TL;DR**

- Skills teach Claude *how to do a job*. Connectors (MCP) plug it into *another app*. A mod **changes Claude Code itself**, including what is drawn on screen.
- Nine mods are worth a look: a subagent progress panel, themes, a "you should know" watcher, a live file tree, a prompt-cache warning, a destructive-command gate, a feedback-to-rule catcher, an in-terminal browser and an edit replay.
- Making your own is "just ask Claude": a built-in skill knows how mods are put together.
- Source caveat: the channel sells a paid community and a PDF of the nine prompts, so read it as an enthusiastic walkthrough, not a review. Version numbers and dates below are as the video states them.

## 🔗 Links

- [What a mod is](#-what-a-mod-is)
- [The nine mods](#-the-nine-mods)
- [Build your own](#-build-your-own)
- [What I take from it](#-what-i-take-from-it)
- [Takeaways](#-takeaways)

## 🧩 What a mod is

| | Does | Runs |
|---|---|---|
| **Skill** | Tells Claude how to do a job (a handbook) | As instructions Claude reads |
| **Connector (MCP)** | Plugs Claude into another application | Outside Claude Code |
| **Mod** | Changes Claude Code's own UI and behaviour | Inside Claude Code |

**How it works.** Every time Claude Code does something (runs a command, starts a helper) it emits an **event**. A mod is a small piece of code that listens for events and can do one of three things with each: **watch** it, **change** it, or **handle** it itself. The video's example, Savvy Progress, uses all three: it watches subagent starts and model calls, changes the view above the prompt, and draws the whole agents panel itself.

**Availability (per the video).**

- Shipped on 1 October 2026 and switched on in the latest Claude Code. Needs **2.1.287 or newer**.
- Works in the **terminal** and in the **Code tab of the desktop app**. At recording time it was not yet in the VS Code extension.
- No extra charge, but you need a paid plan (that is what includes Claude Code). A mod that calls a model in the background uses your normal usage.
- Most mods run on **deterministic code**, so they cost no tokens. The exception named is the watcher in #3, which runs a second agent.

## 🧩 The nine mods

| # | Mod | What it does | Cost / note |
|---|-----|--------------|-------------|
| 1 | [Savvy Progress](https://youtube.com/watch?v=lDrAZ1wAyVs&t=122s) | Progress bar above the prompt. For long runs with subagents, a live panel per helper showing its model, progress and rough API cost, with customisable pixel-claw mascots (designer, developer…) | Not stated (it reads events, so likely deterministic). The video's showcase for watch / change / handle |
| 2 | [Claude Skins](https://youtube.com/watch?v=lDrAZ1wAyVs&t=237s) | Reskins how tool calls render: icons per tool, coloured edits. The open-source repo ships seven themes (Tokyo is one), and you can ask for any palette or design system | Display only, so the safest first mod |
| 3 | ["You should know"](https://youtube.com/watch?v=lDrAZ1wAyVs&t=274s) | Built by Anthropic. A second agent reads Claude's output and pops up the one thing you might miss in a wall of text. In the demo it flagged the cost of a video-generation call. You can steer what it watches (costs, customer issues…) | **Extra tokens**: it runs a second agent |
| 4 | [File Tree](https://youtube.com/watch?v=lDrAZ1wAyVs&t=365s) | Right-hand file panel. A file shimmers while Claude touches it and turns green once the change is committed. Useful outside code too, e.g. which of many documents were opened or changed | No token cost |
| 5 | [Cache Tax](https://youtube.com/watch?v=lDrAZ1wAyVs&t=424s) | The prompt cache goes cold after about an hour on a normal subscription, and the next message then re-reads the whole conversation. This mod stops you before such a message and shows the token / API cost. `/keepwarm` pings the session just before the cache expires | Can save usage in long sessions |
| 6 | [Blast Radius](https://youtube.com/watch?v=lDrAZ1wAyVs&t=495s) | Built by Anthropic. Intercepts risky commands such as deleting a folder, lists exactly which files would go, and needs a human to press Proceed or Cancel | Guardrail, not a cost |
| 7 | [Reflect](https://youtube.com/watch?v=lDrAZ1wAyVs&t=544s) | When your feedback contains trigger phrases ("no", "this doesn't look good", "I wish we'd done it this way"), a band above the prompt offers to save it as a permanent rule in `CLAUDE.md` or a skill file. One click and Claude writes the rule. Jay likens it to RLHF on a personal, micro scale | Writes to your rule files |
| 8 | [Terminal browser](https://youtube.com/watch?v=lDrAZ1wAyVs&t=579s) | Opens a real web browser beside the chat for terminal users, so you can review a page Claude built or a GitHub pull request without leaving the terminal | Terminal users only |
| 9 | [Replay Theater](https://youtube.com/watch?v=lDrAZ1wAyVs&t=609s) | Anthropic sample mod. After a turn a replay button steps through every file edit Claude just made. Not limited to code: with an article it shows where Claude changed your draft | Not stated |

## 🧩 Build your own

[Walkthrough from 10:43](https://youtube.com/watch?v=lDrAZ1wAyVs&t=643s):

1. Update Claude Code to **2.1.287+** (`claude update` in the terminal; the desktop app shows an update popup).
2. Open Claude Code and describe the modification you want. A **built-in skill, `plugin-authoring`**, tells Claude how mods are built.
3. It offers to turn on **hot reloading** for the session, so the mod appears as soon as Claude finishes building it.
4. Iterate by talking to it normally ("make the bar thinner").
5. A mod Claude builds is **temporary by default**. When you like one, ask Claude to **save it as a plugin and install it**, and it loads every time.

## 📒 What I take from it

- **Corroborated here:** my Claude Code install lists a built-in `plugin-authoring` skill described as "Make a mod", which matches the name and purpose the video gives. Everything else about the nine mods is from the video alone; none were run while writing this note.
- **Ideas worth testing for this vault**, not conclusions:
  - **Blast Radius** is the UI version of my existing safety rule ("never delete user-authored content without confirmation") and of the [[AI-Native SDLC Playbook]] line *skills advise, hooks enforce, humans approve at gates*. Mods are a third enforcement surface next to hooks.
  - **Reflect** overlaps with [[Autoharness]]: both turn session corrections into durable rules. Reflect asks a human to click save each time; Autoharness distills and prunes automatically. The click-to-approve model is the safer end of that range, given [[DELEGATE-52]]'s warning that unattended edits compound.
  - **Cache Tax** and `/keepwarm` fit the cost levers in [[Token Optimization for Claude Code]].
  - **Terminal browser** is redundant in the desktop app, which already has a browser pane.
- **Malleable software:** Jay hopes OpenAI follows and calls this the start of "more malleable software". [[oh-my-pi]] takes a similar line from the other side: its extensions are plain TypeScript modules ("ask omp to write the piece you're missing, then `/reload-plugins`").
- **Open questions:** how mods are sandboxed, what they can read (a mod sees every tool event), and whether a third-party mod can be trusted. Treat installing one like installing a hook: read the code first. Relevant to [[AI Agent Security]].

## 📖 Takeaways

1. A mod changes the **harness itself**, where a skill changes the instructions and MCP adds reach. That makes it the most invasive extension point, and the most powerful one.
2. Start with a display-only mod (**Claude Skins**) before anything that sits on the event stream.
3. The guardrail mods (**Blast Radius**, **Cache Tax**) are the ones with measurable value: they stop a costly or irreversible step *before* it happens.
4. Ask Claude for the mod, keep it local while testing, and save it as a plugin only once it earns its place.

## 📖 Further reading/watching

- Source video: [9 NEW Claude Mods that can truly change how you work](https://www.youtube.com/watch?v=lDrAZ1wAyVs) (Jay E | RoboNuggets, 2026-10-08). The PDF with all nine prompts is linked in the video description (not fetched).
- [[Claude Code]] · [[Claude Code Best Practice]] · [[Harness Engineering]] · [[Agent Skills]]
- [[Extending Claude Code — Tools for Its Blind Spots]] — the skills and MCP tools I use to extend Claude Code
- [[Autoharness]] · [[Token Optimization for Claude Code]] · [[AI-Native SDLC Playbook]] · [[AI Agent Security]]
- [[oh-my-pi]] — another harness built around user-written extensions
- [[Meme Generation for Coding Agents]] — mods as the in-process host for a meme skill (`turn.complete`, the Desktop-only `Svg` element); the mod API churns and mods are unsandboxed

---
Template: [[templates/knowledge_note_info]]
