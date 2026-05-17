---
title: "UI UX Pro Max"
date: 2026-03-31
enableToc: true
openToc: true
tags: ["tool", "ai", "design", "claude-code", "skills"]
type: tool
agent-created: true
agent-reviewed: 2026-05-03
source: "_raw/inbox/nextlevelbuilderui-ux-pro-max-skill An AI SKILL that provide design intelligence for building professional UIUX multiple platforms.md"
summary: "Claude Code design system skill — adapts UI/UX guidance per project type; v2.0 adds Design System Generator (161 reasoning rules, 67 styles, 161 palettes, 57 font pairings)"
---

# UI UX Pro Max

A skill for [[Claude Code]] that solves the **generic AI slop** problem — the generic look of frontends that instantly betrays the page was AI-generated. Instead of one universal approach to design, it offers intelligent generation of design systems tailored to the project type.

## Links
### Description
It analyzes the project type — portfolio, SaaS, e-commerce, landing page — and picks an appropriate design system. Different colors, different proportions, different components. Each system has its own logic: portfolio emphasizes personal brand, SaaS leans on conversion, e-commerce on product presentation.

### Download or use
[GitHub: nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) · [uupm.cc](https://uupm.cc/)

Related projects by the author: [NextLevelBuilder.io](https://nextlevelbuilder.io/) · [GoClaw.sh](https://goclaw.sh/) · [ClaudeKit.cc](https://claudekit.cc/) · [TOSE.sh](https://tose.sh/)

## 🚀 What's New in v2.0 — Design System Generator

Flagship feature: **Intelligent Design System Generation**. The reasoning engine analyzes the project and generates a complete, tailored design system in seconds.

Pipeline (5 steps):
1. **User request** — e.g. *"Build a landing page for my beauty spa"*.
2. **Multi-domain search** (5 parallel): product type matching (161 categories) · style recommendations (67) · color palette (161 palettes) · landing page patterns (24) · typography pairing (57 combinations).
3. **Reasoning engine** — match product → UI category, BM25 ranking style priorities, filter anti-patterns per industry, JSON decision rules.
4. **Output** — Pattern + Style + Colors + Typography + Effects + anti-patterns + pre-delivery checklist.
5. **Sample output** — a concrete spec: pattern (e.g. *Hero-Centric + Social Proof*), style (*Soft UI Evolution*), full palette with hexes, typography (Cormorant Garamond + Montserrat), key effects, AVOID list, and an a11y/responsiveness checklist.

### 161 Industry-Specific Reasoning Rules

Specialized rules per industry:

| Category | Examples |
|-----------|-----------|
| **Tech & SaaS** | SaaS, Micro SaaS, B2B Service, Developer Tool / IDE, AI/Chatbot Platform, Cybersecurity |
| **Finance** | Fintech/Crypto, Banking, Insurance, Personal Finance Tracker, Invoice & Billing |
| **Healthcare** | Medical Clinic, Pharmacy, Dental, Veterinary, Mental Health, Medication Reminder |
| **E-commerce** | General, Luxury, Marketplace (P2P), Subscription Box, Food Delivery |
| **Services** | Beauty/Spa, Restaurant, Hotel, Legal, Home Services, Booking |
| **Creative** | Portfolio, Agency, Photography, Gaming, Music Streaming, Photo/Video Editor |
| **Lifestyle** | Habit Tracker, Recipe & Cooking, Meditation, Weather, Diary, Mood Tracker |
| **Emerging Tech** | Web3/NFT, Spatial Computing, Quantum Computing, Autonomous Drone Fleet |

Each rule includes: Recommended Pattern · Style Priority · Color Mood · Typography Mood · Key Effects · **Anti-Patterns** (e.g. *"AI purple/pink gradients"* for banking).

## 🧩 Features (v2.0)

- **67 UI Styles** — Glassmorphism, Claymorphism, Minimalism, Brutalism, Neumorphism, Bento Grid, Dark Mode, AI-Native UI, …
- **161 Color Palettes** — industry-specific, 1:1 with the 161 product types
- **57 Font Pairings** — curated typography with Google Fonts imports
- **25 Chart Types** — recommendations for dashboards/analytics
- **15 Tech Stacks** — React, Next.js, Astro, Vue, Nuxt + Nuxt UI, Svelte, SwiftUI, React Native, Flutter, HTML+Tailwind, shadcn/ui, Jetpack Compose, Angular, Laravel
- **99 UX Guidelines** — best practices, anti-patterns, a11y rules
- **161 Reasoning Rules** *(NEW v2.0)* — industry-specific design system generation

## 🗒️ Reasoning for

Two projects generated with the same skill look **completely different** — and that's exactly the point. Individuality instead of a template.

Why this matters:
- You ask Claude Code for a page and you get the same layout as everyone else — hero section, rounded cards, the same gradients
- UI/UX Pro Max gives the agent the design knowledge a designer would normally have
- It adapts per project — it's not random, each system has its own logic
- The v2.0 pre-delivery checklist (4.5:1 contrast, focus states, prefers-reduced-motion, responsive breakpoints) acts like a built-in design code review

I use it together with **Tailwind CSS** and **React**. When building components the skill generates a coherent design system that I then tweak. It saves time on prototyping — a solid base fit to context instead of fighting generic output.

## Alternatives considered
- Hand prototyping — works, but slow
- [[Cursor]] with design prompts — no systematic approach to design systems
- [[Vibe Coding]] without a design skill — leads to generic AI slop
- Off-the-shelf component libraries (shadcn/ui, Material) — good, but don't adapt to project type
- [[gstack]] `/design-consultation` + `/design-shotgun` — more interactive, less declarative; UI UX Pro Max delivers a ready spec, gstack walks you through choices

## 📖 Resources
- [GitHub: nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
- [uupm.cc](https://uupm.cc/) — landing
- [[Claude Code]] — primary AI coding assistant
- [[Vibe Coding]] — context: the generic AI slop problem
- [[Cursor]] — alternative IDE with AI
- [[gstack]] — alternative design skill stack
- [[Awesome Claude Code]] — curated list where the skill also appears

---
Template: [[templates/tool]]
