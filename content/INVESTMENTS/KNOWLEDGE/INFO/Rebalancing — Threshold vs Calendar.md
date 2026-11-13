---
title: "Rebalancing — Threshold vs Calendar"
date: 2026-11-13
enableToc: true
openToc: true
tags: ["knowledge", "info", "investments", "rebalancing", "asset-allocation", "risk-management", "taxes", "poland", "research"]
type: knowledge-note
source: "_raw/research-workspaces/rebalancing-threshold-vs-calendar/ (deep research, 10 items, 2026-11-13)"
agent-created: true
summary: "What the evidence says about calendar vs threshold rebalancing: Vanguard 2010-2024, Dichtl et al., Daryanani, AQR and Man on momentum, the front-running cost of predictable rebalancing, timing luck, band design, volatile sleeves, and rebalancing under Polish tax rules."
---

# Rebalancing — Threshold vs Calendar

## 🗒️ Description

Rebalancing brings a portfolio back towards its target weights after prices move. The two families of rules are **calendar** (rebalance on fixed dates) and **threshold** (rebalance when a weight drifts outside a band), plus hybrids that check on a schedule but trade only when a band is breached.

This note collects what the research says about the choice, how to design a band, what changes for a small volatile sleeve, and how taxes in Poland change the answer. It is knowledge and method, not advice. My own rule, without amounts, is in [[My Investment Strategy]].

**TL;DR**

- **Rebalancing controls risk; it does not reliably add return.** Across the independent tests, rebalanced portfolios had about the same return as buy-and-hold but lower volatility and higher Sharpe ratios. Never rebalancing earned more in most long samples because equities drifted up — at the cost of becoming a much riskier portfolio.
- **The particular rule matters much less than having one.** Dichtl, Drobetz and Wambach (2014): "the choice of a particular rebalancing strategy is of only minor economic importance".
- **Too frequent is the one clear mistake.** Monthly calendar rebalancing was worse than quarterly or annual in several studies, because it fights 3–12-month momentum and trades more.
- **A wide band or an annual check is enough** for most diversified portfolios. Vanguard (2022) found annual rebalancing, or annual with a small band, best for investors who do not need tight tracking.
- **Use cash flows first.** Contributions, dividends and withdrawals rebalance without selling, which is the cheapest and most tax-efficient method.
- **In a Polish taxable account every sale costs 19% of the gain**, so the order is: cash flows, then trades inside tax wrappers, then the smallest possible sale in the taxable account.

## 🔗 Links

- [[My Investment Strategy]] — my bands and how often I check them
- [[Asset Allocation and Diversification]] — the allocation the rebalancing protects
- [[Polish Investor Taxes 2026]] — Belka tax, FIFO, IKE/IKZE/OIPE limits, OKI from 2027
- [[Position Sizing and Loss Limits in a Speculative Sleeve]] — sleeve caps, which interact with bands
- [[Moving-Average Trend Rule on Sector ETFs]] — the trend-following side of the momentum argument
- [[My Crypto Strategy]] · [[Investment Strategies]] · [[Investing Psychology]]

## 🧩 What Rebalancing Actually Does

- **Drift is large if you do nothing.** In Vanguard's US 60/40 test (1926–2009), the never-rebalanced portfolio averaged 84% equities and peaked at 99%. A 60/40 started at the end of 1989 held about 80% equities by 2021 (Vanguard 2022). Harvey et al. note the same drift to about 80/20 within a decade.
- **The volatility effect is consistent.** Vanguard 2010: annualised volatility 14.4% never rebalanced versus 11.9–12.2% for monthly, quarterly or annual rebalancing. Dichtl et al. (US, UK, Germany, 1982–2011): 10-year Sharpe ratios rose by roughly 5% (US, UK) to 13% (Germany) with any rebalancing, significant at the 1% level.
- **The return effect is not.** Dichtl et al.: average returns were not significantly different from buy-and-hold in any country or horizon. Vanguard 2010: 9.1% never rebalanced versus 8.5–8.6% rebalanced, before costs.
- **"Rebalancing premium" is mostly an accounting illusion.** Willenbrock (2011) showed a rebalanced portfolio's geometric return beats the weighted average of its parts' geometric returns. Cuthbertson et al. (2016) and AQR (Huss and Maloney 2017) answer that this benchmark is not investable and that buy-and-hold earns diversification return too. In AQR's simulation, mean terminal wealth was identical with and without rebalancing (2.71 per unit invested); rebalancing only narrowed the spread of outcomes.
- **Rebalancing is a bet on mean reversion.** Rattray, Granger, Harvey and Van Hemert (2020) derive that in two periods, rebalanced minus buy-and-hold return is −w_S·w_B·k1·k2, where k1 and k2 are the stock-minus-bond returns in each period. It is negative whenever relative performance trends. In 2007–2009 the monthly-rebalanced 60/40 had a maximum drawdown about 1.2 times (about 5 percentage points) worse than buy-and-hold starting from the same mix.

## 🧩 Calendar vs Threshold: The Evidence

| Study | Data | Main finding | Independence |
|---|---|---|---|
| Vanguard, Jaconetti, Kinniry, Zilbering (2010, updated 2015) | US 60/40 1926–2009; global 50/50 1926–2014 | No universally optimal rule. Annual or semi-annual checks with a 5% band balance risk and cost. Monthly: 1,008 events in 84 years; annual: 83; annual with 10% band: 15 | Asset manager |
| Vanguard, Zhang et al. "Rational rebalancing" (Oct 2022; JPM 2024) | Simulated 60/40, 10 years, after costs | Annual beat monthly by 27 bp a year in certainty-equivalent terms, quarterly by 14 bp, daily by 51 bp. Annual with a 1–2% band scored best. 80–90% of the gain is equities allowed to drift up, 10–20% is lower cost | Asset manager; peer-reviewed later |
| Vanguard, Zhang et al. "The rebalancing edge" (Dec 2024) | Simulated global 60/40, 10,000 paths | Trigger at 2 pp drift, trade back to 1.75 pp (200/175): median return 7.19% vs 7.01% monthly and 7.08% quarterly; costs 5.1 vs 22.1 and 18.3 bp | Defends Vanguard's own fund policy; annual not tested |
| Dichtl, Drobetz, Wambach (FMPM 2014; Applied Economics 2016) | US, UK, Germany, 60/40, 1982–2011, bootstrap | Any rule beats buy-and-hold on risk-adjusted terms; the choice of rule is minor. Quarterly periodic was best; monthly periodic and yearly band-edge were worse | Academic, peer-reviewed |
| Daryanani (J. Financial Planning, Jan 2008) | Five-class 60/40, daily 1992–2004 | 20% relative bands checked about every two weeks added about 0.38 pp a year versus never rebalancing, after 20 USD trades | Author built rebalancing software; in-sample, 49 rules tried |
| AQR, Ilmanen and Maloney (Dec 2015) | Five-asset portfolio, monthly 1972–2014 | Annual or biennial dates best; trigger rules fire mid-trend and underperformed fixed annual dates | Sells trend and risk-parity products |
| Rattray et al., "Strategic Rebalancing" (JPM 2020) | US 60/40, 1960–2017 | Common heuristics change the average of the five worst drawdowns by about 1 pp at most; a 10% trend-following sleeve helps more | Man Group, sells trend following |

**Why monthly does worse.** AQR measured average excess-return autocorrelation of +0.15 at 1 month, +0.08 at 3 months and +0.09 at 12 months (momentum), but −0.33 at 3 years and −0.31 at 5 years (reversal). Frequent rebalancing sells winners during the momentum phase; annual and biennial schedules "get the best of both worlds". In Dichtl et al., the monthly-vs-quarterly gap disappeared in simulations that destroyed serial dependence, which points to the same cause.

**Where thresholds win.** In fast crashes a calendar rule waits. Vanguard (2024): on 23 Mar 2020 a monthly rule had let the allocation drift 7% and a quarterly rule 10%, while 200/175 never let it pass about 2%. The price is whipsaw: 200/175 fired twice in two weeks in April 2025.

**The fair summary.** A calendar check with a band (Vanguard's "time-and-threshold") is the robust middle. Check annually or semi-annually, trade only if the band is breached, and do not check monthly with a tight band unless you need tight tracking.

## 🧩 Two Hidden Costs of Predictable Rebalancing

- **Front-running.** Harvey, Mazzoleni and Melone ("The Unintended Consequences of Rebalancing", NBER WP 33554, Mar 2025, revised Jan 2026) show that the trades of large 60/40 rebalancers are predictable. Month-end and threshold signals predict next-day equity returns about 16–17 bp lower; the pressure reverses within about two weeks. They estimate a cost of about 8 bp a year, roughly 16 billion USD on US retirement assets. Rebalancing on a random day of the month cut the cost to about 0.5–0.6 bp. A retail investor's own trades do not move markets, but anyone holding balanced, target-date or pension funds bears this drag inside the fund.
- **Timing luck.** Newfound Research (Hoffstein, Sibears, Faber, J. Index Investing 2019): an annually rebalanced 60/40 (1922–2018) returned 8.27% a year when rebalanced at the end of October and 8.49% at the end of May, purely from the choice of month. Most of the gap comes from crash years such as 2008–09. **Tranching** (rebalancing part of the portfolio on several dates) removes it. Concretum (Zarattini and Pagani, Nov 2025) shows that minimum commissions make many small trades expensive: about 2 tranches are optimal for a 25,000 USD account and about 5 for 100,000 USD. For a small portfolio the cheap version is sending each contribution to the underweight asset.

## 🧩 Designing a Band

- **Absolute or relative.** An absolute band is in percentage points (60% ± 5 pp). A relative band is a share of the target (± 20% of a 10% weight is 8–12%). Absolute bands almost never fire on small holdings and fire too often on a large core; relative bands fix that (Daryanani; Kitces 2016).
- **The 5/25 rule** (Larry Swedroe, popularised by Ben Carlson in 2014): rebalance when an asset drifts 5 pp or 25% of its target, whichever is smaller. For a 60% core it is ±5 pp, for a 10% sleeve ±2.5 pp. It is a rule of thumb with no published backtest by its author.
- **How wide.** The CFA curriculum lists the factors: wider bands for higher transaction costs, higher tolerance for drift, higher correlation with the rest of the portfolio, and taxable accounts. Leland (1999) gives the shape: band width grows with the **cube root** of trading costs, so a tenfold cost rise only roughly doubles it, and selling costs such as tax make the band wider on the sell side. AQR found that widening triggers from 10% to 40% cut annual cost from 0.07% to 0.03% with no change in return or Sharpe; width is mainly a cost-versus-drift trade-off.
- **Where to trade back to.** Vanguard (2024): trading back to just inside the band beat trading back to target (200/175 earned 0.28% over daily rebalancing; 200/25, almost back to target, earned 0.16%). Bernstein (Liu, 29 Jul 2026) recommends going about halfway back. Daryanani: back to a tolerance band about half the trigger band. Dichtl et al. found band-edge trading not dominant in their two-asset tests, so the evidence on destination is mixed but leans towards partial moves.
- **How often to check.** Daryanani found little gain from checking more often than every two weeks; Vanguard (2022) found that with an annual check the band width hardly matters. For a self-managed portfolio, a monthly or quarterly glance with a wide band, or an annual review, covers most of the benefit.

## 🧩 A Small, Highly Volatile Sleeve

- **Bitwise** (Hougan and Kolar, "Bitcoin's Role in a Traditional Portfolio", Feb 2026 edition): 2.5% bitcoin on a world 60/40, 2014–2025, before costs and taxes.

| Rebalancing | Cumulative return | Sharpe | Max drawdown |
|---|---|---|---|
| None | 421% | 0.572 | 50.9% |
| Annual | 232% | 0.861 | 24.2% |
| Quarterly | 187% | 0.763 | 23.7% |
| Monthly | 168% | 0.693 | 23.6% |

- **Reading it.** Any rebalancing halved the drawdown; the choice between monthly, quarterly and annual moved drawdown by under 1 pp. Annual beat quarterly on return and Sharpe, yet Bitwise recommends quarterly. Bitwise sells bitcoin funds, used a period in which bitcoin rose more than 100-fold, and says its results benefit from hindsight.
- **Relative bands get too tight on a small volatile sleeve.** My arithmetic: on a 5% sleeve, a ±1.25 pp band (25% relative) fires when the sleeve moves about +27% or −26% against the rest of the portfolio, which bitcoin does several times a year. A single-path blog backtest (low credibility) counted 516 rebalances in ten years for a 5% relative band on a 5% sleeve, against 5 for a ±5 pp absolute band.
- **Practitioner choice.** Betterment uses a 7% drift threshold for its crypto ETF portfolio against 3% for its core portfolios, and rebalances with cash flows first.
- **Bands versus take-profit ladders.** A tight sleeve band and a "let winners run, sell in steps" ladder contradict each other: the band trims early and the ladder waits. I found no empirical study of combining them; a sleeve needs one rule that decides first. See [[Position Sizing and Loss Limits in a Speculative Sleeve]].

## 🧩 Taxes and Cash Flows in Poland

- **Cash flows first.** Vanguard's 2010 test of redirecting dividends and interest to the underweight asset had zero turnover and kept a 60/40 near 61% equities with 11.3% volatility. In early accumulation, contributions are large relative to drift, so sales are rarely needed.
- **Taxable account.** Every sale realises 19% tax on the gain (PIT Act art. 30b). Cost is matched FIFO under art. 24 ust. 10, which the Act applies separately for each securities account, so after a long rise the oldest lots carry the largest gains. Losses carry forward five years (art. 9 ust. 3). Details and limits are in [[Polish Investor Taxes 2026]].
- **Wrappers.** Trades inside IKE, IKZE or OIPE trigger no tax, so the asset class you expect to trim most is best held there. Annual contribution limits cap how much can be sheltered.
- **OKI from 2027** replaces Belka tax with an asset-value tax (0.85% for 2027), with no contribution limit; the 100,000 PLN exemption covers only qualified PLN assets, so a foreign global ETF is taxed from the first zloty. Trades inside OKI trigger no tax, which suits frequent rebalancing. My arithmetic: 0.85% of value equals 19% of a 4.47% return, so OKI beats realising gains every year only when returns exceed about 4.5%; against plain buy-and-hold in a taxable account, OKI wins only for horizons up to about 16 years at the 2027 rate (ETF research, see [[Choosing an ETF]]).
- **The US tax-band research does not transfer directly.** Das, Ding, Newell and Ostrov (J. Investment Strategies, 2017) found that under US rules (losses taxed at a higher rate than gains) taxes alone favour no band, and only the step-up at death justifies a wide one, about 17 pp. Poland taxes gains and losses at one rate and has no step-up, so neither result carries over; I found no after-tax study of rebalancing under Belka tax and FIFO.
- **Crypto is its own basket.** Crypto income is taxed at 19% in a basket separate from securities (art. 30b ust. 1a and 5d), so crypto losses cannot offset ETF gains. Swapping one crypto for another is not a taxable event (art. 17 ust. 1f), so rebalancing inside a crypto sleeve is tax-free, but shrinking the sleeve into fiat is not. Crypto cannot be held in IKE, IKZE or OKI.

## ☘️ What I Take From It

- **Pick a rule that is cheap to follow and stick to it.** The research does not separate reasonable rules; it separates having a rule from drifting and from over-trading.
- **A scheduled check with a band** suits me better than either pure form: it avoids monthly over-trading and still catches large drifts. That is the shape [[My Investment Strategy]] already uses.
- **Cash flows, then wrappers, then the taxable account.** In Poland the tax on a sale is usually far larger than any difference between rules.
- **Trade back partway, not all the way,** when a band is hit; the evidence leans that way and it realises less gain.
- **For the volatile sleeve, use a wide absolute band and decide whether the band or the take-profit plan rules,** because they cannot both be in charge.
- **Avoid the crowd's dates.** If I sell in the taxable account, the last days of a month or quarter are when large funds trade the same way.

## ✍️ Evidence Check

| Claim | Source | Status |
|---|---|---|
| Choice of rule matters little; rebalancing raises Sharpe, not return | Dichtl, Drobetz, Wambach, FMPM 28(3) 2014 | Peer-reviewed, read |
| Annual beats monthly by 27 bp CE | Vanguard "Rational rebalancing", Oct 2022 | Primary PDF, vendor |
| 200/175 costs 5.1 bp vs 22.1 bp monthly | Vanguard "The rebalancing edge", Dec 2024 | Primary PDF, vendor defending its own policy |
| 20% relative bands, biweekly checks: +0.38 pp | Daryanani, JFP Jan 2008 | Primary; in-sample, author's software conflict |
| Momentum +0.15 at 1 month, reversal −0.33 at 3 years | AQR, Dec 2015 | Primary PDF, vendor |
| Predictable rebalancing costs about 8 bp a year | Harvey, Mazzoleni, Melone, NBER WP 33554 | Working paper, conference-vetted, not yet published |
| October vs May rebalancing: 8.27% vs 8.49% a year | Newfound, J. Index Investing 2019 | Primary; author sells tranched strategies |
| Bitcoin sleeve table | Bitwise, Feb 2026 edition | Primary PDF; issuer conflict, hindsight |
| FIFO per securities account, 19%, 5-year loss carry-forward | PIT Act, Dz.U. 2025 poz. 163 | Primary law, read verbatim; a newer consolidated text (Dz.U. 2026 poz. 592) exists |

**What I could not confirm.**

- Swedroe's 5/25 wording in his own book; the rule is traced only through blogs.
- Morningstar's 2020 test of calendar and 5% threshold rules (Arnott): title, URL and figures not verified.
- Whether the Kinlaw, Kritzman and Turkington cost figures (5.4 bp heuristic, 17.0 bp no rebalancing) come from the 2009 study.
- Das et al.'s published numbers: the paper is paywalled, so the figures come from the 2015 conference slides.
- Bernstein's halfway-back claim has no published inputs or numbers.
- The crypto-sleeve turnover counts come from one AI-drafted blog and one price path.
- The PIT Act text read was the January 2025 consolidated version; I did not check later amendments to the articles cited.

## 📖 Further reading/watching

- Jaconetti, Kinniry, Zilbering, "Best practices for portfolio rebalancing", Vanguard, July 2010 — https://indexacapital.com/bundles/unaiadvisor/docs/papers/2010-Vanguard-Best-practices-for-portfolio-rebalancing.pdf
- Zhang et al., "Rational rebalancing", Vanguard, October 2022 — https://corporate.vanguard.com/content/dam/corp/research/pdf/rational_rebalancing_analytical_approach_to_multiasset_portfolio_rebalancing.pdf
- Zhang et al., "The rebalancing edge", Vanguard, December 2024 — https://corporate.vanguard.com/content/dam/corp/research/pdf/the_rebalancing_edge_optimizing_target_date_fund_rebalancing_through_threshold_based_strategies.pdf
- Dichtl, Drobetz, Wambach, "Where is the value added of rebalancing?", FMPM 28(3), 2014 — https://ideas.repec.org/a/kap/fmktpm/v28y2014i3p209-231.html
- Dichtl, Drobetz, Wambach, "Testing rebalancing strategies for stock-bond portfolios across different asset allocations", Applied Economics 48(9), 2016 — https://ideas.repec.org/a/taf/applec/v48y2016i9p772-788.html
- Daryanani, "Opportunistic Rebalancing: A New Paradigm for Wealth Managers", JFP, January 2008 — https://www.financialplanningassociation.org/sites/default/files/2020-05/9%20Opportunistic%20Rebalancing%20A%20New%20Paradigm%20for%20Wealth%20Managers.pdf
- Kitces, "Finding The Optimal Rebalancing Frequency", 4 May 2016 — https://www.kitces.com/blog/best-opportunistic-rebalancing-frequency-time-horizons-vs-tolerance-band-thresholds/
- Ilmanen and Maloney, "Portfolio Rebalancing Part 1: Strategic Asset Allocation", AQR, December 2015 — https://www.aqr.com/Insights/Research/White-Papers/Portfolio-Rebalancing-Part-1-Strategic-Asset-Allocation
- Huss and Maloney, "Portfolio Rebalancing: Common Misconceptions", AQR, February 2017 — https://www.aqr.com/Insights/Research/White-Papers/Portfolio-Rebalancing-Common-Misconceptions
- Rattray, Granger, Harvey, Van Hemert, "Strategic Rebalancing", JPM 2020 — https://people.duke.edu/~charvey/Research/Published_Papers/P145_Strategic_rebalancing.pdf
- Harvey, Mazzoleni, Melone, "The Unintended Consequences of Rebalancing", SSRN 5122748 — https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5122748
- Harvey, "Rebalancing's hidden cost", CFA Institute Enterprising Investor, 10 April 2025 — https://rpc.cfainstitute.org/blogs/enterprising-investor/2025/rebalancings-hidden-cost-how-predictable-trades-cost-pension-funds-billions
- Newfound Research, "Tranching, Trend, and Mean Reversion", 27 April 2020 — https://blog.thinknewfound.com/2020/04/tranching-trend-and-mean-reversion/
- Zarattini and Pagani, "The Tranching Dilemma", Concretum, SSRN 5747964 — https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5747964
- Leland, "Optimal Portfolio Management with Transactions Costs and Capital Gains Taxes", 1999 — https://escholarship.org/uc/item/0fw6k0hm
- Liu, "The Rebalancing Mistake That Can Hurt Taxable Investors", Bernstein, 29 July 2026 — https://www.bernstein.com/our-insights/insights/2026/articles/the-rebalancing-mistake-that-can-hurt-taxable-investors.html
- Das and Ostrov, tax-optimal rebalancing slides (JOIM, April 2015) — https://srdas.github.io/Papers/taxopt_slides2.pdf
- Hougan and Kolar, "Bitcoin's Role in a Traditional Portfolio", Bitwise, February 2026 — https://s3.us-east-1.amazonaws.com/static.bitwiseinvestments.com/Research/Bitcoins-Role-in-a-Traditional-Portfolio-022026.pdf
- Betterment, rebalancing methods — https://www.betterment.com/help/portfolio-rebalancing-methods
- Carlson, "The Larry Swedroe 5/25 Rebalancing Rule", 29 March 2014 — https://awealthofcommonsense.com/2014/03/larry-swedroe-525-rebalancing-rule/
- PIT Act, consolidated text Dz.U. 2025 poz. 163 — https://api.sejm.gov.pl/eli/acts/DU/2025/163/text/O/D20250163.pdf

---
Template: [[templates/knowledge_note_info]]
