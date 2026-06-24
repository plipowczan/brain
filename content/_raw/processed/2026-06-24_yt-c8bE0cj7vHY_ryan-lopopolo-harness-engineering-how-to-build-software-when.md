---
video_id: c8bE0cj7vHY
source_url: https://www.youtube.com/watch?v=c8bE0cj7vHY
title: "Ryan Lopopolo - Harness Engineering: How to Build Software When Humans Steer and Agents Execute"
channel: "AI Native Dev"
uploader_id: "@tessl-ai"
duration: 1787
duration_human: "29:47"
published: 2026-06-19
language: en
transcription: captions
chapters:
  []
tags: []
categories: ["Entertainment"]
fetched: 2026-06-24T15:42:30Z
---

# Ryan Lopopolo - Harness Engineering: How to Build Software When Humans Steer and Agents Execute

[0:02] Thank you kindly. Uh we've only got a
[0:02] Thank you kindly. Uh we've only got a few sessions left this afternoon and
[0:05] few sessions left this afternoon and
[0:05] few sessions left this afternoon and then it's uh
[0:07] then it's uh
[0:07] then it's uh party time, I've been told. Uh and for
[0:10] party time, I've been told. Uh and for
[0:10] party time, I've been told. Uh and for you at home watching on the live stream,
[0:12] you at home watching on the live stream,
[0:12] you at home watching on the live stream, you can have your own party. Uh whatever
[0:14] you can have your own party. Uh whatever
[0:14] you can have your own party. Uh whatever kind of party you want to have. I'm not
[0:16] kind of party you want to have. I'm not
[0:16] kind of party you want to have. I'm not going to judge. Uh so next up we've got
[0:20] going to judge. Uh so next up we've got
[0:20] going to judge. Uh so next up we've got Ri Ryan Leolo.
[0:23] Ri Ryan Leolo.
[0:24] Ri Ryan Leolo. Close. Sorry.
[0:27] Close. Sorry.
[0:27] Close. Sorry. I'm so sorry. right from Open AI. I'll
[0:29] I'm so sorry. right from Open AI. I'll
[0:30] I'm so sorry. right from Open AI. I'll just get off stage cuz this guy give him
[0:31] just get off stage cuz this guy give him
[0:31] just get off stage cuz this guy give him a big round of applause. Thank you very
[0:33] a big round of applause. Thank you very
[0:33] a big round of applause. Thank you very much. [applause]
[0:40] [applause]
[0:40] [applause] Hello, AI Native DevCon. Uh, woo. Uh,
[0:45] Hello, AI Native DevCon. Uh, woo. Uh,
[0:45] Hello, AI Native DevCon. Uh, woo. Uh, I'm excited to kind of be in the home
[0:47] I'm excited to kind of be in the home
[0:47] I'm excited to kind of be in the home stretch here on this first day, which
[0:49] stretch here on this first day, which
[0:49] stretch here on this first day, which has been jam-packed and super fun. It
[0:51] has been jam-packed and super fun. It
[0:51] has been jam-packed and super fun. It has been super fun to be here. And I'm
[0:53] has been super fun to be here. And I'm
[0:53] has been super fun to be here. And I'm kind of excited today to talk to you
[0:55] kind of excited today to talk to you
[0:55] kind of excited today to talk to you about harness engineering, which is a
[0:57] about harness engineering, which is a
[0:57] about harness engineering, which is a thing that is kind of near and dear to
[0:59] thing that is kind of near and dear to
[0:59] thing that is kind of near and dear to my heart, kind of having invented the
[1:00] my heart, kind of having invented the
[1:00] my heart, kind of having invented the term here. Uh, and
[1:03] term here. Uh, and
[1:03] term here. Uh, and to me,
[1:05] to me,
[1:05] to me, the way that we go about working with
[1:07] the way that we go about working with
[1:07] the way that we go about working with these agents is something that
[1:09] these agents is something that
[1:09] these agents is something that fundamentally is brand new, and we don't
[1:11] fundamentally is brand new, and we don't
[1:11] fundamentally is brand new, and we don't really know all the good parts yet. Uh,
[1:13] really know all the good parts yet. Uh,
[1:13] really know all the good parts yet. Uh, but hopefully today I can walk you
[1:15] but hopefully today I can walk you
[1:15] but hopefully today I can walk you through some of what I believe the good
[1:17] through some of what I believe the good
[1:17] through some of what I believe the good parts of working with these agents are
[1:19] parts of working with these agents are
[1:19] parts of working with these agents are and how to be effective in your own code
[1:20] and how to be effective in your own code
[1:20] and how to be effective in your own code bases. uh to give a little bit of
[1:23] bases. uh to give a little bit of
[1:23] bases. uh to give a little bit of context on why you should listen to me
[1:25] context on why you should listen to me
[1:25] context on why you should listen to me about this. Uh back in June of last
[1:28] about this. Uh back in June of last
[1:28] about this. Uh back in June of last year, uh when we had just had the
[1:31] year, uh when we had just had the
[1:31] year, uh when we had just had the earliest reasoning models around 03 and
[1:33] earliest reasoning models around 03 and
[1:33] earliest reasoning models around 03 and the very earliest versions of codec cli,
[1:36] the very earliest versions of codec cli,
[1:36] the very earliest versions of codec cli, which is open coding agent, um I had an
[1:40] which is open coding agent, um I had an
[1:40] which is open coding agent, um I had an insane idea that I would try and get
[1:42] insane idea that I would try and get
[1:42] insane idea that I would try and get this tool to do my job. And at the time
[1:45] this tool to do my job. And at the time
[1:45] this tool to do my job. And at the time with less capable models, that wasn't
[1:48] with less capable models, that wasn't
[1:48] with less capable models, that wasn't true. I asked the agent to read my
[1:50] true. I asked the agent to read my
[1:50] true. I asked the agent to read my alerts channel in Slack and triage a
[1:52] alerts channel in Slack and triage a
[1:52] alerts channel in Slack and triage a page. It would not do that and kind of
[1:55] page. It would not do that and kind of
[1:55] page. It would not do that and kind of got myself into this operating mode of
[1:57] got myself into this operating mode of
[1:57] got myself into this operating mode of presenting myself as a tool to the model
[1:59] presenting myself as a tool to the model
[1:59] presenting myself as a tool to the model in order to empower it to solve
[2:02] in order to empower it to solve
[2:02] in order to empower it to solve problems, issues, and write code on my
[2:04] problems, issues, and write code on my
[2:04] problems, issues, and write code on my behalf and ended up in this very quickly
[2:07] behalf and ended up in this very quickly
[2:07] behalf and ended up in this very quickly accumulating snowball of effective use
[2:10] accumulating snowball of effective use
[2:10] accumulating snowball of effective use of this tool by giving it more and more
[2:13] of this tool by giving it more and more
[2:13] of this tool by giving it more and more powerful tools and more and more context
[2:15] powerful tools and more and more context
[2:15] powerful tools and more and more context around what it means to do the job. Uh,
[2:18] around what it means to do the job. Uh,
[2:18] around what it means to do the job. Uh, there's a bunch of patterns here that
[2:19] there's a bunch of patterns here that
[2:20] there's a bunch of patterns here that make that effective and stack really,
[2:22] make that effective and stack really,
[2:22] make that effective and stack really, really well for your teams that I'm
[2:23] really well for your teams that I'm
[2:23] really well for your teams that I'm going to go through today.
[2:26] going to go through today.
[2:26] going to go through today. I know I'm preaching to the choir here.
[2:28] I know I'm preaching to the choir here.
[2:28] I know I'm preaching to the choir here. Everybody's AI native. That's why we're
[2:30] Everybody's AI native. That's why we're
[2:30] Everybody's AI native. That's why we're at the con here. Uh, but the way we
[2:33] at the con here. Uh, but the way we
[2:33] at the con here. Uh, but the way we build software has changed pretty
[2:35] build software has changed pretty
[2:36] build software has changed pretty significantly in the last 6 months. I
[2:38] significantly in the last 6 months. I
[2:38] significantly in the last 6 months. I would say in December with the
[2:40] would say in December with the
[2:40] would say in December with the introduction of GPT 5.2, to Opus 4.5, we
[2:43] introduction of GPT 5.2, to Opus 4.5, we
[2:43] introduction of GPT 5.2, to Opus 4.5, we really reach singularity levels of
[2:45] really reach singularity levels of
[2:45] really reach singularity levels of software engineering and code production
[2:48] software engineering and code production
[2:48] software engineering and code production being something that these tools do
[2:49] being something that these tools do
[2:50] being something that these tools do insanely well. And
[2:52] insanely well. And
[2:52] insanely well. And this is a level of disruption that I
[2:54] this is a level of disruption that I
[2:54] this is a level of disruption that I think we have typically only seen once
[2:56] think we have typically only seen once
[2:56] think we have typically only seen once every decade here. The last one that I
[2:57] every decade here. The last one that I
[2:57] every decade here. The last one that I can think of is probably like the
[2:59] can think of is probably like the
[2:59] can think of is probably like the existence of the cloud as a tool to
[3:01] existence of the cloud as a tool to
[3:01] existence of the cloud as a tool to accelerate ourselves. And with that sort
[3:04] accelerate ourselves. And with that sort
[3:04] accelerate ourselves. And with that sort of like cadence of disruptive
[3:06] of like cadence of disruptive
[3:06] of like cadence of disruptive innovation, we have had a lot of time to
[3:09] innovation, we have had a lot of time to
[3:09] innovation, we have had a lot of time to internalize changes to our workflows and
[3:11] internalize changes to our workflows and
[3:11] internalize changes to our workflows and the way we go about building. But here
[3:16] the way we go about building. But here
[3:16] the way we go about building. But here the technology keeps in changing so
[3:19] the technology keeps in changing so
[3:19] the technology keeps in changing so rapidly with every point release of
[3:20] rapidly with every point release of
[3:20] rapidly with every point release of these models where I find myself very
[3:23] these models where I find myself very
[3:23] these models where I find myself very often having to re-evaluate my priors of
[3:25] often having to re-evaluate my priors of
[3:26] often having to re-evaluate my priors of what even is possible to achieve with
[3:28] what even is possible to achieve with
[3:28] what even is possible to achieve with these tools. And I think if you're not
[3:31] these tools. And I think if you're not
[3:31] these tools. And I think if you're not in the habit of kind of completely
[3:34] in the habit of kind of completely
[3:34] in the habit of kind of completely retooling your stack and the way you
[3:35] retooling your stack and the way you
[3:36] retooling your stack and the way you work with every point release of the
[3:37] work with every point release of the
[3:37] work with every point release of the model, you are in a way missing out on
[3:40] model, you are in a way missing out on
[3:40] model, you are in a way missing out on what it is that you can achieve with
[3:42] what it is that you can achieve with
[3:42] what it is that you can achieve with these tools.
[3:48] The reasons that the way we have built
[3:48] The reasons that the way we have built software has changed and continues
[3:51] software has changed and continues
[3:51] software has changed and continues changing at an increasingly rapid pace
[3:53] changing at an increasingly rapid pace
[3:53] changing at an increasingly rapid pace is because we have kind of upended some
[3:56] is because we have kind of upended some
[3:56] is because we have kind of upended some of the core axioms of what it means to
[3:58] of the core axioms of what it means to
[3:58] of the core axioms of what it means to build software.
[4:00] build software.
[4:00] build software. Right now I'm telling you that models
[4:02] Right now I'm telling you that models
[4:02] Right now I'm telling you that models are good enough in order to do
[4:04] are good enough in order to do
[4:04] are good enough in order to do significant parts of the software
[4:05] significant parts of the software
[4:05] significant parts of the software engineering life cycle. Not just writing
[4:07] engineering life cycle. Not just writing
[4:07] engineering life cycle. Not just writing code but debugging, triaging, responding
[4:11] code but debugging, triaging, responding
[4:11] code but debugging, triaging, responding to customers, planning, scheduling work,
[4:13] to customers, planning, scheduling work,
[4:13] to customers, planning, scheduling work, all these other bits that are outside of
[4:15] all these other bits that are outside of
[4:15] all these other bits that are outside of the core, would you say production
[4:18] the core, would you say production
[4:18] the core, would you say production function of a software engineer.
[4:21] function of a software engineer.
[4:21] function of a software engineer. A lot of the way we have toolled teams
[4:24] A lot of the way we have toolled teams
[4:24] A lot of the way we have toolled teams and organizations and road maps have
[4:26] and organizations and road maps have
[4:26] and organizations and road maps have been built around this idea that the
[4:28] been built around this idea that the
[4:28] been built around this idea that the production of code is this very very
[4:29] production of code is this very very
[4:29] production of code is this very very expensive thing that is going to
[4:31] expensive thing that is going to
[4:31] expensive thing that is going to dominate most of our headcount resources
[4:33] dominate most of our headcount resources
[4:33] dominate most of our headcount resources and is slow. And in this world where we
[4:37] and is slow. And in this world where we
[4:37] and is slow. And in this world where we can give a prompt to a coding agent and
[4:39] can give a prompt to a coding agent and
[4:39] can give a prompt to a coding agent and get a PR or six out of it, that
[4:41] get a PR or six out of it, that
[4:42] get a PR or six out of it, that constraint is no longer true. And we
[4:45] constraint is no longer true. And we
[4:45] constraint is no longer true. And we kind of have these teams who were doing
[4:48] kind of have these teams who were doing
[4:48] kind of have these teams who were doing the bulk of the production for software
[4:50] the bulk of the production for software
[4:50] the bulk of the production for software that need to figure out ways to increase
[4:53] that need to figure out ways to increase
[4:53] that need to figure out ways to increase their leverage by delegating increasing
[4:55] their leverage by delegating increasing
[4:55] their leverage by delegating increasing parts of that responsibility to these
[4:57] parts of that responsibility to these
[4:57] parts of that responsibility to these machines.
[4:58] machines.
[4:58] machines. So for all the software engineers and
[5:01] So for all the software engineers and
[5:01] So for all the software engineers and engineering managers and product
[5:03] engineering managers and product
[5:03] engineering managers and product managers and designers who are trying to
[5:05] managers and designers who are trying to
[5:05] managers and designers who are trying to incorporate this technology into the
[5:07] incorporate this technology into the
[5:07] incorporate this technology into the your work, all of your goals are to be
[5:10] your work, all of your goals are to be
[5:10] your work, all of your goals are to be how to unblock your execution team,
[5:12] how to unblock your execution team,
[5:12] how to unblock your execution team, these coding agents from being able to
[5:15] these coding agents from being able to
[5:15] these coding agents from being able to make your ideas, your vision, and your
[5:17] make your ideas, your vision, and your
[5:17] make your ideas, your vision, and your products a reality.
[5:23] So
[5:23] So having just told everybody here that the
[5:26] having just told everybody here that the
[5:26] having just told everybody here that the core constraints on software engineering
[5:28] core constraints on software engineering
[5:28] core constraints on software engineering no longer apply. What are those core
[5:30] no longer apply. What are those core
[5:30] no longer apply. What are those core constraints? Right? We have kind of a
[5:32] constraints? Right? We have kind of a
[5:32] constraints? Right? We have kind of a new set of problems to contend with
[5:34] new set of problems to contend with
[5:34] new set of problems to contend with using agents in order to produce our
[5:36] using agents in order to produce our
[5:36] using agents in order to produce our software. And to me these three things
[5:39] software. And to me these three things
[5:39] software. And to me these three things are the foundational limits that remain
[5:41] are the foundational limits that remain
[5:41] are the foundational limits that remain in a world where we are as a team of
[5:44] in a world where we are as a team of
[5:44] in a world where we are as a team of humans and agents producing software.
[5:46] humans and agents producing software.
[5:46] humans and agents producing software. Human time is the fundamentally scarce
[5:49] Human time is the fundamentally scarce
[5:49] Human time is the fundamentally scarce resource that we have. You know, I know
[5:52] resource that we have. You know, I know
[5:52] resource that we have. You know, I know I max out probably at three concurrent
[5:55] I max out probably at three concurrent
[5:55] I max out probably at three concurrent sessions on my laptop. If I want to be
[5:57] sessions on my laptop. If I want to be
[5:57] sessions on my laptop. If I want to be more parallel and have higher
[5:59] more parallel and have higher
[5:59] more parallel and have higher throughput, I must find ways to remove
[6:02] throughput, I must find ways to remove
[6:02] throughput, I must find ways to remove my own synchronous attention from the
[6:04] my own synchronous attention from the
[6:04] my own synchronous attention from the process.
[6:06] process.
[6:06] process. Human and model attention are these
[6:07] Human and model attention are these
[6:08] Human and model attention are these foundational limits, right? In the
[6:10] foundational limits, right? In the
[6:10] foundational limits, right? In the architecture of these LLMs, attention
[6:12] architecture of these LLMs, attention
[6:12] architecture of these LLMs, attention must sum to one. uh thrashing the agents
[6:15] must sum to one. uh thrashing the agents
[6:15] must sum to one. uh thrashing the agents by having them do more and more work
[6:17] by having them do more and more work
[6:17] by having them do more and more work with conflicting and overbearing
[6:18] with conflicting and overbearing
[6:18] with conflicting and overbearing requirements in the course of a task is
[6:20] requirements in the course of a task is
[6:20] requirements in the course of a task is something that is always going to
[6:22] something that is always going to
[6:22] something that is always going to degrade performance less and less over
[6:24] degrade performance less and less over
[6:24] degrade performance less and less over time but it is one of those core limits
[6:26] time but it is one of those core limits
[6:26] time but it is one of those core limits of the models. So, we need to retool the
[6:29] of the models. So, we need to retool the
[6:29] of the models. So, we need to retool the way we work in order to be more
[6:31] way we work in order to be more
[6:31] way we work in order to be more parallel, fork off a bunch more tasks,
[6:33] parallel, fork off a bunch more tasks,
[6:34] parallel, fork off a bunch more tasks, be willing to accept smaller or larger
[6:36] be willing to accept smaller or larger
[6:36] be willing to accept smaller or larger or many more PRs in order to let the
[6:39] or many more PRs in order to let the
[6:39] or many more PRs in order to let the agents explore what it means to do the
[6:41] agents explore what it means to do the
[6:41] agents explore what it means to do the job that we need them to do. And
[6:43] job that we need them to do. And
[6:43] job that we need them to do. And finally, you all probably deeply live
[6:45] finally, you all probably deeply live
[6:45] finally, you all probably deeply live this uh model context window.
[6:48] this uh model context window.
[6:48] this uh model context window. Things that get bigger over time, still
[6:50] Things that get bigger over time, still
[6:50] Things that get bigger over time, still a scarce resource, something we need to
[6:52] a scarce resource, something we need to
[6:52] a scarce resource, something we need to protect. I will say in my own experience
[6:55] protect. I will say in my own experience
[6:55] protect. I will say in my own experience with the GPT series of models, autoco
[6:57] with the GPT series of models, autoco
[6:57] with the GPT series of models, autoco compaction is fantastic. I never think
[6:59] compaction is fantastic. I never think
[6:59] compaction is fantastic. I never think about a context window anymore. I can
[7:01] about a context window anymore. I can
[7:01] about a context window anymore. I can let a task go for 6, 12, 36 hours and
[7:04] let a task go for 6, 12, 36 hours and
[7:04] let a task go for 6, 12, 36 hours and still get good results. But the context
[7:07] still get good results. But the context
[7:07] still get good results. But the context window being obliterated and rebuilt
[7:09] window being obliterated and rebuilt
[7:09] window being obliterated and rebuilt over the course of these autocompactions
[7:11] over the course of these autocompactions
[7:11] over the course of these autocompactions is something you must contend with. And
[7:14] is something you must contend with. And
[7:14] is something you must contend with. And there are ways that we structure the
[7:16] there are ways that we structure the
[7:16] there are ways that we structure the context we give the model or continually
[7:18] context we give the model or continually
[7:18] context we give the model or continually resurface context to the model to deal
[7:20] resurface context to the model to deal
[7:20] resurface context to the model to deal with this constraint that context
[7:22] with this constraint that context
[7:22] with this constraint that context windows are continually being emptied
[7:23] windows are continually being emptied
[7:23] windows are continually being emptied and filled. [snorts]
[7:29] Okay, so we've got these agents that we
[7:29] Okay, so we've got these agents that we hope can produce more and more of our
[7:31] hope can produce more and more of our
[7:31] hope can produce more and more of our software that we can remove humans more
[7:33] software that we can remove humans more
[7:33] software that we can remove humans more and more from the loop in order to
[7:34] and more from the loop in order to
[7:34] and more from the loop in order to produce more code, more features, solve
[7:37] produce more code, more features, solve
[7:37] produce more code, more features, solve more user needs, address more critical
[7:39] more user needs, address more critical
[7:39] more user needs, address more critical user journeys with higher quality and
[7:41] user journeys with higher quality and
[7:41] user journeys with higher quality and fidelity.
[7:43] fidelity.
[7:43] fidelity. How do we make sure that we as a team
[7:45] How do we make sure that we as a team
[7:45] How do we make sure that we as a team with our agents do a good job? And I
[7:49] with our agents do a good job? And I
[7:49] with our agents do a good job? And I think
[7:51] think
[7:51] think a newish thing here is we have to
[7:53] a newish thing here is we have to
[7:53] a newish thing here is we have to actually articulate that. We have to
[7:55] actually articulate that. We have to
[7:55] actually articulate that. We have to write it down. Uh I know like it used to
[7:58] write it down. Uh I know like it used to
[7:58] write it down. Uh I know like it used to be the case, oh, you know, we'll have
[8:00] be the case, oh, you know, we'll have
[8:00] be the case, oh, you know, we'll have people, we'll have meetings through
[8:02] people, we'll have meetings through
[8:02] people, we'll have meetings through osmosis. Like people will understand
[8:04] osmosis. Like people will understand
[8:04] osmosis. Like people will understand what it means for us as a team to write
[8:05] what it means for us as a team to write
[8:05] what it means for us as a team to write highquality software to work effectively
[8:08] highquality software to work effectively
[8:08] highquality software to work effectively together. And agents just do not have
[8:11] together. And agents just do not have
[8:11] together. And agents just do not have that capability. They don't have
[8:12] that capability. They don't have
[8:12] that capability. They don't have presence in our standup. Uh they don't
[8:15] presence in our standup. Uh they don't
[8:15] presence in our standup. Uh they don't have this durable memory that
[8:17] have this durable memory that
[8:17] have this durable memory that accumulates context and battle scars
[8:18] accumulates context and battle scars
[8:18] accumulates context and battle scars over time. So we have to find ways to
[8:21] over time. So we have to find ways to
[8:21] over time. So we have to find ways to make all these nonfunctional
[8:23] make all these nonfunctional
[8:23] make all these nonfunctional requirements of writing good software
[8:25] requirements of writing good software
[8:25] requirements of writing good software legible to the agent. And as an LLM, the
[8:29] legible to the agent. And as an LLM, the
[8:29] legible to the agent. And as an LLM, the thing that it craves, the thing that
[8:31] thing that it craves, the thing that
[8:31] thing that it craves, the thing that drives it is text. So figuring out ways
[8:34] drives it is text. So figuring out ways
[8:34] drives it is text. So figuring out ways to take the definition of what it means
[8:36] to take the definition of what it means
[8:36] to take the definition of what it means to do a good job and write it down is a
[8:40] to do a good job and write it down is a
[8:40] to do a good job and write it down is a net new function for a software
[8:42] net new function for a software
[8:42] net new function for a software engineering team in 2026.
[8:45] engineering team in 2026.
[8:45] engineering team in 2026. But it's not enough to just write things
[8:47] But it's not enough to just write things
[8:47] But it's not enough to just write things down. We need to make sure that this
[8:50] down. We need to make sure that this
[8:50] down. We need to make sure that this text is a thing that the agent will look
[8:52] text is a thing that the agent will look
[8:52] text is a thing that the agent will look at because it it doesn't do much to say
[8:55] at because it it doesn't do much to say
[8:55] at because it it doesn't do much to say you will write reliable network code by
[8:57] you will write reliable network code by
[8:57] you will write reliable network code by making sure that retries and timeouts
[8:59] making sure that retries and timeouts
[8:59] making sure that retries and timeouts are consistently applied if that text
[9:01] are consistently applied if that text
[9:01] are consistently applied if that text never makes it to the agent. So figuring
[9:04] never makes it to the agent. So figuring
[9:04] never makes it to the agent. So figuring out ways that not only we can write
[9:06] out ways that not only we can write
[9:06] out ways that not only we can write things down but also have them pulled
[9:08] things down but also have them pulled
[9:08] things down but also have them pulled into context at the right time in ways
[9:11] into context at the right time in ways
[9:11] into context at the right time in ways that don't thrash the agent and still
[9:14] that don't thrash the agent and still
[9:14] that don't thrash the agent and still lead it to be creative and reason which
[9:16] lead it to be creative and reason which
[9:16] lead it to be creative and reason which are the power of these models is the
[9:18] are the power of these models is the
[9:18] are the power of these models is the important thing.
[9:22] important thing.
[9:22] important thing. So to kind of take a step back and look
[9:24] So to kind of take a step back and look
[9:24] So to kind of take a step back and look at some
[9:26] at some
[9:26] at some in the small instances of context and
[9:29] in the small instances of context and
[9:29] in the small instances of context and what it means to kind of like think
[9:31] what it means to kind of like think
[9:31] what it means to kind of like think systematically and close loops for the
[9:33] systematically and close loops for the
[9:33] systematically and close loops for the models and for your team.
[9:36] models and for your team.
[9:36] models and for your team. If I were onboarding a new engineer to
[9:38] If I were onboarding a new engineer to
[9:38] If I were onboarding a new engineer to my team and we were I was reviewing some
[9:41] my team and we were I was reviewing some
[9:41] my team and we were I was reviewing some React code that they had written uh and
[9:44] React code that they had written uh and
[9:44] React code that they had written uh and I knew for this particular set of
[9:46] I knew for this particular set of
[9:46] I knew for this particular set of components uh we use uh suspense because
[9:50] components uh we use uh suspense because
[9:50] components uh we use uh suspense because that leads to better performance in the
[9:51] that leads to better performance in the
[9:51] that leads to better performance in the front end. I would be able to give that
[9:54] front end. I would be able to give that
[9:54] front end. I would be able to give that feedback once to the human and they
[9:57] feedback once to the human and they
[9:57] feedback once to the human and they would incorporate it into their mental
[9:59] would incorporate it into their mental
[9:59] would incorporate it into their mental model of the codebase what it means for
[10:01] model of the codebase what it means for
[10:01] model of the codebase what it means for these different screens to relate to
[10:02] these different screens to relate to
[10:02] these different screens to relate to each other well and I would largely
[10:04] each other well and I would largely
[10:04] each other well and I would largely solve that problem going forward by
[10:07] solve that problem going forward by
[10:07] solve that problem going forward by empowering my teammate to know more
[10:09] empowering my teammate to know more
[10:09] empowering my teammate to know more about what it means to do a good job
[10:12] about what it means to do a good job
[10:12] about what it means to do a good job but I can't really do that with an agent
[10:14] but I can't really do that with an agent
[10:14] but I can't really do that with an agent in the same way so I kind of have to
[10:16] in the same way so I kind of have to
[10:16] in the same way so I kind of have to step back
[10:18] step back
[10:18] step back feedback on an agent produced PR and
[10:21] feedback on an agent produced PR and
[10:21] feedback on an agent produced PR and then
[10:22] then
[10:22] then figure out a way to make these mistakes
[10:25] figure out a way to make these mistakes
[10:25] figure out a way to make these mistakes going
[10:40] was misaligned. How do I figure out
[10:40] was misaligned. How do I figure out where I can write it down? What lints I
[10:42] where I can write it down? What lints I
[10:42] where I can write it down? What lints I can have fail? What tests need to exist?
[10:46] can have fail? What tests need to exist?
[10:46] can have fail? What tests need to exist? whether or not I can empower a reviewer
[10:47] whether or not I can empower a reviewer
[10:48] whether or not I can empower a reviewer agent to look at all the proposed diffs
[10:49] agent to look at all the proposed diffs
[10:50] agent to look at all the proposed diffs through the lens of these guardrails to
[10:51] through the lens of these guardrails to
[10:52] through the lens of these guardrails to make it so that this feedback is
[10:54] make it so that this feedback is
[10:54] make it so that this feedback is actually durably encoded as a static
[10:56] actually durably encoded as a static
[10:56] actually durably encoded as a static guard rail that we apply to every PR
[10:59] guard rail that we apply to every PR
[10:59] guard rail that we apply to every PR going forward. It's not enough to do
[11:01] going forward. It's not enough to do
[11:01] going forward. It's not enough to do point in time fixes with these models.
[11:03] point in time fixes with these models.
[11:03] point in time fixes with these models. We want to make every mistake something
[11:06] We want to make every mistake something
[11:06] We want to make every mistake something that is just not possible. I never want
[11:08] that is just not possible. I never want
[11:08] that is just not possible. I never want to give the same review feedback twice.
[11:11] to give the same review feedback twice.
[11:12] to give the same review feedback twice. And this is really the core of what
[11:13] And this is really the core of what
[11:14] And this is really the core of what harness engineering is. Harness
[11:15] harness engineering is. Harness
[11:15] harness engineering is. Harness engineering is making context around
[11:18] engineering is making context around
[11:18] engineering is making context around what it means to do a good job legible
[11:21] what it means to do a good job legible
[11:21] what it means to do a good job legible and then just in time surface to the
[11:23] and then just in time surface to the
[11:23] and then just in time surface to the agent over the course of its
[11:24] agent over the course of its
[11:24] agent over the course of its trajectories in order to steer and
[11:27] trajectories in order to steer and
[11:27] trajectories in order to steer and refine its output to make sure that
[11:29] refine its output to make sure that
[11:29] refine its output to make sure that every PR we get adheres to the golden
[11:31] every PR we get adheres to the golden
[11:32] every PR we get adheres to the golden thread of what we consider to be
[11:33] thread of what we consider to be
[11:34] thread of what we consider to be acceptable highquality aligned software
[11:45] agents
[11:45] agents that I would normally consider to be
[11:48] that I would normally consider to be
[11:48] that I would normally consider to be like good practice around DevOps and
[11:51] like good practice around DevOps and
[11:51] like good practice around DevOps and shifting left as far as possible in
[11:52] shifting left as far as possible in
[11:52] shifting left as far as possible in order to make things cheaper earlier in
[11:54] order to make things cheaper earlier in
[11:54] order to make things cheaper earlier in the process. I don't do that at all when
[11:57] the process. I don't do that at all when
[11:57] the process. I don't do that at all when working with agents. In fact, I try and
[12:00] working with agents. In fact, I try and
[12:00] working with agents. In fact, I try and put my interventions as far right in the
[12:02] put my interventions as far right in the
[12:02] put my interventions as far right in the process as I can in order to minimize my
[12:05] process as I can in order to minimize my
[12:05] process as I can in order to minimize my own synchronous time having to engage
[12:07] own synchronous time having to engage
[12:07] own synchronous time having to engage with these issues.
[12:08] with these issues.
[12:08] with these issues. For example, if I'm working on a PR and
[12:11] For example, if I'm working on a PR and
[12:11] For example, if I'm working on a PR and I realize I get a bad result,
[12:14] I realize I get a bad result,
[12:14] I realize I get a bad result, it might just be the case that I'll
[12:15] it might just be the case that I'll
[12:15] it might just be the case that I'll trash it, change my prompt, and probably
[12:17] trash it, change my prompt, and probably
[12:17] trash it, change my prompt, and probably get something good out of it. But that's
[12:19] get something good out of it. But that's
[12:19] get something good out of it. But that's not really a durable thing. It's not
[12:21] not really a durable thing. It's not
[12:21] not really a durable thing. It's not reliable. I don't socialize those
[12:23] reliable. I don't socialize those
[12:23] reliable. I don't socialize those improvements to my team. So, sort of the
[12:25] improvements to my team. So, sort of the
[12:25] improvements to my team. So, sort of the next level of shifting that left is to
[12:28] next level of shifting that left is to
[12:28] next level of shifting that left is to write it down. And if writing it down is
[12:30] write it down. And if writing it down is
[12:30] write it down. And if writing it down is not enough, writing down and then
[12:33] not enough, writing down and then
[12:33] not enough, writing down and then empowering a review agent to prop judge
[12:36] empowering a review agent to prop judge
[12:36] empowering a review agent to prop judge every diff is another way I can shift
[12:38] every diff is another way I can shift
[12:38] every diff is another way I can shift that left. And then I can shift it left
[12:40] that left. And then I can shift it left
[12:40] that left. And then I can shift it left further into statically verifiable lints
[12:42] further into statically verifiable lints
[12:42] further into statically verifiable lints and guard rails and tests and on and on
[12:44] and guard rails and tests and on and on
[12:44] and guard rails and tests and on and on and on earlier in the process. And we
[12:48] and on earlier in the process. And we
[12:48] and on earlier in the process. And we think about this as needing to surface
[12:51] think about this as needing to surface
[12:51] think about this as needing to surface to the agent all those sets of
[12:54] to the agent all those sets of
[12:54] to the agent all those sets of non-functional requirements.
[12:57] non-functional requirements.
[12:57] non-functional requirements. It is not the case that these agents
[12:59] It is not the case that these agents
[12:59] It is not the case that these agents don't know how to write high-quality
[13:00] don't know how to write high-quality
[13:00] don't know how to write high-quality software. They absolutely do. But as
[13:03] software. They absolutely do. But as
[13:03] software. They absolutely do. But as artifacts of their training, they have
[13:05] artifacts of their training, they have
[13:05] artifacts of their training, they have seen every possible permutation of every
[13:08] seen every possible permutation of every
[13:08] seen every possible permutation of every possible choice that goes into producing
[13:10] possible choice that goes into producing
[13:10] possible choice that goes into producing software. And it's up to us to prune
[13:13] software. And it's up to us to prune
[13:13] software. And it's up to us to prune latent space to tell it which choices we
[13:16] latent space to tell it which choices we
[13:16] latent space to tell it which choices we want to make. Um, you know, if I am
[13:20] want to make. Um, you know, if I am
[13:20] want to make. Um, you know, if I am using these things to prototype a new
[13:23] using these things to prototype a new
[13:23] using these things to prototype a new data science model in a Jupyter
[13:25] data science model in a Jupyter
[13:25] data science model in a Jupyter notebook, I have a very different set of
[13:27] notebook, I have a very different set of
[13:27] notebook, I have a very different set of choices I make in the production of
[13:28] choices I make in the production of
[13:28] choices I make in the production of those diffs than I do if I am working on
[13:31] those diffs than I do if I am working on
[13:31] those diffs than I do if I am working on adding a new index type to a database.
[13:34] adding a new index type to a database.
[13:34] adding a new index type to a database. They're just fundamentally different
[13:35] They're just fundamentally different
[13:35] They're just fundamentally different tasks. So, it's up to us as owners of
[13:38] tasks. So, it's up to us as owners of
[13:38] tasks. So, it's up to us as owners of our code bases to make legible the sets
[13:41] our code bases to make legible the sets
[13:41] our code bases to make legible the sets of decisions that we make in order to
[13:43] of decisions that we make in order to
[13:43] of decisions that we make in order to produce our code. what it means for
[13:45] produce our code. what it means for
[13:45] produce our code. what it means for something to be a prototype versus
[13:47] something to be a prototype versus
[13:47] something to be a prototype versus production feature that requires a stage
[13:50] production feature that requires a stage
[13:50] production feature that requires a stage roll out with AB tests and feature
[13:51] roll out with AB tests and feature
[13:51] roll out with AB tests and feature flags. And if we write this down and
[13:54] flags. And if we write this down and
[13:54] flags. And if we write this down and give the agent some tools to reason
[13:57] give the agent some tools to reason
[13:57] give the agent some tools to reason about what type of changes being made to
[14:00] about what type of changes being made to
[14:00] about what type of changes being made to find runbooks that are appropriate to
[14:03] find runbooks that are appropriate to
[14:03] find runbooks that are appropriate to refining its output over the course of
[14:05] refining its output over the course of
[14:05] refining its output over the course of its PRs and epics, we can give it bounds
[14:09] its PRs and epics, we can give it bounds
[14:09] its PRs and epics, we can give it bounds and context, but still give it the space
[14:11] and context, but still give it the space
[14:11] and context, but still give it the space to reason, be creative, and cook.
[14:20] One maybe non-obvious thing is that
[14:20] One maybe non-obvious thing is that because the agents crave text, every bit
[14:22] because the agents crave text, every bit
[14:22] because the agents crave text, every bit of text that we feed them is in some
[14:26] of text that we feed them is in some
[14:26] of text that we feed them is in some sense prompting. It's going to inform
[14:28] sense prompting. It's going to inform
[14:28] sense prompting. It's going to inform what tokens get predicted, which means
[14:30] what tokens get predicted, which means
[14:30] what tokens get predicted, which means it's going to inform the code and the
[14:31] it's going to inform the code and the
[14:31] it's going to inform the code and the diffs that we produce. This means all
[14:34] diffs that we produce. This means all
[14:34] diffs that we produce. This means all the code in the repository of itself
[14:36] the code in the repository of itself
[14:36] the code in the repository of itself outside of the documentation knowledge
[14:38] outside of the documentation knowledge
[14:38] outside of the documentation knowledge base is also prompts. So
[14:41] base is also prompts. So
[14:41] base is also prompts. So if we think about aligning the codebase
[14:44] if we think about aligning the codebase
[14:44] if we think about aligning the codebase or unifying it all on the same patterns,
[14:47] or unifying it all on the same patterns,
[14:47] or unifying it all on the same patterns, we kind of limit the amount of attention
[14:49] we kind of limit the amount of attention
[14:49] we kind of limit the amount of attention the model needs in order to do a good
[14:51] the model needs in order to do a good
[14:51] the model needs in order to do a good job. If I am able to standardize on
[14:54] job. If I am able to standardize on
[14:54] job. If I am able to standardize on hotel across my entire stack, for
[14:56] hotel across my entire stack, for
[14:56] hotel across my entire stack, for example, when the model thinks
[14:58] example, when the model thinks
[14:58] example, when the model thinks observability, it's able to translate
[15:00] observability, it's able to translate
[15:00] observability, it's able to translate context that it sees in one part of the
[15:02] context that it sees in one part of the
[15:02] context that it sees in one part of the repository over to something halfway
[15:04] repository over to something halfway
[15:04] repository over to something halfway across the codebase without any loss of
[15:06] across the codebase without any loss of
[15:06] across the codebase without any loss of quality or intelligence. But if I have
[15:09] quality or intelligence. But if I have
[15:09] quality or intelligence. But if I have six of observability stacks in the
[15:11] six of observability stacks in the
[15:11] six of observability stacks in the codebase, the model's going to have to
[15:12] codebase, the model's going to have to
[15:12] codebase, the model's going to have to spend a lot more time figuring out which
[15:15] spend a lot more time figuring out which
[15:15] spend a lot more time figuring out which one do I use here. Is this migrated or
[15:18] one do I use here. Is this migrated or
[15:18] one do I use here. Is this migrated or not? What is canonically good? [snorts]
[15:22] not? What is canonically good? [snorts]
[15:22] not? What is canonically good? [snorts] So over the course of the PR, there's
[15:24] So over the course of the PR, there's
[15:24] So over the course of the PR, there's sort of three phases I think about when
[15:26] sort of three phases I think about when
[15:26] sort of three phases I think about when we're talking about context delivery.
[15:29] we're talking about context delivery.
[15:29] we're talking about context delivery. And because we are curating the codebase
[15:33] And because we are curating the codebase
[15:33] And because we are curating the codebase in order to make it efficient to deliver
[15:34] in order to make it efficient to deliver
[15:34] in order to make it efficient to deliver context to these agents, we also want to
[15:36] context to these agents, we also want to
[15:36] context to these agents, we also want to encode that in the operating loop we
[15:38] encode that in the operating loop we
[15:38] encode that in the operating loop we give the model. To me, the most
[15:40] give the model. To me, the most
[15:40] give the model. To me, the most important thing that ends up in that
[15:41] important thing that ends up in that
[15:41] important thing that ends up in that agents.mmd file is a numbered set of
[15:44] agents.mmd file is a numbered set of
[15:44] agents.mmd file is a numbered set of steps that we expect the model to go
[15:47] steps that we expect the model to go
[15:47] steps that we expect the model to go through over every roll out that we do
[15:49] through over every roll out that we do
[15:49] through over every roll out that we do over every session. You know, we first
[15:51] over every session. You know, we first
[15:51] over every session. You know, we first want it to ground itself in the
[15:53] want it to ground itself in the
[15:53] want it to ground itself in the documentation knowledge base in the
[15:55] documentation knowledge base in the
[15:55] documentation knowledge base in the ticket that is proposed.
[15:57] ticket that is proposed.
[15:57] ticket that is proposed. We want it to spider through our history
[15:59] We want it to spider through our history
[15:59] We want it to spider through our history of ADRs and design docs to figure out
[16:02] of ADRs and design docs to figure out
[16:02] of ADRs and design docs to figure out how this might impact other features of
[16:04] how this might impact other features of
[16:04] how this might impact other features of our codebase. We want it to look at the
[16:06] our codebase. We want it to look at the
[16:06] our codebase. We want it to look at the critical user journeys to inform itself
[16:08] critical user journeys to inform itself
[16:08] critical user journeys to inform itself around what screens and user surfaces
[16:11] around what screens and user surfaces
[16:11] around what screens and user surfaces are impacted so it can keep the QA plan
[16:13] are impacted so it can keep the QA plan
[16:13] are impacted so it can keep the QA plan in mind over the course of its
[16:15] in mind over the course of its
[16:15] in mind over the course of its execution. We expect some amount of
[16:17] execution. We expect some amount of
[16:17] execution. We expect some amount of slowness during this process because we
[16:19] slowness during this process because we
[16:19] slowness during this process because we want to page in all the context around
[16:22] want to page in all the context around
[16:22] want to page in all the context around what it means for this feature to slot
[16:24] what it means for this feature to slot
[16:24] what it means for this feature to slot in globally. Uh then there's sort of the
[16:28] in globally. Uh then there's sort of the
[16:28] in globally. Uh then there's sort of the messy middle part of the run where the
[16:30] messy middle part of the run where the
[16:30] messy middle part of the run where the agent is writing code, running tests,
[16:33] agent is writing code, running tests,
[16:33] agent is writing code, running tests, exploring the codebase and for that we
[16:37] exploring the codebase and for that we
[16:37] exploring the codebase and for that we exploit the fact that these agents are
[16:39] exploit the fact that these agents are
[16:39] exploit the fact that these agents are going to call a bunch of tools, run a
[16:41] going to call a bunch of tools, run a
[16:41] going to call a bunch of tools, run a bunch of tests in order to use them to
[16:44] bunch of tests in order to use them to
[16:44] bunch of tests in order to use them to just in time prompt inject the agent to
[16:46] just in time prompt inject the agent to
[16:46] just in time prompt inject the agent to steer its output back to baseline.
[16:49] steer its output back to baseline.
[16:49] steer its output back to baseline. The tests we write, the lints we write
[16:51] The tests we write, the lints we write
[16:52] The tests we write, the lints we write for agents are very different than the
[16:53] for agents are very different than the
[16:53] for agents are very different than the ones that we write for humans. They by
[16:57] ones that we write for humans. They by
[16:57] ones that we write for humans. They by default recognize that agents are going
[17:00] default recognize that agents are going
[17:00] default recognize that agents are going to truncate tool call outputs that they
[17:01] to truncate tool call outputs that they
[17:02] to truncate tool call outputs that they respond really well to descriptive error
[17:03] respond really well to descriptive error
[17:03] respond really well to descriptive error messages that point them to runbooks for
[17:06] messages that point them to runbooks for
[17:06] messages that point them to runbooks for remediation steps. And we are willing to
[17:10] remediation steps. And we are willing to
[17:10] remediation steps. And we are willing to have very many of these things that are
[17:12] have very many of these things that are
[17:12] have very many of these things that are kind of fiddly to write and I wouldn't
[17:13] kind of fiddly to write and I wouldn't
[17:13] kind of fiddly to write and I wouldn't normally think about to go back to this
[17:15] normally think about to go back to this
[17:16] normally think about to go back to this sort of network code example. Uh I am
[17:18] sort of network code example. Uh I am
[17:18] sort of network code example. Uh I am sure all of you have been paged at some
[17:20] sure all of you have been paged at some
[17:20] sure all of you have been paged at some point in your careers around an outage
[17:23] point in your careers around an outage
[17:23] point in your careers around an outage that boiled down to a missing timeout
[17:25] that boiled down to a missing timeout
[17:25] that boiled down to a missing timeout and a retry on a cross- service network
[17:27] and a retry on a cross- service network
[17:27] and a retry on a cross- service network call and the collective amount of
[17:30] call and the collective amount of
[17:30] call and the collective amount of engineering time that has been spent on
[17:31] engineering time that has been spent on
[17:31] engineering time that has been spent on this very common failure mode is
[17:33] this very common failure mode is
[17:34] this very common failure mode is astounding. But still today like there's
[17:36] astounding. But still today like there's
[17:36] astounding. But still today like there's there's there's no code that asserts
[17:38] there's there's no code that asserts
[17:38] there's there's no code that asserts that we pass retries around. There's no
[17:41] that we pass retries around. There's no
[17:41] that we pass retries around. There's no like ESLint plugin that I can slot into
[17:43] like ESLint plugin that I can slot into
[17:43] like ESLint plugin that I can slot into my codebase is going to do this for me.
[17:46] my codebase is going to do this for me.
[17:46] my codebase is going to do this for me. But because the production of code is
[17:47] But because the production of code is
[17:47] But because the production of code is very very cheap now, we can absolutely
[17:50] very very cheap now, we can absolutely
[17:50] very very cheap now, we can absolutely vibe a set of guard rails into place
[17:52] vibe a set of guard rails into place
[17:52] vibe a set of guard rails into place with 100% code coverage and exhaustive
[17:55] with 100% code coverage and exhaustive
[17:55] with 100% code coverage and exhaustive table driven tests and migrate the
[17:57] table driven tests and migrate the
[17:57] table driven tests and migrate the codebase all in one go and just in time
[18:00] codebase all in one go and just in time
[18:00] codebase all in one go and just in time surface this failure to the model every
[18:02] surface this failure to the model every
[18:02] surface this failure to the model every time it writes another fetch call and
[18:03] time it writes another fetch call and
[18:04] time it writes another fetch call and never have to worry about this again.
[18:06] never have to worry about this again.
[18:06] never have to worry about this again. And because we don't have to pollute
[18:09] And because we don't have to pollute
[18:09] And because we don't have to pollute context window upfront and we can
[18:11] context window upfront and we can
[18:11] context window upfront and we can exploit the fact that a tool call output
[18:13] exploit the fact that a tool call output
[18:13] exploit the fact that a tool call output is going to be given less weight during
[18:14] is going to be given less weight during
[18:14] is going to be given less weight during an autocompaction, we just in time
[18:17] an autocompaction, we just in time
[18:17] an autocompaction, we just in time correct the model and still let it go
[18:20] correct the model and still let it go
[18:20] correct the model and still let it go off and do the complex work that we
[18:22] off and do the complex work that we
[18:22] off and do the complex work that we wanted to in our original prompt.
[18:25] wanted to in our original prompt.
[18:25] wanted to in our original prompt. And then sort of after the run, we have
[18:27] And then sort of after the run, we have
[18:27] And then sort of after the run, we have a much easier task of determining
[18:28] a much easier task of determining
[18:28] a much easier task of determining whether or not the code, the diff, the
[18:30] whether or not the code, the diff, the
[18:30] whether or not the code, the diff, the artifact is aligned because it's a
[18:32] artifact is aligned because it's a
[18:32] artifact is aligned because it's a static thing and we have static sets of
[18:34] static thing and we have static sets of
[18:34] static thing and we have static sets of guardrails and can use very very many
[18:37] guardrails and can use very very many
[18:37] guardrails and can use very very many LLM as judge to look at the code
[18:41] LLM as judge to look at the code
[18:41] LLM as judge to look at the code operationalize it with a set or three of
[18:44] operationalize it with a set or three of
[18:44] operationalize it with a set or three of static guard rails. You know, this is
[18:45] static guard rails. You know, this is
[18:45] static guard rails. You know, this is what it means to write reliable code.
[18:48] what it means to write reliable code.
[18:48] what it means to write reliable code. This is what it means to write
[18:49] This is what it means to write
[18:49] This is what it means to write performant React and make a
[18:51] performant React and make a
[18:51] performant React and make a determination. Is this good or bad? And
[18:54] determination. Is this good or bad? And
[18:54] determination. Is this good or bad? And if it's bad, why is it bad? Because the
[18:57] if it's bad, why is it bad? Because the
[18:57] if it's bad, why is it bad? Because the LLM's crave text, these LLM as judges
[19:00] LLM's crave text, these LLM as judges
[19:00] LLM's crave text, these LLM as judges can collaborate with the implementation
[19:02] can collaborate with the implementation
[19:02] can collaborate with the implementation agent over that PR thread, give more
[19:05] agent over that PR thread, give more
[19:05] agent over that PR thread, give more text back to the implementation agent,
[19:06] text back to the implementation agent,
[19:06] text back to the implementation agent, and further realign the proposed diff
[19:09] and further realign the proposed diff
[19:09] and further realign the proposed diff back to baseline.
[19:12] back to baseline.
[19:12] back to baseline. So, we've got agents.mds
[19:15] So, we've got agents.mds
[19:15] So, we've got agents.mds where the context is during what types
[19:18] where the context is during what types
[19:18] where the context is during what types of work the model might want to look at
[19:20] of work the model might want to look at
[19:20] of work the model might want to look at that text, but otherwise not being
[19:22] that text, but otherwise not being
[19:22] that text, but otherwise not being prescriptive around any of the
[19:23] prescriptive around any of the
[19:24] prescriptive around any of the guardrails. We don't want to jam a ton
[19:27] guardrails. We don't want to jam a ton
[19:27] guardrails. We don't want to jam a ton of rules in here because we're going to
[19:30] of rules in here because we're going to
[19:30] of rules in here because we're going to chop up latent space too much. We're
[19:32] chop up latent space too much. We're
[19:32] chop up latent space too much. We're going to make it difficult for the model
[19:34] going to make it difficult for the model
[19:34] going to make it difficult for the model to spider through the codebase with
[19:36] to spider through the codebase with
[19:36] to spider through the codebase with creativity.
[19:38] creativity.
[19:38] creativity. &gt;&gt; [snorts]
[19:39] &gt;&gt; [snorts]
[19:39] &gt;&gt; [snorts] &gt;&gt; I find it very very useful from this
[19:41] &gt;&gt; I find it very very useful from this
[19:41] &gt;&gt; I find it very very useful from this agents.mmd to point to a curated set of
[19:45] agents.mmd to point to a curated set of
[19:45] agents.mmd to point to a curated set of review personas uh that are essentially
[19:47] review personas uh that are essentially
[19:47] review personas uh that are essentially bulleted lists of guard rails. And I
[19:49] bulleted lists of guard rails. And I
[19:49] bulleted lists of guard rails. And I find this really really neat for an
[19:51] find this really really neat for an
[19:51] find this really really neat for an interfacing with the other humans on the
[19:53] interfacing with the other humans on the
[19:53] interfacing with the other humans on the team perspective because it is so cheap
[19:57] team perspective because it is so cheap
[19:57] team perspective because it is so cheap as a team to have a Slack conversation
[20:00] as a team to have a Slack conversation
[20:00] as a team to have a Slack conversation in a thread around what it means to fix
[20:02] in a thread around what it means to fix
[20:02] in a thread around what it means to fix that performance regression and then
[20:04] that performance regression and then
[20:04] that performance regression and then appmentntion the agent in it to say
[20:07] appmentntion the agent in it to say
[20:07] appmentntion the agent in it to say yoink all of this and put up a PR that
[20:09] yoink all of this and put up a PR that
[20:09] yoink all of this and put up a PR that adds it to our static set of guardrails.
[20:12] adds it to our static set of guardrails.
[20:12] adds it to our static set of guardrails. So cheap in order to continually refine
[20:14] So cheap in order to continually refine
[20:14] So cheap in order to continually refine and improve the output of our agents in
[20:15] and improve the output of our agents in
[20:15] and improve the output of our agents in that way.
[20:17] that way.
[20:17] that way. I also think it's really neat to take
[20:19] I also think it's really neat to take
[20:19] I also think it's really neat to take that same sort of pattern and apply it
[20:22] that same sort of pattern and apply it
[20:22] that same sort of pattern and apply it towarding
[20:24] towarding
[20:24] towarding what your product features are or what
[20:26] what your product features are or what
[20:26] what your product features are or what the critical user journeys are or why
[20:28] the critical user journeys are or why
[20:28] the critical user journeys are or why your apps even exist, what user problems
[20:31] your apps even exist, what user problems
[20:31] your apps even exist, what user problems they solve. All this context that we can
[20:33] they solve. All this context that we can
[20:33] they solve. All this context that we can give the agent helps ground it in what
[20:37] give the agent helps ground it in what
[20:37] give the agent helps ground it in what we are trying to do and why how our team
[20:39] we are trying to do and why how our team
[20:39] we are trying to do and why how our team thinks about working because all of this
[20:42] thinks about working because all of this
[20:42] thinks about working because all of this is going to produce more and more
[20:43] is going to produce more and more
[20:43] is going to produce more and more aligned output
[20:50] in that messy middle. We can kind of use
[20:50] in that messy middle. We can kind of use tests on the as tests on the structure
[20:53] tests on the as tests on the structure
[20:53] tests on the as tests on the structure of the files on disk really blunt
[20:57] of the files on disk really blunt
[20:57] of the files on disk really blunt hammers around file line counts or
[20:59] hammers around file line counts or
[20:59] hammers around file line counts or whether or not snapshot tests exist.
[21:01] whether or not snapshot tests exist.
[21:01] whether or not snapshot tests exist. these very very coarse grain tools in
[21:04] these very very coarse grain tools in
[21:04] these very very coarse grain tools in order to make the model do what we know
[21:06] order to make the model do what we know
[21:06] order to make the model do what we know is good.
[21:08] is good.
[21:08] is good. Just requiring that every React
[21:10] Just requiring that every React
[21:10] Just requiring that every React component in our codebase has a snapshot
[21:12] component in our codebase has a snapshot
[21:12] component in our codebase has a snapshot test that gives a 100% branch coverage
[21:16] test that gives a 100% branch coverage
[21:16] test that gives a 100% branch coverage means that the model is naturally
[21:17] means that the model is naturally
[21:17] means that the model is naturally decomposing these things and making them
[21:19] decomposing these things and making them
[21:19] decomposing these things and making them pure where possible and not doing prop
[21:22] pure where possible and not doing prop
[21:22] pure where possible and not doing prop drilling and putting hooks close to
[21:24] drilling and putting hooks close to
[21:24] drilling and putting hooks close to where the data is used because that
[21:25] where the data is used because that
[21:25] where the data is used because that makes it easier for it to fill the
[21:27] makes it easier for it to fill the
[21:27] makes it easier for it to fill the requirement that there must be snapshot
[21:29] requirement that there must be snapshot
[21:29] requirement that there must be snapshot tests. Uh, and we can do this. We can
[21:32] tests. Uh, and we can do this. We can
[21:32] tests. Uh, and we can do this. We can assert this because it's free to produce
[21:33] assert this because it's free to produce
[21:34] assert this because it's free to produce the code that spiders through disk and
[21:36] the code that spiders through disk and
[21:36] the code that spiders through disk and matches up the snapshot test to the
[21:38] matches up the snapshot test to the
[21:38] matches up the snapshot test to the underlying component.
[21:45] Another failure mode that I hear folks
[21:45] Another failure mode that I hear folks talk about a bunch is that, you know,
[21:47] talk about a bunch is that, you know,
[21:47] talk about a bunch is that, you know, these agents are doing type- shaped
[21:49] these agents are doing type- shaped
[21:49] these agents are doing type- shaped probing all the time. I end up with
[21:51] probing all the time. I end up with
[21:51] probing all the time. I end up with these nies or unknowns all over the
[21:52] these nies or unknowns all over the
[21:52] these nies or unknowns all over the codebase. And the way I've approached it
[21:55] codebase. And the way I've approached it
[21:55] codebase. And the way I've approached it is to just statically disallow any
[21:58] is to just statically disallow any
[21:58] is to just statically disallow any function that has a type of any or
[21:59] function that has a type of any or
[21:59] function that has a type of any or unknown unless it's parsing input in a
[22:03] unknown unless it's parsing input in a
[22:03] unknown unless it's parsing input in a route handler or from the database.
[22:05] route handler or from the database.
[22:05] route handler or from the database. Other than that, with ESLint, we just
[22:08] Other than that, with ESLint, we just
[22:08] Other than that, with ESLint, we just ban the existence of that type. We
[22:10] ban the existence of that type. We
[22:10] ban the existence of that type. We require the codebase to be 100% typed,
[22:12] require the codebase to be 100% typed,
[22:12] require the codebase to be 100% typed, which means all this bad behavior and
[22:15] which means all this bad behavior and
[22:15] which means all this bad behavior and weird type probing just kind of falls
[22:17] weird type probing just kind of falls
[22:17] weird type probing just kind of falls out because we require 100% code
[22:19] out because we require 100% code
[22:19] out because we require 100% code coverage. These functions cannot
[22:21] coverage. These functions cannot
[22:21] coverage. These functions cannot possibly be exercised because the
[22:23] possibly be exercised because the
[22:23] possibly be exercised because the unknown types can't exist. And we get
[22:26] unknown types can't exist. And we get
[22:26] unknown types can't exist. And we get more line code, more line code that I
[22:28] more line code, more line code that I
[22:28] more line code, more line code that I would consider acceptable, high quality,
[22:30] would consider acceptable, high quality,
[22:30] would consider acceptable, high quality, maintainable, and all these other sorts
[22:32] maintainable, and all these other sorts
[22:32] maintainable, and all these other sorts of properties.
[22:34] of properties.
[22:34] of properties. And having these failing checks tell the
[22:36] And having these failing checks tell the
[22:36] And having these failing checks tell the agent why they've failed and what to do
[22:38] agent why they've failed and what to do
[22:38] agent why they've failed and what to do instead means that it's able to
[22:40] instead means that it's able to
[22:40] instead means that it's able to self-heal.
[22:43] self-heal.
[22:43] self-heal. Ultimately, as we move into that uh
[22:46] Ultimately, as we move into that uh
[22:46] Ultimately, as we move into that uh third phase of review and merge, we want
[22:49] third phase of review and merge, we want
[22:49] third phase of review and merge, we want to treat the model as if it's another
[22:51] to treat the model as if it's another
[22:51] to treat the model as if it's another member of the team and it needs to
[22:52] member of the team and it needs to
[22:52] member of the team and it needs to convince me to merge its code. Um
[22:57] convince me to merge its code. Um
[22:57] convince me to merge its code. Um I'm not shoulder surfing any of my
[22:58] I'm not shoulder surfing any of my
[22:58] I'm not shoulder surfing any of my teammates in VS Code or Vim, right? when
[23:01] teammates in VS Code or Vim, right? when
[23:01] teammates in VS Code or Vim, right? when they put up a PR and they attest that
[23:03] they put up a PR and they attest that
[23:03] they put up a PR and they attest that they tested the code, I take their word,
[23:05] they tested the code, I take their word,
[23:05] they tested the code, I take their word, you know, and if I am unsure, I'll ask
[23:07] you know, and if I am unsure, I'll ask
[23:07] you know, and if I am unsure, I'll ask them to show me the logs from the
[23:08] them to show me the logs from the
[23:08] them to show me the logs from the staging deploy or to post a screenshot
[23:11] staging deploy or to post a screenshot
[23:11] staging deploy or to post a screenshot of them exercising the feature in uh the
[23:14] of them exercising the feature in uh the
[23:14] of them exercising the feature in uh the app. And we can require these agents to
[23:17] app. And we can require these agents to
[23:18] app. And we can require these agents to do the same thing. Uh this is a lot
[23:21] do the same thing. Uh this is a lot
[23:21] do the same thing. Uh this is a lot easier these days now that we have
[23:23] easier these days now that we have
[23:23] easier these days now that we have things like computer use and browser
[23:25] things like computer use and browser
[23:25] things like computer use and browser use. Uh the codeex app is fantastic,
[23:27] use. Uh the codeex app is fantastic,
[23:27] use. Uh the codeex app is fantastic, highly recommend it. Uh but even without
[23:29] highly recommend it. Uh but even without
[23:29] highly recommend it. Uh but even without that, you know, vibing yourself up an XC
[23:33] that, you know, vibing yourself up an XC
[23:33] that, you know, vibing yourself up an XC connected headless display in a Docker
[23:35] connected headless display in a Docker
[23:35] connected headless display in a Docker container and wiring up FFmpeg to that
[23:38] container and wiring up FFmpeg to that
[23:38] container and wiring up FFmpeg to that stream to record a reproduction video is
[23:40] stream to record a reproduction video is
[23:40] stream to record a reproduction video is within reach because I don't care about
[23:42] within reach because I don't care about
[23:42] within reach because I don't care about how gross this code is. and Codex is
[23:45] how gross this code is. and Codex is
[23:45] how gross this code is. and Codex is able to sling ffmpeg better than anybody
[23:47] able to sling ffmpeg better than anybody
[23:47] able to sling ffmpeg better than anybody in this room probably [snorts]
[23:55] on the back half of things where we are
[23:55] on the back half of things where we are looking for ways to accept the diff. I'm
[23:59] looking for ways to accept the diff. I'm
[23:59] looking for ways to accept the diff. I'm treating it again like I would my human
[24:01] treating it again like I would my human
[24:01] treating it again like I would my human teammates benefit of the doubt bias
[24:03] teammates benefit of the doubt bias
[24:03] teammates benefit of the doubt bias toward merge. What are the P2 and above
[24:05] toward merge. What are the P2 and above
[24:05] toward merge. What are the P2 and above things that would be necessary for me to
[24:07] things that would be necessary for me to
[24:07] things that would be necessary for me to accept this code? use the reviewer
[24:09] accept this code? use the reviewer
[24:09] accept this code? use the reviewer agents, which is really
[24:23] get the coding agent to pick them up,
[24:23] get the coding agent to pick them up, implement it, get the reviewers to be
[24:25] implement it, get the reviewers to be
[24:25] implement it, get the reviewers to be happy, and off we go. And this sort of
[24:28] happy, and off we go. And this sort of
[24:28] happy, and off we go. And this sort of process with me observing along the way
[24:30] process with me observing along the way
[24:30] process with me observing along the way of which review feedback is regularly
[24:32] of which review feedback is regularly
[24:32] of which review feedback is regularly getting surfaced. Why is it making it to
[24:35] getting surfaced. Why is it making it to
[24:35] getting surfaced. Why is it making it to this part of the pipeline, maybe I need
[24:37] this part of the pipeline, maybe I need
[24:37] this part of the pipeline, maybe I need to use that as a signal that I need to
[24:39] to use that as a signal that I need to
[24:39] to use that as a signal that I need to shift some of these guardrails left? And
[24:41] shift some of these guardrails left? And
[24:41] shift some of these guardrails left? And then I can spend my time and the
[24:42] then I can spend my time and the
[24:42] then I can spend my time and the reviewer agents can then spend their
[24:44] reviewer agents can then spend their
[24:44] reviewer agents can then spend their time on more bespoke or more complex
[24:48] time on more bespoke or more complex
[24:48] time on more bespoke or more complex changes that we need them to look at.
[24:52] changes that we need them to look at.
[24:52] changes that we need them to look at. Another thing that you should be
[24:54] Another thing that you should be
[24:54] Another thing that you should be thinking about doing as a team is how to
[24:57] thinking about doing as a team is how to
[24:57] thinking about doing as a team is how to systematize capturing all of this human
[24:59] systematize capturing all of this human
[24:59] systematize capturing all of this human feedback. every review comment, every
[25:01] feedback. every review comment, every
[25:01] feedback. every review comment, every time you have had to interrupt the
[25:03] time you have had to interrupt the
[25:03] time you have had to interrupt the agent, every agentic intervention, every
[25:07] agent, every agentic intervention, every
[25:07] agent, every agentic intervention, every failed build, every exception in
[25:09] failed build, every exception in
[25:09] failed build, every exception in production, all of these in some sense
[25:11] production, all of these in some sense
[25:11] production, all of these in some sense are signals that context was missing to
[25:14] are signals that context was missing to
[25:14] are signals that context was missing to the implementation agent that it did not
[25:16] the implementation agent that it did not
[25:16] the implementation agent that it did not consider the full endto-end consequences
[25:19] consider the full endto-end consequences
[25:19] consider the full endto-end consequences of the code that it wrote and whether or
[25:20] of the code that it wrote and whether or
[25:20] of the code that it wrote and whether or not it would be successfully deployed.
[25:22] not it would be successfully deployed.
[25:22] not it would be successfully deployed. And what we are trying to do, uh, which
[25:25] And what we are trying to do, uh, which
[25:25] And what we are trying to do, uh, which I expect you'll learn about in the next
[25:27] I expect you'll learn about in the next
[25:27] I expect you'll learn about in the next talk, is slurp all this data up and
[25:29] talk, is slurp all this data up and
[25:29] talk, is slurp all this data up and dream over it every night, pointing a
[25:32] dream over it every night, pointing a
[25:32] dream over it every night, pointing a bunch of sub agents at it, trying to
[25:34] bunch of sub agents at it, trying to
[25:34] bunch of sub agents at it, trying to distill whether or not there's anything
[25:37] distill whether or not there's anything
[25:37] distill whether or not there's anything that humans can do better in their
[25:38] that humans can do better in their
[25:38] that humans can do better in their prompting, whether there's missing
[25:39] prompting, whether there's missing
[25:39] prompting, whether there's missing guardrails that should exist in the
[25:41] guardrails that should exist in the
[25:41] guardrails that should exist in the codebase that disallow this behavior,
[25:43] codebase that disallow this behavior,
[25:43] codebase that disallow this behavior, and how we can get to a world where
[25:45] and how we can get to a world where
[25:45] and how we can get to a world where we're more and more headless, less human
[25:47] we're more and more headless, less human
[25:47] we're more and more headless, less human interrupt dependent, and able to trust
[25:50] interrupt dependent, and able to trust
[25:50] interrupt dependent, and able to trust the agent to do more and more complex
[25:52] the agent to do more and more complex
[25:52] the agent to do more and more complex things.
[25:58] I think vibe coding is a big part of
[25:58] I think vibe coding is a big part of what it takes to be successful here
[26:00] what it takes to be successful here
[26:00] what it takes to be successful here because there's a ton of guard rails
[26:01] because there's a ton of guard rails
[26:01] because there's a ton of guard rails that only affect my local development
[26:04] that only affect my local development
[26:04] that only affect my local development process. This code can be gross, but it
[26:06] process. This code can be gross, but it
[26:06] process. This code can be gross, but it brings into possibility
[26:09] brings into possibility
[26:09] brings into possibility this idea that I don't need to care
[26:11] this idea that I don't need to care
[26:12] this idea that I don't need to care about parts of the software production
[26:13] about parts of the software production
[26:13] about parts of the software production function. This lets me operate like a
[26:16] function. This lets me operate like a
[26:16] function. This lets me operate like a group tech lead or an org lead where I
[26:18] group tech lead or an org lead where I
[26:18] group tech lead or an org lead where I don't have visibility into every single
[26:21] don't have visibility into every single
[26:21] don't have visibility into every single engineer's activity on the keyboard. But
[26:23] engineer's activity on the keyboard. But
[26:23] engineer's activity on the keyboard. But the thing I care about are invariance
[26:26] the thing I care about are invariance
[26:26] the thing I care about are invariance interfaces whether or not the components
[26:28] interfaces whether or not the components
[26:28] interfaces whether or not the components that they're producing do what they say
[26:29] that they're producing do what they say
[26:30] that they're producing do what they say on the tin with high reliability.
[26:32] on the tin with high reliability.
[26:32] on the tin with high reliability. And uh with that I'll just leave it with
[26:34] And uh with that I'll just leave it with
[26:34] And uh with that I'll just leave it with uh y'all can go build things. These
[26:36] uh y'all can go build things. These
[26:36] uh y'all can go build things. These tools are fantastic. Go get after it. Uh
[26:39] tools are fantastic. Go get after it. Uh
[26:39] tools are fantastic. Go get after it. Uh I'll take some questions now. [applause]
[26:42] I'll take some questions now. [applause]
[26:42] I'll take some questions now. [applause] &gt;&gt; Thank you so much.
[26:44] &gt;&gt; Thank you so much.
[26:44] &gt;&gt; Thank you so much. Thank you.
[26:46] Thank you.
[26:46] Thank you. Pow, that hand went up really fast. Hold
[26:50] Pow, that hand went up really fast. Hold
[26:50] Pow, that hand went up really fast. Hold on one sec. Want to grab that one?
[26:54] on one sec. Want to grab that one?
[26:54] on one sec. Want to grab that one? &gt;&gt; Hello. Uh, great talk. Um, you mentioned
[26:58] &gt;&gt; Hello. Uh, great talk. Um, you mentioned
[26:58] &gt;&gt; Hello. Uh, great talk. Um, you mentioned earlier in your talk that you find that
[27:01] earlier in your talk that you find that
[27:01] earlier in your talk that you find that you don't need to shift left as much as
[27:04] you don't need to shift left as much as
[27:04] you don't need to shift left as much as before. You stay more right. And I'm
[27:06] before. You stay more right. And I'm
[27:06] before. You stay more right. And I'm curious about that because uh isn't it
[27:09] curious about that because uh isn't it
[27:09] curious about that because uh isn't it better for agents um to see something in
[27:13] better for agents um to see something in
[27:13] better for agents um to see something in a lint rule rather than as uh review
[27:16] a lint rule rather than as uh review
[27:16] a lint rule rather than as uh review feedback for example like what what what
[27:18] feedback for example like what what what
[27:18] feedback for example like what what what do you mean by um staying more right and
[27:21] do you mean by um staying more right and
[27:21] do you mean by um staying more right and not shifting left? So I think once you
[27:24] not shifting left? So I think once you
[27:24] not shifting left? So I think once you kind of put these structures in place to
[27:26] kind of put these structures in place to
[27:26] kind of put these structures in place to surface these requirements to the models
[27:29] surface these requirements to the models
[27:29] surface these requirements to the models at the right time um it becomes pretty
[27:32] at the right time um it becomes pretty
[27:32] at the right time um it becomes pretty easy to rely on them for the most part
[27:34] easy to rely on them for the most part
[27:34] easy to rely on them for the most part to autodiscocover this stuff. Um, it is
[27:38] to autodiscocover this stuff. Um, it is
[27:38] to autodiscocover this stuff. Um, it is very often the case that our agents MD
[27:40] very often the case that our agents MD
[27:40] very often the case that our agents MD paints a picture of which guardrail
[27:42] paints a picture of which guardrail
[27:42] paints a picture of which guardrail files are relevant for which categories
[27:44] files are relevant for which categories
[27:44] files are relevant for which categories of changes backend working on the design
[27:47] of changes backend working on the design
[27:47] of changes backend working on the design system, these sorts of things where the
[27:49] system, these sorts of things where the
[27:49] system, these sorts of things where the models will just naturally page those
[27:51] models will just naturally page those
[27:51] models will just naturally page those sets of persona oriented guardrails into
[27:53] sets of persona oriented guardrails into
[27:53] sets of persona oriented guardrails into into context which means I very often
[27:57] into context which means I very often
[27:57] into context which means I very often just don't see patterns of misbehavior
[27:59] just don't see patterns of misbehavior
[27:59] just don't see patterns of misbehavior in that way. only if for example uh
[28:03] in that way. only if for example uh
[28:03] in that way. only if for example uh guardrails are commonly required over
[28:06] guardrails are commonly required over
[28:06] guardrails are commonly required over tasks that span 15 context windows and
[28:09] tasks that span 15 context windows and
[28:09] tasks that span 15 context windows and by then that context in those guardrail
[28:11] by then that context in those guardrail
[28:11] by then that context in those guardrail files has been autocompacted away then
[28:14] files has been autocompacted away then
[28:14] files has been autocompacted away then that's the sort of thing that I would
[28:15] that's the sort of thing that I would
[28:15] that's the sort of thing that I would use as a signal that okay this is the
[28:17] use as a signal that okay this is the
[28:17] use as a signal that okay this is the thing that I need to shift shift left
[28:19] thing that I need to shift shift left
[28:19] thing that I need to shift shift left further on but I I do recognize here
[28:22] further on but I I do recognize here
[28:22] further on but I I do recognize here that it is sort of predicated on making
[28:25] that it is sort of predicated on making
[28:25] that it is sort of predicated on making sure that like those autodiscocovery
[28:27] sure that like those autodiscocovery
[28:27] sure that like those autodiscocovery functions are things that are reliable
[28:33] Uh probably got time for one more here.
[28:33] Uh probably got time for one more here. &gt;&gt; Oh yes.
[28:35] &gt;&gt; Oh yes.
[28:35] &gt;&gt; Oh yes. &gt;&gt; Um is there a practical implementation
[28:38] &gt;&gt; Um is there a practical implementation
[28:38] &gt;&gt; Um is there a practical implementation of those of the harness you've just
[28:40] of those of the harness you've just
[28:40] of those of the harness you've just mentioned in terms of um some end to end
[28:44] mentioned in terms of um some end to end
[28:44] mentioned in terms of um some end to end u implementation of those um
[28:46] u implementation of those um
[28:46] u implementation of those um capabilities during before during and
[28:49] capabilities during before during and
[28:49] capabilities during before during and after
[28:50] after
[28:50] after &gt;&gt; I have started to bring some of these
[28:52] &gt;&gt; I have started to bring some of these
[28:52] &gt;&gt; I have started to bring some of these techniques to my open source uh work. Uh
[28:54] techniques to my open source uh work. Uh
[28:54] techniques to my open source uh work. Uh I uh used to long ago uh build a Ruby
[28:58] I uh used to long ago uh build a Ruby
[28:58] I uh used to long ago uh build a Ruby interpreter in Rust called Artichoke.
[29:00] interpreter in Rust called Artichoke.
[29:00] interpreter in Rust called Artichoke. There's a bunch of crates uh out of that
[29:02] There's a bunch of crates uh out of that
[29:02] There's a bunch of crates uh out of that work that I still actively maintain. Um
[29:05] work that I still actively maintain. Um
[29:05] work that I still actively maintain. Um probably the most interesting one for
[29:07] probably the most interesting one for
[29:07] probably the most interesting one for you to take a peek at is uh randt
[29:09] you to take a peek at is uh randt
[29:10] you to take a peek at is uh randt artichoke randmt. It's a sort of mercen
[29:12] artichoke randmt. It's a sort of mercen
[29:12] artichoke randmt. It's a sort of mercen twister implementation. Um been doing a
[29:15] twister implementation. Um been doing a
[29:15] twister implementation. Um been doing a lot of fun stuff exploiting automations
[29:18] lot of fun stuff exploiting automations
[29:18] lot of fun stuff exploiting automations in the codeex app to basically take my
[29:20] in the codeex app to basically take my
[29:20] in the codeex app to basically take my hands off the wheel for a ton of the
[29:21] hands off the wheel for a ton of the
[29:21] hands off the wheel for a ton of the maintenance tasks of this OSS work. I
[29:23] maintenance tasks of this OSS work. I
[29:23] maintenance tasks of this OSS work. I haven't quite gotten to putting those
[29:25] haven't quite gotten to putting those
[29:25] haven't quite gotten to putting those review agents in place yet, but it's
[29:26] review agents in place yet, but it's
[29:26] review agents in place yet, but it's coming.
[29:28] coming.
[29:28] coming. &gt;&gt; Any final questions?
[29:32] &gt;&gt; Any final questions?
[29:32] &gt;&gt; Any final questions? &gt;&gt; Nope. Okay. Uh, big round of applause to
[29:34] &gt;&gt; Nope. Okay. Uh, big round of applause to
[29:34] &gt;&gt; Nope. Okay. Uh, big round of applause to Ryan. Thank you so much.
[29:35] Ryan. Thank you so much.
[29:35] Ryan. Thank you so much. &gt;&gt; Thank you everyone.
