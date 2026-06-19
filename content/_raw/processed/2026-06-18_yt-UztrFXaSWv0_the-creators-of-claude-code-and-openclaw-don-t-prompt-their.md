---
video_id: UztrFXaSWv0
source_url: https://www.youtube.com/watch?v=UztrFXaSWv0
title: "The Creators of Claude Code and OpenClaw don't Prompt Their Agents Anymore?!"
channel: "Cole Medin"
uploader_id: "@ColeMedin"
duration: 1479
duration_human: "24:39"
published: 2026-06-18
language: en
transcription: captions
chapters:
  - { start: 0, title: "The Loop Engineering Buzzword" }
  - { start: 102, title: "The Core Concept of Loops" }
  - { start: 352, title: "Downsides and Token Costs" }
  - { start: 514, title: "Deterministic Workflows with Archon" }
  - { start: 798, title: "Orchestrating Parallel Coding Agents" }
  - { start: 1049, title: "My Pi Loop Engineering Dashboard" }
  - { start: 1271, title: "Deploying Control Systems to Production" }
  - { start: 1438, title: "Outro" }
tags: ["ai", "artificial intelligence", "ai agents", "software engineering", "software development", "coding", "automation", "saas", "development", "loop engineering", "boris cherney", "peter steinberger", "claude", "claude code", "claude loops", "ai coding", "ai coding guide", "ai coding loops", "agentic engineering", "ai coding assistants", "vibe coding", "retool", "neon", "archon", "ai coding workflows", "claude code routines", "claude code /loop", "/loop", "claude code guide"]
categories: ["Science & Technology"]
fetched: 2026-06-18T08:58:25Z
---

# The Creators of Claude Code and OpenClaw don't Prompt Their Agents Anymore?!

[0:01] Apparently, we're not even supposed to
[0:01] Apparently, we're not even supposed to be prompting our AI coding assistants
[0:03] be prompting our AI coding assistants
[0:03] be prompting our AI coding assistants anymore. The real skill is designing
[0:05] anymore. The real skill is designing
[0:06] anymore. The real skill is designing loops that prompt your agents so they
[0:07] loops that prompt your agents so they
[0:07] loops that prompt your agents so they work for you 24/7. And I got to say, I
[0:10] work for you 24/7. And I got to say, I
[0:10] work for you 24/7. And I got to say, I am not sold on this idea right now. It
[0:13] am not sold on this idea right now. It
[0:13] am not sold on this idea right now. It feels like some of the bigger players in
[0:15] feels like some of the bigger players in
[0:15] feels like some of the bigger players in the AI space like Peter Steinberger, the
[0:17] the AI space like Peter Steinberger, the
[0:17] the AI space like Peter Steinberger, the creator of open claw, Boris Cherney is
[0:19] creator of open claw, Boris Cherney is
[0:19] creator of open claw, Boris Cherney is doing this as well, the lead at Claude
[0:21] doing this as well, the lead at Claude
[0:21] doing this as well, the lead at Claude code. They're pushing this new fad
[0:23] code. They're pushing this new fad
[0:23] code. They're pushing this new fad whether they like it or not of loop
[0:25] whether they like it or not of loop
[0:25] whether they like it or not of loop engineering. It's becoming the next
[0:27] engineering. It's becoming the next
[0:27] engineering. It's becoming the next buzzword and I promise I'm not going to
[0:29] buzzword and I promise I'm not going to
[0:29] buzzword and I promise I'm not going to be hyping up loop engineering here.
[0:31] be hyping up loop engineering here.
[0:31] be hyping up loop engineering here. There are some good lessons to be
[0:33] There are some good lessons to be
[0:33] There are some good lessons to be learned from what's surfacing, but also
[0:35] learned from what's surfacing, but also
[0:35] learned from what's surfacing, but also with loops and you probably seen this
[0:37] with loops and you probably seen this
[0:37] with loops and you probably seen this with dynamic workflows in Claude code
[0:39] with dynamic workflows in Claude code
[0:39] with dynamic workflows in Claude code for example, they're not always the most
[0:40] for example, they're not always the most
[0:40] for example, they're not always the most reliable and they are extremely token
[0:43] reliable and they are extremely token
[0:43] reliable and they are extremely token hungry. So unless you have an infinite
[0:45] hungry. So unless you have an infinite
[0:45] hungry. So unless you have an infinite budget like Peter pretty much, then you
[0:48] budget like Peter pretty much, then you
[0:48] budget like Peter pretty much, then you have to be really careful with these
[0:49] have to be really careful with these
[0:49] have to be really careful with these kinds of systems. They're not always
[0:52] kinds of systems. They're not always
[0:52] kinds of systems. They're not always practical. And so that's what I want to
[0:54] practical. And so that's what I want to
[0:54] practical. And so that's what I want to cover with you in this video. I just
[0:55] cover with you in this video. I just
[0:56] cover with you in this video. I just want to get really honest and really
[0:57] want to get really honest and really
[0:57] want to get really honest and really practical with you. We're going to cover
[0:58] practical with you. We're going to cover
[0:58] practical with you. We're going to cover three things. We're going to cover loops
[1:00] three things. We're going to cover loops
[1:00] three things. We're going to cover loops in a really simple sense. It's not
[1:02] in a really simple sense. It's not
[1:02] in a really simple sense. It's not actually that complicated. So I want to
[1:04] actually that complicated. So I want to
[1:04] actually that complicated. So I want to show you how you can run these and then
[1:05] show you how you can run these and then
[1:05] show you how you can run these and then I want to talk about the trade-offs and
[1:07] I want to talk about the trade-offs and
[1:07] I want to talk about the trade-offs and then solutions to that. So really nice
[1:09] then solutions to that. So really nice
[1:09] then solutions to that. So really nice and structured here. And so as far as
[1:11] and structured here. And so as far as
[1:11] and structured here. And so as far as some of the solutions we'll get into
[1:12] some of the solutions we'll get into
[1:12] some of the solutions we'll get into towards the end of the video, I want to
[1:14] towards the end of the video, I want to
[1:14] towards the end of the video, I want to show you how we can build a system where
[1:16] show you how we can build a system where
[1:16] show you how we can build a system where we can really observe the loops, the
[1:18] we can really observe the loops, the
[1:18] we can really observe the loops, the orchestrators and the workers, how we
[1:20] orchestrators and the workers, how we
[1:20] orchestrators and the workers, how we can optimize for cost with the workflows
[1:22] can optimize for cost with the workflows
[1:22] can optimize for cost with the workflows we build and using different providers
[1:24] we build and using different providers
[1:24] we build and using different providers like Pi. And so it really it's like
[1:26] like Pi. And so it really it's like
[1:26] like Pi. And so it really it's like here's how you can run loops. Here are
[1:27] here's how you can run loops. Here are
[1:28] here's how you can run loops. Here are the downsides. Here is how we can solve
[1:29] the downsides. Here is how we can solve
[1:29] the downsides. Here is how we can solve for them and really get to the point
[1:31] for them and really get to the point
[1:31] for them and really get to the point where we're building harnesses for these
[1:33] where we're building harnesses for these
[1:34] where we're building harnesses for these longer running tasks because it is
[1:35] longer running tasks because it is
[1:35] longer running tasks because it is really powerful for certain things, but
[1:38] really powerful for certain things, but
[1:38] really powerful for certain things, but then also covering the honest trade-offs
[1:40] then also covering the honest trade-offs
[1:40] then also covering the honest trade-offs with it. Okay, so we saw what Peter
[1:41] with it. Okay, so we saw what Peter
[1:41] with it. Okay, so we saw what Peter said. Now let's take a look at what
[1:43] said. Now let's take a look at what
[1:43] said. Now let's take a look at what Boris, the creator of Claude code, said
[1:45] Boris, the creator of Claude code, said
[1:45] Boris, the creator of Claude code, said and it is really similar. He said, "I
[1:47] and it is really similar. He said, "I
[1:47] and it is really similar. He said, "I don't prompt Claude anymore. I write
[1:49] don't prompt Claude anymore. I write
[1:49] don't prompt Claude anymore. I write loops and the loops do the work. My job
[1:51] loops and the loops do the work. My job
[1:51] loops and the loops do the work. My job is to write loops." Okay, Boris, I think
[1:54] is to write loops." Okay, Boris, I think
[1:54] is to write loops." Okay, Boris, I think we get it. And like I said, loop
[1:56] we get it. And like I said, loop
[1:56] we get it. And like I said, loop engineering is kind of a buzzword, but
[1:58] engineering is kind of a buzzword, but
[1:58] engineering is kind of a buzzword, but also there are some really good
[1:59] also there are some really good
[1:59] also there are some really good takeaways when you dive into this. So
[2:01] takeaways when you dive into this. So
[2:01] takeaways when you dive into this. So like Boris through a lot of like
[2:02] like Boris through a lot of like
[2:02] like Boris through a lot of like interviews and podcasts has shared his
[2:05] interviews and podcasts has shared his
[2:05] interviews and podcasts has shared his workflow. We can get glimpses into how
[2:06] workflow. We can get glimpses into how
[2:06] workflow. We can get glimpses into how it works. A [clears throat] lot of it is
[2:08] it works. A [clears throat] lot of it is
[2:08] it works. A [clears throat] lot of it is built around the newer features in
[2:10] built around the newer features in
[2:10] built around the newer features in Claude Code. Like {slash} loop is the
[2:12] Claude Code. Like {slash} loop is the
[2:12] Claude Code. Like {slash} loop is the most basic example. And I told you we're
[2:14] most basic example. And I told you we're
[2:14] most basic example. And I told you we're going to simplify things here. Loop
[2:15] going to simplify things here. Loop
[2:15] going to simplify things here. Loop engineering is really not that
[2:17] engineering is really not that
[2:17] engineering is really not that complicated. I don't even know if it
[2:18] complicated. I don't even know if it
[2:18] complicated. I don't even know if it deserves its own term. And so with
[2:21] deserves its own term. And so with
[2:21] deserves its own term. And so with {slash} loop we set an interval for
[2:23] {slash} loop we set an interval for
[2:23] {slash} loop we set an interval for running a prompt. So like for example,
[2:24] running a prompt. So like for example,
[2:24] running a prompt. So like for example, every 5 minutes I'm going to check for
[2:27] every 5 minutes I'm going to check for
[2:27] every 5 minutes I'm going to check for new GitHub issues in this repo and
[2:30] new GitHub issues in this repo and
[2:30] new GitHub issues in this repo and handle any that come in. So it's pretty
[2:32] handle any that come in. So it's pretty
[2:32] handle any that come in. So it's pretty neat. We set up Claude to basically wake
[2:34] neat. We set up Claude to basically wake
[2:34] neat. We set up Claude to basically wake itself up every 5 minutes and of course
[2:36] itself up every 5 minutes and of course
[2:36] itself up every 5 minutes and of course you can adjust this and it's going to
[2:38] you can adjust this and it's going to
[2:38] you can adjust this and it's going to look for input in an external system
[2:40] look for input in an external system
[2:40] look for input in an external system like GitHub for example. And so as long
[2:43] like GitHub for example. And so as long
[2:43] like GitHub for example. And so as long as our terminal is up and running with
[2:45] as our terminal is up and running with
[2:45] as our terminal is up and running with Claude Code, it's able to autonomously
[2:47] Claude Code, it's able to autonomously
[2:47] Claude Code, it's able to autonomously handle this. So basically it's a every
[2:49] handle this. So basically it's a every
[2:49] handle this. So basically it's a every 5-minute loop looking at GitHub issues.
[2:52] 5-minute loop looking at GitHub issues.
[2:52] 5-minute loop looking at GitHub issues. There's also {slash} goal that we have
[2:54] There's also {slash} goal that we have
[2:54] There's also {slash} goal that we have in Claude Code and Codex. So we set some
[2:56] in Claude Code and Codex. So we set some
[2:56] in Claude Code and Codex. So we set some criteria like here is how you know you
[2:59] criteria like here is how you know you
[2:59] criteria like here is how you know you are done and then we're forcing the
[3:00] are done and then we're forcing the
[3:00] are done and then we're forcing the coding agent to work until it is done.
[3:03] coding agent to work until it is done.
[3:03] coding agent to work until it is done. Kind of like Ralph loops that went viral
[3:05] Kind of like Ralph loops that went viral
[3:05] Kind of like Ralph loops that went viral a few months ago.
[3:06] a few months ago.
[3:07] a few months ago. And then last we have {slash} routines.
[3:08] And then last we have {slash} routines.
[3:08] And then last we have {slash} routines. And so these are the scheduled jobs.
[3:10] And so these are the scheduled jobs.
[3:10] And so these are the scheduled jobs. Like every hour I want you to wake up,
[3:12] Like every hour I want you to wake up,
[3:12] Like every hour I want you to wake up, look at some larger spec document and
[3:14] look at some larger spec document and
[3:14] look at some larger spec document and then handle the next task. And so really
[3:17] then handle the next task. And so really
[3:17] then handle the next task. And so really loop engineering is combining or
[3:19] loop engineering is combining or
[3:19] loop engineering is combining or creating a system around all of these
[3:20] creating a system around all of these
[3:21] creating a system around all of these things. Routines, {slash} loop so that
[3:23] things. Routines, {slash} loop so that
[3:23] things. Routines, {slash} loop so that we can give a larger scope of work as
[3:26] we can give a larger scope of work as
[3:26] we can give a larger scope of work as input to an AI coding assistant and have
[3:28] input to an AI coding assistant and have
[3:28] input to an AI coding assistant and have it work through it incrementally, right?
[3:30] it work through it incrementally, right?
[3:30] it work through it incrementally, right? Cuz we never want to have a coding agent
[3:32] Cuz we never want to have a coding agent
[3:32] Cuz we never want to have a coding agent try to handle too much at once or it
[3:34] try to handle too much at once or it
[3:34] try to handle too much at once or it will get completely overwhelmed. And the
[3:36] will get completely overwhelmed. And the
[3:36] will get completely overwhelmed. And the main idea with loop engineering is we
[3:38] main idea with loop engineering is we
[3:38] main idea with loop engineering is we want to have some main orchestrator
[3:40] want to have some main orchestrator
[3:40] want to have some main orchestrator agent that we talk to. We do minimal
[3:41] agent that we talk to. We do minimal
[3:41] agent that we talk to. We do minimal prompting, just telling it what we want
[3:43] prompting, just telling it what we want
[3:43] prompting, just telling it what we want at a high level and it figures out how
[3:45] at a high level and it figures out how
[3:45] at a high level and it figures out how to set up the loop and the entire
[3:47] to set up the loop and the entire
[3:47] to set up the loop and the entire system. And it's really easy to do this
[3:49] system. And it's really easy to do this
[3:50] system. And it's really easy to do this in Claude Code. This is really cool. You
[3:52] in Claude Code. This is really cool. You
[3:52] in Claude Code. This is really cool. You just tell it to use the loop skill. So,
[3:54] just tell it to use the loop skill. So,
[3:54] just tell it to use the loop skill. So, there's a capability built right into
[3:56] there's a capability built right into
[3:56] there's a capability built right into the tool where it knows how to set up
[3:58] the tool where it knows how to set up
[3:58] the tool where it knows how to set up these loop systems based on what we ask
[3:59] these loop systems based on what we ask
[3:59] these loop systems based on what we ask it to do. So, I passed in some kind of
[4:01] it to do. So, I passed in some kind of
[4:01] it to do. So, I passed in some kind of simple spec document here like I just
[4:03] simple spec document here like I just
[4:03] simple spec document here like I just have this as an example. These are the
[4:05] have this as an example. These are the
[4:05] have this as an example. These are the tasks that we want it to go through
[4:06] tasks that we want it to go through
[4:06] tasks that we want it to go through incrementally. And so, my prompt is
[4:08] incrementally. And so, my prompt is
[4:08] incrementally. And so, my prompt is telling it to load the skill so it knows
[4:10] telling it to load the skill so it knows
[4:10] telling it to load the skill so it knows how to set up the loop. And then every
[4:12] how to set up the loop. And then every
[4:12] how to set up the loop. And then every cycle it's just going to do the first
[4:13] cycle it's just going to do the first
[4:13] cycle it's just going to do the first unchecked task, do the validation, and
[4:16] unchecked task, do the validation, and
[4:16] unchecked task, do the validation, and then that loop is done. And then on the
[4:17] then that loop is done. And then on the
[4:17] then that loop is done. And then on the next loop, it'll go through and do the
[4:19] next loop, it'll go through and do the
[4:19] next loop, it'll go through and do the next task. And so, eventually all the
[4:21] next task. And so, eventually all the
[4:21] next task. And so, eventually all the tasks will be complete and then our
[4:23] tasks will be complete and then our
[4:23] tasks will be complete and then our primary Claude code session here that
[4:25] primary Claude code session here that
[4:25] primary Claude code session here that set up everything is going to report
[4:27] set up everything is going to report
[4:27] set up everything is going to report back to us, right? So, like right here
[4:29] back to us, right? So, like right here
[4:29] back to us, right? So, like right here Claude code is sort of the orchestrator,
[4:31] Claude code is sort of the orchestrator,
[4:31] Claude code is sort of the orchestrator, but then also the workers cuz it sets up
[4:34] but then also the workers cuz it sets up
[4:34] but then also the workers cuz it sets up the loop itself. But, it is really cool
[4:36] the loop itself. But, it is really cool
[4:36] the loop itself. But, it is really cool to watch this run. So, I'll send off a
[4:37] to watch this run. So, I'll send off a
[4:37] to watch this run. So, I'll send off a request here and I'll wait for it to run
[4:40] request here and I'll wait for it to run
[4:40] request here and I'll wait for it to run a little bit. I'll come back and show
[4:41] a little bit. I'll come back and show
[4:41] a little bit. I'll come back and show you kind of how it works. But, you can
[4:43] you kind of how it works. But, you can
[4:43] you kind of how it works. But, you can see that it loads the loop skill as the
[4:45] see that it loads the loop skill as the
[4:45] see that it loads the loop skill as the very first thing. So, it knows how to
[4:46] very first thing. So, it knows how to
[4:46] very first thing. So, it knows how to orchestrate things and it'll do the
[4:48] orchestrate things and it'll do the
[4:48] orchestrate things and it'll do the {slash} loop by itself that I just
[4:50] {slash} loop by itself that I just
[4:50] {slash} loop by itself that I just showed how you can do manually. Okay, so
[4:52] showed how you can do manually. Okay, so
[4:52] showed how you can do manually. Okay, so I came back a couple of minutes later
[4:54] I came back a couple of minutes later
[4:54] I came back a couple of minutes later and it's already done with the first two
[4:55] and it's already done with the first two
[4:55] and it's already done with the first two tasks. So, it's gone through two
[4:57] tasks. So, it's gone through two
[4:57] tasks. So, it's gone through two iterations of the loop already. And so,
[4:59] iterations of the loop already. And so,
[4:59] iterations of the loop already. And so, if we go up to the top, we can see that
[5:01] if we go up to the top, we can see that
[5:01] if we go up to the top, we can see that it says this is a sequential task list.
[5:03] it says this is a sequential task list.
[5:03] it says this is a sequential task list. It's going to do the first task and then
[5:04] It's going to do the first task and then
[5:04] It's going to do the first task and then it's going to schedule a quick wake up.
[5:06] it's going to schedule a quick wake up.
[5:06] it's going to schedule a quick wake up. So, it sets up the {slash} loop by
[5:08] So, it sets up the {slash} loop by
[5:08] So, it sets up the {slash} loop by itself. And if we scroll down a little
[5:10] itself. And if we scroll down a little
[5:10] itself. And if we scroll down a little bit after it does and validates the
[5:12] bit after it does and validates the
[5:12] bit after it does and validates the first task, we can see that it's
[5:14] first task, we can see that it's
[5:14] first task, we can see that it's resuming with a {slash} loop wake up.
[5:16] resuming with a {slash} loop wake up.
[5:16] resuming with a {slash} loop wake up. And look at that. I didn't write this
[5:18] And look at that. I didn't write this
[5:18] And look at that. I didn't write this prompt myself at all. I know this is a
[5:20] prompt myself at all. I know this is a
[5:20] prompt myself at all. I know this is a very, very basic example, but I want to
[5:22] very, very basic example, but I want to
[5:22] very, very basic example, but I want to stay simple on purpose, but it wrote the
[5:25] stay simple on purpose, but it wrote the
[5:25] stay simple on purpose, but it wrote the prompt. {slash} loop work through
[5:26] prompt. {slash} loop work through
[5:26] prompt. {slash} loop work through plan.md one task at a time. And so, the
[5:30] plan.md one task at a time. And so, the
[5:30] plan.md one task at a time. And so, the kinds of systems that Boris is building
[5:32] kinds of systems that Boris is building
[5:32] kinds of systems that Boris is building is obviously going to be a lot more
[5:33] is obviously going to be a lot more
[5:33] is obviously going to be a lot more elaborate with how we're telling it to
[5:35] elaborate with how we're telling it to
[5:35] elaborate with how we're telling it to run the looping and building in routines
[5:37] run the looping and building in routines
[5:37] run the looping and building in routines and describing how we want it to prompt
[5:39] and describing how we want it to prompt
[5:39] and describing how we want it to prompt and work through our context, but at the
[5:41] and work through our context, but at the
[5:41] and work through our context, but at the basic sense, this is really all it
[5:43] basic sense, this is really all it
[5:43] basic sense, this is really all it takes. And so, now it's just going to
[5:45] takes. And so, now it's just going to
[5:45] takes. And so, now it's just going to keep knocking things out one at a time.
[5:48] keep knocking things out one at a time.
[5:48] keep knocking things out one at a time. So, that is loop engineering in the most
[5:50] So, that is loop engineering in the most
[5:50] So, that is loop engineering in the most basic form possible. But, now I want to
[5:53] basic form possible. But, now I want to
[5:53] basic form possible. But, now I want to get into some of the downsides here,
[5:55] get into some of the downsides here,
[5:55] get into some of the downsides here, which some of them are definitely pretty
[5:57] which some of them are definitely pretty
[5:57] which some of them are definitely pretty obvious to you already. Problem number
[6:00] obvious to you already. Problem number
[6:00] obvious to you already. Problem number one, there is no way you're going to
[6:01] one, there is no way you're going to
[6:01] one, there is no way you're going to convince me that loop engineering is the
[6:03] convince me that loop engineering is the
[6:03] convince me that loop engineering is the way to get the best results possible
[6:05] way to get the best results possible
[6:05] way to get the best results possible with AI coding assistance. I mean, come
[6:08] with AI coding assistance. I mean, come
[6:08] with AI coding assistance. I mean, come on, this has to be a hyperbole here.
[6:09] on, this has to be a hyperbole here.
[6:09] on, this has to be a hyperbole here. Boris Journey says that their AI Daisy
[6:11] Boris Journey says that their AI Daisy
[6:11] Boris Journey says that their AI Daisy manages tens of thousands of AI agents
[6:14] manages tens of thousands of AI agents
[6:14] manages tens of thousands of AI agents at once. Like, really? Is is that
[6:16] at once. Like, really? Is is that
[6:16] at once. Like, really? Is is that actually practical? Is that going to
[6:18] actually practical? Is that going to
[6:18] actually practical? Is that going to scale? Like, are you really building
[6:20] scale? Like, are you really building
[6:20] scale? Like, are you really building Claude code with tens of thousands of
[6:22] Claude code with tens of thousands of
[6:22] Claude code with tens of thousands of agents per day? I mean, maybe that does
[6:24] agents per day? I mean, maybe that does
[6:24] agents per day? I mean, maybe that does explain some of the bugs we have in
[6:25] explain some of the bugs we have in
[6:25] explain some of the bugs we have in Claude code. I feel like there's
[6:27] Claude code. I feel like there's
[6:27] Claude code. I feel like there's constantly a couple annoying ones. But,
[6:29] constantly a couple annoying ones. But,
[6:29] constantly a couple annoying ones. But, yeah, overall, I I like building these
[6:30] yeah, overall, I I like building these
[6:30] yeah, overall, I I like building these kinds of loops, if we make it a very
[6:32] kinds of loops, if we make it a very
[6:32] kinds of loops, if we make it a very tight controlled system, that's what
[6:34] tight controlled system, that's what
[6:34] tight controlled system, that's what I'll talk about in a little bit, I think
[6:36] I'll talk about in a little bit, I think
[6:36] I'll talk about in a little bit, I think it's good. And for building proof of
[6:37] it's good. And for building proof of
[6:37] it's good. And for building proof of concepts and exploring ideas, like I
[6:39] concepts and exploring ideas, like I
[6:39] concepts and exploring ideas, like I think it's really good. But, it's not
[6:42] think it's really good. But, it's not
[6:42] think it's really good. But, it's not like I want to drive all my AI coding
[6:44] like I want to drive all my AI coding
[6:44] like I want to drive all my AI coding with them. And then the second big
[6:45] with them. And then the second big
[6:46] with them. And then the second big problem is cost, because with loop
[6:47] problem is cost, because with loop
[6:48] problem is cost, because with loop engineering, we're relying on some kind
[6:49] engineering, we're relying on some kind
[6:49] engineering, we're relying on some kind of orchestrator to set up the system and
[6:52] of orchestrator to set up the system and
[6:52] of orchestrator to set up the system and really determine how to get to the end
[6:54] really determine how to get to the end
[6:54] really determine how to get to the end goal. So, it figures out how many
[6:56] goal. So, it figures out how many
[6:56] goal. So, it figures out how many workers to spin off, how many loops to
[6:57] workers to spin off, how many loops to
[6:57] workers to spin off, how many loops to do, and that gets super expensive. So,
[7:00] do, and that gets super expensive. So,
[7:00] do, and that gets super expensive. So, the dashboard that I built, that I'll
[7:02] the dashboard that I built, that I'll
[7:02] the dashboard that I built, that I'll show you at the end of this video, I
[7:03] show you at the end of this video, I
[7:03] show you at the end of this video, I built cost tracking into it. And so, for
[7:05] built cost tracking into it. And so, for
[7:06] built cost tracking into it. And so, for a single run, like here are all the
[7:07] a single run, like here are all the
[7:07] a single run, like here are all the loops that the orchestrator went
[7:08] loops that the orchestrator went
[7:08] loops that the orchestrator went through, it costed me over a million
[7:10] through, it costed me over a million
[7:10] through, it costed me over a million tokens just to build a relatively simple
[7:13] tokens just to build a relatively simple
[7:13] tokens just to build a relatively simple application. And yes, I'm sure there are
[7:15] application. And yes, I'm sure there are
[7:15] application. And yes, I'm sure there are a lot of optimizations that I can do
[7:17] a lot of optimizations that I can do
[7:17] a lot of optimizations that I can do here. But, I think you can see just by
[7:19] here. But, I think you can see just by
[7:19] here. But, I think you can see just by looking at this, I mean, this is part
[7:21] looking at this, I mean, this is part
[7:21] looking at this, I mean, this is part part of why I built the dashboard, you
[7:22] part of why I built the dashboard, you
[7:22] part of why I built the dashboard, you can see why it would be so expensive.
[7:25] can see why it would be so expensive.
[7:25] can see why it would be so expensive. Because we send in our initial spec to
[7:26] Because we send in our initial spec to
[7:27] Because we send in our initial spec to the orchestrator, and it has to reason
[7:29] the orchestrator, and it has to reason
[7:29] the orchestrator, and it has to reason about that and then figure out how many
[7:30] about that and then figure out how many
[7:30] about that and then figure out how many workers to spin off, then it has to
[7:32] workers to spin off, then it has to
[7:32] workers to spin off, then it has to prompt them all,
[7:33] prompt them all,
[7:33] prompt them all, and they each spend tokens, and then the
[7:35] and they each spend tokens, and then the
[7:35] and they each spend tokens, and then the results come back, the orchestrator has
[7:37] results come back, the orchestrator has
[7:37] results come back, the orchestrator has to then reason about that again, and
[7:38] to then reason about that again, and
[7:38] to then reason about that again, and then send off the next wave. No matter
[7:40] then send off the next wave. No matter
[7:40] then send off the next wave. No matter how you design the system, there's a lot
[7:43] how you design the system, there's a lot
[7:43] how you design the system, there's a lot of context passing and reasoning to make
[7:45] of context passing and reasoning to make
[7:45] of context passing and reasoning to make everything work here in a distributed
[7:47] everything work here in a distributed
[7:47] everything work here in a distributed way. So, it's a really powerful system
[7:49] way. So, it's a really powerful system
[7:50] way. So, it's a really powerful system and it's cool how far you can take this
[7:52] and it's cool how far you can take this
[7:52] and it's cool how far you can take this kind of stuff with the self-validation.
[7:54] kind of stuff with the self-validation.
[7:54] kind of stuff with the self-validation. But, man, does it get so expensive. And
[7:57] But, man, does it get so expensive. And
[7:57] But, man, does it get so expensive. And then really quick, the third problem
[7:59] then really quick, the third problem
[7:59] then really quick, the third problem with loop engineering is at least for a
[8:00] with loop engineering is at least for a
[8:01] with loop engineering is at least for a lot of setups, you're not really working
[8:03] lot of setups, you're not really working
[8:03] lot of setups, you're not really working between different coding agent sessions.
[8:05] between different coding agent sessions.
[8:05] between different coding agent sessions. Like when you're just using slash loop
[8:06] Like when you're just using slash loop
[8:06] Like when you're just using slash loop in Claude code like Boris talks about a
[8:08] in Claude code like Boris talks about a
[8:08] in Claude code like Boris talks about a lot, it's really just continuing in the
[8:11] lot, it's really just continuing in the
[8:11] lot, it's really just continuing in the same coding agent session. So, if you
[8:13] same coding agent session. So, if you
[8:13] same coding agent session. So, if you loop for a while, you're going to
[8:14] loop for a while, you're going to
[8:14] loop for a while, you're going to completely bloat your context for your
[8:17] completely bloat your context for your
[8:17] completely bloat your context for your LLM and overwhelm it. And so, we need a
[8:19] LLM and overwhelm it. And so, we need a
[8:19] LLM and overwhelm it. And so, we need a system where we can distribute the work
[8:22] system where we can distribute the work
[8:22] system where we can distribute the work actually between different coding agent
[8:24] actually between different coding agent
[8:25] actually between different coding agent sessions and make it so they can all
[8:27] sessions and make it so they can all
[8:27] sessions and make it so they can all communicate to each other and have an
[8:28] communicate to each other and have an
[8:28] communicate to each other and have an idea of like where they fit in the
[8:30] idea of like where they fit in the
[8:30] idea of like where they fit in the larger goal. And so, that's what I want
[8:33] larger goal. And so, that's what I want
[8:33] larger goal. And so, that's what I want to cover for the rest of the video here.
[8:35] to cover for the rest of the video here.
[8:35] to cover for the rest of the video here. So, I want to talk about how I actually
[8:37] So, I want to talk about how I actually
[8:37] So, I want to talk about how I actually work on a day-to-day basis because this
[8:39] work on a day-to-day basis because this
[8:39] work on a day-to-day basis because this will cover how we can solve for a lot of
[8:41] will cover how we can solve for a lot of
[8:41] will cover how we can solve for a lot of these problems we have with loop
[8:42] these problems we have with loop
[8:42] these problems we have with loop engineering. So, I use my tool Arkon,
[8:45] engineering. So, I use my tool Arkon,
[8:45] engineering. So, I use my tool Arkon, but I'm not just trying to like push
[8:46] but I'm not just trying to like push
[8:46] but I'm not just trying to like push Arkon on you here. I just want to talk
[8:48] Arkon on you here. I just want to talk
[8:48] Arkon on you here. I just want to talk about how I use it in a way that solves
[8:51] about how I use it in a way that solves
[8:51] about how I use it in a way that solves for the problems of cost, reliability,
[8:54] for the problems of cost, reliability,
[8:54] for the problems of cost, reliability, and how do we actually orchestrate many
[8:56] and how do we actually orchestrate many
[8:56] and how do we actually orchestrate many different coding agent sessions. And so,
[8:59] different coding agent sessions. And so,
[8:59] different coding agent sessions. And so, go through this with me here. So, Arkon
[9:01] go through this with me here. So, Arkon
[9:01] go through this with me here. So, Arkon is my harness builder. It allows us to
[9:03] is my harness builder. It allows us to
[9:03] is my harness builder. It allows us to build workflows that orchestrate many
[9:06] build workflows that orchestrate many
[9:06] build workflows that orchestrate many coding agent sessions to handle larger
[9:08] coding agent sessions to handle larger
[9:08] coding agent sessions to handle larger tasks. And so, for example, a really
[9:11] tasks. And so, for example, a really
[9:11] tasks. And so, for example, a really classic AI coding workflow is you do
[9:13] classic AI coding workflow is you do
[9:13] classic AI coding workflow is you do your planning, you do your
[9:14] your planning, you do your
[9:14] your planning, you do your implementation, and then you do your
[9:16] implementation, and then you do your
[9:17] implementation, and then you do your code review or your testing. And so, we
[9:19] code review or your testing. And so, we
[9:19] code review or your testing. And so, we can build this as a single Arkon
[9:21] can build this as a single Arkon
[9:21] can build this as a single Arkon workflow. There's a ton of content that
[9:23] workflow. There's a ton of content that
[9:23] workflow. There's a ton of content that I have on Arkon on my channel. I'll link
[9:24] I have on Arkon on my channel. I'll link
[9:25] I have on Arkon on my channel. I'll link to a video right here to help you get
[9:26] to a video right here to help you get
[9:26] to a video right here to help you get started if you're interested in this.
[9:28] started if you're interested in this.
[9:28] started if you're interested in this. But again, I just want to focus on like
[9:29] But again, I just want to focus on like
[9:29] But again, I just want to focus on like how I use this on a day-to-day basis to
[9:33] how I use this on a day-to-day basis to
[9:33] how I use this on a day-to-day basis to kind of do loops. Like you can do loop
[9:35] kind of do loops. Like you can do loop
[9:35] kind of do loops. Like you can do loop engineering with Arkon. You can build a
[9:36] engineering with Arkon. You can build a
[9:36] engineering with Arkon. You can build a Ralph loop with Arkon.
[9:39] Ralph loop with Arkon.
[9:39] Ralph loop with Arkon. So, I'll show you an example of a
[9:40] So, I'll show you an example of a
[9:40] So, I'll show you an example of a workflow here. If I go into the default
[9:42] workflow here. If I go into the default
[9:42] workflow here. If I go into the default workflows, there's a ton that we have
[9:44] workflows, there's a ton that we have
[9:44] workflows, there's a ton that we have that ship with Arkon. Let's take a look
[9:46] that ship with Arkon. Let's take a look
[9:46] that ship with Arkon. Let's take a look at fix GitHub issue, for example. And
[9:49] at fix GitHub issue, for example. And
[9:49] at fix GitHub issue, for example. And so, I don't want to get too in the weeds
[9:50] so, I don't want to get too in the weeds
[9:50] so, I don't want to get too in the weeds here, but I just want to show you really
[9:51] here, but I just want to show you really
[9:51] here, but I just want to show you really quickly at a high level how this
[9:53] quickly at a high level how this
[9:53] quickly at a high level how this workflow works. And another really
[9:55] workflow works. And another really
[9:55] workflow works. And another really important thing with Arkon is that we're
[9:57] important thing with Arkon is that we're
[9:57] important thing with Arkon is that we're not having the agent drive the entire
[10:00] not having the agent drive the entire
[10:00] not having the agent drive the entire thing. It's more deterministic because
[10:02] thing. It's more deterministic because
[10:02] thing. It's more deterministic because we set up the process in this workflow
[10:04] we set up the process in this workflow
[10:04] we set up the process in this workflow file, and then we even have certain
[10:06] file, and then we even have certain
[10:06] file, and then we even have certain steps that are deterministic. Like the
[10:08] steps that are deterministic. Like the
[10:08] steps that are deterministic. Like the agent is not driving it, we are
[10:10] agent is not driving it, we are
[10:10] agent is not driving it, we are guaranteeing that it's going to happen.
[10:12] guaranteeing that it's going to happen.
[10:12] guaranteeing that it's going to happen. So, when we're building these loops and
[10:14] So, when we're building these loops and
[10:14] So, when we're building these loops and larger tasks that we have our coding
[10:16] larger tasks that we have our coding
[10:16] larger tasks that we have our coding agent knock out, we want to actually
[10:18] agent knock out, we want to actually
[10:18] agent knock out, we want to actually take the decision away from the coding
[10:20] take the decision away from the coding
[10:20] take the decision away from the coding agent as much as we can, only applying
[10:22] agent as much as we can, only applying
[10:22] agent as much as we can, only applying the reasoning of the LLM when we
[10:24] the reasoning of the LLM when we
[10:24] the reasoning of the LLM when we actually need it to write the code, for
[10:25] actually need it to write the code, for
[10:25] actually need it to write the code, for example. Like we might want our agent to
[10:27] example. Like we might want our agent to
[10:27] example. Like we might want our agent to write the code, but not actually decide
[10:29] write the code, but not actually decide
[10:29] write the code, but not actually decide the tests to run because we know what it
[10:31] the tests to run because we know what it
[10:31] the tests to run because we know what it looks like for our tests to pass.
[10:33] looks like for our tests to pass.
[10:33] looks like for our tests to pass. And so, for this workflow, first we
[10:35] And so, for this workflow, first we
[10:35] And so, for this workflow, first we extract the issue number. So, the input
[10:37] extract the issue number. So, the input
[10:37] extract the issue number. So, the input here is some GitHub issue that we want
[10:39] here is some GitHub issue that we want
[10:39] here is some GitHub issue that we want to fix or address. So, we extract the
[10:41] to fix or address. So, we extract the
[10:41] to fix or address. So, we extract the context, we fetch the issue context, and
[10:45] context, we fetch the issue context, and
[10:45] context, we fetch the issue context, and then we classify it. So, we have a large
[10:47] then we classify it. So, we have a large
[10:47] then we classify it. So, we have a large language model decide at first, are we
[10:49] language model decide at first, are we
[10:49] language model decide at first, are we addressing a bug or are we implementing
[10:51] addressing a bug or are we implementing
[10:51] addressing a bug or are we implementing a new feature? And then the workflow is
[10:54] a new feature? And then the workflow is
[10:54] a new feature? And then the workflow is going to be dynamic based on that
[10:56] going to be dynamic based on that
[10:56] going to be dynamic based on that decision. So, the kind of thing that
[10:57] decision. So, the kind of thing that
[10:57] decision. So, the kind of thing that your orchestrator would usually decide,
[11:00] your orchestrator would usually decide,
[11:00] your orchestrator would usually decide, we're more enforcing
[11:02] we're more enforcing
[11:02] we're more enforcing process here. Like this is the kind of
[11:04] process here. Like this is the kind of
[11:04] process here. Like this is the kind of thing that I want to sort of layer on
[11:05] thing that I want to sort of layer on
[11:05] thing that I want to sort of layer on top of loop engineering. Like let me be
[11:07] top of loop engineering. Like let me be
[11:07] top of loop engineering. Like let me be in the loop, let me determine how the
[11:10] in the loop, let me determine how the
[11:10] in the loop, let me determine how the workflow can progress. And so, then we
[11:12] workflow can progress. And so, then we
[11:12] workflow can progress. And so, then we research the issue, investigate it, and
[11:15] research the issue, investigate it, and
[11:15] research the issue, investigate it, and then we go do the implementation and the
[11:17] then we go do the implementation and the
[11:17] then we go do the implementation and the validation, and we create the pull
[11:18] validation, and we create the pull
[11:18] validation, and we create the pull request, right? Step by step, each one
[11:20] request, right? Step by step, each one
[11:20] request, right? Step by step, each one of the steps we're using markdown
[11:22] of the steps we're using markdown
[11:22] of the steps we're using markdown documents as context. So, we're handing
[11:25] documents as context. So, we're handing
[11:25] documents as context. So, we're handing things off between the steps, but then
[11:27] things off between the steps, but then
[11:27] things off between the steps, but then each step is running in its own coding
[11:28] each step is running in its own coding
[11:28] each step is running in its own coding agent session. So, if we're handling a
[11:30] agent session. So, if we're handling a
[11:30] agent session. So, if we're handling a larger GitHub issue, it's not like this
[11:31] larger GitHub issue, it's not like this
[11:32] larger GitHub issue, it's not like this entire thing is running with slash
[11:33] entire thing is running with slash
[11:33] entire thing is running with slash looping Claude code getting totally
[11:35] looping Claude code getting totally
[11:35] looping Claude code getting totally overwhelmed with the each of the tasks
[11:36] overwhelmed with the each of the tasks
[11:36] overwhelmed with the each of the tasks that we're doing as we're planning,
[11:38] that we're doing as we're planning,
[11:38] that we're doing as we're planning, implementing, and validating. And the
[11:40] implementing, and validating. And the
[11:40] implementing, and validating. And the way that I can manage cost here is every
[11:43] way that I can manage cost here is every
[11:43] way that I can manage cost here is every single node in this Arkon workflow, I
[11:46] single node in this Arkon workflow, I
[11:46] single node in this Arkon workflow, I can actually decide what model am I
[11:48] can actually decide what model am I
[11:48] can actually decide what model am I going to use. And so, for example, with
[11:51] going to use. And so, for example, with
[11:51] going to use. And so, for example, with the classify step here at the top when
[11:53] the classify step here at the top when
[11:53] the classify step here at the top when we're figuring out, you know, what kind
[11:54] we're figuring out, you know, what kind
[11:54] we're figuring out, you know, what kind of issue do we need to address in the
[11:55] of issue do we need to address in the
[11:55] of issue do we need to address in the rest of the workflow? This is kind of
[11:57] rest of the workflow? This is kind of
[11:57] rest of the workflow? This is kind of like the orchestrator decision. We can
[11:59] like the orchestrator decision. We can
[11:59] like the orchestrator decision. We can use a small model, like maybe using
[12:01] use a small model, like maybe using
[12:01] use a small model, like maybe using Haiku or MiniMax M3 Kimmy K2.7, for
[12:05] Haiku or MiniMax M3 Kimmy K2.7, for
[12:05] Haiku or MiniMax M3 Kimmy K2.7, for example, right? Like what we can do in
[12:07] example, right? Like what we can do in
[12:07] example, right? Like what we can do in Arkon is even mix providers. So, we can
[12:09] Arkon is even mix providers. So, we can
[12:09] Arkon is even mix providers. So, we can use Claude code for the implementation,
[12:12] use Claude code for the implementation,
[12:12] use Claude code for the implementation, and then we can use Codex for the
[12:13] and then we can use Codex for the
[12:13] and then we can use Codex for the review, and then for all of our context
[12:15] review, and then for all of our context
[12:15] review, and then for all of our context loading and exploration up front, we can
[12:17] loading and exploration up front, we can
[12:18] loading and exploration up front, we can use a smaller model like Kimmy K2.7.
[12:21] use a smaller model like Kimmy K2.7.
[12:21] use a smaller model like Kimmy K2.7. And so, that's one of the other big
[12:22] And so, that's one of the other big
[12:22] And so, that's one of the other big issues I see with using slash goal or
[12:24] issues I see with using slash goal or
[12:25] issues I see with using slash goal or routines or loops in Claude code is
[12:27] routines or loops in Claude code is
[12:27] routines or loops in Claude code is you're just using one model for pretty
[12:28] you're just using one model for pretty
[12:28] you're just using one model for pretty much everything. That's part of the
[12:30] much everything. That's part of the
[12:30] much everything. That's part of the problem why it's so expensive. Cuz when
[12:32] problem why it's so expensive. Cuz when
[12:32] problem why it's so expensive. Cuz when we're doing larger amounts of work like
[12:34] we're doing larger amounts of work like
[12:34] we're doing larger amounts of work like this, of course, you're going to have to
[12:36] this, of course, you're going to have to
[12:36] this, of course, you're going to have to spend more tokens, but you don't always
[12:38] spend more tokens, but you don't always
[12:38] spend more tokens, but you don't always need to spend the most per token for
[12:41] need to spend the most per token for
[12:41] need to spend the most per token for every step of your workflow. And I know
[12:44] every step of your workflow. And I know
[12:44] every step of your workflow. And I know I'm really, really driving this in the
[12:45] I'm really, really driving this in the
[12:45] I'm really, really driving this in the ground right now, but yet another reason
[12:47] ground right now, but yet another reason
[12:47] ground right now, but yet another reason you want some kind of harness like what
[12:48] you want some kind of harness like what
[12:48] you want some kind of harness like what you can build with Arkon is we have
[12:50] you can build with Arkon is we have
[12:50] you can build with Arkon is we have durability. So, this is my Neon
[12:52] durability. So, this is my Neon
[12:52] durability. So, this is my Neon database. I'm storing all of my logs and
[12:55] database. I'm storing all of my logs and
[12:55] database. I'm storing all of my logs and runs in Postgres so that I can resume a
[12:59] runs in Postgres so that I can resume a
[12:59] runs in Postgres so that I can resume a workflow even if my machine goes down or
[13:01] workflow even if my machine goes down or
[13:01] workflow even if my machine goes down or I cancel things, like whatever I do, I'm
[13:03] I cancel things, like whatever I do, I'm
[13:03] I cancel things, like whatever I do, I'm always able to resume on exactly the
[13:05] always able to resume on exactly the
[13:05] always able to resume on exactly the step that I was in that larger loop or
[13:07] step that I was in that larger loop or
[13:07] step that I was in that larger loop or that larger workflow. So, I have all my
[13:09] that larger workflow. So, I have all my
[13:09] that larger workflow. So, I have all my conversations, the code bases that I'm
[13:11] conversations, the code bases that I'm
[13:11] conversations, the code bases that I'm operating on with Arkon. Everything is
[13:14] operating on with Arkon. Everything is
[13:14] operating on with Arkon. Everything is durable, and it's super easy to resume
[13:16] durable, and it's super easy to resume
[13:16] durable, and it's super easy to resume any work that I'm doing. Okay, cool. So,
[13:18] any work that I'm doing. Okay, cool. So,
[13:18] any work that I'm doing. Okay, cool. So, now I want to show you how I actually
[13:20] now I want to show you how I actually
[13:20] now I want to show you how I actually use Arkon on a day-to-day basis. A lot
[13:22] use Arkon on a day-to-day basis. A lot
[13:22] use Arkon on a day-to-day basis. A lot of ties that we can draw to loop
[13:24] of ties that we can draw to loop
[13:24] of ties that we can draw to loop engineering and things that I really
[13:26] engineering and things that I really
[13:26] engineering and things that I really fixed with it, right? And so, at a very,
[13:28] fixed with it, right? And so, at a very,
[13:28] fixed with it, right? And so, at a very, very basic sense, one of the most
[13:30] very basic sense, one of the most
[13:30] very basic sense, one of the most classic workflows that I use with Argon
[13:32] classic workflows that I use with Argon
[13:32] classic workflows that I use with Argon is fixing GitHub issues. Most of the
[13:35] is fixing GitHub issues. Most of the
[13:35] is fixing GitHub issues. Most of the input for my day-to-day work is issues
[13:37] input for my day-to-day work is issues
[13:37] input for my day-to-day work is issues in a repo. Either I'll create them or
[13:39] in a repo. Either I'll create them or
[13:39] in a repo. Either I'll create them or someone else will. And so, we can use
[13:41] someone else will. And so, we can use
[13:41] someone else will. And so, we can use Argon to send off workflows to run in
[13:44] Argon to send off workflows to run in
[13:44] Argon to send off workflows to run in parallel handling multiple GitHub issues
[13:46] parallel handling multiple GitHub issues
[13:46] parallel handling multiple GitHub issues at the exact same time. And this is very
[13:49] at the exact same time. And this is very
[13:49] at the exact same time. And this is very much like loop engineering because we
[13:51] much like loop engineering because we
[13:51] much like loop engineering because we have our primary Claude code here as our
[13:54] have our primary Claude code here as our
[13:54] have our primary Claude code here as our orchestrator and it's figuring out based
[13:56] orchestrator and it's figuring out based
[13:56] orchestrator and it's figuring out based on my higher-level request, I'm going to
[13:58] on my higher-level request, I'm going to
[13:58] on my higher-level request, I'm going to create the prompts and dispatch the
[14:00] create the prompts and dispatch the
[14:00] create the prompts and dispatch the workflows. Work trees are also a really
[14:02] workflows. Work trees are also a really
[14:02] workflows. Work trees are also a really important part of loop engineering.
[14:04] important part of loop engineering.
[14:04] important part of loop engineering. Boris talks about this as well. If we're
[14:06] Boris talks about this as well. If we're
[14:06] Boris talks about this as well. If we're having many different agents handling
[14:07] having many different agents handling
[14:07] having many different agents handling tasks in a loop, we need to make sure
[14:09] tasks in a loop, we need to make sure
[14:09] tasks in a loop, we need to make sure they're running in isolation so they're
[14:11] they're running in isolation so they're
[14:11] they're running in isolation so they're not stepping on each other's toes. That
[14:13] not stepping on each other's toes. That
[14:13] not stepping on each other's toes. That is how we scale our output with AI
[14:15] is how we scale our output with AI
[14:15] is how we scale our output with AI coding assistance. And so, we have our
[14:17] coding assistance. And so, we have our
[14:17] coding assistance. And so, we have our Claude code here kicking off four
[14:19] Claude code here kicking off four
[14:19] Claude code here kicking off four workflows to handle GitHub issues. It's
[14:21] workflows to handle GitHub issues. It's
[14:21] workflows to handle GitHub issues. It's going to validate the PRs after make
[14:25] going to validate the PRs after make
[14:25] going to validate the PRs after make sure that they're actually created. And
[14:26] sure that they're actually created. And
[14:26] sure that they're actually created. And this is where we can come in with human
[14:27] this is where we can come in with human
[14:27] this is where we can come in with human in the loop as well. And then it'll run
[14:30] in the loop as well. And then it'll run
[14:30] in the loop as well. And then it'll run four more workflows to validate, like
[14:32] four more workflows to validate, like
[14:32] four more workflows to validate, like perform a code review on each of the
[14:34] perform a code review on each of the
[14:34] perform a code review on each of the issues as well. So, very comprehensive,
[14:36] issues as well. So, very comprehensive,
[14:36] issues as well. So, very comprehensive, kind of a loop in the sense where it's
[14:37] kind of a loop in the sense where it's
[14:37] kind of a loop in the sense where it's like handle the issues, validate, and
[14:39] like handle the issues, validate, and
[14:39] like handle the issues, validate, and then do a code review. And uh and other
[14:42] then do a code review. And uh and other
[14:42] then do a code review. And uh and other thing as far as like making this more
[14:43] thing as far as like making this more
[14:43] thing as far as like making this more reliable is with Argon workflows, we can
[14:45] reliable is with Argon workflows, we can
[14:45] reliable is with Argon workflows, we can also build human in the loop within any
[14:48] also build human in the loop within any
[14:48] also build human in the loop within any individual node in the workflow. So, we
[14:49] individual node in the workflow. So, we
[14:50] individual node in the workflow. So, we can always have it pause for us to
[14:51] can always have it pause for us to
[14:51] can always have it pause for us to validate something before it continues,
[14:53] validate something before it continues,
[14:53] validate something before it continues, which is one of the biggest problems
[14:54] which is one of the biggest problems
[14:54] which is one of the biggest problems with loop engineering right now in
[14:56] with loop engineering right now in
[14:56] with loop engineering right now in general is that a lot of times people
[14:57] general is that a lot of times people
[14:58] general is that a lot of times people set up these systems to just go, go, go,
[14:59] set up these systems to just go, go, go,
[14:59] set up these systems to just go, go, go, go. And then you have it run for a day
[15:01] go. And then you have it run for a day
[15:02] go. And then you have it run for a day and by the time it comes back, you just
[15:03] and by the time it comes back, you just
[15:03] and by the time it comes back, you just have crap. Like I've had that myself as
[15:05] have crap. Like I've had that myself as
[15:05] have crap. Like I've had that myself as I've tested a lot of things within
[15:07] I've tested a lot of things within
[15:07] I've tested a lot of things within Claude code like routines and slash
[15:08] Claude code like routines and slash
[15:09] Claude code like routines and slash loop. And so, I'll send this off here
[15:11] loop. And so, I'll send this off here
[15:11] loop. And so, I'll send this off here and I'll just pause and come back once
[15:13] and I'll just pause and come back once
[15:13] and I'll just pause and come back once it's done so we can walk through
[15:15] it's done so we can walk through
[15:15] it's done so we can walk through everything that it accomplished here.
[15:17] everything that it accomplished here.
[15:17] everything that it accomplished here. And the best part about all of this is
[15:19] And the best part about all of this is
[15:19] And the best part about all of this is we We have nine coding agent sessions
[15:22] we We have nine coding agent sessions
[15:22] we We have nine coding agent sessions for this entire loop or whatever you
[15:24] for this entire loop or whatever you
[15:24] for this entire loop or whatever you want to call it, this entire harness,
[15:26] want to call it, this entire harness,
[15:26] want to call it, this entire harness, right? Like one per GitHub issue fix,
[15:28] right? Like one per GitHub issue fix,
[15:28] right? Like one per GitHub issue fix, one per review, and then we have our
[15:29] one per review, and then we have our
[15:29] one per review, and then we have our primary orchestrator. So, we're doing a
[15:31] primary orchestrator. So, we're doing a
[15:31] primary orchestrator. So, we're doing a ton of work, but at the same time, we
[15:34] ton of work, but at the same time, we
[15:34] ton of work, but at the same time, we actually are pretty lean for each
[15:36] actually are pretty lean for each
[15:36] actually are pretty lean for each individual session. Because I actually
[15:38] individual session. Because I actually
[15:38] individual session. Because I actually kind of have to correct myself, it's
[15:39] kind of have to correct myself, it's
[15:39] kind of have to correct myself, it's more than just nine sessions because
[15:41] more than just nine sessions because
[15:41] more than just nine sessions because even within each individual Arkon
[15:42] even within each individual Arkon
[15:42] even within each individual Arkon workflow, we're running separate coding
[15:44] workflow, we're running separate coding
[15:45] workflow, we're running separate coding agent sessions where we can have
[15:46] agent sessions where we can have
[15:46] agent sessions where we can have different models. We can optimize for
[15:47] different models. We can optimize for
[15:47] different models. We can optimize for cost. There is a lot of engineering that
[15:50] cost. There is a lot of engineering that
[15:50] cost. There is a lot of engineering that goes on behind the scenes here. All
[15:51] goes on behind the scenes here. All
[15:51] goes on behind the scenes here. All right, so I'm back after the entire
[15:54] right, so I'm back after the entire
[15:54] right, so I'm back after the entire thing ran. I just want to show you how
[15:56] thing ran. I just want to show you how
[15:56] thing ran. I just want to show you how comprehensive we can be here. And so, we
[15:58] comprehensive we can be here. And so, we
[15:58] comprehensive we can be here. And so, we have the four workflow runs for actually
[16:00] have the four workflow runs for actually
[16:00] have the four workflow runs for actually fixing the issues, and then Cloud Code
[16:02] fixing the issues, and then Cloud Code
[16:02] fixing the issues, and then Cloud Code here is really monitoring and
[16:04] here is really monitoring and
[16:04] here is really monitoring and orchestrating everything, right? So,
[16:05] orchestrating everything, right? So,
[16:05] orchestrating everything, right? So, like as the different tasks are done,
[16:07] like as the different tasks are done,
[16:07] like as the different tasks are done, it's coming in and checking on them. And
[16:09] it's coming in and checking on them. And
[16:09] it's coming in and checking on them. And then finally, we have everything done
[16:11] then finally, we have everything done
[16:11] then finally, we have everything done together. So, all four fixed workflows
[16:12] together. So, all four fixed workflows
[16:12] together. So, all four fixed workflows are done. And then it launches the code
[16:15] are done. And then it launches the code
[16:15] are done. And then it launches the code reviews cuz it confirmed that all of the
[16:17] reviews cuz it confirmed that all of the
[16:17] reviews cuz it confirmed that all of the pull requests are ready to be reviewed.
[16:20] pull requests are ready to be reviewed.
[16:20] pull requests are ready to be reviewed. And you can even ask for a status
[16:21] And you can even ask for a status
[16:21] And you can even ask for a status update. So, like while the Arkon
[16:22] update. So, like while the Arkon
[16:22] update. So, like while the Arkon workflows are running, if we want to see
[16:23] workflows are running, if we want to see
[16:24] workflows are running, if we want to see where we're at, we can of course check
[16:25] where we're at, we can of course check
[16:25] where we're at, we can of course check the logs in the Arkon web UI. I have
[16:27] the logs in the Arkon web UI. I have
[16:27] the logs in the Arkon web UI. I have that as well. But then also, we can just
[16:29] that as well. But then also, we can just
[16:29] that as well. But then also, we can just ask our orchestrator, right? Cuz it
[16:31] ask our orchestrator, right? Cuz it
[16:31] ask our orchestrator, right? Cuz it really is in control of our entire
[16:33] really is in control of our entire
[16:33] really is in control of our entire situation here.
[16:35] situation here.
[16:35] situation here. And then finally, all the reviews are
[16:37] And then finally, all the reviews are
[16:37] And then finally, all the reviews are done and it gives us the things that
[16:39] done and it gives us the things that
[16:39] done and it gives us the things that need our attention now. So, we can
[16:40] need our attention now. So, we can
[16:40] need our attention now. So, we can really come in and direct things from
[16:42] really come in and direct things from
[16:42] really come in and direct things from here. So, it's the harness driving
[16:44] here. So, it's the harness driving
[16:44] here. So, it's the harness driving everything, but we still can be in the
[16:45] everything, but we still can be in the
[16:45] everything, but we still can be in the loop wherever we want. And I know
[16:47] loop wherever we want. And I know
[16:47] loop wherever we want. And I know there's a lot that goes into effectively
[16:50] there's a lot that goes into effectively
[16:50] there's a lot that goes into effectively orchestrating parallel coding agents.
[16:52] orchestrating parallel coding agents.
[16:52] orchestrating parallel coding agents. So, there's a lot of content on my
[16:53] So, there's a lot of content on my
[16:54] So, there's a lot of content on my channel where I cover this kind of
[16:55] channel where I cover this kind of
[16:55] channel where I cover this kind of thing. Like for example, one thing that
[16:57] thing. Like for example, one thing that
[16:57] thing. Like for example, one thing that you have to do a lot is branches in your
[16:59] you have to do a lot is branches in your
[16:59] you have to do a lot is branches in your database, right? Like if each coding
[17:01] database, right? Like if each coding
[17:01] database, right? Like if each coding agent is working on something in
[17:02] agent is working on something in
[17:02] agent is working on something in parallel, you don't want them to be
[17:04] parallel, you don't want them to be
[17:04] parallel, you don't want them to be stepping on each other's toes, not just
[17:05] stepping on each other's toes, not just
[17:05] stepping on each other's toes, not just with code changes, but also database
[17:07] with code changes, but also database
[17:07] with code changes, but also database changes. So, work trees in Neon is a
[17:09] changes. So, work trees in Neon is a
[17:09] changes. So, work trees in Neon is a super powerful thing. A lot of different
[17:11] super powerful thing. A lot of different
[17:11] super powerful thing. A lot of different things like port conflicts that we want
[17:13] things like port conflicts that we want
[17:13] things like port conflicts that we want to solve for as well. So, I'll link to a
[17:14] to solve for as well. So, I'll link to a
[17:14] to solve for as well. So, I'll link to a video right here where I cover that
[17:16] video right here where I cover that
[17:16] video right here where I cover that stuff. And just generally how we can
[17:18] stuff. And just generally how we can
[17:18] stuff. And just generally how we can make parallel AI coding more reliable.
[17:20] make parallel AI coding more reliable.
[17:20] make parallel AI coding more reliable. So, assuming you take care of all of
[17:21] So, assuming you take care of all of
[17:21] So, assuming you take care of all of that, you can really let Arkon rip on as
[17:23] that, you can really let Arkon rip on as
[17:24] that, you can really let Arkon rip on as many GitHub issues or whatever in
[17:26] many GitHub issues or whatever in
[17:26] many GitHub issues or whatever in parallel. Very cool how far we can take
[17:28] parallel. Very cool how far we can take
[17:28] parallel. Very cool how far we can take our output here. All right, so we have
[17:30] our output here. All right, so we have
[17:30] our output here. All right, so we have covered a lot in this video already.
[17:32] covered a lot in this video already.
[17:33] covered a lot in this video already. Loop engineering basics, the downsides
[17:34] Loop engineering basics, the downsides
[17:34] Loop engineering basics, the downsides of it, how I'm using Arkon to extract
[17:36] of it, how I'm using Arkon to extract
[17:36] of it, how I'm using Arkon to extract the good parts out into more
[17:38] the good parts out into more
[17:38] the good parts out into more deterministic workflows. But last, I
[17:40] deterministic workflows. But last, I
[17:40] deterministic workflows. But last, I want to cover a system that I built for
[17:43] want to cover a system that I built for
[17:43] want to cover a system that I built for loop engineering in its purest form.
[17:45] loop engineering in its purest form.
[17:45] loop engineering in its purest form. Because I presented these issues to you,
[17:47] Because I presented these issues to you,
[17:47] Because I presented these issues to you, but I I do see a lot of promise with
[17:49] but I I do see a lot of promise with
[17:49] but I I do see a lot of promise with this. I want to try to build a system
[17:51] this. I want to try to build a system
[17:51] this. I want to try to build a system that solves for these problems. And so,
[17:54] that solves for these problems. And so,
[17:54] that solves for these problems. And so, I built this dashboard that I'm really
[17:55] I built this dashboard that I'm really
[17:56] I built this dashboard that I'm really excited to show you right now. I
[17:57] excited to show you right now. I
[17:57] excited to show you right now. I actually have it open-sourced on GitHub,
[17:59] actually have it open-sourced on GitHub,
[17:59] actually have it open-sourced on GitHub, linked to this in the description. And I
[18:02] linked to this in the description. And I
[18:02] linked to this in the description. And I have built this to solve for a lot of
[18:03] have built this to solve for a lot of
[18:03] have built this to solve for a lot of the problems that we have with loop
[18:05] the problems that we have with loop
[18:05] the problems that we have with loop engineering right now. So, first of all,
[18:07] engineering right now. So, first of all,
[18:07] engineering right now. So, first of all, we have durability. Uh just like with
[18:09] we have durability. Uh just like with
[18:09] we have durability. Uh just like with Arkon, all of the loops that we run and
[18:12] Arkon, all of the loops that we run and
[18:12] Arkon, all of the loops that we run and the different events and logs, I'm
[18:13] the different events and logs, I'm
[18:13] the different events and logs, I'm storing this here so we can always
[18:15] storing this here so we can always
[18:15] storing this here so we can always resume a workflow later on.
[18:18] resume a workflow later on.
[18:18] resume a workflow later on. So, we're managing all of our state in
[18:20] So, we're managing all of our state in
[18:20] So, we're managing all of our state in an external database, so we're not
[18:22] an external database, so we're not
[18:22] an external database, so we're not relying on that staying in any coding
[18:24] relying on that staying in any coding
[18:24] relying on that staying in any coding agent session. And so, our main
[18:26] agent session. And so, our main
[18:26] agent session. And so, our main orchestrator, it is going to read
[18:29] orchestrator, it is going to read
[18:29] orchestrator, it is going to read through this state here and then figure
[18:31] through this state here and then figure
[18:31] through this state here and then figure out like, "Okay, what is the next thing
[18:32] out like, "Okay, what is the next thing
[18:32] out like, "Okay, what is the next thing that we need to do?" And so, then it's
[18:34] that we need to do?" And so, then it's
[18:34] that we need to do?" And so, then it's going to call upon the workers to
[18:36] going to call upon the workers to
[18:36] going to call upon the workers to accomplish all of that. Like, build a
[18:37] accomplish all of that. Like, build a
[18:37] accomplish all of that. Like, build a new feature, do some kind of validation,
[18:39] new feature, do some kind of validation,
[18:39] new feature, do some kind of validation, whatever it needs to do. And then those
[18:41] whatever it needs to do. And then those
[18:41] whatever it needs to do. And then those workers are going to go back and they're
[18:42] workers are going to go back and they're
[18:42] workers are going to go back and they're going to update the state that we have
[18:44] going to update the state that we have
[18:44] going to update the state that we have in our database.
[18:49] Like again, I'm using Neon for Postgres
[18:49] Like again, I'm using Neon for Postgres here. And so, this is our loop, right?
[18:51] here. And so, this is our loop, right?
[18:51] here. And so, this is our loop, right? Cuz in the next time the orchestrator
[18:52] Cuz in the next time the orchestrator
[18:53] Cuz in the next time the orchestrator runs, it's going to get that updated
[18:54] runs, it's going to get that updated
[18:54] runs, it's going to get that updated state from the workers and then figure
[18:56] state from the workers and then figure
[18:56] state from the workers and then figure out the next workers to invoke. And
[18:58] out the next workers to invoke. And
[18:58] out the next workers to invoke. And there are a couple of problems that I'm
[19:00] there are a couple of problems that I'm
[19:00] there are a couple of problems that I'm solving by building something like this.
[19:02] solving by building something like this.
[19:02] solving by building something like this. And And I want to start by saying like,
[19:04] And And I want to start by saying like,
[19:04] And And I want to start by saying like, this is more experimental. I'm just
[19:05] this is more experimental. I'm just
[19:05] this is more experimental. I'm just showing you something that I'm working
[19:06] showing you something that I'm working
[19:06] showing you something that I'm working on and kind of building into my own
[19:08] on and kind of building into my own
[19:08] on and kind of building into my own second brain. But first of all, I'm
[19:09] second brain. But first of all, I'm
[19:09] second brain. But first of all, I'm driving everything with Pi. So, I'm
[19:11] driving everything with Pi. So, I'm
[19:12] driving everything with Pi. So, I'm actually using my Kimmy now Kimmy K 2.7,
[19:15] actually using my Kimmy now Kimmy K 2.7,
[19:15] actually using my Kimmy now Kimmy K 2.7, to drive all of these workflows. So,
[19:17] to drive all of these workflows. So,
[19:17] to drive all of these workflows. So, yes, it is a lot of tokens, but I'm not
[19:19] yes, it is a lot of tokens, but I'm not
[19:19] yes, it is a lot of tokens, but I'm not using Opus for everything, but I'm still
[19:21] using Opus for everything, but I'm still
[19:21] using Opus for everything, but I'm still getting really good results because of
[19:23] getting really good results because of
[19:23] getting really good results because of the harness that I built here that
[19:25] the harness that I built here that
[19:25] the harness that I built here that elevates the model. And then, I have a
[19:28] elevates the model. And then, I have a
[19:28] elevates the model. And then, I have a lot of observability built into this
[19:30] lot of observability built into this
[19:30] lot of observability built into this dashboard. I mean, obviously, it being a
[19:31] dashboard. I mean, obviously, it being a
[19:31] dashboard. I mean, obviously, it being a dashboard, it solves part of that
[19:33] dashboard, it solves part of that
[19:33] dashboard, it solves part of that reliability problem, which obviously I'm
[19:35] reliability problem, which obviously I'm
[19:35] reliability problem, which obviously I'm still working on, but just being able to
[19:36] still working on, but just being able to
[19:36] still working on, but just being able to see exactly the decisions that are going
[19:38] see exactly the decisions that are going
[19:38] see exactly the decisions that are going on here means that it's easier for me to
[19:41] on here means that it's easier for me to
[19:41] on here means that it's easier for me to uh look at this, even have my coding
[19:43] uh look at this, even have my coding
[19:43] uh look at this, even have my coding agent analyze the runs in the database,
[19:45] agent analyze the runs in the database,
[19:45] agent analyze the runs in the database, and then figure out how to improve the
[19:47] and then figure out how to improve the
[19:47] and then figure out how to improve the loop, how to improve the harness here.
[19:50] loop, how to improve the harness here.
[19:50] loop, how to improve the harness here. And so, I just have been going through a
[19:52] And so, I just have been going through a
[19:52] And so, I just have been going through a lot of really simple examples, but like
[19:54] lot of really simple examples, but like
[19:54] lot of really simple examples, but like non-trivial enough where it does have to
[19:56] non-trivial enough where it does have to
[19:56] non-trivial enough where it does have to go through quite a few rounds to build
[19:57] go through quite a few rounds to build
[19:57] go through quite a few rounds to build it. So, like building a single-page
[19:59] it. So, like building a single-page
[19:59] it. So, like building a single-page Kanban board as a static web app, I just
[20:01] Kanban board as a static web app, I just
[20:01] Kanban board as a static web app, I just take this prompt, and I'll show you it
[20:03] take this prompt, and I'll show you it
[20:03] take this prompt, and I'll show you it running live right now. Like, I'll just
[20:04] running live right now. Like, I'll just
[20:04] running live right now. Like, I'll just send this in, and I will start a loop.
[20:07] send this in, and I will start a loop.
[20:07] send this in, and I will start a loop. And it's really cool. We can see that
[20:08] And it's really cool. We can see that
[20:08] And it's really cool. We can see that like the orchestrator is deciding how to
[20:10] like the orchestrator is deciding how to
[20:10] like the orchestrator is deciding how to split up the work right now. And then,
[20:12] split up the work right now. And then,
[20:12] split up the work right now. And then, we also have like the full run history
[20:14] we also have like the full run history
[20:14] we also have like the full run history here. It's pretty neat. Like, it's super
[20:15] here. It's pretty neat. Like, it's super
[20:15] here. It's pretty neat. Like, it's super easy to get this up and running uh if
[20:17] easy to get this up and running uh if
[20:17] easy to get this up and running uh if you just want to check out the GitHub
[20:18] you just want to check out the GitHub
[20:18] you just want to check out the GitHub repo linked in the description. But,
[20:20] repo linked in the description. But,
[20:20] repo linked in the description. But, after a little bit, the orchestrator
[20:21] after a little bit, the orchestrator
[20:21] after a little bit, the orchestrator will decide, "Here's how I'm going to
[20:23] will decide, "Here's how I'm going to
[20:23] will decide, "Here's how I'm going to create that first wave." And then, we'll
[20:25] create that first wave." And then, we'll
[20:25] create that first wave." And then, we'll see the workers dispatched. So, there we
[20:27] see the workers dispatched. So, there we
[20:27] see the workers dispatched. So, there we go. The orchestrator spent 6,000 tokens
[20:30] go. The orchestrator spent 6,000 tokens
[20:30] go. The orchestrator spent 6,000 tokens with that initial planning and then
[20:32] with that initial planning and then
[20:32] with that initial planning and then prompting our first three workers in
[20:34] prompting our first three workers in
[20:34] prompting our first three workers in round number one. And so, we don't have
[20:36] round number one. And so, we don't have
[20:36] round number one. And so, we don't have to watch paint dry seeing this go to
[20:38] to watch paint dry seeing this go to
[20:38] to watch paint dry seeing this go to completion here, but you get the idea.
[20:40] completion here, but you get the idea.
[20:40] completion here, but you get the idea. We saw the full run in the logs earlier
[20:42] We saw the full run in the logs earlier
[20:42] We saw the full run in the logs earlier of how it'll go round by round doing
[20:44] of how it'll go round by round doing
[20:44] of how it'll go round by round doing validation each time, and we can even
[20:46] validation each time, and we can even
[20:46] validation each time, and we can even have human in the loop so that we get to
[20:48] have human in the loop so that we get to
[20:48] have human in the loop so that we get to actually take a look at what has
[20:49] actually take a look at what has
[20:49] actually take a look at what has happened in the first round before the
[20:52] happened in the first round before the
[20:52] happened in the first round before the orchestrator moves on to the next. That
[20:54] orchestrator moves on to the next. That
[20:54] orchestrator moves on to the next. That is the kind of reliability that I feel
[20:56] is the kind of reliability that I feel
[20:56] is the kind of reliability that I feel like we really need to have right now in
[20:58] like we really need to have right now in
[20:58] like we really need to have right now in order to build anything more than simple
[21:00] order to build anything more than simple
[21:00] order to build anything more than simple demos with this kind of loop engineering
[21:02] demos with this kind of loop engineering
[21:02] demos with this kind of loop engineering setup. And so, yeah, I I would encourage
[21:05] setup. And so, yeah, I I would encourage
[21:05] setup. And so, yeah, I I would encourage you to just play around with this kind
[21:06] you to just play around with this kind
[21:06] you to just play around with this kind of idea. Like building a a dashboard to
[21:08] of idea. Like building a a dashboard to
[21:08] of idea. Like building a a dashboard to manage more autonomous tasks in
[21:10] manage more autonomous tasks in
[21:10] manage more autonomous tasks in something like your second brain is a
[21:11] something like your second brain is a
[21:11] something like your second brain is a big thing that I'm focusing on right
[21:13] big thing that I'm focusing on right
[21:13] big thing that I'm focusing on right now. And we can even take this kind of
[21:15] now. And we can even take this kind of
[21:15] now. And we can even take this kind of dashboard and deploy it to the cloud as
[21:17] dashboard and deploy it to the cloud as
[21:17] dashboard and deploy it to the cloud as well, so we can access it from anywhere.
[21:19] well, so we can access it from anywhere.
[21:19] well, so we can access it from anywhere. Maybe even start to share our loop setup
[21:22] Maybe even start to share our loop setup
[21:22] Maybe even start to share our loop setup with our teammates. And these days it's
[21:24] with our teammates. And these days it's
[21:24] with our teammates. And these days it's just so easy to take applications that
[21:26] just so easy to take applications that
[21:26] just so easy to take applications that you build locally for these kinds of
[21:28] you build locally for these kinds of
[21:28] you build locally for these kinds of control systems and deploy them to
[21:29] control systems and deploy them to
[21:30] control systems and deploy them to production, so you can use it remotely
[21:31] production, so you can use it remotely
[21:31] production, so you can use it remotely or have a team use it. Retool is a tool
[21:34] or have a team use it. Retool is a tool
[21:34] or have a team use it. Retool is a tool specifically I've been leaning on a lot
[21:36] specifically I've been leaning on a lot
[21:36] specifically I've been leaning on a lot for these kinds of deployments. And so
[21:38] for these kinds of deployments. And so
[21:38] for these kinds of deployments. And so it's just so easy to create an app here,
[21:40] it's just so easy to create an app here,
[21:40] it's just so easy to create an app here, and then we can import React code. So I
[21:42] and then we can import React code. So I
[21:42] and then we can import React code. So I just had Claude code build the entire
[21:44] just had Claude code build the entire
[21:44] just had Claude code build the entire dashboard in React with the idea of I'm
[21:47] dashboard in React with the idea of I'm
[21:47] dashboard in React with the idea of I'm going to deploy this here. It's so
[21:49] going to deploy this here. It's so
[21:49] going to deploy this here. It's so incredibly easy. So I just go in and I
[21:51] incredibly easy. So I just go in and I
[21:51] incredibly easy. So I just go in and I take the zip file of the front end that
[21:53] take the zip file of the front end that
[21:53] take the zip file of the front end that I just showed you, and then its agent is
[21:55] I just showed you, and then its agent is
[21:55] I just showed you, and then its agent is going to go through wiring everything
[21:56] going to go through wiring everything
[21:56] going to go through wiring everything up. So it'll connect to the back end
[21:58] up. So it'll connect to the back end
[21:58] up. So it'll connect to the back end with the API that I have running with
[22:00] with the API that I have running with
[22:00] with the API that I have running with Pi. It'll get everything deployed to a
[22:01] Pi. It'll get everything deployed to a
[22:02] Pi. It'll get everything deployed to a real URL that I can use. It's really
[22:03] real URL that I can use. It's really
[22:04] real URL that I can use. It's really neat. So for example, here connecting to
[22:05] neat. So for example, here connecting to
[22:05] neat. So for example, here connecting to my Neon database where I'm storing all
[22:07] my Neon database where I'm storing all
[22:07] my Neon database where I'm storing all of the runs for durability, it asks me
[22:10] of the runs for durability, it asks me
[22:10] of the runs for durability, it asks me to set up a connection here. So I can
[22:12] to set up a connection here. So I can
[22:12] to set up a connection here. So I can create a new resource. I can select
[22:14] create a new resource. I can select
[22:14] create a new resource. I can select Postgres cuz that's what Neon is running
[22:16] Postgres cuz that's what Neon is running
[22:16] Postgres cuz that's what Neon is running under the hood, and then set up all of
[22:18] under the hood, and then set up all of
[22:18] under the hood, and then set up all of my connection information here. So
[22:20] my connection information here. So
[22:20] my connection information here. So really easy to make that connection. So
[22:22] really easy to make that connection. So
[22:22] really easy to make that connection. So I'm just deploying the front end here
[22:23] I'm just deploying the front end here
[22:23] I'm just deploying the front end here and then connecting it to wherever I'm
[22:24] and then connecting it to wherever I'm
[22:24] and then connecting it to wherever I'm hosting my app hosting Pi running behind
[22:27] hosting my app hosting Pi running behind
[22:27] hosting my app hosting Pi running behind the scenes. So I'll get all this hooked
[22:29] the scenes. So I'll get all this hooked
[22:29] the scenes. So I'll get all this hooked up off camera and then I'll show you the
[22:30] up off camera and then I'll show you the
[22:31] up off camera and then I'll show you the final result here. And there we go.
[22:32] final result here. And there we go.
[22:32] final result here. And there we go. Everything is deployed. We can see our
[22:35] Everything is deployed. We can see our
[22:35] Everything is deployed. We can see our app hosted in the cloud just like it was
[22:37] app hosted in the cloud just like it was
[22:37] app hosted in the cloud just like it was running locally. Very cool. So now we
[22:39] running locally. Very cool. So now we
[22:40] running locally. Very cool. So now we have a URL where we can share this.
[22:41] have a URL where we can share this.
[22:41] have a URL where we can share this. There's also a lot of other cool things
[22:43] There's also a lot of other cool things
[22:43] There's also a lot of other cool things you can do in Retool. Like you can set
[22:44] you can do in Retool. Like you can set
[22:44] you can do in Retool. Like you can set up permission groups, and so certain
[22:46] up permission groups, and so certain
[22:46] up permission groups, and so certain actions that you can gate with an API
[22:47] actions that you can gate with an API
[22:47] actions that you can gate with an API endpoint, so you have to approve it and
[22:49] endpoint, so you have to approve it and
[22:49] endpoint, so you have to approve it and have the right permissions to do so. So
[22:51] have the right permissions to do so. So
[22:51] have the right permissions to do so. So for example, being able to pause the
[22:54] for example, being able to pause the
[22:54] for example, being able to pause the workflow and then resume it. If I click
[22:56] workflow and then resume it. If I click
[22:56] workflow and then resume it. If I click this right here, you can see that
[22:57] this right here, you can see that
[22:57] this right here, you can see that approve and resume, and you can see the
[22:59] approve and resume, and you can see the
[22:59] approve and resume, and you can see the identity that I I through Retool. It's
[23:01] identity that I I through Retool. It's
[23:01] identity that I I through Retool. It's giving me permission to actually do
[23:03] giving me permission to actually do
[23:03] giving me permission to actually do that. And then it's also very easy to
[23:04] that. And then it's also very easy to
[23:04] that. And then it's also very easy to edit this application. I can continue to
[23:06] edit this application. I can continue to
[23:06] edit this application. I can continue to make changes with it here in the cloud
[23:08] make changes with it here in the cloud
[23:08] make changes with it here in the cloud as I need, adding new features to the
[23:11] as I need, adding new features to the
[23:11] as I need, adding new features to the front end, whatever I need as I'm
[23:12] front end, whatever I need as I'm
[23:12] front end, whatever I need as I'm evolving my dashboard. So yeah, I've
[23:14] evolving my dashboard. So yeah, I've
[23:14] evolving my dashboard. So yeah, I've just been doing a lot of this with like
[23:15] just been doing a lot of this with like
[23:15] just been doing a lot of this with like deploying dashboards for observability
[23:17] deploying dashboards for observability
[23:17] deploying dashboards for observability and helping with all my systems for my
[23:18] and helping with all my systems for my
[23:18] and helping with all my systems for my second brain and my AI coding. Very
[23:21] second brain and my AI coding. Very
[23:21] second brain and my AI coding. Very powerful stuff. And a quick shoutout to
[23:22] powerful stuff. And a quick shoutout to
[23:22] powerful stuff. And a quick shoutout to the Retool team. Ever since I've been
[23:24] the Retool team. Ever since I've been
[23:24] the Retool team. Ever since I've been using their platform, I've been working
[23:25] using their platform, I've been working
[23:26] using their platform, I've been working with them and I even collabed to bring
[23:27] with them and I even collabed to bring
[23:27] with them and I even collabed to bring this integration in the video today.
[23:30] this integration in the video today.
[23:30] this integration in the video today. It's a great platform because you get to
[23:31] It's a great platform because you get to
[23:31] It's a great platform because you get to build your applications directly in
[23:33] build your applications directly in
[23:34] build your applications directly in Retool or you can import it like I
[23:35] Retool or you can import it like I
[23:35] Retool or you can import it like I showed earlier. But then your team,
[23:37] showed earlier. But then your team,
[23:37] showed earlier. But then your team, regardless, has a single governed path
[23:39] regardless, has a single governed path
[23:39] regardless, has a single governed path to production with audit trails. Really
[23:42] to production with audit trails. Really
[23:42] to production with audit trails. Really easy to make your changes just with chat
[23:43] easy to make your changes just with chat
[23:43] easy to make your changes just with chat like I showed here and the review system
[23:45] like I showed here and the review system
[23:45] like I showed here and the review system with human in the loop. All of it that
[23:48] with human in the loop. All of it that
[23:48] with human in the loop. All of it that you need to ship your apps to
[23:49] you need to ship your apps to
[23:49] you need to ship your apps to production. And I'll have a link in the
[23:51] production. And I'll have a link in the
[23:51] production. And I'll have a link in the description. If you go now, you get free
[23:53] description. If you go now, you get free
[23:53] description. If you go now, you get free app imports through July 1st and bonus
[23:55] app imports through July 1st and bonus
[23:55] app imports through July 1st and bonus AI credits on all paid plans. So that's
[23:57] AI credits on all paid plans. So that's
[23:57] AI credits on all paid plans. So that's everything I have to cover for loop
[23:59] everything I have to cover for loop
[23:59] everything I have to cover for loop engineering. The basics, the problems
[24:01] engineering. The basics, the problems
[24:01] engineering. The basics, the problems with it, how I'm solving for it because
[24:02] with it, how I'm solving for it because
[24:02] with it, how I'm solving for it because I I really do want to incorporate loop
[24:04] I I really do want to incorporate loop
[24:04] I I really do want to incorporate loop engineering. Like I like the concept of
[24:06] engineering. Like I like the concept of
[24:07] engineering. Like I like the concept of it and I want to drive how autonomous my
[24:09] it and I want to drive how autonomous my
[24:09] it and I want to drive how autonomous my coding agents can be, but you got to
[24:11] coding agents can be, but you got to
[24:11] coding agents can be, but you got to have the right system. Otherwise, things
[24:13] have the right system. Otherwise, things
[24:13] have the right system. Otherwise, things are going to completely fall apart like
[24:14] are going to completely fall apart like
[24:14] are going to completely fall apart like we've already talked about. And so I
[24:16] we've already talked about. And so I
[24:16] we've already talked about. And so I hope I've inspired some ideas for you,
[24:18] hope I've inspired some ideas for you,
[24:18] hope I've inspired some ideas for you, even like how to use Arcan or start to
[24:20] even like how to use Arcan or start to
[24:20] even like how to use Arcan or start to build this sort of harness for yourself.
[24:22] build this sort of harness for yourself.
[24:22] build this sort of harness for yourself. Really, I would just fold loop
[24:24] Really, I would just fold loop
[24:24] Really, I would just fold loop engineering into harness engineering. It
[24:25] engineering into harness engineering. It
[24:25] engineering into harness engineering. It doesn't quite deserve its own buzzword,
[24:28] doesn't quite deserve its own buzzword,
[24:28] doesn't quite deserve its own buzzword, right? But like there are some good
[24:29] right? But like there are some good
[24:29] right? But like there are some good ideas here. And so I hope you found this
[24:31] ideas here. And so I hope you found this
[24:31] ideas here. And so I hope you found this useful. If you did, I would really
[24:33] useful. If you did, I would really
[24:33] useful. If you did, I would really appreciate a like and a subscribe. And
[24:35] appreciate a like and a subscribe. And
[24:35] appreciate a like and a subscribe. And with that, I will see you in the next
[24:37] with that, I will see you in the next
[24:37] with that, I will see you in the next video.
