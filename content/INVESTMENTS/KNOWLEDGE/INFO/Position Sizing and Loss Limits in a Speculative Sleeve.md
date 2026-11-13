---
title: "Position Sizing and Loss Limits in a Speculative Sleeve"
date: 2026-11-13
enableToc: true
openToc: true
tags: ["knowledge", "info", "investments", "risk-management", "position-sizing", "stop-loss", "crypto", "psychology", "research"]
type: knowledge-note
source: "_raw/research-workspaces/position-sizing-speculative-sleeve/ (deep research, 10 items, 2026-11-13)"
agent-created: true
summary: "How to size the speculative satellite of a long-term portfolio and limit its losses: base rates, drawdown math, fixed-fractional, Kelly, volatility and risk-budget sizing, sleeve caps, stop-loss evidence, losses a stop cannot catch, behaviour and Polish PIT-38 rules."
---

# Position Sizing and Loss Limits in a Speculative Sleeve

## 🗒️ Description

This note collects what the research says about one question: **how big should the speculative part of a long-term portfolio be, and how do you stop it from hurting the rest?** By "speculative sleeve" I mean the capped satellite next to a passive core: crypto, single stocks, thematic or trend-following positions. [[My Investment Strategy]] has such a sleeve and a few rules for it; this note is the evidence behind rules of that kind, not a set of numbers to copy. Exact amounts and my own thresholds live in my private notes.

It is knowledge and method, not a recommendation. Every number below is a figure from a cited source, or an illustration with round numbers that I label as such.

**TL;DR**

- **Start from the base rate.** Most retail speculation loses money: day traders, CFD accounts, retail bitcoin buyers, options buyers. Single-asset returns are extremely right-skewed, so the median bet is below the mean. A sleeve is best treated as a **loss budget** with an expected excess return of about zero.
- **Size from the worst case, not the average.** A rough rule from the drawdown math: the largest sleeve weight is about *tolerable portfolio loss ÷ plausible sleeve drawdown*. With 80–90% historical drawdowns in crypto, small weights carry a lot of risk.
- **Measure risk share, not capital share.** BlackRock estimated that 1–2% in bitcoin carries about 2–5% of a 60/40 portfolio's risk, and 4% about 14% (Dec 2024).
- **The sleeve cap is the real loss limit.** Position stops shape drawdowns and behaviour, but they cannot guarantee a fill in a gap, a halt, a liquidation or a venue failure.
- **Stop-losses do not add return on a random walk.** They help only when returns trend or switch regimes (Kaminski & Lo 2014), and in a large practitioner test they never improved net Sharpe but always improved skew and drawdown (Research Affiliates, Oct 2025).
- **Kelly is a ceiling, not a target.** Estimation error in the expected return pushes the right fraction toward zero; half Kelly keeps 75% of the growth with a far smaller chance of deep drawdowns.
- **The biggest wins are behavioural.** Pre-committed, automatic exits reduce the disposition effect; written reminders alone do not (Fischbacher et al. 2017).
- **Two rule conflicts matter in practice:** band rebalancing refills a sleeve after losses, which undoes a loss limit; and in Poland crypto is a separate PIT-38 basket, so a crypto loss cannot offset a securities gain.

## 🔗 Links

- [[My Investment Strategy]] — the plan with a capped satellite sleeve and a trend rule for it
- [[Asset Allocation and Diversification]] — the "Position Sizing the Volatile Satellites" section this note extends
- [[Rebalancing — Threshold vs Calendar]] — band rules and why refills conflict with loss limits
- [[Moving-Average Trend Rule on Sector ETFs]] — a stop-like trend rule for satellites, with its false-signal costs
- [[Polish Investor Taxes 2026]] — PIT-38 loss carry-forward and the separate crypto basket
- [[Crypto Custody and Exchanges in the EU after MiCA]] — venue risk, the loss channel a stop never catches
- [[My Crypto Strategy]] · [[Crypto Market State 2026]] · [[Bitcoin Cyclicality]]
- [[Investing Psychology]] · [[Cognitive Biases in Investing]] · [[Bear Markets — 100 Years of History]]

## 🧩 Start From the Base Rate

Before choosing a sizing formula, it helps to look at how the reference class of similar bets has done. For retail speculation the outside view is blunt.

| Reference class | What the data show | Source |
|---|---|---|
| Taiwanese day traders, 1992–2006 | Fewer than 1% predictably earn positive abnormal returns after fees | Barber, Lee, Liu & Odean, *J. Financial Markets* 2014 |
| Brazilian index-futures day traders who persisted 300+ sessions | 97% lost money; 1.1% earned more than the minimum wage | Chague, De-Losso & Giovannetti, working paper 2019 (rev. 2020) |
| EU retail CFD accounts | 74–89% lose money | ESMA, 27 Mar 2018 |
| Polish forex and CFD clients | 71.9% (2021), 79.1% (2022), 73.3% (2023), 70.6% (2024), 72.2% (2025) losing | UKNF annual data |
| Retail bitcoin app users | An estimated 73–81% likely lost money on their initial investment | BIS (2023) |
| Single US stocks over their listed life | Most underperform one-month T-bills; a few percent of stocks create all the net wealth | Bessembinder 2018; Bessembinder et al. 2023 |

What follows from it:

- **The sleeve is closer to tuition or an option on a thesis than to a return engine.** With an 80% base-rate loss, a 5% sleeve costs about 4% of the portfolio in a bad outcome (illustrative arithmetic).
- **Instrument choice matters as much as size.** Unlevered spot holdings with long holding periods and low turnover have the least-bad base rates. Day trading, CFDs, weekly options and leveraged perpetuals sit in the 70–97% losing range.
- **Skew argues for many small positions or the whole theme.** A handful of concentrated picks most likely misses the few assets that drive the payoff.
- **Base rates are averages.** A skilled minority exists (some Taiwanese day traders persistently earn money), but a short personal record cannot show that you belong to it.

## 🧩 Drawdown and Risk-of-Ruin Math

The core identities are simple and unforgiving:

- **Loss asymmetry.** A loss of L needs a gain of L / (1 − L) to recover: −50% needs +100%, −80% needs +400%.
- **Volatility drag.** Compound growth is roughly the arithmetic mean minus σ²/2. At 65% volatility the drag is about 21 percentage points a year, so an asset can have a positive average return and still shrink.
- **Expected maximum drawdown grows with volatility and time.** For a random walk with zero drift it is about 1.25 × σ × √T (Magdon-Ismail et al., *J. Applied Probability* 2004). The model gives an average, not an upper bound.
- **Recovery takes longer than the fall.** Bailey & López de Prado (2015) call it "triple penance": time under water is about three times the time it took to fall. Ignoring serial correlation can underestimate the downside by as much as 70% on hedge-fund indices.
- **Stress anchors.** S&P 500 about −57% (2007–09), Nasdaq about −78% (2000–02), Dow about −89% (1929–32), bitcoin repeatedly −70–85% (see [[Bitcoin Cyclicality]]).

Sizing from the worst case gives a quick upper bound: **sleeve weight ≈ tolerable portfolio hit ÷ plausible sleeve drawdown.** For an asset with 80–90% historical drawdowns, a 5% tolerable hit allows a sleeve of roughly 5–6% (illustrative). Under the same model, a 50% drawdown within five years is close to certain at 65% volatility. So a sleeve-level limit should protect the portfolio (a cap, no refill) rather than try to dodge normal volatility (a tight stop).

## 🧩 Five Ways to Size a Position

| Method | Rule in one line | Evidence grade | Main weakness |
|---|---|---|---|
| Fixed-fractional risk | Risk a fixed small share of equity per position, where risk is the loss if the exit is hit | Practitioner backtest | Caps per-position risk only; gaps turn 1R into several R |
| Kelly and fractional Kelly | Bet the fraction that maximises long-run log growth, or a fixed part of it | Peer-reviewed out-of-sample | Extremely sensitive to the estimated edge |
| Volatility-based sizing and targeting | Hold less when recent volatility is high, more when low, up to a cap | Peer-reviewed out-of-sample, mixed verdict | Misses V-shaped rebounds; in-sample gains mostly fail in real time |
| Risk-contribution sizing | Cap the sleeve by its share of portfolio volatility, not by capital | Practitioner backtest on peer-reviewed math | Correlations jump in a crisis; variance misses defaults and hacks |
| Sleeve caps and circuit breakers | A hard ceiling on the sleeve, no refill, a pause after a large drawdown | Vendor or anecdote (heuristics) | No controlled study of personal "play-money" caps |

### Fixed-fractional risk per position

- **Formula.** Units = (equity × r) ÷ (entry − stop). The implied notional is r ÷ stop distance: r = 1% with a 5% stop means a position of 20% of equity; with a 0.5% stop it means 200%, which is leverage.
- **Canonical versions.** Elder's 2% rule (maximum loss per trade) and 6% rule (realised monthly losses plus open risk; stop trading for the month when hit). Van Tharp's R-multiples: 1R = initial risk, expectancy = mean R per trade. The Turtle rules: 1% of equity per unit of N (20-day ATR), a 2N stop, unit caps for correlated markets, and trading from a notional account cut by 20% for every 10% drawdown.
- **Evidence.** No peer-reviewed study tests the specific 1% or 2% thresholds; they are conventions. A Trading Blox backtest of the original Turtle rules, 1970–2009, showed 72% CAGR with a 66% maximum drawdown and an 85-month longest drawdown, and was flat after the early 1990s (Garner, *Active Trader*, Feb 2010). **1% per unit did not bound portfolio drawdown**, because unit risks stacked up across correlated markets.
- **Fit for a sleeve.** Apply r to the sleeve, not to the whole portfolio: 1% of a sleeve capped at 10% is 0.1% of total wealth. For holdings without a price stop (long-horizon crypto or single stocks), R can be defined as a stress loss instead, so size = r × sleeve ÷ stress-loss %.

### Kelly criterion and fractional Kelly

- **Formulas.** Binary bet: f* = p − q/b. Continuous single asset: f* = (μ − r) / σ². Betting c × f* gives (2c − c²) of the maximum excess growth: 75% at half Kelly, 44% at quarter Kelly, 0% at twice Kelly.
- **Drawdowns even when the inputs are right.** The probability that wealth ever halves is 50% at full Kelly and 12.5% at half Kelly (lognormal case). MacLean, Thorp & Ziemba (2010) show 700 favourable bets turning 1,000 into 18 at full Kelly.
- **Out-of-sample.** On held-out sports-betting data, full Kelly was ruined in 100% of paths in basketball and football, where the model's edge was in fact negative; fractional Kelly had 0% ruin in all three sports (Uhrín et al., *IMA J. Management Mathematics* 2021). Busseti, Ryu & Boyd's risk-constrained Kelly cut the chance of a drawdown over 30% from 39.7% to 9.9% for a modest growth cost.
- **Why it is a ceiling for satellites.** Errors in expected returns cost far more than errors in variances (Chopra & Ziemba). Satellite assets have the least estimable edge, and computing Kelly jointly with the core cuts the satellite weight sharply when the two are correlated.

### Volatility-based sizing and volatility targeting

- **Three members.** ATR sizing for single trades (stop at k × ATR, size = money at risk ÷ stop distance), inverse-volatility weights across holdings, and volatility targeting of a whole portfolio (scale exposure by target σ ÷ estimated σ).
- **Evidence.** Moreira & Muir (*J. Finance* 2017) found the volatility-managed US market lifted Sharpe from 0.42 to 0.51 in sample. Cederburg et al. (*J. Financial Economics* 2020) re-ran it in real time on 103 strategies: the managed version had a higher Sharpe in 53, only 8 significantly, and real-time combinations lost to buy-and-hold in 72 of 103. Harvey et al. (*JPM* 2018) found volatility targeting reliably thins the left tail of equities (Sharpe 0.40 → about 0.50) but hurts bonds (0.25 → about 0.05).
- **Fit for a sleeve.** Use it to normalise risk, not as a return source: inverse-volatility weights inside the sleeve so one very volatile coin cannot dominate, and a de-risk-only cap, min(target σ ÷ estimated σ, 1), so the sleeve never levers up in a quiet market. I found no peer-reviewed real-time test of volatility targeting on crypto.

### Sizing by risk contribution

- **Idea.** A holding's share of portfolio risk depends on weight, volatility and correlation with the rest. A small weight in a 60%-volatility asset can carry 5–15% of portfolio risk.
- **Formula.** Percent risk contribution = w × Cov(r_i, r_p) ÷ σ_p². At a near-zero weight the marginal cost is about ρ × σ_s, so correlation, not volatility alone, drives it.
- **Published anchors.** BlackRock Investment Institute (12 Dec 2024): bitcoin at 1–2% of a 60/40 portfolio carries about 2–5% of its risk, similar to an average "Magnificent 7" stock; at 4% it would carry about 14%. Morgan Stanley's Global Investment Committee (Oct 2025) set crypto caps of 4%, 3% and 2% by portfolio model, and 0% for income and wealth-preservation portfolios. **Both firms sell bitcoin products.**
- **Correlation is not stable.** An IMF note found the bitcoin–S&P 500 correlation rose from 0.01 (2017–19) to 0.36 (2020–21). That shift alone changes the weight a fixed risk budget allows by a large margin.
- **The core sets the room.** The more conservative the core, the smaller the satellite a given risk budget allows.

### Sleeve-level caps and circuit breakers

- **Caps.** Bogle suggested about 5% for "fun" money, "not one penny more" (2006). Jason Zweig's "mad money" account in his commentary on *The Intelligent Investor* (2003) is at most 10% of assets, kept separate, never topped up, and closed if lost.
- **Mechanics behind breakers.** CPPI (Black & Perold 1992) sets risky exposure to m × (value − floor), with m usually 4–5; the floor is breached if the asset gaps more than 1/m between checks. In 2008, CPPI notes in Australia and Canada moved fully to cash and missed the recovery (cash-lock).
- **False positives.** A manager with Sharpe 0.5 and 10% volatility has about a 43% chance of a −20% drawdown within ten years (Man Group, 2020), so drawdown limits often stop out sound strategies.
- **Evidence gap.** I found no controlled study testing whether a capped personal "play" account improves outcomes for the whole portfolio. The caps are expert heuristics.

## 🧩 Stop-Loss Rules: What the Evidence Says

| Study | Sample | Finding |
|---|---|---|
| Kaminski & Lo, *J. Financial Markets* 2014 | Theory plus US data | On a random walk a simple stop always lowers expected return; it can add value only with momentum or regime switching. An earlier version (US monthly 1950–2004, stopping into bonds) found 50–100 bp a month gained during stopped-out periods, before costs |
| Lo & Remorov, *J. Financial Markets* 2017 | US stocks 1964–2014 with real spreads | Tight stops lost to buy-and-hold, mainly on costs. Wide stops roughly matched buy-and-hold risk-adjusted and cut maximum drawdown. Executing a day later beat executing immediately |
| Han, Zhou & Zhu (SSRN working paper) | US momentum portfolios | A 10% stop cut momentum's worst month from −49.79% to −11.36% |
| Lei & Li, *Financial Services Review* 2009 | US stocks | Neither fixed nor trailing stops changed returns; trailing stops reduced volatility |
| Research Affiliates (Oct 2025) | Practitioner backtest | Stops never improved net Sharpe, but always improved skew and drawdown |

**Where stops fail.**

- **Gaps.** On 24 Aug 2015, 15% stops on US ETFs effectively filled at about 30%. In the January 2015 Swiss franc de-peg, FXCM clients ended with more than USD 225 million of negative balances.
- **Mean reversion.** In the second half of Lo & Remorov's sample, autocorrelation turned negative and stops sold just before rebounds.
- **Whipsaw.** Each cycle pays two spreads; without a re-entry rule a stop can miss the whole recovery.

**What this implies for a sleeve.** Stops are tools for shaping drawdown and behaviour, not for adding return. They are most defensible on trending assets, wide (a multiple of the asset's own volatility) and checked on weekly or monthly closes rather than intraday. The trend rule in [[My Investment Strategy]] is a stop of this family; [[Moving-Average Trend Rule on Sector ETFs]] covers its false-signal costs.

## 🧩 Losses a Price Stop Cannot Catch

A stop caps a loss only if the price moves continuously, the loss is bounded by what you own, and the venue stays solvent. Four channels break that.

1. **Leverage and forced liquidation.** On a linear contract with isolated margin, the adverse move to liquidation is about 1/L − m (L = leverage, m = maintenance margin). At m = 0.5%: 5× → about 19.5%, 10× → about 9.5%, 20× → about 4.5%. The loss is the whole margin wherever the stop sat. On 10–11 Oct 2025 more than USD 19 billion of leveraged crypto positions were liquidated in about 24 hours, across more than 1.6 million accounts (CoinGecko with Coinglass data; Galaxy Research, 15 Oct 2025).
2. **Collateral marked on the venue.** In the same event USDe traded at about 0.65 on Binance while staying near 1.00 elsewhere, so effective leverage jumped for accounts using it as collateral.
3. **Path-dependent products.** Daily-reset leveraged and inverse ETFs lose value with realised variance even if the underlying ends flat (Cheng & Madhavan 2009; Avellaneda & Zhang 2010). Knock-out or acceleration events lock in an 80–100% loss (XIV, Feb 2018).
4. **Venue or custody failure.** An exchange collapse (FTX, 2022) or a withdrawal freeze makes the stop irrelevant. See [[Crypto Custody and Exchanges in the EU after MiCA]] and [[CEX]].

The structural answer is to make the sleeve's maximum loss equal to the money in it: no margin or perpetual leverage in a long-term sleeve, defined-risk instruments, a cap per venue, and long-term crypto in self-custody or with a regulated custodian.

## 🧩 The Behavioural Side

Loss limits mostly exist to beat predictable biases ([[Cognitive Biases in Investing]]), not to time the market.

- **Disposition effect.** Odean (1998), 10,000 US brokerage accounts 1987–93: investors realised 14.8% of their gains but only 9.8% of their losses. The winners they sold then beat the losers they kept by about 3.4% over the next year, so the habit is costly.
- **House money and break-even.** After gains people take more risk with "house money"; after losses they gamble to get back to even (Thaler & Johnson 1990). They take more risk after paper losses than after realised ones (Imas, *AER* 2016).
- **What works.** Automatic stop-loss orders reduced the disposition effect in a lab experiment; reminders alone did not (Fischbacher, Hoffmann & Schudy, *RFS* 2017). UK broker data point the same way (Richards et al. 2017).
- **Kill criteria.** Annie Duke (*Quit*, 2022) suggests writing a "state and date" condition before entry: if this has not happened by that date, I exit.
- **Typical failure modes.** Widening the stop as it is about to bind, re-buying immediately after a stop (no cooldown), and "house-money creep" where recycled profits grow the sleeve's risk.

## 🧩 Rule Conflicts: Rebalancing and Polish Tax

**Rebalancing.**

- Band rebalancing on a fixed sleeve target refills the sleeve after a crash. With a 5% target and a 2.5% lower band, a refill fires after the sleeve falls about 51% relative to the core (illustrative). For a structurally failing asset that repeats the loss.
- A **cap-and-trim** policy (trim above the band, never refill below it) bounds the lifetime sleeve loss to its initial budget and fits the right skew of speculative assets, where a few long-held winners make the payoff.
- If refills are allowed at all, the sources suggest pre-committing to when (for example only at an annual review), never as an immediate top-up. Details in [[Rebalancing — Threshold vs Calendar]].
- Kelly-style constant-fraction sizing *is* a rebalancing rule (buy after falls). That conflicts with a hard sleeve stop; decide in advance which one wins.

**Polish tax (PIT-38).** Details and sources in [[Polish Investor Taxes 2026]].

- Realised gains on securities and derivatives (shares, ETFs, CFDs, options) are taxed at 19% and net against each other within a year.
- An unused securities loss carries forward for five tax years, using at most 50% of it in any one year (art. 9 ust. 3 PIT Act). Since 2019 there is also a one-time deduction option of up to PLN 5 million; commentaries differ on how it combines with the 50% cap.
- **Crypto is a separate basket.** Crypto income is computed separately and cannot offset securities gains. Unused crypto costs roll into the next year's crypto costs (art. 22 ust. 16), and art. 9 ust. 3a excludes crypto from the five-year loss rule.
- A PIT-38 is filed even in a loss year, to keep the loss available.

## ☘️ What I Take From It

- **The cap does the real work.** Everything else (stops, volatility scaling, Kelly) operates inside the cap. If the cap is right, a total loss of the sleeve is a bad year, not a broken plan.
- **Write the sleeve charter once, then only execute it.** The sources converge on the same skeleton, which I keep without numbers here:
  - cap as a share of the portfolio, stated both in capital and in risk share;
  - maximum loss per idea, measured as a stress loss if there is no stop;
  - a sleeve drawdown breaker that pauses new positions rather than forcing a sale;
  - a cooldown and a written post-mortem before re-entry;
  - a refill rule (whether and when), and the order of precedence against rebalancing;
  - a fixed review date that compares the sleeve, after costs and taxes, with simply holding the core.
- **Instrument rules beat price rules.** "No leverage, no daily-reset products, a cap per venue" removes the losses a stop cannot catch.
- **Expect deep drawdowns as normal** for high-volatility assets, and judge a sleeve rule by whether I will follow it through one, not by its backtest. This matches the pre-commitment logic in [[Investing Psychology]] and the review cadence in [[My Investment Strategy]].

## ✍️ Evidence Check

| Claim | Source | Grade |
|---|---|---|
| Fewer than 1% of day traders reliably profit | Barber et al. 2014, Taiwan full-market data | Peer-reviewed, out-of-sample persistence test |
| 70–80% of Polish CFD clients lose each year | UKNF annual data 2021–2025 | Regulator, descriptive |
| 1–2% bitcoin ≈ 2–5% of 60/40 risk | BlackRock, Dec 2024 (chart values via ai-CIO) | Asset-manager estimate; seller of bitcoin products |
| Turtle rules: 72% CAGR, 66% max drawdown | Garner / Trading Blox, Feb 2010 | Practitioner backtest |
| Half Kelly keeps 75% of growth; halving odds 50% → 12.5% | Kelly math under lognormal assumptions | Theorem; real assets have fat tails |
| Full Kelly ruined on a negative edge | Uhrín et al. 2021 | Peer-reviewed out-of-sample, sports betting |
| Volatility targeting rarely beats buy-and-hold in real time | Cederburg et al. 2020 | Peer-reviewed out-of-sample |
| Stops lower expected return on a random walk | Kaminski & Lo 2014 | Peer-reviewed theory and in-sample data |
| Stops improve drawdown and skew, not net Sharpe | Research Affiliates, Oct 2025 | Practitioner backtest |
| Automatic stops reduce the disposition effect | Fischbacher et al. 2017 | Peer-reviewed lab experiment |
| Bogle 5% / Zweig 10% caps | Interviews and book commentary | Expert heuristic, untested |
| Millennium-style pod stop-outs (−5% halves capital, −7.5% exit) | WSJ reporting relayed by others | Press report, not a firm document |

**What I could not confirm.**

- The exact re-entry rule and closed-form premium in Kaminski & Lo's paper (the open copy was unreachable); the summary above uses the abstract and secondary readings.
- Whether the Han, Zhou & Zhu stop-loss paper was ever published in a journal.
- The exact chapter of Zweig's 10% rule, and the exact formulas in Amenc, Malaise & Martellini's core-satellite paper (registration-gated).
- The Morgan Stanley GIC caps come from the firm's own E*TRADE summary, not the GIC PDF itself.
- Tax points I did not verify against the statute: whether crypto-to-crypto or crypto-to-stablecoin swaps stay tax-neutral after MiCA, and the absence of a wash-sale rule in Poland. How the PLN 5 million one-off deduction combines with the 50% cap is contested in commentaries.
- How volatility-control strategies behaved through the 2020 crash and rebound was not checked; the failure mode is described as a mechanism only.

## 📖 Further reading/watching

- Barber, Lee, Liu, Odean, "The cross-section of speculator skill", *Journal of Financial Markets* 18 (2014) — https://econpapers.repec.org/RePEc:eee:finmar:v:18:y:2014:i:c:p:1-24
- Chague, De-Losso, Giovannetti, "Day trading for a living?", SSRN 3423101 (2019, rev. June 2020) — https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3423101
- ESMA, decision to restrict CFDs for retail investors, ESMA71-98-128 (27 Mar 2018) — https://www.esma.europa.eu
- Magdon-Ismail et al., "On the maximum drawdown of a Brownian motion", *J. Applied Probability* 41(1) (2004) — https://www.cs.rpi.edu/~magdon/ps/journal/drawdown_journal.pdf
- Bailey & López de Prado, "Stop-outs under serial correlation and 'the triple penance rule'", *Journal of Risk* (2015)
- Kelly, "A New Interpretation of Information Rate", *Bell System Technical Journal* (1956) — https://homepage.sns.it/marmi/esameIUE/kelly.pdf
- MacLean, Thorp, Ziemba, "Good and bad properties of the Kelly criterion", *Quantitative Finance* 10(7) (2010) — https://www.stat.berkeley.edu/~aldous/157/Papers/Good_Bad_Kelly.pdf
- Uhrín, Šourek, Hubáček, Železný, "Optimal sports betting strategies in practice", *IMA J. Management Mathematics* (2021) — arXiv 2107.08827
- Moreira & Muir, "Volatility-Managed Portfolios", *Journal of Finance* 72(4) (2017) — https://www.nber.org/papers/w22208
- Cederburg, O'Doherty, Wang, Yan, "On the performance of volatility-managed portfolios", *JFE* 138(1) (2020) — https://www.lehigh.edu/~xuy219/research/COWY.pdf
- Harvey et al., "The Impact of Volatility Targeting", *JPM* 45(1) (2018) — https://people.duke.edu/~charvey/Research/Published_Papers/P135_The_impact_of.pdf
- BlackRock Investment Institute, "Sizing Bitcoin in Portfolios" (12 Dec 2024) — https://www.blackrock.com/institutions/en-au/insights/portfolio-design/sizing-bitcoin-in-portfolios
- Maillard, Roncalli, Teïletche, "The Properties of Equally Weighted Risk Contribution Portfolios", *JPM* 36(4) (2010)
- DeMiguel, Garlappi, Uppal, "Optimal Versus Naive Diversification", *RFS* 22(5) (2009)
- Kaminski & Lo, "When do stop-loss rules stop losses?", *J. Financial Markets* 18 (2014) — https://econpapers.repec.org/RePEc:eee:finmar:v:18:y:2014:i:c:p:234-254
- Lo & Remorov, "Stop-loss strategies with serial correlation, regime switching, and transaction costs", *J. Financial Markets* 34 (2017) — https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2695383
- Black & Perold, "Theory of constant proportion portfolio insurance", *J. Economic Dynamics and Control* 16 (1992)
- Galaxy Research, "Crypto's Most Violent Flash Crash Yet" (15 Oct 2025) — https://www.galaxy.com/insights/research/cryptos-flash-crash-liquidation-binance-adl-auto-deleveraging
- Avellaneda & Zhang, "Path-Dependence of Leveraged ETF Returns", *SIAM J. Financial Mathematics* 1 (2010)
- Odean, "Are Investors Reluctant to Realize Their Losses?", *Journal of Finance* 53(5) (1998) — https://faculty.haas.berkeley.edu/odean/papers/disposition/disposition.html
- Fischbacher, Hoffmann, Schudy, "The Causal Effect of Stop-Loss and Take-Gain Orders on the Disposition Effect", *RFS* 30(6) (2017)
- Thaler & Johnson, "Gambling with the House Money and Trying to Break Even", *Management Science* 36(6) (1990)
- Bogle on "fun funds", AP interview reported 18 Apr 2006 — https://www.financial-planning.com/news/who-says-bogleheads-cant-have-fun
- Johnson (Morningstar), "Should you have a 'fun' portfolio?" (22 Feb 2022) — https://www.morningstar.com.au/insights/etfs/219081/should-you-have-a-fun-portfolio
- Annie Duke, *Quit* (2022)

---
Template: [[templates/knowledge_note_info]]
