---
title: "Tactiq"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "ai", "transcription", "meetings", "productivity", "notes"]
type: tool
agent-created: true
summary: "AI meeting transcription and summaries for Google Meet/Zoom/Teams — live transcripts, AI notes, action items; meeting-capture tool on the Tech To The Rescue engagement"
status-checked: 2026-11-13
project-status: active
---

# Tactiq

> [!success] Status check 2026-11-13 — active
> **Verdict:** Google's update API serves extension build 3.1.7556 today.
> **Latest release:** Tactiq ships continuously and publishes no version notes. · **last dated update:** 2026-11-07 · **licence:** Proprietary SaaS with freemium per-seat pricing.
> **Source:** https://tactiq.io/buy
> **Changed since this note:** The note (2026-06-13) describes a Chrome extension with live transcripts, AI summaries and custom prompts. Today the product also includes the following: a hosted MCP server (https://mcp.tactiq.io) and a verified Claude connector in Claude's directory, plus a ChatGPT plugin…

An AI meeting assistant that produces live **transcripts** and AI-generated summaries/action items for Google Meet, Zoom, and Microsoft Teams. It runs as a browser extension that captures the call in real time (no bot joining required), then turns the transcript into notes, summaries, and follow-ups you can search and share.

## Links

### Description

- **Live transcription** — real-time captions captured in the browser during the call.
- **AI summaries & action items** — auto-generated meeting notes and next steps.
- **Multi-platform** — Google Meet, Zoom, Microsoft Teams.
- **Searchable history** — transcripts stored, searchable, exportable.
- **Custom AI prompts** — run prompts over a transcript (e.g. extract decisions).

### Download or use

- Site: [tactiq.io](https://tactiq.io/)
- Install the Chrome extension; runs during meetings.

## Reasoning for

Tactiq is the meeting-capture tool noted in the [[Tech To The Rescue]] engagement — turning discovery/stakeholder calls into searchable transcripts and summaries. In a diagnosis project that's more than convenience: one of the findings was that the *operational source of truth often lives in conversations* that never reach a system. Capturing meetings as structured, searchable text is a small concrete countermeasure — it moves knowledge out of people's heads and ad-hoc notes into something that can feed the documentation and, eventually, the governed agent/skill layer.

## Alternatives considered

- **Otter.ai** — established transcription/notes; comparable, different summary style.
- **Fireflies.ai / Fathom** — bot-joins-the-call model with CRM integrations; Tactiq's extension captures without a bot participant.
- **Granola** — AI notepad that augments your own notes; lighter than full transcription.
- **Native Zoom/Meet transcription** — built-in and free, but weaker AI summaries/search.
- **Hardware AI recorders** (HiDock P1, Pocket, Plaud Note Pro…) — researched in [[AI Voice Recorders for Meetings (Polish)]]: they cover in-person meetings and phone calls, but for online calls none of them adds much over Tactiq.

## Resources

- 📘 [Tactiq](https://tactiq.io/)

---
Template: [[templates/tool]]
