---
video_id: 7zZy1QTvokM
source_url: https://www.youtube.com/watch?v=7zZy1QTvokM
title: "Stop Prompting Claude. Use Karpathy's Method Instead."
channel: "Austin Marchese"
uploader_id: "@austin.marchese"
duration: 798
duration_human: "13:18"
published: 2026-06-09
language: en
transcription: captions
chapters:
  - { start: 0, title: "The Karpathy Method" }
  - { start: 28, title: "Layer 1" }
  - { start: 214, title: "Layer 2" }
  - { start: 528, title: "Layer 3" }
  - { start: 756, title: "One Thing to Focus On" }
tags: ["Karpathy", "Andrej Karpathy", "Claude", "Claude Code", "AI coding", "vibe coding", "agentic engineering", "prompt engineering", "how to use AI", "AI agents", "AI workflow", "AI productivity", "Boris Cherny", "AI Ascent 2026", "claude.md", "learn AI 2026", "Claude AI", "how to use Claude Code", "building with AI", "CLAUDE.md", "Claude skills", "Claude Code hooks", "Codex", "claude code tutorial", "claude cowork", "claude 2026"]
categories: ["Entertainment"]
fetched: 2026-06-13T10:35:27Z
---

# Stop Prompting Claude. Use Karpathy's Method Instead.

[0:01] I just listened to Andrej Karpathy speak
[0:01] I just listened to Andrej Karpathy speak at AISN 2026, and I learned something
[0:04] at AISN 2026, and I learned something
[0:04] at AISN 2026, and I learned something that I wasn't expecting. Almost everyone
[0:06] that I wasn't expecting. Almost everyone
[0:06] that I wasn't expecting. Almost everyone is prompting Claude wrong. So, I decided
[0:07] is prompting Claude wrong. So, I decided
[0:08] is prompting Claude wrong. So, I decided to dig deeper and see exactly how
[0:09] to dig deeper and see exactly how
[0:09] to dig deeper and see exactly how Karpathy, the former head of AI at
[0:11] Karpathy, the former head of AI at
[0:11] Karpathy, the former head of AI at Tesla, uses AI in 2026. And it turns out
[0:14] Tesla, uses AI in 2026. And it turns out
[0:14] Tesla, uses AI in 2026. And it turns out that Karpathy's method for building 10
[0:16] that Karpathy's method for building 10
[0:16] that Karpathy's method for building 10 times faster can be broken down into
[0:18] times faster can be broken down into
[0:18] times faster can be broken down into three simple layers. So, in today's
[0:20] three simple layers. So, in today's
[0:20] three simple layers. So, in today's video, I'll be breaking down each layer
[0:22] video, I'll be breaking down each layer
[0:22] video, I'll be breaking down each layer so that anybody can apply them. And then
[0:23] so that anybody can apply them. And then
[0:23] so that anybody can apply them. And then I'll show you the one thing that
[0:25] I'll show you the one thing that
[0:25] I'll show you the one thing that Karpathy said to focus on in the age of
[0:27] Karpathy said to focus on in the age of
[0:27] Karpathy said to focus on in the age of AI. So, layer one is the spec. AI models
[0:29] AI. So, layer one is the spec. AI models
[0:29] AI. So, layer one is the spec. AI models are incredibly smart, but they're still
[0:31] are incredibly smart, but they're still
[0:31] are incredibly smart, but they're still missing something. To showcase their
[0:33] missing something. To showcase their
[0:33] missing something. To showcase their current limitation, Karpathy explained a
[0:35] current limitation, Karpathy explained a
[0:35] current limitation, Karpathy explained a simple question AI will get wrong.
[0:37] simple question AI will get wrong.
[0:37] simple question AI will get wrong. &gt;&gt; I want to go to a car wash to wash my
[0:39] &gt;&gt; I want to go to a car wash to wash my
[0:39] &gt;&gt; I want to go to a car wash to wash my car, and it's 50 m away. Should I drive
[0:42] car, and it's 50 m away. Should I drive
[0:42] car, and it's 50 m away. Should I drive or should I walk? And state-of-the-art
[0:45] or should I walk? And state-of-the-art
[0:45] or should I walk? And state-of-the-art models today will tell you to walk
[0:46] models today will tell you to walk
[0:46] models today will tell you to walk because it's so close.
[0:48] because it's so close.
[0:48] because it's so close. &gt;&gt; At first, I actually didn't believe
[0:49] &gt;&gt; At first, I actually didn't believe
[0:49] &gt;&gt; At first, I actually didn't believe this, so I went to Claude, Gemini, Grok,
[0:51] this, so I went to Claude, Gemini, Grok,
[0:51] this, so I went to Claude, Gemini, Grok, and ChatGPT, asked them the same
[0:52] and ChatGPT, asked them the same
[0:52] and ChatGPT, asked them the same question, and they all gave me the same
[0:54] question, and they all gave me the same
[0:54] question, and they all gave me the same answer. And it reveals the whole
[0:55] answer. And it reveals the whole
[0:55] answer. And it reveals the whole foundation of this video. AI is
[0:57] foundation of this video. AI is
[0:57] foundation of this video. AI is brilliant at what can be measured, but
[1:00] brilliant at what can be measured, but
[1:00] brilliant at what can be measured, but for context-driven things like needing a
[1:02] for context-driven things like needing a
[1:02] for context-driven things like needing a car for a car wash, it has no signal to
[1:05] car for a car wash, it has no signal to
[1:05] car for a car wash, it has no signal to act on. So, how do you bridge this gap
[1:07] act on. So, how do you bridge this gap
[1:07] act on. So, how do you bridge this gap between your understanding and your
[1:08] between your understanding and your
[1:08] between your understanding and your contextual information and AI's
[1:10] contextual information and AI's
[1:10] contextual information and AI's computational power? That's where the
[1:11] computational power? That's where the
[1:11] computational power? That's where the spec comes in. And a spec is how you
[1:13] spec comes in. And a spec is how you
[1:13] spec comes in. And a spec is how you deliver your understanding to Claude in
[1:15] deliver your understanding to Claude in
[1:15] deliver your understanding to Claude in a format it can use. A term you may have
[1:17] a format it can use. A term you may have
[1:17] a format it can use. A term you may have heard is Claude's plan mode, which
[1:19] heard is Claude's plan mode, which
[1:19] heard is Claude's plan mode, which essentially can be used to help you
[1:20] essentially can be used to help you
[1:20] essentially can be used to help you create a plan before building anything.
[1:22] create a plan before building anything.
[1:22] create a plan before building anything. But Karpathy thinks that this is too
[1:24] But Karpathy thinks that this is too
[1:25] But Karpathy thinks that this is too high-level.
[1:25] high-level.
[1:25] high-level. &gt;&gt; I actually don't even like the plan
[1:27] &gt;&gt; I actually don't even like the plan
[1:27] &gt;&gt; I actually don't even like the plan mode. I I would
[1:28] mode. I I would
[1:28] mode. I I would I mean, obviously it's very useful, but
[1:29] I mean, obviously it's very useful, but
[1:30] I mean, obviously it's very useful, but I think there's something more general
[1:31] I think there's something more general
[1:31] I think there's something more general here where you have to work with your
[1:32] here where you have to work with your
[1:32] here where you have to work with your agent to design a spec that is very
[1:34] agent to design a spec that is very
[1:34] agent to design a spec that is very detailed.
[1:34] detailed.
[1:34] detailed. &gt;&gt; Now, Karpathy isn't telling you that
[1:36] &gt;&gt; Now, Karpathy isn't telling you that
[1:36] &gt;&gt; Now, Karpathy isn't telling you that plan mode is bad. What he's actually
[1:38] plan mode is bad. What he's actually
[1:38] plan mode is bad. What he's actually saying is you have to go deeper, work
[1:40] saying is you have to go deeper, work
[1:40] saying is you have to go deeper, work with these AI tools to design the actual
[1:42] with these AI tools to design the actual
[1:42] with these AI tools to design the actual spec. So, how do you create a spec that
[1:44] spec. So, how do you create a spec that
[1:44] spec. So, how do you create a spec that Claude can successfully use to build
[1:46] Claude can successfully use to build
[1:46] Claude can successfully use to build what you're trying to build? The first
[1:48] what you're trying to build? The first
[1:48] what you're trying to build? The first step is you have to uncover your goal.
[1:50] step is you have to uncover your goal.
[1:50] step is you have to uncover your goal. If you just say, "Create a end-of-month
[1:52] If you just say, "Create a end-of-month
[1:52] If you just say, "Create a end-of-month report," that's a task, but the actual
[1:54] report," that's a task, but the actual
[1:54] report," that's a task, but the actual goal is a conclusion you're trying to
[1:56] goal is a conclusion you're trying to
[1:56] goal is a conclusion you're trying to draw, the decision the report drives.
[1:59] draw, the decision the report drives.
[1:59] draw, the decision the report drives. And what the goal actually is is
[2:00] And what the goal actually is is
[2:00] And what the goal actually is is something AI will literally never be
[2:02] something AI will literally never be
[2:02] something AI will literally never be able to decide. So, to help you do this,
[2:04] able to decide. So, to help you do this,
[2:04] able to decide. So, to help you do this, we'll tell Claude to interview me to
[2:06] we'll tell Claude to interview me to
[2:07] we'll tell Claude to interview me to identify the goal of this project. This
[2:09] identify the goal of this project. This
[2:09] identify the goal of this project. This is the way to get the information out of
[2:10] is the way to get the information out of
[2:11] is the way to get the information out of you and into the spec. Now, step two is
[2:13] you and into the spec. Now, step two is
[2:13] you and into the spec. Now, step two is be agile with how you work. There are
[2:15] be agile with how you work. There are
[2:15] be agile with how you work. There are two methods of completing any task. The
[2:17] two methods of completing any task. The
[2:17] two methods of completing any task. The first is waterfall, and the other is
[2:19] first is waterfall, and the other is
[2:19] first is waterfall, and the other is agile. Waterfall is you take a big task
[2:22] agile. Waterfall is you take a big task
[2:22] agile. Waterfall is you take a big task and you complete the entire thing, and
[2:24] and you complete the entire thing, and
[2:24] and you complete the entire thing, and then you show the final product. Agile
[2:26] then you show the final product. Agile
[2:26] then you show the final product. Agile on the other hand is you break that same
[2:27] on the other hand is you break that same
[2:27] on the other hand is you break that same task into small buckets, and you show
[2:30] task into small buckets, and you show
[2:30] task into small buckets, and you show the result throughout the entire process
[2:32] the result throughout the entire process
[2:32] the result throughout the entire process to make sure you're going in the right
[2:33] to make sure you're going in the right
[2:33] to make sure you're going in the right direction. And people are extremely
[2:35] direction. And people are extremely
[2:35] direction. And people are extremely susceptible to using AI agents in a
[2:37] susceptible to using AI agents in a
[2:37] susceptible to using AI agents in a waterfall manner because they want to
[2:38] waterfall manner because they want to
[2:38] waterfall manner because they want to give them everything to do at once. The
[2:41] give them everything to do at once. The
[2:41] give them everything to do at once. The better move is agile specking. You want
[2:43] better move is agile specking. You want
[2:43] better move is agile specking. You want to have a tight scope, a clear
[2:45] to have a tight scope, a clear
[2:45] to have a tight scope, a clear checkpoint, you want to review the
[2:46] checkpoint, you want to review the
[2:46] checkpoint, you want to review the output, adjust it, and then repeat. To
[2:48] output, adjust it, and then repeat. To
[2:48] output, adjust it, and then repeat. To help with this, we'll tell Claude to
[2:49] help with this, we'll tell Claude to
[2:50] help with this, we'll tell Claude to bias towards smaller and more
[2:51] bias towards smaller and more
[2:51] bias towards smaller and more compartmentalized specs. Step three is
[2:53] compartmentalized specs. Step three is
[2:54] compartmentalized specs. Step three is you want to be precise and use your
[2:55] you want to be precise and use your
[2:55] you want to be precise and use your brain. The more precise you are, the
[2:57] brain. The more precise you are, the
[2:57] brain. The more precise you are, the less AI has to assume. And every
[2:59] less AI has to assume. And every
[2:59] less AI has to assume. And every assumption that AI makes is a chance for
[3:01] assumption that AI makes is a chance for
[3:01] assumption that AI makes is a chance for it to drift from the final product you
[3:03] it to drift from the final product you
[3:03] it to drift from the final product you actually want. And when you have AI
[3:05] actually want. And when you have AI
[3:05] actually want. And when you have AI create a spec for you, you have to use
[3:07] create a spec for you, you have to use
[3:07] create a spec for you, you have to use your brain to think critically about
[3:09] your brain to think critically about
[3:09] your brain to think critically about what that spec actually says. So, to
[3:11] what that spec actually says. So, to
[3:12] what that spec actually says. So, to help you use your brain, you can say
[3:13] help you use your brain, you can say
[3:13] help you use your brain, you can say "Make me verify key decisions explicitly
[3:16] "Make me verify key decisions explicitly
[3:16] "Make me verify key decisions explicitly to ensure nothing is missed." And when
[3:18] to ensure nothing is missed." And when
[3:18] to ensure nothing is missed." And when you put these three pieces together, we
[3:20] you put these three pieces together, we
[3:20] you put these three pieces together, we have a final prompt we can use in Claude
[3:22] have a final prompt we can use in Claude
[3:22] have a final prompt we can use in Claude to help create a tightly scoped,
[3:24] to help create a tightly scoped,
[3:24] to help create a tightly scoped, well-thought-out
[3:25] well-thought-out
[3:26] well-thought-out aligns with our actual goal. This is a
[3:27] aligns with our actual goal. This is a
[3:27] aligns with our actual goal. This is a process that I call modern engineering,
[3:29] process that I call modern engineering,
[3:29] process that I call modern engineering, which every successful person has to
[3:31] which every successful person has to
[3:31] which every successful person has to become. Now, layer two is the verifier.
[3:34] become. Now, layer two is the verifier.
[3:34] become. Now, layer two is the verifier. Layer two sits on top of the spec. This
[3:36] Layer two sits on top of the spec. This
[3:36] Layer two sits on top of the spec. This is the verification process. One of the
[3:38] is the verification process. One of the
[3:38] is the verification process. One of the most frustrating things about AI is
[3:40] most frustrating things about AI is
[3:40] most frustrating things about AI is reviewing and verifying the output. And
[3:42] reviewing and verifying the output. And
[3:42] reviewing and verifying the output. And unlike a human, it can't grasp
[3:44] unlike a human, it can't grasp
[3:44] unlike a human, it can't grasp non-measurable things. So, how can we
[3:47] non-measurable things. So, how can we
[3:47] non-measurable things. So, how can we help AI verify its own outputs? Well,
[3:49] help AI verify its own outputs? Well,
[3:49] help AI verify its own outputs? Well, first you need to understand the mental
[3:50] first you need to understand the mental
[3:50] first you need to understand the mental model behind this. And Karpathy explains
[3:53] model behind this. And Karpathy explains
[3:53] model behind this. And Karpathy explains it as animals versus ghosts. Here's him
[3:55] it as animals versus ghosts. Here's him
[3:55] it as animals versus ghosts. Here's him getting asked a question about this in a
[3:57] getting asked a question about this in a
[3:57] getting asked a question about this in a recent interview. And if it sounds
[3:58] recent interview. And if it sounds
[3:59] recent interview. And if it sounds confusing, don't worry, I will simplify
[4:00] confusing, don't worry, I will simplify
[4:00] confusing, don't worry, I will simplify it after.
[4:01] it after.
[4:01] it after. &gt;&gt; And the idea is that we're not building
[4:03] &gt;&gt; And the idea is that we're not building
[4:03] &gt;&gt; And the idea is that we're not building animals, we are summoning ghosts. Why
[4:05] animals, we are summoning ghosts. Why
[4:05] animals, we are summoning ghosts. Why does that framing matter? And what does
[4:07] does that framing matter? And what does
[4:07] does that framing matter? And what does it actually change about how you build
[4:09] it actually change about how you build
[4:09] it actually change about how you build and deploy and evaluate or even trust
[4:12] and deploy and evaluate or even trust
[4:12] and deploy and evaluate or even trust them?
[4:12] them?
[4:12] them? &gt;&gt; Yeah, I think the reason I wrote about
[4:14] &gt;&gt; Yeah, I think the reason I wrote about
[4:14] &gt;&gt; Yeah, I think the reason I wrote about this is because I'm trying to wrap my
[4:15] this is because I'm trying to wrap my
[4:15] this is because I'm trying to wrap my head around what these things are,
[4:16] head around what these things are,
[4:16] head around what these things are, right? Because if you have a good model
[4:18] right? Because if you have a good model
[4:18] right? Because if you have a good model of what they are or are not, then you're
[4:19] of what they are or are not, then you're
[4:19] of what they are or are not, then you're going to be more competent at uh using
[4:21] going to be more competent at uh using
[4:21] going to be more competent at uh using them. I think it's just um
[4:23] them. I think it's just um
[4:23] them. I think it's just um coming to terms with the fact that these
[4:24] coming to terms with the fact that these
[4:24] coming to terms with the fact that these things are not, you know, animal
[4:26] things are not, you know, animal
[4:26] things are not, you know, animal intelligences. Like if you yell at them,
[4:27] intelligences. Like if you yell at them,
[4:27] intelligences. Like if you yell at them, they're not going to work better or
[4:29] they're not going to work better or
[4:29] they're not going to work better or worse or doesn't have any impact. Um
[4:32] worse or doesn't have any impact. Um
[4:32] worse or doesn't have any impact. Um and uh
[4:33] and uh
[4:33] and uh it's all just kind of like these
[4:34] it's all just kind of like these
[4:34] it's all just kind of like these statistical simulation circuits. It's
[4:36] statistical simulation circuits. It's
[4:36] statistical simulation circuits. It's more just being suspicious of it and um
[4:38] more just being suspicious of it and um
[4:38] more just being suspicious of it and um figuring it out over time.
[4:39] figuring it out over time.
[4:39] figuring it out over time. &gt;&gt; Now, that's some gigabrain stuff, but
[4:41] &gt;&gt; Now, that's some gigabrain stuff, but
[4:41] &gt;&gt; Now, that's some gigabrain stuff, but let me simplify it. People, me and you,
[4:43] let me simplify it. People, me and you,
[4:43] let me simplify it. People, me and you, are used to interacting with people,
[4:45] are used to interacting with people,
[4:45] are used to interacting with people, which Karpathy is calling animals. These
[4:48] which Karpathy is calling animals. These
[4:48] which Karpathy is calling animals. These animals are driven by different
[4:49] animals are driven by different
[4:49] animals are driven by different motivators and emotions, which help
[4:51] motivators and emotions, which help
[4:51] motivators and emotions, which help produce the final product and output
[4:53] produce the final product and output
[4:53] produce the final product and output within a team setting. And if you say to
[4:55] within a team setting. And if you say to
[4:55] within a team setting. And if you say to a person, become an expert at SEO
[4:57] a person, become an expert at SEO
[4:57] a person, become an expert at SEO marketing in the next 14 days or you're
[4:59] marketing in the next 14 days or you're
[4:59] marketing in the next 14 days or you're fired, they're going to figure it out.
[5:01] fired, they're going to figure it out.
[5:01] fired, they're going to figure it out. That's because they have these intrinsic
[5:03] That's because they have these intrinsic
[5:03] That's because they have these intrinsic motivations. But AI is not that.
[5:05] motivations. But AI is not that.
[5:05] motivations. But AI is not that. Karpathy describes it as a ghost, but in
[5:07] Karpathy describes it as a ghost, but in
[5:07] Karpathy describes it as a ghost, but in my eyes that's a little too confusing,
[5:09] my eyes that's a little too confusing,
[5:09] my eyes that's a little too confusing, so throw it out the window. Instead,
[5:10] so throw it out the window. Instead,
[5:10] so throw it out the window. Instead, think of it like a robot librarian. If
[5:12] think of it like a robot librarian. If
[5:12] think of it like a robot librarian. If you ask it that same SEO question, the
[5:14] you ask it that same SEO question, the
[5:14] you ask it that same SEO question, the librarian will only suggest resources
[5:17] librarian will only suggest resources
[5:17] librarian will only suggest resources and answers based on the books in its
[5:19] and answers based on the books in its
[5:19] and answers based on the books in its library. If it doesn't have a book, it
[5:21] library. If it doesn't have a book, it
[5:21] library. If it doesn't have a book, it can't help you. And part of the
[5:22] can't help you. And part of the
[5:22] can't help you. And part of the challenge here is that the librarian
[5:24] challenge here is that the librarian
[5:24] challenge here is that the librarian doesn't know when it's missing a
[5:26] doesn't know when it's missing a
[5:26] doesn't know when it's missing a specific book. So, it may just
[5:28] specific book. So, it may just
[5:28] specific book. So, it may just confidently make something up. And
[5:29] confidently make something up. And
[5:29] confidently make something up. And that's what's happening when AI nails
[5:31] that's what's happening when AI nails
[5:31] that's what's happening when AI nails math and fumbles things with context.
[5:33] math and fumbles things with context.
[5:33] math and fumbles things with context. It's brilliant because the library has
[5:35] It's brilliant because the library has
[5:35] It's brilliant because the library has the clear answers. But if it doesn't,
[5:37] the clear answers. But if it doesn't,
[5:37] the clear answers. But if it doesn't, then it's confidently wrong or
[5:39] then it's confidently wrong or
[5:40] then it's confidently wrong or uncertain. Which means interacting with
[5:42] uncertain. Which means interacting with
[5:42] uncertain. Which means interacting with it like it's an animal, i.e. a human,
[5:44] it like it's an animal, i.e. a human,
[5:44] it like it's an animal, i.e. a human, doesn't help, right? Yelling at it,
[5:46] doesn't help, right? Yelling at it,
[5:46] doesn't help, right? Yelling at it, pleading, just saying, "Make this
[5:47] pleading, just saying, "Make this
[5:47] pleading, just saying, "Make this better." doesn't necessarily work.
[5:49] better." doesn't necessarily work.
[5:49] better." doesn't necessarily work. Really, the only lever you have, which
[5:50] Really, the only lever you have, which
[5:50] Really, the only lever you have, which most people don't even think to use, is
[5:53] most people don't even think to use, is
[5:53] most people don't even think to use, is the verification lever. Because by
[5:55] the verification lever. Because by
[5:55] the verification lever. Because by optimizing this, it makes it so that
[5:56] optimizing this, it makes it so that
[5:56] optimizing this, it makes it so that you're playing within the actual rules
[5:58] you're playing within the actual rules
[5:58] you're playing within the actual rules that the AI follows. So, how do you help
[6:00] that the AI follows. So, how do you help
[6:00] that the AI follows. So, how do you help AI verify the output so it's up to the
[6:02] AI verify the output so it's up to the
[6:02] AI verify the output so it's up to the standard you want? Well, there are three
[6:04] standard you want? Well, there are three
[6:04] standard you want? Well, there are three places to focus on. First, you want to
[6:06] places to focus on. First, you want to
[6:06] places to focus on. First, you want to set the evaluation criteria up front.
[6:08] set the evaluation criteria up front.
[6:08] set the evaluation criteria up front. Before Claude touches a single thing,
[6:10] Before Claude touches a single thing,
[6:10] Before Claude touches a single thing, whether that's technical or
[6:11] whether that's technical or
[6:11] whether that's technical or non-technical tasks, define what good
[6:13] non-technical tasks, define what good
[6:13] non-technical tasks, define what good looks like with precision. For example,
[6:16] looks like with precision. For example,
[6:16] looks like with precision. For example, a vague way to evaluate an output is,
[6:17] a vague way to evaluate an output is,
[6:17] a vague way to evaluate an output is, "Make this report look good." Whereas, a
[6:20] "Make this report look good." Whereas, a
[6:20] "Make this report look good." Whereas, a precise way would say, "The report must
[6:22] precise way would say, "The report must
[6:22] precise way would say, "The report must have three sections, each ends with a
[6:24] have three sections, each ends with a
[6:24] have three sections, each ends with a recommendation." And if you're making
[6:25] recommendation." And if you're making
[6:25] recommendation." And if you're making the connection, this is very similar to
[6:27] the connection, this is very similar to
[6:27] the connection, this is very similar to what we covered in layer one. The more
[6:28] what we covered in layer one. The more
[6:29] what we covered in layer one. The more precise you are up front, the less room
[6:30] precise you are up front, the less room
[6:30] precise you are up front, the less room Claude will have to make mistakes. To
[6:32] Claude will have to make mistakes. To
[6:32] Claude will have to make mistakes. To help enforce this, we'll add this to our
[6:34] help enforce this, we'll add this to our
[6:34] help enforce this, we'll add this to our verification Claude prompt. Outline the
[6:36] verification Claude prompt. Outline the
[6:37] verification Claude prompt. Outline the evaluation criteria you will use to
[6:38] evaluation criteria you will use to
[6:38] evaluation criteria you will use to ensure a high-quality final product. Be
[6:40] ensure a high-quality final product. Be
[6:40] ensure a high-quality final product. Be precise. The second step is use a second
[6:43] precise. The second step is use a second
[6:43] precise. The second step is use a second AI model as the critic. Think of this
[6:45] AI model as the critic. Think of this
[6:45] AI model as the critic. Think of this like a second robot librarian from a
[6:47] like a second robot librarian from a
[6:47] like a second robot librarian from a different library. You use that
[6:49] different library. You use that
[6:49] different library. You use that librarian to grade the output of the
[6:51] librarian to grade the output of the
[6:51] librarian to grade the output of the first librarian. This other librarian
[6:53] first librarian. This other librarian
[6:53] first librarian. This other librarian has a whole different set of books, and
[6:55] has a whole different set of books, and
[6:55] has a whole different set of books, and that may give them insight into why this
[6:57] that may give them insight into why this
[6:57] that may give them insight into why this first librarian is right or wrong. Now,
[6:59] first librarian is right or wrong. Now,
[6:59] first librarian is right or wrong. Now, a tactical way to do this, if you use
[7:01] a tactical way to do this, if you use
[7:01] a tactical way to do this, if you use Claude code, you can install the Codex
[7:03] Claude code, you can install the Codex
[7:03] Claude code, you can install the Codex plugin, which will allow you to directly
[7:05] plugin, which will allow you to directly
[7:05] plugin, which will allow you to directly ask Codex questions within your Claude
[7:07] ask Codex questions within your Claude
[7:07] ask Codex questions within your Claude code session. So, you could say
[7:09] code session. So, you could say
[7:09] code session. So, you could say something like, "If this turns into a
[7:10] something like, "If this turns into a
[7:10] something like, "If this turns into a complex build, run the final output by
[7:13] complex build, run the final output by
[7:13] complex build, run the final output by Codex to ensure both systems agree." And
[7:15] Codex to ensure both systems agree." And
[7:15] Codex to ensure both systems agree." And step three is pull external signal where
[7:18] step three is pull external signal where
[7:18] step three is pull external signal where possible. The question here is, how can
[7:19] possible. The question here is, how can
[7:19] possible. The question here is, how can you bring in additional context that
[7:21] you bring in additional context that
[7:21] you bring in additional context that will help you verify an output? Here are
[7:23] will help you verify an output? Here are
[7:23] will help you verify an output? Here are two concrete examples. Let's say you're
[7:25] two concrete examples. Let's say you're
[7:25] two concrete examples. Let's say you're deploying an app and you're not sure if
[7:26] deploying an app and you're not sure if
[7:26] deploying an app and you're not sure if it's successfully deployed. What you can
[7:28] it's successfully deployed. What you can
[7:28] it's successfully deployed. What you can do instead is connect your Claude
[7:29] do instead is connect your Claude
[7:29] do instead is connect your Claude session with your system where it's
[7:31] session with your system where it's
[7:31] session with your system where it's deployed, so it can verify that it has
[7:33] deployed, so it can verify that it has
[7:33] deployed, so it can verify that it has been deployed successfully. We are
[7:35] been deployed successfully. We are
[7:35] been deployed successfully. We are making a connection to pull external
[7:36] making a connection to pull external
[7:36] making a connection to pull external data to enhance our verification layer.
[7:40] data to enhance our verification layer.
[7:40] data to enhance our verification layer. And now, if it says that the deployment
[7:41] And now, if it says that the deployment
[7:41] And now, if it says that the deployment was successful, we know for certainty
[7:43] was successful, we know for certainty
[7:43] was successful, we know for certainty that it actually was. In a non-technical
[7:45] that it actually was. In a non-technical
[7:45] that it actually was. In a non-technical example, let's say you're working on a
[7:46] example, let's say you're working on a
[7:47] example, let's say you're working on a monthly report. You could bring in your
[7:48] monthly report. You could bring in your
[7:48] monthly report. You could bring in your historical reports to use as reference
[7:50] historical reports to use as reference
[7:50] historical reports to use as reference for the exact format that the final
[7:52] for the exact format that the final
[7:52] for the exact format that the final output should be in, pulling in data and
[7:54] output should be in, pulling in data and
[7:54] output should be in, pulling in data and empowering the verification process.
[7:56] empowering the verification process.
[7:56] empowering the verification process. Now, bringing in this concept with the
[7:57] Now, bringing in this concept with the
[7:57] Now, bringing in this concept with the first two points, combining this third
[7:59] first two points, combining this third
[7:59] first two points, combining this third point with the first two points, here is
[8:01] point with the first two points, here is
[8:01] point with the first two points, here is a prompt that you can run in Claude,
[8:02] a prompt that you can run in Claude,
[8:03] a prompt that you can run in Claude, which will help ensure that you are
[8:04] which will help ensure that you are
[8:04] which will help ensure that you are adding a proper evaluation layer where
[8:06] adding a proper evaluation layer where
[8:06] adding a proper evaluation layer where it makes sense. I can't stress how
[8:07] it makes sense. I can't stress how
[8:07] it makes sense. I can't stress how important this is. The creator of Claude
[8:09] important this is. The creator of Claude
[8:09] important this is. The creator of Claude code, Boris Cherney, said it best. If
[8:11] code, Boris Cherney, said it best. If
[8:11] code, Boris Cherney, said it best. If Claude has a feedback loop, it will two
[8:13] Claude has a feedback loop, it will two
[8:13] Claude has a feedback loop, it will two to three x quality of the final result.
[8:15] to three x quality of the final result.
[8:15] to three x quality of the final result. So, layer one and layer two are about
[8:16] So, layer one and layer two are about
[8:16] So, layer one and layer two are about creating specs and evaluating the
[8:18] creating specs and evaluating the
[8:18] creating specs and evaluating the output. The third layer, however, is
[8:20] output. The third layer, however, is
[8:20] output. The third layer, however, is where we build a foundation that can't
[8:21] where we build a foundation that can't
[8:21] where we build a foundation that can't be replicated. But, before we get to
[8:23] be replicated. But, before we get to
[8:23] be replicated. But, before we get to that, if this is your first video of
[8:25] that, if this is your first video of
[8:25] that, if this is your first video of mine, welcome to the channel. If it's
[8:26] mine, welcome to the channel. If it's
[8:26] mine, welcome to the channel. If it's your second or more, here is our
[8:28] your second or more, here is our
[8:28] your second or more, here is our anti-slop agreement. The visuals, the
[8:30] anti-slop agreement. The visuals, the
[8:30] anti-slop agreement. The visuals, the testing, the hours of research that went
[8:32] testing, the hours of research that went
[8:32] testing, the hours of research that went into this video, this is entirely built
[8:34] into this video, this is entirely built
[8:34] into this video, this is entirely built for humans, not for AI clunkers. So, all
[8:37] for humans, not for AI clunkers. So, all
[8:37] for humans, not for AI clunkers. So, all that I ask is that you subscribe as part
[8:38] that I ask is that you subscribe as part
[8:38] that I ask is that you subscribe as part of this agreement because it helps it
[8:39] of this agreement because it helps it
[8:39] of this agreement because it helps it reach more people so that I can keep
[8:41] reach more people so that I can keep
[8:41] reach more people so that I can keep making videos like this. Also, every
[8:43] making videos like this. Also, every
[8:43] making videos like this. Also, every couple of weeks, I give away a Claude
[8:44] couple of weeks, I give away a Claude
[8:44] couple of weeks, I give away a Claude Max subscription, so comment below with
[8:46] Max subscription, so comment below with
[8:46] Max subscription, so comment below with whatever you're building to enter. Layer
[8:48] whatever you're building to enter. Layer
[8:48] whatever you're building to enter. Layer three, the environment. So, layer one
[8:50] three, the environment. So, layer one
[8:50] three, the environment. So, layer one and layer two need somewhere to live,
[8:51] and layer two need somewhere to live,
[8:51] and layer two need somewhere to live, and that's layer three, which is the
[8:53] and that's layer three, which is the
[8:53] and that's layer three, which is the environment that you build in. Think of
[8:54] environment that you build in. Think of
[8:54] environment that you build in. Think of this layer as a workshop. The spec is a
[8:56] this layer as a workshop. The spec is a
[8:56] this layer as a workshop. The spec is a blueprint pinned to the wall, the
[8:58] blueprint pinned to the wall, the
[8:58] blueprint pinned to the wall, the verifier is the quality check station by
[9:00] verifier is the quality check station by
[9:00] verifier is the quality check station by the door, and then the environment is
[9:02] the door, and then the environment is
[9:02] the door, and then the environment is the workshop itself. You need to create
[9:04] the workshop itself. You need to create
[9:04] the workshop itself. You need to create the proper tooling and the proper system
[9:06] the proper tooling and the proper system
[9:06] the proper tooling and the proper system so that the whole thing can function at
[9:07] so that the whole thing can function at
[9:07] so that the whole thing can function at a high level. Now, the problem here is
[9:09] a high level. Now, the problem here is
[9:09] a high level. Now, the problem here is that most people use the workshop from
[9:10] that most people use the workshop from
[9:10] that most people use the workshop from scratch every time they use AI. And no,
[9:12] scratch every time they use AI. And no,
[9:12] scratch every time they use AI. And no, if you have a single chat with your
[9:14] if you have a single chat with your
[9:14] if you have a single chat with your entire conversation history, that is not
[9:16] entire conversation history, that is not
[9:16] entire conversation history, that is not what I'm talking about. So, how do you
[9:17] what I'm talking about. So, how do you
[9:17] what I'm talking about. So, how do you create a proper workspace that improves
[9:20] create a proper workspace that improves
[9:20] create a proper workspace that improves over time? First is you need to set up a
[9:22] over time? First is you need to set up a
[9:22] over time? First is you need to set up a proper Claude MD file. Every time you
[9:24] proper Claude MD file. Every time you
[9:24] proper Claude MD file. Every time you prompt Claude, your Claude.md file gets
[9:26] prompt Claude, your Claude.md file gets
[9:26] prompt Claude, your Claude.md file gets injected automatically. It's essentially
[9:28] injected automatically. It's essentially
[9:28] injected automatically. It's essentially the first thing that Claude reads to
[9:30] the first thing that Claude reads to
[9:30] the first thing that Claude reads to help determine how it should operate.
[9:31] help determine how it should operate.
[9:31] help determine how it should operate. For example, you can add to your Claude
[9:33] For example, you can add to your Claude
[9:33] For example, you can add to your Claude MD before building anything multi-step,
[9:35] MD before building anything multi-step,
[9:35] MD before building anything multi-step, include a verification plan. Now,
[9:37] include a verification plan. Now,
[9:37] include a verification plan. Now, verification is forced into every build,
[9:39] verification is forced into every build,
[9:39] verification is forced into every build, not something that you have to remember
[9:41] not something that you have to remember
[9:41] not something that you have to remember to say. This is just one of the ways
[9:42] to say. This is just one of the ways
[9:42] to say. This is just one of the ways that you can improve this Claude MD, and
[9:44] that you can improve this Claude MD, and
[9:44] that you can improve this Claude MD, and here's actually mine on the screen, and
[9:46] here's actually mine on the screen, and
[9:46] here's actually mine on the screen, and I'm going to call out a couple of
[9:47] I'm going to call out a couple of
[9:47] I'm going to call out a couple of sections. The first is I outline how
[9:49] sections. The first is I outline how
[9:49] sections. The first is I outline how this repo works. So, think of my repo as
[9:51] this repo works. So, think of my repo as
[9:51] this repo works. So, think of my repo as my workspace. It gives high-level to the
[9:53] my workspace. It gives high-level to the
[9:53] my workspace. It gives high-level to the details around it. I then tell it the
[9:55] details around it. I then tell it the
[9:55] details around it. I then tell it the custom skills and how they're routed,
[9:57] custom skills and how they're routed,
[9:57] custom skills and how they're routed, how to use them. I then outline the
[9:59] how to use them. I then outline the
[9:59] how to use them. I then outline the architecture of the training data or
[10:01] architecture of the training data or
[10:01] architecture of the training data or knowledge architecture so that the AI
[10:03] knowledge architecture so that the AI
[10:03] knowledge architecture so that the AI knows where to look for certain
[10:04] knows where to look for certain
[10:04] knows where to look for certain information. And then I have key working
[10:06] information. And then I have key working
[10:06] information. And then I have key working rules that it should follow no matter
[10:08] rules that it should follow no matter
[10:08] rules that it should follow no matter what. Make this your environment. It's
[10:10] what. Make this your environment. It's
[10:10] what. Make this your environment. It's your world, and AI is living in it. It
[10:12] your world, and AI is living in it. It
[10:12] your world, and AI is living in it. It should not feel like the other way
[10:13] should not feel like the other way
[10:13] should not feel like the other way around. The second step is you need to
[10:15] around. The second step is you need to
[10:15] around. The second step is you need to build your LLM knowledge base. Karpathy
[10:17] build your LLM knowledge base. Karpathy
[10:17] build your LLM knowledge base. Karpathy went viral for this concept on Twitter
[10:19] went viral for this concept on Twitter
[10:19] went viral for this concept on Twitter that he calls his LLM knowledge base.
[10:21] that he calls his LLM knowledge base.
[10:21] that he calls his LLM knowledge base. And this is essentially creating a
[10:22] And this is essentially creating a
[10:22] And this is essentially creating a folder system on your machine that
[10:24] folder system on your machine that
[10:24] folder system on your machine that you're able to ingest your own training
[10:26] you're able to ingest your own training
[10:26] you're able to ingest your own training data in a way that makes it really easy
[10:28] data in a way that makes it really easy
[10:28] data in a way that makes it really easy for Claude to understand where
[10:30] for Claude to understand where
[10:30] for Claude to understand where information is. This is so important
[10:32] information is. This is so important
[10:32] information is. This is so important because your data is your moat. And this
[10:35] because your data is your moat. And this
[10:35] because your data is your moat. And this begins the process of building out your
[10:37] begins the process of building out your
[10:37] begins the process of building out your own intellectual data property. And step
[10:40] own intellectual data property. And step
[10:40] own intellectual data property. And step three is you have to start building out
[10:42] three is you have to start building out
[10:42] three is you have to start building out your skill set. A general rule of thumb
[10:43] your skill set. A general rule of thumb
[10:43] your skill set. A general rule of thumb that I have is if you plan on doing
[10:45] that I have is if you plan on doing
[10:45] that I have is if you plan on doing something repeatedly, create a custom
[10:47] something repeatedly, create a custom
[10:47] something repeatedly, create a custom skill for that. Think of this like a
[10:49] skill for that. Think of this like a
[10:49] skill for that. Think of this like a handbook to complete a specific task.
[10:50] handbook to complete a specific task.
[10:50] handbook to complete a specific task. And the more you use these skills, the
[10:52] And the more you use these skills, the
[10:52] And the more you use these skills, the better they'll become. I have a saying
[10:53] better they'll become. I have a saying
[10:53] better they'll become. I have a saying that I tell my team, the best way to
[10:55] that I tell my team, the best way to
[10:55] that I tell my team, the best way to find a leak in a hose is to run water
[10:57] find a leak in a hose is to run water
[10:57] find a leak in a hose is to run water through it. And it's the same with
[10:58] through it. And it's the same with
[10:58] through it. And it's the same with skills. The more you use them, the more
[11:00] skills. The more you use them, the more
[11:00] skills. The more you use them, the more you'll realize where you need to fix
[11:01] you'll realize where you need to fix
[11:01] you'll realize where you need to fix them and where they're really good. Keep
[11:03] them and where they're really good. Keep
[11:03] them and where they're really good. Keep running water through it and your
[11:05] running water through it and your
[11:05] running water through it and your system's going to compound over time.
[11:07] system's going to compound over time.
[11:07] system's going to compound over time. Step four is create rules for what the
[11:09] Step four is create rules for what the
[11:09] Step four is create rules for what the AI can and can't work on. Depending on
[11:11] AI can and can't work on. Depending on
[11:11] AI can and can't work on. Depending on the cost of getting something wrong, you
[11:13] the cost of getting something wrong, you
[11:13] the cost of getting something wrong, you need to establish different AI
[11:14] need to establish different AI
[11:14] need to establish different AI guardrails. So, here's how to think of
[11:16] guardrails. So, here's how to think of
[11:16] guardrails. So, here's how to think of this, right? So, take the Claude.md file
[11:18] this, right? So, take the Claude.md file
[11:18] this, right? So, take the Claude.md file that I mentioned earlier. You could add
[11:20] that I mentioned earlier. You could add
[11:20] that I mentioned earlier. You could add a line that says, "Don't make up
[11:21] a line that says, "Don't make up
[11:21] a line that says, "Don't make up information," but that's a guide, not
[11:23] information," but that's a guide, not
[11:23] information," but that's a guide, not necessarily a hard rule. So, at the end
[11:25] necessarily a hard rule. So, at the end
[11:25] necessarily a hard rule. So, at the end of the day, AI can still ignore it. So,
[11:27] of the day, AI can still ignore it. So,
[11:27] of the day, AI can still ignore it. So, if you have things that are critical not
[11:29] if you have things that are critical not
[11:29] if you have things that are critical not to get wrong, then you need to introduce
[11:31] to get wrong, then you need to introduce
[11:31] to get wrong, then you need to introduce rule-based guardrails to ensure that the
[11:34] rule-based guardrails to ensure that the
[11:34] rule-based guardrails to ensure that the AI can't bypass them. To help you
[11:36] AI can't bypass them. To help you
[11:36] AI can't bypass them. To help you visualize this, imagine you have a
[11:37] visualize this, imagine you have a
[11:37] visualize this, imagine you have a folder called "Important, Don't Edit."
[11:40] folder called "Important, Don't Edit."
[11:40] folder called "Important, Don't Edit." You could have a rule in Claude MD that
[11:41] You could have a rule in Claude MD that
[11:41] You could have a rule in Claude MD that says, "Don't touch anything in the
[11:43] says, "Don't touch anything in the
[11:43] says, "Don't touch anything in the /important, don't edit folder." And that
[11:45] /important, don't edit folder." And that
[11:45] /important, don't edit folder." And that might get you 80% of the way there, but
[11:48] might get you 80% of the way there, but
[11:48] might get you 80% of the way there, but it's essentially a request, not a rule.
[11:51] it's essentially a request, not a rule.
[11:51] it's essentially a request, not a rule. Claude can still touch those files. So,
[11:53] Claude can still touch those files. So,
[11:53] Claude can still touch those files. So, instead, you add a pre-tool use hook
[11:56] instead, you add a pre-tool use hook
[11:56] instead, you add a pre-tool use hook before Claude uses the write or edit
[11:58] before Claude uses the write or edit
[11:58] before Claude uses the write or edit tool, and it checks to see the file that
[12:00] tool, and it checks to see the file that
[12:00] tool, and it checks to see the file that it's trying to edit. Now, Claude
[12:02] it's trying to edit. Now, Claude
[12:02] it's trying to edit. Now, Claude literally can't make the edit, and it's
[12:04] literally can't make the edit, and it's
[12:04] literally can't make the edit, and it's enforced at the tool level, not the
[12:06] enforced at the tool level, not the
[12:06] enforced at the tool level, not the prompt level. And as a result of this,
[12:08] prompt level. And as a result of this,
[12:08] prompt level. And as a result of this, this is now a concrete rule that the
[12:10] this is now a concrete rule that the
[12:10] this is now a concrete rule that the agent can't bypass. So, with this in
[12:12] agent can't bypass. So, with this in
[12:12] agent can't bypass. So, with this in mind, bucket things into three groups.
[12:14] mind, bucket things into three groups.
[12:14] mind, bucket things into three groups. The first is always do. This is things
[12:16] The first is always do. This is things
[12:16] The first is always do. This is things that AI should run on autopilot. The
[12:18] that AI should run on autopilot. The
[12:18] that AI should run on autopilot. The second is ask first. So, this is
[12:20] second is ask first. So, this is
[12:20] second is ask first. So, this is anything that you want to double-check.
[12:22] anything that you want to double-check.
[12:22] anything that you want to double-check. And then the third is never do. These
[12:24] And then the third is never do. These
[12:24] And then the third is never do. These are lines that can't be crossed that are
[12:26] are lines that can't be crossed that are
[12:26] are lines that can't be crossed that are absolutely critical not to get wrong.
[12:28] absolutely critical not to get wrong.
[12:28] absolutely critical not to get wrong. Here's a prompt that brings all of these
[12:30] Here's a prompt that brings all of these
[12:30] Here's a prompt that brings all of these four points that I mentioned to help
[12:32] four points that I mentioned to help
[12:32] four points that I mentioned to help audit your system and create an
[12:33] audit your system and create an
[12:33] audit your system and create an optimized environment for Claude to
[12:35] optimized environment for Claude to
[12:35] optimized environment for Claude to interact with. That's the Karpathy
[12:36] interact with. That's the Karpathy
[12:36] interact with. That's the Karpathy method end-to-end, the spec, the
[12:38] method end-to-end, the spec, the
[12:38] method end-to-end, the spec, the verifier, and the environment. But
[12:40] verifier, and the environment. But
[12:40] verifier, and the environment. But there's a question that needs to be
[12:41] there's a question that needs to be
[12:41] there's a question that needs to be answered. What's the one thing that
[12:42] answered. What's the one thing that
[12:42] answered. What's the one thing that Karpathy thinks we should focus on in
[12:44] Karpathy thinks we should focus on in
[12:44] Karpathy thinks we should focus on in the age of AI? Here's him getting asked
[12:46] the age of AI? Here's him getting asked
[12:46] the age of AI? Here's him getting asked this in an interview.
[12:47] this in an interview.
[12:47] this in an interview. &gt;&gt; What still remains worth learning deeply
[12:50] &gt;&gt; What still remains worth learning deeply
[12:50] &gt;&gt; What still remains worth learning deeply when intelligence gets cheap as we move
[12:53] when intelligence gets cheap as we move
[12:53] when intelligence gets cheap as we move into the next eight era of AI?
[12:55] into the next eight era of AI?
[12:55] into the next eight era of AI? &gt;&gt; You can outsource your thinking, but you
[12:57] &gt;&gt; You can outsource your thinking, but you
[12:57] &gt;&gt; You can outsource your thinking, but you can't outsource your understanding. And
[12:58] can't outsource your understanding. And
[12:58] can't outsource your understanding. And the thing with everything we covered
[12:59] the thing with everything we covered
[12:59] the thing with everything we covered here is that the three layers are
[13:01] here is that the three layers are
[13:01] here is that the three layers are centered around your understanding of
[13:03] centered around your understanding of
[13:03] centered around your understanding of the bigger picture. You need to
[13:04] the bigger picture. You need to
[13:04] the bigger picture. You need to understand your goals and what's needed
[13:06] understand your goals and what's needed
[13:06] understand your goals and what's needed to direct AI to start working for you.
[13:08] to direct AI to start working for you.
[13:08] to direct AI to start working for you. Now, if you like this video, you will
[13:09] Now, if you like this video, you will
[13:09] Now, if you like this video, you will love this one where I do a deep dive
[13:11] love this one where I do a deep dive
[13:11] love this one where I do a deep dive into four Claude projects that you need
[13:13] into four Claude projects that you need
[13:13] into four Claude projects that you need to build today using these three layers.
[13:16] to build today using these three layers.
[13:16] to build today using these three layers. I'll see you over there. Peace.
