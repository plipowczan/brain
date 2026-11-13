---
title: "Choosing an ETF"
date: 2026-11-13
enableToc: true
openToc: true
tags: ["knowledge", "info", "investments", "etf", "ucits", "costs", "taxes", "withholding-tax", "currency", "poland", "research"]
type: knowledge-note
source: "_raw/research-workspaces/choosing-an-etf/report.md"
agent-created: true
summary: "How to compare UCITS ETFs as a Polish investor: total cost and tracking difference, replication, domicile and US withholding, W-8BEN, accumulating vs distributing, currency and hedging, fund size and closure risk, legal form and compensation, execution, and which wrapper holds the fund."
---

# Choosing an ETF

## 🗒️ Description

An ETF looks like a commodity: two funds on the same index should give the same result. They do not. Cost, domicile, share class, trading line, size and the account that holds the fund change the result by tenths of a percentage point a year. Over 30 years that adds up to tens of thousands of PLN per 100,000 PLN invested.

This note collects the method for comparing funds, with data as of November 2026. It is knowledge and method, not advice: the funds named below are examples that show a mechanism, not picks. Which funds I use is in my private notes; my rules are in [[My Investment Strategy]].

**TL;DR**

- **Rank by tracking difference, not TER.** Compare 3–5 years of tracking difference against the net total-return index, then add your own trading and FX costs.
- **In a taxable account, do not sell a fund with a large gain just to save a few basis points.** The 19% tax you defer keeps compounding for you. Send new money to the cheaper fund instead.
- **For US-heavy indices, domicile matters most.** An Irish fund loses 15% of US dividends to US tax; a physically replicated Luxembourg fund reportedly about 30%. Neither can be credited in Poland.
- **Synthetic (swap) S&P 500 funds have beaten physical ones** by about 0.2 pp a year (2016–2025), because swaps avoid US dividend tax. You accept collateralised bank counterparty risk, capped at 10% of NAV by law.
- **A W-8BEN does nothing for an Irish ETF.** It matters only for US shares you hold directly.
- **Accumulating beats distributing in a taxable account** unless you spend the payouts. Polish brokers do not withhold the 19% on foreign ETF payouts; you self-assess it in PIT-38.
- **Currency risk comes from what the fund holds**, not from the currency of the trading line. A EUR-hedged class does not protect a PLN investor.
- **Prefer funds above about EUR 100m with 3+ years of history.** A closure is a taxable sale you did not choose.
- **Execution:** use the most liquid line, a limit order near iNAV, and trade while the underlying market is open.
- **The wrapper matters as much as the fund.** In IKE, IKZE and OKI the choice of Acc vs Dist and the cost of switching funds disappear.

## 🔗 Links

- [[My Investment Strategy]] — my rules; which funds I hold is private
- [[Polish Investor Taxes 2026]] — Belka tax, PIT-38, IKE/IKZE/OIPE limits, OKI from 2027
- [[Rebalancing — Threshold vs Calendar]] — rebalancing with cash flows, inside wrappers, and the tax cost of selling
- [[Lump Sum vs Dollar-Cost Averaging]] — getting the money into the fund
- [[Moving-Average Trend Rule on Sector ETFs]] — a timing rule whose costs depend on the line and the wrapper
- [[Asset Allocation and Diversification]] · [[Investment Strategies]] · [[Position Sizing and Loss Limits in a Speculative Sleeve]]
- [[Crypto Custody and Exchanges in the EU after MiCA]] — for crypto ETNs, which are debt securities, not funds

## 🧩 Total Cost of Ownership — TER Is Only the Start

The TER (or OCF) is the fee the fund charges. What you actually lose is wider:

- **Tracking difference (TD):** the fund's return minus the index's, over a calendar year. It includes the TER, transaction costs, withholding tax, securities-lending income and the swap fee. TD persistently worse than −TER is a red flag. ESMA's ETF guidelines (ESMA/2012/832) define it.
- **Tracking error:** the volatility of the daily difference. It matters less for a long-term holder than the TD.
- **Your own costs:** commission, the broker's FX margin, half the bid–ask spread on each buy and sell.
- **Securities lending:** it can make the TD better than the TER, but the issuer and lending agent keep part of the revenue. The splits I found (for example the iShares 62.5% often quoted) were not re-checked.

**TERs of world and all-world UCITS ETFs (justETF, read 13 Nov 2026):**

| Fund (example, not a pick) | TER | Note |
|---|---:|---|
| Amundi Prime All Country World | 0.07% | Solactive GBS index, launched June 2024 |
| Vanguard FTSE Global All-Cap | 0.07% | launched August 2026 |
| SPDR MSCI ACWI | 0.12% | |
| Vanguard FTSE All-World | 0.14% | cut from 0.19%, announced 20 Jul 2026, effective 28 Jul 2026 |
| Invesco FTSE All-World | 0.15% | |
| iShares MSCI ACWI | 0.20% | |

Fees keep falling. Two FTSE All-World funds launched in 2026 at 0.07% (Xtrackers in April, iShares in May), but they were still small (EUR 229m and EUR 35m). A cheap new fund carries the closure risk described below. Data aggregators lag: on 13 Nov 2026 trackingdifferences.com still showed 0.19% for Vanguard FTSE All-World.

**Cost drag** on 100,000 PLN invested for 30 years at 7% a year before costs and tax (761,000 PLN with no costs; my calculation):

| Annual cost | 0.07% | 0.14% | 0.20% | 0.50% | 1.00% |
|---|---:|---:|---:|---:|---:|
| Less at the end | 14,800 PLN | 29,300 PLN | 41,500 PLN | 99,800 PLN | 186,900 PLN |

**When to switch to a cheaper fund in a taxable account.** Take a 100,000 PLN position with 40,000 PLN of unrealised gain. Selling now costs 7,600 PLN of tax. Both paths are sold and taxed at the end. Results from the research, at 7% a year:

| Annual cost saving | Break-even |
|---|---|
| 0.05 pp (for example 0.19% → 0.14%) | about 170 years |
| 0.20 pp | about 39 years |
| 0.50 pp (for example 0.60% → 0.10%) | about 3 years (about 7 with a 0.3% round trip) |

The jump from 39 years to 3 is not a typo. The tax you do not pay keeps compounding for you, like an interest-free loan from the state: 7,600 PLN growing at about 7% is worth about 0.5% of the position a year (my arithmetic). A fee saving well below that takes decades to pay back. One close to it pays back within a few years.

**Rule:** in a taxable account, never sell an appreciated holding to save 0.05–0.10 pp a year. Send new money to the cheaper fund instead. Inside IKE, IKZE or OKI, a switch costs only the spread, so switch freely.

**Polish tax:** the TER is not deductible separately; it lowers NAV and so the taxed gain. Broker commissions are deductible costs in PIT-38 (art. 22 ust. 1 and art. 23 ust. 1 pkt 38 PIT). Foreign-currency revenue and costs are converted at the NBP average rate of the last business day before each date (art. 11a), so FX moves become part of the PLN gain.

## 🧩 Replication: Physical, Sampled, Synthetic

- **Full physical:** holds every index stock.
- **Optimised sampling:** holds a representative subset. Most world and all-world funds work this way (Vanguard FTSE All-World, iShares and SPDR MSCI ACWI, Invesco FTSE All-World). Amundi Prime All Country World was listed as full replication.
- **Synthetic (swap):** holds a substitute basket of other securities and swaps its return for the index return with one or more banks. Common for the S&P 500, MSCI USA, commodities and money-market trackers.

**Why synthetic can win on US equities.** A swap on a qualified broad index is exempt from US dividend withholding under the section 871(m) rules (26 CFR 1.871-15, qualified-index exception). A physical Irish fund pays 15% on US dividends. Annual TD, 2016–2025 (trackingdifferences.com):

| S&P 500 UCITS ETF (example) | Replication | TER | Average TD vs net index |
|---|---|---:|---:|
| Invesco S&P 500 | synthetic, unfunded swap, several counterparties | 0.05% | about +0.43 pp a year better than the index |
| iShares Core S&P 500 | full physical | 0.07% | about +0.23 pp a year better than the index |

About 0.2 pp a year in favour of the swap fund is about 43,900 PLN more per 100,000 PLN over 30 years at 7% (my calculation, before tax). IRS Notice 2026-61 extended the 871(m) transition relief by two years. Its exact release date was not confirmed.

**What you take on.** UCITS caps exposure to one swap counterparty at 10% of NAV (5% if it is not a credit institution). In an unfunded swap the fund owns the substitute basket, and only the unreset swap value is at risk. Worked example: if the swap owes the fund 4% of NAV when the bank defaults, the fund keeps the basket (about 96% of NAV) plus collateral, so the loss is about 4% at most.

**Red flags:**

- a single counterparty, or a funded swap with weak collateral
- exposure close to the 10% cap, or resets the fund does not disclose
- a swap fee that eats the tax edge, so the synthetic TD is no better than the physical one
- a physical fund lending much of its portfolio without an indemnity

**Polish tax:** none of this changes Polish taxation. Gains are taxed at 19% under art. 30b, with no look-through to the swap.

**Rule:** for S&P 500 or US-only exposure, a large multi-counterparty swap fund has had about 0.2 pp a year better TD, if you accept collateralised bank risk. For world funds, physical sampled funds are fine; choose on 3–5-year TD.

## 🧩 Domicile and Withholding Tax

Dividends can be taxed twice before they reach you:

- **Level 1:** the source country taxes the fund.
- **Level 2:** the fund's country taxes the payout to you.

**Level 1 on US dividends:**

| Fund domicile | US tax on dividends paid to the fund | Status |
|---|---:|---|
| Ireland | 15% | confirmed: US–Ireland treaty art. 10(2)(b) |
| Luxembourg, physical | about 30% | commonly reported; not confirmed |
| Germany | about 15% | not confirmed |
| US-domiciled ETF | 0% at the fund | the US then taxes you at level 2: 15% for a Polish resident with W-8BEN, 30% without |

At level 2, Ireland and Luxembourg take nothing from non-residents. Level-1 tax paid inside a fund **cannot be credited in Poland**, because you never paid it yourself.

**What happens to 100 USD of gross US dividends in a Polish taxable account** (from the research):

| Structure | Tax now | Total |
|---|---|---:|
| Irish distributing ETF | 15 (US) + 19% of 85 (Poland) = 16.15 | 31.15 |
| Irish accumulating ETF | 15 (US); the 19% is deferred to the sale | 15 now |
| US-domiciled ETF with W-8BEN | 15 (US) + 4 (Polish top-up) | 19 |
| Luxembourg physical distributing ETF | 30 + 19% of 70 = 13.3 | 43.3 |

Over 30 years, 100,000 PLN in an S&P 500 tracker with a 1.3% dividend yield ends at about 720,700 PLN in an Irish fund vs 682,200 PLN in a Luxembourg physical fund (before TER and Polish tax). The research marks this as uncertain because the Luxembourg 30% rate was not confirmed.

**Why not just buy US ETFs?** Under PRIIPs, EU retail clients cannot buy funds without a KID, and US issuers do not publish one. There is also US estate tax: a non-US person with more than USD 60,000 of US-situs assets (US shares, US-domiciled funds) can owe it. Irish funds are not US-situs.

**Rule:** if the index holds US stocks, choose an IE ISIN (or a swap fund). Avoid physical LU or DE funds for US-heavy indices. Keep US-situs holdings below USD 60,000.

## 🧩 W-8BEN — When It Matters

The W-8BEN certifies to the US that you are a foreign person resident in Poland. It cuts US tax on dividends from US shares you hold directly from 30% to 15% (Poland–US agreement of 1974, art. 11). US interest is taxed at 0% under art. 12.

- **Validity:** from signing to the end of the third following calendar year. A form signed in October 2026 is valid to 31 Dec 2029. You must report a change in circumstances within 30 days.
- **Brokers:** mBank has applied it automatically since 18 Oct 2023, and BM PKO BP since 12 Sep 2023 (secondary survey, October 2025). Other brokers' procedures were not re-checked.
- **Cost of a missing form:** take a USD 50,000 US-share portfolio yielding 1.5% (USD 750 a year).
  - With the form, the US takes 112.50 and the Polish top-up is 30, so 142.50 in total (19%).
  - Without it, the US takes 225.00. The tax office credits only the treaty 15%, so the total is 255 (34%). Under the NSA's reading the total is 225 (30%).
- **Polish tax:** US dividends are taxed at 19% (art. 30a ust. 1 pkt 4 PIT). The US tax is credited under art. 30a ust. 9, and the rest is self-assessed in PIT-38 section G by 30 April. Brokers do not withhold the Polish 4%.
- **Irish ETFs:** the form does not change the 15% the fund pays inside its NAV. Posts that say otherwise are wrong.

**Rule:** if you hold US shares directly, in any account including IKE, IKZE and OKI, check that each dividend shows exactly 15% US tax and that the form runs past the next record date. If you hold only Irish ETFs, the form does not matter.

## 🧩 Accumulating vs Distributing

The two classes of the same fund normally share the same TER (FTSE All-World: 0.14% for both). The difference is tax timing.

- **Distribution yields (justETF, 13 Nov 2026):** Vanguard FTSE All-World Dist 1.28%, Vanguard S&P 500 Dist 0.83%. Broad global equity classes yield about 0.8–1.5%.
- **Which class investors pick:** the FTSE All-World Acc class holds about EUR 57.9bn vs EUR 24.3bn in Dist.
- **Annual tax drag before the sale at 19%:** about 0.16 pp at a 0.83% yield, 0.24 pp at 1.28% and 0.38 pp at 2%.

**Worked example** (generic: 100,000 PLN, 30 years, 7% a year, 2% yield):

| | Before exit | Net after the 19% exit tax | Annual after tax |
|---|---:|---:|---:|
| Accumulating | 761,226 PLN | 635,593 PLN | 6.36% |
| Distributing, payouts reinvested after 19% | 684,164 PLN | 600,334 PLN | 6.16% |

The gap is 35,259 PLN (5.9%), about 0.2 pp a year. Even if you need cash, selling accumulating units is usually cheaper. For example, 4,000 PLN raised from units whose price is 75% gain costs 570 PLN of Belka tax, while a 4,000 PLN distribution costs 760 PLN.

**Polish tax mechanics:**

- **Rate:** distributions are taxed at a flat 19% on the gross amount (art. 30a ust. 1 PIT). Guides differ on whether a foreign ETF payout is a dividend (pkt 4) or a fund payout (pkt 5); the rate and the form are the same either way.
- **Nothing withheld:** Irish funds take nothing at level 2, and Polish brokers do not withhold the 19% on foreign ETF payouts (art. 41 ust. 4d limits that duty to income obtained in Poland). You self-assess in PIT-38 section G. Unpaid tax accrues interest.
- **Currency:** convert at the NBP rate of the business day before the payment, not the payment-day rate.
- **Losses:** capital losses do not offset dividend tax.

**Rule:** in a taxable account, choose accumulating unless you will spend the payouts. In IKE, IKZE or OKI, ignore the class and choose on cost, TD and liquidity.

## 🧩 Currency: Fund, Exposure, Trading Line, Hedging

Three different currencies get confused:

1. **Base currency** of the fund: an accounting choice.
2. **Exposure:** the currencies of the stocks the fund holds. An MSCI World fund is mostly USD exposure, whichever line you buy.
3. **Trading line:** the currency in which the exchange quotes the same fund (EUR on Xetra, USD or GBP in London, PLN on GPW). Same fund, same NAV, same currency risk.

So the line matters only for cost: the broker's FX margin, the spread and the commission.

**FX costs at Polish brokers.** XTB charges 0.5% per conversion (its fee page, November 2026), and secondary sources cite 0.8% at weekends. A secondary source from end-2025 gives mBank 0.1% and IBKR about 0.03%. XTB's IKE and IKZE are PLN accounts, so every foreign-line purchase pays the conversion (secondary source).

**PLN lines.** GPW GlobalConnect quotes six Irish UCITS ETFs in PLN: three listed on 15 Dec 2025 and three on 5 Mar 2026. Santander Bank Polska is the market maker, obliged to quote PLN 30,000 per side for 80% of the session with a spread of at most 5%. One early-session snapshot on 13 Nov 2026 showed spreads of about 0.05–1.10%. A PLN line avoids the broker's FX fee, but the market maker builds FX into the quote.

**Hedged classes.**

- **Price:** a hedged class costs more. iShares MSCI World EUR Hedged has a 0.55% TER vs 0.20% for the unhedged core fund.
- **Carry:** the hedge earns or pays the short-rate gap. In November 2026 the rates were NBP 3.75% (since 5 Mar 2026), a Fed target of 3.75–4.00% and an ECB deposit rate of 2.50%. That makes hedging USD assets to EUR cost about 1.25–1.5 pp a year, and hedging them to PLN cost about 0–0.25 pp (derived from policy rates; interbank forwards can differ).
- **Who it protects:** a EUR hedge leaves a PLN investor with the full EUR/PLN risk. It is the wrong hedge.

Worked example (generic): 100,000 PLN in MSCI World for 20 years at 7%, with spot FX ending flat. The EUR-hedged class ends about 28% behind the unhedged one: 0.35 pp of extra TER plus about 1.4 pp of negative carry.

**Polish tax:** the gain is computed in PLN at NBP D-1 rates (art. 11a), so a gain caused only by a weaker złoty is taxed, and an FX loss reduces the gain. Hedging profit and loss stays inside NAV.

**Rule:** judge currency risk by what the fund holds. Buy the line with the lowest all-in cost at your broker and in your wrapper: FX margin, plus half the spread, plus commission. Hedge only to PLN, and only when the TER premium and the rate gap are justified, as they more often are for bonds than for equities.

## 🧩 Fund Size, Age, Index Choice and Closure Risk

**Size and age (justETF, 12 Nov 2026).**

- **MSCI World:** 40 ETFs track it, from about EUR 1m to EUR 132.7bn. Of the 39 that show a size, 11 are below EUR 100m and 8 below EUR 50m. TERs run from 0.05% to 0.50%.
- **Closure risk:** small, young funds and cheaper twins from the same issuer are the ones that get closed or merged.

**What a closure costs in a taxable account.** Take 100,000 PLN in a global accumulating ETF at 7% for 30 years:

- **No closure:** 635,593 PLN net.
- **Closure after 10 years:** the forced realisation costs 18,376 PLN of tax, the rest is reinvested, and you end at 592,879 PLN.
- **Difference:** 42,714 PLN, or 6.7%.

A closure is a disposal taxed at 19% under art. 30b ust. 1 pkt 5 PIT, which covers the redemption or "unicestwienie" of fund units. Foreign funds count as "fundusze kapitałowe" (art. 5a pkt 14). Tax neutrality covers only switches within a Polish umbrella fund (art. 17 ust. 1c). How a cross-border UCITS merger is taxed in Poland was not confirmed: no tax interpretation was found. In IKE, IKZE or OKI a closure costs only the round-trip spread.

**The index is a real choice** (index factsheets, data as of 30 Oct 2026):

| Index | Constituents | US weight | Covers |
|---|---:|---:|---|
| MSCI World | 1,248 | 72.77% | developed markets only |
| MSCI ACWI | 2,413 | 64.63% | developed + emerging |
| FTSE All-World | about 4,200 | 62.70% | developed + emerging, more mid caps |

FTSE classes Poland (and South Korea) as **Developed**, while MSCI classes both as **Emerging**. Mixing an MSCI World fund with an FTSE Emerging fund drops Poland and Korea entirely. Mixing FTSE Developed with MSCI EM counts them twice.

**Rule:** pick a fund above about EUR 100m with at least 3 years of history, on the index you actually want: World to skip emerging markets, ACWI or All-World for the whole market. Do not mix MSCI and FTSE regional blocks.

## 🧩 Legal Form and Investor Protection

- **UCITS ETF:** an EU-regulated fund. Its assets sit with a depositary, segregated from the issuer, and the sub-funds of an umbrella have segregated liability. The UCITS and Irish law details come from prior knowledge; EUR-Lex and the Irish statute book could not be read in this run.
- **Polish ETFs** (Beta ETF, inPZU and others) are portfolio closed-end funds (FIZ), legally alternative investment funds, not UCITS. In November 2026 GPW listed 32 ETFs, 1 ETC and 11 ETNs.
- **ETC and ETN:** debt securities, not funds. They carry the issuer's risk, which collateral reduces if it is properly secured. The GPW crypto ETNs are debt securities.
- **Your securities at the broker** are held on your account and are not part of the broker's bankruptcy estate if segregation works (art. 7 ust. 1 of the Trading Act). Compensation is for the case where something is missing.

**Polish compensation scheme (KDPW, art. 139 of the Trading Act, Dz.U. 2024 poz. 722):**

- **Coverage:** 100% of the loss up to EUR 3,000 plus 90% of the excess, on covered funds capped at EUR 22,000. The maximum payout is **EUR 20,100 per investor per broker**, however many accounts you hold there.
- **Timing:** payout within 3 months of KDPW approving the schedule, extendable by 3 months. Claims expire after 5 years.
- **Ireland (ICCL):** 90% of the loss up to EUR 20,000.

Worked example (generic): 400,000 PLN, about EUR 94,000, at one broker that turns out to be a fraud with nothing left. Compensation is EUR 20,100, and the rest is a claim against the bankruptcy estate. Split across two unrelated brokers, the worst-case payout doubles to EUR 40,200.

**XTB execution:** under its execution policy (valid from 30 Sep 2026), XTB acts as a systematic internaliser for OTC market orders on foreign ETFs. It sends pending orders, and market orders outside the main session, to Tradegate. A Xetra-listed ETF bought there may not be filled in the Xetra book.

**Rule:** hold UCITS ETFs or Polish portfolio FIZ for core money and only secured physical ETCs for metals, through a KNF- or EEA-licensed broker in a compensation scheme. Split across brokers once losing everything above EUR 20,100 at one broker would change your plans.

## 🧩 Execution and Venue Liquidity

**Two prices.** An ETF has a NAV, struck once a day, and an exchange price quoted all day by market makers. Authorised participants create and redeem units against the basket, which keeps the gap small. The iNAV is an intraday estimate of NAV. When the underlying market is closed it goes stale, and spreads and premiums widen.

**Liquidity comes from the holdings**, not from the ETF's own turnover. Xetra data for September 2026 (Deutsche Börse):

- 3,129 ETFs listed, with about EUR 1.44bn of order-book turnover per trading day.
- The Xetra Liquidity Measure is the round-trip cost of a EUR 100,000 position. Its median was **24 bp** (10th–90th percentile 7–71 bp). Funds above EUR 5bn had a median of 4.6 bp, and funds below EUR 100m had 40 bp.
- Examples: iShares Core S&P 500 1.6 bp, iShares Core MSCI World 1.9 bp, Vanguard FTSE All-World Acc 2.2 bp, iShares MSCI ACWI 3.3 bp. Small thematic lines cost 70–150 bp.

**GPW main market**, one session snapshot on 13 Nov 2026 (time of day not recorded):

- Quoted spreads were about 4–15 bp on the busiest lines, 23–36 bp on mid-sized ones and 94–137 bp on HANetf thematic lines.
- Total ETF turnover was about PLN 4.2 million for the session.

**What it costs over time** (generic examples):

- **Buy and hold:** a 1% round trip is about 0.1% a year over 10 years and 0.03% over 30.
- **Monthly purchases:** PLN 2,000 a month for 30 years at 7% ends at about PLN 2.34 million. With a 0.6% half-spread on every purchase and the final sale, about PLN 28,000 is lost. With a 0.02% half-spread, about PLN 900.
- **Active trading:** 12 round trips a year at 1% cost about 12% a year. At that frequency, execution outweighs every other cost (see [[Moving-Average Trend Rule on Sector ETFs]]).

**Settlement.** The EU moves from T+2 to T+1 on 11 Oct 2027 (ESMA: framework complete as of 16 Oct 2026). For Polish tax, revenue arises on the settlement date (art. 17 ust. 1ab), so the NBP rate date and the year-end cut-off for PIT-38 move one business day later. This is my derivation from the act, not Ministry of Finance guidance.

**Polish tax:** commissions are deductible in PIT-38. The spread is already inside the prices, so it shows up through a higher cost basis and lower proceeds.

**Rule:** buy the most liquid line of your fund in the currency you already hold, with a limit order near iNAV, while the underlying market is open. For a world or US fund that is roughly 15:30–17:30 CET. Do not trade a broad index ETF when its spread is wider than about 0.2%.

## 🧩 Which Wrapper Holds the ETF

| | Taxable account | IKE | IKZE | OKI (from 1 Jan 2027) |
|---|---|---|---|---|
| Tax while invested | 19% on payouts and realised gains | none | none | 0.85% a year of the non-exempt average value in 2027 |
| Exit | — | 0% after 60, with contributions in 5 calendar years | 10% flat on the whole payout after 65 | none |
| 2026 / 2027 limit | none | 28,260 / 30,099 PLN | 11,304 / 12,039.60 PLN (self-employed: 16,956 / 18,059.40 PLN) | no deposit limit |
| Switching funds | taxable sale | free | free | free |

**How OKI works.**

- **Rate:** the 2027 rate is 19% of the 4.5% NBP reference rate from 31 Oct 2025, rounded down to 0.85%. After that it follows the reference rate.
- **Exemption:** 100,000 PLN of *qualified* investment assets plus 25,000 PLN of savings assets, with a combined cap of 100,000 PLN.
- **What qualifies:** an ETF counts as qualified only if its policy commits at least 70% to PLN qualified assets. **Global ETFs never qualify**, so they are taxed at 0.85% from the first złoty, PLN-quoted or not.
- **Source:** the OKI act, Dz.U. 2026 poz. 1098, and [[Polish Investor Taxes 2026]].

**Worked example** (generic: 10,000 PLN once, 7% a year, global accumulating ETF, 30 years, no switches):

| Taxable | IKE | IKZE | OKI with a global ETF |
|---:|---:|---:|---:|
| 63,559 PLN | 76,123 PLN | 68,510 PLN + 3,200 / 1,200 PLN refund at the start (32% / 12% bracket) | 59,422 PLN |

Against plain buy-and-hold in a taxable account, OKI with a global ETF wins only for horizons up to about **16 years** at the 2027 rate (my arithmetic). OKI wins more often if you rebalance or switch, because each sale in a taxable account pays 19%.

**Rule (from the research):**

- Fill IKZE (if your marginal rate is 19% or 32%) and IKE first, and keep distributing or often-switched ETFs there.
- Use the OKI exemption only for funds that pass the 70% PLN test.
- Hold global accumulating ETFs above the IKE and IKZE limits in OKI only if you will trade or rebalance often, or your horizon is under about 16 years. Otherwise hold them in the taxable account.

## 🧩 A Checklist Before Buying

1. **Index:** World, ACWI or All-World? Is the benchmark the one in the fund's name, or a capped or custom version?
2. **Domicile:** an IE ISIN for anything US-heavy. Treat an LU or DE physical fund on US stocks as a warning.
3. **Replication:** physical sampled is fine for world funds. For the S&P 500, compare against a multi-counterparty swap fund.
4. **Cost:** 3–5 years of TD against the net total-return index, not the TER alone.
5. **Size and age:** above about EUR 100m and at least 3 years of history. Check the issuer's notices for closures and mergers.
6. **Class:** accumulating in a taxable account. In wrappers it does not matter.
7. **Currency:** no EUR, GBP or CHF hedge for a PLN investor. Pick the line with the lowest all-in cost at your broker.
8. **Wrapper:** IKE, IKZE, OKI or taxable? Does your provider offer that fund in that wrapper?
9. **Execution:** a limit order, the main session, the underlying market open, a spread below about 0.2%.
10. **Protection:** a KNF- or EEA-licensed broker, with holdings at one broker kept in proportion to the EUR 20,100 cap.

## ☘️ What I Take From It

- Most of the "which ETF is best" debate is about 0.05–0.10 pp of TER. The real money is in domicile (up to about 0.2–0.4 pp a year on US dividends), the wrapper (19% on every gain), not selling to switch, and not paying 0.5% FX on every small purchase.
- The tax I defer by not selling is an asset. I should treat fee cuts on new funds as a reason to send new money there, not a reason to sell.
- A cheap new fund is a trade-off, not a free win: lower TER, higher closure risk. For a long holding period I would rather pay 0.05 pp more for a fund that will still exist in 20 years.
- The trading line felt like a currency decision. It is not — it is a cost decision.
- For any rule that trades often (a moving-average rule, frequent rebalancing), execution and the wrapper decide whether the rule survives at all.

## ✍️ Evidence Check

| Claim | Evidence | Strength |
|---|---|---|
| 15% US withholding on dividends to Irish funds | US–Ireland treaty art. 10(2)(b) | strong (primary) |
| About 30% for Luxembourg physical funds | commonly reported, treaty text not confirmed | weak |
| Swap S&P 500 fund beat physical by about 0.2 pp a year | trackingdifferences.com, 2016–2025, one pair of funds | moderate (one pair, 10 years) |
| W-8BEN validity, 15% vs 30% | IRS instructions, Poland–US agreement | strong (primary) |
| Polish brokers do not withhold tax on foreign ETF payouts | art. 41 ust. 4d PIT, secondary guides | moderate |
| Compensation cap EUR 20,100 per broker | art. 139 Trading Act | strong (primary) |
| OKI rate and exemptions | Dz.U. 2026 poz. 1098 | strong (primary); application guidance not yet published |
| Xetra liquidity figures | Deutsche Börse monthly statistics, September 2026 | strong (primary) |
| GPW and GlobalConnect spreads | one snapshot each | weak (not representative) |
| Cost drag, break-even and wrapper arithmetic | own calculation from stated assumptions | arithmetic, not evidence |

**What I could not confirm:**

- the Luxembourg 30% rate and how German-domiciled funds are treated
- securities-lending revenue splits by issuer
- typical spreads on LSE, and other Polish brokers' FX and execution terms beyond XTB
- Beta ETF and inPZU fees and tracking differences
- whether broker FX fees are deductible in PIT-38
- whether XTB's PLN-only IKE converts foreign distributions automatically, and at what margin
- the Polish tax treatment of a cross-border UCITS merger
- the release date of IRS Notice 2026-61
- which named ETFs already carry the OKI 70% PLN clause
- iNAV publication rules and the size of ETF discounts in March 2020
- UK and Swiss alignment with EU T+1

The session's web-search budget ran out before several items, so these rest on direct fetches of known primary pages.

## 📖 Further Reading

- ESMA, *Guidelines on ETFs and other UCITS issues*, ESMA/2012/832 — tracking difference, counterparty and collateral rules.
- US–Ireland double tax convention (1997), art. 10 — https://www.irs.gov/businesses/international-businesses/ireland-tax-treaty-documents
- IRS, Instructions for Form W-8BEN — https://www.irs.gov/instructions/iw8ben
- IRS Notice 2026-61 and Notice 2024-44 (section 871(m) phase-in) — https://www.irs.gov/pub/irs-drop/n-24-44.pdf
- PIT Act, consolidated text Dz.U. 2026 poz. 592 — https://eli.gov.pl/eli/DU/2026/592
- OKI act, Dz.U. 2026 poz. 1098 — https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20260001098/O/D20261098.pdf
- Trading Act, Dz.U. 2024 poz. 722, art. 139 (compensation); KDPW compensation scheme — https://www.kdpw.pl/pl/system-rekompensat.html
- Investor Compensation Company (Ireland), limits — https://www.investorcompensation.ie/claimant/compensation-limits.225.html
- Deutsche Börse, ETF & ETP statistics and Xetra Liquidity Measure — https://www.cashmarket.deutsche-boerse.com/cash-en/trading/etfs-etps/xetra-liquidity-measure-etfs
- GPW ETF quotes — https://www.gpw.pl/etfy-pelna-wersja-notowan · GPW GlobalConnect ETF list and FAQ — https://gpwglobalconnect.pl/lista-etf · https://gpwglobalconnect.pl/jak-zaczac-faq
- ESMA, T+1 settlement in the EU — https://www.esma.europa.eu/press-news/esma-news/esma-proposes-move-t1-october-2027
- MSCI World and ACWI factsheets; FTSE All-World factsheet; FTSE equity country classification — https://www.lseg.com/en/ftse-russell/equity-country-classification
- justETF comparisons: MSCI World ETFs — https://www.justetf.com/en/how-to/msci-world-etfs.html · FTSE All-World ETFs — https://www.justetf.com/en/how-to/ftse-all-world-etfs.html · MSCI ACWI ETFs — https://www.justetf.com/en/how-to/msci-acwi-etfs.html
- trackingdifferences.com — annual tracking differences per ISIN — https://www.trackingdifferences.com/
- XTB fees — https://www.xtb.com/pl/konto-i-oplaty · XTB IKE/IKZE — https://www.xtb.com/pl/ike
- Inwestomat (secondary): listing currency vs exposure — https://inwestomat.eu/waluta-notowan-funduszu-etf-nie-ma-zadnego-znaczenia/ · broker costs — https://inwestomat.eu/gdzie-kupic-etf-koszty-i-bezpieczenstwo-brokerow/

---
Template: [[templates/knowledge_note_info]]
