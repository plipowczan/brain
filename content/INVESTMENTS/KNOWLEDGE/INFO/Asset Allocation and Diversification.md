---
title: "Asset Allocation and Diversification"
date: 2026-06-21
enableToc: true
openToc: true
tags: ["knowledge", "info", "investments", "asset-allocation", "diversification", "risk-management"]
type: knowledge-note
agent-created: true
agent-reviewed: 2026-06-21
summary: "Mechanics of building a multi-asset portfolio — allocation, correlation, MPT, asset-class roles, glide paths, rebalancing, position sizing, cushion, model portfolios."
---

# Asset Allocation and Diversification

## 🗒️ Description

This is the **mechanics** note: *how* to build and maintain a multi-asset portfolio — the allocation decision, diversification math, asset-class roles, glide paths, rebalancing rules, position sizing, and the cushion that lets you hold through a bear. The *philosophies* (active vs passive, value vs growth, DCA, contrarianism) live in [[Investment Strategies]]; the *behavioral* side (why you sabotage the plan) lives in [[Investing Psychology]] and [[Cognitive Biases in Investing]].

Written for a **long-horizon (10+ yr), high-risk-tolerance** builder who already holds equities/ETFs, crypto, real estate, and some bonds/cash/gold — someone who can stomach a −50% drawdown without forced selling. For that profile a **high equity weight is defensible**; the job of this note is to make that bet *survivable* rather than to dilute it.

> Reference, not advice. Numbers below are sourced where possible; sample portfolios are illustrations, not recommendations. Verify any figure before acting on it.

## 🔗 Links

- [[#🧩 Why Allocation Dominates — the Brinson Figure and Its Honest Nuance]]
- [[#🧩 Diversification and Correlation — Spreading What Can Be Spread]]
- [[#🧩 Modern Portfolio Theory — Kept Practical]]
- [[#🧩 The Asset Classes and Their Roles]]
- [[#🧩 Strategic vs Tactical — and the Glide Path]]
- [[#🧩 Rebalancing — the Mechanical Sell-High / Buy-Low]]
- [[#🧩 Position Sizing the Volatile Satellites]]
- [[#🧩 The Cushion — What Lets You Hold]]
- [[#🧩 Sample Model Portfolios (Illustrations)]]
- [[#🧩 A Build Checklist]]
- [[#Glossary]]

## 🧩 Why Allocation Dominates — the Brinson Figure and Its Honest Nuance

The most-quoted line in portfolio construction: **asset allocation explains ~90% of performance**. It comes from Brinson, Hood & Beebower, *"Determinants of Portfolio Performance"* (*Financial Analysts Journal*, 1986), which studied 91 large US pension plans 1974–83 and found that **investment policy (the long-term asset-class mix) explained on average 93.6% of the variance of a plan's return over time** — far more than market timing or security selection. The follow-up (BHB II, 1991) put it at ~91.5%.

**The honest nuance.** That ~90% is constantly misquoted as "90% of your *returns* come from allocation" — which is wrong. Ibbotson & Kaplan settled it in *"Does Asset Allocation Policy Explain 40, 90, or 100 Percent of Performance?"* (*FAJ*, 2000) — the answer depends entirely on the question:

| Question asked | Answer | Meaning |
|----------------|-------:|---------|
| What % of the **variability of one fund's return over time** does policy explain? | **~90%** | When the market swings, your portfolio swings with it — *because* of the mix. This is the BHB number. |
| What % of the **difference in returns between funds** does policy explain? | **~40%** | Across funds, manager skill / timing / fees still account for ~60% of who beats whom. |
| What % of the **level** of the average fund's return does policy explain? | **~100%** | On average, active bets are a wash (or slightly negative after costs), so the policy mix delivers essentially all of the typical investor's return. |

**The practical reading for me:** the single highest-leverage decision is the **mix of asset classes**, not which fund or stock. Get the weights roughly right and you have captured most of what you can control; agonizing over the "best" ETF inside a sleeve is rounding error by comparison. Time is far better spent on allocation, cost, and *behavior* (see [[Investing Psychology]]) than on selection.

## 🧩 Diversification and Correlation — Spreading What Can Be Spread

Total risk splits into two parts:

- **Specific (idiosyncratic, diversifiable) risk** — one company blows up, one country defaults, one protocol gets hacked. This is **free to remove**: hold enough uncorrelated positions and idiosyncratic shocks wash out. A single stock can go to zero; a 1,500-holding global index cannot.
- **Systematic (market, undiversifiable) risk** — recessions, rate shocks, liquidity crises. **No amount of equity diversification removes this.** Owning 50 stocks instead of 5 does almost nothing in a −35% bear; they all fall together.

The lever that controls *portfolio* risk is **correlation**, not the count of holdings. Combine two assets that don't move together and portfolio volatility drops *below* the weighted average of their individual volatilities — the only "free lunch" in finance (Markowitz). The lower (or more negative) the correlation, the bigger the lunch.

**The cruel catch: correlations spike toward 1 in a crisis.** In a true panic, leveraged and forced sellers dump *everything* that's liquid to raise cash — so assets that look uncorrelated in calm markets crash together. In 2008, REITs, commodities, hedge funds, and most "diversifiers" saw correlations jump; **only gold's correlation reverted to its pre-crisis level afterward** (State Street; Morningstar, *"3 Assets That Might Not Diversify as Well as You Think"*). This is the same mechanism as the **"global lost decade"** in [[Bear Markets — 100 Years of History]]: geographic diversification (US/EU/EM equities) protects against *local* problems, **not** against a synchronized worldwide collapse — MSCI World fell ~−34% in COVID 2020, almost identical to the S&P 500.

**Conclusion: real diversification means owning assets with different *return drivers*, not just different tickers.** Equities, long bonds, gold, and cash respond to *different* macro forces (growth, rates, fear, liquidity), which is why a multi-asset mix survives where "50 tech stocks" does not.

The two diversifiers that have historically actually helped *during* equity crises:

- **Long government bonds** — the classic ballast; in a growth-shock / deflationary bear (2008, 2020) high-quality treasuries rallied as equities fell (negative correlation). **But the stock–bond correlation is not a law of nature** — it went *positive* in 2022, when both stocks and bonds fell together under inflation + rate hikes (State Street, *"Rethinking the Role of Bonds"*). Bonds hedge *growth/deflation* shocks, not *inflation* shocks.
- **Gold** — the most reliable crisis hedge over long windows; low-to-negative equity correlation that, unlike most alternatives, *holds up* in panics. No yield, but that's the point — it's insurance, not an engine.

## 🧩 Modern Portfolio Theory — Kept Practical

Harry Markowitz (1952) turned "don't put all your eggs in one basket" into math: portfolio risk is **not** the average of the parts — it's a function of each asset's variance *and the covariances between them*. The practical payoff is three ideas, no matrices required:

- **The efficient frontier.** For every level of risk there's a mix that gives the *most* expected return (and vice-versa). Portfolios on that curve are "efficient"; everything below it is leaving return on the table for the risk taken. You don't need to solve for it precisely — you need to *not sit far below it* (e.g., holding 100% cash for 30 years, or one concentrated stock).
- **Risk/return is a trade-off you choose, not avoid.** Higher expected return demands accepting higher volatility. The frontier just tells you the *best available* trade at each level. A high-risk long-horizon investor deliberately picks a high-volatility point — that's rational *given the horizon*, not reckless.
- **The Sharpe ratio** = (return − risk-free rate) / volatility — return *per unit of risk*. Adding a low-correlation asset (gold, bonds, a tiny crypto sleeve) can **raise the whole portfolio's Sharpe ratio even if the asset itself is volatile or low-returning**, because it cuts portfolio volatility more than it cuts return. That is the entire mechanical case for diversification in one number.

**Where MPT breaks (know the limits):** it assumes correlations and volatilities are stable and that returns are normally distributed. Markets have **fat tails** (crashes are more frequent and deeper than the bell curve predicts) and correlations move (see above). So treat MPT as **intuition and direction, not a precision instrument** — don't over-optimize to three decimal places on historical data you can't trust to repeat.

## 🧩 The Asset Classes and Their Roles

Pick assets by the **job** they do, not by recent performance. Each class is a different tool:

| Asset class | Role in the portfolio | Drives return via | Behavior in a crisis | Yield/income |
|-------------|----------------------|-------------------|----------------------|--------------|
| **Equities / ETFs** | **Growth engine** — the long-run wealth driver | Earnings growth + reinvested dividends | Falls hardest (−20% to −57%); recovers (see bear note) | Dividends |
| **Bonds (govt / IG)** | **Ballast** — dampen drawdowns, dry powder | Coupons + duration | Hedge growth/deflation shocks; *failed* in 2022 inflation | Coupon |
| **Cash / T-bills / MMF** | **Cushion & ammunition** — survive + buy the dip | Short rate | Stable nominal; the asset you deploy at the bottom | Short rate |
| **Real estate / REITs** | **Income + partial inflation hedge** | Rents + appreciation | Listed REITs trade like equities in panics (correlation rises); direct property is illiquid but less mark-to-market | Rent / dividend |
| **Gold** | **Crisis hedge / insurance** | Scarcity, real-rate & fear premium | The one diversifier that historically *holds* in panics | None |
| **Crypto** | **Convex, high-vol satellite** — asymmetric upside | Adoption, liquidity, risk appetite | Highest beta; correlations to equities have *risen* as it institutionalizes | Mostly none (staking aside) |

Notes that matter for *this* investor:

- **Equities are the engine** — for a 10+ yr horizon, the historical case is to keep this weight high. The drawdowns are the price of admission, not a reason to under-allocate.
- **Bonds are ballast, not a profit center** — long-term investors accept lower bond returns in exchange for an asset *uncorrelated* (usually) to equities (State Street). Hold them for what they do in a *growth* bear, and know they won't save you in an *inflation* bear.
- **Cash is a position, not laziness** — it's the thing that lets you buy from forced sellers at the bottom. Berkshire sat on a record ~$397B in cash in early 2026 ([[Bear Markets — 100 Years of History]]) for exactly this reason.
- **REITs ≈ equities in a crisis** — useful for income and inflation, but don't count listed REITs as a separate diversifier when it matters most; since 2008 their correlation to a 60/40 portfolio has risen (Morningstar).
- **Crypto is a *satellite*** — sized so it can fall 80% without sinking the ship (next section). BlackRock frames a **1–2%** bitcoin sleeve as a reasonable multi-asset allocation; academic work (Yale/Rochester) found **1–6%** optimal. See [[Crypto Market State 2026]] for the asset-specific picture.

## 🧩 Strategic vs Tactical — and the Glide Path

- **Strategic asset allocation (SAA)** — your long-term target weights, set from your horizon and risk tolerance, then *held*. This is the BHB-relevant decision; it does ~90% of the work. Boring and dominant.
- **Tactical asset allocation (TAA)** — deliberate short-term tilts away from target (overweight cheap, underweight expensive). Honest take: discretionary TAA usually *destroys* value because it's market timing in disguise (recall the bear note: leaving the market to dodge declines reliably misses the best days). Only systematic, rules-based, **small** tilts have any defensible edge — and even those are a side bet, not the strategy. **Keep tactical moves small and rare; let strategy and rebalancing do the heavy lifting.**

**The glide-path rule of thumb: "110 minus age" in equities.** Age 35 → ~75% equities; age 60 → ~50%. The logic: more years to recover ⇒ more risk capacity. The newer "**120 minus age**" version pushes equity higher (longer lifespans, low bond yields).

**Limits of the rule — read these before trusting it:**

- It's a **heuristic keyed to a generic retiree**, not to your risk *tolerance*, income stability, or other assets. A high-tolerance builder with stable income and a 10+ yr horizon is fully justified holding well **above** what the formula prescribes.
- **Rising bond weight with age can *increase* failure risk**, not lower it, given low yields and long retirements (Pfau–Kitces; Estrada). Some research finds a *rising*-equity glide path through retirement beats the traditional declining one.
- It ignores **non-portfolio assets** (a paid-off house, a pension, a business) that change your true risk capacity.

**For this profile:** a high equity weight (often 70–90%+ of the risk portfolio) is defensible *provided* the cushion and position-sizing rules below are in place — those are what convert "aggressive" into "survivable."

## 🧩 Rebalancing — the Mechanical Sell-High / Buy-Low

Rebalancing = restoring your target weights after markets drift them. Its quiet genius: it **forces you to trim whatever ran up (sell high) and add to whatever fell (buy low)** — the exact opposite of the emotional default (chase winners, dump losers). It's the [[Cognitive Biases in Investing|disposition effect]] reversed, executed by rule instead of by nerve. In euphoria it takes chips off the most expensive asset without a forecast; in a bear it mechanically buys discounted equities — see the bear note's phase playbook.

**Two trigger styles:**

| Method | Rule | Pros | Cons |
|--------|------|------|------|
| **Calendar** | Rebalance on a schedule (quarterly / annually) | Dead simple; few decisions | Can drift far between dates; may trade when unnecessary |
| **Threshold (bands)** | Rebalance when a weight drifts past ±X pp (e.g. ±5pp, or relative ±25%) | Responds to *actual* drift; controls risk better | Needs monitoring; more potential trades |

Vanguard's Dec-2024 research (*"The Rebalancing Edge"*) found **threshold-based beats pure calendar on a risk-adjusted basis** (~15–25 bp/yr), and recommends a hybrid: **check on a schedule, act only when a band is breached.** That's the pragmatic default — quarterly look, rebalance only if something is off by more than your band.

**The "rebalancing bonus."** When assets are volatile and mean-reverting, systematic rebalancing can add a small return premium *on top of* the risk control, by harvesting the swings. Don't overstate it — the **primary** reason to rebalance is to stop your risk from silently drifting up (a 60/40 left alone for a decade becomes an 80/20 just before you need it not to be).

**Costs and taxes — don't rebalance blindly:**

- **Inside tax-advantaged accounts (IKE/IKZE, retirement): rebalance freely** — no tax event.
- **In a taxable account, selling to rebalance can trigger capital-gains tax** (19% Belka tax in Poland). Prefer to rebalance with **new contributions** (direct fresh cash to the underweight sleeve) and, if you must sell, favor the most-overweight asset and higher-cost-basis lots. Widening bands a little in taxable accounts is rational — the tax drag can exceed the rebalancing benefit.

## 🧩 Position Sizing the Volatile Satellites

The rule for any high-volatility satellite (crypto, single stocks, a thematic bet): **size it so the worst plausible outcome is survivable and doesn't force a sale.**

Crypto routinely draws down **70–80%+** peak-to-trough (it has done so repeatedly — see [[Crypto Market State 2026]]). So size the sleeve against that, not against the hope:

- A **5%** crypto sleeve that falls **80%** costs the total portfolio **−4%** — annoying, fully survivable, doesn't touch the plan.
- A **25%** crypto sleeve that falls 80% costs **−20%** of the *whole* portfolio on top of an equity bear — that's the kind of hit that triggers panic-selling at the bottom (the worst possible moment).

**The sizing test (BlackRock / practitioner framing):** *if this sleeve dropped 80% overnight, would I still sleep and stick to the plan?* If no, it's too big. A high-tolerance investor might run a larger satellite (say up to 5–10%) than a cautious one — but the principle is identical: **the position is sized by your tolerance for its drawdown, not by your conviction in its upside.** Convexity (small bet, asymmetric upside) only works if the small bet is genuinely small. Treat the sleeve as a separate line, rebalance it back to target when it balloons (banking gains) and — within plan — top it up when it craters.

## 🧩 The Cushion — What Lets You Hold

The thing that quietly determines whether your whole strategy works isn't an asset class — it's the **emergency fund / cash cushion sitting *outside* the risk portfolio.**

- **What:** typically **3–12 months of living expenses** in cash / T-bills / money-market — instantly accessible, not marked to market, never invested.
- **Why it's the keystone:** it removes the one thing that destroys long-term investors — **forced selling at the bottom.** In a bear, those who *must* sell (margin calls, redemptions, job loss with no buffer) dominate those who *want* to, which is what overshoots prices to the downside ([[Bear Markets — 100 Years of History]], capitulation phase). **If you never have to sell, a −50% drawdown is a paper number you wait out; without a cushion it can become a permanent, realized loss.** The cushion is what converts "high risk tolerance" from a feeling into an actual capacity.
- **Dual purpose:** it's also **ammunition** — the dry powder to buy from forced sellers when assets are cheapest.

For this investor the cushion is *prerequisite to* the high equity weight, not an alternative to it: the bigger and more stable the cushion (plus stable income, no leverage), the more aggressive the risk portfolio can responsibly be. Leverage does the opposite — it manufactures forced selling, so the long-term portfolio should ideally carry **none**.

## 🧩 Sample Model Portfolios (Illustrations)

**Illustrations only — to show how the pieces fit, not recommendations.** Each reflects a different risk appetite and worldview. The cushion (above) sits *outside* all of these.

| Portfolio | Equities | Bonds | Gold/Commodities | Cash | Crypto | Character |
|-----------|--------:|------:|-----------------:|-----:|-------:|-----------|
| **60/40 (classic balanced)** | 60% | 40% | — | — | — | The default benchmark; simple, struggled in 2022 |
| **Three-fund (Bogleheads)** | ~80% (US + ex-US) | ~20% | — | — | — | Low-cost, total-market, set-and-forget |
| **All-Weather (Dalio, risk-parity)** | ~30% | ~55% (long+intermediate Treasuries) | ~15% | — | — | Smooth ride across regimes; lower expected return, higher bond reliance |
| **Aggressive long-horizon** | ~85% | ~5% | ~5% | ~5% | — | High-tolerance builder; equities do the work |
| **Core + crypto satellite** | ~75% | ~10% | ~5% | ~5% | ~5% | Core indexed; small convex crypto sleeve sized to survive −80% |

Reading them: the **All-Weather** trades return for a smoother ride (heavy bonds + gold balance growth and inflation shocks); the **three-fund** maximizes simplicity and cost-efficiency; the bottom two fit *this* profile — a high equity core, a thin gold hedge, a cash cushion, and a deliberately small crypto satellite. **The right one is whichever you can actually hold through a −50% drawdown without selling** — that constraint, not back-tested return, is what makes a model portfolio "yours." The deeper philosophical trade-offs behind these (indexing, factor tilts, contrarianism) are in [[Investment Strategies]].

## 🧩 A Build Checklist

A one-page version of the mechanics:

1. **Cushion first.** 3–12 months of expenses in cash, *outside* the risk portfolio. This is what lets you hold.
2. **Set strategic weights** from your horizon (10+ yr ⇒ high equity) and your *honest* drawdown tolerance — not the 110-minus-age formula in isolation.
3. **Diversify by return driver,** not ticker count: a growth engine (equities/ETFs), ballast (bonds), a crisis hedge (gold), and a cushion (cash). Add income/inflation (REITs) and a convex satellite (crypto) to taste.
4. **Size satellites by their drawdown,** not their upside: a crypto sleeve small enough that −80% is a flesh wound (e.g. ≤5–10%).
5. **No leverage** in the long-term portfolio — it manufactures forced selling.
6. **Rebalance by rule:** check quarterly, act on ±5pp bands; rebalance with new cash first; mind taxes in taxable accounts.
7. **Stress-test:** compute the portfolio after −22% / −35% / −50% (the bear-note medians). If any result would force or panic you into selling, your risk weight is too high *today*.
8. **Write the plan down** ([[Bear Markets — 100 Years of History]]) so in a panic you *execute*, never *decide*. The biases that wreck step 6 in real time are catalogued in [[Cognitive Biases in Investing]] and [[Investing Psychology]].

## Glossary

- **Asset allocation** — the split of capital across asset classes (equities, bonds, cash, gold, real estate, crypto). The dominant driver of return *variability*.
- **Strategic (SAA) vs tactical (TAA) allocation** — long-term target weights, held vs short-term deliberate tilts away from them.
- **Diversification** — combining assets of *different* character to cancel specific risk and lower portfolio volatility below the weighted average.
- **Specific vs systematic risk** — diversifiable (one holding) vs undiversifiable (the whole market / macro).
- **Correlation** — co-movement of two assets, −1 to +1. Low/negative = good diversifier. Spikes toward +1 in crises.
- **Covariance** — the unscaled co-movement term that, with variances, sets portfolio risk in MPT.
- **Modern Portfolio Theory (MPT)** — Markowitz's mean–variance framework: optimize expected return for a given risk via the covariance structure.
- **Efficient frontier** — the set of portfolios giving the most return per unit of risk.
- **Sharpe ratio** — excess return ÷ volatility; risk-adjusted return in one number.
- **Glide path** — a rule that shifts allocation (usually equity↓) as you age; "110/120 minus age."
- **Rebalancing** — restoring target weights; mechanically sells high / buys low. Calendar vs threshold (band) triggers.
- **Rebalancing bonus** — small extra return from systematically harvesting volatility via rebalancing.
- **Ballast** — bonds' role of dampening drawdowns (works for growth shocks, not inflation shocks).
- **Cushion / ammunition** — emergency cash outside the portfolio: prevents forced selling and funds buying the dip.
- **Satellite (core-satellite)** — small high-conviction / high-vol position around a broad indexed core.
- **Position sizing** — choosing a position's size so its worst plausible drawdown is survivable.
- **Risk parity** — allocating by *risk contribution* rather than dollars (the All-Weather idea).
- **Fat tails** — crashes are more frequent/severe than a normal distribution predicts; the main reason MPT under-states real risk.

## 📖 Further reading/watching

- Brinson, Hood & Beebower, "Determinants of Portfolio Performance", *Financial Analysts Journal*, 1986 (and BHB II, 1991)
- Roger Ibbotson & Paul Kaplan, "Does Asset Allocation Policy Explain 40, 90, or 100 Percent of Performance?", *FAJ*, 2000
- Harry Markowitz, "Portfolio Selection", *Journal of Finance*, 1952; William Sharpe (Sharpe ratio, CAPM)
- Vanguard, "The Rebalancing Edge: Optimizing Through Threshold-Based Strategies", Dec 2024
- State Street Global Advisors, "Gold as a Strategic Asset Class" & "Rethinking the Role of Bonds in Multi-Asset Portfolios"
- Morningstar, "3 Assets That Might Not Diversify as Well as You Think"
- BlackRock Investment Institute, "Sizing Bitcoin in Portfolios"
- Pfau & Kitces, "Reducing Retirement Risk with a Rising Equity Glide Path" (2013)
- Bogleheads wiki — "Three-fund portfolio" & "Rebalancing"; Ray Dalio, *Principles* / All-Weather (Bridgewater)
- Related: [[Investment Strategies]] · [[Investing Psychology]] · [[Cognitive Biases in Investing]] · [[Bear Markets — 100 Years of History]] · [[Crypto Market State 2026]]

---
Template: [[templates/knowledge_note_info]]
