---
title: "Travelcast AI"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["project", "ai", "podcast", "audio", "multi-agent", "travel"]
type: basic-note
agent-created: true
summary: "AI travel-podcast platform — a Python/FastAPI multi-agent generator that researches a place, synthesizes a script, and produces multilingual audio, published to a Next.js website"
---
# Travelcast AI

## 🗒️ Description
An AI-powered travel-podcast platform in two repos: a **generator** (Python/FastAPI) that researches a destination with parallel AI agents, synthesizes a script, and produces multilingual audio; and a **website** ([[Next.js]]) that publishes, archives, and streams the finished episodes. The generator publishes to the website over an authenticated REST API.

## 🧩 How the two repos relate
- **`trip-podcast-generator`** — research → synthesis → audio. The producer.
- **`trip-podcast-website-cursor`** — public multilingual portal. The consumer. Episodes land at `public/episodes/{slug}/{language}/` as `metadata.json` + `podcast_final.mp3` + `notes.md` (file-based, no DB on the site).

## Technology

### Stack — Generator
- Python 3.11+, FastAPI, [[Celery]] on [[Redis]] for the task queue, [[Supabase]] (Postgres) for place/episode state.
- **Research**: Google Maps/Places API (POIs), [[Perplexity]] API (facts), web scraping for vibe/critic content.
- **LLM**: [[OpenAI]] GPT-5.5 for consensus synthesis and translation.
- **TTS (multi-provider fallback)**: [[ElevenLabs]] (primary, multilingual) → OpenAI TTS → [[Chatterbox TTS|Chatterbox]] (local, torch-based, free).
- **Audio**: FFmpeg normalization (stereo, 44.1 kHz, 192 kbps).

### Stack — Website
- [[Next.js]] 16 (App Router) + React 19, [[Tailwind CSS]] 4, [[shadcn-ui|shadcn/ui]], TypeScript.
- [[Resend]] (contact email), Unsplash API (cover images), Vercel Analytics + [[Cloudflare]] Insights.
- Hosted on [[Vercel]]; [[Git]] with Husky hooks.

## ⚙️ Architecture know-how (reusable)
- **Parallel research, single synthesis.** A Celery *chord* runs four agents concurrently for the English master — Geo (Maps), Historian (Perplexity), Vibe (blogs/forums), Critic (reviews) — then one GPT consensus pass synthesizes them *without filtering* to preserve nuance. Translations reuse the English script; no re-research per language.
- **Provider-factory TTS with per-episode fallback.** Audio stays consistent within an episode (one provider chosen up front, after a credit preflight) but flexes across episodes. New providers implement one ABC; voice IDs + provider chains live in a central `languages.json`, not in env.
- **Config-file-driven languages.** Adding a language is a config edit (voice IDs, provider order), not a code change. A pronunciation agent handles proper nouns from a config override file.
- **File-native publishing.** The site's truth lives on disk per episode/language; the generator POSTs to it with a timing-safe bearer-token comparison.
- **Queue resilience**: `task_acks_late`, reject-on-worker-lost, a 2-hour visibility timeout, and explicit orphan-task detection in API endpoints to recover from broker hiccups. Agents check for existing output before re-running (resume-from-failure).

## 🔗 Links
- [[Next.js]] · [[Supabase]] · [[Vercel]] · [[OpenAI]] · [[ElevenLabs]] · [[Chatterbox TTS]] · [[Perplexity]] · [[Resend]] · [[Cloudflare]] · [[Tailwind CSS]] · [[shadcn-ui|shadcn/ui]] · [[Celery]] · [[Redis]] · [[Git]]
- [[TTS Engines Comparison (Polish)]] — TTS provider/quality research relevant to the audio layer
- [[GPT Image 2 + Seedance Workflow]] — sibling AI-media generation pattern
- [[Dev Libraries & Build Tools]] (FFmpeg, Zod, Vitest) · [[Marketing, Sales & Publishing SaaS]] (Unsplash)
