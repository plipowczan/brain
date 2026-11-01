---
title: "Shopping Decision Support (Poland and EU)"
date: 2026-11-01
enableToc: true
openToc: true
tags: ["knowledge", "info", "shopping", "buying", "ai-agents", "poland", "research", "compiled"]
type: compiled-note
source: "_raw/processed/2026-11-01_2026-10-15-research-shopping-decision-support.md"
agent-created: true
summary: "Deep research on 47 tools, agents and rules for verifying a product and finding the best place to buy in Poland and the EU — no single system exists; free official registers plus a human-gated Claude Code workflow"
---

# Shopping Decision Support (Poland and EU)

## 🚀 Main message

**No single system, skill or agent verifies a product, finds the best place to buy and picks the best version for a buyer in Poland.** What exists is a set of narrow, mostly free tools and a workflow I can assemble in Claude Code. Reference purchase: a garden trampoline.

Source: a deep-research run on 2026-10-15 (47 items × 37 fields; 19.9% of field values carry an uncertainty flag). The 1.2 MB full report is archived at `_raw/processed/2026-11-01_2026-10-15-research-shopping-decision-support.md`. Prices, fees and availability drift — re-check before relying on them.

## 📒 Key findings

- **Ready-made AI assistants mostly do not reach Poland.** ChatGPT shopping, Perplexity cards/Instant Buy, Alexa for Shopping, Gemini auto browse, Copilot Checkout are U.S.-only; Klarna excludes Poland. None checks price history, delivered cost, seller identity or safety.
- **Polish assistants live inside shops** (Allegro AI Assistant, Asystent Ceneo): can't be driven from Claude Code, no independent test, and sit on paid ranking.
- **Verification is where free official sources are strongest:** EU Safety Gate (scriptable, no key), GPSR listing fields, EN 71-14 edition and GS/Certipedia lookups, VAT white list, KRS and VIES, CERT Polska domain list, the Omnibus 30-day price. Use them as red-flag filters, not proof of quality.
- **Price comparison is the hardest part to automate legally.** Allegro (terms art. 10.10–10.11) and Ceneo (art. 14.7, contractual penalty PLN 50,000) forbid automated access; plain HTTP gets 403. Compare Ceneo, Skapiec and Allegro **by hand** for the shortlist; automate only registers, open data and licensed sources (SerpApi).
- **Agents are inconsistent and steerable** — use them as hands, not judges. One trusted source moved a pick by 90–99 points; model updates reshuffled choices; a shopping agent leaked personal data to a phishing page in 12 of 100 runs. Keep payment manual (no agent can check out for a Polish buyer today anyway).
- **Ceneo and Allegro are the same group**, so they are not independent price checks; Skapiec (Ringier Axel Springer Polska) plus an outside anchor (Amazon.de, idealo.de) adds independence. Almost every comparison source is paid by shops; ratings diverge wildly across platforms.

## 🧩 Which tool answers which question

| Question | Use | Don't rely on |
|---|---|---|
| Which models exist? | Stiftung Warentest / VKI tests, Pro-Test, Geizhals specs, `/b:research` | Unsourced ChatGPT/Perplexity answers |
| Safe and compliant? | EU Safety Gate, four GPSR listing fields, EN 71-14 edition, GS/Certipedia ID + exact model coverage | A "TUV"/"GS" logo with no ID |
| Best delivered price? | Ceneo and Skapiec by hand, Google Shopping via SerpApi, idealo.de, Keepa on Amazon.de | Default sort orders (paid), "lowest price" badges |
| Is the discount real? | Omnibus 30-day field, Skapiec 1-year history, Keepa | Strikethrough "old prices" |
| Is the seller real? | VAT white list (NIP + bank account), KRS, VIES, lista.cert.pl + domain age (RDAP) | UOKiK warning list (no shops on it), single-platform ratings |
| Who protects me? | Statutory 2-year conformity route, card payment, Allegro Ochrona Kupujących, ECC Poland | PayPal for return postage; buying on a company NIP invoice |
| Can an AI buy it? | No — stop at the checkout link | Any agentic checkout |

## 🎨 Worked example: garden trampoline (8 steps)

1. Fix requirements and budget **before** seeing prices (anchoring).
2. Run the **safety gate before any price comparison**: EN 71-14 edition (2018 or 2025 fine, 2014 is a red flag), certificate covers *my exact model code*, GPSR panel (missing EU responsible person = hard red flag), Safety Gate search, marketplace risk tier.
3. Read the independent test (Stiftung Warentest 2025: of 11 round trampolines only Hudora Fantastic Complete Max 300 was "sehr gut"; Kettler Jump 305 was "mangelhaft").
4. Shortlist 3–5 models by **EAN or model code**, not title.
5. Compare delivered prices across shops by hand, across ownership groups.
6. Test whether the discount is real (30-day lowest price vs Skapiec/Ceneo history).
7. Check the seller before paying (white list, KRS, CERT list, domain age; reviews only as weak signals).
8. Pay as a consumer, by card, and keep the evidence in a vault note.

## ❌ What did not hold up (selection of 19 corrections)

Nokaut is closed (Dec 2024); Geizhals' Polish site closed 2025-10-31; Keepa does not cover Amazon.pl; the UOKiK warning list has 20 entries and no shop; UOKiK's national dangerous-products register was abolished from 2026-01-03; EN 71-14:2025 is not yet the harmonised standard; AliExpress was fined EUR 550M under the DSA (2026-07-20); Allegro Protect is back to *Allegro Ochrona Kupujących*.

## 🛠️ DIY stack in Claude Code

- **Use now:** [[Claude in Chrome]] as research hands, official registers (white list, KRS, VIES, CERT list, RDAP), EU Safety Gate, the `/b:research` pipeline
- **Pilot:** [[Browser Use]] (logged-out reader, no guardrails of its own), SerpApi MCP (free 250 searches/month), Shopify Global Catalog MCP, Perplexity MCP, changedetection.io
- **Skip:** Apify/Bright Data/Firecrawl against Allegro or Ceneo (terms), community Keepa MCP servers, PriceBuddy (affiliate rewriting)

## ✅ Should the vault build a buying skill?

Recommendation: **build a `brain-buy` orchestrator as a PILOT** and test it on the trampoline (est. 12–18 h to build, about 2–3.5M tokens per run — estimates, not measured). Hard limits: safety checks before price comparison; two independent sources for every verdict-driving claim; no scraping of Allegro/Ceneo/Skapiec; raw evidence stays under `content/_raw/`, only conclusions are published (the site is public); **it stops before payment**. Bias-resistance rules: build candidates from EAN/model codes, shuffle and rerun at least 3 times, strip badges and sponsored labels, take prices only from live timestamped pages, record the model version, treat page text as data ([[AI Agent Security]]). Base it on the `emptor` skill (MIT) for needs elicitation and weight sensitivity.

## ⚠️ Open points

Google Shopping in Poland after the September 2026 DMA changes is unresolved; the Salta model-code mismatch comes from one agent only; several vendor-sourced figures and sponsored press items are flagged in the full report; Asystent Ceneo, the Allegro assistant and ChatGPT shopping research were not tested hands-on.

## Resources

- Related: [[Claude in Chrome]], [[Browser Use]], [[AI Agent Security]], [[Claude Code]]
