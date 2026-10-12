---
title: "AI Voice Recorders for Meetings (Polish)"
date: 2026-10-02
enableToc: true
openToc: true
tags: ["knowledge", "info", "research", "compiled", "ai", "hardware", "voice-recorder", "transcription", "stt", "meetings", "polish", "gdpr", "whisper", "mcp", "evidence-based"]
type: compiled-note
source: "_raw/processed/2026-10-02_2026-10-01-research-ai-voice-recorders-meetings.md"
agent-created: true
summary: "13 AI meeting recorders checked against Polish, USB-C and no subscription: HiDock P1 is the only tier-1 pass, a DIY recorder plus local Whisper the only grade-A Polish route"
---

# AI Voice Recorders for Meetings — Polish, USB-C, No Subscription

## 🗒️ Description

A deep-research pass (2026-10-01) on which card or clip-on AI recorder to buy for my client meetings. It covers 13 devices across 49 fields, plus 11 more screened out early. **257 of the 637 field values (40.3%) came back uncertain and are left out**, not guessed.

**My requirements**, decided 2026-10-01. I'm a Poland-based B2B consultant, my meetings run in Polish and English, and I want transcription only, not AI summaries.

- **R1, Polish transcription.**
- **R2, a USB-C port on the device body.** Proprietary magnetic or pogo-pin cables, cases, cradles and Qi charging all fail.
- **R3, no subscription.** Tier 1: free in-app transcription indefinitely at about 20 h/month (~1,200 min). Tier 2: the vendor app falls short, but raw audio exports for local Whisper.
- **Tie-breaker:** programmatic access (API / MCP).

**Evidence discipline.** This category is saturated with affiliate listicles and vendor-supplied review units. Spec-sheet numbers are vendor claims unless an independent test reproduced them. Polish evidence is graded **A** (independent Polish test or leaderboard), **B** (a vendor list names Polish) or **C** (generic "100+ languages"). Prices were seen on 2026-10-01 and drift.

This note condenses the report. The full field-by-field report (327 KB) is archived at `_raw/processed/2026-10-02_2026-10-01-research-ai-voice-recorders-meetings.md`, and the research workspace is `_raw/research-workspaces/ai-voice-recorders-meetings/`. Where a device section in the raw report contradicts its own "What did not hold up" list, I went with the correction.

## 🔗 Links

- [[Tactiq]]: my existing capture for online calls. No recorder improves on it there.
- [[TTS Engines Comparison (Polish)]]: the reverse direction (text to Polish speech), with the same evidence problem: "listed" is not "tested".
- [[Voicebox]]: local-first voice studio (STT + TTS), the software-only way to keep audio on my machine.
- [[Claude Video]]: the yt-dlp + ffmpeg + Whisper pipeline already in my toolbox.
- [[ElevenLabs]]: its Scribe ASR beat Whisper by a wide margin on noisy Polish clinical conversations (AGH, 2026).
- [[OpenAI]]: HiDock's transcription sub-processor.
- [[n8n]] · [[LIFE/TOOLS/Obsidian|Obsidian]] · [[Brain]]: where transcripts would flow, and why they must stay out of the public garden.
- [[PLSoft]]: the consulting practice these client meetings belong to.
- [[Deep-Research-skills]]: the pipeline that produced the report.

## 🚀 Main message

**No device passes all three hard requirements with strong evidence.** Every finalist leaves either Polish quality or GDPR open. The ranking orders devices by R1–R3 first, then Polish evidence, then API/MCP.

1. **[HiDock P1](#hidock-p1)** is the only tier-1 pass: unlimited free transcription, native USB-C, and Polish on the official 75-language list (OpenAI engine, grade B). Against it: data sits in US Azure with no EU option, speaker ID is paywalled, there's no Polish retailer (import, VAT on delivery), and "lifetime free" is not contractual. Raw MP3 is reachable through community WebUSB tools, so a Whisper fallback exists.
2. **[DIY: Sony ICD-TX660 + local Whisper large-v3](#diy-benchmark-with-local-whisper)** is the only route with grade-A Polish evidence (large-v3 ranks #1 on the AMU BIGOS, PELCRA and PolEval leaderboards) and zero GDPR exposure, because nothing leaves the laptop. Against it: no phone-call capture, a manual plug-in-and-run step per recording, and 1–3 h of one-time setup.
3. **[Pocket](#pocket)** has the best programmatic access in the field (documented REST API, ~15 webhook events, official MCP, Obsidian plugin) and a USB drive mode. Against it: zero Polish evidence, a weaker free-tier model, US-only hosting, and SOC 2 claims that pointed to a compliance vendor accused in Mar 2026 of issuing fake SOC 2 reports.
4. **[SwitchBot AI MindClip](#switchbot-ai-mindclip)** offers EU storage, a documented REST API, webhooks, an MCP server in the official CLI, Polish on the official list, and shipping from a Polish warehouse. Against it: the USB-C port only charges, so every hour of audio for Whisper is a manual one-file export from the phone app.
5. **[BOYA Notra](#boya-notra)** is easy to buy in Poland (x-kom), has a USB drive mode, and lists Polish in the app. Against it: the privacy policy says data is stored in China, and the free tier covers about a quarter of the minutes I need.

**Practical path:** buy the HiDock P1 or Pocket from a seller with a 30-day return window. Record one real 20-minute Polish meeting and one mixed Polish/English meeting, run the same audio through local Whisper large-v3, and keep whichever wins. If client confidentiality matters more than convenience, the DIY route is the answer outright.

**If R2 were relaxed** (magnetic charging accepted), the **[Plaud Note Pro](#plaud-note-pro)** becomes the strongest pick. It has the only independent Polish hands-on test (qualitative, maker-requested), a free official MCP server and CLI on every plan, and an EU hosting claim (contested). The **[Comulytic Note Pro](#comulytic-note-pro)** would be the cheapest no-subscription option: unlimited free transcription, about €119 total over three years.

**By use case** (passing devices only):

- **In-person meetings:** HiDock P1, BOYA Notra. For a conference-room table, the Zoom H1essential from the DIY route.
- **Phone calls:** Pocket (contact mic), BOYA Notra (call mode with a manual switch; phone cases weaken the far end), HiDock P1 (only through Bluetooth-earbud passthrough). The DIY recorders can't capture calls.
- **Online calls:** keep the software capture I already have ([[Tactiq]], Wispr Flow). A recorder next to the laptop speaker is a fallback, not a strategy.
- **Voice notes:** Sony ICD-TX660 (DIY), Pocket, SwitchBot MindClip (16.8 g clip).

## 📊 Requirements matrix

| Device | R1 Polish | R2 USB-C | R3 no subscription | API / MCP | Data location | Price (2026-10-01) | Verdict |
|---|---|---|---|---|---|---|---|
| [HiDock P1](#hidock-p1) | ✅ B, 75-language list; OpenAI engine | ✅ port | T1, unlimited free (non-contractual) | partial | US (Azure) | \$169 (P1) / \$119 (P1 mini); no PL retailer | **PASS tier 1 (provisional)** |
| [Pocket](#pocket) | ❓ C, no list, no test | ✅ port + data | T1 on paper (weaker model); T2 via USB drive | full on Pro / partial free | US | \$139; 539 PLN | **PASS tier 2** (tier 1 if Polish works) |
| [BOYA Notra](#boya-notra) | ✅ B, pl-PL in app code | ✅ port + data | T2, USB drive (toggle per power cycle) | partial (undocumented MCP) | CN per policy; US-hosted per DNS | 699 PLN (x-kom); 589–650 PLN (morele) | **PASS tier 2** |
| [BOYA Notra Neo](#boya-notra-neo) | ✅ B, pl-PL in app code | ✅ port, charge only | T2, app export only | partial (undocumented MCP) | CN per policy; US-hosted per DNS | €89; 399 PLN | **PASS tier 2 (weak)** |
| [FoCase Rec CR1](#focase-rec-cr1) | ❓ reseller copy only | ✅? reseller spec | T2, USB WAV after app toggle | none | HK server → OpenAI | \$79; 311 PLN | **PASS tier 2 (unverified)** |
| [DIY + local Whisper](#diy-benchmark-with-local-whisper) | ✅ A, large-v3 #1 on BIGOS | ✅ port + drive | T2 by construction | full (local files) | local only | Sony ICD-TX660 699 PLN; Zoom H1essential 433 PLN | **PASS tier 2 (by construction)** |
| [Plaud Note Pro](#plaud-note-pro) | ✅ A, Telepolis hands-on (qualitative) | ❌ 4-pin magnetic | T2, app export WAV/MP3 | full (free MCP + CLI) | EU (AWS Frankfurt) per vendor, contested | 815–829 PLN; €189 | **NEAR-MISS (fails R2)** |
| [Comulytic Note Pro](#comulytic-note-pro) | ❓ C, list unpublished | ❌ pogo pins | T1, unlimited free; app export only | partial (Zapier beta) | US (AWS) | €118.99 | **NEAR-MISS (fails R2)** |
| [UMEVO Note Plus](#umevo-note-plus) | ✅ B, FAQ names Polish | ❌ pogo pins | T2, USB drive per FAQ (unconfirmed) | none | US (Alibaba Cloud US) | \$119 (sale); no EU retail | **NEAR-MISS (fails R2)** |
| [SwitchBot AI MindClip](#switchbot-ai-mindclip) | ✅ B, 30-language list | ✅ port, charge only | T2, app export one file at a time | partial (REST + webhooks + MCP, no audio) | EU storage (AWS DE); AI region undisclosed | €119.99; ships from PL warehouse | **PASS tier 2** |
| [Vibe Dot](#vibe-dot) | ❓ C, generic claim | ✅ port (vendor text) | T2, app MP3; free-plan export unclear | partial (MCP beta, paid) | US (AWS us-west-2) | \$199; US only | **PASS tier 2 (weak)** |
| [iFLYTEK AI Recorder P1](#iflytek-ai-recorder-p1) | ❌ 11 languages, no Polish | ✅ port | unproven, no raw export | none | EU (DE/IE) | \$119; 549.94 PLN | **FAIL (no Polish)** |
| [GenSpark Second Brain Note](#genspark-second-brain-note) | ❓ C | ❌ 4-pin magnetic | FAIL, ≤900 min/month, no export | none | not researched | \$179–199; no EU sale | **FAIL (R2 + R3)** |

**Screened out before deep research:**

| Device | Why |
|---|---|
| Plaud NotePin S | R2: charges in a cradle; 300 min/month. \$179 clip-on. |
| Soundcore Work (Anker) | R2: only the case has USB-C. R3: 300 min/month, no cable export. €177.99. |
| Mobvoi TicNote (+ Card Lite) | R2: proprietary magnetic charger; 300 min/month. Sold in PL via ASBIS (~699 PLN), English-only menu. |
| Notta Memo / Memo Pro | Memo: magnetic, 120 free min/month with a 3-min per-file cap. Memo Pro moves to USB-C + WebUSB but launches 13 Oct 2026 in Japan only. |
| MOVA TPEAK AI Note (Dreame) | R2: Qi-only charging. Sold in Polish retail (649 PLN, often 299). |
| Zeno Weaver | India-market MagSafe card; no EU availability. |
| WaveNote (Wave AI) | 500 min/month for 12 months only, then paid. |
| Kentfaith magnetic recorder | White-label twin of the FoCase Rec CR1: 600 min/month for 12 months, then a subscription. |
| Voicit Go | R1: 7 languages, no Polish; requires Voicit Pro (€18/month). Useful as the EU-data-residency benchmark (EU data centres, GDPR Art. 28 processor). |
| DingTalk A1 / A1 Pro | China-only ecosystem. |
| TIMMKOO SR1 | Handheld (out of form factor); offline transcription reported poor. |

Out of scope but worth watching: the category is moving to **earbuds** (Plaud One, TicNote Pods, Viaim RecDot) and to **desktop software capture** (Plaud Desktop).

## ⚠️ What did not hold up

12 claims from the preliminary screen or common coverage that the deep research overturned.

| # | Claimed | What the sources actually say |
|---|---|---|
| 1 | HiDock P1 mounts as USB mass storage | It doesn't. It shows up as a vendor-specific USB device. The `.hda` files (plain MP3, 48 kHz mono, 96 kbps) come out through the HiNotes web app or community tools (hidock-local, midock, OpenHiNotes). |
| 2 | HiDock data is on Azure, so EU hosting is possible | Azure **in the US**. Sub-processors are OpenAI, Anthropic and Azure. No EU hosting option and no EU representative. |
| 3 | Plaud Note Pro scored 10/10 for Polish (Telepolis) | 10/10 is the **overall product score**. The Polish verdict is qualitative (near-perfect, with speaker separation), there's no WER, and the maker requested the test. |
| 4 | BOYA Notra's promotion adds 600 minutes on top of 320 | It raises the monthly total **from 320 to 600** for 12 months. Still half of the ~1,200 I need. |
| 5 | FoCase Rec CR1 gives 1,800 free minutes a month for life | Its own FAQ says 600. Its white-label twin gives 600/month for 12 months, then requires a subscription. |
| 6 | FoCase CR1 comes from the same factory as BOYA Notra | No evidence: different weight, battery, app developer and launch year. The square is just the generic MagSafe-puck shape. |
| 7 | Comulytic Note Pro has a 16 GB variant | One Amazon listing's spec attribute. Every official SKU is 64 GB. |
| 8 | Pocket's free tier is 200 min/month plus credits | Pre-launch terms (Dec 2024). Unlimited free transcription has held since the Oct 2025 launch, on a weaker model, with a 30-day history. |
| 9 | Vibe Dot holds SOC 2 Type II | Vibe claims only "SOC 2", with no type and no report. The Type II story belongs to Vibe.co, an unrelated company. |
| 10 | BOYA Notra Neo transfers files over USB-C like the Notra | BOYA's own comparison lists Neo transfer as Bluetooth/Wi-Fi only. Its USB-C port charges and tethers Bluetooth mode. |
| 11 | BOYA devices have no API or MCP | An **undocumented** official remote MCP server exists on the shared Boya OS backend (mcp.boyaos.com, OAuth 2.1, read-only: metadata, transcripts, summaries; no raw audio), apparently in staged rollout. |
| 12 | Plaud recordings can be copied over the USB cable | The Note Pro never supported USB file access, and the original Note lost it at firmware V2.1. Audio leaves only through the app or the MCP/CLI download link. |

## 🧩 Cross-cutting findings

- **USB-C strictness costs evidence, not necessarily quality.** R2 knocks out the device with the only Polish hands-on test and the best free MCP (Plaud). But Plaud ("plaud-fast-whisper") and HiDock (OpenAI) both run Whisper-family engines, so the Polish gap between them is mostly an evidence gap that one short test would close.
- **Mixed Polish/English in one recording is unsupported or unevidenced everywhere.** Plaud states one language per recording; UMEVO makes you pick the language per file; nobody else has test data. For bilingual meetings, assume the minority language comes out poorly.
- **"Free forever" is never contractual.** Every vendor's terms let free tiers change without notice. Pocket cut free history from 90 to 14 days on 27 Jan 2026, reversed it two days later after user backlash, and now keeps 30 days. **Raw-audio export is the durable hedge:** it turns any vendor decision into a fallback instead of a loss.
- **GDPR is the weak link for client meetings.** Most passing devices process audio in the US (HiDock, Pocket, Vibe), China/US (BOYA) or Hong Kong (FoCase), usually with no DPA and no EU representative. Of all 13, only SwitchBot (EU storage, AI region undisclosed), iFLYTEK (EU, but no Polish) and, contested, Plaud claim EU storage. Only the DIY route keeps audio on my own machine.
- **Fallback audio quality varies.** Several devices export at low bitrates: BOYA Notra ~18 kbps (inferred), Pocket ~32 kbps at 16 kHz, UMEVO 32 kbps at 16 kHz. Compare WAV on the Sony ICD-TX660 and 48 kHz/24-bit on the DJI Mic 2. Low bitrates hurt Whisper accuracy in noisy rooms.
- **Vendor risk is real.** Limitless cut service to EU users on 19 Dec 2025 after Meta bought it. Devices that need an account before they record (Comulytic, Vibe) become bricks if the vendor leaves. Devices whose audio leaves over USB degrade more gracefully, though the BOYA Notra and Pocket still need the paired app to switch USB mode on. The DIY recorders need no account at all.
- **Independent reviews are thin.** Most hands-on reviews used vendor-supplied units, carried affiliate links or were sponsored. Pocket, UMEVO, Vibe Dot and GenSpark have no independent major-outlet review at all.

## 🧩 Device notes

Short version of each device's verdict. Price, specs and every conflicting claim are in the archived report.

**A. Pass the hard requirements**

### HiDock P1

**CONSIDER, the strongest candidate pending a Polish test.** It's the only device that is tier 1 on R3 while also passing R2.

- **For it:** unlimited, vendor-stated lifetime free transcription with Polish in the free tier and no monthly cap. Native USB-C, standalone recording to 64 GB, 8 h battery, physical buttons, aluminium build. **BlueCatch** records both sides of calls through my own Bluetooth earbuds with no meeting bot (iPhone 15+, Android OTG, laptops), which is its unique strength. Recordings are plain MP3 and can be pulled without an account by open-source tools (hidock-local, midock, OpenHiNotes; the community `hidock-mcp` is a local stdio MCP over libusb), a good Whisper and second-brain path.
- **Against it:** no independent Polish test and an undisclosed ASR model. Data is processed in Azure US with OpenAI and Anthropic as sub-processors, with no EU hosting and no EU representative. No official API, MCP or webhooks; free export is `.txt` only. Speaker labels, auto-transcribe and SRT/MD export are Pro-only. Small crowdfunded vendor, and two Trustpilot reviews (Aug 2025, Feb 2026) say "lifetime free" was not honoured.
- **Known issues:** setup is split across hidock.com and hinotes.hidock.com. Device management needs Chrome or Edge (WebUSB); there's no desktop app. Call mode records only one side unless the P1 is selected as both speaker and mic. USB transfer is capped at full-speed (~1 MB/s).
- **Note:** the P1 mini has no battery. It only records phone and earbud calls with the phone attached and can't record a room standalone.

### Pocket

**CONSIDER (buy to test).** Tier 2 is certain; tier 1 only if Polish works on the free "standard accuracy" model.

- **For it:** unlimited free transcription with no minute cap, held since the Oct 2025 launch. Native USB-C with data since firmware 1.0 (Nov 2025): USB Mode mounts a `POCKET` drive with unencrypted MP3 (16 kHz mono, ~32 kbps). Official REST API, webhooks, MCP server and an Obsidian plugin. A contact mic captures calls on a MagSafe phone without speakerphone. 64 GB, multi-day battery, \$139. Polish co-founder and an official Polish launch.
- **Against it:** no Polish evidence at all; the named engine (Smallest Pulse) doesn't list Polish, and the free tier runs a weaker model with no speaker separation. US-only hosting with no DPA, no Art. 27 representative and no SCCs, plus SOC 2 claimed via the scandal-hit Delve. USB Mode must be switched on in the paired app each time. The app auto-transfers recordings over BLE and there's no switch to stop cloud processing. Calls over Bluetooth earbuds aren't supported.
- **Known issues:** long recordings transcribed only partially (2–3 h files cut to the first 20–80 min, Jan–Sep 2026), sync failures, a unit bricked by a firmware update, a side button that triggers accidental multi-hour recordings.
- **My route if I buy it:** use Pocket as a \$139 USB-C recorder plus local Whisper for client meetings, and the vendor cloud only for non-sensitive notes.

### BOYA Notra

**CONSIDER, as a tier-2 device only.**

- **For it:** a real USB-C port with USB drive mode: drag-and-drop MP3/WAV with no cloud involved. Three capture modes in a 45 g card (room, phone calls via a vibration sensor, Bluetooth headset via a USB tether). 64 GB. Sold in Polish retail at ~600–700 PLN with a local warranty. Plain-transcription features (speaker labels, editing, every export format) are not paywalled. One-time minute packs exist (6,000 min for \$88.90, ≈\$0.89/h).
- **Against it:** only 320 free min/month long-term (600 for 12 months for devices bound 18 Apr–31 Dec 2026). Polish is list-only. The privacy policy says data is stored in the PRC (the blog says AWS; the observed host is Alibaba Cloud US), with no DPA and unverified SOC 2/HIPAA claims. The USB toggle lives in the app, resets at power-off, and needs a bound account; unbinding wipes the device. Audio in noise trails the Plaud Note Pro.
- **Known issues:** on-device recordings wiped after three weeks without app sync (fix promised mid-Sep 2026); an encoding change that broke third-party transcription of exports; low app ratings (3.3★ Android, 2.3★ iOS); real-time transcription removed in Feb 2026. Check the on-device codec before relying on it for Whisper.

### BOYA Notra Neo

**SKIP (at most a cheap tier-2 phone-call recorder, €89 / 399 PLN).** The USB-C port only charges and tethers Bluetooth mode, so audio leaves only through app or web export behind a PRC-run account. Same 320 free min/month as the Notra. All three hands-on reviews used vendor units: fine in quiet small rooms, but quality drops at 2–3 m (5 m claimed), and it over-splits speakers. The Notra is the better Boya pick.

### FoCase Rec CR1

**SKIP, or buy only as a €72 USB-C call and voice recorder used exclusively with local Whisper.** WAV files appear over USB mass storage after an in-app toggle. The free-minute terms contradict each other (1,800/month "lifetime" on the product page, 600 in its own FAQ, 600 for 12 months then a subscription on its white-label twin). Audio is relayed via a Hong Kong server to OpenAI by an opaque vendor with no DPA. There are no independent reviews; app-store users report very low accuracy or "20% success rate of actually transcribing", and there's no speaker ID. Integrity flag: a US reviewer says the maker used app data to find their email and offered lifetime free transcription for a raised Amazon review.

**B. Benchmarks**

### DIY benchmark with local Whisper

**CONSIDER, as the benchmark to beat and the fallback.** It's the only fully local, subscription-proof, scriptable route. An AI recorder has to beat it on convenience without losing on Polish quality, USB-C or data control.

- **Recorders** (all with native USB-C that mounts as storage):
  - **Sony ICD-TX660**, 699 PLN: MP3 up to 192 kbps or LPCM WAV, one-push voice notes, a Meeting scene. No Polish menu, non-replaceable battery, out of stock at x-kom.
  - **Zoom H1essential**, 433 PLN: 32-bit float WAV, the one for table meetings. Plastic, handling noise, noisy preamps on quiet sources.
  - **DJI Mic 2 TX**: 48 kHz/24-bit WAV, 8 GB, clip-on. 6 h per charge, splits files every 31 min.
  - Near-misses that fail R2: DJI Mic 3 TX and DJI Mic Mini 2S TX (magnetic only), OM System LS-P5 (micro-USB), Sony ICD-UX570 (built-in USB-A plug).
- **Polish evidence, grade A:** the independent AMU-CAI Polish ASR Leaderboard (Adam Mickiewicz University) ranks **Whisper large-v3 #1**: BIGOS V2 median WER 5.53%, PELCRA conversational 18.45%, PolEval 2024 14.51%, ahead of the OpenAI Whisper API, AssemblyAI, Google and Azure. Caveat: the data is from 2024, so turbo and 2025–26 commercial engines (ElevenLabs Scribe, gpt-4o-transcribe) are missing.
- **The real-world caveat:** an AGH Kraków study (arXiv 2603.02246, Mar 2026, some co-authors from a company) found Whisper best among open-source models on public Polish benchmarks, but [[ElevenLabs]] Scribe far ahead on noisy clinical conversations (10.6% vs 42.3% normalised WER). Noisy, overlapping Polish can be much worse than benchmark WER.
- **Cost:** about 430–740 PLN total over three years, all hardware.
- **Against it:** a manual dock-copy-run-review step for every recording, no call capture beyond speakerphone, slow on CPU, unencrypted recorders, and none of the conveniences (auto-sync, speaker names, in-app search).

### Plaud Note Pro

**NEAR-MISS, fails R2 only.** It charges through a proprietary 4-pin magnetic cable and has never offered USB data.

- **For it:** the strongest Polish evidence of any device. Telepolis (Jun 2026) called the Polish "perfect" apart from polonised English names, though with a vendor-solicited sample and no WER. Official **MCP and CLI on the free tier**, with transcript JSON (timestamps, speakers) and original-audio links, plus Zapier triggers: the best programmatic access in the category. Best-in-class form factor (3 mm, 30 g card, 4 mics, 5 m pickup, 30–50 h battery). Automatic two-sided phone-call capture through a contact sensor. A large vendor with ISO 27001/27701 and SOC 2 Type II claims.
- **Against it:** only 300 free min/month, so about \$180/year in one-time packs (6,000 min for \$99.99) to reach 20 h/month. The preset "auto-summarize new recordings" AutoFlow is **on by default** and burns free minutes until you switch it off. One language per recording, so no mixed PL/EN. Audio leaves the device only through the bound phone app. Data residency is disputed: EU accounts on AWS Frankfurt per the vendor (Sep 2026), but the DPA still permits US processing, the remote MCP is US-hosted, and older reviews cite US storage.

**C. Near-misses (fail only USB-C)**

### Comulytic Note Pro

**SKIP (near-miss on pogo pins and a proprietary magnetic USB-A cable).** Truly uncapped free transcription with all 113 languages on the free plan, so the three-year cost is roughly the €119 hardware. WIRED named it "Best Overall" among AI notetakers (Feb 2026). But Polish is untested and a Lithuanian test failed. Processing is US-only, the engine is contradictory (Azure Speech per the plan card, Whisper per the store table and reviewers), there's no USB mass storage, and the device is useless without a vendor account. Speaker diarization is the weak spot.

### UMEVO Note Plus

**SKIP (near-miss on pogo pins).** Its one real strength for me is a vendor-documented USB mass-storage MP3 export without an account (unconfirmed by tests). Polish is named in the FAQ and in the free tier: one year unlimited, then 400 min/month, with cheap one-time packs (~\$0.20/h). But there's no API or MCP, the app is slow and buggy (30–90 min to transcribe an hour; processing stops when the screen turns off), audio is 32 kbps at 16 kHz, and the ownership is opaque (Denver Inc. / Shenzhen ODM). \$119.

**D. Screened in wave 3**

### SwitchBot AI MindClip

**CONSIDER, low priority.** PASS tier 2. A 16.8 g clip with a physical slide switch and 64 GB, €119.99, shipping from a Polish warehouse. Polish is on the 30-language list (Qwen-family ASR). The official API, transcript-ready webhooks and a local MCP server (transcripts, speakers, to-dos; no audio) fit the second-brain pipeline well, and EU data sits in AWS Germany. But the free tier is 300 min/month, the USB-C port only charges, and audio leaves one file at a time through the app. AI sub-processors (Alibaba, OpenAI, Google) are in undisclosed regions. It had been on sale about six weeks, and silence and re-summaries drain the quota. Its API returns a meeting "atmosphere" result; see the AI Act point in the legal section below.

### Vibe Dot

**SKIP.** It can't be bought in Poland or the EU, and every recording transits a US-only cloud with no SCCs, DPA or EU representative before the audio can even be exported. 300 free min/month with no one-time packs, no Polish evidence, a paid beta MCP, and zero independent reviews. \$199.

### iFLYTEK AI Recorder P1

**FAIL: no Polish** (11 languages only). Otherwise interesting: a 22.5 g wearable, native USB-C, an EU (Hungarian) data controller with EU-hosted storage, and good near-field diarization in supported languages. It also lets you switch the recording lights off explicitly "to support covert recording", a feature to stay away from.

### GenSpark Second Brain Note

**FAIL on R2 and R3.** A proprietary 4-pin magnetic connector, at most ~900 free min/month even with daily credits, on-device audio deleted after sync, and no sale in the EU (US, Japan and Korea only). It's a Genspark-ecosystem capture card, not a transcription recorder. \$179–199.

## 🛠️ Whisper fallback and the vault pipeline

**Recipe** (from the DIY benchmark; speeds are vendor or community figures):

- **Tools:** faster-whisper, or WhisperX, which adds word alignment and pyannote diarization and has a Polish alignment model built in. noScribe is the GUI alternative.
- **Model:** `large-v3` on a GPU for maximum Polish accuracy; `large-v3-turbo` on CPU or Apple Silicon. Turbo isn't on the AMU leaderboard; on Polish FLEURS (Q8-quantised) it scores 5.81% WER against 4.69% for large-v3.
- **Settings:** `language='pl'` (multilingual mode only for heavy PL/EN switching), VAD filter on, `initial_prompt` or hotwords with client names and jargon, `--diarize` with min/max speakers set.
- **Speed per audio hour:** ~4 min (large-v3) or ~1.5 min (turbo) on an NVIDIA GPU; ~2–5 min with turbo on Apple Silicon; CPU-only is an unbenchmarked 20–60 min with turbo.
- **Known failure modes:** Whisper hallucinates text on silence and noise (keep VAD on), and outputs the wrong language if the first ~30 s are silence or English (force `pl`). Overlapping speech and diarization stay weak.
- **Privacy switches:** set `PYANNOTE_METRICS_ENABLED=0`, because pyannote 4.x sends usage telemetry by default. The diarization model needs a Hugging Face token for the first download only.
- **Effort:** 1–3 h of one-time setup (on Windows GPUs, ctranslate2 needs CUDA 12 plus cuDNN 9), then ~2–5 min hands-on per recording with a script.

**Into the vault:** plug in the recorder → a script copies new files (and joins DJI 31-minute splits with ffmpeg) → `whisperx --model large-v3 --language pl --diarize` → Markdown with frontmatter. With Pocket the same can run event-driven: a signed webhook on "transcript ready" → [[n8n]] → Markdown, or its Obsidian plugin.

⚠️ **Keep client transcripts out of the published garden.** This vault deploys to a public site ([[Brain]]). Meeting transcripts belong under `content/_raw/` (excluded from the build) or in a separate private vault, never in a topic folder.

## ⚖️ Recording legally in Poland

*General information compiled from the screening sources (Bezprawnik, Wolters Kluwer). Not legal advice, and not re-verified by a deep-research agent.*

- **Recording a conversation I take part in** is, on the prevailing reading, not a criminal offence: as a participant I'm entitled to the information exchanged.
- **Recording conversations I'm not part of**, for example leaving a recorder running after I walk out, falls under Art. 267 §3 of the Criminal Code (an eavesdropping device used to obtain information one isn't entitled to): a fine, restriction of liberty or up to 2 years in prison.
- **Using the recording is restricted separately.** Publishing or sharing it can infringe personal rights (dobra osobiste, Art. 23–24 of the Civil Code). In business, client voices and statements are personal data: GDPR requires a legal basis, an information notice to participants (Art. 13), and a data processing agreement with the cloud vendor (Art. 28), which most of these vendors don't offer.
- **In practice:** announce the recording at the start of each meeting, keep the recording LED visible, check client NDAs for recording clauses, and prefer local transcription for confidential meetings. Avoid features built for covert use.
- **EU AI Act:** Art. 5(1)(f) bans emotion recognition in the workplace (since 2 Feb 2025). It's unclear whether SwitchBot's "atmosphere" result comes from voice or text, so treat it with caution at work.

## 📖 Resources

- 📄 Full report: `_raw/processed/2026-10-02_2026-10-01-research-ai-voice-recorders-meetings.md` · workspace: `_raw/research-workspaces/ai-voice-recorders-meetings/`
- 📊 Polish ASR evidence: [AMU-CAI Polish ASR Leaderboard](https://huggingface.co/spaces/amu-cai/pl-asr-leaderboard) · [leaderboard intro](https://huggingface.co/blog/michaljunczyk/introducing-polish-asr-leaderboard) · [BIGOS V2 dataset](https://huggingface.co/datasets/amu-cai/pl-asr-bigos-v2) · [AGH clinical-conversation study (arXiv 2603.02246)](https://arxiv.org/abs/2603.02246)
- 🛠️ Local transcription: [faster-whisper](https://github.com/SYSTRAN/faster-whisper) (GPU benchmark: [issue #1030](https://github.com/SYSTRAN/faster-whisper/issues/1030)) · [WhisperX](https://github.com/m-bain/whisperX) · [noScribe](https://noscribe.de/en/)
- 🔌 HiDock community tools: [hidock-local](https://github.com/andre-wiedemann/hidock-local) · [midock](https://github.com/nhblock/midock) · [OpenHiNotes](https://github.com/ghecko/OpenHiNotes) · [hidock-mcp](https://github.com/kms254/hidock-mcp) · [HiDock P1 FAQ](https://www.hidock.com/blogs/user-guide/hidock-p1-faq)
- 🔌 Pocket: [docs](https://docs.heypocketai.com/docs) · [API](https://docs.heypocketai.com/docs/api) · [MCP](https://docs.heypocketai.com/docs/mcp) · [USB Web Sync](https://docs.heypocketai.com/docs/features/device/pocket-web-sync) · [obsidian-pocket](https://github.com/Maclean-D/obsidian-pocket) · [pocket-libre](https://github.com/shahcolate/pocket-libre) (format reverse-engineering)
- 🔌 Plaud: [MCP](https://docs.plaud.ai/plaud-mcp-cli/mcp.md) · [CLI](https://docs.plaud.ai/plaud-mcp-cli/cli.md) · [Plaud Sync for Obsidian](https://github.com/leonardsellem/plaud-sync-for-obsidian) (community)
- 🔌 SwitchBot: [MindClip API](https://github.com/OpenWonderLabs/SwitchBotAPI/blob/main/devices/others/ai-mindclip.md) · [OpenAPI CLI](https://github.com/OpenWonderLabs/switchbot-openapi-cli) · [EU product page](https://eu.switch-bot.com/products/switchbot-ai-mindclip)
- 🛒 BOYA: [Notra](https://www.boyamic.com/product/ai-voice-recorder-boya-notra) · [Notra vs Notra Neo](https://store.boyamic.com/blogs/news/boya-notra-vs-notra-neo-7-key-upgrades-compared)
- 📖 Related: [[Tactiq]] · [[TTS Engines Comparison (Polish)]] · [[Voicebox]] · [[Claude Video]] · [[Deep-Research-skills]]

---
Template: [[templates/knowledge_note_info]]
