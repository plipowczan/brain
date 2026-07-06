---
title: "Camofox Browser"
date: 2026-06-14
enableToc: true
openToc: true
tags: ["tool", "ai", "agents", "browser", "web-scraping", "token-optimization", "open-source"]
type: tool
source: "_raw/processed/2026-06-14_yt-RegzpFdW8pM_10-github-repos-so-good-they-shouldn-t-be-free-and-the-paid.md"
agent-created: true
summary: "jo-inc/camofox-browser — stealth headless browser for AI agents, built on the Camoufox Firefox fork. Beats bot detection at the C++ level and returns pages as an accessibility tree instead of raw HTML, cutting agent token cost ~90%. Drop-in Puppeteer/Playwright replacement."
---

# Camofox Browser

## 🚀 Description

[jo-inc/camofox-browser](https://github.com/jo-inc/camofox-browser) — a **stealth headless browser for AI agents**. If you build agents that browse the web, you hit the wall fast: bot detection blocks them instantly. Camofox makes the agent's browser invisible.

It's built on **[Camoufox](https://github.com/daijro/camoufox)**, a Firefox fork that spoofs the fingerprint, WebGL, audio, and WebRTC signatures **down at the C++ level** — so the browser doesn't *look* modified because it genuinely isn't (no detectable JS patches).

The part agents love: it returns the page as an **accessibility tree** instead of raw HTML, which drops token cost by ~90%. Drop-in replacement for Puppeteer/Playwright.

## 🧩 Features

- **C++-level stealth** — `navigator.hardwareConcurrency`, WebGL renderer, AudioContext, screen geometry, WebRTC all spoofed before JavaScript sees them.
- **Accessibility-tree output** — structured page representation, stable element refs for clicking, ~90% fewer tokens than bloated HTML.
- **Agent-shaped API** — navigate, click, type, screenshot; search macros for common sites.
- **Bypasses Cloudflare / anti-scraping / bot detection** without paid stealth-scraping services that bill per request.

## Reasoning for

The browsing layer for agentic web automation — the same slot as [[Browser Use]] and [[Browser Harness]] in this vault, but with stealth as the headline and accessibility-tree token savings as the kicker. Pairs with [[Bright Data]] / [[Firecrawl]] thinking on data acquisition, except this is the *headful-but-invisible* end where bot walls are the blocker. The ~90% token reduction overlaps in spirit with [[Headroom]] — both make agent context cheaper, at different layers.

## Alternatives considered

- [[CloakBrowser]] — the Chromium counterpart: same C++-level source patches, but keeps the native Playwright/Puppeteer API and adds `humanize` behavioral spoofing (vs Camofox's accessibility-tree token savings).
- [[Browser Use]] / [[Browser Harness]] — agent browsing without the C++-level anti-detection focus.
- Commercial stealth-scraping APIs — do the same fingerprint evasion but charge per request.
- Underlying engine: [daijro/camoufox](https://github.com/daijro/camoufox) — the Firefox fork itself, if you want to build your own wrapper.

## ⚠️ Note

Anti-detection browsing is dual-use — appropriate for agents accessing sites you're authorized to use; respect target sites' terms and rate limits.

## 🔗 Links

- Repo: https://github.com/jo-inc/camofox-browser
- Engine: https://github.com/daijro/camoufox

## 🔗 Related notes

- [[CloakBrowser]] — Chromium-fork sibling, same C++-level stealth idea
- [[Browser Use]] · [[Browser Harness]] — adjacent agent-browsing tools
- [[Firecrawl]] · [[Bright Data]] — data-acquisition layer
- [[Headroom]] — also cuts agent token cost, different layer
- Surfaced in [[10 Free GitHub Repos That Replace Paid Tools]]

---
Template: [[templates/tool]]
