---
title: "Crypto Custody and Exchanges in the EU after MiCA"
date: 2026-11-13
enableToc: true
openToc: true
tags: ["knowledge", "info", "crypto", "mica", "regulation", "custody", "exchanges", "self-custody", "poland", "stablecoins", "research"]
type: knowledge-note
source: "_raw/research-workspaces/crypto-custody-eu-mica/report.md"
agent-created: true
summary: "What MiCA protects and what it does not, for an EU retail crypto holder after the transitional period ended on 1 Jul 2026: CASP custody duties, Poland's missing regulator, stablecoins and USDT, travel rule, the Zondacrypto collapse, how to verify a provider, self-custody and pending EU changes."
---

# Crypto Custody and Exchanges in the EU after MiCA

## 🗒️ Description

From **1 July 2026** an EU resident can lawfully be served only by a crypto provider authorised under MiCA (Regulation (EU) 2023/1114). This note collects what that means for a retail holder, and in particular for a holder resident in **Poland**, which still has no national MiCA supervisor. It covers what a licensed custodian must do, what MiCA leaves unprotected, how to check a provider, how self-custody fits in, and what the Zondacrypto collapse showed.

It is knowledge and method, not a recommendation of any platform. Company names appear only as examples of how the rules play out. My own custody setup is described, without amounts, in [[My Crypto Strategy]].

**TL;DR**

- **The transitional period is over everywhere.** ESMA (17 Apr and 23 Jun 2026): after 1 July an unlicensed provider serving EU clients breaches EU law, even in a member state that never passed implementing law. It may only help clients exit.
- **A licence covers one legal entity, not a brand.** The same app can mix MiCA custody with unregulated lending, "earn" products or an offshore group company.
- **MiCA is not a deposit guarantee.** No deposit guarantee scheme and no investor compensation cover crypto-assets; the custodian's liability is capped at market value at the time of loss and is only as good as its solvency.
- **Poland has no competent authority for crypto providers.** The crypto-asset market act was vetoed three times (Dec 2025, Feb 2026, 11 Jun 2026) and the override failed on 4 Sep 2026. Polish residents are served only by providers passported from other EU states; the Polish VASP register is not a licence.
- **USDT is gone from regulated EU venues.** Tether never applied for authorisation; holding it in a self-hosted wallet is still legal.
- **Self-custody swaps counterparty risk for operational risk:** lost seeds, phishing, physical coercion and inheritance failure.
- **Zondacrypto** is the local lesson: an AML registration presented as a licence, years of red flags, and an Estonian bankruptcy in Aug 2026 with almost no assets found.

## 🔗 Links

- [[My Crypto Strategy]] — my rules, including the security and custody section
- [[CEX]] · [[Crypto Exchanges]] — what a centralised exchange is, and the ones I have used
- [[Polish Investor Taxes 2026]] — crypto in PIT-38, DAC8 reporting and the tax side of Zondacrypto
- [[Position Sizing and Loss Limits in a Speculative Sleeve]] — venue failure as the loss channel a stop cannot catch
- [[Crypto Market State 2026]] · [[Bitcoin]] · [[What mistakes I made on the crypto market in 2021-2022]]
- [[My Investment Strategy]]

## 🧩 MiCA in One Page

- **Who must be authorised.** Crypto-asset service providers (CASPs) need an authorisation from their home authority (Art. 59, 63). Banks, investment firms and some other financial entities can instead *notify* (Art. 60). A non-EU firm may serve an EU client only at that client's own exclusive initiative ("reverse solicitation"), which is narrow and does not cover a firm that markets to the client.
- **Passporting.** One authorisation works EU-wide once the provider notifies the host states (Art. 65). This is how Polish residents are served at all.
- **End of grandfathering.** Art. 143(3) let states keep national regimes for up to 18 months, ending no later than **1 July 2026**. ESMA Q&A 2220 (4 Jul 2024): a pending application does not extend it.
- **ESMA's wind-down expectations** (statement of 23 Jun 2026): unauthorised providers must stop onboarding and marketing at once, and limit themselves to selling, transferring or closing positions. Custody may continue only "for the period strictly necessary" to exit, and clients must be told the date after which leftover positions are closed automatically. These are supervisory expectations, not a statutory resolution regime.

**Capital classes (Annex IV).**

| Class | Minimum capital | Services |
|---|---|---|
| 1 | EUR 50,000 | Advice, order execution, placing, reception and transmission of orders, portfolio management, transfers |
| 2 | EUR 125,000 | Class 1 plus **custody** and exchange for funds or other crypto |
| 3 | EUR 150,000 | Class 2 plus running a trading platform |

**What an authorised custodian must do.**

- Keep client crypto segregated from its own and never use it for its own account (Art. 70(1)).
- Sign a custody agreement naming the parties, keep a custody policy (summary on request) and send a statement of positions at least every three months (Art. 75).
- Be liable for losses it causes, up to the market value at the time of loss (Art. 75(8)). It is not liable for incidents it shows were independent of its service, such as a failure of a blockchain it does not control.
- Run a complaints procedure (Art. 71). MiCA mandates no out-of-court dispute body; Art. 108 only lets clients complain to the authority.

## 🧩 What MiCA Does Not Protect

- **No deposit guarantee, no investor compensation.** Every white paper must say so (Art. 6(5), 19(4), 51(4)).
- **Lent-out assets.** Recital 94: MiCA does not regulate lending. ESMA Q&A 2883 (18 Jun 2026): safeguarding does not apply to lent assets, and lending needs express, specific consent. ESMA's response to the MiCA review (30 Sep 2026): custody and segregation "no longer apply once crypto-assets are lent out".
- **Staking.** Staking itself is unregulated. Staking *through* a provider is treated as part of custody (Commission answer, Q&A 2067, 20 Jun 2024), and the provider may not stake client assets for its own account, even with consent (Q&A 2607, 9 Jul 2025).
- **Side products on a licensed app.** ESMA's statement of 11 Jul 2025 warns about the "halo effect", where a licence makes unregulated products sold alongside it look safe.
- **DeFi.** Recital 22 excludes "fully decentralised" services and the regulation never defines the term.
- **Derivatives.** Crypto derivatives are financial instruments under MiFID II, not MiCA (Art. 2(4)).
- **Insolvency in practice.** Art. 75(7) requires segregation "in accordance with applicable law", so the outcome depends on the custodian's home state, and omnibus wallets depend on accurate records. The rules are largely untested in court.
- **Market losses, depegs, delisting.** None of these is a protected event.

## 🧩 Poland: the Implementation Gap

| Event | Date | Outcome |
|---|---|---|
| First veto of the crypto-asset market act | 1 Dec 2025 | Override failed 5 Dec 2025 |
| Second veto | 12 Feb 2026 | Override failed (243 for, 263 needed) |
| Third version passed by the Sejm | 15 May 2026 | Vetoed 11 Jun 2026 |
| Override vote | 4 Sep 2026 | Failed: 241 for, 266 needed |
| President's second own bill filed | 8 Sep 2026 | Nothing found after this date |

What follows from it, as of 13 Nov 2026:

- **No Polish authority can authorise CASPs.** The KNF says no Polish body, itself included, is designated for MiCA services; the only exception is issuers of e-money tokens (KNF notice updated 23 Jun 2026; UKNF position, Feb 2026). The 1 July deadline cannot be extended by national law or officials.
- **The VASP register is not a licence.** An entry in the Polish register of virtual-currency activity (kept by the Tax Administration Chamber in Katowice) is an AML registration. IAS Katowice (19 Jun 2026) and the Ministry of Finance (3 Jul 2026) both say it allows no activity after 1 July 2026. About 1,200 active entries lost their basis.
- **No Polish home-state CASP exists in the ESMA register.** Polish brands moved their licences abroad: for example Kanga operates through SIA AlphaRoute (Bank of Latvia, Class 3, 18 Jun 2026) and XTB through XTB Limited (CySEC, Cyprus).
- **Host-state tools have nobody behind them.** Precautionary measures (Art. 102) and sanctions against unlicensed firms need a designated authority, and the vetoed act's penalties never took effect.
- **Reported, single source:** Binance closes Polish accounts on 31 Dec 2026, with monthly fees from 29 Nov 2026 (crypto.news; Bankier headline). Binance withdrew its Greek MiCA application on 24 Jun 2026 (CoinDesk) and has no entry in the ESMA register as of 11 Nov 2026.

## 🧩 Stablecoins and the End of USDT on EU Venues

- **E-money tokens (EMTs)** may be issued only by a bank or an authorised e-money institution. Holders can redeem at par at any time, with no fee in normal times and no minimum (Art. 49(4)). Interest is banned for issuers and for providers (Art. 50). At least 30% of reserves sit in bank deposits, 60% for significant tokens.
- **What is not guaranteed.** An EMT is e-money, not a bank deposit, so no deposit guarantee covers it. The secondary-market price can de-peg even when redemption works, and MiCA sets no maximum redemption time (the EBA has seen T+1 to T+4).
- **USDT delisting.** Tether never applied. Regulated venues removed USDT step by step: Coinbase (Dec 2024), Crypto.com (Jan 2025), Kraken (Feb–Mar 2025), Binance EEA (31 Mar 2025), Revolut (purchases stopped 6 Jul 2026, auto-conversion 31 Aug 2026). OKX Europe added a one-way USDT-to-USDC conversion on 17 Jul 2026.
- **Who is authorised.** The EBA counted 39 EMTs and no authorised asset-referenced token as of 1 Sep 2026. USDC and EURC are issued by Circle's French e-money institution (ACPR).
- **Open fight: multi-issuance** (one token issued by an EU and a non-EU entity). The ESRB recommended against it (25 Sep 2025); the ESCB says MiCA gives no legal basis (Sep 2026); Parliament backed it with safeguards (9 Jul 2026). The Commission's MiCA review report is due by 30 Jun 2027.
- **Tax note.** Whether a swap into or out of an EMT stays tax-neutral under Polish PIT is unclear; see [[Polish Investor Taxes 2026]].

## 🧩 Travel Rule and Self-Hosted Wallets

- **Every transfer** from an EU provider carries originator and beneficiary data, with no minimum amount (Transfer of Funds Regulation (EU) 2023/1113, Art. 14). Transfers between self-hosted wallets with no provider involved are out of scope (Art. 2(4)).
- **Above EUR 1,000** to or from your own wallet, the provider must assess that you own or control it (Art. 14(5), 16(2)). Typical methods are signing a message, a small "Satoshi test" transfer, or an attended check (EBA guidelines EBA/GL/2024/11, applicable from 30 Dec 2024). A 2026 decision of Malta's financial arbiter suggests a self-declared checkbox is not enough (single vendor-blog source).
- **From 10 July 2027** the AML Regulation (EU) 2024/1624 bans anonymous accounts and privacy coins at providers (Art. 79) and sets customer due diligence at EUR 1,000 for one-off transactions.
- **The travel rule is an AML tool, not protection.** It compensates nobody for theft or scams, and fake "travel rule verification" pages are now a phishing pattern.

## 🧩 How to Check a Provider

1. **Find the contracting legal entity** in the terms of service: exact name, registration number, country, LEI. The brand or app name is not enough.
2. **Look it up in ESMA's interim MiCA register** (CASPS.csv on the ESMA MiCA page, updated weekly; still CSV files as of 11 Nov 2026). Check the home authority, the authorisation date, an **empty authorisation end date**, and that the service codes cover what you use (**a** = custody, **b** = trading platform, **c/d** = exchange, **j** = transfers).
3. **Check that Poland is among the host states** in the passport list.
4. **Check the non-compliant list** (NCASP.csv, about 216 entries) and the KNF public warning list. Absence from a warning list proves nothing.
5. **Check product by product.** Spot custody, staking, earn and futures can each sit with a different entity, and some may be explicitly unregulated.
6. **Ask for the custody policy summary** and check that quarterly statements arrive.
7. **Check enforcement history.** Authorisation is not proof of good controls: the Central Bank of Ireland fined Coinbase Europe EUR 21,464,734 for transaction-monitoring failures (6 Nov 2025, confirmed by the High Court 12 Jan 2026) and Coinbase Ireland, an e-money firm, EUR 3,252,618 for safeguarding failures (22 Oct 2026). ESMA's peer review of Malta's regulator (10 Jul 2025) rated its authorisation process only "partially meeting expectations".

**Red flags.** The entity is missing from the register or differs from the contract; custody code "a" is missing while the firm holds your coins; "licence pending", "grandfathered" or "registered VASP" after 1 July 2026; a "KNF crypto licence" (the KNF cannot issue one); yield on stablecoins at an EU-facing provider (interest on EMTs is banned); new terms moving you to a non-EU affiliate; any request for a seed phrase.

## 🧩 Self-Custody

- **Legal and unregulated** in the EU and Poland. Hardware and non-custodial wallet makers are read as outside MiCA (recital 83, as interpreted by commentators and the Danish FSA). The rules apply only where coins pass through a provider: the travel rule and DAC8 reporting of transfers to unhosted wallets.
- **What it trades.** Counterparty risk (insolvency, freeze, fraud) for operational risk: lost or destroyed backups, a forgotten passphrase, theft, coercion, and heirs who cannot reach the coins. Nobody can reverse a mistaken or phished transaction.
- **Dated incidents worth knowing:**
  - counterfeit hardware wallets with pre-set seeds (Kaspersky, May 2023);
  - the Ledger Connect Kit supply-chain attack (14 Dec 2023);
  - SparkCat and SparkKitty apps scanning phone galleries for seed phrases (Feb and Jun 2025);
  - the Bybit multisig "blind signing" theft of about USD 1.4–1.5 billion (21 Feb 2025);
  - letter and QR-code phishing aimed at hardware-wallet owners (Oct 2025 – Feb 2026);
  - Ledger customer data leaked through a partner (5 Jan 2026).
- **Physical coercion ("wrench attacks") is rising.** CertiK counted 72 in 2025 and 34 in Jan–Apr 2026, 82% of them in Europe. Leaked customer data feeds them.
- **Practice the sources converge on:** buy the device only from the maker or an authorised reseller; generate the seed on the device; never type, photograph or scan the seed; test recovery before funding; verify what you sign on the device screen; update firmware only through the official app.
- **Succession in Poland.** Crypto is an estate asset (Civil Code art. 922). A will goes into the court file (art. 646 Code of Civil Procedure), so it must never contain the seed; access instructions belong somewhere else, such as a notarial deposit (Notaries Act art. 108). Close family is exempt from inheritance tax only if form SD-Z2 is filed within 6 months, and that deadline cannot be restored. A KIS ruling of 12 Feb 2025 says heirs cannot deduct the deceased's purchase cost, so a sale is taxed at 19% on almost the whole amount.
- **Key-person risk is not only a personal problem.** Zondacrypto's cold wallet of about 4,500 BTC was reportedly controlled by a single founder missing since 2022; QuadrigaCX (Canada, 2019) failed the same way.

## 🧩 Case Study: Zondacrypto (formerly BitBay)

| Date | Event |
|---|---|
| 5 Feb 2018 | BitBay sp. z o.o. added to the KNF public warning list (payment services section) |
| May 2018 – Nov 2019 | Polish banks drop BitBay; operations move to Malta (never licensed there), then to Estonia |
| 5 Oct 2020 | Estonian FIU virtual-currency licence FVT000209 for BB Trade Estonia OÜ (an AML licence, not prudential supervision) |
| 2021–2024 | Disclaimed (2021) and qualified audit opinions; a reported EUR 75 million related-party loan; client liabilities far above cash |
| Early Apr 2026 | Withdrawals freeze |
| 17 Apr 2026 | Katowice prosecutors open a probe, later taken over by the National Prosecutor's Office |
| 29 Jun 2026 | Estonian FIU revokes the licence |
| 27 Aug 2026 | Harju County Court (Tallinn) declares bankruptcy; trustee Margus Lentsius |
| 27 Oct 2026 | Claim deadline; late claims rank third |

- **Scale.** At the September creditors' meeting the books showed about EUR 432 million of liabilities against about EUR 167 thousand of assets found. The trustee estimated total claims could approach EUR 700 million; about 5,000 claims worth EUR 40–43 million had been filed by 22 Oct. About PLN 125 million has been secured in Poland. No payout date exists, and the figures conflict.
- **What the holder now has.** An unsecured euro claim in a foreign insolvency, valued at the bankruptcy date, plus a possible compensation order in the Polish criminal case.
- **Why no rule caught it.** It was never MiCA-authorised, the Estonian FIU had no prudential mandate, the KNF had no power over crypto exchanges, and Poland has no CASP supervisor at all.
- **Tax trap.** KIS rulings of 2026 say a sale left unwithdrawn on a failed exchange is still taxable revenue, and the lost money is not a deductible cost ([[Polish Investor Taxes 2026]]).
- **Red flags that were visible:** the KNF warning, banks cutting the firm off, serial jurisdiction-hopping, an AML-only registration marketed as a licence, no proof of reserves, audit disclaimers, board resignations and consumer-authority (UOKiK) proceedings from Jan 2025. Several of these come from law firms that represent creditors.

## 🧩 Pending EU Changes

- **ESMA supervision of large providers** (Market Integration and Supervision Package). The Commission proposed it on 4 Dec 2025. The Council agreed key elements on 9 Oct 2026: only the most significant cross-border providers go to ESMA, after a two-year transition, with thresholds still unpublished. Parliament's committee vote is planned for 1 Dec 2026 (one source says 1 Nov). Nothing is in force, and no provider is "ESMA-supervised" today.
- **MiCA review.** Consultations ran 20 May – 31 Aug 2026 on DeFi, staking, lending, stablecoins and insolvency. ESMA (30 Sep 2026) asked for disclosure-based rules on staking and lending, a regulated "DeFi gateway" service, and powers to block websites and freeze assets. The Commission's report is due 30 Jun 2027.
- **DAC8** is in force since 1 Jan 2026; the first data exchange between states is due by 30 Sep 2027. Users who give no tax ID are blocked after two reminders and 60 days. Emails asking you to complete "DAC8 tax verification" through a link are phishing.
- **No proposal** reviewed adds a deposit guarantee or investor compensation for crypto-assets.

## ☘️ What I Take From It

- **Check the entity, not the brand.** The single most useful habit is matching the contract's legal entity against the ESMA register, service by service.
- **"Licensed" means less than it sounds.** A licence gives segregation, reporting and a liability claim, not a guarantee. Lending, earn and staking can quietly move assets out of custody protection.
- **For a Polish resident, supervision is always foreign.** Complaints go to a foreign provider and a foreign authority, in their language and procedure.
- **Exchange balances are working capital; self-custody is storage** — but only with a tested backup and a succession plan, because self-custody failure modes are irreversible. This is the split [[My Crypto Strategy]] already follows.
- **Venue risk belongs in position sizing.** A cap per venue is the only limit that would have helped a Zondacrypto client ([[Position Sizing and Loss Limits in a Speculative Sleeve]]).

## ✍️ Evidence Check

| Claim | Source | Status |
|---|---|---|
| Transitional period ended EU-wide 1 Jul 2026; unlicensed service is a breach even without national law | ESMA statements of 17 Apr and 23 Jun 2026 | Primary, read in full |
| No Polish competent authority for CASPs | KNF notice (updated 23 Jun 2026); UKNF position (Feb 2026) | Primary |
| VASP register entry is not a MiCA authorisation | IAS Katowice (19 Jun 2026); MF (3 Jul 2026) | Primary |
| Override failed 4 Sep 2026 (241 for, 266 needed) | Parkiet; Sejm records | Secondary; earlier vote dates differ slightly across sources |
| Lent-out assets lose custody protection | ESMA Q&A 2883; ESMA response of 30 Sep 2026 | Primary |
| Coinbase Europe fine EUR 21,464,734 | Central Bank of Ireland press release, 6 Nov 2025 | Primary |
| Zondacrypto licence revoked 29 Jun 2026, bankrupt 27 Aug 2026 | Estonian FIU notice; Prokuratura Krajowa; court case 2-26-14436 | Primary (FIU, prosecutor); bankruptcy filing via law firms |
| Zondacrypto asset and claim figures | Creditors' meeting reports, Bankier/PAP (28 Oct 2026) | Conflicting, press-reported |
| Binance closes Polish accounts 31 Dec 2026 | crypto.news; Bankier headline | Single secondary source |
| 39 EMTs, no authorised ART (1 Sep 2026) | EBA register | Primary |
| Wrench-attack counts | CertiK via Decrypt and Cointelegraph | Vendor data |

**What I could not confirm.**

- Anything on the Polish crypto-asset act after 8 Sep 2026: a fourth government draft was announced but I found no text or timetable. My own two searches on 13 Nov 2026 found nothing newer.
- An official ESMA count of authorised providers (third-party trackers say about 365–390 in Oct 2026). The register file was read through an automated summariser, so "no Polish home-state provider" and "no Binance entry" are very likely but not exhaustively checked.
- Whether the Polish Financial Ombudsman can handle disputes with passported foreign providers.
- Coinbase's exact CSSF authorisation date (the register shows 22 Jan 2026; other sources say June).
- The PIT treatment of EMT stablecoins, and whether Poland has set penalties for breaching the Transfer of Funds Regulation.
- The MiCA recital 83 reading on wallet makers was not checked in the Official Journal.

## 📖 Further reading/watching

- MiCA, Regulation (EU) 2023/1114 — https://eur-lex.europa.eu/eli/reg/2023/1114/oj
- ESMA statement on the end of transitional periods, ESMA75-113276571-1679 (17 Apr 2026) — https://www.esma.europa.eu/sites/default/files/2026-04/ESMA75-113276571-1679_Statement_on_the_end_of_transitional_periods_under_MiCA.pdf
- ESMA public statement, ESMA75-113276571-1710 (23 Jun 2026) — https://www.esma.europa.eu/sites/default/files/2026-06/ESMA75-113276571-1710_Public_Statement_MiCA_transitional_period_ends.pdf
- ESMA MiCA page and interim register — https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica
- ESMA list of grandfathering periods (Art. 143(3)) — https://www.esma.europa.eu/sites/default/files/2024-12/List_of_MiCA_grandfathering_periods_art._143_3.pdf
- KNF notice on the end of the transitional period — https://www.knf.gov.pl/komunikacja/komunikaty?articleId=98874&p_id=18
- UKNF position on crypto-asset supervision (Feb 2026) — https://knf.gov.pl/knf/pl/komponenty/img/Stanowisko_UKNF_nadzor_nad_kryptoaktywami_97115.pdf
- IAS Katowice, notice to clients of VASP-registered firms (19 Jun 2026) — https://www.gov.pl/web/ias-katowice/informacja-dla-klientow-podmiotow-wpisanych-do-rejestru-dzialalnosci-z-zakresu-walut-wirtualnych
- Ministry of Finance notice (3 Jul 2026) — https://www.gov.pl/web/finanse/informacja-dla-klientow-podmiotow-swiadczacych-uslugi-zwiazane-z-kryptoaktywami
- Transfer of Funds Regulation (EU) 2023/1113 — https://eur-lex.europa.eu/eli/reg/2023/1113/oj
- Estonian FIU, revocation of BB Trade Estonia's licence (29 Jun 2026) — https://fiu.ee/en/news/financial-intelligence-unit-revokes-operating-licence-virtual-currency-service-provider-bb
- Prokuratura Krajowa on the Zondacrypto investigation (2 Sep 2026) — https://www.gov.pl/web/prokuratura-krajowa/dalsze-dzialania-w-sledztwie-dotyczacym-zondacrypto
- Central Bank of Ireland, enforcement action against Coinbase Europe (6 Nov 2025) — https://www.centralbank.ie/news/article/press-release-enforcement-action-against-coinbase-europe-limited-6-November-2025
- ESMA fast-track peer review of CASP authorisation in Malta (10 Jul 2025) — https://www.esma.europa.eu/sites/default/files/2025-07/ESMA42-2004696504-8164_Fast-track_peer_review_on_a_CASP_authorisation_and_supervision_in_Malta.pdf
- ESCB response to the MiCA review (Sep 2026) — https://www.ecb.europa.eu/press/consultationresponse/pdf/ecb.conresp202609_micarreview.en.pdf
- European Parliament Legislative Observatory, market integration and supervision package — https://oeil.europarl.europa.eu/oeil/en/document-summary?id=1876144
- Bankier/PAP on Zondacrypto creditors (28 Oct 2026) — https://www.bankier.pl/wiadomosc/Wierzyciele-Zondacrypto-czekaja-na-rozliczenie-Syndyk-ma-tysiace-zgloszen-9219569.html
- money.pl on the President's second crypto bill (Sep 2026) — https://www.money.pl/gospodarka/weto-ws-kryptowalut-to-nie-koniec-nawrocki-wykonal-kolejny-ruch-7327143449434208a.html

---
Template: [[templates/knowledge_note_info]]
