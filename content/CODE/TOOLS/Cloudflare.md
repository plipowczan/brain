---
title: "Cloudflare"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "cdn", "storage", "dns", "edge", "security", "r2"]
type: tool
agent-created: true
summary: "Global edge platform — R2 object storage (zero egress), DNS, CDN, Turnstile CAPTCHA, Workers; my object-storage + DNS + bot-protection layer across projects"
---

# Cloudflare

A global edge platform that started as a CDN/DNS provider and grew into a full developer cloud. For my projects it shows up in three roles: **R2** object storage (S3-compatible, with *no egress fees* — the headline differentiator), **DNS + CDN** in front of web apps, and **Turnstile**, a privacy-friendly CAPTCHA alternative for bot protection. Underneath sits Workers (edge compute), Pages (static/edge hosting), and a large security suite.

## Links

### Description

- **R2 object storage** — S3-compatible buckets with **zero egress fees**; ideal for images, media, and feed assets served to the public.
- **DNS** — fast authoritative DNS with proxying, caching, and DDoS protection.
- **CDN / caching** — global edge cache in front of origins.
- **Turnstile** — invisible/low-friction CAPTCHA replacement to block bots without harming UX.
- **Workers & Pages** — serverless edge compute and static/edge hosting.
- **Web Analytics & Insights** — privacy-first traffic analytics without cookies.

### Download or use

- Platform: [cloudflare.com](https://www.cloudflare.com/)
- R2 docs: [developers.cloudflare.com/r2](https://developers.cloudflare.com/r2/)
- R2 is S3-API compatible — use the AWS SDK pointed at the R2 endpoint.
- Turnstile: [developers.cloudflare.com/turnstile](https://developers.cloudflare.com/turnstile/)

## Reasoning for

Cloudflare is my object-storage + DNS + bot-protection layer. **R2** is the decisive piece: [[AGRE]] stores property imagery there and [[Travelcast AI]] stores generated audio/cover assets — and because R2 charges nothing for egress, serving lots of media to the public doesn't accrue the surprise bandwidth bills that AWS S3 would. Being S3-compatible means the existing AWS SDK works with a changed endpoint, so there's no lock-in cost to trying it. On [[Qamera AI]], **Turnstile** guards signup/auth flows against bots without the friction (or privacy baggage) of Google reCAPTCHA, and Cloudflare DNS/CDN fronts the public sites. It sits cleanly alongside [[Vercel]] (app hosting) and [[Supabase]] (database/auth) — each owns the layer it's best at.

## Alternatives considered

- **AWS S3** — the storage standard, but egress fees make public media expensive at scale; R2's S3 compatibility lets me switch with minimal code change.
- **[[Supabase]] Storage** — convenient when already using Supabase; R2 wins for large public media volumes and cost.
- **DigitalOcean Spaces** — S3-compatible with a CDN; used on other engagements, but R2's zero-egress pricing is stronger for media-heavy apps.
- **Google reCAPTCHA** — ubiquitous bot protection, but worse UX and privacy story than **Turnstile**.

## Resources

- 📘 [Cloudflare developer docs](https://developers.cloudflare.com/)
- 🪣 [R2 storage](https://developers.cloudflare.com/r2/)
- 🛡️ [Turnstile](https://developers.cloudflare.com/turnstile/)
- ⚙️ [Workers](https://developers.cloudflare.com/workers/)

---
Template: [[templates/tool]]
