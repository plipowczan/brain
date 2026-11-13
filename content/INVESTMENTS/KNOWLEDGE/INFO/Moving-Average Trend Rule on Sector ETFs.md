---
title: "Moving-Average Trend Rule on Sector ETFs"
date: 2026-11-13
enableToc: true
openToc: true
tags: ["knowledge", "info", "investments", "trend-following", "moving-average", "etf", "sectors", "backtest", "taxes", "poland", "research"]
type: knowledge-note
source: "_raw/research-workspaces/moving-average-rule-sector-etfs/report.md"
agent-created: true
summary: "What the evidence says about 150/200-day, 30-week and 10-month moving-average rules on indices and sector ETFs: classic tests, data-snooping critiques, Faber and timing luck, Weinstein, sector studies, whipsaws and filters, volatility regimes, the Pacer Trendpilot live record, the index-to-ETF gap, and costs and taxes for a Polish investor."
---

# Moving-Average Trend Rule on Sector ETFs

## 🗒️ Description

A moving-average trend rule holds an asset while its price is above a long moving average and steps into cash when the price closes below it. The usual lengths are 150 or 200 trading days, Stan Weinstein's 30 weeks (about 150 days) and Meb Faber's 10 months. A common variant adds a slope condition: buy only above a *rising* average.

My own satellite rule is of this type. I took it from a webinar whose statistics were the presenter's own, so this note checks the idea against independent evidence: backtests, out-of-sample critiques, a live fund that has followed such a rule since 2015, and what costs and Polish taxes do to the result. It is knowledge and method, not advice. How I apply the rule is in [[My Investment Strategy]]; it is not restated here.

**TL;DR**

- **It is a risk-control tool, not a return booster.** On US sectors from 1928 to 2015, a 10-month rule cut drawdowns in 10 of 10 sectors but beat buy-and-hold on return in only 4 of 10 (−0.4% a year on average, before costs).
- **The edge sits in a few long bear markets** (1929–32, 1973–74, 2000–02, 2008, 2022). Outside them the rule pays for whipsaws. About 3 in 4 exits are false signals.
- **V-shaped crashes are the worst case.** A rule with confirmation days sells near the low and buys back higher: 2020 and April 2025 both cost the live Pacer Trendpilot fund heavily.
- **After 1987 no daily moving-average rule on the US index shows a statistically reliable edge**, once you correct for the thousands of rules people have tried.
- **The live record is poor.** Pacer's S&P 500 Trendpilot fund returned 8.98% a year from June 2015 to September 2026, against 14.00% for the S&P 500, with a smaller drawdown (−26.6% vs −33.7%).
- **Tradable ETFs earn less than index backtests**, about 1.2–1.5 pp a year less in comparable studies, because of opening gaps, spreads and short histories.
- **Filters (bands, confirmation days, month-end checks, slope) cut the number of trades but not the total whipsaw bill.** Use them to control costs and tax events, not to "fix" the rule.
- **For a Polish investor the FX conversion can eat the whole edge.** About 1% per round trip through a PLN-only account vs a break-even of roughly 0.7%. In a taxable account each exit also pays 19% Belka tax now instead of later. IKE and IKZE remove the tax but not the FX and spread.

## 🔗 Links

- [[My Investment Strategy]] — the rule as I use it (Rule 8), without my thresholds here
- [[Choosing an ETF]] — line choice, FX costs, spreads, domicile and wrappers for the funds the rule trades
- [[Polish Investor Taxes 2026]] — Belka tax, loss carry-forward, IKE/IKZE limits, OKI from 2027
- [[Position Sizing and Loss Limits in a Speculative Sleeve]] — the cap on the sleeve the rule runs in
- [[Rebalancing — Threshold vs Calendar]] — the opposite reflex: rebalancing buys losers, trend rules sell them
- [[Sentiment Indicators as a Panic-Buy Signal]] — the contrarian signals that fire at the same lows a trend rule sells into
- [[Investment Strategies]] · [[Asset Allocation and Diversification]] · [[Bear Markets — 100 Years of History]] · [[Investing Psychology]]

## 🧩 The Rule and Its Variants

| Variant | Signal | Check | Typical source |
|---|---|---|---|
| Daily 150/200-day | close vs simple MA of 150 or 200 closes | every day | Brock, Lakonishok, LeBaron (1992); Siegel |
| 30-week (Weinstein) | weekly close vs a rising 30-week MA ("Stage 2") | weekly | Weinstein (1988) |
| 10-month (Faber) | month-end close vs 10-month MA | month-end | Faber (2007, updated 2013) |
| Filtered | add a % band, N confirmation days, an MA-slope condition, or a macro filter | varies | Clare et al. (2013); Philosophical Economics (2016) |

Three design choices matter more than the length: **how often you check** (daily, weekly, month-end), **when you trade** (same close or next day), and **what you count as a signal** (a raw cross or a confirmed episode).

## 🧩 The Classic Evidence on the Index

- **Brock, Lakonishok and LeBaron (1992):** on the DJIA from 1897 to 1986, returns after buy signals beat returns after sell signals for 50-, 150- and 200-day rules. No transaction costs, no dividends.
- **Sullivan, Timmermann and White (1999):** the rules survive in sample. In 1962–1986 the best BLL rule, a 150-day MA without a band, earned 7.87% a year (Reality Check p = 0.004). Out of sample in 1987–1996, the best was a 200-day MA with a 1% band: 8.63% a year, but no longer significant (p = 0.154).
- **Execution timing:** STW re-ran the rules with a one-day delay, trading the day after the signal. The best rule's return fell from 17.2% to 7.8% a year. Part of the old edge came from stale index prices that no one could trade at.
- **Costs:** Bessembinder and Chan (1998) put the break-even one-way cost of the BLL rules at 0.39% (0.22% since 1975), or about 0.8% and 0.4% per round trip, which is low against historical trading costs.
- **Siegel (DJIA 1886–2012):** the 200-day rule earned 9.73% a year vs 9.39% for buy-and-hold before costs, and 8.11% after costs, 1.28 pp a year *below* buy-and-hold. Most of the benefit came from 1929–32 and October 1987.

## 🧩 Data-Snooping and Out-of-Sample Decay

The 150- and 200-day rules are famous because they worked in hindsight. That is the problem.

- **The rule universe:** STW tested 7,846 rules. A 5-day MA picked as the best at the end of 1986 earned 2.8% a year in 1987–1996.
- **Bajgrowicz and Scaillet (2012)** used a false-discovery-rate test and realistic costs. They found that the outperformance of technical rules on the DJIA disappears; after 1962 there was none left to remove.
- **Zakamulin (2014, 2015):** on the S&P Composite, moving-average timing beat buy-and-hold mainly because of a few severe bears (1930–31, 1973–74, 2001–02, 2007–08). In about **80% of the out-of-market spells**, staying invested would have done better.
- **Look-ahead bias:** Glabadanidis (2015) claimed huge gains and break-even costs of 5–7% per trade. Zakamulin (2018) found a look-ahead bias, and the corrected Sharpe ratio fell from 1.32 to 0.52, against 0.37 for buy-and-hold.
- **What survives:** a modest improvement in risk-adjusted return, through avoiding long bear markets, for long/cash rules checked monthly or weekly. Most critiques target short-term long/short rules, which is a stricter test than a long-or-cash trend filter.

## 🧩 Faber's 10-Month Rule and Timing Luck

**Faber (2013 update), S&P 500 1901–2012, before costs:**

| | CAGR | Max drawdown | Sharpe |
|---|---:|---:|---:|
| 10-month timing | 10.18% | −50.29% | 0.55 |
| Buy-and-hold | 9.32% | −83.46% | 0.32 |

- **Where the edge comes from:** the arithmetic mean returns are almost the same (11.22% vs 11.26%). The higher CAGR comes from lower volatility, not from picking better days.
- **By decade:** timing beat buy-and-hold in only about half of the decades. It won in the 2000s (+8.7 pp) and lost in the 1990s (−5.1 pp).
- **GTAA:** Faber's five-asset version had a drawdown of only about −9.5%, but that came from diversifying across weakly correlated asset classes. US sector ETFs fall together in a crash, so a sector sleeve should look more like the single-index case.
- **Timing luck:** the month-end trading day is itself a parameter.
  - Hoffstein (2013) tested SPY with 21 possible rebalance days. Total return ranged from 462.89% to 717.14% depending on the day, and maximum drawdown from about 19% to 30%.
  - Gupta (2017) found the same range for a monthly-checked 200-day rule: 8.63–10.68% CAGR across 21 days (1981–2017).
  - The fix is tranching: split the sleeve and check each part on a different day.

## 🧩 Weinstein's 30-Week Stage Analysis

- **The method:** Weinstein sorts markets into four stages: basing (1), advancing above a rising 30-week MA (2), topping (3) and declining (4). Own Stage 2, avoid Stage 4. His process is top-down, ranking industry groups before stocks, so it maps directly onto sector ETFs.
- **Independent evidence is thin.** Roskill (SSRN, 2026) found that only Stage 2 earns a positive market-excess return: +2.3% a year (t = 2.7). The stage labels and the relative-strength overlay added nothing measurable, so the value is the same as a plain "price above a rising 30-week MA" filter. I read only the abstract.
- **Per-trade tests:** Bulkowski's systematic test on about 452 stocks found an average gain of 6% per trade in sample (2000–2010) and 5% out of sample (2011–2023). It had no costs and no buy-and-hold benchmark.
- **The rule's own weaknesses:**
  - A raw 30-week cross triggers about 4.5 times a year on the S&P 500, so a slope condition is the natural whipsaw control.
  - A flat 30-week MA cannot tell a base from a top.
  - Weinstein's volume confirmation was calibrated on 1980s stocks and probably does not transfer to ETFs, whose volume reflects flows, not conviction.

## 🧩 What Sector Studies Show

**Philosophical Economics (2016): 10-month SMA on each of 10 US sectors, 1928–2015.** This is the longest direct test of a single moving-average rule per sector:

- **Return:** the rule beat buy-and-hold in only **4 of 10** sectors, −0.4% a year on average.
- **Drawdown:** smaller in **10 of 10** sectors, about 28 points shallower on average. The Sortino ratio was better in 8 of 10.
- **Exposure-matched test:** against a stock/T-bill blend with the same time in the market, the rule won 10 of 10, by +1.1% a year. So the rule does add something; it just costs return against staying fully invested.
- **Activity:** about 70% of the time in the market and about 1.2–1.8 switches a year. Roughly 3 in 4 exits were whipsaws costing about 5–8% each.
- **30 industries:** the rule won 13 of 30.

| Sector (examples) | SMA CAGR | Buy-and-hold CAGR |
|---|---:|---:|
| Technology | 9.1% | 10.0% |
| Energy | 10.5% | 10.8% |
| Health | 9.7% | 11.6% |
| Utilities | 9.6% | 8.7% |
| Telecom | 10.3% | 9.4% |

**Zarattini and Antonacci (2024), industry trend following:**

- **Headline:** 18.2% a year vs 9.7% for the market, July 1926 to March 2024, before costs. Up to 200% leverage, volatility sizing and same-close execution produce most of the gap: equal-weight industries alone earned 11.1%, and adding timing at 100% maximum exposure gave 12.5%.
- **Tradable version (2005–2024):** the rule earned 9.1% on French industry portfolios and **7.7% on 31 sector SPDR ETFs** after commissions, against **10.0% for SPY**.
- **Out of sample:** a walk-forward check (Massaad et al., 2024) fell short of market benchmarks.

**Related, but different rules.** Faber (2010) found that rotating into the 1–3 strongest sectors by relative strength beat the S&P 500 in 1928–2009 (13.75% for the top three vs 9.39%). That is momentum rotation, not a per-sector moving-average rule. Molchanov and Stangl (2023) tested business-cycle sector rotation: +0.09% a month after costs, and only 17 of 2,046 two-stage rotations beat buy-and-hold after costs.

## 🧩 Whipsaws and Filters

**Anatomy of a whipsaw (Philosophical Economics, 1928–2015):**

- **Cost:** the average whipsaw cost about 6.0%. About 0.6% was bid–ask spread and about 5.4% was the "gap loss" between the exit price and the higher re-entry price.
- **Frequency and win rate:** whipsaws outnumber captured downturns 3–4 to 1. The rule's exit win rate was about 24%, and about 39% with a macro growth filter.
- **Break-even:** with 3–4 whipsaws of about 6% per captured downturn, a captured downturn must avoid roughly 18–24% of decline to break even. In practice only recession bear markets deliver that. Inside recessions the rule's cumulative return was 3.5 times buy-and-hold; outside them, 0.4 times.

**Check frequency matters (Clare et al. 2013, S&P 500 1988–2011, 0.2% cost per trade):**

| Variant | Return a year | Sharpe |
|---|---:|---:|
| Buy-and-hold | 9.49% | 0.31 |
| Daily 200-day check | 7.68% | 0.34 |
| Month-end 200-day check | 10.66% | 0.58 |

**Bands.** Arthur Hill (StockCharts) counted 195 crosses of the S&P 500's 200-day average since 2000, against 93 trades. A 3% band cut the count to 13 trades and raised the share of profitable long trades from 25% to 77%. This is a vendor blog on one instrument, without costs.

**A reconstruction for this research** (not a published source). The research agent ran filter variants on daily S&P 500 closes from August 2017 to November 2026, price only, with no dividends, cash yield or costs:

- The raw cross switched about 6.1 times a year. Filters (1% and 3% bands, 5-day confirmation, month-end checks, slope) cut that to 1.3–2.4.
- The total whipsaw bill did not shrink. The sum of re-entry premiums stayed at about 32–53% in every variant.
- The only downturn any variant captured was 2022.
- How you count changes the answer: 96% of raw crosses were false, but 89% of confirmed episodes.

**Rule from the evidence:** filters control trade count, costs and tax events. They do not turn whipsaws into profits. A band should scale with the sector's volatility: a 3% band on the S&P 500 corresponds to roughly 4–6% on a sector 1.5–2 times as volatile (the research agent's inference).

## 🧩 Volatility Regimes

- **Gayed and Bilello (2016), S&P 500 1928–2015, before costs:**
  - Above its 200-day average the index returned 14.1% a year with about 14.7% volatility; below it, −2.3% with about 26.5%.
  - 200-day timing returned 10.9% vs 9.1% for buy-and-hold, with a Sharpe ratio of 0.60 vs 0.30 and a maximum drawdown of −49.5% vs −86.2%.
  - It traded about 5 times a year and beat buy-and-hold in only 49% of rolling 3-year periods.
  - The sample starts just before 1929, which flatters any trend rule.
- **Garza-Gomez and Metghalchi (2023), daily rule to June 2022:**
  - QQQ 10.4% vs 5.8% for buy-and-hold, and SPY 7.5% vs 6.3%.
  - By decade, QQQ earned 6.1% vs −6.4% in the 2000s but 12.8% vs 17.9% in the 2010s.
  - Across 48 combinations the rule beat buy-and-hold on Sharpe in 24 (50%).
- **Han, Yang and Zhou (2013):** moving-average timing profits rise with the volatility of the portfolio it is applied to.
- **What it means for sectors:**
  - The expected benefit rises with how often a sector goes through violent bear phases. Technology, semiconductors and energy look more like QQQ in the 2000s; staples, utilities and health care more like SPY in the 2010s.
  - The same volatility produces more whipsaws. Single stocks (about 30% volatility) do badly with trend rules, and sectors sit between them and the index. The net effect on a high-volatility sector is not settled.

## 🧩 The Live Record: Pacer Trendpilot

Pacer's Trendpilot ETFs are the only long, public, rules-only record of a daily 200-day rule.

- **Rule (497K summary prospectus, 31 Aug 2026):** they move between 100% equity, 50/50 and 100% T-bills according to the index's total return against its 200-day average, with a five-day confirmation. Moves take effect at the close one business day after the trigger.
- **Rule change:** an override was "modified" on 16 Apr 2025, right after a bad episode. What changed could not be found.
- **Fees:** PTLC 0.60%, PTNQ 0.65%.

**Performance since inception (June 2015) to 30 Sep 2026, fund fact sheets:**

| Fund | Annual return | Benchmark |
|---|---:|---:|
| PTLC (S&P 500) | 8.98% | 14.00% |
| PTMC (mid caps) | 4.93% | 9.50% |
| PTNQ (Nasdaq-100) | 12.58% | 19.53% |

Fees explain only a small part of a 5–7 pp a year gap. PTLC's maximum drawdown was −26.6%, against −33.7% for SPY.

**Calendar years, PTLC vs SPY:**

| Year | PTLC | SPY |
|---|---:|---:|
| 2018 | +1.49% | −4.57% |
| 2019 | +17.58% | +31.22% |
| 2020 | −1.15% | +18.33% |
| 2022 | −8.62% | −18.18% |
| 2025 | +5.10% | +17.72% |

**What the record shows:**

- **One grinding bear paid for everything.** 2022 was the only clear win, about 9.6 pp ahead of SPY.
- **Whipsaws dominate.** Of 9 exposure cuts from 2015 to April 2024 (from the funds' annual reports), 8 were whipsaws.
- **2020:** the fund sold at an average of about 2,596 on the S&P 500 and bought back on 2 June at 3,080.82, about 18.7% higher.
- **2025:** on 8 April it moved to 100% T-bills at 4,982.77, the lowest close of the sell-off. From 9 April to 13 May the fund returned +0.4% vs +18.3% for the S&P 500 (Morningstar: "this fund followed the rules; that was the problem").
- **Volatility multiplies switches.** In fiscal 2024 the mid-cap fund changed exposure 8 times, against 2 for the S&P 500 fund.
- **The live period contains no 2000–02- or 2008-type bear**, which is where the backtests earn their edge. That is a limitation of the record, not proof the rule fails. But it shows what a decade of mostly V-shaped corrections costs.

## 🧩 From Index to Tradable ETF

- **Opening gaps:** Huang and Huang (2020) found moving-average rules are less profitable on ETFs than on their indices, mainly because ETF prices gap more often and further overnight. For long averages (150–200 days), executing intraday brings no benefit.
- **The size of the gap:** studies that compare both find about **1.2–1.5 pp a year less** on tradable funds. In Zarattini and Antonacci, for example, the rule earned 9.1% on industry portfolios and 7.7% on ETFs.
- **Out-of-sample ETF tests:** CXO Advisory (2023) tested six SMA rules across 21 stock ETFs with a 0.1% switching cost. Buy-and-hold had the best net CAGR for 15 of the 21.
- **Short histories:**
  - The Select Sector SPDRs start in December 1998, so every ETF test is post-1987 and covers only four bears (2000–02, 2007–09, 2020, 2022).
  - Sector definitions change underneath the funds. The 2018 GICS change created Communication Services, which moved large internet stocks out of technology and consumer discretionary. Payment networks moved from IT to Financials in 2023.
- **What an EU investor can buy:**
  - **No US sector ETFs.** Under PRIIPs, EU retail clients generally cannot buy US-domiciled sector ETFs, because those funds publish no KID.
  - **UCITS sector ETFs instead.** These trade on Xetra or the LSE, for example iShares S&P 500 Information Technology Sector (TER 0.15%). Their histories are shorter, some track capped indices, and their spreads are wider than the top Xetra funds.
  - **No PLN sector ETFs on GPW.** The research found none (mid-2026), so sector exposure from PLN always involves currency conversion or holding foreign cash.
- **My inference:** a signal read on a US ETF or index and executed on a UCITS twin in another time zone adds its own gap. The cleaner test is the signal on the fund you actually trade, at a fixed execution point.

## 🧩 Costs and Taxes for a Polish Investor

**Break-even.** Gayed and Bilello's gross edge of about 1.8 pp a year comes with about 5 switches, or 2.5 round trips, a year. So friction above about **0.7% per round trip** consumes it (the research's derivation).

| Route (November 2026) | Friction per round trip | Source |
|---|---|---|
| PLN-only account (e.g. XTB, or XTB IKE) into a foreign ETF | about 1.0–1.3%, mostly 0.5% FX each way | XTB fee page; spreads estimated |
| mBank eMakler on Xetra | 0.29% commission (min. 14 PLN) each way + 0.1% FX margin | mBank tariff |
| Holding EUR or USD cash between signals, or a thin-FX broker | about 0.1–0.4% | research estimate |

Spreads on the 20 most liquid Xetra equity ETFs averaged 3.9 bp per round trip in 2025 (Deutsche Börse). Sector UCITS ETFs are smaller and wider; the research estimates 5–30 bp, and no sector-level statistic was found.

**Belka tax in a taxable account:**

- **Rate:** 19% on each realised gain (art. 30b PIT), with no holding-period split. A three-week whipsaw and a three-year trend pay the same rate.
- **What it really costs:** the lost deferral. At 8% a year over 20 years, deferring the whole gain gives 7.13% a year after tax. Realising gains every year gives 6.48% (0.65 pp less), every 3 years 6.57%, every 5 years 6.66% (the research's arithmetic). Newfound (2019) measured about 1 pp a year of tax drag for a US trend strategy.
- **Losses:** whipsaw losses go into the same PIT-38 basket and carry forward 5 years, using up to 50% of a loss a year or up to PLN 5 million at once.
- **Currency:** each leg is converted at the NBP rate of the business day before (art. 11a), so a trade that is flat in EUR can create a taxable PLN gain or loss.
- **Not checked:** I found no wash-sale rule in the PIT Act, but no tax ruling on selling at a loss and buying straight back was checked. Whether a broker's FX margin counts as a deductible cost is also not settled.
- **Paperwork:** a foreign broker sends no PIT-8C, so every switch is a leg you reconstruct yourself.

**Wrappers:**

- **IKE and IKZE:** switches trigger no tax, so a trend rule can trade freely. The FX and spread costs stay. 2026 limits: IKE 28,260 PLN; IKZE 11,304 PLN, or 16,956 PLN for the self-employed.
- **OKI (from 1 Jan 2027):** switches are untaxed, but foreign sector UCITS ETFs do not qualify for the exemption, so they pay the asset tax from the first złoty.
  - The rate is 0.85% of average value in 2027. From 2028 it is 19% of the NBP reference rate on 31 October of the prior year (minimum 0.1%, rounded down), about 0.71% at today's 3.75%.
  - A sleeve invested 70% of the time, with exempt PLN cash between signals, pays about 0.6% a year in 2027. But the tax is also due in loss years, OKI losses are not PIT losses, and returning to PLN cash at each exit costs FX.

## 🧩 If You Use the Rule Anyway — Method

1. **Write down what it is for.** It reduces drawdowns in a long bear. It does not add return. Judge it on that.
2. **Pick the check frequency first.** Month-end or weekly checks with a slope condition beat daily crosses on costs and on the evidence (Clare et al.).
3. **Define a signal as a confirmed episode**, not a raw cross. Scale any band to the sector's volatility.
4. **Backtest on the fund you will trade**, total return, at a fixed execution point (next close or next open), including FX and spread. Count whipsaws and the re-entry premium of each.
5. **Expect 3–4 false signals per real one.** Decide in advance that you will take every re-entry signal, even after a sale near the low.
6. **Put it where switching is cheapest:** inside IKE or IKZE, and through a route that avoids paying FX twice per round trip.
7. **Tranche the check date** if you can, to cut timing luck.
8. **Do not change the rule after a bad episode.** Pacer did, in April 2025. That is how a rule becomes a fit to the last crash.

## ☘️ What I Take From It

- I wrote my rule down as if it improved returns. The evidence says it buys smaller drawdowns at the cost of some return, and only if a long bear market comes. I can accept that trade, but I should stop expecting more.
- The rule and my panic-buy plan pull in opposite directions at the same moment: the trend rule sells into a crash that the contrarian plan wants to buy. That is fine only because they run in different sleeves. I need to keep it that way.
- The biggest controllable cost is not the tax inside IKE/IKZE. It is paying the PLN conversion twice on every round trip. That alone can be larger than the historical edge.
- A slope condition and a band will make the rule calmer, not better. I should judge any filter by trades and costs saved, not by a higher backtest.
- The Pacer record is the most useful thing here. Eleven years of a public, mechanical 200-day rule show what the backtests hide: V-shaped crashes punish confirmation rules, and one grinding bear has to pay for a decade of whipsaws.

## ✍️ Evidence Check

| Claim | Evidence | Strength |
|---|---|---|
| MA rules cut drawdowns on sectors | Philosophical Economics 1928–2015, 10 of 10 sectors | moderate (one pseudonymous source, index data) |
| MA rules do not beat buy-and-hold on return for most sectors | same, 4 of 10; Zarattini-Antonacci ETF version 7.7% vs 10.0% | moderate |
| No reliable edge after 1987 once snooping is corrected | STW 1999; Bajgrowicz-Scaillet 2012; Zakamulin | strong (peer reviewed, several methods) |
| Edge concentrated in a few bear markets | Siegel, Faber, Zakamulin, Gayed-Bilello, Pacer 2022 | strong (consistent across sources) |
| Month-end checks beat daily on the S&P 500 | Clare et al. 2013, one index, 1988–2011 | moderate |
| Filters cut trades, not the whipsaw bill | the research agent's reconstruction on 2017–2026 S&P 500 data | weak (own calculation, price only) |
| Live 200-day rule lagged the S&P 500 by about 5 pp a year | Pacer fact sheets and annual reports, 2015–2026 | strong for this period (one fund family, one rule) |
| ETFs earn about 1.2–1.5 pp a year less than index backtests | Zarattini-Antonacci; Philosophical Economics country ETFs; Huang & Huang | moderate |
| FX can consume the edge for a PLN investor | broker tariffs plus break-even arithmetic | arithmetic on primary fee data |

**What I could not confirm:**

- the full text of Huang and Huang (2020): the ETF list, period and size of the gap
- Roskill (2026) beyond its abstract
- what Pacer changed in its override on 16 Apr 2025
- the exact Pacer switch dates in 2025: the 50/50 move around 17 March and the return to equity around 19 May were reconstructed from prices
- the author and exact date of the Morningstar article (the page returned 403)
- sector-level spread statistics for UCITS sector ETFs
- current mBank IKE/IKZE ETF commission promotions
- whether a broker's FX margin is a deductible cost, and the tax treatment of buying back right after a loss sale
- OKI implementing regulations and forms, still in draft in autumn 2026

The Philosophical Economics trade tables are images, so drawdown and CAGR figures for the growth-filtered variant could not be read.

## 📖 Further Reading

- Brock, Lakonishok, LeBaron (1992), "Simple Technical Trading Rules and the Stochastic Properties of Stock Returns", *Journal of Finance* 47(5) — https://econpapers.repec.org/RePEc:bla:jfinan:v:47:y:1992:i:5:p:1731-64
- Sullivan, Timmermann, White (1999), "Data-Snooping, Technical Trading Rule Performance, and the Bootstrap", *Journal of Finance* 54(5) — https://bashtage.github.io/kevinsheppard.com/files/teaching/mfe/advanced-econometrics/Sullivan_Timmermann_White.pdf
- Bajgrowicz, Scaillet (2012), "Technical trading revisited: false discoveries, persistence tests, and transaction costs", *Journal of Financial Economics* 106(3) — https://bashtage.github.io/kevinsheppard.com/files/teaching/mfe/advanced-econometrics/Bajgrowicz_Scaillet.pdf
- Bessembinder, Chan (1998), "Market Efficiency and the Returns to Technical Analysis", *Financial Management* 27(2) — https://scholars.cityu.edu.hk/en/publications/market-efficiency-and-the-returns-to-technical-analysis/
- Zakamulin (2014), "The real-life performance of market timing with moving average and time-series momentum rules", *Journal of Asset Management* — https://ideas.repec.org/a/pal/assmgt/v15y2014i4d10.1057_jam.2014.25.html · Zakamulin (2015), SSRN 2677212 — https://papers.ssrn.com/abstract=2677212
- Faber (2013), "A Quantitative Approach to Tactical Asset Allocation" — https://mebfaber.com/wp-content/uploads/2016/05/SSRN-id962461.pdf · Faber (2010), "Relative Strength Strategies for Investing" — https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1585517
- Hoffstein, "The Luck of the Rebalance Timing" (2013) — https://blog.thinknewfound.com/2013/08/the-luck-of-the-rebalance-timing/ · "Quantifying Timing Luck" (2018) — https://blog.thinknewfound.com/2018/01/quantifying-timing-luck/
- Philosophical Economics, "Trend Following in Financial Markets: A Comprehensive Backtest" (2016) — https://www.philosophicaleconomics.com/?p=7296 · "Growth and Trend" (2016) — https://www.philosophicaleconomics.com/2016/01/gtt/
- Clare, Seaton, Smith, Thomas (2013), "Breaking into the blackbox: trend following, stop losses and the frequency of trading", *Journal of Asset Management* 14(3) — https://openaccess.city.ac.uk/id/eprint/17842/
- Zarattini, Antonacci (2024), "A Century of Profitable Industry Trends" — https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4857230 · Massaad et al. (2024) — https://arxiv.org/abs/2412.14361
- Molchanov, Stangl (2023), "The myth of business cycle sector rotation" — https://mro.massey.ac.nz/server/api/core/bitstreams/30b85d2d-90a8-4a38-bbac-acf85540dfa0/content
- Gayed, Bilello (2016), "Leverage for the Long Run" — https://cmtassociation.org/wp-content/uploads/2025/08/2016-gayed-bilello.pdf
- Han, Yang, Zhou (2013), "A New Anomaly: The Cross-Sectional Profitability of Technical Analysis", *JFQA* 48(5)
- Huang, Huang (2020), "Testing moving average trading strategies on ETFs", *Journal of Empirical Finance* 57 — https://ideas.repec.org/a/eee/empfin/v57y2020icp16-32.html
- CXO Advisory, "SMA Signal Effectiveness Across Stock ETFs" (2023) — https://www.cxoadvisory.com/technical-trading/sma-signal-effectiveness-across-etfs/
- Roskill (2026), "Does Weinstein Stage Analysis Beat a Moving Average?" (SSRN) — https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7429238 · Bulkowski, "Trading Weinstein" — https://thepatternsite.com/TradingWeinstein.html
- Pacer Trendpilot: summary prospectus (497K, 31 Aug 2026) — https://www.sec.gov/Archives/edgar/data/1616668/000089418926024248/summary-pacertrendpilotusl.htm · tracker — https://www.paceretfs.com/media/trendpilot_tracker.pdf · PTLC fact sheet — https://www.paceretfs.com/media/ptlc.pdf
- Morningstar (May 2025), "This Fund Followed the Rules. That Was the Problem" — https://www.morningstar.com/funds/this-fund-followed-rules-that-was-problem
- Newfound Research, "Taxes and Trend Equity" (2019) — https://blog.thinknewfound.com/2019/04/taxes-and-trend-equity/
- Siegel interview, AAII Journal (2014) — https://www.aaii.com/files/journal/pdf/real-returns-favor-holding-stocks.pdf
- Arthur Hill, "Quantifying the Battle for the 200-day" (2022) — https://articles.stockcharts.com/article/articles-arthurhill-2022-08-quantifying-the-battle-for-the-586

---
Template: [[templates/knowledge_note_info]]
