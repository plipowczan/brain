---
title: "Resend"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "email", "transactional-email", "developer-tools", "react-email"]
type: tool
agent-created: true
summary: "Developer-first transactional email API — clean SDK, React Email templating, good deliverability; used for magic-link auth and notifications in my Next.js apps"
---

# Resend

A transactional email API built for developers. Where legacy email providers bury you in dashboards, Resend is a clean REST API plus typed SDKs: you send mail in a few lines, author templates as React components via **React Email**, and get deliverability tooling (domains, DKIM/SPF, webhooks) without the enterprise bloat. It was founded by people from the React/[[Next.js]] ecosystem, and it shows in the developer experience.

## Links

### Description

- **Simple send API** — one POST (or `resend.emails.send(...)`) with from/to/subject/html.
- **React Email** — compose emails as React components with a local preview server; no more hand-written table HTML.
- **Domains & deliverability** — guided DKIM/SPF/DMARC setup, dedicated/shared IPs, bounce & complaint handling.
- **Webhooks** — delivery, open, click, bounce events for syncing state.
- **Batch & scheduling** — send many at once or schedule for later.
- **Audiences/Broadcasts** — lightweight marketing/newsletter sending alongside transactional.

### Download or use

- Platform: [resend.com](https://resend.com/)
- Install: `npm i resend` then `new Resend(process.env.RESEND_API_KEY)`
- React Email: `npm i react-email @react-email/components`
- Docs: [resend.com/docs](https://resend.com/docs)

## Reasoning for

Resend is my transactional email layer for [[Next.js]] apps. In [[AGRE]] it sends magic-link auth emails (paired with NextAuth/Auth.js) and lead/enquiry notifications; in [[Travelcast AI]] it handles user-facing notifications. The win is twofold: the SDK drops straight into a Next.js route handler with zero ceremony, and **React Email** lets templates live in the same codebase, typed and previewable, instead of in a vendor's WYSIWYG editor. For a solo/small team that means email becomes versioned code reviewed in the same PR as the feature that triggers it.

## Alternatives considered

- **[[Sendgrid]]** — the incumbent I've used before; far more features and deeper analytics, but heavier API and dashboard-centric. Resend trades breadth for DX.
- **Mailgun** — solid transactional API used on other engagements (e.g. [[Tech To The Rescue]]); comparable deliverability, less polished templating story.
- **Postmark** — excellent transactional deliverability and speed; Resend's React Email templating and modern SDK edged it out for new builds.
- **AWS SES** — cheapest at scale but raw: you build the templating, retries, and webhooks yourself.

## Resources

- 📘 [Resend docs](https://resend.com/docs)
- ⚛️ [React Email](https://react.email/)
- 🔧 [Next.js quickstart](https://resend.com/docs/send-with-nextjs)
- 📡 [Webhooks reference](https://resend.com/docs/dashboard/webhooks/introduction)

---
Template: [[templates/tool]]
