---
title: "The Best AI Voice Recorder for Meetings — Research Report"
date: 2026-10-01
enableToc: true
openToc: true
tags: ["research", "compiled", "hardware", "ai", "voice-recorder", "transcription", "meetings", "polish", "gdpr", "whisper", "mcp"]
type: compiled-note
source: "research-en deep research — content/_raw/research-workspaces/ai-voice-recorders-meetings/"
agent-created: true
summary: "13 AI meeting recorders vs Polish, USB-C, no-subscription; HiDock P1 and DIY Whisper lead"
---

# The Best AI Voice Recorder for Meetings — Plaud, Boya, Pocket, UMEVO and Others

*Deep research report — 13 devices x 49 fields, generated 2026-10-01. 257 of 637 field values (40.3%) came back marked uncertain and are omitted from the device detail rather than stated as fact. 11 further devices were excluded at the screening stage.*

**Buyer and requirements.** Poland-based B2B consultant; meetings in Polish and English; transcription only (no AI summaries). Hard requirements, decided 2026-10-01: **R1** Polish transcription; **R2** a USB-C port on the device body (proprietary magnetic or pogo-pin cables, cases, cradles and Qi fail); **R3** no subscription — tier 1 = free in-app transcription indefinitely at ~20 h/month, tier 2 = the vendor app falls short but raw audio exports for local Whisper. Programmatic access (API/MCP) is the first tie-breaker. Scope: card and clip-on AI recorders, plus one DIY benchmark.

**Evidence discipline.** This category is saturated with affiliate listicles and vendor-supplied review units. Spec-sheet numbers are vendor claims unless an independent test reproduced them. Polish evidence is graded A (independent Polish test or leaderboard), B (vendor list names Polish), C (generic '100+ languages'). Prices were seen on 2026-10-01 and drift.

## 📒 Verdict

No device passes all three hard requirements — **Polish transcription (R1), a USB-C port on the device (R2), no subscription (R3)** — with strong evidence. Every finalist leaves either Polish quality or GDPR open. The ranking below orders devices by R1-R3 first, then Polish evidence, then programmatic access (API/MCP), the tie-breaker the buyer added.

1. **HiDock P1** — the only tier-1 pass: unlimited free transcription, native USB-C, Polish on the official 75-language list (OpenAI engine, grade B). Against it: data in the US with no EU option, speaker ID paywalled, no Polish retailer (import from hidock.com, VAT on delivery), and "lifetime free" is not contractual. Raw MP3 is reachable through community WebUSB tools, so a Whisper fallback exists.
2. **DIY: Sony ICD-TX660 + local Whisper large-v3** — the only route with grade-A Polish evidence (large-v3 ranks #1 on the AMU BIGOS, PELCRA and PolEval leaderboards) and zero GDPR exposure, because nothing leaves the laptop. Against it: no phone-call capture, a manual plug-in-and-run step per recording, and a 1-3 h one-time setup.
3. **Pocket** — the best programmatic access in the field (documented REST API, ~15 webhook events, official MCP, official Obsidian plugin) and a USB drive mode. Against it: zero Polish evidence, a weaker free-tier model, US-only hosting, and SOC 2 claims that pointed to a compliance vendor accused in Mar 2026 of issuing fake SOC 2 reports.
4. **SwitchBot AI MindClip** — EU storage, a documented REST API, webhooks and an MCP server in the official CLI, Polish on the official list, ships from a Polish warehouse. Against it: the USB-C port charges only, so every hour of audio for Whisper is a manual one-file export from the phone app.
5. **BOYA Notra** — easy to buy in Poland (x-kom), USB drive mode, Polish in the app's language list. Against it: the privacy policy says data is stored in China, and the free tier covers about a quarter of the needed minutes.

**Practical path:** buy HiDock P1 or Pocket from a seller with a 30-day return window, record one real 20-minute Polish meeting plus one Polish/English meeting, run the same audio through local Whisper large-v3, and keep whichever wins. If client confidentiality matters more than convenience, the DIY route is the answer outright.

**If R2 were relaxed** (magnetic charging accepted), **Plaud Note Pro** becomes the strongest pick: the only independent Polish hands-on test (qualitative, maker-requested), a free official MCP server and CLI on every plan, and an EU hosting claim (contested). **Comulytic Note Pro** would be the cheapest no-subscription option (unlimited free transcription, about €119 total over three years).

**By use case** (among devices that pass):
- **In-person meetings:** HiDock P1, BOYA Notra; for a conference-room table, Zoom H1essential in the DIY route.
- **Phone calls:** Pocket (contact mic), BOYA Notra (call mode, manual switch; phone cases weaken the far end), HiDock P1 (only via Bluetooth earbuds passthrough). The DIY recorders cannot capture calls.
- **Online calls:** keep the existing software capture (Tactiq, Wispr Flow). No passing device adds much here; a recorder next to the laptop speaker is a fallback, not a strategy.
- **Voice notes:** Sony ICD-TX660 (DIY), Pocket, SwitchBot MindClip (16.8 g clip).

## Requirements matrix

| Device | R1 Polish | R2 USB-C | R3 no subscription | API / MCP | Data location | Price (2026-10-01) | Verdict |
|---|---|---|---|---|---|---|---|
| [HiDock P1](#hidock-p1) | ✅ B — official 75-language list; OpenAI engine | ✅ port | T1 — unlimited free (non-contractual) | partial | US (Azure) | $169 (P1) / $119 (P1 mini); no Polish retailer | **PASS tier 1 (provisional)** |
| [Pocket](#pocket) | ❓ C — no list, no test | ✅ port + data | T1 on paper (weaker free model); T2 via USB drive | full on Pro / partial free | US | $139; 539 PLN | **PASS tier 2 (tier 1 if Polish works)** |
| [BOYA Notra](#boya-notra) | ✅ B — pl-PL in app code | ✅ port + data | T2 — USB drive (toggle per power cycle) | partial (undocumented MCP) | CN per policy; US-hosted per DNS | 699 PLN (x-kom); 589–650 PLN (morele) | **PASS tier 2** |
| [BOYA Notra Neo](#boya-notra-neo) | ✅ B — pl-PL in app code | ✅ port, charge only | T2 — app export only, no USB | partial (undocumented MCP) | CN per policy; US-hosted per DNS | €89; 399 PLN (Hurtel only) | **PASS tier 2 (weak)** |
| [FoCase Rec CR1](#focase-rec-cr1) | ❓ reseller copy only | ✅? reseller spec | T2 — USB WAV after app toggle | none | HK server → OpenAI | $79; 311 PLN (focase.net) | **PASS tier 2 (unverified)** |
| [DIY benchmark with local Whisper](#diy-benchmark-with-local-whisper) | ✅ A — Whisper large-v3 #1 on BIGOS | ✅ port + drive | T2 — by construction | full (local files) | local only | Sony ICD-TX660 699 PLN; Zoom H1essential 433 PLN | **PASS tier 2 (by construction)** |
| [Plaud Note Pro](#plaud-note-pro) | ✅ A — Telepolis hands-on (qualitative) | ❌ 4-pin magnetic | T2 — app export WAV/MP3 | full (free MCP + CLI) | EU (AWS Frankfurt) per vendor — contested | 815–829 PLN; €189 | **NEAR-MISS (fails R2)** |
| [Comulytic Note Pro](#comulytic-note-pro) | ❓ C — list unpublished | ❌ pogo pins | T1 — unlimited free; app export only | partial (Zapier beta) | US (AWS) | €118.99 (EU store) | **NEAR-MISS (fails R2)** |
| [UMEVO Note Plus](#umevo-note-plus) | ✅ B — FAQ names Polish | ❌ pogo pins | T2 — USB drive per FAQ (unconfirmed) | none | US (Alibaba Cloud US) | $119 (sale); no EU retail | **NEAR-MISS (fails R2)** |
| [SwitchBot AI MindClip](#switchbot-ai-mindclip) | ✅ B — official 30-language list | ✅ port, charge only | T2 — app export, one file at a time | partial (REST + webhooks + MCP, no audio) | EU storage (AWS DE); AI region undisclosed | €119.99; ships from PL warehouse | **PASS tier 2** |
| [Vibe Dot](#vibe-dot) | ❓ C — generic claim | ✅ port (vendor text) | T2 — app MP3; free-plan export unclear | partial (MCP beta, paid) | US (AWS us-west-2) | $199; ships to US only | **PASS tier 2 (weak; US-only sale)** |
| [iFLYTEK AI Recorder P1](#iflytek-ai-recorder-p1) | ❌ 11 languages, no Polish | ✅ port | unproven — no raw export documented | none | EU (DE/IE) | $119; 549.94 PLN (store) | **FAIL (no Polish)** |
| [GenSpark Second Brain Note](#genspark-second-brain-note) | ❓ C | ❌ 4-pin magnetic | FAIL — ≤900 min/month, no export | none | not researched (knocked out) | $179–199; no EU sale | **FAIL (R2 + R3)** |

**Excluded at the screening stage** (no deep research; reason from the Step-2 screen):

| Device | Reason |
|---|---|
| Plaud NotePin S | R2 FAIL — charges in a cradle; 300 min/month. Clip-on, CES 2026, $179. |
| Soundcore Work (Anker) | R2 FAIL (coin charges in case; only case has USB-C); R3 FAIL (300 min/month and recordings cannot be exported by cable). €177.99. |
| Mobvoi TicNote (+ TicNote Card Lite) | R2 FAIL — proprietary magnetic charger; 300 min/month. Sold in PL via ASBIS ~699 PLN, English-only menu. Card Lite ($129.99) charging unverified. |
| Notta Memo / Notta Memo Pro | Memo: R2 FAIL (magnetic), free 120 min/month with 3-min per-file cap. Memo Pro moves to USB-C + WebUSB but launches 13 Oct 2026 in Japan only. |
| MOVA TPEAK AI Note (Dreame) | R2 FAIL — Qi wireless charging only. Notable: sold in Polish retail (649 PLN, often 299 PLN). |
| Zeno Weaver | India-market MagSafe card, 300 min/month free; no EU availability found. |
| WaveNote (Wave AI) | 500 min/month for 12 months only, then paid; low-profile vendor. |
| Kentfaith magnetic AI recorder | White-label twin of FoCase Rec CR1 (GW63.0003, same FOCASE REC app); verified buyers report 600 min/month for 12 months, then a subscription (per the FoCase deep-research agent). |
| Voicit Go | R1 FAIL (7 languages, no Polish) and requires Voicit Pro €18/month. Cite as EU-data-residency benchmark (EU DCs, GDPR Art. 28 processor). |
| DingTalk A1 / A1 Pro | China-only ecosystem. |
| TIMMKOO SR1 | Handheld (out of form factor); offline transcription reported poor. |

*Out of scope but relevant:* the category is moving to earbuds (Plaud One, TicNote Pods, Viaim RecDot) and desktop software capture (Plaud Desktop).

## What did not hold up

12 claims from the preliminary screen or common coverage that the deep research overturned. Where a correction contradicts a device's detail section below, the correction wins.

**1. Claimed:** HiDock P1 mounts as USB mass storage.

**Actually:** It does not. It shows up as a vendor-specific USB device; the `.hda` files (plain MP3, 48 kHz mono, 96 kbps) are pulled through the HiNotes web app or community tools (hidock-local, midock, OpenHiNotes).

**2. Claimed:** HiDock data is on Azure, implying EU hosting is possible.

**Actually:** Azure in the US. Sub-processors are OpenAI, Anthropic and Azure; no EU hosting option and no EU representative were found.

**3. Claimed:** Plaud Note Pro scored 10/10 for Polish transcription (Telepolis).

**Actually:** 10/10 is the overall product score. The Polish verdict is qualitative (near-perfect, with speaker separation) with no WER, and the maker requested the test.

**4. Claimed:** BOYA Notra's promotion adds 600 minutes on top of 320.

**Actually:** The promotion raises the monthly total from 320 to 600 minutes for 12 months — still half of the ~1,200 needed.

**5. Claimed:** FoCase Rec CR1 gives 1,800 free minutes a month for life.

**Actually:** Its own FAQ says 600. Its white-label twin, Kentfaith GW63.0003 (same app, size and battery), gives 600 min/month for 12 months, then requires a subscription.

**6. Claimed:** FoCase Rec CR1 comes from the same factory as BOYA Notra.

**Actually:** No evidence: different weight, battery, app developer and launch year. The square is the generic MagSafe-puck shape.

**7. Claimed:** Comulytic Note Pro has a 16 GB variant since Sep 2026.

**Actually:** A single Amazon listing's spec attribute; every official SKU is 64 GB.

**8. Claimed:** Pocket's free tier is 200 min/month plus credits.

**Actually:** Those were pre-launch terms (Dec 2024). Unlimited free transcription has held since the Oct 2025 launch, on a weaker model, with a 30-day history.

**9. Claimed:** Vibe Dot holds SOC 2 Type II.

**Actually:** Vibe claims only 'SOC 2', with no type and no report. The Type II audit story belongs to Vibe.co, an unrelated company.

**10. Claimed:** BOYA Notra Neo transfers files over USB-C like the Notra.

**Actually:** BOYA's own comparison lists Neo transfer as Bluetooth/Wi-Fi only; its USB-C port charges and tethers Bluetooth mode.

**11. Claimed:** BOYA devices have no API or MCP.

**Actually:** An undocumented official remote MCP server exists on the shared Boya OS backend (mcp.boyaos.com, OAuth 2.1, read-only: metadata, transcripts, summaries — no raw audio). The UI suggests a staged rollout. The Notra detail below still grades it 'none'; this correction supersedes it.

**12. Claimed:** Plaud recordings can be copied over the USB cable.

**Actually:** Note Pro has never supported USB file access; the original Note lost it at firmware V2.1. Audio leaves through the app or the MCP/CLI download link.

## Cross-cutting findings

- **USB-C strictness costs evidence, not necessarily quality.** R2 eliminates the device with the only Polish hands-on test and the best free MCP (Plaud). But Plaud ("plaud-fast-whisper") and HiDock (OpenAI) both run Whisper-family engines, so the Polish gap between them is mostly an evidence gap that one short test would close.
- **Mixed Polish/English in one recording is unsupported or unevidenced everywhere.** Plaud states one language per recording; UMEVO makes you pick the language per file; no other device has test data. For bilingual meetings, assume the minority language will be transcribed poorly.
- **"Free forever" is never contractual.** Every vendor's terms allow free tiers to change without notice; Pocket cut free history from 90 to 14 days on 27 Jan 2026, reversed it two days later after user backlash, and now keeps 30 days. Raw-audio export is the durable hedge — it turns any vendor decision into a fallback, not a loss.
- **GDPR is the weak link for client meetings.** Most passing devices process audio in the US (HiDock, Pocket, Vibe), China/US (BOYA) or Hong Kong (FoCase), usually with no DPA and no EU representative. Across all 13 devices, only SwitchBot (EU storage, AI region undisclosed), iFLYTEK (EU, but no Polish) and — contested — Plaud claim EU storage. Only the DIY route keeps audio on your own machine.
- **Fallback audio quality varies.** Exported bitrates are low on several devices (BOYA Notra ~18 kbps inferred, Pocket ~32 kbps at 16 kHz, UMEVO 32 kbps at 16 kHz) against WAV on the Sony ICD-TX660 and 48 kHz/24-bit on DJI Mic 2. Lower bitrates degrade Whisper accuracy in noisy rooms.
- **Vendor risk is real.** Limitless cut service to EU users on 19 Dec 2025 after Meta bought it. Devices that need an account before they record (Comulytic, Vibe) become bricks if the vendor leaves. Devices whose audio leaves over USB degrade more gracefully — though BOYA Notra and Pocket still need the paired app to switch USB mode on. The DIY recorders need no account at all.
- **Independent reviews are thin.** Most hands-on reviews used vendor-supplied units, carried affiliate links or were sponsored; several devices (Pocket, UMEVO, Vibe Dot, GenSpark) have no independent major-outlet review at all.

## Whisper fallback and the vault pipeline

**Whisper fallback recipe** (from the DIY benchmark; speeds are vendor or community figures unless noted):

- **Tools:** faster-whisper or WhisperX (adds word alignment and pyannote diarization; Polish alignment model built in). A GUI alternative is noScribe.
- **Model:** `large-v3` on a GPU for maximum Polish accuracy; `large-v3-turbo` on CPU or Apple Silicon. Turbo is not on the AMU leaderboard; on Polish FLEURS (Q8-quantized) it scores 5.81% WER against 4.69% for large-v3.
- **Settings:** `language='pl'` (or multilingual mode for heavy PL/EN switching), VAD filter on, `initial_prompt` or hotwords with client names and jargon, `--diarize` with min/max speakers set.
- **Speed per audio hour:** ~4 min (large-v3) or ~1.5 min (turbo) on an NVIDIA GPU; ~2-5 min with turbo on Apple Silicon; CPU-only is an unbenchmarked 20-60 min with turbo.
- **Privacy switches:** set `PYANNOTE_METRICS_ENABLED=0` — pyannote 4.x sends usage telemetry by default. The diarization model needs a Hugging Face token for the first download only.
- **Effort:** 1-3 h one-time setup; then ~2-5 min hands-on per recording with a script.

**Into the vault:** plug in the recorder → a script copies new files (and joins DJI 31-minute splits with ffmpeg) → `whisperx --model large-v3 --language pl --diarize` → Markdown with frontmatter. For Pocket the same can run event-driven: a signed webhook on "transcript ready" → n8n → Markdown, or its official Obsidian plugin.

**Keep client transcripts out of the published garden.** This vault deploys to a public site; meeting transcripts belong under `content/_raw/` (excluded from the build) or in a separate private vault — never in a topic folder.

## Recording legally in Poland

*General information compiled from the Step-2 sources (Bezprawnik, Wolters Kluwer) — not legal advice, and not re-verified by a deep-research agent.*

- **Recording a conversation you take part in** is, on the prevailing reading, not a criminal offence: as a participant you are entitled to the information exchanged.
- **Recording conversations you are not part of** — for example, leaving a recorder running in a room after you walk out — falls under Art. 267 §3 of the Criminal Code (eavesdropping device to obtain information one is not entitled to): fine, restriction of liberty or up to 2 years' imprisonment.
- **Using the recording is restricted separately.** Publishing or sharing it can infringe personal rights (dobra osobiste, Art. 23-24 Civil Code). In a business context, client voices and statements are personal data: GDPR requires a legal basis, an information notice to participants (Art. 13), and a data processing agreement with the cloud vendor (Art. 28) — which most of these vendors do not offer.
- **In practice:** announce the recording at the start of each meeting, keep the device's recording LED visible, check client NDAs for recording clauses, and prefer local transcription for confidential meetings. Avoid features built for covert use — iFLYTEK lets you switch the recording lights off explicitly "to support covert recording".
- **EU AI Act:** Art. 5(1)(f) bans emotion recognition in the workplace (since 2 Feb 2025). SwitchBot's API returns a meeting "atmosphere" result; whether it is derived from voice or text is unclear, so treat it with caution in workplace use.

## Contents

*Badges: requirements verdict · Polish evidence grade · API/MCP grade · price · data location.*

**A. Candidates that pass the hard requirements**

1. [HiDock P1](#hidock-p1) — Verdict: PASS tier 1 (provisional) | Polish: B | API/MCP: partial | $169 (P1) / $119 (P1 mini); no Polish retailer · data: US (Azure)
2. [Pocket](#pocket) — Verdict: PASS tier 2 (tier 1 if Polish works) | Polish: C | API/MCP: full on Pro / partial free | $139; 539 PLN · data: US
3. [BOYA Notra](#boya-notra) — Verdict: PASS tier 2 | Polish: B | API/MCP: partial (undocumented MCP) | 699 PLN (x-kom); 589–650 PLN (morele) · data: CN per policy; US-hosted per DNS
4. [BOYA Notra Neo](#boya-notra-neo) — Verdict: PASS tier 2 (weak) | Polish: B | API/MCP: partial (undocumented MCP) | €89; 399 PLN (Hurtel only) · data: CN per policy; US-hosted per DNS
5. [FoCase Rec CR1](#focase-rec-cr1) — Verdict: PASS tier 2 (unverified) | Polish: C | API/MCP: none | $79; 311 PLN (focase.net) · data: HK server → OpenAI

**B. Benchmarks**

6. [DIY benchmark with local Whisper](#diy-benchmark-with-local-whisper) — Verdict: PASS tier 2 (by construction) | Polish: A | API/MCP: full (local files) | Sony ICD-TX660 699 PLN; Zoom H1essential 433 PLN · data: local only
7. [Plaud Note Pro](#plaud-note-pro) — Verdict: NEAR-MISS (fails R2) | Polish: A (qualitative) | API/MCP: full (free MCP + CLI) | 815–829 PLN; €189 · data: EU (AWS Frankfurt) per vendor — contested

**C. Near-misses — fail only the USB-C requirement**

8. [Comulytic Note Pro](#comulytic-note-pro) — Verdict: NEAR-MISS (fails R2) | Polish: C | API/MCP: partial (Zapier beta) | €118.99 (EU store) · data: US (AWS)
9. [UMEVO Note Plus](#umevo-note-plus) — Verdict: NEAR-MISS (fails R2) | Polish: B | API/MCP: none | $119 (sale); no EU retail · data: US (Alibaba Cloud US)

**D. Screened in wave 3**

10. [SwitchBot AI MindClip](#switchbot-ai-mindclip) — Verdict: PASS tier 2 | Polish: B | API/MCP: partial (REST + webhooks + MCP, no audio) | €119.99; ships from PL warehouse · data: EU storage (AWS DE); AI region undisclosed
11. [Vibe Dot](#vibe-dot) — Verdict: PASS tier 2 (weak; US-only sale) | Polish: C | API/MCP: partial (MCP beta, paid) | $199; ships to US only · data: US (AWS us-west-2)
12. [iFLYTEK AI Recorder P1](#iflytek-ai-recorder-p1) — Verdict: FAIL (no Polish) | Polish: fail | API/MCP: none | $119; 549.94 PLN (store) · data: EU (DE/IE)
13. [GenSpark Second Brain Note](#genspark-second-brain-note) — Verdict: FAIL (R2 + R3) | Polish: C | API/MCP: none | $179–199; no EU sale · data: not researched (knocked out)

## A. Candidates that pass the hard requirements

### HiDock P1

**PASS tier 1 (provisional)** · Polish B · API/MCP partial · 18 field(s) omitted as uncertain

#### requirements

**requirements verdict**

PASS (tier 1), provisional. R2 PASS (USB-C receptacle on the body). R3 tier 1: unlimited, vendor-stated lifetime free transcription with Polish in the free tier, plus a clean MP3 path for the Whisper fallback. R1 rests only on grade-B evidence: Polish is in the vendor's 75-language list and OpenAI is the transcription sub-processor, but no independent Polish test exists. Confirm Polish quality during the 30-day return window.

#### identity

**basics**

HiDock P1, 'AI Voice Recorder for Bluetooth Earphones', 1st generation, two colours (Space Gray, Star White). It is a stick-shaped dedicated recorder with three modes: Call (records both sides of calls through your own Bluetooth earbuds via 'BlueCatch'), Room (dual mics, ~3 m) and Whisper (push-to-talk notes). The companion app is HiNotes (web/PWA, iOS, Android). Variant: HiDock P1 mini, a 12 g phone dongle with no battery, 32 GB, one mic and Call/Room modes only, for recording calls on a smartphone. Context only: the HiDock H1 / H1E / H1 Lite are desk docks with a speakerphone that record online meetings on the computer, and are not portable recorders.

**launch date**

P1: Kickstarter 20 Mar to 8 May 2025, $2,148,280 from 2,947 backers. Makuake pre-orders from Jun 2025. Japanese retail from Nov 2025. Global retail at hidock.com and Amazon. HiNotes 3.0 relaunch press release 17 Apr 2026. P1 mini: on sale in Japan from 6 Nov 2025 (JPY 21,800). The P1 and P1 mini are the current generation. No successor announced as of 2026-10-01.

**form factor**

Stick or bar handheld (classic voice-recorder shape), 126 x 38 x 15.8 mm, aluminium body. Magnetic back with an included metal plate for mounting on a laptop lid, whiteboard or wall. Lanyard loop at the top. Rubber feet on the back. Optional leather case. Not a card, not MagSafe-slim, not wearable. P1 mini: a dongle that plugs into the phone's USB-C port, 25.4 x 60.6 x 7.8 mm, 12 g, with silicone pads in the box.

**availability eu poland**

Limited. The official store (hidock.com, EN/JP only) ships to Poland and the EU with free shipping, but its shipping policy says the price does not include VAT or import tax, so customs or VAT may be charged on delivery. The warehouse location is not stated. Amazon.pl has a P1 listing (ASIN B0G41P55ZG, 4.1/5 from 100 global ratings, 0 from Poland), unavailable on 2026-10-01. The P1 did not show up in Amazon.de search results. No listings were found at Allegro, x-kom, Media Expert or Komputronik. Warranty: 18 months from HiDock plus a 30-day risk-free return. Polish consumer-law protection is weaker for a direct import from a Hong Kong seller than for local retail. App UI languages: HiNotes ships English, Traditional Chinese and Japanese only. No Polish UI.

**company stability**

Small, crowdfunding-funded hardware brand with no disclosed VC funding. Track record: 1st-gen speakerphone on Kickstarter (HK$1.30M, 1,120 backers); H1 dock (HK$4.86M, 2,646 backers; also JPY 56M on Makuake); P1 ($2.15M, 2,947 backers). The brand has been shipping hardware and HiNotes software since 2023 and released frequent updates through 2026 (HiNotes 3.0). Risk: unlimited free cloud transcription is paid for out of hardware margin. The promise is not contractual (ToS allow discontinuing the service), and Trustpilot shows mixed support quality (3.5/5 from 21 reviews; complaints about slow replies and missing invoices). Mitigation if the vendor shuts down or exits the EU: the device records standalone, and several MIT-licensed community projects pull audio over USB without HiNotes. Among them, sgeraldes/hidock-next has 115 stars (now archived in favour of hidock-next-2) and ghecko/OpenHiNotes was active in Sep 2026. Unlike a cloud-only device, the P1 would not be bricked.

#### capture hardware

**microphones**

P1: dual 'studio-level' ECM capsules, ~6 mm (phi 6 per ITmedia), at the top of the body. The vendor claims 'bi-directional noise cancellation' (keyboard, dog, street and kitchen noise), switchable with a red button, and a pickup range of 3 m / 10 ft (vendor). Recording up to 768 kbps (vendor). Tested: Camera Jabber (English) found pickup 'solid out to a few metres' in a normal room or busy office, with useful noise cancellation. Notebookcheck rated Room mode 'impressive' but said on-device playback sounds hollow. No measured SNR or distance test found. P1 mini: a single 4 mm ECM.

**call recording method**

Bluetooth-earbud passthrough ('BlueCatch'), not a vibration or bone-conduction sensor. You plug the P1 into the computer or phone over USB-C, where it appears as a USB audio device ('headphones'). Your own Bluetooth earbuds pair with the P1 instead of the phone, so the P1 sits in the audio path and records both sides at hardware level, with no meeting bot. Pressing BlueCatch reconnects the last earbuds; holding it releases them. Phones: iPhone 15 or later (USB-C) and Android with OTG; Lightning iPhones are not supported. On iPhone you choose 'Headphones' when prompted for the USB audio accessory, and a reset via Settings > Sound & Haptics > Headphone Safety may be needed. Without earbuds, the official FAQ says to put the phone on speaker and use Room mode. Mode switching is automatic: connected to a host with earbuds caught = Call mode; unplugged = Room mode; holding the wheel = Whisper mode. Caveats: several Trustpilot users (P1 mini Nov 2025, P1 May 2026) say only their own side was recorded, and the vendor fix is to select HiDock P1 as both speaker and microphone in the app. Notebookcheck notes that while BlueCatch is connected you cannot listen to other audio sources. Multipoint earbuds make switching easier.

**battery recording and standby**

P1: 600 mAh Li-polymer, vendor-claimed up to 8 h continuous recording in Room mode; each recording is capped at 4 h. Standby: not published. The device auto-powers off after 10 minutes idle. Charging over USB-C from any computer or charger: 10 min gives ~1 h of recording, a full charge takes 40-50 min (vendor). The P1 powers on automatically when connected to a computer. No independent battery test found (Business Insider Japan did not test; reviewers only repeat the 8 h claim). P1 mini: no battery, powered by the host phone, with PD pass-through charging.

**display and controls**

No screen. Controls: a rotary wheel (scroll; double-click plays the last recording; press and hold for Whisper mode) and four large buttons. The HiDock/check button is long-pressed ~2-3 s to start or stop recording; the others are mute, BlueCatch and call/volume. There is a red noise-cancellation toggle, a recessed power button, and a vibration on power-on. A ring LED shows status: cyan = recording, red = mic muted, blue = earbuds caught. VoiceMark highlights important moments, and the cable's touch sensor handles mute/record when the P1 is mounted on a laptop lid. Starting a recording one-handed without looking works: a long-press on a physical button plus haptic and LED feedback.

**size weight**

P1: 126 x 38 x 15.8 mm, 72 g. P1 mini: 25.4 x 60.6 x 7.8 mm, 12 g.

**offline recording**

Yes for the P1: Room and Whisper modes work standalone with no phone or internet. Call mode needs a USB host (computer or phone). The P1 mini only works plugged into a phone or computer. Sync is USB-C only: the device has no Wi-Fi and no Bluetooth file transfer (ITmedia: 'all data transfer goes over USB'). Recordings stay on the device until pulled through HiNotes (WebUSB in Chrome/Edge, or the iOS/Android app over cable). Speed: the vendor claims up to 2,048 KB/s and 'a 1-hour recording transfers within a minute'. The community found USB 2.0 full-speed with a practical ceiling of ~1 MB/s. A 1 h MP3 at 96 kbps is ~43 MB, so about 45 s.

**account free operation**

Partly. Recording needs no account, phone or cloud (Room and Whisper modes standalone). Official retrieval and transcription require a HiNotes account plus device 'association', which also activates the free membership. Without an account, audio can be pulled with the open-source WebUSB/libusb tools above. If HiDock shut down or dropped the EU, the P1 would keep recording to 64 GB, and the MP3s would stay retrievable through the community tools. Free transcription, speaker ID and HiNotes integrations would stop. Firmware updates (OTA via HiNotes) would also stop.

#### transcription and ai

**realtime transcription**

Free tier: no, transcription runs after transfer and upload, with a manual 'transcribe' trigger (auto-transcribe is Pro). Pro: live transcription and live translation (device must be connected; 2 h max session; 15 languages for translation).

**on device processing**

None. The P1 only records, and stores locally until synced. All transcription runs in the HiNotes cloud (Azure USA plus OpenAI). Local transcription is possible only through community tools: hidock-local bundles whisper.cpp, HiDockSkill uses Moonshine ASR plus Ollama, and hinotes_organizer supports Whisper plus pyannote.

#### ecosystem

**apps**

HiNotes web app / PWA at hinotes.hidock.com: Chrome or Edge on Windows and macOS, needed for device management, file transfer, firmware OTA and configuration (BlueCatch pairing); Safari and Firefox are not supported. 'HiNotes by HiDock' iOS app (iPhone 15+ for USB-C) and Android app (OTG), launched as beta in 2025, with notes synced to the web. All transfers are wired. No native Windows or macOS desktop app; users ask for one in reviews. Feature parity: device setup is documented mainly for the desktop web app, and the mobile apps handle recording, transfer and notes.

**integrations**

Free (Member): Google Calendar and Microsoft Outlook calendar integration. Pro: send or sync notes to Notion, Google Docs and Microsoft OneNote (manual 'send to' actions; ITmedia confirms these are subscription-only). No Google Drive, Obsidian, Zapier, Make, Slack or CRM integration found. The calendar code references Slack/Discord only as meeting-location labels. Community bridges exist: hinotes_organizer writes P1 transcripts as Obsidian markdown via AssemblyAI or local Whisper; hidock-android-sync uploads P1 mini audio to Google Drive.

**export formats**

Free: transcript/note export as .txt only (plus copy note). Pro: .txt, .csv, .srt, Markdown, Word and PDF. Audio: per-note 'Download Audio' and device-file download as .mp3 (from .hda) or .wav.

**api mcp access**

Grade: PARTIAL. Raw audio is programmatically reachable for free through community USB tools. Transcripts have no programmatic route. (a) Official REST/GraphQL API: none. The HiNotes web app calls internal, undocumented REST endpoints (e.g. /v2/note/transcription/list, /v1/note/{type}/list) under session auth. They are not a public API and no docs, keys or rate limits are published. (b) Webhooks / 'transcript ready' push: none found. (c) MCP server: no official one. Community kms254/hidock-mcp (MIT, 5 stars, last push 2026-03-04) is a local stdio MCP over libusb for H1/H1E/P1/P1 mini. Its 15 tools cover device info, clock, list/count/delete files, storage info, format, settings, switch to mass-storage mode, and raw commands. It has NO audio-download or transcript tool, and Windows needs the Zadig WinUSB driver. (d) CLI/SDK: no official one. Community options: nhblock/midock (Python CLI: info, list, download, download-all; 2 stars, last push Apr 2026); andre-wiedemann/hidock-local (Electron + WebUSB, plain MP3 download, bundled whisper.cpp; 4 stars, May 2026; documented protocol); ghecko/OpenHiNotes (self-hosted Docker web app: WebUSB download, OpenAI-compatible ASR, diarization; 12 stars, active 2026-09-30); sgeraldes/hidock-next (115 stars, archived) and its successor hidock-next-2 (Windows Electron app with device sync and a pluggable transcription pipeline; active 2026-10-01); not-so-fat/hinotes_organizer (P1 sync, then AssemblyAI or local Whisper, then Obsidian markdown); build-hidock/HiDockSkill (local Moonshine + Ollama). All of these are unofficial and reverse-engineered, and a firmware update could break them. (e) No-code triggers (Zapier, Make, n8n): none. (f) Last-resort access: not plain USB mass storage; a vendor-protocol USB pull of MP3 files works without an account. Free tier: yes, the community audio routes need no account or plan, but official transcript export is .txt only via the UI. Status: there is no vendor developer program; everything above is community and hobby-grade.

#### pricing

**paid plans**

HiNotes Pro Membership adds speaker identification, 39+ summary templates, custom templates, summary translation, live transcription and translation, auto-transcribe, Notion/Google Docs/OneNote integrations, and .csv/.srt/Markdown/Word/PDF export. Pricing (hidock.com/pages/hinotes, 2026-10-01): pay-as-you-go $12.99 per 1,200 min or $99.99 per 12,000 min, or Unlimited $199/year. Plain transcription, Polish, timestamps, vocabulary and .txt export are NOT paywalled. Speaker labels and richer export formats are.

#### privacy and compliance

**certifications**

Self-claimed 'GDPR compliance' and a DPA built into the HiNotes footer, accepted by use rather than signature. HiDock itself shows no SOC 2, ISO 27001 or HIPAA attestation. Its security page and the Amazon listing cite Microsoft Azure's SOC 1-3 and ISO 27001, which are inherited infrastructure certifications, not HiDock's. Third-party penetration tests are claimed but no report is published. EN 18031 (EU RED cybersecurity): no evidence found. Security contact: security@hidock.com (24 h response policy).

**encryption**

Vendor-claimed: AES-256 at rest and TLS 1.2/1.3 in transit, with keys managed in Azure, and an SSL Labs A+ rating. The product FAQ's 'end-to-end security is guaranteed by Microsoft Azure' is marketing language, not end-to-end encryption; the vendor can process the content. On the device, recordings are stored unencrypted (plain MP3, per the community protocol analysis), and anyone with USB access can pull them with open tools. The device 'Allow others to access' setting can expose recordings to other HiNotes accounts; disable it for privacy.

**training on user data**

Vendor: 'No customer data is used to train the AI.' Metadata sent to OpenAI and Anthropic is anonymized. Meetings are split into chunks whose order is randomized before being sent to those AI providers (vendor claim, unverified). Retention: the privacy policy says personal data is kept 'as long as necessary'. Deleting a note is permanent and irreversible; account deletion is available in the profile. The DPA promises deletion or return of data on termination. No opt-in or opt-out toggle is needed because training is not done (per vendor).

**recording indicator consent**

A ring LED glows cyan while recording, red when muted and blue when earbuds are caught. The device vibrates on power-on. There is no audible start tone for other participants and no consent or announcement feature. BlueCatch is marketed as bot-free, so remote participants get no notification. The duty to inform participants (GDPR, Polish law) rests entirely on the user.

**ai act emotion features**

None found. No voice emotion or sentiment scoring was found in HiNotes features or app strings. Summaries are template-based.

#### verdict

**noisy room performance**

Limited tested evidence. Camera Jabber: in 'a normal room or a reasonably busy office' pickup is 'solid out to a few metres' and the noise cancellation 'earns its keep'. Notebookcheck: Room mode 'operates impressively well' for in-person meetings, with hollow-sounding raw playback. Vendor: pickup up to 3 m, with noise cancellation for typing, street and kitchen noise. No controlled test in a café, large conference table or long room, and no distance-to-failure figure, was found.

**known issues**

Setup is split across hidock.com and hinotes.hidock.com, and setup is confusing (Camera Jabber; Trustpilot 'unclear instructions'). Device management needs Chrome or Edge (WebUSB); there is no native desktop app. Audio access is locked to HiNotes: no bulk export of Whisper clips (Notebookcheck). Call mode records only one side if P1 is not selected as both speaker and mic (Trustpilot, P1 and P1 mini). While BlueCatch is active, other audio sources are blocked (Notebookcheck). On-device playback is cumbersome. The P1 mini on a Mac needs the earbuds disconnected before files can be accessed (customer review). Hardware: one swollen battery (replaced in 3 days) and one unit that would not power on, per Trustpilot. Support quality is polarized: some report replacements within a day, others week-long waits and unanswered tickets. Community-found USB quirks: the file list truncates in a 'warm' session, and transfer is capped at USB 2.0 full-speed.

**best for**

Best: phone and online calls with your own Bluetooth earbuds; this is the P1's unique strength and works for both sides on iPhone 15+, Android OTG and laptops. Good: in-person 1:1s and small-table meetings within ~3 m (Room mode, standalone, 8 h). Good: voice notes via push-to-talk Whisper mode. Weak or unproven: large conference rooms (no tests), phone calls without earbuds (speakerphone plus Room mode), and discreet clip-on wear (72 g stick, not a card). The P1 mini suits only phone and earbud calls with the phone attached; it has no battery and cannot record a room standalone.

**pros cons**

Pros: (1) unlimited free transcription, vendor-stated lifetime, with Polish in the free 75-language list and no monthly cap; (2) native USB-C port, wired transfer, and standalone recording to 64 GB; (3) BlueCatch records both sides of calls through your own earbuds with no meeting bot; (4) recordings are plain MP3 and pullable with open-source tools without an account, which is an excellent Whisper fallback and second-brain path for a developer; (5) physical buttons, 8 h battery, premium aluminium build. Cons: (1) no independent Polish test, and the ASR model is undisclosed; (2) data processed in Azure USA with OpenAI and Anthropic as sub-processors, no EU hosting option and no EU representative found, which is a GDPR concern for client meetings; (3) no official API, MCP or webhooks, and free export is .txt only; (4) speaker labels are Pro-only, as are auto-transcribe and SRT/MD export; (5) weak EU retail presence (import from HK, VAT on delivery, no Polish retailer) and a non-contractual 'lifetime' promise from a small crowdfunded vendor.

**verdict for me**

CONSIDER, the strongest wave-1 candidate pending a Polish test. It is the only device found so far that is tier 1 on R3 (unlimited free transcription) while also passing R2 (USB-C on the body). R1 evidence is grade B (Polish in the official list, OpenAI engine), so a 1-hour PL+EN test is needed within the 30-day return window. The deciding reason: it covers phone and online calls through earbuds plus in-person meetings without a subscription, and the plain-MP3 USB pull keeps local Whisper available as a fallback. The main blocker to weigh is GDPR: client audio goes to Azure USA plus OpenAI unless you only use the local-Whisper path.

**conflicting evidence**

(1) Raw audio access: Step-2 and the field hint say 'USB mass storage (HiDock yes)'. The community USB protocol docs (hidock-local, midock) show a vendor-specific USB class using WebUSB/bulk commands, and Notebookcheck says 'direct audio file access restricted'. A hidden mass-storage command exists in hidock-mcp but is unverified on the P1. (2) Language count: 75 (current P1 FAQ, product page, HiNotes plan table) vs 57 (legacy HiNotes FAQ and older third-party pages) vs 8 (early beta FAQ). Polish is in both the 75 and 57 lists. (3) Pro minutes on the free tier: ITmedia (Jan 2026) says free users can use Pro for up to 300 min/month, and Camera Jabber says there is a 'monthly quota of Pro minutes on the free tier'. The current HiNotes plan table shows no Pro allowance and no speaker ID for Member. (4) Free note limit: Business Insider Japan reports a 30-note cap on free. The 2024 HiNotes guide applies 30 notes x 10 min only to Basic accounts with no HiDock device, and the plan table says 'Limitless'. (5) Lifetime free transcription: claimed on vendor pages, while two Trustpilot reviews (Aug 2025, Feb 2026) say it was not honoured. (6) AI provider: an older HiNotes FAQ says 'we do not use ChatGPT directly ... we use the AI service from Microsoft Azure Cloud', but the current DPA names OpenAI, L.L.C. (transcription and summarization) and Anthropic PBC as sub-processors. (7) Transfer speed: vendor 'up to 2048 KB/s' vs the community's 'USB 2.0 full-speed, ~1 MB/s in practice'. (8) Capacity: vendor 'up to 1,000 hours' or '1000+ hours (TBD)' vs the Amazon.pl listing's '360 hours'. (9) Recording quality: vendor 'max 768 kbps' vs the community-observed 96 kbps MP3 (probably different quality settings).

#### other info

**item**

- **id**: hidock-p1
- **name**: HiDock P1 (incl. P1 mini variant)
- **group**: candidate
- **wave**: 1
- **researched**: 2026-10-01
- **step2 corrections**: Step-2 said raw audio = USB mass storage. Not confirmed: the P1 enumerates as a vendor-specific USB device (Actions Semiconductor VID 0x10D6, PID 0xB00E) and recordings are pulled over WebUSB (HiNotes in Chrome/Edge or community open-source tools). The R1 language count is resolved: the official P1 FAQ lists 75 languages and names Polish. The older 57-language list also included Polish.

**sources**

- https://www.hidock.com/products/hidock-p1-ai-voice-recorder - official P1 product page (specs, $169, FAQ: unlimited free transcription, Azure, GDPR), seen 2026-10-01
- https://www.hidock.com/products/hidock-p1-mini - official P1 mini page ($119, 32 GB, 12 g, USB-C, 768 kbps)
- https://www.hidock.com/blogs/user-guide/hidock-p1-faq - official P1 FAQ (75-language list incl. Polish; 4 h per recording; iPhone/Zoom/phone-call methods)
- https://www.hidock.com/blogs/user-guide/hidock-p1-setup-guide - official setup guide (USB-C charging 10 min = 1 h, full 40-50 min; modes; membership activation)
- https://www.hidock.com/blogs/user-guide/hidock-p1-quick-start-guide - BlueCatch quick start; 3 m room pickup
- https://www.hidock.com/blogs/user-guide/hinotes-quick-guidance - HiNotes membership tiers (Basic 30 notes x 10 min; owners unlimited free; Pro pricing history)
- https://www.hidock.com/pages/hinotes - HiNotes plan table (Member free: Limitless minutes, 75 languages, vocabulary, .txt export; Pro $12.99/1,200 min, $99.99/12,000 min, $199/yr)
- https://hinotes.hidock.com/security - HiNotes security page (Azure USA, AES-256/TLS, no training, OpenAI/Anthropic chunking); content read from the site's JS bundle
- HiNotes Data Processing Addendum (hinotes.hidock.com footer, read from JS bundle) - processor HiDock LLC; sub-processors OpenAI (transcription and summarization), Anthropic, Microsoft Azure; SCC/DPF transfers
- https://www.hidock.com/pages/terms-of-service - ToS (modify/discontinue without notice; Hong Kong law)
- https://www.hidock.com/pages/privacy-policy - privacy policy (generic; retention 'as long as necessary')
- https://www.hidock.com/pages/shipping-policy - ships to Poland/EU; prices exclude VAT/import tax
- https://www.notebookcheck.net/HiDock-P1-AI-voice-recorder-hands-on-review.1385347.0.html - Notebookcheck hands-on, 2 Sep 2026 (sample from manufacturer)
- https://camerajabber.com/reviews/hidock-p1-review/ - Camera Jabber review, 13 Jul 2026
- https://www.itmedia.co.jp/pcuser/articles/2601/04/news020.html - ITmedia PC USER review p.1 (USB-C on bottom, wired-only transfer), 4 Jan 2026, affiliate
- https://www.itmedia.co.jp/pcuser/articles/2601/04/news020_2.html - ITmedia p.2 (free vs Pro, 300 Pro min/month, vocabulary)
- https://www.businessinsider.jp/article/2601-hidock-p1-review-wireless-earbuds-recording/ - Business Insider Japan review, 30 Jan 2026
- https://www.watch.impress.co.jp/docs/news/2069798.html - P1 mini Japan launch (6 Nov 2025, JPY 21,800)
- https://www.gizmodo.jp/2025/07/hidock-p1-and-p1-mini.html - Gizmodo Japan (SPONSORED by HiDock) - P1 mini has no battery
- https://www.lifehacker.jp/article/2508_hidock_p1_p1mini_makuake/ - Makuake campaign coverage (P1 mini PD pass-through)
- https://channellife.news/story/hidock-launches-p1-ai-voice-recorder-with-hinotes-3-0 - HiNotes 3.0 press coverage, 17 Apr 2026
- https://www.kicktraq.com/projects/hidock/hidock-h1-chatgpt-powered-audio-dock-with-ai-summary/ and backerkit P1 campaign - crowdfunding history (P1: $2.15M, 2,947 backers, 20 Mar-8 May 2025)
- https://www.trustpilot.com/review/hidock.com - Trustpilot 3.5/5, 21 reviews (lifetime-free complaints, one-way call recording, support)
- https://www.amazon.pl/dp/B0G41P55ZG - Amazon.pl listing (manufacturer Sugr Technology Hong Kong Limited; unavailable 2026-10-01; 4.1/5 from 100 global ratings)
- https://www.cbinsights.com/company/sugr-technology/people and https://www.startupgrind.com/events/details/startup-grind-shenzhen-presents-sean-song-sugr - Sugr Technology background
- https://github.com/andre-wiedemann/hidock-local - community WebUSB downloader; docs/USB_PROTOCOL.md and docs/DEVICE_NOTES.md (MP3 48 kHz mono 96 kbps, vendor-specific USB class)
- https://github.com/kms254/hidock-mcp - community MCP server (device ops, no audio download)
- https://github.com/nhblock/midock - community Python CLI (download-all)
- https://github.com/ghecko/OpenHiNotes - community self-hosted HiNotes alternative
- https://github.com/sgeraldes/hidock-next and https://github.com/sgeraldes/hidock-next-2 - community desktop apps (115 stars legacy)
- https://github.com/not-so-fat/hinotes_organizer - P1 to AssemblyAI/local Whisper to Obsidian pipeline
- https://github.com/mavliev/hidock-android-sync - P1 mini Android sync to Google Drive

#### omitted as uncertain

- asr engine
- free minutes steady state
- free tier quality and retention
- independent review consensus
- language count
- maker and hq
- online meeting capture
- price
- processing location data residency
- promise durability
- raw audio export
- req no subscription
- req polish transcription
- req usb c port
- speaker diarization
- storage
- three year tco
- transcript editing and vocabulary

### Pocket

**PASS tier 2 (tier 1 if Polish works)** · Polish C · API/MCP full on Pro / partial free · 15 field(s) omitted as uncertain

#### requirements

**req usb c port**

PASS. Native USB-C receptacle on the device body ('The USB-C port on the bottom of Pocket', docs > Syncing Methods). Box contains a braided USB-C-to-USB-C cable; docs say to use 'any standard USB-C power adapter' and a 'known-good USB-C cable' - no proprietary cable and no warning against third-party cables (only that charge-only cables will not sync data). Data over the same port since firmware v1.0 (12 Nov 2025): 'Pocket Web Sync'/USB Mode mounts the device as a POCKET drive. Before FW 1.0 the CEO wrote 'The USB-C is only for charging' (community, 23 Oct 2025). MagSafe is only a mount, not a charger. Charge time 1.5 h (vendor).

**req no subscription**

TIER 1 on paper (conditional on R1), TIER 2 guaranteed. Free 'Core' plan: 'Unlimited transcription (standard accuracy)', no minute cap, nothing to reset, described as 'Free to use, forever' (heypocket.com, seen 2026-10-01) and 'free unlimited transcription on our Core plan for life' (Pocket Support, community, 7 Sep 2026). Not a promotion - unlimited free has held since the Oct 2025 launch (pre-launch coverage in Dec 2024 said 200 min/month + paid credits). Fine print is in the plan table, not a fair-use clause: weaker 'standard accuracy' ASR; no speaker separation; history/summaries kept 30 days; plain-text export only; Ask Pocket 2 messages/day; Pro advertises long-recording support 'up to 4 hours' (free per-file cap not published). ToS (15 Sep 2025): 'We may modify, suspend, or discontinue any Online Services (including any feature or content) in our sole discretion without prior notice' - no contractual lock on the free tier. No on-device/offline transcription (cloud only; live transcript also needs internet). Raw audio for the Whisper fallback: (a) USB mass storage - POCKET drive with a RECORD folder of unencrypted MP3 files (community thread 18 Nov 2025; support 29 Aug 2026: 'use USB-C to access raw audio like a drive'), but USB Mode must be switched on in the paired Pocket app (charge-only by default; switches off when the device disconnects/powers off); (b) in-app Export > Audio recording (MP3), per recording (support, 7 Aug 2026). Format (community reverse-engineering, pocket-libre): MP3, 16 kHz mono, ~32 kbps. Tier-2 caveat: the paired app auto-transfers recordings over BLE and there is currently no user switch to stop cloud processing (support, 7 Aug 2026).

**requirements verdict**

PASS (tier 2) - provisional PASS (tier 1) pending a Polish test. R2 pass (native USB-C, data on the same port); R3 = unlimited free cloud transcription plus USB-mass-storage MP3 for local Whisper; R1 unknown (no Polish evidence; stated ASR engine Pulse does not list Polish; free tier runs a weaker model).

#### identity

**basics**

Pocket (single hardware model, device ID PKT01; sold as 'Pocket - Personal AI Assistant') by Open Vision Engineering, Inc. (heypocket.com). Screenless, credit-card-sized MagSafe recorder with a contact mic for phone calls; positioned as the 'unlimited transcription, no subscription required' alternative to Plaud.

**maker and hq**

Open Vision Engineering, Inc., a Delaware corporation (privacy-policy address 131 Continental Dr, Suite 305, Newark, DE, USA), operating from San Francisco. Founders Akshay Narisetti (CEO) and Gabriel Dymowski (Polish co-founder, previously DoxyChain); they met at The Residency hacker house in SF in 2024. Independent startup, no parent company. App/backend team in San Francisco (12-13 employees in 2026); said to be hiring in Poland (xyz.pl, Jul 2026); manufacturing in Asia (a Hong Kong typhoon delayed production, Oct 2025). Data jurisdiction: United States ('US-based cloud hosting'; Delaware law governs ToS).

**launch date**

Pre-orders from late 2024 (Dec 2024 coverage: $79, shipping 'early 2025'); founding-member pre-orders closed 22 Sep 2025; official launch and first shipments Oct 2025 (10,000+ units shipped on launch day). One hardware generation so far; features added by firmware (FW 1.0 on 12 Nov 2025 enabled USB data; FW 1.8 in the field by Sep 2026). No successor announced as of 2026-10-01. Company is in Y Combinator's Winter 2026 batch.

**form factor**

Card-style aluminum unibody slab that snaps onto the back of a phone via MagSafe; adhesive magnetic ring included for Android and non-MagSafe iPhones. No clip or lanyard in the box (not a wearable). Community advice: use a MagSafe case because the included ring is weak (Jul-Sep 2026). Colors: Sierra Blue, Baby Pink, Space Grey.

**availability eu poland**

Direct only: heypocket.com ships to PL, DE, AT, BE, CZ, DK, ES, FI, FR, IE, IT, LU, NL, PT, SE and more (store ships_to list, 2026-10-01); official Polish launch Aug 2026 via the producer's website. No Amazon.pl/.de, Allegro, x-kom, Media Expert or Komputronik listing found (company says under 10% of sales via Amazon, mostly US). Seller is the US entity: 1-year limited warranty and 30-day return window (Terms of Sale); EU statutory consumer rights may apply to consumer purchases, but a B2B purchase gets only the contractual warranty, with returns to a US seller. App UI: iOS App Store lists English only; output/summary language is selectable; an iOS bug affected system languages other than EN/DE/IT/FR (Mar 2026). No Polish UI found.

**company stability**

Strong demand signals (company-reported): $11M round led by Accel with Y Combinator and Peak XV (announced 29 Jun 2026); 35,000+ devices and $27M run rate by end of Mar 2026; 200,000+ devices and $100M annualized run rate by Aug 2026 (Entrepreneur, 24 Aug 2026); Smallest.ai's case study cites 274,098 devices. 50% month-on-month growth claimed; ~85% of sales in the US. Risks: a 12-13-person team running an unlimited free cloud service - in Jan 2026 the CEO admitted free unlimited usage plus 90-day history was 'not sustainable' and briefly cut history to 14 days; heavy push to Pro. The device depends on the vendor app for setup and for unlocking USB; transcription is cloud-only. No acquisition or shutdown signals found.

#### capture hardware

**microphones**

2 'studio' microphones for room audio plus 1 contact (vibration) microphone on the back for phone calls (vendor). Mic type (MEMS), directionality and beamforming are not specified. Pickup range 'up to 15 m / 49 ft' is vendor-claimed; no independent test found. Audio is post-processed server-side before transcription (CTO, Dec 2025). User reports of muffled, 'choppy' or reverberant audio, worse than an iPhone's mics (Dec 2025, Jan 2026, Aug and Sep 2026); one six-month affiliate reviewer rates mic quality 'at parity' with competitors for one-to-one conversations.

**call recording method**

Contact (vibration) mic picks up the earpiece through the phone body while Pocket is attached via MagSafe/magnetic ring - no speakerphone. Manual switching: a physical slider selects Call mode (up) or Conversation mode (down); users must slide back after a call because the contact mic is very touch-sensitive. Works on iPhone (MagSafe) and Android (adhesive ring) alike; thick or padded cases dampen pickup. Does NOT capture the other side when Bluetooth earbuds/AirPods are used ('no ETA', engineering, 27 Jul 2026). No automatic call detection. Workarounds: record in the iOS Phone app and upload the file to Pocket; computer calls via the Pocket desktop app.

**display and controls**

No screen. One side button: single press starts/stops recording (beep + amber LED), double-press shows battery level (docs elsewhere also map double-press to pause - inconsistent), 5 s hold = power. Physical slider for Call/Conversation mode. Status LED on the face (blue ready, amber recording, white paused, green charging, purple firmware update). One-handed start without looking: yes (button + beep). No bookmark/highlight marker. Complaints: button sometimes unresponsive, or recordings started accidentally when bumped (Oct 2025-Aug 2026).

**size weight**

52 g; 3.4 x 2.2 x 0.2 in, about 86 x 56 x 5 mm (vendor).

**raw audio export**

Good. (1) USB mass storage: with 'Pocket Web Sync'/USB Mode enabled in the paired app, the device mounts as a 'POCKET' drive whose RECORD folder holds plain, unencrypted MP3 files any OS can read (community 18 Nov 2025; support 29 Aug 2026; docs). Default is charge-only; the mode switches off when the device disconnects from the app or powers off. Vendor warns not to add/move/rename files on the drive. (2) In-app: recording > Export > Audio recording, or the three-dot menu 'download audio' (support, Apr and Aug 2026). (3) API: pre-signed S3 audio URL (see api_mcp_access). Format: MP3 (MPEG-2 Layer 3), 16 kHz mono, ~32 kbps (community reverse-engineering, pocket-libre PROTOCOL.md) - low bitrate but fine for Whisper, which works at 16 kHz. Whisper fallback (tier 2) is practical.

#### transcription and ai

**language count**

'120+ languages' vendor-claimed, no list published (Smallest Pulse itself documents far fewer). Mixed language: support says one recording can contain several languages (EN+ES tested, Aug 2026); summaries come out in one chosen language. Users report misdetection (English->Welsh, Portuguese->English, French). PL+EN mix untested.

**speaker diarization**

Free plan: none (CTO, 10 Apr 2026). Pro: automatic speaker labels and separation, Voice Print (enrol your own voice so you are tagged automatically), Speaker Management (name a speaker once and they are recognised across recordings; merge duplicates). Quality: users and affiliate reviewers report attribution slips with overlapping speech and in noisy multi-speaker rooms; staff say the desktop app's diarization is more accurate (Jan 2026). No published speaker-count limit.

**online meeting capture**

Pocket desktop app (macOS and Windows) records the microphone plus system audio for Zoom, Teams and Google Meet with no bot, with meeting detection and optional auto-record (docs, 2026). The hardware itself is not involved, other than placing it near the speaker (a user reports reverberant audio). The buyer already covers this with Tactiq, so little added value.

**realtime transcription**

Yes - live transcript in the phone app during recording (audio streamed over BLE to the phone and transcribed by a cloud provider; needs internet). Otherwise the full transcript arrives after sync and upload.

**on device processing**

None. All transcription and summarization run in Pocket's cloud (CEO/CTO, Oct 2025; support, Aug 2026: 'Pocket's transcription and summarization are cloud-based'). Turbo.pl's claim of 'fully local' transcription (Jun 2026) is wrong.

#### ecosystem

**apps**

iOS, Android, web (app.heypocket.com) and desktop (macOS, Windows). Parity gaps: users say Android and Mac lack features iOS has (calendar items, moving recordings to folders, multi-select; Sep 2026), and transcript editing is mobile-only. iOS rating 4.9 from 6,216 US ratings (v0.6.86, 27 Sep 2026).

**export formats**

Free: plain-text transcript/summary export, one recording at a time, plus MP3 audio export. Pro: PDF, DOCX, Markdown and bulk export. No SRT/VTT export found. The API returns JSON with timed, speaker-tagged segments.

#### pricing

**paid plans**

Pocket Pro: $19.99/month or $239.88/year list ($16.59/month billed yearly); store promos $179-$219/year and $199/year (Sep-Oct 2026), 3-month $59, 6-month $79-$109; App Store pricing varies by region (AUD 299-399/year reported). A 30-day (sometimes 7-day) trial auto-converts unless cancelled, and returning the hardware does not cancel it. Pro gates plain-transcription features: higher-accuracy ASR, speaker identification/separation, long recordings up to 4 h, unlimited history, DOCX/PDF/MD/bulk export, full-transcript MCP tool. Enterprise/teams: HIPAA mode and BAA.

**promise durability**

Unlimited free transcription has held since the Oct 2025 launch (about 12 months), but pre-launch terms were 200 min/month + credits (Dec 2024), and the free history window has moved three times: 90 days (Oct 2025) -> 14 days (27 Jan 2026, no notice) -> back to 90 days (29 Jan 2026, after backlash; CEO: 'Changes will come with notice. If we ever adjust the free plan, existing users will get grandfathered') -> 30 days on the current pricing table (change date and grandfathering not found). The CEO admitted the free plan's compute cost is a sustainability issue, and the ToS allows changing or discontinuing features without notice. Shutdown scenario: the device keeps recording to 64 GB, but MP3s are readable over USB only after the app enables USB Mode, so a dead app could strand files (community BLE tool is the fallback).

#### privacy and compliance

**processing location data residency**

US only per vendor ('US-based cloud hosting', heypocket.com trust page and FAQ); no EU hosting option. Controller and EU contract partner: Open Vision Engineering, Inc. (Delaware) directly via its Shopify store. Privacy policy (last updated 8 Sep 2025) names no sub-processors (generic 'cloud/AI vendors (transcription and model processing)'), no region, no Art. 27 EU representative, no SCCs or other transfer mechanism; no DPA published. Known or inferred sub-processors: Smallest.ai Pulse STT (per Smallest's case study; US/India regions), LLM providers OpenAI, Anthropic and Google (user-selectable summary models, via 'private, enterprise-grade APIs'), AWS S3 (pre-signed audio URLs), Cloudflare (cited in an outage). Flow (CEO, Oct 2025): audio uploaded encrypted, decrypted in a 'memory-isolated environment', transcribed and summarized; if secure-cloud sync was off, audio was deleted after processing - but support (7 Aug 2026) says there is currently no user switch for cloud sync or retention.

**encryption**

Vendor: 'Encrypted in transit and at rest'. Not end-to-end in practice: audio is decrypted server-side for transcription (CEO, Oct 2025), despite a staff post (Oct 2025) claiming E2E and 'no one - not even us'. On device: MP3s are stored unencrypted - readable by anyone holding the device while USB Mode is active; USB data access is disabled once the device disconnects from the app or powers off (engineering, May 2026). No commitment to on-device encryption.

**training on user data**

Privacy policy: 'we will not use your personal Recordings to train our models without your consent' (opt-in). CEO: recordings are not used for internal model training, datasets or analytics, and external AI providers must contractually delete data after processing. Retention: in-app history 30 days free / unlimited on Pro; Recycle Bin keeps deleted items 30 days; backups purged 'on scheduled cycles'; no user-facing retention switch (Aug 2026).

**recording indicator consent**

Amber LED on the device face while recording (white when paused) and a beep on start (docs). No audible announcement or consent workflow; docs tell users to obtain consent and note call capture may be restricted in some regions. Mounted on the back of a phone the device is inconspicuous, so the duty to inform rests entirely on the user.

**ai act emotion features**

None found - no voice emotion/sentiment scoring of speakers in docs or plan tables (checked 2026-10-01). Side note: an optional 'AI memory import' prompt (Jul 2026) asks other AI tools for the account holder's own behavioural/psychological profile - profiling of the user, not emotion recognition of meeting participants.

#### verdict

**independent review consensus**

No hands-on review from The Verge, Wired, Tom's Guide, RTINGS, Engadget or CNET found, and no controlled Pocket-vs-Plaud audio/WER test exists (stated by Fieldy, Jul 2026). What exists: (a) Affiliate long-term users - mrktcorrect.com (Evan Taylor, 6 months, affiliate links): hardware disappears on the phone, app was rough until a 2026 rebuild, noisy cross-talk mis-attributes speakers, multilingual weaker than Plaud; dev.to/webofmike (Mike Moore, 17 Sep 2026, affiliate): summaries 'good, not perfect', attribution slips on overlap, MCP useful; pocket-ai-avis.com (affiliate): degrades in cafes/busy streets, poor for virtual meetings; layer3labs.io (affiliate, no testing): notes undisclosed model and accuracy. (b) Competitor content - Plaud blog and Fieldy blog (both rivals): legit product, no published certifications/DPA, manual call/room switching, heavier (52 g). (c) Press (Telepolis, xyz.pl, TechRadar, Entrepreneur, Turbo.pl): launch/funding news, no tests, and some factual errors (offline transcription). (d) Crowd: Trustpilot 4.7-4.8 from ~2,500 reviews (Aug 2026), App Store 4.9 (6,216 US ratings); Pocket offers free Pro for user testimonial videos (Sep 2026) - inflation risk. Consensus: cheap, convenient, unlimited free transcription; transcription and speaker-separation quality are middling, especially on free and in non-English.

**known issues**

Sync: Wi-Fi Quick Transfer failures, slow BLE for long files, Web Sync 'Mode update failed' errors (Aug-Sep 2026), recordings missing until 'Resync from device'. Transcription: long recordings transcribed only partially (2-3 h files cut to the first 20-80 min; Jan-Sep 2026, blamed on 'transcript provider errors'), a 3-4% failure spike (3 Mar 2026), language misdetection (Welsh, Portuguese, French), free-tier transcripts split into one speaker per phrase (Apr 2026). Hardware: side button unresponsive or triggering accidental multi-hour recordings, a unit bricked by a firmware update (Jun 2026), weak magnetic ring, muffled audio reports. Service: downtime (Apr 2026), API-key generation outages, early shipping and support delays (Oct 2025-Jan 2026). Policy: abrupt free-plan change (Jan 2026, reversed). Support is generally praised once a ticket is picked up.

**best for**

Best: voice notes and ideas (one button, always on the phone) and phone calls on a MagSafe phone without earbuds (contact mic, no speakerphone). Good: 1:1 and small in-person meetings at close range. Weak: large or noisy workshop rooms (2 mics, untested range, no free diarization), calls through Bluetooth earbuds (not supported), online calls through the device (use the desktop app or the buyer's existing Tactiq).

**pros cons**

Pros: (1) unlimited free transcription with no minute cap - the only item in this comparison without metering; (2) native USB-C with USB-mass-storage MP3 access - a clean Whisper fallback; (3) official REST API, webhooks and MCP server plus an official Obsidian plugin; (4) contact mic for calls without speakerphone, 64 GB, multi-day battery, $139; (5) Polish co-founder and an official PL launch. Cons: (1) no Polish evidence, and the free tier uses a weaker ASR with no speaker separation; (2) US-only hosting with no DPA, no Art. 27 representative and no SCCs, and SOC 2 via scandal-hit Delve - a hard GDPR case for client meetings; (3) setup and USB access depend on the vendor app/account, and MP3s on the device are unencrypted; (4) the free history window has changed three times (90->14->90->30 days) and the ToS allows changes without notice; (5) reliability bugs (sync, truncated long transcripts, button).

**verdict for me**

CONSIDER (buy to test). Requirements: PASS tier 2 for certain (USB-C + MP3 mass storage -> local Whisper); tier 1 only if Polish works on the free 'standard accuracy' model, which is unverified, and free has no speaker separation. Polish quality: no evidence; the stated ASR (Smallest Pulse) does not list Polish. Deciding reason: for GDPR-sensitive client meetings the clean route is Pocket as a $139 USB-C recorder + local Whisper, with the vendor cloud used only for non-sensitive notes - test Polish and PL/EN code-switching inside the 30-day return window before relying on the free cloud tier.

**conflicting evidence**

(1) Free terms: Dec 2024 launch coverage (getcoai.com, TechRadar) '200 free recording minutes monthly, with additional credits' vs vendor since Oct 2025 'unlimited transcription ... free forever' - terms changed before launch. (2) Free history: 90 days (support email Oct 2025; CEO 29 Jan 2026) vs 14 days (CEO 27 Jan 2026; still in a 'Launch Special' box on heypocket.com/pages/pocketai) vs 30 days (pricing tables on heypocket.com and /pages/pocket; in-app answer Sep 2026). (3) Price: $99 (homepage, subscription-linked) / $129 (Jul-Aug 2026 coverage, Pocket comparison page) / $139 (US store 2026-10-01) / $199 (list); PLN 497 (Aug 2026 promo, Telepolis) vs 539 (storefront 2026-10-01). (4) Storage: 64 GB (product pages) vs 128 GB (staff posts Oct 2025). (5) USB: 'The USB-C is only for charging' (CEO, 23 Oct 2025) vs USB mass storage since FW 1.0 (12 Nov 2025). (6) Processing: Turbo.pl (30 Jun 2026) says transcription is fully local/offline vs vendor and support: cloud only. (7) Encryption: staff 'end-to-end encrypted ... not even us' (Oct 2025) vs CEO 'decrypted in a memory-isolated environment' and unencrypted MP3 on the device. (8) Certifications: CEO 'HIPAA and SOC 2 compliant' (Delve portal) vs competitor reviews 'no formal certifications published'; current vendor trust page omits SOC 2. (9) Languages: Pocket '120+' vs Smallest Pulse (named engine) '23 languages' on its case study and 12 pre-recorded languages in its docs. (10) Funding: 'seed' (xyz.pl, Business Standard) vs 'Series A' (Plaud blog). (11) Units: 130,000+ (Plaud blog) vs 200,000+ (Entrepreneur, Aug 2026) vs 274,098 (Smallest.ai). (12) Free task integrations: 'Unlimited todos and task app integrations' vs 'Task integration: Limited' (two vendor tables).

#### other info

**sources**

- https://heypocket.com/ (homepage, prices and plan table, seen 2026-10-01)
- https://heypocket.com/pages/pocket (Free vs Pro table, specs, FAQ)
- https://heypocket.com/pages/pocketai (plan boxes incl. 14-day Launch Special, 30-day Free)
- https://heypocket.com/pages/comparison (vendor comparison table, $129)
- https://heypocket.com/products.json (Shopify catalog: $139 / compare $199; EUR 122, PLN 539 via currency param, 2026-10-01)
- https://heypocket.com/meta.json (ships_to_countries incl. PL)
- https://heypocket.com/pages/home-trust (encryption, US hosting, HIPAA mode/BAA)
- https://heypocket.com/policies/privacy-policy (last updated 8 Sep 2025)
- https://heypocket.com/policies/terms-of-service (15 Sep 2025, change-without-notice clause)
- https://heypocket.com/policies/refund-policy (Terms of Sale: 1-year warranty, 30-day returns)
- https://docs.heypocketai.com/docs (docs index)
- https://docs.heypocketai.com/docs/features/device/pocket-web-sync (USB-C Web Sync, POCKET drive, RECORD folder)
- https://docs.heypocketai.com/docs/features/device/syncing (BLE/Wi-Fi/USB-C, USB-C port on bottom)
- https://docs.heypocketai.com/docs/getting-started/unboxing (USB-C braided cable, slider call mode)
- https://docs.heypocketai.com/docs/getting-started/status-light (LED indicator)
- https://docs.heypocketai.com/docs/getting-started/record-zoom-teams-google-meet (desktop app capture)
- https://docs.heypocketai.com/docs/features/device/dictionary (Word Dictionary limits)
- https://docs.heypocketai.com/docs/plans/pocket-pro (Pro: recordings up to 4 h)
- https://docs.heypocketai.com/docs/api (REST API) and /docs/api/recordings/get-audio-download-url, /docs/api/webhooks, /docs/api/organization/api-keys
- https://docs.heypocketai.com/docs/mcp (official MCP server, plan-gated tools)
- https://community.heypocket.com/t/where-are-the-recordings-stored/37 (cloud AI, 'USB-C is only for charging', Oct 2025)
- https://community.heypocket.com/t/usb-c-web-sync-is-here/849 (FW 1.0 USB, 12 Nov 2025)
- https://community.heypocket.com/t/recordings-accessible-via-usb-without-encryption/912 (unencrypted MP3 drive; USB access gated by app)
- https://community.heypocket.com/t/storage-capacity/2093 (64 GB, raw audio like a drive, Aug 2026)
- https://community.heypocket.com/t/changes-to-the-free-plan-whats-happening-and-why/1364 (90->14 days, 27 Jan 2026)
- https://community.heypocket.com/t/update-90-days-stays-were-not-making-the-change/1375 (reversal, 29 Jan 2026)
- https://community.heypocket.com/t/transcript-speaker-issues/1700 (no diarization on free; different providers, Apr 2026)
- https://community.heypocket.com/t/new-pocket-using-in-german/1649 (Pro has higher-quality transcription model, Mar 2026)
- https://community.heypocket.com/t/fixing-the-transcription-language/1438 (English transcribed as Welsh)
- https://community.heypocket.com/t/multiple-language/1988 (multi-language support statement, Aug 2026)
- https://community.heypocket.com/t/auto-detect-language-issues/2109 (Portuguese misdetection, Aug 2026)
- https://community.heypocket.com/t/disable-sync-with-pocket-secure-cloud/416 (processing flow, Delve trust portal)
- https://community.heypocket.com/t/quick-bullet-point-questions-about-getting-the-best-out-of-pocket/2019 (no cloud-sync switch; audio export, Aug 2026)
- https://community.heypocket.com/t/is-there-an-eta-for-recording-both-sides-of-calls-when-using-bluetooth/1972 (no BT earbud call capture)
- https://community.heypocket.com/t/full-recording-not-being-summarized/1346 (truncated long transcripts)
- https://community.heypocket.com/t/pocket-dictations-to-obsidian-plugin/1680 (official Obsidian plugin)
- https://smallest.ai/pocket (Smallest.ai Pulse STT powers Pocket; 274,098 devices)
- https://docs.smallest.ai/waves/documentation/speech-to-text-pulse/overview.md (Pulse language list - no Polish)
- https://github.com/shahcolate/pocket-libre (community BLE + local Whisper; MP3 16 kHz mono ~32 kbps in PROTOCOL.md)
- https://github.com/Cyvid7-Darus10/heypocket-own-pipeline (community research notes, Aug 2026, unverified)
- https://github.com/Maclean-D/obsidian-pocket (official Obsidian plugin source)
- https://www.telepolis.pl/tech/sprzet/pocket-wchodzi-do-polski-hit-z-doliny-krzemowej-o-polskich-korzeniach (PL launch, 497 PLN, 20 Aug 2026)
- https://xyz.pl/dzieje-sie/pocket-wchodzi-do-polski-i-wlasnie-przekroczyl-100-mln-dolarow-arr-4184 (PL launch, 19 Aug 2026)
- https://xyz.pl/poland-unpacked/polish-founded-ai-device-pocket-raises-usd-11m-as-it-scales-in-the-us-1892/ ($11M, team, 5 Jul 2026)
- https://www.turbo.pl/kieszonkowy-dyktafon-pocket-ai-oferuje-w-pelni-lokalna-transkrypcje-bez-ukrytych-subskrypcji/ (incorrect 'local transcription' claim, 30 Jun 2026)
- https://www.entrepreneur.com/business-news/pocket-has-already-sold-more-than-200000-units-of-its-ai-voice-recorder (200k units, $100M run rate, 24 Aug 2026)
- https://www.business-standard.com/companies/news/open-vision-engineering-pocket-ai-device-raises-11-million-126071500708_1.html ($11M round)
- https://getcoai.com/news/new-ai-device-transcribes-conversations-for-less-than-competitors (Dec 2024: $79, 200 free min/month + credits)
- https://www.fieldy.ai/blog/pocket-ai-vs-plaud (competitor; $129 on 21 Jul 2026; no controlled test exists)
- https://www.plaud.ai/blogs/articles/heypocket-review (competitor; Trustpilot stats, no certifications)
- https://mrktcorrect.com/blog/pocket-ai-review (affiliate, 6-month use)
- https://dev.to/webofmike/how-i-use-the-pocket-ai-recorder-for-meetings-ideas-and-life-4ac6 (affiliate, 17 Sep 2026)
- https://pocket-ai-avis.com/en/pocket-ai-review/ (affiliate)
- https://www.layer3labs.io/gear/reviews/pocket-ai-voice-recorder-smart-ai-note-taker (affiliate, no testing)
- https://itunes.apple.com/search?term=heypocket&entity=software (App Store: EN-only localization, 4.9 from 6,216 ratings)
- https://www.iansresearch.com/resources/all-blogs/post/security-blog/2026/03/30/delve-allegations-expose-weak-points-in-modern-compliance (Delve SOC 2 allegations)

#### omitted as uncertain

- account free operation
- api mcp access
- asr engine
- battery recording and standby
- certifications
- free minutes steady state
- free tier quality and retention
- integrations
- noisy room performance
- offline recording
- price
- req polish transcription
- storage
- three year tco
- transcript editing and vocabulary

### BOYA Notra

**PASS tier 2** · Polish B · API/MCP partial (undocumented MCP) · 9 field(s) omitted as uncertain

#### requirements

**req usb c port**

PASS. Native USB-C receptacle on the device body — labelled 'USB-C Port / Złącze Type-C' on the official Quick Start Guide diagram (oss.boyamic.com, Apr 2026); official spec 'Charging: USB-C (full charge in 2 hours)'. Box contents: standard USB-C-to-USB-C cable + USB-C-to-USB-A adapter + magnetic ring (BOYA 2026 catalogue; morele.net). Standard cables work — MightyGadget explicitly contrasts it with Plaud's proprietary magnetic cable. Same port carries data: 'USB drive mode' (blinking green LED) for drag-and-drop file access, and it is also the tether for Bluetooth/headset recording mode. No vendor warning against third-party cables found.

**req no subscription**

TIER 2 (tier 1 FAILS). Free allowance: Starter plan, auto-activated on device binding, '320 minutes of transcription every month, forever' (store FAQ #19); monthly quota resets, no rollover. Promotion: devices activated/bound 18 Apr – 31 Dec 2026 get the free limit raised FROM 320 TO 600 min/month for 12 months from binding — i.e. 600 total, not +600 on top (official wording: 'increasing the monthly free transcription limit from 320 to 600 minutes'). ToS frames free minutes as 'a complimentary benefit tied to the device purchase'. No 'unlimited' free tier; Ultimate (unlimited) is $29.99/month. On-device/offline transcription: none — 'AI transcription and summaries require internet connectivity currently, though local transcription is planned' (BOYA FAQ). Raw audio export for the Whisper fallback: YES — BOYA FAQ Q6: 'Recordings can be accessed and exported directly to your computer via USB-C cable without relying on BOYA cloud services'; Quick Start Guide lists a 'USB drive mode' LED state; recording date/time preserved when copied over USB (not when exported via the app). Formats: MP3 and WAV (spec sheet, retailers). Caveats: (1) USB file access is a temporary toggle in the app ('USB Access'), auto-disabled at power-off (MightyGadget, vendor-hosted KOL review) and the device must first be bound to an account; (2) exact on-device codec/sample rate undocumented — '64 GB ≈ 8,000 h of compressed audio' implies roughly 18 kbps in standard mode; (3) one Play Store user (Jun 2026) reported an 'encoding issue' that stopped exported files being readable by third-party transcription; (4) one user (Sep 2026) reported all on-device recordings wiped after 3 weeks without app sync, fix promised mid-Sep 2026.

**free minutes steady state**

Year 2+: 320 min/month (5.3 h) vs 1,200 needed — shortfall 880 min/month. Promo: 600 min/month for 12 months only for bindings between 18 Apr and 31 Dec 2026 (so a device bound in Oct 2026 drops to 320 from Oct 2027). No per-file length cap found. Non-subscription top-ups (one-time 'Transcription Quota' packs, US App Store, seen 2026-10-01): 120 min $2.90 ($1.45/h), 600 min $9.90 ($0.99/h), 3,000 min $48.90 ($0.98/h), 6,000 min $88.90 ($0.89/h). Pack validity conflicts: ToS says 'valid for 24 months'; store FAQ #20 says 'valid for 12 months'. Packs stack on any tier; monthly quota consumed first ('expiring soonest first').

**free tier quality and retention**

No evidence that Starter uses a weaker ASR model; tiers differ in minutes, summary LLMs (Starter: ChatGPT/Gemini/Claude; Pro+ adds Grok and 'Ask AI') and templates (6 vs 40 vs 60). Plain-transcription basics included on free: speaker labels, text editing, transcript translation, audio import, all export formats (MP3, WAV, TXT, DOCX, PDF, Markdown, JPEG; SRT also listed in Aug 2026 comparison), unlimited cloud storage. Language gating (80+ on Starter) appears lifted per FAQ #18, but the store plan table still shows it — conflicting. Retention: no free-tier expiry of transcripts found; FAQ claims recordings stay local by default and cloud copies used for Summary are 'destroyed instantly' after processing, while optional cloud sync is unlimited; deleted files sit 30 days in Trash; privacy policy keeps personal data one month after account cancellation. Unbinding the device or deleting the account triggers a security wipe of all on-device files.

**requirements verdict**

PASS (tier 2) — native USB-C port and USB mass-storage export of MP3/WAV (no cloud needed) make the Whisper fallback workable, but the free in-app allowance is 320 min/month (600 for 12 months under the 2026 promo) vs 1,200 needed, and Polish is only language-list evidence (grade B, no independent test).

#### identity

**basics**

BOYA Notra (first-generation Notra; app now called 'Boya OS', formerly 'BOYA Notra') — a 63×63×6.8 mm magnetic AI note-taker marketed as 'the world's first AI note taker for ambience, phone and Bluetooth calls': three recording modes (ambient, phone-call via vibration sensor, Bluetooth-headset), 64 GB storage, cloud transcription and LLM summaries in the companion app.

**maker and hq**

Brand BOYA (est. 2012, Shenzhen; microphones and audio accessories, '150+ countries, 30M+ creators, 400+ patents' — vendor-claimed). Hardware/brand entity: Shenzhen Jiayz Photo Industrial Ltd., 22F Tower 11, Tianan Cloud Park, Bantian, Longgang District, Shenzhen, China (BOYA 2026 catalogue; IFA exhibitor listing). App/backend operator and data controller: Shenzhen Perfect Acoustic Technology Co., Ltd. (App Store/Google Play developer, ToS and privacy policy; Chinese contact domain sz-cf.cn; app website boyanotra.com carries a Guangdong ICP filing). Lazada/CB Insights describe BOYA as owned by Shenzhen Perfect Acoustic Technology — corporate relationship between the two entities not documented publicly. App and backend team are China-based; ToS governed by PRC law.

**launch date**

Shown at CES 2026 (January 2026) as BOYA's first AI recorder; companion app v1.0.0 released 31 Oct 2025; first reviews Jan 2026 (CanBuyOrNot 16 Jan, MightyGadget 23 Jan). Current generation: original Notra (no 'Notra 2' announced). Sibling, not successor: Notra Neo (pre-order 24 Aug 2026, IFA 4 Sep 2026, $69.99–79.99) — BOYA's own comparison calls it 'the lighter and less expensive entry-level model' with 8 GB, 20 h, 5 m range, auto mode switching, and file transfer via Bluetooth/Wi-Fi only (no USB-C transfer listed). App renamed 'Boya OS' on 10 Jul 2026; last app update 4 Sep 2026.

**form factor**

Square card/puck, 63×63×6.8 mm, 45 g, micro-blasted aluminium, IP54. MagSafe-compatible magnetic back; magnetic adhesive ring included for non-MagSafe phones; rubberised base so it does not slide on a table. Snaps to the phone back for call recording. No clip, lanyard or wearable accessory in the box.

**availability eu poland**

Yes. Polish retail: x-kom, Media Expert, morele.net, OleOle (four colours: black, silver, cosmic orange, purple); EU: Amazon.de/.fr, Otto.de, Latvian retailers; BOYA global store ships worldwide (3–7 business days, 2-year global warranty with replacement, 15-day returns). Buying from Polish retail gives local statutory warranty (rękojmia) plus 24-month warranty (x-kom: manufacturer; morele: seller). The Quick Start Guide includes a Polish section. App UI is NOT in Polish: App Store lists English, Arabic, French, German, Italian, Japanese, Russian, Simplified/Traditional Chinese, Spanish; web app locales match. Retailer specs conflict (Media Expert 'Menu w języku polskim: Nie' vs OleOle 'Interfejs po polsku: tak') — the device has no screen, so this refers to the app, which has no Polish UI.

**company stability**

Hardware brand is an established, privately held Shenzhen microphone maker (since 2012, broad global retail distribution, 200+ R&D staff — vendor-claimed); no public funding, revenue or unit-sales figures for Notra found. Shutdown/acquisition risk of the brand looks low, but the AI service runs through a separate app entity (Shenzhen Perfect Acoustic Technology) with a small install base (Google Play 1K+ downloads, 3.3★ from ~26–28 reviews; App Store US 2.3★ from 3 ratings, Oct 2026). The line is expanding (Notra Neo, Sep 2026), which signals commitment. ToS reserves the right to 'modify, suspend or discontinue … the Application or any service … with or without notice'; privacy policy promises 30 days' notice before terminating the service. Without the cloud: device still records and (per FAQ) audio stays accessible over USB, but enabling USB access and recording both depend on prior app binding.

#### capture hardware

**microphones**

2 MEMS microphones (360° omnidirectional) + 1 VPU/VCS vibration (bone-conduction) sensor for calls. Vendor-claimed: 10 m pickup, AI noise cancellation up to −30 dB, 'up to 97% accuracy'. Tested: realistic clear pickup 5–6 m (MightyGadget; Daily Geek Show); Plaud Note Pro's 4-mic array 'noticeably better' in challenging acoustics (MightyGadget); output 'fairly noisy' despite NC with fan, typing and robot vacuum running (CanBuyOrNot); occasional light hiss (French review via Shopcentral). Battery FAQ: noise cancellation on cuts endurance from 24 h to ~20 h.

**call recording method**

Phone calls: VPU bone-conduction sensor — slide the mode switch to 'call', snap the Notra to the back of the phone (MagSafe or included magnetic ring), long-press to record; captures both sides via chassis vibrations, works on iPhone and Android without OS permissions, no alert to the other party. Switching is MANUAL (slider) — no automatic call detection (the Neo adds auto-switching). Tested caveats: thick phone cases weaken the remote voice (Japanese store review; harder on Honor Magic 8 Pro per French review); CGMagazine found handset recording unreliable and could not record Discord calls. Bluetooth/headset mode: slider to middle, connect the Notra by USB-C cable to the phone or PC, pair earbuds to the Notra in the app, then record — the Notra sits in the audio path and records both sides while you listen on earbuds; the USB tether is needed for the whole session ('far from the single gesture promised' — Journal du Geek; 'cumbersome' for AirPods — iphone-ticker.de).

**storage**

64 GB onboard; vendor claims ~8,000 h 'in standard mode' of 'compressed audio' (implies a low-bitrate codec, ~18 kbps); higher-quality WAV would hold far fewer hours (codec/quality modes undocumented). Optional unlimited cloud storage (AWS internationally per BOYA blog) on all plans.

**display and controls**

No screen. One multi-colour status LED (red = recording, green blink = USB drive mode, yellow = Wi-Fi transfer, blue = Bluetooth headset, purple = charging/low battery). One physical button plus a 3-position mode slider (ambient / headset / call). Long-press starts recording with one vibration, long-press stops with two vibrations; short press during recording sets a highlight marker. One-handed, eyes-free start is possible via the haptic cue, but reviewers note uncertainty whether recording started (Baldselect) and the need to check slider position first.

**size weight**

63 × 63 × 6.8 mm, 45 g.

**offline recording**

Yes, after initial binding: records standalone without phone or internet and stores locally; recordings sync to the app when reconnected (BOYA FAQ Q8). Sync: Bluetooth by default (30-min file ≈ 3–4 min), optional Wi-Fi 'Fast/Quick Transfer' (~1 min for 30 min, MightyGadget), automatic Wi-Fi upload while charging (vendor-hosted review), or USB-C drive mode.

**account free operation**

No. 'Recording with Notra requires device binding through the app' (BOYA FAQ Q7); first use needs app download, registration and binding (Quick Start Guide). After binding, it records offline and audio can be copied over USB without the cloud. Unbinding or deleting the account wipes all files on the device. If the vendor shut down or dropped the EU: device would presumably keep recording, but enabling USB access depends on the app toggle — whether that works without the backend is undocumented.

#### transcription and ai

**language count**

140+ languages and dialects (web app list has 145 locale codes; translation list 73). Store plan table: Starter 80+, Pro 100+, Ultimate 140+, but FAQ #18 says the full pack is unlocked for all members. Mixed-language (PL+EN) handling in one recording: undocumented; only evidence is a Dutch-English bilingual meeting rated good in a vendor-hosted review.

**speaker diarization**

Speaker labels on all plans (Speaker 1/2…), rename speakers ('Name speakers') in app/web. Tested: correct ~70–75% of the time with 3–4 regular participants vs ~80% for Plaud Note Pro (MightyGadget); 'reliable enough' for 5–6 people around a meeting table (Journal du Geek); correct 'in the majority of cases' (Daily Geek Show); 'a bit dodgy' at attributing words on calls (CGMagazine). No data on degradation beyond ~6 speakers.

**transcript editing and vocabulary**

In-app/web: text editing, find-and-replace, rename speakers, translate transcript, regenerate, keyword search across recordings ('AI search across recording files'), one-press highlight markers, time-stamped segments. Custom vocabulary/glossary: none found. Word-level timestamps: not documented. Silence removal mentioned by a user review.

**online meeting capture**

Headset/Bluetooth mode: Notra connected via USB-C to the laptop (or phone), earbuds paired to the Notra, so it records both sides of Meet/Teams/Zoom audio while you listen — vendor-claimed for 'Zoom, Microsoft Teams, Google Meet'; reviewers confirm it works but call setup cumbersome (cable for whole session, pairing via app). Otherwise: ambient mode next to the laptop speaker. No desktop app, no meeting bot, no calendar join.

**realtime transcription**

No — transcription after transfer/upload only. Live transcription and translation were removed in the 5 Feb 2026 app update (CanBuyOrNot update; Journal du Geek; Kingy).

**on device processing**

None for transcription — all ASR/LLM work in the cloud; 'local transcription is planned' (BOYA FAQ). On-device: AI noise cancellation and AES-256 storage encryption; vendor also claims 'voice desensitization' (anonymising the vocal profile before cloud upload) — reported by French reviewers, not independently verified.

#### ecosystem

**apps**

iOS (15.6+) and Android (7.0+) app 'Boya OS' (formerly 'BOYA Notra', developer Shenzhen Perfect Acoustic Technology), plus browser app 'Boya OS Web' at ai.boyanotra.com (view, edit, export, share links). No Windows/macOS desktop app. Device management (binding, USB access toggle, headset pairing, firmware) is mobile-app only. Web app was unfinished at launch (CanBuyOrNot, Jan 2026). UI languages exclude Polish.

**integrations**

None found — no Notion, Google Drive, Obsidian, Zapier/Make, Slack, calendar or CRM integration. Sharing is manual: export files or web share links. Automatic cloud sync to BOYA's own cloud only.

**export formats**

Audio: MP3, WAV. Transcript/summary: TXT, DOCX, PDF, Markdown, SRT (SRT listed in BOYA's Aug 2026 Notra-vs-Neo comparison and present in web-app strings); mind map: JPEG. All formats on the free Starter plan.

**api mcp access**

- **grade**: none (only the USB mass-storage fallback exists)
- **a rest api**: No public API, docs or API keys. The Boya OS Web front end talks to a private, undocumented backend (ai.boyanotra.com/prod-api/ with routes such as /api/cloud/list, /api/cloud/file/*, /api/asr/search/keyword) authenticated by the user's login token — not published, no rate limits or terms, reverse-engineering it is unsupported and fragile.
- **b webhooks**: None found.
- **c mcp server**: No official MCP server; no community MCP server or GitHub project for Notra/Boya OS found (searched GitHub, Glama MCP directory, web).
- **d cli sdk**: None.
- **e no code**: No Zapier, Make or n8n app/trigger found.
- **f fallback**: USB mass storage ('USB drive mode') — mount the Notra and copy MP3/WAV files with timestamps preserved; scriptable once mounted, but USB access must be re-enabled in the mobile app after each power cycle, and an account binding is required. This is the only route into a Whisper / second-brain pipeline.
- **free tier**: USB fallback works on the free tier; no paid tier offers an API either.
- **public or beta**: Nothing public, beta or enterprise-only announced.

#### pricing

**paid plans**

Pro: $17.99/month or $99.99/year (≈$8.33/month) — 1,280 min/month, 100+ languages per plan table, adds Grok and 'Ask AI', 40 templates. Ultimate: $29.99/month or $239.99/year (≈$20/month) — unlimited transcription, 140+ languages, 60 templates. EU prices reported €19.99 / €34.99 per month (Daily Geek Show, Mar 2026). Also a one-off 'All Summary Templates' unlock $29.99 and minute packs (see free_minutes_steady_state). Plain transcription features (speaker labels, editing, export, now full language pack) are NOT paywalled — only minutes, templates and LLM chat are.

#### privacy and compliance

**certifications**

Self-claimed only. Catalogue and product page: 'backed by SOC 2, HIPAA, and EN 18031 compliance'; BOYA's own security blog uses softer wording ('designed to meet SOC 2 standards', 'benchmark against HIPAA', 'committed to meeting … EN 18031 and GDPR principles'). No SOC 2 report (Type I/II), ISO 27001 certificate, HIPAA BAA, EN 18031 test report or DPA found. Daily Geek Show repeats 'SOC 2/HIPAA/GDPR compliant' without evidence. Treat all as unverified.

**encryption**

Vendor-claimed: TLS 1.3 in transit, AES-256 at rest (cloud) and 'hardware-level' AES-256 on the device so files are unreadable without account authorisation; bound devices reject unauthorised reset/delete. Marketing calls this 'end-to-end encryption', but BOYA processes audio server-side, so it is not E2EE in the strict sense. No independent audit found.

**training on user data**

FAQ: 'We pledge never to backup your data or use it for AI training without your explicit permission' (opt-in claim). But the ToS grants the operator 'a non-exclusive, worldwide, royalty-free license solely for the purpose of providing and improving our services and products' over uploaded content, and the privacy policy allows user profiling for service improvement — ambiguous. Retention: cloud summary copies deleted after processing (FAQ); app Trash 30 days; personal data retained one month after account cancellation (privacy policy); deletion requests answered within 30 days.

**recording indicator consent**

Solid red LED while recording plus vibration on start/stop — easy to miss, no audible cue. No consent prompt, announcement or participant-notice feature. Call mode is explicitly marketed as recording 'without any alerts for the other person'. Duty to inform participants rests entirely on the user.

**ai act emotion features**

None found — no voice emotion or sentiment scoring in app/web strings or marketing.

#### verdict

**independent review consensus**

Consensus: well-built, very compact, the only card recorder with three capture modes, generous 64 GB and a standard USB-C port (praised by everyone vs Plaud's cable); audio and transcription are good in quiet meetings but trail the Plaud Note Pro in noise; diarization decent but imperfect; the software was immature at launch and lost real-time transcription; Bluetooth mode works but is cumbersome. Reviewers: CanBuyOrNot (Vincent Chang, 16 Jan 2026, review unit, 'CAN BUY — decent hardware requiring software polish'); MightyGadget (23 Jan 2026, upd. 8 Apr; author works directly with brands/PR agencies; 'excellent value', Plaud Note Pro better audio, speaker ID 70–75%); CGMagazine (7/10, handset mode unreliable, transcription 'a bit dodgy' on calls); Journal du Geek (Gregori Pujol, 17 Apr 2026, 7/10, good in 5–6-person meetings, degrades in restaurants, BT mode cumbersome, freemium limits); GameStar.de (9 Jun 2026, 'does not keep all its promises in everyday use' — full text not accessible); iphone-ticker.de (13 Mar 2026, custom templates paywalled, AirPods mode needs USB); Daily Geek Show (17 Mar 2026, review unit + discount code — treat as promotional; very positive); Baldselect (25 Jun 2026, affiliate links; no-screen anxiety). Flagged: Kingy AI 'review' is desk research and Kingy publishes a BOYA 'campaign breakdown' page (likely sponsored); boyamic.com 'KOL insights' pages are vendor-hosted influencer content; BOYA store reviews look seeded (identical texts under different names). No independent Polish-language review exists.

**known issues**

On-device recordings wiped after 3 weeks without syncing to the app — support promised a fix mid-September 2026 (Play Store, 3 Sep 2026); slow summary generation vs Plaud (Play Store, Jul 2026); transcription failing, an encoding change breaking third-party transcription of exported files, and support resisting a return (Play Store, Jun 2026); low app ratings (3.3★ Android, 2.3★ iOS). Real-time transcription removed Feb 2026; web app unfinished at launch. Call mode: manual switch, phone cases weaken the remote side, unreliable for some reviewers (CGMagazine). Bluetooth mode needs a USB tether for the whole session. App exports drop recording date/time. No screen, so it is easy to be unsure whether it is recording. Unbinding wipes the device.

**best for**

In-person meetings and quick voice notes are its strengths (compact, one-press start, 5–6 m practical pickup, highlight button). Phone calls: workable via the vibration sensor when stuck to a caseless/MagSafe phone, but manual switching and case sensitivity make it less dependable. Online calls: possible via USB-tethered headset mode, but the buyer's existing Tactiq/Wispr Flow capture is simpler. Weak for noisy restaurant/café meetings.

**pros cons**

Pros: (1) genuine USB-C port with USB mass-storage export of MP3/WAV — passes R2 and enables a Whisper workflow; (2) three capture modes incl. phone calls and Bluetooth headsets in a 45 g card; (3) 64 GB storage, long standby, sold in Polish retail at ~600–700 PLN with local warranty; (4) plain-transcription features (speaker labels, editing, exports, 140+ languages incl. listed Polish) not paywalled; (5) one-time minute packs exist (≈$0.89/h). Cons: (1) only 320 free min/month long-term (600 promo for 12 months) vs 1,200 needed; (2) no independent Polish accuracy evidence, ASR engine undisclosed; (3) privacy policy says data stored in the PRC, no DPA/EU representative, unverified SOC 2/HIPAA/EN 18031 claims — a GDPR problem for client meetings in the cloud path; (4) account binding required, unbind wipes device, reports of data-loss and encoding bugs; (5) no API/MCP/integrations, weaker noise handling than Plaud Note Pro.

**verdict for me**

CONSIDER (as a tier-2 device only). Requirements: PASS tier 2 — USB-C port and USB mass-storage audio export let you self-transcribe with local Whisper, sidestepping both the 320-min free cap and the China-stored cloud. Polish quality in BOYA's cloud is unproven (language-list only), so plan on Whisper for Polish anyway. Deciding reason: it is one of the few compact phone-mountable recorders with a real USB-C port and drag-and-drop audio, at ~600–700 PLN — but only buy it if you are willing to verify the on-device audio codec and accept app-account binding and early-firmware data-loss risk.

**conflicting evidence**

(1) Promo size: Step-2 note '+600/month' vs official wording 'from 320 to 600 minutes' (600 total) — official wording wins. (2) Languages on the free tier: store plan table 'Starter 80+ / Pro 100+ / Ultimate 140+' and x-kom 'ponad 80' vs store FAQ #18 'full language pack unlocked for all members' and boyamic.com table '140+' for every tier; web-app code shows no per-plan filter. (3) Data residency: privacy policy v2.0 'all personal information stored within the PRC' vs BOYA blog 'international data hosted on AWS'. (4) Minute-pack validity: ToS 24 months vs store FAQ 12 months. (5) Pro price: $17.99/month 'billed yearly' on boyamic.com vs $99.99/year in App Store and store table. (6) Device price: $149 launch / $129 BOYA blog / '$209.99 regular' on store with discount codes; Otto.de €249.95 vs Amazon ~€135. (7) Noisy rooms: Journal du Geek and CanBuyOrNot (degrades/noisy) vs Daily Geek Show (restaurant fine; promotional relationship). (8) Polish UI: Media Expert 'Nie' vs OleOle 'tak' (app store listing has no Polish). (9) Cloud: FAQ 'cloud data destroyed instantly after summary' vs 'unlimited cloud storage' with automatic Wi-Fi sync. (10) Battery: vendor 24 h vs CGMagazine's ~10% per 50 min of recording.

#### other info

**sources**

- https://www.boyamic.com/product/ai-voice-recorder-boya-notra — official spec page, plan table, promo wording, certification claims (seen 2026-10-01)
- https://store.boyamic.com/products/notra — store page: plan table (80+/100+/140+), FAQ #1-23 incl. 'full language pack unlocked', '320 minutes … forever', pack validity, unbind wipe (seen 2026-10-01)
- https://www.boyamic.com/support/faq/77 — BOYA Notra Q&A: USB-C export without cloud (Q6), binding required (Q7), offline (Q8), headset mode (Q11), metadata (Q14), subscription lapse (Q15)
- https://oss.boyamic.com/uploads/files/20260416/20260416155639862.pdf — Quick Start Guide (EN/PL): USB-C port diagram, LED 'USB drive mode', modes, binding
- https://oss.boyamic.com/uploads/files/20260310/20260310093327279.pdf — BOYA 2026 product catalogue: Jiayz entity/address, SOC 2/HIPAA/EN 18031 claim, box contents
- https://www.boyanotra.com/policies/boya_privacy_policy_en.html — Terms of Service (Shenzhen Perfect Acoustic Technology; PRC law; free minutes tied to device; quota validity 24 months)
- https://boyanotra.com/policies/BOYANotraDataSecurity&PrivacyPolicyvEN.html — Data Security and Privacy Policy v2.0 (data stored in PRC, PIPL, retention)
- https://ai.boyanotra.com/ — Boya OS Web app (JS bundle: 145-locale transcription list incl. pl-PL, private /prod-api backend, AWS + Alibaba OSS SDKs)
- https://www.boyamic.com/blogs/are-ai-voice-recorders-secure — BOYA security blog (21 Jan 2026): AWS internationally, Alibaba Cloud in China, 'designed to meet' SOC 2
- https://store.boyamic.com/blogs/news/boya-notra-vs-notra-neo-7-key-upgrades-compared — Notra vs Neo (31 Aug 2026): $129, SRT export, Neo has no USB-C transfer
- https://www.boyamic.com/blogs/how-to-record-phone-calls-and-online-meetings-while-using-bluetooth-headphones — headset mode procedure (19 Aug 2026)
- https://apps.apple.com/us/app/id6754067458 — App Store listing: developer, UI languages, version history, in-app purchase prices
- https://play.google.com/store/apps/details?id=com.wanmei.boyanotra — Google Play listing: 1K+ downloads, 3.3 stars, user reviews (Jun-Sep 2026)
- https://www.canbuyornot.com/reviews/audio/boya-notra-review-price/ — CanBuyOrNot hands-on review (16 Jan 2026, review unit)
- https://mightygadget.com/boya-notra-ai-note-taker-review/ — MightyGadget hands-on vs Plaud (23 Jan 2026, upd. 8 Apr 2026)
- https://www.cgmagonline.com/review/hardware/boya-notra-ai-notetaker/ — CGMagazine review (7/10)
- https://www.journaldugeek.com/test/test-boya-notra-cet-enregistreur-ia-tient-ses-promesses-en-reunion-mais-pas-partout/ — Journal du Geek test (17 Apr 2026, 7/10)
- https://dailygeekshow.com/test-boya-notra-enregistreur-vocal-ia/ — Daily Geek Show test (17 Mar 2026, review unit + discount code)
- https://www.gamestar.de/artikel/ich-wuenschte-dieser-plaud-konkurrent-waere-besser-das-boya-notra-haelt-im-alltag-nicht-alle-versprechen,3454076.html — GameStar review (9 Jun 2026; only headline/teaser accessible)
- https://www.iphone-ticker.de/boya-notra-ki-diktiergeraet-fuer-gespraeche-meetings-und-telefonate-274502/ — iphone-ticker.de hands-on (13 Mar 2026)
- https://shopcentral.com.ph/boya-notra-review-can-this-ai-voice-recorder-really-dethrone-plaud/ — review (15 Aug 2026): USB access, French transcription, VPU on thick phones
- https://baldselect.com/boya-notra-review/ — Baldselect review (25 Jun 2026, affiliate links)
- https://kingy.ai/news/boya-notra-ai-voice-recorder-a-comprehensive-review/ — Kingy AI desk review (likely sponsored)
- https://www.boyamic.com/kol_insights/boya-notra-ai-voice-recorder-review — vendor-hosted KOL review (USB Access toggle, Dutch-English test)
- https://www.boyamic.com/kol_insights/boya-notra-vs-plaud-note-which-ai-recorder-fits-modern-workflows-better — vendor-hosted KOL review (mass storage, Wi-Fi upload when charging)
- https://www.x-kom.pl/p/1571199-dyktafon-boya-dyktafon-ai-notra-czarny.html — x-kom: 699 PLN, 24-month warranty, 'ponad 80 językach' (seen 2026-10-01)
- https://www.morele.net/dyktafon-boya-notra-15967627/ — morele.net: 649.87 / 589 PLN, box contents (seen 2026-10-01)
- https://www.mediaexpert.pl/telewizory-i-rtv/drobny-sprzet-rtv/dyktafony/dyktafon-ai-boya-notra-czarny — Media Expert listing (403 on fetch; snippet 'Menu w języku polskim: Nie')

#### omitted as uncertain

- asr engine
- battery recording and standby
- noisy room performance
- price
- processing location data residency
- promise durability
- raw audio export
- req polish transcription
- three year tco

### BOYA Notra Neo

**PASS tier 2 (weak)** · Polish B · API/MCP partial (undocumented MCP) · 14 field(s) omitted as uncertain

#### requirements

**req usb c port**

PASS. Native USB-C receptacle on the device body - official spec 'Charging Interface: USB-C', in-box 'USB-C to USB-C Cable x1' (boyamic.com product page and store package contents); confirmed by hands-on reviews (canbuyornot, techreviewer.de: ~90 min full charge). Standard cable, no vendor-only/proprietary connector. Data over the same port: NOT for file transfer - Boya's own Notra vs Notra Neo comparison table lists File Transfer 'Bluetooth / WIFI' for the Neo versus 'Bluetooth / WIFI / USB-C' for the Notra. The USB-C port is also used as a wired audio bridge in Bluetooth Recording mode (FAQ: connect Neo to phone/computer via USB-C, then pair earbuds to the Neo).

**free minutes steady state**

320 min/month in year 2+ (after promos) vs 1,200 needed = 880 min/month short (27% coverage). Promotions: 600 min/month for 12 months from binding for devices bound before 31 Dec 2026; one-time 7-day Ultimate trial per user; 50% off an annual Pro/Ultimate plan for 14 days after the trial (offer until 31 Dec 2026). Per-file and usage caps: imported audio must be shorter than 5 hours; max 5 files uploaded simultaneously; max 5 concurrent transcription tasks; an undisclosed daily cap exists. Non-subscription top-ups ('Transcription Quota' packs, one-time, do not reset, valid 24 months per ToS) - US App Store prices seen 2026-10-01: 120 min $2.90 ($1.45/h), 600 min $9.90 ($0.99/h), 3,000 min $48.90 ($0.98/h), 6,000 min $88.90 ($0.89/h). Singapore pricing per kingy.ai: S$3.99 / S$13.98 / S$68.98 / S$119.99. Steady-state shortfall of 880 min/month costs about $13/month in 6,000-min packs.

**free tier quality and retention**

No evidence of a weaker ASR model on the free tier: the plan table ticks Speaker Labels, Transcript Translation, Text Editing, Audio Import, 10 export formats, App & Web and the full 140+ language list for Starter. Paywalled items are AI extras only (Ask AI, 40/60+ summary templates, custom templates) - plain transcription basics are not paywalled. Retention: 'Unlimited Cloud Storage' on all plans, no free-tier deletion window found. Caveats: ToS 'Service Degradation' clause allows switching accounts with heavy usage to 'alternative models', lower priority queues or concurrency limits; older Notra FAQ said cloud copies are deleted immediately after AI processing, which contradicts the current 'unlimited cloud backup/sync' marketing (see conflicting_evidence).

**requirements verdict**

PASS (tier 2) - R2 passes (native USB-C), R3 fails tier 1 (320 free min/month) but reaches tier 2 because MP3/WAV can be exported from the app; R1 only grade-B (Polish listed, untested). Deciding fact: the tier-2 Whisper path depends on the vendor app and account because the Neo has no USB file transfer.

#### identity

**basics**

BOYA Notra Neo - entry-level AI note-taker / voice recorder, second model of BOYA's Notra line (Neo = cheaper, lighter sibling of the BOYA Notra). Square magnetic card that records in-person audio (2 MEMS mics), phone calls (vibration/bone-conduction VCS sensor) and Bluetooth-earbud calls, auto-switching between the three modes, with transcription and summaries in the Boya OS app. Positioning: 'More Ways to Record. Less to Pay' - students, interns, young professionals.

**launch date**

Announced 25 Aug 2026; pre-orders opened 24 Aug 2026 ($69.99 early bird); official launch at IFA 2026 Berlin on 4 Sep 2026 (audioXpress says 7 Sep). Current and only generation. It is a cheaper sibling of the BOYA Notra (CES Jan 2026), not a successor: BOYA's own comparison blog calls the Neo 'the lighter and less expensive entry-level model' and says it 'does not upgrade every hardware specification' - both remain on sale. No successor announced.

**form factor**

Square card/disc 63 x 63 x 8 mm, single button, magnetic back that snaps onto MagSafe iPhones and magnetic surfaces; a magnetic ring is included for non-MagSafe phones. Phone-attached for calls, table-top for meetings. No clip or lanyard listed in the box (box: device, magnetic ring, USB-C to USB-C cable, quick-start guide). Colors: Black, White, Light Pink, Neon Yellow.

**price**

MSRP $79.99 (press release, 4 Sep 2026); pre-order $69.99 (24 Aug-4 Sep 2026). EU: EUR 89.00 regular on BOYA's shop, EUR 78.32 pre-order (techreviewer.de, Aug 2026); EUR 99.99 on Amazon.de (techreviewer.de, 23 Sep 2026); EUR 119 on Amazon France (Daily Geek Show). Official US store store.boyamic.com on 2026-10-01 lists 'Regular price $128.55' with an on-page 30% code RTF7JC (= about $89.99) and HUF 42,500 on the Hungarian storefront - an inflated list price with permanent coupon. Poland: 399.00 PLN gross suggested price at Hurtel.com (Polish distributor/wholesaler listing, seen 2026-10-01). Singapore ~S$102 (canbuyornot).

#### capture hardware

**microphones**

2 MEMS microphones + 1 VCS/VPU (vibration/bone-conduction voice pickup sensor) - 'hybrid microphone array'; 360-degree pickup, vendor-claimed range up to 5 m (Notra: 10 m), AI noise cancellation up to -30 dB. All vendor-claimed. Tested: canbuyornot found recordings 'echoey' with ambient noise remaining and voices sounding distant at 3 m; Daily Geek Show found a 6-person conference room usable (one distant quiet speaker merged) and a cafe usable at 80 cm; techreviewer.de described noise-cancelled audio as tinny. Camera Jabber cautions it may struggle in difficult acoustics.

**call recording method**

Phone calls: snap the Neo onto the back of the phone and press record - the built-in bone-conduction (VCS/VPU) vibration sensor picks up both sides through the handset body, no app or phone integration needed, works on iPhone and Android (MagSafe or included magnetic ring). Bluetooth calls: 'Bluetooth Recording' mode - connect the Neo to the phone or computer with the USB-C cable, pair Bluetooth earbuds to the Neo in the app (Me > My Device > Bluetooth Headset), the Neo bridges and records the call; AirPods and Galaxy Buds recommended, others may vary. Mode is selected automatically (ambient / phone call / Bluetooth) - no switch. Tested issues: canbuyornot found the BT-earbud recording 'crackly and rumbly' and the app showing Phone Call mode while the device lay on a table; an App Store review reports EarPod bridged recording would not set up on an iPhone 14. Daily Geek Show recorded 11 phone calls without major complaints.

**battery recording and standby**

Vendor-claimed: 610 mAh, up to 20 h continuous recording, up to 365 days standby, ~1.5 h full charge via USB-C. Tested: canbuyornot - a 30-min recording used ~3% (extrapolates to roughly 16-17 h); techreviewer.de - used through the whole IFA week and still ~15% left (no hour count).

**display and controls**

No screen. One physical button: press and hold to start (one vibration + red indicator LED) or stop (two vibrations); short press during recording marks a highlight. Mode is chosen automatically. Haptic feedback means recording can be started one-handed without looking.

**size weight**

63 x 63 x 8.0 mm, 34.5 g (BOYA spec table). For comparison the BOYA Notra is 63 x 63 x 6.8 mm, 45 g.

**offline recording**

Yes - records independently without the phone or internet and saves to the 8 GB internal storage (FAQ: 'supports independent recording'). Sync to the Boya OS app over Bluetooth or Wi-Fi (WLAN); no USB sync. Sync speed for long recordings not published; techreviewer.de synced daily over Wi-Fi without complaint. An app account and device binding are required before use/sync.

#### transcription and ai

**language count**

Vendor claim: '140+ languages and dialects' (Amazon.com listing title says 114). The web app list has 145 locales covering 80 distinct base languages (many are regional variants of Arabic, English, Spanish, Chinese). Polish (pl-PL) is included. Mixed-language (PL+EN) handling: no evidence; one language code or 'auto' per job.

**speaker diarization**

Speaker labels included on the free tier; rename speakers ('Name Speaker', apply to current or all segments). Tested: techreviewer.de - even quiet two-person conversations were sometimes split into 3-4 speakers; Daily Geek Show - 5 of 6 participants correctly separated in a 2-hour conference-room meeting, the sixth (distant, quiet) merged with a neighbour. No published speaker limit.

**transcript editing and vocabulary**

In app/web: text editing of the transcript (free tier), find-and-replace, rename speakers, sentence-level timestamps with click-to-seek playback, audio crop editor, folders and search across files; transcript export can include or omit timestamps and speaker names. Transcript translation (73 target languages incl. Polish) on all plans. Ask AI (natural-language search across recordings) is Pro/Ultimate only. No custom vocabulary / glossary / hot-word feature found in the app or web code - techreviewer.de saw technical terms mis-transcribed ('ANKER Thus AI chip' -> 'TWS AI chip').

**online meeting capture**

No bot, desktop capture app or dock. Two options: (1) Bluetooth Recording mode - tether the Neo to the laptop by USB-C, pair your earbuds to the Neo, and it records both sides of a Meet/Teams/Zoom call (reviewer found the audio crackly); (2) ambient mode with the device next to the laptop speaker. Boya OS Web also accepts imported audio files (<5 h), so recordings from other tools can be transcribed against the quota.

**realtime transcription**

No - transcription runs only after sync/upload. Real-time transcription and translation were announced for the original Notra and later cancelled (kingy.ai). Processing time observed: 30-min recording in ~6 min (canbuyornot); 6-min recording ~8 min including summary and mind map (techreviewer.de).

**on device processing**

Only AI noise reduction and automatic mode detection on the device. All transcription, translation and summarisation run in the cloud; no offline transcription.

#### ecosystem

**apps**

Boya OS (formerly BOYA Notra) for iOS/iPadOS 15.6+ (also Apple-silicon Mac and visionOS via App Store), Android (Google Play, package com.wanmei.boyanotra), and Boya OS Web at ai.boyanotra.com. Web is ahead in some features (custom templates arrived on web before the app; MCP authorization and Notion/Google Drive integrations are in the web app). App UI languages: 10, no Polish. iOS rating 2.3/5 (3 ratings) on 2026-10-01; frequent 'bug fixes' releases (1.2.30-1.2.41, Aug-Sep 2026).

**export formats**

10 formats on all plans incl. free: audio MP3, WAV; text DOCX, PDF, TXT, Markdown, SRT; mind map JPEG, Markdown; plus shared link. Transcript export can include timestamps and speaker labels. Note: the Notra-era copy and some UI strings say '7 file export formats' (SRT and Markdown mind map were added later).

#### pricing

**paid plans**

Pro: $17.99/month or $99.99/year - 1,280 min/month, 40 templates, custom templates, Ask AI. Ultimate: $29.99/month or $239.99/year - 'unlimited' transcription (fair use 3,000 min/month per ToS), 60+ templates, Ask AI. EUR (techreviewer.de): Pro EUR 19.99/month or EUR 110.99/year; Ultimate EUR 34.99/month or EUR 249.99/year. SGD (canbuyornot): Pro S$24.99/month, Ultimate S$41.99/month. Plain-transcription features (Polish, speaker labels, export incl. audio, translation, editing) are NOT behind the paywall per the current plan table - only minutes and AI extras are. One-time minute packs exist outside subscriptions (see free_minutes_steady_state).

#### privacy and compliance

**certifications**

Self-claimed only. Product page shows 'Global Compliance SOC 2 - HIPAA - EN 18031' and 'OWASP Top 10 Protected', but BOYA's own security blog words them as 'designed to meet SOC 2 standards', 'we benchmark our practices against HIPAA', 'committed to meeting... EN 18031 and GDPR principles' - no SOC 2 report, ISO 27001 certificate, HIPAA BAA, EN 18031 test report or trust center found. No DPA offered. EN 18031 conformity is required for CE marking of radio equipment since Aug 2025, so a claim is plausible but unverified.

**encryption**

Vendor-claimed: AES-256 at rest, TLS 1.3 in transit; privacy policy adds isolation and SHA256 data masking. Marketed as 'End-to-End Encryption', but the server performs transcription and LLM summarisation, so it is not E2EE in the strict sense. On-device encryption of the 8 GB storage not stated.

**training on user data**

FAQ: 'Boya will not use your data for AI model training without your authorization' (opt-in). Privacy policy: de-identified data may be analysed and 'commercially utilize[d]'; personal data retained one month after account cancellation, then deleted or anonymised. Older Notra FAQ claimed cloud audio is 'automatically deleted immediately after processing' - inconsistent with current 'unlimited cloud backup'. MCP consent screen warns that training by connected AI clients depends on their own policies.

**recording indicator consent**

Red indicator LED lights while recording; vibration feedback (felt by the user only). No audible tone, no consent prompt or announcement feature. Phone-call mode captures both sides without notifying the other party (marketing stresses recording without interrupting the call). The duty to inform participants rests entirely on the user. The MCP consent screen reminds users transcripts may contain other people's speech.

**ai act emotion features**

None found - no voice emotion or sentiment scoring of speakers in the app, web or marketing.

#### verdict

**independent review consensus**

Three hands-on reviews, all with vendor-supplied units: (1) Can Buy or Not (Vincent Chang, 4 Sep 2026; 'Review unit provided by Boya') - 4/5 'Can Buy', 'cheaper but still good'; English transcription accurate, audio echoey and distant at 3 m, BT-earbud mode crackly, app mode-detection bug. (2) techreviewer.de (Timo Altmeyer, 23 Sep 2026; test unit, Amazon affiliate links) - 8.2/10; German and English reliably recognised in quiet rooms, accuracy drops in trade-fair noise, over-splits speakers, misses technical terms, slow processing, scratches easily, 'generous free plan'. (3) Daily Geek Show (FR; unit from BOYA; one week incl. 2 h six-person meeting, cafe, 11 calls) - 4.3/5; French transcription clean, 5/6 speakers separated, usable in a cafe at 80 cm, poor in wind, warns of quota depletion. Press-release coverage without testing: Yanko Design, Gizmochina, TechTimes, audioXpress, Camera Jabber, GadgetMatch, PR Newswire. Consensus: good value entry device, fine in quiet small rooms, weaker in noise/distance and diarisation; nobody tested Polish.

**noisy room performance**

Tested evidence only: techreviewer.de - accuracy 'decreases' noticeably on a noisy trade-fair floor; Daily Geek Show - six-person conference room OK except one distant quiet voice, cafe 'usable' at 80 cm, outdoor wind worst of all tests; canbuyornot - ambient noise remains despite noise cancellation and voices sound distant at 3 m. Quality drop starts around 2-3 m in practice, well short of the claimed 5 m.

**known issues**

App shows Phone Call mode while the device is on a table (auto-mode detection imprecise); Bluetooth mode requires a USB-C tether and compatible earbuds, audio crackly; EarPod bridged recording failed on an iPhone 14 and support 'no response' (App Store review); slow cloud processing; speaker over-segmentation; technical vocabulary errors; plastic housing scratches within days; undisclosed daily transcription cap; app renamed and frequently patched (young platform); app UI not available in Polish; no USB file transfer.

**best for**

Best: phone calls (vibration sensor on the back of any phone, both sides, no app) and quick voice notes (one-button, haptic). OK: in-person meetings in quiet small-to-medium rooms with the device within ~2-3 m. Weak: online calls (only via USB-tethered Bluetooth bridge or speaker pickup - the buyer's Tactiq/Wispr Flow setup is better), large or noisy rooms, field/outdoor use.

**pros cons**

- **pros**:
  - Native USB-C port and standard cable (passes R2)
  - Cheapest Boya entry ($79.99 / EUR 89 / 399 PLN) with automatic room/call/Bluetooth switching
  - Vibration-sensor phone-call capture works on iPhone and Android without apps
  - Free tier keeps all plain-transcription features incl. Polish in the language list, speaker labels and MP3/WAV export
  - Undocumented official read-only MCP server (transcripts, summaries, metadata) plus Notion/Google Drive sync
- **cons**:
  - Only 320 free min/month (600 for year 1) vs 1,200 needed
  - No USB file transfer: raw audio only via app/web export, account required - weak Whisper fallback
  - No independent Polish test; app UI not in Polish; no custom vocabulary
  - Data held by a PRC company on Alibaba Cloud US / PRC per policy; no DPA, no EU hosting, certifications self-claimed
  - Mediocre audio beyond ~3 m and in noise; diarisation over-splits speakers

**verdict for me**

SKIP (consider only as a cheap tier-2 phone-call recorder). Requirements: PASS tier 2 - USB-C passes, but 320 free min/month means Polish meetings would rely on manual MP3/WAV export from the vendor app plus local Whisper. Polish quality: listed (grade B), untested. Deciding reason: unlike the BOYA Notra, the Neo has no USB file transfer, so the Whisper fallback and data control depend on a PRC-run cloud account with no DPA - the Notra (USB-C transfer, 64 GB) is the better Boya pick for this buyer.

**conflicting evidence**

1) Free-tier languages: kingy.ai Notra review and a Polish retail description say ~80 languages on the free plan, 100+ on Pro, 140+ on Ultimate (legacy UI strings in the app also say Pro '100+'); the current official plan table (2026-10-01) and the web app's plan config show 140+ on all plans including Starter. 2) Language count: '140+' (BOYA) vs '114 Languages' (Amazon.com Neo listing title) vs 145 locales / 80 distinct languages in the app's list. 3) Data location: privacy policy v2.0 says all personal data stored in the PRC on Google Cloud infrastructure; BOYA blog says international users are hosted on AWS; observed API/MCP host is Alibaba Cloud US (Los Angeles). 4) Cloud retention: older Notra FAQ says audio is deleted from the cloud immediately after processing; current marketing promises unlimited cloud backup and cross-device sync. 5) Compliance: product page lists 'SOC 2 - HIPAA - EN 18031' as compliance; BOYA's blog says only 'designed to meet' / 'benchmark against'. 6) USB-C data: a web-search summary claimed the Neo exports to a computer via USB-C (that FAQ text belongs to the Notra); BOYA's own comparison table lists Neo file transfer as Bluetooth/Wi-Fi only. 7) Launch: 4 Sep 2026 (PR Newswire, BOYA) vs 7 Sep 2026 (audioXpress). 8) Price: MSRP $79.99 vs official store 'regular price' $128.55 with a permanent 30% code (about $89.99); EUR 89 (BOYA shop) vs EUR 99.99 (Amazon.de) vs EUR 119 (Amazon.fr). 9) Ownership: BOYA catalog/IFA name Shenzhen Jiayz Photo Industrial; App Store, ToS and privacy policy name Shenzhen Perfect Acoustic Technology.

#### other info

**sources**

- https://store.boyamic.com/products/boya-notra-neo (official store: plan table, FAQ 1-17, comparison table, package contents; seen 2026-10-01)
- https://www.boyamic.com/product/ai-voice-recorder-boya-notra-neo (official spec sheet)
- https://store.boyamic.com/blogs/news/boya-notra-vs-notra-neo-7-key-upgrades-compared (Notra vs Neo comparison)
- https://store.boyamic.com/blogs/news/boya-notra-neo-one-ai-recorder-for-the-conversations-that-shape-your-day (vendor blog)
- https://www.prnewswire.com/news-releases/boya-launches-notra-neo-at-ifa-2026-making-everyday-ai-note-taking-more-accessible-302867554.html (launch press release)
- https://audioxpress.com/news/boya-launches-notra-neo-at-ifa-2026-making-everyday-ai-note-taking-more-accessible (launch coverage)
- https://www.boyamic.com/news/boya-launches-boya-notra-neo (vendor news)
- https://www.canbuyornot.com/reviews/audio/boya-notra-neo-review-price/ (hands-on, review unit from Boya)
- https://en.techreviewer.de/boya-notra-neo-test/ (hands-on at IFA, affiliate links)
- https://dailygeekshow.com/test-enregistreur-ia-boya-notra-neo/ (hands-on, French, review unit)
- https://en.techreviewer.de/boya-notra-neo-zum-vorbestellerpreis-ki-recorder-startet-fuer-7832-euro/ (EUR pricing)
- https://www.techtimes.com/articles/325273/20260824/boya-notra-neo-pre-order-opens-august-24-6999-ai-voice-recorder-built-campus.htm (pre-order pricing)
- https://camerajabber.com/photography-news/boyas-notra-neo-is-a-70-ai-recorder-aimed-at-students-and-interviewers/ (launch coverage)
- https://www.yankodesign.com/2026/08/25/at-69-99-the-boya-notra-neo-is-the-ai-note-taker-that-students-can-finally-afford/ (press-release based)
- https://hurtel.com/pl/products/rejestrator-glosu-boya-notra-neo-z-transkrypcja-ai-bialy-214318 (Poland, 399 PLN)
- https://www.amazon.com/Boya-Notra-Recorder-Meetings-Classes/dp/B0HBWRNKWP (Amazon US listing, '114 Languages')
- https://apps.apple.com/us/app/boya-os/id6754067458 (App Store: seller, UI languages, in-app purchase prices, rating)
- https://play.google.com/store/apps/details?id=com.wanmei.boyanotra (Google Play listing)
- https://ai.boyanotra.com/ (Boya OS Web - JS bundles inspected for language list, plan config, MCP consent strings, integrations)
- https://ai.boyanotra.com/.well-known/oauth-authorization-server and https://mcp.boyaos.com/.well-known/oauth-protected-resource (MCP OAuth metadata, fetched 2026-10-01)
- https://boyanotra.com/policies/BOYANotraDataSecurity&PrivacyPolicyvEN.html (app privacy policy v2.0)
- https://boyanotra.com/policies/BOYANotraTermofServiceEN.html (app ToS v3.0, fair use, minutes, PRC law)
- https://www.boyamic.com/blogs/are-ai-voice-recorders-secure (compliance wording, AWS/Alibaba hosting)
- https://www.boyamic.com/support/faq/77 (BOYA Notra Q&A - USB-C export, offline, encryption)
- https://www.boyamic.com/product/ai-voice-recorder-boya-notra (Notra plans, transfer methods)
- https://kingy.ai/news/boya-notra-ai-voice-recorder-a-comprehensive-review/ (Notra limits, earlier language gating, cancelled real-time)
- https://oss.boyamic.com/uploads/files/20260310/20260310093327279.pdf (BOYA 2026 product catalog, company name)
- https://huggingface.co/blog/michaljunczyk/introducing-polish-asr-leaderboard (BIGOS / Polish ASR leaderboard)
- https://ipinfo.io/47.251.8.30 (hosting lookup: Alibaba Cloud US)

#### omitted as uncertain

- account free operation
- api mcp access
- asr engine
- availability eu poland
- company stability
- integrations
- maker and hq
- processing location data residency
- promise durability
- raw audio export
- req no subscription
- req polish transcription
- storage
- three year tco

### FoCase Rec CR1

**PASS tier 2 (unverified)** · Polish C · API/MCP none · 25 field(s) omitted as uncertain

#### requirements

**req no subscription**

tier 2. Tier 1 is claimed but unverified, and the vendor contradicts it. (1) Official product page (focase.net, record updated 2026-10-01): 'Lifetime free AI service includes: transcription and summarization (Monthly limit of 1800 minutes.)'. The same site's FAQ says 'Lifetime free service with 600 minutes of free usage every month'. No terms define 'lifetime' (device life, account life, transferability, monthly reset). (2) Japan crowdfunding 2024: 600 min/month free, extra minutes ¥150 per 60 min; GREEN FUNDING backers got a '1-year AI membership'. (3) Kentfaith rebrand on the same FOCASE REC app: 'free 12-month ai membership (600 minutes/month). For additional minutes, directly subscribe in FOCASE REC app'. Verified buyers in Jul–Aug 2026 say 'Subscription is required after the free trial period'. (4) A Google Play user (Dec 2024) reports 600 min/month, with extra minutes sold 'in chunks that are good for up to a year'. Conclusion: the allowance appears to depend on the sales channel or activation. At 600/month it covers half of the 1,200 needed, so tier 1 fails; only the unverified 1,800 figure would reach tier 1. There is no on-device or offline transcription. Raw audio exports cleanly: WAV files appear over USB mass storage once USB permission is on (Google Play review, 28 Aug 2026: 'connect it to your computer and the wav files will display'), and files can also be downloaded per file over Bluetooth/Wi-Fi in the app. The local-Whisper fallback is therefore practical: tier 2.

#### identity

**basics**

FoCase Rec CR1 — the 'FoCase AI Voice Recorder'. Also sold as 'FoCase Note', and rebranded as Kentfaith GW63.0003 and NShi/BoYata on marketplaces. A square 62×62×7 mm magnetic/MagSafe voice and phone-call recorder paired with the FOCASE REC app. Transcription runs in the cloud (vendor-claimed OpenAI Whisper), with GPT summaries. Positioning: a budget Plaud-style call recorder sold mainly through crowdfunding, its own Shopify store and white-label marketplace resellers.

**form factor**

Square aluminium puck/card, 7 mm thick, with a built-in magnet. It snaps to an iPhone MagSafe area; an adhesive magnetic ring is included for Android or non-MagSafe phones; it also sticks to metal desks. Two buttons, no screen. No clip or lanyard in the box (Kentfaith box: recorder, USB-C cable, manual, magnetic ring); the Japanese version shipped with a pouch.

**availability eu poland**

Direct import only. focase.net ships to Poland and the EU with PLN/EUR pricing ('Free Shipping, 24-Hour Dispatch'). Returns go to Hong Kong; the store acknowledges the EU 14-day withdrawal right. Marketplace listings exist on eBay.de and Newegg. Not found on Amazon.pl/.de, Allegro, x-kom, Media Expert or Komputronik. Polish statutory warranty is effectively unenforceable against a non-EU seller. App UI is English-only on iOS (the App Store lists EN only); the store site is EN/DE/JA. No Polish UI.

#### capture hardware

**call recording method**

Vibration/bone-conduction sensor. Snap the device to the back of the phone (MagSafe or the included ring) and press the button once the call is under way. It picks up the remote party from the earpiece's chassis vibration and your voice through the mics, so it works with any calling app (cellular, WhatsApp, Teams mobile). Start is manual; there is no automatic call detection and no Bluetooth passthrough. Kentfaith FAQ caveats: does not work if you take the call on headphones; set earpiece volume to at least 70%. Works on both iPhone (MagSafe) and Android (ring).

**size weight**

62 × 62 × 7 mm, 28 g (Kentfaith spec, focase.net '7mm thickness, 28g', Japanese press). The 'FoCase Note' copy gives 2.47 × 2.47 × 0.25 in (≈ 62.7 × 62.7 × 6.4 mm).

**offline recording**

Yes: records standalone, with no phone or internet. Transfer to the app is over Bluetooth (focase.net) and the device's own Wi-Fi hotspot (Kentfaith buyer review; 2023 App Store review), one file at a time. Users complain there is no bulk download and that per-file Bluetooth download is slow and manual. USB-C to a PC works after USB permission is enabled in the app. No sync-speed figures were published.

#### transcription and ai

**online meeting capture**

No desktop app, bot, dock or system-audio capture. The only options: place the device next to the laptop speaker (room mics), or, for calls taken on the phone, use the vibration sensor on the earpiece. Not a fit for Meet/Teams/Zoom on a laptop, which the buyer already covers with Tactiq/Wispr Flow.

**realtime transcription**

No. Transcription happens only after the file is downloaded to the phone app and uploaded. Seller copy says most files finish within about 2 minutes, with waits at peak times.

**on device processing**

None. All transcription and summaries run in the cloud (vendor relay server, then the AI provider, which Kentfaith names as OpenAI). On-device or local functions are limited to recording, password lock and playback.

#### ecosystem

**apps**

iOS/iPadOS (also runs on Apple-silicon Macs as an iPad app; English-only UI; v7.4.5, 27 Aug 2026) and Android (com.malong.focase, 10K+ downloads, updated 26 Aug 2026). No web app and no native desktop app. Feature parity between iOS and Android is not documented.

**integrations**

None: no Notion, Google Drive, Obsidian, Zapier/Make, Slack, calendar or CRM. Sharing is only through the OS share sheet to chat apps (seller copy names Line, Skype, iMessage, Facebook, Instagram). Nothing exports automatically.

**api mcp access**

- **grade**: none
- **a rest or graphql api**: None found; no developer docs exist.
- **b webhooks**: None.
- **c mcp server**: None, official or community (GitHub and MCP registries searched; no repo found).
- **d cli or sdk**: None.
- **e no code triggers**: No Zapier, Make or n8n triggers or apps.
- **f last resort usb mass storage**: Available: after the one-time 'USB permission' toggle in the app, the recorder mounts as storage and exposes WAV files (Google Play review, 28 Aug 2026). This works without any membership. A local folder watcher can feed a Whisper and second-brain/agent pipeline from it. Transcripts cannot be pulled programmatically (share-sheet TXT only), and speaker labels or timestamps are not reachable outside the app.
- **free tier**: USB route is free; there is no API on any tier.
- **public or beta**: Nothing public, beta or enterprise-only exists.

#### pricing

**promise durability**

Weak. focase.net carries a 'Lifetime free AI service' banner, but its product page says 1,800 min/month and its FAQ says 600/month. The Kentfaith rebrand of the same unit and app says 'Free AI Membership For Life (600 minutes/month)' in one section and '12-month' with a subscription afterwards in its FAQ and verified buyer reviews (Jul–Aug 2026). Japanese 2024 backers got a '1-year AI membership'. The store's terms reserve the right 'to modify or discontinue the Service (or any part or content thereof) without notice'. An App Store reviewer (Sep 2024) alleges the maker offered 'lifetime free transcription' if they raised their Amazon rating, which suggests lifetime grants are discretionary. No past downgrade is documented, but the terms have been inconsistent since 2024. If the vendor shuts down, the device still records and WAV stays exportable over USB, provided USB permission was enabled.

#### privacy and compliance

**encryption**

The app policy mentions 'encryption, access control, and security protocols' without specifics. On the device: an app password on first access and a 'USB authorization' toggle (off by default) that protects stored files if the recorder is lost. No device-level encryption at rest and no end-to-end claim. Transit encryption is unspecified, and the privacy-policy page itself is served over plain HTTP.

**recording indicator consent**

No recording LED or tone is documented. Marketing leans on discreet use: a Kentfaith buyer writes 'no one notices that I'm recording', and 2023 press on the earlier FoCase model noted the other party does not know. No consent prompt or announcement feature. The buyer must inform participants manually (GDPR duty to inform; covertly recording others' conversations is an Art. 267 KK risk).

**ai act emotion features**

None found: no emotion or sentiment scoring of speakers.

#### verdict

**independent review consensus**

No independent hands-on review was found (The Verge, Wired, Tom's Guide, RTINGS, long-form YouTube). The Japanese articles (Gizmodo JP, Lifehacker JP, ROOMIE, 2024) are promotional: they cover machi-ya crowdfunding campaigns, and machi-ya is run by their publisher Mediagene, which promotes campaigns on its own media. They praise summary quality, the 7 mm / 28 g size and MagSafe. DIME, ASCII and Zaikei pieces come from Oscar Japan press releases. Kentfaith's on-site reviews (uniformly 5★, vendor-hosted) should be treated as marketing. App-store user reviews are more credible but few. They agree the hardware records well: a Japanese user says the same audio transcribes fine in CLOVA Note. They agree the app's transcription is unreliable: 'extremely low accuracy' with no speaker ID (JP, Nov 2024); '20% success rate of actually transcribing' (US, Aug 2025); 'unusable' (DE, Jan 2026); poor PC workflow (US, Nov 2024); weak export (Google Play, 2025–26). There are also favourable Android reviews ('accurate but export options weak', Nov 2025). Integrity flag: a US reviewer (Sep 2024) says the maker used app data to find their email and offered lifetime free transcription in exchange for raising an Amazon review.

**noisy room performance**

No tested evidence. Vendor claims: dual-mic noise reduction, AGC, 10 m range. Anecdotes only: a vendor-hosted Kentfaith review ('at the back of the class ... extremely clear'), and a Japanese user's remark implying raw audio quality is fine. Treat as unknown.

**known issues**

1. Transcription reliability: frequent failures or low accuracy reported in US, JP and DE reviews (2024–2026). 2. No speaker identification. 3. Transfer: early Wi-Fi discovery failures (2023); per-file Bluetooth/Wi-Fi download; no bulk download or delete in the app. 4. PC access is hidden behind an in-app USB permission and was undocumented for some users. 5. Export is limited to plain TXT with no formatting. 6. Contradictory free-minute terms (1,800 vs 600, lifetime vs 12 months). 7. Alleged review manipulation and use of app data to contact a reviewer. 8. App store privacy labels conflict with the privacy policy. 9. English-only app UI and Japanese help text described as odd. 10. Support via outlook.com/HK; returns shipped to Hong Kong. 11. Battery claims vary from 6 to 30 h.

**best for**

Best for: phone calls on iPhone or Android through the vibration sensor (manual start) and quick voice notes. Possibly small in-person meetings with the device on the table (2 mics; untested). Not suited to: large or noisy rooms (unverified), online calls on a laptop (no capture path), anything that needs speaker labels, Polish in-app transcription (no evidence), or work that depends on dependable vendor support.

**pros cons**

- **pros**:
  - Native USB-C, and WAV files are reachable over USB mass storage (after the in-app toggle), which enables the local-Whisper workflow
  - Cheap: EUR 71.95 / PLN 311 direct
  - Vibration-sensor call recording on iPhone and Android, works with any calling app
  - Tiny and light (62×62×7 mm, 28 g), MagSafe and metal-surface magnet, standalone one-button recording
  - Claimed 1,800 min/month 'lifetime' free AI, the highest in the category if it holds
- **cons**:
  - Free-minute terms contradict each other (1,800 vs 600; 'lifetime' vs 12 months then subscription)
  - No Polish evidence; users report poor or failed transcription; no speaker diarization
  - Opaque multi-entity HK/Shenzhen vendor; audio relayed via a Hong Kong server to OpenAI; no DPA or GDPR basis
  - No API, MCP, integrations or rich export; English-only app
  - No independent reviews; promotional Japanese coverage and alleged review manipulation

**verdict for me**

Skip, or at most buy as a cheap tier-2 experiment. Requirements: provisional PASS at tier 2 (USB-C plus WAV over USB mass storage after an in-app toggle). Tier 1 rests on an unverified 1,800-minute 'lifetime' claim that the vendor's own 600-minute FAQ contradicts. Polish in-app quality: no evidence, and users report poor transcription even in Japanese and German. Deciding reason: client conversations would be relayed through a Hong Kong server to OpenAI by an opaque vendor with no DPA, which is unacceptable under GDPR. If bought, use it purely as a EUR 72 USB-C call and voice recorder and transcribe locally with Whisper, never with the vendor cloud.

**conflicting evidence**

- Free AI minutes: 1,800/month 'lifetime' (focase.net product page; CR1/Note marketplace copy) vs 600/month 'lifetime' (focase.net FAQ; Google Play user, Dec 2024) vs 600/month for 12 months, then subscription (Kentfaith FAQ and buyer reviews, Jul–Aug 2026; Japan GREEN FUNDING '1-year AI membership').
- Battery: 10 h (focase.net/Japanese press; CR1 copy with 300 mAh) vs 6–8 h (Kentfaith spec, same unit) vs 30 h ('FoCase Note' marketplace copy).
- Storage: 32 GB / 500 h (DIME, Jun 2024) vs 64 GB / 500 h (CR1 copy) vs 64 GB / 1,000 h (Kentfaith, Japanese press).
- Languages: 100 (Kentfaith, Japanese press) vs 102 (focase.net FAQ, CR1 copy) vs 112 (FoCase Note listing).
- Accuracy: '98%+' (focase.net, Kentfaith, Japanese press) vs 'up to 92%' (CR1 seller copy) vs user reports of very low accuracy or a 20% transcription success rate (App Store JP/US/DE).
- PC access: 'Support connecting to PC' (focase.net, Kentfaith) and 'wav files will display' (Google Play, Aug 2026) vs 'ZERO support' for getting files onto a Mac or computer (App Store US, Nov 2024).
- Data collection: App Store and Google Play labels say 'no data collected' vs the app privacy policy listing email, device serial and operation logs.
- Paid pricing: ¥150 per 60 min (Japan 2024) vs '$19.99/month or $149.99/year' in a marketplace snippet of uncertain attribution.

#### other info

**sources**

- **url**: https://focase.net/products/ai-powered-voice-recorder-iphone-call-recorder | **note**: Official store product page and Shopify JSON (record updated 2026-10-01): 1,800 min/month 'lifetime' note, OpenAI Whisper/GPT-4 claim, USB permission note; USD 79 / EUR 71.95 / PLN 311.
- **url**: https://focase.net/pages/test | **note**: Official FAQ: 102 languages; 'Lifetime free service with 600 minutes of free usage every month'; data stored only on recorder and phone.
- **url**: https://focase.net/policies/terms-of-service | **note**: Store operator 'Focase (Wuhan Singularity Innovation Technology Co., Ltd)'; right to modify or discontinue the service without notice.
- **url**: https://focase.net/policies/refund-policy | **note**: Returns to Hong Kong; EU 14-day withdrawal; hifocase@outlook.com.
- **url**: http://www.codethriving.com/download/smart_rec/xieyi/en.html | **note**: FoCase Rec app privacy policy: collects email, device serial, operation logs; files relayed via vendor servers to the AI provider and deleted after transcription. Host IP 8.218.101.145 = Alibaba Cloud Hong Kong (ipinfo.io).
- **url**: https://apps.apple.com/us/app/focase-rec/id6448772935 | **note**: iOS app by Shenzhen Kingtrun Technology Co., Ltd; released 2023-05-28; v7.4.5 (2026-08-27); 3.3★ from 10 ratings; user reviews 2023–2025. JP and DE storefronts read for further reviews.
- **url**: https://play.google.com/store/apps/details?id=com.malong.focase | **note**: Android app; developer 深圳市昆川科技有限公司 (Shenzhen address), support@focase.net; 10K+ downloads; reviews on 600 min/month, TXT export, WAV over USB (2026-08-28).
- **url**: https://www.kentfaith.com/GW63.0003_mini-ai-voice-recorder-record-call-voice-to-text-summarize-magnetic-64g | **note**: Identical white-label (FOCASE REC app): USB-C, 300 mAh, 6–8 h, WAV, 62×62×7 mm, 28 g, Whisper/GPT-4o, upload to OpenAI, USB permission off by default, 12-month membership.
- **url**: https://www.kentfaith.com/faq_15646 | **note**: Kentfaith FAQ: 'free 12-month ai membership (600 minutes/month). For additional minutes, directly subscribe in FOCASE REC app.'
- **url**: https://www.newegg.com/p/3C6-02AV-028G0 | **note**: 'FoCase Note' listing (seller Luhang/BoYata, USD 91.99, first listed 2026-03-20): 1,800 free min/month, 112 languages, VCS.
- **url**: https://www.newegg.com/p/0X6-0F9M-00AR3 | **note**: NShi 'by FoCase Rec' listing (seller Mipin, USD 160.72): 1,800 min/month, GPT-4o.
- **url**: https://www.ebay.de/itm/387588779359 | **note**: eBay.de CR1 listing (page blocked; seller copy read via search snippets: 102 languages, Polish among 20 best-supported, 1,800 min lifetime).
- **url**: https://www.tokopedia.com/reva-ramadani/focase-rec-ai-voice-call-recorder-powered-by-chatgpt-4o-with-app-transcription-speech-to-text-translation-102-languages-summary-mind-mapping-64gb-cr1-support-bahasa-1731824494872135563 | **note**: CR1 marketplace listing (via search snippets): USB Type-C, PC transfer by cable, 300 mAh, 10 h, 62×62×7 mm.
- **url**: https://www.gizmodo.jp/2024/09/machi-ya-focase-start-777107.html | **note**: Promotional machi-ya coverage: Oscar Japan, 600 min/month free, ¥150 per 60 min, 7 mm / 28 g, 10 h.
- **url**: https://www.lifehacker.jp/article/machi-ya-focase-review-777107/ | **note**: Promotional machi-ya 'review': press-and-hold controls, timestamps, 600 min/month.
- **url**: https://mediagene.co.jp/en/commerce/machi-ya | **note**: machi-ya is run by Mediagene (publisher of Gizmodo JP / Lifehacker JP / ROOMIE), which promotes campaigns on its media: sponsorship flag.
- **url**: https://dime.jp/genre/1803703/ | **note**: GREEN FUNDING June 2024: ¥13,800 retail, 62×62×7 mm, 300 mAh, 32 GB, Type-C cable, bone conduction, 1-year AI membership.
- **url**: https://ascii.jp/elem/000/004/226/4226053/ | **note**: CAMPFIRE encore 4 Oct–10 Nov 2024 by Oscar Japan (Osaka); 64 GB.
- **url**: https://www.instalki.pl/news/hardware/jak-nagrywac-rozmowy-na-iphone-sprawdz-to/ | **note**: 2023 FoCase MagSafe Call Recorder (E-Ink, USB-C, Indiegogo, shipping Apr 2023): brand history.
- **url**: https://www.boyamic.com/product/ai-voice-recorder-boya-notra | **note**: Boya Notra spec for the ODM comparison: 63×63×6.8 mm, 45 g, 610 mAh, 2 MEMS + 1 VCS.
- **url**: https://marlvel.ai/apps/com-wanmei-boyanotra | **note**: Boya Notra app package com.wanmei.boyanotra (Shenzhen Perfect Acoustic Technology): different app developer from FoCase.
- **url**: https://arxiv.org/pdf/2603.02246 | **note**: Polish ASR case study (Wav2Vec to ElevenLabs Scribe), cited only for Whisper's general Polish performance.

#### omitted as uncertain

- account free operation
- asr engine
- battery recording and standby
- certifications
- company stability
- display and controls
- export formats
- free minutes steady state
- free tier quality and retention
- language count
- launch date
- maker and hq
- microphones
- paid plans
- price
- processing location data residency
- raw audio export
- req polish transcription
- req usb c port
- requirements verdict
- speaker diarization
- storage
- three year tco
- training on user data
- transcript editing and vocabulary

## B. Benchmarks

### DIY benchmark with local Whisper

**PASS tier 2 (by construction)** · Polish A · API/MCP full (local files) · 23 field(s) omitted as uncertain

#### requirements

**req usb c port**

PASS for all three recommended recorders. Sony ICD-TX660: native USB Type-C receptacle on the body ('Port USB Type-C'; a USB-A-to-USB-C cable is in the box; current Polish/Dutch manual 5-025-097-32(1), (c) 2021). Japanese launch coverage says the TX660 'newly adopted USB Type-C', replacing the TX650's micro-USB. Charging and data share the port, and the recorder can run while charging from a USB adapter rated 500 mA or more. Zoom H1essential: 'USB port (Type-C)' handles file transfer, the USB-mic function and bus power. Any data-capable USB-C cable works; the manual warns that charge-only cables will not transfer data. DJI Mic 2 Transmitter: 'Data Port (USB-C) - for copying audio or updating firmware after connecting to a computer. Can also be used for charging.' It also has pogo pads for the charging case, but the case is optional. None of the three uses a vendor-only cable, and no warning against third-party cables was found. Near-misses that FAIL R2: DJI Mic 3 TX and DJI Mic Mini 2S TX (magnetic charging cable or case only), OM System LS-P5 (micro-USB), Sony ICD-UX570 (built-in USB-A plug).

**req no subscription**

TIER 2 by construction, as the reference implementation of the tier-2 route. There is no vendor app and no vendor transcription. The raw audio leaves the recorder as plain files over USB mass storage and is transcribed by open-weight Whisper on the user's own machine, with no allowance, no cap, no account, and no promotional or 'lifetime' wording to check. Export formats (all standard, unencrypted, on a FAT-formatted drive): Sony ICD-TX660 records MP3 48/128/192 kbps or LPCM 44.1 kHz/16-bit stereo WAV and appears as the 'IC RECORDER' drive. Zoom H1essential records WAV 44.1/48/96 kHz 32-bit float with BWF/iXML (MP3 added in firmware 2.00/2.10) to microSD, readable over USB file transfer. DJI Mic 2 TX records WAV 48 kHz 24-bit mono (or 32-bit float) to 8 GB internal storage and appears as a drive when connected. Software licences: Whisper weights MIT, faster-whisper MIT, WhisperX BSD-2-Clause, pyannote speaker-diarization-community-1 CC-BY-4.0 (gated download). The only ongoing cost is local compute.

**free tier quality and retention**

N/A in the vendor sense: no tiers, no paywalled features, no retention clock. Quality is whatever model you run. large-v3 (1.55B params) is the most accurate Whisper for Polish on BIGOS and PELCRA. large-v3-turbo (809M, 4 decoder layers) is ~1 pp worse on Polish FLEURS (5.81% vs 4.69%) and several times faster. Speaker labels (pyannote community-1), word timestamps (WhisperX wav2vec2 alignment; the Polish align model is jonatasgrosman/wav2vec2-large-xlsr-53-polish) and every export format are free. Retention: files live on your own disk for as long as you keep them.

**requirements verdict**

PASS (tier 2, by construction). R1 has grade-A academic evidence: Whisper large-v3 ranks #1 for Polish on the BIGOS, PELCRA and PolEval 2024 leaderboards. R2 holds because the Sony ICD-TX660, Zoom H1essential and DJI Mic 2 TX all have a native USB-C port that mounts as storage. R3 holds with zero subscription: transcription is local Whisper, and only compute time is spent.

#### identity

**basics**

DIY benchmark: a compact, account-free USB-C recorder plus a local Whisper transcription pipeline. Recommended recorder: Sony ICD-TX660, an ultra-slim 16 GB stereo voice recorder with a pocket clip and a 'Meeting' recording scene. Alternates: Zoom H1essential (2-track 32-bit-float handheld with 90-degree XY mics, best for table meetings) and the DJI Mic 2 Transmitter (28 g clip/magnet wireless-mic transmitter with 8 GB internal recording, best for voice notes and close-range 1:1s). Pipeline: faster-whisper (CTranslate2; int8/fp16; Silero VAD; batched; word timestamps) or WhisperX (faster-whisper plus wav2vec2 alignment plus pyannote speaker-diarization-community-1), running Whisper large-v3 for accuracy or large-v3-turbo for speed. GUI alternatives: noScribe (free, GPL-3.0, Windows/macOS/Linux, built-in editor and diarization) and Purfview's Faster-Whisper-XXL standalone executable.

**maker and hq**

Recorders: Sony Corporation (Tokyo, Japan; Sony Europe B.V. is the EU seller); Zoom Corporation (Tokyo, Japan); SZ DJI Technology (Shenzhen, China). Software: Whisper model weights from OpenAI (USA, MIT licence); faster-whisper from SYSTRAN (built on OpenNMT CTranslate2); WhisperX from Max Bain (m-bain, BSD-2-Clause); pyannote.audio and community-1 from pyannoteAI / Herve Bredin (France); noScribe from Kai Droge (Lucerne / Frankfurt). Data jurisdiction: none. Audio and transcripts never leave the user's devices, so there is no processor or sub-processor chain.

**form factor**

Sony ICD-TX660: slim metal stick with a built-in pocket clip, closest to the 'card/clip AI recorder' form factor; carrying pouch included. Zoom H1essential: classic handheld recorder stick for standing on the table; the 2x AAA battery compartment makes it chunkier. DJI Mic 2 TX: square clip-on transmitter with a clip and magnet mount, worn on clothing or placed on the table; 3.5 mm TRS input for a lavalier mic. None is MagSafe and none attaches to the phone.

#### capture hardware

**storage**

Sony ICD-TX660: 16 GB (~12.8 GB usable). Vendor recording capacity: LPCM 44.1/16 stereo 21 h 35 min; MP3 192 kbps 159 h; MP3 128 kbps 238 h; MP3 48 kbps mono 636 h; up to 5,000 files. Zoom H1essential: microSDHC 4-32 GB or microSDXC 64 GB-1 TB. At 48 kHz/32-bit-float stereo that is ~1.38 GB/h (arithmetic), i.e. ~46 h on 64 GB; MP3 holds far more. DJI Mic 2 TX: 8 GB internal storage, ~14 h of 48 kHz/24-bit mono or ~11 h of 32-bit float. Recording stops when storage is full (DJI Mic 2 user manual).

**display and controls**

Sony ICD-TX660: OLED display (41% larger than the TX650); dedicated REC/STOP button with 'One Push Recording' that starts even from power-off (vendor); POWER/HOLD slide switch; raised tactile dots on play and VOL+; operation indicator LED; Time Jump playback. One-handed, no-look start works. Zoom H1essential: 128x64 OLED; REC button with a red REC indicator; up to 99 marks per file; Auto Rec (level-triggered), pre-record and self-timer; accessibility 'guide sound' that speaks menu items. DJI Mic 2 TX: no screen; a single record button press starts and stops; solid red recording LED; optional vibration notifications (set from the receiver); mute shown as a pulsing red LED. All three can be started blind with one hand.

**size weight**

Sony ICD-TX660: approx. 102.0 x 20.0 x 7.4 mm, 29 g. Zoom H1essential: 53.9 (W) x 136.6 (D) x 29.0 (H) mm, 92 g with batteries. DJI Mic 2 TX: 46.06 x 30.96 x 21.83 mm, 28 g.

**raw audio export**

USB mass storage, verified in each manual; no app, account or proprietary protocol. Sony ICD-TX660: connects as the 'IC RECORDER' drive, and you drag and drop files or folders to the PC (manual). The optional Sound Organizer 2 runs on Windows only and is not needed; Macs work through Finder. Formats: MP3 48/128/192 kbps or LPCM WAV 44.1 kHz/16-bit stereo. Zoom H1essential: the 'Transferring files to computers and other devices' function exposes the microSD over USB-C. Files are named e.g. ZOOM0001.WAV, WAV 44.1/48/96 kHz 32-bit float (BWF/iXML) or MP3 after firmware 2.x. DJI Mic 2 TX: connect the TX to a computer and copy or delete files. The file system is FAT32 (allocation unit 16 KB or less). WAV 48 kHz/24-bit mono or 32-bit float. All files are unencrypted standard formats. faster-whisper decodes them directly through PyAV (no system FFmpeg needed), so the Whisper fallback is native rather than a fallback.

#### transcription and ai

**asr engine**

Local OpenAI Whisper, run as large-v3 (1.55B params; best Polish accuracy) or large-v3-turbo (809M; decoder cut from 32 to 4 layers; OpenAI says it 'performs similarly to large-v2'). Model IDs in faster-whisper: 'large-v3' = Systran/faster-whisper-large-v3; 'large-v3-turbo' or 'turbo' = mobiuslabsgmbh/faster-whisper-large-v3-turbo. Runtimes: (1) faster-whisper (CTranslate2): int8/fp16, Silero VAD filter, BatchedInferencePipeline, word_timestamps, initial_prompt and hotwords for vocabulary, multilingual=True for per-segment language detection, hallucination_silence_threshold. GPU needs CUDA 12 plus cuDNN 9. (2) WhisperX: the faster-whisper backend plus wav2vec2 forced alignment (Polish model jonatasgrosman/wav2vec2-large-xlsr-53-polish is in DEFAULT_ALIGN_MODELS_HF) plus pyannote diarization; CLI flags --language pl --diarize --compute_type int8. (3) whisper.cpp for Apple Metal, Vulkan or CPU. Language: set 'pl' explicitly; otherwise detection uses the first ~30 s. Local alternatives for Polish are all weaker than Whisper large-v3 on Polish FLEURS: NVIDIA Canary-1b-v2 6.64-6.88%, Parakeet-tdt-0.6b-v3 7.31-7.37%, Cohere Transcribe 03-2026 6.15%.

**transcript editing and vocabulary**

No vendor app. Editing: any text editor or Obsidian on the Markdown/TXT output. noScribe ships an editor with audio-synced playback for correcting transcripts. Word-level timestamps: faster-whisper word_timestamps=True; WhisperX wav2vec2 alignment gives more accurate word timing, and Polish is supported. Custom vocabulary: initial_prompt (e.g. a list of client names and tech terms) and faster-whisper 'hotwords'. Both are soft biasing, not a guaranteed glossary. Speaker renaming: find/replace on the SPEAKER_xx labels. Search across transcripts: grep, Obsidian search or the vault's own indexes. Full control, but none of the in-app conveniences.

**realtime transcription**

No. Transcription runs after the files are copied off the recorder. Live Whisper options exist (whisper.cpp stream mode and others) but are out of scope and not needed for this buyer.

**on device processing**

Recorders: no ASR at all. The H1essential's firmware-2.x 'AI noise reduction' is audio processing, not transcription. All transcription and diarization run locally on the user's laptop, fully offline after the one-time model downloads. Nothing goes to any cloud, apart from pyannote's default-on anonymous telemetry, which should be disabled.

#### ecosystem

**apps**

No vendor app is required. Optional: Sony Sound Organizer 2 (Windows only; not needed for file copy). The Zoom H1essential and DJI Mic 2 TX need no app; firmware updates go through the SD card or by copying a .bin file. Pipeline tools: faster-whisper and WhisperX CLI/Python (Windows/macOS/Linux; WhisperX runs on CPU on Mac), noScribe GUI (Windows/macOS/Linux, ~3 GB installer), Faster-Whisper-XXL standalone executable (Windows/Linux/macOS; free, with a donor 'Pro' build), and whisper.cpp. No mobile app; capture and transcription do not involve the phone.

#### pricing

**paid plans**

None. Optional only: a donor 'Pro' build of Faster-Whisper-XXL, pyannoteAI's paid precision-2 cloud diarization (~2.2x faster than community-1 and lower DER), or cloud ASR pay-as-you-go if Polish quality on hard audio is not good enough. ElevenLabs Scribe beat Whisper by a wide margin on noisy Polish clinical conversations (AGH 2026). Any cloud option gives up the local/GDPR advantage. Nothing in plain transcription is paywalled.

**promise durability**

Strongest of all items, because no vendor promise is involved. The Whisper weights (MIT) cannot be withdrawn once downloaded; faster-whisper (MIT) and WhisperX (BSD-2-Clause) are open source; pyannote community-1 is CC-BY-4.0 but gated on Hugging Face, so keep a local copy. Recorders write standard files to FAT32/exFAT storage that any OS will read indefinitely. Residual risks: Python/CUDA dependency churn (faster-whisper's ctranslate2 now requires CUDA 12 plus cuDNN 9, so older setups need pinned versions), and future pyannote licence or gating changes for new models. Already-downloaded models are unaffected.

#### privacy and compliance

**encryption**

None on any of the three recorders: plain files on FAT storage, readable by anyone who plugs the device in. In transit: local USB only. At rest on the laptop: whatever disk encryption you use (BitLocker or FileVault recommended). Mitigation: wipe the recorder after each transfer, and do not lend it out. No end-to-end claims are relevant, because there is no network path.

**training on user data**

None. Inference is local and the models are frozen; no audio or transcript leaves the machine. The only outbound data is pyannote's default-on anonymous telemetry, which has no content and can be disabled. Retention and deletion are entirely under your control.

**ai act emotion features**

None. Whisper, WhisperX and pyannote do transcription and speaker segmentation only, with no emotion or sentiment scoring.

#### verdict

**independent review consensus**

Pipeline: (1) The AMU-CAI Polish ASR Leaderboard (Michal Junczyk, Adam Mickiewicz University; independent academic; covers commercial and free systems) ranks Whisper large-v3 #1 for Polish on BIGOS V2 (median WER 5.53%), PELCRA conversational (18.45%) and PolEval 2024 test-A (14.51%), ahead of the OpenAI Whisper API, AssemblyAI, Google and Azure. Caveat: the evaluations date from Mar and Nov 2024, so turbo and 2025-26 commercial engines (ElevenLabs Scribe, gpt-4o-transcribe, etc.) are missing. (2) AGH Krakow et al. (arXiv 2603.02246, Mar 2026; some co-authors from the company Coraz Zdrowiej): Whisper large is the best open-source model on Polish public benchmarks (Common Voice 6.3%), but ElevenLabs Scribe is far better on real noisy clinical conversations (10.6% vs 42.3% normalized WER). (3) handy.computer Polish FLEURS runs (single developer, Q8 quantized): large-v3 4.69%, turbo 5.81%. (4) The noScribe maintainer (a sociologist using it for interviews) reports '1-3 hours' of processing per interview hour on typical machines. Recorders: Podcastage (independent, measured) on the Zoom H1essential: good value and auto-levels, but noisy preamps on quiet sources, handling noise and loud buttons. Thomann buyers rate it 4.4/5 from 57 reviews. Sony ICD-TX660: only low-weight user reviews (x-kom 5/5 from 2; Sony site reviews), with praise for size and clarity. DJI Mic 2 is reviewed as a wireless mic, not as a meeting recorder; DJI firmware notes fixed internal-recording file-splitting and Bluetooth-mode conflicts. No independent test of any of these recorders specifically for meeting-table transcription was found.

**known issues**

Pipeline: (1) Whisper hallucinates text on silence or noise; use the VAD filter (default in faster-whisper's batched pipeline and in WhisperX) and hallucination_silence_threshold. (2) Wrong-language output if language is left unset and the first ~30 s are silence, noise or English; force 'pl'. (3) Some users and Deepgram (a competitor, 2023) report large-v3 hallucinating more than v2 on non-English long-form audio. (4) Overlapping speech and diarization are weak (WhisperX's own limitations section). (5) Setup friction: ctranslate2 needs CUDA 12 plus cuDNN 9 on Windows GPUs, and the pyannote model is gated and needs a Hugging Face token; WhisperX runs on CPU only on macOS. (6) pyannote telemetry is on by default. Recorders: the DJI Mic 2 TX lasts 6 h per charge, splits files every 31 min, and its settings need the receiver. The Zoom H1essential is plastic, with handling noise and noisy preamps, and starts a new file at 2 GB. The Sony ICD-TX660 is out of stock at x-kom, has no Polish menu, a non-replaceable battery, and Sound Organizer is Windows-only (optional). Effort: every recording needs a manual plug-in and copy, about 2-5 min hands-on even with a script.

**best for**

Best: in-person meetings and client workshops (H1essential on the table, or the Sony TX660 with the Meeting scene) and solo voice notes (Sony TX660 one-push recording, or the DJI Mic 2 TX clipped on). OK: 1:1s and interviews at 1-2 m. Weak: phone calls (speakerphone pickup only, no call tap). Not needed or weak: online calls (Tactiq already covers them; the H1essential only captures your side). Ideal when confidentiality matters most, i.e. client data that should never touch a third-party cloud.

**pros cons**

Pros: (1) the best-evidenced Polish engine available: Whisper large-v3 is #1 on the independent AMU BIGOS, PELCRA and PolEval leaderboards, ahead of commercial APIs; (2) zero subscription, zero vendor or cloud dependency, nothing to brick, open weights forever; (3) GDPR-clean: fully local processing with no sub-processors; (4) full programmatic control (files, Python API, CLI, any output format) that pipes straight into an Obsidian/agent workflow; (5) cheap: about 430-740 PLN total over 3 years, all hardware, with native USB-C mass storage on all three picks. Cons: (1) manual effort for every recording (dock, copy, run, review) plus a 1-3 h one-time setup; (2) no phone-call capture beyond speakerphone; (3) without a GPU, processing is slow (about 20 min to 3 h per audio hour on CPU, by extrapolation and maintainer estimate); (4) real-world noisy, overlapping Polish conversation can be much worse than benchmark WER, and the AGH study found ElevenLabs Scribe far ahead there; (5) recorders are unencrypted and lack AI-recorder conveniences (auto-sync, speaker names, in-app search); turbo is not on the Polish leaderboard.

**verdict for me**

CONSIDER, as the benchmark to beat and as the fallback. Requirements: PASS (tier 2, by construction). Polish quality: grade-A evidence that Whisper large-v3 is the best local or commercial Polish engine on the AMU leaderboards (2024 data), with a real-world caveat for noisy, overlapping speech. The deciding reason: it is the only route that is fully local (no GDPR processor chain), subscription-proof and fully scriptable into the vault, at the cost of a manual dock-and-copy step and no call capture. An AI recorder has to beat it on convenience without losing on Polish quality, USB-C or data control. Practical pick: Sony ICD-TX660 (or Zoom H1essential for table meetings) plus WhisperX with large-v3 on a GPU, or turbo on CPU, with language='pl' and pyannote telemetry off.

**conflicting evidence**

(1) Whisper Polish accuracy: academic benchmarks show large-v3 at 5.5% median WER on read speech and 18.5% on conversational speech (AMU), while an AGH 2026 study found 42% on noisy clinical conversations (authors include a commercial co-author). (2) Turbo vs large-v3: OpenAI says turbo is 'similar to large-v2', which is 1.1 pp worse than v3 on BIGOS; Polish FLEURS shows 5.81% vs 4.69%; blogs claim 'nearly identical accuracy'. (3) large-v3 quality: AMU ranks v3 best for Polish, but Deepgram (a competitor) and user reports say v3 hallucinates more than v2 on non-English long-form audio. (4) Turbo speed: marketing and blogs say '8x faster', while the faster-whisper GPU benchmark (#1030) shows ~2.7x (52 s vs 19 s per 13 min). (5) Sony ICD-TX660 price: 699 PLN at x-kom vs EUR 153-179 in other EU shops vs $158-199 in the US, with a $399.99 Amazon US outlier. (6) DJI Mic 2 TX endurance: spec page says 6 h; the DJI Mic FAQ text found in search says 5.5 h when fully charged and up to 14 h on constant power (that text may come from the Mic 1 FAQ). (7) Full-storage behaviour on DJI: the Mic 2 manual says 'Recording stops when storage is full', while DJI Mic FAQ text found in search describes overwriting the oldest files (likely Mic 1 or Mini 2S loop recording).

#### other info

**sources**

- https://huggingface.co/spaces/amu-cai/pl-asr-leaderboard - AMU-CAI Polish ASR Leaderboard (live app read 2026-10-01: BIGOS V2 Mar 2024, PELCRA Mar 2024, PolEval 2024 test-A Nov 2024 tables)
- https://huggingface.co/datasets/amu-cai/pl-asr-bigos-v2 - BIGOS V2 dataset
- https://arxiv.org/abs/2603.02246 - Pietron et al. (AGH Krakow, Coraz Zdrowiej), 'Quality of ASR - Polish language case study - from Wav2Vec to Scribe ElevenLabs', Mar 2026
- https://models.handy.computer/languages/pl - Polish FLEURS WER at Q8_0 (large-v3 4.69, turbo 5.81, Canary 6.88, Parakeet v3 7.37)
- https://arxiv.org/pdf/2509.14128 - NVIDIA Canary-1B-v2 & Parakeet-TDT-0.6B-v3 paper (Polish FLEURS 6.64 / 7.31)
- https://github.com/openai/whisper/discussions/2363 - OpenAI turbo announcement (similar to large-v2; 1 Oct 2024)
- https://github.com/SYSTRAN/faster-whisper - README benchmarks (v1.1.0), CUDA 12/cuDNN 9 requirements; v1.2.1 released 2025-10-31
- https://github.com/SYSTRAN/faster-whisper/issues/1030 - large-v3 vs turbo GPU benchmark (52 s vs 19 s per 13 min)
- https://raw.githubusercontent.com/SYSTRAN/faster-whisper/master/faster_whisper/transcribe.py - multilingual, hotwords, VAD, hallucination_silence_threshold options
- https://github.com/m-bain/whisperX - README (70x realtime, community-1 diarization, limitations), alignment.py (Polish align model), v3.8.6 2026-05-25
- https://huggingface.co/pyannote/speaker-diarization-community-1 - CC-BY-4.0, gated; DER benchmarks
- https://github.com/pyannote/pyannote-audio - README benchmark (31 s/h on H100) and telemetry/config.yaml (metrics_enabled: true)
- https://pypi.org/project/pyannote-audio/4.0.4/ - telemetry section, release 2026-02-07
- https://noscribe.de/en/ - noScribe: '1-3 hours' per interview hour; GitHub kaixxx/noScribe v0.7.2
- https://github.com/Purfview/whisper-standalone-win - Faster-Whisper-XXL standalone
- https://github.com/andre-wiedemann/hidock-local - community claim: 2-5 min per 1 h with turbo on Apple Silicon (Metal)
- https://www.mediaexpert.pl/products/files/81/8116673/Instrukcja-obslugi-SONY-ICD-TX660.pdf - Sony ICD-TX660 PL/NL manual (USB Type-C port, IC RECORDER drag-and-drop, specs, battery, menu languages)
- https://kunkoku.jp/icd-tx660.html - Japanese coverage: TX660 newly adopted USB Type-C
- https://www.x-kom.pl/p/731401-dyktafon-sony-icdtx660.html - 699 PLN, temporarily unavailable (2026-10-01)
- https://zoomcorp.com/en/us/handheld-recorders/handheld-recorders/h1essential/ - H1essential specs
- https://library.yorku.ca/ds/wp-content/uploads/2024/09/H1essential_operation_manual.pdf - H1essential operation manual (USB-C file transfer, 2 GB split, REC indicator, records while acting as USB mic)
- https://www.mia.org.uk/2025/11/zoom-hessential-series-gets-ai-noise-reduction-gain-adjustment-and-mp3-recording-with-firmware-update - H1essential firmware MP3/AI NR
- https://www.thomann.pl/zoom_h1essential.htm - 433 PLN, in stock, 4.4/5 (57)
- https://podcastage.com/rev/h1e - Podcastage hands-on review of H1essential
- https://www.adorama.com/col/productManuals/DJIMIC21TX.pdf - DJI Mic 2 user manual (TX Data Port USB-C, standalone recording, 31-min splits, FAT32)
- https://www.dji.com/mic-2/specs and https://www.dji.com/mic-2/faq - DJI Mic 2 specs and FAQ
- https://www.dji.com/mic-mini-2s/faq - Mic Mini 2S export via magnetic charging cable or case (R2 fail)
- https://www.maisondudrone.com/en/dji-mic-3-full-review-smaller-stronger/ - DJI Mic 3 TX has no file-transfer port (R2 fail)
- https://explore.omsystem.com/gb/en/ls-p5 - OM System LS-P5 spec: MicroB cable (R2 fail)
- https://www.heliguy.com/blogs/knowledge-base/can-i-use-dji-mic-mini-transmitter-as-a-voice-recorder/ - DJI Mic Mini has no internal recording
- https://slickdeals.net/f/19089124-59-dji-mic-2-transmitter-at-amazon - DJI Mic 2 TX deal price
- https://deepgram.com/learn/whisper-v3-results - Deepgram (competitor) on large-v3 hallucinations

#### omitted as uncertain

- account free operation
- api mcp access
- availability eu poland
- battery recording and standby
- call recording method
- certifications
- company stability
- export formats
- free minutes steady state
- integrations
- language count
- launch date
- microphones
- noisy room performance
- offline recording
- online meeting capture
- pipeline benchmark
- price
- processing location data residency
- recording indicator consent
- req polish transcription
- speaker diarization
- three year tco

### Plaud Note Pro

**NEAR-MISS (fails R2)** · Polish A (qualitative) · API/MCP full (free MCP + CLI) · 21 field(s) omitted as uncertain

#### requirements

**req usb c port**

FAIL. Interface: a proprietary 4-pin charging port on the device body, charged with a magnetic snap-on cable. Plaud's help centre for the Note Pro (updated 30 Sep 2026) states this, and says the cable looks similar to standard cables but is not interchangeable; using a third-party cable may damage the device, so use only the original. Telepolis describes it as a magnetic USB-C cable: the device end is magnetic and proprietary, and the other end is a USB-C plug. The original Plaud Note uses the same cable (Plaud says the cable is universal across Note and Note Pro). Early Note units shipped with a USB-A plug end (Tom's Guide, Jan 2025, which lists the 'proprietary charging connector' as a con). Charging: DC 5 V / 0.5 A, about 2 h from empty. Replacement: vendor-only, 'Plaud Note Pro Accessory Kit' (cable plus magnetic ring) at $19.99. Third-party 'compatible' magnetic cables are sold (for example on Best Buy Canada), but Plaud warns against them. Data over the port: NONE. Plaud says the Note Pro's port is for charging only and the device has never offered USB file access. The original Note's 'Access via USB' and RAW files were disabled from firmware V2.1. The accessory-kit product page still advertises 'syncing and transferring data ... with a computer', which is stale copy.

**free minutes steady state**

300 min/month, permanent (Starter). There is no promotion end date, because nothing is promotional. Per-file cap: none found apart from the 24 h/day transcription cap that applies to all plans. AutoFlow only triggers on recordings with more than 200 words. Starter is withdrawn if the account has had no bound device for 30 days, and re-activates on re-binding. The preset 'Auto-summarize new recordings' AutoFlow is ON by default, so every new recording is transcribed automatically and spends free minutes unless you turn it off. Non-subscription top-ups: one-time 'Extra Minutes' (Add-On Extension) packs, used after the monthly allowance, valid 24 months from activation, must be activated within 12 months of purchase, non-refundable. US prices (plaud.ai, 2026-10-01): 600 min $12.99 ($1.30/h), 3,000 min $59.99 ($1.20/h), 6,000 min $99.99 ($1.00/h). EU prices (eu.plaud.ai, 2026-10-01): EUR 14.99 / EUR 69.99 / EUR 99.99 (EUR 1.50 / 1.40 / 1.00 per hour). The App Store also sells a 120-min pack for $2.99. Gap to fill at 20 h/month: 900 min/month = 10,800 min/yr, i.e. 1.8 x 6,000-min packs, about $180/yr (Step-2 figure confirmed).

**requirements verdict**

NEAR-MISS: fails R2 only. R1 PASS (grade A, Telepolis Polish test, free tier). R3 TIER 2: 300 free min/month falls short of 1,200, but original audio exports from the app as WAV/MP3, so local Whisper works. R2 FAIL: proprietary 4-pin magnetic charging cable, with no data over cable.

#### identity

**basics**

Plaud Note Pro (model PN0300), 2nd-generation credit-card AI note-taker by Plaud Inc. It records in-person meetings with 4 MEMS mics plus 1 VPU (5 m in Enhance mode) and phone calls via a vibration/contact sensor when attached to the phone's back, switching between the two automatically. It has a 0.95-inch AMOLED status display and syncs to the Plaud app for cloud transcription. Variant: Plaud Note (model NB-100, 1st generation, 2023). Same card size and weight; 2 MEMS + 1 VPU (3 m); manual call/room slider; LED instead of a display; 400 mAh / 30 h. The market-leading AI voice recorder brand by volume.

**maker and hq**

Plaud Inc., incorporated in Delaware (8 The Green, Ste A, Dover), HQ San Francisco. It is the data controller in the privacy policy and the data importer in the DPA. Founded December 2021 by Nathan Xu (CEO) and Charles Liu. Hardware design and R&D are in Shenzhen, China, and devices are manufactured in China. Plaud's Japan page says manufacturing is fully separated from user-data handling and no Chinese entity has data access, which is a vendor claim. The brand ran its first Kickstarter as iZYREC in 2022. Other entities: Plaud Co., Ltd. (Tokyo, Japanese subsidiary). The EU web-store seller is 'Nicebuild Technology Limited', Room 6706 Central Plaza, 18 Harbour Road, Wanchai, Hong Kong, per the de.plaud.ai Impressum seen 2026-10-01. The EULA and ToS also name 'Plaud LLC' (Sheridan, Wyoming). EU/UK GDPR Art. 27 representative: Prighter Group. Backend: AWS, with regional data centres in the US (Oregon), EU (Frankfurt), Singapore and Japan.

**form factor**

Credit-card format: a flat aluminium (6063 alloy per Telepolis) card with a Gorilla Glass display. The device itself has NO magnet. It attaches to a phone only inside the included magnetic case, which works MagSafe-style with iPhone 12 and later, or via the included adhesive magnetic ring for Android or non-MagSafe phones. It works standalone on a table or in a wallet. Apple Find My is supported on the Note Pro (firmware V1.5+). No wearable accessories are included (no clip or lanyard; that is the NotePin line). Not waterproof. The original Note has the same card format and accessories (magnetic case, ring, cable).

**availability eu poland**

Easy to buy in Poland. Official EU store eu.plaud.ai: EUR pricing, free shipping over EUR 50 in most EU areas, 30-day free returns, 1-year vendor warranty, with EU statutory rights (2-year legal guarantee) explicitly preserved in the ToS. Polish retail with local statutory warranty (rekojmia): MediaMarkt.pl, x-kom.pl, Morele.net, Media Expert and Allegro (Telepolis links). Komputronik and x-kom also list the original Plaud Note, and Amazon.pl has the Note. App UI: NOT in Polish (Telepolis, Jun 2026: app and web interface lack Polish, although commands, transcription and templates work in Polish). Account region (and therefore the EU data centre) is assigned from your IP at registration, so register from Poland without a VPN. There is no self-serve change.

#### capture hardware

**microphones**

Note Pro: 4 MEMS microphones (two at the top and two at the bottom edge) plus 1 VPU (voice pickup unit, a vibration/contact sensor for calls). The vendor claims 'AI beamforming' and noise reduction. Pickup range (vendor): 5 m / 16.4 ft in Enhance mode, 3 m / 9.8 ft in Endurance mode. Tested: TU Dresden VCC (Jun 2026, German) confirmed the 5 m pickup in performance mode. BGR (Jul 2026) recorded 14 council members around a table about 4 m across. Telepolis (Jun 2026) captured barely audible speakers at press conferences. The vendor's own anechoic-chamber blog (22 Sep 2026) claims lower WER than an iPhone 17 Pro Max at 1 m and 3 m and 35-70 dB noise; that is vendor-claimed, with no language stated. Mic gain is adjustable in the app. Original Note: 2 MEMS + 1 VPU, about 3 m (vendor 9.8 ft; help centre says 2-3 m).

**call recording method**

Vibration/contact sensor (VPU/VCS). The card must sit on the back of the phone (in its magnetic case) so the sensor picks up the earpiece vibration. Meanwhile the MEMS mics capture your own voice, so both sides are recorded with no app or speakerphone needed (Telepolis: works perfectly without speakerphone). It works with any phone app, including WhatsApp and other VoIP calls, on both iPhone and Android, since it is purely acoustic/mechanical via the case or ring. Mode switching: the Note Pro switches automatically ('Smart dual-mode'). Plaud attributes this to an internal sensor reading orientation; Telepolis says the VCS detects call vibration. BGR said it needed a manual mode switch in the app. The original Note uses a physical slider (Note vs Call). Limits: does NOT work with earphones or Bluetooth headsets, because the other party is not captured (Plaud help; listed as a con by Telepolis). Tom's Guide found that on the original Note the default VCS gain was too weak for quiet speech on calls; raise the sensitivity in the app. No legal-notice tone is played to the other party.

**battery recording and standby**

Note Pro: 500 mAh. Vendor claims: Enhance 30 h of continuous recording, Endurance 50 h, plus Adaptive mode (switches to Endurance below 20%); standby up to 60 days. Telepolis and nextpit quote 60-75 days; some retail listings and TU Dresden quote 55.5 h in power-saving mode. Tested: TechCrunch (Dec 2025) still had 55% left after 15 days of conferences, interviews, calls and notes. TU Dresden said its test confirmed the specs. A Plaud store reviewer reported 67% after 2 weeks at 8-10 recordings a day (vendor-hosted review). Charging: proprietary magnetic 4-pin cable, about 2 h full, 5 V / 0.5 A. Original Note: 400 mAh, 30 h, 60 days standby (vendor). Tom's Guide was sceptical of the 30 h figure in on/off use.

**display and controls**

Note Pro: 0.95-inch AMOLED 'InstantView' display (600 nits per Telepolis). It shows a live waveform while recording, a blinking dot in screen-off recording mode, battery level, app-connection and untransferred-file icons, transfer mode and storage-full warnings. One physical button: press-and-hold to start (one vibration), press-and-hold to stop (two vibrations), short press during recording to add a Highlight (one vibration, purple marker). Starting a recording one-handed without looking works via the button plus haptics. Fragility: a vendor lab test killed the inner display with a 55 g steel ball dropped from 6 cm, while the cover glass stayed intact. Original Note: no screen. It has a record button with a call/note slider, a status LED (solid red throughout recording, cannot be disabled) and vibration feedback. Battery level is visible only in the app.

**size weight**

Note Pro: 85.6 x 54.1 x 2.99 mm (3.37 x 2.13 x 0.12 in), 30 g (1.06 oz). Original Note: 85.6 x 54.1 x 2.99 mm, 30 g. The magnetic case adds bulk and weight (not specified).

#### transcription and ai

**speaker diarization**

Included on the FREE tier (all plans list 'AI transcription with speaker identification'). Speakers can be renamed per paragraph or globally. Optional 'Auto speaker labeling' learns voices from your labels and from a 30-second voice profile of your own. Plaud calls this similarity search, not biometric profiles, but under GDPR a voice embedding can still be biometric data. Tested: Telepolis (Polish) found speaker separation worked at press conferences and in a 6-person voice chat. BGR found speakers easy to identify in 14-person council meetings. TU Dresden (German) found that remote participants played through a loudspeaker were hard to separate or were merged, because Plaud separates by voice timbre, not direction. nextpit (German) was positive. Limits: no published maximum speaker count; the developer API caps diarization at 6 h per file. Overlap and noise degrade it (vendor guidance).

**online meeting capture**

(1) Plaud Desktop, the official app for macOS and Windows: bot-free capture of system audio plus microphone, with auto-detection of Google Meet, Zoom and Teams in the browser, Zoom and Teams desktop, Slack huddles, Webex and Lark. It requires a bound Plaud device, consumes the same transcription minutes, and requires cloud sync (privacy policy). Known issue: it records only your side unless Teams outputs to a physical device. (2) Place the card next to the laptop speaker (Tom's Guide captured a Google Meet this way with the original Note). Remote voices played through a speaker are harder to diarize (TU Dresden). For this buyer, Tactiq or Wispr Flow already cover online calls; Plaud Desktop adds nothing that justifies the hardware.

**realtime transcription**

No. Plaud officially does not offer real-time transcription; everything is processed after the recording is transferred and uploaded. Transcription runs automatically through the default AutoFlow, or manually with 'Generate'.

**on device processing**

None for transcription. The device records, stores and syncs. Transcription and AI run in Plaud's cloud through OpenAI, Google and Microsoft APIs, routed to regional endpoints. Private Cloud Sync off only prevents persistent server storage; audio is still uploaded for each transcription.

#### ecosystem

**apps**

Plaud mobile app (iOS, Android), Plaud Web (web.plaud.ai) and Plaud Desktop (macOS, Windows). Parity gaps: Auto-transfer is iOS-only; WAV audio export is app-only (Web exports MP3); Private Cloud Sync settings and AutoFlow creation are app-only; device binding and transfer are phone-only. UI languages are set separately per surface, and there is no Polish UI. The apps are covered by security updates until 2029-10-29 (PSTI statement).

**integrations**

Official: Zapier, as a trigger only ('transcript generated', 'summary generated'), which works on a free Zapier plan and can feed Google Docs, Notion, Gmail, Slack and so on. Plaud cannot be a Zapier action. Others: Google Calendar (reads events to name recordings and suggest speakers), Salesforce (log notes as tasks from Plaud Web), AutoFlow email delivery of transcript or summary, the official MCP (Claude, ChatGPT, Cursor and others) and the CLI. No native Notion, Google Drive, Obsidian, Make or n8n integration was found in the help centre (the pricing page markets Zapier and Google Calendar). Community: the 'Plaud Sync' Obsidian plugin (leonardsellem/plaud-sync-for-obsidian, 89 stars, reverse-engineered web API, last push May 2026); the 'Plaud Importer' Obsidian plugin; sergivalverde/plaud-toolkit (TypeScript library, CLI and MCP, 44 stars, Aug 2026); iiAtlas/plaud-recording-downloader (Chrome extension, 44 stars). Most integrations are automatic once configured (Zapier, AutoFlow); exports are manual.

**export formats**

Audio: MP3 and WAV (WAV app-only). Transcript: TXT, SRT, DOCX, PDF, with toggles for timestamps and speaker labels. Summary: TXT, Markdown, DOCX, PDF. Mind map: PNG and Markdown. Plaud's pricing page markets '27+ formats'. All of these are available on the free Starter plan. Programmatic: JSON via the MCP and CLI (transcript segments with timestamps and speaker labels), and Markdown summaries from the CLI.

**api mcp access**

Grade: FULL by the rubric (audio plus transcript via official MCP and CLI on the free tier), with important caveats. (a) Official REST API: no public API for personal accounts. Plaud says there is no sign-up or waitlist. A legacy 'Plaud OAuth API' is a closed beta for a few existing integrations, returns only the 20 most recent recordings, and is not open to new users. Plaud Embedded (docs.plaud.ai, apply at dev.plaud.ai) is a developer platform for companies: device SDK (iOS, Android), partner and user tokens, device binding, file upload and an async Transcription API (60 req/min, 24 h max audio, 6 h max diarization, PAYG $0.28 per hour plus $15 per connected device per month after 300 free hours and 50 devices). It is available in the US only and is not meant for accessing your own recordings. (b) Webhooks: none public. The closest equivalent is the Zapier triggers on transcript or summary ready. (c) MCP: OFFICIAL Plaud MCP, GA 12 May 2026. npm @plaud-ai/mcp v0.3.13, last update 17 Sep 2026; local install via 'npx -y @plaud-ai/mcp@latest install', or remote at https://mcp.plaud.ai/mcp with OAuth. Plaud is listed in Claude's Connector Directory and ChatGPT's Plugins. Tools: login, logout, get_current_user, list_files (query, date_from, date_to, pagination), get_file (adds a 24 h presigned audio URL, source_list transcript segments with timestamps and speaker labels, and note_list Markdown summaries), get_note, get_transcript. It is read-only: it cannot transcribe, record or edit. It requires Private Cloud Sync. Remote HTTP traffic passes through a US-hosted Plaud MCP server, though Plaud says nothing is stored. Free for all active accounts 'currently', and pricing may come later. (d) CLI/SDK: official Plaud CLI, npm @plaud-ai/cli v0.3.14 (Node 20+, Windows, macOS, Linux). Commands: login, files, today, recent, search, transcript (-o file), summary, audio (24 h link). Scriptable and free. Tokens are kept in ~/.plaud/tokens.json. (e) No-code: Zapier triggers. No Make or n8n app found. (f) Last resort: no USB mass storage; WAV/MP3 export from the app. Pipeline fit: a scheduled 'plaud recent' plus transcript and audio download into the vault is straightforward. The catch is that it requires cloud storage of client audio, and new transcripts still consume the 300 free minutes.

#### pricing

**paid plans**

Individual (US, plaud.ai, 2026-10-01): Pro, 1,200 min/month, $17.99/month or $99.99/year ($8.33/month). Unlimited, up to 24 h/day, $29.99/month or $239.99/year (about $20/month). Team: $28 per user per month, or $20 per user per month billed annually, as a launch offer until 30 Nov 2026; then $35 / $25. EU (eu.plaud.ai): Pro EUR 19.99/month or EUR 110.99/year; Unlimited EUR 224.99/year. One-time Extra Minutes packs are listed under free_minutes_steady_state. Plain-transcription features behind the paywall: none except minutes. Polish, speaker labels and all export formats are on Starter. Paid tiers add capacity plus AI extras (Ask Plaud, custom templates, 'latest models'). Workspace-level data residency is Team-only.

**promise durability**

The 300 min/month Starter allowance has held since its introduction (2023-2024) with no reduction found. History: Pro went from 600 to 1,200 min/month at $79/year, then rose to $99.99/year. Unlimited ($239.99/year) and Team were added later. Capability downgrade for existing owners: original-Note firmware V2.1 disabled 'Access via USB' and RAW files, removing the drive path that buyers may have counted on. Conditions: Starter needs a bound device (it is cancelled after 30 days without one), MCP and CLI are free 'currently', and the ToS allow changes with 30 days' notice for material changes. Security-update commitments (UK PSTI): Note Pro until 2028-08-27, original Note until 2027-06-27, app until 2029-10-29. If the vendor shut down, the device would still record to internal storage, but there is no exportable-file path without the app, which is worse than USB-storage devices.

#### privacy and compliance

**training on user data**

No training by default: Plaud says customer audio, transcripts, summaries and metadata are not used to train or improve any model, by Plaud or by sub-processors, unless the user explicitly opts in. There is no pre-ticked opt-in. The DPA says training requires a separate written opt-in. AI providers (OpenAI, Google, Microsoft) operate under contractual zero-retention and no-training terms (vendor). Retention: cloud content is kept until the user deletes it or the account is closed. Deletion propagates to backups, and a permanent delete from Trash is irreversible. With Private Cloud Sync off, server copies are deleted immediately after processing. Auto speaker labeling stores voice-similarity data when enabled (opt-in).

**recording indicator consent**

Note Pro: the AMOLED shows a moving waveform while recording, but a screen-off recording mode shows only a single blinking white dot, which is easy to miss. Haptics are felt by the wearer only. There is no audible tone and no call announcement, so the other party on a phone call gets no signal. Original Note: a solid red LED for the whole recording, which cannot be disabled. Consent: Plaud explicitly does not collect consent, puts responsibility on the user, and suggests a one-line verbal heads-up. The DPA makes the customer solely responsible for recording consents and notices. Telepolis notes that informing the other party on calls is left to the user.

#### verdict

**independent review consensus**

Reviewers agree on: excellent build and slim card form; accurate transcription in English, German and Polish with good speaker separation in normal rooms; excellent battery and standby; best-in-class phone-call capture via the contact sensor; and the main cons, namely the proprietary charging cable, app and cloud dependence, the small free allowance, and EU data-handling questions. Reviews: TechCrunch, Ivan Mehta (29 Dec 2025, month-long daily use): 'accurate in most instances', 55% battery after 15 days, carried everywhere. TU Dresden ZIH VCC (updated 2 Jun 2026, institutional test, German, 1-h meeting with remote participants): very positive transcription, 5 m confirmed, remote speakers merged, data-control concerns, recommends participant consent. Telepolis.pl, Lech Okon (20 Jun 2026, Polish; vendor-solicited sample and affiliate boxes): 10/10, Polish 'perfect' apart from polonised English names; cons are the free limit, no Polish UI and no Bluetooth-headset calls. nextpit.de, Carsten Drees (19 Sep 2025, vendor sample, German): very accurate; cons are the subscription cost and US data storage. BGR, James Bruce (29 Jul 2026, affiliate disclosure): 14-person council meetings captured well; cons are the case needed for MagSafe and the free hours. Tom's Guide, Peter Wolinski (28 Jan 2025, original Note, affiliate): 'excellent transcription accuracy'; cons are the proprietary connector and reliance on the app. Sponsored or low-weight sources: jotem.in (explicitly 'in cooperation with PLAUD AI'), guidelee.pl (vendor sample plus affiliate links, likely Czech-language test), Komputer w Firmie (vendor sample, 2024), a TechRadar 'sponsored offer' page, Plaud's own anechoic-chamber WER blog (vendor), and affiliate listicles (laxis, tldv; some are competitors). No reviewer published Polish WER figures.

**best for**

Best: in-person meetings and workshops (4 mics, 5 m, best documented Polish accuracy, 30-50 h battery, card in a wallet) and handset phone calls (contact-sensor capture of both sides, automatic mode switch). Good: voice notes (one button, haptics, always carried). Online calls: possible via Plaud Desktop or by placing the card near the speaker, but this adds nothing over the buyer's Tactiq or Wispr Flow and burns minutes. Weak: calls on earbuds or Bluetooth headsets (not captured); local or offline data custody (no USB); heavy use on the free tier (5 h/month); bilingual PL+EN meetings (one language per recording).

**pros cons**

Pros: (1) the strongest Polish evidence of any item (grade-A Telepolis test, Polish and speaker labels on the free tier); (2) official MCP and CLI on the free tier, with transcript JSON (timestamps, speakers) and original-audio links, plus Zapier triggers, which makes it the best programmatic access in the category; (3) best-in-class form factor: 3 mm, 30 g card, 4-mic 5 m pickup, 30-50 h battery, 60-day standby, display, Find My; (4) automatic phone-call capture of both sides on any phone app; (5) a large, profitable vendor with ISO 27001/27701 and SOC 2 Type II claims and EU Frankfurt hosting for EU accounts. Cons: (1) fails R2: proprietary 4-pin magnetic cable, no USB data; (2) only 300 free min/month, so about $180-190/year in one-time packs to reach 20 h/month; (3) no account-free or offline data path, since audio leaves the device only through the bound phone app (and the cloud for CLI/MCP); (4) mixed PL+EN not supported in one recording; no Polish UI; (5) data residency is disputed (HK seller entity, US controller, US-hosted remote MCP, critics citing US storage), and the MCP requires cloud sync of client audio.

**conflicting evidence**

(1) Data residency: Plaud's trust page and help centre (Sep 2026) say EU accounts are hosted on AWS Frankfurt and use EU-hosted LLM sub-processors. nextpit (Sep 2025) said US AWS with no EU option; Sally.io (Jun 2026, competitor) says AWS Oregon with no EU hosting. The DPA (May 2026) still permits US processing, and the remote MCP server is US-hosted. The difference may reflect timing (an EU region added later) or the IP-based account-region assignment. (2) Contracting entity: Plaud Inc., Delaware (privacy policy, DPA) vs Plaud LLC, Wyoming (EULA, ToS disclaimer) vs Nicebuild Technology Limited, Hong Kong (de.plaud.ai Impressum, EU seller). (3) USB data: the help centre says the Note Pro never supported USB file access and the Note lost it from firmware V2.1, while the accessory-kit page still advertises data transfer with a computer. (4) Storage hours: help article '64 GB ~30 h Enhance / 50 h Endurance' vs Telepolis ~500 h vs ~550 h by arithmetic at 256 kbps (Plaud's older Note marketing: 480 h). (5) Battery and standby: vendor 50 h Endurance and 60 days standby vs 55.5 h (retail listings, TU Dresden) and 75 days (Telepolis, nextpit). (6) Mode switching: vendor says an orientation sensor; Telepolis says vibration (VCS) detection; BGR says a manual switch in the app. (7) Starter features: one Plaud article says Starter has full access to Plaud Intelligence; another lists Ask Plaud and custom templates as Pro features. (8) Mixed languages: Plaud says multilingual recordings are not supported; guidelee (translated, likely Czech) says anglicisms transcribed well. (9) Price: $179 launch vs $189 now; EUR 189 list vs EUR 159.90 promo. (10) Polish quality: Telepolis 10/10 and 'perfect' Polish, but with a vendor-solicited sample and no WER; the other Polish reports are sponsored or older-device reviews.

#### other info

**item**

- **id**: plaud-note-pro
- **name**: Plaud Note Pro (incl. original Plaud Note variant)
- **group**: benchmark
- **wave**: 2
- **researched**: 2026-10-01
- **step2 corrections**: (1) The Telepolis 10/10 (20 Jun 2026) is the OVERALL product score, not a numeric Polish-transcription score. The Polish assessment is qualitative with no WER. The review sample was vendor-initiated (the author writes that the manufacturer asked him to test it), and the page carries Allegro/Media Expert affiliate boxes. It still counts as grade-A evidence (an independent Polish-language hands-on), with that caveat. (2) The 'EUR 159.90 at IFA' figure was a promotional price. The EU list price is EUR 189 (eu.plaud.ai, 2026-10-01) and the US price has risen from the $179 launch price to $189. (3) Raw audio is app download ONLY: Plaud states the Note Pro 'has never supported USB file access'. The original Plaud Note lost USB access from firmware V2.1. (4) The MCP server is official, GA since 12 May 2026, and free on all active accounts, including Starter. It returns transcripts with speaker labels and a 24-hour audio download link, but it requires Private Cloud Sync. (5) Mixed PL+EN in one recording is officially NOT supported (one language per recording).

**sources**

- https://www.telepolis.pl/artykuly/testy-sprzetu/plaud-note-pro-nagrywanie-rozmow-android-ios-test-opinie - Telepolis Polish hands-on test, Lech Okon, 20 Jun 2026 (Polish transcription, VCS calls, magnetic USB-C cable, 829 PLN, no Polish UI, 10/10; vendor-solicited sample, affiliate boxes)
- https://support.plaud.ai/hc/en-us/articles/50944474357145-Charge-the-device - Note Pro charging: 4-pin proprietary port, third-party cables may damage, 2 h, 5V/0.5A (read via Zendesk API, updated 30 Sep 2026)
- https://support.plaud.ai/hc/en-us/articles/50810876232345-Charge-the-device - original Plaud Note charging: same 4-pin proprietary cable
- https://support.plaud.ai/hc/en-us/articles/50154888041241 - Note and Note Pro cables are universal (interchangeable)
- https://support.plaud.ai/hc/en-us/articles/50947269502105-Transfer-files - Note Pro transfer: BLE / Wi-Fi Fast Transfer / iOS-only Auto-transfer; 'never supported USB file access'; files deleted after transfer
- https://support.plaud.ai/hc/en-us/articles/51990314311449-Laptop-doesn-t-recognize-Plaud-Note - original Note: Access via USB and RAW files disabled from firmware V2.1
- https://support.plaud.ai/hc/en-us/articles/8127779432079 - original Note 'Access via USB' mode (legacy)
- https://support.plaud.ai/hc/en-us/articles/50835453223705-Export-recordings-transcripts-and-summaries - export formats (audio MP3/WAV app; transcript TXT/SRT/DOCX/PDF)
- https://support.plaud.ai/hc/en-us/articles/51023259082393 - Plaud Web export (MP3 only)
- https://support.plaud.ai/hc/en-us/articles/50833295212697 - ASR vs MP3 vs WAV formats
- https://support.plaud.ai/hc/en-us/articles/53565711257113-What-is-the-bitrate-of-Plaud-devices - recording input/output bitrates (Note Pro 1920/256 kbps)
- https://support.plaud.ai/hc/en-us/articles/53422487420953 - 112+ languages incl. Polish; one language per recording
- https://support.plaud.ai/hc/en-us/articles/53572699146265 - bilingual/multilingual transcription not supported
- https://support.plaud.ai/hc/en-us/articles/50636065290137-Custom-vocabulary - 500 terms, case-sensitive, presets
- https://support.plaud.ai/hc/en-us/articles/11476636337295 - Starter/Pro/Unlimited vs Extra Minutes (600/3,000/6,000, 24-month validity)
- https://support.plaud.ai/hc/en-us/articles/11177116525455-Transcription-minutes - Starter 300 min after binding; no rollover; packs activate within 12 months
- https://support.plaud.ai/hc/en-us/articles/50742099278617-Comparison - plan comparison (Starter 'full access to Plaud Intelligence')
- https://support.plaud.ai/hc/en-us/articles/57724862694937-Plaud-AI-Membership-FAQ - pricing, annual vs monthly, Team launch offer
- https://support.plaud.ai/hc/en-us/articles/53488098223513 - Starter cancelled after 30 days with no bound device
- https://support.plaud.ai/hc/en-us/articles/50835520394009-AutoFlow - default 'Auto-summarize new recordings' AutoFlow on by default
- https://www.plaud.ai/pages/plaud-ai-plan-pricing - plan pricing page (Pro $17.99/mo or $8.33/mo annual; Unlimited $29.99/$19.99; MCP beta mention)
- https://www.plaud.ai/products/plaud-note-pro - US product page ($189, specs: 4 MEMS + 1 VPU, 500 mAh, 64 GB, BLE 5.4/Wi-Fi, 2 h charge), seen 2026-10-01
- https://eu.plaud.ai/products/plaud-note-pro - EU product page (EUR 189 Note Pro, EUR 169.90 Note; EU plan prices), seen 2026-10-01
- https://www.plaud.ai/products/plaud-ai-transcription-quota-6000mins (+ -3-000-mins, -600-mins) - US pack prices $99.99 / $59.99 / $12.99
- https://eu.plaud.ai/products/plaud-ai-memberships-transcription-quota - EU pack prices EUR 99.99 / 69.99 / 14.99
- https://www.plaud.ai/products/plaud-note-pro-accessory-kit - $19.99 cable + magnetic ring kit
- https://support.plaud.ai/hc/en-us/articles/50218478191257 - Note vs Note Pro spec table
- https://support.plaud.ai/hc/en-us/articles/61748135468825 - battery by model; Note/Note Pro charge with magnetic cable
- https://support.plaud.ai/hc/en-us/articles/51379256572185 - Enhance/Endurance/Adaptive battery modes
- https://support.plaud.ai/hc/en-us/articles/50153469408793 - auto-switching via internal orientation sensor
- https://support.plaud.ai/hc/en-us/articles/50153390493081 - no call capture with earphones
- https://support.plaud.ai/hc/en-us/articles/50947244050201-Start-recording - single button, haptics, highlights
- https://support.plaud.ai/hc/en-us/articles/50942892063129 - InstantView display indicators
- https://support.plaud.ai/hc/en-us/articles/50810793926937-Indicator-light - original Note LED (solid red while recording)
- https://support.plaud.ai/hc/en-us/articles/50944850235801 - device has no magnet; attaches via case or ring
- https://support.plaud.ai/hc/en-us/articles/52095874073113 - display durability lab test
- https://support.plaud.ai/hc/en-us/articles/56923396238361 - Find My on Note Pro (firmware V1.5+)
- https://support.plaud.ai/hc/en-us/articles/60726890231449 - no public API; use MCP/CLI; Plaud Embedded for companies
- https://support.plaud.ai/hc/en-us/articles/59291709269401 - closed OAuth API beta limited to 20 recent recordings
- https://support.plaud.ai/hc/en-us/articles/57751078986265-Plaud-MCP - official MCP: tools, free, requires Cloud Sync, audio link 24 h
- https://support.plaud.ai/hc/en-us/articles/57751026815257-Plaud-CLI - official CLI commands incl. 'plaud audio'
- https://support.plaud.ai/hc/en-us/articles/60814066953753 - Plaud Embedded (US only)
- https://support.plaud.ai/hc/en-us/articles/12200669941647-Zapier-integration - Zapier trigger-only
- https://support.plaud.ai/hc/en-us/articles/62317504866969 - Salesforce integration
- https://support.plaud.ai/hc/en-us/articles/57809292562585-Calendar - Google Calendar integration
- https://docs.plaud.ai/plaud-mcp-cli/mcp.md - MCP developer docs (tools, fields, US-hosted HTTP server)
- https://docs.plaud.ai/plaud-mcp-cli/cli.md and https://docs.plaud.ai/plaud-mcp-cli/changelog.md - CLI docs; GA 12 May 2026
- https://registry.npmjs.org/@plaud-ai/mcp and https://registry.npmjs.org/@plaud-ai/cli - npm packages (latest 0.3.13 / 0.3.14, updated 17 Sep 2026)
- https://docs.plaud.ai/plaud-embedded/transcription-api-overview.md - Transcription API, model 'plaud-fast-whisper'
- https://docs.plaud.ai/api-reference/transcription-api/submit-audio-for-transcription.md - API limits (60 req/min, 24 h, 6 h diarization), segment-level language detection
- https://docs.plaud.ai/plaud-embedded/billing.md - Embedded PAYG $0.28/h + $15/device/month
- https://support.plaud.ai/hc/en-us/articles/57744166222489-Plaud-s-security-and-compliance - certifications, region to AWS mapping (EU = Frankfurt), retention
- https://support.plaud.ai/hc/en-us/articles/57744162858009 - AI providers OpenAI/Google/Microsoft, zero retention, no training
- https://support.plaud.ai/hc/en-us/articles/49922008621337 - Cloud Sync off deletes server data after processing
- https://support.plaud.ai/hc/en-us/articles/51820671018265-Private-Cloud-Sync - unlimited free cloud storage
- https://support.plaud.ai/hc/en-us/articles/52161613185561 - certifications list, Drata trust centre, Team workspace residency
- https://support.plaud.ai/hc/en-us/articles/54834976419353 - account region assigned by IP, no self-serve change
- https://support.plaud.ai/hc/en-us/articles/59556140012313 - UK PSTI security-support dates (Note Pro 2025-08-27 to 2028-08-27)
- https://support.plaud.ai/hc/en-us/articles/52645355064217 - Plaud does not collect consent on the user's behalf
- https://www.plaud.ai/pages/trust - trust page (regional AWS DCs, EU-hosted LLMs for Europe, encryption, no training by default)
- https://www.plaud.ai/pages/data-processing-addendum - DPA (1 May 2026; Plaud, Inc. Delaware; SCC Module 2, Irish law; US processing permitted)
- https://www.plaud.ai/pages/privacy-policy - privacy policy (controller Plaud Inc.; servers US/DE/JP/SG; Prighter Art. 27 representative)
- https://eu.plaud.ai/policies/terms-of-service - EU ToS (Plaud Inc./Plaud LLC; US law; EU consumer rights preserved)
- https://de.plaud.ai/pages/impressum - Impressum naming Nicebuild Technology Limited, Wanchai, Hong Kong as seller (seen 2026-10-01)
- https://jp.plaud.ai/pages/japan-privacy-security - Plaud Inc. vs PLAUD K.K.; manufacturing in China separated from data
- https://www.sally.io/blog/plaud-gdpr-data-protection - competitor (Sally/Aliru GmbH) DPO analysis, Jun 2026: HK seller, AWS Oregon claim
- https://www.nextpit.de/tests/plaud-note-pro-im-test - nextpit test, Carsten Drees, 19 Sep 2025 (vendor sample; US storage criticism)
- https://tu-dresden.de/zih/vcc/tests/zubehoer-1/plaud_note_pro - TU Dresden ZIH VCC institutional test, Jun 2026 (German)
- https://techcrunch.com/2025/12/29/plaud-note-pro-is-an-excellent-ai-powered-recorder-that-i-carry-everywhere/ - TechCrunch long-term review, Ivan Mehta
- https://techcrunch.com/2025/08/27/plaud-launches-a-new-ai-hardware-notetaker-the-179-note-pro - launch coverage ($179)
- https://bgr.com/2225669/plaud-note-pro-review/ - BGR review, James Bruce, 29 Jul 2026 (affiliate)
- https://www.tomsguide.com/ai/plaud-note-review - Tom's Guide original Plaud Note review, Peter Wolinski, 28 Jan 2025 (affiliate)
- https://www.komputerwfirmie.org/recenzja-plaud-note-dyktafon-xxi-wieku/ - Polish review of original Note, 20 Mar 2024 (vendor sample)
- https://jotem.in/plaud-note-ai-recenzja-osobistego-asystenta-biznesowego-ai/ - Polish review of original Note, 8 Jul 2025 (sponsored)
- https://www.guidelee.pl/recenzja/notatnik-elektroniczny/plaud-note-a-plaud-notepin/ - Note/NotePin review, 14 Jul 2025 (vendor sample; likely translated Czech test)
- https://www.plaud.ai/blogs/news/inside-plaud-s-anechoic-chamber - vendor WER chamber test, 22 Sep 2026 (vendor claim)
- https://startupfortune.com/plaud-reached-250-million-in-recurring-revenue-without-a-single-venture-dollar-and-is-now-targeting-500-million-in-2026-sales/ - $250M ARR, 2M+ devices, no VC (citing Bloomberg)
- https://sacra.com/c/plaud - revenue estimates; convertible note
- https://www.kicktraq.com/projects/izyrec/plaud-note-chatgpt-empowered-ai-voice-recorder/ - original Note Kickstarter (2023, $1.11M, 7,563 backers)
- https://uk.plaud.ai/blogs/news/exciting-upgrade-pro-plan-now-offers-1200-mins-mo-of-ai-transcription-summarization-at-no-additional-cost - Pro plan history (600 to 1,200 min at $79/yr)
- https://mediamarkt.pl/pl/product/_dyktafon-plaud-ai-z-transkrypcja-i-podsumowaniem-srebrny-164546190.html - MediaMarkt PL Note Pro 829 PLN (2026-10-01)
- https://www.x-kom.pl/szukaj?q=plaud%20note%20pro - x-kom Note Pro 829 PLN (2026-10-01)
- https://www.morele.net/dyktafon-plaud-plaud-note-pro-15889715/ - Morele Note Pro 815 PLN (2026-10-01)
- https://arxiv.org/abs/2408.00005 and https://huggingface.co/spaces/amu-cai/pl-asr-leaderboard - AMU BIGOS Polish ASR benchmark (Whisper large-v3 / Whisper cloud / AssemblyAI top on BIGOS)
- https://github.com/leonardsellem/plaud-sync-for-obsidian - community Obsidian sync plugin (89 stars)
- https://github.com/sergivalverde/plaud-toolkit - community TypeScript toolkit/CLI/MCP (44 stars)
- https://omi.featurebase.app/p/plaud-note-pro-issues-in-the-omi-app - community report of Note Pro issues in Omi app

#### omitted as uncertain

- account free operation
- ai act emotion features
- asr engine
- certifications
- company stability
- encryption
- free tier quality and retention
- known issues
- language count
- launch date
- noisy room performance
- offline recording
- price
- processing location data residency
- raw audio export
- req no subscription
- req polish transcription
- storage
- three year tco
- transcript editing and vocabulary
- verdict for me

## C. Near-misses — fail only the USB-C requirement

### Comulytic Note Pro

**NEAR-MISS (fails R2)** · Polish C · API/MCP partial (Zapier beta) · 19 field(s) omitted as uncertain

#### requirements

**req usb c port**

FAIL. There is no USB-C port on the device. The back has four spring-contact pogo pins, labelled 'Magnetic Charging Port' in the official Quick Start Guide (model LA558). The included proprietary magnetic cable ends in a USB-A plug, and a USB-A to USB-C OTG adapter is in the box. Confirmed by the QSG, How-To Geek ('proprietary charging cable ... USB-A connection on the other end'), TalkAndroid ('There is no USB-C port on the device itself') and Dr. Windows ('proprietäres USB-A-Ladekabel', four spring contacts). Input is 5 V / 0.5 A, with a 90-minute full charge. The vendor FAQ for 'won't charge' says to clean the contacts, use a 5V/0.5A adapter and 'use the original charging cable'. The EU store says spare parts are 'not yet available for individual purchase'. Third-party magnetic USB-A replacement cables are sold on Amazon.de and Amazon.pl (2-pack about 52 PLN), so a lost cable is replaceable but non-standard. Data over the cable is not documented anywhere. All official material describes transfers over Bluetooth or Wi-Fi only (see raw_audio_export). No wireless charging (vendor FAQ).

**requirements verdict**

NEAR-MISS (fails R2): the only charging interface is a proprietary 4-pin magnetic pogo cable with a USB-A plug, and there is no USB-C on the device. R3 passes at tier 1 on vendor terms (unlimited free transcription, no published cap). R1 is UNKNOWN: no Polish test exists, and a Lithuanian test failed.

#### identity

**basics**

Comulytic Note Pro (model LA558), first generation, by Comu (brand renamed from Comulytic in Aug 2026), sold by Rymind Inc. A credit-card-sized, 3 mm AI voice recorder with an OLED status display. It is pitched at sales and client-facing professionals ('Your Pocket-Sized Smart Assistant'), and its headline is unlimited free transcription and basic summaries. It now sits below the newer Comu Action Pro (Aug 2026, USB-C, 6 mics) in the same lineup.

**launch date**

US Shopify product created 6 Nov 2025. Launch publicity on 24 Jan 2026 (a Notebookcheck paid placement) included a 90-day Premium trial for purchases before 23 Feb 2026. First hands-on reviews appeared Feb 2026 (Cybernews 6 Feb, Notebookcheck 13 Feb). Japan launch Apr 2026. The EU store (eu.comu.com) product page was published 14 Sep 2026. Current generation: first. No direct successor has been announced. The Comu Action Pro (Aug 2026) is positioned by Comu as a different product ('Note Pro focuses on sales-specific scenarios'), although Plaud's blog calls it the successor. The Note Pro is still sold at a lower price.

**form factor**

Card: 86 x 52 x 3 mm, credit-card footprint, aluminium body, Gorilla Glass display, in black, silver or orange. The device has no magnets of its own; How-To Geek notes it is too narrow for a MagSafe ring. It attaches to a phone through the included magnetic faux-leather case (MagSafe-compatible). For non-MagSafe phones there are one or two self-adhesive magnetic rings in the box (QSG: one; Dr. Windows and TalkAndroid: two). The case is a very tight fit and hard to remove. No clip or lanyard is included.

**price**

US official store (store.comu.com), seen 2026-10-01: $128.99 (list $158.99), Fall sale, all colours. Bulk pricing from $116.10 each. WIRED (Aug 2026 update) saw $119 on Amazon. EU official store (eu.comu.com), seen 2026-10-01: EUR 118.99 (compare-at EUR 169.99), including VAT, with free shipping. Earlier EU street price: EUR 139.99 on Amazon.de vs UVP EUR 169.99 (Dr. Windows, Jun 2026). Japan MSRP JPY 30,000; Amazon JP low JPY 20,000s (ITmedia, Jul 2026). PLN: no Polish retailer listing found, so no PLN price. Launch list price was $158.99, and street price has run $116-139 since spring 2026.

**company stability**

Young, small and opaque. Rymind Inc. was founded around 2025 (third-party claim). No funding round, investor or revenue disclosure was found. Signals: Google Play 10K+ downloads; the vendor claims 'trusted by over 2 million professionals' (unverified marketing); 175 reviews on its own store; iF Design Award 2026 and Red Dot 2026 (ITmedia). Activity is high: it rebranded to Comu (Aug 2026), launched a second device (Comu Action Pro, Aug 2026), shipped frequent app releases (2.0 to 2.2.x, Aug-Sep 2026) and opened EU and JP stores. Risk: the device must be bound to a Comu account before it can record (vendor FAQ), and there is no mass-storage path. If Rymind shuts down or exits the EU, the hardware is effectively a brick (cf. Limitless, Humane). The Plaud blog and Layer3Labs both describe it as a newer brand with an unproven support track record.

#### capture hardware

**microphones**

Two MEMS microphones (top edge) plus one VPU bone-conduction sensor for picking up calls through the phone chassis. Some listings call this a 'triple-mic array'. Vendor-claimed: 5 m indoor pickup, AI noise cancellation, AI voice enhancement, and 'adaptive' automatic switching between call and room modes. Tested: Dr. Windows (outdoor family barbecue) found audio 'quite noisy' depending on distance but everyone within about 5 m intelligible. Notebookcheck got a clean transcript with a speaker about 2 m away. 9to5Mac says playback quality is below an iPhone or Mac, and the mics are very sensitive to taps or brushing the device, which can muffle speakers. The store's 'Compare Plan' lists '6-Mic Voice Capture', but that refers to the Action Pro, not the Note Pro.

**call recording method**

VPU (vibration/bone-conduction) sensor plus the mics, with the card magnetically stuck to the phone's back via the included case (iPhone 12+ MagSafe, or Android with the adhesive ring). The vendor claims automatic call vs in-person detection with no mode switch, and no Bluetooth passthrough. Results are mixed. ITmedia (affiliate) found call recording clear even in a fairly noisy setting. 9to5Mac found recording volume very low when attached to an iPhone, which hurt accuracy. Review Rewind (affiliate) found speakerphone calls clear but earpiece calls 'garbled'. The vendor's call FAQ (for the Action Pro) advises phone volume at 60-80% and removing thick cases. The phone app itself can also record, but iOS call-audio capture is not offered.

**battery recording and standby**

Vendor-claimed: 400 mAh, 45 h continuous recording, 107 days standby, 90 min full charge at 5 V / 0.5 A over the magnetic pogo cable. Tested: no independent 45-hour continuous test was found. TalkAndroid was still on standby after 46 days with one of three bars left. 9to5Mac used it for a month without charging and was at 33%. Review Rewind got a week of daily meetings without charging. How-To Geek calls the claims 'a little generous' but untested. The battery indicator shows three bars, not a percentage.

**size weight**

86 x 52 x 3 mm (vendor spec 0.3 x 5.2 x 8.6 cm). 27.6 g (vendor and How-To Geek; WIRED rounds to 28 g). Without the case.

**offline recording**

Records standalone without the phone or internet, to 64 GB local storage. The device must first be activated and bound to a Comu account in the app ('You need to bind the device to the app before you can record', vendor FAQ). Sync: background Bluetooth LE by default. 'Fast Transfer' switches the phone onto the recorder's Wi-Fi hotspot, which the vendor claims is up to 10x faster. Dr. Windows says Bluetooth is 'quite slow' and Wi-Fi 'considerably faster'. WIRED never got Fast Transfer working and called Bluetooth 'pokey'. There is no USB sync.

**account free operation**

No. A Comu account and app binding are required before the device will record (vendor FAQ), and audio leaves the device only through the vendor app (BLE or Wi-Fi). If the vendor shuts down or drops the EU, files already transferred stay in the phone app's local storage (cloud only if Cloud Backup is on). Exporting them depends on the app still running. New recordings would likely be impossible if account activation or binding servers go away, and there is no mass-storage escape hatch. That is the same failure mode as Limitless.

#### transcription and ai

**language count**

113 languages (vendor-claimed; the list is not published). Per-recording Auto or a fixed language. Mixed-language: no explicit code-switching support. TalkAndroid found a mixed Spanish/Portuguese session degraded ('mixed-language conversations may confuse transcription accuracy'), and Cybernews's Lithuanian test was misdetected. WIRED notes summaries and insights come out in your chosen output language while the transcript stays in the source language. No PL+EN evidence.

**speaker diarization**

Included free: automatic Speaker01 and Speaker02 labels, a preset speaker count, 'Name Speaker' renaming, a 'My Voice' profile to tag the owner, and contact voice tagging. Quality is the most-cited weakness. Notebookcheck saw the owner's interjections attributed to the other person, and a 4-speaker podcast kept collapsing into one speaker. 9to5Mac saw two people merged into one, or one split into two. Dr. Windows got occasional 'Unknown speaker' despite named speakers. Review Rewind says 5+ participants need manual cleanup, and cross-talk confuses it. ITmedia saw transcripts break into fragments with multiple speakers. One App Store user reports accurate labels on a 3-hour lecture. Expect it to degrade beyond 2-3 speakers.

**on device processing**

None. The device records and encrypts locally (AES-256), and the phone app does no local transcription. All ASR and AI runs in Comu's AWS (US) cloud or through third-party model APIs.

#### ecosystem

**apps**

iOS (iPhone; also runs on Apple-silicon Macs via the App Store), Android (Google Play package ai.comulytic.atlas, plus a direct APK from resources.comu.com), web (web.comu.com, formerly web.comulytic.ai) and Comu Desktop for Windows and macOS (Intel and Apple silicon). Parity: the web and desktop apps only see recordings when Cloud Backup is enabled in the mobile app. Device pairing and transfer happen in the mobile app. The Developer (API key, webhook) settings are in the web app.

**integrations**

Zapier ('Comu (Beta)'), trigger-only. Triggers: 'New Transcripts & Summaries Ready' (minimum recording length, output as Markdown, Rich Text or Plain Text) and 'New Action List Insert'. Templates cover Google Drive, Google Calendar, Gmail, OneDrive, Dropbox, Box and Notion. Comu cannot be used as a Zapier action. The in-app Integrations page labels it 'Free access'. Native connectors: Google Calendar sync and Gmail/Outlook email drafts (agent features). No native Notion, Obsidian, Slack or CRM integration was found, so Notion and others go through Zapier. Exports otherwise are manual (share, copy, export). App 2.2.0 adds 'read-only integrations' with compatible AI tools for 'eligible plans' (see api_mcp_access).

**export formats**

From the web-app export dialog code: Transcript as .TXT, .SRT, .DOCX or .PDF, with options for timestamps and speaker labels. Summary, Insights and Action List as .TXT, .Markdown, .DOCX or .PDF. Notes as .TXT or .Markdown. Audio as .MP3 or .WAV. Also share links and copy to clipboard. Notebookcheck confirms PDF, Word, TXT and SRT from the mobile app. Zapier delivers Markdown, Rich Text or Plain Text.

#### pricing

**promise durability**

Held for about 9 months: launch ~Jan 2026 to Oct 2026. No downgrade of 'unlimited transcription' was found. The plans were restructured in Aug 2026 with the Comu rebrand: Elite and credits were added, and the free monthly limits on extras changed (10 Instant Abstracts and 10 Ask Comulytic became 10 pre-summaries, 3 Deep Dives, 1 translation and 500 credits). The core free transcription was unchanged. The vendor calls Starter 'permanent' and 'lifetime', and says core transcription will 'always be available to you for free'. It is not contractual: the Terms allow fee changes and suspension or termination 'for reasonable business or technical reasons'. The vendor's own blog advises treating 'the service as renewable and the recorder as durable'. A third-party reviewer it quotes says 'no third party can guarantee the future of cloud services'. If Comu shuts down: no transcription (cloud-only), no new recordings if account binding fails, and audio already in the phone app is exportable only while the app works (see account_free_operation).

#### privacy and compliance

**certifications**

Self-claimed only. The product page shows 'GDPR Compliant', 'SOC II', 'HIPAA' and 'CCPA' badges, and a Comu blog post claims 'full GDPR, HIPAA, and SOC II certification'. The Trust Center says only that internal controls are 'aligned with' ISO 9001 and ISO/IEC 27001, and cites AWS's own SOC/ISO certifications. No SOC 2 report, auditor, ISO certificate number or report-request process is published. Notebookcheck (Feb 2026) was told certifications were being applied for, expected in May. Layer3Labs (Jul 2026) and Plaud's blog (competitor) both note that no attestations are published. Radio and product: FCC, ISED, UKCA/PSTI, CE with an EU Declaration of Conformity, RCM and TELEC are claimed. EN 18031 is not mentioned. A Vulnerability Disclosure Policy exists (security@comulytic.ai).

**encryption**

Vendor-claimed: recordings encrypted AES-256 on the device, AES-256 at rest in AWS, and TLS 1.2/1.3 in transit. Encryption keys are 'centrally managed in the cloud', and server-side AI processing needs plaintext, so this is not end-to-end. The Amazon bullet 'end-to-end encrypted' is marketing. App lock via Face ID or Touch ID, and contact-profile locks.

**training on user data**

No training on content (audio, transcripts, generated content, corrections) 'without your prior explicit and informed consent' (privacy policy, 15 Sep 2026). AI service providers are contractually barred from training on it. Retention: while needed or the account is active. Deleting a recording (and emptying Trash) removes its derived text, and account deletion removes all data. Voice-profile data is deleted 'generally within 7 days'. Aggregated or de-identified data may be used for analytics.

**recording indicator consent**

Weak. The OLED shows 'Recording' with a timer, but by default the screen goes dark soon after start (TalkAndroid: 'invisible to anyone in the room'), though it can be set always-on. Haptic feedback is felt only by the user. No LED, no audible tone, no consent prompt. The Terms put all consent and call-recording-law compliance on the user, especially for the Contacts and voice-tagging features. The Comu blog has generic call-recording law guidance (US-focused).

#### verdict

**independent review consensus**

Reviewers: WIRED (Chris Null, best AI notetakers guide, Feb 2026, updated Aug 2026) named it 'Best Overall'. Reasons: the most useful all-round and cheapest over time, the best summaries, and the only device to transcribe a punny product name. Cons: no real-time transcription, slow analyses, Fast Transfer never worked. How-To Geek (Tyler Hayes, 7/10, affiliate links) liked the clear audio, including Google Meet from speakers, and the app. The proprietary USB-A magnetic cable was what he 'hated the most'. 9to5Mac (Marcus Mendes, Jun 2026): Whisper transcripts 'spot-on' in English and Portuguese; speaker recognition unreliable; recording quality below a phone's; mics pick up handling noise; low volume when on an iPhone. Notebookcheck (Feb 2026, manufacturer sample): good German transcript, poor speaker separation, painful app registration and Play Store availability. Cybernews (Konstancija, Feb 2026, affiliate): good English, failed Lithuanian. TalkAndroid (May 2026, affiliate): about 90% accuracy; good in French, Spanish and Portuguese; mixed-language weaker. Dr. Windows (Jun 2026, manufacturer sample plus affiliate): quite precise German, occasional speaker errors, GDPR concern over US processing. ITmedia Nlab (Jul 2026, affiliate): practical Japanese; cable the only gripe. Review Rewind (Mar 2026, Amazon-video affiliate): 90-95% English; earpiece call capture garbled. Sponsored or low-value sources to discount: Notebookcheck's 24 Jan 2026 launch article (labelled paid placement), Hypebeast release coverage, Layer3Labs (spec-sheet affiliate), Plaud's comparison blog (competitor). Consensus: the uncapped free transcription is the real differentiator, and the hardware is slim with long battery life. Every hands-on reviewer complains about the proprietary charger. Speaker diarization is the main quality weakness. Transfer and analysis are slow.

**known issues**

(1) Proprietary magnetic USB-A cable: forget it and you cannot charge (HTG, ITmedia, Review Rewind, 9to5Mac). (2) Speaker attribution errors (many reviewers). (3) Slow Bluetooth sync; Wi-Fi Fast Transfer unreliable (WIRED could not get it working). (4) Slow transcription and analysis (WIRED, 9to5Mac). (5) Mics sensitive to touch, and low level when mounted on a phone (9to5Mac). (6) Account and app friction: verification emails landing in spam and being rejected, and the app missing from some regional stores in early 2026 (Notebookcheck, Cybernews). (7) 'We are experiencing high demand' errors on the AI chat (9to5Mac). (8) Tight case, hard to remove (HTG, Notebookcheck). (9) Accidental button presses when on the phone drain the battery (store review). (10) Earpiece call capture inconsistent (Review Rewind). Support: a store reviewer praises a 30-minute human callback; the vendor promises 24 h email response and lifetime firmware and app updates. No battery-degradation or firmware-brick reports found yet (product under 1 year old).

**best for**

Best: in-person meetings and workshops with 1-4 people, and solo voice notes (one-button eyes-free start, 45 h battery, always in the wallet or on the phone). OK: phone calls via the VPU with the card stuck to the phone (mixed results, earpiece calls weaker). Weak or redundant: online calls. It works next to the laptop speaker, and Comu Desktop can capture system audio, but the buyer already has Tactiq. Poor: large multi-speaker rooms (diarization) and mixed PL/EN sessions (unproven).

**pros cons**

Pros: (1) Truly uncapped free transcription with all 113 languages on the free plan, so 3-year TCO is roughly the hardware price. (2) Very thin card (3 mm, 27.6 g) with a status OLED and haptic one-button control. (3) Long battery (45 h claimed, months of standby confirmed by reviewers). (4) Good exports: SRT/TXT/DOCX/PDF transcripts with timestamps and speakers, MP3/WAV audio. (5) An emerging pipeline: a free Zapier trigger with Markdown transcripts, and an API/webhook/MCP layer appearing. Cons: (1) No USB-C; proprietary pogo-pin USB-A magnetic cable (fails R2). (2) Polish untested, and a Lithuanian test failed. (3) US-only data processing, no published DPA or audit reports, self-claimed SOC 2/HIPAA. (4) Weak speaker diarization and handling-noise-sensitive mics. (5) The device is useless without a vendor account and app; no USB mass storage; API/MCP gated and undocumented.

**verdict for me**

SKIP (near-miss). Requirements first: it fails R2 on the proprietary magnetic pogo-pin USB-A cable, with no USB-C anywhere on the device. R3 is tier 1 on vendor terms. R1 is unknown: there is no Polish evidence, and a Lithuanian test failed. Polish quality: likely acceptable, since Azure Speech and Whisper are both strong in Polish, but unverified. The free tier may run on Azure rather than Whisper. Deciding reason: the charging interface knocks it out. If R2 were relaxed, it would be the cheapest no-subscription option with a free Zapier transcript feed. Even then, US-only processing and the account lock-in would need a GDPR review before recording client meetings.

**conflicting evidence**

(1) Storage: 64 GB (official stores, most reviews) vs 16 GB (one Amazon attribute and Layer3Labs); likely a listing error. (2) ASR engine: 'Azure Speech' on the Starter plan card and FAQ vs 'Whisper' in the store plan table, in reviews (9to5Mac, Dr. Windows) and from the spokesperson (Cybernews, 'Whisper V3 plus own deployed ASR'). (3) Audio path to third parties: FAQ ('audio passed through to the third-party model') vs spokesperson ('no raw audio is sent to OpenAI'). (4) Real-time transcription: Starter card lists 'Real-time AI Transcription' vs WIRED 'doesn't transcribe in real time' (Note Pro hardware). (5) Audio on device: the vendor blog says 'Audio recordings stay on the device you own' vs the FAQ, which says audio is deleted from the device after transfer to the app. (6) Custom vocabulary: an all-users feature in app 1.3.x (May 2026) and 9to5Mac setup, vs Premium-only on the Sep 2026 plan card. (7) Certifications: the product page and blog claim 'SOC II / HIPAA certification' vs the Trust Center's 'aligned with ISO 27001' and the absence of published reports (Notebookcheck: still pending in Feb 2026). (8) Button: physical (most reviewers, QSG 'press and hold') vs touch (Notebookcheck). (9) Mic count: '2 MEMS + 1 VPU' (spec) vs 'triple-mic array' (listings). (10) Encryption: Amazon 'end-to-end encrypted' vs the Trust Center's cloud-managed keys. (11) Action Pro relationship: the vendor calls it a different product, while Plaud's blog calls it the successor.

#### other info

**sources**

- https://store.comu.com/products/comulytic-note-pro - official US product page: spec table (64 GB, 2 MEMS + 1 VPU, 5V/0.5A, 90 min, 45 h / 107 d, 27.6 g, 0.78in 128x80), plan table, FAQ, box contents (magnetic charging cable, OTG adapter); $128.99 / $158.99 seen 2026-10-01
- https://store.comu.com/products/comulytic-note-pro.js and https://eu.comu.com/products/comulytic-note-pro.js - Shopify variant data (US created 2025-11-06; EU published 2026-09-14, EUR 118.99 / 169.99)
- https://eu.comu.com/products/comulytic-note-pro and https://eu.comu.com/pl/products/comulytic-note-pro - EU store (24-month warranty, Polish storefront)
- https://eu.comu.com/pages/shipping-policy - EU shipping (contiguous Europe, Amazon MCF / EU warehouse, free)
- https://cdn.shopify.com/s/files/1/0780/5737/3947/files/Comulytic_Note_Pro_User_Manual.pdf - official Quick Start Guide (Magnetic Charging Port, controls, BLE/Wi-Fi sync, model LA558)
- https://store.comu.com/pages/product-usage - official FAQ (189 Q&As embedded: plans, models 'ChatGPT-5.2, Gemini 3.1 Pro, Azure Speech', charging, data storage/deletion, import limits, binding required)
- https://store.comu.com/pages/trust-center - Trust Center (AWS USA, AES-256, TLS 1.3, 'aligned with' ISO 9001/27001, no training)
- https://store.comu.com/pages/privacy-policy and https://eu.comu.com/pages/privacy-policy - Privacy Policy updated 2026-09-15 (Rymind Inc., US servers, SCCs, EU rep eVatmaster GmbH, MCP/API disclosure, no training without consent)
- https://eu.comu.com/pages/terms-of-use - Terms of Use updated 2026-09-15 (subscriptions, MCP/API integrations, termination, NY law, AAA arbitration)
- https://store.comu.com/pages/about-us - About Comu (rebrand, 'unlimited and free', 113 languages)
- https://store.comu.com/blogs/news/voice-recorder-transcription-guide - vendor blog 2026-09-30: what 'unlimited' covers
- https://store.comu.com/blogs/news/why-we-created-comu-action-pro - vendor blog: Note Pro vs Action Pro, certification claims
- https://web.comu.com/en-us/guides/zapier-integration - official Comu-Zapier guide (trigger-only, Markdown/Rich/Plain)
- https://zapier.com/apps/comu/integrations - Zapier app page (Comu triggers and templates)
- https://web.comu.com (JS bundle at static1.comu.com/comulytic-web/_nuxt/) - web app: Developer panel (ApiKey/OpenAPI at openapi-api.comulytic.ai, webhooks), export formats (MP3/WAV, TXT/SRT/DOCX/PDF/MD), desktop recorder sources (mic/system/mic+system), plan cards; read 2026-10-01
- https://api.comu.com/api/kirby-voice/v1/voice/translation/languages - public translation-language list (139; Polish via 'azure'); not an ASR list
- https://apps.apple.com/us/app/comulytic/id6754308916 - App Store (seller RYMIND INC., version history incl. 2.2.0 'read-only integrations ... eligible plans', 1.3.x custom vocabulary, UI languages)
- https://play.google.com/store/apps/details?id=ai.comulytic.atlas - Google Play (Rymind Inc., Dover DE, +1 408, 10K+ downloads, updated 2026-09-24)
- https://www.wired.com/gallery/best-ai-notetakers/ - WIRED best AI notetakers (Comulytic Note Pro Best Overall; updated Aug 2026)
- https://www.howtogeek.com/an-ai-voice-recorder-that-can-make-sales-this-one-wants-to-do-it-all/ - How-To Geek review (7/10; proprietary USB-A magnetic cable)
- https://9to5mac.com/2026/06/10/review-comulytic-note-pro-is-now-my-official-sidekick-for-any-meeting/ - 9to5Mac review (Jun 2026)
- https://www.notebookcheck.net/Comulytic-Note-Pro-review-An-AI-dictation-device-with-a-lot-of-additional-features.1226283.0.html - Notebookcheck review (13 Feb 2026, German test)
- https://www.notebookcheck.net/Comulytic-Pro-AI-Note-Taker-offers-one-press-recording-with-unlimited-AI-transcription.1209367.0.html - Notebookcheck launch article (24 Jan 2026, PAID PLACEMENT)
- https://cybernews.com/gadgets/comulytic-note-pro-ai-voice-recorder-review/ - Cybernews review (6 Feb 2026, Lithuanian failure, spokesperson on Whisper V3 / own ASR)
- https://www.talkandroid.com/525939-comulytic-note-pro-review/ - TalkAndroid review (31 May 2026; pogo pins, no USB-C, multilingual tests)
- https://www.drwindows.de/news/gadgetcheck-comulytic-note-pro-diktiergeraet-mit-sinnvoller-ki-nutzung - Dr. Windows review (1 Jun 2026; German, EUR prices, GDPR concern)
- https://nlab.itmedia.co.jp/fav/articles/3955941/ - ITmedia Nlab review (29 Jul 2026; Japanese, call recording, cable complaint; affiliate)
- https://thereviewrewind.com/comulytic-note-pro-ai-voice-recorder-review - Review Rewind (9 Mar 2026; affiliate; call recording via earpiece garbled)
- https://www.layer3labs.io/gear/reviews/comulytic-note-pro-ai-voice-ai-note-taker - Layer3Labs (spec-sheet affiliate; 16 GB claim; no attestations)
- https://in.plaud.ai/blogs/articles/comu-review - Plaud competitor blog on Comu (San Jose company; no audit reports published)
- https://www.amazon.com/dp/B0G1YMLFSZ , https://www.amazon.com/dp/B0G1XQ3H4H , https://www.amazon.com/dp/B0GMGP9B1D - Amazon US listings (16 GB attribute vs 64 GB bullets)
- https://www.amazon.de/s?k=Comulytic+Note+Pro and https://www.amazon.pl/s?k=Comulytic+Note+Pro - Amazon DE (device listed) / PL (only third-party cables) search, 2026-10-01
- https://huggingface.co/blog/michaljunczyk/introducing-polish-asr-leaderboard - AMU Polish ASR leaderboard (BIGOS/PELCRA; Whisper large and AssemblyAI strongest)

#### omitted as uncertain

- ai act emotion features
- api mcp access
- asr engine
- availability eu poland
- display and controls
- free minutes steady state
- free tier quality and retention
- maker and hq
- noisy room performance
- online meeting capture
- paid plans
- processing location data residency
- raw audio export
- realtime transcription
- req no subscription
- req polish transcription
- storage
- three year tco
- transcript editing and vocabulary

### UMEVO Note Plus

**NEAR-MISS (fails R2)** · Polish B · API/MCP none · 28 field(s) omitted as uncertain

#### requirements

**requirements verdict**

NEAR-MISS: fails R2 only, because the device uses a proprietary magnetic pogo-pin charging and data port (USB-A cable plus OTG adapter in the box). R1 is PARTIAL: Polish is named and in the free tier (grade B) but untested. R3 is tier 2: MP3 over USB mass storage per vendor docs, while the 400 free min/month after year 1 is below the 1,200 needed.

#### identity

**basics**

UMEVO Note Plus. Over BLE the device advertises as 'LA518' and serials start with '518A'. This is the first generation and there is no newer Note Plus. Maker: the UMEVO brand (UME Technology, Inc. / Huasengdi Technology Co., Ltd.). It is a card-sized, 3 mm aluminium AI voice recorder that attaches magnetically to a phone. A physical NOTE/CALL switch selects room microphones for meetings or a vibration-conduction sensor for phone calls. Transcription runs in the cloud through the 'AI DVR Link' app. Positioning: a cheaper Plaud Note alternative with one year of free unlimited transcription.

**form factor**

Credit-card-sized slab, about 85 x 50 x 3 mm, aluminium body. It attaches to the back of a phone magnetically. The box includes a MagSafe-compatible magnetic case (vegan faux leather, FAQ 099) and an adhesive magnetic ring for Android phones or non-MagSafe cases. There is no clip, lanyard or wearable accessory. A thick phone case weakens the attachment (FAQ 100).

**availability eu poland**

Not sold through EU or Polish retail. No results on Amazon.de or Amazon.it when delivering to Poland. Allegro has no new offers, only one used private listing. Nothing found at x-kom, Media Expert or Komputronik. Buying routes: umevo.ai (worldwide free shipping, ships in 1-2 business days; no EU VAT or duty handling is stated, and the ship-from location is not stated, though there are US and China offices), or Amazon.com exporting to Poland. So there is no Polish statutory warranty through a local seller. The vendor offers a 12-month replacement warranty and a 30-day no-reason return. The app UI is not available in Polish. The App Store lists 11 UI languages: English, Arabic, French, Italian, Japanese, Korean, Russian, Simplified and Traditional Chinese, Spanish and Thai.

#### capture hardware

**microphones**

Vendor-claimed: dual Knowles SiSonic MEMS microphones for room (NOTE) mode, plus a piezoelectric vibration-conduction sensor for CALL mode (UMEVO audio-test blog). Also claimed: 'HD noise reduction' and pickup up to about 10 ft / 3 m (spec restated by FunkyKit). No beamforming details. The only test is the vendor's own. It found speech intelligible at 0.5-1.0 m and degraded at 2.5 m, and says the device is not designed for far-field capture beyond 2.5 m. No independent measurement exists. User reports are mixed: a Mexican Amazon reviewer found his phone's mic clearer, and a Canadian reviewer needed a mat under the device and closer placement.

**battery recording and standby**

400 mAh battery. Vendor claims: up to 40 h of continuous recording, 60 days standby, and about 1.5 h to a full charge at DC 5 V / 1 A through the magnetic cable. The Amazon listing bullets say 30 h instead (conflict). No lab test exists. Anecdotal user support: 57 h of recording over two charges with about 50% left (Amazon, Jun 2026), and a student reports a week of classes per charge. The vendor notes reduced runtime below 0 C.

**storage**

64 GB internal. At the device's 32 kbps MP3 (about 14.4 MB/h), that holds roughly 4,400 h of audio. The vendor quotes only 400 h (manual) or 480-540 h (blog). The figures are inconsistent, but storage is not a practical limit.

**display and controls**

A small built-in status display shows 'Welcome', the recording mode, the battery level, a Bluetooth icon, 'Transmitting' during fast BLE sync, and a USB icon when connected. Controls: one power/record button (hold 3 s for power; a short press starts or stops recording, with 1 vibration on start and 2 on stop) and a physical NOTE/CALL slide switch. With the button and the haptic feedback, you can start recording one-handed without looking. There is no bookmark or highlight marker (FAQ 069: no real-time highlighting) and no voice-activated recording (FAQ 043). Recording can also be started from the app over BLE.

**account free operation**

Mostly yes. Recording and copying the original MP3s over USB work without an account, the app or the cloud (FAQ 105). The app requires an account, and each device serial is bound to one account on the server; unbinding goes through support (FAQ 028-032). If UMEVO shuts down or drops the EU, the device keeps recording. Files stay reachable over USB mass storage (vendor-documented) and over BLE through the community protocol. Transcription and any minute balance would be lost.

#### transcription and ai

**online meeting capture**

No integration. FAQ 047-049: switch the computer's audio to its speakers, place the device next to them, and record in NOTE mode. If you use headphones, the remote side cannot be recorded reliably. There is no Zoom/Teams bot, no desktop app and no audio-track capture. For this buyer, keep Tactiq for online calls.

**on device processing**

None for transcription. The device only records and encodes MP3. All transcription and AI run in the cloud via the phone app (FAQ 054). A third-party directory's 'end-side AI' claim is not supported by vendor documentation.

#### ecosystem

**integrations**

None built in: no Notion, Google Drive, Obsidian, Slack, calendar, CRM, Zapier or Make. Export is manual through the phone share sheet to email, WhatsApp or other apps (FAQ 078/079). The business-solutions page offers 'API access and custom integrations' to enterprises on request, with no documentation.

**api mcp access**

NONE officially; fallback is audio only. (a) No public REST or GraphQL API. FAQ 024 says user-owned or third-party AI APIs are not supported. The business page mentions 'API access and custom integrations' for enterprise customers, with no docs, endpoints or pricing. (b) No webhooks. (c) No MCP server, official or community, was found (GitHub search, 2026-10-01). (d) No official CLI or SDK. Community option: github.com/wojt-janowski/mobile-la518-recorder, a NativePHP mobile plugin with a full reverse-engineered BLE protocol in PROTOCOL.md. It covers GATT service F0F0, the static bind handshake, file listing, start/stop recording, MP3 download and a live MP3 stream at about 50 KB/s. It has 1 star and 2 commits, both on 21 Apr 2026. The README says MIT, but the repo has no LICENSE file, and it references a Python CLI (la518.py) that is not in the repo. It handles audio only, not transcripts. (e) No Zapier, Make or n8n connectors. (f) USB mass storage, as documented by the vendor, is the API of last resort: mount the drive, copy AUDIO/*.mp3, run local Whisper and push the result into the vault. Vendor-cloud transcripts cannot be pulled programmatically. Free vs paid makes no difference, since nothing exists on any tier. Grade: none for transcripts; partial for raw audio via USB or community BLE.

#### privacy and compliance

**certifications**

Self-claimed only. A March 2026 press release claims compliance with 'SOC 2, HIPAA, and GDPR standards'. Third-party directories (Voice AI Space, parse.gl) add ISO 27001. The Amazon listing says the product 'meets enterprise security standards'. No SOC 2 report, ISO certificate, trust center, DPA, HIPAA BAA or EN 18031 declaration was found, and no FCC ID was found. Treat all of these as unverified.

**recording indicator consent**

Weak. There is a small status display, and haptic start/stop cues that only the wearer feels. No outward-facing recording LED is documented. Recording can also be started remotely from the app over BLE. There are no consent prompts or announcement features. Vendor content only notes that one-party vs all-party consent rules differ by jurisdiction. The buyer must inform participants manually (GDPR Art. 13).

**ai act emotion features**

None found. Neither the app nor the marketing mentions emotion or sentiment scoring of speakers.

#### verdict

**known issues**

(1) App reliability: hangs on playback and transcription, sometimes needing the cache cleared (Google Play, Mar 2026). Processing stops when the screen turns off, so the app must stay open (Google Play, Feb 2026). Transcription can sit 'stuck at 0%' or show 'Network Error'; the vendor blames server bandwidth or CDN/Cloudflare issues (FAQ 055/057/059). Transcription failed on Android 16 (FAQ 060). Servers sometimes go down silently (Amazon, Jun 2026). (2) Speed: 30-90 min to transcribe a 1-hour file (Google Play). (3) Summaries fail on recordings over 1 hour (Amazon, Jul 2026). (4) Beta speaker ID is inaccurate, and long recordings with speaker ID hang (Google Play; vendor blog). (5) Account binding: 'Device already bound' errors, used devices needing a backend unbind, and membership-date resets (FAQ 028-032, 090/091). (6) Hardware: device won't charge or turn on, turns itself on and off repeatedly, button stops responding, or 'memory full' won't clear (FAQ 092-096). One unit died at 4 months; support replaced it within days (Amazon, Aug 2026). (7) Proprietary magnetic cable: if it is lost, the device cannot be charged. (8) The call-mode switch is manual and the corner button is easy to press by accident during calls. Support is generally described as fast and helpful.

**best for**

Best for: phone calls on the go (CALL mode via the magnetic mount, with a manual switch); solo voice notes (one button, haptic feedback, long battery); and small in-person meetings within about 1-2 m. Weak for: large workshops or conference rooms (no far-field pickup); online calls (works only through laptop speakers, not a headset, so keep Tactiq); and Polish/English code-switching (the language must be set manually). It needs its proprietary magnetic cable (fails R2).

**pros cons**

Pros: (1) The vendor documents USB mass-storage MP3 export without an account, which gives a clean Whisper path and survives a vendor shutdown. (2) Polish is in the free tier: one year unlimited, then 400 min/month plus cheap non-subscription packs (about $0.20/h). (3) A 3 mm, 30 g card with a magnetic phone mount and a vibration-conduction call sensor. (4) Long battery: 40 h claimed, and users corroborate multi-day use. (5) Low price ($119-169). Cons: (1) Proprietary magnetic pogo-pin cable, so R2 fails and spares come only from the vendor. (2) No API, webhooks, MCP or integrations; transcripts are trapped in the mobile app. (3) A slow, buggy app with beta speaker ID, foreground-only processing, no desktop app and no Polish UI. (4) Opaque ownership (Denver Inc. / Shenzhen Huasengdi / Kinghal ODM), self-claimed compliance, no DPA and a weak BLE pairing scheme. (5) 32 kbps, 16 kHz audio, no independent quality tests, and manual language selection for mixed-language meetings.

**verdict for me**

SKIP (near-miss). Requirements first: it fails R2 (magnetic pogo-pin port, no USB-C). R1 is partial: Polish is listed in the free tier but untested. R3 is tier 2: USB MP3 plus Whisper works, but 400 free min/month is a third of the need. Polish quality is unknown because the ASR engine is undisclosed. The deciding reason is the proprietary cable. The device's one real strength for this buyer is the raw-audio path, and it still offers no API or MCP. Its GDPR posture is also weak for client conversations: unclear controller, no DPA, a static BLE pairing challenge and a Chinese ODM app stack. Consider it only as a cheap tier-2 capture card if R2 were relaxed.

**conflicting evidence**

(1) Charging interface. The manual ('Magnetic charging'), the accessory kit (custom pogo-pin) and the vendor audio-test blog ('not USB-C') say magnetic pogo-pin. One vendor battery blog says 'USB-C with pass-through charging', and FAQ 093/097/098 and Patnotebook say 'USB-C cable'. The physical-port evidence favours magnetic pogo-pin. (2) Battery: 40 h (vendor site and manual) vs 30 h (Amazon listing bullets); Amazon's spec table says 'Battery life 60 hours'. (3) Weight: 30 g (vendor) vs 50 g (FunkyKit) vs 3.68 oz (Amazon item weight). (4) Storage hours: 400 h (manual) vs 480-540 h (vendor blog) vs about 4,400 h by arithmetic at 32 kbps. (5) Audio format: MP3 32 kbps only (manual; community ffprobe on BLE downloads) vs 'MP3 and WAV' (FAQ 012; Amazon 'Format WAV') vs '16-bit, 32-128 kbps' (vendor audio-test blog). (6) AI engine: 'GPT-4.1' (FunkyKit), 'GPT-5' (Amazon), 'ChatGPT and other models' (FAQ 010), 'GPT, Claude, Gemini' (spec blog); one user speculates a self-hosted model. (7) First-year plan: 'Max Plan unlimited' (website, FAQ 085) vs 'Starter Plan with unlimited transcription & basic summary' (Amazon listing). (8) Cloud storage: 'unlimited cloud storage' (vendor comparison blogs, Spanish press) vs FAQ 102/103 'no cloud backup or cloud-drive storage'. (9) Language handling: 'instant language detection' (marketing) vs FAQ 062/063 (manual main-language selection, no multi-language auto mode). (10) Legal entity: UME Technology, Inc., Denver (store privacy policy) vs Huasengdi Technology Co., Ltd., Shenzhen (ToS) vs CG E-COMMERCE LLC with a kinghal.com contact (app privacy policy) vs Dongguan Kinghal Electronic Technology (iOS developer) vs 'LI XINAG YANG' (Google Play developer). (11) Encryption: 'on-device AES' (Amazon) vs plain MP3 over USB without an account (FAQ 021/105) and BLE with no bonding and a fixed challenge (community protocol). (12) Desktop: FAQ 022 says there is no desktop app, while FAQ 046 mentions 'web and mobile apps'; no web app was found. (13) Plan prices: Pro at '$2.50/month billed annually' matches the $29.99/year App Store item, but the App Store also lists Max annual at both $29.99 and $69.99, and a 'Pro VIP' monthly at $17.99.

#### other info

**item**

- **id**: umevo-note-plus
- **name**: UMEVO Note Plus
- **group**: near-miss
- **wave**: 2
- **researched**: 2026-10-01
- **step2 corrections**: Step-2 R2 FAIL is confirmed. The official accessory-kit page describes a custom magnetic pogo-pin charging port, and the manual lists 'Magnetic charging'. Step-2 R1 'UNKNOWN' is upgraded to PARTIAL (grade B). Polish is named on the vendor FAQ language list and on the 'Recording languages' page, where it is NOT a Max-only language, so it stays in the free Starter tier. No independent Polish test exists. Step-2 R3 is confirmed: year 1 is unlimited (Max Plan), then 400 min/month on Starter, plus non-subscription minute packs (cheapest $19.99 per 6,000 min, valid 2 years). Raw audio over USB mass storage is documented by the vendor (FAQ 021/077/082/105) but no independent reviewer has confirmed it. The format is MP3, 32 kbps, 16 kHz mono, confirmed with ffprobe by a community reverse-engineering project; the WAV claim is unconfirmed. New findings: the app is built by a Chinese ODM (Dongguan Kinghal), and three different legal entities appear across the vendor's policies.

**sources**

- https://www.umevo.ai/products/umevo-note-plus-magnetic-call-recorder-ai-voice-recorder-transcribe-summarize - official product page (price $119 sale / $169 regular, plan terms, minute packs; seen 2026-10-01)
- https://www.umevo.ai/pages/help-center-faqs - official FAQ 001-106 (Polish in language list, USB removable drive, no account for copying, plan tiers, Pro vs Max, no desktop app, no API, Teams/Zoom, retention, troubleshooting)
- https://www.umevo.ai/pages/recording-languages - per-plan language list (Polish not Max-only)
- https://www.umevo.ai/pages/faqs - older FAQ (plans, Pro $2.50 / Max $5.83 billed annually)
- https://www.umevo.ai/blogs/ume-all-posts/umevo-note-plus-user-manual - user manual (published 18 Sep 2025, updated 18 Aug 2026; magnetic charging, MP3 32 kbps, USB drag-and-drop, driver prompt)
- https://www.umevo.ai/pages/help-center-manual-detail - manual spec table
- https://www.umevo.ai/products/umevo-note-plus-official-3-in-1-accessory-kit - $20 kit, custom pogo-pin magnetic cable + USB-A to USB-C OTG adapter
- https://www.umevo.ai/blogs/ume-all-posts/umevo-note-plus-full-features-and-specs-everything-you-need-to-know - vendor spec blog (30 g, 400 mAh, GPT/Claude/Gemini, TXT/DOCX/PDF)
- https://www.umevo.ai/blogs/ume-all-posts/umevo-note-plus-audio-samples-an-empirical-microphone-test-across-a-quiet-room-a-cafe-and-a-group-conversation - VENDOR mic test (dual Knowles MEMS + piezo sensor; 2.5 m limit; 'not USB-C')
- https://www.umevo.ai/blogs/ume-all-posts/umevo-note-plus-battery-life-real-world-tests-and-comparison - VENDOR battery blog (claims USB-C; conflicts)
- https://www.umevo.ai/blogs/ume-all-posts/ai-note-taker-without-subscription-what-free-really-costs-in-2026 - VENDOR pricing blog (Aug 2026)
- https://www.umevo.ai/blogs/ume-all-posts/umevo-ai-voice-recorder-review-2026-honest-pros-cons-and-verdict - VENDOR 'review' (self-published)
- https://www.umevo.ai/policies/privacy-policy - store privacy policy (UME Technology, Inc., Denver; US servers)
- https://www.umevo.ai/policies/terms-of-service - ToS (Huasengdi Technology Co., Ltd., Shenzhen; modify/terminate clause; Starter minutes reset monthly)
- https://www.umevo.ai/policies/shipping-policy - shipping policy (worldwide, no EU VAT info)
- https://www.umevo.ai/pages/business-solutions - enterprise page ('API access and custom integrations', undocumented)
- https://resource.aidvrlink.com/dvrlink/Privacy_Policy.html - AI DVR Link app privacy policy (CG E-COMMERCE LLC, Sales@kinghal.com, US storage); host resolved to Alibaba Cloud US 47.254.92.172 on 2026-10-01
- https://apps.apple.com/us/app/ai-dvr-link/id6680163395 - iOS app (developer Dongguan Kinghal Electronic Technology Co., LTD; seller CG E-commerce LLC; IAP prices; UI languages)
- https://play.google.com/store/apps/details?id=com.ai.dvrlink - Android app (developer LI XINAG YANG; 10K+ downloads; 3.5 stars; user reviews on hangs, 30-90 min transcription, beta speaker ID)
- https://kinghal.manufacturer.globalsources.com/company-profile_6008853991217.htm - Dongguan Kinghal company profile (OEM/ODM voice recorders since 2014, brand Aomago; via search snippet)
- https://github.com/wojt-janowski/mobile-la518-recorder - community NativePHP plugin + PROTOCOL.md (reverse-engineered BLE protocol; MP3 32 kbps 16 kHz mono; no bonding, fixed challenge; ~50 KB/s)
- https://www.funkykit.com/reviews/accessory/umevo-note-plus-magnetic-ai-voice-recorder-review/ - FunkyKit review, 19 Nov 2025 (sample supplied by UMEVO)
- https://techbuzzireland.com/2025/12/14/umevo-note-plus-magnetic-ai-voice-recorder-review/ - TechBuzz Ireland review, 14 Dec 2025
- https://www.patnotebook.com/?p=14105 - Patnotebook hands-on, 14 May 2026 (affiliate links; English test via CALL mode)
- https://www.amazon.com/dp/B0FXWKHXS6 - Amazon.com listing Black (3.9 stars / 31 ratings; PLN 572.20 to Poland; GPT-5 and on-device AES claims; dimensions; user reviews), seen 2026-10-01
- https://www.amazon.com/dp/B0FXQK5B6P - Amazon.com listing Rose Gold (3.5 stars / 3 ratings; PLN 486.37 to Poland; 30 h claim; 'Starter Plan' wording), seen 2026-10-01
- https://www.amazon.de/s?k=UMEVO+Note+Plus and https://www.amazon.it/s?k=UMEVO+Note+Plus - no UMEVO listing when delivering to Poland, seen 2026-10-01
- https://allegro.pl/listing?string=umevo - one used 'Umevo Note LA518' at 390 PLN (Allegro Lokalnie), no new offers, seen 2026-10-01
- https://norfolkdailynews.com/online_features/press_releases/umevo-launches-note-plus-a-chatgpt-powered-ai-notetaker-featuring-mind-maps-and-custom-industry/article_fe449d36-0ae8-59cf-9d5d-9f4abdf34faf.html - press release 3 Mar 2026 (SOC 2/HIPAA/GDPR self-claim)
- https://natlawreview.com/press-releases/umevo-redefines-value-ai-hardware-1-year-free-unlimited-transcription-its-ai - press release 15 Mar 2026 (1-year unlimited, then 400 min + $0.59/120 min)
- https://natlawreview.com/press-releases/umevo-releases-note-plus-ai-voice-recorder-one-year-complimentary - press release 27 Apr 2026
- https://www.voiceaispace.com/tool/umevo - third-party directory (Denver; GDPR/HIPAA/SOC2/ISO 27001 claims, unverified)
- https://parse.gl/brands/umevo-ai - third-party brand page (compliance claims, low AI-search share)
- https://voicit.com/it/blog/risorse-umane/migliori-registratori-vocali/8652/ - competitor listicle (about EUR 120 indicative, Jun 2026)
- https://www.threads.com/@jorgelazaro.es/post/DRRXZpfCAVo - Spanish hands-on post (not read in full)

#### omitted as uncertain

- apps
- asr engine
- call recording method
- company stability
- encryption
- export formats
- free minutes steady state
- free tier quality and retention
- independent review consensus
- language count
- launch date
- maker and hq
- noisy room performance
- offline recording
- paid plans
- price
- processing location data residency
- promise durability
- raw audio export
- realtime transcription
- req no subscription
- req polish transcription
- req usb c port
- size weight
- speaker diarization
- three year tco
- training on user data
- transcript editing and vocabulary

## D. Screened in wave 3

### SwitchBot AI MindClip

**PASS tier 2** · Polish B · API/MCP partial (REST + webhooks + MCP, no audio) · 21 field(s) omitted as uncertain

#### requirements

**req usb c port**

pass. Native USB-C receptacle on the device body, used for charging only. Sources: (1) SwitchBot support: 'A USB-C to USB-C cable is included.' (2) SwitchBot support: 'The Type-C port is used for charging only' and it 'does not provide any data export interface'. (3) Spec sheet: 'Input: 5V 1A'. (4) Hands-on: Jetstream (JP, 2026-08-30) describes plugging the USB-C connector directly into the device. The author added a third-party magnetic USB-C adapter only to spare the port from wear. The cable is standard USB-C; no vendor-only cable warning was found. Data does NOT travel over the port: no mass storage, no USB audio. Transfers go over Bluetooth, the Wi-Fi hotspot (AP) or Wi-Fi cloud upload while charging.

#### identity

**basics**

SwitchBot AI MindClip (first generation; API device type 'AI MindClip', models W6902000/W6902003; colours Deep Space/Gray and Luna White). A clip-on AI voice recorder and note-taker sold as a 'second brain' for all-day capture, with cloud transcription, summaries, to-dos and Ask AI memory search.

**launch date**

Shown at CES 2026 (January) with 18 g and '100+ languages'. Launched in Japan 2026-08-19 at ¥19,980. Global launch at IFA Berlin on 2026-09-03 via SwitchBot's own stores. The iOS app first shipped 2026-06-30 and is now at v1.6 (2026-09-24). Firmware v2.0 (2026-09-22) 'improved recording quality'. A sibling 'AI PinNote' device is managed by the same app. No successor announced.

**form factor**

Clip-on wearable: an aluminium-alloy and ABS body with an integrated clip for a collar, lapel, bag or lanyard. Not card or MagSafe, and nothing attaches to a phone. Mightygadget lists 'clip-only wearing' (no wristband or lanyard included) as a con; Jetstream wrote a separate article on strap safety. Sweat- and splash-resistant; no IP rating published.

**availability eu poland**

Yes, from SwitchBot's official EU store (eu.switch-bot.com). It ships to Poland from a warehouse in Poland in 1–3 business days, free over €99. Warranty: 2 years per the product page, which is roughly in line with EU statutory rights. The seller entity in the store terms is SWITCHBOT INC (US). No listing was found on Amazon.pl/.de, Allegro, x-kom, Media Expert or Komputronik as of 2026-10-01. App UI is not in Polish: the iOS listing has EN, DE, FR, ES, IT, NL, JA, KO and ZH.

#### capture hardware

**call recording method**

No dedicated phone-call capture: no vibration/bone-conduction sensor, no Bluetooth call passthrough, no MagSafe mount. Calls are captured only as room audio, i.e. on speakerphone with the clip nearby. SwitchBot markets 'phone calls' as a use case (water-resistance FAQ) and added a 'Calls' summary template (JP, 2026-09-09), but the capture is acoustic only. iPhone and Android behave the same since nothing attaches to the phone. Recording can also be started from the app or a smartwatch.

**battery recording and standby**

Vendor-claimed, not independently tested: ~20 h continuous recording; ~14 h when recording while syncing to the phone over Bluetooth; standby up to 40 days. Charging ~1 h via USB-C, 5V 1A input, 270 mAh cell (mightygadget). It can record while charging, but recording, Wi-Fi transfer, firmware update and network setup are mutually exclusive states. Mightygadget did not run a battery test.

**storage**

64 GB onboard, which SwitchBot JP says holds ~5,000 hours of audio (vendor-claimed). That implies a ~28 kbps compressed on-device codec; this is an inference. Files are automatically deleted from the device once uploaded to the app and cloud.

**size weight**

50 × 29 × 18.5 mm; 16.8 g (official spec sheet). CES-era materials said 18 g.

**account free operation**

No. The device must be bound to a SwitchBot/AI MindClip account in the app, and the free monthly minutes exist only while it is bound. A lost device 'cannot be added or used' by others. With no USB data interface, audio on the device can only leave through the vendor's app or cloud. If SwitchBot withdraws the service or the EU market, untransferred recordings are effectively stranded on the device. Files already exported to the phone stay usable.

#### transcription and ai

**language count**

30 transcription languages per the official list, marketed as '30+'. Polish, Czech, Slovak, Hungarian, Romanian, Bulgarian and Croatian are among them. The CES-era '100+ languages' claim is superseded. Mixed-language transcription is officially claimed only for 'major languages such as Chinese, English, and Japanese'; PL+EN code-switching is untested.

**transcript editing and vocabulary**

In-app transcript editing arrived only in app v1.6 (2026-09-24); before that transcripts were read-only. The transcript is split into audio segments; tapping text plays that segment, which gives segment-level, not word-level, timestamps. Speakers can be named via voiceprints. A termbase/glossary (names, places, brands, jargon) is supported, plus 'Auto-Discover Terms (Beta)' that proposes frequent names and terms from the previous day. Search across recordings goes through Ask AI (vector search) and the file list. Mightygadget found that technical-term errors persisted despite the glossary ('RJ9' vs 'RG9').

**online meeting capture**

No desktop capture app, bot or dock: you place the clip next to the laptop speaker. The app can import external audio (.m4a/.aac, up to 8 h per file) for transcription, so a Meet/Teams/Zoom recording made elsewhere could be fed in. That spends the same minutes and gives no advantage over the buyer's existing Tactiq.

**realtime transcription**

No. Transcription runs only after upload; real-time transcription is officially 'under development'.

**on device processing**

None. Recording only on the device; transcription, summaries and Ask AI all run in the cloud (AWS storage plus third-party AI providers). Mightygadget lists 'no offline processing' as a con.

#### ecosystem

**apps**

Dedicated 'AI MindClip' app for iOS (v1.6, 2026-09-24) and Android, sharing the SwitchBot account system. An 'AI MindClip Web' version exists (QR-code login added in v1.6); there are 'no plans for a desktop version'. Feature parity between web and mobile is not documented. Very few store ratings so far (iOS US: 1, JP: 3).

**integrations**

Native: one-tap to-do sync to Apple Calendar, Apple Reminders, Google Calendar, Outlook and Yahoo calendars, plus the SwitchBot E-Ink Dashboard. Mightygadget found calendar integrations unavailable during its test. Slack: manual send of selected summaries (app v1.5, 2026-09-17); more services are promised. No native Notion, Google Drive, Obsidian, Zapier or Make. Automation goes through the SwitchBot OpenAPI, webhooks, CLI or MCP (see api_mcp_access). The vendor pitches it at Notion/Lark knowledge bases via scripts and names ChatGPT, Claude Code, Codex, OpenClaw and Hermes agents via its CLI.

**export formats**

Transcript: TXT, SRT, Markdown, DOCX, PDF. Summary: TXT, Markdown, DOCX, PDF. Audio: MP3 (default), WAV. All via share sheet or email. SwitchBot notes formats 'may vary depending on the released version'.

#### pricing

**paid plans**

Pro: 1,200 min per 30-day cycle (unused minutes expire) plus full AI summaries and Ask AI. US $15.99/month, $69.99/6 months or $99.99/year. UK £17.99/month or £99.99/year. China-gadgets quotes EU €17.99/month or €99.99/year. Unlimited (annual only): US/UK $239.99/£239.99; €249.99 per china-gadgets. No monthly cap but 24 h of audio per day and fair-use clauses. One-time 'transcription add-on packs' exist, price not public. Paid unlocks named by SwitchBot: more transcription quota, automatic upload to the cloud while charging, and automatic summaries. Plain transcription, Polish and export are not reported as paywalled beyond the 300-minute cap. Subscriptions are billed via App Store or Google Play and auto-renew.

**promise durability**

Very short track record: the 300 min/month free allowance dates from the Aug–Sep 2026 launch, about 6 weeks before this research, and has not yet been tested by any downgrade. Trial terms have already changed: 6-month Pro trial for Aug 19–Sep 23 buyers, 1-month from Sep 24, while the EU store page still says 3 months. The ToS words the free tier loosely ('may receive a certain amount of free transcription time each month') and lets SwitchBot set terms via the app store and subscription pages. If the vendor shuts down or exits the EU, the device still records locally. With no USB data port, audio cannot be retrieved without the app and cloud, and already-exported MP3/WAV files on the phone are the only durable copy.

#### privacy and compliance

**training on user data**

Not used for training, per SwitchBot ('All data must not be used for any model training'). The privacy policy says third-party AI providers process audio on SwitchBot's behalf and do not retain it. Opt-in or opt-out: not applicable (stated as never). Retention: kept until the user deletes it. Fewer than 20 files are deleted synchronously; larger batches are processed every 2 hours. Account deletion purges everything within 30 days.

**recording indicator consent**

A blinking LED shows active recording; the physical slide switch makes the state visible and tactile. No audible cue or consent prompt. The privacy policy puts the burden on the user, who must obtain 'sufficient authorization and express consent from all participants' and guardian consent for minors. The device is marketed for discreet all-day wear, so the LED is the only cue for other people.

#### verdict

**independent review consensus**

Thin: the device is ~6 weeks old globally. (1) Mightygadget (James Smythe, UK, 2026-09-03; the author states he works directly with brands and PR, so treat as vendor-adjacent): 90% score. Praised transcription accuracy, daily summaries and to-dos, USB-C charging plus Wi-Fi sync, and price. Criticised extra summaries consuming credits, incomplete integrations at test time, no offline processing and clip-only wearing. Found echo at distance and glossary misses on tech terms. (2) china-gadgets.de (Thommy, Sep 2026; supply status not disclosed): excellent build and 'simply brilliant' summaries, but the raw German transcript had absurd mishearings; subscription steep for heavy users. (3) Jetstream (JP blog, ongoing coverage with an affiliate coupon): practical notes on USB-C wear and update cadence; no accuracy testing. (4) Vendor-store customer reviews (EU, 5 reviews, unverified): split. One 3-star review calls it a 'promising idea, unfinished product' (standard allowances too small, Unlimited too expensive, recordings hard to get into an AI assistant, silence burns minutes); one 1-star says it does not work. No Verge, Wired, Tom's Guide or RTINGS-style tests found. No Polish-language test found.

**known issues**

Slow Bluetooth transfer for long files (vendor-acknowledged). Wi-Fi hotspot transfer stops when the phone screen turns off. Recording is blocked during Wi-Fi transfer and when the battery is low. Quota is charged on total duration including silence. Re-transcription and extra summary templates consume more minutes. Integrations and transcript editing were missing at launch (editing added v1.6, 2026-09-24). Calendar sync glitches have their own support article. Rapid app/firmware churn: v1.3–v1.6 between July and September, a v1.4.1 bug-fix release, and firmware v2.0 'improved recording quality'. Charging LED stays dark until the device is activated with the pairing button. Users worry about wear on the small USB-C port (Jetstream uses a magnetic adapter). German raw-transcript errors (china-gadgets). Firmware-update failure and connection troubleshooting articles exist. Support quality: no reports found either way.

**best for**

Best: solo voice notes and on-the-go capture (16.8 g clip, slide switch), and small in-person meetings within ~3 m. Weak: large workshop rooms (single near-field mic), phone calls (speakerphone only, no call sensor) and online calls (no desktop capture; Tactiq already covers this).

**pros cons**

Pros: (1) Native USB-C charging port, standard cable. (2) 16.8 g clip with a physical slide switch and 64 GB / ~20 h claimed. (3) Polish explicitly on the 30-language list; Qwen-family ASR supports Polish. (4) Official API, webhooks and local MCP server (transcript, speakers, to-dos) plus MP3/WAV export. (5) EU data stored in AWS Germany; no-training statement; ships from a Polish warehouse. Cons: (1) Only 300 free min/month, a quarter of the need. (2) USB-C is charge-only: no mass storage, and audio leaves only via the app, one file at a time; the API excludes audio. (3) No independent Polish evidence; app UI not in Polish. (4) Cloud-only, with Alibaba/OpenAI/Google sub-processors in undisclosed regions; device is useless without account and cloud. (5) Immature: ~6 weeks on sale, features still arriving, quota drains from silence and re-summaries.

**verdict for me**

Consider (low priority). Requirements: PASS tier 2. USB-C passes; free minutes fail tier 1; MP3/WAV export enables Whisper. Polish: vendor-listed only, untested, so plan on local Whisper as the real transcription path. Deciding reason: the official API and MCP server (with transcript-ready webhooks) fit the second-brain pipeline well. But with no USB data path, every hour of audio for Whisper must be exported by hand from the phone app. Tier-2 devices with USB mass storage do the Whisper role better.

**conflicting evidence**

(1) Microphones: single digital mic (mightygadget, DIME/JP launch copy) vs 'Dual-Mikrofone' (china-gadgets.de). (2) ASR engine: 'Qwen-Audio-ASR' (IFA press release, Android Headlines) vs 'Fun-ASR' (china-gadgets.de). (3) Charge-and-sync: mightygadget presents automatic Wi-Fi sync while charging as standard, while SwitchBot's FAQ lists 'automatic upload to the cloud while charging' among paid-plan unlocks. (4) Pro trial: '3-Month Pro Trial' (EU store page, 2026-10-01) vs 6-month for Aug 19–Sep 23 buyers and 1-month from Sep 24 (support, 2026-09-29) vs 'at least 1 month' (support, 2026-09-25). (5) Device price: €99.99 (china-gadgets) vs €119.99 (EU store, 2026-10-01). (6) Subscription prices: EU €17.99/month, €249.99 Unlimited (china-gadgets) vs US $15.99/month, $239.99 Unlimited (US store copy) vs UK £17.99/month, £239.99 (mightygadget). (7) Weight and languages: 18 g and '100+ languages' (CES 2026, heyupnow) vs 16.8 g and 30 languages (launch). (8) Data location: AWS Germany for EU (support) vs Alibaba Cloud RAG/ADBSQL for Ask AI (press release), region undisclosed; the privacy FAQ also says app data is 'stored only locally on your phone' while describing personal cloud storage. (9) Encryption: 'end-to-end encryption' (press release) vs third-party cloud transcription, which cannot be strictly E2E.

#### other info

**sources**

- **url**: https://eu.switch-bot.com/products/switchbot-ai-mindclip | **note**: Official EU store (Shopify data seen 2026-10-01): EUR 119.99, specs (50×29×18.5 mm, 16.8 g, 5V 1A, Wi-Fi + BT 4.2), 30+ languages, 300 free minutes, 3-month Pro trial copy, US plan prices, EN 18031/ISO 27001/27701, OpenAPI CLI, 2-year warranty, 5 customer reviews.
- **url**: https://eu.switch-bot.com/policies/shipping-policy | **note**: EU store ships from a warehouse in Poland, 1–3 business days to PL, free over €99.
- **url**: https://eu.switch-bot.com/policies/terms-of-service | **note**: EU store contract with SWITCHBOT INC, Delaware law (2024-12-10).
- **url**: https://support.switch-bot.com/hc/en-us/articles/41566332970903-What-Languages-Does-AI-MindClip-Support | **note**: Official 30-language list including Polish.
- **url**: https://support.switch-bot.com/hc/en-us/articles/41566333398167-Can-SwitchBot-AI-MindClip-Handle-Meetings-with-Multiple-Languages | **note**: Mixed-language claimed only for major languages such as Chinese, English, Japanese.
- **url**: https://support.switch-bot.com/hc/en-us/articles/41566290786071-What-Accessories-Are-Included-with-SwitchBot-AI-MindClip | **note**: USB-C to USB-C cable included.
- **url**: https://support.switch-bot.com/hc/en-us/articles/41566176450455-Can-Someone-Else-Use-SwitchBot-AI-MindClip-or-Export-Data-If-It-Is-Lost | **note**: Type-C port is for charging only, no data export interface.
- **url**: https://support.switch-bot.com/hc/en-us/articles/41566199553047-How-Does-MindClip-Protect-User-Privacy-and-Data-Security | **note**: Data layers, AWS cloud, Type-C charge-only, no model training, certifications.
- **url**: https://support.switch-bot.com/hc/en-us/articles/41566296503959-What-Are-the-Subscription-Service-and-Free-Allowance-for-SwitchBot-AI-MindClip | **note**: 300 free min/month; paid plans unlock unlimited quota, charging cloud upload, automatic summaries.
- **url**: https://support.switch-bot.com/hc/en-us/articles/43385323161879-What-Is-the-Consumption-Order-for-Subscription-Quota-Free-Quota-and-Add-On-Time-Packages | **note**: 300 min each month after binding; quota order free → plan → add-on.
- **url**: https://support.switch-bot.com/hc/en-us/articles/42884023364375-What-Are-the-Free-Trial-and-Auto-Renewal-Rules-for-the-Pro-Plan | **note**: 6-month trial for Aug 19–Sep 23 buyers, monthly from Sep 24; auto-renewal.
- **url**: https://support.switch-bot.com/hc/en-us/articles/42883889220631-How-Are-Pro-Plan-Benefits-Issued-and-Quotas-Reset | **note**: Pro: 1,200 min per 30 days, unused minutes cleared.
- **url**: https://support.switch-bot.com/hc/en-us/articles/43725141288727-What-Are-the-Limitations-of-the-Unlimited-Plan | **note**: Unlimited capped at 24 h/day, fair-use clauses.
- **url**: https://support.switch-bot.com/hc/en-us/articles/43410226257687 | **note**: Quota consumed on total recording duration including silence.
- **url**: https://support.switch-bot.com/hc/en-us/articles/42628752896663-What-Export-Formats-Are-Supported-for-Recording-Files | **note**: Audio MP3/WAV; transcript TXT/SRT/MD/DOCX/PDF; summary TXT/MD/DOCX/PDF.
- **url**: https://support.switch-bot.com/hc/en-us/articles/41566333089559-What-Transfer-Methods-Does-SwitchBot-AI-MindClip-Support | **note**: Bluetooth, Wi-Fi hotspot (AP), cloud upload while charging.
- **url**: https://support.switch-bot.com/hc/en-us/articles/41566310030231-What-Are-the-Battery-Life-and-Charging-Time-of-SwitchBot-AI-MindClip | **note**: ~20 h recording, 40 days standby, ~1 h charge (vendor).
- **url**: https://support.switch-bot.com/hc/en-us/articles/43385626325399 | **note**: AWS regions: EU users in Germany, Asia in Singapore, NA in US.
- **url**: https://support.switch-bot.com/hc/en-us/articles/42855829148823-AI-MindClip-OpenAPI-Introduction | **note**: OpenAPI is text-only (no audio); token via hidden Developer Options; consumes quota; links @switchbot/openapi-cli.
- **url**: https://support.switch-bot.com/hc/en-us/articles/41566306263447-Does-SwitchBot-AI-MindClip-Support-Real-Time-Transcription | **note**: Real-time transcription under development.
- **url**: https://github.com/OpenWonderLabs/SwitchBotAPI/blob/main/devices/others/ai-mindclip.md | **note**: Official API docs: /v1.1/mindclip/* endpoints, summary fields (transcribeResult, speakers, aiAtmoResult), webhook events (chargeUploadCompleted, transcription status).
- **url**: https://www.npmjs.com/package/@switchbot/openapi-cli | **note**: Official CLI with mindclip subcommands and 'mcp serve' (MIT, v3.8.1, 2026-07-28).
- **url**: https://github.com/OpenWonderLabs/switchbot-openapi-cli | **note**: CLI repo, 133 stars, last push 2026-08-18; docs/agent-guide.md lists MCP tools mindclip_recordings, mindclip_list_todos, mindclip_recall.
- **url**: https://www.switch-bot.com/pages/switchbot-aimindclip-subscription-terms-of-service | **note**: Subscription ToS: free quota 'may' be granted while a device is bound; add-on packs; quota expiry; Unlimited 24 h/day cap.
- **url**: https://www.switch-bot.com/pages/ai-mindclip-privacy-policy | **note**: Privacy policy (2026-04-25): third-party AI providers process audio, SCCs/TIA, DPO privacy@switch-bot.com, user must obtain participants' consent.
- **url**: https://mightygadget.com/switchbot-ai-mindclip-review-ai-note-taking-clip/ | **note**: Hands-on review (2026-09-03, PR-adjacent): 90%, single mic, 270 mAh, IT-helpdesk test, extra summaries cost 10 min, UK prices.
- **url**: https://www.china-gadgets.de/?p=433331 | **note**: German hands-on (Sep 2026): €99.99, dual-mic claim, Fun-ASR, German transcription errors, Wi-Fi ~10× faster than BT, EU plan prices.
- **url**: https://jetstream.blog/2026/08/30/improve-switchbot-ai-mindclip-charging-magnetic-adapter/ | **note**: JP hands-on: USB-C plugged directly into the device; magnetic adapter to protect the port.
- **url**: https://jetstream.blog/2026/08/19/switchbot-ai-mindclip/ | **note**: JP launch 2026-08-19: ¥19,980, slide switch, 64 GB ≈ 5,000 h, Claude among selectable summary models.
- **url**: https://jetstream.blog/2026/09/26/switchbot-ai-mindclip-app-v1-6-release/ | **note**: App v1.6: transcript editing, auto-discover terms, web QR login.
- **url**: https://jetstream.blog/2026/09/17/switchbot-ai-mindclip-app-v1-5-release/ | **note**: App v1.5: Slack integration (manual summary send).
- **url**: https://www.webull.com/news/15514801744962560 | **note**: IFA 2026 press release (2026-09-03): Qwen-Audio-ASR, Alibaba Cloud RAG/ADBSQL, ChatGPT/Gemini, E2E encryption claim, prices.
- **url**: https://www.androidheadlines.com/?p=1304141 | **note**: Launch news (2026-09-03): plan prices, indicator lights, Qwen-Audio-ASR.
- **url**: https://dime.jp/genre/2149431/ | **note**: JP launch article (2026-09-02): single built-in digital microphone, slide switch, USB Type-C.
- **url**: https://kingy.ai/news/can-switchbots-ai-mindclip-change-how-we-take-notes-a-ces-2026-deep-dive/ | **note**: CES 2026 announcement coverage: 18 g, 100+ languages (superseded).
- **url**: https://briefglance.com/articles/switchbots-ai-mindclip-a-perfect-memory-at-what-cost | **note**: Aggregation/analysis: LLM sub-processor contracts a 'black box'.
- **url**: https://github.com/QwenLM/Qwen3-ASR | **note**: Qwen3-ASR 30-language table includes Polish; Polish only in aggregated MLS/Fleurs results.
- **url**: https://huggingface.co/aoiandroid/Fun-ASR-MLT-Nano-2512 | **note**: Fun-ASR-MLT 31-language list includes Polish.
- **url**: https://huggingface.co/spaces/amu-cai/pl-asr-leaderboard | **note**: AMU BIGOS Polish ASR leaderboard, last updated Dec 2024, no Qwen3-ASR/Fun-ASR entry.
- **url**: https://apps.apple.com/pl/app/ai-mindclip/id6760324554 | **note**: iOS app (wonderlabs, Incorporated), v1.6 2026-09-24; UI languages EN/DE/FR/ES/IT/NL/JA/KO/ZH, no Polish.
- **url**: https://www.cbinsights.com/company/switchbot/financials | **note**: Reported IPO 2025-12-30 (~US$210M); secondary source.
- **url**: https://thebambooworks.com/switchbot-taps-market-frenzy-for-robotic-stocks/ | **note**: SwitchBot Hong Kong IPO and revenue (RMB 609.9M in 2024); secondary source.

#### omitted as uncertain

- ai act emotion features
- api mcp access
- asr engine
- certifications
- company stability
- display and controls
- encryption
- free minutes steady state
- free tier quality and retention
- maker and hq
- microphones
- noisy room performance
- offline recording
- price
- processing location data residency
- raw audio export
- req no subscription
- req polish transcription
- requirements verdict
- speaker diarization
- three year tco

### Vibe Dot

**PASS tier 2 (weak; US-only sale)** · Polish C · API/MCP partial (MCP beta, paid) · 27 field(s) omitted as uncertain

#### requirements

**requirements verdict**

PASS (tier 2), provisional and weak. R2 passes on the native USB-C port (vendor help center). R3 reaches only tier 2: 300 free min/month vs 1,200 needed, with per-file MP3 export from the Vibe AI web app as the Whisper path (not mass storage, and Starter export is unconfirmed). R1 is UNKNOWN, with only a generic '90+ languages' claim and no Polish test.

#### identity

**basics**

Vibe Dot, first generation, by Vibe Inc. (vibe.us), the maker of the Vibe smart whiteboard and Vibe Bot. It is a thin, coin- or puck-shaped AI voice recorder with 5 mics, positioned as a 'wearable AI device' that feeds the Vibe AI 'contextual workspace' (transcripts, summaries, cross-meeting memory, agent actions via MCP). It is aimed at individual professionals and teams rather than consumers.

**company stability**

Medium. Vibe Inc. is an established hardware maker (founded 2017; smart whiteboards since about 2019; Vibe Bot launched at CES 2026). It claims '40,000+' to '50,000+' customer organizations (vendor, unverified) and is VC-backed by HongShan/Sequoia China (2021 round, amount unconfirmed). No recent funding round or revenue disclosure was found. The Dot is a new category bet (May 2026). Risks: (1) frequent plan churn: legacy Vibe AI plans were retired in mid-July 2026, and Pro launched at $19/month in May 2026 (SiliconANGLE) before being repriced to $9/seat/month (annual); (2) the Dot depends entirely on the Vibe cloud and account (see account_free_operation); (3) the iOS app was still labelled 'Beta' in the help center and has one App Store rating. If Vibe drops the Dot or the AI service, there is no offline escape hatch (cf. Limitless, Humane).

#### capture hardware

**microphones**

Vendor-claimed: a '5-mic system' made of 4 MEMS air microphones plus 1 bone-conduction VPU sensor 'to isolate your voice from heavy background noise'. Claimed pickup range is up to 16 ft (about 5 m). Voice Activity Detection drives the auto-capture modes. No beamforming or noise-reduction details are published. Tested: nothing. No independent audio test was found.

**battery recording and standby**

Vendor-claimed: '30+ hours' of continuous recording and a full charge in about 90 minutes over USB-C. Standby time is not published. LED shows green breathing while charging and solid green when full. Exact battery level is visible only in the app. Quick Transfer (Wi-Fi) works only above 20% battery. Tested: none.

**display and controls**

No screen. One button plus a multi-colour LED plus haptics. Double-tap starts or stops recording ('a short vibration when recording starts, and two short vibrations when recording ends'). Single tap during recording marks a highlight (LED 'Red breath once'). Hold-and-release records a 'Spark' voice memo. LED states: red solid = recording; white breathing = pairing; white fast flashing = firmware update; green breathing or solid = charging or full; yellow flashing x3 on press = low battery. Haptic feedback makes one-handed, eyes-free start and stop practical. Auto modes: Standby (voice-activated start and stop after Voice ID setup) and Scheduled recording (time windows; on Android since app 1.6.1, Sep 2026).

**offline recording**

Yes. 'Vibe Dot records whether connected to the app or not' and syncs later. Sync is automatic over Bluetooth (about 50 KB/s typical) or via 'Quick Transfer' over a Wi-Fi network created by the Dot (about 1.2 MB/s, only above 20% battery, and interrupted if a new recording starts). There is no USB sync. Each recording becomes a separate meeting in the Vibe AI app and cloud. App 1.6.1 (Sep 2026) improved Wi-Fi transfer progress, and 1.6.2 improved 'transfer and processing of long recordings'.

**account free operation**

No. Setup requires signing in to the Vibe app, and the Dot 'will be added as a device in the workspace that your account belongs to' via Bluetooth pairing. After pairing it records offline, but audio leaves the device only through the Vibe app (BLE or Wi-Fi), and the on-device storage is encrypted against 'unauthorized' computers. If Vibe shuts down, discontinues the Dot or the AI service, or the account is lost, there is no documented way to get recordings off the device. Already-synced meetings are exportable only while the web app runs. Same failure mode as Limitless.

#### transcription and ai

**realtime transcription**

No live transcript for Dot recordings. Audio is recorded locally, synced after the recording (Bluetooth or Wi-Fi), then transcribed and summarised in the cloud. Launch press language about capturing 'in real time' refers to recording, not live text.

**on device processing**

None for transcription or AI. On the device: Voice Activity Detection for auto-capture, Voice ID matching for Standby mode, and hardware encryption. All ASR and AI runs in Vibe's AWS (us-west-2) cloud via OpenAI.

#### ecosystem

**export formats**

From the web-app export dialog code (2026-10-01). Summary: PDF, DOCX, MD. Transcript: PDF, DOCX, SRT. Audio: MP3. Video: MP4 (Vibe Bot meetings). Sharing links with Restricted / workspace / 'Anyone with link' levels, and emailed summaries. No plain TXT transcript export (SRT is the nearest plain-text option).

#### pricing

**promise durability**

Short and unstable. The Dot launched in May 2026 and its current free terms date from the mid-July 2026 plan migration ('retiring the legacy Vibe AI plans'), so they have held for about 2.5 months. Pro pricing already moved from $19/month at launch to $9/seat/month (annual). The Terms (21 Jan 2026) let Vibe change subscription prices with 30 days' notice and suspend or terminate access in listed cases, and state that 'Upon termination, your right to use the Services stops'. No data-export-on-termination clause was found. If Vibe shuts down or drops the Dot: no transcription (cloud-only), no documented way to read the encrypted device storage, and no mass-storage fallback. Synced audio is exportable only while ai.vibe.us is up.

#### privacy and compliance

**encryption**

Vendor-claimed: a dedicated hardware encryption chip on the device (TPM 2.0, FIPS 140-3) so storage is unreadable on unauthorized computers. In transit and at rest: 'SSL v2 and AES-256, alongside AWS KMS' (security page; 'SSL v2' is presumably a typo for TLS). Server-side AI processing needs plaintext, so there is no end-to-end encryption.

**recording indicator consent**

Solid red LED while recording, plus haptics for the wearer. No audible tone or consent prompt. Concern: Standby mode auto-starts recording when the owner's voice is detected, and Scheduled mode records within time windows, so recordings can start without a deliberate action. The LED is the only signal to others. The Terms put the duty on the user to 'clearly inform all participants when recording, transcription, or other AI features are active' and 'obtain all necessary consents'.

**ai act emotion features**

None found. No voice emotion or sentiment scoring is documented for Vibe AI. Summaries, action items and memory only.

#### verdict

**independent review consensus**

None exists. No hands-on review by The Verge, Wired, Tom's Guide, Engadget, ZDNet, CNET, TechRadar, YouTube or Reddit was found as of 2026-10-01. Coverage is launch-day press: SiliconANGLE (7 May 2026, news based on the vendor briefing), AI Journal (press-release style, contributor), Quantilus (overview, no testing) and Dupple (affiliate disclosure; reviewed the Vibe platform in May 2026 while the Dot was 'still pre-order'). The Red Dot Product Design 2026 award judges design, not recording or transcription. Everything else is Vibe's own blog: dozens of 'Vibe Dot vs X' and 'best wearable AI recorders' posts that rank the Dot first. These are vendor marketing and should be discounted entirely. The App Store has one rating.

**noisy room performance**

No tested evidence. The vendor claims 16 ft (about 5 m) range and voice isolation through the bone-conduction mic. No conference-room, café or distance test exists.

**known issues**

(1) A connectivity bug in Aug 2026 required a USB-C reboot via the vendor web tool and firmware 0.0.0.38 (help center, 27 Aug 2026). (2) Slow Bluetooth transfer (about 50 KB/s); Wi-Fi Quick Transfer needs more than 20% battery and is interrupted by a new recording. (3) The iOS app is labelled Beta, and the App Store has one rating. Release notes keep fixing 'recording stability' and long-recording transfer. (4) Plan and pricing churn within months of launch. (5) Unknown support quality, and no EU support channel (support@vibe.us). No battery-degradation or bricking reports, given the product is about 3 months in market.

**best for**

On paper: in-person meetings and solo voice notes. It has Spark hold-to-talk memos, double-tap recording, auto-capture by voice or schedule, a clip or desk mount and a 30+ h battery. Phone calls: possible via the MagSafe case and VPU, untested. Online calls: only 'next to the laptop', and redundant with Tactiq. Poor fit for this buyer overall: Polish is unverified, it is not sold in the EU, and the data is US-only.

**pros cons**

Pros: (1) Native USB-C port on the device (passes R2). (2) Very thin wearable with three carry modes and haptic one-button control, plus voice- and schedule-triggered auto-capture. (3) Official hosted MCP server with read-only transcript, summary and memo tools, OAuth or PAT (but Pro/Max). (4) Transcripts kept permanently on all plans, with MP3 audio export and SRT/DOCX/PDF transcripts. (5) Established hardware maker with an enterprise security posture (claims). Cons: (1) Only 300 free min/month, no one-time packs yet, so it fails R3 tier 1. (2) No Polish evidence and no published language list. (3) US-only sale and US-only processing, with no GDPR section, SCCs, DPA or EU representative. (4) No mass storage, encrypted device storage and account lock-in, so it is a brick if Vibe exits. (5) Zero independent reviews; compliance claims (SOC 2, FIPS) unverified.

**verdict for me**

SKIP. Requirements: technically PASS tier 2. R2 passes on the native USB-C port; R3 is tier 2 only (300 free min/month, per-file MP3 export through the Vibe cloud); R1 is unknown. Polish quality: no evidence at all, only a generic '90+ languages' claim, though the probable OpenAI engine handles Polish well. Deciding reason: it cannot be bought in Poland or the EU, and every recording must transit a US-only cloud with no GDPR framework (no SCCs, DPA or EU representative) before you can even export the audio for Whisper. Devices with mass-storage export (Pocket, BOYA Notra) reach the same tier 2 without that.

**conflicting evidence**

(1) SOC 2 type: the Step-2 note says 'SOC 2 Type II'; the vendor says only 'SOC 2'; the 'SOC 2 Type 2' press item belongs to Vibe.co (unrelated). (2) Language count: '90+' (pricing page) vs 'over 100' (Vibe Dot vs Plaud blog, Jul 2026) vs 'nearly 200' (Vibe Dot vs HiDock blog, Aug 2026). (3) Phone calls: the Step-2 note 'not built for phone calls' vs the help center 'Magnetic Case ... Recommended for recording phone calls'. (4) Starter retention: blogs and third parties say '7-day retention', while the pricing page says transcripts and summaries are 'stored permanently on every plan' and 7 days applies to AI memory only. (5) Speaker ID on free: pricing page 'Speaker separation & labels' on all plans vs the Vibe Dot vs HiDock blog 'No' on free. (6) Custom vocabulary limits: pricing page 5/200/unlimited vs web-app code 3/20/100. (7) Pro price: $19/month at launch (SiliconANGLE, May 2026) vs $9/seat/month billed annually now. (8) AI stack: the product FAQ cites Claude, Codex and OpenClaw, while the privacy policy lists only OpenAI as AI sub-processor. (9) MCP plan: the pricing page puts MCP on Pro/Max; the help article and web settings show no plan requirement. (10) 'No subscription' framing: the vendor says core features are free, but the 300-minute cap makes 20 h/month impossible without Pro.

#### other info

**item**

- **id**: vibe-dot
- **name**: Vibe Dot
- **group**: screen
- **wave**: 3
- **researched**: 2026-10-01
- **screen first result**: Not knocked out by the screen. R2 passes: the vendor help center refers to 'Dot's USB-C port' and the box contains a USB-C charging cable. R3 does not clearly fail: 300 free min/month misses tier 1, but MP3 audio export from the Vibe AI web app gives a tier-2 path. So the full field set was researched. Hands-on evidence is thin, though. No independent review of the Dot was found. Nearly every spec comes from Vibe's own product page, help center, blog and web-app code.
- **step2 corrections**: (1) 'Claims SOC 2 Type II' is not supported. Vibe Inc. (vibe.us) only says 'SOC 2', with no type stated, and publishes no report or trust portal. The 'first SOC 2 Type 2 audit' press item that search engines return belongs to Vibe.co, an unrelated connected-TV ad company. That looks like a name conflation. (2) 'Not built for phone calls' conflicts with the vendor's help center, which calls the Magnetic Case 'Recommended for recording phone calls'. No test exists either way. (3) Free Starter limit resolved: 300 min/seat/month, reset monthly, no rollover. Pro is 1,200 min, Max is unlimited. (4) Charging interface resolved: native USB-C port on the device. (5) New: Vibe ships only within the United States, and MCP access is listed for Pro/Max only on the pricing page.

**sources**

- https://vibe.us/products/vibe-dot/ - official product page: $199 (list $249), box contents incl. 'USB-C charging cable', 90-min charge, 30+ h, 64 GB, 5 mics, 0.83 oz / 0.17 in, FAQ (encryption chip, certifications, Claude/Codex/OpenClaw, subscription), seen 2026-10-01
- https://vibe.us/vibe-ai/pricing/ - Vibe AI pricing: Starter 300 min, Pro $9/seat/mo annual 1,200 min, Max $29 unlimited; '90+' languages; transcripts stored permanently; MCP on Pro/Max; vocabulary 5/200/unlimited
- https://help.vibe.us/en/articles/15956165-different-ways-to-carry-vibe-dot - help center: 'align the dust plug with Dot's USB-C port'; Magnetic Case recommended for phone calls; Clip Case; desk
- https://help.vibe.us/en/articles/14780124-set-up-your-vibe-dot-for-the-first-time - setup: sign-in and workspace pairing required, charging steps
- https://help.vibe.us/en/articles/14803554-how-to-use-vibe-dot-to-record - recording modes (Spark, double-tap, Standby, Scheduled), offline recording
- https://help.vibe.us/en/articles/15028333-understand-the-button-and-light-indicators-for-vibe-dot - button actions and LED states
- https://help.vibe.us/en/articles/14816725-how-to-speed-up-file-transfer-for-vibe-dot - Bluetooth ~50 KB/s vs Wi-Fi Quick Transfer ~1.2 MB/s, >20% battery
- https://help.vibe.us/en/articles/16654805-how-to-fix-vibe-dot-connectivity-issues - Aug 2026 connectivity fix: USB-C reboot tool, firmware 0.0.0.38
- https://rebootyourdot.vercel.app/ - vendor-linked USB restart utility (Chrome/Edge, device over USB)
- https://help.vibe.us/en/articles/15654234-how-transcription-minutes-and-vibe-ai-credits-work - minutes per plan/seat, monthly reset, no rollover, recording still uploaded when out of minutes, top-up 'coming soon'
- https://help.vibe.us/en/articles/15500753-vibe-ai-plan-migration-what-s-changing - mid-July 2026 plan migration, legacy plans retired
- https://help.vibe.us/en/articles/14865506-connect-vibe-to-your-ai-agent - official MCP server mcp.vibe.us/mcp, OAuth or PAT, 10 read-only tools
- https://help.vibe.us/en/articles/13166101-vibe-ai-meeting-user-guide - export: transcript PDF/DOCX/SRT, 'Audio .mp3 only', sharing levels
- https://help.vibe.us/en/articles/13175746-vibe-ai-customization-and-settings - default transcript language English, custom vocabulary
- https://help.vibe.us/en/articles/15941943-vibe-ai-web-1-5-0 - 15 Jul 2026: Vibe Dot support, MCP via PAT, new plans, export formats
- https://help.vibe.us/en/articles/17008233-vibe-ai-1-6-1 - 18 Sep 2026: Android scheduled recording, Wi-Fi transfer visibility
- https://ai.vibe.us (JS bundles /assets/index-CQIMQk3A.js and /assets/SettingPage-xOpCUkRx.js, read 2026-10-01) - export dialog formats (MP3/MP4/PDF/DOCX/MD/SRT), summary-language options EN/ZH/ES, PAT 'Beta', vocabulary limits 3/20/100
- https://vibe.us/privacy/ - privacy policy updated 21 Jan 2026: Vibe Inc. Bellevue WA, AWS us-west-2/us-east-1, OpenAI sole AI sub-processor, no training of third-party models, retention
- https://vibe.us/terms-of-service/ - Terms updated 21 Jan 2026: Washington law, price changes with 30 days' notice, user consent duty, termination
- https://vibe.us/security/?from=nav - security page: AWS, AES-256/KMS, 2022 web-app security audit report only
- https://vibe.us/shipping/ - 'The Vibe Store exclusively sells and ships items within the United States'
- https://vibe.us/llms.txt - founded 2017 in Seattle, plan summary
- https://vibe.us/ca/blog/we-are-vibe - 2019 origin story: offices Seattle, Shanghai, Hangzhou, Shenzhen
- https://siliconangle.com/2026/05/07/vibe-launches-dot-wearable-ai-device-capturing-real-world-workplace-conversations/ - launch news 7 May 2026, $199 pre-order, Pro $19/month at launch, CEO Charles Yang
- https://aijourn.com/vibes-new-199-dot-wants-to-turn-your-magsafe-into-an-agentic-powerhouse/ - press-release-style launch article (HongShan backing, 16 ft range)
- https://quantilus.com/article/ai-powered-wearables-are-turning-office-talk-into-action/ - overview article, no testing
- https://dupple.com/reviews/vibe - Vibe platform review (affiliate disclosure), Dot 'still pre-order' in May 2026
- https://techcrunch.com/?p=3080194 - TechCrunch Jan 2026: Vibe Bot at CES, Vibe backed by HSG (ex-Sequoia China)
- https://www.dealstreetasia.com/?p=254762 - Aug 2021: China Growth Capital and Sequoia China back Vibe Inc (paywalled)
- https://www.red-dot.org/project/vibe-dot-89647 - Red Dot Product Design 2026, Vibe Inc., Bellevue
- https://apps.apple.com/us/app/id6751564840 - iOS app 'Vibe AI: Notes & Memory', Vibe Inc. (U.S.), v1.6.2, EN only; also listed in PL and DE storefronts (iTunes lookup 2026-10-01)
- https://vibe.us/blog/vibe-dot-vs-plaud/ - vendor blog (Jul 2026): 'over 100' languages, Dot lacks ISO 27001/GDPR in its own table
- https://vibe.us/blog/vibe-dot-vs-hidock/ - vendor blog (Aug 2026): 'nearly 200 languages', speaker ID 'No' on free
- https://vibe.us/blog/ai-tool-remembers-past-meetings/ - vendor blog (Sep 2026): specs and plan summary
- https://www.mercury.vibe.co/blog/whats-new/vibe-completes-its-first-soc-2-type-2-audit - SOC 2 Type 2 news from Vibe.co, an UNRELATED company (source of likely conflation)
- https://huggingface.co/blog/michaljunczyk/introducing-polish-asr-leaderboard - AMU Polish ASR leaderboard (BIGOS/PELCRA; Whisper large among strongest)

#### omitted as uncertain

- api mcp access
- apps
- asr engine
- availability eu poland
- call recording method
- certifications
- form factor
- free minutes steady state
- free tier quality and retention
- integrations
- language count
- launch date
- maker and hq
- online meeting capture
- paid plans
- price
- processing location data residency
- raw audio export
- req no subscription
- req polish transcription
- req usb c port
- size weight
- speaker diarization
- storage
- three year tco
- training on user data
- transcript editing and vocabulary

### iFLYTEK AI Recorder P1

**FAIL (no Polish)** · Polish fail · API/MCP none · 15 field(s) omitted as uncertain

#### requirements

**req usb c port**

pass. The device body has a native USB-C receptacle. BGR hands-on (24 Aug 2026): 'On the bottom is a USB-C port for charging'. Real Sound JP: 'USB-C端子も内蔵' (USB-C port built in). The box contains a short USB-C-to-USB-A cable plus a separate magnetic clip (Notebookcheck). Magnetism is used only for the clip and the back attachment, not for charging; there is no cradle and no Qi (BGR: wireless charging not supported). The cable is a standard USB-C cable; no vendor-only cable warning was found. Pass-through charging means it keeps recording while plugged in. Data over the same port is not documented. The vendor's own recorder FAQ says 'the P1 and P1 Pro are designed around app and cloud management, while the Smart Recorder and S6 also support direct wired file transfer'. The product page also lists 'USB protection' as a privacy feature.

**free minutes steady state**

300 min/month with a registered P1 (vendor, plus three reviews); 30 min/month for the app alone. Both are 0 usable minutes for Polish, because Polish is not supported. Against the 1,200 needed, that is 25% even for a supported language. Promotions: purchases from 8 Jun to 8 Jul 2026 (press release: before 11 Jul) came with a 3-month Deepting Pro trial at 'up to 2100 minutes per month'; Notebookcheck says the 3 months start at pairing. Per-file length cap: none found. Non-subscription top-ups (one-time minute packs or pay-as-you-go): none found; the only upsell is the Deepting Pro subscription.

**free tier quality and retention**

No evidence of a weaker model on the free tier. The App Store says the free Basic plan includes every feature, and a third-party review says the same: real-time transcription, speaker ID, translation and exports. Minutes are the only gate found. Speaker identification is included free. Retention: 'unlimited cloud storage' (product page) and 1 GB 'permanent cloud space and additional bonus cloud space' (press release, 15 Jun 2026) conflict. The privacy policy keeps data for as long as the registration exists, or until the user deletes it. No auto-expiry of free transcripts was found. None of this matters for Polish, which is not transcribed.

#### identity

**basics**

iFLYTEK AI Recorder P1 (first generation; sold in Japan as 'iFLYTEK AIボイスレコーダー P1'). A 22.5 g wearable AI voice recorder (clip, pendant or wristband) with dual mics, a 0.56-inch status screen, 64 GB of storage and a 25 h battery. It is paired with iFLYTEK's cloud app Deepting, which handles transcription (11 languages), translation and ChatGPT-based summaries. Positioning: a cheap, ultra-light 'smart voice recorder for the younger generation' (press release). The P1 Pro handheld sibling is out of scope.

**launch date**

Official store sales from 8 Jun 2026 (press release); Japan retail 12 Jun 2026 (PR Times); global press release 15 Jun 2026. Current and first generation; no successor announced. The P1 Pro (handheld) launched alongside.

**form factor**

Small wearable puck (about 35 x 12 x 43 mm) with a magnetic back. Included: a magnetic clip for collar or pocket (the fabric can be sandwiched between clip and body). Optional, sold separately: a wristband (worn like a watch) and a neck lanyard (pendant). No MagSafe or phone attachment for call recording.

**price**

Official store, seen 2026-10-01: USD 119.00 (MSRP; bundles USD 131.90 with lanyard, 133.90 with wristband, 146.80 with both); EUR 124.37 and PLN 549.94 as the store's currency-converted prices. Launch promo (Jun 2026): USD 109. Notebookcheck (Jul 2026): store USD 142.80 incl. extras, Amazon.com USD 119 + 10.16 shipping, AliExpress USD 120.19; Notebookcheck DE quoted EUR 125.27 + EUR 13.09 shipping insurance. Japan: JPY 19,800 (promo 17,800 to 11 Jul 2026).

#### capture hardware

**microphones**

2 mics: one directional and one omnidirectional, with 360-degree pickup and switchable omni/directional modes. Clear-recording range 'up to 5 m' (vendor-claimed). BGR (tested): clear when close, but 'towards the edge of that 5 meters ... starts to struggle at accurate transcription, especially if the person speaking is relatively quiet'. MEMS type and beamforming not specified.

**battery recording and standby**

300 mAh; up to 25 h continuous recording and 85 days standby; 5 min charge gives ~2 h recording; full charge ~1.5 h over USB-C; pass-through charging (all vendor-claimed). BGR 'never really worried' about battery over its test period; no timed rundown test.

**storage**

64 GB onboard, about 700 h of audio (vendor). Plus cloud storage: 'unlimited' (product page) vs '1GB permanent cloud space' (press release).

**display and controls**

0.56-inch screen that shows an emoji when ready and a mic icon while recording (or a clock or custom image). Record button on top; power/multifunction button with a status LED on the left edge. One press starts or stops recording, so a blind one-handed start is feasible. Recording can also be started from the app. Highlight markers come via the app ('Dynamic Highlighting'). Indicator lights can be switched off.

**size weight**

22.5 g (vendor; Notebookcheck ~22 g); about 35 x 12 x 43 mm (W x D x H, Notebookcheck).

**offline recording**

Yes. It records standalone with no phone or internet (BGR: 'works as a conventional offline recorder without the companion app'). Sync is to the Deepting app over Wi-Fi (vendor: a 1 h file in ~30 s; GameRevolution measured ~1 min) or Bluetooth. Transfer is automatic once paired.

**account free operation**

Recording: yes. Retrieving audio: no documented way without a Deepting account and app binding; the policy says rebinding a device requires emailing privacy@danutecheu.com. If Deepting shuts down or leaves the EU, the device would still record, but there is no documented way to get the files off it.

#### transcription and ai

**asr engine**

iFLYTEK 'proprietary speech models' (vendor), plus a licensed third-party 'speech-to-text service supplier in EU' for some source languages (Deepting privacy policy). The transcription language is selected manually; no auto-detect was evident in reviews.

**language count**

11 for transcription and translation (Notebookcheck: ar, zh, en, fr, de, it, ja, ko, es, th, vi); Polish not included. Mixed-language recordings: no auto-detect or code-switching documented.

**speaker diarization**

Yes, included on the free tier. Notebookcheck: two speakers assigned correctly. GameRevolution: worked well, but overlapping speech reduced accuracy. Named speakers and limits on speaker count are not documented.

**transcript editing and vocabulary**

In-app transcript editing (the 'Edit' function), translation, web editor on deepting.ai, highlight markers, image insertion. No custom vocabulary or glossary found. BGR notes accuracy dips with jargon and product names.

**online meeting capture**

No desktop app, bot or system-audio capture. The options are to put the P1 near the laptop speaker, or to upload files to the Deepting app or web. The phone app has 'floating subtitles' for live captioning.

**realtime transcription**

Yes, when the Deepting app is open and connected: a live transcript while recording (Notebookcheck, Real Sound). The final transcript is generated after upload (about 5 min per hour of audio, vendor).

**on device processing**

None. Transcription, translation and AI all run in the cloud. The vendor reserves offline transcription for the Smart Recorder and S6 models.

#### ecosystem

**apps**

iOS/iPadOS (Deepting, 4.7 stars from 162 ratings, US App Store), Android (com.deeptingai.android, 100K+ downloads, 4.0 stars, updated 15 Sep 2026), web (deepting.ai). No desktop app. UI languages: EN, JA, zh (no Polish).

**integrations**

None found (no Notion, Drive, Obsidian, Zapier/Make or calendar). Only the share button and manual exports.

**api mcp access**

- **grade**: none
- **a rest or graphql api**: None found; no developer documentation exists.
- **b webhooks**: None.
- **c mcp server**: No official or community MCP server found.
- **d cli sdk**: None.
- **e no code**: No Zapier, Make or n8n triggers.
- **f fallback mass storage**: No USB mass storage is documented (vendor FAQ: the P1 is app/cloud-centric), so there is no 'API of last resort' either.
- **free tier**: Not applicable.

#### pricing

**paid plans**

Deepting Pro: USD 12.99/month or USD 85.99/year for 1,800 min/month (App Store and Google Play listings, seen 2026-10-01). An older third-party review quoted USD 9.99/68.99. The launch trial was 2,100 min/month. Pro does not add Polish.

**promise durability**

Too new to judge (Jun 2026). The terms let Deepting 'modify or discontinue' free-usage features without notice, and the free-minute rules live only on the platform. If the service ends, the device still records, but no documented non-app way to extract audio exists.

#### privacy and compliance

**encryption**

In transit: yes (Google Play data safety). At rest and end-to-end: not stated. On device: 'USB protection' and 'automatic deletion of local files' after sync (vendor). The P1 has no passcode; the P1 Pro has a screen lock.

**recording indicator consent**

A status LED and a mic icon on screen while recording, but the vendor lets you turn the indicator lights off 'to support covert recording' (product page), which weakens any duty-to-inform argument. No consent features.

**ai act emotion features**

None found. Features are summaries, keywords, speaker highlights, to-dos, 'discourse coherence', filler cleaning and mind maps; no emotion or sentiment scoring was seen.

#### verdict

**noisy room performance**

Limited tested evidence. BGR: quality drops toward the 5 m rated range, and quiet speakers are transcribed poorly. Real Sound: picked up distant voices well (anecdotal). The P1 Pro (3 mics, 10 m) is the vendor's answer for large rooms.

**known issues**

Wi-Fi transfer slower than advertised (~1 min/h vs 30 s, GameRevolution). App basic, with a learning curve (BGR). Tiny screen with no recording timer on the device. Plastic build. Hard to operate with large hands, and easy to lose (Notebookcheck). Summaries come out in the transcription language unless re-prompted. No user reports on long-term reliability yet (launched Jun 2026).

**best for**

Suits: voice notes and in-person meetings in a supported language at close range (worn on the body). Does not suit: Polish anything; phone calls (speakerphone only); online calls (no desktop capture); large rooms beyond ~3-5 m.

**pros cons**

- **pros**:
  - Very small and light (22.5 g) wearable with clip, wristband and pendant options
  - Native USB-C port, 25 h battery, 85-day standby, pass-through charging
  - Good near-field transcription and diarization in supported languages (independent tests)
  - EU (Hungarian) data controller with EU-hosted storage
  - Low price (USD 109-119)
- **cons**:
  - No Polish transcription (11 languages only)
  - No documented USB mass storage or raw-audio export; app account and binding required
  - Free tier 300 min/month; Pro does not fix Polish
  - No API, MCP or integrations
  - No call-recording sensor; recording indicator can be disabled for covert use

**conflicting evidence**

- Free minutes: 300/month with a registered device (vendor product page, BGR, Notebookcheck) vs 30/month (App Store and Google Play: app-only free plan); GameRevolution reconciles them (30 rises to 300 on registration).
- Pro plan: 1,800 min/month at USD 12.99/85.99 (app stores) vs USD 9.99/68.99 (blocksentient review, older) vs a 2,100 min/month launch trial (product page, Notebookcheck).
- Cloud storage: 'unlimited' (product page, BGR) vs '1GB permanent cloud space and additional bonus' (press release, 15 Jun 2026).
- Language list: Notebookcheck (ar, zh, en, fr, de, it, ja, ko, es, th, vi) vs a third-party Deepting review (includes Russian). Neither includes Polish.
- Transfer speed: 30 s per hour of audio (vendor, BGR repeating it) vs ~1 min (GameRevolution).
- USB export: the P1 Pro product page says 'Export via USB-C', but the vendor FAQ says P1/P1 Pro are app/cloud-centric, unlike the models with direct wired transfer; for the P1 nothing confirms mass storage.
- LLM: marketed as 'Powered by ChatGPT' (product page, Notebookcheck), but the privacy-policy processor list names no LLM provider.

#### other info

**sources**

- https://store.iflytek.com/products/iflytek-ai-recorder-p1 - official product page (fetched 2026-10-01): 300 min/month, 11 languages, Type-C, Wi-Fi transfer, USB protection, indicator lights off, prices USD 119 / EUR 124.37 / PLN 549.94
- https://store.iflytek.com/collections/iflytek-smart-recorder - vendor recorder FAQ: P1 has no offline transcription; P1/P1 Pro app/cloud-centric vs S6/Smart Recorder direct wired transfer
- https://store.iflytek.com/products/iflytek-ai-recorder-p1-pro - P1 Pro page ('Export via USB-C'), for contrast
- https://store.iflytek.com/pages/shipping-policy - shipping countries (Poland not listed)
- https://store.iflytek.com/pages/about-us - iFLYTEK founded 1999, ~15,000 employees
- https://www.notebookcheck.net/iFLYTEK-AI-Recorder-P1-An-AI-assistant-as-a-wearable-device.1335699.0.html - hands-on review 6 Jul 2026 (manufacturer sample): 11-language list, 300 free min, USB-C cable, specs, prices
- https://www.notebookcheck.net/iFLYTEK-P1-Pro-The-AI-powered-recorder-slash-lighter.1337013.0.html - P1 Pro review: same language list, calls need speakerphone
- https://www.bgr.com/2242830/iflytek-p1-review/ - hands-on review 24 Aug 2026: USB-C port on the bottom, 5 m range test, 300/1,800 minutes, cloud privacy caveat
- https://www.gamerevolution.com/?p=984939 - P1 Pro & P1 review 18 Aug 2026 (sample from iFLYTEK): 30 rising to 300 min on registration, transfer ~1 min/h, speaker ID
- https://cybernews.com/tech/ifytek-p1-pro-review/ - P1 Pro review: app mandatory to transfer files
- https://prtimes.jp/main/html/rd/p/000000055.000078962.html - Japan press release 12 Jun 2026: JPY 19,800, USB Type-C, 11 languages, network + app required
- https://realsound.jp/tech/2026/06/post-2412442.html - Real Sound JP hands-on: USB-C port, LED while recording, Deepting app/web
- https://realsound.jp/tech/2026/06/post-2424956.html - Real Sound JP launch news: specs, promo price
- https://www.accessnewswire.com/newsroom/en/industrial-and-manufacturing/iflytek-unveils-ai-recorders-p1-and-p1-pro-redefining-smart-voice-capt-1177232 - global press release 15 Jun 2026: launch 8 Jun, USD 109 promo / 119 MSRP, 1 GB permanent cloud
- https://apps.apple.com/us/app/-/id6466035697 - Deepting App Store listing: DanuTech Europe Kft., 30 free min, Pro USD 12.99/85.99, 1,800 min
- https://play.google.com/store/apps/details?id=com.deeptingai.android - Deepting Google Play listing: 11 languages, plans, P1 support, data safety, user reviews
- https://www.deepting.ai/app/privacy - Deepting app privacy policy: controller DanuTech Europe Kft. Budapest, processor VerbaLink Europe Kft., DE/IE cloud, EU STT supplier, Singapore translation, 'SBC audio', device binding
- https://www.deepting.ai/privacy - Deepting web privacy policy (same processors)
- https://www.deepting.ai/terms - Deepting terms: free usage may be modified or discontinued without notice (cl. 3.3), free minutes per platform rules (cl. 10)
- https://blocksentient.com/review/deepting - third-party Deepting review: DanuTech as iFLYTEK subsidiary, AWS DE/IE, older pricing (unverified)

#### omitted as uncertain

- availability eu poland
- call recording method
- certifications
- company stability
- export formats
- independent review consensus
- maker and hq
- processing location data residency
- raw audio export
- req no subscription
- req polish transcription
- requirements verdict
- three year tco
- training on user data
- verdict for me

### GenSpark Second Brain Note

**FAIL (R2 + R3)** · Polish C · API/MCP none · 22 field(s) omitted as uncertain

#### requirements

**req usb c port**

FAIL. Charging is through a proprietary 4-pin magnetic connector on the device body. The official help center says to 'Connect the included USB-C cable (Type-C input, 4-pin magnetic output) to the device': the other end is USB-C, but the device has no USB-C receptacle. Techno-Edge (23 Jul 2026) also describes a pin-based magnetic Type-C cable and a 2 h charge. Not Qi wireless: the included MagSafe/Qi2-compatible wallet is only a magnetic mount, and the device charges inside it via the same magnetic cable. The replacement cable is vendor-only ('USB-C Cable', USD 15 on shop.genspark.ai, 2026-10-01). No data transfer over the cable is documented: audio moves to the app over Bluetooth, with a direct Wi-Fi 'fast transfer' option.

**requirements verdict**

FAIL. R2: charging is through a proprietary 4-pin magnetic connector (USB-C only at the far end of a vendor cable). R3 tier 1 also fails: 300 free min/month (≤ ~900 with daily credits) against the 1,200 needed, and tier 2 is doubtful because there is no USB mass storage and on-device audio is deleted after sync. R1 unknown (no Polish evidence).

#### identity

**basics**

GenSpark SecondBrain Note (also written 'Second Brain Note'), first generation. Genspark's first hardware product: a credit-card-sized, 2.95 mm, 26 g MagSafe AI voice recorder with 4 MEMS mics and a vibration-conduction (bone-conduction/VPU) call sensor. Recordings feed GenSpark's cloud 'SecondBrain' memory and Super Agent (Gmail, Calendar, Slack, Notion, Google Workspace, HubSpot). Positioning: a Plaud NotePin/Note-class card recorder whose real product is the Genspark agent workspace.

**launch date**

Announced 21 July 2026 alongside Genspark AI Workspace 6.0 (Techno-Edge, 23 Jul 2026; Börse Express; Digital Today KR). It is the first generation and Genspark's first device. Sold as a 'limited first release' at USD 179. No successor announced as of 2026-10-01.

**form factor**

Credit-card-sized card: 85.6 × 54.1 × 2.95 mm, aircraft-grade aluminium (shop.genspark.ai). Snaps to an iPhone through the included MagSafe wallet; a metal ring is included for Android or non-MagSafe phones. It can also live in a card wallet. No clip or lanyard. Box: device, MagSafe Wallet, USB-C-to-4-pin magnetic charging cable, metal ring, quick guide, safety and warranty guide.

#### capture hardware

**microphones**

4 MEMS mics (SNR ≥ 71 dB, sensitivity ≥ -32 dBFS) plus 1 vibration-conduction sensor; 'AI beamforming'; pickup range 1–5 m (all vendor-claimed, untested).

**call recording method**

Vibration-conduction sensor (V.C.S./VPU): attach magnetically to the back of the phone; headsets are not supported. Manual start with a 2 s hold. Works on iPhone through the MagSafe wallet and on Android through the metal ring (vendor-claimed).

**display and controls**

No screen; one button. Hold 2 s to start or stop (white breathing light plus a vibration); a brief press marks an important moment (single vibration). One-handed blind start is feasible.

**size weight**

85.6 × 54.1 × 2.95 mm; 26 g (shop.genspark.ai).

**offline recording**

Yes. The help center says 'Recording happens entirely on the device — no internet, no credits, no limits'. Recordings sync to the app automatically over Bluetooth on reconnect, with an optional direct Wi-Fi fast transfer. Sync speed not published.

**account free operation**

No. A Genspark account and the app are required to pair, get audio off the device and process it. If Genspark shuts down or drops the device, recordings would stay trapped on the device, since there is no USB data path.

#### transcription and ai

**online meeting capture**

Device: place it near the laptop speaker. Genspark also has a separate software Meeting Notes feature, which is not part of this device's evaluation.

**realtime transcription**

No. Transcription happens after the recording syncs to the app.

**on device processing**

None. Recording is local; all transcription and AI processing is in Genspark's cloud.

#### ecosystem

**apps**

Genspark app for iOS and Android (the app is required); Genspark web workspace for SecondBrain. Feature parity not checked.

**integrations**

Through SecondBrain: Gmail, Google Calendar, Slack, Notion, Google Workspace, HubSpot (the agent reads from and acts on them); no Obsidian or Zapier route found for recordings.

#### pricing

**promise durability**

Untested: the device is about 2 months old (Jul 2026). The 300 min/month is described as resetting monthly with the hardware, with no 'lifetime' wording and no ToS term found. Genspark's credit model has shifted before (e.g. 'zero-credit' chat and image promos through 31 Dec 2026). If the vendor shuts down, the device records, but the audio cannot be retrieved without the app.

**three year tco**

Hardware USD 179 (US only) plus forwarding. The free route reaches at most ~900 min/month (300 free plus ~600 from daily credits, if no other Genspark use), so 1,200 min/month needs Plus: 36 × USD 19.99 = USD 720 (annual billing), about USD 900 in total. That is a subscription, so it violates R3. There is no tier-2 Whisper route, as no audio export is verified.

#### privacy and compliance

**encryption**

'Encrypted during transfer' (help center). At rest and on-device encryption not specified; the device unbinds or locks if lost.

**recording indicator consent**

White breathing light plus a vibration while recording; no consent or announcement feature found.

**ai act emotion features**

None found.

#### verdict

**noisy room performance**

No tested evidence; vendor claims 4-mic beamforming and 1–5 m pickup.

**known issues**

Too new for a pattern of user complaints. Structural issues: proprietary magnetic cable, no USB data path, local audio deleted after sync, cloud and app dependence, US/JP/KR-only shipping.

**best for**

On paper: phone calls (V.C.S.) and pocketable voice notes or in-person meetings for Genspark agent users in the US, Japan or Korea. Not for this buyer: no EU sale, no raw-audio pipeline, Polish unproven.

**pros cons**

- **pros**:
  - Thinnest and lightest card form factor (2.95 mm, 26 g) with MagSafe wallet
  - 4 mics plus a vibration call sensor; 35 h claimed battery; 64 GB
  - Well-funded vendor; 300 free min/month that resets monthly; SOC 2 Type II / ISO 27001 claimed
- **cons**:
  - Fails R2: proprietary 4-pin magnetic charging cable
  - Below 1,200 min/month without a subscription; no USB audio access and on-device files are deleted after sync
  - Not sold in the EU or Poland (ships to the US, Japan and Korea only)
  - No Polish evidence, no published language list, no API/MCP for recordings
  - Locked into the Genspark agent ecosystem (summaries and agent actions the buyer does not want)

**verdict for me**

Skip. Requirements: FAIL (R2 proprietary 4-pin magnetic connector; R3 tier 1 short at ≤ ~900 free min/month and no verified raw-audio export for tier 2). Polish: no evidence. Deciding reason: no USB-C port, no USB data path and no EU availability. It is a Genspark-ecosystem capture card, not a transcription recorder for a GDPR-bound Polish consultant.

**conflicting evidence**

- Thickness: 2.95 mm (shop.genspark.ai, Techno-Edge) vs 2.9 mm (MindStudio, launch press); a rounding difference.
- Audio download: help-center search snippet says recordings can be reviewed, edited, downloaded or deleted, vs the current help-center text, which documents no audio download or export.
- Storage hours: MindStudio claims ~7,000 h in 64 GB (implies very low bitrate) vs no vendor hour figure.

#### other info

**screen first result**

Knocked out on R2 (proprietary 4-pin magnetic charging connector). Requirements and identity are filled in full; the remaining fields are one line each by design.

**sources**

- **url**: https://www.genspark.ai/helpcenter/secondbrain-note | **note**: Official help center (read 2026-10-01): 'USB-C cable (Type-C input, 4-pin magnetic output)'; 300 free min/month resetting monthly; overflow at ~5 credits/min from 100 credits/day; local file deleted after transfer; BT plus Wi-Fi transfer; ships to US/JP/KR; SOC 2 Type II / ISO 27001 claim; 30-day unopened returns.
- **url**: https://www.genspark.ai/pl/helpcenter/secondbrain-note | **note**: Polish-localised help center (same content): evidence of Polish UI and help text only.
- **url**: https://shop.genspark.ai/ | **note**: Official store (seen 2026-10-01): USD 179 (from 199); 85.6 × 54.1 × 2.95 mm, 26 g; 4 mics (SNR ≥ 71 dB) plus bone-conduction mic; 64 GB; 500 mAh, 35 h; BT 6.0; Starter 300 min / Plus / Pro unlimited; wallet USD 40, cable USD 15.
- **url**: https://www.techno-edge.net/article/2026/07/23/5325.html | **note**: Announcement coverage (JP, 23 Jul 2026): announced 21 Jul 2026; 500 mAh, 2 h charge; pin-based magnetic Type-C cable; wallet is a magnetic mount, not wireless charging; 1–5 m pickup.
- **url**: https://www.mindstudio.ai/blog/genspark-second-brain-note-hardware | **note**: Launch summary: USD 179 / 199, 4-mic beamforming, 64 GB '~7,000 h', integrations list.
- **url**: https://aitoolsreview.co.uk/insights/genspark-secondbrain-note | **note**: Spec roundup (5 Aug 2026): no language count published by GenSpark; Type-C magnetic cable; no affiliate disclosure visible.
- **url**: https://www.genspark.ai/helpcenter/speakly | **note**: Genspark Speakly: '100+ languages', auto-detect, mixed-language sentences, cloud ASR (engine undisclosed); Meeting Notes export MD/Word/TXT.
- **url**: https://www.eesel.ai/blog/genspark-ai-pricing | **note**: Genspark Plus USD 24.99/month (19.99 annual), Pro USD 249.99/month (199.99 annual), credits and storage.
- **url**: https://siliconvalleyinvestclub.com/companies/genspark/ | **note**: Secondary company profile: funding rounds, USD 2.6B valuation (Jun 2026), ARR trajectory (unverified against primary sources).
- **url**: https://fast.io/resources/genspark-ai-review-2026/ | **note**: Secondary: funding history and pricing context.
- **url**: https://www.producthunt.com/posts/secondbrain-note-by-genspark | **note**: Product listing: Notes / Transcript / Speakers sections, 5 m pickup.
- **url**: https://www.tomsguide.com/ai/i-used-this-ai-note-taker-to-record-my-meetings-for-a-week-and-it-made-my-workdays-more-focused-and-productive | **note**: Tom's Guide 'used it for a week' piece (also syndicated on Yahoo Deals); body not retrievable, device unconfirmed.

#### omitted as uncertain

- api mcp access
- asr engine
- availability eu poland
- battery recording and standby
- certifications
- company stability
- export formats
- free minutes steady state
- free tier quality and retention
- independent review consensus
- language count
- maker and hq
- paid plans
- price
- processing location data residency
- raw audio export
- req no subscription
- req polish transcription
- speaker diarization
- storage
- training on user data
- transcript editing and vocabulary
