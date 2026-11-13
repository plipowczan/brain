---
video_id: of628n5754g
source_url: https://www.youtube.com/watch?v=of628n5754g
title: "Head Of Design At X's New Claude Skill Is Insane"
channel: "AI LABS"
uploader_id: "@AILABS-393"
duration: 736
duration_human: "12:16"
published: 2026-11-07
language: en-US
transcription: captions
chapters:
  - { start: 0, title: "Intro" }
  - { start: 55, title: "Why Screenshots Fail" }
  - { start: 127, title: "5 Demo Mistakes" }
  - { start: 172, title: "What Stage Show Is" }
  - { start: 256, title: "The 7 Steps" }
  - { start: 476, title: "Installing Stage Show" }
  - { start: 560, title: "The Playground" }
  - { start: 603, title: "Testing on a Real App" }
tags: ["claude skills", "claude skill", "what are claude skills", "skills claude", "claude skills 2.0", "best claude skills", "free claude skills", "top claude skills", "skill claude", "new claude skills", "skills do claude", "custom claude skills", "github claude skills", "build claude skills", "claude skills nedir", "claude skills guide", "skills for claude", "claude skills setup", "claude skills tutorial", "how to use claude skills", "claude skills explained", "claude skills examples", "claude skills linkedin"]
categories: ["Science & Technology"]
fetched: 2026-11-08T12:42:00Z
---

# Head Of Design At X's New Claude Skill Is Insane

[0:00] Benji Taylor, the head of design at X,
[0:02] has given out his own way of working as
[0:04] a skill called Stage Show. His team is
[0:06] behind the new X web app, and Stage Show
[0:08] is the process he uses to make the
[0:10] product demos you see on landing pages.
[0:13] It goes after the biggest problem AI
[0:15] agents have when they design, which is
[0:16] that they don't have taste. But Stage
[0:18] Show isn't just a list of rules like
[0:20] most skills. It gives your agent his
[0:22] whole design process to follow
[0:24] step-by-step. And one of those steps
[0:26] works in a way that no other design
[0:28] skill does. If this is your first time,
[0:30] we're a software company, and this is
[0:32] our channel, AI Labs. And in this video,
[0:35] we're going to show you how Benji's
[0:36] design process works, how to set up
[0:38] Stage Show, and how to use it on your
[0:40] own app. Before we get into the skill
[0:42] itself, we need to take a closer look at
[0:44] the problem it solves so that you can
[0:46] understand why it's needed in the first
[0:48] place. If you want to go straight to the
[0:50] skill, you can skip ahead to the next
[0:52] section using the timestamps in the
[0:53] description below. The most important
[0:55] page for your app is your landing page.
[0:57] This is because it gives an inside look
[0:59] at what your app actually does. And
[1:01] looking at it is what makes people
[1:03] decide if they want to sign up or not.
[1:05] And to give people a teaser of what to
[1:07] expect inside the app, a lot of people
[1:09] take a screenshot of the app and drop it
[1:11] into the landing page. But a screenshot
[1:13] on a landing page looks too simple and
[1:15] doesn't hook the people you want to show
[1:17] it to. And the reason is that it looks
[1:19] too cluttered. A screenshot gives
[1:20] someone a lot of information to look at,
[1:22] so they just skip over it instead of
[1:24] looking at it the way you meant them to.
[1:26] The other way of doing that is asking
[1:28] Claude code to make an animated demo of
[1:30] your app instead. But Benji says the
[1:32] demos you get back often come out clunky
[1:34] and overdone. The animations aren't
[1:36] smooth, and sometimes what's happening
[1:38] on screen doesn't even make sense.
[1:40] That's because when you ask for a demo,
[1:42] Claude usually just draws a picture of
[1:44] your app in code and animates it. But
[1:45] the picture is a generic version of your
[1:48] app, and most of the time it isn't even
[1:49] close to how your real app looks. Claude
[1:51] makes it look like something that fits
[1:53] on a landing page, not something that
[1:55] actually looks good there. Now, Benji
[1:56] says the best models can already make
[1:58] these demos, and sometimes what they
[2:00] make is pretty close, but there's
[2:01] usually some small detail that gives it
[2:03] away and makes the whole thing look
[2:05] sloppy. And he's named the five ways
[2:07] these demos go wrong. The first one he
[2:09] calls bland, and it's the one we run
[2:11] into the most. So basically, you ask for
[2:13] a certain style, but when the demo comes
[2:15] back, that style just isn't there. The
[2:17] second one is too much. This is when the
[2:19] agent cramps text and numbers into every
[2:21] part of the screen. So just like with
[2:23] the screenshot, people don't know where
[2:25] to look. The third one is the opposite
[2:26] of that, which is the wireframe. Here
[2:28] the agent strips everything down to a
[2:30] few gray boxes, so it doesn't even look
[2:33] like your app anymore. Then there's
[2:34] boxed, which is when your whole app gets
[2:36] shrunk down and stuck inside a card. And
[2:39] the last one is flat, where everything
[2:40] on the screen looks the same, so nothing
[2:42] really stands out. But before we move on
[2:44] to the solution, it would be great if
[2:46] you subscribe to the channel and hit the
[2:48] hype button. This small gesture of
[2:50] support goes a long way for us. The
[2:52] reason Claude gets these demos wrong is
[2:54] that it doesn't know how a good demo is
[2:56] made, but Benji does because he's made a
[2:58] lot of these demos himself. He says no
[3:00] single part of a demo is hard to make,
[3:02] but every demo has a hundred small
[3:04] decisions in it, and every one of those
[3:06] decisions shows up on screen. Claude
[3:08] knows roughly what an app looks like, so
[3:10] it draws something that fits, but you
[3:12] have to keep giving it those decisions
[3:14] over and over to get that level of
[3:16] output. So Benji wrote down all the
[3:18] decisions he makes when he's working on
[3:20] one of these demos, and he put them in a
[3:21] skill and named it stage show. That way
[3:23] your agent can make the same decisions,
[3:25] too. He says taste sounds mysterious,
[3:28] but most of taste is just small
[3:29] decisions you make over and over until
[3:31] you know which ones work. That's why he
[3:33] wrote his taste down, which means this
[3:35] skill is basically his design process.
[3:37] So he doesn't have to explain his taste
[3:39] to the agent again and again. The agent
[3:40] can just work things out from the rules
[3:42] in the skill. But this skill doesn't
[3:44] take your real app and put it on your
[3:46] landing page. Instead, the skill builds
[3:48] a stripped-down working copy of one of
[3:50] your app screens made only for the demo.
[3:52] Only a few words in that copy are real.
[3:54] The demo then plays a short planned-out
[3:56] story on that copy, where a drawn-in
[3:58] cursor clicks a button and a new item
[4:00] slides onto the screen. What you end up
[4:02] with is a new section on your landing
[4:04] page that shows what your app does. The
[4:06] skill doesn't build the rest of the
[4:08] design on the site for you because it
[4:09] only knows how to build the animated
[4:11] demo. It builds on top of the style that
[4:14] you already have on your site. Now,
[4:16] before we install this skill, let's
[4:17] first understand how this skill works.
[4:19] Every feature in it is basically one
[4:21] step of Benji's design process and there
[4:24] are seven of these steps. Most of these
[4:25] steps are about planning. So, the agent
[4:28] works out the whole demo first and only
[4:30] then starts building it. The process
[4:32] starts with where the demo goes on your
[4:34] page. The agent works out whether the
[4:36] demo should be a still picture or an
[4:38] animation and how big it should be. The
[4:40] agent also makes a separate version of
[4:42] the demo for phones. It treats the phone
[4:44] and the desktop as two different screens
[4:46] while most agents just shrink the same
[4:48] design down to fit. And because the
[4:50] phone version is designed for the phone,
[4:52] it looks like it was made for that
[4:53] screen on purpose. Once the agent knows
[4:55] where the demo goes, it decides how the
[4:57] demo looks. This is where the agent
[4:59] reads your app's colors and fonts and
[5:01] even how round your corners are. That's
[5:03] what makes the demo look like your
[5:05] product and not like a template. Next,
[5:07] the agent plans the story. Every demo
[5:09] shows one action split into three to
[5:11] five small moments that play out in 10
[5:14] to 16 seconds. When it comes down to
[5:16] adding more to the story or keeping the
[5:18] screen simple, Benji always chooses to
[5:20] keep it simple. But a plan is still just
[5:22] words. So, the next step is to start
[5:24] from a real example. Stage Show comes
[5:26] with about 40 of Benji's own demos and
[5:28] the agent copies closest to what you
[5:31] asked for. That's because Benji found
[5:33] that rules on their own only got him so
[5:35] far. And the agent did a lot better when
[5:37] it had a real example to copy. Once it
[5:39] has a demo to start from, the agent
[5:41] fills in the screen. It uses only three
[5:43] to seven real words on the whole screen
[5:46] and everything else becomes bars that
[5:47] stand in for text. That's how the agent
[5:49] avoids the too much problem from earlier
[5:52] where every row is full of text. After
[5:54] that comes the motion and here every
[5:56] movement on screen needs a reason. The
[5:58] cursor moves in a curve like a real hand
[6:00] would and each part slides into place
[6:02] instead of popping in. The demo also
[6:04] plays on repeat, but its last moment
[6:06] matches its first, so you never see it
[6:08] restart. The last step is for the agent
[6:11] to check its own work, and no other
[6:13] design skill does this quite like this
[6:15] one. Normally, when an agent checks what
[6:17] it built, it either reads its code back
[6:19] or takes a screenshot once everything
[6:21] has stopped moving. But neither of those
[6:23] shows the motion in between, and Benji
[6:25] says that's where the problems usually
[6:27] are. Benji's examples are a button that
[6:29] jumps slightly as it slides in, or one
[6:31] split second where everything fades out
[6:34] together. So, Stage Show records the
[6:35] demo as it plays and lines up every
[6:38] moment of it side by side on one sheet.
[6:40] A small program then checks that sheet
[6:42] for text that doesn't fit its box, or
[6:44] anything that jumps from one moment to
[6:46] the next. The agent fixes the biggest
[6:48] problem first and records the demo
[6:50] again, and the agent can't hand the demo
[6:52] over to you until that check passes. But
[6:54] the check has a limit, and Benji says so
[6:56] himself. The check catches mistakes, but
[6:58] it can't tell you if the idea behind the
[7:00] demo is boring, so you still have to
[7:02] watch the demo yourself. we install it,
[7:04] let's have a word by our sponsor,
[7:06] OpenArt. You finish building something,
[7:08] and then you need a video to show it
[7:10] off, so you go and find another tool,
[7:12] learn its interface, and start dragging
[7:14] files between browser tabs. OpenArt puts
[7:17] the whole catalog of image and video
[7:19] models inside your coding agent. It's
[7:21] one URL and a sign-in with no API keys
[7:24] to manage. So, we stayed in Claude code
[7:26] and asked for a short promo for the app
[7:28] we had just built. It looked at which
[7:30] models were available, picked one, and
[7:32] used smart shot to lay the video out
[7:34] shot by shot. We read that plan before a
[7:36] single frame was made, changed the shot
[7:38] we did not like, and told it to carry
[7:40] on. It generated each one and handed
[7:42] back a video we could play without
[7:44] leaving the editor. Everything lands in
[7:46] your OpenArt library, and new models
[7:48] show up on their own, so you're never
[7:50] editing a config to get the latest one.
[7:52] Go and check out OpenArt, the link's in
[7:54] the pinned comment. Now, [snorts] to use
[7:56] this skill and see how it looks when
[7:58] it's built into an actual app, you need
[7:59] to install it first. To install this
[8:01] skill, you can go to their GitHub or
[8:03] their website, where you can copy the
[8:05] install command. Once you've copied it,
[8:07] you can run it in the terminal that's
[8:09] open in your project. When you run this
[8:11] command, it asks you which agent you
[8:13] want to install it for. By default, it
[8:15] installs for most of them because it
[8:17] puts everything in the .agents folder,
[8:19] which a lot of agents like Codex already
[8:21] use. But, if you want to install it for
[8:23] a specific agent, you can just scroll
[8:25] through the list and select that one as
[8:27] well. Then, you have to decide whether
[8:28] you want to install it only in the
[8:30] project you're working on or for every
[8:32] project on your computer. We install it
[8:34] only in the project we're working on
[8:36] because that way the instructions stay
[8:38] in the folder where we need them. Then,
[8:39] you just go through the rest of the
[8:41] steps and the skill gets installed. When
[8:43] you open your project, you'll see the
[8:44] skill in your folder. Inside that
[8:46] folder, you'll find the skill.md file,
[8:49] which explains what the skill does and
[8:51] how to use all the resources that come
[8:53] with it. It includes a set of icons that
[8:55] are commonly used in apps along with
[8:57] some reference files that explain how to
[8:59] use each part of the skill. For example,
[9:01] there's a reference for Bento grids,
[9:03] which are those grids of different sized
[9:04] boxes you see on landing pages. It has
[9:07] rules that make a Bento grid look good
[9:09] and intentional, and it also has
[9:11] examples of the styles that get used
[9:13] most. And it has a playground that lets
[9:15] you view all the examples this skill
[9:17] contains, so you can see how they're
[9:19] actually built. Once you've installed
[9:21] the skill, you can just ask Claude to
[9:23] open the Stage Show playground. It loads
[9:25] all the instructions, runs the
[9:26] playground server, and opens it for you
[9:28] to view. You can look through the list
[9:30] of scenes in the playground and see the
[9:31] motion each one uses. You can also see
[9:34] how each one looks on both phone and
[9:36] desktop. On a phone, the scenes are
[9:38] properly rearranged for the smaller
[9:40] screen rather than just being made
[9:41] smaller to fit it. The playground also
[9:44] has demos of well-known products like
[9:46] Notion, Excel, and Google's apps along
[9:48] with some ready-made parts you can build
[9:50] your own demos with. You can also check
[9:52] the reduced motion version, which is the
[9:54] still version people see when they've
[9:55] turned off animations on their device.
[9:57] That way, you can make sure the demo
[9:59] still shows people what your app does
[10:01] even when nothing in it is moving. So,
[10:03] in order [snorts] to test this out, we
[10:05] built a demo music studio app that
[10:07] basically lets you create music beats.
[10:09] We gave Claude a prompt to build the app
[10:11] and it built the whole thing properly.
[10:12] But as we talked about earlier, the
[10:14] usual way Claude builds animations is by
[10:16] drawing pictures in code and adding them
[10:19] to the design. These drawings do look
[10:20] animated, but they're not very good.
[10:22] They just have some made-up animations
[10:24] that look forced rather than showing how
[10:26] the real app would look. So what you
[10:28] need to do is open whichever agent
[10:30] you're using and use this skill to fix
[10:32] the design. You need to call the skill
[10:33] with its {slash} command and its name.
[10:35] Then you prompt it to add animations
[10:37] across the site wherever they're needed.
[10:39] The agent starts by loading the skill
[10:41] and its reference files along with
[10:43] everything it needs to understand how
[10:45] your app is built. Then it starts
[10:46] building new sections based on how
[10:48] things are built and how they look in
[10:50] your app. Once it has built a section on
[10:52] its own, it adds that section to your
[10:54] landing page. Once the section is added,
[10:56] the agent checks the animation by
[10:58] recording it. Then it goes through that
[10:59] recording frame by frame to see if it
[11:01] works exactly as intended. When it's
[11:03] done, it also writes a file called
[11:05] rehearsal.md
[11:07] next to the demo, which is basically its
[11:09] handover note to you. It lists which of
[11:11] Benji's demos it started from, what it
[11:13] changed, and what it checked. The agent
[11:15] also added small pieces from inside the
[11:18] app to the features grid on the landing
[11:20] page. The mixer and the beat arrangement
[11:22] both went in there and it added
[11:23] animations to all of them as well. This
[11:26] made the design look much better
[11:28] compared to the first version, which it
[11:29] made without any visual direction. But
[11:32] the demo won't always be perfect on the
[11:34] first try and Benji says even his own
[11:36] demos usually take a few rounds of
[11:38] feedback. So when something looks off,
[11:40] you tell the agent what's wrong in plain
[11:42] words and the agent fixes the problem.
[11:44] Then you can ask the agent to add what
[11:46] you told it to the skill, so the next
[11:48] demo doesn't have the same problem. Now
[11:50] all the skills and workflows that we
[11:51] build and show you in all our videos are
[11:53] available in AI Labs Pro, which is our
[11:56] community. So if you found value in what
[11:58] we do and want to support the channel,
[12:00] this is the best way to do it. The
[12:01] link's in the description. That brings
[12:03] us to the end of this video. If you'd
[12:05] like to support the channel and help us
[12:07] making keep making videos like this, you
[12:08] can do so by using the Super Thanks
[12:10] button below. As always, thank you for
[12:12] watching and I'll see you in the next
[12:14] one.
