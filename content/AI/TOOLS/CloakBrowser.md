---
title: "CloakBrowser"
date: 2026-07-06
enableToc: true
openToc: true
tags: ["tool", "ai", "browser", "web-scraping", "playwright", "anti-bot", "open-source", "mit"]
type: tool
source: "_raw/processed/2026-07-06_CloakHQCloakBrowser Stealth Chromium that passes every bot detection test. Drop-in Playwright replacement with source-level fingerprint patches. 3030 tests passed.md"
agent-created: true
summary: "CloakHQ/CloakBrowser — stealth Chromium with 58-59 source-level C++ fingerprint patches; a drop-in Playwright/Puppeteer replacement (Python/JS/.NET) that passes reCAPTCHA v3, Cloudflare Turnstile, and FingerprintJS. MIT wrappers, delayed-free binary model."
---

# CloakBrowser

## 🚀 Description

[CloakHQ/CloakBrowser](https://github.com/CloakHQ/CloakBrowser) — a **stealth Chromium** that antibot systems score as a normal browser, because it *is* one. Not a patched config, not a JS injection: a real Chromium binary with fingerprints modified at the **C++ source level** and compiled in.

The pitch is a drop-in **Playwright/Puppeteer replacement** — same API, swap the import, "3 lines of code, 30 seconds to unblock". `pip install cloakbrowser` or `npm install cloakbrowser`; the right binary (~200 MB) auto-downloads on first launch. A `.NET`/C# NuGet client (`CloakBrowser`) mirrors the Python and JS wrappers.

This is the Chromium counterpart to [[Camofox Browser]] (which does the same C++-level stealth on a Firefox fork). CloakBrowser's headline extras are **`humanize=True`** — human mouse curves, per-character typing, realistic scroll — and a **0.9 reCAPTCHA v3** score (human-level, server-verified) on the Pro build.

## 🧩 Features

- **58–59 source-level C++ patches** — canvas, WebGL, audio, fonts, GPU, screen, WebRTC, network timing, automation signals, CDP input behavior. Compiled into the binary, not injected via JS or set via flags.
- **`humanize=True`** — one flag rewrites all mouse/keyboard/scroll interactions (Bézier curves, typing pauses, occasional typos with self-correction). `default` and `careful` presets, per-call `human_config` overrides.
- **Passes the detectors** — reCAPTCHA v3 0.9, Cloudflare Turnstile (non-interactive + managed), FingerprintJS, BrowserScan (4/4), ShieldSquare; `navigator.webdriver` reports `false`, UA has no `HeadlessChrome` leak, TLS ja3n/ja4 matches Chrome. Tested against 30+ detection sites.
- **Stealthy by default** — random fingerprint seed per launch; `--fingerprint=<seed>` for a persistent returning-visitor identity. Linux wrapper spoofs as Windows for a more common fingerprint.
- **Proxy + geoip** — HTTP/SOCKS5 proxies, `geoip=True` matches timezone/locale to the proxy exit IP and spoofs WebRTC ICE candidates.
- **Persistent profiles, Docker image, CDP server mode** — `launch_persistent_context()` keeps cookies/localStorage and enables Widevine DRM; `cloakhq/cloakbrowser` image runs `cloakserve` with per-connection fingerprint seeds.

## Reasoning for

The anti-bot browsing layer for agentic web automation — same slot as [[Camofox Browser]], [[Browser Use]], and [[Browser Harness]] in this vault, but Chromium-native with the Playwright API kept intact. Where [[Camofox Browser]]'s kicker is accessibility-tree token savings, CloakBrowser's is behavioral realism (`humanize`) and a server-verified reCAPTCHA score. Sits upstream of the data-acquisition thinking in [[Bright Data]] / [[Firecrawl]] / [[Scrapling]] — it's the *headed-but-invisible* end where bot walls, not parsing, are the blocker. Ships example integrations for browser-use, Crawl4AI, Crawlee, [[Scrapling]], Stagehand, LangChain, Selenium, and undetected-chromedriver.

## Alternatives considered

- [[Camofox Browser]] — the closest sibling: C++-level stealth on Firefox (Camoufox fork) instead of Chromium, with accessibility-tree output.
- `playwright-stealth` / `undetected-chromedriver` / `puppeteer-extra` — config- or JS-injection-level; the README's whole argument is that these break on every Chrome update and get detected by the patches themselves.
- Camoufox (Firefox source patches) — the engine behind [[Camofox Browser]]; same C++ philosophy, different engine.
- Commercial stealth-scraping APIs — do the fingerprint evasion but bill per request.

## ⚠️ Note

Anti-detection browsing is **dual-use**: appropriate for automating sites you're authorized to use, respecting terms and rate limits. CloakBrowser doesn't solve CAPTCHAs — it prevents them appearing — and brings no proxies (bring your own residential IPs).

**Licensing:** the Python + JS wrappers are **MIT, free forever**. The binary uses a *delayed-free* model — the previous Chromium (v146, 58 patches) is free on GitHub Releases and goes stale within weeks; the latest (Chromium 148, 59 patches, all platforms incl. macOS) is **CloakBrowser Pro** via a license key from cloakbrowser.dev. Binary downloads are Ed25519-signature verified.

## 🔗 Links

- Repo: https://github.com/CloakHQ/CloakBrowser
- Pro plans: https://cloakbrowser.dev/
- Quick test: `docker run --rm cloakhq/cloakbrowser cloaktest`

## 🔗 Related notes

- [[Camofox Browser]] — Firefox-fork sibling, same C++-level stealth idea
- [[Browser Use]] · [[Browser Harness]] — adjacent agent-browsing tools
- [[Scrapling]] — Python scraping framework with anti-bot bypass (ships a CloakBrowser integration)
- [[Firecrawl]] · [[Bright Data]] — data-acquisition layer
- [[Chrome DevTools MCP]] — live-Chrome control for coding agents

---
Template: [[templates/tool]]
