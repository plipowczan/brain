---
title: "7 New Claude Features (RoboNuggets)"
date: 2026-11-22
enableToc: true
openToc: true
tags: ["knowledge", "info", "ai", "claude", "claude-code", "meetings", "whiteboard", "analytics", "mods", "cost-optimization"]
type: knowledge-note
sources: ["_raw/processed/2026-11-22_yt-OMfU5iq8Eik_anthropic-just-dropped-7-massive-claude-features-master-them.md", "_raw/processed/2026-11-22_yt-EFGvVCpW9zc_fable-5-2-is-insane-only-if-you-use-it-anthropic-s-way.md"]
agent-created: true
summary: "Jay (RoboNuggets) on seven new Claude features: Meetings, Whiteboards, Sheets and Data as built-in replacements for Granola, Miro, Google Sheets and Power BI, plus interactive connectors, custom desktop themes, and /advisor for Fable 5.2 judgement on a small share of its usage."
source_url: "https://www.youtube.com/watch?v=OMfU5iq8Eik"
video_id: "OMfU5iq8Eik"
channel: "Jay E | RoboNuggets"
duration: "15m23s"
published: 2026-11-22
transcription: captions
---

# 7 New Claude Features (RoboNuggets)

## 🗒️ Description

A 15-minute YouTube walkthrough by Jay of [RoboNuggets](https://www.youtube.com/watch?v=OMfU5iq8Eik), the same channel as [[Claude Code Mods (RoboNuggets)]], on a batch of Claude releases from November 2026. His framing: Anthropic wants Claude to **replace most of the apps a business pays for**, and four of the seven features are direct replacements for existing SaaS tools.

🚀 **TL;DR**

- **Four replacements inside Claude:** Meetings (≈ Granola / Otter), Whiteboards (≈ Miro / FigJam / Excalidraw), Sheets (≈ Google Sheets), Data (≈ Power BI). All are new and most are in beta, with real limits.
- **Three changes to Claude itself:** interactive connectors (Notion, Canva, HubSpot open beside the chat), custom themes for the desktop Code tab (built on mods), and `/advisor`, which lets the everyday model call **Fable 5.2** only at big decisions.
- **His advice:** pick the one or two features that change your work and master those; don't try to keep up with all of them.
- **Source caveat:** the channel sells a paid community and a PDF of the prompts used in the video, so read it as an enthusiastic walkthrough, not a review. Limits, plan availability and numbers below are as the video states them. The captions spell Anthropic "Entropic".

| # | Feature | Replaces | Who gets it (per the video) | Main limit |
|---|---------|----------|------------------------------|------------|
| 1 | [Meetings](#1-meetings) | Granola, Otter | Team / Enterprise, beta | Google Meet only |
| 2 | [Whiteboards](#2-whiteboards) | Miro, FigJam, Excalidraw | All plans, beta | Export to PNG only, no import |
| 3 | [Sheets](#3-sheets) | Google Sheets, Excel | Not stated | ~200,000 filled cells, no pivot tables |
| 4 | [Data](#4-data) | Power BI | All; two extras on Team / Enterprise | Needs a data connector |
| 5 | [Interactive connectors](#5-interactive-connectors) | Switching tabs | Connectors with an "interactive" badge | Quality-of-life only |
| 6 | [Custom themes](#6-custom-themes) | — | Desktop app, Code tab | Cosmetic unless you build function in |
| 7 | [Advisor](#7-advisor) | Running Fable 5.2 all the time | Claude Code | Not stated |

## 🔗 Links

- [1. Meetings](#1-meetings)
- [2. Whiteboards](#2-whiteboards)
- [3. Sheets](#3-sheets)
- [4. Data](#4-data)
- [5. Interactive connectors](#5-interactive-connectors)
- [6. Custom themes](#6-custom-themes)
- [7. Advisor](#7-advisor)
- [What I take from it](#-what-i-take-from-it)
- [Takeaways](#-takeaways)

## 🧩 Features

### 1. Meetings

[1:06](https://youtube.com/watch?v=OMfU5iq8Eik&t=66s) An AI note-taker built into Claude. Claude joins your team's **Google Meet** call as its own participant, takes notes, answers questions, and builds documents and artifacts while the call is still running.

- **Availability:** beta, launched a few days before the video, **Team and Enterprise plans only**, Google Meet only. Jay expects more plans and video apps later (his guess, not an announcement).
- **Setup:** Meetings in the left sidebar → connect Google Calendar once → pick a meeting → **Add Claude**. Claude joins when the call starts.
- **In the call:** say "Claude" out loud or type in the meeting chat. Example: at the end, ask for what was agreed, the decision points and the actions; it answers from the live transcript.
- **Artifacts mid-call:** ask for a document and Claude builds it as an artifact the team can review and have edited on the spot.
- **After the call:** each meeting gets its own page in Claude with the summary, action items, transcript and everything Claude made.
- **Unlike [[Tactiq]]**, this is the bot-joins-the-call model: Claude is a visible participant, not a browser extension listening in.

### 2. Whiteboards

[3:17](https://youtube.com/watch?v=OMfU5iq8Eik&t=197s) A shared board inside Claude where you talk, type or sketch, and Claude organises the ideas into diagrams, flows and groups. Jay's favourite of the batch: until now brainstorming with Claude meant a wall of text, or hooking Claude up to [[BUSINESS/TOOLS/Excalidraw|Excalidraw]] or [[Miro]].

- **Availability:** beta, **every plan**.
- **Start one:** ask in any chat ("start a whiteboard to plan our product launch"), or Artifacts in the sidebar → Whiteboard.
- **Input:** chat, voice transcription or existing files. In the demo Claude turned launch details into an ordered timeline with owners and dates.
- **Editing:** drag things yourself, share with the team, use the toolbar (sticky notes, shapes, a drawing pencil). To change one part, **drag a box around it** and ask Claude to change only that part.
- **Limits** ([4:54](https://youtube.com/watch?v=OMfU5iq8Eik&t=294s)): export as a **PNG image only**, and **no import** from a file, so an old Miro or FigJam board can't be loaded. Workaround: screenshot the old board and ask Claude to rebuild it, which "often works".

### 3. Sheets

[5:59](https://youtube.com/watch?v=OMfU5iq8Eik&t=359s) A spreadsheet artifact, pitched as a direct Google Sheets replacement. Good for trackers, budgets and any data that belongs in a table.

- **Start one:** ask in any chat, or Artifacts → Sheets.
- **What it does:** Claude writes **real formulas** you can copy across cells and tabs; click any number to see how it was worked out; conditional formatting; charts made by hand or by Claude.
- **Limits** ([6:44](https://youtube.com/watch?v=OMfU5iq8Eik&t=404s)): about **200,000 filled cells** per Anthropic, against Google Sheets' 10 million, and **no pivot tables** yet. For bigger data use Google Sheets or a data warehouse.
- **Tip** ([7:06](https://youtube.com/watch?v=OMfU5iq8Eik&t=426s)): because the sheet lives inside Claude, ask Claude to set up a **scheduled task** that refreshes it weekly or monthly, e.g. from a connected Stripe account.

### 4. Data

[7:24](https://youtube.com/watch?v=OMfU5iq8Eik&t=444s) A repackaging of Claude's dashboards, Anthropic's answer to Power BI. New in this version: it turns company data into **data stories, written summaries and short narrated videos**, not only dashboards.

- **Needs a data source.** Connectors for warehouses such as **BigQuery** and **Snowflake** are available in Claude. Then Artifacts → Data, and describe what you want to know.
- **Four output formats** ([8:14](https://youtube.com/watch?v=OMfU5iq8Eik&t=494s)), picked under the design icon (top right) → Format, or just asked for:

| Format | What it is | When |
|--------|-----------|------|
| **Dashboard** | Shareable page, numbers kept up to date by Claude by default | The classic, for ongoing monitoring |
| **Scrollyteller** | Interactive data story the reader scrolls through | Explaining a set of numbers, e.g. this quarter's revenue by region |
| **Visual short** | Short video that walks through the numbers | Presenting to a larger audience, no clicking |
| **Visual analysis** | Written summary you can print | Reading, handing out |

  Jay's point: these are templates; the format follows the audience and intent.

- **Team / Enterprise extras:**
  - **Live sharing** ([9:25](https://youtube.com/watch?v=OMfU5iq8Eik&t=565s)). Normally each viewer sees a shared dashboard through *their own* connectors, so a Stripe dashboard shows nothing to a teammate without Stripe connected. With live sharing on, they see your live numbers without connecting. Turn it on in the dashboard's sources menu by choosing access per connector, or ask Claude.
  - **Certified queries** ([9:58](https://youtube.com/watch?v=OMfU5iq8Eik&t=598s)). In a big company the formula behind a metric often differs by department. The data team certifies the official query (open a chart's query → certify → add instructions for Claude → publish); Claude then reuses it when building new dashboards, and every chart built on it gets a **badge**.

### 5. Interactive connectors

[10:46](https://youtube.com/watch?v=OMfU5iq8Eik&t=646s) Connected apps such as **Notion, Canva and HubSpot** now **open beside the chat**, and you or Claude can work in them as you would in the app itself. Claude could already reach these apps; the change is not having to switch windows.

- **Try it:** Customize → Connectors → look for the **interactive** badge (Notion has one) → connect, and Claude can open the app in the sidebar. Or ask Claude which of your connectors already have an interactive version.
- Jay calls it a quality-of-life improvement, not a new capability.

### 6. Custom themes

[11:46](https://youtube.com/watch?v=OMfU5iq8Eik&t=706s) Change how the **Code tab of the desktop app** looks: colours, light or dark mode, even an animated background behind the chat. Built on the same technology as [[Claude Code Mods (RoboNuggets)|mods]].

- **Make one:** open a normal session in the Code tab and describe the look. Or install Anthropic's **theme examples plugin** and pick from **20 animated backdrops**.
- **Themes that do something** ([12:22](https://youtube.com/watch?v=OMfU5iq8Eik&t=742s)), made by users within days:
  - a **snowy village** where snow gets heavier as the **context window fills**, and a **rain** version that pours harder;
  - a **campfire** that burns down to embers as you approach your **usage limit**;
  - a little **companion** that stops walking the moment Claude finishes or needs you.
- The point: a theme is a cheap place to surface state Claude doesn't show by default.

### 7. Advisor

[13:06](https://youtube.com/watch?v=OMfU5iq8Eik&t=786s) Claude **Fable 5.2** is excellent and expensive; for most knowledge work Jay finds **Opus 5.5** enough. Claude Code's `/advisor` lets the everyday model (Sonnet or Opus) **call in a stronger model only at big decisions**: before committing to a plan, or when stuck on the same error.

- **Per chat:** type `/advisor fable` in Claude Code.
- **For every chat:** have Claude amend your settings so the advisor is on by default (the video uses a prompt from its PDF for this).
- **His numbers** ([14:05](https://youtube.com/watch?v=OMfU5iq8Eik&t=845s)): in the 4 days since he set Fable as advisor, Claude called it about **460 times**, and his Fable usage sits at **3%** on the Ultra plan. His conclusion: a token-efficient way to get Fable's judgement, especially on the Pro plan.

## 📒 What I take from it

- **Corroborated in my own setup (2026-11-22):**
  - My Claude has a **Claude Meetings** connector whose tools return a meeting's summary, decisions, action items and transcript, and can follow a meeting in progress. That matches the per-meeting page described above.
  - It also has a connector for **certified queries and live-shared results on artifacts** (certify, uncertify, share live queries), which matches both Team / Enterprise Data extras.
  - My Claude artifact publishing offers **Dashboard** and **spreadsheet** types, consistent with Data and Sheets.
  - The built-in `plugin-authoring` skill describes a mod as "a change to Claude's own interface or behaviour, such as a theme", which matches the claim that themes are built on mods.
  - Not checked: `/advisor`, the Whiteboards limits, the 200,000-cell figure, the 20 backdrops and his usage numbers. Those are the video's word only.
- **The "replace every app" thesis is real but early.** Every replacement ships with a limit that matters for serious use: Meetings is Google Meet and Team-plan only, Whiteboards can't import or export anything but PNG, Sheets has no pivot tables and a ~200k-cell ceiling. The limits also mean the data stays in Claude. For my vault diagrams I'd keep [[BUSINESS/TOOLS/Excalidraw|Excalidraw]]: its open `.excalidraw` format lives in Obsidian and git, which a PNG export can't replace. Whiteboards look like a better fit for a quick brainstorm with a client than for anything I want to keep.
- **Meetings vs [[Tactiq]]:** Tactiq captures through a browser extension with no bot on the call and covers Meet, Zoom and Teams. Claude Meetings is a visible participant that can build artifacts during the call. Different trade-offs on consent and coverage; for in-person meetings and phone calls neither helps, see [[AI Voice Recorders for Meetings (Polish)]].
- **The advisor and the routing arithmetic.** [[Jev Engineering for Coding Agents]] argues that switching models mid-session usually costs more than staying on the frontier model, because the big model has to reread the context on every hand-back. The advisor is a different shape: the everyday model keeps the session and only *consults* the stronger one. Whether that is cheap depends on how much context each consultation sends, which the video doesn't say. Jay's 460 calls / 3% is one user on the top plan over four days, not a measurement. [[oh-my-pi]] has the same idea as an `advisor` model role, but there it reads every turn rather than being called on demand.
- **Where the advisor sits among Fable's other uses** *(added 2026-11-22, from [[Fable 5.2 — Nine Rules for Using It (AI LABS)]])*:
  - Anthropic's own Fable 5.2 guide agrees with Jay: Opus 5.5 stays the default, and Fable is for when Opus at a higher effort still falls short.
  - AI LABS adds two other placements: Fable as a **fresh-context reviewer** of what Opus built, and Fable as a **lead** handing tasks to cheaper models. The lead setup pays only on big jobs: it cost about 1.7× Opus alone on a small feature.
  - The advisor itself is now partly corroborated. Per the guide bundled in the `claude-api` skill, every executor model accepts `claude-fable-5-2` as its advisor, and a Fable 5.2 advisor returns its advice encrypted. My own Claude Code session runs Opus 5.5 with an advisor tool backed by a stronger model. Jay's usage numbers are still his alone.
- **Functional themes** are the same move as the guardrail mods in [[Claude Code Mods (RoboNuggets)]]: surface state (context fill, usage limit, "Claude needs you") before it bites. The context-fill snow is a visual version of the cost signals in [[Token Optimization for Claude Code]].

## 📖 Takeaways

1. Treat each new built-in app as a **trial with known limits**, not a replacement: check the plan, the import/export path and the size ceiling before cancelling anything.
2. **Certified queries** are the most useful idea here for any team with more than one definition of a metric: one official formula, reused by Claude, with a visible badge.
3. A Claude Sheet refreshed by a **scheduled task** from a connector is a tiny reporting pipeline with no extra tool.
4. Try `/advisor` before paying for the top model across the board, and watch your own usage rather than trusting someone else's numbers.
5. Learn the one or two features that change your work; skip the rest until you need them.

## 📖 Further reading/watching

- Source video: [Anthropic Just Dropped 7 MASSIVE Claude Features (Master them in 15 mins)](https://www.youtube.com/watch?v=OMfU5iq8Eik) (Jay E | RoboNuggets, 2026-11-22). The PDF with the prompts is linked in the video description (not fetched).
- [[Claude Code Mods (RoboNuggets)]] — the mods that themes are built on, by the same author
- [[Claude Code]] · [[Claude in Chrome]] · [[Token Optimization for Claude Code]]
- [[Tactiq]] · [[AI Voice Recorders for Meetings (Polish)]] — meeting capture outside Claude
- [[BUSINESS/TOOLS/Excalidraw|Excalidraw]] · [[Miro]] — whiteboards outside Claude
- [[Jev Engineering for Coding Agents]] · [[oh-my-pi]] — model routing and advisor models
- [[Fable 5.2 — Nine Rules for Using It (AI LABS)]] — when to use Fable at all, and the lead and reviewer placements

---
Template: [[templates/knowledge_note_info]]
