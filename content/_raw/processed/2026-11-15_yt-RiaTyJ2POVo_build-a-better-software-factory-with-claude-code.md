---
video_id: RiaTyJ2POVo
source_url: https://www.youtube.com/watch?v=RiaTyJ2POVo
title: "Build a Better Software Factory with Claude Code"
channel: "ZazenCodes"
uploader_id: "@ZazenCodes"
duration: 1942
duration_human: "32:22"
published: 2026-11-09
language: en-US
transcription: captions
chapters:
  - { start: 0, title: "<Untitled Chapter 1>" }
  - { start: 47, title: "Walk Through the Software Factory Mind Map" }
  - { start: 297, title: "Install the Factory in a Project" }
  - { start: 446, title: "Run the First Issue Through the Factory" }
  - { start: 870, title: "Run the Remaining Issues in Parallel" }
  - { start: 1674, title: "Review Tradeoffs and Next Steps" }
tags: []
categories: ["Education"]
fetched: 2026-11-15T17:09:52Z
---

# Build a Better Software Factory with Claude Code

[0:00] Today we're building a better software
[0:01] factory with Claude code. Thank you to
[0:04] Anthropic for sponsoring today's video.
[0:06] In the last video we built a basic
[0:08] software factory that can live inside of
[0:10] your project. People really seem to like
[0:13] this, like a lot. And there was also a
[0:16] lot of great feedback about how I can
[0:18] make that software factory better. So in
[0:20] today's video I did that. It uses GitHub
[0:23] issues, it submits PRs, it does multiple
[0:25] jobs in parallel from a single
[0:27] orchestrator, it uses Fable and Haiku.
[0:30] And it also has some more deterministic
[0:31] steps so that we're producing higher
[0:33] quality code from our factory. In the
[0:35] hands-on section of the video I'll start
[0:36] by showing you how to install this
[0:38] inside of your own project. I'll be
[0:40] doing that for one of my projects and
[0:42] demonstrating how to use it. I would
[0:44] highly encourage you to follow along
[0:45] with me in that part of the video.
[0:47] Here's the full mind map from the video
[0:49] and you can get this if you sign up for
[0:50] my email newsletter. I'll send you this
[0:52] image that you can use as reference. The
[0:54] big things going on here is this is the
[0:56] factory. I'm going to explain this soon.
[0:58] This is the prompt that use to install
[1:00] this in your own project. Here is my
[1:02] previous video on software factories. If
[1:04] you didn't watch that, what I did was I
[1:06] built a modular software factory that
[1:08] can live inside of your project. This is
[1:10] driven by Claude code sub-agents. If you
[1:12] want to learn more about the historical
[1:14] context of software factories, I still
[1:16] recommend watching the start of that
[1:18] video. Otherwise, this video will have
[1:20] everything you need. Here's what's new
[1:21] in V2. We have an intake step which uses
[1:24] Fable. We've got better routing using
[1:26] Haiku agents and this is more dynamic.
[1:29] We have more determinism built in so
[1:31] that we're doing more tests throughout
[1:33] the pipeline so that our software
[1:35] factory is more reliable. It runs on
[1:37] GitHub issues. This is the input and the
[1:39] output is a PR that gets pushed to our
[1:41] GitHub project. And we have better
[1:43] observability and cost and time per job
[1:46] and stuff like that. So to really
[1:47] understand that, let's look at the
[1:49] factory flow diagram. The input to our
[1:52] factory is a GitHub issue or multiple.
[1:54] It can take in many GitHub issues at
[1:56] once and process them all together. And
[1:59] these come into an intake step, which is
[2:01] Fable. This is a new step in this
[2:03] version of the factory where Fable
[2:04] thinks about if this is worth building.
[2:07] It scopes it out within the context of
[2:09] the project. It assesses it for risk,
[2:11] and it could potentially reject the
[2:13] feature or ask for more information from
[2:16] a human. Next, we're going into the spec
[2:18] writing and building step, and these are
[2:20] still two distinct steps, but I'll talk
[2:22] about in my closing thoughts for the
[2:23] video how these could probably be merged
[2:26] into a single step. From here, we're
[2:27] going to push our code through a gate.
[2:29] This is a new deterministic step, and
[2:31] the idea here is that we're really
[2:33] wanting to validate that the software
[2:34] factory is correct. And so, this is a
[2:36] cheap step where we can run this on the
[2:38] build and make sure it's looking good.
[2:40] And if it's not, we can go back to the
[2:42] builder, and then eventually, when we
[2:44] get through the gate, then we go to some
[2:46] reviewers. And so, we're going to do a
[2:47] code review, and this will be done with
[2:49] Haiku or Sonnet if it's deemed risky.
[2:52] And the risk comes back to this
[2:55] assessment which was made by Fable at
[2:56] the start of the pipeline. And I did
[2:58] this because I wanted to demonstrate how
[3:00] we can use agents inside of our software
[3:02] factory to inform later steps and to
[3:05] potentially cost optimize our software
[3:07] factory. Uh we're also going to go to
[3:08] other reviewers, and we'll do this all
[3:10] in parallel, and depending on the
[3:11] results of these, we can push the job
[3:13] back to the builder to fix. And once we
[3:15] get through the code review, then we go
[3:17] to an approver step, which decides if
[3:19] this can be merged automatically or if
[3:22] this needs human review in order to
[3:24] close out the loop on our software
[3:25] factory and implement this feature into
[3:27] the codebase. Now, having seen this
[3:29] factory flowchart, there's a whole
[3:31] section of stuff over here, but I want
[3:33] to get to this later in the video. This
[3:35] is more details around the how the
[3:36] system works. Right now, I want to focus
[3:38] on this, which is how to actually use
[3:41] this system with Claud code. We start
[3:43] with an orchestrator, and the
[3:44] orchestrator is a Claud code session
[3:46] that I'm going to spin up, and inside of
[3:48] that session, I'm going to say factory
[3:50] run. From here, it will start spinning
[3:52] sub agents, background agents in Claud
[3:54] code that will be doing various tasks
[3:56] within our system. It also has a
[3:58] deterministic spine, and what this means
[4:00] is I have actual scripts, like
[4:02] checks.sh, this gate script, this route
[4:05] script. I have a jobs script. These are
[4:08] shell commands that are shipped with the
[4:10] factory. I'll show you these later in
[4:12] the video, and these are doing
[4:13] deterministic things to push our jobs
[4:15] through the the pipeline, through the
[4:16] actual factory. So, we have these
[4:18] commands: factory run, factory run n,
[4:22] where n is a number, like a specific
[4:25] GitHub issue that we want to process.
[4:27] And we can just pass anything we want in
[4:29] here. We can just pass any arbitrary
[4:31] string in order to do stuff within our
[4:33] factory context inside of our project.
[4:36] And this all comes with the skill that
[4:38] I'm going to show you how to install in
[4:39] the video. Another thing that comes
[4:41] along with this is a dashboard so that
[4:43] we can view everything as it moves
[4:44] through the factory. And the other
[4:46] important things to know are that we
[4:48] have concurrency built in here. So,
[4:49] we'll process up to three jobs at once,
[4:51] and this is a configuration setting,
[4:53] which you can change after you've
[4:55] installed the factory in your project.
[4:57] So, let's get started by installing the
[4:59] factory. So, this is the prompt that you
[5:01] can copy and paste into your own project
[5:03] in order to follow along with me in the
[5:05] demo. So, I'm just going to copy this,
[5:07] and I'm going to go over to my terminal.
[5:08] And I'm inside of a project called note
[5:11] wall app. Just a simple note
[5:13] application. I can sort of write stuff.
[5:15] That's it. I've also got this app on
[5:17] GitHub, and this is important for the
[5:18] issues and the pull requests, which will
[5:20] be a core component of our software
[5:22] factory. So, I'm going to spin up Claude
[5:24] Code, and we'll use Claude to install
[5:26] our software factory. And I'm just going
[5:28] to paste this in. So, it says, "Install
[5:30] this software factory in this project,
[5:32] and this is the reference repository."
[5:34] It's a link to my source code for this
[5:36] video. And here's that exact link. If
[5:38] you open it up, you'll see something
[5:39] like this, and you'll see that prompt is
[5:41] actually right in here in the source
[5:43] code. So, you can get this in the video
[5:45] description and find this link. You'll
[5:46] notice that we have this folder .claud.
[5:48] We also have this factory folder. Both
[5:51] of these are going to appear inside of
[5:52] your project after this is installed.
[5:54] Let me go ahead and run this.
[5:56] This just finished up, and let me show
[5:58] you what was installed. So, if I go into
[5:59] note wall app and look at this inside of
[6:01] Vim, the two main things we've added are
[6:03] this .claud folder, and inside of here I
[6:06] have a bunch of agents files. These are
[6:08] the sub agents, the descriptions of how
[6:10] our sub agents in the factory work. And
[6:13] we've got skills and inside of skills
[6:14] I've got one new skill installed which
[6:16] is factory and it has one file called
[6:18] skill dot MD which describes the entire
[6:21] behavior of the factory. But that's not
[6:23] all of the code that you just got. You
[6:25] also got this folder which is called
[6:27] factory and here's where we have all of
[6:29] the code dependency for the factory. The
[6:31] big things to pay attention to are the
[6:33] bin files. These are what are
[6:35] responsible for ingesting and pushing
[6:37] things through the factory as jobs. We
[6:39] have check dot SH which does
[6:41] deterministic checks like classic CICD
[6:44] stuff as stuff gets pushed through our
[6:46] factory. We have a configuration file
[6:48] where we can specify behavior of our
[6:50] factory and we have a dashboard file
[6:51] basically observe our factory. Now
[6:53] coming back up I want to show you this.
[6:55] So there's a bunch of stuff Claude says
[6:58] changed for NoteWall and there's a whole
[6:59] bunch of stuff of how the software
[7:02] factory that I provide the template was
[7:03] actually adapted to your project. And
[7:05] the big things are this one. Check dot
[7:07] SH is going to run your actual tests
[7:10] inside of your project. This line right
[7:12] here agents dot MD has a new software
[7:14] factory sections and let's look at that
[7:16] new section that was added. It looks
[7:18] like this. Software factory. So we're
[7:19] explicitly documenting how to use the
[7:22] software factory inside of our agents
[7:24] file. Now let's get out of this and I'm
[7:26] going to start a new session up here
[7:27] with Claude and I want to actually
[7:29] demonstrate our software factory in use.
[7:31] Now I'm on Opus 5.5 with low effort. And
[7:34] let's see what happens if I just try and
[7:36] run the factory right now. I'm going to
[7:38] say factory run. And we're checking.
[7:40] Factory bin job queue. We are running a
[7:43] script inside of our factory to see
[7:45] what's in the queue. And it says oh, it
[7:47] came back empty. There's nothing going
[7:49] on. So let's go over to GitHub and put
[7:51] something in our queue for the factory
[7:53] and you can see that I have a bunch of
[7:54] open issues. However, these don't have
[7:57] the right label on them. So they're not
[7:58] going to get picked up by the factory
[8:00] until we explicitly label them. This is
[8:03] just a safety measure that I shipped
[8:05] with the factory because the idea is
[8:07] many bit different people might be
[8:08] adding issues into your project, but you
[8:10] want to choose which ones get processed
[8:12] by your factory. Let's pick up just one
[8:14] issue to start with. I've got this one
[8:16] called dark mode, and I'm going to go to
[8:17] labels, and I'm going to add the factory
[8:19] label. If you don't see this, you can
[8:21] just create it. It won't exist for your
[8:23] project unless you create it yourself.
[8:25] And now that I've done that, I can see
[8:27] this label's been applied. So, I can go
[8:29] back to my factory, and if I run the
[8:31] exact same command again, now it'll pick
[8:33] that up and start processing it through
[8:35] the factory. And we can see it's
[8:37] creating a job, and it is in the intake
[8:39] stage now for this dark mode feature.
[8:43] That is now serving. So, we can see
[8:45] issue one, dark mode, is in the intake
[8:48] step. This is being processed by Fable,
[8:51] and I wanted Fable to do the first step
[8:53] of our factory because to me, that's
[8:55] just a really important step to
[8:57] understand what's happening in the
[8:58] context of our project. Next, we've
[9:00] moved into the spec writer. So, I can
[9:03] show you that if I click into this, we
[9:04] can get more information. We're going to
[9:06] see a bunch of different files being
[9:07] accumulated as the task gets pushed
[9:10] through the factory. We just saw spec
[9:12] got created, and this is what was
[9:14] created by the spec writer. But before
[9:16] that, we had Fable write this intake
[9:18] form, and Fable decided to accept it,
[9:21] and it decided it was low risk. It only
[9:23] touches the UI as a surface, and it has
[9:26] a little summary of all the sort of big
[9:28] things you'd want to know, and then a
[9:29] full agent log of like more information
[9:32] that Fable was thinking around this
[9:34] feature. And this is really important in
[9:35] a factory to understand what the agent
[9:37] was thinking as it pushed your thing
[9:39] through the factory. It's really
[9:40] important for debugging and analyzing
[9:42] the effectiveness of the factory over
[9:44] time just to keep all of this
[9:45] information around from your job. So,
[9:47] now we're in the builder phase. Let me
[9:48] come back to Claude, and let's see
[9:50] what's going on over here. I can
[9:51] actually see the builder as an agent
[9:53] down here, and this is a sub agent in
[9:56] Claude code. And what I can do is click
[9:57] enter and go into that. So, I can
[9:59] actually see what this sub agent is
[10:01] thinking, and I could steer it. What are
[10:03] you doing? Now, this level of
[10:05] interaction with the agent is kind of
[10:07] not really the point of the software
[10:08] factory. I'm going to talk more about
[10:10] that in my closing thoughts, but I just
[10:12] wanted to show you how you can do this
[10:13] with Cloud Code. Let's go back to the
[10:15] main agent. So, this is going to be our
[10:17] orchestrator, and in principle, this
[10:19] could spin up other jobs at the same
[10:20] time. Now, let's follow this one task
[10:23] all the way through. The build just
[10:24] finished, and we're seeing that now it's
[10:26] in the review phase. And this means that
[10:28] it passed the gate. The gate was this
[10:31] deterministic step that we had to go
[10:33] through, where we're running certain
[10:34] tests and linting and stuff like that.
[10:36] And I can show you that go back to
[10:38] Obsidian. This is the part that we just
[10:40] got through. So, we just went through
[10:42] the gate, and we're getting a green
[10:43] check mark on that. And now we're going
[10:45] through all of these guys. So, coming
[10:47] back to our terminal,
[10:49] and bringing this back up, we can see
[10:51] that's why the gate went green here.
[10:53] Now, we see the UX guy just approved, so
[10:55] this is done. We're just waiting on the
[10:57] code review and the UI review. And then
[10:59] we'll go through the rest of the
[11:01] pipeline. But, look at this, the code
[11:03] review just failed. We got orange for
[11:06] the code review. That means we're going
[11:08] to get kicked back to the builder phase.
[11:10] And let me just quickly show you that.
[11:12] So, now we're going to follow this
[11:13] route, and we're going to have to go
[11:15] back to the builder with some feedback,
[11:17] and then we'll have to get pushed
[11:18] through again. So, we're actually seeing
[11:20] this self-fixing recursive aspect of the
[11:22] pipeline now. And we can look at that.
[11:25] We can look at more information. So, let
[11:26] me come in here, and I'm going to click
[11:28] on the code, and the verdict was one
[11:31] readability gap. This reviewer was
[11:33] basically really being really picky
[11:35] about something, and it kicked it back
[11:37] because like how something was working.
[11:39] Now, notice how the code review is using
[11:41] haiku or only saw on it if it's
[11:44] determined to be risky. I'm going to
[11:46] come back to this later because it turns
[11:48] out that using models like haiku in this
[11:51] phase of the pipeline might not be such
[11:53] a good idea. These models aren't always
[11:56] able to understand the code as well as
[11:58] the builder. So, it can create an
[11:59] actually bad dynamic when you have code
[12:01] review happening by an agent that's not
[12:04] as intelligent as the builder agent. In
[12:06] any case, coming back here, we see that
[12:08] the UI has also failed. And so, now Now
[12:10] kicked back, and we're going to go
[12:12] through another round of reviews after
[12:14] we build pass our gate. We're going to
[12:16] have to get these guys to review it
[12:18] again based on the feedback that they've
[12:20] provided to the builder. And here they
[12:21] go. They're back into the next round of
[12:23] review. We can see this time the code is
[12:25] going green and hopefully the UI agent
[12:27] passes as well. Nice. It went green and
[12:30] we are in the approved phase. Now this
[12:32] approver is going to decide if it's can
[12:34] be automatically merged or if it needs
[12:37] human review before it merges. And I
[12:39] think this is a cool thing that our
[12:40] factory can do because it can allow for
[12:43] a lot more autonomous behavior. If it's
[12:45] a straightforward feature that can be
[12:47] merged without us looking, that saves
[12:49] human time. That's valuable and that's
[12:51] something I want my factory doing for
[12:53] me. And indeed it's done. So we can see
[12:55] we have a PR that was created for this
[12:57] and it's been merged. So this has
[12:59] actually been merged into our production
[13:01] code. Let me show you that over on
[13:02] GitHub. Here it is. It's called dark
[13:05] mode one. This was from the intake step.
[13:07] We actually just wrote some stuff in
[13:08] here 6 minutes ago. I opened a pull
[13:11] request and then I marked it as
[13:12] completed. So let me go to the PR. This
[13:15] is the one associated with that issue
[13:17] and I added a bunch of stuff. This is
[13:19] all the commits that our software
[13:20] factory was making and then down here
[13:22] we're saying pull request successfully
[13:24] merged and closed. Our system decided it
[13:26] didn't need my attention. It's something
[13:27] that could be automatically merged but
[13:29] we have the full history of how this
[13:30] worked inside of GitHub which I think is
[13:32] very powerful for observability. And if
[13:34] I go to the code, I can see that I
[13:36] merged a pull request. This was done a
[13:38] minute ago and that's now in the code
[13:40] base. Now let's pull these changes in
[13:42] from the remote. So if I say get status,
[13:44] I should see some files that have
[13:46] changed locally. And what we're seeing
[13:48] here are the files and folders that were
[13:51] added or modified when we installed the
[13:52] software factory itself. I never added
[13:55] and committed these. So let me do that
[13:56] now. All right. Adds as in code software
[13:58] factory and these are all the files that
[14:00] we were looking at earlier. You'll also
[14:02] notice that I'm on main right now. So
[14:04] I'm working on my main branch and now
[14:06] I'm going to pull in the remote changes
[14:08] from main. I'll just say get pull. I'm
[14:10] going to have to clean up some merges
[14:12] but okay, we did auto merging. So it's
[14:13] all good. There were some conflicts with
[14:15] the agents, but we handled it. So, now
[14:17] we pulled these changes in and you can
[14:18] see a bunch of changes to stuff like the
[14:20] style and the theme. This is for our
[14:22] dark mode feature. Now, let me show you
[14:24] that. I'll say npm run dev and let me
[14:25] show you this app again. So, here it is.
[14:27] Now, I have a dark mode going on by
[14:29] default. It's dark now. Okay. So, now
[14:32] that I've showed you how to take one
[14:33] issue and push it through our entire
[14:35] factory, I want to show you how to do
[14:37] this for many issues at once. Now, I've
[14:39] got four issues open in here. I'm going
[14:41] to grab all of them and I'm going to add
[14:43] the factory label to all of them at the
[14:45] same time. And now, all of these guys
[14:47] have the factory label. So, let me come
[14:49] back to Claude and we're going to
[14:50] process everything at once. Now, let me
[14:52] just come back here. If I run factory
[14:54] run, it's going to process everything
[14:56] together. But, I could also say factory
[14:58] run and then just give a single number
[15:00] and just process that issue. I want to
[15:02] demonstrate that right now. So, I'll
[15:04] just say factory run and let's just pick
[15:06] one issue. Issue number four is called
[15:08] different fonts. So, let me just say
[15:10] four. It's looking at the queue and
[15:12] that's reading all of these from GitHub
[15:15] and it's found the right one in take
[15:16] issue number four, different fonts. And
[15:19] now, it's processing that through our
[15:20] factory. I can check in on that and here
[15:23] it is. Different fonts is now in the
[15:25] intake step. So, Fables having a look at
[15:27] that. Now, let's process the rest. And
[15:29] because this session right here is the
[15:31] orchestrator, I can keep continuing
[15:33] using it and I can use this orchestrator
[15:35] to interact with existing jobs in our
[15:37] factory or I can use it to create new
[15:39] jobs. And that's what I want to do now.
[15:41] So, I'll just say factory run and this
[15:44] is going to process everything else.
[15:46] It's going to pull all of the issues and
[15:48] push them through our factory and we're
[15:49] going to see these all starting to
[15:50] appear in the intake step. There they
[15:53] are. Notice how we just have three
[15:55] things running. This is because we set
[15:56] our concurrency for our factory to
[15:58] three. What's the uh concurrency
[16:01] setting? Currency is three in
[16:02] factory.config.json.
[16:04] Now, let me show you some other new
[16:06] stuff that's in our factory. We're
[16:08] timing these jobs. So, I can see this
[16:10] dark mode job has a time of 8 minutes.
[16:13] That's how long it took to push through
[16:14] the whole factory. We're also providing
[16:16] a cost. So, this one says $3.40. It
[16:19] didn't actually cost me $3.40
[16:22] to push this through the factory. It was
[16:23] free for me. I just used my Claude plan.
[16:25] However, this gives us an idea of how
[16:28] expensive these jobs are when
[16:29] benchmarked against each other, and then
[16:31] we can use that to try and optimize our
[16:33] factory. We can try and make this more
[16:34] efficient by looking at the job cost and
[16:36] trying to push this down in certain
[16:38] ways. So, I thought that was an
[16:39] important addition to this factory. Now,
[16:41] let's look at what's going on. We have a
[16:43] job that's in the needs human. So, this
[16:45] thing is effectively unpaused. And
[16:47] because of that, we've now automatically
[16:49] started the intake for the final issue.
[16:52] This is called multiple walls. Now,
[16:54] let's focus on this step that needs
[16:56] human review. There's two ways that we
[16:58] can do this in our application. The
[17:00] first way is I could actually click on
[17:01] it, and now I can start to sort of look
[17:03] at it and examine these files which are
[17:05] being written durably to our factory.
[17:08] So, I can see that the build has been
[17:09] blocked, and there's this decision.md
[17:11] why the builder was blocked. This is not
[17:13] how I would inter- interface with the
[17:15] factory. I would just talk to Claude up
[17:17] here. This guy is the orchestrator. He's
[17:19] managing everything, but his chat is
[17:21] fairly free for me to talk to. Or what I
[17:23] could do is spin up a new Claude code
[17:25] instance inside the same project. And as
[17:27] long as I use the factory skill, I can
[17:29] just ask whatever I want. What happened
[17:31] with the different fonts task? I can see
[17:33] this needs a decision for me. What
[17:35] happened? Intake accepted the issue with
[17:37] a narrower scope. It doesn't really know
[17:39] what to do for font. Default to
[17:41] handwriting. It wants some input from
[17:42] me. Now, because this is a video and I
[17:44] don't really care, yeah, just do
[17:45] whatever you want. Let's get this going
[17:47] again. So, that should be able to push
[17:48] this task back along. I've basically
[17:50] made my decision, and now our software
[17:52] factory should pick this up, and you can
[17:54] see we've just added this feedback
[17:56] one.md. I can click in there, and it
[17:59] says, "Yeah, just do whatever you want.
[18:01] Let's get this going again." And now
[18:02] we'll see this job go somewhere, and
[18:04] here it is. It's back in the building
[18:06] phase. Meanwhile, our colored sticky
[18:08] notes is just waiting on the UI, and
[18:10] then this should This one should be
[18:11] built out, and the multiple walls has
[18:14] been called high. So, this is like a
[18:16] high-risk feature, and that's a label
[18:18] that Fable put on our features. These
[18:20] little labels are things that I added
[18:23] from the initial intake step. I'm
[18:25] getting Fable to decide and based on
[18:26] that information, it adapts the factory
[18:28] behavior as we push the job through.
[18:30] Check this out. For changing the display
[18:32] name, it has code, it has UX and UI, but
[18:35] there's no security reviewer on that.
[18:37] Whereas this guy does have a security
[18:39] reviewer and the reason was because this
[18:41] was a medium difficulty. Therefore, it
[18:43] was assigned a security review step.
[18:46] Whereas this guy was low, so he was not
[18:48] assigned a security review step. This is
[18:51] just a behavior because I wanted to
[18:53] illustrate how we can change and make
[18:55] our software factory dynamic.
[18:57] Effectively, a dynamic directed acyclic
[18:59] graph. And this can help with
[19:01] efficiencies of your factory. Again,
[19:04] I'll speak more about efficiencies and
[19:05] my thinking around that in my closing
[19:07] thoughts in the video. Now, let me clean
[19:09] up what's going on up here. I've got two
[19:11] Claude sessions going on. This guy on
[19:13] the right, I just used to interact with
[19:15] our factory, but I'm fine to spin that
[19:17] one down. I could just totally get rid
[19:18] of that. Nothing changes in our factory.
[19:21] But, if I was to try and kill this
[19:23] session, well, this has a bunch of sub
[19:24] agents associated with it. We also have
[19:26] a shell and this shell is the thing
[19:28] that's actually serving our dashboard.
[19:30] There's no reason Claude has to do that.
[19:32] I could have served it myself manually,
[19:34] but if I try and spin this guy down,
[19:37] see, I just pressed control C and
[19:38] actually all background agents stopped.
[19:40] So, all of these guys have now been just
[19:43] totally halted. That's not good. So,
[19:46] what I'm going to say is factory run.
[19:48] And what this should do is
[19:50] look at the current state. It's looking
[19:52] at the queue. So, it went back to
[19:53] GitHub. It's like, what's going on? It
[19:55] looks at the queue and now it should
[19:57] spin all these guys back up. So, in that
[19:58] sense, the factory is fairly durable.
[20:01] Now, I'm sure I just lost a little bit
[20:03] of work because whatever those sub
[20:05] agents were doing, we've now spun up new
[20:07] sub agents and you can see these guys
[20:09] all just started from scratch. So, any
[20:11] work that was currently in flight just
[20:13] got completely annihilated and we're
[20:14] we're restarting that. So, in
[20:16] particular, this UI step was currently
[20:18] ongoing and that got blown up and we
[20:20] restarted it. It's not a good idea to do
[20:22] that, but um the factory is pretty
[20:24] durable, right? I just showed you how we
[20:26] stopped it and we were able to spin it
[20:27] back up and now things are getting
[20:29] pushed through. And now I can see
[20:30] everything's accumulated here. It either
[20:32] needs review and then there's two that
[20:33] have finished. And looking at this in
[20:35] GitHub, now I can see we've got flag
[20:37] from our software factory on three
[20:39] issues. And if I go to the pull request,
[20:41] three open PRs for each of these and
[20:44] there's two closed ones. And in the
[20:46] source code itself, of course, we're
[20:47] going to see that that was pulled in.
[20:49] Merge pull request number seven, change
[20:51] display name. Now, coming back to our
[20:53] factory, and I just love this idea that
[20:55] we can come back to it with a very
[20:57] totally clean project and just run this
[20:59] factory command in order to get all the
[21:01] context from inside of here. What's
[21:03] going on with the different fonts? We
[21:05] need a call on this.
[21:07] So, let's see. The fonts is stuck in the
[21:09] factory rule, not the feature. It needs
[21:11] a call from you. All right, so this guy
[21:13] here, different fonts, this was blocked
[21:16] because of an issue with my software
[21:18] factory. So, I just fixed the factory. I
[21:20] told it hey, go fix yourself. This
[21:22] should have never been blocked. We
[21:24] should have been able to keep building
[21:25] this. When I wrote it up here,
[21:27] I just want to be real with you guys. I
[21:28] was like, also update V2 factory in
[21:30] Zazon code season 3. So, that means the
[21:32] factory you install will have this fix.
[21:35] Like, this should be fixed for you. So,
[21:36] this has got picked up and now it's
[21:38] getting tossed back to the builder
[21:39] phase. So, we will work through that
[21:41] one. Now, let's talk about the other
[21:43] ones. Now, since I've already loaded my
[21:44] factory, I'm just going to ask questions
[21:46] directly. How about issue number five?
[21:48] What's going on there? All right, now
[21:49] there's some noise going on because this
[21:51] other job's running, but this is what it
[21:53] said. There's a lot of stuff in here.
[21:54] I've got this skill. This is just my own
[21:56] skill. It's called TLDR. So, what my
[21:58] TLDR skill does is it just shortens the
[22:01] output of the agent. Okay, I trust you
[22:03] to handle this one properly. You can do
[22:05] that. Next, what's going on with issue
[22:07] number three, the colored sticky notes?
[22:09] The new color tester never runs because
[22:11] it skips server. May I send it back with
[22:13] move test and run color. Do that. Sounds
[22:15] good for issue number three. Now, these
[22:18] guys here appear to be needing human
[22:20] review, but I've already kicked these
[22:22] along. So, if I refresh this, I can see
[22:24] this one's actually changed. It's
[22:25] getting built now. The multiple walls is
[22:28] still here. What should we do about the
[22:30] multiple walls issue number five? Okay,
[22:34] so for issue number five, we're actually
[22:35] intentionally made it. We're waiting.
[22:37] We're waiting for these other tasks to
[22:39] finish. The orchestrator has some sort
[22:41] of shared understanding, right, of
[22:42] what's going on in the system and we're
[22:44] waiting on this until these guys have
[22:46] finished and then we're going to merge
[22:48] this PR in.
[22:49] That makes sense to me. And notice how
[22:51] we keep getting these TLDRs. That's from
[22:53] my skill, so I could just say this and
[22:55] I'll say, "Stop outputting TLDR." I'll
[22:57] leave a link to this and my other ones
[22:59] in the video description. If you like
[23:01] them, please leave me a star. Helps me
[23:03] out a lot on this channel and with my
[23:04] brand. And if you're enjoying this video
[23:06] on software factories, you can get my
[23:08] PDF guide if you sign up for my
[23:10] newsletter. This just has a structured
[23:12] summary of what we talked about in this
[23:14] video, along with links and installation
[23:16] commands. You can send this to your
[23:17] friends or use it yourself. This is my
[23:19] newsletter. I just send one email a
[23:21] week. And if you sign up for this, I'll
[23:22] also give you some other stuffs like my
[23:24] agentic engineer playbook. This just has
[23:27] my like philosophy on agentic
[23:29] engineering and basically this new age
[23:32] that we're going into as software
[23:33] engineers. Now, everything's done except
[23:35] for this last multiple wall. And what's
[23:37] going on with multiple walls? I'm going
[23:39] to get TLDR working on that. It's
[23:42] stalled. It waits on your sign-off for
[23:44] the wall format.
[23:46] One round to merge.
[23:48] Yep, let's do whatever you want and
[23:49] merge it in. We also have links here. I
[23:51] can click this link and open up the PR
[23:54] directly. Okay, I think it's worried
[23:56] about throwing out some data. This is
[23:57] just a test app, I don't care. Yeah,
[23:59] just get rid of the data right now. Just
[24:01] test data, it doesn't matter. I love
[24:02] this one. I love how it's like actually
[24:04] recording these. So, we have factory bin
[24:06] job feedback. This is a function in our
[24:08] factory that explicitly sets feedback
[24:11] from the user and we have tons of these
[24:13] functions. I want to show you these in
[24:15] in just a minute. We're about to get to
[24:16] this. Let me just show you the final
[24:18] version of the application. So, I'll
[24:20] pull all the changes in. So, here's our
[24:22] our thing. We can now change the color
[24:25] of the sticky notes. That's cool. This
[24:27] one will be red. Let's go with red.
[24:31] Yeah, nice. Okay. And there was also Oh,
[24:34] I can change my name. Okay, cool. Now,
[24:36] if I do new one, I'm talk now.
[24:40] Yeah, there he is. Okay. Go back to our
[24:42] mind map and sort of walk through these.
[24:45] So, the deterministic checks are handled
[24:46] by this checks.sh.
[24:49] This is something that checks and
[24:50] deterministically fails if we're not
[24:53] meeting the right
[24:54] things that we need in our project. If
[24:56] we're not passing the tests, and it's
[24:58] very simple. Look at this. It's a bash
[25:00] file, and it's going to run through, and
[25:02] it's going to run all these npm commands
[25:04] because we have an npm project. But if
[25:06] you have a different project, you'll be
[25:07] running different tests in here. So,
[25:09] we're doing a linting, we're doing a
[25:11] type check, we're doing npm test, and
[25:13] then we're running a build. We're
[25:14] actually building our project, making
[25:15] sure all of this works. If If something
[25:17] goes wrong here, we do not even get to
[25:20] the reviewers. It hasn't even made it
[25:21] that far because this gate is put in
[25:23] place right in front of them. So,
[25:25] job.json drives all of the stages. This
[25:28] is a file that's on your computer that
[25:30] lives and represents the job as it gets
[25:32] pushed through the factory. And this
[25:34] thing is only written It's only updated
[25:37] by factory bin job. This is not like a
[25:41] vibey thing that gets updated by Claude
[25:44] code. Claude code calls factory bin job
[25:47] in order to update this JSON file. And
[25:50] let me show you that. It'll be very
[25:52] obvious when you look at this. Let me
[25:53] look at job inside of here. And it says
[25:55] right at the top, "The only writer of
[25:57] factory jobs job ID job.json." We have
[26:01] all these different commands like job
[26:03] queue. This looks at the queue of what's
[26:05] going on. If I follow queue, we can kind
[26:07] of see
[26:08] probably This might be a bit messy, but
[26:10] we're going to be looking at GitHub. Do
[26:11] you see issues equals gh.json? This is
[26:14] looking at GitHub and seeing what's
[26:17] going on inside of GitHub. So, then
[26:18] there's job create, job advance, job
[26:21] merge. And this is what's responsible
[26:22] for pushing things through our pipeline,
[26:24] running this script. Let me show you the
[26:26] actual jobs. Now, we're not going to see
[26:28] those inside of here because they're
[26:30] being get ignored. If I go into factory
[26:33] and look at everything in here, we have
[26:35] a jobs folder. This is where the actual
[26:37] data of the stuff in our factory lives.
[26:40] You should know that this data just
[26:42] lives on your computer. This is being
[26:44] get ignored. It's not being got backed
[26:46] up to GitHub. So, if you wanted to
[26:47] persist this, you could build something
[26:49] in in order to persist this separately,
[26:51] and that's what I would do. I would
[26:52] build in something that saves this data
[26:54] to Google Cloud Storage, and I would
[26:55] just say, "Hey Claude, I want to save
[26:57] this stuff to Cloud Storage. Let's set
[26:59] up a workflow for doing that. It'll
[27:01] handle that for you." This is the data
[27:02] that we keep seeing in our factory,
[27:04] including round one, round two, round
[27:05] three. This is the data that if I look
[27:07] inside of here is populating all of
[27:09] these files right here. Um it's just
[27:11] coming from those markdown files that's
[27:13] on that's on my actual system. And I've
[27:15] got this job.json. So, this guy right
[27:17] here, this is the file that is being
[27:19] edited by those bin scripts. When it
[27:22] says only factory bin job writes it,
[27:25] this is the thing that is making our
[27:27] software factory durable and properly
[27:29] passing jobs through the life cycle of
[27:32] the factory. The big point is that this
[27:34] thing is worked on programmatically.
[27:35] Claude does not work on this itself.
[27:38] Claude runs functions in order to update
[27:40] this file. Hope that's clear. That's
[27:42] really important for how our factory is
[27:44] working. Right, we've pretty much
[27:45] covered everything. Thank you to
[27:47] Anthropic for sponsoring today's video.
[27:49] And if you're not using Claude Code yet,
[27:51] then you can click the link in the video
[27:52] description and sign up now. Let me
[27:54] share some closing thoughts on what
[27:55] we've built today and where I want to
[27:57] take this next. First of all, this is
[27:59] definitely an improvement on my software
[28:02] factory from the previous video. There's
[28:04] a lot of things that I thought through
[28:05] better, and I like how this one is
[28:07] working better than that previous one.
[28:09] However, it's also more complicated. And
[28:11] with complexity doesn't always come
[28:13] improvement. So, I would encourage you
[28:15] to look at this factory and say, "How
[28:16] could I actually simplify this a little
[28:18] bit for myself while still getting all
[28:20] the performance that that I want out of
[28:22] the factory?" Next thing I want to talk
[28:23] through is cost. So, we're tracking the
[28:25] cost or like the estimated cost if we
[28:27] were paying token prices. Again, we're
[28:30] not paying token prices, so that's
[28:32] something to keep in mind, but it's
[28:33] still a good benchmark that we can use
[28:35] to try and optimize the cost over time
[28:37] and compare the cost of different jobs.
[28:39] And what we might want to try and do is
[28:41] use cheaper models like Haiku at certain
[28:43] places in the pipeline. For example,
[28:45] maybe we could use Haiku in the reviewer
[28:48] phases. However, if we're doing this and
[28:50] now the reviewers are failing because
[28:52] they're using Haiku and they're just not
[28:54] really thinking very intelligently about
[28:55] the problem and then they're kicking
[28:57] work back to the builder, that could
[28:59] actually end us end up costing us more
[29:01] money. So, that's something I would I
[29:03] would be careful about doing. Um
[29:05] potentially the approver could be a
[29:06] Haiku agent. But, then as well, we're
[29:09] like, do we want to put the choice of
[29:11] approving this feature into our code
[29:13] base on Haiku? I don't know if I want to
[29:15] do that. And I really like how we're
[29:16] using GitHub issues and pull requests.
[29:19] And something cool that we could do
[29:20] would be to watch the performance
[29:22] metrics of our actual production system
[29:24] and then be pushing those things
[29:26] automatically into GitHub issues where
[29:28] they could then be ingested into the
[29:29] factory. So, if we wanted to basically
[29:32] bring in a layer of, you know,
[29:34] post-implementation monitoring, like
[29:36] post-production uh deployment monitoring
[29:39] in our actual system, we could do that
[29:41] through this exact factory, through the
[29:43] GitHub issues, like form factor. We can
[29:46] be getting other systems, any other
[29:48] system we have, to be pushing GitHub
[29:50] issues into our project, adding the
[29:52] factory label, and then it gets picked
[29:54] up here and pushed through our system.
[29:56] So, we don't actually need like extra
[29:58] layers in order to attach things like
[30:00] observability. That's pretty much
[30:02] already handled for us by the GitHub
[30:04] issues. Okay, the last thing I want to
[30:05] talk about is actually using this in
[30:08] production. So, this is the big
[30:10] complaint with software factories. It's
[30:11] like, okay, yeah, that's cool, but you'd
[30:13] be a a psycho to actually plug this into
[30:15] your real production system.
[30:17] And I would have to agree with you,
[30:19] right? This is a 30-minute video that
[30:22] you've watched about how software
[30:24] factories work, how you can build one
[30:25] for yourself. I'm not telling you that
[30:28] you should take the code that I've
[30:29] showed you in today and plug it into
[30:31] your production system and close your
[30:33] eyes and get your agents chugging
[30:35] through all of your all of your issues
[30:37] for you and building your application in
[30:39] in that [music] way. Um I do think it's
[30:41] something you could do in the way that I
[30:43] showed you how we're controlling it and
[30:45] we're sort of looking at it and we're
[30:46] checking how it goes. Yeah, sure. That's
[30:49] a that's a thing you could do. I think
[30:51] this is a thing you could start with and
[30:53] I think that actually software
[30:55] development in general will go to an
[30:57] abstraction layer that looks like this.
[30:59] That's less about coding agent harnesses
[31:01] like we're seeing them today like Claude
[31:03] um how Claude code works today but
[31:05] instead from a higher level like super
[31:07] Claude code where you're you're sort of
[31:09] managing above the agent harness level
[31:12] in the same type of way as we're seeing
[31:13] this video. So I think the concept of a
[31:15] software factory is very important to
[31:17] understand. I think what I'm showing you
[31:19] today could be the basis of something
[31:20] that would work in a production system
[31:23] um and I think that you just have to be
[31:25] very thoughtful about actually how that
[31:26] should should happen for you. Um and I
[31:29] and I'd love to hear your thoughts on
[31:30] that as well. So what's next for me with
[31:32] my software factory? Well, I'd love to
[31:34] hear in the comments ways that we you
[31:36] think this can be improved or modified
[31:38] but the big thing I'm thinking is how do
[31:40] we get this running in the cloud? Like I
[31:43] don't want to run this on my computer
[31:44] anymore. I want this just automatically
[31:46] running somewhere and I think the Claude
[31:48] agent SDK would be the way to go for
[31:50] this. So that's what I'm considering for
[31:52] my next video. Love to hear your
[31:54] thoughts on that and thank you for
[31:56] watching.
