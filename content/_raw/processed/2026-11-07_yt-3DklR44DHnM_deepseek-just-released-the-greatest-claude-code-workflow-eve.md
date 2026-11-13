---
video_id: 3DklR44DHnM
source_url: https://www.youtube.com/watch?v=3DklR44DHnM
title: "Deepseek Just Released The Greatest Claude Code Workflow Ever"
channel: "AI LABS"
uploader_id: "@AILABS-393"
duration: 856
duration_human: "14:16"
published: 2026-11-05
language: en-US
transcription: captions
chapters:
  - { start: 0, title: "Intro" }
  - { start: 39, title: "The Problem" }
  - { start: 94, title: "The Setup" }
  - { start: 162, title: "The Test" }
  - { start: 212, title: "Tickets" }
  - { start: 409, title: "Sponsor" }
  - { start: 464, title: "The Agents" }
  - { start: 607, title: "Building" }
  - { start: 762, title: "Results" }
tags: ["claude code workflow", "claude code workflows", "claude code advanced workflow", "what is workflows claude", "claude code", "how to code claude", "what is claude code", "claude ai automation workflow", "claude code cowork", "how claude code works", "claude code cloud", "claude code 4", "claude code mcp", "claude code gui", "claude code windows", "claude code news", "claude code memory", "claude code review", "claude code app", "claude", "deepseek", "ai coding", "deepseek super agent", "deepseek harness tutorial"]
categories: ["Science & Technology"]
fetched: 2026-11-07T17:44:02Z
---

# Deepseek Just Released The Greatest Claude Code Workflow Ever

[0:00] Deep Seek just released a new method
[0:02] called the super agent and it fixes the
[0:04] biggest problem with working in multiple
[0:06] Claude code sessions. The fix most
[0:07] people already use is what Deep Seek
[0:09] says causes the problem and they tested
[0:12] it to prove it. With their setup, their
[0:13] slowest tasks finished almost twice as
[0:16] fast as without it. So we set it up in
[0:18] Claude code ourselves and it built our
[0:20] features while only coming to us when it
[0:22] needed something. It even found and
[0:24] fixed a bug in our app without us
[0:25] telling it to. If this is your first
[0:27] time, we're a software company and this
[0:29] is our channel AI Labs. And in this
[0:31] video, we're going to go over what Deep
[0:33] Seek did and explain each step in detail
[0:36] so that you can also set it up for
[0:37] yourself. When we're building with
[0:39] Claude code, we usually work in multiple
[0:41] sessions, each one working on a
[0:43] different task. And to work with them,
[0:44] we have to keep switching between them
[0:46] to check what each one is doing.
[0:48] According to Deep Seek, that switching
[0:50] is exactly the problem. They said that a
[0:52] person can only keep track of about
[0:54] three to five sessions at once. After
[0:56] that, you start forgetting which session
[0:58] is doing what and you have to spend time
[1:00] figuring out what each one was doing.
[1:02] And they came up with super agent to fix
[1:04] exactly this. Instead of your usual way
[1:06] of working with multiple sessions, it
[1:08] lets you work with only one agent that
[1:10] you give all your tasks to. That way,
[1:12] you never have to remember which session
[1:14] is doing what. Now, the way they run it
[1:15] is as an agent that's always running in
[1:17] the cloud, which they can talk to
[1:19] through team chats and GitHub. But since
[1:21] we use Claude code for all our work, we
[1:23] took the same ideas and set them up in
[1:26] it. But before we move forward, it would
[1:28] be great if you subscribe to the channel
[1:30] and hit the like button. This small
[1:31] gesture of support goes a long way for
[1:33] us. Now, to build [snorts] such a setup
[1:35] where one agent handles all your tasks,
[1:38] Deep Seek first had to figure out how to
[1:40] split the tasks between agents. If every
[1:42] task goes through one single session,
[1:44] that session knows about every task. But
[1:46] it can only work on one task at a time
[1:48] and the details of all the tasks get
[1:50] mixed up. And if every task gets its own
[1:53] session, the tasks get done faster, but
[1:55] you're back to switching between them.
[1:56] So they split the work between two kinds
[1:59] of agents. The first is the router,
[2:01] which is basically the session you talk
[2:02] to. It's only job is to talk to you and
[2:05] hand out the tasks to other agents. The
[2:07] second kind is the workers, which are
[2:09] the agents that do the tasks, each one
[2:11] in its own context window, so the
[2:13] details of different tasks don't get
[2:15] mixed up. Once a worker finishes, it
[2:17] reports back to the router, and the
[2:19] router tells you how the task went. This
[2:21] might sound familiar, like a lead agent
[2:23] handing tasks to its sub-agents, but it
[2:25] works differently. A lead agent takes
[2:27] one task and breaks it into smaller
[2:29] steps for its sub-agents. And DeepSeek
[2:31] says that's a lot of work for the lead
[2:33] agent. The router agent in this case
[2:35] doesn't break a task into steps. It's
[2:37] only job is to keep track of what the
[2:39] workers are doing and hand them tasks.
[2:42] Now, you might think you don't need a
[2:43] setup like this and can just tell your
[2:45] regular Claude code session to hand
[2:47] tasks off to sub-agents. And that's
[2:49] exactly what DeepSeek thought, too. They
[2:51] ran a single session that could start
[2:53] sub-agents against their router and
[2:54] workers setup five times each. The
[2:56] router and workers setup came out on
[2:58] top. Its slowest task took 15.7 minutes,
[3:01] while the single session took 29.5
[3:04] minutes, almost twice as long. That's
[3:06] because the single session kept doing
[3:07] the work itself, so every new message
[3:09] interrupted it. Even when told to use
[3:12] sub-agents, it often didn't use them and
[3:14] kept doing the work on its own. But in
[3:16] their setup, the router didn't do any of
[3:18] the work, so nothing interrupted the
[3:19] workers. DeepSeek said that a single
[3:21] session is doing two jobs at once, which
[3:24] are talking to you and doing the work.
[3:26] That's why they split those two jobs.
[3:28] So, each agent can focus on their job
[3:29] better and perform much better. To set
[3:32] [snorts] this up yourself, you need a
[3:33] few things ready before you give it any
[3:35] tasks. Since the workers never talk to
[3:37] you, every job has to be written down
[3:39] clearly before the router hands it out,
[3:41] so no agent has to stop and ask you
[3:43] anything. That's why the first thing we
[3:45] set up was tickets. To do that, you can
[3:47] make a skill for writing tickets, which
[3:49] is kind of the same as the one we showed
[3:51] in our previous video. A ticket is
[3:53] basically one feature written down in
[3:55] full, so an agent can build it without
[3:57] asking you anything. The skill saves
[3:59] each ticket as its own folder with the
[4:01] feature's name and two files inside. The
[4:03] first one is rd.md, which says what the
[4:06] feature needs to do with all the
[4:07] details. The second one is eval.md,
[4:10] which is how the agent checks whether
[4:11] the work is done right. So, this file
[4:13] basically tells the agent if it's
[4:15] building the feature the right way. And
[4:17] the skill.md file holds all the steps
[4:19] the skill has to follow. It first splits
[4:21] your request into features, and then it
[4:23] asks you questions until nothing is
[4:25] unclear, so there's nothing left for the
[4:27] agent to ask you or guess. This is one
[4:29] of the most important steps because it
[4:31] makes each feature clear before any work
[4:33] starts. Once that's done, it puts each
[4:35] ticket in the tickets folder inside the
[4:37] specs folder with a number in front of
[4:39] each name, which is the ID of that
[4:41] ticket. To use it, you just run the
[4:43] skills command in whichever agent you're
[4:45] using and tell it what you want to
[4:47] build, and it turns what you asked for
[4:49] into tickets. In our case, we had a PRD
[4:52] file with all the features we'd planned
[4:54] for the app, so we asked it to turn
[4:55] those features into tickets, and it
[4:57] started working. It first asked us a
[4:59] bunch of questions, and then went
[5:01] through the app to see how the app
[5:02] worked. When it was done, it had made
[5:04] all the ticket folders. Each folder had
[5:06] an rd.md file, and every ticket started
[5:09] out as a draft. Inside, the file listed
[5:12] everything the feature had to do, the
[5:14] parts of the app the feature would
[5:15] change, and the parts it shouldn't
[5:17] touch. It also listed every choice that
[5:19] was made about the feature. Next to it,
[5:21] the eval.md file had how the checks
[5:24] would be run, along with the checks the
[5:25] feature has to pass to count as working.
[5:28] It also covered the unusual cases that
[5:30] could go wrong, and it ended with what
[5:32] done means for that feature, so the
[5:33] agent would know exactly when it was
[5:35] finished. In our case, it made 19
[5:37] tickets, along with a board.md file in
[5:40] the tickets folder. That file is
[5:42] basically a board that shows where each
[5:44] feature is, whether it's still a draft,
[5:46] ready to be built, or done. The board
[5:48] also has a mode column, and every ticket
[5:50] is set to either solo or team. Team
[5:52] means the agents working on that ticket
[5:55] will talk to each other because they're
[5:56] part of an agent team. Team mode uses
[5:58] Claude Code's agent teams feature, which
[6:00] is an experimental feature of Claude
[6:02] Code, and you can turn it on with the
[6:04] agent team setting in the settings.json
[6:07] file inside the dot Claude folder. And
[6:09] if you're using a different agent, you
[6:10] can just ask it to use sub-agents for
[6:12] team tickets instead. A solo ticket just
[6:15] goes to a sub-agent instead. The only
[6:17] difference is that sub-agents can't talk
[6:19] to each other the way the agents in a
[6:21] team can. So, features that don't need
[6:23] that kind of back and forth can run in
[6:24] solo mode. And the last column is runs,
[6:26] which says whether a ticket can run at
[6:28] the same time as the other tickets or
[6:30] has to wait for another one to finish.
[6:32] The tickets marked alongside are the
[6:34] ones that can run on their own. The rest
[6:36] have the number of the ticket they're
[6:37] waiting on along with the reason. So,
[6:39] whichever feature you want to build, you
[6:41] need to mark that feature as ready. It
[6:43] changes the status from draft to ready.
[6:45] And from there, it's ready to be picked
[6:47] up and built. But before we build these
[6:49] tickets, let's first have a word by our
[6:51] sponsor, Mobbin. Ask your coding agent
[6:53] to build a pricing page and you already
[6:55] know what turns up. You get the same
[6:57] gradient and the same three cards that
[6:59] every other AI app ships. That isn't the
[7:01] model being bad at design. It's the
[7:03] model working from memory with no idea
[7:05] how real products actually solved it.
[7:07] Mobbin fixes that. One command connects
[7:09] Mobbin to Claude code, and from then on
[7:11] the agent can search real screens from
[7:13] shipped apps before it builds anything.
[7:15] So, we asked it to design a paywall with
[7:17] Mobbin switched off, and we got the same
[7:19] generic layout you've seen on a hundred
[7:21] other AI apps. Then we connected Mobbin
[7:24] and ran the exact same prompt. This time
[7:26] it pulled actual paywalls from apps
[7:28] people use every day, looked at how they
[7:30] handle pricing and trust, and built
[7:32] something that could pass for a real
[7:34] product. The only thing that changed was
[7:36] what it had to look at. Stop shipping
[7:38] generic screens and get 20% off pro
[7:41] annual for your first year at
[7:42] mobbin.com/ailabs.
[7:44] The link's in the description. Once a
[7:46] ticket is marked ready, something has to
[7:48] hand it to an agent. And in Deep Seek's
[7:50] setup, that's the router. So, to hand
[7:52] out the ready tickets, we made an agent
[7:54] named router. This agent watches over
[7:56] the whole job, hands tasks to the right
[7:58] agents, and keeps them working together.
[8:00] But its instructions clearly tell it not
[8:02] to write anything because its whole job
[8:04] is running the other agents. We hold it
[8:06] back with instructions instead of taking
[8:08] its tools away. That's because teammates
[8:10] in Claude code get the same tools as the
[8:13] session that started them. So, if the
[8:15] router couldn't write, its team couldn't
[8:17] either. It uses the Opus model and we've
[8:19] set its effort to high because the
[8:20] router is the one starting all the other
[8:22] agents. Deep Seek does the opposite and
[8:25] runs its router on a lighter model
[8:27] because they found the router's job is
[8:28] simpler than you'd expect. Its
[8:30] instructions also have the details of
[8:32] every agent we have and what each one
[8:34] does. So, it knows who to hand each task
[8:37] to. And since the router checks the work
[8:38] itself, you don't have to. When a worker
[8:40] says it's done, the router opens its
[8:42] results and checks them against the
[8:44] ticket's eval.md. So, it only comes to
[8:47] you when there's a choice to make. And
[8:48] if a worker's result needs fixing, the
[8:50] router sends the fix back to that same
[8:53] worker, which still remembers everything
[8:54] about the ticket. It also follows a set
[8:56] list of steps where the first thing it
[8:58] does is start the watchdog. The watchdog
[9:00] is basically another agent we made that
[9:02] runs in the background and it uses
[9:04] Sonnet with medium effort. We also set
[9:06] it to shrink its memory once it reaches
[9:08] 150,000 tokens, which is way smaller
[9:11] than the full context window these
[9:13] models have. We did that because it
[9:14] doesn't need that much context window
[9:16] and we'll be just wasting our limit if
[9:18] we gave it the usual million context
[9:20] window. The watchdog's whole job is to
[9:22] watch the other agents so they don't get
[9:24] stuck in loops or go the wrong way. So,
[9:26] if an agent is taking too long on a task
[9:29] or an agent isn't working right, the
[9:30] watchdog catches it and tells the
[9:32] router. The router only hears about a
[9:34] problem when a worker tells it. So,
[9:36] without the watchdog, an agent that goes
[9:38] quiet would never get noticed. Every 10
[9:41] minutes, the watchdog runs a small
[9:42] script that lists any problems it finds.
[9:45] So, even if two agents get stuck waiting
[9:47] on each other, the watchdog catches it.
[9:49] So, the actual work goes to a worker
[9:51] agent, which takes one ticket and works
[9:53] on it. We set the worker to Sonnet
[9:55] instead of Opus because the ticket
[9:57] already spells out exactly what to build
[9:59] and Sonnet can handle that. That way,
[10:01] every sub-agent it starts doesn't eat
[10:03] into your usage and you don't hit your
[10:05] usage limit too soon. So, with the
[10:07] router, the watchdog, and the worker set
[10:09] up, we can start building. To do that,
[10:12] you just open Claude code with the
[10:13] router agent. You do that by typing
[10:15] Claude, then the agent flag followed by
[10:18] the router's name. You also need to set
[10:20] the permission mode to auto so that the
[10:22] router doesn't keep asking you for
[10:24] permission. When you run this command,
[10:25] the Claude code session opens, but it's
[10:27] running as the router agent we made. So,
[10:30] you just give it the ticket you want to
[10:31] start with by typing the ticket number
[10:33] in the prompt. And before anything else,
[10:35] it starts the watchdog, which runs in
[10:37] the background and watches each of the
[10:39] other agents. We started with the first
[10:41] ticket. Because it was a team ticket,
[10:43] the router started three agents, each
[10:45] one working on a different part of it.
[10:46] From there, the three agents work on
[10:48] their own unless they need you to make a
[10:50] choice. That's exactly what happened
[10:52] when one of our agents needed a choice
[10:54] from us. The router came to us with two
[10:56] options, and once we picked one, it
[10:58] passed our choice onto the agent so it
[11:00] could keep working. While they work, the
[11:02] agents write their notes on the ticket
[11:04] into that ticket's folder. That includes
[11:06] the contract, which is the plan the
[11:08] whole team agreed on, along with the
[11:10] results and the screenshots as proof.
[11:12] But each worker agent writes every
[11:14] change in its own separate work tree,
[11:16] which is basically a second copy of your
[11:18] project on its own branch. So, the code
[11:20] from every work tree needs to come
[11:22] together in one place, and that's where
[11:24] an agent called merger comes in. The
[11:26] merger does that by combining work from
[11:28] different work trees into the main
[11:30] branch of your project. So, when the
[11:31] team was done, the router started the
[11:33] merger. After that, it started an agent
[11:36] called checker, which checks the merged
[11:37] features. The checker tests those
[11:39] features in the browser to make sure
[11:41] they work properly. Once the first
[11:43] ticket was merged, the next tickets
[11:44] could start. The board said tickets
[11:46] number two and six were both waiting on
[11:48] the first ticket, and both were marked
[11:50] ready. So, the router picked those two
[11:52] up and gave each one its own worker
[11:54] agent. Then both of them started working
[11:56] at the same time. Besides that, we also
[11:58] have a few other agents that work on
[12:00] their own. The first one is the
[12:01] reproducer agent, which repeats the
[12:03] steps that caused a bug to see it happen
[12:05] again. If the fix is small and it can
[12:08] figure it out, it fixes it on its own
[12:10] branch. And if it can't, it gives you a
[12:11] report. There's also a tester agent that
[12:14] does the testing. It runs the browser
[12:15] tests with agent browser, which is
[12:17] Vercel's tool that lets an agent open
[12:20] your app in a real browser and click
[12:22] through it. The worker is the one that's
[12:23] meant to start it, and the tester tells
[12:25] the worker if anything is wrong. And
[12:27] while the tickets are being built, if
[12:29] any issues shows up that makes part of
[12:31] the app break, the reproducer agent
[12:33] steps in. First, it uses agent browser
[12:35] to find what's causing the issue and
[12:37] what could fix it. After that, it tests
[12:39] the fix in the browser to make sure it
[12:41] works, and then it tells the router.
[12:43] This [snorts] router and worker setup
[12:45] costs more than a single session. Every
[12:47] worker has its own context window, so
[12:49] running a few of them uses way more
[12:50] tokens than a single session would. Deep
[12:53] Seek saw the same thing in their test,
[12:54] and the extra tokens got them tasks that
[12:57] finish faster with fewer slow ones. In
[12:59] our run, the router was open for about
[13:01] an hour, and in that hour it built three
[13:03] tickets. The team ticket ran for 26
[13:05] minutes before we stopped it and merged
[13:07] it. Then the two solo tickets ran at the
[13:09] same time and took 11 and 17 minutes.
[13:12] But the main gain shows up in the
[13:13] quality of the app that was built and
[13:15] the less handling of multiple sessions.
[13:17] We didn't have to keep any context of
[13:19] what each agent was doing, and router
[13:21] was handling everything properly. All we
[13:23] had to do was to set features we want
[13:25] built to ready, and then leave it to
[13:27] work out the rest. There's one part we
[13:28] didn't build, which is that Deep Seek's
[13:30] version runs in the cloud, so it keeps
[13:33] working when your laptop goes to sleep.
[13:35] If you want to reach your setup from
[13:36] anywhere, you can use remote sessions,
[13:38] which let you control the Cloud Code
[13:40] Session on your computer from your phone
[13:42] or another browser. Or you can use an
[13:44] app like Paseo, which is free and open
[13:46] source and lets you check on your agents
[13:48] from your phone. Now, if you want to use
[13:50] the setup which we have created in this
[13:51] video, you can get that in AI Labs Pro,
[13:54] which is our community. So, if you found
[13:56] value in what we do and want to support
[13:59] the channel, this is the best way to do
[14:01] it. The link's in the description. That
[14:03] brings us to the end of this video. If
[14:05] you'd like to support the channel and
[14:06] help us keep making videos like this,
[14:08] you can do so by using the Super Thanks
[14:10] button below. As always, thank you for
[14:12] watching, and I'll see you in the next
[14:14] one.
