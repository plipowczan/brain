---
title: "Polish Investor Taxes 2026"
date: 2026-11-13
enableToc: true
openToc: true
tags: ["knowledge", "info", "investments", "taxes", "poland", "pit-38", "ike", "ikze", "crypto", "research"]
type: knowledge-note
source: "_raw/research-workspaces/polish-investor-taxes-2026/report.md"
agent-created: true
summary: "How a Polish resident investor is taxed for 2026: Belka 19%, who withholds, PIT-38 and loss carry-forward, foreign dividends and W-8BEN, IKE/IKZE/OIPE limits for 2026 and 2027, crypto in PIT-38, DAC8 reporting, OKI from 2027, levy and exit tax. Statute-based, with dates."
---

# Polish Investor Taxes 2026

## 🗒️ Description

This note is my map of how a Polish tax resident who invests privately is taxed for **tax year 2026**, with the return filed in spring 2027. It is built from primary texts: the consolidated PIT Act (Dz.U. 2026 poz. 592, law as of 1 April 2026), the IKE/IKZE Act (Dz.U. 2026 poz. 91), the Monitor Polski limit notices, the Ministry of Finance PIT-38 brochure for 2025, the DAC8 act and the OKI act. Where only a secondary source was available, or official sources conflict, I say so.

It is knowledge, not tax advice. It describes how the rules work and where they are disputed; it does not tell anyone what to buy or which account to use. [[My Investment Strategy]] applies some of this to my own accounts; the numbers there stay in my private notes.

**TL;DR**

- **One rate, two collection routes.** Capital income is taxed at a flat **19%** ("Belka"). Deposit interest, Polish dividends and bond coupons on Polish accounts are **withheld at source**; capital gains (shares, ETFs, derivatives, fund redemptions, crypto) are **self-assessed in PIT-38**.
- **Correction to common belief:** since **1 Jan 2024** Polish TFI fund redemptions are **not** taxed at source. The fund pays gross, sends a PIT-8C, and the investor settles in PIT-38.
- **Deadline for 2026 income: 30 April 2027** (a Friday), for both the return and the payment.
- **Losses** on securities carry forward 5 years, at most 50% a year, or once up to PLN 5 million. **Crypto is a separate basket** with no "loss": unused costs roll forward without a time limit and never offset securities.
- **Foreign dividends:** with a W-8BEN the US withholds 15%, and the remaining 4% is still due in PIT-38 section G. No Polish broker tops it up.
- **Wrappers, 2026 limits:** IKE **28,260 PLN**, OIPE **28,260 PLN** (separate), IKZE **11,304 PLN** or **16,956 PLN** for the self-employed. For 2027: IKE 30,099 PLN, IKZE 12,039.60 / 18,059.40 PLN.
- **New from 2027: OKI**, a personal investment account with a small asset-value tax instead of Belka, exemption capped at 100,000 PLN of qualified (PLN) assets. Foreign global ETFs do not qualify.
- **DAC8 is live:** crypto platforms collect data for all of 2026 and report by 30 June 2027; the data reach the tax office after the PIT-38 deadline, which does not change what must be filed.

## 🔗 Links

- [[My Investment Strategy]] — my accounts and the open IKE/IKZE decision
- [[Choosing an ETF]] — domicile, withholding tax and accumulating vs distributing in practice
- [[Rebalancing — Threshold vs Calendar]] — rebalancing inside wrappers first to avoid realising tax
- [[Position Sizing and Loss Limits in a Speculative Sleeve]] — how loss limits interact with PIT-38 baskets
- [[Crypto Custody and Exchanges in the EU after MiCA]] — the Zondacrypto collapse and what it means for PIT-38
- [[My Crypto Strategy]] · [[Investment Strategies]]

## 🧩 Belka Tax — Who Withholds and Who Files

| Income | Rate | Who pays | Where it shows |
|---|---|---|---|
| Bank deposit and savings interest | 19% | Bank withholds | Nothing to file |
| Polish dividends on a brokerage account | 19% | Broker keeping the account withholds (art. 41 ust. 4d) | Nothing to file |
| Bond coupons and, since 2024, redemption gains on a Polish broker account | 19% | Broker withholds (art. 30a ust. 1 pkt 2a) | Nothing to file |
| Polish retail treasury bonds (EDO, COI…) | 19% | DM PKO BP withholds (MF bond FAQ) | Nothing to file |
| Fund payouts **without** redeeming units | 19% | Fund withholds (art. 30a ust. 1 pkt 5) | Nothing to file |
| **Fund redemptions (TFI), since 1 Jan 2024** | 19% | **Investor**, from the fund's PIT-8C | PIT-38 part C |
| Sale of shares, ETFs, bonds; derivatives | 19% | Investor | PIT-38 part C |
| Crypto sold for fiat, goods or services | 19% | Investor | PIT-38 part E |
| Foreign dividends and interest | 19% minus foreign tax credit | Investor | PIT-38 section G |
| Interest on a private loan | 19% | Investor | PIT-38 poz. 46 |

Points that trip people up:

- **Switch vs conversion.** A switch between sub-funds of the *same umbrella* fund is tax-neutral (art. 17 ust. 1c). A conversion between separate funds is a taxable redemption.
- **Dividends and interest are a separate, gross income** (art. 30a). Share or derivative losses cannot reduce them.
- **Rounding.** Tax on interest rounds *up* to the full grosz (Ordynacja art. 63 § 1a); everything else rounds to the full złoty.

## 🧩 PIT-38: Filing, Dates and Loss Carry-Forward

- **Filing window for 2026 income:** 15 February – 30 April 2027. Tax is paid by the same date (art. 45 ust. 1, 1a and 4 pkt 2).
- **PIT-8C** from Polish brokers and funds: to the tax office by end of January, to the investor by end of February (art. 42g).
- **Twój e-PIT** pre-fills PIT-38 from 15 February, but auto-accepts it only if every revenue and cost came from a PIT-8C (art. 45cd ust. 4). Anyone with a foreign broker or crypto has to complete and file it.
- **Which day's FX rate.** Each revenue and cost is converted separately at the NBP average rate from the last business day *before* the revenue or cost date (art. 11a). Art. 17 ust. 1ab ties revenue to the transfer of ownership, which for exchange-traded securities is the **settlement date** (T+2 in the EU, T+1 in the US), not the trade date. A late-December trade that settles in January belongs to the next year.
- **Securities and derivatives are one basket** (art. 30b ust. 1); only crypto is separate.
- **Losses** (art. 9 ust. 3 and 6): deducted over the next 5 tax years, either at most 50% of the loss in any one year, or once up to PLN 5 million in one of those years with the rest under the 50% rule. Losses on fund redemptions count only from 2024, when redemptions moved into PIT-38.
- **File in a loss year.** A PIT-38 showing the loss is what makes it usable later.
- **No joint filing** of PIT-38 with a spouse (art. 6 ust. 2 covers only scale income).
- **Foreign broker gains:** most advisers attach PIT/ZG even when no foreign tax was paid; some say it is not needed because treaties give gains only to Poland. Filing it is the low-risk choice.

*Illustration (round numbers):* PIT-8C income of 20,000 PLN plus a foreign-broker gain of 9,000 PLN gives 29,000 PLN in part C. With a 40,000 PLN loss left from 2025, the 50% route deducts 20,000 (tax 1,710 PLN, 20,000 left for later); the one-off route deducts the full 29,000 (tax 0, 11,000 left under the 50% rule).

## 🧩 Foreign Dividends and the Withholding Tax Credit

- **How it works.** Polish tax is 19% of the gross foreign dividend; the foreign tax paid is credited, capped at the 19% (art. 30a ust. 9). Polish brokers are payers only for income obtained in Poland (art. 41 ust. 4d), so **no Polish broker withholds the difference** (mBank 2020; a broker survey by ppcg.com.pl, Oct 2025).
- **US shares.** The 1974 Poland–USA treaty sets dividends at 15%. With a valid W-8BEN the US withholds 15% and 4% is due in PIT-38; without it the US withholds 30%. The W-8BEN matters for directly held US shares; inside an Irish-domiciled ETF it changes nothing (see [[Choosing an ETF]]).
- **The credit cap is disputed.** The tax authority (a DKIS interpretation of Nov 2021) caps the credit at the treaty rate. Courts read the statute literally and cap it only at 19%: WSA Gliwice I SA/Gl 24/22 (19 May 2022), NSA II FSK 1171/22 (28 Feb 2023), NSA II FSK 1302/22 (24 Jun 2025). The conservative route is to credit the treaty rate and reclaim the excess from the source country. Example: Switzerland withholds 35%, the treaty rate is 15%, so the investor credits 15% and reclaims 20% from the Swiss authority.
- **FX:** NBP rate from the last business day before the pay date, for the dividend and the foreign tax alike (art. 11a ust. 1 and 3).
- **Where:** PIT-38 section G (in PIT-38(18): poz. 47 tax at 19%, poz. 48 tax paid abroad, poz. 49 difference). PIT-36 is also allowed (art. 30a ust. 11). **No PIT/ZG** is attached for dividends or interest.
- **Interest on idle cash at a foreign broker** is taxed the same way (art. 30a ust. 1 pkt 3).

*Illustration:* a 1,000 USD US dividend with 15% withheld, at an assumed NBP rate of 4.00, gives a 4,000 PLN base, 760 PLN Polish tax, a 600 PLN credit and **160 PLN due**.

## 🧩 IKE, IKZE and OIPE — the Tax Wrappers

| | IKE | IKZE | OIPE (Polish sub-account of PEPP) |
|---|---|---|---|
| Limit 2026 | **28,260 PLN** (M.P. 2025 poz. 1202) | **11,304 PLN**; **16,956 PLN** for non-agricultural business (M.P. 2025 poz. 1156) | **28,260 PLN**, separate from IKE (M.P. 2025 poz. 1151) |
| Limit 2027 | **30,099 PLN** (M.P. 2026 poz. 1081, 3 Nov 2026) | **12,039.60 / 18,059.40 PLN** (M.P. 2026 poz. 1062, 30 Oct 2026) | 30,099 PLN by the statutory formula; notice not yet found |
| Basis | 3 × forecast average wage | 1.2× / 1.8× forecast average wage | Same formula as IKE |
| Tax on entry | None | Contribution **deducted** from income at your marginal rate (PIT/O) | None |
| Tax inside | No Belka | No Belka | No Belka |
| Qualifying withdrawal | **0%** at 60, or 55 with pension rights, after contributions in 5 calendar years or with over half paid 5+ years earlier (art. 34) | **10% flat** after 65, with contributions in 5 calendar years (art. 34a) | **0%** at 60, or 55 with pension rights, on the same 5-year contribution test (OIPE act art. 14; PIT art. 21 ust. 1 pkt 58aa) |
| Early withdrawal | 19% on the gain, withheld | Whole amount added to scale income (12% / 32%) | 19% on the gain, withheld (art. 30a ust. 1 pkt 10a) |
| Accounts | One per person; a second one costs 75% | One per person | One Polish sub-account per person; a second one costs 75% (art. 30 ust. 1 pkt 7b) |

Rules worth knowing:

- **Contribution years, not account age.** IKE needs contributions in at least 5 *calendar years* (not necessarily consecutive), or more than half of contributions made 5+ years before the request. "Five years of saving" is a common misreading.
- **A second IKE or IKZE is costly.** A second IKE triggers 75% tax on the income of each (art. 30 ust. 1 pkt 7a). Change provider only by transfer.
- **IKZE deadline is credit date.** Contributions count for 2026 only if credited by 31 Dec 2026; providers often set earlier cut-offs. Excess contributions are returned and give no deduction; an unused limit is lost.
- **The higher IKZE limit** needs non-agricultural business activity under art. 8 ust. 6 of the social insurance act. Whether the activity must run all year is not settled by the statute text.
- **The deduction is not automatic.** It goes on PIT/O with the annual PIT-37, PIT-36, PIT-36L or PIT-28; nothing goes into PIT-38. On a flat-rate (ryczałt) return, the same contribution saves less.
- **Transfers.** Only the whole IKE balance can be transferred. IKE → OIPE is allowed unless the IKE ever had a partial withdrawal or received money from an employee pension programme (PPE); the first such transfer does not count against the OIPE limit. Money cannot move between IKZE and IKE or OIPE. Sources differ on the reverse direction: the OIPE research reads OIPE → IKE as impossible, the IKE research as allowed only in cases the OIPE act sets.
- **Inheritance.** IKE and IKZE funds are outside inheritance tax (Dz.U. 2026 poz. 478, art. 3 pkt 6); IKZE payouts to beneficiaries are taxed at 10%.
- **There is no "OIPE-IKZE".** OIPE has a single Polish sub-account (OIPE act, Dz.U. 2023 poz. 1843, in force since 26 Sep 2023). A person 55 or older with pension rights cannot open one.
- **OIPE in practice.** The EU PEPP regulation caps the fees of the Basic PEPP at 1% a year (Reg. 2019/1238 art. 45(2)). I could identify only one provider of a Polish sub-account (Finax); Infor.pl reported about 7,500 savers at the end of Oct 2025.

*Illustration:* an employee in the 32% bracket who pays the full 11,304 PLN into an IKZE saves 3,617.28 PLN of tax for 2026; at the 12% rate the saving is 1,356.48 PLN. The 10% exit tax is the price.

## 🧩 Crypto in PIT-38

- **What is taxed** (art. 17 ust. 1 pkt 11, art. 30b ust. 1a): exchanging crypto for fiat, goods, services or property rights other than crypto, and paying with crypto. **Crypto-to-crypto swaps are not taxable** (crypto-to-stablecoin included, under the current reading).
- **When.** Revenue arises at the trade, not at withdrawal: art. 11 ust. 1 carves crypto out of the cash rule. KIS rulings in 2026 apply this hard: revenue on a fraudulent platform arises even if the cash was never paid out (23 Jun 2026); a sale left unwithdrawn on a failed exchange is still revenue, and the lost PLN is not deductible (22 Jul 2026).
- **Costs.** All documented purchase costs of the year are deducted, not per-coin FIFO lots. Swap fees are not deductible (art. 23 ust. 1 pkt 38d). **Excess costs roll into the next year with no time limit** (art. 22 ust. 16).
- **No crypto loss.** Art. 9 ust. 3a pkt 2 excludes crypto from loss carry-forward, and art. 30b ust. 5d keeps it out of the securities basket.
- **File PIT-38 even with purchases only** (art. 30b ust. 6a). Otherwise the costs drop out of the chain.
- **Gifts and services.** Crypto received as a gift has a **zero cost basis**; the gift-tax value is not a cost (KIS, 30 Jun 2026). Crypto received for services has a cost equal to the settled receivable (KIS, 14 Sep 2026).
- **Form:** PIT-38 part E (poz. 36–40 in the 2025 form) and part F.
- **Zondacrypto.** Withdrawals froze in April 2026; the Estonian FIU revoked the operator's licence on 29 Jun 2026; a Tallinn court declared BB Trade Estonia OÜ bankrupt on 27 Aug 2026. The MF commented on missing exchange data on 28 May 2026. See [[Crypto Custody and Exchanges in the EU after MiCA]].

*Illustration:* bought for 20,000 PLN in 2025 and sold nothing (PIT-38 filed, 20,000 carried). In 2026 bought 10,200 PLN more, swapped BTC → ETH → USDT, then sold USDT for 50,000 PLN. Income = 50,000 − 10,200 − 20,000 = 19,800 PLN, tax 3,762 PLN. A loss on shares the same year does not reduce it.

## 🧩 DAC8 and CARF Reporting

- **Law.** Act of 13 Feb 2026, Dz.U. 2026 poz. 347, in force **18 Mar 2026**. It adds a new division to the tax information exchange act (art. 88e–88zu).
- **Scope in time.** 2026 is the first reporting period and covers **the whole year**, including trades before 18 March (art. 9–10).
- **Dates.** Crypto-asset operators register by 31 Mar 2027 and report to KAS by **30 Jun 2027**; KAS exchanges data with other states by 30 Sep 2027. Existing clients must self-certify; after **31 Dec 2026** a non-responding client's account is blocked for reportable transactions.
- **Content.** Gross flows and swaps per crypto-asset, transfers to unhosted wallets, fair market values. **No cost basis and no gain.** The report is not a tax return.
- **Effect on 2026 PIT-38.** None in law: the data arrive after 30 Apr 2027, and PIT-38 must still be filed on its own. Foreign EU exchanges report in their home state and the data reach KAS through the exchange.
- **Penalties** for operators up to PLN 1,000,000 (art. 90c with art. 91 ust. 1).

## 🧩 OKI — Personal Investment Accounts from 2027

- **Law.** Act of 3 Jul 2026, Dz.U. 2026 poz. 1098 (signed 13 Aug, published 18 Aug 2026), in force **1 Jan 2027**. Nothing can be opened in 2026.
- **Model.** Income from OKI assets is outside the PIT Act altogether (new art. 2 ust. 1 pkt 10). Instead there is an annual **asset-value tax** on the average daily value above the exemption: **0.85% for 2027** (art. 43); from 2028, 19% of the NBP reference rate on 31 October of the prior year, with a 0.1% floor (art. 25).
- **Exemption.** Up to **100,000 PLN combined** (not 125,000): savings assets are exempt up to 25,000 PLN and used first; qualified investment assets fill the rest (art. 26 ust. 2).
- **What qualifies:** PLN-denominated shares (the company's share capital must be in PLN), non-structured PLN bonds, covered bonds, T-bills, PLN cash, and funds whose investment policy commits to at least **70% qualified assets**. A PLN-traded S&P 500 or MSCI World ETF does **not** qualify; neither do about 40 GPW companies with non-PLN share capital.
- **Other assets** in EU, EEA or OECD currencies may be held (art. 14) but are taxed from the first złoty.
- **Mechanics.** Cash deposits only (no transfer of securities in), withdrawals free at any time, losses are not PIT losses. The institution reports by end of February; the taxpayer files via e-Urząd Skarbowy between 15 March and 31 May and pays by 31 May.
- **Moving a taxable portfolio in** means selling it and paying Belka first. A December 2026 sale is due 30 Apr 2027; a January 2027 sale is due 30 Apr 2028.
- **Draft vs final.** The draft (UD296) planned a 1 July 2026 start, one account per person until 2027 and halved limits. The final act dropped all three, so older articles are out of date.

## 🧩 High-Income and Exit Overlays

- **Solidarity levy** (art. 30h): 4% of income above PLN 1,000,000. Capital gains under art. 30b count, including crypto and fund redemptions; **dividends and interest (art. 30a) do not**. Filed on DSF-1 by 30 Apr 2027.
- **Exit tax** (art. 30da–30df): 19% of the unrealised gain when moving tax residence, for people resident at least 5 of the last 10 years, if the **market value** of shares, securities, derivatives and fund units exceeds PLN 4,000,000 (a value threshold, not a gain threshold). Declared by the 7th of the following month; instalments up to 5 years for EU/EEA moves; refunded on return within 5 years.
- **Statute of limitations** (Ordynacja art. 70): 5 years from the end of the year the payment fell due, so **31 Dec 2032** for 2026 PIT-38. Notified fiscal penal proceedings stop the clock.
- **Fixing a mistake.** A correcting return plus payment (art. 16a KKS), or *czynny żal* (art. 16 KKS) before the authority has documented knowledge. Late-payment interest is 10.5% a year now, halved if the correction is filed within 6 months of the deadline and paid within 7 days (art. 56a).

## ☘️ What I Take From It

- **Two calendars matter for 2026:** the **31 Dec 2026** cut-off (IKE/IKZE/OIPE contributions, loss harvesting before OKI exists, DAC8 self-certification) and **30 Apr 2027** (PIT-38, DSF-1, IKZE deduction).
- **Wrapper limits are use-it-or-lose-it.** None of the three carries an unused limit forward, and the 2027 limits are already published.
- **The tax baskets shape risk rules.** A crypto loss never offsets a stock gain, so a combined "speculative sleeve" is two tax worlds ([[Position Sizing and Loss Limits in a Speculative Sleeve]]).
- **The broker does less than it seems.** Foreign brokers send no PIT-8C, Polish brokers do not top up foreign dividends, and since 2024 funds do not withhold on redemptions. The return is mine to complete.
- **Keep records per leg:** trade and settlement dates, NBP rates, fees, and for crypto every fiat purchase and every disposal. DAC8 will show gross flows without costs; the costs have to come from me.

## ✍️ Evidence Check

| Claim | Source | Status |
|---|---|---|
| TFI redemptions self-assessed since 2024 | Dz.U. 2023 poz. 1059 art. 4, 29; PIT Act art. 30b ust. 1 pkt 5 | Primary text; corrects older guides |
| 2026 limits IKE 28,260 / IKZE 11,304–16,956 / OIPE 28,260 | M.P. 2025 poz. 1202, 1156, 1151 | Primary notices |
| 2027 limits IKE 30,099 / IKZE 12,039.60–18,059.40 | M.P. 2026 poz. 1081, 1062 | Primary notices |
| 2027 OIPE limit 30,099 | Statutory formula | Notice not found in M.P. as of 13 Nov 2026 |
| Foreign tax credit capped at treaty rate | DKIS Nov 2021 vs NSA II FSK 1171/22 and 1302/22 | **Disputed**; courts favour 19% cap |
| Crypto excess costs roll forward without limit | Art. 22 ust. 16; podatki.gov.pl (updated 24 Jun 2026) | Primary text |
| Gifted crypto has zero cost basis | KIS 0113-KDIPT2-3.4011.384.2026.1.JS (30 Jun 2026) | Interpretation, read via secondary summaries |
| DAC8 in force 18 Mar 2026, report by 30 Jun 2027 | Dz.U. 2026 poz. 347 art. 9, 10, 13, 88l | Primary text (rp.pl's "14 days" was a draft) |
| OKI exemption 100,000 PLN combined | Dz.U. 2026 poz. 1098 art. 26 ust. 2 | Primary text; some headlines say 125,000 |
| Solidarity levy excludes dividends | PIT Act art. 30h ust. 2 | Primary text; popular summaries say "all capital income" |

**What I could not confirm.**

- The PIT-38 form version and field numbers for tax year 2026 (the field numbers above are from the 2025 form PIT-38(18)).
- KIS's own position on trade date vs settlement date for the FX rate; the settlement-date reading comes from art. 17 ust. 1ab and the MF brochure.
- Whether the one-off PLN 5 million loss deduction combines with the 50% cap in later years exactly as described; commentaries differ.
- Whether the 19% credit cap applies per payment, per country or in aggregate, and the Swiss and German reclaim procedures.
- PIT treatment of EMT stablecoins under MiCA, staking, airdrops, and payouts from a bankruptcy estate such as Zondacrypto's.
- Whether the OKI act has been amended since publication (its ELI metadata changed on 26 Oct 2026), and how dividend withholding will work inside OKI.
- Whether Poland has signed the CARF multilateral agreement and whether MF has published the DAC8 XSD schema.
- Five PIT Act amendments made after the April 2026 consolidated text were not read.
- No KIS interpretations or NSA judgments on IKZE or OIPE were found in this run: edge cases of the 1.8× IKZE limit (part-year business activity), whether the add-back rule (art. 45 ust. 3a) applies on an IKZE early withdrawal, and the information form used for it.
- Whether any provider other than Finax offers an OIPE Polish sub-account (the EIOPA PEPP register could not be read).

## 📖 Further reading/watching

- PIT Act, consolidated text Dz.U. 2026 poz. 592 (30 Apr 2026) — https://eli.gov.pl/eli/DU/2026/592
- IKE/IKZE Act, consolidated text Dz.U. 2026 poz. 91 (28 Jan 2026) — https://eli.gov.pl/api/acts/DU/2026/91/text/T/D20260091L.pdf
- IKE 2026 limit notice, M.P. 2025 poz. 1202 — https://api.sejm.gov.pl/eli/acts/MP/2025/1202
- IKE 2027 limit notice, M.P. 2026 poz. 1081 — https://api.sejm.gov.pl/eli/acts/MP/2026/1081
- IKZE 2026 limit notice, M.P. 2025 poz. 1156 — https://eli.gov.pl/eli/MP/2025/1156/ogl/pol/pdf
- IKZE 2027 limit notice, M.P. 2026 poz. 1062 — https://api.sejm.gov.pl/eli/acts/MP/2026/1062/text.pdf
- OIPE 2026 limit notice, M.P. 2025 poz. 1151 — https://eli.gov.pl/eli/MP/2025/1151/ogl/pol/pdf
- OIPE Act, consolidated Sejm print (8 Oct 2026) — https://api.sejm.gov.pl/eli/acts/DU/2023/1843
- Ministry of Finance, "Ulga na IKZE (PIT)" (updated 23 Oct 2026) — https://podatki.gov.pl/ulgi-i-odliczenia/ulga-na-ikze-pit
- IKE limit history, gov.pl — https://www.gov.pl/web/rodzina/ike-limit-wplat
- Slim VAT 3 act (fund redemption change), Dz.U. 2023 poz. 1059 — https://eli.gov.pl/eli/DU/2023/1059
- MF brochure to PIT-38 for 2025 — https://podatki-arch.mf.gov.pl/media/11079/broszura-do-pit-38-za-2025-r.pdf
- podatki.gov.pl, "Zbycie kryptowalut" (updated 24 Jun 2026) — https://www.podatki.gov.pl/podatki-osobiste/pit/informacje-podstawowe/co-jest-opodatkowane/zbycie-kryptowalut
- DAC8 act, Dz.U. 2026 poz. 347 — https://eli.gov.pl/eli/DU/2026/347/ogl
- OKI act, Dz.U. 2026 poz. 1098 — https://eli.gov.pl/eli/DU/2026/1098
- Poland–USA tax treaty, Dz.U. 1976 nr 31 poz. 178 — https://eli.gov.pl/api/acts/DU/1976/178/text/O/D19760178.pdf
- NSA II FSK 1171/22 (28 Feb 2023), reported by Prawo.pl — https://www.prawo.pl/podatki/odliczenie-podatku-zaplaconego-za-granica-wyrok-nsa,521976.html
- MF retail treasury bond FAQ — https://www.obligacjeskarbowe.pl/faq/

---
Template: [[templates/knowledge_note_info]]
