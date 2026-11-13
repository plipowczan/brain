---
title: "Sentiment Indicators as a Panic-Buy Signal"
date: 2026-11-13
enableToc: true
openToc: true
tags: ["knowledge", "info", "investments", "sentiment", "vix", "bear-market", "market-breadth", "crypto", "psychology", "research"]
type: knowledge-note
source: "_raw/research-workspaces/sentiment-indicators-panic-buy/ (deep research, 10 items, 2026-11-13)"
agent-created: true
summary: "Whether fear gauges (VIX, put/call, AAII, CNN and crypto Fear & Greed, credit and stress indices, breadth, COT and margin, surveys) work as buy-the-panic signals, what the academic and backtest evidence shows, how often they fire too early, and which data sources are free and reliable as of Nov 2026."
---

# Sentiment Indicators as a Panic-Buy Signal

## 🗒️ Description

"Be greedy when others are fearful" needs a way to measure fear. This note checks the common gauges as **buy-the-panic signals**: what each measures, what the evidence says, how early it fires in a real bear market, and whether its data is free and reliable as of **13 Nov 2026**.

It is knowledge and method, not a trading signal. My own re-entry rule, without amounts, is in [[My Investment Strategy]]. Many figures below come from backtests my research run computed from free official data; they are marked **own backtest**, use price returns without dividends, cover few episodes and are not peer-reviewed.

**TL;DR**

- **Sentiment predicts weak returns after euphoria better than strong returns after fear.** In the best-known academic index, predictability came from high-sentiment periods; when sentiment was low, it was close to zero.
- **The out-of-sample record is weak.** Goyal, Welch and Zafirov (2024) found that the leading sentiment predictor turned negative out of sample once the data ran past 2010.
- **Every gauge fired too early in credit-driven bears** (2000–02, 2008, 2022). A first VIX close above 30 was followed by 12-month returns no better than an average day; in 2008 the first close above 50 came 36% above the low.
- **Waiting for fear to fade worked better than buying the spike, at a price.** Buying the first VIX close below 30 after a close above 50 was positive in all three cases, but entered 6–34% above the low.
- **Most gauges measure the same panic.** VIX, put/call, the CNN index and credit spreads peak together; count them as one vote, not four.
- **Use gauges as confirmation inside a staged plan,** with credit conditions deciding the pace: an equity-only panic allows faster buying than a systemic one.
- **Free data got worse in 2026:** FRED's high-yield spread now shows only three years and may not be republished, NAAIM went behind a subscription, Cboe's free put/call files stop in 2019, and CNN has no official history.

## 🔗 Links

- [[My Investment Strategy]] — my re-entry rule after a crash
- [[Mechanical Crash Thursday — Cymcyk on Buying Panic]] · [[Midterms 2026 Market Setup (Felix Prehn)]] — two recent panic reads
- [[Bear Markets — 100 Years of History]] — how long bears last and how deep they go
- [[Lump Sum vs Dollar-Cost Averaging]] — staging an entry
- [[Moving-Average Trend Rule on Sector ETFs]] — the price-based alternative
- [[Investing Psychology]] · [[Cognitive Biases in Investing]]
- [[My Crypto Strategy]] · [[Crypto Market State 2026]] · [[Bitcoin Cyclicality]]

## 🧩 What the Academic Evidence Says

- **Individual investors are a contrary indicator; strategists less so.** Fisher and Statman (FAJ 2000): AAII sentiment and strategist sentiment had a negative, significant relation with future S&P 500 returns; newsletter writers' sentiment did not. Individual investors turned bullish after high returns.
- **Sentiment follows prices.** Brown and Cliff (2004) found survey sentiment largely driven by past returns, with little short-horizon predictive power; their 2005 paper found high sentiment predicted lower returns over multi-year horizons.
- **The euphoria side carries the signal.** Baker and Wurgler (2007): when their index was more than one standard deviation above average, next-month returns averaged −0.34% (value-weighted); more than one below, +1.18%. The authors call the significance modest. Huang, Jiang, Tu and Zhou (RFS 2015) built a sharper index: R² of 1.70% in sample and 1.23% out of sample, but **2.74% when sentiment was high and about zero when it was low**.
- **Out of sample it fades.** Goyal, Welch and Zafirov (RFS 2024) extended the Huang et al. predictor: in-sample R² 1.04%, out-of-sample −1.24%.
- **Survey expectations extrapolate.** Greenwood and Shleifer (RFS 2014): six surveys (Gallup, Graham-Harvey CFOs, AAII, Investors Intelligence, Shiller, Michigan) correlate with each other at 39–77%, follow past returns, and negatively forecast returns, more strongly at 36 months.
- **Short-horizon fear does mean-revert.** Simon and Wiggins (2001): VIX, the put/call ratio and TRIN were contrarian predictors of 10–30-day S&P 500 futures returns in 1989–1999, including an out-of-sample half. Bollerslev, Tauchen and Zhou (RFS 2009): a high variance risk premium (implied minus realised variance) predicted higher returns, peaking at a quarter (adjusted R² 6.8%) in 1990–2007. Da, Engelberg and Gao (RFS 2015): a Google-search fear index predicted two-day reversals in 2004–2011.

## 🧩 The Gauges

| Gauge | Free data (13 Nov 2026) | History | Best evidence | Main weakness |
|---|---|---|---|---|
| VIX and term structure | Yes, Cboe CSVs and FRED; Cboe licence terms apply | 1990 | Peer-reviewed short-horizon; own backtests | Fires early in credit bears |
| Put/call ratios | Only to 4 Oct 2019; later data paid | 1995 (total), 2003 (equity) | Weak; own backtest worse than base | Distorted by carry trades (late 2022) |
| AAII survey | Last ~22 weeks free; Excel history still downloadable | July 1987 | Peer-reviewed in-sample, decaying after about 2001 | Members-only vote, noisy weekly |
| CNN Fear & Greed | Current value only; no official history | 2012 (reconstructions from 2011) | One short paper, effect weakening | Duplicates VIX, put/call and credit |
| Credit and stress indices | STLFSI4, OFR FSI, NFCI, ECB CISS free; HY OAS 3 years only | 1971–2000 by index | Peer-reviewed in-sample, fails out of sample | Silent in equity-only panics |
| Breadth washouts and thrusts | Snapshots free; long clean history paid | 1945 (NYSE) | Vendor statistics only | Tiny samples, universe-dependent |
| COT and margin debt | Free, official, full history | 1986 (COT), 1997 (FINRA) | Peer-reviewed, mostly the top-warning direction | Slow, missed 2008 and April 2025 |
| Other surveys (Yale, NAAIM, II, sentix) | Mixed; NAAIM and II paid | 1963 (II), 1989 (Yale) | Greenwood-Shleifer for the family | Lags, paywalls, noise |
| Crypto Fear & Greed | Yes, free API with attribution | Feb 2018 | Own backtest only | Restates recent price action |

## 🧩 VIX

Own backtest, S&P 500 price index, 1990–2026. The unconditional base: 12-month return averaged +10.2% (81% positive).

| Rule | Episodes | 12-month mean | % positive | Worst 12-month | Worst further fall |
|---|---|---|---|---|---|
| First close above 30 | 24 | +3.0% | 54% | −37.5% | −43.3% (from 15 Sep 2008) |
| First close above 40 | 11 | +22.5% | 82% | −15.9% | −38.9% (from 29 Sep 2008) |
| First close above 50 | 3 | +25.9% | 2 of 3 | −0.2% | −36.0% (from 6 Oct 2008) |
| First close below 30 after a close above 50 | 3 | +33.2% | 3 of 3 | +22.8% | −3.7% |
| First return to contango after 5+ days of backwardation (since 2009) | 15 | +20.6% | 100% | +2.9% | — |

- **A VIX-above-30 rule alone added nothing over 12 months** because early signals in 2000–02, 2008 and 2022 dragged it down. In 2022 VIX never closed above 36.5, so a VIX-above-40 rule never fired before the October low.
- **The price of waiting.** The fear-fading entries came on 19 May 2009 (34% above the March 2009 low), 8 May 2020 (31% above) and 17 Apr 2025 (6% above).
- **Use closing values.** On 5 Aug 2024 VIX printed 65.73 intraday from wide pre-market quotes but closed at 38.57.
- **Counting days instead of episodes misleads.** All 207 days above 40 show a +33% average 12-month return, but they cluster in 2008–09 and 2020.
- **Europe.** VSTOXX runs higher than VIX (median 21 vs 17.6), so VIX 40 is roughly VSTOXX 45–50. VSTOXX above 40 gave a 12-month median of +8.8% on the EURO STOXX 50, close to the base.

## 🧩 Put/Call Ratios

- **Own backtest, 2003–2019:** first time the equity-only 10-day average closed above 0.80 (16 episodes). 12-month mean +2.5%, 62% positive, worst −47.6% (signal of 20 Jun 2008), against a base of +7.9% and 82% positive. **Worse than doing nothing.**
- **2008.** Signals on 17 Jan, 6 Mar, 20 Jun and 15 Sep 2008 all came before a further 40–49% fall. The highest reading of the sample came in March 2008, a year before the low.
- **Late 2022 was a false reading.** The equity ratio hit about 1.46 on 16 Nov 2022, the highest since 2002, because of deep in-the-money put trades for interest carry and early exercise, not hedging (Cboe, 29 Dec 2022).
- **Data.** Cboe's free CSVs end on 4 Oct 2019, the Friday before its platform migration. After that only one-day HTML pages or paid feeds exist, and Cboe requires a signed licence for any use of its data.

## 🧩 AAII Investor Sentiment Survey

- **The better signal is low optimism, not high pessimism.** Rotblut (AAII, 2014, without hindsight): weeks with bullish readings below the mean minus one standard deviation were followed by a 52-week median of +17.9% (85.5% positive), against a baseline median of +10.7% (79.0%). High-bearish weeks were followed by +11.8% (70.7%), weaker than baseline on hit rate.
- **Extremes.** Thorp (AAII, Aug 2025): 18 weeks with bullish at least two standard deviations below the mean averaged +18.1% over a year; 7 weeks with bearish three deviations above averaged +24.5%, against about 10% for all periods.
- **Too early in credit bears.** Bearish readings were more than two deviations above average 24 times between Nov 2007 and Feb 2009. Low-bullish weeks on 3–17 Jul 2008 were followed by 26-week losses of 27–32%. In 2022 the S&P 500 fell in 22 of 26 measurable six-month windows after low-bullish weeks.
- **Peer-reviewed evidence decays.** Hengelbrock, Theissen and Westheide (2013) found the AAII relation fading after about 2001; Smales (2016) found no predictive power.
- **Data.** The weekly Excel file is still downloadable (last modified 12 Nov 2026), but AAII now markets the history as a paid member benefit.

## 🧩 CNN Fear & Greed

- **Construction.** Seven components, each measured against its own recent norm and averaged: S&P 500 against its 125-day average, VIX against its 50-day average, a 5-day put/call average, 20-day stock-minus-bond returns, net new highs and lows, a breadth summation index and the junk-versus-investment-grade spread.
- **Mostly duplicates other gauges.** Three of the seven inputs are VIX, put/call and credit.
- **Evidence.** Farrell and O'Connor (Finance Research Letters 72, 2025): the index Granger-causes S&P 500 returns in 2011–2020, with a much weaker link in 2021–2024. No tested forward-return table at extreme-fear readings exists.
- **Data.** There is no official history or API. Reconstructions before 2021 disagree with each other, and the undocumented CNN endpoint blocked a generic client on 13 Nov 2026. It cannot be measured through 2008.

## 🧩 Credit Spreads and Financial Stress Indices

- **They classify the panic rather than time it.** The official stress indices fire in credit or liquidity crises and stay quiet in equity-only sell-offs.

| Episode | STLFSI4 peak | OFR FSI peak | NFCI peak |
|---|---|---|---|
| 2008 | 9.68 (10 Oct 2008) | 29.32 (10 Oct 2008) | 3.11 (28 Nov 2008) |
| 2020 | 5.65 | 10.27 | 0.31 |
| 2022 | 0.63 | 3.47 | −0.09 |
| April 2025 | 0.58 | 2.74 | −0.38 |

- **Too early in 2007–08.** STLFSI4 crossed 1 on 17 Aug 2007 and OFR FSI crossed 5 on 26 Nov 2007, before most of the 57% decline.
- **High-yield spreads.** Fridson (CFA Institute, 2 Jun 2025) notes spreads above 1,000 bp in 1990–91, 2001, 2008–09 and 2020 (peak 1,087 bp on 23 Mar 2020, the day of the equity low).
- **Academic.** Spreads forecast returns in sample (Keim and Stambaugh 1986; Fama and French 1989) but fail out of sample (Welch and Goyal 2008; Goyal, Welch and Zafirov 2024).
- **Data changes.** Since April 2026 FRED shows only three years of the ICE high-yield spread, and ICE's terms prohibit republishing it. Free full-history substitutes are Moody's Baa minus 10-year Treasury (FRED BAA10Y, from 1986), the Fed's GZ spread and excess bond premium (from 1973) and the ECB's CISS for the euro area (from 1980). STLFSI has been redefined three times since 2020; in March 2020 the old version read about −0.1 and the new one about 5.8.

## 🧩 Breadth Washouts and Thrusts

- **Zweig Breadth Thrust** (Zweig 1986): the 10-day average of advancing issues rises from below 40% to above 61.5% within ten trading days. Carson Group counted 18 signals since 1945 before April 2025, all followed by a higher S&P 500 six and twelve months later, about +24% on average at twelve months.
- **It confirms, it does not pick bottoms.** Own check of the 2019, 2023 and 2025 thrusts: the S&P 500 was already 6–10% above its low when they fired, and then had almost no further drawdown.
- **Near-misses can fail badly.** Nasdaq-100 near-thrusts in March 2002 and February 2008 were followed by about −35% in twelve months; near-misses in January and May 2022 came before the October low.
- **Weak evidence.** Fewer than 20 signals, thresholds set in 1986, counts that differ by data vendor and stock universe, and no peer-reviewed test.

## 🧩 Positioning: COT and Margin Debt

- **COT asset managers.** Own backtest: when asset managers' net long in E-mini S&P 500 futures sat at the bottom 5% of its three-year range, the 12-month return averaged +18.0% (14 of 16 weeks positive) against a +14.1% base, 2016–2025. That is 16 weeks in only **two episodes** (March 2020 and 2022). It fired about five months early in 2022, and gave no signal at all in 2008 or April 2025.
- **Leveraged-fund shorts are mostly basis trades,** not bearish bets, so they do not work as a contrarian cue.
- **Margin debt** mostly moves with prices. Deuskar, Kumar and Poland (Review of Finance 2020) found margin capacity predicts lower returns out of sample, the warning direction. The ratio of free credit to margin debt peaked at or near almost every stress low since 1998, including April 2025.
- **Data.** CFTC COT is free with an open API, and from end-2026 moves to twice-weekly releases (CFTC, 27 Oct 2026). FINRA margin data is a free Excel file, about three weeks after month end.

## 🧩 Other Surveys

- **Yale/Shiller Crash Confidence** (free CSV, about a 2.5-month lag): about 100 respondents per six months, so single months are noise; institutional readings printed 0.0 in Oct 2017 and Oct 2021, the latter before the 2022 bear.
- **NAAIM Exposure Index** moved behind a subscription for non-members on 1 Aug 2026; the public page now runs three months behind.
- **Investors Intelligence** is paid (USD 420 a year for Advisors Sentiment).
- **sentix** (weekly since 2001, more than 5,500 respondents, mostly German-speaking) is free to survey participants and the closest European equivalent.
- **BofA Fund Manager Survey** cash-level rules circulate widely, but I could not verify their thresholds or record.

## 🧩 Crypto Fear & Greed (alternative.me)

- **Construction.** Volatility 25%, momentum and volume 25%, social media 15%, surveys 15% (paused), Bitcoin dominance 10%, Google Trends 10%, each scored against its 30- and 90-day averages. Half of it is recent price action.
- **Data.** Free API with full daily history since 1 Feb 2018; attribution must appear next to displayed data. On 13 Nov 2026 it read 20 (Extreme Fear).
- **Own backtest.** Entry on the first reading of 10 or lower after at least 30 days without one, Bitcoin daily prices:

| Horizon | Episodes | Median return | Positive | Worst |
|---|---|---|---|---|
| 1 month | 11 | +3.3% | 6 (2 flat) | −8.8% |
| 3 months | 11 | +25.0% | 7 | −26.1% |
| 6 months | 10 | +2.2% | 6 | −47.9% |
| ~12 months | 8 | +2.7% | 4 | −59.2% |

- **Five of 11 first signals saw a further fall of more than 35%:** Feb 2018 (−53%), Aug 2019 (−52%), Jan 2022 (−62%), May 2022 (−48%) and Nov 2025 (−38%). Extreme-fear readings cluster for two to three months in bear markets.

## 🧩 Building a Rule From This

- **Count independent votes.** Options-based gauges (VIX family, put/call, most of the CNN index) are one vote. Credit and stress indices are a second. Breadth is a third. Surveys and positioning are a fourth, slow one.
- **Classify the panic first.** If credit and stress indices stay calm while VIX spikes (Q4 2018, 2022, April 2025), the sell-off was equity-only and recovered faster. If credit is breaking (2008, 2020), the first fear signal tends to come early: scale in slowly.
- **Stage the entry.** The research converges on tranches: a first one on the panic signal, a second when fear fades (VIX back below 30, term structure back in contango), a third on price or breadth confirmation. This gives up some upside from the low for much smaller further drawdowns. See [[Lump Sum vs Dollar-Cost Averaging]].
- **Write it down beforehand.** Every gauge that worked on average also had cases where the first signal was followed by another 35–50% fall. Only a pre-committed plan survives that.

## ☘️ What I Take From It

- **No single gauge is a buy signal.** The evidence supports fear as context, not as a trigger.
- **The rule in [[My Investment Strategy]] needs a second, independent gauge,** and credit stress is the most useful one because it changes the pace, not just the timing.
- **Fear fading beats fear peaking** for a rule-based investor, if I accept entering well above the low.
- **I prefer free official sources** for anything a rule depends on (Cboe VIX, FRED, OFR, ECB, CFTC, alternative.me); commercial or reconstructed series can change or disappear, as several did in 2026.
- **For crypto, extreme fear is a weak signal** because the index restates the price drop; it fits only inside a staged plan with a cap, as in [[My Crypto Strategy]].

## ✍️ Evidence Check

| Claim | Source | Status |
|---|---|---|
| Sentiment predictability is about zero when sentiment is low | Huang, Jiang, Tu, Zhou, RFS 28(3) 2015 | Peer-reviewed, read |
| Out-of-sample R² −1.24% | Goyal, Welch, Zafirov, RFS 37(11) 2024 (working-version table) | Peer-reviewed; figure from Welch's variable table, data to 2020 |
| VIX, put/call, crypto, COT, stress-index episode tables | Own backtests from Cboe, FRED, OFR, CFTC, alternative.me, Blockchain.com data | Not peer-reviewed; few episodes; price only |
| AAII low-bullish 52-week median +17.9% | Rotblut, AAII Journal, June 2014 | Vendor research, hindsight-free thresholds |
| 18 of 18 ZBT signals higher after 12 months | Carson Group via Motley Fool, 27 Apr 2025 | Practitioner; counts differ by vendor |
| FRED HY spread limited to 3 years, no republishing | FRED series notes for BAMLH0A0HYM2 | Primary, checked 13 Nov 2026 |
| NAAIM subscription from 1 Aug 2026 | naaim.org | Primary |
| Free Cboe put/call files end 4 Oct 2019 | Cboe historical data page, downloaded 13 Nov 2026 | Primary |

**What I could not confirm.**

- Peer-reviewed tests of the crypto Fear & Greed index (three papers often cited were not verified).
- The full list of Zweig Breadth Thrust dates and forward returns after breadth washouts (share of stocks above the 200-day average below 10–20%).
- BofA Fund Manager Survey cash thresholds, NAAIM history and thresholds, and older Investors Intelligence studies.
- Named asset-manager studies of VIX entry rules; the web-search budget ran out before they were found.
- The exact magnitude of the Google-search fear effect (Da, Engelberg, Gao).
- The 2008 stress-index timing figure relies partly on recalled S&P 500 levels.
- Free historical Eurex put/call statistics for a European equivalent.

## 📖 Further reading/watching

- Cboe VIX historical data — https://www.cboe.com/tradable_products/vix/vix_historical_data/
- Cboe options market statistics, historical put/call files — https://www.cboe.com/us/options/market_statistics/historical_data/
- AAII Investor Sentiment Survey — https://www.aaii.com/sentimentsurvey
- CNN Fear & Greed — https://www.cnn.com/markets/fear-and-greed
- Crypto Fear & Greed Index (alternative.me) — https://alternative.me/crypto/fear-and-greed-index/
- St. Louis Fed Financial Stress Index (STLFSI4) — https://fred.stlouisfed.org/series/STLFSI4
- OFR Financial Stress Index — https://www.financialresearch.gov/financial-stress-index/
- Chicago Fed NFCI — https://www.chicagofed.org/research/data/nfci/about
- ECB CISS data — https://data-api.ecb.europa.eu/service/data/CISS/D.U2.Z0Z.4F.EC.SS_CIN.IDX?format=csvdata
- FRED ICE BofA US High Yield OAS (licence notes) — https://fred.stlouisfed.org/series/BAMLH0A0HYM2
- Fridson, "Think We've Seen the Last 1,000 bps High-Yield Spread? Think Again", CFA Institute, 2 Jun 2025 — https://rpc.cfainstitute.org/blogs/enterprising-investor/2025/think-weve-seen-the-last-1000-bps-high-yield-spread-think-again
- CFTC Commitments of Traders — https://www.cftc.gov/MarketReports/CommitmentsofTraders/index.htm
- CFTC Release 9316-26 (twice-weekly COT) — https://www.cftc.gov/PressRoom/PressReleases/9316-26
- FINRA margin statistics — https://www.finra.org/rules-guidance/key-topics/margin-accounts/margin-statistics
- Baker-Wurgler sentiment data (Wurgler's page) — https://pages.stern.nyu.edu/~jwurgler/
- Goyal data page — https://sites.google.com/view/agoyal145
- Greenwood and Shleifer, "Expectations of Returns and Expected Returns", NBER w18686 — https://www.nber.org/papers/w18686
- Yale ICF Stock Market Confidence Indices — https://yale-icf.github.io/ShillerUSConfidence/
- NAAIM Exposure Index — https://naaim.org/programs/naaim-exposure-index/
- sentix FAQ — https://www.sentix.de/index.php/en/Terms/faq.html
- Deuskar, Kumar, Poland, margin credit and returns (2016 working paper) — https://www.stern.nyu.edu/sites/default/files/assets/documents/DKP_Margin_Credit_20160901.pdf
- Carson Group's 2025 breadth-thrust statistics via Motley Fool — https://www.fool.com/investing/2025/04/27/rare-wall-street-event-19th-time-80-years-perfect
- StockCharts ChartSchool, percent above moving average — https://chartschool.stockcharts.com/table-of-contents/market-indicators/percent-above-moving-average

---
Template: [[templates/knowledge_note_info]]
