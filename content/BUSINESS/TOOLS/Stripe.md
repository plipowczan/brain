---
title: "Stripe"
date: 2026-06-13
enableToc: true
openToc: true
tags: ["tool", "payments", "billing", "subscriptions", "saas", "fintech"]
type: tool
agent-created: true
summary: "Developer-first payments platform — subscriptions, one-off credit top-ups, checkout, and MRR/revenue data; the billing backbone for my SaaS products"
---

# Stripe

The developer-first payments platform — APIs and SDKs for accepting money online: subscriptions, one-off purchases, hosted checkout, invoicing, and the financial reporting (MRR, churn, revenue) that comes with it. For a SaaS, Stripe is the billing backbone: it handles cards, 3-D Secure, tax, dunning, and webhooks so the application only has to react to events rather than touch PCI-sensitive data.

## Links

### Description

- **Subscriptions / Billing** — recurring plans, trials, proration, usage-based and metered billing.
- **Checkout & Payment Links** — hosted, PCI-compliant payment pages with minimal code.
- **One-off payments** — credit top-ups / pay-as-you-go purchases via PaymentIntents.
- **Webhooks** — authoritative source of truth for payment/subscription state changes.
- **Customer Portal** — self-serve plan/payment-method management.
- **Tax, Radar, Invoicing** — automated tax, fraud prevention, invoices.
- **Dashboard analytics** — MRR, revenue, churn, cohort reporting.

### Download or use

```bash
npm i stripe       # or: pip install stripe
# stripe = Stripe(os.environ["STRIPE_SECRET_KEY"])
```

- Platform: [stripe.com](https://stripe.com/)
- Docs: [docs.stripe.com](https://docs.stripe.com/)

## Reasoning for

Stripe is the monetization layer for my SaaS work. [[Qamera AI]] uses it for both **subscriptions and one-off credit top-ups** that feed the application-level credit ledger — and Stripe's revenue data is what surfaces MRR/usage for the business side. [[Value Builders]] teaches it as *the* way to add payments to a startup MVP, and it's referenced in the shared-skills ([[Agentic Skills Submodules]]) CFO/finance tooling. The design principle I follow: **treat the Stripe webhook as the source of truth** for entitlement, and keep the credit ledger application-first (the app's own accounting reconciles against Stripe events) so a missed webhook or race never silently grants or revokes access. That separation — Stripe owns money movement, the app owns entitlement state — is what keeps billing auditable.

## Alternatives considered

- **Paddle / Lemon Squeezy** — Merchant-of-Record models that handle global sales tax/VAT for you; simpler compliance but less control and higher fees than Stripe.
- **Polar** — developer-focused MoR aimed at SaaS/digital; younger ecosystem than Stripe.
- **PayPal / Przelewy24** — useful as regional/extra payment methods, but weaker developer APIs and subscription tooling.
- **[[Revolut]] Business** — banking/payouts side, not a checkout/subscription engine; complementary, not a replacement.

## Resources

- 📘 [Stripe docs](https://docs.stripe.com/)
- 🔁 [Billing & subscriptions](https://docs.stripe.com/billing)
- 📡 [Webhooks](https://docs.stripe.com/webhooks)
- 🧪 [Stripe CLI (local webhook testing)](https://docs.stripe.com/stripe-cli)

---
Template: [[templates/tool]]
