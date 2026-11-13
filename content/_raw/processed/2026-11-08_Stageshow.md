---
title: "Stageshow"
source: "https://benji.org/stageshow"
author:
published: 2001-10-31
created: 2026-11-08
description: "Create better faux UI with agents."
tags:
  - "clippings"
---
Stageshow is a skill that helps your agent make better faux UI.[^1] Most good models can do this now without a dedicated skill, but the results often look sloppy and heavy-handed, and that's the gap Stageshow is for.

DayWeekMonthGap26

DesignBuildShip

A

Frame104 × 84

dashboard.northwind.co

$13,160+19%

Neon HarborThe Vales0:043:12

QたWてEいRすTかYんUな

AちSとDしFはGきHくJま

ZつXさCそVひBこNみMも

FRI24

Made with Stageshow.

I've made a lot of these by hand, and they take far longer than they should. No single part is especially hard, but there are a hundred small decisions and every one of them shows. Stageshow is my attempt to write those decisions down, so an agent can make them too.

---

## Getting started

```bash
npx skills add benjitaylor/skills --skill stageshow
```

That adds the skill for any agent: Grok Build, Claude Code, Codex, Gemini, etc. Then ask for something small: one interaction, in one product, at one size.

```text
A small looping demo for our homepage hero: someone assigns an issue to a teammate.
```

The agent reads the skill, starts from the closest example, builds the demo, then films it and fixes what it finds. What you get is an ordinary React component, so you can put it anywhere and change it like the rest of your code.

It still may not nail it in one shot. The first pass is usually a big step up from what an agent makes on its own, but most demos still take me a few rounds of feedback.

fair warning

---

## What's in it

references/rehearse.md

references/bento.md

references/framing.md

references/craft.md

SKILL.mdThe one idea

It reads as a real product, simplified to what the viewer needs, framed with intent, and every motion has a cause.

Stagekit/

Acme CorpPublish

scripts/film.mjs pill 4px off centre fix

What the agent works with.

`SKILL.md`

What the agent reads first: the one idea, the five ways faux UI fails, a seven-step workflow, a table of the gold examples, the kit at a glance and a summary of framing.

`references/`

Craft (restraint, type, spacing, colour), motion (story, pace, the cursor), framing (crops, satellites, layouts), grids, looks and backgrounds, annotations, real products and brand marks, filming and the checklist, good and bad pairs side by side, and every kit part's props. Most rules came from reviewing real attempts, and each gives its reason.

`examples/`

Dozens of gold examples the agent starts from and holds its work against, from a hero demo and bento grids to a phone swipe and a dashboard paired with a lock screen.

`kit/`

A small set of React parts the agent can build with, plain code that lives with your demo. It makes the hard parts hold up; it doesn't supply a look. The stage, windows and phones drawn from real geometry, motion that has to survive frame by frame, and a few quiet parts to restyle.

`scripts/`

film.mjs films a demo, lays the frames on a contact sheet and reports what it can measure. jumps.mjs catches one-frame snaps a sheet misses, and layout.mjs checks that text and controls fit their boxes.

---

## The playground

The skill also comes with a playground. Run it from the skill's folder:

```bash
npm install
npm run dev
```

It has every example in the skill, the kit's parts on their own, and a set of comparisons: the same thing done badly and done well, side by side. They're there for the agent as much as for you. "Don't shrink the whole app into a card" is easy to agree with and easy to skip, but much harder to ignore once you see both side by side.

---

## What the skill teaches

The skill is built around one sentence:

It reads as a real product, simplified to what the viewer needs, framed with intent, and every motion has a cause.

the whole skill, really

Faux UI from agents tends to go wrong in the same few ways. The most common are *too much* (real words in every cell, packed tight), *too little* (a wireframe that doesn't read as a product) and *boxed* (the whole window shrunk into a card, like a pasted screenshot). Then there's *flat*, where everything has the same weight, and *bland*, where the brief's style never shows up.

Here's one demo going from the first to the last, the way the agent builds it: someone assigns a support conversation to Maya.

Support

Sam RiveraRefund #4821

1Screen2Frame3Script4Cursor5Loop

The whole screen in quiet greys, real words only where the story is. Correct, but boxed in like a screenshot.

Left to itself, an agent drifts toward the first. It knows what a support inbox contains, so it fills every row. The skill has it keep only the words the story needs and use placeholder lines for the rest, so the inbox still looks full without asking you to read it. It also decides the crop first, so it doesn't waste time building things nobody will see.

---

## How a demo is built

Every demo is a stage: a canvas with a design size. Its contents are drawn from state, and a script changes that state one beat at a time. The cursor is part of the stage, and it aims at things by name.

The code below, drawn out: the stage crops the window, the cursor aims at a name, the state flips, and each beat lights as it runs.

```tsx
async function script(a: Act<S>) {
  await a.click({ at: "share" }); // arcs there, presses
  await a.set({ open: true }); // resolves once painted
  await a.wait(2000); // the payoff holds
  await a.click({ at: "close" });
  await a.set({ open: false });
  await a.move({ x: 600, y: 300 }); // back where it began
}
```

Parts stay mounted while they transition, so they can move in and out instead of popping. Positions are measured, so the cursor lands in the right place and overlays line up at any size. And the kit handles the motion that's hard to get right by hand, like a number that rolls only the digits that changed, a card flying into a slot, or a message forming out of the text field.

There's also a camera, so a stage can push in on the important bit and pull back out. It sits on top of the scene, so you don't have to change the scene to use it.

status.northwind.co

**API** 99.2% uptime

Oct 14 · 41 min degraded

Forty days of uptime. The camera pushes in on the one bad day, then pulls back out.

A look is a theme, a palette and how many real words there are. They're props on the stage, and they work by swapping the kit's colours, so a scene is written once and every look follows.

Invoices

InvoicesNew invoice

Acme Corp$1,240.00Paid

Invoices

InvoicesNew invoice

Acme Corp$1,240.00Paid

One scene, written once. Light, dark, blueprint, then minimal, where the real words become lines.

A look can also come from your own design system. The kit's colours, type, radii and spacing are all design tokens, so the agent reads your product's tokens and maps them onto the kit's. The demo then uses your real colours, fonts and corner radii, and sits next to the actual product without looking like a mock-up of it.

---

## How the agent works

The skill gives the agent a workflow. Most of it happens before any code is written.

Stage

Send

Acme Corp

**1** **2** **3**

$1,240.00

decision

656 × 340, loops

steps

medium

look

story

example

screen

choreograph

rehearse

| Step | What gets decided |
| --- | --- |
| 1\. Medium | Still or animation, looping or playing once, where it sits on the page and at what size. |
| 2\. Look | Light, dark, blueprint or glass; one accent or mono; the chrome the product really has, and its real icons. |
| 3\. Story | How it feels to use, a flow through an app, or what the system does on its own. Then three to five beats. |
| 4\. Examples | The closest gold example, copied and made the brief's product: what is cropped, what straddles what, one gutter. |
| 5\. Screen | The few real strings, and placeholder lines for everything else. |
| 6\. Choreograph | Beats that overlap, groups that stagger, and a loop that ends exactly where it began. |
| 7\. Rehearse | Film it, read every frame, check it at phone width, watch the loop seam. Then hold it next to the closest gold example. |

---

## Why checks matter

Agents increasingly check their work, but usually by reading the code back or taking a screenshot once it has settled. Neither shows the motion in between, which is where the bugs often are: a pill that hops 4px on its way in, or one frame where everything has faded out. Stageshow has the agent film the demo instead, as a contact sheet of the whole sequence with a report that flags anything it can measure, and then watch the playback for what a report can't catch.

contact sheet

01

02

03

04

05

06

4px

**film.mjs** pill 4px off centre

A contact sheet the way film.mjs lays one out. The last frame is flagged, and the report says why.

---

## Making Stageshow

To test it, I'd give a fresh agent the skill and a short prompt, and nothing else. Then I'd give the same prompt to an agent without the skill, so I could compare the two side by side.

Whenever something looked off, I resisted fixing it myself. Instead, I'd write down what was wrong, update the skill, and run the whole round again from scratch. I did this a lot.

Below are some examples. Without Stageshow, even the best models go overboard. Sometimes the result is close, and one detail makes it look sloppy, like a clumsy cursor or a fake iOS status bar. Sometimes it's worse, with elements overlapping or out of line. With it, I get something much closer to what I'd make myself. It's opinionated, though, and a lot of it is just my taste.[^2]

A diagram for API docs

“A static illustration for Hookline's API docs, in blueprint style: how a webhook travels from Hookline's servers to a customer's endpoint, fails once, is retried, and is acknowledged.”

Without StageshowWith Stageshow

A dark bento grid

“A static dark bento grid of four tiles for Kanso, a project management app, for one dark section of its homepage. Greyscale, very little text, premium and quiet: one tile shows a piece of the app, the others a stat, an object and a small diagram.”

a diagram of blank boxesa pebble standing in for the product

An AI writing app

“An animated hero for Draftwell, an AI writing assistant that is a native Mac app: the user selects a paragraph, asks Draftwell to make it shorter, and the rewrite streams in and replaces the original. Loops.”

Without Stageshow <iframe src="https://benji.org/media/stageshow/pair-gdraft-without.html?m=5400&amp;h=480" title="An AI writing app, without Stageshow"></iframe>With Stageshow<iframe src="https://benji.org/media/stageshow/pair-gdraft-with.html?h=480" title="An AI writing app, with Stageshow"></iframe>

A spike on a dashboard

“An animated hero for Signalboard, a product analytics tool: a wide dashboard with several charts, something spikes on one chart, and the view pushes in on that chart to show the tooltip and an annotation explaining the spike, then eases back out. Loops.”

Without Stageshow <iframe src="https://benji.org/media/stageshow/pair-gspike-without.html?m=6000&amp;h=480" title="An analytics dashboard, without Stageshow"></iframe>With Stageshow<iframe src="https://benji.org/media/stageshow/pair-gspike-with.html?h=480" title="An analytics dashboard, with Stageshow"></iframe>

A message on iPhone

“An animated landing page demo for Hearth, a team chat app, on iPhone: a message arrives on the lock screen, the user taps it, Hearth opens to the conversation, and they send a quick reply. Crop the phone: it runs off the edge of the frame, never shown whole. Loops.”

Without Stageshow <iframe src="https://benji.org/media/stageshow/pair-ghearth-without.html?m=4800&amp;h=480" title="A team chat app, without Stageshow"></iframe>With Stageshow<iframe src="https://benji.org/media/stageshow/pair-ghearth-with.html?h=480" title="A team chat app, with Stageshow"></iframe>

A meeting across two screens

“An animated homepage section for Tandem, a scheduling tool: someone books a meeting in Tandem's web app on a laptop-sized window, and a moment later the invitee's phone shows the invitation and they accept it. Crop the phone so it runs off the edge of the frame, never shown whole. Loops.”

Without Stageshow <iframe src="https://benji.org/media/stageshow/pair-gtandem-without.html?m=4800&amp;h=480" title="A scheduling tool, without Stageshow"></iframe>With Stageshow<iframe src="https://benji.org/media/stageshow/pair-gtandem-with.html?h=480" title="A scheduling tool, with Stageshow"></iframe>

Rules alone only got so far. An agent told to run a window off the edge of the frame barely does it. Shown an example that does, it gets it right. So the skill ships with examples to copy from. Here's a tour, starting with the two things nearly every demo has: a window and a cursor.

---

## Windows

The window is usually the hero, so its chrome is the first thing that tells you what you're looking at. Put an address bar on a native Mac app and the whole picture reads as made up. There's no `kind` prop: the chrome follows from what you pass, and the traffic lights sit in exactly the same spot in every one.

trailhead.co/mount-tam

**Mount Tam loop** 7.2 mi

`url` A browser

Bread(1) Inbox

slowbread.co/sourdough

Sourdough, day two

`tabs` + `nav` A browser with tabs

wedding toast.txt

I'll keep this short.

`title` An app

Notes

Big SurFilm camera, sunscreen

`title` + `toolbar` An app with a toolbar

A browser, a browser with tabs, an app, and an app with a toolbar. The background tab gets a new email.

## Glass

For a product page there are lighter browsers too. Glass is frosted, so it takes the colour of whatever is behind it.

pay.juniperbakery.com

JJuniper Bakery

Pay invoice$48.00Due November 1ToBenji TaylorMemoTwo loaves a week

Pay $48.00

SummaryBread, October$48.00Total due$48.00

Inspired by Stripe.

## Quiet

The quiet browser (`chrome="card"`) is one white card under a long soft shadow, for when the rest of the page is already busy.

pay.foxdarkroom.com

FFox DarkroomDevelop and scan$36.00Total$36.00Pay $36.00

A checkout, centred in the card, running off the bottom.

## macOS 26

A product shown on the newest macOS gets the newer window: bigger lights, a floating sidebar and the tall toolbar.

Large lights, a floating sidebar and the tall toolbar, on glass. One invoice is picked.

---

## Cursors

A cursor should move like a hand: shallow arcs timed by distance, with presses you can see. Pick one style for a whole site, so every demo on a page points the same way, and the script doesn't change between them.

RealLargeCircleArrow

Four of the cursor styles: large, circle, arrow and real. You can also leave the cursor out, and the changes play on their own.

It also changes shape as it crosses into an element, like a real one would. Each element says which cursor it wants, so the script doesn't have to.

Publish

Launch

An I-beam over search, a hand on Publish, an open hand that closes as the card is dragged, a crosshair on the canvas.

---

## Hero demos

Then the demos themselves, all made with Stageshow, starting with hero demos: the big animated story at the top of a homepage.

dashboard.tally.com/subscriptions

NSubscriptions

MRR

SStudio KiteTeam+$99

BBenji TaylorPro+$49

NNorthwind Pro

$49per month

Subscribe

BBrightside Plus

$29per month

Subscribe

A customer subscribes, the price flies into the billing dashboard as a new row, and monthly revenue rolls up.

northwind.co/signup

Create your account

Email

you@company.com

Password

Create account

Welcome, Benji

Account created

A form fills itself in, the strength meter steps up, and the app opens.

Pipeline

Q3 revenue

+$48,000

Negotiation3

Acme

$48,000

Won2

9:41

Tuesday, October 21

9:41

Deal won: Acmenow$48,000 closed. Q3 is now at 86% of target.

A card moves to Won, revenue counts up, and the rep's phone lights up.

October 2026Today

Mon 19Tue 20Wed 21Thu 22Fri 23

9 AM10 AM11 AM12 PM1 PM2 PM3 PM

Roadmap sync1 – 3 PM

A meeting is dragged to Wednesday and the attendees confirm.

Invoice

due Oct 1

DescriptionQty

Cloud tokens

Pro plan  
Billed monthly

Tokens$0.01 per 1,000

VolumeGraduated

Tokens used, last 30 days

Sep 21Oct 21

An invoice rises in, a plan card links to it, usage bars grow, and a tier switch rolls the price. Slow and overlapping.

---

## Feature cards

Small cards that show one feature, for a grid of them.

Inbox

Benji TaylorLaunch notes for Thursday

9:41 AM

Snoozed until tomorrow, 8:00 AM

Plays on hover: an email is snoozed until tomorrow and the list closes up.

Assistant

Show an empty state before mapping.

TaskList.tsx+2−1Apply

14 const tasks = useTasks()

− return tasks.map(renderRow)

15+ if (!tasks.length) return \<Empty />

16+ return tasks.map(renderRow)

17}

A reply with a small diff you can apply.

Revenue

Last 14 days

$68,200

Oct 15Oct 28

A pointer scrubs along the revenue line, and the headline reads out each day.

app.ledger.io/invoices

CustomerAmountStatusDue

Halvorsen & Co$2,400.00PaidOct 2

Lumen Studio$1,200.00OpenOct 30

Tidepool$860.00OpenNov 4

Northwind Air$3,150.00OverdueOct 12

Kite Labs$540.00PaidOct 9

Total$8,150.00

An amount is corrected in place, and the total rolls to match.

Docs

## Launch plan

Pricing goes live on Thursday. Checkout opens in the US.

MayaJon

Two teammates in one doc, each in their own colour.

Calendar

Mon 20Tue 21Wed 22Thu 23Fri 24

9 AM10 AM11 AM12 PM1 PM2 PM

Design review

A card dragged across a calendar. The slot jumps from cell to cell instead of chasing it.

---

## Phones

Phones are driven by touch instead of a cursor, so the motion is different.

9:41

Warm up0:00

Start

A fitness app, driven by touch. The workout card opens into its screen as one object.

9:41

Northwind Air9:12Your trip to LisbonCheck-in opens 24 hours before departure. Your seat is 14A.

Jon Park8:30Re: pricing pageLooks good to me. One note on the annual toggle copy.

Swipe to archive. The row leaves at the speed the finger let go.

9:41

Yesterday

Did the new boots come?21:04

Yes! Breaking them in21:10

Today

Free this weekend?8:12

Should be, why?8:20

9:38

Lake walk Saturday?9:38

Message

Built from screenshots of Telegram. A reply forms out of the field, its clock turns to one tick, then two.

dashboard.northwind.co

Revenue

$12,604.80+12.4%

9:41

Tuesday, October 21

9:41

Payment receivednow$249.00 from Oak & Ivy

A dashboard with a phone straddling it. A still.

9:41

Saturday, October 25

9:41

8 min

Preparing8 min

Sam is your courier#2041

A delivery's Live Activity. The island springs between sizes, and a timer buds off it.

---

## Annotations

Sometimes a demo needs to point at something: what a point on a chart means, where an event went, which setting changed what. I try to keep these to a minimum, though. The product should still be the main thing, and each line should say one thing.

Bill to **Coast workspace**

Amount dueAwaiting usage

$0.00

API requests—

Storage—

Background jobs—

API calls **24.8k**

Storage **18.2 GB**

Jobs **312**

Connect

Three usage sources feed one invoice, and the dots keep flowing once it updates.

Endpointlocalhost:3000/hooks

Events

invoice.paid

server

**POST** /api/hooks invoice.paid · inv\_0084 **200** OK · 84ms

**POST** /api/hooks invoice.paid · inv\_0084 **200** OK · 84ms

POST 200

A test event goes out to the server, and the reply comes back to the button that sent it.

Pricing page

Pricing

Pro **$24 / month**

180 × 128

32

A card is stretched, and the size, the inspector and the spacing below all follow.

---

## Grids

Bento grids usually go wrong by treating every tile the same. Each one gets its own little window, and the section ends up reading as a wall of screenshots. Stageshow plans the grid as one picture instead: only a third to a half of the tiles show UI, window chrome appears once, and no tile sits next to another of the same kind.

**Every receipt, matched.** Snap it or forward it, and Kite finds the charge it belongs to.

Transactions

B Blue BottleNo receipt$18.40

Month-end close in daysdown from nine for the average team in its first quarter.

**A card for everyone.** Each with its own limit. No more reimbursements.

KiteBenji Taylor•••• 2207

**Approve in one tap.** Requests go straight to whoever owns the budget.

Jon ParkFigma, 3 seats$45

**Coded as it happens.** Every charge lands in the right account, no spreadsheet.

FigmaSlackNotion

6100Software

One window, a stat on the dark tile, a card as an object, one control and a diagram.

---

## Real products

Products you already know are the hardest test, because any wrong detail jumps out. Most of these started from a single sentence.

Linear. ⌘K, “assign”, Assign to me: the camera leans in as the avatar lands.

docs.google.com/document/d/1Qx4…/edit

100%Arial

Q4 launch plan

Beta opens to the waitlist in October. The public launch is planned for November 12, alongside the new pricing page.

Benji Taylor

10:42 AM Today

Comment or add others with @

Priya Shah

Just now

Works for me. I’ll update the timeline.

Google Docs. A sentence is highlighted, commented on, and answered in the margin.

Messages

J

R

M

Maya Chen10:42 AM

The new onboarding flow is ready for review. Can you take a look before standup?

👀1

B1 replyLast reply just now

✅👀🙌

Message #design

Slack. A message gets a reaction, then a reply that opens a thread beside the channel.

SuggestionsResults

Clipboard HistoryRaycastCommand

Use "clip" with...

Today

Ship the new onboarding on Thursday

#FF6363

Ship the new onboarding on Thursday

#FF6363

Information

Raycast. The launcher finds Clipboard History, and arrowing through it previews each entry.

Late Night Drive

#

1Low TideMarlo

2Neon HarborThe Vales

3

4

5

6

Spotify. A double-click moves playback to the next song.

Launch plan

Launch plan

Press ‘/’ for commands

To-do

Notion. A slash command makes a to-do, which gets ticked off.

calendar.google.com/calendar/u/0/r/week

GMT-07SUN18MON19TUE20WED21THU22FRI23SAT24

11 AM12 PM1 PM2 PM3 PM4 PM5 PM6 PM7 PM

(No title)

Add title

EventTask

Thursday, October 22·1:00pm – 1:30pm

More optionsSave

Event savedUndo

Google Calendar. An afternoon is dragged out and the event saved.

Finder on macOS 26. A folder opens in column view, and Space previews a photo.

AutoSaveQ3 Sales

HomeInsertDrawPage LayoutFormulasDataReviewViewAutomate

Paste

Aptos Narrow12BIU

General

ΣAutoSum

B2✕✓fx48200

A

B

C

D

E

F

G

H

I

J

K

1

Region

Q3 Sales

2

North

48,200

3

South

39,850

4

East

52,410

5

West

61,730

6

Metro

44,960

7

Web

37,040

8

Total

284,190

9

10

11

12

13

14

15

16

Q3 Sales by RegionTotal

020k40k60k80k

17%14%18%22%16%13%

NorthSouthEastWestMetroWeb

Excel. AutoSum totals a column, and the chart picks it up.

---

## Limitations

The checks catch mistakes, not dull ideas. A demo can pass every one and still not be worth watching, so you still have to look at it yourself.

It also can't draw, so anything that needs illustration or photography is better made by hand and dropped in.

demo 1

Acme Corp$1,240.00

1

shadow too harsh

craft.md

*61* ## Depth

*62* Satellites sit a

*63* level above.

*+* A long, soft fall,

*+* never a hard offset.

*66* One gutter.

*67* Crop only filler.

*68* Nothing pops.

every demo after

Most of the rules started as a note on a real demo, like "the shadow is too harsh" or "this title isn't centred." Once a note is in the skill, every demo after it gets it for free. You can do the same: when you correct a demo, ask the agent to add the note to the skill.

---

## For now

Model taste is getting better with every release, and I suspect a skill like this is only useful for a while, since much of what it teaches and includes could soon come built in.

Some of it already has. Early on in making this, the references had rules a newer model simply didn't need, like keeping the traffic lights the right size, and as the models improved those rules quietly stopped doing anything.

Others have held up across every model I've tried, mostly the ones about framing and motion. Models are perfectly capable of getting those right, but they don't seem to know that they matter until something tells them.

Until then, it helps, and every demo made with it is a small, well-built example of this kind of UI, which is the sort of thing models learn from. If it plays a small part in making itself unnecessary, that's fine by me.

If you want to give it a go:

```bash
npx skills add benjitaylor/skills --skill stageshow
```

[^1]: The products shown in the demos, along with their names, logos and interfaces, belong to their owners. The demos are illustrations made for this post and aren't affiliated with or endorsed by them.

[^2]: Taste sounds mysterious, but most of it is small decisions made over and over until you know which ones hold up. That's why it can be written down. It also means Stageshow is my taste, not a neutral one.